import { vec2, mat3 } from "gl-matrix";

/**
 * 对一个二维点相对于指定原点进行缩放变换
 *
 * @param {vec2} point - 需要缩放的二维点坐标 [x, y]
 * @param {vec2} transformOrigin - 缩放变换的中心点坐标 [xc, yc]
 * @param {number} scale - 缩放因子，大于1表示放大，小于1表示缩小
 * @returns {vec2} 返回缩放后的新二维点坐标 [newX, newY]
 *
 * @description
 * 该函数通过矩阵变换实现点的缩放，具体步骤如下：
 * 1. 首先将点平移到以缩放中心为原点的坐标系
 * 2. 然后应用缩放变换
 * 3. 最后将点平移回原始坐标系
 *
 * @example
 * const point = [1, 1];
 * const origin = [0, 0];
 * const scaledPoint = scaleFrom(point, origin, 2);
 * // 结果为 [2, 2]
 */
export const scaleFrom = (
  point: vec2,
  transformOrigin: vec2,
  scale: number
): vec2 => {
  const x = point[0];
  const y = point[1];
  const xc = transformOrigin[0];
  const yc = transformOrigin[1];
  // @ 先平移到缩放中心再平移回来
  const m1: mat3 = [1, 0, 0, 0, 1, 0, xc, yc, 1];
  const m2: mat3 = [1 / scale, 0, 0, 0, 1 / scale, 0, 0, 0, 1];
  const m3: mat3 = [1, 0, 0, 0, 1, 0, -xc, -yc, 1];
  let m4: mat3 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let m5: mat3 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  mat3.multiply(m4, m1, m2);
  mat3.multiply(m5, m4, m3);
  const r: vec2 = [0, 0];
  vec2.transformMat3(r, [x, y], m5);
  return [...r];
};
