export declare class ArrayPro<T> {
    private _array;
    constructor(arr: T[]);
    get value(): T[];
    set value(arr: T[]);
    foreach(func: (item: T, index: number, self: this) => void | false): void;
    remove(item: T): void;
    removeByKey(key: string, value: any): void;
    empty(): void;
    getVal(index: number): T;
    setValue(index: any, value: T): void;
}
