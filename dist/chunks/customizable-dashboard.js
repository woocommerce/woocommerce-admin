(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[24],{

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=Object.assign||function(a){for(var c,b=1;b<arguments.length;b++)for(var d in c=arguments[b],c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d]);return a};Object.defineProperty(exports,'__esModule',{value:!0});exports.default=function(a){var b=a.size,c=b===void 0?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,['size','onClick','icon','className']),j=['gridicon','gridicons-chevron-down',f,!1,!1,!1].filter(Boolean).join(' ');return _react2.default.createElement('svg',_extends({className:j,height:c,width:c,onClick:d},g,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586'})))};var _react=__webpack_require__(5),_react2=_interopRequireDefault(_react);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){var d={};for(var c in a)0<=b.indexOf(c)||Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}module.exports=exports['default'];


/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFilteredCurrencyInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyContext; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88);
/* harmony import */ var _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_currency__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/**
 * External dependencies
 */




const appCurrency = _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2___default()(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_3__[/* CURRENCY */ "a"]);
const getFilteredCurrencyInstance = query => {
  const config = appCurrency.getCurrencyConfig();
  const filteredConfig = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])('woocommerce_admin_report_currency', config, query);
  return _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2___default()(filteredConfig);
};
const CurrencyContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createContext"])(appCurrency // default value
);

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_date__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_currency_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(498);
/* harmony import */ var _customer_effort_score_tracks_data_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54);


/**
 * External dependencies
 */










/**
 * Internal dependencies
 */




class ReportFilters extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.onDateSelect = this.onDateSelect.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
    this.onAdvancedFilterAction = this.onAdvancedFilterAction.bind(this);
  }

  onDateSelect(data) {
    const {
      report,
      addCesSurveyForAnalytics
    } = this.props;
    addCesSurveyForAnalytics();
    Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__["recordEvent"])('datepicker_update', {
      report,
      ...Object(lodash__WEBPACK_IMPORTED_MODULE_3__["omitBy"])(data, lodash__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])
    });
  }

  onFilterSelect(data) {
    const {
      report,
      addCesSurveyForAnalytics
    } = this.props; // This event gets triggered in the following cases.
    // 1. Select "Single product" and choose a product.
    // 2. Select "Comparison" or any other filter types.
    // The comparsion and other filter types require a user to click
    // a button to execute a query, so this is not a good place to
    // trigger a CES survey for those.

    const triggerCesFor = ['single_product', 'single_category', 'single_coupon', 'single_variation'];
    const filterName = data.filter || data['filter-variations'];

    if (triggerCesFor.includes(filterName)) {
      addCesSurveyForAnalytics();
    }

    const eventProperties = {
      report,
      filter: data.filter || 'all'
    };

    if (data.filter === 'single_product') {
      eventProperties.filter_variation = data['filter-variations'] || 'all';
    }

    Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__["recordEvent"])('analytics_filter', eventProperties);
  }

  onAdvancedFilterAction(action, data) {
    const {
      report,
      addCesSurveyForAnalytics
    } = this.props;

    switch (action) {
      case 'add':
        Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__["recordEvent"])('analytics_filters_add', {
          report,
          filter: data.key
        });
        break;

      case 'remove':
        Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__["recordEvent"])('analytics_filters_remove', {
          report,
          filter: data.key
        });
        break;

      case 'filter':
        const snakeCaseData = Object.keys(data).reduce((result, property) => {
          result[Object(lodash__WEBPACK_IMPORTED_MODULE_3__["snakeCase"])(property)] = data[property];
          return result;
        }, {});
        addCesSurveyForAnalytics();
        Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__["recordEvent"])('analytics_filters_filter', {
          report,
          ...snakeCaseData
        });
        break;

      case 'clear_all':
        Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__["recordEvent"])('analytics_filters_clear_all', {
          report
        });
        break;

      case 'match':
        Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__["recordEvent"])('analytics_filters_all_any', {
          report,
          value: data.match
        });
        break;
    }
  }

  render() {
    const {
      advancedFilters,
      filters,
      path,
      query,
      showDatePicker,
      defaultDateRange
    } = this.props;
    const {
      period,
      compare,
      before,
      after
    } = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_8__["getDateParamsFromQuery"])(query, defaultDateRange);
    const {
      primary: primaryDate,
      secondary: secondaryDate
    } = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_8__["getCurrentDates"])(query, defaultDateRange);
    const dateQuery = {
      period,
      compare,
      before,
      after,
      primaryDate,
      secondaryDate
    };
    const Currency = this.context;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__["ReportFilters"], {
      query: query,
      siteLocale: _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_6__[/* LOCALE */ "b"].siteLocale,
      currency: Currency.getCurrencyConfig(),
      path: path,
      filters: filters,
      advancedFilters: advancedFilters,
      showDatePicker: showDatePicker,
      onDateSelect: this.onDateSelect,
      onFilterSelect: this.onFilterSelect,
      onAdvancedFilterAction: this.onAdvancedFilterAction,
      dateQuery: dateQuery,
      isoDateFormat: _woocommerce_date__WEBPACK_IMPORTED_MODULE_8__["isoDateFormat"]
    });
  }

}

ReportFilters.contextType = _lib_currency_context__WEBPACK_IMPORTED_MODULE_10__[/* CurrencyContext */ "a"];
/* harmony default export */ __webpack_exports__["a"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])(select => {
  const {
    woocommerce_default_date_range: defaultDateRange
  } = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings');
  return {
    defaultDateRange
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withDispatch"])(dispatch => {
  const {
    addCesSurveyForAnalytics
  } = dispatch(_customer_effort_score_tracks_data_constants__WEBPACK_IMPORTED_MODULE_11__[/* STORE_KEY */ "c"]);
  return {
    addCesSurveyForAnalytics
  };
}))(ReportFilters));
ReportFilters.propTypes = {
  /**
   * Config option passed through to `AdvancedFilters`
   */
  advancedFilters: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Config option passed through to `FilterPicker` - if not used, `FilterPicker` is not displayed.
   */
  filters: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,

  /**
   * The `path` parameter supplied by React-Router
   */
  path: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * The query string represented in object form
   */
  query: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Whether the date picker must be shown..
   */
  showDatePicker: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * The report where filter are placed.
   */
  report: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=Object.assign||function(a){for(var c,b=1;b<arguments.length;b++)for(var d in c=arguments[b],c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d]);return a};Object.defineProperty(exports,'__esModule',{value:!0});exports.default=function(a){var b=a.size,c=b===void 0?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,['size','onClick','icon','className']),j=['gridicon','gridicons-list-ordered',f,!!function h(k){return 0==k%18}(c)&&'needs-offset',!1,!1].filter(Boolean).join(' ');return _react2.default.createElement('svg',_extends({className:j,height:c,width:c,onClick:d},g,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M8 19h13v-2H8v2zm0-6h13v-2H8v2zm0-8v2h13V5H8zm-4.425.252c.107-.096.197-.188.27-.275-.013.228-.02.48-.02.756V8h1.176V3.717H3.96L2.487 4.915l.6.738.487-.4zm.334 7.764c.474-.426.784-.715.93-.867.145-.153.26-.298.35-.436.087-.138.152-.278.194-.42.042-.143.063-.298.063-.466 0-.225-.06-.427-.18-.608s-.29-.32-.507-.417c-.218-.1-.465-.148-.742-.148-.22 0-.42.022-.596.067s-.34.11-.49.195c-.15.085-.337.226-.558.423l.636.744c.174-.15.33-.264.467-.34.138-.078.274-.117.41-.117.13 0 .232.032.304.097.073.064.11.152.11.264 0 .09-.02.176-.055.258-.036.082-.1.18-.192.294-.092.114-.287.328-.586.64L2.42 13.238V14h3.11v-.955H3.91v-.03zm.53 4.746v-.018c.306-.086.54-.225.702-.414.162-.19.243-.42.243-.685 0-.31-.126-.55-.378-.727-.252-.176-.6-.264-1.043-.264-.307 0-.58.033-.816.1s-.47.178-.696.334l.48.773c.293-.183.576-.274.85-.274.147 0 .263.027.35.082s.13.14.13.252c0 .3-.294.45-.882.45h-.27v.87h.264c.217 0 .393.017.527.05.136.03.233.08.294.143.06.064.09.154.09.27 0 .153-.057.265-.173.337-.115.07-.3.106-.554.106-.164 0-.343-.022-.538-.07-.194-.044-.385-.115-.573-.21v.96c.228.088.44.148.637.182.196.033.41.05.64.05.56 0 .998-.114 1.314-.343.315-.228.473-.542.473-.94.002-.585-.356-.923-1.07-1.013z'})))};var _react=__webpack_require__(5),_react2=_interopRequireDefault(_react);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){var d={};for(var c in a)0<=b.indexOf(c)||Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}module.exports=exports['default'];


/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=Object.assign||function(a){for(var c,b=1;b<arguments.length;b++)for(var d in c=arguments[b],c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d]);return a};Object.defineProperty(exports,'__esModule',{value:!0});exports.default=function(a){var b=a.size,c=b===void 0?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,['size','onClick','icon','className']),j=['gridicon','gridicons-chevron-up',f,!1,!1,!1].filter(Boolean).join(' ');return _react2.default.createElement('svg',_extends({className:j,height:c,width:c,onClick:d},g,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M4 15l8-8 8 8-1.414 1.414L12 9.828l-6.586 6.586'})))};var _react=__webpack_require__(5),_react2=_interopRequireDefault(_react);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){var d={};for(var c in a)0<=b.indexOf(c)||Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}module.exports=exports['default'];


/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(14);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(4);

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js + 2 modules
var icon = __webpack_require__(115);

// EXTERNAL MODULE: external ["wp","primitives"]
var external_wp_primitives_ = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/plus-circle-filled.js


/**
 * WordPress dependencies
 */

var plusCircleFilled = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M2 12C2 6.44444 6.44444 2 12 2C17.5556 2 22 6.44444 22 12C22 17.5556 17.5556 22 12 22C6.44444 22 2 17.5556 2 12ZM13 11V7H11V11H7V13H11V17H13V13H17V11H13Z"
}));
/* harmony default export */ var plus_circle_filled = (plusCircleFilled);
//# sourceMappingURL=plus-circle-filled.js.map
// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(7);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(21);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(11);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(12);

// EXTERNAL MODULE: external ["wc","date"]
var external_wc_date_ = __webpack_require__(19);

// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(16);

// EXTERNAL MODULE: ./client/dashboard/style.scss
var style = __webpack_require__(513);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/arrow-right.js


/**
 * WordPress dependencies
 */

var arrowRight = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M2 11V9h12l-4-4 1-2 7 7-7 7-1-2 4-4H2z"
}));
/* harmony default export */ var arrow_right = (arrowRight);
//# sourceMappingURL=arrow-right.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/chart-bar.js


/**
 * WordPress dependencies
 */

var chartBar = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  fillRule: "evenodd",
  d: "M11.25 5h1.5v15h-1.5V5zM6 10h1.5v10H6V10zm12 4h-1.5v6H18v-6z",
  clipRule: "evenodd"
}));
/* harmony default export */ var chart_bar = (chartBar);
//# sourceMappingURL=chart-bar.js.map
// EXTERNAL MODULE: ./node_modules/gridicons/dist/list-ordered.js
var list_ordered = __webpack_require__(589);
var list_ordered_default = /*#__PURE__*/__webpack_require__.n(list_ordered);

// CONCATENATED MODULE: ./client/dashboard/default-sections.js


/**
 * External dependencies
 */






/**
 * Internal dependencies
 */

const LazyDashboardCharts = Object(external_wp_element_["lazy"])(() => __webpack_require__.e(/* import() | dashboard-charts */ 26).then(__webpack_require__.bind(null, 616)));
const LazyLeaderboards = Object(external_wp_element_["lazy"])(() => Promise.all(/* import() | leaderboards */[__webpack_require__.e(1), __webpack_require__.e(32)]).then(__webpack_require__.bind(null, 619)));
const LazyStorePerformance = Object(external_wp_element_["lazy"])(() => __webpack_require__.e(/* import() | store-performance */ 49).then(__webpack_require__.bind(null, 609)));

const DashboardCharts = props => Object(external_wp_element_["createElement"])(external_wp_element_["Suspense"], {
  fallback: Object(external_wp_element_["createElement"])(external_wc_components_["Spinner"], null)
}, Object(external_wp_element_["createElement"])(LazyDashboardCharts, props));

const Leaderboards = props => Object(external_wp_element_["createElement"])(external_wp_element_["Suspense"], {
  fallback: Object(external_wp_element_["createElement"])(external_wc_components_["Spinner"], null)
}, Object(external_wp_element_["createElement"])(LazyLeaderboards, props));

const StorePerformance = props => Object(external_wp_element_["createElement"])(external_wp_element_["Suspense"], {
  fallback: Object(external_wp_element_["createElement"])(external_wc_components_["Spinner"], null)
}, Object(external_wp_element_["createElement"])(LazyStorePerformance, props));

const DEFAULT_SECTIONS_FILTER = 'woocommerce_dashboard_default_sections';
/* harmony default export */ var default_sections = (Object(external_wp_hooks_["applyFilters"])(DEFAULT_SECTIONS_FILTER, [{
  key: 'store-performance',
  component: StorePerformance,
  title: Object(external_wp_i18n_["__"])('Performance', 'woocommerce-admin'),
  isVisible: true,
  icon: arrow_right,
  hiddenBlocks: ['coupons/amount', 'coupons/orders_count', 'downloads/download_count', 'taxes/order_tax', 'taxes/total_tax', 'taxes/shipping_tax', 'revenue/shipping', 'orders/avg_order_value', 'revenue/refunds', 'revenue/gross_sales']
}, {
  key: 'charts',
  component: DashboardCharts,
  title: Object(external_wp_i18n_["__"])('Charts', 'woocommerce-admin'),
  isVisible: true,
  icon: chart_bar,
  hiddenBlocks: ['orders_avg_order_value', 'avg_items_per_order', 'products_items_sold', 'revenue_total_sales', 'revenue_refunds', 'coupons_amount', 'coupons_orders_count', 'revenue_shipping', 'taxes_total_tax', 'taxes_order_tax', 'taxes_shipping_tax', 'downloads_download_count']
}, {
  key: 'leaderboards',
  component: Leaderboards,
  title: Object(external_wp_i18n_["__"])('Leaderboards', 'woocommerce-admin'),
  isVisible: true,
  icon: Object(external_wp_element_["createElement"])(list_ordered_default.a, null),
  hiddenBlocks: ['coupons', 'customers']
}]));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(35);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/trash.js


/**
 * WordPress dependencies
 */

var trash = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M12 4h3c.6 0 1 .4 1 1v1H3V5c0-.6.5-1 1-1h3c.2-1.1 1.3-2 2.5-2s2.3.9 2.5 2zM8 4h3c-.2-.6-.9-1-1.5-1S8.2 3.4 8 4zM4 7h11l-.9 10.1c0 .5-.5.9-1 .9H5.9c-.5 0-.9-.4-1-.9L4 7z"
}));
/* harmony default export */ var library_trash = (trash);
//# sourceMappingURL=trash.js.map
// EXTERNAL MODULE: ./node_modules/gridicons/dist/chevron-up.js
var chevron_up = __webpack_require__(590);
var chevron_up_default = /*#__PURE__*/__webpack_require__.n(chevron_up);

// EXTERNAL MODULE: ./node_modules/gridicons/dist/chevron-down.js
var chevron_down = __webpack_require__(168);
var chevron_down_default = /*#__PURE__*/__webpack_require__.n(chevron_down);

// CONCATENATED MODULE: ./client/dashboard/section-controls.js


/**
 * External dependencies
 */








class section_controls_SectionControls extends external_wp_element_["Component"] {
  constructor(props) {
    super(props);
    this.onMoveUp = this.onMoveUp.bind(this);
    this.onMoveDown = this.onMoveDown.bind(this);
  }

  onMoveUp() {
    const {
      onMove,
      onToggle
    } = this.props;
    onMove(-1); // Close the dropdown

    onToggle();
  }

  onMoveDown() {
    const {
      onMove,
      onToggle
    } = this.props;
    onMove(1); // Close the dropdown

    onToggle();
  }

  render() {
    const {
      onRemove,
      isFirst,
      isLast,
      onTitleBlur,
      onTitleChange,
      titleInput
    } = this.props;
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-ellipsis-menu__item"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["TextControl"], {
      label: Object(external_wp_i18n_["__"])('Section title', 'woocommerce-admin'),
      onBlur: onTitleBlur,
      onChange: onTitleChange,
      required: true,
      value: titleInput
    })), Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-dashboard-section-controls"
    }, !isFirst && Object(external_wp_element_["createElement"])(external_wc_components_["MenuItem"], {
      isClickable: true,
      onInvoke: this.onMoveUp
    }, Object(external_wp_element_["createElement"])(icon["a" /* default */], {
      icon: Object(external_wp_element_["createElement"])(chevron_up_default.a, null),
      label: Object(external_wp_i18n_["__"])('Move up'),
      size: 20,
      className: "icon-control"
    }), Object(external_wp_i18n_["__"])('Move up', 'woocommerce-admin')), !isLast && Object(external_wp_element_["createElement"])(external_wc_components_["MenuItem"], {
      isClickable: true,
      onInvoke: this.onMoveDown
    }, Object(external_wp_element_["createElement"])(icon["a" /* default */], {
      icon: Object(external_wp_element_["createElement"])(chevron_down_default.a, null),
      size: 20,
      label: Object(external_wp_i18n_["__"])('Move down'),
      className: "icon-control"
    }), Object(external_wp_i18n_["__"])('Move down', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wc_components_["MenuItem"], {
      isClickable: true,
      onInvoke: onRemove
    }, Object(external_wp_element_["createElement"])(icon["a" /* default */], {
      icon: library_trash,
      size: 20,
      label: Object(external_wp_i18n_["__"])('Remove block'),
      className: "icon-control"
    }), Object(external_wp_i18n_["__"])('Remove section', 'woocommerce-admin'))));
  }

}

/* harmony default export */ var section_controls = (section_controls_SectionControls);
// CONCATENATED MODULE: ./client/dashboard/section.js



/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


class section_Section extends external_wp_element_["Component"] {
  constructor(props) {
    super(props);
    const {
      title
    } = props;
    this.state = {
      titleInput: title
    };
    this.onToggleHiddenBlock = this.onToggleHiddenBlock.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTitleBlur = this.onTitleBlur.bind(this);
  }

  onTitleChange(updatedTitle) {
    this.setState({
      titleInput: updatedTitle
    });
  }

  onTitleBlur() {
    const {
      onTitleUpdate,
      title
    } = this.props;
    const {
      titleInput
    } = this.state;

    if (titleInput === '') {
      this.setState({
        titleInput: title
      });
    } else if (onTitleUpdate) {
      onTitleUpdate(titleInput);
    }
  }

  onToggleHiddenBlock(key) {
    return () => {
      const hiddenBlocks = Object(external_lodash_["xor"])(this.props.hiddenBlocks, [key]);
      this.props.onChangeHiddenBlocks(hiddenBlocks);
    };
  }

  render() {
    const {
      component: SectionComponent,
      ...props
    } = this.props;
    const {
      titleInput
    } = this.state;
    return Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-dashboard-section"
    }, Object(external_wp_element_["createElement"])(SectionComponent, extends_default()({
      onTitleChange: this.onTitleChange,
      onTitleBlur: this.onTitleBlur,
      onToggleHiddenBlock: this.onToggleHiddenBlock,
      titleInput: titleInput,
      controls: section_controls
    }, props)));
  }

}
// EXTERNAL MODULE: ./client/analytics/components/report-filters/index.js
var report_filters = __webpack_require__(502);

// EXTERNAL MODULE: ./client/lib/currency-context.js
var currency_context = __webpack_require__(498);

// CONCATENATED MODULE: ./client/dashboard/customizable.js


/**
 * External dependencies
 */













/**
 * Internal dependencies
 */






const DASHBOARD_FILTERS_FILTER = 'woocommerce_admin_dashboard_filters';
const filters = Object(external_wp_hooks_["applyFilters"])(DASHBOARD_FILTERS_FILTER, []);

const mergeSectionsWithDefaults = prefSections => {
  if (!prefSections || prefSections.length === 0) {
    return default_sections.reduce((sections, section) => {
      return [...sections, { ...section
      }];
    }, []);
  }

  const defaultKeys = default_sections.map(section => section.key);
  const prefKeys = prefSections.map(section => section.key);
  const keys = new Set([...prefKeys, ...defaultKeys]);
  const sections = [];
  keys.forEach(key => {
    const defaultSection = default_sections.find(section => section.key === key);

    if (!defaultSection) {
      return;
    }

    const prefSection = prefSections.find(section => section.key === key); // Not defined by a string anymore.

    if (prefSection) {
      delete prefSection.icon;
    }

    sections.push({ ...defaultSection,
      ...prefSection
    });
  });
  return sections;
};

const CustomizableDashboard = ({
  defaultDateRange,
  path,
  query
}) => {
  const {
    updateUserPreferences,
    ...userPrefs
  } = Object(external_wc_data_["useUserPreferences"])();
  const sections = Object(external_wp_element_["useMemo"])(() => mergeSectionsWithDefaults(userPrefs.dashboard_sections), [userPrefs.dashboard_sections]);

  const updateSections = newSections => {
    updateUserPreferences({
      dashboard_sections: newSections
    });
  };

  const updateSection = (updatedKey, newSettings) => {
    const newSections = sections.map(section => {
      // Do not save section icon as it is a component.
      delete section.icon;

      if (section.key === updatedKey) {
        return { ...section,
          ...newSettings
        };
      }

      return section;
    });
    updateSections(newSections);
  };

  const onChangeHiddenBlocks = updatedKey => {
    return updatedHiddenBlocks => {
      updateSection(updatedKey, {
        hiddenBlocks: updatedHiddenBlocks
      });
    };
  };

  const onSectionTitleUpdate = updatedKey => {
    return updatedTitle => {
      Object(external_wc_tracks_["recordEvent"])('dash_section_rename', {
        key: updatedKey
      });
      updateSection(updatedKey, {
        title: updatedTitle
      });
    };
  };

  const toggleVisibility = (key, onToggle) => {
    return () => {
      if (onToggle) {
        // Close the dropdown before setting state so an action is not performed on an unmounted component.
        onToggle();
      } // When toggling visibility, place section at the end of the array.


      const index = sections.findIndex(s => key === s.key);
      const toggledSection = sections.splice(index, 1).shift();
      toggledSection.isVisible = !toggledSection.isVisible;
      sections.push(toggledSection);

      if (toggledSection.isVisible) {
        Object(external_wc_tracks_["recordEvent"])('dash_section_add', {
          key: toggledSection.key
        });
      } else {
        Object(external_wc_tracks_["recordEvent"])('dash_section_remove', {
          key: toggledSection.key
        });
      }

      updateSections(sections);
    };
  };

  const onMove = (index, change) => {
    const movedSection = sections.splice(index, 1).shift();
    const newIndex = index + change; // Figure out the index of the skipped section.

    const nextJumpedSectionIndex = change < 0 ? newIndex : newIndex - 1;

    if (sections[nextJumpedSectionIndex].isVisible || // Is the skipped section visible?
    index === 0 || // Will this be the first element?
    index === sections.length - 1 // Will this be the last element?
    ) {
        // Yes, lets insert.
        sections.splice(newIndex, 0, movedSection);
        updateSections(sections);
        const eventProps = {
          key: movedSection.key,
          direction: change > 0 ? 'down' : 'up'
        };
        Object(external_wc_tracks_["recordEvent"])('dash_section_order_change', eventProps);
      } else {
      // No, lets try the next one.
      onMove(index, change + change);
    }
  };

  const renderAddMore = () => {
    const hiddenSections = sections.filter(section => section.isVisible === false);

    if (hiddenSections.length === 0) {
      return null;
    }

    return Object(external_wp_element_["createElement"])(external_wp_components_["Dropdown"], {
      position: "top center",
      className: "woocommerce-dashboard-section__add-more",
      renderToggle: ({
        onToggle,
        isOpen
      }) => Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        onClick: onToggle,
        title: Object(external_wp_i18n_["__"])('Add more sections', 'woocommerce-admin'),
        "aria-expanded": isOpen
      }, Object(external_wp_element_["createElement"])(icon["a" /* default */], {
        icon: plus_circle_filled
      })),
      renderContent: ({
        onToggle
      }) => Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["H"], null, Object(external_wp_i18n_["__"])('Dashboard Sections', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-dashboard-section__add-more-choices"
      }, hiddenSections.map(section => {
        return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
          key: section.key,
          onClick: toggleVisibility(section.key, onToggle),
          className: "woocommerce-dashboard-section__add-more-btn",
          title: Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('Add %s section', 'woocommerce-admin'), section.title)
        }, Object(external_wp_element_["createElement"])(icon["a" /* default */], {
          className: section.key + '__icon',
          icon: section.icon,
          size: 30
        }), Object(external_wp_element_["createElement"])("span", {
          className: "woocommerce-dashboard-section__add-more-btn-title"
        }, section.title));
      })))
    });
  };

  const renderDashboardReports = () => {
    const {
      period,
      compare,
      before,
      after
    } = Object(external_wc_date_["getDateParamsFromQuery"])(query, defaultDateRange);
    const {
      primary: primaryDate,
      secondary: secondaryDate
    } = Object(external_wc_date_["getCurrentDates"])(query, defaultDateRange);
    const dateQuery = {
      period,
      compare,
      before,
      after,
      primaryDate,
      secondaryDate
    };
    const visibleSectionKeys = sections.filter(section => section.isVisible).map(section => section.key);
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(report_filters["a" /* default */], {
      report: "dashboard",
      query: query,
      path: path,
      dateQuery: dateQuery,
      isoDateFormat: external_wc_date_["isoDateFormat"],
      filters: filters
    }), sections.map((section, index) => {
      if (section.isVisible) {
        return Object(external_wp_element_["createElement"])(section_Section, {
          component: section.component,
          hiddenBlocks: section.hiddenBlocks,
          key: section.key,
          onChangeHiddenBlocks: onChangeHiddenBlocks(section.key),
          onTitleUpdate: onSectionTitleUpdate(section.key),
          path: path,
          query: query,
          title: section.title,
          onMove: Object(external_lodash_["partial"])(onMove, index),
          onRemove: toggleVisibility(section.key),
          isFirst: section.key === visibleSectionKeys[0],
          isLast: section.key === visibleSectionKeys[visibleSectionKeys.length - 1],
          filters: filters
        });
      }

      return null;
    }), renderAddMore());
  };

  return Object(external_wp_element_["createElement"])(currency_context["a" /* CurrencyContext */].Provider, {
    value: Object(currency_context["b" /* getFilteredCurrencyInstance */])(Object(external_wc_navigation_["getQuery"])())
  }, renderDashboardReports());
};

/* harmony default export */ var customizable = __webpack_exports__["default"] = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(select => {
  const {
    woocommerce_default_date_range: defaultDateRange
  } = select(external_wc_data_["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings');
  const withSelectData = {
    defaultDateRange
  };
  return withSelectData;
}))(CustomizableDashboard));

/***/ })

}]);