import { Vector3 } from '../math/Vector3';
declare class Plane {
    isPlane: boolean;
    constant: number;
    normal: Vector3;
    constructor(normal?: Vector3, constant?: number);
    set(normal: any, constant: any): this;
    setComponents(x: any, y: any, z: any, w: any): this;
    setFromNormalAndCoplanarPoint(normal: any, point: any): this;
    setFromCoplanarPoints(a: any, b: any, c: any): this;
    copy(plane: any): this;
    normalize(): this;
    negate(): this;
    distanceToPoint(point: any): number;
    distanceToSphere(sphere: any): number;
    projectPoint(point: any, target: any): any;
    intersectLine(line: any, target: any): any;
    intersectsLine(line: any): boolean;
    intersectsBox(box: any): any;
    intersectsSphere(sphere: any): any;
    coplanarPoint(target: any): any;
    applyMatrix4(matrix: any, optionalNormalMatrix: any): this;
    translate(offset: any): this;
    equals(plane: any): boolean;
    clone(): Plane;
}
export { Plane };
