(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[30],{

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectControl; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(175);
/* harmony import */ var _base_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(253);





/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function SelectControl(_ref) {
  var help = _ref.help,
      label = _ref.label,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      onChange = _ref.onChange,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      className = _ref.className,
      hideLabelFromVision = _ref.hideLabelFromVision,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ref, ["help", "label", "multiple", "onChange", "options", "className", "hideLabelFromVision"]);

  var instanceId = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(SelectControl);
  var id = "inspector-select-control-".concat(instanceId);

  var onChangeValue = function onChangeValue(event) {
    if (multiple) {
      var selectedOptions = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(event.target.options).filter(function (_ref2) {
        var selected = _ref2.selected;
        return selected;
      });

      var newValues = selectedOptions.map(function (_ref3) {
        var value = _ref3.value;
        return value;
      });
      onChange(newValues);
      return;
    }

    onChange(event.target.value);
  }; // Disable reason: A select with an onchange throws a warning

  /* eslint-disable jsx-a11y/no-onchange */


  return !Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(options) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_base_control__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    label: label,
    hideLabelFromVision: hideLabelFromVision,
    id: id,
    help: help,
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("select", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    id: id,
    className: "components-select-control__input",
    onChange: onChangeValue,
    "aria-describedby": !!help ? "".concat(id, "__help") : undefined,
    multiple: multiple
  }, props), options.map(function (option, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("option", {
      key: "".concat(option.label, "-").concat(option.value, "-").concat(index),
      value: option.value,
      disabled: option.disabled
    }, option.label);
  })));
  /* eslint-enable jsx-a11y/no-onchange */
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33);







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

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getRequestByIdString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCategoryLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCouponLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCustomerLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getProductLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getTaxRateLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getVariationLabels; });
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _analytics_report_taxes_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(721);
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
    label: Object(_analytics_report_taxes_utils__WEBPACK_IMPORTED_MODULE_5__[/* getTaxCode */ "a"])(taxRate)
  };
});
var getVariationLabels = getRequestByIdString(function (query) {
  return _woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"] + "/products/".concat(query.products, "/variations");
}, function (variation) {
  return {
    key: variation.id,
    label: variation.attributes.map(function (_ref) {
      var option = _ref.option;
      return option;
    }).join(', ')
  };
});

/***/ }),

/***/ 721:
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

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: ReportChart

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(5);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(14);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(13);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(16);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(17);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(6);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/compose.js
var compose = __webpack_require__(270);

// EXTERNAL MODULE: ./node_modules/@wordpress/date/build-module/index.js
var build_module = __webpack_require__(137);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(24);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external {"this":["wc","components"]}
var external_this_wc_components_ = __webpack_require__(68);

// EXTERNAL MODULE: external {"this":["wc","data"]}
var external_this_wc_data_ = __webpack_require__(41);

// EXTERNAL MODULE: external {"this":["wc","date"]}
var external_this_wc_date_ = __webpack_require__(35);

// EXTERNAL MODULE: ./client/lib/currency-context.js
var currency_context = __webpack_require__(718);

// EXTERNAL MODULE: ./client/analytics/components/report-error/index.js
var report_error = __webpack_require__(719);

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

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return charts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return advancedFilters; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */


var REVENUE_REPORT_CHARTS_FILTER = 'woocommerce_admin_revenue_report_charts';
var REVENUE_REPORT_FILTERS_FILTER = 'woocommerce_admin_revenue_report_filters';
var REVENUE_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_revenue_report_advanced_filters';
var charts = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(REVENUE_REPORT_CHARTS_FILTER, [{
  key: 'gross_sales',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Gross Sales', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'gross_sales',
  type: 'currency'
}, {
  key: 'refunds',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Returns', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'refunds',
  type: 'currency'
}, {
  key: 'coupons',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Coupons', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'coupons',
  type: 'currency'
}, {
  key: 'net_revenue',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Net Sales', 'woocommerce-admin'),
  orderby: 'net_revenue',
  type: 'currency'
}, {
  key: 'taxes',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Taxes', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'taxes',
  type: 'currency'
}, {
  key: 'shipping',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Shipping', 'woocommerce-admin'),
  orderby: 'shipping',
  type: 'currency'
}, {
  key: 'total_sales',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Total Sales', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'total_sales',
  type: 'currency'
}]);
var filters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(REVENUE_REPORT_FILTERS_FILTER, []);
var advancedFilters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(REVENUE_REPORT_ADVANCED_FILTERS_FILTER, {});

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return charts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return advancedFilters; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_async_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(720);
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

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return charts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return advancedFilters; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var _lib_async_requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(720);
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


var ORDERS_REPORT_CHARTS_FILTER = 'woocommerce_admin_orders_report_charts';
var ORDERS_REPORT_FILTERS_FILTER = 'woocommerce_admin_orders_report_filters';
var ORDERS_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_orders_report_advanced_filters';
var charts = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(ORDERS_REPORT_CHARTS_FILTER, [{
  key: 'orders_count',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Orders', 'woocommerce-admin'),
  type: 'number'
}, {
  key: 'net_revenue',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Net Sales', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'net_total',
  type: 'currency'
}, {
  key: 'avg_order_value',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Average Order Value', 'woocommerce-admin'),
  type: 'currency'
}, {
  key: 'avg_items_per_order',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Average Items Per Order', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'num_items_sold',
  type: 'average'
}]);
var filters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(ORDERS_REPORT_FILTERS_FILTER, [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Show', 'woocommerce-admin'),
  staticParams: ['chartType', 'paged', 'per_page'],
  param: 'filter',
  showFilters: function showFilters() {
    return true;
  },
  filters: [{
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('All Orders', 'woocommerce-admin'),
    value: 'all'
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Advanced Filters', 'woocommerce-admin'),
    value: 'advanced'
  }]
}]);
/*eslint-disable max-len*/

var advancedFilters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(ORDERS_REPORT_ADVANCED_FILTERS_FILTER, {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Orders Match {{select /}} Filters', 'A sentence describing filters for Orders. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ', 'woocommerce-admin'),
  filters: {
    status: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Order Status', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove order status filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select an order status filter match', 'woocommerce-admin'),

        /* translators: A sentence describing an Order Status filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('{{title}}Order Status{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select an order status', 'woocommerce-admin')
      },
      rules: [{
        value: 'is',

        /* translators: Sentence fragment, logical, "Is" refers to searching for orders matching a chosen order status. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Is', 'order status', 'woocommerce-admin')
      }, {
        value: 'is_not',

        /* translators: Sentence fragment, logical, "Is Not" refers to searching for orders that don\'t match a chosen order status. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Is Not', 'order status', 'woocommerce-admin')
      }],
      input: {
        component: 'SelectControl',
        options: Object.keys(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__[/* ORDER_STATUSES */ "d"]).map(function (key) {
          return {
            value: key,
            label: _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__[/* ORDER_STATUSES */ "d"][key]
          };
        })
      }
    },
    product: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Products', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search products', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove products filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a product filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('{{title}}Product{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select products', 'woocommerce-admin')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to orders including a given product(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Includes', 'products', 'woocommerce-admin')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to orders excluding a given product(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Excludes', 'products', 'woocommerce-admin')
      }],
      input: {
        component: 'Search',
        type: 'products',
        getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_3__[/* getProductLabels */ "d"]
      }
    },
    coupon: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Coupon Codes', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search coupons', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove coupon filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a coupon filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a Coupon filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('{{title}}Coupon Code{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select coupon codes', 'woocommerce-admin')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to orders including a given coupon code(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Includes', 'coupon code', 'woocommerce-admin')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to orders excluding a given coupon code(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Excludes', 'coupon code', 'woocommerce-admin')
      }],
      input: {
        component: 'Search',
        type: 'coupons',
        getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_3__[/* getCouponLabels */ "b"]
      }
    },
    customer_type: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Customer Type', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove customer filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a customer filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a Customer filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('{{title}}Customer is{{/title}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a customer type', 'woocommerce-admin')
      },
      input: {
        component: 'SelectControl',
        options: [{
          value: 'new',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('New', 'woocommerce-admin')
        }, {
          value: 'returning',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Returning', 'woocommerce-admin')
        }],
        defaultOption: 'new'
      }
    },
    refunds: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Refunds', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove refunds filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a refund filter match', 'woocommerce-admin'),
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('{{title}}Refunds{{/title}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a refund type', 'woocommerce-admin')
      },
      input: {
        component: 'SelectControl',
        options: [{
          value: 'all',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('All', 'woocommerce-admin')
        }, {
          value: 'partial',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Partially refunded', 'woocommerce-admin')
        }, {
          value: 'full',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Fully refunded', 'woocommerce-admin')
        }, {
          value: 'none',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('None', 'woocommerce-admin')
        }],
        defaultOption: 'all'
      }
    },
    tax_rate: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Tax Rates', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search tax rates', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove tax rate filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a tax rate filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a tax rate filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('{{title}}Tax Rate{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select tax rates', 'woocommerce-admin')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to orders including a given tax rate(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Includes', 'tax rate', 'woocommerce-admin')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to orders excluding a given tax rate(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Excludes', 'tax rate', 'woocommerce-admin')
      }],
      input: {
        component: 'Search',
        type: 'taxes',
        getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_3__[/* getTaxRateLabels */ "f"]
      }
    },
    attribute: {
      allowMultiple: true,
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Attribute', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search attributes', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove attribute filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a product attribute filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('{{title}}Attribute{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select attributes', 'woocommerce-admin')
      },
      rules: [{
        value: 'is',

        /* translators: Sentence fragment, logical, "Is" refers to searching for products matching a chosen attribute. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Is', 'product attribute', 'woocommerce-admin')
      }, {
        value: 'is_not',

        /* translators: Sentence fragment, logical, "Is Not" refers to searching for products that don\'t match a chosen attribute. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Is Not', 'product attribute', 'woocommerce-admin')
      }],
      input: {
        component: 'ProductAttribute'
      }
    }
  }
});
/*eslint-enable max-len*/

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return charts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return advancedFilters; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_async_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(720);
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


var COUPON_REPORT_CHARTS_FILTER = 'woocommerce_admin_coupons_report_charts';
var COUPON_REPORT_FILTERS_FILTER = 'woocommerce_admin_coupons_report_filters';
var COUPON_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_coupon_report_advanced_filters';
var charts = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(COUPON_REPORT_CHARTS_FILTER, [{
  key: 'orders_count',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Discounted Orders', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'orders_count',
  type: 'number'
}, {
  key: 'amount',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Amount', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'amount',
  type: 'currency'
}]);
var filters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(COUPON_REPORT_FILTERS_FILTER, [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Show', 'woocommerce-admin'),
  staticParams: ['chartType', 'paged', 'per_page'],
  param: 'filter',
  showFilters: function showFilters() {
    return true;
  },
  filters: [{
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('All Coupons', 'woocommerce-admin'),
    value: 'all'
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Single Coupon', 'woocommerce-admin'),
    value: 'select_coupon',
    chartMode: 'item-comparison',
    subFilters: [{
      component: 'Search',
      value: 'single_coupon',
      chartMode: 'item-comparison',
      path: ['select_coupon'],
      settings: {
        type: 'coupons',
        param: 'coupons',
        getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_2__[/* getCouponLabels */ "b"],
        labels: {
          placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Type to search for a coupon', 'woocommerce-admin'),
          button: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Single Coupon', 'woocommerce-admin')
        }
      }
    }]
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Comparison', 'woocommerce-admin'),
    value: 'compare-coupons',
    settings: {
      type: 'coupons',
      param: 'coupons',
      getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_2__[/* getCouponLabels */ "b"],
      labels: {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Compare Coupon Codes', 'woocommerce-admin'),
        update: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Compare', 'woocommerce-admin'),
        helpText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Check at least two coupon codes below to compare', 'woocommerce-admin')
      }
    }
  }]
}]);
var advancedFilters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(COUPON_REPORT_ADVANCED_FILTERS_FILTER, {});

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return charts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return advancedFilters; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_async_requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(720);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(721);
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



var TAXES_REPORT_CHARTS_FILTER = 'woocommerce_admin_taxes_report_charts';
var TAXES_REPORT_FILTERS_FILTER = 'woocommerce_admin_taxes_report_filters';
var TAXES_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_taxes_report_advanced_filters';
var charts = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(TAXES_REPORT_CHARTS_FILTER, [{
  key: 'total_tax',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Total Tax', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'total_tax',
  type: 'currency'
}, {
  key: 'order_tax',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Order Tax', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'order_tax',
  type: 'currency'
}, {
  key: 'shipping_tax',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Shipping Tax', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'shipping_tax',
  type: 'currency'
}, {
  key: 'orders_count',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Orders', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'orders_count',
  type: 'number'
}]);
var filters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(TAXES_REPORT_FILTERS_FILTER, [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Show', 'woocommerce-admin'),
  staticParams: ['chartType', 'paged', 'per_page'],
  param: 'filter',
  showFilters: function showFilters() {
    return true;
  },
  filters: [{
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('All Taxes', 'woocommerce-admin'),
    value: 'all'
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Comparison', 'woocommerce-admin'),
    value: 'compare-taxes',
    chartMode: 'item-comparison',
    settings: {
      type: 'taxes',
      param: 'taxes',
      getLabels: Object(_lib_async_requests__WEBPACK_IMPORTED_MODULE_3__[/* getRequestByIdString */ "e"])(_woocommerce_data__WEBPACK_IMPORTED_MODULE_2__["NAMESPACE"] + '/taxes', function (tax) {
        return {
          id: tax.id,
          label: Object(_utils__WEBPACK_IMPORTED_MODULE_4__[/* getTaxCode */ "a"])(tax)
        };
      }),
      labels: {
        helpText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Check at least two tax codes below to compare', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search for tax codes to compare', 'woocommerce-admin'),
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Compare Tax Codes', 'woocommerce-admin'),
        update: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Compare', 'woocommerce-admin')
      }
    }
  }]
}]);
var advancedFilters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(TAXES_REPORT_ADVANCED_FILTERS_FILTER, {});

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return charts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return advancedFilters; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_async_requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(720);



/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


var DOWLOADS_REPORT_CHARTS_FILTER = 'woocommerce_admin_downloads_report_charts';
var DOWLOADS_REPORT_FILTERS_FILTER = 'woocommerce_admin_downloads_report_filters';
var DOWLOADS_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_downloads_report_advanced_filters';
var charts = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__["applyFilters"])(DOWLOADS_REPORT_CHARTS_FILTER, [{
  key: 'download_count',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Downloads', 'woocommerce-admin'),
  type: 'number'
}]);
var filters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__["applyFilters"])(DOWLOADS_REPORT_FILTERS_FILTER, [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Show', 'woocommerce-admin'),
  staticParams: ['chartType', 'paged', 'per_page'],
  param: 'filter',
  showFilters: function showFilters() {
    return true;
  },
  filters: [{
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('All Downloads', 'woocommerce-admin'),
    value: 'all'
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Advanced Filters', 'woocommerce-admin'),
    value: 'advanced'
  }]
}]);
/*eslint-disable max-len*/

var advancedFilters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__["applyFilters"])(DOWLOADS_REPORT_ADVANCED_FILTERS_FILTER, {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('Downloads Match {{select /}} Filters', 'A sentence describing filters for Downloads. See screen shot for context: https://cloudup.com/ccxhyH2mEDg', 'woocommerce-admin'),
  filters: {
    product: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Product', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Search', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Remove product filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select a product filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/ccxhyH2mEDg */
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('{{title}}Product{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select product', 'woocommerce-admin')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to products including a given product(s). Screenshot for context: https://cloudup.com/ccxhyH2mEDg */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('Includes', 'products', 'woocommerce-admin')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to products excluding a products(s). Screenshot for context: https://cloudup.com/ccxhyH2mEDg */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('Excludes', 'products', 'woocommerce-admin')
      }],
      input: {
        component: 'Search',
        type: 'products',
        getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_4__[/* getProductLabels */ "d"]
      }
    },
    customer: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Username', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Search customer username', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Remove customer username filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select a customer username filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a customer username filter. See screen shot for context: https://cloudup.com/ccxhyH2mEDg */
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('{{title}}Username{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select customer username', 'woocommerce-admin')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to customer usernames including a given username(s). Screenshot for context: https://cloudup.com/ccxhyH2mEDg */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('Includes', 'customer usernames', 'woocommerce-admin')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to customer usernames excluding a given username(s). Screenshot for context: https://cloudup.com/ccxhyH2mEDg */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('Excludes', 'customer usernames', 'woocommerce-admin')
      }],
      input: {
        component: 'Search',
        type: 'usernames',
        getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_4__[/* getCustomerLabels */ "c"]
      }
    },
    order: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Order #', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Search order number', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Remove order number filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select a order number filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a order number filter. See screen shot for context: https://cloudup.com/ccxhyH2mEDg */
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('{{title}}Order #{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select order number', 'woocommerce-admin')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to order numbers including a given order(s). Screenshot for context: https://cloudup.com/ccxhyH2mEDg */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('Includes', 'order numbers', 'woocommerce-admin')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to order numbers excluding a given order(s). Screenshot for context: https://cloudup.com/ccxhyH2mEDg */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('Excludes', 'order numbers', 'woocommerce-admin')
      }],
      input: {
        component: 'Search',
        type: 'orders',
        getLabels: function () {
          var _getLabels = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(value) {
            var orderIds;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    orderIds = value.split(',');
                    _context.next = 3;
                    return orderIds.map(function (orderId) {
                      return {
                        id: orderId,
                        label: '#' + orderId
                      };
                    });

                  case 3:
                    return _context.abrupt("return", _context.sent);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function getLabels(_x2) {
            return _getLabels.apply(this, arguments);
          }

          return getLabels;
        }()
      }
    },
    ip_address: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('IP Address', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Search IP address', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Remove IP address filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select an IP address filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a order number filter. See screen shot for context: https://cloudup.com/ccxhyH2mEDg */
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('{{title}}IP Address{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select IP address', 'woocommerce-admin')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to IP addresses including a given address(s). Screenshot for context: https://cloudup.com/ccxhyH2mEDg */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('Includes', 'IP addresses', 'woocommerce-admin')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to IP addresses excluding a given address(s). Screenshot for context: https://cloudup.com/ccxhyH2mEDg */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('Excludes', 'IP addresses', 'woocommerce-admin')
      }],
      input: {
        component: 'Search',
        type: 'downloadIps',
        getLabels: function () {
          var _getLabels2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(value) {
            var ips;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    ips = value.split(',');
                    _context2.next = 3;
                    return ips.map(function (ip) {
                      return {
                        id: ip,
                        label: ip
                      };
                    });

                  case 3:
                    return _context2.abrupt("return", _context2.sent);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function getLabels(_x3) {
            return _getLabels2.apply(this, arguments);
          }

          return getLabels;
        }()
      }
    }
  }
});
/*eslint-enable max-len*/

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 888:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(5);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(38);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(60);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/gridicons/dist/index.js
var dist = __webpack_require__(90);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/select-control/index.js
var select_control = __webpack_require__(689);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/navigable-container/menu.js + 1 modules
var menu = __webpack_require__(509);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__(72);

// EXTERNAL MODULE: external {"this":["wc","components"]}
var external_this_wc_components_ = __webpack_require__(68);

// EXTERNAL MODULE: external {"this":["wc","data"]}
var external_this_wc_data_ = __webpack_require__(41);

// EXTERNAL MODULE: external {"this":["wc","date"]}
var external_this_wc_date_ = __webpack_require__(35);

// EXTERNAL MODULE: external {"this":["wc","tracks"]}
var external_this_wc_tracks_ = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(14);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(13);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(10);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(16);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(17);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(6);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external {"this":["wc","navigation"]}
var external_this_wc_navigation_ = __webpack_require__(32);

// EXTERNAL MODULE: ./client/settings/index.js
var settings = __webpack_require__(33);

// EXTERNAL MODULE: ./client/analytics/components/report-chart/index.js + 1 modules
var report_chart = __webpack_require__(722);

// EXTERNAL MODULE: ./client/dashboard/dashboard-charts/block.scss
var block = __webpack_require__(887);

// CONCATENATED MODULE: ./client/dashboard/dashboard-charts/block.js









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */






/**
 * Internal dependencies
 */




var block_ChartBlock = /*#__PURE__*/function (_Component) {
  inherits_default()(ChartBlock, _Component);

  var _super = _createSuper(ChartBlock);

  function ChartBlock() {
    var _this;

    classCallCheck_default()(this, ChartBlock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "handleChartClick", function () {
      var selectedChart = _this.props.selectedChart;
      Object(external_this_wc_navigation_["getHistory"])().push(_this.getChartPath(selectedChart));
    });

    return _this;
  }

  createClass_default()(ChartBlock, [{
    key: "getChartPath",
    value: function getChartPath(chart) {
      return Object(external_this_wc_navigation_["getNewPath"])({
        chart: chart.key
      }, '/analytics/' + chart.endpoint, Object(external_this_wc_navigation_["getPersistedQuery"])());
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          charts = _this$props.charts,
          endpoint = _this$props.endpoint,
          path = _this$props.path,
          query = _this$props.query,
          selectedChart = _this$props.selectedChart,
          filters = _this$props.filters;

      if (!selectedChart) {
        return null;
      }

      return Object(external_this_wp_element_["createElement"])("div", {
        role: "presentation",
        className: "woocommerce-dashboard__chart-block-wrapper",
        onClick: this.handleChartClick
      }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Card"], {
        className: "woocommerce-dashboard__chart-block woocommerce-analytics__card",
        title: selectedChart.label
      }, Object(external_this_wp_element_["createElement"])("a", {
        className: "screen-reader-text",
        href: Object(settings["f" /* getAdminLink */])(this.getChartPath(selectedChart))
      },
      /* translators: %s is the chart type */
      Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('%s Report', 'woocommerce-admin'), selectedChart.label)), Object(external_this_wp_element_["createElement"])(report_chart["a" /* default */], {
        charts: charts,
        endpoint: endpoint,
        query: query,
        interactiveLegend: false,
        legendPosition: "bottom",
        path: path,
        selectedChart: selectedChart,
        showHeaderControls: false,
        filters: filters
      })));
    }
  }]);

  return ChartBlock;
}(external_this_wp_element_["Component"]);

block_ChartBlock.propTypes = {
  charts: prop_types_default.a.array,
  endpoint: prop_types_default.a.string.isRequired,
  path: prop_types_default.a.string.isRequired,
  query: prop_types_default.a.object.isRequired,
  selectedChart: prop_types_default.a.object.isRequired
};
/* harmony default export */ var dashboard_charts_block = (block_ChartBlock);
// EXTERNAL MODULE: external {"this":["wp","hooks"]}
var external_this_wp_hooks_ = __webpack_require__(49);

// EXTERNAL MODULE: ./client/analytics/report/orders/config.js
var config = __webpack_require__(747);

// EXTERNAL MODULE: ./client/analytics/report/products/config.js
var products_config = __webpack_require__(746);

// EXTERNAL MODULE: ./client/analytics/report/revenue/config.js
var revenue_config = __webpack_require__(745);

// EXTERNAL MODULE: ./client/analytics/report/coupons/config.js
var coupons_config = __webpack_require__(748);

// EXTERNAL MODULE: ./client/analytics/report/taxes/config.js
var taxes_config = __webpack_require__(749);

// EXTERNAL MODULE: ./client/analytics/report/downloads/config.js
var downloads_config = __webpack_require__(750);

// CONCATENATED MODULE: ./client/dashboard/dashboard-charts/config.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */







var DASHBOARD_CHARTS_FILTER = 'woocommerce_admin_dashboard_charts_filter';
var config_charts = {
  revenue: revenue_config["b" /* charts */],
  orders: config["b" /* charts */],
  products: products_config["b" /* charts */],
  coupons: coupons_config["b" /* charts */],
  taxes: taxes_config["b" /* charts */],
  downloads: downloads_config["b" /* charts */]
};
var defaultCharts = [{
  label: Object(external_this_wp_i18n_["__"])('Total Sales', 'woocommerce-admin'),
  report: 'revenue',
  key: 'total_sales'
}, {
  label: Object(external_this_wp_i18n_["__"])('Net Sales', 'woocommerce-admin'),
  report: 'revenue',
  key: 'net_revenue'
}, {
  label: Object(external_this_wp_i18n_["__"])('Orders', 'woocommerce-admin'),
  report: 'orders',
  key: 'orders_count'
}, {
  label: Object(external_this_wp_i18n_["__"])('Average Order Value', 'woocommerce-admin'),
  report: 'orders',
  key: 'avg_order_value'
}, {
  label: Object(external_this_wp_i18n_["__"])('Items Sold', 'woocommerce-admin'),
  report: 'products',
  key: 'items_sold'
}, {
  label: Object(external_this_wp_i18n_["__"])('Returns', 'woocommerce-admin'),
  report: 'revenue',
  key: 'refunds'
}, {
  label: Object(external_this_wp_i18n_["__"])('Discounted Orders', 'woocommerce-admin'),
  report: 'coupons',
  key: 'orders_count'
}, {
  label: Object(external_this_wp_i18n_["__"])('Gross discounted', 'woocommerce-admin'),
  report: 'coupons',
  key: 'amount'
}, {
  label: Object(external_this_wp_i18n_["__"])('Total Tax', 'woocommerce-admin'),
  report: 'taxes',
  key: 'total_tax'
}, {
  label: Object(external_this_wp_i18n_["__"])('Order Tax', 'woocommerce-admin'),
  report: 'taxes',
  key: 'order_tax'
}, {
  label: Object(external_this_wp_i18n_["__"])('Shipping Tax', 'woocommerce-admin'),
  report: 'taxes',
  key: 'shipping_tax'
}, {
  label: Object(external_this_wp_i18n_["__"])('Shipping', 'woocommerce-admin'),
  report: 'revenue',
  key: 'shipping'
}, {
  label: Object(external_this_wp_i18n_["__"])('Downloads', 'woocommerce-admin'),
  report: 'downloads',
  key: 'download_count'
}];
var uniqCharts = Object(external_this_wp_hooks_["applyFilters"])(DASHBOARD_CHARTS_FILTER, defaultCharts.map(function (chartDef) {
  return _objectSpread(_objectSpread({}, config_charts[chartDef.report].find(function (chart) {
    return chart.key === chartDef.key;
  })), {}, {
    label: chartDef.label,
    endpoint: chartDef.report
  });
}));
// EXTERNAL MODULE: ./client/dashboard/dashboard-charts/style.scss
var style = __webpack_require__(888);

// CONCATENATED MODULE: ./client/dashboard/dashboard-charts/index.js





function dashboard_charts_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function dashboard_charts_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { dashboard_charts_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { dashboard_charts_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */










/**
 * Internal dependencies
 */





var dashboard_charts_renderChartToggles = function renderChartToggles(_ref) {
  var hiddenBlocks = _ref.hiddenBlocks,
      onToggleHiddenBlock = _ref.onToggleHiddenBlock;
  return uniqCharts.map(function (chart) {
    var key = chart.endpoint + '_' + chart.key;
    var checked = !hiddenBlocks.includes(key);
    return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["MenuItem"], {
      checked: checked,
      isCheckbox: true,
      isClickable: true,
      key: chart.endpoint + '_' + chart.key,
      onInvoke: function onInvoke() {
        onToggleHiddenBlock(key)();
        Object(external_this_wc_tracks_["recordEvent"])('dash_charts_chart_toggle', {
          status: checked ? 'off' : 'on',
          key: key
        });
      }
    }, chart.label);
  });
};

var dashboard_charts_renderIntervalSelector = function renderIntervalSelector(_ref2) {
  var chartInterval = _ref2.chartInterval,
      setInterval = _ref2.setInterval,
      query = _ref2.query;
  var allowedIntervals = Object(external_this_wc_date_["getAllowedIntervalsForQuery"])(query);

  if (!allowedIntervals || allowedIntervals.length < 1) {
    return null;
  }

  var intervalLabels = {
    hour: Object(external_this_wp_i18n_["__"])('By hour', 'woocommerce-admin'),
    day: Object(external_this_wp_i18n_["__"])('By day', 'woocommerce-admin'),
    week: Object(external_this_wp_i18n_["__"])('By week', 'woocommerce-admin'),
    month: Object(external_this_wp_i18n_["__"])('By month', 'woocommerce-admin'),
    quarter: Object(external_this_wp_i18n_["__"])('By quarter', 'woocommerce-admin'),
    year: Object(external_this_wp_i18n_["__"])('By year', 'woocommerce-admin')
  };
  return Object(external_this_wp_element_["createElement"])(select_control["a" /* default */], {
    className: "woocommerce-chart__interval-select",
    value: chartInterval,
    options: allowedIntervals.map(function (allowedInterval) {
      return {
        value: allowedInterval,
        label: intervalLabels[allowedInterval]
      };
    }),
    onChange: setInterval
  });
};

var dashboard_charts_renderChartBlocks = function renderChartBlocks(_ref3) {
  var hiddenBlocks = _ref3.hiddenBlocks,
      path = _ref3.path,
      query = _ref3.query,
      filters = _ref3.filters;
  // Reduce the API response to only the necessary stat fields
  // by supplying all charts common to each endpoint.
  var chartsByEndpoint = uniqCharts.reduce(function (byEndpoint, chart) {
    if (typeof byEndpoint[chart.endpoint] === 'undefined') {
      byEndpoint[chart.endpoint] = [];
    }

    byEndpoint[chart.endpoint].push(chart);
    return byEndpoint;
  }, {});
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-dashboard__columns"
  }, uniqCharts.map(function (chart) {
    return hiddenBlocks.includes(chart.endpoint + '_' + chart.key) ? null : Object(external_this_wp_element_["createElement"])(dashboard_charts_block, {
      charts: chartsByEndpoint[chart.endpoint],
      endpoint: chart.endpoint,
      key: chart.endpoint + '_' + chart.key,
      path: path,
      query: query,
      selectedChart: chart,
      filters: filters
    });
  }));
};

var dashboard_charts_DashboardCharts = function DashboardCharts(props) {
  var Controls = props.controls,
      hiddenBlocks = props.hiddenBlocks,
      isFirst = props.isFirst,
      isLast = props.isLast,
      onMove = props.onMove,
      onRemove = props.onRemove,
      onTitleBlur = props.onTitleBlur,
      onTitleChange = props.onTitleChange,
      onToggleHiddenBlock = props.onToggleHiddenBlock,
      path = props.path,
      title = props.title,
      titleInput = props.titleInput,
      filters = props.filters;

  var _useUserPreferences = Object(external_this_wc_data_["useUserPreferences"])(),
      updateUserPreferences = _useUserPreferences.updateUserPreferences,
      userPrefs = objectWithoutProperties_default()(_useUserPreferences, ["updateUserPreferences"]);

  var _useState = Object(external_this_wp_element_["useState"])(userPrefs.dashboard_chart_type || 'line'),
      _useState2 = slicedToArray_default()(_useState, 2),
      chartType = _useState2[0],
      setChartType = _useState2[1];

  var _useState3 = Object(external_this_wp_element_["useState"])(userPrefs.dashboard_chart_interval || 'day'),
      _useState4 = slicedToArray_default()(_useState3, 2),
      chartInterval = _useState4[0],
      setChartInterval = _useState4[1];

  var query = dashboard_charts_objectSpread(dashboard_charts_objectSpread({}, props.query), {}, {
    chartType: chartType,
    interval: chartInterval
  });

  var handleTypeToggle = function handleTypeToggle(type) {
    return function () {
      setChartType(type);
      var userDataFields = {
        dashboard_chart_type: type
      };
      updateUserPreferences(userDataFields);
      Object(external_this_wc_tracks_["recordEvent"])('dash_charts_type_toggle', {
        chart_type: type
      });
    };
  };

  var renderMenu = function renderMenu() {
    return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["EllipsisMenu"], {
      label: Object(external_this_wp_i18n_["__"])('Choose which charts to display', 'woocommerce-admin'),
      renderContent: function renderContent(_ref4) {
        var onToggle = _ref4.onToggle;
        return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["MenuTitle"], null, Object(external_this_wp_i18n_["__"])('Charts', 'woocommerce-admin')), dashboard_charts_renderChartToggles({
          hiddenBlocks: hiddenBlocks,
          onToggleHiddenBlock: onToggleHiddenBlock
        }), window.wcAdminFeatures['analytics-dashboard/customizable'] && Object(external_this_wp_element_["createElement"])(Controls, {
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
  };

  var setInterval = function setInterval(interval) {
    setChartInterval(interval);
    var userDataFields = {
      dashboard_chart_interval: interval
    };
    updateUserPreferences(userDataFields);
    Object(external_this_wc_tracks_["recordEvent"])('dash_charts_interval', {
      interval: interval
    });
  };

  return Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-dashboard__dashboard-charts"
  }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["SectionHeader"], {
    title: title || Object(external_this_wp_i18n_["__"])('Charts', 'woocommerce-admin'),
    menu: renderMenu(),
    className: 'has-interval-select'
  }, dashboard_charts_renderIntervalSelector({
    chartInterval: chartInterval,
    setInterval: setInterval,
    query: query
  }), Object(external_this_wp_element_["createElement"])(menu["a" /* default */], {
    className: "woocommerce-chart__types",
    orientation: "horizontal",
    role: "menubar"
  }, Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
    className: classnames_default()('woocommerce-chart__type-button', {
      'woocommerce-chart__type-button-selected': !query.chartType || query.chartType === 'line'
    }),
    title: Object(external_this_wp_i18n_["__"])('Line chart', 'woocommerce-admin'),
    "aria-checked": query.chartType === 'line',
    role: "menuitemradio",
    tabIndex: query.chartType === 'line' ? 0 : -1,
    onClick: handleTypeToggle('line')
  }, Object(external_this_wp_element_["createElement"])(dist_default.a, {
    icon: "line-graph"
  })), Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
    className: classnames_default()('woocommerce-chart__type-button', {
      'woocommerce-chart__type-button-selected': query.chartType === 'bar'
    }),
    title: Object(external_this_wp_i18n_["__"])('Bar chart', 'woocommerce-admin'),
    "aria-checked": query.chartType === 'bar',
    role: "menuitemradio",
    tabIndex: query.chartType === 'bar' ? 0 : -1,
    onClick: handleTypeToggle('bar')
  }, Object(external_this_wp_element_["createElement"])(dist_default.a, {
    icon: "stats-alt"
  })))), dashboard_charts_renderChartBlocks({
    hiddenBlocks: hiddenBlocks,
    path: path,
    query: query,
    filters: filters
  }));
};

dashboard_charts_DashboardCharts.propTypes = {
  path: prop_types_default.a.string.isRequired,
  query: prop_types_default.a.object.isRequired
};
/* harmony default export */ var dashboard_charts = __webpack_exports__["default"] = (dashboard_charts_DashboardCharts);

/***/ })

}]);