import typefOf from "./typeOf"
import copy from "./copy"
/**
 * @class <span style='color:red'>简单观察者</span>
 */

class Observer {
    /**
     * @param {Array} queue - 内部的事件队列
     */
    constructor(){
        this.queue = []
    }
    /**
     * @description - 增加通知对象
     * @param {Function} func - 需要执行的函数
     */

    add(func){
        if(!typefOf(func,'Function')){
            throw new Error('expected function')
        }
        let ifHad = this.queue.includes(func)
        !ifHad?this.queue.push(func):null
    }

    /**
     * @description - 移除通知对象
     * @param {*} func 
     */
    remove(func){
        if(!typefOf(func,'Function')){
            throw new Error('expected function')
        }
        let index = this.queue.indexOf(func)
        this.queue[index] = null;
    }

    /**
     * 通知
     * @param  {...any} args - 传入的参数 
     */
    notify(...args){
        let array_temp = copy(this.queue)
        this.queue.forEach((item,index)=>{
            if(item===null){
                array_temp.splice(index,1)
            }else{
                item.call(this,...args)
            }
        })
        this.queue = array_temp
    }
}

export default Observer