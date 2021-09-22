(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[8],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useInstanceId; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

var instanceMap = new WeakMap();
/**
 * Creates a new id for a given object.
 *
 * @param {Object} object Object reference to create an id for.
 */

function createId(object) {
  var instances = instanceMap.get(object) || 0;
  instanceMap.set(object, instances + 1);
  return instances;
}
/**
 * Provides a unique instance ID.
 *
 * @param {Object} object Object reference to create an id for.
 * @param {string} prefix Prefix for the unique id.
 */


function useInstanceId(object, prefix) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var id = createId(object);
    return prefix ? "".concat(prefix, "-").concat(id) : id;
  }, [object]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(759);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(750);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_10__);







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
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        variant: "title.small"
      }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        variant: "button"
      }, countUnread > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: "woocommerce-layout__inbox-badge"
      }, unreadMessages))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "woocommerce-layout__inbox-subtitle"
      }, subtitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
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
    type: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf([_woocommerce_components__WEBPACK_IMPORTED_MODULE_10__["EllipsisMenu"]])
  })
};
/* harmony default export */ __webpack_exports__["a"] = (ActivityHeader);

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "SETUP_TASK_HELP_ITEMS_FILTER", function() { return /* binding */ SETUP_TASK_HELP_ITEMS_FILTER; });
__webpack_require__.d(__webpack_exports__, "HelpPanel", function() { return /* binding */ help_HelpPanel; });

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/text/index.js + 3 modules
var build_module_text = __webpack_require__(759);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(24);

// EXTERNAL MODULE: external {"this":["wp","hooks"]}
var external_this_wp_hooks_ = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__(452);

// EXTERNAL MODULE: ./node_modules/@wordpress/primitives/build-module/svg/index.js
var svg = __webpack_require__(51);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/page.js


/**
 * WordPress dependencies
 */

var page = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M7 5.5h10a.5.5 0 01.5.5v12a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM17 4H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2zm-1 3.75H8v1.5h8v-1.5zM8 11h8v1.5H8V11zm6 3.25H8v1.5h6v-1.5z"
}));
/* harmony default export */ var library_page = (page);
//# sourceMappingURL=page.js.map
// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/chevron-right.js
var chevron_right = __webpack_require__(789);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: ./client/settings/index.js
var settings = __webpack_require__(28);

// EXTERNAL MODULE: external {"this":["wc","components"]}
var external_this_wc_components_ = __webpack_require__(55);

// EXTERNAL MODULE: external {"this":["wc","data"]}
var external_this_wc_data_ = __webpack_require__(46);

// EXTERNAL MODULE: ./client/header/activity-panel/activity-header/index.js
var activity_header = __webpack_require__(748);

// EXTERNAL MODULE: ./client/dashboard/utils.js
var utils = __webpack_require__(148);

// EXTERNAL MODULE: ./client/lib/tracks.js
var tracks = __webpack_require__(63);

// EXTERNAL MODULE: ./client/task-list/tasks/payments/methods.js + 11 modules
var methods = __webpack_require__(773);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(298);

// CONCATENATED MODULE: ./client/header/activity-panel/panels/help.js


/**
 * External dependencies
 */







/**
 * WooCommerce dependencies
 */




/**
 * Internal dependencies
 */






var SETUP_TASK_HELP_ITEMS_FILTER = 'woocommerce_admin_setup_task_help_items';

function getAppearanceItems() {
  return [{
    title: Object(external_this_wp_i18n_["__"])('Showcase your products and tailor your shopping experience using Blocks', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/woocommerce-blocks/?utm_source=help_panel'
  }, {
    title: Object(external_this_wp_i18n_["__"])('Manage Store Notice, Catalog View and Product Images', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/woocommerce-customizer/?utm_source=help_panel'
  }, {
    title: Object(external_this_wp_i18n_["__"])('How to choose and change a theme', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/choose-change-theme/?utm_source=help_panel'
  }];
}

function getPaymentsItems(props) {
  var countryCode = props.countryCode,
      profileItems = props.profileItems;
  var paymentMethods = props.getPaymentMethods({
    activePlugins: [],
    countryCode: countryCode,
    options: {},
    profileItems: profileItems
  });

  var methodIsVisible = function methodIsVisible(methodKey) {
    return Boolean(paymentMethods.find(function (method) {
      return method.key === methodKey;
    }));
  };

  var showWCPay = methodIsVisible('wcpay');
  var showStripe = methodIsVisible('stripe');
  var showKlarnaCheckout = methodIsVisible('klarna_checkout');
  var showKlarnaPayments = methodIsVisible('klarna_payments');
  var showPayPal = methodIsVisible('paypal');
  var showSquare = methodIsVisible('square');
  var showPayFast = methodIsVisible('payfast');
  var showEway = methodIsVisible('eway');
  return [{
    title: Object(external_this_wp_i18n_["__"])('Which Payment Option is Right for Me?', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/premium-payment-gateway-extensions/?utm_source=help_panel'
  }, showWCPay && {
    title: Object(external_this_wp_i18n_["__"])('WooCommerce Payments Start Up Guide', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/payments//?utm_source=help_panel'
  }, showWCPay && {
    title: Object(external_this_wp_i18n_["__"])('WooCommerce Payments FAQs', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/documentation/woocommerce-payments/woocommerce-payments-faqs/?utm_source=help_panel'
  }, showStripe && {
    title: Object(external_this_wp_i18n_["__"])('Stripe Setup and Configuration', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/stripe/?utm_source=help_panel'
  }, showPayPal && {
    title: Object(external_this_wp_i18n_["__"])('PayPal Checkout Setup and Configuration', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/paypal-express-checkout/?utm_source=help_panel'
  }, showSquare && {
    title: Object(external_this_wp_i18n_["__"])('Square - Get started', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/woocommerce-square/?utm_source=help_panel'
  }, showKlarnaCheckout && {
    title: Object(external_this_wp_i18n_["__"])('Klarna - Introduction', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/klarna-checkout/?utm_source=help_panel'
  }, showKlarnaPayments && {
    title: Object(external_this_wp_i18n_["__"])('Klarna - Introduction', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/klarna-payments/?utm_source=help_panel'
  }, showPayFast && {
    title: Object(external_this_wp_i18n_["__"])('PayFast Setup and Configuration', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/payfast-payment-gateway/?utm_source=help_panel'
  }, showEway && {
    title: Object(external_this_wp_i18n_["__"])('eWAY Setup and Configuration', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/eway/?utm_source=help_panel'
  }, {
    title: Object(external_this_wp_i18n_["__"])('Direct Bank Transfer (BACS)', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/bacs/?utm_source=help_panel'
  }, {
    title: Object(external_this_wp_i18n_["__"])('Cash on Delivery', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/cash-on-delivery/?utm_source=help_panel'
  }].filter(Boolean);
}

function getProductsItems() {
  return [{
    title: Object(external_this_wp_i18n_["__"])('Adding and Managing Products', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/managing-products/?utm_source=help_panel'
  }, {
    title: Object(external_this_wp_i18n_["__"])('Import products using the CSV Importer and Exporter', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/product-csv-importer-exporter/?utm_source=help_panel'
  }, {
    title: Object(external_this_wp_i18n_["__"])('Migrate products using Cart2Cart', 'woocommerce-admin'),
    link: 'https://woocommerce.com/products/cart2cart/?utm_source=help_panel'
  }, {
    title: Object(external_this_wp_i18n_["__"])('Learn more about setting up products', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/documentation/plugins/woocommerce/getting-started/setup-products/?utm_source=help_panel'
  }];
}

function getShippingItems(_ref) {
  var activePlugins = _ref.activePlugins,
      countryCode = _ref.countryCode;
  var showWCS = countryCode === 'US' && !activePlugins.includes('woocommerce-services');
  return [{
    title: Object(external_this_wp_i18n_["__"])('Setting up Shipping Zones', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/setting-up-shipping-zones/?utm_source=help_panel'
  }, {
    title: Object(external_this_wp_i18n_["__"])('Core Shipping Options', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/documentation/plugins/woocommerce/getting-started/shipping/core-shipping-options/?utm_source=help_panel'
  }, {
    title: Object(external_this_wp_i18n_["__"])('Product Shipping Classes', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/product-shipping-classes/?utm_source=help_panel'
  }, showWCS && {
    title: Object(external_this_wp_i18n_["__"])('WooCommerce Shipping setup and configuration', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/woocommerce-services/#section-3/?utm_source=help_panel'
  }, {
    title: Object(external_this_wp_i18n_["__"])('Learn more about configuring your shipping settings', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/documentation/plugins/woocommerce/getting-started/shipping/?utm_source=help_panel'
  }].filter(Boolean);
}

function getTaxItems(props) {
  var countryCode = props.countryCode;

  var _props$getSetting = props.getSetting('onboarding', {}),
      _props$getSetting$aut = _props$getSetting.automatedTaxSupportedCountries,
      automatedTaxSupportedCountries = _props$getSetting$aut === void 0 ? [] : _props$getSetting$aut,
      taxJarActivated = _props$getSetting.taxJarActivated;

  var showWCS = !taxJarActivated && // WCS integration doesn't work with the official TaxJar plugin.
  automatedTaxSupportedCountries.includes(countryCode);
  return [{
    title: Object(external_this_wp_i18n_["__"])('Setting up Taxes in WooCommerce', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/setting-up-taxes-in-woocommerce/?utm_source=help_panel'
  }, showWCS && {
    title: Object(external_this_wp_i18n_["__"])('Automated Tax calculation using WooCommerce Services', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/woocommerce-services/?utm_source=help_panel#section-10'
  }].filter(Boolean);
}

function getItems(props) {
  var taskName = props.taskName;

  switch (taskName) {
    case 'products':
      return getProductsItems();

    case 'appearance':
      return getAppearanceItems();

    case 'shipping':
      return getShippingItems(props);

    case 'tax':
      return getTaxItems(props);

    case 'payments':
      return getPaymentsItems(props);

    default:
      return [];
  }
}

function handleOnItemClick(props, event) {
  var taskName = props.taskName; // event isn't initially set when triggering link with the keyboard.

  if (!event) {
    return;
  }

  props.recordEvent('help_panel_click', {
    task_name: taskName,
    link: event.currentTarget.href
  });
}

function getListItems(props) {
  var itemsByType = getItems(props);
  var genericDocsLink = {
    title: Object(external_this_wp_i18n_["__"])('WooCommerce Docs', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/?utm_source=help_panel'
  };
  itemsByType.push(genericDocsLink);
  var filteredItems = Object(external_this_wp_hooks_["applyFilters"])(SETUP_TASK_HELP_ITEMS_FILTER, itemsByType, props.taskName, props); // Filter out items that aren't objects without `title` and `link` properties.

  var validatedItems = Array.isArray(filteredItems) ? filteredItems.filter(function (item) {
    return item instanceof Object && item.title && item.link;
  }) : []; // Default empty array to the generic docs link.

  if (!validatedItems.length) {
    validatedItems = [genericDocsLink];
  }

  var onClick = Object(external_lodash_["partial"])(handleOnItemClick, props);
  return validatedItems.map(function (item) {
    return {
      title: Object(external_this_wp_element_["createElement"])(build_module_text["a" /* default */], {
        as: "div",
        variant: "button"
      }, item.title),
      before: Object(external_this_wp_element_["createElement"])(icon["a" /* default */], {
        icon: library_page
      }),
      after: Object(external_this_wp_element_["createElement"])(icon["a" /* default */], {
        icon: chevron_right["a" /* default */]
      }),
      linkType: 'external',
      target: '_blank',
      href: item.link,
      onClick: onClick
    };
  });
}

var help_HelpPanel = function HelpPanel(props) {
  var taskName = props.taskName;
  Object(external_this_wp_element_["useEffect"])(function () {
    props.recordEvent('help_panel_open', {
      task_name: taskName
    });
  }, [taskName]);
  var listItems = getListItems(props);
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(activity_header["a" /* default */], {
    title: Object(external_this_wp_i18n_["__"])('Documentation', 'woocommerce-admin')
  }), Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Section"], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["List"], {
    items: listItems,
    className: "woocommerce-quick-links__list"
  })));
};
help_HelpPanel.defaultProps = {
  getPaymentMethods: methods["a" /* getPaymentMethods */],
  getSetting: settings["g" /* getSetting */],
  recordEvent: tracks["b" /* recordEvent */]
};
/* harmony default export */ var help = __webpack_exports__["default"] = (Object(redux["a" /* compose */])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select(external_this_wc_data_["ONBOARDING_STORE_NAME"]),
      getProfileItems = _select.getProfileItems;

  var _select2 = select(external_this_wc_data_["SETTINGS_STORE_NAME"]),
      getSettings = _select2.getSettings;

  var _select3 = select(external_this_wc_data_["PLUGINS_STORE_NAME"]),
      getActivePlugins = _select3.getActivePlugins;

  var _getSettings = getSettings('general'),
      _getSettings$general = _getSettings.general,
      generalSettings = _getSettings$general === void 0 ? {} : _getSettings$general;

  var activePlugins = getActivePlugins();
  var profileItems = getProfileItems();
  var countryCode = Object(utils["b" /* getCountryCode */])(generalSettings.woocommerce_default_country);
  return {
    activePlugins: activePlugins,
    countryCode: countryCode,
    profileItems: profileItems
  };
}))(help_HelpPanel));

/***/ })

}]);