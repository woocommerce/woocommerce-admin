(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[45],{

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createNoticesFromResponse; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

function createNoticesFromResponse(response) {
  const {
    createNotice
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["dispatch"])('core/notices');

  if (response.error_data && response.errors && Object.keys(response.errors).length) {
    // Loop over multi-error responses.
    Object.keys(response.errors).forEach(errorKey => {
      createNotice('error', response.errors[errorKey].join(' '));
    });
  } else if (response.message) {
    // Handle generic messages.
    createNotice(response.code ? 'error' : 'success', response.message);
  }
}

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=_default;var _react=_interopRequireDefault(__webpack_require__(6)),_excluded=["size","onClick","icon","className"];function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function _default(a){var b=a.size,c=void 0===b?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,_excluded),h=["gridicon","gridicons-external",f,!!function isModulo18(a){return 0==a%18}(c)&&"needs-offset",!1,!1].filter(Boolean).join(" ");return _react["default"].createElement("svg",_extends({className:h,height:c,width:c,onClick:d},g,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M19 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6v2H5v12h12v-6h2zM13 3v2h4.586l-7.793 7.793 1.414 1.414L19 6.414V11h2V3h-8z"})))}


/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaymentRecommendationData", function() { return getPaymentRecommendationData; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_experimental__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);
/* harmony import */ var _woocommerce_experimental__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var gridicons_dist_external__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(564);
/* harmony import */ var gridicons_dist_external__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(gridicons_dist_external__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _payment_recommendations_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(625);
/* harmony import */ var _payment_recommendations_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_payment_recommendations_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_notices__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(531);


/**
 * External dependencies
 */











/**
 * Internal dependencies
 */



const SEE_MORE_LINK = 'https://woocommerce.com/product-category/woocommerce-extensions/payment-gateways/?utm_source=payments_recommendations';
function getPaymentRecommendationData(select) {
  const {
    getRecommendedPlugins
  } = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__["PLUGINS_STORE_NAME"]);
  const plugins = getRecommendedPlugins('payments');
  const isLoading = plugins === undefined;
  return {
    recommendedPlugins: plugins,
    isLoading
  };
}
const WcPayPromotionGateway = document.querySelector('[data-gateway_id="pre_install_woocommerce_payments_promotion"]');

const PaymentRecommendations = () => {
  const [installingPlugin, setInstallingPlugin] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    installAndActivatePlugins,
    dismissRecommendedPlugins,
    invalidateResolution
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__["PLUGINS_STORE_NAME"]);
  const {
    createNotice
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])('core/notices');
  const {
    recommendedPlugins,
    isLoading
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useSelect"])(getPaymentRecommendationData);
  const triggeredPageViewRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  const shouldShowRecommendations = recommendedPlugins && recommendedPlugins.length > 0;
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if ((shouldShowRecommendations || WcPayPromotionGateway && !isLoading) && !triggeredPageViewRef.current) {
      triggeredPageViewRef.current = true;
      const eventProps = (recommendedPlugins || []).reduce((props, plugin) => {
        if (plugin.plugins && plugin.plugins.length > 0) {
          return { ...props,
            [plugin.plugins[0].replace(/\-/g, '_') + '_displayed']: true
          };
        }

        return props;
      }, {
        woocommerce_payments_displayed: !!WcPayPromotionGateway
      });
      Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8__["recordEvent"])('settings_payments_recommendations_pageview', eventProps);
    }
  }, [shouldShowRecommendations, WcPayPromotionGateway, isLoading]);

  if (!shouldShowRecommendations) {
    return null;
  }

  const dismissPaymentRecommendations = async () => {
    Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8__["recordEvent"])('settings_payments_recommendations_dismiss', {});
    const success = await dismissRecommendedPlugins('payments');

    if (success) {
      invalidateResolution('getRecommendedPlugins', ['payments']);
    } else {
      createNotice('error', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('There was a problem hiding the "Recommended ways to get paid" card.', 'woocommerce-admin'));
    }
  };

  const setupPlugin = plugin => {
    if (installingPlugin) {
      return;
    }

    setInstallingPlugin(plugin.id);
    Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8__["recordEvent"])('settings_payments_recommendations_setup', {
      extension_selected: plugin.plugins[0]
    });
    installAndActivatePlugins([plugin.plugins[0]]).then(() => {
      window.location.href = Object(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_10__["getAdminLink"])(plugin['setup-link'].replace('/wp-admin/', ''));
    }).catch(response => {
      Object(_lib_notices__WEBPACK_IMPORTED_MODULE_12__[/* createNoticesFromResponse */ "a"])(response);
      setInstallingPlugin(null);
    });
  };

  const pluginsList = (recommendedPlugins || []).map(plugin => {
    return {
      key: plugin.id,
      title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, plugin.title, plugin.recommended && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__["Pill"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Recommended', 'woocommerce-admin'))),
      content: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__["decodeEntities"])(plugin.content),
      after: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        isSecondary: true,
        onClick: () => setupPlugin(plugin),
        isBusy: installingPlugin === plugin.id,
        disabled: !!installingPlugin
      }, plugin['button-text']),
      before: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
        src: plugin.image,
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