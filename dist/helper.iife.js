var Helper=function(t){"use strict";var r=function(t,r){var e=typeof t;return"object"!==e?r?e.charAt(0).toUpperCase()+e.slice(1,e.length)==r:e.charAt(0).toUpperCase()+e.slice(1,e.length):r?Object.prototype.toString.call(t).replace(/^\[object (\S+)\]$/,"$1")==r:Object.prototype.toString.call(t).replace(/^\[object (\S+)\]$/,"$1")};
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
function e(t,r,e){if(e||2===arguments.length)for(var n,o=0,i=r.length;o<i;o++)!n&&o in r||(n||(n=Array.prototype.slice.call(r,0,o)),n[o]=r[o]);return t.concat(n||Array.prototype.slice.call(r))}var n=function(){return(new Date).getTime()};function o(t){return(t=t.toString()).length>1?t:"0"+t}var i;t.Os=void 0,(i=t.Os||(t.Os={})).Windows="Windows",i.Mac="Mac",i.Linux="Linux";var a=function(){function t(t,r,e){void 0===t&&(t=0),void 0===r&&(r=0),void 0===e&&(e=0),this.x=t,this.y=r,this.z=e}return t.prototype.set=function(t){var r=t.x,e=t.y,n=t.z;void 0!==r&&(this.x=r),void 0!==e&&(this.y=e),void 0!==n&&(this.z=n)},t.prototype.size=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},t.prototype.length=function(){return this.size()},t.prototype.clone=function(){return new t(this.x,this.y,this.z)},t.prototype.copy=function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this},t.prototype.cross=function(r){return new t(this.y*r.z-this.z*r.y,this.z*r.x-this.x*r.z,this.x*r.y-this.y*r.x)},t.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this},t.prototype.addScalar=function(t){return this.x+=t,this.y+=t,this.z+=t,this},t.prototype.addVectors=function(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this},t.prototype.sub=function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this},t.prototype.subScalar=function(t){return this.x-=t,this.y-=t,this.z-=t,this},t.prototype.subVectors=function(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this.z=t.z-r.z,this},t.prototype.multiply=function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this},t.prototype.multiplyScalar=function(t){return this.x*=t,this.y*=t,this.z*=t,this},t.prototype.multiplyVectors=function(t,r){return this.x=t.x*r.x,this.y=t.y*r.y,this.z=t.z*r.z,this},t.prototype.divide=function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this},t.prototype.divideScalar=function(t){return this.multiplyScalar(1/t)},t}();return t.IosOrAndroid=function(){if("undefined"==typeof navigator)throw new Error("Is not currently a browser environment");var t=navigator.userAgent,r=t.indexOf("Android")>-1||t.indexOf("Adr")>-1;return!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)?"ios":r?"android":void 0},t.Vector3=a,t.addZero=o,t.blobToString=function(t){return new Promise((function(r,e){var n=new FileReader;n.readAsText(t,"utf-8"),n.onload=function(){r(n.result.toString())},n.onerror=function(t){e(t)}}))},t.check=function(t,r){var e;switch(r){case"phone":e=/^[1][3456789][0-9]{9}$/;break;case"mail":e=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-])+$/;break;case"idcard":e=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;break;case"account":e=/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;break;case"number":e=/^[0-9]*$/;break;default:return!1}return e.test(t)},t.chunk=function(t,r){void 0===r&&(r=1);for(var e=[],n=t.length,o=Math.floor(n/r),i=0;i<o;i++){for(var a=[],s=0;s<r;s++)a.push(t[i*r+s]);e.push(a)}return n%r!=0&&e.push(t.slice(o*r,n)),e},t.copy=function(t){var e=r(t);if("Array"!=e&&"Object"!=e)throw new Error("expected Array or Object");var n=JSON.stringify(t);return JSON.parse(n)},t.debounce=function(t,o,i){if(void 0===i&&(i=!0),!r(t,"Function"))throw new Error("func expected function");if(!r(o,"Number"))throw new Error("wait expected number");var a=0,s=null;return function(){for(var r=this,u=[],c=0;c<arguments.length;c++)u[c]=arguments[c];i?(n()>a&&t.apply.apply(t,e([this],u,!1)),a=n()+o):(s&&(clearTimeout(s),s=null),s=setTimeout((function(){t.apply.apply(t,e([r],u,!1)),s=null}),o))}},t.formatTime=function(t,e){if(!1===r(t,"Number"))throw new Error("expected number");if(!e)throw new Error("type is necessary");var n,i=new Date;switch(e){case"yyyy-mm-dd":n=i.getFullYear()+"-"+o(i.getMonth())+"-"+o(i.getDate());break;case"h:m:s":n=o(i.getHours())+":"+o(i.getMinutes())+":"+o(i.getSeconds());break;case"yyyy-mm-dd h:m:s":n=i.getFullYear()+"-"+o(i.getMonth())+"-"+o(i.getDate())+" "+o(i.getHours())+":"+o(i.getMinutes())+":"+o(i.getSeconds())}return n},t.getFpsTime=function(){return new Promise((function(t,r){if(requestAnimationFrame&&performance){var e=0;requestAnimationFrame((function(r){e=r,requestAnimationFrame((function(r){t(r-e)}))}))}else r(0)}))},t.getQuery=function(t){var r=t.split("?")[1];r=r.split("&");var e={};return r.forEach((function(t){var r=t.split("=");e[r[0]]=r[1]||null})),e},t.getStringByteLength=function(t){for(var r=t,e=0,n=0,o=r.length;n<o;n++){var i=r.charCodeAt(n);e+=i>=1&&i<=126||65376<=i&&i<=65439?1:2}return e},t.intersection_rectangle=function(t,r,e,n,o,i,a,s){var u=t+e/2,c=r+n/2,h=o+a/2,f=i+s/2,l=Math.abs(h-u),p=Math.abs(f-c);return(e+a)/2>l&&(n+s)/2>p},t.lerp=function(){},t.lerpVector=function(t,r,e){var n=t.clone(),o=r.clone();return n.add(o.subVectors(o,n).multiplyScalar(e))},t.now=n,t.os=function(r){return r.userAgent.indexOf("Window")>0?t.Os.Windows:r.userAgent.indexOf("Mac OS X")>0?t.Os.Mac:r.userAgent.indexOf("Linux")>0?t.Os.Linux:void 0},t.remainingTime=function(t){var r=t-(new Date).getTime();if(r<=0)return{day:0,time:"00:00:00"};var e=Math.floor(r/864e5);r-=864e5*e;var n=Math.floor(r/36e5);r-=36e5*n;var o=Math.floor(r/6e4);r-=6e4*o;var i=Math.floor(r/1e3);return{day:e,time:"".concat(n.toString().padStart(2,"0"),":").concat(o.toString().padStart(2,"0"),":").concat(i.toString().padStart(2,"0"))}},t.shuffle=function(t){for(var r=t.length-1;r>=0;r--){var e=Math.floor(Math.random()*(r+1)),n=t[e];t[e]=t[r],t[r]=n}return t},t.sliceByByte=function(t,r,e){for(var n=0,o="",i=0,a=t.length;i<a;i++){var s=t.charCodeAt(i);if(n>=e&&null!=e)break;n>=r&&(o+=t[i]),n+=s>=1&&s<=126||65376<=s&&s<=65439?1:2}return o},t.solveIosKeybordBug=function(){setTimeout((function(){var t=document.documentElement.scrollTop||document.body.scrollTop;window.scrollTo(0,t+1),window.scrollTo(0,t-1)}),17)},t.throttle=function(t,e){if(!r(t,"Function"))throw new Error("func expected function");if(!r(e,"Number"))throw new Error("wait expected number");var o=0;return function(){var r=n(),i=this;r-o>=e&&(t.apply(i,arguments),o=r)}},t.typeOf=r,Object.defineProperty(t,"__esModule",{value:!0}),t}({});
