(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[32],{

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createNoticesFromResponse; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

function createNoticesFromResponse(response) {
  var _dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["dispatch"])('core/notices'),
      createNotice = _dispatch.createNotice;

  if (response.error_data && response.errors && Object.keys(response.errors).length) {
    // Loop over multi-error responses.
    Object.keys(response.errors).forEach(function (errorKey) {
      createNotice('error', response.errors[errorKey].join(' '));
    });
  } else if (response.message) {
    // Handle generic messages.
    createNotice(response.code ? 'error' : 'success', response.message);
  }
}

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useInstanceId; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

var instanceMap = new WeakMap();
/**
 * Creates a new id for a given object.
 *
 * @param {Object} object Object reference to create an id for.
 */

function createId(object) {
  var instances = instanceMap.get(object) || 0;
  instanceMap.set(object, instances + 1);
  return instances;
}
/**
 * Provides a unique instance ID.
 *
 * @param {Object} object Object reference to create an id for.
 * @param {string} prefix Prefix for the unique id.
 */


function useInstanceId(object, prefix) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var id = createId(object);
    return prefix ? "".concat(prefix, "-").concat(id) : id;
  }, [object]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 739:
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(115);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var wc_api_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(739);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WooCommerce dependencies
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
      value: [Object(lib_date__WEBPACK_IMPORTED_MODULE_4__[/* appendTimestamp */ "a"])(moment__WEBPACK_IMPORTED_MODULE_3___default()(after), timeOfDayMap.after), Object(lib_date__WEBPACK_IMPORTED_MODULE_4__[/* appendTimestamp */ "a"])(moment__WEBPACK_IMPORTED_MODULE_3___default()(before), timeOfDayMap.before)]
    });
  }

  return Object.assign({}, activeFilter, {
    value: Object(lib_date__WEBPACK_IMPORTED_MODULE_4__[/* appendTimestamp */ "a"])(moment__WEBPACK_IMPORTED_MODULE_3___default()(value), timeOfDayMap[rule])
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

    return activeFilters.map(function (filter) {
      return timeStampFilterDates(advancedFilters, filter);
    }).reduce(function (result, activeFilter) {
      var key = activeFilter.key,
          rule = activeFilter.rule,
          value = activeFilter.value;
      result[Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__["getUrlKey"])(key, rule)] = value;
      return result;
    }, {
      match: query.match || 'all'
    });
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
  var datesFromQuery = Object(lib_date__WEBPACK_IMPORTED_MODULE_4__[/* getCurrentDates */ "f"])(query, options.defaultDateRange);
  var interval = Object(lib_date__WEBPACK_IMPORTED_MODULE_4__[/* getIntervalForQuery */ "i"])(query);
  var filterQuery = getFilterQuery(options);
  var end = datesFromQuery[dataType].before;
  var noIntervals = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["includes"])(noIntervalEndpoints, endpoint);
  return noIntervals ? _objectSpread(_objectSpread({}, filterQuery), {}, {
    fields: fields
  }) : _objectSpread({
    order: 'asc',
    interval: interval,
    per_page: wc_api_constants__WEBPACK_IMPORTED_MODULE_6__[/* MAX_PER_PAGE */ "b"],
    after: Object(lib_date__WEBPACK_IMPORTED_MODULE_4__[/* appendTimestamp */ "a"])(datesFromQuery[dataType].after, 'start'),
    before: Object(lib_date__WEBPACK_IMPORTED_MODULE_4__[/* appendTimestamp */ "a"])(end, 'end'),
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

  var _select = select('wc-api'),
      getReportStats = _select.getReportStats,
      getReportStatsError = _select.getReportStatsError,
      isReportStatsRequesting = _select.isReportStatsRequesting;

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

  if (isReportStatsRequesting(endpoint, primaryQuery)) {
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

  if (isReportStatsRequesting(endpoint, secondaryQuery)) {
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

  var _select2 = select('wc-api'),
      getReportStats = _select2.getReportStats,
      getReportStatsError = _select2.getReportStatsError,
      isReportStatsRequesting = _select2.isReportStatsRequesting;

  var response = {
    isEmpty: false,
    isError: false,
    isRequesting: false,
    data: {
      totals: {},
      intervals: []
    }
  };
  var requestQuery = getRequestQuery(options); // Disable eslint rule requiring `stats` to be defined below because the next two if statements
  // depend on `getReportStats` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  var stats = getReportStats(endpoint, requestQuery);

  if (isReportStatsRequesting(endpoint, requestQuery)) {
    return _objectSpread(_objectSpread({}, response), {}, {
      isRequesting: true
    });
  }

  if (getReportStatsError(endpoint, requestQuery)) {
    return _objectSpread(_objectSpread({}, response), {}, {
      isError: true
    });
  }

  if (isReportDataEmpty(stats, endpoint)) {
    return _objectSpread(_objectSpread({}, response), {}, {
      isEmpty: true
    });
  }

  var totals = stats && stats.data && stats.data.totals || null;
  var intervals = stats && stats.data && stats.data.intervals || []; // If we have more than 100 results for this time period,
  // we need to make additional requests to complete the response.

  if (stats.totalResults > wc_api_constants__WEBPACK_IMPORTED_MODULE_6__[/* MAX_PER_PAGE */ "b"]) {
    var isFetching = true;
    var isError = false;
    var pagedData = [];
    var totalPages = Math.ceil(stats.totalResults / wc_api_constants__WEBPACK_IMPORTED_MODULE_6__[/* MAX_PER_PAGE */ "b"]);
    var pagesFetched = 1;

    for (var i = 2; i <= totalPages; i++) {
      var nextQuery = _objectSpread(_objectSpread({}, requestQuery), {}, {
        page: i
      });

      var _data = getReportStats(endpoint, nextQuery);

      if (isReportStatsRequesting(endpoint, nextQuery)) {
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
      return _objectSpread(_objectSpread({}, response), {}, {
        isRequesting: true
      });
    } else if (isError) {
      return _objectSpread(_objectSpread({}, response), {}, {
        isError: true
      });
    }

    Object(lodash__WEBPACK_IMPORTED_MODULE_2__["forEach"])(pagedData, function (_data) {
      intervals = intervals.concat(_data.data.intervals);
    });
  }

  return _objectSpread(_objectSpread({}, response), {}, {
    data: {
      totals: totals,
      intervals: intervals
    }
  });
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
  var datesFromQuery = Object(lib_date__WEBPACK_IMPORTED_MODULE_4__[/* getCurrentDates */ "f"])(query, options.defaultDateRange);
  var noIntervals = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["includes"])(noIntervalEndpoints, options.endpoint);
  return _objectSpread(_objectSpread({
    orderby: query.orderby || 'date',
    order: query.order || 'desc',
    after: noIntervals ? undefined : Object(lib_date__WEBPACK_IMPORTED_MODULE_4__[/* appendTimestamp */ "a"])(datesFromQuery.primary.after, 'start'),
    before: noIntervals ? undefined : Object(lib_date__WEBPACK_IMPORTED_MODULE_4__[/* appendTimestamp */ "a"])(datesFromQuery.primary.before, 'end'),
    page: query.paged || 1,
    per_page: query.per_page || wc_api_constants__WEBPACK_IMPORTED_MODULE_6__[/* QUERY_DEFAULTS */ "d"].pageSize
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

  var _select3 = select('wc-api'),
      getReportItems = _select3.getReportItems,
      getReportItemsError = _select3.getReportItemsError,
      isReportItemsRequesting = _select3.isReportItemsRequesting;

  var tableQuery = _utils__WEBPACK_IMPORTED_MODULE_7__[/* getReportTableQuery */ "d"](options);
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

  if (isReportItemsRequesting(endpoint, tableQuery)) {
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

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ALLOWED_TAGS */
/* unused harmony export ALLOWED_ATTR */
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(756);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

var ALLOWED_TAGS = ['a', 'b', 'em', 'i', 'strong', 'p'];
var ALLOWED_ATTR = ['target', 'href', 'rel', 'name', 'download'];
/* harmony default export */ __webpack_exports__["a"] = (function (html) {
  return {
    __html: Object(dompurify__WEBPACK_IMPORTED_MODULE_0__["sanitize"])(html, {
      ALLOWED_TAGS: ALLOWED_TAGS,
      ALLOWED_ATTR: ALLOWED_ATTR
    })
  };
});

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(759);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(750);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_10__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */




var ActivityHeader = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ActivityHeader, _Component);

  var _super = _createSuper(ActivityHeader);

  function ActivityHeader() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ActivityHeader);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ActivityHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          menu = _this$props.menu,
          subtitle = _this$props.subtitle,
          title = _this$props.title,
          unreadMessages = _this$props.unreadMessages;
      var cardClassName = classnames__WEBPACK_IMPORTED_MODULE_6___default()({
        'woocommerce-layout__inbox-panel-header': subtitle,
        'woocommerce-layout__activity-panel-header': !subtitle
      }, className);
      var countUnread = unreadMessages ? unreadMessages : 0;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: cardClassName
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "woocommerce-layout__inbox-title"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        variant: "title.small"
      }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        variant: "button"
      }, countUnread > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: "woocommerce-layout__inbox-badge"
      }, unreadMessages))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "woocommerce-layout__inbox-subtitle"
      }, subtitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        variant: "body.small"
      }, subtitle)), menu && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "woocommerce-layout__activity-panel-header-menu"
      }, menu));
    }
  }]);

  return ActivityHeader;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

ActivityHeader.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  unreadMessages: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  title: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  menu: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({
    type: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf([_woocommerce_components__WEBPACK_IMPORTED_MODULE_10__["EllipsisMenu"]])
  })
};
/* harmony default export */ __webpack_exports__["a"] = (ActivityHeader);

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ activity_card_ActivityCard; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ placeholder; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(13);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(12);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(14);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(15);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(6);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/gridicons/dist/index.js
var dist = __webpack_require__(86);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(17);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./client/header/activity-panel/activity-card/style.scss
var style = __webpack_require__(752);

// EXTERNAL MODULE: external {"this":["wc","components"]}
var external_this_wc_components_ = __webpack_require__(55);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// CONCATENATED MODULE: ./client/header/activity-panel/activity-card/placeholder.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */





var placeholder_ActivityCardPlaceholder = /*#__PURE__*/function (_Component) {
  inherits_default()(ActivityCardPlaceholder, _Component);

  var _super = _createSuper(ActivityCardPlaceholder);

  function ActivityCardPlaceholder() {
    classCallCheck_default()(this, ActivityCardPlaceholder);

    return _super.apply(this, arguments);
  }

  createClass_default()(ActivityCardPlaceholder, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          hasAction = _this$props.hasAction,
          hasDate = _this$props.hasDate,
          hasSubtitle = _this$props.hasSubtitle,
          lines = _this$props.lines;
      var cardClassName = classnames_default()('woocommerce-activity-card is-loading', className);
      return Object(external_this_wp_element_["createElement"])("div", {
        className: cardClassName,
        "aria-hidden": true
      }, Object(external_this_wp_element_["createElement"])("span", {
        className: "woocommerce-activity-card__icon"
      }, Object(external_this_wp_element_["createElement"])("span", {
        className: "is-placeholder"
      })), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__header"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__title is-placeholder"
      }), hasSubtitle && Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__subtitle is-placeholder"
      }), hasDate && Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__date"
      }, Object(external_this_wp_element_["createElement"])("span", {
        className: "is-placeholder"
      }))), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__body"
      }, Object(external_lodash_["range"])(lines).map(function (i) {
        return Object(external_this_wp_element_["createElement"])("span", {
          className: "is-placeholder",
          key: i
        });
      })), hasAction && Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__actions"
      }, Object(external_this_wp_element_["createElement"])("span", {
        className: "is-placeholder"
      })));
    }
  }]);

  return ActivityCardPlaceholder;
}(external_this_wp_element_["Component"]);

placeholder_ActivityCardPlaceholder.propTypes = {
  className: prop_types_default.a.string,
  hasAction: prop_types_default.a.bool,
  hasDate: prop_types_default.a.bool,
  hasSubtitle: prop_types_default.a.bool,
  lines: prop_types_default.a.number
};
placeholder_ActivityCardPlaceholder.defaultProps = {
  hasAction: false,
  hasDate: false,
  hasSubtitle: false,
  lines: 1
};
/* harmony default export */ var placeholder = (placeholder_ActivityCardPlaceholder);
// CONCATENATED MODULE: ./client/header/activity-panel/activity-card/index.js







function activity_card_createSuper(Derived) { var hasNativeReflectConstruct = activity_card_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function activity_card_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */





/**
 * Internal dependencies
 */




var activity_card_ActivityCard = /*#__PURE__*/function (_Component) {
  inherits_default()(ActivityCard, _Component);

  var _super = activity_card_createSuper(ActivityCard);

  function ActivityCard() {
    classCallCheck_default()(this, ActivityCard);

    return _super.apply(this, arguments);
  }

  createClass_default()(ActivityCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          actions = _this$props.actions,
          className = _this$props.className,
          children = _this$props.children,
          date = _this$props.date,
          icon = _this$props.icon,
          subtitle = _this$props.subtitle,
          title = _this$props.title,
          unread = _this$props.unread;
      var cardClassName = classnames_default()('woocommerce-activity-card', className);
      var actionsList = Array.isArray(actions) ? actions : [actions];
      return Object(external_this_wp_element_["createElement"])("section", {
        className: cardClassName
      }, unread && Object(external_this_wp_element_["createElement"])("span", {
        className: "woocommerce-activity-card__unread"
      }), icon && Object(external_this_wp_element_["createElement"])("span", {
        className: "woocommerce-activity-card__icon",
        "aria-hidden": true
      }, icon), Object(external_this_wp_element_["createElement"])("header", {
        className: "woocommerce-activity-card__header"
      }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["H"], {
        className: "woocommerce-activity-card__title"
      }, title), subtitle && Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__subtitle"
      }, subtitle), date && Object(external_this_wp_element_["createElement"])("span", {
        className: "woocommerce-activity-card__date"
      }, external_moment_default.a.utc(date).fromNow())), Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Section"], {
        className: "woocommerce-activity-card__body"
      }, children), actions && Object(external_this_wp_element_["createElement"])("footer", {
        className: "woocommerce-activity-card__actions"
      }, actionsList.map(function (item, i) {
        return Object(external_this_wp_element_["cloneElement"])(item, {
          key: i
        });
      })));
    }
  }]);

  return ActivityCard;
}(external_this_wp_element_["Component"]);

activity_card_ActivityCard.propTypes = {
  actions: prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.element), prop_types_default.a.element]),
  className: prop_types_default.a.string,
  children: prop_types_default.a.node.isRequired,
  date: prop_types_default.a.string,
  icon: prop_types_default.a.node,
  subtitle: prop_types_default.a.node,
  title: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.node]).isRequired,
  unread: prop_types_default.a.bool
};
activity_card_ActivityCard.defaultProps = {
  icon: Object(external_this_wp_element_["createElement"])(dist_default.a, {
    icon: "notice-outline",
    size: 48
  }),
  unread: false
};



/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js + 1 modules
var styled_base_browser_esm = __webpack_require__(280);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(98);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/text/styles/font-family.js
var fontFamily = "font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\nOxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;";
//# sourceMappingURL=font-family.js.map
// EXTERNAL MODULE: ./node_modules/@emotion/core/dist/core.browser.esm.js + 5 modules
var core_browser_esm = __webpack_require__(167);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/text/styles/emotion-css.js
/**
 * External dependencies
 */

/* harmony default export */ var emotion_css = (core_browser_esm["b" /* css */]);
//# sourceMappingURL=emotion-css.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/text/styles/text-mixins.js


function _templateObject9() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t", "\n\t", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\t\t\t", "\n\t\t\t\t", "\n\t\t\t"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\t\t\t", "\n\t\t\t\t", "\n\t\t\t"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\t\t\t", "\n\t\t\t"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\t\t\t", "\n\t\t\t\t", "\n\t\t\t"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\t\t\t", "\n\t\t\t\t", "\n\t\t\t"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\t\t\t", "\n\t\t\t\t", "\n\t\t\t"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\t\t\t", "\n\t\t\t\t", "\n\t\t\t"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\t\t\t", "\n\t\t\t\t", "\n\t\t\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/**
 * Internal dependencies
 */


var fontWeightNormal = "font-weight: 400;";
var fontWeightSemibold = "font-weight: 600;";
var title = "\n  ".concat(fontWeightNormal, "\n");
var titleLarge = "\n\tfont-size: 32px;\n\tline-height: 40px;\n";
var titleMedium = "\n\tfont-size: 24px;\n\tline-height: 32px;\n";
var titleSmall = "\n\tfont-size: 20px;\n\tline-height: 28px;\n";
var subtitle = "\n\t".concat(fontWeightSemibold, "\n\tfont-size: 14px;\n\tline-height: 20px;\n");
var subtitleLarge = "\n\tfont-size: 16px;\n\tline-height: 24px;\n";
var subtitleSmall = "\n\tfont-size: 14px;\n\tline-height: 20px;\n";
var body = "\n\t".concat(fontWeightNormal, "\n");
var bodyLarge = "\n\tfont-size: 16px;\n\tline-height: 24px;\n";
var bodySmall = "\n\tfont-size: 14px;\n\tline-height: 20px;\n";
var text_mixins_button = "\n  ".concat(fontWeightSemibold, "\n  font-size: 14px;\n  line-height: 20px;\n");
var caption = "\n\t".concat(fontWeightNormal, "\n\tfont-size: 12px;\n\tline-height: 16px;\n");
var label = "\n\t".concat(fontWeightSemibold, "\n\tfont-size: 12px;\n\tline-height: 16px;\n");
/**
 * @typedef {'title.large'|'title.medium'|'title.small'|'subtitle'|'subtitle.small'|'body'|'body.large'|'body.small'|'button'|'caption'|'label'} TextVariant
 */

/**
 * @param {TextVariant} variantName
 */

var text_mixins_variant = function variant() {
  var variantName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';

  switch (variantName) {
    case 'title.large':
      return emotion_css(_templateObject(), title, titleLarge);

    case 'title.medium':
      return emotion_css(_templateObject2(), title, titleMedium);

    case 'title.small':
      return emotion_css(_templateObject3(), title, titleSmall);

    case 'subtitle':
      return emotion_css(_templateObject4(), subtitle, subtitleLarge);

    case 'subtitle.small':
      return emotion_css(_templateObject5(), subtitle, subtitleSmall);

    case 'body':
      return emotion_css(_templateObject6(), body);

    case 'body.large':
      return emotion_css(_templateObject7(), body, bodyLarge);

    case 'body.small':
      return emotion_css(_templateObject8(), body, bodySmall);

    case 'button':
      return text_mixins_button;

    case 'caption':
      return caption;

    case 'label':
      return label;
  }
};
/**
 * @typedef {Object} TextProps
 * @property {TextVariant} variant one of TextVariant to be used
 */

/**
 * @param {TextProps} props
 */


var text_mixins_text = function text(props) {
  return emotion_css(_templateObject9(), fontFamily, text_mixins_variant(props.variant));
};
//# sourceMappingURL=text-mixins.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/text/index.js


/**
 * Internal dependencies
 */


var Text = Object(styled_base_browser_esm["a" /* default */])("p", {
  target: "e15wbhsk0",
  label: "Text"
})("\n\tbox-sizing: border-box;\n\tmargin: 0;\n", text_mixins_text,  true ? "" : undefined);

/* harmony default export */ var build_module_text = __webpack_exports__["a"] = (Text);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getIndicatorValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIndicatorData; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_date__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(219);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_number__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28);
/* harmony import */ var wc_api_reports_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(739);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WooCommerce dependencies
 */








function getReportUrl(href, persistedQuery, primaryItem) {
  if (!href) {
    return '';
  }

  if (href === '/jetpack') {
    return Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_7__[/* getAdminLink */ "f"])('admin.php?page=jetpack#/dashboard');
  }

  return Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__["getNewPath"])(persistedQuery, href, {
    chart: primaryItem.chart
  });
}

var getIndicatorValues = function getIndicatorValues(_ref) {
  var indicator = _ref.indicator,
      primaryData = _ref.primaryData,
      secondaryData = _ref.secondaryData,
      currency = _ref.currency,
      formatAmount = _ref.formatAmount,
      persistedQuery = _ref.persistedQuery;
  var primaryItem = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["find"])(primaryData.data, function (data) {
    return data.stat === indicator.stat;
  });
  var secondaryItem = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["find"])(secondaryData.data, function (data) {
    return data.stat === indicator.stat;
  });

  if (!primaryItem || !secondaryItem) {
    return {};
  }

  var href = primaryItem._links && primaryItem._links.report[0] && primaryItem._links.report[0].href || '';
  var reportUrl = getReportUrl(href, persistedQuery, primaryItem);
  var reportUrlType = href === '/jetpack' ? 'wp-admin' : 'wc-admin';
  var isCurrency = primaryItem.format === 'currency';
  var delta = Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_6__["calculateDelta"])(primaryItem.value, secondaryItem.value);
  var primaryValue = isCurrency ? formatAmount(primaryItem.value) : Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_6__["formatValue"])(currency, primaryItem.format, primaryItem.value);
  var secondaryValue = isCurrency ? formatAmount(secondaryItem.value) : Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_6__["formatValue"])(currency, secondaryItem.format, secondaryItem.value);
  return {
    primaryValue: primaryValue,
    secondaryValue: secondaryValue,
    delta: delta,
    reportUrl: reportUrl,
    reportUrlType: reportUrlType
  };
};
var getIndicatorData = function getIndicatorData(select, indicators, query, filters) {
  var _select = select('wc-api'),
      getReportItems = _select.getReportItems,
      getReportItemsError = _select.getReportItemsError,
      isReportItemsRequesting = _select.isReportItemsRequesting;

  var _select$getSetting = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings'),
      defaultDateRange = _select$getSetting.woocommerce_default_date_range;

  var datesFromQuery = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_3__["getCurrentDates"])(query, defaultDateRange);
  var endPrimary = datesFromQuery.primary.before;
  var endSecondary = datesFromQuery.secondary.before;
  var statKeys = indicators.map(function (indicator) {
    return indicator.stat;
  }).join(',');
  var filterQuery = Object(wc_api_reports_utils__WEBPACK_IMPORTED_MODULE_8__[/* getFilterQuery */ "a"])({
    filters: filters,
    query: query
  });

  var primaryQuery = _objectSpread(_objectSpread({}, filterQuery), {}, {
    after: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_3__["appendTimestamp"])(datesFromQuery.primary.after, 'start'),
    before: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_3__["appendTimestamp"])(endPrimary, endPrimary.isSame(moment__WEBPACK_IMPORTED_MODULE_1___default()(), 'day') ? 'now' : 'end'),
    stats: statKeys
  });

  var secondaryQuery = _objectSpread(_objectSpread({}, filterQuery), {}, {
    after: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_3__["appendTimestamp"])(datesFromQuery.secondary.after, 'start'),
    before: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_3__["appendTimestamp"])(endSecondary, endSecondary.isSame(moment__WEBPACK_IMPORTED_MODULE_1___default()(), 'day') ? 'now' : 'end'),
    stats: statKeys
  });

  var primaryData = getReportItems('performance-indicators', primaryQuery);
  var primaryError = getReportItemsError('performance-indicators', primaryQuery) || null;
  var primaryRequesting = isReportItemsRequesting('performance-indicators', primaryQuery);
  var secondaryData = getReportItems('performance-indicators', secondaryQuery);
  var secondaryError = getReportItemsError('performance-indicators', secondaryQuery) || null;
  var secondaryRequesting = isReportItemsRequesting('performance-indicators', secondaryQuery);
  return {
    primaryData: primaryData,
    primaryError: primaryError,
    primaryRequesting: primaryRequesting,
    secondaryData: secondaryData,
    secondaryError: secondaryError,
    secondaryRequesting: secondaryRequesting,
    defaultDateRange: defaultDateRange
  };
};

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(10), __webpack_require__(79));
	else {}
})(this, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(5)();
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// Tell whether the rect is visible, given an offset
//
// return: boolean
module.exports = function (offset, rect, containmentRect) {
  var offsetDir = offset.direction;
  var offsetVal = offset.value; // Rules for checking different kind of offsets. In example if the element is
  // 90px below viewport and offsetTop is 100, it is considered visible.

  switch (offsetDir) {
    case 'top':
      return containmentRect.top + offsetVal < rect.top && containmentRect.bottom > rect.bottom && containmentRect.left < rect.left && containmentRect.right > rect.right;

    case 'left':
      return containmentRect.left + offsetVal < rect.left && containmentRect.bottom > rect.bottom && containmentRect.top < rect.top && containmentRect.right > rect.right;

    case 'bottom':
      return containmentRect.bottom - offsetVal > rect.bottom && containmentRect.left < rect.left && containmentRect.right > rect.right && containmentRect.top < rect.top;

    case 'right':
      return containmentRect.right - offsetVal > rect.right && containmentRect.left < rect.left && containmentRect.top < rect.top && containmentRect.bottom > rect.bottom;
  }
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VisibilitySensor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function normalizeRect(rect) {
  if (rect.width === undefined) {
    rect.width = rect.right - rect.left;
  }

  if (rect.height === undefined) {
    rect.height = rect.bottom - rect.top;
  }

  return rect;
}

var VisibilitySensor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VisibilitySensor, _React$Component);

  function VisibilitySensor(props) {
    var _this;

    _classCallCheck(this, VisibilitySensor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VisibilitySensor).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getContainer", function () {
      return _this.props.containment || window;
    });

    _defineProperty(_assertThisInitialized(_this), "addEventListener", function (target, event, delay, throttle) {
      if (!_this.debounceCheck) {
        _this.debounceCheck = {};
      }

      var timeout;
      var func;

      var later = function later() {
        timeout = null;

        _this.check();
      };

      if (throttle > -1) {
        func = function func() {
          if (!timeout) {
            timeout = setTimeout(later, throttle || 0);
          }
        };
      } else {
        func = function func() {
          clearTimeout(timeout);
          timeout = setTimeout(later, delay || 0);
        };
      }

      var info = {
        target: target,
        fn: func,
        getLastTimeout: function getLastTimeout() {
          return timeout;
        }
      };
      target.addEventListener(event, info.fn);
      _this.debounceCheck[event] = info;
    });

    _defineProperty(_assertThisInitialized(_this), "startWatching", function () {
      if (_this.debounceCheck || _this.interval) {
        return;
      }

      if (_this.props.intervalCheck) {
        _this.interval = setInterval(_this.check, _this.props.intervalDelay);
      }

      if (_this.props.scrollCheck) {
        _this.addEventListener(_this.getContainer(), "scroll", _this.props.scrollDelay, _this.props.scrollThrottle);
      }

      if (_this.props.resizeCheck) {
        _this.addEventListener(window, "resize", _this.props.resizeDelay, _this.props.resizeThrottle);
      } // if dont need delayed call, check on load ( before the first interval fires )


      !_this.props.delayedCall && _this.check();
    });

    _defineProperty(_assertThisInitialized(_this), "stopWatching", function () {
      if (_this.debounceCheck) {
        // clean up event listeners and their debounce callers
        for (var debounceEvent in _this.debounceCheck) {
          if (_this.debounceCheck.hasOwnProperty(debounceEvent)) {
            var debounceInfo = _this.debounceCheck[debounceEvent];
            clearTimeout(debounceInfo.getLastTimeout());
            debounceInfo.target.removeEventListener(debounceEvent, debounceInfo.fn);
            _this.debounceCheck[debounceEvent] = null;
          }
        }
      }

      _this.debounceCheck = null;

      if (_this.interval) {
        _this.interval = clearInterval(_this.interval);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "check", function () {
      var el = _this.node;
      var rect;
      var containmentRect; // if the component has rendered to null, dont update visibility

      if (!el) {
        return _this.state;
      }

      rect = normalizeRect(_this.roundRectDown(el.getBoundingClientRect()));

      if (_this.props.containment) {
        var containmentDOMRect = _this.props.containment.getBoundingClientRect();

        containmentRect = {
          top: containmentDOMRect.top,
          left: containmentDOMRect.left,
          bottom: containmentDOMRect.bottom,
          right: containmentDOMRect.right
        };
      } else {
        containmentRect = {
          top: 0,
          left: 0,
          bottom: window.innerHeight || document.documentElement.clientHeight,
          right: window.innerWidth || document.documentElement.clientWidth
        };
      } // Check if visibility is wanted via offset?


      var offset = _this.props.offset || {};
      var hasValidOffset = _typeof(offset) === "object";

      if (hasValidOffset) {
        containmentRect.top += offset.top || 0;
        containmentRect.left += offset.left || 0;
        containmentRect.bottom -= offset.bottom || 0;
        containmentRect.right -= offset.right || 0;
      }

      var visibilityRect = {
        top: rect.top >= containmentRect.top,
        left: rect.left >= containmentRect.left,
        bottom: rect.bottom <= containmentRect.bottom,
        right: rect.right <= containmentRect.right
      }; // https://github.com/joshwnj/react-visibility-sensor/pull/114

      var hasSize = rect.height > 0 && rect.width > 0;
      var isVisible = hasSize && visibilityRect.top && visibilityRect.left && visibilityRect.bottom && visibilityRect.right; // check for partial visibility

      if (hasSize && _this.props.partialVisibility) {
        var partialVisible = rect.top <= containmentRect.bottom && rect.bottom >= containmentRect.top && rect.left <= containmentRect.right && rect.right >= containmentRect.left; // account for partial visibility on a single edge

        if (typeof _this.props.partialVisibility === "string") {
          partialVisible = visibilityRect[_this.props.partialVisibility];
        } // if we have minimum top visibility set by props, lets check, if it meets the passed value
        // so if for instance element is at least 200px in viewport, then show it.


        isVisible = _this.props.minTopValue ? partialVisible && rect.top <= containmentRect.bottom - _this.props.minTopValue : partialVisible;
      } // Deprecated options for calculating offset.


      if (typeof offset.direction === "string" && typeof offset.value === "number") {
        console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }", offset.direction, offset.value);
        isVisible = _lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3___default()(offset, rect, containmentRect);
      }

      var state = _this.state; // notify the parent when the value changes

      if (_this.state.isVisible !== isVisible) {
        state = {
          isVisible: isVisible,
          visibilityRect: visibilityRect
        };

        _this.setState(state);

        if (_this.props.onChange) _this.props.onChange(isVisible);
      }

      return state;
    });

    _this.state = {
      isVisible: null,
      visibilityRect: {}
    };
    return _this;
  }

  _createClass(VisibilitySensor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.node = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this);

      if (this.props.active) {
        this.startWatching();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopWatching();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // re-register node in componentDidUpdate if children diffs [#103]
      this.node = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this);

      if (this.props.active && !prevProps.active) {
        this.setState({
          isVisible: null,
          visibilityRect: {}
        });
        this.startWatching();
      } else if (!this.props.active) {
        this.stopWatching();
      }
    }
  }, {
    key: "roundRectDown",
    value: function roundRectDown(rect) {
      return {
        top: Math.floor(rect.top),
        left: Math.floor(rect.left),
        bottom: Math.floor(rect.bottom),
        right: Math.floor(rect.right)
      };
    }
    /**
     * Check if the element is within the visible viewport
     */

  }, {
    key: "render",
    value: function render() {
      if (this.props.children instanceof Function) {
        return this.props.children({
          isVisible: this.state.isVisible,
          visibilityRect: this.state.visibilityRect
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(this.props.children);
    }
  }]);

  return VisibilitySensor;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(VisibilitySensor, "defaultProps", {
  active: true,
  partialVisibility: false,
  minTopValue: 0,
  scrollCheck: false,
  scrollDelay: 250,
  scrollThrottle: -1,
  resizeCheck: false,
  resizeDelay: 250,
  resizeThrottle: -1,
  intervalCheck: true,
  intervalDelay: 100,
  delayedCall: false,
  offset: {},
  containment: null,
  children: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null)
});

_defineProperty(VisibilitySensor, "propTypes", {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  active: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  partialVisibility: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["top", "right", "bottom", "left"])]),
  delayedCall: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    top: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    left: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    bottom: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    right: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
  }), // deprecated offset property
  prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    direction: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["top", "right", "bottom", "left"]),
    value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
  })]),
  scrollCheck: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  scrollDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  scrollThrottle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  resizeCheck: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  resizeDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  resizeThrottle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  intervalCheck: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  intervalDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  containment: typeof window !== "undefined" ? prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(window.Element) : prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func]),
  minTopValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
});



/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(6);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ })
/******/ ]);
});

/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dropdown; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(121);




/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function useObservableState(initialState, onStateChange) {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialState),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  return [state, function (value) {
    setState(value);

    if (onStateChange) {
      onStateChange(value);
    }
  }];
}

function Dropdown(_ref) {
  var renderContent = _ref.renderContent,
      renderToggle = _ref.renderToggle,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'bottom right' : _ref$position,
      className = _ref.className,
      contentClassName = _ref.contentClassName,
      expandOnMobile = _ref.expandOnMobile,
      headerTitle = _ref.headerTitle,
      focusOnMount = _ref.focusOnMount,
      popoverProps = _ref.popoverProps,
      onClose = _ref.onClose,
      onToggle = _ref.onToggle;
  var containerRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var _useObservableState = useObservableState(false, onToggle),
      _useObservableState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useObservableState, 2),
      isOpen = _useObservableState2[0],
      setIsOpen = _useObservableState2[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    return function () {
      if (onToggle) {
        onToggle(false);
      }
    };
  }, []);

  function toggle() {
    setIsOpen(!isOpen);
  }
  /**
   * Closes the dropdown if a focus leaves the dropdown wrapper. This is
   * intentionally distinct from `onClose` since focus loss from the popover
   * is expected to occur when using the Dropdown's toggle button, in which
   * case the correct behavior is to keep the dropdown closed. The same applies
   * in case when focus is moved to the modal dialog.
   */


  function closeIfFocusOutside() {
    if (!containerRef.current.contains(document.activeElement) && !document.activeElement.closest('[role="dialog"]')) {
      close();
    }
  }

  function close() {
    if (onClose) {
      onClose();
    }

    setIsOpen(false);
  }

  var args = {
    isOpen: isOpen,
    onToggle: toggle,
    onClose: close
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('components-dropdown', className),
    ref: containerRef
  }, renderToggle(args), isOpen && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_popover__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    position: position,
    onClose: close,
    onFocusOutside: closeIfFocusOutside,
    expandOnMobile: expandOnMobile,
    headerTitle: headerTitle,
    focusOnMount: focusOnMount
  }, popoverProps, {
    anchorRef: containerRef.current,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('components-dropdown__content', popoverProps ? popoverProps.className : undefined, contentClassName)
  }), renderContent(args)));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(49);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/compose.js
var compose = __webpack_require__(185);

// EXTERNAL MODULE: external {"this":["wc","data"]}
var external_this_wc_data_ = __webpack_require__(46);

// EXTERNAL MODULE: ./client/header/activity-panel/activity-card/index.js + 1 modules
var activity_card = __webpack_require__(751);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(13);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(12);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(14);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(15);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(6);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./client/header/activity-panel/panels/inbox/placeholder.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */



var placeholder_InboxNotePlaceholder = /*#__PURE__*/function (_Component) {
  inherits_default()(InboxNotePlaceholder, _Component);

  var _super = _createSuper(InboxNotePlaceholder);

  function InboxNotePlaceholder() {
    classCallCheck_default()(this, InboxNotePlaceholder);

    return _super.apply(this, arguments);
  }

  createClass_default()(InboxNotePlaceholder, [{
    key: "render",
    value: function render() {
      var className = this.props.className;
      return Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message is-placeholder ".concat(className),
        "aria-hidden": true
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__image"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "banner-block"
      })), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__wrapper"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__content"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__date"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "sixth-line"
      })), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__title"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "line"
      }), Object(external_this_wp_element_["createElement"])("div", {
        className: "line"
      })), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__text"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "line"
      }), Object(external_this_wp_element_["createElement"])("div", {
        className: "third-line"
      }))), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__actions"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "fifth-line"
      }), Object(external_this_wp_element_["createElement"])("div", {
        className: "fifth-line"
      }))));
    }
  }]);

  return InboxNotePlaceholder;
}(external_this_wp_element_["Component"]);

placeholder_InboxNotePlaceholder.propTypes = {
  className: prop_types_default.a.string
};
/* harmony default export */ var placeholder = (placeholder_InboxNotePlaceholder);
// EXTERNAL MODULE: ./client/header/activity-panel/activity-header/index.js
var activity_header = __webpack_require__(748);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(7);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(5);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/dropdown/index.js
var dropdown = __webpack_require__(780);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/modal/index.js + 4 modules
var modal = __webpack_require__(714);

// EXTERNAL MODULE: ./node_modules/react-visibility-sensor/dist/visibility-sensor.js
var visibility_sensor = __webpack_require__(764);
var visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(visibility_sensor);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(17);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(24);

// EXTERNAL MODULE: ./client/settings/index.js
var settings = __webpack_require__(28);

// CONCATENATED MODULE: ./client/header/activity-panel/panels/inbox/action.js








function action_createSuper(Derived) { var hasNativeReflectConstruct = action_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function action_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */





/**
 * WooCommerce dependencies
 */



var action_InboxNoteAction = /*#__PURE__*/function (_Component) {
  inherits_default()(InboxNoteAction, _Component);

  var _super = action_createSuper(InboxNoteAction);

  function InboxNoteAction(props) {
    var _this;

    classCallCheck_default()(this, InboxNoteAction);

    _this = _super.call(this, props);
    _this.state = {
      inAction: false
    };
    _this.handleActionClick = _this.handleActionClick.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(InboxNoteAction, [{
    key: "handleActionClick",
    value: function handleActionClick(event) {
      var _this$props = this.props,
          action = _this$props.action,
          actionCallback = _this$props.actionCallback,
          noteId = _this$props.noteId,
          triggerNoteAction = _this$props.triggerNoteAction,
          removeAllNotes = _this$props.removeAllNotes,
          removeNote = _this$props.removeNote,
          onClick = _this$props.onClick;
      var href = event.target.href || '';
      var inAction = true;

      if (href.length && !href.startsWith(settings["a" /* ADMIN_URL */])) {
        event.preventDefault();
        inAction = false; // link buttons shouldn't be "busy".

        window.open(href, '_blank');
      }

      if (!action) {
        if (noteId) {
          removeNote(noteId);
        } else {
          removeAllNotes();
        }

        actionCallback(true);
      } else {
        this.setState({
          inAction: inAction
        }, function () {
          triggerNoteAction(noteId, action.id);

          if (!!onClick) {
            onClick();
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          action = _this$props2.action,
          dismiss = _this$props2.dismiss,
          label = _this$props2.label;
      return Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
        isSecondary: true,
        isBusy: this.state.inAction,
        disabled: this.state.inAction,
        href: action && action.url && action.url.length ? action.url : undefined,
        onClick: this.handleActionClick
      }, dismiss ? label : action.label);
    }
  }]);

  return InboxNoteAction;
}(external_this_wp_element_["Component"]);

action_InboxNoteAction.propTypes = {
  noteId: prop_types_default.a.number,
  label: prop_types_default.a.string,
  dismiss: prop_types_default.a.bool,
  actionCallback: prop_types_default.a.func,
  action: prop_types_default.a.shape({
    id: prop_types_default.a.number.isRequired,
    url: prop_types_default.a.string,
    label: prop_types_default.a.string.isRequired,
    primary: prop_types_default.a.bool.isRequired
  }),
  onClick: prop_types_default.a.func
};
/* harmony default export */ var inbox_action = (Object(compose["a" /* default */])(Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('wc-api'),
      removeAllNotes = _dispatch.removeAllNotes,
      removeNote = _dispatch.removeNote,
      triggerNoteAction = _dispatch.triggerNoteAction;

  return {
    removeAllNotes: removeAllNotes,
    removeNote: removeNote,
    triggerNoteAction: triggerNoteAction
  };
}))(action_InboxNoteAction));
// EXTERNAL MODULE: ./client/lib/sanitize-html/index.js
var sanitize_html = __webpack_require__(746);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./client/lib/tracks.js
var tracks = __webpack_require__(63);

// EXTERNAL MODULE: ./client/header/activity-panel/panels/inbox/style.scss
var style = __webpack_require__(765);

// EXTERNAL MODULE: external {"this":["wc","components"]}
var external_this_wc_components_ = __webpack_require__(55);

// EXTERNAL MODULE: ./client/utils/index.js
var utils = __webpack_require__(286);

// CONCATENATED MODULE: ./client/header/activity-panel/panels/inbox/card.js









function card_createSuper(Derived) { var hasNativeReflectConstruct = card_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function card_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */






/**
 * Internal dependencies
 */









var card_InboxNoteCard = /*#__PURE__*/function (_Component) {
  inherits_default()(InboxNoteCard, _Component);

  var _super = card_createSuper(InboxNoteCard);

  function InboxNoteCard(props) {
    var _this;

    classCallCheck_default()(this, InboxNoteCard);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "onActionClicked", function (action) {
      if (!action.actioned_text) {
        return;
      }

      _this.setState({
        clickedActionText: action.actioned_text
      });
    });

    _this.onVisible = _this.onVisible.bind(assertThisInitialized_default()(_this));
    _this.hasBeenSeen = false;
    _this.state = {
      isDismissModalOpen: false,
      dismissType: null,
      clickedActionText: null
    };
    _this.openDismissModal = _this.openDismissModal.bind(assertThisInitialized_default()(_this));
    _this.closeDismissModal = _this.closeDismissModal.bind(assertThisInitialized_default()(_this));
    _this.bodyNotificationRef = Object(external_this_wp_element_["createRef"])();
    _this.screen = Object(utils["a" /* getScreenName */])();
    return _this;
  }

  createClass_default()(InboxNoteCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.bodyNotificationRef.current) {
        this.bodyNotificationRef.current.addEventListener('click', function (event) {
          return _this2.handleBodyClick(event, _this2.props);
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      if (this.bodyNotificationRef.current) {
        this.bodyNotificationRef.current.removeEventListener('click', function (event) {
          return _this3.handleBodyClick(event, _this3.props);
        });
      }
    }
  }, {
    key: "handleBodyClick",
    value: function handleBodyClick(event, props) {
      var innerLink = event.target.href;

      if (innerLink) {
        var note = props.note;
        Object(tracks["b" /* recordEvent */])('wcadmin_inbox_action_click', {
          note_name: note.name,
          note_title: note.title,
          note_content_inner_link: innerLink
        });
      }
    } // Trigger a view Tracks event when the note is seen.

  }, {
    key: "onVisible",
    value: function onVisible(isVisible) {
      if (isVisible && !this.hasBeenSeen) {
        var note = this.props.note;
        Object(tracks["b" /* recordEvent */])('inbox_note_view', {
          note_content: note.content,
          note_name: note.name,
          note_title: note.title,
          note_type: note.type,
          screen: this.screen
        });
        this.hasBeenSeen = true;
      }
    }
  }, {
    key: "openDismissModal",
    value: function openDismissModal(type, onToggle) {
      this.setState({
        isDismissModalOpen: true,
        dismissType: type
      });
      onToggle();
    }
  }, {
    key: "closeDismissModal",
    value: function closeDismissModal(noteNameDismissConfirmation) {
      var dismissType = this.state.dismissType;
      var note = this.props.note;
      var noteNameDismissAll = dismissType === 'all' ? true : false;
      Object(tracks["b" /* recordEvent */])('inbox_action_dismiss', {
        note_name: note.name,
        note_title: note.title,
        note_name_dismiss_all: noteNameDismissAll,
        note_name_dismiss_confirmation: noteNameDismissConfirmation || false,
        screen: this.screen
      });
      this.setState({
        isDismissModalOpen: false
      });
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(event, onClose) {
      var dropdownClasses = ['woocommerce-admin-dismiss-notification', 'components-popover__content']; // This line is for IE compatibility.

      var relatedTarget = event.relatedTarget ? event.relatedTarget : document.activeElement;
      var isClickOutsideDropdown = relatedTarget ? dropdownClasses.some(function (className) {
        return relatedTarget.className.includes(className);
      }) : false;

      if (isClickOutsideDropdown) {
        event.preventDefault();
      } else {
        onClose();
      }
    }
  }, {
    key: "renderDismissButton",
    value: function renderDismissButton() {
      var _this4 = this;

      var clickedActionText = this.state.clickedActionText;

      if (clickedActionText) {
        return null;
      }

      return Object(external_this_wp_element_["createElement"])(dropdown["a" /* default */], {
        contentClassName: "woocommerce-admin-dismiss-dropdown",
        position: "bottom right",
        renderToggle: function renderToggle(_ref) {
          var onClose = _ref.onClose,
              onToggle = _ref.onToggle;
          return Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
            isTertiary: true,
            onClick: onToggle,
            onBlur: function onBlur(event) {
              return _this4.handleBlur(event, onClose);
            }
          }, Object(external_this_wp_i18n_["__"])('Dismiss', 'woocommerce-admin'));
        },
        focusOnMount: false,
        popoverProps: {
          noArrow: true
        },
        renderContent: function renderContent(_ref2) {
          var onToggle = _ref2.onToggle;
          return Object(external_this_wp_element_["createElement"])("ul", null, Object(external_this_wp_element_["createElement"])("li", null, Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
            className: "woocommerce-admin-dismiss-notification",
            onClick: function onClick() {
              return _this4.openDismissModal('this', onToggle);
            }
          }, Object(external_this_wp_i18n_["__"])('Dismiss this message', 'woocommerce-admin'))), Object(external_this_wp_element_["createElement"])("li", null, Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
            className: "woocommerce-admin-dismiss-notification",
            onClick: function onClick() {
              return _this4.openDismissModal('all', onToggle);
            }
          }, Object(external_this_wp_i18n_["__"])('Dismiss all messages', 'woocommerce-admin'))));
        }
      });
    }
  }, {
    key: "getDismissConfirmationButton",
    value: function getDismissConfirmationButton() {
      var note = this.props.note;
      var dismissType = this.state.dismissType;
      return Object(external_this_wp_element_["createElement"])(inbox_action, {
        key: note.id,
        noteId: dismissType === 'all' ? null : note.id,
        label: Object(external_this_wp_i18n_["__"])("Yes, I'm sure", 'woocommerce-admin'),
        actionCallback: this.closeDismissModal,
        dismiss: true,
        screen: this.screen
      });
    }
  }, {
    key: "renderDismissConfirmationModal",
    value: function renderDismissConfirmationModal() {
      var _this5 = this;

      return Object(external_this_wp_element_["createElement"])(modal["a" /* default */], {
        title: Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_i18n_["__"])('Are you sure?', 'woocommerce-admin')),
        onRequestClose: function onRequestClose() {
          return _this5.closeDismissModal();
        },
        className: "woocommerce-inbox-dismiss-confirmation_modal"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-dismiss-confirmation_wrapper"
      }, Object(external_this_wp_element_["createElement"])("p", null, Object(external_this_wp_i18n_["__"])('Dismissed messages cannot be viewed again', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-dismiss-confirmation_buttons"
      }, Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
        isSecondary: true,
        onClick: function onClick() {
          return _this5.closeDismissModal();
        }
      }, Object(external_this_wp_i18n_["__"])('Cancel', 'woocommerce-admin')), this.getDismissConfirmationButton())));
    }
  }, {
    key: "renderActions",
    value: function renderActions(note) {
      var _this6 = this;

      var noteActions = note.actions,
          noteId = note.id;
      var clickedActionText = this.state.clickedActionText;

      if (!!clickedActionText) {
        return clickedActionText;
      }

      if (!noteActions) {
        return;
      }

      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, noteActions.map(function (action, index) {
        return Object(external_this_wp_element_["createElement"])(inbox_action, {
          key: index,
          noteId: noteId,
          action: action,
          onClick: function onClick() {
            return _this6.onActionClicked(action);
          }
        });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          lastRead = _this$props.lastRead,
          note = _this$props.note;
      var isDismissModalOpen = this.state.isDismissModalOpen;
      var content = note.content,
          dateCreated = note.date_created,
          dateCreatedGmt = note.date_created_gmt,
          image = note.image,
          isDeleted = note.is_deleted,
          layout = note.layout,
          status = note.status,
          title = note.title;

      if (isDeleted) {
        return null;
      }

      var unread = !lastRead || !dateCreatedGmt || new Date(dateCreatedGmt + 'Z').getTime() > lastRead;
      var date = dateCreated;
      var hasImage = layout !== 'plain' && layout !== '';
      var cardClassName = classnames_default()('woocommerce-inbox-message', layout, {
        'message-is-unread': unread && status === 'unactioned'
      });
      return Object(external_this_wp_element_["createElement"])(visibility_sensor_default.a, {
        onChange: this.onVisible
      }, Object(external_this_wp_element_["createElement"])("section", {
        className: cardClassName
      }, hasImage && Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__image"
      }, Object(external_this_wp_element_["createElement"])("img", {
        src: image,
        alt: ""
      })), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__wrapper"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__content"
      }, date && Object(external_this_wp_element_["createElement"])("span", {
        className: "woocommerce-inbox-message__date"
      }, external_moment_default.a.utc(date).fromNow()), Object(external_this_wp_element_["createElement"])(external_this_wc_components_["H"], {
        className: "woocommerce-inbox-message__title"
      }, title), Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Section"], {
        className: "woocommerce-inbox-message__text"
      }, Object(external_this_wp_element_["createElement"])("span", {
        dangerouslySetInnerHTML: Object(sanitize_html["a" /* default */])(content),
        ref: this.bodyNotificationRef
      }))), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__actions"
      }, this.renderActions(note), this.renderDismissButton())), isDismissModalOpen && this.renderDismissConfirmationModal()));
    }
  }]);

  return InboxNoteCard;
}(external_this_wp_element_["Component"]);

card_InboxNoteCard.propTypes = {
  note: prop_types_default.a.shape({
    id: prop_types_default.a.number,
    status: prop_types_default.a.string,
    title: prop_types_default.a.string,
    content: prop_types_default.a.string,
    date_created: prop_types_default.a.string,
    date_created_gmt: prop_types_default.a.string,
    actions: prop_types_default.a.arrayOf(prop_types_default.a.shape({
      id: prop_types_default.a.number.isRequired,
      url: prop_types_default.a.string,
      label: prop_types_default.a.string.isRequired,
      primary: prop_types_default.a.bool.isRequired
    })),
    layout: prop_types_default.a.string,
    image: prop_types_default.a.string,
    is_deleted: prop_types_default.a.bool
  }),
  lastRead: prop_types_default.a.number
};
/* harmony default export */ var card = (card_InboxNoteCard);
// EXTERNAL MODULE: ./client/wc-api/constants.js
var constants = __webpack_require__(36);

// EXTERNAL MODULE: ./client/wc-api/with-select.js
var with_select = __webpack_require__(104);

// EXTERNAL MODULE: ./client/header/activity-panel/panels/inbox/utils.js
var inbox_utils = __webpack_require__(287);

// CONCATENATED MODULE: ./client/header/activity-panel/panels/inbox/index.js



/**
 * External dependencies
 */



/**
 * WooCommerce dependencies
 */


/**
 * Internal dependencies
 */










var inbox_renderEmptyCard = function renderEmptyCard() {
  return Object(external_this_wp_element_["createElement"])(activity_card["a" /* ActivityCard */], {
    className: "woocommerce-empty-activity-card",
    title: Object(external_this_wp_i18n_["__"])('Your inbox is empty', 'woocommerce-admin'),
    icon: false
  }, Object(external_this_wp_i18n_["__"])('As things begin to happen in your store your inbox will start to fill up. ' + "You'll see things like achievements, new feature announcements, extension recommendations and more!", 'woocommerce-admin'));
};

var inbox_renderNotes = function renderNotes(_ref) {
  var hasNotes = _ref.hasNotes,
      isDismissUndoRequesting = _ref.isDismissUndoRequesting,
      isDismissAllUndoRequesting = _ref.isDismissAllUndoRequesting,
      lastRead = _ref.lastRead,
      notes = _ref.notes;

  if (isDismissAllUndoRequesting) {
    return;
  }

  if (!hasNotes) {
    return inbox_renderEmptyCard();
  }

  var notesArray = Object.keys(notes).map(function (key) {
    return notes[key];
  });
  return notesArray.map(function (note) {
    if (isDismissUndoRequesting === note.id) {
      return Object(external_this_wp_element_["createElement"])(placeholder, {
        className: "banner message-is-unread",
        key: note.id
      });
    }

    return Object(external_this_wp_element_["createElement"])(card, {
      key: note.id,
      note: note,
      lastRead: lastRead
    });
  });
};

var inbox_InboxPanel = function InboxPanel(props) {
  var isError = props.isError,
      isPanelEmpty = props.isPanelEmpty,
      isRequesting = props.isRequesting,
      isUndoRequesting = props.isUndoRequesting,
      isDismissAllUndoRequesting = props.isDismissAllUndoRequesting,
      isDismissUndoRequesting = props.isDismissUndoRequesting,
      notes = props.notes;

  var _useUserPreferences = Object(external_this_wc_data_["useUserPreferences"])(),
      updateUserPreferences = _useUserPreferences.updateUserPreferences,
      userPrefs = objectWithoutProperties_default()(_useUserPreferences, ["updateUserPreferences"]);

  var lastRead = userPrefs.activity_panel_inbox_last_read;
  Object(external_this_wp_element_["useEffect"])(function () {
    var mountTime = Date.now();
    return function () {
      var userDataFields = {
        activity_panel_inbox_last_read: mountTime
      };
      updateUserPreferences(userDataFields);
    };
  }, []);

  if (isError) {
    var title = Object(external_this_wp_i18n_["__"])('There was an error getting your inbox. Please try again.', 'woocommerce-admin');

    var actionLabel = Object(external_this_wp_i18n_["__"])('Reload', 'woocommerce-admin');

    var actionCallback = function actionCallback() {
      // @todo Add tracking for how often an error is displayed, and the reload action is clicked.
      window.location.reload();
    };

    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["EmptyContent"], {
      title: title,
      actionLabel: actionLabel,
      actionURL: null,
      actionCallback: actionCallback
    }));
  }

  var hasNotes = Object(inbox_utils["b" /* hasValidNotes */])(notes);
  var isActivityHeaderVisible = hasNotes || isRequesting || isUndoRequesting;

  if (isPanelEmpty) {
    isPanelEmpty(!hasNotes && !isActivityHeaderVisible);
  } // @todo After having a pagination implemented we should call the method "getNotes" with a different query since
  // the current one is only getting 25 notes and the count of unread notes only will refer to this 25 and not all the existing ones.


  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, isActivityHeaderVisible && Object(external_this_wp_element_["createElement"])(activity_header["a" /* default */], {
    title: Object(external_this_wp_i18n_["__"])('Inbox', 'woocommerce-admin'),
    subtitle: Object(external_this_wp_i18n_["__"])('Insights and growth tips for your business', 'woocommerce-admin'),
    unreadMessages: Object(inbox_utils["a" /* getUnreadNotesCount */])(notes, lastRead)
  }), Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-homepage-notes-wrapper"
  }, (isRequesting || isDismissAllUndoRequesting) && Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Section"], null, Object(external_this_wp_element_["createElement"])(placeholder, {
    className: "banner message-is-unread"
  })), Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Section"], null, !isRequesting && !isDismissAllUndoRequesting && inbox_renderNotes({
    hasNotes: hasNotes,
    isDismissUndoRequesting: isDismissUndoRequesting,
    isDismissAllUndoRequesting: isDismissAllUndoRequesting,
    lastRead: lastRead,
    notes: notes
  }))));
};

/* harmony default export */ var inbox = __webpack_exports__["default"] = (Object(compose["a" /* default */])(Object(with_select["a" /* default */])(function (select) {
  var _select = select('wc-api'),
      getNotes = _select.getNotes,
      getNotesError = _select.getNotesError,
      isGetNotesRequesting = _select.isGetNotesRequesting,
      getUndoDismissRequesting = _select.getUndoDismissRequesting;

  var inboxQuery = {
    page: 1,
    per_page: constants["d" /* QUERY_DEFAULTS */].pageSize,
    status: 'unactioned',
    type: constants["d" /* QUERY_DEFAULTS */].noteTypes,
    orderby: 'date',
    order: 'desc',
    _fields: ['id', 'name', 'title', 'content', 'type', 'status', 'actions', 'date_created', 'date_created_gmt', 'layout', 'image', 'is_deleted']
  };
  var notes = getNotes(inboxQuery);
  var isError = Boolean(getNotesError(inboxQuery));
  var isRequesting = isGetNotesRequesting(inboxQuery);

  var _getUndoDismissReques = getUndoDismissRequesting(),
      isUndoRequesting = _getUndoDismissReques.isUndoRequesting,
      isDismissUndoRequesting = _getUndoDismissReques.isDismissUndoRequesting,
      isDismissAllUndoRequesting = _getUndoDismissReques.isDismissAllUndoRequesting;

  return {
    notes: notes,
    isError: isError,
    isRequesting: isRequesting,
    isUndoRequesting: isUndoRequesting,
    isDismissUndoRequesting: isDismissUndoRequesting,
    isDismissAllUndoRequesting: isDismissAllUndoRequesting
  };
}))(inbox_InboxPanel));

/***/ }),

/***/ 888:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultProps */
/* unused harmony export CardHeader */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_card_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(755);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(754);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



var defaultProps = {
  isBorderless: false,
  isShady: false,
  size: 'medium'
};
function CardHeader(props) {
  var className = props.className,
      isShady = props.isShady,
      additionalProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props, ["className", "isShady"]);

  var mergedProps = _objectSpread({}, defaultProps, {}, Object(_context__WEBPACK_IMPORTED_MODULE_6__[/* useCardContext */ "b"])(), {}, props);

  var isBorderless = mergedProps.isBorderless,
      size = mergedProps.size;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('components-card__header', isBorderless && 'is-borderless', isShady && 'is-shady', size && "is-size-".concat(size), className);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_styles_card_styles__WEBPACK_IMPORTED_MODULE_5__[/* HeaderUI */ "d"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, additionalProps, {
    className: classes
  }));
}
/* harmony default export */ __webpack_exports__["a"] = (CardHeader);
//# sourceMappingURL=header.js.map

/***/ }),

/***/ 891:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabPanel; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(279);
/* harmony import */ var _navigable_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(738);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90);






/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




var TabButton = function TabButton(_ref) {
  var tabId = _ref.tabId,
      onClick = _ref.onClick,
      children = _ref.children,
      selected = _ref.selected,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ref, ["tabId", "onClick", "children", "selected"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_button__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
    role: "tab",
    tabIndex: selected ? null : -1,
    "aria-selected": selected,
    id: tabId,
    onClick: onClick
  }, rest), children);
};

function TabPanel(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      tabs = _ref2.tabs,
      initialTabName = _ref2.initialTabName,
      _ref2$orientation = _ref2.orientation,
      orientation = _ref2$orientation === void 0 ? 'horizontal' : _ref2$orientation,
      _ref2$activeClass = _ref2.activeClass,
      activeClass = _ref2$activeClass === void 0 ? 'is-active' : _ref2$activeClass,
      _ref2$onSelect = _ref2.onSelect,
      onSelect = _ref2$onSelect === void 0 ? lodash__WEBPACK_IMPORTED_MODULE_6__["noop"] : _ref2$onSelect;
  var instanceId = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(TabPanel, 'tab-panel');

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(initialTabName || (tabs.length > 0 ? tabs[0].name : null)),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var handleClick = function handleClick(tabKey) {
    setSelected(tabKey);
    onSelect(tabKey);
  };

  var onNavigate = function onNavigate(childIndex, child) {
    child.click();
  };

  var selectedTab = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["find"])(tabs, {
    name: selected
  });
  var selectedId = "".concat(instanceId, "-").concat(selectedTab.name);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_navigable_container__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    role: "tablist",
    orientation: orientation,
    onNavigate: onNavigate,
    className: "components-tab-panel__tabs"
  }, tabs.map(function (tab) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(TabButton, {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('components-tab-panel__tabs-item', tab.className, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, activeClass, tab.name === selected)),
      tabId: "".concat(instanceId, "-").concat(tab.name),
      "aria-controls": "".concat(instanceId, "-").concat(tab.name, "-view"),
      selected: tab.name === selected,
      key: tab.name,
      onClick: Object(lodash__WEBPACK_IMPORTED_MODULE_6__["partial"])(handleClick, tab.name)
    }, tab.title);
  })), selectedTab && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
    "aria-labelledby": selectedId,
    role: "tabpanel",
    id: "".concat(selectedId, "-view"),
    className: "components-tab-panel__tab-content"
  }, children(selectedTab)));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultProps */
/* unused harmony export CardFooter */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_card_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(755);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(754);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



var defaultProps = {
  isBorderless: false,
  isShady: false,
  size: 'medium'
};
function CardFooter(props) {
  var className = props.className,
      isShady = props.isShady,
      additionalProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props, ["className", "isShady"]);

  var mergedProps = _objectSpread({}, defaultProps, {}, Object(_context__WEBPACK_IMPORTED_MODULE_6__[/* useCardContext */ "b"])(), {}, props);

  var isBorderless = mergedProps.isBorderless,
      size = mergedProps.size;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('components-card__footer', isBorderless && 'is-borderless', isShady && 'is-shady', size && "is-size-".concat(size), className);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_styles_card_styles__WEBPACK_IMPORTED_MODULE_5__[/* FooterUI */ "c"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, additionalProps, {
    className: classes
  }));
}
/* harmony default export */ __webpack_exports__["a"] = (CardFooter);
//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 894:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

/*global define:false */
/**
 * Copyright 2012-2017 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.6.5
 * @url craig.is/killing/mice
 */
(function(window, document, undefined) {

    // Check if mousetrap is used inside browser, if not, return
    if (!window) {
        return;
    }

    /**
     * mapping of special keycodes to their corresponding keys
     *
     * everything in this dictionary cannot use keypress events
     * so it has to be here to map to the correct keycodes for
     * keyup/keydown events
     *
     * @type {Object}
     */
    var _MAP = {
        8: 'backspace',
        9: 'tab',
        13: 'enter',
        16: 'shift',
        17: 'ctrl',
        18: 'alt',
        20: 'capslock',
        27: 'esc',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        45: 'ins',
        46: 'del',
        91: 'meta',
        93: 'meta',
        224: 'meta'
    };

    /**
     * mapping for special characters so they can support
     *
     * this dictionary is only used incase you want to bind a
     * keyup or keydown event to one of these keys
     *
     * @type {Object}
     */
    var _KEYCODE_MAP = {
        106: '*',
        107: '+',
        109: '-',
        110: '.',
        111 : '/',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: '\''
    };

    /**
     * this is a mapping of keys that require shift on a US keypad
     * back to the non shift equivelents
     *
     * this is so you can use keyup events with these keys
     *
     * note that this will only work reliably on US keyboards
     *
     * @type {Object}
     */
    var _SHIFT_MAP = {
        '~': '`',
        '!': '1',
        '@': '2',
        '#': '3',
        '$': '4',
        '%': '5',
        '^': '6',
        '&': '7',
        '*': '8',
        '(': '9',
        ')': '0',
        '_': '-',
        '+': '=',
        ':': ';',
        '\"': '\'',
        '<': ',',
        '>': '.',
        '?': '/',
        '|': '\\'
    };

    /**
     * this is a list of special strings you can use to map
     * to modifier keys when you specify your keyboard shortcuts
     *
     * @type {Object}
     */
    var _SPECIAL_ALIASES = {
        'option': 'alt',
        'command': 'meta',
        'return': 'enter',
        'escape': 'esc',
        'plus': '+',
        'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
    };

    /**
     * variable to store the flipped version of _MAP from above
     * needed to check if we should use keypress or not when no action
     * is specified
     *
     * @type {Object|undefined}
     */
    var _REVERSE_MAP;

    /**
     * loop through the f keys, f1 to f19 and add them to the map
     * programatically
     */
    for (var i = 1; i < 20; ++i) {
        _MAP[111 + i] = 'f' + i;
    }

    /**
     * loop through to map numbers on the numeric keypad
     */
    for (i = 0; i <= 9; ++i) {

        // This needs to use a string cause otherwise since 0 is falsey
        // mousetrap will never fire for numpad 0 pressed as part of a keydown
        // event.
        //
        // @see https://github.com/ccampbell/mousetrap/pull/258
        _MAP[i + 96] = i.toString();
    }

    /**
     * cross browser add event method
     *
     * @param {Element|HTMLDocument} object
     * @param {string} type
     * @param {Function} callback
     * @returns void
     */
    function _addEvent(object, type, callback) {
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
            return;
        }

        object.attachEvent('on' + type, callback);
    }

    /**
     * takes the event and returns the key character
     *
     * @param {Event} e
     * @return {string}
     */
    function _characterFromEvent(e) {

        // for keypress events we should return the character as is
        if (e.type == 'keypress') {
            var character = String.fromCharCode(e.which);

            // if the shift key is not pressed then it is safe to assume
            // that we want the character to be lowercase.  this means if
            // you accidentally have caps lock on then your key bindings
            // will continue to work
            //
            // the only side effect that might not be desired is if you
            // bind something like 'A' cause you want to trigger an
            // event when capital A is pressed caps lock will no longer
            // trigger the event.  shift+a will though.
            if (!e.shiftKey) {
                character = character.toLowerCase();
            }

            return character;
        }

        // for non keypress events the special maps are needed
        if (_MAP[e.which]) {
            return _MAP[e.which];
        }

        if (_KEYCODE_MAP[e.which]) {
            return _KEYCODE_MAP[e.which];
        }

        // if it is not in the special map

        // with keydown and keyup events the character seems to always
        // come in as an uppercase character whether you are pressing shift
        // or not.  we should make sure it is always lowercase for comparisons
        return String.fromCharCode(e.which).toLowerCase();
    }

    /**
     * checks if two arrays are equal
     *
     * @param {Array} modifiers1
     * @param {Array} modifiers2
     * @returns {boolean}
     */
    function _modifiersMatch(modifiers1, modifiers2) {
        return modifiers1.sort().join(',') === modifiers2.sort().join(',');
    }

    /**
     * takes a key event and figures out what the modifiers are
     *
     * @param {Event} e
     * @returns {Array}
     */
    function _eventModifiers(e) {
        var modifiers = [];

        if (e.shiftKey) {
            modifiers.push('shift');
        }

        if (e.altKey) {
            modifiers.push('alt');
        }

        if (e.ctrlKey) {
            modifiers.push('ctrl');
        }

        if (e.metaKey) {
            modifiers.push('meta');
        }

        return modifiers;
    }

    /**
     * prevents default for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _preventDefault(e) {
        if (e.preventDefault) {
            e.preventDefault();
            return;
        }

        e.returnValue = false;
    }

    /**
     * stops propogation for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _stopPropagation(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
            return;
        }

        e.cancelBubble = true;
    }

    /**
     * determines if the keycode specified is a modifier key or not
     *
     * @param {string} key
     * @returns {boolean}
     */
    function _isModifier(key) {
        return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
    }

    /**
     * reverses the map lookup so that we can look for specific keys
     * to see what can and can't use keypress
     *
     * @return {Object}
     */
    function _getReverseMap() {
        if (!_REVERSE_MAP) {
            _REVERSE_MAP = {};
            for (var key in _MAP) {

                // pull out the numeric keypad from here cause keypress should
                // be able to detect the keys from the character
                if (key > 95 && key < 112) {
                    continue;
                }

                if (_MAP.hasOwnProperty(key)) {
                    _REVERSE_MAP[_MAP[key]] = key;
                }
            }
        }
        return _REVERSE_MAP;
    }

    /**
     * picks the best action based on the key combination
     *
     * @param {string} key - character for key
     * @param {Array} modifiers
     * @param {string=} action passed in
     */
    function _pickBestAction(key, modifiers, action) {

        // if no action was picked in we should try to pick the one
        // that we think would work best for this key
        if (!action) {
            action = _getReverseMap()[key] ? 'keydown' : 'keypress';
        }

        // modifier keys don't work as expected with keypress,
        // switch to keydown
        if (action == 'keypress' && modifiers.length) {
            action = 'keydown';
        }

        return action;
    }

    /**
     * Converts from a string key combination to an array
     *
     * @param  {string} combination like "command+shift+l"
     * @return {Array}
     */
    function _keysFromString(combination) {
        if (combination === '+') {
            return ['+'];
        }

        combination = combination.replace(/\+{2}/g, '+plus');
        return combination.split('+');
    }

    /**
     * Gets info for a specific key combination
     *
     * @param  {string} combination key combination ("command+s" or "a" or "*")
     * @param  {string=} action
     * @returns {Object}
     */
    function _getKeyInfo(combination, action) {
        var keys;
        var key;
        var i;
        var modifiers = [];

        // take the keys from this pattern and figure out what the actual
        // pattern is all about
        keys = _keysFromString(combination);

        for (i = 0; i < keys.length; ++i) {
            key = keys[i];

            // normalize key names
            if (_SPECIAL_ALIASES[key]) {
                key = _SPECIAL_ALIASES[key];
            }

            // if this is not a keypress event then we should
            // be smart about using shift keys
            // this will only work for US keyboards however
            if (action && action != 'keypress' && _SHIFT_MAP[key]) {
                key = _SHIFT_MAP[key];
                modifiers.push('shift');
            }

            // if this key is a modifier then add it to the list of modifiers
            if (_isModifier(key)) {
                modifiers.push(key);
            }
        }

        // depending on what the key combination is
        // we will try to pick the best event for it
        action = _pickBestAction(key, modifiers, action);

        return {
            key: key,
            modifiers: modifiers,
            action: action
        };
    }

    function _belongsTo(element, ancestor) {
        if (element === null || element === document) {
            return false;
        }

        if (element === ancestor) {
            return true;
        }

        return _belongsTo(element.parentNode, ancestor);
    }

    function Mousetrap(targetElement) {
        var self = this;

        targetElement = targetElement || document;

        if (!(self instanceof Mousetrap)) {
            return new Mousetrap(targetElement);
        }

        /**
         * element to attach key events to
         *
         * @type {Element}
         */
        self.target = targetElement;

        /**
         * a list of all the callbacks setup via Mousetrap.bind()
         *
         * @type {Object}
         */
        self._callbacks = {};

        /**
         * direct map of string combinations to callbacks used for trigger()
         *
         * @type {Object}
         */
        self._directMap = {};

        /**
         * keeps track of what level each sequence is at since multiple
         * sequences can start out with the same sequence
         *
         * @type {Object}
         */
        var _sequenceLevels = {};

        /**
         * variable to store the setTimeout call
         *
         * @type {null|number}
         */
        var _resetTimer;

        /**
         * temporary state where we will ignore the next keyup
         *
         * @type {boolean|string}
         */
        var _ignoreNextKeyup = false;

        /**
         * temporary state where we will ignore the next keypress
         *
         * @type {boolean}
         */
        var _ignoreNextKeypress = false;

        /**
         * are we currently inside of a sequence?
         * type of action ("keyup" or "keydown" or "keypress") or false
         *
         * @type {boolean|string}
         */
        var _nextExpectedAction = false;

        /**
         * resets all sequence counters except for the ones passed in
         *
         * @param {Object} doNotReset
         * @returns void
         */
        function _resetSequences(doNotReset) {
            doNotReset = doNotReset || {};

            var activeSequences = false,
                key;

            for (key in _sequenceLevels) {
                if (doNotReset[key]) {
                    activeSequences = true;
                    continue;
                }
                _sequenceLevels[key] = 0;
            }

            if (!activeSequences) {
                _nextExpectedAction = false;
            }
        }

        /**
         * finds all callbacks that match based on the keycode, modifiers,
         * and action
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event|Object} e
         * @param {string=} sequenceName - name of the sequence we are looking for
         * @param {string=} combination
         * @param {number=} level
         * @returns {Array}
         */
        function _getMatches(character, modifiers, e, sequenceName, combination, level) {
            var i;
            var callback;
            var matches = [];
            var action = e.type;

            // if there are no events related to this keycode
            if (!self._callbacks[character]) {
                return [];
            }

            // if a modifier key is coming up on its own we should allow it
            if (action == 'keyup' && _isModifier(character)) {
                modifiers = [character];
            }

            // loop through all callbacks for the key that was pressed
            // and see if any of them match
            for (i = 0; i < self._callbacks[character].length; ++i) {
                callback = self._callbacks[character][i];

                // if a sequence name is not specified, but this is a sequence at
                // the wrong level then move onto the next match
                if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
                    continue;
                }

                // if the action we are looking for doesn't match the action we got
                // then we should keep going
                if (action != callback.action) {
                    continue;
                }

                // if this is a keypress event and the meta key and control key
                // are not pressed that means that we need to only look at the
                // character, otherwise check the modifiers as well
                //
                // chrome will not fire a keypress if meta or control is down
                // safari will fire a keypress if meta or meta+shift is down
                // firefox will fire a keypress if meta or control is down
                if ((action == 'keypress' && !e.metaKey && !e.ctrlKey) || _modifiersMatch(modifiers, callback.modifiers)) {

                    // when you bind a combination or sequence a second time it
                    // should overwrite the first one.  if a sequenceName or
                    // combination is specified in this call it does just that
                    //
                    // @todo make deleting its own method?
                    var deleteCombo = !sequenceName && callback.combo == combination;
                    var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
                    if (deleteCombo || deleteSequence) {
                        self._callbacks[character].splice(i, 1);
                    }

                    matches.push(callback);
                }
            }

            return matches;
        }

        /**
         * actually calls the callback function
         *
         * if your callback function returns false this will use the jquery
         * convention - prevent default and stop propogation on the event
         *
         * @param {Function} callback
         * @param {Event} e
         * @returns void
         */
        function _fireCallback(callback, e, combo, sequence) {

            // if this event should not happen stop here
            if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
                return;
            }

            if (callback(e, combo) === false) {
                _preventDefault(e);
                _stopPropagation(e);
            }
        }

        /**
         * handles a character key event
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event} e
         * @returns void
         */
        self._handleKey = function(character, modifiers, e) {
            var callbacks = _getMatches(character, modifiers, e);
            var i;
            var doNotReset = {};
            var maxLevel = 0;
            var processedSequenceCallback = false;

            // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
            for (i = 0; i < callbacks.length; ++i) {
                if (callbacks[i].seq) {
                    maxLevel = Math.max(maxLevel, callbacks[i].level);
                }
            }

            // loop through matching callbacks for this key event
            for (i = 0; i < callbacks.length; ++i) {

                // fire for all sequence callbacks
                // this is because if for example you have multiple sequences
                // bound such as "g i" and "g t" they both need to fire the
                // callback for matching g cause otherwise you can only ever
                // match the first one
                if (callbacks[i].seq) {

                    // only fire callbacks for the maxLevel to prevent
                    // subsequences from also firing
                    //
                    // for example 'a option b' should not cause 'option b' to fire
                    // even though 'option b' is part of the other sequence
                    //
                    // any sequences that do not match here will be discarded
                    // below by the _resetSequences call
                    if (callbacks[i].level != maxLevel) {
                        continue;
                    }

                    processedSequenceCallback = true;

                    // keep a list of which sequences were matches for later
                    doNotReset[callbacks[i].seq] = 1;
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
                    continue;
                }

                // if there were no sequence matches but we are still here
                // that means this is a regular match so we should fire that
                if (!processedSequenceCallback) {
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
                }
            }

            // if the key you pressed matches the type of sequence without
            // being a modifier (ie "keyup" or "keypress") then we should
            // reset all sequences that were not matched by this event
            //
            // this is so, for example, if you have the sequence "h a t" and you
            // type "h e a r t" it does not match.  in this case the "e" will
            // cause the sequence to reset
            //
            // modifier keys are ignored because you can have a sequence
            // that contains modifiers such as "enter ctrl+space" and in most
            // cases the modifier key will be pressed before the next key
            //
            // also if you have a sequence such as "ctrl+b a" then pressing the
            // "b" key will trigger a "keypress" and a "keydown"
            //
            // the "keydown" is expected when there is a modifier, but the
            // "keypress" ends up matching the _nextExpectedAction since it occurs
            // after and that causes the sequence to reset
            //
            // we ignore keypresses in a sequence that directly follow a keydown
            // for the same character
            var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
            if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
                _resetSequences(doNotReset);
            }

            _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
        };

        /**
         * handles a keydown event
         *
         * @param {Event} e
         * @returns void
         */
        function _handleKeyEvent(e) {

            // normalize e.which for key events
            // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
            if (typeof e.which !== 'number') {
                e.which = e.keyCode;
            }

            var character = _characterFromEvent(e);

            // no character found then stop
            if (!character) {
                return;
            }

            // need to use === for the character check because the character can be 0
            if (e.type == 'keyup' && _ignoreNextKeyup === character) {
                _ignoreNextKeyup = false;
                return;
            }

            self.handleKey(character, _eventModifiers(e), e);
        }

        /**
         * called to set a 1 second timeout on the specified sequence
         *
         * this is so after each key press in the sequence you have 1 second
         * to press the next key before you have to start over
         *
         * @returns void
         */
        function _resetSequenceTimer() {
            clearTimeout(_resetTimer);
            _resetTimer = setTimeout(_resetSequences, 1000);
        }

        /**
         * binds a key sequence to an event
         *
         * @param {string} combo - combo specified in bind call
         * @param {Array} keys
         * @param {Function} callback
         * @param {string=} action
         * @returns void
         */
        function _bindSequence(combo, keys, callback, action) {

            // start off by adding a sequence level record for this combination
            // and setting the level to 0
            _sequenceLevels[combo] = 0;

            /**
             * callback to increase the sequence level for this sequence and reset
             * all other sequences that were active
             *
             * @param {string} nextAction
             * @returns {Function}
             */
            function _increaseSequence(nextAction) {
                return function() {
                    _nextExpectedAction = nextAction;
                    ++_sequenceLevels[combo];
                    _resetSequenceTimer();
                };
            }

            /**
             * wraps the specified callback inside of another function in order
             * to reset all sequence counters as soon as this sequence is done
             *
             * @param {Event} e
             * @returns void
             */
            function _callbackAndReset(e) {
                _fireCallback(callback, e, combo);

                // we should ignore the next key up if the action is key down
                // or keypress.  this is so if you finish a sequence and
                // release the key the final key will not trigger a keyup
                if (action !== 'keyup') {
                    _ignoreNextKeyup = _characterFromEvent(e);
                }

                // weird race condition if a sequence ends with the key
                // another sequence begins with
                setTimeout(_resetSequences, 10);
            }

            // loop through keys one at a time and bind the appropriate callback
            // function.  for any key leading up to the final one it should
            // increase the sequence. after the final, it should reset all sequences
            //
            // if an action is specified in the original bind call then that will
            // be used throughout.  otherwise we will pass the action that the
            // next key in the sequence should match.  this allows a sequence
            // to mix and match keypress and keydown events depending on which
            // ones are better suited to the key provided
            for (var i = 0; i < keys.length; ++i) {
                var isFinal = i + 1 === keys.length;
                var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
                _bindSingle(keys[i], wrappedCallback, action, combo, i);
            }
        }

        /**
         * binds a single keyboard combination
         *
         * @param {string} combination
         * @param {Function} callback
         * @param {string=} action
         * @param {string=} sequenceName - name of sequence if part of sequence
         * @param {number=} level - what part of the sequence the command is
         * @returns void
         */
        function _bindSingle(combination, callback, action, sequenceName, level) {

            // store a direct mapped reference for use with Mousetrap.trigger
            self._directMap[combination + ':' + action] = callback;

            // make sure multiple spaces in a row become a single space
            combination = combination.replace(/\s+/g, ' ');

            var sequence = combination.split(' ');
            var info;

            // if this pattern is a sequence of keys then run through this method
            // to reprocess each pattern one key at a time
            if (sequence.length > 1) {
                _bindSequence(combination, sequence, callback, action);
                return;
            }

            info = _getKeyInfo(combination, action);

            // make sure to initialize array if this is the first time
            // a callback is added for this key
            self._callbacks[info.key] = self._callbacks[info.key] || [];

            // remove an existing match if there is one
            _getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level);

            // add this call back to the array
            // if it is a sequence put it at the beginning
            // if not put it at the end
            //
            // this is important because the way these are processed expects
            // the sequence ones to come first
            self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
                callback: callback,
                modifiers: info.modifiers,
                action: info.action,
                seq: sequenceName,
                level: level,
                combo: combination
            });
        }

        /**
         * binds multiple combinations to the same callback
         *
         * @param {Array} combinations
         * @param {Function} callback
         * @param {string|undefined} action
         * @returns void
         */
        self._bindMultiple = function(combinations, callback, action) {
            for (var i = 0; i < combinations.length; ++i) {
                _bindSingle(combinations[i], callback, action);
            }
        };

        // start!
        _addEvent(targetElement, 'keypress', _handleKeyEvent);
        _addEvent(targetElement, 'keydown', _handleKeyEvent);
        _addEvent(targetElement, 'keyup', _handleKeyEvent);
    }

    /**
     * binds an event to mousetrap
     *
     * can be a single key, a combination of keys separated with +,
     * an array of keys, or a sequence of keys separated by spaces
     *
     * be sure to list the modifier keys first to make sure that the
     * correct key ends up getting bound (the last key in the pattern)
     *
     * @param {string|Array} keys
     * @param {Function} callback
     * @param {string=} action - 'keypress', 'keydown', or 'keyup'
     * @returns void
     */
    Mousetrap.prototype.bind = function(keys, callback, action) {
        var self = this;
        keys = keys instanceof Array ? keys : [keys];
        self._bindMultiple.call(self, keys, callback, action);
        return self;
    };

    /**
     * unbinds an event to mousetrap
     *
     * the unbinding sets the callback function of the specified key combo
     * to an empty function and deletes the corresponding key in the
     * _directMap dict.
     *
     * TODO: actually remove this from the _callbacks dictionary instead
     * of binding an empty function
     *
     * the keycombo+action has to be exactly the same as
     * it was defined in the bind method
     *
     * @param {string|Array} keys
     * @param {string} action
     * @returns void
     */
    Mousetrap.prototype.unbind = function(keys, action) {
        var self = this;
        return self.bind.call(self, keys, function() {}, action);
    };

    /**
     * triggers an event that has already been bound
     *
     * @param {string} keys
     * @param {string=} action
     * @returns void
     */
    Mousetrap.prototype.trigger = function(keys, action) {
        var self = this;
        if (self._directMap[keys + ':' + action]) {
            self._directMap[keys + ':' + action]({}, keys);
        }
        return self;
    };

    /**
     * resets the library back to its initial state.  this is useful
     * if you want to clear out the current keyboard shortcuts and bind
     * new ones - for example if you switch to another page
     *
     * @returns void
     */
    Mousetrap.prototype.reset = function() {
        var self = this;
        self._callbacks = {};
        self._directMap = {};
        return self;
    };

    /**
     * should we stop this event before firing off callbacks
     *
     * @param {Event} e
     * @param {Element} element
     * @return {boolean}
     */
    Mousetrap.prototype.stopCallback = function(e, element) {
        var self = this;

        // if the element has the class "mousetrap" then no need to stop
        if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
            return false;
        }

        if (_belongsTo(element, self.target)) {
            return false;
        }

        // Events originating from a shadow DOM are re-targetted and `e.target` is the shadow host,
        // not the initial event target in the shadow tree. Note that not all events cross the
        // shadow boundary.
        // For shadow trees with `mode: 'open'`, the initial event target is the first element in
        // the event’s composed path. For shadow trees with `mode: 'closed'`, the initial event
        // target cannot be obtained.
        if ('composedPath' in e && typeof e.composedPath === 'function') {
            // For open shadow trees, update `element` so that the following check works.
            var initialEventTarget = e.composedPath()[0];
            if (initialEventTarget !== e.target) {
                element = initialEventTarget;
            }
        }

        // stop for input, select, and textarea
        return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
    };

    /**
     * exposes _handleKey publicly so it can be overwritten by extensions
     */
    Mousetrap.prototype.handleKey = function() {
        var self = this;
        return self._handleKey.apply(self, arguments);
    };

    /**
     * allow custom key mappings
     */
    Mousetrap.addKeycodes = function(object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                _MAP[key] = object[key];
            }
        }
        _REVERSE_MAP = null;
    };

    /**
     * Init the global mousetrap functions
     *
     * This method is needed to allow the global mousetrap functions to work
     * now that mousetrap is a constructor function.
     */
    Mousetrap.init = function() {
        var documentMousetrap = Mousetrap(document);
        for (var method in documentMousetrap) {
            if (method.charAt(0) !== '_') {
                Mousetrap[method] = (function(method) {
                    return function() {
                        return documentMousetrap[method].apply(documentMousetrap, arguments);
                    };
                } (method));
            }
        }
    };

    Mousetrap.init();

    // expose mousetrap to the global object
    window.Mousetrap = Mousetrap;

    // expose as a common js module
    if ( true && module.exports) {
        module.exports = Mousetrap;
    }

    // expose mousetrap as an AMD module
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return Mousetrap;
        });
    }
}) (typeof window !== 'undefined' ? window : null, typeof  window !== 'undefined' ? document : null);


/***/ }),

/***/ 897:
/***/ (function(module, exports) {

/**
 * adds a bindGlobal method to Mousetrap that allows you to
 * bind specific keyboard shortcuts that will still work
 * inside a text input field
 *
 * usage:
 * Mousetrap.bindGlobal('ctrl+s', _saveChanges);
 */
/* global Mousetrap:true */
(function(Mousetrap) {
    if (! Mousetrap) {
        return;
    }
    var _globalCallbacks = {};
    var _originalStopCallback = Mousetrap.prototype.stopCallback;

    Mousetrap.prototype.stopCallback = function(e, element, combo, sequence) {
        var self = this;

        if (self.paused) {
            return true;
        }

        if (_globalCallbacks[combo] || _globalCallbacks[sequence]) {
            return false;
        }

        return _originalStopCallback.call(self, e, element, combo);
    };

    Mousetrap.prototype.bindGlobal = function(keys, callback, action) {
        var self = this;
        self.bind(keys, callback, action);

        if (keys instanceof Array) {
            for (var i = 0; i < keys.length; i++) {
                _globalCallbacks[keys[i]] = true;
            }
            return;
        }

        _globalCallbacks[keys] = true;
    };

    Mousetrap.init();
}) (typeof Mousetrap !== "undefined" ? Mousetrap : undefined);


/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/compose.js
var compose = __webpack_require__(185);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(24);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: ./client/settings/index.js
var settings = __webpack_require__(28);

// EXTERNAL MODULE: external {"this":["wc","data"]}
var external_this_wc_data_ = __webpack_require__(46);

// EXTERNAL MODULE: external {"this":["wc","navigation"]}
var external_this_wc_navigation_ = __webpack_require__(29);

// EXTERNAL MODULE: ./client/dashboard/utils.js
var utils = __webpack_require__(148);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(53);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(5);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/text/index.js + 3 modules
var build_module_text = __webpack_require__(759);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/card/index.js
var card = __webpack_require__(920);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/card/header.js
var header = __webpack_require__(890);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/card/body.js
var card_body = __webpack_require__(921);

// EXTERNAL MODULE: ./node_modules/@wordpress/primitives/build-module/svg/index.js
var svg = __webpack_require__(51);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/megaphone.js


/**
 * WordPress dependencies
 */

var megaphone = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  fillRule: "evenodd",
  d: "M6.863 13.644L5 13.25h-.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H5L18 6.5h2V16h-2l-3.854-.815.026.008a3.75 3.75 0 01-7.31-1.549zm1.477.313a2.251 2.251 0 004.356.921l-4.356-.921zm-2.84-3.28L18.157 8h.343v6.5h-.343L5.5 11.823v-1.146z",
  clipRule: "evenodd"
}));
/* harmony default export */ var library_megaphone = (megaphone);
//# sourceMappingURL=megaphone.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/box.js


/**
 * WordPress dependencies
 */

var box = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  fillRule: "evenodd",
  d: "M5 5.5h14a.5.5 0 01.5.5v1.5a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 9.232A2 2 0 013 7.5V6a2 2 0 012-2h14a2 2 0 012 2v1.5a2 2 0 01-1 1.732V18a2 2 0 01-2 2H6a2 2 0 01-2-2V9.232zm1.5.268V18a.5.5 0 00.5.5h12a.5.5 0 00.5-.5V9.5h-13z",
  clipRule: "evenodd"
}));
/* harmony default export */ var library_box = (box);
//# sourceMappingURL=box.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/brush.js


/**
 * WordPress dependencies
 */

var brush = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M18.33 3.57s.27-.8-.31-1.36c-.53-.52-1.22-.24-1.22-.24-.61.3-5.76 3.47-7.67 5.57-.86.96-2.06 3.79-1.09 4.82.92.98 3.96-.17 4.79-1 2.06-2.06 5.21-7.17 5.5-7.79zM1.4 17.65c2.37-1.56 1.46-3.41 3.23-4.64.93-.65 2.22-.62 3.08.29.63.67.8 2.57-.16 3.46-1.57 1.45-4 1.55-6.15.89z"
}));
/* harmony default export */ var library_brush = (brush);
//# sourceMappingURL=brush.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/shipping.js


/**
 * WordPress dependencies
 */

var shipping = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M3 6.75C3 5.784 3.784 5 4.75 5H15V7.313l.05.027 5.056 2.73.394.212v3.468a1.75 1.75 0 01-1.75 1.75h-.012a2.5 2.5 0 11-4.975 0H9.737a2.5 2.5 0 11-4.975 0H3V6.75zM13.5 14V6.5H4.75a.25.25 0 00-.25.25V14h.965a2.493 2.493 0 011.785-.75c.7 0 1.332.287 1.785.75H13.5zm4.535 0h.715a.25.25 0 00.25-.25v-2.573l-4-2.16v4.568a2.487 2.487 0 011.25-.335c.7 0 1.332.287 1.785.75zM6.282 15.5a1.002 1.002 0 00.968 1.25 1 1 0 10-.968-1.25zm9 0a1 1 0 101.937.498 1 1 0 00-1.938-.498z"
}));
/* harmony default export */ var library_shipping = (shipping);
//# sourceMappingURL=shipping.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/percent.js


/**
 * WordPress dependencies
 */

var percent = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  fillRule: "evenodd",
  d: "M6.5 8a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM8 5a3 3 0 100 6 3 3 0 000-6zm6.5 11a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm1.5-3a3 3 0 100 6 3 3 0 000-6zM5.47 17.41a.75.75 0 001.06 1.06L18.47 6.53a.75.75 0 10-1.06-1.06L5.47 17.41z",
  clipRule: "evenodd"
}));
/* harmony default export */ var library_percent = (percent);
//# sourceMappingURL=percent.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/payment.js


/**
 * WordPress dependencies
 */

var payment = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  fillRule: "evenodd",
  d: "M5.5 9.5v-2h13v2h-13zm0 3v4h13v-4h-13zM4 7a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V7z",
  clipRule: "evenodd"
}));
/* harmony default export */ var library_payment = (payment);
//# sourceMappingURL=payment.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/pencil.js


/**
 * WordPress dependencies
 */

var pencil = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M13.89 3.39l2.71 2.72c.46.46.42 1.24.03 1.64l-8.01 8.02-5.56 1.16 1.16-5.58s7.6-7.63 7.99-8.03c.39-.39 1.22-.39 1.68.07zm-2.73 2.79l-5.59 5.61 1.11 1.11 5.54-5.65zm-2.97 8.23l5.58-5.6-1.07-1.08-5.59 5.6zM13.89 3.39l2.71 2.72c.46.46.42 1.24.03 1.64l-8.01 8.02-5.56 1.16 1.16-5.58s7.6-7.63 7.99-8.03c.39-.39 1.22-.39 1.68.07zm-2.73 2.79l-5.59 5.61 1.11 1.11 5.54-5.65zm-2.97 8.23l5.58-5.6-1.07-1.08-5.59 5.6z"
}));
/* harmony default export */ var library_pencil = (pencil);
//# sourceMappingURL=pencil.js.map
// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/lifesaver.js
var lifesaver = __webpack_require__(736);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__(452);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/external.js


/**
 * WordPress dependencies
 */

var external = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M18.2 17c0 .7-.6 1.2-1.2 1.2H7c-.7 0-1.2-.6-1.2-1.2V7c0-.7.6-1.2 1.2-1.2h3.2V4.2H7C5.5 4.2 4.2 5.5 4.2 7v10c0 1.5 1.2 2.8 2.8 2.8h10c1.5 0 2.8-1.2 2.8-2.8v-3.6h-1.5V17zM14.9 3v1.5h3.7l-6.4 6.4 1.1 1.1 6.4-6.4v3.7h1.5V3h-6.3z"
}));
/* harmony default export */ var library_external = (external);
//# sourceMappingURL=external.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/home.js


/**
 * WordPress dependencies
 */

var home = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M12 4L4 7.9V20h16V7.9L12 4zm6.5 14.5H14V13h-4v5.5H5.5V8.8L12 5.7l6.5 3.1v9.7z"
}));
/* harmony default export */ var library_home = (home);
//# sourceMappingURL=home.js.map
// EXTERNAL MODULE: external {"this":["wc","components"]}
var external_this_wc_components_ = __webpack_require__(55);

// EXTERNAL MODULE: ./client/lib/tracks.js
var tracks = __webpack_require__(63);

// EXTERNAL MODULE: ./client/quick-links/style.scss
var style = __webpack_require__(888);

// CONCATENATED MODULE: ./client/quick-links/index.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */




/**
 * WooCommerce dependencies
 */



/**
 * Internal dependencies
 */




function getItems(props) {
  return [{
    title: Object(external_this_wp_i18n_["__"])('Market my store', 'woocommerce-admin'),
    type: 'wc-admin',
    path: 'marketing',
    icon: library_megaphone,
    listItemTag: 'marketing'
  }, {
    title: Object(external_this_wp_i18n_["__"])('Add products', 'woocommerce-admin'),
    type: 'wp-admin',
    path: 'post-new.php?post_type=product',
    icon: library_box,
    listItemTag: 'add-products'
  }, {
    title: Object(external_this_wp_i18n_["__"])('Personalize my store', 'woocommerce-admin'),
    type: 'wp-admin',
    path: 'customize.php',
    icon: library_brush,
    listItemTag: 'personalize-store'
  }, {
    title: Object(external_this_wp_i18n_["__"])('Shipping settings', 'woocommerce-admin'),
    type: 'wc-settings',
    tab: 'shipping',
    icon: library_shipping,
    listItemTag: 'shipping-settings'
  }, {
    title: Object(external_this_wp_i18n_["__"])('Tax settings', 'woocommerce-admin'),
    type: 'wc-settings',
    tab: 'tax',
    icon: library_percent,
    listItemTag: 'tax-settings'
  }, {
    title: Object(external_this_wp_i18n_["__"])('Payment settings', 'woocommerce-admin'),
    type: 'wc-settings',
    tab: 'checkout',
    icon: library_payment,
    listItemTag: 'payment-settings'
  }, {
    title: Object(external_this_wp_i18n_["__"])('Edit store details', 'woocommerce-admin'),
    type: 'wc-settings',
    tab: 'general',
    icon: library_pencil,
    listItemTag: 'edit-store-details'
  }, {
    title: Object(external_this_wp_i18n_["__"])('Get support', 'woocommerce-admin'),
    type: 'external',
    href: 'https://woocommerce.com/my-account/create-a-ticket/',
    icon: lifesaver["a" /* default */],
    after: Object(external_this_wp_element_["createElement"])(icon["a" /* default */], {
      icon: library_external
    }),
    listItemTag: 'support'
  }, {
    title: Object(external_this_wp_i18n_["__"])('View my store', 'woocommerce-admin'),
    type: 'external',
    href: props.getSetting('siteUrl'),
    icon: library_home,
    after: Object(external_this_wp_element_["createElement"])(icon["a" /* default */], {
      icon: library_external
    }),
    listItemTag: 'view-store'
  }];
}

function handleOnItemClick(props, event) {
  var a = event.currentTarget;
  var listItemTag = a.dataset.listItemTag;

  if (!listItemTag) {
    return;
  }

  props.recordEvent('home_quick_links_click', {
    task_name: listItemTag
  });

  if (typeof props.onItemClick !== 'function') {
    return;
  }

  if (!props.onItemClick(listItemTag)) {
    event.preventDefault();
    return false;
  }
}

function getLinkTypeAndHref(item) {
  var linkType;
  var href;

  switch (item.type) {
    case 'wc-admin':
      linkType = 'wc-admin';
      href = "admin.php?page=wc-admin&path=%2F".concat(item.path);
      break;

    case 'wp-admin':
      linkType = 'wp-admin';
      href = item.path;
      break;

    case 'wc-settings':
      linkType = 'wp-admin';
      href = "admin.php?page=wc-settings&tab=".concat(item.tab);
      break;

    default:
      linkType = 'external';
      href = item.href;
      break;
  }

  return {
    linkType: linkType,
    href: href
  };
}

function getListItems(props) {
  return getItems(props).map(function (item) {
    return _objectSpread(_objectSpread({
      title: Object(external_this_wp_element_["createElement"])(build_module_text["a" /* default */], {
        as: "div",
        variant: "button"
      }, item.title),
      before: Object(external_this_wp_element_["createElement"])(icon["a" /* default */], {
        icon: item.icon
      }),
      after: item.after
    }, getLinkTypeAndHref(item)), {}, {
      listItemTag: item.listItemTag,
      onClick: Object(external_lodash_["partial"])(handleOnItemClick, props)
    });
  });
}

var quick_links_QuickLinks = function QuickLinks(props) {
  var listItems = getListItems(props);
  return Object(external_this_wp_element_["createElement"])(card["a" /* default */], {
    size: "large",
    className: "woocommerce-quick-links"
  }, Object(external_this_wp_element_["createElement"])(header["a" /* default */], {
    size: "medium"
  }, Object(external_this_wp_element_["createElement"])(build_module_text["a" /* default */], {
    variant: "title.small"
  }, Object(external_this_wp_i18n_["__"])('Store management', 'woocommerce-admin'))), Object(external_this_wp_element_["createElement"])(card_body["a" /* default */], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["List"], {
    items: listItems,
    className: "woocommerce-quick-links__list"
  })));
};

quick_links_QuickLinks.defaultProps = {
  getSetting: settings["g" /* getSetting */],
  recordEvent: tracks["b" /* recordEvent */]
};
/* harmony default export */ var quick_links = (quick_links_QuickLinks);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(49);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/tab-panel/index.js
var tab_panel = __webpack_require__(892);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/card/footer.js
var footer = __webpack_require__(893);

// EXTERNAL MODULE: ./client/homescreen/stats-overview/style.scss
var stats_overview_style = __webpack_require__(891);

// EXTERNAL MODULE: external {"this":["wp","hooks"]}
var external_this_wp_hooks_ = __webpack_require__(44);

// CONCATENATED MODULE: ./client/homescreen/stats-overview/defaults.js
/**
 * External dependencies
 */

var DEFAULT_STATS = Object(external_this_wp_hooks_["applyFilters"])('woocommerce_admin_homepage_default_stats', ['revenue/total_sales', 'revenue/net_revenue', 'orders/orders_count', 'products/items_sold', 'jetpack/stats/visitors', 'jetpack/stats/views']);
var DEFAULT_HIDDEN_STATS = ['revenue/net_revenue', 'products/items_sold'];
// EXTERNAL MODULE: ./client/wc-api/with-select.js
var with_select = __webpack_require__(104);

// EXTERNAL MODULE: ./client/lib/currency-context.js
var currency_context = __webpack_require__(218);

// EXTERNAL MODULE: ./client/dashboard/store-performance/utils.js
var store_performance_utils = __webpack_require__(762);

// CONCATENATED MODULE: ./client/homescreen/stats-overview/stats-list.js


/**
 * External dependencies
 */



/**
 * WooCommerce dependencies
 */



/**
 * Internal dependencies
 */





var stats_list_StatsList = function StatsList(_ref) {
  var stats = _ref.stats,
      primaryData = _ref.primaryData,
      secondaryData = _ref.secondaryData,
      primaryRequesting = _ref.primaryRequesting,
      secondaryRequesting = _ref.secondaryRequesting,
      primaryError = _ref.primaryError,
      secondaryError = _ref.secondaryError,
      query = _ref.query;

  var _useContext = Object(external_this_wp_element_["useContext"])(currency_context["a" /* CurrencyContext */]),
      formatAmount = _useContext.formatAmount,
      getCurrencyConfig = _useContext.getCurrencyConfig;

  if (primaryError || secondaryError) {
    return null;
  }

  var persistedQuery = Object(external_this_wc_navigation_["getPersistedQuery"])(query);
  var currency = getCurrencyConfig();
  return Object(external_this_wp_element_["createElement"])("ul", {
    className: classnames_default()('woocommerce-stats-overview__stats', {
      'is-even': stats.length % 2 === 0
    })
  }, stats.map(function (item) {
    if (primaryRequesting || secondaryRequesting) {
      return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["SummaryNumberPlaceholder"], {
        className: "is-homescreen",
        key: item.stat
      });
    }

    var _getIndicatorValues = Object(store_performance_utils["b" /* getIndicatorValues */])({
      indicator: item,
      primaryData: primaryData,
      secondaryData: secondaryData,
      currency: currency,
      formatAmount: formatAmount,
      persistedQuery: persistedQuery
    }),
        primaryValue = _getIndicatorValues.primaryValue,
        secondaryValue = _getIndicatorValues.secondaryValue,
        delta = _getIndicatorValues.delta,
        reportUrl = _getIndicatorValues.reportUrl,
        reportUrlType = _getIndicatorValues.reportUrlType;

    return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["SummaryNumber"], {
      isHomescreen: true,
      key: item.stat,
      href: reportUrl,
      hrefType: reportUrlType,
      label: item.label,
      value: primaryValue,
      prevLabel: Object(external_this_wp_i18n_["__"])('Previous Period:', 'woocommerce-admin'),
      prevValue: secondaryValue,
      delta: delta,
      onLinkClickCallback: function onLinkClickCallback() {
        Object(tracks["b" /* recordEvent */])('statsoverview_indicators_click', {
          key: item.stat
        });
      }
    });
  }));
};
/* harmony default export */ var stats_list = (Object(with_select["a" /* default */])(function (select, _ref2) {
  var stats = _ref2.stats,
      query = _ref2.query;

  if (stats.length === 0) {
    return;
  }

  return Object(store_performance_utils["a" /* getIndicatorData */])(select, stats, query);
})(stats_list_StatsList));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(16);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(37);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__(90);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(10);

// EXTERNAL MODULE: ./client/lib/notices/index.js
var notices = __webpack_require__(220);

// CONCATENATED MODULE: ./client/homescreen/stats-overview/install-jetpack-cta.js






/**
 * External dependencies
 */






/**
 * WooCommerce dependencies
 */




/**
 * Internal dependencies
 */




function InstallJetpackCta(_ref) {
  var getJetpackConnectUrl = _ref.getJetpackConnectUrl,
      getPluginsError = _ref.getPluginsError,
      isJetpackInstalled = _ref.isJetpackInstalled,
      isJetpackActivated = _ref.isJetpackActivated,
      isJetpackConnected = _ref.isJetpackConnected,
      installAndActivatePlugins = _ref.installAndActivatePlugins,
      isConnecting = _ref.isConnecting,
      isInstalling = _ref.isInstalling;

  var _useUserPreferences = Object(external_this_wc_data_["useUserPreferences"])(),
      updateUserPreferences = _useUserPreferences.updateUserPreferences,
      userPrefs = objectWithoutProperties_default()(_useUserPreferences, ["updateUserPreferences"]);

  var _useState = Object(external_React_["useState"])((userPrefs.homepage_stats || {}).installJetpackDismissed),
      _useState2 = slicedToArray_default()(_useState, 2),
      isDismissed = _useState2[0],
      setIsDismissed = _useState2[1];

  function install() {
    return _install.apply(this, arguments);
  }

  function _install() {
    _install = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Object(tracks["b" /* recordEvent */])('statsoverview_install_jetpack');
              installAndActivatePlugins(['jetpack']).then(connect).catch(function (error) {
                Object(notices["a" /* createNoticesFromResponse */])(error);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _install.apply(this, arguments);
  }

  function connect() {
    if (isJetpackConnected) {
      return;
    }

    getJetpackConnectUrl({
      redirect_url: Object(settings["f" /* getAdminLink */])('admin.php?page=wc-admin')
    }).then(function (url) {
      var error = getPluginsError('getJetpackConnectUrl');

      if (error) {
        Object(notices["a" /* createNoticesFromResponse */])(error);
        return;
      }

      window.location = url;
    });
  }

  function dismiss() {
    if (isInstalling || isConnecting) {
      return;
    }

    var homepageStats = userPrefs.homepage_stats || {};
    homepageStats.installJetpackDismissed = true;
    updateUserPreferences({
      homepage_stats: homepageStats
    });
    setIsDismissed(true);
    Object(tracks["b" /* recordEvent */])('statsoverview_dismiss_install_jetpack');
  }

  var doNotShow = isDismissed || isJetpackInstalled && isJetpackActivated && isJetpackConnected;

  if (doNotShow) {
    return null;
  }

  function getInstallJetpackText() {
    if (!isJetpackInstalled) {
      return Object(external_this_wp_i18n_["__"])('Get Jetpack', 'woocommerce-admin');
    }

    if (!isJetpackActivated) {
      return Object(external_this_wp_i18n_["__"])('Activate Jetpack', 'woocommerce-admin');
    }

    if (!isJetpackConnected) {
      return Object(external_this_wp_i18n_["__"])('Connect Jetpack', 'woocommerce-admin');
    }

    return '';
  }

  return Object(external_this_wp_element_["createElement"])("article", {
    className: "woocommerce-stats-overview__install-jetpack-promo"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-stats-overview__install-jetpack-promo__content"
  }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["H"], null, Object(external_this_wp_i18n_["__"])('Get traffic stats with Jetpack', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])("p", null, Object(external_this_wp_i18n_["__"])('Keep an eye on your views and visitors metrics with ' + 'Jetpack. Requires Jetpack plugin and a WordPress.com ' + 'account.', 'woocommerce-admin'))), Object(external_this_wp_element_["createElement"])("footer", null, Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
    isSecondary: true,
    onClick: install,
    isBusy: isInstalling
  }, getInstallJetpackText()), Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
    isTertiary: true,
    onClick: dismiss,
    isBusy: isInstalling
  }, Object(external_this_wp_i18n_["__"])('No thanks', 'woocommerce-admin'))));
}

InstallJetpackCta.propTypes = {
  /**
   * Is the Jetpack plugin connected.
   */
  isJetpackConnected: prop_types_default.a.bool.isRequired
};
/* harmony default export */ var install_jetpack_cta = (Object(compose["a" /* default */])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select(external_this_wc_data_["PLUGINS_STORE_NAME"]),
      isJetpackConnected = _select.isJetpackConnected,
      isPluginsRequesting = _select.isPluginsRequesting,
      getActivePlugins = _select.getActivePlugins,
      getInstalledPlugins = _select.getInstalledPlugins,
      getPluginsError = _select.getPluginsError;

  return {
    getJetpackConnectUrl: Object(external_this_wc_data_["__experimentalResolveSelect"])(external_this_wc_data_["PLUGINS_STORE_NAME"]).getJetpackConnectUrl,
    getPluginsError: getPluginsError,
    isConnecting: isPluginsRequesting('getJetpackConnectUrl'),
    isInstalling: isPluginsRequesting('installPlugins') || isPluginsRequesting('activatePlugins'),
    isJetpackInstalled: getInstalledPlugins().includes('jetpack'),
    isJetpackActivated: getActivePlugins().includes('jetpack'),
    isJetpackConnected: isJetpackConnected()
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(external_this_wc_data_["PLUGINS_STORE_NAME"]),
      installAndActivatePlugins = _dispatch.installAndActivatePlugins;

  return {
    installAndActivatePlugins: installAndActivatePlugins
  };
}))(InstallJetpackCta));
// CONCATENATED MODULE: ./client/homescreen/stats-overview/index.js



/**
 * External dependencies
 */




/**
 * WooCommerce dependencies
 */





/**
 * Internal dependencies
 */







var _getSetting = Object(settings["g" /* getSetting */])('dataEndpoints', {
  performanceIndicators: []
}),
    performanceIndicators = _getSetting.performanceIndicators;

var stats_overview_stats = performanceIndicators.filter(function (indicator) {
  return DEFAULT_STATS.includes(indicator.stat);
});
var stats_overview_StatsOverview = function StatsOverview() {
  var _useUserPreferences = Object(external_this_wc_data_["useUserPreferences"])(),
      updateUserPreferences = _useUserPreferences.updateUserPreferences,
      userPrefs = objectWithoutProperties_default()(_useUserPreferences, ["updateUserPreferences"]);

  var hiddenStats = Object(external_lodash_["get"])(userPrefs, ['homepage_stats', 'hiddenStats'], DEFAULT_HIDDEN_STATS);

  var toggleStat = function toggleStat(stat) {
    var nextHiddenStats = Object(external_lodash_["xor"])(hiddenStats, [stat]);
    updateUserPreferences({
      homepage_stats: {
        hiddenStats: nextHiddenStats
      }
    });
    Object(tracks["b" /* recordEvent */])('statsoverview_indicators_toggle', {
      indicator_name: stat,
      status: nextHiddenStats.includes(stat) ? 'off' : 'on'
    });
  };

  var activeStats = stats_overview_stats.filter(function (item) {
    return !hiddenStats.includes(item.stat);
  });
  return Object(external_this_wp_element_["createElement"])(card["a" /* default */], {
    size: "large",
    className: "woocommerce-stats-overview woocommerce-homescreen-card"
  }, Object(external_this_wp_element_["createElement"])(header["a" /* default */], {
    size: "medium"
  }, Object(external_this_wp_element_["createElement"])(build_module_text["a" /* default */], {
    variant: "title.small"
  }, Object(external_this_wp_i18n_["__"])('Stats overview', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])(external_this_wc_components_["EllipsisMenu"], {
    label: Object(external_this_wp_i18n_["__"])('Choose which values to display', 'woocommerce-admin'),
    renderContent: function renderContent() {
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["MenuTitle"], null, Object(external_this_wp_i18n_["__"])('Display stats:', 'woocommerce-admin')), stats_overview_stats.map(function (item) {
        var checked = !hiddenStats.includes(item.stat);
        return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["MenuItem"], {
          checked: checked,
          isCheckbox: true,
          isClickable: true,
          key: item.stat,
          onInvoke: function onInvoke() {
            return toggleStat(item.stat);
          }
        }, item.label);
      }));
    }
  })), Object(external_this_wp_element_["createElement"])(card_body["a" /* default */], null, Object(external_this_wp_element_["createElement"])(tab_panel["a" /* default */], {
    className: "woocommerce-stats-overview__tabs",
    onSelect: function onSelect(period) {
      Object(tracks["b" /* recordEvent */])('statsoverview_date_picker_update', {
        period: period
      });
    },
    tabs: [{
      title: Object(external_this_wp_i18n_["__"])('Today', 'woocommerce-admin'),
      name: 'today'
    }, {
      title: Object(external_this_wp_i18n_["__"])('Week to date', 'woocommerce-admin'),
      name: 'week'
    }, {
      title: Object(external_this_wp_i18n_["__"])('Month to date', 'woocommerce-admin'),
      name: 'month'
    }]
  }, function (tab) {
    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(install_jetpack_cta, null), Object(external_this_wp_element_["createElement"])(stats_list, {
      query: {
        period: tab.name,
        compare: 'previous_period'
      },
      stats: activeStats
    }));
  })), Object(external_this_wp_element_["createElement"])(footer["a" /* default */], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Link"], {
    className: "woocommerce-stats-overview__more-btn",
    href: Object(external_this_wc_navigation_["getNewPath"])({}, '/analytics/overview'),
    type: "wc-admin",
    onClick: function onClick() {
      Object(tracks["b" /* recordEvent */])('statsoverview_indicators_click', {
        key: 'view_detailed_stats'
      });
    }
  }, Object(external_this_wp_i18n_["__"])('View detailed stats'))));
};
/* harmony default export */ var stats_overview = (stats_overview_StatsOverview);
// EXTERNAL MODULE: ./client/homescreen/style.scss
var homescreen_style = __webpack_require__(894);

// EXTERNAL MODULE: ./client/dashboard/style.scss
var dashboard_style = __webpack_require__(758);

// EXTERNAL MODULE: ./client/task-list/style.scss
var task_list_style = __webpack_require__(763);

// CONCATENATED MODULE: ./client/task-list/placeholder.js


/**
 * Internal dependencies
 */


var placeholder_TaskListPlaceholder = function TaskListPlaceholder(props) {
  var _props$numTasks = props.numTasks,
      numTasks = _props$numTasks === void 0 ? 5 : _props$numTasks;
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-task-dashboard__container"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-card woocommerce-task-card is-loading",
    "aria-hidden": true
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-card__header"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-card__title-wrapper"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-card__title woocommerce-card__header-item"
  }, Object(external_this_wp_element_["createElement"])("span", {
    className: "is-placeholder"
  })))), Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-card__body"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-list"
  }, Array.from(new Array(numTasks)).map(function (v, i) {
    return Object(external_this_wp_element_["createElement"])("div", {
      key: i,
      className: "woocommerce-list__item has-action"
    }, Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-list__item-inner"
    }, Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-list__item-before"
    }, Object(external_this_wp_element_["createElement"])("span", {
      className: "is-placeholder"
    })), Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-list__item-text"
    }, Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-list__item-title"
    }, Object(external_this_wp_element_["createElement"])("span", {
      className: "is-placeholder"
    }))), Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-list__item-after"
    }, Object(external_this_wp_element_["createElement"])("span", {
      className: "is-placeholder"
    }))));
  })))));
};

/* harmony default export */ var placeholder = (placeholder_TaskListPlaceholder);
// EXTERNAL MODULE: ./client/header/activity-panel/panels/inbox/index.js + 3 modules
var inbox = __webpack_require__(785);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var esm_slicedToArray = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@wordpress/deprecated/build-module/index.js
var build_module = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/modal/index.js + 4 modules
var modal = __webpack_require__(714);

// EXTERNAL MODULE: ./node_modules/mousetrap/mousetrap.js
var mousetrap_mousetrap = __webpack_require__(896);
var mousetrap_default = /*#__PURE__*/__webpack_require__.n(mousetrap_mousetrap);

// EXTERNAL MODULE: ./node_modules/mousetrap/plugins/global-bind/mousetrap-global-bind.js
var mousetrap_global_bind = __webpack_require__(897);

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-keyboard-shortcut/index.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * A block selection object.
 *
 * @typedef {Object} WPKeyboardShortcutConfig
 *
 * @property {boolean} [bindGlobal]  Handle keyboard events anywhere including inside textarea/input fields.
 * @property {string}  [eventName]   Event name used to trigger the handler, defaults to keydown.
 * @property {boolean} [isDisabled]  Disables the keyboard handler if the value is true.
 * @property {Object}  [target]      React reference to the DOM element used to catch the keyboard event.
 */

/**
 * Return true if platform is MacOS.
 *
 * @param {Object} _window   window object by default; used for DI testing.
 *
 * @return {boolean} True if MacOS; false otherwise.
 */

function isAppleOS() {
  var _window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

  var platform = _window.navigator.platform;
  return platform.indexOf('Mac') !== -1 || Object(external_lodash_["includes"])(['iPad', 'iPhone'], platform);
}
/**
 * Attach a keyboard shortcut handler.
 *
 * @param {string[]|string}         shortcuts  Keyboard Shortcuts.
 * @param {Function}                callback   Shortcut callback.
 * @param {WPKeyboardShortcutConfig} options    Shortcut options.
 */


function useKeyboardShortcut(shortcuts, callback) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$bindGlobal = _ref.bindGlobal,
      bindGlobal = _ref$bindGlobal === void 0 ? false : _ref$bindGlobal,
      _ref$eventName = _ref.eventName,
      eventName = _ref$eventName === void 0 ? 'keydown' : _ref$eventName,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      target = _ref.target;

  var currentCallback = Object(external_this_wp_element_["useRef"])(callback);
  Object(external_this_wp_element_["useEffect"])(function () {
    currentCallback.current = callback;
  }, [callback]);
  Object(external_this_wp_element_["useEffect"])(function () {
    if (isDisabled) {
      return;
    }

    var mousetrap = new mousetrap_default.a(target ? target.current : document);
    Object(external_lodash_["castArray"])(shortcuts).forEach(function (shortcut) {
      var keys = shortcut.split('+'); // Determines whether a key is a modifier by the length of the string.
      // E.g. if I add a pass a shortcut Shift+Cmd+M, it'll determine that
      // the modifiers are Shift and Cmd because they're not a single character.

      var modifiers = new Set(keys.filter(function (value) {
        return value.length > 1;
      }));
      var hasAlt = modifiers.has('alt');
      var hasShift = modifiers.has('shift'); // This should be better moved to the shortcut registration instead.

      if (isAppleOS() && (modifiers.size === 1 && hasAlt || modifiers.size === 2 && hasAlt && hasShift)) {
        throw new Error("Cannot bind ".concat(shortcut, ". Alt and Shift+Alt modifiers are reserved for character input."));
      }

      var bindFn = bindGlobal ? 'bindGlobal' : 'bind';
      mousetrap[bindFn](shortcut, function () {
        return currentCallback.current.apply(currentCallback, arguments);
      }, eventName);
    });
    return function () {
      mousetrap.reset();
    };
  }, [shortcuts, bindGlobal, eventName, target, isDisabled]);
}

/* harmony default export */ var use_keyboard_shortcut = (useKeyboardShortcut);
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/keyboard-shortcuts/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function KeyboardShortcut(_ref) {
  var target = _ref.target,
      callback = _ref.callback,
      shortcut = _ref.shortcut,
      bindGlobal = _ref.bindGlobal,
      eventName = _ref.eventName;
  use_keyboard_shortcut(shortcut, callback, {
    bindGlobal: bindGlobal,
    target: target,
    eventName: eventName
  });
  return null;
}

function KeyboardShortcuts(_ref2) {
  var children = _ref2.children,
      shortcuts = _ref2.shortcuts,
      bindGlobal = _ref2.bindGlobal,
      eventName = _ref2.eventName;
  var target = Object(external_this_wp_element_["useRef"])();
  var element = Object(external_lodash_["map"])(shortcuts, function (callback, shortcut) {
    return Object(external_this_wp_element_["createElement"])(KeyboardShortcut, {
      key: shortcut,
      shortcut: shortcut,
      callback: callback,
      bindGlobal: bindGlobal,
      eventName: eventName,
      target: target
    });
  }); // Render as non-visual if there are no children pressed. Keyboard
  // events will be bound to the document instead.

  if (!external_this_wp_element_["Children"].count(children)) {
    return element;
  }

  return Object(external_this_wp_element_["createElement"])("div", {
    ref: target
  }, element, children);
}

/* harmony default export */ var keyboard_shortcuts = (KeyboardShortcuts);
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/guide/icons.js


/**
 * WordPress dependencies
 */

var icons_PageControlIcon = function PageControlIcon(_ref) {
  var isSelected = _ref.isSelected;
  return Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
    width: "8",
    height: "8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_this_wp_element_["createElement"])(svg["a" /* Circle */], {
    cx: "4",
    cy: "4",
    r: "4",
    fill: isSelected ? '#419ECD' : '#E1E3E6'
  }));
};
//# sourceMappingURL=icons.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/guide/page-control.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function PageControl(_ref) {
  var currentPage = _ref.currentPage,
      numberOfPages = _ref.numberOfPages,
      setCurrentPage = _ref.setCurrentPage;
  return Object(external_this_wp_element_["createElement"])("ul", {
    className: "components-guide__page-control",
    "aria-label": Object(external_this_wp_i18n_["__"])('Guide controls')
  }, Object(external_lodash_["times"])(numberOfPages, function (page) {
    return Object(external_this_wp_element_["createElement"])("li", {
      key: page // Set aria-current="step" on the active page, see https://www.w3.org/TR/wai-aria-1.1/#aria-current
      ,
      "aria-current": page === currentPage ? 'step' : undefined
    }, Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
      key: page,
      icon: Object(external_this_wp_element_["createElement"])(icons_PageControlIcon, {
        isSelected: page === currentPage
      }),
      "aria-label": Object(external_this_wp_i18n_["sprintf"])(
      /* translators: 1: current page number 2: total number of pages */
      Object(external_this_wp_i18n_["__"])('Page %1$d of %2$d'), page + 1, numberOfPages),
      onClick: function onClick() {
        return setCurrentPage(page);
      }
    }));
  }));
}
//# sourceMappingURL=page-control.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/guide/finish-button.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


function FinishButton(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      children = _ref.children;
  var button = Object(external_this_wp_element_["useRef"])(null); // Focus the button on mount if nothing else is focused. This prevents a
  // focus loss when the 'Next' button is swapped out.

  Object(external_this_wp_element_["useLayoutEffect"])(function () {
    if (!document.activeElement || document.activeElement === document.body) {
      button.current.focus();
    }
  }, [button]);
  return Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
    ref: button,
    className: className,
    isPrimary: true,
    onClick: onClick
  }, children);
}
//# sourceMappingURL=finish-button.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/guide/index.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */






function Guide(_ref) {
  var children = _ref.children,
      className = _ref.className,
      contentLabel = _ref.contentLabel,
      finishButtonText = _ref.finishButtonText,
      onFinish = _ref.onFinish,
      _ref$pages = _ref.pages,
      pages = _ref$pages === void 0 ? [] : _ref$pages;

  var _useState = Object(external_this_wp_element_["useState"])(0),
      _useState2 = Object(esm_slicedToArray["a" /* default */])(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  Object(external_this_wp_element_["useEffect"])(function () {
    if (external_this_wp_element_["Children"].count(children)) {
      Object(build_module["a" /* default */])('Passing children to <Guide>', {
        alternative: 'the `pages` prop'
      });
    }
  }, [children]);

  if (external_this_wp_element_["Children"].count(children)) {
    pages = external_this_wp_element_["Children"].map(children, function (child) {
      return {
        content: child
      };
    });
  }

  var canGoBack = currentPage > 0;
  var canGoForward = currentPage < pages.length - 1;

  var goBack = function goBack() {
    if (canGoBack) {
      setCurrentPage(currentPage - 1);
    }
  };

  var goForward = function goForward() {
    if (canGoForward) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (pages.length === 0) {
    return null;
  }

  return Object(external_this_wp_element_["createElement"])(modal["a" /* default */], {
    className: classnames_default()('components-guide', className),
    contentLabel: contentLabel,
    onRequestClose: onFinish
  }, Object(external_this_wp_element_["createElement"])(keyboard_shortcuts, {
    key: currentPage,
    shortcuts: {
      left: goBack,
      right: goForward
    }
  }), Object(external_this_wp_element_["createElement"])("div", {
    className: "components-guide__container"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "components-guide__page"
  }, pages[currentPage].image, Object(external_this_wp_element_["createElement"])(PageControl, {
    currentPage: currentPage,
    numberOfPages: pages.length,
    setCurrentPage: setCurrentPage
  }), pages[currentPage].content, !canGoForward && Object(external_this_wp_element_["createElement"])(FinishButton, {
    className: "components-guide__inline-finish-button",
    onClick: onFinish
  }, finishButtonText || Object(external_this_wp_i18n_["__"])('Finish'))), Object(external_this_wp_element_["createElement"])("div", {
    className: "components-guide__footer"
  }, canGoBack && Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
    className: "components-guide__back-button",
    onClick: goBack
  }, Object(external_this_wp_i18n_["__"])('Previous')), canGoForward && Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
    className: "components-guide__forward-button",
    onClick: goForward
  }, Object(external_this_wp_i18n_["__"])('Next')), !canGoForward && Object(external_this_wp_element_["createElement"])(FinishButton, {
    className: "components-guide__finish-button",
    onClick: onFinish
  }, finishButtonText || Object(external_this_wp_i18n_["__"])('Finish')))));
}
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./client/homescreen/welcome-modal/illustrations/line-chart.js


/**
 * External dependencies
 */

var line_chart_LineChartIllustration = function LineChartIllustration() {
  return Object(external_this_wp_element_["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "517",
    height: "160",
    fill: "none"
  }, Object(external_this_wp_element_["createElement"])("defs", null), Object(external_this_wp_element_["createElement"])("g", {
    clipPath: "url(#clip0)"
  }, Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M0 0h517v160H0z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#fff",
    fillOpacity: ".65",
    d: "M125.85 217.924l-1.055-.321c-34.868-10.598-101.138-36.619-95.91-101.998 7.156-89.462 89.192-28.933 194.231-87.715 161.485-90.37 242.851-42.249 253.957 78.717 10.842 118.101-82.942 115.494-138.938 123.306-118.486 16.529-165.516 2.231-212.285-11.989z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#F6F7F7",
    d: "M125 33h267v185H125z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M327.367 93.974a6.417 6.417 0 00-6.285 7.671 6.418 6.418 0 005.035 5.044 6.405 6.405 0 006.579-2.73 6.427 6.427 0 00-.797-8.105 6.404 6.404 0 00-4.532-1.88zm0 11.615a5.18 5.18 0 01-3.668-1.522 5.2 5.2 0 01-1.23-5.38 5.196 5.196 0 014.168-3.447 5.18 5.18 0 014.967 2.137 5.201 5.201 0 01-1.546 7.453 5.186 5.186 0 01-2.706.75l.015.009z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M329.332 103.181l.806-.811a.354.354 0 00.078-.391.365.365 0 00-.078-.116l-1.456-1.461 1.456-1.458a.363.363 0 00.105-.254.36.36 0 00-.105-.254l-.806-.81a.354.354 0 00-.254-.106.356.356 0 00-.255.106l-1.456 1.458-1.456-1.458a.35.35 0 00-.253-.105.355.355 0 00-.253.105l-.809.826a.362.362 0 00-.078.39.363.363 0 00.078.117l1.456 1.458-1.456 1.461a.369.369 0 00-.105.254.356.356 0 00.105.254l.809.81a.354.354 0 00.39.078.354.354 0 00.116-.078l1.456-1.461 1.456 1.461a.366.366 0 00.509-.015zM314.559 145.63a6.413 6.413 0 00-2.722-4.13 6.429 6.429 0 00-4.883-.957l-.192.046c-.346.08-.684.191-1.01.33a6.437 6.437 0 00-3.892 5.926 6.433 6.433 0 003.907 5.916l.183.074a6.402 6.402 0 007.999-2.997 6.423 6.423 0 00.735-3.001 6.196 6.196 0 00-.125-1.207zm-1.184 1.978a.028.028 0 010 .018v.058a5.213 5.213 0 01-.913 2.181 5.191 5.191 0 01-4.068 2.146 5.162 5.162 0 01-3.445-1.2 5.2 5.2 0 01.693-8.443 4.936 4.936 0 011.026-.464l.192-.058a5.176 5.176 0 014.527.859 5.201 5.201 0 012.058 4.129 4.906 4.906 0 01-.07.774z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M310.223 149.613l.808-.81a.349.349 0 00.078-.116.348.348 0 000-.275.353.353 0 00-.078-.117l-1.455-1.458 1.455-1.458a.36.36 0 00.079-.393.36.36 0 00-.079-.117l-.808-.807a.362.362 0 00-.391-.078.349.349 0 00-.116.078l-1.455 1.464-1.465-1.464a.366.366 0 00-.254-.106.36.36 0 00-.253.106l-.809.807a.358.358 0 00-.078.393.358.358 0 00.078.117l1.459 1.458-1.459 1.458a.356.356 0 00-.078.392.382.382 0 00.078.116l.809.81a.365.365 0 00.253.106.366.366 0 00.254-.106l1.458-1.458 1.456 1.458a.353.353 0 00.513 0zM295.605 51.781l-.583-.587a.297.297 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372a.31.31 0 00.339.07.297.297 0 00.1-.07l4.465-4.439a.316.316 0 00.097-.22.313.313 0 00-.094-.223zm0 0l-.583-.587a.297.297 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372a.31.31 0 00.339.07.297.297 0 00.1-.07l4.465-4.439a.316.316 0 00.097-.22.313.313 0 00-.094-.223zm0 0l-.583-.587a.297.297 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372a.31.31 0 00.339.07.297.297 0 00.1-.07l4.465-4.439a.316.316 0 00.097-.22.313.313 0 00-.094-.223zm0 0l-.583-.587a.297.297 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372a.31.31 0 00.339.07.297.297 0 00.1-.07l4.465-4.439a.316.316 0 00.097-.22.313.313 0 00-.094-.223zm-3.628-4.619a6.402 6.402 0 00-5.921 3.963 6.432 6.432 0 001.389 6.996 6.404 6.404 0 009.86-.973 6.428 6.428 0 00-.797-8.106 6.403 6.403 0 00-4.531-1.88zm0 11.616a5.186 5.186 0 01-4.793-3.208 5.2 5.2 0 011.124-5.663 5.186 5.186 0 015.654-1.126 5.204 5.204 0 011.685 8.476 5.17 5.17 0 01-3.67 1.515v.006zm3.628-6.99l-.583-.588a.298.298 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372c.029.03.063.053.1.07a.31.31 0 00.239 0 .297.297 0 00.1-.07l4.465-4.438a.304.304 0 00.075-.347.31.31 0 00-.072-.103v.006zm0 0l-.583-.588a.298.298 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372c.029.03.063.053.1.07a.31.31 0 00.239 0 .297.297 0 00.1-.07l4.465-4.438a.304.304 0 00.075-.347.31.31 0 00-.072-.103v.006zm0 0l-.583-.588a.298.298 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372c.029.03.063.053.1.07a.31.31 0 00.239 0 .297.297 0 00.1-.07l4.465-4.438a.304.304 0 00.075-.347.31.31 0 00-.072-.103v.006zm0 0l-.583-.588a.298.298 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372c.029.03.063.053.1.07a.31.31 0 00.239 0 .297.297 0 00.1-.07l4.465-4.438a.304.304 0 00.075-.347.31.31 0 00-.072-.103v.006zm0 0l-.583-.588a.298.298 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372c.029.03.063.053.1.07a.31.31 0 00.239 0 .297.297 0 00.1-.07l4.465-4.438a.304.304 0 00.075-.347.31.31 0 00-.072-.103v.006zM306.96 98.595l-.582-.59a.311.311 0 00-.22-.093.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.303.303 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.312.312 0 00.097-.22.308.308 0 00-.091-.22zm0 0l-.582-.59a.311.311 0 00-.22-.093.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.303.303 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.312.312 0 00.097-.22.308.308 0 00-.091-.22zm0 0l-.582-.59a.311.311 0 00-.22-.093.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.303.303 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.312.312 0 00.097-.22.308.308 0 00-.091-.22zm0 0l-.582-.59a.311.311 0 00-.22-.093.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.303.303 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.312.312 0 00.097-.22.308.308 0 00-.091-.22zm-3.628-4.621a6.417 6.417 0 00-6.285 7.671 6.412 6.412 0 005.035 5.044 6.401 6.401 0 006.578-2.73 6.42 6.42 0 00-.797-8.105 6.4 6.4 0 00-4.531-1.88zm0 11.615a5.18 5.18 0 01-4.793-3.208 5.201 5.201 0 013.781-7.085 5.179 5.179 0 015.326 2.21c.57.854.874 1.86.874 2.887a5.202 5.202 0 01-1.516 3.677 5.178 5.178 0 01-3.672 1.516v.003zm3.628-6.99l-.582-.59a.31.31 0 00-.22-.094.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.302.302 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.3.3 0 00.098-.22.304.304 0 00-.092-.223v.002zm0 0l-.582-.59a.31.31 0 00-.22-.094.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.302.302 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.3.3 0 00.098-.22.304.304 0 00-.092-.223v.002zm0 0l-.582-.59a.31.31 0 00-.22-.094.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.302.302 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.3.3 0 00.098-.22.304.304 0 00-.092-.223v.002zm0 0l-.582-.59a.31.31 0 00-.22-.094.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.302.302 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.3.3 0 00.098-.22.304.304 0 00-.092-.223v.002zm0 0l-.582-.59a.31.31 0 00-.22-.094.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.302.302 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.3.3 0 00.098-.22.304.304 0 00-.092-.223v.002zM287.774 145.407l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.309.309 0 00.097-.219.309.309 0 00-.091-.221zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.309.309 0 00.097-.219.309.309 0 00-.091-.221zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.309.309 0 00.097-.219.309.309 0 00-.091-.221zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.309.309 0 00.097-.219.309.309 0 00-.091-.221zm-3.628-4.622a6.416 6.416 0 00-6.285 7.671 6.414 6.414 0 005.035 5.044 6.393 6.393 0 003.702-.365 6.418 6.418 0 003.957-5.931 6.43 6.43 0 00-1.877-4.539 6.403 6.403 0 00-4.532-1.88zm0 11.616a5.181 5.181 0 01-2.882-.876 5.2 5.2 0 011.87-9.418 5.186 5.186 0 015.326 2.21c.57.855.874 1.859.874 2.887a5.191 5.191 0 01-1.515 3.678 5.163 5.163 0 01-3.673 1.516v.003zm3.628-6.991l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.297.297 0 00.098-.22.293.293 0 00-.023-.121.284.284 0 00-.069-.102v.003zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.297.297 0 00.098-.22.293.293 0 00-.023-.121.284.284 0 00-.069-.102v.003zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.297.297 0 00.098-.22.293.293 0 00-.023-.121.284.284 0 00-.069-.102v.003zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.297.297 0 00.098-.22.293.293 0 00-.023-.121.284.284 0 00-.069-.102v.003zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.297.297 0 00.098-.22.293.293 0 00-.023-.121.284.284 0 00-.069-.102v.003zM349.568 75.187l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm-3.628-4.619a6.402 6.402 0 00-4.17 1.5 6.422 6.422 0 00-1.386 8.21 6.415 6.415 0 003.447 2.79 6.4 6.4 0 004.477-.092c.317-.126.624-.278.915-.456a6.418 6.418 0 002.93-7.236 6.422 6.422 0 00-2.309-3.413 6.4 6.4 0 00-3.904-1.303zm2.273 11.087a5.056 5.056 0 01-.665.272 5.213 5.213 0 01-3.406-.067 5.197 5.197 0 01-1.681-8.731 5.182 5.182 0 018.501 2.56 5.195 5.195 0 01-2.749 5.966zm1.355-6.468l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M268.92 47H150.08c-3.358 0-6.08 2.91-6.08 6.5s2.722 6.5 6.08 6.5h118.84c3.358 0 6.08-2.91 6.08-6.5s-2.722-6.5-6.08-6.5z",
    opacity: ".6"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M321.919 71H150.081c-3.359 0-6.081 2.686-6.081 6s2.722 6 6.081 6h171.838c3.359 0 6.081-2.686 6.081-6s-2.722-6-6.081-6z",
    opacity: ".3"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M279.927 94H150.073c-3.354 0-6.073 2.91-6.073 6.5s2.719 6.5 6.073 6.5h129.854c3.354 0 6.073-2.91 6.073-6.5s-2.719-6.5-6.073-6.5z",
    opacity: ".6"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M321.919 118H150.081c-3.359 0-6.081 2.686-6.081 6s2.722 6 6.081 6h171.838c3.359 0 6.081-2.686 6.081-6s-2.722-6-6.081-6z",
    opacity: ".3"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M261.916 141H150.084c-3.36 0-6.084 2.686-6.084 6s2.724 6 6.084 6h111.832c3.36 0 6.084-2.686 6.084-6s-2.724-6-6.084-6z",
    opacity: ".1"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M316.161 47.162a6.4 6.4 0 00-5.92 3.963 6.432 6.432 0 001.389 6.996 6.404 6.404 0 009.86-.973 6.428 6.428 0 00-.797-8.106 6.404 6.404 0 00-4.532-1.88zm0 11.616a5.18 5.18 0 01-2.882-.876 5.198 5.198 0 011.87-9.417 5.181 5.181 0 015.326 2.21c.57.854.874 1.859.874 2.887a5.195 5.195 0 01-3.201 4.8c-.63.26-1.305.392-1.987.39v.006z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M318.127 56.366l.808-.807a.35.35 0 00.078-.117.346.346 0 000-.276.35.35 0 00-.078-.117l-1.458-1.458 1.455-1.458a.35.35 0 00.078-.117.346.346 0 000-.277.35.35 0 00-.078-.117l-.808-.807a.364.364 0 00-.254-.105.358.358 0 00-.253.105l-1.456 1.458-1.455-1.458a.361.361 0 00-.51 0l-.806.807a.365.365 0 00-.107.255.365.365 0 00.107.256l1.456 1.458-1.453 1.455a.365.365 0 00-.079.394.381.381 0 00.079.116l.806.807a.353.353 0 00.255.106.363.363 0 00.255-.106l1.455-1.458 1.456 1.458a.352.352 0 00.253.107.356.356 0 00.254-.104zM369.966 70.568a6.402 6.402 0 00-5.921 3.963 6.432 6.432 0 001.389 6.995 6.404 6.404 0 0010.94-4.539 6.403 6.403 0 00-3.953-5.935 6.383 6.383 0 00-2.455-.484zm0 11.616a5.179 5.179 0 01-3.17-1.076 5.203 5.203 0 01-1.621-6.136 5.187 5.187 0 015.512-3.13 5.186 5.186 0 012.985 1.519 5.2 5.2 0 01-1.158 8.146 5.18 5.18 0 01-2.548.674v.003z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M371.925 79.772l.808-.807a.363.363 0 000-.51l-1.458-1.459 1.458-1.458a.348.348 0 00.078-.116.343.343 0 000-.275.346.346 0 00-.078-.116l-.808-.81a.358.358 0 00-.507 0l-1.452 1.458-1.456-1.458a.358.358 0 00-.507 0l-.808.81a.36.36 0 00-.078.391.348.348 0 00.078.116l1.455 1.458-1.455 1.458a.364.364 0 000 .51l.808.808a.35.35 0 00.507 0l1.456-1.458 1.458 1.458a.358.358 0 00.501 0z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M344 94h90v80h-90z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#fff",
    fillOpacity: ".65",
    d: "M364.607 150.419H357v25.307h7.607v-25.307zM379.317 132h-7.607v43.455h7.607V132zM394.026 136h-7.607v61.603h7.607V136zM408.736 123h-7.607v55.726h7.607V123zM423.445 132.197h-7.607v38.342h7.607v-38.342z",
    opacity: ".2"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#fff",
    d: "M356.331 134l-.331-.495 15.486-21.052 13.65 14.005 11.039-17.456 4.84 5.868 13.168-11.268 14.625 14.021L451.763 99l.237.594-23.213 18.833-14.619-14.015-13.201 11.297-4.748-5.756-11.014 17.418-13.677-14.031L356.331 134z"
  })), Object(external_this_wp_element_["createElement"])("defs", null, Object(external_this_wp_element_["createElement"])("clipPath", {
    id: "clip0"
  }, Object(external_this_wp_element_["createElement"])("path", {
    fill: "#fff",
    d: "M0 0h517v160H0z"
  }))));
};
// CONCATENATED MODULE: ./client/homescreen/welcome-modal/illustrations/inbox.js


/**
 * External dependencies
 */

var inbox_InboxIllustration = function InboxIllustration() {
  return Object(external_this_wp_element_["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "517",
    height: "160",
    fill: "none"
  }, Object(external_this_wp_element_["createElement"])("defs", null), Object(external_this_wp_element_["createElement"])("g", {
    clipPath: "url(#clip0)"
  }, Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M0 0h517v160H0z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#fff",
    fillOpacity: ".65",
    d: "M33.576 185.926c-6.271-.911-14.742-.279-17.182 7.085-1.239 3.736-.178 7.645.98 11.08 4.89 14.682 11.49 28.444 19.643 40.954 3.897 5.965 8.253 11.884 9.592 19.504 1.34 7.619-.56 16.084-2.934 23.945-5.595 18.62-13.762 36.371-24.188 52.572 16.006 9.711 34.165 19.634 52.684 12.57 11.09-4.232 21.041-14.268 32.365-15.961 7.562-1.132 14.735 1.648 21.594 4.467a998.376 998.376 0 0195.343 45.227c13.023 7.042 26.207 14.481 40.901 16.153 14.694 1.672 31.486-3.518 41.947-17.66 1.611-2.179 3.241-4.669 5.483-5.546 2.02-.776 4.069-.045 5.952.688l113.896 44.033c6.241 2.411 12.718 4.853 19.534 3.832 6.606-.985 12.833-5.095 18.858-9.148 13.771-9.237 29.242-21.105 32.239-39.005 2.407-14.347-4.339-27.253-11.974-37.283-7.636-10.03-16.705-19.204-20.353-32.315-5.549-19.955 2.798-42.949 9.281-64.164a405.4 405.4 0 0013.244-58.574c2.588-17.377 4.004-35.179.91-51.659-3.095-16.481-11.265-31.624-24.089-38.27-16.746-8.681-38.828-2.057-54.255-13.347-13.04-9.513-17.58-29.035-25.856-44.316-14.698-27.146-41.453-40.923-67.958-50.405-28.1-10.066-58.213-16.679-88.607-10-6.962 1.527-14.047 3.833-20.152 8.649-9.36 7.388-15.196 19.616-22.986 29.33C156.104 57.468 100.341 49.156 68.22 87.48c-11.398 13.594-17.581 31.878-18.797 49.831-1.31 19.318 8.69 33.652 8.706 50.888-7.135 2.277-17.21-1.211-24.553-2.273z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#F6F7F7",
    d: "M113 33h267v185H113z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M248.466 73.79h-114.69V47.88h114.69V73.79zm-114.015-.673h113.341V48.554H134.451v24.563z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M155.702 56.63h-12.818v12.786h12.818V56.63z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M154.016 67.733h-13.493V54.274h13.493v13.46zm-12.819-.673h12.144V54.947h-12.144V67.06z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M225.267 56.966h-50v.673h50v-.673z",
    opacity: ".7"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M235.311 61.677h-60.044v.673h60.044v-.673z",
    opacity: ".5"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M225.267 66.387h-50v.673h50v-.673z",
    opacity: ".2"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M248.466 147.142h-114.69v-25.909h114.69v25.909zm-114.015-.673h113.341v-24.563H134.451v24.563z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M155.702 129.981h-12.818v12.786h12.818v-12.786z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M154.016 141.085h-13.493v-13.459h13.493v13.459zm-12.819-.673h12.144v-12.113h-12.144v12.113z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M235.311 130.318h-60.044v.673h60.044v-.673z",
    opacity: ".7"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M225.267 135.028h-50v.673h50v-.673z",
    opacity: ".5"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M215.267 139.739h-40v.673h40v-.673z",
    opacity: ".2"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M289.62 110.465H174.93V84.557h114.69v25.908zm-114.016-.672h113.341V85.23H175.604v24.563z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M267.694 106.092h12.818V93.305h-12.818v12.787z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M282.873 104.409H269.38V90.95h13.493v13.459zm-12.818-.673h12.144V91.623h-12.144v12.113z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M248.129 93.642h-60.044v.673h60.044v-.673z",
    opacity: ".7"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M238.085 98.353h-50v.672h50v-.672z",
    opacity: ".5"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M243.085 103.063h-55v.673h55v-.673z",
    opacity: ".2"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M266.035 66.154a5.363 5.363 0 005.369-5.356 5.363 5.363 0 00-5.369-5.356c-2.966 0-5.37 2.398-5.37 5.356 0 2.958 2.404 5.356 5.37 5.356zM273.793 140.515c2.966 0 5.37-2.398 5.37-5.356 0-2.958-2.404-5.356-5.37-5.356a5.363 5.363 0 00-5.369 5.356 5.363 5.363 0 005.369 5.356zM153.706 102.83a5.363 5.363 0 005.37-5.356c0-2.959-2.404-5.357-5.37-5.357s-5.37 2.398-5.37 5.357a5.363 5.363 0 005.37 5.356z",
    opacity: ".5"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M401.276 172h-70.552a8.79 8.79 0 01-6.169-2.517 8.532 8.532 0 01-2.555-6.078V131.56a3.368 3.368 0 011.078-2.471l37.386-34.915A8.113 8.113 0 01366 92c2.06 0 4.041.778 5.536 2.174l35.645 33.289a8.882 8.882 0 012.084 2.944 8.78 8.78 0 01.735 3.515v29.483c0 2.28-.919 4.466-2.555 6.078a8.79 8.79 0 01-6.169 2.517z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#F0F0F0",
    d: "M393.267 106h-54.534c-2.614 0-4.733 2.053-4.733 4.585v52.83c0 2.532 2.119 4.585 4.733 4.585h54.534c2.614 0 4.733-2.053 4.733-4.585v-52.83c0-2.532-2.119-4.585-4.733-4.585z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M366 150.493l-41.579-20.323a1.667 1.667 0 00-1.631.091 1.695 1.695 0 00-.579.619 1.725 1.725 0 00-.211.826v34.967a5.345 5.345 0 001.543 3.767 5.261 5.261 0 003.725 1.56h77.464a5.261 5.261 0 003.725-1.56 5.345 5.345 0 001.543-3.767v-34.368c0-.352-.088-.699-.257-1.008a2.069 2.069 0 00-1.688-1.071 2.035 2.035 0 00-1.009.205L366 150.493zM390 118h-48v2h48v-2zM390 124h-48v2h48v-2z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M384 130h-42v2h42v-2z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#fff",
    d: "M335 112a7 7 0 100-14 7 7 0 000 14z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M336 98a8.003 8.003 0 00-7.391 4.939 7.992 7.992 0 00-.455 4.622 7.993 7.993 0 006.285 6.285A8 8 0 00344 106a8.022 8.022 0 00-8-8zm-1.642 12.265l-4.1-4.1 1.15-1.15 2.954 2.954 6.234-6.234 1.15 1.15-7.388 7.38z"
  })), Object(external_this_wp_element_["createElement"])("defs", null, Object(external_this_wp_element_["createElement"])("clipPath", {
    id: "clip0"
  }, Object(external_this_wp_element_["createElement"])("path", {
    fill: "#fff",
    d: "M0 0h517v160H0z"
  }))));
};
// CONCATENATED MODULE: ./client/homescreen/welcome-modal/illustrations/pie-chart.js


/**
 * External dependencies
 */

var pie_chart_PieChartIllustration = function PieChartIllustration() {
  return Object(external_this_wp_element_["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "517",
    height: "160",
    fill: "none"
  }, Object(external_this_wp_element_["createElement"])("defs", null), Object(external_this_wp_element_["createElement"])("g", {
    clipPath: "url(#clip0)"
  }, Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M0 0h517v160H0z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#fff",
    fillOpacity: ".65",
    d: "M30.501 63.74c7.21-10.372 19.533-17.051 31.735-22.399l2.057-.888c12.774-5.469 25.944-10.008 39.27-14.127 7.129-2.21 14.285-4.313 21.448-6.389l5.615-1.62c7.29-2.106 14.596-4.21 21.916-6.315a6165.97 6165.97 0 0121.511-6.139 3346.684 3346.684 0 0127.597-7.677 2189.847 2189.847 0 0121.603-5.782c9.237-2.42 18.491-4.764 27.761-7.035 7.246-1.77 14.502-3.483 21.767-5.14a1152.381 1152.381 0 0128.025-6 940.985 940.985 0 0119.106-3.654l2.908-.52c27.416-4.852 55.724-8.222 82.193-2.775l.715.151c.355.074.71.148 1.067.23a87.181 87.181 0 0114.309 4.404c8.282 3.398 15.644 8.247 20.596 14.967 7.763 10.54 8.624 24.398 6.126 37.281-2.498 12.884-8.007 25.346-12.299 37.974-1.257 3.7-2.378 7.49-3.34 11.33-5.997 24.068-5.398 49.993 11.766 67.323a93.715 93.715 0 007.029 6.227c3.928 3.218 7.905 6.424 11.03 10.3 7.28 9.017 9.211 20.756 10.296 32.099 1.425 15.086 1.236 31.775-9.516 44.175-11.153 12.875-30.519 17.317-48.211 18.232-27.498 1.457-54.442-3.316-81.339-6.956-26.898-3.641-54.739-6.141-81.787-.263a121.18 121.18 0 00-17.082 5.062 108.9 108.9 0 00-21.21 10.677c-9.622 6.318-17.826 14.22-23.006 23.613-11.123 20.092-39.488 28.645-62.664 24.15-22.115-4.288-39.921-20.774-44.019-40.738-4.538-22.229 6.615-44.308 16.332-66.515a358.83 358.83 0 003.437-8.081 238.988 238.988 0 001.795-4.513 165.185 165.185 0 002.828-7.947c4.39-13.591 6.016-28.984-2.295-40.321-4.658-6.347-11.477-10.355-19.238-13.393-17.388-6.801-39.481-8.722-52.38-21.167C22.84 94.854 21.359 76.92 30.502 63.74z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#F6F7F7",
    d: "M124 33h267v185H124z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M169 152.005V229a734.947 734.947 0 01-15.628-.991l-2.372-.181v-75.823c0-.395.072-.785.212-1.15.14-.365.345-.696.604-.975.258-.279.565-.5.903-.651a2.61 2.61 0 011.066-.229h12.43c.366 0 .728.078 1.066.229.338.151.645.372.903.651.259.279.464.61.604.975.14.365.212.755.212 1.15z",
    opacity: ".7"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M186 229.733V127.377c0-.63.31-1.235.861-1.681.551-.446 1.299-.696 2.079-.696h13.12c.386 0 .768.061 1.125.181.357.119.681.294.954.515.273.221.489.483.637.771.148.289.224.598.224.91V230l-19-.267z",
    opacity: ".5"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M225 230.002v-97.406a2.843 2.843 0 012.843-2.845h12.689a2.844 2.844 0 012.844 2.845v97.196l-18.376.21z",
    opacity: ".7"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M282 88.368v140.224c-6 .145-12 .281-18 .408V88.368c0-.628.293-1.23.816-1.674.522-.445 1.231-.694 1.969-.694h12.43c.738 0 1.447.25 1.969.694.523.444.816 1.046.816 1.674z",
    opacity: ".5"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M319 112.954v115.709c-6 .12-12 .232-18 .337V112.954c0-.518.293-1.015.816-1.382.522-.366 1.231-.572 1.969-.572h12.43c.738 0 1.447.206 1.969.572.523.367.816.864.816 1.382z",
    opacity: ".7"
  }), Object(external_this_wp_element_["createElement"])("path", {
    stroke: "#CCC",
    strokeLinecap: "round",
    strokeMiterlimit: "10",
    strokeWidth: "2",
    d: "M160.125 133.501l41.91-46.767 41.91 23.545 41.91-72.248 41.909 34.511"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M160 139.005c2.761 0 5-2.24 5-5.003a5.002 5.002 0 00-5-5.002c-2.761 0-5 2.24-5 5.002a5.002 5.002 0 005 5.003zM201.5 93.007c4.142 0 7.5-3.36 7.5-7.504A7.502 7.502 0 00201.5 78c-4.142 0-7.5 3.36-7.5 7.504a7.502 7.502 0 007.5 7.503zM243.784 119.31c4.985 0 9.026-4.043 9.026-9.031s-4.041-9.031-9.026-9.031c-4.986 0-9.027 4.043-9.027 9.031s4.041 9.031 9.027 9.031zM286.027 46.062c4.985 0 9.027-4.043 9.027-9.031S291.012 28 286.027 28c-4.986 0-9.027 4.043-9.027 9.031s4.041 9.031 9.027 9.031zM327.5 80.007c4.142 0 7.5-3.36 7.5-7.504A7.502 7.502 0 00327.5 65c-4.142 0-7.5 3.36-7.5 7.504a7.502 7.502 0 007.5 7.503zM408 137l-36 2-18-30.926c5.588-3.326 12.033-5.083 18.606-5.074C392.154 103 408 118.222 408 137zM351.107 110l-.143.088c-7.887 4.836-13.573 12.518-15.859 21.429a35.211 35.211 0 003.603 26.338l.084.145L370 140.317 351.107 110zm-12.19 47.543a34.886 34.886 0 01-3.485-25.944c2.25-8.77 7.826-16.342 15.566-21.138l18.531 29.738-30.612 17.344zM408.664 138.651l-35.891 2.797 10.3 32.297.162-.046c7.808-2.265 14.585-6.957 19.211-13.301 4.626-6.344 6.824-13.96 6.23-21.588l-.012-.159zm-35.447 3.081l35.134-2.738c1.116 15.348-9.387 29.753-25.051 34.355l-10.083-31.617zM370.719 142.639l-30.714 17.335.088.131c3.977 5.942 9.926 10.554 16.982 13.165 7.056 2.61 14.849 3.083 22.245 1.349l.164-.038-8.765-31.942zm-30.249 17.435l30.034-16.951 8.57 31.234c-7.278 1.673-14.935 1.192-21.871-1.374-6.936-2.566-12.794-7.086-16.733-12.909z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#fff",
    d: "M423 97h-17v-1h17v1zM423 101h-17v-3h17v3zM416 104h-17.979l-.05.068L384 122.821l.28.179 13.92-18.685H416V104z"
  })), Object(external_this_wp_element_["createElement"])("defs", null, Object(external_this_wp_element_["createElement"])("clipPath", {
    id: "clip0"
  }, Object(external_this_wp_element_["createElement"])("path", {
    fill: "#fff",
    d: "M0 0h517v160H0z"
  }))));
};
// CONCATENATED MODULE: ./client/homescreen/welcome-modal/page-content/index.js


/**
 * External dependencies
 */

var page_content_PageContent = function PageContent(_ref) {
  var title = _ref.title,
      body = _ref.body;
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce__welcome-modal__page-content"
  }, Object(external_this_wp_element_["createElement"])("h2", {
    className: "woocommerce__welcome-modal__page-content__header"
  }, title), Object(external_this_wp_element_["createElement"])("p", {
    className: "woocommerce__welcome-modal__page-content__body"
  }, body));
};
// EXTERNAL MODULE: ./client/homescreen/welcome-modal/style.scss
var welcome_modal_style = __webpack_require__(895);

// CONCATENATED MODULE: ./client/homescreen/welcome-modal/index.js



/**
 * External dependencies
 */



/**
 * Internal dependencies
 */







var welcome_modal_pages = [{
  image: Object(external_this_wp_element_["createElement"])(line_chart_LineChartIllustration, null),
  content: Object(external_this_wp_element_["createElement"])(page_content_PageContent, {
    title: Object(external_this_wp_i18n_["__"])('Welcome to your WooCommerce store’s online HQ!', 'woocommerce-admin'),
    body: Object(external_this_wp_i18n_["__"])("Here's where you’ll find setup suggestions, tips and tools, and key data on your store’s performance and earnings — all the basics for store management and growth.", 'woocommerce-admin')
  })
}, {
  image: Object(external_this_wp_element_["createElement"])(inbox_InboxIllustration, null),
  content: Object(external_this_wp_element_["createElement"])(page_content_PageContent, {
    title: Object(external_this_wp_i18n_["__"])('A personalized inbox full of relevant advice.', 'woocommerce-admin'),
    body: Object(external_this_wp_i18n_["__"])('Check your inbox for helpful growth tips tailored to your store and notifications about key traffic and sales milestones. We look forward to celebrating them with you!', 'woocommerce-admin')
  })
}, {
  image: Object(external_this_wp_element_["createElement"])(pie_chart_PieChartIllustration, null),
  content: Object(external_this_wp_element_["createElement"])(page_content_PageContent, {
    title: Object(external_this_wp_i18n_["__"])('Good data leads to smart business decisions.', 'woocommerce-admin'),
    body: 'Monitor your stats to improve performance, increase sales, and track your progress toward revenue goals. The more you know, the better you can serve your customers and grow your store.'
  })
}];
var welcome_modal_WelcomeModal = function WelcomeModal(_ref) {
  var onClose = _ref.onClose;

  var _useState = Object(external_this_wp_element_["useState"])(true),
      _useState2 = slicedToArray_default()(_useState, 2),
      guideIsOpen = _useState2[0],
      setGuideIsOpen = _useState2[1];

  Object(external_this_wp_element_["useEffect"])(function () {
    Object(tracks["b" /* recordEvent */])('task_list_welcome_modal_open');
  }, []);
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, guideIsOpen && Object(external_this_wp_element_["createElement"])(Guide, {
    onFinish: function onFinish() {
      setGuideIsOpen(false);
      onClose();
      Object(tracks["b" /* recordEvent */])('task_list_welcome_modal_close');
    },
    className: 'woocommerce__welcome-modal',
    finishButtonText: Object(external_this_wp_i18n_["__"])("Let's go", 'woocommerce-admin'),
    pages: welcome_modal_pages
  }));
};
// CONCATENATED MODULE: ./client/homescreen/layout.js



/**
 * External dependencies
 */





/**
 * WooCommerce dependencies
 */


/**
 * Internal dependencies
 */










var TaskList = Object(external_this_wp_element_["lazy"])(function () {
  return Promise.all(/* import() | task-list */[__webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(47)]).then(__webpack_require__.bind(null, 927));
});
var layout_Layout = function Layout(_ref) {
  var isUndoRequesting = _ref.isUndoRequesting,
      query = _ref.query,
      requestingTaskList = _ref.requestingTaskList,
      taskListComplete = _ref.taskListComplete,
      taskListHidden = _ref.taskListHidden,
      shouldShowWelcomeModal = _ref.shouldShowWelcomeModal,
      updateOptions = _ref.updateOptions;

  var _useState = Object(external_this_wp_element_["useState"])(true),
      _useState2 = slicedToArray_default()(_useState, 2),
      showInbox = _useState2[0],
      setShowInbox = _useState2[1];

  var _useState3 = Object(external_this_wp_element_["useState"])(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      isContentSticky = _useState4[0],
      setIsContentSticky = _useState4[1];

  var content = Object(external_this_wp_element_["useRef"])(null);

  var maybeStickContent = function maybeStickContent() {
    if (!content.current) {
      return;
    }

    var _content$current$getB = content.current.getBoundingClientRect(),
        bottom = _content$current$getB.bottom;

    var shouldBeSticky = showInbox && bottom < window.innerHeight;
    setIsContentSticky(shouldBeSticky);
  };

  Object(external_this_wp_element_["useEffect"])(function () {
    maybeStickContent();
    window.addEventListener('resize', maybeStickContent);
    return function () {
      window.removeEventListener('resize', maybeStickContent);
    };
  }, []);
  var isTaskListEnabled = taskListHidden === false && !taskListComplete;
  var isDashboardShown = !isTaskListEnabled || !query.task;

  var isInboxPanelEmpty = function isInboxPanelEmpty(isEmpty) {
    setShowInbox(!isEmpty);
  };

  if (isUndoRequesting && !showInbox) {
    setShowInbox(true);
  }

  var renderColumns = function renderColumns() {
    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, showInbox && Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-homescreen-column is-inbox"
    }, Object(external_this_wp_element_["createElement"])(inbox["default"], {
      isPanelEmpty: isInboxPanelEmpty
    })), Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-homescreen-column",
      ref: content,
      style: {
        position: isContentSticky ? 'sticky' : 'static'
      }
    }, isTaskListEnabled && renderTaskList(), Object(external_this_wp_element_["createElement"])(stats_overview, null), !isTaskListEnabled && Object(external_this_wp_element_["createElement"])(quick_links, null)));
  };

  var renderTaskList = function renderTaskList() {
    if (requestingTaskList) {
      return Object(external_this_wp_element_["createElement"])(placeholder, null);
    }

    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Suspense"], {
      fallback: Object(external_this_wp_element_["createElement"])(placeholder, null)
    }, Object(external_this_wp_element_["createElement"])(TaskList, {
      query: query
    }));
  };

  return Object(external_this_wp_element_["createElement"])("div", {
    className: classnames_default()('woocommerce-homescreen', {
      hasInbox: showInbox
    })
  }, isDashboardShown ? renderColumns() : isTaskListEnabled && renderTaskList(), shouldShowWelcomeModal && Object(external_this_wp_element_["createElement"])(welcome_modal_WelcomeModal, {
    onClose: function onClose() {
      updateOptions({
        woocommerce_task_list_welcome_modal_dismissed: true
      });
    }
  }));
};
layout_Layout.propTypes = {
  /**
   * If the task list option is being fetched.
   */
  requestingTaskList: prop_types_default.a.bool.isRequired,

  /**
   * If the task list has been completed.
   */
  taskListComplete: prop_types_default.a.bool,

  /**
   * If the task list is hidden.
   */
  taskListHidden: prop_types_default.a.bool,

  /**
   * Page query, used to determine the current task if any.
   */
  query: prop_types_default.a.object.isRequired,

  /**
   * If the welcome modal should display
   */
  shouldShowWelcomeModal: prop_types_default.a.bool,

  /**
   * Dispatch an action to update an option
   */
  updateOptions: prop_types_default.a.func.isRequired
};
/* harmony default export */ var layout = (Object(compose["a" /* default */])(Object(with_select["a" /* default */])(function (select) {
  var _select = select('wc-api'),
      getUndoDismissRequesting = _select.getUndoDismissRequesting;

  var _getUndoDismissReques = getUndoDismissRequesting(),
      isUndoRequesting = _getUndoDismissReques.isUndoRequesting;

  var _select2 = select(external_this_wc_data_["OPTIONS_STORE_NAME"]),
      getOption = _select2.getOption,
      isResolving = _select2.isResolving;

  var welcomeModalDismissed = getOption('woocommerce_task_list_welcome_modal_dismissed') === '1';
  var welcomeModalDismissedIsResolving = isResolving('getOption', ['woocommerce_task_list_welcome_modal_dismissed']);
  var shouldShowWelcomeModal = !welcomeModalDismissedIsResolving && !welcomeModalDismissed;

  if (Object(utils["f" /* isOnboardingEnabled */])()) {
    return {
      isUndoRequesting: isUndoRequesting,
      shouldShowWelcomeModal: shouldShowWelcomeModal,
      taskListComplete: getOption('woocommerce_task_list_complete') === 'yes',
      taskListHidden: getOption('woocommerce_task_list_hidden') === 'yes',
      requestingTaskList: isResolving('getOption', ['woocommerce_task_list_complete']) || isResolving('getOption', ['woocommerce_task_list_hidden'])
    };
  }

  return {
    shouldShowWelcomeModal: shouldShowWelcomeModal,
    requestingTaskList: false
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  return {
    updateOptions: dispatch(external_this_wc_data_["OPTIONS_STORE_NAME"]).updateOptions
  };
}))(layout_Layout));
// CONCATENATED MODULE: ./client/homescreen/index.js


/**
 * External dependencies
 */



/**
 * WooCommerce dependencies
 */




/**
 * Internal dependencies
 */




var homescreen_Homescreen = function Homescreen(_ref) {
  var profileItems = _ref.profileItems,
      query = _ref.query;

  var _ref2 = profileItems || {},
      profilerCompleted = _ref2.completed,
      profilerSkipped = _ref2.skipped;

  if (Object(utils["f" /* isOnboardingEnabled */])() && !profilerCompleted && !profilerSkipped) {
    Object(external_this_wc_navigation_["getHistory"])().push(Object(external_this_wc_navigation_["getNewPath"])({}, "/profiler", {}));
  }

  return Object(external_this_wp_element_["createElement"])(layout, {
    query: query
  });
};

/* harmony default export */ var homescreen = __webpack_exports__["default"] = (Object(compose["a" /* default */])(Object(settings["g" /* getSetting */])('onboarding', {}).profile ? Object(external_this_wc_data_["withOnboardingHydration"])(Object(settings["g" /* getSetting */])('onboarding', {}).profile) : external_lodash_["identity"], Object(external_this_wp_data_["withSelect"])(function (select) {
  if (!Object(utils["f" /* isOnboardingEnabled */])()) {
    return;
  }

  var _select = select(external_this_wc_data_["ONBOARDING_STORE_NAME"]),
      getProfileItems = _select.getProfileItems;

  var profileItems = getProfileItems();
  return {
    profileItems: profileItems
  };
}))(homescreen_Homescreen));

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ })

}]);