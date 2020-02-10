### 介绍

![image](https://img.shields.io/badge/Version-1.0.2-green.svg)

一个自己的工具库，封装了项目中使用频率比较高的一些方法

### 使用方式

```bash
npm install @magic-zhu/helper  
```

```js
const helper = require ('@magic-zhu/helper')
let {typeOf} = helper;
console.log(typeOf('133')) //String
```
[api手册](https://magiczhuzhu.club/docs/helper/1.0.0/index.html)

### 开发

- 使用规范的jsdoc注释
- 新增方法需要完整的测试用例

#### 生成文档

```bash
npm run docs
```

#### 执行测试

```bash
npm run test
```

#### 打包构建

```bash
npm run build
```