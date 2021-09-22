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
/******/ 	return __webpack_require__(__webpack_require__.s = 585);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ 101:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["hooks"]; }());

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return STORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PAYPAL_NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return pluginNames; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

var STORE_NAME = 'wc/admin/plugins';
var PAYPAL_NAMESPACE = '/wc-paypal/v1';
/**
 * Plugin slugs and names as key/value pairs.
 */

var pluginNames = {
  'facebook-for-woocommerce': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Facebook for WooCommerce', 'woocommerce-admin'),
  jetpack: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Jetpack', 'woocommerce-admin'),
  'klarna-checkout-for-woocommerce': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Klarna Checkout for WooCommerce', 'woocommerce-admin'),
  'klarna-payments-for-woocommerce': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Klarna Payments for WooCommerce', 'woocommerce-admin'),
  'mailchimp-for-woocommerce': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Mailchimp for WooCommerce', 'woocommerce-admin'),
  'creative-mail-by-constant-contact': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Creative Mail for WooCommerce', 'woocommerce-admin'),
  'woocommerce-gateway-paypal-express-checkout': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('WooCommerce PayPal', 'woocommerce-admin'),
  'woocommerce-gateway-stripe': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('WooCommerce Stripe', 'woocommerce-admin'),
  'woocommerce-payfast-gateway': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('WooCommerce PayFast', 'woocommerce-admin'),
  'woocommerce-payments': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('WooCommerce Payments', 'woocommerce-admin'),
  'woocommerce-services': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('WooCommerce Shipping & Tax', 'woocommerce-admin'),
  'woocommerce-services:shipping': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('WooCommerce Shipping & Tax', 'woocommerce-admin'),
  'woocommerce-services:tax': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('WooCommerce Shipping & Tax', 'woocommerce-admin'),
  'woocommerce-shipstation-integration': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('WooCommerce ShipStation Gateway', 'woocommerce-admin'),
  'woocommerce-mercadopago': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Mercado Pago payments for WooCommerce', 'woocommerce-admin'),
  'google-listings-and-ads': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Google Listings and Ads', 'woocommerce-admin'),
  'woo-razorpay': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Razorpay', 'woocommerce-admin'),
  mailpoet: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('MailPoet', 'woocommerce-admin')
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchWithHeaders; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


var fetchWithHeaders = function fetchWithHeaders(options) {
  return {
    type: 'FETCH_WITH_HEADERS',
    options: options
  };
};

var controls = _objectSpread(_objectSpread({}, _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__["controls"]), {}, {
  FETCH_WITH_HEADERS: function FETCH_WITH_HEADERS(_ref) {
    var options = _ref.options;
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()(_objectSpread(_objectSpread({}, options), {}, {
      parse: false
    })).then(function (response) {
      return Promise.all([response.headers, response.status, response.json()]);
    }).then(function (_ref2) {
      var _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, 3),
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

/* harmony default export */ __webpack_exports__["a"] = (controls);
//# sourceMappingURL=controls.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORE_NAME; });
var STORE_NAME = 'wc/admin/settings';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(87);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ 144:
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ 147:
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

/***/ 148:
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORE_NAME; });
var STORE_NAME = 'core';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFilterQuery; });
/* unused harmony export timeStampFilterDates */
/* unused harmony export getQueryFromConfig */
/* unused harmony export isReportDataEmpty */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getSummaryNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getReportChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getTooltipValueFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getReportTableQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getReportTableData; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_date__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(196);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(218);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(advancedFilterConfig, ['input', 'component']) !== 'Date') {
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
    var _value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(value, 2),
        after = _value[0],
        before = _value[1];

    return Object.assign({}, activeFilter, {
      value: [Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_4__["appendTimestamp"])(moment__WEBPACK_IMPORTED_MODULE_3___default()(after), timeOfDayMap.after), Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_4__["appendTimestamp"])(moment__WEBPACK_IMPORTED_MODULE_3___default()(before), timeOfDayMap.before)]
    });
  }

  return Object.assign({}, activeFilter, {
    value: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_4__["appendTimestamp"])(moment__WEBPACK_IMPORTED_MODULE_3___default()(value), timeOfDayMap[rule])
  });
}
function getQueryFromConfig(config, advancedFilters, query) {
  var queryValue = query[config.param];

  if (!queryValue) {
    return {};
  }

  if (queryValue === 'advanced') {
    var activeFilters = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__["getActiveFiltersFromQuery"])(query, advancedFilters.filters);

    if (activeFilters.length === 0) {
      return {};
    }

    var filterQuery = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__["getQueryFromActiveFilters"])(activeFilters.map(function (filter) {
      return timeStampFilterDates(advancedFilters, filter);
    }), {}, advancedFilters.filters);
    return _objectSpread({
      match: query.match || 'all'
    }, filterQuery);
  }

  var filter = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["find"])(Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__["flattenFilters"])(config.filters), {
    value: queryValue
  });

  if (!filter) {
    return {};
  }

  if (filter.settings && filter.settings.param) {
    var param = filter.settings.param;

    if (query[param]) {
      return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, param, query[param]);
    }

    return {};
  }

  return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, config.param, queryValue);
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

  if (!report.data.totals || Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isNull"])(report.data.totals)) {
    return true;
  }

  var checkIntervals = !Object(lodash__WEBPACK_IMPORTED_MODULE_2__["includes"])(noIntervalEndpoints, endpoint);

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
  var datesFromQuery = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_4__["getCurrentDates"])(query, options.defaultDateRange);
  var interval = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_4__["getIntervalForQuery"])(query);
  var filterQuery = getFilterQuery(options);
  var end = datesFromQuery[dataType].before;
  var noIntervals = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["includes"])(noIntervalEndpoints, endpoint);
  return noIntervals ? _objectSpread(_objectSpread({}, filterQuery), {}, {
    fields: fields
  }) : _objectSpread({
    order: 'asc',
    interval: interval,
    per_page: _constants__WEBPACK_IMPORTED_MODULE_7__[/* MAX_PER_PAGE */ "d"],
    after: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_4__["appendTimestamp"])(datesFromQuery[dataType].after, 'start'),
    before: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_4__["appendTimestamp"])(end, 'end'),
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

  var _select = select(_constants__WEBPACK_IMPORTED_MODULE_8__[/* STORE_NAME */ "a"]),
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
  var primaryQuery = getRequestQuery(_objectSpread(_objectSpread({}, options), {}, {
    dataType: 'primary'
  })); // Disable eslint rule requiring `getReportStats` to be defined below because the next two statements
  // depend on `getReportStats` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  var primary = getReportStats(endpoint, primaryQuery);

  if (isResolving('getReportStats', [endpoint, primaryQuery])) {
    return _objectSpread(_objectSpread({}, response), {}, {
      isRequesting: true
    });
  } else if (getReportStatsError(endpoint, primaryQuery)) {
    return _objectSpread(_objectSpread({}, response), {}, {
      isError: true
    });
  }

  var primaryTotals = primary && primary.data && primary.data.totals || null;
  var secondaryQuery = getRequestQuery(_objectSpread(_objectSpread({}, options), {}, {
    dataType: 'secondary'
  })); // Disable eslint rule requiring `getReportStats` to be defined below because the next two statements
  // depend on `getReportStats` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  var secondary = getReportStats(endpoint, secondaryQuery);

  if (isResolving('getReportStats', [endpoint, secondaryQuery])) {
    return _objectSpread(_objectSpread({}, response), {}, {
      isRequesting: true
    });
  } else if (getReportStatsError(endpoint, secondaryQuery)) {
    return _objectSpread(_objectSpread({}, response), {}, {
      isError: true
    });
  }

  var secondaryTotals = secondary && secondary.data && secondary.data.totals || null;
  return _objectSpread(_objectSpread({}, response), {}, {
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

var getReportChartDataResponse = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["memoize"])(function (requestString, totals, intervals) {
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

  var _select2 = select(_constants__WEBPACK_IMPORTED_MODULE_8__[/* STORE_NAME */ "a"]),
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

  if (stats.totalResults > _constants__WEBPACK_IMPORTED_MODULE_7__[/* MAX_PER_PAGE */ "d"]) {
    var isFetching = true;
    var isError = false;
    var pagedData = [];
    var totalPages = Math.ceil(stats.totalResults / _constants__WEBPACK_IMPORTED_MODULE_7__[/* MAX_PER_PAGE */ "d"]);
    var pagesFetched = 1;

    for (var i = 2; i <= totalPages; i++) {
      var nextQuery = _objectSpread(_objectSpread({}, requestQuery), {}, {
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

    Object(lodash__WEBPACK_IMPORTED_MODULE_2__["forEach"])(pagedData, function (_data) {
      if (_data.data && _data.data.intervals && Array.isArray(_data.data.intervals)) {
        intervals = intervals.concat(_data.data.intervals);
      }
    });
  }

  return getReportChartDataResponse(Object(_utils__WEBPACK_IMPORTED_MODULE_9__[/* getResourceName */ "a"])(endpoint, requestQuery), totals, intervals);
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
  var datesFromQuery = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_4__["getCurrentDates"])(query, options.defaultDateRange);
  var noIntervals = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["includes"])(noIntervalEndpoints, options.endpoint);
  return _objectSpread(_objectSpread({
    orderby: query.orderby || 'date',
    order: query.order || 'desc',
    after: noIntervals ? undefined : Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_4__["appendTimestamp"])(datesFromQuery.primary.after, 'start'),
    before: noIntervals ? undefined : Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_4__["appendTimestamp"])(datesFromQuery.primary.before, 'end'),
    page: query.paged || 1,
    per_page: query.per_page || _constants__WEBPACK_IMPORTED_MODULE_7__[/* QUERY_DEFAULTS */ "h"].pageSize
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

  var _select3 = select(_constants__WEBPACK_IMPORTED_MODULE_8__[/* STORE_NAME */ "a"]),
      getReportItems = _select3.getReportItems,
      getReportItemsError = _select3.getReportItemsError,
      isResolving = _select3.isResolving;

  var tableQuery = _utils__WEBPACK_IMPORTED_MODULE_6__[/* getReportTableQuery */ "d"](options);
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
    return _objectSpread(_objectSpread({}, response), {}, {
      isRequesting: true
    });
  } else if (getReportItemsError(endpoint, tableQuery)) {
    return _objectSpread(_objectSpread({}, response), {}, {
      isError: true
    });
  }

  return _objectSpread(_objectSpread({}, response), {}, {
    items: items
  });
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 199:
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

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORE_NAME; });
var STORE_NAME = 'woocommerce-navigation';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

(function() { module.exports = window["moment"]; }());

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLeaderboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return searchItemsByString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTotalCountResourceName; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(233);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

  var _select = select(_constants__WEBPACK_IMPORTED_MODULE_3__[/* STORE_NAME */ "a"]),
      getItems = _select.getItems,
      getItemsError = _select.getItemsError,
      isResolving = _select.isResolving;

  var response = {
    isRequesting: false,
    isError: false,
    rows: []
  };
  var datesFromQuery = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__["getCurrentDates"])(query, options.defaultDateRange);

  var leaderboardQuery = _objectSpread(_objectSpread({}, filterQuery), {}, {
    after: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__["appendTimestamp"])(datesFromQuery.primary.after, 'start'),
    before: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__["appendTimestamp"])(datesFromQuery.primary.before, 'end'),
    per_page: perPage,
    persisted_query: JSON.stringify(persistedQuery)
  }); // Disable eslint rule requiring `getItems` to be defined below because the next two statements
  // depend on `getItems` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return


  var leaderboards = getItems(endpoint, leaderboardQuery);

  if (isResolving('getItems', [endpoint, leaderboardQuery])) {
    return _objectSpread(_objectSpread({}, response), {}, {
      isRequesting: true
    });
  } else if (getItemsError(endpoint, leaderboardQuery)) {
    return _objectSpread(_objectSpread({}, response), {}, {
      isError: true
    });
  }

  var leaderboard = leaderboards.get(options.id);
  return _objectSpread(_objectSpread({}, response), {}, {
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
  var _select2 = select(_constants__WEBPACK_IMPORTED_MODULE_3__[/* STORE_NAME */ "a"]),
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
      totalsQuery = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(query, ["_fields", "page", "per_page"]);

  return Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* getResourceName */ "a"])('total-' + itemType, totalsQuery);
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORE_NAME; });
/**
 * Internal dependencies
 */
var STORE_NAME = 'wc/admin/reports';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORE_NAME; });
var STORE_NAME = 'wc/admin/options';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORE_NAME; });
/**
 * Internal dependencies
 */
var STORE_NAME = 'wc/admin/onboarding';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORE_NAME; });
var STORE_NAME = 'wc/admin/items';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["dataControls"]; }());

/***/ }),

/***/ 250:
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

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(315),
      utf8 = __webpack_require__(250).utf8,
      isBuffer = __webpack_require__(316),
      bin = __webpack_require__(250).bin,

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

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileItems", function() { return getProfileItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTasksStatus", function() { return getTasksStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOnboardingError", function() { return getOnboardingError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOnboardingRequesting", function() { return isOnboardingRequesting; });
/**
 * Internal dependencies
 */
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
}; // Types
//# sourceMappingURL=selectors.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ OPTIONS_STORE_NAME; });

// NAMESPACE OBJECT: ./packages/data/build-module/options/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getOption", function() { return getOption; });
__webpack_require__.d(selectors_namespaceObject, "getOptionsRequestingError", function() { return getOptionsRequestingError; });
__webpack_require__.d(selectors_namespaceObject, "isOptionsUpdating", function() { return isOptionsUpdating; });
__webpack_require__.d(selectors_namespaceObject, "getOptionsUpdatingError", function() { return getOptionsUpdatingError; });

// NAMESPACE OBJECT: ./packages/data/build-module/options/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "receiveOptions", function() { return receiveOptions; });
__webpack_require__.d(actions_namespaceObject, "setRequestingError", function() { return setRequestingError; });
__webpack_require__.d(actions_namespaceObject, "setUpdatingError", function() { return setUpdatingError; });
__webpack_require__.d(actions_namespaceObject, "setIsUpdating", function() { return setIsUpdating; });
__webpack_require__.d(actions_namespaceObject, "updateOptions", function() { return updateOptions; });

// NAMESPACE OBJECT: ./packages/data/build-module/options/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getOption", function() { return resolvers_getOption; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(15);

// EXTERNAL MODULE: ./packages/data/build-module/options/constants.js
var constants = __webpack_require__(231);

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
//# sourceMappingURL=selectors.js.map
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(4);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external "regeneratorRuntime"
var external_regeneratorRuntime_ = __webpack_require__(6);
var external_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_regeneratorRuntime_);

// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__(24);

// CONCATENATED MODULE: ./packages/data/build-module/options/action-types.js
var TYPES = {
  RECEIVE_OPTIONS: 'RECEIVE_OPTIONS',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING',
  SET_IS_UPDATING: 'SET_IS_UPDATING',
  SET_REQUESTING_ERROR: 'SET_REQUESTING_ERROR',
  SET_UPDATING_ERROR: 'SET_UPDATING_ERROR'
};
/* harmony default export */ var action_types = (TYPES);
//# sourceMappingURL=action-types.js.map
// EXTERNAL MODULE: ./packages/data/build-module/constants.js
var build_module_constants = __webpack_require__(32);

// CONCATENATED MODULE: ./packages/data/build-module/options/actions.js



var _marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(updateOptions);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function receiveOptions(options) {
  return {
    type: action_types.RECEIVE_OPTIONS,
    options: options
  };
}
function setRequestingError(error, name) {
  return {
    type: action_types.SET_REQUESTING_ERROR,
    error: error,
    name: name
  };
}
function setUpdatingError(error) {
  return {
    type: action_types.SET_UPDATING_ERROR,
    error: error
  };
}
function setIsUpdating(isUpdating) {
  return {
    type: action_types.SET_IS_UPDATING,
    isUpdating: isUpdating
  };
}
function updateOptions(data) {
  var results;
  return external_regeneratorRuntime_default.a.wrap(function updateOptions$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return setIsUpdating(true);

        case 2:
          _context.next = 4;
          return receiveOptions(data);

        case 4:
          _context.prev = 4;
          _context.next = 7;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: build_module_constants["k" /* WC_ADMIN_NAMESPACE */] + '/options',
            method: 'POST',
            data: data
          });

        case 7:
          results = _context.sent;
          _context.next = 10;
          return setIsUpdating(false);

        case 10:
          return _context.abrupt("return", _objectSpread({
            success: true
          }, results));

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](4);
          _context.next = 17;
          return setUpdatingError(_context.t0);

        case 17:
          return _context.abrupt("return", _objectSpread({
            success: false
          }, _context.t0));

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[4, 13]]);
}
//# sourceMappingURL=actions.js.map
// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__(48);
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// CONCATENATED MODULE: ./packages/data/build-module/options/controls.js


function controls_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function controls_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { controls_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { controls_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
var controls = controls_objectSpread(controls_objectSpread({}, external_wp_dataControls_["controls"]), {}, {
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

        var url = build_module_constants["k" /* WC_ADMIN_NAMESPACE */] + '/options?options=' + names;
        fetches[names] = external_wp_apiFetch_default()({
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
//# sourceMappingURL=controls.js.map
// CONCATENATED MODULE: ./packages/data/build-module/options/resolvers.js


var resolvers_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getOption);

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
  return external_regeneratorRuntime_default.a.wrap(function getOption$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return batchFetch(name);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return receiveOptions(result);

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
  }, resolvers_marked, null, [[0, 8]]);
}
//# sourceMappingURL=resolvers.js.map
// CONCATENATED MODULE: ./packages/data/build-module/options/reducer.js


function reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducer_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    case action_types.RECEIVE_OPTIONS:
      state = reducer_objectSpread(reducer_objectSpread({}, state), options);
      break;

    case action_types.SET_IS_UPDATING:
      state = reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        isUpdating: isUpdating
      });
      break;

    case action_types.SET_REQUESTING_ERROR:
      state = reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        requestingErrors: defineProperty_default()({}, name, error)
      });
      break;

    case action_types.SET_UPDATING_ERROR:
      state = reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        error: error,
        updatingError: error,
        isUpdating: false
      });
      break;
  }

  return state;
};

/* harmony default export */ var reducer = (reducer_optionsReducer);
//# sourceMappingURL=reducer.js.map
// CONCATENATED MODULE: ./packages/data/build-module/options/index.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */







Object(external_wp_data_["registerStore"])(constants["a" /* STORE_NAME */], {
  reducer: reducer,
  actions: actions_namespaceObject,
  controls: controls,
  selectors: selectors_namespaceObject,
  resolvers: resolvers_namespaceObject
});
var OPTIONS_STORE_NAME = constants["a" /* STORE_NAME */];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

(function() { module.exports = window["wc"]["navigation"]; }());

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(143);

var iterableToArray = __webpack_require__(144);

var unsupportedIterableToArray = __webpack_require__(98);

var nonIterableSpread = __webpack_require__(145);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(146);

var iterableToArrayLimit = __webpack_require__(147);

var unsupportedIterableToArray = __webpack_require__(98);

var nonIterableRest = __webpack_require__(148);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ 315:
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

/***/ 316:
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

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useOptionsHydration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return withOptionsHydration; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(231);



/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


var useOptionsHydration = function useOptionsHydration(data) {
  var dataRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useRef"])(data);
  Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["useSelect"])(function (select, registry) {
    if (!dataRef.current) {
      return;
    }

    var _select = select(_constants__WEBPACK_IMPORTED_MODULE_4__[/* STORE_NAME */ "a"]),
        isResolving = _select.isResolving,
        hasFinishedResolution = _select.hasFinishedResolution;

    var _registry$dispatch = registry.dispatch(_constants__WEBPACK_IMPORTED_MODULE_4__[/* STORE_NAME */ "a"]),
        startResolution = _registry$dispatch.startResolution,
        finishResolution = _registry$dispatch.finishResolution,
        receiveOptions = _registry$dispatch.receiveOptions;

    var names = Object.keys(dataRef.current);
    names.forEach(function (name) {
      if (!isResolving('getOption', [name]) && !hasFinishedResolution('getOption', [name])) {
        startResolution('getOption', [name]);
        receiveOptions(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, dataRef.current[name]));
        finishResolution('getOption', [name]);
      }
    });
  }, []);
};
var withOptionsHydration = function withOptionsHydration(data) {
  return Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["createHigherOrderComponent"])(function (OriginalComponent) {
    return function (props) {
      useOptionsHydration(data);
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OriginalComponent, props);
    };
  }, 'withOptionsHydration');
};
//# sourceMappingURL=with-options-hydration.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return JETPACK_NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return WC_ADMIN_NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return WCS_NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MAX_PER_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SECOND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MINUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return WEEK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MONTH; });
/* unused harmony export DEFAULT_REQUIREMENT */
/* unused harmony export DEFAULT_ACTIONABLE_STATUSES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return QUERY_DEFAULTS; });
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
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["url"]; }());

/***/ }),

/***/ 394:
/***/ (function(module, exports) {


//# sourceMappingURL=types.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withSettingsHydration; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(138);


/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


var withSettingsHydration = function withSettingsHydration(group, settings) {
  return Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(function (OriginalComponent) {
    return function (props) {
      var settingsRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useRef"])(settings);
      Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useSelect"])(function (select, registry) {
        if (!settingsRef.current) {
          return;
        }

        var _select = select(_constants__WEBPACK_IMPORTED_MODULE_3__[/* STORE_NAME */ "a"]),
            isResolving = _select.isResolving,
            hasFinishedResolution = _select.hasFinishedResolution;

        var _registry$dispatch = registry.dispatch(_constants__WEBPACK_IMPORTED_MODULE_3__[/* STORE_NAME */ "a"]),
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
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
    };
  }, 'withSettingsHydration');
};
//# sourceMappingURL=with-settings-hydration.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useSettings; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(138);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


var useSettings = function useSettings(group) {
  var settingsKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _useSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useSelect"])(function (select) {
    var _select = select(_constants__WEBPACK_IMPORTED_MODULE_4__[/* STORE_NAME */ "a"]),
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
  }, [group].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(settingsKeys.sort()))),
      requestedSettings = _useSelect.requestedSettings,
      settingsError = _useSelect.settingsError,
      isRequesting = _useSelect.isRequesting,
      isDirty = _useSelect.isDirty;

  var _useDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])(_constants__WEBPACK_IMPORTED_MODULE_4__[/* STORE_NAME */ "a"]),
      persistSettingsForGroup = _useDispatch.persistSettingsForGroup,
      updateAndPersistSettingsForGroup = _useDispatch.updateAndPersistSettingsForGroup,
      updateSettingsForGroup = _useDispatch.updateSettingsForGroup;

  var updateSettings = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (name, data) {
    updateSettingsForGroup(group, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, data));
  }, [group]);
  var persistSettings = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    // this action would simply persist all settings marked as dirty in the
    // store state and then remove the dirty record in the isDirtyMap
    persistSettingsForGroup(group);
  }, [group]);
  var updateAndPersistSettings = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (name, data) {
    updateAndPersistSettingsForGroup(group, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, data));
  }, [group]);
  return _objectSpread(_objectSpread({
    settingsError: settingsError,
    isRequesting: isRequesting,
    isDirty: isDirty
  }, requestedSettings), {}, {
    persistSettings: persistSettings,
    updateAndPersistSettings: updateAndPersistSettings,
    updateSettings: updateSettings
  });
};
//# sourceMappingURL=use-settings.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withPluginsHydration; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(105);


/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


var withPluginsHydration = function withPluginsHydration(data) {
  return Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(function (OriginalComponent) {
    return function (props) {
      var dataRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useRef"])(data);
      Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useSelect"])(function (select, registry) {
        if (!dataRef.current) {
          return;
        }

        var _select = select(_constants__WEBPACK_IMPORTED_MODULE_3__[/* STORE_NAME */ "b"]),
            isResolving = _select.isResolving,
            hasFinishedResolution = _select.hasFinishedResolution;

        var _registry$dispatch = registry.dispatch(_constants__WEBPACK_IMPORTED_MODULE_3__[/* STORE_NAME */ "b"]),
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
          updateIsJetpackConnected(dataRef.current.jetpackStatus && dataRef.current.jetpackStatus.isActive ? true : false);
          finishResolution('getActivePlugins', []);
          finishResolution('getInstalledPlugins', []);
          finishResolution('isJetpackConnected', []);
        }
      }, []);
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
    };
  }, 'withPluginsHydration');
};
//# sourceMappingURL=with-plugins-hydration.jsx.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withOnboardingHydration; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(232);


/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


var withOnboardingHydration = function withOnboardingHydration(data) {
  var hydratedProfileItems = false;
  var hydratedTasksStatus = false;
  return Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(function (OriginalComponent) {
    return function (props) {
      var onboardingRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useRef"])(data);
      Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useSelect"])(function (select, registry) {
        if (!onboardingRef.current) {
          return;
        }

        var _select = select(_constants__WEBPACK_IMPORTED_MODULE_3__[/* STORE_NAME */ "a"]),
            isResolving = _select.isResolving,
            hasFinishedResolution = _select.hasFinishedResolution;

        var _registry$dispatch = registry.dispatch(_constants__WEBPACK_IMPORTED_MODULE_3__[/* STORE_NAME */ "a"]),
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
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
    };
  }, 'withOnboardingHydration');
};
//# sourceMappingURL=with-onboarding-hydration.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_STORE_NAME; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(183);
/**
 * Internal dependencies
 */

var USER_STORE_NAME = _constants__WEBPACK_IMPORTED_MODULE_0__[/* STORE_NAME */ "a"];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4:
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

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withCurrentUserHydration; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(183);


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

var withCurrentUserHydration = function withCurrentUserHydration(currentUser) {
  return Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(function (OriginalComponent) {
    return function (props) {
      var userRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useRef"])(currentUser); // Use currentUser to hydrate calls to @wordpress/core-data's getCurrentUser().

      Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useSelect"])(function (select, registry) {
        if (!userRef.current) {
          return;
        }

        var _select = select(_constants__WEBPACK_IMPORTED_MODULE_3__[/* STORE_NAME */ "a"]),
            isResolving = _select.isResolving,
            hasFinishedResolution = _select.hasFinishedResolution;

        var _registry$dispatch = registry.dispatch(_constants__WEBPACK_IMPORTED_MODULE_3__[/* STORE_NAME */ "a"]),
            startResolution = _registry$dispatch.startResolution,
            finishResolution = _registry$dispatch.finishResolution,
            receiveCurrentUser = _registry$dispatch.receiveCurrentUser;

        if (!isResolving('getCurrentUser') && !hasFinishedResolution('getCurrentUser')) {
          startResolution('getCurrentUser', []);
          receiveCurrentUser(userRef.current);
          finishResolution('getCurrentUser', []);
        }
      });
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
    };
  }, 'withCurrentUserHydration');
};
//# sourceMappingURL=with-current-user-hydration.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useUser; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(183);
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

var useUser = function useUser() {
  var userData = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useSelect"])(function (select) {
    var _select = select(_constants__WEBPACK_IMPORTED_MODULE_1__[/* STORE_NAME */ "a"]),
        getCurrentUser = _select.getCurrentUser,
        hasStartedResolution = _select.hasStartedResolution,
        hasFinishedResolution = _select.hasFinishedResolution;

    return {
      isRequesting: hasStartedResolution('getCurrentUser') && !hasFinishedResolution('getCurrentUser'),
      user: getCurrentUser(),
      getCurrentUser: getCurrentUser
    };
  });

  var currentUserCan = function currentUserCan(capability) {
    if (userData.user && userData.user && userData.user.capabilities[capability]) {
      return true;
    }

    return false;
  };

  return {
    currentUserCan: currentUserCan,
    user: userData.user,
    isRequesting: userData.isRequesting
  };
};
//# sourceMappingURL=use-user.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useUserPreferences; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(183);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



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

var getWooCommerceMeta = function getWooCommerceMeta(user) {
  var wooMeta = user.woocommerce_meta || {};
  var userData = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["mapValues"])(wooMeta, function (data, key) {
    if (!data || data.length === 0) {
      return '';
    }

    try {
      return JSON.parse(data);
    } catch (e) {
      /* eslint-disable no-console */
      console.error("Error parsing value '".concat(data, "' for ").concat(key), e.message);
      /* eslint-enable no-console */

      return '';
    }
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
  _updateUserPrefs = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(receiveCurrentUser, user, saveUser, getLastEntitySaveError, userPrefs) {
    var userDataFields, metaData, updatedUser, error, updatedUserResponse;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // @todo Handle unresolved getCurrentUser() here.
            // Whitelist our meta fields.
            userDataFields = ['categories_report_columns', 'coupons_report_columns', 'customers_report_columns', 'orders_report_columns', 'products_report_columns', 'revenue_report_columns', 'taxes_report_columns', 'variations_report_columns', 'dashboard_sections', 'dashboard_chart_type', 'dashboard_chart_interval', 'dashboard_leaderboard_rows', 'activity_panel_inbox_last_read', 'homepage_layout', 'homepage_stats', 'android_app_banner_dismissed', 'task_list_tracked_started_tasks', 'help_panel_highlight_shown']; // Prep valid fields for update.

            metaData = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["mapValues"])(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["pick"])(userPrefs, userDataFields), JSON.stringify);

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
            receiveCurrentUser(_objectSpread(_objectSpread({}, user), {}, {
              woocommerce_meta: _objectSpread(_objectSpread({}, user.woocommerce_meta), metaData)
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
            }

            // Return the encountered error to the caller.
            error = getLastEntitySaveError('root', 'user', user.id);
            return _context2.abrupt("return", {
              error: error,
              updatedUser: updatedUser
            });

          case 11:
            // Decode the WooCommerce meta after save.
            updatedUserResponse = _objectSpread(_objectSpread({}, updatedUser), {}, {
              woocommerce_meta: getWooCommerceMeta(updatedUser)
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

var useUserPreferences = function useUserPreferences() {
  // Get our dispatch methods now - this can't happen inside the callback below.
  var dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])(_constants__WEBPACK_IMPORTED_MODULE_5__[/* STORE_NAME */ "a"]);
  var addEntities = dispatch.addEntities,
      receiveCurrentUser = dispatch.receiveCurrentUser,
      saveEntityRecord = dispatch.saveEntityRecord;
  var saveUser = dispatch.saveUser;
  var userData = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(function (select) {
    var _select = select(_constants__WEBPACK_IMPORTED_MODULE_5__[/* STORE_NAME */ "a"]),
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
        var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(userToSave) {
          var entityDefined;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
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

  var userPreferences = userData.user ? getWooCommerceMeta(userData.user) : {};
  return _objectSpread(_objectSpread({
    isRequesting: userData.isRequesting
  }, userPreferences), {}, {
    updateUserPreferences: updateUserPreferences
  });
};
//# sourceMappingURL=use-user-preferences.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withNavigationHydration; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(204);


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

var withNavigationHydration = function withNavigationHydration(data) {
  return Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(function (OriginalComponent) {
    return function (props) {
      var dataRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useRef"])(data);
      Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useSelect"])(function (select, registry) {
        if (!dataRef.current) {
          return;
        }

        var _select = select(_constants__WEBPACK_IMPORTED_MODULE_3__[/* STORE_NAME */ "a"]),
            isResolving = _select.isResolving,
            hasFinishedResolution = _select.hasFinishedResolution;

        var _registry$dispatch = registry.dispatch(_constants__WEBPACK_IMPORTED_MODULE_3__[/* STORE_NAME */ "a"]),
            startResolution = _registry$dispatch.startResolution,
            finishResolution = _registry$dispatch.finishResolution,
            setMenuItems = _registry$dispatch.setMenuItems;

        if (!isResolving('getMenuItems') && !hasFinishedResolution('getMenuItems')) {
          startResolution('getMenuItems', []);
          setMenuItems(dataRef.current.menuItems);
          finishResolution('getMenuItems', []);
        }
      });
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
    };
  }, 'withNavigationHydration');
};
//# sourceMappingURL=with-navigation-hydration.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ NOTES_STORE_NAME; });

// NAMESPACE OBJECT: ./packages/data/build-module/notes/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getNotes", function() { return getNotes; });
__webpack_require__.d(selectors_namespaceObject, "getNotesError", function() { return getNotesError; });
__webpack_require__.d(selectors_namespaceObject, "isNotesRequesting", function() { return isNotesRequesting; });

// NAMESPACE OBJECT: ./packages/data/build-module/notes/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "triggerNoteAction", function() { return triggerNoteAction; });
__webpack_require__.d(actions_namespaceObject, "removeNote", function() { return removeNote; });
__webpack_require__.d(actions_namespaceObject, "removeAllNotes", function() { return removeAllNotes; });
__webpack_require__.d(actions_namespaceObject, "batchUpdateNotes", function() { return batchUpdateNotes; });
__webpack_require__.d(actions_namespaceObject, "updateNote", function() { return updateNote; });
__webpack_require__.d(actions_namespaceObject, "setNote", function() { return setNote; });
__webpack_require__.d(actions_namespaceObject, "setNoteIsUpdating", function() { return setNoteIsUpdating; });
__webpack_require__.d(actions_namespaceObject, "setNotes", function() { return setNotes; });
__webpack_require__.d(actions_namespaceObject, "setNotesQuery", function() { return setNotesQuery; });
__webpack_require__.d(actions_namespaceObject, "setError", function() { return setError; });
__webpack_require__.d(actions_namespaceObject, "setIsRequesting", function() { return setIsRequesting; });

// NAMESPACE OBJECT: ./packages/data/build-module/notes/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getNotes", function() { return resolvers_getNotes; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(15);

// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__(24);

// CONCATENATED MODULE: ./packages/data/build-module/notes/constants.js
/**
 * Internal dependencies
 */
var STORE_NAME = 'wc/admin/notes';
//# sourceMappingURL=constants.js.map
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

var getNotes = rememo(function (state, query) {
  var noteIds = state.noteQueries[JSON.stringify(query)] || [];
  return noteIds.map(function (id) {
    return state.notes[id];
  });
}, function (state, query) {
  return [state.noteQueries[JSON.stringify(query)], state.notes];
});
var getNotesError = function getNotesError(state, selector) {
  return state.errors[selector] || false;
};
var isNotesRequesting = function isNotesRequesting(state, selector) {
  return state.requesting[selector] || false;
};
//# sourceMappingURL=selectors.js.map
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(4);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external "regeneratorRuntime"
var external_regeneratorRuntime_ = __webpack_require__(6);
var external_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_regeneratorRuntime_);

// EXTERNAL MODULE: ./packages/data/build-module/constants.js
var constants = __webpack_require__(32);

// CONCATENATED MODULE: ./packages/data/build-module/notes/action-types.js
var TYPES = {
  SET_ERROR: 'SET_ERROR',
  SET_NOTE: 'SET_NOTE',
  SET_NOTE_IS_UPDATING: 'SET_NOTE_IS_UPDATING',
  SET_NOTES: 'SET_NOTES',
  SET_NOTES_QUERY: 'SET_NOTES_QUERY',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING'
};
/* harmony default export */ var action_types = (TYPES);
//# sourceMappingURL=action-types.js.map
// CONCATENATED MODULE: ./packages/data/build-module/notes/actions.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var _marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(triggerNoteAction),
    _marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(removeNote),
    _marked3 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(removeAllNotes),
    _marked4 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(batchUpdateNotes),
    _marked5 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(updateNote);

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function triggerNoteAction(noteId, actionId) {
  var url, result;
  return external_regeneratorRuntime_default.a.wrap(function triggerNoteAction$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return setIsRequesting('triggerNoteAction', true);

        case 2:
          url = "".concat(constants["g" /* NAMESPACE */], "/admin/notes/").concat(noteId, "/action/").concat(actionId);
          _context.prev = 3;
          _context.next = 6;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'POST'
          });

        case 6:
          result = _context.sent;
          _context.next = 9;
          return updateNote(noteId, result);

        case 9:
          _context.next = 11;
          return setIsRequesting('triggerNoteAction', false);

        case 11:
          _context.next = 20;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](3);
          _context.next = 17;
          return setError('triggerNoteAction', _context.t0);

        case 17:
          _context.next = 19;
          return setIsRequesting('triggerNoteAction', false);

        case 19:
          throw new Error();

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[3, 13]]);
}
function removeNote(noteId) {
  var url, response;
  return external_regeneratorRuntime_default.a.wrap(function removeNote$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return setIsRequesting('removeNote', true);

        case 2:
          _context2.next = 4;
          return setNoteIsUpdating(noteId, true);

        case 4:
          _context2.prev = 4;
          url = "".concat(constants["g" /* NAMESPACE */], "/admin/notes/delete/").concat(noteId);
          _context2.next = 8;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'DELETE'
          });

        case 8:
          response = _context2.sent;
          _context2.next = 11;
          return setNote(noteId, response);

        case 11:
          _context2.next = 13;
          return setIsRequesting('removeNote', false);

        case 13:
          return _context2.abrupt("return", response);

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](4);
          _context2.next = 20;
          return setError('removeNote', _context2.t0);

        case 20:
          _context2.next = 22;
          return setIsRequesting('removeNote', false);

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
  }, _marked2, null, [[4, 16]]);
}
function removeAllNotes() {
  var url, notes;
  return external_regeneratorRuntime_default.a.wrap(function removeAllNotes$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return setIsRequesting('removeAllNotes', true);

        case 2:
          _context3.prev = 2;
          url = "".concat(constants["g" /* NAMESPACE */], "/admin/notes/delete/all");
          _context3.next = 6;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'DELETE'
          });

        case 6:
          notes = _context3.sent;
          _context3.next = 9;
          return setNotes(notes);

        case 9:
          _context3.next = 11;
          return setIsRequesting('removeAllNotes', false);

        case 11:
          return _context3.abrupt("return", notes);

        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](2);
          _context3.next = 18;
          return setError('removeAllNotes', _context3.t0);

        case 18:
          _context3.next = 20;
          return setIsRequesting('removeAllNotes', false);

        case 20:
          throw new Error();

        case 21:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[2, 14]]);
}
function batchUpdateNotes(noteIds, noteFields) {
  var url, notes;
  return external_regeneratorRuntime_default.a.wrap(function batchUpdateNotes$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return setIsRequesting('batchUpdateNotes', true);

        case 2:
          _context4.prev = 2;
          url = "".concat(constants["g" /* NAMESPACE */], "/admin/notes/update");
          _context4.next = 6;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'PUT',
            data: _objectSpread({
              noteIds: noteIds
            }, noteFields)
          });

        case 6:
          notes = _context4.sent;
          _context4.next = 9;
          return setNotes(notes);

        case 9:
          _context4.next = 11;
          return setIsRequesting('batchUpdateNotes', false);

        case 11:
          _context4.next = 20;
          break;

        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](2);
          _context4.next = 17;
          return setError('updateNote', _context4.t0);

        case 17:
          _context4.next = 19;
          return setIsRequesting('batchUpdateNotes', false);

        case 19:
          throw new Error();

        case 20:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[2, 13]]);
}
function updateNote(noteId, noteFields) {
  var url, note;
  return external_regeneratorRuntime_default.a.wrap(function updateNote$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return setIsRequesting('updateNote', true);

        case 2:
          _context5.next = 4;
          return setNoteIsUpdating(noteId, true);

        case 4:
          _context5.prev = 4;
          url = "".concat(constants["g" /* NAMESPACE */], "/admin/notes/").concat(noteId);
          _context5.next = 8;
          return Object(external_wp_dataControls_["apiFetch"])({
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
          return setIsRequesting('updateNote', false);

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
          return setError('updateNote', _context5.t0);

        case 21:
          _context5.next = 23;
          return setIsRequesting('updateNote', false);

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
  }, _marked5, null, [[4, 17]]);
}
function setNote(noteId, noteFields) {
  return {
    type: action_types.SET_NOTE,
    noteId: noteId,
    noteFields: noteFields
  };
}
function setNoteIsUpdating(noteId, isUpdating) {
  return {
    type: action_types.SET_NOTE_IS_UPDATING,
    noteId: noteId,
    isUpdating: isUpdating
  };
}
function setNotes(notes) {
  return {
    type: action_types.SET_NOTES,
    notes: notes
  };
}
function setNotesQuery(query, noteIds) {
  return {
    type: action_types.SET_NOTES_QUERY,
    query: query,
    noteIds: noteIds
  };
}
function setError(selector, error) {
  return {
    type: action_types.SET_ERROR,
    error: error,
    selector: selector
  };
}
function setIsRequesting(selector, isRequesting) {
  return {
    type: action_types.SET_IS_REQUESTING,
    selector: selector,
    isRequesting: isRequesting
  };
}
//# sourceMappingURL=actions.js.map
// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__(38);

// CONCATENATED MODULE: ./packages/data/build-module/notes/resolvers.js


var resolvers_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getNotes);

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
  return external_regeneratorRuntime_default.a.wrap(function getNotes$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
          url = Object(external_wp_url_["addQueryArgs"])("".concat(constants["g" /* NAMESPACE */], "/admin/notes"), query);
          _context.prev = 2;
          _context.next = 5;
          return Object(external_wp_dataControls_["apiFetch"])({
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
          return setError('getNotes', _context.t0);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, resolvers_marked, null, [[2, 12]]);
}
//# sourceMappingURL=resolvers.js.map
// CONCATENATED MODULE: ./packages/data/build-module/notes/reducer.js


function reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducer_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    case action_types.SET_NOTES:
      state = reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        notes: reducer_objectSpread(reducer_objectSpread({}, state.notes), notes.reduce(function (acc, item) {
          acc[item.id] = item;
          return acc;
        }, {}))
      });
      break;

    case action_types.SET_NOTES_QUERY:
      state = reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        noteQueries: reducer_objectSpread(reducer_objectSpread({}, state.noteQueries), {}, defineProperty_default()({}, JSON.stringify(query), noteIds))
      });
      break;

    case action_types.SET_ERROR:
      state = reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        errors: reducer_objectSpread(reducer_objectSpread({}, state.errors), {}, defineProperty_default()({}, selector, error))
      });
      break;

    case action_types.SET_NOTE:
      state = reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        notes: reducer_objectSpread(reducer_objectSpread({}, state.notes), {}, defineProperty_default()({}, noteId, noteFields))
      });
      break;

    case action_types.SET_NOTE_IS_UPDATING:
      state = reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        notes: reducer_objectSpread(reducer_objectSpread({}, state.notes), {}, defineProperty_default()({}, noteId, reducer_objectSpread(reducer_objectSpread({}, state.notes[noteId]), {}, {
          isUpdating: isUpdating
        })))
      });
      break;

    case action_types.SET_IS_REQUESTING:
      state = reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        requesting: reducer_objectSpread(reducer_objectSpread({}, state.requesting), {}, defineProperty_default()({}, selector, isRequesting))
      });
      break;
  }

  return state;
};

/* harmony default export */ var reducer = (reducer_notesReducer);
//# sourceMappingURL=reducer.js.map
// CONCATENATED MODULE: ./packages/data/build-module/notes/index.js
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
var NOTES_STORE_NAME = STORE_NAME;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ REVIEWS_STORE_NAME; });

// NAMESPACE OBJECT: ./packages/data/build-module/reviews/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getReviews", function() { return getReviews; });
__webpack_require__.d(selectors_namespaceObject, "getReviewsTotalCount", function() { return getReviewsTotalCount; });
__webpack_require__.d(selectors_namespaceObject, "getReviewsError", function() { return getReviewsError; });

// NAMESPACE OBJECT: ./packages/data/build-module/reviews/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "updateReviews", function() { return updateReviews; });
__webpack_require__.d(actions_namespaceObject, "updateReview", function() { return updateReview; });
__webpack_require__.d(actions_namespaceObject, "deleteReview", function() { return deleteReview; });
__webpack_require__.d(actions_namespaceObject, "setReviewIsUpdating", function() { return setReviewIsUpdating; });
__webpack_require__.d(actions_namespaceObject, "setReview", function() { return setReview; });
__webpack_require__.d(actions_namespaceObject, "setError", function() { return setError; });

// NAMESPACE OBJECT: ./packages/data/build-module/reviews/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getReviews", function() { return resolvers_getReviews; });
__webpack_require__.d(resolvers_namespaceObject, "getReviewsTotalCount", function() { return resolvers_getReviewsTotalCount; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(15);

// CONCATENATED MODULE: ./packages/data/build-module/reviews/constants.js
var STORE_NAME = 'wc/admin/reviews';
//# sourceMappingURL=constants.js.map
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
//# sourceMappingURL=selectors.js.map
// EXTERNAL MODULE: external "regeneratorRuntime"
var external_regeneratorRuntime_ = __webpack_require__(6);
var external_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_regeneratorRuntime_);

// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__(24);

// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__(38);

// CONCATENATED MODULE: ./packages/data/build-module/reviews/action-types.js
var TYPES = {
  UPDATE_REVIEWS: 'UPDATE_REVIEWS',
  SET_REVIEW: 'SET_REVIEW',
  SET_ERROR: 'SET_ERROR',
  SET_REVIEW_IS_UPDATING: 'SET_REVIEW_IS_UPDATING'
};
/* harmony default export */ var action_types = (TYPES);
//# sourceMappingURL=action-types.js.map
// EXTERNAL MODULE: ./packages/data/build-module/constants.js
var constants = __webpack_require__(32);

// CONCATENATED MODULE: ./packages/data/build-module/reviews/actions.js


var _marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(updateReview),
    _marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(deleteReview);

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



function updateReviews(query, reviews, totalCount) {
  return {
    type: action_types.UPDATE_REVIEWS,
    reviews: reviews,
    query: query,
    totalCount: totalCount
  };
}
function updateReview(reviewId, reviewFields, query) {
  var url, review;
  return external_regeneratorRuntime_default.a.wrap(function updateReview$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return setReviewIsUpdating(reviewId, true);

        case 2:
          _context.prev = 2;
          url = Object(external_wp_url_["addQueryArgs"])("".concat(constants["g" /* NAMESPACE */], "/products/reviews/").concat(reviewId), query || {});
          _context.next = 6;
          return Object(external_wp_dataControls_["apiFetch"])({
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
          return setError('updateReview', _context.t0);

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
  }, _marked, null, [[2, 13]]);
}
function deleteReview(reviewId) {
  var url, response;
  return external_regeneratorRuntime_default.a.wrap(function deleteReview$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return setReviewIsUpdating(reviewId, true);

        case 2:
          _context2.prev = 2;
          url = "".concat(constants["g" /* NAMESPACE */], "/products/reviews/").concat(reviewId);
          _context2.next = 6;
          return Object(external_wp_dataControls_["apiFetch"])({
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
          return setError('deleteReview', _context2.t0);

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
  }, _marked2, null, [[2, 14]]);
}
function setReviewIsUpdating(reviewId, isUpdating) {
  return {
    type: action_types.SET_REVIEW_IS_UPDATING,
    reviewId: reviewId,
    isUpdating: isUpdating
  };
}
function setReview(reviewId, reviewData) {
  return {
    type: action_types.SET_REVIEW,
    reviewId: reviewId,
    reviewData: reviewData
  };
}
function setError(query, error) {
  return {
    type: action_types.SET_ERROR,
    query: query,
    error: error
  };
}
//# sourceMappingURL=actions.js.map
// EXTERNAL MODULE: ./packages/data/build-module/controls.js
var controls = __webpack_require__(125);

// CONCATENATED MODULE: ./packages/data/build-module/reviews/resolvers.js


var resolvers_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getReviews),
    resolvers_marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getReviewsTotalCount);

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




function resolvers_getReviews(query) {
  var url, response, totalCount;
  return external_regeneratorRuntime_default.a.wrap(function getReviews$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          url = Object(external_wp_url_["addQueryArgs"])("".concat(constants["g" /* NAMESPACE */], "/products/reviews"), query);
          _context.next = 4;
          return Object(controls["b" /* fetchWithHeaders */])({
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
          return setError(query, _context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, resolvers_marked, null, [[0, 10]]);
}
function resolvers_getReviewsTotalCount(query) {
  return external_regeneratorRuntime_default.a.wrap(function getReviewsTotalCount$(_context2) {
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
  }, resolvers_marked2);
}
//# sourceMappingURL=resolvers.js.map
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(4);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./packages/data/build-module/reviews/reducer.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    case action_types.UPDATE_REVIEWS:
      var ids = [];
      var nextReviews = reviews.reduce(function (result, review) {
        ids.push(review.id);
        result[review.id] = _objectSpread(_objectSpread({}, state.data[review.id] || {}), review);
        return result;
      }, {});
      return _objectSpread(_objectSpread({}, state), {}, {
        reviews: _objectSpread(_objectSpread({}, state.reviews), {}, defineProperty_default()({}, JSON.stringify(query), {
          data: ids,
          totalCount: totalCount
        })),
        data: _objectSpread(_objectSpread({}, state.data), nextReviews)
      });

    case action_types.SET_REVIEW:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: _objectSpread(_objectSpread({}, state.data), {}, defineProperty_default()({}, reviewId, reviewData))
      });

    case action_types.SET_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        errors: _objectSpread(_objectSpread({}, state.errors), {}, defineProperty_default()({}, JSON.stringify(query), error))
      });

    case action_types.SET_REVIEW_IS_UPDATING:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: _objectSpread(_objectSpread({}, state.data), {}, defineProperty_default()({}, reviewId, _objectSpread(_objectSpread({}, state.data[reviewId]), {}, {
          isUpdating: isUpdating
        })))
      });

    default:
      return state;
  }
};

/* harmony default export */ var reviews_reducer = (reducer_reducer);
//# sourceMappingURL=reducer.js.map
// CONCATENATED MODULE: ./packages/data/build-module/reviews/index.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */







Object(external_wp_data_["registerStore"])(STORE_NAME, {
  reducer: reviews_reducer,
  actions: actions_namespaceObject,
  controls: controls["a" /* default */],
  selectors: selectors_namespaceObject,
  resolvers: resolvers_namespaceObject
});
var REVIEWS_STORE_NAME = STORE_NAME;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ NAVIGATION_STORE_NAME; });

// NAMESPACE OBJECT: ./packages/data/build-module/navigation/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getMenuItems", function() { return selectors_getMenuItems; });
__webpack_require__.d(selectors_namespaceObject, "getFavorites", function() { return getFavorites; });
__webpack_require__.d(selectors_namespaceObject, "isNavigationRequesting", function() { return isNavigationRequesting; });
__webpack_require__.d(selectors_namespaceObject, "getPersistedQuery", function() { return getPersistedQuery; });

// NAMESPACE OBJECT: ./packages/data/build-module/navigation/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "setMenuItems", function() { return setMenuItems; });
__webpack_require__.d(actions_namespaceObject, "addMenuItems", function() { return addMenuItems; });
__webpack_require__.d(actions_namespaceObject, "getFavoritesFailure", function() { return getFavoritesFailure; });
__webpack_require__.d(actions_namespaceObject, "getFavoritesRequest", function() { return getFavoritesRequest; });
__webpack_require__.d(actions_namespaceObject, "getFavoritesSuccess", function() { return getFavoritesSuccess; });
__webpack_require__.d(actions_namespaceObject, "addFavoriteRequest", function() { return addFavoriteRequest; });
__webpack_require__.d(actions_namespaceObject, "addFavoriteFailure", function() { return addFavoriteFailure; });
__webpack_require__.d(actions_namespaceObject, "addFavoriteSuccess", function() { return addFavoriteSuccess; });
__webpack_require__.d(actions_namespaceObject, "removeFavoriteRequest", function() { return removeFavoriteRequest; });
__webpack_require__.d(actions_namespaceObject, "removeFavoriteFailure", function() { return removeFavoriteFailure; });
__webpack_require__.d(actions_namespaceObject, "removeFavoriteSuccess", function() { return removeFavoriteSuccess; });
__webpack_require__.d(actions_namespaceObject, "onLoad", function() { return actions_onLoad; });
__webpack_require__.d(actions_namespaceObject, "onHistoryChange", function() { return actions_onHistoryChange; });
__webpack_require__.d(actions_namespaceObject, "addFavorite", function() { return addFavorite; });
__webpack_require__.d(actions_namespaceObject, "removeFavorite", function() { return removeFavorite; });

// NAMESPACE OBJECT: ./packages/data/build-module/navigation/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getFavorites", function() { return resolvers_getFavorites; });

// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__(24);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(15);

// EXTERNAL MODULE: ./packages/data/build-module/navigation/constants.js
var constants = __webpack_require__(204);

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(101);

// CONCATENATED MODULE: ./packages/data/build-module/navigation/selectors.js
/**
 * External dependencies
 */

var MENU_ITEMS_HOOK = 'woocommerce_navigation_menu_items';
var selectors_getMenuItems = function getMenuItems(state) {
  return Object(external_wp_hooks_["applyFilters"])(MENU_ITEMS_HOOK, state.menuItems);
};
var getFavorites = function getFavorites(state) {
  return state.favorites || [];
};
var isNavigationRequesting = function isNavigationRequesting(state, selector) {
  return state.requesting[selector] || false;
};
var getPersistedQuery = function getPersistedQuery(state) {
  return state.persistedQuery || {};
};
//# sourceMappingURL=selectors.js.map
// EXTERNAL MODULE: external "regeneratorRuntime"
var external_regeneratorRuntime_ = __webpack_require__(6);
var external_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_regeneratorRuntime_);

// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__(48);
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(28);

// CONCATENATED MODULE: ./packages/data/build-module/navigation/action-types.js
var TYPES = {
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
/* harmony default export */ var action_types = (TYPES);
//# sourceMappingURL=action-types.js.map
// EXTERNAL MODULE: ./packages/data/build-module/constants.js
var build_module_constants = __webpack_require__(32);

// CONCATENATED MODULE: ./packages/data/build-module/navigation/actions.js


var _marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(actions_onLoad),
    _marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(actions_onHistoryChange),
    _marked3 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(addFavorite),
    _marked4 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(removeFavorite);

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



function setMenuItems(menuItems) {
  return {
    type: action_types.SET_MENU_ITEMS,
    menuItems: menuItems
  };
}
function addMenuItems(menuItems) {
  return {
    type: action_types.ADD_MENU_ITEMS,
    menuItems: menuItems
  };
}
function getFavoritesFailure(error) {
  return {
    type: action_types.GET_FAVORITES_FAILURE,
    error: error
  };
}
function getFavoritesRequest(favorites) {
  return {
    type: action_types.GET_FAVORITES_REQUEST,
    favorites: favorites
  };
}
function getFavoritesSuccess(favorites) {
  return {
    type: action_types.GET_FAVORITES_SUCCESS,
    favorites: favorites
  };
}
function addFavoriteRequest(favorite) {
  return {
    type: action_types.ADD_FAVORITE_REQUEST,
    favorite: favorite
  };
}
function addFavoriteFailure(favorite, error) {
  return {
    type: action_types.ADD_FAVORITE_FAILURE,
    favorite: favorite,
    error: error
  };
}
function addFavoriteSuccess(favorite) {
  return {
    type: action_types.ADD_FAVORITE_SUCCESS,
    favorite: favorite
  };
}
function removeFavoriteRequest(favorite) {
  return {
    type: action_types.REMOVE_FAVORITE_REQUEST,
    favorite: favorite
  };
}
function removeFavoriteFailure(favorite, error) {
  return {
    type: action_types.REMOVE_FAVORITE_FAILURE,
    favorite: favorite,
    error: error
  };
}
function removeFavoriteSuccess(favorite, error) {
  return {
    type: action_types.REMOVE_FAVORITE_SUCCESS,
    favorite: favorite,
    error: error
  };
}
function actions_onLoad() {
  return external_regeneratorRuntime_default.a.wrap(function onLoad$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return actions_onHistoryChange();

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
function actions_onHistoryChange() {
  var persistedQuery;
  return external_regeneratorRuntime_default.a.wrap(function onHistoryChange$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          persistedQuery = Object(external_wc_navigation_["getPersistedQuery"])();

          if (Object.keys(persistedQuery).length) {
            _context2.next = 3;
            break;
          }

          return _context2.abrupt("return", null);

        case 3:
          _context2.next = 5;
          return {
            type: action_types.ON_HISTORY_CHANGE,
            persistedQuery: persistedQuery
          };

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
function addFavorite(favorite) {
  var results;
  return external_regeneratorRuntime_default.a.wrap(function addFavorite$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return addFavoriteRequest(favorite);

        case 2:
          _context3.prev = 2;
          _context3.next = 5;
          return external_wp_apiFetch_default()({
            path: "".concat(build_module_constants["k" /* WC_ADMIN_NAMESPACE */], "/navigation/favorites/me"),
            method: 'POST',
            data: {
              item_id: favorite
            }
          });

        case 5:
          results = _context3.sent;

          if (!results) {
            _context3.next = 10;
            break;
          }

          _context3.next = 9;
          return addFavoriteSuccess(favorite);

        case 9:
          return _context3.abrupt("return", results);

        case 10:
          throw new Error();

        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](2);
          _context3.next = 17;
          return addFavoriteFailure(favorite, _context3.t0);

        case 17:
          throw new Error();

        case 18:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[2, 13]]);
}
function removeFavorite(favorite) {
  var results;
  return external_regeneratorRuntime_default.a.wrap(function removeFavorite$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return removeFavoriteRequest(favorite);

        case 2:
          _context4.prev = 2;
          _context4.next = 5;
          return external_wp_apiFetch_default()({
            path: "".concat(build_module_constants["k" /* WC_ADMIN_NAMESPACE */], "/navigation/favorites/me"),
            method: 'DELETE',
            data: {
              item_id: favorite
            }
          });

        case 5:
          results = _context4.sent;

          if (!results) {
            _context4.next = 10;
            break;
          }

          _context4.next = 9;
          return removeFavoriteSuccess(favorite);

        case 9:
          return _context4.abrupt("return", results);

        case 10:
          throw new Error();

        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](2);
          _context4.next = 17;
          return removeFavoriteFailure(favorite, _context4.t0);

        case 17:
          throw new Error();

        case 18:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[2, 13]]);
}
//# sourceMappingURL=actions.js.map
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(29);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(4);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./packages/data/build-module/navigation/reducer.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */


var reducer_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    error: null,
    menuItems: [],
    favorites: [],
    requesting: {},
    persistedQuery: {}
  };

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      error = _ref.error,
      favorite = _ref.favorite,
      favorites = _ref.favorites,
      menuItems = _ref.menuItems,
      persistedQuery = _ref.persistedQuery;

  switch (type) {
    case action_types.SET_MENU_ITEMS:
      state = _objectSpread(_objectSpread({}, state), {}, {
        menuItems: menuItems
      });
      break;

    case action_types.ADD_MENU_ITEMS:
      state = _objectSpread(_objectSpread({}, state), {}, {
        menuItems: [].concat(toConsumableArray_default()(state.menuItems), toConsumableArray_default()(menuItems))
      });
      break;

    case action_types.ON_HISTORY_CHANGE:
      state = _objectSpread(_objectSpread({}, state), {}, {
        persistedQuery: persistedQuery
      });
      break;

    case action_types.GET_FAVORITES_FAILURE:
      state = _objectSpread(_objectSpread({}, state), {}, {
        requesting: _objectSpread(_objectSpread({}, state.requesting), {}, {
          getFavorites: false
        })
      });
      break;

    case action_types.GET_FAVORITES_REQUEST:
      state = _objectSpread(_objectSpread({}, state), {}, {
        requesting: _objectSpread(_objectSpread({}, state.requesting), {}, {
          getFavorites: true
        })
      });
      break;

    case action_types.GET_FAVORITES_SUCCESS:
      state = _objectSpread(_objectSpread({}, state), {}, {
        favorites: favorites,
        requesting: _objectSpread(_objectSpread({}, state.requesting), {}, {
          getFavorites: false
        })
      });
      break;

    case action_types.ADD_FAVORITE_FAILURE:
      state = _objectSpread(_objectSpread({}, state), {}, {
        error: error,
        requesting: _objectSpread(_objectSpread({}, state.requesting), {}, {
          addFavorite: false
        })
      });
      break;

    case action_types.ADD_FAVORITE_REQUEST:
      state = _objectSpread(_objectSpread({}, state), {}, {
        requesting: _objectSpread(_objectSpread({}, state.requesting), {}, {
          addFavorite: true
        })
      });
      break;

    case action_types.ADD_FAVORITE_SUCCESS:
      var newFavorites = !state.favorites.includes(favorite) ? [].concat(toConsumableArray_default()(state.favorites), [favorite]) : state.favorites;
      state = _objectSpread(_objectSpread({}, state), {}, {
        favorites: newFavorites,
        menuItems: state.menuItems.map(function (item) {
          if (item.id === favorite) {
            return _objectSpread(_objectSpread({}, item), {}, {
              menuId: 'favorites'
            });
          }

          return item;
        }),
        requesting: _objectSpread(_objectSpread({}, state.requesting), {}, {
          addFavorite: false
        })
      });
      break;

    case action_types.REMOVE_FAVORITE_FAILURE:
      state = _objectSpread(_objectSpread({}, state), {}, {
        requesting: _objectSpread(_objectSpread({}, state.requesting), {}, {
          error: error,
          removeFavorite: false
        })
      });
      break;

    case action_types.REMOVE_FAVORITE_REQUEST:
      state = _objectSpread(_objectSpread({}, state), {}, {
        requesting: _objectSpread(_objectSpread({}, state.requesting), {}, {
          removeFavorite: true
        })
      });
      break;

    case action_types.REMOVE_FAVORITE_SUCCESS:
      var filteredFavorites = state.favorites.filter(function (f) {
        return f !== favorite;
      });
      state = _objectSpread(_objectSpread({}, state), {}, {
        favorites: filteredFavorites,
        menuItems: state.menuItems.map(function (item) {
          if (item.id === favorite) {
            return _objectSpread(_objectSpread({}, item), {}, {
              menuId: 'plugins'
            });
          }

          return item;
        }),
        requesting: _objectSpread(_objectSpread({}, state.requesting), {}, {
          removeFavorite: false
        })
      });
      break;
  }

  return state;
};

/* harmony default export */ var navigation_reducer = (reducer_reducer);
//# sourceMappingURL=reducer.js.map
// CONCATENATED MODULE: ./packages/data/build-module/navigation/resolvers.js


var resolvers_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getFavorites);

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function resolvers_getFavorites() {
  var results;
  return external_regeneratorRuntime_default.a.wrap(function getFavorites$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return getFavoritesRequest();

        case 2:
          _context.prev = 2;
          _context.next = 5;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: "".concat(build_module_constants["k" /* WC_ADMIN_NAMESPACE */], "/navigation/favorites/me")
          });

        case 5:
          results = _context.sent;

          if (!results) {
            _context.next = 10;
            break;
          }

          _context.next = 9;
          return getFavoritesSuccess(results);

        case 9:
          return _context.abrupt("return");

        case 10:
          throw new Error();

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](2);
          _context.next = 17;
          return getFavoritesFailure(_context.t0);

        case 17:
          throw new Error();

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, resolvers_marked, null, [[2, 13]]);
}
//# sourceMappingURL=resolvers.js.map
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(67);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// CONCATENATED MODULE: ./packages/data/build-module/navigation/dispatchers.js



/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/* harmony default export */ var dispatchers = (/*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee3() {
  var _dispatch, onLoad, onHistoryChange;

  return external_regeneratorRuntime_default.a.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _dispatch = Object(external_wp_data_["dispatch"])(constants["a" /* STORE_NAME */]), onLoad = _dispatch.onLoad, onHistoryChange = _dispatch.onHistoryChange;
          _context3.next = 3;
          return onLoad();

        case 3:
          Object(external_wc_navigation_["addHistoryListener"])( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee2() {
            return external_regeneratorRuntime_default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    setTimeout( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee() {
                      return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.next = 2;
                              return onHistoryChange();

                            case 2:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    })), 0);

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          })));

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
})));
//# sourceMappingURL=dispatchers.js.map
// CONCATENATED MODULE: ./packages/data/build-module/navigation/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */







Object(external_wp_data_["registerStore"])(constants["a" /* STORE_NAME */], {
  reducer: navigation_reducer,
  actions: actions_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  resolvers: resolvers_namespaceObject,
  selectors: selectors_namespaceObject
});
dispatchers();
var NAVIGATION_STORE_NAME = constants["a" /* STORE_NAME */];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ EXPORT_STORE_NAME; });

// NAMESPACE OBJECT: ./packages/data/build-module/export/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "isExportRequesting", function() { return selectors_isExportRequesting; });
__webpack_require__.d(selectors_namespaceObject, "getExportId", function() { return selectors_getExportId; });
__webpack_require__.d(selectors_namespaceObject, "getError", function() { return selectors_getError; });

// NAMESPACE OBJECT: ./packages/data/build-module/export/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "setExportId", function() { return setExportId; });
__webpack_require__.d(actions_namespaceObject, "setIsRequesting", function() { return setIsRequesting; });
__webpack_require__.d(actions_namespaceObject, "setError", function() { return setError; });
__webpack_require__.d(actions_namespaceObject, "startExport", function() { return startExport; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(15);

// CONCATENATED MODULE: ./packages/data/build-module/export/constants.js
/**
 * Internal dependencies
 */
var STORE_NAME = 'wc/admin/export';
//# sourceMappingURL=constants.js.map
// EXTERNAL MODULE: ./node_modules/md5/md5.js
var md5 = __webpack_require__(252);
var md5_default = /*#__PURE__*/__webpack_require__.n(md5);

// EXTERNAL MODULE: ./packages/data/build-module/utils.js
var utils = __webpack_require__(80);

// CONCATENATED MODULE: ./packages/data/build-module/export/utils.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


var utils_hashExportArgs = function hashExportArgs(args) {
  return md5_default()(Object(utils["a" /* getResourceName */])('export', args));
};
//# sourceMappingURL=utils.js.map
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
//# sourceMappingURL=selectors.js.map
// EXTERNAL MODULE: external "regeneratorRuntime"
var external_regeneratorRuntime_ = __webpack_require__(6);
var external_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_regeneratorRuntime_);

// EXTERNAL MODULE: ./packages/data/build-module/controls.js
var controls = __webpack_require__(125);

// CONCATENATED MODULE: ./packages/data/build-module/export/action-types.js
var TYPES = {
  START_EXPORT: 'START_EXPORT',
  SET_EXPORT_ID: 'SET_EXPORT_ID',
  SET_ERROR: 'SET_ERROR',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING'
};
/* harmony default export */ var action_types = (TYPES);
//# sourceMappingURL=action-types.js.map
// EXTERNAL MODULE: ./packages/data/build-module/constants.js
var constants = __webpack_require__(32);

// CONCATENATED MODULE: ./packages/data/build-module/export/actions.js


var _marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(startExport);

/**
 * Internal dependencies
 */



function setExportId(exportType, exportArgs, exportId) {
  return {
    type: action_types.SET_EXPORT_ID,
    exportType: exportType,
    exportArgs: exportArgs,
    exportId: exportId
  };
}
function setIsRequesting(selector, selectorArgs, isRequesting) {
  return {
    type: action_types.SET_IS_REQUESTING,
    selector: selector,
    selectorArgs: selectorArgs,
    isRequesting: isRequesting
  };
}
function setError(selector, selectorArgs, error) {
  return {
    type: action_types.SET_ERROR,
    selector: selector,
    selectorArgs: selectorArgs,
    error: error
  };
}
function startExport(type, args) {
  var response, _response$data, exportId, message;

  return external_regeneratorRuntime_default.a.wrap(function startExport$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return setIsRequesting('startExport', {
            type: type,
            args: args
          }, true);

        case 2:
          _context.prev = 2;
          _context.next = 5;
          return Object(controls["b" /* fetchWithHeaders */])({
            path: "".concat(constants["g" /* NAMESPACE */], "/reports/").concat(type, "/export"),
            method: 'POST',
            data: {
              report_args: args,
              email: true
            }
          });

        case 5:
          response = _context.sent;
          _context.next = 8;
          return setIsRequesting('startExport', {
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
          return setError('startExport', {
            type: type,
            args: args
          }, _context.t0.message);

        case 22:
          _context.next = 24;
          return setIsRequesting('startExport', {
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
  }, _marked, null, [[2, 18]]);
}
//# sourceMappingURL=actions.js.map
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(4);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./packages/data/build-module/export/reducer.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    case action_types.SET_IS_REQUESTING:
      return _objectSpread(_objectSpread({}, state), {}, {
        requesting: _objectSpread(_objectSpread({}, state.requesting), {}, defineProperty_default()({}, selector, _objectSpread(_objectSpread({}, state.requesting[selector]), {}, defineProperty_default()({}, utils_hashExportArgs(selectorArgs), isRequesting))))
      });

    case action_types.SET_EXPORT_ID:
      return _objectSpread(_objectSpread({}, state), {}, {
        exportMeta: _objectSpread(_objectSpread({}, state.exportMeta), {}, defineProperty_default()({}, exportId, {
          exportType: exportType,
          exportArgs: exportArgs
        })),
        exportIds: _objectSpread(_objectSpread({}, state.exportIds), {}, defineProperty_default()({}, exportType, _objectSpread(_objectSpread({}, state.exportIds[exportType]), {}, defineProperty_default()({}, utils_hashExportArgs({
          type: exportType,
          args: exportArgs
        }), exportId))))
      });

    case action_types.SET_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        errors: _objectSpread(_objectSpread({}, state.errors), {}, defineProperty_default()({}, selector, _objectSpread(_objectSpread({}, state.errors[selector]), {}, defineProperty_default()({}, utils_hashExportArgs(selectorArgs), error))))
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducer = (reducer_exportReducer);
//# sourceMappingURL=reducer.js.map
// CONCATENATED MODULE: ./packages/data/build-module/export/index.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */






Object(external_wp_data_["registerStore"])(STORE_NAME, {
  reducer: reducer,
  actions: actions_namespaceObject,
  controls: controls["a" /* default */],
  selectors: selectors_namespaceObject
});
var EXPORT_STORE_NAME = STORE_NAME;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ IMPORT_STORE_NAME; });

// NAMESPACE OBJECT: ./packages/data/build-module/import/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getImportStarted", function() { return getImportStarted; });
__webpack_require__.d(selectors_namespaceObject, "getFormSettings", function() { return getFormSettings; });
__webpack_require__.d(selectors_namespaceObject, "getImportStatus", function() { return getImportStatus; });
__webpack_require__.d(selectors_namespaceObject, "getImportTotals", function() { return getImportTotals; });
__webpack_require__.d(selectors_namespaceObject, "getImportError", function() { return getImportError; });

// NAMESPACE OBJECT: ./packages/data/build-module/import/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "setImportStarted", function() { return setImportStarted; });
__webpack_require__.d(actions_namespaceObject, "setImportPeriod", function() { return setImportPeriod; });
__webpack_require__.d(actions_namespaceObject, "setSkipPrevious", function() { return setSkipPrevious; });
__webpack_require__.d(actions_namespaceObject, "setImportStatus", function() { return setImportStatus; });
__webpack_require__.d(actions_namespaceObject, "setImportTotals", function() { return setImportTotals; });
__webpack_require__.d(actions_namespaceObject, "setImportError", function() { return setImportError; });
__webpack_require__.d(actions_namespaceObject, "updateImportation", function() { return updateImportation; });

// NAMESPACE OBJECT: ./packages/data/build-module/import/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getImportStatus", function() { return resolvers_getImportStatus; });
__webpack_require__.d(resolvers_namespaceObject, "getImportTotals", function() { return resolvers_getImportTotals; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(15);

// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__(24);

// CONCATENATED MODULE: ./packages/data/build-module/import/constants.js
/**
 * Internal dependencies
 */
var STORE_NAME = 'wc/admin/import';
//# sourceMappingURL=constants.js.map
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(4);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./packages/data/build-module/import/selectors.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  return _objectSpread(_objectSpread({}, importTotals[stringifiedQuery]), {}, {
    lastImportStartTimestamp: lastImportStartTimestamp
  }) || {};
};
var getImportError = function getImportError(state, query) {
  var stringifiedQuery = JSON.stringify(query);
  return state.errors[stringifiedQuery] || false;
};
//# sourceMappingURL=selectors.js.map
// EXTERNAL MODULE: external "regeneratorRuntime"
var external_regeneratorRuntime_ = __webpack_require__(6);
var external_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_regeneratorRuntime_);

// CONCATENATED MODULE: ./packages/data/build-module/import/action-types.js
var TYPES = {
  SET_IMPORT_DATE: 'SET_IMPORT_DATE',
  SET_IMPORT_ERROR: 'SET_IMPORT_ERROR',
  SET_IMPORT_PERIOD: 'SET_IMPORT_PERIOD',
  SET_IMPORT_STARTED: 'SET_IMPORT_STARTED',
  SET_IMPORT_STATUS: 'SET_IMPORT_STATUS',
  SET_IMPORT_TOTALS: 'SET_IMPORT_TOTALS',
  SET_SKIP_IMPORTED: 'SET_SKIP_IMPORTED'
};
/* harmony default export */ var action_types = (TYPES);
//# sourceMappingURL=action-types.js.map
// CONCATENATED MODULE: ./packages/data/build-module/import/actions.js


var _marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(updateImportation);

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


function setImportStarted(activeImport) {
  return {
    type: action_types.SET_IMPORT_STARTED,
    activeImport: activeImport
  };
}
function setImportPeriod(date, dateModified) {
  if (!dateModified) {
    return {
      type: action_types.SET_IMPORT_PERIOD,
      date: date
    };
  }

  return {
    type: action_types.SET_IMPORT_DATE,
    date: date
  };
}
function setSkipPrevious(skipPrevious) {
  return {
    type: action_types.SET_SKIP_IMPORTED,
    skipPrevious: skipPrevious
  };
}
function setImportStatus(query, importStatus) {
  return {
    type: action_types.SET_IMPORT_STATUS,
    importStatus: importStatus,
    query: query
  };
}
function setImportTotals(query, importTotals) {
  return {
    type: action_types.SET_IMPORT_TOTALS,
    importTotals: importTotals,
    query: query
  };
}
function setImportError(query, error) {
  return {
    type: action_types.SET_IMPORT_ERROR,
    error: error,
    query: query
  };
}
function updateImportation(path) {
  var importStarted,
      response,
      _args = arguments;
  return external_regeneratorRuntime_default.a.wrap(function updateImportation$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          importStarted = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
          _context.next = 3;
          return setImportStarted(importStarted);

        case 3:
          _context.prev = 3;
          _context.next = 6;
          return Object(external_wp_dataControls_["apiFetch"])({
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
  }, _marked, null, [[3, 10]]);
}
//# sourceMappingURL=actions.js.map
// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__(38);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);

// EXTERNAL MODULE: ./packages/data/build-module/constants.js
var constants = __webpack_require__(32);

// CONCATENATED MODULE: ./packages/data/build-module/import/resolvers.js


var resolvers_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getImportStatus),
    _marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getImportTotals);

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



function resolvers_getImportStatus(query) {
  var url, response;
  return external_regeneratorRuntime_default.a.wrap(function getImportStatus$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          url = Object(external_wp_url_["addQueryArgs"])("".concat(constants["g" /* NAMESPACE */], "/reports/import/status"), Object(external_lodash_["omit"])(query, ['timestamp']));
          _context.next = 4;
          return Object(external_wp_dataControls_["apiFetch"])({
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
  }, resolvers_marked, null, [[0, 9]]);
}
function resolvers_getImportTotals(query) {
  var url, response;
  return external_regeneratorRuntime_default.a.wrap(function getImportTotals$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          url = Object(external_wp_url_["addQueryArgs"])("".concat(constants["g" /* NAMESPACE */], "/reports/import/totals"), query);
          _context2.next = 4;
          return Object(external_wp_dataControls_["apiFetch"])({
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
  }, _marked2, null, [[0, 9]]);
}
//# sourceMappingURL=resolvers.js.map
// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(21);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./packages/data/build-module/import/reducer.js


function reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducer_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



var reducer_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
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
    case action_types.SET_IMPORT_STARTED:
      state = reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        activeImport: activeImport,
        lastImportStartTimestamp: activeImport ? Date.now() : state.lastImportStartTimestamp
      });
      break;

    case action_types.SET_IMPORT_PERIOD:
      state = reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        period: reducer_objectSpread(reducer_objectSpread({}, state.period), {}, {
          label: date
        }),
        activeImport: false
      });
      break;

    case action_types.SET_IMPORT_DATE:
      state = reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        period: {
          date: date,
          label: 'custom'
        },
        activeImport: false
      });
      break;

    case action_types.SET_SKIP_IMPORTED:
      state = reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        skipPrevious: skipPrevious,
        activeImport: false
      });
      break;

    case action_types.SET_IMPORT_STATUS:
      state = reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        importStatus: reducer_objectSpread(reducer_objectSpread({}, state.importStatus), {}, defineProperty_default()({}, JSON.stringify(query), importStatus)),
        errors: reducer_objectSpread(reducer_objectSpread({}, state.errors), {}, defineProperty_default()({}, JSON.stringify(query), false))
      });
      break;

    case action_types.SET_IMPORT_TOTALS:
      state = reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        importTotals: reducer_objectSpread(reducer_objectSpread({}, state.importTotals), {}, defineProperty_default()({}, JSON.stringify(query), importTotals))
      });
      break;

    case action_types.SET_IMPORT_ERROR:
      state = reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        errors: reducer_objectSpread(reducer_objectSpread({}, state.errors), {}, defineProperty_default()({}, JSON.stringify(query), error))
      });
      break;
  }

  return state;
};

/* harmony default export */ var import_reducer = (reducer_reducer);
//# sourceMappingURL=reducer.js.map
// CONCATENATED MODULE: ./packages/data/build-module/import/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






Object(external_wp_data_["registerStore"])(STORE_NAME, {
  reducer: import_reducer,
  actions: actions_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  selectors: selectors_namespaceObject,
  resolvers: resolvers_namespaceObject
});
var IMPORT_STORE_NAME = STORE_NAME;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ SETTINGS_STORE_NAME; });

// NAMESPACE OBJECT: ./packages/data/build-module/settings/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getSettingsGroupNames", function() { return selectors_getSettingsGroupNames; });
__webpack_require__.d(selectors_namespaceObject, "getSettings", function() { return selectors_getSettings; });
__webpack_require__.d(selectors_namespaceObject, "getDirtyKeys", function() { return getDirtyKeys; });
__webpack_require__.d(selectors_namespaceObject, "getIsDirty", function() { return getIsDirty; });
__webpack_require__.d(selectors_namespaceObject, "getSettingsForGroup", function() { return getSettingsForGroup; });
__webpack_require__.d(selectors_namespaceObject, "isUpdateSettingsRequesting", function() { return isUpdateSettingsRequesting; });
__webpack_require__.d(selectors_namespaceObject, "getSetting", function() { return getSetting; });
__webpack_require__.d(selectors_namespaceObject, "getLastSettingsErrorForGroup", function() { return selectors_getLastSettingsErrorForGroup; });
__webpack_require__.d(selectors_namespaceObject, "getSettingsError", function() { return selectors_getSettingsError; });

// NAMESPACE OBJECT: ./packages/data/build-module/settings/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "updateSettingsForGroup", function() { return updateSettingsForGroup; });
__webpack_require__.d(actions_namespaceObject, "updateErrorForGroup", function() { return updateErrorForGroup; });
__webpack_require__.d(actions_namespaceObject, "setIsRequesting", function() { return setIsRequesting; });
__webpack_require__.d(actions_namespaceObject, "clearIsDirty", function() { return clearIsDirty; });
__webpack_require__.d(actions_namespaceObject, "updateAndPersistSettingsForGroup", function() { return updateAndPersistSettingsForGroup; });
__webpack_require__.d(actions_namespaceObject, "persistSettingsForGroup", function() { return persistSettingsForGroup; });
__webpack_require__.d(actions_namespaceObject, "clearSettings", function() { return clearSettings; });

// NAMESPACE OBJECT: ./packages/data/build-module/settings/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getSettings", function() { return resolvers_getSettings; });
__webpack_require__.d(resolvers_namespaceObject, "getSettingsForGroup", function() { return resolvers_getSettingsForGroup; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(15);

// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__(24);

// EXTERNAL MODULE: ./packages/data/build-module/settings/constants.js
var constants = __webpack_require__(138);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(29);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./packages/data/build-module/utils.js
var utils = __webpack_require__(80);

// CONCATENATED MODULE: ./packages/data/build-module/settings/selectors.js


/**
 * Internal dependencies
 */

var selectors_getSettingsGroupNames = function getSettingsGroupNames(state) {
  var groupNames = new Set(Object.keys(state).map(function (resourceName) {
    return Object(utils["b" /* getResourcePrefix */])(resourceName);
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
    settings[id] = state[Object(utils["a" /* getResourceName */])(group, id)].data;
  });
  return settings;
};
var getDirtyKeys = function getDirtyKeys(state, group) {
  return state[group].dirty || [];
};
var getIsDirty = function getIsDirty(state, group) {
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
var getSettingsForGroup = function getSettingsForGroup(state, group, keys) {
  var allSettings = selectors_getSettings(state, group);
  return keys.reduce(function (accumulator, key) {
    accumulator[key] = allSettings[key] || {};
    return accumulator;
  }, {});
};
var isUpdateSettingsRequesting = function isUpdateSettingsRequesting(state, group) {
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
  var resourceName = Object(utils["a" /* getResourceName */])(group, name);
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

  return state[Object(utils["a" /* getResourceName */])(group, id)].error || false;
};
//# sourceMappingURL=selectors.js.map
// EXTERNAL MODULE: external "regeneratorRuntime"
var external_regeneratorRuntime_ = __webpack_require__(6);
var external_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_regeneratorRuntime_);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);

// EXTERNAL MODULE: ./packages/data/build-module/constants.js
var build_module_constants = __webpack_require__(32);

// CONCATENATED MODULE: ./packages/data/build-module/settings/action-types.js
var TYPES = {
  UPDATE_SETTINGS_FOR_GROUP: 'UPDATE_SETTINGS_FOR_GROUP',
  UPDATE_ERROR_FOR_GROUP: 'UPDATE_ERROR_FOR_GROUP',
  CLEAR_SETTINGS: 'CLEAR_SETTINGS',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING',
  CLEAR_IS_DIRTY: 'CLEAR_IS_DIRTY'
};
/* harmony default export */ var action_types = (TYPES);
//# sourceMappingURL=action-types.js.map
// CONCATENATED MODULE: ./packages/data/build-module/settings/actions.js


var _marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(updateAndPersistSettingsForGroup),
    _marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(persistSettingsForGroup);

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




function updateSettingsForGroup(group, data) {
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
function clearIsDirty(group) {
  return {
    type: action_types.CLEAR_IS_DIRTY,
    group: group
  };
} // allows updating and persisting immediately in one action.

function updateAndPersistSettingsForGroup(group, data) {
  return external_regeneratorRuntime_default.a.wrap(function updateAndPersistSettingsForGroup$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return updateSettingsForGroup(group, data);

        case 2:
          return _context.delegateYield(persistSettingsForGroup(group), "t0", 3);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
} // this would replace setSettingsForGroup

function persistSettingsForGroup(group) {
  var dirtyKeys, dirtyData, url, update, results;
  return external_regeneratorRuntime_default.a.wrap(function persistSettingsForGroup$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return setIsRequesting(group, true);

        case 2:
          _context2.next = 4;
          return Object(external_wp_dataControls_["select"])(constants["a" /* STORE_NAME */], 'getDirtyKeys', group);

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
          return Object(external_wp_dataControls_["select"])(constants["a" /* STORE_NAME */], 'getSettingsForGroup', group, dirtyKeys);

        case 11:
          dirtyData = _context2.sent;
          url = "".concat(build_module_constants["g" /* NAMESPACE */], "/settings/").concat(group, "/batch");
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
          return Object(external_wp_dataControls_["apiFetch"])({
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

          throw new Error(Object(external_wp_i18n_["__"])('There was a problem updating your settings.', 'woocommerce-admin'));

        case 22:
          _context2.next = 24;
          return clearIsDirty(group);

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
//# sourceMappingURL=actions.js.map
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(4);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./packages/data/build-module/settings/resolvers.js



var resolvers_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getSettings),
    resolvers_marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getSettingsForGroup);

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
  return external_regeneratorRuntime_default.a.wrap(function getSettings$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(external_wp_dataControls_["dispatch"])(constants["a" /* STORE_NAME */], 'setIsRequesting', group, true);

        case 2:
          _context.prev = 2;
          url = build_module_constants["g" /* NAMESPACE */] + '/settings/' + group;
          _context.next = 6;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'GET'
          });

        case 6:
          results = _context.sent;
          resource = settingsToSettingsResource(results);
          return _context.abrupt("return", updateSettingsForGroup(group, defineProperty_default()({}, group, resource)));

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
  return external_regeneratorRuntime_default.a.wrap(function getSettingsForGroup$(_context2) {
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
//# sourceMappingURL=resolvers.js.map
// CONCATENATED MODULE: ./packages/data/build-module/settings/reducer.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    newState[Object(utils["a" /* getResourceName */])(group, id)] = {
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

/* harmony default export */ var reducer = (reducer_receiveSettings);
//# sourceMappingURL=reducer.js.map
// CONCATENATED MODULE: ./packages/data/build-module/settings/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






Object(external_wp_data_["registerStore"])(constants["a" /* STORE_NAME */], {
  reducer: reducer,
  actions: actions_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  selectors: selectors_namespaceObject,
  resolvers: resolvers_namespaceObject
});
var SETTINGS_STORE_NAME = constants["a" /* STORE_NAME */];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ PLUGINS_STORE_NAME; });

// NAMESPACE OBJECT: ./packages/data/build-module/plugins/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getActivePlugins", function() { return getActivePlugins; });
__webpack_require__.d(selectors_namespaceObject, "getInstalledPlugins", function() { return getInstalledPlugins; });
__webpack_require__.d(selectors_namespaceObject, "isPluginsRequesting", function() { return isPluginsRequesting; });
__webpack_require__.d(selectors_namespaceObject, "getPluginsError", function() { return getPluginsError; });
__webpack_require__.d(selectors_namespaceObject, "isJetpackConnected", function() { return isJetpackConnected; });
__webpack_require__.d(selectors_namespaceObject, "getJetpackConnectUrl", function() { return getJetpackConnectUrl; });
__webpack_require__.d(selectors_namespaceObject, "getPluginInstallState", function() { return getPluginInstallState; });
__webpack_require__.d(selectors_namespaceObject, "getPaypalOnboardingStatus", function() { return getPaypalOnboardingStatus; });
__webpack_require__.d(selectors_namespaceObject, "getRecommendedPlugins", function() { return getRecommendedPlugins; });

// NAMESPACE OBJECT: ./packages/data/build-module/plugins/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "formatErrors", function() { return formatErrors; });
__webpack_require__.d(actions_namespaceObject, "updateActivePlugins", function() { return updateActivePlugins; });
__webpack_require__.d(actions_namespaceObject, "updateInstalledPlugins", function() { return updateInstalledPlugins; });
__webpack_require__.d(actions_namespaceObject, "setIsRequesting", function() { return setIsRequesting; });
__webpack_require__.d(actions_namespaceObject, "setError", function() { return setError; });
__webpack_require__.d(actions_namespaceObject, "updateIsJetpackConnected", function() { return updateIsJetpackConnected; });
__webpack_require__.d(actions_namespaceObject, "updateJetpackConnectUrl", function() { return updateJetpackConnectUrl; });
__webpack_require__.d(actions_namespaceObject, "installPlugins", function() { return installPlugins; });
__webpack_require__.d(actions_namespaceObject, "activatePlugins", function() { return activatePlugins; });
__webpack_require__.d(actions_namespaceObject, "installAndActivatePlugins", function() { return installAndActivatePlugins; });
__webpack_require__.d(actions_namespaceObject, "createErrorNotice", function() { return actions_createErrorNotice; });
__webpack_require__.d(actions_namespaceObject, "connectToJetpack", function() { return connectToJetpack; });
__webpack_require__.d(actions_namespaceObject, "installJetpackAndConnect", function() { return installJetpackAndConnect; });
__webpack_require__.d(actions_namespaceObject, "connectToJetpackWithFailureRedirect", function() { return connectToJetpackWithFailureRedirect; });
__webpack_require__.d(actions_namespaceObject, "setPaypalOnboardingStatus", function() { return setPaypalOnboardingStatus; });
__webpack_require__.d(actions_namespaceObject, "setRecommendedPlugins", function() { return setRecommendedPlugins; });

// NAMESPACE OBJECT: ./packages/data/build-module/plugins/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getActivePlugins", function() { return resolvers_getActivePlugins; });
__webpack_require__.d(resolvers_namespaceObject, "getInstalledPlugins", function() { return resolvers_getInstalledPlugins; });
__webpack_require__.d(resolvers_namespaceObject, "isJetpackConnected", function() { return resolvers_isJetpackConnected; });
__webpack_require__.d(resolvers_namespaceObject, "getJetpackConnectUrl", function() { return resolvers_getJetpackConnectUrl; });
__webpack_require__.d(resolvers_namespaceObject, "getPaypalOnboardingStatus", function() { return resolvers_getPaypalOnboardingStatus; });
__webpack_require__.d(resolvers_namespaceObject, "getRecommendedPlugins", function() { return resolvers_getRecommendedPlugins; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(15);

// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__(24);

// EXTERNAL MODULE: ./packages/data/build-module/plugins/constants.js
var constants = __webpack_require__(105);

// CONCATENATED MODULE: ./packages/data/build-module/plugins/selectors.js
/**
 * Internal dependencies
 */
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
var getRecommendedPlugins = function getRecommendedPlugins(state, type) {
  return state.recommended[type];
}; // Types
//# sourceMappingURL=selectors.js.map
// EXTERNAL MODULE: external "regeneratorRuntime"
var external_regeneratorRuntime_ = __webpack_require__(6);
var external_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_regeneratorRuntime_);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

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
//# sourceMappingURL=action-types.js.map
// EXTERNAL MODULE: ./packages/data/build-module/constants.js
var build_module_constants = __webpack_require__(32);

// CONCATENATED MODULE: ./packages/data/build-module/plugins/actions.js


var _marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(installPlugins),
    _marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(activatePlugins),
    _marked3 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(installAndActivatePlugins),
    _marked4 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(connectToJetpack),
    _marked5 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(installJetpackAndConnect),
    _marked6 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(connectToJetpackWithFailureRedirect);

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */





function isWPError(error) {
  return error.errors !== undefined;
}

function formatErrors(response) {
  if (isWPError(response)) {
    // Replace the slug with a plugin name if a constant exists.
    Object.keys(response.errors).forEach(function (plugin) {
      response.errors[plugin] = response.errors[plugin].map(function (pluginError) {
        return constants["c" /* pluginNames */][plugin] ? pluginError.replace("`".concat(plugin, "`"), constants["c" /* pluginNames */][plugin]) : pluginError;
      });
    });
  }

  return response;
}

var actions_formatErrorMessage = function formatErrorMessage(pluginErrors) {
  var actionType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'install';
  return Object(external_wp_i18n_["sprintf"])(
  /* translators: %(actionType): install or activate (the plugin). %(pluginName): a plugin slug (e.g. woocommerce-services). %(error): a single error message or in plural a comma separated error message list.*/
  Object(external_wp_i18n_["_n"])('Could not %(actionType)s %(pluginName)s plugin, %(error)s', 'Could not %(actionType)s the following plugins: %(pluginName)s with these Errors: %(error)s', Object.keys(pluginErrors).length, 'woocommerce-admin'), {
    actionType: actionType,
    pluginName: Object.keys(pluginErrors).join(', '),
    error: Object.values(pluginErrors).join(', \n')
  });
};

function updateActivePlugins(active) {
  var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    type: ACTION_TYPES.UPDATE_ACTIVE_PLUGINS,
    active: active,
    replace: replace
  };
}
function updateInstalledPlugins(installed) {
  var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    type: ACTION_TYPES.UPDATE_INSTALLED_PLUGINS,
    installed: installed,
    replace: replace
  };
}
function setIsRequesting(selector, isRequesting) {
  return {
    type: ACTION_TYPES.SET_IS_REQUESTING,
    selector: selector,
    isRequesting: isRequesting
  };
}
function setError(selector, error) {
  return {
    type: ACTION_TYPES.SET_ERROR,
    selector: selector,
    error: error
  };
}
function updateIsJetpackConnected(jetpackConnection) {
  return {
    type: ACTION_TYPES.UPDATE_JETPACK_CONNECTION,
    jetpackConnection: jetpackConnection
  };
}
function updateJetpackConnectUrl(redirectUrl, jetpackConnectUrl) {
  return {
    type: ACTION_TYPES.UPDATE_JETPACK_CONNECT_URL,
    jetpackConnectUrl: jetpackConnectUrl,
    redirectUrl: redirectUrl
  };
}
function installPlugins(plugins) {
  var results;
  return external_regeneratorRuntime_default.a.wrap(function installPlugins$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return setIsRequesting('installPlugins', true);

        case 2:
          _context.prev = 2;
          _context.next = 5;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: "".concat(build_module_constants["k" /* WC_ADMIN_NAMESPACE */], "/plugins/install"),
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
          return updateInstalledPlugins(results.data.installed);

        case 9:
          if (!Object.keys(results.errors.errors).length) {
            _context.next = 11;
            break;
          }

          throw results.errors.errors;

        case 11:
          _context.next = 13;
          return setIsRequesting('installPlugins', false);

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
  }, _marked, null, [[2, 16]]);
}
function activatePlugins(plugins) {
  var results;
  return external_regeneratorRuntime_default.a.wrap(function activatePlugins$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return setIsRequesting('activatePlugins', true);

        case 2:
          _context2.prev = 2;
          _context2.next = 5;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: "".concat(build_module_constants["k" /* WC_ADMIN_NAMESPACE */], "/plugins/activate"),
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
          return updateActivePlugins(results.data.activated);

        case 9:
          if (!Object.keys(results.errors.errors).length) {
            _context2.next = 11;
            break;
          }

          throw results.errors.errors;

        case 11:
          _context2.next = 13;
          return setIsRequesting('activatePlugins', false);

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
  }, _marked2, null, [[2, 16]]);
}
function installAndActivatePlugins(plugins) {
  var activations;
  return external_regeneratorRuntime_default.a.wrap(function installAndActivatePlugins$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(external_wp_dataControls_["dispatch"])(constants["b" /* STORE_NAME */], 'installPlugins', plugins);

        case 3:
          _context3.next = 5;
          return Object(external_wp_dataControls_["dispatch"])(constants["b" /* STORE_NAME */], 'activatePlugins', plugins);

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
  return Object(external_wp_dataControls_["dispatch"])('core/notices', 'createNotice', errorMessage);
};
function connectToJetpack(getAdminLink) {
  var url, error;
  return external_regeneratorRuntime_default.a.wrap(function connectToJetpack$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(external_wp_dataControls_["select"])(constants["b" /* STORE_NAME */], 'getJetpackConnectUrl', {
            redirect_url: getAdminLink('admin.php?page=wc-admin')
          });

        case 2:
          url = _context4.sent;
          _context4.next = 5;
          return Object(external_wp_dataControls_["select"])(constants["b" /* STORE_NAME */], 'getPluginsError', 'getJetpackConnectUrl');

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
  return external_regeneratorRuntime_default.a.wrap(function installJetpackAndConnect$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(external_wp_dataControls_["dispatch"])(constants["b" /* STORE_NAME */], 'installPlugins', ['jetpack']);

        case 3:
          _context5.next = 5;
          return Object(external_wp_dataControls_["dispatch"])(constants["b" /* STORE_NAME */], 'activatePlugins', ['jetpack']);

        case 5:
          _context5.next = 7;
          return Object(external_wp_dataControls_["dispatch"])(constants["b" /* STORE_NAME */], 'connectToJetpack', getAdminLink);

        case 7:
          url = _context5.sent;
          window.location.href = url;
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
  return external_regeneratorRuntime_default.a.wrap(function connectToJetpackWithFailureRedirect$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(external_wp_dataControls_["dispatch"])(constants["b" /* STORE_NAME */], 'connectToJetpack', getAdminLink);

        case 3:
          url = _context6.sent;
          window.location.href = url;
          _context6.next = 12;
          break;

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          _context6.next = 11;
          return errorAction(_context6.t0.message);

        case 11:
          window.location.href = failureRedirect;

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 7]]);
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
    plugins: plugins
  };
}
//# sourceMappingURL=actions.js.map
// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__(38);

// EXTERNAL MODULE: ./packages/data/build-module/options/index.js + 6 modules
var build_module_options = __webpack_require__(273);

// CONCATENATED MODULE: ./packages/data/build-module/plugins/resolvers.js


var resolvers_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getActivePlugins),
    resolvers_marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getInstalledPlugins),
    resolvers_marked3 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_isJetpackConnected),
    resolvers_marked4 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getJetpackConnectUrl),
    resolvers_marked5 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(setOnboardingStatusWithOptions),
    resolvers_marked6 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getPaypalOnboardingStatus),
    _marked7 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getRecommendedPlugins);

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */





function resolvers_getActivePlugins() {
  var url, results;
  return external_regeneratorRuntime_default.a.wrap(function getActivePlugins$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return setIsRequesting('getActivePlugins', true);

        case 2:
          _context.prev = 2;
          url = build_module_constants["k" /* WC_ADMIN_NAMESPACE */] + '/plugins/active';
          _context.next = 6;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'GET'
          });

        case 6:
          results = _context.sent;
          _context.next = 9;
          return updateActivePlugins(results.plugins, true);

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
  }, resolvers_marked, null, [[2, 11]]);
}
function resolvers_getInstalledPlugins() {
  var url, results;
  return external_regeneratorRuntime_default.a.wrap(function getInstalledPlugins$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return setIsRequesting('getInstalledPlugins', true);

        case 2:
          _context2.prev = 2;
          url = build_module_constants["k" /* WC_ADMIN_NAMESPACE */] + '/plugins/installed';
          _context2.next = 6;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'GET'
          });

        case 6:
          results = _context2.sent;
          _context2.next = 9;
          return updateInstalledPlugins(results.plugins, true);

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
  }, resolvers_marked2, null, [[2, 11]]);
}
function resolvers_isJetpackConnected() {
  var url, results;
  return external_regeneratorRuntime_default.a.wrap(function isJetpackConnected$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return setIsRequesting('isJetpackConnected', true);

        case 2:
          _context3.prev = 2;
          url = build_module_constants["c" /* JETPACK_NAMESPACE */] + '/connection';
          _context3.next = 6;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'GET'
          });

        case 6:
          results = _context3.sent;
          _context3.next = 9;
          return updateIsJetpackConnected(results.isActive);

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
          return setIsRequesting('isJetpackConnected', false);

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, resolvers_marked3, null, [[2, 11]]);
}
function resolvers_getJetpackConnectUrl(query) {
  var url, results;
  return external_regeneratorRuntime_default.a.wrap(function getJetpackConnectUrl$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return setIsRequesting('getJetpackConnectUrl', true);

        case 2:
          _context4.prev = 2;
          url = Object(external_wp_url_["addQueryArgs"])(build_module_constants["k" /* WC_ADMIN_NAMESPACE */] + '/plugins/connect-jetpack', query);
          _context4.next = 6;
          return Object(external_wp_dataControls_["apiFetch"])({
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
          return setIsRequesting('getJetpackConnectUrl', false);

        case 17:
        case "end":
          return _context4.stop();
      }
    }
  }, resolvers_marked4, null, [[2, 11]]);
}

function setOnboardingStatusWithOptions() {
  var options, onboarded;
  return external_regeneratorRuntime_default.a.wrap(function setOnboardingStatusWithOptions$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(external_wp_dataControls_["select"])(build_module_options["a" /* OPTIONS_STORE_NAME */], 'getOption', 'woocommerce-ppcp-settings');

        case 2:
          options = _context5.sent;
          onboarded = options.merchant_email_production && options.merchant_id_production && options.client_id_production && options.client_secret_production;
          _context5.next = 6;
          return setPaypalOnboardingStatus({
            production: {
              state: onboarded ? 'onboarded' : 'unknown',
              onboarded: onboarded ? true : false
            }
          });

        case 6:
        case "end":
          return _context5.stop();
      }
    }
  }, resolvers_marked5);
}

function resolvers_getPaypalOnboardingStatus() {
  var errorData, url, results;
  return external_regeneratorRuntime_default.a.wrap(function getPaypalOnboardingStatus$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return setIsRequesting('getPaypalOnboardingStatus', true);

        case 2:
          _context6.next = 4;
          return Object(external_wp_dataControls_["select"])(constants["b" /* STORE_NAME */], 'getPluginsError', 'getPaypalOnboardingStatus');

        case 4:
          errorData = _context6.sent;

          if (!(errorData && errorData.data && errorData.data.status === 404)) {
            _context6.next = 10;
            break;
          }

          _context6.next = 8;
          return setOnboardingStatusWithOptions();

        case 8:
          _context6.next = 25;
          break;

        case 10:
          _context6.prev = 10;
          url = constants["a" /* PAYPAL_NAMESPACE */] + '/onboarding/get-status';
          _context6.next = 14;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'GET'
          });

        case 14:
          results = _context6.sent;
          _context6.next = 17;
          return setPaypalOnboardingStatus(results);

        case 17:
          _context6.next = 25;
          break;

        case 19:
          _context6.prev = 19;
          _context6.t0 = _context6["catch"](10);
          _context6.next = 23;
          return setOnboardingStatusWithOptions();

        case 23:
          _context6.next = 25;
          return setError('getPaypalOnboardingStatus', _context6.t0);

        case 25:
          _context6.next = 27;
          return setIsRequesting('getPaypalOnboardingStatus', false);

        case 27:
        case "end":
          return _context6.stop();
      }
    }
  }, resolvers_marked6, null, [[10, 19]]);
}
var SUPPORTED_TYPES = ['payments'];
function resolvers_getRecommendedPlugins(type) {
  var url, results;
  return external_regeneratorRuntime_default.a.wrap(function getRecommendedPlugins$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          if (SUPPORTED_TYPES.includes(type)) {
            _context7.next = 2;
            break;
          }

          return _context7.abrupt("return", []);

        case 2:
          _context7.next = 4;
          return setIsRequesting('getRecommendedPlugins', true);

        case 4:
          _context7.prev = 4;
          url = build_module_constants["k" /* WC_ADMIN_NAMESPACE */] + '/plugins/recommended-payment-plugins';
          _context7.next = 8;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'GET'
          });

        case 8:
          results = _context7.sent;
          _context7.next = 11;
          return setRecommendedPlugins(type, results);

        case 11:
          _context7.next = 17;
          break;

        case 13:
          _context7.prev = 13;
          _context7.t0 = _context7["catch"](4);
          _context7.next = 17;
          return setError('getRecommendedPlugins', _context7.t0);

        case 17:
          _context7.next = 19;
          return setIsRequesting('getRecommendedPlugins', false);

        case 19:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[4, 13]]);
}
//# sourceMappingURL=resolvers.js.map
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(4);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);

// CONCATENATED MODULE: ./packages/data/build-module/plugins/reducer.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    jetpackConnectUrls: {},
    recommended: {}
  };
  var payload = arguments.length > 1 ? arguments[1] : undefined;

  if (payload && 'type' in payload) {
    switch (payload.type) {
      case ACTION_TYPES.UPDATE_ACTIVE_PLUGINS:
        state = _objectSpread(_objectSpread({}, state), {}, {
          active: payload.replace ? payload.active : Object(external_lodash_["concat"])(state.active, payload.active),
          requesting: _objectSpread(_objectSpread({}, state.requesting), {}, {
            getActivePlugins: false,
            activatePlugins: false
          }),
          errors: _objectSpread(_objectSpread({}, state.errors), {}, {
            getActivePlugins: false,
            activatePlugins: false
          })
        });
        break;

      case ACTION_TYPES.UPDATE_INSTALLED_PLUGINS:
        state = _objectSpread(_objectSpread({}, state), {}, {
          installed: payload.replace ? payload.installed : Object(external_lodash_["concat"])(state.installed, payload.installed),
          requesting: _objectSpread(_objectSpread({}, state.requesting), {}, {
            getInstalledPlugins: false,
            installPlugins: false
          }),
          errors: _objectSpread(_objectSpread({}, state.errors), {}, {
            getInstalledPlugins: false,
            installPlugin: false
          })
        });
        break;

      case ACTION_TYPES.SET_IS_REQUESTING:
        state = _objectSpread(_objectSpread({}, state), {}, {
          requesting: _objectSpread(_objectSpread({}, state.requesting), {}, defineProperty_default()({}, payload.selector, payload.isRequesting))
        });
        break;

      case ACTION_TYPES.SET_ERROR:
        state = _objectSpread(_objectSpread({}, state), {}, {
          requesting: _objectSpread(_objectSpread({}, state.requesting), {}, defineProperty_default()({}, payload.selector, false)),
          errors: _objectSpread(_objectSpread({}, state.errors), {}, defineProperty_default()({}, payload.selector, payload.error))
        });
        break;

      case ACTION_TYPES.UPDATE_JETPACK_CONNECTION:
        state = _objectSpread(_objectSpread({}, state), {}, {
          jetpackConnection: payload.jetpackConnection
        });
        break;

      case ACTION_TYPES.UPDATE_JETPACK_CONNECT_URL:
        state = _objectSpread(_objectSpread({}, state), {}, {
          jetpackConnectUrls: _objectSpread(_objectSpread({}, state.jetpackConnectUrls), {}, defineProperty_default()({}, payload.redirectUrl, payload.jetpackConnectUrl))
        });
        break;

      case ACTION_TYPES.SET_PAYPAL_ONBOARDING_STATUS:
        state = _objectSpread(_objectSpread({}, state), {}, {
          paypalOnboardingStatus: payload.paypalOnboardingStatus
        });
        break;

      case ACTION_TYPES.SET_RECOMMENDED_PLUGINS:
        state = _objectSpread(_objectSpread({}, state), {}, {
          recommended: _objectSpread(_objectSpread({}, state.recommended), {}, defineProperty_default()({}, payload.recommendedType, payload.plugins))
        });
        break;
    }
  }

  return state;
};

/* harmony default export */ var reducer = (reducer_plugins);
//# sourceMappingURL=reducer.js.map
// CONCATENATED MODULE: ./packages/data/build-module/plugins/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






Object(external_wp_data_["registerStore"])(constants["b" /* STORE_NAME */], {
  reducer: reducer,
  actions: actions_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  selectors: selectors_namespaceObject,
  resolvers: resolvers_namespaceObject
});
var PLUGINS_STORE_NAME = constants["b" /* STORE_NAME */];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ REPORTS_STORE_NAME; });

// NAMESPACE OBJECT: ./packages/data/build-module/reports/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getReportItemsError", function() { return selectors_getReportItemsError; });
__webpack_require__.d(selectors_namespaceObject, "getReportItems", function() { return selectors_getReportItems; });
__webpack_require__.d(selectors_namespaceObject, "getReportStats", function() { return selectors_getReportStats; });
__webpack_require__.d(selectors_namespaceObject, "getReportStatsError", function() { return selectors_getReportStatsError; });

// NAMESPACE OBJECT: ./packages/data/build-module/reports/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "setReportItemsError", function() { return setReportItemsError; });
__webpack_require__.d(actions_namespaceObject, "setReportItems", function() { return setReportItems; });
__webpack_require__.d(actions_namespaceObject, "setReportStats", function() { return setReportStats; });
__webpack_require__.d(actions_namespaceObject, "setReportStatsError", function() { return setReportStatsError; });

// NAMESPACE OBJECT: ./packages/data/build-module/reports/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getReportItems", function() { return resolvers_getReportItems; });
__webpack_require__.d(resolvers_namespaceObject, "getReportStats", function() { return resolvers_getReportStats; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(15);

// EXTERNAL MODULE: ./packages/data/build-module/reports/constants.js
var constants = __webpack_require__(218);

// EXTERNAL MODULE: ./packages/data/build-module/utils.js
var utils = __webpack_require__(80);

// CONCATENATED MODULE: ./packages/data/build-module/reports/selectors.js
/**
 * Internal dependencies
 */

var EMPTY_OBJECT = {};
var selectors_getReportItemsError = function getReportItemsError(state, endpoint, query) {
  var resourceName = Object(utils["a" /* getResourceName */])(endpoint, query);
  return state.itemErrors[resourceName] || false;
};
var selectors_getReportItems = function getReportItems(state, endpoint, query) {
  var resourceName = Object(utils["a" /* getResourceName */])(endpoint, query);
  return state.items[resourceName] || EMPTY_OBJECT;
};
var selectors_getReportStats = function getReportStats(state, endpoint, query) {
  var resourceName = Object(utils["a" /* getResourceName */])(endpoint, query);
  return state.stats[resourceName] || EMPTY_OBJECT;
};
var selectors_getReportStatsError = function getReportStatsError(state, endpoint, query) {
  var resourceName = Object(utils["a" /* getResourceName */])(endpoint, query);
  return state.statErrors[resourceName] || false;
};
//# sourceMappingURL=selectors.js.map
// CONCATENATED MODULE: ./packages/data/build-module/reports/action-types.js
var TYPES = {
  SET_ITEM_ERROR: 'SET_ITEM_ERROR',
  SET_STAT_ERROR: 'SET_STAT_ERROR',
  SET_REPORT_ITEMS: 'SET_REPORT_ITEMS',
  SET_REPORT_STATS: 'SET_REPORT_STATS'
};
/* harmony default export */ var action_types = (TYPES);
//# sourceMappingURL=action-types.js.map
// CONCATENATED MODULE: ./packages/data/build-module/reports/actions.js
/**
 * Internal dependencies
 */


function setReportItemsError(endpoint, query, error) {
  var resourceName = Object(utils["a" /* getResourceName */])(endpoint, query);
  return {
    type: action_types.SET_ITEM_ERROR,
    resourceName: resourceName,
    error: error
  };
}
function setReportItems(endpoint, query, items) {
  var resourceName = Object(utils["a" /* getResourceName */])(endpoint, query);
  return {
    type: action_types.SET_REPORT_ITEMS,
    resourceName: resourceName,
    items: items
  };
}
function setReportStats(endpoint, query, stats) {
  var resourceName = Object(utils["a" /* getResourceName */])(endpoint, query);
  return {
    type: action_types.SET_REPORT_STATS,
    resourceName: resourceName,
    stats: stats
  };
}
function setReportStatsError(endpoint, query, error) {
  var resourceName = Object(utils["a" /* getResourceName */])(endpoint, query);
  return {
    type: action_types.SET_STAT_ERROR,
    resourceName: resourceName,
    error: error
  };
}
//# sourceMappingURL=actions.js.map
// EXTERNAL MODULE: external "regeneratorRuntime"
var external_regeneratorRuntime_ = __webpack_require__(6);
var external_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_regeneratorRuntime_);

// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__(38);

// EXTERNAL MODULE: ./packages/data/build-module/controls.js
var controls = __webpack_require__(125);

// EXTERNAL MODULE: ./packages/data/build-module/constants.js
var build_module_constants = __webpack_require__(32);

// CONCATENATED MODULE: ./packages/data/build-module/reports/resolvers.js


var _marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getReportItems),
    _marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getReportStats);

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




function resolvers_getReportItems(endpoint, query) {
  var fetchArgs, response, data, totalResults, totalPages;
  return external_regeneratorRuntime_default.a.wrap(function getReportItems$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          fetchArgs = {
            parse: false,
            path: Object(external_wp_url_["addQueryArgs"])("".concat(build_module_constants["g" /* NAMESPACE */], "/reports/").concat(endpoint), query)
          };
          _context.prev = 1;
          _context.next = 4;
          return Object(controls["b" /* fetchWithHeaders */])(fetchArgs);

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
  }, _marked, null, [[1, 12]]);
}
function resolvers_getReportStats(endpoint, query) {
  var fetchArgs, response, data, totalResults, totalPages;
  return external_regeneratorRuntime_default.a.wrap(function getReportStats$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          fetchArgs = {
            parse: false,
            path: Object(external_wp_url_["addQueryArgs"])("".concat(build_module_constants["g" /* NAMESPACE */], "/reports/").concat(endpoint, "/stats"), query)
          };
          _context2.prev = 1;
          _context2.next = 4;
          return Object(controls["b" /* fetchWithHeaders */])(fetchArgs);

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
  }, _marked2, null, [[1, 12]]);
}
//# sourceMappingURL=resolvers.js.map
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(4);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./packages/data/build-module/reports/reducer.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    case action_types.SET_REPORT_ITEMS:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: _objectSpread(_objectSpread({}, state.items), {}, defineProperty_default()({}, resourceName, items))
      });

    case action_types.SET_REPORT_STATS:
      return _objectSpread(_objectSpread({}, state), {}, {
        stats: _objectSpread(_objectSpread({}, state.stats), {}, defineProperty_default()({}, resourceName, stats))
      });

    case action_types.SET_ITEM_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        itemErrors: _objectSpread(_objectSpread({}, state.itemErrors), {}, defineProperty_default()({}, resourceName, error))
      });

    case action_types.SET_STAT_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        statErrors: _objectSpread(_objectSpread({}, state.statErrors), {}, defineProperty_default()({}, resourceName, error))
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducer = (reducer_reports);
//# sourceMappingURL=reducer.js.map
// CONCATENATED MODULE: ./packages/data/build-module/reports/index.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */







Object(external_wp_data_["registerStore"])(constants["a" /* STORE_NAME */], {
  reducer: reducer,
  actions: actions_namespaceObject,
  controls: controls["a" /* default */],
  selectors: selectors_namespaceObject,
  resolvers: resolvers_namespaceObject
});
var REPORTS_STORE_NAME = constants["a" /* STORE_NAME */];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ITEMS_STORE_NAME; });

// NAMESPACE OBJECT: ./packages/data/build-module/items/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getItems", function() { return selectors_getItems; });
__webpack_require__.d(selectors_namespaceObject, "getItemsTotalCount", function() { return selectors_getItemsTotalCount; });
__webpack_require__.d(selectors_namespaceObject, "getItemsError", function() { return selectors_getItemsError; });

// NAMESPACE OBJECT: ./packages/data/build-module/items/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "setItem", function() { return setItem; });
__webpack_require__.d(actions_namespaceObject, "setItems", function() { return setItems; });
__webpack_require__.d(actions_namespaceObject, "setItemsTotalCount", function() { return setItemsTotalCount; });
__webpack_require__.d(actions_namespaceObject, "setError", function() { return setError; });
__webpack_require__.d(actions_namespaceObject, "updateProductStock", function() { return updateProductStock; });
__webpack_require__.d(actions_namespaceObject, "createProductFromTemplate", function() { return createProductFromTemplate; });

// NAMESPACE OBJECT: ./packages/data/build-module/items/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getItems", function() { return resolvers_getItems; });
__webpack_require__.d(resolvers_namespaceObject, "getReviewsTotalCount", function() { return getReviewsTotalCount; });
__webpack_require__.d(resolvers_namespaceObject, "getItemsTotalCount", function() { return resolvers_getItemsTotalCount; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(15);

// EXTERNAL MODULE: ./packages/data/build-module/items/constants.js
var constants = __webpack_require__(233);

// EXTERNAL MODULE: ./packages/data/build-module/utils.js
var utils = __webpack_require__(80);

// EXTERNAL MODULE: ./packages/data/build-module/items/utils.js
var items_utils = __webpack_require__(217);

// CONCATENATED MODULE: ./packages/data/build-module/items/selectors.js
/**
 * Internal dependencies
 */


var selectors_getItems = function getItems(state, itemType, query) {
  var resourceName = Object(utils["a" /* getResourceName */])(itemType, query);
  var ids = state.items[resourceName] && state.items[resourceName].data || [];
  return ids.reduce(function (map, id) {
    map.set(id, state.data[itemType][id]);
    return map;
  }, new Map());
};
var selectors_getItemsTotalCount = function getItemsTotalCount(state, itemType, query) {
  var defaultValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var resourceName = Object(items_utils["b" /* getTotalCountResourceName */])(itemType, query);
  var totalCount = state.items.hasOwnProperty(resourceName) ? state.items[resourceName] : defaultValue;
  return totalCount;
};
var selectors_getItemsError = function getItemsError(state, itemType, query) {
  var resourceName = Object(utils["a" /* getResourceName */])(itemType, query);
  return state.errors[resourceName];
};
//# sourceMappingURL=selectors.js.map
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(4);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external "regeneratorRuntime"
var external_regeneratorRuntime_ = __webpack_require__(6);
var external_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_regeneratorRuntime_);

// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__(24);

// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__(38);

// CONCATENATED MODULE: ./packages/data/build-module/items/action-types.js
var TYPES = {
  SET_ITEM: 'SET_ITEM',
  SET_ITEMS: 'SET_ITEMS',
  SET_ITEMS_TOTAL_COUNT: 'SET_ITEMS_TOTAL_COUNT',
  SET_ERROR: 'SET_ERROR'
};
/* harmony default export */ var action_types = (TYPES);
//# sourceMappingURL=action-types.js.map
// EXTERNAL MODULE: ./packages/data/build-module/constants.js
var build_module_constants = __webpack_require__(32);

// CONCATENATED MODULE: ./packages/data/build-module/items/actions.js



var _marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(updateProductStock),
    _marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(createProductFromTemplate);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



function setItem(itemType, id, item) {
  return {
    type: action_types.SET_ITEM,
    id: id,
    item: item,
    itemType: itemType
  };
}
function setItems(itemType, query, items, totalCount) {
  return {
    type: action_types.SET_ITEMS,
    items: items,
    itemType: itemType,
    query: query,
    totalCount: totalCount
  };
}
function setItemsTotalCount(itemType, query, totalCount) {
  return {
    type: action_types.SET_ITEMS_TOTAL_COUNT,
    itemType: itemType,
    query: query,
    totalCount: totalCount
  };
}
function setError(itemType, query, error) {
  return {
    type: action_types.SET_ERROR,
    itemType: itemType,
    query: query,
    error: error
  };
}
function updateProductStock(product, quantity) {
  var updatedProduct, id, parentId, type, url;
  return external_regeneratorRuntime_default.a.wrap(function updateProductStock$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          updatedProduct = _objectSpread(_objectSpread({}, product), {}, {
            stock_quantity: quantity
          });
          id = updatedProduct.id, parentId = updatedProduct.parent_id, type = updatedProduct.type; // Optimistically update product stock.

          _context.next = 4;
          return setItem('products', id, updatedProduct);

        case 4:
          url = build_module_constants["g" /* NAMESPACE */];
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
          return Object(external_wp_dataControls_["apiFetch"])({
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
          return setError('products', id, _context.t1);

        case 23:
          return _context.abrupt("return", false);

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[11, 17]]);
}
function createProductFromTemplate(itemFields, query) {
  var url, newItem;
  return external_regeneratorRuntime_default.a.wrap(function createProductFromTemplate$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          url = Object(external_wp_url_["addQueryArgs"])("".concat(build_module_constants["k" /* WC_ADMIN_NAMESPACE */], "/onboarding/tasks/create_product_from_template"), query || {});
          _context2.next = 4;
          return Object(external_wp_dataControls_["apiFetch"])({
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
          return setError('createProductFromTemplate', query, _context2.t0);

        case 14:
          throw _context2.t0;

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 10]]);
}
//# sourceMappingURL=actions.js.map
// EXTERNAL MODULE: ./packages/data/build-module/controls.js
var controls = __webpack_require__(125);

// CONCATENATED MODULE: ./packages/data/build-module/items/resolvers.js


function resolvers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function resolvers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { resolvers_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { resolvers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var resolvers_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(request),
    resolvers_marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getItems),
    _marked3 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(getReviewsTotalCount),
    _marked4 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getItemsTotalCount);

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */





function request(itemType, query) {
  var endpoint, url, isUnboundedRequest, fetch, response, totalCount;
  return external_regeneratorRuntime_default.a.wrap(function request$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          endpoint = itemType === 'categories' ? 'products/categories' : itemType;
          url = Object(external_wp_url_["addQueryArgs"])("".concat(build_module_constants["g" /* NAMESPACE */], "/").concat(endpoint), query);
          isUnboundedRequest = query.per_page === -1;
          fetch = isUnboundedRequest ? external_wp_dataControls_["apiFetch"] : controls["b" /* fetchWithHeaders */];
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
  }, resolvers_marked);
}

function resolvers_getItems(itemType, query) {
  var _yield$request, items, totalCount;

  return external_regeneratorRuntime_default.a.wrap(function getItems$(_context2) {
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
          return setError(itemType, query, _context2.t0);

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, resolvers_marked2, null, [[0, 12]]);
}
function getReviewsTotalCount(itemType, query) {
  return external_regeneratorRuntime_default.a.wrap(function getReviewsTotalCount$(_context3) {
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
  }, _marked3);
}
function resolvers_getItemsTotalCount(itemType, query) {
  var totalsQuery, _yield$request2, totalCount;

  return external_regeneratorRuntime_default.a.wrap(function getItemsTotalCount$(_context4) {
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
          return setError(itemType, query, _context4.t0);

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 10]]);
}
//# sourceMappingURL=resolvers.js.map
// CONCATENATED MODULE: ./packages/data/build-module/items/reducer.js


function reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducer_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */




var reducer_reducer = function reducer() {
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
    case action_types.SET_ITEM:
      var itemData = state.data[itemType] || {};
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        data: reducer_objectSpread(reducer_objectSpread({}, state.data), {}, defineProperty_default()({}, itemType, reducer_objectSpread(reducer_objectSpread({}, itemData), {}, defineProperty_default()({}, id, reducer_objectSpread(reducer_objectSpread({}, itemData[id] || {}), item)))))
      });

    case action_types.SET_ITEMS:
      var ids = [];
      var nextItems = items.reduce(function (result, theItem) {
        ids.push(theItem.id);
        result[theItem.id] = theItem;
        return result;
      }, {});
      var resourceName = Object(utils["a" /* getResourceName */])(itemType, query);
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        items: reducer_objectSpread(reducer_objectSpread({}, state.items), {}, defineProperty_default()({}, resourceName, {
          data: ids
        })),
        data: reducer_objectSpread(reducer_objectSpread({}, state.data), {}, defineProperty_default()({}, itemType, reducer_objectSpread(reducer_objectSpread({}, state.data[itemType]), nextItems)))
      });

    case action_types.SET_ITEMS_TOTAL_COUNT:
      var totalResourceName = Object(items_utils["b" /* getTotalCountResourceName */])(itemType, query);
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        items: reducer_objectSpread(reducer_objectSpread({}, state.items), {}, defineProperty_default()({}, totalResourceName, totalCount))
      });

    case action_types.SET_ERROR:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        errors: reducer_objectSpread(reducer_objectSpread({}, state.errors), {}, defineProperty_default()({}, Object(utils["a" /* getResourceName */])(itemType, query), error))
      });

    default:
      return state;
  }
};

/* harmony default export */ var items_reducer = (reducer_reducer);
//# sourceMappingURL=reducer.js.map
// CONCATENATED MODULE: ./packages/data/build-module/items/index.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */







Object(external_wp_data_["registerStore"])(constants["a" /* STORE_NAME */], {
  reducer: items_reducer,
  actions: actions_namespaceObject,
  controls: controls["a" /* default */],
  selectors: selectors_namespaceObject,
  resolvers: resolvers_namespaceObject
});
var ITEMS_STORE_NAME = constants["a" /* STORE_NAME */];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ONBOARDING_STORE_NAME; });

// NAMESPACE OBJECT: ./packages/data/build-module/onboarding/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "setError", function() { return setError; });
__webpack_require__.d(actions_namespaceObject, "setIsRequesting", function() { return setIsRequesting; });
__webpack_require__.d(actions_namespaceObject, "setProfileItems", function() { return setProfileItems; });
__webpack_require__.d(actions_namespaceObject, "setTasksStatus", function() { return setTasksStatus; });
__webpack_require__.d(actions_namespaceObject, "updateProfileItems", function() { return updateProfileItems; });

// NAMESPACE OBJECT: ./packages/data/build-module/onboarding/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getProfileItems", function() { return getProfileItems; });
__webpack_require__.d(resolvers_namespaceObject, "getTasksStatus", function() { return getTasksStatus; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(15);

// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__(24);

// EXTERNAL MODULE: ./packages/data/build-module/onboarding/constants.js
var constants = __webpack_require__(232);

// EXTERNAL MODULE: ./packages/data/build-module/onboarding/selectors.js
var selectors = __webpack_require__(272);

// EXTERNAL MODULE: external "regeneratorRuntime"
var external_regeneratorRuntime_ = __webpack_require__(6);
var external_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_regeneratorRuntime_);

// CONCATENATED MODULE: ./packages/data/build-module/onboarding/action-types.js
var TYPES = {
  SET_ERROR: 'SET_ERROR',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING',
  SET_PROFILE_ITEMS: 'SET_PROFILE_ITEMS',
  SET_TASKS_STATUS: 'SET_TASKS_STATUS'
};
/* harmony default export */ var action_types = (TYPES);
//# sourceMappingURL=action-types.js.map
// EXTERNAL MODULE: ./packages/data/build-module/constants.js
var build_module_constants = __webpack_require__(32);

// CONCATENATED MODULE: ./packages/data/build-module/onboarding/actions.js


var _marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(updateProfileItems);

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function setError(selector, error) {
  return {
    type: action_types.SET_ERROR,
    selector: selector,
    error: error
  };
}
function setIsRequesting(selector, isRequesting) {
  return {
    type: action_types.SET_IS_REQUESTING,
    selector: selector,
    isRequesting: isRequesting
  };
}
function setProfileItems(profileItems) {
  var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    type: action_types.SET_PROFILE_ITEMS,
    profileItems: profileItems,
    replace: replace
  };
}
function setTasksStatus(tasksStatus) {
  return {
    type: action_types.SET_TASKS_STATUS,
    tasksStatus: tasksStatus
  };
}
function updateProfileItems(items) {
  var results;
  return external_regeneratorRuntime_default.a.wrap(function updateProfileItems$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return setIsRequesting('updateProfileItems', true);

        case 2:
          _context.prev = 2;
          _context.next = 5;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: "".concat(build_module_constants["k" /* WC_ADMIN_NAMESPACE */], "/onboarding/profile"),
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
          return setProfileItems(items);

        case 9:
          _context.next = 11;
          return setIsRequesting('updateProfileItems', false);

        case 11:
          return _context.abrupt("return", results);

        case 12:
          throw new Error();

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](2);
          _context.next = 19;
          return setError('updateProfileItems', _context.t0);

        case 19:
          _context.next = 21;
          return setIsRequesting('updateProfileItems', false);

        case 21:
          throw new Error();

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[2, 15]]);
}
//# sourceMappingURL=actions.js.map
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/resolvers.js


var resolvers_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(getProfileItems),
    _marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(getTasksStatus);

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function getProfileItems() {
  var results;
  return external_regeneratorRuntime_default.a.wrap(function getProfileItems$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: build_module_constants["k" /* WC_ADMIN_NAMESPACE */] + '/onboarding/profile',
            method: 'GET'
          });

        case 3:
          results = _context.sent;
          _context.next = 6;
          return setProfileItems(results, true);

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _context.next = 12;
          return setError('getProfileItems', _context.t0);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, resolvers_marked, null, [[0, 8]]);
}
function getTasksStatus() {
  var results;
  return external_regeneratorRuntime_default.a.wrap(function getTasksStatus$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: build_module_constants["k" /* WC_ADMIN_NAMESPACE */] + '/onboarding/tasks/status',
            method: 'GET'
          });

        case 3:
          results = _context2.sent;
          _context2.next = 6;
          return setTasksStatus(results, true);

        case 6:
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 12;
          return setError('getTasksStatus', _context2.t0);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
}
//# sourceMappingURL=resolvers.js.map
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(4);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./packages/data/build-module/onboarding/reducer.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */

var defaultState = {
  errors: {},
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
  requesting: {},
  tasksStatus: {}
};

var reducer_onboarding = function onboarding() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      profileItems = _ref.profileItems,
      replace = _ref.replace,
      error = _ref.error,
      isRequesting = _ref.isRequesting,
      selector = _ref.selector,
      tasksStatus = _ref.tasksStatus;

  switch (type) {
    case action_types.SET_PROFILE_ITEMS:
      return _objectSpread(_objectSpread({}, state), {}, {
        profileItems: replace ? profileItems : _objectSpread(_objectSpread({}, state.profileItems), profileItems)
      });

    case action_types.SET_TASKS_STATUS:
      return _objectSpread(_objectSpread({}, state), {}, {
        tasksStatus: _objectSpread(_objectSpread({}, state.tasksStatus), tasksStatus)
      });

    case action_types.SET_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        errors: _objectSpread(_objectSpread({}, state.errors), {}, defineProperty_default()({}, selector, error))
      });

    case action_types.SET_IS_REQUESTING:
      return _objectSpread(_objectSpread({}, state), {}, {
        requesting: _objectSpread(_objectSpread({}, state.requesting), {}, defineProperty_default()({}, selector, isRequesting))
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducer = (reducer_onboarding);
//# sourceMappingURL=reducer.js.map
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






Object(external_wp_data_["registerStore"])(constants["a" /* STORE_NAME */], {
  reducer: reducer,
  actions: actions_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  selectors: selectors,
  resolvers: resolvers_namespaceObject
});
var ONBOARDING_STORE_NAME = constants["a" /* STORE_NAME */];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

(function() { module.exports = window["wc"]["date"]; }());

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(586);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(394);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_1__) if(["SETTINGS_STORE_NAME","withSettingsHydration","useSettings","PLUGINS_STORE_NAME","pluginNames","withPluginsHydration","ONBOARDING_STORE_NAME","withOnboardingHydration","USER_STORE_NAME","withCurrentUserHydration","useUser","useUserPreferences","OPTIONS_STORE_NAME","withOptionsHydration","useOptionsHydration","REVIEWS_STORE_NAME","NOTES_STORE_NAME","REPORTS_STORE_NAME","ITEMS_STORE_NAME","getLeaderboard","searchItemsByString","NAVIGATION_STORE_NAME","withNavigationHydration","getFilterQuery","getSummaryNumbers","getReportTableData","getReportTableQuery","getReportChartData","getTooltipValueFormat","MAX_PER_PAGE","QUERY_DEFAULTS","NAMESPACE","WC_ADMIN_NAMESPACE","WCS_NAMESPACE","SECOND","MINUTE","HOUR","DAY","WEEK","MONTH","EXPORT_STORE_NAME","IMPORT_STORE_NAME","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(410);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SETTINGS_STORE_NAME", function() { return _settings__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _settings_with_settings_hydration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(395);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withSettingsHydration", function() { return _settings_with_settings_hydration__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _settings_use_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(396);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSettings", function() { return _settings_use_settings__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(411);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLUGINS_STORE_NAME", function() { return _plugins__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _plugins_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(105);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluginNames", function() { return _plugins_constants__WEBPACK_IMPORTED_MODULE_6__["c"]; });

/* harmony import */ var _plugins_with_plugins_hydration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(397);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPluginsHydration", function() { return _plugins_with_plugins_hydration__WEBPACK_IMPORTED_MODULE_7__["a"]; });

/* harmony import */ var _onboarding__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(415);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ONBOARDING_STORE_NAME", function() { return _onboarding__WEBPACK_IMPORTED_MODULE_8__["a"]; });

/* harmony import */ var _onboarding_with_onboarding_hydration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(398);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withOnboardingHydration", function() { return _onboarding_with_onboarding_hydration__WEBPACK_IMPORTED_MODULE_9__["a"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(399);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USER_STORE_NAME", function() { return _user__WEBPACK_IMPORTED_MODULE_10__["a"]; });

/* harmony import */ var _user_with_current_user_hydration__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(400);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withCurrentUserHydration", function() { return _user_with_current_user_hydration__WEBPACK_IMPORTED_MODULE_11__["a"]; });

/* harmony import */ var _user_use_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(401);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUser", function() { return _user_use_user__WEBPACK_IMPORTED_MODULE_12__["a"]; });

/* harmony import */ var _user_use_user_preferences__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(402);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUserPreferences", function() { return _user_use_user_preferences__WEBPACK_IMPORTED_MODULE_13__["a"]; });

/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(273);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OPTIONS_STORE_NAME", function() { return _options__WEBPACK_IMPORTED_MODULE_14__["a"]; });

/* harmony import */ var _options_with_options_hydration__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(317);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withOptionsHydration", function() { return _options_with_options_hydration__WEBPACK_IMPORTED_MODULE_15__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOptionsHydration", function() { return _options_with_options_hydration__WEBPACK_IMPORTED_MODULE_15__["a"]; });

/* harmony import */ var _reviews__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(406);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REVIEWS_STORE_NAME", function() { return _reviews__WEBPACK_IMPORTED_MODULE_16__["a"]; });

/* harmony import */ var _notes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(405);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOTES_STORE_NAME", function() { return _notes__WEBPACK_IMPORTED_MODULE_17__["a"]; });

/* harmony import */ var _reports__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(412);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REPORTS_STORE_NAME", function() { return _reports__WEBPACK_IMPORTED_MODULE_18__["a"]; });

/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(413);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ITEMS_STORE_NAME", function() { return _items__WEBPACK_IMPORTED_MODULE_19__["a"]; });

/* harmony import */ var _items_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(217);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLeaderboard", function() { return _items_utils__WEBPACK_IMPORTED_MODULE_20__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "searchItemsByString", function() { return _items_utils__WEBPACK_IMPORTED_MODULE_20__["c"]; });

/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(407);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_STORE_NAME", function() { return _navigation__WEBPACK_IMPORTED_MODULE_21__["a"]; });

/* harmony import */ var _navigation_with_navigation_hydration__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(403);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withNavigationHydration", function() { return _navigation_with_navigation_hydration__WEBPACK_IMPORTED_MODULE_22__["a"]; });

/* harmony import */ var _reports_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(196);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFilterQuery", function() { return _reports_utils__WEBPACK_IMPORTED_MODULE_23__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSummaryNumbers", function() { return _reports_utils__WEBPACK_IMPORTED_MODULE_23__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getReportTableData", function() { return _reports_utils__WEBPACK_IMPORTED_MODULE_23__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getReportTableQuery", function() { return _reports_utils__WEBPACK_IMPORTED_MODULE_23__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getReportChartData", function() { return _reports_utils__WEBPACK_IMPORTED_MODULE_23__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTooltipValueFormat", function() { return _reports_utils__WEBPACK_IMPORTED_MODULE_23__["f"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(32);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_PER_PAGE", function() { return _constants__WEBPACK_IMPORTED_MODULE_24__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QUERY_DEFAULTS", function() { return _constants__WEBPACK_IMPORTED_MODULE_24__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NAMESPACE", function() { return _constants__WEBPACK_IMPORTED_MODULE_24__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WC_ADMIN_NAMESPACE", function() { return _constants__WEBPACK_IMPORTED_MODULE_24__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WCS_NAMESPACE", function() { return _constants__WEBPACK_IMPORTED_MODULE_24__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SECOND", function() { return _constants__WEBPACK_IMPORTED_MODULE_24__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MINUTE", function() { return _constants__WEBPACK_IMPORTED_MODULE_24__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HOUR", function() { return _constants__WEBPACK_IMPORTED_MODULE_24__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DAY", function() { return _constants__WEBPACK_IMPORTED_MODULE_24__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WEEK", function() { return _constants__WEBPACK_IMPORTED_MODULE_24__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MONTH", function() { return _constants__WEBPACK_IMPORTED_MODULE_24__["f"]; });

/* harmony import */ var _export__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(408);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXPORT_STORE_NAME", function() { return _export__WEBPACK_IMPORTED_MODULE_25__["a"]; });

/* harmony import */ var _import__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(409);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IMPORT_STORE_NAME", function() { return _import__WEBPACK_IMPORTED_MODULE_26__["a"]; });

/* harmony import */ var _onboarding_selectors__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(272);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProfileItems", function() { return _onboarding_selectors__WEBPACK_IMPORTED_MODULE_27__["getProfileItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTasksStatus", function() { return _onboarding_selectors__WEBPACK_IMPORTED_MODULE_27__["getTasksStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOnboardingError", function() { return _onboarding_selectors__WEBPACK_IMPORTED_MODULE_27__["getOnboardingError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isOnboardingRequesting", function() { return _onboarding_selectors__WEBPACK_IMPORTED_MODULE_27__["isOnboardingRequesting"]; });

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




























//# sourceMappingURL=index.js.map

/***/ }),

/***/ 586:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["coreData"]; }());

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

(function() { module.exports = window["regeneratorRuntime"]; }());

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(199);

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

/***/ 67:
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

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getResourceName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getResourcePrefix; });
/* unused harmony export isResourcePrefix */
/* unused harmony export getResourceIdentifier */
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
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 87:
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

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(87);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ })

/******/ });