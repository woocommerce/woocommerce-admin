(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[19],{

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(277);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(787);
/* harmony import */ var _lib_get_selected_chart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(768);
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(795);
/* harmony import */ var _components_report_chart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(766);
/* harmony import */ var _components_report_error__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(763);
/* harmony import */ var _components_report_summary__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(769);
/* harmony import */ var _variations_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(788);
/* harmony import */ var _components_report_filters__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(770);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */






/**
 * Internal dependencies
 */










var ProductsReport = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ProductsReport, _Component);

  var _super = _createSuper(ProductsReport);

  function ProductsReport() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ProductsReport);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ProductsReport, [{
    key: "getChartMeta",
    value: function getChartMeta() {
      var _this$props = this.props,
          query = _this$props.query,
          isSingleProductView = _this$props.isSingleProductView,
          isSingleProductVariable = _this$props.isSingleProductVariable;
      var isCompareView = query.filter === 'compare-products' && query.products && query.products.split(',').length > 1;
      var mode = isCompareView || isSingleProductView && isSingleProductVariable ? 'item-comparison' : 'time-comparison';
      var compareObject = isSingleProductView && isSingleProductVariable ? 'variations' : 'products';
      var label = isSingleProductView && isSingleProductVariable ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('%d variations', 'woocommerce-admin') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('%d products', 'woocommerce-admin');
      return {
        compareObject: compareObject,
        itemsLabel: label,
        mode: mode
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getChartMeta = this.getChartMeta(),
          compareObject = _this$getChartMeta.compareObject,
          itemsLabel = _this$getChartMeta.itemsLabel,
          mode = _this$getChartMeta.mode;

      var _this$props2 = this.props,
          path = _this$props2.path,
          query = _this$props2.query,
          isError = _this$props2.isError,
          isRequesting = _this$props2.isRequesting,
          isSingleProductVariable = _this$props2.isSingleProductVariable;

      if (isError) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_report_error__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
          isError: true
        });
      }

      var chartQuery = _objectSpread({}, query);

      if (mode === 'item-comparison') {
        chartQuery.segmentby = compareObject === 'products' ? 'product' : 'variation';
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_report_filters__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], {
        query: query,
        path: path,
        filters: _config__WEBPACK_IMPORTED_MODULE_12__[/* filters */ "c"],
        advancedFilters: _config__WEBPACK_IMPORTED_MODULE_12__[/* advancedFilters */ "a"],
        report: "products"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_report_summary__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
        mode: mode,
        charts: _config__WEBPACK_IMPORTED_MODULE_12__[/* charts */ "b"],
        endpoint: "products",
        isRequesting: isRequesting,
        query: chartQuery,
        selectedChart: Object(_lib_get_selected_chart__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(query.chart, _config__WEBPACK_IMPORTED_MODULE_12__[/* charts */ "b"]),
        filters: _config__WEBPACK_IMPORTED_MODULE_12__[/* filters */ "c"],
        advancedFilters: _config__WEBPACK_IMPORTED_MODULE_12__[/* advancedFilters */ "a"]
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_report_chart__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        charts: _config__WEBPACK_IMPORTED_MODULE_12__[/* charts */ "b"],
        mode: mode,
        filters: _config__WEBPACK_IMPORTED_MODULE_12__[/* filters */ "c"],
        advancedFilters: _config__WEBPACK_IMPORTED_MODULE_12__[/* advancedFilters */ "a"],
        endpoint: "products",
        isRequesting: isRequesting,
        itemsLabel: itemsLabel,
        path: path,
        query: chartQuery,
        selectedChart: Object(_lib_get_selected_chart__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(chartQuery.chart, _config__WEBPACK_IMPORTED_MODULE_12__[/* charts */ "b"])
      }), isSingleProductVariable ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_variations_table__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
        baseSearchQuery: {
          filter: 'single_product'
        },
        isRequesting: isRequesting,
        query: query,
        filters: _config__WEBPACK_IMPORTED_MODULE_12__[/* filters */ "c"],
        advancedFilters: _config__WEBPACK_IMPORTED_MODULE_12__[/* advancedFilters */ "a"]
      }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_table__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        isRequesting: isRequesting,
        query: query,
        filters: _config__WEBPACK_IMPORTED_MODULE_12__[/* filters */ "c"],
        advancedFilters: _config__WEBPACK_IMPORTED_MODULE_12__[/* advancedFilters */ "a"]
      }));
    }
  }]);

  return ProductsReport;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

ProductsReport.propTypes = {
  path: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,
  query: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_11__["withSelect"])(function (select, props) {
  var query = props.query,
      isRequesting = props.isRequesting;
  var isSingleProductView = !query.search && query.products && query.products.split(',').length === 1;

  if (isRequesting) {
    return {
      query: _objectSpread({}, query),
      isSingleProductView: isSingleProductView,
      isRequesting: isRequesting
    };
  }

  var _select = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_10__["ITEMS_STORE_NAME"]),
      getItems = _select.getItems,
      isResolving = _select.isResolving,
      getItemsError = _select.getItemsError;

  if (isSingleProductView) {
    var productId = parseInt(query.products, 10);
    var includeArgs = {
      include: productId
    }; // TODO Look at similar usage to populate tags in the Search component.

    var products = getItems('products', includeArgs);
    var isVariable = products && products.get(productId) && products.get(productId).type === 'variable';
    var isProductsRequesting = isResolving('getItems', ['products', includeArgs]);
    var isProductsError = Boolean(getItemsError('products', includeArgs));
    return {
      query: _objectSpread(_objectSpread({}, query), {}, {
        'is-variable': isVariable
      }),
      isSingleProductView: isSingleProductView,
      isSingleProductVariable: isVariable,
      isRequesting: isProductsRequesting,
      isError: isProductsError
    };
  }

  return {
    query: query,
    isSingleProductView: isSingleProductView
  };
}))(ProductsReport));

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return charts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return advancedFilters; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_async_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(764);
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


var PRODUCTS_REPORT_CHARTS_FILTER = 'woocommerce_admin_products_report_charts';
var PRODUCTS_REPORT_FILTERS_FILTER = 'woocommerce_admin_products_report_filters';
var PRODUCTS_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_products_report_advanced_filters';
var charts = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(PRODUCTS_REPORT_CHARTS_FILTER, [{
  key: 'items_sold',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Items Sold', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'items_sold',
  type: 'number'
}, {
  key: 'net_revenue',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Net Sales', 'woocommerce-admin'),
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
var filterConfig = {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Show', 'woocommerce-admin'),
  staticParams: ['chartType', 'paged', 'per_page'],
  param: 'filter',
  showFilters: function showFilters() {
    return true;
  },
  filters: [{
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('All Products', 'woocommerce-admin'),
    value: 'all'
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Single Product', 'woocommerce-admin'),
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
        getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_2__[/* getProductLabels */ "d"],
        labels: {
          placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Type to search for a product', 'woocommerce-admin'),
          button: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Single Product', 'woocommerce-admin')
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
      getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_2__[/* getProductLabels */ "d"],
      labels: {
        helpText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Check at least two products below to compare', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search for products to compare', 'woocommerce-admin'),
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Compare Products', 'woocommerce-admin'),
        update: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Compare', 'woocommerce-admin')
      }
    }
  }]
};
var variationsConfig = {
  showFilters: function showFilters(query) {
    return query.filter === 'single_product' && !!query.products && query['is-variable'];
  },
  staticParams: ['filter', 'products', 'chartType', 'paged', 'per_page'],
  param: 'filter-variations',
  filters: [{
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('All Variations', 'woocommerce-admin'),
    chartMode: 'item-comparison',
    value: 'all'
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Single Variation', 'woocommerce-admin'),
    value: 'select_variation',
    subFilters: [{
      component: 'Search',
      value: 'single_variation',
      path: ['select_variation'],
      settings: {
        type: 'variations',
        param: 'variations',
        getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_2__[/* getVariationLabels */ "g"],
        labels: {
          placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Type to search for a variation', 'woocommerce-admin'),
          button: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Single Variation', 'woocommerce-admin')
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
      getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_2__[/* getVariationLabels */ "g"],
      labels: {
        helpText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Check at least two variations below to compare', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search for variations to compare', 'woocommerce-admin'),
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Compare Variations', 'woocommerce-admin'),
        update: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Compare', 'woocommerce-admin')
      }
    }
  }]
};
var filters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(PRODUCTS_REPORT_FILTERS_FILTER, [filterConfig, variationsConfig]);
var advancedFilters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(PRODUCTS_REPORT_ADVANCED_FILTERS_FILTER, {});

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