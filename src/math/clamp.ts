/**
 * 数值限定函数
 * @param value - 需要被限制的数值
 * @param min - 最小值
 * @param max - 最大值
 * @returns {number}
 */
export function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value))
}
