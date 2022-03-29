this["wc"] = this["wc"] || {}; this["wc"]["date"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 465);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports) {

(function() { module.exports = window["moment"]; }());

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(62);
var parse = __webpack_require__(63);
var formats = __webpack_require__(39);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ 39:
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

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var formats = __webpack_require__(39);

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

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isoDateFormat", function() { return isoDateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDateTimeFormat", function() { return defaultDateTimeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "presetValues", function() { return presetValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "periods", function() { return periods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendTimestamp", function() { return appendTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMoment", function() { return toMoment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRangeLabel", function() { return getRangeLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoreTimeZoneMoment", function() { return getStoreTimeZoneMoment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastPeriod", function() { return getLastPeriod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPeriod", function() { return getCurrentPeriod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateParamsFromQuery", function() { return getDateParamsFromQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentDates", function() { return getCurrentDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateDifferenceInDays", function() { return getDateDifferenceInDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousDate", function() { return getPreviousDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllowedIntervalsForQuery", function() { return getAllowedIntervalsForQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIntervalForQuery", function() { return getIntervalForQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartTypeForQuery", function() { return getChartTypeForQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayTicksThreshold", function() { return dayTicksThreshold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekTicksThreshold", function() { return weekTicksThreshold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTableDateFormat", function() { return defaultTableDateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateFormatsForInterval", function() { return getDateFormatsForInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateFormatsForIntervalD3", function() { return getDateFormatsForIntervalD3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateFormatsForIntervalPhp", function() { return getDateFormatsForIntervalPhp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLocaleData", function() { return loadLocaleData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateValidationMessages", function() { return dateValidationMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateDateInputForRange", function() { return validateDateInputForRange; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/**
 * External dependencies
 */




const isoDateFormat = 'YYYY-MM-DD';
const defaultDateTimeFormat = 'YYYY-MM-DDTHH:mm:ss';
/**
 * DateValue Object
 *
 * @typedef  {Object} DateValue - Describes the date range supplied by the date picker.
 * @property {string} label - The translated value of the period.
 * @property {string} range - The human readable value of a date range.
 * @property {moment.Moment} after - Start of the date range.
 * @property {moment.Moment} before - End of the date range.
 */

/**
 * DateParams Object
 *
 * @typedef {Object} DateParams - date parameters derived from query parameters.
 * @property {string} period - period value, ie `last_week`
 * @property {string} compare - compare valuer, ie previous_year
 * @param {moment.Moment|null} after - If the period supplied is "custom", this is the after date
 * @param {moment.Moment|null} before - If the period supplied is "custom", this is the before date
 */

const presetValues = [{
  value: 'today',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Today', 'woocommerce-admin')
}, {
  value: 'yesterday',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Yesterday', 'woocommerce-admin')
}, {
  value: 'week',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Week to date', 'woocommerce-admin')
}, {
  value: 'last_week',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Last week', 'woocommerce-admin')
}, {
  value: 'month',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Month to date', 'woocommerce-admin')
}, {
  value: 'last_month',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Last month', 'woocommerce-admin')
}, {
  value: 'quarter',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Quarter to date', 'woocommerce-admin')
}, {
  value: 'last_quarter',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Last quarter', 'woocommerce-admin')
}, {
  value: 'year',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Year to date', 'woocommerce-admin')
}, {
  value: 'last_year',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Last year', 'woocommerce-admin')
}, {
  value: 'custom',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Custom', 'woocommerce-admin')
}];
const periods = [{
  value: 'previous_period',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Previous period', 'woocommerce-admin')
}, {
  value: 'previous_year',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Previous year', 'woocommerce-admin')
}];
/**
 * Adds timestamp to a string date.
 *
 * @param {moment.Moment} date - Date as a moment object.
 * @param {string} timeOfDay - Either `start`, `now` or `end` of the day.
 * @return {string} - String date with timestamp attached.
 */

const appendTimestamp = (date, timeOfDay) => {
  if (timeOfDay === 'start') {
    return date.startOf('day').format(defaultDateTimeFormat);
  }

  if (timeOfDay === 'now') {
    // Set seconds to 00 to avoid consecutives calls happening before the previous
    // one finished.
    return date.format(defaultDateTimeFormat);
  }

  if (timeOfDay === 'end') {
    return date.endOf('day').format(defaultDateTimeFormat);
  }

  throw new Error('appendTimestamp requires second parameter to be either `start`, `now` or `end`');
};
/**
 * Convert a string to Moment object
 *
 * @param {string} format - localized date string format
 * @param {string} str - date string
 * @return {Object|null} - Moment object representing given string
 */

function toMoment(format, str) {
  if (moment__WEBPACK_IMPORTED_MODULE_0___default.a.isMoment(str)) {
    return str.isValid() ? str : null;
  }

  if (typeof str === 'string') {
    const date = moment__WEBPACK_IMPORTED_MODULE_0___default()(str, [isoDateFormat, format], true);
    return date.isValid() ? date : null;
  }

  throw new Error('toMoment requires a string to be passed as an argument');
}
/**
 * Given two dates, derive a string representation
 *
 * @param {Object} after - start date
 * @param {Object} before - end date
 * @return {string} - text value for the supplied date range
 */

function getRangeLabel(after, before) {
  const isSameYear = after.year() === before.year();
  const isSameMonth = isSameYear && after.month() === before.month();
  const isSameDay = isSameYear && isSameMonth && after.isSame(before, 'day');

  const fullDateFormat = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('MMM D, YYYY', 'woocommerce-admin');

  if (isSameDay) {
    return after.format(fullDateFormat);
  } else if (isSameMonth) {
    const afterDate = after.date();
    return after.format(fullDateFormat).replace(afterDate, `${afterDate} - ${before.date()}`);
  } else if (isSameYear) {
    const monthDayFormat = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('MMM D', 'woocommerce-admin');

    return `${after.format(monthDayFormat)} - ${before.format(fullDateFormat)}`;
  }

  return `${after.format(fullDateFormat)} - ${before.format(fullDateFormat)}`;
}
/**
 * Gets the current time in the store time zone if set.
 *
 * @return {string} - Datetime string.
 */

function getStoreTimeZoneMoment() {
  if (!window.wcSettings || !window.wcSettings.timeZone) {
    return moment__WEBPACK_IMPORTED_MODULE_0___default()();
  }

  if (['+', '-'].includes(window.wcSettings.timeZone.charAt(0))) {
    return moment__WEBPACK_IMPORTED_MODULE_0___default()().utcOffset(window.wcSettings.timeZone);
  }

  return moment__WEBPACK_IMPORTED_MODULE_0___default()().tz(window.wcSettings.timeZone);
}
/**
 * Get a DateValue object for a period prior to the current period.
 *
 * @param {string} period - the chosen period
 * @param {string} compare - `previous_period` or `previous_year`
 * @return {DateValue} -  DateValue data about the selected period
 */

function getLastPeriod(period, compare) {
  const primaryStart = getStoreTimeZoneMoment().startOf(period).subtract(1, period);
  const primaryEnd = primaryStart.clone().endOf(period);
  let secondaryStart;
  let secondaryEnd;

  if (compare === 'previous_period') {
    if (period === 'year') {
      // Subtract two entire periods for years to take into account leap year
      secondaryStart = moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf(period).subtract(2, period);
      secondaryEnd = secondaryStart.clone().endOf(period);
    } else {
      // Otherwise, use days in primary period to figure out how far to go back
      // This is necessary for calculating weeks instead of using `endOf`.
      const daysDiff = primaryEnd.diff(primaryStart, 'days');
      secondaryEnd = primaryStart.clone().subtract(1, 'days');
      secondaryStart = secondaryEnd.clone().subtract(daysDiff, 'days');
    }
  } else if (period === 'week') {
    secondaryStart = primaryStart.clone().subtract(1, 'years');
    secondaryEnd = primaryEnd.clone().subtract(1, 'years');
  } else {
    secondaryStart = primaryStart.clone().subtract(1, 'years');
    secondaryEnd = secondaryStart.clone().endOf(period);
  } // When the period is month, be sure to force end of month to take into account leap year


  if (period === 'month') {
    secondaryEnd = secondaryEnd.clone().endOf('month');
  }

  return {
    primaryStart,
    primaryEnd,
    secondaryStart,
    secondaryEnd
  };
}
/**
 * Get a DateValue object for a curent period. The period begins on the first day of the period,
 * and ends on the current day.
 *
 * @param {string} period - the chosen period
 * @param {string} compare - `previous_period` or `previous_year`
 * @return {DateValue} -  DateValue data about the selected period
 */

function getCurrentPeriod(period, compare) {
  const primaryStart = getStoreTimeZoneMoment().startOf(period);
  const primaryEnd = getStoreTimeZoneMoment();
  const daysSoFar = primaryEnd.diff(primaryStart, 'days');
  let secondaryStart;
  let secondaryEnd;

  if (compare === 'previous_period') {
    secondaryStart = primaryStart.clone().subtract(1, period);
    secondaryEnd = primaryEnd.clone().subtract(1, period);
  } else {
    secondaryStart = primaryStart.clone().subtract(1, 'years'); // Set the end time to 23:59:59.

    secondaryEnd = secondaryStart.clone().add(daysSoFar + 1, 'days').subtract(1, 'seconds');
  }

  return {
    primaryStart,
    primaryEnd,
    secondaryStart,
    secondaryEnd
  };
}
/**
 * Get a DateValue object for a period described by a period, compare value, and start/end
 * dates, for custom dates.
 *
 * @param {string} period - the chosen period
 * @param {string} compare - `previous_period` or `previous_year`
 * @param {Object} [after] - after date if custom period
 * @param {Object} [before] - before date if custom period
 * @return {DateValue} - DateValue data about the selected period
 */

const getDateValue = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["memoize"])((period, compare, after, before) => {
  switch (period) {
    case 'today':
      return getCurrentPeriod('day', compare);

    case 'yesterday':
      return getLastPeriod('day', compare);

    case 'week':
      return getCurrentPeriod('week', compare);

    case 'last_week':
      return getLastPeriod('week', compare);

    case 'month':
      return getCurrentPeriod('month', compare);

    case 'last_month':
      return getLastPeriod('month', compare);

    case 'quarter':
      return getCurrentPeriod('quarter', compare);

    case 'last_quarter':
      return getLastPeriod('quarter', compare);

    case 'year':
      return getCurrentPeriod('year', compare);

    case 'last_year':
      return getLastPeriod('year', compare);

    case 'custom':
      const difference = before.diff(after, 'days');

      if (compare === 'previous_period') {
        const secondaryEnd = after.clone().subtract(1, 'days');
        const secondaryStart = secondaryEnd.clone().subtract(difference, 'days');
        return {
          primaryStart: after,
          primaryEnd: before,
          secondaryStart,
          secondaryEnd
        };
      }

      return {
        primaryStart: after,
        primaryEnd: before,
        secondaryStart: after.clone().subtract(1, 'years'),
        secondaryEnd: before.clone().subtract(1, 'years')
      };
  }
}, (period, compare, after, before) => [period, compare, after && after.format(), before && before.format()].join(':'));
/**
 * Memoized internal logic of getDateParamsFromQuery().
 *
 * @param {string} period - period value, ie `last_week`
 * @param {string} compare - compare value, ie `previous_year`
 * @param {string} after - date in iso date format, ie `2018-07-03`
 * @param {string} before - date in iso date format, ie `2018-07-03`
 * @param {string} defaultDateRange - the store's default date range
 * @return {Object} - date parameters derived from query parameters with added defaults
 */

const getDateParamsFromQueryMemoized = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["memoize"])((period, compare, after, before, defaultDateRange) => {
  if (period && compare) {
    return {
      period,
      compare,
      after: after ? moment__WEBPACK_IMPORTED_MODULE_0___default()(after) : null,
      before: before ? moment__WEBPACK_IMPORTED_MODULE_0___default()(before) : null
    };
  }

  const queryDefaults = Object(qs__WEBPACK_IMPORTED_MODULE_3__["parse"])(defaultDateRange.replace(/&amp;/g, '&'));
  return {
    period: queryDefaults.period,
    compare: queryDefaults.compare,
    after: queryDefaults.after ? moment__WEBPACK_IMPORTED_MODULE_0___default()(queryDefaults.after) : null,
    before: queryDefaults.before ? moment__WEBPACK_IMPORTED_MODULE_0___default()(queryDefaults.before) : null
  };
}, (period, compare, after, before, defaultDateRange) => [period, compare, after, before, defaultDateRange].join(':'));
/**
 * Add default date-related parameters to a query object
 *
 * @param {Object} query - query object
 * @param {string} query.period - period value, ie `last_week`
 * @param {string} query.compare - compare value, ie `previous_year`
 * @param {string} query.after - date in iso date format, ie `2018-07-03`
 * @param {string} query.before - date in iso date format, ie `2018-07-03`
 * @param {string} defaultDateRange - the store's default date range
 * @return {DateParams} - date parameters derived from query parameters with added defaults
 */

const getDateParamsFromQuery = function (query) {
  let defaultDateRange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'period=month&compare=previous_year';
  const {
    period,
    compare,
    after,
    before
  } = query;
  return getDateParamsFromQueryMemoized(period, compare, after, before, defaultDateRange);
};
/**
 * Memoized internal logic of getCurrentDates().
 *
 * @param {string} period - period value, ie `last_week`
 * @param {string} compare - compare value, ie `previous_year`
 * @param {Object} primaryStart - primary query start DateTime, in Moment instance.
 * @param {Object} primaryEnd - primary query start DateTime, in Moment instance.
 * @param {Object} secondaryStart - primary query start DateTime, in Moment instance.
 * @param {Object} secondaryEnd - primary query start DateTime, in Moment instance.
 * @return {{primary: DateValue, secondary: DateValue}} - Primary and secondary DateValue objects
 */

const getCurrentDatesMemoized = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["memoize"])((period, compare, primaryStart, primaryEnd, secondaryStart, secondaryEnd) => ({
  primary: {
    label: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(presetValues, item => item.value === period).label,
    range: getRangeLabel(primaryStart, primaryEnd),
    after: primaryStart,
    before: primaryEnd
  },
  secondary: {
    label: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(periods, item => item.value === compare).label,
    range: getRangeLabel(secondaryStart, secondaryEnd),
    after: secondaryStart,
    before: secondaryEnd
  }
}), (period, compare, primaryStart, primaryEnd, secondaryStart, secondaryEnd) => [period, compare, primaryStart && primaryStart.format(), primaryEnd && primaryEnd.format(), secondaryStart && secondaryStart.format(), secondaryEnd && secondaryEnd.format()].join(':'));
/**
 * Get Date Value Objects for a primary and secondary date range
 *
 * @param {Object} query - query object
 * @param {string} query.period - period value, ie `last_week`
 * @param {string} query.compare - compare value, ie `previous_year`
 * @param {string} query.after - date in iso date format, ie `2018-07-03`
 * @param {string} query.before - date in iso date format, ie `2018-07-03`
 * @param {string} defaultDateRange - the store's default date range
 * @return {{primary: DateValue, secondary: DateValue}} - Primary and secondary DateValue objects
 */

const getCurrentDates = function (query) {
  let defaultDateRange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'period=month&compare=previous_year';
  const {
    period,
    compare,
    after,
    before
  } = getDateParamsFromQuery(query, defaultDateRange);
  const {
    primaryStart,
    primaryEnd,
    secondaryStart,
    secondaryEnd
  } = getDateValue(period, compare, after, before);
  return getCurrentDatesMemoized(period, compare, primaryStart, primaryEnd, secondaryStart, secondaryEnd);
};
/**
 * Calculates the date difference between two dates. Used in calculating a matching date for previous period.
 *
 * @param {string} date - Date to compare
 * @param {string} date2 - Seconary date to compare
 * @return {number}  - Difference in days.
 */

const getDateDifferenceInDays = (date, date2) => {
  const _date = moment__WEBPACK_IMPORTED_MODULE_0___default()(date);

  const _date2 = moment__WEBPACK_IMPORTED_MODULE_0___default()(date2);

  return _date.diff(_date2, 'days');
};
/**
 * Get the previous date for either the previous period of year.
 *
 * @param {string} date - Base date
 * @param {string} date1 - primary start
 * @param {string} date2 - secondary start
 * @param {string} compare - `previous_period`  or `previous_year`
 * @param {string} interval - interval
 * @return {Object}  - Calculated date
 */

const getPreviousDate = (date, date1, date2, compare, interval) => {
  const dateMoment = moment__WEBPACK_IMPORTED_MODULE_0___default()(date);

  if (compare === 'previous_year') {
    return dateMoment.clone().subtract(1, 'years');
  }

  const _date1 = moment__WEBPACK_IMPORTED_MODULE_0___default()(date1);

  const _date2 = moment__WEBPACK_IMPORTED_MODULE_0___default()(date2);

  const difference = _date1.diff(_date2, interval);

  return dateMoment.clone().subtract(difference, interval);
};
/**
 * Returns the allowed selectable intervals for a specific query.
 *
 * @param  {Object} query Current query
 * @param {string} defaultDateRange - the store's default date range
 * @return {Array} Array containing allowed intervals.
 */

function getAllowedIntervalsForQuery(query) {
  let defaultDateRange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'period=&compare=previous_year';
  const {
    period
  } = getDateParamsFromQuery(query, defaultDateRange);
  let allowed = [];

  if (period === 'custom') {
    const {
      primary
    } = getCurrentDates(query);
    const differenceInDays = getDateDifferenceInDays(primary.before, primary.after);

    if (differenceInDays >= 365) {
      allowed = ['day', 'week', 'month', 'quarter', 'year'];
    } else if (differenceInDays >= 90) {
      allowed = ['day', 'week', 'month', 'quarter'];
    } else if (differenceInDays >= 28) {
      allowed = ['day', 'week', 'month'];
    } else if (differenceInDays >= 7) {
      allowed = ['day', 'week'];
    } else if (differenceInDays > 1 && differenceInDays < 7) {
      allowed = ['day'];
    } else {
      allowed = ['hour', 'day'];
    }
  } else {
    switch (period) {
      case 'today':
      case 'yesterday':
        allowed = ['hour', 'day'];
        break;

      case 'week':
      case 'last_week':
        allowed = ['day'];
        break;

      case 'month':
      case 'last_month':
        allowed = ['day', 'week'];
        break;

      case 'quarter':
      case 'last_quarter':
        allowed = ['day', 'week', 'month'];
        break;

      case 'year':
      case 'last_year':
        allowed = ['day', 'week', 'month', 'quarter'];
        break;

      default:
        allowed = ['day'];
        break;
    }
  }

  return allowed;
}
/**
 * Returns the current interval to use.
 *
 * @param {Object} query Current query
 * @param {string} defaultDateRange - the store's default date range
 * @return {string} Current interval.
 */

function getIntervalForQuery(query) {
  let defaultDateRange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'period=&compare=previous_year';
  const allowed = getAllowedIntervalsForQuery(query, defaultDateRange);
  const defaultInterval = allowed[0];
  let current = query.interval || defaultInterval;

  if (query.interval && !allowed.includes(query.interval)) {
    current = defaultInterval;
  }

  return current;
}
/**
 * Returns the current chart type to use.
 *
 * @param {Object} query Current query
 * @param {string} query.chartType
 * @return {string} Current chart type.
 */

function getChartTypeForQuery(_ref) {
  let {
    chartType
  } = _ref;

  if (['line', 'bar'].includes(chartType)) {
    return chartType;
  }

  return 'line';
}
const dayTicksThreshold = 63;
const weekTicksThreshold = 9;
const defaultTableDateFormat = 'm/d/Y';
/**
 * Returns date formats for the current interval.
 *
 * @param {string} interval Interval to get date formats for.
 * @param {number} [ticks] Number of ticks the axis will have.
 * @param {Object} [option] Options
 * @param {string} [option.type] Date format type, d3 or php, defaults to d3.
 * @return {string} Current interval.
 */

function getDateFormatsForInterval(interval) {
  let ticks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    type: 'd3'
  };

  switch (option.type) {
    case 'php':
      return getDateFormatsForIntervalPhp(interval, ticks);

    case 'd3':
    default:
      return getDateFormatsForIntervalD3(interval, ticks);
  }
}
/**
 * Returns d3 date formats for the current interval.
 * See https://github.com/d3/d3-time-format for chart formats.
 *
 * @param  {string} interval Interval to get date formats for.
 * @param  {number}    [ticks] Number of ticks the axis will have.
 * @return {string} Current interval.
 */

function getDateFormatsForIntervalD3(interval) {
  let ticks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let screenReaderFormat = '%B %-d, %Y';
  let tooltipLabelFormat = '%B %-d, %Y';
  let xFormat = '%Y-%m-%d';
  let x2Format = '%b %Y';
  let tableFormat = defaultTableDateFormat;

  switch (interval) {
    case 'hour':
      screenReaderFormat = '%_I%p %B %-d, %Y';
      tooltipLabelFormat = '%_I%p %b %-d, %Y';
      xFormat = '%_I%p';
      x2Format = '%b %-d, %Y';
      tableFormat = 'h A';
      break;

    case 'day':
      if (ticks < dayTicksThreshold) {
        xFormat = '%-d';
      } else {
        xFormat = '%b';
        x2Format = '%Y';
      }

      break;

    case 'week':
      if (ticks < weekTicksThreshold) {
        xFormat = '%-d';
        x2Format = '%b %Y';
      } else {
        xFormat = '%b';
        x2Format = '%Y';
      } // eslint-disable-next-line @wordpress/i18n-translator-comments


      screenReaderFormat = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Week of %B %-d, %Y', 'woocommerce-admin'); // eslint-disable-next-line @wordpress/i18n-translator-comments

      tooltipLabelFormat = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Week of %B %-d, %Y', 'woocommerce-admin');
      break;

    case 'quarter':
    case 'month':
      screenReaderFormat = '%B %Y';
      tooltipLabelFormat = '%B %Y';
      xFormat = '%b';
      x2Format = '%Y';
      break;

    case 'year':
      screenReaderFormat = '%Y';
      tooltipLabelFormat = '%Y';
      xFormat = '%Y';
      break;
  }

  return {
    screenReaderFormat,
    tooltipLabelFormat,
    xFormat,
    x2Format,
    tableFormat
  };
}
/**
 * Returns php date formats for the current interval.
 * See see https://www.php.net/manual/en/datetime.format.php.
 *
 * @param  {string} interval Interval to get date formats for.
 * @param  {number}    [ticks] Number of ticks the axis will have.
 * @return {string} Current interval.
 */

function getDateFormatsForIntervalPhp(interval) {
  let ticks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let screenReaderFormat = 'F j, Y';
  let tooltipLabelFormat = 'F j, Y';
  let xFormat = 'Y-m-d';
  let x2Format = 'M Y';
  let tableFormat = defaultTableDateFormat;

  switch (interval) {
    case 'hour':
      screenReaderFormat = 'gA F j, Y';
      tooltipLabelFormat = 'gA M j, Y';
      xFormat = 'gA';
      x2Format = 'M j, Y';
      tableFormat = 'h A';
      break;

    case 'day':
      if (ticks < dayTicksThreshold) {
        xFormat = 'j';
      } else {
        xFormat = 'M';
        x2Format = 'Y';
      }

      break;

    case 'week':
      if (ticks < weekTicksThreshold) {
        xFormat = 'j';
        x2Format = 'M Y';
      } else {
        xFormat = 'M';
        x2Format = 'Y';
      } // Since some alphabet letters have php associated formats, we need to escape them first.


      const escapedWeekOfStr = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Week of', 'woocommerce-admin').replace(/(\w)/g, '\\$1');

      screenReaderFormat = `${escapedWeekOfStr} F j, Y`;
      tooltipLabelFormat = `${escapedWeekOfStr} F j, Y`;
      break;

    case 'quarter':
    case 'month':
      screenReaderFormat = 'F Y';
      tooltipLabelFormat = 'F Y';
      xFormat = 'M';
      x2Format = 'Y';
      break;

    case 'year':
      screenReaderFormat = 'Y';
      tooltipLabelFormat = 'Y';
      xFormat = 'Y';
      break;
  }

  return {
    screenReaderFormat,
    tooltipLabelFormat,
    xFormat,
    x2Format,
    tableFormat
  };
}
/**
 * Gutenberg's moment instance is loaded with i18n values, which are
 * PHP date formats, ie 'LLL: "F j, Y g:i a"'. Override those with translations
 * of moment style js formats.
 *
 * @param {Object} config Locale config object, from store settings.
 * @param {string} config.userLocale
 * @param {Array} config.weekdaysShort
 */

function loadLocaleData(_ref2) {
  let {
    userLocale,
    weekdaysShort
  } = _ref2;

  // Don't update if the wp locale hasn't been set yet, like in unit tests, for instance.
  if (moment__WEBPACK_IMPORTED_MODULE_0___default.a.locale() !== 'en') {
    moment__WEBPACK_IMPORTED_MODULE_0___default.a.updateLocale(userLocale, {
      longDateFormat: {
        L: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('MM/DD/YYYY', 'woocommerce-admin'),
        LL: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('MMMM D, YYYY', 'woocommerce-admin'),
        LLL: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('D MMMM YYYY LT', 'woocommerce-admin'),
        LLLL: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('dddd, D MMMM YYYY LT', 'woocommerce-admin'),
        LT: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('HH:mm', 'woocommerce-admin')
      },
      weekdaysMin: weekdaysShort
    });
  }
}
const dateValidationMessages = {
  invalid: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Invalid date', 'woocommerce-admin'),
  future: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select a date in the past', 'woocommerce-admin'),
  startAfterEnd: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Start date must be before end date', 'woocommerce-admin'),
  endBeforeStart: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Start date must be before end date', 'woocommerce-admin')
};
/**
 * @typedef {Object} validatedDate
 * @property {Object|null} date - A resulting Moment date object or null, if invalid
 * @property {string} error - An optional error message if date is invalid
 */

/**
 * Validate text input supplied for a date range.
 *
 * @param {string} type - Designate beginning or end of range, eg `before` or `after`.
 * @param {string} value - User input value
 * @param {Object|null} [before] - If already designated, the before date parameter
 * @param {Object|null} [after] - If already designated, the after date parameter
 * @param {string} format - The expected date format in a user's locale
 * @return {Object} validatedDate - validated date object
 */

function validateDateInputForRange(type, value, before, after, format) {
  const date = toMoment(format, value);

  if (!date) {
    return {
      date: null,
      error: dateValidationMessages.invalid
    };
  }

  if (moment__WEBPACK_IMPORTED_MODULE_0___default()().isBefore(date, 'day')) {
    return {
      date: null,
      error: dateValidationMessages.future
    };
  }

  if (type === 'after' && before && date.isAfter(before, 'day')) {
    return {
      date: null,
      error: dateValidationMessages.startAfterEnd
    };
  }

  if (type === 'before' && after && date.isBefore(after, 'day')) {
    return {
      date: null,
      error: dateValidationMessages.endBeforeStart
    };
  }

  return {
    date
  };
}

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(45);
var formats = __webpack_require__(39);
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

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(45);

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