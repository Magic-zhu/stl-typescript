import { typeOf } from "../dist/stl.es";

test("typeOf 123 should be Number", () => {
  expect(typeOf(123)).toBe("Number");
});

test('typeOf "abc" should be String', () => {
  expect(typeOf("abc")).toBe("String");
});
