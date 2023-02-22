export declare class Vector3 {
    x: number;
    y: number;
    z: number;
    constructor(x?: number, y?: number, z?: number);
    set({ x, y, z }: {
        x: any;
        y: any;
        z: any;
    }): void;
    size(): number;
    length(): number;
    clone(): Vector3;
    copy(v: Vector3): Vector3;
    cross(v: Vector3): Vector3;
    add(v: Vector3): Vector3;
    addScalar(s: number): Vector3;
    addVectors(a: Vector3, b: Vector3): Vector3;
    sub(v: Vector3): Vector3;
    subScalar(s: number): Vector3;
    subVectors(a: Vector3, b: Vector3): Vector3;
    multiply(v: Vector3): Vector3;
    multiplyScalar(s: number): Vector3;
    multiplyVectors(a: Vector3, b: Vector3): Vector3;
    divide(v: Vector3): Vector3;
    divideScalar(scalar: number): Vector3;
}
