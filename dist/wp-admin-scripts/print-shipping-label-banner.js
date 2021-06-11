this["wc"] = this["wc"] || {}; this["wc"]["printShippingLabelBanner"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 528);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(75)();
}


/***/ }),

/***/ 10:
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var React = __webpack_require__(7);

var REACT_ELEMENT_TYPE =
  (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element')) ||
  0xeac7;

var emptyFunction = __webpack_require__(77);
var invariant = __webpack_require__(103);
var warning = __webpack_require__(104);

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

var didWarnAboutMaps = false;

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

function getIteratorFn(maybeIterable) {
  var iteratorFn =
    maybeIterable &&
    ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
      maybeIterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function(match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (component && typeof component === 'object' && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function traverseAllChildrenImpl(
  children,
  nameSoFar,
  callback,
  traverseContext
) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (
    children === null ||
    type === 'string' ||
    type === 'number' ||
    // The following is inlined from ReactElement. This means we can optimize
    // some checks. React Fiber also inlines this logic for similar purposes.
    (type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE)
  ) {
    callback(
      traverseContext,
      children,
      // If it's the only child, treat the name as if it was wrapped in an array
      // so that it's consistent if the number of children grows.
      nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar
    );
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(
        child,
        nextName,
        callback,
        traverseContext
      );
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (iteratorFn) {
      if (false) {}

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(
          child,
          nextName,
          callback,
          traverseContext
        );
      }
    } else if (type === 'object') {
      var addendum = '';
      if (false) {}
      var childrenString = '' + children;
      invariant(
        false,
        'Objects are not valid as a React child (found: %s).%s',
        childrenString === '[object Object]'
          ? 'object with keys {' + Object.keys(children).join(', ') + '}'
          : childrenString,
        addendum
      );
    }
  }

  return subtreeCount;
}

function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

function cloneAndReplaceKey(oldElement, newKey) {
  return React.cloneElement(
    oldElement,
    {key: newKey},
    oldElement.props !== undefined ? oldElement.props.children : undefined
  );
}

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;

var oneArgumentPooler = function(copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var addPoolingTo = function addPoolingTo(CopyConstructor, pooler) {
  // Casting as any so that flow ignores the actual implementation and trusts
  // it to match the type we declared
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};

var standardReleaser = function standardReleaser(instance) {
  var Klass = this;
  invariant(
    instance instanceof Klass,
    'Trying to release an instance into a pool of a different type.'
  );
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var fourArgumentPooler = function fourArgumentPooler(a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
  this.result = mapResult;
  this.keyPrefix = keyPrefix;
  this.func = mapFunction;
  this.context = mapContext;
  this.count = 0;
}
MapBookKeeping.prototype.destructor = function() {
  this.result = null;
  this.keyPrefix = null;
  this.func = null;
  this.context = null;
  this.count = 0;
};
addPoolingTo(MapBookKeeping, fourArgumentPooler);

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result;
  var keyPrefix = bookKeeping.keyPrefix;
  var func = bookKeeping.func;
  var context = bookKeeping.context;

  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(
      mappedChild,
      result,
      childKey,
      emptyFunction.thatReturnsArgument
    );
  } else if (mappedChild != null) {
    if (React.isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(
        mappedChild,
        // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        keyPrefix +
          (mappedChild.key && (!child || child.key !== mappedChild.key)
            ? escapeUserProvidedKey(mappedChild.key) + '/'
            : '') +
          childKey
      );
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = MapBookKeeping.getPooled(
    array,
    escapedPrefix,
    func,
    context
  );
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  MapBookKeeping.release(traverseContext);
}

var numericPropertyRegex = /^\d+$/;

var warnedAboutNumeric = false;

function createReactFragment(object) {
  if (typeof object !== 'object' || !object || Array.isArray(object)) {
    warning(
      false,
      'React.addons.createFragment only accepts a single object. Got: %s',
      object
    );
    return object;
  }
  if (React.isValidElement(object)) {
    warning(
      false,
      'React.addons.createFragment does not accept a ReactElement ' +
        'without a wrapper object.'
    );
    return object;
  }

  invariant(
    object.nodeType !== 1,
    'React.addons.createFragment(...): Encountered an invalid child; DOM ' +
      'elements are not valid children of React components.'
  );

  var result = [];

  for (var key in object) {
    if (false) {}
    mapIntoWithKeyPrefixInternal(
      object[key],
      result,
      key,
      emptyFunction.thatReturnsArgument
    );
  }

  return result;
}

module.exports = createReactFragment;


/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(77);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (false) { var printWarning; }

module.exports = warning;

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function identifyToken(item) {
	// {{/example}}
	if (item.match(/^\{\{\//)) {
		return {
			type: 'componentClose',
			value: item.replace(/\W/g, '')
		};
	}
	// {{example /}}
	if (item.match(/\/\}\}$/)) {
		return {
			type: 'componentSelfClosing',
			value: item.replace(/\W/g, '')
		};
	}
	// {{example}}
	if (item.match(/^\{\{/)) {
		return {
			type: 'componentOpen',
			value: item.replace(/\W/g, '')
		};
	}
	return {
		type: 'string',
		value: item
	};
}

module.exports = function (mixedString) {
	var tokenStrings = mixedString.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g); // split to components and strings
	return tokenStrings.map(identifyToken);
};
//# sourceMappingURL=tokenize.js.map

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["primitives"]; }());

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(80);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(33)["default"];

var assertThisInitialized = __webpack_require__(10);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */

/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps} props icon is the SVG component to render
 *                          size is a number specifiying the icon size in pixels
 *                          Other props will be passed to wrapped SVG component
 *
 * @return {JSX.Element}  Icon component
 */

function Icon(_ref) {
  var icon = _ref.icon,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["icon", "size"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["cloneElement"])(icon, _objectSpread({
    width: size,
    height: size
  }, props));
}

/* harmony default export */ __webpack_exports__["a"] = (Icon);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

(function() { module.exports = window["wc"]["data"]; }());

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADMIN_URL; });
/* unused harmony export COUNTRIES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CURRENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ORDER_STATUSES; });
/* unused harmony export SITE_TITLE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return WC_ASSET_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return setSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getAdminLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return enqueueScript; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */
 // Remove mutable data from settings object to prevent access. Data stores should be used instead.

var mutableSources = ['wcAdminSettings', 'preloadSettings'];
var settings = (typeof wcSettings === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(wcSettings)) === 'object' ? wcSettings : {};
var SOURCE = Object.keys(settings).reduce(function (source, key) {
  if (!mutableSources.includes(key)) {
    source[key] = settings[key];
  }

  return source;
}, {});
var ADMIN_URL = SOURCE.adminUrl;
var COUNTRIES = SOURCE.countries;
var CURRENCY = SOURCE.currency;
var LOCALE = SOURCE.locale;
var ORDER_STATUSES = SOURCE.orderStatuses;
var SITE_TITLE = SOURCE.siteTitle;
var WC_ASSET_URL = SOURCE.wcAssetUrl;
/**
 * Retrieves a setting value from the setting state.
 *
 * @param {string}   name                         The identifier for the setting.
 * @param {*}    [fallback=false]             The value to use as a fallback
 *                                                if the setting is not in the
 *                                                state.
 * @param {Function} [filter=( val ) => val]  	  A callback for filtering the
 *                                                value before it's returned.
 *                                                Receives both the found value
 *                                                (if it exists for the key) and
 *                                                the provided fallback arg.
 *
 * @return {*}  The value present in the settings state for the given
 *                   name.
 */

function getSetting(name) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (val) {
    return val;
  };

  if (mutableSources.includes(name)) {
    throw new Error(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Mutable settings should be accessed via data store.'));
  }

  var value = SOURCE.hasOwnProperty(name) ? SOURCE[name] : fallback;
  return filter(value, fallback);
}
/**
 * Sets a value to a property on the settings state.
 *
 * NOTE: This feature is to be removed in favour of data stores when a full migration
 * is complete.
 *
 * @deprecated
 *
 * @param {string}   name                        The setting property key for the
 *                                               setting being mutated.
 * @param {*}    value                       The value to set.
 * @param {Function} [filter=( val ) => val]     Allows for providing a callback
 *                                               to sanitize the setting (eg.
 *                                               ensure it's a number)
 */

function setSetting(name, value) {
  var filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (val) {
    return val;
  };

  if (mutableSources.includes(name)) {
    throw new Error(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Mutable settings should be mutated via data store.'));
  }

  SOURCE[name] = filter(value);
}
/**
 * Returns a string with the site's wp-admin URL appended. JS version of `admin_url`.
 *
 * @param {string} path Relative path.
 * @return {string} Full admin URL.
 */

function getAdminLink(path) {
  return (ADMIN_URL || '') + path;
}
/**
 * Adds a script to the page if it has not already been loaded. JS version of `wp_enqueue_script`.
 *
 * @param {Object} script WP_Script
 * @param {string} script.handle Script handle.
 * @param {string} script.src Script URL.
 */

function enqueueScript(script) {
  return new Promise(function (resolve, reject) {
    if (document.querySelector("#".concat(script.handle, "-js"))) {
      resolve();
    }

    var domElement = document.createElement('script');
    domElement.src = script.src;
    domElement.id = "".concat(script.handle, "-js");
    domElement.async = true;
    domElement.onload = resolve;
    domElement.onerror = reject;
    document.body.appendChild(domElement);
  });
}

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

(function() { module.exports = window["wc"]["tracks"]; }());

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * External Dependencies
                                                                                                                                                                                                                                                                               */


/**
 * Internal Dependencies
 */


var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCreateFragment = __webpack_require__(102);

var _reactAddonsCreateFragment2 = _interopRequireDefault(_reactAddonsCreateFragment);

var _tokenize = __webpack_require__(105);

var _tokenize2 = _interopRequireDefault(_tokenize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var currentMixedString = void 0;

function getCloseIndex(openIndex, tokens) {
	var openToken = tokens[openIndex],
	    nestLevel = 0,
	    token,
	    i;
	for (i = openIndex + 1; i < tokens.length; i++) {
		token = tokens[i];
		if (token.value === openToken.value) {
			if (token.type === 'componentOpen') {
				nestLevel++;
				continue;
			}
			if (token.type === 'componentClose') {
				if (nestLevel === 0) {
					return i;
				}
				nestLevel--;
			}
		}
	}
	// if we get this far, there was no matching close token
	throw new Error('Missing closing component token `' + openToken.value + '`');
}

function buildChildren(tokens, components) {
	var children = [],
	    childrenObject = {},
	    openComponent,
	    clonedOpenComponent,
	    openIndex,
	    closeIndex,
	    token,
	    i,
	    grandChildTokens,
	    grandChildren,
	    siblingTokens,
	    siblings;

	for (i = 0; i < tokens.length; i++) {
		token = tokens[i];
		if (token.type === 'string') {
			children.push(token.value);
			continue;
		}
		// component node should at least be set
		if (!components.hasOwnProperty(token.value) || typeof components[token.value] === 'undefined') {
			throw new Error('Invalid interpolation, missing component node: `' + token.value + '`');
		}
		// should be either ReactElement or null (both type "object"), all other types deprecated
		if (_typeof(components[token.value]) !== 'object') {
			throw new Error('Invalid interpolation, component node must be a ReactElement or null: `' + token.value + '`', '\n> ' + currentMixedString);
		}
		// we should never see a componentClose token in this loop
		if (token.type === 'componentClose') {
			throw new Error('Missing opening component token: `' + token.value + '`');
		}
		if (token.type === 'componentOpen') {
			openComponent = components[token.value];
			openIndex = i;
			break;
		}
		// componentSelfClosing token
		children.push(components[token.value]);
		continue;
	}

	if (openComponent) {
		closeIndex = getCloseIndex(openIndex, tokens);
		grandChildTokens = tokens.slice(openIndex + 1, closeIndex);
		grandChildren = buildChildren(grandChildTokens, components);
		clonedOpenComponent = _react2.default.cloneElement(openComponent, {}, grandChildren);
		children.push(clonedOpenComponent);

		if (closeIndex < tokens.length - 1) {
			siblingTokens = tokens.slice(closeIndex + 1);
			siblings = buildChildren(siblingTokens, components);
			children = children.concat(siblings);
		}
	}

	if (children.length === 1) {
		return children[0];
	}

	children.forEach(function (child, index) {
		if (child) {
			childrenObject['interpolation-child-' + index] = child;
		}
	});

	return (0, _reactAddonsCreateFragment2.default)(childrenObject);
}

function interpolate(options) {
	var mixedString = options.mixedString,
	    components = options.components,
	    throwErrors = options.throwErrors;


	currentMixedString = mixedString;

	if (!components) {
		return mixedString;
	}

	if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) !== 'object') {
		if (throwErrors) {
			throw new Error('Interpolation Error: unable to process `' + mixedString + '` because components is not an object');
		}

		return mixedString;
	}

	var tokens = (0, _tokenize2.default)(mixedString);

	try {
		return buildChildren(tokens, components);
	} catch (error) {
		if (throwErrors) {
			throw new Error('Interpolation Error: unable to process `' + mixedString + '` because of error `' + error.message + '`');
		}

		return mixedString;
	}
};

exports.default = interpolate;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ 5:
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

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(5);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(36);
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
var inherits = __webpack_require__(15);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(16);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external "regeneratorRuntime"
var external_regeneratorRuntime_ = __webpack_require__(6);
var external_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_regeneratorRuntime_);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(4);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/interpolate-components/lib/index.js
var lib = __webpack_require__(30);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(11);

// EXTERNAL MODULE: ./client/wc-admin-settings/index.js
var wc_admin_settings = __webpack_require__(28);

// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(29);

// EXTERNAL MODULE: ./client/wp-admin-scripts/print-shipping-label-banner/style.scss
var style = __webpack_require__(307);

// CONCATENATED MODULE: ./client/wp-admin-scripts/print-shipping-label-banner/dismiss-modal/index.js









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */






/**
 * Internal dependencies
 */


var dismiss_modal_DismissModal = /*#__PURE__*/function (_Component) {
  inherits_default()(DismissModal, _Component);

  var _super = _createSuper(DismissModal);

  function DismissModal() {
    var _this;

    classCallCheck_default()(this, DismissModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "setDismissed", function (timestamp) {
      _this.props.updateOptions({
        woocommerce_shipping_dismissed_timestamp: timestamp
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "hideBanner", function () {
      document.getElementById('woocommerce-admin-print-label').style.display = 'none';
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "remindMeLaterClicked", function () {
      var _this$props = _this.props,
          onCloseAll = _this$props.onCloseAll,
          trackElementClicked = _this$props.trackElementClicked;

      _this.setDismissed(Date.now());

      onCloseAll();

      _this.hideBanner();

      trackElementClicked('shipping_banner_dismiss_modal_remind_me_later');
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "closeForeverClicked", function () {
      var _this$props2 = _this.props,
          onCloseAll = _this$props2.onCloseAll,
          trackElementClicked = _this$props2.trackElementClicked;

      _this.setDismissed(-1);

      onCloseAll();

      _this.hideBanner();

      trackElementClicked('shipping_banner_dismiss_modal_close_forever');
    });

    return _this;
  }

  createClass_default()(DismissModal, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          onClose = _this$props3.onClose,
          visible = _this$props3.visible;

      if (!visible) {
        return null;
      }

      return Object(external_wp_element_["createElement"])(external_wp_components_["Modal"], {
        title: Object(external_wp_i18n_["__"])('Are you sure?', 'woocommerce-admin'),
        onRequestClose: onClose,
        className: "wc-admin-shipping-banner__dismiss-modal"
      }, Object(external_wp_element_["createElement"])("p", {
        className: "wc-admin-shipping-banner__dismiss-modal-help-text"
      }, Object(external_wp_i18n_["__"])('With WooCommerce Shipping you can Print shipping labels from your WooCommerce dashboard at the lowest USPS rates.', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("div", {
        className: "wc-admin-shipping-banner__dismiss-modal-actions"
      }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isSecondary: true,
        onClick: this.remindMeLaterClicked
      }, Object(external_wp_i18n_["__"])('Remind me later', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isPrimary: true,
        onClick: this.closeForeverClicked
      }, Object(external_wp_i18n_["__"])("I don't need this", 'woocommerce-admin'))));
    }
  }]);

  return DismissModal;
}(external_wp_element_["Component"]);
/* harmony default export */ var dismiss_modal = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(external_wc_data_["OPTIONS_STORE_NAME"]),
      updateOptions = _dispatch.updateOptions;

  return {
    updateOptions: updateOptions
  };
}))(dismiss_modal_DismissModal));
// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__(168);

// EXTERNAL MODULE: external ["wp","primitives"]
var external_wp_primitives_ = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/warning.js


/**
 * WordPress dependencies
 */

var warning = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"
}));
/* harmony default export */ var library_warning = (warning);
//# sourceMappingURL=warning.js.map
// CONCATENATED MODULE: ./client/wp-admin-scripts/print-shipping-label-banner/setup-notice/index.js


var _setupErrorDescriptio;



/**
 * External dependencies
 */


var setupErrorTypes = {
  DOWNLOAD: 'download',
  INSTALL: 'install',
  ACTIVATE: 'activate',
  SETUP: 'setup',
  START: 'start'
};
var setupErrorDescriptions = (_setupErrorDescriptio = {}, defineProperty_default()(_setupErrorDescriptio, setupErrorTypes.DOWNLOAD, Object(external_wp_i18n_["__"])('download', 'woocommerce-admin')), defineProperty_default()(_setupErrorDescriptio, setupErrorTypes.INSTALL, Object(external_wp_i18n_["__"])('install', 'woocommerce-admin')), defineProperty_default()(_setupErrorDescriptio, setupErrorTypes.ACTIVATE, Object(external_wp_i18n_["__"])('activate', 'woocommerce-admin')), defineProperty_default()(_setupErrorDescriptio, setupErrorTypes.SETUP, Object(external_wp_i18n_["__"])('set up', 'woocommerce-admin')), defineProperty_default()(_setupErrorDescriptio, setupErrorTypes.START, Object(external_wp_i18n_["__"])('start', 'woocommerce-admin')), _setupErrorDescriptio);
function SetupNotice(_ref) {
  var isSetupError = _ref.isSetupError,
      errorReason = _ref.errorReason;

  var getErrorMessage = function getErrorMessage(errorType) {
    // Default to 'set up' description if the error type somehow doesn't exist.
    var description = errorType in setupErrorDescriptions ? setupErrorDescriptions[errorType] : setupErrorDescriptions[setupErrorTypes.SETUP];
    return Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('Unable to %s the plugin. Refresh the page and try again.', 'woocommerce-admin'), description);
  };

  if (!isSetupError) {
    return null;
  }

  return Object(external_wp_element_["createElement"])("div", {
    className: "wc-admin-shipping-banner-install-error"
  }, Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: library_warning,
    className: "warning-icon"
  }), getErrorMessage(errorReason));
}
// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__(31);
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// CONCATENATED MODULE: ./client/wp-admin-scripts/print-shipping-label-banner/wcs-api.js
/**
 * External dependencies
 */

function acceptWcsTos() {
  var path = '/wc/v1/connect/tos';
  return external_wp_apiFetch_default()({
    path: path,
    method: 'POST',
    data: {
      accepted: true
    }
  });
}
function getWcsAssets() {
  var path = '/wc/v1/connect/assets';
  return external_wp_apiFetch_default()({
    path: path,
    method: 'GET'
  });
}
// CONCATENATED MODULE: ./client/wp-admin-scripts/print-shipping-label-banner/shipping-banner/index.js











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function shipping_banner_createSuper(Derived) { var hasNativeReflectConstruct = shipping_banner_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function shipping_banner_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */











/**
 * Internal dependencies
 */





var wcAdminAssetUrl = Object(wc_admin_settings["h" /* getSetting */])('wcAdminAssetUrl', '');
var wcsPluginSlug = 'woocommerce-services';
var shipping_banner_ShippingBanner = /*#__PURE__*/function (_Component) {
  inherits_default()(ShippingBanner, _Component);

  var _super = shipping_banner_createSuper(ShippingBanner);

  function ShippingBanner(props) {
    var _this;

    classCallCheck_default()(this, ShippingBanner);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "isSetupError", function () {
      return _this.state.wcsSetupError;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "closeDismissModal", function () {
      _this.setState({
        isDismissModalOpen: false
      });

      _this.trackElementClicked('shipping_banner_dismiss_modal_close_button');
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "openDismissModal", function () {
      _this.setState({
        isDismissModalOpen: true
      });

      _this.trackElementClicked('shipping_banner_dimiss');
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "hideBanner", function () {
      _this.setState({
        showShippingBanner: false
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "createShippingLabelClicked", function () {
      var activePlugins = _this.props.activePlugins;

      _this.setState({
        isShippingLabelButtonBusy: true
      });

      _this.trackElementClicked('shipping_banner_create_label');

      if (!activePlugins.includes(wcsPluginSlug)) {
        _this.installAndActivatePlugins(wcsPluginSlug);
      } else {
        _this.acceptTosAndGetWCSAssets();
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "woocommerceServiceLinkClicked", function () {
      _this.trackElementClicked('shipping_banner_woocommerce_service_link');
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "trackBannerEvent", function (eventName) {
      var customProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _this$props = _this.props,
          activePlugins = _this$props.activePlugins,
          isJetpackConnected = _this$props.isJetpackConnected;
      Object(external_wc_tracks_["recordEvent"])(eventName, _objectSpread({
        banner_name: 'wcadmin_install_wcs_prompt',
        jetpack_installed: activePlugins.includes('jetpack'),
        jetpack_connected: isJetpackConnected,
        wcs_installed: activePlugins.includes(wcsPluginSlug)
      }, customProps));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "trackImpression", function () {
      _this.trackBannerEvent('banner_impression');
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "trackElementClicked", function (element) {
      _this.trackBannerEvent('banner_element_clicked', {
        element: element
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getInstallText", function () {
      var activePlugins = _this.props.activePlugins;

      if (activePlugins.includes(wcsPluginSlug)) {
        // If WCS is active, then the only remaining step is to agree to the ToS.
        return Object(external_wp_i18n_["__"])('You\'ve already installed WooCommerce Shipping. By clicking "Create shipping label", you agree to its {{tosLink}}Terms of Service{{/tosLink}}.', 'woocommerce-admin');
      }

      return Object(external_wp_i18n_["__"])('By clicking "Create shipping label", {{wcsLink}}WooCommerce Shipping{{/wcsLink}} will be installed and you agree to its {{tosLink}}Terms of Service{{/tosLink}}.', 'woocommerce-admin');
    });

    var orderId = new URL(window.location.href).searchParams.get('post');
    _this.state = {
      showShippingBanner: true,
      isDismissModalOpen: false,
      setupErrorReason: setupErrorTypes.SETUP,
      orderId: parseInt(orderId, 10),
      wcsAssetsLoaded: false,
      wcsAssetsLoading: false,
      wcsSetupError: false,
      isShippingLabelButtonBusy: false,
      installText: _this.getInstallText(),
      isWcsModalOpen: false
    };
    return _this;
  }

  createClass_default()(ShippingBanner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var showShippingBanner = this.state.showShippingBanner;

      if (showShippingBanner) {
        this.trackImpression();
      }
    }
  }, {
    key: "installAndActivatePlugins",
    value: function () {
      var _installAndActivatePlugins = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee(pluginSlug) {
        var _this$props2, installPlugins, activatePlugins, isRequesting, install, activation;

        return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Avoid double activating.
                _this$props2 = this.props, installPlugins = _this$props2.installPlugins, activatePlugins = _this$props2.activatePlugins, isRequesting = _this$props2.isRequesting;

                if (!isRequesting) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", false);

              case 3:
                _context.next = 5;
                return installPlugins([pluginSlug]);

              case 5:
                install = _context.sent;

                if (!(install.success !== true)) {
                  _context.next = 9;
                  break;
                }

                this.setState({
                  setupErrorReason: setupErrorTypes.INSTALL,
                  wcsSetupError: true
                });
                return _context.abrupt("return");

              case 9:
                _context.next = 11;
                return activatePlugins([pluginSlug]);

              case 11:
                activation = _context.sent;

                if (!(activation.success !== true)) {
                  _context.next = 15;
                  break;
                }

                this.setState({
                  setupErrorReason: setupErrorTypes.ACTIVATE,
                  wcsSetupError: true
                });
                return _context.abrupt("return");

              case 15:
                this.acceptTosAndGetWCSAssets();

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function installAndActivatePlugins(_x) {
        return _installAndActivatePlugins.apply(this, arguments);
      }

      return installAndActivatePlugins;
    }()
  }, {
    key: "acceptTosAndGetWCSAssets",
    value: function acceptTosAndGetWCSAssets() {
      var _this2 = this;

      return acceptWcsTos().then(function () {
        return getWcsAssets();
      }).then(function (wcsAssets) {
        return _this2.loadWcsAssets(wcsAssets);
      }).catch(function () {
        return _this2.setState({
          wcsSetupError: true
        });
      });
    }
  }, {
    key: "generateMetaBoxHtml",
    value: function generateMetaBoxHtml(nodeId, title, args) {
      var argsJsonString = JSON.stringify(args).replace(/"/g, '&quot;'); // JS has no native html_entities so we just replace.

      var togglePanelText = Object(external_wp_i18n_["__"])('Toggle panel:', 'woocommerce-admin');

      return "\n<div id=\"".concat(nodeId, "\" class=\"postbox\">\n\t<div class=\"postbox-header\">\n\t\t<h2 class=\"hndle\"><span>").concat(title, "</span></h2>\n\t\t<div class=\"handle-actions\">\n\t\t\t<button type=\"button\" class=\"handlediv\" aria-expanded=\"true\">\n\t\t\t\t<span class=\"screen-reader-text\">").concat(togglePanelText, " ").concat(title, "</span>\n\t\t\t\t<span class=\"toggle-indicator\" aria-hidden=\"true\"></span>\n\t\t\t</button>\n\t\t</div>\n\t</div>\n\t<div class=\"inside\">\n\t\t<div class=\"wcc-root woocommerce wc-connect-create-shipping-label\" data-args=\"").concat(argsJsonString, "\">\n\t\t</div>\n\t</div>\n</div>\n");
    }
  }, {
    key: "loadWcsAssets",
    value: function loadWcsAssets(_ref) {
      var _this3 = this;

      var assets = _ref.assets;

      if (this.state.wcsAssetsLoaded || this.state.wcsAssetsLoading) {
        this.openWcsModal();
        return;
      }

      this.setState({
        wcsAssetsLoading: true
      });
      var jsPath = assets.wc_connect_admin_script;
      var stylePath = assets.wc_connect_admin_style;

      if (undefined === window.wcsPluginData) {
        var assetPath = jsPath.substring(0, jsPath.lastIndexOf('/') + 1);
        window.wcsPluginData = {
          assetPath: assetPath
        };
      }

      var orderId = this.state.orderId;
      var itemsCount = this.props.itemsCount;
      var shippingLabelContainerHtml = this.generateMetaBoxHtml('woocommerce-order-label', Object(external_wp_i18n_["__"])('Shipping Label', 'woocommerce-admin'), {
        order: {
          id: orderId
        },
        context: 'shipping_label',
        items: itemsCount
      }); // Insert shipping label metabox just above main order details box.

      document.getElementById('woocommerce-order-data').insertAdjacentHTML('beforebegin', shippingLabelContainerHtml);
      var shipmentTrackingHtml = this.generateMetaBoxHtml('woocommerce-order-shipment-tracking', Object(external_wp_i18n_["__"])('Shipment Tracking', 'woocommerce-admin'), {
        order: {
          id: orderId
        },
        context: 'shipment_tracking',
        items: itemsCount
      }); // Insert tracking metabox in the side after the order actions.

      document.getElementById('woocommerce-order-actions').insertAdjacentHTML('afterend', shipmentTrackingHtml);

      if (window.jQuery) {
        // Need to refresh so the new metaboxes are sortable.
        window.jQuery('#normal-sortables').sortable('refresh');
        window.jQuery('#side-sortables').sortable('refresh');
        window.jQuery('#woocommerce-order-label').hide();
      }

      Promise.all([new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = jsPath;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      }), new Promise(function (resolve, reject) {
        if (stylePath !== '') {
          var head = document.getElementsByTagName('head')[0];
          var link = document.createElement('link');
          link.rel = 'stylesheet';
          link.type = 'text/css';
          link.href = stylePath;
          link.media = 'all';
          link.onload = resolve;
          link.onerror = reject;
          head.appendChild(link);
        } else {
          resolve();
        }
      })]).then(function () {
        _this3.setState({
          wcsAssetsLoaded: true,
          wcsAssetsLoading: false,
          isShippingLabelButtonBusy: false
        });

        _this3.openWcsModal();
      });
    }
  }, {
    key: "openWcsModal",
    value: function openWcsModal() {
      var _this4 = this;

      if (window.wcsGetAppStoreAsync) {
        window.wcsGetAppStoreAsync('wc-connect-create-shipping-label').then(function (wcsStore) {
          var state = wcsStore.getState();
          var orderId = _this4.state.orderId;
          var siteId = state.ui.selectedSiteId;
          var wcsStoreUnsubscribe = wcsStore.subscribe(function () {
            var latestState = wcsStore.getState();
            var shippingLabelState = Object(external_lodash_["get"])(latestState, ['extensions', 'woocommerce', 'woocommerceServices', siteId, 'shippingLabel', orderId], null);
            var labelSettingsState = Object(external_lodash_["get"])(latestState, ['extensions', 'woocommerce', 'woocommerceServices', siteId, 'labelSettings'], null);
            var packageState = Object(external_lodash_["get"])(latestState, ['extensions', 'woocommerce', 'woocommerceServices', siteId, 'packages'], null);
            var locationsState = Object(external_lodash_["get"])(latestState, ['extensions', 'woocommerce', 'sites', siteId, 'data', 'locations']);

            if (shippingLabelState && labelSettingsState && labelSettingsState.meta && packageState && locationsState) {
              if (shippingLabelState.loaded && labelSettingsState.meta.isLoaded && packageState.isLoaded && Object(external_lodash_["isArray"])(locationsState) && !_this4.state.isWcsModalOpen) {
                if (window.jQuery) {
                  _this4.setState({
                    isWcsModalOpen: true
                  });

                  window.jQuery('.shipping-label__new-label-button').click();
                }

                wcsStore.dispatch({
                  type: 'NOTICE_CREATE',
                  notice: {
                    duration: 10000,
                    status: 'is-success',
                    text: Object(external_wp_i18n_["__"])('Plugin installed and activated', 'woocommerce-admin')
                  }
                });
              } else if (shippingLabelState.showPurchaseDialog) {
                wcsStoreUnsubscribe();

                if (window.jQuery) {
                  window.jQuery('#woocommerce-order-label').show();
                }
              }
            }
          });
          document.getElementById('woocommerce-admin-print-label').style.display = 'none';
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isDismissModalOpen = _this$state.isDismissModalOpen,
          showShippingBanner = _this$state.showShippingBanner,
          isShippingLabelButtonBusy = _this$state.isShippingLabelButtonBusy;

      if (!showShippingBanner) {
        return null;
      }

      return Object(external_wp_element_["createElement"])("div", null, Object(external_wp_element_["createElement"])("div", {
        className: "wc-admin-shipping-banner-container"
      }, Object(external_wp_element_["createElement"])("img", {
        className: "wc-admin-shipping-banner-illustration",
        src: wcAdminAssetUrl + 'shippingillustration.svg',
        alt: Object(external_wp_i18n_["__"])('Shipping ', 'woocommerce-admin')
      }), Object(external_wp_element_["createElement"])("div", {
        className: "wc-admin-shipping-banner-blob"
      }, Object(external_wp_element_["createElement"])("h3", null, Object(external_wp_i18n_["__"])('Print discounted shipping labels with a click.', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("p", null, lib_default()({
        mixedString: this.state.installText,
        components: {
          tosLink: Object(external_wp_element_["createElement"])(external_wp_components_["ExternalLink"], {
            href: "https://wordpress.com/tos",
            target: "_blank",
            type: "external"
          }),
          wcsLink: Object(external_wp_element_["createElement"])(external_wp_components_["ExternalLink"], {
            href: "https://woocommerce.com/products/shipping/",
            target: "_blank",
            type: "external",
            onClick: this.woocommerceServiceLinkClicked
          })
        }
      })), Object(external_wp_element_["createElement"])(SetupNotice, {
        isSetupError: this.isSetupError(),
        errorReason: this.state.setupErrorReason
      })), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        disabled: isShippingLabelButtonBusy,
        isPrimary: true,
        isBusy: isShippingLabelButtonBusy,
        onClick: this.createShippingLabelClicked
      }, Object(external_wp_i18n_["__"])('Create shipping label', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("button", {
        onClick: this.openDismissModal,
        type: "button",
        className: "notice-dismiss",
        disabled: this.state.isShippingLabelButtonBusy
      }, Object(external_wp_element_["createElement"])("span", {
        className: "screen-reader-text"
      }, Object(external_wp_i18n_["__"])('Close Print Label Banner.', 'woocommerce-admin')))), Object(external_wp_element_["createElement"])(dismiss_modal, {
        visible: isDismissModalOpen,
        onClose: this.closeDismissModal,
        onCloseAll: this.hideBanner,
        trackElementClicked: this.trackElementClicked
      }));
    }
  }]);

  return ShippingBanner;
}(external_wp_element_["Component"]);
shipping_banner_ShippingBanner.propTypes = {
  itemsCount: prop_types_default.a.number.isRequired,
  isJetpackConnected: prop_types_default.a.bool.isRequired,
  activePlugins: prop_types_default.a.array.isRequired,
  activatePlugins: prop_types_default.a.func.isRequired,
  installPlugins: prop_types_default.a.func.isRequired,
  isRequesting: prop_types_default.a.bool.isRequired
};
/* harmony default export */ var shipping_banner = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select(external_wc_data_["PLUGINS_STORE_NAME"]),
      isPluginsRequesting = _select.isPluginsRequesting,
      isJetpackConnected = _select.isJetpackConnected,
      getActivePlugins = _select.getActivePlugins;

  var isRequesting = isPluginsRequesting('activatePlugins') || isPluginsRequesting('installPlugins');
  return {
    isRequesting: isRequesting,
    isJetpackConnected: isJetpackConnected(),
    activePlugins: getActivePlugins()
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(external_wc_data_["PLUGINS_STORE_NAME"]),
      activatePlugins = _dispatch.activatePlugins,
      installPlugins = _dispatch.installPlugins;

  return {
    activatePlugins: activatePlugins,
    installPlugins: installPlugins
  };
}))(shipping_banner_ShippingBanner));
// CONCATENATED MODULE: ./client/wp-admin-scripts/print-shipping-label-banner/index.js



function print_shipping_label_banner_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function print_shipping_label_banner_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { print_shipping_label_banner_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { print_shipping_label_banner_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


var metaBox = document.getElementById('wc-admin-shipping-banner-root');
var print_shipping_label_banner_args = metaBox.dataset.args && JSON.parse(metaBox.dataset.args) || {}; // Render the header.

var HydratedShippingBanner = Object(external_wc_data_["withPluginsHydration"])(print_shipping_label_banner_objectSpread(print_shipping_label_banner_objectSpread({}, window.wcSettings.plugins), {}, {
  jetpackStatus: window.wcSettings.dataEndpoints.jetpackStatus
}))(shipping_banner);
Object(external_wp_element_["render"])(Object(external_wp_element_["createElement"])(HydratedShippingBanner, {
  itemsCount: print_shipping_label_banner_args.items
}), metaBox);

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

(function() { module.exports = window["regeneratorRuntime"]; }());

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
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

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(76);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ })

/******/ });