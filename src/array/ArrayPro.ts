/**
 * @version 1.0.0
 */
export class ArrayPro<T> {
  private _array: T[] = [];
  constructor(arr: T[]) {
    this._array = arr;
  }

  get value() {
    return this._array;
  }

  set value(arr: T[]) {
    this._array = arr;
  }

  /**
   * @description 'foreach' likely function that can be interrupted (use return false)
   * @param func
   */
  foreach(func: (item: T, index: number, self: this) => void | false) {
    for (let i = 0; i < this.value.length; i++) {
      const r = func(this.value[i], i, this);
      if (r === false) {
        break;
      }
    }
  }

  // dropRight(count: number) {}

  // dropLeft(count: number) {}

  /**
   * Delete item
   * @param item
   */
  remove(item: T) {
    const index = this._array.findIndex((v) => v === item);
    if (index !== -1) {
      this._array.splice(index, 1);
    }
  }

  /**
   * Delete the obj by a key. Target must be an object;
   * @param key {string}
   * @param value {any}
   */
  removeByKey(key: string, value: any) {
    const index = this._array.findIndex((v) => v[key] === value);
    if (index !== -1) {
      this._array.splice(index, 1);
    }
  }

  empty() {
    this._array = [];
  }

  getVal(index: number) {
    if (index < 0 || index > this._array.length) return null;
    return this._array[index];
  }

  setValue(index, value: T) {
    if (index < 0 || index > this._array.length) {
      throw new Error("Index out of range");
    }
    this._array[index] = value;
  }
}
