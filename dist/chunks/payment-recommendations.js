(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[44],{

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=Object.assign||function(a){for(var c,b=1;b<arguments.length;b++)for(var d in c=arguments[b],c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d]);return a};Object.defineProperty(exports,'__esModule',{value:!0});exports.default=function(a){var b=a.size,c=b===void 0?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,['size','onClick','icon','className']),j=['gridicon','gridicons-external',f,!!function h(k){return 0==k%18}(c)&&'needs-offset',!1,!1].filter(Boolean).join(' ');return _react2.default.createElement('svg',_extends({className:j,height:c,width:c,onClick:d},g,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M19 13v6c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V7c0-1.105.895-2 2-2h6v2H5v12h12v-6h2zM13 3v2h4.586l-7.793 7.793 1.414 1.414L19 6.414V11h2V3h-8z'})))};var _react=__webpack_require__(5),_react2=_interopRequireDefault(_react);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){var d={};for(var c in a)0<=b.indexOf(c)||Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}module.exports=exports['default'];


/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=Object.assign||function(a){for(var c,b=1;b<arguments.length;b++)for(var d in c=arguments[b],c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d]);return a};Object.defineProperty(exports,'__esModule',{value:!0});exports.default=function(a){var b=a.size,c=b===void 0?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,['size','onClick','icon','className']),j=['gridicon','gridicons-notice-outline',f,!!function h(k){return 0==k%18}(c)&&'needs-offset',!1,!1].filter(Boolean).join(' ');return _react2.default.createElement('svg',_extends({className:j,height:c,width:c,onClick:d},g,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 13h-2v2h2v-2zm-2-2h2l.5-6h-3l.5 6z'})))};var _react=__webpack_require__(5),_react2=_interopRequireDefault(_react);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){var d={};for(var c in a)0<=b.indexOf(c)||Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}module.exports=exports['default'];


/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaymentRecommendationData", function() { return getPaymentRecommendationData; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_experimental__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var _woocommerce_experimental__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var gridicons_dist_external__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(534);
/* harmony import */ var gridicons_dist_external__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(gridicons_dist_external__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13);
/* harmony import */ var _payment_recommendations_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(584);
/* harmony import */ var _payment_recommendations_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_payment_recommendations_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _dashboard_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59);
/* harmony import */ var _lib_notices__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(504);
/* harmony import */ var _task_list_tasks_PaymentGatewaySuggestions_components_WCPay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(536);


/**
 * External dependencies
 */











/**
 * Internal dependencies
 */





const SEE_MORE_LINK = 'https://woocommerce.com/product-category/woocommerce-extensions/payment-gateways/?utm_source=payments_recommendations';
const DISMISS_OPTION = 'woocommerce_setting_payments_recommendations_hidden';
function getPaymentRecommendationData(select) {
  const {
    getOption,
    isResolving: isResolvingOption
  } = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__["OPTIONS_STORE_NAME"]);
  const {
    getSettings
  } = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__["SETTINGS_STORE_NAME"]);
  const {
    getRecommendedPlugins
  } = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__["PLUGINS_STORE_NAME"]);
  const {
    general: settings = {}
  } = getSettings('general');
  const hidden = getOption(DISMISS_OPTION);
  const countryCode = settings.woocommerce_default_country ? Object(_dashboard_utils__WEBPACK_IMPORTED_MODULE_12__[/* getCountryCode */ "b"])(settings.woocommerce_default_country) : null;
  const countrySupported = countryCode ? Object(_task_list_tasks_PaymentGatewaySuggestions_components_WCPay__WEBPACK_IMPORTED_MODULE_14__[/* isWCPaySupported */ "c"])(countryCode) : false;
  const isRequestingOptions = isResolvingOption('getOption', [DISMISS_OPTION]);
  const displayable = !isRequestingOptions && hidden !== 'yes' && countrySupported;
  let plugins;

  if (displayable) {
    // don't get recommended plugins until it is displayable.
    plugins = getRecommendedPlugins('payments');
  }

  return {
    displayable,
    recommendedPlugins: plugins
  };
}

const PaymentRecommendations = () => {
  const [installingPlugin, setInstallingPlugin] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    updateOptions
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__["OPTIONS_STORE_NAME"]);
  const {
    installAndActivatePlugins
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__["PLUGINS_STORE_NAME"]);
  const {
    displayable,
    recommendedPlugins
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useSelect"])(getPaymentRecommendationData);
  const triggeredPageViewRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  const shouldShowRecommendations = displayable && recommendedPlugins && recommendedPlugins.length > 0;
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (shouldShowRecommendations && !triggeredPageViewRef.current) {
      triggeredPageViewRef.current = true;
      Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8__["recordEvent"])('settings_payments_recommendations_pageview', {});
    }
  }, [shouldShowRecommendations]);

  if (!shouldShowRecommendations) {
    return null;
  }

  const dismissPaymentRecommendations = () => {
    Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8__["recordEvent"])('settings_payments_recommendations_dismiss', {});
    updateOptions({
      [DISMISS_OPTION]: 'yes'
    });
  };

  const setupPlugin = plugin => {
    if (installingPlugin) {
      return;
    }

    setInstallingPlugin(plugin.product);
    Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8__["recordEvent"])('settings_payments_recommendations_setup', {
      extension_selected: plugin.product
    });
    installAndActivatePlugins([plugin.product]).then(() => {
      window.location.href = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_10__[/* getAdminLink */ "e"])(plugin['setup-link'].replace('/wp-admin/', ''));
    }).catch(response => {
      Object(_lib_notices__WEBPACK_IMPORTED_MODULE_13__[/* createNoticesFromResponse */ "a"])(response);
      setInstallingPlugin(null);
    });
  };

  const pluginsList = (recommendedPlugins || []).map(plugin => {
    return {
      key: plugin.slug,
      title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, plugin.title, plugin.recommended && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__["Pill"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Recommended', 'woocommerce-admin'))),
      content: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__["decodeEntities"])(plugin.copy),
      after: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        isSecondary: true,
        onClick: () => setupPlugin(plugin),
        isBusy: installingPlugin === plugin.product,
        disabled: !!installingPlugin
      }, plugin['button-text']),
      before: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
        src: plugin.icon,
        alt: ""
      })
    };
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    size: "medium",
    className: "woocommerce-recommended-payments-card"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["CardHeader"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woocommerce-recommended-payments-card__header"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    variant: "title.small",
    as: "p",
    size: "20",
    lineHeight: "28px"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Recommended ways to get paid', 'woocommerce-admin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    className: 'woocommerce-recommended-payments__header-heading',
    variant: "caption",
    as: "p",
    size: "12",
    lineHeight: "16px"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('We recommend adding one of the following payment extensions to your store. The extension will be installed and activated for you when you click "Get started".', 'woocommerce-admin'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woocommerce-card__menu woocommerce-card__header-item"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__["EllipsisMenu"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Task List Options', 'woocommerce-admin'),
    renderContent: () => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "woocommerce-review-activity-card__section-controls"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: dismissPaymentRecommendations
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hide this', 'woocommerce-admin')))
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__["List"], {
    items: pluginsList
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["CardFooter"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    href: SEE_MORE_LINK,
    target: "_blank",
    isTertiary: true
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('See more options', 'woocommerce-admin'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(gridicons_dist_external__WEBPACK_IMPORTED_MODULE_9___default.a, {
    size: 18
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (PaymentRecommendations);

/***/ })

}]);