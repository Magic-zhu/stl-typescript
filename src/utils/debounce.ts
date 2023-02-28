import { typeOf } from "./typeOf"
import { now } from "../time/now"

/**
 * @description <span style='color:red'>防抖函数(wait时间内只能执行一次，若触发了 则重新计算时间)</span>
 * @param {Function} func - 待执行函数
 * @param {Number} wait - 防抖时间 ms为单位 
 * @param {Boolean} [first=true] - 可选参数 默认true true表示 取第一次触发 false 取最后一次触发
 * @veriion 1.0.0
 * @return {Function} - 返回可执行函数
 */
export const debounce = function (func: Function, wait: number, first: boolean = true):Function {
    if (!typeOf(func, 'Function')) {
        throw new Error('func expected function')
    }
    if (!typeOf(wait, 'Number')) {
        throw new Error('wait expected number')
    }
    let timeNow = 0,
        next = 0,
        timer = null
    return function (...args: any[]) {
        if (first) {
            timeNow = now()
            timeNow > next ? func.apply(this, ...args) : null
            next = now() + wait
        } else {
            if (timer) {
                clearTimeout(timer)
                timer = null
            }
            timer = setTimeout(() => {
                func.apply(this, ...args)
                timer = null
            }, wait)
        }
    }
}

