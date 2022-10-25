/**
 * 两个矩形是否相交
 * @description 判断两个矩形是否相交 - 投影计算法
 * @param x
 * @param y
 * @param width
 * @param height
 * @param x2
 * @param y2
 * @param width2
 * @param height2
 * @return boolean
 */
export const intersection_rectangle = (
  x: number,
  y: number,
  width: number,
  height: number,
  x2: number,
  y2: number,
  width2: number,
  height2: number
): boolean => {
  const centerX = x + width / 2;
  const centerY = y + height / 2;
  const centerX2 = x2 + width2 / 2;
  const centerY2 = y2 + height2 / 2;
  const x_axis_projection = Math.abs(centerX2 - centerX);
  const y_axis_projection = Math.abs(centerY2 - centerY);
  if (
    (width + width2) / 2 > x_axis_projection &&
    (height + height2) / 2 > y_axis_projection
  ) {
    return true;
  }
  return false;
};
