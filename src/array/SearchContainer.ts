export class SearchContainer extends Array {
  cacheMap = new Map();

  constructor(...args: any[]) {
    super(...args);
  }

  search(ukey: any) {}

  /**
   * @description 建立数据索引
   * @param {string} key 根据哪个字段建立索引
   */
  buildIndex(key: string) {
    for (let i = 0; i < this.length; i++) {
      const item = this[i];
      const keyVal = item[key];
      if (keyVal) {
        this.cacheMap.set(keyVal, i);
      }
    }
  }
}
