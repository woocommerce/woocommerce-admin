(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[3,51],{

/***/ 43:
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createNoticesFromResponse; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
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

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var interpolate_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var interpolate_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(interpolate_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _profile_wizard_steps_usage_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(554);


/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



const WCPayUsageModal = () => {
  const query = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_2__["getQuery"])();
  const shouldDisplayModal = query['wcpay-connection-success'] === '1';
  const [isOpen, setIsOpen] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(shouldDisplayModal);

  if (!isOpen) {
    return null;
  }

  const closeModal = () => {
    setIsOpen(false);
    Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_2__["updateQueryString"])({
      'wcpay-connection-success': undefined
    });
  };

  const title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Help us build a better WooCommerce Payments experience', 'woocommerce-admin');

  const trackingMessage = interpolate_components__WEBPACK_IMPORTED_MODULE_3___default()({
    mixedString: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('By agreeing to share non-sensitive {{link}}usage data{{/link}}, you’ll help us improve features and optimize the WooCommerce Payments experience. You can opt out at any time.', 'woocommerce-admin'),
    components: {
      link: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        href: "https://woocommerce.com/usage-tracking",
        target: "_blank",
        type: "external"
      })
    }
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_profile_wizard_steps_usage_modal__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    isDismissible: false,
    title: title,
    message: trackingMessage,
    acceptActionText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('I agree', 'woocommerce-admin'),
    dismissActionText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('No thanks', 'woocommerce-admin'),
    onContinue: closeModal,
    onClose: closeModal
  });
};

/* harmony default export */ __webpack_exports__["default"] = (WCPayUsageModal);

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var interpolate_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var interpolate_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(interpolate_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce_explat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(140);
/* harmony import */ var _woocommerce_explat__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_explat__WEBPACK_IMPORTED_MODULE_8__);


/**
 * External dependencies
 */










class UsageModal extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingScripts: false,
      isRequestStarted: false
    };
  }

  async componentDidUpdate(prevProps, prevState) {
    const {
      hasErrors,
      isRequesting,
      onClose,
      onContinue,
      createNotice
    } = this.props;
    const {
      isLoadingScripts,
      isRequestStarted
    } = this.state; // We can't rely on isRequesting props only because option update might be triggered by other component.

    if (!isRequestStarted) {
      return;
    }

    const isRequestSuccessful = !isRequesting && !isLoadingScripts && (prevProps.isRequesting || prevState.isLoadingScripts) && !hasErrors;
    const isRequestError = !isRequesting && prevProps.isRequesting && hasErrors;

    if (isRequestSuccessful) {
      onClose();
      onContinue();
    }

    if (isRequestError) {
      createNotice('error', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('There was a problem updating your preferences', 'woocommerce-admin'));
      onClose();
    }
  }

  updateTracking({
    allowTracking
  }) {
    const {
      updateOptions
    } = this.props;

    if (allowTracking && typeof window.wcTracks.enable === 'function') {
      this.setState({
        isLoadingScripts: true
      });
      window.wcTracks.enable(() => {
        // Don't update state if component is unmounted already
        if (!this._isMounted) {
          return;
        }

        Object(_woocommerce_explat__WEBPACK_IMPORTED_MODULE_8__["initializeExPlat"])();
        this.setState({
          isLoadingScripts: false
        });
      });
    } else if (!allowTracking) {
      window.wcTracks.isEnabled = false;
    }

    const trackingValue = allowTracking ? 'yes' : 'no';
    this.setState({
      isRequestStarted: true
    });
    updateOptions({
      woocommerce_allow_tracking: trackingValue
    });
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    // Bail if site has already opted in to tracking
    if (this.props.allowTracking) {
      const {
        onClose,
        onContinue
      } = this.props;
      onClose();
      onContinue();
      return null;
    }

    const {
      isRequesting,
      title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Build a better WooCommerce', 'woocommerce-admin'),
      message = interpolate_components__WEBPACK_IMPORTED_MODULE_4___default()({
        mixedString: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Get improved features and faster fixes by sharing non-sensitive data via {{link}}usage tracking{{/link}} ' + 'that shows us how WooCommerce is used. No personal data is tracked or stored.', 'woocommerce-admin'),
        components: {
          link: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_6__["Link"], {
            href: "https://woocommerce.com/usage-tracking",
            target: "_blank",
            type: "external"
          })
        }
      }),
      dismissActionText = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('No thanks', 'woocommerce-admin'),
      acceptActionText = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Yes, count me in!', 'woocommerce-admin')
    } = this.props;
    const {
      isRequestStarted
    } = this.state;
    const isBusy = isRequestStarted && isRequesting;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
      title: title,
      isDismissible: this.props.isDismissible,
      onRequestClose: () => this.props.onClose(),
      className: "woocommerce-usage-modal"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "woocommerce-usage-modal__wrapper"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "woocommerce-usage-modal__message"
    }, message), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "woocommerce-usage-modal__actions"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      isSecondary: true,
      isBusy: isBusy,
      onClick: () => this.updateTracking({
        allowTracking: false
      })
    }, dismissActionText), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      isPrimary: true,
      isBusy: isBusy,
      onClick: () => this.updateTracking({
        allowTracking: true
      })
    }, acceptActionText))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(select => {
  const {
    getOption,
    getOptionsUpdatingError,
    isOptionsUpdating
  } = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__["OPTIONS_STORE_NAME"]);
  const allowTracking = getOption('woocommerce_allow_tracking') === 'yes';
  const isRequesting = Boolean(isOptionsUpdating());
  const hasErrors = Boolean(getOptionsUpdatingError());
  return {
    allowTracking,
    isRequesting,
    hasErrors
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withDispatch"])(dispatch => {
  const {
    createNotice
  } = dispatch('core/notices');
  const {
    updateOptions
  } = dispatch(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__["OPTIONS_STORE_NAME"]);
  return {
    createNotice,
    updateOptions
  };
}))(UsageModal));

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ isWCPaySupported; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ installActivateAndConnectWcpay; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ wcpay; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ wcpay_usage_modal["default"]; });

// EXTERNAL MODULE: ./client/task-list/tasks/payments/methods/wcpay/wcpay-usage-modal.js
var wcpay_usage_modal = __webpack_require__(553);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(7);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(12);

// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/wcpay/wcpay.js
/**
 * External dependencies
 */





class wcpay_WCPay extends external_wp_element_["Component"] {
  componentDidMount() {
    const {
      createNotice,
      markConfigured
    } = this.props;
    const query = Object(external_wc_navigation_["getQuery"])(); // Handle redirect back from WCPay on-boarding

    if (query['wcpay-connection-success']) {
      createNotice('success', Object(external_wp_i18n_["__"])('WooCommerce Payments connected successfully.', 'woocommerce-admin'));
      markConfigured('wcpay', {
        'wcpay-connection-success': '1'
      });
    }
  }

  render() {
    return null;
  }

}

/* harmony default export */ var wcpay = (Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    createNotice
  } = dispatch('core/notices');
  return {
    createNotice
  };
})(wcpay_WCPay));
// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/wcpay/is-supported.js
function isWCPaySupported(countryCode) {
  const supportedCountries = ['US', 'PR'];

  if (window.wcAdminFeatures && window.wcAdminFeatures['wcpay/support-international-countries']) {
    supportedCountries.push('AU', 'CA', 'DE', 'ES', 'FR', 'GB', 'IE', 'IT', 'NZ');
  }

  return supportedCountries.includes(countryCode);
}
// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__(20);
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(11);

// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(18);

// EXTERNAL MODULE: ./client/lib/notices/index.js
var notices = __webpack_require__(551);

// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/wcpay/install-activate-and-connect.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


function installActivateAndConnectWcpay(reject, createNotice, installAndActivatePlugins) {
  const errorMessage = Object(external_wp_i18n_["__"])('There was an error connecting to WooCommerce Payments. Please try again or connect later in store settings.', 'woocommerce-admin');

  const connect = () => {
    external_wp_apiFetch_default()({
      path: external_wc_data_["WC_ADMIN_NAMESPACE"] + '/plugins/connect-wcpay',
      method: 'POST'
    }).then(response => {
      window.location = response.connectUrl;
    }).catch(() => {
      createNotice('error', errorMessage);
      reject();
    });
  };

  installAndActivatePlugins(['woocommerce-payments']).then(() => {
    Object(external_wc_tracks_["recordEvent"])('woocommerce_payments_install', {
      context: 'tasklist'
    });
    connect();
  }).catch(error => {
    Object(notices["a" /* createNoticesFromResponse */])(error);
    reject();
  });
}
// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/wcpay/index.js
/**
 * Internal dependencies
 */






/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ getPaymentMethods; });

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: ./client/wc-admin-settings/index.js
var wc_admin_settings = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(13);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(43);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(4);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(15);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(7);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(23);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(11);

// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/bacs.js




/**
 * External dependencies
 */








class bacs_Bacs extends external_wp_element_["Component"] {
  constructor(...args) {
    super(...args);

    defineProperty_default()(this, "getInitialConfigValues", () => {
      return {
        account_name: '',
        account_number: '',
        bank_name: '',
        sort_code: '',
        iban: '',
        bic: ''
      };
    });

    defineProperty_default()(this, "validate", values => {
      const errors = {};

      if (!values.account_number && !values.iban) {
        errors.account_number = errors.iban = Object(external_wp_i18n_["__"])('Please enter an account number or IBAN', 'woocommerce-admin');
      }

      return errors;
    });

    defineProperty_default()(this, "updateSettings", async values => {
      const {
        updateOptions,
        createNotice,
        markConfigured
      } = this.props;
      const update = await updateOptions({
        woocommerce_bacs_settings: {
          enabled: 'yes'
        },
        woocommerce_bacs_accounts: [values]
      });

      if (update.success) {
        markConfigured('bacs');
        createNotice('success', Object(external_wp_i18n_["__"])('Direct bank transfer details added successfully', 'woocommerce-admin'));
      } else {
        createNotice('error', Object(external_wp_i18n_["__"])('There was a problem saving your payment settings', 'woocommerce-admin'));
      }
    });
  }

  render() {
    const {
      isOptionsRequesting
    } = this.props;
    return Object(external_wp_element_["createElement"])(external_wc_components_["Form"], {
      initialValues: this.getInitialConfigValues(),
      onSubmit: this.updateSettings,
      validate: this.validate
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
        isBusy: isOptionsRequesting,
        onClick: handleSubmit
      }, Object(external_wp_i18n_["__"])('Save', 'woocommerce-admin')));
    });
  }

}

/* harmony default export */ var bacs = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(select => {
  const {
    isOptionsUpdating
  } = select(external_wc_data_["OPTIONS_STORE_NAME"]);
  const isOptionsRequesting = isOptionsUpdating();
  return {
    isOptionsRequesting
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    createNotice
  } = dispatch('core/notices');
  const {
    updateOptions
  } = dispatch(external_wc_data_["OPTIONS_STORE_NAME"]);
  return {
    createNotice,
    updateOptions
  };
}))(bacs_Bacs));
// CONCATENATED MODULE: ./client/task-list/tasks/payments/images/bacs.js

/* harmony default export */ var images_bacs = (() => Object(external_wp_element_["createElement"])("svg", {
  width: "96",
  height: "32",
  viewBox: "0 0 96 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_wp_element_["createElement"])("rect", {
  width: "32",
  height: "32",
  rx: "16",
  fill: "#8E9196"
}), Object(external_wp_element_["createElement"])("mask", {
  id: "bacs0",
  "mask-type": "alpha",
  maskUnits: "userSpaceOnUse",
  x: "8",
  y: "8",
  width: "16",
  height: "16"
}, Object(external_wp_element_["createElement"])("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M8.875 12.25L16 8.5L23.125 12.25V13.75H8.875V12.25ZM16 10.195L19.9075 12.25H12.0925L16 10.195ZM10.75 15.25H12.25V20.5H10.75V15.25ZM15.25 20.5V15.25H16.75V20.5H15.25ZM23.125 23.5V22H8.875V23.5H23.125ZM19.75 15.25H21.25V20.5H19.75V15.25Z",
  fill: "white"
})), Object(external_wp_element_["createElement"])("g", {
  mask: "url(#bacs0)"
}, Object(external_wp_element_["createElement"])("rect", {
  x: "7",
  y: "7",
  width: "18",
  height: "18",
  fill: "white"
})), Object(external_wp_element_["createElement"])("mask", {
  id: "bacs1",
  "mask-type": "alpha",
  maskUnits: "userSpaceOnUse",
  x: "39",
  y: "10",
  width: "18",
  height: "12"
}, Object(external_wp_element_["createElement"])("path", {
  d: "M39 17L53.17 17L49.59 20.59L51 22L57 16L51 10L49.59 11.41L53.17 15L39 15L39 17Z",
  fill: "white"
})), Object(external_wp_element_["createElement"])("g", {
  mask: "url(#bacs1)"
}, Object(external_wp_element_["createElement"])("rect", {
  x: "60",
  y: "28",
  width: "24",
  height: "24",
  transform: "rotate(-180 60 28)",
  fill: "#8E9196"
})), Object(external_wp_element_["createElement"])("rect", {
  x: "64",
  width: "32",
  height: "32",
  rx: "16",
  fill: "#8E9196"
}), Object(external_wp_element_["createElement"])("mask", {
  id: "bacs2",
  "mask-type": "alpha",
  maskUnits: "userSpaceOnUse",
  x: "72",
  y: "8",
  width: "16",
  height: "16"
}, Object(external_wp_element_["createElement"])("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M72.875 12.25L80 8.5L87.125 12.25V13.75H72.875V12.25ZM80 10.195L83.9075 12.25H76.0925L80 10.195ZM74.75 15.25H76.25V20.5H74.75V15.25ZM79.25 20.5V15.25H80.75V20.5H79.25ZM87.125 23.5V22H72.875V23.5H87.125ZM83.75 15.25H85.25V20.5H83.75V15.25Z",
  fill: "white"
})), Object(external_wp_element_["createElement"])("g", {
  mask: "url(#bacs2)"
}, Object(external_wp_element_["createElement"])("rect", {
  x: "71",
  y: "7",
  width: "18",
  height: "18",
  fill: "white"
}))));
// CONCATENATED MODULE: ./client/task-list/tasks/payments/images/payu-india.js

const PayUIndiaLogo = () => {
  return Object(external_wp_element_["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1333.333",
    version: "1",
    viewBox: "0 0 1000 1000"
  }, Object(external_wp_element_["createElement"])("path", {
    d: "M8987 7472c-15-16-17-45-17-194 0-157 2-177 18-191s44-17 189-17c152 0 172 2 186 18 15 16 17 45 17 194 0 157-2 177-18 191s-44 17-189 17c-152 0-172-2-186-18zM9413 7046l-28-24v-520l24-26 24-26h518l24 25 25 24v250c0 162-4 259-11 274-20 43-45 47-304 47-243 0-244 0-272-24zM8623 6435c-44-19-64-54-70-123l-6-59-106-6c-182-11-261-50-293-145-9-28-14-251-18-912l-5-875-29-62c-47-102-124-160-256-194-83-21-356-19-440 4-131 36-203 90-249 187l-26 55-5 875c-5 669-9 884-19 913-20 62-75 115-140 135-82 25-431 25-513-1-70-21-110-54-134-109-18-41-19-90-22-888-2-567 1-877 8-942 45-397 254-684 606-832 100-41 240-81 369-103 156-27 570-24 725 5 224 41 398 107 541 202 92 62 216 193 273 288 27 45 64 126 82 179 61 180 64 217 64 936v647h165c128 0 173 3 195 15 61 31 60 27 60 398 0 377-2 386-65 413-49 20-645 20-692-1zM322 6230c-114-24-221-100-268-192-55-108-54-73-54-1379V3453l23-34c29-44 72-58 172-58s143 14 172 58l23 34v935l473 5c379 4 489 8 557 21 374 72 570 244 656 573 36 135 45 410 20 562-64 379-252 580-626 667-65 15-141 18-590 20-283 1-534-2-558-6zm1107-388c75-27 103-44 154-91 88-82 127-217 127-438-1-343-95-479-370-529-56-10-188-13-513-14H389l3 503c3 457 5 505 21 534 35 64 26 63 512 60 429-2 442-3 504-25zM2665 5600c-114-13-234-38-274-58-62-31-76-61-76-167 0-79 3-98 21-121 32-43 65-49 163-30 175 33 251 40 441 40 272 0 384-28 473-121 62-63 78-123 84-309l6-162-369-5c-387-5-459-12-604-58-155-49-291-151-353-263-56-102-72-176-71-341 0-135 3-158 27-231 64-192 211-329 422-393 123-38 231-52 407-51 526 0 804 152 895 490 16 59 18 123 18 650v585l-23 75c-52 167-144 281-288 357-168 88-292 113-594 118-124 2-261 0-305-5zm832-1452c-7-243-17-288-83-358-49-52-106-81-211-106-89-22-373-25-453-5-198 49-277 155-268 355 3 80 8 99 34 146 50 87 142 139 289 160 27 4 196 8 374 9l324 1-6-202zM4073 5535c-46-20-67-57-59-105 9-57 420-1575 458-1690 42-130 91-221 152-283 64-64 123-94 228-115 68-13 95-14 171-4 50 6 93 10 95 8 7-7-80-211-113-266-37-61-97-122-155-157-48-29-155-60-232-68-130-14-162-36-160-115 2-84 30-166 69-200 32-28 38-30 121-30 98 0 228 26 318 63 229 93 393 294 499 613 53 161 565 2215 565 2269 0 50-21 80-64 91-14 3-70 4-125 2-116-4-142-16-179-89-14-27-95-348-212-837-104-437-198-812-209-835-37-83-92-117-188-117-113 0-163 31-204 126-9 23-106 367-214 765-245 906-247 910-285 943-17 14-47 30-68 36-52 14-171 12-209-5z",
    transform: "matrix(.1 0 0 -.1 0 1000)"
  }));
};
// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__(20);
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// EXTERNAL MODULE: ./node_modules/interpolate-components/lib/index.js
var lib = __webpack_require__(19);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(12);

// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/stripe.js



/**
 * External dependencies
 */












class stripe_Stripe extends external_wp_element_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      oAuthConnectFailed: false,
      connectURL: null,
      isPending: false
    };
    this.updateSettings = this.updateSettings.bind(this);
  }

  componentDidMount() {
    const {
      oAuthConnectFailed
    } = this.state;
    const {
      stripeSettings
    } = this.props;
    const query = Object(external_wc_navigation_["getQuery"])(); // Handle redirect back from Stripe.

    if (query['stripe-connect'] && query['stripe-connect'] === '1') {
      const isStripeConnected = stripeSettings.publishable_key && stripeSettings.secret_key;

      if (isStripeConnected) {
        this.completeMethod();
        return;
      }
    }

    if (!oAuthConnectFailed) {
      this.fetchOAuthConnectURL();
    }
  }

  componentDidUpdate(prevProps) {
    const {
      activePlugins
    } = this.props;

    if (!prevProps.activePlugins.includes('woocommerce-gateway-stripe') && activePlugins.includes('woocommerce-gateway-stripe')) {
      this.fetchOAuthConnectURL();
    }
  }

  completeMethod() {
    const {
      createNotice,
      markConfigured
    } = this.props;
    this.setState({
      isPending: false
    });
    createNotice('success', Object(external_wp_i18n_["__"])('Stripe connected successfully.', 'woocommerce-admin'));
    markConfigured('stripe');
  }

  async fetchOAuthConnectURL() {
    const {
      activePlugins
    } = this.props;

    if (!activePlugins.includes('woocommerce-gateway-stripe')) {
      return;
    }

    try {
      this.setState({
        isPending: true
      });
      const result = await external_wp_apiFetch_default()({
        path: external_wc_data_["WCS_NAMESPACE"] + '/connect/stripe/oauth/init',
        method: 'POST',
        data: {
          returnUrl: Object(wc_admin_settings["g" /* getAdminLink */])('admin.php?page=wc-admin&task=payments&id=stripe&stripe-connect=1')
        }
      });

      if (!result || !result.oauthUrl) {
        this.setState({
          oAuthConnectFailed: true,
          isPending: false
        });
        return;
      }

      this.setState({
        connectURL: result.oauthUrl,
        isPending: false
      });
    } catch (error) {
      this.setState({
        oAuthConnectFailed: true,
        isPending: false
      });
    }
  }

  renderConnectButton() {
    const {
      connectURL
    } = this.state;
    return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      isPrimary: true,
      href: connectURL
    }, Object(external_wp_i18n_["__"])('Connect', 'woocommerce-admin'));
  }

  async updateSettings(values) {
    const {
      updateOptions,
      stripeSettings,
      createNotice
    } = this.props;
    const prefix = values.publishable_key.match(/^pk_live_/) ? '' : 'test_';
    const update = await updateOptions({
      woocommerce_stripe_settings: { ...stripeSettings,
        [prefix + 'publishable_key']: values.publishable_key,
        [prefix + 'secret_key']: values.secret_key,
        testmode: prefix === 'test_' ? 'yes' : 'no',
        enabled: 'yes'
      }
    });

    if (update.success) {
      this.completeMethod();
    } else {
      createNotice('error', Object(external_wp_i18n_["__"])('There was a problem saving your payment settings', 'woocommerce-admin'));
    }
  }

  getInitialConfigValues() {
    return {
      publishable_key: '',
      secret_key: ''
    };
  }

  validateManualConfig(values) {
    const errors = {};

    if (values.publishable_key.match(/^pk_(live|test)_[a-zA-Z0-9_]+/) === null) {
      errors.publishable_key = Object(external_wp_i18n_["__"])('Please enter a valid publishable key (starting with "pk_").', 'woocommerce-admin');
    }

    if (values.secret_key.match(/^[rs]k_(live|test)_[a-zA-Z0-9_]+/) === null) {
      errors.secret_key = Object(external_wp_i18n_["__"])('Please enter a valid secret key (starting with "sk_" or "rk_").', 'woocommerce-admin');
    } else if (values.secret_key.slice(3, 7) !== values.publishable_key.slice(3, 7)) {
      errors.secret_key = Object(external_wp_i18n_["__"])('Please enter a secret key in the same mode as the publishable key.', 'woocommerce-admin');
    }

    return errors;
  }

  renderManualConfig() {
    const {
      isOptionsUpdating,
      recordConnectStartEvent
    } = this.props;
    const stripeHelp = lib_default()({
      mixedString: Object(external_wp_i18n_["__"])('Your API details can be obtained from your {{docsLink}}Stripe account{{/docsLink}}. Don’t have a Stripe account? {{registerLink}}Create one.{{/registerLink}}', 'woocommerce-admin'),
      components: {
        docsLink: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
          href: "https://stripe.com/docs/keys",
          target: "_blank",
          type: "external"
        }),
        registerLink: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
          href: "https://dashboard.stripe.com/register",
          target: "_blank",
          type: "external"
        })
      }
    });
    return Object(external_wp_element_["createElement"])(external_wc_components_["Form"], {
      initialValues: this.getInitialConfigValues(),
      onSubmit: this.updateSettings,
      validate: this.validateManualConfig
    }, ({
      getInputProps,
      handleSubmit
    }) => {
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
        label: Object(external_wp_i18n_["__"])('Publishable Key', 'woocommerce-admin'),
        required: true
      }, getInputProps('publishable_key'))), Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
        label: Object(external_wp_i18n_["__"])('Secret Key', 'woocommerce-admin'),
        required: true
      }, getInputProps('secret_key'))), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isPrimary: true,
        isBusy: isOptionsUpdating,
        onClick: event => {
          recordConnectStartEvent('stripe');
          handleSubmit(event);
        }
      }, Object(external_wp_i18n_["__"])('Proceed', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("p", null, stripeHelp));
    });
  }

  renderOauthConfig() {
    const {
      recordConnectStartEvent
    } = this.props;
    const tosPrompt = lib_default()({
      mixedString: Object(external_wp_i18n_["__"])('By clicking "Connect," you agree to the {{tosLink}}Terms of Service{{/tosLink}}. Or {{manualConfigLink}}manually enter your Stripe API details{{/manualConfigLink}} instead.', 'woocommerce-admin'),
      components: {
        tosLink: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
          href: "https://wordpress.com/tos",
          target: "_blank",
          type: "external"
        }),
        manualConfigLink: Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
          isLink: true,
          onClick: () => {
            this.setState({
              connectURL: null
            });
            recordConnectStartEvent('stripe');
          }
        })
      }
    });
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("p", null, this.renderConnectButton()), tosPrompt);
  }

  getConnectStep() {
    const {
      connectURL,
      isPending,
      oAuthConnectFailed
    } = this.state;
    const connectStep = {
      key: 'connect',
      label: Object(external_wp_i18n_["__"])('Connect your Stripe account', 'woocommerce-admin')
    };

    if (isPending) {
      return connectStep;
    }

    if (!oAuthConnectFailed && connectURL) {
      return { ...connectStep,
        description: Object(external_wp_i18n_["__"])('A Stripe account is required to process payments.', 'woocommerce-admin'),
        content: this.renderOauthConfig()
      };
    }

    return { ...connectStep,
      content: this.renderManualConfig()
    };
  }

  render() {
    const {
      installStep,
      isOptionsUpdating
    } = this.props;
    const {
      isPending
    } = this.state;
    return Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
      isVertical: true,
      isPending: !installStep.isComplete || isOptionsUpdating || isPending,
      currentStep: installStep.isComplete ? 'connect' : 'install',
      steps: [installStep, this.getConnectStep()]
    });
  }

}

/* harmony default export */ var stripe = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(select => {
  const {
    getOption,
    isOptionsUpdating
  } = select(external_wc_data_["OPTIONS_STORE_NAME"]);
  const {
    getActivePlugins
  } = select(external_wc_data_["PLUGINS_STORE_NAME"]);
  return {
    activePlugins: getActivePlugins(),
    isOptionsUpdating: isOptionsUpdating(),
    stripeSettings: getOption('woocommerce_stripe_settings') || []
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    createNotice
  } = dispatch('core/notices');
  const {
    updateOptions
  } = dispatch(external_wc_data_["OPTIONS_STORE_NAME"]);
  return {
    createNotice,
    updateOptions
  };
}))(stripe_Stripe));
// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/square.js


/**
 * External dependencies
 */











class square_Square extends external_wp_element_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isPending: false
    };
    this.connect = this.connect.bind(this);
  }

  componentDidMount() {
    const {
      createNotice,
      markConfigured
    } = this.props;
    const query = Object(external_wc_navigation_["getQuery"])(); // Handle redirect back from Square

    if (query['square-connect']) {
      if (query['square-connect'] === '1') {
        createNotice('success', Object(external_wp_i18n_["__"])('Square connected successfully.', 'woocommerce-admin'));
        markConfigured('square');
      }
    }
  }

  async connect() {
    const {
      createNotice,
      hasCbdIndustry,
      options,
      recordConnectStartEvent,
      updateOptions
    } = this.props;
    this.setState({
      isPending: true
    });
    updateOptions({
      woocommerce_square_credit_card_settings: { ...options.woocommerce_square_credit_card_settings,
        enabled: 'yes'
      }
    });

    const errorMessage = Object(external_wp_i18n_["__"])('There was an error connecting to Square. Please try again or skip to connect later in store settings.', 'woocommerce-admin');

    recordConnectStartEvent('square');

    try {
      let newWindow = null;

      if (hasCbdIndustry) {
        // It's necessary to declare the new tab before the async call,
        // otherwise, it won't be possible to open it.
        newWindow = window.open('/', '_blank');
      }

      const result = await external_wp_apiFetch_default()({
        path: external_wc_data_["WC_ADMIN_NAMESPACE"] + '/plugins/connect-square',
        method: 'POST'
      });

      if (!result || !result.connectUrl) {
        this.setState({
          isPending: false
        });
        createNotice('error', errorMessage);

        if (hasCbdIndustry) {
          newWindow.close();
        }

        return;
      }

      this.setState({
        isPending: true
      });
      this.redirect(result.connectUrl, newWindow);
    } catch (error) {
      this.setState({
        isPending: false
      });
      createNotice('error', errorMessage);
    }
  }

  redirect(connectUrl, newWindow) {
    if (newWindow) {
      newWindow.location.href = connectUrl;
      window.location = Object(wc_admin_settings["g" /* getAdminLink */])('admin.php?page=wc-admin');
    } else {
      window.location = connectUrl;
    }
  }

  render() {
    const {
      installStep
    } = this.props;
    const {
      isPending
    } = this.state;
    return Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
      isVertical: true,
      isPending: !installStep.isComplete || isPending,
      currentStep: installStep.isComplete ? 'connect' : 'install',
      steps: [installStep, {
        key: 'connect',
        label: Object(external_wp_i18n_["__"])('Connect your Square account', 'woocommerce-admin'),
        description: Object(external_wp_i18n_["__"])('A Square account is required to process payments. You will be redirected to the Square website to create the connection.', 'woocommerce-admin'),
        content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
          isPrimary: true,
          isBusy: isPending,
          onClick: this.connect
        }, Object(external_wp_i18n_["__"])('Connect', 'woocommerce-admin')))
      }]
    });
  }

}

/* harmony default export */ var square = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(select => {
  const {
    getOption,
    isResolving
  } = select(external_wc_data_["OPTIONS_STORE_NAME"]);
  const options = getOption('woocommerce_square_credit_card_settings');
  const optionsIsRequesting = isResolving('getOption', ['woocommerce_square_credit_card_settings']);
  return {
    options,
    optionsIsRequesting
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    createNotice
  } = dispatch('core/notices');
  const {
    updateOptions
  } = dispatch(external_wc_data_["OPTIONS_STORE_NAME"]);
  return {
    createNotice,
    updateOptions
  };
}))(square_Square));
// EXTERNAL MODULE: ./client/task-list/tasks/payments/methods/wcpay/index.js + 3 modules
var wcpay = __webpack_require__(560);

// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__(16);

// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/paypal.js



/* global ppcp_onboarding */

/**
 * External dependencies
 */











const PAYPAL_PLUGIN = 'woocommerce-paypal-payments';
const WC_PAYPAL_NAMESPACE = '/wc-paypal/v1';
/**
 * Loads the onboarding script file into the dom on the fly.
 *
 * @param {string} url of the onboarding js file.
 * @param {Object} data required for the onboarding script, labeled as PayPalCommerceGatewayOnboarding
 * @param {Function} onLoad callback for when the script is loaded.
 */

function loadOnboardingScript(url, data, onLoad) {
  try {
    // eslint-disable-next-line camelcase
    if (ppcp_onboarding) {
      onLoad();
    }
  } catch (e) {
    const script = document.createElement('script');
    script.src = url;
    document.body.append(script); // Callback after scripts have loaded.

    script.onload = function () {
      onLoad();
    };

    window.PayPalCommerceGatewayOnboarding = data;
  }
}

function PaypalConnectButton({
  connectUrl,
  recordConnectStartEvent
}) {
  Object(external_wp_element_["useEffect"])(() => {
    // eslint-disable-next-line camelcase
    if (ppcp_onboarding) {
      // Makes sure the onboarding is hooked up to the Connect button rendered.
      ppcp_onboarding.reload();
    }
  }, []);
  return Object(external_wp_element_["createElement"])("a", {
    className: "button-primary",
    target: "_blank",
    rel: "noreferrer",
    href: connectUrl,
    "data-paypal-onboard-button": "true",
    "data-paypal-button": "true",
    "data-paypal-onboard-complete": "ppcp_onboarding_productionCallback",
    onClick: () => recordConnectStartEvent('paypal')
  }, Object(external_wp_i18n_["__"])('Connect', 'woocommerce-admin'));
}

class paypal_PayPal extends external_wp_element_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      autoConnectFailed: false,
      connectURL: ''
    };
    this.enablePaypalPlugin = this.enablePaypalPlugin.bind(this);
    this.setCredentials = this.setCredentials.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    const {
      createNotice
    } = this.props;
    const query = Object(external_wc_navigation_["getQuery"])(); // Handle redirect back from PayPal

    if (query.onboarding) {
      if (query.onboarding === 'complete' && !query['ppcp-onboarding-error']) {
        this.enablePaypalPlugin();
        return;
      }

      if (query['ppcp-onboarding-error']) {
        /* eslint-disable react/no-did-mount-set-state */
        this.setState({
          autoConnectFailed: true
        });
        createNotice('error', Object(external_wp_i18n_["__"])('There was a problem saving your payment settings through the onboarding, please fill the fields in manually.', 'woocommerce-admin'));
      }

      return;
    }

    this.fetchOAuthConnectURLAndOnboardingSetup();
  }

  componentDidUpdate(prevProps) {
    const {
      activePlugins
    } = this.props;

    if (!prevProps.activePlugins.includes(PAYPAL_PLUGIN) && activePlugins.includes(PAYPAL_PLUGIN)) {
      this.fetchOAuthConnectURLAndOnboardingSetup();
    }
  }

  async fetchOAuthConnectURLAndOnboardingSetup() {
    const {
      activePlugins,
      createNotice
    } = this.props;

    if (!activePlugins.includes(PAYPAL_PLUGIN)) {
      return;
    }

    this.setState({
      isPending: true
    });

    try {
      const result = await external_wp_apiFetch_default()({
        path: WC_PAYPAL_NAMESPACE + '/onboarding/get-params',
        method: 'POST',
        data: {
          environment: 'production',
          returnUrlArgs: {
            ppcpobw: '1'
          }
        }
      });

      if (!result || !result.signupLink) {
        this.setState({
          autoConnectFailed: true,
          isPending: false
        });
        return;
      }

      loadOnboardingScript(result.scriptURL, result.scriptData, () => {
        this.setState({
          connectURL: result.signupLink,
          isPending: false
        });
      });
    } catch (error) {
      if (error && error.data && error.data.status === 500) {
        createNotice('error', Object(external_wp_i18n_["__"])('There was a problem with the Paypal onboarding setup, please fill the fields in manually.', 'woocommerce-admin'));
      }

      this.setState({
        autoConnectFailed: true,
        isPending: false
      });
    }
  }

  async enablePaypalPlugin(skipPpcpSettingsUpdate) {
    const {
      createNotice,
      updateOptions,
      markConfigured,
      options
    } = this.props;
    const updatedOptions = {
      'woocommerce_ppcp-gateway_settings': {
        enabled: 'yes'
      }
    };

    if (!skipPpcpSettingsUpdate) {
      updatedOptions['woocommerce-ppcp-settings'] = { ...options,
        enabled: true
      };
    }

    const update = await updateOptions(updatedOptions);

    if (update.success) {
      createNotice('success', Object(external_wp_i18n_["__"])('PayPal connected successfully.', 'woocommerce-admin'));
      markConfigured('paypal');
    } else {
      createNotice('error', Object(external_wp_i18n_["__"])('There was a problem saving your payment settings.', 'woocommerce-admin'));
    }
  }

  async setCredentials(values) {
    const {
      createNotice
    } = this.props;

    try {
      const result = await external_wp_apiFetch_default()({
        path: WC_PAYPAL_NAMESPACE + '/onboarding/set-credentials',
        method: 'POST',
        data: {
          environment: 'production',
          ...values
        }
      });

      if (result && result.data) {
        createNotice('error', Object(external_wp_i18n_["__"])('There was a problem updating the credentials.', 'woocommerce-admin'));
      } else {
        await this.enablePaypalPlugin(true);
      }
    } catch (error) {
      if (error && error.data && error.data.status === 404) {
        await this.updateManualSettings(values);
      }
    }
  }

  async updateManualSettings(values) {
    const {
      createNotice,
      options,
      updateOptions,
      markConfigured
    } = this.props;
    const productionValues = Object.keys(values).reduce((vals, key) => {
      const prodKey = key + '_production';
      return { ...vals,
        [prodKey]: values[key]
      };
    }, {});
    /**
     * merchant data can be the same across sandbox and production, that's why we set it as
     * standalone as well.
     */

    const optionValues = { ...options,
      enabled: true,
      sandbox_on: false,
      merchant_email: values.merchant_email,
      merchant_id: values.merchant_id,
      ...productionValues
    };
    const update = await updateOptions({
      'woocommerce-ppcp-settings': optionValues,
      'woocommerce_ppcp-gateway_settings': {
        enabled: 'yes'
      }
    });

    if (update.success) {
      createNotice('success', Object(external_wp_i18n_["__"])('PayPal connected successfully.', 'woocommerce-admin'));
      markConfigured('paypal');
    } else {
      createNotice('error', Object(external_wp_i18n_["__"])('There was a problem saving your payment settings.', 'woocommerce-admin'));
    }
  }

  getInitialConfigValues() {
    const {
      options
    } = this.props;
    return ['merchant_email', 'merchant_id', 'client_id', 'client_secret'].reduce((initialVals, key) => {
      return { ...initialVals,
        [key]: options && options[key + '_production'] ? options[key + '_production'] : ''
      };
    }, {});
  }

  validate(values) {
    const errors = {};

    if (!values.merchant_email) {
      errors.merchant_email = Object(external_wp_i18n_["__"])('Please enter your Merchant email', 'woocommerce-admin');
    }

    if (!Object(external_wp_url_["isEmail"])(values.merchant_email)) {
      errors.merchant_email = Object(external_wp_i18n_["__"])('Please enter a valid email address', 'woocommerce-admin');
    }

    if (!values.merchant_id) {
      errors.merchant_id = Object(external_wp_i18n_["__"])('Please enter your Merchant Id', 'woocommerce-admin');
    }

    if (!values.client_id) {
      errors.client_id = Object(external_wp_i18n_["__"])('Please enter your Client Id', 'woocommerce-admin');
    }

    if (!values.client_secret) {
      errors.client_secret = Object(external_wp_i18n_["__"])('Please enter your Client Secret', 'woocommerce-admin');
    }

    return errors;
  }

  renderManualConfig() {
    const {
      isOptionsUpdating
    } = this.props;
    const stripeHelp = lib_default()({
      mixedString: Object(external_wp_i18n_["__"])('Your API details can be obtained from your {{docsLink}}Paypal developer account{{/docsLink}}, and your Merchant Id from your {{merchantLink}}Paypal Business account{{/merchantLink}}. Don’t have a Paypal account? {{registerLink}}Create one.{{/registerLink}}', 'woocommerce-admin'),
      components: {
        docsLink: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
          href: "https://developer.paypal.com/docs/api-basics/manage-apps/#create-or-edit-sandbox-and-live-apps",
          target: "_blank",
          type: "external"
        }),
        merchantLink: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
          href: "https://www.paypal.com/ca/smarthelp/article/FAQ3850",
          target: "_blank",
          type: "external"
        }),
        registerLink: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
          href: "https://www.paypal.com/us/business",
          target: "_blank",
          type: "external"
        })
      }
    });
    return Object(external_wp_element_["createElement"])(external_wc_components_["Form"], {
      initialValues: this.getInitialConfigValues(),
      onSubmit: this.setCredentials,
      validate: this.validate
    }, ({
      getInputProps,
      handleSubmit
    }) => {
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
        label: Object(external_wp_i18n_["__"])('Email address', 'woocommerce-admin'),
        required: true
      }, getInputProps('merchant_email'))), Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
        label: Object(external_wp_i18n_["__"])('Merchant Id', 'woocommerce-admin'),
        required: true
      }, getInputProps('merchant_id'))), Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
        label: Object(external_wp_i18n_["__"])('Client Id', 'woocommerce-admin'),
        required: true
      }, getInputProps('client_id'))), Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
        label: Object(external_wp_i18n_["__"])('Secret Key', 'woocommerce-admin'),
        required: true
      }, getInputProps('client_secret'))), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isPrimary: true,
        isBusy: isOptionsUpdating,
        onClick: handleSubmit
      }, Object(external_wp_i18n_["__"])('Proceed', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("p", null, stripeHelp));
    });
  }

  renderConnectFields() {
    const {
      autoConnectFailed,
      connectURL
    } = this.state;
    const {
      recordConnectStartEvent
    } = this.props;

    if (!autoConnectFailed && connectURL) {
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(PaypalConnectButton, {
        connectUrl: connectURL,
        recordConnectStartEvent: recordConnectStartEvent
      }), Object(external_wp_element_["createElement"])("p", null, Object(external_wp_i18n_["__"])('You will be redirected to the PayPal website to create the connection.', 'woocommerce-admin')));
    }

    if (autoConnectFailed) {
      return this.renderManualConfig();
    }
  }

  getConnectStep() {
    const {
      isRequestingOptions
    } = this.props;
    return {
      key: 'connect',
      label: Object(external_wp_i18n_["__"])('Connect your PayPal account', 'woocommerce-admin'),
      description: Object(external_wp_i18n_["__"])('A PayPal account is required to process payments. Connect your store to your PayPal account.', 'woocommerce-admin'),
      content: isRequestingOptions ? null : this.renderConnectFields()
    };
  }

  render() {
    const {
      installStep,
      isRequestingOptions,
      isOptionsUpdating
    } = this.props;
    const {
      isPending
    } = this.state;
    return Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
      isVertical: true,
      isPending: !installStep.isComplete || isPending || isRequestingOptions || isOptionsUpdating,
      currentStep: installStep.isComplete ? 'connect' : 'install',
      steps: [installStep, this.getConnectStep()]
    });
  }

}

paypal_PayPal.defaultProps = {
  manualConfig: false // WCS is not required for the PayPal OAuth flow, so we can default to smooth connection.

};
/* harmony default export */ var paypal = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(select => {
  const {
    getOption,
    isOptionsUpdating,
    hasFinishedResolution
  } = select(external_wc_data_["OPTIONS_STORE_NAME"]);
  const {
    getActivePlugins
  } = select(external_wc_data_["PLUGINS_STORE_NAME"]);
  const paypalOptions = getOption('woocommerce-ppcp-settings');
  const isRequestingOptions = !hasFinishedResolution('getOption', ['woocommerce-ppcp-settings']);
  const activePlugins = getActivePlugins();
  return {
    activePlugins,
    isOptionsUpdating: isOptionsUpdating(),
    options: paypalOptions,
    isRequestingOptions
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    createNotice
  } = dispatch('core/notices');
  const {
    updateOptions
  } = dispatch(external_wc_data_["OPTIONS_STORE_NAME"]);
  return {
    createNotice,
    updateOptions
  };
}))(paypal_PayPal));

// EXTERNAL MODULE: ./client/dashboard/utils.js
var utils = __webpack_require__(70);

// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/mercadopago.js


/**
 * External dependencies
 */







/**
 * Internal dependencies
 */


const MERCADOPAGO_PLUGIN = 'woocommerce-mercadopago';
const MercadoPago = ({
  installStep,
  markConfigured
}) => {
  const {
    countryCode
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getSettings
    } = select(external_wc_data_["SETTINGS_STORE_NAME"]);
    const {
      general: generalSettings = {}
    } = getSettings('general');
    return {
      countryCode: Object(utils["b" /* getCountryCode */])(generalSettings.woocommerce_default_country)
    };
  });
  return Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
    isVertical: true,
    isPending: !installStep.isComplete,
    currentStep: installStep.isComplete ? 'connect' : 'install',
    steps: [installStep, {
      key: 'connect',
      label: Object(external_wp_i18n_["__"])('Connect to your Mercado Pago account', 'woocommerce-admin'),
      content: Object(external_wp_element_["createElement"])(MercadoPagoCredentialsStep, {
        countryCode: countryCode,
        onFinish: () => markConfigured('mercadopago')
      })
    }]
  });
};

const MercadoPagoCredentialsStep = ({
  countryCode,
  onFinish
}) => {
  const getRegistrationURL = () => {
    const mercadoPagoURL = 'https://www.mercadopago.com';

    if (!['AR', 'BR', 'CL', 'CO', 'MX', 'PE', 'UY'].includes(countryCode)) {
      return mercadoPagoURL;
    } // As each country has its own domain, we will return the correct one. Otherwise, for example, a Spanish speaker could be redirected to a Mercado Pago page in Portuguese, etc.


    return `${mercadoPagoURL}.${countryCode.toLowerCase()}/registration-company?confirmation_url=${mercadoPagoURL}.${countryCode.toLowerCase()}%2Fcomo-cobrar`;
  };

  const settingsLink = Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
    href: `${wc_admin_settings["a" /* ADMIN_URL */]}admin.php?page=wc-settings&tab=checkout`,
    target: "_blank",
    type: "external"
  });
  const accountLink = Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
    href: getRegistrationURL(),
    target: "_blank",
    type: "external"
  });
  const configureText = lib_default()({
    mixedString: Object(external_wp_i18n_["__"])('Mercado Pago can be configured under your {{settingsLink}}store settings.{{/settingsLink}} Create your Mercado Pago account {{accountLink}}here.{{/accountLink}}', 'woocommerce-admin'),
    components: {
      accountLink,
      settingsLink
    }
  });
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("p", null, configureText), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isPrimary: true,
    onClick: onFinish
  }, Object(external_wp_i18n_["__"])('Continue', 'woocommerce-admin')));
};
// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/klarna.js


/**
 * External dependencies
 */







class klarna_Klarna extends external_wp_element_["Component"] {
  constructor(props) {
    super(props);
    this.continue = this.continue.bind(this);
  }

  continue() {
    const {
      markConfigured,
      plugin
    } = this.props;
    const slug = plugin === 'checkout' ? 'klarna_checkout' : 'klarna_payments';
    markConfigured(slug);
  }

  renderConnectStep() {
    const {
      plugin
    } = this.props;
    const slug = plugin === 'checkout' ? 'klarna-checkout' : 'klarna-payments';
    const section = plugin === 'checkout' ? 'kco' : 'klarna_payments';
    const link = Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
      href: wc_admin_settings["a" /* ADMIN_URL */] + 'admin.php?page=wc-settings&tab=checkout&section=' + section,
      target: "_blank",
      type: "external"
    });
    const helpLink = Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
      href: 'https://docs.woocommerce.com/document/' + slug + '/#section-3',
      target: "_blank",
      type: "external"
    });
    const configureText = lib_default()({
      mixedString: Object(external_wp_i18n_["__"])('Klarna can be configured under your {{link}}store settings{{/link}}. Figure out {{helpLink}}what you need{{/helpLink}}.', 'woocommerce-admin'),
      components: {
        link,
        helpLink
      }
    });
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("p", null, configureText), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      isPrimary: true,
      onClick: this.continue
    }, Object(external_wp_i18n_["__"])('Continue', 'woocommerce-admin')));
  }

  render() {
    const {
      installStep
    } = this.props;
    return Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
      isVertical: true,
      isPending: !installStep.isComplete,
      currentStep: installStep.isComplete ? 'connect' : 'install',
      steps: [installStep, {
        key: 'connect',
        label: Object(external_wp_i18n_["__"])('Connect your Klarna account', 'woocommerce-admin'),
        content: this.renderConnectStep()
      }]
    });
  }

}

/* harmony default export */ var klarna = (klarna_Klarna);
// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/eway.js




/**
 * External dependencies
 */









class eway_EWay extends external_wp_element_["Component"] {
  constructor(...args) {
    super(...args);

    defineProperty_default()(this, "getInitialConfigValues", () => {
      return {
        customer_api: '',
        customer_password: ''
      };
    });

    defineProperty_default()(this, "validate", values => {
      const errors = {};

      if (!values.customer_api) {
        errors.customer_api = Object(external_wp_i18n_["__"])('Please enter your customer API key ', 'woocommerce-admin');
      }

      if (!values.customer_password) {
        errors.customer_password = Object(external_wp_i18n_["__"])('Please enter your customer password', 'woocommerce-admin');
      }

      return errors;
    });

    defineProperty_default()(this, "updateSettings", async values => {
      const {
        updateOptions,
        createNotice,
        markConfigured
      } = this.props;
      const update = await updateOptions({
        woocommerce_eway_settings: {
          customer_api: values.customer_api,
          customer_password: values.customer_password,
          enabled: 'yes'
        }
      });

      if (update.success) {
        markConfigured('eway');
        createNotice('success', Object(external_wp_i18n_["__"])('eWAY connected successfully', 'woocommerce-admin'));
      } else {
        createNotice('error', Object(external_wp_i18n_["__"])('There was a problem saving your payment settings', 'woocommerce-admin'));
      }
    });
  }

  renderConnectStep() {
    const {
      isOptionsRequesting,
      recordConnectStartEvent
    } = this.props;
    const helpText = lib_default()({
      mixedString: Object(external_wp_i18n_["__"])('Your API details can be obtained from your {{link}}eWAY account{{/link}}', 'woocommerce-admin'),
      components: {
        link: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
          href: "https://www.eway.com.au/",
          target: "_blank",
          type: "external"
        })
      }
    });
    return Object(external_wp_element_["createElement"])(external_wc_components_["Form"], {
      initialValues: this.getInitialConfigValues(),
      onSubmit: this.updateSettings,
      validate: this.validate
    }, ({
      getInputProps,
      handleSubmit
    }) => {
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
        label: Object(external_wp_i18n_["__"])('Customer API Key', 'woocommerce-admin'),
        required: true
      }, getInputProps('customer_api'))), Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
        label: Object(external_wp_i18n_["__"])('Customer Password', 'woocommerce-admin'),
        required: true
      }, getInputProps('customer_password'))), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isPrimary: true,
        isBusy: isOptionsRequesting,
        onClick: event => {
          recordConnectStartEvent('eway');
          handleSubmit(event);
        }
      }, Object(external_wp_i18n_["__"])('Proceed', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("p", null, helpText));
    });
  }

  render() {
    const {
      installStep,
      isOptionsRequesting
    } = this.props;
    return Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
      isVertical: true,
      isPending: !installStep.isComplete || isOptionsRequesting,
      currentStep: installStep.isComplete ? 'connect' : 'install',
      steps: [installStep, {
        key: 'connect',
        label: Object(external_wp_i18n_["__"])('Connect your eWAY account', 'woocommerce-admin'),
        content: this.renderConnectStep()
      }]
    });
  }

}

/* harmony default export */ var eway = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(select => {
  const {
    isOptionsUpdating
  } = select(external_wc_data_["OPTIONS_STORE_NAME"]);
  const isOptionsRequesting = isOptionsUpdating();
  return {
    isOptionsRequesting
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    createNotice
  } = dispatch('core/notices');
  const {
    updateOptions
  } = dispatch(external_wc_data_["OPTIONS_STORE_NAME"]);
  return {
    createNotice,
    updateOptions
  };
}))(eway_EWay));
// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/razorpay.js



/**
 * External dependencies
 */






const INITIAL_CONFIG = {
  key_id: '',
  key_secret: ''
};

const razorpay_validate = values => {
  const errors = {};

  if (!values.key_id) {
    errors.key_id = Object(external_wp_i18n_["__"])('Please enter your Key ID', 'woocommerce-admin');
  }

  if (!values.key_secret) {
    errors.key_secret = Object(external_wp_i18n_["__"])('Please enter your Key Secret', 'woocommerce-admin');
  }

  return errors;
};

const razorpay_updateSettings = async (values, createNotice, markConfigured, updateOptions) => {
  const update = await updateOptions({
    woocommerce_razorpay_settings: {
      key_id: values.key_id,
      key_secret: values.key_secret,
      enabled: 'yes'
    }
  });

  if (update.success) {
    markConfigured('razorpay');
    createNotice('success', Object(external_wp_i18n_["__"])('Razorpay connected successfully', 'woocommerce-admin'));
  } else {
    createNotice('error', Object(external_wp_i18n_["__"])('There was a problem saving your payment settings', 'woocommerce-admin'));
  }
};

const razorpay_renderConnectStep = ({
  createNotice,
  isOptionsRequesting,
  markConfigured,
  updateOptions
}) => {
  const helpText = lib_default()({
    mixedString: Object(external_wp_i18n_["__"])('Your key details can be obtained from your {{link}}Razorpay account{{/link}}', 'woocommerce-admin'),
    components: {
      link: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
        href: "https://dashboard.razorpay.com/#/access/signin",
        target: "_blank",
        type: "external"
      })
    }
  });

  const onSubmit = values => razorpay_updateSettings(values, createNotice, markConfigured, updateOptions);

  return Object(external_wp_element_["createElement"])(external_wc_components_["Form"], {
    initialValues: INITIAL_CONFIG,
    onSubmit: onSubmit,
    validate: razorpay_validate
  }, ({
    getInputProps,
    handleSubmit
  }) => {
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
      label: Object(external_wp_i18n_["__"])('Key ID', 'woocommerce-admin'),
      required: true
    }, getInputProps('key_id'))), Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
      label: Object(external_wp_i18n_["__"])('Key Secret', 'woocommerce-admin'),
      required: true
    }, getInputProps('key_secret'))), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      isPrimary: true,
      isBusy: isOptionsRequesting,
      onClick: handleSubmit
    }, Object(external_wp_i18n_["__"])('Proceed', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("p", null, helpText));
  });
};

const Razorpay = ({
  createNotice,
  installStep,
  isOptionsRequesting,
  markConfigured,
  updateOptions
}) => {
  return Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
    isVertical: true,
    isPending: !installStep.isComplete || isOptionsRequesting,
    currentStep: installStep.isComplete ? 'connect' : 'install',
    steps: [installStep, {
      key: 'connect',
      label: Object(external_wp_i18n_["__"])('Connect your Razorpay account', 'woocommerce-admin'),
      content: razorpay_renderConnectStep({
        createNotice,
        isOptionsRequesting,
        markConfigured,
        updateOptions
      })
    }]
  });
};
/* harmony default export */ var razorpay = (({
  installStep,
  markConfigured
}) => {
  const isOptionsUpdating = Object(external_wp_data_["useSelect"])(select => select(external_wc_data_["OPTIONS_STORE_NAME"]).isOptionsUpdating);
  const isOptionsRequesting = isOptionsUpdating();
  const {
    createNotice
  } = Object(external_wp_data_["useDispatch"])('core/notices');
  const {
    updateOptions
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["OPTIONS_STORE_NAME"]);
  return Object(external_wp_element_["createElement"])(Razorpay, {
    createNotice: createNotice,
    installStep: installStep,
    isOptionsRequesting: isOptionsRequesting,
    markConfigured: markConfigured,
    updateOptions: updateOptions
  });
});
// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/mollie.js


/**
 * External dependencies
 */





const Mollie = ({
  installStep,
  markConfigured
}) => {
  return Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
    isVertical: true,
    isPending: !installStep.isComplete,
    currentStep: installStep.isComplete ? 'connect' : 'install',
    steps: [installStep, {
      key: 'connect',
      label: Object(external_wp_i18n_["__"])('Connect your Mollie account', 'woocommerce-admin'),
      content: Object(external_wp_element_["createElement"])(MollieConnectStep, {
        onFinish: () => {
          markConfigured('mollie');
        }
      })
    }]
  });
};

const MollieConnectStep = ({
  onFinish
}) => {
  const settingsLink = Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
    href: `${wc_admin_settings["a" /* ADMIN_URL */]}admin.php?page=wc-settings&tab=mollie_settings#mollie-payments-for-woocommerce`,
    target: "_blank",
    type: "external"
  });
  const accountLink = Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
    href: 'https://www.mollie.com/dashboard/signup',
    target: "_blank",
    type: "external"
  });
  const configureText = lib_default()({
    mixedString: Object(external_wp_i18n_["__"])('Create a {{accountLink}}Mollie account{{/accountLink}} and finish the configuration in the {{settingsLink}}Mollie settings.{{/settingsLink}}', 'woocommerce-admin'),
    components: {
      accountLink,
      settingsLink
    }
  });
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("p", null, configureText), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isPrimary: true,
    onClick: onFinish
  }, Object(external_wp_i18n_["__"])('Continue', 'woocommerce-admin')));
};
// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/payu-india.js


/**
 * External dependencies
 */





const PayUIndia = ({
  installStep,
  markConfigured
}) => {
  return Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
    isVertical: true,
    isPending: !installStep.isComplete,
    currentStep: installStep.isComplete ? 'connect' : 'install',
    steps: [installStep, {
      key: 'connect',
      label: Object(external_wp_i18n_["__"])('Connect to your PayU account', 'woocommerce-admin'),
      content: Object(external_wp_element_["createElement"])(PayUCredentialsStep, {
        onFinish: () => {
          markConfigured('payubiz');
        }
      })
    }]
  });
};

const PayUCredentialsStep = ({
  onFinish
}) => {
  const settingsLink = Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
    href: `${wc_admin_settings["a" /* ADMIN_URL */]}admin.php?page=wc-settings&tab=checkout&section=payubiz`,
    target: "_blank",
    type: "external"
  });
  const accountLink = Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
    href: 'https://onboarding.payu.in/app/account',
    target: "_blank",
    type: "external"
  });
  const configureText = lib_default()({
    mixedString: Object(external_wp_i18n_["__"])('PayU can be configured under your {{settingsLink}}store settings.{{/settingsLink}} Create your PayU account {{accountLink}}here.{{/accountLink}}', 'woocommerce-admin'),
    components: {
      accountLink,
      settingsLink
    }
  });
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("p", null, configureText), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isPrimary: true,
    onClick: onFinish
  }, Object(external_wp_i18n_["__"])('Continue', 'woocommerce-admin')));
};
// CONCATENATED MODULE: ./client/task-list/tasks/payments/generic-payment-step.js



/**
 * External dependencies
 */






function GenericPaymentStep({
  installStep,
  markConfigured,
  methodConfig,
  recordConnectStartEvent
}) {
  const {
    updateOptions
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["OPTIONS_STORE_NAME"]);
  const {
    createNotice
  } = Object(external_wp_data_["useDispatch"])('core/notices');
  const isOptionsRequesting = Object(external_wp_data_["useSelect"])(select => {
    const {
      isOptionsUpdating
    } = select(external_wc_data_["OPTIONS_STORE_NAME"]);
    return isOptionsUpdating();
  });

  const getInitialConfigValues = () => {
    if (methodConfig && methodConfig.fields) {
      return methodConfig.fields.reduce((data, field) => {
        return { ...data,
          [field.name]: ''
        };
      }, {});
    }
  };

  const validate = values => {
    if (methodConfig && methodConfig.fields) {
      return methodConfig.fields.reduce((errors, field) => {
        if (!values[field.name]) {
          // Matches any word that is capitalized aside from abrevitions like ID.
          const title = field.title.replace(/([A-Z][a-z]+)/, val => val.toLowerCase());
          return { ...errors,
            [field.name]: Object(external_wp_i18n_["__"])('Please enter your ') + title
          };
        }

        return errors;
      }, {});
    }

    return {};
  };

  const updateSettings = async values => {
    // Because the GenericPaymentStep extension only works with the South African Rand
    // currency, force the store to use it while setting the GenericPaymentStep settings
    const options = methodConfig.getOptions ? methodConfig.getOptions(values) : null;

    if (!options) {
      return;
    }

    const update = await updateOptions({ ...options
    });

    if (update.success) {
      markConfigured(methodConfig.key);
      createNotice('success', methodConfig.title + Object(external_wp_i18n_["__"])(' connected successfully', 'woocommerce-admin'));
    } else {
      createNotice('error', Object(external_wp_i18n_["__"])('There was a problem saving your payment settings', 'woocommerce-admin'));
    }
  };

  const renderConnectStep = () => {
    const helpText = lib_default()({
      mixedString: Object(external_wp_i18n_["__"])('Your API details can be obtained from your {{link/}}', 'woocommerce-admin'),
      components: {
        link: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
          href: methodConfig.apiDetailsLink,
          target: "_blank",
          type: "external"
        }, Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('%(title)s account', 'woocommerce-admin'), {
          title: methodConfig.title
        }))
      }
    });
    return Object(external_wp_element_["createElement"])(external_wc_components_["Form"], {
      initialValues: getInitialConfigValues(),
      onSubmit: updateSettings,
      validate: validate
    }, ({
      getInputProps,
      handleSubmit
    }) => {
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, (methodConfig.fields || []).map(field => Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
        key: field.name,
        label: field.title,
        required: true
      }, getInputProps(field.name)))), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isPrimary: true,
        isBusy: isOptionsRequesting,
        onClick: event => {
          recordConnectStartEvent(methodConfig.key);
          handleSubmit(event);
        }
      }, Object(external_wp_i18n_["__"])('Proceed', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("p", null, helpText));
    });
  };

  return Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
    isVertical: true,
    isPending: !installStep.isComplete || isOptionsRequesting,
    currentStep: installStep.isComplete ? 'connect' : 'install',
    steps: [installStep, {
      key: 'connect',
      label: Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('Connect your %(title)s account', 'woocommerce-admin'), {
        title: methodConfig.title
      }),
      content: renderConnectStep()
    }]
  });
}
// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/index.js


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */















const wcAdminAssetUrl = Object(wc_admin_settings["h" /* getSetting */])('wcAdminAssetUrl', '');

const getPaymentsSettingsUrl = methodKey => {
  return Object(wc_admin_settings["g" /* getAdminLink */])('admin.php?page=wc-settings&tab=checkout&section=' + methodKey);
};

const methodDefaults = {
  isConfigured: true
};
function getPaymentMethods({
  activePlugins,
  countryCode,
  createNotice,
  installAndActivatePlugins,
  onboardingStatus,
  options,
  profileItems,
  paypalOnboardingStatus,
  loadingPaypalStatus
}) {
  const {
    stripeSupportedCountries = [],
    wcPayIsConnected = false,
    enabledPaymentGateways = []
  } = onboardingStatus;
  const hasCbdIndustry = (profileItems.industry || []).some(({
    slug
  }) => {
    return slug === 'cbd-other-hemp-derived-products';
  }); // Whether publishable and secret keys are filled for given mode.

  const isStripeConfigured = options.woocommerce_stripe_settings && (options.woocommerce_stripe_settings.testmode === 'no' ? options.woocommerce_stripe_settings.publishable_key && options.woocommerce_stripe_settings.secret_key : options.woocommerce_stripe_settings.test_publishable_key && options.woocommerce_stripe_settings.test_secret_key);
  const methods = [{
    key: 'stripe',
    title: Object(external_wp_i18n_["__"])('Credit cards - powered by Stripe', 'woocommerce-admin'),
    content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('Accept debit and credit cards in 135+ currencies, methods such as Alipay, ' + 'and one-touch checkout with Apple Pay.', 'woocommerce-admin')),
    before: Object(external_wp_element_["createElement"])("img", {
      src: wc_admin_settings["e" /* WC_ASSET_URL */] + 'images/stripe.png',
      alt: Object(external_wp_i18n_["__"])('Stripe Logo', 'woocommerce-admin')
    }),
    visible: stripeSupportedCountries.includes(countryCode) && !hasCbdIndustry,
    plugins: ['woocommerce-gateway-stripe'],
    container: Object(external_wp_element_["createElement"])(stripe, null),
    isConfigured: isStripeConfigured,
    isEnabled: options.woocommerce_stripe_settings && options.woocommerce_stripe_settings.enabled === 'yes',
    optionName: 'woocommerce_stripe_settings',
    manageUrl: getPaymentsSettingsUrl('stripe')
  }, {
    key: 'paystack',
    title: Object(external_wp_i18n_["__"])('Paystack', 'woocommerce-admin'),
    content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('Paystack helps African merchants accept one-time and recurring payments online with a modern, safe, and secure payment gateway.', 'woocommerce-admin')),
    before: Object(external_wp_element_["createElement"])("img", {
      src: wcAdminAssetUrl + 'onboarding/paystack.png',
      alt: Object(external_wp_i18n_["__"])('Paystack Logo', 'woocommerce-admin')
    }),
    visible: ['ZA', 'GH', 'NG'].includes(countryCode) && !hasCbdIndustry,
    plugins: ['woo-paystack'],
    container: Object(external_wp_element_["createElement"])(GenericPaymentStep, null),
    isConfigured: options.woocommerce_paystack_settings && options.woocommerce_paystack_settings.live_public_key && options.woocommerce_paystack_settings.live_secret_key,
    isEnabled: enabledPaymentGateways.includes('paystack'),
    optionName: 'woocommerce_paystack_settings',
    apiDetailsLink: 'https://dashboard.paystack.com/#/settings/developer',
    fields: [{
      name: 'live_public_key',
      title: Object(external_wp_i18n_["__"])('Live Public Key', 'woocommerce-admin')
    }, {
      name: 'live_secret_key',
      title: Object(external_wp_i18n_["__"])('Live Secret Key', 'woocommerce-admin')
    }],
    getOptions: values => {
      // Paystack only supports NGN (₦), GHS (₵), USD ($) or ZAR (R)
      return {
        woocommerce_currency: 'ZAR',
        woocommerce_paystack_settings: { ...values,
          testmode: 'no'
        }
      };
    },
    manageUrl: getPaymentsSettingsUrl('paystack')
  }, {
    key: 'payfast',
    title: Object(external_wp_i18n_["__"])('PayFast', 'woocommerce-admin'),
    content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('The PayFast extension for WooCommerce enables you to accept payments by Credit Card and EFT via one of South Africa’s most popular payment gateways. No setup fees or monthly subscription costs.', 'woocommerce-admin'), Object(external_wp_element_["createElement"])("p", null, Object(external_wp_i18n_["__"])('Selecting this extension will configure your store to use South African rands as the selected currency.', 'woocommerce-admin'))),
    before: Object(external_wp_element_["createElement"])("img", {
      src: wc_admin_settings["e" /* WC_ASSET_URL */] + 'images/payfast.png',
      alt: Object(external_wp_i18n_["__"])('PayFast Logo', 'woocommerce-admin')
    }),
    visible: ['ZA'].includes(countryCode) && !hasCbdIndustry,
    plugins: ['woocommerce-payfast-gateway'],
    container: Object(external_wp_element_["createElement"])(GenericPaymentStep, null),
    isConfigured: options.woocommerce_payfast_settings && options.woocommerce_payfast_settings.merchant_id && options.woocommerce_payfast_settings.merchant_key && options.woocommerce_payfast_settings.pass_phrase,
    isEnabled: options.woocommerce_payfast_settings && options.woocommerce_payfast_settings.enabled === 'yes',
    optionName: 'woocommerce_payfast_settings',
    apiDetailsLink: 'https://www.payfast.co.za/',
    fields: [{
      name: 'merchant_id',
      title: Object(external_wp_i18n_["__"])('Merchant ID', 'woocommerce-admin')
    }, {
      name: 'merchant_key',
      title: Object(external_wp_i18n_["__"])('Merchant Key', 'woocommerce-admin')
    }, {
      name: 'pass_phrase',
      title: Object(external_wp_i18n_["__"])('Passphrase', 'woocommerce-admin')
    }],
    getOptions: values => {
      return {
        woocommerce_currency: 'ZAR',
        woocommerce_payfast_settings: { ...values,
          testmode: 'no'
        }
      };
    },
    manageUrl: getPaymentsSettingsUrl('stripe')
  }, {
    key: 'mercadopago',
    title: Object(external_wp_i18n_["__"])('Mercado Pago Checkout Pro & Custom', 'woocommerce-admin'),
    content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('Accept credit and debit cards, offline (cash or bank transfer) and logged-in payments with money in Mercado Pago. Safe and secure payments with the leading payment processor in LATAM.', 'woocommerce-admin')),
    before: Object(external_wp_element_["createElement"])("img", {
      src: wcAdminAssetUrl + 'onboarding/mercadopago.png',
      alt: Object(external_wp_i18n_["__"])('Mercado Pago Logo', 'woocommerce-admin')
    }),
    visible: ['AR', 'BR', 'CL', 'CO', 'MX', 'PE', 'UY'].includes(countryCode),
    plugins: [MERCADOPAGO_PLUGIN],
    container: Object(external_wp_element_["createElement"])(MercadoPago, null),
    isConfigured: activePlugins.includes(MERCADOPAGO_PLUGIN),
    isEnabled: options['woocommerce_woo-mercado-pago-basic_settings'] && options['woocommerce_woo-mercado-pago-basic_settings'].enabled === 'yes',
    optionName: 'woocommerce_woo-mercado-pago-basic_settings',
    manageUrl: getPaymentsSettingsUrl('woo-mercado-pago-basic')
  }, {
    key: 'paypal',
    title: Object(external_wp_i18n_["__"])('PayPal Payments', 'woocommerce-admin'),
    content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])("Safe and secure payments using credit cards or your customer's PayPal account.", 'woocommerce-admin')),
    before: Object(external_wp_element_["createElement"])("img", {
      src: wc_admin_settings["e" /* WC_ASSET_URL */] + 'images/paypal.png',
      alt: Object(external_wp_i18n_["__"])('PayPal Logo', 'woocommerce-admin')
    }),
    visible: countryCode !== 'IN' && !hasCbdIndustry,
    plugins: [PAYPAL_PLUGIN],
    container: Object(external_wp_element_["createElement"])(paypal, null),
    isConfigured: paypalOnboardingStatus && paypalOnboardingStatus.production && paypalOnboardingStatus.production.onboarded,
    isEnabled: enabledPaymentGateways.includes('ppcp-gateway'),
    optionName: 'woocommerce_ppcp-gateway_settings',
    loading: activePlugins.includes(PAYPAL_PLUGIN) ? loadingPaypalStatus : false,
    manageUrl: getPaymentsSettingsUrl('ppcp-gateway')
  }, {
    key: 'klarna_checkout',
    title: Object(external_wp_i18n_["__"])('Klarna Checkout', 'woocommerce-admin'),
    content: Object(external_wp_i18n_["__"])('Choose the payment that you want, pay now, pay later or slice it. No credit card numbers, no passwords, no worries.', 'woocommerce-admin'),
    before: Object(external_wp_element_["createElement"])("img", {
      src: wc_admin_settings["e" /* WC_ASSET_URL */] + 'images/klarna-black.png',
      alt: Object(external_wp_i18n_["__"])('Klarna Logo', 'woocommerce-admin')
    }),
    visible: ['SE', 'FI', 'NO'].includes(countryCode) && !hasCbdIndustry,
    plugins: ['klarna-checkout-for-woocommerce'],
    container: Object(external_wp_element_["createElement"])(klarna, {
      plugin: 'checkout'
    }),
    // @todo This should check actual Klarna connection information.
    isConfigured: activePlugins.includes('klarna-checkout-for-woocommerce'),
    isEnabled: options.woocommerce_kco_settings && options.woocommerce_kco_settings.enabled === 'yes',
    optionName: 'woocommerce_kco_settings',
    manageUrl: getPaymentsSettingsUrl('kco')
  }, {
    key: 'klarna_payments',
    title: Object(external_wp_i18n_["__"])('Klarna Payments', 'woocommerce-admin'),
    content: Object(external_wp_i18n_["__"])('Choose the payment that you want, pay now, pay later or slice it. No credit card numbers, no passwords, no worries.', 'woocommerce-admin'),
    before: Object(external_wp_element_["createElement"])("img", {
      src: wc_admin_settings["e" /* WC_ASSET_URL */] + 'images/klarna-black.png',
      alt: Object(external_wp_i18n_["__"])('Klarna Logo', 'woocommerce-admin')
    }),
    visible: ['DK', 'DE', 'AT', 'NL', 'CH', 'BE', 'SP', 'PL', 'FR', 'IT', 'GB'].includes(countryCode) && !hasCbdIndustry,
    plugins: ['klarna-payments-for-woocommerce'],
    container: Object(external_wp_element_["createElement"])(klarna, {
      plugin: 'payments'
    }),
    // @todo This should check actual Klarna connection information.
    isConfigured: activePlugins.includes('klarna-payments-for-woocommerce'),
    isEnabled: options.woocommerce_klarna_payments_settings && options.woocommerce_klarna_payments_settings.enabled === 'yes',
    optionName: 'woocommerce_klarna_payments_settings',
    manageUrl: getPaymentsSettingsUrl('klarna_payments')
  }, {
    key: 'mollie',
    title: Object(external_wp_i18n_["__"])('Mollie Payments for WooCommerce', 'woocommerce-admin'),
    before: Object(external_wp_element_["createElement"])("img", {
      src: wcAdminAssetUrl + '/onboarding/mollie.svg',
      alt: Object(external_wp_i18n_["__"])('Mollie Payments for WooCommerce logo', 'woocommerce-admin')
    }),
    plugins: ['mollie-payments-for-woocommerce'],
    isConfigured: activePlugins.includes('mollie-payments-for-woocommerce'),
    content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('Effortless payments by Mollie: Offer global and local payment methods, get onboarded in minutes, and supported in your language.', 'woocommerce-admin')),
    visible: ['FR', 'DE', 'GB', 'AT', 'CH', 'ES', 'IT', 'PL', 'FI', 'NL', 'BE'].includes(countryCode),
    container: Object(external_wp_element_["createElement"])(Mollie, null),
    isEnabled: options.woocommerce_mollie_payments_settings && options.woocommerce_mollie_payments_settings.enabled === 'yes',
    optionName: 'woocommerce_mollie_payments_settings',
    manageUrl: getPaymentsSettingsUrl('mollie_wc_gateway_creditcard')
  }, {
    key: 'square',
    title: Object(external_wp_i18n_["__"])('Square', 'woocommerce-admin'),
    content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('Securely accept credit and debit cards with one low rate, no surprise fees (custom rates available). ' + 'Sell online and in store and track sales and inventory in one place.', 'woocommerce-admin'), hasCbdIndustry && Object(external_wp_element_["createElement"])("span", {
      className: "text-style-strong"
    }, Object(external_wp_i18n_["__"])(' Selling CBD products is only supported by Square.', 'woocommerce-admin'))),
    before: Object(external_wp_element_["createElement"])("img", {
      src: `${wc_admin_settings["e" /* WC_ASSET_URL */]}images/square-black.png`,
      alt: Object(external_wp_i18n_["__"])('Square Logo', 'woocommerce-admin')
    }),
    visible: hasCbdIndustry && ['US'].includes(countryCode) || ['brick-mortar', 'brick-mortar-other'].includes(profileItems.selling_venues) && ['US', 'CA', 'JP', 'GB', 'AU', 'IE'].includes(countryCode),
    plugins: ['woocommerce-square'],
    container: Object(external_wp_element_["createElement"])(square, null),
    isConfigured: options.wc_square_refresh_tokens && options.wc_square_refresh_tokens.length,
    isEnabled: options.woocommerce_square_credit_card_settings && options.woocommerce_square_credit_card_settings.enabled === 'yes',
    optionName: 'woocommerce_square_credit_card_settings',
    hasCbdIndustry,
    manageUrl: getPaymentsSettingsUrl('square_credit_card')
  }, {
    key: 'eway',
    title: Object(external_wp_i18n_["__"])('eWAY', 'woocommerce-admin'),
    content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('The eWAY extension for WooCommerce allows you to take credit card payments directly on your store without redirecting your customers to a third party site to make payment.', 'woocommerce-admin')),
    before: Object(external_wp_element_["createElement"])("img", {
      src: wc_admin_settings["e" /* WC_ASSET_URL */] + 'images/eway-logo.jpg',
      alt: Object(external_wp_i18n_["__"])('eWAY Logo', 'woocommerer-admin')
    }),
    visible: ['AU', 'NZ'].includes(countryCode) && !hasCbdIndustry,
    plugins: ['woocommerce-gateway-eway'],
    container: Object(external_wp_element_["createElement"])(eway, null),
    isConfigured: options.woocommerce_eway_settings && options.woocommerce_eway_settings.customer_api && options.woocommerce_eway_settings.customer_password,
    isEnabled: options.woocommerce_eway_settings && options.woocommerce_eway_settings.enabled === 'yes',
    optionName: 'woocommerce_eway_settings',
    manageUrl: getPaymentsSettingsUrl('eway')
  }, {
    key: 'razorpay',
    title: Object(external_wp_i18n_["__"])('Razorpay', 'woocommerce-admin'),
    content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('The official Razorpay extension for WooCommerce allows you to accept credit cards, debit cards, netbanking, wallet, and UPI payments.', 'woocommerce-admin')),
    before: Object(external_wp_element_["createElement"])("img", {
      src: wcAdminAssetUrl + 'onboarding/razorpay.svg',
      alt: Object(external_wp_i18n_["__"])('Razorpay', 'woocommerce-admin')
    }),
    visible: countryCode === 'IN' && !hasCbdIndustry,
    plugins: ['woo-razorpay'],
    container: Object(external_wp_element_["createElement"])(razorpay, null),
    isConfigured: options.woocommerce_razorpay_settings && options.woocommerce_razorpay_settings.key_id && options.woocommerce_razorpay_settings.key_secret,
    isEnabled: options.woocommerce_razorpay_settings && options.woocommerce_razorpay_settings.enabled === 'yes',
    optionName: 'woocommerce_razorpay_settings',
    manageUrl: getPaymentsSettingsUrl('razorpay')
  }, {
    key: 'payubiz',
    title: Object(external_wp_i18n_["__"])('PayU for WooCommerce', 'woocommerce-admin'),
    content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('Enable PayU’s exclusive plugin for WooCommerce to start accepting payments in 100+ payment methods available in India including credit cards, debit cards, UPI, & more!', 'woocommerce-admin')),
    before: Object(external_wp_element_["createElement"])(PayUIndiaLogo, null),
    visible: countryCode === 'IN' && !hasCbdIndustry,
    plugins: ['payu-india'],
    container: Object(external_wp_element_["createElement"])(PayUIndia, null),
    isConfigured: activePlugins.includes('payu-india'),
    isEnabled: enabledPaymentGateways.includes('payubiz'),
    optionName: 'woocommerce_payubiz_settings',
    manageUrl: getPaymentsSettingsUrl('payubiz')
  }, {
    key: 'cod',
    title: Object(external_wp_i18n_["__"])('Cash on delivery', 'woocommerce-admin'),
    content: Object(external_wp_i18n_["__"])('Take payments in cash upon delivery.', 'woocommerce-admin'),
    before: Object(external_wp_element_["createElement"])("img", {
      src: wcAdminAssetUrl + 'onboarding/cod.svg',
      alt: Object(external_wp_i18n_["__"])('Cash on Delivery Logo', 'woocommerce-admin')
    }),
    visible: !hasCbdIndustry,
    isEnabled: options.woocommerce_cod_settings && options.woocommerce_cod_settings.enabled === 'yes',
    optionName: 'woocommerce_cod_settings',
    manageUrl: getPaymentsSettingsUrl('cod')
  }, {
    key: 'bacs',
    title: Object(external_wp_i18n_["__"])('Direct bank transfer', 'woocommerce-admin'),
    content: Object(external_wp_i18n_["__"])('Take payments via bank transfer.', 'woocommerce-admin'),
    before: Object(external_wp_element_["createElement"])(images_bacs, null),
    visible: !hasCbdIndustry,
    container: Object(external_wp_element_["createElement"])(bacs, null),
    isConfigured: options.woocommerce_bacs_accounts && options.woocommerce_bacs_accounts.length,
    isEnabled: options.woocommerce_bacs_settings && options.woocommerce_bacs_settings.enabled === 'yes',
    optionName: 'woocommerce_bacs_settings',
    manageUrl: getPaymentsSettingsUrl('bacs')
  }];

  if (window.wcAdminFeatures.wcpay) {
    methods.unshift({
      key: 'wcpay',
      title: Object(external_wp_i18n_["__"])('WooCommerce Payments', 'woocommerce-admin'),
      content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('Manage transactions without leaving your WordPress Dashboard. Only with WooCommerce Payments.', 'woocommerce-admin'), Object(external_wp_element_["createElement"])(wcpay["b" /* WCPayUsageModal */], null)),
      before: Object(external_wp_element_["createElement"])("img", {
        src: wcAdminAssetUrl + 'onboarding/wcpay.svg',
        alt: Object(external_wp_i18n_["__"])('WooCommerce Payments', 'woocommerce-admin')
      }),
      onClick: (resolve, reject) => {
        return Object(wcpay["c" /* installActivateAndConnectWcpay */])(reject, createNotice, installAndActivatePlugins);
      },
      visible: Object(wcpay["d" /* isWCPaySupported */])(countryCode) && !hasCbdIndustry,
      plugins: ['woocommerce-payments'],
      container: Object(external_wp_element_["createElement"])(wcpay["a" /* WCPay */], null),
      isConfigured: wcPayIsConnected,
      isEnabled: options.woocommerce_woocommerce_payments_settings && options.woocommerce_woocommerce_payments_settings.enabled === 'yes',
      optionName: 'woocommerce_woocommerce_payments_settings',
      manageUrl: getPaymentsSettingsUrl('woocommerce_payments')
    });
  }

  return methods.filter(method => method.visible).map(method => ({ ...methodDefaults,
    ...method
  }));
}

/***/ }),

/***/ 588:
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

/***/ })

}]);