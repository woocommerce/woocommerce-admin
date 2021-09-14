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
/******/ 	return __webpack_require__(__webpack_require__.s = 460);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["dataControls"]; }());

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

(function() { module.exports = window["wc"]["navigation"]; }());

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["url"]; }());

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

(function() { module.exports = window["wc"]["date"]; }());

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ 249:
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

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(447),
      utf8 = __webpack_require__(249).utf8,
      isBuffer = __webpack_require__(448),
      bin = __webpack_require__(249).bin,

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

/***/ 3:
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["hooks"]; }());

/***/ }),

/***/ 446:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["coreData"]; }());

/***/ }),

/***/ 447:
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

/***/ 448:
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

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "SETTINGS_STORE_NAME", function() { return /* reexport */ SETTINGS_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "withSettingsHydration", function() { return /* reexport */ withSettingsHydration; });
__webpack_require__.d(__webpack_exports__, "useSettings", function() { return /* reexport */ useSettings; });
__webpack_require__.d(__webpack_exports__, "PLUGINS_STORE_NAME", function() { return /* reexport */ PLUGINS_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "pluginNames", function() { return /* reexport */ pluginNames; });
__webpack_require__.d(__webpack_exports__, "withPluginsHydration", function() { return /* reexport */ withPluginsHydration; });
__webpack_require__.d(__webpack_exports__, "ONBOARDING_STORE_NAME", function() { return /* reexport */ ONBOARDING_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "withOnboardingHydration", function() { return /* reexport */ withOnboardingHydration; });
__webpack_require__.d(__webpack_exports__, "USER_STORE_NAME", function() { return /* reexport */ USER_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "withCurrentUserHydration", function() { return /* reexport */ withCurrentUserHydration; });
__webpack_require__.d(__webpack_exports__, "useUser", function() { return /* reexport */ useUser; });
__webpack_require__.d(__webpack_exports__, "useUserPreferences", function() { return /* reexport */ useUserPreferences; });
__webpack_require__.d(__webpack_exports__, "OPTIONS_STORE_NAME", function() { return /* reexport */ OPTIONS_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "withOptionsHydration", function() { return /* reexport */ withOptionsHydration; });
__webpack_require__.d(__webpack_exports__, "useOptionsHydration", function() { return /* reexport */ useOptionsHydration; });
__webpack_require__.d(__webpack_exports__, "REVIEWS_STORE_NAME", function() { return /* reexport */ REVIEWS_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "NOTES_STORE_NAME", function() { return /* reexport */ NOTES_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "REPORTS_STORE_NAME", function() { return /* reexport */ REPORTS_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "ITEMS_STORE_NAME", function() { return /* reexport */ ITEMS_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "getLeaderboard", function() { return /* reexport */ getLeaderboard; });
__webpack_require__.d(__webpack_exports__, "searchItemsByString", function() { return /* reexport */ searchItemsByString; });
__webpack_require__.d(__webpack_exports__, "NAVIGATION_STORE_NAME", function() { return /* reexport */ NAVIGATION_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "withNavigationHydration", function() { return /* reexport */ withNavigationHydration; });
__webpack_require__.d(__webpack_exports__, "PAYMENT_GATEWAYS_STORE_NAME", function() { return /* reexport */ PAYMENT_GATEWAYS_STORE_NAME; });
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
__webpack_require__.d(__webpack_exports__, "getFreeExtensions", function() { return /* reexport */ getFreeExtensions; });
__webpack_require__.d(__webpack_exports__, "getProfileItems", function() { return /* reexport */ getProfileItems; });
__webpack_require__.d(__webpack_exports__, "getTasksStatus", function() { return /* reexport */ getTasksStatus; });
__webpack_require__.d(__webpack_exports__, "getPaymentGatewaySuggestions", function() { return /* reexport */ getPaymentGatewaySuggestions; });
__webpack_require__.d(__webpack_exports__, "getOnboardingError", function() { return /* reexport */ getOnboardingError; });
__webpack_require__.d(__webpack_exports__, "isOnboardingRequesting", function() { return /* reexport */ isOnboardingRequesting; });

// NAMESPACE OBJECT: ./packages/data/build-module/settings/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getSettingsGroupNames", function() { return getSettingsGroupNames; });
__webpack_require__.d(selectors_namespaceObject, "getSettings", function() { return getSettings; });
__webpack_require__.d(selectors_namespaceObject, "getDirtyKeys", function() { return getDirtyKeys; });
__webpack_require__.d(selectors_namespaceObject, "getIsDirty", function() { return selectors_getIsDirty; });
__webpack_require__.d(selectors_namespaceObject, "getSettingsForGroup", function() { return selectors_getSettingsForGroup; });
__webpack_require__.d(selectors_namespaceObject, "isUpdateSettingsRequesting", function() { return selectors_isUpdateSettingsRequesting; });
__webpack_require__.d(selectors_namespaceObject, "getSetting", function() { return getSetting; });
__webpack_require__.d(selectors_namespaceObject, "getLastSettingsErrorForGroup", function() { return selectors_getLastSettingsErrorForGroup; });
__webpack_require__.d(selectors_namespaceObject, "getSettingsError", function() { return getSettingsError; });

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
__webpack_require__.d(plugins_selectors_namespaceObject, "getRecommendedPlugins", function() { return getRecommendedPlugins; });

// NAMESPACE OBJECT: ./packages/data/build-module/plugins/actions.js
var plugins_actions_namespaceObject = {};
__webpack_require__.r(plugins_actions_namespaceObject);
__webpack_require__.d(plugins_actions_namespaceObject, "formatErrors", function() { return formatErrors; });
__webpack_require__.d(plugins_actions_namespaceObject, "updateActivePlugins", function() { return actions_updateActivePlugins; });
__webpack_require__.d(plugins_actions_namespaceObject, "updateInstalledPlugins", function() { return actions_updateInstalledPlugins; });
__webpack_require__.d(plugins_actions_namespaceObject, "setIsRequesting", function() { return actions_setIsRequesting; });
__webpack_require__.d(plugins_actions_namespaceObject, "setError", function() { return setError; });
__webpack_require__.d(plugins_actions_namespaceObject, "updateIsJetpackConnected", function() { return actions_updateIsJetpackConnected; });
__webpack_require__.d(plugins_actions_namespaceObject, "updateJetpackConnectUrl", function() { return updateJetpackConnectUrl; });
__webpack_require__.d(plugins_actions_namespaceObject, "installPlugins", function() { return installPlugins; });
__webpack_require__.d(plugins_actions_namespaceObject, "activatePlugins", function() { return activatePlugins; });
__webpack_require__.d(plugins_actions_namespaceObject, "installAndActivatePlugins", function() { return installAndActivatePlugins; });
__webpack_require__.d(plugins_actions_namespaceObject, "createErrorNotice", function() { return createErrorNotice; });
__webpack_require__.d(plugins_actions_namespaceObject, "connectToJetpack", function() { return connectToJetpack; });
__webpack_require__.d(plugins_actions_namespaceObject, "installJetpackAndConnect", function() { return installJetpackAndConnect; });
__webpack_require__.d(plugins_actions_namespaceObject, "connectToJetpackWithFailureRedirect", function() { return connectToJetpackWithFailureRedirect; });
__webpack_require__.d(plugins_actions_namespaceObject, "setPaypalOnboardingStatus", function() { return setPaypalOnboardingStatus; });
__webpack_require__.d(plugins_actions_namespaceObject, "setRecommendedPlugins", function() { return setRecommendedPlugins; });

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
__webpack_require__.d(plugins_resolvers_namespaceObject, "getRecommendedPlugins", function() { return resolvers_getRecommendedPlugins; });

// NAMESPACE OBJECT: ./packages/data/build-module/onboarding/selectors.js
var onboarding_selectors_namespaceObject = {};
__webpack_require__.r(onboarding_selectors_namespaceObject);
__webpack_require__.d(onboarding_selectors_namespaceObject, "getFreeExtensions", function() { return getFreeExtensions; });
__webpack_require__.d(onboarding_selectors_namespaceObject, "getProfileItems", function() { return getProfileItems; });
__webpack_require__.d(onboarding_selectors_namespaceObject, "getTasksStatus", function() { return getTasksStatus; });
__webpack_require__.d(onboarding_selectors_namespaceObject, "getPaymentGatewaySuggestions", function() { return getPaymentGatewaySuggestions; });
__webpack_require__.d(onboarding_selectors_namespaceObject, "getOnboardingError", function() { return getOnboardingError; });
__webpack_require__.d(onboarding_selectors_namespaceObject, "isOnboardingRequesting", function() { return isOnboardingRequesting; });

// NAMESPACE OBJECT: ./packages/data/build-module/onboarding/actions.js
var onboarding_actions_namespaceObject = {};
__webpack_require__.r(onboarding_actions_namespaceObject);
__webpack_require__.d(onboarding_actions_namespaceObject, "getFreeExtensionsError", function() { return getFreeExtensionsError; });
__webpack_require__.d(onboarding_actions_namespaceObject, "getFreeExtensionsSuccess", function() { return getFreeExtensionsSuccess; });
__webpack_require__.d(onboarding_actions_namespaceObject, "setError", function() { return actions_setError; });
__webpack_require__.d(onboarding_actions_namespaceObject, "setIsRequesting", function() { return onboarding_actions_setIsRequesting; });
__webpack_require__.d(onboarding_actions_namespaceObject, "setProfileItems", function() { return actions_setProfileItems; });
__webpack_require__.d(onboarding_actions_namespaceObject, "setTasksStatus", function() { return actions_setTasksStatus; });
__webpack_require__.d(onboarding_actions_namespaceObject, "setPaymentMethods", function() { return setPaymentMethods; });
__webpack_require__.d(onboarding_actions_namespaceObject, "updateProfileItems", function() { return updateProfileItems; });

// NAMESPACE OBJECT: ./packages/data/build-module/onboarding/resolvers.js
var onboarding_resolvers_namespaceObject = {};
__webpack_require__.r(onboarding_resolvers_namespaceObject);
__webpack_require__.d(onboarding_resolvers_namespaceObject, "getProfileItems", function() { return resolvers_getProfileItems; });
__webpack_require__.d(onboarding_resolvers_namespaceObject, "getTasksStatus", function() { return resolvers_getTasksStatus; });
__webpack_require__.d(onboarding_resolvers_namespaceObject, "getPaymentGatewaySuggestions", function() { return resolvers_getPaymentGatewaySuggestions; });
__webpack_require__.d(onboarding_resolvers_namespaceObject, "getFreeExtensions", function() { return resolvers_getFreeExtensions; });

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
__webpack_require__.d(items_selectors_namespaceObject, "getItemsTotalCount", function() { return getItemsTotalCount; });
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
__webpack_require__.d(navigation_selectors_namespaceObject, "getMenuItems", function() { return getMenuItems; });
__webpack_require__.d(navigation_selectors_namespaceObject, "getFavorites", function() { return getFavorites; });
__webpack_require__.d(navigation_selectors_namespaceObject, "isNavigationRequesting", function() { return isNavigationRequesting; });
__webpack_require__.d(navigation_selectors_namespaceObject, "getPersistedQuery", function() { return getPersistedQuery; });

// NAMESPACE OBJECT: ./packages/data/build-module/navigation/actions.js
var navigation_actions_namespaceObject = {};
__webpack_require__.r(navigation_actions_namespaceObject);
__webpack_require__.d(navigation_actions_namespaceObject, "setMenuItems", function() { return actions_setMenuItems; });
__webpack_require__.d(navigation_actions_namespaceObject, "addMenuItems", function() { return addMenuItems; });
__webpack_require__.d(navigation_actions_namespaceObject, "getFavoritesFailure", function() { return getFavoritesFailure; });
__webpack_require__.d(navigation_actions_namespaceObject, "getFavoritesRequest", function() { return getFavoritesRequest; });
__webpack_require__.d(navigation_actions_namespaceObject, "getFavoritesSuccess", function() { return getFavoritesSuccess; });
__webpack_require__.d(navigation_actions_namespaceObject, "addFavoriteRequest", function() { return addFavoriteRequest; });
__webpack_require__.d(navigation_actions_namespaceObject, "addFavoriteFailure", function() { return addFavoriteFailure; });
__webpack_require__.d(navigation_actions_namespaceObject, "addFavoriteSuccess", function() { return addFavoriteSuccess; });
__webpack_require__.d(navigation_actions_namespaceObject, "removeFavoriteRequest", function() { return removeFavoriteRequest; });
__webpack_require__.d(navigation_actions_namespaceObject, "removeFavoriteFailure", function() { return removeFavoriteFailure; });
__webpack_require__.d(navigation_actions_namespaceObject, "removeFavoriteSuccess", function() { return removeFavoriteSuccess; });
__webpack_require__.d(navigation_actions_namespaceObject, "onLoad", function() { return actions_onLoad; });
__webpack_require__.d(navigation_actions_namespaceObject, "onHistoryChange", function() { return actions_onHistoryChange; });
__webpack_require__.d(navigation_actions_namespaceObject, "addFavorite", function() { return addFavorite; });
__webpack_require__.d(navigation_actions_namespaceObject, "removeFavorite", function() { return removeFavorite; });

// NAMESPACE OBJECT: ./packages/data/build-module/navigation/resolvers.js
var navigation_resolvers_namespaceObject = {};
__webpack_require__.r(navigation_resolvers_namespaceObject);
__webpack_require__.d(navigation_resolvers_namespaceObject, "getFavorites", function() { return resolvers_getFavorites; });

// NAMESPACE OBJECT: ./packages/data/build-module/payment-gateways/actions.js
var payment_gateways_actions_namespaceObject = {};
__webpack_require__.r(payment_gateways_actions_namespaceObject);
__webpack_require__.d(payment_gateways_actions_namespaceObject, "getPaymentGatewaysRequest", function() { return getPaymentGatewaysRequest; });
__webpack_require__.d(payment_gateways_actions_namespaceObject, "getPaymentGatewaysSuccess", function() { return getPaymentGatewaysSuccess; });
__webpack_require__.d(payment_gateways_actions_namespaceObject, "getPaymentGatewaysError", function() { return getPaymentGatewaysError; });
__webpack_require__.d(payment_gateways_actions_namespaceObject, "getPaymentGatewayRequest", function() { return getPaymentGatewayRequest; });
__webpack_require__.d(payment_gateways_actions_namespaceObject, "getPaymentGatewayError", function() { return getPaymentGatewayError; });
__webpack_require__.d(payment_gateways_actions_namespaceObject, "getPaymentGatewaySuccess", function() { return getPaymentGatewaySuccess; });
__webpack_require__.d(payment_gateways_actions_namespaceObject, "updatePaymentGatewaySuccess", function() { return updatePaymentGatewaySuccess; });
__webpack_require__.d(payment_gateways_actions_namespaceObject, "updatePaymentGatewayRequest", function() { return updatePaymentGatewayRequest; });
__webpack_require__.d(payment_gateways_actions_namespaceObject, "updatePaymentGatewayError", function() { return updatePaymentGatewayError; });
__webpack_require__.d(payment_gateways_actions_namespaceObject, "updatePaymentGateway", function() { return updatePaymentGateway; });

// NAMESPACE OBJECT: ./packages/data/build-module/payment-gateways/resolvers.js
var payment_gateways_resolvers_namespaceObject = {};
__webpack_require__.r(payment_gateways_resolvers_namespaceObject);
__webpack_require__.d(payment_gateways_resolvers_namespaceObject, "getPaymentGateways", function() { return getPaymentGateways; });
__webpack_require__.d(payment_gateways_resolvers_namespaceObject, "getPaymentGateway", function() { return getPaymentGateway; });

// NAMESPACE OBJECT: ./packages/data/build-module/payment-gateways/selectors.js
var payment_gateways_selectors_namespaceObject = {};
__webpack_require__.r(payment_gateways_selectors_namespaceObject);
__webpack_require__.d(payment_gateways_selectors_namespaceObject, "getPaymentGateway", function() { return selectors_getPaymentGateway; });
__webpack_require__.d(payment_gateways_selectors_namespaceObject, "getPaymentGateways", function() { return selectors_getPaymentGateways; });
__webpack_require__.d(payment_gateways_selectors_namespaceObject, "getPaymentGatewayError", function() { return selectors_getPaymentGatewayError; });
__webpack_require__.d(payment_gateways_selectors_namespaceObject, "isPaymentGatewayUpdating", function() { return isPaymentGatewayUpdating; });

// NAMESPACE OBJECT: ./packages/data/build-module/export/selectors.js
var export_selectors_namespaceObject = {};
__webpack_require__.r(export_selectors_namespaceObject);
__webpack_require__.d(export_selectors_namespaceObject, "isExportRequesting", function() { return isExportRequesting; });
__webpack_require__.d(export_selectors_namespaceObject, "getExportId", function() { return getExportId; });
__webpack_require__.d(export_selectors_namespaceObject, "getError", function() { return getError; });

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

// EXTERNAL MODULE: external ["wp","coreData"]
var external_wp_coreData_ = __webpack_require__(446);

// CONCATENATED MODULE: ./packages/data/build-module/types/wp-data.js

// CONCATENATED MODULE: ./packages/data/build-module/types/rule-processor.js

// CONCATENATED MODULE: ./packages/data/build-module/types/index.js


// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(7);

// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__(10);

// CONCATENATED MODULE: ./packages/data/build-module/settings/constants.js
const STORE_NAME = 'wc/admin/settings';
// CONCATENATED MODULE: ./packages/data/build-module/utils.js
function getResourceName(prefix, identifier) {
  const identifierString = JSON.stringify(identifier, Object.keys(identifier).sort());
  return `${prefix}:${identifierString}`;
}
function getResourcePrefix(resourceName) {
  const hasPrefixIndex = resourceName.indexOf(':');
  return hasPrefixIndex < 0 ? resourceName : resourceName.substring(0, hasPrefixIndex);
}
function isResourcePrefix(resourceName, prefix) {
  const resourcePrefix = getResourcePrefix(resourceName);
  return resourcePrefix === prefix;
}
function getResourceIdentifier(resourceName) {
  const identifierString = resourceName.substring(resourceName.indexOf(':') + 1);
  return JSON.parse(identifierString);
}
// CONCATENATED MODULE: ./packages/data/build-module/settings/selectors.js
/**
 * Internal dependencies
 */

const getSettingsGroupNames = state => {
  const groupNames = new Set(Object.keys(state).map(resourceName => {
    return getResourcePrefix(resourceName);
  }));
  return [...groupNames];
};
const getSettings = (state, group) => {
  const settings = {};
  const settingIds = state[group] && state[group].data || [];

  if (settingIds.length === 0) {
    return settings;
  }

  settingIds.forEach(id => {
    settings[id] = state[getResourceName(group, id)].data;
  });
  return settings;
};
const getDirtyKeys = (state, group) => {
  return state[group].dirty || [];
};
const selectors_getIsDirty = (state, group, keys = []) => {
  const dirtyMap = getDirtyKeys(state, group); // if empty array bail

  if (dirtyMap.length === 0) {
    return false;
  } // if at least one of the keys is in the dirty map then the state is dirty
  // meaning it hasn't been persisted.


  return keys.some(key => dirtyMap.includes(key));
};
const selectors_getSettingsForGroup = (state, group, keys) => {
  const allSettings = getSettings(state, group);
  return keys.reduce((accumulator, key) => {
    accumulator[key] = allSettings[key] || {};
    return accumulator;
  }, {});
};
const selectors_isUpdateSettingsRequesting = (state, group) => {
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

function getSetting(state, group, name, fallback = false, filter = val => val) {
  const resourceName = getResourceName(group, name);
  const value = state[resourceName] && state[resourceName].data || fallback;
  return filter(value, fallback);
}
const selectors_getLastSettingsErrorForGroup = (state, group) => {
  const settingsIds = state[group].data;

  if (settingsIds.length === 0) {
    return state[group].error;
  }

  return [...settingsIds].pop().error;
};
const getSettingsError = (state, group, id) => {
  if (!id) {
    return state[group] && state[group].error || false;
  }

  return state[getResourceName(group, id)].error || false;
};
// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);

// CONCATENATED MODULE: ./packages/data/build-module/constants.js
const JETPACK_NAMESPACE = '/jetpack/v4';
const NAMESPACE = '/wc-analytics';
const WC_ADMIN_NAMESPACE = '/wc-admin';
const WCS_NAMESPACE = '/wc/v1'; // WCS endpoints like Stripe are not avaiable on later /wc versions
// WordPress & WooCommerce both set a hard limit of 100 for the per_page parameter

const MAX_PER_PAGE = 100;
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const MONTH = 365 * DAY / 12;
const DEFAULT_REQUIREMENT = {
  timeout: 1 * MINUTE,
  freshness: 30 * MINUTE
};
const DEFAULT_ACTIONABLE_STATUSES = ['processing', 'on-hold'];
const QUERY_DEFAULTS = {
  pageSize: 25,
  period: 'month',
  compare: 'previous_year',
  noteTypes: ['info', 'marketing', 'survey', 'warning']
};
// CONCATENATED MODULE: ./packages/data/build-module/settings/action-types.js
const TYPES = {
  UPDATE_SETTINGS_FOR_GROUP: 'UPDATE_SETTINGS_FOR_GROUP',
  UPDATE_ERROR_FOR_GROUP: 'UPDATE_ERROR_FOR_GROUP',
  CLEAR_SETTINGS: 'CLEAR_SETTINGS',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING',
  CLEAR_IS_DIRTY: 'CLEAR_IS_DIRTY'
};
/* harmony default export */ var action_types = (TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/settings/actions.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



 // Can be removed in WP 5.9, wp.data is supported in >5.7.

const resolveSelect = external_wp_data_["controls"] && external_wp_data_["controls"].resolveSelect ? external_wp_data_["controls"].resolveSelect : external_wp_dataControls_["select"];
function actions_updateSettingsForGroup(group, data, time = new Date()) {
  return {
    type: action_types.UPDATE_SETTINGS_FOR_GROUP,
    group,
    data,
    time
  };
}
function updateErrorForGroup(group, data, error, time = new Date()) {
  return {
    type: action_types.UPDATE_ERROR_FOR_GROUP,
    group,
    data,
    error,
    time
  };
}
function setIsRequesting(group, isRequesting) {
  return {
    type: action_types.SET_IS_REQUESTING,
    group,
    isRequesting
  };
}
function actions_clearIsDirty(group) {
  return {
    type: action_types.CLEAR_IS_DIRTY,
    group
  };
} // allows updating and persisting immediately in one action.

function* actions_updateAndPersistSettingsForGroup(group, data) {
  yield actions_updateSettingsForGroup(group, data);
  yield* actions_persistSettingsForGroup(group);
} // this would replace setSettingsForGroup

function* actions_persistSettingsForGroup(group) {
  // first dispatch the is persisting action
  yield setIsRequesting(group, true); // get all dirty keys with select control

  const dirtyKeys = yield resolveSelect(STORE_NAME, 'getDirtyKeys', group); // if there is nothing dirty, bail

  if (dirtyKeys.length === 0) {
    yield setIsRequesting(group, false);
    return;
  } // get data slice for keys


  const dirtyData = yield resolveSelect(STORE_NAME, 'getSettingsForGroup', group, dirtyKeys);
  const url = `${NAMESPACE}/settings/${group}/batch`;
  const update = dirtyKeys.reduce((updates, key) => {
    const u = Object.keys(dirtyData[key]).map(k => {
      return {
        id: k,
        value: dirtyData[key][k]
      };
    });
    return Object(external_lodash_["concat"])(updates, u);
  }, []);

  try {
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'POST',
      data: {
        update
      }
    });
    yield setIsRequesting(group, false);

    if (!results) {
      throw new Error(Object(external_wp_i18n_["__"])('There was a problem updating your settings.', 'woocommerce-admin'));
    } // remove dirtyKeys from map - note we're only doing this if there is no error.


    yield actions_clearIsDirty(group);
  } catch (e) {
    yield updateErrorForGroup(group, null, e);
    yield setIsRequesting(group, false);
    throw e;
  }
}
function clearSettings() {
  return {
    type: action_types.CLEAR_SETTINGS
  };
}
// CONCATENATED MODULE: ./packages/data/build-module/settings/resolvers.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



 // Can be removed in WP 5.9.

const resolvers_dispatch = external_wp_data_["controls"] && external_wp_data_["controls"].dispatch ? external_wp_data_["controls"].dispatch : external_wp_dataControls_["dispatch"];

function settingsToSettingsResource(settings) {
  return settings.reduce((resource, setting) => {
    resource[setting.id] = setting.value;
    return resource;
  }, {});
}

function* resolvers_getSettings(group) {
  yield resolvers_dispatch(STORE_NAME, 'setIsRequesting', group, true);

  try {
    const url = NAMESPACE + '/settings/' + group;
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'GET'
    });
    const resource = settingsToSettingsResource(results);
    return actions_updateSettingsForGroup(group, {
      [group]: resource
    });
  } catch (error) {
    return updateErrorForGroup(group, null, error.message);
  }
}
function* resolvers_getSettingsForGroup(group) {
  return resolvers_getSettings(group);
}
// CONCATENATED MODULE: ./packages/data/build-module/settings/reducer.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




const updateGroupDataInNewState = (newState, {
  group,
  groupIds,
  data,
  time,
  error
}) => {
  groupIds.forEach(id => {
    newState[getResourceName(group, id)] = {
      data: data[id],
      lastReceived: time,
      error
    };
  });
  return newState;
};

const receiveSettings = (state = {}, {
  type,
  group,
  data,
  error,
  time,
  isRequesting
}) => {
  const newState = {};

  switch (type) {
    case action_types.SET_IS_REQUESTING:
      state = { ...state,
        [group]: { ...state[group],
          isRequesting
        }
      };
      break;

    case action_types.CLEAR_IS_DIRTY:
      state = { ...state,
        [group]: { ...state[group],
          dirty: []
        }
      };
      break;

    case action_types.UPDATE_SETTINGS_FOR_GROUP:
    case action_types.UPDATE_ERROR_FOR_GROUP:
      const groupIds = data ? Object.keys(data) : [];

      if (data === null) {
        state = { ...state,
          [group]: {
            data: state[group] ? state[group].data : [],
            error,
            lastReceived: time
          }
        };
      } else {
        state = { ...state,
          [group]: {
            data: state[group] && state[group].data ? [...state[group].data, ...groupIds] : groupIds,
            error,
            lastReceived: time,
            isRequesting: false,
            dirty: state[group] && state[group].dirty ? Object(external_lodash_["union"])(state[group].dirty, groupIds) : groupIds
          },
          ...updateGroupDataInNewState(newState, {
            group,
            groupIds,
            data,
            time,
            error
          })
        };
      }

      break;

    case action_types.CLEAR_SETTINGS:
      state = {};
  }

  return state;
};

/* harmony default export */ var reducer = (receiveSettings);
// CONCATENATED MODULE: ./packages/data/build-module/settings/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






Object(external_wp_data_["registerStore"])(STORE_NAME, {
  reducer: reducer,
  actions: actions_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  selectors: selectors_namespaceObject,
  resolvers: resolvers_namespaceObject
});
const SETTINGS_STORE_NAME = STORE_NAME;
// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(13);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/data/build-module/settings/with-settings-hydration.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const withSettingsHydration = (group, settings) => Object(external_wp_compose_["createHigherOrderComponent"])(OriginalComponent => props => {
  const settingsRef = Object(external_wp_element_["useRef"])(settings);
  Object(external_wp_data_["useSelect"])((select, registry) => {
    if (!settingsRef.current) {
      return;
    }

    const {
      isResolving,
      hasFinishedResolution
    } = select(STORE_NAME);
    const {
      startResolution,
      finishResolution,
      updateSettingsForGroup,
      clearIsDirty
    } = registry.dispatch(STORE_NAME);

    if (!isResolving('getSettings', [group]) && !hasFinishedResolution('getSettings', [group])) {
      startResolution('getSettings', [group]);
      updateSettingsForGroup(group, settingsRef.current);
      clearIsDirty(group);
      finishResolution('getSettings', [group]);
    }
  }, []);
  return Object(external_wp_element_["createElement"])(OriginalComponent, Object.assign({}, props));
}, 'withSettingsHydration');
// CONCATENATED MODULE: ./packages/data/build-module/settings/use-settings.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


const useSettings = (group, settingsKeys = []) => {
  const {
    requestedSettings,
    settingsError,
    isRequesting,
    isDirty
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getLastSettingsErrorForGroup,
      getSettingsForGroup,
      getIsDirty,
      isUpdateSettingsRequesting
    } = select(STORE_NAME);
    return {
      requestedSettings: getSettingsForGroup(group, settingsKeys),
      settingsError: Boolean(getLastSettingsErrorForGroup(group)),
      isRequesting: isUpdateSettingsRequesting(group),
      isDirty: getIsDirty(group, settingsKeys)
    };
  }, [group, ...settingsKeys.sort()]);
  const {
    persistSettingsForGroup,
    updateAndPersistSettingsForGroup,
    updateSettingsForGroup
  } = Object(external_wp_data_["useDispatch"])(STORE_NAME);
  const updateSettings = Object(external_wp_element_["useCallback"])((name, data) => {
    updateSettingsForGroup(group, {
      [name]: data
    });
  }, [group]);
  const persistSettings = Object(external_wp_element_["useCallback"])(() => {
    // this action would simply persist all settings marked as dirty in the
    // store state and then remove the dirty record in the isDirtyMap
    persistSettingsForGroup(group);
  }, [group]);
  const updateAndPersistSettings = Object(external_wp_element_["useCallback"])((name, data) => {
    updateAndPersistSettingsForGroup(group, {
      [name]: data
    });
  }, [group]);
  return {
    settingsError,
    isRequesting,
    isDirty,
    ...requestedSettings,
    persistSettings,
    updateAndPersistSettings,
    updateSettings
  };
};
// CONCATENATED MODULE: ./packages/data/build-module/plugins/constants.js
/**
 * External dependencies
 */

const constants_STORE_NAME = 'wc/admin/plugins';
const PAYPAL_NAMESPACE = '/wc-paypal/v1';
/**
 * Plugin slugs and names as key/value pairs.
 */

const pluginNames = {
  'facebook-for-woocommerce': Object(external_wp_i18n_["__"])('Facebook for WooCommerce', 'woocommerce-admin'),
  jetpack: Object(external_wp_i18n_["__"])('Jetpack', 'woocommerce-admin'),
  'klarna-checkout-for-woocommerce': Object(external_wp_i18n_["__"])('Klarna Checkout for WooCommerce', 'woocommerce-admin'),
  'klarna-payments-for-woocommerce': Object(external_wp_i18n_["__"])('Klarna Payments for WooCommerce', 'woocommerce-admin'),
  'mailchimp-for-woocommerce': Object(external_wp_i18n_["__"])('Mailchimp for WooCommerce', 'woocommerce-admin'),
  'creative-mail-by-constant-contact': Object(external_wp_i18n_["__"])('Creative Mail for WooCommerce', 'woocommerce-admin'),
  'woocommerce-gateway-paypal-express-checkout': Object(external_wp_i18n_["__"])('WooCommerce PayPal', 'woocommerce-admin'),
  'woocommerce-gateway-stripe': Object(external_wp_i18n_["__"])('WooCommerce Stripe', 'woocommerce-admin'),
  'woocommerce-payfast-gateway': Object(external_wp_i18n_["__"])('WooCommerce PayFast', 'woocommerce-admin'),
  'woocommerce-payments': Object(external_wp_i18n_["__"])('WooCommerce Payments', 'woocommerce-admin'),
  'woocommerce-services': Object(external_wp_i18n_["__"])('WooCommerce Shipping & Tax', 'woocommerce-admin'),
  'woocommerce-services:shipping': Object(external_wp_i18n_["__"])('WooCommerce Shipping & Tax', 'woocommerce-admin'),
  'woocommerce-services:tax': Object(external_wp_i18n_["__"])('WooCommerce Shipping & Tax', 'woocommerce-admin'),
  'woocommerce-shipstation-integration': Object(external_wp_i18n_["__"])('WooCommerce ShipStation Gateway', 'woocommerce-admin'),
  'woocommerce-mercadopago': Object(external_wp_i18n_["__"])('Mercado Pago payments for WooCommerce', 'woocommerce-admin'),
  'google-listings-and-ads': Object(external_wp_i18n_["__"])('Google Listings and Ads', 'woocommerce-admin'),
  'woo-razorpay': Object(external_wp_i18n_["__"])('Razorpay', 'woocommerce-admin'),
  mailpoet: Object(external_wp_i18n_["__"])('MailPoet', 'woocommerce-admin')
};
// CONCATENATED MODULE: ./packages/data/build-module/plugins/selectors.js
const getActivePlugins = state => {
  return state.active || [];
};
const getInstalledPlugins = state => {
  return state.installed || [];
};
const isPluginsRequesting = (state, selector) => {
  return state.requesting[selector] || false;
};
const getPluginsError = (state, selector) => {
  return state.errors[selector] || false;
};
const isJetpackConnected = state => state.jetpackConnection;
const getJetpackConnectUrl = (state, query) => {
  return state.jetpackConnectUrls[query.redirect_url];
};
const getPluginInstallState = (state, plugin) => {
  if (state.active.includes(plugin)) {
    return 'activated';
  } else if (state.installed.includes(plugin)) {
    return 'installed';
  }

  return 'unavailable';
};
const getPaypalOnboardingStatus = state => state.paypalOnboardingStatus;
const getRecommendedPlugins = (state, type) => {
  return state.recommended[type];
};
// CONCATENATED MODULE: ./packages/data/build-module/plugins/action-types.js
var ACTION_TYPES;

(function (ACTION_TYPES) {
  ACTION_TYPES["UPDATE_ACTIVE_PLUGINS"] = "UPDATE_ACTIVE_PLUGINS";
  ACTION_TYPES["UPDATE_INSTALLED_PLUGINS"] = "UPDATE_INSTALLED_PLUGINS";
  ACTION_TYPES["SET_IS_REQUESTING"] = "SET_IS_REQUESTING";
  ACTION_TYPES["SET_ERROR"] = "SET_ERROR";
  ACTION_TYPES["UPDATE_JETPACK_CONNECTION"] = "UPDATE_JETPACK_CONNECTION";
  ACTION_TYPES["UPDATE_JETPACK_CONNECT_URL"] = "UPDATE_JETPACK_CONNECT_URL";
  ACTION_TYPES["SET_PAYPAL_ONBOARDING_STATUS"] = "SET_PAYPAL_ONBOARDING_STATUS";
  ACTION_TYPES["SET_RECOMMENDED_PLUGINS"] = "SET_RECOMMENDED_PLUGINS";
})(ACTION_TYPES || (ACTION_TYPES = {}));
// CONCATENATED MODULE: ./packages/data/build-module/plugins/actions.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



 // Can be removed in WP 5.9, wp.data is supported in >5.7.

const actions_dispatch = external_wp_data_["controls"] && external_wp_data_["controls"].dispatch ? external_wp_data_["controls"].dispatch : external_wp_dataControls_["dispatch"];
const actions_resolveSelect = external_wp_data_["controls"] && external_wp_data_["controls"].resolveSelect ? external_wp_data_["controls"].resolveSelect : external_wp_dataControls_["select"];

function isWPError(error) {
  return error.errors !== undefined;
}

function formatErrors(response) {
  if (isWPError(response)) {
    // Replace the slug with a plugin name if a constant exists.
    Object.keys(response.errors).forEach(plugin => {
      response.errors[plugin] = response.errors[plugin].map(pluginError => {
        return pluginNames[plugin] ? pluginError.replace(`\`${plugin}\``, pluginNames[plugin]) : pluginError;
      });
    });
  } else if (typeof response === 'string') {
    return response;
  } else {
    return response.message;
  }

  return '';
}

const formatErrorMessage = (pluginErrors, actionType = 'install') => {
  return Object(external_wp_i18n_["sprintf"])(
  /* translators: %(actionType): install or activate (the plugin). %(pluginName): a plugin slug (e.g. woocommerce-services). %(error): a single error message or in plural a comma separated error message list.*/
  Object(external_wp_i18n_["_n"])('Could not %(actionType)s %(pluginName)s plugin, %(error)s', 'Could not %(actionType)s the following plugins: %(pluginName)s with these Errors: %(error)s', Object.keys(pluginErrors).length || 1, 'woocommerce-admin'), {
    actionType,
    pluginName: Object.keys(pluginErrors).join(', '),
    error: Object.values(pluginErrors).join(', \n')
  });
};

function actions_updateActivePlugins(active, replace = false) {
  return {
    type: ACTION_TYPES.UPDATE_ACTIVE_PLUGINS,
    active,
    replace
  };
}
function actions_updateInstalledPlugins(installed, replace = false) {
  return {
    type: ACTION_TYPES.UPDATE_INSTALLED_PLUGINS,
    installed,
    replace
  };
}
function actions_setIsRequesting(selector, isRequesting) {
  return {
    type: ACTION_TYPES.SET_IS_REQUESTING,
    selector,
    isRequesting
  };
}
function setError(selector, error) {
  return {
    type: ACTION_TYPES.SET_ERROR,
    selector,
    error
  };
}
function actions_updateIsJetpackConnected(jetpackConnection) {
  return {
    type: ACTION_TYPES.UPDATE_JETPACK_CONNECTION,
    jetpackConnection
  };
}
function updateJetpackConnectUrl(redirectUrl, jetpackConnectUrl) {
  return {
    type: ACTION_TYPES.UPDATE_JETPACK_CONNECT_URL,
    jetpackConnectUrl,
    redirectUrl
  };
}
function* installPlugins(plugins) {
  yield actions_setIsRequesting('installPlugins', true);

  try {
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: `${WC_ADMIN_NAMESPACE}/plugins/install`,
      method: 'POST',
      data: {
        plugins: plugins.join(',')
      }
    });

    if (results.data.installed.length) {
      yield actions_updateInstalledPlugins(results.data.installed);
    }

    if (Object.keys(results.errors.errors).length) {
      throw results.errors.errors;
    }

    yield actions_setIsRequesting('installPlugins', false);
    return results;
  } catch (error) {
    if (plugins.length === 1 && !error[plugins[0]]) {
      // Incase of a network error
      error = {
        [plugins[0]]: error.message
      };
    }

    yield setError('installPlugins', error);
    throw new Error(formatErrorMessage(error));
  }
}
function* activatePlugins(plugins) {
  yield actions_setIsRequesting('activatePlugins', true);

  try {
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: `${WC_ADMIN_NAMESPACE}/plugins/activate`,
      method: 'POST',
      data: {
        plugins: plugins.join(',')
      }
    });

    if (results.data.activated.length) {
      yield actions_updateActivePlugins(results.data.activated);
    }

    if (Object.keys(results.errors.errors).length) {
      throw results.errors.errors;
    }

    yield actions_setIsRequesting('activatePlugins', false);
    return results;
  } catch (error) {
    if (plugins.length === 1 && !error[plugins[0]]) {
      // Incase of a network error
      error = {
        [plugins[0]]: error.message
      };
    }

    yield setError('activatePlugins', error);
    throw new Error(formatErrorMessage(error, 'activate'));
  }
}
function* installAndActivatePlugins(plugins) {
  try {
    yield actions_dispatch(constants_STORE_NAME, 'installPlugins', plugins);
    const activations = yield actions_dispatch(constants_STORE_NAME, 'activatePlugins', plugins);
    return activations;
  } catch (error) {
    throw error;
  }
}
const createErrorNotice = errorMessage => {
  return actions_dispatch('core/notices', 'createNotice', 'error', errorMessage);
};
function* connectToJetpack(getAdminLink) {
  const url = yield actions_resolveSelect(constants_STORE_NAME, 'getJetpackConnectUrl', {
    redirect_url: getAdminLink('admin.php?page=wc-admin')
  });
  const error = yield actions_resolveSelect(constants_STORE_NAME, 'getPluginsError', 'getJetpackConnectUrl');

  if (error) {
    throw new Error(error);
  } else {
    return url;
  }
}
function* installJetpackAndConnect(errorAction, getAdminLink) {
  try {
    yield actions_dispatch(constants_STORE_NAME, 'installPlugins', ['jetpack']);
    yield actions_dispatch(constants_STORE_NAME, 'activatePlugins', ['jetpack']);
    const url = yield actions_dispatch(constants_STORE_NAME, 'connectToJetpack', getAdminLink);
    window.location.href = url;
  } catch (error) {
    yield errorAction(error.message);
  }
}
function* connectToJetpackWithFailureRedirect(failureRedirect, errorAction, getAdminLink) {
  try {
    const url = yield actions_dispatch(constants_STORE_NAME, 'connectToJetpack', getAdminLink);
    window.location.href = url;
  } catch (error) {
    yield errorAction(error.message);
    window.location.href = failureRedirect;
  }
}
function setPaypalOnboardingStatus(status) {
  return {
    type: ACTION_TYPES.SET_PAYPAL_ONBOARDING_STATUS,
    paypalOnboardingStatus: status
  };
}
function setRecommendedPlugins(type, plugins) {
  return {
    type: ACTION_TYPES.SET_RECOMMENDED_PLUGINS,
    recommendedType: type,
    plugins
  };
}
// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__(14);

// CONCATENATED MODULE: ./packages/data/build-module/options/constants.js
const options_constants_STORE_NAME = 'wc/admin/options';
// CONCATENATED MODULE: ./packages/data/build-module/options/selectors.js
/**
 * Get option from state tree.
 *
 * @param {Object} state - Reducer state
 * @param {Array} name - Option name
 */
const getOption = (state, name) => {
  return state[name];
};
/**
 * Determine if an options request resulted in an error.
 *
 * @param {Object} state - Reducer state
 * @param {string} name - Option name
 */

const getOptionsRequestingError = (state, name) => {
  return state.requestingErrors[name] || false;
};
/**
 * Determine if options are being updated.
 *
 * @param {Object} state - Reducer state
 */

const isOptionsUpdating = state => {
  return state.isUpdating || false;
};
/**
 * Determine if an options update resulted in an error.
 *
 * @param {Object} state - Reducer state
 */

const getOptionsUpdatingError = state => {
  return state.updatingError || false;
};
// CONCATENATED MODULE: ./packages/data/build-module/options/action-types.js
const action_types_TYPES = {
  RECEIVE_OPTIONS: 'RECEIVE_OPTIONS',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING',
  SET_IS_UPDATING: 'SET_IS_UPDATING',
  SET_REQUESTING_ERROR: 'SET_REQUESTING_ERROR',
  SET_UPDATING_ERROR: 'SET_UPDATING_ERROR'
};
/* harmony default export */ var options_action_types = (action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/options/actions.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function actions_receiveOptions(options) {
  return {
    type: options_action_types.RECEIVE_OPTIONS,
    options
  };
}
function setRequestingError(error, name) {
  return {
    type: options_action_types.SET_REQUESTING_ERROR,
    error,
    name
  };
}
function setUpdatingError(error) {
  return {
    type: options_action_types.SET_UPDATING_ERROR,
    error
  };
}
function setIsUpdating(isUpdating) {
  return {
    type: options_action_types.SET_IS_UPDATING,
    isUpdating
  };
}
function* updateOptions(data) {
  yield setIsUpdating(true);
  yield actions_receiveOptions(data);

  try {
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: WC_ADMIN_NAMESPACE + '/options',
      method: 'POST',
      data
    });
    yield setIsUpdating(false);
    return {
      success: true,
      ...results
    };
  } catch (error) {
    yield setUpdatingError(error);
    return {
      success: false,
      ...error
    };
  }
}
// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__(17);
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// CONCATENATED MODULE: ./packages/data/build-module/options/controls.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


let optionNames = [];
const fetches = {};
const batchFetch = optionName => {
  return {
    type: 'BATCH_FETCH',
    optionName
  };
};
const controls = { ...external_wp_dataControls_["controls"],

  BATCH_FETCH({
    optionName
  }) {
    optionNames.push(optionName);
    return new Promise(resolve => {
      setTimeout(function () {
        const names = optionNames.join(',');

        if (fetches[names]) {
          return fetches[names].then(result => {
            resolve(result[optionName]);
          });
        }

        const url = WC_ADMIN_NAMESPACE + '/options?options=' + names;
        fetches[names] = external_wp_apiFetch_default()({
          path: url
        });
        fetches[names].then(result => resolve(result)); // Clear option names after all resolved;

        setTimeout(() => {
          optionNames = []; // Delete the fetch after to allow wp data to handle cache invalidation.

          delete fetches[names];
        }, 1);
      }, 1);
    });
  }

};
// CONCATENATED MODULE: ./packages/data/build-module/options/resolvers.js
/**
 * Internal dependencies
 */


/**
 * Request an option value.
 *
 * @param {string} name - Option name
 */

function* resolvers_getOption(name) {
  try {
    const result = yield batchFetch(name);
    yield actions_receiveOptions(result);
  } catch (error) {
    yield setRequestingError(error, name);
  }
}
// CONCATENATED MODULE: ./packages/data/build-module/options/reducer.js
/**
 * Internal dependencies
 */


const optionsReducer = (state = {
  isUpdating: false,
  requestingErrors: {}
}, {
  type,
  options,
  error,
  isUpdating,
  name
}) => {
  switch (type) {
    case options_action_types.RECEIVE_OPTIONS:
      state = { ...state,
        ...options
      };
      break;

    case options_action_types.SET_IS_UPDATING:
      state = { ...state,
        isUpdating
      };
      break;

    case options_action_types.SET_REQUESTING_ERROR:
      state = { ...state,
        requestingErrors: {
          [name]: error
        }
      };
      break;

    case options_action_types.SET_UPDATING_ERROR:
      state = { ...state,
        error,
        updatingError: error,
        isUpdating: false
      };
      break;
  }

  return state;
};

/* harmony default export */ var options_reducer = (optionsReducer);
// CONCATENATED MODULE: ./packages/data/build-module/options/index.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */







Object(external_wp_data_["registerStore"])(options_constants_STORE_NAME, {
  reducer: options_reducer,
  actions: options_actions_namespaceObject,
  controls: controls,
  selectors: options_selectors_namespaceObject,
  resolvers: options_resolvers_namespaceObject
});
const OPTIONS_STORE_NAME = options_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/plugins/resolvers.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




 // Can be removed in WP 5.9, wp.data is supported in >5.7.

const resolvers_resolveSelect = external_wp_data_["controls"] && external_wp_data_["controls"].resolveSelect ? external_wp_data_["controls"].resolveSelect : external_wp_dataControls_["select"];
function* resolvers_getActivePlugins() {
  yield actions_setIsRequesting('getActivePlugins', true);

  try {
    const url = WC_ADMIN_NAMESPACE + '/plugins/active';
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'GET'
    });
    yield actions_updateActivePlugins(results.plugins, true);
  } catch (error) {
    yield setError('getActivePlugins', error);
  }
}
function* resolvers_getInstalledPlugins() {
  yield actions_setIsRequesting('getInstalledPlugins', true);

  try {
    const url = WC_ADMIN_NAMESPACE + '/plugins/installed';
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'GET'
    });
    yield actions_updateInstalledPlugins(results.plugins, true);
  } catch (error) {
    yield setError('getInstalledPlugins', error);
  }
}
function* resolvers_isJetpackConnected() {
  yield actions_setIsRequesting('isJetpackConnected', true);

  try {
    const url = JETPACK_NAMESPACE + '/connection';
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'GET'
    });
    yield actions_updateIsJetpackConnected(results.isActive);
  } catch (error) {
    yield setError('isJetpackConnected', error);
  }

  yield actions_setIsRequesting('isJetpackConnected', false);
}
function* resolvers_getJetpackConnectUrl(query) {
  yield actions_setIsRequesting('getJetpackConnectUrl', true);

  try {
    const url = Object(external_wp_url_["addQueryArgs"])(WC_ADMIN_NAMESPACE + '/plugins/connect-jetpack', query);
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'GET'
    });
    yield updateJetpackConnectUrl(query.redirect_url, results.connectAction);
  } catch (error) {
    yield setError('getJetpackConnectUrl', error);
  }

  yield actions_setIsRequesting('getJetpackConnectUrl', false);
}

function* setOnboardingStatusWithOptions() {
  const options = yield resolvers_resolveSelect(OPTIONS_STORE_NAME, 'getOption', 'woocommerce-ppcp-settings');
  const onboarded = options.merchant_email_production && options.merchant_id_production && options.client_id_production && options.client_secret_production;
  yield setPaypalOnboardingStatus({
    production: {
      state: onboarded ? 'onboarded' : 'unknown',
      onboarded: onboarded ? true : false
    }
  });
}

function* resolvers_getPaypalOnboardingStatus() {
  yield actions_setIsRequesting('getPaypalOnboardingStatus', true);
  const errorData = yield resolvers_resolveSelect(constants_STORE_NAME, 'getPluginsError', 'getPaypalOnboardingStatus');

  if (errorData && errorData.data && errorData.data.status === 404) {
    // The get-status request doesn't exist fall back to using options.
    yield setOnboardingStatusWithOptions();
  } else {
    try {
      const url = PAYPAL_NAMESPACE + '/onboarding/get-status';
      const results = yield Object(external_wp_dataControls_["apiFetch"])({
        path: url,
        method: 'GET'
      });
      yield setPaypalOnboardingStatus(results);
    } catch (error) {
      yield setOnboardingStatusWithOptions();
      yield setError('getPaypalOnboardingStatus', error);
    }
  }

  yield actions_setIsRequesting('getPaypalOnboardingStatus', false);
}
const SUPPORTED_TYPES = ['payments'];
function* resolvers_getRecommendedPlugins(type) {
  if (!SUPPORTED_TYPES.includes(type)) {
    return [];
  }

  yield actions_setIsRequesting('getRecommendedPlugins', true);

  try {
    const url = WC_ADMIN_NAMESPACE + '/plugins/recommended-payment-plugins';
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'GET'
    });
    yield setRecommendedPlugins(type, results);
  } catch (error) {
    yield setError('getRecommendedPlugins', error);
  }

  yield actions_setIsRequesting('getRecommendedPlugins', false);
}
// CONCATENATED MODULE: ./packages/data/build-module/plugins/reducer.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



const reducer_plugins = (state = {
  active: [],
  installed: [],
  requesting: {},
  errors: {},
  jetpackConnectUrls: {},
  recommended: {}
}, payload) => {
  if (payload && 'type' in payload) {
    switch (payload.type) {
      case ACTION_TYPES.UPDATE_ACTIVE_PLUGINS:
        state = { ...state,
          active: payload.replace ? payload.active : Object(external_lodash_["concat"])(state.active, payload.active),
          requesting: { ...state.requesting,
            getActivePlugins: false,
            activatePlugins: false
          },
          errors: { ...state.errors,
            getActivePlugins: false,
            activatePlugins: false
          }
        };
        break;

      case ACTION_TYPES.UPDATE_INSTALLED_PLUGINS:
        state = { ...state,
          installed: payload.replace ? payload.installed : Object(external_lodash_["concat"])(state.installed, payload.installed),
          requesting: { ...state.requesting,
            getInstalledPlugins: false,
            installPlugins: false
          },
          errors: { ...state.errors,
            getInstalledPlugins: false,
            installPlugin: false
          }
        };
        break;

      case ACTION_TYPES.SET_IS_REQUESTING:
        state = { ...state,
          requesting: { ...state.requesting,
            [payload.selector]: payload.isRequesting
          }
        };
        break;

      case ACTION_TYPES.SET_ERROR:
        state = { ...state,
          requesting: { ...state.requesting,
            [payload.selector]: false
          },
          errors: { ...state.errors,
            [payload.selector]: payload.error
          }
        };
        break;

      case ACTION_TYPES.UPDATE_JETPACK_CONNECTION:
        state = { ...state,
          jetpackConnection: payload.jetpackConnection
        };
        break;

      case ACTION_TYPES.UPDATE_JETPACK_CONNECT_URL:
        state = { ...state,
          jetpackConnectUrls: { ...state.jetpackConnectUrls,
            [payload.redirectUrl]: payload.jetpackConnectUrl
          }
        };
        break;

      case ACTION_TYPES.SET_PAYPAL_ONBOARDING_STATUS:
        state = { ...state,
          paypalOnboardingStatus: payload.paypalOnboardingStatus
        };
        break;

      case ACTION_TYPES.SET_RECOMMENDED_PLUGINS:
        state = { ...state,
          recommended: { ...state.recommended,
            [payload.recommendedType]: payload.plugins
          }
        };
        break;
    }
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






Object(external_wp_data_["registerStore"])(constants_STORE_NAME, {
  reducer: plugins_reducer,
  actions: plugins_actions_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  selectors: plugins_selectors_namespaceObject,
  resolvers: plugins_resolvers_namespaceObject
});
const PLUGINS_STORE_NAME = constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/plugins/with-plugins-hydration.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const withPluginsHydration = data => Object(external_wp_compose_["createHigherOrderComponent"])(OriginalComponent => props => {
  const dataRef = Object(external_wp_element_["useRef"])(data);
  Object(external_wp_data_["useSelect"])((select, registry) => {
    if (!dataRef.current) {
      return;
    }

    const {
      isResolving,
      hasFinishedResolution
    } = select(constants_STORE_NAME);
    const {
      startResolution,
      finishResolution,
      updateActivePlugins,
      updateInstalledPlugins,
      updateIsJetpackConnected
    } = registry.dispatch(constants_STORE_NAME);

    if (!isResolving('getActivePlugins', []) && !hasFinishedResolution('getActivePlugins', [])) {
      startResolution('getActivePlugins', []);
      startResolution('getInstalledPlugins', []);
      startResolution('isJetpackConnected', []);
      updateActivePlugins(dataRef.current.activePlugins, true);
      updateInstalledPlugins(dataRef.current.installedPlugins, true);
      updateIsJetpackConnected(dataRef.current.jetpackStatus && dataRef.current.jetpackStatus.isActive ? true : false);
      finishResolution('getActivePlugins', []);
      finishResolution('getInstalledPlugins', []);
      finishResolution('isJetpackConnected', []);
    }
  }, []);
  return Object(external_wp_element_["createElement"])(OriginalComponent, Object.assign({}, props));
}, 'withPluginsHydration');
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/constants.js
/**
 * Internal dependencies
 */
const onboarding_constants_STORE_NAME = 'wc/admin/onboarding';
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/selectors.js
const getFreeExtensions = state => {
  return state.freeExtensions || [];
};
const getProfileItems = state => {
  return state.profileItems || {};
};
const getTasksStatus = state => {
  return state.tasksStatus || {};
};
const getPaymentGatewaySuggestions = state => {
  return state.paymentMethods || [];
};
const getOnboardingError = (state, selector) => {
  return state.errors[selector] || false;
};
const isOnboardingRequesting = (state, selector) => {
  return state.requesting[selector] || false;
};
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/action-types.js
const onboarding_action_types_TYPES = {
  SET_ERROR: 'SET_ERROR',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING',
  SET_PROFILE_ITEMS: 'SET_PROFILE_ITEMS',
  SET_TASKS_STATUS: 'SET_TASKS_STATUS',
  GET_PAYMENT_METHODS_SUCCESS: 'GET_PAYMENT_METHODS_SUCCESS',
  GET_FREE_EXTENSIONS_ERROR: 'GET_FREE_EXTENSIONS_ERROR',
  GET_FREE_EXTENSIONS_SUCCESS: 'GET_FREE_EXTENSIONS_SUCCESS'
};
/* harmony default export */ var onboarding_action_types = (onboarding_action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/actions.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function getFreeExtensionsError(error) {
  return {
    type: onboarding_action_types.GET_FREE_EXTENSIONS_ERROR,
    error
  };
}
function getFreeExtensionsSuccess(freeExtensions) {
  return {
    type: onboarding_action_types.GET_FREE_EXTENSIONS_SUCCESS,
    freeExtensions
  };
}
function actions_setError(selector, error) {
  return {
    type: onboarding_action_types.SET_ERROR,
    selector,
    error
  };
}
function onboarding_actions_setIsRequesting(selector, isRequesting) {
  return {
    type: onboarding_action_types.SET_IS_REQUESTING,
    selector,
    isRequesting
  };
}
function actions_setProfileItems(profileItems, replace = false) {
  return {
    type: onboarding_action_types.SET_PROFILE_ITEMS,
    profileItems,
    replace
  };
}
function actions_setTasksStatus(tasksStatus) {
  return {
    type: onboarding_action_types.SET_TASKS_STATUS,
    tasksStatus
  };
}
function setPaymentMethods(paymentMethods) {
  return {
    type: onboarding_action_types.GET_PAYMENT_METHODS_SUCCESS,
    paymentMethods
  };
}
function* updateProfileItems(items) {
  yield onboarding_actions_setIsRequesting('updateProfileItems', true);

  try {
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: `${WC_ADMIN_NAMESPACE}/onboarding/profile`,
      method: 'POST',
      data: items
    });

    if (results && results.status === 'success') {
      yield actions_setProfileItems(items);
      yield onboarding_actions_setIsRequesting('updateProfileItems', false);
      return results;
    }

    throw new Error();
  } catch (error) {
    yield actions_setError('updateProfileItems', error);
    yield onboarding_actions_setIsRequesting('updateProfileItems', false);
    throw new Error();
  }
}
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/resolvers.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function* resolvers_getProfileItems() {
  try {
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: WC_ADMIN_NAMESPACE + '/onboarding/profile',
      method: 'GET'
    });
    yield actions_setProfileItems(results, true);
  } catch (error) {
    yield actions_setError('getProfileItems', error);
  }
}
function* resolvers_getTasksStatus() {
  try {
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: WC_ADMIN_NAMESPACE + '/onboarding/tasks/status',
      method: 'GET'
    });
    yield actions_setTasksStatus(results, true);
  } catch (error) {
    yield actions_setError('getTasksStatus', error);
  }
}
function* resolvers_getPaymentGatewaySuggestions() {
  try {
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: WC_ADMIN_NAMESPACE + '/onboarding/payments',
      method: 'GET'
    });
    yield setPaymentMethods(results);
  } catch (error) {
    yield actions_setError('getPaymentGatewaySuggestions', error);
  }
}
function* resolvers_getFreeExtensions() {
  try {
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: WC_ADMIN_NAMESPACE + '/onboarding/free-extensions',
      method: 'GET'
    });
    yield getFreeExtensionsSuccess(results);
  } catch (error) {
    yield getFreeExtensionsError(error);
  }
}
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/reducer.js
/**
 * Internal dependencies
 */

const defaultState = {
  errors: {},
  freeExtensions: [],
  profileItems: {
    business_extensions: null,
    completed: null,
    industry: null,
    other_platform: null,
    other_platform_name: null,
    product_count: null,
    product_types: null,
    revenue: null,
    selling_venues: null,
    setup_client: null,
    skipped: null,
    theme: null,
    wccom_connected: null
  },
  paymentMethods: [],
  requesting: {},
  tasksStatus: {}
};

const onboarding = (state = defaultState, {
  freeExtensions,
  type,
  profileItems,
  paymentMethods,
  replace,
  error,
  isRequesting,
  selector,
  tasksStatus
}) => {
  switch (type) {
    case onboarding_action_types.SET_PROFILE_ITEMS:
      return { ...state,
        profileItems: replace ? profileItems : { ...state.profileItems,
          ...profileItems
        }
      };

    case onboarding_action_types.SET_TASKS_STATUS:
      return { ...state,
        tasksStatus: { ...state.tasksStatus,
          ...tasksStatus
        }
      };

    case onboarding_action_types.SET_ERROR:
      return { ...state,
        errors: { ...state.errors,
          [selector]: error
        }
      };

    case onboarding_action_types.SET_IS_REQUESTING:
      return { ...state,
        requesting: { ...state.requesting,
          [selector]: isRequesting
        }
      };

    case onboarding_action_types.GET_PAYMENT_METHODS_SUCCESS:
      return { ...state,
        paymentMethods
      };

    case onboarding_action_types.GET_FREE_EXTENSIONS_ERROR:
      return { ...state,
        errors: { ...state.errors,
          getFreeExtensions: error
        }
      };

    case onboarding_action_types.GET_FREE_EXTENSIONS_SUCCESS:
      return { ...state,
        freeExtensions
      };

    default:
      return state;
  }
};

/* harmony default export */ var onboarding_reducer = (onboarding);
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






Object(external_wp_data_["registerStore"])(onboarding_constants_STORE_NAME, {
  reducer: onboarding_reducer,
  actions: onboarding_actions_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  selectors: onboarding_selectors_namespaceObject,
  resolvers: onboarding_resolvers_namespaceObject
});
const ONBOARDING_STORE_NAME = onboarding_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/with-onboarding-hydration.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const withOnboardingHydration = data => {
  let hydratedProfileItems = false;
  let hydratedTasksStatus = false;
  return Object(external_wp_compose_["createHigherOrderComponent"])(OriginalComponent => props => {
    const onboardingRef = Object(external_wp_element_["useRef"])(data);
    Object(external_wp_data_["useSelect"])((select, registry) => {
      if (!onboardingRef.current) {
        return;
      }

      const {
        isResolving,
        hasFinishedResolution
      } = select(onboarding_constants_STORE_NAME);
      const {
        startResolution,
        finishResolution,
        setProfileItems,
        setTasksStatus
      } = registry.dispatch(onboarding_constants_STORE_NAME);
      const {
        profileItems,
        tasksStatus
      } = onboardingRef.current;

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
    return Object(external_wp_element_["createElement"])(OriginalComponent, Object.assign({}, props));
  }, 'withOnboardingHydration');
};
// CONCATENATED MODULE: ./packages/data/build-module/user/constants.js
const user_constants_STORE_NAME = 'core';
// CONCATENATED MODULE: ./packages/data/build-module/user/index.js
/**
 * Internal dependencies
 */

const USER_STORE_NAME = user_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/user/with-current-user-hydration.js
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

const withCurrentUserHydration = currentUser => Object(external_wp_compose_["createHigherOrderComponent"])(OriginalComponent => props => {
  const userRef = Object(external_wp_element_["useRef"])(currentUser); // Use currentUser to hydrate calls to @wordpress/core-data's getCurrentUser().

  Object(external_wp_data_["useSelect"])((select, registry) => {
    if (!userRef.current) {
      return;
    }

    const {
      isResolving,
      hasFinishedResolution
    } = select(user_constants_STORE_NAME);
    const {
      startResolution,
      finishResolution,
      receiveCurrentUser
    } = registry.dispatch(user_constants_STORE_NAME);

    if (!isResolving('getCurrentUser') && !hasFinishedResolution('getCurrentUser')) {
      startResolution('getCurrentUser', []);
      receiveCurrentUser(userRef.current);
      finishResolution('getCurrentUser', []);
    }
  });
  return Object(external_wp_element_["createElement"])(OriginalComponent, Object.assign({}, props));
}, 'withCurrentUserHydration');
// CONCATENATED MODULE: ./packages/data/build-module/user/use-user.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Custom react hook for shortcut methods around user.
 *
 * This is a wrapper around @wordpress/core-data's getCurrentUser().
 */

const useUser = () => {
  const userData = Object(external_wp_data_["useSelect"])(select => {
    const {
      getCurrentUser,
      hasStartedResolution,
      hasFinishedResolution
    } = select(user_constants_STORE_NAME);
    return {
      isRequesting: hasStartedResolution('getCurrentUser') && !hasFinishedResolution('getCurrentUser'),
      user: getCurrentUser(),
      getCurrentUser
    };
  });

  const currentUserCan = capability => {
    if (userData.user && userData.user.is_super_admin) {
      return true;
    }

    if (userData.user && userData.user.capabilities[capability]) {
      return true;
    }

    return false;
  };

  return {
    currentUserCan,
    user: userData.user,
    isRequesting: userData.isRequesting
  };
};
// CONCATENATED MODULE: ./packages/data/build-module/user/use-user-preferences.js
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

const getWooCommerceMeta = user => {
  const wooMeta = user.woocommerce_meta || {};
  const userData = Object(external_lodash_["mapValues"])(wooMeta, (data, key) => {
    if (!data || data.length === 0) {
      return '';
    }

    try {
      return JSON.parse(data);
    } catch (e) {
      /* eslint-disable no-console */
      console.error(`Error parsing value '${data}' for ${key}`, e.message);
      /* eslint-enable no-console */

      return '';
    }
  });
  return userData;
}; // Create wrapper for updating user's `woocommerce_meta`.


async function updateUserPrefs(receiveCurrentUser, user, saveUser, getLastEntitySaveError, userPrefs) {
  // @todo Handle unresolved getCurrentUser() here.
  // Prep fields for update.
  const metaData = Object(external_lodash_["mapValues"])(userPrefs, JSON.stringify);

  if (Object.keys(metaData).length === 0) {
    return {
      error: new Error('Invalid woocommerce_meta data for update.'),
      updatedUser: undefined
    };
  } // Optimistically propagate new woocommerce_meta to the store for instant update.


  receiveCurrentUser({ ...user,
    woocommerce_meta: { ...user.woocommerce_meta,
      ...metaData
    }
  }); // Use saveUser() to update WooCommerce meta values.

  const updatedUser = await saveUser({
    id: user.id,
    woocommerce_meta: metaData
  });

  if (undefined === updatedUser) {
    // Return the encountered error to the caller.
    const error = getLastEntitySaveError('root', 'user', user.id);
    return {
      error,
      updatedUser
    };
  } // Decode the WooCommerce meta after save.


  const updatedUserResponse = { ...updatedUser,
    woocommerce_meta: getWooCommerceMeta(updatedUser)
  };
  return {
    updatedUser: updatedUserResponse
  };
}
/**
 * Custom react hook for retrieving thecurrent user's WooCommerce preferences.
 *
 * This is a wrapper around @wordpress/core-data's getCurrentUser() and saveUser().
 */


const useUserPreferences = () => {
  // Get our dispatch methods now - this can't happen inside the callback below.
  const dispatch = Object(external_wp_data_["useDispatch"])(user_constants_STORE_NAME);
  const {
    addEntities,
    receiveCurrentUser,
    saveEntityRecord
  } = dispatch;
  let {
    saveUser
  } = dispatch;
  const userData = Object(external_wp_data_["useSelect"])(select => {
    const {
      getCurrentUser,
      getEntity,
      getEntityRecord,
      getLastEntitySaveError,
      hasStartedResolution,
      hasFinishedResolution
    } = select(user_constants_STORE_NAME);
    return {
      isRequesting: hasStartedResolution('getCurrentUser') && !hasFinishedResolution('getCurrentUser'),
      user: getCurrentUser(),
      getCurrentUser,
      getEntity,
      getEntityRecord,
      getLastEntitySaveError
    };
  });

  const updateUserPreferences = userPrefs => {
    // WP 5.3.x doesn't have the User entity defined.
    if (typeof saveUser !== 'function') {
      // Polyfill saveUser() - wrapper of saveEntityRecord.
      saveUser = async userToSave => {
        const entityDefined = Boolean(userData.getEntity('root', 'user'));

        if (!entityDefined) {
          // Add the User entity so saveEntityRecord works.
          await addEntities([{
            name: 'user',
            kind: 'root',
            baseURL: '/wp/v2/users',
            plural: 'users'
          }]);
        } // Fire off the save action.


        await saveEntityRecord('root', 'user', userToSave); // Respond with the updated user.

        return userData.getEntityRecord('root', 'user', userToSave.id);
      };
    } // Get most recent user before update.


    const currentUser = userData.getCurrentUser();
    return updateUserPrefs(receiveCurrentUser, currentUser, saveUser, userData.getLastEntitySaveError, userPrefs);
  };

  const userPreferences = userData.user ? getWooCommerceMeta(userData.user) : {};
  return {
    isRequesting: userData.isRequesting,
    ...userPreferences,
    updateUserPreferences
  };
};
// CONCATENATED MODULE: ./packages/data/build-module/options/with-options-hydration.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const useOptionsHydration = data => {
  const dataRef = Object(external_wp_element_["useRef"])(data);
  Object(external_wp_data_["useSelect"])((select, registry) => {
    if (!dataRef.current) {
      return;
    }

    const {
      isResolving,
      hasFinishedResolution
    } = select(options_constants_STORE_NAME);
    const {
      startResolution,
      finishResolution,
      receiveOptions
    } = registry.dispatch(options_constants_STORE_NAME);
    const names = Object.keys(dataRef.current);
    names.forEach(name => {
      if (!isResolving('getOption', [name]) && !hasFinishedResolution('getOption', [name])) {
        startResolution('getOption', [name]);
        receiveOptions({
          [name]: dataRef.current[name]
        });
        finishResolution('getOption', [name]);
      }
    });
  }, []);
};
const withOptionsHydration = data => Object(external_wp_compose_["createHigherOrderComponent"])(OriginalComponent => props => {
  useOptionsHydration(data);
  return Object(external_wp_element_["createElement"])(OriginalComponent, Object.assign({}, props));
}, 'withOptionsHydration');
// CONCATENATED MODULE: ./packages/data/build-module/reviews/constants.js
const reviews_constants_STORE_NAME = 'wc/admin/reviews';
// CONCATENATED MODULE: ./packages/data/build-module/reviews/selectors.js
const getReviews = (state, query) => {
  const stringifiedQuery = JSON.stringify(query);
  const ids = state.reviews[stringifiedQuery] && state.reviews[stringifiedQuery].data || [];
  return ids.map(id => state.data[id]);
};
const getReviewsTotalCount = (state, query) => {
  const stringifiedQuery = JSON.stringify(query);
  return state.reviews[stringifiedQuery] && state.reviews[stringifiedQuery].totalCount;
};
const getReviewsError = (state, query) => {
  const stringifiedQuery = JSON.stringify(query);
  return state.errors[stringifiedQuery];
};
// CONCATENATED MODULE: ./packages/data/build-module/reviews/action-types.js
const reviews_action_types_TYPES = {
  UPDATE_REVIEWS: 'UPDATE_REVIEWS',
  SET_REVIEW: 'SET_REVIEW',
  SET_ERROR: 'SET_ERROR',
  SET_REVIEW_IS_UPDATING: 'SET_REVIEW_IS_UPDATING'
};
/* harmony default export */ var reviews_action_types = (reviews_action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/reviews/actions.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



function updateReviews(query, reviews, totalCount) {
  return {
    type: reviews_action_types.UPDATE_REVIEWS,
    reviews,
    query,
    totalCount
  };
}
function* updateReview(reviewId, reviewFields, query) {
  yield setReviewIsUpdating(reviewId, true);

  try {
    const url = Object(external_wp_url_["addQueryArgs"])(`${NAMESPACE}/products/reviews/${reviewId}`, query || {});
    const review = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'PUT',
      data: reviewFields
    });
    yield setReview(reviewId, review);
    yield setReviewIsUpdating(reviewId, false);
  } catch (error) {
    yield reviews_actions_setError('updateReview', error);
    yield setReviewIsUpdating(reviewId, false);
    throw new Error();
  }
}
function* deleteReview(reviewId) {
  yield setReviewIsUpdating(reviewId, true);

  try {
    const url = `${NAMESPACE}/products/reviews/${reviewId}`;
    const response = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'DELETE'
    });
    yield setReview(reviewId, response);
    yield setReviewIsUpdating(reviewId, false);
    return response;
  } catch (error) {
    yield reviews_actions_setError('deleteReview', error);
    yield setReviewIsUpdating(reviewId, false);
    throw new Error();
  }
}
function setReviewIsUpdating(reviewId, isUpdating) {
  return {
    type: reviews_action_types.SET_REVIEW_IS_UPDATING,
    reviewId,
    isUpdating
  };
}
function setReview(reviewId, reviewData) {
  return {
    type: reviews_action_types.SET_REVIEW,
    reviewId,
    reviewData
  };
}
function reviews_actions_setError(query, error) {
  return {
    type: reviews_action_types.SET_ERROR,
    query,
    error
  };
}
// CONCATENATED MODULE: ./packages/data/build-module/controls.js
/**
 * External dependencies
 */


const fetchWithHeaders = options => {
  return {
    type: 'FETCH_WITH_HEADERS',
    options
  };
};
const controls_controls = { ...external_wp_dataControls_["controls"],

  FETCH_WITH_HEADERS({
    options
  }) {
    return external_wp_apiFetch_default()({ ...options,
      parse: false
    }).then(response => {
      return Promise.all([response.headers, response.status, response.json()]);
    }).then(([headers, status, data]) => ({
      headers,
      status,
      data
    }));
  }

};
/* harmony default export */ var build_module_controls = (controls_controls);
// CONCATENATED MODULE: ./packages/data/build-module/reviews/resolvers.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




function* resolvers_getReviews(query) {
  try {
    const url = Object(external_wp_url_["addQueryArgs"])(`${NAMESPACE}/products/reviews`, query);
    const response = yield fetchWithHeaders({
      path: url,
      method: 'GET'
    });
    const totalCount = parseInt(response.headers.get('x-wp-total'), 10);
    yield updateReviews(query, response.data, totalCount);
  } catch (error) {
    yield reviews_actions_setError(query, error);
  }
}
function* resolvers_getReviewsTotalCount(query) {
  yield resolvers_getReviews(query);
}
// CONCATENATED MODULE: ./packages/data/build-module/reviews/reducer.js
/**
 * Internal dependencies
 */


const reducer_reducer = (state = {
  reviews: {},
  errors: {},
  data: {}
}, {
  type,
  query,
  reviews,
  reviewId,
  reviewData,
  totalCount,
  error,
  isUpdating
}) => {
  switch (type) {
    case reviews_action_types.UPDATE_REVIEWS:
      const ids = [];
      const nextReviews = reviews.reduce((result, review) => {
        ids.push(review.id);
        result[review.id] = { ...(state.data[review.id] || {}),
          ...review
        };
        return result;
      }, {});
      return { ...state,
        reviews: { ...state.reviews,
          [JSON.stringify(query)]: {
            data: ids,
            totalCount
          }
        },
        data: { ...state.data,
          ...nextReviews
        }
      };

    case reviews_action_types.SET_REVIEW:
      return { ...state,
        data: { ...state.data,
          [reviewId]: reviewData
        }
      };

    case reviews_action_types.SET_ERROR:
      return { ...state,
        errors: { ...state.errors,
          [JSON.stringify(query)]: error
        }
      };

    case reviews_action_types.SET_REVIEW_IS_UPDATING:
      return { ...state,
        data: { ...state.data,
          [reviewId]: { ...state.data[reviewId],
            isUpdating
          }
        }
      };

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







Object(external_wp_data_["registerStore"])(reviews_constants_STORE_NAME, {
  reducer: reviews_reducer,
  actions: reviews_actions_namespaceObject,
  controls: build_module_controls,
  selectors: reviews_selectors_namespaceObject,
  resolvers: reviews_resolvers_namespaceObject
});
const REVIEWS_STORE_NAME = reviews_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/notes/constants.js
/**
 * Internal dependencies
 */
const notes_constants_STORE_NAME = 'wc/admin/notes';
// CONCATENATED MODULE: ./node_modules/rememo/es/rememo.js


var LEAF_KEY, hasWeakMap;

/**
 * Arbitrary value used as key for referencing cache object in WeakMap tree.
 *
 * @type {Object}
 */
LEAF_KEY = {};

/**
 * Whether environment supports WeakMap.
 *
 * @type {boolean}
 */
hasWeakMap = typeof WeakMap !== 'undefined';

/**
 * Returns the first argument as the sole entry in an array.
 *
 * @param {*} value Value to return.
 *
 * @return {Array} Value returned as entry in array.
 */
function arrayOf( value ) {
	return [ value ];
}

/**
 * Returns true if the value passed is object-like, or false otherwise. A value
 * is object-like if it can support property assignment, e.g. object or array.
 *
 * @param {*} value Value to test.
 *
 * @return {boolean} Whether value is object-like.
 */
function isObjectLike( value ) {
	return !! value && 'object' === typeof value;
}

/**
 * Creates and returns a new cache object.
 *
 * @return {Object} Cache object.
 */
function createCache() {
	var cache = {
		clear: function() {
			cache.head = null;
		},
	};

	return cache;
}

/**
 * Returns true if entries within the two arrays are strictly equal by
 * reference from a starting index.
 *
 * @param {Array}  a         First array.
 * @param {Array}  b         Second array.
 * @param {number} fromIndex Index from which to start comparison.
 *
 * @return {boolean} Whether arrays are shallowly equal.
 */
function isShallowEqual( a, b, fromIndex ) {
	var i;

	if ( a.length !== b.length ) {
		return false;
	}

	for ( i = fromIndex; i < a.length; i++ ) {
		if ( a[ i ] !== b[ i ] ) {
			return false;
		}
	}

	return true;
}

/**
 * Returns a memoized selector function. The getDependants function argument is
 * called before the memoized selector and is expected to return an immutable
 * reference or array of references on which the selector depends for computing
 * its own return value. The memoize cache is preserved only as long as those
 * dependant references remain the same. If getDependants returns a different
 * reference(s), the cache is cleared and the selector value regenerated.
 *
 * @param {Function} selector      Selector function.
 * @param {Function} getDependants Dependant getter returning an immutable
 *                                 reference or array of reference used in
 *                                 cache bust consideration.
 *
 * @return {Function} Memoized selector.
 */
/* harmony default export */ var rememo = (function( selector, getDependants ) {
	var rootCache, getCache;

	// Use object source as dependant if getter not provided
	if ( ! getDependants ) {
		getDependants = arrayOf;
	}

	/**
	 * Returns the root cache. If WeakMap is supported, this is assigned to the
	 * root WeakMap cache set, otherwise it is a shared instance of the default
	 * cache object.
	 *
	 * @return {(WeakMap|Object)} Root cache object.
	 */
	function getRootCache() {
		return rootCache;
	}

	/**
	 * Returns the cache for a given dependants array. When possible, a WeakMap
	 * will be used to create a unique cache for each set of dependants. This
	 * is feasible due to the nature of WeakMap in allowing garbage collection
	 * to occur on entries where the key object is no longer referenced. Since
	 * WeakMap requires the key to be an object, this is only possible when the
	 * dependant is object-like. The root cache is created as a hierarchy where
	 * each top-level key is the first entry in a dependants set, the value a
	 * WeakMap where each key is the next dependant, and so on. This continues
	 * so long as the dependants are object-like. If no dependants are object-
	 * like, then the cache is shared across all invocations.
	 *
	 * @see isObjectLike
	 *
	 * @param {Array} dependants Selector dependants.
	 *
	 * @return {Object} Cache object.
	 */
	function getWeakMapCache( dependants ) {
		var caches = rootCache,
			isUniqueByDependants = true,
			i, dependant, map, cache;

		for ( i = 0; i < dependants.length; i++ ) {
			dependant = dependants[ i ];

			// Can only compose WeakMap from object-like key.
			if ( ! isObjectLike( dependant ) ) {
				isUniqueByDependants = false;
				break;
			}

			// Does current segment of cache already have a WeakMap?
			if ( caches.has( dependant ) ) {
				// Traverse into nested WeakMap.
				caches = caches.get( dependant );
			} else {
				// Create, set, and traverse into a new one.
				map = new WeakMap();
				caches.set( dependant, map );
				caches = map;
			}
		}

		// We use an arbitrary (but consistent) object as key for the last item
		// in the WeakMap to serve as our running cache.
		if ( ! caches.has( LEAF_KEY ) ) {
			cache = createCache();
			cache.isUniqueByDependants = isUniqueByDependants;
			caches.set( LEAF_KEY, cache );
		}

		return caches.get( LEAF_KEY );
	}

	// Assign cache handler by availability of WeakMap
	getCache = hasWeakMap ? getWeakMapCache : getRootCache;

	/**
	 * Resets root memoization cache.
	 */
	function clear() {
		rootCache = hasWeakMap ? new WeakMap() : createCache();
	}

	// eslint-disable-next-line jsdoc/check-param-names
	/**
	 * The augmented selector call, considering first whether dependants have
	 * changed before passing it to underlying memoize function.
	 *
	 * @param {Object} source    Source object for derivation.
	 * @param {...*}   extraArgs Additional arguments to pass to selector.
	 *
	 * @return {*} Selector result.
	 */
	function callSelector( /* source, ...extraArgs */ ) {
		var len = arguments.length,
			cache, node, i, args, dependants;

		// Create copy of arguments (avoid leaking deoptimization).
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		dependants = getDependants.apply( null, args );
		cache = getCache( dependants );

		// If not guaranteed uniqueness by dependants (primitive type or lack
		// of WeakMap support), shallow compare against last dependants and, if
		// references have changed, destroy cache to recalculate result.
		if ( ! cache.isUniqueByDependants ) {
			if ( cache.lastDependants && ! isShallowEqual( dependants, cache.lastDependants, 0 ) ) {
				cache.clear();
			}

			cache.lastDependants = dependants;
		}

		node = cache.head;
		while ( node ) {
			// Check whether node arguments match arguments
			if ( ! isShallowEqual( node.args, args, 1 ) ) {
				node = node.next;
				continue;
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== cache.head ) {
				// Adjust siblings to point to each other.
				node.prev.next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = cache.head;
				node.prev = null;
				cache.head.prev = node;
				cache.head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		node = {
			// Generate the result from original function
			val: selector.apply( null, args ),
		};

		// Avoid including the source object in the cache.
		args[ 0 ] = null;
		node.args = args;

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( cache.head ) {
			cache.head.prev = node;
			node.next = cache.head;
		}

		cache.head = node;

		return node.val;
	}

	callSelector.getDependants = getDependants;
	callSelector.clear = clear;
	clear();

	return callSelector;
});

// CONCATENATED MODULE: ./packages/data/build-module/notes/selectors.js
/**
 * External dependencies
 */

const getNotes = rememo((state, query) => {
  const noteIds = state.noteQueries[JSON.stringify(query)] || [];
  return noteIds.map(id => state.notes[id]);
}, (state, query) => [state.noteQueries[JSON.stringify(query)], state.notes]);
const getNotesError = (state, selector) => {
  return state.errors[selector] || false;
};
const isNotesRequesting = (state, selector) => {
  return state.requesting[selector] || false;
};
// CONCATENATED MODULE: ./packages/data/build-module/notes/action-types.js
const notes_action_types_TYPES = {
  SET_ERROR: 'SET_ERROR',
  SET_NOTE: 'SET_NOTE',
  SET_NOTE_IS_UPDATING: 'SET_NOTE_IS_UPDATING',
  SET_NOTES: 'SET_NOTES',
  SET_NOTES_QUERY: 'SET_NOTES_QUERY',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING'
};
/* harmony default export */ var notes_action_types = (notes_action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/notes/actions.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function* triggerNoteAction(noteId, actionId) {
  yield notes_actions_setIsRequesting('triggerNoteAction', true);
  const url = `${NAMESPACE}/admin/notes/${noteId}/action/${actionId}`;

  try {
    const result = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'POST'
    });
    yield updateNote(noteId, result);
    yield notes_actions_setIsRequesting('triggerNoteAction', false);
  } catch (error) {
    yield notes_actions_setError('triggerNoteAction', error);
    yield notes_actions_setIsRequesting('triggerNoteAction', false);
    throw new Error();
  }
}
function* removeNote(noteId) {
  yield notes_actions_setIsRequesting('removeNote', true);
  yield setNoteIsUpdating(noteId, true);

  try {
    const url = `${NAMESPACE}/admin/notes/delete/${noteId}`;
    const response = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'DELETE'
    });
    yield setNote(noteId, response);
    yield notes_actions_setIsRequesting('removeNote', false);
    return response;
  } catch (error) {
    yield notes_actions_setError('removeNote', error);
    yield notes_actions_setIsRequesting('removeNote', false);
    yield setNoteIsUpdating(noteId, false);
    throw new Error();
  }
}
function* removeAllNotes() {
  yield notes_actions_setIsRequesting('removeAllNotes', true);

  try {
    const url = `${NAMESPACE}/admin/notes/delete/all`;
    const notes = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'DELETE'
    });
    yield setNotes(notes);
    yield notes_actions_setIsRequesting('removeAllNotes', false);
    return notes;
  } catch (error) {
    yield notes_actions_setError('removeAllNotes', error);
    yield notes_actions_setIsRequesting('removeAllNotes', false);
    throw new Error();
  }
}
function* batchUpdateNotes(noteIds, noteFields) {
  yield notes_actions_setIsRequesting('batchUpdateNotes', true);

  try {
    const url = `${NAMESPACE}/admin/notes/update`;
    const notes = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'PUT',
      data: {
        noteIds,
        ...noteFields
      }
    });
    yield setNotes(notes);
    yield notes_actions_setIsRequesting('batchUpdateNotes', false);
  } catch (error) {
    yield notes_actions_setError('updateNote', error);
    yield notes_actions_setIsRequesting('batchUpdateNotes', false);
    throw new Error();
  }
}
function* updateNote(noteId, noteFields) {
  yield notes_actions_setIsRequesting('updateNote', true);
  yield setNoteIsUpdating(noteId, true);

  try {
    const url = `${NAMESPACE}/admin/notes/${noteId}`;
    const note = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'PUT',
      data: noteFields
    });
    yield setNote(noteId, note);
    yield notes_actions_setIsRequesting('updateNote', false);
    yield setNoteIsUpdating(noteId, false);
  } catch (error) {
    yield notes_actions_setError('updateNote', error);
    yield notes_actions_setIsRequesting('updateNote', false);
    yield setNoteIsUpdating(noteId, false);
    throw new Error();
  }
}
function setNote(noteId, noteFields) {
  return {
    type: notes_action_types.SET_NOTE,
    noteId,
    noteFields
  };
}
function setNoteIsUpdating(noteId, isUpdating) {
  return {
    type: notes_action_types.SET_NOTE_IS_UPDATING,
    noteId,
    isUpdating
  };
}
function setNotes(notes) {
  return {
    type: notes_action_types.SET_NOTES,
    notes
  };
}
function setNotesQuery(query, noteIds) {
  return {
    type: notes_action_types.SET_NOTES_QUERY,
    query,
    noteIds
  };
}
function notes_actions_setError(selector, error) {
  return {
    type: notes_action_types.SET_ERROR,
    error,
    selector
  };
}
function notes_actions_setIsRequesting(selector, isRequesting) {
  return {
    type: notes_action_types.SET_IS_REQUESTING,
    selector,
    isRequesting
  };
}
// CONCATENATED MODULE: ./packages/data/build-module/notes/resolvers.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



function* resolvers_getNotes(query = {}) {
  const url = Object(external_wp_url_["addQueryArgs"])(`${NAMESPACE}/admin/notes`, query);

  try {
    const notes = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url
    });
    yield setNotes(notes);
    yield setNotesQuery(query, notes.map(note => note.id));
  } catch (error) {
    yield notes_actions_setError('getNotes', error);
  }
}
// CONCATENATED MODULE: ./packages/data/build-module/notes/reducer.js
/**
 * Internal dependencies
 */


const notesReducer = (state = {
  errors: {},
  noteQueries: {},
  notes: {},
  requesting: {}
}, {
  error,
  isRequesting,
  isUpdating,
  noteFields,
  noteId,
  noteIds,
  notes,
  query,
  selector,
  type
}) => {
  switch (type) {
    case notes_action_types.SET_NOTES:
      state = { ...state,
        notes: { ...state.notes,
          ...notes.reduce((acc, item) => {
            acc[item.id] = item;
            return acc;
          }, {})
        }
      };
      break;

    case notes_action_types.SET_NOTES_QUERY:
      state = { ...state,
        noteQueries: { ...state.noteQueries,
          [JSON.stringify(query)]: noteIds
        }
      };
      break;

    case notes_action_types.SET_ERROR:
      state = { ...state,
        errors: { ...state.errors,
          [selector]: error
        }
      };
      break;

    case notes_action_types.SET_NOTE:
      state = { ...state,
        notes: { ...state.notes,
          [noteId]: noteFields
        }
      };
      break;

    case notes_action_types.SET_NOTE_IS_UPDATING:
      state = { ...state,
        notes: { ...state.notes,
          [noteId]: { ...state.notes[noteId],
            isUpdating
          }
        }
      };
      break;

    case notes_action_types.SET_IS_REQUESTING:
      state = { ...state,
        requesting: { ...state.requesting,
          [selector]: isRequesting
        }
      };
      break;
  }

  return state;
};

/* harmony default export */ var notes_reducer = (notesReducer);
// CONCATENATED MODULE: ./packages/data/build-module/notes/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






Object(external_wp_data_["registerStore"])(notes_constants_STORE_NAME, {
  reducer: notes_reducer,
  actions: notes_actions_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  selectors: notes_selectors_namespaceObject,
  resolvers: notes_resolvers_namespaceObject
});
const NOTES_STORE_NAME = notes_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/reports/constants.js
/**
 * Internal dependencies
 */
const reports_constants_STORE_NAME = 'wc/admin/reports';
// CONCATENATED MODULE: ./packages/data/build-module/reports/selectors.js
/**
 * Internal dependencies
 */

const EMPTY_OBJECT = {};
const selectors_getReportItemsError = (state, endpoint, query) => {
  const resourceName = getResourceName(endpoint, query);
  return state.itemErrors[resourceName] || false;
};
const selectors_getReportItems = (state, endpoint, query) => {
  const resourceName = getResourceName(endpoint, query);
  return state.items[resourceName] || EMPTY_OBJECT;
};
const selectors_getReportStats = (state, endpoint, query) => {
  const resourceName = getResourceName(endpoint, query);
  return state.stats[resourceName] || EMPTY_OBJECT;
};
const selectors_getReportStatsError = (state, endpoint, query) => {
  const resourceName = getResourceName(endpoint, query);
  return state.statErrors[resourceName] || false;
};
// CONCATENATED MODULE: ./packages/data/build-module/reports/action-types.js
const reports_action_types_TYPES = {
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
  const resourceName = getResourceName(endpoint, query);
  return {
    type: reports_action_types.SET_ITEM_ERROR,
    resourceName,
    error
  };
}
function setReportItems(endpoint, query, items) {
  const resourceName = getResourceName(endpoint, query);
  return {
    type: reports_action_types.SET_REPORT_ITEMS,
    resourceName,
    items
  };
}
function setReportStats(endpoint, query, stats) {
  const resourceName = getResourceName(endpoint, query);
  return {
    type: reports_action_types.SET_REPORT_STATS,
    resourceName,
    stats
  };
}
function setReportStatsError(endpoint, query, error) {
  const resourceName = getResourceName(endpoint, query);
  return {
    type: reports_action_types.SET_STAT_ERROR,
    resourceName,
    error
  };
}
// CONCATENATED MODULE: ./packages/data/build-module/reports/resolvers.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




function* resolvers_getReportItems(endpoint, query) {
  const fetchArgs = {
    parse: false,
    path: Object(external_wp_url_["addQueryArgs"])(`${NAMESPACE}/reports/${endpoint}`, query)
  };

  try {
    const response = yield fetchWithHeaders(fetchArgs);
    const data = response.data;
    const totalResults = parseInt(response.headers.get('x-wp-total'), 10);
    const totalPages = parseInt(response.headers.get('x-wp-totalpages'), 10);
    yield setReportItems(endpoint, query, {
      data,
      totalResults,
      totalPages
    });
  } catch (error) {
    yield setReportItemsError(endpoint, query, error);
  }
}
function* resolvers_getReportStats(endpoint, query) {
  const fetchArgs = {
    parse: false,
    path: Object(external_wp_url_["addQueryArgs"])(`${NAMESPACE}/reports/${endpoint}/stats`, query)
  };

  try {
    const response = yield fetchWithHeaders(fetchArgs);
    const data = response.data;
    const totalResults = parseInt(response.headers.get('x-wp-total'), 10);
    const totalPages = parseInt(response.headers.get('x-wp-totalpages'), 10);
    yield setReportStats(endpoint, query, {
      data,
      totalResults,
      totalPages
    });
  } catch (error) {
    yield setReportStatsError(endpoint, query, error);
  }
}
// CONCATENATED MODULE: ./packages/data/build-module/reports/reducer.js
/**
 * Internal dependencies
 */


const reports = (state = {
  itemErrors: {},
  items: {},
  statErrors: {},
  stats: {}
}, {
  type,
  items,
  stats,
  error,
  resourceName
}) => {
  switch (type) {
    case reports_action_types.SET_REPORT_ITEMS:
      return { ...state,
        items: { ...state.items,
          [resourceName]: items
        }
      };

    case reports_action_types.SET_REPORT_STATS:
      return { ...state,
        stats: { ...state.stats,
          [resourceName]: stats
        }
      };

    case reports_action_types.SET_ITEM_ERROR:
      return { ...state,
        itemErrors: { ...state.itemErrors,
          [resourceName]: error
        }
      };

    case reports_action_types.SET_STAT_ERROR:
      return { ...state,
        statErrors: { ...state.statErrors,
          [resourceName]: error
        }
      };

    default:
      return state;
  }
};

/* harmony default export */ var reports_reducer = (reports);
// CONCATENATED MODULE: ./packages/data/build-module/reports/index.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */







Object(external_wp_data_["registerStore"])(reports_constants_STORE_NAME, {
  reducer: reports_reducer,
  actions: reports_actions_namespaceObject,
  controls: build_module_controls,
  selectors: reports_selectors_namespaceObject,
  resolvers: reports_resolvers_namespaceObject
});
const REPORTS_STORE_NAME = reports_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/items/constants.js
const items_constants_STORE_NAME = 'wc/admin/items';
// EXTERNAL MODULE: external ["wc","date"]
var external_wc_date_ = __webpack_require__(19);

// CONCATENATED MODULE: ./packages/data/build-module/items/utils.js
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
  const endpoint = 'leaderboards';
  const {
    per_page: perPage,
    persisted_query: persistedQuery,
    query,
    select,
    filterQuery
  } = options;
  const {
    getItems,
    getItemsError,
    isResolving
  } = select(items_constants_STORE_NAME);
  const response = {
    isRequesting: false,
    isError: false,
    rows: []
  };
  const datesFromQuery = Object(external_wc_date_["getCurrentDates"])(query, options.defaultDateRange);
  const leaderboardQuery = { ...filterQuery,
    after: Object(external_wc_date_["appendTimestamp"])(datesFromQuery.primary.after, 'start'),
    before: Object(external_wc_date_["appendTimestamp"])(datesFromQuery.primary.before, 'end'),
    per_page: perPage,
    persisted_query: JSON.stringify(persistedQuery)
  }; // Disable eslint rule requiring `getItems` to be defined below because the next two statements
  // depend on `getItems` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  const leaderboards = getItems(endpoint, leaderboardQuery);

  if (isResolving('getItems', [endpoint, leaderboardQuery])) {
    return { ...response,
      isRequesting: true
    };
  } else if (getItemsError(endpoint, leaderboardQuery)) {
    return { ...response,
      isError: true
    };
  }

  const leaderboard = leaderboards.get(options.id);
  return { ...response,
    rows: leaderboard === null || leaderboard === void 0 ? void 0 : leaderboard.rows
  };
}
/**
 * Returns items based on a search query.
 *
 * @param {Object} select    Instance of @wordpress/select
 * @param {string} endpoint  Report API Endpoint
 * @param {string[]} search    Array of search strings.
 * @param {Object} options  Query options.
 * @return {Object}   Object containing API request information and the matching items.
 */

function searchItemsByString(select, endpoint, search, options) {
  const {
    getItems,
    getItemsError,
    isResolving
  } = select(items_constants_STORE_NAME);
  const items = {};
  let isRequesting = false;
  let isError = false;
  search.forEach(searchWord => {
    const query = {
      search: searchWord,
      per_page: 10,
      ...options
    };
    const newItems = getItems(endpoint, query);
    newItems.forEach((item, id) => {
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
    items,
    isRequesting,
    isError
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
  const {
    _fields,
    page,
    per_page,
    ...totalsQuery
  } = query;
  return getResourceName('total-' + itemType, totalsQuery);
}
// CONCATENATED MODULE: ./packages/data/build-module/items/selectors.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



const selectors_getItems = rememo((state, itemType, query, defaultValue = new Map()) => {
  const resourceName = getResourceName(itemType, query);
  const ids = state.items[resourceName] && state.items[resourceName].data;

  if (!ids) {
    return defaultValue;
  }

  return ids.reduce((map, id) => {
    map.set(id, state.data[itemType][id]);
    return map;
  }, new Map());
}, (state, itemType, query) => {
  const resourceName = getResourceName(itemType, query);
  return [state.items[resourceName]];
});
const getItemsTotalCount = (state, itemType, query, defaultValue = 0) => {
  const resourceName = getTotalCountResourceName(itemType, query);
  const totalCount = state.items.hasOwnProperty(resourceName) ? state.items[resourceName] : defaultValue;
  return totalCount;
};
const selectors_getItemsError = (state, itemType, query) => {
  const resourceName = getResourceName(itemType, query);
  return state.errors[resourceName];
};
// CONCATENATED MODULE: ./packages/data/build-module/items/action-types.js
const items_action_types_TYPES = {
  SET_ITEM: 'SET_ITEM',
  SET_ITEMS: 'SET_ITEMS',
  SET_ITEMS_TOTAL_COUNT: 'SET_ITEMS_TOTAL_COUNT',
  SET_ERROR: 'SET_ERROR'
};
/* harmony default export */ var items_action_types = (items_action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/items/actions.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



function setItem(itemType, id, item) {
  return {
    type: items_action_types.SET_ITEM,
    id,
    item,
    itemType
  };
}
function setItems(itemType, query, items, totalCount) {
  return {
    type: items_action_types.SET_ITEMS,
    items,
    itemType,
    query,
    totalCount
  };
}
function setItemsTotalCount(itemType, query, totalCount) {
  return {
    type: items_action_types.SET_ITEMS_TOTAL_COUNT,
    itemType,
    query,
    totalCount
  };
}
function items_actions_setError(itemType, query, error) {
  return {
    type: items_action_types.SET_ERROR,
    itemType,
    query,
    error
  };
}
function* updateProductStock(product, quantity) {
  const updatedProduct = { ...product,
    stock_quantity: quantity
  };
  const {
    id,
    parent_id: parentId,
    type
  } = updatedProduct; // Optimistically update product stock.

  yield setItem('products', id, updatedProduct);
  let url = NAMESPACE;

  switch (type) {
    case 'variation':
      url += `/products/${parentId}/variations/${id}`;
      break;

    case 'variable':
    case 'simple':
    default:
      url += `/products/${id}`;
  }

  try {
    yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'PUT',
      data: updatedProduct
    });
    return true;
  } catch (error) {
    // Update failed, return product back to original state.
    yield setItem('products', id, product);
    yield items_actions_setError('products', id, error);
    return false;
  }
}
function* createProductFromTemplate(itemFields, query) {
  try {
    const url = Object(external_wp_url_["addQueryArgs"])(`${WC_ADMIN_NAMESPACE}/onboarding/tasks/create_product_from_template`, query || {});
    const newItem = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'POST',
      data: itemFields
    });
    yield setItem('products', newItem.id, newItem);
    return newItem;
  } catch (error) {
    yield items_actions_setError('createProductFromTemplate', query, error);
    throw error;
  }
}
// CONCATENATED MODULE: ./packages/data/build-module/items/resolvers.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */





function* request(itemType, query) {
  const endpoint = itemType === 'categories' ? 'products/categories' : itemType;
  const url = Object(external_wp_url_["addQueryArgs"])(`${NAMESPACE}/${endpoint}`, query);
  const isUnboundedRequest = query.per_page === -1;
  const fetch = isUnboundedRequest ? external_wp_dataControls_["apiFetch"] : fetchWithHeaders;
  const response = yield fetch({
    path: url,
    method: 'GET'
  });

  if (isUnboundedRequest) {
    return {
      items: response,
      totalCount: response.length
    };
  }

  const totalCount = parseInt(response.headers.get('x-wp-total'), 10);
  return {
    items: response.data,
    totalCount
  };
}

function* resolvers_getItems(itemType, query) {
  try {
    const {
      items,
      totalCount
    } = yield request(itemType, query);
    yield setItemsTotalCount(itemType, query, totalCount);
    yield setItems(itemType, query, items);
  } catch (error) {
    yield items_actions_setError(itemType, query, error);
  }
}
function* items_resolvers_getReviewsTotalCount(itemType, query) {
  yield resolvers_getItemsTotalCount(itemType, query);
}
function* resolvers_getItemsTotalCount(itemType, query) {
  try {
    const totalsQuery = { ...query,
      page: 1,
      per_page: 1
    };
    const {
      totalCount
    } = yield request(itemType, totalsQuery);
    yield setItemsTotalCount(itemType, query, totalCount);
  } catch (error) {
    yield items_actions_setError(itemType, query, error);
  }
}
// CONCATENATED MODULE: ./packages/data/build-module/items/reducer.js
/**
 * Internal dependencies
 */




const items_reducer_reducer = (state = {
  items: {},
  errors: {},
  data: {}
}, {
  type,
  id,
  itemType,
  query,
  item,
  items,
  totalCount,
  error
}) => {
  switch (type) {
    case items_action_types.SET_ITEM:
      const itemData = state.data[itemType] || {};
      return { ...state,
        data: { ...state.data,
          [itemType]: { ...itemData,
            [id]: { ...(itemData[id] || {}),
              ...item
            }
          }
        }
      };

    case items_action_types.SET_ITEMS:
      const ids = [];
      const nextItems = items.reduce((result, theItem) => {
        ids.push(theItem.id);
        result[theItem.id] = theItem;
        return result;
      }, {});
      const resourceName = getResourceName(itemType, query);
      return { ...state,
        items: { ...state.items,
          [resourceName]: {
            data: ids
          }
        },
        data: { ...state.data,
          [itemType]: { ...state.data[itemType],
            ...nextItems
          }
        }
      };

    case items_action_types.SET_ITEMS_TOTAL_COUNT:
      const totalResourceName = getTotalCountResourceName(itemType, query);
      return { ...state,
        items: { ...state.items,
          [totalResourceName]: totalCount
        }
      };

    case items_action_types.SET_ERROR:
      return { ...state,
        errors: { ...state.errors,
          [getResourceName(itemType, query)]: error
        }
      };

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







Object(external_wp_data_["registerStore"])(items_constants_STORE_NAME, {
  reducer: items_reducer,
  actions: items_actions_namespaceObject,
  controls: build_module_controls,
  selectors: items_selectors_namespaceObject,
  resolvers: items_resolvers_namespaceObject
});
const ITEMS_STORE_NAME = items_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/navigation/constants.js
const navigation_constants_STORE_NAME = 'woocommerce-navigation';
// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(30);

// CONCATENATED MODULE: ./packages/data/build-module/navigation/selectors.js
/**
 * External dependencies
 */

const MENU_ITEMS_HOOK = 'woocommerce_navigation_menu_items';
const getMenuItems = state => {
  return Object(external_wp_hooks_["applyFilters"])(MENU_ITEMS_HOOK, state.menuItems);
};
const getFavorites = state => {
  return state.favorites || [];
};
const isNavigationRequesting = (state, selector) => {
  return state.requesting[selector] || false;
};
const getPersistedQuery = state => {
  return state.persistedQuery || {};
};
// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(12);

// CONCATENATED MODULE: ./packages/data/build-module/navigation/action-types.js
const navigation_action_types_TYPES = {
  ADD_MENU_ITEMS: 'ADD_MENU_ITEMS',
  SET_MENU_ITEMS: 'SET_MENU_ITEMS',
  ON_HISTORY_CHANGE: 'ON_HISTORY_CHANGE',
  ADD_FAVORITE_FAILURE: 'ADD_FAVORITE_FAILURE',
  ADD_FAVORITE_REQUEST: 'ADD_FAVORITE_REQUEST',
  ADD_FAVORITE_SUCCESS: 'ADD_FAVORITE_SUCCESS',
  GET_FAVORITES_FAILURE: 'GET_FAVORITES_FAILURE',
  GET_FAVORITES_REQUEST: 'GET_FAVORITES_REQUEST',
  GET_FAVORITES_SUCCESS: 'GET_FAVORITES_SUCCESS',
  REMOVE_FAVORITE_FAILURE: 'REMOVE_FAVORITE_FAILURE',
  REMOVE_FAVORITE_REQUEST: 'REMOVE_FAVORITE_REQUEST',
  REMOVE_FAVORITE_SUCCESS: 'REMOVE_FAVORITE_SUCCESS'
};
/* harmony default export */ var navigation_action_types = (navigation_action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/navigation/actions.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



function actions_setMenuItems(menuItems) {
  return {
    type: navigation_action_types.SET_MENU_ITEMS,
    menuItems
  };
}
function addMenuItems(menuItems) {
  return {
    type: navigation_action_types.ADD_MENU_ITEMS,
    menuItems
  };
}
function getFavoritesFailure(error) {
  return {
    type: navigation_action_types.GET_FAVORITES_FAILURE,
    error
  };
}
function getFavoritesRequest(favorites) {
  return {
    type: navigation_action_types.GET_FAVORITES_REQUEST,
    favorites
  };
}
function getFavoritesSuccess(favorites) {
  return {
    type: navigation_action_types.GET_FAVORITES_SUCCESS,
    favorites
  };
}
function addFavoriteRequest(favorite) {
  return {
    type: navigation_action_types.ADD_FAVORITE_REQUEST,
    favorite
  };
}
function addFavoriteFailure(favorite, error) {
  return {
    type: navigation_action_types.ADD_FAVORITE_FAILURE,
    favorite,
    error
  };
}
function addFavoriteSuccess(favorite) {
  return {
    type: navigation_action_types.ADD_FAVORITE_SUCCESS,
    favorite
  };
}
function removeFavoriteRequest(favorite) {
  return {
    type: navigation_action_types.REMOVE_FAVORITE_REQUEST,
    favorite
  };
}
function removeFavoriteFailure(favorite, error) {
  return {
    type: navigation_action_types.REMOVE_FAVORITE_FAILURE,
    favorite,
    error
  };
}
function removeFavoriteSuccess(favorite, error) {
  return {
    type: navigation_action_types.REMOVE_FAVORITE_SUCCESS,
    favorite,
    error
  };
}
function* actions_onLoad() {
  yield actions_onHistoryChange();
}
function* actions_onHistoryChange() {
  const persistedQuery = Object(external_wc_navigation_["getPersistedQuery"])();

  if (!Object.keys(persistedQuery).length) {
    return null;
  }

  yield {
    type: navigation_action_types.ON_HISTORY_CHANGE,
    persistedQuery
  };
}
function* addFavorite(favorite) {
  yield addFavoriteRequest(favorite);

  try {
    const results = yield external_wp_apiFetch_default()({
      path: `${WC_ADMIN_NAMESPACE}/navigation/favorites/me`,
      method: 'POST',
      data: {
        item_id: favorite
      }
    });

    if (results) {
      yield addFavoriteSuccess(favorite);
      return results;
    }

    throw new Error();
  } catch (error) {
    yield addFavoriteFailure(favorite, error);
    throw new Error();
  }
}
function* removeFavorite(favorite) {
  yield removeFavoriteRequest(favorite);

  try {
    const results = yield external_wp_apiFetch_default()({
      path: `${WC_ADMIN_NAMESPACE}/navigation/favorites/me`,
      method: 'DELETE',
      data: {
        item_id: favorite
      }
    });

    if (results) {
      yield removeFavoriteSuccess(favorite);
      return results;
    }

    throw new Error();
  } catch (error) {
    yield removeFavoriteFailure(favorite, error);
    throw new Error();
  }
}
// CONCATENATED MODULE: ./packages/data/build-module/navigation/reducer.js
/**
 * Internal dependencies
 */


const navigation_reducer_reducer = (state = {
  error: null,
  menuItems: [],
  favorites: [],
  requesting: {},
  persistedQuery: {}
}, {
  type,
  error,
  favorite,
  favorites,
  menuItems,
  persistedQuery
}) => {
  switch (type) {
    case navigation_action_types.SET_MENU_ITEMS:
      state = { ...state,
        menuItems
      };
      break;

    case navigation_action_types.ADD_MENU_ITEMS:
      state = { ...state,
        menuItems: [...state.menuItems, ...menuItems]
      };
      break;

    case navigation_action_types.ON_HISTORY_CHANGE:
      state = { ...state,
        persistedQuery
      };
      break;

    case navigation_action_types.GET_FAVORITES_FAILURE:
      state = { ...state,
        requesting: { ...state.requesting,
          getFavorites: false
        }
      };
      break;

    case navigation_action_types.GET_FAVORITES_REQUEST:
      state = { ...state,
        requesting: { ...state.requesting,
          getFavorites: true
        }
      };
      break;

    case navigation_action_types.GET_FAVORITES_SUCCESS:
      state = { ...state,
        favorites,
        requesting: { ...state.requesting,
          getFavorites: false
        }
      };
      break;

    case navigation_action_types.ADD_FAVORITE_FAILURE:
      state = { ...state,
        error,
        requesting: { ...state.requesting,
          addFavorite: false
        }
      };
      break;

    case navigation_action_types.ADD_FAVORITE_REQUEST:
      state = { ...state,
        requesting: { ...state.requesting,
          addFavorite: true
        }
      };
      break;

    case navigation_action_types.ADD_FAVORITE_SUCCESS:
      const newFavorites = !state.favorites.includes(favorite) ? [...state.favorites, favorite] : state.favorites;
      state = { ...state,
        favorites: newFavorites,
        menuItems: state.menuItems.map(item => {
          if (item.id === favorite) {
            return { ...item,
              menuId: 'favorites'
            };
          }

          return item;
        }),
        requesting: { ...state.requesting,
          addFavorite: false
        }
      };
      break;

    case navigation_action_types.REMOVE_FAVORITE_FAILURE:
      state = { ...state,
        requesting: { ...state.requesting,
          error,
          removeFavorite: false
        }
      };
      break;

    case navigation_action_types.REMOVE_FAVORITE_REQUEST:
      state = { ...state,
        requesting: { ...state.requesting,
          removeFavorite: true
        }
      };
      break;

    case navigation_action_types.REMOVE_FAVORITE_SUCCESS:
      const filteredFavorites = state.favorites.filter(f => f !== favorite);
      state = { ...state,
        favorites: filteredFavorites,
        menuItems: state.menuItems.map(item => {
          if (item.id === favorite) {
            return { ...item,
              menuId: 'plugins'
            };
          }

          return item;
        }),
        requesting: { ...state.requesting,
          removeFavorite: false
        }
      };
      break;
  }

  return state;
};

/* harmony default export */ var navigation_reducer = (navigation_reducer_reducer);
// CONCATENATED MODULE: ./packages/data/build-module/navigation/resolvers.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function* resolvers_getFavorites() {
  yield getFavoritesRequest();

  try {
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: `${WC_ADMIN_NAMESPACE}/navigation/favorites/me`
    });

    if (results) {
      yield getFavoritesSuccess(results);
      return;
    }

    throw new Error();
  } catch (error) {
    yield getFavoritesFailure(error);
    throw new Error();
  }
}
// CONCATENATED MODULE: ./packages/data/build-module/navigation/dispatchers.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/* harmony default export */ var dispatchers = (async () => {
  const {
    onLoad,
    onHistoryChange
  } = Object(external_wp_data_["dispatch"])(navigation_constants_STORE_NAME);
  await onLoad();
  Object(external_wc_navigation_["addHistoryListener"])(async () => {
    setTimeout(async () => {
      await onHistoryChange();
    }, 0);
  });
});
// CONCATENATED MODULE: ./packages/data/build-module/navigation/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */







Object(external_wp_data_["registerStore"])(navigation_constants_STORE_NAME, {
  reducer: navigation_reducer,
  actions: navigation_actions_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  resolvers: navigation_resolvers_namespaceObject,
  selectors: navigation_selectors_namespaceObject
});
dispatchers();
const NAVIGATION_STORE_NAME = navigation_constants_STORE_NAME;
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

const withNavigationHydration = data => Object(external_wp_compose_["createHigherOrderComponent"])(OriginalComponent => props => {
  const dataRef = Object(external_wp_element_["useRef"])(data);
  Object(external_wp_data_["useSelect"])((select, registry) => {
    if (!dataRef.current) {
      return;
    }

    const {
      isResolving,
      hasFinishedResolution
    } = select(navigation_constants_STORE_NAME);
    const {
      startResolution,
      finishResolution,
      setMenuItems
    } = registry.dispatch(navigation_constants_STORE_NAME);

    if (!isResolving('getMenuItems') && !hasFinishedResolution('getMenuItems')) {
      startResolution('getMenuItems', []);
      setMenuItems(dataRef.current.menuItems);
      finishResolution('getMenuItems', []);
    }
  });
  return Object(external_wp_element_["createElement"])(OriginalComponent, Object.assign({}, props));
}, 'withNavigationHydration');
// CONCATENATED MODULE: ./packages/data/build-module/payment-gateways/action-types.js
var action_types_ACTION_TYPES;

(function (ACTION_TYPES) {
  ACTION_TYPES["GET_PAYMENT_GATEWAYS_REQUEST"] = "GET_PAYMENT_GATEWAYS_REQUEST";
  ACTION_TYPES["GET_PAYMENT_GATEWAYS_SUCCESS"] = "GET_PAYMENT_GATEWAYS_SUCCESS";
  ACTION_TYPES["GET_PAYMENT_GATEWAYS_ERROR"] = "GET_PAYMENT_GATEWAYS_ERROR";
  ACTION_TYPES["UPDATE_PAYMENT_GATEWAY_REQUEST"] = "UPDATE_PAYMENT_GATEWAY_REQUEST";
  ACTION_TYPES["UPDATE_PAYMENT_GATEWAY_SUCCESS"] = "UPDATE_PAYMENT_GATEWAY_SUCCESS";
  ACTION_TYPES["UPDATE_PAYMENT_GATEWAY_ERROR"] = "UPDATE_PAYMENT_GATEWAY_ERROR";
  ACTION_TYPES["GET_PAYMENT_GATEWAY_REQUEST"] = "GET_PAYMENT_GATEWAY_REQUEST";
  ACTION_TYPES["GET_PAYMENT_GATEWAY_SUCCESS"] = "GET_PAYMENT_GATEWAY_SUCCESS";
  ACTION_TYPES["GET_PAYMENT_GATEWAY_ERROR"] = "GET_PAYMENT_GATEWAY_ERROR";
})(action_types_ACTION_TYPES || (action_types_ACTION_TYPES = {}));
// CONCATENATED MODULE: ./packages/data/build-module/payment-gateways/constants.js
const STORE_KEY = 'wc/payment-gateways';
const API_NAMESPACE = 'wc/v3';
// CONCATENATED MODULE: ./packages/data/build-module/payment-gateways/actions.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function getPaymentGatewaysRequest() {
  return {
    type: action_types_ACTION_TYPES.GET_PAYMENT_GATEWAYS_REQUEST
  };
}
function getPaymentGatewaysSuccess(paymentGateways) {
  return {
    type: action_types_ACTION_TYPES.GET_PAYMENT_GATEWAYS_SUCCESS,
    paymentGateways
  };
}
function getPaymentGatewaysError(error) {
  return {
    type: action_types_ACTION_TYPES.GET_PAYMENT_GATEWAYS_ERROR,
    error
  };
}
function getPaymentGatewayRequest() {
  return {
    type: action_types_ACTION_TYPES.GET_PAYMENT_GATEWAY_REQUEST
  };
}
function getPaymentGatewayError(error) {
  return {
    type: action_types_ACTION_TYPES.GET_PAYMENT_GATEWAY_ERROR,
    error
  };
}
function getPaymentGatewaySuccess(paymentGateway) {
  return {
    type: action_types_ACTION_TYPES.GET_PAYMENT_GATEWAY_SUCCESS,
    paymentGateway
  };
}
function updatePaymentGatewaySuccess(paymentGateway) {
  return {
    type: action_types_ACTION_TYPES.UPDATE_PAYMENT_GATEWAY_SUCCESS,
    paymentGateway
  };
}
function updatePaymentGatewayRequest() {
  return {
    type: action_types_ACTION_TYPES.UPDATE_PAYMENT_GATEWAY_REQUEST
  };
}
function updatePaymentGatewayError(error) {
  return {
    type: action_types_ACTION_TYPES.UPDATE_PAYMENT_GATEWAY_ERROR,
    error
  };
}
function* updatePaymentGateway(id, data) {
  try {
    yield updatePaymentGatewayRequest();
    const response = yield Object(external_wp_dataControls_["apiFetch"])({
      method: 'PUT',
      path: API_NAMESPACE + '/payment_gateways/' + id,
      body: JSON.stringify(data)
    });

    if (response && response.id === id) {
      // Update the already loaded payment gateway list with the new data
      yield updatePaymentGatewaySuccess(response);
      return response;
    }
  } catch (e) {
    yield updatePaymentGatewayError(e);
    throw e;
  }
}
// CONCATENATED MODULE: ./packages/data/build-module/payment-gateways/resolvers.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


 // Can be removed in WP 5.9.

const payment_gateways_resolvers_dispatch = external_wp_data_["controls"] && external_wp_data_["controls"].dispatch ? external_wp_data_["controls"].dispatch : external_wp_dataControls_["dispatch"];
function* getPaymentGateways() {
  yield getPaymentGatewaysRequest();

  try {
    const response = yield Object(external_wp_dataControls_["apiFetch"])({
      path: API_NAMESPACE + '/payment_gateways'
    });
    yield getPaymentGatewaysSuccess(response);

    for (let i = 0; i < response.length; i++) {
      yield payment_gateways_resolvers_dispatch(STORE_KEY, 'finishResolution', 'getPaymentGateway', [response[i].id]);
    }
  } catch (e) {
    yield getPaymentGatewaysError(e);
  }
}
function* getPaymentGateway(id) {
  yield getPaymentGatewayRequest();

  try {
    const response = yield Object(external_wp_dataControls_["apiFetch"])({
      path: API_NAMESPACE + '/payment_gateways/' + id
    });

    if (response && response.id) {
      yield getPaymentGatewaySuccess(response);
      return response;
    }
  } catch (e) {
    yield getPaymentGatewayError(e);
  }
}
// CONCATENATED MODULE: ./packages/data/build-module/payment-gateways/selectors.js
function selectors_getPaymentGateway(state, id) {
  return state.paymentGateways.find(paymentGateway => paymentGateway.id === id);
}
function selectors_getPaymentGateways(state) {
  return state.paymentGateways;
}
function selectors_getPaymentGatewayError(state, selector) {
  return state.errors[selector] || null;
}
function isPaymentGatewayUpdating(state) {
  return state.isUpdating || false;
}
// CONCATENATED MODULE: ./packages/data/build-module/payment-gateways/reducer.js
/**
 * Internal dependencies
 */


function updatePaymentGatewayList(state, paymentGateway) {
  const targetIndex = state.paymentGateways.findIndex(gateway => gateway.id === paymentGateway.id);

  if (targetIndex === -1) {
    return { ...state,
      paymentGateways: [...state.paymentGateways, paymentGateway],
      isUpdating: false
    };
  }

  return { ...state,
    paymentGateways: [...state.paymentGateways.slice(0, targetIndex), paymentGateway, ...state.paymentGateways.slice(targetIndex + 1)],
    isUpdating: false
  };
}

const payment_gateways_reducer_reducer = (state = {
  paymentGateways: [],
  isUpdating: false,
  errors: {}
}, payload) => {
  if (payload && 'type' in payload) {
    switch (payload.type) {
      case action_types_ACTION_TYPES.GET_PAYMENT_GATEWAYS_REQUEST:
      case action_types_ACTION_TYPES.GET_PAYMENT_GATEWAY_REQUEST:
        return state;

      case action_types_ACTION_TYPES.GET_PAYMENT_GATEWAYS_SUCCESS:
        return { ...state,
          paymentGateways: payload.paymentGateways
        };

      case action_types_ACTION_TYPES.GET_PAYMENT_GATEWAYS_ERROR:
        return { ...state,
          errors: { ...state.errors,
            getPaymentGateways: payload.error
          }
        };

      case action_types_ACTION_TYPES.GET_PAYMENT_GATEWAY_ERROR:
        return { ...state,
          errors: { ...state.errors,
            getPaymentGateway: payload.error
          }
        };

      case action_types_ACTION_TYPES.UPDATE_PAYMENT_GATEWAY_REQUEST:
        return { ...state,
          isUpdating: true
        };

      case action_types_ACTION_TYPES.UPDATE_PAYMENT_GATEWAY_SUCCESS:
        return updatePaymentGatewayList(state, payload.paymentGateway);

      case action_types_ACTION_TYPES.GET_PAYMENT_GATEWAY_SUCCESS:
        return updatePaymentGatewayList(state, payload.paymentGateway);

      case action_types_ACTION_TYPES.UPDATE_PAYMENT_GATEWAY_ERROR:
        return { ...state,
          errors: { ...state.errors,
            updatePaymentGateway: payload.error
          },
          isUpdating: false
        };
    }
  }

  return state;
};

/* harmony default export */ var payment_gateways_reducer = (payment_gateways_reducer_reducer);
// CONCATENATED MODULE: ./packages/data/build-module/payment-gateways/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






const PAYMENT_GATEWAYS_STORE_NAME = STORE_KEY;
Object(external_wp_data_["registerStore"])(STORE_KEY, {
  actions: payment_gateways_actions_namespaceObject,
  selectors: payment_gateways_selectors_namespaceObject,
  resolvers: payment_gateways_resolvers_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  reducer: payment_gateways_reducer
});
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(9);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./packages/data/build-module/reports/utils.js
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
  const {
    endpoint,
    query,
    limitBy,
    filters = [],
    advancedFilters = {}
  } = options;

  if (query.search) {
    const limitProperties = limitBy || [endpoint];
    return limitProperties.reduce((result, limitProperty) => {
      result[limitProperty] = query[limitProperty];
      return result;
    }, {});
  }

  return filters.map(filter => getQueryFromConfig(filter, advancedFilters, query)).reduce((result, configQuery) => Object.assign(result, configQuery), {});
} // Some stats endpoints don't have interval data, so they can ignore after/before params and omit that part of the response.

const noIntervalEndpoints = ['stock', 'customers'];
/**
 * Add timestamp to advanced filter parameters involving date. The api
 * expects a timestamp for these values similar to `before` and `after`.
 *
 * @param {Object} config - advancedFilters config object.
 * @param {Object} activeFilter - an active filter.
 * @return {Object} - an active filter with timestamp added to date values.
 */

function timeStampFilterDates(config, activeFilter) {
  const advancedFilterConfig = config.filters[activeFilter.key];

  if (Object(external_lodash_["get"])(advancedFilterConfig, ['input', 'component']) !== 'Date') {
    return activeFilter;
  }

  const {
    rule,
    value
  } = activeFilter;
  const timeOfDayMap = {
    after: 'start',
    before: 'end'
  }; // If the value is an array, it signifies "between" values which must have a timestamp
  // appended to each value.

  if (Array.isArray(value)) {
    const [after, before] = value;
    return Object.assign({}, activeFilter, {
      value: [Object(external_wc_date_["appendTimestamp"])(external_moment_default()(after), timeOfDayMap.after), Object(external_wc_date_["appendTimestamp"])(external_moment_default()(before), timeOfDayMap.before)]
    });
  }

  return Object.assign({}, activeFilter, {
    value: Object(external_wc_date_["appendTimestamp"])(external_moment_default()(value), timeOfDayMap[rule])
  });
}
function getQueryFromConfig(config, advancedFilters, query) {
  const queryValue = query[config.param];

  if (!queryValue) {
    return {};
  }

  if (queryValue === 'advanced') {
    const activeFilters = Object(external_wc_navigation_["getActiveFiltersFromQuery"])(query, advancedFilters.filters);

    if (activeFilters.length === 0) {
      return {};
    }

    const filterQuery = Object(external_wc_navigation_["getQueryFromActiveFilters"])(activeFilters.map(filter => timeStampFilterDates(advancedFilters, filter)), {}, advancedFilters.filters);
    return {
      match: query.match || 'all',
      ...filterQuery
    };
  }

  const filter = Object(external_lodash_["find"])(Object(external_wc_navigation_["flattenFilters"])(config.filters), {
    value: queryValue
  });

  if (!filter) {
    return {};
  }

  if (filter.settings && filter.settings.param) {
    const {
      param
    } = filter.settings;

    if (query[param]) {
      return {
        [param]: query[param]
      };
    }

    return {};
  }

  return {
    [config.param]: queryValue
  };
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

  const checkIntervals = !Object(external_lodash_["includes"])(noIntervalEndpoints, endpoint);

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
  const {
    endpoint,
    dataType,
    query,
    fields
  } = options;
  const datesFromQuery = Object(external_wc_date_["getCurrentDates"])(query, options.defaultDateRange);
  const interval = Object(external_wc_date_["getIntervalForQuery"])(query);
  const filterQuery = getFilterQuery(options);
  const end = datesFromQuery[dataType].before;
  const noIntervals = Object(external_lodash_["includes"])(noIntervalEndpoints, endpoint);
  return noIntervals ? { ...filterQuery,
    fields
  } : {
    order: 'asc',
    interval,
    per_page: MAX_PER_PAGE,
    after: Object(external_wc_date_["appendTimestamp"])(datesFromQuery[dataType].after, 'start'),
    before: Object(external_wc_date_["appendTimestamp"])(end, 'end'),
    segmentby: query.segmentby,
    fields,
    ...filterQuery
  };
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
  const {
    endpoint,
    select
  } = options;
  const {
    getReportStats,
    getReportStatsError,
    isResolving
  } = select(reports_constants_STORE_NAME);
  const response = {
    isRequesting: false,
    isError: false,
    totals: {
      primary: null,
      secondary: null
    }
  };
  const primaryQuery = getRequestQuery({ ...options,
    dataType: 'primary'
  }); // Disable eslint rule requiring `getReportStats` to be defined below because the next two statements
  // depend on `getReportStats` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  const primary = getReportStats(endpoint, primaryQuery);

  if (isResolving('getReportStats', [endpoint, primaryQuery])) {
    return { ...response,
      isRequesting: true
    };
  } else if (getReportStatsError(endpoint, primaryQuery)) {
    return { ...response,
      isError: true
    };
  }

  const primaryTotals = primary && primary.data && primary.data.totals || null;
  const secondaryQuery = getRequestQuery({ ...options,
    dataType: 'secondary'
  }); // Disable eslint rule requiring `getReportStats` to be defined below because the next two statements
  // depend on `getReportStats` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  const secondary = getReportStats(endpoint, secondaryQuery);

  if (isResolving('getReportStats', [endpoint, secondaryQuery])) {
    return { ...response,
      isRequesting: true
    };
  } else if (getReportStatsError(endpoint, secondaryQuery)) {
    return { ...response,
      isError: true
    };
  }

  const secondaryTotals = secondary && secondary.data && secondary.data.totals || null;
  return { ...response,
    totals: {
      primary: primaryTotals,
      secondary: secondaryTotals
    }
  };
}
/**
 * Static responses object to avoid returning new references each call.
 */

const reportChartDataResponses = {
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
const EMPTY_ARRAY = [];
/**
 * Cache helper for returning the full chart dataset after multiple
 * requests. Memoized on the request query (string), only called after
 * all the requests have resolved successfully.
 */

const getReportChartDataResponse = Object(external_lodash_["memoize"])((requestString, totals, intervals) => ({
  isEmpty: false,
  isError: false,
  isRequesting: false,
  data: {
    totals,
    intervals
  }
}), (requestString, totals, intervals) => [requestString, totals.length, intervals.length].join(':'));
/**
 * Returns all of the data needed to render a chart with summary numbers on a report page.
 *
 * @param  {Object} options           arguments
 * @param  {string} options.endpoint  Report API Endpoint
 * @param  {string} options.dataType  'primary' or 'secondary'
 * @param  {Object} options.query     Query parameters in the url
 * @param  {Object} options.selector    Instance of @wordpress/select response
 * @param  {Array}  options.limitBy   Properties used to limit the results. It will be used in the API call to send the IDs.
 * @param  {string}  options.defaultDateRange   User specified default date range.
 * @return {Object}  Object containing API request information (response, fetching, and error details)
 */

function getReportChartData(options) {
  const {
    endpoint
  } = options;
  const {
    getReportStats,
    getReportStatsError,
    isResolving
  } = options.selector;
  const requestQuery = getRequestQuery(options); // Disable eslint rule requiring `stats` to be defined below because the next two if statements
  // depend on `getReportStats` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  const stats = getReportStats(endpoint, requestQuery);

  if (isResolving('getReportStats', [endpoint, requestQuery])) {
    return reportChartDataResponses.requesting;
  }

  if (getReportStatsError(endpoint, requestQuery)) {
    return reportChartDataResponses.error;
  }

  if (isReportDataEmpty(stats, endpoint)) {
    return reportChartDataResponses.empty;
  }

  const totals = stats && stats.data && stats.data.totals || null;
  let intervals = stats && stats.data && stats.data.intervals || EMPTY_ARRAY; // If we have more than 100 results for this time period,
  // we need to make additional requests to complete the response.

  if (stats.totalResults > MAX_PER_PAGE) {
    let isFetching = true;
    let isError = false;
    const pagedData = [];
    const totalPages = Math.ceil(stats.totalResults / MAX_PER_PAGE);
    let pagesFetched = 1;

    for (let i = 2; i <= totalPages; i++) {
      const nextQuery = { ...requestQuery,
        page: i
      };

      const _data = getReportStats(endpoint, nextQuery);

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
  const {
    query,
    tableQuery = {}
  } = options;
  const filterQuery = getFilterQuery(options);
  const datesFromQuery = Object(external_wc_date_["getCurrentDates"])(query, options.defaultDateRange);
  const noIntervals = Object(external_lodash_["includes"])(noIntervalEndpoints, options.endpoint);
  return {
    orderby: query.orderby || 'date',
    order: query.order || 'desc',
    after: noIntervals ? undefined : Object(external_wc_date_["appendTimestamp"])(datesFromQuery.primary.after, 'start'),
    before: noIntervals ? undefined : Object(external_wc_date_["appendTimestamp"])(datesFromQuery.primary.before, 'end'),
    page: query.paged || 1,
    per_page: query.per_page || QUERY_DEFAULTS.pageSize,
    ...filterQuery,
    ...tableQuery
  };
}
/**
 * Returns table data needed to render a report page.
 *
 * @param  {Object} options                arguments
 * @param  {string} options.endpoint       Report API Endpoint
 * @param  {Object} options.query          Query parameters in the url
 * @param  {Object} options.selector       Instance of @wordpress/select response
 * @param  {Object} options.tableQuery     Query parameters specific for that endpoint
 * @param  {string}  options.defaultDateRange   User specified default date range.
 * @return {Object} Object    Table data response
 */

function getReportTableData(options) {
  const {
    endpoint
  } = options;
  const {
    getReportItems,
    getReportItemsError,
    hasFinishedResolution
  } = options.selector;
  const tableQuery = getReportTableQuery(options);
  const response = {
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

  const items = getReportItems(endpoint, tableQuery);
  const queryResolved = hasFinishedResolution('getReportItems', [endpoint, tableQuery]);

  if (!queryResolved) {
    return { ...response,
      isRequesting: true
    };
  }

  if (getReportItemsError(endpoint, tableQuery)) {
    return { ...response,
      isError: true
    };
  }

  return { ...response,
    items
  };
}
// CONCATENATED MODULE: ./packages/data/build-module/export/constants.js
/**
 * Internal dependencies
 */
const export_constants_STORE_NAME = 'wc/admin/export';
// EXTERNAL MODULE: ./node_modules/md5/md5.js
var md5 = __webpack_require__(266);
var md5_default = /*#__PURE__*/__webpack_require__.n(md5);

// CONCATENATED MODULE: ./packages/data/build-module/export/utils.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


const hashExportArgs = args => {
  return md5_default()(getResourceName('export', args));
};
// CONCATENATED MODULE: ./packages/data/build-module/export/selectors.js
/**
 * Internal dependencies
 */

const isExportRequesting = (state, selector, selectorArgs) => {
  return Boolean(state.requesting[selector] && state.requesting[selector][hashExportArgs(selectorArgs)]);
};
const getExportId = (state, exportType, exportArgs) => {
  return state.exportIds[exportType] && state.exportIds[exportType][hashExportArgs(exportArgs)];
};
const getError = (state, selector, selectorArgs) => {
  return state.errors[selector] && state.errors[selector][hashExportArgs(selectorArgs)];
};
// CONCATENATED MODULE: ./packages/data/build-module/export/action-types.js
const export_action_types_TYPES = {
  START_EXPORT: 'START_EXPORT',
  SET_EXPORT_ID: 'SET_EXPORT_ID',
  SET_ERROR: 'SET_ERROR',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING'
};
/* harmony default export */ var export_action_types = (export_action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/export/actions.js
/**
 * Internal dependencies
 */



function setExportId(exportType, exportArgs, exportId) {
  return {
    type: export_action_types.SET_EXPORT_ID,
    exportType,
    exportArgs,
    exportId
  };
}
function export_actions_setIsRequesting(selector, selectorArgs, isRequesting) {
  return {
    type: export_action_types.SET_IS_REQUESTING,
    selector,
    selectorArgs,
    isRequesting
  };
}
function export_actions_setError(selector, selectorArgs, error) {
  return {
    type: export_action_types.SET_ERROR,
    selector,
    selectorArgs,
    error
  };
}
function* startExport(type, args) {
  yield export_actions_setIsRequesting('startExport', {
    type,
    args
  }, true);

  try {
    const response = yield fetchWithHeaders({
      path: `${NAMESPACE}/reports/${type}/export`,
      method: 'POST',
      data: {
        report_args: args,
        email: true
      }
    });
    yield export_actions_setIsRequesting('startExport', {
      type,
      args
    }, false);
    const {
      export_id: exportId,
      message
    } = response.data;

    if (exportId) {
      yield setExportId(type, args, exportId);
    } else {
      throw new Error(message);
    }

    return response.data;
  } catch (error) {
    yield export_actions_setError('startExport', {
      type,
      args
    }, error.message);
    yield export_actions_setIsRequesting('startExport', {
      type,
      args
    }, false);
    throw error;
  }
}
// CONCATENATED MODULE: ./packages/data/build-module/export/reducer.js
/**
 * Internal dependencies
 */



const exportReducer = (state = {
  errors: {},
  requesting: {},
  exportMeta: {},
  exportIds: {}
}, {
  error,
  exportArgs,
  exportId,
  exportType,
  isRequesting,
  selector,
  selectorArgs,
  type
}) => {
  switch (type) {
    case export_action_types.SET_IS_REQUESTING:
      return { ...state,
        requesting: { ...state.requesting,
          [selector]: { ...state.requesting[selector],
            [hashExportArgs(selectorArgs)]: isRequesting
          }
        }
      };

    case export_action_types.SET_EXPORT_ID:
      return { ...state,
        exportMeta: { ...state.exportMeta,
          [exportId]: {
            exportType,
            exportArgs
          }
        },
        exportIds: { ...state.exportIds,
          [exportType]: { ...state.exportIds[exportType],
            [hashExportArgs({
              type: exportType,
              args: exportArgs
            })]: exportId
          }
        }
      };

    case export_action_types.SET_ERROR:
      return { ...state,
        errors: { ...state.errors,
          [selector]: { ...state.errors[selector],
            [hashExportArgs(selectorArgs)]: error
          }
        }
      };

    default:
      return state;
  }
};

/* harmony default export */ var export_reducer = (exportReducer);
// CONCATENATED MODULE: ./packages/data/build-module/export/index.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */






Object(external_wp_data_["registerStore"])(export_constants_STORE_NAME, {
  reducer: export_reducer,
  actions: export_actions_namespaceObject,
  controls: build_module_controls,
  selectors: export_selectors_namespaceObject
});
const EXPORT_STORE_NAME = export_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/import/constants.js
/**
 * Internal dependencies
 */
const import_constants_STORE_NAME = 'wc/admin/import';
// CONCATENATED MODULE: ./packages/data/build-module/import/selectors.js
const getImportStarted = state => {
  const {
    activeImport,
    lastImportStartTimestamp
  } = state;
  return {
    activeImport,
    lastImportStartTimestamp
  } || {};
};
const getFormSettings = state => {
  const {
    period,
    skipPrevious
  } = state;
  return {
    period,
    skipPrevious
  } || {};
};
const getImportStatus = (state, query) => {
  const stringifiedQuery = JSON.stringify(query);
  return state.importStatus[stringifiedQuery] || {};
};
const getImportTotals = (state, query) => {
  const {
    importTotals,
    lastImportStartTimestamp
  } = state;
  const stringifiedQuery = JSON.stringify(query);
  return { ...importTotals[stringifiedQuery],
    lastImportStartTimestamp
  } || {};
};
const getImportError = (state, query) => {
  const stringifiedQuery = JSON.stringify(query);
  return state.errors[stringifiedQuery] || false;
};
// CONCATENATED MODULE: ./packages/data/build-module/import/action-types.js
const import_action_types_TYPES = {
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
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


function setImportStarted(activeImport) {
  return {
    type: import_action_types.SET_IMPORT_STARTED,
    activeImport
  };
}
function setImportPeriod(date, dateModified) {
  if (!dateModified) {
    return {
      type: import_action_types.SET_IMPORT_PERIOD,
      date
    };
  }

  return {
    type: import_action_types.SET_IMPORT_DATE,
    date
  };
}
function setSkipPrevious(skipPrevious) {
  return {
    type: import_action_types.SET_SKIP_IMPORTED,
    skipPrevious
  };
}
function setImportStatus(query, importStatus) {
  return {
    type: import_action_types.SET_IMPORT_STATUS,
    importStatus,
    query
  };
}
function setImportTotals(query, importTotals) {
  return {
    type: import_action_types.SET_IMPORT_TOTALS,
    importTotals,
    query
  };
}
function setImportError(query, error) {
  return {
    type: import_action_types.SET_IMPORT_ERROR,
    error,
    query
  };
}
function* updateImportation(path, importStarted = false) {
  yield setImportStarted(importStarted);

  try {
    const response = yield Object(external_wp_dataControls_["apiFetch"])({
      path,
      method: 'POST'
    });
    return response;
  } catch (error) {
    yield setImportError(path, error);
    throw error;
  }
}
// CONCATENATED MODULE: ./packages/data/build-module/import/resolvers.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



function* resolvers_getImportStatus(query) {
  try {
    const url = Object(external_wp_url_["addQueryArgs"])(`${NAMESPACE}/reports/import/status`, Object(external_lodash_["omit"])(query, ['timestamp']));
    const response = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url
    });
    yield setImportStatus(query, response);
  } catch (error) {
    yield setImportError(query, error);
  }
}
function* resolvers_getImportTotals(query) {
  try {
    const url = Object(external_wp_url_["addQueryArgs"])(`${NAMESPACE}/reports/import/totals`, query);
    const response = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url
    });
    yield setImportTotals(query, response);
  } catch (error) {
    yield setImportError(query, error);
  }
}
// CONCATENATED MODULE: ./packages/data/build-module/import/reducer.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



const import_reducer_reducer = (state = {
  activeImport: false,
  importStatus: {},
  importTotals: {},
  errors: {},
  lastImportStartTimestamp: 0,
  period: {
    date: external_moment_default()().format(Object(external_wp_i18n_["__"])('MM/DD/YYYY', 'woocommerce-admin')),
    label: 'all'
  },
  skipPrevious: true
}, {
  type,
  query,
  importStatus,
  importTotals,
  activeImport,
  date,
  error,
  skipPrevious
}) => {
  switch (type) {
    case import_action_types.SET_IMPORT_STARTED:
      state = { ...state,
        activeImport,
        lastImportStartTimestamp: activeImport ? Date.now() : state.lastImportStartTimestamp
      };
      break;

    case import_action_types.SET_IMPORT_PERIOD:
      state = { ...state,
        period: { ...state.period,
          label: date
        },
        activeImport: false
      };
      break;

    case import_action_types.SET_IMPORT_DATE:
      state = { ...state,
        period: {
          date,
          label: 'custom'
        },
        activeImport: false
      };
      break;

    case import_action_types.SET_SKIP_IMPORTED:
      state = { ...state,
        skipPrevious,
        activeImport: false
      };
      break;

    case import_action_types.SET_IMPORT_STATUS:
      state = { ...state,
        importStatus: { ...state.importStatus,
          [JSON.stringify(query)]: importStatus
        },
        errors: { ...state.errors,
          [JSON.stringify(query)]: false
        }
      };
      break;

    case import_action_types.SET_IMPORT_TOTALS:
      state = { ...state,
        importTotals: { ...state.importTotals,
          [JSON.stringify(query)]: importTotals
        }
      };
      break;

    case import_action_types.SET_IMPORT_ERROR:
      state = { ...state,
        errors: { ...state.errors,
          [JSON.stringify(query)]: error
        }
      };
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






Object(external_wp_data_["registerStore"])(import_constants_STORE_NAME, {
  reducer: import_reducer,
  actions: import_actions_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  selectors: import_selectors_namespaceObject,
  resolvers: import_resolvers_namespaceObject
});
const IMPORT_STORE_NAME = import_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/index.js
/**
 * External dependencies
 */






























/***/ }),

/***/ 7:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

(function() { module.exports = window["moment"]; }());

/***/ })

/******/ });