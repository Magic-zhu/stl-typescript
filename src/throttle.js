import typeOf from "./typeOf"
import now from "./now"

/**
 * @description <span style='color:red'>节流函数(wait时间内只能执行一次该函数)</span>
 * @param {Function} func - 需要节流的函数
 * @param {Number} wait - 等待时间 ms为单位
 * @param {Object} [options] - 可选参数
 * @veriion 1.0.0
 * @return {Function} - 返回可执行函数
 */

const throttle = function (func, wait) {
    if (!typeOf(func, 'Function')) {
        throw new Error('func expected function')
    }
    if (!typeOf(wait, 'Number')) {
        throw new Error('wait expected number')
    }
    let previous = 0;
    return function () {
        let timeNow = now();
        let context = this
        if (timeNow - previous >= wait) {
            func.apply(context, arguments);
            previous = timeNow;
        }
    }
}
export default throttle