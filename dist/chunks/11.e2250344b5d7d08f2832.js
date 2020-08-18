(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[11],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/visually-hidden/utils.js



/**
 * Utility Functions
 */

/**
 * renderAsRenderProps is used to wrap a component and convert
 * the passed property "as" either a string or component, to the
 * rendered tag if a string, or component.
 *
 * See VisuallyHidden hidden for example.
 *
 * @param {string|WPComponent} as A tag or component to render.
 * @return {WPComponent} The rendered component.
 */
function renderAsRenderProps(_ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["as"]);

  if (typeof props.children === 'function') {
    return props.children(props);
  }

  return Object(external_this_wp_element_["createElement"])(Component, props);
}


//# sourceMappingURL=utils.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/visually-hidden/index.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * VisuallyHidden component to render text out non-visually
 * for use in devices such as a screen reader.
 *
 * @param {Object}             props             Component props.
 * @param {string|WPComponent} [props.as="div"]  A tag or component to render.
 * @param {string}             [props.className] Class to set on the container.
 */

function VisuallyHidden(_ref) {
  var _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["as", "className"]);

  return renderAsRenderProps(_objectSpread({
    as: as,
    className: classnames_default()('components-visually-hidden', className)
  }, props));
}

/* harmony default export */ var visually_hidden = __webpack_exports__["a"] = (VisuallyHidden);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ BACKSPACE; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* binding */ TAB; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ ENTER; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ ESCAPE; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ SPACE; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ LEFT; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* binding */ UP; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ RIGHT; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ DOWN; });

// UNUSED EXPORTS: DELETE, F10, ALT, CTRL, COMMAND, SHIFT, ZERO, modifiers, rawShortcut, displayShortcutList, displayShortcut, shortcutAriaLabel, isKeyboardEvent

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(27);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/@wordpress/keycodes/build-module/platform.js
/**
 * External dependencies
 */

/**
 * Return true if platform is MacOS.
 *
 * @param {Object} _window   window object by default; used for DI testing.
 *
 * @return {boolean}         True if MacOS; false otherwise.
 */

function isAppleOS() {
  var _window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

  var platform = _window.navigator.platform;
  return platform.indexOf('Mac') !== -1 || Object(external_lodash_["includes"])(['iPad', 'iPhone'], platform);
}
//# sourceMappingURL=platform.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/keycodes/build-module/index.js



/**
 * Note: The order of the modifier keys in many of the [foo]Shortcut()
 * functions in this file are intentional and should not be changed. They're
 * designed to fit with the standard menu keyboard shortcuts shown in the
 * user's platform.
 *
 * For example, on MacOS menu shortcuts will place Shift before Command, but
 * on Windows Control will usually come first. So don't provide your own
 * shortcut combos directly to keyboardShortcut().
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * @typedef {'primary'|'primaryShift'|'primaryAlt'|'secondary'|'access'|'ctrl'|'alt'|'ctrlShift'|'shift'|'shiftAlt'} WPKeycodeModifier
 */

/**
 * An object of handler functions for each of the possible modifier
 * combinations. A handler will return a value for a given key.
 *
 * @typedef {Record<WPKeycodeModifier, (key:string)=>any>} WPKeycodeHandlerByModifier
 */

/**
 * Keycode for BACKSPACE key.
 */

var BACKSPACE = 8;
/**
 * Keycode for TAB key.
 */

var TAB = 9;
/**
 * Keycode for ENTER key.
 */

var ENTER = 13;
/**
 * Keycode for ESCAPE key.
 */

var ESCAPE = 27;
/**
 * Keycode for SPACE key.
 */

var SPACE = 32;
/**
 * Keycode for LEFT key.
 */

var LEFT = 37;
/**
 * Keycode for UP key.
 */

var UP = 38;
/**
 * Keycode for RIGHT key.
 */

var RIGHT = 39;
/**
 * Keycode for DOWN key.
 */

var DOWN = 40;
/**
 * Keycode for DELETE key.
 */

var DELETE = 46;
/**
 * Keycode for F10 key.
 */

var F10 = 121;
/**
 * Keycode for ALT key.
 */

var ALT = 'alt';
/**
 * Keycode for CTRL key.
 */

var CTRL = 'ctrl';
/**
 * Keycode for COMMAND/META key.
 */

var COMMAND = 'meta';
/**
 * Keycode for SHIFT key.
 */

var SHIFT = 'shift';
/**
 * Keycode for ZERO key.
 */

var ZERO = 48;
/**
 * Object that contains functions that return the available modifier
 * depending on platform.
 *
 * - `primary`: takes a isApple function as a parameter.
 * - `primaryShift`: takes a isApple function as a parameter.
 * - `primaryAlt`: takes a isApple function as a parameter.
 * - `secondary`: takes a isApple function as a parameter.
 * - `access`: takes a isApple function as a parameter.
 * - `ctrl`
 * - `alt`
 * - `ctrlShift`
 * - `shift`
 * - `shiftAlt`
 */

var modifiers = {
  primary: function primary(_isApple) {
    return _isApple() ? [COMMAND] : [CTRL];
  },
  primaryShift: function primaryShift(_isApple) {
    return _isApple() ? [SHIFT, COMMAND] : [CTRL, SHIFT];
  },
  primaryAlt: function primaryAlt(_isApple) {
    return _isApple() ? [ALT, COMMAND] : [CTRL, ALT];
  },
  secondary: function secondary(_isApple) {
    return _isApple() ? [SHIFT, ALT, COMMAND] : [CTRL, SHIFT, ALT];
  },
  access: function access(_isApple) {
    return _isApple() ? [CTRL, ALT] : [SHIFT, ALT];
  },
  ctrl: function ctrl() {
    return [CTRL];
  },
  alt: function alt() {
    return [ALT];
  },
  ctrlShift: function ctrlShift() {
    return [CTRL, SHIFT];
  },
  shift: function shift() {
    return [SHIFT];
  },
  shiftAlt: function shiftAlt() {
    return [SHIFT, ALT];
  }
};
/**
 * An object that contains functions to get raw shortcuts.
 * E.g. rawShortcut.primary( 'm' ) will return 'meta+m' on Mac.
 * These are intended for user with the KeyboardShortcuts component or TinyMCE.
 *
 * @type {WPKeycodeHandlerByModifier} Keyed map of functions to raw shortcuts.
 */

var rawShortcut = Object(external_lodash_["mapValues"])(modifiers, function (modifier) {
  return function (character) {
    var _isApple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : isAppleOS;

    return [].concat(Object(toConsumableArray["a" /* default */])(modifier(_isApple)), [character.toLowerCase()]).join('+');
  };
});
/**
 * Return an array of the parts of a keyboard shortcut chord for display
 * E.g displayShortcutList.primary( 'm' ) will return [ '⌘', 'M' ] on Mac.
 *
 * @type {WPKeycodeHandlerByModifier} Keyed map of functions to shortcut
 *                                    sequences.
 */

var displayShortcutList = Object(external_lodash_["mapValues"])(modifiers, function (modifier) {
  return function (character) {
    var _replacementKeyMap;

    var _isApple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : isAppleOS;

    var isApple = _isApple();

    var replacementKeyMap = (_replacementKeyMap = {}, Object(defineProperty["a" /* default */])(_replacementKeyMap, ALT, isApple ? '⌥' : 'Alt'), Object(defineProperty["a" /* default */])(_replacementKeyMap, CTRL, isApple ? '^' : 'Ctrl'), Object(defineProperty["a" /* default */])(_replacementKeyMap, COMMAND, '⌘'), Object(defineProperty["a" /* default */])(_replacementKeyMap, SHIFT, isApple ? '⇧' : 'Shift'), _replacementKeyMap);
    var modifierKeys = modifier(_isApple).reduce(function (accumulator, key) {
      var replacementKey = Object(external_lodash_["get"])(replacementKeyMap, key, key); // If on the Mac, adhere to platform convention and don't show plus between keys.

      if (isApple) {
        return [].concat(Object(toConsumableArray["a" /* default */])(accumulator), [replacementKey]);
      }

      return [].concat(Object(toConsumableArray["a" /* default */])(accumulator), [replacementKey, '+']);
    }, []);
    var capitalizedCharacter = Object(external_lodash_["capitalize"])(character);
    return [].concat(Object(toConsumableArray["a" /* default */])(modifierKeys), [capitalizedCharacter]);
  };
});
/**
 * An object that contains functions to display shortcuts.
 * E.g. displayShortcut.primary( 'm' ) will return '⌘M' on Mac.
 *
 * @type {WPKeycodeHandlerByModifier} Keyed map of functions to display
 *                                    shortcuts.
 */

var displayShortcut = Object(external_lodash_["mapValues"])(displayShortcutList, function (shortcutList) {
  return function (character) {
    var _isApple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : isAppleOS;

    return shortcutList(character, _isApple).join('');
  };
});
/**
 * An object that contains functions to return an aria label for a keyboard shortcut.
 * E.g. shortcutAriaLabel.primary( '.' ) will return 'Command + Period' on Mac.
 *
 * @type {WPKeycodeHandlerByModifier} Keyed map of functions to shortcut ARIA
 *                                    labels.
 */

var shortcutAriaLabel = Object(external_lodash_["mapValues"])(modifiers, function (modifier) {
  return function (character) {
    var _replacementKeyMap2;

    var _isApple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : isAppleOS;

    var isApple = _isApple();

    var replacementKeyMap = (_replacementKeyMap2 = {}, Object(defineProperty["a" /* default */])(_replacementKeyMap2, SHIFT, 'Shift'), Object(defineProperty["a" /* default */])(_replacementKeyMap2, COMMAND, isApple ? 'Command' : 'Control'), Object(defineProperty["a" /* default */])(_replacementKeyMap2, CTRL, 'Control'), Object(defineProperty["a" /* default */])(_replacementKeyMap2, ALT, isApple ? 'Option' : 'Alt'), Object(defineProperty["a" /* default */])(_replacementKeyMap2, ',', Object(external_this_wp_i18n_["__"])('Comma')), Object(defineProperty["a" /* default */])(_replacementKeyMap2, '.', Object(external_this_wp_i18n_["__"])('Period')), Object(defineProperty["a" /* default */])(_replacementKeyMap2, '`', Object(external_this_wp_i18n_["__"])('Backtick')), _replacementKeyMap2);
    return [].concat(Object(toConsumableArray["a" /* default */])(modifier(_isApple)), [character]).map(function (key) {
      return Object(external_lodash_["capitalize"])(Object(external_lodash_["get"])(replacementKeyMap, key, key));
    }).join(isApple ? ' ' : ' + ');
  };
});
/**
 * An object that contains functions to check if a keyboard event matches a
 * predefined shortcut combination.
 * E.g. isKeyboardEvent.primary( event, 'm' ) will return true if the event
 * signals pressing ⌘M.
 *
 * @type {WPKeycodeHandlerByModifier} Keyed map of functions to match events.
 */

var isKeyboardEvent = Object(external_lodash_["mapValues"])(modifiers, function (getModifiers) {
  return function (event, character) {
    var _isApple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : isAppleOS;

    var mods = getModifiers(_isApple);

    if (!mods.every(function (key) {
      return event["".concat(key, "Key")];
    })) {
      return false;
    }

    if (!character) {
      return Object(external_lodash_["includes"])(mods, event.key.toLowerCase());
    }

    return event.key === character;
  };
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _visually_hidden__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(278);


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function BaseControl(_ref) {
  var id = _ref.id,
      label = _ref.label,
      hideLabelFromVision = _ref.hideLabelFromVision,
      help = _ref.help,
      className = _ref.className,
      children = _ref.children;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('components-base-control', className)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "components-base-control__field"
  }, label && id && (hideLabelFromVision ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_visually_hidden__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    as: "label",
    htmlFor: id
  }, label) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    className: "components-base-control__label",
    htmlFor: id
  }, label)), label && !id && (hideLabelFromVision ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_visually_hidden__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    as: "label"
  }, label) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl.VisualLabel, null, label)), children), !!help && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    id: id + '__help',
    className: "components-base-control__help"
  }, help));
}

BaseControl.VisualLabel = function (_ref2) {
  var className = _ref2.className,
      children = _ref2.children;
  className = classnames__WEBPACK_IMPORTED_MODULE_1___default()('components-base-control__label', className);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: className
  }, children);
};

/* harmony default export */ __webpack_exports__["a"] = (BaseControl);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(759);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(750);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_10__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */




var ActivityHeader = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ActivityHeader, _Component);

  var _super = _createSuper(ActivityHeader);

  function ActivityHeader() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ActivityHeader);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ActivityHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          menu = _this$props.menu,
          subtitle = _this$props.subtitle,
          title = _this$props.title,
          unreadMessages = _this$props.unreadMessages;
      var cardClassName = classnames__WEBPACK_IMPORTED_MODULE_6___default()({
        'woocommerce-layout__inbox-panel-header': subtitle,
        'woocommerce-layout__activity-panel-header': !subtitle
      }, className);
      var countUnread = unreadMessages ? unreadMessages : 0;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: cardClassName
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "woocommerce-layout__inbox-title"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        variant: "title.small"
      }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        variant: "button"
      }, countUnread > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: "woocommerce-layout__inbox-badge"
      }, unreadMessages))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "woocommerce-layout__inbox-subtitle"
      }, subtitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        variant: "body.small"
      }, subtitle)), menu && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "woocommerce-layout__activity-panel-header-menu"
      }, menu));
    }
  }]);

  return ActivityHeader;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

ActivityHeader.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  unreadMessages: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  title: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  menu: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({
    type: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf([_woocommerce_components__WEBPACK_IMPORTED_MODULE_10__["EllipsisMenu"]])
  })
};
/* harmony default export */ __webpack_exports__["a"] = (ActivityHeader);

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ activity_card_ActivityCard; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ placeholder; });

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

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/gridicons/dist/index.js
var dist = __webpack_require__(86);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(17);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./client/header/activity-panel/activity-card/style.scss
var style = __webpack_require__(752);

// EXTERNAL MODULE: external {"this":["wc","components"]}
var external_this_wc_components_ = __webpack_require__(55);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// CONCATENATED MODULE: ./client/header/activity-panel/activity-card/placeholder.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
      return Object(external_this_wp_element_["createElement"])("div", {
        className: cardClassName,
        "aria-hidden": true
      }, Object(external_this_wp_element_["createElement"])("span", {
        className: "woocommerce-activity-card__icon"
      }, Object(external_this_wp_element_["createElement"])("span", {
        className: "is-placeholder"
      })), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__header"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__title is-placeholder"
      }), hasSubtitle && Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__subtitle is-placeholder"
      }), hasDate && Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__date"
      }, Object(external_this_wp_element_["createElement"])("span", {
        className: "is-placeholder"
      }))), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__body"
      }, Object(external_lodash_["range"])(lines).map(function (i) {
        return Object(external_this_wp_element_["createElement"])("span", {
          className: "is-placeholder",
          key: i
        });
      })), hasAction && Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__actions"
      }, Object(external_this_wp_element_["createElement"])("span", {
        className: "is-placeholder"
      })));
    }
  }]);

  return ActivityCardPlaceholder;
}(external_this_wp_element_["Component"]);

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

function activity_card_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */





/**
 * Internal dependencies
 */




var activity_card_ActivityCard = /*#__PURE__*/function (_Component) {
  inherits_default()(ActivityCard, _Component);

  var _super = activity_card_createSuper(ActivityCard);

  function ActivityCard() {
    classCallCheck_default()(this, ActivityCard);

    return _super.apply(this, arguments);
  }

  createClass_default()(ActivityCard, [{
    key: "render",
    value: function render() {
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
      return Object(external_this_wp_element_["createElement"])("section", {
        className: cardClassName
      }, unread && Object(external_this_wp_element_["createElement"])("span", {
        className: "woocommerce-activity-card__unread"
      }), icon && Object(external_this_wp_element_["createElement"])("span", {
        className: "woocommerce-activity-card__icon",
        "aria-hidden": true
      }, icon), Object(external_this_wp_element_["createElement"])("header", {
        className: "woocommerce-activity-card__header"
      }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["H"], {
        className: "woocommerce-activity-card__title"
      }, title), subtitle && Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__subtitle"
      }, subtitle), date && Object(external_this_wp_element_["createElement"])("span", {
        className: "woocommerce-activity-card__date"
      }, external_moment_default.a.utc(date).fromNow())), Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Section"], {
        className: "woocommerce-activity-card__body"
      }, children), actions && Object(external_this_wp_element_["createElement"])("footer", {
        className: "woocommerce-activity-card__actions"
      }, actionsList.map(function (item, i) {
        return Object(external_this_wp_element_["cloneElement"])(item, {
          key: i
        });
      })));
    }
  }]);

  return ActivityCard;
}(external_this_wp_element_["Component"]);

activity_card_ActivityCard.propTypes = {
  actions: prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.element), prop_types_default.a.element]),
  className: prop_types_default.a.string,
  children: prop_types_default.a.node.isRequired,
  date: prop_types_default.a.string,
  icon: prop_types_default.a.node,
  subtitle: prop_types_default.a.node,
  title: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.node]).isRequired,
  unread: prop_types_default.a.bool
};
activity_card_ActivityCard.defaultProps = {
  icon: Object(external_this_wp_element_["createElement"])(dist_default.a, {
    icon: "notice-outline",
    size: 48
  }),
  unread: false
};



/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js + 1 modules
var styled_base_browser_esm = __webpack_require__(280);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(98);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/text/styles/font-family.js
var fontFamily = "font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\nOxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;";
//# sourceMappingURL=font-family.js.map
// EXTERNAL MODULE: ./node_modules/@emotion/core/dist/core.browser.esm.js + 5 modules
var core_browser_esm = __webpack_require__(167);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/text/styles/emotion-css.js
/**
 * External dependencies
 */

/* harmony default export */ var emotion_css = (core_browser_esm["b" /* css */]);
//# sourceMappingURL=emotion-css.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/text/styles/text-mixins.js


function _templateObject9() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t", "\n\t", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\t\t\t", "\n\t\t\t\t", "\n\t\t\t"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\t\t\t", "\n\t\t\t\t", "\n\t\t\t"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\t\t\t", "\n\t\t\t"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\t\t\t", "\n\t\t\t\t", "\n\t\t\t"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\t\t\t", "\n\t\t\t\t", "\n\t\t\t"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\t\t\t", "\n\t\t\t\t", "\n\t\t\t"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\t\t\t", "\n\t\t\t\t", "\n\t\t\t"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\t\t\t", "\n\t\t\t\t", "\n\t\t\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/**
 * Internal dependencies
 */


var fontWeightNormal = "font-weight: 400;";
var fontWeightSemibold = "font-weight: 600;";
var title = "\n  ".concat(fontWeightNormal, "\n");
var titleLarge = "\n\tfont-size: 32px;\n\tline-height: 40px;\n";
var titleMedium = "\n\tfont-size: 24px;\n\tline-height: 32px;\n";
var titleSmall = "\n\tfont-size: 20px;\n\tline-height: 28px;\n";
var subtitle = "\n\t".concat(fontWeightSemibold, "\n\tfont-size: 14px;\n\tline-height: 20px;\n");
var subtitleLarge = "\n\tfont-size: 16px;\n\tline-height: 24px;\n";
var subtitleSmall = "\n\tfont-size: 14px;\n\tline-height: 20px;\n";
var body = "\n\t".concat(fontWeightNormal, "\n");
var bodyLarge = "\n\tfont-size: 16px;\n\tline-height: 24px;\n";
var bodySmall = "\n\tfont-size: 14px;\n\tline-height: 20px;\n";
var text_mixins_button = "\n  ".concat(fontWeightSemibold, "\n  font-size: 14px;\n  line-height: 20px;\n");
var caption = "\n\t".concat(fontWeightNormal, "\n\tfont-size: 12px;\n\tline-height: 16px;\n");
var label = "\n\t".concat(fontWeightSemibold, "\n\tfont-size: 12px;\n\tline-height: 16px;\n");
/**
 * @typedef {'title.large'|'title.medium'|'title.small'|'subtitle'|'subtitle.small'|'body'|'body.large'|'body.small'|'button'|'caption'|'label'} TextVariant
 */

/**
 * @param {TextVariant} variantName
 */

var text_mixins_variant = function variant() {
  var variantName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';

  switch (variantName) {
    case 'title.large':
      return emotion_css(_templateObject(), title, titleLarge);

    case 'title.medium':
      return emotion_css(_templateObject2(), title, titleMedium);

    case 'title.small':
      return emotion_css(_templateObject3(), title, titleSmall);

    case 'subtitle':
      return emotion_css(_templateObject4(), subtitle, subtitleLarge);

    case 'subtitle.small':
      return emotion_css(_templateObject5(), subtitle, subtitleSmall);

    case 'body':
      return emotion_css(_templateObject6(), body);

    case 'body.large':
      return emotion_css(_templateObject7(), body, bodyLarge);

    case 'body.small':
      return emotion_css(_templateObject8(), body, bodySmall);

    case 'button':
      return text_mixins_button;

    case 'caption':
      return caption;

    case 'label':
      return label;
  }
};
/**
 * @typedef {Object} TextProps
 * @property {TextVariant} variant one of TextVariant to be used
 */

/**
 * @param {TextProps} props
 */


var text_mixins_text = function text(props) {
  return emotion_css(_templateObject9(), fontFamily, text_mixins_variant(props.variant));
};
//# sourceMappingURL=text-mixins.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/text/index.js


/**
 * Internal dependencies
 */


var Text = Object(styled_base_browser_esm["a" /* default */])("p", {
  target: "e15wbhsk0",
  label: "Text"
})("\n\tbox-sizing: border-box;\n\tmargin: 0;\n", text_mixins_text,  true ? "" : undefined);

/* harmony default export */ var build_module_text = __webpack_exports__["a"] = (Text);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

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

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external {"this":["wc","components"]}
var external_this_wc_components_ = __webpack_require__(55);

// EXTERNAL MODULE: ./client/header/activity-panel/activity-card/index.js + 1 modules
var activity_card = __webpack_require__(751);

// EXTERNAL MODULE: ./client/header/activity-panel/activity-header/index.js
var activity_header = __webpack_require__(748);

// EXTERNAL MODULE: ./node_modules/gridicons/dist/index.js
var dist = __webpack_require__(86);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(7);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/base-control/index.js
var base_control = __webpack_require__(742);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/@wordpress/keycodes/build-module/index.js + 1 modules
var build_module = __webpack_require__(62);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(24);

// EXTERNAL MODULE: ./client/settings/index.js
var settings = __webpack_require__(28);

// EXTERNAL MODULE: ./client/lib/tracks.js
var tracks = __webpack_require__(63);

// CONCATENATED MODULE: ./client/header/activity-panel/panels/stock/card.js








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




var card_ProductStockCard = /*#__PURE__*/function (_Component) {
  inherits_default()(ProductStockCard, _Component);

  var _super = _createSuper(ProductStockCard);

  function ProductStockCard(props) {
    var _this;

    classCallCheck_default()(this, ProductStockCard);

    _this = _super.call(this, props);
    _this.state = {
      quantity: props.product.stock_quantity,
      editing: false,
      edited: false
    };
    _this.beginEdit = _this.beginEdit.bind(assertThisInitialized_default()(_this));
    _this.cancelEdit = _this.cancelEdit.bind(assertThisInitialized_default()(_this));
    _this.onQuantityChange = _this.onQuantityChange.bind(assertThisInitialized_default()(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(assertThisInitialized_default()(_this));
    _this.onSubmit = _this.onSubmit.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(ProductStockCard, [{
    key: "recordStockEvent",
    value: function recordStockEvent(eventName) {
      var eventProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      Object(tracks["b" /* recordEvent */])("activity_panel_stock_".concat(eventName), eventProps);
    }
  }, {
    key: "beginEdit",
    value: function beginEdit() {
      var _this2 = this;

      var product = this.props.product;
      this.setState({
        editing: true,
        quantity: product.stock_quantity
      }, function () {
        if (_this2.quantityInput) {
          _this2.quantityInput.focus();
        }
      });
      this.recordStockEvent('update_stock');
    }
  }, {
    key: "cancelEdit",
    value: function cancelEdit() {
      var product = this.props.product;
      this.setState({
        editing: false,
        quantity: product.stock_quantity
      });
      this.recordStockEvent('cancel');
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      if (event.keyCode === build_module["d" /* ESCAPE */]) {
        this.cancelEdit();
      }
    }
  }, {
    key: "onQuantityChange",
    value: function onQuantityChange(event) {
      this.setState({
        quantity: event.target.value
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this$props = this.props,
          product = _this$props.product,
          updateProductStock = _this$props.updateProductStock;
      var quantity = this.state.quantity;
      this.setState({
        editing: false,
        edited: true
      });
      updateProductStock(product, quantity);
      this.recordStockEvent('save', {
        quantity: quantity
      });
    }
  }, {
    key: "getActions",
    value: function getActions() {
      var editing = this.state.editing;

      if (editing) {
        return [Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
          key: "save",
          type: "submit",
          isPrimary: true
        }, Object(external_this_wp_i18n_["__"])('Save', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
          key: "cancel",
          type: "reset"
        }, Object(external_this_wp_i18n_["__"])('Cancel', 'woocommerce-admin'))];
      }

      return [Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
        key: "update",
        isSecondary: true,
        onClick: this.beginEdit
      }, Object(external_this_wp_i18n_["__"])('Update stock', 'woocommerce-admin'))];
    }
  }, {
    key: "getBody",
    value: function getBody() {
      var _this3 = this;

      var product = this.props.product;
      var _this$state = this.state,
          editing = _this$state.editing,
          quantity = _this$state.quantity;

      if (editing) {
        return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(base_control["a" /* default */], {
          className: "woocommerce-stock-activity-card__edit-quantity"
        }, Object(external_this_wp_element_["createElement"])("input", {
          className: "components-text-control__input",
          type: "number",
          value: quantity,
          onKeyDown: this.handleKeyDown,
          onChange: this.onQuantityChange,
          ref: function ref(input) {
            _this3.quantityInput = input;
          }
        })), Object(external_this_wp_element_["createElement"])("span", null, Object(external_this_wp_i18n_["__"])('in stock', 'woocommerce-admin')));
      }

      return Object(external_this_wp_element_["createElement"])("span", {
        className: "woocommerce-stock-activity-card__stock-quantity"
      }, Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('%d in stock', 'woocommerce-admin'), product.stock_quantity));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var product = this.props.product;
      var _this$state2 = this.state,
          edited = _this$state2.edited,
          editing = _this$state2.editing;
      var notifyLowStockAmount = Object(settings["g" /* getSetting */])('notifyLowStockAmount', 0);
      var lowStockAmount = Number.isFinite(product.low_stock_amount) ? product.low_stock_amount : notifyLowStockAmount;
      var isLowStock = product.stock_quantity <= lowStockAmount; // Hide cards that are not in low stock and have not been edited.
      // This allows clearing cards which are no longer in low stock after
      // closing & opening the panel without having to make another request.

      if (!isLowStock && !edited) {
        return null;
      }

      var title = Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Link"], {
        href: 'post.php?action=edit&post=' + (product.parent_id || product.id),
        onClick: function onClick() {
          return _this4.recordStockEvent('product_name');
        },
        type: "wp-admin"
      }, product.name);
      var subtitle = null;

      if (product.type === 'variation') {
        subtitle = Object.values(product.attributes).map(function (attr) {
          return attr.option;
        }).join(', ');
      }

      var productImage = Object(external_lodash_["get"])(product, ['images', 0]) || Object(external_lodash_["get"])(product, ['image']);
      var productImageClasses = classnames_default()('woocommerce-stock-activity-card__image-overlay__product', {
        'is-placeholder': !productImage || !productImage.src
      });
      var icon = Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-stock-activity-card__image-overlay"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: productImageClasses
      }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["ProductImage"], {
        product: product
      })));
      var activityCardClasses = classnames_default()('woocommerce-stock-activity-card', {
        'is-dimmed': !editing && !isLowStock
      });
      var activityCard = Object(external_this_wp_element_["createElement"])(activity_card["a" /* ActivityCard */], {
        className: activityCardClasses,
        title: title,
        subtitle: subtitle,
        icon: icon,
        actions: this.getActions()
      }, this.getBody());

      if (editing) {
        return Object(external_this_wp_element_["createElement"])("form", {
          onReset: this.cancelEdit,
          onSubmit: this.onSubmit
        }, activityCard);
      }

      return activityCard;
    }
  }]);

  return ProductStockCard;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var card = (Object(compose["a" /* default */])(Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('wc-api'),
      updateProductStock = _dispatch.updateProductStock;

  return {
    updateProductStock: updateProductStock
  };
}))(card_ProductStockCard));
// EXTERNAL MODULE: ./client/wc-api/constants.js
var constants = __webpack_require__(36);

// EXTERNAL MODULE: ./client/wc-api/with-select.js
var with_select = __webpack_require__(104);

// CONCATENATED MODULE: ./client/header/activity-panel/panels/stock/index.js







function stock_createSuper(Derived) { var hasNativeReflectConstruct = stock_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function stock_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */




/**
 * WooCommerce dependencies
 */


/**
 * Internal dependencies
 */








var stock_StockPanel = /*#__PURE__*/function (_Component) {
  inherits_default()(StockPanel, _Component);

  var _super = stock_createSuper(StockPanel);

  function StockPanel() {
    classCallCheck_default()(this, StockPanel);

    return _super.apply(this, arguments);
  }

  createClass_default()(StockPanel, [{
    key: "renderEmptyCard",
    value: function renderEmptyCard() {
      return Object(external_this_wp_element_["createElement"])(activity_card["a" /* ActivityCard */], {
        className: "woocommerce-empty-activity-card",
        title: Object(external_this_wp_i18n_["__"])('Your stock is in good shape.', 'woocommerce-admin'),
        icon: Object(external_this_wp_element_["createElement"])(dist_default.a, {
          icon: "checkmark",
          size: 48
        })
      }, Object(external_this_wp_i18n_["__"])('You currently have no products running low on stock.', 'woocommerce-admin'));
    }
  }, {
    key: "renderProducts",
    value: function renderProducts() {
      var products = this.props.products;

      if (products.length === 0) {
        return this.renderEmptyCard();
      }

      return products.map(function (product) {
        return Object(external_this_wp_element_["createElement"])(card, {
          key: product.id,
          product: product
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isError = _this$props.isError,
          isRequesting = _this$props.isRequesting,
          products = _this$props.products;

      if (isError) {
        var _title = Object(external_this_wp_i18n_["__"])('There was an error getting your low stock products. Please try again.', 'woocommerce-admin');

        var actionLabel = Object(external_this_wp_i18n_["__"])('Reload', 'woocommerce-admin');

        var actionCallback = function actionCallback() {
          // @todo Add tracking for how often an error is displayed, and the reload action is clicked.
          window.location.reload();
        };

        return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["EmptyContent"], {
          title: _title,
          actionLabel: actionLabel,
          actionURL: null,
          actionCallback: actionCallback
        }));
      }

      var title = isRequesting || products.length > 0 ? Object(external_this_wp_i18n_["__"])('Stock', 'woocommerce-admin') : Object(external_this_wp_i18n_["__"])('No products with low stock', 'woocommerce-admin');
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(activity_header["a" /* default */], {
        title: title
      }), Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Section"], null, isRequesting ? Object(external_this_wp_element_["createElement"])(activity_card["b" /* ActivityCardPlaceholder */], {
        className: "woocommerce-stock-activity-card",
        hasAction: true,
        lines: 1
      }) : this.renderProducts()));
    }
  }]);

  return StockPanel;
}(external_this_wp_element_["Component"]);

stock_StockPanel.propTypes = {
  products: prop_types_default.a.array.isRequired,
  isError: prop_types_default.a.bool,
  isRequesting: prop_types_default.a.bool
};
stock_StockPanel.defaultProps = {
  products: [],
  isError: false,
  isRequesting: false
};
/* harmony default export */ var stock = __webpack_exports__["default"] = (Object(compose["a" /* default */])(Object(with_select["a" /* default */])(function (select) {
  var _select = select('wc-api'),
      getItems = _select.getItems,
      getItemsError = _select.getItemsError,
      isGetItemsRequesting = _select.isGetItemsRequesting;

  var productsQuery = {
    page: 1,
    per_page: constants["d" /* QUERY_DEFAULTS */].pageSize,
    low_in_stock: true,
    status: 'publish'
  };
  var products = Array.from(getItems('products', productsQuery).values());
  var isError = Boolean(getItemsError('products', productsQuery));
  var isRequesting = isGetItemsRequesting('products', productsQuery);
  return {
    products: products,
    isError: isError,
    isRequesting: isRequesting
  };
}))(stock_StockPanel));

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ })

}]);