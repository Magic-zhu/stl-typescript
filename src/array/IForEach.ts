/**
 * @description 可以跳出的forEach
 * @param arr 数组
 * @param func 循环函数
 * @returns void
 */
export function IForEach<T>(arr: T[], func: (item: T, index: number) => void | false) {
  for (let i = 0; i < arr.length; i++) {
    const r = func(arr[i], i);
    if (r === false) {
      break;
    }
  }
}