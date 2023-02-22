import { Vector3, lerpVector } from "../dist/helper.es";
test("lerpVector test", () => {
    expect(lerpVector(new Vector3(0, 0, 0), new Vector3(1, 1, 1), 0.5).x).toBe(0.5);
    expect(lerpVector(new Vector3(0, 0, 0), new Vector3(1, 1, 1), 0.5).y).toBe(0.5);
    expect(lerpVector(new Vector3(0, 0, 0), new Vector3(1, 1, 1), 0.5).z).toBe(0.5);
});