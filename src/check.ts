/**
 * @param {*} value - 输入值
 * @param {String} type - 判断的种类
 * @description
 *  <span style='color:red;'>检查输入值是否符合某个条件</span>
 * |type可选值|说明
 * |---|---|
 * |phone|电话号码
 * |mail|邮箱
 * |idcard|身份证号
 * |account|匹配帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)
 * |number|数字 
 * @return {Bollean} - 返回布尔值
 * @version 1.0.0
 */
export const check = function (value:any, type:string):boolean {
    let reg:RegExp;
    switch (type) {
        case 'phone':
            reg = /^[1][3456789][0-9]{9}$/;
            break;
        case 'mail':
            reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-])+$/;
            break;
        case 'idcard':
            reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
            break;
        case 'account':
            reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
            break;
        case 'number': //数字
            reg = /^[0-9]*$/;
            break;
        default:
            return false
    }
    return reg.test(value)
}
