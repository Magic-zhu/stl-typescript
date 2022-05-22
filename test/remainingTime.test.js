import {remainingTime} from "../dist/helper.es";
test('剩余时间', () => {
    expect(remainingTime(new Date().getTime() + 60000).day).toBe(0)
    expect(remainingTime(new Date().getTime() + 60000).time).toBe("00:01:00")
    expect(remainingTime(new Date().getTime() + 3600000).time).toBe("01:00:00")
    expect(remainingTime(new Date().getTime() + 86400000).day).toBe(1)
})