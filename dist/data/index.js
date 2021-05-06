this["wc"] = this["wc"] || {}; this["wc"]["data"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 571);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),
/* 1 */,
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
/* 4 */,
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
/* 14 */,
/* 15 */,
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
/* 18 */,
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
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(71);
var requireObjectCoercible = __webpack_require__(32);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
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
/* 28 */,
/* 29 */
/***/ (function(module, exports) {

(function() { module.exports = window["moment"]; }());

/***/ }),
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
/* 50 */
/***/ (function(module, exports) {

(function() { module.exports = window["wc"]["navigation"]; }());

/***/ }),
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
/* 64 */,
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
/* 80 */,
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
/* 85 */,
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
/* 92 */,
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
/* 95 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ }),
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
/* 99 */,
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
/* 101 */
/***/ (function(module, exports) {

(function() { module.exports = window["wc"]["date"]; }());

/***/ }),
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
/* 105 */,
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
/* 108 */,
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
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(233);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
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

module.exports = _objectWithoutProperties;

/***/ }),
/* 117 */,
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
/* 128 */,
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(13);
var defineProperty = __webpack_require__(17).f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),
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
/* 133 */,
/* 134 */
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

/***/ }),
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
/* 136 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),
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
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(12);
var IndexedObject = __webpack_require__(71);
var toIndexedObject = __webpack_require__(21);
var arrayMethodIsStrict = __webpack_require__(121);

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(12);
var notARegExp = __webpack_require__(207);
var requireObjectCoercible = __webpack_require__(32);
var correctIsRegExpLogic = __webpack_require__(208);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 141 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["hooks"]; }());

/***/ }),
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
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var classof = __webpack_require__(30);
var wellKnownSymbol = __webpack_require__(8);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 145 */,
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
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var aFunction = __webpack_require__(70);
var wellKnownSymbol = __webpack_require__(8);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(125).charAt;
var InternalStateModule = __webpack_require__(45);
var defineIterator = __webpack_require__(166);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(27);

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(31);
var definePropertyModule = __webpack_require__(17);
var wellKnownSymbol = __webpack_require__(8);
var DESCRIPTORS = __webpack_require__(13);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var isArrayIteratorMethod = __webpack_require__(171);
var toLength = __webpack_require__(34);
var bind = __webpack_require__(94);
var getIteratorMethod = __webpack_require__(155);
var iteratorClose = __webpack_require__(172);

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(113);
var Iterators = __webpack_require__(110);
var wellKnownSymbol = __webpack_require__(8);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var setPrototypeOf = __webpack_require__(143);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var fails = __webpack_require__(6);
var bind = __webpack_require__(94);
var html = __webpack_require__(98);
var createElement = __webpack_require__(67);
var IS_IOS = __webpack_require__(158);
var IS_NODE = __webpack_require__(77);

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins -- safe
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(87);

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(70);

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
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
/* 163 */,
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(12);
var IS_PURE = __webpack_require__(57);
var global = __webpack_require__(3);
var getBuiltIn = __webpack_require__(31);
var NativePromise = __webpack_require__(193);
var redefine = __webpack_require__(27);
var redefineAll = __webpack_require__(152);
var setToStringTag = __webpack_require__(90);
var setSpecies = __webpack_require__(153);
var isObject = __webpack_require__(10);
var aFunction = __webpack_require__(70);
var anInstance = __webpack_require__(136);
var inspectSource = __webpack_require__(68);
var iterate = __webpack_require__(154);
var checkCorrectnessOfIteration = __webpack_require__(165);
var speciesConstructor = __webpack_require__(150);
var task = __webpack_require__(157).set;
var microtask = __webpack_require__(194);
var promiseResolve = __webpack_require__(196);
var hostReportErrors = __webpack_require__(197);
var newPromiseCapabilityModule = __webpack_require__(159);
var perform = __webpack_require__(198);
var InternalStateModule = __webpack_require__(45);
var isForced = __webpack_require__(74);
var wellKnownSymbol = __webpack_require__(8);
var IS_NODE = __webpack_require__(77);
var V8_VERSION = __webpack_require__(63);

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && !NATIVE_REJECTION_EVENT) return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(8);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),
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
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(8);
var Iterators = __webpack_require__(110);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),
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
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);

module.exports = global.Promise;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var getOwnPropertyDescriptor = __webpack_require__(33).f;
var macrotask = __webpack_require__(157).set;
var IS_IOS = __webpack_require__(158);
var IS_WEBOS_WEBKIT = __webpack_require__(195);
var IS_NODE = __webpack_require__(77);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(87);

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var isObject = __webpack_require__(10);
var newPromiseCapability = __webpack_require__(159);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),
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
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(111);
var anObject = __webpack_require__(9);
var toLength = __webpack_require__(34);
var requireObjectCoercible = __webpack_require__(32);
var advanceStringIndex = __webpack_require__(122);
var regExpExec = __webpack_require__(112);

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),
/* 204 */,
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__(36);
var isObject = __webpack_require__(10);
var has = __webpack_require__(11);
var defineProperty = __webpack_require__(17).f;
var uid = __webpack_require__(55);
var FREEZING = __webpack_require__(253);

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),
/* 206 */,
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(144);

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(8);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
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
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(13);
var fails = __webpack_require__(6);
var objectKeys = __webpack_require__(54);
var getOwnPropertySymbolsModule = __webpack_require__(79);
var propertyIsEnumerableModule = __webpack_require__(76);
var toObject = __webpack_require__(38);
var IndexedObject = __webpack_require__(71);

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  /* global Symbol -- required for testing */
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(12);
var global = __webpack_require__(3);
var isForced = __webpack_require__(74);
var redefine = __webpack_require__(27);
var InternalMetadataModule = __webpack_require__(205);
var iterate = __webpack_require__(154);
var anInstance = __webpack_require__(136);
var isObject = __webpack_require__(10);
var fails = __webpack_require__(6);
var checkCorrectnessOfIteration = __webpack_require__(165);
var setToStringTag = __webpack_require__(90);
var inheritIfRequired = __webpack_require__(156);

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */
/***/ (function(module, exports) {

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

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 234 */,
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(17).f;
var create = __webpack_require__(69);
var redefineAll = __webpack_require__(152);
var bind = __webpack_require__(94);
var anInstance = __webpack_require__(136);
var iterate = __webpack_require__(154);
var defineIterator = __webpack_require__(166);
var setSpecies = __webpack_require__(153);
var DESCRIPTORS = __webpack_require__(13);
var fastKey = __webpack_require__(205).fastKey;
var InternalStateModule = __webpack_require__(45);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(229);
var collectionStrong = __webpack_require__(235);

// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
module.exports = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(13);
var objectKeys = __webpack_require__(54);
var toIndexedObject = __webpack_require__(21);
var propertyIsEnumerable = __webpack_require__(76).f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(12);
var assign = __webpack_require__(221);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),
/* 251 */,
/* 252 */,
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(6);

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */
/***/ (function(module, exports) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),
/* 262 */,
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(313),
      utf8 = __webpack_require__(261).utf8,
      isBuffer = __webpack_require__(314),
      bin = __webpack_require__(261).bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message) && message.constructor !== Uint8Array)
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ }),
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
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
/* 284 */,
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(12);
var $values = __webpack_require__(249).values;

// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),
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
/* 313 */
/***/ (function(module, exports) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),
/* 314 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
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
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
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
/* 558 */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["coreData"]; }());

/***/ }),
/* 559 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(229);
var collectionStrong = __webpack_require__(235);

// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
module.exports = collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "SETTINGS_STORE_NAME", function() { return /* reexport */ SETTINGS_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "withSettingsHydration", function() { return /* reexport */ with_settings_hydration_withSettingsHydration; });
__webpack_require__.d(__webpack_exports__, "useSettings", function() { return /* reexport */ use_settings_useSettings; });
__webpack_require__.d(__webpack_exports__, "PLUGINS_STORE_NAME", function() { return /* reexport */ PLUGINS_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "pluginNames", function() { return /* reexport */ pluginNames; });
__webpack_require__.d(__webpack_exports__, "withPluginsHydration", function() { return /* reexport */ with_plugins_hydration_withPluginsHydration; });
__webpack_require__.d(__webpack_exports__, "ONBOARDING_STORE_NAME", function() { return /* reexport */ ONBOARDING_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "withOnboardingHydration", function() { return /* reexport */ with_onboarding_hydration_withOnboardingHydration; });
__webpack_require__.d(__webpack_exports__, "USER_STORE_NAME", function() { return /* reexport */ USER_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "withCurrentUserHydration", function() { return /* reexport */ with_current_user_hydration_withCurrentUserHydration; });
__webpack_require__.d(__webpack_exports__, "useUser", function() { return /* reexport */ use_user_useUser; });
__webpack_require__.d(__webpack_exports__, "useUserPreferences", function() { return /* reexport */ use_user_preferences_useUserPreferences; });
__webpack_require__.d(__webpack_exports__, "OPTIONS_STORE_NAME", function() { return /* reexport */ OPTIONS_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "withOptionsHydration", function() { return /* reexport */ with_options_hydration_withOptionsHydration; });
__webpack_require__.d(__webpack_exports__, "REVIEWS_STORE_NAME", function() { return /* reexport */ REVIEWS_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "NOTES_STORE_NAME", function() { return /* reexport */ NOTES_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "REPORTS_STORE_NAME", function() { return /* reexport */ REPORTS_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "ITEMS_STORE_NAME", function() { return /* reexport */ ITEMS_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "getLeaderboard", function() { return /* reexport */ getLeaderboard; });
__webpack_require__.d(__webpack_exports__, "searchItemsByString", function() { return /* reexport */ searchItemsByString; });
__webpack_require__.d(__webpack_exports__, "NAVIGATION_STORE_NAME", function() { return /* reexport */ NAVIGATION_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "withNavigationHydration", function() { return /* reexport */ with_navigation_hydration_withNavigationHydration; });
__webpack_require__.d(__webpack_exports__, "getFilterQuery", function() { return /* reexport */ getFilterQuery; });
__webpack_require__.d(__webpack_exports__, "getSummaryNumbers", function() { return /* reexport */ getSummaryNumbers; });
__webpack_require__.d(__webpack_exports__, "getReportTableData", function() { return /* reexport */ getReportTableData; });
__webpack_require__.d(__webpack_exports__, "getReportTableQuery", function() { return /* reexport */ getReportTableQuery; });
__webpack_require__.d(__webpack_exports__, "getReportChartData", function() { return /* reexport */ getReportChartData; });
__webpack_require__.d(__webpack_exports__, "getTooltipValueFormat", function() { return /* reexport */ getTooltipValueFormat; });
__webpack_require__.d(__webpack_exports__, "MAX_PER_PAGE", function() { return /* reexport */ MAX_PER_PAGE; });
__webpack_require__.d(__webpack_exports__, "QUERY_DEFAULTS", function() { return /* reexport */ QUERY_DEFAULTS; });
__webpack_require__.d(__webpack_exports__, "NAMESPACE", function() { return /* reexport */ NAMESPACE; });
__webpack_require__.d(__webpack_exports__, "WC_ADMIN_NAMESPACE", function() { return /* reexport */ WC_ADMIN_NAMESPACE; });
__webpack_require__.d(__webpack_exports__, "WCS_NAMESPACE", function() { return /* reexport */ WCS_NAMESPACE; });
__webpack_require__.d(__webpack_exports__, "SECOND", function() { return /* reexport */ SECOND; });
__webpack_require__.d(__webpack_exports__, "MINUTE", function() { return /* reexport */ MINUTE; });
__webpack_require__.d(__webpack_exports__, "HOUR", function() { return /* reexport */ HOUR; });
__webpack_require__.d(__webpack_exports__, "DAY", function() { return /* reexport */ DAY; });
__webpack_require__.d(__webpack_exports__, "WEEK", function() { return /* reexport */ WEEK; });
__webpack_require__.d(__webpack_exports__, "MONTH", function() { return /* reexport */ MONTH; });
__webpack_require__.d(__webpack_exports__, "EXPORT_STORE_NAME", function() { return /* reexport */ EXPORT_STORE_NAME; });
__webpack_require__.d(__webpack_exports__, "IMPORT_STORE_NAME", function() { return /* reexport */ IMPORT_STORE_NAME; });

// NAMESPACE OBJECT: ./packages/data/build-module/settings/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getSettingsGroupNames", function() { return selectors_getSettingsGroupNames; });
__webpack_require__.d(selectors_namespaceObject, "getSettings", function() { return selectors_getSettings; });
__webpack_require__.d(selectors_namespaceObject, "getDirtyKeys", function() { return getDirtyKeys; });
__webpack_require__.d(selectors_namespaceObject, "getIsDirty", function() { return selectors_getIsDirty; });
__webpack_require__.d(selectors_namespaceObject, "getSettingsForGroup", function() { return selectors_getSettingsForGroup; });
__webpack_require__.d(selectors_namespaceObject, "isUpdateSettingsRequesting", function() { return selectors_isUpdateSettingsRequesting; });
__webpack_require__.d(selectors_namespaceObject, "getSetting", function() { return getSetting; });
__webpack_require__.d(selectors_namespaceObject, "getLastSettingsErrorForGroup", function() { return selectors_getLastSettingsErrorForGroup; });
__webpack_require__.d(selectors_namespaceObject, "getSettingsError", function() { return selectors_getSettingsError; });

// NAMESPACE OBJECT: ./packages/data/build-module/settings/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "updateSettingsForGroup", function() { return actions_updateSettingsForGroup; });
__webpack_require__.d(actions_namespaceObject, "updateErrorForGroup", function() { return updateErrorForGroup; });
__webpack_require__.d(actions_namespaceObject, "setIsRequesting", function() { return setIsRequesting; });
__webpack_require__.d(actions_namespaceObject, "clearIsDirty", function() { return actions_clearIsDirty; });
__webpack_require__.d(actions_namespaceObject, "updateAndPersistSettingsForGroup", function() { return actions_updateAndPersistSettingsForGroup; });
__webpack_require__.d(actions_namespaceObject, "persistSettingsForGroup", function() { return actions_persistSettingsForGroup; });
__webpack_require__.d(actions_namespaceObject, "clearSettings", function() { return clearSettings; });

// NAMESPACE OBJECT: ./packages/data/build-module/settings/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getSettings", function() { return resolvers_getSettings; });
__webpack_require__.d(resolvers_namespaceObject, "getSettingsForGroup", function() { return resolvers_getSettingsForGroup; });

// NAMESPACE OBJECT: ./packages/data/build-module/plugins/selectors.js
var plugins_selectors_namespaceObject = {};
__webpack_require__.r(plugins_selectors_namespaceObject);
__webpack_require__.d(plugins_selectors_namespaceObject, "getActivePlugins", function() { return getActivePlugins; });
__webpack_require__.d(plugins_selectors_namespaceObject, "getInstalledPlugins", function() { return getInstalledPlugins; });
__webpack_require__.d(plugins_selectors_namespaceObject, "isPluginsRequesting", function() { return isPluginsRequesting; });
__webpack_require__.d(plugins_selectors_namespaceObject, "getPluginsError", function() { return getPluginsError; });
__webpack_require__.d(plugins_selectors_namespaceObject, "isJetpackConnected", function() { return isJetpackConnected; });
__webpack_require__.d(plugins_selectors_namespaceObject, "getJetpackConnectUrl", function() { return getJetpackConnectUrl; });
__webpack_require__.d(plugins_selectors_namespaceObject, "getPluginInstallState", function() { return getPluginInstallState; });
__webpack_require__.d(plugins_selectors_namespaceObject, "getPaypalOnboardingStatus", function() { return getPaypalOnboardingStatus; });

// NAMESPACE OBJECT: ./packages/data/build-module/plugins/actions.js
var plugins_actions_namespaceObject = {};
__webpack_require__.r(plugins_actions_namespaceObject);
__webpack_require__.d(plugins_actions_namespaceObject, "updateActivePlugins", function() { return actions_updateActivePlugins; });
__webpack_require__.d(plugins_actions_namespaceObject, "updateInstalledPlugins", function() { return actions_updateInstalledPlugins; });
__webpack_require__.d(plugins_actions_namespaceObject, "setIsRequesting", function() { return actions_setIsRequesting; });
__webpack_require__.d(plugins_actions_namespaceObject, "setError", function() { return setError; });
__webpack_require__.d(plugins_actions_namespaceObject, "updateIsJetpackConnected", function() { return actions_updateIsJetpackConnected; });
__webpack_require__.d(plugins_actions_namespaceObject, "updateJetpackConnectUrl", function() { return updateJetpackConnectUrl; });
__webpack_require__.d(plugins_actions_namespaceObject, "installPlugins", function() { return installPlugins; });
__webpack_require__.d(plugins_actions_namespaceObject, "activatePlugins", function() { return activatePlugins; });
__webpack_require__.d(plugins_actions_namespaceObject, "installAndActivatePlugins", function() { return installAndActivatePlugins; });
__webpack_require__.d(plugins_actions_namespaceObject, "createErrorNotice", function() { return actions_createErrorNotice; });
__webpack_require__.d(plugins_actions_namespaceObject, "connectToJetpack", function() { return connectToJetpack; });
__webpack_require__.d(plugins_actions_namespaceObject, "installJetpackAndConnect", function() { return installJetpackAndConnect; });
__webpack_require__.d(plugins_actions_namespaceObject, "connectToJetpackWithFailureRedirect", function() { return connectToJetpackWithFailureRedirect; });
__webpack_require__.d(plugins_actions_namespaceObject, "formatErrors", function() { return formatErrors; });
__webpack_require__.d(plugins_actions_namespaceObject, "setPaypalOnboardingStatus", function() { return setPaypalOnboardingStatus; });

// NAMESPACE OBJECT: ./packages/data/build-module/options/selectors.js
var options_selectors_namespaceObject = {};
__webpack_require__.r(options_selectors_namespaceObject);
__webpack_require__.d(options_selectors_namespaceObject, "getOption", function() { return getOption; });
__webpack_require__.d(options_selectors_namespaceObject, "getOptionsRequestingError", function() { return getOptionsRequestingError; });
__webpack_require__.d(options_selectors_namespaceObject, "isOptionsUpdating", function() { return isOptionsUpdating; });
__webpack_require__.d(options_selectors_namespaceObject, "getOptionsUpdatingError", function() { return getOptionsUpdatingError; });

// NAMESPACE OBJECT: ./packages/data/build-module/options/actions.js
var options_actions_namespaceObject = {};
__webpack_require__.r(options_actions_namespaceObject);
__webpack_require__.d(options_actions_namespaceObject, "receiveOptions", function() { return actions_receiveOptions; });
__webpack_require__.d(options_actions_namespaceObject, "setRequestingError", function() { return setRequestingError; });
__webpack_require__.d(options_actions_namespaceObject, "setUpdatingError", function() { return setUpdatingError; });
__webpack_require__.d(options_actions_namespaceObject, "setIsUpdating", function() { return setIsUpdating; });
__webpack_require__.d(options_actions_namespaceObject, "updateOptions", function() { return updateOptions; });

// NAMESPACE OBJECT: ./packages/data/build-module/options/resolvers.js
var options_resolvers_namespaceObject = {};
__webpack_require__.r(options_resolvers_namespaceObject);
__webpack_require__.d(options_resolvers_namespaceObject, "getOption", function() { return resolvers_getOption; });

// NAMESPACE OBJECT: ./packages/data/build-module/plugins/resolvers.js
var plugins_resolvers_namespaceObject = {};
__webpack_require__.r(plugins_resolvers_namespaceObject);
__webpack_require__.d(plugins_resolvers_namespaceObject, "getActivePlugins", function() { return resolvers_getActivePlugins; });
__webpack_require__.d(plugins_resolvers_namespaceObject, "getInstalledPlugins", function() { return resolvers_getInstalledPlugins; });
__webpack_require__.d(plugins_resolvers_namespaceObject, "isJetpackConnected", function() { return resolvers_isJetpackConnected; });
__webpack_require__.d(plugins_resolvers_namespaceObject, "getJetpackConnectUrl", function() { return resolvers_getJetpackConnectUrl; });
__webpack_require__.d(plugins_resolvers_namespaceObject, "getPaypalOnboardingStatus", function() { return resolvers_getPaypalOnboardingStatus; });

// NAMESPACE OBJECT: ./packages/data/build-module/onboarding/selectors.js
var onboarding_selectors_namespaceObject = {};
__webpack_require__.r(onboarding_selectors_namespaceObject);
__webpack_require__.d(onboarding_selectors_namespaceObject, "getProfileItems", function() { return getProfileItems; });
__webpack_require__.d(onboarding_selectors_namespaceObject, "getTasksStatus", function() { return getTasksStatus; });
__webpack_require__.d(onboarding_selectors_namespaceObject, "getOnboardingError", function() { return getOnboardingError; });
__webpack_require__.d(onboarding_selectors_namespaceObject, "isOnboardingRequesting", function() { return isOnboardingRequesting; });

// NAMESPACE OBJECT: ./packages/data/build-module/onboarding/actions.js
var onboarding_actions_namespaceObject = {};
__webpack_require__.r(onboarding_actions_namespaceObject);
__webpack_require__.d(onboarding_actions_namespaceObject, "setError", function() { return actions_setError; });
__webpack_require__.d(onboarding_actions_namespaceObject, "setIsRequesting", function() { return onboarding_actions_setIsRequesting; });
__webpack_require__.d(onboarding_actions_namespaceObject, "setProfileItems", function() { return actions_setProfileItems; });
__webpack_require__.d(onboarding_actions_namespaceObject, "setTasksStatus", function() { return actions_setTasksStatus; });
__webpack_require__.d(onboarding_actions_namespaceObject, "updateProfileItems", function() { return updateProfileItems; });

// NAMESPACE OBJECT: ./packages/data/build-module/onboarding/resolvers.js
var onboarding_resolvers_namespaceObject = {};
__webpack_require__.r(onboarding_resolvers_namespaceObject);
__webpack_require__.d(onboarding_resolvers_namespaceObject, "getProfileItems", function() { return resolvers_getProfileItems; });
__webpack_require__.d(onboarding_resolvers_namespaceObject, "getTasksStatus", function() { return resolvers_getTasksStatus; });

// NAMESPACE OBJECT: ./packages/data/build-module/reviews/selectors.js
var reviews_selectors_namespaceObject = {};
__webpack_require__.r(reviews_selectors_namespaceObject);
__webpack_require__.d(reviews_selectors_namespaceObject, "getReviews", function() { return getReviews; });
__webpack_require__.d(reviews_selectors_namespaceObject, "getReviewsTotalCount", function() { return getReviewsTotalCount; });
__webpack_require__.d(reviews_selectors_namespaceObject, "getReviewsError", function() { return getReviewsError; });

// NAMESPACE OBJECT: ./packages/data/build-module/reviews/actions.js
var reviews_actions_namespaceObject = {};
__webpack_require__.r(reviews_actions_namespaceObject);
__webpack_require__.d(reviews_actions_namespaceObject, "updateReviews", function() { return updateReviews; });
__webpack_require__.d(reviews_actions_namespaceObject, "updateReview", function() { return updateReview; });
__webpack_require__.d(reviews_actions_namespaceObject, "deleteReview", function() { return deleteReview; });
__webpack_require__.d(reviews_actions_namespaceObject, "setReviewIsUpdating", function() { return setReviewIsUpdating; });
__webpack_require__.d(reviews_actions_namespaceObject, "setReview", function() { return setReview; });
__webpack_require__.d(reviews_actions_namespaceObject, "setError", function() { return reviews_actions_setError; });

// NAMESPACE OBJECT: ./packages/data/build-module/reviews/resolvers.js
var reviews_resolvers_namespaceObject = {};
__webpack_require__.r(reviews_resolvers_namespaceObject);
__webpack_require__.d(reviews_resolvers_namespaceObject, "getReviews", function() { return resolvers_getReviews; });
__webpack_require__.d(reviews_resolvers_namespaceObject, "getReviewsTotalCount", function() { return resolvers_getReviewsTotalCount; });

// NAMESPACE OBJECT: ./packages/data/build-module/notes/selectors.js
var notes_selectors_namespaceObject = {};
__webpack_require__.r(notes_selectors_namespaceObject);
__webpack_require__.d(notes_selectors_namespaceObject, "getNotes", function() { return getNotes; });
__webpack_require__.d(notes_selectors_namespaceObject, "getNotesError", function() { return getNotesError; });
__webpack_require__.d(notes_selectors_namespaceObject, "isNotesRequesting", function() { return isNotesRequesting; });

// NAMESPACE OBJECT: ./packages/data/build-module/notes/actions.js
var notes_actions_namespaceObject = {};
__webpack_require__.r(notes_actions_namespaceObject);
__webpack_require__.d(notes_actions_namespaceObject, "triggerNoteAction", function() { return triggerNoteAction; });
__webpack_require__.d(notes_actions_namespaceObject, "removeNote", function() { return removeNote; });
__webpack_require__.d(notes_actions_namespaceObject, "removeAllNotes", function() { return removeAllNotes; });
__webpack_require__.d(notes_actions_namespaceObject, "batchUpdateNotes", function() { return batchUpdateNotes; });
__webpack_require__.d(notes_actions_namespaceObject, "updateNote", function() { return updateNote; });
__webpack_require__.d(notes_actions_namespaceObject, "setNote", function() { return setNote; });
__webpack_require__.d(notes_actions_namespaceObject, "setNoteIsUpdating", function() { return setNoteIsUpdating; });
__webpack_require__.d(notes_actions_namespaceObject, "setNotes", function() { return setNotes; });
__webpack_require__.d(notes_actions_namespaceObject, "setNotesQuery", function() { return setNotesQuery; });
__webpack_require__.d(notes_actions_namespaceObject, "setError", function() { return notes_actions_setError; });
__webpack_require__.d(notes_actions_namespaceObject, "setIsRequesting", function() { return notes_actions_setIsRequesting; });

// NAMESPACE OBJECT: ./packages/data/build-module/notes/resolvers.js
var notes_resolvers_namespaceObject = {};
__webpack_require__.r(notes_resolvers_namespaceObject);
__webpack_require__.d(notes_resolvers_namespaceObject, "getNotes", function() { return resolvers_getNotes; });

// NAMESPACE OBJECT: ./packages/data/build-module/reports/selectors.js
var reports_selectors_namespaceObject = {};
__webpack_require__.r(reports_selectors_namespaceObject);
__webpack_require__.d(reports_selectors_namespaceObject, "getReportItemsError", function() { return selectors_getReportItemsError; });
__webpack_require__.d(reports_selectors_namespaceObject, "getReportItems", function() { return selectors_getReportItems; });
__webpack_require__.d(reports_selectors_namespaceObject, "getReportStats", function() { return selectors_getReportStats; });
__webpack_require__.d(reports_selectors_namespaceObject, "getReportStatsError", function() { return selectors_getReportStatsError; });

// NAMESPACE OBJECT: ./packages/data/build-module/reports/actions.js
var reports_actions_namespaceObject = {};
__webpack_require__.r(reports_actions_namespaceObject);
__webpack_require__.d(reports_actions_namespaceObject, "setReportItemsError", function() { return setReportItemsError; });
__webpack_require__.d(reports_actions_namespaceObject, "setReportItems", function() { return setReportItems; });
__webpack_require__.d(reports_actions_namespaceObject, "setReportStats", function() { return setReportStats; });
__webpack_require__.d(reports_actions_namespaceObject, "setReportStatsError", function() { return setReportStatsError; });

// NAMESPACE OBJECT: ./packages/data/build-module/reports/resolvers.js
var reports_resolvers_namespaceObject = {};
__webpack_require__.r(reports_resolvers_namespaceObject);
__webpack_require__.d(reports_resolvers_namespaceObject, "getReportItems", function() { return resolvers_getReportItems; });
__webpack_require__.d(reports_resolvers_namespaceObject, "getReportStats", function() { return resolvers_getReportStats; });

// NAMESPACE OBJECT: ./packages/data/build-module/items/selectors.js
var items_selectors_namespaceObject = {};
__webpack_require__.r(items_selectors_namespaceObject);
__webpack_require__.d(items_selectors_namespaceObject, "getItems", function() { return selectors_getItems; });
__webpack_require__.d(items_selectors_namespaceObject, "getItemsTotalCount", function() { return selectors_getItemsTotalCount; });
__webpack_require__.d(items_selectors_namespaceObject, "getItemsError", function() { return selectors_getItemsError; });

// NAMESPACE OBJECT: ./packages/data/build-module/items/actions.js
var items_actions_namespaceObject = {};
__webpack_require__.r(items_actions_namespaceObject);
__webpack_require__.d(items_actions_namespaceObject, "setItem", function() { return setItem; });
__webpack_require__.d(items_actions_namespaceObject, "setItems", function() { return setItems; });
__webpack_require__.d(items_actions_namespaceObject, "setItemsTotalCount", function() { return setItemsTotalCount; });
__webpack_require__.d(items_actions_namespaceObject, "setError", function() { return items_actions_setError; });
__webpack_require__.d(items_actions_namespaceObject, "updateProductStock", function() { return updateProductStock; });
__webpack_require__.d(items_actions_namespaceObject, "createProductFromTemplate", function() { return createProductFromTemplate; });

// NAMESPACE OBJECT: ./packages/data/build-module/items/resolvers.js
var items_resolvers_namespaceObject = {};
__webpack_require__.r(items_resolvers_namespaceObject);
__webpack_require__.d(items_resolvers_namespaceObject, "getItems", function() { return resolvers_getItems; });
__webpack_require__.d(items_resolvers_namespaceObject, "getReviewsTotalCount", function() { return items_resolvers_getReviewsTotalCount; });
__webpack_require__.d(items_resolvers_namespaceObject, "getItemsTotalCount", function() { return resolvers_getItemsTotalCount; });

// NAMESPACE OBJECT: ./packages/data/build-module/navigation/selectors.js
var navigation_selectors_namespaceObject = {};
__webpack_require__.r(navigation_selectors_namespaceObject);
__webpack_require__.d(navigation_selectors_namespaceObject, "getMenuItems", function() { return selectors_getMenuItems; });
__webpack_require__.d(navigation_selectors_namespaceObject, "getFavorites", function() { return getFavorites; });
__webpack_require__.d(navigation_selectors_namespaceObject, "isNavigationRequesting", function() { return isNavigationRequesting; });

// NAMESPACE OBJECT: ./packages/data/build-module/navigation/actions.js
var navigation_actions_namespaceObject = {};
__webpack_require__.r(navigation_actions_namespaceObject);
__webpack_require__.d(navigation_actions_namespaceObject, "setMenuItems", function() { return actions_setMenuItems; });
__webpack_require__.d(navigation_actions_namespaceObject, "addMenuItems", function() { return addMenuItems; });
__webpack_require__.d(navigation_actions_namespaceObject, "getFavoritesFailure", function() { return getFavoritesFailure; });
__webpack_require__.d(navigation_actions_namespaceObject, "getFavoritesRequest", function() { return getFavoritesRequest; });
__webpack_require__.d(navigation_actions_namespaceObject, "getFavoritesSuccess", function() { return getFavoritesSuccess; });
__webpack_require__.d(navigation_actions_namespaceObject, "addFavoriteRequest", function() { return addFavoriteRequest; });
__webpack_require__.d(navigation_actions_namespaceObject, "addFavoriteFailure", function() { return addFavoriteFailure; });
__webpack_require__.d(navigation_actions_namespaceObject, "addFavoriteSuccess", function() { return addFavoriteSuccess; });
__webpack_require__.d(navigation_actions_namespaceObject, "removeFavoriteRequest", function() { return removeFavoriteRequest; });
__webpack_require__.d(navigation_actions_namespaceObject, "removeFavoriteFailure", function() { return removeFavoriteFailure; });
__webpack_require__.d(navigation_actions_namespaceObject, "removeFavoriteSuccess", function() { return removeFavoriteSuccess; });
__webpack_require__.d(navigation_actions_namespaceObject, "addFavorite", function() { return addFavorite; });
__webpack_require__.d(navigation_actions_namespaceObject, "removeFavorite", function() { return removeFavorite; });

// NAMESPACE OBJECT: ./packages/data/build-module/navigation/resolvers.js
var navigation_resolvers_namespaceObject = {};
__webpack_require__.r(navigation_resolvers_namespaceObject);
__webpack_require__.d(navigation_resolvers_namespaceObject, "getFavorites", function() { return resolvers_getFavorites; });

// NAMESPACE OBJECT: ./packages/data/build-module/export/selectors.js
var export_selectors_namespaceObject = {};
__webpack_require__.r(export_selectors_namespaceObject);
__webpack_require__.d(export_selectors_namespaceObject, "isExportRequesting", function() { return selectors_isExportRequesting; });
__webpack_require__.d(export_selectors_namespaceObject, "getExportId", function() { return selectors_getExportId; });
__webpack_require__.d(export_selectors_namespaceObject, "getError", function() { return selectors_getError; });

// NAMESPACE OBJECT: ./packages/data/build-module/export/actions.js
var export_actions_namespaceObject = {};
__webpack_require__.r(export_actions_namespaceObject);
__webpack_require__.d(export_actions_namespaceObject, "setExportId", function() { return setExportId; });
__webpack_require__.d(export_actions_namespaceObject, "setIsRequesting", function() { return export_actions_setIsRequesting; });
__webpack_require__.d(export_actions_namespaceObject, "setError", function() { return export_actions_setError; });
__webpack_require__.d(export_actions_namespaceObject, "startExport", function() { return startExport; });

// NAMESPACE OBJECT: ./packages/data/build-module/import/selectors.js
var import_selectors_namespaceObject = {};
__webpack_require__.r(import_selectors_namespaceObject);
__webpack_require__.d(import_selectors_namespaceObject, "getImportStarted", function() { return getImportStarted; });
__webpack_require__.d(import_selectors_namespaceObject, "getFormSettings", function() { return getFormSettings; });
__webpack_require__.d(import_selectors_namespaceObject, "getImportStatus", function() { return getImportStatus; });
__webpack_require__.d(import_selectors_namespaceObject, "getImportTotals", function() { return getImportTotals; });
__webpack_require__.d(import_selectors_namespaceObject, "getImportError", function() { return getImportError; });

// NAMESPACE OBJECT: ./packages/data/build-module/import/actions.js
var import_actions_namespaceObject = {};
__webpack_require__.r(import_actions_namespaceObject);
__webpack_require__.d(import_actions_namespaceObject, "setImportStarted", function() { return setImportStarted; });
__webpack_require__.d(import_actions_namespaceObject, "setImportPeriod", function() { return setImportPeriod; });
__webpack_require__.d(import_actions_namespaceObject, "setSkipPrevious", function() { return setSkipPrevious; });
__webpack_require__.d(import_actions_namespaceObject, "setImportStatus", function() { return setImportStatus; });
__webpack_require__.d(import_actions_namespaceObject, "setImportTotals", function() { return setImportTotals; });
__webpack_require__.d(import_actions_namespaceObject, "setImportError", function() { return setImportError; });
__webpack_require__.d(import_actions_namespaceObject, "updateImportation", function() { return updateImportation; });

// NAMESPACE OBJECT: ./packages/data/build-module/import/resolvers.js
var import_resolvers_namespaceObject = {};
__webpack_require__.r(import_resolvers_namespaceObject);
__webpack_require__.d(import_resolvers_namespaceObject, "getImportStatus", function() { return resolvers_getImportStatus; });
__webpack_require__.d(import_resolvers_namespaceObject, "getImportTotals", function() { return resolvers_getImportTotals; });

// EXTERNAL MODULE: external ["wp","coreData"]
var external_wp_coreData_ = __webpack_require__(558);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(26);

// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__(35);

// CONCATENATED MODULE: ./packages/data/build-module/settings/constants.js
var STORE_NAME = 'wc/admin/settings';
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__(248);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(146);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(140);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(44);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(66);

// CONCATENATED MODULE: ./packages/data/build-module/utils.js


function getResourceName(prefix, identifier) {
  var identifierString = JSON.stringify(identifier, Object.keys(identifier).sort());
  return "".concat(prefix, ":").concat(identifierString);
}
function getResourcePrefix(resourceName) {
  var hasPrefixIndex = resourceName.indexOf(':');
  return hasPrefixIndex < 0 ? resourceName : resourceName.substring(0, hasPrefixIndex);
}
function isResourcePrefix(resourceName, prefix) {
  var resourcePrefix = getResourcePrefix(resourceName);
  return resourcePrefix === prefix;
}
function getResourceIdentifier(resourceName) {
  var identifierString = resourceName.substring(resourceName.indexOf(':') + 1);
  return JSON.parse(identifierString);
}
// CONCATENATED MODULE: ./packages/data/build-module/settings/selectors.js











/**
 * Internal dependencies
 */


var selectors_getSettingsGroupNames = function getSettingsGroupNames(state) {
  var groupNames = new Set(Object.keys(state).map(function (resourceName) {
    return getResourcePrefix(resourceName);
  }));
  return toConsumableArray_default()(groupNames);
};
var selectors_getSettings = function getSettings(state, group) {
  var settings = {};
  var settingIds = state[group] && state[group].data || [];

  if (settingIds.length === 0) {
    return settings;
  }

  settingIds.forEach(function (id) {
    settings[id] = state[getResourceName(group, id)].data;
  });
  return settings;
};
var getDirtyKeys = function getDirtyKeys(state, group) {
  return state[group].dirty || [];
};
var selectors_getIsDirty = function getIsDirty(state, group) {
  var keys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var dirtyMap = getDirtyKeys(state, group); // if empty array bail

  if (dirtyMap.length === 0) {
    return false;
  } // if at least one of the keys is in the dirty map then the state is dirty
  // meaning it hasn't been persisted.


  return keys.some(function (key) {
    return dirtyMap.includes(key);
  });
};
var selectors_getSettingsForGroup = function getSettingsForGroup(state, group, keys) {
  var allSettings = selectors_getSettings(state, group);
  return keys.reduce(function (accumulator, key) {
    accumulator[key] = allSettings[key] || {};
    return accumulator;
  }, {});
};
var selectors_isUpdateSettingsRequesting = function isUpdateSettingsRequesting(state, group) {
  return state[group] && Boolean(state[group].isRequesting);
};
/**
 * Retrieves a setting value from the setting store.
 *
 * @param {Object}   state                        State param added by wp.data.
 * @param {string}   group                        The settings group.
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

function getSetting(state, group, name) {
  var fallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var filter = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function (val) {
    return val;
  };
  var resourceName = getResourceName(group, name);
  var value = state[resourceName] && state[resourceName].data || fallback;
  return filter(value, fallback);
}
var selectors_getLastSettingsErrorForGroup = function getLastSettingsErrorForGroup(state, group) {
  var settingsIds = state[group].data;

  if (settingsIds.length === 0) {
    return state[group].error;
  }

  return toConsumableArray_default()(settingsIds).pop().error;
};
var selectors_getSettingsError = function getSettingsError(state, group, id) {
  if (!id) {
    return state[group] && state[group].error || false;
  }

  return state[getResourceName(group, id)].error || false;
};
// EXTERNAL MODULE: external "regeneratorRuntime"
var external_regeneratorRuntime_ = __webpack_require__(16);
var external_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_regeneratorRuntime_);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(5);

// CONCATENATED MODULE: ./packages/data/build-module/constants.js
var JETPACK_NAMESPACE = '/jetpack/v4';
var NAMESPACE = '/wc-analytics';
var WC_ADMIN_NAMESPACE = '/wc-admin';
var WCS_NAMESPACE = '/wc/v1'; // WCS endpoints like Stripe are not avaiable on later /wc versions
// WordPress & WooCommerce both set a hard limit of 100 for the per_page parameter

var MAX_PER_PAGE = 100;
var SECOND = 1000;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
var WEEK = 7 * DAY;
var MONTH = 365 * DAY / 12;
var DEFAULT_REQUIREMENT = {
  timeout: 1 * MINUTE,
  freshness: 30 * MINUTE
};
var DEFAULT_ACTIONABLE_STATUSES = ['processing', 'on-hold'];
var QUERY_DEFAULTS = {
  pageSize: 25,
  period: 'month',
  compare: 'previous_year',
  noteTypes: ['info', 'marketing', 'survey', 'warning']
};
// CONCATENATED MODULE: ./packages/data/build-module/settings/action-types.js
var TYPES = {
  UPDATE_SETTINGS_FOR_GROUP: 'UPDATE_SETTINGS_FOR_GROUP',
  UPDATE_ERROR_FOR_GROUP: 'UPDATE_ERROR_FOR_GROUP',
  CLEAR_SETTINGS: 'CLEAR_SETTINGS',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING',
  CLEAR_IS_DIRTY: 'CLEAR_IS_DIRTY'
};
/* harmony default export */ var action_types = (TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/settings/actions.js





var _marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(actions_updateAndPersistSettingsForGroup),
    _marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(actions_persistSettingsForGroup);
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */




function actions_updateSettingsForGroup(group, data) {
  var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date();
  return {
    type: action_types.UPDATE_SETTINGS_FOR_GROUP,
    group: group,
    data: data,
    time: time
  };
}
function updateErrorForGroup(group, data, error) {
  var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Date();
  return {
    type: action_types.UPDATE_ERROR_FOR_GROUP,
    group: group,
    data: data,
    error: error,
    time: time
  };
}
function setIsRequesting(group, isRequesting) {
  return {
    type: action_types.SET_IS_REQUESTING,
    group: group,
    isRequesting: isRequesting
  };
}
function actions_clearIsDirty(group) {
  return {
    type: action_types.CLEAR_IS_DIRTY,
    group: group
  };
} // allows updating and persisting immediately in one action.

function actions_updateAndPersistSettingsForGroup(group, data) {
  return external_regeneratorRuntime_default.a.wrap(function updateAndPersistSettingsForGroup$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return actions_updateSettingsForGroup(group, data);

        case 2:
          return _context.delegateYield(actions_persistSettingsForGroup(group), "t0", 3);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
} // this would replace setSettingsForGroup

function actions_persistSettingsForGroup(group) {
  var dirtyKeys, dirtyData, url, update, results;
  return external_regeneratorRuntime_default.a.wrap(function persistSettingsForGroup$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return setIsRequesting(group, true);

        case 2:
          _context2.next = 4;
          return Object(external_wp_dataControls_["select"])(STORE_NAME, 'getDirtyKeys', group);

        case 4:
          dirtyKeys = _context2.sent;

          if (!(dirtyKeys.length === 0)) {
            _context2.next = 9;
            break;
          }

          _context2.next = 8;
          return setIsRequesting(group, false);

        case 8:
          return _context2.abrupt("return");

        case 9:
          _context2.next = 11;
          return Object(external_wp_dataControls_["select"])(STORE_NAME, 'getSettingsForGroup', group, dirtyKeys);

        case 11:
          dirtyData = _context2.sent;
          url = "".concat(NAMESPACE, "/settings/").concat(group, "/batch");
          update = dirtyKeys.reduce(function (updates, key) {
            var u = Object.keys(dirtyData[key]).map(function (k) {
              return {
                id: k,
                value: dirtyData[key][k]
              };
            });
            return Object(external_lodash_["concat"])(updates, u);
          }, []);
          _context2.prev = 14;
          _context2.next = 17;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'POST',
            data: {
              update: update
            }
          });

        case 17:
          results = _context2.sent;
          _context2.next = 20;
          return setIsRequesting(group, false);

        case 20:
          if (results) {
            _context2.next = 22;
            break;
          }

          throw new Error(Object(external_wp_i18n_["__"])('There was a problem updating your settings.', 'woocommerce-admin'));

        case 22:
          _context2.next = 24;
          return actions_clearIsDirty(group);

        case 24:
          _context2.next = 33;
          break;

        case 26:
          _context2.prev = 26;
          _context2.t0 = _context2["catch"](14);
          _context2.next = 30;
          return updateErrorForGroup(group, null, _context2.t0);

        case 30:
          _context2.next = 32;
          return setIsRequesting(group, false);

        case 32:
          throw _context2.t0;

        case 33:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[14, 26]]);
}
function clearSettings() {
  return {
    type: action_types.CLEAR_SETTINGS
  };
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./packages/data/build-module/settings/resolvers.js



var resolvers_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getSettings),
    resolvers_marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getSettingsForGroup);
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */





function settingsToSettingsResource(settings) {
  return settings.reduce(function (resource, setting) {
    resource[setting.id] = setting.value;
    return resource;
  }, {});
}

function resolvers_getSettings(group) {
  var url, results, resource;
  return external_regeneratorRuntime_default.a.wrap(function getSettings$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(external_wp_dataControls_["dispatch"])(STORE_NAME, 'setIsRequesting', group, true);

        case 2:
          _context.prev = 2;
          url = NAMESPACE + '/settings/' + group;
          _context.next = 6;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'GET'
          });

        case 6:
          results = _context.sent;
          resource = settingsToSettingsResource(results);
          return _context.abrupt("return", actions_updateSettingsForGroup(group, defineProperty_default()({}, group, resource)));

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](2);
          return _context.abrupt("return", updateErrorForGroup(group, null, _context.t0.message));

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, resolvers_marked, null, [[2, 11]]);
}
function resolvers_getSettingsForGroup(group) {
  return external_regeneratorRuntime_default.a.wrap(function getSettingsForGroup$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", resolvers_getSettings(group));

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  }, resolvers_marked2);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(61);

// CONCATENATED MODULE: ./packages/data/build-module/settings/reducer.js










function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




var reducer_updateGroupDataInNewState = function updateGroupDataInNewState(newState, _ref) {
  var group = _ref.group,
      groupIds = _ref.groupIds,
      data = _ref.data,
      time = _ref.time,
      error = _ref.error;
  groupIds.forEach(function (id) {
    newState[getResourceName(group, id)] = {
      data: data[id],
      lastReceived: time,
      error: error
    };
  });
  return newState;
};

var reducer_receiveSettings = function receiveSettings() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref2 = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref2.type,
      group = _ref2.group,
      data = _ref2.data,
      error = _ref2.error,
      time = _ref2.time,
      isRequesting = _ref2.isRequesting;

  var newState = {};

  switch (type) {
    case action_types.SET_IS_REQUESTING:
      state = _objectSpread(_objectSpread({}, state), {}, defineProperty_default()({}, group, _objectSpread(_objectSpread({}, state[group]), {}, {
        isRequesting: isRequesting
      })));
      break;

    case action_types.CLEAR_IS_DIRTY:
      state = _objectSpread(_objectSpread({}, state), {}, defineProperty_default()({}, group, _objectSpread(_objectSpread({}, state[group]), {}, {
        dirty: []
      })));
      break;

    case action_types.UPDATE_SETTINGS_FOR_GROUP:
    case action_types.UPDATE_ERROR_FOR_GROUP:
      var groupIds = data ? Object.keys(data) : [];

      if (data === null) {
        state = _objectSpread(_objectSpread({}, state), {}, defineProperty_default()({}, group, {
          data: state[group] ? state[group].data : [],
          error: error,
          lastReceived: time
        }));
      } else {
        state = _objectSpread(_objectSpread({}, state), {}, defineProperty_default()({}, group, {
          data: state[group] && state[group].data ? [].concat(toConsumableArray_default()(state[group].data), toConsumableArray_default()(groupIds)) : groupIds,
          error: error,
          lastReceived: time,
          isRequesting: false,
          dirty: state[group] && state[group].dirty ? Object(external_lodash_["union"])(state[group].dirty, groupIds) : groupIds
        }), reducer_updateGroupDataInNewState(newState, {
          group: group,
          groupIds: groupIds,
          data: data,
          time: time,
          error: error
        }));
      }

      break;

    case action_types.CLEAR_SETTINGS:
      state = {};
  }

  return state;
};

/* harmony default export */ var settings_reducer = (reducer_receiveSettings);
// CONCATENATED MODULE: ./packages/data/build-module/settings/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






Object(external_wp_data_["registerStore"])(STORE_NAME, {
  reducer: settings_reducer,
  actions: actions_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  selectors: selectors_namespaceObject,
  resolvers: resolvers_namespaceObject
});
var SETTINGS_STORE_NAME = STORE_NAME;
// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(65);

// CONCATENATED MODULE: ./packages/data/build-module/settings/with-settings-hydration.js

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


var with_settings_hydration_withSettingsHydration = function withSettingsHydration(group, settings) {
  return Object(external_wp_compose_["createHigherOrderComponent"])(function (OriginalComponent) {
    return function (props) {
      var settingsRef = Object(external_wp_element_["useRef"])(settings);
      Object(external_wp_data_["useSelect"])(function (select, registry) {
        if (!settingsRef.current) {
          return;
        }

        var _select = select(STORE_NAME),
            isResolving = _select.isResolving,
            hasFinishedResolution = _select.hasFinishedResolution;

        var _registry$dispatch = registry.dispatch(STORE_NAME),
            startResolution = _registry$dispatch.startResolution,
            finishResolution = _registry$dispatch.finishResolution,
            updateSettingsForGroup = _registry$dispatch.updateSettingsForGroup,
            clearIsDirty = _registry$dispatch.clearIsDirty;

        if (!isResolving('getSettings', [group]) && !hasFinishedResolution('getSettings', [group])) {
          startResolution('getSettings', [group]);
          updateSettingsForGroup(group, settingsRef.current);
          clearIsDirty(group);
          finishResolution('getSettings', [group]);
        }
      }, []);
      return Object(external_wp_element_["createElement"])(OriginalComponent, props);
    };
  }, 'withSettingsHydration');
};
// CONCATENATED MODULE: ./packages/data/build-module/settings/use-settings.js










function use_settings_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function use_settings_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      use_settings_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      use_settings_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


var use_settings_useSettings = function useSettings(group) {
  var settingsKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select(STORE_NAME),
        getLastSettingsErrorForGroup = _select.getLastSettingsErrorForGroup,
        getSettingsForGroup = _select.getSettingsForGroup,
        getIsDirty = _select.getIsDirty,
        isUpdateSettingsRequesting = _select.isUpdateSettingsRequesting;

    return {
      requestedSettings: getSettingsForGroup(group, settingsKeys),
      settingsError: Boolean(getLastSettingsErrorForGroup(group)),
      isRequesting: isUpdateSettingsRequesting(group),
      isDirty: getIsDirty(group, settingsKeys)
    };
  }, [group].concat(toConsumableArray_default()(settingsKeys.sort()))),
      requestedSettings = _useSelect.requestedSettings,
      settingsError = _useSelect.settingsError,
      isRequesting = _useSelect.isRequesting,
      isDirty = _useSelect.isDirty;

  var _useDispatch = Object(external_wp_data_["useDispatch"])(STORE_NAME),
      persistSettingsForGroup = _useDispatch.persistSettingsForGroup,
      updateAndPersistSettingsForGroup = _useDispatch.updateAndPersistSettingsForGroup,
      updateSettingsForGroup = _useDispatch.updateSettingsForGroup;

  var updateSettings = Object(external_wp_element_["useCallback"])(function (name, data) {
    updateSettingsForGroup(group, defineProperty_default()({}, name, data));
  }, [group]);
  var persistSettings = Object(external_wp_element_["useCallback"])(function () {
    // this action would simply persist all settings marked as dirty in the
    // store state and then remove the dirty record in the isDirtyMap
    persistSettingsForGroup(group);
  }, [group]);
  var updateAndPersistSettings = Object(external_wp_element_["useCallback"])(function (name, data) {
    updateAndPersistSettingsForGroup(group, defineProperty_default()({}, name, data));
  }, [group]);
  return use_settings_objectSpread(use_settings_objectSpread({
    settingsError: settingsError,
    isRequesting: isRequesting,
    isDirty: isDirty
  }, requestedSettings), {}, {
    persistSettings: persistSettings,
    updateAndPersistSettings: updateAndPersistSettings,
    updateSettings: updateSettings
  });
};
// CONCATENATED MODULE: ./packages/data/build-module/plugins/constants.js
/**
 * External dependencies
 */

var constants_STORE_NAME = 'wc/admin/plugins';
var PAYPAL_NAMESPACE = '/wc-paypal/v1';
/**
 * Plugin slugs and names as key/value pairs.
 */

var pluginNames = {
  'facebook-for-woocommerce': Object(external_wp_i18n_["__"])('Facebook for WooCommerce', 'woocommerce-admin'),
  jetpack: Object(external_wp_i18n_["__"])('Jetpack', 'woocommerce-admin'),
  'klarna-checkout-for-woocommerce': Object(external_wp_i18n_["__"])('Klarna Checkout for WooCommerce', 'woocommerce-admin'),
  'klarna-payments-for-woocommerce': Object(external_wp_i18n_["__"])('Klarna Payments for WooCommerce', 'woocommerce-admin'),
  'mailchimp-for-woocommerce': Object(external_wp_i18n_["__"])('Mailchimp for WooCommerce', 'woocommerce-admin'),
  'creative-mail-by-constant-contact': Object(external_wp_i18n_["__"])('Creative Mail for WooCommerce', 'woocommerce-admin'),
  'woocommerce-gateway-paypal-express-checkout': Object(external_wp_i18n_["__"])('WooCommerce PayPal', 'woocommerce-admin'),
  'woocommerce-gateway-stripe': Object(external_wp_i18n_["__"])('WooCommerce Stripe', 'woocommerce-admin'),
  'woocommerce-payfast-gateway': Object(external_wp_i18n_["__"])('WooCommerce PayFast', 'woocommerce-admin'),
  'woocommerce-payments': Object(external_wp_i18n_["__"])('WooCommerce Payments', 'woocommerce-admin'),
  'woocommerce-services': Object(external_wp_i18n_["__"])('WooCommerce Shipping & Tax', 'woocommerce-admin'),
  'woocommerce-services:shipping': Object(external_wp_i18n_["__"])('WooCommerce Shipping & Tax', 'woocommerce-admin'),
  'woocommerce-services:tax': Object(external_wp_i18n_["__"])('WooCommerce Shipping & Tax', 'woocommerce-admin'),
  'woocommerce-shipstation-integration': Object(external_wp_i18n_["__"])('WooCommerce ShipStation Gateway', 'woocommerce-admin'),
  'woocommerce-mercadopago': Object(external_wp_i18n_["__"])('Mercado Pago payments for WooCommerce', 'woocommerce-admin'),
  'kliken-marketing-for-google': Object(external_wp_i18n_["__"])('Google Ads', 'woocommerce-admin'),
  'woo-razorpay': Object(external_wp_i18n_["__"])('Razorpay', 'woocommerce-admin'),
  mailpoet: Object(external_wp_i18n_["__"])('MailPoet', 'woocommerce-admin')
};
// CONCATENATED MODULE: ./packages/data/build-module/plugins/selectors.js


var getActivePlugins = function getActivePlugins(state) {
  return state.active || [];
};
var getInstalledPlugins = function getInstalledPlugins(state) {
  return state.installed || [];
};
var isPluginsRequesting = function isPluginsRequesting(state, selector) {
  return state.requesting[selector] || false;
};
var getPluginsError = function getPluginsError(state, selector) {
  return state.errors[selector] || false;
};
var isJetpackConnected = function isJetpackConnected(state) {
  return state.jetpackConnection;
};
var getJetpackConnectUrl = function getJetpackConnectUrl(state, query) {
  return state.jetpackConnectUrls[query.redirect_url];
};
var getPluginInstallState = function getPluginInstallState(state, plugin) {
  if (state.active.includes(plugin)) {
    return 'activated';
  } else if (state.installed.includes(plugin)) {
    return 'installed';
  }

  return 'unavailable';
};
var getPaypalOnboardingStatus = function getPaypalOnboardingStatus(state) {
  return state.paypalOnboardingStatus;
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(139);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(135);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(88);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.values.js
var es_object_values = __webpack_require__(285);

// CONCATENATED MODULE: ./packages/data/build-module/plugins/action-types.js
var action_types_TYPES = {
  UPDATE_ACTIVE_PLUGINS: 'UPDATE_ACTIVE_PLUGINS',
  UPDATE_INSTALLED_PLUGINS: 'UPDATE_INSTALLED_PLUGINS',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING',
  SET_ERROR: 'SET_ERROR',
  UPDATE_JETPACK_CONNECTION: 'UPDATE_JETPACK_CONNECTION',
  UPDATE_JETPACK_CONNECT_URL: 'UPDATE_JETPACK_CONNECT_URL',
  SET_PAYPAL_ONBOARDING_STATUS: 'SET_PAYPAL_ONBOARDING_STATUS'
};
/* harmony default export */ var plugins_action_types = (action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/plugins/actions.js









var actions_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(installPlugins),
    actions_marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(activatePlugins),
    _marked3 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(installAndActivatePlugins),
    _marked4 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(connectToJetpack),
    _marked5 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(installJetpackAndConnect),
    _marked6 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(connectToJetpackWithFailureRedirect);
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */




function actions_updateActivePlugins(active) {
  var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    type: plugins_action_types.UPDATE_ACTIVE_PLUGINS,
    active: active,
    replace: replace
  };
}
function actions_updateInstalledPlugins(installed) {
  var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    type: plugins_action_types.UPDATE_INSTALLED_PLUGINS,
    installed: installed,
    replace: replace
  };
}
function actions_setIsRequesting(selector, isRequesting) {
  return {
    type: plugins_action_types.SET_IS_REQUESTING,
    selector: selector,
    isRequesting: isRequesting
  };
}
function setError(selector, error) {
  return {
    type: plugins_action_types.SET_ERROR,
    selector: selector,
    error: error
  };
}
function actions_updateIsJetpackConnected(jetpackConnection) {
  return {
    type: plugins_action_types.UPDATE_JETPACK_CONNECTION,
    jetpackConnection: jetpackConnection
  };
}
function updateJetpackConnectUrl(redirectUrl, jetpackConnectUrl) {
  return {
    type: plugins_action_types.UPDATE_JETPACK_CONNECT_URL,
    jetpackConnectUrl: jetpackConnectUrl,
    redirectUrl: redirectUrl
  };
}
function installPlugins(plugins) {
  var results;
  return external_regeneratorRuntime_default.a.wrap(function installPlugins$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return actions_setIsRequesting('installPlugins', true);

        case 2:
          _context.prev = 2;
          _context.next = 5;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: "".concat(WC_ADMIN_NAMESPACE, "/plugins/install"),
            method: 'POST',
            data: {
              plugins: plugins.join(',')
            }
          });

        case 5:
          results = _context.sent;

          if (!results.data.installed.length) {
            _context.next = 9;
            break;
          }

          _context.next = 9;
          return actions_updateInstalledPlugins(results.data.installed);

        case 9:
          if (!Object.keys(results.errors.errors).length) {
            _context.next = 11;
            break;
          }

          throw results.errors.errors;

        case 11:
          _context.next = 13;
          return actions_setIsRequesting('installPlugins', false);

        case 13:
          return _context.abrupt("return", results);

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](2);
          _context.next = 20;
          return setError('installPlugins', _context.t0);

        case 20:
          throw new Error(actions_formatErrorMessage(_context.t0));

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, actions_marked, null, [[2, 16]]);
}
function activatePlugins(plugins) {
  var results;
  return external_regeneratorRuntime_default.a.wrap(function activatePlugins$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return actions_setIsRequesting('activatePlugins', true);

        case 2:
          _context2.prev = 2;
          _context2.next = 5;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: "".concat(WC_ADMIN_NAMESPACE, "/plugins/activate"),
            method: 'POST',
            data: {
              plugins: plugins.join(',')
            }
          });

        case 5:
          results = _context2.sent;

          if (!results.data.activated.length) {
            _context2.next = 9;
            break;
          }

          _context2.next = 9;
          return actions_updateActivePlugins(results.data.activated);

        case 9:
          if (!Object.keys(results.errors.errors).length) {
            _context2.next = 11;
            break;
          }

          throw results.errors.errors;

        case 11:
          _context2.next = 13;
          return actions_setIsRequesting('activatePlugins', false);

        case 13:
          return _context2.abrupt("return", results);

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](2);
          _context2.next = 20;
          return setError('activatePlugins', _context2.t0);

        case 20:
          throw new Error(formatErrors(_context2.t0));

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  }, actions_marked2, null, [[2, 16]]);
}
function installAndActivatePlugins(plugins) {
  var activations;
  return external_regeneratorRuntime_default.a.wrap(function installAndActivatePlugins$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(external_wp_dataControls_["dispatch"])(constants_STORE_NAME, 'installPlugins', plugins);

        case 3:
          _context3.next = 5;
          return Object(external_wp_dataControls_["dispatch"])(constants_STORE_NAME, 'activatePlugins', plugins);

        case 5:
          activations = _context3.sent;
          return _context3.abrupt("return", activations);

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          throw _context3.t0;

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 9]]);
}
var actions_createErrorNotice = function createErrorNotice(errorMessage) {
  return Object(external_wp_dataControls_["dispatch"])('core/notices', 'createNotice', errorMessage);
};
function connectToJetpack(getAdminLink) {
  var url, error;
  return external_regeneratorRuntime_default.a.wrap(function connectToJetpack$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(external_wp_dataControls_["select"])(constants_STORE_NAME, 'getJetpackConnectUrl', {
            redirect_url: getAdminLink('admin.php?page=wc-admin')
          });

        case 2:
          url = _context4.sent;
          _context4.next = 5;
          return Object(external_wp_dataControls_["select"])(constants_STORE_NAME, 'getPluginsError', 'getJetpackConnectUrl');

        case 5:
          error = _context4.sent;

          if (!error) {
            _context4.next = 10;
            break;
          }

          throw new Error(error);

        case 10:
          return _context4.abrupt("return", url);

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
function installJetpackAndConnect(errorAction, getAdminLink) {
  var url;
  return external_regeneratorRuntime_default.a.wrap(function installJetpackAndConnect$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(external_wp_dataControls_["dispatch"])(constants_STORE_NAME, 'installPlugins', ['jetpack']);

        case 3:
          _context5.next = 5;
          return Object(external_wp_dataControls_["dispatch"])(constants_STORE_NAME, 'activatePlugins', ['jetpack']);

        case 5:
          _context5.next = 7;
          return Object(external_wp_dataControls_["dispatch"])(constants_STORE_NAME, 'connectToJetpack', getAdminLink);

        case 7:
          url = _context5.sent;
          window.location = url;
          _context5.next = 15;
          break;

        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 15;
          return errorAction(_context5.t0.message);

        case 15:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 11]]);
}
function connectToJetpackWithFailureRedirect(failureRedirect, errorAction, getAdminLink) {
  var url;
  return external_regeneratorRuntime_default.a.wrap(function connectToJetpackWithFailureRedirect$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(external_wp_dataControls_["dispatch"])(constants_STORE_NAME, 'connectToJetpack', getAdminLink);

        case 3:
          url = _context6.sent;
          window.location = url;
          _context6.next = 12;
          break;

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          _context6.next = 11;
          return errorAction(_context6.t0.message);

        case 11:
          window.location = failureRedirect;

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 7]]);
}
function formatErrors(response) {
  if (response.errors) {
    // Replace the slug with a plugin name if a constant exists.
    Object.keys(response.errors).forEach(function (plugin) {
      response.errors[plugin] = response.errors[plugin].map(function (pluginError) {
        return pluginNames[plugin] ? pluginError.replace("`".concat(plugin, "`"), pluginNames[plugin]) : pluginError;
      });
    });
  }

  return response;
}
function setPaypalOnboardingStatus(status) {
  return {
    type: plugins_action_types.SET_PAYPAL_ONBOARDING_STATUS,
    paypalOnboardingStatus: status
  };
}

var actions_formatErrorMessage = function formatErrorMessage(pluginErrors) {
  var actionType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'install';
  return Object(external_wp_i18n_["sprintf"])(
  /* translators: %(actionType): install or activate (the plugin). %(pluginName): a plugin slug (e.g. woocommerce-services). %(error): a single error message or in plural a comma separated error message list.*/
  Object(external_wp_i18n_["_n"])('Could not %(actionType)s %(pluginName)s plugin, %(error)s', 'Could not %(actionType)s the following plugins: %(pluginName)s with these Errors: %(error)s', pluginErrors.length, 'woocommerce-admin'), {
    actionType: actionType,
    pluginName: Object.keys(pluginErrors).join(', '),
    error: Object.values(pluginErrors).join(', \n')
  });
};
// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__(78);

// CONCATENATED MODULE: ./packages/data/build-module/options/constants.js
var options_constants_STORE_NAME = 'wc/admin/options';
// CONCATENATED MODULE: ./packages/data/build-module/options/selectors.js
/**
 * Get option from state tree.
 *
 * @param {Object} state - Reducer state
 * @param {Array} name - Option name
 */
var getOption = function getOption(state, name) {
  return state[name];
};
/**
 * Determine if an options request resulted in an error.
 *
 * @param {Object} state - Reducer state
 * @param {string} name - Option name
 */

var getOptionsRequestingError = function getOptionsRequestingError(state, name) {
  return state.requestingErrors[name] || false;
};
/**
 * Determine if options are being updated.
 *
 * @param {Object} state - Reducer state
 */

var isOptionsUpdating = function isOptionsUpdating(state) {
  return state.isUpdating || false;
};
/**
 * Determine if an options update resulted in an error.
 *
 * @param {Object} state - Reducer state
 */

var getOptionsUpdatingError = function getOptionsUpdatingError(state) {
  return state.updatingError || false;
};
// CONCATENATED MODULE: ./packages/data/build-module/options/action-types.js
var options_action_types_TYPES = {
  RECEIVE_OPTIONS: 'RECEIVE_OPTIONS',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING',
  SET_IS_UPDATING: 'SET_IS_UPDATING',
  SET_REQUESTING_ERROR: 'SET_REQUESTING_ERROR',
  SET_UPDATING_ERROR: 'SET_UPDATING_ERROR'
};
/* harmony default export */ var options_action_types = (options_action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/options/actions.js









var options_actions_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(updateOptions);

function actions_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function actions_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      actions_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      actions_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



function actions_receiveOptions(options) {
  return {
    type: options_action_types.RECEIVE_OPTIONS,
    options: options
  };
}
function setRequestingError(error, name) {
  return {
    type: options_action_types.SET_REQUESTING_ERROR,
    error: error,
    name: name
  };
}
function setUpdatingError(error) {
  return {
    type: options_action_types.SET_UPDATING_ERROR,
    error: error
  };
}
function setIsUpdating(isUpdating) {
  return {
    type: options_action_types.SET_IS_UPDATING,
    isUpdating: isUpdating
  };
}
function updateOptions(data) {
  var results;
  return external_regeneratorRuntime_default.a.wrap(function updateOptions$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return setIsUpdating(true);

        case 2:
          _context.next = 4;
          return actions_receiveOptions(data);

        case 4:
          _context.prev = 4;
          _context.next = 7;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: WC_ADMIN_NAMESPACE + '/options',
            method: 'POST',
            data: data
          });

        case 7:
          results = _context.sent;
          _context.next = 10;
          return setIsUpdating(false);

        case 10:
          return _context.abrupt("return", actions_objectSpread({
            success: true
          }, results));

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](4);
          _context.next = 17;
          return setUpdatingError(_context.t0);

        case 17:
          return _context.abrupt("return", actions_objectSpread({
            success: false
          }, _context.t0));

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, options_actions_marked, null, [[4, 13]]);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(164);

// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__(95);
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// CONCATENATED MODULE: ./packages/data/build-module/options/controls.js











function controls_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function controls_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      controls_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      controls_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


var optionNames = [];
var fetches = {};
var batchFetch = function batchFetch(optionName) {
  return {
    type: 'BATCH_FETCH',
    optionName: optionName
  };
};
var controls = controls_objectSpread(controls_objectSpread({}, external_wp_dataControls_["controls"]), {}, {
  BATCH_FETCH: function BATCH_FETCH(_ref) {
    var optionName = _ref.optionName;
    optionNames.push(optionName);
    return new Promise(function (resolve) {
      setTimeout(function () {
        var names = optionNames.join(',');

        if (fetches[names]) {
          return fetches[names].then(function (result) {
            resolve(result[optionName]);
          });
        }

        var url = WC_ADMIN_NAMESPACE + '/options?options=' + names;
        fetches[names] = external_wp_apiFetch_default()({
          path: url
        });
        fetches[names].then(function (result) {
          return resolve(result);
        }); // Clear option names after all resolved;

        setTimeout(function () {
          optionNames = []; // Delete the fetch after to allow wp data to handle cache invalidation.

          delete fetches[names];
        }, 1);
      }, 1);
    });
  }
});
// CONCATENATED MODULE: ./packages/data/build-module/options/resolvers.js


var options_resolvers_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getOption);
/**
 * Internal dependencies
 */




/**
 * Request an option value.
 *
 * @param {string} name - Option name
 */

function resolvers_getOption(name) {
  var result;
  return external_regeneratorRuntime_default.a.wrap(function getOption$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return batchFetch(name);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return actions_receiveOptions(result);

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _context.next = 12;
          return setRequestingError(_context.t0, name);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, options_resolvers_marked, null, [[0, 8]]);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(129);

// CONCATENATED MODULE: ./packages/data/build-module/options/reducer.js









function reducer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function reducer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      reducer_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      reducer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * Internal dependencies
 */




var reducer_optionsReducer = function optionsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isUpdating: false,
    requestingErrors: {}
  };

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      options = _ref.options,
      error = _ref.error,
      isUpdating = _ref.isUpdating,
      name = _ref.name;

  switch (type) {
    case options_action_types.RECEIVE_OPTIONS:
      state = reducer_objectSpread(reducer_objectSpread({}, state), options);
      break;

    case options_action_types.SET_IS_UPDATING:
      state = reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        isUpdating: isUpdating
      });
      break;

    case options_action_types.SET_REQUESTING_ERROR:
      state = reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        requestingErrors: defineProperty_default()({}, name, error)
      });
      break;

    case options_action_types.SET_UPDATING_ERROR:
      state = reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        error: error,
        updatingError: error,
        isUpdating: false
      });
      break;
  }

  return state;
};

/* harmony default export */ var options_reducer = (reducer_optionsReducer);
// CONCATENATED MODULE: ./packages/data/build-module/options/index.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */







Object(external_wp_data_["registerStore"])(options_constants_STORE_NAME, {
  reducer: options_reducer,
  actions: options_actions_namespaceObject,
  controls: controls,
  selectors: options_selectors_namespaceObject,
  resolvers: options_resolvers_namespaceObject
});
var OPTIONS_STORE_NAME = options_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/plugins/resolvers.js


var plugins_resolvers_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getActivePlugins),
    plugins_resolvers_marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getInstalledPlugins),
    resolvers_marked3 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_isJetpackConnected),
    resolvers_marked4 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getJetpackConnectUrl),
    resolvers_marked5 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getPaypalOnboardingStatus),
    resolvers_marked6 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(setOnboardingStatusWithOptions);
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */





function resolvers_getActivePlugins() {
  var url, results;
  return external_regeneratorRuntime_default.a.wrap(function getActivePlugins$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return actions_setIsRequesting('getActivePlugins', true);

        case 2:
          _context.prev = 2;
          url = WC_ADMIN_NAMESPACE + '/plugins/active';
          _context.next = 6;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'GET'
          });

        case 6:
          results = _context.sent;
          _context.next = 9;
          return actions_updateActivePlugins(results.plugins, true);

        case 9:
          _context.next = 15;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](2);
          _context.next = 15;
          return setError('getActivePlugins', _context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, plugins_resolvers_marked, null, [[2, 11]]);
}
function resolvers_getInstalledPlugins() {
  var url, results;
  return external_regeneratorRuntime_default.a.wrap(function getInstalledPlugins$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return actions_setIsRequesting('getInstalledPlugins', true);

        case 2:
          _context2.prev = 2;
          url = WC_ADMIN_NAMESPACE + '/plugins/installed';
          _context2.next = 6;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'GET'
          });

        case 6:
          results = _context2.sent;
          _context2.next = 9;
          return actions_updateInstalledPlugins(results, true);

        case 9:
          _context2.next = 15;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](2);
          _context2.next = 15;
          return setError('getInstalledPlugins', _context2.t0);

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, plugins_resolvers_marked2, null, [[2, 11]]);
}
function resolvers_isJetpackConnected() {
  var url, results;
  return external_regeneratorRuntime_default.a.wrap(function isJetpackConnected$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return actions_setIsRequesting('isJetpackConnected', true);

        case 2:
          _context3.prev = 2;
          url = JETPACK_NAMESPACE + '/connection';
          _context3.next = 6;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'GET'
          });

        case 6:
          results = _context3.sent;
          _context3.next = 9;
          return actions_updateIsJetpackConnected(results.isActive);

        case 9:
          _context3.next = 15;
          break;

        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](2);
          _context3.next = 15;
          return setError('isJetpackConnected', _context3.t0);

        case 15:
          _context3.next = 17;
          return actions_setIsRequesting('isJetpackConnected', false);

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, resolvers_marked3, null, [[2, 11]]);
}
function resolvers_getJetpackConnectUrl(query) {
  var url, results;
  return external_regeneratorRuntime_default.a.wrap(function getJetpackConnectUrl$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return actions_setIsRequesting('getJetpackConnectUrl', true);

        case 2:
          _context4.prev = 2;
          url = Object(external_wp_url_["addQueryArgs"])(WC_ADMIN_NAMESPACE + '/plugins/connect-jetpack', query);
          _context4.next = 6;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'GET'
          });

        case 6:
          results = _context4.sent;
          _context4.next = 9;
          return updateJetpackConnectUrl(query.redirect_url, results.connectAction);

        case 9:
          _context4.next = 15;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](2);
          _context4.next = 15;
          return setError('getJetpackConnectUrl', _context4.t0);

        case 15:
          _context4.next = 17;
          return actions_setIsRequesting('getJetpackConnectUrl', false);

        case 17:
        case "end":
          return _context4.stop();
      }
    }
  }, resolvers_marked4, null, [[2, 11]]);
}
function resolvers_getPaypalOnboardingStatus() {
  var errorData, url, results;
  return external_regeneratorRuntime_default.a.wrap(function getPaypalOnboardingStatus$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return actions_setIsRequesting('getPaypalOnboardingStatus', true);

        case 2:
          _context5.next = 4;
          return Object(external_wp_dataControls_["select"])(constants_STORE_NAME, 'getPluginsError', 'getPaypalOnboardingStatus');

        case 4:
          errorData = _context5.sent;

          if (!(errorData && errorData.data && errorData.data.status === 404)) {
            _context5.next = 10;
            break;
          }

          _context5.next = 8;
          return setOnboardingStatusWithOptions();

        case 8:
          _context5.next = 25;
          break;

        case 10:
          _context5.prev = 10;
          url = PAYPAL_NAMESPACE + '/onboarding/get-status';
          _context5.next = 14;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'GET'
          });

        case 14:
          results = _context5.sent;
          _context5.next = 17;
          return setPaypalOnboardingStatus(results);

        case 17:
          _context5.next = 25;
          break;

        case 19:
          _context5.prev = 19;
          _context5.t0 = _context5["catch"](10);
          _context5.next = 23;
          return setOnboardingStatusWithOptions();

        case 23:
          _context5.next = 25;
          return setError('getPaypalOnboardingStatus', _context5.t0);

        case 25:
          _context5.next = 27;
          return actions_setIsRequesting('getPaypalOnboardingStatus', false);

        case 27:
        case "end":
          return _context5.stop();
      }
    }
  }, resolvers_marked5, null, [[10, 19]]);
}

function setOnboardingStatusWithOptions() {
  var options;
  return external_regeneratorRuntime_default.a.wrap(function setOnboardingStatusWithOptions$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(external_wp_dataControls_["select"])(OPTIONS_STORE_NAME, 'getOption', 'woocommerce-ppcp-settings');

        case 2:
          options = _context6.sent;
          _context6.next = 5;
          return setPaypalOnboardingStatus({
            production: {
              onboarded: options.merchant_email_production && options.merchant_id_production && options.client_id_production && options.client_secret_production ? true : false
            }
          });

        case 5:
        case "end":
          return _context6.stop();
      }
    }
  }, resolvers_marked6);
}
// CONCATENATED MODULE: ./packages/data/build-module/plugins/reducer.js










function plugins_reducer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function plugins_reducer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      plugins_reducer_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      plugins_reducer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



var reducer_plugins = function plugins() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    active: [],
    installed: [],
    requesting: {},
    errors: {},
    jetpackConnectUrls: {}
  };

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      active = _ref.active,
      installed = _ref.installed,
      selector = _ref.selector,
      isRequesting = _ref.isRequesting,
      error = _ref.error,
      jetpackConnection = _ref.jetpackConnection,
      redirectUrl = _ref.redirectUrl,
      jetpackConnectUrl = _ref.jetpackConnectUrl,
      paypalOnboardingStatus = _ref.paypalOnboardingStatus,
      replace = _ref.replace;

  switch (type) {
    case plugins_action_types.UPDATE_ACTIVE_PLUGINS:
      state = plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state), {}, {
        active: replace ? active : Object(external_lodash_["concat"])(state.active, active),
        requesting: plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state.requesting), {}, {
          getActivePlugins: false,
          activatePlugins: false
        }),
        errors: plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state.errors), {}, {
          getActivePlugins: false,
          activatePlugins: false
        })
      });
      break;

    case plugins_action_types.UPDATE_INSTALLED_PLUGINS:
      state = plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state), {}, {
        installed: replace ? installed : Object(external_lodash_["concat"])(state.installed, installed),
        requesting: plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state.requesting), {}, {
          getInstalledPlugins: false,
          installPlugin: false
        }),
        errors: plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state.errors), {}, {
          getInstalledPlugins: false,
          installPlugin: false
        })
      });
      break;

    case plugins_action_types.SET_IS_REQUESTING:
      state = plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state), {}, {
        requesting: plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state.requesting), {}, defineProperty_default()({}, selector, isRequesting))
      });
      break;

    case plugins_action_types.SET_ERROR:
      state = plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state), {}, {
        requesting: plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state.requesting), {}, defineProperty_default()({}, selector, false)),
        errors: plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state.errors), {}, defineProperty_default()({}, selector, error))
      });
      break;

    case plugins_action_types.UPDATE_JETPACK_CONNECTION:
      state = plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state), {}, {
        jetpackConnection: jetpackConnection
      });
      break;

    case plugins_action_types.UPDATE_JETPACK_CONNECT_URL:
      state = plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state), {}, {
        jetpackConnectUrls: plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state.jetpackConnectUrl), {}, defineProperty_default()({}, redirectUrl, jetpackConnectUrl))
      });
      break;

    case plugins_action_types.SET_PAYPAL_ONBOARDING_STATUS:
      state = plugins_reducer_objectSpread(plugins_reducer_objectSpread({}, state), {}, {
        paypalOnboardingStatus: paypalOnboardingStatus
      });
      break;
  }

  return state;
};

/* harmony default export */ var plugins_reducer = (reducer_plugins);
// CONCATENATED MODULE: ./packages/data/build-module/plugins/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






Object(external_wp_data_["registerStore"])(constants_STORE_NAME, {
  reducer: plugins_reducer,
  actions: plugins_actions_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  selectors: plugins_selectors_namespaceObject,
  resolvers: plugins_resolvers_namespaceObject
});
var PLUGINS_STORE_NAME = constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/plugins/with-plugins-hydration.js

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


var with_plugins_hydration_withPluginsHydration = function withPluginsHydration(data) {
  return Object(external_wp_compose_["createHigherOrderComponent"])(function (OriginalComponent) {
    return function (props) {
      var dataRef = Object(external_wp_element_["useRef"])(data);
      Object(external_wp_data_["useSelect"])(function (select, registry) {
        if (!dataRef.current) {
          return;
        }

        var _select = select(constants_STORE_NAME),
            isResolving = _select.isResolving,
            hasFinishedResolution = _select.hasFinishedResolution;

        var _registry$dispatch = registry.dispatch(constants_STORE_NAME),
            startResolution = _registry$dispatch.startResolution,
            finishResolution = _registry$dispatch.finishResolution,
            updateActivePlugins = _registry$dispatch.updateActivePlugins,
            updateInstalledPlugins = _registry$dispatch.updateInstalledPlugins,
            updateIsJetpackConnected = _registry$dispatch.updateIsJetpackConnected;

        if (!isResolving('getActivePlugins', []) && !hasFinishedResolution('getActivePlugins', [])) {
          startResolution('getActivePlugins', []);
          startResolution('getInstalledPlugins', []);
          startResolution('isJetpackConnected', []);
          updateActivePlugins(dataRef.current.activePlugins, true);
          updateInstalledPlugins(dataRef.current.installedPlugins, true);
          updateIsJetpackConnected(dataRef.current.jetpackStatus && dataRef.current.jetpackStatus.isActive);
          finishResolution('getActivePlugins', []);
          finishResolution('getInstalledPlugins', []);
          finishResolution('isJetpackConnected', []);
        }
      }, []);
      return Object(external_wp_element_["createElement"])(OriginalComponent, props);
    };
  }, 'withPluginsHydration');
};
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/constants.js
/**
 * Internal dependencies
 */
var onboarding_constants_STORE_NAME = 'wc/admin/onboarding';
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/selectors.js
var getProfileItems = function getProfileItems(state) {
  return state.profileItems || {};
};
var getTasksStatus = function getTasksStatus(state) {
  return state.tasksStatus || {};
};
var getOnboardingError = function getOnboardingError(state, selector) {
  return state.errors[selector] || false;
};
var isOnboardingRequesting = function isOnboardingRequesting(state, selector) {
  return state.requesting[selector] || false;
};
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/action-types.js
var onboarding_action_types_TYPES = {
  SET_ERROR: 'SET_ERROR',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING',
  SET_PROFILE_ITEMS: 'SET_PROFILE_ITEMS',
  SET_TASKS_STATUS: 'SET_TASKS_STATUS'
};
/* harmony default export */ var onboarding_action_types = (onboarding_action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/actions.js


var onboarding_actions_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(updateProfileItems);
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



function actions_setError(selector, error) {
  return {
    type: onboarding_action_types.SET_ERROR,
    selector: selector,
    error: error
  };
}
function onboarding_actions_setIsRequesting(selector, isRequesting) {
  return {
    type: onboarding_action_types.SET_IS_REQUESTING,
    selector: selector,
    isRequesting: isRequesting
  };
}
function actions_setProfileItems(profileItems) {
  var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    type: onboarding_action_types.SET_PROFILE_ITEMS,
    profileItems: profileItems,
    replace: replace
  };
}
function actions_setTasksStatus(tasksStatus) {
  return {
    type: onboarding_action_types.SET_TASKS_STATUS,
    tasksStatus: tasksStatus
  };
}
function updateProfileItems(items) {
  var results;
  return external_regeneratorRuntime_default.a.wrap(function updateProfileItems$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return onboarding_actions_setIsRequesting('updateProfileItems', true);

        case 2:
          _context.prev = 2;
          _context.next = 5;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: "".concat(WC_ADMIN_NAMESPACE, "/onboarding/profile"),
            method: 'POST',
            data: items
          });

        case 5:
          results = _context.sent;

          if (!(results && results.status === 'success')) {
            _context.next = 12;
            break;
          }

          _context.next = 9;
          return actions_setProfileItems(items);

        case 9:
          _context.next = 11;
          return onboarding_actions_setIsRequesting('updateProfileItems', false);

        case 11:
          return _context.abrupt("return", results);

        case 12:
          throw new Error();

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](2);
          _context.next = 19;
          return actions_setError('updateProfileItems', _context.t0);

        case 19:
          _context.next = 21;
          return onboarding_actions_setIsRequesting('updateProfileItems', false);

        case 21:
          throw new Error();

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, onboarding_actions_marked, null, [[2, 15]]);
}
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/resolvers.js


var onboarding_resolvers_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getProfileItems),
    onboarding_resolvers_marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getTasksStatus);
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



function resolvers_getProfileItems() {
  var results;
  return external_regeneratorRuntime_default.a.wrap(function getProfileItems$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: WC_ADMIN_NAMESPACE + '/onboarding/profile',
            method: 'GET'
          });

        case 3:
          results = _context.sent;
          _context.next = 6;
          return actions_setProfileItems(results, true);

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _context.next = 12;
          return actions_setError('getProfileItems', _context.t0);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, onboarding_resolvers_marked, null, [[0, 8]]);
}
function resolvers_getTasksStatus() {
  var results;
  return external_regeneratorRuntime_default.a.wrap(function getTasksStatus$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: WC_ADMIN_NAMESPACE + '/onboarding/tasks/status',
            method: 'GET'
          });

        case 3:
          results = _context2.sent;
          _context2.next = 6;
          return actions_setTasksStatus(results, true);

        case 6:
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 12;
          return actions_setError('getTasksStatus', _context2.t0);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, onboarding_resolvers_marked2, null, [[0, 8]]);
}
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/reducer.js










function onboarding_reducer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function onboarding_reducer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      onboarding_reducer_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      onboarding_reducer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * Internal dependencies
 */




var reducer_onboarding = function onboarding() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    errors: {},
    profileItems: {},
    requesting: {},
    tasksStatus: {}
  };

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      profileItems = _ref.profileItems,
      replace = _ref.replace,
      error = _ref.error,
      isRequesting = _ref.isRequesting,
      selector = _ref.selector,
      tasksStatus = _ref.tasksStatus;

  switch (type) {
    case onboarding_action_types.SET_PROFILE_ITEMS:
      return onboarding_reducer_objectSpread(onboarding_reducer_objectSpread({}, state), {}, {
        profileItems: replace ? profileItems : onboarding_reducer_objectSpread(onboarding_reducer_objectSpread({}, state.profileItems), profileItems)
      });

    case onboarding_action_types.SET_TASKS_STATUS:
      return onboarding_reducer_objectSpread(onboarding_reducer_objectSpread({}, state), {}, {
        tasksStatus: onboarding_reducer_objectSpread(onboarding_reducer_objectSpread({}, state.tasksStatus), tasksStatus)
      });

    case onboarding_action_types.SET_ERROR:
      return onboarding_reducer_objectSpread(onboarding_reducer_objectSpread({}, state), {}, {
        errors: onboarding_reducer_objectSpread(onboarding_reducer_objectSpread({}, state.errors), {}, defineProperty_default()({}, selector, error))
      });

    case onboarding_action_types.SET_IS_REQUESTING:
      return onboarding_reducer_objectSpread(onboarding_reducer_objectSpread({}, state), {}, {
        requesting: onboarding_reducer_objectSpread(onboarding_reducer_objectSpread({}, state.requesting), {}, defineProperty_default()({}, selector, isRequesting))
      });

    default:
      return state;
  }
};

/* harmony default export */ var onboarding_reducer = (reducer_onboarding);
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






Object(external_wp_data_["registerStore"])(onboarding_constants_STORE_NAME, {
  reducer: onboarding_reducer,
  actions: onboarding_actions_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  selectors: onboarding_selectors_namespaceObject,
  resolvers: onboarding_resolvers_namespaceObject
});
var ONBOARDING_STORE_NAME = onboarding_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/with-onboarding-hydration.js

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


var with_onboarding_hydration_withOnboardingHydration = function withOnboardingHydration(data) {
  var hydratedProfileItems = false;
  var hydratedTasksStatus = false;
  return Object(external_wp_compose_["createHigherOrderComponent"])(function (OriginalComponent) {
    return function (props) {
      var onboardingRef = Object(external_wp_element_["useRef"])(data);
      Object(external_wp_data_["useSelect"])(function (select, registry) {
        if (!onboardingRef.current) {
          return;
        }

        var _select = select(onboarding_constants_STORE_NAME),
            isResolving = _select.isResolving,
            hasFinishedResolution = _select.hasFinishedResolution;

        var _registry$dispatch = registry.dispatch(onboarding_constants_STORE_NAME),
            startResolution = _registry$dispatch.startResolution,
            finishResolution = _registry$dispatch.finishResolution,
            setProfileItems = _registry$dispatch.setProfileItems,
            setTasksStatus = _registry$dispatch.setTasksStatus;

        var _onboardingRef$curren = onboardingRef.current,
            profileItems = _onboardingRef$curren.profileItems,
            tasksStatus = _onboardingRef$curren.tasksStatus;

        if (profileItems && !hydratedProfileItems && !isResolving('getProfileItems', []) && !hasFinishedResolution('getProfileItems', [])) {
          startResolution('getProfileItems', []);
          setProfileItems(profileItems, true);
          finishResolution('getProfileItems', []);
          hydratedProfileItems = true;
        }

        if (tasksStatus && !hydratedTasksStatus && !isResolving('getTasksStatus', []) && !hasFinishedResolution('getTasksStatus', [])) {
          startResolution('getTasksStatus', []);
          setTasksStatus(tasksStatus, true);
          finishResolution('getTasksStatus', []);
          hydratedTasksStatus = true;
        }
      }, []);
      return Object(external_wp_element_["createElement"])(OriginalComponent, props);
    };
  }, 'withOnboardingHydration');
};
// CONCATENATED MODULE: ./packages/data/build-module/user/constants.js
var user_constants_STORE_NAME = 'core';
// CONCATENATED MODULE: ./packages/data/build-module/user/index.js
/**
 * Internal dependencies
 */

var USER_STORE_NAME = user_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/user/with-current-user-hydration.js

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


/**
 * Higher-order component used to hydrate current user data.
 *
 * @param {Object} currentUser Current user object in the same format as the WP REST API returns.
 */

var with_current_user_hydration_withCurrentUserHydration = function withCurrentUserHydration(currentUser) {
  return Object(external_wp_compose_["createHigherOrderComponent"])(function (OriginalComponent) {
    return function (props) {
      var userRef = Object(external_wp_element_["useRef"])(currentUser); // Use currentUser to hydrate calls to @wordpress/core-data's getCurrentUser().

      Object(external_wp_data_["useSelect"])(function (select, registry) {
        if (!userRef.current) {
          return;
        }

        var _select = select(user_constants_STORE_NAME),
            isResolving = _select.isResolving,
            hasFinishedResolution = _select.hasFinishedResolution;

        var _registry$dispatch = registry.dispatch(user_constants_STORE_NAME),
            startResolution = _registry$dispatch.startResolution,
            finishResolution = _registry$dispatch.finishResolution,
            receiveCurrentUser = _registry$dispatch.receiveCurrentUser;

        if (!isResolving('getCurrentUser') && !hasFinishedResolution('getCurrentUser')) {
          startResolution('getCurrentUser', []);
          receiveCurrentUser(userRef.current);
          finishResolution('getCurrentUser', []);
        }
      });
      return Object(external_wp_element_["createElement"])(OriginalComponent, props);
    };
  }, 'withCurrentUserHydration');
};
// CONCATENATED MODULE: ./packages/data/build-module/user/use-user.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Custom react hook for shortcut methods around user.
 *
 * This is a wrapper around @wordpress/core-data's getCurrentUser().
 */

var use_user_useUser = function useUser() {
  var userData = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select(user_constants_STORE_NAME),
        getCurrentUser = _select.getCurrentUser,
        hasStartedResolution = _select.hasStartedResolution,
        hasFinishedResolution = _select.hasFinishedResolution;

    return {
      isRequesting: hasStartedResolution('getCurrentUser') && !hasFinishedResolution('getCurrentUser'),
      user: getCurrentUser(),
      getCurrentUser: getCurrentUser
    };
  });

  var currentUserCan = function currentUserCan(capability) {
    if (userData.user && userData.user && userData.user.capabilities[capability]) {
      return true;
    }

    return false;
  };

  return {
    currentUserCan: currentUserCan,
    user: userData.user,
    isRequesting: userData.isRequesting
  };
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(134);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// CONCATENATED MODULE: ./packages/data/build-module/user/use-user-preferences.js










function use_user_preferences_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function use_user_preferences_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      use_user_preferences_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      use_user_preferences_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


/**
 * Retrieve and decode the user's WooCommerce meta values.
 *
 * @param {Object} user WP User object.
 * @return {Object} User's WooCommerce preferences.
 */

var use_user_preferences_getWooCommerceMeta = function getWooCommerceMeta(user) {
  var wooMeta = user.woocommerce_meta || {};
  var userData = Object(external_lodash_["mapValues"])(wooMeta, function (data) {
    if (!data || data.length === 0) {
      return '';
    }

    return JSON.parse(data);
  });
  return userData;
}; // Create wrapper for updating user's `woocommerce_meta`.


function updateUserPrefs(_x, _x2, _x3, _x4, _x5) {
  return _updateUserPrefs.apply(this, arguments);
}
/**
 * Custom react hook for retrieving thecurrent user's WooCommerce preferences.
 *
 * This is a wrapper around @wordpress/core-data's getCurrentUser() and saveUser().
 */


function _updateUserPrefs() {
  _updateUserPrefs = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee2(receiveCurrentUser, user, saveUser, getLastEntitySaveError, userPrefs) {
    var userDataFields, metaData, updatedUser, error, updatedUserResponse;
    return external_regeneratorRuntime_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // @todo Handle unresolved getCurrentUser() here.
            // Whitelist our meta fields.
            userDataFields = ['categories_report_columns', 'coupons_report_columns', 'customers_report_columns', 'orders_report_columns', 'products_report_columns', 'revenue_report_columns', 'taxes_report_columns', 'variations_report_columns', 'dashboard_sections', 'dashboard_chart_type', 'dashboard_chart_interval', 'dashboard_leaderboard_rows', 'activity_panel_inbox_last_read', 'homepage_layout', 'homepage_stats', 'android_app_banner_dismissed', 'task_list_tracked_started_tasks', 'help_panel_highlight_shown']; // Prep valid fields for update.

            metaData = Object(external_lodash_["mapValues"])(Object(external_lodash_["pick"])(userPrefs, userDataFields), JSON.stringify);

            if (!(Object.keys(metaData).length === 0)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", {
              error: new Error('No valid woocommerce_meta keys were provided for update.'),
              updatedUser: undefined
            });

          case 4:
            // Optimistically propagate new woocommerce_meta to the store for instant update.
            receiveCurrentUser(use_user_preferences_objectSpread(use_user_preferences_objectSpread({}, user), {}, {
              woocommerce_meta: use_user_preferences_objectSpread(use_user_preferences_objectSpread({}, user.woocommerce_meta), metaData)
            })); // Use saveUser() to update WooCommerce meta values.

            _context2.next = 7;
            return saveUser({
              id: user.id,
              woocommerce_meta: metaData
            });

          case 7:
            updatedUser = _context2.sent;

            if (!(undefined === updatedUser)) {
              _context2.next = 11;
              break;
            } // Return the encountered error to the caller.


            error = getLastEntitySaveError('root', 'user', user.id);
            return _context2.abrupt("return", {
              error: error,
              updatedUser: updatedUser
            });

          case 11:
            // Decode the WooCommerce meta after save.
            updatedUserResponse = use_user_preferences_objectSpread(use_user_preferences_objectSpread({}, updatedUser), {}, {
              woocommerce_meta: use_user_preferences_getWooCommerceMeta(updatedUser)
            });
            return _context2.abrupt("return", {
              updatedUser: updatedUserResponse
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _updateUserPrefs.apply(this, arguments);
}

var use_user_preferences_useUserPreferences = function useUserPreferences() {
  // Get our dispatch methods now - this can't happen inside the callback below.
  var dispatch = Object(external_wp_data_["useDispatch"])(user_constants_STORE_NAME);
  var addEntities = dispatch.addEntities,
      receiveCurrentUser = dispatch.receiveCurrentUser,
      saveEntityRecord = dispatch.saveEntityRecord;
  var saveUser = dispatch.saveUser;
  var userData = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select(user_constants_STORE_NAME),
        getCurrentUser = _select.getCurrentUser,
        getEntity = _select.getEntity,
        getEntityRecord = _select.getEntityRecord,
        getLastEntitySaveError = _select.getLastEntitySaveError,
        hasStartedResolution = _select.hasStartedResolution,
        hasFinishedResolution = _select.hasFinishedResolution;

    return {
      isRequesting: hasStartedResolution('getCurrentUser') && !hasFinishedResolution('getCurrentUser'),
      user: getCurrentUser(),
      getCurrentUser: getCurrentUser,
      getEntity: getEntity,
      getEntityRecord: getEntityRecord,
      getLastEntitySaveError: getLastEntitySaveError
    };
  });

  var updateUserPreferences = function updateUserPreferences(userPrefs) {
    // WP 5.3.x doesn't have the User entity defined.
    if (typeof saveUser !== 'function') {
      // Polyfill saveUser() - wrapper of saveEntityRecord.
      saveUser = /*#__PURE__*/function () {
        var _ref = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee(userToSave) {
          var entityDefined;
          return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  entityDefined = Boolean(userData.getEntity('root', 'user'));

                  if (entityDefined) {
                    _context.next = 4;
                    break;
                  }

                  _context.next = 4;
                  return addEntities([{
                    name: 'user',
                    kind: 'root',
                    baseURL: '/wp/v2/users',
                    plural: 'users'
                  }]);

                case 4:
                  _context.next = 6;
                  return saveEntityRecord('root', 'user', userToSave);

                case 6:
                  return _context.abrupt("return", userData.getEntityRecord('root', 'user', userToSave.id));

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function saveUser(_x6) {
          return _ref.apply(this, arguments);
        };
      }();
    } // Get most recent user before update.


    var currentUser = userData.getCurrentUser();
    return updateUserPrefs(receiveCurrentUser, currentUser, saveUser, userData.getLastEntitySaveError, userPrefs);
  };

  var userPreferences = userData.user ? use_user_preferences_getWooCommerceMeta(userData.user) : {};
  return use_user_preferences_objectSpread(use_user_preferences_objectSpread({
    isRequesting: userData.isRequesting
  }, userPreferences), {}, {
    updateUserPreferences: updateUserPreferences
  });
};
// CONCATENATED MODULE: ./packages/data/build-module/options/with-options-hydration.js




/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


var with_options_hydration_withOptionsHydration = function withOptionsHydration(data) {
  return Object(external_wp_compose_["createHigherOrderComponent"])(function (OriginalComponent) {
    return function (props) {
      var dataRef = Object(external_wp_element_["useRef"])(data);
      Object(external_wp_data_["useSelect"])(function (select, registry) {
        if (!dataRef.current) {
          return;
        }

        var _select = select(options_constants_STORE_NAME),
            isResolving = _select.isResolving,
            hasFinishedResolution = _select.hasFinishedResolution;

        var _registry$dispatch = registry.dispatch(options_constants_STORE_NAME),
            startResolution = _registry$dispatch.startResolution,
            finishResolution = _registry$dispatch.finishResolution,
            receiveOptions = _registry$dispatch.receiveOptions;

        var names = Object.keys(dataRef.current);
        names.forEach(function (name) {
          if (!isResolving('getOption', [name]) && !hasFinishedResolution('getOption', [name])) {
            startResolution('getOption', [name]);
            receiveOptions(defineProperty_default()({}, name, dataRef.current[name]));
            finishResolution('getOption', [name]);
          }
        });
      }, []);
      return Object(external_wp_element_["createElement"])(OriginalComponent, props);
    };
  }, 'withOptionsHydration');
};
// CONCATENATED MODULE: ./packages/data/build-module/reviews/constants.js
var reviews_constants_STORE_NAME = 'wc/admin/reviews';
// CONCATENATED MODULE: ./packages/data/build-module/reviews/selectors.js

var getReviews = function getReviews(state, query) {
  var stringifiedQuery = JSON.stringify(query);
  var ids = state.reviews[stringifiedQuery] && state.reviews[stringifiedQuery].data || [];
  return ids.map(function (id) {
    return state.data[id];
  });
};
var getReviewsTotalCount = function getReviewsTotalCount(state, query) {
  var stringifiedQuery = JSON.stringify(query);
  return state.reviews[stringifiedQuery] && state.reviews[stringifiedQuery].totalCount;
};
var getReviewsError = function getReviewsError(state, query) {
  var stringifiedQuery = JSON.stringify(query);
  return state.errors[stringifiedQuery];
};
// CONCATENATED MODULE: ./packages/data/build-module/reviews/action-types.js
var reviews_action_types_TYPES = {
  UPDATE_REVIEWS: 'UPDATE_REVIEWS',
  SET_REVIEW: 'SET_REVIEW',
  SET_ERROR: 'SET_ERROR',
  SET_REVIEW_IS_UPDATING: 'SET_REVIEW_IS_UPDATING'
};
/* harmony default export */ var reviews_action_types = (reviews_action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/reviews/actions.js



var reviews_actions_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(updateReview),
    reviews_actions_marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(deleteReview);
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



function updateReviews(query, reviews, totalCount) {
  return {
    type: reviews_action_types.UPDATE_REVIEWS,
    reviews: reviews,
    query: query,
    totalCount: totalCount
  };
}
function updateReview(reviewId, reviewFields, query) {
  var url, review;
  return external_regeneratorRuntime_default.a.wrap(function updateReview$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return setReviewIsUpdating(reviewId, true);

        case 2:
          _context.prev = 2;
          url = Object(external_wp_url_["addQueryArgs"])("".concat(NAMESPACE, "/products/reviews/").concat(reviewId), query || {});
          _context.next = 6;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'PUT',
            data: reviewFields
          });

        case 6:
          review = _context.sent;
          _context.next = 9;
          return setReview(reviewId, review);

        case 9:
          _context.next = 11;
          return setReviewIsUpdating(reviewId, false);

        case 11:
          _context.next = 20;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](2);
          _context.next = 17;
          return reviews_actions_setError('updateReview', _context.t0);

        case 17:
          _context.next = 19;
          return setReviewIsUpdating(reviewId, false);

        case 19:
          throw new Error();

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, reviews_actions_marked, null, [[2, 13]]);
}
function deleteReview(reviewId) {
  var url, response;
  return external_regeneratorRuntime_default.a.wrap(function deleteReview$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return setReviewIsUpdating(reviewId, true);

        case 2:
          _context2.prev = 2;
          url = "".concat(NAMESPACE, "/products/reviews/").concat(reviewId);
          _context2.next = 6;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'DELETE'
          });

        case 6:
          response = _context2.sent;
          _context2.next = 9;
          return setReview(reviewId, response);

        case 9:
          _context2.next = 11;
          return setReviewIsUpdating(reviewId, false);

        case 11:
          return _context2.abrupt("return", response);

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](2);
          _context2.next = 18;
          return reviews_actions_setError('deleteReview', _context2.t0);

        case 18:
          _context2.next = 20;
          return setReviewIsUpdating(reviewId, false);

        case 20:
          throw new Error();

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  }, reviews_actions_marked2, null, [[2, 14]]);
}
function setReviewIsUpdating(reviewId, isUpdating) {
  return {
    type: reviews_action_types.SET_REVIEW_IS_UPDATING,
    reviewId: reviewId,
    isUpdating: isUpdating
  };
}
function setReview(reviewId, reviewData) {
  return {
    type: reviews_action_types.SET_REVIEW,
    reviewId: reviewId,
    reviewData: reviewData
  };
}
function reviews_actions_setError(query, error) {
  return {
    type: reviews_action_types.SET_ERROR,
    query: query,
    error: error
  };
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(43);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// CONCATENATED MODULE: ./packages/data/build-module/controls.js














function build_module_controls_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function build_module_controls_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      build_module_controls_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      build_module_controls_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * External dependencies
 */




var fetchWithHeaders = function fetchWithHeaders(options) {
  return {
    type: 'FETCH_WITH_HEADERS',
    options: options
  };
};

var controls_controls = build_module_controls_objectSpread(build_module_controls_objectSpread({}, external_wp_dataControls_["controls"]), {}, {
  FETCH_WITH_HEADERS: function FETCH_WITH_HEADERS(_ref) {
    var options = _ref.options;
    return external_wp_apiFetch_default()(build_module_controls_objectSpread(build_module_controls_objectSpread({}, options), {}, {
      parse: false
    })).then(function (response) {
      return Promise.all([response.headers, response.status, response.json()]);
    }).then(function (_ref2) {
      var _ref3 = slicedToArray_default()(_ref2, 3),
          headers = _ref3[0],
          status = _ref3[1],
          data = _ref3[2];

      return {
        headers: headers,
        status: status,
        data: data
      };
    });
  }
});

/* harmony default export */ var build_module_controls = (controls_controls);
// CONCATENATED MODULE: ./packages/data/build-module/reviews/resolvers.js


var reviews_resolvers_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getReviews),
    reviews_resolvers_marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getReviewsTotalCount);
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




function resolvers_getReviews(query) {
  var url, response, totalCount;
  return external_regeneratorRuntime_default.a.wrap(function getReviews$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          url = Object(external_wp_url_["addQueryArgs"])("".concat(NAMESPACE, "/products/reviews"), query);
          _context.next = 4;
          return fetchWithHeaders({
            path: url,
            method: 'GET'
          });

        case 4:
          response = _context.sent;
          totalCount = parseInt(response.headers.get('x-wp-total'), 10);
          _context.next = 8;
          return updateReviews(query, response.data, totalCount);

        case 8:
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          _context.next = 14;
          return reviews_actions_setError(query, _context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, reviews_resolvers_marked, null, [[0, 10]]);
}
function resolvers_getReviewsTotalCount(query) {
  return external_regeneratorRuntime_default.a.wrap(function getReviewsTotalCount$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return resolvers_getReviews(query);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, reviews_resolvers_marked2);
}
// CONCATENATED MODULE: ./packages/data/build-module/reviews/reducer.js








function reviews_reducer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function reviews_reducer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      reviews_reducer_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      reviews_reducer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * Internal dependencies
 */




var reducer_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    reviews: {},
    errors: {},
    data: {}
  };

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      query = _ref.query,
      reviews = _ref.reviews,
      reviewId = _ref.reviewId,
      reviewData = _ref.reviewData,
      totalCount = _ref.totalCount,
      error = _ref.error,
      isUpdating = _ref.isUpdating;

  switch (type) {
    case reviews_action_types.UPDATE_REVIEWS:
      var ids = [];
      var nextReviews = reviews.reduce(function (result, review) {
        ids.push(review.id);
        result[review.id] = reviews_reducer_objectSpread(reviews_reducer_objectSpread({}, state.data[review.id] || {}), review);
        return result;
      }, {});
      return reviews_reducer_objectSpread(reviews_reducer_objectSpread({}, state), {}, {
        reviews: reviews_reducer_objectSpread(reviews_reducer_objectSpread({}, state.reviews), {}, defineProperty_default()({}, JSON.stringify(query), {
          data: ids,
          totalCount: totalCount
        })),
        data: reviews_reducer_objectSpread(reviews_reducer_objectSpread({}, state.data), nextReviews)
      });

    case reviews_action_types.SET_REVIEW:
      return reviews_reducer_objectSpread(reviews_reducer_objectSpread({}, state), {}, {
        data: reviews_reducer_objectSpread(reviews_reducer_objectSpread({}, state.data), {}, defineProperty_default()({}, reviewId, reviewData))
      });

    case reviews_action_types.SET_ERROR:
      return reviews_reducer_objectSpread(reviews_reducer_objectSpread({}, state), {}, {
        errors: reviews_reducer_objectSpread(reviews_reducer_objectSpread({}, state.errors), {}, defineProperty_default()({}, JSON.stringify(query), error))
      });

    case reviews_action_types.SET_REVIEW_IS_UPDATING:
      return reviews_reducer_objectSpread(reviews_reducer_objectSpread({}, state), {}, {
        data: reviews_reducer_objectSpread(reviews_reducer_objectSpread({}, state.data), {}, defineProperty_default()({}, reviewId, reviews_reducer_objectSpread(reviews_reducer_objectSpread({}, state.data[reviewId]), {}, {
          isUpdating: isUpdating
        })))
      });

    default:
      return state;
  }
};

/* harmony default export */ var reviews_reducer = (reducer_reducer);
// CONCATENATED MODULE: ./packages/data/build-module/reviews/index.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */







Object(external_wp_data_["registerStore"])(reviews_constants_STORE_NAME, {
  reducer: reviews_reducer,
  actions: reviews_actions_namespaceObject,
  controls: build_module_controls,
  selectors: reviews_selectors_namespaceObject,
  resolvers: reviews_resolvers_namespaceObject
});
var REVIEWS_STORE_NAME = reviews_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/notes/constants.js
/**
 * Internal dependencies
 */
var notes_constants_STORE_NAME = 'wc/admin/notes';
// CONCATENATED MODULE: ./node_modules/rememo/es/rememo.js


var LEAF_KEY, hasWeakMap;

/**
 * Arbitrary value used as key for referencing cache object in WeakMap tree.
 *
 * @type {Object}
 */
LEAF_KEY = {};

/**
 * Whether environment supports WeakMap.
 *
 * @type {boolean}
 */
hasWeakMap = typeof WeakMap !== 'undefined';

/**
 * Returns the first argument as the sole entry in an array.
 *
 * @param {*} value Value to return.
 *
 * @return {Array} Value returned as entry in array.
 */
function arrayOf( value ) {
	return [ value ];
}

/**
 * Returns true if the value passed is object-like, or false otherwise. A value
 * is object-like if it can support property assignment, e.g. object or array.
 *
 * @param {*} value Value to test.
 *
 * @return {boolean} Whether value is object-like.
 */
function isObjectLike( value ) {
	return !! value && 'object' === typeof value;
}

/**
 * Creates and returns a new cache object.
 *
 * @return {Object} Cache object.
 */
function createCache() {
	var cache = {
		clear: function() {
			cache.head = null;
		},
	};

	return cache;
}

/**
 * Returns true if entries within the two arrays are strictly equal by
 * reference from a starting index.
 *
 * @param {Array}  a         First array.
 * @param {Array}  b         Second array.
 * @param {number} fromIndex Index from which to start comparison.
 *
 * @return {boolean} Whether arrays are shallowly equal.
 */
function isShallowEqual( a, b, fromIndex ) {
	var i;

	if ( a.length !== b.length ) {
		return false;
	}

	for ( i = fromIndex; i < a.length; i++ ) {
		if ( a[ i ] !== b[ i ] ) {
			return false;
		}
	}

	return true;
}

/**
 * Returns a memoized selector function. The getDependants function argument is
 * called before the memoized selector and is expected to return an immutable
 * reference or array of references on which the selector depends for computing
 * its own return value. The memoize cache is preserved only as long as those
 * dependant references remain the same. If getDependants returns a different
 * reference(s), the cache is cleared and the selector value regenerated.
 *
 * @param {Function} selector      Selector function.
 * @param {Function} getDependants Dependant getter returning an immutable
 *                                 reference or array of reference used in
 *                                 cache bust consideration.
 *
 * @return {Function} Memoized selector.
 */
/* harmony default export */ var rememo = (function( selector, getDependants ) {
	var rootCache, getCache;

	// Use object source as dependant if getter not provided
	if ( ! getDependants ) {
		getDependants = arrayOf;
	}

	/**
	 * Returns the root cache. If WeakMap is supported, this is assigned to the
	 * root WeakMap cache set, otherwise it is a shared instance of the default
	 * cache object.
	 *
	 * @return {(WeakMap|Object)} Root cache object.
	 */
	function getRootCache() {
		return rootCache;
	}

	/**
	 * Returns the cache for a given dependants array. When possible, a WeakMap
	 * will be used to create a unique cache for each set of dependants. This
	 * is feasible due to the nature of WeakMap in allowing garbage collection
	 * to occur on entries where the key object is no longer referenced. Since
	 * WeakMap requires the key to be an object, this is only possible when the
	 * dependant is object-like. The root cache is created as a hierarchy where
	 * each top-level key is the first entry in a dependants set, the value a
	 * WeakMap where each key is the next dependant, and so on. This continues
	 * so long as the dependants are object-like. If no dependants are object-
	 * like, then the cache is shared across all invocations.
	 *
	 * @see isObjectLike
	 *
	 * @param {Array} dependants Selector dependants.
	 *
	 * @return {Object} Cache object.
	 */
	function getWeakMapCache( dependants ) {
		var caches = rootCache,
			isUniqueByDependants = true,
			i, dependant, map, cache;

		for ( i = 0; i < dependants.length; i++ ) {
			dependant = dependants[ i ];

			// Can only compose WeakMap from object-like key.
			if ( ! isObjectLike( dependant ) ) {
				isUniqueByDependants = false;
				break;
			}

			// Does current segment of cache already have a WeakMap?
			if ( caches.has( dependant ) ) {
				// Traverse into nested WeakMap.
				caches = caches.get( dependant );
			} else {
				// Create, set, and traverse into a new one.
				map = new WeakMap();
				caches.set( dependant, map );
				caches = map;
			}
		}

		// We use an arbitrary (but consistent) object as key for the last item
		// in the WeakMap to serve as our running cache.
		if ( ! caches.has( LEAF_KEY ) ) {
			cache = createCache();
			cache.isUniqueByDependants = isUniqueByDependants;
			caches.set( LEAF_KEY, cache );
		}

		return caches.get( LEAF_KEY );
	}

	// Assign cache handler by availability of WeakMap
	getCache = hasWeakMap ? getWeakMapCache : getRootCache;

	/**
	 * Resets root memoization cache.
	 */
	function clear() {
		rootCache = hasWeakMap ? new WeakMap() : createCache();
	}

	// eslint-disable-next-line jsdoc/check-param-names
	/**
	 * The augmented selector call, considering first whether dependants have
	 * changed before passing it to underlying memoize function.
	 *
	 * @param {Object} source    Source object for derivation.
	 * @param {...*}   extraArgs Additional arguments to pass to selector.
	 *
	 * @return {*} Selector result.
	 */
	function callSelector( /* source, ...extraArgs */ ) {
		var len = arguments.length,
			cache, node, i, args, dependants;

		// Create copy of arguments (avoid leaking deoptimization).
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		dependants = getDependants.apply( null, args );
		cache = getCache( dependants );

		// If not guaranteed uniqueness by dependants (primitive type or lack
		// of WeakMap support), shallow compare against last dependants and, if
		// references have changed, destroy cache to recalculate result.
		if ( ! cache.isUniqueByDependants ) {
			if ( cache.lastDependants && ! isShallowEqual( dependants, cache.lastDependants, 0 ) ) {
				cache.clear();
			}

			cache.lastDependants = dependants;
		}

		node = cache.head;
		while ( node ) {
			// Check whether node arguments match arguments
			if ( ! isShallowEqual( node.args, args, 1 ) ) {
				node = node.next;
				continue;
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== cache.head ) {
				// Adjust siblings to point to each other.
				node.prev.next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = cache.head;
				node.prev = null;
				cache.head.prev = node;
				cache.head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		node = {
			// Generate the result from original function
			val: selector.apply( null, args ),
		};

		// Avoid including the source object in the cache.
		args[ 0 ] = null;
		node.args = args;

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( cache.head ) {
			cache.head.prev = node;
			node.next = cache.head;
		}

		cache.head = node;

		return node.val;
	}

	callSelector.getDependants = getDependants;
	callSelector.clear = clear;
	clear();

	return callSelector;
});

// CONCATENATED MODULE: ./packages/data/build-module/notes/selectors.js


/**
 * External dependencies
 */

var getNotes = rememo(function (state, query) {
  var noteIds = state.noteQueries[JSON.stringify(query)] || [];
  return noteIds.map(function (id) {
    return state.notes[id];
  });
}, function (state, query) {
  return [state.noteQueries[JSON.stringify(query)], state.notes];
});
var getNotesError = function getNotesError(state, selector) {
  return state.errors[selector] || false;
};
var isNotesRequesting = function isNotesRequesting(state, selector) {
  return state.requesting[selector] || false;
};
// CONCATENATED MODULE: ./packages/data/build-module/notes/action-types.js
var notes_action_types_TYPES = {
  SET_ERROR: 'SET_ERROR',
  SET_NOTE: 'SET_NOTE',
  SET_NOTE_IS_UPDATING: 'SET_NOTE_IS_UPDATING',
  SET_NOTES: 'SET_NOTES',
  SET_NOTES_QUERY: 'SET_NOTES_QUERY',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING'
};
/* harmony default export */ var notes_action_types = (notes_action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/notes/actions.js










function notes_actions_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function notes_actions_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      notes_actions_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      notes_actions_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var notes_actions_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(triggerNoteAction),
    notes_actions_marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(removeNote),
    actions_marked3 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(removeAllNotes),
    actions_marked4 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(batchUpdateNotes),
    actions_marked5 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(updateNote);
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



function triggerNoteAction(noteId, actionId) {
  var url, result;
  return external_regeneratorRuntime_default.a.wrap(function triggerNoteAction$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return notes_actions_setIsRequesting('triggerNoteAction', true);

        case 2:
          url = "".concat(NAMESPACE, "/admin/notes/").concat(noteId, "/action/").concat(actionId);
          _context.prev = 3;
          _context.next = 6;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'POST'
          });

        case 6:
          result = _context.sent;
          _context.next = 9;
          return updateNote(noteId, result);

        case 9:
          _context.next = 11;
          return notes_actions_setIsRequesting('triggerNoteAction', false);

        case 11:
          _context.next = 20;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](3);
          _context.next = 17;
          return notes_actions_setError('triggerNoteAction', _context.t0);

        case 17:
          _context.next = 19;
          return notes_actions_setIsRequesting('triggerNoteAction', false);

        case 19:
          throw new Error();

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, notes_actions_marked, null, [[3, 13]]);
}
function removeNote(noteId) {
  var url, response;
  return external_regeneratorRuntime_default.a.wrap(function removeNote$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return notes_actions_setIsRequesting('removeNote', true);

        case 2:
          _context2.next = 4;
          return setNoteIsUpdating(noteId, true);

        case 4:
          _context2.prev = 4;
          url = "".concat(NAMESPACE, "/admin/notes/delete/").concat(noteId);
          _context2.next = 8;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'DELETE'
          });

        case 8:
          response = _context2.sent;
          _context2.next = 11;
          return setNote(noteId, response);

        case 11:
          _context2.next = 13;
          return notes_actions_setIsRequesting('removeNote', false);

        case 13:
          return _context2.abrupt("return", response);

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](4);
          _context2.next = 20;
          return notes_actions_setError('removeNote', _context2.t0);

        case 20:
          _context2.next = 22;
          return notes_actions_setIsRequesting('removeNote', false);

        case 22:
          _context2.next = 24;
          return setNoteIsUpdating(noteId, false);

        case 24:
          throw new Error();

        case 25:
        case "end":
          return _context2.stop();
      }
    }
  }, notes_actions_marked2, null, [[4, 16]]);
}
function removeAllNotes() {
  var url, notes;
  return external_regeneratorRuntime_default.a.wrap(function removeAllNotes$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return notes_actions_setIsRequesting('removeAllNotes', true);

        case 2:
          _context3.prev = 2;
          url = "".concat(NAMESPACE, "/admin/notes/delete/all");
          _context3.next = 6;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'DELETE'
          });

        case 6:
          notes = _context3.sent;
          _context3.next = 9;
          return setNotes(notes);

        case 9:
          _context3.next = 11;
          return notes_actions_setIsRequesting('removeAllNotes', false);

        case 11:
          return _context3.abrupt("return", notes);

        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](2);
          _context3.next = 18;
          return notes_actions_setError('removeAllNotes', _context3.t0);

        case 18:
          _context3.next = 20;
          return notes_actions_setIsRequesting('removeAllNotes', false);

        case 20:
          throw new Error();

        case 21:
        case "end":
          return _context3.stop();
      }
    }
  }, actions_marked3, null, [[2, 14]]);
}
function batchUpdateNotes(noteIds, noteFields) {
  var url, notes;
  return external_regeneratorRuntime_default.a.wrap(function batchUpdateNotes$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return notes_actions_setIsRequesting('batchUpdateNotes', true);

        case 2:
          _context4.prev = 2;
          url = "".concat(NAMESPACE, "/admin/notes/update");
          _context4.next = 6;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'PUT',
            data: notes_actions_objectSpread({
              noteIds: noteIds
            }, noteFields)
          });

        case 6:
          notes = _context4.sent;
          _context4.next = 9;
          return setNotes(notes);

        case 9:
          _context4.next = 11;
          return notes_actions_setIsRequesting('batchUpdateNotes', false);

        case 11:
          _context4.next = 20;
          break;

        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](2);
          _context4.next = 17;
          return notes_actions_setError('updateNote', _context4.t0);

        case 17:
          _context4.next = 19;
          return notes_actions_setIsRequesting('batchUpdateNotes', false);

        case 19:
          throw new Error();

        case 20:
        case "end":
          return _context4.stop();
      }
    }
  }, actions_marked4, null, [[2, 13]]);
}
function updateNote(noteId, noteFields) {
  var url, note;
  return external_regeneratorRuntime_default.a.wrap(function updateNote$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return notes_actions_setIsRequesting('updateNote', true);

        case 2:
          _context5.next = 4;
          return setNoteIsUpdating(noteId, true);

        case 4:
          _context5.prev = 4;
          url = "".concat(NAMESPACE, "/admin/notes/").concat(noteId);
          _context5.next = 8;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'PUT',
            data: noteFields
          });

        case 8:
          note = _context5.sent;
          _context5.next = 11;
          return setNote(noteId, note);

        case 11:
          _context5.next = 13;
          return notes_actions_setIsRequesting('updateNote', false);

        case 13:
          _context5.next = 15;
          return setNoteIsUpdating(noteId, false);

        case 15:
          _context5.next = 26;
          break;

        case 17:
          _context5.prev = 17;
          _context5.t0 = _context5["catch"](4);
          _context5.next = 21;
          return notes_actions_setError('updateNote', _context5.t0);

        case 21:
          _context5.next = 23;
          return notes_actions_setIsRequesting('updateNote', false);

        case 23:
          _context5.next = 25;
          return setNoteIsUpdating(noteId, false);

        case 25:
          throw new Error();

        case 26:
        case "end":
          return _context5.stop();
      }
    }
  }, actions_marked5, null, [[4, 17]]);
}
function setNote(noteId, noteFields) {
  return {
    type: notes_action_types.SET_NOTE,
    noteId: noteId,
    noteFields: noteFields
  };
}
function setNoteIsUpdating(noteId, isUpdating) {
  return {
    type: notes_action_types.SET_NOTE_IS_UPDATING,
    noteId: noteId,
    isUpdating: isUpdating
  };
}
function setNotes(notes) {
  return {
    type: notes_action_types.SET_NOTES,
    notes: notes
  };
}
function setNotesQuery(query, noteIds) {
  return {
    type: notes_action_types.SET_NOTES_QUERY,
    query: query,
    noteIds: noteIds
  };
}
function notes_actions_setError(selector, error) {
  return {
    type: notes_action_types.SET_ERROR,
    error: error,
    selector: selector
  };
}
function notes_actions_setIsRequesting(selector, isRequesting) {
  return {
    type: notes_action_types.SET_IS_REQUESTING,
    selector: selector,
    isRequesting: isRequesting
  };
}
// CONCATENATED MODULE: ./packages/data/build-module/notes/resolvers.js



var notes_resolvers_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getNotes);
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



function resolvers_getNotes() {
  var query,
      url,
      notes,
      _args = arguments;
  return external_regeneratorRuntime_default.a.wrap(function getNotes$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
          url = Object(external_wp_url_["addQueryArgs"])("".concat(NAMESPACE, "/admin/notes"), query);
          _context.prev = 2;
          _context.next = 5;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url
          });

        case 5:
          notes = _context.sent;
          _context.next = 8;
          return setNotes(notes);

        case 8:
          _context.next = 10;
          return setNotesQuery(query, notes.map(function (note) {
            return note.id;
          }));

        case 10:
          _context.next = 16;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](2);
          _context.next = 16;
          return notes_actions_setError('getNotes', _context.t0);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, notes_resolvers_marked, null, [[2, 12]]);
}
// CONCATENATED MODULE: ./packages/data/build-module/notes/reducer.js








function notes_reducer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function notes_reducer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      notes_reducer_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      notes_reducer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * Internal dependencies
 */




var reducer_notesReducer = function notesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    errors: {},
    noteQueries: {},
    notes: {},
    requesting: {}
  };

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      error = _ref.error,
      isRequesting = _ref.isRequesting,
      isUpdating = _ref.isUpdating,
      noteFields = _ref.noteFields,
      noteId = _ref.noteId,
      noteIds = _ref.noteIds,
      notes = _ref.notes,
      query = _ref.query,
      selector = _ref.selector,
      type = _ref.type;

  switch (type) {
    case notes_action_types.SET_NOTES:
      state = notes_reducer_objectSpread(notes_reducer_objectSpread({}, state), {}, {
        notes: notes_reducer_objectSpread(notes_reducer_objectSpread({}, state.notes), notes.reduce(function (acc, item) {
          acc[item.id] = item;
          return acc;
        }, {}))
      });
      break;

    case notes_action_types.SET_NOTES_QUERY:
      state = notes_reducer_objectSpread(notes_reducer_objectSpread({}, state), {}, {
        noteQueries: notes_reducer_objectSpread(notes_reducer_objectSpread({}, state.noteQueries), {}, defineProperty_default()({}, JSON.stringify(query), noteIds))
      });
      break;

    case notes_action_types.SET_ERROR:
      state = notes_reducer_objectSpread(notes_reducer_objectSpread({}, state), {}, {
        errors: notes_reducer_objectSpread(notes_reducer_objectSpread({}, state.errors), {}, defineProperty_default()({}, selector, error))
      });
      break;

    case notes_action_types.SET_NOTE:
      state = notes_reducer_objectSpread(notes_reducer_objectSpread({}, state), {}, {
        notes: notes_reducer_objectSpread(notes_reducer_objectSpread({}, state.notes), {}, defineProperty_default()({}, noteId, noteFields))
      });
      break;

    case notes_action_types.SET_NOTE_IS_UPDATING:
      state = notes_reducer_objectSpread(notes_reducer_objectSpread({}, state), {}, {
        notes: notes_reducer_objectSpread(notes_reducer_objectSpread({}, state.notes), {}, defineProperty_default()({}, noteId, notes_reducer_objectSpread(notes_reducer_objectSpread({}, state.notes[noteId]), {}, {
          isUpdating: isUpdating
        })))
      });
      break;

    case notes_action_types.SET_IS_REQUESTING:
      state = notes_reducer_objectSpread(notes_reducer_objectSpread({}, state), {}, {
        requesting: notes_reducer_objectSpread(notes_reducer_objectSpread({}, state.requesting), {}, defineProperty_default()({}, selector, isRequesting))
      });
      break;
  }

  return state;
};

/* harmony default export */ var notes_reducer = (reducer_notesReducer);
// CONCATENATED MODULE: ./packages/data/build-module/notes/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






Object(external_wp_data_["registerStore"])(notes_constants_STORE_NAME, {
  reducer: notes_reducer,
  actions: notes_actions_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  selectors: notes_selectors_namespaceObject,
  resolvers: notes_resolvers_namespaceObject
});
var NOTES_STORE_NAME = notes_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/reports/constants.js
/**
 * Internal dependencies
 */
var reports_constants_STORE_NAME = 'wc/admin/reports';
// CONCATENATED MODULE: ./packages/data/build-module/reports/selectors.js
/**
 * Internal dependencies
 */

var EMPTY_OBJECT = {};
var selectors_getReportItemsError = function getReportItemsError(state, endpoint, query) {
  var resourceName = getResourceName(endpoint, query);
  return state.itemErrors[resourceName] || false;
};
var selectors_getReportItems = function getReportItems(state, endpoint, query) {
  var resourceName = getResourceName(endpoint, query);
  return state.items[resourceName] || EMPTY_OBJECT;
};
var selectors_getReportStats = function getReportStats(state, endpoint, query) {
  var resourceName = getResourceName(endpoint, query);
  return state.stats[resourceName] || EMPTY_OBJECT;
};
var selectors_getReportStatsError = function getReportStatsError(state, endpoint, query) {
  var resourceName = getResourceName(endpoint, query);
  return state.statErrors[resourceName] || false;
};
// CONCATENATED MODULE: ./packages/data/build-module/reports/action-types.js
var reports_action_types_TYPES = {
  SET_ITEM_ERROR: 'SET_ITEM_ERROR',
  SET_STAT_ERROR: 'SET_STAT_ERROR',
  SET_REPORT_ITEMS: 'SET_REPORT_ITEMS',
  SET_REPORT_STATS: 'SET_REPORT_STATS'
};
/* harmony default export */ var reports_action_types = (reports_action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/reports/actions.js
/**
 * Internal dependencies
 */


function setReportItemsError(endpoint, query, error) {
  var resourceName = getResourceName(endpoint, query);
  return {
    type: reports_action_types.SET_ITEM_ERROR,
    resourceName: resourceName,
    error: error
  };
}
function setReportItems(endpoint, query, items) {
  var resourceName = getResourceName(endpoint, query);
  return {
    type: reports_action_types.SET_REPORT_ITEMS,
    resourceName: resourceName,
    items: items
  };
}
function setReportStats(endpoint, query, stats) {
  var resourceName = getResourceName(endpoint, query);
  return {
    type: reports_action_types.SET_REPORT_STATS,
    resourceName: resourceName,
    stats: stats
  };
}
function setReportStatsError(endpoint, query, error) {
  var resourceName = getResourceName(endpoint, query);
  return {
    type: reports_action_types.SET_STAT_ERROR,
    resourceName: resourceName,
    error: error
  };
}
// CONCATENATED MODULE: ./packages/data/build-module/reports/resolvers.js



var reports_resolvers_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getReportItems),
    reports_resolvers_marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getReportStats);
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




function resolvers_getReportItems(endpoint, query) {
  var fetchArgs, response, data, totalResults, totalPages;
  return external_regeneratorRuntime_default.a.wrap(function getReportItems$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          fetchArgs = {
            parse: false,
            path: Object(external_wp_url_["addQueryArgs"])("".concat(NAMESPACE, "/reports/").concat(endpoint), query)
          };
          _context.prev = 1;
          _context.next = 4;
          return fetchWithHeaders(fetchArgs);

        case 4:
          response = _context.sent;
          data = response.data;
          totalResults = parseInt(response.headers.get('x-wp-total'), 10);
          totalPages = parseInt(response.headers.get('x-wp-totalpages'), 10);
          _context.next = 10;
          return setReportItems(endpoint, query, {
            data: data,
            totalResults: totalResults,
            totalPages: totalPages
          });

        case 10:
          _context.next = 16;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](1);
          _context.next = 16;
          return setReportItemsError(endpoint, query, _context.t0);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, reports_resolvers_marked, null, [[1, 12]]);
}
function resolvers_getReportStats(endpoint, query) {
  var fetchArgs, response, data, totalResults, totalPages;
  return external_regeneratorRuntime_default.a.wrap(function getReportStats$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          fetchArgs = {
            parse: false,
            path: Object(external_wp_url_["addQueryArgs"])("".concat(NAMESPACE, "/reports/").concat(endpoint, "/stats"), query)
          };
          _context2.prev = 1;
          _context2.next = 4;
          return fetchWithHeaders(fetchArgs);

        case 4:
          response = _context2.sent;
          data = response.data;
          totalResults = parseInt(response.headers.get('x-wp-total'), 10);
          totalPages = parseInt(response.headers.get('x-wp-totalpages'), 10);
          _context2.next = 10;
          return setReportStats(endpoint, query, {
            data: data,
            totalResults: totalResults,
            totalPages: totalPages
          });

        case 10:
          _context2.next = 16;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](1);
          _context2.next = 16;
          return setReportStatsError(endpoint, query, _context2.t0);

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, reports_resolvers_marked2, null, [[1, 12]]);
}
// CONCATENATED MODULE: ./packages/data/build-module/reports/reducer.js








function reports_reducer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function reports_reducer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      reports_reducer_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      reports_reducer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * Internal dependencies
 */




var reducer_reports = function reports() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    itemErrors: {},
    items: {},
    statErrors: {},
    stats: {}
  };

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      items = _ref.items,
      stats = _ref.stats,
      error = _ref.error,
      resourceName = _ref.resourceName;

  switch (type) {
    case reports_action_types.SET_REPORT_ITEMS:
      return reports_reducer_objectSpread(reports_reducer_objectSpread({}, state), {}, {
        items: reports_reducer_objectSpread(reports_reducer_objectSpread({}, state.items), {}, defineProperty_default()({}, resourceName, items))
      });

    case reports_action_types.SET_REPORT_STATS:
      return reports_reducer_objectSpread(reports_reducer_objectSpread({}, state), {}, {
        stats: reports_reducer_objectSpread(reports_reducer_objectSpread({}, state.stats), {}, defineProperty_default()({}, resourceName, stats))
      });

    case reports_action_types.SET_ITEM_ERROR:
      return reports_reducer_objectSpread(reports_reducer_objectSpread({}, state), {}, {
        itemErrors: reports_reducer_objectSpread(reports_reducer_objectSpread({}, state.itemErrors), {}, defineProperty_default()({}, resourceName, error))
      });

    case reports_action_types.SET_STAT_ERROR:
      return reports_reducer_objectSpread(reports_reducer_objectSpread({}, state), {}, {
        statErrors: reports_reducer_objectSpread(reports_reducer_objectSpread({}, state.statErrors), {}, defineProperty_default()({}, resourceName, error))
      });

    default:
      return state;
  }
};

/* harmony default export */ var reports_reducer = (reducer_reports);
// CONCATENATED MODULE: ./packages/data/build-module/reports/index.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */







Object(external_wp_data_["registerStore"])(reports_constants_STORE_NAME, {
  reducer: reports_reducer,
  actions: reports_actions_namespaceObject,
  controls: build_module_controls,
  selectors: reports_selectors_namespaceObject,
  resolvers: reports_resolvers_namespaceObject
});
var REPORTS_STORE_NAME = reports_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/items/constants.js
var items_constants_STORE_NAME = 'wc/admin/items';
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__(559);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(116);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: external ["wc","date"]
var external_wc_date_ = __webpack_require__(101);

// CONCATENATED MODULE: ./packages/data/build-module/items/utils.js









function utils_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function utils_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      utils_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      utils_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



/**
 * Returns leaderboard data to render a leaderboard table.
 *
 * @param  {Object} options                 arguments
 * @param  {string} options.id              Leaderboard ID
 * @param  {number} options.per_page       Per page limit
 * @param  {Object} options.persisted_query Persisted query passed to endpoint
 * @param  {Object} options.query           Query parameters in the url
 * @param  {Object} options.select          Instance of @wordpress/select
 * @param  {string} options.defaultDateRange   User specified default date range.
 * @return {Object} Object containing leaderboard responses.
 */

function getLeaderboard(options) {
  var endpoint = 'leaderboards';
  var perPage = options.per_page,
      persistedQuery = options.persisted_query,
      query = options.query,
      select = options.select,
      filterQuery = options.filterQuery;

  var _select = select(items_constants_STORE_NAME),
      getItems = _select.getItems,
      getItemsError = _select.getItemsError,
      isResolving = _select.isResolving;

  var response = {
    isRequesting: false,
    isError: false,
    rows: []
  };
  var datesFromQuery = Object(external_wc_date_["getCurrentDates"])(query, options.defaultDateRange);

  var leaderboardQuery = utils_objectSpread(utils_objectSpread({}, filterQuery), {}, {
    after: Object(external_wc_date_["appendTimestamp"])(datesFromQuery.primary.after, 'start'),
    before: Object(external_wc_date_["appendTimestamp"])(datesFromQuery.primary.before, 'end'),
    per_page: perPage,
    persisted_query: JSON.stringify(persistedQuery)
  }); // Disable eslint rule requiring `getItems` to be defined below because the next two statements
  // depend on `getItems` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return


  var leaderboards = getItems(endpoint, leaderboardQuery);

  if (isResolving('getItems', [endpoint, leaderboardQuery])) {
    return utils_objectSpread(utils_objectSpread({}, response), {}, {
      isRequesting: true
    });
  } else if (getItemsError(endpoint, leaderboardQuery)) {
    return utils_objectSpread(utils_objectSpread({}, response), {}, {
      isError: true
    });
  }

  var leaderboard = leaderboards.get(options.id);
  return utils_objectSpread(utils_objectSpread({}, response), {}, {
    rows: leaderboard === null || leaderboard === void 0 ? void 0 : leaderboard.rows
  });
}
/**
 * Returns items based on a search query.
 *
 * @param  {Object}   select    Instance of @wordpress/select
 * @param  {string}   endpoint  Report API Endpoint
 * @param  {string[]} search    Array of search strings.
 * @return {Object}   Object containing API request information and the matching items.
 */

function searchItemsByString(select, endpoint, search) {
  var _select2 = select(items_constants_STORE_NAME),
      getItems = _select2.getItems,
      getItemsError = _select2.getItemsError,
      isResolving = _select2.isResolving;

  var items = {};
  var isRequesting = false;
  var isError = false;
  search.forEach(function (searchWord) {
    var query = {
      search: searchWord,
      per_page: 10
    };
    var newItems = getItems(endpoint, query);
    newItems.forEach(function (item, id) {
      items[id] = item;
    });

    if (isResolving('getItems', [endpoint, query])) {
      isRequesting = true;
    }

    if (getItemsError(endpoint, query)) {
      isError = true;
    }
  });
  return {
    items: items,
    isRequesting: isRequesting,
    isError: isError
  };
}
/**
 * Generate a resource name for item totals count.
 *
 * It omits query parameters from the identifier that don't affect
 * totals values like pagination and response field filtering.
 *
 * @param {string} itemType Item type for totals count.
 * @param {Object} query Query for item totals count.
 * @return {string} Resource name for item totals.
 */

function getTotalCountResourceName(itemType, query) {
  // Disable eslint rule because we're using this spread to omit properties
  // that don't affect item totals count results.
  // eslint-disable-next-line no-unused-vars, camelcase
  var _fields = query._fields,
      page = query.page,
      per_page = query.per_page,
      totalsQuery = objectWithoutProperties_default()(query, ["_fields", "page", "per_page"]);

  return getResourceName('total-' + itemType, totalsQuery);
}
// CONCATENATED MODULE: ./packages/data/build-module/items/selectors.js






/**
 * Internal dependencies
 */


var selectors_getItems = function getItems(state, itemType, query) {
  var resourceName = getResourceName(itemType, query);
  var ids = state.items[resourceName] && state.items[resourceName].data || [];
  return ids.reduce(function (map, id) {
    map.set(id, state.data[itemType][id]);
    return map;
  }, new Map());
};
var selectors_getItemsTotalCount = function getItemsTotalCount(state, itemType, query) {
  var defaultValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var resourceName = getTotalCountResourceName(itemType, query);
  var totalCount = state.items.hasOwnProperty(resourceName) ? state.items[resourceName] : defaultValue;
  return totalCount;
};
var selectors_getItemsError = function getItemsError(state, itemType, query) {
  var resourceName = getResourceName(itemType, query);
  return state.errors[resourceName];
};
// CONCATENATED MODULE: ./packages/data/build-module/items/action-types.js
var items_action_types_TYPES = {
  SET_ITEM: 'SET_ITEM',
  SET_ITEMS: 'SET_ITEMS',
  SET_ITEMS_TOTAL_COUNT: 'SET_ITEMS_TOTAL_COUNT',
  SET_ERROR: 'SET_ERROR'
};
/* harmony default export */ var items_action_types = (items_action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/items/actions.js










var items_actions_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(updateProductStock),
    items_actions_marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(createProductFromTemplate);

function items_actions_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function items_actions_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      items_actions_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      items_actions_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



function setItem(itemType, id, item) {
  return {
    type: items_action_types.SET_ITEM,
    id: id,
    item: item,
    itemType: itemType
  };
}
function setItems(itemType, query, items, totalCount) {
  return {
    type: items_action_types.SET_ITEMS,
    items: items,
    itemType: itemType,
    query: query,
    totalCount: totalCount
  };
}
function setItemsTotalCount(itemType, query, totalCount) {
  return {
    type: items_action_types.SET_ITEMS_TOTAL_COUNT,
    itemType: itemType,
    query: query,
    totalCount: totalCount
  };
}
function items_actions_setError(itemType, query, error) {
  return {
    type: items_action_types.SET_ERROR,
    itemType: itemType,
    query: query,
    error: error
  };
}
function updateProductStock(product, quantity) {
  var updatedProduct, id, parentId, type, url;
  return external_regeneratorRuntime_default.a.wrap(function updateProductStock$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          updatedProduct = items_actions_objectSpread(items_actions_objectSpread({}, product), {}, {
            stock_quantity: quantity
          });
          id = updatedProduct.id, parentId = updatedProduct.parent_id, type = updatedProduct.type; // Optimistically update product stock.

          _context.next = 4;
          return setItem('products', id, updatedProduct);

        case 4:
          url = NAMESPACE;
          _context.t0 = type;
          _context.next = _context.t0 === 'variation' ? 8 : _context.t0 === 'variable' ? 10 : _context.t0 === 'simple' ? 10 : 10;
          break;

        case 8:
          url += "/products/".concat(parentId, "/variations/").concat(id);
          return _context.abrupt("break", 11);

        case 10:
          url += "/products/".concat(id);

        case 11:
          _context.prev = 11;
          _context.next = 14;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'PUT',
            data: updatedProduct
          });

        case 14:
          return _context.abrupt("return", true);

        case 17:
          _context.prev = 17;
          _context.t1 = _context["catch"](11);
          _context.next = 21;
          return setItem('products', id, product);

        case 21:
          _context.next = 23;
          return items_actions_setError('products', id, _context.t1);

        case 23:
          return _context.abrupt("return", false);

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, items_actions_marked, null, [[11, 17]]);
}
function createProductFromTemplate(itemFields, query) {
  var url, newItem;
  return external_regeneratorRuntime_default.a.wrap(function createProductFromTemplate$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          url = Object(external_wp_url_["addQueryArgs"])("".concat(WC_ADMIN_NAMESPACE, "/onboarding/tasks/create_product_from_template"), query || {});
          _context2.next = 4;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url,
            method: 'POST',
            data: itemFields
          });

        case 4:
          newItem = _context2.sent;
          _context2.next = 7;
          return setItem('products', newItem.id, newItem);

        case 7:
          return _context2.abrupt("return", newItem);

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 14;
          return items_actions_setError('createProductFromTemplate', query, _context2.t0);

        case 14:
          throw _context2.t0;

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, items_actions_marked2, null, [[0, 10]]);
}
// CONCATENATED MODULE: ./packages/data/build-module/items/resolvers.js










function resolvers_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function resolvers_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      resolvers_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      resolvers_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var items_resolvers_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(request),
    items_resolvers_marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getItems),
    items_resolvers_marked3 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(items_resolvers_getReviewsTotalCount),
    items_resolvers_marked4 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getItemsTotalCount);
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */





function request(itemType, query) {
  var endpoint, url, isUnboundedRequest, fetch, response, totalCount;
  return external_regeneratorRuntime_default.a.wrap(function request$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          endpoint = itemType === 'categories' ? 'products/categories' : itemType;
          url = Object(external_wp_url_["addQueryArgs"])("".concat(NAMESPACE, "/").concat(endpoint), query);
          isUnboundedRequest = query.per_page === -1;
          fetch = isUnboundedRequest ? external_wp_dataControls_["apiFetch"] : fetchWithHeaders;
          _context.next = 6;
          return fetch({
            path: url,
            method: 'GET'
          });

        case 6:
          response = _context.sent;

          if (!isUnboundedRequest) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", {
            items: response,
            totalCount: response.length
          });

        case 9:
          totalCount = parseInt(response.headers.get('x-wp-total'), 10);
          return _context.abrupt("return", {
            items: response.data,
            totalCount: totalCount
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, items_resolvers_marked);
}

function resolvers_getItems(itemType, query) {
  var _yield$request, items, totalCount;

  return external_regeneratorRuntime_default.a.wrap(function getItems$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return request(itemType, query);

        case 3:
          _yield$request = _context2.sent;
          items = _yield$request.items;
          totalCount = _yield$request.totalCount;
          _context2.next = 8;
          return setItemsTotalCount(itemType, query, totalCount);

        case 8:
          _context2.next = 10;
          return setItems(itemType, query, items);

        case 10:
          _context2.next = 16;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 16;
          return items_actions_setError(itemType, query, _context2.t0);

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, items_resolvers_marked2, null, [[0, 12]]);
}
function items_resolvers_getReviewsTotalCount(itemType, query) {
  return external_regeneratorRuntime_default.a.wrap(function getReviewsTotalCount$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return resolvers_getItemsTotalCount(itemType, query);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, items_resolvers_marked3);
}
function resolvers_getItemsTotalCount(itemType, query) {
  var totalsQuery, _yield$request2, totalCount;

  return external_regeneratorRuntime_default.a.wrap(function getItemsTotalCount$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          totalsQuery = resolvers_objectSpread(resolvers_objectSpread({}, query), {}, {
            page: 1,
            per_page: 1
          });
          _context4.next = 4;
          return request(itemType, totalsQuery);

        case 4:
          _yield$request2 = _context4.sent;
          totalCount = _yield$request2.totalCount;
          _context4.next = 8;
          return setItemsTotalCount(itemType, query, totalCount);

        case 8:
          _context4.next = 14;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 14;
          return items_actions_setError(itemType, query, _context4.t0);

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, items_resolvers_marked4, null, [[0, 10]]);
}
// CONCATENATED MODULE: ./packages/data/build-module/items/reducer.js








function items_reducer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function items_reducer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      items_reducer_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      items_reducer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * Internal dependencies
 */






var items_reducer_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    items: {},
    errors: {},
    data: {}
  };

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      id = _ref.id,
      itemType = _ref.itemType,
      query = _ref.query,
      item = _ref.item,
      items = _ref.items,
      totalCount = _ref.totalCount,
      error = _ref.error;

  switch (type) {
    case items_action_types.SET_ITEM:
      var itemData = state.data[itemType] || {};
      return items_reducer_objectSpread(items_reducer_objectSpread({}, state), {}, {
        data: items_reducer_objectSpread(items_reducer_objectSpread({}, state.data), {}, defineProperty_default()({}, itemType, items_reducer_objectSpread(items_reducer_objectSpread({}, itemData), {}, defineProperty_default()({}, id, items_reducer_objectSpread(items_reducer_objectSpread({}, itemData[id] || {}), item)))))
      });

    case items_action_types.SET_ITEMS:
      var ids = [];
      var nextItems = items.reduce(function (result, theItem) {
        ids.push(theItem.id);
        result[theItem.id] = theItem;
        return result;
      }, {});
      var resourceName = getResourceName(itemType, query);
      return items_reducer_objectSpread(items_reducer_objectSpread({}, state), {}, {
        items: items_reducer_objectSpread(items_reducer_objectSpread({}, state.items), {}, defineProperty_default()({}, resourceName, {
          data: ids
        })),
        data: items_reducer_objectSpread(items_reducer_objectSpread({}, state.data), {}, defineProperty_default()({}, itemType, items_reducer_objectSpread(items_reducer_objectSpread({}, state.data[itemType]), nextItems)))
      });

    case items_action_types.SET_ITEMS_TOTAL_COUNT:
      var totalResourceName = getTotalCountResourceName(itemType, query);
      return items_reducer_objectSpread(items_reducer_objectSpread({}, state), {}, {
        items: items_reducer_objectSpread(items_reducer_objectSpread({}, state.items), {}, defineProperty_default()({}, totalResourceName, totalCount))
      });

    case items_action_types.SET_ERROR:
      return items_reducer_objectSpread(items_reducer_objectSpread({}, state), {}, {
        errors: items_reducer_objectSpread(items_reducer_objectSpread({}, state.errors), {}, defineProperty_default()({}, getResourceName(itemType, query), error))
      });

    default:
      return state;
  }
};

/* harmony default export */ var items_reducer = (items_reducer_reducer);
// CONCATENATED MODULE: ./packages/data/build-module/items/index.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */







Object(external_wp_data_["registerStore"])(items_constants_STORE_NAME, {
  reducer: items_reducer,
  actions: items_actions_namespaceObject,
  controls: build_module_controls,
  selectors: items_selectors_namespaceObject,
  resolvers: items_resolvers_namespaceObject
});
var ITEMS_STORE_NAME = items_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/navigation/constants.js
var navigation_constants_STORE_NAME = 'woocommerce-navigation';
// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(141);

// CONCATENATED MODULE: ./packages/data/build-module/navigation/selectors.js
/**
 * External dependencies
 */

var MENU_ITEMS_HOOK = 'woocommerce_navigation_menu_items';
var selectors_getMenuItems = function getMenuItems(state) {
  return Object(external_wp_hooks_["applyFilters"])(MENU_ITEMS_HOOK, state.menuItems);
};
var getFavorites = function getFavorites(state) {
  return state.favorites || [];
};
var isNavigationRequesting = function isNavigationRequesting(state, selector) {
  return state.requesting[selector] || false;
};
// CONCATENATED MODULE: ./packages/data/build-module/navigation/action-types.js
var navigation_action_types_TYPES = {
  ADD_MENU_ITEMS: 'ADD_MENU_ITEMS',
  SET_MENU_ITEMS: 'SET_MENU_ITEMS',
  ADD_FAVORITE_FAILURE: 'ADD_FAVORITE_FAILURE',
  ADD_FAVORITE_REQUEST: 'ADD_FAVORITE_REQUEST',
  ADD_FAVORITE_SUCCESS: 'ADD_FAVORITE_SUCCESS',
  GET_FAVORITES_FAILURE: 'GET_FAVORITES_FAILURE',
  GET_FAVORITES_REQUEST: 'GET_FAVORITES_REQUEST',
  GET_FAVORITES_SUCCESS: 'GET_FAVORITES_SUCCESS',
  REMOVE_FAVORITE_FAILURE: 'REMOVE_FAVORITE_FAILURE',
  REMOVE_FAVORITE_REQUEST: 'REMOVE_FAVORITE_REQUEST',
  REMOVE_FAVORITE_SUCCESS: 'REMOVE_FAVORITE_SUCCESS'
};
/* harmony default export */ var navigation_action_types = (navigation_action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/navigation/actions.js


var navigation_actions_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(addFavorite),
    navigation_actions_marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(removeFavorite);
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



function actions_setMenuItems(menuItems) {
  return {
    type: navigation_action_types.SET_MENU_ITEMS,
    menuItems: menuItems
  };
}
function addMenuItems(menuItems) {
  return {
    type: navigation_action_types.ADD_MENU_ITEMS,
    menuItems: menuItems
  };
}
function getFavoritesFailure(error) {
  return {
    type: navigation_action_types.GET_FAVORITES_FAILURE,
    error: error
  };
}
function getFavoritesRequest(favorites) {
  return {
    type: navigation_action_types.GET_FAVORITES_REQUEST,
    favorites: favorites
  };
}
function getFavoritesSuccess(favorites) {
  return {
    type: navigation_action_types.GET_FAVORITES_SUCCESS,
    favorites: favorites
  };
}
function addFavoriteRequest(favorite) {
  return {
    type: navigation_action_types.ADD_FAVORITE_REQUEST,
    favorite: favorite
  };
}
function addFavoriteFailure(favorite, error) {
  return {
    type: navigation_action_types.ADD_FAVORITE_FAILURE,
    favorite: favorite,
    error: error
  };
}
function addFavoriteSuccess(favorite) {
  return {
    type: navigation_action_types.ADD_FAVORITE_SUCCESS,
    favorite: favorite
  };
}
function removeFavoriteRequest(favorite) {
  return {
    type: navigation_action_types.REMOVE_FAVORITE_REQUEST,
    favorite: favorite
  };
}
function removeFavoriteFailure(favorite, error) {
  return {
    type: navigation_action_types.REMOVE_FAVORITE_FAILURE,
    favorite: favorite,
    error: error
  };
}
function removeFavoriteSuccess(favorite, error) {
  return {
    type: navigation_action_types.REMOVE_FAVORITE_SUCCESS,
    favorite: favorite,
    error: error
  };
}
function addFavorite(favorite) {
  var results;
  return external_regeneratorRuntime_default.a.wrap(function addFavorite$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return addFavoriteRequest(favorite);

        case 2:
          _context.prev = 2;
          _context.next = 5;
          return external_wp_apiFetch_default()({
            path: "".concat(WC_ADMIN_NAMESPACE, "/navigation/favorites/me"),
            method: 'POST',
            data: {
              item_id: favorite
            }
          });

        case 5:
          results = _context.sent;

          if (!results) {
            _context.next = 10;
            break;
          }

          _context.next = 9;
          return addFavoriteSuccess(favorite);

        case 9:
          return _context.abrupt("return", results);

        case 10:
          throw new Error();

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](2);
          _context.next = 17;
          return addFavoriteFailure(favorite, _context.t0);

        case 17:
          throw new Error();

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, navigation_actions_marked, null, [[2, 13]]);
}
function removeFavorite(favorite) {
  var results;
  return external_regeneratorRuntime_default.a.wrap(function removeFavorite$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return removeFavoriteRequest(favorite);

        case 2:
          _context2.prev = 2;
          _context2.next = 5;
          return external_wp_apiFetch_default()({
            path: "".concat(WC_ADMIN_NAMESPACE, "/navigation/favorites/me"),
            method: 'DELETE',
            data: {
              item_id: favorite
            }
          });

        case 5:
          results = _context2.sent;

          if (!results) {
            _context2.next = 10;
            break;
          }

          _context2.next = 9;
          return removeFavoriteSuccess(favorite);

        case 9:
          return _context2.abrupt("return", results);

        case 10:
          throw new Error();

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](2);
          _context2.next = 17;
          return removeFavoriteFailure(favorite, _context2.t0);

        case 17:
          throw new Error();

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  }, navigation_actions_marked2, null, [[2, 13]]);
}
// CONCATENATED MODULE: ./packages/data/build-module/navigation/reducer.js













function navigation_reducer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function navigation_reducer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      navigation_reducer_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      navigation_reducer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * Internal dependencies
 */




var navigation_reducer_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    error: null,
    menuItems: [],
    favorites: [],
    requesting: {}
  };

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      error = _ref.error,
      favorite = _ref.favorite,
      favorites = _ref.favorites,
      menuItems = _ref.menuItems;

  switch (type) {
    case navigation_action_types.SET_MENU_ITEMS:
      state = navigation_reducer_objectSpread(navigation_reducer_objectSpread({}, state), {}, {
        menuItems: menuItems
      });
      break;

    case navigation_action_types.ADD_MENU_ITEMS:
      state = navigation_reducer_objectSpread(navigation_reducer_objectSpread({}, state), {}, {
        menuItems: [].concat(toConsumableArray_default()(state.menuItems), toConsumableArray_default()(menuItems))
      });
      break;

    case navigation_action_types.GET_FAVORITES_FAILURE:
      state = navigation_reducer_objectSpread(navigation_reducer_objectSpread({}, state), {}, {
        requesting: navigation_reducer_objectSpread(navigation_reducer_objectSpread({}, state.requesting), {}, {
          getFavorites: false
        })
      });
      break;

    case navigation_action_types.GET_FAVORITES_REQUEST:
      state = navigation_reducer_objectSpread(navigation_reducer_objectSpread({}, state), {}, {
        requesting: navigation_reducer_objectSpread(navigation_reducer_objectSpread({}, state.requesting), {}, {
          getFavorites: true
        })
      });
      break;

    case navigation_action_types.GET_FAVORITES_SUCCESS:
      state = navigation_reducer_objectSpread(navigation_reducer_objectSpread({}, state), {}, {
        favorites: favorites,
        requesting: navigation_reducer_objectSpread(navigation_reducer_objectSpread({}, state.requesting), {}, {
          getFavorites: false
        })
      });
      break;

    case navigation_action_types.ADD_FAVORITE_FAILURE:
      state = navigation_reducer_objectSpread(navigation_reducer_objectSpread({}, state), {}, {
        error: error,
        requesting: navigation_reducer_objectSpread(navigation_reducer_objectSpread({}, state.requesting), {}, {
          addFavorite: false
        })
      });
      break;

    case navigation_action_types.ADD_FAVORITE_REQUEST:
      state = navigation_reducer_objectSpread(navigation_reducer_objectSpread({}, state), {}, {
        requesting: navigation_reducer_objectSpread(navigation_reducer_objectSpread({}, state.requesting), {}, {
          addFavorite: true
        })
      });
      break;

    case navigation_action_types.ADD_FAVORITE_SUCCESS:
      var newFavorites = !state.favorites.includes(favorite) ? [].concat(toConsumableArray_default()(state.favorites), [favorite]) : state.favorites;
      state = navigation_reducer_objectSpread(navigation_reducer_objectSpread({}, state), {}, {
        favorites: newFavorites,
        menuItems: state.menuItems.map(function (item) {
          if (item.id === favorite) {
            return navigation_reducer_objectSpread(navigation_reducer_objectSpread({}, item), {}, {
              menuId: 'favorites'
            });
          }

          return item;
        }),
        requesting: navigation_reducer_objectSpread(navigation_reducer_objectSpread({}, state.requesting), {}, {
          addFavorite: false
        })
      });
      break;

    case navigation_action_types.REMOVE_FAVORITE_FAILURE:
      state = navigation_reducer_objectSpread(navigation_reducer_objectSpread({}, state), {}, {
        requesting: navigation_reducer_objectSpread(navigation_reducer_objectSpread({}, state.requesting), {}, {
          error: error,
          removeFavorite: false
        })
      });
      break;

    case navigation_action_types.REMOVE_FAVORITE_REQUEST:
      state = navigation_reducer_objectSpread(navigation_reducer_objectSpread({}, state), {}, {
        requesting: navigation_reducer_objectSpread(navigation_reducer_objectSpread({}, state.requesting), {}, {
          removeFavorite: true
        })
      });
      break;

    case navigation_action_types.REMOVE_FAVORITE_SUCCESS:
      var filteredFavorites = state.favorites.filter(function (f) {
        return f !== favorite;
      });
      state = navigation_reducer_objectSpread(navigation_reducer_objectSpread({}, state), {}, {
        favorites: filteredFavorites,
        menuItems: state.menuItems.map(function (item) {
          if (item.id === favorite) {
            return navigation_reducer_objectSpread(navigation_reducer_objectSpread({}, item), {}, {
              menuId: 'plugins'
            });
          }

          return item;
        }),
        requesting: navigation_reducer_objectSpread(navigation_reducer_objectSpread({}, state.requesting), {}, {
          removeFavorite: false
        })
      });
      break;
  }

  return state;
};

/* harmony default export */ var navigation_reducer = (navigation_reducer_reducer);
// CONCATENATED MODULE: ./packages/data/build-module/navigation/resolvers.js


var navigation_resolvers_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getFavorites);
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



function resolvers_getFavorites() {
  var results;
  return external_regeneratorRuntime_default.a.wrap(function getFavorites$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return getFavoritesRequest();

        case 2:
          _context.prev = 2;
          _context.next = 5;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: "".concat(WC_ADMIN_NAMESPACE, "/navigation/favorites/me")
          });

        case 5:
          results = _context.sent;

          if (!results) {
            _context.next = 10;
            break;
          }

          _context.next = 9;
          return getFavoritesSuccess(results);

        case 9:
          return _context.abrupt("return");

        case 10:
          throw new Error();

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](2);
          _context.next = 17;
          return getFavoritesFailure(_context.t0);

        case 17:
          throw new Error();

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, navigation_resolvers_marked, null, [[2, 13]]);
}
// CONCATENATED MODULE: ./packages/data/build-module/navigation/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






Object(external_wp_data_["registerStore"])(navigation_constants_STORE_NAME, {
  reducer: navigation_reducer,
  actions: navigation_actions_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  resolvers: navigation_resolvers_namespaceObject,
  selectors: navigation_selectors_namespaceObject
});
var NAVIGATION_STORE_NAME = navigation_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/navigation/with-navigation-hydration.js

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


/**
 * Higher-order component used to hydrate navigation data.
 *
 * @param {Object} data Data object with menu items and site information.
 */

var with_navigation_hydration_withNavigationHydration = function withNavigationHydration(data) {
  return Object(external_wp_compose_["createHigherOrderComponent"])(function (OriginalComponent) {
    return function (props) {
      var dataRef = Object(external_wp_element_["useRef"])(data);
      Object(external_wp_data_["useSelect"])(function (select, registry) {
        if (!dataRef.current) {
          return;
        }

        var _select = select(navigation_constants_STORE_NAME),
            isResolving = _select.isResolving,
            hasFinishedResolution = _select.hasFinishedResolution;

        var _registry$dispatch = registry.dispatch(navigation_constants_STORE_NAME),
            startResolution = _registry$dispatch.startResolution,
            finishResolution = _registry$dispatch.finishResolution,
            setMenuItems = _registry$dispatch.setMenuItems;

        if (!isResolving('getMenuItems') && !hasFinishedResolution('getMenuItems')) {
          startResolution('getMenuItems', []);
          setMenuItems(dataRef.current.menuItems);
          finishResolution('getMenuItems', []);
        }
      });
      return Object(external_wp_element_["createElement"])(OriginalComponent, props);
    };
  }, 'withNavigationHydration');
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(170);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(250);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(203);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(29);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(50);

// CONCATENATED MODULE: ./packages/data/build-module/reports/utils.js
















function reports_utils_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function reports_utils_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      reports_utils_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      reports_utils_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * External dependencies
 */






/**
 * Internal dependencies
 */





/**
 * Add filters and advanced filters values to a query object.
 *
 * @param  {Object} options                   arguments
 * @param  {string} options.endpoint          Report API Endpoint
 * @param  {Object} options.query             Query parameters in the url
 * @param  {Array}  options.limitBy           Properties used to limit the results. It will be used in the API call to send the IDs.
 * @param  {Array}  [options.filters]         config filters
 * @param  {Object} [options.advancedFilters] config advanced filters
 * @return {Object} A query object with the values from filters and advanced fitlters applied.
 */

function getFilterQuery(options) {
  var endpoint = options.endpoint,
      query = options.query,
      limitBy = options.limitBy,
      _options$filters = options.filters,
      filters = _options$filters === void 0 ? [] : _options$filters,
      _options$advancedFilt = options.advancedFilters,
      advancedFilters = _options$advancedFilt === void 0 ? {} : _options$advancedFilt;

  if (query.search) {
    var limitProperties = limitBy || [endpoint];
    return limitProperties.reduce(function (result, limitProperty) {
      result[limitProperty] = query[limitProperty];
      return result;
    }, {});
  }

  return filters.map(function (filter) {
    return getQueryFromConfig(filter, advancedFilters, query);
  }).reduce(function (result, configQuery) {
    return Object.assign(result, configQuery);
  }, {});
} // Some stats endpoints don't have interval data, so they can ignore after/before params and omit that part of the response.

var noIntervalEndpoints = ['stock', 'customers'];
/**
 * Add timestamp to advanced filter parameters involving date. The api
 * expects a timestamp for these values similar to `before` and `after`.
 *
 * @param {Object} config - advancedFilters config object.
 * @param {Object} activeFilter - an active filter.
 * @return {Object} - an active filter with timestamp added to date values.
 */

function timeStampFilterDates(config, activeFilter) {
  var advancedFilterConfig = config.filters[activeFilter.key];

  if (Object(external_lodash_["get"])(advancedFilterConfig, ['input', 'component']) !== 'Date') {
    return activeFilter;
  }

  var rule = activeFilter.rule,
      value = activeFilter.value;
  var timeOfDayMap = {
    after: 'start',
    before: 'end'
  }; // If the value is an array, it signifies "between" values which must have a timestamp
  // appended to each value.

  if (Array.isArray(value)) {
    var _value = slicedToArray_default()(value, 2),
        after = _value[0],
        before = _value[1];

    return Object.assign({}, activeFilter, {
      value: [Object(external_wc_date_["appendTimestamp"])(external_moment_default()(after), timeOfDayMap.after), Object(external_wc_date_["appendTimestamp"])(external_moment_default()(before), timeOfDayMap.before)]
    });
  }

  return Object.assign({}, activeFilter, {
    value: Object(external_wc_date_["appendTimestamp"])(external_moment_default()(value), timeOfDayMap[rule])
  });
}
function getQueryFromConfig(config, advancedFilters, query) {
  var queryValue = query[config.param];

  if (!queryValue) {
    return {};
  }

  if (queryValue === 'advanced') {
    var activeFilters = Object(external_wc_navigation_["getActiveFiltersFromQuery"])(query, advancedFilters.filters);

    if (activeFilters.length === 0) {
      return {};
    }

    var filterQuery = Object(external_wc_navigation_["getQueryFromActiveFilters"])(activeFilters.map(function (filter) {
      return timeStampFilterDates(advancedFilters, filter);
    }), {}, advancedFilters.filters);
    return reports_utils_objectSpread({
      match: query.match || 'all'
    }, filterQuery);
  }

  var filter = Object(external_lodash_["find"])(Object(external_wc_navigation_["flattenFilters"])(config.filters), {
    value: queryValue
  });

  if (!filter) {
    return {};
  }

  if (filter.settings && filter.settings.param) {
    var param = filter.settings.param;

    if (query[param]) {
      return defineProperty_default()({}, param, query[param]);
    }

    return {};
  }

  return defineProperty_default()({}, config.param, queryValue);
}
/**
 * Returns true if a report object is empty.
 *
 * @param  {Object}  report   Report to check
 * @param  {string}  endpoint Endpoint slug
 * @return {boolean}        True if report is data is empty.
 */

function isReportDataEmpty(report, endpoint) {
  if (!report) {
    return true;
  }

  if (!report.data) {
    return true;
  }

  if (!report.data.totals || Object(external_lodash_["isNull"])(report.data.totals)) {
    return true;
  }

  var checkIntervals = !Object(external_lodash_["includes"])(noIntervalEndpoints, endpoint);

  if (checkIntervals && (!report.data.intervals || report.data.intervals.length === 0)) {
    return true;
  }

  return false;
}
/**
 * Constructs and returns a query associated with a Report data request.
 *
 * @param  {Object} options           arguments
 * @param  {string} options.endpoint  Report API Endpoint
 * @param  {string} options.dataType  'primary' or 'secondary'.
 * @param  {Object} options.query     Query parameters in the url.
 * @param  {Array}  options.limitBy   Properties used to limit the results. It will be used in the API call to send the IDs.
 * @param  {string}  options.defaultDateRange   User specified default date range.
 * @return {Object} data request query parameters.
 */

function getRequestQuery(options) {
  var endpoint = options.endpoint,
      dataType = options.dataType,
      query = options.query,
      fields = options.fields;
  var datesFromQuery = Object(external_wc_date_["getCurrentDates"])(query, options.defaultDateRange);
  var interval = Object(external_wc_date_["getIntervalForQuery"])(query);
  var filterQuery = getFilterQuery(options);
  var end = datesFromQuery[dataType].before;
  var noIntervals = Object(external_lodash_["includes"])(noIntervalEndpoints, endpoint);
  return noIntervals ? reports_utils_objectSpread(reports_utils_objectSpread({}, filterQuery), {}, {
    fields: fields
  }) : reports_utils_objectSpread({
    order: 'asc',
    interval: interval,
    per_page: MAX_PER_PAGE,
    after: Object(external_wc_date_["appendTimestamp"])(datesFromQuery[dataType].after, 'start'),
    before: Object(external_wc_date_["appendTimestamp"])(end, 'end'),
    segmentby: query.segmentby,
    fields: fields
  }, filterQuery);
}
/**
 * Returns summary number totals needed to render a report page.
 *
 * @param  {Object} options           arguments
 * @param  {string} options.endpoint  Report API Endpoint
 * @param  {Object} options.query     Query parameters in the url
 * @param  {Object} options.select    Instance of @wordpress/select
 * @param  {Array}  options.limitBy   Properties used to limit the results. It will be used in the API call to send the IDs.
 * @param  {string}  options.defaultDateRange   User specified default date range.
 * @return {Object} Object containing summary number responses.
 */


function getSummaryNumbers(options) {
  var endpoint = options.endpoint,
      select = options.select;

  var _select = select(reports_constants_STORE_NAME),
      getReportStats = _select.getReportStats,
      getReportStatsError = _select.getReportStatsError,
      isResolving = _select.isResolving;

  var response = {
    isRequesting: false,
    isError: false,
    totals: {
      primary: null,
      secondary: null
    }
  };
  var primaryQuery = getRequestQuery(reports_utils_objectSpread(reports_utils_objectSpread({}, options), {}, {
    dataType: 'primary'
  })); // Disable eslint rule requiring `getReportStats` to be defined below because the next two statements
  // depend on `getReportStats` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  var primary = getReportStats(endpoint, primaryQuery);

  if (isResolving('getReportStats', [endpoint, primaryQuery])) {
    return reports_utils_objectSpread(reports_utils_objectSpread({}, response), {}, {
      isRequesting: true
    });
  } else if (getReportStatsError(endpoint, primaryQuery)) {
    return reports_utils_objectSpread(reports_utils_objectSpread({}, response), {}, {
      isError: true
    });
  }

  var primaryTotals = primary && primary.data && primary.data.totals || null;
  var secondaryQuery = getRequestQuery(reports_utils_objectSpread(reports_utils_objectSpread({}, options), {}, {
    dataType: 'secondary'
  })); // Disable eslint rule requiring `getReportStats` to be defined below because the next two statements
  // depend on `getReportStats` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  var secondary = getReportStats(endpoint, secondaryQuery);

  if (isResolving('getReportStats', [endpoint, secondaryQuery])) {
    return reports_utils_objectSpread(reports_utils_objectSpread({}, response), {}, {
      isRequesting: true
    });
  } else if (getReportStatsError(endpoint, secondaryQuery)) {
    return reports_utils_objectSpread(reports_utils_objectSpread({}, response), {}, {
      isError: true
    });
  }

  var secondaryTotals = secondary && secondary.data && secondary.data.totals || null;
  return reports_utils_objectSpread(reports_utils_objectSpread({}, response), {}, {
    totals: {
      primary: primaryTotals,
      secondary: secondaryTotals
    }
  });
}
/**
 * Static responses object to avoid returning new references each call.
 */

var reportChartDataResponses = {
  requesting: {
    isEmpty: false,
    isError: false,
    isRequesting: true,
    data: {
      totals: {},
      intervals: []
    }
  },
  error: {
    isEmpty: false,
    isError: true,
    isRequesting: false,
    data: {
      totals: {},
      intervals: []
    }
  },
  empty: {
    isEmpty: true,
    isError: false,
    isRequesting: false,
    data: {
      totals: {},
      intervals: []
    }
  }
};
var EMPTY_ARRAY = [];
/**
 * Cache helper for returning the full chart dataset after multiple
 * requests. Memoized on the request query (string), only called after
 * all the requests have resolved successfully.
 */

var getReportChartDataResponse = Object(external_lodash_["memoize"])(function (requestString, totals, intervals) {
  return {
    isEmpty: false,
    isError: false,
    isRequesting: false,
    data: {
      totals: totals,
      intervals: intervals
    }
  };
}, function (requestString, totals, intervals) {
  return [requestString, totals.length, intervals.length].join(':');
});
/**
 * Returns all of the data needed to render a chart with summary numbers on a report page.
 *
 * @param  {Object} options           arguments
 * @param  {string} options.endpoint  Report API Endpoint
 * @param  {string} options.dataType  'primary' or 'secondary'
 * @param  {Object} options.query     Query parameters in the url
 * @param  {Object} options.select    Instance of @wordpress/select
 * @param  {Array}  options.limitBy   Properties used to limit the results. It will be used in the API call to send the IDs.
 * @param  {string}  options.defaultDateRange   User specified default date range.
 * @return {Object}  Object containing API request information (response, fetching, and error details)
 */

function getReportChartData(options) {
  var endpoint = options.endpoint,
      select = options.select;

  var _select2 = select(reports_constants_STORE_NAME),
      getReportStats = _select2.getReportStats,
      getReportStatsError = _select2.getReportStatsError,
      isResolving = _select2.isResolving;

  var requestQuery = getRequestQuery(options); // Disable eslint rule requiring `stats` to be defined below because the next two if statements
  // depend on `getReportStats` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  var stats = getReportStats(endpoint, requestQuery);

  if (isResolving('getReportStats', [endpoint, requestQuery])) {
    return reportChartDataResponses.requesting;
  }

  if (getReportStatsError(endpoint, requestQuery)) {
    return reportChartDataResponses.error;
  }

  if (isReportDataEmpty(stats, endpoint)) {
    return reportChartDataResponses.empty;
  }

  var totals = stats && stats.data && stats.data.totals || null;
  var intervals = stats && stats.data && stats.data.intervals || EMPTY_ARRAY; // If we have more than 100 results for this time period,
  // we need to make additional requests to complete the response.

  if (stats.totalResults > MAX_PER_PAGE) {
    var isFetching = true;
    var isError = false;
    var pagedData = [];
    var totalPages = Math.ceil(stats.totalResults / MAX_PER_PAGE);
    var pagesFetched = 1;

    for (var i = 2; i <= totalPages; i++) {
      var nextQuery = reports_utils_objectSpread(reports_utils_objectSpread({}, requestQuery), {}, {
        page: i
      });

      var _data = getReportStats(endpoint, nextQuery);

      if (isResolving('getReportStats', [endpoint, nextQuery])) {
        continue;
      }

      if (getReportStatsError(endpoint, nextQuery)) {
        isError = true;
        isFetching = false;
        break;
      }

      pagedData.push(_data);
      pagesFetched++;

      if (pagesFetched === totalPages) {
        isFetching = false;
        break;
      }
    }

    if (isFetching) {
      return reportChartDataResponses.requesting;
    } else if (isError) {
      return reportChartDataResponses.error;
    }

    Object(external_lodash_["forEach"])(pagedData, function (_data) {
      if (_data.data && _data.data.intervals && Array.isArray(_data.data.intervals)) {
        intervals = intervals.concat(_data.data.intervals);
      }
    });
  }

  return getReportChartDataResponse(getResourceName(endpoint, requestQuery), totals, intervals);
}
/**
 * Returns a formatting function or string to be used by d3-format
 *
 * @param  {string} type Type of number, 'currency', 'number', 'percent', 'average'
 * @param  {Function} formatAmount format currency function
 * @return {string|Function}  returns a number format based on the type or an overriding formatting function
 */

function getTooltipValueFormat(type, formatAmount) {
  switch (type) {
    case 'currency':
      return formatAmount;

    case 'percent':
      return '.0%';

    case 'number':
      return ',';

    case 'average':
      return ',.2r';

    default:
      return ',';
  }
}
/**
 * Returns query needed for a request to populate a table.
 *
 * @param  {Object} options              arguments
 * @param  {Object} options.query        Query parameters in the url
 * @param  {Object} options.tableQuery   Query parameters specific for that endpoint
 * @param  {string} options.defaultDateRange   User specified default date range.
 * @return {Object} Object    Table data response
 */

function getReportTableQuery(options) {
  var query = options.query,
      _options$tableQuery = options.tableQuery,
      tableQuery = _options$tableQuery === void 0 ? {} : _options$tableQuery;
  var filterQuery = getFilterQuery(options);
  var datesFromQuery = Object(external_wc_date_["getCurrentDates"])(query, options.defaultDateRange);
  var noIntervals = Object(external_lodash_["includes"])(noIntervalEndpoints, options.endpoint);
  return reports_utils_objectSpread(reports_utils_objectSpread({
    orderby: query.orderby || 'date',
    order: query.order || 'desc',
    after: noIntervals ? undefined : Object(external_wc_date_["appendTimestamp"])(datesFromQuery.primary.after, 'start'),
    before: noIntervals ? undefined : Object(external_wc_date_["appendTimestamp"])(datesFromQuery.primary.before, 'end'),
    page: query.paged || 1,
    per_page: query.per_page || QUERY_DEFAULTS.pageSize
  }, filterQuery), tableQuery);
}
/**
 * Returns table data needed to render a report page.
 *
 * @param  {Object} options                arguments
 * @param  {string} options.endpoint       Report API Endpoint
 * @param  {Object} options.query          Query parameters in the url
 * @param  {Object} options.select         Instance of @wordpress/select
 * @param  {Object} options.tableQuery     Query parameters specific for that endpoint
 * @param  {string}  options.defaultDateRange   User specified default date range.
 * @return {Object} Object    Table data response
 */

function getReportTableData(options) {
  var endpoint = options.endpoint,
      select = options.select;

  var _select3 = select(reports_constants_STORE_NAME),
      getReportItems = _select3.getReportItems,
      getReportItemsError = _select3.getReportItemsError,
      isResolving = _select3.isResolving;

  var tableQuery = getReportTableQuery(options);
  var response = {
    query: tableQuery,
    isRequesting: false,
    isError: false,
    items: {
      data: [],
      totalResults: 0
    }
  }; // Disable eslint rule requiring `items` to be defined below because the next two if statements
  // depend on `getReportItems` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  var items = getReportItems(endpoint, tableQuery);

  if (isResolving('getReportItems', [endpoint, tableQuery])) {
    return reports_utils_objectSpread(reports_utils_objectSpread({}, response), {}, {
      isRequesting: true
    });
  } else if (getReportItemsError(endpoint, tableQuery)) {
    return reports_utils_objectSpread(reports_utils_objectSpread({}, response), {}, {
      isError: true
    });
  }

  return reports_utils_objectSpread(reports_utils_objectSpread({}, response), {}, {
    items: items
  });
}
// CONCATENATED MODULE: ./packages/data/build-module/export/constants.js
/**
 * Internal dependencies
 */
var export_constants_STORE_NAME = 'wc/admin/export';
// EXTERNAL MODULE: ./node_modules/md5/md5.js
var md5 = __webpack_require__(263);
var md5_default = /*#__PURE__*/__webpack_require__.n(md5);

// CONCATENATED MODULE: ./packages/data/build-module/export/utils.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


var utils_hashExportArgs = function hashExportArgs(args) {
  return md5_default()(getResourceName('export', args));
};
// CONCATENATED MODULE: ./packages/data/build-module/export/selectors.js
/**
 * Internal dependencies
 */

var selectors_isExportRequesting = function isExportRequesting(state, selector, selectorArgs) {
  return Boolean(state.requesting[selector] && state.requesting[selector][utils_hashExportArgs(selectorArgs)]);
};
var selectors_getExportId = function getExportId(state, exportType, exportArgs) {
  return state.exportIds[exportType] && state.exportIds[exportType][utils_hashExportArgs(exportArgs)];
};
var selectors_getError = function getError(state, selector, selectorArgs) {
  return state.errors[selector] && state.errors[selector][utils_hashExportArgs(selectorArgs)];
};
// CONCATENATED MODULE: ./packages/data/build-module/export/action-types.js
var export_action_types_TYPES = {
  START_EXPORT: 'START_EXPORT',
  SET_EXPORT_ID: 'SET_EXPORT_ID',
  SET_ERROR: 'SET_ERROR',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING'
};
/* harmony default export */ var export_action_types = (export_action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/export/actions.js



var export_actions_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(startExport);
/**
 * Internal dependencies
 */





function setExportId(exportType, exportArgs, exportId) {
  return {
    type: export_action_types.SET_EXPORT_ID,
    exportType: exportType,
    exportArgs: exportArgs,
    exportId: exportId
  };
}
function export_actions_setIsRequesting(selector, selectorArgs, isRequesting) {
  return {
    type: export_action_types.SET_IS_REQUESTING,
    selector: selector,
    selectorArgs: selectorArgs,
    isRequesting: isRequesting
  };
}
function export_actions_setError(selector, selectorArgs, error) {
  return {
    type: export_action_types.SET_ERROR,
    selector: selector,
    selectorArgs: selectorArgs,
    error: error
  };
}
function startExport(type, args) {
  var response, _response$data, exportId, message;

  return external_regeneratorRuntime_default.a.wrap(function startExport$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return export_actions_setIsRequesting('startExport', {
            type: type,
            args: args
          }, true);

        case 2:
          _context.prev = 2;
          _context.next = 5;
          return fetchWithHeaders({
            path: "".concat(NAMESPACE, "/reports/").concat(type, "/export"),
            method: 'POST',
            data: {
              report_args: args,
              email: true
            }
          });

        case 5:
          response = _context.sent;
          _context.next = 8;
          return export_actions_setIsRequesting('startExport', {
            type: type,
            args: args
          }, false);

        case 8:
          _response$data = response.data, exportId = _response$data.export_id, message = _response$data.message;

          if (!exportId) {
            _context.next = 14;
            break;
          }

          _context.next = 12;
          return setExportId(type, args, exportId);

        case 12:
          _context.next = 15;
          break;

        case 14:
          throw new Error(message);

        case 15:
          return _context.abrupt("return", response.data);

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](2);
          _context.next = 22;
          return export_actions_setError('startExport', {
            type: type,
            args: args
          }, _context.t0.message);

        case 22:
          _context.next = 24;
          return export_actions_setIsRequesting('startExport', {
            type: type,
            args: args
          }, false);

        case 24:
          throw _context.t0;

        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, export_actions_marked, null, [[2, 18]]);
}
// CONCATENATED MODULE: ./packages/data/build-module/export/reducer.js








function export_reducer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function export_reducer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      export_reducer_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      export_reducer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * Internal dependencies
 */





var reducer_exportReducer = function exportReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    errors: {},
    requesting: {},
    exportMeta: {},
    exportIds: {}
  };

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      error = _ref.error,
      exportArgs = _ref.exportArgs,
      exportId = _ref.exportId,
      exportType = _ref.exportType,
      isRequesting = _ref.isRequesting,
      selector = _ref.selector,
      selectorArgs = _ref.selectorArgs,
      type = _ref.type;

  switch (type) {
    case export_action_types.SET_IS_REQUESTING:
      return export_reducer_objectSpread(export_reducer_objectSpread({}, state), {}, {
        requesting: export_reducer_objectSpread(export_reducer_objectSpread({}, state.requesting), {}, defineProperty_default()({}, selector, export_reducer_objectSpread(export_reducer_objectSpread({}, state.requesting[selector]), {}, defineProperty_default()({}, utils_hashExportArgs(selectorArgs), isRequesting))))
      });

    case export_action_types.SET_EXPORT_ID:
      return export_reducer_objectSpread(export_reducer_objectSpread({}, state), {}, {
        exportMeta: export_reducer_objectSpread(export_reducer_objectSpread({}, state.exportMeta), {}, defineProperty_default()({}, exportId, {
          exportType: exportType,
          exportArgs: exportArgs
        })),
        exportIds: export_reducer_objectSpread(export_reducer_objectSpread({}, state.exportIds), {}, defineProperty_default()({}, exportType, export_reducer_objectSpread(export_reducer_objectSpread({}, state.exportIds[exportType]), {}, defineProperty_default()({}, utils_hashExportArgs({
          type: exportType,
          args: exportArgs
        }), exportId))))
      });

    case export_action_types.SET_ERROR:
      return export_reducer_objectSpread(export_reducer_objectSpread({}, state), {}, {
        errors: export_reducer_objectSpread(export_reducer_objectSpread({}, state.errors), {}, defineProperty_default()({}, selector, export_reducer_objectSpread(export_reducer_objectSpread({}, state.errors[selector]), {}, defineProperty_default()({}, utils_hashExportArgs(selectorArgs), error))))
      });

    default:
      return state;
  }
};

/* harmony default export */ var export_reducer = (reducer_exportReducer);
// CONCATENATED MODULE: ./packages/data/build-module/export/index.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */






Object(external_wp_data_["registerStore"])(export_constants_STORE_NAME, {
  reducer: export_reducer,
  actions: export_actions_namespaceObject,
  controls: build_module_controls,
  selectors: export_selectors_namespaceObject
});
var EXPORT_STORE_NAME = export_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/import/constants.js
/**
 * Internal dependencies
 */
var import_constants_STORE_NAME = 'wc/admin/import';
// CONCATENATED MODULE: ./packages/data/build-module/import/selectors.js








function selectors_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function selectors_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      selectors_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      selectors_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var getImportStarted = function getImportStarted(state) {
  var activeImport = state.activeImport,
      lastImportStartTimestamp = state.lastImportStartTimestamp;
  return {
    activeImport: activeImport,
    lastImportStartTimestamp: lastImportStartTimestamp
  } || {};
};
var getFormSettings = function getFormSettings(state) {
  var period = state.period,
      skipPrevious = state.skipPrevious;
  return {
    period: period,
    skipPrevious: skipPrevious
  } || {};
};
var getImportStatus = function getImportStatus(state, query) {
  var stringifiedQuery = JSON.stringify(query);
  return state.importStatus[stringifiedQuery] || {};
};
var getImportTotals = function getImportTotals(state, query) {
  var importTotals = state.importTotals,
      lastImportStartTimestamp = state.lastImportStartTimestamp;
  var stringifiedQuery = JSON.stringify(query);
  return selectors_objectSpread(selectors_objectSpread({}, importTotals[stringifiedQuery]), {}, {
    lastImportStartTimestamp: lastImportStartTimestamp
  }) || {};
};
var getImportError = function getImportError(state, query) {
  var stringifiedQuery = JSON.stringify(query);
  return state.errors[stringifiedQuery] || false;
};
// CONCATENATED MODULE: ./packages/data/build-module/import/action-types.js
var import_action_types_TYPES = {
  SET_IMPORT_DATE: 'SET_IMPORT_DATE',
  SET_IMPORT_ERROR: 'SET_IMPORT_ERROR',
  SET_IMPORT_PERIOD: 'SET_IMPORT_PERIOD',
  SET_IMPORT_STARTED: 'SET_IMPORT_STARTED',
  SET_IMPORT_STATUS: 'SET_IMPORT_STATUS',
  SET_IMPORT_TOTALS: 'SET_IMPORT_TOTALS',
  SET_SKIP_IMPORTED: 'SET_SKIP_IMPORTED'
};
/* harmony default export */ var import_action_types = (import_action_types_TYPES);
// CONCATENATED MODULE: ./packages/data/build-module/import/actions.js


var import_actions_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(updateImportation);
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


function setImportStarted(activeImport) {
  return {
    type: import_action_types.SET_IMPORT_STARTED,
    activeImport: activeImport
  };
}
function setImportPeriod(date, dateModified) {
  if (!dateModified) {
    return {
      type: import_action_types.SET_IMPORT_PERIOD,
      date: date
    };
  }

  return {
    type: import_action_types.SET_IMPORT_DATE,
    date: date
  };
}
function setSkipPrevious(skipPrevious) {
  return {
    type: import_action_types.SET_SKIP_IMPORTED,
    skipPrevious: skipPrevious
  };
}
function setImportStatus(query, importStatus) {
  return {
    type: import_action_types.SET_IMPORT_STATUS,
    importStatus: importStatus,
    query: query
  };
}
function setImportTotals(query, importTotals) {
  return {
    type: import_action_types.SET_IMPORT_TOTALS,
    importTotals: importTotals,
    query: query
  };
}
function setImportError(query, error) {
  return {
    type: import_action_types.SET_IMPORT_ERROR,
    error: error,
    query: query
  };
}
function updateImportation(path) {
  var importStarted,
      response,
      _args = arguments;
  return external_regeneratorRuntime_default.a.wrap(function updateImportation$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          importStarted = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
          _context.next = 3;
          return setImportStarted(importStarted);

        case 3:
          _context.prev = 3;
          _context.next = 6;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: path,
            method: 'POST'
          });

        case 6:
          response = _context.sent;
          return _context.abrupt("return", response);

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](3);
          _context.next = 14;
          return setImportError(path, _context.t0);

        case 14:
          throw _context.t0;

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, import_actions_marked, null, [[3, 10]]);
}
// CONCATENATED MODULE: ./packages/data/build-module/import/resolvers.js


var import_resolvers_marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getImportStatus),
    import_resolvers_marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(resolvers_getImportTotals);
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



function resolvers_getImportStatus(query) {
  var url, response;
  return external_regeneratorRuntime_default.a.wrap(function getImportStatus$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          url = Object(external_wp_url_["addQueryArgs"])("".concat(NAMESPACE, "/reports/import/status"), Object(external_lodash_["omit"])(query, ['timestamp']));
          _context.next = 4;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url
          });

        case 4:
          response = _context.sent;
          _context.next = 7;
          return setImportStatus(query, response);

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          _context.next = 13;
          return setImportError(query, _context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, import_resolvers_marked, null, [[0, 9]]);
}
function resolvers_getImportTotals(query) {
  var url, response;
  return external_regeneratorRuntime_default.a.wrap(function getImportTotals$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          url = Object(external_wp_url_["addQueryArgs"])("".concat(NAMESPACE, "/reports/import/totals"), query);
          _context2.next = 4;
          return Object(external_wp_dataControls_["apiFetch"])({
            path: url
          });

        case 4:
          response = _context2.sent;
          _context2.next = 7;
          return setImportTotals(query, response);

        case 7:
          _context2.next = 13;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 13;
          return setImportError(query, _context2.t0);

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, import_resolvers_marked2, null, [[0, 9]]);
}
// CONCATENATED MODULE: ./packages/data/build-module/import/reducer.js








function import_reducer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function import_reducer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      import_reducer_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      import_reducer_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



var import_reducer_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    activeImport: false,
    importStatus: {},
    importTotals: {},
    errors: {},
    lastImportStartTimestamp: 0,
    period: {
      date: external_moment_default()().format(Object(external_wp_i18n_["__"])('MM/DD/YYYY', 'woocommerce-admin')),
      label: 'all'
    },
    skipPrevious: true
  };

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      query = _ref.query,
      importStatus = _ref.importStatus,
      importTotals = _ref.importTotals,
      activeImport = _ref.activeImport,
      date = _ref.date,
      error = _ref.error,
      skipPrevious = _ref.skipPrevious;

  switch (type) {
    case import_action_types.SET_IMPORT_STARTED:
      state = import_reducer_objectSpread(import_reducer_objectSpread({}, state), {}, {
        activeImport: activeImport,
        lastImportStartTimestamp: activeImport ? Date.now() : state.lastImportStartTimestamp
      });
      break;

    case import_action_types.SET_IMPORT_PERIOD:
      state = import_reducer_objectSpread(import_reducer_objectSpread({}, state), {}, {
        period: import_reducer_objectSpread(import_reducer_objectSpread({}, state.period), {}, {
          label: date
        }),
        activeImport: false
      });
      break;

    case import_action_types.SET_IMPORT_DATE:
      state = import_reducer_objectSpread(import_reducer_objectSpread({}, state), {}, {
        period: {
          date: date,
          label: 'custom'
        },
        activeImport: false
      });
      break;

    case import_action_types.SET_SKIP_IMPORTED:
      state = import_reducer_objectSpread(import_reducer_objectSpread({}, state), {}, {
        skipPrevious: skipPrevious,
        activeImport: false
      });
      break;

    case import_action_types.SET_IMPORT_STATUS:
      state = import_reducer_objectSpread(import_reducer_objectSpread({}, state), {}, {
        importStatus: import_reducer_objectSpread(import_reducer_objectSpread({}, state.importStatus), {}, defineProperty_default()({}, JSON.stringify(query), importStatus)),
        errors: import_reducer_objectSpread(import_reducer_objectSpread({}, state.errors), {}, defineProperty_default()({}, JSON.stringify(query), false))
      });
      break;

    case import_action_types.SET_IMPORT_TOTALS:
      state = import_reducer_objectSpread(import_reducer_objectSpread({}, state), {}, {
        importTotals: import_reducer_objectSpread(import_reducer_objectSpread({}, state.importTotals), {}, defineProperty_default()({}, JSON.stringify(query), importTotals))
      });
      break;

    case import_action_types.SET_IMPORT_ERROR:
      state = import_reducer_objectSpread(import_reducer_objectSpread({}, state), {}, {
        errors: import_reducer_objectSpread(import_reducer_objectSpread({}, state.errors), {}, defineProperty_default()({}, JSON.stringify(query), error))
      });
      break;
  }

  return state;
};

/* harmony default export */ var import_reducer = (import_reducer_reducer);
// CONCATENATED MODULE: ./packages/data/build-module/import/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






Object(external_wp_data_["registerStore"])(import_constants_STORE_NAME, {
  reducer: import_reducer,
  actions: import_actions_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  selectors: import_selectors_namespaceObject,
  resolvers: import_resolvers_namespaceObject
});
var IMPORT_STORE_NAME = import_constants_STORE_NAME;
// CONCATENATED MODULE: ./packages/data/build-module/index.js
/**
 * External dependencies
 */



























/***/ })
/******/ ]);