import { vec2,mat3 } from "gl-matrix"

export const scaleFrom = (point:vec2,transformOrigin:vec2,scale:number):vec2 => {
    const x = point[0]
    const y = point[1]
    const xc = transformOrigin[0]
    const yc = transformOrigin[1]
    // @ 先平移到缩放中心再平移回来
    const m1: mat3 = [1, 0, 0, 0, 1, 0, xc, yc, 1]
    const m2: mat3 = [1 / scale, 0, 0, 0, 1 / scale, 0, 0, 0, 1]
    const m3: mat3 = [1, 0, 0, 0, 1, 0, -xc, -yc, 1]
    let m4: mat3 = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    let m5: mat3 = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    mat3.multiply(m4, m1, m2)
    mat3.multiply(m5, m4, m3)
    const r: vec2 = [0, 0]
    vec2.transformMat3(r, [x, y], m5)
    return [...r]
}