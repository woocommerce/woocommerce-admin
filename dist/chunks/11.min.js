(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/@wordpress/keycodes/build-module/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@wordpress/keycodes/build-module/index.js ***!
  \****************************************************************/
/*! exports provided: BACKSPACE, TAB, ENTER, ESCAPE, SPACE, LEFT, UP, RIGHT, DOWN, DELETE, F10, ALT, CTRL, COMMAND, SHIFT, ZERO, modifiers, rawShortcut, displayShortcutList, displayShortcut, shortcutAriaLabel, isKeyboardEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKSPACE", function() { return BACKSPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB", function() { return TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTER", function() { return ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESCAPE", function() { return ESCAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE", function() { return SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT", function() { return LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UP", function() { return UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT", function() { return RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWN", function() { return DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F10", function() { return F10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALT", function() { return ALT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CTRL", function() { return CTRL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMAND", function() { return COMMAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHIFT", function() { return SHIFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZERO", function() { return ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifiers", function() { return modifiers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rawShortcut", function() { return rawShortcut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayShortcutList", function() { return displayShortcutList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayShortcut", function() { return displayShortcut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortcutAriaLabel", function() { return shortcutAriaLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKeyboardEvent", function() { return isKeyboardEvent; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./platform */ "./node_modules/@wordpress/keycodes/build-module/platform.js");



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


/** @typedef {typeof ALT | CTRL | COMMAND | SHIFT } WPModifierPart */

/** @typedef {'primary' | 'primaryShift' | 'primaryAlt' | 'secondary' | 'access' | 'ctrl' | 'alt' | 'ctrlShift' | 'shift' | 'shiftAlt'} WPKeycodeModifier */

/**
 * An object of handler functions for each of the possible modifier
 * combinations. A handler will return a value for a given key.
 *
 * @template T
 *
 * @typedef {Record<WPKeycodeModifier, T>} WPModifierHandler
 */

/* eslint-disable jsdoc/valid-types */

/**
 * @template T
 *
 * @typedef {(character: string, isApple?: () => boolean) => T} WPKeyHandler
 */

/** @typedef {(event: KeyboardEvent, character: string, isApple?: () => boolean) => boolean} WPEventKeyHandler */

/* eslint-enable jsdoc/valid-types */

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
 * @type {WPModifierHandler< ( isApple: () => boolean ) => WPModifierPart[]>}
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
 *
 * These are intended for user with the KeyboardShortcuts.
 *
 * @example
 * ```js
 * // Assuming macOS:
 * rawShortcut.primary( 'm' )
 * // "meta+m""
 * ```
 *
 * @type {WPModifierHandler<WPKeyHandler<string>>} Keyed map of functions to raw
 *                                                 shortcuts.
 */

var rawShortcut = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["mapValues"])(modifiers, function (modifier) {
  return (
    /** @type {WPKeyHandler<string>} */
    function (character) {
      var _isApple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _platform__WEBPACK_IMPORTED_MODULE_4__["isAppleOS"];

      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(modifier(_isApple)), [character.toLowerCase()]).join('+');
    }
  );
});
/**
 * Return an array of the parts of a keyboard shortcut chord for display.
 *
 * @example
 * ```js
 * // Assuming macOS:
 * displayShortcutList.primary( 'm' );
 * // [ "⌘", "M" ]
 * ```
 *
 * @type {WPModifierHandler<WPKeyHandler<string[]>>} Keyed map of functions to
 *                                                   shortcut sequences.
 */

var displayShortcutList = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["mapValues"])(modifiers, function (modifier) {
  return (
    /** @type {WPKeyHandler<string[]>} */
    function (character) {
      var _replacementKeyMap;

      var _isApple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _platform__WEBPACK_IMPORTED_MODULE_4__["isAppleOS"];

      var isApple = _isApple();

      var replacementKeyMap = (_replacementKeyMap = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_replacementKeyMap, ALT, isApple ? '⌥' : 'Alt'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_replacementKeyMap, CTRL, isApple ? '⌃' : 'Ctrl'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_replacementKeyMap, COMMAND, '⌘'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_replacementKeyMap, SHIFT, isApple ? '⇧' : 'Shift'), _replacementKeyMap);
      var modifierKeys = modifier(_isApple).reduce(function (accumulator, key) {
        var replacementKey = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(replacementKeyMap, key, key); // If on the Mac, adhere to platform convention and don't show plus between keys.

        if (isApple) {
          return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(accumulator), [replacementKey]);
        }

        return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(accumulator), [replacementKey, '+']);
      },
      /** @type {string[]} */
      []);
      var capitalizedCharacter = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["capitalize"])(character);
      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(modifierKeys), [capitalizedCharacter]);
    }
  );
});
/**
 * An object that contains functions to display shortcuts.
 *
 * @example
 * ```js
 * // Assuming macOS:
 * displayShortcut.primary( 'm' );
 * // "⌘M"
 * ```
 *
 * @type {WPModifierHandler<WPKeyHandler<string>>} Keyed map of functions to
 *                                                 display shortcuts.
 */

var displayShortcut = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["mapValues"])(displayShortcutList, function (shortcutList) {
  return (
    /** @type {WPKeyHandler<string>} */
    function (character) {
      var _isApple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _platform__WEBPACK_IMPORTED_MODULE_4__["isAppleOS"];

      return shortcutList(character, _isApple).join('');
    }
  );
});
/**
 * An object that contains functions to return an aria label for a keyboard
 * shortcut.
 *
 * @example
 * ```js
 * // Assuming macOS:
 * shortcutAriaLabel.primary( '.' );
 * // "Command + Period"
 * ```
 *
 * @type {WPModifierHandler<WPKeyHandler<string>>} Keyed map of functions to
 *                                                 shortcut ARIA labels.
 */

var shortcutAriaLabel = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["mapValues"])(modifiers, function (modifier) {
  return (
    /** @type {WPKeyHandler<string>} */
    function (character) {
      var _replacementKeyMap2;

      var _isApple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _platform__WEBPACK_IMPORTED_MODULE_4__["isAppleOS"];

      var isApple = _isApple();

      var replacementKeyMap = (_replacementKeyMap2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_replacementKeyMap2, SHIFT, 'Shift'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_replacementKeyMap2, COMMAND, isApple ? 'Command' : 'Control'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_replacementKeyMap2, CTRL, 'Control'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_replacementKeyMap2, ALT, isApple ? 'Option' : 'Alt'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_replacementKeyMap2, ',', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Comma')), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_replacementKeyMap2, '.', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Period')), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_replacementKeyMap2, '`', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Backtick')), _replacementKeyMap2);
      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(modifier(_isApple)), [character]).map(function (key) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["capitalize"])(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(replacementKeyMap, key, key));
      }).join(isApple ? ' ' : ' + ');
    }
  );
});
/**
 * From a given KeyboardEvent, returns an array of active modifier constants for
 * the event.
 *
 * @param {KeyboardEvent} event Keyboard event.
 *
 * @return {Array<WPModifierPart>} Active modifier constants.
 */

function getEventModifiers(event) {
  return (
    /** @type {WPModifierPart[]} */
    [ALT, CTRL, COMMAND, SHIFT].filter(function (key) {
      return event[
      /** @type {'altKey' | 'ctrlKey' | 'metaKey' | 'shiftKey'} */
      "".concat(key, "Key")];
    })
  );
}
/**
 * An object that contains functions to check if a keyboard event matches a
 * predefined shortcut combination.
 *
 * @example
 * ```js
 * // Assuming an event for ⌘M key press:
 * isKeyboardEvent.primary( event, 'm' );
 * // true
 * ```
 *
 * @type {WPModifierHandler<WPEventKeyHandler>} Keyed map of functions
 *                                                       to match events.
 */


var isKeyboardEvent = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["mapValues"])(modifiers, function (getModifiers) {
  return (
    /** @type {WPEventKeyHandler} */
    function (event, character) {
      var _isApple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _platform__WEBPACK_IMPORTED_MODULE_4__["isAppleOS"];

      var mods = getModifiers(_isApple);
      var eventMods = getEventModifiers(event);

      if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["xor"])(mods, eventMods).length) {
        return false;
      }

      if (!character) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["includes"])(mods, event.key.toLowerCase());
      }

      return event.key === character;
    }
  );
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/keycodes/build-module/platform.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/keycodes/build-module/platform.js ***!
  \*******************************************************************/
/*! exports provided: isAppleOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAppleOS", function() { return isAppleOS; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Return true if platform is MacOS.
 *
 * @param {Window} _window window object by default; used for DI testing.
 *
 * @return {boolean} True if MacOS; false otherwise.
 */

function isAppleOS() {
  var _window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

  var platform = _window.navigator.platform;
  return platform.indexOf('Mac') !== -1 || Object(lodash__WEBPACK_IMPORTED_MODULE_0__["includes"])(['iPad', 'iPhone'], platform);
}
//# sourceMappingURL=platform.js.map

/***/ }),

/***/ "./node_modules/gridicons/dist/star-outline.js":
/*!*****************************************************!*\
  !*** ./node_modules/gridicons/dist/star-outline.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=Object.assign||function(a){for(var c,b=1;b<arguments.length;b++)for(var d in c=arguments[b],c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d]);return a};Object.defineProperty(exports,'__esModule',{value:!0});exports.default=function(a){var b=a.size,c=b===void 0?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,['size','onClick','icon','className']),j=['gridicon','gridicons-star-outline',f,!!function h(k){return 0==k%18}(c)&&'needs-offset',!1,!1].filter(Boolean).join(' ');return _react2.default.createElement('svg',_extends({className:j,height:c,width:c,onClick:d},g,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 6.308l1.176 3.167.347.936.997.042 3.374.14-2.647 2.09-.784.62.27.963.91 3.25-2.813-1.872-.83-.553-.83.552-2.814 1.87.91-3.248.27-.962-.783-.62-2.648-2.092 3.374-.14.996-.04.347-.936L12 6.308M12 2L9.418 8.953 2 9.257l5.822 4.602L5.82 21 12 16.89 18.18 21l-2.002-7.14L22 9.256l-7.418-.305L12 2z'})))};var _react=__webpack_require__(/*! react */ "react"),_react2=_interopRequireDefault(_react);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){var d={};for(var c in a)0<=b.indexOf(c)||Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}module.exports=exports['default'];


/***/ }),

/***/ "./node_modules/gridicons/dist/star.js":
/*!*********************************************!*\
  !*** ./node_modules/gridicons/dist/star.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=Object.assign||function(a){for(var c,b=1;b<arguments.length;b++)for(var d in c=arguments[b],c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d]);return a};Object.defineProperty(exports,'__esModule',{value:!0});exports.default=function(a){var b=a.size,c=b===void 0?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,['size','onClick','icon','className']),j=['gridicon','gridicons-star',f,!!function h(k){return 0==k%18}(c)&&'needs-offset',!1,!1].filter(Boolean).join(' ');return _react2.default.createElement('svg',_extends({className:j,height:c,width:c,onClick:d},g,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 2l2.582 6.953L22 9.257l-5.822 4.602L18.18 21 12 16.89 5.82 21l2.002-7.14L2 9.256l7.418-.304'})))};var _react=__webpack_require__(/*! react */ "react"),_react2=_interopRequireDefault(_react);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){var d={};for(var c in a)0<=b.indexOf(c)||Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}module.exports=exports['default'];


/***/ })

}]);
//# sourceMappingURL=11.min.js.map