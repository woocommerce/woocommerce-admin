(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[32],{

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFilteredCurrencyInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyContext; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(110);
/* harmony import */ var _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_currency__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/**
 * External dependencies
 */




var appCurrency = _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2___default()(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_3__[/* CURRENCY */ "b"]);
var getFilteredCurrencyInstance = function getFilteredCurrencyInstance(query) {
  var config = appCurrency.getCurrencyConfig();
  var filteredConfig = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])('woocommerce_admin_report_currency', config, query);
  return _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2___default()(filteredConfig);
};
var CurrencyContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createContext"])(appCurrency // default value
);

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getIndicatorValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIndicatorData; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_date__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(144);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_number__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */








function getReportUrl(href, persistedQuery, primaryItem) {
  if (!href) {
    return '';
  }

  if (href === '/jetpack') {
    return Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_7__[/* getAdminLink */ "f"])('admin.php?page=jetpack#/dashboard');
  }

  return Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__["getNewPath"])(persistedQuery, href, {
    chart: primaryItem.chart
  });
}

var getIndicatorValues = function getIndicatorValues(_ref) {
  var indicator = _ref.indicator,
      primaryData = _ref.primaryData,
      secondaryData = _ref.secondaryData,
      currency = _ref.currency,
      formatAmount = _ref.formatAmount,
      persistedQuery = _ref.persistedQuery;
  var primaryItem = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["find"])(primaryData.data, function (data) {
    return data.stat === indicator.stat;
  });
  var secondaryItem = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["find"])(secondaryData.data, function (data) {
    return data.stat === indicator.stat;
  });

  if (!primaryItem || !secondaryItem) {
    return {};
  }

  var href = primaryItem._links && primaryItem._links.report[0] && primaryItem._links.report[0].href || '';
  var reportUrl = getReportUrl(href, persistedQuery, primaryItem);
  var reportUrlType = href === '/jetpack' ? 'wp-admin' : 'wc-admin';
  var isCurrency = primaryItem.format === 'currency';
  var delta = Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_6__["calculateDelta"])(primaryItem.value, secondaryItem.value);
  var primaryValue = isCurrency ? formatAmount(primaryItem.value) : Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_6__["formatValue"])(currency, primaryItem.format, primaryItem.value);
  var secondaryValue = isCurrency ? formatAmount(secondaryItem.value) : Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_6__["formatValue"])(currency, secondaryItem.format, secondaryItem.value);
  return {
    primaryValue: primaryValue,
    secondaryValue: secondaryValue,
    delta: delta,
    reportUrl: reportUrl,
    reportUrlType: reportUrlType
  };
};
var getIndicatorData = function getIndicatorData(select, indicators, query, filters) {
  var _select = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["REPORTS_STORE_NAME"]),
      getReportItems = _select.getReportItems,
      getReportItemsError = _select.getReportItemsError,
      isResolving = _select.isResolving;

  var _select$getSetting = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings'),
      defaultDateRange = _select$getSetting.woocommerce_default_date_range;

  var datesFromQuery = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_3__["getCurrentDates"])(query, defaultDateRange);
  var endPrimary = datesFromQuery.primary.before;
  var endSecondary = datesFromQuery.secondary.before;
  var statKeys = indicators.map(function (indicator) {
    return indicator.stat;
  }).join(',');
  var filterQuery = Object(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["getFilterQuery"])({
    filters: filters,
    query: query
  });

  var primaryQuery = _objectSpread(_objectSpread({}, filterQuery), {}, {
    after: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_3__["appendTimestamp"])(datesFromQuery.primary.after, 'start'),
    before: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_3__["appendTimestamp"])(endPrimary, endPrimary.isSame(moment__WEBPACK_IMPORTED_MODULE_1___default()(), 'day') ? 'now' : 'end'),
    stats: statKeys
  });

  var secondaryQuery = _objectSpread(_objectSpread({}, filterQuery), {}, {
    after: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_3__["appendTimestamp"])(datesFromQuery.secondary.after, 'start'),
    before: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_3__["appendTimestamp"])(endSecondary, endSecondary.isSame(moment__WEBPACK_IMPORTED_MODULE_1___default()(), 'day') ? 'now' : 'end'),
    stats: statKeys
  });

  var primaryData = getReportItems('performance-indicators', primaryQuery);
  var primaryError = getReportItemsError('performance-indicators', primaryQuery) || null;
  var primaryRequesting = isResolving('getReportItems', ['performance-indicators', primaryQuery]);
  var secondaryData = getReportItems('performance-indicators', secondaryQuery);
  var secondaryError = getReportItemsError('performance-indicators', secondaryQuery) || null;
  var secondaryRequesting = isResolving('getReportItems', ['performance-indicators', secondaryQuery]);
  return {
    primaryData: primaryData,
    primaryError: primaryError,
    primaryRequesting: primaryRequesting,
    secondaryData: secondaryData,
    secondaryError: secondaryError,
    secondaryRequesting: secondaryRequesting,
    defaultDateRange: defaultDateRange
  };
};

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce_experimental__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(518);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_10__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



var ActivityHeader = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ActivityHeader, _Component);

  var _super = _createSuper(ActivityHeader);

  function ActivityHeader() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ActivityHeader);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ActivityHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          menu = _this$props.menu,
          subtitle = _this$props.subtitle,
          title = _this$props.title,
          unreadMessages = _this$props.unreadMessages;
      var cardClassName = classnames__WEBPACK_IMPORTED_MODULE_6___default()({
        'woocommerce-layout__inbox-panel-header': subtitle,
        'woocommerce-layout__activity-panel-header': !subtitle
      }, className);
      var countUnread = unreadMessages ? unreadMessages : 0;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: cardClassName
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "woocommerce-layout__inbox-title"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "f"], {
        variant: "title.small"
      }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "f"], {
        variant: "button"
      }, countUnread > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: "woocommerce-layout__inbox-badge"
      }, unreadMessages))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "woocommerce-layout__inbox-subtitle"
      }, subtitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "f"], {
        variant: "body.small"
      }, subtitle)), menu && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "woocommerce-layout__activity-panel-header-menu"
      }, menu));
    }
  }]);

  return ActivityHeader;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

ActivityHeader.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  unreadMessages: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  title: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  menu: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({
    type: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf([_woocommerce_components__WEBPACK_IMPORTED_MODULE_9__["EllipsisMenu"]])
  })
};
/* harmony default export */ __webpack_exports__["a"] = (ActivityHeader);

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ DEFAULT_ACTIONABLE_STATUSES; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ config; });

// UNUSED EXPORTS: DEFAULT_ORDER_STATUSES, DEFAULT_DATE_RANGE

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external {"this":["wp","hooks"]}
var external_this_wp_hooks_ = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/interpolate-components/lib/index.js
var lib = __webpack_require__(26);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./client/settings/index.js
var settings = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var qs_lib = __webpack_require__(50);

// EXTERNAL MODULE: external {"this":["wc","components"]}
var external_this_wc_components_ = __webpack_require__(47);

// EXTERNAL MODULE: external {"this":["wc","data"]}
var external_this_wc_data_ = __webpack_require__(22);

// EXTERNAL MODULE: external {"this":["wc","date"]}
var external_this_wc_date_ = __webpack_require__(29);

// CONCATENATED MODULE: ./client/analytics/settings/default-date.js


/**
 * External dependencies
 */





var default_date_DefaultDate = function DefaultDate(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange;

  var _useSettings = Object(external_this_wc_data_["useSettings"])('wc_admin', ['wcAdminSettings']),
      wcAdminSettings = _useSettings.wcAdminSettings;

  var defaultDateRange = wcAdminSettings.woocommerce_default_date_range;

  var change = function change(query) {
    onChange({
      target: {
        name: 'woocommerce_default_date_range',
        value: Object(qs_lib["stringify"])(query)
      }
    });
  };

  var query = Object(qs_lib["parse"])(value.replace(/&amp;/g, '&'));

  var _getDateParamsFromQue = Object(external_this_wc_date_["getDateParamsFromQuery"])(query, defaultDateRange),
      period = _getDateParamsFromQue.period,
      compare = _getDateParamsFromQue.compare,
      before = _getDateParamsFromQue.before,
      after = _getDateParamsFromQue.after;

  var _getCurrentDates = Object(external_this_wc_date_["getCurrentDates"])(query, defaultDateRange),
      primaryDate = _getCurrentDates.primary,
      secondaryDate = _getCurrentDates.secondary;

  var dateQuery = {
    period: period,
    compare: compare,
    before: before,
    after: after,
    primaryDate: primaryDate,
    secondaryDate: secondaryDate
  };
  return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["DateRangeFilterPicker"], {
    query: query,
    onRangeSelect: change,
    dateQuery: dateQuery,
    isoDateFormat: external_this_wc_date_["isoDateFormat"]
  });
};

/* harmony default export */ var default_date = (default_date_DefaultDate);
// CONCATENATED MODULE: ./client/analytics/settings/config.js


/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


var SETTINGS_FILTER = 'woocommerce_admin_analytics_settings';
var DEFAULT_ACTIONABLE_STATUSES = ['processing', 'on-hold'];
var DEFAULT_ORDER_STATUSES = ['completed', 'processing', 'refunded', 'cancelled', 'failed', 'pending', 'on-hold'];
var DEFAULT_DATE_RANGE = 'period=month&compare=previous_year';
var filteredOrderStatuses = Object.keys(settings["d" /* ORDER_STATUSES */]).filter(function (status) {
  return status !== 'refunded';
}).map(function (key) {
  return {
    value: key,
    label: settings["d" /* ORDER_STATUSES */][key],
    description: Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('Exclude the %s status from reports', 'woocommerce-admin'), settings["d" /* ORDER_STATUSES */][key])
  };
});
var unregisteredOrderStatuses = Object(settings["g" /* getSetting */])('unregisteredOrderStatuses', {});
var orderStatusOptions = [{
  key: 'defaultStatuses',
  options: filteredOrderStatuses.filter(function (status) {
    return DEFAULT_ORDER_STATUSES.includes(status.value);
  })
}, {
  key: 'customStatuses',
  label: Object(external_this_wp_i18n_["__"])('Custom Statuses', 'woocommerce-admin'),
  options: filteredOrderStatuses.filter(function (status) {
    return !DEFAULT_ORDER_STATUSES.includes(status.value);
  })
}, {
  key: 'unregisteredStatuses',
  label: Object(external_this_wp_i18n_["__"])('Unregistered Statuses', 'woocommerce-admin'),
  options: Object.keys(unregisteredOrderStatuses).map(function (key) {
    return {
      value: key,
      label: key,
      description: Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('Exclude the %s status from reports', 'woocommerce-admin'), key)
    };
  })
}];
var config = Object(external_this_wp_hooks_["applyFilters"])(SETTINGS_FILTER, {
  woocommerce_excluded_report_order_statuses: {
    label: Object(external_this_wp_i18n_["__"])('Excluded Statuses:', 'woocommerce-admin'),
    inputType: 'checkboxGroup',
    options: orderStatusOptions,
    helpText: lib_default()({
      mixedString: Object(external_this_wp_i18n_["__"])('Orders with these statuses are excluded from the totals in your reports. ' + 'The {{strong}}Refunded{{/strong}} status can not be excluded.', 'woocommerce-admin'),
      components: {
        strong: Object(external_this_wp_element_["createElement"])("strong", null)
      }
    }),
    defaultValue: ['pending', 'cancelled', 'failed']
  },
  woocommerce_actionable_order_statuses: {
    label: Object(external_this_wp_i18n_["__"])('Actionable Statuses:', 'woocommerce-admin'),
    inputType: 'checkboxGroup',
    options: orderStatusOptions,
    helpText: Object(external_this_wp_i18n_["__"])('Orders with these statuses require action on behalf of the store admin. ' + 'These orders will show up in the Home Screen - Orders task.', 'woocommerce-admin'),
    defaultValue: DEFAULT_ACTIONABLE_STATUSES
  },
  woocommerce_default_date_range: {
    name: 'woocommerce_default_date_range',
    label: Object(external_this_wp_i18n_["__"])('Default Date Range:', 'woocommerce-admin'),
    inputType: 'component',
    component: default_date,
    helpText: Object(external_this_wp_i18n_["__"])('Select a default date range. When no range is selected, reports will be viewed by ' + 'the default date range.', 'woocommerce-admin'),
    defaultValue: DEFAULT_DATE_RANGE
  }
});

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","compose"]}
var external_this_wp_compose_ = __webpack_require__(18);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(15);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);

// EXTERNAL MODULE: ./client/settings/index.js
var settings = __webpack_require__(25);

// EXTERNAL MODULE: external {"this":["wc","data"]}
var external_this_wc_data_ = __webpack_require__(22);

// EXTERNAL MODULE: external {"this":["wc","navigation"]}
var external_this_wc_navigation_ = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(5);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(21);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(7);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(34);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: external {"this":["wp","components"]}
var external_this_wp_components_ = __webpack_require__(4);

// EXTERNAL MODULE: external {"this":["wc","components"]}
var external_this_wc_components_ = __webpack_require__(47);

// EXTERNAL MODULE: external {"this":["wc","tracks"]}
var external_this_wc_tracks_ = __webpack_require__(28);

// EXTERNAL MODULE: ./packages/experimental/build-module/index.js
var build_module = __webpack_require__(31);

// EXTERNAL MODULE: ./client/homescreen/stats-overview/style.scss
var style = __webpack_require__(541);

// EXTERNAL MODULE: external {"this":["wp","hooks"]}
var external_this_wp_hooks_ = __webpack_require__(42);

// CONCATENATED MODULE: ./client/homescreen/stats-overview/defaults.js
/**
 * External dependencies
 */

var DEFAULT_STATS = Object(external_this_wp_hooks_["applyFilters"])('woocommerce_admin_homepage_default_stats', ['revenue/total_sales', 'revenue/net_revenue', 'orders/orders_count', 'products/items_sold', 'jetpack/stats/visitors', 'jetpack/stats/views']);
var DEFAULT_HIDDEN_STATS = ['revenue/net_revenue', 'products/items_sold'];
// EXTERNAL MODULE: ./client/lib/currency-context.js
var currency_context = __webpack_require__(500);

// EXTERNAL MODULE: ./client/dashboard/store-performance/utils.js
var utils = __webpack_require__(516);

// CONCATENATED MODULE: ./client/homescreen/stats-overview/stats-list.js


/**
 * External dependencies
 */







/**
 * Internal dependencies
 */



var stats_list_StatsList = function StatsList(_ref) {
  var stats = _ref.stats,
      primaryData = _ref.primaryData,
      secondaryData = _ref.secondaryData,
      primaryRequesting = _ref.primaryRequesting,
      secondaryRequesting = _ref.secondaryRequesting,
      primaryError = _ref.primaryError,
      secondaryError = _ref.secondaryError,
      query = _ref.query;

  var _useContext = Object(external_this_wp_element_["useContext"])(currency_context["a" /* CurrencyContext */]),
      formatAmount = _useContext.formatAmount,
      getCurrencyConfig = _useContext.getCurrencyConfig;

  if (primaryError || secondaryError) {
    return null;
  }

  var persistedQuery = Object(external_this_wc_navigation_["getPersistedQuery"])(query);
  var currency = getCurrencyConfig();
  return Object(external_this_wp_element_["createElement"])("ul", {
    className: classnames_default()('woocommerce-stats-overview__stats', {
      'is-even': stats.length % 2 === 0
    })
  }, stats.map(function (item) {
    if (primaryRequesting || secondaryRequesting) {
      return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["SummaryNumberPlaceholder"], {
        key: item.stat
      });
    }

    var _getIndicatorValues = Object(utils["b" /* getIndicatorValues */])({
      indicator: item,
      primaryData: primaryData,
      secondaryData: secondaryData,
      currency: currency,
      formatAmount: formatAmount,
      persistedQuery: persistedQuery
    }),
        primaryValue = _getIndicatorValues.primaryValue,
        secondaryValue = _getIndicatorValues.secondaryValue,
        delta = _getIndicatorValues.delta,
        reportUrl = _getIndicatorValues.reportUrl,
        reportUrlType = _getIndicatorValues.reportUrlType;

    return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["SummaryNumber"], {
      isHomescreen: true,
      key: item.stat,
      href: reportUrl,
      hrefType: reportUrlType,
      label: item.label,
      value: primaryValue,
      prevLabel: Object(external_this_wp_i18n_["__"])('Previous Period:', 'woocommerce-admin'),
      prevValue: secondaryValue,
      delta: delta,
      onLinkClickCallback: function onLinkClickCallback() {
        Object(external_this_wc_tracks_["recordEvent"])('statsoverview_indicators_click', {
          key: item.stat
        });
      }
    });
  }));
};
/* harmony default export */ var stats_list = (Object(external_this_wp_data_["withSelect"])(function (select, _ref2) {
  var stats = _ref2.stats,
      query = _ref2.query;

  if (stats.length === 0) {
    return;
  }

  return Object(utils["a" /* getIndicatorData */])(select, stats, query);
})(stats_list_StatsList));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(9);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: external {"this":["wp","dataControls"]}
var external_this_wp_dataControls_ = __webpack_require__(17);

// CONCATENATED MODULE: ./packages/data/src/plugins/constants.js
/**
 * External dependencies
 */

var STORE_NAME = 'wc/admin/plugins';
/**
 * Plugin slugs and names as key/value pairs.
 */

var pluginNames = {
  'facebook-for-woocommerce': Object(external_this_wp_i18n_["__"])('Facebook for WooCommerce', 'woocommerce-admin'),
  jetpack: Object(external_this_wp_i18n_["__"])('Jetpack', 'woocommerce-admin'),
  'klarna-checkout-for-woocommerce': Object(external_this_wp_i18n_["__"])('Klarna Checkout for WooCommerce', 'woocommerce-admin'),
  'klarna-payments-for-woocommerce': Object(external_this_wp_i18n_["__"])('Klarna Payments for WooCommerce', 'woocommerce-admin'),
  'mailchimp-for-woocommerce': Object(external_this_wp_i18n_["__"])('Mailchimp for WooCommerce', 'woocommerce-admin'),
  'creative-mail-by-constant-contact': Object(external_this_wp_i18n_["__"])('Creative Mail for WooCommerce', 'woocommerce-admin'),
  'woocommerce-gateway-paypal-express-checkout': Object(external_this_wp_i18n_["__"])('WooCommerce PayPal', 'woocommerce-admin'),
  'woocommerce-gateway-stripe': Object(external_this_wp_i18n_["__"])('WooCommerce Stripe', 'woocommerce-admin'),
  'woocommerce-payfast-gateway': Object(external_this_wp_i18n_["__"])('WooCommerce PayFast', 'woocommerce-admin'),
  'woocommerce-payments': Object(external_this_wp_i18n_["__"])('WooCommerce Payments', 'woocommerce-admin'),
  'woocommerce-services': Object(external_this_wp_i18n_["__"])('WooCommerce Shipping & Tax', 'woocommerce-admin'),
  'woocommerce-shipstation-integration': Object(external_this_wp_i18n_["__"])('WooCommerce ShipStation Gateway', 'woocommerce-admin'),
  'kliken-marketing-for-google': Object(external_this_wp_i18n_["__"])('Google Ads', 'woocommerce-admin'),
  'woo-razorpay': Object(external_this_wp_i18n_["__"])('Razorpay', 'woocommerce-admin')
};
// CONCATENATED MODULE: ./packages/data/src/plugins/action-types.js
var TYPES = {
  UPDATE_ACTIVE_PLUGINS: 'UPDATE_ACTIVE_PLUGINS',
  UPDATE_INSTALLED_PLUGINS: 'UPDATE_INSTALLED_PLUGINS',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING',
  SET_ERROR: 'SET_ERROR',
  UPDATE_JETPACK_CONNECTION: 'UPDATE_JETPACK_CONNECTION',
  UPDATE_JETPACK_CONNECT_URL: 'UPDATE_JETPACK_CONNECT_URL'
};
/* harmony default export */ var action_types = (TYPES);
// CONCATENATED MODULE: ./packages/data/src/constants.js
var JETPACK_NAMESPACE = '/jetpack/v4';
var NAMESPACE = '/wc-analytics';
var WC_ADMIN_NAMESPACE = '/wc-admin';
var WCS_NAMESPACE = '/wc/v1'; // WCS endpoints like Stripe are not avaiable on later /wc versions
// WordPress & WooCommerce both set a hard limit of 100 for the per_page parameter

var MAX_PER_PAGE = 100;
var SECOND = 1000;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
var WEEK = 7 * DAY;
var MONTH = 365 * DAY / 12;
var DEFAULT_REQUIREMENT = {
  timeout: 1 * MINUTE,
  freshness: 30 * MINUTE
};
var DEFAULT_ACTIONABLE_STATUSES = ['processing', 'on-hold'];
var QUERY_DEFAULTS = {
  pageSize: 25,
  period: 'month',
  compare: 'previous_year',
  noteTypes: ['info', 'marketing', 'survey', 'warning']
};
// CONCATENATED MODULE: ./packages/data/src/plugins/actions.js


var _marked = /*#__PURE__*/regenerator_default.a.mark(installPlugins),
    _marked2 = /*#__PURE__*/regenerator_default.a.mark(activatePlugins),
    _marked3 = /*#__PURE__*/regenerator_default.a.mark(installAndActivatePlugins),
    _marked4 = /*#__PURE__*/regenerator_default.a.mark(connectToJetpack),
    _marked5 = /*#__PURE__*/regenerator_default.a.mark(actions_installJetpackAndConnect),
    _marked6 = /*#__PURE__*/regenerator_default.a.mark(connectToJetpackWithFailureRedirect);

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




function updateActivePlugins(active) {
  var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    type: action_types.UPDATE_ACTIVE_PLUGINS,
    active: active,
    replace: replace
  };
}
function updateInstalledPlugins(installed) {
  var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    type: action_types.UPDATE_INSTALLED_PLUGINS,
    installed: installed,
    replace: replace
  };
}
function setIsRequesting(selector, isRequesting) {
  return {
    type: action_types.SET_IS_REQUESTING,
    selector: selector,
    isRequesting: isRequesting
  };
}
function setError(selector, error) {
  return {
    type: action_types.SET_ERROR,
    selector: selector,
    error: error
  };
}
function updateIsJetpackConnected(jetpackConnection) {
  return {
    type: action_types.UPDATE_JETPACK_CONNECTION,
    jetpackConnection: jetpackConnection
  };
}
function updateJetpackConnectUrl(redirectUrl, jetpackConnectUrl) {
  return {
    type: action_types.UPDATE_JETPACK_CONNECT_URL,
    jetpackConnectUrl: jetpackConnectUrl,
    redirectUrl: redirectUrl
  };
}
function installPlugins(plugins) {
  var results;
  return regenerator_default.a.wrap(function installPlugins$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return setIsRequesting('installPlugins', true);

        case 2:
          _context.prev = 2;
          _context.next = 5;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: "".concat(WC_ADMIN_NAMESPACE, "/plugins/install"),
            method: 'POST',
            data: {
              plugins: plugins.join(',')
            }
          });

        case 5:
          results = _context.sent;

          if (!results.data.installed.length) {
            _context.next = 9;
            break;
          }

          _context.next = 9;
          return updateInstalledPlugins(results.data.installed);

        case 9:
          if (!Object.keys(results.errors.errors).length) {
            _context.next = 11;
            break;
          }

          throw results.errors;

        case 11:
          _context.next = 13;
          return setIsRequesting('installPlugins', false);

        case 13:
          return _context.abrupt("return", results);

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](2);
          _context.next = 20;
          return setError('installPlugins', _context.t0);

        case 20:
          throw new Error(formatErrors(_context.t0));

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[2, 16]]);
}
function activatePlugins(plugins) {
  var results;
  return regenerator_default.a.wrap(function activatePlugins$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return setIsRequesting('activatePlugins', true);

        case 2:
          _context2.prev = 2;
          _context2.next = 5;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: "".concat(WC_ADMIN_NAMESPACE, "/plugins/activate"),
            method: 'POST',
            data: {
              plugins: plugins.join(',')
            }
          });

        case 5:
          results = _context2.sent;

          if (!results.data.activated.length) {
            _context2.next = 9;
            break;
          }

          _context2.next = 9;
          return updateActivePlugins(results.data.activated);

        case 9:
          if (!Object.keys(results.errors.errors).length) {
            _context2.next = 11;
            break;
          }

          throw results.errors;

        case 11:
          _context2.next = 13;
          return setIsRequesting('activatePlugins', false);

        case 13:
          return _context2.abrupt("return", results);

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](2);
          _context2.next = 20;
          return setError('activatePlugins', _context2.t0);

        case 20:
          throw new Error(formatErrors(_context2.t0));

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[2, 16]]);
}
function installAndActivatePlugins(plugins) {
  var activations;
  return regenerator_default.a.wrap(function installAndActivatePlugins$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(external_this_wp_dataControls_["dispatch"])(STORE_NAME, 'installPlugins', plugins);

        case 3:
          _context3.next = 5;
          return Object(external_this_wp_dataControls_["dispatch"])(STORE_NAME, 'activatePlugins', plugins);

        case 5:
          activations = _context3.sent;
          return _context3.abrupt("return", activations);

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          throw _context3.t0;

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 9]]);
}
var actions_createErrorNotice = function createErrorNotice(errorMessage) {
  return Object(external_this_wp_dataControls_["dispatch"])('core/notices', 'createNotice', errorMessage);
};
function connectToJetpack(getAdminLink) {
  var url, error;
  return regenerator_default.a.wrap(function connectToJetpack$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(external_this_wp_dataControls_["select"])(STORE_NAME, 'getJetpackConnectUrl', {
            redirect_url: getAdminLink('admin.php?page=wc-admin')
          });

        case 2:
          url = _context4.sent;
          _context4.next = 5;
          return Object(external_this_wp_dataControls_["select"])(STORE_NAME, 'getPluginsError', 'getJetpackConnectUrl');

        case 5:
          error = _context4.sent;

          if (!error) {
            _context4.next = 10;
            break;
          }

          throw new Error(error);

        case 10:
          return _context4.abrupt("return", url);

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
function actions_installJetpackAndConnect(errorAction, getAdminLink) {
  var url;
  return regenerator_default.a.wrap(function installJetpackAndConnect$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(external_this_wp_dataControls_["dispatch"])(STORE_NAME, 'installPlugins', ['jetpack']);

        case 3:
          _context5.next = 5;
          return Object(external_this_wp_dataControls_["dispatch"])(STORE_NAME, 'activatePlugins', ['jetpack']);

        case 5:
          _context5.next = 7;
          return Object(external_this_wp_dataControls_["dispatch"])(STORE_NAME, 'connectToJetpack', getAdminLink);

        case 7:
          url = _context5.sent;
          window.location = url;
          _context5.next = 15;
          break;

        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 15;
          return errorAction(_context5.t0.message);

        case 15:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 11]]);
}
function connectToJetpackWithFailureRedirect(failureRedirect, errorAction, getAdminLink) {
  var url;
  return regenerator_default.a.wrap(function connectToJetpackWithFailureRedirect$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(external_this_wp_dataControls_["dispatch"])(STORE_NAME, 'connectToJetpack', getAdminLink);

        case 3:
          url = _context6.sent;
          window.location = url;
          _context6.next = 12;
          break;

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          _context6.next = 11;
          return errorAction(_context6.t0.message);

        case 11:
          window.location = failureRedirect;

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 7]]);
}
function formatErrors(response) {
  if (response.errors) {
    // Replace the slug with a plugin name if a constant exists.
    Object.keys(response.errors).forEach(function (plugin) {
      response.errors[plugin] = response.errors[plugin].map(function (pluginError) {
        return pluginNames[plugin] ? pluginError.replace("`".concat(plugin, "`"), pluginNames[plugin]) : pluginError;
      });
    });
  }

  return response;
}
// CONCATENATED MODULE: ./client/homescreen/stats-overview/install-jetpack-cta.js



/**
 * External dependencies
 */







/**
 * Internal dependencies
 */



var install_jetpack_cta_getJetpackInstallText = function getJetpackInstallText(jetpackInstallState) {
  return {
    unavailable: Object(external_this_wp_i18n_["__"])('Get Jetpack', 'woocommerce-admin'),
    installed: Object(external_this_wp_i18n_["__"])('Activate Jetpack', 'woocommerce-admin'),
    activated: Object(external_this_wp_i18n_["__"])('Connect Jetpack', 'woocommerce-admin')
  }[jetpackInstallState] || '';
};

var install_jetpack_cta_JetpackCTA = function JetpackCTA(_ref) {
  var onClickInstall = _ref.onClickInstall,
      onClickDismiss = _ref.onClickDismiss,
      isBusy = _ref.isBusy,
      jetpackInstallState = _ref.jetpackInstallState;
  return Object(external_this_wp_element_["createElement"])("article", {
    className: "woocommerce-stats-overview__install-jetpack-promo"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-stats-overview__install-jetpack-promo__content"
  }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["H"], null, Object(external_this_wp_i18n_["__"])('Get traffic stats with Jetpack', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])("p", null, Object(external_this_wp_i18n_["__"])('Keep an eye on your views and visitors metrics with ' + 'Jetpack. Requires Jetpack plugin and a WordPress.com ' + 'account.', 'woocommerce-admin'))), Object(external_this_wp_element_["createElement"])("footer", null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    isSecondary: true,
    onClick: function onClick() {
      Object(external_this_wc_tracks_["recordEvent"])('statsoverview_install_jetpack');
      onClickInstall();
    },
    disabled: isBusy,
    isBusy: isBusy
  }, install_jetpack_cta_getJetpackInstallText(jetpackInstallState)), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    isTertiary: true,
    onClick: function onClick() {
      Object(external_this_wc_tracks_["recordEvent"])('statsoverview_dismiss_install_jetpack');
      onClickDismiss();
    },
    disabled: isBusy,
    isBusy: isBusy
  }, Object(external_this_wp_i18n_["__"])('No thanks', 'woocommerce-admin'))));
};
var install_jetpack_cta_InstallJetpackCTA = function InstallJetpackCTA() {
  var _useUserPreferences = Object(external_this_wc_data_["useUserPreferences"])(),
      updateUserPreferences = _useUserPreferences.updateUserPreferences,
      userPrefs = objectWithoutProperties_default()(_useUserPreferences, ["updateUserPreferences"]);

  var _useSelect = Object(external_this_wp_data_["useSelect"])(function (select) {
    var _select = select(external_this_wc_data_["PLUGINS_STORE_NAME"]),
        getPluginInstallState = _select.getPluginInstallState,
        isPluginsRequesting = _select.isPluginsRequesting;

    var installState = getPluginInstallState('jetpack');
    var busyState = isPluginsRequesting('getJetpackConnectUrl') || isPluginsRequesting('installPlugins') || isPluginsRequesting('activatePlugins');
    return {
      isBusy: busyState,
      jetpackInstallState: installState
    };
  }),
      jetpackInstallState = _useSelect.jetpackInstallState,
      isBusy = _useSelect.isBusy;

  var _useDispatch = Object(external_this_wp_data_["useDispatch"])(external_this_wc_data_["PLUGINS_STORE_NAME"]),
      installJetpackAndConnect = _useDispatch.installJetpackAndConnect;

  var onClickInstall = function onClickInstall() {
    installJetpackAndConnect(actions_createErrorNotice, settings["f" /* getAdminLink */]);
  };

  return Object(external_this_wp_element_["createElement"])(install_jetpack_cta_JetpackCTA, {
    jetpackInstallState: jetpackInstallState,
    isBusy: isBusy,
    onClickInstall: onClickInstall,
    onClickDismiss: function onClickDismiss() {
      var homepageStats = userPrefs.homepage_stats || {};
      homepageStats.installJetpackDismissed = true;
      updateUserPreferences({
        homepage_stats: homepageStats
      });
    }
  });
};
// CONCATENATED MODULE: ./client/homescreen/stats-overview/index.js



/**
 * External dependencies
 */











/**
 * Internal dependencies
 */






var _getSetting = Object(settings["g" /* getSetting */])('dataEndpoints', {
  performanceIndicators: []
}),
    performanceIndicators = _getSetting.performanceIndicators;

var stats_overview_stats = performanceIndicators.filter(function (indicator) {
  return DEFAULT_STATS.includes(indicator.stat);
});
var stats_overview_StatsOverview = function StatsOverview() {
  var _useUserPreferences = Object(external_this_wc_data_["useUserPreferences"])(),
      updateUserPreferences = _useUserPreferences.updateUserPreferences,
      userPrefs = objectWithoutProperties_default()(_useUserPreferences, ["updateUserPreferences"]);

  var hiddenStats = Object(external_lodash_["get"])(userPrefs, ['homepage_stats', 'hiddenStats'], DEFAULT_HIDDEN_STATS);
  var jetPackIsConnected = Object(external_this_wp_data_["useSelect"])(function (select) {
    return select(external_this_wc_data_["PLUGINS_STORE_NAME"]).isJetpackConnected();
  }, []);
  var homePageStats = userPrefs.homepage_stats || {};
  var userDismissedJetpackInstall = homePageStats.installJetpackDismissed;

  var toggleStat = function toggleStat(stat) {
    var nextHiddenStats = Object(external_lodash_["xor"])(hiddenStats, [stat]);
    updateUserPreferences({
      homepage_stats: {
        hiddenStats: nextHiddenStats
      }
    });
    Object(external_this_wc_tracks_["recordEvent"])('statsoverview_indicators_toggle', {
      indicator_name: stat,
      status: nextHiddenStats.includes(stat) ? 'off' : 'on'
    });
  };

  var activeStats = stats_overview_stats.filter(function (item) {
    return !hiddenStats.includes(item.stat);
  });
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Card"], {
    size: "large",
    className: "woocommerce-stats-overview woocommerce-homescreen-card"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["CardHeader"], {
    size: "medium"
  }, Object(external_this_wp_element_["createElement"])(build_module["f" /* Text */], {
    variant: "title.small"
  }, Object(external_this_wp_i18n_["__"])('Stats overview', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])(external_this_wc_components_["EllipsisMenu"], {
    label: Object(external_this_wp_i18n_["__"])('Choose which values to display', 'woocommerce-admin'),
    renderContent: function renderContent() {
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["MenuTitle"], null, Object(external_this_wp_i18n_["__"])('Display stats:', 'woocommerce-admin')), stats_overview_stats.map(function (item) {
        var checked = !hiddenStats.includes(item.stat);
        return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["MenuItem"], {
          checked: checked,
          isCheckbox: true,
          isClickable: true,
          key: item.stat,
          onInvoke: function onInvoke() {
            return toggleStat(item.stat);
          }
        }, item.label);
      }));
    }
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["CardBody"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["TabPanel"], {
    className: "woocommerce-stats-overview__tabs",
    onSelect: function onSelect(period) {
      Object(external_this_wc_tracks_["recordEvent"])('statsoverview_date_picker_update', {
        period: period
      });
    },
    tabs: [{
      title: Object(external_this_wp_i18n_["__"])('Today', 'woocommerce-admin'),
      name: 'today'
    }, {
      title: Object(external_this_wp_i18n_["__"])('Week to date', 'woocommerce-admin'),
      name: 'week'
    }, {
      title: Object(external_this_wp_i18n_["__"])('Month to date', 'woocommerce-admin'),
      name: 'month'
    }]
  }, function (tab) {
    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, !jetPackIsConnected && !userDismissedJetpackInstall && Object(external_this_wp_element_["createElement"])(install_jetpack_cta_InstallJetpackCTA, null), Object(external_this_wp_element_["createElement"])(stats_list, {
      query: {
        period: tab.name,
        compare: 'previous_period'
      },
      stats: activeStats
    }));
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["CardFooter"], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Link"], {
    className: "woocommerce-stats-overview__more-btn",
    href: Object(external_this_wc_navigation_["getNewPath"])({}, '/analytics/overview'),
    type: "wc-admin",
    onClick: function onClick() {
      Object(external_this_wc_tracks_["recordEvent"])('statsoverview_indicators_click', {
        key: 'view_detailed_stats'
      });
    }
  }, Object(external_this_wp_i18n_["__"])('View detailed stats', 'woocommerce-admin'))));
};
/* harmony default export */ var stats_overview = (stats_overview_StatsOverview);
// EXTERNAL MODULE: ./client/task-list/style.scss
var task_list_style = __webpack_require__(530);

// CONCATENATED MODULE: ./client/task-list/placeholder.js


/**
 * Internal dependencies
 */


var placeholder_TaskListPlaceholder = function TaskListPlaceholder(props) {
  var _props$numTasks = props.numTasks,
      numTasks = _props$numTasks === void 0 ? 5 : _props$numTasks;
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-task-dashboard__container"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-card woocommerce-task-card is-loading",
    "aria-hidden": true
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-card__header"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-card__title-wrapper"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-card__title woocommerce-card__header-item"
  }, Object(external_this_wp_element_["createElement"])("span", {
    className: "is-placeholder"
  })))), Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-card__body"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-list"
  }, Array.from(new Array(numTasks)).map(function (v, i) {
    return Object(external_this_wp_element_["createElement"])("div", {
      key: i,
      className: "woocommerce-list__item has-action"
    }, Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-list__item-inner"
    }, Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-list__item-before"
    }, Object(external_this_wp_element_["createElement"])("span", {
      className: "is-placeholder"
    })), Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-list__item-text"
    }, Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-list__item-title"
    }, Object(external_this_wp_element_["createElement"])("span", {
      className: "is-placeholder"
    }))), Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-list__item-after"
    }, Object(external_this_wp_element_["createElement"])("span", {
      className: "is-placeholder"
    }))));
  })))));
};

/* harmony default export */ var placeholder = (placeholder_TaskListPlaceholder);
// EXTERNAL MODULE: ./client/inbox-panel/index.js + 4 modules
var inbox_panel = __webpack_require__(580);

// CONCATENATED MODULE: ./client/homescreen/welcome-modal/illustrations/line-chart.js


/**
 * External dependencies
 */

var line_chart_LineChartIllustration = function LineChartIllustration() {
  return Object(external_this_wp_element_["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "517",
    height: "160",
    fill: "none"
  }, Object(external_this_wp_element_["createElement"])("defs", null), Object(external_this_wp_element_["createElement"])("g", {
    clipPath: "url(#clip0)"
  }, Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M0 0h517v160H0z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#fff",
    fillOpacity: ".65",
    d: "M125.85 217.924l-1.055-.321c-34.868-10.598-101.138-36.619-95.91-101.998 7.156-89.462 89.192-28.933 194.231-87.715 161.485-90.37 242.851-42.249 253.957 78.717 10.842 118.101-82.942 115.494-138.938 123.306-118.486 16.529-165.516 2.231-212.285-11.989z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#F6F7F7",
    d: "M125 33h267v185H125z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M327.367 93.974a6.417 6.417 0 00-6.285 7.671 6.418 6.418 0 005.035 5.044 6.405 6.405 0 006.579-2.73 6.427 6.427 0 00-.797-8.105 6.404 6.404 0 00-4.532-1.88zm0 11.615a5.18 5.18 0 01-3.668-1.522 5.2 5.2 0 01-1.23-5.38 5.196 5.196 0 014.168-3.447 5.18 5.18 0 014.967 2.137 5.201 5.201 0 01-1.546 7.453 5.186 5.186 0 01-2.706.75l.015.009z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M329.332 103.181l.806-.811a.354.354 0 00.078-.391.365.365 0 00-.078-.116l-1.456-1.461 1.456-1.458a.363.363 0 00.105-.254.36.36 0 00-.105-.254l-.806-.81a.354.354 0 00-.254-.106.356.356 0 00-.255.106l-1.456 1.458-1.456-1.458a.35.35 0 00-.253-.105.355.355 0 00-.253.105l-.809.826a.362.362 0 00-.078.39.363.363 0 00.078.117l1.456 1.458-1.456 1.461a.369.369 0 00-.105.254.356.356 0 00.105.254l.809.81a.354.354 0 00.39.078.354.354 0 00.116-.078l1.456-1.461 1.456 1.461a.366.366 0 00.509-.015zM314.559 145.63a6.413 6.413 0 00-2.722-4.13 6.429 6.429 0 00-4.883-.957l-.192.046c-.346.08-.684.191-1.01.33a6.437 6.437 0 00-3.892 5.926 6.433 6.433 0 003.907 5.916l.183.074a6.402 6.402 0 007.999-2.997 6.423 6.423 0 00.735-3.001 6.196 6.196 0 00-.125-1.207zm-1.184 1.978a.028.028 0 010 .018v.058a5.213 5.213 0 01-.913 2.181 5.191 5.191 0 01-4.068 2.146 5.162 5.162 0 01-3.445-1.2 5.2 5.2 0 01.693-8.443 4.936 4.936 0 011.026-.464l.192-.058a5.176 5.176 0 014.527.859 5.201 5.201 0 012.058 4.129 4.906 4.906 0 01-.07.774z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M310.223 149.613l.808-.81a.349.349 0 00.078-.116.348.348 0 000-.275.353.353 0 00-.078-.117l-1.455-1.458 1.455-1.458a.36.36 0 00.079-.393.36.36 0 00-.079-.117l-.808-.807a.362.362 0 00-.391-.078.349.349 0 00-.116.078l-1.455 1.464-1.465-1.464a.366.366 0 00-.254-.106.36.36 0 00-.253.106l-.809.807a.358.358 0 00-.078.393.358.358 0 00.078.117l1.459 1.458-1.459 1.458a.356.356 0 00-.078.392.382.382 0 00.078.116l.809.81a.365.365 0 00.253.106.366.366 0 00.254-.106l1.458-1.458 1.456 1.458a.353.353 0 00.513 0zM295.605 51.781l-.583-.587a.297.297 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372a.31.31 0 00.339.07.297.297 0 00.1-.07l4.465-4.439a.316.316 0 00.097-.22.313.313 0 00-.094-.223zm0 0l-.583-.587a.297.297 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372a.31.31 0 00.339.07.297.297 0 00.1-.07l4.465-4.439a.316.316 0 00.097-.22.313.313 0 00-.094-.223zm0 0l-.583-.587a.297.297 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372a.31.31 0 00.339.07.297.297 0 00.1-.07l4.465-4.439a.316.316 0 00.097-.22.313.313 0 00-.094-.223zm0 0l-.583-.587a.297.297 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372a.31.31 0 00.339.07.297.297 0 00.1-.07l4.465-4.439a.316.316 0 00.097-.22.313.313 0 00-.094-.223zm-3.628-4.619a6.402 6.402 0 00-5.921 3.963 6.432 6.432 0 001.389 6.996 6.404 6.404 0 009.86-.973 6.428 6.428 0 00-.797-8.106 6.403 6.403 0 00-4.531-1.88zm0 11.616a5.186 5.186 0 01-4.793-3.208 5.2 5.2 0 011.124-5.663 5.186 5.186 0 015.654-1.126 5.204 5.204 0 011.685 8.476 5.17 5.17 0 01-3.67 1.515v.006zm3.628-6.99l-.583-.588a.298.298 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372c.029.03.063.053.1.07a.31.31 0 00.239 0 .297.297 0 00.1-.07l4.465-4.438a.304.304 0 00.075-.347.31.31 0 00-.072-.103v.006zm0 0l-.583-.588a.298.298 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372c.029.03.063.053.1.07a.31.31 0 00.239 0 .297.297 0 00.1-.07l4.465-4.438a.304.304 0 00.075-.347.31.31 0 00-.072-.103v.006zm0 0l-.583-.588a.298.298 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372c.029.03.063.053.1.07a.31.31 0 00.239 0 .297.297 0 00.1-.07l4.465-4.438a.304.304 0 00.075-.347.31.31 0 00-.072-.103v.006zm0 0l-.583-.588a.298.298 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372c.029.03.063.053.1.07a.31.31 0 00.239 0 .297.297 0 00.1-.07l4.465-4.438a.304.304 0 00.075-.347.31.31 0 00-.072-.103v.006zm0 0l-.583-.588a.298.298 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372c.029.03.063.053.1.07a.31.31 0 00.239 0 .297.297 0 00.1-.07l4.465-4.438a.304.304 0 00.075-.347.31.31 0 00-.072-.103v.006zM306.96 98.595l-.582-.59a.311.311 0 00-.22-.093.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.303.303 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.312.312 0 00.097-.22.308.308 0 00-.091-.22zm0 0l-.582-.59a.311.311 0 00-.22-.093.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.303.303 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.312.312 0 00.097-.22.308.308 0 00-.091-.22zm0 0l-.582-.59a.311.311 0 00-.22-.093.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.303.303 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.312.312 0 00.097-.22.308.308 0 00-.091-.22zm0 0l-.582-.59a.311.311 0 00-.22-.093.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.303.303 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.312.312 0 00.097-.22.308.308 0 00-.091-.22zm-3.628-4.621a6.417 6.417 0 00-6.285 7.671 6.412 6.412 0 005.035 5.044 6.401 6.401 0 006.578-2.73 6.42 6.42 0 00-.797-8.105 6.4 6.4 0 00-4.531-1.88zm0 11.615a5.18 5.18 0 01-4.793-3.208 5.201 5.201 0 013.781-7.085 5.179 5.179 0 015.326 2.21c.57.854.874 1.86.874 2.887a5.202 5.202 0 01-1.516 3.677 5.178 5.178 0 01-3.672 1.516v.003zm3.628-6.99l-.582-.59a.31.31 0 00-.22-.094.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.302.302 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.3.3 0 00.098-.22.304.304 0 00-.092-.223v.002zm0 0l-.582-.59a.31.31 0 00-.22-.094.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.302.302 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.3.3 0 00.098-.22.304.304 0 00-.092-.223v.002zm0 0l-.582-.59a.31.31 0 00-.22-.094.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.302.302 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.3.3 0 00.098-.22.304.304 0 00-.092-.223v.002zm0 0l-.582-.59a.31.31 0 00-.22-.094.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.302.302 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.3.3 0 00.098-.22.304.304 0 00-.092-.223v.002zm0 0l-.582-.59a.31.31 0 00-.22-.094.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.302.302 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.3.3 0 00.098-.22.304.304 0 00-.092-.223v.002zM287.774 145.407l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.309.309 0 00.097-.219.309.309 0 00-.091-.221zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.309.309 0 00.097-.219.309.309 0 00-.091-.221zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.309.309 0 00.097-.219.309.309 0 00-.091-.221zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.309.309 0 00.097-.219.309.309 0 00-.091-.221zm-3.628-4.622a6.416 6.416 0 00-6.285 7.671 6.414 6.414 0 005.035 5.044 6.393 6.393 0 003.702-.365 6.418 6.418 0 003.957-5.931 6.43 6.43 0 00-1.877-4.539 6.403 6.403 0 00-4.532-1.88zm0 11.616a5.181 5.181 0 01-2.882-.876 5.2 5.2 0 011.87-9.418 5.186 5.186 0 015.326 2.21c.57.855.874 1.859.874 2.887a5.191 5.191 0 01-1.515 3.678 5.163 5.163 0 01-3.673 1.516v.003zm3.628-6.991l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.297.297 0 00.098-.22.293.293 0 00-.023-.121.284.284 0 00-.069-.102v.003zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.297.297 0 00.098-.22.293.293 0 00-.023-.121.284.284 0 00-.069-.102v.003zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.297.297 0 00.098-.22.293.293 0 00-.023-.121.284.284 0 00-.069-.102v.003zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.297.297 0 00.098-.22.293.293 0 00-.023-.121.284.284 0 00-.069-.102v.003zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.297.297 0 00.098-.22.293.293 0 00-.023-.121.284.284 0 00-.069-.102v.003zM349.568 75.187l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm-3.628-4.619a6.402 6.402 0 00-4.17 1.5 6.422 6.422 0 00-1.386 8.21 6.415 6.415 0 003.447 2.79 6.4 6.4 0 004.477-.092c.317-.126.624-.278.915-.456a6.418 6.418 0 002.93-7.236 6.422 6.422 0 00-2.309-3.413 6.4 6.4 0 00-3.904-1.303zm2.273 11.087a5.056 5.056 0 01-.665.272 5.213 5.213 0 01-3.406-.067 5.197 5.197 0 01-1.681-8.731 5.182 5.182 0 018.501 2.56 5.195 5.195 0 01-2.749 5.966zm1.355-6.468l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M268.92 47H150.08c-3.358 0-6.08 2.91-6.08 6.5s2.722 6.5 6.08 6.5h118.84c3.358 0 6.08-2.91 6.08-6.5s-2.722-6.5-6.08-6.5z",
    opacity: ".6"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M321.919 71H150.081c-3.359 0-6.081 2.686-6.081 6s2.722 6 6.081 6h171.838c3.359 0 6.081-2.686 6.081-6s-2.722-6-6.081-6z",
    opacity: ".3"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M279.927 94H150.073c-3.354 0-6.073 2.91-6.073 6.5s2.719 6.5 6.073 6.5h129.854c3.354 0 6.073-2.91 6.073-6.5s-2.719-6.5-6.073-6.5z",
    opacity: ".6"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M321.919 118H150.081c-3.359 0-6.081 2.686-6.081 6s2.722 6 6.081 6h171.838c3.359 0 6.081-2.686 6.081-6s-2.722-6-6.081-6z",
    opacity: ".3"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M261.916 141H150.084c-3.36 0-6.084 2.686-6.084 6s2.724 6 6.084 6h111.832c3.36 0 6.084-2.686 6.084-6s-2.724-6-6.084-6z",
    opacity: ".1"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M316.161 47.162a6.4 6.4 0 00-5.92 3.963 6.432 6.432 0 001.389 6.996 6.404 6.404 0 009.86-.973 6.428 6.428 0 00-.797-8.106 6.404 6.404 0 00-4.532-1.88zm0 11.616a5.18 5.18 0 01-2.882-.876 5.198 5.198 0 011.87-9.417 5.181 5.181 0 015.326 2.21c.57.854.874 1.859.874 2.887a5.195 5.195 0 01-3.201 4.8c-.63.26-1.305.392-1.987.39v.006z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M318.127 56.366l.808-.807a.35.35 0 00.078-.117.346.346 0 000-.276.35.35 0 00-.078-.117l-1.458-1.458 1.455-1.458a.35.35 0 00.078-.117.346.346 0 000-.277.35.35 0 00-.078-.117l-.808-.807a.364.364 0 00-.254-.105.358.358 0 00-.253.105l-1.456 1.458-1.455-1.458a.361.361 0 00-.51 0l-.806.807a.365.365 0 00-.107.255.365.365 0 00.107.256l1.456 1.458-1.453 1.455a.365.365 0 00-.079.394.381.381 0 00.079.116l.806.807a.353.353 0 00.255.106.363.363 0 00.255-.106l1.455-1.458 1.456 1.458a.352.352 0 00.253.107.356.356 0 00.254-.104zM369.966 70.568a6.402 6.402 0 00-5.921 3.963 6.432 6.432 0 001.389 6.995 6.404 6.404 0 0010.94-4.539 6.403 6.403 0 00-3.953-5.935 6.383 6.383 0 00-2.455-.484zm0 11.616a5.179 5.179 0 01-3.17-1.076 5.203 5.203 0 01-1.621-6.136 5.187 5.187 0 015.512-3.13 5.186 5.186 0 012.985 1.519 5.2 5.2 0 01-1.158 8.146 5.18 5.18 0 01-2.548.674v.003z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M371.925 79.772l.808-.807a.363.363 0 000-.51l-1.458-1.459 1.458-1.458a.348.348 0 00.078-.116.343.343 0 000-.275.346.346 0 00-.078-.116l-.808-.81a.358.358 0 00-.507 0l-1.452 1.458-1.456-1.458a.358.358 0 00-.507 0l-.808.81a.36.36 0 00-.078.391.348.348 0 00.078.116l1.455 1.458-1.455 1.458a.364.364 0 000 .51l.808.808a.35.35 0 00.507 0l1.456-1.458 1.458 1.458a.358.358 0 00.501 0z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M344 94h90v80h-90z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#fff",
    fillOpacity: ".65",
    d: "M364.607 150.419H357v25.307h7.607v-25.307zM379.317 132h-7.607v43.455h7.607V132zM394.026 136h-7.607v61.603h7.607V136zM408.736 123h-7.607v55.726h7.607V123zM423.445 132.197h-7.607v38.342h7.607v-38.342z",
    opacity: ".2"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#fff",
    d: "M356.331 134l-.331-.495 15.486-21.052 13.65 14.005 11.039-17.456 4.84 5.868 13.168-11.268 14.625 14.021L451.763 99l.237.594-23.213 18.833-14.619-14.015-13.201 11.297-4.748-5.756-11.014 17.418-13.677-14.031L356.331 134z"
  })), Object(external_this_wp_element_["createElement"])("defs", null, Object(external_this_wp_element_["createElement"])("clipPath", {
    id: "clip0"
  }, Object(external_this_wp_element_["createElement"])("path", {
    fill: "#fff",
    d: "M0 0h517v160H0z"
  }))));
};
// CONCATENATED MODULE: ./client/homescreen/welcome-modal/illustrations/inbox.js


/**
 * External dependencies
 */

var inbox_InboxIllustration = function InboxIllustration() {
  return Object(external_this_wp_element_["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "517",
    height: "160",
    fill: "none"
  }, Object(external_this_wp_element_["createElement"])("defs", null), Object(external_this_wp_element_["createElement"])("g", {
    clipPath: "url(#clip0)"
  }, Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M0 0h517v160H0z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#fff",
    fillOpacity: ".65",
    d: "M33.576 185.926c-6.271-.911-14.742-.279-17.182 7.085-1.239 3.736-.178 7.645.98 11.08 4.89 14.682 11.49 28.444 19.643 40.954 3.897 5.965 8.253 11.884 9.592 19.504 1.34 7.619-.56 16.084-2.934 23.945-5.595 18.62-13.762 36.371-24.188 52.572 16.006 9.711 34.165 19.634 52.684 12.57 11.09-4.232 21.041-14.268 32.365-15.961 7.562-1.132 14.735 1.648 21.594 4.467a998.376 998.376 0 0195.343 45.227c13.023 7.042 26.207 14.481 40.901 16.153 14.694 1.672 31.486-3.518 41.947-17.66 1.611-2.179 3.241-4.669 5.483-5.546 2.02-.776 4.069-.045 5.952.688l113.896 44.033c6.241 2.411 12.718 4.853 19.534 3.832 6.606-.985 12.833-5.095 18.858-9.148 13.771-9.237 29.242-21.105 32.239-39.005 2.407-14.347-4.339-27.253-11.974-37.283-7.636-10.03-16.705-19.204-20.353-32.315-5.549-19.955 2.798-42.949 9.281-64.164a405.4 405.4 0 0013.244-58.574c2.588-17.377 4.004-35.179.91-51.659-3.095-16.481-11.265-31.624-24.089-38.27-16.746-8.681-38.828-2.057-54.255-13.347-13.04-9.513-17.58-29.035-25.856-44.316-14.698-27.146-41.453-40.923-67.958-50.405-28.1-10.066-58.213-16.679-88.607-10-6.962 1.527-14.047 3.833-20.152 8.649-9.36 7.388-15.196 19.616-22.986 29.33C156.104 57.468 100.341 49.156 68.22 87.48c-11.398 13.594-17.581 31.878-18.797 49.831-1.31 19.318 8.69 33.652 8.706 50.888-7.135 2.277-17.21-1.211-24.553-2.273z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#F6F7F7",
    d: "M113 33h267v185H113z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M248.466 73.79h-114.69V47.88h114.69V73.79zm-114.015-.673h113.341V48.554H134.451v24.563z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M155.702 56.63h-12.818v12.786h12.818V56.63z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M154.016 67.733h-13.493V54.274h13.493v13.46zm-12.819-.673h12.144V54.947h-12.144V67.06z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M225.267 56.966h-50v.673h50v-.673z",
    opacity: ".7"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M235.311 61.677h-60.044v.673h60.044v-.673z",
    opacity: ".5"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M225.267 66.387h-50v.673h50v-.673z",
    opacity: ".2"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M248.466 147.142h-114.69v-25.909h114.69v25.909zm-114.015-.673h113.341v-24.563H134.451v24.563z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M155.702 129.981h-12.818v12.786h12.818v-12.786z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M154.016 141.085h-13.493v-13.459h13.493v13.459zm-12.819-.673h12.144v-12.113h-12.144v12.113z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M235.311 130.318h-60.044v.673h60.044v-.673z",
    opacity: ".7"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M225.267 135.028h-50v.673h50v-.673z",
    opacity: ".5"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M215.267 139.739h-40v.673h40v-.673z",
    opacity: ".2"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M289.62 110.465H174.93V84.557h114.69v25.908zm-114.016-.672h113.341V85.23H175.604v24.563z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M267.694 106.092h12.818V93.305h-12.818v12.787z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M282.873 104.409H269.38V90.95h13.493v13.459zm-12.818-.673h12.144V91.623h-12.144v12.113z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M248.129 93.642h-60.044v.673h60.044v-.673z",
    opacity: ".7"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M238.085 98.353h-50v.672h50v-.672z",
    opacity: ".5"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M243.085 103.063h-55v.673h55v-.673z",
    opacity: ".2"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M266.035 66.154a5.363 5.363 0 005.369-5.356 5.363 5.363 0 00-5.369-5.356c-2.966 0-5.37 2.398-5.37 5.356 0 2.958 2.404 5.356 5.37 5.356zM273.793 140.515c2.966 0 5.37-2.398 5.37-5.356 0-2.958-2.404-5.356-5.37-5.356a5.363 5.363 0 00-5.369 5.356 5.363 5.363 0 005.369 5.356zM153.706 102.83a5.363 5.363 0 005.37-5.356c0-2.959-2.404-5.357-5.37-5.357s-5.37 2.398-5.37 5.357a5.363 5.363 0 005.37 5.356z",
    opacity: ".5"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M401.276 172h-70.552a8.79 8.79 0 01-6.169-2.517 8.532 8.532 0 01-2.555-6.078V131.56a3.368 3.368 0 011.078-2.471l37.386-34.915A8.113 8.113 0 01366 92c2.06 0 4.041.778 5.536 2.174l35.645 33.289a8.882 8.882 0 012.084 2.944 8.78 8.78 0 01.735 3.515v29.483c0 2.28-.919 4.466-2.555 6.078a8.79 8.79 0 01-6.169 2.517z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#F0F0F0",
    d: "M393.267 106h-54.534c-2.614 0-4.733 2.053-4.733 4.585v52.83c0 2.532 2.119 4.585 4.733 4.585h54.534c2.614 0 4.733-2.053 4.733-4.585v-52.83c0-2.532-2.119-4.585-4.733-4.585z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M366 150.493l-41.579-20.323a1.667 1.667 0 00-1.631.091 1.695 1.695 0 00-.579.619 1.725 1.725 0 00-.211.826v34.967a5.345 5.345 0 001.543 3.767 5.261 5.261 0 003.725 1.56h77.464a5.261 5.261 0 003.725-1.56 5.345 5.345 0 001.543-3.767v-34.368c0-.352-.088-.699-.257-1.008a2.069 2.069 0 00-1.688-1.071 2.035 2.035 0 00-1.009.205L366 150.493zM390 118h-48v2h48v-2zM390 124h-48v2h48v-2z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M384 130h-42v2h42v-2z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#fff",
    d: "M335 112a7 7 0 100-14 7 7 0 000 14z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M336 98a8.003 8.003 0 00-7.391 4.939 7.992 7.992 0 00-.455 4.622 7.993 7.993 0 006.285 6.285A8 8 0 00344 106a8.022 8.022 0 00-8-8zm-1.642 12.265l-4.1-4.1 1.15-1.15 2.954 2.954 6.234-6.234 1.15 1.15-7.388 7.38z"
  })), Object(external_this_wp_element_["createElement"])("defs", null, Object(external_this_wp_element_["createElement"])("clipPath", {
    id: "clip0"
  }, Object(external_this_wp_element_["createElement"])("path", {
    fill: "#fff",
    d: "M0 0h517v160H0z"
  }))));
};
// CONCATENATED MODULE: ./client/homescreen/welcome-modal/illustrations/pie-chart.js


/**
 * External dependencies
 */

var pie_chart_PieChartIllustration = function PieChartIllustration() {
  return Object(external_this_wp_element_["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "517",
    height: "160",
    fill: "none"
  }, Object(external_this_wp_element_["createElement"])("defs", null), Object(external_this_wp_element_["createElement"])("g", {
    clipPath: "url(#clip0)"
  }, Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M0 0h517v160H0z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#fff",
    fillOpacity: ".65",
    d: "M30.501 63.74c7.21-10.372 19.533-17.051 31.735-22.399l2.057-.888c12.774-5.469 25.944-10.008 39.27-14.127 7.129-2.21 14.285-4.313 21.448-6.389l5.615-1.62c7.29-2.106 14.596-4.21 21.916-6.315a6165.97 6165.97 0 0121.511-6.139 3346.684 3346.684 0 0127.597-7.677 2189.847 2189.847 0 0121.603-5.782c9.237-2.42 18.491-4.764 27.761-7.035 7.246-1.77 14.502-3.483 21.767-5.14a1152.381 1152.381 0 0128.025-6 940.985 940.985 0 0119.106-3.654l2.908-.52c27.416-4.852 55.724-8.222 82.193-2.775l.715.151c.355.074.71.148 1.067.23a87.181 87.181 0 0114.309 4.404c8.282 3.398 15.644 8.247 20.596 14.967 7.763 10.54 8.624 24.398 6.126 37.281-2.498 12.884-8.007 25.346-12.299 37.974-1.257 3.7-2.378 7.49-3.34 11.33-5.997 24.068-5.398 49.993 11.766 67.323a93.715 93.715 0 007.029 6.227c3.928 3.218 7.905 6.424 11.03 10.3 7.28 9.017 9.211 20.756 10.296 32.099 1.425 15.086 1.236 31.775-9.516 44.175-11.153 12.875-30.519 17.317-48.211 18.232-27.498 1.457-54.442-3.316-81.339-6.956-26.898-3.641-54.739-6.141-81.787-.263a121.18 121.18 0 00-17.082 5.062 108.9 108.9 0 00-21.21 10.677c-9.622 6.318-17.826 14.22-23.006 23.613-11.123 20.092-39.488 28.645-62.664 24.15-22.115-4.288-39.921-20.774-44.019-40.738-4.538-22.229 6.615-44.308 16.332-66.515a358.83 358.83 0 003.437-8.081 238.988 238.988 0 001.795-4.513 165.185 165.185 0 002.828-7.947c4.39-13.591 6.016-28.984-2.295-40.321-4.658-6.347-11.477-10.355-19.238-13.393-17.388-6.801-39.481-8.722-52.38-21.167C22.84 94.854 21.359 76.92 30.502 63.74z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#F6F7F7",
    d: "M124 33h267v185H124z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M169 152.005V229a734.947 734.947 0 01-15.628-.991l-2.372-.181v-75.823c0-.395.072-.785.212-1.15.14-.365.345-.696.604-.975.258-.279.565-.5.903-.651a2.61 2.61 0 011.066-.229h12.43c.366 0 .728.078 1.066.229.338.151.645.372.903.651.259.279.464.61.604.975.14.365.212.755.212 1.15z",
    opacity: ".7"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M186 229.733V127.377c0-.63.31-1.235.861-1.681.551-.446 1.299-.696 2.079-.696h13.12c.386 0 .768.061 1.125.181.357.119.681.294.954.515.273.221.489.483.637.771.148.289.224.598.224.91V230l-19-.267z",
    opacity: ".5"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M225 230.002v-97.406a2.843 2.843 0 012.843-2.845h12.689a2.844 2.844 0 012.844 2.845v97.196l-18.376.21z",
    opacity: ".7"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M282 88.368v140.224c-6 .145-12 .281-18 .408V88.368c0-.628.293-1.23.816-1.674.522-.445 1.231-.694 1.969-.694h12.43c.738 0 1.447.25 1.969.694.523.444.816 1.046.816 1.674z",
    opacity: ".5"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M319 112.954v115.709c-6 .12-12 .232-18 .337V112.954c0-.518.293-1.015.816-1.382.522-.366 1.231-.572 1.969-.572h12.43c.738 0 1.447.206 1.969.572.523.367.816.864.816 1.382z",
    opacity: ".7"
  }), Object(external_this_wp_element_["createElement"])("path", {
    stroke: "#CCC",
    strokeLinecap: "round",
    strokeMiterlimit: "10",
    strokeWidth: "2",
    d: "M160.125 133.501l41.91-46.767 41.91 23.545 41.91-72.248 41.909 34.511"
  }), Object(external_this_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M160 139.005c2.761 0 5-2.24 5-5.003a5.002 5.002 0 00-5-5.002c-2.761 0-5 2.24-5 5.002a5.002 5.002 0 005 5.003zM201.5 93.007c4.142 0 7.5-3.36 7.5-7.504A7.502 7.502 0 00201.5 78c-4.142 0-7.5 3.36-7.5 7.504a7.502 7.502 0 007.5 7.503zM243.784 119.31c4.985 0 9.026-4.043 9.026-9.031s-4.041-9.031-9.026-9.031c-4.986 0-9.027 4.043-9.027 9.031s4.041 9.031 9.027 9.031zM286.027 46.062c4.985 0 9.027-4.043 9.027-9.031S291.012 28 286.027 28c-4.986 0-9.027 4.043-9.027 9.031s4.041 9.031 9.027 9.031zM327.5 80.007c4.142 0 7.5-3.36 7.5-7.504A7.502 7.502 0 00327.5 65c-4.142 0-7.5 3.36-7.5 7.504a7.502 7.502 0 007.5 7.503zM408 137l-36 2-18-30.926c5.588-3.326 12.033-5.083 18.606-5.074C392.154 103 408 118.222 408 137zM351.107 110l-.143.088c-7.887 4.836-13.573 12.518-15.859 21.429a35.211 35.211 0 003.603 26.338l.084.145L370 140.317 351.107 110zm-12.19 47.543a34.886 34.886 0 01-3.485-25.944c2.25-8.77 7.826-16.342 15.566-21.138l18.531 29.738-30.612 17.344zM408.664 138.651l-35.891 2.797 10.3 32.297.162-.046c7.808-2.265 14.585-6.957 19.211-13.301 4.626-6.344 6.824-13.96 6.23-21.588l-.012-.159zm-35.447 3.081l35.134-2.738c1.116 15.348-9.387 29.753-25.051 34.355l-10.083-31.617zM370.719 142.639l-30.714 17.335.088.131c3.977 5.942 9.926 10.554 16.982 13.165 7.056 2.61 14.849 3.083 22.245 1.349l.164-.038-8.765-31.942zm-30.249 17.435l30.034-16.951 8.57 31.234c-7.278 1.673-14.935 1.192-21.871-1.374-6.936-2.566-12.794-7.086-16.733-12.909z"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fill: "#fff",
    d: "M423 97h-17v-1h17v1zM423 101h-17v-3h17v3zM416 104h-17.979l-.05.068L384 122.821l.28.179 13.92-18.685H416V104z"
  })), Object(external_this_wp_element_["createElement"])("defs", null, Object(external_this_wp_element_["createElement"])("clipPath", {
    id: "clip0"
  }, Object(external_this_wp_element_["createElement"])("path", {
    fill: "#fff",
    d: "M0 0h517v160H0z"
  }))));
};
// CONCATENATED MODULE: ./client/homescreen/welcome-modal/page-content/index.js


/**
 * External dependencies
 */

var page_content_PageContent = function PageContent(_ref) {
  var title = _ref.title,
      body = _ref.body;
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce__welcome-modal__page-content"
  }, Object(external_this_wp_element_["createElement"])("h2", {
    className: "woocommerce__welcome-modal__page-content__header"
  }, title), Object(external_this_wp_element_["createElement"])("p", {
    className: "woocommerce__welcome-modal__page-content__body"
  }, body));
};
// EXTERNAL MODULE: ./client/homescreen/welcome-modal/style.scss
var welcome_modal_style = __webpack_require__(544);

// CONCATENATED MODULE: ./client/homescreen/welcome-modal/index.js



/**
 * External dependencies
 */




/**
 * Internal dependencies
 */






var pages = [{
  image: Object(external_this_wp_element_["createElement"])(line_chart_LineChartIllustration, null),
  content: Object(external_this_wp_element_["createElement"])(page_content_PageContent, {
    title: Object(external_this_wp_i18n_["__"])('Welcome to your WooCommerce store’s online HQ!', 'woocommerce-admin'),
    body: Object(external_this_wp_i18n_["__"])("Here's where you’ll find setup suggestions, tips and tools, and key data on your store’s performance and earnings — all the basics for store management and growth.", 'woocommerce-admin')
  })
}, {
  image: Object(external_this_wp_element_["createElement"])(inbox_InboxIllustration, null),
  content: Object(external_this_wp_element_["createElement"])(page_content_PageContent, {
    title: Object(external_this_wp_i18n_["__"])('A personalized inbox full of relevant advice.', 'woocommerce-admin'),
    body: Object(external_this_wp_i18n_["__"])('Check your inbox for helpful growth tips tailored to your store and notifications about key traffic and sales milestones. We look forward to celebrating them with you!', 'woocommerce-admin')
  })
}, {
  image: Object(external_this_wp_element_["createElement"])(pie_chart_PieChartIllustration, null),
  content: Object(external_this_wp_element_["createElement"])(page_content_PageContent, {
    title: Object(external_this_wp_i18n_["__"])('Good data leads to smart business decisions.', 'woocommerce-admin'),
    body: 'Monitor your stats to improve performance, increase sales, and track your progress toward revenue goals. The more you know, the better you can serve your customers and grow your store.'
  })
}];
var welcome_modal_WelcomeModal = function WelcomeModal(_ref) {
  var onClose = _ref.onClose;

  var _useState = Object(external_this_wp_element_["useState"])(true),
      _useState2 = slicedToArray_default()(_useState, 2),
      guideIsOpen = _useState2[0],
      setGuideIsOpen = _useState2[1];

  Object(external_this_wp_element_["useEffect"])(function () {
    Object(external_this_wc_tracks_["recordEvent"])('task_list_welcome_modal_open');
  }, []);
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, guideIsOpen && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Guide"], {
    onFinish: function onFinish() {
      setGuideIsOpen(false);
      onClose();
      Object(external_this_wc_tracks_["recordEvent"])('task_list_welcome_modal_close');
    },
    className: 'woocommerce__welcome-modal',
    finishButtonText: Object(external_this_wp_i18n_["__"])("Let's go", 'woocommerce-admin'),
    pages: pages
  }));
};
// EXTERNAL MODULE: ./node_modules/interpolate-components/lib/index.js
var lib = __webpack_require__(26);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./client/homescreen/welcome-from-calypso-modal/style.scss
var welcome_from_calypso_modal_style = __webpack_require__(545);

// CONCATENATED MODULE: ./client/homescreen/welcome-from-calypso-modal/welcome-from-calypso-modal.js



/**
 * External dependencies
 */







/**
 * Internal dependencies
 */




var page = {
  image: Object(external_this_wp_element_["createElement"])(line_chart_LineChartIllustration, null),
  content: Object(external_this_wp_element_["createElement"])(page_content_PageContent, {
    title: Object(external_this_wp_i18n_["__"])('Welcome to your new store management experience.', 'woocommerce-admin'),
    body: lib_default()({
      mixedString: Object(external_this_wp_i18n_["__"])("We've designed your navigation and home screen to help you focus on the things that matter most in managing your online store. {{link}}Learn more{{/link}} about these changes – or explore on your own.", 'woocommerce-admin'),
      components: {
        link: Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Link"], {
          href: "https://wordpress.com/support/store/",
          type: "external",
          target: "_blank"
        })
      }
    })
  })
};
function WelcomeFromCalypsoModal(_ref) {
  var onClose = _ref.onClose;

  var _useState = Object(external_this_wp_element_["useState"])(true),
      _useState2 = slicedToArray_default()(_useState, 2),
      guideIsOpen = _useState2[0],
      setGuideIsOpen = _useState2[1];

  Object(external_this_wp_element_["useEffect"])(function () {
    Object(external_this_wc_tracks_["recordEvent"])('welcome_from_calypso_modal_open');
  }, []);

  if (!guideIsOpen) {
    return null;
  }

  var guideClassNames = classnames_default()('woocommerce__welcome-modal', 'woocommerce__welcome-from-calypso-modal');
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Guide"], {
    onFinish: function onFinish() {
      if (onClose) {
        onClose();
      }

      setGuideIsOpen(false);
      Object(external_this_wc_tracks_["recordEvent"])('welcome_from_calypso_modal_close');
    },
    className: guideClassNames,
    finishButtonText: Object(external_this_wp_i18n_["__"])("Let's go", 'woocommerce-admin'),
    pages: [page]
  });
}
// CONCATENATED MODULE: ./client/homescreen/welcome-from-calypso-modal/index.js

// EXTERNAL MODULE: ./client/header/activity-panel/activity-header/index.js
var activity_header = __webpack_require__(517);

// EXTERNAL MODULE: ./client/homescreen/activity-panel/style.scss
var activity_panel_style = __webpack_require__(546);

// EXTERNAL MODULE: ./client/analytics/settings/config.js + 1 modules
var config = __webpack_require__(528);

// CONCATENATED MODULE: ./client/homescreen/activity-panel/orders/utils.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


function getUnreadOrders(select, orderStatuses) {
  var _select = select(external_this_wc_data_["ITEMS_STORE_NAME"]),
      getItemsTotalCount = _select.getItemsTotalCount,
      getItemsError = _select.getItemsError,
      isResolving = _select.isResolving;

  if (!orderStatuses.length) {
    return 0;
  }

  var ordersQuery = {
    page: 1,
    per_page: 1,
    // Core endpoint requires per_page > 0.
    status: orderStatuses,
    _fields: ['id']
  };
  var defaultValue = null; // Disable eslint rule requiring `totalOrders` to be defined below because the next two statements
  // depend on `getItemsTotalCount` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  var totalOrders = getItemsTotalCount('orders', ordersQuery, defaultValue);
  var isError = Boolean(getItemsError('orders', ordersQuery));
  var isRequesting = isResolving('getItemsTotalCount', ['orders', ordersQuery, defaultValue]);

  if (isError || isRequesting) {
    return null;
  }

  return totalOrders;
}
function getOrderStatuses(select) {
  var _select2 = select(external_this_wc_data_["SETTINGS_STORE_NAME"]),
      getMutableSetting = _select2.getSetting;

  var _getMutableSetting = getMutableSetting('wc_admin', 'wcAdminSettings', {}),
      _getMutableSetting$wo = _getMutableSetting.woocommerce_actionable_order_statuses,
      orderStatuses = _getMutableSetting$wo === void 0 ? config["a" /* DEFAULT_ACTIONABLE_STATUSES */] : _getMutableSetting$wo;

  return orderStatuses;
}
var getLowStockCountQuery = {
  page: 1,
  per_page: 1,
  low_in_stock: true,
  status: 'publish',
  _fields: ['id']
};
function getLowStockCount(select) {
  var _select3 = select(external_this_wc_data_["ITEMS_STORE_NAME"]),
      getItemsTotalCount = _select3.getItemsTotalCount,
      getItemsError = _select3.getItemsError,
      isResolving = _select3.isResolving;

  var defaultValue = null; // Disable eslint rule requiring `totalLowStockProducts` to be defined below because the next two statements
  // depend on `getItemsTotalCount` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  var totalLowStockProducts = getItemsTotalCount('products', getLowStockCountQuery, defaultValue);
  var isError = Boolean(getItemsError('products', getLowStockCountQuery));
  var isRequesting = isResolving('getItemsTotalCount', ['products', getLowStockCountQuery, defaultValue]);

  if (isError || isRequesting && totalLowStockProducts === defaultValue) {
    return null;
  }

  return totalLowStockProducts;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(11);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(12);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(13);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(14);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(6);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./client/header/activity-panel/activity-card/index.js + 1 modules
var activity_card = __webpack_require__(512);

// EXTERNAL MODULE: ./client/homescreen/activity-panel/orders/style.scss
var orders_style = __webpack_require__(547);

// CONCATENATED MODULE: ./client/homescreen/activity-panel/orders/index.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */











/**
 * Internal dependencies
 */





var orders_OrdersPanel = /*#__PURE__*/function (_Component) {
  inherits_default()(OrdersPanel, _Component);

  var _super = _createSuper(OrdersPanel);

  function OrdersPanel() {
    classCallCheck_default()(this, OrdersPanel);

    return _super.apply(this, arguments);
  }

  createClass_default()(OrdersPanel, [{
    key: "recordOrderEvent",
    value: function recordOrderEvent(eventName) {
      Object(external_this_wc_tracks_["recordEvent"])("activity_panel_orders_".concat(eventName), {});
    }
  }, {
    key: "renderEmptyCard",
    value: function renderEmptyCard() {
      var _this = this;

      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(activity_card["a" /* ActivityCard */], {
        className: "woocommerce-empty-activity-card",
        title: "",
        icon: ""
      }, Object(external_this_wp_element_["createElement"])("span", {
        className: "woocommerce-order-empty__success-icon",
        role: "img",
        "aria-labelledby": "woocommerce-order-empty-message"
      }, "\uD83C\uDF89"), Object(external_this_wp_element_["createElement"])(external_this_wc_components_["H"], {
        id: "woocommerce-order-empty-message"
      }, Object(external_this_wp_i18n_["__"])('You’ve fulfilled all your orders', 'woocommerce-admin'))), Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Link"], {
        href: 'edit.php?post_type=shop_order',
        onClick: function onClick() {
          return _this.recordOrderEvent('orders_manage');
        },
        className: "woocommerce-layout__activity-panel-outbound-link woocommerce-layout__activity-panel-empty",
        type: "wp-admin"
      }, Object(external_this_wp_i18n_["__"])('Manage all orders', 'woocommerce-admin')));
    }
  }, {
    key: "renderOrders",
    value: function renderOrders() {
      var _this2 = this;

      var orders = this.props.orders;
      var Currency = this.context;

      if (orders.length === 0) {
        return this.renderEmptyCard();
      }

      var getCustomerString = function getCustomerString(order) {
        var extendedInfo = order.extended_info || {};

        var _ref = extendedInfo.customer || {},
            firstName = _ref.first_name,
            lastName = _ref.last_name;

        if (!firstName && !lastName) {
          return '';
        }

        var name = [firstName, lastName].join(' ');
        return "{{customerLink}}".concat(name, "{{/customerLink}}");
      };

      var orderCardTitle = function orderCardTitle(order) {
        var extendedInfo = order.extended_info,
            orderId = order.order_id,
            orderNumber = order.order_number;

        var _ref2 = extendedInfo || {},
            customer = _ref2.customer;

        var customerUrl = customer.customer_id ? Object(external_this_wc_navigation_["getNewPath"])({}, '/analytics/customers', {
          filter: 'single_customer',
          customers: customer.customer_id
        }) : null;
        return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, lib_default()({
          mixedString: Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('{{orderLink}}Order #%(orderNumber)s{{/orderLink}} %(customerString)s', 'woocommerce-admin'), {
            orderNumber: orderNumber,
            customerString: getCustomerString(order)
          }),
          components: {
            orderLink: Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Link"], {
              href: Object(settings["f" /* getAdminLink */])('post.php?action=edit&post=' + orderId),
              onClick: function onClick() {
                return _this2.recordOrderEvent('order_number');
              },
              type: "wp-admin"
            }),
            destinationFlag: customer.country ? Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Flag"], {
              code: customer.country,
              round: false
            }) : null,
            customerLink: customerUrl ? Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Link"], {
              href: customerUrl,
              onClick: function onClick() {
                return _this2.recordOrderEvent('customer_name');
              },
              type: "wc-admin"
            }) : Object(external_this_wp_element_["createElement"])("span", null)
          }
        }));
      };

      var cards = [];
      orders.forEach(function (order) {
        var dateCreatedGmt = order.date_created_gmt,
            extendedInfo = order.extended_info,
            orderId = order.order_id,
            totalSales = order.total_sales;
        var productsCount = extendedInfo && extendedInfo.products ? extendedInfo.products.length : 0;
        var total = totalSales;
        cards.push(Object(external_this_wp_element_["createElement"])(activity_card["a" /* ActivityCard */], {
          key: orderId,
          className: "woocommerce-order-activity-card",
          title: orderCardTitle(order),
          date: dateCreatedGmt,
          onClick: function onClick(_ref3) {
            var target = _ref3.target;

            _this2.recordOrderEvent('orders_begin_fulfillment');

            if (!target.href) {
              window.location.href = Object(settings["f" /* getAdminLink */])("post.php?action=edit&post=".concat(orderId));
            }
          },
          subtitle: Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])("span", null, Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["_n"])('%d product', '%d products', productsCount, 'woocommerce-admin'), productsCount)), Object(external_this_wp_element_["createElement"])("span", null, Currency.formatAmount(total)))
        }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["OrderStatus"], {
          order: order,
          orderStatusMap: Object(settings["g" /* getSetting */])('orderStatuses', {})
        })));
      });
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, cards, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Link"], {
        href: 'edit.php?post_type=shop_order',
        className: "woocommerce-layout__activity-panel-outbound-link",
        onClick: function onClick() {
          return _this2.recordOrderEvent('orders_manage');
        },
        type: "wp-admin"
      }, Object(external_this_wp_i18n_["__"])('Manage all orders', 'woocommerce-admin')));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isRequesting = _this$props.isRequesting,
          isError = _this$props.isError,
          orderStatuses = _this$props.orderStatuses;

      if (isError) {
        if (!orderStatuses.length) {
          return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["EmptyContent"], {
            title: Object(external_this_wp_i18n_["__"])("You currently don't have any actionable statuses. " + 'To display orders here, select orders that require further review in settings.', 'woocommerce-admin'),
            actionLabel: Object(external_this_wp_i18n_["__"])('Settings', 'woocommerce-admin'),
            actionURL: Object(settings["f" /* getAdminLink */])('admin.php?page=wc-admin&path=/analytics/settings')
          });
        }

        var title = Object(external_this_wp_i18n_["__"])('There was an error getting your orders. Please try again.', 'woocommerce-admin');

        var actionLabel = Object(external_this_wp_i18n_["__"])('Reload', 'woocommerce-admin');

        var actionCallback = function actionCallback() {
          // @todo Add tracking for how often an error is displayed, and the reload action is clicked.
          window.location.reload();
        };

        return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["EmptyContent"], {
          title: title,
          actionLabel: actionLabel,
          actionURL: null,
          actionCallback: actionCallback
        }));
      }

      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Section"], null, isRequesting ? Object(external_this_wp_element_["createElement"])(activity_card["b" /* ActivityCardPlaceholder */], {
        className: "woocommerce-order-activity-card",
        hasAction: true,
        hasDate: true,
        lines: 1
      }) : this.renderOrders()));
    }
  }]);

  return OrdersPanel;
}(external_this_wp_element_["Component"]);

orders_OrdersPanel.propTypes = {
  isError: prop_types_default.a.bool,
  isRequesting: prop_types_default.a.bool,
  countUnreadOrders: prop_types_default.a.number,
  orders: prop_types_default.a.array.isRequired,
  orderStatuses: prop_types_default.a.array
};
orders_OrdersPanel.defaultProps = {
  orders: [],
  isError: false,
  isRequesting: false
};
orders_OrdersPanel.contextType = currency_context["a" /* CurrencyContext */];
/* harmony default export */ var activity_panel_orders = (Object(external_this_wp_data_["withSelect"])(function (select, props) {
  var countUnreadOrders = props.countUnreadOrders,
      orderStatuses = props.orderStatuses;

  var _select = select(external_this_wc_data_["ITEMS_STORE_NAME"]),
      getItems = _select.getItems,
      getItemsError = _select.getItemsError;

  var _select2 = select(external_this_wc_data_["REPORTS_STORE_NAME"]),
      getReportItems = _select2.getReportItems,
      getReportItemsError = _select2.getReportItemsError,
      isResolving = _select2.isResolving;

  if (!orderStatuses.length && countUnreadOrders === 0) {
    return {
      isRequesting: false
    };
  } // Query the core Orders endpoint for the most up-to-date statuses.


  var actionableOrdersQuery = {
    page: 1,
    per_page: 5,
    status: orderStatuses,
    _fields: ['id', 'date_created_gmt', 'status']
  };
  /* eslint-disable @wordpress/no-unused-vars-before-return */

  var actionableOrders = Array.from(getItems('orders', actionableOrdersQuery).values());
  var isRequestingActionable = isResolving('getItems', ['orders', actionableOrdersQuery]);

  if (isRequestingActionable) {
    return {
      isError: Boolean(getItemsError('orders', actionableOrdersQuery)),
      isRequesting: isRequestingActionable,
      orderStatuses: orderStatuses
    };
  } // Retrieve the Order stats data from our reporting table.


  var ordersQuery = {
    page: 1,
    per_page: 5,
    extended_info: true,
    match: 'any',
    order_includes: Object(external_lodash_["map"])(actionableOrders, 'id'),
    status_is: orderStatuses,
    _fields: ['order_id', 'order_number', 'status', 'total_sales', 'extended_info.customer', 'extended_info.products']
  };
  var reportOrders = getReportItems('orders', ordersQuery).data;
  var isError = Boolean(getReportItemsError('orders', ordersQuery));
  var isRequesting = isResolving('getReportItems', ['orders', ordersQuery]);
  /* eslint-enable @wordpress/no-unused-vars-before-return */

  var orders = [];

  if (countUnreadOrders === null || typeof reportOrders === 'undefined' || reportOrders.length && !actionableOrders.length || isRequesting) {
    return {
      isRequesting: true
    };
  }

  if (reportOrders.length) {
    // Merge the core endpoint data with our reporting table.
    var actionableOrdersById = Object(external_lodash_["keyBy"])(actionableOrders, 'id');
    orders = reportOrders.map(function (order) {
      return Object(external_lodash_["merge"])({}, order, actionableOrdersById[order.order_id] || {});
    });
  }

  return {
    orders: orders,
    isError: isError,
    isRequesting: isRequesting,
    orderStatuses: orderStatuses
  };
})(orders_OrdersPanel));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(43);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(8);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@wordpress/keycodes/build-module/index.js + 1 modules
var keycodes_build_module = __webpack_require__(46);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(16);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./client/homescreen/activity-panel/stock/card.js










function card_createSuper(Derived) { var hasNativeReflectConstruct = card_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function card_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */










/**
 * Internal dependencies
 */


var card_ProductStockCard = /*#__PURE__*/function (_Component) {
  inherits_default()(ProductStockCard, _Component);

  var _super = card_createSuper(ProductStockCard);

  function ProductStockCard(props) {
    var _this;

    classCallCheck_default()(this, ProductStockCard);

    _this = _super.call(this, props);
    _this.state = {
      quantity: props.product.stock_quantity,
      editing: false,
      edited: false
    };
    _this.beginEdit = _this.beginEdit.bind(assertThisInitialized_default()(_this));
    _this.cancelEdit = _this.cancelEdit.bind(assertThisInitialized_default()(_this));
    _this.onQuantityChange = _this.onQuantityChange.bind(assertThisInitialized_default()(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(assertThisInitialized_default()(_this));
    _this.onSubmit = _this.onSubmit.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(ProductStockCard, [{
    key: "recordStockEvent",
    value: function recordStockEvent(eventName) {
      var eventProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      Object(external_this_wc_tracks_["recordEvent"])("activity_panel_stock_".concat(eventName), eventProps);
    }
  }, {
    key: "beginEdit",
    value: function beginEdit() {
      var _this2 = this;

      var product = this.props.product;
      this.setState({
        editing: true,
        quantity: product.stock_quantity
      }, function () {
        if (_this2.quantityInput) {
          _this2.quantityInput.focus();
        }
      });
      this.recordStockEvent('update_stock');
    }
  }, {
    key: "cancelEdit",
    value: function cancelEdit() {
      var product = this.props.product;
      this.setState({
        editing: false,
        quantity: product.stock_quantity
      });
      this.recordStockEvent('cancel');
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      if (event.keyCode === keycodes_build_module["d" /* ESCAPE */]) {
        this.cancelEdit();
      }
    }
  }, {
    key: "onQuantityChange",
    value: function onQuantityChange(event) {
      this.setState({
        quantity: event.target.value
      });
    }
  }, {
    key: "onSubmit",
    value: function () {
      var _onSubmit = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var _this3 = this;

        var _this$props, product, updateProductStock, createNotice, quantity, success;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, product = _this$props.product, updateProductStock = _this$props.updateProductStock, createNotice = _this$props.createNotice;
                quantity = parseInt(this.state.quantity, 10); // Bail on an actual update if the quantity is unchanged.

                if (!(product.stock_quantity === quantity)) {
                  _context.next = 5;
                  break;
                }

                this.setState({
                  editing: false
                });
                return _context.abrupt("return");

              case 5:
                this.setState({
                  editing: false,
                  edited: true
                });
                _context.next = 8;
                return updateProductStock(product, quantity);

              case 8:
                success = _context.sent;

                if (success) {
                  createNotice('success', Object(external_this_wp_i18n_["sprintf"])(
                  /* translators: %s = name of the product having stock updated */
                  Object(external_this_wp_i18n_["__"])('%s stock updated.', 'woocommerce-admin'), product.name), {
                    actions: [{
                      label: Object(external_this_wp_i18n_["__"])('Undo', 'woocommerce-admin'),
                      onClick: function onClick() {
                        updateProductStock(product, product.stock_quantity);

                        _this3.recordStockEvent('undo');
                      }
                    }]
                  });
                } else {
                  createNotice('error', Object(external_this_wp_i18n_["sprintf"])(
                  /* translators: %s = name of the product having stock updated */
                  Object(external_this_wp_i18n_["__"])('%s stock could not be updated.', 'woocommerce-admin'), product.name));
                }

                this.recordStockEvent('save', {
                  quantity: quantity
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onSubmit() {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }()
  }, {
    key: "getActions",
    value: function getActions() {
      var editing = this.state.editing;

      if (editing) {
        return [Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
          key: "save",
          type: "submit",
          isPrimary: true
        }, Object(external_this_wp_i18n_["__"])('Save', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
          key: "cancel",
          type: "reset"
        }, Object(external_this_wp_i18n_["__"])('Cancel', 'woocommerce-admin'))];
      }

      return [Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        key: "update",
        isSecondary: true,
        onClick: this.beginEdit
      }, Object(external_this_wp_i18n_["__"])('Update stock', 'woocommerce-admin'))];
    }
  }, {
    key: "getBody",
    value: function getBody() {
      var _this4 = this;

      var product = this.props.product;
      var _this$state = this.state,
          editing = _this$state.editing,
          quantity = _this$state.quantity;

      if (editing) {
        return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["BaseControl"], {
          className: "woocommerce-stock-activity-card__edit-quantity"
        }, Object(external_this_wp_element_["createElement"])("input", {
          className: "components-text-control__input",
          type: "number",
          value: quantity,
          onKeyDown: this.handleKeyDown,
          onChange: this.onQuantityChange,
          ref: function ref(input) {
            _this4.quantityInput = input;
          }
        })), Object(external_this_wp_element_["createElement"])("span", null, Object(external_this_wp_i18n_["__"])('in stock', 'woocommerce-admin')));
      }

      return Object(external_this_wp_element_["createElement"])("span", {
        className: classnames_default()('woocommerce-stock-activity-card__stock-quantity', {
          'out-of-stock': product.stock_quantity < 1
        })
      }, Object(external_this_wp_i18n_["sprintf"])(
      /* translators: %d = stock quantity of the product being updated */
      Object(external_this_wp_i18n_["__"])('%d in stock', 'woocommerce-admin'), product.stock_quantity));
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var product = this.props.product;
      var _this$state2 = this.state,
          edited = _this$state2.edited,
          editing = _this$state2.editing;
      var notifyLowStockAmount = Object(settings["g" /* getSetting */])('notifyLowStockAmount', 0);
      var lowStockAmount = Number.isFinite(product.low_stock_amount) ? product.low_stock_amount : notifyLowStockAmount;
      var isLowStock = product.stock_quantity <= lowStockAmount;
      var lastOrderDate = product.last_order_date ? Object(external_this_wp_i18n_["sprintf"])(
      /* translators: %s = time since last product order. e.g.: "10 minutes ago" - translated. */
      Object(external_this_wp_i18n_["__"])('Last ordered %s', 'woocommerce-admin'), external_moment_default.a.utc(product.last_order_date).fromNow()) : null; // Hide cards that are not in low stock and have not been edited.
      // This allows clearing cards which are no longer in low stock after
      // closing & opening the panel without having to make another request.

      if (!isLowStock && !edited) {
        return null;
      }

      var title = Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Link"], {
        href: 'post.php?action=edit&post=' + (product.parent_id || product.id),
        onClick: function onClick() {
          return _this5.recordStockEvent('product_name');
        },
        type: "wp-admin"
      }, product.name);
      var subtitle = null;

      if (product.type === 'variation') {
        subtitle = Object.values(product.attributes).map(function (attr) {
          return attr.option;
        }).join(', ');
      }

      var productImage = Object(external_lodash_["get"])(product, ['images', 0]) || Object(external_lodash_["get"])(product, ['image']);
      var productImageClasses = classnames_default()('woocommerce-stock-activity-card__image-overlay__product', {
        'is-placeholder': !productImage || !productImage.src
      });
      var icon = Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-stock-activity-card__image-overlay"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: productImageClasses
      }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["ProductImage"], {
        product: product
      })));
      var activityCardClasses = classnames_default()('woocommerce-stock-activity-card', {
        'is-dimmed': !editing && !isLowStock
      });
      var activityCard = Object(external_this_wp_element_["createElement"])(activity_card["a" /* ActivityCard */], {
        className: activityCardClasses,
        title: title,
        subtitle: subtitle,
        icon: icon,
        date: lastOrderDate,
        actions: this.getActions()
      }, this.getBody());

      if (editing) {
        return Object(external_this_wp_element_["createElement"])("form", {
          onReset: this.cancelEdit,
          onSubmit: this.onSubmit
        }, activityCard);
      }

      return activityCard;
    }
  }]);

  return ProductStockCard;
}(external_this_wp_element_["Component"]);
// CONCATENATED MODULE: ./client/homescreen/activity-panel/stock/index.js










function stock_createSuper(Derived) { var hasNativeReflectConstruct = stock_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function stock_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */







/**
 * Internal dependencies
 */




var productsQuery = {
  page: 1,
  per_page: 5,
  low_in_stock: true,
  status: 'publish',
  _fields: ['attributes', 'id', 'images', 'last_order_date', 'low_stock_amount', 'name', 'parent_id', 'stock_quantity', 'type']
};
var stock_StockPanel = /*#__PURE__*/function (_Component) {
  inherits_default()(StockPanel, _Component);

  var _super = stock_createSuper(StockPanel);

  function StockPanel(props) {
    var _this;

    classCallCheck_default()(this, StockPanel);

    _this = _super.call(this, props);
    _this.updateStock = _this.updateStock.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(StockPanel, [{
    key: "updateStock",
    value: function () {
      var _updateStock = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(product, quantity) {
        var _this$props, invalidateResolution, updateProductStock, products, success;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, invalidateResolution = _this$props.invalidateResolution, updateProductStock = _this$props.updateProductStock, products = _this$props.products;
                _context.next = 3;
                return updateProductStock(product, quantity);

              case 3:
                success = _context.sent;

                if (success) {
                  // Request more low stock products.
                  invalidateResolution('getItems', ['products', productsQuery]);

                  if (products.length < 2) {
                    invalidateResolution('getItemsTotalCount', ['products', getLowStockCountQuery, null]);
                  }
                }

                return _context.abrupt("return", success);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateStock(_x, _x2) {
        return _updateStock.apply(this, arguments);
      }

      return updateStock;
    }()
  }, {
    key: "renderProducts",
    value: function renderProducts() {
      var _this2 = this;

      var _this$props2 = this.props,
          products = _this$props2.products,
          createNotice = _this$props2.createNotice;
      return products.map(function (product) {
        return Object(external_this_wp_element_["createElement"])(card_ProductStockCard, {
          key: product.id,
          product: product,
          updateProductStock: _this2.updateStock,
          createNotice: createNotice
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          countLowStockProducts = _this$props3.countLowStockProducts,
          isError = _this$props3.isError,
          isRequesting = _this$props3.isRequesting,
          products = _this$props3.products;

      if (isError) {
        var title = Object(external_this_wp_i18n_["__"])('There was an error getting your low stock products. Please try again.', 'woocommerce-admin');

        var actionLabel = Object(external_this_wp_i18n_["__"])('Reload', 'woocommerce-admin');

        var actionCallback = function actionCallback() {
          // @todo Add tracking for how often an error is displayed, and the reload action is clicked.
          window.location.reload();
        };

        return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["EmptyContent"], {
          title: title,
          actionLabel: actionLabel,
          actionURL: null,
          actionCallback: actionCallback
        });
      } // Show placeholders only for the first products fetch.


      if (isRequesting && !products.length) {
        var numPlaceholders = Math.min(5, countLowStockProducts);
        var placeholders = Array.from(new Array(numPlaceholders)).map(function (v, idx) {
          return Object(external_this_wp_element_["createElement"])(activity_card["b" /* ActivityCardPlaceholder */], {
            key: idx,
            className: "woocommerce-stock-activity-card",
            hasAction: true,
            lines: 1
          });
        });
        return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Section"], null, placeholders);
      }

      return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Section"], null, this.renderProducts());
    }
  }]);

  return StockPanel;
}(external_this_wp_element_["Component"]);
stock_StockPanel.propTypes = {
  countLowStockProducts: prop_types_default.a.number,
  products: prop_types_default.a.array.isRequired,
  isError: prop_types_default.a.bool,
  isRequesting: prop_types_default.a.bool
};
stock_StockPanel.defaultProps = {
  products: [],
  isError: false,
  isRequesting: false
};
/* harmony default export */ var stock = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select(external_this_wc_data_["ITEMS_STORE_NAME"]),
      getItems = _select.getItems,
      getItemsError = _select.getItemsError,
      isResolving = _select.isResolving;

  var products = Array.from(getItems('products', productsQuery).values());
  var isError = Boolean(getItemsError('products', productsQuery));
  var isRequesting = isResolving('getItems', ['products', productsQuery]);
  return {
    products: products,
    isError: isError,
    isRequesting: isRequesting
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(external_this_wc_data_["ITEMS_STORE_NAME"]),
      invalidateResolution = _dispatch.invalidateResolution,
      updateProductStock = _dispatch.updateProductStock;

  var _dispatch2 = dispatch('core/notices'),
      createNotice = _dispatch2.createNotice;

  return {
    createNotice: createNotice,
    invalidateResolution: invalidateResolution,
    updateProductStock: updateProductStock
  };
}))(stock_StockPanel));
// EXTERNAL MODULE: ./node_modules/gridicons/dist/star.js
var star = __webpack_require__(190);
var star_default = /*#__PURE__*/__webpack_require__.n(star);

// EXTERNAL MODULE: ./node_modules/gridicons/dist/star-outline.js
var star_outline = __webpack_require__(548);
var star_outline_default = /*#__PURE__*/__webpack_require__.n(star_outline);

// EXTERNAL MODULE: ./client/homescreen/activity-panel/reviews/style.scss
var reviews_style = __webpack_require__(549);

// CONCATENATED MODULE: ./client/homescreen/activity-panel/reviews/checkmark-circle-icon.js

/* harmony default export */ var checkmark_circle_icon = (function () {
  return Object(external_this_wp_element_["createElement"])("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_this_wp_element_["createElement"])("mask", {
    id: "mask0",
    "mask-type": "alpha",
    maskUnits: "userSpaceOnUse",
    x: "1",
    y: "1",
    width: "14",
    height: "14"
  }, Object(external_this_wp_element_["createElement"])("path", {
    d: "M7.99992 1.33301C4.31992 1.33301 1.33325 4.31967 1.33325 7.99967C1.33325 11.6797 4.31992 14.6663 7.99992 14.6663C11.6799 14.6663 14.6666 11.6797 14.6666 7.99967C14.6666 4.31967 11.6799 1.33301 7.99992 1.33301ZM7.99992 13.333C5.05992 13.333 2.66659 10.9397 2.66659 7.99967C2.66659 5.05967 5.05992 2.66634 7.99992 2.66634C10.9399 2.66634 13.3333 5.05967 13.3333 7.99967C13.3333 10.9397 10.9399 13.333 7.99992 13.333ZM6.66658 9.44634L11.0599 5.05301L11.9999 5.99967L6.66658 11.333L3.99992 8.66634L4.93992 7.72634L6.66658 9.44634Z",
    fill: "white"
  })), Object(external_this_wp_element_["createElement"])("g", {
    mask: "url(#mask0)"
  }, Object(external_this_wp_element_["createElement"])("rect", {
    width: "16",
    height: "16",
    fill: "#4AB866"
  })));
});
// EXTERNAL MODULE: ./client/lib/sanitize-html/index.js
var sanitize_html = __webpack_require__(509);

// CONCATENATED MODULE: ./client/homescreen/activity-panel/reviews/utils.js
/**
 * External dependencies
 */

var REVIEW_PAGE_LIMIT = 5;
var unapprovedReviewsQuery = {
  page: 1,
  per_page: 1,
  status: 'hold',
  _embed: 1,
  _fields: ['id']
};
function getUnapprovedReviews(select) {
  var _select = select(external_this_wc_data_["REVIEWS_STORE_NAME"]),
      getReviewsTotalCount = _select.getReviewsTotalCount,
      getReviewsError = _select.getReviewsError,
      isResolving = _select.isResolving; // eslint-disable-next-line @wordpress/no-unused-vars-before-return


  var totalReviews = getReviewsTotalCount(unapprovedReviewsQuery);
  var isError = Boolean(getReviewsError(unapprovedReviewsQuery));
  var isRequesting = isResolving('getReviewsTotalCount', [unapprovedReviewsQuery]);

  if (isError || isRequesting && totalReviews === undefined) {
    return null;
  }

  return totalReviews;
}
// CONCATENATED MODULE: ./client/homescreen/activity-panel/reviews/index.js







function reviews_createSuper(Derived) { var hasNativeReflectConstruct = reviews_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function reviews_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */















/**
 * Internal dependencies
 */







var reviewsQuery = {
  page: 1,
  per_page: REVIEW_PAGE_LIMIT,
  status: 'hold',
  _embed: 1
};

var reviews_ReviewsPanel = /*#__PURE__*/function (_Component) {
  inherits_default()(ReviewsPanel, _Component);

  var _super = reviews_createSuper(ReviewsPanel);

  function ReviewsPanel() {
    classCallCheck_default()(this, ReviewsPanel);

    return _super.apply(this, arguments);
  }

  createClass_default()(ReviewsPanel, [{
    key: "recordReviewEvent",
    value: function recordReviewEvent(eventName, eventData) {
      Object(external_this_wc_tracks_["recordEvent"])("reviews_".concat(eventName), eventData || {});
    }
  }, {
    key: "deleteReview",
    value: function deleteReview(reviewId) {
      var _this$props = this.props,
          deleteReview = _this$props.deleteReview,
          createNotice = _this$props.createNotice,
          updateReview = _this$props.updateReview,
          clearReviewsCache = _this$props.clearReviewsCache;

      if (reviewId) {
        deleteReview(reviewId).then(function () {
          clearReviewsCache();
          createNotice('success', Object(external_this_wp_i18n_["__"])('Review successfully deleted.', 'woocommerce-admin'), {
            actions: [{
              label: Object(external_this_wp_i18n_["__"])('Undo', 'woocommerce-admin'),
              onClick: function onClick() {
                updateReview(reviewId, {
                  status: 'untrash'
                }, {
                  _embed: 1
                }).then(function () {
                  return clearReviewsCache();
                });
              }
            }]
          });
        }).catch(function () {
          createNotice('error', Object(external_this_wp_i18n_["__"])('Review could not be deleted.', 'woocommerce-admin'));
        });
      }
    }
  }, {
    key: "updateReviewStatus",
    value: function updateReviewStatus(reviewId, newStatus, oldStatus) {
      var _this$props2 = this.props,
          createNotice = _this$props2.createNotice,
          updateReview = _this$props2.updateReview,
          clearReviewsCache = _this$props2.clearReviewsCache;

      if (reviewId) {
        updateReview(reviewId, {
          status: newStatus
        }).then(function () {
          clearReviewsCache();
          createNotice('success', Object(external_this_wp_i18n_["__"])('Review successfully updated.', 'woocommerce-admin'), {
            actions: [{
              label: Object(external_this_wp_i18n_["__"])('Undo', 'woocommerce-admin'),
              onClick: function onClick() {
                updateReview(reviewId, {
                  status: oldStatus
                }, {
                  _embed: 1
                }).then(function () {
                  return clearReviewsCache();
                });
              }
            }]
          });
        }).catch(function () {
          createNotice('error', Object(external_this_wp_i18n_["__"])('Review could not be updated.', 'woocommerce-admin'));
        });
      }
    }
  }, {
    key: "renderReview",
    value: function renderReview(review) {
      var _this = this;

      var product = review && review._embedded && review._embedded.up && review._embedded.up[0] || null;

      if (review.isUpdating) {
        return Object(external_this_wp_element_["createElement"])(activity_card["b" /* ActivityCardPlaceholder */], {
          key: review.id,
          className: "woocommerce-review-activity-card",
          hasAction: true,
          hasDate: true,
          lines: 1
        });
      }

      if (Object(external_lodash_["isNull"])(product) || review.status !== reviewsQuery.status) {
        return null;
      }

      var title = lib_default()({
        mixedString: Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('{{authorLink}}%s{{/authorLink}}{{verifiedCustomerIcon/}} reviewed {{productLink}}%s{{/productLink}}', 'woocommerce-admin'), review.reviewer, product.name),
        components: {
          productLink: Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Link"], {
            href: product.permalink,
            onClick: function onClick() {
              return _this.recordReviewEvent('product');
            },
            type: "external"
          }),
          authorLink: Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Link"], {
            href: Object(settings["f" /* getAdminLink */])('admin.php?page=wc-admin&path=%2Fcustomers&search=' + review.reviewer),
            onClick: function onClick() {
              return _this.recordReviewEvent('customer');
            },
            type: "external"
          }),
          verifiedCustomerIcon: review.verified ? Object(external_this_wp_element_["createElement"])("span", {
            className: "woocommerce-review-activity-card__verified"
          }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Tooltip"], {
            text: Object(external_this_wp_i18n_["__"])('Verified owner', 'woocommerce-admin')
          }, Object(external_this_wp_element_["createElement"])("span", null, Object(external_this_wp_element_["createElement"])(checkmark_circle_icon, null)))) : null
        }
      });
      var subtitle = Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["ReviewRating"], {
        review: review,
        icon: star_outline_default.a,
        outlineIcon: star_default.a,
        size: 13
      }));
      var productImage = Object(external_lodash_["get"])(product, ['images', 0]) || Object(external_lodash_["get"])(product, ['image']);
      var productImageClasses = classnames_default()('woocommerce-review-activity-card__image-overlay__product', {
        'is-placeholder': !productImage || !productImage.src
      });
      var icon = Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-review-activity-card__image-overlay"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: productImageClasses
      }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["ProductImage"], {
        product: product,
        width: 33,
        height: 33
      })));
      var manageReviewEvent = {
        date: review.date_created_gmt,
        status: review.status
      };
      var cardActions = [Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        key: "approve-action",
        isSecondary: true,
        onClick: function onClick() {
          _this.recordReviewEvent('approve', manageReviewEvent);

          _this.updateReviewStatus(review.id, 'approved', review.status);
        }
      }, Object(external_this_wp_i18n_["__"])('Approve', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        key: "spam-action",
        isTertiary: true,
        onClick: function onClick() {
          _this.recordReviewEvent('mark_as_spam', manageReviewEvent);

          _this.updateReviewStatus(review.id, 'spam', review.status);
        }
      }, Object(external_this_wp_i18n_["__"])('Mark as spam', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        key: "delete-action",
        isDestructive: true,
        isTertiary: true,
        onClick: function onClick() {
          _this.recordReviewEvent('delete', manageReviewEvent);

          _this.deleteReview(review.id);
        }
      }, Object(external_this_wp_i18n_["__"])('Delete', 'woocommerce-admin'))];
      return Object(external_this_wp_element_["createElement"])(activity_card["a" /* ActivityCard */], {
        className: "woocommerce-review-activity-card",
        key: review.id,
        title: title,
        subtitle: subtitle,
        date: review.date_created_gmt,
        icon: icon,
        actions: cardActions
      }, Object(external_this_wp_element_["createElement"])("span", {
        dangerouslySetInnerHTML: Object(sanitize_html["a" /* default */])(review.review)
      }));
    }
  }, {
    key: "renderReviews",
    value: function renderReviews(reviews) {
      var _this2 = this;

      var renderedReviews = reviews.map(function (review) {
        return _this2.renderReview(review, _this2.props);
      });

      if (renderedReviews.filter(Boolean).length === 0) {
        return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null);
      }

      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, renderedReviews, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Link"], {
        href: Object(settings["f" /* getAdminLink */])('edit-comments.php?comment_type=review'),
        onClick: function onClick() {
          return _this2.recordReviewEvent('reviews_manage');
        },
        className: "woocommerce-layout__activity-panel-outbound-link woocommerce-layout__activity-panel-empty",
        type: "wp-admin"
      }, Object(external_this_wp_i18n_["__"])('Manage all reviews', 'woocommerce-admin')));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          isRequesting = _this$props3.isRequesting,
          isError = _this$props3.isError,
          reviews = _this$props3.reviews;

      if (isError) {
        var title = Object(external_this_wp_i18n_["__"])('There was an error getting your reviews. Please try again.', 'woocommerce-admin');

        var actionLabel = Object(external_this_wp_i18n_["__"])('Reload', 'woocommerce-admin');

        var actionCallback = function actionCallback() {
          // @todo Add tracking for how often an error is displayed, and the reload action is clicked.
          window.location.reload();
        };

        return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["EmptyContent"], {
          title: title,
          actionLabel: actionLabel,
          actionURL: null,
          actionCallback: actionCallback
        }));
      }

      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Section"], null, isRequesting && !reviews.length ? Object(external_this_wp_element_["createElement"])(activity_card["b" /* ActivityCardPlaceholder */], {
        className: "woocommerce-review-activity-card",
        hasAction: true,
        hasDate: true,
        lines: 1
      }) : Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, this.renderReviews(reviews))));
    }
  }]);

  return ReviewsPanel;
}(external_this_wp_element_["Component"]);

reviews_ReviewsPanel.propTypes = {
  reviews: prop_types_default.a.array.isRequired,
  isError: prop_types_default.a.bool,
  isRequesting: prop_types_default.a.bool
};
reviews_ReviewsPanel.defaultProps = {
  reviews: [],
  isError: false,
  isRequesting: false
};
reviews_ReviewsPanel.contextType = currency_context["a" /* CurrencyContext */];

/* harmony default export */ var activity_panel_reviews = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, props) {
  var hasUnapprovedReviews = props.hasUnapprovedReviews;

  var _select = select(external_this_wc_data_["REVIEWS_STORE_NAME"]),
      getReviews = _select.getReviews,
      getReviewsError = _select.getReviewsError,
      isResolving = _select.isResolving;

  var reviews = [];
  var isError = false;
  var isRequesting = false;

  if (hasUnapprovedReviews) {
    reviews = getReviews(reviewsQuery);
    isError = Boolean(getReviewsError(reviewsQuery));
    isRequesting = isResolving('getReviews', [reviewsQuery]);
  }

  return {
    reviews: reviews,
    isError: isError,
    isRequesting: isRequesting
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch, props) {
  var _dispatch = dispatch(external_this_wc_data_["REVIEWS_STORE_NAME"]),
      deleteReview = _dispatch.deleteReview,
      updateReview = _dispatch.updateReview,
      invalidateResolution = _dispatch.invalidateResolution;

  var _dispatch2 = dispatch('core/notices'),
      createNotice = _dispatch2.createNotice;

  var clearReviewsCache = function clearReviewsCache() {
    invalidateResolution('getReviews', [reviewsQuery]);

    if (props.reviews && props.reviews.length < 2) {
      invalidateResolution('getReviewsTotalCount', [unapprovedReviewsQuery]);
    }
  };

  return {
    deleteReview: deleteReview,
    createNotice: createNotice,
    updateReview: updateReview,
    clearReviewsCache: clearReviewsCache
  };
})])(reviews_ReviewsPanel));
// CONCATENATED MODULE: ./client/homescreen/activity-panel/panels.js


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




function getAllPanels(_ref) {
  var countLowStockProducts = _ref.countLowStockProducts,
      countUnapprovedReviews = _ref.countUnapprovedReviews,
      countUnreadOrders = _ref.countUnreadOrders,
      isTaskListHidden = _ref.isTaskListHidden,
      manageStock = _ref.manageStock,
      orderStatuses = _ref.orderStatuses,
      publishedProductCount = _ref.publishedProductCount,
      reviewsEnabled = _ref.reviewsEnabled,
      totalOrderCount = _ref.totalOrderCount;
  return [totalOrderCount > 0 && {
    className: 'woocommerce-homescreen-card',
    count: countUnreadOrders,
    collapsible: true,
    id: 'orders-panel',
    initialOpen: true,
    panel: Object(external_this_wp_element_["createElement"])(activity_panel_orders, {
      countUnreadOrders: countUnreadOrders,
      orderStatuses: orderStatuses
    }),
    title: Object(external_this_wp_i18n_["__"])('Orders', 'woocommerce-admin')
  }, totalOrderCount > 0 && publishedProductCount > 0 && isTaskListHidden === 'yes' && manageStock === 'yes' && {
    className: 'woocommerce-homescreen-card',
    count: countLowStockProducts,
    id: 'stock-panel',
    initialOpen: false,
    collapsible: countLowStockProducts !== 0,
    panel: Object(external_this_wp_element_["createElement"])(stock, {
      countLowStockProducts: countLowStockProducts
    }),
    title: Object(external_this_wp_i18n_["__"])('Stock', 'woocommerce-admin')
  }, publishedProductCount > 0 && isTaskListHidden === 'yes' && reviewsEnabled === 'yes' && {
    className: 'woocommerce-homescreen-card',
    id: 'reviews-panel',
    count: countUnapprovedReviews,
    initialOpen: false,
    collapsible: countUnapprovedReviews !== 0,
    panel: Object(external_this_wp_element_["createElement"])(activity_panel_reviews, {
      hasUnapprovedReviews: countUnapprovedReviews > 0
    }),
    title: Object(external_this_wp_i18n_["__"])('Reviews', 'woocommerce-admin')
  } // Add another panel row here
  ].filter(Boolean);
}
// CONCATENATED MODULE: ./client/homescreen/activity-panel/index.js


/**
 * External dependencies
 */





/**
 * Internal dependencies
 */





var activity_panel_ActivityPanel = function ActivityPanel() {
  var panelsData = Object(external_this_wp_data_["useSelect"])(function (select) {
    var totalOrderCount = Object(settings["g" /* getSetting */])('orderCount', 0);
    var orderStatuses = getOrderStatuses(select);
    var reviewsEnabled = Object(settings["g" /* getSetting */])('reviewsEnabled', 'no');
    var countUnreadOrders = getUnreadOrders(select, orderStatuses);
    var manageStock = Object(settings["g" /* getSetting */])('manageStock', 'no');
    var countLowStockProducts = getLowStockCount(select);
    var countUnapprovedReviews = getUnapprovedReviews(select);
    var publishedProductCount = Object(settings["g" /* getSetting */])('publishedProductCount', 0);

    var _select = select(external_this_wc_data_["OPTIONS_STORE_NAME"]),
        getOption = _select.getOption;

    var isTaskListHidden = getOption('woocommerce_task_list_hidden');
    return {
      countLowStockProducts: countLowStockProducts,
      countUnapprovedReviews: countUnapprovedReviews,
      countUnreadOrders: countUnreadOrders,
      isTaskListHidden: isTaskListHidden,
      manageStock: manageStock,
      publishedProductCount: publishedProductCount,
      reviewsEnabled: reviewsEnabled,
      totalOrderCount: totalOrderCount,
      orderStatuses: orderStatuses
    };
  });
  var panels = getAllPanels(panelsData);

  if (panels.length === 0) {
    return null;
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Panel"], {
    className: "woocommerce-activity-panel"
  }, panels.map(function (panelData) {
    var className = panelData.className,
        count = panelData.count,
        id = panelData.id,
        initialOpen = panelData.initialOpen,
        panel = panelData.panel,
        title = panelData.title,
        collapsible = panelData.collapsible;
    return collapsible ? Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelBody"], {
      title: [Object(external_this_wp_element_["createElement"])(external_this_wp_components_["__experimentalText"], {
        key: title,
        variant: "title.small"
      }, title), count !== null && Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Badge"], {
        count: count
      })],
      key: id,
      className: className,
      initialOpen: initialOpen,
      collapsible: collapsible,
      disabled: !collapsible
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["PanelRow"], null, panel)) : Object(external_this_wp_element_["createElement"])("div", {
      className: "components-panel__body"
    }, Object(external_this_wp_element_["createElement"])("h2", {
      className: "components-panel__body-title"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
      className: "components-panel__body-toggle",
      "aria-expanded": false,
      disabled: true
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["__experimentalText"], {
      variant: "title.small"
    }, title), count !== null && Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Badge"], {
      count: count
    }))));
  }));
};
// EXTERNAL MODULE: ./client/homescreen/style.scss
var homescreen_style = __webpack_require__(550);

// EXTERNAL MODULE: ./client/dashboard/style.scss
var dashboard_style = __webpack_require__(513);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(19);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/megaphone.js
var megaphone = __webpack_require__(585);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/box.js
var box = __webpack_require__(586);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/brush.js
var brush = __webpack_require__(587);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/home.js
var home = __webpack_require__(588);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/pencil.js
var pencil = __webpack_require__(589);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/payment.js
var payment = __webpack_require__(590);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/percent.js
var percent = __webpack_require__(591);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/shipping.js
var shipping = __webpack_require__(592);

// EXTERNAL MODULE: ./client/store-management-links/style.scss
var store_management_links_style = __webpack_require__(551);

// EXTERNAL MODULE: ./client/store-management-links/quick-link-category/style.scss
var quick_link_category_style = __webpack_require__(552);

// CONCATENATED MODULE: ./client/store-management-links/quick-link-category/index.js


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


var quick_link_category_QuickLinkCategory = function QuickLinkCategory(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-quick-links__category"
  }, Object(external_this_wp_element_["createElement"])("h3", {
    className: "woocommerce-quick-links__category-header"
  }, title), children);
};
// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js
var build_module_icon = __webpack_require__(306);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/external.js
var external = __webpack_require__(584);

// EXTERNAL MODULE: ./client/store-management-links/quick-link/style.scss
var quick_link_style = __webpack_require__(553);

// CONCATENATED MODULE: ./client/store-management-links/quick-link/index.js


/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


var quick_link_QuickLink = function QuickLink(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      href = _ref.href,
      linkType = _ref.linkType,
      onClick = _ref.onClick;
  var isExternal = linkType === 'external';
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-quick-links__item"
  }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Link"], {
    onClick: onClick,
    href: href,
    type: linkType,
    className: "woocommerce-quick-links__item-link"
  }, Object(external_this_wp_element_["createElement"])(build_module_icon["a" /* default */], {
    className: "woocommerce-quick-links__item-link__icon",
    icon: icon
  }), Object(external_this_wp_element_["createElement"])(build_module["f" /* Text */], {
    className: "woocommerce-quick-links__item-link__text",
    as: "div",
    variant: "button"
  }, title), isExternal && Object(external_this_wp_element_["createElement"])(build_module_icon["a" /* default */], {
    icon: external["a" /* default */]
  })));
};
// CONCATENATED MODULE: ./client/store-management-links/index.js



/**
 * External dependencies
 */







/**
 * Internal dependencies
 */




function getItemsByCategory(siteUrl) {
  return [{
    title: Object(external_this_wp_i18n_["__"])('Marketing & Merchandising', 'woocommerce-admin'),
    items: [{
      title: Object(external_this_wp_i18n_["__"])('Marketing', 'woocommerce-admin'),
      link: getLinkTypeAndHref({
        type: 'wc-admin',
        path: 'marketing'
      }),
      icon: megaphone["a" /* default */],
      listItemTag: 'marketing'
    }, {
      title: Object(external_this_wp_i18n_["__"])('Add products', 'woocommerce-admin'),
      link: getLinkTypeAndHref({
        type: 'wp-admin',
        path: 'post-new.php?post_type=product'
      }),
      icon: box["a" /* default */],
      listItemTag: 'add-products'
    }, {
      title: Object(external_this_wp_i18n_["__"])('Personalize my store', 'woocommerce-admin'),
      link: getLinkTypeAndHref({
        type: 'wp-admin',
        path: 'customize.php'
      }),
      icon: brush["a" /* default */],
      listItemTag: 'personalize-store'
    }, {
      title: Object(external_this_wp_i18n_["__"])('View my store', 'woocommerce-admin'),
      link: getLinkTypeAndHref({
        type: 'external',
        href: siteUrl
      }),
      icon: home["a" /* default */],
      listItemTag: 'view-store'
    }]
  }, {
    title: Object(external_this_wp_i18n_["__"])('Settings', 'woocommerce-admin'),
    items: [{
      title: Object(external_this_wp_i18n_["__"])('Store details', 'woocommerce-admin'),
      link: getLinkTypeAndHref({
        type: 'wc-settings',
        tab: 'general'
      }),
      icon: pencil["a" /* default */],
      listItemTag: 'edit-store-details'
    }, {
      title: Object(external_this_wp_i18n_["__"])('Payments', 'woocommerce-admin'),
      link: getLinkTypeAndHref({
        type: 'wc-settings',
        tab: 'checkout'
      }),
      icon: payment["a" /* default */],
      listItemTag: 'payment-settings'
    }, {
      title: Object(external_this_wp_i18n_["__"])('Tax', 'woocommerce-admin'),
      link: getLinkTypeAndHref({
        type: 'wc-settings',
        tab: 'tax'
      }),
      icon: percent["a" /* default */],
      listItemTag: 'tax-settings'
    }, {
      title: Object(external_this_wp_i18n_["__"])('Shipping', 'woocommerce-admin'),
      link: getLinkTypeAndHref({
        type: 'wc-settings',
        tab: 'shipping'
      }),
      icon: shipping["a" /* default */],
      listItemTag: 'shipping-settings'
    }]
  }];
}
function getLinkTypeAndHref(_ref) {
  var path = _ref.path,
      _ref$tab = _ref.tab,
      tab = _ref$tab === void 0 ? null : _ref$tab,
      type = _ref.type,
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? null : _ref$href;
  return {
    'wc-admin': {
      href: "admin.php?page=wc-admin&path=%2F".concat(path),
      linkType: 'wc-admin'
    },
    'wp-admin': {
      href: path,
      linkType: 'wp-admin'
    },
    'wc-settings': {
      href: "admin.php?page=wc-settings&tab=".concat(tab),
      linkType: 'wp-admin'
    }
  }[type] || {
    href: href,
    linkType: 'external'
  };
}
var generateExtensionLinks = function generateExtensionLinks(links) {
  return links.reduce(function (acc, _ref2) {
    var icon = _ref2.icon,
        href = _ref2.href,
        title = _ref2.title;
    var url = new URL(href, window.location.href); // We do not support extension links that take users away from the host.

    if (url.origin === window.location.origin) {
      acc.push({
        icon: icon,
        link: {
          href: href,
          linkType: 'wp-admin'
        },
        title: title,
        listItemTag: 'quick-links-extension-link'
      });
    }

    return acc;
  }, []);
};
var store_management_links_StoreManagementLinks = function StoreManagementLinks() {
  var siteUrl = Object(settings["g" /* getSetting */])('siteUrl');
  var extensionQuickLinks = generateExtensionLinks(Object(external_this_wp_hooks_["applyFilters"])('woocommerce_admin_homescreen_quicklinks', []));
  var itemCategories = getItemsByCategory(siteUrl);
  var extensionCategory = {
    title: Object(external_this_wp_i18n_["__"])('Extensions', 'woocommerce-admin'),
    items: extensionQuickLinks
  };
  var categories = extensionQuickLinks.length ? [].concat(toConsumableArray_default()(itemCategories), [extensionCategory]) : itemCategories;
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Card"], {
    size: "medium"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["CardHeader"], {
    size: "medium"
  }, Object(external_this_wp_element_["createElement"])(build_module["f" /* Text */], {
    variant: "title.small"
  }, Object(external_this_wp_i18n_["__"])('Store management', 'woocommerce-admin'))), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["CardBody"], {
    size: "custom",
    className: "woocommerce-store-management-links__card-body"
  }, categories.map(function (category) {
    return Object(external_this_wp_element_["createElement"])(quick_link_category_QuickLinkCategory, {
      key: category.title,
      title: category.title
    }, category.items.map(function (_ref3) {
      var icon = _ref3.icon,
          listItemTag = _ref3.listItemTag,
          title = _ref3.title,
          _ref3$link = _ref3.link,
          href = _ref3$link.href,
          linkType = _ref3$link.linkType;
      return Object(external_this_wp_element_["createElement"])(quick_link_QuickLink, {
        icon: icon,
        key: "".concat(title, "_").concat(listItemTag, "_").concat(href),
        title: title,
        linkType: linkType,
        href: href,
        onClick: function onClick() {
          Object(external_this_wc_tracks_["recordEvent"])('home_quick_links_click', {
            task_name: listItemTag
          });
        }
      });
    }));
  })));
};
// CONCATENATED MODULE: ./client/homescreen/column.js



/**
 * External dependencies
 */

var column_Column = function Column(_ref) {
  var children = _ref.children,
      _ref$shouldStick = _ref.shouldStick,
      shouldStick = _ref$shouldStick === void 0 ? false : _ref$shouldStick;

  var _useState = Object(external_this_wp_element_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      isContentStuck = _useState2[0],
      setIsContentStuck = _useState2[1];

  var content = Object(external_this_wp_element_["useRef"])(null);
  var initialTop = Object(external_this_wp_element_["useRef"])(null);
  var maybeStickContent = Object(external_this_wp_element_["useCallback"])(function () {
    if (!content.current) {
      return;
    }

    var _content$current$getB = content.current.getBoundingClientRect(),
        bottom = _content$current$getB.bottom,
        top = _content$current$getB.top;

    if (initialTop.current === null) {
      initialTop.current = top;
    }

    var shouldBeSticky = bottom < window.innerHeight;

    if (top === initialTop.current) {
      setIsContentStuck(shouldBeSticky);
    }
  }, []);
  Object(external_this_wp_element_["useLayoutEffect"])(function () {
    if (!shouldStick) {
      return;
    }

    maybeStickContent();
    window.addEventListener('resize', maybeStickContent);
    window.addEventListener('scroll', maybeStickContent);
    return function () {
      window.removeEventListener('resize', maybeStickContent);
      window.removeEventListener('scroll', maybeStickContent);
    };
  }, [maybeStickContent, shouldStick]);
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-homescreen-column",
    ref: content,
    style: {
      position: shouldStick && isContentStuck ? 'sticky' : 'static'
    }
  }, children);
};
// CONCATENATED MODULE: ./client/homescreen/layout.js




/**
 * External dependencies
 */







/**
 * Internal dependencies
 */












var TaskList = Object(external_this_wp_element_["lazy"])(function () {
  return Promise.all(/* import() | task-list */[__webpack_require__.e(6), __webpack_require__.e(49)]).then(__webpack_require__.bind(null, 598));
});
var WELCOME_FROM_CALYPSO_MODAL_DISMISSED_OPTION_NAME = 'woocommerce_welcome_from_calypso_modal_dismissed';
var layout_Layout = function Layout(_ref) {
  var defaultHomescreenLayout = _ref.defaultHomescreenLayout,
      isBatchUpdating = _ref.isBatchUpdating,
      query = _ref.query,
      requestingTaskList = _ref.requestingTaskList,
      taskListHidden = _ref.taskListHidden,
      shouldShowWelcomeModal = _ref.shouldShowWelcomeModal,
      shouldShowWelcomeFromCalypsoModal = _ref.shouldShowWelcomeFromCalypsoModal,
      updateOptions = _ref.updateOptions;
  var userPrefs = Object(external_this_wc_data_["useUserPreferences"])();
  var twoColumns = (userPrefs.homepage_layout || defaultHomescreenLayout) === 'two_columns';

  var _useState = Object(external_this_wp_element_["useState"])(true),
      _useState2 = slicedToArray_default()(_useState, 2),
      showInbox = _useState2[0],
      setShowInbox = _useState2[1];

  var isTaskListEnabled = taskListHidden === false;
  var isDashboardShown = !query.task;

  if (isBatchUpdating && !showInbox) {
    setShowInbox(true);
  }

  var isWideViewport = Object(external_this_wp_element_["useRef"])(true);
  var maybeToggleColumns = Object(external_this_wp_element_["useCallback"])(function () {
    isWideViewport.current = window.innerWidth >= 782;
  }, []);
  Object(external_this_wp_element_["useLayoutEffect"])(function () {
    maybeToggleColumns();
    window.addEventListener('resize', maybeToggleColumns);
    return function () {
      window.removeEventListener('resize', maybeToggleColumns);
    };
  }, [maybeToggleColumns]);
  var shouldStickColumns = isWideViewport.current && twoColumns;

  var renderColumns = function renderColumns() {
    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(column_Column, {
      shouldStick: shouldStickColumns
    }, Object(external_this_wp_element_["createElement"])(activity_header["a" /* default */], {
      className: "your-store-today",
      title: Object(external_this_wp_i18n_["__"])('Your store today', 'woocommerce-admin'),
      subtitle: Object(external_this_wp_i18n_["__"])("To do's, tips, and insights for your business", 'woocommerce-admin')
    }), Object(external_this_wp_element_["createElement"])(activity_panel_ActivityPanel, null), isTaskListEnabled && renderTaskList(), !isTaskListEnabled && shouldStickColumns && Object(external_this_wp_element_["createElement"])(store_management_links_StoreManagementLinks, null)), Object(external_this_wp_element_["createElement"])(column_Column, {
      shouldStick: shouldStickColumns
    }, Object(external_this_wp_element_["createElement"])(stats_overview, null), Object(external_this_wp_element_["createElement"])(inbox_panel["default"], null), !isTaskListEnabled && !shouldStickColumns && Object(external_this_wp_element_["createElement"])(store_management_links_StoreManagementLinks, null)));
  };

  var renderTaskList = function renderTaskList() {
    if (requestingTaskList) {
      return Object(external_this_wp_element_["createElement"])(placeholder, null);
    }

    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Suspense"], {
      fallback: Object(external_this_wp_element_["createElement"])(placeholder, null)
    }, Object(external_this_wp_element_["createElement"])(TaskList, {
      query: query,
      userPreferences: userPrefs
    }));
  };

  return Object(external_this_wp_element_["createElement"])("div", {
    className: classnames_default()('woocommerce-homescreen', {
      'two-columns': twoColumns
    })
  }, isDashboardShown ? renderColumns() : renderTaskList(), shouldShowWelcomeModal && Object(external_this_wp_element_["createElement"])(welcome_modal_WelcomeModal, {
    onClose: function onClose() {
      updateOptions({
        woocommerce_task_list_welcome_modal_dismissed: 'yes'
      });
    }
  }), shouldShowWelcomeFromCalypsoModal && Object(external_this_wp_element_["createElement"])(WelcomeFromCalypsoModal, {
    onClose: function onClose() {
      updateOptions(defineProperty_default()({}, WELCOME_FROM_CALYPSO_MODAL_DISMISSED_OPTION_NAME, 'yes'));
    }
  }));
};
layout_Layout.propTypes = {
  /**
   * If the task list option is being fetched.
   */
  requestingTaskList: prop_types_default.a.bool.isRequired,

  /**
   * If the task list has been completed.
   */
  taskListComplete: prop_types_default.a.bool,

  /**
   * If the task list is hidden.
   */
  taskListHidden: prop_types_default.a.bool,

  /**
   * Page query, used to determine the current task if any.
   */
  query: prop_types_default.a.object.isRequired,

  /**
   * If the welcome modal should display
   */
  shouldShowWelcomeModal: prop_types_default.a.bool,

  /**
   * If the welcome from Calypso modal should display.
   */
  shouldShowWelcomeFromCalypsoModal: prop_types_default.a.bool,

  /**
   * Dispatch an action to update an option
   */
  updateOptions: prop_types_default.a.func.isRequired
};
/* harmony default export */ var layout = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select(external_this_wc_data_["NOTES_STORE_NAME"]),
      isNotesRequesting = _select.isNotesRequesting;

  var _select2 = select(external_this_wc_data_["OPTIONS_STORE_NAME"]),
      getOption = _select2.getOption,
      isResolving = _select2.isResolving,
      hasFinishedResolution = _select2.hasFinishedResolution;

  var welcomeFromCalypsoModalDismissed = getOption(WELCOME_FROM_CALYPSO_MODAL_DISMISSED_OPTION_NAME) === 'yes';
  var welcomeFromCalypsoModalDismissedResolved = hasFinishedResolution('getOption', [WELCOME_FROM_CALYPSO_MODAL_DISMISSED_OPTION_NAME]);
  var fromCalypsoUrlArgIsPresent = !!window.location.search.match('from-calypso');
  var shouldShowWelcomeFromCalypsoModal = welcomeFromCalypsoModalDismissedResolved && !welcomeFromCalypsoModalDismissed && fromCalypsoUrlArgIsPresent;
  var welcomeModalDismissed = getOption('woocommerce_task_list_welcome_modal_dismissed') === 'yes';
  var welcomeModalDismissedHasResolved = hasFinishedResolution('getOption', ['woocommerce_task_list_welcome_modal_dismissed']);
  var shouldShowWelcomeModal = welcomeModalDismissedHasResolved && !welcomeModalDismissed && welcomeFromCalypsoModalDismissedResolved && !welcomeFromCalypsoModalDismissed;
  var defaultHomescreenLayout = getOption('woocommerce_default_homepage_layout') || 'single_column';
  return {
    defaultHomescreenLayout: defaultHomescreenLayout,
    isBatchUpdating: isNotesRequesting('batchUpdateNotes'),
    shouldShowWelcomeModal: shouldShowWelcomeModal,
    shouldShowWelcomeFromCalypsoModal: shouldShowWelcomeFromCalypsoModal,
    taskListHidden: getOption('woocommerce_task_list_hidden') === 'yes' && getOption('woocommerce_extended_task_list_hidden') !== 'no',
    requestingTaskList: isResolving('getOption', ['woocommerce_task_list_complete']) || isResolving('getOption', ['woocommerce_task_list_hidden']) || isResolving('getOption', ['woocommerce_extended_task_list_hidden'])
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  return {
    updateOptions: dispatch(external_this_wc_data_["OPTIONS_STORE_NAME"]).updateOptions
  };
}))(layout_Layout));
// CONCATENATED MODULE: ./client/homescreen/index.js


/**
 * External dependencies
 */






/**
 * Internal dependencies
 */



var homescreen_Homescreen = function Homescreen(_ref) {
  var profileItems = _ref.profileItems,
      query = _ref.query;

  var _ref2 = profileItems || {},
      profilerCompleted = _ref2.completed,
      profilerSkipped = _ref2.skipped;

  if (!profilerCompleted && !profilerSkipped) {
    Object(external_this_wc_navigation_["getHistory"])().push(Object(external_this_wc_navigation_["getNewPath"])({}, '/setup-wizard', {}));
  }

  return Object(external_this_wp_element_["createElement"])(layout, {
    query: query
  });
};

var onboardingData = Object(settings["g" /* getSetting */])('onboarding', {});
/* harmony default export */ var homescreen = __webpack_exports__["default"] = (Object(external_this_wp_compose_["compose"])(onboardingData.profile || onboardingData.tasksStatus ? Object(external_this_wc_data_["withOnboardingHydration"])({
  profileItems: onboardingData.profile,
  tasksStatus: onboardingData.tasksStatus
}) : external_lodash_["identity"], Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select(external_this_wc_data_["ONBOARDING_STORE_NAME"]),
      getProfileItems = _select.getProfileItems;

  var profileItems = getProfileItems();
  return {
    profileItems: profileItems
  };
}))(homescreen_Homescreen));

/***/ })

}]);