/**
 * @description
 * <span style='color:red;font-weight:bold'>检查某个数据的数据类型</span>
 * |输入值|输出
 * |---|---|
 * |123|Number
 * |'abcdef'|String
 * |true|Bollean
 * |[1, 2, 3, 4]|Array
 * |{name:'wenzi', age:25}|Object
 * |console.log('this is function')|Function
 * |undefined|Undefined
 * |null|Null
 * |new Date()|Date
 * |/^[a-zA-Z]{5,20}$/|RegExp
 * |new Error()|Error
 * @param {*} value - 输入值
 * @param {String} [type] - 需要核对的数据类型，不填的时候则返回数据类型
 * @return {Boolean|String} - 返回首字母大写的数据类型（ex：Number）或者布尔值
 * @version 1.0.0
 */
export const typeOf = function (value: any, type?: string) {
  let r = typeof value;
  if (r !== "object") {
    if (type) {
      return r.charAt(0).toUpperCase() + r.slice(1, r.length) == type;
    } else {
      return r.charAt(0).toUpperCase() + r.slice(1, r.length);
    }
  } else {
    if (type) {
      return (
        Object.prototype.toString
          .call(value)
          .replace(/^\[object (\S+)\]$/, "$1") == type
      );
    } else {
      return Object.prototype.toString
        .call(value)
        .replace(/^\[object (\S+)\]$/, "$1");
    }
  }
};
