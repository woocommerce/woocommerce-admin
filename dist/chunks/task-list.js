(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[51],{

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getInAppPurchaseUrl; });
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
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

const getInAppPurchaseUrl = (url, queryArgs = {}) => {
  const {
    pathname,
    search
  } = window.location;
  const connectNonce = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_1__[/* getSetting */ "f"])('connectNonce', '');
  queryArgs = {
    'wccom-site': Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_1__[/* getSetting */ "f"])('siteUrl'),
    // If the site is installed in a directory the directory must be included in the back param path.
    'wccom-back': pathname + search,
    'wccom-woo-version': Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_1__[/* getSetting */ "f"])('wcVersion'),
    'wccom-connect-nonce': connectNonce,
    ...queryArgs
  };
  return Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__["addQueryArgs"])(url, queryArgs);
};

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var chevronRight = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"
}));
/* harmony default export */ __webpack_exports__["a"] = (chevronRight);
//# sourceMappingURL=chevron-right.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var check = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.3 5.6L9.9 16.9l-4.6-3.4-.9 1.2 5.8 4.3 9.3-12.6z"
}));
/* harmony default export */ __webpack_exports__["a"] = (check);
//# sourceMappingURL=check.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return groupListOfObjectsBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setAllPropsToValue; });
/**
 * Returns an object with items grouped by the sent key.
 *
 * @param {Array} array array of objects.
 * @param {string} key the object prop that will be used to group elements.
 * @param {string} defaultKey if the key is not found in the object, it will use this value.
 * @return {Object} Object that contains the grouped elements.
 */
const groupListOfObjectsBy = (array, key, defaultKey = 'undefined') => {
  if (array && Array.isArray(array) && array.length) {
    if (!key) {
      return array;
    }

    return array.reduce((result, currentValue) => {
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

const setAllPropsToValue = (obj, value) => {
  return Object.entries(obj).reduce((acc, [key]) => {
    return { ...acc,
      [key]: value
    };
  }, {});
};

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return validateStoreAddress; });
/* unused harmony export getCountryStateOptions */
/* unused harmony export useGetCountryStateAutofill */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreAddress; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_6__);



/**
 * External dependencies
 */






const {
  countries
} = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_5__[/* getSetting */ "f"])('dataEndpoints', {
  countries: {}
});
/**
 * Form validation.
 *
 * @param {Object} values Keyed values of all fields in the form.
 * @return {Object} Key value of fields and error messages, { myField: 'This field is required' }
 */

function validateStoreAddress(values) {
  const errors = {};

  if (!values.addressLine1.trim().length) {
    errors.addressLine1 = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Please add an address', 'woocommerce-admin');
  }

  if (!values.countryState.trim().length) {
    errors.countryState = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Please select a country / region', 'woocommerce-admin');
  }

  if (!values.city.trim().length) {
    errors.city = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Please add a city', 'woocommerce-admin');
  }

  if (!values.postCode.trim().length) {
    errors.postCode = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Please add a post code', 'woocommerce-admin');
  }

  return errors;
}
/**
 * Get all country and state combinations used for select dropdowns.
 *
 * @return {Object} Select options, { value: 'US:GA', label: 'United States - Georgia' }
 */

function getCountryStateOptions() {
  const countryStateOptions = countries.reduce((acc, country) => {
    if (!country.states.length) {
      acc.push({
        key: country.code,
        label: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__["decodeEntities"])(country.name)
      });
      return acc;
    }

    const countryStates = country.states.map(state => {
      return {
        key: country.code + ':' + state.code,
        label: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__["decodeEntities"])(country.name) + ' — ' + Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__["decodeEntities"])(state.name)
      };
    });
    acc.push(...countryStates);
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
  const [autofillCountry, setAutofillCountry] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const [autofillState, setAutofillState] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const isAutofillChange = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const option = options.find(opt => opt.key === countryState);
    const labels = option ? option.label.split(/\u2013|\u2014|\-/) : [];
    const newCountry = (labels[0] || '').trim();
    const newState = (labels[1] || '').trim();

    if (!isAutofillChange.current && (newCountry !== autofillCountry || newState !== autofillState)) {
      setAutofillCountry(newCountry);
      setAutofillState(newState);
    }

    isAutofillChange.current = false;
  }, [countryState]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!autofillCountry && !autofillState && countryState) {
      // Clear form.
      isAutofillChange.current = true;
      setValue('countryState', '');
    }

    let filteredOptions = [];
    const countrySearch = new RegExp(Object(lodash__WEBPACK_IMPORTED_MODULE_4__["escapeRegExp"])(autofillCountry), 'i');
    const stateSearch = new RegExp(Object(lodash__WEBPACK_IMPORTED_MODULE_4__["escapeRegExp"])(autofillState.replace(/\s/g, '')) + '$', // Always match the end of string for region.
    'i');

    if (autofillState.length || autofillCountry.length) {
      filteredOptions = options.filter(option => (autofillCountry.length ? countrySearch : stateSearch).test(option.label));
    }

    if (autofillCountry.length && autofillState.length) {
      const isStateAbbreviation = autofillState.length < 3;
      filteredOptions = filteredOptions.filter(option => stateSearch.test((isStateAbbreviation ? option.key : option.label).replace('-', '').replace(/\s/g, '')));
      const isCountryAbbreviation = autofillCountry.length < 3;

      if (filteredOptions.length > 1) {
        let countryKeyOptions = [];
        countryKeyOptions = filteredOptions.filter(option => countrySearch.test(isCountryAbbreviation ? option.key : option.label));

        if (countryKeyOptions.length > 0) {
          filteredOptions = countryKeyOptions;
        }
      }

      if (filteredOptions.length > 1) {
        let stateKeyOptions = [];
        stateKeyOptions = filteredOptions.filter(option => stateSearch.test((isStateAbbreviation ? option.key : option.label).replace('-', '').replace(/\s/g, '')));

        if (stateKeyOptions.length === 1) {
          filteredOptions = stateKeyOptions;
        }
      }
    }

    if (filteredOptions.length === 1 && countryState !== filteredOptions[0].key) {
      isAutofillChange.current = true;
      setValue('countryState', filteredOptions[0].key);
    }
  }, [autofillCountry, autofillState, options, setValue]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    onChange: event => setAutofillCountry(event.target.value),
    value: autofillCountry,
    name: "country",
    type: "text",
    className: "woocommerce-select-control__autofill-input",
    tabIndex: "-1",
    autoComplete: "country"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    onChange: event => setAutofillState(event.target.value),
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
  const {
    getInputProps,
    setValue
  } = props;
  const countryStateOptions = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => getCountryStateOptions(), []);
  const countryStateAutofill = useGetCountryStateAutofill(countryStateOptions, getInputProps('countryState').value, setValue);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "woocommerce-store-address-fields"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Address line 1', 'woocommerce-admin'),
    required: true,
    autoComplete: "address-line1"
  }, getInputProps('addressLine1'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Address line 2 (optional)', 'woocommerce-admin'),
    required: true,
    autoComplete: "address-line2"
  }, getInputProps('addressLine2'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Country / Region', 'woocommerce-admin'),
    required: true,
    autoComplete: "new-password" // disable autocomplete and autofill
    ,
    options: countryStateOptions,
    excludeSelectedOptions: false,
    showAllOnFocus: true,
    isSearchable: true
  }, getInputProps('countryState'), {
    controlClassName: getInputProps('countryState').className
  }), countryStateAutofill), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('City', 'woocommerce-admin'),
    required: true
  }, getInputProps('city'), {
    autoComplete: "address-level2"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Post code', 'woocommerce-admin'),
    required: true,
    autoComplete: "postal-code"
  }, getInputProps('postCode'))));
}

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/check.js
var check = __webpack_require__(475);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(7);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(11);

// EXTERNAL MODULE: external ["wc","explat"]
var external_wc_explat_ = __webpack_require__(122);

// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(16);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(21);

// EXTERNAL MODULE: ./client/task-list/style.scss
var style = __webpack_require__(541);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(14);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(4);

// EXTERNAL MODULE: external ["wp","htmlEntities"]
var external_wp_htmlEntities_ = __webpack_require__(28);

// EXTERNAL MODULE: ./packages/wc-admin-settings/build-module/index.js
var build_module = __webpack_require__(13);

// EXTERNAL MODULE: ./client/dashboard/utils.js
var utils = __webpack_require__(60);

// EXTERNAL MODULE: ./client/lib/sanitize-html/index.js
var sanitize_html = __webpack_require__(509);

// EXTERNAL MODULE: ./client/lib/in-app-purchase.js
var in_app_purchase = __webpack_require__(162);

// CONCATENATED MODULE: ./client/dashboard/components/cart-modal.js


/**
 * External dependencies
 */











/**
 * Internal dependencies
 */





class cart_modal_CartModal extends external_wp_element_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      purchaseNowButtonBusy: false,
      purchaseLaterButtonBusy: false
    };
  }

  onClickPurchaseNow() {
    const {
      productIds,
      onClickPurchaseNow
    } = this.props;
    this.setState({
      purchaseNowButtonBusy: true
    });

    if (!productIds.length) {
      return;
    }

    Object(external_wc_tracks_["recordEvent"])('tasklist_modal_proceed_checkout', {
      product_ids: productIds,
      purchase_install: true
    });
    const url = Object(in_app_purchase["a" /* getInAppPurchaseUrl */])('https://woocommerce.com/cart?utm_medium=product', {
      'wccom-replace-with': productIds.join(',')
    });

    if (onClickPurchaseNow) {
      onClickPurchaseNow(url);
      return;
    }

    window.location = url;
  }

  onClickPurchaseLater() {
    const {
      productIds
    } = this.props;
    Object(external_wc_tracks_["recordEvent"])('tasklist_modal_proceed_checkout', {
      product_ids: productIds,
      purchase_install: false
    });
    this.setState({
      purchaseLaterButtonBusy: true
    });
    this.props.onClickPurchaseLater();
  }

  onClose() {
    const {
      onClose,
      productIds
    } = this.props;
    Object(external_wc_tracks_["recordEvent"])('tasklist_modal_proceed_checkout', {
      product_ids: productIds,
      purchase_install: false
    });
    onClose();
  }

  renderProducts() {
    const {
      productIds,
      productTypes
    } = this.props;
    const {
      themes = []
    } = Object(build_module["f" /* getSetting */])('onboarding', {});
    const listItems = [];
    productIds.forEach(productId => {
      const productInfo = Object(external_lodash_["find"])(productTypes, productType => {
        return productType.product === productId;
      });

      if (productInfo) {
        listItems.push({
          title: productInfo.label,
          content: productInfo.description
        });
      }

      const themeInfo = Object(external_lodash_["find"])(themes, theme => {
        return theme.id === productId;
      });

      if (themeInfo) {
        listItems.push({
          title: Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('%s — %s per year', 'woocommerce-admin'), themeInfo.title, Object(external_wp_htmlEntities_["decodeEntities"])(themeInfo.price)),
          content: Object(external_wp_element_["createElement"])("span", {
            dangerouslySetInnerHTML: Object(sanitize_html["a" /* default */])(themeInfo.excerpt)
          })
        });
      }
    });
    return Object(external_wp_element_["createElement"])(external_wc_components_["List"], {
      items: listItems
    });
  }

  render() {
    const {
      purchaseNowButtonBusy,
      purchaseLaterButtonBusy
    } = this.state;
    return Object(external_wp_element_["createElement"])(external_wp_components_["Modal"], {
      title: Object(external_wp_i18n_["__"])('Would you like to add the following paid features to your store now?', 'woocommerce-admin'),
      onRequestClose: () => this.onClose(),
      className: "woocommerce-cart-modal"
    }, this.renderProducts(), Object(external_wp_element_["createElement"])("p", {
      className: "woocommerce-cart-modal__help-text"
    }, Object(external_wp_i18n_["__"])("You won't have access to this functionality until the extensions have been purchased and installed.", 'woocommerce-admin')), Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-cart-modal__actions"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      isLink: true,
      isBusy: purchaseLaterButtonBusy,
      onClick: () => this.onClickPurchaseLater()
    }, Object(external_wp_i18n_["__"])("I'll do it later", 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      isPrimary: true,
      isBusy: purchaseNowButtonBusy,
      onClick: () => this.onClickPurchaseNow()
    }, Object(external_wp_i18n_["__"])('Buy now', 'woocommerce-admin'))));
  }

}

/* harmony default export */ var cart_modal = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(select => {
  const {
    getInstalledPlugins
  } = select(external_wc_data_["PLUGINS_STORE_NAME"]);
  const {
    getProductTypes,
    getProfileItems
  } = select(external_wc_data_["ONBOARDING_STORE_NAME"]);
  const profileItems = getProfileItems();
  const installedPlugins = getInstalledPlugins();
  const productTypes = getProductTypes();
  const productIds = Object(utils["e" /* getProductIdsForCart */])(productTypes, profileItems, false, installedPlugins);
  return {
    profileItems,
    productIds,
    productTypes
  };
}))(cart_modal_CartModal));
// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(30);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(12);

// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__(17);
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// CONCATENATED MODULE: ./client/task-list/tasks/appearance.js


/**
 * External dependencies
 */











/**
 * Internal dependencies
 */

class appearance_Appearance extends external_wp_element_["Component"] {
  constructor(props) {
    super(props);
    const {
      hasHomepage,
      hasProducts
    } = props.tasksStatus;
    this.stepVisibility = {
      homepage: !hasHomepage,
      import: !hasProducts
    };
    this.state = {
      isDirty: false,
      isPending: false,
      logo: null,
      stepIndex: 0,
      isUpdatingLogo: false,
      isUpdatingNotice: false,
      storeNoticeText: props.demoStoreNotice || ''
    };
    this.completeStep = this.completeStep.bind(this);
    this.createHomepage = this.createHomepage.bind(this);
    this.importProducts = this.importProducts.bind(this);
    this.updateLogo = this.updateLogo.bind(this);
    this.updateNotice = this.updateNotice.bind(this);
  }

  componentDidMount() {
    const {
      themeMods
    } = this.props.tasksStatus;

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

  componentDidUpdate(prevProps) {
    const {
      isPending,
      logo
    } = this.state;
    const {
      demoStoreNotice
    } = this.props;

    if (logo && !logo.url && !isPending) {
      /* eslint-disable react/no-did-update-set-state */
      this.setState({
        isPending: true
      });
      wp.media.attachment(logo.id).fetch().then(() => {
        const logoUrl = wp.media.attachment(logo.id).get('url');
        this.setState({
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

  completeStep() {
    const {
      stepIndex
    } = this.state;
    const nextStep = this.getSteps()[stepIndex + 1];

    if (nextStep) {
      this.setState({
        stepIndex: stepIndex + 1
      });
    } else {
      Object(external_wc_navigation_["getHistory"])().push(Object(external_wc_navigation_["getNewPath"])({}, '/', {}));
    }
  }

  importProducts() {
    const {
      clearTaskStatusCache,
      createNotice
    } = this.props;
    this.setState({
      isPending: true
    });
    Object(external_wc_tracks_["recordEvent"])('tasklist_appearance_import_demo', {});
    external_wp_apiFetch_default()({
      path: `${external_wc_data_["WC_ADMIN_NAMESPACE"]}/onboarding/tasks/import_sample_products`,
      method: 'POST'
    }).then(result => {
      if (result.failed && result.failed.length) {
        createNotice('error', Object(external_wp_i18n_["__"])('There was an error importing some of the sample products', 'woocommerce-admin'));
      } else {
        createNotice('success', Object(external_wp_i18n_["__"])('All sample products have been imported', 'woocommerce-admin'));
        clearTaskStatusCache();
      }

      this.setState({
        isPending: false
      });
      this.completeStep();
    }).catch(error => {
      createNotice('error', error.message);
      this.setState({
        isPending: false
      });
    });
  }

  createHomepage() {
    const {
      clearTaskStatusCache,
      createNotice
    } = this.props;
    this.setState({
      isPending: true
    });
    Object(external_wc_tracks_["recordEvent"])('tasklist_appearance_create_homepage', {
      create_homepage: true
    });
    external_wp_apiFetch_default()({
      path: '/wc-admin/onboarding/tasks/create_homepage',
      method: 'POST'
    }).then(response => {
      clearTaskStatusCache();
      createNotice(response.status, response.message, {
        actions: response.edit_post_link ? [{
          label: Object(external_wp_i18n_["__"])('Customize', 'woocommerce-admin'),
          onClick: () => {
            Object(external_wc_tracks_["queueRecordEvent"])('tasklist_appearance_customize_homepage', {});
            window.location = `${response.edit_post_link}&wc_onboarding_active_task=homepage`;
          }
        }] : null
      });
      this.setState({
        isPending: false
      });
      this.completeStep();
    }).catch(error => {
      createNotice('error', error.message);
      this.setState({
        isPending: false
      });
    });
  }

  async updateLogo() {
    const {
      clearTaskStatusCache,
      createNotice,
      stylesheet,
      themeMods,
      updateOptions
    } = this.props;
    const {
      logo
    } = this.state;
    const updatedThemeMods = { ...themeMods,
      custom_logo: logo ? logo.id : null
    };
    Object(external_wc_tracks_["recordEvent"])('tasklist_appearance_upload_logo');
    this.setState({
      isUpdatingLogo: true
    });
    const update = await updateOptions({
      [`theme_mods_${stylesheet}`]: updatedThemeMods
    });
    clearTaskStatusCache();

    if (update.success) {
      this.setState({
        isUpdatingLogo: false
      });
      createNotice('success', Object(external_wp_i18n_["__"])('Store logo updated sucessfully', 'woocommerce-admin'));
      this.completeStep();
    } else {
      createNotice('error', update.message);
    }
  }

  async updateNotice() {
    const {
      clearTaskStatusCache,
      createNotice,
      updateOptions
    } = this.props;
    const {
      storeNoticeText
    } = this.state;
    Object(external_wc_tracks_["recordEvent"])('tasklist_appearance_set_store_notice', {
      added_text: Boolean(storeNoticeText.length)
    });
    this.setState({
      isUpdatingNotice: true
    });
    const update = await updateOptions({
      woocommerce_task_list_appearance_complete: true,
      woocommerce_demo_store: storeNoticeText.length ? 'yes' : 'no',
      woocommerce_demo_store_notice: storeNoticeText
    });
    clearTaskStatusCache();

    if (update.success) {
      this.setState({
        isUpdatingNotice: false
      });
      createNotice('success', Object(external_wp_i18n_["__"])("🎨 Your store is looking great! Don't forget to continue personalizing it", 'woocommerce-admin'));
      this.completeStep();
    } else {
      createNotice('error', update.message);
    }
  }

  getSteps() {
    const {
      isDirty,
      isPending,
      logo,
      storeNoticeText,
      isUpdatingLogo
    } = this.state;
    const steps = [{
      key: 'import',
      label: Object(external_wp_i18n_["__"])('Import sample products', 'woocommerce-admin'),
      description: Object(external_wp_i18n_["__"])('We’ll add some products that will make it easier to see what your store looks like', 'woocommerce-admin'),
      content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        onClick: this.importProducts,
        isBusy: isPending,
        isPrimary: true
      }, Object(external_wp_i18n_["__"])('Import products', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        onClick: () => this.completeStep()
      }, Object(external_wp_i18n_["__"])('Skip', 'woocommerce-admin'))),
      visible: this.stepVisibility.import
    }, {
      key: 'homepage',
      label: Object(external_wp_i18n_["__"])('Create a custom homepage', 'woocommerce-admin'),
      description: Object(external_wp_i18n_["__"])('Create a new homepage and customize it to suit your needs', 'woocommerce-admin'),
      content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isPrimary: true,
        isBusy: isPending,
        onClick: this.createHomepage
      }, Object(external_wp_i18n_["__"])('Create homepage', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isTertiary: true,
        onClick: () => {
          Object(external_wc_tracks_["recordEvent"])('tasklist_appearance_create_homepage', {
            create_homepage: false
          });
          this.completeStep();
        }
      }, Object(external_wp_i18n_["__"])('Skip', 'woocommerce-admin'))),
      visible: this.stepVisibility.homepage
    }, {
      key: 'logo',
      label: Object(external_wp_i18n_["__"])('Upload a logo', 'woocommerce-admin'),
      description: Object(external_wp_i18n_["__"])('Ensure your store is on-brand by adding your logo', 'woocommerce-admin'),
      content: isPending ? null : Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["ImageUpload"], {
        image: logo,
        onChange: image => this.setState({
          isDirty: true,
          logo: image
        })
      }), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        disabled: !logo && !isDirty,
        onClick: this.updateLogo,
        isBusy: isUpdatingLogo,
        isPrimary: true
      }, Object(external_wp_i18n_["__"])('Proceed', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isTertiary: true,
        onClick: () => this.completeStep()
      }, Object(external_wp_i18n_["__"])('Skip', 'woocommerce-admin'))),
      visible: true
    }, {
      key: 'notice',
      label: Object(external_wp_i18n_["__"])('Set a store notice', 'woocommerce-admin'),
      description: Object(external_wp_i18n_["__"])('Optionally display a prominent notice across all pages of your store', 'woocommerce-admin'),
      content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], {
        label: Object(external_wp_i18n_["__"])('Store notice text', 'woocommerce-admin'),
        placeholder: Object(external_wp_i18n_["__"])('Store notice text', 'woocommerce-admin'),
        value: storeNoticeText,
        onChange: value => this.setState({
          storeNoticeText: value
        })
      }), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        onClick: this.updateNotice,
        isPrimary: true
      }, Object(external_wp_i18n_["__"])('Complete task', 'woocommerce-admin'))),
      visible: true
    }];
    return Object(external_lodash_["filter"])(steps, step => step.visible);
  }

  render() {
    const {
      isPending,
      stepIndex,
      isUpdatingLogo,
      isUpdatingNotice
    } = this.state;
    const currentStep = this.getSteps()[stepIndex].key;
    return Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-task-appearance"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
      className: "woocommerce-task-card"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], null, Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
      isPending: isUpdatingNotice || isUpdatingLogo || isPending,
      isVertical: true,
      currentStep: currentStep,
      steps: this.getSteps()
    }))));
  }

}

/* harmony default export */ var appearance = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(select => {
  const {
    getOption
  } = select(external_wc_data_["OPTIONS_STORE_NAME"]);
  const {
    getTasksStatus
  } = select(external_wc_data_["ONBOARDING_STORE_NAME"]);
  const tasksStatus = getTasksStatus();
  return {
    demoStoreNotice: getOption('woocommerce_demo_store_notice'),
    stylesheet: getOption('stylesheet'),
    tasksStatus
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    createNotice
  } = dispatch('core/notices');
  const {
    updateOptions
  } = dispatch(external_wc_data_["OPTIONS_STORE_NAME"]);
  const {
    invalidateResolutionForStoreSelector
  } = dispatch(external_wc_data_["ONBOARDING_STORE_NAME"]);
  return {
    clearTaskStatusCache: () => invalidateResolutionForStoreSelector('getTasksStatus'),
    createNotice,
    updateOptions
  };
}))(appearance_Appearance));
// EXTERNAL MODULE: external ["wc","experimental"]
var external_wc_experimental_ = __webpack_require__(20);

// EXTERNAL MODULE: ./client/task-list/tasks/Marketing/Marketing.scss
var Marketing = __webpack_require__(593);

// EXTERNAL MODULE: ./client/lib/notices/index.js
var notices = __webpack_require__(507);

// EXTERNAL MODULE: ./client/task-list/tasks/Marketing/Plugin.scss
var Plugin = __webpack_require__(594);

// CONCATENATED MODULE: ./client/task-list/tasks/Marketing/Plugin.tsx


/**
 * External dependencies
 */





/**
 * Internal dependencies
 */


const Plugin_Plugin = ({
  description,
  imageUrl,
  installAndActivate = () => {},
  isActive,
  isBusy,
  isDisabled,
  isInstalled,
  manageUrl,
  name,
  slug
}) => {
  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-plugin-list__plugin"
  }, imageUrl && Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-plugin-list__plugin-logo"
  }, Object(external_wp_element_["createElement"])("img", {
    src: imageUrl,
    alt: Object(external_wp_i18n_["sprintf"])(
    /* translators: %s = name of the plugin */
    Object(external_wp_i18n_["__"])('%s logo', 'woocommerce-admin'), name)
  })), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-plugin-list__plugin-text"
  }, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    variant: "subtitle.small",
    as: "h4"
  }, name), Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    variant: "subtitle.small"
  }, description)), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-plugin-list__plugin-action"
  }, isActive && manageUrl && Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    disabled: isDisabled,
    isBusy: isBusy,
    isSecondary: true,
    href: Object(build_module["e" /* getAdminLink */])(manageUrl),
    onClick: () => Object(external_wc_tracks_["recordEvent"])('marketing_manage', {
      extension_name: slug
    })
  }, Object(external_wp_i18n_["__"])('Manage', 'woocommmerce-admin')), isInstalled && !isActive && Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    disabled: isDisabled,
    isBusy: isBusy,
    isSecondary: true,
    onClick: () => installAndActivate(slug)
  }, Object(external_wp_i18n_["__"])('Activate', 'woocommmerce-admin')), !isInstalled && Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    disabled: isDisabled,
    isBusy: isBusy,
    isSecondary: true,
    onClick: () => installAndActivate(slug)
  }, Object(external_wp_i18n_["__"])('Get started', 'woocommmerce-admin'))));
};
// EXTERNAL MODULE: ./client/task-list/tasks/Marketing/PluginList.scss
var PluginList = __webpack_require__(595);

// CONCATENATED MODULE: ./client/task-list/tasks/Marketing/PluginList.tsx


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



const PluginList_PluginList = ({
  currentPlugin,
  installAndActivate = () => {},
  plugins = [],
  title
}) => {
  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-plugin-list"
  }, title && Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-plugin-list__title"
  }, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    variant: "sectionheading",
    as: "h3"
  }, title)), plugins.map(plugin => {
    const {
      description,
      imageUrl,
      isActive,
      isInstalled,
      manageUrl,
      slug,
      name
    } = plugin;
    return Object(external_wp_element_["createElement"])(Plugin_Plugin, {
      key: slug,
      description: description,
      manageUrl: manageUrl,
      name: name,
      imageUrl: imageUrl,
      installAndActivate: installAndActivate,
      isActive: isActive,
      isBusy: currentPlugin === slug,
      isDisabled: !!currentPlugin,
      isInstalled: isInstalled,
      slug: slug
    });
  }));
};
// CONCATENATED MODULE: ./client/task-list/tasks/Marketing/index.tsx


/**
 * External dependencies
 */







/**
 * Internal dependencies
 */




const ALLOWED_PLUGIN_LISTS = ['reach', 'grow'];
const transformExtensionToPlugin = (extension, activePlugins, installedPlugins) => {
  const {
    description,
    image_url,
    key,
    manage_url,
    name
  } = extension;
  const slug = key.split(':')[0];
  return {
    description,
    slug,
    imageUrl: image_url,
    isActive: activePlugins.includes(slug),
    isInstalled: installedPlugins.includes(slug),
    manageUrl: manage_url,
    name
  };
};
const getMarketingExtensionLists = (freeExtensions, activePlugins, installedPlugins) => {
  const installed = [];
  const lists = [];
  freeExtensions.forEach(list => {
    if (!ALLOWED_PLUGIN_LISTS.includes(list.key)) {
      return;
    }

    const listPlugins = [];
    list.plugins.forEach(extension => {
      const plugin = transformExtensionToPlugin(extension, activePlugins, installedPlugins);

      if (plugin.isInstalled) {
        installed.push(plugin);
        return;
      }

      listPlugins.push(plugin);
    });

    if (!listPlugins.length) {
      return;
    }

    const transformedList = { ...list,
      plugins: listPlugins
    };
    lists.push(transformedList);
  });
  return [installed, lists];
};
const Marketing_Marketing = ({
  trackedCompletedActions
}) => {
  const [currentPlugin, setCurrentPlugin] = Object(external_wp_element_["useState"])(null);
  const {
    installAndActivatePlugins
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["PLUGINS_STORE_NAME"]);
  const {
    updateOptions
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["OPTIONS_STORE_NAME"]);
  const {
    activePlugins,
    freeExtensions,
    installedPlugins,
    isResolving
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getActivePlugins,
      getInstalledPlugins
    } = select(external_wc_data_["PLUGINS_STORE_NAME"]);
    const {
      getFreeExtensions,
      hasFinishedResolution
    } = select(external_wc_data_["ONBOARDING_STORE_NAME"]);
    return {
      activePlugins: getActivePlugins(),
      freeExtensions: getFreeExtensions(),
      installedPlugins: getInstalledPlugins(),
      isResolving: !hasFinishedResolution('getFreeExtensions')
    };
  });
  const [installedExtensions, pluginLists] = Object(external_wp_element_["useMemo"])(() => getMarketingExtensionLists(freeExtensions, activePlugins, installedPlugins), [installedPlugins, activePlugins, freeExtensions]);

  const installAndActivate = slug => {
    setCurrentPlugin(slug);
    installAndActivatePlugins([slug]).then(response => {
      Object(external_wc_tracks_["recordEvent"])('tasklist_marketing_install', {
        selected_extension: slug,
        installed_extensions: installedExtensions.map(extension => extension.slug)
      });

      if (!trackedCompletedActions.includes('marketing')) {
        updateOptions({
          woocommerce_task_list_tracked_completed_actions: [...trackedCompletedActions, 'marketing']
        });
      }

      Object(notices["a" /* createNoticesFromResponse */])(response);
      setCurrentPlugin(null);
    }).catch(response => {
      Object(notices["a" /* createNoticesFromResponse */])(response);
      setCurrentPlugin(null);
    });
  };

  if (isResolving) {
    return Object(external_wp_element_["createElement"])(external_wp_components_["Spinner"], null);
  }

  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-task-marketing"
  }, !!installedExtensions.length && Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
    className: "woocommerce-task-card"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardHeader"], null, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    variant: "title.small",
    as: "h2",
    className: "woocommerce-task-card__title"
  }, Object(external_wp_i18n_["__"])('Installed marketing extensions', 'woocommerce-admin'))), Object(external_wp_element_["createElement"])(PluginList_PluginList, {
    currentPlugin: currentPlugin,
    installAndActivate: installAndActivate,
    plugins: installedExtensions
  })), !!pluginLists.length && Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
    className: "woocommerce-task-card"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardHeader"], null, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    variant: "title.small",
    as: "h2",
    className: "woocommerce-task-card__title"
  }, Object(external_wp_i18n_["__"])('Recommended marketing extensions', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    as: "span"
  }, Object(external_wp_i18n_["__"])('We recommend adding one of the following marketing tools for your store. The extension will be installed and activated for you when you click "Get started".', 'woocommerce-admin'))), pluginLists.map(list => {
    const {
      key,
      title,
      plugins
    } = list;
    return Object(external_wp_element_["createElement"])(PluginList_PluginList, {
      currentPlugin: currentPlugin,
      installAndActivate: installAndActivate,
      key: key,
      plugins: plugins,
      title: title
    });
  })));
};
// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js + 2 modules
var icon = __webpack_require__(116);

// EXTERNAL MODULE: external ["wp","primitives"]
var external_wp_primitives_ = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/sidebar.js


/**
 * WordPress dependencies
 */

var sidebar = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ var library_sidebar = (sidebar);
//# sourceMappingURL=sidebar.js.map
// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/chevron-right.js
var chevron_right = __webpack_require__(473);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/plus-circle.js


/**
 * WordPress dependencies
 */

var plusCircle = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6zM10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"
}));
/* harmony default export */ var plus_circle = (plusCircle);
//# sourceMappingURL=plus-circle.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/archive.js


/**
 * WordPress dependencies
 */

var archive = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M19 6.2h-5.9l-.6-1.1c-.3-.7-1-1.1-1.8-1.1H5c-1.1 0-2 .9-2 2v11.8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8.2c0-1.1-.9-2-2-2zm.5 11.6c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h5.8c.2 0 .4.1.4.3l1 2H19c.3 0 .5.2.5.5v9.5zM8 12.8h8v-1.5H8v1.5zm0 3h8v-1.5H8v1.5z"
}));
/* harmony default export */ var library_archive = (archive);
//# sourceMappingURL=archive.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/download.js


/**
 * WordPress dependencies
 */

var download = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"
}));
/* harmony default export */ var library_download = (download);
//# sourceMappingURL=download.js.map
// EXTERNAL MODULE: ./client/task-list/tasks/products/product-template-modal.scss
var product_template_modal = __webpack_require__(596);

// CONCATENATED MODULE: ./client/task-list/tasks/products/product-template-modal.js


/**
 * External dependencies
 */








/**
 * Internal dependencies
 */




const ONBOARDING_PRODUCT_TEMPLATES_FILTER = 'woocommerce_admin_onboarding_product_templates';

const getProductTemplates = () => [{
  key: 'physical',
  title: Object(external_wp_i18n_["__"])('Physical product', 'woocommerce-admin'),
  subtitle: Object(external_wp_i18n_["__"])('Tangible items that get delivered to customers', 'woocommerce-admin')
}, {
  key: 'digital',
  title: Object(external_wp_i18n_["__"])('Digital product', 'woocommerce-admin'),
  subtitle: Object(external_wp_i18n_["__"])('Items that customers download or access through your website', 'woocommerce-admin')
}, {
  key: 'variable',
  title: Object(external_wp_i18n_["__"])('Variable product', 'woocommerce-admin'),
  subtitle: Object(external_wp_i18n_["__"])('Products with several versions that customers can choose from', 'woocommerce-admin')
}, {
  key: 'subscription',
  title: Object(external_wp_i18n_["__"])('Subscription product', 'woocommerce-admin'),
  subtitle: Object(external_wp_i18n_["__"])('Products that customers receive or gain access to regularly by paying in advance', 'woocommerce-admin')
}];

function ProductTemplateModal({
  onClose
}) {
  const [selectedTemplate, setSelectedTemplate] = Object(external_wp_element_["useState"])(null);
  const [isRedirecting, setIsRedirecting] = Object(external_wp_element_["useState"])(false);
  const {
    createProductFromTemplate
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["ITEMS_STORE_NAME"]);
  const {
    countryCode,
    profileItems
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getProfileItems
    } = select(external_wc_data_["ONBOARDING_STORE_NAME"]);
    const {
      getSettings
    } = select(external_wc_data_["SETTINGS_STORE_NAME"]);
    const {
      general: settings = {}
    } = getSettings('general');
    return {
      countryCode: Object(utils["b" /* getCountryCode */])(settings.woocommerce_default_country),
      profileItems: getProfileItems()
    };
  });
  const {
    installedPlugins
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getInstalledPlugins
    } = select(external_wc_data_["PLUGINS_STORE_NAME"]);
    return {
      installedPlugins: getInstalledPlugins()
    };
  });

  const createTemplate = () => {
    setIsRedirecting(true);
    Object(external_wc_tracks_["recordEvent"])('tasklist_product_template_selection', {
      product_type: selectedTemplate
    });

    if (selectedTemplate === 'subscription') {
      window.location = Object(build_module["e" /* getAdminLink */])('post-new.php?post_type=product&subscription_pointers=true');
      return;
    }

    if (selectedTemplate) {
      createProductFromTemplate({
        template_name: selectedTemplate,
        status: 'draft'
      }, {
        _fields: ['id']
      }).then(data => {
        if (data && data.id) {
          const link = Object(build_module["e" /* getAdminLink */])(`post.php?post=${data.id}&action=edit&wc_onboarding_active_task=products&tutorial=true`);
          window.location = link;
        }
      }, error => {
        // failed creating product with template
        Object(notices["a" /* createNoticesFromResponse */])(error);
        setIsRedirecting(false);
      });
    } else if (onClose) {
      Object(external_wc_tracks_["recordEvent"])('tasklist_product_template_dismiss');
      onClose();
    }
  };

  const removeSubscriptions = window.wcAdminFeatures && !window.wcAdminFeatures.subscriptions || countryCode !== 'US' || !profileItems.product_types.includes('subscriptions') || !installedPlugins.includes('woocommerce-payments');
  const productTemplates = removeSubscriptions ? getProductTemplates().filter(template => template.key !== 'subscription') : getProductTemplates();
  const templates = Object(external_wp_hooks_["applyFilters"])(ONBOARDING_PRODUCT_TEMPLATES_FILTER, productTemplates);
  return Object(external_wp_element_["createElement"])(external_wp_components_["Modal"], {
    title: Object(external_wp_i18n_["__"])('Start with a template'),
    isDismissible: true,
    onRequestClose: () => onClose(),
    className: "woocommerce-product-template-modal"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-product-template-modal__wrapper"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-product-template-modal__list"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["RadioControl"], {
    selected: selectedTemplate,
    options: templates.map(item => {
      return {
        label: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("span", {
          className: "woocommerce-product-template-modal__list-title"
        }, item.title), Object(external_wp_element_["createElement"])("span", {
          className: "woocommerce-product-template-modal__list-subtitle"
        }, item.subtitle)),
        value: item.key
      };
    }),
    onChange: setSelectedTemplate
  })), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-product-template-modal__actions"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isPrimary: true,
    isBusy: isRedirecting,
    disabled: !selectedTemplate || isRedirecting,
    onClick: createTemplate
  }, Object(external_wp_i18n_["__"])('Go')))));
}
// CONCATENATED MODULE: ./client/task-list/tasks/products/products.js


/**
 * External dependencies
 */









/**
 * Internal dependencies
 */




const getSubTasks = () => [{
  key: 'addProductTemplate',
  title: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('Start with a template', 'woocommerce-admin'), Object(external_wp_element_["createElement"])(external_wc_components_["Pill"], null, Object(external_wp_i18n_["__"])('Recommended', 'woocommerce-admin'))),
  content: Object(external_wp_i18n_["__"])('Use a template to add physical, digital, and variable products', 'woocommerce-admin'),
  before: Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: library_sidebar
  }),
  after: Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: chevron_right["a" /* default */]
  }),
  onClick: () => Object(external_wc_tracks_["recordEvent"])('tasklist_add_product', {
    method: 'product_template'
  })
}, {
  key: 'addProductManually',
  title: Object(external_wp_i18n_["__"])('Add manually', 'woocommerce-admin'),
  content: Object(external_wp_i18n_["__"])('For small stores we recommend adding products manually', 'woocommerce-admin'),
  before: Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: plus_circle
  }),
  after: Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: chevron_right["a" /* default */]
  }),
  onClick: () => Object(external_wc_tracks_["recordEvent"])('tasklist_add_product', {
    method: 'manually'
  }),
  href: Object(build_module["e" /* getAdminLink */])('post-new.php?post_type=product&wc_onboarding_active_task=products&tutorial=true')
}, {
  key: 'importProducts',
  title: Object(external_wp_i18n_["__"])('Import via CSV', 'woocommerce-admin'),
  content: Object(external_wp_i18n_["__"])('For larger stores we recommend importing all products at once via CSV file', 'woocommerce-admin'),
  before: Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: library_archive
  }),
  after: Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: chevron_right["a" /* default */]
  }),
  onClick: () => Object(external_wc_tracks_["recordEvent"])('tasklist_add_product', {
    method: 'import'
  }),
  href: Object(build_module["e" /* getAdminLink */])('edit.php?post_type=product&page=product_importer&wc_onboarding_active_task=product-import')
}, {
  key: 'migrateProducts',
  title: Object(external_wp_i18n_["__"])('Import from another service', 'woocommerce-admin'),
  content: Object(external_wp_i18n_["__"])('For stores currently selling elsewhere we suggest using a product migration service', 'woocommerce-admin'),
  before: Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: library_download
  }),
  after: Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: chevron_right["a" /* default */]
  }),
  onClick: () => Object(external_wc_tracks_["recordEvent"])('tasklist_add_product', {
    method: 'migrate'
  }),
  // @todo This should be replaced with the in-app purchase iframe when ready.
  href: 'https://woocommerce.com/products/cart2cart/?utm_medium=product',
  target: '_blank'
}];

function Products() {
  const [selectTemplate, setSelectTemplate] = Object(external_wp_element_["useState"])(null);
  const {
    countryCode,
    profileItems
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getProfileItems
    } = select(external_wc_data_["ONBOARDING_STORE_NAME"]);
    const {
      getSettings
    } = select(external_wc_data_["SETTINGS_STORE_NAME"]);
    const {
      general: settings = {}
    } = getSettings('general');
    return {
      countryCode: Object(utils["b" /* getCountryCode */])(settings.woocommerce_default_country),
      profileItems: getProfileItems()
    };
  });
  const {
    installedPlugins
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getInstalledPlugins
    } = select(external_wc_data_["PLUGINS_STORE_NAME"]);
    return {
      installedPlugins: getInstalledPlugins()
    };
  });
  const subTasks = getSubTasks();

  if (window.wcAdminFeatures && window.wcAdminFeatures.subscriptions && countryCode === 'US' && profileItems.product_types.includes('subscriptions') && installedPlugins.includes('woocommerce-payments')) {
    const task = subTasks.find(({
      key
    }) => key === 'addProductTemplate');
    task.content = Object(external_wp_i18n_["__"])('Use a template to add physical, digital, variable, and subscription products', 'woocommerce-admin');
  }

  const onTaskClick = task => {
    task.onClick();

    if (task.key === 'addProductTemplate') {
      setSelectTemplate(true);
    }
  };

  const listItems = subTasks.map(task => ({ ...task,
    onClick: () => onTaskClick(task)
  }));
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
    className: "woocommerce-task-card"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], {
    size: null
  }, Object(external_wp_element_["createElement"])(external_wc_components_["List"], {
    items: listItems
  }))), selectTemplate ? Object(external_wp_element_["createElement"])(ProductTemplateModal, {
    onClose: () => setSelectTemplate(null)
  }) : null);
}
// CONCATENATED MODULE: ./client/task-list/tasks/products/index.js
/**
 * Internal dependencies
 */



// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(35);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/interpolate-components/lib/index.js
var lib = __webpack_require__(18);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./client/dashboard/components/connect/index.js


/**
 * External dependencies
 */







class connect_Connect extends external_wp_element_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isConnecting: false
    };
    this.connectJetpack = this.connectJetpack.bind(this);
    props.setIsPending(true);
  }

  componentDidUpdate(prevProps) {
    const {
      createNotice,
      error,
      isRequesting,
      onError,
      setIsPending
    } = this.props;

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

  async connectJetpack() {
    const {
      jetpackConnectUrl,
      onConnect
    } = this.props;
    this.setState({
      isConnecting: true
    }, () => {
      if (onConnect) {
        onConnect();
      }

      window.location = jetpackConnectUrl;
    });
  }

  render() {
    const {
      hasErrors,
      isRequesting,
      onSkip,
      skipText,
      onAbort,
      abortText
    } = this.props;
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, hasErrors ? Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      isPrimary: true,
      onClick: () => window.location.reload()
    }, Object(external_wp_i18n_["__"])('Retry', 'woocommerce-admin')) : Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      disabled: isRequesting,
      isBusy: this.state.isConnecting,
      isPrimary: true,
      onClick: this.connectJetpack
    }, Object(external_wp_i18n_["__"])('Connect', 'woocommerce-admin')), onSkip && Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      onClick: onSkip
    }, skipText || Object(external_wp_i18n_["__"])('No thanks', 'woocommerce-admin')), onAbort && Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      onClick: onAbort
    }, abortText || Object(external_wp_i18n_["__"])('Abort', 'woocommerce-admin')));
  }

}
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
  setIsPending: () => {}
};
/* harmony default export */ var connect = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])((select, props) => {
  const {
    getJetpackConnectUrl,
    isPluginsRequesting,
    getPluginsError
  } = select(external_wc_data_["PLUGINS_STORE_NAME"]);
  const queryArgs = {
    redirect_url: props.redirectUrl || window.location.href
  };
  const isRequesting = isPluginsRequesting('getJetpackConnectUrl');
  const error = getPluginsError('getJetpackConnectUrl') || '';
  const jetpackConnectUrl = getJetpackConnectUrl(queryArgs);
  return {
    error,
    isRequesting,
    jetpackConnectUrl
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    createNotice
  } = dispatch('core/notices');
  return {
    createNotice
  };
}))(connect_Connect));
// EXTERNAL MODULE: ./client/dashboard/components/settings/general/store-address.js
var store_address = __webpack_require__(527);

// CONCATENATED MODULE: ./client/task-list/tasks/steps/location.js


/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


class location_StoreLocation extends external_wp_element_["Component"] {
  constructor() {
    super(...arguments);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(values) {
    const {
      onComplete,
      createNotice,
      isSettingsError,
      updateAndPersistSettingsForGroup,
      settings
    } = this.props;
    await updateAndPersistSettingsForGroup('general', {
      general: { ...settings,
        woocommerce_store_address: values.addressLine1,
        woocommerce_store_address_2: values.addressLine2,
        woocommerce_default_country: values.countryState,
        woocommerce_store_city: values.city,
        woocommerce_store_postcode: values.postCode
      }
    });

    if (!isSettingsError) {
      onComplete(values);
    } else {
      createNotice('error', Object(external_wp_i18n_["__"])('There was a problem saving your store location', 'woocommerce-admin'));
    }
  }

  getInitialValues() {
    const {
      settings
    } = this.props;
    const {
      woocommerce_store_address: storeAddress,
      woocommerce_store_address_2: storeAddress2,
      woocommerce_store_city: storeCity,
      woocommerce_default_country: defaultCountry,
      woocommerce_store_postcode: storePostcode
    } = settings;
    return {
      addressLine1: storeAddress || '',
      addressLine2: storeAddress2 || '',
      city: storeCity || '',
      countryState: defaultCountry || '',
      postCode: storePostcode || ''
    };
  }

  render() {
    const {
      isSettingsRequesting
    } = this.props;

    if (isSettingsRequesting) {
      return null;
    }

    return Object(external_wp_element_["createElement"])(external_wc_components_["Form"], {
      initialValues: this.getInitialValues(),
      onSubmit: this.onSubmit,
      validate: store_address["b" /* validateStoreAddress */]
    }, ({
      getInputProps,
      handleSubmit,
      setValue
    }) => Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(store_address["a" /* StoreAddress */], {
      getInputProps: getInputProps,
      setValue: setValue
    }), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      isPrimary: true,
      onClick: handleSubmit
    }, Object(external_wp_i18n_["__"])('Continue', 'woocommerce-admin'))));
  }

}
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/globe.js


/**
 * WordPress dependencies
 */

var globe = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M9 0C4.03 0 0 4.03 0 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zM1.11 9.68h2.51c.04.91.167 1.814.38 2.7H1.84c-.403-.85-.65-1.764-.73-2.7zm8.57-5.4V1.19c.964.366 1.756 1.08 2.22 2 .205.347.386.708.54 1.08l-2.76.01zm3.22 1.35c.232.883.37 1.788.41 2.7H9.68v-2.7h3.22zM8.32 1.19v3.09H5.56c.154-.372.335-.733.54-1.08.462-.924 1.255-1.64 2.22-2.01zm0 4.44v2.7H4.7c.04-.912.178-1.817.41-2.7h3.21zm-4.7 2.69H1.11c.08-.936.327-1.85.73-2.7H4c-.213.886-.34 1.79-.38 2.7zM4.7 9.68h3.62v2.7H5.11c-.232-.883-.37-1.788-.41-2.7zm3.63 4v3.09c-.964-.366-1.756-1.08-2.22-2-.205-.347-.386-.708-.54-1.08l2.76-.01zm1.35 3.09v-3.04h2.76c-.154.372-.335.733-.54 1.08-.464.92-1.256 1.634-2.22 2v-.04zm0-4.44v-2.7h3.62c-.04.912-.178 1.817-.41 2.7H9.68zm4.71-2.7h2.51c-.08.936-.327 1.85-.73 2.7H14c.21-.87.337-1.757.38-2.65l.01-.05zm0-1.35c-.046-.894-.176-1.78-.39-2.65h2.16c.403.85.65 1.764.73 2.7l-2.5-.05zm1-4H13.6c-.324-.91-.793-1.76-1.39-2.52 1.244.56 2.325 1.426 3.14 2.52h.04zm-9.6-2.52c-.597.76-1.066 1.61-1.39 2.52H2.65c.815-1.094 1.896-1.96 3.14-2.52zm-3.15 12H4.4c.324.91.793 1.76 1.39 2.52-1.248-.567-2.33-1.445-3.14-2.55l-.01.03zm9.56 2.52c.597-.76 1.066-1.61 1.39-2.52h1.76c-.82 1.08-1.9 1.933-3.14 2.48l-.01.04z"
}));
/* harmony default export */ var library_globe = (globe);
//# sourceMappingURL=globe.js.map
// EXTERNAL MODULE: ./client/lib/currency-context.js
var currency_context = __webpack_require__(501);

// CONCATENATED MODULE: ./client/task-list/tasks/shipping/rates.js



/**
 * External dependencies
 */











/**
 * Internal dependencies
 */



class rates_ShippingRates extends external_wp_element_["Component"] {
  constructor() {
    super(...arguments);
    this.updateShippingZones = this.updateShippingZones.bind(this);
  }

  getShippingMethods(zone, type = null) {
    // Sometimes the wc/v3/shipping/zones response does not include a methods attribute, return early if so.
    if (!zone || !zone.methods || !Array.isArray(zone.methods)) {
      return [];
    }

    if (!type) {
      return zone.methods;
    }

    return zone.methods ? zone.methods.filter(method => method.method_id === type) : [];
  }

  disableShippingMethods(zone, methods) {
    if (!methods.length) {
      return;
    }

    methods.forEach(method => {
      external_wp_apiFetch_default()({
        method: 'POST',
        path: `/wc/v3/shipping/zones/${zone.id}/methods/${method.instance_id}`,
        data: {
          enabled: false
        }
      });
    });
  }

  async updateShippingZones(values) {
    const {
      clearTaskStatusCache,
      createNotice,
      shippingZones
    } = this.props;
    let restOfTheWorld = false;
    let shippingCost = false;
    shippingZones.forEach(zone => {
      if (zone.id === 0) {
        restOfTheWorld = zone.toggleable && values[`${zone.id}_enabled`];
      } else {
        shippingCost = values[`${zone.id}_rate`] !== '' && parseFloat(values[`${zone.id}_rate`]) !== parseFloat(0);
      }

      const shippingMethods = this.getShippingMethods(zone);
      const methodType = parseFloat(values[`${zone.id}_rate`]) === parseFloat(0) ? 'free_shipping' : 'flat_rate';
      const shippingMethod = this.getShippingMethods(zone, methodType).length ? this.getShippingMethods(zone, methodType)[0] : null;

      if (zone.toggleable && !values[`${zone.id}_enabled`]) {
        // Disable any shipping methods that exist if toggled off.
        this.disableShippingMethods(zone, shippingMethods);
        return;
      } else if (shippingMethod) {
        // Disable all methods except the one being updated.
        const methodsToDisable = shippingMethods.filter(method => method.instance_id !== shippingMethod.instance_id);
        this.disableShippingMethods(zone, methodsToDisable);
      }

      external_wp_apiFetch_default()({
        method: 'POST',
        path: shippingMethod ? // Update the first existing method if one exists, otherwise create a new one.
        `/wc/v3/shipping/zones/${zone.id}/methods/${shippingMethod.instance_id}` : `/wc/v3/shipping/zones/${zone.id}/methods`,
        data: {
          method_id: methodType,
          enabled: true,
          settings: {
            cost: values[`${zone.id}_rate`]
          }
        }
      });
    });
    Object(external_wc_tracks_["recordEvent"])('tasklist_shipping_set_costs', {
      shipping_cost: shippingCost,
      rest_world: restOfTheWorld
    });
    clearTaskStatusCache();
    createNotice('success', Object(external_wp_i18n_["__"])('Your shipping rates have been updated', 'woocommerce-admin'));
    this.props.onComplete();
  }

  renderInputPrefix() {
    const {
      symbolPosition,
      symbol
    } = this.context.getCurrencyConfig();

    if (symbolPosition.indexOf('right') === 0) {
      return null;
    }

    return Object(external_wp_element_["createElement"])("span", {
      className: "woocommerce-shipping-rate__control-prefix"
    }, symbol);
  }

  renderInputSuffix(rate) {
    const {
      symbolPosition,
      symbol
    } = this.context.getCurrencyConfig();

    if (symbolPosition.indexOf('right') === 0) {
      return Object(external_wp_element_["createElement"])("span", {
        className: "woocommerce-shipping-rate__control-suffix"
      }, symbol);
    }

    return parseFloat(rate) === parseFloat(0) ? Object(external_wp_element_["createElement"])("span", {
      className: "woocommerce-shipping-rate__control-suffix"
    }, Object(external_wp_i18n_["__"])('Free shipping', 'woocommerce-admin')) : null;
  }

  getFormattedRate(value) {
    const {
      formatDecimalString
    } = this.context;
    const currencyString = formatDecimalString(value);

    if (!value.length || !currencyString.length) {
      return formatDecimalString(0);
    }

    return formatDecimalString(value);
  }

  getInitialValues() {
    const {
      formatDecimalString
    } = this.context;
    const values = {};
    this.props.shippingZones.forEach(zone => {
      const shippingMethods = this.getShippingMethods(zone);
      const rate = shippingMethods.length && shippingMethods[0].settings.cost ? this.getFormattedRate(shippingMethods[0].settings.cost.value) : formatDecimalString(0);
      values[`${zone.id}_rate`] = rate;

      if (shippingMethods.length && shippingMethods[0].enabled) {
        values[`${zone.id}_enabled`] = true;
      } else {
        values[`${zone.id}_enabled`] = false;
      }
    });
    return values;
  }

  validate(values) {
    const errors = {};
    const rates = Object.keys(values).filter(field => field.endsWith('_rate'));
    rates.forEach(rate => {
      if (values[rate] < 0) {
        errors[rate] = Object(external_wp_i18n_["__"])('Shipping rates can not be negative numbers.', 'woocommerce-admin');
      }
    });
    return errors;
  }

  render() {
    const {
      buttonText,
      shippingZones
    } = this.props;

    if (!shippingZones.length) {
      return null;
    }

    return Object(external_wp_element_["createElement"])(external_wc_components_["Form"], {
      initialValues: this.getInitialValues(),
      onSubmit: this.updateShippingZones,
      validate: this.validate
    }, ({
      getInputProps,
      handleSubmit,
      setTouched,
      setValue,
      values
    }) => {
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-shipping-rates"
      }, shippingZones.map(zone => Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-shipping-rate",
        key: zone.id
      }, Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-shipping-rate__icon"
      }, zone.locations ? zone.locations.map(location => Object(external_wp_element_["createElement"])(external_wc_components_["Flag"], {
        size: 24,
        code: location.code,
        key: location.code
      })) : // Icon used for zones without locations or "Rest of the world".
      Object(external_wp_element_["createElement"])(icon["a" /* default */], {
        icon: library_globe
      })), Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-shipping-rate__main"
      }, zone.toggleable ? Object(external_wp_element_["createElement"])("label", {
        htmlFor: `woocommerce-shipping-rate__toggle-${zone.id}`,
        className: "woocommerce-shipping-rate__name"
      }, zone.name, Object(external_wp_element_["createElement"])(external_wp_components_["FormToggle"], extends_default()({
        id: `woocommerce-shipping-rate__toggle-${zone.id}`
      }, getInputProps(`${zone.id}_enabled`)))) : Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-shipping-rate__name"
      }, zone.name), (!zone.toggleable || values[`${zone.id}_enabled`]) && Object(external_wp_element_["createElement"])(external_wc_components_["TextControlWithAffixes"], extends_default()({
        label: Object(external_wp_i18n_["__"])('Shipping cost', 'woocommerce-admin'),
        required: true
      }, getInputProps(`${zone.id}_rate`), {
        onBlur: () => {
          setTouched(`${zone.id}_rate`);
          setValue(`${zone.id}_rate`, this.getFormattedRate(values[`${zone.id}_rate`]));
        },
        prefix: this.renderInputPrefix(),
        suffix: this.renderInputSuffix(values[`${zone.id}_rate`]),
        className: "muriel-input-text woocommerce-shipping-rate__control-wrapper"
      })))))), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isPrimary: true,
        onClick: handleSubmit
      }, buttonText || Object(external_wp_i18n_["__"])('Update', 'woocommerce-admin')));
    });
  }

}

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
/* harmony default export */ var shipping_rates = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    invalidateResolutionForStoreSelector
  } = dispatch(external_wc_data_["ONBOARDING_STORE_NAME"]);
  return {
    clearTaskStatusCache: () => invalidateResolutionForStoreSelector('getTasksStatus')
  };
}))(rates_ShippingRates));
// CONCATENATED MODULE: ./client/task-list/tasks/shipping/index.js



/**
 * External dependencies
 */













/**
 * Internal dependencies
 */






class shipping_Shipping extends external_wp_element_["Component"] {
  constructor(props) {
    super(props);
    this.initialState = {
      isPending: false,
      step: 'store_location',
      shippingZones: []
    }; // Cache active plugins to prevent removal mid-step.

    this.activePlugins = props.activePlugins;
    this.state = this.initialState;
    this.completeStep = this.completeStep.bind(this);
  }

  componentDidMount() {
    this.reset();
  }

  reset() {
    this.setState(this.initialState);
  }

  async fetchShippingZones() {
    this.setState({
      isPending: true
    });
    const {
      countryCode,
      countryName
    } = this.props; // @todo The following fetches for shipping information should be moved into
    // @woocommerce/data to make these methods and states more readily available.

    const shippingZones = [];
    const zones = await external_wp_apiFetch_default()({
      path: '/wc/v3/shipping/zones'
    });
    let hasCountryZone = false;
    await Promise.all(zones.map(async zone => {
      // "Rest of the world zone"
      if (zone.id === 0) {
        zone.methods = await external_wp_apiFetch_default()({
          path: `/wc/v3/shipping/zones/${zone.id}/methods`
        });
        zone.name = Object(external_wp_i18n_["__"])('Rest of the world', 'woocommerce-admin');
        zone.toggleable = true;
        shippingZones.push(zone);
        return;
      } // Return any zone with a single location matching the country zone.


      zone.locations = await external_wp_apiFetch_default()({
        path: `/wc/v3/shipping/zones/${zone.id}/locations`
      });
      const countryLocation = zone.locations.find(location => countryCode === location.code);

      if (countryLocation) {
        zone.methods = await external_wp_apiFetch_default()({
          path: `/wc/v3/shipping/zones/${zone.id}/methods`
        });
        shippingZones.push(zone);
        hasCountryZone = true;
      }
    })); // Create the default store country zone if it doesn't exist.

    if (!hasCountryZone) {
      const zone = await external_wp_apiFetch_default()({
        method: 'POST',
        path: '/wc/v3/shipping/zones',
        data: {
          name: countryName
        }
      });
      zone.locations = await external_wp_apiFetch_default()({
        method: 'POST',
        path: `/wc/v3/shipping/zones/${zone.id}/locations`,
        data: [{
          code: countryCode,
          type: 'country'
        }]
      });
      shippingZones.push(zone);
    }

    shippingZones.reverse();
    this.setState({
      isPending: false,
      shippingZones
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      countryCode,
      settings
    } = this.props;
    const {
      woocommerce_store_address: storeAddress,
      woocommerce_default_country: defaultCountry,
      woocommerce_store_postcode: storePostCode
    } = settings;
    const {
      step
    } = this.state;

    if (step === 'rates' && (prevProps.countryCode !== countryCode || prevState.step !== 'rates')) {
      this.fetchShippingZones();
    }

    const isCompleteAddress = Boolean(storeAddress && defaultCountry && storePostCode);

    if (step === 'store_location' && isCompleteAddress) {
      this.completeStep();
    }
  }

  completeStep() {
    const {
      createNotice
    } = this.props;
    const {
      step
    } = this.state;
    const steps = this.getSteps();
    const currentStepIndex = steps.findIndex(s => s.key === step);
    const nextStep = steps[currentStepIndex + 1];

    if (nextStep) {
      this.setState({
        step: nextStep.key
      });
    } else {
      createNotice('success', Object(external_wp_i18n_["__"])("📦 Shipping is done! Don't worry, you can always change it later", 'woocommerce-admin'));
      Object(external_wc_navigation_["getHistory"])().push(Object(external_wc_navigation_["getNewPath"])({}, '/', {}));
    }
  }

  getPluginsToActivate() {
    const {
      countryCode
    } = this.props;
    const plugins = [];

    if (['GB', 'CA', 'AU'].includes(countryCode)) {
      plugins.push('woocommerce-shipstation-integration');
    } else if (countryCode === 'US') {
      plugins.push('woocommerce-services');
      plugins.push('jetpack');
    }

    return Object(external_lodash_["difference"])(plugins, this.activePlugins);
  }

  getSteps() {
    const {
      countryCode,
      isJetpackConnected,
      settings
    } = this.props;
    const pluginsToActivate = this.getPluginsToActivate();
    const requiresJetpackConnection = !isJetpackConnected && countryCode === 'US';
    const steps = [{
      key: 'store_location',
      label: Object(external_wp_i18n_["__"])('Set store location', 'woocommerce-admin'),
      description: Object(external_wp_i18n_["__"])('The address from which your business operates', 'woocommerce-admin'),
      content: Object(external_wp_element_["createElement"])(location_StoreLocation, extends_default()({}, this.props, {
        onComplete: values => {
          const country = Object(utils["b" /* getCountryCode */])(values.countryState);
          Object(external_wc_tracks_["recordEvent"])('tasklist_shipping_set_location', {
            country
          });
          this.completeStep();
        }
      })),
      visible: true
    }, {
      key: 'rates',
      label: Object(external_wp_i18n_["__"])('Set shipping costs', 'woocommerce-admin'),
      description: Object(external_wp_i18n_["__"])('Define how much customers pay to ship to different destinations', 'woocommerce-admin'),
      content: Object(external_wp_element_["createElement"])(shipping_rates, extends_default()({
        buttonText: pluginsToActivate.length || requiresJetpackConnection ? Object(external_wp_i18n_["__"])('Proceed', 'woocommerce-admin') : Object(external_wp_i18n_["__"])('Complete task', 'woocommerce-admin'),
        shippingZones: this.state.shippingZones,
        onComplete: this.completeStep
      }, this.props)),
      visible: settings.woocommerce_ship_to_countries === 'disabled' ? false : true
    }, {
      key: 'label_printing',
      label: Object(external_wp_i18n_["__"])('Enable shipping label printing', 'woocommerce-admin'),
      description: pluginsToActivate.includes('woocommerce-shipstation-integration') ? lib_default()({
        mixedString: Object(external_wp_i18n_["__"])('We recommend using ShipStation to save time at the post office by printing your shipping ' + 'labels at home. Try ShipStation free for 30 days. {{link}}Learn more{{/link}}.', 'woocommerce-admin'),
        components: {
          link: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
            href: "https://woocommerce.com/products/shipstation-integration?utm_medium=product",
            target: "_blank",
            type: "external"
          })
        }
      }) : Object(external_wp_i18n_["__"])('With WooCommerce Shipping you can save time ' + 'by printing your USPS and DHL Express shipping labels at home', 'woocommerce-admin'),
      content: Object(external_wp_element_["createElement"])(external_wc_components_["Plugins"], extends_default()({
        onComplete: (plugins, response) => {
          Object(notices["a" /* createNoticesFromResponse */])(response);
          Object(external_wc_tracks_["recordEvent"])('tasklist_shipping_label_printing', {
            install: true,
            plugins_to_activate: pluginsToActivate
          });
          this.completeStep();
        },
        onError: (errors, response) => Object(notices["a" /* createNoticesFromResponse */])(response),
        onSkip: () => {
          Object(external_wc_tracks_["recordEvent"])('tasklist_shipping_label_printing', {
            install: false,
            plugins_to_activate: pluginsToActivate
          });
          Object(external_wc_navigation_["getHistory"])().push(Object(external_wc_navigation_["getNewPath"])({}, '/', {}));
        },
        pluginSlugs: pluginsToActivate
      }, this.props)),
      visible: pluginsToActivate.length
    }, {
      key: 'connect',
      label: Object(external_wp_i18n_["__"])('Connect your store', 'woocommerce-admin'),
      description: Object(external_wp_i18n_["__"])('Connect your store to WordPress.com to enable label printing', 'woocommerce-admin'),
      content: Object(external_wp_element_["createElement"])(connect, extends_default()({
        redirectUrl: Object(build_module["e" /* getAdminLink */])('admin.php?page=wc-admin'),
        completeStep: this.completeStep
      }, this.props, {
        onConnect: () => {
          Object(external_wc_tracks_["recordEvent"])('tasklist_shipping_connect_store');
        }
      })),
      visible: requiresJetpackConnection
    }];
    return Object(external_lodash_["filter"])(steps, step => step.visible);
  }

  render() {
    const {
      isPending,
      step
    } = this.state;
    const {
      isUpdateSettingsRequesting
    } = this.props;
    return Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-task-shipping"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
      className: "woocommerce-task-card"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], null, Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
      isPending: isPending || isUpdateSettingsRequesting,
      isVertical: true,
      currentStep: step,
      steps: this.getSteps()
    }))));
  }

}
/* harmony default export */ var shipping = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(select => {
  const {
    getSettings,
    isUpdateSettingsRequesting
  } = select(external_wc_data_["SETTINGS_STORE_NAME"]);
  const {
    getActivePlugins,
    isJetpackConnected
  } = select(external_wc_data_["PLUGINS_STORE_NAME"]);
  const {
    general: settings = {}
  } = getSettings('general');
  const countryCode = Object(utils["b" /* getCountryCode */])(settings.woocommerce_default_country);
  const {
    countries = []
  } = Object(build_module["f" /* getSetting */])('dataEndpoints', {});
  const country = countryCode ? countries.find(c => c.code === countryCode) : null;
  const countryName = country ? country.name : null;
  const activePlugins = getActivePlugins();
  return {
    countryCode,
    countryName,
    isUpdateSettingsRequesting: isUpdateSettingsRequesting('general'),
    settings,
    activePlugins,
    isJetpackConnected: isJetpackConnected()
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    createNotice
  } = dispatch('core/notices');
  const {
    updateAndPersistSettingsForGroup
  } = dispatch(external_wc_data_["SETTINGS_STORE_NAME"]);
  return {
    createNotice,
    updateAndPersistSettingsForGroup
  };
}))(shipping_Shipping));
// CONCATENATED MODULE: ./client/task-list/tasks/tax.js



/**
 * External dependencies
 */













/**
 * Internal dependencies
 */






class tax_Tax extends external_wp_element_["Component"] {
  constructor(props) {
    super(props);
    const {
      hasCompleteAddress,
      pluginsToActivate
    } = props;
    this.initialState = {
      isPending: false,
      stepIndex: hasCompleteAddress ? 1 : 0,
      // Cache the value of pluginsToActivate so that we can
      // show/hide tasks based on it, but not have them update mid task.
      cachedPluginsToActivate: pluginsToActivate
    };
    this.state = this.initialState;
    this.completeStep = this.completeStep.bind(this);
  }

  componentDidMount() {
    const {
      query
    } = this.props;
    const {
      auto
    } = query;
    this.reset();

    if (auto === 'true') {
      this.enableAutomatedTax();
    }
  }

  reset() {
    this.setState(this.initialState);
  }

  shouldShowSuccessScreen() {
    const {
      isJetpackConnected,
      hasCompleteAddress,
      pluginsToActivate
    } = this.props;
    return hasCompleteAddress && !pluginsToActivate.length && isJetpackConnected && this.isTaxJarSupported();
  }

  isTaxJarSupported() {
    const {
      countryCode,
      tasksStatus
    } = this.props;
    const {
      automatedTaxSupportedCountries = [],
      taxJarActivated
    } = tasksStatus;
    return !taxJarActivated && // WCS integration doesn't work with the official TaxJar plugin.
    automatedTaxSupportedCountries.includes(countryCode);
  }

  completeStep() {
    const {
      stepIndex
    } = this.state;
    const steps = this.getSteps();
    const nextStep = steps[stepIndex + 1];

    if (nextStep) {
      this.setState({
        stepIndex: stepIndex + 1
      });
    }
  }

  async manuallyConfigureTaxRates() {
    const {
      generalSettings,
      updateAndPersistSettingsForGroup
    } = this.props;

    if (generalSettings.woocommerce_calc_taxes !== 'yes') {
      this.setState({
        isPending: true
      });
      updateAndPersistSettingsForGroup('general', {
        general: { ...generalSettings,
          woocommerce_calc_taxes: 'yes'
        }
      }).then(() => this.redirectToTaxSettings()).catch(error => Object(notices["a" /* createNoticesFromResponse */])(error));
    } else {
      this.redirectToTaxSettings();
    }
  }

  updateAutomatedTax(isEnabling) {
    const {
      clearTaskStatusCache,
      createNotice,
      updateAndPersistSettingsForGroup,
      generalSettings,
      taxSettings
    } = this.props;
    Promise.all([updateAndPersistSettingsForGroup('tax', {
      tax: { ...taxSettings,
        wc_connect_taxes_enabled: isEnabling ? 'yes' : 'no'
      }
    }), updateAndPersistSettingsForGroup('general', {
      general: { ...generalSettings,
        woocommerce_calc_taxes: 'yes'
      }
    })]).then(() => {
      clearTaskStatusCache();

      if (isEnabling) {
        createNotice('success', Object(external_wp_i18n_["__"])("You're awesome! One less item on your to-do list ✅", 'woocommerce-admin'));
        Object(external_wc_navigation_["getHistory"])().push(Object(external_wc_navigation_["getNewPath"])({}, '/', {}));
      } else {
        this.redirectToTaxSettings();
      }
    }).catch(() => {
      createNotice('error', Object(external_wp_i18n_["__"])('There was a problem updating your tax settings', 'woocommerce-admin'));
    });
  }

  redirectToTaxSettings() {
    window.location = Object(build_module["e" /* getAdminLink */])('admin.php?page=wc-settings&tab=tax&section=standard&wc_onboarding_active_task=tax');
  }

  doNotChargeSalesTax() {
    const {
      updateOptions
    } = this.props;
    Object(external_wc_tracks_["queueRecordEvent"])('tasklist_tax_connect_store', {
      connect: false,
      no_tax: true
    });
    updateOptions({
      woocommerce_no_sales_tax: true,
      woocommerce_calc_taxes: 'no'
    }).then(() => {
      window.location = Object(build_module["e" /* getAdminLink */])('admin.php?page=wc-admin');
    });
  }

  getSteps() {
    const {
      generalSettings,
      isJetpackConnected,
      isPending,
      tosAccepted,
      updateOptions
    } = this.props;
    const {
      cachedPluginsToActivate
    } = this.state;
    let step2Label, agreementText;

    if (cachedPluginsToActivate.includes('woocommerce-services')) {
      step2Label = Object(external_wp_i18n_["__"])('Install Jetpack and WooCommerce Tax', 'woocommerce-admin');
      agreementText = Object(external_wp_i18n_["__"])('By installing Jetpack and WooCommerce Tax you agree to the {{link}}Terms of Service{{/link}}.', 'woocommerce-admin');
    } else {
      step2Label = Object(external_wp_i18n_["__"])('Install Jetpack', 'woocommerce-admin');
      agreementText = Object(external_wp_i18n_["__"])('By installing Jetpack you agree to the {{link}}Terms of Service{{/link}}.', 'woocommerce-admin');
    }

    const steps = [{
      key: 'store_location',
      label: Object(external_wp_i18n_["__"])('Set store location', 'woocommerce-admin'),
      description: Object(external_wp_i18n_["__"])('The address from which your business operates', 'woocommerce-admin'),
      content: Object(external_wp_element_["createElement"])(location_StoreLocation, extends_default()({}, this.props, {
        onComplete: values => {
          const country = Object(utils["b" /* getCountryCode */])(values.countryState);
          Object(external_wc_tracks_["recordEvent"])('tasklist_tax_set_location', {
            country
          });
          this.completeStep();
        },
        isSettingsRequesting: false,
        settings: generalSettings
      })),
      visible: true
    }, {
      key: 'plugins',
      label: step2Label,
      description: Object(external_wp_i18n_["__"])('Jetpack and WooCommerce Tax allow you to automate sales tax calculations', 'woocommerce-admin'),
      content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["Plugins"], {
        onComplete: (plugins, response) => {
          Object(notices["a" /* createNoticesFromResponse */])(response);
          Object(external_wc_tracks_["recordEvent"])('tasklist_tax_install_extensions', {
            install_extensions: true
          });
          updateOptions({
            woocommerce_setup_jetpack_opted_in: true
          });
          this.completeStep();
        },
        onError: (errors, response) => Object(notices["a" /* createNoticesFromResponse */])(response),
        onSkip: () => {
          Object(external_wc_tracks_["queueRecordEvent"])('tasklist_tax_install_extensions', {
            install_extensions: false
          });
          this.manuallyConfigureTaxRates();
        },
        skipText: Object(external_wp_i18n_["__"])('Set up manually', 'woocommerce-admin'),
        onAbort: () => this.doNotChargeSalesTax(),
        abortText: Object(external_wp_i18n_["__"])("I don't charge sales tax", 'woocommerce-admin')
      }), !tosAccepted && Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
        variant: "caption",
        className: "woocommerce-task__caption",
        size: "12",
        lineHeight: "16px"
      }, lib_default()({
        mixedString: agreementText,
        components: {
          link: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
            href: 'https://wordpress.com/tos/',
            target: "_blank",
            type: "external"
          })
        }
      }))),
      visible: (cachedPluginsToActivate.length || !tosAccepted) && this.isTaxJarSupported()
    }, {
      key: 'connect',
      label: Object(external_wp_i18n_["__"])('Connect your store', 'woocommerce-admin'),
      description: Object(external_wp_i18n_["__"])('Connect your store to WordPress.com to enable automated sales tax calculations', 'woocommerce-admin'),
      content: Object(external_wp_element_["createElement"])(connect, extends_default()({}, this.props, {
        onConnect: () => {
          Object(external_wc_tracks_["recordEvent"])('tasklist_tax_connect_store', {
            connect: true,
            no_tax: false
          });
        },
        onSkip: () => {
          Object(external_wc_tracks_["queueRecordEvent"])('tasklist_tax_connect_store', {
            connect: false,
            no_tax: false
          });
          this.manuallyConfigureTaxRates();
        },
        skipText: Object(external_wp_i18n_["__"])('Set up tax rates manually', 'woocommerce-admin'),
        onAbort: () => this.doNotChargeSalesTax(),
        abortText: Object(external_wp_i18n_["__"])("My business doesn't charge sales tax", 'woocommerce-admin')
      })),
      visible: !isJetpackConnected && this.isTaxJarSupported()
    }, {
      key: 'manual_configuration',
      label: Object(external_wp_i18n_["__"])('Configure tax rates', 'woocommerce-admin'),
      description: Object(external_wp_i18n_["__"])('Head over to the tax rate settings screen to configure your tax rates', 'woocommerce-admin'),
      content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        disabled: isPending,
        isPrimary: true,
        isBusy: isPending,
        onClick: () => {
          Object(external_wc_tracks_["recordEvent"])('tasklist_tax_config_rates');
          this.manuallyConfigureTaxRates();
        }
      }, Object(external_wp_i18n_["__"])('Configure', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("p", null, generalSettings.woocommerce_calc_taxes !== 'yes' && lib_default()({
        mixedString: Object(external_wp_i18n_["__"])(
        /*eslint-disable max-len*/
        'By clicking "Configure" you\'re enabling tax rates and calculations. More info {{link}}here{{/link}}.',
        /*eslint-enable max-len*/
        'woocommerce-admin'),
        components: {
          link: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
            href: "https://docs.woocommerce.com/document/setting-up-taxes-in-woocommerce/?utm_medium=product#section-1",
            target: "_blank",
            type: "external"
          })
        }
      }))),
      visible: !this.isTaxJarSupported()
    }];
    return Object(external_lodash_["filter"])(steps, step => step.visible);
  }

  enableAutomatedTax() {
    Object(external_wc_tracks_["recordEvent"])('tasklist_tax_setup_automated_proceed', {
      setup_automatically: true
    });
    this.updateAutomatedTax(true);
  }

  renderSuccessScreen() {
    const {
      isPending
    } = this.props;
    return Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-task-tax__success"
    }, Object(external_wp_element_["createElement"])("span", {
      className: "woocommerce-task-tax__success-icon",
      role: "img",
      "aria-labelledby": "woocommerce-task-tax__success-message"
    }, "\uD83C\uDF8A"), Object(external_wp_element_["createElement"])(external_wc_components_["H"], {
      id: "woocommerce-task-tax__success-message"
    }, Object(external_wp_i18n_["__"])('Good news!', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("p", null, lib_default()({
      mixedString: Object(external_wp_i18n_["__"])('{{strong}}Jetpack{{/strong}} and {{strong}}WooCommerce Tax{{/strong}} ' + 'can automate your sales tax calculations for you.', 'woocommerce-admin'),
      components: {
        strong: Object(external_wp_element_["createElement"])("strong", null)
      }
    })), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      disabled: isPending,
      isPrimary: true,
      isBusy: isPending,
      onClick: this.enableAutomatedTax.bind(this)
    }, Object(external_wp_i18n_["__"])('Yes please', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      disabled: isPending,
      isTertiary: true,
      onClick: () => {
        Object(external_wc_tracks_["recordEvent"])('tasklist_tax_setup_automated_proceed', {
          setup_automatically: false
        });
        this.updateAutomatedTax(false);
      }
    }, Object(external_wp_i18n_["__"])("No thanks, I'll set up manually", 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      disabled: isPending,
      isTertiary: true,
      onClick: () => this.doNotChargeSalesTax()
    }, Object(external_wp_i18n_["__"])("I don't charge sales tax", 'woocommerce-admin')));
  }

  render() {
    const {
      stepIndex
    } = this.state;
    const {
      isPending,
      isResolving
    } = this.props;

    if (isResolving) {
      return Object(external_wp_element_["createElement"])(external_wc_components_["Spinner"], null);
    }

    const step = this.getSteps()[stepIndex];
    return Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-task-tax"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
      className: "woocommerce-task-card"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], null, this.shouldShowSuccessScreen() ? this.renderSuccessScreen() : Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
      isPending: isPending || isResolving,
      isVertical: true,
      currentStep: step.key,
      steps: this.getSteps()
    }))));
  }

}

/* harmony default export */ var tax = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(select => {
  const {
    getSettings,
    isUpdateSettingsRequesting
  } = select(external_wc_data_["SETTINGS_STORE_NAME"]);
  const {
    getOption,
    hasFinishedResolution
  } = select(external_wc_data_["OPTIONS_STORE_NAME"]);
  const {
    getActivePlugins,
    isJetpackConnected,
    isPluginsRequesting
  } = select(external_wc_data_["PLUGINS_STORE_NAME"]);
  const {
    getTasksStatus
  } = select(external_wc_data_["ONBOARDING_STORE_NAME"]);
  const {
    general: generalSettings = {}
  } = getSettings('general');
  const countryCode = Object(utils["b" /* getCountryCode */])(generalSettings.woocommerce_default_country);
  const {
    woocommerce_store_address: storeAddress,
    woocommerce_default_country: defaultCountry,
    woocommerce_store_postcode: storePostCode
  } = generalSettings;
  const hasCompleteAddress = Boolean(storeAddress && defaultCountry && storePostCode);
  const {
    tax: taxSettings = {}
  } = getSettings('tax');
  const activePlugins = getActivePlugins();
  const pluginsToActivate = Object(external_lodash_["difference"])(['jetpack', 'woocommerce-services'], activePlugins);
  const connectOptions = getOption('wc_connect_options') || {};
  const jetpackOptIn = getOption('woocommerce_setup_jetpack_opted_in');
  const tosAccepted = connectOptions.tos_accepted || jetpackOptIn === '1';
  const tasksStatus = getTasksStatus();
  const isPending = isUpdateSettingsRequesting('tax') || isUpdateSettingsRequesting('general');
  const isResolving = isPluginsRequesting('getJetpackConnectUrl') || !hasFinishedResolution('getOption', ['woocommerce_setup_jetpack_opted_in']) || !hasFinishedResolution('getOption', ['wc_connect_options']) || jetpackOptIn === undefined || connectOptions === undefined;
  return {
    countryCode,
    generalSettings,
    hasCompleteAddress,
    isJetpackConnected: isJetpackConnected(),
    isPending,
    isResolving,
    pluginsToActivate,
    tasksStatus,
    taxSettings,
    tosAccepted
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    createNotice
  } = dispatch('core/notices');
  const {
    updateOptions
  } = dispatch(external_wc_data_["OPTIONS_STORE_NAME"]);
  const {
    updateAndPersistSettingsForGroup
  } = dispatch(external_wc_data_["SETTINGS_STORE_NAME"]);
  const {
    invalidateResolutionForStoreSelector
  } = dispatch(external_wc_data_["ONBOARDING_STORE_NAME"]);
  return {
    clearTaskStatusCache: () => invalidateResolutionForStoreSelector('getTasksStatus'),
    createNotice,
    updateAndPersistSettingsForGroup,
    updateOptions
  };
}))(tax_Tax));
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./packages/onboarding/build-module/index.js + 26 modules
var onboarding_build_module = __webpack_require__(271);

// EXTERNAL MODULE: ./client/task-list/tasks/PaymentGatewaySuggestions/components/Action.js
var Action = __webpack_require__(542);

// EXTERNAL MODULE: ./client/task-list/tasks/PaymentGatewaySuggestions/components/List/List.scss
var List = __webpack_require__(538);

// CONCATENATED MODULE: ./client/task-list/tasks/PaymentGatewaySuggestions/components/List/Item.js


/**
 * External dependencies
 */






/**
 * Internal dependencies
 */



const Item = ({
  isRecommended,
  markConfigured,
  paymentGateway
}) => {
  var _connectSlot$fills, _setupSlot$fills;

  const {
    image,
    content,
    id,
    plugins = [],
    title,
    loading,
    enabled: isEnabled = false,
    installed: isInstalled = false,
    needsSetup = true,
    requiredSettings,
    settingsUrl: manageUrl,
    is_local_partner: isLocalPartner
  } = paymentGateway;
  const connectSlot = Object(external_wc_experimental_["useSlot"])(`woocommerce_payment_gateway_configure_${id}`);
  const setupSlot = Object(external_wc_experimental_["useSlot"])(`woocommerce_payment_gateway_setup_${id}`);
  const hasFills = Boolean(connectSlot === null || connectSlot === void 0 ? void 0 : (_connectSlot$fills = connectSlot.fills) === null || _connectSlot$fills === void 0 ? void 0 : _connectSlot$fills.length) || Boolean(setupSlot === null || setupSlot === void 0 ? void 0 : (_setupSlot$fills = setupSlot.fills) === null || _setupSlot$fills === void 0 ? void 0 : _setupSlot$fills.length);
  const hasSetup = Boolean(plugins.length || requiredSettings.length || hasFills);
  const showRecommendedRibbon = isRecommended && needsSetup;
  const classes = classnames_default()('woocommerce-task-payment', 'woocommerce-task-card', needsSetup && 'woocommerce-task-payment-not-configured', 'woocommerce-task-payment-' + id);
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], {
    key: id
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], {
    style: {
      paddingLeft: 0,
      marginBottom: 0
    },
    className: classes
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardMedia"], {
    isBorderless: true
  }, Object(external_wp_element_["createElement"])("img", {
    src: image,
    alt: title
  })), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-task-payment__description"
  }, showRecommendedRibbon && Object(external_wp_element_["createElement"])(onboarding_build_module["RecommendedRibbon"], {
    isLocalPartner: isLocalPartner
  }), Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    as: "h3",
    className: "woocommerce-task-payment__title"
  }, title, isInstalled && needsSetup && !!plugins.length && Object(external_wp_element_["createElement"])(onboarding_build_module["SetupRequired"], null)), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-task-payment__content"
  }, content)), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-task-payment__footer"
  }, Object(external_wp_element_["createElement"])(Action["a" /* Action */], {
    manageUrl: manageUrl,
    id: id,
    hasSetup: hasSetup,
    needsSetup: needsSetup,
    isEnabled: isEnabled,
    isInstalled: isInstalled,
    hasPlugins: Boolean(plugins.length),
    isRecommended: isRecommended,
    isLoading: loading,
    markConfigured: markConfigured,
    onSetUp: () => Object(external_wc_tracks_["recordEvent"])('tasklist_payment_setup', {
      selected: id
    })
  }))), Object(external_wp_element_["createElement"])(external_wp_components_["CardDivider"], null));
};
// CONCATENATED MODULE: ./client/task-list/tasks/PaymentGatewaySuggestions/components/List/List.js


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



const List_List = ({
  heading,
  markConfigured,
  recommendation,
  paymentGateways
}) => {
  return Object(external_wp_element_["createElement"])(external_wp_components_["Card"], null, Object(external_wp_element_["createElement"])(external_wp_components_["CardHeader"], {
    as: "h2"
  }, heading), paymentGateways.map(paymentGateway => {
    const {
      id
    } = paymentGateway;
    return Object(external_wp_element_["createElement"])(Item, {
      key: id,
      isRecommended: recommendation === id,
      markConfigured: markConfigured,
      paymentGateway: paymentGateway
    });
  }));
};
// CONCATENATED MODULE: ./client/task-list/tasks/PaymentGatewaySuggestions/components/List/Placeholder.js


/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



const PlaceholderItem = () => {
  const classes = classnames_default()('woocommerce-task-payment', 'woocommerce-task-card');
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], {
    style: {
      paddingLeft: 0,
      marginBottom: 0
    },
    className: classes
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardMedia"], {
    isBorderless: true
  }, Object(external_wp_element_["createElement"])("span", {
    className: "is-placeholder"
  })), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-task-payment__description"
  }, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    as: "h3",
    className: "woocommerce-task-payment__title"
  }, Object(external_wp_element_["createElement"])("span", {
    className: "is-placeholder"
  })), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-task-payment__content"
  }, Object(external_wp_element_["createElement"])("span", {
    className: "is-placeholder"
  }))), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-task-payment__footer"
  }, Object(external_wp_element_["createElement"])("span", {
    className: "is-placeholder"
  }))), Object(external_wp_element_["createElement"])(external_wp_components_["CardDivider"], null));
};

const Placeholder = () => {
  const classes = 'is-loading woocommerce-payment-gateway-suggestions-list-placeholder';
  return Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
    "aria-hidden": "true",
    className: classes
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardHeader"], {
    as: "h2"
  }, Object(external_wp_element_["createElement"])("span", {
    className: "is-placeholder"
  })), Object(external_wp_element_["createElement"])(PlaceholderItem, null), Object(external_wp_element_["createElement"])(PlaceholderItem, null), Object(external_wp_element_["createElement"])(PlaceholderItem, null));
};
// CONCATENATED MODULE: ./client/task-list/tasks/PaymentGatewaySuggestions/components/List/index.js


// CONCATENATED MODULE: ./client/task-list/tasks/PaymentGatewaySuggestions/components/Setup/Configure.js


/**
 * External dependencies
 */








/**
 * Internal dependencies
 */


const validateFields = (values, fields) => {
  const errors = {};

  const getField = fieldId => fields.find(field => field.id === fieldId);

  for (const [fieldKey, value] of Object.entries(values)) {
    const field = getField(fieldKey); // Matches any word that is capitalized aside from abrevitions like ID.

    const label = field.label.replace(/([A-Z][a-z]+)/g, val => val.toLowerCase());

    if (!(value || field.type === 'checkbox')) {
      errors[fieldKey] = `Please enter your ${label}`;
    }
  }

  return errors;
};
const Configure = ({
  markConfigured,
  paymentGateway
}) => {
  var _slot$fills;

  const {
    id,
    connectionUrl,
    setupHelpText,
    settingsUrl,
    title,
    requiredSettings: fields
  } = paymentGateway;
  const {
    createNotice
  } = Object(external_wp_data_["useDispatch"])('core/notices');
  const {
    updatePaymentGateway
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["PAYMENT_GATEWAYS_STORE_NAME"]);
  const slot = Object(external_wc_experimental_["useSlot"])(`woocommerce_payment_gateway_configure_${id}`);
  const hasFills = Boolean(slot === null || slot === void 0 ? void 0 : (_slot$fills = slot.fills) === null || _slot$fills === void 0 ? void 0 : _slot$fills.length);
  const {
    isUpdating
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      isPaymentGatewayUpdating
    } = select(external_wc_data_["PAYMENT_GATEWAYS_STORE_NAME"]);
    return {
      isUpdating: isPaymentGatewayUpdating()
    };
  });

  const handleSubmit = values => {
    updatePaymentGateway(id, {
      enabled: true,
      settings: values
    }).then(result => {
      if (result && result.id === id) {
        markConfigured(id);
        createNotice('success', Object(external_wp_i18n_["sprintf"])(
        /* translators: %s = title of the payment gateway */
        Object(external_wp_i18n_["__"])('%s configured successfully', 'woocommerce-admin'), title));
      }
    }).catch(() => {
      createNotice('error', Object(external_wp_i18n_["__"])('There was a problem saving your payment settings', 'woocommerce-admin'));
    });
  };

  const helpText = setupHelpText && Object(external_wp_element_["createElement"])("p", {
    dangerouslySetInnerHTML: Object(sanitize_html["a" /* default */])(setupHelpText)
  });
  const defaultForm = Object(external_wp_element_["createElement"])(external_wc_components_["DynamicForm"], {
    fields: fields,
    isBusy: isUpdating,
    onSubmit: handleSubmit,
    submitLabel: Object(external_wp_i18n_["__"])('Proceed', 'woocommerce-admin'),
    validate: values => validateFields(values, fields)
  });

  if (hasFills) {
    return Object(external_wp_element_["createElement"])(onboarding_build_module["WooPaymentGatewayConfigure"].Slot, {
      fillProps: {
        defaultForm,
        defaultSubmit: handleSubmit,
        defaultFields: fields,
        markConfigured: () => markConfigured(id),
        paymentGateway
      },
      id: id
    });
  }

  if (connectionUrl) {
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, helpText, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      isPrimary: true,
      onClick: () => Object(external_wc_tracks_["recordEvent"])('tasklist_payment_connect_start', {
        payment_method: id
      }),
      href: connectionUrl
    }, Object(external_wp_i18n_["__"])('Connect', 'woocommerce-admin')));
  }

  if (fields.length) {
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, helpText, defaultForm);
  }

  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, helpText || Object(external_wp_element_["createElement"])("p", null, Object(external_wp_i18n_["__"])("You can manage this payment gateway's settings by clicking the button below", 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isPrimary: true,
    href: settingsUrl
  }, Object(external_wp_i18n_["__"])('Set up', 'woocommerce-admin')));
};
// EXTERNAL MODULE: ./client/task-list/tasks/PaymentGatewaySuggestions/components/Setup/Setup.scss
var Setup = __webpack_require__(597);

// CONCATENATED MODULE: ./client/task-list/tasks/PaymentGatewaySuggestions/components/Setup/Setup.js


/**
 * External dependencies
 */










/**
 * Internal dependencies
 */




const Setup_Setup = ({
  markConfigured,
  paymentGateway
}) => {
  var _slot$fills;

  const {
    id,
    plugins = [],
    title,
    postInstallScripts,
    installed: gatewayInstalled
  } = paymentGateway;
  const slot = Object(external_wc_experimental_["useSlot"])(`woocommerce_payment_gateway_setup_${id}`);
  const hasFills = Boolean(slot === null || slot === void 0 ? void 0 : (_slot$fills = slot.fills) === null || _slot$fills === void 0 ? void 0 : _slot$fills.length);
  const [isPluginLoaded, setIsPluginLoaded] = Object(external_wp_element_["useState"])(false);
  Object(external_wp_element_["useEffect"])(() => {
    Object(external_wc_tracks_["recordEvent"])('payments_task_stepper_view', {
      payment_method: id
    });
  }, []);
  const {
    invalidateResolutionForStoreSelector
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["PAYMENT_GATEWAYS_STORE_NAME"]);
  const {
    isOptionUpdating,
    isPaymentGatewayResolving,
    needsPluginInstall
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      isOptionsUpdating
    } = select(external_wc_data_["OPTIONS_STORE_NAME"]);
    const {
      isResolving
    } = select(external_wc_data_["PAYMENT_GATEWAYS_STORE_NAME"]);
    const activePlugins = select(external_wc_data_["PLUGINS_STORE_NAME"]).getActivePlugins();
    const pluginsToInstall = plugins.filter(m => !activePlugins.includes(m));
    return {
      isOptionUpdating: isOptionsUpdating(),
      isPaymentGatewayResolving: isResolving('getPaymentGateways'),
      needsPluginInstall: !!pluginsToInstall.length
    };
  });
  Object(external_wp_element_["useEffect"])(() => {
    if (needsPluginInstall) {
      return;
    }

    if (postInstallScripts && postInstallScripts.length) {
      const scriptPromises = postInstallScripts.map(script => Object(build_module["d" /* enqueueScript */])(script));
      Promise.all(scriptPromises).then(() => {
        setIsPluginLoaded(true);
      });
      return;
    }

    setIsPluginLoaded(true);
  }, [postInstallScripts, needsPluginInstall]);
  const installStep = Object(external_wp_element_["useMemo"])(() => {
    return plugins && plugins.length ? {
      key: 'install',
      label: Object(external_wp_i18n_["sprintf"])(
      /* translators: %s = title of the payment gateway to install */
      Object(external_wp_i18n_["__"])('Install %s', 'woocommerce-admin'), title),
      content: Object(external_wp_element_["createElement"])(external_wc_components_["Plugins"], {
        onComplete: (installedPlugins, response) => {
          Object(notices["a" /* createNoticesFromResponse */])(response);
          invalidateResolutionForStoreSelector('getPaymentGateways');
          Object(external_wc_tracks_["recordEvent"])('tasklist_payment_install_method', {
            plugins
          });
        },
        onError: (errors, response) => Object(notices["a" /* createNoticesFromResponse */])(response),
        autoInstall: true,
        pluginSlugs: plugins
      })
    } : null;
  }, []);
  const configureStep = Object(external_wp_element_["useMemo"])(() => ({
    key: 'configure',
    label: Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('Configure your %(title)s account', 'woocommerce-admin'), {
      title
    }),
    content: gatewayInstalled ? Object(external_wp_element_["createElement"])(Configure, {
      markConfigured: markConfigured,
      paymentGateway: paymentGateway
    }) : null
  }), [gatewayInstalled]);
  const stepperPending = needsPluginInstall || isOptionUpdating || isPaymentGatewayResolving || !isPluginLoaded;
  const defaultStepper = Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
    isVertical: true,
    isPending: stepperPending,
    currentStep: needsPluginInstall ? 'install' : 'configure',
    steps: [installStep, configureStep].filter(Boolean)
  });
  return Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
    className: "woocommerce-task-payment-method woocommerce-task-card"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], null, hasFills ? Object(external_wp_element_["createElement"])(onboarding_build_module["WooPaymentGatewaySetup"].Slot, {
    fillProps: {
      defaultStepper,
      defaultInstallStep: installStep,
      defaultConfigureStep: configureStep,
      markConfigured: () => markConfigured(id),
      paymentGateway
    },
    id: id
  }) : defaultStepper));
};
// CONCATENATED MODULE: ./client/task-list/tasks/PaymentGatewaySuggestions/components/Setup/Placeholder.js


/**
 * External dependencies
 */



const Placeholder_Placeholder = () => {
  const classes = classnames_default()('is-loading', 'woocommerce-task-payment-method', 'woocommerce-task-card');
  return Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
    "aria-hidden": "true",
    className: classes
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], null, Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
    isVertical: true,
    currentStep: 'none',
    steps: [{
      key: 'first',
      label: ''
    }, {
      key: 'second',
      label: ''
    }]
  })));
};
// CONCATENATED MODULE: ./client/task-list/tasks/PaymentGatewaySuggestions/components/Setup/index.js


// EXTERNAL MODULE: ./client/task-list/tasks/PaymentGatewaySuggestions/components/WCPay/index.js + 2 modules
var WCPay = __webpack_require__(539);

// EXTERNAL MODULE: external ["wp","plugins"]
var external_wp_plugins_ = __webpack_require__(88);

// CONCATENATED MODULE: ./client/task-list/tasks/PaymentGatewaySuggestions/plugins/Bacs.js



/**
 * External dependencies
 */







const initialFormValues = {
  account_name: '',
  account_number: '',
  bank_name: '',
  sort_code: '',
  iban: '',
  bic: ''
};

const BacsPaymentGatewaySetup = () => {
  const isUpdating = Object(external_wp_data_["useSelect"])(select => {
    return select(external_wc_data_["OPTIONS_STORE_NAME"]).isOptionsUpdating();
  });
  const {
    createNotice
  } = Object(external_wp_data_["useDispatch"])('core/notices');
  const {
    updateOptions
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["OPTIONS_STORE_NAME"]);

  const validate = values => {
    const errors = {};

    if (!values.account_number && !values.iban) {
      errors.account_number = errors.iban = Object(external_wp_i18n_["__"])('Please enter an account number or IBAN', 'woocommerce-admin');
    }

    return errors;
  };

  const updateSettings = async (values, markConfigured) => {
    const update = await updateOptions({
      woocommerce_bacs_settings: {
        enabled: 'yes'
      },
      woocommerce_bacs_accounts: [values]
    });

    if (update.success) {
      markConfigured();
      createNotice('success', Object(external_wp_i18n_["__"])('Direct bank transfer details added successfully', 'woocommerce-admin'));
      return;
    }

    createNotice('error', Object(external_wp_i18n_["__"])('There was a problem saving your payment settings', 'woocommerce-admin'));
  };

  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(onboarding_build_module["WooPaymentGatewaySetup"], {
    id: "bacs"
  }, ({
    markConfigured
  }) => {
    return Object(external_wp_element_["createElement"])(external_wc_components_["Form"], {
      initialValues: initialFormValues,
      onSubmit: values => updateSettings(values, markConfigured),
      validate: validate
    }, ({
      getInputProps,
      handleSubmit
    }) => {
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["H"], null, Object(external_wp_i18n_["__"])('Add your bank details', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("p", null, Object(external_wp_i18n_["__"])('These details are required to receive payments via bank transfer', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-task-payment-method__fields"
      }, Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
        label: Object(external_wp_i18n_["__"])('Account name', 'woocommerce-admin'),
        required: true
      }, getInputProps('account_name'))), Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
        label: Object(external_wp_i18n_["__"])('Account number', 'woocommerce-admin'),
        required: true
      }, getInputProps('account_number'))), Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
        label: Object(external_wp_i18n_["__"])('Bank name', 'woocommerce-admin'),
        required: true
      }, getInputProps('bank_name'))), Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
        label: Object(external_wp_i18n_["__"])('Sort code', 'woocommerce-admin'),
        required: true
      }, getInputProps('sort_code'))), Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
        label: Object(external_wp_i18n_["__"])('IBAN', 'woocommerce-admin'),
        required: true
      }, getInputProps('iban'))), Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
        label: Object(external_wp_i18n_["__"])('BIC / Swift', 'woocommerce-admin'),
        required: true
      }, getInputProps('bic')))), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isPrimary: true,
        isBusy: isUpdating,
        onClick: handleSubmit
      }, Object(external_wp_i18n_["__"])('Save', 'woocommerce-admin')));
    });
  }));
};

Object(external_wp_plugins_["registerPlugin"])('wc-admin-payment-gateway-setup-bacs', {
  render: BacsPaymentGatewaySetup,
  scope: 'woocommerce-admin'
});
// CONCATENATED MODULE: ./client/task-list/tasks/PaymentGatewaySuggestions/index.js


/**
 * External dependencies
 */






/**
 * Internal dependencies
 */





const PaymentGatewaySuggestions = ({
  query
}) => {
  const {
    invalidateResolutionForStoreSelector
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["ONBOARDING_STORE_NAME"]);
  const {
    updatePaymentGateway
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["PAYMENT_GATEWAYS_STORE_NAME"]);
  const {
    getPaymentGateway,
    paymentGatewaySuggestions,
    installedPaymentGateways,
    isResolving
  } = Object(external_wp_data_["useSelect"])(select => {
    return {
      getPaymentGateway: select(external_wc_data_["PAYMENT_GATEWAYS_STORE_NAME"]).getPaymentGateway,
      getOption: select(external_wc_data_["OPTIONS_STORE_NAME"]).getOption,
      installedPaymentGateways: select(external_wc_data_["PAYMENT_GATEWAYS_STORE_NAME"]).getPaymentGateways(),
      isResolving: select(external_wc_data_["ONBOARDING_STORE_NAME"]).isResolving('getPaymentGatewaySuggestions'),
      paymentGatewaySuggestions: select(external_wc_data_["ONBOARDING_STORE_NAME"]).getPaymentGatewaySuggestions()
    };
  }, []);

  const getEnrichedPaymentGateways = () => {
    const mappedPaymentGateways = installedPaymentGateways.reduce((map, gateway) => {
      map[gateway.id] = gateway;
      return map;
    }, {});
    return paymentGatewaySuggestions.reduce((map, suggestion) => {
      const {
        id
      } = suggestion;
      const installedGateway = mappedPaymentGateways[suggestion.id] ? mappedPaymentGateways[id] : {};
      const enrichedSuggestion = {
        installed: !!mappedPaymentGateways[id],
        postInstallScripts: installedGateway.post_install_scripts,
        enabled: installedGateway.enabled || false,
        needsSetup: installedGateway.needs_setup,
        settingsUrl: installedGateway.settings_url,
        connectionUrl: installedGateway.connection_url,
        setupHelpText: installedGateway.setup_help_text,
        title: installedGateway.title,
        requiredSettings: installedGateway.required_settings_keys ? installedGateway.required_settings_keys.map(settingKey => installedGateway.settings[settingKey]).filter(Boolean) : [],
        ...suggestion
      };
      map.set(id, enrichedSuggestion);
      return map;
    }, new Map());
  };

  const paymentGateways = Object(external_wp_element_["useMemo"])(getEnrichedPaymentGateways, [installedPaymentGateways, paymentGatewaySuggestions]);
  Object(external_wp_element_["useEffect"])(() => {
    if (paymentGateways.size) {
      Object(external_wc_tracks_["recordEvent"])('tasklist_payments_options', {
        options: Array.from(paymentGateways.values()).map(gateway => gateway.id)
      });
    }
  }, [paymentGateways]);

  const enablePaymentGateway = id => {
    if (!id) {
      return;
    }

    const gateway = getPaymentGateway(id);

    if (!gateway || gateway.enabled) {
      return;
    }

    updatePaymentGateway(id, {
      enabled: true
    }).then(() => {
      invalidateResolutionForStoreSelector('getTasksStatus');
    });
  };

  const markConfigured = Object(external_wp_element_["useCallback"])(async (id, queryParams = {}) => {
    if (!paymentGateways.get(id)) {
      throw `Payment gateway ${id} not found in available gateways list`;
    }

    enablePaymentGateway(id);
    Object(external_wc_tracks_["recordEvent"])('tasklist_payment_connect_method', {
      payment_method: id
    });
    Object(external_wc_navigation_["getHistory"])().push(Object(external_wc_navigation_["getNewPath"])({ ...queryParams
    }, '/', {}));
  }, [paymentGateways]);
  const recommendation = Object(external_wp_element_["useMemo"])(() => Array.from(paymentGateways.values()).filter(gateway => gateway.recommendation_priority).sort((a, b) => a.recommendation_priority - b.recommendation_priority).map(gateway => gateway.id).shift(), [paymentGateways]);
  const currentGateway = Object(external_wp_element_["useMemo"])(() => {
    if (!query.id || isResolving || !paymentGateways.size) {
      return null;
    }

    const gateway = paymentGateways.get(query.id);

    if (!gateway) {
      throw `Current gateway ${query.id} not found in available gateways list`;
    }

    return gateway;
  }, [isResolving, query, paymentGateways]);
  const [wcPayGateway, enabledGateways, additionalGateways] = Object(external_wp_element_["useMemo"])(() => Array.from(paymentGateways.values()).reduce((all, gateway) => {
    const [wcPay, enabled, additional] = all; // WCPay is handled separately when not installed and configured

    if (gateway.id === 'woocommerce_payments' && !(gateway.installed && !gateway.needsSetup)) {
      wcPay.push(gateway);
    } else if (gateway.enabled) {
      enabled.push(gateway);
    } else {
      additional.push(gateway);
    }

    return all;
  }, [[], [], []]), [paymentGateways]);

  if (query.id && !currentGateway) {
    return Object(external_wp_element_["createElement"])(Placeholder_Placeholder, null);
  }

  if (currentGateway) {
    return Object(external_wp_element_["createElement"])(Setup_Setup, {
      paymentGateway: currentGateway,
      markConfigured: markConfigured
    });
  }

  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-task-payments"
  }, !paymentGateways.size && Object(external_wp_element_["createElement"])(Placeholder, null), !!wcPayGateway.length && Object(external_wp_element_["createElement"])(WCPay["a" /* WCPaySuggestion */], {
    paymentGateway: wcPayGateway[0]
  }), !!enabledGateways.length && Object(external_wp_element_["createElement"])(List_List, {
    heading: Object(external_wp_i18n_["__"])('Enabled payment gateways', 'woocommerce-admin'),
    recommendation: recommendation,
    paymentGateways: enabledGateways
  }), !!additionalGateways.length && Object(external_wp_element_["createElement"])(List_List, {
    heading: Object(external_wp_i18n_["__"])('Additional payment gateways', 'woocommerce-admin'),
    recommendation: recommendation,
    paymentGateways: additionalGateways,
    markConfigured: markConfigured
  }));
};
/* harmony default export */ var tasks_PaymentGatewaySuggestions = (PaymentGatewaySuggestions);
// EXTERNAL MODULE: ./client/lib/collections/index.js
var collections = __webpack_require__(526);

// EXTERNAL MODULE: ./client/store-management-links/index.js + 9 modules
var store_management_links = __webpack_require__(543);

// CONCATENATED MODULE: ./client/task-list/tasks.js


/**
 * External dependencies
 */





/**
 * Internal dependencies
 */











function recordTaskViewEvent(taskName, isJetpackConnected, activePlugins, installedPlugins) {
  Object(external_wc_tracks_["recordEvent"])('task_view', {
    task_name: taskName,
    wcs_installed: installedPlugins.includes('woocommerce-services'),
    wcs_active: activePlugins.includes('woocommerce-services'),
    jetpack_installed: installedPlugins.includes('jetpack'),
    jetpack_active: activePlugins.includes('jetpack'),
    jetpack_connected: isJetpackConnected
  });
}
function getAllTasks({
  activePlugins,
  countryCode,
  createNotice,
  freeExtensions,
  installAndActivatePlugins,
  installedPlugins,
  isJetpackConnected,
  onboardingStatus,
  profileItems,
  query,
  toggleCartModal,
  onTaskSelect,
  hasCompleteAddress,
  trackedCompletedActions,
  productTypes
}) {
  const {
    hasPaymentGateway,
    hasPhysicalProducts,
    hasProducts,
    isAppearanceComplete,
    isTaxComplete,
    shippingZonesCount,
    wcPayIsConnected
  } = {
    hasPaymentGateway: false,
    hasPhysicalProducts: false,
    hasProducts: false,
    isAppearanceComplete: false,
    isTaxComplete: false,
    shippingZonesCount: 0,
    wcPayIsConnected: false,
    ...onboardingStatus
  };
  const groupedProducts = Object(utils["a" /* getCategorizedOnboardingProducts */])(productTypes, profileItems, installedPlugins);
  const {
    products,
    remainingProducts,
    uniqueItemsList
  } = groupedProducts;
  const woocommercePaymentsInstalled = installedPlugins.indexOf('woocommerce-payments') !== -1;
  const woocommerceServicesActive = activePlugins.indexOf('woocommerce-services') !== -1;
  const {
    completed: profilerCompleted,
    product_types: profileProductTypes,
    business_extensions: businessExtensions
  } = profileItems;
  const woocommercePaymentsSelectedInProfiler = (businessExtensions || []).includes('woocommerce-payments');

  let purchaseAndInstallTitle = Object(external_wp_i18n_["__"])('Add paid extensions to my store', 'woocommerce-admin');

  let purchaseAndInstallContent;

  if (uniqueItemsList.length === 1) {
    var _products$find;

    const {
      name: itemName
    } = uniqueItemsList[0];

    const purchaseAndInstallFormat = Object(external_wp_i18n_["__"])('Add %s to my store', 'woocommerce-admin');

    purchaseAndInstallTitle = Object(external_wp_i18n_["sprintf"])(purchaseAndInstallFormat, itemName);
    purchaseAndInstallContent = (_products$find = products.find(({
      label
    }) => label === itemName)) === null || _products$find === void 0 ? void 0 : _products$find.description;
  } else {
    const uniqueProductNames = uniqueItemsList.map(({
      name
    }) => name);
    const lastProduct = uniqueProductNames.pop();
    let firstProducts = uniqueProductNames.join(', ');

    if (uniqueProductNames.length > 1) {
      firstProducts += ',';
    }
    /* translators: %1$s: list of product names comma separated, %2%s the last product name */


    purchaseAndInstallContent = Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('Good choice! You chose to add %1$s and %2$s to your store.', 'woocommerce-admin'), firstProducts, lastProduct);
  }

  const {
    automatedTaxSupportedCountries = [],
    taxJarActivated
  } = onboardingStatus;
  const isTaxJarSupported = !taxJarActivated && // WCS integration doesn't work with the official TaxJar plugin.
  automatedTaxSupportedCountries.includes(countryCode);
  const canUseAutomatedTaxes = hasCompleteAddress && woocommerceServicesActive && isTaxJarSupported;

  let taxAction = Object(external_wp_i18n_["__"])("Let's go", 'woocommerce-admin');

  let taxContent = Object(external_wp_i18n_["__"])('Set your store location and configure tax rate settings.', 'woocommerce-admin');

  if (canUseAutomatedTaxes) {
    taxAction = Object(external_wp_i18n_["__"])('Yes please', 'woocommerce-admin');
    taxContent = Object(external_wp_i18n_["__"])('Good news! WooCommerce Services and Jetpack can automate your sales tax calculations for you.', 'woocommerce-admin');
  }

  const [installedMarketingExtensions, marketingExtensionsLists] = getMarketingExtensionLists(freeExtensions, activePlugins, installedPlugins);
  const tasks = [{
    key: 'store_details',
    title: Object(external_wp_i18n_["__"])('Store details', 'woocommerce-admin'),
    content: Object(external_wp_i18n_["__"])('Your store address is required to set the origin country for shipping, currencies, and payment options.', 'woocommerce-admin'),
    container: null,
    action: Object(external_wp_i18n_["__"])("Let's go", 'woocommerce-admin'),
    onClick: () => {
      onTaskSelect('store_details');
      Object(external_wc_navigation_["getHistory"])().push(Object(external_wc_navigation_["getNewPath"])({}, '/setup-wizard', {}));
    },
    completed: profilerCompleted,
    visible: true,
    time: Object(external_wp_i18n_["__"])('4 minutes', 'woocommerce-admin'),
    type: 'setup'
  }, {
    key: 'purchase',
    title: purchaseAndInstallTitle,
    content: purchaseAndInstallContent,
    container: null,
    action: Object(external_wp_i18n_["__"])('Purchase & install now', 'woocommerce-admin'),
    onClick: () => {
      onTaskSelect('purchase');
      return remainingProducts.length ? toggleCartModal() : null;
    },
    visible: products.length,
    completed: products.length && !remainingProducts.length,
    time: Object(external_wp_i18n_["__"])('2 minutes', 'woocommerce-admin'),
    isDismissable: true,
    type: 'setup'
  }, {
    key: 'products',
    title: Object(external_wp_i18n_["__"])('Add my products', 'woocommerce-admin'),
    content: Object(external_wp_i18n_["__"])('Start by adding the first product to your store. You can add your products manually, via CSV, or import them from another service.', 'woocommerce-admin'),
    container: Object(external_wp_element_["createElement"])(Products, null),
    onClick: () => {
      onTaskSelect('products');
      Object(external_wc_navigation_["updateQueryString"])({
        task: 'products'
      });
    },
    completed: hasProducts,
    visible: true,
    time: Object(external_wp_i18n_["__"])('1 minute per product', 'woocommerce-admin'),
    type: 'setup'
  }, {
    key: 'woocommerce-payments',
    title: Object(external_wp_i18n_["__"])('Get paid with WooCommerce Payments', 'woocommerce-admin'),
    content: Object(external_wp_i18n_["__"])("You're only one step away from getting paid. Verify your business details to start managing transactions with WooCommerce Payments.", 'woocommerce-admin'),
    action: Object(external_wp_i18n_["__"])('Finish setup', 'woocommmerce-admin'),
    expanded: true,
    container: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null),
    completed: wcPayIsConnected,
    onClick: async e => {
      if (e.target.nodeName === 'A') {
        // This is a nested link, so don't activate the task.
        return false;
      }

      await new Promise((resolve, reject) => {
        // This task doesn't have a view, so the recordEvent call
        // in TaskDashboard.recordTaskView() is never called. So
        // record it here.
        recordTaskViewEvent('wcpay', isJetpackConnected, activePlugins, installedPlugins);
        onTaskSelect('woocommerce-payments');
        return Object(WCPay["b" /* installActivateAndConnectWcpay */])(reject, createNotice, installAndActivatePlugins);
      });
    },
    visible: woocommercePaymentsSelectedInProfiler && woocommercePaymentsInstalled && Object(WCPay["c" /* isWCPaySupported */])(countryCode),
    additionalInfo: Object(external_wp_i18n_["__"])('By setting up, you are agreeing to the <a href="https://wordpress.com/tos/" target="_blank">Terms of Service</a>', 'woocommerce-admin'),
    time: Object(external_wp_i18n_["__"])('2 minutes', 'woocommerce-admin'),
    type: 'setup'
  }, {
    key: 'payments',
    title: Object(external_wp_i18n_["__"])('Set up payments', 'woocommerce-admin'),
    content: Object(external_wp_i18n_["__"])('Choose payment providers and enable payment methods at checkout.', 'woocommerce-admin'),
    container: Object(external_wp_element_["createElement"])(PaymentGatewaySuggestions, {
      query: query
    }),
    completed: hasPaymentGateway,
    onClick: () => {
      onTaskSelect('payments');
      Object(external_wc_navigation_["updateQueryString"])({
        task: 'payments'
      });
    },
    visible: window.wcAdminFeatures['payment-gateway-suggestions'] && (!woocommercePaymentsInstalled || !woocommercePaymentsSelectedInProfiler || !Object(WCPay["c" /* isWCPaySupported */])(countryCode)),
    time: Object(external_wp_i18n_["__"])('2 minutes', 'woocommerce-admin'),
    type: 'setup'
  }, {
    key: 'tax',
    title: Object(external_wp_i18n_["__"])('Set up tax', 'woocommerce-admin'),
    content: taxContent,
    container: Object(external_wp_element_["createElement"])(tax, null),
    action: taxAction,
    onClick: (e, args = {}) => {
      // The expanded item CTA allows us to enable
      // automated taxes for eligible stores.
      // Note: this will be initially part of an A/B test.
      const {
        isExpanded
      } = args;
      onTaskSelect('tax');
      Object(external_wc_navigation_["updateQueryString"])({
        task: 'tax',
        auto: canUseAutomatedTaxes && isExpanded
      });
    },
    completed: isTaxComplete,
    visible: true,
    time: Object(external_wp_i18n_["__"])('1 minute', 'woocommerce-admin'),
    type: 'setup'
  }, {
    key: 'shipping',
    title: Object(external_wp_i18n_["__"])('Set up shipping', 'woocommerce-admin'),
    content: Object(external_wp_i18n_["__"])("Set your store location and where you'll ship to.", 'woocommerce-admin'),
    container: Object(external_wp_element_["createElement"])(shipping, null),
    action: Object(external_wp_i18n_["__"])("Let's go", 'woocommerce-admin'),
    onClick: () => {
      if (shippingZonesCount > 0) {
        window.location = Object(store_management_links["b" /* getLinkTypeAndHref */])({
          type: 'wc-settings',
          tab: 'shipping'
        }).href;
      } else {
        onTaskSelect('shipping');
        Object(external_wc_navigation_["updateQueryString"])({
          task: 'shipping'
        });
      }
    },
    completed: shippingZonesCount > 0,
    visible: profileProductTypes && profileProductTypes.includes('physical') || hasPhysicalProducts,
    time: Object(external_wp_i18n_["__"])('1 minute', 'woocommerce-admin'),
    type: 'setup'
  }, {
    key: 'marketing',
    title: Object(external_wp_i18n_["__"])('Set up marketing tools', 'woocommerce-admin'),
    content: Object(external_wp_i18n_["__"])('Add recommended marketing tools to reach new customers and grow your business', 'woocommerce-admin'),
    container: Object(external_wp_element_["createElement"])(Marketing_Marketing, {
      trackedCompletedActions: trackedCompletedActions
    }),
    onClick: () => {
      onTaskSelect('marketing');
      Object(external_wc_navigation_["updateQueryString"])({
        task: 'marketing'
      });
    },
    completed: !!installedMarketingExtensions.length && trackedCompletedActions.includes('marketing') || !marketingExtensionsLists.length,
    visible: window.wcAdminFeatures && window.wcAdminFeatures['remote-free-extensions'] && (!!marketingExtensionsLists.length || !!installedMarketingExtensions.length),
    time: Object(external_wp_i18n_["__"])('1 minute', 'woocommerce-admin'),
    type: 'setup'
  }, {
    key: 'appearance',
    title: Object(external_wp_i18n_["__"])('Personalize my store', 'woocommerce-admin'),
    content: Object(external_wp_i18n_["__"])('Add your logo, create a homepage, and start designing your store.', 'woocommerce-admin'),
    container: Object(external_wp_element_["createElement"])(appearance, null),
    action: Object(external_wp_i18n_["__"])("Let's go", 'woocommerce-admin'),
    onClick: () => {
      onTaskSelect('appearance');
      Object(external_wc_navigation_["updateQueryString"])({
        task: 'appearance'
      });
    },
    completed: isAppearanceComplete,
    visible: true,
    time: Object(external_wp_i18n_["__"])('2 minutes', 'woocommerce-admin'),
    type: 'setup'
  }];
  const filteredTasks = Object(external_wp_hooks_["applyFilters"])('woocommerce_admin_onboarding_task_list', tasks, query);

  for (const task of filteredTasks) {
    task.level = task.level ? parseInt(task.level, 10) : 3;
  }

  return Object(collections["a" /* groupListOfObjectsBy */])(filteredTasks, 'type', 'extension');
}
function taskSort(a, b) {
  if (a.completed || b.completed) {
    return a.completed ? 1 : -1;
  } // Three is the lowest level.


  const aLevel = a.level || 3;
  const bLevel = b.level || 3;

  if (aLevel === bLevel) {
    return 0;
  }

  return aLevel > bLevel ? 1 : -1;
}
// EXTERNAL MODULE: ./client/task-list/task-list.scss
var task_list = __webpack_require__(598);

// CONCATENATED MODULE: ./client/task-list/task-list.js



/**
 * External dependencies
 */









/**
 * Internal dependencies
 */


const DAY_IN_MS = 24 * 60 * 60 * 1000;
const TaskList = ({
  query,
  name,
  eventName,
  isComplete,
  dismissedTasks,
  remindMeLaterTasks,
  tasks,
  trackedCompletedTasks: totalTrackedCompletedTasks,
  title: listTitle,
  collapsible = false,
  onComplete,
  onHide,
  expandingItems = false
}) => {
  const {
    createNotice
  } = Object(external_wp_data_["useDispatch"])('core/notices');
  const {
    updateOptions
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["OPTIONS_STORE_NAME"]);
  const {
    profileItems
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getProfileItems
    } = select(external_wc_data_["ONBOARDING_STORE_NAME"]);
    return {
      profileItems: getProfileItems()
    };
  });
  const prevQueryRef = Object(external_wp_element_["useRef"])(query);
  Object(external_wp_element_["useEffect"])(() => {
    recordTaskListView();
  }, []);
  Object(external_wp_element_["useEffect"])(() => {
    const {
      task: prevTask
    } = prevQueryRef.current;
    const {
      task
    } = query;

    if (prevTask !== task) {
      window.document.documentElement.scrollTop = 0;
      prevQueryRef.current = query;
    }

    possiblyCompleteTaskList();
    possiblyTrackCompletedTasks();
  }, [query]);
  const nowTimestamp = Date.now();
  const visibleTasks = tasks.filter(task => task.visible && !dismissedTasks.includes(task.key) && (!remindMeLaterTasks[task.key] || remindMeLaterTasks[task.key] < nowTimestamp));
  const completedTaskKeys = visibleTasks.filter(task => task.completed).map(task => task.key);
  const incompleteTasks = tasks.filter(task => task.visible && !task.completed && !dismissedTasks.includes(task.key));

  const possiblyCompleteTaskList = () => {
    const taskListVariableName = `woocommerce_${name}_complete`;
    const taskListToComplete = isComplete ? {
      [taskListVariableName]: 'no'
    } : {
      [taskListVariableName]: 'yes'
    };

    if (!incompleteTasks.length && !isComplete || incompleteTasks.length && isComplete) {
      updateOptions({ ...taskListToComplete
      });

      if (typeof onComplete === 'function') {
        onComplete();
      }
    }
  };

  const getTrackedIncompletedTasks = (partialCompletedTasks, allTrackedTask) => {
    return visibleTasks.filter(task => allTrackedTask.includes(task.key) && !partialCompletedTasks.includes(task.key)).map(task => task.key);
  };

  const possiblyTrackCompletedTasks = () => {
    const trackedCompletedTasks = getTrackedCompletedTasks(completedTaskKeys, totalTrackedCompletedTasks);
    const trackedIncompleteTasks = getTrackedIncompletedTasks(trackedCompletedTasks, totalTrackedCompletedTasks);

    if (shouldUpdateCompletedTasks(trackedCompletedTasks, trackedIncompleteTasks, completedTaskKeys)) {
      updateOptions({
        woocommerce_task_list_tracked_completed_tasks: getTasksForUpdate(completedTaskKeys, totalTrackedCompletedTasks, trackedIncompleteTasks)
      });
    }
  };

  const dismissTask = ({
    key,
    onDismiss
  }) => {
    createNotice('success', Object(external_wp_i18n_["__"])('Task dismissed'), {
      actions: [{
        label: Object(external_wp_i18n_["__"])('Undo', 'woocommerce-admin'),
        onClick: () => undoDismissTask(key)
      }]
    });
    Object(external_wc_tracks_["recordEvent"])(`${eventName}_dismiss_task`, {
      task_name: key
    });
    updateOptions({
      woocommerce_task_list_dismissed_tasks: [...dismissedTasks, key]
    });

    if (onDismiss) {
      onDismiss();
    }
  };

  const undoDismissTask = key => {
    const updatedDismissedTasks = dismissedTasks.filter(task => task !== key);
    updateOptions({
      woocommerce_task_list_dismissed_tasks: updatedDismissedTasks
    });
    Object(external_wc_tracks_["recordEvent"])(`${eventName}_undo_dismiss_task`, {
      task_name: key
    });
  };

  const remindTaskLater = ({
    key,
    onDismiss
  }) => {
    createNotice('success', Object(external_wp_i18n_["__"])('Task postponed until tomorrow', 'woocommerce-admin'), {
      actions: [{
        label: Object(external_wp_i18n_["__"])('Undo', 'woocommerce-admin'),
        onClick: () => undoRemindTaskLater(key)
      }]
    });
    Object(external_wc_tracks_["recordEvent"])(`${eventName}_remindmelater_task`, {
      task_name: key
    });
    const dismissTime = Date.now() + DAY_IN_MS;
    updateOptions({
      woocommerce_task_list_remind_me_later_tasks: { ...remindMeLaterTasks,
        [key]: dismissTime
      }
    });

    if (onDismiss) {
      onDismiss();
    }
  };

  const undoRemindTaskLater = key => {
    const {
      // eslint-disable-next-line no-unused-vars
      [key]: oldValue,
      ...updatedRemindMeLaterTasks
    } = remindMeLaterTasks;
    updateOptions({
      woocommerce_task_list_remind_me_later_tasks: updatedRemindMeLaterTasks
    });
    Object(external_wc_tracks_["recordEvent"])(`${eventName}_undo_remindmelater_task`, {
      task_name: key
    });
  };

  const recordTaskListView = () => {
    if (query.task) {
      return;
    }

    Object(external_wc_tracks_["recordEvent"])(`${eventName}_view`, {
      number_tasks: visibleTasks.length,
      store_connected: profileItems.wccom_connected
    });
  };

  const hideTaskCard = action => {
    const updateOptionsParams = {
      [`woocommerce_${name}_hidden`]: 'yes'
    };
    Object(external_wc_tracks_["recordEvent"])(`${eventName}_completed`, {
      action,
      completed_task_count: completedTaskKeys.length,
      incomplete_task_count: incompleteTasks.length
    });
    updateOptions({ ...updateOptionsParams
    });

    if (typeof onHide === 'function') {
      onHide();
    }
  };

  const renderMenu = () => {
    return Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-card__menu woocommerce-card__header-item"
    }, Object(external_wp_element_["createElement"])(external_wc_components_["EllipsisMenu"], {
      label: Object(external_wp_i18n_["__"])('Task List Options', 'woocommerce-admin'),
      renderContent: () => Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-task-card__section-controls"
      }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        onClick: () => hideTaskCard('remove_card')
      }, Object(external_wp_i18n_["__"])('Hide this', 'woocommerce-admin')))
    }));
  };

  const listTasks = visibleTasks.map(task => {
    if (!task.onClick) {
      task.onClick = e => {
        Object(external_wc_tracks_["recordEvent"])(`${eventName}_click`, {
          task_name: task.key
        });

        if (e.target.nodeName === 'A') {
          // This is a nested link, so don't activate this task.
          return false;
        }

        Object(external_wc_navigation_["updateQueryString"])({
          task: task.key
        });
      };
    }

    return task;
  });

  if (!listTasks.length) {
    return Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-task-dashboard__container"
    });
  }

  const expandLabel = Object(external_wp_i18n_["sprintf"])(
  /* translators: %i = number of hidden tasks */
  Object(external_wp_i18n_["_n"])('Show %i more task.', 'Show %i more tasks.', listTasks.length - 2, 'woocommerce-admin'), listTasks.length - 2);

  const collapseLabel = Object(external_wp_i18n_["__"])('Show less', 'woocommerce-admin');

  const ListComp = collapsible ? external_wc_experimental_["CollapsibleList"] : external_wc_experimental_["List"];
  const listProps = collapsible ? {
    collapseLabel,
    expandLabel,
    show: 2,
    onCollapse: () => Object(external_wc_tracks_["recordEvent"])(`${eventName}_collapse`),
    onExpand: () => Object(external_wc_tracks_["recordEvent"])(`${eventName}_expand`)
  } : {};
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-task-dashboard__container"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
    size: "large",
    className: "woocommerce-task-card woocommerce-homescreen-card"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardHeader"], {
    size: "medium"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "wooocommerce-task-card__header"
  }, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    size: "20",
    lineHeight: "28px",
    variant: "title.small"
  }, listTitle), Object(external_wp_element_["createElement"])(external_wc_components_["Badge"], {
    count: incompleteTasks.length
  })), renderMenu()), Object(external_wp_element_["createElement"])(ListComp, extends_default()({
    animation: "custom"
  }, listProps), listTasks.map(task => Object(external_wp_element_["createElement"])(external_wc_experimental_["TaskItem"], {
    key: task.key,
    title: task.title,
    completed: task.completed,
    content: task.content,
    expandable: expandingItems && task.expandable,
    expanded: expandingItems && task.expanded,
    onClick: task.onClick,
    onDismiss: task.isDismissable ? () => dismissTask(task) : undefined,
    onSnooze: task.allowRemindMeLater ? () => remindTaskLater(task) : undefined,
    time: task.time,
    level: task.level,
    action: task.action,
    actionLabel: task.actionLabel,
    additionalInfo: task.additionalInfo,
    showActionButton: task.showActionButton,
    onExpand: task.onExpand,
    onCollapse: task.onCollapse
  }))))));
};

function shouldUpdateCompletedTasks(tasks, untrackedTasks, completedTasks) {
  if (untrackedTasks.length > 0) {
    return true;
  }

  if (completedTasks.length === 0) {
    return false;
  }

  return !completedTasks.every(taskName => tasks.indexOf(taskName) >= 0);
}

function getTrackedCompletedTasks(completedTasks, trackedTasks) {
  if (!trackedTasks) {
    return [];
  }

  return completedTasks.filter(taskName => trackedTasks.includes(taskName));
}

function getTasksForUpdate(completedTaskKeys, totalTrackedCompletedTasks, trackedIncompleteTasks) {
  const mergedLists = [...new Set([...completedTaskKeys, ...totalTrackedCompletedTasks])];
  return mergedLists.filter(taskName => !trackedIncompleteTasks.includes(taskName));
}

/* harmony default export */ var task_list_task_list = (TaskList);
// EXTERNAL MODULE: ./client/header/activity-panel/display-options/index.js + 3 modules
var display_options = __webpack_require__(253);

// CONCATENATED MODULE: ./client/task-list/task-step.tsx


/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const TaskStep = ({
  taskContainer,
  query
}) => {
  const prevTaskRef = Object(external_wp_element_["useRef"])();
  const {
    isJetpackConnected,
    activePlugins,
    installedPlugins
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getActivePlugins,
      getInstalledPlugins,
      isJetpackConnected: getIsJetpackConnected
    } = select(external_wc_data_["PLUGINS_STORE_NAME"]);
    return {
      activePlugins: getActivePlugins(),
      isJetpackConnected: getIsJetpackConnected(),
      installedPlugins: getInstalledPlugins()
    };
  });

  const recordTaskView = () => {
    const {
      task: taskName
    } = query;

    if (!taskName) {
      return;
    }

    recordTaskViewEvent(taskName, isJetpackConnected, activePlugins, installedPlugins);
  };

  Object(external_wp_element_["useEffect"])(() => {
    const {
      task
    } = query;

    if (prevTaskRef.current !== task) {
      window.document.documentElement.scrollTop = 0;
    }

    prevTaskRef.current = task;
    recordTaskView();
  }, [query]);

  if (!taskContainer || !query.task) {
    return null;
  }

  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-task-dashboard__container"
  }, Object(external_wp_element_["cloneElement"])(taskContainer, {
    query
  }));
};
// EXTERNAL MODULE: ./client/task-list/placeholder.js
var placeholder = __webpack_require__(540);

// CONCATENATED MODULE: ./client/task-list/index.js


/**
 * External dependencies
 */









/**
 * Internal dependencies
 */









const EMPTY_ARRAY = [];

const taskDashboardSelect = select => {
  const {
    getFreeExtensions,
    getProductTypes,
    getProfileItems,
    getTasksStatus,
    hasFinishedResolution: hasOnboardingStoreFinishedResolution
  } = select(external_wc_data_["ONBOARDING_STORE_NAME"]);
  const {
    getSettings
  } = select(external_wc_data_["SETTINGS_STORE_NAME"]);
  const {
    getOption,
    hasFinishedResolution
  } = select(external_wc_data_["OPTIONS_STORE_NAME"]);
  const {
    getActivePlugins,
    getInstalledPlugins,
    isJetpackConnected
  } = select(external_wc_data_["PLUGINS_STORE_NAME"]);
  const profileItems = getProfileItems();
  const trackedCompletedTasks = getOption('woocommerce_task_list_tracked_completed_tasks') || EMPTY_ARRAY;
  const trackedCompletedActions = getOption('woocommerce_task_list_tracked_completed_actions') || EMPTY_ARRAY;
  const {
    general: generalSettings = {}
  } = getSettings('general');
  const countryCode = Object(utils["b" /* getCountryCode */])(generalSettings.woocommerce_default_country);
  const {
    woocommerce_store_address: storeAddress,
    woocommerce_default_country: defaultCountry,
    woocommerce_store_postcode: storePostCode
  } = generalSettings;
  const hasCompleteAddress = Boolean(storeAddress && defaultCountry && storePostCode);
  const activePlugins = getActivePlugins();
  const installedPlugins = getInstalledPlugins();
  const onboardingStatus = getTasksStatus();
  const productTypes = getProductTypes();
  return {
    activePlugins,
    countryCode,
    dismissedTasks: getOption('woocommerce_task_list_dismissed_tasks'),
    freeExtensions: getFreeExtensions(),
    remindMeLaterTasks: getOption('woocommerce_task_list_remind_me_later_tasks'),
    isExtendedTaskListComplete: getOption('woocommerce_extended_task_list_complete') === 'yes',
    isExtendedTaskListHidden: getOption('woocommerce_extended_task_list_hidden') === 'yes',
    isJetpackConnected: isJetpackConnected(),
    isSetupTaskListHidden: getOption('woocommerce_task_list_hidden') === 'yes',
    isTaskListComplete: getOption('woocommerce_task_list_complete') === 'yes',
    installedPlugins,
    productTypes,
    trackedCompletedActions,
    onboardingStatus,
    profileItems,
    trackedCompletedTasks,
    hasCompleteAddress,
    isResolving: !hasFinishedResolution('getOption', ['woocommerce_task_list_complete']) || !hasFinishedResolution('getOption', ['woocommerce_task_list_hidden']) || !hasFinishedResolution('getOption', ['woocommerce_extended_task_list_complete']) || !hasFinishedResolution('getOption', ['woocommerce_extended_task_list_hidden']) || !hasFinishedResolution('getOption', ['woocommerce_task_list_remind_me_later_tasks']) || !hasFinishedResolution('getOption', ['woocommerce_task_list_tracked_completed_tasks']) || !hasFinishedResolution('getOption', ['woocommerce_task_list_dismissed_tasks']) || !hasOnboardingStoreFinishedResolution('getProductTypes')
  };
};

const TaskDashboard = ({
  userPreferences,
  query
}) => {
  const {
    createNotice
  } = Object(external_wp_data_["useDispatch"])('core/notices');
  const {
    updateOptions
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["OPTIONS_STORE_NAME"]);
  const {
    invalidateResolutionForStoreSelector
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["ONBOARDING_STORE_NAME"]);
  const {
    installAndActivatePlugins
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["PLUGINS_STORE_NAME"]);
  const {
    trackedCompletedTasks,
    activePlugins,
    countryCode,
    freeExtensions,
    installedPlugins,
    productTypes,
    isJetpackConnected,
    onboardingStatus,
    profileItems,
    isSetupTaskListHidden,
    dismissedTasks,
    remindMeLaterTasks,
    isTaskListComplete,
    isExtendedTaskListHidden,
    isExtendedTaskListComplete,
    hasCompleteAddress,
    trackedCompletedActions,
    isResolving
  } = Object(external_wp_data_["useSelect"])(taskDashboardSelect);
  const [isCartModalOpen, setIsCartModalOpen] = Object(external_wp_element_["useState"])(false);
  const [isLoadingExperiment, experimentAssignment] = Object(external_wc_explat_["useExperiment"])('woocommerce_tasklist_progression');
  Object(external_wp_element_["useEffect"])(() => {
    document.body.classList.add('woocommerce-onboarding');
    document.body.classList.add('woocommerce-task-dashboard__body');
    invalidateResolutionForStoreSelector('getProductTypes');
  }, []);

  const getTaskStartedCount = taskName => {
    const trackedStartedTasks = userPreferences.task_list_tracked_started_tasks;

    if (!trackedStartedTasks || !trackedStartedTasks[taskName]) {
      return 0;
    }

    return trackedStartedTasks[taskName];
  };

  const updateTrackStartedCount = (taskName, newCount) => {
    const trackedStartedTasks = userPreferences.task_list_tracked_started_tasks || {};
    userPreferences.updateUserPreferences({
      task_list_tracked_started_tasks: { ...(trackedStartedTasks || {}),
        [taskName]: newCount
      }
    });
  };

  const isTaskCompleted = taskName => {
    if (!trackedCompletedTasks) {
      return false;
    }

    return trackedCompletedTasks.includes(taskName);
  };

  const onTaskSelect = taskName => {
    const trackStartedCount = getTaskStartedCount(taskName);
    Object(external_wc_tracks_["recordEvent"])('tasklist_click', {
      task_name: taskName
    });

    if (!isTaskCompleted(taskName)) {
      updateTrackStartedCount(taskName, trackStartedCount + 1);
    }
  };

  const toggleExtensionTaskList = () => {
    const newValue = !isExtendedTaskListHidden;
    Object(external_wc_tracks_["recordEvent"])(newValue ? 'extended_tasklist_hide' : 'extended_tasklist_show');
    updateOptions({
      woocommerce_extended_task_list_hidden: newValue ? 'yes' : 'no'
    });
  };

  const toggleCartModal = () => {
    if (!isCartModalOpen) {
      Object(external_wc_tracks_["recordEvent"])('tasklist_purchase_extensions');
    }

    setIsCartModalOpen(!isCartModalOpen);
  };

  const getCurrentTask = tasks => {
    const {
      task
    } = query;
    const currentTask = tasks.find(s => s.key === task);

    if (!currentTask) {
      return null;
    }

    return currentTask;
  };

  const getExtendedTaskList = extensionTasks => {
    return Object(external_wp_element_["createElement"])(task_list_task_list, {
      name: "extended_task_list",
      eventName: "extended_tasklist",
      collapsible: true,
      dismissedTasks: dismissedTasks || [],
      remindMeLaterTasks: remindMeLaterTasks || [],
      isComplete: isExtendedTaskListComplete,
      query: query,
      tasks: extensionTasks,
      title: Object(external_wp_i18n_["__"])('Things to do next', 'woocommerce-admin'),
      trackedCompletedTasks: trackedCompletedTasks || []
    });
  };

  const allTasks = getAllTasks({
    activePlugins,
    countryCode,
    createNotice,
    freeExtensions,
    installAndActivatePlugins,
    installedPlugins,
    isJetpackConnected,
    onboardingStatus,
    profileItems,
    query,
    toggleCartModal,
    onTaskSelect,
    hasCompleteAddress,
    trackedCompletedActions,
    productTypes
  });
  const {
    extension,
    setup: setupTasks
  } = allTasks;
  const {
    task
  } = query;
  const extensionTasks = Array.isArray(extension) && extension.sort(taskSort);
  const currentTask = getCurrentTask([...(extensionTasks || []), ...(setupTasks || [])]);

  if (task && !currentTask) {
    return null;
  }

  if (currentTask) {
    return Object(external_wp_element_["createElement"])(TaskStep, {
      taskContainer: currentTask.container,
      query: query
    });
  }

  if (isResolving) {
    return Object(external_wp_element_["createElement"])(placeholder["a" /* default */], null);
  }

  const scrollToExtendedList = window.location.hash.substr(1) === 'extended_task_list';
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, setupTasks && (!isSetupTaskListHidden || task) && (isLoadingExperiment ? Object(external_wp_element_["createElement"])(placeholder["a" /* default */], null) : Object(external_wp_element_["createElement"])(task_list_task_list, {
    name: "task_list",
    eventName: "tasklist",
    expandingItems: (experimentAssignment === null || experimentAssignment === void 0 ? void 0 : experimentAssignment.variationName) === 'treatment',
    dismissedTasks: dismissedTasks || [],
    remindMeLaterTasks: remindMeLaterTasks || [],
    isComplete: isTaskListComplete,
    query: query,
    tasks: setupTasks,
    title: Object(external_wp_i18n_["__"])('Get ready to start selling', 'woocommerce-admin'),
    trackedCompletedTasks: trackedCompletedTasks || [],
    onComplete: () => updateOptions({
      woocommerce_default_homepage_layout: 'two_columns'
    }),
    onHide: () => updateOptions({
      woocommerce_default_homepage_layout: 'two_columns'
    })
  })), extensionTasks && Object(external_wp_element_["createElement"])(display_options["a" /* DisplayOption */], null, Object(external_wp_element_["createElement"])(external_wp_components_["MenuGroup"], {
    className: "woocommerce-layout__homescreen-display-options",
    label: Object(external_wp_i18n_["__"])('Display', 'woocommerce-admin')
  }, Object(external_wp_element_["createElement"])(external_wp_components_["MenuItem"], {
    className: "woocommerce-layout__homescreen-extension-tasklist-toggle",
    icon: !isExtendedTaskListHidden && check["a" /* default */],
    isSelected: !isExtendedTaskListHidden,
    role: "menuitemcheckbox",
    onClick: toggleExtensionTaskList
  }, Object(external_wp_i18n_["__"])('Show things to do next', 'woocommerce-admin')))), extensionTasks && !isExtendedTaskListHidden && (scrollToExtendedList ? Object(external_wp_element_["createElement"])(external_wc_components_["ScrollTo"], {
    offset: "-20"
  }, getExtendedTaskList(extensionTasks)) : getExtendedTaskList(extensionTasks)), isCartModalOpen && Object(external_wp_element_["createElement"])(cart_modal, {
    onClose: () => toggleCartModal(),
    onClickPurchaseLater: () => toggleCartModal()
  }));
};

/* harmony default export */ var client_task_list = __webpack_exports__["default"] = (TaskDashboard);

/***/ })

}]);