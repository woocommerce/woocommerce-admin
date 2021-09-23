(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[16],{

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(30);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(7);

// EXTERNAL MODULE: ./client/lib/async-requests/index.js
var async_requests = __webpack_require__(499);

// EXTERNAL MODULE: ./client/customer-effort-score-tracks/data/constants.js
var constants = __webpack_require__(54);

// CONCATENATED MODULE: ./client/analytics/report/variations/config.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const VARIATIONS_REPORT_CHARTS_FILTER = 'woocommerce_admin_variations_report_charts';
const VARIATIONS_REPORT_FILTERS_FILTER = 'woocommerce_admin_variations_report_filters';
const VARIATIONS_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_variations_report_advanced_filters';
const {
  addCesSurveyForAnalytics
} = Object(external_wp_data_["dispatch"])(constants["c" /* STORE_KEY */]);
const charts = Object(external_wp_hooks_["applyFilters"])(VARIATIONS_REPORT_CHARTS_FILTER, [{
  key: 'items_sold',
  label: Object(external_wp_i18n_["__"])('Items sold', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'items_sold',
  type: 'number'
}, {
  key: 'net_revenue',
  label: Object(external_wp_i18n_["__"])('Net sales', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'net_revenue',
  type: 'currency'
}, {
  key: 'orders_count',
  label: Object(external_wp_i18n_["__"])('Orders', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'orders_count',
  type: 'number'
}]);
const filters = Object(external_wp_hooks_["applyFilters"])(VARIATIONS_REPORT_FILTERS_FILTER, [{
  label: Object(external_wp_i18n_["__"])('Show', 'woocommerce-admin'),
  staticParams: ['chartType', 'paged', 'per_page'],
  param: 'filter-variations',
  showFilters: () => true,
  filters: [{
    label: Object(external_wp_i18n_["__"])('All variations', 'woocommerce-admin'),
    chartMode: 'item-comparison',
    value: 'all'
  }, {
    label: Object(external_wp_i18n_["__"])('Single variation', 'woocommerce-admin'),
    value: 'select_variation',
    subFilters: [{
      component: 'Search',
      value: 'single_variation',
      path: ['select_variation'],
      settings: {
        type: 'variations',
        param: 'variations',
        getLabels: async_requests["g" /* getVariationLabels */],
        labels: {
          placeholder: Object(external_wp_i18n_["__"])('Type to search for a variation', 'woocommerce-admin'),
          button: Object(external_wp_i18n_["__"])('Single variation', 'woocommerce-admin')
        }
      }
    }]
  }, {
    label: Object(external_wp_i18n_["__"])('Comparison', 'woocommerce-admin'),
    chartMode: 'item-comparison',
    value: 'compare-variations',
    settings: {
      type: 'variations',
      param: 'variations',
      getLabels: async_requests["g" /* getVariationLabels */],
      labels: {
        helpText: Object(external_wp_i18n_["__"])('Check at least two variations below to compare', 'woocommerce-admin'),
        placeholder: Object(external_wp_i18n_["__"])('Search for variations to compare', 'woocommerce-admin'),
        title: Object(external_wp_i18n_["__"])('Compare Variations', 'woocommerce-admin'),
        update: Object(external_wp_i18n_["__"])('Compare', 'woocommerce-admin')
      },
      onClick: addCesSurveyForAnalytics
    }
  }, {
    label: Object(external_wp_i18n_["__"])('Advanced filters', 'woocommerce-admin'),
    value: 'advanced'
  }]
}]);
const advancedFilters = Object(external_wp_hooks_["applyFilters"])(VARIATIONS_REPORT_ADVANCED_FILTERS_FILTER, {
  title: Object(external_wp_i18n_["_x"])('Variations match {{select /}} filters', 'A sentence describing filters for Variations. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ', 'woocommerce-admin'),
  filters: {
    attribute: {
      allowMultiple: true,
      labels: {
        add: Object(external_wp_i18n_["__"])('Attribute', 'woocommerce-admin'),
        placeholder: Object(external_wp_i18n_["__"])('Search attributes', 'woocommerce-admin'),
        remove: Object(external_wp_i18n_["__"])('Remove attribute filter', 'woocommerce-admin'),
        rule: Object(external_wp_i18n_["__"])('Select a product attribute filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: Object(external_wp_i18n_["__"])('{{title}}Attribute{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(external_wp_i18n_["__"])('Select attributes', 'woocommerce-admin')
      },
      rules: [{
        value: 'is',

        /* translators: Sentence fragment, logical, "Is" refers to searching for product variations matching a chosen attribute. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(external_wp_i18n_["_x"])('Is', 'product attribute', 'woocommerce-admin')
      }, {
        value: 'is_not',

        /* translators: Sentence fragment, logical, "Is Not" refers to searching for product variations that don\'t match a chosen attribute. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(external_wp_i18n_["_x"])('Is Not', 'product attribute', 'woocommerce-admin')
      }],
      input: {
        component: 'ProductAttribute'
      }
    },
    category: {
      labels: {
        add: Object(external_wp_i18n_["__"])('Categories', 'woocommerce-admin'),
        placeholder: Object(external_wp_i18n_["__"])('Search categories', 'woocommerce-admin'),
        remove: Object(external_wp_i18n_["__"])('Remove categories filter', 'woocommerce-admin'),
        rule: Object(external_wp_i18n_["__"])('Select a category filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a Category filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: Object(external_wp_i18n_["__"])('{{title}}Category{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(external_wp_i18n_["__"])('Select categories', 'woocommerce-admin')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to variations including a given category. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(external_wp_i18n_["_x"])('Includes', 'categories', 'woocommerce-admin')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to variations excluding a given category. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(external_wp_i18n_["_x"])('Excludes', 'categories', 'woocommerce-admin')
      }],
      input: {
        component: 'Search',
        type: 'categories',
        getLabels: async_requests["a" /* getCategoryLabels */]
      }
    },
    product: {
      labels: {
        add: Object(external_wp_i18n_["__"])('Products', 'woocommerce-admin'),
        placeholder: Object(external_wp_i18n_["__"])('Search products', 'woocommerce-admin'),
        remove: Object(external_wp_i18n_["__"])('Remove products filter', 'woocommerce-admin'),
        rule: Object(external_wp_i18n_["__"])('Select a product filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: Object(external_wp_i18n_["__"])('{{title}}Product{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(external_wp_i18n_["__"])('Select products', 'woocommerce-admin')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to orders including a given product(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(external_wp_i18n_["_x"])('Includes', 'products', 'woocommerce-admin')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to orders excluding a given product(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(external_wp_i18n_["_x"])('Excludes', 'products', 'woocommerce-admin')
      }],
      input: {
        component: 'Search',
        type: 'variableProducts',
        getLabels: async_requests["d" /* getProductLabels */]
      }
    }
  }
});
// EXTERNAL MODULE: ./client/lib/get-selected-chart/index.js
var get_selected_chart = __webpack_require__(507);

// EXTERNAL MODULE: ./client/analytics/components/report-chart/index.js + 1 modules
var report_chart = __webpack_require__(505);

// EXTERNAL MODULE: ./client/analytics/components/report-error/index.js
var report_error = __webpack_require__(501);

// EXTERNAL MODULE: ./client/analytics/components/report-summary/index.js
var report_summary = __webpack_require__(508);

// EXTERNAL MODULE: ./client/analytics/report/variations/table.js
var table = __webpack_require__(529);

// EXTERNAL MODULE: ./client/analytics/components/report-filters/index.js
var report_filters = __webpack_require__(502);

// CONCATENATED MODULE: ./client/analytics/report/variations/index.js


/**
 * External dependencies
 */



/**
 * Internal dependencies
 */









const getChartMeta = ({
  query
}) => {
  const isCompareView = query['filter-variations'] === 'compare-variations' && query.variations && query.variations.split(',').length > 1;
  return {
    compareObject: 'variations',
    itemsLabel: Object(external_wp_i18n_["__"])('%d variations', 'woocommerce-admin'),
    mode: isCompareView ? 'item-comparison' : 'time-comparison'
  };
};

const VariationsReport = props => {
  const {
    itemsLabel,
    mode
  } = getChartMeta(props);
  const {
    path,
    query,
    isError,
    isRequesting
  } = props;

  if (isError) {
    return Object(external_wp_element_["createElement"])(report_error["a" /* default */], null);
  }

  const chartQuery = { ...query
  };

  if (mode === 'item-comparison') {
    chartQuery.segmentby = 'variation';
  }

  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(report_filters["a" /* default */], {
    query: query,
    path: path,
    filters: filters,
    advancedFilters: advancedFilters,
    report: "variations"
  }), Object(external_wp_element_["createElement"])(report_summary["a" /* default */], {
    mode: mode,
    charts: charts,
    endpoint: "variations",
    isRequesting: isRequesting,
    query: chartQuery,
    selectedChart: Object(get_selected_chart["a" /* default */])(query.chart, charts),
    filters: filters,
    advancedFilters: advancedFilters
  }), Object(external_wp_element_["createElement"])(report_chart["a" /* default */], {
    charts: charts,
    mode: mode,
    filters: filters,
    advancedFilters: advancedFilters,
    endpoint: "variations",
    isRequesting: isRequesting,
    itemsLabel: itemsLabel,
    path: path,
    query: chartQuery,
    selectedChart: Object(get_selected_chart["a" /* default */])(chartQuery.chart, charts)
  }), Object(external_wp_element_["createElement"])(table["a" /* default */], {
    isRequesting: isRequesting,
    query: query,
    filters: filters,
    advancedFilters: advancedFilters
  }));
};

VariationsReport.propTypes = {
  path: prop_types_default.a.string.isRequired,
  query: prop_types_default.a.object.isRequired
};
/* harmony default export */ var variations = __webpack_exports__["default"] = (VariationsReport);

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

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isLowStock; });
/**
 * Determine if a product or variation is in low stock.
 *
 * @param {number} threshold - The number at which stock is determined to be low.
 * @return {boolean} - Whether or not the stock is low.
 */
function isLowStock(status, quantity, threshold) {
  if (!quantity) {
    // Sites that don't do inventory tracking will always return false.
    return false;
  }

  return status && quantity <= threshold === 'instock';
}

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(120);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_number__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _components_report_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(503);
/* harmony import */ var _products_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(510);
/* harmony import */ var _lib_currency_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(498);
/* harmony import */ var _lib_async_requests__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(499);


/**
 * External dependencies
 */







/**
 * Internal dependencies
 */





const manageStock = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_6__[/* getSetting */ "f"])('manageStock', 'no');
const stockStatuses = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_6__[/* getSetting */ "f"])('stockStatuses', {});

const getFullVariationName = rowData => Object(_lib_async_requests__WEBPACK_IMPORTED_MODULE_10__[/* getVariationName */ "h"])(rowData.extended_info || {});

class VariationsReportTable extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.getHeadersContent = this.getHeadersContent.bind(this);
    this.getRowsContent = this.getRowsContent.bind(this);
    this.getSummary = this.getSummary.bind(this);
  }

  getHeadersContent() {
    return [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Product / Variation title', 'woocommerce-admin'),
      key: 'name',
      required: true,
      isLeftAligned: true
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('SKU', 'woocommerce-admin'),
      key: 'sku',
      hiddenByDefault: true,
      isSortable: true
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Items sold', 'woocommerce-admin'),
      key: 'items_sold',
      required: true,
      defaultSort: true,
      isSortable: true,
      isNumeric: true
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Net sales', 'woocommerce-admin'),
      screenReaderLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Net sales', 'woocommerce-admin'),
      key: 'net_revenue',
      required: true,
      isSortable: true,
      isNumeric: true
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Orders', 'woocommerce-admin'),
      key: 'orders_count',
      isSortable: true,
      isNumeric: true
    }, manageStock === 'yes' ? {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Status', 'woocommerce-admin'),
      key: 'stock_status'
    } : null, manageStock === 'yes' ? {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Stock', 'woocommerce-admin'),
      key: 'stock',
      isNumeric: true
    } : null].filter(Boolean);
  }

  getRowsContent(data = []) {
    const {
      query
    } = this.props;
    const persistedQuery = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__["getPersistedQuery"])(query);
    const {
      formatAmount,
      formatDecimal: getCurrencyFormatDecimal,
      getCurrencyConfig
    } = this.context;
    return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["map"])(data, row => {
      const {
        items_sold: itemsSold,
        net_revenue: netRevenue,
        orders_count: ordersCount,
        product_id: productId,
        variation_id: variationId
      } = row;
      const extendedInfo = row.extended_info || {};
      const {
        stock_status: stockStatus,
        stock_quantity: stockQuantity,
        low_stock_amount: lowStockAmount,
        sku
      } = extendedInfo;
      const name = getFullVariationName(row);
      const ordersLink = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__["getNewPath"])(persistedQuery, '/analytics/orders', {
        filter: 'advanced',
        variation_includes: variationId
      });
      const editPostLink = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_6__[/* getAdminLink */ "e"])(`post.php?post=${productId}&action=edit`);
      return [{
        display: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_3__["Link"], {
          href: editPostLink,
          type: "wp-admin"
        }, name),
        value: name
      }, {
        display: sku,
        value: sku
      }, {
        display: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_5__["formatValue"])(getCurrencyConfig(), 'number', itemsSold),
        value: itemsSold
      }, {
        display: formatAmount(netRevenue),
        value: getCurrencyFormatDecimal(netRevenue)
      }, {
        display: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_3__["Link"], {
          href: ordersLink,
          type: "wc-admin"
        }, ordersCount),
        value: ordersCount
      }, manageStock === 'yes' ? {
        display: Object(_products_utils__WEBPACK_IMPORTED_MODULE_8__[/* isLowStock */ "a"])(stockStatus, stockQuantity, lowStockAmount) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_3__["Link"], {
          href: editPostLink,
          type: "wp-admin"
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])('Low', 'Indication of a low quantity', 'woocommerce-admin')) : stockStatuses[stockStatus],
        value: stockStatuses[stockStatus]
      } : null, manageStock === 'yes' ? {
        display: stockQuantity,
        value: stockQuantity
      } : null].filter(Boolean);
    });
  }

  getSummary(totals) {
    const {
      variations_count: variationsCount = 0,
      items_sold: itemsSold = 0,
      net_revenue: netRevenue = 0,
      orders_count: ordersCount = 0
    } = totals;
    const {
      formatAmount,
      getCurrencyConfig
    } = this.context;
    const currency = getCurrencyConfig();
    return [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_n"])('variation sold', 'variations sold', variationsCount, 'woocommerce-admin'),
      value: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_5__["formatValue"])(currency, 'number', variationsCount)
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_n"])('item sold', 'items sold', itemsSold, 'woocommerce-admin'),
      value: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_5__["formatValue"])(currency, 'number', itemsSold)
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('net sales', 'woocommerce-admin'),
      value: formatAmount(netRevenue)
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_n"])('orders', 'orders', ordersCount, 'woocommerce-admin'),
      value: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_5__["formatValue"])(currency, 'number', ordersCount)
    }];
  }

  render() {
    const {
      advancedFilters,
      baseSearchQuery,
      filters,
      isRequesting,
      query
    } = this.props;
    const labels = {
      helpText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Check at least two variations below to compare', 'woocommerce-admin'),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Search by variation name or SKU', 'woocommerce-admin')
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_report_table__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      baseSearchQuery: baseSearchQuery,
      compareBy: "variations",
      compareParam: "filter-variations",
      endpoint: "variations",
      getHeadersContent: this.getHeadersContent,
      getRowsContent: this.getRowsContent,
      isRequesting: isRequesting,
      itemIdField: "variation_id",
      labels: labels,
      query: query,
      getSummary: this.getSummary,
      summaryFields: ['variations_count', 'items_sold', 'net_revenue', 'orders_count'],
      tableQuery: {
        orderby: query.orderby || 'items_sold',
        order: query.order || 'desc',
        extended_info: true,
        product_includes: query.products,
        variations: query.variations
      },
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Variations', 'woocommerce-admin'),
      columnPrefsKey: "variations_report_columns",
      filters: filters,
      advancedFilters: advancedFilters
    });
  }

}

VariationsReportTable.contextType = _lib_currency_context__WEBPACK_IMPORTED_MODULE_9__[/* CurrencyContext */ "a"];
/* harmony default export */ __webpack_exports__["a"] = (VariationsReportTable);

/***/ })

}]);