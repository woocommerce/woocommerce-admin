(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[47],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getInAppPurchaseUrl; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WooCommerce dependencies
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

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ALLOWED_TAGS */
/* unused harmony export ALLOWED_ATTR */
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(756);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

var ALLOWED_TAGS = ['a', 'b', 'em', 'i', 'strong', 'p'];
var ALLOWED_ATTR = ['target', 'href', 'rel', 'name', 'download'];
/* harmony default export */ __webpack_exports__["a"] = (function (html) {
  return {
    __html: Object(dompurify__WEBPACK_IMPORTED_MODULE_0__["sanitize"])(html, {
      ALLOWED_TAGS: ALLOWED_TAGS,
      ALLOWED_ATTR: ALLOWED_ATTR
    })
  };
});

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return validateStoreAddress; });
/* unused harmony export getCountryStateOptions */
/* unused harmony export useGetCountryStateAutofill */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreAddress; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_9__);





/**
 * External dependencies
 */






/**
 * Internal dependencies
 */



var _getSetting = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_8__[/* getSetting */ "g"])('dataEndpoints', {
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

  if (!values.addressLine1.length) {
    errors.addressLine1 = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Please add an address', 'woocommerce-admin');
  }

  if (!values.countryState.length) {
    errors.countryState = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Please select a country / region', 'woocommerce-admin');
  }

  if (!values.city.length) {
    errors.city = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Please add a city', 'woocommerce-admin');
  }

  if (!values.postCode.length) {
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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      autofillCountry = _useState2[0],
      setAutofillCountry = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(''),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      autofillState = _useState4[0],
      setAutofillState = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
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
  }, [autofillCountry, autofillState]);
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
  var countryStateOptions = Object(react__WEBPACK_IMPORTED_MODULE_7__["useMemo"])(function () {
    return getCountryStateOptions();
  }, []);
  var countryStateAutofill = useGetCountryStateAutofill(countryStateOptions, getInputProps('countryState').value, setValue);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "woocommerce-store-address-fields"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_9__["TextControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Address line 1', 'woocommerce-admin'),
    required: true,
    autoComplete: "address-line1"
  }, getInputProps('addressLine1'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_9__["TextControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Address line 2 (optional)', 'woocommerce-admin'),
    required: true,
    autoComplete: "address-line2"
  }, getInputProps('addressLine2'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Country / Region', 'woocommerce-admin'),
    required: true,
    options: countryStateOptions,
    excludeSelectedOptions: false,
    showAllOnFocus: true,
    isSearchable: true
  }, getInputProps('countryState'), {
    controlClassName: getInputProps('countryState').className
  }), countryStateAutofill), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_9__["TextControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('City', 'woocommerce-admin'),
    required: true
  }, getInputProps('city'), {
    autoComplete: "address-level2"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_9__["TextControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Post code', 'woocommerce-admin'),
    required: true,
    autoComplete: "postal-code"
  }, getInputProps('postCode'))));
}

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultProps */
/* unused harmony export CardHeader */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_card_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(755);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(754);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



var defaultProps = {
  isBorderless: false,
  isShady: false,
  size: 'medium'
};
function CardHeader(props) {
  var className = props.className,
      isShady = props.isShady,
      additionalProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props, ["className", "isShady"]);

  var mergedProps = _objectSpread({}, defaultProps, {}, Object(_context__WEBPACK_IMPORTED_MODULE_6__[/* useCardContext */ "b"])(), {}, props);

  var isBorderless = mergedProps.isBorderless,
      size = mergedProps.size;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('components-card__header', isBorderless && 'is-borderless', isShady && 'is-shady', size && "is-size-".concat(size), className);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_styles_card_styles__WEBPACK_IMPORTED_MODULE_5__[/* HeaderUI */ "d"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, additionalProps, {
    className: classes
  }));
}
/* harmony default export */ __webpack_exports__["a"] = (CardHeader);
//# sourceMappingURL=header.js.map

/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);




/**
 * External dependencies
 */



function FormToggle(_ref) {
  var className = _ref.className,
      checked = _ref.checked,
      id = _ref.id,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? lodash__WEBPACK_IMPORTED_MODULE_4__["noop"] : _ref$onChange,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["className", "checked", "id", "onChange"]);

  var wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()('components-form-toggle', className, {
    'is-checked': checked
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    className: wrapperClasses
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: "components-form-toggle__input",
    id: id,
    type: "checkbox",
    checked: checked,
    onChange: onChange
  }, props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    className: "components-form-toggle__track"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    className: "components-form-toggle__thumb"
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (FormToggle);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(25);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(13);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(12);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(14);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(15);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(6);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/compose.js
var compose = __webpack_require__(185);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/text/index.js + 3 modules
var build_module_text = __webpack_require__(759);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/card/index.js
var card = __webpack_require__(920);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/card/header.js
var header = __webpack_require__(890);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/card/body.js
var body = __webpack_require__(921);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__(452);

// EXTERNAL MODULE: ./node_modules/@wordpress/primitives/build-module/svg/index.js
var svg = __webpack_require__(51);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/check.js


/**
 * WordPress dependencies
 */

var check = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M9 18.6L3.5 13l1-1L9 16.4l9.5-9.9 1 1z"
}));
/* harmony default export */ var library_check = (check);
//# sourceMappingURL=check.js.map
// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/chevron-right.js
var chevron_right = __webpack_require__(789);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: external {"this":["wc","components"]}
var external_this_wc_components_ = __webpack_require__(55);

// EXTERNAL MODULE: external {"this":["wc","navigation"]}
var external_this_wc_navigation_ = __webpack_require__(29);

// EXTERNAL MODULE: external {"this":["wc","data"]}
var external_this_wc_data_ = __webpack_require__(46);

// EXTERNAL MODULE: ./client/task-list/style.scss
var style = __webpack_require__(763);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/modal/index.js + 4 modules
var modal = __webpack_require__(714);

// EXTERNAL MODULE: external {"this":["wp","htmlEntities"]}
var external_this_wp_htmlEntities_ = __webpack_require__(69);

// EXTERNAL MODULE: ./client/settings/index.js
var client_settings = __webpack_require__(28);

// EXTERNAL MODULE: ./client/dashboard/utils.js
var utils = __webpack_require__(148);

// EXTERNAL MODULE: ./client/lib/sanitize-html/index.js
var sanitize_html = __webpack_require__(746);

// EXTERNAL MODULE: ./client/lib/tracks.js
var tracks = __webpack_require__(63);

// EXTERNAL MODULE: ./client/lib/in-app-purchase.js
var in_app_purchase = __webpack_require__(284);

// CONCATENATED MODULE: ./client/dashboard/components/cart-modal.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */







/**
 * WooCommerce dependencies
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

      Object(tracks["b" /* recordEvent */])('tasklist_modal_proceed_checkout', {
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
      Object(tracks["b" /* recordEvent */])('tasklist_modal_proceed_checkout', {
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
      Object(tracks["b" /* recordEvent */])('tasklist_modal_proceed_checkout', {
        product_ids: productIds,
        purchase_install: false
      });
      onClose();
    }
  }, {
    key: "renderProducts",
    value: function renderProducts() {
      var productIds = this.props.productIds;

      var _getSetting = Object(client_settings["g" /* getSetting */])('onboarding', {}),
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
      return Object(external_this_wp_element_["createElement"])(modal["a" /* default */], {
        title: Object(external_this_wp_i18n_["__"])('Would you like to purchase and install the following features now?', 'woocommerce-admin'),
        onRequestClose: function onRequestClose() {
          return _this2.onClose();
        },
        className: "woocommerce-cart-modal"
      }, this.renderProducts(), Object(external_this_wp_element_["createElement"])("p", {
        className: "woocommerce-cart-modal__help-text"
      }, Object(external_this_wp_i18n_["__"])("You won't have access to this functionality until the extensions have been purchased and installed.", 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-cart-modal__actions"
      }, Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
        isLink: true,
        isBusy: purchaseLaterButtonBusy,
        onClick: function onClick() {
          return _this2.onClickPurchaseLater();
        }
      }, Object(external_this_wp_i18n_["__"])("I'll do it later", 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
        isPrimary: true,
        isBusy: purchaseNowButtonBusy,
        onClick: function onClick() {
          return _this2.onClickPurchaseNow();
        }
      }, Object(external_this_wp_i18n_["__"])('Purchase & install now', 'woocommerce-admin'))));
    }
  }]);

  return CartModal;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var cart_modal = (Object(compose["a" /* default */])(Object(external_this_wp_data_["withSelect"])(function (select) {
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
var regenerator = __webpack_require__(16);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(37);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: external {"this":["wp","hooks"]}
var external_this_wp_hooks_ = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(5);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(7);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: external {"this":["wp","apiFetch"]}
var external_this_wp_apiFetch_ = __webpack_require__(31);
var external_this_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_this_wp_apiFetch_);

// EXTERNAL MODULE: ./client/wc-api/constants.js
var constants = __webpack_require__(36);

// CONCATENATED MODULE: ./client/task-list/tasks/appearance.js











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function appearance_createSuper(Derived) { var hasNativeReflectConstruct = appearance_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function appearance_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */







/**
 * WooCommerce dependencies
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

    var _getSetting = Object(client_settings["g" /* getSetting */])('onboarding', {}),
        hasHomepage = _getSetting.hasHomepage,
        hasProducts = _getSetting.hasProducts;

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
      var _getSetting2 = Object(client_settings["g" /* getSetting */])('onboarding', {}),
          themeMods = _getSetting2.themeMods;

      if (themeMods.custom_logo) {
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

      var createNotice = this.props.createNotice;
      this.setState({
        isPending: true
      });
      Object(tracks["b" /* recordEvent */])('tasklist_appearance_import_demo', {});
      external_this_wp_apiFetch_default()({
        path: "".concat(constants["f" /* WC_ADMIN_NAMESPACE */], "/onboarding/tasks/import_sample_products"),
        method: 'POST'
      }).then(function (result) {
        if (result.failed && result.failed.length) {
          createNotice('error', Object(external_this_wp_i18n_["__"])('There was an error importing some of the sample products.', 'woocommerce-admin'));
        } else {
          createNotice('success', Object(external_this_wp_i18n_["__"])('All sample products have been imported.', 'woocommerce-admin'));
          Object(client_settings["h" /* setSetting */])('onboarding', _objectSpread(_objectSpread({}, Object(client_settings["g" /* getSetting */])('onboarding', {})), {}, {
            hasProducts: true
          }));
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

      var createNotice = this.props.createNotice;
      this.setState({
        isPending: true
      });
      Object(tracks["b" /* recordEvent */])('tasklist_appearance_create_homepage', {
        create_homepage: true
      });
      external_this_wp_apiFetch_default()({
        path: '/wc-admin/onboarding/tasks/create_homepage',
        method: 'POST'
      }).then(function (response) {
        createNotice(response.status, response.message, {
          actions: response.edit_post_link ? [{
            label: Object(external_this_wp_i18n_["__"])('Customize', 'woocommerce-admin'),
            onClick: function onClick() {
              Object(tracks["a" /* queueRecordEvent */])('tasklist_appearance_customize_homepage', {});
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
        var _this$props, updateOptions, createNotice, logo, _getSetting3, stylesheet, themeMods, updatedThemeMods, update;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, updateOptions = _this$props.updateOptions, createNotice = _this$props.createNotice;
                logo = this.state.logo;
                _getSetting3 = Object(client_settings["g" /* getSetting */])('onboarding', {}), stylesheet = _getSetting3.stylesheet, themeMods = _getSetting3.themeMods;
                updatedThemeMods = _objectSpread(_objectSpread({}, themeMods), {}, {
                  custom_logo: logo ? logo.id : null
                });
                Object(tracks["b" /* recordEvent */])('tasklist_appearance_upload_logo');
                Object(client_settings["h" /* setSetting */])('onboarding', _objectSpread(_objectSpread({}, Object(client_settings["g" /* getSetting */])('onboarding', {})), {}, {
                  themeMods: updatedThemeMods
                }));
                this.setState({
                  isUpdatingLogo: true
                });
                _context.next = 9;
                return updateOptions(defineProperty_default()({}, "theme_mods_".concat(stylesheet), updatedThemeMods));

              case 9:
                update = _context.sent;

                if (update.success) {
                  this.setState({
                    isUpdatingLogo: false
                  });
                  createNotice('success', Object(external_this_wp_i18n_["__"])('Store logo updated sucessfully.', 'woocommerce-admin'));
                  this.completeStep();
                } else {
                  createNotice('error', update.message);
                }

              case 11:
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
        var _this$props2, updateOptions, createNotice, storeNoticeText, update;

        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$props2 = this.props, updateOptions = _this$props2.updateOptions, createNotice = _this$props2.createNotice;
                storeNoticeText = this.state.storeNoticeText;
                Object(tracks["b" /* recordEvent */])('tasklist_appearance_set_store_notice', {
                  added_text: Boolean(storeNoticeText.length)
                });
                Object(client_settings["h" /* setSetting */])('onboarding', _objectSpread(_objectSpread({}, Object(client_settings["g" /* getSetting */])('onboarding', {})), {}, {
                  isAppearanceComplete: true
                }));
                this.setState({
                  isUpdatingNotice: true
                });
                _context2.next = 7;
                return updateOptions({
                  woocommerce_task_list_appearance_complete: true,
                  woocommerce_demo_store: storeNoticeText.length ? 'yes' : 'no',
                  woocommerce_demo_store_notice: storeNoticeText
                });

              case 7:
                update = _context2.sent;

                if (update.success) {
                  this.setState({
                    isUpdatingNotice: false
                  });
                  createNotice('success', Object(external_this_wp_i18n_["__"])("🎨 Your store is looking great! Don't forget to continue personalizing it.", 'woocommerce-admin'));
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
        content: Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
          onClick: this.importProducts,
          isBusy: isPending,
          isPrimary: true
        }, Object(external_this_wp_i18n_["__"])('Import products', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
          onClick: function onClick() {
            return _this5.completeStep();
          }
        }, Object(external_this_wp_i18n_["__"])('Skip', 'woocommerce-admin'))),
        visible: this.stepVisibility.import
      }, {
        key: 'homepage',
        label: Object(external_this_wp_i18n_["__"])('Create a custom homepage', 'woocommerce-admin'),
        description: Object(external_this_wp_i18n_["__"])('Create a new homepage and customize it to suit your needs', 'woocommerce-admin'),
        content: Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
          isPrimary: true,
          isBusy: isPending,
          onClick: this.createHomepage
        }, Object(external_this_wp_i18n_["__"])('Create homepage', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
          onClick: function onClick() {
            Object(tracks["b" /* recordEvent */])('tasklist_appearance_create_homepage', {
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
        }), Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
          disabled: !logo && !isDirty,
          onClick: this.updateLogo,
          isBusy: isUpdatingLogo,
          isPrimary: true
        }, Object(external_this_wp_i18n_["__"])('Proceed', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
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
        }), Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
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
      }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Card"], {
        className: "is-narrow"
      }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Stepper"], {
        isPending: isUpdatingNotice || isUpdatingLogo || isPending,
        isVertical: true,
        currentStep: currentStep,
        steps: this.getSteps()
      })));
    }
  }]);

  return Appearance;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var appearance = (Object(compose["a" /* default */])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select(external_this_wc_data_["OPTIONS_STORE_NAME"]),
      getOption = _select.getOption;

  return {
    demoStoreNotice: getOption('woocommerce_demo_store_notice')
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  var _dispatch2 = dispatch(external_this_wc_data_["OPTIONS_STORE_NAME"]),
      updateOptions = _dispatch2.updateOptions;

  return {
    createNotice: createNotice,
    updateOptions: updateOptions
  };
}))(appearance_Appearance));
// CONCATENATED MODULE: ./client/task-list/tasks/products.js







function products_createSuper(Derived) { var hasNativeReflectConstruct = products_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function products_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */


/**
 * WooCommerce dependencies
 */



/**
 * Internal dependencies
 */


var subTasks = [{
  title: Object(external_this_wp_i18n_["__"])('Add manually (recommended)', 'woocommerce-admin'),
  content: Object(external_this_wp_i18n_["__"])('For small stores we recommend adding products manually', 'woocommerce-admin'),
  before: Object(external_this_wp_element_["createElement"])("i", {
    className: "material-icons-outlined"
  }, "add_box"),
  after: Object(external_this_wp_element_["createElement"])("i", {
    className: "material-icons-outlined"
  }, "chevron_right"),
  onClick: function onClick() {
    return Object(tracks["b" /* recordEvent */])('tasklist_add_product', {
      method: 'manually'
    });
  },
  href: Object(client_settings["f" /* getAdminLink */])('post-new.php?post_type=product&wc_onboarding_active_task=products&tutorial=true')
}, {
  title: Object(external_this_wp_i18n_["__"])('Import', 'woocommerce-admin'),
  content: Object(external_this_wp_i18n_["__"])('For larger stores we recommend importing all products at once via CSV file', 'woocommerce-admin'),
  before: Object(external_this_wp_element_["createElement"])("i", {
    className: "material-icons-outlined"
  }, "import_export"),
  after: Object(external_this_wp_element_["createElement"])("i", {
    className: "material-icons-outlined"
  }, "chevron_right"),
  onClick: function onClick() {
    return Object(tracks["b" /* recordEvent */])('tasklist_add_product', {
      method: 'import'
    });
  },
  href: Object(client_settings["f" /* getAdminLink */])('edit.php?post_type=product&page=product_importer&wc_onboarding_active_task=product-import')
}, {
  title: Object(external_this_wp_i18n_["__"])('Migrate', 'woocommerce-admin'),
  content: Object(external_this_wp_i18n_["__"])('For stores currently selling elsewhere we suggest using a product migration service', 'woocommerce-admin'),
  before: Object(external_this_wp_element_["createElement"])("i", {
    className: "material-icons-outlined"
  }, "cloud_download"),
  after: Object(external_this_wp_element_["createElement"])("i", {
    className: "material-icons-outlined"
  }, "chevron_right"),
  onClick: function onClick() {
    return Object(tracks["b" /* recordEvent */])('tasklist_add_product', {
      method: 'migrate'
    });
  },
  // @todo This should be replaced with the in-app purchase iframe when ready.
  href: 'https://woocommerce.com/products/cart2cart/',
  target: '_blank'
}];

var products_Products = /*#__PURE__*/function (_Component) {
  inherits_default()(Products, _Component);

  var _super = products_createSuper(Products);

  function Products() {
    classCallCheck_default()(this, Products);

    return _super.apply(this, arguments);
  }

  createClass_default()(Products, [{
    key: "render",
    value: function render() {
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Card"], {
        className: "woocommerce-task-card"
      }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["List"], {
        items: subTasks
      })));
    }
  }]);

  return Products;
}(external_this_wp_element_["Component"]);


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(33);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/interpolate-components/lib/index.js
var lib = __webpack_require__(42);
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






/**
 * WooCommerce dependencies
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
          skipText = _this$props3.skipText;
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, hasErrors ? Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
        isPrimary: true,
        onClick: function onClick() {
          return window.location.reload();
        }
      }, Object(external_this_wp_i18n_["__"])('Retry', 'woocommerce-admin')) : Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
        disabled: isRequesting,
        isBusy: this.state.isConnecting,
        isPrimary: true,
        onClick: this.connectJetpack
      }, Object(external_this_wp_i18n_["__"])('Connect', 'woocommerce-admin')), onSkip && Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
        onClick: onSkip
      }, skipText || Object(external_this_wp_i18n_["__"])('No thanks', 'woocommerce-admin')));
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
  setIsPending: prop_types_default.a.func
};
connect_Connect.defaultProps = {
  setIsPending: function setIsPending() {}
};
/* harmony default export */ var connect = (Object(compose["a" /* default */])(Object(external_this_wp_data_["withSelect"])(function (select, props) {
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
var store_address = __webpack_require__(766);

// CONCATENATED MODULE: ./client/task-list/tasks/steps/location.js











function location_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function location_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { location_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { location_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function location_createSuper(Derived) { var hasNativeReflectConstruct = location_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function location_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */



/**
 * WooCommerce dependencies
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
                  createNotice('error', Object(external_this_wp_i18n_["__"])('There was a problem saving your store location.', 'woocommerce-admin'));
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
        }), Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
          isPrimary: true,
          onClick: handleSubmit
        }, Object(external_this_wp_i18n_["__"])('Continue', 'woocommerce-admin')));
      });
    }
  }]);

  return StoreLocation;
}(external_this_wp_element_["Component"]);


// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/form-toggle/index.js
var form_toggle = __webpack_require__(902);

// EXTERNAL MODULE: ./client/lib/currency-context.js
var currency_context = __webpack_require__(218);

// CONCATENATED MODULE: ./client/task-list/tasks/shipping/rates.js












function rates_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function rates_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { rates_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { rates_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function rates_createSuper(Derived) { var hasNativeReflectConstruct = rates_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function rates_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */





/**
 * WooCommerce dependencies
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

        var _this$props, createNotice, shippingZones, restOfTheWorld, shippingCost;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, createNotice = _this$props.createNotice, shippingZones = _this$props.shippingZones;
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
                Object(tracks["b" /* recordEvent */])('tasklist_shipping_set_costs', {
                  shipping_cost: shippingCost,
                  rest_world: restOfTheWorld
                }); // @todo This is a workaround to force the task to mark as complete.
                // This should probably be updated to use wc-api so we can fetch shipping methods.

                Object(client_settings["h" /* setSetting */])('onboarding', rates_objectSpread(rates_objectSpread({}, Object(client_settings["g" /* getSetting */])('onboarding', {})), {}, {
                  shippingZonesCount: 1
                }));
                createNotice('success', Object(external_this_wp_i18n_["__"])('Your shipping rates have been updated.', 'woocommerce-admin'));
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
          Object(external_this_wp_element_["createElement"])("i", {
            className: "material-icons-outlined"
          }, "public")), Object(external_this_wp_element_["createElement"])("div", {
            className: "woocommerce-shipping-rate__main"
          }, zone.toggleable ? Object(external_this_wp_element_["createElement"])("label", {
            htmlFor: "woocommerce-shipping-rate__toggle-".concat(zone.id),
            className: "woocommerce-shipping-rate__name"
          }, zone.name, Object(external_this_wp_element_["createElement"])(form_toggle["a" /* default */], extends_default()({
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
        })), Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
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
/* harmony default export */ var shipping_rates = (rates_ShippingRates);
// CONCATENATED MODULE: ./client/task-list/tasks/shipping/index.js











function shipping_createSuper(Derived) { var hasNativeReflectConstruct = shipping_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function shipping_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */







/**
 * WooCommerce dependencies
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
                // the wc-api to make these methods and states more readily available.

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
        createNotice('success', Object(external_this_wp_i18n_["__"])("📦 Shipping is done! Don't worry, you can always change it later.", 'woocommerce-admin'));
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
          isJetpackConnected = _this$props3.isJetpackConnected;
      var pluginsToActivate = this.getPluginsToActivate();
      var requiresJetpackConnection = !isJetpackConnected && countryCode === 'US';
      var steps = [{
        key: 'store_location',
        label: Object(external_this_wp_i18n_["__"])('Set store location', 'woocommerce-admin'),
        description: Object(external_this_wp_i18n_["__"])('The address from which your business operates', 'woocommerce-admin'),
        content: Object(external_this_wp_element_["createElement"])(location_StoreLocation, extends_default()({}, this.props, {
          onComplete: function onComplete(values) {
            var country = Object(utils["b" /* getCountryCode */])(values.countryState);
            Object(tracks["b" /* recordEvent */])('tasklist_shipping_set_location', {
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
        visible: true
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
        }) : Object(external_this_wp_i18n_["__"])('With WooCommerce Services and Jetpack you can save time at the ' + 'Post Office by printing your shipping labels at home', 'woocommerce-admin'),
        content: Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Plugins"], extends_default()({
          onComplete: function onComplete() {
            Object(tracks["b" /* recordEvent */])('tasklist_shipping_label_printing', {
              install: true,
              pluginsToActivate: pluginsToActivate
            });

            _this2.completeStep();
          },
          onSkip: function onSkip() {
            Object(tracks["b" /* recordEvent */])('tasklist_shipping_label_printing', {
              install: false,
              pluginsToActivate: pluginsToActivate
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
          redirectUrl: Object(client_settings["f" /* getAdminLink */])('admin.php?page=wc-admin'),
          completeStep: this.completeStep
        }, this.props, {
          onConnect: function onConnect() {
            Object(tracks["b" /* recordEvent */])('tasklist_shipping_connect_store');
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
      }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Card"], {
        className: "is-narrow"
      }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Stepper"], {
        isPending: isPending || isUpdateSettingsRequesting,
        isVertical: true,
        currentStep: step,
        steps: this.getSteps()
      })));
    }
  }]);

  return Shipping;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var shipping = (Object(compose["a" /* default */])(Object(external_this_wp_data_["withSelect"])(function (select) {
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

  var _getSetting = Object(client_settings["g" /* getSetting */])('dataEndpoints', {}),
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
// EXTERNAL MODULE: ./client/lib/notices/index.js
var notices = __webpack_require__(220);

// CONCATENATED MODULE: ./client/task-list/tasks/tax.js












function tax_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function tax_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { tax_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { tax_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function tax_createSuper(Derived) { var hasNativeReflectConstruct = tax_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function tax_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */







/**
 * WooCommerce dependencies
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
      var countryCode = this.props.countryCode;

      var _getSetting = Object(client_settings["g" /* getSetting */])('onboarding', {}),
          _getSetting$automated = _getSetting.automatedTaxSupportedCountries,
          automatedTaxSupportedCountries = _getSetting$automated === void 0 ? [] : _getSetting$automated,
          taxJarActivated = _getSetting.taxJarActivated;

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

        var _this$props2, generalSettings, updateAndPersistSettingsForGroup;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props2 = this.props, generalSettings = _this$props2.generalSettings, updateAndPersistSettingsForGroup = _this$props2.updateAndPersistSettingsForGroup;

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

      var _this$props3 = this.props,
          createNotice = _this$props3.createNotice,
          updateAndPersistSettingsForGroup = _this$props3.updateAndPersistSettingsForGroup,
          generalSettings = _this$props3.generalSettings,
          taxSettings = _this$props3.taxSettings;
      Promise.all([updateAndPersistSettingsForGroup('tax', {
        tax: tax_objectSpread(tax_objectSpread({}, taxSettings), {}, {
          wc_connect_taxes_enabled: isEnabling ? 'yes' : 'no'
        })
      }), updateAndPersistSettingsForGroup('general', {
        general: tax_objectSpread(tax_objectSpread({}, generalSettings), {}, {
          woocommerce_calc_taxes: 'yes'
        })
      })]).then(function () {
        // @todo This is a workaround to force the task to mark as complete.
        // This should probably be updated to use wc-api so we can fetch tax rates.
        Object(client_settings["h" /* setSetting */])('onboarding', tax_objectSpread(tax_objectSpread({}, Object(client_settings["g" /* getSetting */])('onboarding', {})), {}, {
          isTaxComplete: true
        }));

        if (isEnabling) {
          createNotice('success', Object(external_this_wp_i18n_["__"])("You're awesome! One less item on your to-do list ✅", 'woocommerce-admin'));
          Object(external_this_wc_navigation_["getHistory"])().push(Object(external_this_wc_navigation_["getNewPath"])({}, '/', {}));
        } else {
          _this3.redirectToTaxSettings();
        }
      }).catch(function () {
        createNotice('error', Object(external_this_wp_i18n_["__"])('There was a problem updating your tax settings.', 'woocommerce-admin'));
      });
    }
  }, {
    key: "redirectToTaxSettings",
    value: function redirectToTaxSettings() {
      window.location = Object(client_settings["f" /* getAdminLink */])('admin.php?page=wc-settings&tab=tax&section=standard&wc_onboarding_active_task=tax');
    }
  }, {
    key: "getSteps",
    value: function getSteps() {
      var _this4 = this;

      var _this$props4 = this.props,
          generalSettings = _this$props4.generalSettings,
          isJetpackConnected = _this$props4.isJetpackConnected,
          isPending = _this$props4.isPending,
          tosAccepted = _this$props4.tosAccepted,
          updateOptions = _this$props4.updateOptions;
      var cachedPluginsToActivate = this.state.cachedPluginsToActivate;
      var steps = [{
        key: 'store_location',
        label: Object(external_this_wp_i18n_["__"])('Set store location', 'woocommerce-admin'),
        description: Object(external_this_wp_i18n_["__"])('The address from which your business operates', 'woocommerce-admin'),
        content: Object(external_this_wp_element_["createElement"])(location_StoreLocation, extends_default()({}, this.props, {
          onComplete: function onComplete(values) {
            var country = Object(utils["b" /* getCountryCode */])(values.countryState);
            Object(tracks["b" /* recordEvent */])('tasklist_tax_set_location', {
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
        label: Object(external_this_wp_i18n_["__"])('Install Jetpack and WooCommerce Services', 'woocommerce-admin'),
        description: Object(external_this_wp_i18n_["__"])('Jetpack and WooCommerce Services allow you to automate sales tax calculations', 'woocommerce-admin'),
        content: Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Plugins"], {
          onComplete: function onComplete() {
            Object(tracks["b" /* recordEvent */])('tasklist_tax_install_extensions', {
              install_extensions: true
            });
            updateOptions({
              woocommerce_setup_jetpack_opted_in: true
            });

            _this4.completeStep();
          },
          onSkip: function onSkip() {
            Object(tracks["a" /* queueRecordEvent */])('tasklist_tax_install_extensions', {
              install_extensions: false
            });

            _this4.manuallyConfigureTaxRates();
          },
          skipText: Object(external_this_wp_i18n_["__"])('Set up tax rates manually', 'woocommerce-admin')
        }), !tosAccepted && Object(external_this_wp_element_["createElement"])(build_module_text["a" /* default */], {
          variant: "caption",
          className: "woocommerce-task__caption"
        }, lib_default()({
          mixedString: Object(external_this_wp_i18n_["__"])('By installing Jetpack and WooCommerce Services you agree to the {{link}}Terms of Service{{/link}}.', 'woocommerce-admin'),
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
            Object(tracks["b" /* recordEvent */])('tasklist_tax_connect_store', {
              connect: true
            });
          },
          onSkip: function onSkip() {
            Object(tracks["a" /* queueRecordEvent */])('tasklist_tax_connect_store', {
              connect: false
            });

            _this4.manuallyConfigureTaxRates();
          },
          skipText: Object(external_this_wp_i18n_["__"])('Set up tax rates manually', 'woocommerce-admin')
        })),
        visible: !isJetpackConnected && this.isTaxJarSupported()
      }, {
        key: 'manual_configuration',
        label: Object(external_this_wp_i18n_["__"])('Configure tax rates', 'woocommerce-admin'),
        description: Object(external_this_wp_i18n_["__"])('Head over to the tax rate settings screen to configure your tax rates', 'woocommerce-admin'),
        content: Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
          disabled: isPending,
          isPrimary: true,
          isBusy: isPending,
          onClick: function onClick() {
            Object(tracks["b" /* recordEvent */])('tasklist_tax_config_rates');

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
    key: "render",
    value: function render() {
      var _this5 = this;

      var stepIndex = this.state.stepIndex;
      var _this$props5 = this.props,
          isPending = _this$props5.isPending,
          isResolving = _this$props5.isResolving;
      var step = this.getSteps()[stepIndex];
      return Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-task-tax"
      }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Card"], {
        className: "is-narrow"
      }, this.shouldShowSuccessScreen() ? Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-task-tax__success"
      }, Object(external_this_wp_element_["createElement"])("span", {
        className: "woocommerce-task-tax__success-icon",
        role: "img",
        "aria-labelledby": "woocommerce-task-tax__success-message"
      }, "\uD83C\uDF8A"), Object(external_this_wp_element_["createElement"])(external_this_wc_components_["H"], {
        id: "woocommerce-task-tax__success-message"
      }, Object(external_this_wp_i18n_["__"])('Good news!', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])("p", null, lib_default()({
        mixedString: Object(external_this_wp_i18n_["__"])('{{strong}}Jetpack{{/strong}} and {{strong}}WooCommerce Services{{/strong}} ' + 'can automate your sales tax calculations for you.', 'woocommerce-admin'),
        components: {
          strong: Object(external_this_wp_element_["createElement"])("strong", null)
        }
      })), Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
        disabled: isPending,
        isPrimary: true,
        isBusy: isPending,
        onClick: function onClick() {
          Object(tracks["b" /* recordEvent */])('tasklist_tax_setup_automated_proceed', {
            setup_automatically: true
          });

          _this5.updateAutomatedTax(true);
        }
      }, Object(external_this_wp_i18n_["__"])('Yes please', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
        disabled: isPending,
        isBusy: isPending,
        onClick: function onClick() {
          Object(tracks["b" /* recordEvent */])('tasklist_tax_setup_automated_proceed', {
            setup_automatically: false
          });

          _this5.updateAutomatedTax(false);
        }
      }, Object(external_this_wp_i18n_["__"])("No thanks, I'll configure taxes manually", 'woocommerce-admin'))) : Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Stepper"], {
        isPending: isPending || isResolving,
        isVertical: true,
        currentStep: step.key,
        steps: this.getSteps()
      })));
    }
  }]);

  return Tax;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var tax = (Object(compose["a" /* default */])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select(external_this_wc_data_["SETTINGS_STORE_NAME"]),
      getSettings = _select.getSettings,
      isUpdateSettingsRequesting = _select.isUpdateSettingsRequesting;

  var _select2 = select(external_this_wc_data_["OPTIONS_STORE_NAME"]),
      getOption = _select2.getOption;

  var _select3 = select(external_this_wc_data_["PLUGINS_STORE_NAME"]),
      getActivePlugins = _select3.getActivePlugins,
      isJetpackConnected = _select3.isJetpackConnected,
      isPluginsRequesting = _select3.isPluginsRequesting;

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

  return {
    createNotice: createNotice,
    updateAndPersistSettingsForGroup: updateAndPersistSettingsForGroup,
    updateOptions: updateOptions
  };
}))(tax_Tax));
// EXTERNAL MODULE: ./client/wc-api/with-select.js
var with_select = __webpack_require__(104);

// EXTERNAL MODULE: ./client/task-list/tasks/payments/methods.js + 11 modules
var payments_methods = __webpack_require__(773);

// CONCATENATED MODULE: ./client/task-list/tasks/payments/index.js











function payments_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function payments_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { payments_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { payments_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function payments_createSuper(Derived) { var hasNativeReflectConstruct = payments_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function payments_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */






/**
 * WooCommerce dependencies
 */




/**
 * Internal dependencies
 */






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
    _this.completeTask = _this.completeTask.bind(assertThisInitialized_default()(_this));
    _this.markConfigured = _this.markConfigured.bind(assertThisInitialized_default()(_this));
    _this.skipTask = _this.skipTask.bind(assertThisInitialized_default()(_this));
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
    key: "completeTask",
    value: function () {
      var _completeTask = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var _this$props, createNotice, methods, updateOptions, update;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, createNotice = _this$props.createNotice, methods = _this$props.methods, updateOptions = _this$props.updateOptions;
                _context.next = 3;
                return updateOptions({
                  woocommerce_task_list_payments: {
                    completed: 1,
                    timestamp: Math.floor(Date.now() / 1000)
                  }
                });

              case 3:
                update = _context.sent;
                Object(tracks["b" /* recordEvent */])('tasklist_payment_done', {
                  configured: methods.filter(function (method) {
                    return method.isConfigured;
                  }).map(function (method) {
                    return method.key;
                  })
                });

                if (update.success) {
                  createNotice('success', Object(external_this_wp_i18n_["__"])('💰 Ka-ching! Your store can now accept payments 💳', 'woocommerce-admin'));
                  Object(external_this_wc_navigation_["getHistory"])().push(Object(external_this_wc_navigation_["getNewPath"])({}, '/', {}));
                } else {
                  createNotice('error', Object(external_this_wp_i18n_["__"])('There was a problem updating settings', 'woocommerce-admin'));
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function completeTask() {
        return _completeTask.apply(this, arguments);
      }

      return completeTask;
    }()
  }, {
    key: "skipTask",
    value: function skipTask() {
      var _this$props2 = this.props,
          methods = _this$props2.methods,
          updateOptions = _this$props2.updateOptions;
      updateOptions({
        woocommerce_task_list_payments: {
          skipped: 1,
          timestamp: Math.floor(Date.now() / 1000)
        }
      });
      Object(tracks["b" /* recordEvent */])('tasklist_payment_skip_task', {
        options: methods.map(function (method) {
          return method.key;
        })
      });
      Object(external_this_wc_navigation_["getHistory"])().push(Object(external_this_wc_navigation_["getNewPath"])({}, '/', {}));
    }
  }, {
    key: "markConfigured",
    value: function markConfigured(method) {
      var enabledMethods = this.state.enabledMethods;
      this.setState({
        enabledMethods: payments_objectSpread(payments_objectSpread({}, enabledMethods), {}, defineProperty_default()({}, method, true))
      });
      Object(external_this_wc_navigation_["getHistory"])().push(Object(external_this_wc_navigation_["getNewPath"])({
        task: 'payments'
      }, '/', {}));
      Object(tracks["b" /* recordEvent */])('tasklist_payment_connect_method', {
        payment_method: method
      });
    }
  }, {
    key: "getCurrentMethod",
    value: function getCurrentMethod() {
      var _this$props3 = this.props,
          methods = _this$props3.methods,
          query = _this$props3.query;

      if (!query.method) {
        return;
      }

      return methods.find(function (method) {
        return method.key === query.method;
      });
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
          onComplete: function onComplete() {
            Object(tracks["b" /* recordEvent */])('tasklist_payment_install_method', {
              plugins: currentMethod.plugins
            });
          },
          autoInstall: true,
          pluginSlugs: currentMethod.plugins
        }),
        isComplete: !pluginsToInstall.length
      };
    }
  }, {
    key: "toggleMethod",
    value: function toggleMethod(key) {
      var _this$props4 = this.props,
          methods = _this$props4.methods,
          options = _this$props4.options,
          updateOptions = _this$props4.updateOptions;
      var enabledMethods = this.state.enabledMethods;
      var method = methods.find(function (option) {
        return option.key === key;
      });
      enabledMethods[key] = !enabledMethods[key];
      this.setState({
        enabledMethods: enabledMethods
      });
      Object(tracks["b" /* recordEvent */])('tasklist_payment_toggle', {
        enabled: !method.isEnabled,
        payment_method: key
      });
      updateOptions(defineProperty_default()({}, method.optionName, payments_objectSpread(payments_objectSpread({}, options[method.optionName]), {}, {
        enabled: method.isEnabled ? 'no' : 'yes'
      })));
    }
  }, {
    key: "handleClick",
    value: function () {
      var _handleClick = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(method) {
        var _this2 = this;

        var methods, key, onClick;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                methods = this.props.methods;
                key = method.key, onClick = method.onClick;
                Object(tracks["b" /* recordEvent */])('tasklist_payment_setup', {
                  options: methods.map(function (option) {
                    return option.key;
                  }),
                  selected: key
                });

                if (!onClick) {
                  _context2.next = 8;
                  break;
                }

                this.setState({
                  busyMethod: key
                });
                _context2.next = 7;
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
                return _context2.abrupt("return");

              case 8:
                Object(external_this_wc_navigation_["updateQueryString"])({
                  method: key
                });

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleClick(_x) {
        return _handleClick.apply(this, arguments);
      }

      return handleClick;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var currentMethod = this.getCurrentMethod();
      var _this$state = this.state,
          busyMethod = _this$state.busyMethod,
          enabledMethods = _this$state.enabledMethods,
          recommendedMethod = _this$state.recommendedMethod;
      var _this$props5 = this.props,
          methods = _this$props5.methods,
          query = _this$props5.query,
          requesting = _this$props5.requesting;
      var hasEnabledMethods = Object.keys(enabledMethods).filter(function (method) {
        return enabledMethods[method];
      }).length;

      if (currentMethod) {
        return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Card"], {
          className: "woocommerce-task-payment-method is-narrow"
        }, Object(external_this_wp_element_["cloneElement"])(currentMethod.container, {
          query: query,
          installStep: this.getInstallStep(),
          markConfigured: this.markConfigured,
          hasCbdIndustry: currentMethod.hasCbdIndustry
        }));
      }

      return Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-task-payments"
      }, methods.map(function (method) {
        var before = method.before,
            container = method.container,
            content = method.content,
            isConfigured = method.isConfigured,
            key = method.key,
            title = method.title,
            visible = method.visible;

        if (!visible) {
          return null;
        }

        var classes = classnames_default()('woocommerce-task-payment', 'is-narrow', !isConfigured && 'woocommerce-task-payment-not-configured', 'woocommerce-task-payment-' + key);
        var isRecommended = key === recommendedMethod && !isConfigured;
        var showRecommendedRibbon = isRecommended && key !== 'wcpay';
        var showRecommendedPill = isRecommended && key === 'wcpay';
        return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Card"], {
          key: key,
          className: classes
        }, Object(external_this_wp_element_["createElement"])("div", {
          className: "woocommerce-task-payment__before"
        }, showRecommendedRibbon && Object(external_this_wp_element_["createElement"])("div", {
          className: "woocommerce-task-payment__recommended-ribbon"
        }, Object(external_this_wp_element_["createElement"])("span", null, Object(external_this_wp_i18n_["__"])('Recommended', 'woocommerce-admin'))), before), Object(external_this_wp_element_["createElement"])("div", {
          className: "woocommerce-task-payment__text"
        }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["H"], {
          className: "woocommerce-task-payment__title"
        }, title, showRecommendedPill && Object(external_this_wp_element_["createElement"])("span", {
          className: "woocommerce-task-payment__recommended-pill"
        }, Object(external_this_wp_i18n_["__"])('Recommended', 'woocommerce-admin'))), Object(external_this_wp_element_["createElement"])("div", {
          className: "woocommerce-task-payment__content"
        }, content)), Object(external_this_wp_element_["createElement"])("div", {
          className: "woocommerce-task-payment__after"
        }, container && !isConfigured ? Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
          isPrimary: key === recommendedMethod,
          isSecondary: key !== recommendedMethod,
          isBusy: busyMethod === key,
          disabled: busyMethod,
          onClick: function onClick() {
            return _this3.handleClick(method);
          }
        }, Object(external_this_wp_i18n_["__"])('Set up', 'woocommerce-admin')) : Object(external_this_wp_element_["createElement"])(form_toggle["a" /* default */], {
          checked: enabledMethods[key],
          onChange: function onChange() {
            return _this3.toggleMethod(key);
          },
          onClick: function onClick(e) {
            return e.stopPropagation();
          }
        })));
      }), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-task-payments__actions"
      }, !hasEnabledMethods ? Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
        isLink: true,
        onClick: this.skipTask
      }, Object(external_this_wp_i18n_["__"])('My store doesn’t take payments', 'woocommerce-admin')) : Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
        isPrimary: true,
        isBusy: requesting,
        onClick: this.completeTask
      }, Object(external_this_wp_i18n_["__"])('Done', 'woocommerce-admin'))));
    }
  }]);

  return Payments;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var tasks_payments = (Object(compose["a" /* default */])(Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  var _dispatch2 = dispatch(external_this_wc_data_["PLUGINS_STORE_NAME"]),
      installAndActivatePlugins = _dispatch2.installAndActivatePlugins;

  var _dispatch3 = dispatch(external_this_wc_data_["OPTIONS_STORE_NAME"]),
      updateOptions = _dispatch3.updateOptions;

  return {
    createNotice: createNotice,
    installAndActivatePlugins: installAndActivatePlugins,
    updateOptions: updateOptions
  };
}), Object(with_select["a" /* default */])(function (select, props) {
  var createNotice = props.createNotice,
      installAndActivatePlugins = props.installAndActivatePlugins;

  var _select = select(external_this_wc_data_["ONBOARDING_STORE_NAME"]),
      getProfileItems = _select.getProfileItems;

  var _select2 = select(external_this_wc_data_["OPTIONS_STORE_NAME"]),
      getOption = _select2.getOption,
      isOptionsUpdating = _select2.isOptionsUpdating;

  var _select3 = select(external_this_wc_data_["PLUGINS_STORE_NAME"]),
      getActivePlugins = _select3.getActivePlugins,
      isJetpackConnected = _select3.isJetpackConnected;

  var _select4 = select(external_this_wc_data_["SETTINGS_STORE_NAME"]),
      getSettings = _select4.getSettings;

  var _getSettings = getSettings('general'),
      _getSettings$general = _getSettings.general,
      generalSettings = _getSettings$general === void 0 ? {} : _getSettings$general;

  var activePlugins = getActivePlugins();
  var profileItems = getProfileItems();
  var optionNames = ['woocommerce_woocommerce_payments_settings', 'woocommerce_stripe_settings', 'woocommerce_ppec_paypal_settings', 'woocommerce_payfast_settings', 'woocommerce_square_credit_card_settings', 'woocommerce_klarna_payments_settings', 'woocommerce_kco_settings', 'wc_square_refresh_tokens', 'woocommerce_cod_settings', 'woocommerce_bacs_settings', 'woocommerce_bacs_accounts', 'woocommerce_eway_settings'];
  var options = optionNames.reduce(function (result, name) {
    result[name] = getOption(name);
    return result;
  }, {});
  var countryCode = Object(utils["b" /* getCountryCode */])(generalSettings.woocommerce_default_country);
  var methods = Object(payments_methods["a" /* getPaymentMethods */])({
    activePlugins: activePlugins,
    countryCode: countryCode,
    createNotice: createNotice,
    installAndActivatePlugins: installAndActivatePlugins,
    isJetpackConnected: isJetpackConnected(),
    options: options,
    profileItems: profileItems
  });
  var requesting = isOptionsUpdating();
  return {
    countryCode: countryCode,
    profileItems: profileItems,
    activePlugins: activePlugins,
    options: options,
    methods: methods,
    requesting: requesting
  };
}))(payments_Payments));
// CONCATENATED MODULE: ./client/task-list/tasks.js




/**
 * External dependencies
 */


/**
 * WooCommerce dependencies
 */




/**
 * Internal dependencies
 */









function recordTaskViewEvent(taskName, isJetpackConnected, activePlugins, installedPlugins) {
  Object(tracks["b" /* recordEvent */])('task_view', {
    task_name: taskName,
    wcs_installed: installedPlugins.includes('woocommerce-services'),
    wcs_active: activePlugins.includes('woocommerce-services'),
    jetpack_installed: installedPlugins.includes('jetpack'),
    jetpack_active: activePlugins.includes('jetpack'),
    jetpack_connected: isJetpackConnected
  });
}
function tasks_getAllTasks(_ref) {
  var countryCode = _ref.countryCode,
      profileItems = _ref.profileItems,
      taskListPayments = _ref.taskListPayments,
      query = _ref.query,
      toggleCartModal = _ref.toggleCartModal,
      activePlugins = _ref.activePlugins,
      installedPlugins = _ref.installedPlugins,
      installAndActivatePlugins = _ref.installAndActivatePlugins,
      createNotice = _ref.createNotice,
      isJetpackConnected = _ref.isJetpackConnected;

  var _getSetting = Object(client_settings["g" /* getSetting */])('onboarding', {
    hasPhysicalProducts: false,
    hasProducts: false,
    isAppearanceComplete: false,
    isTaxComplete: false,
    shippingZonesCount: 0
  }),
      hasPhysicalProducts = _getSetting.hasPhysicalProducts,
      hasProducts = _getSetting.hasProducts,
      isAppearanceComplete = _getSetting.isAppearanceComplete,
      isTaxComplete = _getSetting.isTaxComplete,
      shippingZonesCount = _getSetting.shippingZonesCount;

  var groupedProducts = Object(utils["a" /* getCategorizedOnboardingProducts */])(profileItems, installedPlugins);
  var products = groupedProducts.products,
      remainingProducts = groupedProducts.remainingProducts,
      uniqueItemsList = groupedProducts.uniqueItemsList;
  var paymentsCompleted = Boolean(taskListPayments && taskListPayments.completed);
  var paymentsSkipped = Boolean(taskListPayments && taskListPayments.skipped);
  var woocommercePaymentsInstalled = installedPlugins.indexOf('woocommerce-payments') !== -1;
  var profilerCompleted = profileItems.completed,
      productTypes = profileItems.product_types;

  var purchaseAndInstallText = Object(external_this_wp_i18n_["__"])('Purchase & install extensions');

  if (uniqueItemsList.length === 1) {
    var _uniqueItemsList$ = uniqueItemsList[0],
        itemName = _uniqueItemsList$.name,
        itemType = _uniqueItemsList$.type;
    var purchaseAndInstallFormat = itemType === 'theme' ? Object(external_this_wp_i18n_["__"])('Purchase & install %s theme', 'woocommerce-admin') : Object(external_this_wp_i18n_["__"])('Purchase & install %s extension', 'woocommerce-admin');
    purchaseAndInstallText = Object(external_this_wp_i18n_["sprintf"])(purchaseAndInstallFormat, itemName);
  }

  var tasks = [{
    key: 'store_details',
    title: Object(external_this_wp_i18n_["__"])('Store details', 'woocommerce-admin'),
    container: null,
    onClick: function onClick() {
      Object(tracks["b" /* recordEvent */])('tasklist_click', {
        task_name: 'store_details'
      });
      Object(external_this_wc_navigation_["getHistory"])().push(Object(external_this_wc_navigation_["getNewPath"])({}, "/profiler", {}));
    },
    completed: profilerCompleted,
    visible: true,
    time: Object(external_this_wp_i18n_["__"])('4 minutes', 'woocommerce-admin')
  }, {
    key: 'purchase',
    title: purchaseAndInstallText,
    container: null,
    onClick: function onClick() {
      Object(tracks["b" /* recordEvent */])('tasklist_click', {
        task_name: 'purchase'
      });
      return remainingProducts.length ? toggleCartModal() : null;
    },
    visible: products.length,
    completed: products.length && !remainingProducts.length,
    time: Object(external_this_wp_i18n_["__"])('2 minutes', 'woocommerce-admin'),
    isDismissable: true
  }, {
    key: 'products',
    title: Object(external_this_wp_i18n_["__"])('Add my products', 'woocommerce-admin'),
    container: Object(external_this_wp_element_["createElement"])(products_Products, null),
    onClick: function onClick() {
      Object(tracks["b" /* recordEvent */])('tasklist_click', {
        task_name: 'products'
      });
      Object(external_this_wc_navigation_["updateQueryString"])({
        task: 'products'
      });
    },
    completed: hasProducts,
    visible: true,
    time: Object(external_this_wp_i18n_["__"])('1 minute per product', 'woocommerce-admin')
  }, {
    key: 'woocommerce-payments',
    title: Object(external_this_wp_i18n_["__"])('Set up WooCommerce Payments', 'woocommerce-admin'),
    container: Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null),
    completed: paymentsCompleted || paymentsSkipped,
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
                  Object(tracks["b" /* recordEvent */])('tasklist_click', {
                    task_name: 'woocommerce-payments'
                  });
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
    time: Object(external_this_wp_i18n_["__"])('2 minutes', 'woocommerce-admin')
  }, {
    key: 'payments',
    title: Object(external_this_wp_i18n_["__"])('Set up payments', 'woocommerce-admin'),
    container: Object(external_this_wp_element_["createElement"])(tasks_payments, null),
    completed: paymentsCompleted || paymentsSkipped,
    onClick: function onClick() {
      Object(tracks["b" /* recordEvent */])('tasklist_click', {
        task_name: 'payments'
      });
      Object(external_this_wc_navigation_["updateQueryString"])({
        task: 'payments'
      });
    },
    visible: !woocommercePaymentsInstalled,
    time: Object(external_this_wp_i18n_["__"])('2 minutes', 'woocommerce-admin')
  }, {
    key: 'tax',
    title: Object(external_this_wp_i18n_["__"])('Set up tax', 'woocommerce-admin'),
    container: Object(external_this_wp_element_["createElement"])(tax, null),
    onClick: function onClick() {
      Object(tracks["b" /* recordEvent */])('tasklist_click', {
        task_name: 'tax'
      });
      Object(external_this_wc_navigation_["updateQueryString"])({
        task: 'tax'
      });
    },
    completed: isTaxComplete,
    visible: true,
    time: Object(external_this_wp_i18n_["__"])('1 minute', 'woocommerce-admin')
  }, {
    key: 'shipping',
    title: Object(external_this_wp_i18n_["__"])('Set up shipping', 'woocommerce-admin'),
    container: Object(external_this_wp_element_["createElement"])(shipping, null),
    onClick: function onClick() {
      Object(tracks["b" /* recordEvent */])('tasklist_click', {
        task_name: 'shipping'
      });
      Object(external_this_wc_navigation_["updateQueryString"])({
        task: 'shipping'
      });
    },
    completed: shippingZonesCount > 0,
    visible: productTypes && productTypes.includes('physical') || hasPhysicalProducts,
    time: Object(external_this_wp_i18n_["__"])('1 minute', 'woocommerce-admin')
  }, {
    key: 'appearance',
    title: Object(external_this_wp_i18n_["__"])('Personalize my store', 'woocommerce-admin'),
    container: Object(external_this_wp_element_["createElement"])(appearance, null),
    onClick: function onClick() {
      Object(tracks["b" /* recordEvent */])('tasklist_click', {
        task_name: 'appearance'
      });
      Object(external_this_wc_navigation_["updateQueryString"])({
        task: 'appearance'
      });
    },
    completed: isAppearanceComplete,
    visible: true,
    time: Object(external_this_wp_i18n_["__"])('2 minutes', 'woocommerce-admin')
  }];
  return Object(external_this_wp_hooks_["applyFilters"])('woocommerce_admin_onboarding_task_list', tasks, query);
}
// CONCATENATED MODULE: ./client/task-list/index.js








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
          isTaskListComplete = _this$props.isTaskListComplete,
          updateOptions = _this$props.updateOptions;

      if (!this.getIncompleteTasks().length && !isTaskListComplete) {
        updateOptions({
          woocommerce_task_list_complete: 'yes'
        });
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
      return this.getAllTasks().filter(function (task) {
        return task.visible && !task.completed;
      });
    }
  }, {
    key: "possiblyTrackCompletedTasks",
    value: function possiblyTrackCompletedTasks() {
      var _this$props2 = this.props,
          trackedCompletedTasks = _this$props2.trackedCompletedTasks,
          updateOptions = _this$props2.updateOptions;
      var completedTaskKeys = this.getCompletedTaskKeys();

      if (Object(external_lodash_["xor"])(trackedCompletedTasks, completedTaskKeys).length !== 0) {
        updateOptions({
          woocommerce_task_list_tracked_completed_tasks: completedTaskKeys
        });
      }
    }
  }, {
    key: "dismissTask",
    value: function dismissTask(key) {
      var _this2 = this;

      var _this$props3 = this.props,
          createNotice = _this$props3.createNotice,
          dismissedTasks = _this$props3.dismissedTasks,
          updateOptions = _this$props3.updateOptions;
      createNotice('success', Object(external_this_wp_i18n_["__"])('Task dismissed'), {
        actions: [{
          label: Object(external_this_wp_i18n_["__"])('Undo', 'woocommerce-admin'),
          onClick: function onClick() {
            return _this2.undoDismissTask(key);
          }
        }]
      });
      Object(tracks["b" /* recordEvent */])('tasklist_dismiss_task', {
        task_name: key
      });
      updateOptions({
        woocommerce_task_list_dismissed_tasks: [].concat(toConsumableArray_default()(dismissedTasks), [key])
      });
    }
  }, {
    key: "undoDismissTask",
    value: function undoDismissTask(key) {
      var _this$props4 = this.props,
          dismissedTasks = _this$props4.dismissedTasks,
          updateOptions = _this$props4.updateOptions;
      var updatedDismissedTasks = dismissedTasks.filter(function (task) {
        return task !== key;
      });
      updateOptions({
        woocommerce_task_list_dismissed_tasks: updatedDismissedTasks
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.classList.remove('woocommerce-onboarding');
      document.body.classList.remove('woocommerce-task-dashboard__body');
    }
  }, {
    key: "getAllTasks",
    value: function getAllTasks() {
      var _this$props5 = this.props,
          countryCode = _this$props5.countryCode,
          profileItems = _this$props5.profileItems,
          query = _this$props5.query,
          taskListPayments = _this$props5.taskListPayments,
          activePlugins = _this$props5.activePlugins,
          installedPlugins = _this$props5.installedPlugins,
          installAndActivatePlugins = _this$props5.installAndActivatePlugins,
          createNotice = _this$props5.createNotice,
          isJetpackConnected = _this$props5.isJetpackConnected;
      return tasks_getAllTasks({
        countryCode: countryCode,
        profileItems: profileItems,
        taskListPayments: taskListPayments,
        query: query,
        toggleCartModal: this.toggleCartModal.bind(this),
        activePlugins: activePlugins,
        installedPlugins: installedPlugins,
        installAndActivatePlugins: installAndActivatePlugins,
        createNotice: createNotice,
        isJetpackConnected: isJetpackConnected
      });
    }
  }, {
    key: "getVisibleTasks",
    value: function getVisibleTasks() {
      var dismissedTasks = this.props.dismissedTasks;
      return this.getAllTasks().filter(function (task) {
        return task.visible && !dismissedTasks.includes(task.key);
      });
    }
  }, {
    key: "recordTaskView",
    value: function recordTaskView() {
      var _this$props6 = this.props,
          isJetpackConnected = _this$props6.isJetpackConnected,
          activePlugins = _this$props6.activePlugins,
          installedPlugins = _this$props6.installedPlugins,
          query = _this$props6.query;
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
      Object(tracks["b" /* recordEvent */])('tasklist_view', {
        number_tasks: tasks.length,
        store_connected: profileItems.wccom_connected
      });
    }
  }, {
    key: "keepTaskCard",
    value: function keepTaskCard() {
      Object(tracks["b" /* recordEvent */])('tasklist_completed', {
        action: 'keep_card'
      });
      this.props.updateOptions({
        woocommerce_task_list_prompt_shown: true
      });
    }
  }, {
    key: "hideTaskCard",
    value: function hideTaskCard(action) {
      Object(tracks["b" /* recordEvent */])('tasklist_completed', {
        action: action
      });
      this.props.updateOptions({
        woocommerce_task_list_hidden: 'yes',
        woocommerce_task_list_prompt_shown: true
      });
    }
  }, {
    key: "getCurrentTask",
    value: function getCurrentTask() {
      var query = this.props.query;
      var task = query.task;
      var currentTask = this.getAllTasks().find(function (s) {
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
      var _this3 = this;

      return Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-card__menu woocommerce-card__header-item"
      }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["EllipsisMenu"], {
        label: Object(external_this_wp_i18n_["__"])('Task List Options', 'woocommerce-admin'),
        renderContent: function renderContent() {
          return Object(external_this_wp_element_["createElement"])("div", {
            className: "woocommerce-task-card__section-controls"
          }, Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
            onClick: function onClick() {
              return _this3.hideTaskCard('remove_card');
            }
          }, Object(external_this_wp_i18n_["__"])('Hide this', 'woocommerce-admin')));
        }
      }));
    }
  }, {
    key: "toggleCartModal",
    value: function toggleCartModal() {
      var isCartModalOpen = this.state.isCartModalOpen;

      if (!isCartModalOpen) {
        Object(tracks["b" /* recordEvent */])('tasklist_purchase_extensions');
      }

      this.setState({
        isCartModalOpen: !isCartModalOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var query = this.props.query;
      var isCartModalOpen = this.state.isCartModalOpen;
      var currentTask = this.getCurrentTask();
      var listTasks = this.getVisibleTasks().map(function (task) {
        task.className = classnames_default()(task.completed ? 'is-complete' : null, task.className);
        task.before = Object(external_this_wp_element_["createElement"])("div", {
          className: "woocommerce-task__icon"
        }, task.completed && Object(external_this_wp_element_["createElement"])(icon["a" /* default */], {
          icon: library_check
        }));
        task.title = Object(external_this_wp_element_["createElement"])(build_module_text["a" /* default */], {
          as: "div",
          variant: task.completed ? 'body.small' : 'button'
        }, task.title, task.additionalInfo && Object(external_this_wp_element_["createElement"])("div", {
          className: "woocommerce-task__additional-info",
          dangerouslySetInnerHTML: Object(sanitize_html["a" /* default */])(task.additionalInfo)
        }), task.time && !task.completed && Object(external_this_wp_element_["createElement"])("div", {
          className: "woocommerce-task__estimated-time"
        }, task.time));

        if (!task.completed) {
          task.after = task.isDismissable ? Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
            isTertiary: true,
            onClick: function onClick(event) {
              event.stopPropagation();

              _this4.dismissTask(task.key);
            }
          }, Object(external_this_wp_i18n_["__"])('Dismiss', 'woocommerce-admin')) : Object(external_this_wp_element_["createElement"])(icon["a" /* default */], {
            icon: chevron_right["a" /* default */]
          });
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
      var progressBarClass = classnames_default()('woocommerce-task-card__progress-bar', {
        completed: listTasks.length === this.getCompletedTaskKeys().length
      });
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-task-dashboard__container"
      }, currentTask ? Object(external_this_wp_element_["cloneElement"])(currentTask.container, {
        query: query
      }) : Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(card["a" /* default */], {
        size: "large",
        className: "woocommerce-task-card woocommerce-dashboard-card"
      }, Object(external_this_wp_element_["createElement"])("progress", {
        className: progressBarClass,
        max: listTasks.length,
        value: this.getCompletedTaskKeys().length
      }), Object(external_this_wp_element_["createElement"])(header["a" /* default */], {
        size: "medium"
      }, Object(external_this_wp_element_["createElement"])(build_module_text["a" /* default */], {
        variant: "title.small"
      }, Object(external_this_wp_i18n_["__"])('Finish setup', 'woocommerce-admin')), this.renderMenu()), Object(external_this_wp_element_["createElement"])(body["a" /* default */], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["List"], {
        items: listTasks
      }))))), isCartModalOpen && Object(external_this_wp_element_["createElement"])(cart_modal, {
        onClose: function onClose() {
          return _this4.toggleCartModal();
        },
        onClickPurchaseLater: function onClickPurchaseLater() {
          return _this4.toggleCartModal();
        }
      }));
    }
  }]);

  return TaskDashboard;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var task_list = __webpack_exports__["default"] = (Object(compose["a" /* default */])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select(external_this_wc_data_["ONBOARDING_STORE_NAME"]),
      getProfileItems = _select.getProfileItems;

  var _select2 = select(external_this_wc_data_["OPTIONS_STORE_NAME"]),
      getOption = _select2.getOption;

  var _select3 = select(external_this_wc_data_["SETTINGS_STORE_NAME"]),
      getSettings = _select3.getSettings;

  var _select4 = select(external_this_wc_data_["PLUGINS_STORE_NAME"]),
      getActivePlugins = _select4.getActivePlugins,
      getInstalledPlugins = _select4.getInstalledPlugins,
      isJetpackConnected = _select4.isJetpackConnected;

  var profileItems = getProfileItems();
  var isTaskListComplete = getOption('woocommerce_task_list_complete') || false;
  var taskListPayments = getOption('woocommerce_task_list_payments');
  var trackedCompletedTasks = getOption('woocommerce_task_list_tracked_completed_tasks') || [];
  var payments = getOption('woocommerce_task_list_payments');
  var dismissedTasks = getOption('woocommerce_task_list_dismissed_tasks') || [];

  var _getSettings = getSettings('general'),
      _getSettings$general = _getSettings.general,
      generalSettings = _getSettings$general === void 0 ? {} : _getSettings$general;

  var countryCode = Object(utils["b" /* getCountryCode */])(generalSettings.woocommerce_default_country);
  var activePlugins = getActivePlugins();
  var installedPlugins = getInstalledPlugins();
  return {
    activePlugins: activePlugins,
    countryCode: countryCode,
    dismissedTasks: dismissedTasks,
    isJetpackConnected: isJetpackConnected(),
    installedPlugins: installedPlugins,
    isTaskListComplete: isTaskListComplete,
    payments: payments,
    profileItems: profileItems,
    taskListPayments: taskListPayments,
    trackedCompletedTasks: trackedCompletedTasks
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
}))(task_list_TaskDashboard));

/***/ })

}]);