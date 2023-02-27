import {Vector3} from "./Vector3"

/**
 * @description Vector3插值函数
 * @param a
 * @param b
 * @param alpha
 * @return Vector3
 */
export const lerpVector3 = (a: Vector3, b: Vector3, alpha: number): Vector3 => {
    const x = a.clone()
    const y = b.clone()
    // A + v*(B-A)
    return x.add(y.subVectors(y, x).multiplyScalar(alpha))
}

export enum EasingFuncType {
    /** Simple step interpolation. */
    Step = 'step',
    /** Sinusoidal in interpolation. */
    SinusoidalIn = 'SinusoidalIn',
    /** Sinusoidal out interpolation. */
    SinusoidalOut = 'SinusoidalOut',
    /** Sinusoidal in/out interpolation. */
    SinusoidalInOut = 'SinusoidalInOut',
    /** Smoothly accelerates, but does not decelerate into the target.  Ease amount controlled by BlendExp. */
    EaseIn = 'EaseIn',
    /** Immediately accelerates, but smoothly decelerates into the target.  Ease amount controlled by BlendExp. */
    EaseOut = 'EaseOut',
    /** Smoothly accelerates and decelerates.  Ease amount controlled by BlendExp. */
    EaseInOut = 'EaseInOut',
    /** Easing in using an exponential */
    ExpoIn = 'ExpoIn',
    /** Easing out using an exponential */
    ExpoOut = 'ExpoOut',
    /** Easing in/out using an exponential method */
    ExpoInOut = 'ExpoInOut',
    /** Easing is based on a half circle. */
    CircularIn = 'CircularIn',
    /** Easing is based on an inverted half circle. */
    CircularOut = 'CircularOut',
    /** Easing is based on two half circles. */
    CircularInOut = 'CircularInOut',
}


const InterpStep = (A: Vector3, B: Vector3, alpha: number, steps: number): Vector3 => {
    if (steps <= 1 || alpha <= 0) {
        return A
    } else if (alpha >= 1) {
        return B
    }
    const NumIntervals = steps - 1;
    const ModifiedAlpha = Math.floor(alpha * steps) / NumIntervals;
    return lerpVector3(A, B, ModifiedAlpha)
}

const InterpSinIn = (A: Vector3, B: Vector3, alpha: number) => {
    const ModifiedAlpha = -1 * Math.cos(alpha * Math.PI) + 1
    return lerpVector3(A,B,alpha)
}

const InterpSinOut = (A: Vector3, B: Vector3, alpha: number)=>{
    const ModifiedAlpha = Math.sin(alpha * Math.PI)
    return lerpVector3(A,B,alpha)
}

const InterpSinInOut = (A: Vector3, B: Vector3, alpha: number)=>{

}

export const lerpVector3Ease = (
    type: EasingFuncType,
    a: Vector3,
    b: Vector3,
    alpha: number,
    BlendExp?: number,
    steps?: number,
) => {
    switch (type) {
        case EasingFuncType.Step:
            return InterpStep(a, b, alpha, steps)
    }
}

