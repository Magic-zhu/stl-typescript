/**
 * 获取字符串的字节长度
 * @param {String} value -输入值
 * @return {Number} 输出长度 字节
 */
export const getStringByteLength = function (value: string): number {
    let str = value;
    let bytes = 0;
    for (let i = 0, n = str.length; i < n; i++) {
        let c = str.charCodeAt(i);
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            bytes += 1;
        } else {
            bytes += 2;
        }
    }
    return bytes
}