
/**
 * @description <span style='color:red'>判断当前浏览器环境是苹果还是安卓 主要用于移动端hack</span>
 * @version 1.0.0
 * @returns {String|Undefined} - 返回 'ios' 或者 'android' 都不是的时候返回 undefined
 */

export const IosOrAndroid = function (): string | undefined {
    if (typeof navigator == 'undefined') {
        throw new Error('Is not currently a browser environment')
    }
    const u = navigator.userAgent
    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
    const isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    if (isIos) {
        return 'ios'
    }
    if (isAndroid) {
        return 'android'
    }
    return undefined
}