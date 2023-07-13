declare class Vector2 {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    get width(): number;
    set width(value: number);
    get height(): number;
    set height(value: number);
    set(x: any, y: any): this;
    setScalar(scalar: any): this;
    setX(x: any): this;
    setY(y: any): this;
    setComponent(index: any, value: any): this;
    getComponent(index: any): number;
    clone(): Vector2;
    copy(v: any): this;
    add(v: any): this;
    addScalar(s: any): this;
    addVectors(a: any, b: any): this;
    addScaledVector(v: any, s: any): this;
    sub(v: any): this;
    subScalar(s: any): this;
    subVectors(a: any, b: any): this;
    multiply(v: any): this;
    multiplyScalar(scalar: any): this;
    divide(v: any): this;
    divideScalar(scalar: any): this;
    applyMatrix3(m: any): this;
    min(v: any): this;
    max(v: any): this;
    clamp(min: any, max: any): this;
    clampScalar(minVal: any, maxVal: any): this;
    clampLength(min: any, max: any): this;
    floor(): this;
    ceil(): this;
    round(): this;
    roundToZero(): this;
    negate(): this;
    dot(v: any): number;
    cross(v: any): number;
    lengthSq(): number;
    length(): number;
    manhattanLength(): number;
    normalize(): this;
    angle(): number;
    angleTo(v: any): number;
    distanceTo(v: any): number;
    distanceToSquared(v: any): number;
    manhattanDistanceTo(v: any): number;
    setLength(length: any): this;
    lerp(v: any, alpha: any): this;
    lerpVectors(v1: any, v2: any, alpha: any): this;
    equals(v: any): boolean;
    fromArray(array: any, offset?: number): this;
    toArray(array?: any[], offset?: number): any[];
    fromBufferAttribute(attribute: any, index: any): this;
    rotateAround(center: any, angle: any): this;
    random(): this;
    [Symbol.iterator](): Generator<number, void, unknown>;
}
export { Vector2 };