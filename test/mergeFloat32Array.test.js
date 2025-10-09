import { mergeFloat32Arrays } from "../dist/stl.es"

describe("mergeFloat32Arrays", () => {
  it("合并两个非空数组", () => {
    const arr1 = new Float32Array([1.0, 2.0])
    const arr2 = new Float32Array([3.0, 4.0])
    const result = mergeFloat32Arrays(arr1, arr2)
    expect(result).toEqual(new Float32Array([1.0, 2.0, 3.0, 4.0]))
  })

  it("第一个数组为空时返回第二个数组副本", () => {
    const emptyArr = new Float32Array(0)
    const arr = new Float32Array([5.0, 6.0])
    const result = mergeFloat32Arrays(emptyArr, arr)
    expect(result).toEqual(new Float32Array([5.0, 6.0]))
    expect(result).not.toBe(arr) // 确保返回的是新数组
  })

  it("第二个数组为空时返回第一个数组副本", () => {
    const arr = new Float32Array([7.0, 8.0])
    const emptyArr = new Float32Array(0)
    const result = mergeFloat32Arrays(arr, emptyArr)
    expect(result).toEqual(new Float32Array([7.0, 8.0]))
    expect(result).not.toBe(arr) // 确保返回的是新数组
  })

  it("两个数组都为空时返回空数组", () => {
    const empty1 = new Float32Array(0)
    const empty2 = new Float32Array(0)
    const result = mergeFloat32Arrays(empty1, empty2)
    expect(result.length).toBe(0)
  })

  it("正确处理不同长度的数组", () => {
    const longArr = new Float32Array([9.0, 10.0, 11.0])
    const shortArr = new Float32Array([12.0])
    const result = mergeFloat32Arrays(longArr, shortArr)
    expect(result).toEqual(new Float32Array([9.0, 10.0, 11.0, 12.0]))
  })
})
