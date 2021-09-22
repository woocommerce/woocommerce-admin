(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[46],{

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

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(185);
/* harmony import */ var lib_date__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(115);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(28);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(46);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var wc_api_with_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(104);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(915);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lib_tracks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(63);
/* harmony import */ var lib_currency_context__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(218);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(762);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */



/**
 * WooCommerce dependencies
 */





/**
 * Internal dependencies
 */








var _getSetting = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_11__[/* getSetting */ "g"])('dataEndpoints', {
  performanceIndicators: []
}),
    indicators = _getSetting.performanceIndicators;

var StorePerformance = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(StorePerformance, _Component);

  var _super = _createSuper(StorePerformance);

  function StorePerformance() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, StorePerformance);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(StorePerformance, [{
    key: "renderMenu",
    value: function renderMenu() {
      var _this$props = this.props,
          hiddenBlocks = _this$props.hiddenBlocks,
          isFirst = _this$props.isFirst,
          isLast = _this$props.isLast,
          onMove = _this$props.onMove,
          onRemove = _this$props.onRemove,
          onTitleBlur = _this$props.onTitleBlur,
          onTitleChange = _this$props.onTitleChange,
          onToggleHiddenBlock = _this$props.onToggleHiddenBlock,
          titleInput = _this$props.titleInput,
          Controls = _this$props.controls;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_13__["EllipsisMenu"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Choose which analytics to display and the section name', 'woocommerce-admin'),
        renderContent: function renderContent(_ref) {
          var onToggle = _ref.onToggle;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_13__["MenuTitle"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Display Stats:', 'woocommerce-admin')), indicators.map(function (indicator, i) {
            var checked = !hiddenBlocks.includes(indicator.stat);
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_13__["MenuItem"], {
              checked: checked,
              isCheckbox: true,
              isClickable: true,
              key: i,
              onInvoke: function onInvoke() {
                onToggleHiddenBlock(indicator.stat)();
                Object(lib_tracks__WEBPACK_IMPORTED_MODULE_16__[/* recordEvent */ "b"])('dash_indicators_toggle', {
                  status: checked ? 'off' : 'on',
                  key: indicator.stat
                });
              }
            }, indicator.label);
          }), window.wcAdminFeatures['analytics-dashboard/customizable'] && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Controls, {
            onToggle: onToggle,
            onMove: onMove,
            onRemove: onRemove,
            isFirst: isFirst,
            isLast: isLast,
            onTitleBlur: onTitleBlur,
            onTitleChange: onTitleChange,
            titleInput: titleInput
          }));
        }
      });
    }
  }, {
    key: "renderList",
    value: function renderList() {
      var _this$props2 = this.props,
          query = _this$props2.query,
          primaryRequesting = _this$props2.primaryRequesting,
          secondaryRequesting = _this$props2.secondaryRequesting,
          primaryError = _this$props2.primaryError,
          secondaryError = _this$props2.secondaryError,
          primaryData = _this$props2.primaryData,
          secondaryData = _this$props2.secondaryData,
          userIndicators = _this$props2.userIndicators,
          defaultDateRange = _this$props2.defaultDateRange;

      if (primaryRequesting || secondaryRequesting) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_13__["SummaryListPlaceholder"], {
          numberOfItems: userIndicators.length
        });
      }

      if (primaryError || secondaryError) {
        return null;
      }

      var persistedQuery = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10__["getPersistedQuery"])(query);

      var _getDateParamsFromQue = Object(lib_date__WEBPACK_IMPORTED_MODULE_9__[/* getDateParamsFromQuery */ "h"])(query, defaultDateRange),
          compare = _getDateParamsFromQue.compare;

      var prevLabel = compare === 'previous_period' ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Previous Period:', 'woocommerce-admin') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Previous Year:', 'woocommerce-admin');
      var _this$context = this.context,
          formatAmount = _this$context.formatAmount,
          getCurrencyConfig = _this$context.getCurrencyConfig;
      var currency = getCurrencyConfig();
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_13__["SummaryList"], null, function () {
        return userIndicators.map(function (indicator, i) {
          var _getIndicatorValues = Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getIndicatorValues */ "b"])({
            indicator: indicator,
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

          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_13__["SummaryNumber"], {
            key: i,
            href: reportUrl,
            hrefType: reportUrlType,
            label: indicator.label,
            value: primaryValue,
            prevLabel: prevLabel,
            prevValue: secondaryValue,
            delta: delta,
            onLinkClickCallback: function onLinkClickCallback() {
              Object(lib_tracks__WEBPACK_IMPORTED_MODULE_16__[/* recordEvent */ "b"])('dash_indicators_click', {
                key: indicator.stat
              });
            }
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          userIndicators = _this$props3.userIndicators,
          title = _this$props3.title;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_13__["SectionHeader"], {
        title: title || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Store Performance', 'woocommerce-admin'),
        menu: this.renderMenu()
      }), userIndicators.length > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "woocommerce-dashboard__store-performance"
      }, this.renderList()));
    }
  }]);

  return StorePerformance;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

StorePerformance.contextType = lib_currency_context__WEBPACK_IMPORTED_MODULE_17__[/* CurrencyContext */ "a"];
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(wc_api_with_select__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])(function (select, props) {
  var hiddenBlocks = props.hiddenBlocks,
      query = props.query,
      filters = props.filters;
  var userIndicators = indicators.filter(function (indicator) {
    return !hiddenBlocks.includes(indicator.stat);
  });

  var _select$getSetting = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_12__["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings'),
      defaultDateRange = _select$getSetting.woocommerce_default_date_range;

  var data = {
    hiddenBlocks: hiddenBlocks,
    userIndicators: userIndicators,
    indicators: indicators,
    defaultDateRange: defaultDateRange
  };

  if (userIndicators.length === 0) {
    return data;
  }

  var indicatorData = Object(_utils__WEBPACK_IMPORTED_MODULE_18__[/* getIndicatorData */ "a"])(select, userIndicators, query, filters);
  return _objectSpread(_objectSpread({}, data), indicatorData);
}))(StorePerformance));

/***/ })

}]);