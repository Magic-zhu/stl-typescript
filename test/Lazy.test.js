import { Lazy } from "../dist/stl.es";

describe("Lazy", () => {
  beforeEach(() => {
    jest.clearAllTimers();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe("Basic functionality", () => {
    it("should create value lazily on first get", async () => {
      const factory = jest.fn(() => "test-value");
      const lazy = new Lazy(factory);

      expect(factory).not.toHaveBeenCalled();
      expect(lazy.isValueCreated).toBe(false);

      const result = await lazy.get();

      expect(factory).toHaveBeenCalledTimes(1);
      expect(result).toBe("test-value");
      expect(lazy.isValueCreated).toBe(true);
    });

    it("should cache value after first creation", async () => {
      const factory = jest.fn(() => "cached-value");
      const lazy = new Lazy(factory);

      const result1 = await lazy.get();
      const result2 = await lazy.get();

      expect(factory).toHaveBeenCalledTimes(1);
      expect(result1).toBe("cached-value");
      expect(result2).toBe("cached-value");
    });

    it("should work with async factories", async () => {
      const factory = jest.fn(async () => {
        await new Promise((resolve) => setTimeout(resolve, 100));
        return "async-value";
      });
      const lazy = new Lazy(factory);

      const promise = lazy.get();
      jest.advanceTimersByTime(100);
      const result = await promise;

      expect(result).toBe("async-value");
      expect(lazy.isValueCreated).toBe(true);
    });
  });

  describe("Concurrent access", () => {
    it("should share same promise for concurrent calls", async () => {
      let callCount = 0;
      const factory = jest.fn(async () => {
        callCount++;
        await new Promise((resolve) => setTimeout(resolve, 100));
        return `value-${callCount}`;
      });
      const lazy = new Lazy(factory);

      const promise1 = lazy.get();
      const promise2 = lazy.get();
      const promise3 = lazy.get();

      jest.advanceTimersByTime(100);
      const [result1, result2, result3] = await Promise.all([
        promise1,
        promise2,
        promise3,
      ]);

      expect(factory).toHaveBeenCalledTimes(1);
      expect(result1).toBe("value-1");
      expect(result2).toBe("value-1");
      expect(result3).toBe("value-1");
    });
  });

  describe("Error handling", () => {
    it("should cache errors by default", async () => {
      const error = new Error("Factory failed");
      const factory = jest.fn(() => {
        throw error;
      });
      const lazy = new Lazy(factory);

      await expect(lazy.get()).rejects.toThrow("Factory failed");
      await expect(lazy.get()).rejects.toThrow("Factory failed");

      expect(factory).toHaveBeenCalledTimes(1);
      expect(lazy.hasError).toBe(true);
      expect(lazy.peekError()).toBe(error);
    });

    it("should not cache errors when cacheError is false", async () => {
      let callCount = 0;
      const factory = jest.fn(() => {
        callCount++;
        if (callCount <= 2) {
          throw new Error(`Attempt ${callCount} failed`);
        }
        return "success";
      });
      const lazy = new Lazy(factory, { cacheError: false });

      await expect(lazy.get()).rejects.toThrow("Attempt 1 failed");
      await expect(lazy.get()).rejects.toThrow("Attempt 2 failed");
      const result = await lazy.get();

      expect(factory).toHaveBeenCalledTimes(3);
      expect(result).toBe("success");
      expect(lazy.isValueCreated).toBe(true);
    });

    it("should handle async factory errors", async () => {
      const factory = jest.fn(async () => {
        await new Promise((resolve) => setTimeout(resolve, 50));
        throw new Error("Async error");
      });
      const lazy = new Lazy(factory);

      const promise = lazy.get();
      jest.advanceTimersByTime(50);

      await expect(promise).rejects.toThrow("Async error");
      expect(lazy.hasError).toBe(true);
    });
  });

  describe("Timeout functionality", () => {
    it("should timeout after specified time", async () => {
      const factory = jest.fn(async () => {
        await new Promise((resolve) => setTimeout(resolve, 200));
        return "should-not-reach";
      });
      const lazy = new Lazy(factory, { timeoutMs: 100 });

      const promise = lazy.get();
      jest.advanceTimersByTime(100);

      await expect(promise).rejects.toThrow(
        "Lazy initialization timed out after 100 ms"
      );
      expect(lazy.hasError).toBe(true);
    });

    it("should cache timeout errors by default", async () => {
      const factory = jest.fn(async () => {
        await new Promise((resolve) => setTimeout(resolve, 200));
        return "value";
      });
      const lazy = new Lazy(factory, { timeoutMs: 100 });

      const promise1 = lazy.get();
      jest.advanceTimersByTime(100);
      await expect(promise1).rejects.toThrow("timed out");

      // Second call should use cached error
      await expect(lazy.get()).rejects.toThrow("timed out");
      expect(factory).toHaveBeenCalledTimes(1);
    });
  });

  describe("Utility methods", () => {
    it("should peek value when available", async () => {
      const lazy = new Lazy(() => "peek-value");

      expect(lazy.peek()).toBeUndefined();

      await lazy.get();

      expect(lazy.peek()).toBe("peek-value");
    });

    it("should peek error when available", async () => {
      const error = new Error("Peek error");
      const lazy = new Lazy(() => {
        throw error;
      });

      expect(lazy.peekError()).toBeUndefined();

      await expect(lazy.get()).rejects.toThrow();

      expect(lazy.peekError()).toBe(error);
    });

    it("should preload value", async () => {
      const factory = jest.fn(() => "preloaded");
      const lazy = new Lazy(factory);

      const result = await lazy.preload();

      expect(result).toBe("preloaded");
      expect(lazy.isValueCreated).toBe(true);
      expect(factory).toHaveBeenCalledTimes(1);
    });

    it("should return value synchronously with tryGetSync when available", async () => {
      const lazy = new Lazy(() => "sync-value");

      expect(lazy.tryGetSync()).toBeUndefined();

      await lazy.get();

      expect(lazy.tryGetSync()).toBe("sync-value");
    });

    it("should getOrThrow behave same as get", async () => {
      const lazy1 = new Lazy(() => "success");
      const lazy2 = new Lazy(() => {
        throw new Error("failure");
      });

      expect(await lazy1.getOrThrow()).toBe("success");
      await expect(lazy2.getOrThrow()).rejects.toThrow("failure");
    });
  });

  describe("Reset functionality", () => {
    it("should reset to initial state", async () => {
      const lazy = new Lazy(() => "original");

      await lazy.get();
      expect(lazy.isValueCreated).toBe(true);

      lazy.reset();

      expect(lazy.isValueCreated).toBe(false);
      expect(lazy.hasError).toBe(false);
      expect(lazy.peek()).toBeUndefined();
    });

    it("should reset with new factory", async () => {
      const factory1 = () => "factory1";
      const factory2 = jest.fn(() => "factory2");
      const lazy = new Lazy(factory1);

      await lazy.get();
      expect(lazy.peek()).toBe("factory1");

      lazy.reset(factory2);
      const result = await lazy.get();

      expect(result).toBe("factory2");
      expect(factory2).toHaveBeenCalledTimes(1);
    });

    it("should reset error state", async () => {
      const lazy = new Lazy(() => {
        throw new Error("error");
      });

      await expect(lazy.get()).rejects.toThrow();
      expect(lazy.hasError).toBe(true);

      lazy.reset(() => "success");
      const result = await lazy.get();

      expect(result).toBe("success");
      expect(lazy.hasError).toBe(false);
    });
  });

  describe("Fulfill and reject", () => {
    it("should fulfill with direct value", () => {
      const factory = jest.fn();
      const lazy = new Lazy(factory);

      lazy.fulfill("direct-value");

      expect(lazy.isValueCreated).toBe(true);
      expect(lazy.peek()).toBe("direct-value");
      expect(factory).not.toHaveBeenCalled();
    });

    it("should use fulfilled value on subsequent gets", async () => {
      const factory = jest.fn();
      const lazy = new Lazy(factory);

      lazy.fulfill("fulfilled");
      const result = await lazy.get();

      expect(result).toBe("fulfilled");
      expect(factory).not.toHaveBeenCalled();
    });

    it("should reject with direct error", () => {
      const factory = jest.fn();
      const error = new Error("Direct error");
      const lazy = new Lazy(factory);

      lazy.reject(error);

      expect(lazy.hasError).toBe(true);
      expect(lazy.peekError()).toBe(error);
      expect(factory).not.toHaveBeenCalled();
    });

    it("should throw rejected error on subsequent gets", async () => {
      const factory = jest.fn();
      const error = new Error("Rejected error");
      const lazy = new Lazy(factory);

      lazy.reject(error);

      await expect(lazy.get()).rejects.toThrow("Rejected error");
      expect(factory).not.toHaveBeenCalled();
    });
  });

  describe("Options combinations", () => {
    it("should work with both cacheError false and timeout", async () => {
      let attemptCount = 0;
      const factory = jest.fn(async () => {
        attemptCount++;
        await new Promise((resolve) => setTimeout(resolve, 150));
        if (attemptCount <= 1) {
          throw new Error(`Attempt ${attemptCount}`);
        }
        return "success";
      });

      const lazy = new Lazy(factory, {
        cacheError: false,
        timeoutMs: 100,
      });

      // First attempt should timeout
      const promise1 = lazy.get();
      jest.advanceTimersByTime(100);
      await expect(promise1).rejects.toThrow("timed out");

      // Second attempt should also timeout (different error)
      const promise2 = lazy.get();
      jest.advanceTimersByTime(100);
      await expect(promise2).rejects.toThrow("timed out");

      expect(factory).toHaveBeenCalledTimes(2);
    });
  });
});
