/**
 * @description
 * <span style='color:red'>获取到目前为止的毫秒数</span>
 * @return {Number} - 返回到目前为止的毫秒数
 * @version 1.0.0
 * @param type - ms:返回毫秒时间戳 s:返回秒的时间戳
 */
export const now = function (type?: string) {
    let date = new Date()
    if (!type || type === 'ms') {
        return date.getTime()
    } else if (type === 's') {
        return Math.round(date.getTime() / 1000)
    }
}