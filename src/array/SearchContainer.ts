export class SearchContainer extends Array{

    cacheMap = new Map();

    constructor(...args: any[]) {
        super(...args);
    }

    search(key:any,value:any) {
        const r = this.touch(key);
        if(r){
            return r;
        }
    }

    touch(key){
        return this.cacheMap.get(key);
    }
}