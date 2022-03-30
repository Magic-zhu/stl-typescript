/** 
 *  将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 *  @param {Array}   array - 需要处理的数组
 *  @param {number} size - 每个数组区块的长度
 *  @return {Array} - 返回一个包含拆分区块的新数组（相当于一个二维数组）。
 *  @version 1.0.0
*/
export const chunk = function (array:any [], size:number = 1):any []{
    let newArr = []
    let length = array.length;
    let arrSize = Math.floor(length / size);
    for (let i = 0; i < arrSize; i++) {
        let temp = [];
        for (let j = 0; j < size; j++) {
            temp.push(array[i * size + j]);
        }
        newArr.push(temp)
    }
    if (length % size !== 0) newArr.push(array.slice(arrSize * size, length));
    return newArr
}