(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[4],{

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ALLOWED_TAGS */
/* unused harmony export ALLOWED_ATTR */
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(324);
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

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ activity_card_ActivityCard; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ placeholder; });

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

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(9);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/gridicons/dist/notice-outline.js
var notice_outline = __webpack_require__(325);
var notice_outline_default = /*#__PURE__*/__webpack_require__.n(notice_outline);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(21);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(112);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(5);

// EXTERNAL MODULE: ./client/header/activity-panel/activity-card/style.scss
var style = __webpack_require__(679);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);

// CONCATENATED MODULE: ./client/header/activity-panel/activity-card/placeholder.js









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */





var placeholder_ActivityCardPlaceholder = /*#__PURE__*/function (_Component) {
  inherits_default()(ActivityCardPlaceholder, _Component);

  var _super = _createSuper(ActivityCardPlaceholder);

  function ActivityCardPlaceholder() {
    classCallCheck_default()(this, ActivityCardPlaceholder);

    return _super.apply(this, arguments);
  }

  createClass_default()(ActivityCardPlaceholder, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          hasAction = _this$props.hasAction,
          hasDate = _this$props.hasDate,
          hasSubtitle = _this$props.hasSubtitle,
          lines = _this$props.lines;
      var cardClassName = classnames_default()('woocommerce-activity-card is-loading', className);
      return Object(external_wp_element_["createElement"])("div", {
        className: cardClassName,
        "aria-hidden": true
      }, Object(external_wp_element_["createElement"])("span", {
        className: "woocommerce-activity-card__icon"
      }, Object(external_wp_element_["createElement"])("span", {
        className: "is-placeholder"
      })), Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__header"
      }, Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__title is-placeholder"
      }), hasSubtitle && Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__subtitle is-placeholder"
      }), hasDate && Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__date"
      }, Object(external_wp_element_["createElement"])("span", {
        className: "is-placeholder"
      }))), Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__body"
      }, Object(external_lodash_["range"])(lines).map(function (i) {
        return Object(external_wp_element_["createElement"])("span", {
          className: "is-placeholder",
          key: i
        });
      })), hasAction && Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__actions"
      }, Object(external_wp_element_["createElement"])("span", {
        className: "is-placeholder"
      })));
    }
  }]);

  return ActivityCardPlaceholder;
}(external_wp_element_["Component"]);

placeholder_ActivityCardPlaceholder.propTypes = {
  className: prop_types_default.a.string,
  hasAction: prop_types_default.a.bool,
  hasDate: prop_types_default.a.bool,
  hasSubtitle: prop_types_default.a.bool,
  lines: prop_types_default.a.number
};
placeholder_ActivityCardPlaceholder.defaultProps = {
  hasAction: false,
  hasDate: false,
  hasSubtitle: false,
  lines: 1
};
/* harmony default export */ var placeholder = (placeholder_ActivityCardPlaceholder);
// CONCATENATED MODULE: ./client/header/activity-panel/activity-card/index.js









function activity_card_createSuper(Derived) { var hasNativeReflectConstruct = activity_card_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function activity_card_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */







/**
 * Internal dependencies
 */


/**
 * Determine if the provided string is a date, as
 * formatted by wc_rest_prepare_date_response().
 *
 * @param {string} value String value
 */

var isDateString = function isDateString(value) {
  return (// PHP date format: Y-m-d\TH:i:s.
    /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(value)
  );
};

var activity_card_ActivityCard = /*#__PURE__*/function (_Component) {
  inherits_default()(ActivityCard, _Component);

  var _super = activity_card_createSuper(ActivityCard);

  function ActivityCard() {
    classCallCheck_default()(this, ActivityCard);

    return _super.apply(this, arguments);
  }

  createClass_default()(ActivityCard, [{
    key: "getCard",
    value: function getCard() {
      var _this$props = this.props,
          actions = _this$props.actions,
          className = _this$props.className,
          children = _this$props.children,
          date = _this$props.date,
          icon = _this$props.icon,
          subtitle = _this$props.subtitle,
          title = _this$props.title,
          unread = _this$props.unread;
      var cardClassName = classnames_default()('woocommerce-activity-card', className);
      var actionsList = Array.isArray(actions) ? actions : [actions];
      var dateString = isDateString(date) ? external_moment_default.a.utc(date).fromNow() : date;
      return Object(external_wp_element_["createElement"])("section", {
        className: cardClassName
      }, unread && Object(external_wp_element_["createElement"])("span", {
        className: "woocommerce-activity-card__unread"
      }), icon && Object(external_wp_element_["createElement"])("span", {
        className: "woocommerce-activity-card__icon",
        "aria-hidden": true
      }, icon), title && Object(external_wp_element_["createElement"])("header", {
        className: "woocommerce-activity-card__header"
      }, Object(external_wp_element_["createElement"])(external_wc_components_["H"], {
        className: "woocommerce-activity-card__title"
      }, title), subtitle && Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__subtitle"
      }, subtitle), dateString && Object(external_wp_element_["createElement"])("span", {
        className: "woocommerce-activity-card__date"
      }, dateString)), children && Object(external_wp_element_["createElement"])(external_wc_components_["Section"], {
        className: "woocommerce-activity-card__body"
      }, children), actions && Object(external_wp_element_["createElement"])("footer", {
        className: "woocommerce-activity-card__actions"
      }, actionsList.map(function (item, i) {
        return Object(external_wp_element_["cloneElement"])(item, {
          key: i
        });
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var onClick = this.props.onClick;

      if (onClick) {
        return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
          className: "woocommerce-activity-card__button",
          onClick: onClick
        }, this.getCard());
      }

      return this.getCard();
    }
  }]);

  return ActivityCard;
}(external_wp_element_["Component"]);

activity_card_ActivityCard.propTypes = {
  actions: prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.element), prop_types_default.a.element]),
  onClick: prop_types_default.a.func,
  className: prop_types_default.a.string,
  children: prop_types_default.a.node,
  date: prop_types_default.a.string,
  icon: prop_types_default.a.node,
  subtitle: prop_types_default.a.node,
  title: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.node]),
  unread: prop_types_default.a.bool
};
activity_card_ActivityCard.defaultProps = {
  icon: Object(external_wp_element_["createElement"])(notice_outline_default.a, {
    size: 48
  }),
  unread: false
};



/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getUrlParams */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getScreenName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sift; });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(238);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(257);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(253);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(159);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);






/**
 * Get the URL params.
 *
 * @param {string} locationSearch - Querystring part of a URL, including the question mark (?).
 * @return {Object} - URL params.
 */
function getUrlParams(locationSearch) {
  if (locationSearch) {
    return locationSearch.substr(1).split('&').reduce(function (params, query) {
      var chunks = query.split('=');
      var key = chunks[0];
      var value = decodeURIComponent(chunks[1]);
      value = isNaN(Number(value)) ? value : Number(value);
      return params[key] = value, params;
    }, {});
  }

  return {};
}
/**
 * Get the current screen name.
 *
 * @return {string} - Screen name.
 */

function getScreenName() {
  var screenName = '';

  var _getUrlParams = getUrlParams(window.location.search),
      page = _getUrlParams.page,
      path = _getUrlParams.path,
      postType = _getUrlParams.post_type;

  if (page) {
    var currentPage = page === 'wc-admin' ? 'home_screen' : page;
    screenName = path ? path.replace(/\//g, '_').substring(1) : currentPage;
  } else if (postType) {
    screenName = postType;
  }

  return screenName;
}
/**
 * Similar to filter, but return two arrays separated by a partitioner function
 *
 * @param {Array} arr - Original array of values.
 * @param {Function} partitioner - Function to return truthy/falsy values to separate items in array.
 *
 * @return {Array} - Array of two arrays, first including truthy values, and second including falsy.
 */

var sift = function sift(arr, partitioner) {
  return arr.reduce(function (all, curr) {
    all[!!partitioner(curr) ? 0 : 1].push(curr);
    return all;
  }, [[], []]);
};

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(30);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(66);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(83);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(34);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(112);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(33);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/TransitionGroup.js + 2 modules
var TransitionGroup = __webpack_require__(444);

// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/CSSTransition.js + 5 modules
var CSSTransition = __webpack_require__(443);

// EXTERNAL MODULE: ./client/header/activity-panel/activity-card/index.js + 1 modules
var activity_card = __webpack_require__(644);

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

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./client/inbox-panel/placeholder.js








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */



var placeholder_InboxNotePlaceholder = /*#__PURE__*/function (_Component) {
  inherits_default()(InboxNotePlaceholder, _Component);

  var _super = _createSuper(InboxNotePlaceholder);

  function InboxNotePlaceholder() {
    classCallCheck_default()(this, InboxNotePlaceholder);

    return _super.apply(this, arguments);
  }

  createClass_default()(InboxNotePlaceholder, [{
    key: "render",
    value: function render() {
      var className = this.props.className;
      return Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message is-placeholder ".concat(className),
        "aria-hidden": true
      }, Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__wrapper"
      }, Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__content"
      }, Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__date"
      }, Object(external_wp_element_["createElement"])("div", {
        className: "sixth-line"
      })), Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__title"
      }, Object(external_wp_element_["createElement"])("div", {
        className: "line"
      }), Object(external_wp_element_["createElement"])("div", {
        className: "line"
      })), Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__text"
      }, Object(external_wp_element_["createElement"])("div", {
        className: "line"
      }), Object(external_wp_element_["createElement"])("div", {
        className: "third-line"
      }))), Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__actions"
      }, Object(external_wp_element_["createElement"])("div", {
        className: "fifth-line"
      }), Object(external_wp_element_["createElement"])("div", {
        className: "fifth-line"
      }))));
    }
  }]);

  return InboxNotePlaceholder;
}(external_wp_element_["Component"]);

placeholder_InboxNotePlaceholder.propTypes = {
  className: prop_types_default.a.string
};
/* harmony default export */ var placeholder = (placeholder_InboxNotePlaceholder);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(10);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(4);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(276);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(108);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(205);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/react-visibility-sensor/dist/visibility-sensor.js
var visibility_sensor = __webpack_require__(666);
var visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(visibility_sensor);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(21);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(9);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__(667);

// EXTERNAL MODULE: ./client/wc-admin-settings/index.js
var wc_admin_settings = __webpack_require__(42);

// CONCATENATED MODULE: ./client/inbox-panel/action.js











function action_createSuper(Derived) { var hasNativeReflectConstruct = action_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function action_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */









var action_InboxNoteAction = /*#__PURE__*/function (_Component) {
  inherits_default()(InboxNoteAction, _Component);

  var _super = action_createSuper(InboxNoteAction);

  function InboxNoteAction(props) {
    var _this;

    classCallCheck_default()(this, InboxNoteAction);

    _this = _super.call(this, props);
    _this.state = {
      inAction: false
    };
    _this.handleActionClick = _this.handleActionClick.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(InboxNoteAction, [{
    key: "handleActionClick",
    value: function handleActionClick(event) {
      var _this$props = this.props,
          action = _this$props.action,
          actionCallback = _this$props.actionCallback,
          batchUpdateNotes = _this$props.batchUpdateNotes,
          createNotice = _this$props.createNotice,
          noteId = _this$props.noteId,
          triggerNoteAction = _this$props.triggerNoteAction,
          removeAllNotes = _this$props.removeAllNotes,
          removeNote = _this$props.removeNote,
          onClick = _this$props.onClick,
          updateNote = _this$props.updateNote;
      var href = event.target.href || '';
      var inAction = true;

      if (href.length && !href.startsWith(wc_admin_settings["a" /* ADMIN_URL */])) {
        event.preventDefault();
        inAction = false; // link buttons shouldn't be "busy".

        window.open(href, '_blank');
      }

      if (!action) {
        if (noteId) {
          removeNote(noteId).then(function () {
            createNotice('success', Object(external_wp_i18n_["__"])('Message dismissed', 'woocommerce-admin'), {
              actions: [{
                label: Object(external_wp_i18n_["__"])('Undo', 'woocommerce-admin'),
                onClick: function onClick() {
                  updateNote(noteId, {
                    is_deleted: 0
                  });
                }
              }]
            });
          }).catch(function () {
            createNotice('error', Object(external_wp_i18n_["__"])('Message could not be dismissed', 'woocommerce-admin'));
          });
        } else {
          removeAllNotes().then(function (notes) {
            createNotice('success', Object(external_wp_i18n_["__"])('All messages dismissed', 'woocommerce-admin'), {
              actions: [{
                label: Object(external_wp_i18n_["__"])('Undo', 'woocommerce-admin'),
                onClick: function onClick() {
                  batchUpdateNotes(notes.map(function (note) {
                    return note.id;
                  }), {
                    is_deleted: 0
                  });
                }
              }]
            });
          }).catch(function () {
            createNotice('error', Object(external_wp_i18n_["__"])('Message could not be dismissed', 'woocommerce-admin'));
          });
        }

        actionCallback(true);
      } else {
        this.setState({
          inAction: inAction
        }, function () {
          triggerNoteAction(noteId, action.id);

          if (!!onClick) {
            onClick();
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          action = _this$props2.action,
          dismiss = _this$props2.dismiss,
          label = _this$props2.label;
      return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isSecondary: true,
        isBusy: this.state.inAction,
        disabled: this.state.inAction,
        href: action && action.url && action.url.length ? action.url : undefined,
        onClick: this.handleActionClick
      }, dismiss ? label : action.label);
    }
  }]);

  return InboxNoteAction;
}(external_wp_element_["Component"]);

action_InboxNoteAction.propTypes = {
  noteId: prop_types_default.a.number,
  label: prop_types_default.a.string,
  dismiss: prop_types_default.a.bool,
  actionCallback: prop_types_default.a.func,
  action: prop_types_default.a.shape({
    id: prop_types_default.a.number.isRequired,
    url: prop_types_default.a.string,
    label: prop_types_default.a.string.isRequired,
    primary: prop_types_default.a.bool.isRequired
  }),
  onClick: prop_types_default.a.func
};
/* harmony default export */ var inbox_panel_action = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  var _dispatch2 = dispatch(external_wc_data_["NOTES_STORE_NAME"]),
      batchUpdateNotes = _dispatch2.batchUpdateNotes,
      removeAllNotes = _dispatch2.removeAllNotes,
      removeNote = _dispatch2.removeNote,
      updateNote = _dispatch2.updateNote,
      triggerNoteAction = _dispatch2.triggerNoteAction;

  return {
    batchUpdateNotes: batchUpdateNotes,
    createNotice: createNotice,
    removeAllNotes: removeAllNotes,
    removeNote: removeNote,
    triggerNoteAction: triggerNoteAction,
    updateNote: updateNote
  };
}))(action_InboxNoteAction));
// EXTERNAL MODULE: ./client/lib/sanitize-html/index.js
var sanitize_html = __webpack_require__(640);

// EXTERNAL MODULE: ./client/inbox-panel/style.scss
var style = __webpack_require__(685);

// EXTERNAL MODULE: ./client/utils/index.js
var utils = __webpack_require__(668);

// CONCATENATED MODULE: ./client/inbox-panel/card.js














function card_createSuper(Derived) { var hasNativeReflectConstruct = card_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function card_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */









/**
 * Internal dependencies
 */






var card_InboxNoteCard = /*#__PURE__*/function (_Component) {
  inherits_default()(InboxNoteCard, _Component);

  var _super = card_createSuper(InboxNoteCard);

  function InboxNoteCard(props) {
    var _this;

    classCallCheck_default()(this, InboxNoteCard);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "onActionClicked", function (action) {
      if (!action.actioned_text) {
        return;
      }

      _this.setState({
        clickedActionText: action.actioned_text
      });
    });

    _this.onVisible = _this.onVisible.bind(assertThisInitialized_default()(_this));
    _this.hasBeenSeen = false;
    _this.state = {
      isDismissModalOpen: false,
      dismissType: null,
      clickedActionText: null
    };
    _this.openDismissModal = _this.openDismissModal.bind(assertThisInitialized_default()(_this));
    _this.closeDismissModal = _this.closeDismissModal.bind(assertThisInitialized_default()(_this));
    _this.bodyNotificationRef = Object(external_wp_element_["createRef"])();
    _this.toggleButtonRef = Object(external_wp_element_["createRef"])();
    _this.screen = Object(utils["a" /* getScreenName */])();
    return _this;
  }

  createClass_default()(InboxNoteCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.bodyNotificationRef.current) {
        this.bodyNotificationRef.current.addEventListener('click', function (event) {
          return _this2.handleBodyClick(event, _this2.props);
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      if (this.bodyNotificationRef.current) {
        this.bodyNotificationRef.current.removeEventListener('click', function (event) {
          return _this3.handleBodyClick(event, _this3.props);
        });
      }
    }
  }, {
    key: "handleBodyClick",
    value: function handleBodyClick(event, props) {
      var innerLink = event.target.href;

      if (innerLink) {
        var note = props.note;
        Object(external_wc_tracks_["recordEvent"])('wcadmin_inbox_action_click', {
          note_name: note.name,
          note_title: note.title,
          note_content_inner_link: innerLink
        });
      }
    } // Trigger a view Tracks event when the note is seen.

  }, {
    key: "onVisible",
    value: function onVisible(isVisible) {
      if (isVisible && !this.hasBeenSeen) {
        var note = this.props.note;
        Object(external_wc_tracks_["recordEvent"])('inbox_note_view', {
          note_content: note.content,
          note_name: note.name,
          note_title: note.title,
          note_type: note.type,
          screen: this.screen
        });
        this.hasBeenSeen = true;
      }
    }
  }, {
    key: "openDismissModal",
    value: function openDismissModal(type, onToggle) {
      this.setState({
        isDismissModalOpen: true,
        dismissType: type
      });
      onToggle();
    }
  }, {
    key: "closeDismissModal",
    value: function closeDismissModal(noteNameDismissConfirmation) {
      var dismissType = this.state.dismissType;
      var note = this.props.note;
      var noteNameDismissAll = dismissType === 'all' ? true : false;
      Object(external_wc_tracks_["recordEvent"])('inbox_action_dismiss', {
        note_name: note.name,
        note_title: note.title,
        note_name_dismiss_all: noteNameDismissAll,
        note_name_dismiss_confirmation: noteNameDismissConfirmation || false,
        screen: this.screen
      });
      this.setState({
        isDismissModalOpen: false
      });
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(event, onClose) {
      var dropdownClasses = ['woocommerce-admin-dismiss-notification', 'components-popover__content']; // This line is for IE compatibility.

      var relatedTarget;

      if (event.relatedTarget) {
        relatedTarget = event.relatedTarget;
      } else if (this.toggleButtonRef.current) {
        var ownerDoc = this.toggleButtonRef.current.ownerDocument;
        relatedTarget = ownerDoc ? ownerDoc.activeElement : null;
      }

      var isClickOutsideDropdown = relatedTarget ? dropdownClasses.some(function (className) {
        return relatedTarget.className.includes(className);
      }) : false;

      if (isClickOutsideDropdown) {
        event.preventDefault();
      } else {
        onClose();
      }
    }
  }, {
    key: "renderDismissButton",
    value: function renderDismissButton() {
      var _this4 = this;

      var clickedActionText = this.state.clickedActionText;

      if (clickedActionText) {
        return null;
      }

      return Object(external_wp_element_["createElement"])(external_wp_components_["Dropdown"], {
        contentClassName: "woocommerce-admin-dismiss-dropdown",
        position: "bottom right",
        renderToggle: function renderToggle(_ref) {
          var onClose = _ref.onClose,
              onToggle = _ref.onToggle;
          return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
            isTertiary: true,
            onClick: onToggle,
            ref: _this4.toggleButtonRef,
            onBlur: function onBlur(event) {
              return _this4.handleBlur(event, onClose);
            }
          }, Object(external_wp_i18n_["__"])('Dismiss', 'woocommerce-admin'));
        },
        focusOnMount: false,
        popoverProps: {
          noArrow: true
        },
        renderContent: function renderContent(_ref2) {
          var onToggle = _ref2.onToggle;
          return Object(external_wp_element_["createElement"])("ul", null, Object(external_wp_element_["createElement"])("li", null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
            className: "woocommerce-admin-dismiss-notification",
            onClick: function onClick() {
              return _this4.openDismissModal('this', onToggle);
            }
          }, Object(external_wp_i18n_["__"])('Dismiss this message', 'woocommerce-admin'))), Object(external_wp_element_["createElement"])("li", null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
            className: "woocommerce-admin-dismiss-notification",
            onClick: function onClick() {
              return _this4.openDismissModal('all', onToggle);
            }
          }, Object(external_wp_i18n_["__"])('Dismiss all messages', 'woocommerce-admin'))));
        }
      });
    }
  }, {
    key: "getDismissConfirmationButton",
    value: function getDismissConfirmationButton() {
      var note = this.props.note;
      var dismissType = this.state.dismissType;
      return Object(external_wp_element_["createElement"])(inbox_panel_action, {
        key: note.id,
        noteId: dismissType === 'all' ? null : note.id,
        label: Object(external_wp_i18n_["__"])("Yes, I'm sure", 'woocommerce-admin'),
        actionCallback: this.closeDismissModal,
        dismiss: true,
        screen: this.screen
      });
    }
  }, {
    key: "renderDismissConfirmationModal",
    value: function renderDismissConfirmationModal() {
      var _this5 = this;

      return Object(external_wp_element_["createElement"])(external_wp_components_["Modal"], {
        title: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('Are you sure?', 'woocommerce-admin')),
        onRequestClose: function onRequestClose() {
          return _this5.closeDismissModal();
        },
        className: "woocommerce-inbox-dismiss-confirmation_modal"
      }, Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-dismiss-confirmation_wrapper"
      }, Object(external_wp_element_["createElement"])("p", null, Object(external_wp_i18n_["__"])('Dismissed messages cannot be viewed again', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-dismiss-confirmation_buttons"
      }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isSecondary: true,
        onClick: function onClick() {
          return _this5.closeDismissModal();
        }
      }, Object(external_wp_i18n_["__"])('Cancel', 'woocommerce-admin')), this.getDismissConfirmationButton())));
    }
  }, {
    key: "renderActions",
    value: function renderActions(note) {
      var _this6 = this;

      var noteActions = note.actions,
          noteId = note.id;
      var clickedActionText = this.state.clickedActionText;

      if (!!clickedActionText) {
        return clickedActionText;
      }

      if (!noteActions) {
        return;
      }

      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, noteActions.map(function (action, index) {
        return Object(external_wp_element_["createElement"])(inbox_panel_action, {
          key: index,
          noteId: noteId,
          action: action,
          onClick: function onClick() {
            return _this6.onActionClicked(action);
          }
        });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          lastRead = _this$props.lastRead,
          note = _this$props.note;
      var isDismissModalOpen = this.state.isDismissModalOpen;
      var content = note.content,
          dateCreated = note.date_created,
          dateCreatedGmt = note.date_created_gmt,
          image = note.image,
          isDeleted = note.is_deleted,
          layout = note.layout,
          status = note.status,
          title = note.title;

      if (isDeleted) {
        return null;
      }

      var unread = !lastRead || !dateCreatedGmt || new Date(dateCreatedGmt + 'Z').getTime() > lastRead;
      var date = dateCreated;
      var hasImage = layout !== 'plain' && layout !== '';
      var cardClassName = classnames_default()('woocommerce-inbox-message', layout, {
        'message-is-unread': unread && status === 'unactioned'
      });
      return Object(external_wp_element_["createElement"])(visibility_sensor_default.a, {
        onChange: this.onVisible
      }, Object(external_wp_element_["createElement"])("section", {
        className: cardClassName
      }, hasImage && Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__image"
      }, Object(external_wp_element_["createElement"])("img", {
        src: image,
        alt: ""
      })), Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__wrapper"
      }, Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__content"
      }, unread && Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__unread-indicator"
      }), date && Object(external_wp_element_["createElement"])("span", {
        className: "woocommerce-inbox-message__date"
      }, external_moment_default.a.utc(date).fromNow()), Object(external_wp_element_["createElement"])(external_wc_components_["H"], {
        className: "woocommerce-inbox-message__title"
      }, title), Object(external_wp_element_["createElement"])(external_wc_components_["Section"], {
        className: "woocommerce-inbox-message__text"
      }, Object(external_wp_element_["createElement"])("span", {
        dangerouslySetInnerHTML: Object(sanitize_html["a" /* default */])(content),
        ref: this.bodyNotificationRef
      }))), Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__actions"
      }, this.renderActions(note), this.renderDismissButton())), isDismissModalOpen && this.renderDismissConfirmationModal()));
    }
  }]);

  return InboxNoteCard;
}(external_wp_element_["Component"]);

card_InboxNoteCard.propTypes = {
  note: prop_types_default.a.shape({
    id: prop_types_default.a.number,
    status: prop_types_default.a.string,
    title: prop_types_default.a.string,
    content: prop_types_default.a.string,
    date_created: prop_types_default.a.string,
    date_created_gmt: prop_types_default.a.string,
    actions: prop_types_default.a.arrayOf(prop_types_default.a.shape({
      id: prop_types_default.a.number.isRequired,
      url: prop_types_default.a.string,
      label: prop_types_default.a.string.isRequired,
      primary: prop_types_default.a.bool.isRequired
    })),
    layout: prop_types_default.a.string,
    image: prop_types_default.a.string,
    is_deleted: prop_types_default.a.bool
  }),
  lastRead: prop_types_default.a.number
};
/* harmony default export */ var card = (card_InboxNoteCard);
// EXTERNAL MODULE: ./client/inbox-panel/utils.js
var inbox_panel_utils = __webpack_require__(336);

// CONCATENATED MODULE: ./client/inbox-panel/index.js






/**
 * External dependencies
 */







/**
 * Internal dependencies
 */






var inbox_panel_renderEmptyCard = function renderEmptyCard() {
  return Object(external_wp_element_["createElement"])(activity_card["a" /* ActivityCard */], {
    className: "woocommerce-empty-activity-card",
    title: Object(external_wp_i18n_["__"])('Your inbox is empty', 'woocommerce-admin'),
    icon: false
  }, Object(external_wp_i18n_["__"])('As things begin to happen in your store your inbox will start to fill up. ' + "You'll see things like achievements, new feature announcements, extension recommendations and more!", 'woocommerce-admin'));
};

var inbox_panel_renderNotes = function renderNotes(_ref) {
  var hasNotes = _ref.hasNotes,
      isBatchUpdating = _ref.isBatchUpdating,
      lastRead = _ref.lastRead,
      notes = _ref.notes;

  if (isBatchUpdating) {
    return;
  }

  if (!hasNotes) {
    return inbox_panel_renderEmptyCard();
  }

  var notesArray = Object.keys(notes).map(function (key) {
    return notes[key];
  });
  return Object(external_wp_element_["createElement"])(TransitionGroup["a" /* default */], {
    role: "menu"
  }, notesArray.map(function (note) {
    var noteId = note.id,
        isDeleted = note.is_deleted;

    if (isDeleted) {
      return null;
    }

    return Object(external_wp_element_["createElement"])(CSSTransition["a" /* default */], {
      key: noteId,
      timeout: 500,
      classNames: "woocommerce-inbox-message"
    }, Object(external_wp_element_["createElement"])(card, {
      key: noteId,
      note: note,
      lastRead: lastRead
    }));
  }));
};

var inbox_panel_InboxPanel = function InboxPanel(props) {
  var isError = props.isError,
      isResolving = props.isResolving,
      isBatchUpdating = props.isBatchUpdating,
      notes = props.notes;

  var _useUserPreferences = Object(external_wc_data_["useUserPreferences"])(),
      updateUserPreferences = _useUserPreferences.updateUserPreferences,
      userPrefs = objectWithoutProperties_default()(_useUserPreferences, ["updateUserPreferences"]);

  var _useState = Object(external_wp_element_["useState"])(userPrefs.activity_panel_inbox_last_read),
      _useState2 = slicedToArray_default()(_useState, 1),
      lastRead = _useState2[0];

  Object(external_wp_element_["useEffect"])(function () {
    var mountTime = Date.now();
    var userDataFields = {
      activity_panel_inbox_last_read: mountTime
    };
    updateUserPreferences(userDataFields);
  }, []);

  if (isError) {
    var title = Object(external_wp_i18n_["__"])('There was an error getting your inbox. Please try again.', 'woocommerce-admin');

    var actionLabel = Object(external_wp_i18n_["__"])('Reload', 'woocommerce-admin');

    var actionCallback = function actionCallback() {
      // @todo Add tracking for how often an error is displayed, and the reload action is clicked.
      window.location.reload();
    };

    return Object(external_wp_element_["createElement"])(external_wc_components_["EmptyContent"], {
      title: title,
      actionLabel: actionLabel,
      actionURL: null,
      actionCallback: actionCallback
    });
  }

  var hasNotes = Object(inbox_panel_utils["b" /* hasValidNotes */])(notes); // @todo After having a pagination implemented we should call the method "getNotes" with a different query since
  // the current one is only getting 25 notes and the count of unread notes only will refer to this 25 and not all the existing ones.

  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-homepage-notes-wrapper"
  }, (isResolving || isBatchUpdating) && Object(external_wp_element_["createElement"])(external_wc_components_["Section"], null, Object(external_wp_element_["createElement"])(placeholder, {
    className: "banner message-is-unread"
  })), Object(external_wp_element_["createElement"])(external_wc_components_["Section"], null, !isResolving && !isBatchUpdating && inbox_panel_renderNotes({
    hasNotes: hasNotes,
    isBatchUpdating: isBatchUpdating,
    lastRead: lastRead,
    notes: notes
  }))));
};

var INBOX_QUERY = {
  page: 1,
  per_page: external_wc_data_["QUERY_DEFAULTS"].pageSize,
  status: 'unactioned',
  type: external_wc_data_["QUERY_DEFAULTS"].noteTypes,
  orderby: 'date',
  order: 'desc',
  _fields: ['id', 'name', 'title', 'content', 'type', 'status', 'actions', 'date_created', 'date_created_gmt', 'layout', 'image', 'is_deleted']
};
/* harmony default export */ var inbox_panel = __webpack_exports__["default"] = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select(external_wc_data_["NOTES_STORE_NAME"]),
      getNotes = _select.getNotes,
      getNotesError = _select.getNotesError,
      isResolving = _select.isResolving,
      isNotesRequesting = _select.isNotesRequesting;

  return {
    notes: getNotes(INBOX_QUERY),
    isError: Boolean(getNotesError('getNotes', [INBOX_QUERY])),
    isResolving: isResolving('getNotes', [INBOX_QUERY]),
    isBatchUpdating: isNotesRequesting('batchUpdateNotes')
  };
}))(inbox_panel_InboxPanel));

/***/ })

}]);