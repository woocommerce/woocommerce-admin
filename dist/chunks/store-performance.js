(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[48],{

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getIndicatorValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIndicatorData; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(139);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(101);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_date__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(50);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(281);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_number__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(85);


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
    return Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_15__[/* getAdminLink */ "f"])('admin.php?page=jetpack#/dashboard');
  }

  return Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_13__["getNewPath"])(persistedQuery, href, {
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
  var primaryItem = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["find"])(primaryData.data, function (data) {
    return data.stat === indicator.stat;
  });
  var secondaryItem = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["find"])(secondaryData.data, function (data) {
    return data.stat === indicator.stat;
  });

  if (!primaryItem || !secondaryItem) {
    return {};
  }

  var href = primaryItem._links && primaryItem._links.report[0] && primaryItem._links.report[0].href || '';
  var reportUrl = getReportUrl(href, persistedQuery, primaryItem);
  var reportUrlType = href === '/jetpack' ? 'wp-admin' : 'wc-admin';
  var isCurrency = primaryItem.format === 'currency';
  var delta = Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_14__["calculateDelta"])(primaryItem.value, secondaryItem.value);
  var primaryValue = isCurrency ? formatAmount(primaryItem.value) : Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_14__["formatValue"])(currency, primaryItem.format, primaryItem.value);
  var secondaryValue = isCurrency ? formatAmount(secondaryItem.value) : Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_14__["formatValue"])(currency, secondaryItem.format, secondaryItem.value);
  return {
    primaryValue: primaryValue,
    secondaryValue: secondaryValue,
    delta: delta,
    reportUrl: reportUrl,
    reportUrlType: reportUrlType
  };
};
var getIndicatorData = function getIndicatorData(select, indicators, query, filters) {
  var _select = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_12__["REPORTS_STORE_NAME"]),
      getReportItems = _select.getReportItems,
      getReportItemsError = _select.getReportItemsError,
      isResolving = _select.isResolving;

  var _select$getSetting = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_12__["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings'),
      defaultDateRange = _select$getSetting.woocommerce_default_date_range;

  var datesFromQuery = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_11__["getCurrentDates"])(query, defaultDateRange);
  var endPrimary = datesFromQuery.primary.before;
  var endSecondary = datesFromQuery.secondary.before;
  var statKeys = indicators.map(function (indicator) {
    return indicator.stat;
  }).join(',');
  var filterQuery = Object(_woocommerce_data__WEBPACK_IMPORTED_MODULE_12__["getFilterQuery"])({
    filters: filters,
    query: query
  });

  var primaryQuery = _objectSpread(_objectSpread({}, filterQuery), {}, {
    after: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_11__["appendTimestamp"])(datesFromQuery.primary.after, 'start'),
    before: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_11__["appendTimestamp"])(endPrimary, endPrimary.isSame(moment__WEBPACK_IMPORTED_MODULE_9___default()(), 'day') ? 'now' : 'end'),
    stats: statKeys
  });

  var secondaryQuery = _objectSpread(_objectSpread({}, filterQuery), {}, {
    after: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_11__["appendTimestamp"])(datesFromQuery.secondary.after, 'start'),
    before: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_11__["appendTimestamp"])(endSecondary, endSecondary.isSame(moment__WEBPACK_IMPORTED_MODULE_9___default()(), 'day') ? 'now' : 'end'),
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

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(107);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(140);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(65);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(50);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(85);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(26);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(59);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(145);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(101);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_date__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(92);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(688);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _lib_currency_context__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(598);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(618);














function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */










/**
 * Internal dependencies
 */





var _getSetting = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_20__[/* getSetting */ "g"])('dataEndpoints', {
  performanceIndicators: []
}),
    indicators = _getSetting.performanceIndicators;

var StorePerformance = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(StorePerformance, _Component);

  var _super = _createSuper(StorePerformance);

  function StorePerformance() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, StorePerformance);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(StorePerformance, [{
    key: "renderMenu",
    value: function renderMenu() {
      var _this$props = this.props,
          hiddenBlocks = _this$props.hiddenBlocks,
          isFirst = _this$props.isFirst,
          isLast = _this$props.isLast,
          onMove = _this$props.onMove,
          onRemove = _this$props.onRemove,
          onTitleBlur = _this$props.onTitleBlur,
          onTitleChange = _this$props.onTitleChange,
          onToggleHiddenBlock = _this$props.onToggleHiddenBlock,
          titleInput = _this$props.titleInput,
          Controls = _this$props.controls;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_12__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_23__["EllipsisMenu"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_17__["__"])('Choose which analytics to display and the section name', 'woocommerce-admin'),
        renderContent: function renderContent(_ref) {
          var onToggle = _ref.onToggle;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_12__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_12__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_12__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_23__["MenuTitle"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_17__["__"])('Display Stats:', 'woocommerce-admin')), indicators.map(function (indicator, i) {
            var checked = !hiddenBlocks.includes(indicator.stat);
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_12__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_23__["MenuItem"], {
              checked: checked,
              isCheckbox: true,
              isClickable: true,
              key: i,
              onInvoke: function onInvoke() {
                onToggleHiddenBlock(indicator.stat)();
                Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_25__["recordEvent"])('dash_indicators_toggle', {
                  status: checked ? 'off' : 'on',
                  key: indicator.stat
                });
              }
            }, indicator.label);
          }), window.wcAdminFeatures['analytics-dashboard/customizable'] && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_12__["createElement"])(Controls, {
            onToggle: onToggle,
            onMove: onMove,
            onRemove: onRemove,
            isFirst: isFirst,
            isLast: isLast,
            onTitleBlur: onTitleBlur,
            onTitleChange: onTitleChange,
            titleInput: titleInput
          }));
        }
      });
    }
  }, {
    key: "renderList",
    value: function renderList() {
      var _this$props2 = this.props,
          query = _this$props2.query,
          primaryRequesting = _this$props2.primaryRequesting,
          secondaryRequesting = _this$props2.secondaryRequesting,
          primaryError = _this$props2.primaryError,
          secondaryError = _this$props2.secondaryError,
          primaryData = _this$props2.primaryData,
          secondaryData = _this$props2.secondaryData,
          userIndicators = _this$props2.userIndicators,
          defaultDateRange = _this$props2.defaultDateRange;

      if (primaryRequesting || secondaryRequesting) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_12__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_23__["SummaryListPlaceholder"], {
          numberOfItems: userIndicators.length
        });
      }

      if (primaryError || secondaryError) {
        return null;
      }

      var persistedQuery = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_19__["getPersistedQuery"])(query);

      var _getDateParamsFromQue = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_24__["getDateParamsFromQuery"])(query, defaultDateRange),
          compare = _getDateParamsFromQue.compare;

      var prevLabel = compare === 'previous_period' ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_17__["__"])('Previous Period:', 'woocommerce-admin') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_17__["__"])('Previous Year:', 'woocommerce-admin');
      var _this$context = this.context,
          formatAmount = _this$context.formatAmount,
          getCurrencyConfig = _this$context.getCurrencyConfig;
      var currency = getCurrencyConfig();
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_12__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_23__["SummaryList"], null, function () {
        return userIndicators.map(function (indicator, i) {
          var _getIndicatorValues = Object(_utils__WEBPACK_IMPORTED_MODULE_28__[/* getIndicatorValues */ "b"])({
            indicator: indicator,
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

          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_12__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_23__["SummaryNumber"], {
            key: i,
            href: reportUrl,
            hrefType: reportUrlType,
            label: indicator.label,
            value: primaryValue,
            prevLabel: prevLabel,
            prevValue: secondaryValue,
            delta: delta,
            onLinkClickCallback: function onLinkClickCallback() {
              Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_25__["recordEvent"])('dash_indicators_click', {
                key: indicator.stat
              });
            }
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          userIndicators = _this$props3.userIndicators,
          title = _this$props3.title;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_12__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_12__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_12__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_23__["SectionHeader"], {
        title: title || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_17__["__"])('Store Performance', 'woocommerce-admin'),
        menu: this.renderMenu()
      }), userIndicators.length > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_12__["createElement"])("div", {
        className: "woocommerce-dashboard__store-performance"
      }, this.renderList()));
    }
  }]);

  return StorePerformance;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_12__["Component"]);

StorePerformance.contextType = _lib_currency_context__WEBPACK_IMPORTED_MODULE_27__[/* CurrencyContext */ "a"];
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_18__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_21__["withSelect"])(function (select, props) {
  var hiddenBlocks = props.hiddenBlocks,
      query = props.query,
      filters = props.filters;
  var userIndicators = indicators.filter(function (indicator) {
    return !hiddenBlocks.includes(indicator.stat);
  });

  var _select$getSetting = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_22__["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings'),
      defaultDateRange = _select$getSetting.woocommerce_default_date_range;

  var data = {
    hiddenBlocks: hiddenBlocks,
    userIndicators: userIndicators,
    indicators: indicators,
    defaultDateRange: defaultDateRange
  };

  if (userIndicators.length === 0) {
    return data;
  }

  var indicatorData = Object(_utils__WEBPACK_IMPORTED_MODULE_28__[/* getIndicatorData */ "a"])(select, userIndicators, query, filters);
  return _objectSpread(_objectSpread({}, data), indicatorData);
}))(StorePerformance));

/***/ })

}]);