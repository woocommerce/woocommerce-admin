(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[13],{

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFilteredCurrencyInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyContext; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(214);
/* harmony import */ var _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_currency__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
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

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */





/**
 * Component to render when there is an error in a report component due to data
 * not being loaded or being invalid.
 */

var ReportError = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ReportError, _Component);

  var _super = _createSuper(ReportError);

  function ReportError() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ReportError);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ReportError, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          isError = _this$props.isError,
          isEmpty = _this$props.isEmpty;
      var title, actionLabel, actionURL, actionCallback;

      if (isError) {
        title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('There was an error getting your stats. Please try again.', 'woocommerce-admin');
        actionLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Reload', 'woocommerce-admin');

        actionCallback = function actionCallback() {
          // @todo Add tracking for how often an error is displayed, and the reload action is clicked.
          window.location.reload();
        };
      } else if (isEmpty) {
        title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('No results could be found for this date range.', 'woocommerce-admin');
        actionLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('View Orders', 'woocommerce-admin');
        actionURL = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_9__[/* getAdminLink */ "f"])('edit.php?post_type=shop_order');
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_8__["EmptyContent"], {
        className: className,
        title: title,
        actionLabel: actionLabel,
        actionURL: actionURL,
        actionCallback: actionCallback
      });
    }
  }]);

  return ReportError;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

ReportError.propTypes = {
  /**
   * Additional class name to style the component.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
   * Boolean representing whether there was an error.
   */
  isError: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * Boolean representing whether the issue is that there is no data.
   */
  isEmpty: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
};
ReportError.defaultProps = {
  className: ''
};
/* harmony default export */ __webpack_exports__["a"] = (ReportError);

/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 840:
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
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(277);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(32);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(35);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(801);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_report_error__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(763);
/* harmony import */ var _lib_currency_context__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(762);
/* harmony import */ var _get_reports__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(292);








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





/**
 * The Customers Report will not have the `report` param supplied by the router/
 * because it no longer exists under the path `/analytics/:report`. Use `props.path`/
 * instead to determine if the Customers Report is being rendered.
 *
 * @param {Object} args
 * @param {Object} args.params - url parameters
 * @param {string} args.path
 * @return {string} - report parameter
 */

var getReportParam = function getReportParam(_ref) {
  var params = _ref.params,
      path = _ref.path;
  return params.report || path.replace(/^\/+/, '');
};

var Report = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Report, _Component);

  var _super = _createSuper(Report);

  function Report() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Report);

    _this = _super.apply(this, arguments);
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Report, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error) {
      this.setState({
        hasError: true
      });
      /* eslint-disable no-console */

      console.warn(error);
      /* eslint-enable no-console */
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return null;
      }

      var isError = this.props.isError;

      if (isError) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_report_error__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
          isError: true
        });
      }

      var reportParam = getReportParam(this.props);
      var report = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["find"])(Object(_get_reports__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"])(), {
        report: reportParam
      });

      if (!report) {
        return null;
      }

      var Container = report.component;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_lib_currency_context__WEBPACK_IMPORTED_MODULE_15__[/* CurrencyContext */ "a"].Provider, {
        value: Object(_lib_currency_context__WEBPACK_IMPORTED_MODULE_15__[/* getFilteredCurrencyInstance */ "b"])(Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_11__["getQuery"])())
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Container, this.props));
    }
  }]);

  return Report;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Report.propTypes = {
  params: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["withSelect"])(function (select, props) {
  var query = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_11__["getQuery"])();
  var search = query.search;

  if (!search) {
    return {};
  }

  var report = getReportParam(props);
  var searchWords = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_11__["getSearchWords"])(query); // Single Category view in Categories Report uses the products endpoint, so search must also.

  var mappedReport = report === 'categories' && query.filter === 'single_category' ? 'products' : report;
  var itemsResult = Object(_woocommerce_data__WEBPACK_IMPORTED_MODULE_12__["searchItemsByString"])(select, mappedReport, searchWords);
  var isError = itemsResult.isError,
      isRequesting = itemsResult.isRequesting,
      items = itemsResult.items;
  var ids = Object.keys(items);

  if (!ids.length) {
    return {
      isError: isError,
      isRequesting: isRequesting
    };
  }

  return {
    isError: isError,
    isRequesting: isRequesting,
    query: _objectSpread(_objectSpread({}, props.query), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, mappedReport, ids.join(',')))
  };
}))(Report));

/***/ })

}]);