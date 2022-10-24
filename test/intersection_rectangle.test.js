import { intersection_rectangle } from "../dist/helper.es";
test("intersection_rectangle test", () => {
    expect(intersection_rectangle(0,0,100,100,80,80,100,100)).toBe(true);
    expect(intersection_rectangle(0,0,100,100,101,101,100,100)).toBe(false);
});