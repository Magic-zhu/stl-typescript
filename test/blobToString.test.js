import { blobToString } from "../dist/helper.es";
const t = new Blob(["测试字符"]);
test("blobTostring test", () => {
  return blobToString(t).then((r) => {
    expect(r).toBe("测试字符");
  });
});
