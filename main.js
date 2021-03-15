/** 
 *  将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 *  @param {Array}   array - 需要处理的数组
 *  @param {number} size - 每个数组区块的长度
 *  @return {Array} - 返回一个包含拆分区块的新数组（相当于一个二维数组）。
 *  @version 1.0.0
*/
var chunk = function chunk(array) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var newArr = [];
  var length = array.length;
  var arrSize = Math.floor(length / size);

  for (var i = 0; i < arrSize; i++) {
    var temp = [];

    for (var j = 0; j < size; j++) {
      temp.push(array[i * size + j]);
    }

    newArr.push(temp);
  }

  if (length % size !== 0) newArr.push(array.slice(arrSize * size, length));
  return newArr;
};

/**
 * @param {*} value - 输入值
 * @param {String} type - 判断的种类
 * @description
 *  <span style='color:red;'>检查输入值是否符合某个条件</span>
 * |type可选值|说明
 * |---|---|
 * |phone|电话号码
 * |mail|邮箱
 * |idcard|身份证号
 * |account|匹配帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)
 * |number|数字 
 * @return {Bollean} - 返回布尔值
 * @version 1.0.0
 */
var check = function check(value, type) {
  var reg;

  switch (type) {
    case 'phone':
      reg = /^[1][3456789][0-9]{9}$/;
      break;

    case 'mail':
      reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-])+$/;
      break;

    case 'idcard':
      reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
      break;

    case 'account':
      reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
      break;

    case 'number':
      //数字
      reg = /^[0-9]*$/;
      break;

    default:
      return false;
  }

  return reg.test(value);
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/**
 * @description 
 * <span style='color:red;font-weight:bold'>检查某个数据的数据类型</span>
 * |输入值|输出
 * |---|---|
 * |123|Number
 * |'abcdef'|String
 * |true|Bollean
 * |[1, 2, 3, 4]|Array
 * |{name:'wenzi', age:25}|Object
 * |console.log('this is function')|Function
 * |undefined|Undefined
 * |null|Null
 * |new Date()|Date
 * |/^[a-zA-Z]{5,20}$/|RegExp
 * |new Error()|Error
 * @param {*} value - 输入值
 * @param {String} [type] - 需要核对的数据类型，不填的时候则返回数据类型
 * @return {Boolean|String} - 返回首字母大写的数据类型（ex：Number）或者布尔值
 * @version 1.0.0
 */
var typeOf = function typeOf(value, type) {
  var r = _typeof(value);

  if (r !== 'object') {
    if (type) {
      return r.charAt(0).toUpperCase() + r.slice(1, r.length) == type;
    } else {
      return r.charAt(0).toUpperCase() + r.slice(1, r.length);
    }
  } else {
    if (type) {
      return Object.prototype.toString.call(value).replace(/^\[object (\S+)\]$/, '$1') == type;
    } else {
      return Object.prototype.toString.call(value).replace(/^\[object (\S+)\]$/, '$1');
    }
  }
};

/**
 * @description <span style='color:red'>简单拷贝数据</span>
 * @param {Object|Array} input -输入的数据
 * @return {Object|Array} - 返回拷贝过后的数据
 */

var copy = function copy(input) {
  var inputType = typeOf(input);

  if (inputType != 'Array' || inputType != 'Object') {
    throw new Error('expected Array or Object');
  }

  var s = JSON.stringify(input);
  return JSON.parse(s);
};

/**
 * @description 
 * <span style='color:red'>获取到目前为止的毫秒数</span>
 * @return {Number} - 返回到目前为止的毫秒数
 * @version 1.0.0
 */
var now = function now() {
  var date = new Date();
  return date.getTime();
};

/**
 * @description <span style='color:red'>防抖函数(wait时间内只能执行一次，若触发了 则重新计算时间)</span>
 * @param {Function} func - 待执行函数
 * @param {Number} wait - 防抖时间 ms为单位 
 * @param {Boolean} [first=true] - 可选参数 默认true true表示 取第一次触发 false 取最后一次触发
 * @veriion 1.0.0
 * @return {Function} - 返回可执行函数
 */

var debounce = function debounce(func, wait) {
  var first = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!typeOf(func, 'Function')) {
    throw new Error('func expected function');
  }

  if (!typeOf(wait, 'Number')) {
    throw new Error('wait expected number');
  }

  var timeNow = 0,
      next = 0,
      timer = null;
  return function () {
    var _arguments = arguments,
        _this = this;

    if (first) {
      timeNow = now();
      timeNow > next ? func.apply(this, arguments) : null;
      next = now() + wait;
    } else {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }

      timer = setTimeout(function () {
        func.apply(_this, _arguments);
        timer = null;
      }, wait);
    }
  };
};

/**
 * @description <span style='color:red'>将时间戳格式化成指定格式</span>
 * @param {number} input - 时间戳 
 * @param {string} type -  格式（yyyy-mm-dd,h:m:s,yyyy-mm-dd h:m:s）
 * @return {string} - 格式化后的文本
 * @version 1.0.0
 */

var formatTime = function formatTime(input, type) {
  if (typeOf(input, 'Number') === false) {
    throw new Error('expected number');
  }

  if (!type) {
    throw new Error('type is necessary');
  }

  var time = new Date();
  var result;

  switch (type) {
    case 'yyyy-mm-dd':
      result = time.getFullYear() + '-' + addZero(time.getMonth()) + "-" + addZero(time.getDate());
      break;

    case 'h:m:s':
      result = addZero(time.getHours()) + ":" + addZero(time.getMinutes()) + ":" + addZero(time.getSeconds());
      break;

    case 'yyyy-mm-dd h:m:s':
      result = time.getFullYear() + '-' + addZero(time.getMonth()) + "-" + addZero(time.getDate()) + " " + addZero(time.getHours()) + ":" + addZero(time.getMinutes()) + ":" + addZero(time.getSeconds());
      break;
  }

  return result;
};

function addZero(val) {
  val = val.toString();
  return val.length > 1 ? val : '0' + val;
}

/**
 * @description <span style='color:red;font-weight:bold'>解析url对象</span>
 * @param {*} url - 要解析的url (xxxxxxx?xxxx=xxx&xxxx=xxxxx的隔式)
 * @return {Object} - 返回参数对象
 * @version 1.0.0 
 */
var getQuery = function getQuery(url) {
  var uri = url.split('?')[1];
  uri = uri.split('&');
  var obj = {};
  uri.forEach(function (item) {
    var t = item.split("=");
    obj[t[0]] = t[1] || null;
  });
  return obj;
};

/**
 * 获取字符串的字节长度
 * @param {String} value -输入值
 * @return {Number} 输出长度 字节
 */
var getStringByteLength = function getStringByteLength(value) {
  var str = value;
  var bytes = 0;

  for (var i = 0, n = str.length; i < n; i++) {
    var c = str.charCodeAt(i);

    if (c >= 0x0001 && c <= 0x007e || 0xff60 <= c && c <= 0xff9f) {
      bytes += 1;
    } else {
      bytes += 2;
    }
  }

  return bytes;
};

/**
 * @description <span style='color:red'>判断当前浏览器环境是苹果还是安卓 主要用于移动端hack</span>
 * @version 1.0.0
 * @returns {String|Undefined} - 返回 'ios' 或者 'android' 都不是的时候返回 undefined
 */
var IosOrAndroid = function IosOrAndroid() {
  if (typeof navigator == 'undefined') {
    throw new Error('Is not currently a browser environment');
  }

  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
  var isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

  if (isIos) {
    return 'ios';
  }

  if (isAndroid) {
    return 'android';
  }

  return undefined;
};

/**
 * @class <span style='color:red'>简单观察者</span>
 */

var Observer = /*#__PURE__*/function () {
  /**
   * @param {Array} queue - 内部的事件队列
   */
  function Observer() {
    _classCallCheck(this, Observer);

    this.queue = [];
  }
  /**
   * @description - 增加通知对象
   * @param {Function} func - 需要执行的函数
   */


  _createClass(Observer, [{
    key: "add",
    value: function add(func) {
      if (!typeOf(func, 'Function')) {
        throw new Error('expected function');
      }

      var ifHad = this.queue.includes(func);
      !ifHad ? this.queue.push(func) : null;
    }
    /**
     * @description - 移除通知对象
     * @param {*} func 
     */

  }, {
    key: "remove",
    value: function remove(func) {
      if (!typeOf(func, 'Function')) {
        throw new Error('expected function');
      }

      var index = this.queue.indexOf(func);
      this.queue[index] = null;
    }
    /**
     * 通知
     * @param  {...any} args - 传入的参数 
     */

  }, {
    key: "notify",
    value: function notify() {
      var _this = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var array_temp = copy(this.queue);
      this.queue.forEach(function (item, index) {
        if (item === null) {
          array_temp.splice(index, 1);
        } else {
          item.call.apply(item, [_this].concat(args));
        }
      });
      this.queue = array_temp;
    }
  }]);

  return Observer;
}();

/**
 * 计算剩余时间
 * @param {number} inputMicroSeconds - 输入截止时间 毫秒
 * @return {object} {day,time} day-剩余天数 time-时间字符串 xx:xx:xx
 */
function remainingTime(inputMicroSeconds) {
  var date = inputMicroSeconds;
  var nowDate = new Date().getTime();
  var diff = date - nowDate;

  if (diff <= 0) {
    return {
      day: 0,
      time: "00:00:00"
    };
  }

  var day = Math.floor(diff / 86400000);
  diff -= 86400000 * day;
  var hour = Math.floor(diff / 3600000);
  diff -= 3600000 * hour;
  var minutes = Math.floor(diff / 60000);
  diff -= 60000 * minutes;
  var seconds = Math.floor(diff / 1000);
  var time = "".concat(hour.toString().padStart(2, "0"), ":").concat(minutes.toString().padStart(2, "0"), ":").concat(seconds.toString().padStart(2, "0"));
  return {
    day: day,
    time: time
  };
}

/**
 * 乱序数组
 * @param {*} input 
 */
function shuffle(input) {
  for (var i = input.length - 1; i >= 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var itemAtIndex = input[randomIndex];
    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }

  return input;
}

/**
 * 截取指定字节位置的字符串
 * @param {String} value - 输入字符串
 * @param {Number} start - 开始位置
 * @param {Number} end  - 结束位置
 */
var sliceByByte = function sliceByByte(value, start, end) {
  var bytes = 0;
  var result = '';

  for (var i = 0, n = value.length; i < n; i++) {
    var c = value.charCodeAt(i);

    if (bytes >= end && end != undefined) {
      break;
    }

    if (bytes >= start) {
      result = result + value[i];
    }

    if (c >= 0x0001 && c <= 0x007e || 0xff60 <= c && c <= 0xff9f) {
      bytes += 1;
    } else {
      bytes += 2;
    }
  }

  return result;
};

/**
 * @description <span style='color:red'>解决ios keyboard 导致页面不弹起问题</span>
 */
var solveIosKeybordBug = function solveIosKeybordBug() {
  setTimeout(function () {
    var height = document.documentElement.scrollTop || document.body.scrollTop;
    window.scrollTo(0, height + 1);
    window.scrollTo(0, height - 1);
  }, 17);
};

/**
 * @description <span style='color:red'>节流函数(wait时间内只能执行一次该函数)</span>
 * @param {Function} func - 需要节流的函数
 * @param {Number} wait - 等待时间 ms为单位
 * @param {Object} [options] - 可选参数
 * @veriion 1.0.0
 * @return {Function} - 返回可执行函数
 */

var throttle = function throttle(func, wait) {
  if (!typeOf(func, 'Function')) {
    throw new Error('func expected function');
  }

  if (!typeOf(wait, 'Number')) {
    throw new Error('wait expected number');
  }

  var previous = 0;
  return function () {
    var timeNow = now();
    var context = this;

    if (timeNow - previous >= wait) {
      func.apply(context, arguments);
      previous = timeNow;
    }
  };
};

var helper = {
  check: check,
  chunk: chunk,
  copy: copy,
  debounce: debounce,
  formatTime: formatTime,
  getQuery: getQuery,
  getStringByteLength: getStringByteLength,
  IosOrAndroid: IosOrAndroid,
  now: now,
  Observer: Observer,
  remainingTime: remainingTime,
  shuffle: shuffle,
  sliceByByte: sliceByByte,
  solveIosKeyBoardBug: solveIosKeybordBug,
  throttle: throttle,
  typeOf: typeOf
};

export default helper;
