this["wc"] = this["wc"] || {}; this["wc"]["explat"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 507);
/******/ })
/************************************************************************/
/******/ ({

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(63);
var parse = __webpack_require__(64);
var formats = __webpack_require__(38);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

exports.parse = parse;
exports.serialize = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {}
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim()
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;

    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError('option maxAge is invalid')
    }

    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var formats = __webpack_require__(38);

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "initializeExPlat", function() { return /* binding */ initializeExPlat; });
__webpack_require__.d(__webpack_exports__, "loadExperimentAssignment", function() { return /* binding */ loadExperimentAssignment; });
__webpack_require__.d(__webpack_exports__, "dangerouslyGetExperimentAssignment", function() { return /* binding */ dangerouslyGetExperimentAssignment; });
__webpack_require__.d(__webpack_exports__, "useExperiment", function() { return /* binding */ build_module_useExperiment; });
__webpack_require__.d(__webpack_exports__, "Experiment", function() { return /* binding */ build_module_Experiment; });
__webpack_require__.d(__webpack_exports__, "ProvideExperimentData", function() { return /* binding */ build_module_ProvideExperimentData; });

// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

// CONCATENATED MODULE: ./node_modules/@automattic/explat-client/dist/esm/internal/timing.js
var MILLISECONDS_PER_SECOND = 1000;
var lastNow = Date.now();
/**
 * Returns the time in miliseconds.
 * A strictly increasing version of Date.now()
 *
 * Gives us some minimimal guarentees about user clocks.
 */
function monotonicNow() {
    var maybeNow = Date.now();
    lastNow = lastNow < maybeNow ? maybeNow : lastNow + 1;
    return lastNow;
}
/**
 * Timeouts a promise. Returns timeoutValue in event of timeout.
 *
 * @param promise The promise to timeout
 * @param timeoutMilliseconds The timeout time in milliseconds
 */
function timeoutPromise(promise, timeoutMilliseconds) {
    return Promise.race([
        promise,
        new Promise(function (_res, rej) {
            return setTimeout(function () { return rej(new Error('Promise has timed-out.')); }, timeoutMilliseconds);
        }),
    ]);
}
/**
 * Wraps an async function so that if it is called multiple times it will just return the same promise - until the promise is fulfilled.
 *
 * Once the promise has been fulfilled it will reset.
 *
 * @param f The function to wrap
 */
function asyncOneAtATime(f) {
    var lastPromise = null;
    return function () {
        if (!lastPromise) {
            lastPromise = f().finally(function () {
                lastPromise = null;
            });
        }
        return lastPromise;
    };
}

// CONCATENATED MODULE: ./node_modules/@automattic/explat-client/dist/esm/internal/experiment-assignments.js

/**
 * Check if an ExperimentAssignment is still alive (as in the TTL).
 *
 * @param experimentAssignment The experiment assignment to check
 */
function isAlive(experimentAssignment) {
    return (monotonicNow() <
        experimentAssignment.ttl * MILLISECONDS_PER_SECOND +
            experimentAssignment.retrievedTimestamp);
}
/**
 * The minimum ttl (in seconds) for any ExperimentAssignment.
 * This limits the number of requests being sent to our server in the case of our server failing to return a working assignment
 * and will be the minimum amount of time in-between requests per experiment.
 */
var minimumTtl = 60;
/**
 * A fallback ExperimentAssignment we return when we can't retrieve one.
 * As it is used in fallback situations, this function must never throw.
 *
 * @param experimentName The name of the experiment
 * @param ttl The time-to-live for the ExperimentAssignment, defaults to 60s
 */
var createFallbackExperimentAssignment = function (experimentName, ttl) {
    if (ttl === void 0) { ttl = minimumTtl; }
    return ({
        experimentName: experimentName,
        variationName: null,
        retrievedTimestamp: monotonicNow(),
        ttl: Math.max(minimumTtl, ttl),
        isFallbackExperimentAssignment: true,
    });
};

// CONCATENATED MODULE: ./node_modules/@automattic/explat-client/dist/esm/internal/validations.js
function isObject(x) {
    return typeof x === 'object' && x !== null;
}
/**
 * Test if a piece of data is a valid name
 *
 * @param name The data to test
 */
function isName(name) {
    return typeof name === 'string' && name !== '';
}
/**
 * Test if a piece of data is a valid experimentAssignment
 *
 * @param experimentAssignment The data to test
 */
function isExperimentAssignment(experimentAssignment) {
    return (isObject(experimentAssignment) &&
        isName(experimentAssignment['experimentName']) &&
        (isName(experimentAssignment['variationName']) ||
            experimentAssignment['variationName'] === null) &&
        typeof experimentAssignment['retrievedTimestamp'] === 'number' &&
        typeof experimentAssignment['ttl'] === 'number' &&
        experimentAssignment['ttl'] !== 0);
}
/**
 * Basic validation of ExperimentAssignment
 * Throws if invalid, returns the experimentAssignment if valid.
 *
 * @param experimentAssignment The data to validate
 */
function validateExperimentAssignment(experimentAssignment) {
    if (!isExperimentAssignment(experimentAssignment)) {
        throw new Error('Invalid ExperimentAssignment');
    }
    return experimentAssignment;
}

// CONCATENATED MODULE: ./node_modules/@automattic/explat-client/dist/esm/internal/local-storage.js
/**
 * A polyfilled LocalStorage.
 * The polyfill is required at least for testing.
 */
var localStorage = typeof window !== 'undefined' && window.localStorage
    ? window.localStorage
    : // LocalStorage polyfill from https://gist.github.com/juliocesar/926500
        {
            _data: {},
            setItem: function (id, val) {
                this._data[id] = val;
            },
            getItem: function (id) {
                return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
            },
            removeItem: function (id) {
                delete this._data[id];
            },
            clear: function () {
                this._data = {};
            },
        };
/* harmony default export */ var local_storage = (localStorage);

// CONCATENATED MODULE: ./node_modules/@automattic/explat-client/dist/esm/internal/requests.js





/**
 * Exported for testing only.
 *
 * @param response The response data
 */
function isFetchExperimentAssignmentResponse(response) {
    return (isObject(response) &&
        isObject(response.variations) &&
        typeof response.ttl === 'number' &&
        0 < response.ttl);
}
function validateFetchExperimentAssignmentResponse(response) {
    if (isFetchExperimentAssignmentResponse(response)) {
        return response;
    }
    throw new Error('Invalid FetchExperimentAssignmentResponse');
}
// We cache the anonId and add it to requests to ensure users that have recently
// crossed the logged-out/logged-in boundry have a consistent assignment.
//
// There can be issues otherwise as matching anonId to userId is only eventually
// consistent.
var localStorageLastAnonIdKey = 'explat-last-anon-id';
var localStorageLastAnonIdRetrievalTimeKey = 'explat-last-anon-id-retrieval-time';
var lastAnonIdExpiryTimeMs = 24 * 60 * 60 * 1000; // 24 hours
/**
 * INTERNAL USE ONLY
 *
 * Runs the getAnonId provided cached by LocalStorage:
 * - Returns the result of getAnonId if it can
 * - Otherwise, within the expiry time, returns the cached anonId
 *
 * Exported for testing.
 *
 * @param getAnonId The getAnonId function
 */
var localStorageCachedGetAnonId = function (getAnonId) { return __awaiter(void 0, void 0, void 0, function () {
    var anonId, maybeStoredAnonId, maybeStoredRetrievalTime;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getAnonId()];
            case 1:
                anonId = _a.sent();
                if (anonId) {
                    local_storage.setItem(localStorageLastAnonIdKey, anonId);
                    local_storage.setItem(localStorageLastAnonIdRetrievalTimeKey, String(monotonicNow()));
                    return [2 /*return*/, anonId];
                }
                maybeStoredAnonId = local_storage.getItem(localStorageLastAnonIdKey);
                maybeStoredRetrievalTime = local_storage.getItem(localStorageLastAnonIdRetrievalTimeKey);
                if (maybeStoredAnonId &&
                    maybeStoredRetrievalTime &&
                    monotonicNow() - parseInt(maybeStoredRetrievalTime, 10) < lastAnonIdExpiryTimeMs) {
                    return [2 /*return*/, maybeStoredAnonId];
                }
                return [2 /*return*/, null];
        }
    });
}); };
/**
 * Fetch an ExperimentAssignment
 *
 * @param config The config object providing dependecy injection.
 * @param experimentName The experiment name to fetch
 */
function fetchExperimentAssignment(config, experimentName) {
    return __awaiter(this, void 0, void 0, function () {
        var retrievedTimestamp, _a, variations, responseTtl, _b, _c, _d, ttl, fetchedExperimentAssignments, fetchedExperimentAssignment;
        var _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    retrievedTimestamp = monotonicNow();
                    _b = validateFetchExperimentAssignmentResponse;
                    _d = (_c = config).fetchExperimentAssignment;
                    _e = {};
                    return [4 /*yield*/, localStorageCachedGetAnonId(config.getAnonId)];
                case 1: return [4 /*yield*/, _d.apply(_c, [(_e.anonId = _f.sent(),
                            _e.experimentName = experimentName,
                            _e)])];
                case 2:
                    _a = _b.apply(void 0, [_f.sent()]), variations = _a.variations, responseTtl = _a.ttl;
                    ttl = Math.max(minimumTtl, responseTtl);
                    fetchedExperimentAssignments = Object.entries(variations)
                        .map(function (_a) {
                        var experimentName = _a[0], variationName = _a[1];
                        return ({
                            experimentName: experimentName,
                            variationName: variationName,
                            retrievedTimestamp: retrievedTimestamp,
                            ttl: ttl,
                        });
                    })
                        .map(validateExperimentAssignment);
                    if (fetchedExperimentAssignments.length > 1) {
                        throw new Error('Received multiple experiment assignments while trying to fetch exactly one.');
                    }
                    if (fetchedExperimentAssignments.length === 0) {
                        return [2 /*return*/, createFallbackExperimentAssignment(experimentName, ttl)];
                    }
                    fetchedExperimentAssignment = fetchedExperimentAssignments[0];
                    if (fetchedExperimentAssignment.experimentName !== experimentName) {
                        throw new Error("Newly fetched ExperimentAssignment's experiment name does not match request.");
                    }
                    if (!isAlive(fetchedExperimentAssignment)) {
                        throw new Error("Newly fetched experiment isn't alive.");
                    }
                    return [2 /*return*/, fetchedExperimentAssignment];
            }
        });
    });
}

// CONCATENATED MODULE: ./node_modules/@automattic/explat-client/dist/esm/internal/experiment-assignment-store.js


var localStorageExperimentAssignmentKeyPrefix = 'explat-experiment-';
var localStorageExperimentAssignmentKey = function (experimentName) {
    return localStorageExperimentAssignmentKeyPrefix + "-" + experimentName;
};
/**
 * Store an ExperimentAssignment.
 *
 * @param experimentAssignment The ExperimentAssignment
 */
function storeExperimentAssignment(experimentAssignment) {
    validateExperimentAssignment(experimentAssignment);
    var previousExperimentAssignment = retrieveExperimentAssignment(experimentAssignment.experimentName);
    if (previousExperimentAssignment &&
        experimentAssignment.retrievedTimestamp < previousExperimentAssignment.retrievedTimestamp) {
        throw new Error('Trying to store an older experiment assignment than is present in the store, likely a race condition.');
    }
    local_storage.setItem(localStorageExperimentAssignmentKey(experimentAssignment.experimentName), JSON.stringify(experimentAssignment));
}
/**
 * Retrieve an ExperimentAssignment.
 *
 * @param experimentName The experiment name.
 */
function retrieveExperimentAssignment(experimentName) {
    var maybeExperimentAssignmentJson = local_storage.getItem(localStorageExperimentAssignmentKey(experimentName));
    if (!maybeExperimentAssignmentJson) {
        return undefined;
    }
    return validateExperimentAssignment(JSON.parse(maybeExperimentAssignmentJson));
}

// CONCATENATED MODULE: ./node_modules/@automattic/explat-client/dist/esm/create-explat-client.js







/**
 * The number of milliseconds before we abandon fetching an experiment
 */
var EXPERIMENT_FETCH_TIMEOUT = 10000;
var create_explat_client_MissingExperimentAssignmentError = /** @class */ (function (_super) {
    __extends(MissingExperimentAssignmentError, _super);
    function MissingExperimentAssignmentError(message) {
        var _this = _super.call(this, message) || this;
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, MissingExperimentAssignmentError);
        }
        _this.name = 'MissingExperimentAssignmentError';
        return _this;
    }
    return MissingExperimentAssignmentError;
}(Error));

/**
 * Create an ExPlat Client
 *
 * @param config Configuration object
 */
function createExPlatClient(config) {
    var _this = this;
    if (typeof window === 'undefined') {
        throw new Error('Running outside of a browser context.');
    }
    /**
     * This bit of code is the heavy lifting behind loadExperimentAssignment, allowing it to be used intuitively.
     *
     * Using asyncOneAtATime, is how we ensure for each experiment that there is only ever one fetch process occuring.
     *
     *
     * @param experimentName The experiment's name
     */
    var createWrappedExperimentAssignmentFetchAndStore = function (experimentName) {
        return asyncOneAtATime(function () { return __awaiter(_this, void 0, void 0, function () {
            var fetchedExperimentAssignment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetchExperimentAssignment(config, experimentName)];
                    case 1:
                        fetchedExperimentAssignment = _a.sent();
                        storeExperimentAssignment(fetchedExperimentAssignment);
                        return [2 /*return*/, fetchedExperimentAssignment];
                }
            });
        }); });
    };
    var experimentNameToWrappedExperimentAssignmentFetchAndStore = {};
    var safeLogError = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        try {
            config.logError.apply(config, args);
        }
        catch (e) { }
    };
    return {
        loadExperimentAssignment: function (experimentName) { return __awaiter(_this, void 0, void 0, function () {
            var storedExperimentAssignment, fetchedExperimentAssignment, initialError_1, storedExperimentAssignment, fallbackExperimentAssignment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (!isName(experimentName)) {
                            throw new Error("Invalid experimentName: \"" + experimentName + "\"");
                        }
                        storedExperimentAssignment = retrieveExperimentAssignment(experimentName);
                        if (storedExperimentAssignment &&
                            isAlive(storedExperimentAssignment)) {
                            return [2 /*return*/, storedExperimentAssignment];
                        }
                        if (experimentNameToWrappedExperimentAssignmentFetchAndStore[experimentName] === undefined) {
                            experimentNameToWrappedExperimentAssignmentFetchAndStore[experimentName] = createWrappedExperimentAssignmentFetchAndStore(experimentName);
                        }
                        return [4 /*yield*/, timeoutPromise(experimentNameToWrappedExperimentAssignmentFetchAndStore[experimentName](), EXPERIMENT_FETCH_TIMEOUT)];
                    case 1:
                        fetchedExperimentAssignment = _a.sent();
                        if (!fetchedExperimentAssignment) {
                            throw new Error("Could not fetch ExperimentAssignment");
                        }
                        return [2 /*return*/, fetchedExperimentAssignment];
                    case 2:
                        initialError_1 = _a.sent();
                        safeLogError({
                            message: initialError_1.message,
                            experimentName: experimentName,
                            source: 'loadExperimentAssignment-initialError',
                        });
                        return [3 /*break*/, 3];
                    case 3:
                        // Fetching failed and we're not in development mode.
                        try {
                            storedExperimentAssignment = retrieveExperimentAssignment(experimentName);
                            if (storedExperimentAssignment) {
                                return [2 /*return*/, storedExperimentAssignment];
                            }
                            fallbackExperimentAssignment = createFallbackExperimentAssignment(experimentName);
                            storeExperimentAssignment(fallbackExperimentAssignment);
                            return [2 /*return*/, fallbackExperimentAssignment];
                        }
                        catch (fallbackError) {
                            safeLogError({
                                message: fallbackError.message,
                                experimentName: experimentName,
                                source: 'loadExperimentAssignment-fallbackError',
                            });
                            // As a last resort we just keep it very simple
                            return [2 /*return*/, createFallbackExperimentAssignment(experimentName)];
                        }
                        return [2 /*return*/];
                }
            });
        }); },
        dangerouslyGetExperimentAssignment: function (experimentName) {
            try {
                if (!isName(experimentName)) {
                    throw new Error("Invalid experimentName: " + experimentName);
                }
                var storedExperimentAssignment = retrieveExperimentAssignment(experimentName);
                if (!storedExperimentAssignment) {
                    throw new Error("Trying to dangerously get an ExperimentAssignment that hasn't loaded.");
                }
                // We want to be loud in development mode to help pick up any issues:
                if (config.isDevelopmentMode) {
                    // Highlight when we dangerously get an experiment too soon to when we load one:
                    if (storedExperimentAssignment &&
                        monotonicNow() - storedExperimentAssignment.retrievedTimestamp < 1000) {
                        safeLogError({
                            message: "Warning: Trying to dangerously get an ExperimentAssignment too soon after loading it.",
                            experimentName: experimentName,
                            source: 'dangerouslyGetExperimentAssignment',
                        });
                    }
                }
                return storedExperimentAssignment;
            }
            catch (error) {
                safeLogError({
                    message: error.message,
                    experimentName: experimentName,
                    source: 'dangerouslyGetExperimentAssignment-error',
                });
                return createFallbackExperimentAssignment(experimentName);
            }
        },
        config: config,
    };
}
/**
 * A dummy ExPlat client to sub in under SSR contexts
 *
 * @param config The config
 */
function createSsrSafeDummyExPlatClient(config) {
    var _this = this;
    return {
        loadExperimentAssignment: function (experimentName) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                config.logError({
                    message: 'Attempting to load ExperimentAssignment in SSR context',
                    experimentName: experimentName,
                });
                return [2 /*return*/, createFallbackExperimentAssignment(experimentName)];
            });
        }); },
        dangerouslyGetExperimentAssignment: function (experimentName) {
            config.logError({
                message: 'Attempting to dangerously get ExperimentAssignment in SSR context',
                experimentName: experimentName,
            });
            return createFallbackExperimentAssignment(experimentName);
        },
        config: config,
    };
}

// CONCATENATED MODULE: ./node_modules/@automattic/explat-client/dist/esm/index.js

var esm_createExPlatClient = typeof window === 'undefined' ? createSsrSafeDummyExPlatClient : createExPlatClient;


// CONCATENATED MODULE: ./node_modules/@automattic/explat-client-react-helpers/node_modules/tslib/tslib.es6.js
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
/* global Reflect, Promise */

var tslib_es6_extendStatics = function(d, b) {
    tslib_es6_extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return tslib_es6_extendStatics(d, b);
};

function tslib_es6_extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    tslib_es6_extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var tslib_es6_assign = function() {
    tslib_es6_assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return tslib_es6_assign.apply(this, arguments);
}

function tslib_es6_rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function tslib_es6_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function tslib_es6_param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function tslib_es6_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function tslib_es6_awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function tslib_es6_generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var tslib_es6_createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function tslib_es6_exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) tslib_es6_createBinding(o, m, p);
}

function tslib_es6_values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function tslib_es6_read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function tslib_es6_spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(tslib_es6_read(arguments[i]));
    return ar;
}

/** @deprecated */
function tslib_es6_spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function tslib_es6_await(v) {
    return this instanceof tslib_es6_await ? (this.v = v, this) : new tslib_es6_await(v);
}

function tslib_es6_asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof tslib_es6_await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function tslib_es6_asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: tslib_es6_await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function tslib_es6_asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof tslib_es6_values === "function" ? tslib_es6_values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function tslib_es6_makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function tslib_es6_importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) tslib_es6_createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function tslib_es6_importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function tslib_es6_classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function tslib_es6_classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(5);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// CONCATENATED MODULE: ./node_modules/@automattic/explat-client-react-helpers/dist/esm/index.js

/**
 * External dependencies
 */

var defaultExperimentOptions = {
    isEligible: true,
};
function createExPlatClientReactHelpers(exPlatClient) {
    var useExperiment = function (experimentName, providedOptions) {
        if (providedOptions === void 0) { providedOptions = {}; }
        var options = tslib_es6_assign(tslib_es6_assign({}, defaultExperimentOptions), providedOptions);
        var previousExperimentName = Object(external_React_["useState"])(experimentName)[0];
        var _a = Object(external_React_["useState"])([
            true,
            null,
        ]), state = _a[0], setState = _a[1];
        Object(external_React_["useEffect"])(function () {
            var isSubscribed = true;
            if (options.isEligible) {
                exPlatClient.loadExperimentAssignment(experimentName).then(function (experimentAssignment) {
                    if (isSubscribed) {
                        setState([false, experimentAssignment]);
                    }
                });
            }
            return function () {
                isSubscribed = false;
            };
        }, [experimentName, options.isEligible]);
        if (experimentName !== previousExperimentName &&
            !previousExperimentName.startsWith('explat_test')) {
            exPlatClient.config.logError({
                message: '[ExPlat] useExperiment: experimentName should never change between renders!',
            });
        }
        if (!options.isEligible) {
            return [false, null];
        }
        return state;
    };
    var Experiment = function (_a) {
        var defaultExperience = _a.defaultExperience, treatmentExperience = _a.treatmentExperience, loadingExperience = _a.loadingExperience, experimentName = _a.name, options = _a.options;
        var _b = useExperiment(experimentName, options), isLoading = _b[0], experimentAssignment = _b[1];
        if (isLoading) {
            return external_React_default.a.createElement(external_React_default.a.Fragment, null, loadingExperience);
        }
        else if (!(experimentAssignment === null || experimentAssignment === void 0 ? void 0 : experimentAssignment.variationName)) {
            return external_React_default.a.createElement(external_React_default.a.Fragment, null, defaultExperience);
        }
        return external_React_default.a.createElement(external_React_default.a.Fragment, null, treatmentExperience);
    };
    var ProvideExperimentData = function (_a) {
        var children = _a.children, experimentName = _a.name, options = _a.options;
        var _b = useExperiment(experimentName, options), isLoading = _b[0], experimentAssignment = _b[1];
        return children(isLoading, experimentAssignment);
    };
    return {
        useExperiment: useExperiment,
        Experiment: Experiment,
        ProvideExperimentData: ProvideExperimentData,
    };
}

// CONCATENATED MODULE: ./packages/explat/build-module/utils.js
/**
 * Boolean determining if environment is development.
 */
const isDevelopmentMode = "production" === 'development';
//# sourceMappingURL=utils.js.map
// CONCATENATED MODULE: ./packages/explat/build-module/error.js
/**
 * Internal dependencies
 */

const logError = error => {
  const onLoggingError = e => {
    if (isDevelopmentMode) {
      console.error('[ExPlat] Unable to send error to server:', e); // eslint-disable-line no-console
    }
  };

  try {
    const {
      message,
      ...properties
    } = error;
    const logStashError = {
      message,
      properties: { ...properties,
        context: 'explat',
        explat_client: 'woocommerce'
      }
    };

    if (isDevelopmentMode) {
      console.error('[ExPlat] ', error.message, error); // eslint-disable-line no-console
    } else {
      var _window$wcTracks;

      if (!((_window$wcTracks = window.wcTracks) !== null && _window$wcTracks !== void 0 && _window$wcTracks.isEnabled)) {
        throw new Error(`Tracking is disabled, can't send error to the server`);
      }

      const body = new window.FormData();
      body.append('error', JSON.stringify(logStashError));
      window.fetch('https://public-api.wordpress.com/rest/v1.1/js-error', {
        method: 'POST',
        body
      }).catch(onLoggingError);
    }
  } catch (e) {
    onLoggingError(e);
  }
};
//# sourceMappingURL=error.js.map
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(31);

// CONCATENATED MODULE: ./packages/explat/build-module/assignment.js
/**
 * External dependencies
 */

const EXPLAT_VERSION = '0.1.0';
const assignment_fetchExperimentAssignment = async ({
  experimentName,
  anonId
}) => {
  var _window$wcTracks;

  if (!((_window$wcTracks = window.wcTracks) !== null && _window$wcTracks !== void 0 && _window$wcTracks.isEnabled)) {
    throw new Error(`Tracking is disabled, can't fetch experimentAssignment`);
  }

  const params = Object(lib["stringify"])({
    experiment_name: experimentName,
    anon_id: anonId !== null && anonId !== void 0 ? anonId : undefined
  });
  const response = await window.fetch(`https://public-api.wordpress.com/wpcom/v2/experiments/${EXPLAT_VERSION}/assignments/woocommerce?${params}`);
  return await response.json();
};
//# sourceMappingURL=assignment.js.map
// EXTERNAL MODULE: ./packages/explat/node_modules/cookie/index.js
var cookie = __webpack_require__(311);
var cookie_default = /*#__PURE__*/__webpack_require__.n(cookie);

// CONCATENATED MODULE: ./packages/explat/build-module/anon.js
/**
 * External dependencies
 */

let initializeAnonIdPromise = null;
const anonIdPollingIntervalMilliseconds = 50;
const anonIdPollingIntervalMaxAttempts = 100; // 50 * 100 = 5000 = 5 seconds

/**
 * Gather w.js anonymous cookie, tk_ai
 */

const readAnonCookie = () => {
  return cookie_default.a.parse(document.cookie).tk_ai || null;
};
/**
 * Initializes the anonId:
 * - Polls for AnonId receival
 * - Should only be called once at startup
 * - Happens to be safe to call multiple times if it is necessary to reset the anonId - something like this was necessary for testing.
 *
 * This purely for boot-time initialization, in usual circumstances it will be retrieved within 100-300ms, it happens in parallel booting
 * so should only delay experiment loading that much for boot-time experiments. In some circumstances such as a very slow connection this
 * can take a lot longer.
 *
 * The state of initializeAnonIdPromise should be used rather than the return of this function.
 * The return is only avaliable to make this easier to test.
 *
 * Throws on error.
 */

const initializeAnonId = async () => {
  let attempt = 0;
  initializeAnonIdPromise = new Promise(res => {
    const poll = () => {
      const anonId = readAnonCookie();

      if (typeof anonId === 'string' && anonId !== '') {
        res(anonId);
        return;
      }

      if (anonIdPollingIntervalMaxAttempts - 1 <= attempt) {
        res(null);
        return;
      }

      attempt = attempt + 1;
      setTimeout(poll, anonIdPollingIntervalMilliseconds);
    };

    poll();
  });
  return initializeAnonIdPromise;
};
const anon_getAnonId = async () => {
  var _window$wcTracks;

  if (!((_window$wcTracks = window.wcTracks) !== null && _window$wcTracks !== void 0 && _window$wcTracks.isEnabled)) {
    return null;
  }

  return await initializeAnonIdPromise;
};
//# sourceMappingURL=anon.js.map
// CONCATENATED MODULE: ./packages/explat/build-module/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */





const initializeExPlat = () => {
  var _window$wcTracks;

  if ((_window$wcTracks = window.wcTracks) !== null && _window$wcTracks !== void 0 && _window$wcTracks.isEnabled) {
    initializeAnonId().catch(e => logError({
      message: e.message
    }));
  }
};
initializeExPlat();
const build_module_exPlatClient = esm_createExPlatClient({
  fetchExperimentAssignment: assignment_fetchExperimentAssignment,
  getAnonId: anon_getAnonId,
  logError: logError,
  isDevelopmentMode: isDevelopmentMode
});
const {
  loadExperimentAssignment,
  dangerouslyGetExperimentAssignment
} = build_module_exPlatClient;
const exPlatClientReactHelpers = createExPlatClientReactHelpers(build_module_exPlatClient);
const {
  useExperiment: build_module_useExperiment,
  Experiment: build_module_Experiment,
  ProvideExperimentData: build_module_ProvideExperimentData
} = exPlatClientReactHelpers;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(44);
var formats = __webpack_require__(38);
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        var value = typeof key === 'object' && key.value !== undefined ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
            : prefix + (allowDots ? '.' + key : '[' + key + ']');

        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(44);

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ })

/******/ });