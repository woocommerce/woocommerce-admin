(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[0],{

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFilteredCurrencyInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyContext; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(141);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(247);
/* harmony import */ var _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_currency__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85);
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

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(145);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */





/**
 * Component to render when there is an error in a report component due to data
 * not being loaded or being invalid.
 */

var ReportError = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ReportError, _Component);

  var _super = _createSuper(ReportError);

  function ReportError() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ReportError);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ReportError, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          isError = _this$props.isError,
          isEmpty = _this$props.isEmpty;
      var title, actionLabel, actionURL, actionCallback;

      if (isError) {
        title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('There was an error getting your stats. Please try again.', 'woocommerce-admin');
        actionLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Reload', 'woocommerce-admin');

        actionCallback = function actionCallback() {
          // @todo Add tracking for how often an error is displayed, and the reload action is clicked.
          window.location.reload();
        };
      } else if (isEmpty) {
        title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('No results could be found for this date range.', 'woocommerce-admin');
        actionLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('View Orders', 'woocommerce-admin');
        actionURL = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_10__[/* getAdminLink */ "f"])('edit.php?post_type=shop_order');
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_9__["EmptyContent"], {
        className: className,
        title: title,
        actionLabel: actionLabel,
        actionURL: actionURL,
        actionCallback: actionCallback
      });
    }
  }]);

  return ReportError;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

ReportError.propTypes = {
  /**
   * Additional class name to style the component.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,

  /**
   * Boolean representing whether there was an error.
   */
  isError: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,

  /**
   * Boolean representing whether the issue is that there is no data.
   */
  isEmpty: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
};
ReportError.defaultProps = {
  className: ''
};
/* harmony default export */ __webpack_exports__["a"] = (ReportError);

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(107);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(203);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(88);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(65);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(26);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(145);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(85);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(59);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(101);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_date__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(92);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _lib_currency_context__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(598);
/* harmony import */ var _customer_effort_score_tracks_data_constants__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(210);



















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */










/**
 * Internal dependencies
 */




var ReportFilters = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(ReportFilters, _Component);

  var _super = _createSuper(ReportFilters);

  function ReportFilters() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default()(this, ReportFilters);

    _this = _super.call(this);
    _this.onDateSelect = _this.onDateSelect.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this));
    _this.onFilterSelect = _this.onFilterSelect.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this));
    _this.onAdvancedFilterAction = _this.onAdvancedFilterAction.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(ReportFilters, [{
    key: "onDateSelect",
    value: function onDateSelect(data) {
      var _this$props = this.props,
          report = _this$props.report,
          addCesSurveyForAnalytics = _this$props.addCesSurveyForAnalytics;
      addCesSurveyForAnalytics();
      Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_26__["recordEvent"])('datepicker_update', _objectSpread({
        report: report
      }, Object(lodash__WEBPACK_IMPORTED_MODULE_20__["omitBy"])(data, lodash__WEBPACK_IMPORTED_MODULE_20__["isUndefined"])));
    }
  }, {
    key: "onFilterSelect",
    value: function onFilterSelect(data) {
      var _this$props2 = this.props,
          report = _this$props2.report,
          addCesSurveyForAnalytics = _this$props2.addCesSurveyForAnalytics; // This event gets triggered in the following cases.
      // 1. Select "Single Product" and choose a product.
      // 2. Select "Comparison" or any other filter types.
      // The comparsion and other filter types require a user to click
      // a button to execute a query, so this is not a good place to
      // trigger a CES survey for those.

      var triggerCesFor = ['single_product', 'single_category', 'single_coupon', 'single_variation'];
      var filterName = data.filter || data['filter-variations'];

      if (triggerCesFor.includes(filterName)) {
        addCesSurveyForAnalytics();
      }

      Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_26__["recordEvent"])('analytics_filter', {
        report: report,
        filter: data.filter || 'all'
      });
    }
  }, {
    key: "onAdvancedFilterAction",
    value: function onAdvancedFilterAction(action, data) {
      var _this$props3 = this.props,
          report = _this$props3.report,
          addCesSurveyForAnalytics = _this$props3.addCesSurveyForAnalytics;

      switch (action) {
        case 'add':
          Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_26__["recordEvent"])('analytics_filters_add', {
            report: report,
            filter: data.key
          });
          break;

        case 'remove':
          Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_26__["recordEvent"])('analytics_filters_remove', {
            report: report,
            filter: data.key
          });
          break;

        case 'filter':
          var snakeCaseData = Object.keys(data).reduce(function (result, property) {
            result[Object(lodash__WEBPACK_IMPORTED_MODULE_20__["snakeCase"])(property)] = data[property];
            return result;
          }, {});
          addCesSurveyForAnalytics();
          Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_26__["recordEvent"])('analytics_filters_filter', _objectSpread({
            report: report
          }, snakeCaseData));
          break;

        case 'clear_all':
          Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_26__["recordEvent"])('analytics_filters_clear_all', {
            report: report
          });
          break;

        case 'match':
          Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_26__["recordEvent"])('analytics_filters_all_any', {
            report: report,
            value: data.match
          });
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          advancedFilters = _this$props4.advancedFilters,
          filters = _this$props4.filters,
          path = _this$props4.path,
          query = _this$props4.query,
          showDatePicker = _this$props4.showDatePicker,
          defaultDateRange = _this$props4.defaultDateRange;

      var _getDateParamsFromQue = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_25__["getDateParamsFromQuery"])(query, defaultDateRange),
          period = _getDateParamsFromQue.period,
          compare = _getDateParamsFromQue.compare,
          before = _getDateParamsFromQue.before,
          after = _getDateParamsFromQue.after;

      var _getCurrentDates = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_25__["getCurrentDates"])(query, defaultDateRange),
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
      var Currency = this.context;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_12__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_22__["ReportFilters"], {
        query: query,
        siteLocale: _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_23__[/* LOCALE */ "c"].siteLocale,
        currency: Currency.getCurrencyConfig(),
        path: path,
        filters: filters,
        advancedFilters: advancedFilters,
        showDatePicker: showDatePicker,
        onDateSelect: this.onDateSelect,
        onFilterSelect: this.onFilterSelect,
        onAdvancedFilterAction: this.onAdvancedFilterAction,
        dateQuery: dateQuery,
        isoDateFormat: _woocommerce_date__WEBPACK_IMPORTED_MODULE_25__["isoDateFormat"]
      });
    }
  }]);

  return ReportFilters;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_12__["Component"]);

ReportFilters.contextType = _lib_currency_context__WEBPACK_IMPORTED_MODULE_27__[/* CurrencyContext */ "a"];
/* harmony default export */ __webpack_exports__["a"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_18__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_21__["withSelect"])(function (select) {
  var _select$getSetting = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_24__["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings'),
      defaultDateRange = _select$getSetting.woocommerce_default_date_range;

  return {
    defaultDateRange: defaultDateRange
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_21__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(_customer_effort_score_tracks_data_constants__WEBPACK_IMPORTED_MODULE_28__[/* STORE_KEY */ "c"]),
      addCesSurveyForAnalytics = _dispatch.addCesSurveyForAnalytics;

  return {
    addCesSurveyForAnalytics: addCesSurveyForAnalytics
  };
}))(ReportFilters));
ReportFilters.propTypes = {
  /**
   * Config option passed through to `AdvancedFilters`
   */
  advancedFilters: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.object,

  /**
   * Config option passed through to `FilterPicker` - if not used, `FilterPicker` is not displayed.
   */
  filters: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.array,

  /**
   * The `path` parameter supplied by React-Router
   */
  path: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.string.isRequired,

  /**
   * The query string represented in object form
   */
  query: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.object,

  /**
   * Whether the date picker must be shown..
   */
  showDatePicker: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.bool,

  /**
   * The report where filter are placed.
   */
  report: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.string.isRequired
};

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(80);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(44);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(43);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(116);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(192);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(140);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(250);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(170);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(88);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(139);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(135);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(66);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(187);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(41);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(4);

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(141);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(65);

// EXTERNAL MODULE: external ["wp","dom"]
var external_wp_dom_ = __webpack_require__(262);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(26);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(5);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(145);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(50);

// EXTERNAL MODULE: external ["wc","csvExport"]
var external_wc_csvExport_ = __webpack_require__(579);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(59);

// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(92);

// CONCATENATED MODULE: ./client/analytics/components/report-table/download-icon.js

/* harmony default export */ var download_icon = (function () {
  return Object(external_wp_element_["createElement"])("svg", {
    role: "img",
    "aria-hidden": "true",
    focusable: "false",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, Object(external_wp_element_["createElement"])("path", {
    d: "M18,9c-0.009,0-0.017,0.002-0.025,0.003C17.72,5.646,14.922,3,11.5,3C7.91,3,5,5.91,5,9.5c0,0.524,0.069,1.031,0.186,1.519 C5.123,11.016,5.064,11,5,11c-2.209,0-4,1.791-4,4c0,1.202,0.541,2.267,1.38,3h18.593C22.196,17.089,23,15.643,23,14 C23,11.239,20.761,9,18,9z M12,16l-4-5h3V8h2v3h3L12,16z"
  }));
});
// EXTERNAL MODULE: ./client/analytics/components/report-error/index.js
var report_error = __webpack_require__(599);

// CONCATENATED MODULE: ./client/analytics/components/report-table/utils.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










/**
 * External dependencies
 */

function extendTableData(select, props, queriedTableData) {
  var extendItemsMethodNames = props.extendItemsMethodNames,
      extendedItemsStoreName = props.extendedItemsStoreName,
      itemIdField = props.itemIdField;
  var itemsData = queriedTableData.items.data;

  if (!Array.isArray(itemsData) || !itemsData.length || !extendItemsMethodNames || !itemIdField) {
    return queriedTableData;
  }

  var _select = select(extendedItemsStoreName),
      getErrorMethod = _select[extendItemsMethodNames.getError],
      isRequestingMethod = _select[extendItemsMethodNames.isRequesting],
      loadMethod = _select[extendItemsMethodNames.load];

  var extendQuery = {
    include: itemsData.map(function (item) {
      return item[itemIdField];
    }).join(','),
    per_page: itemsData.length
  };
  var extendedItems = loadMethod(extendQuery);
  var isExtendedItemsRequesting = isRequestingMethod ? isRequestingMethod(extendQuery) : false;
  var isExtendedItemsError = getErrorMethod ? getErrorMethod(extendQuery) : false;
  var extendedItemsData = itemsData.map(function (item) {
    var extendedItemData = Object(external_lodash_["first"])(extendedItems.filter(function (extendedItem) {
      return item.id === extendedItem.id;
    }));
    return _objectSpread(_objectSpread({}, item), extendedItemData);
  });
  var isRequesting = queriedTableData.isRequesting || isExtendedItemsRequesting;
  var isError = queriedTableData.isError || isExtendedItemsError;
  return _objectSpread(_objectSpread({}, queriedTableData), {}, {
    isRequesting: isRequesting,
    isError: isError,
    items: _objectSpread(_objectSpread({}, queriedTableData.items), {}, {
      data: extendedItemsData
    })
  });
}
// EXTERNAL MODULE: ./client/customer-effort-score-tracks/data/constants.js
var constants = __webpack_require__(210);

// EXTERNAL MODULE: ./client/analytics/components/report-table/style.scss
var style = __webpack_require__(676);

// CONCATENATED MODULE: ./client/analytics/components/report-table/index.js












function report_table_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function report_table_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { report_table_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { report_table_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














/**
 * External dependencies
 */














/**
 * Internal dependencies
 */






var TABLE_FILTER = 'woocommerce_admin_report_table';

var report_table_ReportTable = function ReportTable(props) {
  var getHeadersContent = props.getHeadersContent,
      getRowsContent = props.getRowsContent,
      getSummary = props.getSummary,
      isRequesting = props.isRequesting,
      primaryData = props.primaryData,
      tableData = props.tableData,
      endpoint = props.endpoint,
      itemIdField = props.itemIdField,
      tableQuery = props.tableQuery,
      compareBy = props.compareBy,
      compareParam = props.compareParam,
      searchBy = props.searchBy,
      _props$labels = props.labels,
      labels = _props$labels === void 0 ? {} : _props$labels,
      tableProps = objectWithoutProperties_default()(props, ["getHeadersContent", "getRowsContent", "getSummary", "isRequesting", "primaryData", "tableData", "endpoint", "itemIdField", "tableQuery", "compareBy", "compareParam", "searchBy", "labels"]); // Pull these props out separately because they need to be included in tableProps.


  var query = props.query,
      columnPrefsKey = props.columnPrefsKey;
  var items = tableData.items,
      reportQuery = tableData.query;
  var initialSelectedRows = query[compareParam] ? Object(external_wc_navigation_["getIdsFromQuery"])(query[compareBy]) : [];

  var _useState = Object(external_wp_element_["useState"])(initialSelectedRows),
      _useState2 = slicedToArray_default()(_useState, 2),
      selectedRows = _useState2[0],
      setSelectedRows = _useState2[1];

  var scrollPointRef = Object(external_wp_element_["useRef"])(null);

  var _useUserPreferences = Object(external_wc_data_["useUserPreferences"])(),
      updateUserPreferences = _useUserPreferences.updateUserPreferences,
      userData = objectWithoutProperties_default()(_useUserPreferences, ["updateUserPreferences"]); // Bail early if we've encountered an error.


  var isError = tableData.isError || primaryData.isError;

  if (isError) {
    return Object(external_wp_element_["createElement"])(report_error["a" /* default */], {
      isError: true
    });
  }

  var userPrefColumns = [];

  if (columnPrefsKey) {
    userPrefColumns = userData && userData[columnPrefsKey] ? userData[columnPrefsKey] : userPrefColumns;
  }

  var onPageChange = function onPageChange(newPage, source) {
    scrollPointRef.current.scrollIntoView();
    var tableElement = scrollPointRef.current.nextSibling.querySelector('.woocommerce-table__table');
    var focusableElements = external_wp_dom_["focus"].focusable.find(tableElement);

    if (focusableElements.length) {
      focusableElements[0].focus();
    }

    if (source) {
      if (source === 'goto') {
        Object(external_wc_tracks_["recordEvent"])('analytics_table_go_to_page', {
          report: endpoint,
          page: newPage
        });
      } else {
        Object(external_wc_tracks_["recordEvent"])('analytics_table_page_click', {
          report: endpoint,
          direction: source
        });
      }
    }
  };

  var trackTableSearch = function trackTableSearch() {
    // @todo: decide if this should only fire for new tokens (not any/all changes).
    Object(external_wc_tracks_["recordEvent"])('analytics_table_filter', {
      report: endpoint
    });
  };

  var onSort = function onSort(key, direction) {
    Object(external_wc_navigation_["onQueryChange"])('sort')(key, direction);
    var eventProps = {
      report: endpoint,
      column: key,
      direction: direction
    };
    Object(external_wc_tracks_["recordEvent"])('analytics_table_sort', eventProps);
  };

  var filterShownHeaders = function filterShownHeaders(headers, hiddenKeys) {
    // If no user preferences, set visibilty based on column default.
    if (!hiddenKeys) {
      return headers.map(function (header) {
        return report_table_objectSpread(report_table_objectSpread({}, header), {}, {
          visible: header.required || !header.hiddenByDefault
        });
      });
    } // Set visibilty based on user preferences.


    return headers.map(function (header) {
      return report_table_objectSpread(report_table_objectSpread({}, header), {}, {
        visible: header.required || !hiddenKeys.includes(header.key)
      });
    });
  };

  var applyTableFilters = function applyTableFilters(data, totals, totalResults) {
    var summary = getSummary ? getSummary(totals, totalResults) : null;
    /**
     * Filter report table for the CSV download.
     *
     * Enables manipulation of data used to create the report CSV.
     *
     * @param {Object} reportTableData - data used to create the table.
     * @param {string} reportTableData.endpoint - table api endpoint.
     * @param {Array} reportTableData.headers - table headers data.
     * @param {Array} reportTableData.rows - table rows data.
     * @param {Object} reportTableData.totals - total aggregates for request.
     * @param {Array} reportTableData.summary - summary numbers data.
     * @param {Object} reportTableData.items - response from api requerst.
     */

    return Object(external_wp_hooks_["applyFilters"])(TABLE_FILTER, {
      endpoint: endpoint,
      headers: getHeadersContent(),
      rows: getRowsContent(data),
      totals: totals,
      summary: summary,
      items: items
    });
  };

  var onClickDownload = function onClickDownload() {
    var createNotice = props.createNotice,
        startExport = props.startExport,
        title = props.title;
    var params = Object.assign({}, query);
    var data = items.data,
        totalResults = items.totalResults;
    var downloadType = 'browser'; // Delete unnecessary items from filename.

    delete params.extended_info;

    if (params.search) {
      delete params[searchBy];
    }

    if (data && data.length === totalResults) {
      var _applyTableFilters = applyTableFilters(data, totalResults),
          _headers = _applyTableFilters.headers,
          _rows = _applyTableFilters.rows;

      Object(external_wc_csvExport_["downloadCSVFile"])(Object(external_wc_csvExport_["generateCSVFileName"])(title, params), Object(external_wc_csvExport_["generateCSVDataFromTable"])(_headers, _rows));
    } else {
      downloadType = 'email';
      startExport(endpoint, reportQuery).then(function () {
        return createNotice('success', Object(external_wp_i18n_["sprintf"])(
        /* translators: %s = type of report */
        Object(external_wp_i18n_["__"])('Your %s Report will be emailed to you.', 'woocommerce-admin'), title));
      }).catch(function (error) {
        return createNotice('error', error.message || Object(external_wp_i18n_["sprintf"])(
        /* translators: %s = type of report */
        Object(external_wp_i18n_["__"])('There was a problem exporting your %s Report. Please try again.', 'woocommerce-admin'), title));
      });
    }

    Object(external_wc_tracks_["recordEvent"])('analytics_table_download', {
      report: endpoint,
      rows: totalResults,
      downloadType: downloadType
    });
  };

  var onCompare = function onCompare() {
    if (compareBy) {
      Object(external_wc_navigation_["onQueryChange"])('compare')(compareBy, compareParam, selectedRows.join(','));
    }
  };

  var onSearchChange = function onSearchChange(values) {
    var baseSearchQuery = props.baseSearchQuery,
        addCesSurveyForCustomerSearch = props.addCesSurveyForCustomerSearch; // A comma is used as a separator between search terms, so we want to escape
    // any comma they contain.

    var searchTerms = values.map(function (v) {
      return v.label.replace(',', '%2C');
    });

    if (searchTerms.length) {
      var _objectSpread2;

      Object(external_wc_navigation_["updateQueryString"])(report_table_objectSpread(report_table_objectSpread((_objectSpread2 = {
        filter: undefined
      }, defineProperty_default()(_objectSpread2, compareParam, undefined), defineProperty_default()(_objectSpread2, searchBy, undefined), _objectSpread2), baseSearchQuery), {}, {
        search: Object(external_lodash_["uniq"])(searchTerms).join(',')
      })); // Prompt survey if user is searching for something.

      addCesSurveyForCustomerSearch();
    } else {
      Object(external_wc_navigation_["updateQueryString"])({
        search: undefined
      });
    }

    trackTableSearch();
  };

  var selectAllRows = function selectAllRows(checked) {
    var ids = props.ids;
    setSelectedRows(checked ? ids : []);
  };

  var selectRow = function selectRow(i, checked) {
    var ids = props.ids;

    if (checked) {
      setSelectedRows(Object(external_lodash_["uniq"])([ids[i]].concat(toConsumableArray_default()(selectedRows))));
    } else {
      var index = selectedRows.indexOf(ids[i]);
      setSelectedRows([].concat(toConsumableArray_default()(selectedRows.slice(0, index)), toConsumableArray_default()(selectedRows.slice(index + 1))));
    }
  };

  var getCheckbox = function getCheckbox(i) {
    var _props$ids = props.ids,
        ids = _props$ids === void 0 ? [] : _props$ids;
    var isChecked = selectedRows.indexOf(ids[i]) !== -1;
    return {
      display: Object(external_wp_element_["createElement"])(external_wp_components_["CheckboxControl"], {
        onChange: Object(external_lodash_["partial"])(selectRow, i),
        checked: isChecked
      }),
      value: false
    };
  };

  var getAllCheckbox = function getAllCheckbox() {
    var _props$ids2 = props.ids,
        ids = _props$ids2 === void 0 ? [] : _props$ids2;
    var hasData = ids.length > 0;
    var isAllChecked = hasData && ids.length === selectedRows.length;
    return {
      cellClassName: 'is-checkbox-column',
      key: 'compare',
      label: Object(external_wp_element_["createElement"])(external_wp_components_["CheckboxControl"], {
        onChange: selectAllRows,
        "aria-label": Object(external_wp_i18n_["__"])('Select All'),
        checked: isAllChecked,
        disabled: !hasData
      }),
      required: true
    };
  };

  var isLoading = isRequesting || tableData.isRequesting || primaryData.isRequesting;
  var totals = Object(external_lodash_["get"])(primaryData, ['data', 'totals'], {});
  var totalResults = items.totalResults || 0;
  var downloadable = totalResults > 0; // Search words are in the query string, not the table query.

  var searchWords = Object(external_wc_navigation_["getSearchWords"])(query);
  var searchedLabels = searchWords.map(function (v) {
    return {
      key: v,
      label: v
    };
  });
  var data = items.data;
  var applyTableFiltersResult = applyTableFilters(data, totals, totalResults);
  var headers = applyTableFiltersResult.headers,
      rows = applyTableFiltersResult.rows;
  var summary = applyTableFiltersResult.summary;

  var onColumnsChange = function onColumnsChange(shownColumns, toggledColumn) {
    var columns = headers.map(function (header) {
      return header.key;
    });
    var hiddenColumns = columns.filter(function (column) {
      return !shownColumns.includes(column);
    });

    if (columnPrefsKey) {
      var userDataFields = defineProperty_default()({}, columnPrefsKey, hiddenColumns);

      updateUserPreferences(userDataFields);
    }

    if (toggledColumn) {
      var eventProps = {
        report: endpoint,
        column: toggledColumn,
        status: shownColumns.includes(toggledColumn) ? 'on' : 'off'
      };
      Object(external_wc_tracks_["recordEvent"])('analytics_table_header_toggle', eventProps);
    }
  }; // Add in selection for comparisons.


  if (compareBy) {
    rows = rows.map(function (row, i) {
      return [getCheckbox(i)].concat(toConsumableArray_default()(row));
    });
    headers = [getAllCheckbox()].concat(toConsumableArray_default()(headers));
  } // Hide any headers based on user prefs, if loaded.


  var filteredHeaders = filterShownHeaders(headers, userPrefColumns);
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-report-table__scroll-point",
    ref: scrollPointRef,
    "aria-hidden": true
  }), Object(external_wp_element_["createElement"])(external_wc_components_["TableCard"], extends_default()({
    className: 'woocommerce-report-table',
    hasSearch: !!searchBy,
    actions: [compareBy && Object(external_wp_element_["createElement"])(external_wc_components_["CompareButton"], {
      key: "compare",
      className: "woocommerce-table__compare",
      count: selectedRows.length,
      helpText: labels.helpText || Object(external_wp_i18n_["__"])('Check at least two items below to compare', 'woocommerce-admin'),
      onClick: onCompare,
      disabled: !downloadable
    }, labels.compareButton || Object(external_wp_i18n_["__"])('Compare', 'woocommerce-admin')), searchBy && Object(external_wp_element_["createElement"])(external_wc_components_["Search"], {
      allowFreeTextSearch: true,
      inlineTags: true,
      key: "search",
      onChange: onSearchChange,
      placeholder: labels.placeholder || Object(external_wp_i18n_["__"])('Search by item name', 'woocommerce-admin'),
      selected: searchedLabels,
      showClearButton: true,
      type: searchBy,
      disabled: !downloadable
    }), downloadable && Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      key: "download",
      className: "woocommerce-table__download-button",
      disabled: isLoading,
      onClick: onClickDownload
    }, Object(external_wp_element_["createElement"])(download_icon, null), Object(external_wp_element_["createElement"])("span", {
      className: "woocommerce-table__download-button__label"
    }, labels.downloadButton || Object(external_wp_i18n_["__"])('Download', 'woocommerce-admin')))],
    headers: filteredHeaders,
    isLoading: isLoading,
    onQueryChange: external_wc_navigation_["onQueryChange"],
    onColumnsChange: onColumnsChange,
    onSort: onSort,
    onPageChange: onPageChange,
    rows: rows,
    rowsPerPage: parseInt(reportQuery.per_page, 10) || external_wc_data_["QUERY_DEFAULTS"].pageSize,
    summary: summary,
    totalRows: totalResults
  }, tableProps)));
};

report_table_ReportTable.propTypes = {
  /**
   * Pass in query parameters to be included in the path when onSearch creates a new url.
   */
  baseSearchQuery: prop_types_default.a.object,

  /**
   * The string to use as a query parameter when comparing row items.
   */
  compareBy: prop_types_default.a.string,

  /**
   * Url query parameter compare function operates on
   */
  compareParam: prop_types_default.a.string,

  /**
   * The key for user preferences settings for column visibility.
   */
  columnPrefsKey: prop_types_default.a.string,

  /**
   * The endpoint to use in API calls to populate the table rows and summary.
   * For example, if `taxes` is provided, data will be fetched from the report
   * `taxes` endpoint (ie: `/wc-analytics/reports/taxes` and `/wc/v4/reports/taxes/stats`).
   * If the provided endpoint doesn't exist, an error will be shown to the user
   * with `ReportError`.
   */
  endpoint: prop_types_default.a.string,

  /**
   * Name of the methods available via `select` that will be used to
   * load more data for table items. If omitted, no call will be made and only
   * the data returned by the reports endpoint will be used.
   */
  extendItemsMethodNames: prop_types_default.a.shape({
    getError: prop_types_default.a.string,
    isRequesting: prop_types_default.a.string,
    load: prop_types_default.a.string
  }),

  /**
   * Name of store on which extendItemsMethodNames can be found.
   */
  extendedItemsStoreName: prop_types_default.a.string,

  /**
   * A function that returns the headers object to build the table.
   */
  getHeadersContent: prop_types_default.a.func.isRequired,

  /**
   * A function that returns the rows array to build the table.
   */
  getRowsContent: prop_types_default.a.func.isRequired,

  /**
   * A function that returns the summary object to build the table.
   */
  getSummary: prop_types_default.a.func,

  /**
   * The name of the property in the item object which contains the id.
   */
  itemIdField: prop_types_default.a.string,

  /**
   * Custom labels for table header actions.
   */
  labels: prop_types_default.a.shape({
    compareButton: prop_types_default.a.string,
    downloadButton: prop_types_default.a.string,
    helpText: prop_types_default.a.string,
    placeholder: prop_types_default.a.string
  }),

  /**
   * Primary data of that report. If it's not provided, it will be automatically
   * loaded via the provided `endpoint`.
   */
  primaryData: prop_types_default.a.object,

  /**
   * The string to use as a query parameter when searching row items.
   */
  searchBy: prop_types_default.a.string,

  /**
   * List of fields used for summary numbers. (Reduces queries)
   */
  summaryFields: prop_types_default.a.arrayOf(prop_types_default.a.string),

  /**
   * Table data of that report. If it's not provided, it will be automatically
   * loaded via the provided `endpoint`.
   */
  tableData: prop_types_default.a.object.isRequired,

  /**
   * Properties to be added to the query sent to the report table endpoint.
   */
  tableQuery: prop_types_default.a.object,

  /**
   * String to display as the title of the table.
   */
  title: prop_types_default.a.string.isRequired
};
report_table_ReportTable.defaultProps = {
  primaryData: {},
  tableData: {
    items: {
      data: [],
      totalResults: 0
    },
    query: {}
  },
  tableQuery: {},
  compareParam: 'filter',
  downloadable: false,
  onSearch: external_lodash_["noop"],
  baseSearchQuery: {}
};
var EMPTY_ARRAY = [];
var EMPTY_OBJECT = {};
/* harmony default export */ var report_table = __webpack_exports__["a"] = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select, props) {
  var endpoint = props.endpoint,
      getSummary = props.getSummary,
      isRequesting = props.isRequesting,
      itemIdField = props.itemIdField,
      query = props.query,
      tableData = props.tableData,
      tableQuery = props.tableQuery,
      filters = props.filters,
      advancedFilters = props.advancedFilters,
      summaryFields = props.summaryFields;

  if (isRequesting || query.search && !(query[endpoint] && query[endpoint].length)) {
    return EMPTY_OBJECT;
  }

  var _select$getSetting = select(external_wc_data_["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings'),
      defaultDateRange = _select$getSetting.woocommerce_default_date_range; // Category charts are powered by the /reports/products/stats endpoint.


  var chartEndpoint = endpoint === 'categories' ? 'products' : endpoint;
  var primaryData = getSummary ? Object(external_wc_data_["getReportChartData"])({
    endpoint: chartEndpoint,
    dataType: 'primary',
    query: query,
    select: select,
    filters: filters,
    advancedFilters: advancedFilters,
    defaultDateRange: defaultDateRange,
    fields: summaryFields
  }) : EMPTY_OBJECT;
  var queriedTableData = tableData || Object(external_wc_data_["getReportTableData"])({
    endpoint: endpoint,
    query: query,
    select: select,
    tableQuery: tableQuery,
    filters: filters,
    advancedFilters: advancedFilters,
    defaultDateRange: defaultDateRange
  });
  var extendedTableData = extendTableData(select, props, queriedTableData);
  return {
    primaryData: primaryData,
    ids: itemIdField && extendedTableData.items.data ? extendedTableData.items.data.map(function (item) {
      return item[itemIdField];
    }) : EMPTY_ARRAY,
    tableData: extendedTableData,
    query: query
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(external_wc_data_["EXPORT_STORE_NAME"]),
      startExport = _dispatch.startExport;

  var _dispatch2 = dispatch('core/notices'),
      createNotice = _dispatch2.createNotice;

  var _dispatch3 = dispatch(constants["c" /* STORE_KEY */]),
      addCesSurveyForCustomerSearch = _dispatch3.addCesSurveyForCustomerSearch;

  return {
    createNotice: createNotice,
    startExport: startExport,
    addCesSurveyForCustomerSearch: addCesSurveyForCustomerSearch
  };
}))(report_table_ReportTable));

/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);