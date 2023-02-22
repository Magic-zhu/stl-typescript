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
}
