/**
 * @description 
 * <span style='color:red'>获取到目前为止的毫秒数</span>
 * @return {Number} - 返回到目前为止的毫秒数
 * @version 1.0.0
 */
export const now = function now (){
    let date = new Date()
    return date.getTime()
}