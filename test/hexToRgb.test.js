import { hexToRgb } from "../dist/stl.es";

test("hexToRgb", () => {
  expect(hexToRgb(0xffffff)).toEqual([255, 255, 255]);
});
