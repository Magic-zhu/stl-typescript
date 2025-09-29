import { check } from "./check";
import { getQuery } from "./getQuery";
import { getStringByteLength } from "./getStringByteLength";
import { IosOrAndroid } from "./IosOrAndroid";
import { shuffle } from "./shuffle";
import { sliceByByte } from "./sliceByByte";
import { solveIosKeybordBug } from "./solveIosKeybordBug";
import { blobToString } from "./string/blobToString";
import IO from "./IO";

// ? array

import { ArrayPro } from "./array/ArrayPro";
import { IForEach } from "./array/IForEach";
import { chunk } from "./array/chunk";
// import { SearchContainer } from "./array/SearchContainer";

// ? time
import { getFpsTime } from "./time/getFpsTime";
import { now } from "./time/now";
import { remainingTime } from "./time/remainingTime";
import { formatTime } from "./time/formatTime";

// ? utils
import { throttle } from "./utils/throttle";
import { typeOf } from "./utils/typeOf";
import { os } from "./utils/os";
import { copy } from "./utils/copy";
import { debounce } from "./utils/debounce";
import { hexToRgb } from "./utils/color";

// ? geometry
import { intersection_rectangle } from "./geometry/intersection_rectangle";
import { Box3 } from "./geometry/Box3";
import { Sphere } from "./geometry/Sphere";
import { Triangle } from "./geometry/Triangle";
import { Plane } from "./geometry/Plane";

// ? math
import { Vector3 } from "./math/Vector3";
import { lerp, lerpNumber, lerpVector3, lerpVector3Ease } from "./math/Lerp";
import { Vector2 } from "./math/Vector2";
import { Vector4 } from "./math/Vector4";
import { Matrix3 } from "./math/Matrix3";
import { uuid } from "./math/uuid";
import { euclideanModulo } from "./math/mod";

export {
  chunk,
  check,
  getQuery,
  getStringByteLength,
  IosOrAndroid,
  ArrayPro,
  Box3,
  IO,
  IForEach,
  Matrix3,
  Plane,
  Sphere,
  Triangle,
  Vector2,
  Vector3,
  Vector4,
  blobToString,
  copy,
  debounce,
  euclideanModulo,
  formatTime,
  getFpsTime,
  hexToRgb,
  intersection_rectangle,
  lerp,
  lerpNumber,
  lerpVector3,
  lerpVector3Ease,
  now,
  os,
  remainingTime,
  shuffle,
  sliceByByte,
  solveIosKeybordBug,
  throttle,
  typeOf,
  uuid,
};
