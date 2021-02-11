this["wc"] = this["wc"] || {}; this["wc"]["data"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 470);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(178),
      utf8 = __webpack_require__(119).utf8,
      isBuffer = __webpack_require__(179),
      bin = __webpack_require__(119).bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message) && message.constructor !== Uint8Array)
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ }),

/***/ 15:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

(function() { module.exports = this["moment"]; }());

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["dataControls"]; }());

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),

/***/ 179:
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ 18:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(60);

var iterableToArrayLimit = __webpack_require__(61);

var unsupportedIterableToArray = __webpack_require__(39);

var nonIterableRest = __webpack_require__(62);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(57);

var iterableToArray = __webpack_require__(58);

var unsupportedIterableToArray = __webpack_require__(39);

var nonIterableSpread = __webpack_require__(59);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

(function() { module.exports = this["wc"]["navigation"]; }());

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["url"]; }());

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

(function() { module.exports = this["wc"]["date"]; }());

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(96);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(37);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["hooks"]; }());

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "SETTINGS_STORE_NAME", function() { return /* reexport */ SETTINGS_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "withSettingsHydration", function() { return /* reexport */ with_settings_hydration_withSettingsHydration; });
__webpack_require__.d(__webpack_exports__, "useSettings", function() { return /* reexport */ use_settings_useSettings; });
__webpack_require__.d(__webpack_exports__, "PLUGINS_STORE_NAME", function() { return /* reexport */ PLUGINS_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "pluginNames", function() { return /* reexport */ pluginNames; });
__webpack_require__.d(__webpack_exports__, "withPluginsHydration", function() { return /* reexport */ with_plugins_hydration_withPluginsHydration; });
__webpack_require__.d(__webpack_exports__, "ONBOARDING_STORE_NAME", function() { return /* reexport */ ONBOARDING_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "withOnboardingHydration", function() { return /* reexport */ with_onboarding_hydration_withOnboardingHydration; });
__webpack_require__.d(__webpack_exports__, "USER_STORE_NAME", function() { return /* reexport */ USER_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "withCurrentUserHydration", function() { return /* reexport */ with_current_user_hydration_withCurrentUserHydration; });
__webpack_require__.d(__webpack_exports__, "useUserPreferences", function() { return /* reexport */ use_user_preferences_useUserPreferences; });
__webpack_require__.d(__webpack_exports__, "OPTIONS_STORE_NAME", function() { return /* reexport */ OPTIONS_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "withOptionsHydration", function() { return /* reexport */ with_options_hydration_withOptionsHydration; });
__webpack_require__.d(__webpack_exports__, "REVIEWS_STORE_NAME", function() { return /* reexport */ REVIEWS_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "NOTES_STORE_NAME", function() { return /* reexport */ NOTES_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "REPORTS_STORE_NAME", function() { return /* reexport */ REPORTS_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "ITEMS_STORE_NAME", function() { return /* reexport */ ITEMS_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "getLeaderboard", function() { return /* reexport */ getLeaderboard; });
__webpack_require__.d(__webpack_exports__, "searchItemsByString", function() { return /* reexport */ searchItemsByString; });
__webpack_require__.d(__webpack_exports__, "NAVIGATION_STORE_NAME", function() { return /* reexport */ NAVIGATION_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "withNavigationHydration", function() { return /* reexport */ with_navigation_hydration_withNavigationHydration; });
__webpack_require__.d(__webpack_exports__, "getFilterQuery", function() { return /* reexport */ getFilterQuery; });
__webpack_require__.d(__webpack_exports__, "getSummaryNumbers", function() { return /* reexport */ getSummaryNumbers; });
__webpack_require__.d(__webpack_exports__, "getReportTableData", function() { return /* reexport */ getReportTableData; });
__webpack_require__.d(__webpack_exports__, "getReportTableQuery", function() { return /* reexport */ getReportTableQuery; });
__webpack_require__.d(__webpack_exports__, "getReportChartData", function() { return /* reexport */ getReportChartData; });
__webpack_require__.d(__webpack_exports__, "getTooltipValueFormat", function() { return /* reexport */ getTooltipValueFormat; });
__webpack_require__.d(__webpack_exports__, "MAX_PER_PAGE", function() { return /* reexport */ MAX_PER_PAGE; });
__webpack_require__.d(__webpack_exports__, "QUERY_DEFAULTS", function() { return /* reexport */ QUERY_DEFAULTS; });
__webpack_require__.d(__webpack_exports__, "NAMESPACE", function() { return /* reexport */ NAMESPACE; });
__webpack_require__.d(__webpack_exports__, "WC_ADMIN_NAMESPACE", function() { return /* reexport */ WC_ADMIN_NAMESPACE; });
__webpack_require__.d(__webpack_exports__, "WCS_NAMESPACE", function() { return /* reexport */ WCS_NAMESPACE; });
__webpack_require__.d(__webpack_exports__, "SECOND", function() { return /* reexport */ SECOND; });
__webpack_require__.d(__webpack_exports__, "MINUTE", function() { return /* reexport */ MINUTE; });
__webpack_require__.d(__webpack_exports__, "HOUR", function() { return /* reexport */ HOUR; });
__webpack_require__.d(__webpack_exports__, "DAY", function() { return /* reexport */ DAY; });
__webpack_require__.d(__webpack_exports__, "WEEK", function() { return /* reexport */ WEEK; });
__webpack_require__.d(__webpack_exports__, "MONTH", function() { return /* reexport */ MONTH; });
__webpack_require__.d(__webpack_exports__, "EXPORT_STORE_NAME", function() { return /* reexport */ EXPORT_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "IMPORT_STORE_NAME", function() { return /* reexport */ IMPORT_STORE_NAME; });

// NAMESPACE OBJECT: ./packages/data/build-module/settings/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getSettingsGroupNames", function() { return selectors_getSettingsGroupNames; });
__webpack_require__.d(selectors_namespaceObject, "getSettings", function() { return selectors_getSettings; });
__webpack_require__.d(selectors_namespaceObject, "getDirtyKeys", function() { return getDirtyKeys; });
__webpack_require__.d(selectors_namespaceObject, "getIsDirty", function() { return selectors_getIsDirty; });
__webpack_require__.d(selectors_namespaceObject, "getSettingsForGroup", function() { return selectors_getSettingsForGroup; });
__webpack_require__.d(selectors_namespaceObject, "isUpdateSettingsRequesting", function() { return selectors_isUpdateSettingsRequesting; });
__webpack_require__.d(selectors_namespaceObject, "getSetting", function() { return getSetting; });
__webpack_require__.d(selectors_namespaceObject, "getLastSettingsErrorForGroup", function() { return selectors_getLastSettingsErrorForGroup; });
__webpack_require__.d(selectors_namespaceObject, "getSettingsError", function() { return selectors_getSettingsError; });

// NAMESPACE OBJECT: ./packages/data/build-module/settings/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "updateSettingsForGroup", function() { return actions_updateSettingsForGroup; });
__webpack_require__.d(actions_namespaceObject, "updateErrorForGroup", function() { return updateErrorForGroup; });
__webpack_require__.d(actions_namespaceObject, "setIsRequesting", function() { return setIsRequesting; });
__webpack_require__.d(actions_namespaceObject, "clearIsDirty", function() { return actions_clearIsDirty; });
__webpack_require__.d(actions_namespaceObject, "updateAndPersistSettingsForGroup", function() { return actions_updateAndPersistSettingsForGroup; });
__webpack_require__.d(actions_namespaceObject, "persistSettingsForGroup", function() { return actions_persistSettingsForGroup; });
__webpack_require__.d(actions_namespaceObject, "clearSettings", function() { return clearSettings; });

// NAMESPACE OBJECT: ./packages/data/build-module/settings/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getSettings", function() { return resolvers_getSettings; });
__webpack_require__.d(resolvers_namespaceObject, "getSettingsForGroup", function() { return resolvers_getSettingsForGroup; });

// NAMESPACE OBJECT: ./packages/data/build-module/plugins/selectors.js
var plugins_selectors_namespaceObject = {};
__webpack_require__.r(plugins_selectors_namespaceObject);
__webpack_require__.d(plugins_selectors_namespaceObject, "getActivePlugins", function() { return getActivePlugins; });
__webpack_require__.d(plugins_selectors_namespaceObject, "getInstalledPlugins", function() { return getInstalledPlugins; });
__webpack_require__.d(plugins_selectors_namespaceObject, "isPluginsRequesting", function() { return isPluginsRequesting; });
__webpack_require__.d(plugins_selectors_namespaceObject, "getPluginsError", function() { return getPluginsError; });
__webpack_require__.d(plugins_selectors_namespaceObject, "isJetpackConnected", function() { return isJetpackConnected; });
__webpack_require__.d(plugins_selectors_namespaceObject, "getJetpackConnectUrl", function() { return getJetpackConnectUrl; });
__webpack_require__.d(plugins_selectors_namespaceObject, "getPluginInstallState", function() { return getPluginInstallState; });
__webpack_require__.d(plugins_selectors_namespaceObject, "getPaypalOnboardingStatus", function() { return getPaypalOnboardingStatus; });

// NAMESPACE OBJECT: ./packages/data/build-module/plugins/actions.js
var plugins_actions_namespaceObject = {};
__webpack_require__.r(plugins_actions_namespaceObject);
__webpack_require__.d(plugins_actions_namespaceObject, "updateActivePlugins", function() { return actions_updateActivePlugins; });
__webpack_require__.d(plugins_actions_namespaceObject, "updateInstalledPlugins", function() { return actions_updateInstalledPlugins; });
__webpack_require__.d(plugins_actions_namespaceObject, "setIsRequesting", function() { return actions_setIsRequesting; });
__webpack_require__.d(plugins_actions_namespaceObject, "setError", function() { return setError; });
__webpack_require__.d(plugins_actions_namespaceObject, "updateIsJetpackConnected", function() { return actions_updateIsJetpackConnected; });
__webpack_require__.d(plugins_actions_namespaceObject, "updateJetpackConnectUrl", function() { return updateJetpackConnectUrl; });
__webpack_require__.d(plugins_actions_namespaceObject, "installPlugins", function() { return installPlugins; });
__webpack_require__.d(plugins_actions_namespaceObject, "activatePlugins", function() { return activatePlugins; });
__webpack_require__.d(plugins_actions_namespaceObject, "installAndActivatePlugins", function() { return installAndActivatePlugins; });
__webpack_require__.d(plugins_actions_namespaceObject, "createErrorNotice", function() { return actions_createErrorNotice; });
__webpack_require__.d(plugins_actions_namespaceObject, "connectToJetpack", function() { return connectToJetpack; });
__webpack_require__.d(plugins_actions_namespaceObject, "installJetpackAndConnect", function() { return installJetpackAndConnect; });
__webpack_require__.d(plugins_actions_namespaceObject, "connectToJetpackWithFailureRedirect", function() { return connectToJetpackWithFailureRedirect; });
__webpack_require__.d(plugins_actions_namespaceObject, "formatErrors", function() { return formatErrors; });
__webpack_require__.d(plugins_actions_namespaceObject, "setPaypalOnboardingStatus", function() { return setPaypalOnboardingStatus; });

// NAMESPACE OBJECT: ./packages/data/build-module/options/selectors.js
var options_selectors_namespaceObject = {};
__webpack_require__.r(options_selectors_namespaceObject);
__webpack_require__.d(options_selectors_namespaceObject, "getOption", function() { return getOption; });
__webpack_require__.d(options_selectors_namespaceObject, "getOptionsRequestingError", function() { return getOptionsRequestingError; });
__webpack_require__.d(options_selectors_namespaceObject, "isOptionsUpdating", function() { return isOptionsUpdating; });
__webpack_require__.d(options_selectors_namespaceObject, "getOptionsUpdatingError", function() { return getOptionsUpdatingError; });

// NAMESPACE OBJECT: ./packages/data/build-module/options/actions.js
var options_actions_namespaceObject = {};
__webpack_require__.r(options_actions_namespaceObject);
__webpack_require__.d(options_actions_namespaceObject, "receiveOptions", function() { return actions_receiveOptions; });
__webpack_require__.d(options_actions_namespaceObject, "setRequestingError", function() { return setRequestingError; });
__webpack_require__.d(options_actions_namespaceObject, "setUpdatingError", function() { return setUpdatingError; });
__webpack_require__.d(options_actions_namespaceObject, "setIsUpdating", function() { return setIsUpdating; });
__webpack_require__.d(options_actions_namespaceObject, "updateOptions", function() { return updateOptions; });

// NAMESPACE OBJECT: ./packages/data/build-module/options/resolvers.js
var options_resolvers_namespaceObject = {};
__webpack_require__.r(options_resolvers_namespaceObject);
__webpack_require__.d(options_resolvers_namespaceObject, "getOption", function() { return resolvers_getOption; });

// NAMESPACE OBJECT: ./packages/data/build-module/plugins/resolvers.js
var plugins_resolvers_namespaceObject = {};
__webpack_require__.r(plugins_resolvers_namespaceObject);
__webpack_require__.d(plugins_resolvers_namespaceObject, "getActivePlugins", function() { return resolvers_getActivePlugins; });
__webpack_require__.d(plugins_resolvers_namespaceObject, "getInstalledPlugins", function() { return resolvers_getInstalledPlugins; });
__webpack_require__.d(plugins_resolvers_namespaceObject, "isJetpackConnected", function() { return resolvers_isJetpackConnected; });
__webpack_require__.d(plugins_resolvers_namespaceObject, "getJetpackConnectUrl", function() { return resolvers_getJetpackConnectUrl; });
__webpack_require__.d(plugins_resolvers_namespaceObject, "getPaypalOnboardingStatus", function() { return resolvers_getPaypalOnboardingStatus; });

// NAMESPACE OBJECT: ./packages/data/build-module/onboarding/selectors.js
var onboarding_selectors_namespaceObject = {};
__webpack_require__.r(onboarding_selectors_namespaceObject);
__webpack_require__.d(onboarding_selectors_namespaceObject, "getProfileItems", function() { return getProfileItems; });
__webpack_require__.d(onboarding_selectors_namespaceObject, "getTasksStatus", function() { return getTasksStatus; });
__webpack_require__.d(onboarding_selectors_namespaceObject, "getOnboardingError", function() { return getOnboardingError; });
__webpack_require__.d(onboarding_selectors_namespaceObject, "isOnboardingRequesting", function() { return isOnboardingRequesting; });

// NAMESPACE OBJECT: ./packages/data/build-module/onboarding/actions.js
var onboarding_actions_namespaceObject = {};
__webpack_require__.r(onboarding_actions_namespaceObject);
__webpack_require__.d(onboarding_actions_namespaceObject, "setError", function() { return actions_setError; });
__webpack_require__.d(onboarding_actions_namespaceObject, "setIsRequesting", function() { return onboarding_actions_setIsRequesting; });
__webpack_require__.d(onboarding_actions_namespaceObject, "setProfileItems", function() { return actions_setProfileItems; });
__webpack_require__.d(onboarding_actions_namespaceObject, "setTasksStatus", function() { return actions_setTasksStatus; });
__webpack_require__.d(onboarding_actions_namespaceObject, "updateProfileItems", function() { return updateProfileItems; });

// NAMESPACE OBJECT: ./packages/data/build-module/onboarding/resolvers.js
var onboarding_resolvers_namespaceObject = {};
__webpack_require__.r(onboarding_resolvers_namespaceObject);
__webpack_require__.d(onboarding_resolvers_namespaceObject, "getProfileItems", function() { return resolvers_getProfileItems; });
__webpack_require__.d(onboarding_resolvers_namespaceObject, "getTasksStatus", function() { return resolvers_getTasksStatus; });

// NAMESPACE OBJECT: ./packages/data/build-module/reviews/selectors.js
var reviews_selectors_namespaceObject = {};
__webpack_require__.r(reviews_selectors_namespaceObject);
__webpack_require__.d(reviews_selectors_namespaceObject, "getReviews", function() { return getReviews; });
__webpack_require__.d(reviews_selectors_namespaceObject, "getReviewsTotalCount", function() { return getReviewsTotalCount; });
__webpack_require__.d(reviews_selectors_namespaceObject, "getReviewsError", function() { return getReviewsError; });

// NAMESPACE OBJECT: ./packages/data/build-module/reviews/actions.js
var reviews_actions_namespaceObject = {};
__webpack_require__.r(reviews_actions_namespaceObject);
__webpack_require__.d(reviews_actions_namespaceObject, "updateReviews", function() { return updateReviews; });
__webpack_require__.d(reviews_actions_namespaceObject, "updateReview", function() { return updateReview; });
__webpack_require__.d(reviews_actions_namespaceObject, "deleteReview", function() { return deleteReview; });
__webpack_require__.d(reviews_actions_namespaceObject, "setReviewIsUpdating", function() { return setReviewIsUpdating; });
__webpack_require__.d(reviews_actions_namespaceObject, "setReview", function() { return setReview; });
__webpack_require__.d(reviews_actions_namespaceObject, "setError", function() { return reviews_actions_setError; });

// NAMESPACE OBJECT: ./packages/data/build-module/reviews/resolvers.js
var reviews_resolvers_namespaceObject = {};
__webpack_require__.r(reviews_resolvers_namespaceObject);
__webpack_require__.d(reviews_resolvers_namespaceObject, "getReviews", function() { return resolvers_getReviews; });
__webpack_require__.d(reviews_resolvers_namespaceObject, "getReviewsTotalCount", function() { return resolvers_getReviewsTotalCount; });

// NAMESPACE OBJECT: ./packages/data/build-module/notes/selectors.js
var notes_selectors_namespaceObject = {};
__webpack_require__.r(notes_selectors_namespaceObject);
__webpack_require__.d(notes_selectors_namespaceObject, "getNotes", function() { return getNotes; });
__webpack_require__.d(notes_selectors_namespaceObject, "getNotesError", function() { return getNotesError; });
__webpack_require__.d(notes_selectors_namespaceObject, "isNotesRequesting", function() { return isNotesRequesting; });

// NAMESPACE OBJECT: ./packages/data/build-module/notes/actions.js
var notes_actions_namespaceObject = {};
__webpack_require__.r(notes_actions_namespaceObject);
__webpack_require__.d(notes_actions_namespaceObject, "triggerNoteAction", function() { return triggerNoteAction; });
__webpack_require__.d(notes_actions_namespaceObject, "removeNote", function() { return removeNote; });
__webpack_require__.d(notes_actions_namespaceObject, "removeAllNotes", function() { return removeAllNotes; });
__webpack_require__.d(notes_actions_namespaceObject, "batchUpdateNotes", function() { return batchUpdateNotes; });
__webpack_require__.d(notes_actions_namespaceObject, "updateNote", function() { return updateNote; });
__webpack_require__.d(notes_actions_namespaceObject, "setNote", function() { return setNote; });
__webpack_require__.d(notes_actions_namespaceObject, "setNoteIsUpdating", function() { return setNoteIsUpdating; });
__webpack_require__.d(notes_actions_namespaceObject, "setNotes", function() { return setNotes; });
__webpack_require__.d(notes_actions_namespaceObject, "setNotesQuery", function() { return setNotesQuery; });
__webpack_require__.d(notes_actions_namespaceObject, "setError", function() { return notes_actions_setError; });
__webpack_require__.d(notes_actions_namespaceObject, "setIsRequesting", function() { return notes_actions_setIsRequesting; });

// NAMESPACE OBJECT: ./packages/data/build-module/notes/resolvers.js
var notes_resolvers_namespaceObject = {};
__webpack_require__.r(notes_resolvers_namespaceObject);
__webpack_require__.d(notes_resolvers_namespaceObject, "getNotes", function() { return resolvers_getNotes; });

// NAMESPACE OBJECT: ./packages/data/build-module/reports/selectors.js
var reports_selectors_namespaceObject = {};
__webpack_require__.r(reports_selectors_namespaceObject);
__webpack_require__.d(reports_selectors_namespaceObject, "getReportItemsError", function() { return selectors_getReportItemsError; });
__webpack_require__.d(reports_selectors_namespaceObject, "getReportItems", function() { return selectors_getReportItems; });
__webpack_require__.d(reports_selectors_namespaceObject, "getReportStats", function() { return selectors_getReportStats; });
__webpack_require__.d(reports_selectors_namespaceObject, "getReportStatsError", function() { return selectors_getReportStatsError; });

// NAMESPACE OBJECT: ./packages/data/build-module/reports/actions.js
var reports_actions_namespaceObject = {};
__webpack_require__.r(reports_actions_namespaceObject);
__webpack_require__.d(reports_actions_namespaceObject, "setReportItemsError", function() { return setReportItemsError; });
__webpack_require__.d(reports_actions_namespaceObject, "setReportItems", function() { return setReportItems; });
__webpack_require__.d(reports_actions_namespaceObject, "setReportStats", function() { return setReportStats; });
__webpack_require__.d(reports_actions_namespaceObject, "setReportStatsError", function() { return setReportStatsError; });

// NAMESPACE OBJECT: ./packages/data/build-module/reports/resolvers.js
var reports_resolvers_namespaceObject = {};
__webpack_require__.r(reports_resolvers_namespaceObject);
__webpack_require__.d(reports_resolvers_namespaceObject, "getReportItems", function() { return resolvers_getReportItems; });
__webpack_require__.d(reports_resolvers_namespaceObject, "getReportStats", function() { return resolvers_getReportStats; });

// NAMESPACE OBJECT: ./packages/data/build-module/items/selectors.js
var items_selectors_namespaceObject = {};
__webpack_require__.r(items_selectors_namespaceObject);
__webpack_require__.d(items_selectors_namespaceObject, "getItems", function() { return selectors_getItems; });
__webpack_require__.d(items_selectors_namespaceObject, "getItemsTotalCount", function() { return selectors_getItemsTotalCount; });
__webpack_require__.d(items_selectors_namespaceObject, "getItemsError", function() { return selectors_getItemsError; });

// NAMESPACE OBJECT: ./packages/data/build-module/items/actions.js
var items_actions_namespaceObject = {};
__webpack_require__.r(items_actions_namespaceObject);
__webpack_require__.d(items_actions_namespaceObject, "setItem", function() { return setItem; });
__webpack_require__.d(items_actions_namespaceObject, "setItems", function() { return setItems; });
__webpack_require__.d(items_actions_namespaceObject, "setItemsTotalCount", function() { return setItemsTotalCount; });
__webpack_require__.d(items_actions_namespaceObject, "setError", function() { return items_actions_setError; });
__webpack_require__.d(items_actions_namespaceObject, "updateProductStock", function() { return updateProductStock; });
__webpack_require__.d(items_actions_namespaceObject, "createProductFromTemplate", function() { return createProductFromTemplate; });

// NAMESPACE OBJECT: ./packages/data/build-module/items/resolvers.js
var items_resolvers_namespaceObject = {};
__webpack_require__.r(items_resolvers_namespaceObject);
__webpack_require__.d(items_resolvers_namespaceObject, "getItems", function() { return resolvers_getItems; });
__webpack_require__.d(items_resolvers_namespaceObject, "getReviewsTotalCount", function() { return items_resolvers_getReviewsTotalCount; });
__webpack_require__.d(items_resolvers_namespaceObject, "getItemsTotalCount", function() { return resolvers_getItemsTotalCount; });

// NAMESPACE OBJECT: ./packages/data/build-module/navigation/selectors.js
var navigation_selectors_namespaceObject = {};
__webpack_require__.r(navigation_selectors_namespaceObject);
__webpack_require__.d(navigation_selectors_namespaceObject, "getMenuItems", function() { return selectors_getMenuItems; });
__webpack_require__.d(navigation_selectors_namespaceObject, "getActiveItem", function() { return getActiveItem; });

// NAMESPACE OBJECT: ./packages/data/build-module/navigation/actions.js
var navigation_actions_namespaceObject = {};
__webpack_require__.r(navigation_actions_namespaceObject);
__webpack_require__.d(navigation_actions_namespaceObject, "setActiveItem", function() { return setActiveItem; });
__webpack_require__.d(navigation_actions_namespaceObject, "setMenuItems", function() { return actions_setMenuItems; });
__webpack_require__.d(navigation_actions_namespaceObject, "addMenuItems", function() { return addMenuItems; });

// NAMESPACE OBJECT: ./packages/data/build-module/export/selectors.js
var export_selectors_namespaceObject = {};
__webpack_require__.r(export_selectors_namespaceObject);
__webpack_require__.d(export_selectors_namespaceObject, "isExportRequesting", function() { return selectors_isExportRequesting; });
__webpack_require__.d(export_selectors_namespaceObject, "getExportId", function() { return selectors_getExportId; });
__webpack_require__.d(export_selectors_namespaceObject, "getError", function() { return selectors_getError; });

// NAMESPACE OBJECT: ./packages/data/build-module/export/actions.js
var export_actions_namespaceObject = {};
__webpack_require__.r(export_actions_namespaceObject);
__webpack_require__.d(export_actions_namespaceObject, "setExportId", function() { return setExportId; });
__webpack_require__.d(export_actions_namespaceObject, "setIsRequesting", function() { return export_actions_setIsRequesting; });
__webpack_require__.d(export_actions_namespaceObject, "setError", function() { return export_actions_setError; });
__webpack_require__.d(export_actions_namespaceObject, "startExport", function() { return startExport; });

// NAMESPACE OBJECT: ./packages/data/build-module/import/selectors.js
var import_selectors_namespaceObject = {};
__webpack_require__.r(import_selectors_namespaceObject);
__webpack_require__.d(import_selectors_namespaceObject, "getImportStarted", function() { return getImportStarted; });
__webpack_require__.d(import_selectors_namespaceObject, "getFormSettings", function() { return getFormSettings; });
__webpack_require__.d(import_selectors_namespaceObject, "getImportStatus", function() { return getImportStatus; });
__webpack_require__.d(import_selectors_namespaceObject, "getImportTotals", function() { return getImportTotals; });
__webpack_require__.d(import_selectors_namespaceObject, "getImportError", function() { return getImportError; });

// NAMESPACE OBJECT: ./packages/data/build-module/import/actions.js
var import_actions_namespaceObject = {};
__webpack_require__.r(import_actions_namespaceObject);
__webpack_require__.d(import_actions_namespaceObject, "setImportStarted", function() { return setImportStarted; });
__webpack_require__.d(import_actions_namespaceObject, "setImportPeriod", function() { return setImportPeriod; });
__webpack_require__.d(import_actions_namespaceObject, "setSkipPrevious", function() { return setSkipPrevious; });
__webpack_require__.d(import_actions_namespaceObject, "setImportStatus", function() { return setImportStatus; });
__webpack_require__.d(import_actions_namespaceObject, "setImportTotals", function() { return setImportTotals; });
__webpack_require__.d(import_actions_namespaceObject, "setImportError", function() { return setImportError; });
__webpack_require__.d(import_actions_namespaceObject, "updateImportation", function() { return updateImportation; });

// NAMESPACE OBJECT: ./packages/data/build-module/import/resolvers.js
var import_resolvers_namespaceObject = {};
__webpack_require__.r(import_resolvers_namespaceObject);
__webpack_require__.d(import_resolvers_namespaceObject, "getImportStatus", function() { return resolvers_getImportStatus; });
__webpack_require__.d(import_resolvers_namespaceObject, "getImportTotals", function() { return resolvers_getImportTotals; });

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(15);

// EXTERNAL MODULE: external {"this":["wp","dataControls"]}
var external_this_wp_dataControls_ = __webpack_require__(17);

// CONCATENATED MODULE: ./packages/data/build-module/settings/constants.js
var STORE_NAME = 'wc/admin/settings';
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(20);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./packages/data/build-module/utils.js
function getResourceName(prefix, identifier) {
  var identifierString = JSON.stringify(identifier, Object.keys(identifier).sort());
  return "".concat(prefix, ":").concat(identifierString);
}
function getResourcePrefix(resourceName) {
  var hasPrefixIndex = resourceName.indexOf(':');
  return hasPrefixIndex < 0 ? resourceName : resourceName.substring(0, hasPrefixIndex);
}
function isResourcePrefix(resourceName, prefix) {
  var resourcePrefix = getResourcePrefix(resourceName);
  return resourcePrefix === prefix;
}
function getResourceIdentifier(resourceName) {
  var identifierString = resourceName.substring(resourceName.indexOf(':') + 1);
  return JSON.parse(identifierString);
}
// CONCATENATED MODULE: ./packages/data/build-module/settings/selectors.js

/**
 * Internal dependencies
 */


var selectors_getSettingsGroupNames = function getSettingsGroupNames(state) {
  var groupNames = new Set(Object.keys(state).map(function (resourceName) {
    return getResourcePrefix(resourceName);
  }));
  return toConsumableArray_default()(groupNames);
};
var selectors_getSettings = function getSettings(state, group) {
  var settings = {};
  var settingIds = state[group] && state[group].data || [];

  if (settingIds.length === 0) {
    return settings;
  }

  settingIds.forEach(function (id) {
    settings[id] = state[getResourceName(group, id)].data;
  });
  return settings;
};
var getDirtyKeys = function getDirtyKeys(state, group) {
  return state[group].dirty || [];
};
var selectors_getIsDirty = function getIsDirty(state, group) {
  var keys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var dirtyMap = getDirtyKeys(state, group); // if empty array bail

  if (dirtyMap.length === 0) {
    return false;
  } // if at least one of the keys is in the dirty map then the state is dirty
  // meaning it hasn't been persisted.


  return keys.some(function (key) {
    return dirtyMap.includes(key);
  });
};
var selectors_getSettingsForGroup = function getSettingsForGroup(state, group, keys) {
  var allSettings = selectors_getSettings(state, group);
  return keys.reduce(function (accumulator, key) {
    accumulator[key] = allSettings[key] || {};
    return accumulator;
  }, {});
};
var selectors_isUpdateSettingsRequesting = function isUpdateSettingsRequesting(state, group) {
  return state[group] && Boolean(state[group].isRequesting);
};
/**
 * Retrieves a setting value from the setting store.
 *
 * @param {Object}   state                        State param added by wp.data.
 * @param {string}   group                        The settings group.
 * @param {string}   name                         The identifier for the setting.
 * @param {*}    [fallback=false]             The value to use as a fallback
 *                                                if the setting is not in the
 *                                                state.
 * @param {Function} [filter=( val ) => val]  	  A callback for filtering the
 *                                                value before it's returned.
 *                                                Receives both the found value
 *                                                (if it exists for the key) and
 *                                                the provided fallback arg.
 *
 * @return {*}  The value present in the settings state for the given
 *                   name.
 */

function getSetting(state, group, name) {
  var fallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var filter = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function (val) {
    return val;
  };
  var resourceName = getResourceName(group, name);
  var value = state[resourceName] && state[resourceName].data || fallback;
  return filter(value, fallback);
}
var selectors_getLastSettingsErrorForGroup = function getLastSettingsErrorForGroup(state, group) {
  var settingsIds = state[group].data;

  if (settingsIds.length === 0) {
    return state[group].error;
  }

  return toConsumableArray_default()(settingsIds).pop().error;
};
var selectors_getSettingsError = function getSettingsError(state, group, id) {
  if (!id) {
    return state[group] && state[group].error || false;
  }

  return state[getResourceName(group, id)].error || false;
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(8);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);

// CONCATENATED MODULE: ./packages/data/build-module/constants.js
var JETPACK_NAMESPACE = '/jetpack/v4';
var NAMESPACE = '/wc-analytics';
var WC_ADMIN_NAMESPACE = '/wc-admin';
var WCS_NAMESPACE = '/wc/v1'; // WCS endpoints like Stripe are not avaiable on later /wc versions
// WordPress & WooCommerce both set a hard limit of 100 for the per_page parameter

var MAX_PER_PAGE = 100;
var SECOND = 1000;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
var WEEK = 7 * DAY;
var MONTH = 365 * DAY / 12;
var DEFAULT_REQUIREMENT = {
  timeout: 1 * MINUTE,
  freshness: 30 * MINUTE
};
var DEFAULT_ACTIONABLE_STATUSES = ['processing', 'on-hold'];
var QUERY_DEFAULTS = {
  pageSize: 25,
  period: 'month',
  compare: 'previous_year',
  noteTypes: ['info', 'marketing', 'survey', 'warning']
};
// CONCATENATED MODULE: ./packages/data/build-module/settings/action-types.js
var TYPES = {
  UPDATE_SETTINGS_FOR_GROUP: 'UPDATE_SETTINGS_FOR_GROUP',
  UPDATE_ERROR_FOR_GROUP: 'UPDATE_ERROR_FOR_GROUP',
  CLEAR_SETTINGS: 'CLEAR_SETTINGS',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING',
  CLEAR_IS_DIRTY: 'CLEAR_IS_DIRTY'
};
/* harmony default export */ var action_types = (TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/settings/actions.js


var _marked = /*#__PURE__*/regenerator_default.a.mark(actions_updateAndPersistSettingsForGroup),
    _marked2 = /*#__PURE__*/regenerator_default.a.mark(actions_persistSettingsForGroup);
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */




function actions_updateSettingsForGroup(group, data) {
  var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date();
  return {
    type: action_types.UPDATE_SETTINGS_FOR_GROUP,
    group: group,
    data: data,
    time: time
  };
}
function updateErrorForGroup(group, data, error) {
  var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Date();
  return {
    type: action_types.UPDATE_ERROR_FOR_GROUP,
    group: group,
    data: data,
    error: error,
    time: time
  };
}
function setIsRequesting(group, isRequesting) {
  return {
    type: action_types.SET_IS_REQUESTING,
    group: group,
    isRequesting: isRequesting
  };
}
function actions_clearIsDirty(group) {
  return {
    type: action_types.CLEAR_IS_DIRTY,
    group: group
  };
} // allows updating and persisting immediately in one action.

function actions_updateAndPersistSettingsForGroup(group, data) {
  return regenerator_default.a.wrap(function updateAndPersistSettingsForGroup$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return actions_updateSettingsForGroup(group, data);

        case 2:
          return _context.delegateYield(actions_persistSettingsForGroup(group), "t0", 3);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
} // this would replace setSettingsForGroup

function actions_persistSettingsForGroup(group) {
  var dirtyKeys, dirtyData, url, update, results;
  return regenerator_default.a.wrap(function persistSettingsForGroup$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return setIsRequesting(group, true);

        case 2:
          _context2.next = 4;
          return Object(external_this_wp_dataControls_["select"])(STORE_NAME, 'getDirtyKeys', group);

        case 4:
          dirtyKeys = _context2.sent;

          if (!(dirtyKeys.length === 0)) {
            _context2.next = 9;
            break;
          }

          _context2.next = 8;
          return setIsRequesting(group, false);

        case 8:
          return _context2.abrupt("return");

        case 9:
          _context2.next = 11;
          return Object(external_this_wp_dataControls_["select"])(STORE_NAME, 'getSettingsForGroup', group, dirtyKeys);

        case 11:
          dirtyData = _context2.sent;
          url = "".concat(NAMESPACE, "/settings/").concat(group, "/batch");
          update = dirtyKeys.reduce(function (updates, key) {
            var u = Object.keys(dirtyData[key]).map(function (k) {
              return {
                id: k,
                value: dirtyData[key][k]
              };
            });
            return Object(external_lodash_["concat"])(updates, u);
          }, []);
          _context2.prev = 14;
          _context2.next = 17;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'POST',
            data: {
              update: update
            }
          });

        case 17:
          results = _context2.sent;
          _context2.next = 20;
          return setIsRequesting(group, false);

        case 20:
          if (results) {
            _context2.next = 22;
            break;
          }

          throw new Error(Object(external_this_wp_i18n_["__"])('There was a problem updating your settings.', 'woocommerce-admin'));

        case 22:
          _context2.next = 24;
          return actions_clearIsDirty(group);

        case 24:
          _context2.next = 33;
          break;

        case 26:
          _context2.prev = 26;
          _context2.t0 = _context2["catch"](14);
          _context2.next = 30;
          return updateErrorForGroup(group, null, _context2.t0);

        case 30:
          _context2.next = 32;
          return setIsRequesting(group, false);

        case 32:
          throw _context2.t0;

        case 33:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[14, 26]]);
}
function clearSettings() {
  return {
    type: action_types.CLEAR_SETTINGS
  };
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(5);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./packages/data/build-module/settings/resolvers.js



var resolvers_marked = /*#__PURE__*/regenerator_default.a.mark(resolvers_getSettings),
    resolvers_marked2 = /*#__PURE__*/regenerator_default.a.mark(resolvers_getSettingsForGroup);
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */





function settingsToSettingsResource(settings) {
  return settings.reduce(function (resource, setting) {
    resource[setting.id] = setting.value;
    return resource;
  }, {});
}

function resolvers_getSettings(group) {
  var url, results, resource;
  return regenerator_default.a.wrap(function getSettings$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(external_this_wp_dataControls_["dispatch"])(STORE_NAME, 'setIsRequesting', group, true);

        case 2:
          _context.prev = 2;
          url = NAMESPACE + '/settings/' + group;
          _context.next = 6;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'GET'
          });

        case 6:
          results = _context.sent;
          resource = settingsToSettingsResource(results);
          return _context.abrupt("return", actions_updateSettingsForGroup(group, defineProperty_default()({}, group, resource)));

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](2);
          return _context.abrupt("return", updateErrorForGroup(group, null, _context.t0.message));

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, resolvers_marked, null, [[2, 11]]);
}
function resolvers_getSettingsForGroup(group) {
  return regenerator_default.a.wrap(function getSettingsForGroup$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", resolvers_getSettings(group));

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  }, resolvers_marked2);
}
// CONCATENATED MODULE: ./packages/data/build-module/settings/reducer.js



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




var reducer_updateGroupDataInNewState = function updateGroupDataInNewState(newState, _ref) {
  var group = _ref.group,
      groupIds = _ref.groupIds,
      data = _ref.data,
      time = _ref.time,
      error = _ref.error;
  groupIds.forEach(function (id) {
    newState[getResourceName(group, id)] = {
      data: data[id],
      lastReceived: time,
      error: error
    };
  });
  return newState;
};

var reducer_receiveSettings = function receiveSettings() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref2 = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref2.type,
      group = _ref2.group,
      data = _ref2.data,
      error = _ref2.error,
      time = _ref2.time,
      isRequesting = _ref2.isRequesting;

  var newState = {};

  switch (type) {
    case action_types.SET_IS_REQUESTING:
      state = _objectSpread(_objectSpread({}, state), {}, defineProperty_default()({}, group, _objectSpread(_objectSpread({}, state[group]), {}, {
        isRequesting: isRequesting
      })));
      break;

    case action_types.CLEAR_IS_DIRTY:
      state = _objectSpread(_objectSpread({}, state), {}, defineProperty_default()({}, group, _objectSpread(_objectSpread({}, state[group]), {}, {
        dirty: []
      })));
      break;

    case action_types.UPDATE_SETTINGS_FOR_GROUP:
    case action_types.UPDATE_ERROR_FOR_GROUP:
      var groupIds = data ? Object.keys(data) : [];

      if (data === null) {
        state = _objectSpread(_objectSpread({}, state), {}, defineProperty_default()({}, group, {
          data: state[group] ? state[group].data : [],
          error: error,
          lastReceived: time
        }));
      } else {
        state = _objectSpread(_objectSpread({}, state), {}, defineProperty_default()({}, group, {
          data: state[group] && state[group].data ? [].concat(toConsumableArray_default()(state[group].data), toConsumableArray_default()(groupIds)) : groupIds,
          error: error,
          lastReceived: time,
          isRequesting: false,
          dirty: state[group] && state[group].dirty ? Object(external_lodash_["union"])(state[group].dirty, groupIds) : groupIds
        }), reducer_updateGroupDataInNewState(newState, {
          group: group,
          groupIds: groupIds,
          data: data,
          time: time,
          error: error
        }));
      }

      break;

    case action_types.CLEAR_SETTINGS:
      state = {};
  }

  return state;
};

/* harmony default export */ var settings_reducer = (reducer_receiveSettings);
// CONCATENATED MODULE: ./packages/data/build-module/settings/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






Object(external_this_wp_data_["registerStore"])(STORE_NAME, {
  reducer: settings_reducer,
  actions: actions_namespaceObject,
  controls: external_this_wp_dataControls_["controls"],
  selectors: selectors_namespaceObject,
  resolvers: resolvers_namespaceObject
});
var SETTINGS_STORE_NAME = STORE_NAME;
// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","compose"]}
var external_this_wp_compose_ = __webpack_require__(18);

// CONCATENATED MODULE: ./packages/data/build-module/settings/with-settings-hydration.js

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


var with_settings_hydration_withSettingsHydration = function withSettingsHydration(group, settings) {
  return Object(external_this_wp_compose_["createHigherOrderComponent"])(function (OriginalComponent) {
    return function (props) {
      var settingsRef = Object(external_this_wp_element_["useRef"])(settings);
      Object(external_this_wp_data_["useSelect"])(function (select, registry) {
        if (!settingsRef.current) {
          return;
        }

        var _select = select(STORE_NAME),
            isResolving = _select.isResolving,
            hasFinishedResolution = _select.hasFinishedResolution;

        var _registry$dispatch = registry.dispatch(STORE_NAME),
            startResolution = _registry$dispatch.startResolution,
            finishResolution = _registry$dispatch.finishResolution,
            updateSettingsForGroup = _registry$dispatch.updateSettingsForGroup,
            clearIsDirty = _registry$dispatch.clearIsDirty;

        if (!isResolving('getSettings', [group]) && !hasFinishedResolution('getSettings', [group])) {
          startResolution('getSettings', [group]);
          updateSettingsForGroup(group, settingsRef.current);
          clearIsDirty(group);
          finishResolution('getSettings', [group]);
        }
      }, []);
      return Object(external_this_wp_element_["createElement"])(OriginalComponent, props);
    };
  }, 'withSettingsHydration');
};
// CONCATENATED MODULE: ./packages/data/build-module/settings/use-settings.js


function use_settings_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function use_settings_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      use_settings_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      use_settings_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


var use_settings_useSettings = function useSettings(group) {
  var settingsKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _useSelect = Object(external_this_wp_data_["useSelect"])(function (select) {
    var _select = select(STORE_NAME),
        getLastSettingsErrorForGroup = _select.getLastSettingsErrorForGroup,
        getSettingsForGroup = _select.getSettingsForGroup,
        getIsDirty = _select.getIsDirty,
        isUpdateSettingsRequesting = _select.isUpdateSettingsRequesting;

    return {
      requestedSettings: getSettingsForGroup(group, settingsKeys),
      settingsError: Boolean(getLastSettingsErrorForGroup(group)),
      isRequesting: isUpdateSettingsRequesting(group),
      isDirty: getIsDirty(group, settingsKeys)
    };
  }, [group, settingsKeys]),
      requestedSettings = _useSelect.requestedSettings,
      settingsError = _useSelect.settingsError,
      isRequesting = _useSelect.isRequesting,
      isDirty = _useSelect.isDirty;

  var _useDispatch = Object(external_this_wp_data_["useDispatch"])(STORE_NAME),
      persistSettingsForGroup = _useDispatch.persistSettingsForGroup,
      updateAndPersistSettingsForGroup = _useDispatch.updateAndPersistSettingsForGroup,
      updateSettingsForGroup = _useDispatch.updateSettingsForGroup;

  var updateSettings = Object(external_this_wp_element_["useCallback"])(function (name, data) {
    updateSettingsForGroup(group, defineProperty_default()({}, name, data));
  }, [group]);
  var persistSettings = Object(external_this_wp_element_["useCallback"])(function () {
    // this action would simply persist all settings marked as dirty in the
    // store state and then remove the dirty record in the isDirtyMap
    persistSettingsForGroup(group);
  }, [group]);
  var updateAndPersistSettings = Object(external_this_wp_element_["useCallback"])(function (name, data) {
    updateAndPersistSettingsForGroup(group, defineProperty_default()({}, name, data));
  }, [group]);
  return use_settings_objectSpread(use_settings_objectSpread({
    settingsError: settingsError,
    isRequesting: isRequesting,
    isDirty: isDirty
  }, requestedSettings), {}, {
    persistSettings: persistSettings,
    updateAndPersistSettings: updateAndPersistSettings,
    updateSettings: updateSettings
  });
};
// CONCATENATED MODULE: ./packages/data/build-module/plugins/constants.js
/**
 * External dependencies
 */

var constants_STORE_NAME = 'wc/admin/plugins';
var PAYPAL_NAMESPACE = '/wc-paypal/v1';
/**
 * Plugin slugs and names as key/value pairs.
 */

var pluginNames = {
  'facebook-for-woocommerce': Object(external_this_wp_i18n_["__"])('Facebook for WooCommerce', 'woocommerce-admin'),
  jetpack: Object(external_this_wp_i18n_["__"])('Jetpack', 'woocommerce-admin'),
  'klarna-checkout-for-woocommerce': Object(external_this_wp_i18n_["__"])('Klarna Checkout for WooCommerce', 'woocommerce-admin'),
  'klarna-payments-for-woocommerce': Object(external_this_wp_i18n_["__"])('Klarna Payments for WooCommerce', 'woocommerce-admin'),
  'mailchimp-for-woocommerce': Object(external_this_wp_i18n_["__"])('Mailchimp for WooCommerce', 'woocommerce-admin'),
  'creative-mail-by-constant-contact': Object(external_this_wp_i18n_["__"])('Creative Mail for WooCommerce', 'woocommerce-admin'),
  'woocommerce-gateway-paypal-express-checkout': Object(external_this_wp_i18n_["__"])('WooCommerce PayPal', 'woocommerce-admin'),
  'woocommerce-gateway-stripe': Object(external_this_wp_i18n_["__"])('WooCommerce Stripe', 'woocommerce-admin'),
  'woocommerce-payfast-gateway': Object(external_this_wp_i18n_["__"])('WooCommerce PayFast', 'woocommerce-admin'),
  'woocommerce-payments': Object(external_this_wp_i18n_["__"])('WooCommerce Payments', 'woocommerce-admin'),
  'woocommerce-services': Object(external_this_wp_i18n_["__"])('WooCommerce Shipping & Tax', 'woocommerce-admin'),
  'woocommerce-shipstation-integration': Object(external_this_wp_i18n_["__"])('WooCommerce ShipStation Gateway', 'woocommerce-admin'),
  'kliken-marketing-for-google': Object(external_this_wp_i18n_["__"])('Google Ads', 'woocommerce-admin'),
  'woo-razorpay': Object(external_this_wp_i18n_["__"])('Razorpay', 'woocommerce-admin')
};
// CONCATENATED MODULE: ./packages/data/build-module/plugins/selectors.js
var getActivePlugins = function getActivePlugins(state) {
  return state.active || [];
};
var getInstalledPlugins = function getInstalledPlugins(state) {
  return state.installed || [];
};
var isPluginsRequesting = function isPluginsRequesting(state, selector) {
  return state.requesting[selector] || false;
};
var getPluginsError = function getPluginsError(state, selector) {
  return state.errors[selector] || false;
};
var isJetpackConnected = function isJetpackConnected(state) {
  return state.jetpackConnection;
};
var getJetpackConnectUrl = function getJetpackConnectUrl(state, query) {
  return state.jetpackConnectUrls[query.redirect_url];
};
var getPluginInstallState = function getPluginInstallState(state, plugin) {
  if (state.active.includes(plugin)) {
    return 'activated';
  } else if (state.installed.includes(plugin)) {
    return 'installed';
  }

  return 'unavailable';
};
var getPaypalOnboardingStatus = function getPaypalOnboardingStatus(state) {
  return state.paypalOnboardingStatus;
};
// CONCATENATED MODULE: ./packages/data/build-module/plugins/action-types.js
var action_types_TYPES = {
  UPDATE_ACTIVE_PLUGINS: 'UPDATE_ACTIVE_PLUGINS',
  UPDATE_INSTALLED_PLUGINS: 'UPDATE_INSTALLED_PLUGINS',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING',
  SET_ERROR: 'SET_ERROR',
  UPDATE_JETPACK_CONNECTION: 'UPDATE_JETPACK_CONNECTION',
  UPDATE_JETPACK_CONNECT_URL: 'UPDATE_JETPACK_CONNECT_URL',
  SET_PAYPAL_ONBOARDING_STATUS: 'SET_PAYPAL_ONBOARDING_STATUS'
};
/* harmony default export */ var plugins_action_types = (action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/plugins/actions.js


var actions_marked = /*#__PURE__*/regenerator_default.a.mark(installPlugins),
    actions_marked2 = /*#__PURE__*/regenerator_default.a.mark(activatePlugins),
    _marked3 = /*#__PURE__*/regenerator_default.a.mark(installAndActivatePlugins),
    _marked4 = /*#__PURE__*/regenerator_default.a.mark(connectToJetpack),
    _marked5 = /*#__PURE__*/regenerator_default.a.mark(installJetpackAndConnect),
    _marked6 = /*#__PURE__*/regenerator_default.a.mark(connectToJetpackWithFailureRedirect);
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */




function actions_updateActivePlugins(active) {
  var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    type: plugins_action_types.UPDATE_ACTIVE_PLUGINS,
    active: active,
    replace: replace
  };
}
function actions_updateInstalledPlugins(installed) {
  var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    type: plugins_action_types.UPDATE_INSTALLED_PLUGINS,
    installed: installed,
    replace: replace
  };
}
function actions_setIsRequesting(selector, isRequesting) {
  return {
    type: plugins_action_types.SET_IS_REQUESTING,
    selector: selector,
    isRequesting: isRequesting
  };
}
function setError(selector, error) {
  return {
    type: plugins_action_types.SET_ERROR,
    selector: selector,
    error: error
  };
}
function actions_updateIsJetpackConnected(jetpackConnection) {
  return {
    type: plugins_action_types.UPDATE_JETPACK_CONNECTION,
    jetpackConnection: jetpackConnection
  };
}
function updateJetpackConnectUrl(redirectUrl, jetpackConnectUrl) {
  return {
    type: plugins_action_types.UPDATE_JETPACK_CONNECT_URL,
    jetpackConnectUrl: jetpackConnectUrl,
    redirectUrl: redirectUrl
  };
}
function installPlugins(plugins) {
  var results;
  return regenerator_default.a.wrap(function installPlugins$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return actions_setIsRequesting('installPlugins', true);

        case 2:
          _context.prev = 2;
          _context.next = 5;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: "".concat(WC_ADMIN_NAMESPACE, "/plugins/install"),
            method: 'POST',
            data: {
              plugins: plugins.join(',')
            }
          });

        case 5:
          results = _context.sent;

          if (!results.data.installed.length) {
            _context.next = 9;
            break;
          }

          _context.next = 9;
          return actions_updateInstalledPlugins(results.data.installed);

        case 9:
          if (!Object.keys(results.errors.errors).length) {
            _context.next = 11;
            break;
          }

          throw results.errors.errors;

        case 11:
          _context.next = 13;
          return actions_setIsRequesting('installPlugins', false);

        case 13:
          return _context.abrupt("return", results);

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](2);
          _context.next = 20;
          return setError('installPlugins', _context.t0);

        case 20:
          throw new Error(actions_formatErrorMessage(_context.t0));

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, actions_marked, null, [[2, 16]]);
}
function activatePlugins(plugins) {
  var results;
  return regenerator_default.a.wrap(function activatePlugins$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return actions_setIsRequesting('activatePlugins', true);

        case 2:
          _context2.prev = 2;
          _context2.next = 5;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: "".concat(WC_ADMIN_NAMESPACE, "/plugins/activate"),
            method: 'POST',
            data: {
              plugins: plugins.join(',')
            }
          });

        case 5:
          results = _context2.sent;

          if (!results.data.activated.length) {
            _context2.next = 9;
            break;
          }

          _context2.next = 9;
          return actions_updateActivePlugins(results.data.activated);

        case 9:
          if (!Object.keys(results.errors.errors).length) {
            _context2.next = 11;
            break;
          }

          throw results.errors.errors;

        case 11:
          _context2.next = 13;
          return actions_setIsRequesting('activatePlugins', false);

        case 13:
          return _context2.abrupt("return", results);

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](2);
          _context2.next = 20;
          return setError('activatePlugins', _context2.t0);

        case 20:
          throw new Error(formatErrors(_context2.t0));

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  }, actions_marked2, null, [[2, 16]]);
}
function installAndActivatePlugins(plugins) {
  var activations;
  return regenerator_default.a.wrap(function installAndActivatePlugins$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(external_this_wp_dataControls_["dispatch"])(constants_STORE_NAME, 'installPlugins', plugins);

        case 3:
          _context3.next = 5;
          return Object(external_this_wp_dataControls_["dispatch"])(constants_STORE_NAME, 'activatePlugins', plugins);

        case 5:
          activations = _context3.sent;
          return _context3.abrupt("return", activations);

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          throw _context3.t0;

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 9]]);
}
var actions_createErrorNotice = function createErrorNotice(errorMessage) {
  return Object(external_this_wp_dataControls_["dispatch"])('core/notices', 'createNotice', errorMessage);
};
function connectToJetpack(getAdminLink) {
  var url, error;
  return regenerator_default.a.wrap(function connectToJetpack$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(external_this_wp_dataControls_["select"])(constants_STORE_NAME, 'getJetpackConnectUrl', {
            redirect_url: getAdminLink('admin.php?page=wc-admin')
          });

        case 2:
          url = _context4.sent;
          _context4.next = 5;
          return Object(external_this_wp_dataControls_["select"])(constants_STORE_NAME, 'getPluginsError', 'getJetpackConnectUrl');

        case 5:
          error = _context4.sent;

          if (!error) {
            _context4.next = 10;
            break;
          }

          throw new Error(error);

        case 10:
          return _context4.abrupt("return", url);

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
function installJetpackAndConnect(errorAction, getAdminLink) {
  var url;
  return regenerator_default.a.wrap(function installJetpackAndConnect$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(external_this_wp_dataControls_["dispatch"])(constants_STORE_NAME, 'installPlugins', ['jetpack']);

        case 3:
          _context5.next = 5;
          return Object(external_this_wp_dataControls_["dispatch"])(constants_STORE_NAME, 'activatePlugins', ['jetpack']);

        case 5:
          _context5.next = 7;
          return Object(external_this_wp_dataControls_["dispatch"])(constants_STORE_NAME, 'connectToJetpack', getAdminLink);

        case 7:
          url = _context5.sent;
          window.location = url;
          _context5.next = 15;
          break;

        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 15;
          return errorAction(_context5.t0.message);

        case 15:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 11]]);
}
function connectToJetpackWithFailureRedirect(failureRedirect, errorAction, getAdminLink) {
  var url;
  return regenerator_default.a.wrap(function connectToJetpackWithFailureRedirect$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(external_this_wp_dataControls_["dispatch"])(constants_STORE_NAME, 'connectToJetpack', getAdminLink);

        case 3:
          url = _context6.sent;
          window.location = url;
          _context6.next = 12;
          break;

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          _context6.next = 11;
          return errorAction(_context6.t0.message);

        case 11:
          window.location = failureRedirect;

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 7]]);
}
function formatErrors(response) {
  if (response.errors) {
    // Replace the slug with a plugin name if a constant exists.
    Object.keys(response.errors).forEach(function (plugin) {
      response.errors[plugin] = response.errors[plugin].map(function (pluginError) {
        return pluginNames[plugin] ? pluginError.replace("`".concat(plugin, "`"), pluginNames[plugin]) : pluginError;
      });
    });
  }

  return response;
}
function setPaypalOnboardingStatus(status) {
  return {
    type: plugins_action_types.SET_PAYPAL_ONBOARDING_STATUS,
    paypalOnboardingStatus: status
  };
}

var actions_formatErrorMessage = function formatErrorMessage(pluginErrors) {
  var actionType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'install';
  return Object(external_this_wp_i18n_["sprintf"])(
  /* translators: %(actionType): install or activate (the plugin). %(pluginName): a plugin slug (e.g. woocommerce-services). %(error): a single error message or in plural a comma separated error message list.*/
  Object(external_this_wp_i18n_["_n"])('Could not %(actionType)s %(pluginName)s plugin, %(error)s', 'Could not %(actionType)s the following plugins: %(pluginName)s with these Errors: %(error)s', pluginErrors.length, 'woocommerce-admin'), {
    actionType: actionType,
    pluginName: Object.keys(pluginErrors).join(', '),
    error: Object.values(pluginErrors).join(', \n')
  });
};
// EXTERNAL MODULE: external {"this":["wp","url"]}
var external_this_wp_url_ = __webpack_require__(22);

// CONCATENATED MODULE: ./packages/data/build-module/options/constants.js
var options_constants_STORE_NAME = 'wc/admin/options';
// CONCATENATED MODULE: ./packages/data/build-module/options/selectors.js
/**
 * Get option from state tree.
 *
 * @param {Object} state - Reducer state
 * @param {Array} name - Option name
 */
var getOption = function getOption(state, name) {
  return state[name];
};
/**
 * Determine if an options request resulted in an error.
 *
 * @param {Object} state - Reducer state
 * @param {string} name - Option name
 */

var getOptionsRequestingError = function getOptionsRequestingError(state, name) {
  return state.requestingErrors[name] || false;
};
/**
 * Determine if options are being updated.
 *
 * @param {Object} state - Reducer state
 */

var isOptionsUpdating = function isOptionsUpdating(state) {
  return state.isUpdating || false;
};
/**
 * Determine if an options update resulted in an error.
 *
 * @param {Object} state - Reducer state
 */

var getOptionsUpdatingError = function getOptionsUpdatingError(state) {
  return state.updatingError || false;
};
// CONCATENATED MODULE: ./packages/data/build-module/options/action-types.js
var options_action_types_TYPES = {
  RECEIVE_OPTIONS: 'RECEIVE_OPTIONS',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING',
  SET_IS_UPDATING: 'SET_IS_UPDATING',
  SET_REQUESTING_ERROR: 'SET_REQUESTING_ERROR',
  SET_UPDATING_ERROR: 'SET_UPDATING_ERROR'
};
/* harmony default export */ var options_action_types = (options_action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/options/actions.js



var options_actions_marked = /*#__PURE__*/regenerator_default.a.mark(updateOptions);

function actions_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function actions_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      actions_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      actions_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



function actions_receiveOptions(options) {
  return {
    type: options_action_types.RECEIVE_OPTIONS,
    options: options
  };
}
function setRequestingError(error, name) {
  return {
    type: options_action_types.SET_REQUESTING_ERROR,
    error: error,
    name: name
  };
}
function setUpdatingError(error) {
  return {
    type: options_action_types.SET_UPDATING_ERROR,
    error: error
  };
}
function setIsUpdating(isUpdating) {
  return {
    type: options_action_types.SET_IS_UPDATING,
    isUpdating: isUpdating
  };
}
function updateOptions(data) {
  var results;
  return regenerator_default.a.wrap(function updateOptions$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return setIsUpdating(true);

        case 2:
          _context.next = 4;
          return actions_receiveOptions(data);

        case 4:
          _context.prev = 4;
          _context.next = 7;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: WC_ADMIN_NAMESPACE + '/options',
            method: 'POST',
            data: data
          });

        case 7:
          results = _context.sent;
          _context.next = 10;
          return setIsUpdating(false);

        case 10:
          return _context.abrupt("return", actions_objectSpread({
            success: true
          }, results));

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](4);
          _context.next = 17;
          return setUpdatingError(_context.t0);

        case 17:
          return _context.abrupt("return", actions_objectSpread({
            success: false
          }, _context.t0));

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, options_actions_marked, null, [[4, 13]]);
}
// EXTERNAL MODULE: external {"this":["wp","apiFetch"]}
var external_this_wp_apiFetch_ = __webpack_require__(27);
var external_this_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_this_wp_apiFetch_);

// CONCATENATED MODULE: ./packages/data/build-module/options/controls.js


function controls_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function controls_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      controls_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      controls_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


var optionNames = [];
var fetches = {};
var batchFetch = function batchFetch(optionName) {
  return {
    type: 'BATCH_FETCH',
    optionName: optionName
  };
};
var controls = controls_objectSpread(controls_objectSpread({}, external_this_wp_dataControls_["controls"]), {}, {
  BATCH_FETCH: function BATCH_FETCH(_ref) {
    var optionName = _ref.optionName;
    optionNames.push(optionName);
    return new Promise(function (resolve) {
      setTimeout(function () {
        var names = optionNames.join(',');

        if (fetches[names]) {
          return fetches[names].then(function (result) {
            resolve(result[optionName]);
          });
        }

        var url = WC_ADMIN_NAMESPACE + '/options?options=' + names;
        fetches[names] = external_this_wp_apiFetch_default()({
          path: url
        });
        fetches[names].then(function (result) {
          return resolve(result);
        }); // Clear option names after all resolved;

        setTimeout(function () {
          optionNames = []; // Delete the fetch after to allow wp data to handle cache invalidation.

          delete fetches[names];
        }, 1);
      }, 1);
    });
  }
});
// CONCATENATED MODULE: ./packages/data/build-module/options/resolvers.js


var options_resolvers_marked = /*#__PURE__*/regenerator_default.a.mark(resolvers_getOption);
/**
 * Internal dependencies
 */




/**
 * Request an option value.
 *
 * @param {string} name - Option name
 */

function resolvers_getOption(name) {
  var result;
  return regenerator_default.a.wrap(function getOption$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return batchFetch(name);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return actions_receiveOptions(result);

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _context.next = 12;
          return setRequestingError(_context.t0, name);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, options_resolvers_marked, null, [[0, 8]]);
}
// CONCATENATED MODULE: ./packages/data/build-module/options/reducer.js


function reducer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function reducer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      reducer_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      reducer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * Internal dependencies
 */




var reducer_optionsReducer = function optionsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isUpdating: false,
    requestingErrors: {}
  };

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      options = _ref.options,
      error = _ref.error,
      isUpdating = _ref.isUpdating,
      name = _ref.name;

  switch (type) {
    case options_action_types.RECEIVE_OPTIONS:
      state = reducer_objectSpread(reducer_objectSpread({}, state), options);
      break;

    case options_action_types.SET_IS_UPDATING:
      state = reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        isUpdating: isUpdating
      });
      break;

    case options_action_types.SET_REQUESTING_ERROR:
      state = reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        requestingErrors: defineProperty_default()({}, name, error)
      });
      break;

    case options_action_types.SET_UPDATING_ERROR:
      state = reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        error: error,
        updatingError: error,
        isUpdating: false
      });
      break;
  }

  return state;
};

/* harmony default export */ var options_reducer = (reducer_optionsReducer);
// CONCATENATED MODULE: ./packages/data/build-module/options/index.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */







Object(external_this_wp_data_["registerStore"])(options_constants_STORE_NAME, {
  reducer: options_reducer,
  actions: options_actions_namespaceObject,
  controls: controls,
  selectors: options_selectors_namespaceObject,
  resolvers: options_resolvers_namespaceObject
});
var OPTIONS_STORE_NAME = options_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/plugins/resolvers.js


var plugins_resolvers_marked = /*#__PURE__*/regenerator_default.a.mark(resolvers_getActivePlugins),
    plugins_resolvers_marked2 = /*#__PURE__*/regenerator_default.a.mark(resolvers_getInstalledPlugins),
    resolvers_marked3 = /*#__PURE__*/regenerator_default.a.mark(resolvers_isJetpackConnected),
    resolvers_marked4 = /*#__PURE__*/regenerator_default.a.mark(resolvers_getJetpackConnectUrl),
    resolvers_marked5 = /*#__PURE__*/regenerator_default.a.mark(resolvers_getPaypalOnboardingStatus),
    resolvers_marked6 = /*#__PURE__*/regenerator_default.a.mark(setOnboardingStatusWithOptions);
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */





function resolvers_getActivePlugins() {
  var url, results;
  return regenerator_default.a.wrap(function getActivePlugins$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return actions_setIsRequesting('getActivePlugins', true);

        case 2:
          _context.prev = 2;
          url = WC_ADMIN_NAMESPACE + '/plugins/active';
          _context.next = 6;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'GET'
          });

        case 6:
          results = _context.sent;
          _context.next = 9;
          return actions_updateActivePlugins(results.plugins, true);

        case 9:
          _context.next = 15;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](2);
          _context.next = 15;
          return setError('getActivePlugins', _context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, plugins_resolvers_marked, null, [[2, 11]]);
}
function resolvers_getInstalledPlugins() {
  var url, results;
  return regenerator_default.a.wrap(function getInstalledPlugins$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return actions_setIsRequesting('getInstalledPlugins', true);

        case 2:
          _context2.prev = 2;
          url = WC_ADMIN_NAMESPACE + '/plugins/installed';
          _context2.next = 6;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'GET'
          });

        case 6:
          results = _context2.sent;
          _context2.next = 9;
          return actions_updateInstalledPlugins(results, true);

        case 9:
          _context2.next = 15;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](2);
          _context2.next = 15;
          return setError('getInstalledPlugins', _context2.t0);

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, plugins_resolvers_marked2, null, [[2, 11]]);
}
function resolvers_isJetpackConnected() {
  var url, results;
  return regenerator_default.a.wrap(function isJetpackConnected$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return actions_setIsRequesting('isJetpackConnected', true);

        case 2:
          _context3.prev = 2;
          url = JETPACK_NAMESPACE + '/connection';
          _context3.next = 6;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'GET'
          });

        case 6:
          results = _context3.sent;
          _context3.next = 9;
          return actions_updateIsJetpackConnected(results.isActive);

        case 9:
          _context3.next = 15;
          break;

        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](2);
          _context3.next = 15;
          return setError('isJetpackConnected', _context3.t0);

        case 15:
          _context3.next = 17;
          return actions_setIsRequesting('isJetpackConnected', false);

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, resolvers_marked3, null, [[2, 11]]);
}
function resolvers_getJetpackConnectUrl(query) {
  var url, results;
  return regenerator_default.a.wrap(function getJetpackConnectUrl$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return actions_setIsRequesting('getJetpackConnectUrl', true);

        case 2:
          _context4.prev = 2;
          url = Object(external_this_wp_url_["addQueryArgs"])(WC_ADMIN_NAMESPACE + '/plugins/connect-jetpack', query);
          _context4.next = 6;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'GET'
          });

        case 6:
          results = _context4.sent;
          _context4.next = 9;
          return updateJetpackConnectUrl(query.redirect_url, results.connectAction);

        case 9:
          _context4.next = 15;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](2);
          _context4.next = 15;
          return setError('getJetpackConnectUrl', _context4.t0);

        case 15:
          _context4.next = 17;
          return actions_setIsRequesting('getJetpackConnectUrl', false);

        case 17:
        case "end":
          return _context4.stop();
      }
    }
  }, resolvers_marked4, null, [[2, 11]]);
}
function resolvers_getPaypalOnboardingStatus() {
  var errorData, url, results;
  return regenerator_default.a.wrap(function getPaypalOnboardingStatus$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return actions_setIsRequesting('getPaypalOnboardingStatus', true);

        case 2:
          _context5.next = 4;
          return Object(external_this_wp_dataControls_["select"])(constants_STORE_NAME, 'getPluginsError', 'getPaypalOnboardingStatus');

        case 4:
          errorData = _context5.sent;

          if (!(errorData && errorData.data && errorData.data.status === 404)) {
            _context5.next = 10;
            break;
          }

          _context5.next = 8;
          return setOnboardingStatusWithOptions();

        case 8:
          _context5.next = 25;
          break;

        case 10:
          _context5.prev = 10;
          url = PAYPAL_NAMESPACE + '/onboarding/get-status';
          _context5.next = 14;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'GET'
          });

        case 14:
          results = _context5.sent;
          _context5.next = 17;
          return setPaypalOnboardingStatus(results);

        case 17:
          _context5.next = 25;
          break;

        case 19:
          _context5.prev = 19;
          _context5.t0 = _context5["catch"](10);
          _context5.next = 23;
          return setOnboardingStatusWithOptions();

        case 23:
          _context5.next = 25;
          return setError('getPaypalOnboardingStatus', _context5.t0);

        case 25:
          _context5.next = 27;
          return actions_setIsRequesting('getPaypalOnboardingStatus', false);

        case 27:
        case "end":
          return _context5.stop();
      }
    }
  }, resolvers_marked5, null, [[10, 19]]);
}

function setOnboardingStatusWithOptions() {
  var options;
  return regenerator_default.a.wrap(function setOnboardingStatusWithOptions$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(external_this_wp_dataControls_["select"])(OPTIONS_STORE_NAME, 'getOption', 'woocommerce-ppcp-settings');

        case 2:
          options = _context6.sent;
          _context6.next = 5;
          return setPaypalOnboardingStatus({
            production: {
              onboarded: options.merchant_email_production && options.merchant_id_production && options.client_id_production && options.client_secret_production ? true : false
            }
          });

        case 5:
        case "end":
          return _context6.stop();
      }
    }
  }, resolvers_marked6);
}
// CONCATENATED MODULE: ./packages/data/build-module/plugins/reducer.js


function plugins_reducer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function plugins_reducer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      plugins_reducer_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      plugins_reducer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



var reducer_plugins = function plugins() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    active: [],
    installed: [],
    requesting: {},
    errors: {},
    jetpackConnectUrls: {}
  };

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      active = _ref.active,
      installed = _ref.installed,
      selector = _ref.selector,
      isRequesting = _ref.isRequesting,
      error = _ref.error,
      jetpackConnection = _ref.jetpackConnection,
      redirectUrl = _ref.redirectUrl,
      jetpackConnectUrl = _ref.jetpackConnectUrl,
      paypalOnboardingStatus = _ref.paypalOnboardingStatus,
      replace = _ref.replace;

  switch (type) {
    case plugins_action_types.UPDATE_ACTIVE_PLUGINS:
      state = plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state), {}, {
        active: replace ? active : Object(external_lodash_["concat"])(state.active, active),
        requesting: plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state.requesting), {}, {
          getActivePlugins: false,
          activatePlugins: false
        }),
        errors: plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state.errors), {}, {
          getActivePlugins: false,
          activatePlugins: false
        })
      });
      break;

    case plugins_action_types.UPDATE_INSTALLED_PLUGINS:
      state = plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state), {}, {
        installed: replace ? installed : Object(external_lodash_["concat"])(state.installed, installed),
        requesting: plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state.requesting), {}, {
          getInstalledPlugins: false,
          installPlugin: false
        }),
        errors: plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state.errors), {}, {
          getInstalledPlugins: false,
          installPlugin: false
        })
      });
      break;

    case plugins_action_types.SET_IS_REQUESTING:
      state = plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state), {}, {
        requesting: plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state.requesting), {}, defineProperty_default()({}, selector, isRequesting))
      });
      break;

    case plugins_action_types.SET_ERROR:
      state = plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state), {}, {
        requesting: plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state.requesting), {}, defineProperty_default()({}, selector, false)),
        errors: plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state.errors), {}, defineProperty_default()({}, selector, error))
      });
      break;

    case plugins_action_types.UPDATE_JETPACK_CONNECTION:
      state = plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state), {}, {
        jetpackConnection: jetpackConnection
      });
      break;

    case plugins_action_types.UPDATE_JETPACK_CONNECT_URL:
      state = plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state), {}, {
        jetpackConnectUrls: plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state.jetpackConnectUrl), {}, defineProperty_default()({}, redirectUrl, jetpackConnectUrl))
      });
      break;

    case plugins_action_types.SET_PAYPAL_ONBOARDING_STATUS:
      state = plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state), {}, {
        paypalOnboardingStatus: paypalOnboardingStatus
      });
      break;
  }

  return state;
};

/* harmony default export */ var plugins_reducer = (reducer_plugins);
// CONCATENATED MODULE: ./packages/data/build-module/plugins/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






Object(external_this_wp_data_["registerStore"])(constants_STORE_NAME, {
  reducer: plugins_reducer,
  actions: plugins_actions_namespaceObject,
  controls: external_this_wp_dataControls_["controls"],
  selectors: plugins_selectors_namespaceObject,
  resolvers: plugins_resolvers_namespaceObject
});
var PLUGINS_STORE_NAME = constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/plugins/with-plugins-hydration.js

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


var with_plugins_hydration_withPluginsHydration = function withPluginsHydration(data) {
  return Object(external_this_wp_compose_["createHigherOrderComponent"])(function (OriginalComponent) {
    return function (props) {
      var dataRef = Object(external_this_wp_element_["useRef"])(data);
      Object(external_this_wp_data_["useSelect"])(function (select, registry) {
        if (!dataRef.current) {
          return;
        }

        var _select = select(constants_STORE_NAME),
            isResolving = _select.isResolving,
            hasFinishedResolution = _select.hasFinishedResolution;

        var _registry$dispatch = registry.dispatch(constants_STORE_NAME),
            startResolution = _registry$dispatch.startResolution,
            finishResolution = _registry$dispatch.finishResolution,
            updateActivePlugins = _registry$dispatch.updateActivePlugins,
            updateInstalledPlugins = _registry$dispatch.updateInstalledPlugins,
            updateIsJetpackConnected = _registry$dispatch.updateIsJetpackConnected;

        if (!isResolving('getActivePlugins', []) && !hasFinishedResolution('getActivePlugins', [])) {
          startResolution('getActivePlugins', []);
          startResolution('getInstalledPlugins', []);
          startResolution('isJetpackConnected', []);
          updateActivePlugins(dataRef.current.activePlugins, true);
          updateInstalledPlugins(dataRef.current.installedPlugins, true);
          updateIsJetpackConnected(dataRef.current.jetpackStatus && dataRef.current.jetpackStatus.isActive);
          finishResolution('getActivePlugins', []);
          finishResolution('getInstalledPlugins', []);
          finishResolution('isJetpackConnected', []);
        }
      }, []);
      return Object(external_this_wp_element_["createElement"])(OriginalComponent, props);
    };
  }, 'withPluginsHydration');
};
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/constants.js
/**
 * Internal dependencies
 */
var onboarding_constants_STORE_NAME = 'wc/admin/onboarding';
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/selectors.js
var getProfileItems = function getProfileItems(state) {
  return state.profileItems || {};
};
var getTasksStatus = function getTasksStatus(state) {
  return state.tasksStatus || {};
};
var getOnboardingError = function getOnboardingError(state, selector) {
  return state.errors[selector] || false;
};
var isOnboardingRequesting = function isOnboardingRequesting(state, selector) {
  return state.requesting[selector] || false;
};
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/action-types.js
var onboarding_action_types_TYPES = {
  SET_ERROR: 'SET_ERROR',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING',
  SET_PROFILE_ITEMS: 'SET_PROFILE_ITEMS',
  SET_TASKS_STATUS: 'SET_TASKS_STATUS'
};
/* harmony default export */ var onboarding_action_types = (onboarding_action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/actions.js


var onboarding_actions_marked = /*#__PURE__*/regenerator_default.a.mark(updateProfileItems);
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



function actions_setError(selector, error) {
  return {
    type: onboarding_action_types.SET_ERROR,
    selector: selector,
    error: error
  };
}
function onboarding_actions_setIsRequesting(selector, isRequesting) {
  return {
    type: onboarding_action_types.SET_IS_REQUESTING,
    selector: selector,
    isRequesting: isRequesting
  };
}
function actions_setProfileItems(profileItems) {
  var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    type: onboarding_action_types.SET_PROFILE_ITEMS,
    profileItems: profileItems,
    replace: replace
  };
}
function actions_setTasksStatus(tasksStatus) {
  return {
    type: onboarding_action_types.SET_TASKS_STATUS,
    tasksStatus: tasksStatus
  };
}
function updateProfileItems(items) {
  var results;
  return regenerator_default.a.wrap(function updateProfileItems$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return onboarding_actions_setIsRequesting('updateProfileItems', true);

        case 2:
          _context.prev = 2;
          _context.next = 5;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: "".concat(WC_ADMIN_NAMESPACE, "/onboarding/profile"),
            method: 'POST',
            data: items
          });

        case 5:
          results = _context.sent;

          if (!(results && results.status === 'success')) {
            _context.next = 12;
            break;
          }

          _context.next = 9;
          return actions_setProfileItems(items);

        case 9:
          _context.next = 11;
          return onboarding_actions_setIsRequesting('updateProfileItems', false);

        case 11:
          return _context.abrupt("return", results);

        case 12:
          throw new Error();

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](2);
          _context.next = 19;
          return actions_setError('updateProfileItems', _context.t0);

        case 19:
          _context.next = 21;
          return onboarding_actions_setIsRequesting('updateProfileItems', false);

        case 21:
          throw new Error();

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, onboarding_actions_marked, null, [[2, 15]]);
}
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/resolvers.js


var onboarding_resolvers_marked = /*#__PURE__*/regenerator_default.a.mark(resolvers_getProfileItems),
    onboarding_resolvers_marked2 = /*#__PURE__*/regenerator_default.a.mark(resolvers_getTasksStatus);
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



function resolvers_getProfileItems() {
  var results;
  return regenerator_default.a.wrap(function getProfileItems$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: WC_ADMIN_NAMESPACE + '/onboarding/profile',
            method: 'GET'
          });

        case 3:
          results = _context.sent;
          _context.next = 6;
          return actions_setProfileItems(results, true);

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _context.next = 12;
          return actions_setError('getProfileItems', _context.t0);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, onboarding_resolvers_marked, null, [[0, 8]]);
}
function resolvers_getTasksStatus() {
  var results;
  return regenerator_default.a.wrap(function getTasksStatus$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: WC_ADMIN_NAMESPACE + '/onboarding/tasks/status',
            method: 'GET'
          });

        case 3:
          results = _context2.sent;
          _context2.next = 6;
          return actions_setTasksStatus(results, true);

        case 6:
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 12;
          return actions_setError('getTasksStatus', _context2.t0);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, onboarding_resolvers_marked2, null, [[0, 8]]);
}
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/reducer.js


function onboarding_reducer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function onboarding_reducer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      onboarding_reducer_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      onboarding_reducer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * Internal dependencies
 */




var reducer_onboarding = function onboarding() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    errors: {},
    profileItems: {},
    requesting: {},
    tasksStatus: {}
  };

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      profileItems = _ref.profileItems,
      replace = _ref.replace,
      error = _ref.error,
      isRequesting = _ref.isRequesting,
      selector = _ref.selector,
      tasksStatus = _ref.tasksStatus;

  switch (type) {
    case onboarding_action_types.SET_PROFILE_ITEMS:
      return onboarding_reducer_objectSpread(onboarding_reducer_objectSpread({}, state), {}, {
        profileItems: replace ? profileItems : onboarding_reducer_objectSpread(onboarding_reducer_objectSpread({}, state.profileItems), profileItems)
      });

    case onboarding_action_types.SET_TASKS_STATUS:
      return onboarding_reducer_objectSpread(onboarding_reducer_objectSpread({}, state), {}, {
        tasksStatus: onboarding_reducer_objectSpread(onboarding_reducer_objectSpread({}, state.tasksStatus), tasksStatus)
      });

    case onboarding_action_types.SET_ERROR:
      return onboarding_reducer_objectSpread(onboarding_reducer_objectSpread({}, state), {}, {
        errors: onboarding_reducer_objectSpread(onboarding_reducer_objectSpread({}, state.errors), {}, defineProperty_default()({}, selector, error))
      });

    case onboarding_action_types.SET_IS_REQUESTING:
      return onboarding_reducer_objectSpread(onboarding_reducer_objectSpread({}, state), {}, {
        requesting: onboarding_reducer_objectSpread(onboarding_reducer_objectSpread({}, state.requesting), {}, defineProperty_default()({}, selector, isRequesting))
      });

    default:
      return state;
  }
};

/* harmony default export */ var onboarding_reducer = (reducer_onboarding);
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






Object(external_this_wp_data_["registerStore"])(onboarding_constants_STORE_NAME, {
  reducer: onboarding_reducer,
  actions: onboarding_actions_namespaceObject,
  controls: external_this_wp_dataControls_["controls"],
  selectors: onboarding_selectors_namespaceObject,
  resolvers: onboarding_resolvers_namespaceObject
});
var ONBOARDING_STORE_NAME = onboarding_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/with-onboarding-hydration.js

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


var with_onboarding_hydration_withOnboardingHydration = function withOnboardingHydration(data) {
  var hydratedProfileItems = false;
  var hydratedTasksStatus = false;
  return Object(external_this_wp_compose_["createHigherOrderComponent"])(function (OriginalComponent) {
    return function (props) {
      var onboardingRef = Object(external_this_wp_element_["useRef"])(data);
      Object(external_this_wp_data_["useSelect"])(function (select, registry) {
        if (!onboardingRef.current) {
          return;
        }

        var _select = select(onboarding_constants_STORE_NAME),
            isResolving = _select.isResolving,
            hasFinishedResolution = _select.hasFinishedResolution;

        var _registry$dispatch = registry.dispatch(onboarding_constants_STORE_NAME),
            startResolution = _registry$dispatch.startResolution,
            finishResolution = _registry$dispatch.finishResolution,
            setProfileItems = _registry$dispatch.setProfileItems,
            setTasksStatus = _registry$dispatch.setTasksStatus;

        var _onboardingRef$curren = onboardingRef.current,
            profileItems = _onboardingRef$curren.profileItems,
            tasksStatus = _onboardingRef$curren.tasksStatus;

        if (profileItems && !hydratedProfileItems && !isResolving('getProfileItems', []) && !hasFinishedResolution('getProfileItems', [])) {
          startResolution('getProfileItems', []);
          setProfileItems(profileItems, true);
          finishResolution('getProfileItems', []);
          hydratedProfileItems = true;
        }

        if (tasksStatus && !hydratedTasksStatus && !isResolving('getTasksStatus', []) && !hasFinishedResolution('getTasksStatus', [])) {
          startResolution('getTasksStatus', []);
          setTasksStatus(tasksStatus, true);
          finishResolution('getTasksStatus', []);
          hydratedTasksStatus = true;
        }
      }, []);
      return Object(external_this_wp_element_["createElement"])(OriginalComponent, props);
    };
  }, 'withOnboardingHydration');
};
// CONCATENATED MODULE: ./packages/data/build-module/user-preferences/constants.js
var user_preferences_constants_STORE_NAME = 'core';
// CONCATENATED MODULE: ./packages/data/build-module/user-preferences/index.js
/**
 * Internal dependencies
 */

var USER_STORE_NAME = user_preferences_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/user-preferences/with-current-user-hydration.js

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


/**
 * Higher-order component used to hydrate current user data.
 *
 * @param {Object} currentUser Current user object in the same format as the WP REST API returns.
 */

var with_current_user_hydration_withCurrentUserHydration = function withCurrentUserHydration(currentUser) {
  return Object(external_this_wp_compose_["createHigherOrderComponent"])(function (OriginalComponent) {
    return function (props) {
      var userRef = Object(external_this_wp_element_["useRef"])(currentUser); // Use currentUser to hydrate calls to @wordpress/core-data's getCurrentUser().

      Object(external_this_wp_data_["useSelect"])(function (select, registry) {
        if (!userRef.current) {
          return;
        }

        var _select = select(user_preferences_constants_STORE_NAME),
            isResolving = _select.isResolving,
            hasFinishedResolution = _select.hasFinishedResolution;

        var _registry$dispatch = registry.dispatch(user_preferences_constants_STORE_NAME),
            startResolution = _registry$dispatch.startResolution,
            finishResolution = _registry$dispatch.finishResolution,
            receiveCurrentUser = _registry$dispatch.receiveCurrentUser;

        if (!isResolving('getCurrentUser') && !hasFinishedResolution('getCurrentUser')) {
          startResolution('getCurrentUser', []);
          receiveCurrentUser(userRef.current);
          finishResolution('getCurrentUser', []);
        }
      });
      return Object(external_this_wp_element_["createElement"])(OriginalComponent, props);
    };
  }, 'withCurrentUserHydration');
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(43);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// CONCATENATED MODULE: ./packages/data/build-module/user-preferences/use-user-preferences.js




function use_user_preferences_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function use_user_preferences_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      use_user_preferences_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      use_user_preferences_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


/**
 * Retrieve and decode the user's WooCommerce meta values.
 *
 * @param {Object} user WP User object.
 * @return {Object} User's WooCommerce preferences.
 */

var use_user_preferences_getWooCommerceMeta = function getWooCommerceMeta(user) {
  var wooMeta = user.woocommerce_meta || {};
  var userData = Object(external_lodash_["mapValues"])(wooMeta, function (data) {
    if (!data || data.length === 0) {
      return '';
    }

    return JSON.parse(data);
  });
  return userData;
}; // Create wrapper for updating user's `woocommerce_meta`.


function updateUserPrefs(_x, _x2, _x3, _x4, _x5) {
  return _updateUserPrefs.apply(this, arguments);
}
/**
 * Custom react hook for retrieving thecurrent user's WooCommerce preferences.
 *
 * This is a wrapper around @wordpress/core-data's getCurrentUser() and saveUser().
 */


function _updateUserPrefs() {
  _updateUserPrefs = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(receiveCurrentUser, user, saveUser, getLastEntitySaveError, userPrefs) {
    var userDataFields, metaData, updatedUser, error, updatedUserResponse;
    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // @todo Handle unresolved getCurrentUser() here.
            // Whitelist our meta fields.
            userDataFields = ['categories_report_columns', 'coupons_report_columns', 'customers_report_columns', 'orders_report_columns', 'products_report_columns', 'revenue_report_columns', 'taxes_report_columns', 'variations_report_columns', 'dashboard_sections', 'dashboard_chart_type', 'dashboard_chart_interval', 'dashboard_leaderboard_rows', 'activity_panel_inbox_last_read', 'homepage_layout', 'homepage_stats', 'android_app_banner_dismissed', 'task_list_tracked_started_tasks', 'help_panel_highlight_shown']; // Prep valid fields for update.

            metaData = Object(external_lodash_["mapValues"])(Object(external_lodash_["pick"])(userPrefs, userDataFields), JSON.stringify);

            if (!(Object.keys(metaData).length === 0)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", {
              error: new Error('No valid woocommerce_meta keys were provided for update.'),
              updatedUser: undefined
            });

          case 4:
            // Optimistically propagate new woocommerce_meta to the store for instant update.
            receiveCurrentUser(use_user_preferences_objectSpread(use_user_preferences_objectSpread({}, user), {}, {
              woocommerce_meta: use_user_preferences_objectSpread(use_user_preferences_objectSpread({}, user.woocommerce_meta), metaData)
            })); // Use saveUser() to update WooCommerce meta values.

            _context2.next = 7;
            return saveUser({
              id: user.id,
              woocommerce_meta: metaData
            });

          case 7:
            updatedUser = _context2.sent;

            if (!(undefined === updatedUser)) {
              _context2.next = 11;
              break;
            } // Return the encountered error to the caller.


            error = getLastEntitySaveError('root', 'user', user.id);
            return _context2.abrupt("return", {
              error: error,
              updatedUser: updatedUser
            });

          case 11:
            // Decode the WooCommerce meta after save.
            updatedUserResponse = use_user_preferences_objectSpread(use_user_preferences_objectSpread({}, updatedUser), {}, {
              woocommerce_meta: use_user_preferences_getWooCommerceMeta(updatedUser)
            });
            return _context2.abrupt("return", {
              updatedUser: updatedUserResponse
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _updateUserPrefs.apply(this, arguments);
}

var use_user_preferences_useUserPreferences = function useUserPreferences() {
  // Get our dispatch methods now - this can't happen inside the callback below.
  var dispatch = Object(external_this_wp_data_["useDispatch"])(user_preferences_constants_STORE_NAME);
  var addEntities = dispatch.addEntities,
      receiveCurrentUser = dispatch.receiveCurrentUser,
      saveEntityRecord = dispatch.saveEntityRecord;
  var saveUser = dispatch.saveUser;
  var userData = Object(external_this_wp_data_["useSelect"])(function (select) {
    var _select = select(user_preferences_constants_STORE_NAME),
        getCurrentUser = _select.getCurrentUser,
        getEntity = _select.getEntity,
        getEntityRecord = _select.getEntityRecord,
        getLastEntitySaveError = _select.getLastEntitySaveError,
        hasStartedResolution = _select.hasStartedResolution,
        hasFinishedResolution = _select.hasFinishedResolution;

    return {
      isRequesting: hasStartedResolution('getCurrentUser') && !hasFinishedResolution('getCurrentUser'),
      user: getCurrentUser(),
      getCurrentUser: getCurrentUser,
      getEntity: getEntity,
      getEntityRecord: getEntityRecord,
      getLastEntitySaveError: getLastEntitySaveError
    };
  });

  var updateUserPreferences = function updateUserPreferences(userPrefs) {
    // WP 5.3.x doesn't have the User entity defined.
    if (typeof saveUser !== 'function') {
      // Polyfill saveUser() - wrapper of saveEntityRecord.
      saveUser = /*#__PURE__*/function () {
        var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(userToSave) {
          var entityDefined;
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  entityDefined = Boolean(userData.getEntity('root', 'user'));

                  if (entityDefined) {
                    _context.next = 4;
                    break;
                  }

                  _context.next = 4;
                  return addEntities([{
                    name: 'user',
                    kind: 'root',
                    baseURL: '/wp/v2/users',
                    plural: 'users'
                  }]);

                case 4:
                  _context.next = 6;
                  return saveEntityRecord('root', 'user', userToSave);

                case 6:
                  return _context.abrupt("return", userData.getEntityRecord('root', 'user', userToSave.id));

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function saveUser(_x6) {
          return _ref.apply(this, arguments);
        };
      }();
    } // Get most recent user before update.


    var currentUser = userData.getCurrentUser();
    return updateUserPrefs(receiveCurrentUser, currentUser, saveUser, userData.getLastEntitySaveError, userPrefs);
  };

  var userPreferences = userData.user ? use_user_preferences_getWooCommerceMeta(userData.user) : {};
  return use_user_preferences_objectSpread(use_user_preferences_objectSpread({
    isRequesting: userData.isRequesting
  }, userPreferences), {}, {
    updateUserPreferences: updateUserPreferences
  });
};
// CONCATENATED MODULE: ./packages/data/build-module/options/with-options-hydration.js


/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


var with_options_hydration_withOptionsHydration = function withOptionsHydration(data) {
  return Object(external_this_wp_compose_["createHigherOrderComponent"])(function (OriginalComponent) {
    return function (props) {
      var dataRef = Object(external_this_wp_element_["useRef"])(data);
      Object(external_this_wp_data_["useSelect"])(function (select, registry) {
        if (!dataRef.current) {
          return;
        }

        var _select = select(options_constants_STORE_NAME),
            isResolving = _select.isResolving,
            hasFinishedResolution = _select.hasFinishedResolution;

        var _registry$dispatch = registry.dispatch(options_constants_STORE_NAME),
            startResolution = _registry$dispatch.startResolution,
            finishResolution = _registry$dispatch.finishResolution,
            receiveOptions = _registry$dispatch.receiveOptions;

        var names = Object.keys(dataRef.current);
        names.forEach(function (name) {
          if (!isResolving('getOption', [name]) && !hasFinishedResolution('getOption', [name])) {
            startResolution('getOption', [name]);
            receiveOptions(defineProperty_default()({}, name, dataRef.current[name]));
            finishResolution('getOption', [name]);
          }
        });
      }, []);
      return Object(external_this_wp_element_["createElement"])(OriginalComponent, props);
    };
  }, 'withOptionsHydration');
};
// CONCATENATED MODULE: ./packages/data/build-module/reviews/constants.js
var reviews_constants_STORE_NAME = 'wc/admin/reviews';
// CONCATENATED MODULE: ./packages/data/build-module/reviews/selectors.js
var getReviews = function getReviews(state, query) {
  var stringifiedQuery = JSON.stringify(query);
  var ids = state.reviews[stringifiedQuery] && state.reviews[stringifiedQuery].data || [];
  return ids.map(function (id) {
    return state.data[id];
  });
};
var getReviewsTotalCount = function getReviewsTotalCount(state, query) {
  var stringifiedQuery = JSON.stringify(query);
  return state.reviews[stringifiedQuery] && state.reviews[stringifiedQuery].totalCount;
};
var getReviewsError = function getReviewsError(state, query) {
  var stringifiedQuery = JSON.stringify(query);
  return state.errors[stringifiedQuery];
};
// CONCATENATED MODULE: ./packages/data/build-module/reviews/action-types.js
var reviews_action_types_TYPES = {
  UPDATE_REVIEWS: 'UPDATE_REVIEWS',
  SET_REVIEW: 'SET_REVIEW',
  SET_ERROR: 'SET_ERROR',
  SET_REVIEW_IS_UPDATING: 'SET_REVIEW_IS_UPDATING'
};
/* harmony default export */ var reviews_action_types = (reviews_action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/reviews/actions.js


var reviews_actions_marked = /*#__PURE__*/regenerator_default.a.mark(updateReview),
    reviews_actions_marked2 = /*#__PURE__*/regenerator_default.a.mark(deleteReview);
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



function updateReviews(query, reviews, totalCount) {
  return {
    type: reviews_action_types.UPDATE_REVIEWS,
    reviews: reviews,
    query: query,
    totalCount: totalCount
  };
}
function updateReview(reviewId, reviewFields, query) {
  var url, review;
  return regenerator_default.a.wrap(function updateReview$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return setReviewIsUpdating(reviewId, true);

        case 2:
          _context.prev = 2;
          url = Object(external_this_wp_url_["addQueryArgs"])("".concat(NAMESPACE, "/products/reviews/").concat(reviewId), query || {});
          _context.next = 6;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'PUT',
            data: reviewFields
          });

        case 6:
          review = _context.sent;
          _context.next = 9;
          return setReview(reviewId, review);

        case 9:
          _context.next = 11;
          return setReviewIsUpdating(reviewId, false);

        case 11:
          _context.next = 20;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](2);
          _context.next = 17;
          return reviews_actions_setError('updateReview', _context.t0);

        case 17:
          _context.next = 19;
          return setReviewIsUpdating(reviewId, false);

        case 19:
          throw new Error();

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, reviews_actions_marked, null, [[2, 13]]);
}
function deleteReview(reviewId) {
  var url, response;
  return regenerator_default.a.wrap(function deleteReview$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return setReviewIsUpdating(reviewId, true);

        case 2:
          _context2.prev = 2;
          url = "".concat(NAMESPACE, "/products/reviews/").concat(reviewId);
          _context2.next = 6;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'DELETE'
          });

        case 6:
          response = _context2.sent;
          _context2.next = 9;
          return setReview(reviewId, response);

        case 9:
          _context2.next = 11;
          return setReviewIsUpdating(reviewId, false);

        case 11:
          return _context2.abrupt("return", response);

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](2);
          _context2.next = 18;
          return reviews_actions_setError('deleteReview', _context2.t0);

        case 18:
          _context2.next = 20;
          return setReviewIsUpdating(reviewId, false);

        case 20:
          throw new Error();

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  }, reviews_actions_marked2, null, [[2, 14]]);
}
function setReviewIsUpdating(reviewId, isUpdating) {
  return {
    type: reviews_action_types.SET_REVIEW_IS_UPDATING,
    reviewId: reviewId,
    isUpdating: isUpdating
  };
}
function setReview(reviewId, reviewData) {
  return {
    type: reviews_action_types.SET_REVIEW,
    reviewId: reviewId,
    reviewData: reviewData
  };
}
function reviews_actions_setError(query, error) {
  return {
    type: reviews_action_types.SET_ERROR,
    query: query,
    error: error
  };
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(19);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// CONCATENATED MODULE: ./packages/data/build-module/controls.js



function build_module_controls_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function build_module_controls_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      build_module_controls_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      build_module_controls_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * External dependencies
 */




var fetchWithHeaders = function fetchWithHeaders(options) {
  return {
    type: 'FETCH_WITH_HEADERS',
    options: options
  };
};

var controls_controls = build_module_controls_objectSpread(build_module_controls_objectSpread({}, external_this_wp_dataControls_["controls"]), {}, {
  FETCH_WITH_HEADERS: function FETCH_WITH_HEADERS(_ref) {
    var options = _ref.options;
    return external_this_wp_apiFetch_default()(build_module_controls_objectSpread(build_module_controls_objectSpread({}, options), {}, {
      parse: false
    })).then(function (response) {
      return Promise.all([response.headers, response.status, response.json()]);
    }).then(function (_ref2) {
      var _ref3 = slicedToArray_default()(_ref2, 3),
          headers = _ref3[0],
          status = _ref3[1],
          data = _ref3[2];

      return {
        headers: headers,
        status: status,
        data: data
      };
    });
  }
});

/* harmony default export */ var build_module_controls = (controls_controls);
// CONCATENATED MODULE: ./packages/data/build-module/reviews/resolvers.js


var reviews_resolvers_marked = /*#__PURE__*/regenerator_default.a.mark(resolvers_getReviews),
    reviews_resolvers_marked2 = /*#__PURE__*/regenerator_default.a.mark(resolvers_getReviewsTotalCount);
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




function resolvers_getReviews(query) {
  var url, response, totalCount;
  return regenerator_default.a.wrap(function getReviews$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          url = Object(external_this_wp_url_["addQueryArgs"])("".concat(NAMESPACE, "/products/reviews"), query);
          _context.next = 4;
          return fetchWithHeaders({
            path: url,
            method: 'GET'
          });

        case 4:
          response = _context.sent;
          totalCount = parseInt(response.headers.get('x-wp-total'), 10);
          _context.next = 8;
          return updateReviews(query, response.data, totalCount);

        case 8:
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          _context.next = 14;
          return reviews_actions_setError(query, _context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, reviews_resolvers_marked, null, [[0, 10]]);
}
function resolvers_getReviewsTotalCount(query) {
  return regenerator_default.a.wrap(function getReviewsTotalCount$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return resolvers_getReviews(query);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, reviews_resolvers_marked2);
}
// CONCATENATED MODULE: ./packages/data/build-module/reviews/reducer.js


function reviews_reducer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function reviews_reducer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      reviews_reducer_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      reviews_reducer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * Internal dependencies
 */




var reducer_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    reviews: {},
    errors: {},
    data: {}
  };

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      query = _ref.query,
      reviews = _ref.reviews,
      reviewId = _ref.reviewId,
      reviewData = _ref.reviewData,
      totalCount = _ref.totalCount,
      error = _ref.error,
      isUpdating = _ref.isUpdating;

  switch (type) {
    case reviews_action_types.UPDATE_REVIEWS:
      var ids = [];
      var nextReviews = reviews.reduce(function (result, review) {
        ids.push(review.id);
        result[review.id] = reviews_reducer_objectSpread(reviews_reducer_objectSpread({}, state.data[review.id] || {}), review);
        return result;
      }, {});
      return reviews_reducer_objectSpread(reviews_reducer_objectSpread({}, state), {}, {
        reviews: reviews_reducer_objectSpread(reviews_reducer_objectSpread({}, state.reviews), {}, defineProperty_default()({}, JSON.stringify(query), {
          data: ids,
          totalCount: totalCount
        })),
        data: reviews_reducer_objectSpread(reviews_reducer_objectSpread({}, state.data), nextReviews)
      });

    case reviews_action_types.SET_REVIEW:
      return reviews_reducer_objectSpread(reviews_reducer_objectSpread({}, state), {}, {
        data: reviews_reducer_objectSpread(reviews_reducer_objectSpread({}, state.data), {}, defineProperty_default()({}, reviewId, reviewData))
      });

    case reviews_action_types.SET_ERROR:
      return reviews_reducer_objectSpread(reviews_reducer_objectSpread({}, state), {}, {
        errors: reviews_reducer_objectSpread(reviews_reducer_objectSpread({}, state.errors), {}, defineProperty_default()({}, JSON.stringify(query), error))
      });

    case reviews_action_types.SET_REVIEW_IS_UPDATING:
      return reviews_reducer_objectSpread(reviews_reducer_objectSpread({}, state), {}, {
        data: reviews_reducer_objectSpread(reviews_reducer_objectSpread({}, state.data), {}, defineProperty_default()({}, reviewId, reviews_reducer_objectSpread(reviews_reducer_objectSpread({}, state.data[reviewId]), {}, {
          isUpdating: isUpdating
        })))
      });

    default:
      return state;
  }
};

/* harmony default export */ var reviews_reducer = (reducer_reducer);
// CONCATENATED MODULE: ./packages/data/build-module/reviews/index.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */







Object(external_this_wp_data_["registerStore"])(reviews_constants_STORE_NAME, {
  reducer: reviews_reducer,
  actions: reviews_actions_namespaceObject,
  controls: build_module_controls,
  selectors: reviews_selectors_namespaceObject,
  resolvers: reviews_resolvers_namespaceObject
});
var REVIEWS_STORE_NAME = reviews_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/notes/constants.js
/**
 * Internal dependencies
 */
var notes_constants_STORE_NAME = 'wc/admin/notes';
// CONCATENATED MODULE: ./packages/data/build-module/notes/selectors.js
var getNotes = function getNotes(state, query) {
  var noteIds = state.noteQueries[JSON.stringify(query)] || [];
  return noteIds.map(function (id) {
    return state.notes[id];
  });
};
var getNotesError = function getNotesError(state, selector) {
  return state.errors[selector] || false;
};
var isNotesRequesting = function isNotesRequesting(state, selector) {
  return state.requesting[selector] || false;
};
// CONCATENATED MODULE: ./packages/data/build-module/notes/action-types.js
var notes_action_types_TYPES = {
  SET_ERROR: 'SET_ERROR',
  SET_NOTE: 'SET_NOTE',
  SET_NOTE_IS_UPDATING: 'SET_NOTE_IS_UPDATING',
  SET_NOTES: 'SET_NOTES',
  SET_NOTES_QUERY: 'SET_NOTES_QUERY',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING'
};
/* harmony default export */ var notes_action_types = (notes_action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/notes/actions.js



function notes_actions_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function notes_actions_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      notes_actions_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      notes_actions_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var notes_actions_marked = /*#__PURE__*/regenerator_default.a.mark(triggerNoteAction),
    notes_actions_marked2 = /*#__PURE__*/regenerator_default.a.mark(removeNote),
    actions_marked3 = /*#__PURE__*/regenerator_default.a.mark(removeAllNotes),
    actions_marked4 = /*#__PURE__*/regenerator_default.a.mark(batchUpdateNotes),
    actions_marked5 = /*#__PURE__*/regenerator_default.a.mark(updateNote);
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



function triggerNoteAction(noteId, actionId) {
  var url, result;
  return regenerator_default.a.wrap(function triggerNoteAction$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return notes_actions_setIsRequesting('triggerNoteAction', true);

        case 2:
          url = "".concat(NAMESPACE, "/admin/notes/").concat(noteId, "/action/").concat(actionId);
          _context.prev = 3;
          _context.next = 6;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'POST'
          });

        case 6:
          result = _context.sent;
          _context.next = 9;
          return updateNote(noteId, result);

        case 9:
          _context.next = 11;
          return notes_actions_setIsRequesting('triggerNoteAction', false);

        case 11:
          _context.next = 20;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](3);
          _context.next = 17;
          return notes_actions_setError('triggerNoteAction', _context.t0);

        case 17:
          _context.next = 19;
          return notes_actions_setIsRequesting('triggerNoteAction', false);

        case 19:
          throw new Error();

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, notes_actions_marked, null, [[3, 13]]);
}
function removeNote(noteId) {
  var url, response;
  return regenerator_default.a.wrap(function removeNote$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return notes_actions_setIsRequesting('removeNote', true);

        case 2:
          _context2.next = 4;
          return setNoteIsUpdating(noteId, true);

        case 4:
          _context2.prev = 4;
          url = "".concat(NAMESPACE, "/admin/notes/delete/").concat(noteId);
          _context2.next = 8;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'DELETE'
          });

        case 8:
          response = _context2.sent;
          _context2.next = 11;
          return setNote(noteId, response);

        case 11:
          _context2.next = 13;
          return notes_actions_setIsRequesting('removeNote', false);

        case 13:
          return _context2.abrupt("return", response);

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](4);
          _context2.next = 20;
          return notes_actions_setError('removeNote', _context2.t0);

        case 20:
          _context2.next = 22;
          return notes_actions_setIsRequesting('removeNote', false);

        case 22:
          _context2.next = 24;
          return setNoteIsUpdating(noteId, false);

        case 24:
          throw new Error();

        case 25:
        case "end":
          return _context2.stop();
      }
    }
  }, notes_actions_marked2, null, [[4, 16]]);
}
function removeAllNotes() {
  var url, notes;
  return regenerator_default.a.wrap(function removeAllNotes$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return notes_actions_setIsRequesting('removeAllNotes', true);

        case 2:
          _context3.prev = 2;
          url = "".concat(NAMESPACE, "/admin/notes/delete/all");
          _context3.next = 6;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'DELETE'
          });

        case 6:
          notes = _context3.sent;
          _context3.next = 9;
          return setNotes(notes);

        case 9:
          _context3.next = 11;
          return notes_actions_setIsRequesting('removeAllNotes', false);

        case 11:
          return _context3.abrupt("return", notes);

        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](2);
          _context3.next = 18;
          return notes_actions_setError('removeAllNotes', _context3.t0);

        case 18:
          _context3.next = 20;
          return notes_actions_setIsRequesting('removeAllNotes', false);

        case 20:
          throw new Error();

        case 21:
        case "end":
          return _context3.stop();
      }
    }
  }, actions_marked3, null, [[2, 14]]);
}
function batchUpdateNotes(noteIds, noteFields) {
  var url, notes;
  return regenerator_default.a.wrap(function batchUpdateNotes$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return notes_actions_setIsRequesting('batchUpdateNotes', true);

        case 2:
          _context4.prev = 2;
          url = "".concat(NAMESPACE, "/admin/notes/update");
          _context4.next = 6;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'PUT',
            data: notes_actions_objectSpread({
              noteIds: noteIds
            }, noteFields)
          });

        case 6:
          notes = _context4.sent;
          _context4.next = 9;
          return setNotes(notes);

        case 9:
          _context4.next = 11;
          return notes_actions_setIsRequesting('batchUpdateNotes', false);

        case 11:
          _context4.next = 20;
          break;

        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](2);
          _context4.next = 17;
          return notes_actions_setError('updateNote', _context4.t0);

        case 17:
          _context4.next = 19;
          return notes_actions_setIsRequesting('batchUpdateNotes', false);

        case 19:
          throw new Error();

        case 20:
        case "end":
          return _context4.stop();
      }
    }
  }, actions_marked4, null, [[2, 13]]);
}
function updateNote(noteId, noteFields) {
  var url, note;
  return regenerator_default.a.wrap(function updateNote$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return notes_actions_setIsRequesting('updateNote', true);

        case 2:
          _context5.next = 4;
          return setNoteIsUpdating(noteId, true);

        case 4:
          _context5.prev = 4;
          url = "".concat(NAMESPACE, "/admin/notes/").concat(noteId);
          _context5.next = 8;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'PUT',
            data: noteFields
          });

        case 8:
          note = _context5.sent;
          _context5.next = 11;
          return setNote(noteId, note);

        case 11:
          _context5.next = 13;
          return notes_actions_setIsRequesting('updateNote', false);

        case 13:
          _context5.next = 15;
          return setNoteIsUpdating(noteId, false);

        case 15:
          _context5.next = 26;
          break;

        case 17:
          _context5.prev = 17;
          _context5.t0 = _context5["catch"](4);
          _context5.next = 21;
          return notes_actions_setError('updateNote', _context5.t0);

        case 21:
          _context5.next = 23;
          return notes_actions_setIsRequesting('updateNote', false);

        case 23:
          _context5.next = 25;
          return setNoteIsUpdating(noteId, false);

        case 25:
          throw new Error();

        case 26:
        case "end":
          return _context5.stop();
      }
    }
  }, actions_marked5, null, [[4, 17]]);
}
function setNote(noteId, noteFields) {
  return {
    type: notes_action_types.SET_NOTE,
    noteId: noteId,
    noteFields: noteFields
  };
}
function setNoteIsUpdating(noteId, isUpdating) {
  return {
    type: notes_action_types.SET_NOTE_IS_UPDATING,
    noteId: noteId,
    isUpdating: isUpdating
  };
}
function setNotes(notes) {
  return {
    type: notes_action_types.SET_NOTES,
    notes: notes
  };
}
function setNotesQuery(query, noteIds) {
  return {
    type: notes_action_types.SET_NOTES_QUERY,
    query: query,
    noteIds: noteIds
  };
}
function notes_actions_setError(selector, error) {
  return {
    type: notes_action_types.SET_ERROR,
    error: error,
    selector: selector
  };
}
function notes_actions_setIsRequesting(selector, isRequesting) {
  return {
    type: notes_action_types.SET_IS_REQUESTING,
    selector: selector,
    isRequesting: isRequesting
  };
}
// CONCATENATED MODULE: ./packages/data/build-module/notes/resolvers.js


var notes_resolvers_marked = /*#__PURE__*/regenerator_default.a.mark(resolvers_getNotes);
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



function resolvers_getNotes() {
  var query,
      url,
      notes,
      _args = arguments;
  return regenerator_default.a.wrap(function getNotes$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
          url = Object(external_this_wp_url_["addQueryArgs"])("".concat(NAMESPACE, "/admin/notes"), query);
          _context.prev = 2;
          _context.next = 5;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: url
          });

        case 5:
          notes = _context.sent;
          _context.next = 8;
          return setNotes(notes);

        case 8:
          _context.next = 10;
          return setNotesQuery(query, notes.map(function (note) {
            return note.id;
          }));

        case 10:
          _context.next = 16;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](2);
          _context.next = 16;
          return notes_actions_setError('getNotes', _context.t0);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, notes_resolvers_marked, null, [[2, 12]]);
}
// CONCATENATED MODULE: ./packages/data/build-module/notes/reducer.js


function notes_reducer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function notes_reducer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      notes_reducer_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      notes_reducer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * Internal dependencies
 */




var reducer_notesReducer = function notesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    errors: {},
    noteQueries: {},
    notes: {},
    requesting: {}
  };

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      error = _ref.error,
      isRequesting = _ref.isRequesting,
      isUpdating = _ref.isUpdating,
      noteFields = _ref.noteFields,
      noteId = _ref.noteId,
      noteIds = _ref.noteIds,
      notes = _ref.notes,
      query = _ref.query,
      selector = _ref.selector,
      type = _ref.type;

  switch (type) {
    case notes_action_types.SET_NOTES:
      state = notes_reducer_objectSpread(notes_reducer_objectSpread({}, state), {}, {
        notes: notes_reducer_objectSpread(notes_reducer_objectSpread({}, state.notes), notes.reduce(function (acc, item) {
          acc[item.id] = item;
          return acc;
        }, {}))
      });
      break;

    case notes_action_types.SET_NOTES_QUERY:
      state = notes_reducer_objectSpread(notes_reducer_objectSpread({}, state), {}, {
        noteQueries: notes_reducer_objectSpread(notes_reducer_objectSpread({}, state.noteQueries), {}, defineProperty_default()({}, JSON.stringify(query), noteIds))
      });
      break;

    case notes_action_types.SET_ERROR:
      state = notes_reducer_objectSpread(notes_reducer_objectSpread({}, state), {}, {
        errors: notes_reducer_objectSpread(notes_reducer_objectSpread({}, state.errors), {}, defineProperty_default()({}, selector, error))
      });
      break;

    case notes_action_types.SET_NOTE:
      state = notes_reducer_objectSpread(notes_reducer_objectSpread({}, state), {}, {
        notes: notes_reducer_objectSpread(notes_reducer_objectSpread({}, state.notes), {}, defineProperty_default()({}, noteId, noteFields))
      });
      break;

    case notes_action_types.SET_NOTE_IS_UPDATING:
      state = notes_reducer_objectSpread(notes_reducer_objectSpread({}, state), {}, {
        notes: notes_reducer_objectSpread(notes_reducer_objectSpread({}, state.notes), {}, defineProperty_default()({}, noteId, notes_reducer_objectSpread(notes_reducer_objectSpread({}, state.notes[noteId]), {}, {
          isUpdating: isUpdating
        })))
      });
      break;

    case notes_action_types.SET_IS_REQUESTING:
      state = notes_reducer_objectSpread(notes_reducer_objectSpread({}, state), {}, {
        requesting: notes_reducer_objectSpread(notes_reducer_objectSpread({}, state.requesting), {}, defineProperty_default()({}, selector, isRequesting))
      });
      break;
  }

  return state;
};

/* harmony default export */ var notes_reducer = (reducer_notesReducer);
// CONCATENATED MODULE: ./packages/data/build-module/notes/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






Object(external_this_wp_data_["registerStore"])(notes_constants_STORE_NAME, {
  reducer: notes_reducer,
  actions: notes_actions_namespaceObject,
  controls: external_this_wp_dataControls_["controls"],
  selectors: notes_selectors_namespaceObject,
  resolvers: notes_resolvers_namespaceObject
});
var NOTES_STORE_NAME = notes_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/reports/constants.js
/**
 * Internal dependencies
 */
var reports_constants_STORE_NAME = 'wc/admin/reports';
// CONCATENATED MODULE: ./packages/data/build-module/reports/selectors.js
/**
 * Internal dependencies
 */

var EMPTY_OBJECT = {};
var selectors_getReportItemsError = function getReportItemsError(state, endpoint, query) {
  var resourceName = getResourceName(endpoint, query);
  return state.itemErrors[resourceName] || false;
};
var selectors_getReportItems = function getReportItems(state, endpoint, query) {
  var resourceName = getResourceName(endpoint, query);
  return state.items[resourceName] || EMPTY_OBJECT;
};
var selectors_getReportStats = function getReportStats(state, endpoint, query) {
  var resourceName = getResourceName(endpoint, query);
  return state.stats[resourceName] || EMPTY_OBJECT;
};
var selectors_getReportStatsError = function getReportStatsError(state, endpoint, query) {
  var resourceName = getResourceName(endpoint, query);
  return state.statErrors[resourceName] || false;
};
// CONCATENATED MODULE: ./packages/data/build-module/reports/action-types.js
var reports_action_types_TYPES = {
  SET_ITEM_ERROR: 'SET_ITEM_ERROR',
  SET_STAT_ERROR: 'SET_STAT_ERROR',
  SET_REPORT_ITEMS: 'SET_REPORT_ITEMS',
  SET_REPORT_STATS: 'SET_REPORT_STATS'
};
/* harmony default export */ var reports_action_types = (reports_action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/reports/actions.js
/**
 * Internal dependencies
 */


function setReportItemsError(endpoint, query, error) {
  var resourceName = getResourceName(endpoint, query);
  return {
    type: reports_action_types.SET_ITEM_ERROR,
    resourceName: resourceName,
    error: error
  };
}
function setReportItems(endpoint, query, items) {
  var resourceName = getResourceName(endpoint, query);
  return {
    type: reports_action_types.SET_REPORT_ITEMS,
    resourceName: resourceName,
    items: items
  };
}
function setReportStats(endpoint, query, stats) {
  var resourceName = getResourceName(endpoint, query);
  return {
    type: reports_action_types.SET_REPORT_STATS,
    resourceName: resourceName,
    stats: stats
  };
}
function setReportStatsError(endpoint, query, error) {
  var resourceName = getResourceName(endpoint, query);
  return {
    type: reports_action_types.SET_STAT_ERROR,
    resourceName: resourceName,
    error: error
  };
}
// CONCATENATED MODULE: ./packages/data/build-module/reports/resolvers.js


var reports_resolvers_marked = /*#__PURE__*/regenerator_default.a.mark(resolvers_getReportItems),
    reports_resolvers_marked2 = /*#__PURE__*/regenerator_default.a.mark(resolvers_getReportStats);
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




function resolvers_getReportItems(endpoint, query) {
  var fetchArgs, response, data, totalResults, totalPages;
  return regenerator_default.a.wrap(function getReportItems$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          fetchArgs = {
            parse: false,
            path: Object(external_this_wp_url_["addQueryArgs"])("".concat(NAMESPACE, "/reports/").concat(endpoint), query)
          };
          _context.prev = 1;
          _context.next = 4;
          return fetchWithHeaders(fetchArgs);

        case 4:
          response = _context.sent;
          data = response.data;
          totalResults = parseInt(response.headers.get('x-wp-total'), 10);
          totalPages = parseInt(response.headers.get('x-wp-totalpages'), 10);
          _context.next = 10;
          return setReportItems(endpoint, query, {
            data: data,
            totalResults: totalResults,
            totalPages: totalPages
          });

        case 10:
          _context.next = 16;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](1);
          _context.next = 16;
          return setReportItemsError(endpoint, query, _context.t0);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, reports_resolvers_marked, null, [[1, 12]]);
}
function resolvers_getReportStats(endpoint, query) {
  var fetchArgs, response, data, totalResults, totalPages;
  return regenerator_default.a.wrap(function getReportStats$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          fetchArgs = {
            parse: false,
            path: Object(external_this_wp_url_["addQueryArgs"])("".concat(NAMESPACE, "/reports/").concat(endpoint, "/stats"), query)
          };
          _context2.prev = 1;
          _context2.next = 4;
          return fetchWithHeaders(fetchArgs);

        case 4:
          response = _context2.sent;
          data = response.data;
          totalResults = parseInt(response.headers.get('x-wp-total'), 10);
          totalPages = parseInt(response.headers.get('x-wp-totalpages'), 10);
          _context2.next = 10;
          return setReportStats(endpoint, query, {
            data: data,
            totalResults: totalResults,
            totalPages: totalPages
          });

        case 10:
          _context2.next = 16;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](1);
          _context2.next = 16;
          return setReportStatsError(endpoint, query, _context2.t0);

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, reports_resolvers_marked2, null, [[1, 12]]);
}
// CONCATENATED MODULE: ./packages/data/build-module/reports/reducer.js


function reports_reducer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function reports_reducer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      reports_reducer_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      reports_reducer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * Internal dependencies
 */




var reducer_reports = function reports() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    itemErrors: {},
    items: {},
    statErrors: {},
    stats: {}
  };

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      items = _ref.items,
      stats = _ref.stats,
      error = _ref.error,
      resourceName = _ref.resourceName;

  switch (type) {
    case reports_action_types.SET_REPORT_ITEMS:
      return reports_reducer_objectSpread(reports_reducer_objectSpread({}, state), {}, {
        items: reports_reducer_objectSpread(reports_reducer_objectSpread({}, state.items), {}, defineProperty_default()({}, resourceName, items))
      });

    case reports_action_types.SET_REPORT_STATS:
      return reports_reducer_objectSpread(reports_reducer_objectSpread({}, state), {}, {
        stats: reports_reducer_objectSpread(reports_reducer_objectSpread({}, state.stats), {}, defineProperty_default()({}, resourceName, stats))
      });

    case reports_action_types.SET_ITEM_ERROR:
      return reports_reducer_objectSpread(reports_reducer_objectSpread({}, state), {}, {
        itemErrors: reports_reducer_objectSpread(reports_reducer_objectSpread({}, state.itemErrors), {}, defineProperty_default()({}, resourceName, error))
      });

    case reports_action_types.SET_STAT_ERROR:
      return reports_reducer_objectSpread(reports_reducer_objectSpread({}, state), {}, {
        statErrors: reports_reducer_objectSpread(reports_reducer_objectSpread({}, state.statErrors), {}, defineProperty_default()({}, resourceName, error))
      });

    default:
      return state;
  }
};

/* harmony default export */ var reports_reducer = (reducer_reports);
// CONCATENATED MODULE: ./packages/data/build-module/reports/index.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */







Object(external_this_wp_data_["registerStore"])(reports_constants_STORE_NAME, {
  reducer: reports_reducer,
  actions: reports_actions_namespaceObject,
  controls: build_module_controls,
  selectors: reports_selectors_namespaceObject,
  resolvers: reports_resolvers_namespaceObject
});
var REPORTS_STORE_NAME = reports_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/items/constants.js
var items_constants_STORE_NAME = 'wc/admin/items';
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(34);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: external {"this":["wc","date"]}
var external_this_wc_date_ = __webpack_require__(29);

// CONCATENATED MODULE: ./packages/data/build-module/items/utils.js



function utils_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function utils_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      utils_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      utils_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



/**
 * Returns leaderboard data to render a leaderboard table.
 *
 * @param  {Object} options                 arguments
 * @param  {string} options.id              Leaderboard ID
 * @param  {number} options.per_page       Per page limit
 * @param  {Object} options.persisted_query Persisted query passed to endpoint
 * @param  {Object} options.query           Query parameters in the url
 * @param  {Object} options.select          Instance of @wordpress/select
 * @param  {string} options.defaultDateRange   User specified default date range.
 * @return {Object} Object containing leaderboard responses.
 */

function getLeaderboard(options) {
  var endpoint = 'leaderboards';
  var perPage = options.per_page,
      persistedQuery = options.persisted_query,
      query = options.query,
      select = options.select,
      filterQuery = options.filterQuery;

  var _select = select(items_constants_STORE_NAME),
      getItems = _select.getItems,
      getItemsError = _select.getItemsError,
      isResolving = _select.isResolving;

  var response = {
    isRequesting: false,
    isError: false,
    rows: []
  };
  var datesFromQuery = Object(external_this_wc_date_["getCurrentDates"])(query, options.defaultDateRange);

  var leaderboardQuery = utils_objectSpread(utils_objectSpread({}, filterQuery), {}, {
    after: Object(external_this_wc_date_["appendTimestamp"])(datesFromQuery.primary.after, 'start'),
    before: Object(external_this_wc_date_["appendTimestamp"])(datesFromQuery.primary.before, 'end'),
    per_page: perPage,
    persisted_query: JSON.stringify(persistedQuery)
  }); // Disable eslint rule requiring `getItems` to be defined below because the next two statements
  // depend on `getItems` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return


  var leaderboards = getItems(endpoint, leaderboardQuery);

  if (isResolving('getItems', [endpoint, leaderboardQuery])) {
    return utils_objectSpread(utils_objectSpread({}, response), {}, {
      isRequesting: true
    });
  } else if (getItemsError(endpoint, leaderboardQuery)) {
    return utils_objectSpread(utils_objectSpread({}, response), {}, {
      isError: true
    });
  }

  var leaderboard = leaderboards.get(options.id);
  return utils_objectSpread(utils_objectSpread({}, response), {}, {
    rows: leaderboard === null || leaderboard === void 0 ? void 0 : leaderboard.rows
  });
}
/**
 * Returns items based on a search query.
 *
 * @param  {Object}   select    Instance of @wordpress/select
 * @param  {string}   endpoint  Report API Endpoint
 * @param  {string[]} search    Array of search strings.
 * @return {Object}   Object containing API request information and the matching items.
 */

function searchItemsByString(select, endpoint, search) {
  var _select2 = select(items_constants_STORE_NAME),
      getItems = _select2.getItems,
      getItemsError = _select2.getItemsError,
      isResolving = _select2.isResolving;

  var items = {};
  var isRequesting = false;
  var isError = false;
  search.forEach(function (searchWord) {
    var query = {
      search: searchWord,
      per_page: 10
    };
    var newItems = getItems(endpoint, query);
    newItems.forEach(function (item, id) {
      items[id] = item;
    });

    if (isResolving('getItems', [endpoint, query])) {
      isRequesting = true;
    }

    if (getItemsError(endpoint, query)) {
      isError = true;
    }
  });
  return {
    items: items,
    isRequesting: isRequesting,
    isError: isError
  };
}
/**
 * Generate a resource name for item totals count.
 *
 * It omits query parameters from the identifier that don't affect
 * totals values like pagination and response field filtering.
 *
 * @param {string} itemType Item type for totals count.
 * @param {Object} query Query for item totals count.
 * @return {string} Resource name for item totals.
 */

function getTotalCountResourceName(itemType, query) {
  // Disable eslint rule because we're using this spread to omit properties
  // that don't affect item totals count results.
  // eslint-disable-next-line no-unused-vars, camelcase
  var _fields = query._fields,
      page = query.page,
      per_page = query.per_page,
      totalsQuery = objectWithoutProperties_default()(query, ["_fields", "page", "per_page"]);

  return getResourceName('total-' + itemType, totalsQuery);
}
// CONCATENATED MODULE: ./packages/data/build-module/items/selectors.js
/**
 * Internal dependencies
 */


var selectors_getItems = function getItems(state, itemType, query) {
  var resourceName = getResourceName(itemType, query);
  var ids = state.items[resourceName] && state.items[resourceName].data || [];
  return ids.reduce(function (map, id) {
    map.set(id, state.data[itemType][id]);
    return map;
  }, new Map());
};
var selectors_getItemsTotalCount = function getItemsTotalCount(state, itemType, query) {
  var defaultValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var resourceName = getTotalCountResourceName(itemType, query);
  var totalCount = state.items.hasOwnProperty(resourceName) ? state.items[resourceName] : defaultValue;
  return totalCount;
};
var selectors_getItemsError = function getItemsError(state, itemType, query) {
  var resourceName = getResourceName(itemType, query);
  return state.errors[resourceName];
};
// CONCATENATED MODULE: ./packages/data/build-module/items/action-types.js
var items_action_types_TYPES = {
  SET_ITEM: 'SET_ITEM',
  SET_ITEMS: 'SET_ITEMS',
  SET_ITEMS_TOTAL_COUNT: 'SET_ITEMS_TOTAL_COUNT',
  SET_ERROR: 'SET_ERROR'
};
/* harmony default export */ var items_action_types = (items_action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/items/actions.js



var items_actions_marked = /*#__PURE__*/regenerator_default.a.mark(updateProductStock),
    items_actions_marked2 = /*#__PURE__*/regenerator_default.a.mark(createProductFromTemplate);

function items_actions_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function items_actions_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      items_actions_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      items_actions_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



function setItem(itemType, id, item) {
  return {
    type: items_action_types.SET_ITEM,
    id: id,
    item: item,
    itemType: itemType
  };
}
function setItems(itemType, query, items, totalCount) {
  return {
    type: items_action_types.SET_ITEMS,
    items: items,
    itemType: itemType,
    query: query,
    totalCount: totalCount
  };
}
function setItemsTotalCount(itemType, query, totalCount) {
  return {
    type: items_action_types.SET_ITEMS_TOTAL_COUNT,
    itemType: itemType,
    query: query,
    totalCount: totalCount
  };
}
function items_actions_setError(itemType, query, error) {
  return {
    type: items_action_types.SET_ERROR,
    itemType: itemType,
    query: query,
    error: error
  };
}
function updateProductStock(product, quantity) {
  var updatedProduct, id, parentId, type, url;
  return regenerator_default.a.wrap(function updateProductStock$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          updatedProduct = items_actions_objectSpread(items_actions_objectSpread({}, product), {}, {
            stock_quantity: quantity
          });
          id = updatedProduct.id, parentId = updatedProduct.parent_id, type = updatedProduct.type; // Optimistically update product stock.

          _context.next = 4;
          return setItem('products', id, updatedProduct);

        case 4:
          url = NAMESPACE;
          _context.t0 = type;
          _context.next = _context.t0 === 'variation' ? 8 : _context.t0 === 'variable' ? 10 : _context.t0 === 'simple' ? 10 : 10;
          break;

        case 8:
          url += "/products/".concat(parentId, "/variations/").concat(id);
          return _context.abrupt("break", 11);

        case 10:
          url += "/products/".concat(id);

        case 11:
          _context.prev = 11;
          _context.next = 14;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'PUT',
            data: updatedProduct
          });

        case 14:
          return _context.abrupt("return", true);

        case 17:
          _context.prev = 17;
          _context.t1 = _context["catch"](11);
          _context.next = 21;
          return setItem('products', id, product);

        case 21:
          _context.next = 23;
          return items_actions_setError('products', id, _context.t1);

        case 23:
          return _context.abrupt("return", false);

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, items_actions_marked, null, [[11, 17]]);
}
function createProductFromTemplate(itemFields, query) {
  var url, newItem;
  return regenerator_default.a.wrap(function createProductFromTemplate$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          url = Object(external_this_wp_url_["addQueryArgs"])("".concat(WC_ADMIN_NAMESPACE, "/onboarding/tasks/create_product_from_template"), query || {});
          _context2.next = 4;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'POST',
            data: itemFields
          });

        case 4:
          newItem = _context2.sent;
          _context2.next = 7;
          return setItem('products', newItem.id, newItem);

        case 7:
          return _context2.abrupt("return", newItem);

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 14;
          return items_actions_setError('createProductFromTemplate', query, _context2.t0);

        case 14:
          throw _context2.t0;

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, items_actions_marked2, null, [[0, 10]]);
}
// CONCATENATED MODULE: ./packages/data/build-module/items/resolvers.js



function resolvers_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function resolvers_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      resolvers_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      resolvers_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var items_resolvers_marked = /*#__PURE__*/regenerator_default.a.mark(request),
    items_resolvers_marked2 = /*#__PURE__*/regenerator_default.a.mark(resolvers_getItems),
    items_resolvers_marked3 = /*#__PURE__*/regenerator_default.a.mark(items_resolvers_getReviewsTotalCount),
    items_resolvers_marked4 = /*#__PURE__*/regenerator_default.a.mark(resolvers_getItemsTotalCount);
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */





function request(itemType, query) {
  var endpoint, url, isUnboundedRequest, fetch, response, totalCount;
  return regenerator_default.a.wrap(function request$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          endpoint = itemType === 'categories' ? 'products/categories' : itemType;
          url = Object(external_this_wp_url_["addQueryArgs"])("".concat(NAMESPACE, "/").concat(endpoint), query);
          isUnboundedRequest = query.per_page === -1;
          fetch = isUnboundedRequest ? external_this_wp_dataControls_["apiFetch"] : fetchWithHeaders;
          _context.next = 6;
          return fetch({
            path: url,
            method: 'GET'
          });

        case 6:
          response = _context.sent;

          if (!isUnboundedRequest) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", {
            items: response,
            totalCount: response.length
          });

        case 9:
          totalCount = parseInt(response.headers.get('x-wp-total'), 10);
          return _context.abrupt("return", {
            items: response.data,
            totalCount: totalCount
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, items_resolvers_marked);
}

function resolvers_getItems(itemType, query) {
  var _yield$request, items, totalCount;

  return regenerator_default.a.wrap(function getItems$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return request(itemType, query);

        case 3:
          _yield$request = _context2.sent;
          items = _yield$request.items;
          totalCount = _yield$request.totalCount;
          _context2.next = 8;
          return setItemsTotalCount(itemType, query, totalCount);

        case 8:
          _context2.next = 10;
          return setItems(itemType, query, items);

        case 10:
          _context2.next = 16;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 16;
          return items_actions_setError(itemType, query, _context2.t0);

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, items_resolvers_marked2, null, [[0, 12]]);
}
function items_resolvers_getReviewsTotalCount(itemType, query) {
  return regenerator_default.a.wrap(function getReviewsTotalCount$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return resolvers_getItemsTotalCount(itemType, query);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, items_resolvers_marked3);
}
function resolvers_getItemsTotalCount(itemType, query) {
  var totalsQuery, _yield$request2, totalCount;

  return regenerator_default.a.wrap(function getItemsTotalCount$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          totalsQuery = resolvers_objectSpread(resolvers_objectSpread({}, query), {}, {
            page: 1,
            per_page: 1
          });
          _context4.next = 4;
          return request(itemType, totalsQuery);

        case 4:
          _yield$request2 = _context4.sent;
          totalCount = _yield$request2.totalCount;
          _context4.next = 8;
          return setItemsTotalCount(itemType, query, totalCount);

        case 8:
          _context4.next = 14;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 14;
          return items_actions_setError(itemType, query, _context4.t0);

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, items_resolvers_marked4, null, [[0, 10]]);
}
// CONCATENATED MODULE: ./packages/data/build-module/items/reducer.js


function items_reducer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function items_reducer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      items_reducer_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      items_reducer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * Internal dependencies
 */






var items_reducer_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    items: {},
    errors: {},
    data: {}
  };

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      id = _ref.id,
      itemType = _ref.itemType,
      query = _ref.query,
      item = _ref.item,
      items = _ref.items,
      totalCount = _ref.totalCount,
      error = _ref.error;

  switch (type) {
    case items_action_types.SET_ITEM:
      var itemData = state.data[itemType] || {};
      return items_reducer_objectSpread(items_reducer_objectSpread({}, state), {}, {
        data: items_reducer_objectSpread(items_reducer_objectSpread({}, state.data), {}, defineProperty_default()({}, itemType, items_reducer_objectSpread(items_reducer_objectSpread({}, itemData), {}, defineProperty_default()({}, id, items_reducer_objectSpread(items_reducer_objectSpread({}, itemData[id] || {}), item)))))
      });

    case items_action_types.SET_ITEMS:
      var ids = [];
      var nextItems = items.reduce(function (result, theItem) {
        ids.push(theItem.id);
        result[theItem.id] = theItem;
        return result;
      }, {});
      var resourceName = getResourceName(itemType, query);
      return items_reducer_objectSpread(items_reducer_objectSpread({}, state), {}, {
        items: items_reducer_objectSpread(items_reducer_objectSpread({}, state.items), {}, defineProperty_default()({}, resourceName, {
          data: ids
        })),
        data: items_reducer_objectSpread(items_reducer_objectSpread({}, state.data), {}, defineProperty_default()({}, itemType, items_reducer_objectSpread(items_reducer_objectSpread({}, state.data[itemType]), nextItems)))
      });

    case items_action_types.SET_ITEMS_TOTAL_COUNT:
      var totalResourceName = getTotalCountResourceName(itemType, query);
      return items_reducer_objectSpread(items_reducer_objectSpread({}, state), {}, {
        items: items_reducer_objectSpread(items_reducer_objectSpread({}, state.items), {}, defineProperty_default()({}, totalResourceName, totalCount))
      });

    case items_action_types.SET_ERROR:
      return items_reducer_objectSpread(items_reducer_objectSpread({}, state), {}, {
        errors: items_reducer_objectSpread(items_reducer_objectSpread({}, state.errors), {}, defineProperty_default()({}, getResourceName(itemType, query), error))
      });

    default:
      return state;
  }
};

/* harmony default export */ var items_reducer = (items_reducer_reducer);
// CONCATENATED MODULE: ./packages/data/build-module/items/index.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */







Object(external_this_wp_data_["registerStore"])(items_constants_STORE_NAME, {
  reducer: items_reducer,
  actions: items_actions_namespaceObject,
  controls: build_module_controls,
  selectors: items_selectors_namespaceObject,
  resolvers: items_resolvers_namespaceObject
});
var ITEMS_STORE_NAME = items_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/navigation/constants.js
var navigation_constants_STORE_NAME = 'woocommerce-navigation';
// EXTERNAL MODULE: external {"this":["wp","hooks"]}
var external_this_wp_hooks_ = __webpack_require__(42);

// CONCATENATED MODULE: ./packages/data/build-module/navigation/selectors.js
/**
 * External dependencies
 */

var MENU_ITEMS_HOOK = 'woocommerce_navigation_menu_items';
var selectors_getMenuItems = function getMenuItems(state) {
  return Object(external_this_wp_hooks_["applyFilters"])(MENU_ITEMS_HOOK, state.menuItems);
};
var getActiveItem = function getActiveItem(state) {
  return state.activeItem || null;
};
// CONCATENATED MODULE: ./packages/data/build-module/navigation/action-types.js
var navigation_action_types_TYPES = {
  ADD_MENU_ITEMS: 'ADD_MENU_ITEMS',
  SET_MENU_ITEMS: 'SET_MENU_ITEMS',
  SET_ACTIVE_ITEM: 'SET_ACTIVE_ITEM'
};
/* harmony default export */ var navigation_action_types = (navigation_action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/navigation/actions.js
/**
 * Internal dependencies
 */

function setActiveItem(activeItem) {
  return {
    type: navigation_action_types.SET_ACTIVE_ITEM,
    activeItem: activeItem
  };
}
function actions_setMenuItems(menuItems) {
  return {
    type: navigation_action_types.SET_MENU_ITEMS,
    menuItems: menuItems
  };
}
function addMenuItems(menuItems) {
  return {
    type: navigation_action_types.ADD_MENU_ITEMS,
    menuItems: menuItems
  };
}
// CONCATENATED MODULE: ./packages/data/build-module/navigation/reducer.js



function navigation_reducer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function navigation_reducer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      navigation_reducer_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      navigation_reducer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * Internal dependencies
 */




var navigation_reducer_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    activeItem: null,
    menuItems: []
  };

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      activeItem = _ref.activeItem,
      menuItems = _ref.menuItems;

  switch (type) {
    case navigation_action_types.SET_ACTIVE_ITEM:
      state = navigation_reducer_objectSpread(navigation_reducer_objectSpread({}, state), {}, {
        activeItem: activeItem
      });
      break;

    case navigation_action_types.SET_MENU_ITEMS:
      state = navigation_reducer_objectSpread(navigation_reducer_objectSpread({}, state), {}, {
        menuItems: menuItems
      });
      break;

    case navigation_action_types.ADD_MENU_ITEMS:
      state = navigation_reducer_objectSpread(navigation_reducer_objectSpread({}, state), {}, {
        menuItems: [].concat(toConsumableArray_default()(state.menuItems), toConsumableArray_default()(menuItems))
      });
      break;
  }

  return state;
};

/* harmony default export */ var navigation_reducer = (navigation_reducer_reducer);
// CONCATENATED MODULE: ./packages/data/build-module/navigation/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */





Object(external_this_wp_data_["registerStore"])(navigation_constants_STORE_NAME, {
  reducer: navigation_reducer,
  actions: navigation_actions_namespaceObject,
  controls: external_this_wp_dataControls_["controls"],
  selectors: navigation_selectors_namespaceObject
});
var NAVIGATION_STORE_NAME = navigation_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/navigation/with-navigation-hydration.js

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


/**
 * Higher-order component used to hydrate navigation data.
 *
 * @param {Object} data Data object with menu items and site information.
 */

var with_navigation_hydration_withNavigationHydration = function withNavigationHydration(data) {
  return Object(external_this_wp_compose_["createHigherOrderComponent"])(function (OriginalComponent) {
    return function (props) {
      var dataRef = Object(external_this_wp_element_["useRef"])(data);
      Object(external_this_wp_data_["useSelect"])(function (select, registry) {
        if (!dataRef.current) {
          return;
        }

        var _select = select(navigation_constants_STORE_NAME),
            isResolving = _select.isResolving,
            hasFinishedResolution = _select.hasFinishedResolution;

        var _registry$dispatch = registry.dispatch(navigation_constants_STORE_NAME),
            startResolution = _registry$dispatch.startResolution,
            finishResolution = _registry$dispatch.finishResolution,
            setMenuItems = _registry$dispatch.setMenuItems;

        if (!isResolving('getMenuItems') && !hasFinishedResolution('getMenuItems')) {
          startResolution('getMenuItems', []);
          setMenuItems(dataRef.current.menuItems);
          finishResolution('getMenuItems', []);
        }
      });
      return Object(external_this_wp_element_["createElement"])(OriginalComponent, props);
    };
  }, 'withNavigationHydration');
};
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(16);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external {"this":["wc","navigation"]}
var external_this_wc_navigation_ = __webpack_require__(21);

// CONCATENATED MODULE: ./packages/data/build-module/reports/utils.js



function reports_utils_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function reports_utils_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      reports_utils_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      reports_utils_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * External dependencies
 */






/**
 * Internal dependencies
 */





/**
 * Add filters and advanced filters values to a query object.
 *
 * @param  {Object} options                   arguments
 * @param  {string} options.endpoint          Report API Endpoint
 * @param  {Object} options.query             Query parameters in the url
 * @param  {Array}  options.limitBy           Properties used to limit the results. It will be used in the API call to send the IDs.
 * @param  {Array}  [options.filters]         config filters
 * @param  {Object} [options.advancedFilters] config advanced filters
 * @return {Object} A query object with the values from filters and advanced fitlters applied.
 */

function getFilterQuery(options) {
  var endpoint = options.endpoint,
      query = options.query,
      limitBy = options.limitBy,
      _options$filters = options.filters,
      filters = _options$filters === void 0 ? [] : _options$filters,
      _options$advancedFilt = options.advancedFilters,
      advancedFilters = _options$advancedFilt === void 0 ? {} : _options$advancedFilt;

  if (query.search) {
    var limitProperties = limitBy || [endpoint];
    return limitProperties.reduce(function (result, limitProperty) {
      result[limitProperty] = query[limitProperty];
      return result;
    }, {});
  }

  return filters.map(function (filter) {
    return getQueryFromConfig(filter, advancedFilters, query);
  }).reduce(function (result, configQuery) {
    return Object.assign(result, configQuery);
  }, {});
} // Some stats endpoints don't have interval data, so they can ignore after/before params and omit that part of the response.

var noIntervalEndpoints = ['stock', 'customers'];
/**
 * Add timestamp to advanced filter parameters involving date. The api
 * expects a timestamp for these values similar to `before` and `after`.
 *
 * @param {Object} config - advancedFilters config object.
 * @param {Object} activeFilter - an active filter.
 * @return {Object} - an active filter with timestamp added to date values.
 */

function timeStampFilterDates(config, activeFilter) {
  var advancedFilterConfig = config.filters[activeFilter.key];

  if (Object(external_lodash_["get"])(advancedFilterConfig, ['input', 'component']) !== 'Date') {
    return activeFilter;
  }

  var rule = activeFilter.rule,
      value = activeFilter.value;
  var timeOfDayMap = {
    after: 'start',
    before: 'end'
  }; // If the value is an array, it signifies "between" values which must have a timestamp
  // appended to each value.

  if (Array.isArray(value)) {
    var _value = slicedToArray_default()(value, 2),
        after = _value[0],
        before = _value[1];

    return Object.assign({}, activeFilter, {
      value: [Object(external_this_wc_date_["appendTimestamp"])(external_moment_default()(after), timeOfDayMap.after), Object(external_this_wc_date_["appendTimestamp"])(external_moment_default()(before), timeOfDayMap.before)]
    });
  }

  return Object.assign({}, activeFilter, {
    value: Object(external_this_wc_date_["appendTimestamp"])(external_moment_default()(value), timeOfDayMap[rule])
  });
}
function getQueryFromConfig(config, advancedFilters, query) {
  var queryValue = query[config.param];

  if (!queryValue) {
    return {};
  }

  if (queryValue === 'advanced') {
    var activeFilters = Object(external_this_wc_navigation_["getActiveFiltersFromQuery"])(query, advancedFilters.filters);

    if (activeFilters.length === 0) {
      return {};
    }

    var filterQuery = Object(external_this_wc_navigation_["getQueryFromActiveFilters"])(activeFilters.map(function (filter) {
      return timeStampFilterDates(advancedFilters, filter);
    }), {}, advancedFilters.filters);
    return reports_utils_objectSpread({
      match: query.match || 'all'
    }, filterQuery);
  }

  var filter = Object(external_lodash_["find"])(Object(external_this_wc_navigation_["flattenFilters"])(config.filters), {
    value: queryValue
  });

  if (!filter) {
    return {};
  }

  if (filter.settings && filter.settings.param) {
    var param = filter.settings.param;

    if (query[param]) {
      return defineProperty_default()({}, param, query[param]);
    }

    return {};
  }

  return defineProperty_default()({}, config.param, queryValue);
}
/**
 * Returns true if a report object is empty.
 *
 * @param  {Object}  report   Report to check
 * @param  {string}  endpoint Endpoint slug
 * @return {boolean}        True if report is data is empty.
 */

function isReportDataEmpty(report, endpoint) {
  if (!report) {
    return true;
  }

  if (!report.data) {
    return true;
  }

  if (!report.data.totals || Object(external_lodash_["isNull"])(report.data.totals)) {
    return true;
  }

  var checkIntervals = !Object(external_lodash_["includes"])(noIntervalEndpoints, endpoint);

  if (checkIntervals && (!report.data.intervals || report.data.intervals.length === 0)) {
    return true;
  }

  return false;
}
/**
 * Constructs and returns a query associated with a Report data request.
 *
 * @param  {Object} options           arguments
 * @param  {string} options.endpoint  Report API Endpoint
 * @param  {string} options.dataType  'primary' or 'secondary'.
 * @param  {Object} options.query     Query parameters in the url.
 * @param  {Array}  options.limitBy   Properties used to limit the results. It will be used in the API call to send the IDs.
 * @param  {string}  options.defaultDateRange   User specified default date range.
 * @return {Object} data request query parameters.
 */

function getRequestQuery(options) {
  var endpoint = options.endpoint,
      dataType = options.dataType,
      query = options.query,
      fields = options.fields;
  var datesFromQuery = Object(external_this_wc_date_["getCurrentDates"])(query, options.defaultDateRange);
  var interval = Object(external_this_wc_date_["getIntervalForQuery"])(query);
  var filterQuery = getFilterQuery(options);
  var end = datesFromQuery[dataType].before;
  var noIntervals = Object(external_lodash_["includes"])(noIntervalEndpoints, endpoint);
  return noIntervals ? reports_utils_objectSpread(reports_utils_objectSpread({}, filterQuery), {}, {
    fields: fields
  }) : reports_utils_objectSpread({
    order: 'asc',
    interval: interval,
    per_page: MAX_PER_PAGE,
    after: Object(external_this_wc_date_["appendTimestamp"])(datesFromQuery[dataType].after, 'start'),
    before: Object(external_this_wc_date_["appendTimestamp"])(end, 'end'),
    segmentby: query.segmentby,
    fields: fields
  }, filterQuery);
}
/**
 * Returns summary number totals needed to render a report page.
 *
 * @param  {Object} options           arguments
 * @param  {string} options.endpoint  Report API Endpoint
 * @param  {Object} options.query     Query parameters in the url
 * @param  {Object} options.select    Instance of @wordpress/select
 * @param  {Array}  options.limitBy   Properties used to limit the results. It will be used in the API call to send the IDs.
 * @param  {string}  options.defaultDateRange   User specified default date range.
 * @return {Object} Object containing summary number responses.
 */


function getSummaryNumbers(options) {
  var endpoint = options.endpoint,
      select = options.select;

  var _select = select(reports_constants_STORE_NAME),
      getReportStats = _select.getReportStats,
      getReportStatsError = _select.getReportStatsError,
      isResolving = _select.isResolving;

  var response = {
    isRequesting: false,
    isError: false,
    totals: {
      primary: null,
      secondary: null
    }
  };
  var primaryQuery = getRequestQuery(reports_utils_objectSpread(reports_utils_objectSpread({}, options), {}, {
    dataType: 'primary'
  })); // Disable eslint rule requiring `getReportStats` to be defined below because the next two statements
  // depend on `getReportStats` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  var primary = getReportStats(endpoint, primaryQuery);

  if (isResolving('getReportStats', [endpoint, primaryQuery])) {
    return reports_utils_objectSpread(reports_utils_objectSpread({}, response), {}, {
      isRequesting: true
    });
  } else if (getReportStatsError(endpoint, primaryQuery)) {
    return reports_utils_objectSpread(reports_utils_objectSpread({}, response), {}, {
      isError: true
    });
  }

  var primaryTotals = primary && primary.data && primary.data.totals || null;
  var secondaryQuery = getRequestQuery(reports_utils_objectSpread(reports_utils_objectSpread({}, options), {}, {
    dataType: 'secondary'
  })); // Disable eslint rule requiring `getReportStats` to be defined below because the next two statements
  // depend on `getReportStats` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  var secondary = getReportStats(endpoint, secondaryQuery);

  if (isResolving('getReportStats', [endpoint, secondaryQuery])) {
    return reports_utils_objectSpread(reports_utils_objectSpread({}, response), {}, {
      isRequesting: true
    });
  } else if (getReportStatsError(endpoint, secondaryQuery)) {
    return reports_utils_objectSpread(reports_utils_objectSpread({}, response), {}, {
      isError: true
    });
  }

  var secondaryTotals = secondary && secondary.data && secondary.data.totals || null;
  return reports_utils_objectSpread(reports_utils_objectSpread({}, response), {}, {
    totals: {
      primary: primaryTotals,
      secondary: secondaryTotals
    }
  });
}
/**
 * Static responses object to avoid returning new references each call.
 */

var reportChartDataResponses = {
  requesting: {
    isEmpty: false,
    isError: false,
    isRequesting: true,
    data: {
      totals: {},
      intervals: []
    }
  },
  error: {
    isEmpty: false,
    isError: true,
    isRequesting: false,
    data: {
      totals: {},
      intervals: []
    }
  },
  empty: {
    isEmpty: true,
    isError: false,
    isRequesting: false,
    data: {
      totals: {},
      intervals: []
    }
  }
};
var EMPTY_ARRAY = [];
/**
 * Cache helper for returning the full chart dataset after multiple
 * requests. Memoized on the request query (string), only called after
 * all the requests have resolved successfully.
 */

var getReportChartDataResponse = Object(external_lodash_["memoize"])(function (requestString, totals, intervals) {
  return {
    isEmpty: false,
    isError: false,
    isRequesting: false,
    data: {
      totals: totals,
      intervals: intervals
    }
  };
}, function (requestString, totals, intervals) {
  return [requestString, totals.length, intervals.length].join(':');
});
/**
 * Returns all of the data needed to render a chart with summary numbers on a report page.
 *
 * @param  {Object} options           arguments
 * @param  {string} options.endpoint  Report API Endpoint
 * @param  {string} options.dataType  'primary' or 'secondary'
 * @param  {Object} options.query     Query parameters in the url
 * @param  {Object} options.select    Instance of @wordpress/select
 * @param  {Array}  options.limitBy   Properties used to limit the results. It will be used in the API call to send the IDs.
 * @param  {string}  options.defaultDateRange   User specified default date range.
 * @return {Object}  Object containing API request information (response, fetching, and error details)
 */

function getReportChartData(options) {
  var endpoint = options.endpoint,
      select = options.select;

  var _select2 = select(reports_constants_STORE_NAME),
      getReportStats = _select2.getReportStats,
      getReportStatsError = _select2.getReportStatsError,
      isResolving = _select2.isResolving;

  var requestQuery = getRequestQuery(options); // Disable eslint rule requiring `stats` to be defined below because the next two if statements
  // depend on `getReportStats` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  var stats = getReportStats(endpoint, requestQuery);

  if (isResolving('getReportStats', [endpoint, requestQuery])) {
    return reportChartDataResponses.requesting;
  }

  if (getReportStatsError(endpoint, requestQuery)) {
    return reportChartDataResponses.error;
  }

  if (isReportDataEmpty(stats, endpoint)) {
    return reportChartDataResponses.empty;
  }

  var totals = stats && stats.data && stats.data.totals || null;
  var intervals = stats && stats.data && stats.data.intervals || EMPTY_ARRAY; // If we have more than 100 results for this time period,
  // we need to make additional requests to complete the response.

  if (stats.totalResults > MAX_PER_PAGE) {
    var isFetching = true;
    var isError = false;
    var pagedData = [];
    var totalPages = Math.ceil(stats.totalResults / MAX_PER_PAGE);
    var pagesFetched = 1;

    for (var i = 2; i <= totalPages; i++) {
      var nextQuery = reports_utils_objectSpread(reports_utils_objectSpread({}, requestQuery), {}, {
        page: i
      });

      var _data = getReportStats(endpoint, nextQuery);

      if (isResolving('getReportStats', [endpoint, nextQuery])) {
        continue;
      }

      if (getReportStatsError(endpoint, nextQuery)) {
        isError = true;
        isFetching = false;
        break;
      }

      pagedData.push(_data);
      pagesFetched++;

      if (pagesFetched === totalPages) {
        isFetching = false;
        break;
      }
    }

    if (isFetching) {
      return reportChartDataResponses.requesting;
    } else if (isError) {
      return reportChartDataResponses.error;
    }

    Object(external_lodash_["forEach"])(pagedData, function (_data) {
      if (_data.data && _data.data.intervals && Array.isArray(_data.data.intervals)) {
        intervals = intervals.concat(_data.data.intervals);
      }
    });
  }

  return getReportChartDataResponse(getResourceName(endpoint, requestQuery), totals, intervals);
}
/**
 * Returns a formatting function or string to be used by d3-format
 *
 * @param  {string} type Type of number, 'currency', 'number', 'percent', 'average'
 * @param  {Function} formatAmount format currency function
 * @return {string|Function}  returns a number format based on the type or an overriding formatting function
 */

function getTooltipValueFormat(type, formatAmount) {
  switch (type) {
    case 'currency':
      return formatAmount;

    case 'percent':
      return '.0%';

    case 'number':
      return ',';

    case 'average':
      return ',.2r';

    default:
      return ',';
  }
}
/**
 * Returns query needed for a request to populate a table.
 *
 * @param  {Object} options              arguments
 * @param  {Object} options.query        Query parameters in the url
 * @param  {Object} options.tableQuery   Query parameters specific for that endpoint
 * @param  {string} options.defaultDateRange   User specified default date range.
 * @return {Object} Object    Table data response
 */

function getReportTableQuery(options) {
  var query = options.query,
      _options$tableQuery = options.tableQuery,
      tableQuery = _options$tableQuery === void 0 ? {} : _options$tableQuery;
  var filterQuery = getFilterQuery(options);
  var datesFromQuery = Object(external_this_wc_date_["getCurrentDates"])(query, options.defaultDateRange);
  var noIntervals = Object(external_lodash_["includes"])(noIntervalEndpoints, options.endpoint);
  return reports_utils_objectSpread(reports_utils_objectSpread({
    orderby: query.orderby || 'date',
    order: query.order || 'desc',
    after: noIntervals ? undefined : Object(external_this_wc_date_["appendTimestamp"])(datesFromQuery.primary.after, 'start'),
    before: noIntervals ? undefined : Object(external_this_wc_date_["appendTimestamp"])(datesFromQuery.primary.before, 'end'),
    page: query.paged || 1,
    per_page: query.per_page || QUERY_DEFAULTS.pageSize
  }, filterQuery), tableQuery);
}
/**
 * Returns table data needed to render a report page.
 *
 * @param  {Object} options                arguments
 * @param  {string} options.endpoint       Report API Endpoint
 * @param  {Object} options.query          Query parameters in the url
 * @param  {Object} options.select         Instance of @wordpress/select
 * @param  {Object} options.tableQuery     Query parameters specific for that endpoint
 * @param  {string}  options.defaultDateRange   User specified default date range.
 * @return {Object} Object    Table data response
 */

function getReportTableData(options) {
  var endpoint = options.endpoint,
      select = options.select;

  var _select3 = select(reports_constants_STORE_NAME),
      getReportItems = _select3.getReportItems,
      getReportItemsError = _select3.getReportItemsError,
      isResolving = _select3.isResolving;

  var tableQuery = getReportTableQuery(options);
  var response = {
    query: tableQuery,
    isRequesting: false,
    isError: false,
    items: {
      data: [],
      totalResults: 0
    }
  }; // Disable eslint rule requiring `items` to be defined below because the next two if statements
  // depend on `getReportItems` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  var items = getReportItems(endpoint, tableQuery);

  if (isResolving('getReportItems', [endpoint, tableQuery])) {
    return reports_utils_objectSpread(reports_utils_objectSpread({}, response), {}, {
      isRequesting: true
    });
  } else if (getReportItemsError(endpoint, tableQuery)) {
    return reports_utils_objectSpread(reports_utils_objectSpread({}, response), {}, {
      isError: true
    });
  }

  return reports_utils_objectSpread(reports_utils_objectSpread({}, response), {}, {
    items: items
  });
}
// CONCATENATED MODULE: ./packages/data/build-module/export/constants.js
/**
 * Internal dependencies
 */
var export_constants_STORE_NAME = 'wc/admin/export';
// EXTERNAL MODULE: ./node_modules/md5/md5.js
var md5 = __webpack_require__(121);
var md5_default = /*#__PURE__*/__webpack_require__.n(md5);

// CONCATENATED MODULE: ./packages/data/build-module/export/utils.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


var utils_hashExportArgs = function hashExportArgs(args) {
  return md5_default()(getResourceName('export', args));
};
// CONCATENATED MODULE: ./packages/data/build-module/export/selectors.js
/**
 * Internal dependencies
 */

var selectors_isExportRequesting = function isExportRequesting(state, selector, selectorArgs) {
  return Boolean(state.requesting[selector] && state.requesting[selector][utils_hashExportArgs(selectorArgs)]);
};
var selectors_getExportId = function getExportId(state, exportType, exportArgs) {
  return state.exportIds[exportType] && state.exportIds[exportType][utils_hashExportArgs(exportArgs)];
};
var selectors_getError = function getError(state, selector, selectorArgs) {
  return state.errors[selector] && state.errors[selector][utils_hashExportArgs(selectorArgs)];
};
// CONCATENATED MODULE: ./packages/data/build-module/export/action-types.js
var export_action_types_TYPES = {
  START_EXPORT: 'START_EXPORT',
  SET_EXPORT_ID: 'SET_EXPORT_ID',
  SET_ERROR: 'SET_ERROR',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING'
};
/* harmony default export */ var export_action_types = (export_action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/export/actions.js


var export_actions_marked = /*#__PURE__*/regenerator_default.a.mark(startExport);
/**
 * Internal dependencies
 */





function setExportId(exportType, exportArgs, exportId) {
  return {
    type: export_action_types.SET_EXPORT_ID,
    exportType: exportType,
    exportArgs: exportArgs,
    exportId: exportId
  };
}
function export_actions_setIsRequesting(selector, selectorArgs, isRequesting) {
  return {
    type: export_action_types.SET_IS_REQUESTING,
    selector: selector,
    selectorArgs: selectorArgs,
    isRequesting: isRequesting
  };
}
function export_actions_setError(selector, selectorArgs, error) {
  return {
    type: export_action_types.SET_ERROR,
    selector: selector,
    selectorArgs: selectorArgs,
    error: error
  };
}
function startExport(type, args) {
  var response, _response$data, exportId, message;

  return regenerator_default.a.wrap(function startExport$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return export_actions_setIsRequesting('startExport', {
            type: type,
            args: args
          }, true);

        case 2:
          _context.prev = 2;
          _context.next = 5;
          return fetchWithHeaders({
            path: "".concat(NAMESPACE, "/reports/").concat(type, "/export"),
            method: 'POST',
            data: {
              report_args: args,
              email: true
            }
          });

        case 5:
          response = _context.sent;
          _context.next = 8;
          return export_actions_setIsRequesting('startExport', {
            type: type,
            args: args
          }, false);

        case 8:
          _response$data = response.data, exportId = _response$data.export_id, message = _response$data.message;

          if (!exportId) {
            _context.next = 14;
            break;
          }

          _context.next = 12;
          return setExportId(type, args, exportId);

        case 12:
          _context.next = 15;
          break;

        case 14:
          throw new Error(message);

        case 15:
          return _context.abrupt("return", response.data);

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](2);
          _context.next = 22;
          return export_actions_setError('startExport', {
            type: type,
            args: args
          }, _context.t0.message);

        case 22:
          _context.next = 24;
          return export_actions_setIsRequesting('startExport', {
            type: type,
            args: args
          }, false);

        case 24:
          throw _context.t0;

        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, export_actions_marked, null, [[2, 18]]);
}
// CONCATENATED MODULE: ./packages/data/build-module/export/reducer.js


function export_reducer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function export_reducer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      export_reducer_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      export_reducer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * Internal dependencies
 */





var reducer_exportReducer = function exportReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    errors: {},
    requesting: {},
    exportMeta: {},
    exportIds: {}
  };

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      error = _ref.error,
      exportArgs = _ref.exportArgs,
      exportId = _ref.exportId,
      exportType = _ref.exportType,
      isRequesting = _ref.isRequesting,
      selector = _ref.selector,
      selectorArgs = _ref.selectorArgs,
      type = _ref.type;

  switch (type) {
    case export_action_types.SET_IS_REQUESTING:
      return export_reducer_objectSpread(export_reducer_objectSpread({}, state), {}, {
        requesting: export_reducer_objectSpread(export_reducer_objectSpread({}, state.requesting), {}, defineProperty_default()({}, selector, export_reducer_objectSpread(export_reducer_objectSpread({}, state.requesting[selector]), {}, defineProperty_default()({}, utils_hashExportArgs(selectorArgs), isRequesting))))
      });

    case export_action_types.SET_EXPORT_ID:
      return export_reducer_objectSpread(export_reducer_objectSpread({}, state), {}, {
        exportMeta: export_reducer_objectSpread(export_reducer_objectSpread({}, state.exportMeta), {}, defineProperty_default()({}, exportId, {
          exportType: exportType,
          exportArgs: exportArgs
        })),
        exportIds: export_reducer_objectSpread(export_reducer_objectSpread({}, state.exportIds), {}, defineProperty_default()({}, exportType, export_reducer_objectSpread(export_reducer_objectSpread({}, state.exportIds[exportType]), {}, defineProperty_default()({}, utils_hashExportArgs({
          type: exportType,
          args: exportArgs
        }), exportId))))
      });

    case export_action_types.SET_ERROR:
      return export_reducer_objectSpread(export_reducer_objectSpread({}, state), {}, {
        errors: export_reducer_objectSpread(export_reducer_objectSpread({}, state.errors), {}, defineProperty_default()({}, selector, export_reducer_objectSpread(export_reducer_objectSpread({}, state.errors[selector]), {}, defineProperty_default()({}, utils_hashExportArgs(selectorArgs), error))))
      });

    default:
      return state;
  }
};

/* harmony default export */ var export_reducer = (reducer_exportReducer);
// CONCATENATED MODULE: ./packages/data/build-module/export/index.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */






Object(external_this_wp_data_["registerStore"])(export_constants_STORE_NAME, {
  reducer: export_reducer,
  actions: export_actions_namespaceObject,
  controls: build_module_controls,
  selectors: export_selectors_namespaceObject
});
var EXPORT_STORE_NAME = export_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/import/constants.js
/**
 * Internal dependencies
 */
var import_constants_STORE_NAME = 'wc/admin/import';
// CONCATENATED MODULE: ./packages/data/build-module/import/selectors.js


function selectors_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function selectors_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      selectors_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      selectors_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var getImportStarted = function getImportStarted(state) {
  var activeImport = state.activeImport,
      lastImportStartTimestamp = state.lastImportStartTimestamp;
  return {
    activeImport: activeImport,
    lastImportStartTimestamp: lastImportStartTimestamp
  } || {};
};
var getFormSettings = function getFormSettings(state) {
  var period = state.period,
      skipPrevious = state.skipPrevious;
  return {
    period: period,
    skipPrevious: skipPrevious
  } || {};
};
var getImportStatus = function getImportStatus(state, query) {
  var stringifiedQuery = JSON.stringify(query);
  return state.importStatus[stringifiedQuery] || {};
};
var getImportTotals = function getImportTotals(state, query) {
  var importTotals = state.importTotals,
      lastImportStartTimestamp = state.lastImportStartTimestamp;
  var stringifiedQuery = JSON.stringify(query);
  return selectors_objectSpread(selectors_objectSpread({}, importTotals[stringifiedQuery]), {}, {
    lastImportStartTimestamp: lastImportStartTimestamp
  }) || {};
};
var getImportError = function getImportError(state, query) {
  var stringifiedQuery = JSON.stringify(query);
  return state.errors[stringifiedQuery] || false;
};
// CONCATENATED MODULE: ./packages/data/build-module/import/action-types.js
var import_action_types_TYPES = {
  SET_IMPORT_DATE: 'SET_IMPORT_DATE',
  SET_IMPORT_ERROR: 'SET_IMPORT_ERROR',
  SET_IMPORT_PERIOD: 'SET_IMPORT_PERIOD',
  SET_IMPORT_STARTED: 'SET_IMPORT_STARTED',
  SET_IMPORT_STATUS: 'SET_IMPORT_STATUS',
  SET_IMPORT_TOTALS: 'SET_IMPORT_TOTALS',
  SET_SKIP_IMPORTED: 'SET_SKIP_IMPORTED'
};
/* harmony default export */ var import_action_types = (import_action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/import/actions.js


var import_actions_marked = /*#__PURE__*/regenerator_default.a.mark(updateImportation);
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


function setImportStarted(activeImport) {
  return {
    type: import_action_types.SET_IMPORT_STARTED,
    activeImport: activeImport
  };
}
function setImportPeriod(date, dateModified) {
  if (!dateModified) {
    return {
      type: import_action_types.SET_IMPORT_PERIOD,
      date: date
    };
  }

  return {
    type: import_action_types.SET_IMPORT_DATE,
    date: date
  };
}
function setSkipPrevious(skipPrevious) {
  return {
    type: import_action_types.SET_SKIP_IMPORTED,
    skipPrevious: skipPrevious
  };
}
function setImportStatus(query, importStatus) {
  return {
    type: import_action_types.SET_IMPORT_STATUS,
    importStatus: importStatus,
    query: query
  };
}
function setImportTotals(query, importTotals) {
  return {
    type: import_action_types.SET_IMPORT_TOTALS,
    importTotals: importTotals,
    query: query
  };
}
function setImportError(query, error) {
  return {
    type: import_action_types.SET_IMPORT_ERROR,
    error: error,
    query: query
  };
}
function updateImportation(path) {
  var importStarted,
      response,
      _args = arguments;
  return regenerator_default.a.wrap(function updateImportation$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          importStarted = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
          _context.next = 3;
          return setImportStarted(importStarted);

        case 3:
          _context.prev = 3;
          _context.next = 6;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: path,
            method: 'POST'
          });

        case 6:
          response = _context.sent;
          return _context.abrupt("return", response);

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](3);
          _context.next = 14;
          return setImportError(path, _context.t0);

        case 14:
          throw _context.t0;

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, import_actions_marked, null, [[3, 10]]);
}
// CONCATENATED MODULE: ./packages/data/build-module/import/resolvers.js


var import_resolvers_marked = /*#__PURE__*/regenerator_default.a.mark(resolvers_getImportStatus),
    import_resolvers_marked2 = /*#__PURE__*/regenerator_default.a.mark(resolvers_getImportTotals);
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



function resolvers_getImportStatus(query) {
  var url, response;
  return regenerator_default.a.wrap(function getImportStatus$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          url = Object(external_this_wp_url_["addQueryArgs"])("".concat(NAMESPACE, "/reports/import/status"), Object(external_lodash_["omit"])(query, ['timestamp']));
          _context.next = 4;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: url
          });

        case 4:
          response = _context.sent;
          _context.next = 7;
          return setImportStatus(query, response);

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          _context.next = 13;
          return setImportError(query, _context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, import_resolvers_marked, null, [[0, 9]]);
}
function resolvers_getImportTotals(query) {
  var url, response;
  return regenerator_default.a.wrap(function getImportTotals$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          url = Object(external_this_wp_url_["addQueryArgs"])("".concat(NAMESPACE, "/reports/import/totals"), query);
          _context2.next = 4;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: url
          });

        case 4:
          response = _context2.sent;
          _context2.next = 7;
          return setImportTotals(query, response);

        case 7:
          _context2.next = 13;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 13;
          return setImportError(query, _context2.t0);

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, import_resolvers_marked2, null, [[0, 9]]);
}
// CONCATENATED MODULE: ./packages/data/build-module/import/reducer.js


function import_reducer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function import_reducer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      import_reducer_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      import_reducer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



var import_reducer_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    activeImport: false,
    importStatus: {},
    importTotals: {},
    errors: {},
    lastImportStartTimestamp: 0,
    period: {
      date: external_moment_default()().format(Object(external_this_wp_i18n_["__"])('MM/DD/YYYY', 'woocommerce-admin')),
      label: 'all'
    },
    skipPrevious: true
  };

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      query = _ref.query,
      importStatus = _ref.importStatus,
      importTotals = _ref.importTotals,
      activeImport = _ref.activeImport,
      date = _ref.date,
      error = _ref.error,
      skipPrevious = _ref.skipPrevious;

  switch (type) {
    case import_action_types.SET_IMPORT_STARTED:
      state = import_reducer_objectSpread(import_reducer_objectSpread({}, state), {}, {
        activeImport: activeImport,
        lastImportStartTimestamp: activeImport ? Date.now() : state.lastImportStartTimestamp
      });
      break;

    case import_action_types.SET_IMPORT_PERIOD:
      state = import_reducer_objectSpread(import_reducer_objectSpread({}, state), {}, {
        period: import_reducer_objectSpread(import_reducer_objectSpread({}, state.period), {}, {
          label: date
        }),
        activeImport: false
      });
      break;

    case import_action_types.SET_IMPORT_DATE:
      state = import_reducer_objectSpread(import_reducer_objectSpread({}, state), {}, {
        period: {
          date: date,
          label: 'custom'
        },
        activeImport: false
      });
      break;

    case import_action_types.SET_SKIP_IMPORTED:
      state = import_reducer_objectSpread(import_reducer_objectSpread({}, state), {}, {
        skipPrevious: skipPrevious,
        activeImport: false
      });
      break;

    case import_action_types.SET_IMPORT_STATUS:
      state = import_reducer_objectSpread(import_reducer_objectSpread({}, state), {}, {
        importStatus: import_reducer_objectSpread(import_reducer_objectSpread({}, state.importStatus), {}, defineProperty_default()({}, JSON.stringify(query), importStatus)),
        errors: import_reducer_objectSpread(import_reducer_objectSpread({}, state.errors), {}, defineProperty_default()({}, JSON.stringify(query), false))
      });
      break;

    case import_action_types.SET_IMPORT_TOTALS:
      state = import_reducer_objectSpread(import_reducer_objectSpread({}, state), {}, {
        importTotals: import_reducer_objectSpread(import_reducer_objectSpread({}, state.importTotals), {}, defineProperty_default()({}, JSON.stringify(query), importTotals))
      });
      break;

    case import_action_types.SET_IMPORT_ERROR:
      state = import_reducer_objectSpread(import_reducer_objectSpread({}, state), {}, {
        errors: import_reducer_objectSpread(import_reducer_objectSpread({}, state.errors), {}, defineProperty_default()({}, JSON.stringify(query), error))
      });
      break;
  }

  return state;
};

/* harmony default export */ var import_reducer = (import_reducer_reducer);
// CONCATENATED MODULE: ./packages/data/build-module/import/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






Object(external_this_wp_data_["registerStore"])(import_constants_STORE_NAME, {
  reducer: import_reducer,
  actions: import_actions_namespaceObject,
  controls: external_this_wp_dataControls_["controls"],
  selectors: import_selectors_namespaceObject,
  resolvers: import_resolvers_namespaceObject
});
var IMPORT_STORE_NAME = import_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/index.js

























/***/ }),

/***/ 5:
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(37);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(67);


/***/ }),

/***/ 96:
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ })

/******/ });