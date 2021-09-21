(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[6],{

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

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External dependencies
 */



/**
 * Component to render when there is an error in a report component due to data
 * not being loaded or being invalid.
 *
 * @param {Object} props React props.
 * @param {string} [props.className] Additional class name to style the component.
 */

function ReportError({
  className
}) {
  const title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('There was an error getting your stats. Please try again.', 'woocommerce-admin');

  const actionLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Reload', 'woocommerce-admin');

  const actionCallback = () => {
    // @todo Add tracking for how often an error is displayed, and the reload action is clicked.
    window.location.reload();
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_3__["EmptyContent"], {
    className: className,
    title: title,
    actionLabel: actionLabel,
    actionCallback: actionCallback
  });
}

ReportError.propTypes = {
  /**
   * Additional class name to style the component.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["a"] = (ReportError);

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(542);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_report_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(501);
/* harmony import */ var _lib_currency_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(498);
/* harmony import */ var _get_reports__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(117);


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

const getReportParam = ({
  params,
  path
}) => {
  return params.report || path.replace(/^\/+/, '');
};

class Report extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error) {
    this.setState({
      hasError: true
    });
    /* eslint-disable no-console */

    console.warn(error);
    /* eslint-enable no-console */
  }

  render() {
    if (this.state.hasError) {
      return null;
    }

    const {
      isError
    } = this.props;

    if (isError) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_report_error__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null);
    }

    const reportParam = getReportParam(this.props);
    const report = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["find"])(Object(_get_reports__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(), {
      report: reportParam
    });

    if (!report) {
      return null;
    }

    const Container = report.component;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_lib_currency_context__WEBPACK_IMPORTED_MODULE_9__[/* CurrencyContext */ "a"].Provider, {
      value: Object(_lib_currency_context__WEBPACK_IMPORTED_MODULE_9__[/* getFilteredCurrencyInstance */ "b"])(Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__["getQuery"])())
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Container, this.props));
  }

}

Report.propTypes = {
  params: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])((select, props) => {
  const query = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__["getQuery"])();
  const {
    search
  } = query;
  /* eslint @wordpress/no-unused-vars-before-return: "off" */

  const itemsSelector = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_6__["ITEMS_STORE_NAME"]);

  if (!search) {
    return {};
  }

  const report = getReportParam(props);
  const searchWords = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__["getSearchWords"])(query); // Single category view in Categories Report uses the products endpoint, so search must also.

  const mappedReport = report === 'categories' && query.filter === 'single_category' ? 'products' : report;
  const itemsResult = Object(_woocommerce_data__WEBPACK_IMPORTED_MODULE_6__["searchItemsByString"])(itemsSelector, mappedReport, searchWords, {
    per_page: 100
  });
  const {
    isError,
    isRequesting,
    items
  } = itemsResult;
  const ids = Object.keys(items);

  if (!ids.length) {
    return {
      isError,
      isRequesting
    };
  }

  return {
    isError,
    isRequesting,
    query: { ...props.query,
      [mappedReport]: ids.join(',')
    }
  };
}))(Report));

/***/ })

}]);