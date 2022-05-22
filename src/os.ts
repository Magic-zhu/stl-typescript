export enum Os {
    'Windows' = 'Windows',
    'Mac' = 'Mac',
    'Linux' = 'Linux',
}

/**
 * 获取浏览器os
 * @export
 * @param {Navigator} navigator
 * @return {*}  {Os}
 */
export function os(navigator:Navigator):Os {
    if (navigator.userAgent.indexOf("Window") > 0) {
        return Os.Windows;
    } else if (navigator.userAgent.indexOf("Mac OS X") > 0) {
        return Os.Mac;
    } else if (navigator.userAgent.indexOf("Linux") > 0) {
        return Os.Linux;
    }
}