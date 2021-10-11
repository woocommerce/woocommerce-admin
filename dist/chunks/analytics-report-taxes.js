(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[15],{

/***/ 482:
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

// EXTERNAL MODULE: ./client/analytics/report/taxes/config.js
var config = __webpack_require__(532);

// EXTERNAL MODULE: ./client/lib/get-selected-chart/index.js
var get_selected_chart = __webpack_require__(507);

// EXTERNAL MODULE: ./client/analytics/components/report-chart/index.js + 1 modules
var report_chart = __webpack_require__(505);

// EXTERNAL MODULE: ./client/analytics/components/report-summary/index.js
var report_summary = __webpack_require__(508);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(21);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(12);

// EXTERNAL MODULE: external ["wc","number"]
var external_wc_number_ = __webpack_require__(120);

// EXTERNAL MODULE: ./client/analytics/report/taxes/utils.js
var utils = __webpack_require__(500);

// EXTERNAL MODULE: ./client/analytics/components/report-table/index.js + 2 modules
var report_table = __webpack_require__(503);

// EXTERNAL MODULE: ./client/lib/currency-context.js
var currency_context = __webpack_require__(498);

// CONCATENATED MODULE: ./client/analytics/report/taxes/table.js


/**
 * External dependencies
 */






/**
 * Internal dependencies
 */





class table_TaxesReportTable extends external_wp_element_["Component"] {
  constructor() {
    super();
    this.getHeadersContent = this.getHeadersContent.bind(this);
    this.getRowsContent = this.getRowsContent.bind(this);
    this.getSummary = this.getSummary.bind(this);
  }

  getHeadersContent() {
    return [{
      label: Object(external_wp_i18n_["__"])('Tax code', 'woocommerce-admin'),
      key: 'tax_code',
      required: true,
      isLeftAligned: true,
      isSortable: true
    }, {
      label: Object(external_wp_i18n_["__"])('Rate', 'woocommerce-admin'),
      key: 'rate',
      isSortable: true,
      isNumeric: true
    }, {
      label: Object(external_wp_i18n_["__"])('Total tax', 'woocommerce-admin'),
      key: 'total_tax',
      isSortable: true
    }, {
      label: Object(external_wp_i18n_["__"])('Order tax', 'woocommerce-admin'),
      key: 'order_tax',
      isSortable: true
    }, {
      label: Object(external_wp_i18n_["__"])('Shipping tax', 'woocommerce-admin'),
      key: 'shipping_tax',
      isSortable: true
    }, {
      label: Object(external_wp_i18n_["__"])('Orders', 'woocommerce-admin'),
      key: 'orders_count',
      required: true,
      defaultSort: true,
      isSortable: true,
      isNumeric: true
    }];
  }

  getRowsContent(taxes) {
    const {
      render: renderCurrency,
      formatDecimal: getCurrencyFormatDecimal,
      getCurrencyConfig
    } = this.context;
    return Object(external_lodash_["map"])(taxes, tax => {
      const {
        query
      } = this.props;
      const {
        order_tax: orderTax,
        orders_count: ordersCount,
        tax_rate: taxRate,
        tax_rate_id: taxRateId,
        total_tax: totalTax,
        shipping_tax: shippingTax
      } = tax;
      const taxCode = Object(utils["a" /* getTaxCode */])(tax);
      const persistedQuery = Object(external_wc_navigation_["getPersistedQuery"])(query);
      const ordersTaxLink = Object(external_wc_navigation_["getNewPath"])(persistedQuery, '/analytics/orders', {
        filter: 'advanced',
        tax_rate_includes: taxRateId
      });
      const taxLink = Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
        href: ordersTaxLink,
        type: "wc-admin"
      }, taxCode);
      return [{
        display: taxLink,
        value: taxCode
      }, {
        display: taxRate.toFixed(2) + '%',
        value: taxRate
      }, {
        display: renderCurrency(totalTax),
        value: getCurrencyFormatDecimal(totalTax)
      }, {
        display: renderCurrency(orderTax),
        value: getCurrencyFormatDecimal(orderTax)
      }, {
        display: renderCurrency(shippingTax),
        value: getCurrencyFormatDecimal(shippingTax)
      }, {
        display: Object(external_wc_number_["formatValue"])(getCurrencyConfig(), 'number', ordersCount),
        value: ordersCount
      }];
    });
  }

  getSummary(totals) {
    const {
      tax_codes: taxesCodes = 0,
      total_tax: totalTax = 0,
      order_tax: orderTax = 0,
      shipping_tax: shippingTax = 0,
      orders_count: ordersCount = 0
    } = totals;
    const {
      formatAmount,
      getCurrencyConfig
    } = this.context;
    const currency = getCurrencyConfig();
    return [{
      label: Object(external_wp_i18n_["_n"])('tax code', 'tax codes', taxesCodes, 'woocommerce-admin'),
      value: Object(external_wc_number_["formatValue"])(currency, 'number', taxesCodes)
    }, {
      label: Object(external_wp_i18n_["__"])('total tax', 'woocommerce-admin'),
      value: formatAmount(totalTax)
    }, {
      label: Object(external_wp_i18n_["__"])('order tax', 'woocommerce-admin'),
      value: formatAmount(orderTax)
    }, {
      label: Object(external_wp_i18n_["__"])('shipping tax', 'woocommerce-admin'),
      value: formatAmount(shippingTax)
    }, {
      label: Object(external_wp_i18n_["_n"])('order', 'orders', ordersCount, 'woocommerce-admin'),
      value: Object(external_wc_number_["formatValue"])(currency, 'number', ordersCount)
    }];
  }

  render() {
    const {
      advancedFilters,
      filters,
      isRequesting,
      query
    } = this.props;
    return Object(external_wp_element_["createElement"])(report_table["a" /* default */], {
      compareBy: "taxes",
      endpoint: "taxes",
      getHeadersContent: this.getHeadersContent,
      getRowsContent: this.getRowsContent,
      getSummary: this.getSummary,
      summaryFields: ['tax_codes', 'total_tax', 'order_tax', 'shipping_tax', 'orders_count'],
      isRequesting: isRequesting,
      itemIdField: "tax_rate_id",
      query: query,
      searchBy: "taxes",
      tableQuery: {
        orderby: query.orderby || 'tax_rate_id'
      },
      title: Object(external_wp_i18n_["__"])('Taxes', 'woocommerce-admin'),
      columnPrefsKey: "taxes_report_columns",
      filters: filters,
      advancedFilters: advancedFilters
    });
  }

}

table_TaxesReportTable.contextType = currency_context["a" /* CurrencyContext */];
/* harmony default export */ var table = (table_TaxesReportTable);
// EXTERNAL MODULE: ./client/analytics/components/report-filters/index.js
var report_filters = __webpack_require__(502);

// CONCATENATED MODULE: ./client/analytics/report/taxes/index.js


/**
 * External dependencies
 */



/**
 * Internal dependencies
 */








class taxes_TaxesReport extends external_wp_element_["Component"] {
  getChartMeta() {
    const {
      query
    } = this.props;
    const isCompareTaxView = query.filter === 'compare-taxes';
    const mode = isCompareTaxView ? 'item-comparison' : 'time-comparison';

    const itemsLabel = Object(external_wp_i18n_["__"])('%d taxes', 'woocommerce-admin');

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
      chartQuery.segmentby = 'tax_rate_id';
    }

    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(report_filters["a" /* default */], {
      query: query,
      path: path,
      filters: config["c" /* filters */],
      advancedFilters: config["a" /* advancedFilters */],
      report: "taxes"
    }), Object(external_wp_element_["createElement"])(report_summary["a" /* default */], {
      charts: config["b" /* charts */],
      endpoint: "taxes",
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
      endpoint: "taxes",
      query: chartQuery,
      path: path,
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

taxes_TaxesReport.propTypes = {
  query: prop_types_default.a.object.isRequired
};
/* harmony default export */ var report_taxes = __webpack_exports__["default"] = (taxes_TaxesReport);

/***/ }),

/***/ 499:
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
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _analytics_report_taxes_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(500);
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

function getRequestByIdString(path, handleData = lodash__WEBPACK_IMPORTED_MODULE_2__["identity"]) {
  return function (queryString = '', query) {
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
  label: Object(_analytics_report_taxes_utils__WEBPACK_IMPORTED_MODULE_6__[/* getTaxCode */ "a"])(taxRate)
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

function getVariationName({
  attributes,
  name
}) {
  const separator = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_5__[/* getSetting */ "f"])('variationTitleAttributesSeparator', ' - ');

  if (name.indexOf(separator) > -1) {
    return name;
  }

  const attributeList = attributes.map(({
    option
  }) => option).join(', ');
  return attributeList ? name + separator + attributeList : name;
}
const getVariationLabels = getRequestByIdString(({
  products
}) => {
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

/***/ 500:
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

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return charts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return advancedFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filters; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_async_requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(499);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(500);
/* harmony import */ var _customer_effort_score_tracks_data_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54);
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */




const TAXES_REPORT_CHARTS_FILTER = 'woocommerce_admin_taxes_report_charts';
const TAXES_REPORT_FILTERS_FILTER = 'woocommerce_admin_taxes_report_filters';
const TAXES_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_taxes_report_advanced_filters';
const {
  addCesSurveyForAnalytics
} = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["dispatch"])(_customer_effort_score_tracks_data_constants__WEBPACK_IMPORTED_MODULE_6__[/* STORE_KEY */ "c"]);
const charts = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(TAXES_REPORT_CHARTS_FILTER, [{
  key: 'total_tax',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Total tax', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'total_tax',
  type: 'currency'
}, {
  key: 'order_tax',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Order tax', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'order_tax',
  type: 'currency'
}, {
  key: 'shipping_tax',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Shipping tax', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'shipping_tax',
  type: 'currency'
}, {
  key: 'orders_count',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Orders', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'orders_count',
  type: 'number'
}]);
const advancedFilters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(TAXES_REPORT_ADVANCED_FILTERS_FILTER, {
  filters: {},
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Taxes match {{select /}} filters', 'A sentence describing filters for Taxes. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ', 'woocommerce-admin')
});
const filterValues = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('All taxes', 'woocommerce-admin'),
  value: 'all'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Comparison', 'woocommerce-admin'),
  value: 'compare-taxes',
  chartMode: 'item-comparison',
  settings: {
    type: 'taxes',
    param: 'taxes',
    getLabels: Object(_lib_async_requests__WEBPACK_IMPORTED_MODULE_4__[/* getRequestByIdString */ "e"])(_woocommerce_data__WEBPACK_IMPORTED_MODULE_2__["NAMESPACE"] + '/taxes', tax => ({
      id: tax.id,
      key: tax.id,
      label: Object(_utils__WEBPACK_IMPORTED_MODULE_5__[/* getTaxCode */ "a"])(tax)
    })),
    labels: {
      helpText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Check at least two tax codes below to compare', 'woocommerce-admin'),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search for tax codes to compare', 'woocommerce-admin'),
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Compare Tax Codes', 'woocommerce-admin'),
      update: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Compare', 'woocommerce-admin')
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

const filters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(TAXES_REPORT_FILTERS_FILTER, [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Show', 'woocommerce-admin'),
  staticParams: ['chartType', 'paged', 'per_page'],
  param: 'filter',
  showFilters: () => true,
  filters: filterValues
}]);

/***/ })

}]);