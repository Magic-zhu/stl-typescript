type Factory<T> = () => T | Promise<T>;

interface LazyOptions {
  // 是否缓存初始化错误。默认 true：下次 get 仍会抛相同错误。
  // 设为 false 时，失败不会缓存，下次 get 会重试。
  cacheError?: boolean;
  // 可选超时（毫秒）。若超时则拒绝，并根据 cacheError 决定是否缓存该错误。
  timeoutMs?: number;
}

export class Lazy<T> {
  private factory: Factory<T>;
  private value?: T;
  private error?: unknown;
  private promise?: Promise<T>;
  private settled = false;
  private readonly cacheError: boolean;
  private readonly timeoutMs?: number;

  constructor(factory: Factory<T>, options: LazyOptions = {}) {
    this.factory = factory;
    this.cacheError = options.cacheError ?? true;
    this.timeoutMs = options.timeoutMs;
  }

  // 是否已经成功初始化并缓存了值
  get isValueCreated(): boolean {
    return this.settled && this.error === undefined;
  }

  // 是否经历过失败
  get hasError(): boolean {
    return this.error !== undefined;
  }

  // 返回当前已缓存的值（若尚未创建则为 undefined）
  peek(): T | undefined {
    return this.value;
  }

  // 返回当前已缓存的错误（若无则为 undefined）
  peekError(): unknown | undefined {
    return this.error;
  }

  // 主动预热：触发初始化并返回 Promise<T>
  preload(): Promise<T> {
    return this.get();
  }

  // 获取值：可能返回同步值或 Promise（为了统一，返回 Promise）
  // 多次并发调用会共享同一次初始化
  async get(): Promise<T> {
    if (this.settled && this.error === undefined) {
      return this.value as T;
    }
    if (this.settled && this.error !== undefined) {
      // 发生过错误
      if (this.cacheError) {
        throw this.error;
      }
      // 不缓存错误则继续尝试重试
    }
    if (this.promise) {
      return this.promise;
    }

    const run = async () => {
      try {
        const result = await this.runWithTimeout(this.factory);
        this.value = result;
        this.error = undefined;
        this.settled = true;
        return result;
      } catch (err) {
        this.value = undefined;
        this.error = err;
        this.settled = true;
        if (!this.cacheError) {
          // 如果不缓存错误，则下次允许重试
          this.settled = false;
        }
        throw err;
      } finally {
        this.promise = undefined;
      }
    };

    this.promise = run();
    return this.promise;
  }

  // 获取值（若失败则抛出最后的错误）。若还未初始化，会触发初始化。
  async getOrThrow(): Promise<T> {
    return this.get();
  }

  // 若值已准备好则同步返回，否则返回 undefined（不触发初始化）
  tryGetSync(): T | undefined {
    if (this.isValueCreated) return this.value as T;
    return undefined;
  }

  // 重置缓存，可选传入新的工厂
  reset(newFactory?: Factory<T>): void {
    if (newFactory) {
      this.factory = newFactory;
    }
    this.value = undefined;
    this.error = undefined;
    this.settled = false;
    this.promise = undefined;
  }

  // 用新值直接满足（适合测试或热更新）
  fulfill(value: T): void {
    this.value = value;
    this.error = undefined;
    this.settled = true;
    this.promise = undefined;
  }

  // 让懒值进入失败态（适合测试或故障注入）
  reject(err: unknown): void {
    this.value = undefined;
    this.error = err;
    this.settled = true;
    this.promise = undefined;
  }

  private async runWithTimeout(fn: Factory<T>): Promise<T> {
    if (this.timeoutMs == null) {
      return await fn();
    }

    return await new Promise<T>((resolve, reject) => {
      let finished = false;
      const timer = setTimeout(() => {
        if (finished) return;
        finished = true;
        reject(
          new Error(`Lazy initialization timed out after ${this.timeoutMs} ms`)
        );
      }, this.timeoutMs);

      const complete =
        <R>(settle: (v: R) => void) =>
        (v: R) => {
          if (finished) return;
          finished = true;
          clearTimeout(timer);
          settle(v);
        };

      Promise.resolve().then(fn).then(complete(resolve), complete(reject));
    });
  }
}
