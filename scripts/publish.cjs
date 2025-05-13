const shell = require("shelljs")
require("colors")

if (
  shell.exec(`npm publish --registry https://registry.npmjs.org`).code !== 0
) {
  shell.echo("发布失败".red)
  shell.exit(1)
}

console.log("✅  发布成功".brightGreen)
