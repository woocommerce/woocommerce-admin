(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[34],{

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

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectControl; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(279);
/* harmony import */ var _base_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(742);





/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function SelectControl(_ref) {
  var help = _ref.help,
      label = _ref.label,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      onChange = _ref.onChange,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      className = _ref.className,
      hideLabelFromVision = _ref.hideLabelFromVision,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ref, ["help", "label", "multiple", "onChange", "options", "className", "hideLabelFromVision"]);

  var instanceId = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(SelectControl);
  var id = "inspector-select-control-".concat(instanceId);

  var onChangeValue = function onChangeValue(event) {
    if (multiple) {
      var selectedOptions = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(event.target.options).filter(function (_ref2) {
        var selected = _ref2.selected;
        return selected;
      });

      var newValues = selectedOptions.map(function (_ref3) {
        var value = _ref3.value;
        return value;
      });
      onChange(newValues);
      return;
    }

    onChange(event.target.value);
  }; // Disable reason: A select with an onchange throws a warning

  /* eslint-disable jsx-a11y/no-onchange */


  return !Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(options) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_base_control__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    label: label,
    hideLabelFromVision: hideLabelFromVision,
    id: id,
    help: help,
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("select", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    id: id,
    className: "components-select-control__input",
    onChange: onChangeValue,
    "aria-describedby": !!help ? "".concat(id, "__help") : undefined,
    multiple: multiple
  }, props), options.map(function (option, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("option", {
      key: "".concat(option.label, "-").concat(option.value, "-").concat(index),
      value: option.value,
      disabled: option.disabled
    }, option.label);
  })));
  /* eslint-enable jsx-a11y/no-onchange */
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 913:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(53);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(49);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/compose.js
var compose = __webpack_require__(185);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/select-control/index.js
var select_control = __webpack_require__(760);

// EXTERNAL MODULE: external {"this":["wc","components"]}
var external_this_wc_components_ = __webpack_require__(55);

// EXTERNAL MODULE: external {"this":["wc","data"]}
var external_this_wc_data_ = __webpack_require__(46);

// EXTERNAL MODULE: ./client/settings/index.js
var settings = __webpack_require__(28);

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

// EXTERNAL MODULE: external {"this":["wc","navigation"]}
var external_this_wc_navigation_ = __webpack_require__(29);

// EXTERNAL MODULE: ./client/wc-api/items/utils.js
var utils = __webpack_require__(296);

// EXTERNAL MODULE: ./client/analytics/components/report-error/index.js
var report_error = __webpack_require__(277);

// EXTERNAL MODULE: ./client/lib/sanitize-html/index.js
var sanitize_html = __webpack_require__(746);

// EXTERNAL MODULE: ./client/wc-api/with-select.js
var with_select = __webpack_require__(104);

// EXTERNAL MODULE: ./client/wc-api/reports/utils.js
var reports_utils = __webpack_require__(739);

// EXTERNAL MODULE: ./client/analytics/components/leaderboard/style.scss
var style = __webpack_require__(913);

// CONCATENATED MODULE: ./client/analytics/components/leaderboard/index.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

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







var leaderboard_Leaderboard = /*#__PURE__*/function (_Component) {
  inherits_default()(Leaderboard, _Component);

  var _super = _createSuper(Leaderboard);

  function Leaderboard() {
    classCallCheck_default()(this, Leaderboard);

    return _super.apply(this, arguments);
  }

  createClass_default()(Leaderboard, [{
    key: "getFormattedHeaders",
    value: function getFormattedHeaders() {
      return this.props.headers.map(function (header, i) {
        return {
          isLeftAligned: i === 0,
          hiddenByDefault: false,
          isSortable: false,
          key: header.label,
          label: header.label
        };
      });
    }
  }, {
    key: "getFormattedRows",
    value: function getFormattedRows() {
      return this.props.rows.map(function (row) {
        return row.map(function (column) {
          return {
            display: Object(external_this_wp_element_["createElement"])("div", {
              dangerouslySetInnerHTML: Object(sanitize_html["a" /* default */])(column.display)
            }),
            value: column.value
          };
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isRequesting = _this$props.isRequesting,
          isError = _this$props.isError,
          totalRows = _this$props.totalRows,
          title = _this$props.title;
      var classes = 'woocommerce-leaderboard';

      if (isError) {
        return Object(external_this_wp_element_["createElement"])(report_error["a" /* default */], {
          className: classes,
          isError: true
        });
      }

      var rows = this.getFormattedRows();

      if (!isRequesting && rows.length === 0) {
        return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Card"], {
          title: title,
          className: classes
        }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["EmptyTable"], null, Object(external_this_wp_i18n_["__"])('No data recorded for the selected time period.', 'woocommerce-admin')));
      }

      return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["TableCard"], {
        className: classes,
        headers: this.getFormattedHeaders(),
        isLoading: isRequesting,
        rows: rows,
        rowsPerPage: totalRows,
        showMenu: false,
        title: title,
        totalRows: totalRows
      });
    }
  }]);

  return Leaderboard;
}(external_this_wp_element_["Component"]);
leaderboard_Leaderboard.propTypes = {
  /**
   * An array of column headers.
   */
  headers: prop_types_default.a.arrayOf(prop_types_default.a.shape({
    label: prop_types_default.a.string
  })),

  /**
   * String of leaderboard ID to display.
   */
  id: prop_types_default.a.string.isRequired,

  /**
   * Query args added to the report table endpoint request.
   */
  query: prop_types_default.a.object,

  /**
   * Which column should be the row header, defaults to the first item (`0`) (see `Table` props).
   */
  rows: prop_types_default.a.arrayOf(prop_types_default.a.arrayOf(prop_types_default.a.shape({
    display: prop_types_default.a.node,
    value: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number, prop_types_default.a.bool])
  }))).isRequired,

  /**
   * String to display as the title of the table.
   */
  title: prop_types_default.a.string.isRequired,

  /**
   * Number of table rows.
   */
  totalRows: prop_types_default.a.number.isRequired
};
leaderboard_Leaderboard.defaultProps = {
  rows: [],
  isError: false,
  isRequesting: false
};
/* harmony default export */ var components_leaderboard = (Object(compose["a" /* default */])(Object(with_select["a" /* default */])(function (select, props) {
  var id = props.id,
      query = props.query,
      totalRows = props.totalRows,
      filters = props.filters;

  var _select$getSetting = select(external_this_wc_data_["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings'),
      defaultDateRange = _select$getSetting.woocommerce_default_date_range;

  var filterQuery = Object(reports_utils["a" /* getFilterQuery */])({
    filters: filters,
    query: query
  });
  var leaderboardQuery = {
    id: id,
    per_page: totalRows,
    persisted_query: Object(external_this_wc_navigation_["getPersistedQuery"])(query),
    query: query,
    select: select,
    defaultDateRange: defaultDateRange,
    filterQuery: filterQuery
  };
  var leaderboardData = Object(utils["a" /* getLeaderboard */])(leaderboardQuery);
  return leaderboardData;
}))(leaderboard_Leaderboard));
// EXTERNAL MODULE: ./client/lib/tracks.js
var tracks = __webpack_require__(63);

// EXTERNAL MODULE: ./client/dashboard/leaderboards/style.scss
var leaderboards_style = __webpack_require__(914);

// CONCATENATED MODULE: ./client/dashboard/leaderboards/index.js




/**
 * External dependencies
 */





/**
 * WooCommerce dependencies
 */




/**
 * Internal dependencies
 */






var leaderboards_renderLeaderboardToggles = function renderLeaderboardToggles(_ref) {
  var allLeaderboards = _ref.allLeaderboards,
      hiddenBlocks = _ref.hiddenBlocks,
      onToggleHiddenBlock = _ref.onToggleHiddenBlock;
  return allLeaderboards.map(function (leaderboard) {
    var checked = !hiddenBlocks.includes(leaderboard.id);
    return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["MenuItem"], {
      checked: checked,
      isCheckbox: true,
      isClickable: true,
      key: leaderboard.id,
      onInvoke: function onInvoke() {
        onToggleHiddenBlock(leaderboard.id)();
        Object(tracks["b" /* recordEvent */])('dash_leaderboards_toggle', {
          status: checked ? 'off' : 'on',
          key: leaderboard.id
        });
      }
    }, leaderboard.label);
  });
};

var leaderboards_renderLeaderboards = function renderLeaderboards(_ref2) {
  var allLeaderboards = _ref2.allLeaderboards,
      hiddenBlocks = _ref2.hiddenBlocks,
      query = _ref2.query,
      rowsPerTable = _ref2.rowsPerTable,
      filters = _ref2.filters;
  return allLeaderboards.map(function (leaderboard) {
    if (hiddenBlocks.includes(leaderboard.id)) {
      return undefined;
    }

    return Object(external_this_wp_element_["createElement"])(components_leaderboard, {
      headers: leaderboard.headers,
      id: leaderboard.id,
      key: leaderboard.id,
      query: query,
      title: leaderboard.label,
      totalRows: rowsPerTable,
      filters: filters
    });
  });
};

var leaderboards_Leaderboards = function Leaderboards(props) {
  var allLeaderboards = props.allLeaderboards,
      Controls = props.controls,
      isFirst = props.isFirst,
      isLast = props.isLast,
      hiddenBlocks = props.hiddenBlocks,
      onMove = props.onMove,
      onRemove = props.onRemove,
      onTitleBlur = props.onTitleBlur,
      onTitleChange = props.onTitleChange,
      onToggleHiddenBlock = props.onToggleHiddenBlock,
      query = props.query,
      title = props.title,
      titleInput = props.titleInput,
      filters = props.filters;

  var _useUserPreferences = Object(external_this_wc_data_["useUserPreferences"])(),
      updateUserPreferences = _useUserPreferences.updateUserPreferences,
      userPrefs = objectWithoutProperties_default()(_useUserPreferences, ["updateUserPreferences"]);

  var _useState = Object(external_this_wp_element_["useState"])(parseInt(userPrefs.dashboard_leaderboard_rows || 5, 10)),
      _useState2 = slicedToArray_default()(_useState, 2),
      rowsPerTable = _useState2[0],
      setRowsPerTableState = _useState2[1];

  var setRowsPerTable = function setRowsPerTable(rows) {
    setRowsPerTableState(parseInt(rows, 10));
    var userDataFields = {
      dashboard_leaderboard_rows: parseInt(rows, 10)
    };
    updateUserPreferences(userDataFields);
  };

  var renderMenu = function renderMenu() {
    return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["EllipsisMenu"], {
      label: Object(external_this_wp_i18n_["__"])('Choose which leaderboards to display and other settings', 'woocommerce-admin'),
      renderContent: function renderContent(_ref3) {
        var onToggle = _ref3.onToggle;
        return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["MenuTitle"], null, Object(external_this_wp_i18n_["__"])('Leaderboards', 'woocommerce-admin')), leaderboards_renderLeaderboardToggles({
          allLeaderboards: allLeaderboards,
          hiddenBlocks: hiddenBlocks,
          onToggleHiddenBlock: onToggleHiddenBlock
        }), Object(external_this_wp_element_["createElement"])(select_control["a" /* default */], {
          className: "woocommerce-dashboard__dashboard-leaderboards__select",
          label: Object(external_this_wp_i18n_["__"])('Rows Per Table', 'woocommerce-admin'),
          value: rowsPerTable,
          options: Array.from({
            length: 20
          }, function (v, key) {
            return {
              v: key + 1,
              label: key + 1
            };
          }),
          onChange: setRowsPerTable
        }), window.wcAdminFeatures['analytics-dashboard/customizable'] && Object(external_this_wp_element_["createElement"])(Controls, {
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
  };

  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-dashboard__dashboard-leaderboards"
  }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["SectionHeader"], {
    title: title || Object(external_this_wp_i18n_["__"])('Leaderboards', 'woocommerce-admin'),
    menu: renderMenu()
  }), Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-dashboard__columns"
  }, leaderboards_renderLeaderboards({
    allLeaderboards: allLeaderboards,
    hiddenBlocks: hiddenBlocks,
    query: query,
    rowsPerTable: rowsPerTable,
    filters: filters
  }))));
};

leaderboards_Leaderboards.propTypes = {
  query: prop_types_default.a.object.isRequired
};
/* harmony default export */ var leaderboards = __webpack_exports__["default"] = (Object(compose["a" /* default */])(Object(with_select["a" /* default */])(function (select) {
  var _select = select('wc-api'),
      getItems = _select.getItems,
      getItemsError = _select.getItemsError,
      isGetItemsRequesting = _select.isGetItemsRequesting;

  var _getSetting = Object(settings["g" /* getSetting */])('dataEndpoints', {
    leaderboards: []
  }),
      allLeaderboards = _getSetting.leaderboards;

  return {
    allLeaderboards: allLeaderboards,
    getItems: getItems,
    getItemsError: getItemsError,
    isGetItemsRequesting: isGetItemsRequesting
  };
}))(leaderboards_Leaderboards));

/***/ })

}]);