import { Vector3 } from '../math/Vector3.js';
declare class Sphere {
    center: Vector3;
    radius: number;
    constructor(center?: Vector3, radius?: number);
    set(center: any, radius: any): this;
    setFromPoints(points: any, optionalCenter: any): this;
    copy(sphere: any): this;
    isEmpty(): boolean;
    makeEmpty(): this;
    containsPoint(point: any): boolean;
    distanceToPoint(point: any): number;
    intersectsSphere(sphere: any): boolean;
    intersectsBox(box: any): any;
    intersectsPlane(plane: any): boolean;
    clampPoint(point: any, target: any): any;
    getBoundingBox(target: any): any;
    applyMatrix4(matrix: any): this;
    translate(offset: any): this;
    expandByPoint(point: any): this;
    union(sphere: any): this;
    equals(sphere: any): boolean;
    clone(): Sphere;
}
export { Sphere };
