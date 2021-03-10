(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[49],{

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getInAppPurchaseUrl; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * Returns an in-app-purchase URL.
 *
 * @param {string} url
 * @param {Object} queryArgs
 * @return {string} url with in-app-purchase query parameters
 */

var getInAppPurchaseUrl = function getInAppPurchaseUrl(url) {
  var queryArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _window$location = window.location,
      pathname = _window$location.pathname,
      search = _window$location.search;
  var connectNonce = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__[/* getSetting */ "g"])('connectNonce', '');
  queryArgs = _objectSpread({
    'wccom-site': Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__[/* getSetting */ "g"])('siteUrl'),
    // If the site is installed in a directory the directory must be included in the back param path.
    'wccom-back': pathname + search,
    'wccom-woo-version': Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__[/* getSetting */ "g"])('wcVersion'),
    'wccom-connect-nonce': connectNonce
  }, queryArgs);
  return Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__["addQueryArgs"])(url, queryArgs);
};

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);


/**
 * WordPress dependencies
 */

var chevronRight = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__[/* SVG */ "b"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__[/* Path */ "a"], {
  d: "M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"
}));
/* harmony default export */ __webpack_exports__["a"] = (chevronRight);
//# sourceMappingURL=chevron-right.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return groupListOfObjectsBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setAllPropsToValue; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Returns an object with items grouped by the sent key.
 *
 * @param {Array} array array of objects.
 * @param {string} key the object prop that will be used to group elements.
 * @param {string} defaultKey if the key is not found in the object, it will use this value.
 * @return {Object} Object that contains the grouped elements.
 */
var groupListOfObjectsBy = function groupListOfObjectsBy(array, key) {
  var defaultKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'undefined';

  if (array && Array.isArray(array) && array.length) {
    if (!key) {
      return array;
    }

    return array.reduce(function (result, currentValue) {
      if (!currentValue[key]) {
        currentValue[key] = defaultKey;
      }

      (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
      return result;
    }, {});
  }

  return {};
};
/**
 * Returns a (shallow) copy of an object with all its props set to the specified value
 *
 * @param {*} obj the Object to copy.
 * @param {*} value the value to set all props on the object to.
 */

var setAllPropsToValue = function setAllPropsToValue(obj, value) {
  return Object.entries(obj).reduce(function (acc, _ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 1),
        key = _ref2[0];

    return _objectSpread(_objectSpread({}, acc), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, value));
  }, {});
};

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return validateStoreAddress; });
/* unused harmony export getCountryStateOptions */
/* unused harmony export useGetCountryStateAutofill */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreAddress; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_8__);





/**
 * External dependencies
 */







var _getSetting = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_7__[/* getSetting */ "g"])('dataEndpoints', {
  countries: {}
}),
    countries = _getSetting.countries;
/**
 * Form validation.
 *
 * @param {Object} values Keyed values of all fields in the form.
 * @return {Object} Key value of fields and error messages, { myField: 'This field is required' }
 */


function validateStoreAddress(values) {
  var errors = {};

  if (!values.addressLine1.trim().length) {
    errors.addressLine1 = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Please add an address', 'woocommerce-admin');
  }

  if (!values.countryState.trim().length) {
    errors.countryState = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Please select a country / region', 'woocommerce-admin');
  }

  if (!values.city.trim().length) {
    errors.city = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Please add a city', 'woocommerce-admin');
  }

  if (!values.postCode.trim().length) {
    errors.postCode = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Please add a post code', 'woocommerce-admin');
  }

  return errors;
}
/**
 * Get all country and state combinations used for select dropdowns.
 *
 * @return {Object} Select options, { value: 'US:GA', label: 'United States - Georgia' }
 */

function getCountryStateOptions() {
  var countryStateOptions = countries.reduce(function (acc, country) {
    if (!country.states.length) {
      acc.push({
        key: country.code,
        label: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__["decodeEntities"])(country.name)
      });
      return acc;
    }

    var countryStates = country.states.map(function (state) {
      return {
        key: country.code + ':' + state.code,
        label: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__["decodeEntities"])(country.name) + ' — ' + Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__["decodeEntities"])(state.name)
      };
    });
    acc.push.apply(acc, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(countryStates));
    return acc;
  }, []);
  return countryStateOptions;
}
/**
 * Get the autofill countryState fields and set value from filtered options.
 *
 * @param {Array} options Array of filterable options.
 * @param {string} countryState The value of the countryState field.
 * @param {Function} setValue Set value of the countryState input.
 * @return {Object} React component.
 */

function useGetCountryStateAutofill(options, countryState, setValue) {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      autofillCountry = _useState2[0],
      setAutofillCountry = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      autofillState = _useState4[0],
      setAutofillState = _useState4[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var filteredOptions = [];
    var countrySearch = new RegExp(Object(lodash__WEBPACK_IMPORTED_MODULE_6__["escapeRegExp"])(autofillCountry), 'i');

    if (autofillState.length || autofillCountry.length) {
      filteredOptions = options.filter(function (option) {
        return countrySearch.test(option.label);
      });
    }

    if (autofillCountry.length && autofillState.length) {
      var stateSearch = new RegExp(Object(lodash__WEBPACK_IMPORTED_MODULE_6__["escapeRegExp"])(autofillState.replace(/\s/g, '')), 'i');
      filteredOptions = filteredOptions.filter(function (option) {
        return stateSearch.test(option.label.replace('-', '').replace(/\s/g, ''));
      });

      if (filteredOptions.length > 1) {
        var countryKeyOptions = [];
        countryKeyOptions = filteredOptions.filter(function (option) {
          return countrySearch.test(option.key);
        });

        if (countryKeyOptions.length > 0) {
          filteredOptions = countryKeyOptions;
        }
      }

      if (filteredOptions.length > 1) {
        var stateKeyOptions = [];
        stateKeyOptions = filteredOptions.filter(function (option) {
          return stateSearch.test(option.key);
        });

        if (stateKeyOptions.length === 1) {
          filteredOptions = stateKeyOptions;
        }
      }
    }

    if (filteredOptions.length === 1 && countryState !== filteredOptions[0].key) {
      setValue('countryState', filteredOptions[0].key);
    }
  }, [autofillCountry, autofillState, countryState, options, setValue]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("input", {
    onChange: function onChange(event) {
      return setAutofillCountry(event.target.value);
    },
    value: autofillCountry,
    name: "country",
    type: "text",
    className: "woocommerce-select-control__autofill-input",
    tabIndex: "-1",
    autoComplete: "country"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("input", {
    onChange: function onChange(event) {
      return setAutofillState(event.target.value);
    },
    value: autofillState,
    name: "state",
    type: "text",
    className: "woocommerce-select-control__autofill-input",
    tabIndex: "-1",
    autoComplete: "address-level1"
  }));
}
/**
 * Store address fields.
 *
 * @param {Object} props Props for input components.
 * @return {Object} -
 */

function StoreAddress(props) {
  var getInputProps = props.getInputProps,
      setValue = props.setValue;
  var countryStateOptions = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return getCountryStateOptions();
  }, []);
  var countryStateAutofill = useGetCountryStateAutofill(countryStateOptions, getInputProps('countryState').value, setValue);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "woocommerce-store-address-fields"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Address line 1', 'woocommerce-admin'),
    required: true,
    autoComplete: "address-line1"
  }, getInputProps('addressLine1'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Address line 2 (optional)', 'woocommerce-admin'),
    required: true,
    autoComplete: "address-line2"
  }, getInputProps('addressLine2'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Country / Region', 'woocommerce-admin'),
    required: true,
    options: countryStateOptions,
    excludeSelectedOptions: false,
    showAllOnFocus: true,
    isSearchable: true
  }, getInputProps('countryState'), {
    controlClassName: getInputProps('countryState').className
  }), countryStateAutofill), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('City', 'woocommerce-admin'),
    required: true
  }, getInputProps('city'), {
    autoComplete: "address-level2"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Post code', 'woocommerce-admin'),
    required: true,
    autoComplete: "postal-code"
  }, getInputProps('postCode'))));
}

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);


/**
 * WordPress dependencies
 */

var check = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__[/* SVG */ "b"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__[/* Path */ "a"], {
  d: "M18.3 5.6L9.9 16.9l-4.6-3.4-.9 1.2 5.8 4.3 9.3-12.6z"
}));
/* harmony default export */ __webpack_exports__["a"] = (check);
//# sourceMappingURL=check.js.map

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "TaskDashboard", function() { return /* binding */ task_list_TaskDashboard; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(12);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(13);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(9);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(14);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(15);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(5);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external {"this":["wp","compose"]}
var external_this_wp_compose_ = __webpack_require__(20);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(11);

// EXTERNAL MODULE: external {"this":["wc","data"]}
var external_this_wc_data_ = __webpack_require__(22);

// EXTERNAL MODULE: external {"this":["wc","tracks"]}
var external_this_wc_tracks_ = __webpack_require__(27);

// EXTERNAL MODULE: ./client/task-list/style.scss
var style = __webpack_require__(529);

// EXTERNAL MODULE: external {"this":["wp","components"]}
var external_this_wp_components_ = __webpack_require__(4);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);

// EXTERNAL MODULE: external {"this":["wp","htmlEntities"]}
var external_this_wp_htmlEntities_ = __webpack_require__(41);

// EXTERNAL MODULE: ./client/wc-admin-settings/index.js
var wc_admin_settings = __webpack_require__(25);

// EXTERNAL MODULE: external {"this":["wc","components"]}
var external_this_wc_components_ = __webpack_require__(47);

// EXTERNAL MODULE: ./client/dashboard/utils.js
var utils = __webpack_require__(95);

// EXTERNAL MODULE: ./client/lib/sanitize-html/index.js
var sanitize_html = __webpack_require__(508);

// EXTERNAL MODULE: ./client/lib/in-app-purchase.js
var in_app_purchase = __webpack_require__(186);

// CONCATENATED MODULE: ./client/dashboard/components/cart-modal.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */











/**
 * Internal dependencies
 */





var cart_modal_CartModal = /*#__PURE__*/function (_Component) {
  inherits_default()(CartModal, _Component);

  var _super = _createSuper(CartModal);

  function CartModal(props) {
    var _this;

    classCallCheck_default()(this, CartModal);

    _this = _super.call(this, props);
    _this.state = {
      purchaseNowButtonBusy: false,
      purchaseLaterButtonBusy: false
    };
    return _this;
  }

  createClass_default()(CartModal, [{
    key: "onClickPurchaseNow",
    value: function onClickPurchaseNow() {
      var _this$props = this.props,
          productIds = _this$props.productIds,
          onClickPurchaseNow = _this$props.onClickPurchaseNow;
      this.setState({
        purchaseNowButtonBusy: true
      });

      if (!productIds.length) {
        return;
      }

      Object(external_this_wc_tracks_["recordEvent"])('tasklist_modal_proceed_checkout', {
        product_ids: productIds,
        purchase_install: true
      });
      var url = Object(in_app_purchase["a" /* getInAppPurchaseUrl */])('https://woocommerce.com/cart', {
        'wccom-replace-with': productIds.join(',')
      });

      if (onClickPurchaseNow) {
        onClickPurchaseNow(url);
        return;
      }

      window.location = url;
    }
  }, {
    key: "onClickPurchaseLater",
    value: function onClickPurchaseLater() {
      var productIds = this.props.productIds;
      Object(external_this_wc_tracks_["recordEvent"])('tasklist_modal_proceed_checkout', {
        product_ids: productIds,
        purchase_install: false
      });
      this.setState({
        purchaseLaterButtonBusy: true
      });
      this.props.onClickPurchaseLater();
    }
  }, {
    key: "onClose",
    value: function onClose() {
      var _this$props2 = this.props,
          onClose = _this$props2.onClose,
          productIds = _this$props2.productIds;
      Object(external_this_wc_tracks_["recordEvent"])('tasklist_modal_proceed_checkout', {
        product_ids: productIds,
        purchase_install: false
      });
      onClose();
    }
  }, {
    key: "renderProducts",
    value: function renderProducts() {
      var productIds = this.props.productIds;

      var _getSetting = Object(wc_admin_settings["g" /* getSetting */])('onboarding', {}),
          _getSetting$productTy = _getSetting.productTypes,
          productTypes = _getSetting$productTy === void 0 ? {} : _getSetting$productTy,
          _getSetting$themes = _getSetting.themes,
          themes = _getSetting$themes === void 0 ? [] : _getSetting$themes;

      var listItems = [];
      productIds.forEach(function (productId) {
        var productInfo = Object(external_lodash_["find"])(productTypes, function (productType) {
          return productType.product === productId;
        });

        if (productInfo) {
          listItems.push({
            title: productInfo.label,
            content: productInfo.description
          });
        }

        var themeInfo = Object(external_lodash_["find"])(themes, function (theme) {
          return theme.id === productId;
        });

        if (themeInfo) {
          listItems.push({
            title: Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('%s — %s per year', 'woocommerce-admin'), themeInfo.title, Object(external_this_wp_htmlEntities_["decodeEntities"])(themeInfo.price)),
            content: Object(external_this_wp_element_["createElement"])("span", {
              dangerouslySetInnerHTML: Object(sanitize_html["a" /* default */])(themeInfo.excerpt)
            })
          });
        }
      });
      return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["List"], {
        items: listItems
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          purchaseNowButtonBusy = _this$state.purchaseNowButtonBusy,
          purchaseLaterButtonBusy = _this$state.purchaseLaterButtonBusy;
      return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Modal"], {
        title: Object(external_this_wp_i18n_["__"])('Would you like to add the following paid features to your store now?', 'woocommerce-admin'),
        onRequestClose: function onRequestClose() {
          return _this2.onClose();
        },
        className: "woocommerce-cart-modal"
      }, this.renderProducts(), Object(external_this_wp_element_["createElement"])("p", {
        className: "woocommerce-cart-modal__help-text"
      }, Object(external_this_wp_i18n_["__"])("You won't have access to this functionality until the extensions have been purchased and installed.", 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-cart-modal__actions"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        isLink: true,
        isBusy: purchaseLaterButtonBusy,
        onClick: function onClick() {
          return _this2.onClickPurchaseLater();
        }
      }, Object(external_this_wp_i18n_["__"])("I'll do it later", 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        isPrimary: true,
        isBusy: purchaseNowButtonBusy,
        onClick: function onClick() {
          return _this2.onClickPurchaseNow();
        }
      }, Object(external_this_wp_i18n_["__"])('Buy now', 'woocommerce-admin'))));
    }
  }]);

  return CartModal;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var cart_modal = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select(external_this_wc_data_["PLUGINS_STORE_NAME"]),
      getInstalledPlugins = _select.getInstalledPlugins;

  var _select2 = select(external_this_wc_data_["ONBOARDING_STORE_NAME"]),
      getProfileItems = _select2.getProfileItems;

  var profileItems = getProfileItems();
  var installedPlugins = getInstalledPlugins();
  var productIds = Object(utils["e" /* getProductIdsForCart */])(profileItems, false, installedPlugins);
  return {
    profileItems: profileItems,
    productIds: productIds
  };
}))(cart_modal_CartModal));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(8);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(44);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: external {"this":["wp","hooks"]}
var external_this_wp_hooks_ = __webpack_require__(43);

// EXTERNAL MODULE: external {"this":["wc","navigation"]}
var external_this_wc_navigation_ = __webpack_require__(21);

// EXTERNAL MODULE: external {"this":["wp","apiFetch"]}
var external_this_wp_apiFetch_ = __webpack_require__(26);
var external_this_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_this_wp_apiFetch_);

// CONCATENATED MODULE: ./client/task-list/tasks/appearance.js











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function appearance_createSuper(Derived) { var hasNativeReflectConstruct = appearance_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function appearance_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */











/**
 * Internal dependencies
 */

var appearance_Appearance = /*#__PURE__*/function (_Component) {
  inherits_default()(Appearance, _Component);

  var _super = appearance_createSuper(Appearance);

  function Appearance(props) {
    var _this;

    classCallCheck_default()(this, Appearance);

    _this = _super.call(this, props);
    var _props$tasksStatus = props.tasksStatus,
        hasHomepage = _props$tasksStatus.hasHomepage,
        hasProducts = _props$tasksStatus.hasProducts;
    _this.stepVisibility = {
      homepage: !hasHomepage,
      import: !hasProducts
    };
    _this.state = {
      isDirty: false,
      isPending: false,
      logo: null,
      stepIndex: 0,
      isUpdatingLogo: false,
      isUpdatingNotice: false,
      storeNoticeText: props.demoStoreNotice || ''
    };
    _this.completeStep = _this.completeStep.bind(assertThisInitialized_default()(_this));
    _this.createHomepage = _this.createHomepage.bind(assertThisInitialized_default()(_this));
    _this.importProducts = _this.importProducts.bind(assertThisInitialized_default()(_this));
    _this.updateLogo = _this.updateLogo.bind(assertThisInitialized_default()(_this));
    _this.updateNotice = _this.updateNotice.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Appearance, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var themeMods = this.props.tasksStatus.themeMods;

      if (themeMods && themeMods.custom_logo) {
        /* eslint-disable react/no-did-mount-set-state */
        this.setState({
          logo: {
            id: themeMods.custom_logo
          }
        });
        /* eslint-enable react/no-did-mount-set-state */
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      var _this$state = this.state,
          isPending = _this$state.isPending,
          logo = _this$state.logo;
      var demoStoreNotice = this.props.demoStoreNotice;

      if (logo && !logo.url && !isPending) {
        /* eslint-disable react/no-did-update-set-state */
        this.setState({
          isPending: true
        });
        wp.media.attachment(logo.id).fetch().then(function () {
          var logoUrl = wp.media.attachment(logo.id).get('url');

          _this2.setState({
            isPending: false,
            logo: {
              id: logo.id,
              url: logoUrl
            }
          });
        });
        /* eslint-enable react/no-did-update-set-state */
      }

      if (demoStoreNotice && prevProps.demoStoreNotice !== demoStoreNotice) {
        /* eslint-disable react/no-did-update-set-state */
        this.setState({
          storeNoticeText: demoStoreNotice
        });
        /* eslint-enable react/no-did-update-set-state */
      }
    }
  }, {
    key: "completeStep",
    value: function completeStep() {
      var stepIndex = this.state.stepIndex;
      var nextStep = this.getSteps()[stepIndex + 1];

      if (nextStep) {
        this.setState({
          stepIndex: stepIndex + 1
        });
      } else {
        Object(external_this_wc_navigation_["getHistory"])().push(Object(external_this_wc_navigation_["getNewPath"])({}, '/', {}));
      }
    }
  }, {
    key: "importProducts",
    value: function importProducts() {
      var _this3 = this;

      var _this$props = this.props,
          clearTaskStatusCache = _this$props.clearTaskStatusCache,
          createNotice = _this$props.createNotice;
      this.setState({
        isPending: true
      });
      Object(external_this_wc_tracks_["recordEvent"])('tasklist_appearance_import_demo', {});
      external_this_wp_apiFetch_default()({
        path: "".concat(external_this_wc_data_["WC_ADMIN_NAMESPACE"], "/onboarding/tasks/import_sample_products"),
        method: 'POST'
      }).then(function (result) {
        if (result.failed && result.failed.length) {
          createNotice('error', Object(external_this_wp_i18n_["__"])('There was an error importing some of the sample products', 'woocommerce-admin'));
        } else {
          createNotice('success', Object(external_this_wp_i18n_["__"])('All sample products have been imported', 'woocommerce-admin'));
          clearTaskStatusCache();
        }

        _this3.setState({
          isPending: false
        });

        _this3.completeStep();
      }).catch(function (error) {
        createNotice('error', error.message);

        _this3.setState({
          isPending: false
        });
      });
    }
  }, {
    key: "createHomepage",
    value: function createHomepage() {
      var _this4 = this;

      var _this$props2 = this.props,
          clearTaskStatusCache = _this$props2.clearTaskStatusCache,
          createNotice = _this$props2.createNotice;
      this.setState({
        isPending: true
      });
      Object(external_this_wc_tracks_["recordEvent"])('tasklist_appearance_create_homepage', {
        create_homepage: true
      });
      external_this_wp_apiFetch_default()({
        path: '/wc-admin/onboarding/tasks/create_homepage',
        method: 'POST'
      }).then(function (response) {
        clearTaskStatusCache();
        createNotice(response.status, response.message, {
          actions: response.edit_post_link ? [{
            label: Object(external_this_wp_i18n_["__"])('Customize', 'woocommerce-admin'),
            onClick: function onClick() {
              Object(external_this_wc_tracks_["queueRecordEvent"])('tasklist_appearance_customize_homepage', {});
              window.location = "".concat(response.edit_post_link, "&wc_onboarding_active_task=homepage");
            }
          }] : null
        });

        _this4.setState({
          isPending: false
        });

        _this4.completeStep();
      }).catch(function (error) {
        createNotice('error', error.message);

        _this4.setState({
          isPending: false
        });
      });
    }
  }, {
    key: "updateLogo",
    value: function () {
      var _updateLogo = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var _this$props3, clearTaskStatusCache, createNotice, stylesheet, themeMods, updateOptions, logo, updatedThemeMods, update;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props3 = this.props, clearTaskStatusCache = _this$props3.clearTaskStatusCache, createNotice = _this$props3.createNotice, stylesheet = _this$props3.stylesheet, themeMods = _this$props3.themeMods, updateOptions = _this$props3.updateOptions;
                logo = this.state.logo;
                updatedThemeMods = _objectSpread(_objectSpread({}, themeMods), {}, {
                  custom_logo: logo ? logo.id : null
                });
                Object(external_this_wc_tracks_["recordEvent"])('tasklist_appearance_upload_logo');
                this.setState({
                  isUpdatingLogo: true
                });
                _context.next = 7;
                return updateOptions(defineProperty_default()({}, "theme_mods_".concat(stylesheet), updatedThemeMods));

              case 7:
                update = _context.sent;
                clearTaskStatusCache();

                if (update.success) {
                  this.setState({
                    isUpdatingLogo: false
                  });
                  createNotice('success', Object(external_this_wp_i18n_["__"])('Store logo updated sucessfully', 'woocommerce-admin'));
                  this.completeStep();
                } else {
                  createNotice('error', update.message);
                }

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateLogo() {
        return _updateLogo.apply(this, arguments);
      }

      return updateLogo;
    }()
  }, {
    key: "updateNotice",
    value: function () {
      var _updateNotice = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var _this$props4, clearTaskStatusCache, createNotice, updateOptions, storeNoticeText, update;

        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$props4 = this.props, clearTaskStatusCache = _this$props4.clearTaskStatusCache, createNotice = _this$props4.createNotice, updateOptions = _this$props4.updateOptions;
                storeNoticeText = this.state.storeNoticeText;
                Object(external_this_wc_tracks_["recordEvent"])('tasklist_appearance_set_store_notice', {
                  added_text: Boolean(storeNoticeText.length)
                });
                this.setState({
                  isUpdatingNotice: true
                });
                _context2.next = 6;
                return updateOptions({
                  woocommerce_task_list_appearance_complete: true,
                  woocommerce_demo_store: storeNoticeText.length ? 'yes' : 'no',
                  woocommerce_demo_store_notice: storeNoticeText
                });

              case 6:
                update = _context2.sent;
                clearTaskStatusCache();

                if (update.success) {
                  this.setState({
                    isUpdatingNotice: false
                  });
                  createNotice('success', Object(external_this_wp_i18n_["__"])("🎨 Your store is looking great! Don't forget to continue personalizing it", 'woocommerce-admin'));
                  this.completeStep();
                } else {
                  createNotice('error', update.message);
                }

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function updateNotice() {
        return _updateNotice.apply(this, arguments);
      }

      return updateNotice;
    }()
  }, {
    key: "getSteps",
    value: function getSteps() {
      var _this5 = this;

      var _this$state2 = this.state,
          isDirty = _this$state2.isDirty,
          isPending = _this$state2.isPending,
          logo = _this$state2.logo,
          storeNoticeText = _this$state2.storeNoticeText,
          isUpdatingLogo = _this$state2.isUpdatingLogo;
      var steps = [{
        key: 'import',
        label: Object(external_this_wp_i18n_["__"])('Import sample products', 'woocommerce-admin'),
        description: Object(external_this_wp_i18n_["__"])('We’ll add some products that will make it easier to see what your store looks like', 'woocommerce-admin'),
        content: Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
          onClick: this.importProducts,
          isBusy: isPending,
          isPrimary: true
        }, Object(external_this_wp_i18n_["__"])('Import products', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
          onClick: function onClick() {
            return _this5.completeStep();
          }
        }, Object(external_this_wp_i18n_["__"])('Skip', 'woocommerce-admin'))),
        visible: this.stepVisibility.import
      }, {
        key: 'homepage',
        label: Object(external_this_wp_i18n_["__"])('Create a custom homepage', 'woocommerce-admin'),
        description: Object(external_this_wp_i18n_["__"])('Create a new homepage and customize it to suit your needs', 'woocommerce-admin'),
        content: Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
          isPrimary: true,
          isBusy: isPending,
          onClick: this.createHomepage
        }, Object(external_this_wp_i18n_["__"])('Create homepage', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
          isTertiary: true,
          onClick: function onClick() {
            Object(external_this_wc_tracks_["recordEvent"])('tasklist_appearance_create_homepage', {
              create_homepage: false
            });

            _this5.completeStep();
          }
        }, Object(external_this_wp_i18n_["__"])('Skip', 'woocommerce-admin'))),
        visible: this.stepVisibility.homepage
      }, {
        key: 'logo',
        label: Object(external_this_wp_i18n_["__"])('Upload a logo', 'woocommerce-admin'),
        description: Object(external_this_wp_i18n_["__"])('Ensure your store is on-brand by adding your logo', 'woocommerce-admin'),
        content: isPending ? null : Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["ImageUpload"], {
          image: logo,
          onChange: function onChange(image) {
            return _this5.setState({
              isDirty: true,
              logo: image
            });
          }
        }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
          disabled: !logo && !isDirty,
          onClick: this.updateLogo,
          isBusy: isUpdatingLogo,
          isPrimary: true
        }, Object(external_this_wp_i18n_["__"])('Proceed', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
          isTertiary: true,
          onClick: function onClick() {
            return _this5.completeStep();
          }
        }, Object(external_this_wp_i18n_["__"])('Skip', 'woocommerce-admin'))),
        visible: true
      }, {
        key: 'notice',
        label: Object(external_this_wp_i18n_["__"])('Set a store notice', 'woocommerce-admin'),
        description: Object(external_this_wp_i18n_["__"])('Optionally display a prominent notice across all pages of your store', 'woocommerce-admin'),
        content: Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["TextControl"], {
          label: Object(external_this_wp_i18n_["__"])('Store notice text', 'woocommerce-admin'),
          placeholder: Object(external_this_wp_i18n_["__"])('Store notice text', 'woocommerce-admin'),
          value: storeNoticeText,
          onChange: function onChange(value) {
            return _this5.setState({
              storeNoticeText: value
            });
          }
        }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
          onClick: this.updateNotice,
          isPrimary: true
        }, Object(external_this_wp_i18n_["__"])('Complete task', 'woocommerce-admin'))),
        visible: true
      }];
      return Object(external_lodash_["filter"])(steps, function (step) {
        return step.visible;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          isPending = _this$state3.isPending,
          stepIndex = _this$state3.stepIndex,
          isUpdatingLogo = _this$state3.isUpdatingLogo,
          isUpdatingNotice = _this$state3.isUpdatingNotice;
      var currentStep = this.getSteps()[stepIndex].key;
      return Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-task-appearance"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Card"], {
        className: "woocommerce-task-card"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["CardBody"], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Stepper"], {
        isPending: isUpdatingNotice || isUpdatingLogo || isPending,
        isVertical: true,
        currentStep: currentStep,
        steps: this.getSteps()
      }))));
    }
  }]);

  return Appearance;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var appearance = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select(external_this_wc_data_["OPTIONS_STORE_NAME"]),
      getOption = _select.getOption;

  var _select2 = select(external_this_wc_data_["ONBOARDING_STORE_NAME"]),
      getTasksStatus = _select2.getTasksStatus;

  var tasksStatus = getTasksStatus();
  return {
    demoStoreNotice: getOption('woocommerce_demo_store_notice'),
    stylesheet: getOption('stylesheet'),
    tasksStatus: tasksStatus
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  var _dispatch2 = dispatch(external_this_wc_data_["OPTIONS_STORE_NAME"]),
      updateOptions = _dispatch2.updateOptions;

  var _dispatch3 = dispatch(external_this_wc_data_["ONBOARDING_STORE_NAME"]),
      invalidateResolutionForStoreSelector = _dispatch3.invalidateResolutionForStoreSelector;

  return {
    clearTaskStatusCache: function clearTaskStatusCache() {
      return invalidateResolutionForStoreSelector('getTasksStatus');
    },
    createNotice: createNotice,
    updateOptions: updateOptions
  };
}))(appearance_Appearance));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(18);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__(197);

// EXTERNAL MODULE: ./node_modules/@wordpress/primitives/build-module/svg/index.js
var svg = __webpack_require__(67);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/template-part-sidebar.js


/**
 * WordPress dependencies
 */

var templatePartSidebar = Object(external_this_wp_element_["createElement"])(svg["b" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["a" /* Path */], {
  d: "M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ var template_part_sidebar = (templatePartSidebar);
//# sourceMappingURL=template-part-sidebar.js.map
// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/chevron-right.js
var chevron_right = __webpack_require__(477);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/plus-circle.js


/**
 * WordPress dependencies
 */

var plusCircle = Object(external_this_wp_element_["createElement"])(svg["b" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["a" /* Path */], {
  d: "M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6zM10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"
}));
/* harmony default export */ var plus_circle = (plusCircle);
//# sourceMappingURL=plus-circle.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/archive.js


/**
 * WordPress dependencies
 */

var archive = Object(external_this_wp_element_["createElement"])(svg["b" /* SVG */], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(svg["a" /* Path */], {
  d: "M19 6.2h-5.9l-.6-1.1c-.3-.7-1-1.1-1.8-1.1H5c-1.1 0-2 .9-2 2v11.8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8.2c0-1.1-.9-2-2-2zm.5 11.6c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h5.8c.2 0 .4.1.4.3l1 2H19c.3 0 .5.2.5.5v9.5zM8 12.8h8v-1.5H8v1.5zm0 3h8v-1.5H8v1.5z"
}));
/* harmony default export */ var library_archive = (archive);
//# sourceMappingURL=archive.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/download.js


/**
 * WordPress dependencies
 */

var download = Object(external_this_wp_element_["createElement"])(svg["b" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["a" /* Path */], {
  d: "M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"
}));
/* harmony default export */ var library_download = (download);
//# sourceMappingURL=download.js.map
// EXTERNAL MODULE: ./client/task-list/tasks/products/product-template-modal.scss
var product_template_modal = __webpack_require__(581);

// EXTERNAL MODULE: ./client/lib/notices/index.js
var notices = __webpack_require__(507);

// CONCATENATED MODULE: ./client/task-list/tasks/products/product-template-modal.js



/**
 * External dependencies
 */









/**
 * Internal dependencies
 */



var ONBOARDING_PRODUCT_TEMPLATES_FILTER = 'woocommerce_admin_onboarding_product_templates';
var PRODUCT_TEMPLATES = [{
  key: 'physical',
  title: Object(external_this_wp_i18n_["__"])('Physical product', 'woocommerce-admin'),
  subtitle: Object(external_this_wp_i18n_["__"])('Tangible items that get delivered to customers', 'woocommerce-admin')
}, {
  key: 'digital',
  title: Object(external_this_wp_i18n_["__"])('Digital product', 'woocommerce-admin'),
  subtitle: Object(external_this_wp_i18n_["__"])('Items that customers download or access through your website', 'woocommerce-admin')
}, {
  key: 'variable',
  title: Object(external_this_wp_i18n_["__"])('Variable product', 'woocommerce-admin'),
  subtitle: Object(external_this_wp_i18n_["__"])('Products with several versions that customers can choose from', 'woocommerce-admin')
}];
function ProductTemplateModal(_ref) {
  var onClose = _ref.onClose;

  var _useState = Object(external_this_wp_element_["useState"])(),
      _useState2 = slicedToArray_default()(_useState, 2),
      selectedTemplate = _useState2[0],
      setSelectedTemplate = _useState2[1];

  var _useState3 = Object(external_this_wp_element_["useState"])(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      isRedirecting = _useState4[0],
      setIsRedirecting = _useState4[1];

  var _useDispatch = Object(external_this_wp_data_["useDispatch"])(external_this_wc_data_["ITEMS_STORE_NAME"]),
      createProductFromTemplate = _useDispatch.createProductFromTemplate;

  var createTemplate = function createTemplate() {
    setIsRedirecting(true);
    Object(external_this_wc_tracks_["recordEvent"])('tasklist_product_template_selection', {
      product_type: selectedTemplate
    });

    if (selectedTemplate) {
      createProductFromTemplate({
        template_name: selectedTemplate,
        status: 'draft'
      }, {
        _fields: ['id']
      }).then(function (data) {
        if (data && data.id) {
          var link = Object(wc_admin_settings["f" /* getAdminLink */])("post.php?post=".concat(data.id, "&action=edit&wc_onboarding_active_task=products&tutorial=true"));
          window.location = link;
        }
      }, function (error) {
        // failed creating product with template
        Object(notices["a" /* createNoticesFromResponse */])(error);
        setIsRedirecting(false);
      });
    } else if (onClose) {
      Object(external_this_wc_tracks_["recordEvent"])('tasklist_product_template_dismiss');
      onClose();
    }
  };

  var onSelectTemplateClick = function onSelectTemplateClick(event) {
    var val = event.target && event.target.value;
    setSelectedTemplate(val);
  };

  var templates = Object(external_this_wp_hooks_["applyFilters"])(ONBOARDING_PRODUCT_TEMPLATES_FILTER, PRODUCT_TEMPLATES);
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Modal"], {
    title: Object(external_this_wp_i18n_["__"])('Start with a template'),
    isDismissible: true,
    onRequestClose: function onRequestClose() {
      return onClose();
    },
    className: "woocommerce-product-template-modal"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-product-template-modal__wrapper"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-product-template-modal__list"
  }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["List"], {
    items: templates
  }, function (item, index) {
    return Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-list__item-inner"
    }, Object(external_this_wp_element_["createElement"])("input", {
      id: "product-templates-".concat(item.key || index),
      className: "components-radio-control__input",
      type: "radio",
      name: "product-template-options",
      value: item.key,
      onChange: onSelectTemplateClick,
      checked: item.key === selectedTemplate
    }), Object(external_this_wp_element_["createElement"])("label", {
      className: "woocommerce-list__item-text",
      htmlFor: "product-templates-".concat(item.key || index)
    }, Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-list__item-label"
    }, item.title), Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-list__item-subtitle"
    }, item.subtitle)));
  })), Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-product-template-modal__actions"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    isPrimary: true,
    isBusy: isRedirecting,
    disabled: !selectedTemplate || isRedirecting,
    onClick: createTemplate
  }, Object(external_this_wp_i18n_["__"])('Go')))));
}
// CONCATENATED MODULE: ./client/task-list/tasks/products/products.js




function products_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function products_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { products_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { products_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */







/**
 * Internal dependencies
 */


var subTasks = [{
  key: 'addProductTemplate',
  title: Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_i18n_["__"])('Start with a template', 'woocommerce-admin'), Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Pill"], null, Object(external_this_wp_i18n_["__"])('Recommended', 'woocommerce-admin'))),
  content: Object(external_this_wp_i18n_["__"])('Use a template to add physical, digital, and variable products', 'woocommerce-admin'),
  before: Object(external_this_wp_element_["createElement"])(icon["a" /* default */], {
    icon: template_part_sidebar
  }),
  after: Object(external_this_wp_element_["createElement"])(icon["a" /* default */], {
    icon: chevron_right["a" /* default */]
  }),
  onClick: function onClick() {
    return Object(external_this_wc_tracks_["recordEvent"])('tasklist_add_product', {
      method: 'product_template'
    });
  }
}, {
  key: 'addProductManually',
  title: Object(external_this_wp_i18n_["__"])('Add manually', 'woocommerce-admin'),
  content: Object(external_this_wp_i18n_["__"])('For small stores we recommend adding products manually', 'woocommerce-admin'),
  before: Object(external_this_wp_element_["createElement"])(icon["a" /* default */], {
    icon: plus_circle
  }),
  after: Object(external_this_wp_element_["createElement"])(icon["a" /* default */], {
    icon: chevron_right["a" /* default */]
  }),
  onClick: function onClick() {
    return Object(external_this_wc_tracks_["recordEvent"])('tasklist_add_product', {
      method: 'manually'
    });
  },
  href: Object(wc_admin_settings["f" /* getAdminLink */])('post-new.php?post_type=product&wc_onboarding_active_task=products&tutorial=true')
}, {
  key: 'importProducts',
  title: Object(external_this_wp_i18n_["__"])('Import via CSV', 'woocommerce-admin'),
  content: Object(external_this_wp_i18n_["__"])('For larger stores we recommend importing all products at once via CSV file', 'woocommerce-admin'),
  before: Object(external_this_wp_element_["createElement"])(icon["a" /* default */], {
    icon: library_archive
  }),
  after: Object(external_this_wp_element_["createElement"])(icon["a" /* default */], {
    icon: chevron_right["a" /* default */]
  }),
  onClick: function onClick() {
    return Object(external_this_wc_tracks_["recordEvent"])('tasklist_add_product', {
      method: 'import'
    });
  },
  href: Object(wc_admin_settings["f" /* getAdminLink */])('edit.php?post_type=product&page=product_importer&wc_onboarding_active_task=product-import')
}, {
  key: 'migrateProducts',
  title: Object(external_this_wp_i18n_["__"])('Import from another service', 'woocommerce-admin'),
  content: Object(external_this_wp_i18n_["__"])('For stores currently selling elsewhere we suggest using a product migration service', 'woocommerce-admin'),
  before: Object(external_this_wp_element_["createElement"])(icon["a" /* default */], {
    icon: library_download
  }),
  after: Object(external_this_wp_element_["createElement"])(icon["a" /* default */], {
    icon: chevron_right["a" /* default */]
  }),
  onClick: function onClick() {
    return Object(external_this_wc_tracks_["recordEvent"])('tasklist_add_product', {
      method: 'migrate'
    });
  },
  // @todo This should be replaced with the in-app purchase iframe when ready.
  href: 'https://woocommerce.com/products/cart2cart/',
  target: '_blank'
}];
function Products() {
  var _useState = Object(external_this_wp_element_["useState"])(null),
      _useState2 = slicedToArray_default()(_useState, 2),
      selectTemplate = _useState2[0],
      setSelectTemplate = _useState2[1];

  var onTaskClick = function onTaskClick(task) {
    task.onClick();

    if (task.key === 'addProductTemplate') {
      setSelectTemplate(true);
    }
  };

  var listItems = subTasks.map(function (task) {
    return products_objectSpread(products_objectSpread({}, task), {}, {
      onClick: function onClick() {
        return onTaskClick(task);
      }
    });
  });
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Card"], {
    className: "woocommerce-task-card"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["CardBody"], {
    size: null
  }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["List"], {
    items: listItems
  }))), selectTemplate ? Object(external_this_wp_element_["createElement"])(ProductTemplateModal, {
    onClose: function onClose() {
      return setSelectTemplate(null);
    }
  }) : null);
}
// CONCATENATED MODULE: ./client/task-list/tasks/products/index.js
/**
 * Internal dependencies
 */



// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(24);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/interpolate-components/lib/index.js
var lib = __webpack_require__(28);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./client/dashboard/components/connect/index.js










function connect_createSuper(Derived) { var hasNativeReflectConstruct = connect_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function connect_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */







var connect_Connect = /*#__PURE__*/function (_Component) {
  inherits_default()(Connect, _Component);

  var _super = connect_createSuper(Connect);

  function Connect(props) {
    var _this;

    classCallCheck_default()(this, Connect);

    _this = _super.call(this, props);
    _this.state = {
      isConnecting: false
    };
    _this.connectJetpack = _this.connectJetpack.bind(assertThisInitialized_default()(_this));
    props.setIsPending(true);
    return _this;
  }

  createClass_default()(Connect, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          createNotice = _this$props.createNotice,
          error = _this$props.error,
          isRequesting = _this$props.isRequesting,
          onError = _this$props.onError,
          setIsPending = _this$props.setIsPending;

      if (prevProps.isRequesting && !isRequesting) {
        setIsPending(false);
      }

      if (error && error !== prevProps.error) {
        if (onError) {
          onError();
        }

        createNotice('error', error);
      }
    }
  }, {
    key: "connectJetpack",
    value: function () {
      var _connectJetpack = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var _this$props2, jetpackConnectUrl, onConnect;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props2 = this.props, jetpackConnectUrl = _this$props2.jetpackConnectUrl, onConnect = _this$props2.onConnect;
                this.setState({
                  isConnecting: true
                }, function () {
                  if (onConnect) {
                    onConnect();
                  }

                  window.location = jetpackConnectUrl;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function connectJetpack() {
        return _connectJetpack.apply(this, arguments);
      }

      return connectJetpack;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          hasErrors = _this$props3.hasErrors,
          isRequesting = _this$props3.isRequesting,
          onSkip = _this$props3.onSkip,
          skipText = _this$props3.skipText,
          onAbort = _this$props3.onAbort,
          abortText = _this$props3.abortText;
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, hasErrors ? Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        isPrimary: true,
        onClick: function onClick() {
          return window.location.reload();
        }
      }, Object(external_this_wp_i18n_["__"])('Retry', 'woocommerce-admin')) : Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        disabled: isRequesting,
        isBusy: this.state.isConnecting,
        isPrimary: true,
        onClick: this.connectJetpack
      }, Object(external_this_wp_i18n_["__"])('Connect', 'woocommerce-admin')), onSkip && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        onClick: onSkip
      }, skipText || Object(external_this_wp_i18n_["__"])('No thanks', 'woocommerce-admin')), onAbort && Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        onClick: onAbort
      }, abortText || Object(external_this_wp_i18n_["__"])('Abort', 'woocommerce-admin')));
    }
  }]);

  return Connect;
}(external_this_wp_element_["Component"]);
connect_Connect.propTypes = {
  /**
   * Method to create a displayed notice.
   */
  createNotice: prop_types_default.a.func.isRequired,

  /**
   * Human readable error message.
   */
  error: prop_types_default.a.string,

  /**
   * Bool to determine if the "Retry" button should be displayed.
   */
  hasErrors: prop_types_default.a.bool,

  /**
   * Bool to check if the connection URL is still being requested.
   */
  isRequesting: prop_types_default.a.bool,

  /**
   * Generated Jetpack connection URL.
   */
  jetpackConnectUrl: prop_types_default.a.string,

  /**
   * Called before the redirect to Jetpack.
   */
  onConnect: prop_types_default.a.func,

  /**
   * Called when the plugin has an error retrieving the jetpackConnectUrl.
   */
  onError: prop_types_default.a.func,

  /**
   * Called when the plugin connection is skipped.
   */
  onSkip: prop_types_default.a.func,

  /**
   * Redirect URL to encode as a URL param for the connection path.
   */
  redirectUrl: prop_types_default.a.string,

  /**
   * Text used for the skip connection button.
   */
  skipText: prop_types_default.a.string,

  /**
   * Control the `isPending` logic of the parent containing the Stepper.
   */
  setIsPending: prop_types_default.a.func,

  /**
   * Called when the plugin connection is aborted.
   */
  onAbort: prop_types_default.a.func,

  /**
   * Text used for the abort connection button.
   */
  abortText: prop_types_default.a.string
};
connect_Connect.defaultProps = {
  setIsPending: function setIsPending() {}
};
/* harmony default export */ var connect = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select, props) {
  var _select = select(external_this_wc_data_["PLUGINS_STORE_NAME"]),
      getJetpackConnectUrl = _select.getJetpackConnectUrl,
      isPluginsRequesting = _select.isPluginsRequesting,
      getPluginsError = _select.getPluginsError;

  var queryArgs = {
    redirect_url: props.redirectUrl || window.location.href
  };
  var isRequesting = isPluginsRequesting('getJetpackConnectUrl');
  var error = getPluginsError('getJetpackConnectUrl') || '';
  var jetpackConnectUrl = getJetpackConnectUrl(queryArgs);
  return {
    error: error,
    isRequesting: isRequesting,
    jetpackConnectUrl: jetpackConnectUrl
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  return {
    createNotice: createNotice
  };
}))(connect_Connect));
// EXTERNAL MODULE: ./client/dashboard/components/settings/general/store-address.js
var store_address = __webpack_require__(518);

// CONCATENATED MODULE: ./client/task-list/tasks/steps/location.js











function location_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function location_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { location_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { location_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function location_createSuper(Derived) { var hasNativeReflectConstruct = location_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function location_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



var location_StoreLocation = /*#__PURE__*/function (_Component) {
  inherits_default()(StoreLocation, _Component);

  var _super = location_createSuper(StoreLocation);

  function StoreLocation() {
    var _this;

    classCallCheck_default()(this, StoreLocation);

    _this = _super.apply(this, arguments);
    _this.onSubmit = _this.onSubmit.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(StoreLocation, [{
    key: "onSubmit",
    value: function () {
      var _onSubmit = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(values) {
        var _this$props, onComplete, createNotice, isSettingsError, updateAndPersistSettingsForGroup, settings;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, onComplete = _this$props.onComplete, createNotice = _this$props.createNotice, isSettingsError = _this$props.isSettingsError, updateAndPersistSettingsForGroup = _this$props.updateAndPersistSettingsForGroup, settings = _this$props.settings;
                _context.next = 3;
                return updateAndPersistSettingsForGroup('general', {
                  general: location_objectSpread(location_objectSpread({}, settings), {}, {
                    woocommerce_store_address: values.addressLine1,
                    woocommerce_store_address_2: values.addressLine2,
                    woocommerce_default_country: values.countryState,
                    woocommerce_store_city: values.city,
                    woocommerce_store_postcode: values.postCode
                  })
                });

              case 3:
                if (!isSettingsError) {
                  onComplete(values);
                } else {
                  createNotice('error', Object(external_this_wp_i18n_["__"])('There was a problem saving your store location', 'woocommerce-admin'));
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onSubmit(_x) {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }()
  }, {
    key: "getInitialValues",
    value: function getInitialValues() {
      var settings = this.props.settings;
      var storeAddress = settings.woocommerce_store_address,
          storeAddress2 = settings.woocommerce_store_address_2,
          storeCity = settings.woocommerce_store_city,
          defaultCountry = settings.woocommerce_default_country,
          storePostcode = settings.woocommerce_store_postcode;
      return {
        addressLine1: storeAddress || '',
        addressLine2: storeAddress2 || '',
        city: storeCity || '',
        countryState: defaultCountry || '',
        postCode: storePostcode || ''
      };
    }
  }, {
    key: "render",
    value: function render() {
      var isSettingsRequesting = this.props.isSettingsRequesting;

      if (isSettingsRequesting) {
        return null;
      }

      return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Form"], {
        initialValues: this.getInitialValues(),
        onSubmitCallback: this.onSubmit,
        validate: store_address["b" /* validateStoreAddress */]
      }, function (_ref) {
        var getInputProps = _ref.getInputProps,
            handleSubmit = _ref.handleSubmit,
            setValue = _ref.setValue;
        return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(store_address["a" /* StoreAddress */], {
          getInputProps: getInputProps,
          setValue: setValue
        }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
          isPrimary: true,
          onClick: handleSubmit
        }, Object(external_this_wp_i18n_["__"])('Continue', 'woocommerce-admin')));
      });
    }
  }]);

  return StoreLocation;
}(external_this_wp_element_["Component"]);


// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/globe.js


/**
 * WordPress dependencies
 */

var globe = Object(external_this_wp_element_["createElement"])(svg["b" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["a" /* Path */], {
  d: "M9 0C4.03 0 0 4.03 0 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zM1.11 9.68h2.51c.04.91.167 1.814.38 2.7H1.84c-.403-.85-.65-1.764-.73-2.7zm8.57-5.4V1.19c.964.366 1.756 1.08 2.22 2 .205.347.386.708.54 1.08l-2.76.01zm3.22 1.35c.232.883.37 1.788.41 2.7H9.68v-2.7h3.22zM8.32 1.19v3.09H5.56c.154-.372.335-.733.54-1.08.462-.924 1.255-1.64 2.22-2.01zm0 4.44v2.7H4.7c.04-.912.178-1.817.41-2.7h3.21zm-4.7 2.69H1.11c.08-.936.327-1.85.73-2.7H4c-.213.886-.34 1.79-.38 2.7zM4.7 9.68h3.62v2.7H5.11c-.232-.883-.37-1.788-.41-2.7zm3.63 4v3.09c-.964-.366-1.756-1.08-2.22-2-.205-.347-.386-.708-.54-1.08l2.76-.01zm1.35 3.09v-3.04h2.76c-.154.372-.335.733-.54 1.08-.464.92-1.256 1.634-2.22 2v-.04zm0-4.44v-2.7h3.62c-.04.912-.178 1.817-.41 2.7H9.68zm4.71-2.7h2.51c-.08.936-.327 1.85-.73 2.7H14c.21-.87.337-1.757.38-2.65l.01-.05zm0-1.35c-.046-.894-.176-1.78-.39-2.65h2.16c.403.85.65 1.764.73 2.7l-2.5-.05zm1-4H13.6c-.324-.91-.793-1.76-1.39-2.52 1.244.56 2.325 1.426 3.14 2.52h.04zm-9.6-2.52c-.597.76-1.066 1.61-1.39 2.52H2.65c.815-1.094 1.896-1.96 3.14-2.52zm-3.15 12H4.4c.324.91.793 1.76 1.39 2.52-1.248-.567-2.33-1.445-3.14-2.55l-.01.03zm9.56 2.52c.597-.76 1.066-1.61 1.39-2.52h1.76c-.82 1.08-1.9 1.933-3.14 2.48l-.01.04z"
}));
/* harmony default export */ var library_globe = (globe);
//# sourceMappingURL=globe.js.map
// EXTERNAL MODULE: ./client/lib/currency-context.js
var currency_context = __webpack_require__(498);

// CONCATENATED MODULE: ./client/task-list/tasks/shipping/rates.js











function rates_createSuper(Derived) { var hasNativeReflectConstruct = rates_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function rates_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */











/**
 * Internal dependencies
 */



var rates_ShippingRates = /*#__PURE__*/function (_Component) {
  inherits_default()(ShippingRates, _Component);

  var _super = rates_createSuper(ShippingRates);

  function ShippingRates() {
    var _this;

    classCallCheck_default()(this, ShippingRates);

    _this = _super.apply(this, arguments);
    _this.updateShippingZones = _this.updateShippingZones.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(ShippingRates, [{
    key: "getShippingMethods",
    value: function getShippingMethods(zone) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      // Sometimes the wc/v3/shipping/zones response does not include a methods attribute, return early if so.
      if (!zone || !zone.methods || !Array.isArray(zone.methods)) {
        return [];
      }

      if (!type) {
        return zone.methods;
      }

      return zone.methods ? zone.methods.filter(function (method) {
        return method.method_id === type;
      }) : [];
    }
  }, {
    key: "disableShippingMethods",
    value: function disableShippingMethods(zone, methods) {
      if (!methods.length) {
        return;
      }

      methods.forEach(function (method) {
        external_this_wp_apiFetch_default()({
          method: 'POST',
          path: "/wc/v3/shipping/zones/".concat(zone.id, "/methods/").concat(method.instance_id),
          data: {
            enabled: false
          }
        });
      });
    }
  }, {
    key: "updateShippingZones",
    value: function () {
      var _updateShippingZones = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(values) {
        var _this2 = this;

        var _this$props, clearTaskStatusCache, createNotice, shippingZones, restOfTheWorld, shippingCost;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, clearTaskStatusCache = _this$props.clearTaskStatusCache, createNotice = _this$props.createNotice, shippingZones = _this$props.shippingZones;
                restOfTheWorld = false;
                shippingCost = false;
                shippingZones.forEach(function (zone) {
                  if (zone.id === 0) {
                    restOfTheWorld = zone.toggleable && values["".concat(zone.id, "_enabled")];
                  } else {
                    shippingCost = values["".concat(zone.id, "_rate")] !== '' && parseFloat(values["".concat(zone.id, "_rate")]) !== parseFloat(0);
                  }

                  var shippingMethods = _this2.getShippingMethods(zone);

                  var methodType = parseFloat(values["".concat(zone.id, "_rate")]) === parseFloat(0) ? 'free_shipping' : 'flat_rate';
                  var shippingMethod = _this2.getShippingMethods(zone, methodType).length ? _this2.getShippingMethods(zone, methodType)[0] : null;

                  if (zone.toggleable && !values["".concat(zone.id, "_enabled")]) {
                    // Disable any shipping methods that exist if toggled off.
                    _this2.disableShippingMethods(zone, shippingMethods);

                    return;
                  } else if (shippingMethod) {
                    // Disable all methods except the one being updated.
                    var methodsToDisable = shippingMethods.filter(function (method) {
                      return method.instance_id !== shippingMethod.instance_id;
                    });

                    _this2.disableShippingMethods(zone, methodsToDisable);
                  }

                  external_this_wp_apiFetch_default()({
                    method: 'POST',
                    path: shippingMethod ? // Update the first existing method if one exists, otherwise create a new one.
                    "/wc/v3/shipping/zones/".concat(zone.id, "/methods/").concat(shippingMethod.instance_id) : "/wc/v3/shipping/zones/".concat(zone.id, "/methods"),
                    data: {
                      method_id: methodType,
                      enabled: true,
                      settings: {
                        cost: values["".concat(zone.id, "_rate")]
                      }
                    }
                  });
                });
                Object(external_this_wc_tracks_["recordEvent"])('tasklist_shipping_set_costs', {
                  shipping_cost: shippingCost,
                  rest_world: restOfTheWorld
                });
                clearTaskStatusCache();
                createNotice('success', Object(external_this_wp_i18n_["__"])('Your shipping rates have been updated', 'woocommerce-admin'));
                this.props.onComplete();

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateShippingZones(_x) {
        return _updateShippingZones.apply(this, arguments);
      }

      return updateShippingZones;
    }()
  }, {
    key: "renderInputPrefix",
    value: function renderInputPrefix() {
      var _this$context$getCurr = this.context.getCurrencyConfig(),
          symbolPosition = _this$context$getCurr.symbolPosition,
          symbol = _this$context$getCurr.symbol;

      if (symbolPosition.indexOf('right') === 0) {
        return null;
      }

      return Object(external_this_wp_element_["createElement"])("span", {
        className: "woocommerce-shipping-rate__control-prefix"
      }, symbol);
    }
  }, {
    key: "renderInputSuffix",
    value: function renderInputSuffix(rate) {
      var _this$context$getCurr2 = this.context.getCurrencyConfig(),
          symbolPosition = _this$context$getCurr2.symbolPosition,
          symbol = _this$context$getCurr2.symbol;

      if (symbolPosition.indexOf('right') === 0) {
        return Object(external_this_wp_element_["createElement"])("span", {
          className: "woocommerce-shipping-rate__control-suffix"
        }, symbol);
      }

      return parseFloat(rate) === parseFloat(0) ? Object(external_this_wp_element_["createElement"])("span", {
        className: "woocommerce-shipping-rate__control-suffix"
      }, Object(external_this_wp_i18n_["__"])('Free shipping', 'woocommerce-admin')) : null;
    }
  }, {
    key: "getFormattedRate",
    value: function getFormattedRate(value) {
      var formatDecimalString = this.context.formatDecimalString;
      var currencyString = formatDecimalString(value);

      if (!value.length || !currencyString.length) {
        return formatDecimalString(0);
      }

      return formatDecimalString(value);
    }
  }, {
    key: "getInitialValues",
    value: function getInitialValues() {
      var _this3 = this;

      var formatDecimalString = this.context.formatDecimalString;
      var values = {};
      this.props.shippingZones.forEach(function (zone) {
        var shippingMethods = _this3.getShippingMethods(zone);

        var rate = shippingMethods.length && shippingMethods[0].settings.cost ? _this3.getFormattedRate(shippingMethods[0].settings.cost.value) : formatDecimalString(0);
        values["".concat(zone.id, "_rate")] = rate;

        if (shippingMethods.length && shippingMethods[0].enabled) {
          values["".concat(zone.id, "_enabled")] = true;
        } else {
          values["".concat(zone.id, "_enabled")] = false;
        }
      });
      return values;
    }
  }, {
    key: "validate",
    value: function validate(values) {
      var errors = {};
      var rates = Object.keys(values).filter(function (field) {
        return field.endsWith('_rate');
      });
      rates.forEach(function (rate) {
        if (values[rate] < 0) {
          errors[rate] = Object(external_this_wp_i18n_["__"])('Shipping rates can not be negative numbers.', 'woocommerce-admin');
        }
      });
      return errors;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props2 = this.props,
          buttonText = _this$props2.buttonText,
          shippingZones = _this$props2.shippingZones;

      if (!shippingZones.length) {
        return null;
      }

      return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Form"], {
        initialValues: this.getInitialValues(),
        onSubmitCallback: this.updateShippingZones,
        validate: this.validate
      }, function (_ref) {
        var getInputProps = _ref.getInputProps,
            handleSubmit = _ref.handleSubmit,
            setTouched = _ref.setTouched,
            setValue = _ref.setValue,
            values = _ref.values;
        return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])("div", {
          className: "woocommerce-shipping-rates"
        }, shippingZones.map(function (zone) {
          return Object(external_this_wp_element_["createElement"])("div", {
            className: "woocommerce-shipping-rate",
            key: zone.id
          }, Object(external_this_wp_element_["createElement"])("div", {
            className: "woocommerce-shipping-rate__icon"
          }, zone.locations ? zone.locations.map(function (location) {
            return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Flag"], {
              size: 24,
              code: location.code,
              key: location.code
            });
          }) : // Icon used for zones without locations or "Rest of the world".
          Object(external_this_wp_element_["createElement"])(icon["a" /* default */], {
            icon: library_globe
          })), Object(external_this_wp_element_["createElement"])("div", {
            className: "woocommerce-shipping-rate__main"
          }, zone.toggleable ? Object(external_this_wp_element_["createElement"])("label", {
            htmlFor: "woocommerce-shipping-rate__toggle-".concat(zone.id),
            className: "woocommerce-shipping-rate__name"
          }, zone.name, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["FormToggle"], extends_default()({
            id: "woocommerce-shipping-rate__toggle-".concat(zone.id)
          }, getInputProps("".concat(zone.id, "_enabled"))))) : Object(external_this_wp_element_["createElement"])("div", {
            className: "woocommerce-shipping-rate__name"
          }, zone.name), (!zone.toggleable || values["".concat(zone.id, "_enabled")]) && Object(external_this_wp_element_["createElement"])(external_this_wc_components_["TextControlWithAffixes"], extends_default()({
            label: Object(external_this_wp_i18n_["__"])('Shipping cost', 'woocommerce-admin'),
            required: true
          }, getInputProps("".concat(zone.id, "_rate")), {
            onBlur: function onBlur() {
              setTouched("".concat(zone.id, "_rate"));
              setValue("".concat(zone.id, "_rate"), _this4.getFormattedRate(values["".concat(zone.id, "_rate")]));
            },
            prefix: _this4.renderInputPrefix(),
            suffix: _this4.renderInputSuffix(values["".concat(zone.id, "_rate")]),
            className: "muriel-input-text woocommerce-shipping-rate__control-wrapper"
          }))));
        })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
          isPrimary: true,
          onClick: handleSubmit
        }, buttonText || Object(external_this_wp_i18n_["__"])('Update', 'woocommerce-admin')));
      });
    }
  }]);

  return ShippingRates;
}(external_this_wp_element_["Component"]);

rates_ShippingRates.propTypes = {
  /**
   * Text displayed on the primary button.
   */
  buttonText: prop_types_default.a.string,

  /**
   * Function used to mark the step complete.
   */
  onComplete: prop_types_default.a.func.isRequired,

  /**
   * Function to create a transient notice in the store.
   */
  createNotice: prop_types_default.a.func.isRequired,

  /**
   * Array of shipping zones returned from the WC REST API with added
   * `methods` and `locations` properties appended from separate API calls.
   */
  shippingZones: prop_types_default.a.array
};
rates_ShippingRates.defaultProps = {
  shippingZones: []
};
rates_ShippingRates.contextType = currency_context["a" /* CurrencyContext */];
/* harmony default export */ var shipping_rates = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(external_this_wc_data_["ONBOARDING_STORE_NAME"]),
      invalidateResolutionForStoreSelector = _dispatch.invalidateResolutionForStoreSelector;

  return {
    clearTaskStatusCache: function clearTaskStatusCache() {
      return invalidateResolutionForStoreSelector('getTasksStatus');
    }
  };
}))(rates_ShippingRates));
// CONCATENATED MODULE: ./client/task-list/tasks/shipping/index.js











function shipping_createSuper(Derived) { var hasNativeReflectConstruct = shipping_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function shipping_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */













/**
 * Internal dependencies
 */






var shipping_Shipping = /*#__PURE__*/function (_Component) {
  inherits_default()(Shipping, _Component);

  var _super = shipping_createSuper(Shipping);

  function Shipping(props) {
    var _this;

    classCallCheck_default()(this, Shipping);

    _this = _super.call(this, props);
    _this.initialState = {
      isPending: false,
      step: 'store_location',
      shippingZones: []
    }; // Cache active plugins to prevent removal mid-step.

    _this.activePlugins = props.activePlugins;
    _this.state = _this.initialState;
    _this.completeStep = _this.completeStep.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Shipping, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.reset();
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState(this.initialState);
    }
  }, {
    key: "fetchShippingZones",
    value: function () {
      var _fetchShippingZones = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var _this$props, countryCode, countryName, shippingZones, zones, hasCountryZone, zone;

        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.setState({
                  isPending: true
                });
                _this$props = this.props, countryCode = _this$props.countryCode, countryName = _this$props.countryName; // @todo The following fetches for shipping information should be moved into
                // @woocommerce/data to make these methods and states more readily available.

                shippingZones = [];
                _context2.next = 5;
                return external_this_wp_apiFetch_default()({
                  path: '/wc/v3/shipping/zones'
                });

              case 5:
                zones = _context2.sent;
                hasCountryZone = false;
                _context2.next = 9;
                return Promise.all(zones.map( /*#__PURE__*/function () {
                  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(zone) {
                    var countryLocation;
                    return regenerator_default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (!(zone.id === 0)) {
                              _context.next = 8;
                              break;
                            }

                            _context.next = 3;
                            return external_this_wp_apiFetch_default()({
                              path: "/wc/v3/shipping/zones/".concat(zone.id, "/methods")
                            });

                          case 3:
                            zone.methods = _context.sent;
                            zone.name = Object(external_this_wp_i18n_["__"])('Rest of the world', 'woocommerce-admin');
                            zone.toggleable = true;
                            shippingZones.push(zone);
                            return _context.abrupt("return");

                          case 8:
                            _context.next = 10;
                            return external_this_wp_apiFetch_default()({
                              path: "/wc/v3/shipping/zones/".concat(zone.id, "/locations")
                            });

                          case 10:
                            zone.locations = _context.sent;
                            countryLocation = zone.locations.find(function (location) {
                              return countryCode === location.code;
                            });

                            if (!countryLocation) {
                              _context.next = 18;
                              break;
                            }

                            _context.next = 15;
                            return external_this_wp_apiFetch_default()({
                              path: "/wc/v3/shipping/zones/".concat(zone.id, "/methods")
                            });

                          case 15:
                            zone.methods = _context.sent;
                            shippingZones.push(zone);
                            hasCountryZone = true;

                          case 18:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 9:
                if (hasCountryZone) {
                  _context2.next = 17;
                  break;
                }

                _context2.next = 12;
                return external_this_wp_apiFetch_default()({
                  method: 'POST',
                  path: '/wc/v3/shipping/zones',
                  data: {
                    name: countryName
                  }
                });

              case 12:
                zone = _context2.sent;
                _context2.next = 15;
                return external_this_wp_apiFetch_default()({
                  method: 'POST',
                  path: "/wc/v3/shipping/zones/".concat(zone.id, "/locations"),
                  data: [{
                    code: countryCode,
                    type: 'country'
                  }]
                });

              case 15:
                zone.locations = _context2.sent;
                shippingZones.push(zone);

              case 17:
                shippingZones.reverse();
                this.setState({
                  isPending: false,
                  shippingZones: shippingZones
                });

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetchShippingZones() {
        return _fetchShippingZones.apply(this, arguments);
      }

      return fetchShippingZones;
    }()
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props2 = this.props,
          countryCode = _this$props2.countryCode,
          settings = _this$props2.settings;
      var storeAddress = settings.woocommerce_store_address,
          defaultCountry = settings.woocommerce_default_country,
          storePostCode = settings.woocommerce_store_postcode;
      var step = this.state.step;

      if (step === 'rates' && (prevProps.countryCode !== countryCode || prevState.step !== 'rates')) {
        this.fetchShippingZones();
      }

      var isCompleteAddress = Boolean(storeAddress && defaultCountry && storePostCode);

      if (step === 'store_location' && isCompleteAddress) {
        this.completeStep();
      }
    }
  }, {
    key: "completeStep",
    value: function completeStep() {
      var createNotice = this.props.createNotice;
      var step = this.state.step;
      var steps = this.getSteps();
      var currentStepIndex = steps.findIndex(function (s) {
        return s.key === step;
      });
      var nextStep = steps[currentStepIndex + 1];

      if (nextStep) {
        this.setState({
          step: nextStep.key
        });
      } else {
        createNotice('success', Object(external_this_wp_i18n_["__"])("📦 Shipping is done! Don't worry, you can always change it later", 'woocommerce-admin'));
        Object(external_this_wc_navigation_["getHistory"])().push(Object(external_this_wc_navigation_["getNewPath"])({}, '/', {}));
      }
    }
  }, {
    key: "getPluginsToActivate",
    value: function getPluginsToActivate() {
      var countryCode = this.props.countryCode;
      var plugins = [];

      if (['GB', 'CA', 'AU'].includes(countryCode)) {
        plugins.push('woocommerce-shipstation-integration');
      } else if (countryCode === 'US') {
        plugins.push('woocommerce-services');
        plugins.push('jetpack');
      }

      return Object(external_lodash_["difference"])(plugins, this.activePlugins);
    }
  }, {
    key: "getSteps",
    value: function getSteps() {
      var _this2 = this;

      var _this$props3 = this.props,
          countryCode = _this$props3.countryCode,
          isJetpackConnected = _this$props3.isJetpackConnected,
          settings = _this$props3.settings;
      var pluginsToActivate = this.getPluginsToActivate();
      var requiresJetpackConnection = !isJetpackConnected && countryCode === 'US';
      var steps = [{
        key: 'store_location',
        label: Object(external_this_wp_i18n_["__"])('Set store location', 'woocommerce-admin'),
        description: Object(external_this_wp_i18n_["__"])('The address from which your business operates', 'woocommerce-admin'),
        content: Object(external_this_wp_element_["createElement"])(location_StoreLocation, extends_default()({}, this.props, {
          onComplete: function onComplete(values) {
            var country = Object(utils["b" /* getCountryCode */])(values.countryState);
            Object(external_this_wc_tracks_["recordEvent"])('tasklist_shipping_set_location', {
              country: country
            });

            _this2.completeStep();
          }
        })),
        visible: true
      }, {
        key: 'rates',
        label: Object(external_this_wp_i18n_["__"])('Set shipping costs', 'woocommerce-admin'),
        description: Object(external_this_wp_i18n_["__"])('Define how much customers pay to ship to different destinations', 'woocommerce-admin'),
        content: Object(external_this_wp_element_["createElement"])(shipping_rates, extends_default()({
          buttonText: pluginsToActivate.length || requiresJetpackConnection ? Object(external_this_wp_i18n_["__"])('Proceed', 'woocommerce-admin') : Object(external_this_wp_i18n_["__"])('Complete task', 'woocommerce-admin'),
          shippingZones: this.state.shippingZones,
          onComplete: this.completeStep
        }, this.props)),
        visible: settings.woocommerce_ship_to_countries === 'disabled' ? false : true
      }, {
        key: 'label_printing',
        label: Object(external_this_wp_i18n_["__"])('Enable shipping label printing', 'woocommerce-admin'),
        description: pluginsToActivate.includes('woocommerce-shipstation-integration') ? lib_default()({
          mixedString: Object(external_this_wp_i18n_["__"])('We recommend using ShipStation to save time at the post office by printing your shipping ' + 'labels at home. Try ShipStation free for 30 days. {{link}}Learn more{{/link}}.', 'woocommerce-admin'),
          components: {
            link: Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Link"], {
              href: "https://woocommerce.com/products/shipstation-integration",
              target: "_blank",
              type: "external"
            })
          }
        }) : Object(external_this_wp_i18n_["__"])('With WooCommerce Shipping and Jetpack you can save time at the ' + 'Post Office by printing your shipping labels at home', 'woocommerce-admin'),
        content: Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Plugins"], extends_default()({
          onComplete: function onComplete(plugins, response) {
            Object(notices["a" /* createNoticesFromResponse */])(response);
            Object(external_this_wc_tracks_["recordEvent"])('tasklist_shipping_label_printing', {
              install: true,
              plugins_to_activate: pluginsToActivate
            });

            _this2.completeStep();
          },
          onError: function onError(errors, response) {
            return Object(notices["a" /* createNoticesFromResponse */])(response);
          },
          onSkip: function onSkip() {
            Object(external_this_wc_tracks_["recordEvent"])('tasklist_shipping_label_printing', {
              install: false,
              plugins_to_activate: pluginsToActivate
            });
            Object(external_this_wc_navigation_["getHistory"])().push(Object(external_this_wc_navigation_["getNewPath"])({}, '/', {}));
          },
          pluginSlugs: pluginsToActivate
        }, this.props)),
        visible: pluginsToActivate.length
      }, {
        key: 'connect',
        label: Object(external_this_wp_i18n_["__"])('Connect your store', 'woocommerce-admin'),
        description: Object(external_this_wp_i18n_["__"])('Connect your store to WordPress.com to enable label printing', 'woocommerce-admin'),
        content: Object(external_this_wp_element_["createElement"])(connect, extends_default()({
          redirectUrl: Object(wc_admin_settings["f" /* getAdminLink */])('admin.php?page=wc-admin'),
          completeStep: this.completeStep
        }, this.props, {
          onConnect: function onConnect() {
            Object(external_this_wc_tracks_["recordEvent"])('tasklist_shipping_connect_store');
          }
        })),
        visible: requiresJetpackConnection
      }];
      return Object(external_lodash_["filter"])(steps, function (step) {
        return step.visible;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isPending = _this$state.isPending,
          step = _this$state.step;
      var isUpdateSettingsRequesting = this.props.isUpdateSettingsRequesting;
      return Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-task-shipping"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Card"], {
        className: "woocommerce-task-card"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["CardBody"], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Stepper"], {
        isPending: isPending || isUpdateSettingsRequesting,
        isVertical: true,
        currentStep: step,
        steps: this.getSteps()
      }))));
    }
  }]);

  return Shipping;
}(external_this_wp_element_["Component"]);
/* harmony default export */ var shipping = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select(external_this_wc_data_["SETTINGS_STORE_NAME"]),
      getSettings = _select.getSettings,
      isUpdateSettingsRequesting = _select.isUpdateSettingsRequesting;

  var _select2 = select(external_this_wc_data_["PLUGINS_STORE_NAME"]),
      getActivePlugins = _select2.getActivePlugins,
      isJetpackConnected = _select2.isJetpackConnected;

  var _getSettings = getSettings('general'),
      _getSettings$general = _getSettings.general,
      settings = _getSettings$general === void 0 ? {} : _getSettings$general;

  var countryCode = Object(utils["b" /* getCountryCode */])(settings.woocommerce_default_country);

  var _getSetting = Object(wc_admin_settings["g" /* getSetting */])('dataEndpoints', {}),
      _getSetting$countries = _getSetting.countries,
      countries = _getSetting$countries === void 0 ? [] : _getSetting$countries;

  var country = countryCode ? countries.find(function (c) {
    return c.code === countryCode;
  }) : null;
  var countryName = country ? country.name : null;
  var activePlugins = getActivePlugins();
  return {
    countryCode: countryCode,
    countryName: countryName,
    isUpdateSettingsRequesting: isUpdateSettingsRequesting('general'),
    settings: settings,
    activePlugins: activePlugins,
    isJetpackConnected: isJetpackConnected()
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  var _dispatch2 = dispatch(external_this_wc_data_["SETTINGS_STORE_NAME"]),
      updateAndPersistSettingsForGroup = _dispatch2.updateAndPersistSettingsForGroup;

  return {
    createNotice: createNotice,
    updateAndPersistSettingsForGroup: updateAndPersistSettingsForGroup
  };
}))(shipping_Shipping));
// EXTERNAL MODULE: ./packages/experimental/build-module/index.js
var build_module = __webpack_require__(30);

// CONCATENATED MODULE: ./client/task-list/tasks/tax.js












function tax_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function tax_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { tax_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { tax_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function tax_createSuper(Derived) { var hasNativeReflectConstruct = tax_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function tax_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */













/**
 * Internal dependencies
 */






var tax_Tax = /*#__PURE__*/function (_Component) {
  inherits_default()(Tax, _Component);

  var _super = tax_createSuper(Tax);

  function Tax(props) {
    var _this;

    classCallCheck_default()(this, Tax);

    _this = _super.call(this, props);
    var hasCompleteAddress = props.hasCompleteAddress,
        pluginsToActivate = props.pluginsToActivate;
    _this.initialState = {
      isPending: false,
      stepIndex: hasCompleteAddress ? 1 : 0,
      // Cache the value of pluginsToActivate so that we can
      // show/hide tasks based on it, but not have them update mid task.
      cachedPluginsToActivate: pluginsToActivate
    };
    _this.state = _this.initialState;
    _this.completeStep = _this.completeStep.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Tax, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.reset();
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState(this.initialState);
    }
  }, {
    key: "shouldShowSuccessScreen",
    value: function shouldShowSuccessScreen() {
      var _this$props = this.props,
          isJetpackConnected = _this$props.isJetpackConnected,
          hasCompleteAddress = _this$props.hasCompleteAddress,
          pluginsToActivate = _this$props.pluginsToActivate;
      return hasCompleteAddress && !pluginsToActivate.length && isJetpackConnected && this.isTaxJarSupported();
    }
  }, {
    key: "isTaxJarSupported",
    value: function isTaxJarSupported() {
      var _this$props2 = this.props,
          countryCode = _this$props2.countryCode,
          tasksStatus = _this$props2.tasksStatus;
      var _tasksStatus$automate = tasksStatus.automatedTaxSupportedCountries,
          automatedTaxSupportedCountries = _tasksStatus$automate === void 0 ? [] : _tasksStatus$automate,
          taxJarActivated = tasksStatus.taxJarActivated;
      return !taxJarActivated && // WCS integration doesn't work with the official TaxJar plugin.
      automatedTaxSupportedCountries.includes(countryCode);
    }
  }, {
    key: "completeStep",
    value: function completeStep() {
      var stepIndex = this.state.stepIndex;
      var steps = this.getSteps();
      var nextStep = steps[stepIndex + 1];

      if (nextStep) {
        this.setState({
          stepIndex: stepIndex + 1
        });
      }
    }
  }, {
    key: "manuallyConfigureTaxRates",
    value: function () {
      var _manuallyConfigureTaxRates = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var _this2 = this;

        var _this$props3, generalSettings, updateAndPersistSettingsForGroup;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props3 = this.props, generalSettings = _this$props3.generalSettings, updateAndPersistSettingsForGroup = _this$props3.updateAndPersistSettingsForGroup;

                if (generalSettings.woocommerce_calc_taxes !== 'yes') {
                  this.setState({
                    isPending: true
                  });
                  updateAndPersistSettingsForGroup('general', {
                    general: tax_objectSpread(tax_objectSpread({}, generalSettings), {}, {
                      woocommerce_calc_taxes: 'yes'
                    })
                  }).then(function () {
                    return _this2.redirectToTaxSettings();
                  }).catch(function (error) {
                    return Object(notices["a" /* createNoticesFromResponse */])(error);
                  });
                } else {
                  this.redirectToTaxSettings();
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function manuallyConfigureTaxRates() {
        return _manuallyConfigureTaxRates.apply(this, arguments);
      }

      return manuallyConfigureTaxRates;
    }()
  }, {
    key: "updateAutomatedTax",
    value: function updateAutomatedTax(isEnabling) {
      var _this3 = this;

      var _this$props4 = this.props,
          clearTaskStatusCache = _this$props4.clearTaskStatusCache,
          createNotice = _this$props4.createNotice,
          updateAndPersistSettingsForGroup = _this$props4.updateAndPersistSettingsForGroup,
          generalSettings = _this$props4.generalSettings,
          taxSettings = _this$props4.taxSettings;
      Promise.all([updateAndPersistSettingsForGroup('tax', {
        tax: tax_objectSpread(tax_objectSpread({}, taxSettings), {}, {
          wc_connect_taxes_enabled: isEnabling ? 'yes' : 'no'
        })
      }), updateAndPersistSettingsForGroup('general', {
        general: tax_objectSpread(tax_objectSpread({}, generalSettings), {}, {
          woocommerce_calc_taxes: 'yes'
        })
      })]).then(function () {
        clearTaskStatusCache();

        if (isEnabling) {
          createNotice('success', Object(external_this_wp_i18n_["__"])("You're awesome! One less item on your to-do list ✅", 'woocommerce-admin'));
          Object(external_this_wc_navigation_["getHistory"])().push(Object(external_this_wc_navigation_["getNewPath"])({}, '/', {}));
        } else {
          _this3.redirectToTaxSettings();
        }
      }).catch(function () {
        createNotice('error', Object(external_this_wp_i18n_["__"])('There was a problem updating your tax settings', 'woocommerce-admin'));
      });
    }
  }, {
    key: "redirectToTaxSettings",
    value: function redirectToTaxSettings() {
      window.location = Object(wc_admin_settings["f" /* getAdminLink */])('admin.php?page=wc-settings&tab=tax&section=standard&wc_onboarding_active_task=tax');
    }
  }, {
    key: "doNotChargeSalesTax",
    value: function doNotChargeSalesTax() {
      var updateOptions = this.props.updateOptions;
      Object(external_this_wc_tracks_["queueRecordEvent"])('tasklist_tax_connect_store', {
        connect: false,
        no_tax: true
      });
      updateOptions({
        woocommerce_no_sales_tax: true,
        woocommerce_calc_taxes: 'no'
      }).then(function () {
        window.location = Object(wc_admin_settings["f" /* getAdminLink */])('admin.php?page=wc-admin');
      });
    }
  }, {
    key: "getSteps",
    value: function getSteps() {
      var _this4 = this;

      var _this$props5 = this.props,
          generalSettings = _this$props5.generalSettings,
          isJetpackConnected = _this$props5.isJetpackConnected,
          isPending = _this$props5.isPending,
          tosAccepted = _this$props5.tosAccepted,
          updateOptions = _this$props5.updateOptions;
      var cachedPluginsToActivate = this.state.cachedPluginsToActivate;
      var step2Label, agreementText;

      if (cachedPluginsToActivate.includes('woocommerce-services')) {
        step2Label = Object(external_this_wp_i18n_["__"])('Install Jetpack and WooCommerce Tax', 'woocommerce-admin');
        agreementText = Object(external_this_wp_i18n_["__"])('By installing Jetpack and WooCommerce Tax you agree to the {{link}}Terms of Service{{/link}}.', 'woocommerce-admin');
      } else {
        step2Label = Object(external_this_wp_i18n_["__"])('Install Jetpack', 'woocommerce-admin');
        agreementText = Object(external_this_wp_i18n_["__"])('By installing Jetpack you agree to the {{link}}Terms of Service{{/link}}.', 'woocommerce-admin');
      }

      var steps = [{
        key: 'store_location',
        label: Object(external_this_wp_i18n_["__"])('Set store location', 'woocommerce-admin'),
        description: Object(external_this_wp_i18n_["__"])('The address from which your business operates', 'woocommerce-admin'),
        content: Object(external_this_wp_element_["createElement"])(location_StoreLocation, extends_default()({}, this.props, {
          onComplete: function onComplete(values) {
            var country = Object(utils["b" /* getCountryCode */])(values.countryState);
            Object(external_this_wc_tracks_["recordEvent"])('tasklist_tax_set_location', {
              country: country
            });

            _this4.completeStep();
          },
          isSettingsRequesting: false,
          settings: generalSettings
        })),
        visible: true
      }, {
        key: 'plugins',
        label: step2Label,
        description: Object(external_this_wp_i18n_["__"])('Jetpack and WooCommerce Tax allow you to automate sales tax calculations', 'woocommerce-admin'),
        content: Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Plugins"], {
          onComplete: function onComplete(plugins, response) {
            Object(notices["a" /* createNoticesFromResponse */])(response);
            Object(external_this_wc_tracks_["recordEvent"])('tasklist_tax_install_extensions', {
              install_extensions: true
            });
            updateOptions({
              woocommerce_setup_jetpack_opted_in: true
            });

            _this4.completeStep();
          },
          onError: function onError(errors, response) {
            return Object(notices["a" /* createNoticesFromResponse */])(response);
          },
          onSkip: function onSkip() {
            Object(external_this_wc_tracks_["queueRecordEvent"])('tasklist_tax_install_extensions', {
              install_extensions: false
            });

            _this4.manuallyConfigureTaxRates();
          },
          skipText: Object(external_this_wp_i18n_["__"])('Set up manually', 'woocommerce-admin'),
          onAbort: function onAbort() {
            return _this4.doNotChargeSalesTax();
          },
          abortText: Object(external_this_wp_i18n_["__"])("I don't charge sales tax", 'woocommerce-admin')
        }), !tosAccepted && Object(external_this_wp_element_["createElement"])(build_module["e" /* Text */], {
          variant: "caption",
          className: "woocommerce-task__caption"
        }, lib_default()({
          mixedString: agreementText,
          components: {
            link: Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Link"], {
              href: 'https://wordpress.com/tos/',
              target: "_blank",
              type: "external"
            })
          }
        }))),
        visible: (cachedPluginsToActivate.length || !tosAccepted) && this.isTaxJarSupported()
      }, {
        key: 'connect',
        label: Object(external_this_wp_i18n_["__"])('Connect your store', 'woocommerce-admin'),
        description: Object(external_this_wp_i18n_["__"])('Connect your store to WordPress.com to enable automated sales tax calculations', 'woocommerce-admin'),
        content: Object(external_this_wp_element_["createElement"])(connect, extends_default()({}, this.props, {
          onConnect: function onConnect() {
            Object(external_this_wc_tracks_["recordEvent"])('tasklist_tax_connect_store', {
              connect: true,
              no_tax: false
            });
          },
          onSkip: function onSkip() {
            Object(external_this_wc_tracks_["queueRecordEvent"])('tasklist_tax_connect_store', {
              connect: false,
              no_tax: false
            });

            _this4.manuallyConfigureTaxRates();
          },
          skipText: Object(external_this_wp_i18n_["__"])('Set up tax rates manually', 'woocommerce-admin'),
          onAbort: function onAbort() {
            return _this4.doNotChargeSalesTax();
          },
          abortText: Object(external_this_wp_i18n_["__"])("My business doesn't charge sales tax", 'woocommerce-admin')
        })),
        visible: !isJetpackConnected && this.isTaxJarSupported()
      }, {
        key: 'manual_configuration',
        label: Object(external_this_wp_i18n_["__"])('Configure tax rates', 'woocommerce-admin'),
        description: Object(external_this_wp_i18n_["__"])('Head over to the tax rate settings screen to configure your tax rates', 'woocommerce-admin'),
        content: Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
          disabled: isPending,
          isPrimary: true,
          isBusy: isPending,
          onClick: function onClick() {
            Object(external_this_wc_tracks_["recordEvent"])('tasklist_tax_config_rates');

            _this4.manuallyConfigureTaxRates();
          }
        }, Object(external_this_wp_i18n_["__"])('Configure', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])("p", null, generalSettings.woocommerce_calc_taxes !== 'yes' && lib_default()({
          mixedString: Object(external_this_wp_i18n_["__"])(
          /*eslint-disable max-len*/
          'By clicking "Configure" you\'re enabling tax rates and calculations. More info {{link}}here{{/link}}.',
          /*eslint-enable max-len*/
          'woocommerce-admin'),
          components: {
            link: Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Link"], {
              href: "https://docs.woocommerce.com/document/setting-up-taxes-in-woocommerce/#section-1",
              target: "_blank",
              type: "external"
            })
          }
        }))),
        visible: !this.isTaxJarSupported()
      }];
      return Object(external_lodash_["filter"])(steps, function (step) {
        return step.visible;
      });
    }
  }, {
    key: "renderSuccessScreen",
    value: function renderSuccessScreen() {
      var _this5 = this;

      var isPending = this.props.isPending;
      return Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-task-tax__success"
      }, Object(external_this_wp_element_["createElement"])("span", {
        className: "woocommerce-task-tax__success-icon",
        role: "img",
        "aria-labelledby": "woocommerce-task-tax__success-message"
      }, "\uD83C\uDF8A"), Object(external_this_wp_element_["createElement"])(external_this_wc_components_["H"], {
        id: "woocommerce-task-tax__success-message"
      }, Object(external_this_wp_i18n_["__"])('Good news!', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])("p", null, lib_default()({
        mixedString: Object(external_this_wp_i18n_["__"])('{{strong}}Jetpack{{/strong}} and {{strong}}WooCommerce Tax{{/strong}} ' + 'can automate your sales tax calculations for you.', 'woocommerce-admin'),
        components: {
          strong: Object(external_this_wp_element_["createElement"])("strong", null)
        }
      })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        disabled: isPending,
        isPrimary: true,
        isBusy: isPending,
        onClick: function onClick() {
          Object(external_this_wc_tracks_["recordEvent"])('tasklist_tax_setup_automated_proceed', {
            setup_automatically: true
          });

          _this5.updateAutomatedTax(true);
        }
      }, Object(external_this_wp_i18n_["__"])('Yes please', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        disabled: isPending,
        isTertiary: true,
        onClick: function onClick() {
          Object(external_this_wc_tracks_["recordEvent"])('tasklist_tax_setup_automated_proceed', {
            setup_automatically: false
          });

          _this5.updateAutomatedTax(false);
        }
      }, Object(external_this_wp_i18n_["__"])("No thanks, I'll set up manually", 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        disabled: isPending,
        isTertiary: true,
        onClick: function onClick() {
          return _this5.doNotChargeSalesTax();
        }
      }, Object(external_this_wp_i18n_["__"])("I don't charge sales tax", 'woocommerce-admin')));
    }
  }, {
    key: "render",
    value: function render() {
      var stepIndex = this.state.stepIndex;
      var _this$props6 = this.props,
          isPending = _this$props6.isPending,
          isResolving = _this$props6.isResolving;
      var step = this.getSteps()[stepIndex];
      return Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-task-tax"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Card"], {
        className: "woocommerce-task-card"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["CardBody"], null, this.shouldShowSuccessScreen() ? this.renderSuccessScreen() : Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Stepper"], {
        isPending: isPending || isResolving,
        isVertical: true,
        currentStep: step.key,
        steps: this.getSteps()
      }))));
    }
  }]);

  return Tax;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var tax = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select(external_this_wc_data_["SETTINGS_STORE_NAME"]),
      getSettings = _select.getSettings,
      isUpdateSettingsRequesting = _select.isUpdateSettingsRequesting;

  var _select2 = select(external_this_wc_data_["OPTIONS_STORE_NAME"]),
      getOption = _select2.getOption;

  var _select3 = select(external_this_wc_data_["PLUGINS_STORE_NAME"]),
      getActivePlugins = _select3.getActivePlugins,
      isJetpackConnected = _select3.isJetpackConnected,
      isPluginsRequesting = _select3.isPluginsRequesting;

  var _select4 = select(external_this_wc_data_["ONBOARDING_STORE_NAME"]),
      getTasksStatus = _select4.getTasksStatus;

  var _getSettings = getSettings('general'),
      _getSettings$general = _getSettings.general,
      generalSettings = _getSettings$general === void 0 ? {} : _getSettings$general;

  var countryCode = Object(utils["b" /* getCountryCode */])(generalSettings.woocommerce_default_country);
  var storeAddress = generalSettings.woocommerce_store_address,
      defaultCountry = generalSettings.woocommerce_default_country,
      storePostCode = generalSettings.woocommerce_store_postcode;
  var hasCompleteAddress = Boolean(storeAddress && defaultCountry && storePostCode);

  var _getSettings2 = getSettings('tax'),
      _getSettings2$tax = _getSettings2.tax,
      taxSettings = _getSettings2$tax === void 0 ? {} : _getSettings2$tax;

  var activePlugins = getActivePlugins();
  var pluginsToActivate = Object(external_lodash_["difference"])(['jetpack', 'woocommerce-services'], activePlugins);
  var connectOptions = getOption('wc_connect_options') || {};
  var tosAccepted = connectOptions.tos_accepted || getOption('woocommerce_setup_jetpack_opted_in');
  var tasksStatus = getTasksStatus();
  var isPending = isUpdateSettingsRequesting('tax') || isUpdateSettingsRequesting('general');
  var isResolving = isPluginsRequesting('getJetpackConnectUrl');
  return {
    countryCode: countryCode,
    generalSettings: generalSettings,
    hasCompleteAddress: hasCompleteAddress,
    isJetpackConnected: isJetpackConnected(),
    isPending: isPending,
    isResolving: isResolving,
    pluginsToActivate: pluginsToActivate,
    tasksStatus: tasksStatus,
    taxSettings: taxSettings,
    tosAccepted: tosAccepted
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  var _dispatch2 = dispatch(external_this_wc_data_["OPTIONS_STORE_NAME"]),
      updateOptions = _dispatch2.updateOptions;

  var _dispatch3 = dispatch(external_this_wc_data_["SETTINGS_STORE_NAME"]),
      updateAndPersistSettingsForGroup = _dispatch3.updateAndPersistSettingsForGroup;

  var _dispatch4 = dispatch(external_this_wc_data_["ONBOARDING_STORE_NAME"]),
      invalidateResolutionForStoreSelector = _dispatch4.invalidateResolutionForStoreSelector;

  return {
    clearTaskStatusCache: function clearTaskStatusCache() {
      return invalidateResolutionForStoreSelector('getTasksStatus');
    },
    createNotice: createNotice,
    updateAndPersistSettingsForGroup: updateAndPersistSettingsForGroup,
    updateOptions: updateOptions
  };
}))(tax_Tax));
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./client/task-list/tasks/payments/methods.js + 17 modules
var payments_methods = __webpack_require__(525);

// CONCATENATED MODULE: ./client/task-list/tasks/payments/index.js











function payments_createSuper(Derived) { var hasNativeReflectConstruct = payments_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function payments_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function payments_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function payments_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { payments_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { payments_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */










/**
 * Internal dependencies
 */




var setMethodEnabledOption = /*#__PURE__*/function () {
  var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(optionName, value, _ref) {
    var clearTaskStatusCache, updateOptions, options, methodOptions;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            clearTaskStatusCache = _ref.clearTaskStatusCache, updateOptions = _ref.updateOptions, options = _ref.options;
            methodOptions = options[optionName]; // Don't update the option if it already has the same value.

            if (!(methodOptions.enabled !== value)) {
              _context.next = 6;
              break;
            }

            _context.next = 5;
            return updateOptions(defineProperty_default()({}, optionName, payments_objectSpread(payments_objectSpread({}, methodOptions), {}, {
              enabled: value
            })));

          case 5:
            clearTaskStatusCache();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function setMethodEnabledOption(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var payments_Payments = /*#__PURE__*/function (_Component) {
  inherits_default()(Payments, _Component);

  var _super = payments_createSuper(Payments);

  function Payments(props) {
    var _this;

    classCallCheck_default()(this, Payments);

    _this = _super.apply(this, arguments);
    var methods = props.methods;
    var enabledMethods = {};
    methods.forEach(function (method) {
      return enabledMethods[method.key] = method.isEnabled;
    });
    _this.state = {
      busyMethod: null,
      enabledMethods: enabledMethods,
      recommendedMethod: _this.getRecommendedMethod()
    };
    _this.markConfigured = _this.markConfigured.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Payments, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var recommendedMethod = this.state.recommendedMethod;
      var method = this.getRecommendedMethod();

      if (recommendedMethod !== method) {
        this.setState({
          recommendedMethod: method
        });
      }
    }
  }, {
    key: "getRecommendedMethod",
    value: function getRecommendedMethod() {
      var methods = this.props.methods;
      return methods.find(function (m) {
        return m.key === 'wcpay' && m.visible;
      }) ? 'wcpay' : 'stripe';
    }
  }, {
    key: "markConfigured",
    value: function () {
      var _markConfigured = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(methodName) {
        var queryParams,
            enabledMethods,
            methods,
            method,
            _args2 = arguments;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                queryParams = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
                enabledMethods = this.state.enabledMethods;
                methods = this.props.methods;
                method = methods.find(function (option) {
                  return option.key === methodName;
                });

                if (method) {
                  _context2.next = 6;
                  break;
                }

                throw "Method ".concat(methodName, " not found in available methods list");

              case 6:
                this.setState({
                  enabledMethods: payments_objectSpread(payments_objectSpread({}, enabledMethods), {}, defineProperty_default()({}, methodName, true))
                });
                _context2.next = 9;
                return setMethodEnabledOption(method.optionName, 'yes', this.props);

              case 9:
                Object(external_this_wc_tracks_["recordEvent"])('tasklist_payment_connect_method', {
                  payment_method: methodName
                });
                Object(external_this_wc_navigation_["getHistory"])().push(Object(external_this_wc_navigation_["getNewPath"])(payments_objectSpread(payments_objectSpread({}, queryParams), {}, {
                  task: 'payments'
                }), '/', {}));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function markConfigured(_x4) {
        return _markConfigured.apply(this, arguments);
      }

      return markConfigured;
    }()
  }, {
    key: "getCurrentMethod",
    value: function getCurrentMethod() {
      var _this$props = this.props,
          methods = _this$props.methods,
          query = _this$props.query;

      if (!query.method) {
        return;
      }

      var currentMethod = methods.find(function (method) {
        return method.key === query.method;
      });

      if (!currentMethod) {
        throw "Current method ".concat(query.method, " not found in available methods list");
      }

      return currentMethod;
    }
  }, {
    key: "getInstallStep",
    value: function getInstallStep() {
      var currentMethod = this.getCurrentMethod();

      if (!currentMethod.plugins || !currentMethod.plugins.length) {
        return;
      }

      var activePlugins = this.props.activePlugins;
      var pluginsToInstall = currentMethod.plugins.filter(function (method) {
        return !activePlugins.includes(method);
      });
      var pluginNamesString = currentMethod.plugins.map(function (pluginSlug) {
        return external_this_wc_data_["pluginNames"][pluginSlug];
      }).join(' ' + Object(external_this_wp_i18n_["__"])('and', 'woocommerce-admin') + ' ');
      return {
        key: 'install',
        label: Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('Install %s', 'woocommerce-admin'), pluginNamesString),
        content: Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Plugins"], {
          onComplete: function onComplete(plugins, response) {
            Object(notices["a" /* createNoticesFromResponse */])(response);
            Object(external_this_wc_tracks_["recordEvent"])('tasklist_payment_install_method', {
              plugins: currentMethod.plugins
            });
          },
          onError: function onError(errors, response) {
            return Object(notices["a" /* createNoticesFromResponse */])(response);
          },
          autoInstall: true,
          pluginSlugs: currentMethod.plugins
        }),
        isComplete: !pluginsToInstall.length
      };
    }
  }, {
    key: "toggleMethod",
    value: function () {
      var _toggleMethod = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3(key) {
        var methods, enabledMethods, method;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                methods = this.props.methods;
                enabledMethods = this.state.enabledMethods;
                method = methods.find(function (option) {
                  return option.key === key;
                });

                if (method) {
                  _context3.next = 5;
                  break;
                }

                throw "Method ".concat(key, " not found in available methods list");

              case 5:
                enabledMethods[key] = !enabledMethods[key];
                this.setState({
                  enabledMethods: enabledMethods
                });
                Object(external_this_wc_tracks_["recordEvent"])('tasklist_payment_toggle', {
                  enabled: !method.isEnabled,
                  payment_method: key
                });
                _context3.next = 10;
                return setMethodEnabledOption(method.optionName, method.isEnabled ? 'no' : 'yes', this.props);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function toggleMethod(_x5) {
        return _toggleMethod.apply(this, arguments);
      }

      return toggleMethod;
    }()
  }, {
    key: "handleClick",
    value: function () {
      var _handleClick = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4(method) {
        var _this2 = this;

        var methods, key, onClick;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                methods = this.props.methods;
                key = method.key, onClick = method.onClick;
                Object(external_this_wc_tracks_["recordEvent"])('tasklist_payment_setup', {
                  options: methods.map(function (option) {
                    return option.key;
                  }),
                  selected: key
                });

                if (!onClick) {
                  _context4.next = 8;
                  break;
                }

                this.setState({
                  busyMethod: key
                });
                _context4.next = 7;
                return new Promise(onClick).then(function () {
                  _this2.setState({
                    busyMethod: null
                  });
                }).catch(function () {
                  _this2.setState({
                    busyMethod: null
                  });
                });

              case 7:
                return _context4.abrupt("return");

              case 8:
                Object(external_this_wc_navigation_["updateQueryString"])({
                  method: key
                });

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function handleClick(_x6) {
        return _handleClick.apply(this, arguments);
      }

      return handleClick;
    }()
  }, {
    key: "getSetupButtons",
    value: function getSetupButtons(method) {
      var _this3 = this;

      var _this$state = this.state,
          busyMethod = _this$state.busyMethod,
          enabledMethods = _this$state.enabledMethods,
          recommendedMethod = _this$state.recommendedMethod;
      var container = method.container,
          isConfigured = method.isConfigured,
          key = method.key;

      if (container && !isConfigured) {
        return Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
          isPrimary: key === recommendedMethod,
          isSecondary: key !== recommendedMethod,
          isBusy: busyMethod === key,
          disabled: busyMethod,
          onClick: function onClick() {
            return _this3.handleClick(method);
          }
        }, Object(external_this_wp_i18n_["__"])('Set up', 'woocommerce-admin')));
      }

      return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["FormToggle"], {
        checked: enabledMethods[key],
        onChange: function onChange() {
          return _this3.toggleMethod(key);
        },
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var currentMethod = this.getCurrentMethod();
      var recommendedMethod = this.state.recommendedMethod;
      var _this$props2 = this.props,
          methods = _this$props2.methods,
          query = _this$props2.query;

      if (currentMethod) {
        return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Card"], {
          className: "woocommerce-task-payment-method woocommerce-task-card"
        }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["CardBody"], null, Object(external_this_wp_element_["cloneElement"])(currentMethod.container, {
          query: query,
          installStep: this.getInstallStep(),
          markConfigured: this.markConfigured,
          hasCbdIndustry: currentMethod.hasCbdIndustry
        })));
      }

      return Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-task-payments"
      }, methods.map(function (method) {
        var before = method.before,
            content = method.content,
            isConfigured = method.isConfigured,
            key = method.key,
            title = method.title,
            visible = method.visible,
            loading = method.loading;

        if (!visible) {
          return null;
        }

        var classes = classnames_default()('woocommerce-task-payment', 'woocommerce-task-card', !isConfigured && 'woocommerce-task-payment-not-configured', 'woocommerce-task-payment-' + key);
        var isRecommended = key === recommendedMethod && !isConfigured;
        var showRecommendedRibbon = isRecommended && key !== 'wcpay';
        var showRecommendedPill = isRecommended && key === 'wcpay';
        return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Card"], {
          key: key,
          className: classes
        }, showRecommendedRibbon && Object(external_this_wp_element_["createElement"])("div", {
          className: "woocommerce-task-payment__recommended-ribbon"
        }, Object(external_this_wp_element_["createElement"])("span", null, Object(external_this_wp_i18n_["__"])('Recommended', 'woocommerce-admin'))), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["CardMedia"], {
          isBorderless: true
        }, before), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["CardBody"], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["H"], {
          className: "woocommerce-task-payment__title"
        }, title, showRecommendedPill && Object(external_this_wp_element_["createElement"])("span", {
          className: "woocommerce-task-payment__recommended-pill"
        }, Object(external_this_wp_i18n_["__"])('Recommended', 'woocommerce-admin'))), Object(external_this_wp_element_["createElement"])("div", {
          className: "woocommerce-task-payment__content"
        }, content)), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["CardFooter"], {
          isBorderless: true
        }, loading ? Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Spinner"], null) : _this4.getSetupButtons(method)));
      }));
    }
  }]);

  return Payments;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var payments = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  var _dispatch2 = dispatch(external_this_wc_data_["PLUGINS_STORE_NAME"]),
      installAndActivatePlugins = _dispatch2.installAndActivatePlugins,
      invalidatePluginStoreSelector = _dispatch2.invalidateResolutionForStoreSelector;

  var _dispatch3 = dispatch(external_this_wc_data_["OPTIONS_STORE_NAME"]),
      updateOptions = _dispatch3.updateOptions;

  var _dispatch4 = dispatch(external_this_wc_data_["ONBOARDING_STORE_NAME"]),
      invalidateResolution = _dispatch4.invalidateResolution,
      invalidateResolutionForStoreSelector = _dispatch4.invalidateResolutionForStoreSelector;

  invalidateResolution('getProfileItems', []);
  invalidateResolution('getTasksStatus', []);
  return {
    clearTaskStatusCache: function clearTaskStatusCache() {
      invalidateResolutionForStoreSelector('getTasksStatus');
      invalidatePluginStoreSelector('getPaypalOnboardingStatus');
    },
    createNotice: createNotice,
    installAndActivatePlugins: installAndActivatePlugins,
    updateOptions: updateOptions
  };
}), Object(external_this_wp_data_["withSelect"])(function (select, props) {
  var createNotice = props.createNotice,
      installAndActivatePlugins = props.installAndActivatePlugins;

  var _select = select(external_this_wc_data_["ONBOARDING_STORE_NAME"]),
      getProfileItems = _select.getProfileItems;

  var _select2 = select(external_this_wc_data_["OPTIONS_STORE_NAME"]),
      getOption = _select2.getOption;

  var _select3 = select(external_this_wc_data_["PLUGINS_STORE_NAME"]),
      getActivePlugins = _select3.getActivePlugins,
      isJetpackConnected = _select3.isJetpackConnected,
      getPaypalOnboardingStatus = _select3.getPaypalOnboardingStatus,
      hasFinishedResolution = _select3.hasFinishedResolution;

  var _select4 = select(external_this_wc_data_["SETTINGS_STORE_NAME"]),
      getSettings = _select4.getSettings;

  var _getSettings = getSettings('general'),
      _getSettings$general = _getSettings.general,
      generalSettings = _getSettings$general === void 0 ? {} : _getSettings$general;

  var _select5 = select(external_this_wc_data_["ONBOARDING_STORE_NAME"]),
      getTasksStatus = _select5.getTasksStatus;

  var activePlugins = getActivePlugins();
  var onboardingStatus = getTasksStatus();
  var profileItems = getProfileItems();
  var optionNames = ['woocommerce_woocommerce_payments_settings', 'woocommerce_stripe_settings', 'woocommerce-ppcp-settings', 'woocommerce_ppcp-gateway_settings', 'woocommerce_payfast_settings', 'woocommerce_square_credit_card_settings', 'woocommerce_klarna_payments_settings', 'woocommerce_kco_settings', 'wc_square_refresh_tokens', 'woocommerce_cod_settings', 'woocommerce_bacs_settings', 'woocommerce_bacs_accounts', 'woocommerce_eway_settings', 'woocommerce_razorpay_settings', 'woocommerce_mollie_payments_settings', 'woocommerce_payubiz_settings'];
  var options = optionNames.reduce(function (result, name) {
    result[name] = getOption(name);
    return result;
  }, {});
  var countryCode = Object(utils["b" /* getCountryCode */])(generalSettings.woocommerce_default_country);
  var paypalOnboardingStatus = getPaypalOnboardingStatus();
  var methods = Object(payments_methods["a" /* getPaymentMethods */])({
    activePlugins: activePlugins,
    countryCode: countryCode,
    createNotice: createNotice,
    installAndActivatePlugins: installAndActivatePlugins,
    isJetpackConnected: isJetpackConnected(),
    onboardingStatus: onboardingStatus,
    options: options,
    profileItems: profileItems,
    paypalOnboardingStatus: paypalOnboardingStatus,
    loadingPaypalStatus: !hasFinishedResolution('getPaypalOnboardingStatus') && !paypalOnboardingStatus
  });
  return {
    countryCode: countryCode,
    profileItems: profileItems,
    activePlugins: activePlugins,
    options: options,
    methods: methods
  };
}))(payments_Payments));
// EXTERNAL MODULE: ./client/lib/collections/index.js
var collections = __webpack_require__(517);

// CONCATENATED MODULE: ./client/task-list/tasks.js





function tasks_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function tasks_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { tasks_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { tasks_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */





/**
 * Internal dependencies
 */









function recordTaskViewEvent(taskName, isJetpackConnected, activePlugins, installedPlugins) {
  Object(external_this_wc_tracks_["recordEvent"])('task_view', {
    task_name: taskName,
    wcs_installed: installedPlugins.includes('woocommerce-services'),
    wcs_active: activePlugins.includes('woocommerce-services'),
    jetpack_installed: installedPlugins.includes('jetpack'),
    jetpack_active: activePlugins.includes('jetpack'),
    jetpack_connected: isJetpackConnected
  });
}
function tasks_getAllTasks(_ref) {
  var activePlugins = _ref.activePlugins,
      countryCode = _ref.countryCode,
      createNotice = _ref.createNotice,
      installAndActivatePlugins = _ref.installAndActivatePlugins,
      installedPlugins = _ref.installedPlugins,
      isJetpackConnected = _ref.isJetpackConnected,
      onboardingStatus = _ref.onboardingStatus,
      profileItems = _ref.profileItems,
      query = _ref.query,
      toggleCartModal = _ref.toggleCartModal,
      onTaskSelect = _ref.onTaskSelect;

  var _hasPaymentGateway$ha = tasks_objectSpread({
    hasPaymentGateway: false,
    hasPhysicalProducts: false,
    hasProducts: false,
    isAppearanceComplete: false,
    isTaxComplete: false,
    shippingZonesCount: 0,
    wcPayIsConnected: false
  }, onboardingStatus),
      hasPaymentGateway = _hasPaymentGateway$ha.hasPaymentGateway,
      hasPhysicalProducts = _hasPaymentGateway$ha.hasPhysicalProducts,
      hasProducts = _hasPaymentGateway$ha.hasProducts,
      isAppearanceComplete = _hasPaymentGateway$ha.isAppearanceComplete,
      isTaxComplete = _hasPaymentGateway$ha.isTaxComplete,
      shippingZonesCount = _hasPaymentGateway$ha.shippingZonesCount,
      wcPayIsConnected = _hasPaymentGateway$ha.wcPayIsConnected;

  var groupedProducts = Object(utils["a" /* getCategorizedOnboardingProducts */])(profileItems, installedPlugins);
  var products = groupedProducts.products,
      remainingProducts = groupedProducts.remainingProducts,
      uniqueItemsList = groupedProducts.uniqueItemsList;
  var woocommercePaymentsInstalled = installedPlugins.indexOf('woocommerce-payments') !== -1;
  var profilerCompleted = profileItems.completed,
      productTypes = profileItems.product_types;

  var purchaseAndInstallText = Object(external_this_wp_i18n_["__"])('Add paid extensions to your store', 'woocommerce-admin');

  if (uniqueItemsList.length === 1) {
    var itemName = uniqueItemsList[0].name;

    var purchaseAndInstallFormat = Object(external_this_wp_i18n_["__"])('Add %s to your store', 'woocommerce-admin');

    purchaseAndInstallText = Object(external_this_wp_i18n_["sprintf"])(purchaseAndInstallFormat, itemName);
  }

  var tasks = [{
    key: 'store_details',
    title: Object(external_this_wp_i18n_["__"])('Store details', 'woocommerce-admin'),
    container: null,
    onClick: function onClick() {
      onTaskSelect('store_details');
      Object(external_this_wc_navigation_["getHistory"])().push(Object(external_this_wc_navigation_["getNewPath"])({}, '/setup-wizard', {}));
    },
    completed: profilerCompleted,
    visible: true,
    time: Object(external_this_wp_i18n_["__"])('4 minutes', 'woocommerce-admin'),
    type: 'setup'
  }, {
    key: 'purchase',
    title: purchaseAndInstallText,
    container: null,
    onClick: function onClick() {
      onTaskSelect('purchase');
      return remainingProducts.length ? toggleCartModal() : null;
    },
    visible: products.length,
    completed: products.length && !remainingProducts.length,
    time: Object(external_this_wp_i18n_["__"])('2 minutes', 'woocommerce-admin'),
    isDismissable: true,
    type: 'setup'
  }, {
    key: 'products',
    title: Object(external_this_wp_i18n_["__"])('Add products', 'woocommerce-admin'),
    container: Object(external_this_wp_element_["createElement"])(Products, null),
    onClick: function onClick() {
      onTaskSelect('products');
      Object(external_this_wc_navigation_["updateQueryString"])({
        task: 'products'
      });
    },
    completed: hasProducts,
    visible: true,
    time: Object(external_this_wp_i18n_["__"])('1 minute per product', 'woocommerce-admin'),
    type: 'setup'
  }, {
    key: 'woocommerce-payments',
    title: Object(external_this_wp_i18n_["__"])('Set up WooCommerce Payments', 'woocommerce-admin'),
    container: Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null),
    completed: wcPayIsConnected,
    onClick: function () {
      var _onClick = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(e) {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(e.target.nodeName === 'A')) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", false);

              case 2:
                _context.next = 4;
                return new Promise(function (resolve, reject) {
                  // This task doesn't have a view, so the recordEvent call
                  // in TaskDashboard.recordTaskView() is never called. So
                  // record it here.
                  recordTaskViewEvent('wcpay', isJetpackConnected, activePlugins, installedPlugins);
                  onTaskSelect('woocommerce-payments');
                  return Object(payments_methods["b" /* installActivateAndConnectWcpay */])(resolve, reject, createNotice, installAndActivatePlugins);
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function onClick(_x) {
        return _onClick.apply(this, arguments);
      }

      return onClick;
    }(),
    visible: window.wcAdminFeatures.wcpay && woocommercePaymentsInstalled && countryCode === 'US',
    additionalInfo: Object(external_this_wp_i18n_["__"])('By setting up, you are agreeing to the <a href="https://wordpress.com/tos/" target="_blank">Terms of Service</a>', 'woocommerce-admin'),
    time: Object(external_this_wp_i18n_["__"])('2 minutes', 'woocommerce-admin'),
    type: 'setup'
  }, {
    key: 'payments',
    title: Object(external_this_wp_i18n_["__"])('Choose payment methods', 'woocommerce-admin'),
    container: Object(external_this_wp_element_["createElement"])(payments, null),
    completed: hasPaymentGateway,
    onClick: function onClick() {
      onTaskSelect('payments');
      Object(external_this_wc_navigation_["updateQueryString"])({
        task: 'payments'
      });
    },
    visible: !woocommercePaymentsInstalled || countryCode !== 'US',
    time: Object(external_this_wp_i18n_["__"])('2 minutes', 'woocommerce-admin'),
    type: 'setup'
  }, {
    key: 'tax',
    title: Object(external_this_wp_i18n_["__"])('Add tax rates', 'woocommerce-admin'),
    container: Object(external_this_wp_element_["createElement"])(tax, null),
    onClick: function onClick() {
      onTaskSelect('tax');
      Object(external_this_wc_navigation_["updateQueryString"])({
        task: 'tax'
      });
    },
    completed: isTaxComplete,
    visible: true,
    time: Object(external_this_wp_i18n_["__"])('1 minute', 'woocommerce-admin'),
    type: 'setup'
  }, {
    key: 'shipping',
    title: Object(external_this_wp_i18n_["__"])('Set up shipping costs', 'woocommerce-admin'),
    container: Object(external_this_wp_element_["createElement"])(shipping, null),
    onClick: function onClick() {
      onTaskSelect('shipping');
      Object(external_this_wc_navigation_["updateQueryString"])({
        task: 'shipping'
      });
    },
    completed: shippingZonesCount > 0,
    visible: productTypes && productTypes.includes('physical') || hasPhysicalProducts,
    time: Object(external_this_wp_i18n_["__"])('1 minute', 'woocommerce-admin'),
    type: 'setup'
  }, {
    key: 'appearance',
    title: Object(external_this_wp_i18n_["__"])('Personalize your store', 'woocommerce-admin'),
    container: Object(external_this_wp_element_["createElement"])(appearance, null),
    onClick: function onClick() {
      onTaskSelect('appearance');
      Object(external_this_wc_navigation_["updateQueryString"])({
        task: 'appearance'
      });
    },
    completed: isAppearanceComplete,
    visible: true,
    time: Object(external_this_wp_i18n_["__"])('2 minutes', 'woocommerce-admin'),
    type: 'setup'
  }];
  return Object(collections["a" /* groupListOfObjectsBy */])(Object(external_this_wp_hooks_["applyFilters"])('woocommerce_admin_onboarding_task_list', tasks, query), 'type', 'extension');
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(19);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/check.js
var check = __webpack_require__(560);

// CONCATENATED MODULE: ./client/task-list/list.js









function list_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function list_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { list_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { list_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function list_createSuper(Derived) { var hasNativeReflectConstruct = list_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function list_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */












/**
 * Internal dependencies
 */




var list_TaskList = /*#__PURE__*/function (_Component) {
  inherits_default()(TaskList, _Component);

  var _super = list_createSuper(TaskList);

  function TaskList() {
    classCallCheck_default()(this, TaskList);

    return _super.apply(this, arguments);
  }

  createClass_default()(TaskList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.recordTaskView();
      this.recordTaskListView();
      this.possiblyCompleteTaskList();
      this.possiblyTrackCompletedTasks();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var query = this.props.query;
      var prevQuery = prevProps.query;
      var prevTask = prevQuery.task;
      var task = query.task;

      if (prevTask !== task) {
        window.document.documentElement.scrollTop = 0;
        this.recordTaskView();
      }

      this.possiblyCompleteTaskList();
      this.possiblyTrackCompletedTasks();
    }
  }, {
    key: "possiblyCompleteTaskList",
    value: function possiblyCompleteTaskList() {
      var _this$props = this.props,
          isComplete = _this$props.isComplete,
          _this$props$name = _this$props.name,
          name = _this$props$name === void 0 ? 'task_list' : _this$props$name,
          updateOptions = _this$props.updateOptions;
      var taskListVariableName = "woocommerce_".concat(name, "_complete");
      var taskListToComplete = isComplete ? defineProperty_default()({}, taskListVariableName, 'no') : defineProperty_default()({}, taskListVariableName, 'yes');

      if (name === 'task_list') {
        taskListToComplete.woocommerce_default_homepage_layout = 'two_columns';
      }

      if (!this.getIncompleteTasks().length && !isComplete || this.getIncompleteTasks().length && isComplete) {
        updateOptions(list_objectSpread({}, taskListToComplete));
      }
    }
  }, {
    key: "getCompletedTaskKeys",
    value: function getCompletedTaskKeys() {
      return this.getVisibleTasks().filter(function (task) {
        return task.completed;
      }).map(function (task) {
        return task.key;
      });
    }
  }, {
    key: "getIncompleteTasks",
    value: function getIncompleteTasks() {
      var _this$props2 = this.props,
          dismissedTasks = _this$props2.dismissedTasks,
          tasks = _this$props2.tasks;
      return tasks.filter(function (task) {
        return task.visible && !task.completed && !dismissedTasks.includes(task.key);
      });
    }
  }, {
    key: "shouldUpdateCompletedTasks",
    value: function shouldUpdateCompletedTasks(tasks, untrackedTasks, completedTasks) {
      if (untrackedTasks.length > 0) {
        return true;
      }

      if (completedTasks.length === 0) {
        return false;
      }

      return !completedTasks.every(function (taskName) {
        return tasks.indexOf(taskName) >= 0;
      });
    }
  }, {
    key: "getTrackedCompletedTasks",
    value: function getTrackedCompletedTasks(completedTasks, trackedTasks) {
      if (!trackedTasks) {
        return [];
      }

      return completedTasks.filter(function (taskName) {
        return trackedTasks.includes(taskName);
      });
    }
  }, {
    key: "getTrackedIncompletedTasks",
    value: function getTrackedIncompletedTasks(partialCompletedTasks, allTrackedTask) {
      return this.getVisibleTasks().filter(function (task) {
        return allTrackedTask.includes(task.key) && !partialCompletedTasks.includes(task.key);
      }).map(function (task) {
        return task.key;
      });
    }
  }, {
    key: "getTasksForUpdate",
    value: function getTasksForUpdate(completedTaskKeys, totalTrackedCompletedTasks, trackedIncompleteTasks) {
      var mergedLists = toConsumableArray_default()(new Set([].concat(toConsumableArray_default()(completedTaskKeys), toConsumableArray_default()(totalTrackedCompletedTasks))));

      return mergedLists.filter(function (taskName) {
        return !trackedIncompleteTasks.includes(taskName);
      });
    }
  }, {
    key: "possiblyTrackCompletedTasks",
    value: function possiblyTrackCompletedTasks() {
      var _this$props3 = this.props,
          totalTrackedCompletedTasks = _this$props3.trackedCompletedTasks,
          updateOptions = _this$props3.updateOptions;
      var completedTaskKeys = this.getCompletedTaskKeys();
      var trackedCompletedTasks = this.getTrackedCompletedTasks(completedTaskKeys, totalTrackedCompletedTasks);
      var trackedIncompleteTasks = this.getTrackedIncompletedTasks(trackedCompletedTasks, totalTrackedCompletedTasks);

      if (this.shouldUpdateCompletedTasks(trackedCompletedTasks, trackedIncompleteTasks, completedTaskKeys)) {
        updateOptions({
          woocommerce_task_list_tracked_completed_tasks: this.getTasksForUpdate(completedTaskKeys, totalTrackedCompletedTasks, trackedIncompleteTasks)
        });
      }
    }
  }, {
    key: "dismissTask",
    value: function dismissTask(_ref3) {
      var _this = this;

      var key = _ref3.key,
          onDismiss = _ref3.onDismiss;
      var _this$props4 = this.props,
          createNotice = _this$props4.createNotice,
          dismissedTasks = _this$props4.dismissedTasks,
          updateOptions = _this$props4.updateOptions;
      createNotice('success', Object(external_this_wp_i18n_["__"])('Task dismissed'), {
        actions: [{
          label: Object(external_this_wp_i18n_["__"])('Undo', 'woocommerce-admin'),
          onClick: function onClick() {
            return _this.undoDismissTask(key);
          }
        }]
      });
      Object(external_this_wc_tracks_["recordEvent"])('tasklist_dismiss_task', {
        task_name: key
      });
      updateOptions({
        woocommerce_task_list_dismissed_tasks: [].concat(toConsumableArray_default()(dismissedTasks), [key])
      });

      if (onDismiss) {
        onDismiss();
      }
    }
  }, {
    key: "undoDismissTask",
    value: function undoDismissTask(key) {
      var _this$props5 = this.props,
          dismissedTasks = _this$props5.dismissedTasks,
          updateOptions = _this$props5.updateOptions;
      var updatedDismissedTasks = dismissedTasks.filter(function (task) {
        return task !== key;
      });
      updateOptions({
        woocommerce_task_list_dismissed_tasks: updatedDismissedTasks
      });
    }
  }, {
    key: "getVisibleTasks",
    value: function getVisibleTasks() {
      var _this$props6 = this.props,
          dismissedTasks = _this$props6.dismissedTasks,
          tasks = _this$props6.tasks;
      return tasks.filter(function (task) {
        return task.visible && !dismissedTasks.includes(task.key);
      });
    }
  }, {
    key: "recordTaskView",
    value: function recordTaskView() {
      var _this$props7 = this.props,
          isJetpackConnected = _this$props7.isJetpackConnected,
          activePlugins = _this$props7.activePlugins,
          installedPlugins = _this$props7.installedPlugins,
          query = _this$props7.query;
      var taskName = query.task;

      if (!taskName) {
        return;
      }

      recordTaskViewEvent(taskName, isJetpackConnected, activePlugins, installedPlugins);
    }
  }, {
    key: "recordTaskListView",
    value: function recordTaskListView() {
      if (this.getCurrentTask()) {
        return;
      }

      var profileItems = this.props.profileItems;
      var tasks = this.getVisibleTasks();
      Object(external_this_wc_tracks_["recordEvent"])('tasklist_view', {
        number_tasks: tasks.length,
        store_connected: profileItems.wccom_connected
      });
    }
  }, {
    key: "hideTaskCard",
    value: function hideTaskCard(action) {
      var _this$props8 = this.props,
          _this$props8$name = _this$props8.name,
          name = _this$props8$name === void 0 ? 'task_list' : _this$props8$name,
          updateOptions = _this$props8.updateOptions;
      var isCoreTaskList = name === 'task_list';
      var taskListName = isCoreTaskList ? 'tasklist' : 'extended_tasklist';

      var updateOptionsParams = defineProperty_default()({}, "woocommerce_".concat(name, "_hidden"), 'yes');

      if (isCoreTaskList) {
        updateOptionsParams.woocommerce_task_list_prompt_shown = true;
        updateOptionsParams.woocommerce_default_homepage_layout = 'two_columns';
      }

      Object(external_this_wc_tracks_["recordEvent"])("".concat(taskListName, "_completed"), {
        action: action,
        completed_task_count: this.getCompletedTaskKeys().length,
        incomplete_task_count: this.getIncompleteTasks().length
      });
      updateOptions(list_objectSpread({}, updateOptionsParams));
    }
  }, {
    key: "getCurrentTask",
    value: function getCurrentTask() {
      var _this$props9 = this.props,
          query = _this$props9.query,
          tasks = _this$props9.tasks;
      var task = query.task;
      var currentTask = tasks.find(function (s) {
        return s.key === task;
      });

      if (!currentTask) {
        return null;
      }

      return currentTask;
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this2 = this;

      return Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-card__menu woocommerce-card__header-item"
      }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["EllipsisMenu"], {
        label: Object(external_this_wp_i18n_["__"])('Task List Options', 'woocommerce-admin'),
        renderContent: function renderContent() {
          return Object(external_this_wp_element_["createElement"])("div", {
            className: "woocommerce-task-card__section-controls"
          }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
            onClick: function onClick() {
              return _this2.hideTaskCard('remove_card');
            }
          }, Object(external_this_wp_i18n_["__"])('Hide this', 'woocommerce-admin')));
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props10 = this.props,
          name = _this$props10.name,
          query = _this$props10.query,
          listTitle = _this$props10.title;
      var theTask = query.task;
      var currentTask = this.getCurrentTask();

      if (theTask && !currentTask) {
        return null;
      }

      var listTasks = this.getVisibleTasks().map(function (task) {
        task.className = classnames_default()(task.completed ? 'is-complete' : null, task.className);
        task.before = Object(external_this_wp_element_["createElement"])("div", {
          className: "woocommerce-task__icon"
        }, task.completed && Object(external_this_wp_element_["createElement"])(icon["a" /* default */], {
          icon: check["a" /* default */]
        }));
        task.title = Object(external_this_wp_element_["createElement"])(build_module["e" /* Text */], {
          as: "div",
          variant: task.completed ? 'body.small' : 'button'
        }, task.title, task.additionalInfo && Object(external_this_wp_element_["createElement"])("div", {
          className: "woocommerce-task__additional-info",
          dangerouslySetInnerHTML: Object(sanitize_html["a" /* default */])(task.additionalInfo)
        }), task.time && !task.completed && Object(external_this_wp_element_["createElement"])("div", {
          className: "woocommerce-task__estimated-time"
        }, task.time));

        if (!task.completed && task.isDismissable) {
          task.after = Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
            "data-testid": "".concat(task.key, "-dismiss-button"),
            isTertiary: true,
            onClick: function onClick(event) {
              event.stopPropagation();

              _this3.dismissTask(task);
            }
          }, Object(external_this_wp_i18n_["__"])('Dismiss', 'woocommerce-admin'));
        }

        if (!task.onClick) {
          task.onClick = function (e) {
            if (e.target.nodeName === 'A') {
              // This is a nested link, so don't activate this task.
              return false;
            }

            Object(external_this_wc_navigation_["updateQueryString"])({
              task: task.key
            });
          };
        }

        return task;
      });

      if (!listTasks.length) {
        return Object(external_this_wp_element_["createElement"])("div", {
          className: "woocommerce-task-dashboard__container"
        });
      }

      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-task-dashboard__container"
      }, currentTask ? Object(external_this_wp_element_["cloneElement"])(currentTask.container, {
        query: query
      }) : Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Card"], {
        size: "large",
        className: "woocommerce-task-card woocommerce-homescreen-card"
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["CardHeader"], {
        size: "medium"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "wooocommerce-task-card__header"
      }, Object(external_this_wp_element_["createElement"])(build_module["e" /* Text */], {
        variant: "title.small"
      }, listTitle), Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Badge"], {
        count: this.getIncompleteTasks().length
      })), this.renderMenu(!name)), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["CardBody"], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["List"], {
        items: listTasks
      }))))));
    }
  }]);

  return TaskList;
}(external_this_wp_element_["Component"]);
/* harmony default export */ var list = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select(external_this_wc_data_["ONBOARDING_STORE_NAME"]),
      getProfileItems = _select.getProfileItems,
      getTasksStatus = _select.getTasksStatus;

  var _select2 = select(external_this_wc_data_["SETTINGS_STORE_NAME"]),
      getSettings = _select2.getSettings;

  var _select3 = select(external_this_wc_data_["PLUGINS_STORE_NAME"]),
      getActivePlugins = _select3.getActivePlugins,
      getInstalledPlugins = _select3.getInstalledPlugins,
      isJetpackConnected = _select3.isJetpackConnected;

  var profileItems = getProfileItems();

  var _getSettings = getSettings('general'),
      _getSettings$general = _getSettings.general,
      generalSettings = _getSettings$general === void 0 ? {} : _getSettings$general;

  var countryCode = Object(utils["b" /* getCountryCode */])(generalSettings.woocommerce_default_country);
  var activePlugins = getActivePlugins();
  var installedPlugins = getInstalledPlugins();
  var onboardingStatus = getTasksStatus();
  return {
    activePlugins: activePlugins,
    countryCode: countryCode,
    isJetpackConnected: isJetpackConnected(),
    installedPlugins: installedPlugins,
    onboardingStatus: onboardingStatus,
    profileItems: profileItems
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  var _dispatch2 = dispatch(external_this_wc_data_["OPTIONS_STORE_NAME"]),
      updateOptions = _dispatch2.updateOptions;

  var _dispatch3 = dispatch(external_this_wc_data_["PLUGINS_STORE_NAME"]),
      installAndActivatePlugins = _dispatch3.installAndActivatePlugins;

  return {
    createNotice: createNotice,
    installAndActivatePlugins: installAndActivatePlugins,
    updateOptions: updateOptions
  };
}))(list_TaskList));
// CONCATENATED MODULE: ./client/task-list/index.js









function task_list_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function task_list_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { task_list_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { task_list_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function task_list_createSuper(Derived) { var hasNativeReflectConstruct = task_list_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function task_list_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */






/**
 * Internal dependencies
 */






var task_list_TaskDashboard = /*#__PURE__*/function (_Component) {
  inherits_default()(TaskDashboard, _Component);

  var _super = task_list_createSuper(TaskDashboard);

  function TaskDashboard(props) {
    var _this;

    classCallCheck_default()(this, TaskDashboard);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "getTaskStartedCount", function (taskName) {
      var userPreferences = _this.props.userPreferences;
      var trackedStartedTasks = userPreferences.task_list_tracked_started_tasks;

      if (!trackedStartedTasks || !trackedStartedTasks[taskName]) {
        return 0;
      }

      return trackedStartedTasks[taskName];
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "updateTrackStartedCount", function (taskName, newCount) {
      var userPreferences = _this.props.userPreferences;
      var trackedStartedTasks = userPreferences.task_list_tracked_started_tasks || {};
      userPreferences.updateUserPreferences({
        task_list_tracked_started_tasks: task_list_objectSpread(task_list_objectSpread({}, trackedStartedTasks || {}), {}, defineProperty_default()({}, taskName, newCount))
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "isTaskCompleted", function (taskName) {
      var trackedCompletedTasks = _this.props.trackedCompletedTasks;

      if (!trackedCompletedTasks) {
        return false;
      }

      return trackedCompletedTasks.includes(taskName);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onTaskSelect", function (taskName) {
      var trackStartedCount = _this.getTaskStartedCount(taskName);

      Object(external_this_wc_tracks_["recordEvent"])('tasklist_click', {
        task_name: taskName
      });

      if (!_this.isTaskCompleted(taskName)) {
        _this.updateTrackStartedCount(taskName, trackStartedCount + 1);
      }
    });

    _this.state = {
      isCartModalOpen: false
    };
    return _this;
  }

  createClass_default()(TaskDashboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.classList.add('woocommerce-onboarding');
      document.body.classList.add('woocommerce-task-dashboard__body');
    }
  }, {
    key: "getAllTasks",
    value: function getAllTasks() {
      var _this$props = this.props,
          activePlugins = _this$props.activePlugins,
          countryCode = _this$props.countryCode,
          createNotice = _this$props.createNotice,
          installAndActivatePlugins = _this$props.installAndActivatePlugins,
          installedPlugins = _this$props.installedPlugins,
          isJetpackConnected = _this$props.isJetpackConnected,
          onboardingStatus = _this$props.onboardingStatus,
          profileItems = _this$props.profileItems,
          query = _this$props.query;
      return tasks_getAllTasks({
        activePlugins: activePlugins,
        countryCode: countryCode,
        createNotice: createNotice,
        installAndActivatePlugins: installAndActivatePlugins,
        installedPlugins: installedPlugins,
        isJetpackConnected: isJetpackConnected,
        onboardingStatus: onboardingStatus,
        profileItems: profileItems,
        query: query,
        toggleCartModal: this.toggleCartModal.bind(this),
        onTaskSelect: this.onTaskSelect
      });
    }
  }, {
    key: "toggleCartModal",
    value: function toggleCartModal() {
      var isCartModalOpen = this.state.isCartModalOpen;

      if (!isCartModalOpen) {
        Object(external_this_wc_tracks_["recordEvent"])('tasklist_purchase_extensions');
      }

      this.setState({
        isCartModalOpen: !isCartModalOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          dismissedTasks = _this$props2.dismissedTasks,
          isExtendedTaskListComplete = _this$props2.isExtendedTaskListComplete,
          isExtendedTaskListHidden = _this$props2.isExtendedTaskListHidden,
          isSetupTaskListHidden = _this$props2.isSetupTaskListHidden,
          isTaskListComplete = _this$props2.isTaskListComplete,
          query = _this$props2.query,
          trackedCompletedTasks = _this$props2.trackedCompletedTasks;
      var isCartModalOpen = this.state.isCartModalOpen;
      var allTasks = this.getAllTasks();
      var extensionTasks = allTasks.extension,
          setupTasks = allTasks.setup;
      var task = query.task;
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, setupTasks && (!isSetupTaskListHidden || task) && Object(external_this_wp_element_["createElement"])(list, {
        dismissedTasks: dismissedTasks || [],
        isComplete: isTaskListComplete,
        query: query,
        tasks: setupTasks,
        title: Object(external_this_wp_i18n_["__"])('Get ready to start selling', 'woocommerce-admin'),
        trackedCompletedTasks: trackedCompletedTasks || []
      }), extensionTasks && !isExtendedTaskListHidden && Object(external_this_wp_element_["createElement"])(list, {
        dismissedTasks: dismissedTasks || [],
        isComplete: isExtendedTaskListComplete,
        name: 'extended_task_list',
        query: query,
        tasks: extensionTasks,
        title: Object(external_this_wp_i18n_["__"])('Extensions setup', 'woocommerce-admin'),
        trackedCompletedTasks: trackedCompletedTasks || []
      }), isCartModalOpen && Object(external_this_wp_element_["createElement"])(cart_modal, {
        onClose: function onClose() {
          return _this2.toggleCartModal();
        },
        onClickPurchaseLater: function onClickPurchaseLater() {
          return _this2.toggleCartModal();
        }
      }));
    }
  }]);

  return TaskDashboard;
}(external_this_wp_element_["Component"]);
/* harmony default export */ var task_list = __webpack_exports__["default"] = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select(external_this_wc_data_["ONBOARDING_STORE_NAME"]),
      getProfileItems = _select.getProfileItems,
      getTasksStatus = _select.getTasksStatus;

  var _select2 = select(external_this_wc_data_["SETTINGS_STORE_NAME"]),
      getSettings = _select2.getSettings;

  var _select3 = select(external_this_wc_data_["OPTIONS_STORE_NAME"]),
      getOption = _select3.getOption;

  var _select4 = select(external_this_wc_data_["PLUGINS_STORE_NAME"]),
      getActivePlugins = _select4.getActivePlugins,
      getInstalledPlugins = _select4.getInstalledPlugins,
      isJetpackConnected = _select4.isJetpackConnected;

  var profileItems = getProfileItems();
  var trackedCompletedTasks = getOption('woocommerce_task_list_tracked_completed_tasks') || [];

  var _getSettings = getSettings('general'),
      _getSettings$general = _getSettings.general,
      generalSettings = _getSettings$general === void 0 ? {} : _getSettings$general;

  var countryCode = Object(utils["b" /* getCountryCode */])(generalSettings.woocommerce_default_country);
  var activePlugins = getActivePlugins();
  var installedPlugins = getInstalledPlugins();
  var onboardingStatus = getTasksStatus();
  return {
    activePlugins: activePlugins,
    countryCode: countryCode,
    dismissedTasks: getOption('woocommerce_task_list_dismissed_tasks'),
    isExtendedTaskListComplete: getOption('woocommerce_extended_task_list_complete') === 'yes',
    isExtendedTaskListHidden: getOption('woocommerce_extended_task_list_hidden') === 'yes',
    isJetpackConnected: isJetpackConnected(),
    isSetupTaskListHidden: getOption('woocommerce_task_list_hidden') === 'yes',
    isTaskListComplete: getOption('woocommerce_task_list_complete') === 'yes',
    installedPlugins: installedPlugins,
    onboardingStatus: onboardingStatus,
    profileItems: profileItems,
    trackedCompletedTasks: trackedCompletedTasks
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  var _dispatch2 = dispatch(external_this_wc_data_["PLUGINS_STORE_NAME"]),
      installAndActivatePlugins = _dispatch2.installAndActivatePlugins;

  return {
    createNotice: createNotice,
    installAndActivatePlugins: installAndActivatePlugins
  };
}))(task_list_TaskDashboard));

/***/ })

}]);