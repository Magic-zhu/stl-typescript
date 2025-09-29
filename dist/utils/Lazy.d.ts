declare type Factory<T> = () => T | Promise<T>;
interface LazyOptions {
    cacheError?: boolean;
    timeoutMs?: number;
}
export declare class Lazy<T> {
    private factory;
    private value?;
    private error?;
    private promise?;
    private settled;
    private readonly cacheError;
    private readonly timeoutMs?;
    constructor(factory: Factory<T>, options?: LazyOptions);
    get isValueCreated(): boolean;
    get hasError(): boolean;
    peek(): T | undefined;
    peekError(): unknown | undefined;
    preload(): Promise<T>;
    get(): Promise<T>;
    getOrThrow(): Promise<T>;
    tryGetSync(): T | undefined;
    reset(newFactory?: Factory<T>): void;
    fulfill(value: T): void;
    reject(err: unknown): void;
    private runWithTimeout;
}
export {};
