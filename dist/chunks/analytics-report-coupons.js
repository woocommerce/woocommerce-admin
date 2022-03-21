(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[8],{

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: ./client/analytics/report/coupons/config.js
var config = __webpack_require__(561);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(5);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(22);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(13);

// EXTERNAL MODULE: external ["wc","number"]
var external_wc_number_ = __webpack_require__(122);

// EXTERNAL MODULE: external ["wc","date"]
var external_wc_date_ = __webpack_require__(21);

// EXTERNAL MODULE: ./client/analytics/components/report-table/index.js + 2 modules
var report_table = __webpack_require__(533);

// EXTERNAL MODULE: ./client/lib/currency-context.js
var currency_context = __webpack_require__(527);

// EXTERNAL MODULE: ./client/utils/admin-settings.js
var admin_settings = __webpack_require__(23);

// CONCATENATED MODULE: ./client/analytics/report/coupons/table.js


/**
 * External dependencies
 */







/**
 * Internal dependencies
 */





class table_CouponsReportTable extends external_wp_element_["Component"] {
  constructor() {
    super();
    this.getHeadersContent = this.getHeadersContent.bind(this);
    this.getRowsContent = this.getRowsContent.bind(this);
    this.getSummary = this.getSummary.bind(this);
  }

  getHeadersContent() {
    return [{
      label: Object(external_wp_i18n_["__"])('Coupon code', 'woocommerce-admin'),
      key: 'code',
      required: true,
      isLeftAligned: true,
      isSortable: true
    }, {
      label: Object(external_wp_i18n_["__"])('Orders', 'woocommerce-admin'),
      key: 'orders_count',
      required: true,
      defaultSort: true,
      isSortable: true,
      isNumeric: true
    }, {
      label: Object(external_wp_i18n_["__"])('Amount discounted', 'woocommerce-admin'),
      key: 'amount',
      isSortable: true,
      isNumeric: true
    }, {
      label: Object(external_wp_i18n_["__"])('Created', 'woocommerce-admin'),
      key: 'created'
    }, {
      label: Object(external_wp_i18n_["__"])('Expires', 'woocommerce-admin'),
      key: 'expires'
    }, {
      label: Object(external_wp_i18n_["__"])('Type', 'woocommerce-admin'),
      key: 'type'
    }];
  }

  getRowsContent(coupons) {
    const {
      query
    } = this.props;
    const persistedQuery = Object(external_wc_navigation_["getPersistedQuery"])(query);
    const dateFormat = Object(admin_settings["d" /* getAdminSetting */])('dateFormat', external_wc_date_["defaultTableDateFormat"]);
    const {
      formatAmount,
      formatDecimal: getCurrencyFormatDecimal,
      getCurrencyConfig
    } = this.context;
    return Object(external_lodash_["map"])(coupons, coupon => {
      const {
        amount,
        coupon_id: couponId,
        orders_count: ordersCount
      } = coupon;
      const extendedInfo = coupon.extended_info || {};
      const {
        code,
        date_created: dateCreated,
        date_expires: dateExpires,
        discount_type: discountType
      } = extendedInfo;
      const couponUrl = couponId > 0 ? Object(external_wc_navigation_["getNewPath"])(persistedQuery, '/analytics/coupons', {
        filter: 'single_coupon',
        coupons: couponId
      }) : null;
      const couponLink = couponUrl === null ? code : Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
        href: couponUrl,
        type: "wc-admin"
      }, code);
      const ordersUrl = couponId > 0 ? Object(external_wc_navigation_["getNewPath"])(persistedQuery, '/analytics/orders', {
        filter: 'advanced',
        coupon_includes: couponId
      }) : null;
      const ordersLink = ordersUrl === null ? ordersCount : Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
        href: ordersUrl,
        type: "wc-admin"
      }, Object(external_wc_number_["formatValue"])(getCurrencyConfig(), 'number', ordersCount));
      return [{
        display: couponLink,
        value: code
      }, {
        display: ordersLink,
        value: ordersCount
      }, {
        display: formatAmount(amount),
        value: getCurrencyFormatDecimal(amount)
      }, {
        display: dateCreated ? Object(external_wp_element_["createElement"])(external_wc_components_["Date"], {
          date: dateCreated,
          visibleFormat: dateFormat
        }) : Object(external_wp_i18n_["__"])('N/A', 'woocommerce-admin'),
        value: dateCreated
      }, {
        display: dateExpires ? Object(external_wp_element_["createElement"])(external_wc_components_["Date"], {
          date: dateExpires,
          visibleFormat: dateFormat
        }) : Object(external_wp_i18n_["__"])('N/A', 'woocommerce-admin'),
        value: dateExpires
      }, {
        display: this.getCouponType(discountType),
        value: discountType
      }];
    });
  }

  getSummary(totals) {
    const {
      coupons_count: couponsCount = 0,
      orders_count: ordersCount = 0,
      amount = 0
    } = totals;
    const {
      formatAmount,
      getCurrencyConfig
    } = this.context;
    const currency = getCurrencyConfig();
    return [{
      label: Object(external_wp_i18n_["_n"])('Coupon', 'Coupons', couponsCount, 'woocommerce-admin'),
      value: Object(external_wc_number_["formatValue"])(currency, 'number', couponsCount)
    }, {
      label: Object(external_wp_i18n_["_n"])('Order', 'Orders', ordersCount, 'woocommerce-admin'),
      value: Object(external_wc_number_["formatValue"])(currency, 'number', ordersCount)
    }, {
      label: Object(external_wp_i18n_["__"])('Amount discounted', 'woocommerce-admin'),
      value: formatAmount(amount)
    }];
  }

  getCouponType(discountType) {
    const couponTypes = {
      percent: Object(external_wp_i18n_["__"])('Percentage', 'woocommerce-admin'),
      fixed_cart: Object(external_wp_i18n_["__"])('Fixed cart', 'woocommerce-admin'),
      fixed_product: Object(external_wp_i18n_["__"])('Fixed product', 'woocommerce-admin')
    };
    return couponTypes[discountType] || Object(external_wp_i18n_["__"])('N/A', 'woocommerce-admin');
  }

  render() {
    const {
      advancedFilters,
      filters,
      isRequesting,
      query
    } = this.props;
    return Object(external_wp_element_["createElement"])(report_table["a" /* default */], {
      compareBy: "coupons",
      endpoint: "coupons",
      getHeadersContent: this.getHeadersContent,
      getRowsContent: this.getRowsContent,
      getSummary: this.getSummary,
      summaryFields: ['coupons_count', 'orders_count', 'amount'],
      isRequesting: isRequesting,
      itemIdField: "coupon_id",
      query: query,
      searchBy: "coupons",
      tableQuery: {
        orderby: query.orderby || 'orders_count',
        order: query.order || 'desc',
        extended_info: true
      },
      title: Object(external_wp_i18n_["__"])('Coupons', 'woocommerce-admin'),
      columnPrefsKey: "coupons_report_columns",
      filters: filters,
      advancedFilters: advancedFilters
    });
  }

}

table_CouponsReportTable.contextType = currency_context["a" /* CurrencyContext */];
/* harmony default export */ var table = (table_CouponsReportTable);
// EXTERNAL MODULE: ./client/lib/get-selected-chart/index.js
var get_selected_chart = __webpack_require__(536);

// EXTERNAL MODULE: ./client/analytics/components/report-chart/index.js + 1 modules
var report_chart = __webpack_require__(534);

// EXTERNAL MODULE: ./client/analytics/components/report-summary/index.js
var report_summary = __webpack_require__(537);

// EXTERNAL MODULE: ./client/analytics/components/report-filters/index.js
var report_filters = __webpack_require__(532);

// CONCATENATED MODULE: ./client/analytics/report/coupons/index.js


/**
 * External dependencies
 */



/**
 * Internal dependencies
 */








class coupons_CouponsReport extends external_wp_element_["Component"] {
  getChartMeta() {
    const {
      query
    } = this.props;
    const isCompareView = query.filter === 'compare-coupons' && query.coupons && query.coupons.split(',').length > 1;
    const mode = isCompareView ? 'item-comparison' : 'time-comparison';

    const itemsLabel = Object(external_wp_i18n_["__"])('%d coupons', 'woocommerce-admin');

    return {
      itemsLabel,
      mode
    };
  }

  render() {
    const {
      isRequesting,
      query,
      path
    } = this.props;
    const {
      mode,
      itemsLabel
    } = this.getChartMeta();
    const chartQuery = { ...query
    };

    if (mode === 'item-comparison') {
      chartQuery.segmentby = 'coupon';
    }

    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(report_filters["a" /* default */], {
      query: query,
      path: path,
      filters: config["c" /* filters */],
      advancedFilters: config["a" /* advancedFilters */],
      report: "coupons"
    }), Object(external_wp_element_["createElement"])(report_summary["a" /* default */], {
      charts: config["b" /* charts */],
      endpoint: "coupons",
      isRequesting: isRequesting,
      query: chartQuery,
      selectedChart: Object(get_selected_chart["a" /* default */])(query.chart, config["b" /* charts */]),
      filters: config["c" /* filters */],
      advancedFilters: config["a" /* advancedFilters */]
    }), Object(external_wp_element_["createElement"])(report_chart["a" /* default */], {
      charts: config["b" /* charts */],
      filters: config["c" /* filters */],
      advancedFilters: config["a" /* advancedFilters */],
      mode: mode,
      endpoint: "coupons",
      path: path,
      query: chartQuery,
      isRequesting: isRequesting,
      itemsLabel: itemsLabel,
      selectedChart: Object(get_selected_chart["a" /* default */])(query.chart, config["b" /* charts */])
    }), Object(external_wp_element_["createElement"])(table, {
      isRequesting: isRequesting,
      query: query,
      filters: config["c" /* filters */],
      advancedFilters: config["a" /* advancedFilters */]
    }));
  }

}

coupons_CouponsReport.propTypes = {
  query: prop_types_default.a.object.isRequired
};
/* harmony default export */ var report_coupons = __webpack_exports__["default"] = (coupons_CouponsReport);

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getRequestByIdString; });
/* unused harmony export getAttributeLabels */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCategoryLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCouponLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCustomerLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getProductLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getTaxRateLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getVariationName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getVariationLabels; });
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _analytics_report_taxes_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(529);
/* harmony import */ var _utils_admin_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23);
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



/**
 * Get a function that accepts ids as they are found in url parameter and
 * returns a promise with an optional method applied to results
 *
 * @param {string|Function} path - api path string or a function of the query returning api path string
 * @param {Function} [handleData] - function applied to each iteration of data
 * @return {Function} - a function of ids returning a promise
 */

function getRequestByIdString(path) {
  let handleData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : lodash__WEBPACK_IMPORTED_MODULE_2__["identity"];
  return function () {
    let queryString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    let query = arguments.length > 1 ? arguments[1] : undefined;
    const pathString = typeof path === 'function' ? path(query) : path;
    const idList = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__["getIdsFromQuery"])(queryString);

    if (idList.length < 1) {
      return Promise.resolve([]);
    }

    const payload = {
      include: idList.join(','),
      per_page: idList.length
    };
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__["addQueryArgs"])(pathString, payload)
    }).then(data => data.map(handleData));
  };
}
const getAttributeLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"] + '/products/attributes', attribute => ({
  key: attribute.id,
  label: attribute.name
}));
const getCategoryLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"] + '/products/categories', category => ({
  key: category.id,
  label: category.name
}));
const getCouponLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"] + '/coupons', coupon => ({
  key: coupon.id,
  label: coupon.code
}));
const getCustomerLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"] + '/customers', customer => ({
  key: customer.id,
  label: customer.name
}));
const getProductLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"] + '/products', product => ({
  key: product.id,
  label: product.name
}));
const getTaxRateLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"] + '/taxes', taxRate => ({
  key: taxRate.id,
  label: Object(_analytics_report_taxes_utils__WEBPACK_IMPORTED_MODULE_5__[/* getTaxCode */ "a"])(taxRate)
}));
/**
 * Create a variation name by concatenating each of the variation's
 * attribute option strings.
 *
 * @param {Object} variation - variation returned by the api
 * @param {Array} variation.attributes - attribute objects, with option property.
 * @param {string} variation.name - name of variation.
 * @return {string} - formatted variation name
 */

function getVariationName(_ref) {
  let {
    attributes,
    name
  } = _ref;
  const separator = Object(_utils_admin_settings__WEBPACK_IMPORTED_MODULE_6__[/* getAdminSetting */ "d"])('variationTitleAttributesSeparator', ' - ');

  if (name && name.indexOf(separator) > -1) {
    return name;
  }

  const attributeList = (attributes || []).map(_ref2 => {
    let {
      option
    } = _ref2;
    return option;
  }).join(', ');
  return attributeList ? name + separator + attributeList : name;
}
const getVariationLabels = getRequestByIdString(_ref3 => {
  let {
    products
  } = _ref3;

  // If a product was specified, get just its variations.
  if (products) {
    return _woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"] + `/products/${products}/variations`;
  }

  return _woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"] + '/variations';
}, variation => {
  return {
    key: variation.id,
    label: getVariationName(variation)
  };
});

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTaxCode; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

function getTaxCode(tax) {
  return [tax.country, tax.state, tax.name || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('TAX', 'woocommerce-admin'), tax.priority].map(item => item.toString().toUpperCase().trim()).filter(Boolean).join('-');
}

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return charts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return advancedFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filters; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_async_requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(528);
/* harmony import */ var _customer_effort_score_tracks_data_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59);
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const COUPON_REPORT_CHARTS_FILTER = 'woocommerce_admin_coupons_report_charts';
const COUPON_REPORT_FILTERS_FILTER = 'woocommerce_admin_coupons_report_filters';
const COUPON_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_coupon_report_advanced_filters';
const {
  addCesSurveyForAnalytics
} = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(_customer_effort_score_tracks_data_constants__WEBPACK_IMPORTED_MODULE_4__[/* STORE_KEY */ "c"]);
/**
 * @typedef {import('../index.js').chart} chart
 */

/**
 * Coupons Report charts filter.
 *
 * @filter woocommerce_admin_coupons_report_charts
 * @param {Array.<chart>} charts Report charts.
 */

const charts = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(COUPON_REPORT_CHARTS_FILTER, [{
  key: 'orders_count',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Discounted orders', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'orders_count',
  type: 'number'
}, {
  key: 'amount',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Amount', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'amount',
  type: 'currency'
}]);
/**
 * Coupons Report Advanced Filters.
 *
 * @filter woocommerce_admin_coupon_report_advanced_filters
 * @param {Object} advancedFilters Report Advanced Filters.
 * @param {string} advancedFilters.title Interpolated component string for Advanced Filters title.
 * @param {Object} advancedFilters.filters An object specifying a report's Advanced Filters.
 */

const advancedFilters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(COUPON_REPORT_ADVANCED_FILTERS_FILTER, {
  filters: {},
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Coupons match {{select /}} filters', 'A sentence describing filters for Coupons. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ', 'woocommerce-admin')
});
const filterValues = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('All coupons', 'woocommerce-admin'),
  value: 'all'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Single coupon', 'woocommerce-admin'),
  value: 'select_coupon',
  chartMode: 'item-comparison',
  subFilters: [{
    component: 'Search',
    value: 'single_coupon',
    chartMode: 'item-comparison',
    path: ['select_coupon'],
    settings: {
      type: 'coupons',
      param: 'coupons',
      getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_3__[/* getCouponLabels */ "b"],
      labels: {
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Type to search for a coupon', 'woocommerce-admin'),
        button: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Single Coupon', 'woocommerce-admin')
      }
    }
  }]
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Comparison', 'woocommerce-admin'),
  value: 'compare-coupons',
  settings: {
    type: 'coupons',
    param: 'coupons',
    getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_3__[/* getCouponLabels */ "b"],
    labels: {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Compare Coupon Codes', 'woocommerce-admin'),
      update: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Compare', 'woocommerce-admin'),
      helpText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Check at least two coupon codes below to compare', 'woocommerce-admin')
    },
    onClick: addCesSurveyForAnalytics
  }
}];

if (Object.keys(advancedFilters.filters).length) {
  filterValues.push({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Advanced filters', 'woocommerce-admin'),
    value: 'advanced'
  });
}
/**
 * @typedef {import('../index.js').filter} filter
 */

/**
 * Coupons Report Filters.
 *
 * @filter woocommerce_admin_coupons_report_filters
 * @param {Array.<filter>} filters Report filters.
 */


const filters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(COUPON_REPORT_FILTERS_FILTER, [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Show', 'woocommerce-admin'),
  staticParams: ['chartType', 'paged', 'per_page'],
  param: 'filter',
  showFilters: () => true,
  filters: filterValues
}]);

/***/ })

}]);