export declare class MiniLazy<T> {
    _value?: T;
    readonly _factory: () => T;
    constructor(factory: () => T);
    get value(): T;
}
