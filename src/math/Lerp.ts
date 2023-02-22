import { Vector3 } from "./Vector3"
export const lerpVector = (a: Vector3, b: Vector3, alpha: number) => {
  const x = a.clone()
  const y = b.clone()
  // A + v*(B-A)
  return x.add(y.subVectors(y, x).multiplyScalar(alpha))
}

export const lerp = () => {}
