(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[6],{

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createNoticesFromResponse; });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(127);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(277);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);




/**
 * External dependencies
 */

function createNoticesFromResponse(response) {
  var _dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["dispatch"])('core/notices'),
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

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var interpolate_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51);
/* harmony import */ var interpolate_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(interpolate_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(112);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _profile_wizard_steps_usage_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(641);



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

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(174);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(34);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var interpolate_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51);
/* harmony import */ var interpolate_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(interpolate_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(112);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(33);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _woocommerce_explat__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(284);
/* harmony import */ var _woocommerce_explat__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_explat__WEBPACK_IMPORTED_MODULE_16__);










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */










var UsageModal = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(UsageModal, _Component);

  var _super = _createSuper(UsageModal);

  function UsageModal(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, UsageModal);

    _this = _super.call(this, props);
    _this.state = {
      isLoadingScripts: false,
      isRequestStarted: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(UsageModal, [{
    key: "componentDidUpdate",
    value: function () {
      var _componentDidUpdate = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee(prevProps, prevState) {
        var _this$props, hasErrors, isRequesting, onClose, onContinue, createNotice, _this$state, isLoadingScripts, isRequestStarted, isRequestSuccessful, isRequestError;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee$(_context) {
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
                  createNotice('error', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('There was a problem updating your preferences', 'woocommerce-admin'));
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

          Object(_woocommerce_explat__WEBPACK_IMPORTED_MODULE_16__["initializeExPlat"])();

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
          title = _this$props3$title === void 0 ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Build a better WooCommerce', 'woocommerce-admin') : _this$props3$title,
          _this$props3$message = _this$props3.message,
          message = _this$props3$message === void 0 ? interpolate_components__WEBPACK_IMPORTED_MODULE_12___default()({
        mixedString: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Get improved features and faster fixes by sharing non-sensitive data via {{link}}usage tracking{{/link}} ' + 'that shows us how WooCommerce is used. No personal data is tracked or stored.', 'woocommerce-admin'),
        components: {
          link: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_14__["Link"], {
            href: "https://woocommerce.com/usage-tracking",
            target: "_blank",
            type: "external"
          })
        }
      }) : _this$props3$message,
          _this$props3$dismissA = _this$props3.dismissActionText,
          dismissActionText = _this$props3$dismissA === void 0 ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('No thanks', 'woocommerce-admin') : _this$props3$dismissA,
          _this$props3$acceptAc = _this$props3.acceptActionText,
          acceptActionText = _this$props3$acceptAc === void 0 ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Yes, count me in!', 'woocommerce-admin') : _this$props3$acceptAc;
      var isRequestStarted = this.state.isRequestStarted;
      var isBusy = isRequestStarted && isRequesting;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["Modal"], {
        title: title,
        isDismissible: this.props.isDismissible,
        onRequestClose: function onRequestClose() {
          return _this3.props.onClose();
        },
        className: "woocommerce-usage-modal"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "woocommerce-usage-modal__wrapper"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "woocommerce-usage-modal__message"
      }, message), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "woocommerce-usage-modal__actions"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        isSecondary: true,
        isBusy: isBusy,
        onClick: function onClick() {
          return _this3.updateTracking({
            allowTracking: false
          });
        }
      }, dismissActionText), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["Button"], {
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
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_11__["withSelect"])(function (select) {
  var _select = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_15__["OPTIONS_STORE_NAME"]),
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
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_11__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  var _dispatch2 = dispatch(_woocommerce_data__WEBPACK_IMPORTED_MODULE_15__["OPTIONS_STORE_NAME"]),
      updateOptions = _dispatch2.updateOptions;

  return {
    createNotice: createNotice,
    updateOptions: updateOptions
  };
}))(UsageModal));

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ isWCPaySupported; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ installActivateAndConnectWcpay; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ wcpay; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ wcpay_usage_modal["default"]; });

// EXTERNAL MODULE: ./client/task-list/tasks/payments/methods/wcpay/wcpay-usage-modal.js
var wcpay_usage_modal = __webpack_require__(639);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(174);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(13);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(14);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(16);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(17);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(15);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(28);

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
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(108);

// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/wcpay/is-supported.js

function isWCPaySupported(countryCode) {
  var supportedCountries = ['US', 'PR'];

  if (window.wcAdminFeatures && window.wcAdminFeatures['wcpay/support-international-countries']) {
    supportedCountries.push('AU', 'CA', 'DE', 'ES', 'FR', 'GB', 'IE', 'IT', 'NZ');
  }

  return supportedCountries.includes(countryCode);
}
// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__(48);
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(33);

// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(44);

// EXTERNAL MODULE: ./client/lib/notices/index.js
var notices = __webpack_require__(634);

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

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ getPaymentMethods; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(4);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(108);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(205);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(132);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: ./client/wc-admin-settings/index.js
var wc_admin_settings = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(174);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(39);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(67);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(13);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(14);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(10);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(16);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(17);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external "regeneratorRuntime"
var external_regeneratorRuntime_ = __webpack_require__(6);
var external_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_regeneratorRuntime_);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(128);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(5);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(34);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(15);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(112);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(33);

// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/bacs.js














function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */








var bacs_Bacs = /*#__PURE__*/function (_Component) {
  inherits_default()(Bacs, _Component);

  var _super = _createSuper(Bacs);

  function Bacs() {
    var _this;

    classCallCheck_default()(this, Bacs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "getInitialConfigValues", function () {
      return {
        account_name: '',
        account_number: '',
        bank_name: '',
        sort_code: '',
        iban: '',
        bic: ''
      };
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "validate", function (values) {
      var errors = {};

      if (!values.account_number && !values.iban) {
        errors.account_number = errors.iban = Object(external_wp_i18n_["__"])('Please enter an account number or IBAN', 'woocommerce-admin');
      }

      return errors;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "updateSettings", /*#__PURE__*/function () {
      var _ref = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee(values) {
        var _this$props, updateOptions, createNotice, markConfigured, update;

        return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = _this.props, updateOptions = _this$props.updateOptions, createNotice = _this$props.createNotice, markConfigured = _this$props.markConfigured;
                _context.next = 3;
                return updateOptions({
                  woocommerce_bacs_settings: {
                    enabled: 'yes'
                  },
                  woocommerce_bacs_accounts: [values]
                });

              case 3:
                update = _context.sent;

                if (update.success) {
                  markConfigured('bacs');
                  createNotice('success', Object(external_wp_i18n_["__"])('Direct bank transfer details added successfully', 'woocommerce-admin'));
                } else {
                  createNotice('error', Object(external_wp_i18n_["__"])('There was a problem saving your payment settings', 'woocommerce-admin'));
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  createClass_default()(Bacs, [{
    key: "render",
    value: function render() {
      var isOptionsRequesting = this.props.isOptionsRequesting;
      return Object(external_wp_element_["createElement"])(external_wc_components_["Form"], {
        initialValues: this.getInitialConfigValues(),
        onSubmitCallback: this.updateSettings,
        validate: this.validate
      }, function (_ref2) {
        var getInputProps = _ref2.getInputProps,
            handleSubmit = _ref2.handleSubmit;
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
  }]);

  return Bacs;
}(external_wp_element_["Component"]);

/* harmony default export */ var bacs = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select(external_wc_data_["OPTIONS_STORE_NAME"]),
      isOptionsUpdating = _select.isOptionsUpdating;

  var isOptionsRequesting = isOptionsUpdating();
  return {
    isOptionsRequesting: isOptionsRequesting
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  var _dispatch2 = dispatch(external_wc_data_["OPTIONS_STORE_NAME"]),
      updateOptions = _dispatch2.updateOptions;

  return {
    createNotice: createNotice,
    updateOptions: updateOptions
  };
}))(bacs_Bacs));
// CONCATENATED MODULE: ./client/task-list/tasks/payments/images/bacs.js

/* harmony default export */ var images_bacs = (function () {
  return Object(external_wp_element_["createElement"])("svg", {
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
  })));
});
// CONCATENATED MODULE: ./client/task-list/tasks/payments/images/cod.js

/* harmony default export */ var cod = (function () {
  return Object(external_wp_element_["createElement"])("svg", {
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
    id: "cod-mask-0",
    "mask-type": "alpha",
    maskUnits: "userSpaceOnUse",
    x: "7",
    y: "10",
    width: "18",
    height: "12"
  }, Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 13H19.75V10H9.25C8.425 10 7.75 10.675 7.75 11.5V19.75H9.25C9.25 20.995 10.255 22 11.5 22C12.745 22 13.75 20.995 13.75 19.75H18.25C18.25 20.995 19.255 22 20.5 22C21.745 22 22.75 20.995 22.75 19.75H24.25V16L22 13ZM21.625 14.125L23.095 16H19.75V14.125H21.625ZM10.75 19.75C10.75 20.1625 11.0875 20.5 11.5 20.5C11.9125 20.5 12.25 20.1625 12.25 19.75C12.25 19.3375 11.9125 19 11.5 19C11.0875 19 10.75 19.3375 10.75 19.75ZM13.165 18.25C12.7525 17.7925 12.1675 17.5 11.5 17.5C10.8325 17.5 10.2475 17.7925 9.835 18.25H9.25V11.5H18.25V18.25H13.165ZM19.75 19.75C19.75 20.1625 20.0875 20.5 20.5 20.5C20.9125 20.5 21.25 20.1625 21.25 19.75C21.25 19.3375 20.9125 19 20.5 19C20.0875 19 19.75 19.3375 19.75 19.75Z",
    fill: "white"
  })), Object(external_wp_element_["createElement"])("g", {
    mask: "url(#cod-mask-0)"
  }, Object(external_wp_element_["createElement"])("rect", {
    x: "7",
    y: "7",
    width: "18",
    height: "18",
    fill: "white"
  })), Object(external_wp_element_["createElement"])("mask", {
    id: "cod-mask-1",
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
    mask: "url(#cod-mask-1)"
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
    id: "cod-mask-2",
    "mask-type": "alpha",
    maskUnits: "userSpaceOnUse",
    x: "76",
    y: "9",
    width: "8",
    height: "14"
  }, Object(external_wp_element_["createElement"])("path", {
    d: "M80.2926 15.175C78.5901 14.7325 78.0426 14.275 78.0426 13.5625C78.0426 12.745 78.8001 12.175 80.0676 12.175C81.4026 12.175 81.8976 12.8125 81.9426 13.75H83.6001C83.5476 12.46 82.7601 11.275 81.1926 10.8925V9.25H78.9426V10.87C77.4876 11.185 76.3176 12.13 76.3176 13.5775C76.3176 15.31 77.7501 16.1725 79.8426 16.675C81.7176 17.125 82.0926 17.785 82.0926 18.4825C82.0926 19 81.7251 19.825 80.0676 19.825C78.5226 19.825 77.9151 19.135 77.8326 18.25H76.1826C76.2726 19.8925 77.5026 20.815 78.9426 21.1225V22.75H81.1926V21.1375C82.6551 20.86 83.8176 20.0125 83.8176 18.475C83.8176 16.345 81.9951 15.6175 80.2926 15.175Z",
    fill: "white"
  })), Object(external_wp_element_["createElement"])("g", {
    mask: "url(#cod-mask-2)"
  }, Object(external_wp_element_["createElement"])("rect", {
    x: "71",
    y: "7",
    width: "18",
    height: "18",
    fill: "white"
  })));
});
// CONCATENATED MODULE: ./client/task-list/tasks/payments/images/wcpay.js

/* harmony default export */ var wcpay = (function () {
  return Object(external_wp_element_["createElement"])("svg", {
    width: "100",
    height: "64",
    viewBox: "-10 0 120 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.78073 0.5H91.1787C96.3299 0.5 100.5 4.77335 100.5 10.0522V41.8929C100.5 47.1717 96.3299 51.4451 91.1787 51.4451H61.9883L65.9948 61.5L48.3742 51.4451H9.82161C4.67036 51.4451 0.500298 47.1717 0.500298 41.8929V10.0522C0.459415 4.81524 4.62947 0.5 9.78073 0.5Z",
    fill: "#7F54B3"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M5.48791 9.1725C6.06028 8.37648 6.91882 7.95752 8.06354 7.87373C10.1486 7.70615 11.3342 8.71165 11.6204 10.8902C12.8877 19.6464 14.2778 27.0619 15.7495 33.1368L24.7029 15.6663C25.5206 14.0743 26.5426 13.2364 27.7691 13.1526C29.568 13.0269 30.6718 14.2 31.1215 16.6718C32.1436 22.2439 33.4519 26.9781 35.0054 31.0001C36.0684 20.3586 37.8672 12.6917 40.402 7.95753C41.0152 6.78445 41.9146 6.19791 43.1002 6.11412C44.0405 6.03033 44.8991 6.3236 45.6759 6.95203C46.4526 7.58047 46.8615 8.37648 46.9432 9.34008C46.9841 10.0942 46.8615 10.7226 46.5344 11.3511C44.94 14.3676 43.6317 19.4369 42.5688 26.4754C41.5467 33.3044 41.1787 38.6251 41.424 42.4376C41.5058 43.485 41.3423 44.4067 40.9334 45.2027C40.4428 46.1244 39.707 46.6272 38.7666 46.711C37.7037 46.7948 36.5998 46.292 35.5369 45.1608C31.7348 41.1807 28.7094 35.2316 26.5018 27.3133C23.8444 32.6759 21.882 36.6979 20.6146 39.3792C18.2025 44.1134 16.1584 46.5434 14.4413 46.6691C13.3374 46.7529 12.3971 45.7893 11.5795 43.7783C9.49445 38.2899 7.24589 27.6904 4.83379 11.9795C4.71114 10.8902 4.91555 9.92662 5.48791 9.1725Z",
    fill: "white"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M93.3864 15.7499C91.9146 13.1105 89.7478 11.5185 86.8451 10.89C86.0683 10.7225 85.3324 10.6387 84.6374 10.6387C80.7127 10.6387 77.5238 12.7335 75.0299 16.923C72.904 20.4841 71.8411 24.4223 71.8411 28.7376C71.8411 31.9635 72.4952 34.7286 73.8034 37.0329C75.2752 39.6723 77.442 41.2644 80.3447 41.8928C81.1215 42.0604 81.8574 42.1442 82.5524 42.1442C86.518 42.1442 89.7069 40.0494 92.1599 35.8598C94.2858 32.2568 95.3488 28.3186 95.3488 24.0034C95.3488 20.7355 94.6946 18.0123 93.3864 15.7499ZM88.2351 27.355C87.6628 30.1201 86.6407 32.173 85.128 33.5556C83.9424 34.6449 82.8386 35.1057 81.8165 34.8962C80.8353 34.6868 80.0177 33.8069 79.4044 32.173C78.9138 30.8742 78.6685 29.5755 78.6685 28.3605C78.6685 27.3131 78.7503 26.2657 78.9547 25.3021C79.3226 23.5844 80.0177 21.9086 81.1215 20.3166C82.4706 18.2637 83.9015 17.4258 85.3733 17.719C86.3545 17.9285 87.1722 18.8083 87.7854 20.4422C88.276 21.741 88.5213 23.0398 88.5213 24.2547C88.5213 25.344 88.3987 26.3914 88.2351 27.355Z",
    fill: "white"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M67.7528 15.7499C66.281 13.1105 64.0734 11.5185 61.2116 10.89C60.4348 10.7225 59.6989 10.6387 59.0039 10.6387C55.0791 10.6387 51.8903 12.7335 49.3964 16.923C47.2705 20.4841 46.2075 24.4223 46.2075 28.7376C46.2075 31.9635 46.8616 34.7286 48.1699 37.0329C49.6417 39.6723 51.8085 41.2644 54.7112 41.8928C55.488 42.0604 56.2238 42.1442 56.9189 42.1442C60.8845 42.1442 64.0734 40.0494 66.5263 35.8598C68.6523 32.2568 69.7152 28.3186 69.7152 24.0034C69.7152 20.7355 69.0611 18.0123 67.7528 15.7499ZM62.6016 27.355C62.0292 30.1201 61.0071 32.173 59.4945 33.5556C58.3089 34.6449 57.205 35.1057 56.183 34.8962C55.2018 34.6868 54.3841 33.8069 53.7709 32.173C53.2803 30.8742 53.035 29.5755 53.035 28.3605C53.035 27.3131 53.1167 26.2657 53.3212 25.3021C53.6891 23.5844 54.3841 21.9086 55.4879 20.3166C56.8371 18.2637 58.268 17.4258 59.7398 17.719C60.721 17.9285 61.5386 18.8083 62.1519 20.4422C62.6425 21.741 62.8878 23.0398 62.8878 24.2547C62.8878 25.344 62.806 26.3914 62.6016 27.355Z",
    fill: "white"
  }));
});
// CONCATENATED MODULE: ./client/task-list/tasks/payments/images/razorpay.js

/* harmony default export */ var razorpay = (function () {
  return Object(external_wp_element_["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "100",
    height: "24",
    fill: "#072654",
    viewBox: "0 0 1896 401"
  }, Object(external_wp_element_["createElement"])("path", {
    fill: "#3395FF",
    d: "M122.63 105.7l-15.75 57.97 90.15-58.3-58.96 219.98 59.88.05L285.05.48"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M25.6 232.92L.8 325.4h122.73l50.22-188.13L25.6 232.92m426.32-81.42c-3 11.15-8.78 19.34-17.4 24.57-8.6 5.22-20.67 7.84-36.25 7.84h-49.5l17.38-64.8h49.5c15.56 0 26.25 2.6 32.05 7.9 5.8 5.3 7.2 13.4 4.22 24.6m51.25-1.4c6.3-23.4 3.7-41.4-7.82-54-11.5-12.5-31.68-18.8-60.48-18.8H324.4l-66.5 248.1h53.67l26.8-100h35.2c7.9 0 14.12 1.3 18.66 3.8 4.55 2.6 7.22 7.1 8.04 13.6l9.58 82.6h57.5l-9.32-77c-1.9-17.2-9.77-27.3-23.6-30.3 17.63-5.1 32.4-13.6 44.3-25.4a92.6 92.6 0 0 0 24.44-42.5m130.46 86.4c-4.5 16.8-11.4 29.5-20.73 38.4-9.34 8.9-20.5 13.3-33.52 13.3-13.26 0-22.25-4.3-27-13-4.76-8.7-4.92-21.3-.5-37.8 4.42-16.5 11.47-29.4 21.17-38.7 9.7-9.3 21.04-13.95 34.06-13.95 13 0 21.9 4.5 26.4 13.43 4.6 8.97 4.7 21.8.2 38.5zm23.52-87.8l-6.72 25.1c-2.9-9-8.53-16.2-16.85-21.6-8.34-5.3-18.66-8-30.97-8-15.1 0-29.6 3.9-43.5 11.7-13.9 7.8-26.1 18.8-36.5 33-10.4 14.2-18 30.3-22.9 48.4-4.8 18.2-5.8 34.1-2.9 47.9 3 13.9 9.3 24.5 19 31.9 9.8 7.5 22.3 11.2 37.6 11.2a82.4 82.4 0 0 0 35.2-7.7 82.11 82.11 0 0 0 28.4-21.2l-7 26.16h51.9L709.3 149h-52zm238.65 0H744.87l-10.55 39.4h87.82l-116.1 100.3-9.92 37h155.8l10.55-39.4h-94.1l117.88-101.8m142.4 52c-4.67 17.4-11.6 30.48-20.75 39-9.15 8.6-20.23 12.9-33.24 12.9-27.2 0-36.14-17.3-26.86-51.9 4.6-17.2 11.56-30.13 20.86-38.84 9.3-8.74 20.57-13.1 33.82-13.1 13 0 21.78 4.33 26.3 13.05 4.52 8.7 4.48 21.67-.13 38.87m30.38-80.83c-11.95-7.44-27.2-11.16-45.8-11.16-18.83 0-36.26 3.7-52.3 11.1a113.09 113.09 0 0 0-41 32.06c-11.3 13.9-19.43 30.2-24.42 48.8-4.9 18.53-5.5 34.8-1.7 48.73 3.8 13.9 11.8 24.6 23.8 32 12.1 7.46 27.5 11.17 46.4 11.17 18.6 0 35.9-3.74 51.8-11.18 15.9-7.48 29.5-18.1 40.8-32.1 11.3-13.94 19.4-30.2 24.4-48.8 5-18.6 5.6-34.84 1.8-48.8-3.8-13.9-11.7-24.6-23.6-32.05m185.1 40.8l13.3-48.1c-4.5-2.3-10.4-3.5-17.8-3.5-11.9 0-23.3 2.94-34.3 8.9-9.46 5.06-17.5 12.2-24.3 21.14l6.9-25.9-15.07.06h-37l-47.7 176.7h52.63l24.75-92.37c3.6-13.43 10.08-24 19.43-31.5 9.3-7.53 20.9-11.3 34.9-11.3 8.6 0 16.6 1.97 24.2 5.9m146.5 41.1c-4.5 16.5-11.3 29.1-20.6 37.8-9.3 8.74-20.5 13.1-33.5 13.1s-21.9-4.4-26.6-13.2c-4.8-8.85-4.9-21.6-.4-38.36 4.5-16.75 11.4-29.6 20.9-38.5 9.5-8.97 20.7-13.45 33.7-13.45 12.8 0 21.4 4.6 26 13.9 4.6 9.3 4.7 22.2.28 38.7m36.8-81.4c-9.75-7.8-22.2-11.7-37.3-11.7-13.23 0-25.84 3-37.8 9.06-11.95 6.05-21.65 14.3-29.1 24.74l.18-1.2 8.83-28.1h-51.4l-13.1 48.9-.4 1.7-54 201.44h52.7l27.2-101.4c2.7 9.02 8.2 16.1 16.6 21.22 8.4 5.1 18.77 7.63 31.1 7.63 15.3 0 29.9-3.7 43.75-11.1 13.9-7.42 25.9-18.1 36.1-31.9 10.2-13.8 17.77-29.8 22.6-47.9 4.9-18.13 5.9-34.3 3.1-48.45-2.85-14.17-9.16-25.14-18.9-32.9m174.65 80.65c-4.5 16.7-11.4 29.5-20.7 38.3-9.3 8.86-20.5 13.27-33.5 13.27-13.3 0-22.3-4.3-27-13-4.8-8.7-4.9-21.3-.5-37.8 4.4-16.5 11.42-29.4 21.12-38.7 9.7-9.3 21.05-13.94 34.07-13.94 13 0 21.8 4.5 26.4 13.4 4.6 8.93 4.63 21.76.15 38.5zm23.5-87.85l-6.73 25.1c-2.9-9.05-8.5-16.25-16.8-21.6-8.4-5.34-18.7-8-31-8-15.1 0-29.68 3.9-43.6 11.7-13.9 7.8-26.1 18.74-36.5 32.9-10.4 14.16-18 30.3-22.9 48.4-4.85 18.17-5.8 34.1-2.9 47.96 2.93 13.8 9.24 24.46 19 31.9 9.74 7.4 22.3 11.14 37.6 11.14 12.3 0 24.05-2.56 35.2-7.7a82.3 82.3 0 0 0 28.33-21.23l-7 26.18h51.9l47.38-176.7h-51.9zm269.87.06l.03-.05h-31.9c-1.02 0-1.92.05-2.85.07h-16.55l-8.5 11.8-2.1 2.8-.9 1.4-67.25 93.68-13.9-109.7h-55.08l27.9 166.7-61.6 85.3h54.9l14.9-21.13c.42-.62.8-1.14 1.3-1.8l17.4-24.7.5-.7 77.93-110.5 65.7-93 .1-.06h-.03z"
  }));
});
// CONCATENATED MODULE: ./client/task-list/tasks/payments/images/mollie.js

var mollie_MollieLogo = function MollieLogo() {
  return Object(external_wp_element_["createElement"])("svg", {
    fill: "none",
    viewBox: "0 0 677 200",
    width: "100",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_wp_element_["createElement"])("g", {
    fill: "#000"
  }, Object(external_wp_element_["createElement"])("path", {
    clipRule: "evenodd",
    d: "m286.342 65.3132c-37.175 0-67.35 30.2415-67.35 67.3438 0 37.101 30.245 67.343 67.35 67.343 37.106 0 67.35-30.242 67.35-67.343 0-37.1023-30.174-67.3438-67.35-67.3438zm0 102.8348c-19.533 0-35.425-15.89-35.425-35.421s15.892-35.4222 35.425-35.4222 35.426 15.8912 35.426 35.4222-15.893 35.421-35.426 35.421z",
    fillRule: "evenodd"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "m510.375 42.0021c11.6 0 21.003-9.4025 21.003-21.0011 0-11.59851-9.403-21.001-21.003-21.001-11.599 0-21.003 9.40249-21.003 21.001 0 11.5986 9.404 21.0011 21.003 21.0011z"
  }), Object(external_wp_element_["createElement"])("path", {
    clipRule: "evenodd",
    d: "m148.842 65.3833c-1.75-.14-3.431-.21-5.181-.21-16.242 0-31.644 6.6503-42.706 18.4109-11.0617-11.6906-26.394-18.4109-42.4964-18.4109-32.2047 0-58.4586 26.1813-58.4586 58.3827v73.714h31.5047v-72.804c0-13.37 10.9916-25.691 23.9435-27.0211.9101-.07 1.8203-.14 2.6604-.14 14.5621 0 26.4639 11.9001 26.5339 26.4611v73.504h32.2045v-72.944c0-13.3 10.922-25.621 23.944-26.9511.91-.07 1.82-.14 2.66-.14 14.562 0 26.534 11.8301 26.604 26.3211v73.714h32.205v-72.804c0-14.77-5.461-28.9812-15.332-39.9717-9.872-11.0606-23.384-17.8509-38.086-19.111z",
    fillRule: "evenodd"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "m403.26 3.15015h-32.205v194.25985h32.205z"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "m464.869 3.15015h-32.205v194.25985h32.205z"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "m526.478 68.5334h-32.205v128.8066h32.205z"
  }), Object(external_wp_element_["createElement"])("path", {
    clipRule: "evenodd",
    d: "m677 129.646c0-17.08-6.651-33.1812-18.693-45.4318-12.112-12.2506-28.074-19.0409-45.086-19.0409-.28 0-.561 0-.841 0-17.642.21-34.305 7.2103-46.766 19.741-12.462 12.5306-19.463 29.1217-19.673 46.8327-.21 18.06 6.721 35.141 19.533 48.092 12.811 12.951 29.754 20.091 47.817 20.091h.07c23.663 0 45.856-12.671 57.968-33.042l1.54-2.59-26.604-13.09-1.33 2.17c-6.651 10.99-18.202 17.501-31.014 17.501-16.383 0-30.525-10.921-34.866-26.462h97.945zm-65.04-35.2113c14.703 0 27.864 9.6603 32.485 23.3813h-64.899c4.55-13.721 17.712-23.3813 32.414-23.3813z",
    fillRule: "evenodd"
  })));
};
// CONCATENATED MODULE: ./client/task-list/tasks/payments/images/payu-india.js

var payu_india_PayUIndiaLogo = function PayUIndiaLogo() {
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
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(118);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(256);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(279);

// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__(48);
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// EXTERNAL MODULE: ./node_modules/interpolate-components/lib/index.js
var lib = __webpack_require__(51);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(28);

// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/stripe.js


















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function stripe_createSuper(Derived) { var hasNativeReflectConstruct = stripe_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function stripe_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */












var stripe_Stripe = /*#__PURE__*/function (_Component) {
  inherits_default()(Stripe, _Component);

  var _super = stripe_createSuper(Stripe);

  function Stripe(props) {
    var _this;

    classCallCheck_default()(this, Stripe);

    _this = _super.call(this, props);
    _this.state = {
      oAuthConnectFailed: false,
      connectURL: null,
      isPending: false
    };
    _this.updateSettings = _this.updateSettings.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Stripe, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var oAuthConnectFailed = this.state.oAuthConnectFailed;
      var stripeSettings = this.props.stripeSettings;
      var query = Object(external_wc_navigation_["getQuery"])(); // Handle redirect back from Stripe.

      if (query['stripe-connect'] && query['stripe-connect'] === '1') {
        var isStripeConnected = stripeSettings.publishable_key && stripeSettings.secret_key;

        if (isStripeConnected) {
          this.completeMethod();
          return;
        }
      }

      if (!oAuthConnectFailed) {
        this.fetchOAuthConnectURL();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var activePlugins = this.props.activePlugins;

      if (!prevProps.activePlugins.includes('woocommerce-gateway-stripe') && activePlugins.includes('woocommerce-gateway-stripe')) {
        this.fetchOAuthConnectURL();
      }
    }
  }, {
    key: "completeMethod",
    value: function completeMethod() {
      var _this$props = this.props,
          createNotice = _this$props.createNotice,
          markConfigured = _this$props.markConfigured;
      this.setState({
        isPending: false
      });
      createNotice('success', Object(external_wp_i18n_["__"])('Stripe connected successfully.', 'woocommerce-admin'));
      markConfigured('stripe');
    }
  }, {
    key: "fetchOAuthConnectURL",
    value: function () {
      var _fetchOAuthConnectURL = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee() {
        var activePlugins, result;
        return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                activePlugins = this.props.activePlugins;

                if (activePlugins.includes('woocommerce-gateway-stripe')) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.prev = 3;
                this.setState({
                  isPending: true
                });
                _context.next = 7;
                return external_wp_apiFetch_default()({
                  path: external_wc_data_["WCS_NAMESPACE"] + '/connect/stripe/oauth/init',
                  method: 'POST',
                  data: {
                    returnUrl: Object(wc_admin_settings["f" /* getAdminLink */])('admin.php?page=wc-admin&task=payments&method=stripe&stripe-connect=1')
                  }
                });

              case 7:
                result = _context.sent;

                if (!(!result || !result.oauthUrl)) {
                  _context.next = 11;
                  break;
                }

                this.setState({
                  oAuthConnectFailed: true,
                  isPending: false
                });
                return _context.abrupt("return");

              case 11:
                this.setState({
                  connectURL: result.oauthUrl,
                  isPending: false
                });
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](3);
                this.setState({
                  oAuthConnectFailed: true,
                  isPending: false
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 14]]);
      }));

      function fetchOAuthConnectURL() {
        return _fetchOAuthConnectURL.apply(this, arguments);
      }

      return fetchOAuthConnectURL;
    }()
  }, {
    key: "renderConnectButton",
    value: function renderConnectButton() {
      var connectURL = this.state.connectURL;
      return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isPrimary: true,
        href: connectURL
      }, Object(external_wp_i18n_["__"])('Connect', 'woocommerce-admin'));
    }
  }, {
    key: "updateSettings",
    value: function () {
      var _updateSettings = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee2(values) {
        var _objectSpread2;

        var _this$props2, updateOptions, stripeSettings, createNotice, prefix, update;

        return external_regeneratorRuntime_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$props2 = this.props, updateOptions = _this$props2.updateOptions, stripeSettings = _this$props2.stripeSettings, createNotice = _this$props2.createNotice;
                prefix = values.publishable_key.match(/^pk_live_/) ? '' : 'test_';
                _context2.next = 4;
                return updateOptions({
                  woocommerce_stripe_settings: _objectSpread(_objectSpread({}, stripeSettings), {}, (_objectSpread2 = {}, defineProperty_default()(_objectSpread2, prefix + 'publishable_key', values.publishable_key), defineProperty_default()(_objectSpread2, prefix + 'secret_key', values.secret_key), defineProperty_default()(_objectSpread2, "testmode", prefix === 'test_' ? 'yes' : 'no'), defineProperty_default()(_objectSpread2, "enabled", 'yes'), _objectSpread2))
                });

              case 4:
                update = _context2.sent;

                if (update.success) {
                  this.completeMethod();
                } else {
                  createNotice('error', Object(external_wp_i18n_["__"])('There was a problem saving your payment settings', 'woocommerce-admin'));
                }

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function updateSettings(_x) {
        return _updateSettings.apply(this, arguments);
      }

      return updateSettings;
    }()
  }, {
    key: "getInitialConfigValues",
    value: function getInitialConfigValues() {
      return {
        publishable_key: '',
        secret_key: ''
      };
    }
  }, {
    key: "validateManualConfig",
    value: function validateManualConfig(values) {
      var errors = {};

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
  }, {
    key: "renderManualConfig",
    value: function renderManualConfig() {
      var _this$props3 = this.props,
          isOptionsUpdating = _this$props3.isOptionsUpdating,
          recordConnectStartEvent = _this$props3.recordConnectStartEvent;
      var stripeHelp = lib_default()({
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
        onSubmitCallback: this.updateSettings,
        validate: this.validateManualConfig
      }, function (_ref) {
        var getInputProps = _ref.getInputProps,
            handleSubmit = _ref.handleSubmit;
        return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
          label: Object(external_wp_i18n_["__"])('Publishable Key', 'woocommerce-admin'),
          required: true
        }, getInputProps('publishable_key'))), Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
          label: Object(external_wp_i18n_["__"])('Secret Key', 'woocommerce-admin'),
          required: true
        }, getInputProps('secret_key'))), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
          isPrimary: true,
          isBusy: isOptionsUpdating,
          onClick: function onClick(event) {
            recordConnectStartEvent('stripe');
            handleSubmit(event);
          }
        }, Object(external_wp_i18n_["__"])('Proceed', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("p", null, stripeHelp));
      });
    }
  }, {
    key: "renderOauthConfig",
    value: function renderOauthConfig() {
      var _this2 = this;

      var recordConnectStartEvent = this.props.recordConnectStartEvent;
      var tosPrompt = lib_default()({
        mixedString: Object(external_wp_i18n_["__"])('By clicking "Connect," you agree to the {{tosLink}}Terms of Service{{/tosLink}}. Or {{manualConfigLink}}manually enter your Stripe API details{{/manualConfigLink}} instead.', 'woocommerce-admin'),
        components: {
          tosLink: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
            href: "https://wordpress.com/tos",
            target: "_blank",
            type: "external"
          }),
          manualConfigLink: Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
            isLink: true,
            onClick: function onClick() {
              _this2.setState({
                connectURL: null
              });

              recordConnectStartEvent('stripe');
            }
          })
        }
      });
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("p", null, this.renderConnectButton()), tosPrompt);
    }
  }, {
    key: "getConnectStep",
    value: function getConnectStep() {
      var _this$state = this.state,
          connectURL = _this$state.connectURL,
          isPending = _this$state.isPending,
          oAuthConnectFailed = _this$state.oAuthConnectFailed;
      var connectStep = {
        key: 'connect',
        label: Object(external_wp_i18n_["__"])('Connect your Stripe account', 'woocommerce-admin')
      };

      if (isPending) {
        return connectStep;
      }

      if (!oAuthConnectFailed && connectURL) {
        return _objectSpread(_objectSpread({}, connectStep), {}, {
          description: Object(external_wp_i18n_["__"])('A Stripe account is required to process payments.', 'woocommerce-admin'),
          content: this.renderOauthConfig()
        });
      }

      return _objectSpread(_objectSpread({}, connectStep), {}, {
        content: this.renderManualConfig()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          installStep = _this$props4.installStep,
          isOptionsUpdating = _this$props4.isOptionsUpdating;
      var isPending = this.state.isPending;
      return Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
        isVertical: true,
        isPending: !installStep.isComplete || isOptionsUpdating || isPending,
        currentStep: installStep.isComplete ? 'connect' : 'install',
        steps: [installStep, this.getConnectStep()]
      });
    }
  }]);

  return Stripe;
}(external_wp_element_["Component"]);

/* harmony default export */ var stripe = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select(external_wc_data_["OPTIONS_STORE_NAME"]),
      getOption = _select.getOption,
      isOptionsUpdating = _select.isOptionsUpdating;

  var _select2 = select(external_wc_data_["PLUGINS_STORE_NAME"]),
      getActivePlugins = _select2.getActivePlugins;

  return {
    activePlugins: getActivePlugins(),
    isOptionsUpdating: isOptionsUpdating(),
    stripeSettings: getOption('woocommerce_stripe_settings') || []
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  var _dispatch2 = dispatch(external_wc_data_["OPTIONS_STORE_NAME"]),
      updateOptions = _dispatch2.updateOptions;

  return {
    createNotice: createNotice,
    updateOptions: updateOptions
  };
}))(stripe_Stripe));
// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/square.js


















function square_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function square_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { square_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { square_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function square_createSuper(Derived) { var hasNativeReflectConstruct = square_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function square_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */











var square_Square = /*#__PURE__*/function (_Component) {
  inherits_default()(Square, _Component);

  var _super = square_createSuper(Square);

  function Square(props) {
    var _this;

    classCallCheck_default()(this, Square);

    _this = _super.call(this, props);
    _this.state = {
      isPending: false
    };
    _this.connect = _this.connect.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Square, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          createNotice = _this$props.createNotice,
          markConfigured = _this$props.markConfigured;
      var query = Object(external_wc_navigation_["getQuery"])(); // Handle redirect back from Square

      if (query['square-connect']) {
        if (query['square-connect'] === '1') {
          createNotice('success', Object(external_wp_i18n_["__"])('Square connected successfully.', 'woocommerce-admin'));
          markConfigured('square');
        }
      }
    }
  }, {
    key: "connect",
    value: function () {
      var _connect = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee() {
        var _this$props2, createNotice, hasCbdIndustry, options, recordConnectStartEvent, updateOptions, errorMessage, newWindow, result;

        return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props2 = this.props, createNotice = _this$props2.createNotice, hasCbdIndustry = _this$props2.hasCbdIndustry, options = _this$props2.options, recordConnectStartEvent = _this$props2.recordConnectStartEvent, updateOptions = _this$props2.updateOptions;
                this.setState({
                  isPending: true
                });
                updateOptions({
                  woocommerce_square_credit_card_settings: square_objectSpread(square_objectSpread({}, options.woocommerce_square_credit_card_settings), {}, {
                    enabled: 'yes'
                  })
                });
                errorMessage = Object(external_wp_i18n_["__"])('There was an error connecting to Square. Please try again or skip to connect later in store settings.', 'woocommerce-admin');
                recordConnectStartEvent('square');
                _context.prev = 5;
                newWindow = null;

                if (hasCbdIndustry) {
                  // It's necessary to declare the new tab before the async call,
                  // otherwise, it won't be possible to open it.
                  newWindow = window.open('/', '_blank');
                }

                _context.next = 10;
                return external_wp_apiFetch_default()({
                  path: external_wc_data_["WC_ADMIN_NAMESPACE"] + '/plugins/connect-square',
                  method: 'POST'
                });

              case 10:
                result = _context.sent;

                if (!(!result || !result.connectUrl)) {
                  _context.next = 16;
                  break;
                }

                this.setState({
                  isPending: false
                });
                createNotice('error', errorMessage);

                if (hasCbdIndustry) {
                  newWindow.close();
                }

                return _context.abrupt("return");

              case 16:
                this.setState({
                  isPending: true
                });
                this.redirect(result.connectUrl, newWindow);
                _context.next = 24;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context["catch"](5);
                this.setState({
                  isPending: false
                });
                createNotice('error', errorMessage);

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 20]]);
      }));

      function connect() {
        return _connect.apply(this, arguments);
      }

      return connect;
    }()
  }, {
    key: "redirect",
    value: function redirect(connectUrl, newWindow) {
      if (newWindow) {
        newWindow.location.href = connectUrl;
        window.location = Object(wc_admin_settings["f" /* getAdminLink */])('admin.php?page=wc-admin');
      } else {
        window.location = connectUrl;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var installStep = this.props.installStep;
      var isPending = this.state.isPending;
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
  }]);

  return Square;
}(external_wp_element_["Component"]);

/* harmony default export */ var square = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select(external_wc_data_["OPTIONS_STORE_NAME"]),
      getOption = _select.getOption,
      isResolving = _select.isResolving;

  var options = getOption('woocommerce_square_credit_card_settings');
  var optionsIsRequesting = isResolving('getOption', ['woocommerce_square_credit_card_settings']);
  return {
    options: options,
    optionsIsRequesting: optionsIsRequesting
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  var _dispatch2 = dispatch(external_wc_data_["OPTIONS_STORE_NAME"]),
      updateOptions = _dispatch2.updateOptions;

  return {
    createNotice: createNotice,
    updateOptions: updateOptions
  };
}))(square_Square));
// EXTERNAL MODULE: ./client/task-list/tasks/payments/methods/wcpay/index.js + 3 modules
var methods_wcpay = __webpack_require__(643);

// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__(38);

// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/paypal.js

















function paypal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function paypal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { paypal_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { paypal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function paypal_createSuper(Derived) { var hasNativeReflectConstruct = paypal_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function paypal_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/* global ppcp_onboarding */

/**
 * External dependencies
 */











var PAYPAL_PLUGIN = 'woocommerce-paypal-payments';
var WC_PAYPAL_NAMESPACE = '/wc-paypal/v1';
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
    var script = document.createElement('script');
    script.src = url;
    document.body.append(script); // Callback after scripts have loaded.

    script.onload = function () {
      onLoad();
    };

    window.PayPalCommerceGatewayOnboarding = data;
  }
}

function PaypalConnectButton(_ref) {
  var connectUrl = _ref.connectUrl,
      recordConnectStartEvent = _ref.recordConnectStartEvent;
  Object(external_wp_element_["useEffect"])(function () {
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
    onClick: function onClick() {
      return recordConnectStartEvent('paypal');
    }
  }, Object(external_wp_i18n_["__"])('Connect', 'woocommerce-admin'));
}

var paypal_PayPal = /*#__PURE__*/function (_Component) {
  inherits_default()(PayPal, _Component);

  var _super = paypal_createSuper(PayPal);

  function PayPal(props) {
    var _this;

    classCallCheck_default()(this, PayPal);

    _this = _super.call(this, props);
    _this.state = {
      autoConnectFailed: false,
      connectURL: ''
    };
    _this.enablePaypalPlugin = _this.enablePaypalPlugin.bind(assertThisInitialized_default()(_this));
    _this.setCredentials = _this.setCredentials.bind(assertThisInitialized_default()(_this));
    _this.validate = _this.validate.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(PayPal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var createNotice = this.props.createNotice;
      var query = Object(external_wc_navigation_["getQuery"])(); // Handle redirect back from PayPal

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
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var activePlugins = this.props.activePlugins;

      if (!prevProps.activePlugins.includes(PAYPAL_PLUGIN) && activePlugins.includes(PAYPAL_PLUGIN)) {
        this.fetchOAuthConnectURLAndOnboardingSetup();
      }
    }
  }, {
    key: "fetchOAuthConnectURLAndOnboardingSetup",
    value: function () {
      var _fetchOAuthConnectURLAndOnboardingSetup = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee() {
        var _this2 = this;

        var _this$props, activePlugins, createNotice, result;

        return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, activePlugins = _this$props.activePlugins, createNotice = _this$props.createNotice;

                if (activePlugins.includes(PAYPAL_PLUGIN)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                this.setState({
                  isPending: true
                });
                _context.prev = 4;
                _context.next = 7;
                return external_wp_apiFetch_default()({
                  path: WC_PAYPAL_NAMESPACE + '/onboarding/get-params',
                  method: 'POST',
                  data: {
                    environment: 'production',
                    returnUrlArgs: {
                      ppcpobw: '1'
                    }
                  }
                });

              case 7:
                result = _context.sent;

                if (!(!result || !result.signupLink)) {
                  _context.next = 11;
                  break;
                }

                this.setState({
                  autoConnectFailed: true,
                  isPending: false
                });
                return _context.abrupt("return");

              case 11:
                loadOnboardingScript(result.scriptURL, result.scriptData, function () {
                  _this2.setState({
                    connectURL: result.signupLink,
                    isPending: false
                  });
                });
                _context.next = 18;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](4);

                if (_context.t0 && _context.t0.data && _context.t0.data.status === 500) {
                  createNotice('error', Object(external_wp_i18n_["__"])('There was a problem with the Paypal onboarding setup, please fill the fields in manually.', 'woocommerce-admin'));
                }

                this.setState({
                  autoConnectFailed: true,
                  isPending: false
                });

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 14]]);
      }));

      function fetchOAuthConnectURLAndOnboardingSetup() {
        return _fetchOAuthConnectURLAndOnboardingSetup.apply(this, arguments);
      }

      return fetchOAuthConnectURLAndOnboardingSetup;
    }()
  }, {
    key: "enablePaypalPlugin",
    value: function () {
      var _enablePaypalPlugin = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee2(skipPpcpSettingsUpdate) {
        var _this$props2, createNotice, updateOptions, markConfigured, options, updatedOptions, update;

        return external_regeneratorRuntime_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$props2 = this.props, createNotice = _this$props2.createNotice, updateOptions = _this$props2.updateOptions, markConfigured = _this$props2.markConfigured, options = _this$props2.options;
                updatedOptions = {
                  'woocommerce_ppcp-gateway_settings': {
                    enabled: 'yes'
                  }
                };

                if (!skipPpcpSettingsUpdate) {
                  updatedOptions['woocommerce-ppcp-settings'] = paypal_objectSpread(paypal_objectSpread({}, options), {}, {
                    enabled: true
                  });
                }

                _context2.next = 5;
                return updateOptions(updatedOptions);

              case 5:
                update = _context2.sent;

                if (update.success) {
                  createNotice('success', Object(external_wp_i18n_["__"])('PayPal connected successfully.', 'woocommerce-admin'));
                  markConfigured('paypal');
                } else {
                  createNotice('error', Object(external_wp_i18n_["__"])('There was a problem saving your payment settings.', 'woocommerce-admin'));
                }

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function enablePaypalPlugin(_x) {
        return _enablePaypalPlugin.apply(this, arguments);
      }

      return enablePaypalPlugin;
    }()
  }, {
    key: "setCredentials",
    value: function () {
      var _setCredentials = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee3(values) {
        var createNotice, result;
        return external_regeneratorRuntime_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                createNotice = this.props.createNotice;
                _context3.prev = 1;
                _context3.next = 4;
                return external_wp_apiFetch_default()({
                  path: WC_PAYPAL_NAMESPACE + '/onboarding/set-credentials',
                  method: 'POST',
                  data: paypal_objectSpread({
                    environment: 'production'
                  }, values)
                });

              case 4:
                result = _context3.sent;

                if (!(result && result.data)) {
                  _context3.next = 9;
                  break;
                }

                createNotice('error', Object(external_wp_i18n_["__"])('There was a problem updating the credentials.', 'woocommerce-admin'));
                _context3.next = 11;
                break;

              case 9:
                _context3.next = 11;
                return this.enablePaypalPlugin(true);

              case 11:
                _context3.next = 18;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](1);

                if (!(_context3.t0 && _context3.t0.data && _context3.t0.data.status === 404)) {
                  _context3.next = 18;
                  break;
                }

                _context3.next = 18;
                return this.updateManualSettings(values);

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 13]]);
      }));

      function setCredentials(_x2) {
        return _setCredentials.apply(this, arguments);
      }

      return setCredentials;
    }()
  }, {
    key: "updateManualSettings",
    value: function () {
      var _updateManualSettings = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee4(values) {
        var _this$props3, createNotice, options, updateOptions, markConfigured, productionValues, optionValues, update;

        return external_regeneratorRuntime_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this$props3 = this.props, createNotice = _this$props3.createNotice, options = _this$props3.options, updateOptions = _this$props3.updateOptions, markConfigured = _this$props3.markConfigured;
                productionValues = Object.keys(values).reduce(function (vals, key) {
                  var prodKey = key + '_production';
                  return paypal_objectSpread(paypal_objectSpread({}, vals), {}, defineProperty_default()({}, prodKey, values[key]));
                }, {});
                /**
                 * merchant data can be the same across sandbox and production, that's why we set it as
                 * standalone as well.
                 */

                optionValues = paypal_objectSpread(paypal_objectSpread({}, options), {}, {
                  enabled: true,
                  sandbox_on: false,
                  merchant_email: values.merchant_email,
                  merchant_id: values.merchant_id
                }, productionValues);
                _context4.next = 5;
                return updateOptions({
                  'woocommerce-ppcp-settings': optionValues,
                  'woocommerce_ppcp-gateway_settings': {
                    enabled: 'yes'
                  }
                });

              case 5:
                update = _context4.sent;

                if (update.success) {
                  createNotice('success', Object(external_wp_i18n_["__"])('PayPal connected successfully.', 'woocommerce-admin'));
                  markConfigured('paypal');
                } else {
                  createNotice('error', Object(external_wp_i18n_["__"])('There was a problem saving your payment settings.', 'woocommerce-admin'));
                }

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function updateManualSettings(_x3) {
        return _updateManualSettings.apply(this, arguments);
      }

      return updateManualSettings;
    }()
  }, {
    key: "getInitialConfigValues",
    value: function getInitialConfigValues() {
      var options = this.props.options;
      return ['merchant_email', 'merchant_id', 'client_id', 'client_secret'].reduce(function (initialVals, key) {
        return paypal_objectSpread(paypal_objectSpread({}, initialVals), {}, defineProperty_default()({}, key, options && options[key + '_production'] ? options[key + '_production'] : ''));
      }, {});
    }
  }, {
    key: "validate",
    value: function validate(values) {
      var errors = {};

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
  }, {
    key: "renderManualConfig",
    value: function renderManualConfig() {
      var isOptionsUpdating = this.props.isOptionsUpdating;
      var stripeHelp = lib_default()({
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
        onSubmitCallback: this.setCredentials,
        validate: this.validate
      }, function (_ref2) {
        var getInputProps = _ref2.getInputProps,
            handleSubmit = _ref2.handleSubmit;
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
  }, {
    key: "renderConnectFields",
    value: function renderConnectFields() {
      var _this$state = this.state,
          autoConnectFailed = _this$state.autoConnectFailed,
          connectURL = _this$state.connectURL;
      var recordConnectStartEvent = this.props.recordConnectStartEvent;

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
  }, {
    key: "getConnectStep",
    value: function getConnectStep() {
      var isRequestingOptions = this.props.isRequestingOptions;
      return {
        key: 'connect',
        label: Object(external_wp_i18n_["__"])('Connect your PayPal account', 'woocommerce-admin'),
        description: Object(external_wp_i18n_["__"])('A PayPal account is required to process payments. Connect your store to your PayPal account.', 'woocommerce-admin'),
        content: isRequestingOptions ? null : this.renderConnectFields()
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          installStep = _this$props4.installStep,
          isRequestingOptions = _this$props4.isRequestingOptions,
          isOptionsUpdating = _this$props4.isOptionsUpdating;
      var isPending = this.state.isPending;
      return Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
        isVertical: true,
        isPending: !installStep.isComplete || isPending || isRequestingOptions || isOptionsUpdating,
        currentStep: installStep.isComplete ? 'connect' : 'install',
        steps: [installStep, this.getConnectStep()]
      });
    }
  }]);

  return PayPal;
}(external_wp_element_["Component"]);

paypal_PayPal.defaultProps = {
  manualConfig: false // WCS is not required for the PayPal OAuth flow, so we can default to smooth connection.

};
/* harmony default export */ var paypal = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select(external_wc_data_["OPTIONS_STORE_NAME"]),
      getOption = _select.getOption,
      isOptionsUpdating = _select.isOptionsUpdating,
      hasFinishedResolution = _select.hasFinishedResolution;

  var _select2 = select(external_wc_data_["PLUGINS_STORE_NAME"]),
      getActivePlugins = _select2.getActivePlugins;

  var paypalOptions = getOption('woocommerce-ppcp-settings');
  var isRequestingOptions = !hasFinishedResolution('getOption', ['woocommerce-ppcp-settings']);
  var activePlugins = getActivePlugins();
  return {
    activePlugins: activePlugins,
    isOptionsUpdating: isOptionsUpdating(),
    options: paypalOptions,
    isRequestingOptions: isRequestingOptions
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  var _dispatch2 = dispatch(external_wc_data_["OPTIONS_STORE_NAME"]),
      updateOptions = _dispatch2.updateOptions;

  return {
    createNotice: createNotice,
    updateOptions: updateOptions
  };
}))(paypal_PayPal));

// EXTERNAL MODULE: ./client/dashboard/utils.js
var utils = __webpack_require__(219);

// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/mercadopago.js




/**
 * External dependencies
 */







/**
 * Internal dependencies
 */


var MERCADOPAGO_PLUGIN = 'woocommerce-mercadopago';
var mercadopago_MercadoPago = function MercadoPago(_ref) {
  var installStep = _ref.installStep,
      markConfigured = _ref.markConfigured;

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select(external_wc_data_["SETTINGS_STORE_NAME"]),
        getSettings = _select.getSettings;

    var _getSettings = getSettings('general'),
        _getSettings$general = _getSettings.general,
        generalSettings = _getSettings$general === void 0 ? {} : _getSettings$general;

    return {
      countryCode: Object(utils["b" /* getCountryCode */])(generalSettings.woocommerce_default_country)
    };
  }),
      countryCode = _useSelect.countryCode;

  return Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
    isVertical: true,
    isPending: !installStep.isComplete,
    currentStep: installStep.isComplete ? 'connect' : 'install',
    steps: [installStep, {
      key: 'connect',
      label: Object(external_wp_i18n_["__"])('Connect to your Mercado Pago account', 'woocommerce-admin'),
      content: Object(external_wp_element_["createElement"])(mercadopago_MercadoPagoCredentialsStep, {
        countryCode: countryCode,
        onFinish: function onFinish() {
          return markConfigured('mercadopago');
        }
      })
    }]
  });
};

var mercadopago_MercadoPagoCredentialsStep = function MercadoPagoCredentialsStep(_ref2) {
  var countryCode = _ref2.countryCode,
      onFinish = _ref2.onFinish;

  var getRegistrationURL = function getRegistrationURL() {
    var mercadoPagoURL = 'https://www.mercadopago.com';

    if (!['AR', 'BR', 'CL', 'CO', 'MX', 'PE', 'UY'].includes(countryCode)) {
      return mercadoPagoURL;
    } // As each country has its own domain, we will return the correct one. Otherwise, for example, a Spanish speaker could be redirected to a Mercado Pago page in Portuguese, etc.


    return "".concat(mercadoPagoURL, ".").concat(countryCode.toLowerCase(), "/registration-company?confirmation_url=").concat(mercadoPagoURL, ".").concat(countryCode.toLowerCase(), "%2Fcomo-cobrar");
  };

  var settingsLink = Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
    href: "".concat(wc_admin_settings["a" /* ADMIN_URL */], "admin.php?page=wc-settings&tab=checkout"),
    target: "_blank",
    type: "external"
  });
  var accountLink = Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
    href: getRegistrationURL(),
    target: "_blank",
    type: "external"
  });
  var configureText = lib_default()({
    mixedString: Object(external_wp_i18n_["__"])('Mercado Pago can be configured under your {{settingsLink}}store settings.{{/settingsLink}} Create your Mercado Pago account {{accountLink}}here.{{/accountLink}}', 'woocommerce-admin'),
    components: {
      accountLink: accountLink,
      settingsLink: settingsLink
    }
  });
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("p", null, configureText), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isPrimary: true,
    onClick: onFinish
  }, Object(external_wp_i18n_["__"])('Continue', 'woocommerce-admin')));
};
// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/klarna.js









function klarna_createSuper(Derived) { var hasNativeReflectConstruct = klarna_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function klarna_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */







var klarna_Klarna = /*#__PURE__*/function (_Component) {
  inherits_default()(Klarna, _Component);

  var _super = klarna_createSuper(Klarna);

  function Klarna(props) {
    var _this;

    classCallCheck_default()(this, Klarna);

    _this = _super.call(this, props);
    _this.continue = _this.continue.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Klarna, [{
    key: "continue",
    value: function _continue() {
      var _this$props = this.props,
          markConfigured = _this$props.markConfigured,
          plugin = _this$props.plugin;
      var slug = plugin === 'checkout' ? 'klarna_checkout' : 'klarna_payments';
      markConfigured(slug);
    }
  }, {
    key: "renderConnectStep",
    value: function renderConnectStep() {
      var plugin = this.props.plugin;
      var slug = plugin === 'checkout' ? 'klarna-checkout' : 'klarna-payments';
      var section = plugin === 'checkout' ? 'kco' : 'klarna_payments';
      var link = Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
        href: wc_admin_settings["a" /* ADMIN_URL */] + 'admin.php?page=wc-settings&tab=checkout&section=' + section,
        target: "_blank",
        type: "external"
      });
      var helpLink = Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
        href: 'https://docs.woocommerce.com/document/' + slug + '/#section-3',
        target: "_blank",
        type: "external"
      });
      var configureText = lib_default()({
        mixedString: Object(external_wp_i18n_["__"])('Klarna can be configured under your {{link}}store settings{{/link}}. Figure out {{helpLink}}what you need{{/helpLink}}.', 'woocommerce-admin'),
        components: {
          link: link,
          helpLink: helpLink
        }
      });
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("p", null, configureText), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isPrimary: true,
        onClick: this.continue
      }, Object(external_wp_i18n_["__"])('Continue', 'woocommerce-admin')));
    }
  }, {
    key: "render",
    value: function render() {
      var installStep = this.props.installStep;
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
  }]);

  return Klarna;
}(external_wp_element_["Component"]);

/* harmony default export */ var klarna = (klarna_Klarna);
// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/eway.js














function eway_createSuper(Derived) { var hasNativeReflectConstruct = eway_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function eway_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */









var eway_EWay = /*#__PURE__*/function (_Component) {
  inherits_default()(EWay, _Component);

  var _super = eway_createSuper(EWay);

  function EWay() {
    var _this;

    classCallCheck_default()(this, EWay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "getInitialConfigValues", function () {
      return {
        customer_api: '',
        customer_password: ''
      };
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "validate", function (values) {
      var errors = {};

      if (!values.customer_api) {
        errors.customer_api = Object(external_wp_i18n_["__"])('Please enter your customer API key ', 'woocommerce-admin');
      }

      if (!values.customer_password) {
        errors.customer_password = Object(external_wp_i18n_["__"])('Please enter your customer password', 'woocommerce-admin');
      }

      return errors;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "updateSettings", /*#__PURE__*/function () {
      var _ref = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee(values) {
        var _this$props, updateOptions, createNotice, markConfigured, update;

        return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = _this.props, updateOptions = _this$props.updateOptions, createNotice = _this$props.createNotice, markConfigured = _this$props.markConfigured;
                _context.next = 3;
                return updateOptions({
                  woocommerce_eway_settings: {
                    customer_api: values.customer_api,
                    customer_password: values.customer_password,
                    enabled: 'yes'
                  }
                });

              case 3:
                update = _context.sent;

                if (update.success) {
                  markConfigured('eway');
                  createNotice('success', Object(external_wp_i18n_["__"])('eWAY connected successfully', 'woocommerce-admin'));
                } else {
                  createNotice('error', Object(external_wp_i18n_["__"])('There was a problem saving your payment settings', 'woocommerce-admin'));
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  createClass_default()(EWay, [{
    key: "renderConnectStep",
    value: function renderConnectStep() {
      var _this$props2 = this.props,
          isOptionsRequesting = _this$props2.isOptionsRequesting,
          recordConnectStartEvent = _this$props2.recordConnectStartEvent;
      var helpText = lib_default()({
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
        onSubmitCallback: this.updateSettings,
        validate: this.validate
      }, function (_ref2) {
        var getInputProps = _ref2.getInputProps,
            handleSubmit = _ref2.handleSubmit;
        return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
          label: Object(external_wp_i18n_["__"])('Customer API Key', 'woocommerce-admin'),
          required: true
        }, getInputProps('customer_api'))), Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
          label: Object(external_wp_i18n_["__"])('Customer Password', 'woocommerce-admin'),
          required: true
        }, getInputProps('customer_password'))), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
          isPrimary: true,
          isBusy: isOptionsRequesting,
          onClick: function onClick(event) {
            recordConnectStartEvent('eway');
            handleSubmit(event);
          }
        }, Object(external_wp_i18n_["__"])('Proceed', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("p", null, helpText));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          installStep = _this$props3.installStep,
          isOptionsRequesting = _this$props3.isOptionsRequesting;
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
  }]);

  return EWay;
}(external_wp_element_["Component"]);

/* harmony default export */ var eway = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select(external_wc_data_["OPTIONS_STORE_NAME"]),
      isOptionsUpdating = _select.isOptionsUpdating;

  var isOptionsRequesting = isOptionsUpdating();
  return {
    isOptionsRequesting: isOptionsRequesting
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  var _dispatch2 = dispatch(external_wc_data_["OPTIONS_STORE_NAME"]),
      updateOptions = _dispatch2.updateOptions;

  return {
    createNotice: createNotice,
    updateOptions: updateOptions
  };
}))(eway_EWay));
// CONCATENATED MODULE: ./client/task-list/tasks/payments/methods/razorpay.js





/**
 * External dependencies
 */






var INITIAL_CONFIG = {
  key_id: '',
  key_secret: ''
};

var razorpay_validate = function validate(values) {
  var errors = {};

  if (!values.key_id) {
    errors.key_id = Object(external_wp_i18n_["__"])('Please enter your Key ID', 'woocommerce-admin');
  }

  if (!values.key_secret) {
    errors.key_secret = Object(external_wp_i18n_["__"])('Please enter your Key Secret', 'woocommerce-admin');
  }

  return errors;
};

var razorpay_updateSettings = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee(values, createNotice, markConfigured, updateOptions) {
    var update;
    return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return updateOptions({
              woocommerce_razorpay_settings: {
                key_id: values.key_id,
                key_secret: values.key_secret,
                enabled: 'yes'
              }
            });

          case 2:
            update = _context.sent;

            if (update.success) {
              markConfigured('razorpay');
              createNotice('success', Object(external_wp_i18n_["__"])('Razorpay connected successfully', 'woocommerce-admin'));
            } else {
              createNotice('error', Object(external_wp_i18n_["__"])('There was a problem saving your payment settings', 'woocommerce-admin'));
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function updateSettings(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

var razorpay_renderConnectStep = function renderConnectStep(_ref2) {
  var createNotice = _ref2.createNotice,
      isOptionsRequesting = _ref2.isOptionsRequesting,
      markConfigured = _ref2.markConfigured,
      updateOptions = _ref2.updateOptions;
  var helpText = lib_default()({
    mixedString: Object(external_wp_i18n_["__"])('Your key details can be obtained from your {{link}}Razorpay account{{/link}}', 'woocommerce-admin'),
    components: {
      link: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
        href: "https://dashboard.razorpay.com/#/access/signin",
        target: "_blank",
        type: "external"
      })
    }
  });

  var onSubmit = function onSubmit(values) {
    return razorpay_updateSettings(values, createNotice, markConfigured, updateOptions);
  };

  return Object(external_wp_element_["createElement"])(external_wc_components_["Form"], {
    initialValues: INITIAL_CONFIG,
    onSubmitCallback: onSubmit,
    validate: razorpay_validate
  }, function (_ref3) {
    var getInputProps = _ref3.getInputProps,
        handleSubmit = _ref3.handleSubmit;
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

var razorpay_Razorpay = function Razorpay(_ref4) {
  var createNotice = _ref4.createNotice,
      installStep = _ref4.installStep,
      isOptionsRequesting = _ref4.isOptionsRequesting,
      markConfigured = _ref4.markConfigured,
      updateOptions = _ref4.updateOptions;
  return Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
    isVertical: true,
    isPending: !installStep.isComplete || isOptionsRequesting,
    currentStep: installStep.isComplete ? 'connect' : 'install',
    steps: [installStep, {
      key: 'connect',
      label: Object(external_wp_i18n_["__"])('Connect your Razorpay account', 'woocommerce-admin'),
      content: razorpay_renderConnectStep({
        createNotice: createNotice,
        isOptionsRequesting: isOptionsRequesting,
        markConfigured: markConfigured,
        updateOptions: updateOptions
      })
    }]
  });
};
/* harmony default export */ var methods_razorpay = (function (_ref5) {
  var installStep = _ref5.installStep,
      markConfigured = _ref5.markConfigured;
  var isOptionsUpdating = Object(external_wp_data_["useSelect"])(function (select) {
    return select(external_wc_data_["OPTIONS_STORE_NAME"]).isOptionsUpdating;
  });
  var isOptionsRequesting = isOptionsUpdating();

  var _useDispatch = Object(external_wp_data_["useDispatch"])('core/notices'),
      createNotice = _useDispatch.createNotice;

  var _useDispatch2 = Object(external_wp_data_["useDispatch"])(external_wc_data_["OPTIONS_STORE_NAME"]),
      updateOptions = _useDispatch2.updateOptions;

  return Object(external_wp_element_["createElement"])(razorpay_Razorpay, {
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





var mollie_Mollie = function Mollie(_ref) {
  var installStep = _ref.installStep,
      markConfigured = _ref.markConfigured;
  return Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
    isVertical: true,
    isPending: !installStep.isComplete,
    currentStep: installStep.isComplete ? 'connect' : 'install',
    steps: [installStep, {
      key: 'connect',
      label: Object(external_wp_i18n_["__"])('Connect your Mollie account', 'woocommerce-admin'),
      content: Object(external_wp_element_["createElement"])(mollie_MollieConnectStep, {
        onFinish: function onFinish() {
          markConfigured('mollie');
        }
      })
    }]
  });
};

var mollie_MollieConnectStep = function MollieConnectStep(_ref2) {
  var onFinish = _ref2.onFinish;
  var settingsLink = Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
    href: "".concat(wc_admin_settings["a" /* ADMIN_URL */], "admin.php?page=wc-settings&tab=mollie_settings#mollie-payments-for-woocommerce"),
    target: "_blank",
    type: "external"
  });
  var accountLink = Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
    href: 'https://www.mollie.com/dashboard/signup',
    target: "_blank",
    type: "external"
  });
  var configureText = lib_default()({
    mixedString: Object(external_wp_i18n_["__"])('Create a {{accountLink}}Mollie account{{/accountLink}} and finish the configuration in the {{settingsLink}}Mollie settings.{{/settingsLink}}', 'woocommerce-admin'),
    components: {
      accountLink: accountLink,
      settingsLink: settingsLink
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





var payu_india_PayUIndia = function PayUIndia(_ref) {
  var installStep = _ref.installStep,
      markConfigured = _ref.markConfigured;
  return Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
    isVertical: true,
    isPending: !installStep.isComplete,
    currentStep: installStep.isComplete ? 'connect' : 'install',
    steps: [installStep, {
      key: 'connect',
      label: Object(external_wp_i18n_["__"])('Connect to your PayU account', 'woocommerce-admin'),
      content: Object(external_wp_element_["createElement"])(payu_india_PayUCredentialsStep, {
        onFinish: function onFinish() {
          markConfigured('payubiz');
        }
      })
    }]
  });
};

var payu_india_PayUCredentialsStep = function PayUCredentialsStep(_ref2) {
  var onFinish = _ref2.onFinish;
  var settingsLink = Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
    href: "".concat(wc_admin_settings["a" /* ADMIN_URL */], "admin.php?page=wc-settings&tab=checkout&section=payubiz"),
    target: "_blank",
    type: "external"
  });
  var accountLink = Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
    href: 'https://onboarding.payu.in/app/account',
    target: "_blank",
    type: "external"
  });
  var configureText = lib_default()({
    mixedString: Object(external_wp_i18n_["__"])('PayU can be configured under your {{settingsLink}}store settings.{{/settingsLink}} Create your PayU account {{accountLink}}here.{{/accountLink}}', 'woocommerce-admin'),
    components: {
      accountLink: accountLink,
      settingsLink: settingsLink
    }
  });
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("p", null, configureText), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isPrimary: true,
    onClick: onFinish
  }, Object(external_wp_i18n_["__"])('Continue', 'woocommerce-admin')));
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(276);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(159);

// CONCATENATED MODULE: ./client/task-list/tasks/payments/generic-payment-step.js
















function generic_payment_step_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function generic_payment_step_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { generic_payment_step_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { generic_payment_step_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */






function GenericPaymentStep(_ref) {
  var installStep = _ref.installStep,
      markConfigured = _ref.markConfigured,
      methodConfig = _ref.methodConfig,
      recordConnectStartEvent = _ref.recordConnectStartEvent;

  var _useDispatch = Object(external_wp_data_["useDispatch"])(external_wc_data_["OPTIONS_STORE_NAME"]),
      updateOptions = _useDispatch.updateOptions;

  var _useDispatch2 = Object(external_wp_data_["useDispatch"])('core/notices'),
      createNotice = _useDispatch2.createNotice;

  var isOptionsRequesting = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select(external_wc_data_["OPTIONS_STORE_NAME"]),
        isOptionsUpdating = _select.isOptionsUpdating;

    return isOptionsUpdating();
  });

  var getInitialConfigValues = function getInitialConfigValues() {
    if (methodConfig && methodConfig.fields) {
      return methodConfig.fields.reduce(function (data, field) {
        return generic_payment_step_objectSpread(generic_payment_step_objectSpread({}, data), {}, defineProperty_default()({}, field.name, ''));
      }, {});
    }
  };

  var validate = function validate(values) {
    if (methodConfig && methodConfig.fields) {
      return methodConfig.fields.reduce(function (errors, field) {
        if (!values[field.name]) {
          // Matches any word that is capitalized aside from abrevitions like ID.
          var title = field.title.replace(/([A-Z][a-z]+)/, function (val) {
            return val.toLowerCase();
          });
          return generic_payment_step_objectSpread(generic_payment_step_objectSpread({}, errors), {}, defineProperty_default()({}, field.name, Object(external_wp_i18n_["__"])('Please enter your ') + title));
        }

        return errors;
      }, {});
    }

    return {};
  };

  var updateSettings = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee(values) {
      var options, update;
      return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // Because the GenericPaymentStep extension only works with the South African Rand
              // currency, force the store to use it while setting the GenericPaymentStep settings
              options = methodConfig.getOptions ? methodConfig.getOptions(values) : null;

              if (options) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              _context.next = 5;
              return updateOptions(generic_payment_step_objectSpread({}, options));

            case 5:
              update = _context.sent;

              if (update.success) {
                markConfigured(methodConfig.key);
                createNotice('success', methodConfig.title + Object(external_wp_i18n_["__"])(' connected successfully', 'woocommerce-admin'));
              } else {
                createNotice('error', Object(external_wp_i18n_["__"])('There was a problem saving your payment settings', 'woocommerce-admin'));
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function updateSettings(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var renderConnectStep = function renderConnectStep() {
    var helpText = lib_default()({
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
      onSubmitCallback: updateSettings,
      validate: validate
    }, function (_ref3) {
      var getInputProps = _ref3.getInputProps,
          handleSubmit = _ref3.handleSubmit;
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, (methodConfig.fields || []).map(function (field) {
        return Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
          key: field.name,
          label: field.title,
          required: true
        }, getInputProps(field.name)));
      }), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isPrimary: true,
        isBusy: isOptionsRequesting,
        onClick: function onClick(event) {
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








function methods_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function methods_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { methods_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { methods_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



















var wcAdminAssetUrl = Object(wc_admin_settings["g" /* getSetting */])('wcAdminAssetUrl', '');

var methods_getPaymentsSettingsUrl = function getPaymentsSettingsUrl(methodKey) {
  return Object(wc_admin_settings["f" /* getAdminLink */])('admin.php?page=wc-settings&tab=checkout&section=' + methodKey);
};

var methodDefaults = {
  isConfigured: true
};
function getPaymentMethods(_ref) {
  var activePlugins = _ref.activePlugins,
      countryCode = _ref.countryCode,
      createNotice = _ref.createNotice,
      installAndActivatePlugins = _ref.installAndActivatePlugins,
      onboardingStatus = _ref.onboardingStatus,
      options = _ref.options,
      profileItems = _ref.profileItems,
      paypalOnboardingStatus = _ref.paypalOnboardingStatus,
      loadingPaypalStatus = _ref.loadingPaypalStatus;
  var _onboardingStatus$str = onboardingStatus.stripeSupportedCountries,
      stripeSupportedCountries = _onboardingStatus$str === void 0 ? [] : _onboardingStatus$str,
      _onboardingStatus$wcP = onboardingStatus.wcPayIsConnected,
      wcPayIsConnected = _onboardingStatus$wcP === void 0 ? false : _onboardingStatus$wcP,
      _onboardingStatus$ena = onboardingStatus.enabledPaymentGateways,
      enabledPaymentGateways = _onboardingStatus$ena === void 0 ? [] : _onboardingStatus$ena;
  var hasCbdIndustry = (profileItems.industry || []).some(function (_ref2) {
    var slug = _ref2.slug;
    return slug === 'cbd-other-hemp-derived-products';
  }); // Whether publishable and secret keys are filled for given mode.

  var isStripeConfigured = options.woocommerce_stripe_settings && (options.woocommerce_stripe_settings.testmode === 'no' ? options.woocommerce_stripe_settings.publishable_key && options.woocommerce_stripe_settings.secret_key : options.woocommerce_stripe_settings.test_publishable_key && options.woocommerce_stripe_settings.test_secret_key);
  var methods = [{
    key: 'stripe',
    title: Object(external_wp_i18n_["__"])('Credit cards - powered by Stripe', 'woocommerce-admin'),
    content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('Accept debit and credit cards in 135+ currencies, methods such as Alipay, ' + 'and one-touch checkout with Apple Pay.', 'woocommerce-admin')),
    before: Object(external_wp_element_["createElement"])("img", {
      src: wc_admin_settings["e" /* WC_ASSET_URL */] + 'images/stripe.png',
      alt: ""
    }),
    visible: stripeSupportedCountries.includes(countryCode) && !hasCbdIndustry,
    plugins: ['woocommerce-gateway-stripe'],
    container: Object(external_wp_element_["createElement"])(stripe, null),
    isConfigured: isStripeConfigured,
    isEnabled: options.woocommerce_stripe_settings && options.woocommerce_stripe_settings.enabled === 'yes',
    optionName: 'woocommerce_stripe_settings',
    manageUrl: methods_getPaymentsSettingsUrl('stripe')
  }, {
    key: 'paystack',
    title: Object(external_wp_i18n_["__"])('Paystack', 'woocommerce-admin'),
    content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('Paystack helps African merchants accept one-time and recurring payments online with a modern, safe, and secure payment gateway.', 'woocommerce-admin')),
    before: Object(external_wp_element_["createElement"])("img", {
      src: wcAdminAssetUrl + 'onboarding/paystack.png',
      alt: "Paystack logo"
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
    getOptions: function getOptions(values) {
      // Paystack only supports NGN (₦), GHS (₵), USD ($) or ZAR (R)
      return {
        woocommerce_currency: 'ZAR',
        woocommerce_paystack_settings: methods_objectSpread(methods_objectSpread({}, values), {}, {
          testmode: 'no'
        })
      };
    },
    manageUrl: methods_getPaymentsSettingsUrl('paystack')
  }, {
    key: 'payfast',
    title: Object(external_wp_i18n_["__"])('PayFast', 'woocommerce-admin'),
    content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('The PayFast extension for WooCommerce enables you to accept payments by Credit Card and EFT via one of South Africa’s most popular payment gateways. No setup fees or monthly subscription costs.', 'woocommerce-admin'), Object(external_wp_element_["createElement"])("p", null, Object(external_wp_i18n_["__"])('Selecting this extension will configure your store to use South African rands as the selected currency.', 'woocommerce-admin'))),
    before: Object(external_wp_element_["createElement"])("img", {
      src: wc_admin_settings["e" /* WC_ASSET_URL */] + 'images/payfast.png',
      alt: "PayFast logo"
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
    getOptions: function getOptions(values) {
      return {
        woocommerce_currency: 'ZAR',
        woocommerce_payfast_settings: methods_objectSpread(methods_objectSpread({}, values), {}, {
          testmode: 'no'
        })
      };
    },
    manageUrl: methods_getPaymentsSettingsUrl('stripe')
  }, {
    key: 'mercadopago',
    title: Object(external_wp_i18n_["__"])('Mercado Pago Checkout Pro & Custom', 'woocommerce-admin'),
    content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('Accept credit and debit cards, offline (cash or bank transfer) and logged-in payments with money in Mercado Pago. Safe and secure payments with the leading payment processor in LATAM.', 'woocommerce-admin')),
    before: Object(external_wp_element_["createElement"])("img", {
      src: wcAdminAssetUrl + 'onboarding/mercadopago.png',
      alt: ""
    }),
    visible: ['AR', 'BR', 'CL', 'CO', 'MX', 'PE', 'UY'].includes(countryCode),
    plugins: [MERCADOPAGO_PLUGIN],
    container: Object(external_wp_element_["createElement"])(mercadopago_MercadoPago, null),
    isConfigured: activePlugins.includes(MERCADOPAGO_PLUGIN),
    isEnabled: options['woocommerce_woo-mercado-pago-basic_settings'] && options['woocommerce_woo-mercado-pago-basic_settings'].enabled === 'yes',
    optionName: 'woocommerce_woo-mercado-pago-basic_settings',
    manageUrl: methods_getPaymentsSettingsUrl('woo-mercado-pago-basic')
  }, {
    key: 'paypal',
    title: Object(external_wp_i18n_["__"])('PayPal Payments', 'woocommerce-admin'),
    content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])("Safe and secure payments using credit cards or your customer's PayPal account.", 'woocommerce-admin')),
    before: Object(external_wp_element_["createElement"])("img", {
      src: wc_admin_settings["e" /* WC_ASSET_URL */] + 'images/paypal.png',
      alt: ""
    }),
    visible: countryCode !== 'IN' && !hasCbdIndustry,
    plugins: [PAYPAL_PLUGIN],
    container: Object(external_wp_element_["createElement"])(paypal, null),
    isConfigured: paypalOnboardingStatus && paypalOnboardingStatus.production && paypalOnboardingStatus.production.onboarded,
    isEnabled: enabledPaymentGateways.includes('ppcp-gateway'),
    optionName: 'woocommerce_ppcp-gateway_settings',
    loading: activePlugins.includes(PAYPAL_PLUGIN) ? loadingPaypalStatus : false,
    manageUrl: methods_getPaymentsSettingsUrl('ppcp-gateway')
  }, {
    key: 'klarna_checkout',
    title: Object(external_wp_i18n_["__"])('Klarna Checkout', 'woocommerce-admin'),
    content: Object(external_wp_i18n_["__"])('Choose the payment that you want, pay now, pay later or slice it. No credit card numbers, no passwords, no worries.', 'woocommerce-admin'),
    before: Object(external_wp_element_["createElement"])("img", {
      src: wc_admin_settings["e" /* WC_ASSET_URL */] + 'images/klarna-black.png',
      alt: ""
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
    manageUrl: methods_getPaymentsSettingsUrl('kco')
  }, {
    key: 'klarna_payments',
    title: Object(external_wp_i18n_["__"])('Klarna Payments', 'woocommerce-admin'),
    content: Object(external_wp_i18n_["__"])('Choose the payment that you want, pay now, pay later or slice it. No credit card numbers, no passwords, no worries.', 'woocommerce-admin'),
    before: Object(external_wp_element_["createElement"])("img", {
      src: wc_admin_settings["e" /* WC_ASSET_URL */] + 'images/klarna-black.png',
      alt: ""
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
    manageUrl: methods_getPaymentsSettingsUrl('klarna_payments')
  }, {
    key: 'mollie',
    title: Object(external_wp_i18n_["__"])('Mollie Payments for WooCommerce', 'woocommerce-admin'),
    before: Object(external_wp_element_["createElement"])(mollie_MollieLogo, null),
    plugins: ['mollie-payments-for-woocommerce'],
    isConfigured: activePlugins.includes('mollie-payments-for-woocommerce'),
    content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('Effortless payments by Mollie: Offer global and local payment methods, get onboarded in minutes, and supported in your language.', 'woocommerce-admin')),
    visible: ['FR', 'DE', 'GB', 'AT', 'CH', 'ES', 'IT', 'PL', 'FI', 'NL', 'BE'].includes(countryCode),
    container: Object(external_wp_element_["createElement"])(mollie_Mollie, null),
    isEnabled: options.woocommerce_mollie_payments_settings && options.woocommerce_mollie_payments_settings.enabled === 'yes',
    optionName: 'woocommerce_mollie_payments_settings',
    manageUrl: methods_getPaymentsSettingsUrl('mollie_wc_gateway_creditcard')
  }, {
    key: 'square',
    title: Object(external_wp_i18n_["__"])('Square', 'woocommerce-admin'),
    content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('Securely accept credit and debit cards with one low rate, no surprise fees (custom rates available). ' + 'Sell online and in store and track sales and inventory in one place.', 'woocommerce-admin'), hasCbdIndustry && Object(external_wp_element_["createElement"])("span", {
      className: "text-style-strong"
    }, Object(external_wp_i18n_["__"])(' Selling CBD products is only supported by Square.', 'woocommerce-admin'))),
    before: Object(external_wp_element_["createElement"])("img", {
      src: "".concat(wc_admin_settings["e" /* WC_ASSET_URL */], "images/square-black.png"),
      alt: ""
    }),
    visible: hasCbdIndustry && ['US'].includes(countryCode) || ['brick-mortar', 'brick-mortar-other'].includes(profileItems.selling_venues) && ['US', 'CA', 'JP', 'GB', 'AU', 'IE'].includes(countryCode),
    plugins: ['woocommerce-square'],
    container: Object(external_wp_element_["createElement"])(square, null),
    isConfigured: options.wc_square_refresh_tokens && options.wc_square_refresh_tokens.length,
    isEnabled: options.woocommerce_square_credit_card_settings && options.woocommerce_square_credit_card_settings.enabled === 'yes',
    optionName: 'woocommerce_square_credit_card_settings',
    hasCbdIndustry: hasCbdIndustry,
    manageUrl: methods_getPaymentsSettingsUrl('square_credit_card')
  }, {
    key: 'eway',
    title: Object(external_wp_i18n_["__"])('eWAY', 'woocommerce-admin'),
    content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('The eWAY extension for WooCommerce allows you to take credit card payments directly on your store without redirecting your customers to a third party site to make payment.', 'woocommerce-admin')),
    before: Object(external_wp_element_["createElement"])("img", {
      src: wc_admin_settings["e" /* WC_ASSET_URL */] + 'images/eway-logo.jpg',
      alt: "eWAY logo"
    }),
    visible: ['AU', 'NZ'].includes(countryCode) && !hasCbdIndustry,
    plugins: ['woocommerce-gateway-eway'],
    container: Object(external_wp_element_["createElement"])(eway, null),
    isConfigured: options.woocommerce_eway_settings && options.woocommerce_eway_settings.customer_api && options.woocommerce_eway_settings.customer_password,
    isEnabled: options.woocommerce_eway_settings && options.woocommerce_eway_settings.enabled === 'yes',
    optionName: 'woocommerce_eway_settings',
    manageUrl: methods_getPaymentsSettingsUrl('eway')
  }, {
    key: 'razorpay',
    title: Object(external_wp_i18n_["__"])('Razorpay', 'woocommerce-admin'),
    content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('The official Razorpay extension for WooCommerce allows you to accept credit cards, debit cards, netbanking, wallet, and UPI payments.', 'woocommerce-admin')),
    before: Object(external_wp_element_["createElement"])(razorpay, null),
    visible: countryCode === 'IN' && !hasCbdIndustry,
    plugins: ['woo-razorpay'],
    container: Object(external_wp_element_["createElement"])(methods_razorpay, null),
    isConfigured: options.woocommerce_razorpay_settings && options.woocommerce_razorpay_settings.key_id && options.woocommerce_razorpay_settings.key_secret,
    isEnabled: options.woocommerce_razorpay_settings && options.woocommerce_razorpay_settings.enabled === 'yes',
    optionName: 'woocommerce_razorpay_settings',
    manageUrl: methods_getPaymentsSettingsUrl('razorpay')
  }, {
    key: 'payubiz',
    title: Object(external_wp_i18n_["__"])('PayU for WooCommerce', 'woocommerce-admin'),
    content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('Enable PayU’s exclusive plugin for WooCommerce to start accepting payments in 100+ payment methods available in India including credit cards, debit cards, UPI, & more!', 'woocommerce-admin')),
    before: Object(external_wp_element_["createElement"])(payu_india_PayUIndiaLogo, null),
    visible: countryCode === 'IN' && !hasCbdIndustry,
    plugins: ['payu-india'],
    container: Object(external_wp_element_["createElement"])(payu_india_PayUIndia, null),
    isConfigured: activePlugins.includes('payu-india'),
    isEnabled: enabledPaymentGateways.includes('payubiz'),
    optionName: 'woocommerce_payubiz_settings',
    manageUrl: methods_getPaymentsSettingsUrl('payubiz')
  }, {
    key: 'cod',
    title: Object(external_wp_i18n_["__"])('Cash on delivery', 'woocommerce-admin'),
    content: Object(external_wp_i18n_["__"])('Take payments in cash upon delivery.', 'woocommerce-admin'),
    before: Object(external_wp_element_["createElement"])(cod, null),
    visible: !hasCbdIndustry,
    isEnabled: options.woocommerce_cod_settings && options.woocommerce_cod_settings.enabled === 'yes',
    optionName: 'woocommerce_cod_settings',
    manageUrl: methods_getPaymentsSettingsUrl('cod')
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
    manageUrl: methods_getPaymentsSettingsUrl('bacs')
  }];

  if (window.wcAdminFeatures.wcpay) {
    methods.unshift({
      key: 'wcpay',
      title: Object(external_wp_i18n_["__"])('WooCommerce Payments', 'woocommerce-admin'),
      content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('Manage transactions without leaving your WordPress Dashboard. Only with WooCommerce Payments.', 'woocommerce-admin'), Object(external_wp_element_["createElement"])(methods_wcpay["b" /* WCPayUsageModal */], null)),
      before: Object(external_wp_element_["createElement"])(wcpay, null),
      onClick: function onClick(resolve, reject) {
        return Object(methods_wcpay["c" /* installActivateAndConnectWcpay */])(reject, createNotice, installAndActivatePlugins);
      },
      visible: Object(methods_wcpay["d" /* isWCPaySupported */])(countryCode) && !hasCbdIndustry,
      plugins: ['woocommerce-payments'],
      container: Object(external_wp_element_["createElement"])(methods_wcpay["a" /* WCPay */], null),
      isConfigured: wcPayIsConnected,
      isEnabled: options.woocommerce_woocommerce_payments_settings && options.woocommerce_woocommerce_payments_settings.enabled === 'yes',
      optionName: 'woocommerce_woocommerce_payments_settings',
      manageUrl: methods_getPaymentsSettingsUrl('woocommerce_payments')
    });
  }

  return methods.filter(function (method) {
    return method.visible;
  }).map(function (method) {
    return methods_objectSpread(methods_objectSpread({}, methodDefaults), method);
  });
}

/***/ })

}]);