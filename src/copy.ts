import { typeOf } from "./typeOf";

/**
 * @description <span style='color:red'>简单拷贝数据</span>
 * @param {Object|Array} input -输入的数据
 * @return {Object|Array} - 返回拷贝过后的数据
 * @version 1.0.1
 */

export const copy = function (input: any): any {
  let inputType = typeOf(input);
  if (inputType != "Array" && inputType != "Object") {
    throw new Error("expected Array or Object");
  }
  let s = JSON.stringify(input);
  const n = s;
  return JSON.parse(n);
};
