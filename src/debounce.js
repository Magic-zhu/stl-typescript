import typeOf from "./typeOf"
import now from "./now"

/**
 * @description <span style='color:red'>防抖函数</span>
 * @param {Function} func - 待执行函数
 * @param {Number} wait - 防抖时间 ms为单位
 * @param {Boolean} [first=true] - 可选参数 默认true true表示 取第一次触发 false 取最后一次触发
 * @veriion 1.0.0
 * @return {Function} - 返回可执行函数
 */

const debounce = function (func,wait,first) {
    if (!typeOf(func, 'Function')) {
        throw new Error('func expected function')
    }
    if (!typeOf(wait, 'Number')) {
        throw new Error('wait expected number')
    }
}

export default debounce