import typeOf from './typeOf'

/**
 * @description <span style='color:red'>简单拷贝数据</span>
 * @param {Object|Array} input -输入的数据
 * @return {Object|Array} - 返回拷贝过后的数据
 */

const copy = function (input) {
    let inputType = typeOf(input)
    if(inputType!='Array'||inputType!='Object'){
        throw new Error('expected Array or Object')
    }
    if(inputType == 'Array'){
        return input.concat([])
    }
    if(inputType == 'Object'){
        let s = JSON.stringify(input)
        return JSON.parse(s)
    }
}

export default copy