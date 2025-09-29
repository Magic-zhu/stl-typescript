import { Vector3, lerpVector3 } from "../dist/stl.es";
test("lerpVector3 test", () => {
  expect(lerpVector3(new Vector3(0, 0, 0), new Vector3(1, 1, 1), 0.5).x).toBe(
    0.5
  );
  expect(lerpVector3(new Vector3(0, 0, 0), new Vector3(1, 1, 1), 0.5).y).toBe(
    0.5
  );
  expect(lerpVector3(new Vector3(0, 0, 0), new Vector3(1, 1, 1), 0.5).z).toBe(
    0.5
  );
});
