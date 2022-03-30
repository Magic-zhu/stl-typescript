
/**
 * @description <span style='color:red;font-weight:bold'>解析url对象</span>
 * @param {*} url - 要解析的url (xxxxxxx?xxxx=xxx&xxxx=xxxxx的隔式)
 * @return {Object} - 返回参数对象
 * @version 1.0.0 
 */

export const getQuery = function (url:string):any{
    let uri:string | string []= url.split('?')[1];
    uri = uri.split('&');
    let obj = {};
    uri.forEach(item=>{
        let t = item.split("=");
        obj[t[0]] = t[1]||null;
    })
    return obj
}

