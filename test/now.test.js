import now from "../src/now"

test('should return', () => {
    expect(now()).toBe(new Date().getTime())
})
