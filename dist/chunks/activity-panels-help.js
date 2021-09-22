(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[7],{

/***/ 616:
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_experimental__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(105);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(145);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(617);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_11__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



var ActivityHeader = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ActivityHeader, _Component);

  var _super = _createSuper(ActivityHeader);

  function ActivityHeader() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ActivityHeader);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ActivityHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          menu = _this$props.menu,
          subtitle = _this$props.subtitle,
          title = _this$props.title,
          unreadMessages = _this$props.unreadMessages;
      var cardClassName = classnames__WEBPACK_IMPORTED_MODULE_7___default()({
        'woocommerce-layout__inbox-panel-header': subtitle,
        'woocommerce-layout__activity-panel-header': !subtitle
      }, className);
      var countUnread = unreadMessages ? unreadMessages : 0;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: cardClassName
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "woocommerce-layout__inbox-title"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "e"], {
        variant: "title.small"
      }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "e"], {
        variant: "button"
      }, countUnread > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", {
        className: "woocommerce-layout__inbox-badge"
      }, unreadMessages))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "woocommerce-layout__inbox-subtitle"
      }, subtitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "e"], {
        variant: "body.small"
      }, subtitle)), menu && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "woocommerce-layout__activity-panel-header-menu"
      }, menu));
    }
  }]);

  return ActivityHeader;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

ActivityHeader.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  unreadMessages: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  title: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  menu: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    type: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf([_woocommerce_components__WEBPACK_IMPORTED_MODULE_10__["EllipsisMenu"]])
  })
};
/* harmony default export */ __webpack_exports__["a"] = (ActivityHeader);

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETUP_TASK_HELP_ITEMS_FILTER", function() { return SETUP_TASK_HELP_ITEMS_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPanel", function() { return HelpPanel; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(192);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(107);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(140);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(405);
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce_experimental__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(105);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(141);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(426);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(706);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(630);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(85);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(145);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(59);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(678);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(92);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _activity_header__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(616);
/* harmony import */ var _dashboard_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(231);
/* harmony import */ var _task_list_tasks_payments_methods__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(635);








/**
 * External dependencies
 */












/**
 * Internal dependencies
 */




var SETUP_TASK_HELP_ITEMS_FILTER = 'woocommerce_admin_setup_task_help_items';

function getHomeItems() {
  return [{
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Get Support', 'woocommerce-admin'),
    link: 'https://woocommerce.com/my-account/create-a-ticket/'
  }, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Home Screen', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/home-screen'
  }, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Inbox', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/home-screen/#section-2'
  }, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Stats Overview', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/home-screen/#section-4'
  }, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Store Management', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/home-screen/#section-5'
  }, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Store Setup Checklist', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/woocommerce-setup-wizard/#store-setup-checklist'
  }];
}

function getAppearanceItems() {
  return [{
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Showcase your products and tailor your shopping experience using Blocks', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/woocommerce-blocks/?utm_source=help_panel'
  }, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Manage Store Notice, Catalog View and Product Images', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/woocommerce-customizer/?utm_source=help_panel'
  }, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('How to choose and change a theme', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/choose-change-theme/?utm_source=help_panel'
  }];
}

function getPaymentsItems(props) {
  var countryCode = props.countryCode,
      onboardingStatus = props.onboardingStatus,
      profileItems = props.profileItems;
  var paymentMethods = props.getPaymentMethods({
    activePlugins: [],
    countryCode: countryCode,
    onboardingStatus: onboardingStatus,
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
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Which Payment Option is Right for Me?', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/premium-payment-gateway-extensions/?utm_source=help_panel'
  }, showWCPay && {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('WooCommerce Payments Start Up Guide', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/payments//?utm_source=help_panel'
  }, showWCPay && {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('WooCommerce Payments FAQs', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/documentation/woocommerce-payments/woocommerce-payments-faqs/?utm_source=help_panel'
  }, showStripe && {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Stripe Setup and Configuration', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/stripe/?utm_source=help_panel'
  }, showPayPal && {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('PayPal Checkout Setup and Configuration', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/2-0/woocommerce-paypal-payments/#section-3'
  }, showSquare && {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Square - Get started', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/woocommerce-square/?utm_source=help_panel'
  }, showKlarnaCheckout && {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Klarna - Introduction', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/klarna-checkout/?utm_source=help_panel'
  }, showKlarnaPayments && {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Klarna - Introduction', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/klarna-payments/?utm_source=help_panel'
  }, showPayFast && {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('PayFast Setup and Configuration', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/payfast-payment-gateway/?utm_source=help_panel'
  }, showEway && {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('eWAY Setup and Configuration', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/eway/?utm_source=help_panel'
  }, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Direct Bank Transfer (BACS)', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/bacs/?utm_source=help_panel'
  }, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Cash on Delivery', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/cash-on-delivery/?utm_source=help_panel'
  }].filter(Boolean);
}

function getProductsItems() {
  return [{
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Adding and Managing Products', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/managing-products/?utm_source=help_panel'
  }, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Import products using the CSV Importer and Exporter', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/product-csv-importer-exporter/?utm_source=help_panel'
  }, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Migrate products using Cart2Cart', 'woocommerce-admin'),
    link: 'https://woocommerce.com/products/cart2cart/?utm_source=help_panel'
  }, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Learn more about setting up products', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/documentation/plugins/woocommerce/getting-started/setup-products/?utm_source=help_panel'
  }];
}

function getShippingItems(_ref) {
  var activePlugins = _ref.activePlugins,
      countryCode = _ref.countryCode;
  var showWCS = countryCode === 'US' && !activePlugins.includes('woocommerce-services');
  return [{
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Setting up Shipping Zones', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/setting-up-shipping-zones/?utm_source=help_panel'
  }, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Core Shipping Options', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/documentation/plugins/woocommerce/getting-started/shipping/core-shipping-options/?utm_source=help_panel'
  }, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Product Shipping Classes', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/product-shipping-classes/?utm_source=help_panel'
  }, showWCS && {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('WooCommerce Shipping setup and configuration', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/woocommerce-services/#section-3/?utm_source=help_panel'
  }, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Learn more about configuring your shipping settings', 'woocommerce-admin'),
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
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Setting up Taxes in WooCommerce', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/document/setting-up-taxes-in-woocommerce/?utm_source=help_panel'
  }, showWCS && {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Automated Tax calculation using WooCommerce Tax', 'woocommerce-admin'),
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
      return getHomeItems();
  }
}

function handleOnItemClick(props, event) {
  var taskName = props.taskName; // event isn't initially set when triggering link with the keyboard.

  if (!event) {
    return;
  }

  props.recordEvent('help_panel_click', {
    task_name: taskName || 'homescreen',
    link: event.currentTarget.href
  });
}

function getListItems(props) {
  var itemsByType = getItems(props);
  var genericDocsLink = {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('WooCommerce Docs', 'woocommerce-admin'),
    link: 'https://docs.woocommerce.com/?utm_source=help_panel'
  };
  itemsByType.push(genericDocsLink);
  var filteredItems = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_10__["applyFilters"])(SETUP_TASK_HELP_ITEMS_FILTER, itemsByType, props.taskName, props); // Filter out items that aren't objects without `title` and `link` properties.

  var validatedItems = Array.isArray(filteredItems) ? filteredItems.filter(function (item) {
    return item instanceof Object && item.title && item.link;
  }) : []; // Default empty array to the generic docs link.

  if (!validatedItems.length) {
    validatedItems = [genericDocsLink];
  }

  var onClick = Object(lodash__WEBPACK_IMPORTED_MODULE_14__["partial"])(handleOnItemClick, props);
  return validatedItems.map(function (item) {
    return {
      title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_8__[/* Text */ "e"], {
        as: "div",
        variant: "button"
      }, item.title),
      before: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_icons__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]
      }),
      after: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_icons__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"]
      }),
      linkType: 'external',
      target: '_blank',
      href: item.link,
      onClick: onClick
    };
  });
}

var HelpPanel = function HelpPanel(props) {
  var taskName = props.taskName;
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    props.recordEvent('help_panel_open', {
      task_name: taskName || 'homescreen'
    });
  }, [taskName]);
  var listItems = getListItems(props);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_activity_header__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Documentation', 'woocommerce-admin')
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_16__["Section"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_16__["List"], {
    items: listItems,
    className: "woocommerce-quick-links__list"
  })));
};
HelpPanel.defaultProps = {
  getPaymentMethods: _task_list_tasks_payments_methods__WEBPACK_IMPORTED_MODULE_22__[/* getPaymentMethods */ "a"],
  getSetting: _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_15__[/* getSetting */ "g"],
  recordEvent: _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_19__["recordEvent"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_18__[/* compose */ "a"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["withSelect"])(function (select) {
  var _select = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_17__["ONBOARDING_STORE_NAME"]),
      getProfileItems = _select.getProfileItems,
      getTasksStatus = _select.getTasksStatus;

  var _select2 = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_17__["SETTINGS_STORE_NAME"]),
      getSettings = _select2.getSettings;

  var _select3 = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_17__["PLUGINS_STORE_NAME"]),
      getActivePlugins = _select3.getActivePlugins;

  var _getSettings = getSettings('general'),
      _getSettings$general = _getSettings.general,
      generalSettings = _getSettings$general === void 0 ? {} : _getSettings$general;

  var activePlugins = getActivePlugins();
  var onboardingStatus = getTasksStatus();
  var profileItems = getProfileItems();
  var countryCode = Object(_dashboard_utils__WEBPACK_IMPORTED_MODULE_21__[/* getCountryCode */ "b"])(generalSettings.woocommerce_default_country);
  return {
    activePlugins: activePlugins,
    countryCode: countryCode,
    onboardingStatus: onboardingStatus,
    profileItems: profileItems
  };
}))(HelpPanel));

/***/ })

}]);