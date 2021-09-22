(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[23],{

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(5);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external {"this":["wp","hooks"]}
var external_this_wp_hooks_ = __webpack_require__(55);

// EXTERNAL MODULE: ./client/lib/async-requests/index.js
var async_requests = __webpack_require__(764);

// CONCATENATED MODULE: ./client/analytics/report/variations/config.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


var VARIATIONS_REPORT_CHARTS_FILTER = 'woocommerce_admin_variations_report_charts';
var VARIATIONS_REPORT_FILTERS_FILTER = 'woocommerce_admin_variations_report_filters';
var VARIATIONS_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_variations_report_advanced_filters';
var charts = Object(external_this_wp_hooks_["applyFilters"])(VARIATIONS_REPORT_CHARTS_FILTER, [{
  key: 'items_sold',
  label: Object(external_this_wp_i18n_["__"])('Items Sold', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'items_sold',
  type: 'number'
}, {
  key: 'net_revenue',
  label: Object(external_this_wp_i18n_["__"])('Net Sales', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'net_revenue',
  type: 'currency'
}, {
  key: 'orders_count',
  label: Object(external_this_wp_i18n_["__"])('Orders', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'orders_count',
  type: 'number'
}]);
var filters = Object(external_this_wp_hooks_["applyFilters"])(VARIATIONS_REPORT_FILTERS_FILTER, [{
  label: Object(external_this_wp_i18n_["__"])('Show', 'woocommerce-admin'),
  staticParams: ['chartType', 'paged', 'per_page'],
  param: 'filter-variations',
  showFilters: function showFilters() {
    return true;
  },
  filters: [{
    label: Object(external_this_wp_i18n_["__"])('All Variations', 'woocommerce-admin'),
    chartMode: 'item-comparison',
    value: 'all'
  }, {
    label: Object(external_this_wp_i18n_["__"])('Single Variation', 'woocommerce-admin'),
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
          placeholder: Object(external_this_wp_i18n_["__"])('Type to search for a variation', 'woocommerce-admin'),
          button: Object(external_this_wp_i18n_["__"])('Single Variation', 'woocommerce-admin')
        }
      }
    }]
  }, {
    label: Object(external_this_wp_i18n_["__"])('Comparison', 'woocommerce-admin'),
    chartMode: 'item-comparison',
    value: 'compare-variations',
    settings: {
      type: 'variations',
      param: 'variations',
      getLabels: async_requests["g" /* getVariationLabels */],
      labels: {
        helpText: Object(external_this_wp_i18n_["__"])('Check at least two variations below to compare', 'woocommerce-admin'),
        placeholder: Object(external_this_wp_i18n_["__"])('Search for variations to compare', 'woocommerce-admin'),
        title: Object(external_this_wp_i18n_["__"])('Compare Variations', 'woocommerce-admin'),
        update: Object(external_this_wp_i18n_["__"])('Compare', 'woocommerce-admin')
      }
    }
  }, {
    label: Object(external_this_wp_i18n_["__"])('Advanced Filters', 'woocommerce-admin'),
    value: 'advanced'
  }]
}]);
var advancedFilters = Object(external_this_wp_hooks_["applyFilters"])(VARIATIONS_REPORT_ADVANCED_FILTERS_FILTER, {
  title: Object(external_this_wp_i18n_["_x"])('Variations Match {{select /}} Filters', 'A sentence describing filters for Variations. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ', 'woocommerce-admin'),
  filters: {
    attribute: {
      allowMultiple: true,
      labels: {
        add: Object(external_this_wp_i18n_["__"])('Attribute', 'woocommerce-admin'),
        placeholder: Object(external_this_wp_i18n_["__"])('Search attributes', 'woocommerce-admin'),
        remove: Object(external_this_wp_i18n_["__"])('Remove attribute filter', 'woocommerce-admin'),
        rule: Object(external_this_wp_i18n_["__"])('Select a product attribute filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: Object(external_this_wp_i18n_["__"])('{{title}}Attribute{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(external_this_wp_i18n_["__"])('Select attributes', 'woocommerce-admin')
      },
      rules: [{
        value: 'is',

        /* translators: Sentence fragment, logical, "Is" refers to searching for product variations matching a chosen attribute. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(external_this_wp_i18n_["_x"])('Is', 'product attribute', 'woocommerce-admin')
      }, {
        value: 'is_not',

        /* translators: Sentence fragment, logical, "Is Not" refers to searching for product variations that don\'t match a chosen attribute. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(external_this_wp_i18n_["_x"])('Is Not', 'product attribute', 'woocommerce-admin')
      }],
      input: {
        component: 'ProductAttribute'
      }
    },
    category: {
      labels: {
        add: Object(external_this_wp_i18n_["__"])('Categories', 'woocommerce-admin'),
        placeholder: Object(external_this_wp_i18n_["__"])('Search categories', 'woocommerce-admin'),
        remove: Object(external_this_wp_i18n_["__"])('Remove categories filter', 'woocommerce-admin'),
        rule: Object(external_this_wp_i18n_["__"])('Select a category filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a Category filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: Object(external_this_wp_i18n_["__"])('{{title}}Category{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(external_this_wp_i18n_["__"])('Select categories', 'woocommerce-admin')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to variations including a given category. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(external_this_wp_i18n_["_x"])('Includes', 'categories', 'woocommerce-admin')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to variations excluding a given category. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(external_this_wp_i18n_["_x"])('Excludes', 'categories', 'woocommerce-admin')
      }],
      input: {
        component: 'Search',
        type: 'categories',
        getLabels: async_requests["a" /* getCategoryLabels */]
      }
    },
    product: {
      labels: {
        add: Object(external_this_wp_i18n_["__"])('Products', 'woocommerce-admin'),
        placeholder: Object(external_this_wp_i18n_["__"])('Search products', 'woocommerce-admin'),
        remove: Object(external_this_wp_i18n_["__"])('Remove products filter', 'woocommerce-admin'),
        rule: Object(external_this_wp_i18n_["__"])('Select a product filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: Object(external_this_wp_i18n_["__"])('{{title}}Product{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(external_this_wp_i18n_["__"])('Select products', 'woocommerce-admin')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to orders including a given product(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(external_this_wp_i18n_["_x"])('Includes', 'products', 'woocommerce-admin')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to orders excluding a given product(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(external_this_wp_i18n_["_x"])('Excludes', 'products', 'woocommerce-admin')
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
var get_selected_chart = __webpack_require__(768);

// EXTERNAL MODULE: ./client/analytics/components/report-chart/index.js + 1 modules
var report_chart = __webpack_require__(766);

// EXTERNAL MODULE: ./client/analytics/components/report-error/index.js
var report_error = __webpack_require__(763);

// EXTERNAL MODULE: ./client/analytics/components/report-summary/index.js
var report_summary = __webpack_require__(769);

// EXTERNAL MODULE: ./client/analytics/report/variations/table.js
var table = __webpack_require__(788);

// EXTERNAL MODULE: ./client/analytics/components/report-filters/index.js
var report_filters = __webpack_require__(770);

// CONCATENATED MODULE: ./client/analytics/report/variations/index.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */









var variations_getChartMeta = function getChartMeta(_ref) {
  var query = _ref.query;
  var isCompareView = query['filter-variations'] === 'compare-variations' && query.variations && query.variations.split(',').length > 1;
  return {
    compareObject: 'variations',
    itemsLabel: Object(external_this_wp_i18n_["__"])('%d variations', 'woocommerce-admin'),
    mode: isCompareView ? 'item-comparison' : 'time-comparison'
  };
};

var variations_VariationsReport = function VariationsReport(props) {
  var _getChartMeta = variations_getChartMeta(props),
      itemsLabel = _getChartMeta.itemsLabel,
      mode = _getChartMeta.mode;

  var path = props.path,
      query = props.query,
      isError = props.isError,
      isRequesting = props.isRequesting;

  if (isError) {
    return Object(external_this_wp_element_["createElement"])(report_error["a" /* default */], {
      isError: true
    });
  }

  var chartQuery = _objectSpread({}, query);

  if (mode === 'item-comparison') {
    chartQuery.segmentby = 'variation';
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(report_filters["a" /* default */], {
    query: query,
    path: path,
    filters: filters,
    advancedFilters: advancedFilters,
    report: "variations"
  }), Object(external_this_wp_element_["createElement"])(report_summary["a" /* default */], {
    mode: mode,
    charts: charts,
    endpoint: "variations",
    isRequesting: isRequesting,
    query: chartQuery,
    selectedChart: Object(get_selected_chart["a" /* default */])(query.chart, charts),
    filters: filters,
    advancedFilters: advancedFilters
  }), Object(external_this_wp_element_["createElement"])(report_chart["a" /* default */], {
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
  }), Object(external_this_wp_element_["createElement"])(table["a" /* default */], {
    isRequesting: isRequesting,
    query: query,
    filters: filters,
    advancedFilters: advancedFilters
  }));
};

variations_VariationsReport.propTypes = {
  path: prop_types_default.a.string.isRequired,
  query: prop_types_default.a.object.isRequired
};
/* harmony default export */ var variations = __webpack_exports__["default"] = (variations_VariationsReport);

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getRequestByIdString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCategoryLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCouponLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCustomerLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getProductLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getTaxRateLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getVariationName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getVariationLabels; });
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);
/* harmony import */ var _analytics_report_taxes_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(765);
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
  var handleData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : lodash__WEBPACK_IMPORTED_MODULE_2__["identity"];
  return function () {
    var queryString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var query = arguments.length > 1 ? arguments[1] : undefined;
    var pathString = typeof path === 'function' ? path(query) : path;
    var idList = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__["getIdsFromQuery"])(queryString);

    if (idList.length < 1) {
      return Promise.resolve([]);
    }

    var payload = {
      include: idList.join(','),
      per_page: idList.length
    };
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__["addQueryArgs"])(pathString, payload)
    }).then(function (data) {
      return data.map(handleData);
    });
  };
}
var getCategoryLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"] + '/products/categories', function (category) {
  return {
    key: category.id,
    label: category.name
  };
});
var getCouponLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"] + '/coupons', function (coupon) {
  return {
    key: coupon.id,
    label: coupon.code
  };
});
var getCustomerLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"] + '/customers', function (customer) {
  return {
    key: customer.id,
    label: customer.name
  };
});
var getProductLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"] + '/products', function (product) {
  return {
    key: product.id,
    label: product.name
  };
});
var getTaxRateLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"] + '/taxes', function (taxRate) {
  return {
    key: taxRate.id,
    label: Object(_analytics_report_taxes_utils__WEBPACK_IMPORTED_MODULE_6__[/* getTaxCode */ "a"])(taxRate)
  };
});
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
  var attributes = _ref.attributes,
      name = _ref.name;
  var separator = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_5__[/* getSetting */ "g"])('variationTitleAttributesSeparator', ' - ');

  if (name.indexOf(separator) > -1) {
    return name;
  }

  var attributeList = attributes.map(function (_ref2) {
    var option = _ref2.option;
    return option;
  }).join(', ');
  return attributeList ? name + separator + attributeList : name;
}
var getVariationLabels = getRequestByIdString(function (_ref3) {
  var products = _ref3.products;

  // If a product was specified, get just its variations.
  if (products) {
    return _woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"] + "/products/".concat(products, "/variations");
  }

  return _woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"] + '/variations';
}, function (variation) {
  return {
    key: variation.id,
    label: getVariationName(variation)
  };
});

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTaxCode; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

function getTaxCode(tax) {
  return [tax.country, tax.state, tax.name || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('TAX', 'woocommerce-admin'), tax.priority].map(function (item) {
    return item.toString().toUpperCase().trim();
  }).filter(Boolean).join('-');
}

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: ReportChart

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(5);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(17);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(15);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(18);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(19);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/compose.js
var compose = __webpack_require__(277);

// EXTERNAL MODULE: ./node_modules/@wordpress/date/build-module/index.js
var build_module = __webpack_require__(154);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(20);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external {"this":["wc","components"]}
var external_this_wc_components_ = __webpack_require__(77);

// EXTERNAL MODULE: external {"this":["wc","data"]}
var external_this_wc_data_ = __webpack_require__(35);

// EXTERNAL MODULE: external {"this":["wc","date"]}
var external_this_wc_date_ = __webpack_require__(40);

// EXTERNAL MODULE: ./client/lib/currency-context.js
var currency_context = __webpack_require__(762);

// EXTERNAL MODULE: ./client/analytics/components/report-error/index.js
var report_error = __webpack_require__(763);

// EXTERNAL MODULE: external {"this":["wc","navigation"]}
var external_this_wc_navigation_ = __webpack_require__(32);

// CONCATENATED MODULE: ./client/analytics/components/report-chart/utils.js
/**
 * External dependencies
 */


var DEFAULT_FILTER = 'all';
function getSelectedFilter(filters, query) {
  var selectedFilterArgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!filters || filters.length === 0) {
    return null;
  }

  var clonedFilters = filters.slice(0);
  var filterConfig = clonedFilters.pop();

  if (filterConfig.showFilters(query, selectedFilterArgs)) {
    var allFilters = Object(external_this_wc_navigation_["flattenFilters"])(filterConfig.filters);
    var value = query[filterConfig.param] || filterConfig.defaultValue || DEFAULT_FILTER;
    return Object(external_lodash_["find"])(allFilters, {
      value: value
    });
  }

  return getSelectedFilter(clonedFilters, query, selectedFilterArgs);
}
function getChartMode(selectedFilter, query) {
  if (selectedFilter && query) {
    var selectedFilterParam = Object(external_lodash_["get"])(selectedFilter, ['settings', 'param']);

    if (!selectedFilterParam || Object.keys(query).includes(selectedFilterParam)) {
      return Object(external_lodash_["get"])(selectedFilter, ['chartMode']);
    }
  }

  return null;
}
// CONCATENATED MODULE: ./client/analytics/components/report-chart/index.js








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */










/**
 * Internal dependencies
 */




/**
 * Component that renders the chart in reports.
 */

var report_chart_ReportChart = /*#__PURE__*/function (_Component) {
  inherits_default()(ReportChart, _Component);

  var _super = _createSuper(ReportChart);

  function ReportChart() {
    classCallCheck_default()(this, ReportChart);

    return _super.apply(this, arguments);
  }

  createClass_default()(ReportChart, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (nextProps.isRequesting !== this.props.isRequesting || nextProps.primaryData.isRequesting !== this.props.primaryData.isRequesting || nextProps.secondaryData.isRequesting !== this.props.secondaryData.isRequesting || !Object(external_lodash_["isEqual"])(nextProps.query, this.props.query)) {
        return true;
      }

      return false;
    }
  }, {
    key: "getItemChartData",
    value: function getItemChartData() {
      var _this$props = this.props,
          primaryData = _this$props.primaryData,
          selectedChart = _this$props.selectedChart;
      var chartData = primaryData.data.intervals.map(function (interval) {
        var intervalData = {};
        interval.subtotals.segments.forEach(function (segment) {
          if (segment.segment_label) {
            var label = intervalData[segment.segment_label] ? segment.segment_label + ' (#' + segment.segment_id + ')' : segment.segment_label;
            intervalData[segment.segment_id] = {
              label: label,
              value: segment.subtotals[selectedChart.key] || 0
            };
          }
        });
        return _objectSpread({
          date: Object(build_module["a" /* format */])('Y-m-d\\TH:i:s', interval.date_start)
        }, intervalData);
      });
      return chartData;
    }
  }, {
    key: "getTimeChartData",
    value: function getTimeChartData() {
      var _this$props2 = this.props,
          query = _this$props2.query,
          primaryData = _this$props2.primaryData,
          secondaryData = _this$props2.secondaryData,
          selectedChart = _this$props2.selectedChart,
          defaultDateRange = _this$props2.defaultDateRange;
      var currentInterval = Object(external_this_wc_date_["getIntervalForQuery"])(query);

      var _getCurrentDates = Object(external_this_wc_date_["getCurrentDates"])(query, defaultDateRange),
          primary = _getCurrentDates.primary,
          secondary = _getCurrentDates.secondary;

      var chartData = primaryData.data.intervals.map(function (interval, index) {
        var secondaryDate = Object(external_this_wc_date_["getPreviousDate"])(interval.date_start, primary.after, secondary.after, query.compare, currentInterval);
        var secondaryInterval = secondaryData.data.intervals[index];
        return {
          date: Object(build_module["a" /* format */])('Y-m-d\\TH:i:s', interval.date_start),
          primary: {
            label: "".concat(primary.label, " (").concat(primary.range, ")"),
            labelDate: interval.date_start,
            value: interval.subtotals[selectedChart.key] || 0
          },
          secondary: {
            label: "".concat(secondary.label, " (").concat(secondary.range, ")"),
            labelDate: secondaryDate.format('YYYY-MM-DD HH:mm:ss'),
            value: secondaryInterval && secondaryInterval.subtotals[selectedChart.key] || 0
          }
        };
      });
      return chartData;
    }
  }, {
    key: "getTimeChartTotals",
    value: function getTimeChartTotals() {
      var _this$props3 = this.props,
          primaryData = _this$props3.primaryData,
          secondaryData = _this$props3.secondaryData,
          selectedChart = _this$props3.selectedChart;
      return {
        primary: Object(external_lodash_["get"])(primaryData, ['data', 'totals', selectedChart.key], null),
        secondary: Object(external_lodash_["get"])(secondaryData, ['data', 'totals', selectedChart.key], null)
      };
    }
  }, {
    key: "renderChart",
    value: function renderChart(mode, isRequesting, chartData, legendTotals) {
      var _this$props4 = this.props,
          emptySearchResults = _this$props4.emptySearchResults,
          filterParam = _this$props4.filterParam,
          interactiveLegend = _this$props4.interactiveLegend,
          itemsLabel = _this$props4.itemsLabel,
          legendPosition = _this$props4.legendPosition,
          path = _this$props4.path,
          query = _this$props4.query,
          selectedChart = _this$props4.selectedChart,
          showHeaderControls = _this$props4.showHeaderControls,
          primaryData = _this$props4.primaryData;
      var currentInterval = Object(external_this_wc_date_["getIntervalForQuery"])(query);
      var allowedIntervals = Object(external_this_wc_date_["getAllowedIntervalsForQuery"])(query);
      var formats = Object(external_this_wc_date_["getDateFormatsForInterval"])(currentInterval, primaryData.data.intervals.length);
      var emptyMessage = emptySearchResults ? Object(external_this_wp_i18n_["__"])('No data for the current search', 'woocommerce-admin') : Object(external_this_wp_i18n_["__"])('No data for the selected date range', 'woocommerce-admin');
      var _this$context = this.context,
          formatAmount = _this$context.formatAmount,
          getCurrencyConfig = _this$context.getCurrencyConfig;
      return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Chart"], {
        allowedIntervals: allowedIntervals,
        data: chartData,
        dateParser: '%Y-%m-%dT%H:%M:%S',
        emptyMessage: emptyMessage,
        filterParam: filterParam,
        interactiveLegend: interactiveLegend,
        interval: currentInterval,
        isRequesting: isRequesting,
        itemsLabel: itemsLabel,
        legendPosition: legendPosition,
        legendTotals: legendTotals,
        mode: mode,
        path: path,
        query: query,
        screenReaderFormat: formats.screenReaderFormat,
        showHeaderControls: showHeaderControls,
        title: selectedChart.label,
        tooltipLabelFormat: formats.tooltipLabelFormat,
        tooltipTitle: mode === 'time-comparison' && selectedChart.label || null,
        tooltipValueFormat: Object(external_this_wc_data_["getTooltipValueFormat"])(selectedChart.type, formatAmount),
        chartType: Object(external_this_wc_date_["getChartTypeForQuery"])(query),
        valueType: selectedChart.type,
        xFormat: formats.xFormat,
        x2Format: formats.x2Format,
        currency: getCurrencyConfig()
      });
    }
  }, {
    key: "renderItemComparison",
    value: function renderItemComparison() {
      var _this$props5 = this.props,
          isRequesting = _this$props5.isRequesting,
          primaryData = _this$props5.primaryData;

      if (primaryData.isError) {
        return Object(external_this_wp_element_["createElement"])(report_error["a" /* default */], {
          isError: true
        });
      }

      var isChartRequesting = isRequesting || primaryData.isRequesting;
      var chartData = this.getItemChartData();
      return this.renderChart('item-comparison', isChartRequesting, chartData);
    }
  }, {
    key: "renderTimeComparison",
    value: function renderTimeComparison() {
      var _this$props6 = this.props,
          isRequesting = _this$props6.isRequesting,
          primaryData = _this$props6.primaryData,
          secondaryData = _this$props6.secondaryData;

      if (!primaryData || primaryData.isError || secondaryData.isError) {
        return Object(external_this_wp_element_["createElement"])(report_error["a" /* default */], {
          isError: true
        });
      }

      var isChartRequesting = isRequesting || primaryData.isRequesting || secondaryData.isRequesting;
      var chartData = this.getTimeChartData();
      var legendTotals = this.getTimeChartTotals();
      return this.renderChart('time-comparison', isChartRequesting, chartData, legendTotals);
    }
  }, {
    key: "render",
    value: function render() {
      var mode = this.props.mode;

      if (mode === 'item-comparison') {
        return this.renderItemComparison();
      }

      return this.renderTimeComparison();
    }
  }]);

  return ReportChart;
}(external_this_wp_element_["Component"]);
report_chart_ReportChart.contextType = currency_context["a" /* CurrencyContext */];
report_chart_ReportChart.propTypes = {
  /**
   * Filters available for that report.
   */
  filters: prop_types_default.a.array,

  /**
   * Whether there is an API call running.
   */
  isRequesting: prop_types_default.a.bool,

  /**
   * Label describing the legend items.
   */
  itemsLabel: prop_types_default.a.string,

  /**
   * Allows specifying properties different from the `endpoint` that will be used
   * to limit the items when there is an active search.
   */
  limitProperties: prop_types_default.a.array,

  /**
   * `items-comparison` (default) or `time-comparison`, this is used to generate correct
   * ARIA properties.
   */
  mode: prop_types_default.a.string,

  /**
   * Current path
   */
  path: prop_types_default.a.string.isRequired,

  /**
   * Primary data to display in the chart.
   */
  primaryData: prop_types_default.a.object,

  /**
   * The query string represented in object form.
   */
  query: prop_types_default.a.object.isRequired,

  /**
   * Secondary data to display in the chart.
   */
  secondaryData: prop_types_default.a.object,

  /**
   * Properties of the selected chart.
   */
  selectedChart: prop_types_default.a.shape({
    /**
     * Key of the selected chart.
     */
    key: prop_types_default.a.string.isRequired,

    /**
     * Chart label.
     */
    label: prop_types_default.a.string.isRequired,

    /**
     * Order query argument.
     */
    order: prop_types_default.a.oneOf(['asc', 'desc']),

    /**
     * Order by query argument.
     */
    orderby: prop_types_default.a.string,

    /**
     * Number type for formatting.
     */
    type: prop_types_default.a.oneOf(['average', 'number', 'currency']).isRequired
  }).isRequired
};
report_chart_ReportChart.defaultProps = {
  isRequesting: false,
  primaryData: {
    data: {
      intervals: []
    },
    isError: false,
    isRequesting: false
  },
  secondaryData: {
    data: {
      intervals: []
    },
    isError: false,
    isRequesting: false
  }
};
/* harmony default export */ var report_chart = __webpack_exports__["a"] = (Object(compose["a" /* default */])(Object(external_this_wp_data_["withSelect"])(function (select, props) {
  var charts = props.charts,
      endpoint = props.endpoint,
      filters = props.filters,
      isRequesting = props.isRequesting,
      limitProperties = props.limitProperties,
      query = props.query,
      advancedFilters = props.advancedFilters;
  var limitBy = limitProperties || [endpoint];
  var selectedFilter = getSelectedFilter(filters, query);
  var filterParam = Object(external_lodash_["get"])(selectedFilter, ['settings', 'param']);
  var chartMode = props.mode || getChartMode(selectedFilter, query) || 'time-comparison';

  var _select$getSetting = select(external_this_wc_data_["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings'),
      defaultDateRange = _select$getSetting.woocommerce_default_date_range;

  var newProps = {
    mode: chartMode,
    filterParam: filterParam,
    defaultDateRange: defaultDateRange
  };

  if (isRequesting) {
    return newProps;
  }

  var hasLimitByParam = limitBy.some(function (item) {
    return query[item] && query[item].length;
  });

  if (query.search && !hasLimitByParam) {
    return _objectSpread(_objectSpread({}, newProps), {}, {
      emptySearchResults: true
    });
  }

  var fields = charts && charts.map(function (chart) {
    return chart.key;
  });
  var primaryData = Object(external_this_wc_data_["getReportChartData"])({
    endpoint: endpoint,
    dataType: 'primary',
    query: query,
    select: select,
    limitBy: limitBy,
    filters: filters,
    advancedFilters: advancedFilters,
    defaultDateRange: defaultDateRange,
    fields: fields
  });

  if (chartMode === 'item-comparison') {
    return _objectSpread(_objectSpread({}, newProps), {}, {
      primaryData: primaryData
    });
  }

  var secondaryData = Object(external_this_wc_data_["getReportChartData"])({
    endpoint: endpoint,
    dataType: 'secondary',
    query: query,
    select: select,
    limitBy: limitBy,
    filters: filters,
    advancedFilters: advancedFilters,
    defaultDateRange: defaultDateRange,
    fields: fields
  });
  return _objectSpread(_objectSpread({}, newProps), {}, {
    primaryData: primaryData,
    secondaryData: secondaryData
  });
}))(report_chart_ReportChart));

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSelectedChart; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Takes a chart name returns the configuration for that chart from and array
 * of charts. If the chart is not found it will return the first chart.
 *
 * @param {string} chartName - the name of the chart to get configuration for
 * @param {Array} charts - list of charts for a particular report
 * @return {Object} - chart configuration object
 */

function getSelectedChart(chartName) {
  var charts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var chart = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["find"])(charts, {
    key: chartName
  });

  if (chart) {
    return chart;
  }

  return charts[0];
}

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ReportSummary */
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(277);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(77);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(298);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_number__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(35);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(40);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_date__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(64);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _report_error__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(763);
/* harmony import */ var _lib_currency_context__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(762);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */











/**
 * Internal dependencies
 */



/**
 * Component to render summary numbers in reports.
 */

var ReportSummary = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ReportSummary, _Component);

  var _super = _createSuper(ReportSummary);

  function ReportSummary() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ReportSummary);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ReportSummary, [{
    key: "formatVal",
    value: function formatVal(val, type) {
      var _this$context = this.context,
          formatAmount = _this$context.formatAmount,
          getCurrencyConfig = _this$context.getCurrencyConfig;
      return type === 'currency' ? formatAmount(val) : Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_12__["formatValue"])(getCurrencyConfig(), type, val);
    }
  }, {
    key: "getValues",
    value: function getValues(key, type) {
      var _this$props = this.props,
          emptySearchResults = _this$props.emptySearchResults,
          summaryData = _this$props.summaryData;
      var totals = summaryData.totals;
      var primaryTotal = totals.primary ? totals.primary[key] : 0;
      var secondaryTotal = totals.secondary ? totals.secondary[key] : 0;
      var primaryValue = emptySearchResults ? 0 : primaryTotal;
      var secondaryValue = emptySearchResults ? 0 : secondaryTotal;
      return {
        delta: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_12__["calculateDelta"])(primaryValue, secondaryValue),
        prevValue: this.formatVal(secondaryValue, type),
        value: this.formatVal(primaryValue, type)
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          charts = _this$props2.charts,
          query = _this$props2.query,
          selectedChart = _this$props2.selectedChart,
          summaryData = _this$props2.summaryData,
          endpoint = _this$props2.endpoint,
          report = _this$props2.report,
          defaultDateRange = _this$props2.defaultDateRange;
      var isError = summaryData.isError,
          isRequesting = summaryData.isRequesting;

      if (isError) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_report_error__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
          isError: true
        });
      }

      if (isRequesting) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_11__["SummaryListPlaceholder"], {
          numberOfItems: charts.length
        });
      }

      var _getDateParamsFromQue = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_14__["getDateParamsFromQuery"])(query, defaultDateRange),
          compare = _getDateParamsFromQue.compare;

      var renderSummaryNumbers = function renderSummaryNumbers(_ref) {
        var onToggle = _ref.onToggle;
        return charts.map(function (chart) {
          var key = chart.key,
              order = chart.order,
              orderby = chart.orderby,
              label = chart.label,
              type = chart.type;
          var newPath = {
            chart: key
          };

          if (orderby) {
            newPath.orderby = orderby;
          }

          if (order) {
            newPath.order = order;
          }

          var href = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10__["getNewPath"])(newPath);
          var isSelected = selectedChart.key === key;

          var _this$getValues = _this.getValues(key, type),
              delta = _this$getValues.delta,
              prevValue = _this$getValues.prevValue,
              value = _this$getValues.value;

          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_11__["SummaryNumber"], {
            key: key,
            delta: delta,
            href: href,
            label: label,
            prevLabel: compare === 'previous_period' ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Previous Period:', 'woocommerce-admin') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Previous Year:', 'woocommerce-admin'),
            prevValue: prevValue,
            selected: isSelected,
            value: value,
            onLinkClickCallback: function onLinkClickCallback() {
              // Wider than a certain breakpoint, there is no dropdown so avoid calling onToggle.
              if (onToggle) {
                onToggle();
              }

              Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_15__["recordEvent"])('analytics_chart_tab_click', {
                report: report || endpoint,
                key: key
              });
            }
          });
        });
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_11__["SummaryList"], null, renderSummaryNumbers);
    }
  }]);

  return ReportSummary;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);
ReportSummary.propTypes = {
  /**
   * Properties of all the charts available for that report.
   */
  charts: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array.isRequired,

  /**
   * The endpoint to use in API calls to populate the Summary Numbers.
   * For example, if `taxes` is provided, data will be fetched from the report
   * `taxes` endpoint (ie: `/wc-analytics/reports/taxes/stats`). If the provided endpoint
   * doesn't exist, an error will be shown to the user with `ReportError`.
   */
  endpoint: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,

  /**
   * Allows specifying properties different from the `endpoint` that will be used
   * to limit the items when there is an active search.
   */
  limitProperties: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array,

  /**
   * The query string represented in object form.
   */
  query: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired,

  /**
   * Properties of the selected chart.
   */
  selectedChart: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.shape({
    /**
     * Key of the selected chart.
     */
    key: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,

    /**
     * Chart label.
     */
    label: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,

    /**
     * Order query argument.
     */
    order: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOf(['asc', 'desc']),

    /**
     * Order by query argument.
     */
    orderby: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,

    /**
     * Number type for formatting.
     */
    type: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOf(['average', 'number', 'currency']).isRequired
  }).isRequired,

  /**
   * Data to display in the SummaryNumbers.
   */
  summaryData: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,

  /**
   * Report name, if different than the endpoint.
   */
  report: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
};
ReportSummary.defaultProps = {
  summaryData: {
    totals: {
      primary: {},
      secondary: {}
    },
    isError: false
  }
};
ReportSummary.contextType = _lib_currency_context__WEBPACK_IMPORTED_MODULE_17__[/* CurrencyContext */ "a"];
/* harmony default export */ __webpack_exports__["a"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["withSelect"])(function (select, props) {
  var charts = props.charts,
      endpoint = props.endpoint,
      limitProperties = props.limitProperties,
      query = props.query,
      filters = props.filters,
      advancedFilters = props.advancedFilters;
  var limitBy = limitProperties || [endpoint];
  var hasLimitByParam = limitBy.some(function (item) {
    return query[item] && query[item].length;
  });

  if (query.search && !hasLimitByParam) {
    return {
      emptySearchResults: true
    };
  }

  var fields = charts && charts.map(function (chart) {
    return chart.key;
  });

  var _select$getSetting = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_13__["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings'),
      defaultDateRange = _select$getSetting.woocommerce_default_date_range;

  var summaryData = Object(_woocommerce_data__WEBPACK_IMPORTED_MODULE_13__["getSummaryNumbers"])({
    endpoint: endpoint,
    query: query,
    select: select,
    limitBy: limitBy,
    filters: filters,
    advancedFilters: advancedFilters,
    defaultDateRange: defaultDateRange,
    fields: fields
  });
  return {
    summaryData: summaryData,
    defaultDateRange: defaultDateRange
  };
}))(ReportSummary));

/***/ }),

/***/ 781:
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

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(77);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(298);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_number__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36);
/* harmony import */ var _components_report_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(771);
/* harmony import */ var _products_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(781);
/* harmony import */ var _lib_currency_context__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(762);
/* harmony import */ var _lib_async_requests__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(764);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */







/**
 * Internal dependencies
 */





var manageStock = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_12__[/* getSetting */ "g"])('manageStock', 'no');
var stockStatuses = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_12__[/* getSetting */ "g"])('stockStatuses', {});

var getFullVariationName = function getFullVariationName(rowData) {
  return Object(_lib_async_requests__WEBPACK_IMPORTED_MODULE_16__[/* getVariationName */ "h"])(rowData.extended_info || {});
};

var VariationsReportTable = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(VariationsReportTable, _Component);

  var _super = _createSuper(VariationsReportTable);

  function VariationsReportTable() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, VariationsReportTable);

    _this = _super.call(this);
    _this.getHeadersContent = _this.getHeadersContent.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.getRowsContent = _this.getRowsContent.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.getSummary = _this.getSummary.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(VariationsReportTable, [{
    key: "getHeadersContent",
    value: function getHeadersContent() {
      return [{
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Product / Variation Title', 'woocommerce-admin'),
        key: 'name',
        required: true,
        isLeftAligned: true
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('SKU', 'woocommerce-admin'),
        key: 'sku',
        hiddenByDefault: true,
        isSortable: true
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Items Sold', 'woocommerce-admin'),
        key: 'items_sold',
        required: true,
        defaultSort: true,
        isSortable: true,
        isNumeric: true
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Net Sales', 'woocommerce-admin'),
        screenReaderLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Net Sales', 'woocommerce-admin'),
        key: 'net_revenue',
        required: true,
        isSortable: true,
        isNumeric: true
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Orders', 'woocommerce-admin'),
        key: 'orders_count',
        isSortable: true,
        isNumeric: true
      }, manageStock === 'yes' ? {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Status', 'woocommerce-admin'),
        key: 'stock_status'
      } : null, manageStock === 'yes' ? {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Stock', 'woocommerce-admin'),
        key: 'stock',
        isNumeric: true
      } : null].filter(Boolean);
    }
  }, {
    key: "getRowsContent",
    value: function getRowsContent() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var query = this.props.query;
      var persistedQuery = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10__["getPersistedQuery"])(query);
      var _this$context = this.context,
          formatAmount = _this$context.formatAmount,
          getCurrencyFormatDecimal = _this$context.formatDecimal,
          getCurrencyConfig = _this$context.getCurrencyConfig;
      return Object(lodash__WEBPACK_IMPORTED_MODULE_8__["map"])(data, function (row) {
        var itemsSold = row.items_sold,
            netRevenue = row.net_revenue,
            ordersCount = row.orders_count,
            productId = row.product_id,
            variationId = row.variation_id;
        var extendedInfo = row.extended_info || {};
        var stockStatus = extendedInfo.stock_status,
            stockQuantity = extendedInfo.stock_quantity,
            lowStockAmount = extendedInfo.low_stock_amount,
            sku = extendedInfo.sku;
        var name = getFullVariationName(row);
        var ordersLink = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10__["getNewPath"])(persistedQuery, '/analytics/orders', {
          filter: 'advanced',
          variation_includes: variationId
        });
        var editPostLink = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_12__[/* getAdminLink */ "f"])("post.php?post=".concat(productId, "&action=edit"));
        return [{
          display: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_9__["Link"], {
            href: editPostLink,
            type: "wp-admin"
          }, name),
          value: name
        }, {
          display: sku,
          value: sku
        }, {
          display: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_11__["formatValue"])(getCurrencyConfig(), 'number', itemsSold),
          value: itemsSold
        }, {
          display: formatAmount(netRevenue),
          value: getCurrencyFormatDecimal(netRevenue)
        }, {
          display: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_9__["Link"], {
            href: ordersLink,
            type: "wc-admin"
          }, ordersCount),
          value: ordersCount
        }, manageStock === 'yes' ? {
          display: Object(_products_utils__WEBPACK_IMPORTED_MODULE_14__[/* isLowStock */ "a"])(stockStatus, stockQuantity, lowStockAmount) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_9__["Link"], {
            href: editPostLink,
            type: "wp-admin"
          }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["_x"])('Low', 'Indication of a low quantity', 'woocommerce-admin')) : stockStatuses[stockStatus],
          value: stockStatuses[stockStatus]
        } : null, manageStock === 'yes' ? {
          display: stockQuantity,
          value: stockQuantity
        } : null].filter(Boolean);
      });
    }
  }, {
    key: "getSummary",
    value: function getSummary(totals) {
      var _totals$variations_co = totals.variations_count,
          variationsCount = _totals$variations_co === void 0 ? 0 : _totals$variations_co,
          _totals$items_sold = totals.items_sold,
          itemsSold = _totals$items_sold === void 0 ? 0 : _totals$items_sold,
          _totals$net_revenue = totals.net_revenue,
          netRevenue = _totals$net_revenue === void 0 ? 0 : _totals$net_revenue,
          _totals$orders_count = totals.orders_count,
          ordersCount = _totals$orders_count === void 0 ? 0 : _totals$orders_count;
      var _this$context2 = this.context,
          formatAmount = _this$context2.formatAmount,
          getCurrencyConfig = _this$context2.getCurrencyConfig;
      var currency = getCurrencyConfig();
      return [{
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["_n"])('variation sold', 'variations sold', variationsCount, 'woocommerce-admin'),
        value: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_11__["formatValue"])(currency, 'number', variationsCount)
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["_n"])('item sold', 'items sold', itemsSold, 'woocommerce-admin'),
        value: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_11__["formatValue"])(currency, 'number', itemsSold)
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('net sales', 'woocommerce-admin'),
        value: formatAmount(netRevenue)
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["_n"])('orders', 'orders', ordersCount, 'woocommerce-admin'),
        value: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_11__["formatValue"])(currency, 'number', ordersCount)
      }];
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          advancedFilters = _this$props.advancedFilters,
          baseSearchQuery = _this$props.baseSearchQuery,
          filters = _this$props.filters,
          isRequesting = _this$props.isRequesting,
          query = _this$props.query;
      var labels = {
        helpText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Check at least two variations below to compare', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Search by variation name or SKU', 'woocommerce-admin')
      };
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_report_table__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
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
          products: query.products,
          variations: query.variations
        },
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Variations', 'woocommerce-admin'),
        columnPrefsKey: "variations_report_columns",
        filters: filters,
        advancedFilters: advancedFilters
      });
    }
  }]);

  return VariationsReportTable;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

VariationsReportTable.contextType = _lib_currency_context__WEBPACK_IMPORTED_MODULE_15__[/* CurrencyContext */ "a"];
/* harmony default export */ __webpack_exports__["a"] = (VariationsReportTable);

/***/ })

}]);