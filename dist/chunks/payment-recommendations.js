(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[47,54],{

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createNoticesFromResponse; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

function createNoticesFromResponse(response) {
  var _dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["dispatch"])('core/notices'),
      createNotice = _dispatch.createNotice;

  if (response.error_data && response.errors && Object.keys(response.errors).length) {
    // Loop over multi-error responses.
    Object.keys(response.errors).forEach(function (errorKey) {
      createNotice('error', response.errors[errorKey].join(' '));
    });
  } else if (response.message) {
    // Handle generic messages.
    createNotice(response.code ? 'error' : 'success', response.message);
  }
}

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var interpolate_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30);
/* harmony import */ var interpolate_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(interpolate_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _profile_wizard_steps_usage_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(572);



/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



var WCPayUsageModal = function WCPayUsageModal() {
  var query = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__["getQuery"])();
  var shouldDisplayModal = query['wcpay-connection-success'] === '1';

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(shouldDisplayModal),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  if (!isOpen) {
    return null;
  }

  var closeModal = function closeModal() {
    setIsOpen(false);
    Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__["updateQueryString"])({
      'wcpay-connection-success': undefined
    });
  };

  var title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Help us build a better WooCommerce Payments experience', 'woocommerce-admin');

  var trackingMessage = interpolate_components__WEBPACK_IMPORTED_MODULE_4___default()({
    mixedString: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('By agreeing to share non-sensitive {{link}}usage data{{/link}}, you’ll help us improve features and optimize the WooCommerce Payments experience. You can opt out at any time.', 'woocommerce-admin'),
    components: {
      link: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__["Link"], {
        href: "https://woocommerce.com/usage-tracking",
        target: "_blank",
        type: "external"
      })
    }
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_profile_wizard_steps_usage_modal__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    isDismissible: false,
    title: title,
    message: trackingMessage,
    acceptActionText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('I agree', 'woocommerce-admin'),
    dismissActionText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('No thanks', 'woocommerce-admin'),
    onContinue: closeModal,
    onClose: closeModal
  });
};

/* harmony default export */ __webpack_exports__["default"] = (WCPayUsageModal);

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var interpolate_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(30);
/* harmony import */ var interpolate_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(interpolate_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(40);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(21);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _woocommerce_explat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(161);
/* harmony import */ var _woocommerce_explat__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_explat__WEBPACK_IMPORTED_MODULE_15__);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */










var UsageModal = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(UsageModal, _Component);

  var _super = _createSuper(UsageModal);

  function UsageModal(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, UsageModal);

    _this = _super.call(this, props);
    _this.state = {
      isLoadingScripts: false,
      isRequestStarted: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(UsageModal, [{
    key: "componentDidUpdate",
    value: function () {
      var _componentDidUpdate = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee(prevProps, prevState) {
        var _this$props, hasErrors, isRequesting, onClose, onContinue, createNotice, _this$state, isLoadingScripts, isRequestStarted, isRequestSuccessful, isRequestError;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, hasErrors = _this$props.hasErrors, isRequesting = _this$props.isRequesting, onClose = _this$props.onClose, onContinue = _this$props.onContinue, createNotice = _this$props.createNotice;
                _this$state = this.state, isLoadingScripts = _this$state.isLoadingScripts, isRequestStarted = _this$state.isRequestStarted; // We can't rely on isRequesting props only because option update might be triggered by other component.

                if (isRequestStarted) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                isRequestSuccessful = !isRequesting && !isLoadingScripts && (prevProps.isRequesting || prevState.isLoadingScripts) && !hasErrors;
                isRequestError = !isRequesting && prevProps.isRequesting && hasErrors;

                if (isRequestSuccessful) {
                  onClose();
                  onContinue();
                }

                if (isRequestError) {
                  createNotice('error', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('There was a problem updating your preferences', 'woocommerce-admin'));
                  onClose();
                }

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidUpdate(_x, _x2) {
        return _componentDidUpdate.apply(this, arguments);
      }

      return componentDidUpdate;
    }()
  }, {
    key: "updateTracking",
    value: function updateTracking(_ref) {
      var _this2 = this;

      var allowTracking = _ref.allowTracking;
      var updateOptions = this.props.updateOptions;

      if (allowTracking && typeof window.wcTracks.enable === 'function') {
        this.setState({
          isLoadingScripts: true
        });
        window.wcTracks.enable(function () {
          // Don't update state if component is unmounted already
          if (!_this2._isMounted) {
            return;
          }

          Object(_woocommerce_explat__WEBPACK_IMPORTED_MODULE_15__["initializeExPlat"])();

          _this2.setState({
            isLoadingScripts: false
          });
        });
      } else if (!allowTracking) {
        window.wcTracks.isEnabled = false;
      }

      var trackingValue = allowTracking ? 'yes' : 'no';
      this.setState({
        isRequestStarted: true
      });
      updateOptions({
        woocommerce_allow_tracking: trackingValue
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      // Bail if site has already opted in to tracking
      if (this.props.allowTracking) {
        var _this$props2 = this.props,
            onClose = _this$props2.onClose,
            onContinue = _this$props2.onContinue;
        onClose();
        onContinue();
        return null;
      }

      var _this$props3 = this.props,
          isRequesting = _this$props3.isRequesting,
          _this$props3$title = _this$props3.title,
          title = _this$props3$title === void 0 ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Build a better WooCommerce', 'woocommerce-admin') : _this$props3$title,
          _this$props3$message = _this$props3.message,
          message = _this$props3$message === void 0 ? interpolate_components__WEBPACK_IMPORTED_MODULE_11___default()({
        mixedString: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Get improved features and faster fixes by sharing non-sensitive data via {{link}}usage tracking{{/link}} ' + 'that shows us how WooCommerce is used. No personal data is tracked or stored.', 'woocommerce-admin'),
        components: {
          link: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_13__["Link"], {
            href: "https://woocommerce.com/usage-tracking",
            target: "_blank",
            type: "external"
          })
        }
      }) : _this$props3$message,
          _this$props3$dismissA = _this$props3.dismissActionText,
          dismissActionText = _this$props3$dismissA === void 0 ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('No thanks', 'woocommerce-admin') : _this$props3$dismissA,
          _this$props3$acceptAc = _this$props3.acceptActionText,
          acceptActionText = _this$props3$acceptAc === void 0 ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Yes, count me in!', 'woocommerce-admin') : _this$props3$acceptAc;
      var isRequestStarted = this.state.isRequestStarted;
      var isBusy = isRequestStarted && isRequesting;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["Modal"], {
        title: title,
        isDismissible: this.props.isDismissible,
        onRequestClose: function onRequestClose() {
          return _this3.props.onClose();
        },
        className: "woocommerce-usage-modal"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "woocommerce-usage-modal__wrapper"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "woocommerce-usage-modal__message"
      }, message), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "woocommerce-usage-modal__actions"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        isSecondary: true,
        isBusy: isBusy,
        onClick: function onClick() {
          return _this3.updateTracking({
            allowTracking: false
          });
        }
      }, dismissActionText), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        isPrimary: true,
        isBusy: isBusy,
        onClick: function onClick() {
          return _this3.updateTracking({
            allowTracking: true
          });
        }
      }, acceptActionText))));
    }
  }]);

  return UsageModal;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_9__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__["withSelect"])(function (select) {
  var _select = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_14__["OPTIONS_STORE_NAME"]),
      getOption = _select.getOption,
      getOptionsUpdatingError = _select.getOptionsUpdatingError,
      isOptionsUpdating = _select.isOptionsUpdating;

  var allowTracking = getOption('woocommerce_allow_tracking') === 'yes';
  var isRequesting = Boolean(isOptionsUpdating());
  var hasErrors = Boolean(getOptionsUpdatingError());
  return {
    allowTracking: allowTracking,
    isRequesting: isRequesting,
    hasErrors: hasErrors
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  var _dispatch2 = dispatch(_woocommerce_data__WEBPACK_IMPORTED_MODULE_14__["OPTIONS_STORE_NAME"]),
      updateOptions = _dispatch2.updateOptions;

  return {
    createNotice: createNotice,
    updateOptions: updateOptions
  };
}))(UsageModal));

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ isWCPaySupported; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ installActivateAndConnectWcpay; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ wcpay; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ wcpay_usage_modal["default"]; });

// EXTERNAL MODULE: ./client/task-list/tasks/payments/methods/wcpay/wcpay-usage-modal.js
var wcpay_usage_modal = __webpack_require__(571);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(13);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(14);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(15);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(16);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(11);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(22);

// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/wcpay/wcpay.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */





var wcpay_WCPay = /*#__PURE__*/function (_Component) {
  inherits_default()(WCPay, _Component);

  var _super = _createSuper(WCPay);

  function WCPay() {
    classCallCheck_default()(this, WCPay);

    return _super.apply(this, arguments);
  }

  createClass_default()(WCPay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          createNotice = _this$props.createNotice,
          markConfigured = _this$props.markConfigured;
      var query = Object(external_wc_navigation_["getQuery"])(); // Handle redirect back from WCPay on-boarding

      if (query['wcpay-connection-success']) {
        createNotice('success', Object(external_wp_i18n_["__"])('WooCommerce Payments connected successfully.', 'woocommerce-admin'));
        markConfigured('wcpay', {
          'wcpay-connection-success': '1'
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return WCPay;
}(external_wp_element_["Component"]);

/* harmony default export */ var wcpay = (Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  return {
    createNotice: createNotice
  };
})(wcpay_WCPay));
// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/wcpay/is-supported.js
function isWCPaySupported(countryCode) {
  var supportedCountries = ['US', 'PR'];

  if (window.wcAdminFeatures && window.wcAdminFeatures['wcpay/support-international-countries']) {
    supportedCountries.push('AU', 'CA', 'DE', 'ES', 'FR', 'GB', 'IE', 'IT', 'NZ');
  }

  return supportedCountries.includes(countryCode);
}
// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__(31);
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(21);

// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(29);

// EXTERNAL MODULE: ./client/lib/notices/index.js
var notices = __webpack_require__(568);

// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/wcpay/install-activate-and-connect.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


function installActivateAndConnectWcpay(reject, createNotice, installAndActivatePlugins) {
  var errorMessage = Object(external_wp_i18n_["__"])('There was an error connecting to WooCommerce Payments. Please try again or connect later in store settings.', 'woocommerce-admin');

  var connect = function connect() {
    external_wp_apiFetch_default()({
      path: external_wc_data_["WC_ADMIN_NAMESPACE"] + '/plugins/connect-wcpay',
      method: 'POST'
    }).then(function (response) {
      window.location = response.connectUrl;
    }).catch(function () {
      createNotice('error', errorMessage);
      reject();
    });
  };

  installAndActivatePlugins(['woocommerce-payments']).then(function () {
    Object(external_wc_tracks_["recordEvent"])('woocommerce_payments_install', {
      context: 'tasklist'
    });
    connect();
  }).catch(function (error) {
    Object(notices["a" /* createNoticesFromResponse */])(error);
    reject();
  });
}
// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/wcpay/index.js
/**
 * Internal dependencies
 */






/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=Object.assign||function(a){for(var c,b=1;b<arguments.length;b++)for(var d in c=arguments[b],c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d]);return a};Object.defineProperty(exports,'__esModule',{value:!0});exports.default=function(a){var b=a.size,c=b===void 0?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,['size','onClick','icon','className']),j=['gridicon','gridicons-external',f,!!function h(k){return 0==k%18}(c)&&'needs-offset',!1,!1].filter(Boolean).join(' ');return _react2.default.createElement('svg',_extends({className:j,height:c,width:c,onClick:d},g,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M19 13v6c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V7c0-1.105.895-2 2-2h6v2H5v12h12v-6h2zM13 3v2h4.586l-7.793 7.793 1.414 1.414L19 6.414V11h2V3h-8z'})))};var _react=__webpack_require__(7),_react2=_interopRequireDefault(_react);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){var d={};for(var c in a)0<=b.indexOf(c)||Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}module.exports=exports['default'];


/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaymentRecommendationData", function() { return getPaymentRecommendationData; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce_experimental__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37);
/* harmony import */ var _woocommerce_experimental__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var gridicons_dist_external__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(648);
/* harmony import */ var gridicons_dist_external__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(gridicons_dist_external__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _payment_recommendations_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(649);
/* harmony import */ var _payment_recommendations_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_payment_recommendations_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _dashboard_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(110);
/* harmony import */ var _wc_admin_settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(28);
/* harmony import */ var _lib_notices__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(568);
/* harmony import */ var _task_list_tasks_payments_methods_wcpay__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(574);




/**
 * External dependencies
 */










/**
 * Internal dependencies
 */






var SEE_MORE_LINK = 'https://woocommerce.com/product-category/woocommerce-extensions/payment-gateways/?utm_source=payments_recommendations';
var DISMISS_OPTION = 'woocommerce_setting_payments_recommendations_hidden';
var SHOW_MARKETPLACE_SUGGESTION_OPTION = 'woocommerce_show_marketplace_suggestions';
function getPaymentRecommendationData(select) {
  var _ref = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_9__["OPTIONS_STORE_NAME"]),
      getOption = _ref.getOption,
      isResolvingOption = _ref.isResolving;

  var _ref2 = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_9__["SETTINGS_STORE_NAME"]),
      getSettings = _ref2.getSettings;

  var _select = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_9__["PLUGINS_STORE_NAME"]),
      getRecommendedPlugins = _select.getRecommendedPlugins;

  var _getSettings = getSettings('general'),
      _getSettings$general = _getSettings.general,
      settings = _getSettings$general === void 0 ? {} : _getSettings$general;

  var marketplaceSuggestions = getOption(SHOW_MARKETPLACE_SUGGESTION_OPTION);
  var hidden = getOption(DISMISS_OPTION);
  var countryCode = settings.woocommerce_default_country ? Object(_dashboard_utils__WEBPACK_IMPORTED_MODULE_13__[/* getCountryCode */ "b"])(settings.woocommerce_default_country) : null;
  var countrySupported = countryCode ? Object(_task_list_tasks_payments_methods_wcpay__WEBPACK_IMPORTED_MODULE_16__[/* isWCPaySupported */ "d"])(countryCode) : false;
  var isRequestingOptions = isResolvingOption('getOption', [DISMISS_OPTION]) || isResolvingOption('getOption', [SHOW_MARKETPLACE_SUGGESTION_OPTION]);
  var displayable = !isRequestingOptions && hidden !== 'yes' && marketplaceSuggestions === 'yes' && countrySupported;
  var plugins;

  if (displayable) {
    // don't get recommended plugins until it is displayable.
    plugins = getRecommendedPlugins('payments');
  }

  return {
    displayable: displayable,
    recommendedPlugins: plugins
  };
}

var PaymentRecommendations = function PaymentRecommendations() {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      installingPlugin = _useState2[0],
      setInstallingPlugin = _useState2[1];

  var _useDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])(_woocommerce_data__WEBPACK_IMPORTED_MODULE_9__["OPTIONS_STORE_NAME"]),
      updateOptions = _useDispatch.updateOptions;

  var _useDispatch2 = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])(_woocommerce_data__WEBPACK_IMPORTED_MODULE_9__["PLUGINS_STORE_NAME"]),
      installAndActivatePlugins = _useDispatch2.installAndActivatePlugins;

  var _useSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(getPaymentRecommendationData),
      displayable = _useSelect.displayable,
      recommendedPlugins = _useSelect.recommendedPlugins;

  var triggeredPageViewRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  var shouldShowRecommendations = displayable && recommendedPlugins && recommendedPlugins.length > 0;
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (shouldShowRecommendations && !triggeredPageViewRef.current) {
      triggeredPageViewRef.current = true;
      Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_10__["recordEvent"])('settings_payments_recommendations_pageview', {});
    }
  }, [shouldShowRecommendations]);

  if (!shouldShowRecommendations) {
    return null;
  }

  var dismissPaymentRecommendations = function dismissPaymentRecommendations() {
    Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_10__["recordEvent"])('settings_payments_recommendations_dismiss', {});
    updateOptions(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, DISMISS_OPTION, 'yes'));
  };

  var setupPlugin = function setupPlugin(plugin) {
    if (installingPlugin) {
      return;
    }

    setInstallingPlugin(plugin.product);
    Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_10__["recordEvent"])('settings_payments_recommendations_setup', {
      extension_selected: plugin.product
    });
    installAndActivatePlugins([plugin.product]).then(function () {
      window.location.href = Object(_wc_admin_settings__WEBPACK_IMPORTED_MODULE_14__[/* getAdminLink */ "g"])(plugin['setup-link'].replace('/wp-admin/', ''));
    }).catch(function (response) {
      Object(_lib_notices__WEBPACK_IMPORTED_MODULE_15__[/* createNoticesFromResponse */ "a"])(response);
      setInstallingPlugin(null);
    });
  };

  var pluginsList = (recommendedPlugins || []).map(function (plugin) {
    return {
      key: plugin.slug,
      title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, plugin.title, plugin.recommended && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__["Pill"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Recommended', 'woocommerce-admin'))),
      content: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_5__["decodeEntities"])(plugin.copy),
      after: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        isSecondary: true,
        onClick: function onClick() {
          return setupPlugin(plugin);
        },
        isBusy: installingPlugin === plugin.product,
        disabled: !!installingPlugin
      }, plugin['button-text']),
      before: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("img", {
        src: plugin.icon,
        alt: ""
      })
    };
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    size: "large",
    className: "woocommerce-recommended-payments-card"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["CardHeader"], {
    size: "medium"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "woocommerce-recommended-payments-card__header"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    variant: "title.small"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Recommended ways to get paid', 'woocommerce-admin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    className: 'woocommerce-recommended-payments__header-heading',
    variant: "caption"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('We recommend adding one of the following payment extensions to your store. The extension will be installed and activated for you when you click "Get started".', 'woocommerce-admin'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "woocommerce-card__menu woocommerce-card__header-item"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__["EllipsisMenu"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Task List Options', 'woocommerce-admin'),
    renderContent: function renderContent() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        className: "woocommerce-review-activity-card__section-controls"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        onClick: dismissPaymentRecommendations
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Hide this', 'woocommerce-admin')));
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__["List"], {
    items: pluginsList
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["CardFooter"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    href: SEE_MORE_LINK,
    target: "_blank",
    isTertiary: true
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('See more options', 'woocommerce-admin'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(gridicons_dist_external__WEBPACK_IMPORTED_MODULE_11___default.a, {
    size: 18
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (PaymentRecommendations);

/***/ })

}]);