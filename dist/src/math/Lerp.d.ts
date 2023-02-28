import { Vector3 } from "./Vector3";
export declare function lerp<T>(A: T, B: T, alpha: number): any;
export declare function lerpNumber(A: any, B: any, alpha: number): number;
export declare function lerpVector3(a: any, b: any, alpha: number): Vector3;
export declare enum EasingFuncType {
    Step = "step",
    SinusoidalIn = "SinusoidalIn",
    SinusoidalOut = "SinusoidalOut",
    SinusoidalInOut = "SinusoidalInOut",
    EaseIn = "EaseIn",
    EaseOut = "EaseOut",
    EaseInOut = "EaseInOut",
    ExpoIn = "ExpoIn",
    ExpoOut = "ExpoOut",
    ExpoInOut = "ExpoInOut",
    CircularIn = "CircularIn",
    CircularOut = "CircularOut",
    CircularInOut = "CircularInOut"
}
export declare const lerpVector3Ease: (type: EasingFuncType, a: Vector3, b: Vector3, alpha: number, BlendExp?: number, steps?: number) => any;
