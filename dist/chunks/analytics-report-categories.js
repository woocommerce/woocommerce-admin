(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[10],{

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(22);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(23);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(24);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(25);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(14);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(88);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(192);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(26);

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(141);

// EXTERNAL MODULE: ./client/lib/async-requests/index.js
var async_requests = __webpack_require__(599);

// CONCATENATED MODULE: ./client/analytics/report/categories/config.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


var CATEGORY_REPORT_CHARTS_FILTER = 'woocommerce_admin_categories_report_charts';
var CATEGORY_REPORT_FILTERS_FILTER = 'woocommerce_admin_categories_report_filters';
var CATEGORY_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_category_report_advanced_filters';
var charts = Object(external_wp_hooks_["applyFilters"])(CATEGORY_REPORT_CHARTS_FILTER, [{
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
var config_filters = Object(external_wp_hooks_["applyFilters"])(CATEGORY_REPORT_FILTERS_FILTER, [{
  label: Object(external_wp_i18n_["__"])('Show', 'woocommerce-admin'),
  staticParams: ['chartType', 'paged', 'per_page'],
  param: 'filter',
  showFilters: function showFilters() {
    return true;
  },
  filters: [{
    label: Object(external_wp_i18n_["__"])('All Categories', 'woocommerce-admin'),
    value: 'all'
  }, {
    label: Object(external_wp_i18n_["__"])('Single Category', 'woocommerce-admin'),
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
      }
    }
  }]
}]);
var config_advancedFilters = Object(external_wp_hooks_["applyFilters"])(CATEGORY_REPORT_ADVANCED_FILTERS_FILTER, {});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(18);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(170);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(65);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(5);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(50);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(145);

// EXTERNAL MODULE: external ["wc","number"]
var external_wc_number_ = __webpack_require__(281);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(59);

// EXTERNAL MODULE: ./client/analytics/report/categories/breadcrumbs.js
var breadcrumbs = __webpack_require__(612);

// EXTERNAL MODULE: ./client/analytics/components/report-table/index.js + 2 modules
var report_table = __webpack_require__(605);

// EXTERNAL MODULE: ./client/lib/currency-context.js
var currency_context = __webpack_require__(597);

// CONCATENATED MODULE: ./client/analytics/report/categories/table.js












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */









/**
 * Internal dependencies
 */





var table_CategoriesReportTable = /*#__PURE__*/function (_Component) {
  inherits_default()(CategoriesReportTable, _Component);

  var _super = _createSuper(CategoriesReportTable);

  function CategoriesReportTable(props) {
    var _this;

    classCallCheck_default()(this, CategoriesReportTable);

    _this = _super.call(this, props);
    _this.getRowsContent = _this.getRowsContent.bind(assertThisInitialized_default()(_this));
    _this.getSummary = _this.getSummary.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(CategoriesReportTable, [{
    key: "getHeadersContent",
    value: function getHeadersContent() {
      return [{
        label: Object(external_wp_i18n_["__"])('Category', 'woocommerce-admin'),
        key: 'category',
        required: true,
        isSortable: true,
        isLeftAligned: true
      }, {
        label: Object(external_wp_i18n_["__"])('Items Sold', 'woocommerce-admin'),
        key: 'items_sold',
        required: true,
        defaultSort: true,
        isSortable: true,
        isNumeric: true
      }, {
        label: Object(external_wp_i18n_["__"])('Net Sales', 'woocommerce-admin'),
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
  }, {
    key: "getRowsContent",
    value: function getRowsContent(categoryStats) {
      var _this2 = this;

      var _this$context = this.context,
          renderCurrency = _this$context.render,
          getCurrencyFormatDecimal = _this$context.formatDecimal,
          getCurrencyConfig = _this$context.getCurrencyConfig;
      var currency = getCurrencyConfig();
      return Object(external_lodash_["map"])(categoryStats, function (categoryStat) {
        var categoryId = categoryStat.category_id,
            itemsSold = categoryStat.items_sold,
            netRevenue = categoryStat.net_revenue,
            productsCount = categoryStat.products_count,
            ordersCount = categoryStat.orders_count;
        var _this2$props = _this2.props,
            categories = _this2$props.categories,
            query = _this2$props.query;
        var category = categories.get(categoryId);
        var persistedQuery = Object(external_wc_navigation_["getPersistedQuery"])(query);
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
  }, {
    key: "getSummary",
    value: function getSummary(totals) {
      var totalResults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var _totals$items_sold = totals.items_sold,
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
        label: Object(external_wp_i18n_["_n"])('category', 'categories', totalResults, 'woocommerce-admin'),
        value: Object(external_wc_number_["formatValue"])(currency, 'number', totalResults)
      }, {
        label: Object(external_wp_i18n_["_n"])('item sold', 'items sold', itemsSold, 'woocommerce-admin'),
        value: Object(external_wc_number_["formatValue"])(currency, 'number', itemsSold)
      }, {
        label: Object(external_wp_i18n_["__"])('net sales', 'woocommerce-admin'),
        value: formatAmount(netRevenue)
      }, {
        label: Object(external_wp_i18n_["_n"])('order', 'orders', ordersCount, 'woocommerce-admin'),
        value: Object(external_wc_number_["formatValue"])(currency, 'number', ordersCount)
      }];
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          advancedFilters = _this$props.advancedFilters,
          filters = _this$props.filters,
          isRequesting = _this$props.isRequesting,
          query = _this$props.query;
      var labels = {
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
  }]);

  return CategoriesReportTable;
}(external_wp_element_["Component"]);

table_CategoriesReportTable.contextType = currency_context["a" /* CurrencyContext */];
/* harmony default export */ var table = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select, props) {
  var isRequesting = props.isRequesting,
      query = props.query;

  if (isRequesting || query.search && !(query.categories && query.categories.length)) {
    return {};
  }

  var _select = select(external_wc_data_["ITEMS_STORE_NAME"]),
      getItems = _select.getItems,
      getItemsError = _select.getItemsError,
      isResolving = _select.isResolving;

  var tableQuery = {
    per_page: -1
  };
  var categories = getItems('categories', tableQuery);
  var isCategoriesError = Boolean(getItemsError('categories', tableQuery));
  var isCategoriesRequesting = isResolving('getItems', ['categories', tableQuery]);
  return {
    categories: categories,
    isError: isCategoriesError,
    isRequesting: isCategoriesRequesting
  };
}))(table_CategoriesReportTable));
// EXTERNAL MODULE: ./client/lib/get-selected-chart/index.js
var get_selected_chart = __webpack_require__(602);

// EXTERNAL MODULE: ./client/analytics/components/report-chart/index.js + 1 modules
var report_chart = __webpack_require__(601);

// EXTERNAL MODULE: ./client/analytics/components/report-summary/index.js
var report_summary = __webpack_require__(603);

// EXTERNAL MODULE: ./client/analytics/report/products/table.js
var products_table = __webpack_require__(623);

// EXTERNAL MODULE: ./client/analytics/components/report-filters/index.js
var report_filters = __webpack_require__(604);

// EXTERNAL MODULE: ./client/customer-effort-score-tracks/data/constants.js
var constants = __webpack_require__(210);

// CONCATENATED MODULE: ./client/analytics/report/categories/index.js














function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function categories_createSuper(Derived) { var hasNativeReflectConstruct = categories_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function categories_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */










var categories_CategoriesReport = /*#__PURE__*/function (_Component) {
  inherits_default()(CategoriesReport, _Component);

  var _super = categories_createSuper(CategoriesReport);

  function CategoriesReport() {
    classCallCheck_default()(this, CategoriesReport);

    return _super.apply(this, arguments);
  }

  createClass_default()(CategoriesReport, [{
    key: "getChartMeta",
    value: function getChartMeta() {
      var query = this.props.query;
      var isCompareView = query.filter === 'compare-categories' && query.categories && query.categories.split(',').length > 1;
      var isSingleCategoryView = query.filter === 'single_category' && !!query.categories;
      var mode = isCompareView || isSingleCategoryView ? 'item-comparison' : 'time-comparison';
      var itemsLabel = isSingleCategoryView ? Object(external_wp_i18n_["__"])('%d products', 'woocommerce-admin') : Object(external_wp_i18n_["__"])('%d categories', 'woocommerce-admin');
      return {
        isSingleCategoryView: isSingleCategoryView,
        itemsLabel: itemsLabel,
        mode: mode
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isRequesting = _this$props.isRequesting,
          query = _this$props.query,
          path = _this$props.path,
          addCesSurveyForAnalytics = _this$props.addCesSurveyForAnalytics;

      var _this$getChartMeta = this.getChartMeta(),
          mode = _this$getChartMeta.mode,
          itemsLabel = _this$getChartMeta.itemsLabel,
          isSingleCategoryView = _this$getChartMeta.isSingleCategoryView;

      var chartQuery = _objectSpread({}, query);

      if (mode === 'item-comparison') {
        chartQuery.segmentby = isSingleCategoryView ? 'product' : 'category';
      }

      config_filters[0].filters.find(function (item) {
        return item.value === 'compare-categories';
      }).settings.onClick = addCesSurveyForAnalytics;
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
  }]);

  return CategoriesReport;
}(external_wp_element_["Component"]);

categories_CategoriesReport.propTypes = {
  query: prop_types_default.a.object.isRequired,
  path: prop_types_default.a.string.isRequired
};
/* harmony default export */ var report_categories = __webpack_exports__["default"] = (Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(constants["c" /* STORE_KEY */]),
      addCesSurveyForAnalytics = _dispatch.addCesSurveyForAnalytics;

  return {
    addCesSurveyForAnalytics: addCesSurveyForAnalytics
  };
})(categories_CategoriesReport));

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryBreadcrumbs; });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(130);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(145);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_11__);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */






var CategoryBreadcrumbs = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(CategoryBreadcrumbs, _Component);

  var _super = _createSuper(CategoryBreadcrumbs);

  function CategoryBreadcrumbs() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CategoryBreadcrumbs);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(CategoryBreadcrumbs, [{
    key: "getCategoryAncestorIds",
    value: function getCategoryAncestorIds(category, categories) {
      var ancestors = [];
      var parent = category.parent;

      while (parent) {
        ancestors.unshift(parent);
        parent = categories.get(parent).parent;
      }

      return ancestors;
    }
  }, {
    key: "getCategoryAncestors",
    value: function getCategoryAncestors(category, categories) {
      var ancestorIds = this.getCategoryAncestorIds(category, categories);

      if (!ancestorIds.length) {
        return;
      }

      if (ancestorIds.length === 1) {
        return categories.get(Object(lodash__WEBPACK_IMPORTED_MODULE_8__["first"])(ancestorIds)).name + ' › ';
      }

      if (ancestorIds.length === 2) {
        return categories.get(Object(lodash__WEBPACK_IMPORTED_MODULE_8__["first"])(ancestorIds)).name + ' › ' + categories.get(Object(lodash__WEBPACK_IMPORTED_MODULE_8__["last"])(ancestorIds)).name + ' › ';
      }

      return categories.get(Object(lodash__WEBPACK_IMPORTED_MODULE_8__["first"])(ancestorIds)).name + ' … ' + categories.get(Object(lodash__WEBPACK_IMPORTED_MODULE_8__["last"])(ancestorIds)).name + ' › ';
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          categories = _this$props.categories,
          category = _this$props.category,
          query = _this$props.query;
      var persistedQuery = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_11__["getPersistedQuery"])(query);
      return category ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "woocommerce-table__breadcrumbs"
      }, this.getCategoryAncestors(category, categories), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        href: Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_11__["getNewPath"])(persistedQuery, '/analytics/categories', {
          filter: 'single_category',
          categories: category.id
        }),
        type: "wc-admin"
      }, category.name)) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Spinner"], null);
    }
  }]);

  return CategoryBreadcrumbs;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ 623:
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
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(130);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(52);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(139);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(170);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(65);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(133);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(26);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(50);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(145);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(281);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_number__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(85);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(59);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _categories_breadcrumbs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(612);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(613);
/* harmony import */ var _components_report_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(605);
/* harmony import */ var _lib_currency_context__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(597);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(624);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_28__);















function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */











/**
 * Internal dependencies
 */






var manageStock = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_22__[/* getSetting */ "g"])('manageStock', 'no');
var stockStatuses = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_22__[/* getSetting */ "g"])('stockStatuses', {});

var ProductsReportTable = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ProductsReportTable, _Component);

  var _super = _createSuper(ProductsReportTable);

  function ProductsReportTable() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ProductsReportTable);

    _this = _super.call(this);
    _this.getHeadersContent = _this.getHeadersContent.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.getRowsContent = _this.getRowsContent.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    _this.getSummary = _this.getSummary.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ProductsReportTable, [{
    key: "getHeadersContent",
    value: function getHeadersContent() {
      return [{
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('Product Title', 'woocommerce-admin'),
        key: 'product_name',
        required: true,
        isLeftAligned: true,
        isSortable: true
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('SKU', 'woocommerce-admin'),
        key: 'sku',
        hiddenByDefault: true,
        isSortable: true
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('Items Sold', 'woocommerce-admin'),
        key: 'items_sold',
        required: true,
        defaultSort: true,
        isSortable: true,
        isNumeric: true
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('Net Sales', 'woocommerce-admin'),
        screenReaderLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('Net Sales', 'woocommerce-admin'),
        key: 'net_revenue',
        required: true,
        isSortable: true,
        isNumeric: true
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('Orders', 'woocommerce-admin'),
        key: 'orders_count',
        isSortable: true,
        isNumeric: true
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('Category', 'woocommerce-admin'),
        key: 'product_cat'
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('Variations', 'woocommerce-admin'),
        key: 'variations',
        isSortable: true
      }, manageStock === 'yes' ? {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('Status', 'woocommerce-admin'),
        key: 'stock_status'
      } : null, manageStock === 'yes' ? {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('Stock', 'woocommerce-admin'),
        key: 'stock',
        isNumeric: true
      } : null].filter(Boolean);
    }
  }, {
    key: "getRowsContent",
    value: function getRowsContent() {
      var _this2 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var query = this.props.query;
      var persistedQuery = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_19__["getPersistedQuery"])(query);
      var _this$context = this.context,
          renderCurrency = _this$context.render,
          getCurrencyFormatDecimal = _this$context.formatDecimal,
          getCurrencyConfig = _this$context.getCurrencyConfig;
      var currency = getCurrencyConfig();
      return Object(lodash__WEBPACK_IMPORTED_MODULE_18__["map"])(data, function (row) {
        var productId = row.product_id,
            itemsSold = row.items_sold,
            netRevenue = row.net_revenue,
            ordersCount = row.orders_count;
        var extendedInfo = row.extended_info || {};
        var categoryIds = extendedInfo.category_ids,
            lowStockAmount = extendedInfo.low_stock_amount,
            extendedInfoManageStock = extendedInfo.manage_stock,
            sku = extendedInfo.sku,
            extendedInfoStockStatus = extendedInfo.stock_status,
            stockQuantity = extendedInfo.stock_quantity,
            _extendedInfo$variati = extendedInfo.variations,
            variations = _extendedInfo$variati === void 0 ? [] : _extendedInfo$variati;
        var name = Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_16__["decodeEntities"])(extendedInfo.name);
        var ordersLink = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_19__["getNewPath"])(persistedQuery, '/analytics/orders', {
          filter: 'advanced',
          product_includes: productId
        });
        var productDetailLink = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_19__["getNewPath"])(persistedQuery, '/analytics/products', {
          filter: 'single_product',
          products: productId
        });
        var categories = _this2.props.categories;
        var productCategories = categoryIds && categoryIds.map(function (categoryId) {
          return categories.get(categoryId);
        }).filter(Boolean) || [];
        var stockStatus = Object(_utils__WEBPACK_IMPORTED_MODULE_25__[/* isLowStock */ "a"])(extendedInfoStockStatus, stockQuantity, lowStockAmount) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_20__["Link"], {
          href: Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_22__[/* getAdminLink */ "f"])('post.php?action=edit&post=' + productId),
          type: "wp-admin"
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_14__["_x"])('Low', 'Indication of a low quantity', 'woocommerce-admin')) : stockStatuses[extendedInfoStockStatus];
        return [{
          display: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_20__["Link"], {
            href: productDetailLink,
            type: "wc-admin"
          }, name),
          value: name
        }, {
          display: sku,
          value: sku
        }, {
          display: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_21__["formatValue"])(currency, 'number', itemsSold),
          value: itemsSold
        }, {
          display: renderCurrency(netRevenue),
          value: getCurrencyFormatDecimal(netRevenue)
        }, {
          display: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_20__["Link"], {
            href: ordersLink,
            type: "wc-admin"
          }, ordersCount),
          value: ordersCount
        }, {
          display: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
            className: "woocommerce-table__product-categories"
          }, productCategories[0] && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_categories_breadcrumbs__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"], {
            category: productCategories[0],
            categories: categories
          }), productCategories.length > 1 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_20__["Tag"], {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_14__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_14__["_x"])('+%d more', 'categories', 'woocommerce-admin'), productCategories.length - 1),
            popoverContents: productCategories.map(function (category) {
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_categories_breadcrumbs__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"], {
                category: category,
                categories: categories,
                key: category.id,
                query: query
              });
            })
          })),
          value: productCategories.map(function (category) {
            return category.name;
          }).join(', ')
        }, {
          display: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_21__["formatValue"])(currency, 'number', variations.length),
          value: variations.length
        }, manageStock === 'yes' ? {
          display: extendedInfoManageStock ? stockStatus : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('N/A', 'woocommerce-admin'),
          value: extendedInfoManageStock ? stockStatuses[extendedInfoStockStatus] : null
        } : null, manageStock === 'yes' ? {
          display: extendedInfoManageStock ? Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_21__["formatValue"])(currency, 'number', stockQuantity) : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('N/A', 'woocommerce-admin'),
          value: stockQuantity
        } : null].filter(Boolean);
      });
    }
  }, {
    key: "getSummary",
    value: function getSummary(totals) {
      var _totals$products_coun = totals.products_count,
          productsCount = _totals$products_coun === void 0 ? 0 : _totals$products_coun,
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
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_14__["_n"])('product', 'products', productsCount, 'woocommerce-admin'),
        value: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_21__["formatValue"])(currency, 'number', productsCount)
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_14__["_n"])('item sold', 'items sold', itemsSold, 'woocommerce-admin'),
        value: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_21__["formatValue"])(currency, 'number', itemsSold)
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('net sales', 'woocommerce-admin'),
        value: formatAmount(netRevenue)
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_14__["_n"])('orders', 'orders', ordersCount, 'woocommerce-admin'),
        value: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_21__["formatValue"])(currency, 'number', ordersCount)
      }];
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          advancedFilters = _this$props.advancedFilters,
          baseSearchQuery = _this$props.baseSearchQuery,
          filters = _this$props.filters,
          hideCompare = _this$props.hideCompare,
          isRequesting = _this$props.isRequesting,
          query = _this$props.query;
      var labels = {
        helpText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('Check at least two products below to compare', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('Search by product name or SKU', 'woocommerce-admin')
      };
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_components_report_table__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"], {
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
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_14__["__"])('Products', 'woocommerce-admin'),
        columnPrefsKey: "products_report_columns",
        filters: filters,
        advancedFilters: advancedFilters
      });
    }
  }]);

  return ProductsReportTable;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);

ProductsReportTable.contextType = _lib_currency_context__WEBPACK_IMPORTED_MODULE_27__[/* CurrencyContext */ "a"];
/* harmony default export */ __webpack_exports__["a"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_15__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_17__["withSelect"])(function (select, props) {
  var query = props.query,
      isRequesting = props.isRequesting;

  if (isRequesting || query.search && !(query.products && query.products.length)) {
    return {};
  }

  var _select = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_23__["ITEMS_STORE_NAME"]),
      getItems = _select.getItems,
      getItemsError = _select.getItemsError,
      isResolving = _select.isResolving;

  var tableQuery = {
    per_page: -1
  };
  var categories = getItems('categories', tableQuery);
  var isError = Boolean(getItemsError('categories', tableQuery));
  var isLoading = isResolving('getItems', ['categories', tableQuery]);
  return {
    categories: categories,
    isError: isError,
    isRequesting: isLoading
  };
}))(ProductsReportTable));

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);