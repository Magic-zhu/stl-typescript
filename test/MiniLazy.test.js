import { MiniLazy } from "../dist/stl.es";

describe("MiniLazy", () => {
  it("should not call factory function until value is accessed", () => {
    const mockFactory = jest.fn(() => "test value");
    const lazy = new MiniLazy(mockFactory);

    expect(mockFactory).not.toHaveBeenCalled();
  });

  it("should return the value from factory function when accessed", () => {
    const expectedValue = "hello world";
    const factory = () => expectedValue;
    const lazy = new MiniLazy(factory);

    const result = lazy.value;

    expect(result).toBe(expectedValue);
  });

  it("should call factory function only once even with multiple accesses", () => {
    const mockFactory = jest.fn(() => "cached value");
    const lazy = new MiniLazy(mockFactory);

    // Access value multiple times
    lazy.value;
    lazy.value;
    lazy.value;

    expect(mockFactory).toHaveBeenCalledTimes(1);
  });

  it("should return the same instance on multiple accesses", () => {
    const factory = () => ({ id: 1, name: "test" });
    const lazy = new MiniLazy(factory);

    const first = lazy.value;
    const second = lazy.value;

    expect(first).toBe(second);
  });

  it("should work with different value types", () => {
    // Test with number
    const numberLazy = new MiniLazy(() => 42);
    expect(numberLazy.value).toBe(42);

    // Test with object
    const objLazy = new MiniLazy(() => ({ key: "value" }));
    expect(objLazy.value).toEqual({ key: "value" });

    // Test with array
    const arrayLazy = new MiniLazy(() => [1, 2, 3]);
    expect(arrayLazy.value).toEqual([1, 2, 3]);

    // Test with boolean
    const boolLazy = new MiniLazy(() => true);
    expect(boolLazy.value).toBe(true);
  });

  it("should handle factory function that returns undefined", () => {
    const factory = () => undefined;
    const lazy = new MiniLazy(factory);

    expect(lazy.value).toBeUndefined();
  });

  it("should handle factory function that returns null", () => {
    const factory = () => null;
    const lazy = new MiniLazy(factory);

    expect(lazy.value).toBeNull();
  });

  it("should handle factory function that throws an error", () => {
    const errorMessage = "Factory error";
    const factory = () => {
      throw new Error(errorMessage);
    };
    const lazy = new MiniLazy(factory);

    expect(() => lazy.value).toThrow(errorMessage);
  });

  it("should re-throw error on subsequent accesses if factory throws", () => {
    const factory = jest.fn(() => {
      throw new Error("Factory error");
    });
    const lazy = new MiniLazy(factory);

    expect(() => lazy.value).toThrow("Factory error");
    expect(() => lazy.value).toThrow("Factory error");

    // Factory should be called multiple times since error prevents caching
    expect(factory).toHaveBeenCalledTimes(2);
  });
});
