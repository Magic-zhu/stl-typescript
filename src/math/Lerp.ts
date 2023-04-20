import { Vector3 } from "./Vector3"
import { typeOf } from "../utils/typeOf"

/**
 * @description 插值函数
 * @export
 * @template T
 * @param {T} A
 * @param {T} B
 * @param {number} alpha
 * @return {*}  {(T)}
 */
export function lerp<T>(A: T, B: T, alpha: number): any {
  if (typeOf(A) === "Number") {
    return lerpNumber(A, B, alpha)
  } else {
    return lerpVector3(A, B, alpha)
  }
}

export function lerpNumber(A: any, B: any, alpha: number): number {
  return A + (B - A) * alpha
}

/**
 * @description Vector3插值函数
 * @param a
 * @param b
 * @param alpha
 * @return Vector3
 */
export function lerpVector3(a: any, b: any, alpha: number): Vector3 {
  const x = a.clone()
  const y = b.clone()
  // A + v*(B-A)
  return x.add(y.subVectors(y, x).multiplyScalar(alpha))
}

export enum EasingFuncType {
  /** Simple step interpolation. */
  Step = "step",
  /** Sinusoidal in interpolation. */
  SinusoidalIn = "SinusoidalIn",
  /** Sinusoidal out interpolation. */
  SinusoidalOut = "SinusoidalOut",
  /** Sinusoidal in/out interpolation. */
  SinusoidalInOut = "SinusoidalInOut",
  /** Smoothly accelerates, but does not decelerate into the target.  Ease amount controlled by BlendExp. */
  EaseIn = "EaseIn",
  /** Immediately accelerates, but smoothly decelerates into the target.  Ease amount controlled by BlendExp. */
  EaseOut = "EaseOut",
  /** Smoothly accelerates and decelerates.  Ease amount controlled by BlendExp. */
  EaseInOut = "EaseInOut",
  /** Easing in using an exponential */
  ExpoIn = "ExpoIn",
  /** Easing out using an exponential */
  ExpoOut = "ExpoOut",
  /** Easing in/out using an exponential method */
  ExpoInOut = "ExpoInOut",
  /** Easing is based on a half circle. */
  CircularIn = "CircularIn",
  /** Easing is based on an inverted half circle. */
  CircularOut = "CircularOut",
  /** Easing is based on two half circles. */
  CircularInOut = "CircularInOut",
}

const InterpStep = (
  A: Vector3,
  B: Vector3,
  alpha: number,
  steps: number
): Vector3 => {
  if (steps <= 1 || alpha <= 0) {
    return A
  } else if (alpha >= 1) {
    return B
  }
  const NumIntervals = steps - 1
  const ModifiedAlpha = Math.floor(alpha * steps) / NumIntervals
  return lerpVector3(A, B, ModifiedAlpha)
}

function InterpSinIn<T>(A: T, B: T, alpha: number): T {
  const ModifiedAlpha = -1 * Math.cos(alpha * Math.PI) + 1
  return lerp(A, B, ModifiedAlpha)
}

function InterpSinOut<T>(A: T, B: T, alpha: number): T {
  const ModifiedAlpha = Math.sin(alpha * Math.PI)
  return lerp(A, B, ModifiedAlpha)
}

function InterpSinInOut<T>(A: T, B: T, alpha: number): T {
  const ModifiedAlpha =
    alpha < 0.5
      ? (InterpSinIn<number>(0, 1, alpha * 2) as number) * 0.5
      : (InterpSinOut<number>(0, 1, alpha * 2 - 1) as number) * 0.5 + 0.5
  return lerp(A, B, ModifiedAlpha)
}

function InterpEaseIn<T>(A: T, B: T, alpha: number, BlendExp: number = 2): T {
  const ModifiedAlpha = Math.pow(alpha, BlendExp)
  return lerp(A, B, ModifiedAlpha)
}

function InterpEaseOut<T>(A: T, B: T, alpha: number, BlendExp: number = 2): T {
  const ModifiedAlpha = 1 - Math.pow(1 - alpha, BlendExp)
  return lerp(A, B, ModifiedAlpha)
}

function InterpEaseInOut<T>(
  A: T,
  B: T,
  alpha: number,
  BlendExp: number = 2
): T {
  let ModifiedAlpha
  if (alpha < 0.5) {
    ModifiedAlpha = InterpEaseIn<number>(0, 1, alpha * 2, BlendExp) * 0.5
  } else {
    ModifiedAlpha =
      InterpEaseOut<number>(0, 1, alpha * 2 - 1, BlendExp) * 0.5 + 0.5
  }
  return lerp(A, B, ModifiedAlpha)
}

function InterpExpoIn<T>(A: T, B: T, alpha: number): T {
  const ModifiedAlpha = alpha === 0 ? 0 : Math.pow(2, 10 * (alpha - 1))
  return lerp(A, B, ModifiedAlpha)
}

function InterpExpoOut<T>(A: T, B: T, alpha: number): T {
  const ModifiedAlpha = alpha === 1 ? 1 : -1 * Math.pow(2, -10 * alpha) + 1
  return lerp(A, B, ModifiedAlpha)
}

function InterpExpoInOut<T>(A: T, B: T, alpha: number): T {
  const ModifiedAlpha =
    alpha < 0.5
      ? InterpExpoIn(0, 1, alpha * 2) * 0.5
      : InterpExpoOut(0, 1, alpha * 2 - 1) * 0.5 + 0.5
  return lerp(A, B, ModifiedAlpha)
}

function InterpCircularIn<T>(A: T, B: T, alpha: number): T {
  const ModifiedAlpha = -1 * (Math.sqrt(1 - alpha * alpha) - 1)
  return lerp(A, B, ModifiedAlpha)
}

function InterpCircularOut<T>(A: T, B: T, alpha: number): T {
  alpha -= 1
  const ModifiedAlpha = 1 - alpha * alpha
  return lerp(A, B, ModifiedAlpha)
}

function InterpCircularInOut<T>(A: T, B: T, alpha: number) {
  const ModifiedAlpha =
    alpha < 0.5
      ? InterpCircularIn(0, 1, alpha * 2) / 2
      : InterpCircularOut(0, 1, alpha * 2 - 1) / 2 + 0.5
  return lerp(A, B, ModifiedAlpha)
}

export const lerpVector3Ease = (
  type: EasingFuncType,
  a: Vector3,
  b: Vector3,
  alpha: number,
  BlendExp?: number,
  steps?: number
) => {
  switch (type) {
    case EasingFuncType.Step:
      return InterpStep(a, b, alpha, steps)
    case EasingFuncType.EaseIn:
      return InterpEaseIn<Vector3>(a, b, alpha, BlendExp)
    case EasingFuncType.EaseOut:
      return InterpEaseOut<Vector3>(a, b, alpha, BlendExp)
    case EasingFuncType.EaseInOut:
      return InterpEaseInOut<Vector3>(a, b, alpha, BlendExp)
    case EasingFuncType.SinusoidalIn:
      return InterpSinIn<Vector3>(a, b, alpha)
    case EasingFuncType.SinusoidalOut:
      return InterpSinOut<Vector3>(a, b, alpha)
    case EasingFuncType.SinusoidalInOut:
      return InterpSinInOut<Vector3>(a, b, alpha)
    case EasingFuncType.ExpoIn:
      return InterpExpoIn<Vector3>(a, b, alpha)
    case EasingFuncType.ExpoOut:
      return InterpExpoOut<Vector3>(a, b, alpha)
    case EasingFuncType.ExpoInOut:
      return InterpExpoInOut<Vector3>(a, b, alpha)
    case EasingFuncType.CircularIn:
      return InterpCircularIn<Vector3>(a, b, alpha)
    case EasingFuncType.CircularOut:
      return InterpCircularOut<Vector3>(a, b, alpha)
    case EasingFuncType.CircularInOut:
      return InterpCircularInOut<Vector3>(a, b, alpha)
  }
}
