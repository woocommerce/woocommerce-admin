(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[12],{

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(556);
/* harmony import */ var _lib_get_selected_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(536);
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(557);
/* harmony import */ var _components_report_chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(534);
/* harmony import */ var _components_report_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(530);
/* harmony import */ var _components_report_summary__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(537);
/* harmony import */ var _variations_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(559);
/* harmony import */ var _components_report_filters__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(532);


/**
 * External dependencies
 */






/**
 * Internal dependencies
 */










class ProductsReport extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  getChartMeta() {
    const {
      query,
      isSingleProductView,
      isSingleProductVariable
    } = this.props;
    const isCompareView = query.filter === 'compare-products' && query.products && query.products.split(',').length > 1;
    const mode = isCompareView || isSingleProductView && isSingleProductVariable ? 'item-comparison' : 'time-comparison';
    const compareObject = isSingleProductView && isSingleProductVariable ? 'variations' : 'products';
    const label = isSingleProductView && isSingleProductVariable ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('%d variations', 'woocommerce-admin') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('%d products', 'woocommerce-admin');
    return {
      compareObject,
      itemsLabel: label,
      mode
    };
  }

  render() {
    const {
      compareObject,
      itemsLabel,
      mode
    } = this.getChartMeta();
    const {
      path,
      query,
      isError,
      isRequesting,
      isSingleProductVariable
    } = this.props;

    if (isError) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_report_error__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null);
    }

    const chartQuery = { ...query
    };

    if (mode === 'item-comparison') {
      chartQuery.segmentby = compareObject === 'products' ? 'product' : 'variation';
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_report_filters__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
      query: query,
      path: path,
      filters: _config__WEBPACK_IMPORTED_MODULE_6__[/* filters */ "c"],
      advancedFilters: _config__WEBPACK_IMPORTED_MODULE_6__[/* advancedFilters */ "a"],
      report: "products"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_report_summary__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
      mode: mode,
      charts: _config__WEBPACK_IMPORTED_MODULE_6__[/* charts */ "b"],
      endpoint: "products",
      isRequesting: isRequesting,
      query: chartQuery,
      selectedChart: Object(_lib_get_selected_chart__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(query.chart, _config__WEBPACK_IMPORTED_MODULE_6__[/* charts */ "b"]),
      filters: _config__WEBPACK_IMPORTED_MODULE_6__[/* filters */ "c"],
      advancedFilters: _config__WEBPACK_IMPORTED_MODULE_6__[/* advancedFilters */ "a"]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_report_chart__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
      charts: _config__WEBPACK_IMPORTED_MODULE_6__[/* charts */ "b"],
      mode: mode,
      filters: _config__WEBPACK_IMPORTED_MODULE_6__[/* filters */ "c"],
      advancedFilters: _config__WEBPACK_IMPORTED_MODULE_6__[/* advancedFilters */ "a"],
      endpoint: "products",
      isRequesting: isRequesting,
      itemsLabel: itemsLabel,
      path: path,
      query: chartQuery,
      selectedChart: Object(_lib_get_selected_chart__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(chartQuery.chart, _config__WEBPACK_IMPORTED_MODULE_6__[/* charts */ "b"])
    }), isSingleProductVariable ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_variations_table__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
      baseSearchQuery: {
        filter: 'single_product'
      },
      isRequesting: isRequesting,
      query: query,
      filters: _config__WEBPACK_IMPORTED_MODULE_6__[/* filters */ "c"],
      advancedFilters: _config__WEBPACK_IMPORTED_MODULE_6__[/* advancedFilters */ "a"]
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_table__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
      isRequesting: isRequesting,
      query: query,
      filters: _config__WEBPACK_IMPORTED_MODULE_6__[/* filters */ "c"],
      advancedFilters: _config__WEBPACK_IMPORTED_MODULE_6__[/* advancedFilters */ "a"]
    }));
  }

}

ProductsReport.propTypes = {
  path: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  query: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withSelect"])((select, props) => {
  const {
    query,
    isRequesting
  } = props;
  const isSingleProductView = !query.search && query.products && query.products.split(',').length === 1;
  const {
    getItems,
    isResolving,
    getItemsError
  } = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["ITEMS_STORE_NAME"]);

  if (isRequesting) {
    return {
      query: { ...query
      },
      isSingleProductView,
      isRequesting
    };
  }

  if (isSingleProductView) {
    const productId = parseInt(query.products, 10);
    const includeArgs = {
      include: productId
    }; // TODO Look at similar usage to populate tags in the Search component.

    const products = getItems('products', includeArgs);
    const isVariable = products && products.get(productId) && products.get(productId).type === 'variable';
    const isProductsRequesting = isResolving('getItems', ['products', includeArgs]);
    const isProductsError = Boolean(getItemsError('products', includeArgs));
    return {
      query: { ...query,
        'is-variable': isVariable
      },
      isSingleProductView,
      isRequesting: isProductsRequesting,
      isSingleProductVariable: isVariable,
      isError: isProductsError
    };
  }

  return {
    query,
    isSingleProductView
  };
}))(ProductsReport));

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

/***/ 540:
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

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryBreadcrumbs; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
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

/***/ 556:
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



const PRODUCTS_REPORT_CHARTS_FILTER = 'woocommerce_admin_products_report_charts';
const PRODUCTS_REPORT_FILTERS_FILTER = 'woocommerce_admin_products_report_filters';
const PRODUCTS_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_products_report_advanced_filters';
const {
  addCesSurveyForAnalytics
} = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["dispatch"])(_customer_effort_score_tracks_data_constants__WEBPACK_IMPORTED_MODULE_4__[/* STORE_KEY */ "c"]);
/**
 * @typedef {import('../index.js').chart} chart
 */

/**
 * Products Report charts filter.
 *
 * @filter woocommerce_admin_products_report_charts
 * @param {Array.<chart>} charts Report charts.
 */

const charts = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(PRODUCTS_REPORT_CHARTS_FILTER, [{
  key: 'items_sold',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Items sold', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'items_sold',
  type: 'number'
}, {
  key: 'net_revenue',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Net sales', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'net_revenue',
  type: 'currency'
}, {
  key: 'orders_count',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Orders', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'orders_count',
  type: 'number'
}]);
const filterConfig = {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Show', 'woocommerce-admin'),
  staticParams: ['chartType', 'paged', 'per_page'],
  param: 'filter',
  showFilters: () => true,
  filters: [{
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('All products', 'woocommerce-admin'),
    value: 'all'
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Single product', 'woocommerce-admin'),
    value: 'select_product',
    chartMode: 'item-comparison',
    subFilters: [{
      component: 'Search',
      value: 'single_product',
      chartMode: 'item-comparison',
      path: ['select_product'],
      settings: {
        type: 'products',
        param: 'products',
        getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_3__[/* getProductLabels */ "d"],
        labels: {
          placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Type to search for a product', 'woocommerce-admin'),
          button: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Single product', 'woocommerce-admin')
        }
      }
    }]
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Comparison', 'woocommerce-admin'),
    value: 'compare-products',
    chartMode: 'item-comparison',
    settings: {
      type: 'products',
      param: 'products',
      getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_3__[/* getProductLabels */ "d"],
      labels: {
        helpText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Check at least two products below to compare', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search for products to compare', 'woocommerce-admin'),
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Compare Products', 'woocommerce-admin'),
        update: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Compare', 'woocommerce-admin')
      },
      onClick: addCesSurveyForAnalytics
    }
  }]
};
const variationsConfig = {
  showFilters: query => query.filter === 'single_product' && !!query.products && query['is-variable'],
  staticParams: ['filter', 'products', 'chartType', 'paged', 'per_page'],
  param: 'filter-variations',
  filters: [{
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('All variations', 'woocommerce-admin'),
    chartMode: 'item-comparison',
    value: 'all'
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Single variation', 'woocommerce-admin'),
    value: 'select_variation',
    subFilters: [{
      component: 'Search',
      value: 'single_variation',
      path: ['select_variation'],
      settings: {
        type: 'variations',
        param: 'variations',
        getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_3__[/* getVariationLabels */ "g"],
        labels: {
          placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Type to search for a variation', 'woocommerce-admin'),
          button: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Single variation', 'woocommerce-admin')
        }
      }
    }]
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Comparison', 'woocommerce-admin'),
    chartMode: 'item-comparison',
    value: 'compare-variations',
    settings: {
      type: 'variations',
      param: 'variations',
      getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_3__[/* getVariationLabels */ "g"],
      labels: {
        helpText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Check at least two variations below to compare', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search for variations to compare', 'woocommerce-admin'),
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Compare Variations', 'woocommerce-admin'),
        update: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Compare', 'woocommerce-admin')
      }
    }
  }]
};
/**
 * Produts Report Advanced Filters.
 *
 * @filter woocommerce_admin_products_report_advanced_filters
 * @param {Object} advancedFilters Report Advanced Filters.
 * @param {string} advancedFilters.title Interpolated component string for Advanced Filters title.
 * @param {Object} advancedFilters.filters An object specifying a report's Advanced Filters.
 */

const advancedFilters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(PRODUCTS_REPORT_ADVANCED_FILTERS_FILTER, {
  filters: {},
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Products Match {{select /}} Filters', 'A sentence describing filters for Products. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ', 'woocommerce-admin')
});

if (Object.keys(advancedFilters.filters).length) {
  filterConfig.filters.push({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Advanced Filters', 'woocommerce-admin'),
    value: 'advanced'
  });
  variationsConfig.filters.push({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Advanced Filters', 'woocommerce-admin'),
    value: 'advanced'
  });
}
/**
 * @typedef {import('../index.js').filter} filter
 */

/**
 * Products Report Filters.
 *
 * @filter woocommerce_admin_products_report_filters
 * @param {Array.<filter>} filters Report filters.
 */


const filters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(PRODUCTS_REPORT_FILTERS_FILTER, [filterConfig, variationsConfig]);

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(122);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_number__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _categories_breadcrumbs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(547);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(540);
/* harmony import */ var _components_report_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(533);
/* harmony import */ var _lib_currency_context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(527);
/* harmony import */ var _utils_admin_settings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(558);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_16__);


/**
 * External dependencies
 */











/**
 * Internal dependencies
 */







const manageStock = Object(_utils_admin_settings__WEBPACK_IMPORTED_MODULE_15__[/* getAdminSetting */ "d"])('manageStock', 'no');
const stockStatuses = Object(_utils_admin_settings__WEBPACK_IMPORTED_MODULE_15__[/* getAdminSetting */ "d"])('stockStatuses', {});

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

  getRowsContent() {
    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
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
        href: Object(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_9__["getAdminLink"])('post.php?action=edit&post=' + productId),
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

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(122);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_number__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_report_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(533);
/* harmony import */ var _products_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(540);
/* harmony import */ var _lib_currency_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(527);
/* harmony import */ var _lib_async_requests__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(528);
/* harmony import */ var _utils_admin_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23);


/**
 * External dependencies
 */








/**
 * Internal dependencies
 */






const EXPERIMENTAL_VARIATIONS_REPORT_TABLE_TITLE_FILTER = 'experimental_woocommerce_admin_variations_report_table_title';
const EXPERIMENTAL_VARIATIONS_REPORT_TABLE_SUMMARY_VARIATIONS_COUNT_LABEL_FILTER = 'experimental_woocommerce_admin_variations_report_table_summary_variations_count_label';
const manageStock = Object(_utils_admin_settings__WEBPACK_IMPORTED_MODULE_12__[/* getAdminSetting */ "d"])('manageStock', 'no');
const stockStatuses = Object(_utils_admin_settings__WEBPACK_IMPORTED_MODULE_12__[/* getAdminSetting */ "d"])('stockStatuses', {});

const getFullVariationName = rowData => Object(_lib_async_requests__WEBPACK_IMPORTED_MODULE_11__[/* getVariationName */ "h"])(rowData.extended_info || {});

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

  getRowsContent() {
    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    const {
      query
    } = this.props;
    const persistedQuery = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__["getPersistedQuery"])(query);
    const {
      formatAmount,
      formatDecimal: getCurrencyFormatDecimal,
      getCurrencyConfig
    } = this.context;
    return Object(lodash__WEBPACK_IMPORTED_MODULE_3__["map"])(data, row => {
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
        deleted,
        sku
      } = extendedInfo;
      const name = getFullVariationName(row);
      const ordersLink = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__["getNewPath"])(persistedQuery, '/analytics/orders', {
        filter: 'advanced',
        variation_includes: variationId
      });
      const editPostLink = Object(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_7__["getAdminLink"])(`post.php?post=${productId}&action=edit`);
      return [{
        display: deleted ? name + ' ' + Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('(Deleted)', ' woocommerce-admin') : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_4__["Link"], {
          href: editPostLink,
          type: "wp-admin"
        }, name),
        value: name
      }, {
        display: sku,
        value: sku
      }, {
        display: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_6__["formatValue"])(getCurrencyConfig(), 'number', itemsSold),
        value: itemsSold
      }, {
        display: formatAmount(netRevenue),
        value: getCurrencyFormatDecimal(netRevenue)
      }, {
        display: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_4__["Link"], {
          href: ordersLink,
          type: "wc-admin"
        }, ordersCount),
        value: ordersCount
      }, manageStock === 'yes' ? {
        display: Object(_products_utils__WEBPACK_IMPORTED_MODULE_9__[/* isLowStock */ "a"])(stockStatus, stockQuantity, lowStockAmount) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_4__["Link"], {
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
      query
    } = this.props;
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
      /**
       * Experimental: Filter the label used for the number of variations in the report table summary.
       *
       * @filter experimental_woocommerce_admin_variations_report_table_summary_variations_count_label
       *
       * @param {string} label Label used for the count.
       * @param {string} variationsCount Number of variations.
       * @param {Array} query Query parameters.
       */
      label: Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__["applyFilters"])(EXPERIMENTAL_VARIATIONS_REPORT_TABLE_SUMMARY_VARIATIONS_COUNT_LABEL_FILTER, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_n"])('variation sold', 'variations sold', variationsCount, 'woocommerce-admin'), variationsCount, query),
      value: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_6__["formatValue"])(currency, 'number', variationsCount)
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_n"])('item sold', 'items sold', itemsSold, 'woocommerce-admin'),
      value: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_6__["formatValue"])(currency, 'number', itemsSold)
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('net sales', 'woocommerce-admin'),
      value: formatAmount(netRevenue)
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_n"])('orders', 'orders', ordersCount, 'woocommerce-admin'),
      value: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_6__["formatValue"])(currency, 'number', ordersCount)
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
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_report_table__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
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
        product_includes: query.product_includes,
        variations: query.variations
      }
      /**
       * Experimental: Filter the title used for the report table.
       *
       * @filter experimental_woocommerce_admin_variations_report_table_title
       *
       * @param {string} title Title used for the report table.
       * @param {Array} query Query parameters.
       */
      ,
      title: Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__["applyFilters"])(EXPERIMENTAL_VARIATIONS_REPORT_TABLE_TITLE_FILTER, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Variations', 'woocommerce-admin'), query),
      columnPrefsKey: "variations_report_columns",
      filters: filters,
      advancedFilters: advancedFilters
    });
  }

}

VariationsReportTable.contextType = _lib_currency_context__WEBPACK_IMPORTED_MODULE_10__[/* CurrencyContext */ "a"];
/* harmony default export */ __webpack_exports__["a"] = (VariationsReportTable);

/***/ })

}]);