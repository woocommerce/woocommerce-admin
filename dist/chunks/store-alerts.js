(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[50],{

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ALLOWED_TAGS */
/* unused harmony export ALLOWED_ATTR */
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

var ALLOWED_TAGS = ['a', 'b', 'em', 'i', 'strong', 'p', 'br'];
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

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
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

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "StoreAlerts", function() { return /* binding */ store_alerts_StoreAlerts; });

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
var inherits = __webpack_require__(15);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(16);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(8);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/interpolate-components/lib/index.js
var lib = __webpack_require__(30);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(25);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(11);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(17);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__(169);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/chevron-left.js
var chevron_left = __webpack_require__(563);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/chevron-right.js
var chevron_right = __webpack_require__(603);

// EXTERNAL MODULE: ./client/wc-admin-settings/index.js
var wc_admin_settings = __webpack_require__(28);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(21);

// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(29);

// EXTERNAL MODULE: external ["wc","experimental"]
var external_wc_experimental_ = __webpack_require__(33);

// EXTERNAL MODULE: ./client/lib/sanitize-html/index.js
var sanitize_html = __webpack_require__(576);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./client/layout/store-alerts/placeholder.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */




var placeholder_StoreAlertsPlaceholder = /*#__PURE__*/function (_Component) {
  inherits_default()(StoreAlertsPlaceholder, _Component);

  var _super = _createSuper(StoreAlertsPlaceholder);

  function StoreAlertsPlaceholder() {
    classCallCheck_default()(this, StoreAlertsPlaceholder);

    return _super.apply(this, arguments);
  }

  createClass_default()(StoreAlertsPlaceholder, [{
    key: "render",
    value: function render() {
      var hasMultipleAlerts = this.props.hasMultipleAlerts;
      return Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
        className: "woocommerce-store-alerts is-loading",
        "aria-hidden": true,
        size: null
      }, Object(external_wp_element_["createElement"])(external_wp_components_["CardHeader"], {
        isBorderless: true
      }, Object(external_wp_element_["createElement"])("span", {
        className: "is-placeholder"
      }), hasMultipleAlerts && Object(external_wp_element_["createElement"])("span", {
        className: "is-placeholder"
      })), Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], null, Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-store-alerts__message"
      }, Object(external_wp_element_["createElement"])("span", {
        className: "is-placeholder"
      }), Object(external_wp_element_["createElement"])("span", {
        className: "is-placeholder"
      }))), Object(external_wp_element_["createElement"])(external_wp_components_["CardFooter"], {
        isBorderless: true
      }, Object(external_wp_element_["createElement"])("span", {
        className: "is-placeholder"
      })));
    }
  }]);

  return StoreAlertsPlaceholder;
}(external_wp_element_["Component"]);

/* harmony default export */ var placeholder = (placeholder_StoreAlertsPlaceholder);
placeholder_StoreAlertsPlaceholder.propTypes = {
  /**
   * Whether multiple alerts exists.
   */
  hasMultipleAlerts: prop_types_default.a.bool
};
placeholder_StoreAlertsPlaceholder.defaultProps = {
  hasMultipleAlerts: false
};
// EXTERNAL MODULE: ./client/layout/store-alerts/style.scss
var style = __webpack_require__(602);

// CONCATENATED MODULE: ./client/layout/store-alerts/index.js








function store_alerts_createSuper(Derived) { var hasNativeReflectConstruct = store_alerts_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function store_alerts_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */













/**
 * Internal dependencies
 */




var store_alerts_StoreAlerts = /*#__PURE__*/function (_Component) {
  inherits_default()(StoreAlerts, _Component);

  var _super = store_alerts_createSuper(StoreAlerts);

  function StoreAlerts(props) {
    var _this;

    classCallCheck_default()(this, StoreAlerts);

    _this = _super.call(this, props);
    _this.state = {
      currentIndex: 0
    };
    _this.previousAlert = _this.previousAlert.bind(assertThisInitialized_default()(_this));
    _this.nextAlert = _this.nextAlert.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(StoreAlerts, [{
    key: "previousAlert",
    value: function previousAlert(event) {
      event.stopPropagation();
      var currentIndex = this.state.currentIndex;

      if (currentIndex > 0) {
        this.setState({
          currentIndex: currentIndex - 1
        });
      }
    }
  }, {
    key: "nextAlert",
    value: function nextAlert(event) {
      event.stopPropagation();
      var alerts = this.getAlerts();
      var currentIndex = this.state.currentIndex;

      if (currentIndex < alerts.length - 1) {
        this.setState({
          currentIndex: currentIndex + 1
        });
      }
    }
  }, {
    key: "renderActions",
    value: function renderActions(alert) {
      var _this$props = this.props,
          triggerNoteAction = _this$props.triggerNoteAction,
          updateNote = _this$props.updateNote;
      var actions = alert.actions.map(function (action) {
        return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
          key: action.name,
          isPrimary: action.primary,
          isSecondary: !action.primary,
          href: action.url || undefined,
          onClick: function onClick() {
            return triggerNoteAction(alert.id, action.id);
          }
        }, action.label);
      }); // TODO: should "next X" be the start, or exactly 1X from the current date?

      var snoozeOptions = [{
        value: external_moment_default()().add(4, 'hours').unix().toString(),
        label: Object(external_wp_i18n_["__"])('Later Today', 'woocommerce-admin')
      }, {
        value: external_moment_default()().add(1, 'day').hour(9).minute(0).second(0).millisecond(0).unix().toString(),
        label: Object(external_wp_i18n_["__"])('Tomorrow', 'woocommerce-admin')
      }, {
        value: external_moment_default()().add(1, 'week').hour(9).minute(0).second(0).millisecond(0).unix().toString(),
        label: Object(external_wp_i18n_["__"])('Next Week', 'woocommerce-admin')
      }, {
        value: external_moment_default()().add(1, 'month').hour(9).minute(0).second(0).millisecond(0).unix().toString(),
        label: Object(external_wp_i18n_["__"])('Next Month', 'woocommerce-admin')
      }];

      var setReminderDate = function setReminderDate(snoozeOption) {
        updateNote(alert.id, {
          status: 'snoozed',
          date_reminder: snoozeOption.value
        });
        var eventProps = {
          alert_name: alert.name,
          alert_title: alert.title,
          snooze_duration: snoozeOption.value,
          snooze_label: snoozeOption.label
        };
        Object(external_wc_tracks_["recordEvent"])('store_alert_snooze', eventProps);
      };

      var snooze = alert.is_snoozable && Object(external_wp_element_["createElement"])(external_wp_components_["SelectControl"], {
        className: "woocommerce-store-alerts__snooze",
        options: [{
          label: Object(external_wp_i18n_["__"])('Remind Me Later', 'woocommerce-admin'),
          value: '0'
        }].concat(snoozeOptions),
        onChange: function onChange(value) {
          if (value === '0') {
            return;
          }

          var reminderOption = snoozeOptions.find(function (option) {
            return option.value === value;
          });
          var reminderDate = {
            value: value,
            label: reminderOption && reminderOption.label
          };
          setReminderDate(reminderDate);
        }
      });

      if (actions || snooze) {
        return Object(external_wp_element_["createElement"])("div", {
          className: "woocommerce-store-alerts__actions"
        }, actions, snooze);
      }
    }
  }, {
    key: "getAlerts",
    value: function getAlerts() {
      return (this.props.alerts || []).filter(function (note) {
        return note.status === 'unactioned';
      });
    }
  }, {
    key: "render",
    value: function render() {
      var alerts = this.getAlerts();
      var preloadAlertCount = Object(wc_admin_settings["h" /* getSetting */])('alertCount', 0, function (count) {
        return parseInt(count, 10);
      });

      if (preloadAlertCount > 0 && this.props.isLoading) {
        return Object(external_wp_element_["createElement"])(placeholder, {
          hasMultipleAlerts: preloadAlertCount > 1
        });
      } else if (alerts.length === 0) {
        return null;
      }

      var currentIndex = this.state.currentIndex;
      var numberOfAlerts = alerts.length;
      var alert = alerts[currentIndex];
      var type = alert.type;
      var className = classnames_default()('woocommerce-store-alerts', {
        'is-alert-error': type === 'error',
        'is-alert-update': type === 'update'
      });
      return Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
        className: className,
        size: null
      }, Object(external_wp_element_["createElement"])(external_wp_components_["CardHeader"], {
        isBorderless: true
      }, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
        variant: "title.medium",
        as: "h2"
      }, alert.title), numberOfAlerts > 1 && Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-store-alerts__pagination"
      }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        onClick: this.previousAlert,
        disabled: currentIndex === 0,
        label: Object(external_wp_i18n_["__"])('Previous Alert', 'woocommerce-admin')
      }, Object(external_wp_element_["createElement"])(icon["a" /* default */], {
        icon: chevron_left["a" /* default */],
        className: "arrow-left-icon"
      })), Object(external_wp_element_["createElement"])("span", {
        className: "woocommerce-store-alerts__pagination-label",
        role: "status",
        "aria-live": "polite"
      }, lib_default()({
        mixedString: Object(external_wp_i18n_["__"])('{{current /}} of {{total /}}', 'woocommerce-admin'),
        components: {
          current: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, currentIndex + 1),
          total: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, numberOfAlerts)
        }
      })), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        onClick: this.nextAlert,
        disabled: numberOfAlerts - 1 === currentIndex,
        label: Object(external_wp_i18n_["__"])('Next Alert', 'woocommerce-admin')
      }, Object(external_wp_element_["createElement"])(icon["a" /* default */], {
        icon: chevron_right["a" /* default */],
        className: "arrow-right-icon"
      })))), Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], null, Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-store-alerts__message",
        dangerouslySetInnerHTML: Object(sanitize_html["a" /* default */])(alert.content)
      })), Object(external_wp_element_["createElement"])(external_wp_components_["CardFooter"], {
        isBorderless: true
      }, this.renderActions(alert)));
    }
  }]);

  return StoreAlerts;
}(external_wp_element_["Component"]);
var ALERTS_QUERY = {
  page: 1,
  per_page: external_wc_data_["QUERY_DEFAULTS"].pageSize,
  type: 'error,update',
  status: 'unactioned'
};
/* harmony default export */ var store_alerts = __webpack_exports__["default"] = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select(external_wc_data_["NOTES_STORE_NAME"]),
      getNotes = _select.getNotes,
      isResolving = _select.isResolving; // Filter out notes that may have been marked actioned or not delayed after the initial request


  var alerts = getNotes(ALERTS_QUERY);
  var isLoading = isResolving('getNotes', [ALERTS_QUERY]);
  return {
    alerts: alerts,
    isLoading: isLoading
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(external_wc_data_["NOTES_STORE_NAME"]),
      triggerNoteAction = _dispatch.triggerNoteAction,
      updateNote = _dispatch.updateNote;

  return {
    triggerNoteAction: triggerNoteAction,
    updateNote: updateNote
  };
}))(store_alerts_StoreAlerts));

/***/ })

}]);