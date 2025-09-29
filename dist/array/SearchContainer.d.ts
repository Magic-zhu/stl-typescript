export declare class SearchContainer extends Array {
    cacheMap: Map<any, any>;
    constructor(...args: any[]);
    search(ukey: any): void;
    buildIndex(key: string): void;
}
