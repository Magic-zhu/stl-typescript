import {shuffle} from "../dist/helper.es";
test('乱序数组 shuffle',()=>{
    const a = shuffle([1,2,3,4,5])
    const b = shuffle([1,2,3,4,5])
    expect(a).not.toEqual(b)
})