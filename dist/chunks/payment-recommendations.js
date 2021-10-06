(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[45,53],{

/***/ 503:
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

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var interpolate_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var interpolate_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(interpolate_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce_explat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(121);
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
    const {
      allowTracking,
      isResolving,
      onClose,
      onContinue
    } = this.props;

    if (isResolving) {
      return null;
    } // Bail if site has already opted in to tracking


    if (allowTracking) {
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
            href: "https://woocommerce.com/usage-tracking?utm_medium=product",
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
    isOptionsUpdating,
    hasFinishedResolution
  } = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__["OPTIONS_STORE_NAME"]);
  return {
    allowTracking: getOption('woocommerce_allow_tracking') === 'yes',
    isRequesting: Boolean(isOptionsUpdating()),
    isResolving: !hasFinishedResolution('getOption', ['woocommerce_allow_tracking']) || typeof getOption('woocommerce_allow_tracking') === 'undefined',
    hasErrors: Boolean(getOptionsUpdatingError())
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

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsageModal", function() { return UsageModal; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var interpolate_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var interpolate_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(interpolate_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _profile_wizard_steps_usage_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(510);


/**
 * External dependencies
 */





/**
 * Internal dependencies
 */


const UsageModal = () => {
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
        href: "https://woocommerce.com/usage-tracking?utm_medium=product",
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
/* harmony default export */ __webpack_exports__["default"] = (UsageModal);

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Action; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_4__);


/**
 * External dependencies
 */





const Action = ({
  hasSetup = false,
  needsSetup = true,
  id,
  isEnabled = false,
  isLoading = false,
  isInstalled = false,
  isRecommended = false,
  hasPlugins,
  manageUrl = null,
  markConfigured,
  onSetUp = () => {},
  onSetupCallback,
  setupButtonText = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Set up', 'woocommerce-admin')
}) => {
  const [isBusy, setIsBusy] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const classes = 'woocommerce-task-payment__action';

  if (isLoading) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Spinner"], null);
  }

  const handleClick = async () => {
    onSetUp(id);

    if (onSetupCallback) {
      setIsBusy(true);
      await new Promise(onSetupCallback).then(() => {
        setIsBusy(false);
      }).catch(() => {
        setIsBusy(false);
      });
      return;
    }

    Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__["updateQueryString"])({
      id
    });
  };

  const ManageButton = () => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: classes,
    isSecondary: true,
    role: "button",
    href: manageUrl,
    onClick: () => Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_4__["recordEvent"])('tasklist_payment_manage', {
      id
    })
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Manage', 'woocommerce-admin'));

  const SetupButton = () => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: classes,
    isPrimary: isRecommended,
    isSecondary: !isRecommended,
    isBusy: isBusy,
    disabled: isBusy,
    onClick: () => handleClick()
  }, setupButtonText);

  if (!hasSetup) {
    if (!isEnabled) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: classes,
        isSecondary: true,
        onClick: () => markConfigured(id)
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enable', 'woocommerce-admin'));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ManageButton, null);
  } // This isolates core gateways that include setup


  if (!hasPlugins) {
    if (isEnabled) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ManageButton, null);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SetupButton, null);
  }

  if (!needsSetup) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ManageButton, null);
  }

  if (isInstalled && hasPlugins) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: classes,
      isPrimary: isRecommended,
      isSecondary: !isRecommended,
      isBusy: isBusy,
      disabled: isBusy,
      onClick: () => handleClick()
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Finish setup', 'woocommerce-admin')));
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SetupButton, null);
};

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ installActivateAndConnectWcpay; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ isWCPaySupported; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Suggestion; });

// UNUSED EXPORTS: WCPayUsageModal

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__(17);
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(11);

// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(16);

// EXTERNAL MODULE: ./client/lib/notices/index.js
var notices = __webpack_require__(503);

// CONCATENATED MODULE: ./client/task-list/tasks/PaymentGatewaySuggestions/components/WCPay/utils.js
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
function isWCPaySupported(countryCode) {
  const supportedCountries = ['US', 'PR', 'AU', 'CA', 'DE', 'ES', 'FR', 'GB', 'IE', 'IT', 'NZ', 'AT', 'BE', 'NL', 'PL', 'PT', 'CH', 'HK', 'SG'];
  return supportedCountries.includes(countryCode);
}
// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/interpolate-components/lib/index.js
var lib = __webpack_require__(18);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(21);

// EXTERNAL MODULE: external ["wc","experimental"]
var external_wc_experimental_ = __webpack_require__(20);

// EXTERNAL MODULE: ./packages/onboarding/build-module/index.js + 26 modules
var build_module = __webpack_require__(271);

// EXTERNAL MODULE: ./client/task-list/tasks/PaymentGatewaySuggestions/components/Action.js
var Action = __webpack_require__(522);

// CONCATENATED MODULE: ./client/task-list/tasks/PaymentGatewaySuggestions/components/WCPay/Suggestion.js


/**
 * External dependencies
 */






/**
 * Internal dependencies
 */



const TosPrompt = () => lib_default()({
  mixedString: Object(external_wp_i18n_["__"])('Upon clicking "Get started", you agree to the {{link}}Terms of service{{/link}}. Next we’ll ask you to share a few details about your business to create your account.', 'woocommerce-admin'),
  components: {
    link: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
      href: 'https://wordpress.com/tos/',
      target: "_blank",
      type: "external"
    })
  }
});

const Suggestion = ({
  paymentGateway,
  onSetupCallback = null
}) => {
  const {
    description,
    id,
    needsSetup,
    installed,
    enabled: isEnabled,
    installed: isInstalled
  } = paymentGateway;
  return Object(external_wp_element_["createElement"])(build_module["WCPayCard"], null, Object(external_wp_element_["createElement"])(build_module["WCPayCardHeader"], null, installed && needsSetup ? Object(external_wp_element_["createElement"])(build_module["SetupRequired"], null) : Object(external_wp_element_["createElement"])(external_wc_components_["Pill"], null, Object(external_wp_i18n_["__"])('Recommended', 'woocommerce-admin'))), Object(external_wp_element_["createElement"])(build_module["WCPayCardBody"], {
    description: description,
    onLinkClick: () => {
      Object(external_wc_tracks_["recordEvent"])('tasklist_payment_learn_more');
    }
  }), Object(external_wp_element_["createElement"])(build_module["WCPayCardFooter"], null, Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    lineHeight: "1.5em"
  }, Object(external_wp_element_["createElement"])(TosPrompt, null)), Object(external_wp_element_["createElement"])(Action["a" /* Action */], {
    id: id,
    hasSetup: true,
    needsSetup: needsSetup,
    isEnabled: isEnabled,
    isRecommended: true,
    isInstalled: isInstalled,
    hasPlugins: true,
    setupButtonText: Object(external_wp_i18n_["__"])('Get started', 'woocommerce-admin'),
    onSetupCallback: onSetupCallback
  }))));
};
// EXTERNAL MODULE: ./client/task-list/tasks/PaymentGatewaySuggestions/components/WCPay/UsageModal.js
var UsageModal = __webpack_require__(514);

// CONCATENATED MODULE: ./client/task-list/tasks/PaymentGatewaySuggestions/components/WCPay/index.js




/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=Object.assign||function(a){for(var c,b=1;b<arguments.length;b++)for(var d in c=arguments[b],c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d]);return a};Object.defineProperty(exports,'__esModule',{value:!0});exports.default=function(a){var b=a.size,c=b===void 0?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,['size','onClick','icon','className']),j=['gridicon','gridicons-external',f,!!function h(k){return 0==k%18}(c)&&'needs-offset',!1,!1].filter(Boolean).join(' ');return _react2.default.createElement('svg',_extends({className:j,height:c,width:c,onClick:d},g,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M19 13v6c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V7c0-1.105.895-2 2-2h6v2H5v12h12v-6h2zM13 3v2h4.586l-7.793 7.793 1.414 1.414L19 6.414V11h2V3h-8z'})))};var _react=__webpack_require__(5),_react2=_interopRequireDefault(_react);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){var d={};for(var c in a)0<=b.indexOf(c)||Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}module.exports=exports['default'];


/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 625:
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_experimental__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var _woocommerce_experimental__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var gridicons_dist_external__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(541);
/* harmony import */ var gridicons_dist_external__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(gridicons_dist_external__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13);
/* harmony import */ var _payment_recommendations_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(596);
/* harmony import */ var _payment_recommendations_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_payment_recommendations_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _dashboard_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(60);
/* harmony import */ var _lib_notices__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(503);
/* harmony import */ var _task_list_tasks_PaymentGatewaySuggestions_components_WCPay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(523);


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
    general: settings
  } = getSettings('general');
  const hidden = getOption(DISMISS_OPTION);
  const countryCode = settings && settings.woocommerce_default_country ? Object(_dashboard_utils__WEBPACK_IMPORTED_MODULE_12__[/* getCountryCode */ "b"])(settings.woocommerce_default_country) : null;
  const countrySupported = countryCode ? Object(_task_list_tasks_PaymentGatewaySuggestions_components_WCPay__WEBPACK_IMPORTED_MODULE_14__[/* isWCPaySupported */ "c"])(countryCode) : false;
  const isRequestingOptions = isResolvingOption('getOption', [DISMISS_OPTION]);
  const displayable = !isRequestingOptions && hidden !== 'yes' && countrySupported;
  let plugins = null;

  if (displayable) {
    // don't get recommended plugins until it is displayable.
    plugins = getRecommendedPlugins('payments');
  }

  const isLoading = isRequestingOptions || hidden === undefined || settings === undefined || plugins === undefined;
  return {
    displayable,
    recommendedPlugins: plugins,
    isLoading
  };
}
const WcPayPromotionGateway = document.querySelector('[data-gateway_id="pre_install_woocommerce_payments_promotion"]');

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
    recommendedPlugins,
    isLoading
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useSelect"])(getPaymentRecommendationData);
  const triggeredPageViewRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  const shouldShowRecommendations = displayable && recommendedPlugins && recommendedPlugins.length > 0;
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if ((shouldShowRecommendations || WcPayPromotionGateway && !isLoading) && !triggeredPageViewRef.current) {
      triggeredPageViewRef.current = true;
      const eventProps = (recommendedPlugins || []).reduce((props, plugin) => {
        if (plugin.product) {
          return { ...props,
            [plugin.product.replace(/\-/g, '_') + '_displayed']: true
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