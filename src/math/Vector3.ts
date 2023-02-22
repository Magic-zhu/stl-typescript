export class Vector3 {
  x: number
  y: number
  z: number
  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.x = x
    this.y = y
    this.z = z
  }

  /**
   * @description set the value, but you can only set one ex: set({x:0})
   * @param {*} { x, y, z }
   * @memberof Vector3
   */
  set({ x, y, z }) {
    if (x !== undefined) this.x = x
    if (y !== undefined) this.y = y
    if (z !== undefined) this.z = z
  }

  size(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
  }

  length(): number {
    return this.size()
  }

  clone(): Vector3 {
    return new Vector3(this.x, this.y, this.z)
  }

  copy(v: Vector3): Vector3 {
    this.x = v.x
    this.y = v.y
    this.z = v.z
    return this
  }

  /**
   * @description Calculate cross product between this and another vector
   * @param {Vector3} v
   * @return {*}  {Vector3}
   * @memberof Vector3
   */
  cross(v: Vector3): Vector3 {
    const ox = this.y * v.z - this.z * v.y
    const oy = this.z * v.x - this.x * v.z
    const oz = this.x * v.y - this.y * v.x
    return new Vector3(ox, oy, oz)
  }

  /**
   * @param {Vector3} v
   * @return {*}  {Vector3} return self
   * @memberof Vector3
   */
  add(v: Vector3): Vector3 {
    this.x += v.x
    this.y += v.y
    this.z += v.z
    return this
  }

  addScalar(s: number): Vector3 {
    this.x += s
    this.y += s
    this.z += s
    return this
  }

  addVectors(a: Vector3, b: Vector3): Vector3 {
    this.x = a.x + b.x
    this.y = a.y + b.y
    this.z = a.z + b.z
    return this
  }
}
