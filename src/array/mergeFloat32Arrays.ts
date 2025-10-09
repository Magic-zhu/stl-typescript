/**
 * 合并两个 Float32Array 数组，返回一个新的 Float32Array
 *
 * @param {Float32Array} array1 - 第一个要合并的 Float32Array 数组
 * @param {Float32Array} array2 - 第二个要合并的 Float32Array 数组
 * @returns {Float32Array} 返回合并后的新 Float32Array，包含 array1 和 array2 的所有元素
 *
 * @example
 * const arr1 = new Float32Array([1.0, 2.0]);
 * const arr2 = new Float32Array([3.0, 4.0]);
 * const merged = mergeFloat32Arrays(arr1, arr2);
 * // merged 将为 Float32Array [1.0, 2.0, 3.0, 4.0]
 */
export function mergeFloat32Arrays(
  array1: Float32Array,
  array2: Float32Array
): Float32Array {
  const mergedArray = new Float32Array(array1.length + array2.length)
  mergedArray.set(array1) // 复制第一个数组到起始位置
  mergedArray.set(array2, array1.length) // 从第一个数组末尾开始复制第二个数组
  return mergedArray
}
