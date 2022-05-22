import {sliceByByte} from "../dist/helper.es";

test("sliceByByte('123hello酷儿',1)) should be '23hello酷儿'",()=>{
    expect(sliceByByte('123hello酷儿',1)).toBe('23hello酷儿')
})

test("sliceByByte('123hello酷儿',1)) should be '23'",()=>{
    expect(sliceByByte('123hello酷儿',1,3)).toBe('23')
})