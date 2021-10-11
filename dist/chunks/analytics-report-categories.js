(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[7],{

/***/ 476:
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

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(30);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(7);

// EXTERNAL MODULE: ./client/lib/async-requests/index.js
var async_requests = __webpack_require__(499);

// EXTERNAL MODULE: ./client/customer-effort-score-tracks/data/constants.js
var constants = __webpack_require__(54);

// CONCATENATED MODULE: ./client/analytics/report/categories/config.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const CATEGORY_REPORT_CHARTS_FILTER = 'woocommerce_admin_categories_report_charts';
const CATEGORY_REPORT_FILTERS_FILTER = 'woocommerce_admin_categories_report_filters';
const CATEGORY_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_category_report_advanced_filters';
const {
  addCesSurveyForAnalytics
} = Object(external_wp_data_["dispatch"])(constants["c" /* STORE_KEY */]);
const charts = Object(external_wp_hooks_["applyFilters"])(CATEGORY_REPORT_CHARTS_FILTER, [{
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
const config_advancedFilters = Object(external_wp_hooks_["applyFilters"])(CATEGORY_REPORT_ADVANCED_FILTERS_FILTER, {
  filters: {},
  title: Object(external_wp_i18n_["_x"])('Categories match {{select /}} filters', 'A sentence describing filters for Categories. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ', 'woocommerce-admin')
});
const filterValues = [{
  label: Object(external_wp_i18n_["__"])('All categories', 'woocommerce-admin'),
  value: 'all'
}, {
  label: Object(external_wp_i18n_["__"])('Single category', 'woocommerce-admin'),
  value: 'select_category',
  chartMode: 'item-comparison',
  subFilters: [{
    component: 'Search',
    value: 'single_category',
    chartMode: 'item-comparison',
    path: ['select_category'],
    settings: {
      type: 'categories',
      param: 'categories',
      getLabels: async_requests["a" /* getCategoryLabels */],
      labels: {
        placeholder: Object(external_wp_i18n_["__"])('Type to search for a category', 'woocommerce-admin'),
        button: Object(external_wp_i18n_["__"])('Single Category', 'woocommerce-admin')
      }
    }
  }]
}, {
  label: Object(external_wp_i18n_["__"])('Comparison', 'woocommerce-admin'),
  value: 'compare-categories',
  chartMode: 'item-comparison',
  settings: {
    type: 'categories',
    param: 'categories',
    getLabels: async_requests["a" /* getCategoryLabels */],
    labels: {
      helpText: Object(external_wp_i18n_["__"])('Check at least two categories below to compare', 'woocommerce-admin'),
      placeholder: Object(external_wp_i18n_["__"])('Search for categories to compare', 'woocommerce-admin'),
      title: Object(external_wp_i18n_["__"])('Compare Categories', 'woocommerce-admin'),
      update: Object(external_wp_i18n_["__"])('Compare', 'woocommerce-admin')
    },
    onClick: addCesSurveyForAnalytics
  }
}];

if (Object.keys(config_advancedFilters.filters).length) {
  filterValues.push({
    label: Object(external_wp_i18n_["__"])('Advanced filters', 'woocommerce-admin'),
    value: 'advanced'
  });
}

const config_filters = Object(external_wp_hooks_["applyFilters"])(CATEGORY_REPORT_FILTERS_FILTER, [{
  label: Object(external_wp_i18n_["__"])('Show', 'woocommerce-admin'),
  staticParams: ['chartType', 'paged', 'per_page'],
  param: 'filter',
  showFilters: () => true,
  filters: filterValues
}]);
// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(14);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(12);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(21);

// EXTERNAL MODULE: external ["wc","number"]
var external_wc_number_ = __webpack_require__(120);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(11);

// EXTERNAL MODULE: ./client/analytics/report/categories/breadcrumbs.js
var breadcrumbs = __webpack_require__(515);

// EXTERNAL MODULE: ./client/analytics/components/report-table/index.js + 2 modules
var report_table = __webpack_require__(503);

// EXTERNAL MODULE: ./client/lib/currency-context.js
var currency_context = __webpack_require__(498);

// CONCATENATED MODULE: ./client/analytics/report/categories/table.js


/**
 * External dependencies
 */









/**
 * Internal dependencies
 */





class table_CategoriesReportTable extends external_wp_element_["Component"] {
  constructor(props) {
    super(props);
    this.getRowsContent = this.getRowsContent.bind(this);
    this.getSummary = this.getSummary.bind(this);
  }

  getHeadersContent() {
    return [{
      label: Object(external_wp_i18n_["__"])('Category', 'woocommerce-admin'),
      key: 'category',
      required: true,
      isSortable: true,
      isLeftAligned: true
    }, {
      label: Object(external_wp_i18n_["__"])('Items sold', 'woocommerce-admin'),
      key: 'items_sold',
      required: true,
      defaultSort: true,
      isSortable: true,
      isNumeric: true
    }, {
      label: Object(external_wp_i18n_["__"])('Net sales', 'woocommerce-admin'),
      key: 'net_revenue',
      isSortable: true,
      isNumeric: true
    }, {
      label: Object(external_wp_i18n_["__"])('Products', 'woocommerce-admin'),
      key: 'products_count',
      isSortable: true,
      isNumeric: true
    }, {
      label: Object(external_wp_i18n_["__"])('Orders', 'woocommerce-admin'),
      key: 'orders_count',
      isSortable: true,
      isNumeric: true
    }];
  }

  getRowsContent(categoryStats) {
    const {
      render: renderCurrency,
      formatDecimal: getCurrencyFormatDecimal,
      getCurrencyConfig
    } = this.context;
    const {
      categories,
      query
    } = this.props;

    if (!categories) {
      return [];
    }

    const currency = getCurrencyConfig();
    return Object(external_lodash_["map"])(categoryStats, categoryStat => {
      const {
        category_id: categoryId,
        items_sold: itemsSold,
        net_revenue: netRevenue,
        products_count: productsCount,
        orders_count: ordersCount
      } = categoryStat;
      const category = categories.get(categoryId);
      const persistedQuery = Object(external_wc_navigation_["getPersistedQuery"])(query);
      return [{
        display: Object(external_wp_element_["createElement"])(breadcrumbs["a" /* default */], {
          query: query,
          category: category,
          categories: categories
        }),
        value: category && category.name
      }, {
        display: Object(external_wc_number_["formatValue"])(currency, 'number', itemsSold),
        value: itemsSold
      }, {
        display: renderCurrency(netRevenue),
        value: getCurrencyFormatDecimal(netRevenue)
      }, {
        display: category && Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
          href: Object(external_wc_navigation_["getNewPath"])(persistedQuery, '/analytics/categories', {
            filter: 'single_category',
            categories: category.id
          }),
          type: "wc-admin"
        }, Object(external_wc_number_["formatValue"])(currency, 'number', productsCount)),
        value: productsCount
      }, {
        display: Object(external_wc_number_["formatValue"])(currency, 'number', ordersCount),
        value: ordersCount
      }];
    });
  }

  getSummary(totals, totalResults = 0) {
    const {
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
      label: Object(external_wp_i18n_["_n"])('Category', 'Categories', totalResults, 'woocommerce-admin'),
      value: Object(external_wc_number_["formatValue"])(currency, 'number', totalResults)
    }, {
      label: Object(external_wp_i18n_["_n"])('Item sold', 'Items sold', itemsSold, 'woocommerce-admin'),
      value: Object(external_wc_number_["formatValue"])(currency, 'number', itemsSold)
    }, {
      label: Object(external_wp_i18n_["__"])('Net sales', 'woocommerce-admin'),
      value: formatAmount(netRevenue)
    }, {
      label: Object(external_wp_i18n_["_n"])('Order', 'Orders', ordersCount, 'woocommerce-admin'),
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
    const labels = {
      helpText: Object(external_wp_i18n_["__"])('Check at least two categories below to compare', 'woocommerce-admin'),
      placeholder: Object(external_wp_i18n_["__"])('Search by category name', 'woocommerce-admin')
    };
    return Object(external_wp_element_["createElement"])(report_table["a" /* default */], {
      compareBy: "categories",
      endpoint: "categories",
      getHeadersContent: this.getHeadersContent,
      getRowsContent: this.getRowsContent,
      getSummary: this.getSummary,
      summaryFields: ['items_sold', 'net_revenue', 'orders_count'],
      isRequesting: isRequesting,
      itemIdField: "category_id",
      query: query,
      searchBy: "categories",
      labels: labels,
      tableQuery: {
        orderby: query.orderby || 'items_sold',
        order: query.order || 'desc',
        extended_info: true
      },
      title: Object(external_wp_i18n_["__"])('Categories', 'woocommerce-admin'),
      columnPrefsKey: "categories_report_columns",
      filters: filters,
      advancedFilters: advancedFilters
    });
  }

}

table_CategoriesReportTable.contextType = currency_context["a" /* CurrencyContext */];
/* harmony default export */ var table = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])((select, props) => {
  const {
    isRequesting,
    query
  } = props;

  if (isRequesting || query.search && !(query.categories && query.categories.length)) {
    return {};
  }

  const {
    getItems,
    getItemsError,
    isResolving
  } = select(external_wc_data_["ITEMS_STORE_NAME"]);
  const tableQuery = {
    per_page: -1
  };
  const categories = getItems('categories', tableQuery);
  const isCategoriesError = Boolean(getItemsError('categories', tableQuery));
  const isCategoriesRequesting = isResolving('getItems', ['categories', tableQuery]);
  return {
    categories,
    isError: isCategoriesError,
    isRequesting: isCategoriesRequesting
  };
}))(table_CategoriesReportTable));
// EXTERNAL MODULE: ./client/lib/get-selected-chart/index.js
var get_selected_chart = __webpack_require__(507);

// EXTERNAL MODULE: ./client/analytics/components/report-chart/index.js + 1 modules
var report_chart = __webpack_require__(505);

// EXTERNAL MODULE: ./client/analytics/components/report-summary/index.js
var report_summary = __webpack_require__(508);

// EXTERNAL MODULE: ./client/analytics/report/products/table.js
var products_table = __webpack_require__(527);

// EXTERNAL MODULE: ./client/analytics/components/report-filters/index.js
var report_filters = __webpack_require__(502);

// CONCATENATED MODULE: ./client/analytics/report/categories/index.js


/**
 * External dependencies
 */



/**
 * Internal dependencies
 */









class categories_CategoriesReport extends external_wp_element_["Component"] {
  getChartMeta() {
    const {
      query
    } = this.props;
    const isCompareView = query.filter === 'compare-categories' && query.categories && query.categories.split(',').length > 1;
    const isSingleCategoryView = query.filter === 'single_category' && !!query.categories;
    const mode = isCompareView || isSingleCategoryView ? 'item-comparison' : 'time-comparison';
    const itemsLabel = isSingleCategoryView ? Object(external_wp_i18n_["__"])('%d products', 'woocommerce-admin') : Object(external_wp_i18n_["__"])('%d categories', 'woocommerce-admin');
    return {
      isSingleCategoryView,
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
      itemsLabel,
      isSingleCategoryView
    } = this.getChartMeta();
    const chartQuery = { ...query
    };

    if (mode === 'item-comparison') {
      chartQuery.segmentby = isSingleCategoryView ? 'product' : 'category';
    }

    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(report_filters["a" /* default */], {
      query: query,
      path: path,
      filters: config_filters,
      advancedFilters: config_advancedFilters,
      report: "categories"
    }), Object(external_wp_element_["createElement"])(report_summary["a" /* default */], {
      charts: charts,
      endpoint: "products",
      isRequesting: isRequesting,
      limitProperties: isSingleCategoryView ? ['products', 'categories'] : ['categories'],
      query: chartQuery,
      selectedChart: Object(get_selected_chart["a" /* default */])(query.chart, charts),
      filters: config_filters,
      advancedFilters: config_advancedFilters,
      report: "categories"
    }), Object(external_wp_element_["createElement"])(report_chart["a" /* default */], {
      charts: charts,
      filters: config_filters,
      advancedFilters: config_advancedFilters,
      mode: mode,
      endpoint: "products",
      limitProperties: isSingleCategoryView ? ['products', 'categories'] : ['categories'],
      path: path,
      query: chartQuery,
      isRequesting: isRequesting,
      itemsLabel: itemsLabel,
      selectedChart: Object(get_selected_chart["a" /* default */])(query.chart, charts)
    }), isSingleCategoryView ? Object(external_wp_element_["createElement"])(products_table["a" /* default */], {
      isRequesting: isRequesting,
      query: chartQuery,
      baseSearchQuery: {
        filter: 'single_category'
      },
      hideCompare: isSingleCategoryView,
      filters: config_filters,
      advancedFilters: config_advancedFilters
    }) : Object(external_wp_element_["createElement"])(table, {
      isRequesting: isRequesting,
      query: query,
      filters: config_filters,
      advancedFilters: config_advancedFilters
    }));
  }

}

categories_CategoriesReport.propTypes = {
  query: prop_types_default.a.object.isRequired,
  path: prop_types_default.a.string.isRequired
};
/* harmony default export */ var report_categories = __webpack_exports__["default"] = (categories_CategoriesReport);

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

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryBreadcrumbs; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__);


/**
 * External dependencies
 */





class CategoryBreadcrumbs extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  getCategoryAncestorIds(category, categories) {
    const ancestors = [];
    let parent = category.parent;

    while (parent) {
      ancestors.unshift(parent);
      parent = categories.get(parent).parent;
    }

    return ancestors;
  }

  getCategoryAncestors(category, categories) {
    const ancestorIds = this.getCategoryAncestorIds(category, categories);

    if (!ancestorIds.length) {
      return;
    }

    if (ancestorIds.length === 1) {
      return categories.get(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["first"])(ancestorIds)).name + ' › ';
    }

    if (ancestorIds.length === 2) {
      return categories.get(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["first"])(ancestorIds)).name + ' › ' + categories.get(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["last"])(ancestorIds)).name + ' › ';
    }

    return categories.get(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["first"])(ancestorIds)).name + ' … ' + categories.get(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["last"])(ancestorIds)).name + ' › ';
  }

  render() {
    const {
      categories,
      category,
      query
    } = this.props;
    const persistedQuery = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__["getPersistedQuery"])(query);
    return category ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "woocommerce-table__breadcrumbs"
    }, this.getCategoryAncestors(category, categories), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      href: Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__["getNewPath"])(persistedQuery, '/analytics/categories', {
        filter: 'single_category',
        categories: category.id
      }),
      type: "wc-admin"
    }, category.name)) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Spinner"], null);
  }

}

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(120);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_number__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _categories_breadcrumbs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(515);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(510);
/* harmony import */ var _components_report_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(503);
/* harmony import */ var _lib_currency_context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(498);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(528);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_15__);


/**
 * External dependencies
 */











/**
 * Internal dependencies
 */






const manageStock = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_9__[/* getSetting */ "f"])('manageStock', 'no');
const stockStatuses = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_9__[/* getSetting */ "f"])('stockStatuses', {});

class ProductsReportTable extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.getHeadersContent = this.getHeadersContent.bind(this);
    this.getRowsContent = this.getRowsContent.bind(this);
    this.getSummary = this.getSummary.bind(this);
  }

  getHeadersContent() {
    return [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Product title', 'woocommerce-admin'),
      key: 'product_name',
      required: true,
      isLeftAligned: true,
      isSortable: true
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
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Category', 'woocommerce-admin'),
      key: 'product_cat'
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Variations', 'woocommerce-admin'),
      key: 'variations',
      isSortable: true
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
    const persistedQuery = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_6__["getPersistedQuery"])(query);
    const {
      render: renderCurrency,
      formatDecimal: getCurrencyFormatDecimal,
      getCurrencyConfig
    } = this.context;
    const currency = getCurrencyConfig();
    return Object(lodash__WEBPACK_IMPORTED_MODULE_5__["map"])(data, row => {
      const {
        product_id: productId,
        items_sold: itemsSold,
        net_revenue: netRevenue,
        orders_count: ordersCount
      } = row;
      const extendedInfo = row.extended_info || {};
      const {
        category_ids: categoryIds,
        low_stock_amount: lowStockAmount,
        manage_stock: extendedInfoManageStock,
        sku,
        stock_status: extendedInfoStockStatus,
        stock_quantity: stockQuantity,
        variations = []
      } = extendedInfo;
      const name = Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__["decodeEntities"])(extendedInfo.name);
      const ordersLink = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_6__["getNewPath"])(persistedQuery, '/analytics/orders', {
        filter: 'advanced',
        product_includes: productId
      });
      const productDetailLink = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_6__["getNewPath"])(persistedQuery, '/analytics/products', {
        filter: 'single_product',
        products: productId
      });
      const {
        categories
      } = this.props;
      const productCategories = categoryIds && categories && categoryIds.map(categoryId => categories.get(categoryId)).filter(Boolean) || [];
      const stockStatus = Object(_utils__WEBPACK_IMPORTED_MODULE_12__[/* isLowStock */ "a"])(extendedInfoStockStatus, stockQuantity, lowStockAmount) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        href: Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_9__[/* getAdminLink */ "e"])('post.php?action=edit&post=' + productId),
        type: "wp-admin"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])('Low', 'Indication of a low quantity', 'woocommerce-admin')) : stockStatuses[extendedInfoStockStatus];
      return [{
        display: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__["Link"], {
          href: productDetailLink,
          type: "wc-admin"
        }, name),
        value: name
      }, {
        display: sku,
        value: sku
      }, {
        display: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_8__["formatValue"])(currency, 'number', itemsSold),
        value: itemsSold
      }, {
        display: renderCurrency(netRevenue),
        value: getCurrencyFormatDecimal(netRevenue)
      }, {
        display: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__["Link"], {
          href: ordersLink,
          type: "wc-admin"
        }, ordersCount),
        value: ordersCount
      }, {
        display: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          className: "woocommerce-table__product-categories"
        }, productCategories[0] && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_categories_breadcrumbs__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
          category: productCategories[0],
          categories: categories
        }), productCategories.length > 1 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__["Tag"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])('+%d more', 'categories', 'woocommerce-admin'), productCategories.length - 1),
          popoverContents: productCategories.map(category => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_categories_breadcrumbs__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
            category: category,
            categories: categories,
            key: category.id,
            query: query
          }))
        })),
        value: productCategories.map(category => category.name).join(', ')
      }, {
        display: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_8__["formatValue"])(currency, 'number', variations.length),
        value: variations.length
      }, manageStock === 'yes' ? {
        display: extendedInfoManageStock ? stockStatus : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('N/A', 'woocommerce-admin'),
        value: extendedInfoManageStock ? stockStatuses[extendedInfoStockStatus] : null
      } : null, manageStock === 'yes' ? {
        display: extendedInfoManageStock ? Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_8__["formatValue"])(currency, 'number', stockQuantity) : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('N/A', 'woocommerce-admin'),
        value: stockQuantity
      } : null].filter(Boolean);
    });
  }

  getSummary(totals) {
    const {
      products_count: productsCount = 0,
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
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_n"])('Product', 'Products', productsCount, 'woocommerce-admin'),
      value: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_8__["formatValue"])(currency, 'number', productsCount)
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_n"])('Item sold', 'Items sold', itemsSold, 'woocommerce-admin'),
      value: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_8__["formatValue"])(currency, 'number', itemsSold)
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Net sales', 'woocommerce-admin'),
      value: formatAmount(netRevenue)
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_n"])('Orders', 'Orders', ordersCount, 'woocommerce-admin'),
      value: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_8__["formatValue"])(currency, 'number', ordersCount)
    }];
  }

  render() {
    const {
      advancedFilters,
      baseSearchQuery,
      filters,
      hideCompare,
      isRequesting,
      query
    } = this.props;
    const labels = {
      helpText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Check at least two products below to compare', 'woocommerce-admin'),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Search by product name or SKU', 'woocommerce-admin')
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_report_table__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
      compareBy: hideCompare ? undefined : 'products',
      endpoint: "products",
      getHeadersContent: this.getHeadersContent,
      getRowsContent: this.getRowsContent,
      getSummary: this.getSummary,
      summaryFields: ['products_count', 'items_sold', 'net_revenue', 'orders_count'],
      itemIdField: "product_id",
      isRequesting: isRequesting,
      labels: labels,
      query: query,
      searchBy: "products",
      baseSearchQuery: baseSearchQuery,
      tableQuery: {
        orderby: query.orderby || 'items_sold',
        order: query.order || 'desc',
        extended_info: true,
        segmentby: query.segmentby
      },
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Products', 'woocommerce-admin'),
      columnPrefsKey: "products_report_columns",
      filters: filters,
      advancedFilters: advancedFilters
    });
  }

}

ProductsReportTable.contextType = _lib_currency_context__WEBPACK_IMPORTED_MODULE_14__[/* CurrencyContext */ "a"];
/* harmony default export */ __webpack_exports__["a"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])((select, props) => {
  const {
    query,
    isRequesting
  } = props;
  const {
    getItems,
    getItemsError,
    isResolving
  } = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_10__["ITEMS_STORE_NAME"]);

  if (isRequesting || query.search && !(query.products && query.products.length)) {
    return {};
  }

  const tableQuery = {
    per_page: -1
  };
  const categories = getItems('categories', tableQuery);
  const isError = Boolean(getItemsError('categories', tableQuery));
  const isLoading = isResolving('getItems', ['categories', tableQuery]);
  return {
    categories,
    isError,
    isRequesting: isLoading
  };
}))(ProductsReportTable));

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);