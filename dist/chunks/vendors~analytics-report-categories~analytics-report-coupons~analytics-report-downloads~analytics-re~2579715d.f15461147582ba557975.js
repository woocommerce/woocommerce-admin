(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~analytics-report-categories~analytics-report-coupons~analytics-report-downloads~analytics-re~2579715d"],{

/***/ "./node_modules/@wordpress/date/build-module/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@wordpress/date/build-module/index.js ***!
  \************************************************************/
/*! exports provided: setSettings, __experimentalGetSettings, format, date, gmdate, dateI18n, gmdateI18n, isInTheFuture, getDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSettings", function() { return setSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__experimentalGetSettings", function() { return __experimentalGetSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "date", function() { return date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gmdate", function() { return gmdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateI18n", function() { return dateI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gmdateI18n", function() { return gmdateI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInTheFuture", function() { return isInTheFuture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDate", function() { return getDate; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_timezone_moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment-timezone/moment-timezone */ "./node_modules/moment-timezone/moment-timezone.js");
/* harmony import */ var moment_timezone_moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone_moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment_timezone_moment_timezone_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment-timezone/moment-timezone-utils */ "./node_modules/moment-timezone/moment-timezone-utils.js");
/* harmony import */ var moment_timezone_moment_timezone_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_timezone_moment_timezone_utils__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External dependencies
 */



/** @typedef {import('moment').Moment} Moment */

var WP_ZONE = 'WP'; // This regular expression tests positive for UTC offsets as described in ISO 8601.
// See: https://en.wikipedia.org/wiki/ISO_8601#Time_offsets_from_UTC

var VALID_UTC_OFFSET = /^[+-][0-1][0-9](:?[0-9][0-9])?$/; // Changes made here will likely need to be made in `lib/client-assets.php` as
// well because it uses the `setSettings()` function to change these settings.

var settings = {
  l10n: {
    locale: 'en',
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    meridiem: {
      am: 'am',
      pm: 'pm',
      AM: 'AM',
      PM: 'PM'
    },
    relative: {
      future: '%s from now',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    }
  },
  formats: {
    time: 'g: i a',
    date: 'F j, Y',
    datetime: 'F j, Y g: i a',
    datetimeAbbreviated: 'M j, Y g: i a'
  },
  timezone: {
    offset: '0',
    string: ''
  }
};
/**
 * Adds a locale to moment, using the format supplied by `wp_localize_script()`.
 *
 * @param {Object} dateSettings Settings, including locale data.
 */

function setSettings(dateSettings) {
  settings = dateSettings; // Backup and restore current locale.

  var currentLocale = moment__WEBPACK_IMPORTED_MODULE_0___default.a.locale();
  moment__WEBPACK_IMPORTED_MODULE_0___default.a.updateLocale(dateSettings.l10n.locale, {
    // Inherit anything missing from the default locale.
    parentLocale: currentLocale,
    months: dateSettings.l10n.months,
    monthsShort: dateSettings.l10n.monthsShort,
    weekdays: dateSettings.l10n.weekdays,
    weekdaysShort: dateSettings.l10n.weekdaysShort,
    meridiem: function meridiem(hour, minute, isLowercase) {
      if (hour < 12) {
        return isLowercase ? dateSettings.l10n.meridiem.am : dateSettings.l10n.meridiem.AM;
      }

      return isLowercase ? dateSettings.l10n.meridiem.pm : dateSettings.l10n.meridiem.PM;
    },
    longDateFormat: {
      LT: dateSettings.formats.time,
      LTS: null,
      L: null,
      LL: dateSettings.formats.date,
      LLL: dateSettings.formats.datetime,
      LLLL: null
    },
    // From human_time_diff?
    // Set to `(number, withoutSuffix, key, isFuture) => {}` instead.
    relativeTime: dateSettings.l10n.relative
  });
  moment__WEBPACK_IMPORTED_MODULE_0___default.a.locale(currentLocale);
  setupWPTimezone();
}
/**
 * Returns the currently defined date settings.
 *
 * @return {Object} Settings, including locale data.
 */

function __experimentalGetSettings() {
  return settings;
}

function setupWPTimezone() {
  // Create WP timezone based off dateSettings.
  moment__WEBPACK_IMPORTED_MODULE_0___default.a.tz.add(moment__WEBPACK_IMPORTED_MODULE_0___default.a.tz.pack({
    name: WP_ZONE,
    abbrs: [WP_ZONE],
    untils: [null],
    offsets: [-settings.timezone.offset * 60 || 0]
  }));
} // Date constants.

/**
 * Number of seconds in one minute.
 *
 * @type {number}
 */


var MINUTE_IN_SECONDS = 60;
/**
 * Number of minutes in one hour.
 *
 * @type {number}
 */

var HOUR_IN_MINUTES = 60;
/**
 * Number of seconds in one hour.
 *
 * @type {number}
 */

var HOUR_IN_SECONDS = 60 * MINUTE_IN_SECONDS;
/**
 * Map of PHP formats to Moment.js formats.
 *
 * These are used internally by {@link wp.date.format}, and are either
 * a string representing the corresponding Moment.js format code, or a
 * function which returns the formatted string.
 *
 * This should only be used through {@link wp.date.format}, not
 * directly.
 *
 * @type {Object}
 */

var formatMap = {
  // Day
  d: 'DD',
  D: 'ddd',
  j: 'D',
  l: 'dddd',
  N: 'E',

  /**
   * Gets the ordinal suffix.
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {string} Formatted date.
   */
  S: function S(momentDate) {
    // Do - D
    var num = momentDate.format('D');
    var withOrdinal = momentDate.format('Do');
    return withOrdinal.replace(num, '');
  },
  w: 'd',

  /**
   * Gets the day of the year (zero-indexed).
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {string} Formatted date.
   */
  z: function z(momentDate) {
    // DDD - 1
    return '' + parseInt(momentDate.format('DDD'), 10) - 1;
  },
  // Week
  W: 'W',
  // Month
  F: 'MMMM',
  m: 'MM',
  M: 'MMM',
  n: 'M',

  /**
   * Gets the days in the month.
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {string} Formatted date.
   */
  t: function t(momentDate) {
    return momentDate.daysInMonth();
  },
  // Year

  /**
   * Gets whether the current year is a leap year.
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {string} Formatted date.
   */
  L: function L(momentDate) {
    return momentDate.isLeapYear() ? '1' : '0';
  },
  o: 'GGGG',
  Y: 'YYYY',
  y: 'YY',
  // Time
  a: 'a',
  A: 'A',

  /**
   * Gets the current time in Swatch Internet Time (.beats).
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {string} Formatted date.
   */
  B: function B(momentDate) {
    var timezoned = moment__WEBPACK_IMPORTED_MODULE_0___default()(momentDate).utcOffset(60);
    var seconds = parseInt(timezoned.format('s'), 10),
        minutes = parseInt(timezoned.format('m'), 10),
        hours = parseInt(timezoned.format('H'), 10);
    return parseInt((seconds + minutes * MINUTE_IN_SECONDS + hours * HOUR_IN_SECONDS) / 86.4, 10);
  },
  g: 'h',
  G: 'H',
  h: 'hh',
  H: 'HH',
  i: 'mm',
  s: 'ss',
  u: 'SSSSSS',
  v: 'SSS',
  // Timezone
  e: 'zz',

  /**
   * Gets whether the timezone is in DST currently.
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {string} Formatted date.
   */
  I: function I(momentDate) {
    return momentDate.isDST() ? '1' : '0';
  },
  O: 'ZZ',
  P: 'Z',
  T: 'z',

  /**
   * Gets the timezone offset in seconds.
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {string} Formatted date.
   */
  Z: function Z(momentDate) {
    // Timezone offset in seconds.
    var offset = momentDate.format('Z');
    var sign = offset[0] === '-' ? -1 : 1;
    var parts = offset.substring(1).split(':');
    return sign * (parts[0] * HOUR_IN_MINUTES + parts[1]) * MINUTE_IN_SECONDS;
  },
  // Full date/time
  c: 'YYYY-MM-DDTHH:mm:ssZ',
  // .toISOString
  r: 'ddd, D MMM YYYY HH:mm:ss ZZ',
  U: 'X'
};
/**
 * Formats a date. Does not alter the date's timezone.
 *
 * @param {string}                  dateFormat PHP-style formatting string.
 *                                             See php.net/date.
 * @param {Date|string|Moment|null} dateValue  Date object or string,
 *                                             parsable by moment.js.
 *
 * @return {string} Formatted date.
 */

function format(dateFormat) {
  var dateValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var i, char;
  var newFormat = [];
  var momentDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(dateValue);

  for (i = 0; i < dateFormat.length; i++) {
    char = dateFormat[i]; // Is this an escape?

    if ('\\' === char) {
      // Add next character, then move on.
      i++;
      newFormat.push('[' + dateFormat[i] + ']');
      continue;
    }

    if (char in formatMap) {
      if (typeof formatMap[char] !== 'string') {
        // If the format is a function, call it.
        newFormat.push('[' + formatMap[char](momentDate) + ']');
      } else {
        // Otherwise, add as a formatting string.
        newFormat.push(formatMap[char]);
      }
    } else {
      newFormat.push('[' + char + ']');
    }
  } // Join with [] between to separate characters, and replace
  // unneeded separators with static text.


  newFormat = newFormat.join('[]');
  return momentDate.format(newFormat);
}
/**
 * Formats a date (like `date()` in PHP).
 *
 * @param {string}                  dateFormat PHP-style formatting string.
 *                                             See php.net/date.
 * @param {Date|string|Moment|null} dateValue  Date object or string, parsable
 *                                             by moment.js.
 * @param {string|number|null}      timezone   Timezone to output result in or a
 *                                             UTC offset. Defaults to timezone from
 *                                             site.
 *
 * @see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 * @see https://en.wikipedia.org/wiki/ISO_8601#Time_offsets_from_UTC
 *
 * @return {string} Formatted date in English.
 */

function date(dateFormat) {
  var dateValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var timezone = arguments.length > 2 ? arguments[2] : undefined;
  var dateMoment = buildMoment(dateValue, timezone);
  return format(dateFormat, dateMoment);
}
/**
 * Formats a date (like `date()` in PHP), in the UTC timezone.
 *
 * @param {string}                  dateFormat PHP-style formatting string.
 *                                             See php.net/date.
 * @param {Date|string|Moment|null} dateValue  Date object or string,
 *                                             parsable by moment.js.
 *
 * @return {string} Formatted date in English.
 */

function gmdate(dateFormat) {
  var dateValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var dateMoment = moment__WEBPACK_IMPORTED_MODULE_0___default()(dateValue).utc();
  return format(dateFormat, dateMoment);
}
/**
 * Formats a date (like `wp_date()` in PHP), translating it into site's locale.
 *
 * Backward Compatibility Notice: if `timezone` is set to `true`, the function
 * behaves like `gmdateI18n`.
 *
 * @param {string}                     dateFormat PHP-style formatting string.
 *                                                See php.net/date.
 * @param {Date|string|Moment|null}    dateValue  Date object or string, parsable by
 *                                                moment.js.
 * @param {string|number|boolean|null} timezone   Timezone to output result in or a
 *                                                UTC offset. Defaults to timezone from
 *                                                site. Notice: `boolean` is effectively
 *                                                deprecated, but still supported for
 *                                                backward compatibility reasons.
 *
 * @see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 * @see https://en.wikipedia.org/wiki/ISO_8601#Time_offsets_from_UTC
 *
 * @return {string} Formatted date.
 */

function dateI18n(dateFormat) {
  var dateValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var timezone = arguments.length > 2 ? arguments[2] : undefined;

  if (true === timezone) {
    return gmdateI18n(dateFormat, dateValue);
  }

  if (false === timezone) {
    timezone = undefined;
  }

  var dateMoment = buildMoment(dateValue, timezone);
  dateMoment.locale(settings.l10n.locale);
  return format(dateFormat, dateMoment);
}
/**
 * Formats a date (like `wp_date()` in PHP), translating it into site's locale
 * and using the UTC timezone.
 *
 * @param {string}                  dateFormat PHP-style formatting string.
 *                                             See php.net/date.
 * @param {Date|string|Moment|null} dateValue  Date object or string,
 *                                             parsable by moment.js.
 *
 * @return {string} Formatted date.
 */

function gmdateI18n(dateFormat) {
  var dateValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var dateMoment = moment__WEBPACK_IMPORTED_MODULE_0___default()(dateValue).utc();
  dateMoment.locale(settings.l10n.locale);
  return format(dateFormat, dateMoment);
}
/**
 * Check whether a date is considered in the future according to the WordPress settings.
 *
 * @param {string} dateValue Date String or Date object in the Defined WP Timezone.
 *
 * @return {boolean} Is in the future.
 */

function isInTheFuture(dateValue) {
  var now = moment__WEBPACK_IMPORTED_MODULE_0___default.a.tz(WP_ZONE);
  var momentObject = moment__WEBPACK_IMPORTED_MODULE_0___default.a.tz(dateValue, WP_ZONE);
  return momentObject.isAfter(now);
}
/**
 * Create and return a JavaScript Date Object from a date string in the WP timezone.
 *
 * @param {string?} dateString Date formatted in the WP timezone.
 *
 * @return {Date} Date
 */

function getDate(dateString) {
  if (!dateString) {
    return moment__WEBPACK_IMPORTED_MODULE_0___default.a.tz(WP_ZONE).toDate();
  }

  return moment__WEBPACK_IMPORTED_MODULE_0___default.a.tz(dateString, WP_ZONE).toDate();
}
/**
 * Creates a moment instance using the given timezone or, if none is provided, using global settings.
 *
 * @param {Date|string|Moment|null} dateValue Date object or string, parsable
 *                                            by moment.js.
 * @param {string|number|null}      timezone  Timezone to output result in or a
 *                                            UTC offset. Defaults to timezone from
 *                                            site.
 *
 * @see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 * @see https://en.wikipedia.org/wiki/ISO_8601#Time_offsets_from_UTC
 *
 * @return {Moment} a moment instance.
 */

function buildMoment(dateValue) {
  var timezone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var dateMoment = moment__WEBPACK_IMPORTED_MODULE_0___default()(dateValue);

  if (timezone && !isUTCOffset(timezone)) {
    return dateMoment.tz(timezone);
  }

  if (timezone && isUTCOffset(timezone)) {
    return dateMoment.utcOffset(timezone);
  }

  if (settings.timezone.string) {
    return dateMoment.tz(settings.timezone.string);
  }

  return dateMoment.utcOffset(settings.timezone.offset);
}
/**
 * Returns whether a certain UTC offset is valid or not.
 *
 * @param {number|string} offset a UTC offset.
 *
 * @return {boolean} whether a certain UTC offset is valid or not.
 */


function isUTCOffset(offset) {
  if ('number' === typeof offset) {
    return true;
  }

  return VALID_UTC_OFFSET.test(offset);
}

setupWPTimezone();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/moment-timezone/moment-timezone-utils.js":
/*!***************************************************************!*\
  !*** ./node_modules/moment-timezone/moment-timezone-utils.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/timmyc/vagrant-local/www/woo-one/public_html/wp-content/plugins/woocommerce-admin/node_modules/moment-timezone/moment-timezone-utils.js'");

/***/ }),

/***/ "./node_modules/moment-timezone/moment-timezone.js":
/*!*********************************************************!*\
  !*** ./node_modules/moment-timezone/moment-timezone.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/timmyc/vagrant-local/www/woo-one/public_html/wp-content/plugins/woocommerce-admin/node_modules/moment-timezone/moment-timezone.js'");

/***/ })

}]);
//# sourceMappingURL=vendors~analytics-report-categories~analytics-report-coupons~analytics-report-downloads~analytics-re~2579715d.f15461147582ba557975.min.js.map