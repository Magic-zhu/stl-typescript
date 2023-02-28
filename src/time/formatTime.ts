import { typeOf } from '../utils/typeOf'

/**
 * @description <span style='color:red'>将时间戳格式化成指定格式</span>
 * @param {number} input - 时间戳 
 * @param {string} type -  格式（yyyy-mm-dd,h:m:s,yyyy-mm-dd h:m:s）
 * @return {string} - 格式化后的文本
 * @version 1.0.0
 */

export const formatTime = function (input: number, type: string): string {
    if (typeOf(input, 'Number') === false) {
        throw new Error('expected number')
    }
    if (!type) {
        throw new Error('type is necessary')
    }
    let time = new Date()
    let result
    switch (type) {
        case 'yyyy-mm-dd':
            result = time.getFullYear() + '-' + addZero(time.getMonth()) + "-" + addZero(time.getDate())
            break
        case 'h:m:s':
            result = addZero(time.getHours()) + ":" + addZero(time.getMinutes()) + ":" + addZero(time.getSeconds())
            break
        case 'yyyy-mm-dd h:m:s':
            result = time.getFullYear() + '-' + addZero(time.getMonth()) + "-" + addZero(time.getDate()) + " " + addZero(time.getHours()) + ":" + addZero(time.getMinutes()) + ":" + addZero(time.getSeconds())
            break
    }
    return result
}

export function addZero(val: number | string) {
    val = val.toString()
    return val.length > 1 ? val : '0' + val
}