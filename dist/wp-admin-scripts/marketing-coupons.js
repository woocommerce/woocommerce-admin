this["wc"] = this["wc"] || {}; this["wc"]["marketingCoupons"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 576);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),
/* 1 */
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
  module.exports = __webpack_require__(215)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  /* global globalThis -- safe */
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(96)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),
/* 5 */
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 7 */
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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var shared = __webpack_require__(58);
var has = __webpack_require__(11);
var uid = __webpack_require__(55);
var NATIVE_SYMBOL = __webpack_require__(62);
var USE_SYMBOL_AS_UID = __webpack_require__(93);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var getOwnPropertyDescriptor = __webpack_require__(33).f;
var createNonEnumerableProperty = __webpack_require__(19);
var redefine = __webpack_require__(27);
var setGlobal = __webpack_require__(46);
var copyConstructorProperties = __webpack_require__(103);
var isForced = __webpack_require__(74);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(6);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 14 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 16 */
/***/ (function(module, exports) {

(function() { module.exports = window["regeneratorRuntime"]; }());

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(72);
var anObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(40);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(13);
var definePropertyModule = __webpack_require__(17);
var createPropertyDescriptor = __webpack_require__(39);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(71);
var requireObjectCoercible = __webpack_require__(32);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 23 */
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

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(204);

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

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(108);

var assertThisInitialized = __webpack_require__(18);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var createNonEnumerableProperty = __webpack_require__(19);
var has = __webpack_require__(11);
var setGlobal = __webpack_require__(46);
var inspectSource = __webpack_require__(68);
var InternalStateModule = __webpack_require__(45);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),
/* 28 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["primitives"]; }());

/***/ }),
/* 29 */,
/* 30 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(81);
var global = __webpack_require__(3);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(13);
var propertyIsEnumerableModule = __webpack_require__(76);
var createPropertyDescriptor = __webpack_require__(39);
var toIndexedObject = __webpack_require__(21);
var toPrimitive = __webpack_require__(40);
var has = __webpack_require__(11);
var IE8_DOM_DEFINE = __webpack_require__(72);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(42);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["dataControls"]; }());

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(12);
var toObject = __webpack_require__(38);
var nativeKeys = __webpack_require__(54);
var fails = __webpack_require__(6);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(32);

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(12);
var $filter = __webpack_require__(75).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(89);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 42 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(182);

var iterableToArrayLimit = __webpack_require__(183);

var unsupportedIterableToArray = __webpack_require__(131);

var nonIterableRest = __webpack_require__(184);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(179);

var iterableToArray = __webpack_require__(180);

var unsupportedIterableToArray = __webpack_require__(131);

var nonIterableSpread = __webpack_require__(181);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(106);
var global = __webpack_require__(3);
var isObject = __webpack_require__(10);
var createNonEnumerableProperty = __webpack_require__(19);
var objectHas = __webpack_require__(11);
var shared = __webpack_require__(47);
var sharedKey = __webpack_require__(52);
var hiddenKeys = __webpack_require__(36);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var createNonEnumerableProperty = __webpack_require__(19);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var setGlobal = __webpack_require__(46);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var DOMIterables = __webpack_require__(127);
var forEach = __webpack_require__(149);
var createNonEnumerableProperty = __webpack_require__(19);

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),
/* 50 */,
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(12);
var $map = __webpack_require__(75).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(89);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(58);
var uid = __webpack_require__(55);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(12);
var global = __webpack_require__(3);
var getBuiltIn = __webpack_require__(31);
var IS_PURE = __webpack_require__(57);
var DESCRIPTORS = __webpack_require__(13);
var NATIVE_SYMBOL = __webpack_require__(62);
var USE_SYMBOL_AS_UID = __webpack_require__(93);
var fails = __webpack_require__(6);
var has = __webpack_require__(11);
var isArray = __webpack_require__(84);
var isObject = __webpack_require__(10);
var anObject = __webpack_require__(9);
var toObject = __webpack_require__(38);
var toIndexedObject = __webpack_require__(21);
var toPrimitive = __webpack_require__(40);
var createPropertyDescriptor = __webpack_require__(39);
var nativeObjectCreate = __webpack_require__(69);
var objectKeys = __webpack_require__(54);
var getOwnPropertyNamesModule = __webpack_require__(56);
var getOwnPropertyNamesExternal = __webpack_require__(147);
var getOwnPropertySymbolsModule = __webpack_require__(79);
var getOwnPropertyDescriptorModule = __webpack_require__(33);
var definePropertyModule = __webpack_require__(17);
var propertyIsEnumerableModule = __webpack_require__(76);
var createNonEnumerableProperty = __webpack_require__(19);
var redefine = __webpack_require__(27);
var shared = __webpack_require__(58);
var sharedKey = __webpack_require__(52);
var hiddenKeys = __webpack_require__(36);
var uid = __webpack_require__(55);
var wellKnownSymbol = __webpack_require__(8);
var wrappedWellKnownSymbolModule = __webpack_require__(119);
var defineWellKnownSymbol = __webpack_require__(148);
var setToStringTag = __webpack_require__(90);
var InternalStateModule = __webpack_require__(45);
var $forEach = __webpack_require__(75).forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(73);
var enumBugKeys = __webpack_require__(48);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(73);
var enumBugKeys = __webpack_require__(48);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(57);
var store = __webpack_require__(47);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.9.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 59 */,
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(12);
var fails = __webpack_require__(6);
var toIndexedObject = __webpack_require__(21);
var nativeGetOwnPropertyDescriptor = __webpack_require__(33).f;
var DESCRIPTORS = __webpack_require__(13);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(13);
var ownKeys = __webpack_require__(86);
var toIndexedObject = __webpack_require__(21);
var getOwnPropertyDescriptorModule = __webpack_require__(33);
var createProperty = __webpack_require__(102);

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var IS_NODE = __webpack_require__(77);
var V8_VERSION = __webpack_require__(63);
var fails = __webpack_require__(6);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  /* global Symbol -- required for testing */
  return !Symbol.sham &&
    // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    (IS_NODE ? V8_VERSION === 38 : V8_VERSION > 37 && V8_VERSION < 41);
});


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var userAgent = __webpack_require__(87);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(12);
var getBuiltIn = __webpack_require__(31);
var aFunction = __webpack_require__(70);
var anObject = __webpack_require__(9);
var isObject = __webpack_require__(10);
var create = __webpack_require__(69);
var bind = __webpack_require__(212);
var fails = __webpack_require__(6);

var nativeConstruct = getBuiltIn('Reflect', 'construct');

// `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});
var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),
/* 65 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(12);
var fails = __webpack_require__(6);
var isArray = __webpack_require__(84);
var isObject = __webpack_require__(10);
var toObject = __webpack_require__(38);
var toLength = __webpack_require__(34);
var createProperty = __webpack_require__(102);
var arraySpeciesCreate = __webpack_require__(109);
var arrayMethodHasSpeciesSupport = __webpack_require__(89);
var wellKnownSymbol = __webpack_require__(8);
var V8_VERSION = __webpack_require__(63);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var isObject = __webpack_require__(10);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(47);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var defineProperties = __webpack_require__(104);
var enumBugKeys = __webpack_require__(48);
var hiddenKeys = __webpack_require__(36);
var html = __webpack_require__(98);
var documentCreateElement = __webpack_require__(67);
var sharedKey = __webpack_require__(52);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(6);
var classof = __webpack_require__(30);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(13);
var fails = __webpack_require__(6);
var createElement = __webpack_require__(67);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(11);
var toIndexedObject = __webpack_require__(21);
var indexOf = __webpack_require__(83).indexOf;
var hiddenKeys = __webpack_require__(36);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(6);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(94);
var IndexedObject = __webpack_require__(71);
var toObject = __webpack_require__(38);
var toLength = __webpack_require__(34);
var arraySpeciesCreate = __webpack_require__(109);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(30);
var global = __webpack_require__(3);

module.exports = classof(global.process) == 'process';


/***/ }),
/* 78 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["url"]; }());

/***/ }),
/* 79 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);

module.exports = global;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(8);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(21);
var toLength = __webpack_require__(34);
var toAbsoluteIndex = __webpack_require__(97);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(30);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADMIN_URL; });
/* unused harmony export COUNTRIES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CURRENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ORDER_STATUSES; });
/* unused harmony export SITE_TITLE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return WC_ASSET_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return setSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getAdminLink; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(107);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




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
    throw new Error(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Mutable settings should be accessed via data store.'));
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
    throw new Error(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Mutable settings should be mutated via data store.'));
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

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(31);
var getOwnPropertyNamesModule = __webpack_require__(56);
var getOwnPropertySymbolsModule = __webpack_require__(79);
var anObject = __webpack_require__(9);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(31);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(12);
var exec = __webpack_require__(91);

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(6);
var wellKnownSymbol = __webpack_require__(8);
var V8_VERSION = __webpack_require__(63);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(17).f;
var has = __webpack_require__(11);
var wellKnownSymbol = __webpack_require__(8);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(114);
var stickyHelpers = __webpack_require__(137);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
// eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 92 */
/***/ (function(module, exports) {

(function() { module.exports = window["wc"]["tracks"]; }());

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(62);

module.exports = NATIVE_SYMBOL
  /* global Symbol -- safe */
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(70);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 95 */,
/* 96 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(42);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(31);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 99 */
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


var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCreateFragment = __webpack_require__(243);

var _reactAddonsCreateFragment2 = _interopRequireDefault(_reactAddonsCreateFragment);

var _tokenize = __webpack_require__(246);

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
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(82);
var redefine = __webpack_require__(27);
var toString = __webpack_require__(130);

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),
/* 101 */,
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(40);
var definePropertyModule = __webpack_require__(17);
var createPropertyDescriptor = __webpack_require__(39);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(11);
var ownKeys = __webpack_require__(86);
var getOwnPropertyDescriptorModule = __webpack_require__(33);
var definePropertyModule = __webpack_require__(17);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(13);
var definePropertyModule = __webpack_require__(17);
var anObject = __webpack_require__(9);
var objectKeys = __webpack_require__(54);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Navigation; });
/* unused harmony export NavigationBackButton */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NavigationGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NavigationMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NavigationItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return useSlot; });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Prioritize exports of non-experimental components over experimental.
 */

var Navigation = _wordpress_components__WEBPACK_IMPORTED_MODULE_0__["Navigation"] || _wordpress_components__WEBPACK_IMPORTED_MODULE_0__["__experimentalNavigation"];
var NavigationBackButton = _wordpress_components__WEBPACK_IMPORTED_MODULE_0__["NavigationBackButton"] || _wordpress_components__WEBPACK_IMPORTED_MODULE_0__["__experimentalNavigationBackButton"];
var NavigationGroup = _wordpress_components__WEBPACK_IMPORTED_MODULE_0__["NavigationGroup"] || _wordpress_components__WEBPACK_IMPORTED_MODULE_0__["__experimentalNavigationGroup"];
var NavigationMenu = _wordpress_components__WEBPACK_IMPORTED_MODULE_0__["NavigationMenu"] || _wordpress_components__WEBPACK_IMPORTED_MODULE_0__["__experimentalNavigationMenu"];
var NavigationItem = _wordpress_components__WEBPACK_IMPORTED_MODULE_0__["NavigationItem"] || _wordpress_components__WEBPACK_IMPORTED_MODULE_0__["__experimentalNavigationItem"];
var Text = _wordpress_components__WEBPACK_IMPORTED_MODULE_0__["Text"] || _wordpress_components__WEBPACK_IMPORTED_MODULE_0__["__experimentalText"];
var useSlot = _wordpress_components__WEBPACK_IMPORTED_MODULE_0__["useSlot"] || _wordpress_components__WEBPACK_IMPORTED_MODULE_0__["__experimentalUseSlot"];

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var inspectSource = __webpack_require__(68);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(12);
var $includes = __webpack_require__(83).includes;
var addToUnscopables = __webpack_require__(118);

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),
/* 108 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var isArray = __webpack_require__(84);
var wellKnownSymbol = __webpack_require__(8);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(88);
var redefine = __webpack_require__(27);
var fails = __webpack_require__(6);
var wellKnownSymbol = __webpack_require__(8);
var regexpExec = __webpack_require__(91);
var createNonEnumerableProperty = __webpack_require__(19);

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(30);
var regexpExec = __webpack_require__(91);

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(82);
var classofRaw = __webpack_require__(30);
var wellKnownSymbol = __webpack_require__(8);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(9);

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 115 */,
/* 116 */,
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(8);
var create = __webpack_require__(69);
var definePropertyModule = __webpack_require__(17);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(8);

exports.f = wellKnownSymbol;


/***/ }),
/* 120 */,
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(6);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(125).charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(21);
var addToUnscopables = __webpack_require__(118);
var Iterators = __webpack_require__(110);
var InternalStateModule = __webpack_require__(45);
var defineIterator = __webpack_require__(166);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 124 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(42);
var requireObjectCoercible = __webpack_require__(32);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 126 */,
/* 127 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _inheritsLoose; });

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

/***/ }),
/* 129 */,
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(82);
var classof = __webpack_require__(113);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(124);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 132 */,
/* 133 */
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
/* 134 */,
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(111);
var anObject = __webpack_require__(9);
var toLength = __webpack_require__(34);
var toInteger = __webpack_require__(42);
var requireObjectCoercible = __webpack_require__(32);
var advanceStringIndex = __webpack_require__(122);
var getSubstitution = __webpack_require__(168);
var regExpExec = __webpack_require__(112);

var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
});


/***/ }),
/* 136 */,
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(6);

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(9);
var aPossiblePrototype = __webpack_require__(160);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 144 */,
/* 145 */
/***/ (function(module, exports) {

(function() { module.exports = window["wc"]["components"]; }());

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var DOMIterables = __webpack_require__(127);
var ArrayIteratorMethods = __webpack_require__(123);
var createNonEnumerableProperty = __webpack_require__(19);
var wellKnownSymbol = __webpack_require__(8);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(21);
var nativeGetOwnPropertyNames = __webpack_require__(56).f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(81);
var has = __webpack_require__(11);
var wrappedWellKnownSymbolModule = __webpack_require__(119);
var defineProperty = __webpack_require__(17).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(75).forEach;
var arrayMethodIsStrict = __webpack_require__(121);

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 161 */,
/* 162 */,
/* 163 */
/***/ (function(module, exports) {

(function() { module.exports = window["ReactDOM"]; }());

/***/ }),
/* 164 */,
/* 165 */,
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(12);
var createIteratorConstructor = __webpack_require__(199);
var getPrototypeOf = __webpack_require__(174);
var setPrototypeOf = __webpack_require__(143);
var setToStringTag = __webpack_require__(90);
var createNonEnumerableProperty = __webpack_require__(19);
var redefine = __webpack_require__(27);
var wellKnownSymbol = __webpack_require__(8);
var IS_PURE = __webpack_require__(57);
var Iterators = __webpack_require__(110);
var IteratorsCore = __webpack_require__(173);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 167 */,
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(38);

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),
/* 169 */,
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(111);
var anObject = __webpack_require__(9);
var requireObjectCoercible = __webpack_require__(32);
var sameValue = __webpack_require__(214);
var regExpExec = __webpack_require__(112);

// @@search logic
fixRegExpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative(nativeSearch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),
/* 171 */,
/* 172 */,
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(6);
var getPrototypeOf = __webpack_require__(174);
var createNonEnumerableProperty = __webpack_require__(19);
var has = __webpack_require__(11);
var wellKnownSymbol = __webpack_require__(8);
var IS_PURE = __webpack_require__(57);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(11);
var toObject = __webpack_require__(38);
var sharedKey = __webpack_require__(52);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(213);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(124);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 180 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 181 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 182 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 183 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 184 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),
/* 185 */,
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(12);
var isObject = __webpack_require__(10);
var isArray = __webpack_require__(84);
var toAbsoluteIndex = __webpack_require__(97);
var toLength = __webpack_require__(34);
var toIndexedObject = __webpack_require__(21);
var createProperty = __webpack_require__(102);
var wellKnownSymbol = __webpack_require__(8);
var arrayMethodHasSpeciesSupport = __webpack_require__(89);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return STORE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_NAMESPACE; });
var STORE_KEY = 'wc/marketing';
var API_NAMESPACE = '/wc-admin/marketing';

/***/ }),
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(173).IteratorPrototype;
var create = __webpack_require__(69);
var createPropertyDescriptor = __webpack_require__(39);
var setToStringTag = __webpack_require__(90);
var Iterators = __webpack_require__(110);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(70);
var isObject = __webpack_require__(10);

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(6);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 214 */
/***/ (function(module, exports) {

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(216);

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
/* 216 */
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
/* 217 */,
/* 218 */,
/* 219 */
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
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(13);
var global = __webpack_require__(3);
var has = __webpack_require__(11);
var isObject = __webpack_require__(10);
var defineProperty = __webpack_require__(17).f;
var copyConstructorProperties = __webpack_require__(103);

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */
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
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(source, excluded);
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
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(220);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_experimental__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(105);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(412);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_7__);




/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



var Card = function Card(props) {
  var title = props.title,
      description = props.description,
      children = props.children,
      className = props.className;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, 'woocommerce-admin-marketing-card')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "e"], {
    variant: "title.small"
  }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_6__[/* Text */ "e"], {
    variant: "subtitle.small",
    className: "woocommerce-admin-marketing-card-subtitle"
  }, description))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, children));
};

Card.propTypes = {
  /**
   * Card title.
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Card description.
   */
  description: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Additional class name to style the component.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * A renderable component (or string) which will be displayed as the content of this item. Generally a `ToggleControl`.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node
};
/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var React = __webpack_require__(20);

var REACT_ELEMENT_TYPE =
  (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element')) ||
  0xeac7;

var emptyFunction = __webpack_require__(219);
var invariant = __webpack_require__(244);
var warning = __webpack_require__(245);

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
/* 244 */
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
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(219);

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
/* 246 */
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
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ components_button; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ product_icon; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ slider; });

// UNUSED EXPORTS: Card

// NAMESPACE OBJECT: ./client/marketing/components/product-icon/icons/index.js
var icons_namespaceObject = {};
__webpack_require__.r(icons_namespaceObject);
__webpack_require__.d(icons_namespaceObject, "blank", function() { return library_blank; });
__webpack_require__.d(icons_namespaceObject, "amazonEbayIntegration", function() { return amazon_ebay; });
__webpack_require__.d(icons_namespaceObject, "woocommerceAmazonEbayIntegration", function() { return amazon_ebay; });
__webpack_require__.d(icons_namespaceObject, "automatewoo", function() { return library_automatewoo; });
__webpack_require__.d(icons_namespaceObject, "automatewooAlt", function() { return automatewoo_alt; });
__webpack_require__.d(icons_namespaceObject, "facebook", function() { return library_facebook; });
__webpack_require__.d(icons_namespaceObject, "facebookForWoocommerce", function() { return library_facebook; });
__webpack_require__.d(icons_namespaceObject, "googleAds", function() { return library_google; });
__webpack_require__.d(icons_namespaceObject, "klikenMarketingForGoogle", function() { return library_google; });
__webpack_require__.d(icons_namespaceObject, "hubspotForWoocommerce", function() { return library_hubspot; });
__webpack_require__.d(icons_namespaceObject, "mailchimpForWoocommerce", function() { return library_mailchimp; });
__webpack_require__.d(icons_namespaceObject, "woocommerceStoreCredit", function() { return currency_dollar; });
__webpack_require__.d(icons_namespaceObject, "woocommerceFreeGiftCoupons", function() { return library_gift; });
__webpack_require__.d(icons_namespaceObject, "woocommerceUrlCoupons", function() { return library_link; });
__webpack_require__.d(icons_namespaceObject, "woocommerceGroupCoupons", function() { return library_people; });
__webpack_require__.d(icons_namespaceObject, "woocommerceSmartCoupons", function() { return library_tip; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(80);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(15);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./client/marketing/components/button/style.scss
var button_style = __webpack_require__(411);

// CONCATENATED MODULE: ./client/marketing/components/button/index.js



/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/* harmony default export */ var components_button = (function (props) {
  return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], extends_default()({}, props, {
    className: classnames_default()(props.className, 'woocommerce-admin-marketing-button')
  }));
});
// EXTERNAL MODULE: ./client/marketing/components/card/index.js
var card = __webpack_require__(232);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(22);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(23);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(24);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(25);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(14);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__(426);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(5);

// EXTERNAL MODULE: ./client/marketing/components/product-icon/style.scss
var product_icon_style = __webpack_require__(413);

// EXTERNAL MODULE: external ["wp","primitives"]
var external_wp_primitives_ = __webpack_require__(28);

// CONCATENATED MODULE: ./client/marketing/components/product-icon/icons/library/blank.js


/**
 * External dependencies
 */

var blank = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  width: "36",
  height: "36",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
});
/* harmony default export */ var library_blank = (blank);
// CONCATENATED MODULE: ./client/marketing/components/product-icon/icons/library/amazon-ebay.js


/**
 * External dependencies
 */

var amazonEbay = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  viewBox: "0 0 100 100"
}, Object(external_wp_element_["createElement"])("defs", null, Object(external_wp_element_["createElement"])("clipPath", {
  id: "b"
}, Object(external_wp_element_["createElement"])("rect", {
  width: "100",
  height: "100"
}))), Object(external_wp_element_["createElement"])("g", {
  id: "a",
  clipPath: "url(#b)"
}, Object(external_wp_element_["createElement"])("rect", {
  width: "100",
  height: "100",
  fill: "#fff"
}), Object(external_wp_element_["createElement"])("rect", {
  width: "100",
  height: "100",
  fill: "#eee"
}), Object(external_wp_element_["createElement"])("g", {
  transform: "translate(9 25.655)"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M179.753,195.8c-4.732,3.488-11.591,5.349-17.5,5.349a31.66,31.66,0,0,1-21.374-8.156c-.443-.4-.046-.946.486-.634a43.018,43.018,0,0,0,21.384,5.671,42.523,42.523,0,0,0,16.312-3.335c.8-.34,1.471.525.688,1.106",
  transform: "translate(-129.235 -176.611)",
  fill: "#f90",
  fillRule: "evenodd"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M577.807,183.949c-.6-.773-4-.365-5.522-.184-.464.057-.535-.347-.117-.638,2.7-1.9,7.142-1.354,7.66-.716s-.135,5.09-2.676,7.213c-.39.326-.762.152-.588-.28.571-1.425,1.85-4.619,1.244-5.395",
  transform: "translate(-525.323 -167.01)",
  fill: "#f90",
  fillRule: "evenodd"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M572.708,6.758V4.908a.457.457,0,0,1,.468-.468h8.284a.461.461,0,0,1,.479.468V6.493a2.605,2.605,0,0,1-.624,1.163l-4.292,6.129a9.146,9.146,0,0,1,4.725,1.014.843.843,0,0,1,.44.72v1.974c0,.269-.3.585-.61.422a9.542,9.542,0,0,0-8.752.014c-.287.156-.588-.156-.588-.425V15.627a2.238,2.238,0,0,1,.3-1.272l4.973-7.132h-4.328a.458.458,0,0,1-.479-.464",
  transform: "translate(-525.64 -4.078)",
  fillRule: "evenodd"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M173.431,15.624h-2.52a.476.476,0,0,1-.45-.429V2.261a.473.473,0,0,1,.486-.464h2.35a.475.475,0,0,1,.457.432V3.92h.046a3.463,3.463,0,0,1,6.589,0,3.722,3.722,0,0,1,6.4-.982c.8,1.088.634,2.669.634,4.055l0,8.163a.476.476,0,0,1-.486.468h-2.517a.479.479,0,0,1-.454-.468V8.3a16.192,16.192,0,0,0-.071-2.424,1.312,1.312,0,0,0-1.482-1.113,1.674,1.674,0,0,0-1.506,1.06,7.831,7.831,0,0,0-.234,2.478v6.855a.476.476,0,0,1-.486.468h-2.517a.476.476,0,0,1-.454-.468l0-6.855c0-1.443.238-3.566-1.553-3.566-1.811,0-1.74,2.07-1.74,3.566v6.855a.476.476,0,0,1-.486.468",
  transform: "translate(-156.58 -1.399)",
  fillRule: "evenodd"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M714.982,1.524c3.739,0,5.763,3.211,5.763,7.295,0,3.945-2.237,7.075-5.763,7.075-3.672,0-5.671-3.211-5.671-7.213,0-4.027,2.024-7.156,5.671-7.156M715,4.164c-1.857,0-1.974,2.531-1.974,4.108s-.025,4.955,1.953,4.955c1.953,0,2.045-2.722,2.045-4.381a11.959,11.959,0,0,0-.376-3.431A1.577,1.577,0,0,0,715,4.164",
  transform: "translate(-651.552 -1.399)",
  fillRule: "evenodd"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M875.817,15.624h-2.51a.479.479,0,0,1-.454-.468l0-12.938a.477.477,0,0,1,.486-.422h2.336a.482.482,0,0,1,.45.362V4.136h.046c.705-1.769,1.694-2.612,3.435-2.612a3.307,3.307,0,0,1,2.942,1.524c.659,1.035.659,2.775.659,4.027v8.142a.484.484,0,0,1-.486.408h-2.527a.477.477,0,0,1-.447-.408V8.191c0-1.414.163-3.484-1.577-3.484a1.647,1.647,0,0,0-1.457,1.035,5.724,5.724,0,0,0-.4,2.449v6.965a.485.485,0,0,1-.493.468",
  transform: "translate(-801.775 -1.399)",
  fillRule: "evenodd"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M413.163,8.046a4.93,4.93,0,0,1-.471,2.673,2.048,2.048,0,0,1-1.744,1.145c-.968,0-1.535-.737-1.535-1.825,0-2.148,1.925-2.538,3.75-2.538v.546m2.541,6.143a.526.526,0,0,1-.6.06,6.143,6.143,0,0,1-1.446-1.68,4.991,4.991,0,0,1-4.154,1.833,3.575,3.575,0,0,1-3.771-3.927,4.277,4.277,0,0,1,2.687-4.119,17.463,17.463,0,0,1,4.739-.876V5.154a3.214,3.214,0,0,0-.308-1.825,1.677,1.677,0,0,0-1.414-.656,1.917,1.917,0,0,0-2.024,1.514.527.527,0,0,1-.439.461l-2.442-.262a.444.444,0,0,1-.376-.528C406.719.893,409.4,0,411.795,0a5.714,5.714,0,0,1,3.8,1.255C416.818,2.4,416.7,3.928,416.7,5.59V9.517a3.447,3.447,0,0,0,.95,2.336.477.477,0,0,1-.011.67c-.514.429-1.428,1.226-1.932,1.673l0-.007",
  transform: "translate(-372.698 0)",
  fillRule: "evenodd"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M7.426,8.046a4.93,4.93,0,0,1-.471,2.673,2.043,2.043,0,0,1-1.744,1.145c-.968,0-1.531-.737-1.531-1.825C3.679,7.89,5.6,7.5,7.426,7.5v.546m2.541,6.143a.526.526,0,0,1-.6.06,6.2,6.2,0,0,1-1.446-1.68A4.986,4.986,0,0,1,3.771,14.4,3.576,3.576,0,0,1,0,10.474,4.282,4.282,0,0,1,2.687,6.356,17.462,17.462,0,0,1,7.426,5.48V5.154a3.243,3.243,0,0,0-.3-1.825,1.686,1.686,0,0,0-1.414-.656A1.921,1.921,0,0,0,3.679,4.186a.527.527,0,0,1-.436.461L.8,4.385a.446.446,0,0,1-.376-.528C.985.893,3.662,0,6.058,0a5.714,5.714,0,0,1,3.8,1.255C11.08,2.4,10.963,3.928,10.963,5.59V9.517a3.447,3.447,0,0,0,.95,2.336.473.473,0,0,1-.007.67c-.514.429-1.428,1.226-1.932,1.673l-.007-.007",
  transform: "translate(0 0)",
  fillRule: "evenodd"
})), Object(external_wp_element_["createElement"])("g", {
  transform: "translate(18.9 54.637)"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M8.055,26.308C3.716,26.308.1,28.149.1,33.7c0,4.4,2.431,7.171,8.067,7.171,6.633,0,7.059-4.37,7.059-4.37H12.011s-.689,2.353-4.04,2.353a4.4,4.4,0,0,1-4.693-4.428H15.562V32.807c0-2.557-1.623-6.5-7.507-6.5Zm-.112,2.073c2.6,0,4.37,1.592,4.37,3.977H3.349C3.349,29.826,5.661,28.381,7.943,28.381Z",
  transform: "translate(0 -20.83)",
  fill: "#e53238"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M75.169.1V17.254c0,.974-.069,2.341-.069,2.341h3.066s.11-.982.11-1.879c0,0,1.515,2.37,5.633,2.37a6.961,6.961,0,0,0,7.283-7.325A6.922,6.922,0,0,0,83.915,5.52c-4.279,0-5.609,2.311-5.609,2.311V.1Zm7.955,7.542c2.945,0,4.818,2.186,4.818,5.119a4.857,4.857,0,0,1-4.8,5.2c-3.143,0-4.839-2.454-4.839-5.175C78.306,10.254,79.827,7.642,83.123,7.642Z",
  transform: "translate(-59.609)",
  fill: "#0064d2"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M159.834,26.308c-6.528,0-6.947,3.574-6.947,4.146h3.249s.17-2.087,3.473-2.087c2.146,0,3.809.982,3.809,2.871v.672h-3.809c-5.057,0-7.731,1.479-7.731,4.482,0,2.955,2.47,4.562,5.809,4.562,4.55,0,6.015-2.514,6.015-2.514,0,1,.077,1.985.077,1.985h2.888s-.112-1.221-.112-2V31.669c0-4.428-3.572-5.36-6.722-5.36Zm3.585,7.619v.9c0,1.169-.721,4.075-4.968,4.075-2.326,0-3.323-1.161-3.323-2.507C155.128,33.943,158.486,33.927,163.419,33.927Z",
  transform: "translate(-120.634 -20.83)",
  fill: "#f5af02"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M214.879,29.041h3.655l5.246,10.51,5.234-10.51h3.311l-9.533,18.711h-3.473l2.751-5.216Z",
  transform: "translate(-170.706 -23.002)",
  fill: "#86b817"
}))));
/* harmony default export */ var amazon_ebay = (amazonEbay);
// CONCATENATED MODULE: ./client/marketing/components/product-icon/icons/library/automatewoo.js


/**
 * External dependencies
 */

var automatewoo = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  viewBox: "0 0 100 100"
}, Object(external_wp_element_["createElement"])("defs", null, Object(external_wp_element_["createElement"])("clipPath", {
  id: "b"
}, Object(external_wp_element_["createElement"])("rect", {
  width: "100",
  height: "100"
}))), Object(external_wp_element_["createElement"])("g", {
  id: "a",
  clipPath: "url(#b)"
}, Object(external_wp_element_["createElement"])("rect", {
  width: "100",
  height: "100",
  fill: "#fff"
}), Object(external_wp_element_["createElement"])("rect", {
  width: "100",
  height: "100",
  fill: "#7532e4"
}), Object(external_wp_element_["createElement"])("g", {
  transform: "translate(-43.503 -133.512)"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M78.217,193.13H64.405l-2.823,7.764H54.6L67.648,166.9h7.669l12.934,33.995H81.059Zm-11.6-6.047h9.4L71.33,174.245Z",
  transform: "translate(0 0)",
  fill: "#1ff2e6"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M246.639,166.9h6.753l-9.4,33.995h-6.81l-7.764-24.208-7.764,24.208h-6.906L205.3,166.9h7l6.238,23.388,7.535-23.388h6.849l7.592,23.483Z",
  transform: "translate(-121.952)",
  fill: "#1ff2e6"
}))));
/* harmony default export */ var library_automatewoo = (automatewoo);
// CONCATENATED MODULE: ./client/marketing/components/product-icon/icons/library/automatewoo-alt.js


/**
 * External dependencies
 */

var automatewooAlt = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M4.67708 14.1615h3.77084l.77604 2.1198h1.96354L7.65625 7H5.5625L2 16.2813h1.90625l.77083-2.1198zm3.17188-1.6511H5.28125l1.28646-3.50519 1.28125 3.50519zM22.9791 7h-1.8437l-1.6719 6.4115L17.3906 7h-1.8698l-2.0573 6.3854L11.7604 7H9.8489l2.5781 9.2813h1.8854l2.1198-6.60942 2.1198 6.60942h1.8594L22.9791 7z"
}));
/* harmony default export */ var automatewoo_alt = (automatewooAlt);
// CONCATENATED MODULE: ./client/marketing/components/product-icon/icons/library/facebook.js


/**
 * External dependencies
 */

var facebook = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  width: "36",
  height: "36",
  viewBox: "0 0 36 36",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M34 0H2C0.8 0 0 0.8 0 2V34C0 35 0.8 36 2 36H19.2V22H14.6V16.6H19.2V12.6C19.2 8 22 5.4 26.2 5.4C28.2 5.4 29.8 5.6 30.4 5.6V10.4H27.6C25.4 10.4 25 11.4 25 13V16.4H30.4L29.6 22H25V36H34C35 36 36 35.2 36 34V2C36 0.8 35.2 0 34 0Z",
  fill: "#3B5997"
}));
/* harmony default export */ var library_facebook = (facebook);
// CONCATENATED MODULE: ./client/marketing/components/product-icon/icons/library/google.js


/**
 * External dependencies
 */

var google = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  viewBox: "0 0 100 100"
}, Object(external_wp_element_["createElement"])("defs", null, Object(external_wp_element_["createElement"])("clipPath", {
  id: "b"
}, Object(external_wp_element_["createElement"])("rect", {
  width: "100",
  height: "100"
}))), Object(external_wp_element_["createElement"])("g", {
  id: "a",
  clipPath: "url(#b)"
}, Object(external_wp_element_["createElement"])("rect", {
  width: "100",
  height: "100",
  fill: "#fff"
}), Object(external_wp_element_["createElement"])("rect", {
  width: "100",
  height: "100",
  fill: "#eee"
}), Object(external_wp_element_["createElement"])("g", {
  transform: "translate(17 7.967)"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M83.982,7.646a11.959,11.959,0,0,1,2.825-4.477,11.065,11.065,0,0,1,17.4,2.585c2.665,4.851,5.49,9.594,8.235,14.392,4.584,7.969,9.221,15.937,13.752,23.933a11.017,11.017,0,1,1-19.269,10.687q-6.037-10.514-12.1-21a2.415,2.415,0,0,0-.293-.426,4.336,4.336,0,0,1-.88-1.306c-1.786-3.145-3.625-6.263-5.41-9.381C87.1,20.626,85.9,18.627,84.755,16.6a11.036,11.036,0,0,1-1.466-5.863,8.171,8.171,0,0,1,.693-3.092",
  transform: "translate(-61.088 0)",
  fill: "#3c8bd9"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M31.255,28.6a15.329,15.329,0,0,0-.506,2.932,11.513,11.513,0,0,0,1.6,6.263q4.4,7.556,8.768,15.165c.267.453.48.906.746,1.333-1.6,2.772-3.2,5.517-4.824,8.289C34.8,66.445,32.561,70.336,30.3,74.2c-.107,0-.133-.053-.16-.133a1.652,1.652,0,0,1,.107-.613,10.727,10.727,0,0,0-2.559-10.581,10.157,10.157,0,0,0-6.263-3.225,10.816,10.816,0,0,0-8.555,2.372c-.453.346-.746.853-1.279,1.119a.178.178,0,0,1-.187-.133c1.279-2.212,2.532-4.424,3.811-6.636q7.915-13.752,15.858-27.478c.053-.107.133-.187.187-.293",
  transform: "translate(-8.362 -20.954)",
  fill: "#fabc04"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M4.173,147.8c.506-.453.986-.933,1.519-1.359a11.016,11.016,0,0,1,17.617,6.689,11.714,11.714,0,0,1-.426,5.677,2.788,2.788,0,0,1-.107.453c-.24.426-.453.88-.72,1.306a10.715,10.715,0,0,1-10.447,5.57,10.94,10.94,0,0,1-10.1-9.541A10.663,10.663,0,0,1,2.974,149.5c.267-.48.586-.906.879-1.386.133-.107.08-.32.32-.32",
  transform: "translate(-1.029 -105.664)",
  fill: "#34a852"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M10.982,157.707c-.107.107-.107.293-.293.32-.027-.187.08-.293.187-.426l.107.107",
  transform: "translate(-7.837 -115.573)",
  fill: "#fabc04"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M81.478,199.753c-.107-.187,0-.32.107-.453l.107.107-.213.346",
  transform: "translate(-59.731 -146.16)",
  fill: "#e1c025"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M5.517,260.4a5.4,5.4,0,1,0,0,10.794A4.974,4.974,0,0,0,9.3,269.675a5.3,5.3,0,0,0,1.2-4.371H5.517v1.466H9.061a3.1,3.1,0,0,1-.8,1.866,3.672,3.672,0,0,1-2.745,1.093,3.918,3.918,0,0,1,0-7.836,3.661,3.661,0,0,1,2.665,1.066l1.039-1.039A5.116,5.116,0,0,0,5.517,260.4Zm9.035,3.864a3.518,3.518,0,1,0,3.465,3.518,3.437,3.437,0,0,0-3.465-3.518m0,5.65a2.141,2.141,0,1,1,1.946-2.132,2.021,2.021,0,0,1-1.946,2.132m7.516-5.65a3.518,3.518,0,1,0,3.465,3.518,3.421,3.421,0,0,0-3.465-3.518m0,5.65a2.141,2.141,0,1,1,1.946-2.132,2.021,2.021,0,0,1-1.946,2.132m7.489-5.65a3.483,3.483,0,0,0,0,6.956,2.329,2.329,0,0,0,1.812-.8h.053v.506c0,1.333-.693,2.052-1.839,2.052a1.9,1.9,0,0,1-1.732-1.226l-1.333.56a3.268,3.268,0,0,0,3.065,2.052c1.786,0,3.278-1.066,3.278-3.625V264.5H31.422v.56h-.053a2.329,2.329,0,0,0-1.812-.8m.133,5.6a1.992,1.992,0,0,1-1.919-2.105,2.017,2.017,0,0,1,1.919-2.132,1.957,1.957,0,0,1,1.839,2.132,1.932,1.932,0,0,1-1.839,2.105m4.291-9.035H35.5v10.287H33.98Zm5.6,3.438a3.346,3.346,0,0,0-3.331,3.518,3.443,3.443,0,0,0,3.491,3.518,3.485,3.485,0,0,0,2.932-1.546l-1.2-.8a2.014,2.014,0,0,1-1.732.959,1.745,1.745,0,0,1-1.706-1.066l4.717-1.946-.16-.4a3.3,3.3,0,0,0-3.012-2.239m-1.812,3.411a1.93,1.93,0,0,1,1.839-2.052,1.329,1.329,0,0,1,1.306.746Z",
  transform: "translate(0 -190.976)",
  fill: "#757575"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M170.4,274.255l3.518-9.355h1.359l3.518,9.355h-1.333l-.906-2.532h-3.918l-.906,2.532Zm2.638-3.651h3.118l-1.519-4.211h-.053Z",
  transform: "translate(-124.986 -194.277)",
  fill: "#757575"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M204.079,273.482a3.528,3.528,0,0,1-.879-2.425,3.623,3.623,0,0,1,.879-2.425,2.792,2.792,0,0,1,2.159-.986,2.827,2.827,0,0,1,1.279.293,2.219,2.219,0,0,1,.906.8h.053l-.053-.879V264.9h1.2v9.355h-1.146v-.879h-.053a2.427,2.427,0,0,1-.906.8,2.654,2.654,0,0,1-1.279.293,2.754,2.754,0,0,1-2.159-.986m3.785-.746a2.659,2.659,0,0,0,0-3.331,1.939,1.939,0,0,0-2.878,0,2.621,2.621,0,0,0,0,3.3,1.9,1.9,0,0,0,1.439.64,1.724,1.724,0,0,0,1.439-.613",
  transform: "translate(-149.044 -194.277)",
  fill: "#757575"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M235.484,281.436a3.152,3.152,0,0,1-3.545.08,2.854,2.854,0,0,1-1.039-1.333l1.066-.453a1.976,1.976,0,0,0,.693.906,1.675,1.675,0,0,0,.986.32,1.831,1.831,0,0,0,.959-.24.677.677,0,0,0,.373-.586c0-.4-.32-.72-.933-.906l-1.093-.267c-1.253-.32-1.866-.906-1.866-1.812a1.7,1.7,0,0,1,.72-1.413,3.041,3.041,0,0,1,1.812-.533,3.108,3.108,0,0,1,1.546.4,2.24,2.24,0,0,1,.959,1.093l-1.066.453a1.506,1.506,0,0,0-.586-.64,1.8,1.8,0,0,0-.933-.24,1.585,1.585,0,0,0-.853.24.7.7,0,0,0-.373.586c0,.373.346.64,1.039.773l.959.24c1.279.32,1.892.959,1.892,1.919a1.662,1.662,0,0,1-.72,1.413",
  transform: "translate(-169.362 -201.831)",
  fill: "#757575"
}))));
/* harmony default export */ var library_google = (google);
// CONCATENATED MODULE: ./client/marketing/components/product-icon/icons/library/hubspot.js


/**
 * External dependencies
 */

var hubspot = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  viewBox: "0 0 100 100"
}, Object(external_wp_element_["createElement"])("defs", null, Object(external_wp_element_["createElement"])("clipPath", {
  id: "b"
}, Object(external_wp_element_["createElement"])("rect", {
  width: "100",
  height: "100"
}))), Object(external_wp_element_["createElement"])("g", {
  id: "a",
  clipPath: "url(#b)"
}, Object(external_wp_element_["createElement"])("rect", {
  width: "100",
  height: "100",
  fill: "#fff"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M100,100H0V0H100V100ZM40.665,75.539a6.446,6.446,0,1,0,6.447,6.447,6.376,6.376,0,0,0-.3-1.843L54.158,72.8A19.808,19.808,0,1,0,69.206,37.48h.015V28.455a6.959,6.959,0,0,0,4.013-6.273v-.211a6.971,6.971,0,0,0-6.952-6.953H66.07a6.97,6.97,0,0,0-6.952,6.953v.211a6.957,6.957,0,0,0,4.013,6.273V37.5a19.745,19.745,0,0,0-9.376,4.126L28.935,22.295a7.919,7.919,0,0,0-4.148-9.145,7.845,7.845,0,0,0-3.5-.817,7.919,7.919,0,1,0,3.938,14.786l24.4,19a19.775,19.775,0,0,0,.3,22.3l-7.426,7.427A6.362,6.362,0,0,0,40.665,75.539Zm25.522-8.321h0l-.023,0a10.164,10.164,0,0,1,.023-20.328H66.2a10.166,10.166,0,0,1-.012,20.333Z",
  fill: "#ff7a59"
})));
/* harmony default export */ var library_hubspot = (hubspot);
// CONCATENATED MODULE: ./client/marketing/components/product-icon/icons/library/mailchimp.js


/**
 * External dependencies
 */

var mailchimp = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  width: "36",
  height: "36",
  viewBox: "0 0 36 36",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_wp_element_["createElement"])("rect", {
  width: "36",
  height: "36",
  rx: "3",
  fill: "#FFE071"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M24.0534 17.2863C24.2392 17.2638 24.4176 17.2625 24.5813 17.2863C24.6764 17.0647 24.6923 16.6823 24.6071 16.2661C24.4808 15.6471 24.3091 15.2728 23.9546 15.331C23.6002 15.3892 23.5873 15.8374 23.7143 16.4564C23.7848 16.8043 23.9117 17.1023 24.0534 17.2863Z",
  fill: "black"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M21.0119 17.7757C21.2652 17.8889 21.4209 17.9647 21.4823 17.899C21.5215 17.8576 21.5099 17.7794 21.4491 17.6786C21.3241 17.4702 21.0665 17.2587 20.7937 17.1404C20.2357 16.895 19.5697 16.9764 19.0559 17.3532C18.886 17.4802 18.7254 17.6555 18.7487 17.7625C18.756 17.7969 18.7812 17.8232 18.8413 17.8314C18.9811 17.8476 19.4698 17.5954 20.0321 17.5603C20.4294 17.5353 20.7587 17.6624 21.0119 17.7757Z",
  fill: "black"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M20.5024 18.073C20.1725 18.1262 19.9904 18.237 19.8733 18.3409C19.7733 18.4298 19.712 18.5281 19.7126 18.5975C19.7126 18.6307 19.7267 18.6495 19.7378 18.6589C19.7531 18.6726 19.7709 18.6802 19.7923 18.6802C19.8671 18.6802 20.0339 18.6119 20.0339 18.6119C20.4932 18.4442 20.7961 18.4642 21.0966 18.4993C21.2627 18.518 21.3406 18.5287 21.3774 18.4705C21.3884 18.4536 21.4013 18.4179 21.3682 18.3628C21.2903 18.2339 20.9568 18.0179 20.5024 18.073Z",
  fill: "black"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M23.0263 19.1626C23.2501 19.2753 23.4972 19.2309 23.5775 19.0644C23.6578 18.8973 23.5413 18.6713 23.3169 18.5587C23.0925 18.446 22.846 18.4904 22.7657 18.6569C22.6859 18.824 22.8025 19.0506 23.0263 19.1626Z",
  fill: "black"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M24.4673 17.8777C24.2851 17.8746 24.1343 18.0786 24.13 18.3334C24.1257 18.5881 24.2698 18.7971 24.4519 18.8003C24.634 18.8034 24.7849 18.5994 24.7892 18.3446C24.7935 18.0899 24.6494 17.8809 24.4673 17.8777Z",
  fill: "black"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M12.2373 22.4735C12.1919 22.4153 12.1177 22.4335 12.0454 22.4504C11.9951 22.4623 11.9381 22.476 11.8755 22.4748C11.7419 22.4723 11.6284 22.4134 11.5646 22.3139C11.4819 22.1837 11.4868 21.9903 11.5781 21.7682C11.5904 21.7381 11.6051 21.7049 11.6211 21.6686C11.767 21.3344 12.0117 20.7743 11.7369 20.241C11.5303 19.8398 11.1937 19.5895 10.7884 19.5369C10.3996 19.4868 9.99919 19.6339 9.7441 19.9212C9.34124 20.3749 9.27808 20.9921 9.35595 21.2099C9.38477 21.29 9.42892 21.3119 9.46142 21.3163C9.5301 21.3257 9.63127 21.275 9.69505 21.1003C9.69934 21.0878 9.70547 21.0684 9.71344 21.0434C9.74165 20.9514 9.79438 20.7799 9.88084 20.6422C9.98508 20.4763 10.147 20.3618 10.3371 20.3205C10.5308 20.2779 10.7289 20.3161 10.8944 20.4269C11.1765 20.6153 11.285 20.9683 11.1648 21.305C11.1023 21.479 11.0011 21.812 11.0238 22.0855C11.0692 22.6394 11.4028 22.8616 11.7026 22.8854C11.9939 22.8966 12.1981 22.7295 12.2496 22.6075C12.279 22.5361 12.2539 22.4923 12.2373 22.4735Z",
  fill: "black"
}), Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M29.0624 21.4609C29.0513 21.4209 28.979 21.1511 28.8796 20.8263C28.7803 20.5015 28.6773 20.2724 28.6773 20.2724C29.0759 19.6634 29.0826 19.1189 29.0299 18.8109C28.9735 18.4285 28.8177 18.1031 28.5031 17.7663C28.1892 17.4296 27.5466 17.0847 26.6434 16.8262C26.5403 16.7968 26.1994 16.7011 26.1694 16.6917C26.1669 16.6717 26.1442 15.5513 26.124 15.0706C26.1093 14.7233 26.0798 14.18 25.9149 13.6455C25.7181 12.922 25.3759 12.2886 24.9479 11.8836C26.1283 10.635 26.8647 9.25926 26.8629 8.07947C26.8592 5.81 24.1293 5.1234 20.7642 6.54542C20.7605 6.54667 20.0565 6.85147 20.051 6.8546C20.048 6.85147 18.7621 5.56402 18.7431 5.5465C14.907 2.13103 2.91255 15.7391 6.7474 19.0444L7.58562 19.7692C7.36794 20.3437 7.28271 21.0028 7.35261 21.7107C7.44213 22.6201 7.90202 23.4926 8.64704 24.166C9.35404 24.8057 10.2842 25.2106 11.1868 25.21C12.6793 28.72 16.0886 30.8737 20.0872 30.9951C24.3758 31.1253 27.9758 29.0711 29.4842 25.3815C29.583 25.1224 30.0018 23.9557 30.0018 22.9255C30.0005 21.8903 29.4272 21.4609 29.0624 21.4609ZM11.5161 24.2236C11.3861 24.2461 11.2531 24.2555 11.1188 24.2518C9.82374 24.2161 8.42445 23.0263 8.28526 21.6143C8.13135 20.054 8.91255 18.8535 10.2953 18.5687C10.4608 18.5349 10.6601 18.5149 10.876 18.5268C11.651 18.57 12.7928 19.1777 13.0534 20.9002C13.2845 22.4261 12.9172 23.9801 11.5161 24.2236ZM10.0696 17.6361C9.20872 17.807 8.45021 18.3052 7.98603 18.9931C7.70887 18.7571 7.19195 18.3002 7.10059 18.1218C6.35986 16.686 7.90877 13.8946 8.99104 12.318C11.6657 8.42245 15.8544 5.4739 17.7939 6.00903C18.1091 6.10041 19.1533 7.33591 19.1533 7.33591C19.1533 7.33591 17.2151 8.43372 15.4172 9.96402C12.9951 11.8667 11.1654 14.6338 10.0696 17.6361ZM23.6657 23.6403C23.694 23.6284 23.7136 23.5952 23.7099 23.5627C23.7056 23.5226 23.6706 23.4932 23.6314 23.4976C23.6314 23.4976 21.6024 23.8043 19.6856 23.0876C19.8941 22.3948 20.4496 22.6451 21.2884 22.714C22.8012 22.806 24.1563 22.5807 25.1582 22.2871C26.0265 22.033 27.1664 21.5317 28.0525 20.8182C28.3511 21.4879 28.4565 22.2252 28.4565 22.2252C28.4565 22.2252 28.6877 22.1832 28.8809 22.304C29.0636 22.4186 29.1973 22.657 29.1059 23.2735C28.9195 24.4252 28.44 25.3596 27.6343 26.2196C27.1437 26.7585 26.5477 27.2273 25.8665 27.5684C25.5047 27.7624 25.119 27.9301 24.7118 28.0659C21.6735 29.0786 18.5628 27.9652 17.5603 25.5737C17.4799 25.394 17.4125 25.2056 17.3592 25.0091C16.9318 23.4331 17.2948 21.5423 18.4285 20.3525V20.3519C18.4984 20.2761 18.5696 20.1866 18.5696 20.0746C18.5696 19.9807 18.5113 19.8818 18.4604 19.8111C18.0637 19.224 16.6896 18.2232 16.9655 16.2861C17.1635 14.8948 18.3556 13.9146 19.4673 13.9728C19.5611 13.9778 19.6549 13.9835 19.7487 13.9891C20.2307 14.0179 20.6507 14.0811 21.0468 14.098C21.7103 14.1274 22.3069 14.0285 23.0139 13.4277C23.2525 13.2249 23.4438 13.049 23.7669 12.9933C23.8006 12.9877 23.8853 12.9564 24.0545 12.9645C24.2268 12.9739 24.3911 13.0221 24.5389 13.1222C25.1055 13.5072 25.1858 14.4391 25.2153 15.1213C25.2318 15.5106 25.2778 16.4526 25.2937 16.7224C25.3299 17.3407 25.4887 17.4277 25.8113 17.536C25.9922 17.5967 26.1608 17.6424 26.4085 17.7131C27.1584 17.9278 27.603 18.1462 27.8838 18.426C28.0512 18.6013 28.1285 18.7872 28.153 18.9643C28.2413 19.6227 27.6521 20.4364 26.0921 21.1755C24.3868 21.9836 22.3174 22.1882 20.888 22.0255C20.7783 22.013 20.3883 21.9679 20.3871 21.9679C19.2435 21.8108 18.591 23.3192 19.2778 24.3525C19.7199 25.0185 20.9248 25.4522 22.1303 25.4522C24.8939 25.4529 27.0186 24.248 27.8084 23.2078C27.8323 23.1765 27.8342 23.1734 27.8716 23.1158C27.9102 23.0557 27.8783 23.0232 27.8299 23.057C27.1842 23.5076 24.3169 25.2976 21.2492 24.7594C21.2492 24.7594 20.8764 24.6968 20.5361 24.5616C20.2656 24.4546 19.6997 24.1886 19.631 23.5958C22.107 24.3788 23.6657 23.6403 23.6657 23.6403ZM19.7444 23.1677C19.7444 23.1684 19.7444 23.1684 19.7444 23.1677C19.745 23.169 19.745 23.169 19.745 23.1696C19.745 23.169 19.7444 23.1684 19.7444 23.1677ZM15.0088 12.3023C15.9599 11.1807 17.1304 10.2056 18.1784 9.65858C18.2145 9.6398 18.2532 9.67986 18.2336 9.71616C18.1502 9.87013 17.9901 10.1993 17.9392 10.4497C17.9313 10.4885 17.9729 10.5179 18.0048 10.4954C18.6573 10.0416 19.7916 9.55531 20.7875 9.49272C20.8304 9.49022 20.8506 9.54592 20.8169 9.57283C20.6654 9.69113 20.4999 9.85511 20.3791 10.021C20.3582 10.0491 20.3779 10.0898 20.4122 10.0898C21.1112 10.0948 22.0966 10.3446 22.7386 10.712C22.7821 10.737 22.7509 10.8227 22.7024 10.8115C21.7305 10.5843 20.1406 10.4115 18.488 10.8227C17.0133 11.1901 15.8875 11.7572 15.0665 12.3668C15.0254 12.3981 14.9757 12.3418 15.0088 12.3023Z",
  fill: "black"
}));
/* harmony default export */ var library_mailchimp = (mailchimp);
// CONCATENATED MODULE: ./client/marketing/components/product-icon/icons/library/currency-dollar.js


/**
 * External dependencies
 */

var currencyDollar = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zm-1.338 4.877c-.314.22-.412.452-.412.623 0 .171.098.403.412.623.312.218.783.377 1.338.377.825 0 1.605.233 2.198.648.59.414 1.052 1.057 1.052 1.852 0 .795-.461 1.438-1.052 1.852-.41.286-.907.486-1.448.582v.316a.75.75 0 01-1.5 0v-.316a3.64 3.64 0 01-1.448-.582c-.59-.414-1.052-1.057-1.052-1.852a.75.75 0 011.5 0c0 .171.098.403.412.623.312.218.783.377 1.338.377s1.026-.159 1.338-.377c.314-.22.412-.452.412-.623 0-.171-.098-.403-.412-.623-.312-.218-.783-.377-1.338-.377-.825 0-1.605-.233-2.198-.648-.59-.414-1.052-1.057-1.052-1.852 0-.795.461-1.438 1.052-1.852a3.64 3.64 0 011.448-.582V7.5a.75.75 0 011.5 0v.316c.54.096 1.039.296 1.448.582.59.414 1.052 1.057 1.052 1.852a.75.75 0 01-1.5 0c0-.171-.098-.403-.412-.623-.312-.218-.783-.377-1.338-.377s-1.026.159-1.338.377z"
}));
/* harmony default export */ var currency_dollar = (currencyDollar);
// CONCATENATED MODULE: ./client/marketing/components/product-icon/icons/library/gift.js


/**
 * External dependencies
 */

var gift = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M14.75 9C16.1307 9 17.25 7.88071 17.25 6.5C17.25 5.11929 16.1307 4 14.75 4C13.3693 4 12.25 5.11929 12.25 6.5C12.25 5.11929 11.1307 4 9.75 4C8.36929 4 7.25 5.11929 7.25 6.5C7.25 7.88071 8.36929 9 9.75 9H4V20L20 20V9L14.75 9ZM14.75 7.5C15.3023 7.5 15.75 7.05228 15.75 6.5C15.75 5.94772 15.3023 5.5 14.75 5.5C14.1977 5.5 13.75 5.94772 13.75 6.5V7.5H14.75ZM18.5 18.5V10.5H13V18.5H18.5ZM11.5 18.5H5.5L5.5 10.5H11.5L11.5 18.5ZM8.75 6.5C8.75 7.05228 9.19772 7.5 9.75 7.5H10.75V6.5C10.75 5.94772 10.3023 5.5 9.75 5.5C9.19772 5.5 8.75 5.94772 8.75 6.5Z"
}));
/* harmony default export */ var library_gift = (gift);
// CONCATENATED MODULE: ./client/marketing/components/product-icon/icons/library/link.js


/**
 * External dependencies
 */

var link_link = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"
}));
/* harmony default export */ var library_link = (link_link);
// CONCATENATED MODULE: ./client/marketing/components/product-icon/icons/library/people.js


/**
 * External dependencies
 */

var people = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M17.5 9a2 2 0 11-4 0 2 2 0 014 0zm-4.25 8v-2a2.75 2.75 0 00-2.75-2.75h-4A2.75 2.75 0 003.75 15v2h1.5v-2c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2h1.5zm7-2v2h-1.5v-2c0-.69-.56-1.25-1.25-1.25H15v-1.5h2.5A2.75 2.75 0 0120.25 15zM8.5 11a2 2 0 100-4 2 2 0 000 4z"
}));
/* harmony default export */ var library_people = (people);
// CONCATENATED MODULE: ./client/marketing/components/product-icon/icons/library/tip.js


/**
 * External dependencies
 */

var tip = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M15 16.5H9V15h6v1.5zM15.0052 5.99481c-1.6597-1.65973-4.3507-1.65973-6.0104 0-1.65973 1.65973-1.65973 4.35069 0 6.01039.29289.2929.29289.7678 0 1.0607-.2929.2929-.76777.2929-1.06066 0-2.24552-2.2455-2.24552-5.88624 0-8.13175 2.24556-2.24551 5.88616-2.24551 8.13176 0 2.2455 2.24551 2.2455 5.88625 0 8.13175-.2929.2929-.7678.2929-1.0607 0-.2929-.2929-.2929-.7678 0-1.0607 1.6597-1.6597 1.6597-4.35066 0-6.01039zM14 19.5h-4V18h4v1.5z"
}));
/* harmony default export */ var library_tip = (tip);
// CONCATENATED MODULE: ./client/marketing/components/product-icon/icons/index.js
 // Amazon & Ebay Integration


 // AutomateWoo


 // Facebook


 // Google Ads


 // Hubspot

 // Mailchimp

 // Coupons






// CONCATENATED MODULE: ./client/marketing/components/product-icon/index.js








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */





/**
 * Internal dependencies
 */




var product_icon_ProductIcon = /*#__PURE__*/function (_Component) {
  inherits_default()(ProductIcon, _Component);

  var _super = _createSuper(ProductIcon);

  function ProductIcon() {
    classCallCheck_default()(this, ProductIcon);

    return _super.apply(this, arguments);
  }

  createClass_default()(ProductIcon, [{
    key: "render",
    value: function render() {
      var product = Object(external_lodash_["camelCase"])(this.props.product);
      var iconComponent = library_blank;

      if (product in icons_namespaceObject) {
        iconComponent = icons_namespaceObject[product];
      }

      return Object(external_wp_element_["createElement"])("div", {
        className: classnames_default()(this.props.className, 'woocommerce-admin-marketing-product-icon')
      }, Object(external_wp_element_["createElement"])(icon["a" /* default */], {
        icon: iconComponent
      }));
    }
  }]);

  return ProductIcon;
}(external_wp_element_["Component"]);

product_icon_ProductIcon.propTypes = {
  /**
   * Product to retrieve icon for.
   */
  product: prop_types_default.a.string.isRequired,

  /**
   * Additional classNames.
   */
  className: prop_types_default.a.string
};
/* harmony default export */ var product_icon = (product_icon_ProductIcon);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(43);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/TransitionGroup.js + 2 modules
var TransitionGroup = __webpack_require__(417);

// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/CSSTransition.js + 5 modules
var CSSTransition = __webpack_require__(416);

// EXTERNAL MODULE: ./client/marketing/components/slider/style.scss
var slider_style = __webpack_require__(414);

// CONCATENATED MODULE: ./client/marketing/components/slider/index.js



/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



var slider_Slider = function Slider(_ref) {
  var children = _ref.children,
      animationKey = _ref.animationKey,
      animate = _ref.animate;

  var _useState = Object(external_wp_element_["useState"])(null),
      _useState2 = slicedToArray_default()(_useState, 2),
      height = _useState2[0],
      updateHeight = _useState2[1];

  var container = Object(external_wp_element_["useRef"])();
  var containerClasses = classnames_default()('woocommerce-marketing-slider', animate && "animate-".concat(animate));
  var style = {};

  if (height) {
    style.height = height;
  } // timeout should be slightly longer than the CSS animation


  var timeout = 320;

  var updateSliderHeight = function updateSliderHeight() {
    var slide = container.current.querySelector('.woocommerce-marketing-slider__slide');
    updateHeight(slide.clientHeight);
  };

  var debouncedUpdateSliderHeight = Object(external_lodash_["debounce"])(updateSliderHeight, 50);
  Object(external_wp_element_["useEffect"])(function () {
    // Update the slider height on Resize
    window.addEventListener('resize', debouncedUpdateSliderHeight);
    return function () {
      window.removeEventListener('resize', debouncedUpdateSliderHeight);
    };
  }, []);
  /**
   * Fix slider height before a slide enters because slides are absolutely position
   */

  var onEnter = function onEnter() {
    var newSlide = container.current.querySelector('.slide-enter');
    updateHeight(newSlide.clientHeight);
  };

  return Object(external_wp_element_["createElement"])("div", {
    className: containerClasses,
    ref: container,
    style: style
  }, Object(external_wp_element_["createElement"])(TransitionGroup["a" /* default */], null, Object(external_wp_element_["createElement"])(CSSTransition["a" /* default */], {
    timeout: timeout,
    classNames: "slide",
    key: animationKey,
    onEnter: onEnter
  }, Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-marketing-slider__slide"
  }, children))));
};

slider_Slider.propTypes = {
  /**
   * A unique identifier for each slideable page.
   */
  animationKey: prop_types_default.a.any.isRequired,

  /**
   * null, 'left', 'right', to designate which direction to slide on a change.
   */
  animate: prop_types_default.a.oneOf([null, 'left', 'right'])
};
/* harmony default export */ var slider = (slider_Slider);
// CONCATENATED MODULE: ./client/marketing/components/index.js





/***/ }),
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getInAppPurchaseUrl; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(170);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










/**
 * External dependencies
 */


/**
 * Returns an in-app-purchase URL.
 *
 * @param {string} url
 * @param {Object} queryArgs
 * @return {string} url with in-app-purchase query parameters
 */

var getInAppPurchaseUrl = function getInAppPurchaseUrl(url) {
  var queryArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _window$location = window.location,
      pathname = _window$location.pathname,
      search = _window$location.search;
  var connectNonce = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_10__[/* getSetting */ "g"])('connectNonce', '');
  queryArgs = _objectSpread({
    'wccom-site': Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_10__[/* getSetting */ "g"])('siteUrl'),
    // If the site is installed in a directory the directory must be included in the back param path.
    'wccom-back': pathname + search,
    'wccom-woo-version': Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_10__[/* getSetting */ "g"])('wcVersion'),
    'wccom-connect-nonce': connectNonce
  }, queryArgs);
  return Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_9__["addQueryArgs"])(url, queryArgs);
};

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: RecommendedExtensions, RecommendedExtensionsPlaceholder

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(80);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(44);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(220);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(146);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(15);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./client/marketing/components/recommended-extensions/style.scss
var style = __webpack_require__(284);

// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(92);

// EXTERNAL MODULE: ./client/marketing/components/index.js + 17 modules
var components = __webpack_require__(267);

// EXTERNAL MODULE: ./client/lib/in-app-purchase.js
var in_app_purchase = __webpack_require__(322);

// CONCATENATED MODULE: ./client/marketing/components/recommended-extensions/item.js




/**
 * External dependencies
 */


/**
 * Internal dependencies
 */





var item_RecommendedExtensionsItem = function RecommendedExtensionsItem(_ref) {
  var title = _ref.title,
      description = _ref.description,
      url = _ref.url,
      product = _ref.product,
      category = _ref.category;

  var onProductClick = function onProductClick() {
    Object(external_wc_tracks_["recordEvent"])('marketing_recommended_extension', {
      name: title
    });
  };

  var classNameBase = 'woocommerce-marketing-recommended-extensions-item';
  var connectURL = Object(in_app_purchase["a" /* getInAppPurchaseUrl */])(url); // Temporary fix to account for different styles between marketing & coupons

  if (category === 'coupons' && product === 'automatewoo') {
    product = "automatewoo-alt";
  }

  return Object(external_wp_element_["createElement"])("a", {
    href: connectURL,
    className: classNameBase,
    onClick: onProductClick
  }, Object(external_wp_element_["createElement"])(components["b" /* ProductIcon */], {
    product: product
  }), Object(external_wp_element_["createElement"])("div", {
    className: "".concat(classNameBase, "__text")
  }, Object(external_wp_element_["createElement"])("h4", null, title), Object(external_wp_element_["createElement"])("p", null, description)));
};

item_RecommendedExtensionsItem.propTypes = {
  title: prop_types_default.a.string.isRequired,
  description: prop_types_default.a.string.isRequired,
  url: prop_types_default.a.string.isRequired,
  product: prop_types_default.a.string.isRequired,
  category: prop_types_default.a.string.isRequired
};
/* harmony default export */ var item = (item_RecommendedExtensionsItem);
// CONCATENATED MODULE: ./client/marketing/components/recommended-extensions/placeholder.js


/**
 * Internal dependencies
 */


var placeholder_RecommendedExtensionsPlaceholder = function RecommendedExtensionsPlaceholder() {
  var classNameBase = 'is-loading woocommerce-marketing-recommended-extensions-item';
  return Object(external_wp_element_["createElement"])("div", {
    className: classNameBase,
    "aria-hidden": "true"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-admin-marketing-product-icon is-placeholder"
  }), Object(external_wp_element_["createElement"])("div", {
    className: "".concat(classNameBase, "__text")
  }, Object(external_wp_element_["createElement"])("h4", {
    className: "is-placeholder",
    "aria-hidden": "true"
  }), Object(external_wp_element_["createElement"])("p", null, Object(external_wp_element_["createElement"])("span", {
    className: "is-placeholder"
  }), Object(external_wp_element_["createElement"])("span", {
    className: "is-placeholder"
  }), Object(external_wp_element_["createElement"])("span", {
    className: "is-placeholder"
  }))));
};

/* harmony default export */ var placeholder = (placeholder_RecommendedExtensionsPlaceholder);
// EXTERNAL MODULE: ./client/marketing/data/constants.js
var constants = __webpack_require__(191);

// EXTERNAL MODULE: ./client/marketing/components/card/index.js
var card = __webpack_require__(232);

// CONCATENATED MODULE: ./client/marketing/components/recommended-extensions/index.js










/**
 * External dependencies
 */





/**
 * Internal dependencies
 */







var recommended_extensions_RecommendedExtensions = function RecommendedExtensions(_ref) {
  var extensions = _ref.extensions,
      isLoading = _ref.isLoading,
      title = _ref.title,
      description = _ref.description,
      category = _ref.category;

  if (extensions.length === 0 && !isLoading) {
    return null;
  }

  var categoryClass = category ? "woocommerce-marketing-recommended-extensions-card__category-".concat(category) : '';
  var placholdersCount = 5;
  return Object(external_wp_element_["createElement"])(card["a" /* default */], {
    title: title,
    description: description,
    className: classnames_default()('woocommerce-marketing-recommended-extensions-card', categoryClass)
  }, isLoading ? Object(external_wp_element_["createElement"])("div", {
    className: classnames_default()('woocommerce-marketing-recommended-extensions-card__items', "woocommerce-marketing-recommended-extensions-card__items--count-".concat(placholdersCount))
  }, toConsumableArray_default()(Array(placholdersCount).keys()).map(function (key) {
    return Object(external_wp_element_["createElement"])(placeholder, {
      key: key
    });
  })) : Object(external_wp_element_["createElement"])("div", {
    className: classnames_default()('woocommerce-marketing-recommended-extensions-card__items', "woocommerce-marketing-recommended-extensions-card__items--count-".concat(extensions.length))
  }, extensions.map(function (extension) {
    return Object(external_wp_element_["createElement"])(item, extends_default()({
      key: extension.product,
      category: category
    }, extension));
  })));
};

recommended_extensions_RecommendedExtensions.propTypes = {
  /**
   * Array of recommended extensions.
   */
  extensions: prop_types_default.a.arrayOf(prop_types_default.a.object).isRequired,

  /**
   * Whether the card is loading.
   */
  isLoading: prop_types_default.a.bool.isRequired,

  /**
   * Cart title.
   */
  title: prop_types_default.a.string,

  /**
   * Card description.
   */
  description: prop_types_default.a.string,

  /**
   * Category of extensions to display.
   */
  category: prop_types_default.a.string
};
recommended_extensions_RecommendedExtensions.defaultProps = {
  title: Object(external_wp_i18n_["__"])('Recommended extensions', 'woocommerce-admin'),
  description: Object(external_wp_i18n_["__"])('Great marketing requires the right tools. Take your marketing to the next level with our recommended marketing extensions.', 'woocommerce-admin')
};


/* harmony default export */ var recommended_extensions = __webpack_exports__["a"] = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select, props) {
  var _select = select(constants["b" /* STORE_KEY */]),
      getRecommendedPlugins = _select.getRecommendedPlugins,
      isResolving = _select.isResolving;

  return {
    extensions: getRecommendedPlugins(props.category),
    isLoading: isResolving('getRecommendedPlugins', [props.category])
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  return {
    createNotice: createNotice
  };
}))(recommended_extensions_RecommendedExtensions));

/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: KnowledgeBase

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(43);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(220);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(187);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.link.js
var es_string_link = __webpack_require__(405);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(135);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(88);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(65);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(15);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(145);

// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(92);

// EXTERNAL MODULE: ./client/marketing/components/knowledge-base/style.scss
var style = __webpack_require__(323);

// EXTERNAL MODULE: ./client/marketing/components/index.js + 17 modules
var components = __webpack_require__(267);

// EXTERNAL MODULE: ./client/marketing/data/constants.js
var constants = __webpack_require__(191);

// EXTERNAL MODULE: ./client/marketing/components/card/index.js
var card = __webpack_require__(232);

// EXTERNAL MODULE: ./node_modules/interpolate-components/lib/index.js
var lib = __webpack_require__(99);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./client/marketing/components/knowledge-base/ReadBlogMessage.js


/**
 * External dependencies
 */




var ReadBlogMessage_ReadBlogMessage = function ReadBlogMessage() {
  return lib_default()({
    mixedString: Object(external_wp_i18n_["__"])('Read {{link}}the WooCommerce blog{{/link}} for more tips on marketing your store', 'woocommerce-admin'),
    components: {
      link: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
        type: "external",
        href: "https://woocommerce.com/blog/marketing/coupons/",
        target: "_blank"
      })
    }
  });
};

/* harmony default export */ var knowledge_base_ReadBlogMessage = (ReadBlogMessage_ReadBlogMessage);
// CONCATENATED MODULE: ./client/marketing/components/knowledge-base/placeholder.js


/**
 * Internal dependencies
 */


var placeholder_KnowledgebaseCardPostPlaceholder = function KnowledgebaseCardPostPlaceholder(index) {
  var classNameBase = 'woocommerce-marketing-knowledgebase-card__post';
  return Object(external_wp_element_["createElement"])("div", {
    className: "is-loading ".concat(classNameBase),
    key: index,
    "aria-hidden": "true"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "".concat(classNameBase, "-img is-placeholder")
  }), Object(external_wp_element_["createElement"])("div", {
    className: "".concat(classNameBase, "-text")
  }, Object(external_wp_element_["createElement"])("h3", {
    className: "is-placeholder",
    "aria-hidden": "true"
  }), Object(external_wp_element_["createElement"])("p", {
    className: "".concat(classNameBase, "-meta is-placeholder")
  })));
};

/* harmony default export */ var placeholder = (placeholder_KnowledgebaseCardPostPlaceholder);
// CONCATENATED MODULE: ./client/marketing/components/knowledge-base/index.js










/**
 * External dependencies
 */








/**
 * Internal dependencies
 */








var knowledge_base_KnowledgeBase = function KnowledgeBase(_ref) {
  var posts = _ref.posts,
      isLoading = _ref.isLoading,
      error = _ref.error,
      title = _ref.title,
      description = _ref.description,
      category = _ref.category;

  var _useState = Object(external_wp_element_["useState"])(1),
      _useState2 = slicedToArray_default()(_useState, 2),
      page = _useState2[0],
      updatePage = _useState2[1];

  var _useState3 = Object(external_wp_element_["useState"])(null),
      _useState4 = slicedToArray_default()(_useState3, 2),
      animate = _useState4[0],
      updateAnimate = _useState4[1];

  var onPaginationPageChange = function onPaginationPageChange(newPage) {
    var newAnimate;

    if (newPage > page) {
      newAnimate = 'left';
      Object(external_wc_tracks_["recordEvent"])('marketing_knowledge_carousel', {
        direction: 'forward',
        page: newPage
      });
    } else {
      newAnimate = 'right';
      Object(external_wc_tracks_["recordEvent"])('marketing_knowledge_carousel', {
        direction: 'back',
        page: newPage
      });
    }

    updatePage(newPage);
    updateAnimate(newAnimate);
  };

  var onPostClick = function onPostClick(post) {
    Object(external_wc_tracks_["recordEvent"])('marketing_knowledge_article', {
      title: post.title
    });
  };
  /**
   * Get the 2 posts we need for the current page
   */


  var getCurrentSlide = function getCurrentSlide() {
    var currentPosts = posts.slice((page - 1) * 2, (page - 1) * 2 + 2);
    var pageClass = classnames_default()('woocommerce-marketing-knowledgebase-card__page', {
      'page-with-single-post': currentPosts.length === 1
    });
    var displayPosts = currentPosts.map(function (post, index) {
      return Object(external_wp_element_["createElement"])("a", {
        className: "woocommerce-marketing-knowledgebase-card__post",
        href: post.link,
        key: index,
        onClick: function onClick() {
          onPostClick(post);
        },
        target: "_blank",
        rel: "noopener noreferrer"
      }, post.image && Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-marketing-knowledgebase-card__post-img"
      }, Object(external_wp_element_["createElement"])("img", {
        src: post.image,
        alt: ""
      })), Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-marketing-knowledgebase-card__post-text"
      }, Object(external_wp_element_["createElement"])("h3", null, post.title), Object(external_wp_element_["createElement"])("p", {
        className: "woocommerce-marketing-knowledgebase-card__post-meta"
      }, Object(external_wp_i18n_["__"])('By', 'woocommerce-admin') + ' ', post.author_name, post.author_avatar && Object(external_wp_element_["createElement"])("img", {
        src: post.author_avatar.replace('s=96', 's=32'),
        className: "woocommerce-gravatar",
        alt: "",
        width: "16",
        height: "16"
      }))));
    });
    return Object(external_wp_element_["createElement"])("div", {
      className: pageClass
    }, displayPosts);
  };

  var renderEmpty = function renderEmpty() {
    var emptyTitle = Object(external_wp_i18n_["__"])('No posts yet', 'woocommerce-admin');

    return Object(external_wp_element_["createElement"])(external_wc_components_["EmptyContent"], {
      title: emptyTitle,
      message: Object(external_wp_element_["createElement"])(knowledge_base_ReadBlogMessage, null),
      illustration: "",
      actionLabel: ""
    });
  };

  var renderError = function renderError() {
    var errorTitle = Object(external_wp_i18n_["__"])("Oops, our posts aren't loading right now", 'woocommerce-admin');

    return Object(external_wp_element_["createElement"])(external_wc_components_["EmptyContent"], {
      title: errorTitle,
      message: Object(external_wp_element_["createElement"])(knowledge_base_ReadBlogMessage, null),
      illustration: "",
      actionLabel: ""
    });
  };

  var renderPosts = function renderPosts() {
    return Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-marketing-knowledgebase-card__posts"
    }, Object(external_wp_element_["createElement"])(components["c" /* Slider */], {
      animationKey: page,
      animate: animate
    }, getCurrentSlide()), Object(external_wp_element_["createElement"])(external_wc_components_["Pagination"], {
      page: page,
      perPage: 2,
      total: posts.length,
      onPageChange: onPaginationPageChange,
      showPagePicker: false,
      showPerPagePicker: false,
      showPageArrowsLabel: false
    }));
  };
  /**
   * Renders two `KnowledgebaseCardPostPlaceholder`s wrapped to mimic {@link renderPosts()} output.
   */


  var renderPlaceholder = function renderPlaceholder() {
    return Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-marketing-knowledgebase-card__posts"
    }, Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-marketing-knowledgebase-card__page"
    }, Object(external_wp_element_["createElement"])(placeholder, null), Object(external_wp_element_["createElement"])(placeholder, null)));
  };

  var renderCardBody = function renderCardBody() {
    if (isLoading) {
      return renderPlaceholder();
    }

    if (error) {
      return renderError();
    }

    return posts.length === 0 ? renderEmpty() : renderPosts();
  };

  var categoryClass = category ? "woocommerce-marketing-knowledgebase-card__category-".concat(category) : '';
  return Object(external_wp_element_["createElement"])(card["a" /* default */], {
    title: title,
    description: description,
    className: classnames_default()('woocommerce-marketing-knowledgebase-card', categoryClass)
  }, renderCardBody());
};

knowledge_base_KnowledgeBase.propTypes = {
  /**
   * Array of posts.
   */
  posts: prop_types_default.a.arrayOf(prop_types_default.a.object).isRequired,

  /**
   * Whether the card is loading.
   */
  isLoading: prop_types_default.a.bool.isRequired,

  /**
   * Cart title.
   */
  title: prop_types_default.a.string,

  /**
   * Card description.
   */
  description: prop_types_default.a.string,

  /**
   * Category of extensions to display.
   */
  category: prop_types_default.a.string
};
knowledge_base_KnowledgeBase.defaultProps = {
  title: Object(external_wp_i18n_["__"])('WooCommerce knowledge base', 'woocommerce-admin'),
  description: Object(external_wp_i18n_["__"])('Learn the ins and outs of successful marketing from the experts at WooCommerce.', 'woocommerce-admin')
};

/* harmony default export */ var knowledge_base = __webpack_exports__["a"] = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select, props) {
  var _select = select(constants["b" /* STORE_KEY */]),
      getBlogPosts = _select.getBlogPosts,
      getBlogPostsError = _select.getBlogPostsError,
      isResolving = _select.isResolving;

  return {
    posts: getBlogPosts(props.category),
    isLoading: isResolving('getBlogPosts', [props.category]),
    error: getBlogPostsError(props.category)
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  return {
    createNotice: createNotice
  };
}))(knowledge_base_KnowledgeBase));

/***/ }),
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(12);
var createHTML = __webpack_require__(406);
var forcedStringHTMLMethod = __webpack_require__(407);

// `String.prototype.link` method
// https://tc39.es/ecma262/#sec-string.prototype.link
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('link') }, {
  link: function link(url) {
    return createHTML(this, 'a', 'href', url);
  }
});


/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(32);

var quot = /"/g;

// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.es/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(6);

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 415 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// NAMESPACE OBJECT: ./client/marketing/data/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "receiveInstalledPlugins", function() { return receiveInstalledPlugins; });
__webpack_require__.d(actions_namespaceObject, "receiveActivatingPlugin", function() { return receiveActivatingPlugin; });
__webpack_require__.d(actions_namespaceObject, "removeActivatingPlugin", function() { return removeActivatingPlugin; });
__webpack_require__.d(actions_namespaceObject, "receiveRecommendedPlugins", function() { return receiveRecommendedPlugins; });
__webpack_require__.d(actions_namespaceObject, "receiveBlogPosts", function() { return receiveBlogPosts; });
__webpack_require__.d(actions_namespaceObject, "handleFetchError", function() { return handleFetchError; });
__webpack_require__.d(actions_namespaceObject, "setError", function() { return setError; });
__webpack_require__.d(actions_namespaceObject, "activateInstalledPlugin", function() { return activateInstalledPlugin; });
__webpack_require__.d(actions_namespaceObject, "loadInstalledPluginsAfterActivation", function() { return loadInstalledPluginsAfterActivation; });

// NAMESPACE OBJECT: ./client/marketing/data/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getInstalledPlugins", function() { return getInstalledPlugins; });
__webpack_require__.d(selectors_namespaceObject, "getActivatingPlugins", function() { return getActivatingPlugins; });
__webpack_require__.d(selectors_namespaceObject, "getRecommendedPlugins", function() { return getRecommendedPlugins; });
__webpack_require__.d(selectors_namespaceObject, "getBlogPosts", function() { return getBlogPosts; });
__webpack_require__.d(selectors_namespaceObject, "getBlogPostsError", function() { return getBlogPostsError; });

// NAMESPACE OBJECT: ./client/marketing/data/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getRecommendedPlugins", function() { return resolvers_getRecommendedPlugins; });
__webpack_require__.d(resolvers_namespaceObject, "getBlogPosts", function() { return resolvers_getBlogPosts; });

// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__(35);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(26);

// EXTERNAL MODULE: ./client/marketing/data/constants.js
var constants = __webpack_require__(191);

// EXTERNAL MODULE: external "regeneratorRuntime"
var external_regeneratorRuntime_ = __webpack_require__(16);
var external_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_regeneratorRuntime_);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// CONCATENATED MODULE: ./client/marketing/data/action-types.js
var TYPES = {
  SET_INSTALLED_PLUGINS: 'SET_INSTALLED_PLUGINS',
  SET_ACTIVATING_PLUGIN: 'SET_ACTIVATING_PLUGIN',
  REMOVE_ACTIVATING_PLUGIN: 'REMOVE_ACTIVATING_PLUGIN',
  SET_RECOMMENDED_PLUGINS: 'SET_RECOMMENDED_PLUGINS',
  SET_BLOG_POSTS: 'SET_BLOG_POSTS',
  SET_ERROR: 'SET_ERROR'
};
/* harmony default export */ var action_types = (TYPES);
// CONCATENATED MODULE: ./client/marketing/data/actions.js


var _marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(activateInstalledPlugin),
    _marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(loadInstalledPluginsAfterActivation);

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



function receiveInstalledPlugins(plugins) {
  return {
    type: action_types.SET_INSTALLED_PLUGINS,
    plugins: plugins
  };
}
function receiveActivatingPlugin(pluginSlug) {
  return {
    type: action_types.SET_ACTIVATING_PLUGIN,
    pluginSlug: pluginSlug
  };
}
function removeActivatingPlugin(pluginSlug) {
  return {
    type: action_types.REMOVE_ACTIVATING_PLUGIN,
    pluginSlug: pluginSlug
  };
}
function receiveRecommendedPlugins(plugins, category) {
  return {
    type: action_types.SET_RECOMMENDED_PLUGINS,
    data: {
      plugins: plugins,
      category: category
    }
  };
}
function receiveBlogPosts(posts, category) {
  return {
    type: action_types.SET_BLOG_POSTS,
    data: {
      posts: posts,
      category: category
    }
  };
}
function handleFetchError(error, message) {
  var _dispatch = Object(external_wp_data_["dispatch"])('core/notices'),
      createNotice = _dispatch.createNotice;

  createNotice('error', message); // eslint-disable-next-line no-console

  console.log(error);
}
function setError(category, error) {
  return {
    type: action_types.SET_ERROR,
    category: category,
    error: error
  };
}
function activateInstalledPlugin(pluginSlug) {
  var _dispatch2, createNotice, response;

  return external_regeneratorRuntime_default.a.wrap(function activateInstalledPlugin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _dispatch2 = Object(external_wp_data_["dispatch"])('core/notices'), createNotice = _dispatch2.createNotice;
          _context.next = 3;
          return receiveActivatingPlugin(pluginSlug);

        case 3:
          _context.prev = 3;
          _context.next = 6;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: constants["a" /* API_NAMESPACE */] + '/overview/activate-plugin',
            method: 'POST',
            data: {
              plugin: pluginSlug
            }
          });

        case 6:
          response = _context.sent;

          if (!response) {
            _context.next = 14;
            break;
          }

          _context.next = 10;
          return createNotice('success', Object(external_wp_i18n_["__"])('The extension has been successfully activated.', 'woocommerce-admin'));

        case 10:
          _context.next = 12;
          return loadInstalledPluginsAfterActivation(pluginSlug);

        case 12:
          _context.next = 15;
          break;

        case 14:
          throw new Error();

        case 15:
          _context.next = 23;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](3);
          _context.next = 21;
          return handleFetchError(_context.t0, Object(external_wp_i18n_["__"])('There was an error trying to activate the extension.', 'woocommerce-admin'));

        case 21:
          _context.next = 23;
          return removeActivatingPlugin(pluginSlug);

        case 23:
          return _context.abrupt("return", true);

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[3, 17]]);
}
function loadInstalledPluginsAfterActivation(activatedPluginSlug) {
  var response;
  return external_regeneratorRuntime_default.a.wrap(function loadInstalledPluginsAfterActivation$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: "".concat(constants["a" /* API_NAMESPACE */], "/overview/installed-plugins")
          });

        case 3:
          response = _context2.sent;

          if (!response) {
            _context2.next = 11;
            break;
          }

          _context2.next = 7;
          return receiveInstalledPlugins(response);

        case 7:
          _context2.next = 9;
          return removeActivatingPlugin(activatedPluginSlug);

        case 9:
          _context2.next = 12;
          break;

        case 11:
          throw new Error();

        case 12:
          _context2.next = 18;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 18;
          return handleFetchError(_context2.t0, Object(external_wp_i18n_["__"])('There was an error loading installed extensions.', 'woocommerce-admin'));

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 14]]);
}
// CONCATENATED MODULE: ./client/marketing/data/selectors.js
function getInstalledPlugins(state) {
  return state.installedPlugins;
}
function getActivatingPlugins(state) {
  return state.activatingPlugins;
}
function getRecommendedPlugins(state, category) {
  return state.recommendedPlugins[category] || [];
}
function getBlogPosts(state, category) {
  return state.blogPosts[category] || [];
}
function getBlogPostsError(state, category) {
  return state.errors.blogPosts && state.errors.blogPosts[category];
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(66);

// CONCATENATED MODULE: ./client/marketing/data/resolvers.js


var resolvers_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getRecommendedPlugins),
    resolvers_marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getBlogPosts);



/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



function resolvers_getRecommendedPlugins(category) {
  var categoryParam, response;
  return external_regeneratorRuntime_default.a.wrap(function getRecommendedPlugins$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return category ? "&category=".concat(category) : '';

        case 3:
          categoryParam = _context.sent;
          _context.next = 6;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: "".concat(constants["a" /* API_NAMESPACE */], "/recommended?per_page=6").concat(categoryParam)
          });

        case 6:
          response = _context.sent;

          if (!response) {
            _context.next = 12;
            break;
          }

          _context.next = 10;
          return receiveRecommendedPlugins(response, category);

        case 10:
          _context.next = 13;
          break;

        case 12:
          throw new Error();

        case 13:
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](0);
          _context.next = 19;
          return handleFetchError(_context.t0, Object(external_wp_i18n_["__"])('There was an error loading recommended extensions.', 'woocommerce-admin'));

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, resolvers_marked, null, [[0, 15]]);
}
function resolvers_getBlogPosts(category) {
  var categoryParam, response;
  return external_regeneratorRuntime_default.a.wrap(function getBlogPosts$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return category ? "?category=".concat(category) : '';

        case 3:
          categoryParam = _context2.sent;
          _context2.next = 6;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: "".concat(constants["a" /* API_NAMESPACE */], "/knowledge-base").concat(categoryParam),
            method: 'GET'
          });

        case 6:
          response = _context2.sent;

          if (!response) {
            _context2.next = 12;
            break;
          }

          _context2.next = 10;
          return receiveBlogPosts(response, category);

        case 10:
          _context2.next = 13;
          break;

        case 12:
          throw new Error();

        case 13:
          _context2.next = 19;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 19;
          return setError(category, _context2.t0);

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, resolvers_marked2, null, [[0, 15]]);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(44);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./client/wc-admin-settings/index.js
var wc_admin_settings = __webpack_require__(85);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(5);

// CONCATENATED MODULE: ./client/marketing/data/reducer.js










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



var _getSetting = Object(wc_admin_settings["g" /* getSetting */])('marketing', {}),
    installedExtensions = _getSetting.installedExtensions;

var DEFAULT_STATE = {
  installedPlugins: installedExtensions,
  activatingPlugins: [],
  recommendedPlugins: {},
  blogPosts: {},
  errors: {}
};

var reducer_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case action_types.SET_INSTALLED_PLUGINS:
      return _objectSpread(_objectSpread({}, state), {}, {
        installedPlugins: action.plugins
      });

    case action_types.SET_ACTIVATING_PLUGIN:
      return _objectSpread(_objectSpread({}, state), {}, {
        activatingPlugins: [].concat(toConsumableArray_default()(state.activatingPlugins), [action.pluginSlug])
      });

    case action_types.REMOVE_ACTIVATING_PLUGIN:
      return _objectSpread(_objectSpread({}, state), {}, {
        activatingPlugins: Object(external_lodash_["without"])(state.activatingPlugins, action.pluginSlug)
      });

    case action_types.SET_RECOMMENDED_PLUGINS:
      return _objectSpread(_objectSpread({}, state), {}, {
        recommendedPlugins: _objectSpread(_objectSpread({}, state.recommendedPlugins), {}, defineProperty_default()({}, action.data.category, action.data.plugins))
      });

    case action_types.SET_BLOG_POSTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        blogPosts: _objectSpread(_objectSpread({}, state.blogPosts), {}, defineProperty_default()({}, action.data.category, action.data.posts))
      });

    case action_types.SET_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        errors: _objectSpread(_objectSpread({}, state.errors), {}, {
          blogPosts: _objectSpread(_objectSpread({}, state.errors.blogPosts), {}, defineProperty_default()({}, action.category, action.error))
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ var data_reducer = (reducer_reducer);
// CONCATENATED MODULE: ./client/marketing/data/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






Object(external_wp_data_["registerStore"])(constants["b" /* STORE_KEY */], {
  actions: actions_namespaceObject,
  selectors: selectors_namespaceObject,
  resolvers: resolvers_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  reducer: data_reducer
});

/***/ }),
/* 416 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(133);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js + 1 modules
var inheritsLoose = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/hasClass.js
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/addClass.js

function addClass_addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}
// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

function removeClass_removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    ;
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}
// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(20);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: external "ReactDOM"
var external_ReactDOM_ = __webpack_require__(163);
var external_ReactDOM_default = /*#__PURE__*/__webpack_require__.n(external_ReactDOM_);

// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/config.js
/* harmony default export */ var config = ({
  disabled: false
});
// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/TransitionGroupContext.js
var TransitionGroupContext = __webpack_require__(186);

// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/Transition.js








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition_Transition = /*#__PURE__*/function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [external_ReactDOM_default.a.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : external_ReactDOM_default.a.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : external_ReactDOM_default.a.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      external_React_default.a.createElement(TransitionGroupContext["a" /* default */].Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : external_React_default.a.cloneElement(external_React_default.a.Children.only(children), childProps))
    );
  };

  return Transition;
}(external_React_default.a.Component);

Transition_Transition.contextType = TransitionGroupContext["a" /* default */];
Transition_Transition.propTypes =  false ? undefined : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition_Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition_Transition.UNMOUNTED = UNMOUNTED;
Transition_Transition.EXITED = EXITED;
Transition_Transition.ENTERING = ENTERING;
Transition_Transition.ENTERED = ENTERED;
Transition_Transition.EXITING = EXITING;
/* harmony default export */ var esm_Transition = (Transition_Transition);
// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/CSSTransition.js










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return addClass_addClass(node, c);
  });
};

var CSSTransition_removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return removeClass_removeClass(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition_CSSTransition = /*#__PURE__*/function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      CSSTransition_removeClass(node, baseClassName);
    }

    if (activeClassName) {
      CSSTransition_removeClass(node, activeClassName);
    }

    if (doneClassName) {
      CSSTransition_removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["classNames"]);

    return /*#__PURE__*/external_React_default.a.createElement(esm_Transition, Object(esm_extends["a" /* default */])({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(external_React_default.a.Component);

CSSTransition_CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition_CSSTransition.propTypes =  false ? undefined : {};
/* harmony default export */ var esm_CSSTransition = __webpack_exports__["a"] = (CSSTransition_CSSTransition);

/***/ }),
/* 417 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(133);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(117);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js + 1 modules
var inheritsLoose = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(20);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/TransitionGroupContext.js
var TransitionGroupContext = __webpack_require__(186);

// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/utils/ChildMapping.js

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && Object(external_React_["isValidElement"])(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) external_React_["Children"].map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return Object(external_React_["cloneElement"])(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!Object(external_React_["isValidElement"])(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = Object(external_React_["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = Object(external_React_["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = Object(external_React_["cloneElement"])(child, {
        in: false
      });
    } else if (hasNext && hasPrev && Object(external_React_["isValidElement"])(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = Object(external_React_["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}
// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/TransitionGroup.js









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup_TransitionGroup = /*#__PURE__*/function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = Object(esm_extends["a" /* default */])({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/external_React_default.a.createElement(TransitionGroupContext["a" /* default */].Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/external_React_default.a.createElement(TransitionGroupContext["a" /* default */].Provider, {
      value: contextValue
    }, /*#__PURE__*/external_React_default.a.createElement(Component, props, children));
  };

  return TransitionGroup;
}(external_React_default.a.Component);

TransitionGroup_TransitionGroup.propTypes =  false ? undefined : {};
TransitionGroup_TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ var esm_TransitionGroup = __webpack_exports__["a"] = (TransitionGroup_TransitionGroup);

/***/ }),
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(224);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(225);
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
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: ./client/wc-admin-settings/index.js
var wc_admin_settings = __webpack_require__(85);

// EXTERNAL MODULE: ./client/marketing/coupons/style.scss
var style = __webpack_require__(563);

// EXTERNAL MODULE: ./client/marketing/components/recommended-extensions/index.js + 2 modules
var recommended_extensions = __webpack_require__(329);

// EXTERNAL MODULE: ./client/marketing/components/knowledge-base/index.js + 2 modules
var knowledge_base = __webpack_require__(330);

// EXTERNAL MODULE: ./client/marketing/data/index.js + 5 modules
var data = __webpack_require__(415);

// CONCATENATED MODULE: ./client/marketing/coupons/index.js


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






var coupons_CouponsOverview = function CouponsOverview() {
  var allowMarketplaceSuggestions = Object(wc_admin_settings["g" /* getSetting */])('allowMarketplaceSuggestions', false);
  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-marketing-coupons"
  }, allowMarketplaceSuggestions && Object(external_wp_element_["createElement"])(recommended_extensions["a" /* default */], {
    title: Object(external_wp_i18n_["__"])('Recommended coupon extensions', 'woocommerce-admin'),
    description: Object(external_wp_i18n_["__"])('Take your coupon marketing to the next level with our recommended coupon extensions.', 'woocommerce-admin'),
    category: "coupons"
  }), Object(external_wp_element_["createElement"])(knowledge_base["a" /* default */], {
    category: "coupons",
    description: Object(external_wp_i18n_["__"])('Learn the ins and outs of successful coupon marketing from the experts at WooCommerce.', 'woocommerce-admin')
  }));
};

/* harmony default export */ var coupons = (coupons_CouponsOverview);
// CONCATENATED MODULE: ./client/wp-admin-scripts/marketing-coupons/index.js


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


var postForm = document.getElementById('posts-filter');

if (postForm) {
  var couponRoot = document.createElement('div');
  couponRoot.setAttribute('id', 'coupon-root');
  Object(external_wp_element_["render"])(Object(external_wp_element_["createElement"])(coupons, null), postForm.parentNode.appendChild(couponRoot));
}

/***/ })
/******/ ]);