declare const DEG2RAD: number;
declare const RAD2DEG: number;
declare function generateUUID(): string;
declare function clamp(value: any, min: any, max: any): number;
declare function euclideanModulo(n: any, m: any): number;
declare function mapLinear(x: any, a1: any, a2: any, b1: any, b2: any): any;
declare function inverseLerp(x: any, y: any, value: any): number;
declare function lerp(x: any, y: any, t: any): number;
declare function damp(x: any, y: any, lambda: any, dt: any): number;
declare function pingpong(x: any, length?: number): number;
declare function smoothstep(x: any, min: any, max: any): number;
declare function smootherstep(x: any, min: any, max: any): number;
declare function randInt(low: any, high: any): any;
declare function randFloat(low: any, high: any): any;
declare function randFloatSpread(range: any): number;
declare function seededRandom(s: any): number;
declare function degToRad(degrees: any): number;
declare function radToDeg(radians: any): number;
declare function isPowerOfTwo(value: any): boolean;
declare function ceilPowerOfTwo(value: any): number;
declare function floorPowerOfTwo(value: any): number;
declare function setQuaternionFromProperEuler(q: any, a: any, b: any, c: any, order: any): void;
declare function denormalize(value: any, array: any): any;
declare function normalize(value: any, array: any): any;
declare const MathUtils: {
    DEG2RAD: number;
    RAD2DEG: number;
    generateUUID: typeof generateUUID;
    clamp: typeof clamp;
    euclideanModulo: typeof euclideanModulo;
    mapLinear: typeof mapLinear;
    inverseLerp: typeof inverseLerp;
    lerp: typeof lerp;
    damp: typeof damp;
    pingpong: typeof pingpong;
    smoothstep: typeof smoothstep;
    smootherstep: typeof smootherstep;
    randInt: typeof randInt;
    randFloat: typeof randFloat;
    randFloatSpread: typeof randFloatSpread;
    seededRandom: typeof seededRandom;
    degToRad: typeof degToRad;
    radToDeg: typeof radToDeg;
    isPowerOfTwo: typeof isPowerOfTwo;
    ceilPowerOfTwo: typeof ceilPowerOfTwo;
    floorPowerOfTwo: typeof floorPowerOfTwo;
    setQuaternionFromProperEuler: typeof setQuaternionFromProperEuler;
    normalize: typeof normalize;
    denormalize: typeof denormalize;
};
export { DEG2RAD, RAD2DEG, generateUUID, clamp, euclideanModulo, mapLinear, inverseLerp, lerp, damp, pingpong, smoothstep, smootherstep, randInt, randFloat, randFloatSpread, seededRandom, degToRad, radToDeg, isPowerOfTwo, ceilPowerOfTwo, floorPowerOfTwo, setQuaternionFromProperEuler, normalize, denormalize, MathUtils };
