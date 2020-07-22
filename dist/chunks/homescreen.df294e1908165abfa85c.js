(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([["homescreen"],{

/***/ "./client/dashboard/store-performance/utils.js":
/*!*****************************************************!*\
  !*** ./client/dashboard/store-performance/utils.js ***!
  \*****************************************************/
/*! exports provided: getIndicatorValues, getIndicatorData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndicatorValues", function() { return getIndicatorValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndicatorData", function() { return getIndicatorData; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @woocommerce/date */ "@woocommerce/date");
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_date__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @woocommerce/data */ "@woocommerce/data");
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @woocommerce/navigation */ "@woocommerce/navigation");
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @woocommerce/number */ "@woocommerce/number");
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_number__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @woocommerce/wc-admin-settings */ "./client/settings/index.js");
/* harmony import */ var wc_api_reports_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wc-api/reports/utils */ "./client/wc-api/reports/utils.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WooCommerce dependencies
 */








function getReportUrl(href, persistedQuery, primaryItem) {
  if (!href) {
    return '';
  }

  if (href === '/jetpack') {
    return Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_7__["getAdminLink"])('admin.php?page=jetpack#/dashboard');
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
  var _select = select('wc-api'),
      getReportItems = _select.getReportItems,
      getReportItemsError = _select.getReportItemsError,
      isReportItemsRequesting = _select.isReportItemsRequesting;

  var _select$getSetting = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings'),
      defaultDateRange = _select$getSetting.woocommerce_default_date_range;

  var datesFromQuery = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_3__["getCurrentDates"])(query, defaultDateRange);
  var endPrimary = datesFromQuery.primary.before;
  var endSecondary = datesFromQuery.secondary.before;
  var statKeys = indicators.map(function (indicator) {
    return indicator.stat;
  }).join(',');
  var filterQuery = Object(wc_api_reports_utils__WEBPACK_IMPORTED_MODULE_8__["getFilterQuery"])({
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
  var primaryRequesting = isReportItemsRequesting('performance-indicators', primaryQuery);
  var secondaryData = getReportItems('performance-indicators', secondaryQuery);
  var secondaryError = getReportItemsError('performance-indicators', secondaryQuery) || null;
  var secondaryRequesting = isReportItemsRequesting('performance-indicators', secondaryQuery);
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

/***/ "./client/dashboard/style.scss":
/*!*************************************!*\
  !*** ./client/dashboard/style.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/@automattic/mini-css-extract-plugin-with-rtl/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: File to import not found or unreadable: node_modules/@automattic/color-studio/dist/color-variables.scss.\n        on line 1 of client/stylesheets/abstracts/_colors.scss\n        from line 1 of /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/client/dashboard/style.scss\n>> @import 'node_modules/@automattic/color-studio/dist/color-variables.scss';\n\n   ^\n\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/webpack/lib/NormalModule.js:316:20\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.callback (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/sass-loader/dist/index.js:73:7)\n    at Object.done [as callback] (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/neo-async/async.js:8069:18)\n    at options.error (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),

/***/ "./client/homescreen/index.js":
/*!************************************!*\
  !*** ./client/homescreen/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "./node_modules/@wordpress/compose/build-module/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @woocommerce/wc-admin-settings */ "./client/settings/index.js");
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @woocommerce/data */ "@woocommerce/data");
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @woocommerce/navigation */ "@woocommerce/navigation");
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var wc_api_with_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wc-api/with-select */ "./client/wc-api/with-select.js");
/* harmony import */ var dashboard_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dashboard/utils */ "./client/dashboard/utils.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout */ "./client/homescreen/layout.js");


/**
 * External dependencies
 */


/**
 * WooCommerce dependencies
 */




/**
 * Internal dependencies
 */





var Homescreen = function Homescreen(_ref) {
  var profileItems = _ref.profileItems,
      query = _ref.query;

  var _ref2 = profileItems || {},
      profilerCompleted = _ref2.completed,
      profilerSkipped = _ref2.skipped;

  if (Object(dashboard_utils__WEBPACK_IMPORTED_MODULE_7__["isOnboardingEnabled"])() && !profilerCompleted && !profilerSkipped) {
    Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__["getHistory"])().push(Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__["getNewPath"])({}, "/profiler", {}));
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    query: query
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_3__["getSetting"])('onboarding', {}).profile ? Object(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["withOnboardingHydration"])(Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_3__["getSetting"])('onboarding', {}).profile) : lodash__WEBPACK_IMPORTED_MODULE_2__["identity"], Object(wc_api_with_select__WEBPACK_IMPORTED_MODULE_6__["default"])(function (select) {
  if (!Object(dashboard_utils__WEBPACK_IMPORTED_MODULE_7__["isOnboardingEnabled"])()) {
    return;
  }

  var _select = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["ONBOARDING_STORE_NAME"]),
      getProfileItems = _select.getProfileItems;

  var profileItems = getProfileItems();
  return {
    profileItems: profileItems
  };
}))(Homescreen));

/***/ }),

/***/ "./client/homescreen/layout.js":
/*!*************************************!*\
  !*** ./client/homescreen/layout.js ***!
  \*************************************/
/*! exports provided: Layout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "./node_modules/@wordpress/compose/build-module/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @woocommerce/data */ "@woocommerce/data");
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _quick_links__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../quick-links */ "./client/quick-links/index.js");
/* harmony import */ var _stats_overview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stats-overview */ "./client/homescreen/stats-overview/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ "./client/homescreen/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _dashboard_style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dashboard/style.scss */ "./client/dashboard/style.scss");
/* harmony import */ var _dashboard_style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_dashboard_style_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var dashboard_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dashboard/utils */ "./client/dashboard/utils.js");
/* harmony import */ var _task_list_placeholder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../task-list/placeholder */ "./client/task-list/placeholder.js");
/* harmony import */ var _header_activity_panel_panels_inbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../header/activity-panel/panels/inbox */ "./client/header/activity-panel/panels/inbox/index.js");
/* harmony import */ var wc_api_with_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! wc-api/with-select */ "./client/wc-api/with-select.js");



/**
 * External dependencies
 */




/**
 * WooCommerce dependencies
 */


/**
 * Internal dependencies
 */









var TaskList = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() | task-list */[__webpack_require__.e("vendors~activity-panels-inbox~homescreen~leaderboards~store-alerts~task-list"), __webpack_require__.e("activity-panels-help~task-list"), __webpack_require__.e("task-list")]).then(__webpack_require__.bind(null, /*! ../task-list */ "./client/task-list/index.js"));
});
var Layout = function Layout(props) {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      showInbox = _useState2[0],
      setShowInbox = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      isContentSticky = _useState4[0],
      setIsContentSticky = _useState4[1];

  var content = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var maybeStickContent = function maybeStickContent() {
    if (!content.current) {
      return;
    }

    var _content$current$getB = content.current.getBoundingClientRect(),
        bottom = _content$current$getB.bottom;

    var shouldBeSticky = showInbox && bottom < window.innerHeight;
    setIsContentSticky(shouldBeSticky);
  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    maybeStickContent();
    window.addEventListener('resize', maybeStickContent);
    return function () {
      window.removeEventListener('resize', maybeStickContent);
    };
  }, []);
  var isUndoRequesting = props.isUndoRequesting,
      query = props.query,
      requestingTaskList = props.requestingTaskList,
      taskListComplete = props.taskListComplete,
      taskListHidden = props.taskListHidden;
  var isTaskListEnabled = taskListHidden === false && !taskListComplete;
  var isDashboardShown = !isTaskListEnabled || !query.task;

  var isInboxPanelEmpty = function isInboxPanelEmpty(isEmpty) {
    setShowInbox(!isEmpty);
  };

  if (isUndoRequesting && !showInbox) {
    setShowInbox(true);
  }

  var renderColumns = function renderColumns() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, showInbox && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "woocommerce-homescreen-column is-inbox"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_header_activity_panel_panels_inbox__WEBPACK_IMPORTED_MODULE_12__["default"], {
      isPanelEmpty: isInboxPanelEmpty
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "woocommerce-homescreen-column",
      ref: content,
      style: {
        position: isContentSticky ? 'sticky' : 'static'
      }
    }, isTaskListEnabled && renderTaskList(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_stats_overview__WEBPACK_IMPORTED_MODULE_7__["default"], null), !isTaskListEnabled && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_quick_links__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
  };

  var renderTaskList = function renderTaskList() {
    if (requestingTaskList) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_task_list_placeholder__WEBPACK_IMPORTED_MODULE_11__["default"], null);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
      fallback: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_task_list_placeholder__WEBPACK_IMPORTED_MODULE_11__["default"], null)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TaskList, {
      query: query
    }));
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('woocommerce-homescreen', {
      hasInbox: showInbox
    })
  }, isDashboardShown ? renderColumns() : isTaskListEnabled && renderTaskList());
};
Layout.propTypes = {
  /**
   * If the task list option is being fetched.
   */
  requestingTaskList: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,

  /**
   * If the task list has been completed.
   */
  taskListComplete: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If the task list is hidden.
   */
  taskListHidden: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Page query, used to determine the current task if any.
   */
  query: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(wc_api_with_select__WEBPACK_IMPORTED_MODULE_13__["default"])(function (select) {
  var _select = select('wc-api'),
      getUndoDismissRequesting = _select.getUndoDismissRequesting;

  var _getUndoDismissReques = getUndoDismissRequesting(),
      isUndoRequesting = _getUndoDismissReques.isUndoRequesting;

  var _select2 = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_5__["OPTIONS_STORE_NAME"]),
      getOption = _select2.getOption,
      isResolving = _select2.isResolving;

  if (Object(dashboard_utils__WEBPACK_IMPORTED_MODULE_10__["isOnboardingEnabled"])()) {
    return {
      isUndoRequesting: isUndoRequesting,
      taskListComplete: getOption('woocommerce_task_list_complete') === 'yes',
      taskListHidden: getOption('woocommerce_task_list_hidden') === 'yes',
      requestingTaskList: isResolving('getOption', ['woocommerce_task_list_complete']) || isResolving('getOption', ['woocommerce_task_list_hidden'])
    };
  }

  return {
    requestingTaskList: false
  };
}))(Layout));

/***/ }),

/***/ "./client/homescreen/stats-overview/defaults.js":
/*!******************************************************!*\
  !*** ./client/homescreen/stats-overview/defaults.js ***!
  \******************************************************/
/*! exports provided: DEFAULT_STATS, DEFAULT_HIDDEN_STATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STATS", function() { return DEFAULT_STATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_HIDDEN_STATS", function() { return DEFAULT_HIDDEN_STATS; });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

var DEFAULT_STATS = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["applyFilters"])('woocommerce_admin_homepage_default_stats', ['revenue/total_sales', 'revenue/net_revenue', 'orders/orders_count', 'products/items_sold', 'jetpack/stats/visitors', 'jetpack/stats/views']);
var DEFAULT_HIDDEN_STATS = ['revenue/net_revenue', 'products/items_sold'];

/***/ }),

/***/ "./client/homescreen/stats-overview/index.js":
/*!***************************************************!*\
  !*** ./client/homescreen/stats-overview/index.js ***!
  \***************************************************/
/*! exports provided: StatsOverview, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsOverview", function() { return StatsOverview; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @woocommerce/components */ "@woocommerce/components");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @woocommerce/data */ "@woocommerce/data");
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @woocommerce/wc-admin-settings */ "./client/settings/index.js");
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @woocommerce/navigation */ "@woocommerce/navigation");
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.scss */ "./client/homescreen/stats-overview/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./defaults */ "./client/homescreen/stats-overview/defaults.js");
/* harmony import */ var _stats_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stats-list */ "./client/homescreen/stats-overview/stats-list.js");
/* harmony import */ var lib_tracks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lib/tracks */ "./client/lib/tracks.js");
/* harmony import */ var _install_jetpack_cta__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./install-jetpack-cta */ "./client/homescreen/stats-overview/install-jetpack-cta.js");



/**
 * External dependencies
 */




/**
 * WooCommerce dependencies
 */





/**
 * Internal dependencies
 */







var _getSetting = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_7__["getSetting"])('dataEndpoints', {
  performanceIndicators: []
}),
    performanceIndicators = _getSetting.performanceIndicators;

var stats = performanceIndicators.filter(function (indicator) {
  return _defaults__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_STATS"].includes(indicator.stat);
});
var StatsOverview = function StatsOverview() {
  var _useUserPreferences = Object(_woocommerce_data__WEBPACK_IMPORTED_MODULE_6__["useUserPreferences"])(),
      updateUserPreferences = _useUserPreferences.updateUserPreferences,
      userPrefs = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_useUserPreferences, ["updateUserPreferences"]);

  var hiddenStats = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["get"])(userPrefs, ['homepage_stats', 'hiddenStats'], _defaults__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_HIDDEN_STATS"]);

  var toggleStat = function toggleStat(stat) {
    var nextHiddenStats = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["xor"])(hiddenStats, [stat]);
    updateUserPreferences({
      homepage_stats: {
        hiddenStats: nextHiddenStats
      }
    });
    Object(lib_tracks__WEBPACK_IMPORTED_MODULE_12__["recordEvent"])('statsoverview_indicators_toggle', {
      indicator_name: stat,
      status: nextHiddenStats.includes(stat) ? 'off' : 'on'
    });
  };

  var activeStats = stats.filter(function (item) {
    return !hiddenStats.includes(item.stat);
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    size: "large",
    className: "woocommerce-stats-overview woocommerce-homescreen-card"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], {
    size: "medium"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalText"], {
    variant: "title.small"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Stats overview', 'woocommerce-admin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__["EllipsisMenu"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Choose which values to display', 'woocommerce-admin'),
    renderContent: function renderContent() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__["MenuTitle"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Display stats:', 'woocommerce-admin')), stats.map(function (item) {
        var checked = !hiddenStats.includes(item.stat);
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
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
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
    className: "woocommerce-stats-overview__tabs",
    onSelect: function onSelect(period) {
      Object(lib_tracks__WEBPACK_IMPORTED_MODULE_12__["recordEvent"])('statsoverview_date_picker_update', {
        period: period
      });
    },
    tabs: [{
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Today', 'woocommerce-admin'),
      name: 'today'
    }, {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Week to date', 'woocommerce-admin'),
      name: 'week'
    }, {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Month to date', 'woocommerce-admin'),
      name: 'month'
    }]
  }, function (tab) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_install_jetpack_cta__WEBPACK_IMPORTED_MODULE_13__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_stats_list__WEBPACK_IMPORTED_MODULE_11__["default"], {
      query: {
        period: tab.name,
        compare: 'previous_period'
      },
      stats: activeStats
    }));
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["CardFooter"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    className: "woocommerce-stats-overview__more-btn",
    href: Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_8__["getNewPath"])({}, '/analytics/overview'),
    type: "wc-admin",
    onClick: function onClick() {
      Object(lib_tracks__WEBPACK_IMPORTED_MODULE_12__["recordEvent"])('statsoverview_indicators_click', {
        key: 'view_detailed_stats'
      });
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('View detailed stats'))));
};
/* harmony default export */ __webpack_exports__["default"] = (StatsOverview);

/***/ }),

/***/ "./client/homescreen/stats-overview/install-jetpack-cta.js":
/*!*****************************************************************!*\
  !*** ./client/homescreen/stats-overview/install-jetpack-cta.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "./node_modules/@wordpress/compose/build-module/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @woocommerce/components */ "@woocommerce/components");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @woocommerce/wc-admin-settings */ "./client/settings/index.js");
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @woocommerce/data */ "@woocommerce/data");
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lib_tracks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lib/tracks */ "./client/lib/tracks.js");
/* harmony import */ var lib_notices__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lib/notices */ "./client/lib/notices/index.js");





/**
 * External dependencies
 */






/**
 * WooCommerce dependencies
 */




/**
 * Internal dependencies
 */




function InstallJetpackCta(_ref) {
  var getJetpackConnectUrl = _ref.getJetpackConnectUrl,
      getPluginsError = _ref.getPluginsError,
      isJetpackInstalled = _ref.isJetpackInstalled,
      isJetpackActivated = _ref.isJetpackActivated,
      isJetpackConnected = _ref.isJetpackConnected,
      installAndActivatePlugins = _ref.installAndActivatePlugins,
      isConnecting = _ref.isConnecting,
      isInstalling = _ref.isInstalling;

  var _useUserPreferences = Object(_woocommerce_data__WEBPACK_IMPORTED_MODULE_12__["useUserPreferences"])(),
      updateUserPreferences = _useUserPreferences.updateUserPreferences,
      userPrefs = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_useUserPreferences, ["updateUserPreferences"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])((userPrefs.homepage_stats || {}).installJetpackDismissed),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      isDismissed = _useState2[0],
      setIsDismissed = _useState2[1];

  function install() {
    return _install.apply(this, arguments);
  }

  function _install() {
    _install = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Object(lib_tracks__WEBPACK_IMPORTED_MODULE_13__["recordEvent"])('statsoverview_install_jetpack');
              installAndActivatePlugins(['jetpack']).then(connect).catch(function (error) {
                Object(lib_notices__WEBPACK_IMPORTED_MODULE_14__["createNoticesFromResponse"])(error);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _install.apply(this, arguments);
  }

  function connect() {
    if (isJetpackConnected) {
      return;
    }

    getJetpackConnectUrl({
      redirect_url: Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_11__["getAdminLink"])('admin.php?page=wc-admin')
    }).then(function (url) {
      var error = getPluginsError('getJetpackConnectUrl');

      if (error) {
        Object(lib_notices__WEBPACK_IMPORTED_MODULE_14__["createNoticesFromResponse"])(error);
        return;
      }

      window.location = url;
    });
  }

  function dismiss() {
    if (isInstalling || isConnecting) {
      return;
    }

    var homepageStats = userPrefs.homepage_stats || {};
    homepageStats.installJetpackDismissed = true;
    updateUserPreferences({
      homepage_stats: homepageStats
    });
    setIsDismissed(true);
    Object(lib_tracks__WEBPACK_IMPORTED_MODULE_13__["recordEvent"])('statsoverview_dismiss_install_jetpack');
  }

  var doNotShow = isDismissed || isJetpackInstalled && isJetpackActivated && isJetpackConnected;

  if (doNotShow) {
    return null;
  }

  function getInstallJetpackText() {
    if (!isJetpackInstalled) {
      return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Get Jetpack', 'woocommerce-admin');
    }

    if (!isJetpackActivated) {
      return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Activate Jetpack', 'woocommerce-admin');
    }

    if (!isJetpackConnected) {
      return Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Connect Jetpack', 'woocommerce-admin');
    }

    return '';
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("article", {
    className: "woocommerce-stats-overview__install-jetpack-promo"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "woocommerce-stats-overview__install-jetpack-promo__content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_10__["H"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Get traffic stats with Jetpack', 'woocommerce-admin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Keep an eye on your views and visitors metrics with ' + 'Jetpack. Requires Jetpack plugin and a WordPress.com ' + 'account.', 'woocommerce-admin'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("footer", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    isSecondary: true,
    onClick: install,
    isBusy: isInstalling
  }, getInstallJetpackText()), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    isTertiary: true,
    onClick: dismiss,
    isBusy: isInstalling
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('No thanks', 'woocommerce-admin'))));
}

InstallJetpackCta.propTypes = {
  /**
   * Is the Jetpack plugin connected.
   */
  isJetpackConnected: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["withSelect"])(function (select) {
  var _select = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_12__["PLUGINS_STORE_NAME"]),
      isJetpackConnected = _select.isJetpackConnected,
      isPluginsRequesting = _select.isPluginsRequesting,
      getActivePlugins = _select.getActivePlugins,
      getInstalledPlugins = _select.getInstalledPlugins,
      getPluginsError = _select.getPluginsError;

  return {
    getJetpackConnectUrl: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["__experimentalResolveSelect"])(_woocommerce_data__WEBPACK_IMPORTED_MODULE_12__["PLUGINS_STORE_NAME"]).getJetpackConnectUrl,
    getPluginsError: getPluginsError,
    isConnecting: isPluginsRequesting('getJetpackConnectUrl'),
    isInstalling: isPluginsRequesting('installPlugins') || isPluginsRequesting('activatePlugins'),
    isJetpackInstalled: getInstalledPlugins().includes('jetpack'),
    isJetpackActivated: getActivePlugins().includes('jetpack'),
    isJetpackConnected: isJetpackConnected()
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(_woocommerce_data__WEBPACK_IMPORTED_MODULE_12__["PLUGINS_STORE_NAME"]),
      installAndActivatePlugins = _dispatch.installAndActivatePlugins;

  return {
    installAndActivatePlugins: installAndActivatePlugins
  };
}))(InstallJetpackCta));

/***/ }),

/***/ "./client/homescreen/stats-overview/stats-list.js":
/*!********************************************************!*\
  !*** ./client/homescreen/stats-overview/stats-list.js ***!
  \********************************************************/
/*! exports provided: StatsList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsList", function() { return StatsList; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @woocommerce/components */ "@woocommerce/components");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @woocommerce/navigation */ "@woocommerce/navigation");
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var wc_api_with_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wc-api/with-select */ "./client/wc-api/with-select.js");
/* harmony import */ var lib_tracks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/tracks */ "./client/lib/tracks.js");
/* harmony import */ var lib_currency_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/currency-context */ "./client/lib/currency-context.js");
/* harmony import */ var dashboard_store_performance_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dashboard/store-performance/utils */ "./client/dashboard/store-performance/utils.js");


/**
 * External dependencies
 */



/**
 * WooCommerce dependencies
 */



/**
 * Internal dependencies
 */





var StatsList = function StatsList(_ref) {
  var stats = _ref.stats,
      primaryData = _ref.primaryData,
      secondaryData = _ref.secondaryData,
      primaryRequesting = _ref.primaryRequesting,
      secondaryRequesting = _ref.secondaryRequesting,
      primaryError = _ref.primaryError,
      secondaryError = _ref.secondaryError,
      query = _ref.query;

  var _useContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useContext"])(lib_currency_context__WEBPACK_IMPORTED_MODULE_7__["CurrencyContext"]),
      formatAmount = _useContext.formatAmount,
      getCurrencyConfig = _useContext.getCurrencyConfig;

  if (primaryError || secondaryError) {
    return null;
  }

  var persistedQuery = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__["getPersistedQuery"])(query);
  var currency = getCurrencyConfig();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('woocommerce-stats-overview__stats', {
      'is-even': stats.length % 2 === 0
    })
  }, stats.map(function (item) {
    if (primaryRequesting || secondaryRequesting) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_3__["SummaryNumberPlaceholder"], {
        className: "is-homescreen",
        key: item.stat
      });
    }

    var _getIndicatorValues = Object(dashboard_store_performance_utils__WEBPACK_IMPORTED_MODULE_8__["getIndicatorValues"])({
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

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_3__["SummaryNumber"], {
      isHomescreen: true,
      key: item.stat,
      href: reportUrl,
      hrefType: reportUrlType,
      label: item.label,
      value: primaryValue,
      prevLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Previous Period:', 'woocommerce-admin'),
      prevValue: secondaryValue,
      delta: delta,
      onLinkClickCallback: function onLinkClickCallback() {
        Object(lib_tracks__WEBPACK_IMPORTED_MODULE_6__["recordEvent"])('statsoverview_indicators_click', {
          key: item.stat
        });
      }
    });
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(wc_api_with_select__WEBPACK_IMPORTED_MODULE_5__["default"])(function (select, _ref2) {
  var stats = _ref2.stats,
      query = _ref2.query;

  if (stats.length === 0) {
    return;
  }

  return Object(dashboard_store_performance_utils__WEBPACK_IMPORTED_MODULE_8__["getIndicatorData"])(select, stats, query);
})(StatsList));

/***/ }),

/***/ "./client/homescreen/stats-overview/style.scss":
/*!*****************************************************!*\
  !*** ./client/homescreen/stats-overview/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/@automattic/mini-css-extract-plugin-with-rtl/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: File to import not found or unreadable: node_modules/@automattic/color-studio/dist/color-variables.scss.\n        on line 1 of client/stylesheets/abstracts/_colors.scss\n        from line 1 of /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/client/homescreen/stats-overview/style.scss\n>> @import 'node_modules/@automattic/color-studio/dist/color-variables.scss';\n\n   ^\n\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/webpack/lib/NormalModule.js:316:20\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.callback (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/sass-loader/dist/index.js:73:7)\n    at Object.done [as callback] (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/neo-async/async.js:8069:18)\n    at options.error (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),

/***/ "./client/homescreen/style.scss":
/*!**************************************!*\
  !*** ./client/homescreen/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/@automattic/mini-css-extract-plugin-with-rtl/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: File to import not found or unreadable: node_modules/@automattic/color-studio/dist/color-variables.scss.\n        on line 1 of client/stylesheets/abstracts/_colors.scss\n        from line 1 of /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/client/homescreen/style.scss\n>> @import 'node_modules/@automattic/color-studio/dist/color-variables.scss';\n\n   ^\n\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/webpack/lib/NormalModule.js:316:20\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.callback (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/sass-loader/dist/index.js:73:7)\n    at Object.done [as callback] (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/neo-async/async.js:8069:18)\n    at options.error (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),

/***/ "./client/lib/notices/index.js":
/*!*************************************!*\
  !*** ./client/lib/notices/index.js ***!
  \*************************************/
/*! exports provided: createNoticesFromResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNoticesFromResponse", function() { return createNoticesFromResponse; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

function createNoticesFromResponse(response) {
  var _dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["dispatch"])('core/notices'),
      createNotice = _dispatch.createNotice;

  if (response.error_data && response.errors && Object.keys(response.errors).length) {
    // Loop over multi-error responses.
    Object.keys(response.errors).forEach(function (errorKey) {
      createNotice('error', response.errors[errorKey].join(' '));
    });
  } else if (response.message) {
    // Handle generic messages.
    createNotice(response.code ? 'error' : 'success', response.message);
  }
}

/***/ }),

/***/ "./client/quick-links/index.js":
/*!*************************************!*\
  !*** ./client/quick-links/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @woocommerce/wc-admin-settings */ "./client/settings/index.js");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @woocommerce/components */ "@woocommerce/components");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lib_tracks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/tracks */ "./client/lib/tracks.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.scss */ "./client/quick-links/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_9__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */




/**
 * WooCommerce dependencies
 */



/**
 * Internal dependencies
 */




function getItems(props) {
  return [{
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Market my store', 'woocommerce-admin'),
    type: 'wc-admin',
    path: 'marketing',
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["megaphone"],
    listItemTag: 'marketing'
  }, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Add products', 'woocommerce-admin'),
    type: 'wp-admin',
    path: 'post-new.php?post_type=product',
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["box"],
    listItemTag: 'add-products'
  }, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Personalize my store', 'woocommerce-admin'),
    type: 'wp-admin',
    path: 'customize.php',
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["brush"],
    listItemTag: 'personalize-store'
  }, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Shipping settings', 'woocommerce-admin'),
    type: 'wc-settings',
    tab: 'shipping',
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["shipping"],
    listItemTag: 'shipping-settings'
  }, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Tax settings', 'woocommerce-admin'),
    type: 'wc-settings',
    tab: 'tax',
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["percent"],
    listItemTag: 'tax-settings'
  }, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Payment settings', 'woocommerce-admin'),
    type: 'wc-settings',
    tab: 'checkout',
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["payment"],
    listItemTag: 'payment-settings'
  }, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Edit store details', 'woocommerce-admin'),
    type: 'wc-settings',
    tab: 'general',
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["pencil"],
    listItemTag: 'edit-store-details'
  }, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Get support', 'woocommerce-admin'),
    type: 'external',
    href: 'https://woocommerce.com/my-account/create-a-ticket/',
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["lifesaver"],
    after: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["external"]
    }),
    listItemTag: 'support'
  }, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('View my store', 'woocommerce-admin'),
    type: 'external',
    href: props.getSetting('siteUrl'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["home"],
    after: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["external"]
    }),
    listItemTag: 'view-store'
  }];
}

function handleOnItemClick(props, event) {
  var a = event.currentTarget;
  var listItemTag = a.dataset.listItemTag;

  if (!listItemTag) {
    return;
  }

  props.recordEvent('home_quick_links_click', {
    task_name: listItemTag
  });

  if (typeof props.onItemClick !== 'function') {
    return;
  }

  if (!props.onItemClick(listItemTag)) {
    event.preventDefault();
    return false;
  }
}

function getLinkTypeAndHref(item) {
  var linkType;
  var href;

  switch (item.type) {
    case 'wc-admin':
      linkType = 'wc-admin';
      href = "admin.php?page=wc-admin&path=%2F".concat(item.path);
      break;

    case 'wp-admin':
      linkType = 'wp-admin';
      href = item.path;
      break;

    case 'wc-settings':
      linkType = 'wp-admin';
      href = "admin.php?page=wc-settings&tab=".concat(item.tab);
      break;

    default:
      linkType = 'external';
      href = item.href;
      break;
  }

  return {
    linkType: linkType,
    href: href
  };
}

function getListItems(props) {
  return getItems(props).map(function (item) {
    return _objectSpread(_objectSpread({
      title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalText"], {
        as: "div",
        variant: "button"
      }, item.title),
      before: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        icon: item.icon
      }),
      after: item.after
    }, getLinkTypeAndHref(item)), {}, {
      listItemTag: item.listItemTag,
      onClick: Object(lodash__WEBPACK_IMPORTED_MODULE_5__["partial"])(handleOnItemClick, props)
    });
  });
}

var QuickLinks = function QuickLinks(props) {
  var listItems = getListItems(props);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    size: "large",
    className: "woocommerce-quick-links"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], {
    size: "medium"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalText"], {
    variant: "title.small"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Store management', 'woocommerce-admin'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__["List"], {
    items: listItems,
    className: "woocommerce-quick-links__list"
  })));
};

QuickLinks.defaultProps = {
  getSetting: _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_6__["getSetting"],
  recordEvent: lib_tracks__WEBPACK_IMPORTED_MODULE_8__["recordEvent"]
};
/* harmony default export */ __webpack_exports__["default"] = (QuickLinks);

/***/ }),

/***/ "./client/quick-links/style.scss":
/*!***************************************!*\
  !*** ./client/quick-links/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/@automattic/mini-css-extract-plugin-with-rtl/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: File to import not found or unreadable: node_modules/@automattic/color-studio/dist/color-variables.scss.\n        on line 1 of client/stylesheets/abstracts/_colors.scss\n        from line 1 of /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/client/quick-links/style.scss\n>> @import 'node_modules/@automattic/color-studio/dist/color-variables.scss';\n\n   ^\n\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/webpack/lib/NormalModule.js:316:20\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.callback (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/sass-loader/dist/index.js:73:7)\n    at Object.done [as callback] (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/neo-async/async.js:8069:18)\n    at options.error (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),

/***/ "./client/task-list/placeholder.js":
/*!*****************************************!*\
  !*** ./client/task-list/placeholder.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./client/task-list/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Internal dependencies
 */


var TaskListPlaceholder = function TaskListPlaceholder(props) {
  var _props$numTasks = props.numTasks,
      numTasks = _props$numTasks === void 0 ? 5 : _props$numTasks;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woocommerce-task-dashboard__container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woocommerce-card woocommerce-task-card is-loading",
    "aria-hidden": true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woocommerce-card__header"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woocommerce-card__title-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woocommerce-card__title woocommerce-card__header-item"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "is-placeholder"
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woocommerce-card__body"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woocommerce-list"
  }, Array.from(new Array(numTasks)).map(function (v, i) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      key: i,
      className: "woocommerce-list__item has-action"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "woocommerce-list__item-inner"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "woocommerce-list__item-before"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "is-placeholder"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "woocommerce-list__item-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "woocommerce-list__item-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "is-placeholder"
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "woocommerce-list__item-after"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "is-placeholder"
    }))));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskListPlaceholder);

/***/ }),

/***/ "./client/task-list/style.scss":
/*!*************************************!*\
  !*** ./client/task-list/style.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/@automattic/mini-css-extract-plugin-with-rtl/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: File to import not found or unreadable: node_modules/@automattic/color-studio/dist/color-variables.scss.\n        on line 1 of client/stylesheets/abstracts/_colors.scss\n        from line 1 of /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/client/task-list/style.scss\n>> @import 'node_modules/@automattic/color-studio/dist/color-variables.scss';\n\n   ^\n\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/webpack/lib/NormalModule.js:316:20\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.callback (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/sass-loader/dist/index.js:73:7)\n    at Object.done [as callback] (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/neo-async/async.js:8069:18)\n    at options.error (/Users/bec/source/woocommerce/vagrant/www/wordpress-two/public_html/wp-content/plugins/woocommerce-admin/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ })

}]);
//# sourceMappingURL=homescreen.df294e1908165abfa85c.min.js.map