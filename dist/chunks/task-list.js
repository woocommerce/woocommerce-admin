(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[51],{

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
var notices = __webpack_require__(504);

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

/***/ 531:
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

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 628:
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
var external_wc_explat_ = __webpack_require__(121);

// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(16);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(21);

// EXTERNAL MODULE: ./client/task-list/style.scss
var style = __webpack_require__(544);

// EXTERNAL MODULE: ./client/dashboard/components/cart-modal.js
var cart_modal = __webpack_require__(546);

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(30);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(12);

// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__(17);
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(14);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(4);

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
// EXTERNAL MODULE: ./client/dashboard/utils.js
var utils = __webpack_require__(60);

// EXTERNAL MODULE: external ["wc","experimental"]
var external_wc_experimental_ = __webpack_require__(20);

// EXTERNAL MODULE: ./client/task-list/tasks/Marketing/Marketing.scss
var Marketing = __webpack_require__(603);

// EXTERNAL MODULE: ./client/lib/notices/index.js
var notices = __webpack_require__(504);

// EXTERNAL MODULE: ./packages/wc-admin-settings/build-module/index.js
var build_module = __webpack_require__(13);

// EXTERNAL MODULE: ./client/task-list/tasks/Marketing/Plugin.scss
var Plugin = __webpack_require__(604);

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
var PluginList = __webpack_require__(605);

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

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/sidebar.js
var sidebar = __webpack_require__(619);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/chevron-right.js
var chevron_right = __webpack_require__(473);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/plus-circle.js
var plus_circle = __webpack_require__(620);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/archive.js
var archive = __webpack_require__(621);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/download.js
var download = __webpack_require__(622);

// EXTERNAL MODULE: ./client/task-list/tasks/products/product-template-modal.scss
var product_template_modal = __webpack_require__(606);

// CONCATENATED MODULE: ./client/task-list/tasks/products/product-template-modal.js


/**
 * External dependencies
 */








/**
 * Internal dependencies
 */



const ONBOARDING_PRODUCT_TEMPLATES_FILTER = 'woocommerce_admin_onboarding_product_templates';
const PRODUCT_TEMPLATES = [{
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
}];
function ProductTemplateModal({
  onClose
}) {
  const [selectedTemplate, setSelectedTemplate] = Object(external_wp_element_["useState"])(null);
  const [isRedirecting, setIsRedirecting] = Object(external_wp_element_["useState"])(false);
  const {
    createProductFromTemplate
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["ITEMS_STORE_NAME"]);

  const createTemplate = () => {
    setIsRedirecting(true);
    Object(external_wc_tracks_["recordEvent"])('tasklist_product_template_selection', {
      product_type: selectedTemplate
    });

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

  const templates = Object(external_wp_hooks_["applyFilters"])(ONBOARDING_PRODUCT_TEMPLATES_FILTER, PRODUCT_TEMPLATES);
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


const subTasks = [{
  key: 'addProductTemplate',
  title: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('Start with a template', 'woocommerce-admin'), Object(external_wp_element_["createElement"])(external_wc_components_["Pill"], null, Object(external_wp_i18n_["__"])('Recommended', 'woocommerce-admin'))),
  content: Object(external_wp_i18n_["__"])('Use a template to add physical, digital, and variable products', 'woocommerce-admin'),
  before: Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: sidebar["a" /* default */]
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
    icon: plus_circle["a" /* default */]
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
    icon: archive["a" /* default */]
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
    icon: download["a" /* default */]
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

// EXTERNAL MODULE: ./client/dashboard/components/connect/index.js
var connect = __webpack_require__(519);

// EXTERNAL MODULE: ./client/dashboard/components/settings/general/store-address.js
var store_address = __webpack_require__(520);

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
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/globe.js
var globe = __webpack_require__(618);

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
        icon: globe["a" /* default */]
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
      content: Object(external_wp_element_["createElement"])(connect["a" /* default */], extends_default()({
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
      content: Object(external_wp_element_["createElement"])(connect["a" /* default */], extends_default()({}, this.props, {
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
var Action = __webpack_require__(522);

// EXTERNAL MODULE: ./client/task-list/tasks/PaymentGatewaySuggestions/components/List/List.scss
var List = __webpack_require__(542);

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


// EXTERNAL MODULE: ./client/lib/sanitize-html/index.js
var sanitize_html = __webpack_require__(508);

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
var Setup = __webpack_require__(607);

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
var WCPay = __webpack_require__(523);

// EXTERNAL MODULE: external ["wp","plugins"]
var external_wp_plugins_ = __webpack_require__(76);

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
var collections = __webpack_require__(531);

// EXTERNAL MODULE: ./client/store-management-links/index.js + 9 modules
var store_management_links = __webpack_require__(547);

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
  trackedCompletedActions
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
  const groupedProducts = Object(utils["a" /* getCategorizedOnboardingProducts */])(profileItems, installedPlugins);
  const {
    products,
    remainingProducts,
    uniqueItemsList
  } = groupedProducts;
  const woocommercePaymentsInstalled = installedPlugins.indexOf('woocommerce-payments') !== -1;
  const woocommerceServicesActive = activePlugins.indexOf('woocommerce-services') !== -1;
  const {
    completed: profilerCompleted,
    product_types: productTypes,
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
    visible: productTypes && productTypes.includes('physical') || hasPhysicalProducts,
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
var task_list = __webpack_require__(608);

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
    remindMeLater: task.allowRemindMeLater ? () => remindTaskLater(task) : undefined,
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
var display_options = __webpack_require__(170);

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
var placeholder = __webpack_require__(543);

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
    getProfileItems,
    getTasksStatus
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
    trackedCompletedActions,
    onboardingStatus,
    profileItems,
    trackedCompletedTasks,
    hasCompleteAddress,
    isResolving: !hasFinishedResolution('getOption', ['woocommerce_task_list_complete']) || !hasFinishedResolution('getOption', ['woocommerce_task_list_hidden']) || !hasFinishedResolution('getOption', ['woocommerce_extended_task_list_complete']) || !hasFinishedResolution('getOption', ['woocommerce_extended_task_list_hidden']) || !hasFinishedResolution('getOption', ['woocommerce_task_list_remind_me_later_tasks']) || !hasFinishedResolution('getOption', ['woocommerce_task_list_tracked_completed_tasks']) || !hasFinishedResolution('getOption', ['woocommerce_task_list_dismissed_tasks'])
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
    installAndActivatePlugins
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["PLUGINS_STORE_NAME"]);
  const {
    trackedCompletedTasks,
    activePlugins,
    countryCode,
    freeExtensions,
    installedPlugins,
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
    trackedCompletedActions
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
  }, getExtendedTaskList(extensionTasks)) : getExtendedTaskList(extensionTasks)), isCartModalOpen && Object(external_wp_element_["createElement"])(cart_modal["a" /* default */], {
    onClose: () => toggleCartModal(),
    onClickPurchaseLater: () => toggleCartModal()
  }));
};

/* harmony default export */ var client_task_list = __webpack_exports__["default"] = (TaskDashboard);

/***/ })

}]);