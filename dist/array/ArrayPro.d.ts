export declare class ArrayPro<T> {
    private _array;
    constructor(arr: T[]);
    get value(): T[];
    foreach(func: (item: T, index: number, self: this) => void | false): void;
    remove(item: T): void;
    removeByKey(key: string, value: any): void;
    empty(): void;
}
