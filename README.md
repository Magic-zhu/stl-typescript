### Introduction

![image](https://img.shields.io/badge/Version-0.0.11-green.svg)

A modern JavaScript/Typescript utility library

- Math
  - Vector2
  - Vector3
  - Vector4
  - scaleFrom 对一个二维点相对于指定原点进行缩放变换
- Geometry
  - intersection_rectangle
- String
  - blobToString
  - stringToBuffer
- Time
  - formatTime 将时间戳格式化为友好的时间格式
  - now 返回秒或毫秒的时间戳
  - getFpsTime 获取当前帧数
  - remaiiningTime 给定目标时间戳返回友好剩余时间
- Array
  - ArrayPro
  - IForEach -> forEach with break
  - SearchContainier 对于搜索频率很高的数组数据建立索引，提升搜索性能
- Utils
  - debounce
  - throttle
  - typeOf
  - Lazy 惰性加载类,支持同步或异步工厂函数、线程安全（单次求值保障）、重置、预热、异常缓存等常用特性

### Docs 📖

https://magic-zhu.github.io/stl-typescript/

### How to use

```bash
npm install stl-typescript
```

```ts
import { typeOf } from "stl-typescript";
console.log(typeOf("133")); //String
```
