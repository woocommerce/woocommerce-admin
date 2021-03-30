(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[19],{

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(88);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(192);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(26);

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(141);

// EXTERNAL MODULE: ./client/lib/async-requests/index.js
var async_requests = __webpack_require__(599);

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
var charts = Object(external_wp_hooks_["applyFilters"])(VARIATIONS_REPORT_CHARTS_FILTER, [{
  key: 'items_sold',
  label: Object(external_wp_i18n_["__"])('Items Sold', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'items_sold',
  type: 'number'
}, {
  key: 'net_revenue',
  label: Object(external_wp_i18n_["__"])('Net Sales', 'woocommerce-admin'),
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
var filters = Object(external_wp_hooks_["applyFilters"])(VARIATIONS_REPORT_FILTERS_FILTER, [{
  label: Object(external_wp_i18n_["__"])('Show', 'woocommerce-admin'),
  staticParams: ['chartType', 'paged', 'per_page'],
  param: 'filter-variations',
  showFilters: function showFilters() {
    return true;
  },
  filters: [{
    label: Object(external_wp_i18n_["__"])('All Variations', 'woocommerce-admin'),
    chartMode: 'item-comparison',
    value: 'all'
  }, {
    label: Object(external_wp_i18n_["__"])('Single Variation', 'woocommerce-admin'),
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
          button: Object(external_wp_i18n_["__"])('Single Variation', 'woocommerce-admin')
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
      }
    }
  }, {
    label: Object(external_wp_i18n_["__"])('Advanced Filters', 'woocommerce-admin'),
    value: 'advanced'
  }]
}]);
var advancedFilters = Object(external_wp_hooks_["applyFilters"])(VARIATIONS_REPORT_ADVANCED_FILTERS_FILTER, {
  title: Object(external_wp_i18n_["_x"])('Variations Match {{select /}} Filters', 'A sentence describing filters for Variations. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ', 'woocommerce-admin'),
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
var get_selected_chart = __webpack_require__(602);

// EXTERNAL MODULE: ./client/analytics/components/report-chart/index.js + 1 modules
var report_chart = __webpack_require__(601);

// EXTERNAL MODULE: ./client/analytics/components/report-error/index.js
var report_error = __webpack_require__(598);

// EXTERNAL MODULE: ./client/analytics/components/report-summary/index.js
var report_summary = __webpack_require__(603);

// EXTERNAL MODULE: ./client/analytics/report/variations/table.js
var table = __webpack_require__(625);

// EXTERNAL MODULE: ./client/analytics/components/report-filters/index.js
var report_filters = __webpack_require__(604);

// EXTERNAL MODULE: ./client/customer-effort-score-tracks/data/constants.js
var constants = __webpack_require__(210);

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
    itemsLabel: Object(external_wp_i18n_["__"])('%d variations', 'woocommerce-admin'),
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
      isRequesting = props.isRequesting,
      addCesSurveyForAnalytics = props.addCesSurveyForAnalytics;

  if (isError) {
    return Object(external_wp_element_["createElement"])(report_error["a" /* default */], {
      isError: true
    });
  }

  var chartQuery = _objectSpread({}, query);

  if (mode === 'item-comparison') {
    chartQuery.segmentby = 'variation';
  }

  filters[0].filters.find(function (item) {
    return item.value === 'compare-variations';
  }).settings.onClick = addCesSurveyForAnalytics;
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

variations_VariationsReport.propTypes = {
  path: prop_types_default.a.string.isRequired,
  query: prop_types_default.a.object.isRequired
};
/* harmony default export */ var variations = __webpack_exports__["default"] = (Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(constants["c" /* STORE_KEY */]),
      addCesSurveyForAnalytics = _dispatch.addCesSurveyForAnalytics;

  return {
    addCesSurveyForAnalytics: addCesSurveyForAnalytics
  };
})(variations_VariationsReport));

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(145);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(281);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_number__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85);
/* harmony import */ var _components_report_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(605);
/* harmony import */ var _products_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(613);
/* harmony import */ var _lib_currency_context__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(597);
/* harmony import */ var _lib_async_requests__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(599);










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */







/**
 * Internal dependencies
 */





var manageStock = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_14__[/* getSetting */ "g"])('manageStock', 'no');
var stockStatuses = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_14__[/* getSetting */ "g"])('stockStatuses', {});

var getFullVariationName = function getFullVariationName(rowData) {
  return Object(_lib_async_requests__WEBPACK_IMPORTED_MODULE_18__[/* getVariationName */ "h"])(rowData.extended_info || {});
};

var VariationsReportTable = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(VariationsReportTable, _Component);

  var _super = _createSuper(VariationsReportTable);

  function VariationsReportTable() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, VariationsReportTable);

    _this = _super.call(this);
    _this.getHeadersContent = _this.getHeadersContent.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.getRowsContent = _this.getRowsContent.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.getSummary = _this.getSummary.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(VariationsReportTable, [{
    key: "getHeadersContent",
    value: function getHeadersContent() {
      return [{
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Product / Variation Title', 'woocommerce-admin'),
        key: 'name',
        required: true,
        isLeftAligned: true
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('SKU', 'woocommerce-admin'),
        key: 'sku',
        hiddenByDefault: true,
        isSortable: true
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Items Sold', 'woocommerce-admin'),
        key: 'items_sold',
        required: true,
        defaultSort: true,
        isSortable: true,
        isNumeric: true
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Net Sales', 'woocommerce-admin'),
        screenReaderLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Net Sales', 'woocommerce-admin'),
        key: 'net_revenue',
        required: true,
        isSortable: true,
        isNumeric: true
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Orders', 'woocommerce-admin'),
        key: 'orders_count',
        isSortable: true,
        isNumeric: true
      }, manageStock === 'yes' ? {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Status', 'woocommerce-admin'),
        key: 'stock_status'
      } : null, manageStock === 'yes' ? {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Stock', 'woocommerce-admin'),
        key: 'stock',
        isNumeric: true
      } : null].filter(Boolean);
    }
  }, {
    key: "getRowsContent",
    value: function getRowsContent() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var query = this.props.query;
      var persistedQuery = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_12__["getPersistedQuery"])(query);
      var _this$context = this.context,
          formatAmount = _this$context.formatAmount,
          getCurrencyFormatDecimal = _this$context.formatDecimal,
          getCurrencyConfig = _this$context.getCurrencyConfig;
      return Object(lodash__WEBPACK_IMPORTED_MODULE_10__["map"])(data, function (row) {
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
        var ordersLink = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_12__["getNewPath"])(persistedQuery, '/analytics/orders', {
          filter: 'advanced',
          variation_includes: variationId
        });
        var editPostLink = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_14__[/* getAdminLink */ "f"])("post.php?post=".concat(productId, "&action=edit"));
        return [{
          display: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_11__["Link"], {
            href: editPostLink,
            type: "wp-admin"
          }, name),
          value: name
        }, {
          display: sku,
          value: sku
        }, {
          display: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_13__["formatValue"])(getCurrencyConfig(), 'number', itemsSold),
          value: itemsSold
        }, {
          display: formatAmount(netRevenue),
          value: getCurrencyFormatDecimal(netRevenue)
        }, {
          display: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_11__["Link"], {
            href: ordersLink,
            type: "wc-admin"
          }, ordersCount),
          value: ordersCount
        }, manageStock === 'yes' ? {
          display: Object(_products_utils__WEBPACK_IMPORTED_MODULE_16__[/* isLowStock */ "a"])(stockStatus, stockQuantity, lowStockAmount) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_11__["Link"], {
            href: editPostLink,
            type: "wp-admin"
          }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["_x"])('Low', 'Indication of a low quantity', 'woocommerce-admin')) : stockStatuses[stockStatus],
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
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["_n"])('variation sold', 'variations sold', variationsCount, 'woocommerce-admin'),
        value: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_13__["formatValue"])(currency, 'number', variationsCount)
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["_n"])('item sold', 'items sold', itemsSold, 'woocommerce-admin'),
        value: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_13__["formatValue"])(currency, 'number', itemsSold)
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('net sales', 'woocommerce-admin'),
        value: formatAmount(netRevenue)
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["_n"])('orders', 'orders', ordersCount, 'woocommerce-admin'),
        value: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_13__["formatValue"])(currency, 'number', ordersCount)
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
        helpText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Check at least two variations below to compare', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Search by variation name or SKU', 'woocommerce-admin')
      };
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_components_report_table__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
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
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Variations', 'woocommerce-admin'),
        columnPrefsKey: "variations_report_columns",
        filters: filters,
        advancedFilters: advancedFilters
      });
    }
  }]);

  return VariationsReportTable;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);

VariationsReportTable.contextType = _lib_currency_context__WEBPACK_IMPORTED_MODULE_17__[/* CurrencyContext */ "a"];
/* harmony default export */ __webpack_exports__["a"] = (VariationsReportTable);

/***/ })

}]);