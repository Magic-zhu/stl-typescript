/**
 * 截取指定字节位置的字符串
 * @param {String} value - 输入字符串
 * @param {Number} start - 开始位置
 * @param {Number} end  - 结束位置
 * @return {string}
 */
export const sliceByByte = function (
  value: string,
  start: number,
  end: number
): string {
  let bytes = 0;
  let result = "";
  for (let i = 0, n = value.length; i < n; i++) {
    let c = value.charCodeAt(i);
    if (bytes >= end && end != undefined) {
      break;
    }
    if (bytes >= start) {
      result = result + value[i];
    }
    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
      bytes += 1;
    } else {
      bytes += 2;
    }
  }
  return result;
};
