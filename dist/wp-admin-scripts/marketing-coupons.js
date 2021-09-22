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
/******/ 	return __webpack_require__(__webpack_require__.s = 735);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

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
  module.exports = __webpack_require__(138)();
}


/***/ }),

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ 100:
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ get_get; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/superPropBase.js

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = Object(getPrototypeOf["a" /* default */])(object);
    if (object === null) break;
  }

  return object;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/get.js

function get_get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    get_get = Reflect.get;
  } else {
    get_get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return get_get(target, property, receiver || target);
}

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["a"] = (memoize);


/***/ }),

/***/ 11:
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useMediaQuery; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

/**
 * Runs a media query and returns its value when it changes.
 *
 * @param {string} [query] Media Query.
 * @return {boolean} return value of the media query.
 */

function useMediaQuery(query) {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(query && window.matchMedia(query).matches),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      match = _useState2[0],
      setMatch = _useState2[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!query) {
      return;
    }

    var updateMatch = function updateMatch() {
      return setMatch(window.matchMedia(query).matches);
    };

    updateMatch();
    var list = window.matchMedia(query);
    list.addListener(updateMatch);
    return function () {
      list.removeListener(updateMatch);
    };
  }, [query]);
  return query && match;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return STORE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_NAMESPACE; });
var STORE_KEY = 'wc/marketing';
var API_NAMESPACE = '/wc-admin/marketing';

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ slot_fill_Slot; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ slot_fill_Fill; });

// UNUSED EXPORTS: createSlotFill, useSlot, Provider

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(12);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/get.js + 1 modules
var get = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(10);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/slot-fill/context.js + 1 modules
var context = __webpack_require__(53);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/slot-fill/slot.js










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var slot_SlotComponent = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(SlotComponent, _Component);

  var _super = _createSuper(SlotComponent);

  function SlotComponent() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, SlotComponent);

    _this = _super.apply(this, arguments);
    _this.isUnmounted = false;
    _this.bindNode = _this.bindNode.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(SlotComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var registerSlot = this.props.registerSlot;
      registerSlot(this.props.name, this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var unregisterSlot = this.props.unregisterSlot;
      this.isUnmounted = true;
      unregisterSlot(this.props.name, this);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          name = _this$props.name,
          unregisterSlot = _this$props.unregisterSlot,
          registerSlot = _this$props.registerSlot;

      if (prevProps.name !== name) {
        unregisterSlot(prevProps.name);
        registerSlot(name, this);
      }
    }
  }, {
    key: "bindNode",
    value: function bindNode(node) {
      this.node = node;
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate() {
      if (this.isUnmounted) {
        return;
      }

      Object(get["a" /* default */])(Object(getPrototypeOf["a" /* default */])(SlotComponent.prototype), "forceUpdate", this).call(this);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          name = _this$props2.name,
          _this$props2$fillProp = _this$props2.fillProps,
          fillProps = _this$props2$fillProp === void 0 ? {} : _this$props2$fillProp,
          getFills = _this$props2.getFills;
      var fills = Object(external_lodash_["map"])(getFills(name, this), function (fill) {
        var fillKey = fill.occurrence;
        var fillChildren = Object(external_lodash_["isFunction"])(fill.children) ? fill.children(fillProps) : fill.children;
        return external_this_wp_element_["Children"].map(fillChildren, function (child, childIndex) {
          if (!child || Object(external_lodash_["isString"])(child)) {
            return child;
          }

          var childKey = "".concat(fillKey, "---").concat(child.key || childIndex);
          return Object(external_this_wp_element_["cloneElement"])(child, {
            key: childKey
          });
        });
      }).filter( // In some cases fills are rendered only when some conditions apply.
      // This ensures that we only use non-empty fills when rendering, i.e.,
      // it allows us to render wrappers only when the fills are actually present.
      Object(external_lodash_["negate"])(external_this_wp_element_["isEmptyElement"]));
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_lodash_["isFunction"])(children) ? children(fills) : fills);
    }
  }]);

  return SlotComponent;
}(external_this_wp_element_["Component"]);

var slot_Slot = function Slot(props) {
  return Object(external_this_wp_element_["createElement"])(context["a" /* Consumer */], null, function (_ref) {
    var registerSlot = _ref.registerSlot,
        unregisterSlot = _ref.unregisterSlot,
        getFills = _ref.getFills;
    return Object(external_this_wp_element_["createElement"])(slot_SlotComponent, Object(esm_extends["a" /* default */])({}, props, {
      registerSlot: registerSlot,
      unregisterSlot: unregisterSlot,
      getFills: getFills
    }));
  });
};

/* harmony default export */ var slot_fill_slot = (slot_Slot);
//# sourceMappingURL=slot.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/slot-fill/fill.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var occurrences = 0;

function fill_FillComponent(_ref) {
  var name = _ref.name,
      children = _ref.children,
      registerFill = _ref.registerFill,
      unregisterFill = _ref.unregisterFill;
  var slot = Object(context["c" /* useSlot */])(name);
  var ref = Object(external_this_wp_element_["useRef"])({
    name: name,
    children: children
  });

  if (!ref.current.occurrence) {
    ref.current.occurrence = ++occurrences;
  }

  Object(external_this_wp_element_["useLayoutEffect"])(function () {
    registerFill(name, ref.current);
    return function () {
      return unregisterFill(name, ref.current);
    };
  }, []);
  Object(external_this_wp_element_["useLayoutEffect"])(function () {
    ref.current.children = children;

    if (slot) {
      slot.forceUpdate();
    }
  }, [children]);
  Object(external_this_wp_element_["useLayoutEffect"])(function () {
    if (name === ref.current.name) {
      // ignore initial effect
      return;
    }

    unregisterFill(ref.current.name, ref.current);
    ref.current.name = name;
    registerFill(name, ref.current);
  }, [name]);

  if (!slot || !slot.node) {
    return null;
  } // If a function is passed as a child, provide it with the fillProps.


  if (Object(external_lodash_["isFunction"])(children)) {
    children = children(slot.props.fillProps);
  }

  return Object(external_this_wp_element_["createPortal"])(children, slot.node);
}

var fill_Fill = function Fill(props) {
  return Object(external_this_wp_element_["createElement"])(context["a" /* Consumer */], null, function (_ref2) {
    var registerFill = _ref2.registerFill,
        unregisterFill = _ref2.unregisterFill;
    return Object(external_this_wp_element_["createElement"])(fill_FillComponent, Object(esm_extends["a" /* default */])({}, props, {
      registerFill: registerFill,
      unregisterFill: unregisterFill
    }));
  });
};

/* harmony default export */ var slot_fill_fill = (fill_Fill);
//# sourceMappingURL=fill.js.map
// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js
var slot_fill_context = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot.js




/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


function bubbles_virtually_slot_Slot(_ref) {
  var name = _ref.name,
      _ref$fillProps = _ref.fillProps,
      fillProps = _ref$fillProps === void 0 ? {} : _ref$fillProps,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["name", "fillProps", "as"]);

  var registry = Object(external_this_wp_element_["useContext"])(slot_fill_context["a" /* default */]);
  var ref = Object(external_this_wp_element_["useRef"])();
  Object(external_this_wp_element_["useLayoutEffect"])(function () {
    registry.registerSlot(name, ref, fillProps);
    return function () {
      registry.unregisterSlot(name, ref);
    }; // We are not including fillProps in the deps because we don't want to
    // unregister and register the slot whenever fillProps change, which would
    // cause the fill to be re-mounted. We are only considering the initial value
    // of fillProps.
  }, [registry.registerSlot, registry.unregisterSlot, name]); // fillProps may be an update that interacts with the layout, so we
  // useLayoutEffect

  Object(external_this_wp_element_["useLayoutEffect"])(function () {
    registry.updateSlot(name, fillProps);
  });
  return Object(external_this_wp_element_["createElement"])(Component, Object(esm_extends["a" /* default */])({
    ref: ref
  }, props));
}
//# sourceMappingURL=slot.js.map
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js
var use_slot = __webpack_require__(76);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/fill.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



function useForceUpdate() {
  var _useState = Object(external_this_wp_element_["useState"])({}),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      setState = _useState2[1];

  return function () {
    return setState({});
  };
}

function bubbles_virtually_fill_Fill(_ref) {
  var name = _ref.name,
      children = _ref.children;
  var slot = Object(use_slot["a" /* default */])(name);
  var ref = Object(external_this_wp_element_["useRef"])({
    rerender: useForceUpdate()
  });
  Object(external_this_wp_element_["useEffect"])(function () {
    // We register fills so we can keep track of their existance.
    // Some Slot implementations need to know if there're already fills
    // registered so they can choose to render themselves or not.
    slot.registerFill(ref);
    return function () {
      slot.unregisterFill(ref);
    };
  }, [slot.registerFill, slot.unregisterFill]);

  if (!slot.ref || !slot.ref.current) {
    return null;
  }

  if (typeof children === 'function') {
    children = children(slot.fillProps);
  }

  return Object(external_this_wp_element_["createPortal"])(children, slot.ref.current);
}
//# sourceMappingURL=fill.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/slot-fill/index.js




/**
 * Internal dependencies
 */






function slot_fill_Slot(_ref) {
  var bubblesVirtually = _ref.bubblesVirtually,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["bubblesVirtually"]);

  if (bubblesVirtually) {
    return Object(external_this_wp_element_["createElement"])(bubbles_virtually_slot_Slot, props);
  }

  return Object(external_this_wp_element_["createElement"])(slot_fill_slot, props);
}
function slot_fill_Fill(props) {
  // We're adding both Fills here so they can register themselves before
  // their respective slot has been registered. Only the Fill that has a slot
  // will render. The other one will return null.
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(slot_fill_fill, props), Object(external_this_wp_element_["createElement"])(bubbles_virtually_fill_Fill, props));
}
function createSlotFill(name) {
  var FillComponent = function FillComponent(props) {
    return Object(external_this_wp_element_["createElement"])(slot_fill_Fill, Object(esm_extends["a" /* default */])({
      name: name
    }, props));
  };

  FillComponent.displayName = name + 'Fill';

  var SlotComponent = function SlotComponent(props) {
    return Object(external_this_wp_element_["createElement"])(slot_fill_Slot, Object(esm_extends["a" /* default */])({
      name: name
    }, props));
  };

  SlotComponent.displayName = name + 'Slot';
  return {
    Fill: FillComponent,
    Slot: SlotComponent
  };
}

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ 117:
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

/***/ 118:
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);

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

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

var e=__webpack_require__(6),n={display:"block",opacity:0,position:"absolute",top:0,left:0,height:"100%",width:"100%",overflow:"hidden",pointerEvents:"none",zIndex:-1},t=function(t){var r=t.onResize,u=e.useRef();return function(n,t){var r=function(){return n.current&&n.current.contentDocument&&n.current.contentDocument.defaultView};function u(){t();var e=r();e&&e.addEventListener("resize",t)}e.useEffect((function(){return r()?u():n.current&&n.current.addEventListener&&n.current.addEventListener("load",u),function(){var e=r();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("resize",t)}}),[])}(u,(function(){return r(u)})),e.createElement("iframe",{style:n,src:"about:blank",ref:u,"aria-hidden":!0,tabIndex:-1,frameBorder:0})},r=function(e){return{width:null!=e?e.offsetWidth:null,height:null!=e?e.offsetHeight:null}};module.exports=function(n){void 0===n&&(n=r);var u=e.useState(n(null)),o=u[0],i=u[1],c=e.useCallback((function(e){return i(n(e.current))}),[n]);return[e.useMemo((function(){return e.createElement(t,{onResize:c})}),[c]),o]};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);




function Dashicon(_ref) {
  var icon = _ref.icon,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 20 : _ref$size,
      className = _ref.className,
      extraProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["icon", "size", "className"]);

  var iconClass = ['dashicon', 'dashicons', 'dashicons-' + icon, className].filter(Boolean).join(' ');
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: iconClass,
    width: size,
    height: size
  }, extraProps));
}

/* harmony default export */ __webpack_exports__["a"] = (Dashicon);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54);
/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */




var withConstrainedTabbing = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(function (WrappedComponent) {
  return /*#__PURE__*/function (_Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_class, _Component);

    var _super = _createSuper(_class);

    function _class() {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, _class);

      _this = _super.apply(this, arguments);
      _this.focusContainRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createRef"])();
      _this.handleTabBehaviour = _this.handleTabBehaviour.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this));
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_class, [{
      key: "handleTabBehaviour",
      value: function handleTabBehaviour(event) {
        if (event.keyCode !== _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_8__[/* TAB */ "e"]) {
          return;
        }

        var tabbables = _wordpress_dom__WEBPACK_IMPORTED_MODULE_9__[/* focus */ "a"].tabbable.find(this.focusContainRef.current);

        if (!tabbables.length) {
          return;
        }

        var firstTabbable = tabbables[0];
        var lastTabbable = tabbables[tabbables.length - 1];

        if (event.shiftKey && event.target === firstTabbable) {
          event.preventDefault();
          lastTabbable.focus();
        } else if (!event.shiftKey && event.target === lastTabbable) {
          event.preventDefault();
          firstTabbable.focus();
          /*
           * When pressing Tab and none of the tabbables has focus, the keydown
           * event happens on the wrapper div: move focus on the first tabbable.
           */
        } else if (!tabbables.includes(event.target)) {
          event.preventDefault();
          firstTabbable.focus();
        }
      }
    }, {
      key: "render",
      value: function render() {
        // Disable reason: this component is non-interactive, but must capture
        // events from the wrapped component to determine when the Tab key is used.

        /* eslint-disable jsx-a11y/no-static-element-interactions */
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
          onKeyDown: this.handleTabBehaviour,
          ref: this.focusContainRef,
          tabIndex: "-1"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(WrappedComponent, this.props));
        /* eslint-enable jsx-a11y/no-static-element-interactions */
      }
    }]);

    return _class;
  }(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);
}, 'withConstrainedTabbing');
/* harmony default export */ __webpack_exports__["a"] = (withConstrainedTabbing);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(96);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Input types which are classified as button types, for use in considering
 * whether element is a (focus-normalized) button.
 *
 * @type {string[]}
 */

var INPUT_BUTTON_TYPES = ['button', 'submit'];
/**
 * Returns true if the given element is a button element subject to focus
 * normalization, or false otherwise.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
 *
 * @param {Element} element Element to test.
 *
 * @return {boolean} Whether element is a button.
 */

function isFocusNormalizedButton(element) {
  switch (element.nodeName) {
    case 'A':
    case 'BUTTON':
      return true;

    case 'INPUT':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_8__["includes"])(INPUT_BUTTON_TYPES, element.type);
  }

  return false;
}

/* harmony default export */ __webpack_exports__["a"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(function (WrappedComponent) {
  return /*#__PURE__*/function (_Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_class, _Component);

    var _super = _createSuper(_class);

    function _class() {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, _class);

      _this = _super.apply(this, arguments);
      _this.bindNode = _this.bindNode.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this));
      _this.cancelBlurCheck = _this.cancelBlurCheck.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this));
      _this.queueBlurCheck = _this.queueBlurCheck.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this));
      _this.normalizeButtonFocus = _this.normalizeButtonFocus.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this));
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_class, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.cancelBlurCheck();
      }
    }, {
      key: "bindNode",
      value: function bindNode(node) {
        if (node) {
          this.node = node;
        } else {
          delete this.node;
          this.cancelBlurCheck();
        }
      }
    }, {
      key: "queueBlurCheck",
      value: function queueBlurCheck(event) {
        var _this2 = this;

        // React does not allow using an event reference asynchronously
        // due to recycling behavior, except when explicitly persisted.
        event.persist(); // Skip blur check if clicking button. See `normalizeButtonFocus`.

        if (this.preventBlurCheck) {
          return;
        }

        this.blurCheckTimeout = setTimeout(function () {
          // If document is not focused then focus should remain
          // inside the wrapped component and therefore we cancel
          // this blur event thereby leaving focus in place.
          // https://developer.mozilla.org/en-US/docs/Web/API/Document/hasFocus.
          if (!document.hasFocus()) {
            event.preventDefault();
            return;
          }

          if ('function' === typeof _this2.node.handleFocusOutside) {
            _this2.node.handleFocusOutside(event);
          }
        }, 0);
      }
    }, {
      key: "cancelBlurCheck",
      value: function cancelBlurCheck() {
        clearTimeout(this.blurCheckTimeout);
      }
      /**
       * Handles a mousedown or mouseup event to respectively assign and
       * unassign a flag for preventing blur check on button elements. Some
       * browsers, namely Firefox and Safari, do not emit a focus event on
       * button elements when clicked, while others do. The logic here
       * intends to normalize this as treating click on buttons as focus.
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
       *
       * @param {MouseEvent} event Event for mousedown or mouseup.
       */

    }, {
      key: "normalizeButtonFocus",
      value: function normalizeButtonFocus(event) {
        var type = event.type,
            target = event.target;
        var isInteractionEnd = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["includes"])(['mouseup', 'touchend'], type);

        if (isInteractionEnd) {
          this.preventBlurCheck = false;
        } else if (isFocusNormalizedButton(target)) {
          this.preventBlurCheck = true;
        }
      }
    }, {
      key: "render",
      value: function render() {
        // Disable reason: See `normalizeButtonFocus` for browser-specific
        // focus event normalization.

        /* eslint-disable jsx-a11y/no-static-element-interactions */
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
          onFocus: this.cancelBlurCheck,
          onMouseDown: this.normalizeButtonFocus,
          onMouseUp: this.normalizeButtonFocus,
          onTouchStart: this.normalizeButtonFocus,
          onTouchEnd: this.normalizeButtonFocus,
          onBlur: this.queueBlurCheck
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
          ref: this.bindNode
        }, this.props)));
        /* eslint-enable jsx-a11y/no-static-element-interactions */
      }
    }]);

    return _class;
  }(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);
}, 'withFocusOutside'));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);




/**
 * WordPress dependencies
 */


function stopPropagation(event) {
  event.stopPropagation();
}

/* harmony default export */ __webpack_exports__["a"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function (_ref, ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["children"]);

  // Disable reason: this stops certain events from propagating outside of the component.
  //   - onMouseDown is disabled as this can cause interactions with other DOM elements

  /* eslint-disable jsx-a11y/no-static-element-interactions */
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
    ref: ref,
    onMouseDown: stopPropagation
  }), children);
  /* eslint-enable jsx-a11y/no-static-element-interactions */
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: Provider

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(10);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@wordpress/compose/build-module/utils/create-higher-order-component/index.js
var create_higher_order_component = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/higher-order/with-focus-return/context.js









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



var _createContext = Object(external_this_wp_element_["createContext"])({
  focusHistory: []
}),
    Provider = _createContext.Provider,
    Consumer = _createContext.Consumer;

Provider.displayName = 'FocusReturnProvider';
Consumer.displayName = 'FocusReturnConsumer';
/**
 * The maximum history length to capture for the focus stack. When exceeded,
 * items should be shifted from the stack for each consecutive push.
 *
 * @type {number}
 */

var MAX_STACK_LENGTH = 100;

var context_FocusReturnProvider = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(FocusReturnProvider, _Component);

  var _super = _createSuper(FocusReturnProvider);

  function FocusReturnProvider() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, FocusReturnProvider);

    _this = _super.apply(this, arguments);
    _this.onFocus = _this.onFocus.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      focusHistory: []
    };
    return _this;
  }

  Object(createClass["a" /* default */])(FocusReturnProvider, [{
    key: "onFocus",
    value: function onFocus(event) {
      var focusHistory = this.state.focusHistory; // Push the focused element to the history stack, keeping only unique
      // members but preferring the _last_ occurrence of any duplicates.
      // Lodash's `uniq` behavior favors the first occurrence, so the array
      // is temporarily reversed prior to it being called upon. Uniqueness
      // helps avoid situations where, such as in a constrained tabbing area,
      // the user changes focus enough within a transient element that the
      // stack may otherwise only consist of members pending destruction, at
      // which point focus might have been lost.

      var nextFocusHistory = Object(external_lodash_["uniq"])([].concat(Object(toConsumableArray["a" /* default */])(focusHistory), [event.target]).slice(-1 * MAX_STACK_LENGTH).reverse()).reverse();
      this.setState({
        focusHistory: nextFocusHistory
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className;
      return Object(external_this_wp_element_["createElement"])(Provider, {
        value: this.state
      }, Object(external_this_wp_element_["createElement"])("div", {
        onFocus: this.onFocus,
        className: className
      }, children));
    }
  }]);

  return FocusReturnProvider;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var with_focus_return_context = (context_FocusReturnProvider);

//# sourceMappingURL=context.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/higher-order/with-focus-return/index.js








function with_focus_return_createSuper(Derived) { var hasNativeReflectConstruct = with_focus_return_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function with_focus_return_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
 * Returns true if the given object is component-like. An object is component-
 * like if it is an instance of wp.element.Component, or is a function.
 *
 * @param {*} object Object to test.
 *
 * @return {boolean} Whether object is component-like.
 */

function isComponentLike(object) {
  return object instanceof external_this_wp_element_["Component"] || typeof object === 'function';
}
/**
 * Higher Order Component used to be used to wrap disposable elements like
 * sidebars, modals, dropdowns. When mounting the wrapped component, we track a
 * reference to the current active element so we know where to restore focus
 * when the component is unmounted.
 *
 * @param {(WPComponent|Object)} options The component to be enhanced with
 *                                      focus return behavior, or an object
 *                                      describing the component and the
 *                                      focus return characteristics.
 *
 * @return {WPComponent} Component with the focus restauration behaviour.
 */


function withFocusReturn(options) {
  // Normalize as overloaded form `withFocusReturn( options )( Component )`
  // or as `withFocusReturn( Component )`.
  if (isComponentLike(options)) {
    var WrappedComponent = options;
    return withFocusReturn({})(WrappedComponent);
  }

  var _options$onFocusRetur = options.onFocusReturn,
      onFocusReturn = _options$onFocusRetur === void 0 ? external_lodash_["stubTrue"] : _options$onFocusRetur;
  return function (WrappedComponent) {
    var FocusReturn = /*#__PURE__*/function (_Component) {
      Object(inherits["a" /* default */])(FocusReturn, _Component);

      var _super = with_focus_return_createSuper(FocusReturn);

      function FocusReturn() {
        var _this;

        Object(classCallCheck["a" /* default */])(this, FocusReturn);

        _this = _super.apply(this, arguments);
        _this.ownFocusedElements = new Set();
        _this.activeElementOnMount = document.activeElement;

        _this.setIsFocusedFalse = function () {
          return _this.isFocused = false;
        };

        _this.setIsFocusedTrue = function (event) {
          _this.ownFocusedElements.add(event.target);

          _this.isFocused = true;
        };

        return _this;
      }

      Object(createClass["a" /* default */])(FocusReturn, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var activeElementOnMount = this.activeElementOnMount,
              isFocused = this.isFocused,
              ownFocusedElements = this.ownFocusedElements;

          if (!isFocused) {
            return;
          } // Defer to the component's own explicit focus return behavior,
          // if specified. The function should return `false` to prevent
          // the default behavior otherwise occurring here. This allows
          // for support that the `onFocusReturn` decides to allow the
          // default behavior to occur under some conditions.


          if (onFocusReturn() === false) {
            return;
          }

          var stack = [].concat(Object(toConsumableArray["a" /* default */])(external_lodash_["without"].apply(void 0, [this.props.focus.focusHistory].concat(Object(toConsumableArray["a" /* default */])(ownFocusedElements)))), [activeElementOnMount]);
          var candidate;

          while (candidate = stack.pop()) {
            if (document.body.contains(candidate)) {
              candidate.focus();
              return;
            }
          }
        }
      }, {
        key: "render",
        value: function render() {
          return Object(external_this_wp_element_["createElement"])("div", {
            onFocus: this.setIsFocusedTrue,
            onBlur: this.setIsFocusedFalse
          }, Object(external_this_wp_element_["createElement"])(WrappedComponent, this.props.childProps));
        }
      }]);

      return FocusReturn;
    }(external_this_wp_element_["Component"]);

    return function (props) {
      return Object(external_this_wp_element_["createElement"])(Consumer, null, function (context) {
        return Object(external_this_wp_element_["createElement"])(FocusReturn, {
          childProps: props,
          focus: context
        });
      });
    };
  };
}

/* harmony default export */ var with_focus_return = __webpack_exports__["a"] = (Object(create_higher_order_component["a" /* default */])(withFocusReturn, 'withFocusReturn'));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88);
/* harmony import */ var _dashicon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(126);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function Icon(_ref) {
  var _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? null : _ref$icon,
      size = _ref.size,
      additionalProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ref, ["icon", "size"]);

  // Dashicons should be 20x20 by default.
  var dashiconSize = size || 20;

  if ('string' === typeof icon) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_dashicon__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
      icon: icon,
      size: dashiconSize
    }, additionalProps));
  }

  if (icon && _dashicon__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"] === icon.type) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["cloneElement"])(icon, _objectSpread({
      size: dashiconSize
    }, additionalProps));
  } // Icons should be 24x24 by default.


  var iconSize = size || 24;

  if ('function' === typeof icon) {
    if (icon.prototype instanceof _wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Component"]) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(icon, _objectSpread({
        size: iconSize
      }, additionalProps));
    }

    return icon(_objectSpread({
      size: iconSize
    }, additionalProps));
  }

  if (icon && (icon.type === 'svg' || icon.type === _wordpress_primitives__WEBPACK_IMPORTED_MODULE_4__[/* SVG */ "c"])) {
    var appliedProps = _objectSpread(_objectSpread({
      width: iconSize,
      height: iconSize
    }, icon.props), additionalProps);

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_4__[/* SVG */ "c"], appliedProps);
  }

  if (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["isValidElement"])(icon)) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["cloneElement"])(icon, _objectSpread({
      size: iconSize
    }, additionalProps));
  }

  return icon;
}

/* harmony default export */ __webpack_exports__["a"] = (Icon);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



/**
 * External dependencies
 */


function Animate(_ref) {
  var type = _ref.type,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options,
      children = _ref.children;

  if (type === 'appear') {
    var _classnames;

    var _options$origin = options.origin,
        origin = _options$origin === void 0 ? 'top' : _options$origin;

    var _origin$split = origin.split(' '),
        _origin$split2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_origin$split, 2),
        yAxis = _origin$split2[0],
        _origin$split2$ = _origin$split2[1],
        xAxis = _origin$split2$ === void 0 ? 'center' : _origin$split2$;

    return children({
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('components-animate__appear', (_classnames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_classnames, 'is-from-' + xAxis, xAxis !== 'center'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_classnames, 'is-from-' + yAxis, yAxis !== 'middle'), _classnames))
    });
  }

  if (type === 'slide-in') {
    var _options$origin2 = options.origin,
        _origin = _options$origin2 === void 0 ? 'left' : _options$origin2;

    return children({
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('components-animate__slide-in', 'is-from-' + _origin)
    });
  }

  if (type === 'loading') {
    return children({
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('components-animate__loading')
    });
  }

  return children({});
}

/* harmony default export */ __webpack_exports__["a"] = (Animate);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */


function Shortcut(_ref) {
  var shortcut = _ref.shortcut,
      className = _ref.className;

  if (!shortcut) {
    return null;
  }

  var displayText;
  var ariaLabel;

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isString"])(shortcut)) {
    displayText = shortcut;
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isObject"])(shortcut)) {
    displayText = shortcut.display;
    ariaLabel = shortcut.ariaLabel;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: className,
    "aria-label": ariaLabel
  }, displayText);
}

/* harmony default export */ __webpack_exports__["a"] = (Shortcut);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(12);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/node_modules/@wordpress/dom/build-module/dom.js
var dom = __webpack_require__(156);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/node_modules/@wordpress/dom/build-module/index.js + 2 modules
var build_module = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/node_modules/@wordpress/keycodes/build-module/index.js + 1 modules
var keycodes_build_module = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/@wordpress/deprecated/build-module/index.js
var deprecated_build_module = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-viewport-match/index.js
var use_viewport_match = __webpack_require__(306);

// EXTERNAL MODULE: ./node_modules/react-resize-aware/dist/index.js
var dist = __webpack_require__(125);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-resize-observer/index.js
/**
 * External dependencies
 */

/**
 * Hook which allows to listen the resize event of any target element when it changes sizes.
 * _Note: `useResizeObserver` will report `null` until after first render_
 *
 * @return {Array} An array of {Element} `resizeListener` and {?Object} `sizes` with properties `width` and `height`
 *
 * @example
 *
 * ```js
 * const App = () => {
 * 	const [ resizeListener, sizes ] = useResizeObserver();
 *
 * 	return (
 * 		<div>
 * 			{ resizeListener }
 * 			Your content here
 * 		</div>
 * 	);
 * };
 * ```
 *
 */

/* harmony default export */ var use_resize_observer = (dist_default.a);
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@wordpress/components/node_modules/@wordpress/icons/build-module/library/close.js
var library_close = __webpack_require__(451);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/popover/utils.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */

/**
 * Module constants
 */

var HEIGHT_OFFSET = 10; // used by the arrow and a bit of empty space

/**
 * Utility used to compute the popover position over the xAxis
 *
 * @param {Object}  anchorRect      Anchor Rect.
 * @param {Object}  contentSize     Content Size.
 * @param {string}  xAxis           Desired xAxis.
 * @param {string}  corner          Desired corner.
 * @param {boolean} sticky          Whether or not to stick the popover to the
 *                                  scroll container edge when part of the anchor
 *                                  leaves view.
 * @param {string}  chosenYAxis     yAxis to be used.
 * @param {Element} boundaryElement Boundary element.
 *
 * @return {Object} Popover xAxis position and constraints.
 */

function computePopoverXAxisPosition(anchorRect, contentSize, xAxis, corner, sticky, chosenYAxis, boundaryElement) {
  var width = contentSize.width;
  var isRTL = document.documentElement.dir === 'rtl'; // Correct xAxis for RTL support

  if (xAxis === 'left' && isRTL) {
    xAxis = 'right';
  } else if (xAxis === 'right' && isRTL) {
    xAxis = 'left';
  }

  if (corner === 'left' && isRTL) {
    corner = 'right';
  } else if (corner === 'right' && isRTL) {
    corner = 'left';
  } // x axis alignment choices


  var anchorMidPoint = Math.round(anchorRect.left + anchorRect.width / 2);
  var centerAlignment = {
    popoverLeft: anchorMidPoint,
    contentWidth: (anchorMidPoint - width / 2 > 0 ? width / 2 : anchorMidPoint) + (anchorMidPoint + width / 2 > window.innerWidth ? window.innerWidth - anchorMidPoint : width / 2)
  };
  var leftAlignmentX = anchorRect.left;

  if (corner === 'right') {
    leftAlignmentX = anchorRect.right;
  } else if (chosenYAxis !== 'middle') {
    leftAlignmentX = anchorMidPoint;
  }

  var rightAlignmentX = anchorRect.right;

  if (corner === 'left') {
    rightAlignmentX = anchorRect.left;
  } else if (chosenYAxis !== 'middle') {
    rightAlignmentX = anchorMidPoint;
  }

  var leftAlignment = {
    popoverLeft: leftAlignmentX,
    contentWidth: leftAlignmentX - width > 0 ? width : leftAlignmentX
  };
  var rightAlignment = {
    popoverLeft: rightAlignmentX,
    contentWidth: rightAlignmentX + width > window.innerWidth ? window.innerWidth - rightAlignmentX : width
  }; // Choosing the x axis

  var chosenXAxis = xAxis;
  var contentWidth = null;

  if (!sticky) {
    if (xAxis === 'center' && centerAlignment.contentWidth === width) {
      chosenXAxis = 'center';
    } else if (xAxis === 'left' && leftAlignment.contentWidth === width) {
      chosenXAxis = 'left';
    } else if (xAxis === 'right' && rightAlignment.contentWidth === width) {
      chosenXAxis = 'right';
    } else {
      chosenXAxis = leftAlignment.contentWidth > rightAlignment.contentWidth ? 'left' : 'right';
      var chosenWidth = chosenXAxis === 'left' ? leftAlignment.contentWidth : rightAlignment.contentWidth;
      contentWidth = chosenWidth !== width ? chosenWidth : null;
    }
  }

  var popoverLeft;

  if (chosenXAxis === 'center') {
    popoverLeft = centerAlignment.popoverLeft;
  } else if (chosenXAxis === 'left') {
    popoverLeft = leftAlignment.popoverLeft;
  } else {
    popoverLeft = rightAlignment.popoverLeft;
  }

  if (boundaryElement) {
    var boundaryRect = boundaryElement.getBoundingClientRect();
    popoverLeft = Math.min(popoverLeft, boundaryRect.right - width);
  }

  return {
    xAxis: chosenXAxis,
    popoverLeft: popoverLeft,
    contentWidth: contentWidth
  };
}
/**
 * Utility used to compute the popover position over the yAxis
 *
 * @param {Object}  anchorRect        Anchor Rect.
 * @param {Object}  contentSize       Content Size.
 * @param {string}  yAxis             Desired yAxis.
 * @param {string}  corner            Desired corner.
 * @param {boolean} sticky            Whether or not to stick the popover to the
 *                                    scroll container edge when part of the
 *                                    anchor leaves view.
 * @param {Element} anchorRef         The anchor element.
 * @param {Element} relativeOffsetTop If applicable, top offset of the relative
 *                                    positioned parent container.
 *
 * @return {Object} Popover xAxis position and constraints.
 */

function computePopoverYAxisPosition(anchorRect, contentSize, yAxis, corner, sticky, anchorRef, relativeOffsetTop) {
  var height = contentSize.height;

  if (sticky) {
    var scrollContainerEl = Object(dom["b" /* getScrollContainer */])(anchorRef) || document.body;
    var scrollRect = scrollContainerEl.getBoundingClientRect();
    var stickyPosition = scrollRect.top + height - relativeOffsetTop;

    if (anchorRect.top <= stickyPosition) {
      return {
        yAxis: yAxis,
        popoverTop: Math.min(anchorRect.bottom, stickyPosition)
      };
    }
  } // y axis alignment choices


  var anchorMidPoint = anchorRect.top + anchorRect.height / 2;

  if (corner === 'bottom') {
    anchorMidPoint = anchorRect.bottom;
  } else if (corner === 'top') {
    anchorMidPoint = anchorRect.top;
  }

  var middleAlignment = {
    popoverTop: anchorMidPoint,
    contentHeight: (anchorMidPoint - height / 2 > 0 ? height / 2 : anchorMidPoint) + (anchorMidPoint + height / 2 > window.innerHeight ? window.innerHeight - anchorMidPoint : height / 2)
  };
  var topAlignment = {
    popoverTop: anchorRect.top,
    contentHeight: anchorRect.top - HEIGHT_OFFSET - height > 0 ? height : anchorRect.top - HEIGHT_OFFSET
  };
  var bottomAlignment = {
    popoverTop: anchorRect.bottom,
    contentHeight: anchorRect.bottom + HEIGHT_OFFSET + height > window.innerHeight ? window.innerHeight - HEIGHT_OFFSET - anchorRect.bottom : height
  }; // Choosing the y axis

  var chosenYAxis = yAxis;
  var contentHeight = null;

  if (!sticky) {
    if (yAxis === 'middle' && middleAlignment.contentHeight === height) {
      chosenYAxis = 'middle';
    } else if (yAxis === 'top' && topAlignment.contentHeight === height) {
      chosenYAxis = 'top';
    } else if (yAxis === 'bottom' && bottomAlignment.contentHeight === height) {
      chosenYAxis = 'bottom';
    } else {
      chosenYAxis = topAlignment.contentHeight > bottomAlignment.contentHeight ? 'top' : 'bottom';
      var chosenHeight = chosenYAxis === 'top' ? topAlignment.contentHeight : bottomAlignment.contentHeight;
      contentHeight = chosenHeight !== height ? chosenHeight : null;
    }
  }

  var popoverTop;

  if (chosenYAxis === 'middle') {
    popoverTop = middleAlignment.popoverTop;
  } else if (chosenYAxis === 'top') {
    popoverTop = topAlignment.popoverTop;
  } else {
    popoverTop = bottomAlignment.popoverTop;
  }

  return {
    yAxis: chosenYAxis,
    popoverTop: popoverTop,
    contentHeight: contentHeight
  };
}
/**
 * Utility used to compute the popover position and the content max width/height
 * for a popover given its anchor rect and its content size.
 *
 * @param {Object}  anchorRect        Anchor Rect.
 * @param {Object}  contentSize       Content Size.
 * @param {string}  position          Position.
 * @param {boolean} sticky            Whether or not to stick the popover to the
 *                                    scroll container edge when part of the
 *                                    anchor leaves view.
 * @param {Element} anchorRef         The anchor element.
 * @param {number}  relativeOffsetTop If applicable, top offset of the relative
 *                                    positioned parent container.
 * @param {Element} boundaryElement   Boundary element.
 *
 * @return {Object} Popover position and constraints.
 */

function computePopoverPosition(anchorRect, contentSize) {
  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'top';
  var sticky = arguments.length > 3 ? arguments[3] : undefined;
  var anchorRef = arguments.length > 4 ? arguments[4] : undefined;
  var relativeOffsetTop = arguments.length > 5 ? arguments[5] : undefined;
  var boundaryElement = arguments.length > 6 ? arguments[6] : undefined;

  var _position$split = position.split(' '),
      _position$split2 = Object(slicedToArray["a" /* default */])(_position$split, 3),
      yAxis = _position$split2[0],
      _position$split2$ = _position$split2[1],
      xAxis = _position$split2$ === void 0 ? 'center' : _position$split2$,
      corner = _position$split2[2];

  var yAxisPosition = computePopoverYAxisPosition(anchorRect, contentSize, yAxis, corner, sticky, anchorRef, relativeOffsetTop);
  var xAxisPosition = computePopoverXAxisPosition(anchorRect, contentSize, xAxis, corner, sticky, yAxisPosition.yAxis, boundaryElement);
  return _objectSpread(_objectSpread({}, xAxisPosition), yAxisPosition);
}
//# sourceMappingURL=utils.js.map
// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/higher-order/with-focus-return/index.js + 1 modules
var with_focus_return = __webpack_require__(132);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/higher-order/with-constrained-tabbing/index.js
var with_constrained_tabbing = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/higher-order/with-focus-outside/index.js
var with_focus_outside = __webpack_require__(130);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/popover/detect-outside.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



var detect_outside_PopoverDetectOutside = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(PopoverDetectOutside, _Component);

  var _super = _createSuper(PopoverDetectOutside);

  function PopoverDetectOutside() {
    Object(classCallCheck["a" /* default */])(this, PopoverDetectOutside);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(PopoverDetectOutside, [{
    key: "handleFocusOutside",
    value: function handleFocusOutside(event) {
      this.props.onFocusOutside(event);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return PopoverDetectOutside;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var detect_outside = (Object(with_focus_outside["a" /* default */])(detect_outside_PopoverDetectOutside));
//# sourceMappingURL=detect-outside.js.map
// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__(72);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/scroll-lock/index.js






function scroll_lock_createSuper(Derived) { var hasNativeReflectConstruct = scroll_lock_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function scroll_lock_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */

/**
 * Creates a ScrollLock component bound to the specified document.
 *
 * This function creates a ScrollLock component for the specified document
 * and is exposed so we can create an isolated component for unit testing.
 *
 * @param {Object} args Keyword args.
 * @param {HTMLDocument} args.htmlDocument The document to lock the scroll for.
 * @param {string} args.className The name of the class used to lock scrolling.
 * @return {WPComponent} The bound ScrollLock component.
 */

function createScrollLockComponent() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$htmlDocument = _ref.htmlDocument,
      htmlDocument = _ref$htmlDocument === void 0 ? document : _ref$htmlDocument,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'lockscroll' : _ref$className;

  var lockCounter = 0;
  /*
   * Setting `overflow: hidden` on html and body elements resets body scroll in iOS.
   * Save scroll top so we can restore it after locking scroll.
   *
   * NOTE: It would be cleaner and possibly safer to find a localized solution such
   * as preventing default on certain touchmove events.
   */

  var previousScrollTop = 0;
  /**
   * Locks and unlocks scroll depending on the boolean argument.
   *
   * @param {boolean} locked Whether or not scroll should be locked.
   */

  function setLocked(locked) {
    var scrollingElement = htmlDocument.scrollingElement || htmlDocument.body;

    if (locked) {
      previousScrollTop = scrollingElement.scrollTop;
    }

    var methodName = locked ? 'add' : 'remove';
    scrollingElement.classList[methodName](className); // Adding the class to the document element seems to be necessary in iOS.

    htmlDocument.documentElement.classList[methodName](className);

    if (!locked) {
      scrollingElement.scrollTop = previousScrollTop;
    }
  }
  /**
   * Requests scroll lock.
   *
   * This function tracks requests for scroll lock. It locks scroll on the first
   * request and counts each request so `releaseLock` can unlock scroll when
   * all requests have been released.
   */


  function requestLock() {
    if (lockCounter === 0) {
      setLocked(true);
    }

    ++lockCounter;
  }
  /**
   * Releases a request for scroll lock.
   *
   * This function tracks released requests for scroll lock. When all requests
   * have been released, it unlocks scroll.
   */


  function releaseLock() {
    if (lockCounter === 1) {
      setLocked(false);
    }

    --lockCounter;
  }

  return /*#__PURE__*/function (_Component) {
    Object(inherits["a" /* default */])(ScrollLock, _Component);

    var _super = scroll_lock_createSuper(ScrollLock);

    function ScrollLock() {
      Object(classCallCheck["a" /* default */])(this, ScrollLock);

      return _super.apply(this, arguments);
    }

    Object(createClass["a" /* default */])(ScrollLock, [{
      key: "componentDidMount",

      /**
       * Requests scroll lock on mount.
       */
      value: function componentDidMount() {
        requestLock();
      }
      /**
       * Releases scroll lock before unmount.
       */

    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        releaseLock();
      }
      /**
       * Render nothing as this component is merely a way to declare scroll lock.
       *
       * @return {null} Render nothing by returning `null`.
       */

    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return ScrollLock;
  }(external_this_wp_element_["Component"]);
}
/* harmony default export */ var scroll_lock = (createScrollLockComponent());
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/isolated-event-container/index.js
var isolated_event_container = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/use-slot.js
var use_slot = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/slot-fill/index.js + 4 modules
var slot_fill = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/animate/index.js
var build_module_animate = __webpack_require__(134);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/popover/index.js





/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */










var FocusManaged = Object(with_constrained_tabbing["a" /* default */])(Object(with_focus_return["a" /* default */])(function (_ref) {
  var children = _ref.children;
  return children;
}));
/**
 * Name of slot in which popover should fill.
 *
 * @type {string}
 */

var SLOT_NAME = 'Popover';

function computeAnchorRect(anchorRefFallback, anchorRect, getAnchorRect) {
  var anchorRef = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var shouldAnchorIncludePadding = arguments.length > 4 ? arguments[4] : undefined;

  if (anchorRect) {
    return anchorRect;
  }

  if (getAnchorRect) {
    if (!anchorRefFallback.current) {
      return;
    }

    return getAnchorRect(anchorRefFallback.current);
  }

  if (anchorRef !== false) {
    if (!anchorRef || !window.Range || !window.Element || !window.DOMRect) {
      return;
    }

    if (anchorRef instanceof window.Range) {
      return Object(dom["a" /* getRectangleFromRange */])(anchorRef);
    }

    if (anchorRef instanceof window.Element) {
      var _rect2 = anchorRef.getBoundingClientRect();

      if (shouldAnchorIncludePadding) {
        return _rect2;
      }

      return withoutPadding(_rect2, anchorRef);
    }

    var top = anchorRef.top,
        bottom = anchorRef.bottom;
    var topRect = top.getBoundingClientRect();
    var bottomRect = bottom.getBoundingClientRect();

    var _rect = new window.DOMRect(topRect.left, topRect.top, topRect.width, bottomRect.bottom - topRect.top);

    if (shouldAnchorIncludePadding) {
      return _rect;
    }

    return withoutPadding(_rect, anchorRef);
  }

  if (!anchorRefFallback.current) {
    return;
  }

  var parentNode = anchorRefFallback.current.parentNode;
  var rect = parentNode.getBoundingClientRect();

  if (shouldAnchorIncludePadding) {
    return rect;
  }

  return withoutPadding(rect, parentNode);
}

function getComputedStyle(node) {
  return node.ownerDocument.defaultView.getComputedStyle(node);
}

function withoutPadding(rect, element) {
  var _getComputedStyle = getComputedStyle(element),
      paddingTop = _getComputedStyle.paddingTop,
      paddingBottom = _getComputedStyle.paddingBottom,
      paddingLeft = _getComputedStyle.paddingLeft,
      paddingRight = _getComputedStyle.paddingRight;

  var top = paddingTop ? parseInt(paddingTop, 10) : 0;
  var bottom = paddingBottom ? parseInt(paddingBottom, 10) : 0;
  var left = paddingLeft ? parseInt(paddingLeft, 10) : 0;
  var right = paddingRight ? parseInt(paddingRight, 10) : 0;
  return {
    x: rect.left + left,
    y: rect.top + top,
    width: rect.width - left - right,
    height: rect.height - top - bottom,
    left: rect.left + left,
    right: rect.right - right,
    top: rect.top + top,
    bottom: rect.bottom - bottom
  };
}
/**
 * Hook used to focus the first tabbable element on mount.
 *
 * @param {boolean|string} focusOnMount Focus on mount mode.
 * @param {Object}         contentRef   Reference to the popover content element.
 */


function useFocusContentOnMount(focusOnMount, contentRef) {
  // Focus handling
  Object(external_this_wp_element_["useEffect"])(function () {
    /*
     * Without the setTimeout, the dom node is not being focused. Related:
     * https://stackoverflow.com/questions/35522220/react-ref-with-focus-doesnt-work-without-settimeout-my-example
     *
     * TODO: Treat the cause, not the symptom.
     */
    var focusTimeout = setTimeout(function () {
      if (!focusOnMount || !contentRef.current) {
        return;
      }

      if (focusOnMount === 'firstElement') {
        // Find first tabbable node within content and shift focus, falling
        // back to the popover panel itself.
        var firstTabbable = build_module["a" /* focus */].tabbable.find(contentRef.current)[0];

        if (firstTabbable) {
          firstTabbable.focus();
        } else {
          contentRef.current.focus();
        }

        return;
      }

      if (focusOnMount === 'container') {
        // Focus the popover panel itself so items in the popover are easily
        // accessed via keyboard navigation.
        contentRef.current.focus();
      }
    }, 0);
    return function () {
      return clearTimeout(focusTimeout);
    };
  }, []);
}
/**
 * Sets or removes an element attribute.
 *
 * @param {Element} element The element to modify.
 * @param {string}  name    The attribute name to set or remove.
 * @param {?string} value   The value to set. A falsy value will remove the
 *                          attribute.
 */


function setAttribute(element, name, value) {
  if (!value) {
    if (element.hasAttribute(name)) {
      element.removeAttribute(name);
    }
  } else if (element.getAttribute(name) !== value) {
    element.setAttribute(name, value);
  }
}
/**
 * Sets or removes an element style property.
 *
 * @param {Element} element  The element to modify.
 * @param {string}  property The property to set or remove.
 * @param {?string} value    The value to set. A falsy value will remove the
 *                           property.
 */


function setStyle(element, property) {
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (element.style[property] !== value) {
    element.style[property] = value;
  }
}
/**
 * Sets or removes an element class.
 *
 * @param {Element} element The element to modify.
 * @param {string}  name    The class to set or remove.
 * @param {boolean} toggle  True to set the class, false to remove.
 */


function setClass(element, name, toggle) {
  if (toggle) {
    if (!element.classList.contains(name)) {
      element.classList.add(name);
    }
  } else if (element.classList.contains(name)) {
    element.classList.remove(name);
  }
}

var popover_Popover = function Popover(_ref2) {
  var headerTitle = _ref2.headerTitle,
      onClose = _ref2.onClose,
      onKeyDown = _ref2.onKeyDown,
      children = _ref2.children,
      className = _ref2.className,
      _ref2$noArrow = _ref2.noArrow,
      noArrow = _ref2$noArrow === void 0 ? true : _ref2$noArrow,
      isAlternate = _ref2.isAlternate,
      _ref2$position = _ref2.position,
      position = _ref2$position === void 0 ? 'bottom right' : _ref2$position,
      range = _ref2.range,
      _ref2$focusOnMount = _ref2.focusOnMount,
      focusOnMount = _ref2$focusOnMount === void 0 ? 'firstElement' : _ref2$focusOnMount,
      anchorRef = _ref2.anchorRef,
      shouldAnchorIncludePadding = _ref2.shouldAnchorIncludePadding,
      anchorRect = _ref2.anchorRect,
      getAnchorRect = _ref2.getAnchorRect,
      expandOnMobile = _ref2.expandOnMobile,
      _ref2$animate = _ref2.animate,
      animate = _ref2$animate === void 0 ? true : _ref2$animate,
      onClickOutside = _ref2.onClickOutside,
      onFocusOutside = _ref2.onFocusOutside,
      __unstableSticky = _ref2.__unstableSticky,
      _ref2$__unstableSlotN = _ref2.__unstableSlotName,
      __unstableSlotName = _ref2$__unstableSlotN === void 0 ? SLOT_NAME : _ref2$__unstableSlotN,
      __unstableObserveElement = _ref2.__unstableObserveElement,
      __unstableBoundaryParent = _ref2.__unstableBoundaryParent,
      contentProps = Object(objectWithoutProperties["a" /* default */])(_ref2, ["headerTitle", "onClose", "onKeyDown", "children", "className", "noArrow", "isAlternate", "position", "range", "focusOnMount", "anchorRef", "shouldAnchorIncludePadding", "anchorRect", "getAnchorRect", "expandOnMobile", "animate", "onClickOutside", "onFocusOutside", "__unstableSticky", "__unstableSlotName", "__unstableObserveElement", "__unstableBoundaryParent"]);

  var anchorRefFallback = Object(external_this_wp_element_["useRef"])(null);
  var contentRef = Object(external_this_wp_element_["useRef"])(null);
  var containerRef = Object(external_this_wp_element_["useRef"])();
  var isMobileViewport = Object(use_viewport_match["a" /* default */])('medium', '<');

  var _useState = Object(external_this_wp_element_["useState"])(),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      animateOrigin = _useState2[0],
      setAnimateOrigin = _useState2[1];

  var slot = Object(use_slot["a" /* default */])(__unstableSlotName);
  var isExpanded = expandOnMobile && isMobileViewport;

  var _useResizeObserver = use_resize_observer(),
      _useResizeObserver2 = Object(slicedToArray["a" /* default */])(_useResizeObserver, 2),
      containerResizeListener = _useResizeObserver2[0],
      contentSize = _useResizeObserver2[1];

  noArrow = isExpanded || noArrow;
  Object(external_this_wp_element_["useLayoutEffect"])(function () {
    if (isExpanded) {
      setClass(containerRef.current, 'is-without-arrow', noArrow);
      setClass(containerRef.current, 'is-alternate', isAlternate);
      setAttribute(containerRef.current, 'data-x-axis');
      setAttribute(containerRef.current, 'data-y-axis');
      setStyle(containerRef.current, 'top');
      setStyle(containerRef.current, 'left');
      setStyle(contentRef.current, 'maxHeight');
      setStyle(contentRef.current, 'maxWidth');
      return;
    }

    var refresh = function refresh() {
      if (!containerRef.current || !contentRef.current) {
        return;
      }

      var anchor = computeAnchorRect(anchorRefFallback, anchorRect, getAnchorRect, anchorRef, shouldAnchorIncludePadding);

      if (!anchor) {
        return;
      }

      var _containerRef$current = containerRef.current,
          offsetParent = _containerRef$current.offsetParent,
          ownerDocument = _containerRef$current.ownerDocument;
      var relativeOffsetTop = 0; // If there is a positioned ancestor element that is not the body,
      // subtract the position from the anchor rect. If the position of
      // the popover is fixed, the offset parent is null or the body
      // element, in which case the position is relative to the viewport.
      // See https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent

      if (offsetParent && offsetParent !== ownerDocument.body) {
        var offsetParentRect = offsetParent.getBoundingClientRect();
        relativeOffsetTop = offsetParentRect.top;
        anchor = new window.DOMRect(anchor.left - offsetParentRect.left, anchor.top - offsetParentRect.top, anchor.width, anchor.height);
      }

      var boundaryElement;

      if (__unstableBoundaryParent) {
        var _containerRef$current2;

        boundaryElement = (_containerRef$current2 = containerRef.current.closest('.popover-slot')) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.parentNode;
      }

      var usedContentSize = !contentSize.height ? contentRef.current.getBoundingClientRect() : contentSize;

      var _computePopoverPositi = computePopoverPosition(anchor, usedContentSize, position, __unstableSticky, containerRef.current, relativeOffsetTop, boundaryElement),
          popoverTop = _computePopoverPositi.popoverTop,
          popoverLeft = _computePopoverPositi.popoverLeft,
          xAxis = _computePopoverPositi.xAxis,
          yAxis = _computePopoverPositi.yAxis,
          contentHeight = _computePopoverPositi.contentHeight,
          contentWidth = _computePopoverPositi.contentWidth;

      if (typeof popoverTop === 'number' && typeof popoverLeft === 'number') {
        setStyle(containerRef.current, 'top', popoverTop + 'px');
        setStyle(containerRef.current, 'left', popoverLeft + 'px');
      }

      setClass(containerRef.current, 'is-without-arrow', noArrow || xAxis === 'center' && yAxis === 'middle');
      setClass(containerRef.current, 'is-alternate', isAlternate);
      setAttribute(containerRef.current, 'data-x-axis', xAxis);
      setAttribute(containerRef.current, 'data-y-axis', yAxis);
      setStyle(contentRef.current, 'maxHeight', typeof contentHeight === 'number' ? contentHeight + 'px' : '');
      setStyle(contentRef.current, 'maxWidth', typeof contentWidth === 'number' ? contentWidth + 'px' : ''); // Compute the animation position

      var yAxisMapping = {
        top: 'bottom',
        bottom: 'top'
      };
      var xAxisMapping = {
        left: 'right',
        right: 'left'
      };
      var animateYAxis = yAxisMapping[yAxis] || 'middle';
      var animateXAxis = xAxisMapping[xAxis] || 'center';
      setAnimateOrigin(animateXAxis + ' ' + animateYAxis);
    };

    refresh();
    /*
     * There are sometimes we need to reposition or resize the popover that
     * are not handled by the resize/scroll window events (i.e. CSS changes
     * in the layout that changes the position of the anchor).
     *
     * For these situations, we refresh the popover every 0.5s
     */

    var intervalHandle = window.setInterval(refresh, 500);
    var rafId;

    var refreshOnAnimationFrame = function refreshOnAnimationFrame() {
      window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(refresh);
    }; // Sometimes a click trigger a layout change that affects the popover
    // position. This is an opportunity to immediately refresh rather than
    // at the interval.


    window.addEventListener('click', refreshOnAnimationFrame);
    window.addEventListener('resize', refresh);
    window.addEventListener('scroll', refresh, true);
    var observer;

    if (__unstableObserveElement) {
      observer = new window.MutationObserver(refresh);
      observer.observe(__unstableObserveElement, {
        attributes: true
      });
    }

    return function () {
      window.clearInterval(intervalHandle);
      window.removeEventListener('resize', refresh);
      window.removeEventListener('scroll', refresh, true);
      window.removeEventListener('click', refreshOnAnimationFrame);
      window.cancelAnimationFrame(rafId);

      if (observer) {
        observer.disconnect();
      }
    };
  }, [isExpanded, anchorRect, getAnchorRect, anchorRef, shouldAnchorIncludePadding, position, contentSize, __unstableSticky, __unstableObserveElement, __unstableBoundaryParent]);
  useFocusContentOnMount(focusOnMount, contentRef); // Event handlers

  var maybeClose = function maybeClose(event) {
    // Close on escape
    if (event.keyCode === keycodes_build_module["b" /* ESCAPE */] && onClose) {
      event.stopPropagation();
      onClose();
    } // Preserve original content prop behavior


    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  /**
   * Shims an onFocusOutside callback to be compatible with a deprecated
   * onClickOutside prop function, if provided.
   *
   * @param {FocusEvent} event Focus event from onFocusOutside.
   */


  function handleOnFocusOutside(event) {
    // Defer to given `onFocusOutside` if specified. Call `onClose` only if
    // both `onFocusOutside` and `onClickOutside` are unspecified. Doing so
    // assures backwards-compatibility for prior `onClickOutside` default.
    if (onFocusOutside) {
      onFocusOutside(event);
      return;
    } else if (!onClickOutside) {
      if (onClose) {
        onClose();
      }

      return;
    } // Simulate MouseEvent using FocusEvent#relatedTarget as emulated click
    // target. MouseEvent constructor is unsupported in Internet Explorer.


    var clickEvent;

    try {
      clickEvent = new window.MouseEvent('click');
    } catch (error) {
      clickEvent = document.createEvent('MouseEvent');
      clickEvent.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    }

    Object.defineProperty(clickEvent, 'target', {
      get: function get() {
        return event.relatedTarget;
      }
    });
    Object(deprecated_build_module["a" /* default */])('Popover onClickOutside prop', {
      alternative: 'onFocusOutside'
    });
    onClickOutside(clickEvent);
  } // Disable reason: We care to capture the _bubbled_ events from inputs
  // within popover as inferring close intent.


  var content = Object(external_this_wp_element_["createElement"])(detect_outside, {
    onFocusOutside: handleOnFocusOutside
  }, Object(external_this_wp_element_["createElement"])(build_module_animate["a" /* default */], {
    type: animate && animateOrigin ? 'appear' : null,
    options: {
      origin: animateOrigin
    }
  }, function (_ref3) {
    var animateClassName = _ref3.className;
    return Object(external_this_wp_element_["createElement"])(isolated_event_container["a" /* default */], Object(esm_extends["a" /* default */])({
      className: classnames_default()('components-popover', className, animateClassName, {
        'is-expanded': isExpanded,
        'is-without-arrow': noArrow,
        'is-alternate': isAlternate
      })
    }, contentProps, {
      onKeyDown: maybeClose,
      ref: containerRef
    }), isExpanded && Object(external_this_wp_element_["createElement"])(scroll_lock, null), isExpanded && Object(external_this_wp_element_["createElement"])("div", {
      className: "components-popover__header"
    }, Object(external_this_wp_element_["createElement"])("span", {
      className: "components-popover__header-title"
    }, headerTitle), Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
      className: "components-popover__close",
      icon: library_close["a" /* default */],
      onClick: onClose
    })), Object(external_this_wp_element_["createElement"])("div", {
      ref: contentRef,
      className: "components-popover__content",
      tabIndex: "-1"
    }, Object(external_this_wp_element_["createElement"])("div", {
      style: {
        position: 'relative'
      }
    }, containerResizeListener, children)));
  })); // Apply focus to element as long as focusOnMount is truthy; false is
  // the only "disabled" value.

  if (focusOnMount) {
    content = Object(external_this_wp_element_["createElement"])(FocusManaged, null, content);
  }

  if (slot.ref) {
    content = Object(external_this_wp_element_["createElement"])(slot_fill["a" /* Fill */], {
      name: __unstableSlotName
    }, content);
  }

  if (anchorRef || anchorRect) {
    return content;
  }

  return Object(external_this_wp_element_["createElement"])("span", {
    ref: anchorRefFallback
  }, content);
};

var PopoverContainer = popover_Popover;

PopoverContainer.Slot = function (_ref4) {
  var _ref4$name = _ref4.name,
      name = _ref4$name === void 0 ? SLOT_NAME : _ref4$name;
  return Object(external_this_wp_element_["createElement"])(slot_fill["b" /* Slot */], {
    bubblesVirtually: true,
    name: name,
    className: "popover-slot"
  });
};

/* harmony default export */ var popover = __webpack_exports__["a"] = (PopoverContainer);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(139);

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

/***/ 139:
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

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(137);


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(79);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = Object.keys;

/**
 * Returns true if the two objects are shallow equal, or false otherwise.
 *
 * @param {import('.').ComparableObject} a First object to compare.
 * @param {import('.').ComparableObject} b Second object to compare.
 *
 * @return {boolean} Whether the two objects are shallow equal.
 */
function isShallowEqualObjects( a, b ) {
	var aKeys, bKeys, i, key, aValue;

	if ( a === b ) {
		return true;
	}

	aKeys = keys( a );
	bKeys = keys( b );

	if ( aKeys.length !== bKeys.length ) {
		return false;
	}

	i = 0;

	while ( i < aKeys.length ) {
		key = aKeys[ i ];
		aValue = a[ key ];

		if (
			// In iterating only the keys of the first object after verifying
			// equal lengths, account for the case that an explicit `undefined`
			// value in the first is implicitly undefined in the second.
			//
			// Example: isShallowEqualObjects( { a: undefined }, { b: 5 } )
			( aValue === undefined && ! b.hasOwnProperty( key ) ) ||
			aValue !== b[ key ]
		) {
			return false;
		}

		i++;
	}

	return true;
}

module.exports = isShallowEqualObjects;


/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Returns true if the two arrays are shallow equal, or false otherwise.
 *
 * @param {any[]} a First array to compare.
 * @param {any[]} b Second array to compare.
 *
 * @return {boolean} Whether the two arrays are shallow equal.
 */
function isShallowEqualArrays( a, b ) {
	var i;

	if ( a === b ) {
		return true;
	}

	if ( a.length !== b.length ) {
		return false;
	}

	for ( i = 0; i < a.length; i++ ) {
		if ( a[ i ] !== b[ i ] ) {
			return false;
		}
	}

	return true;
}

module.exports = isShallowEqualArrays;


/***/ }),

/***/ 15:
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

/***/ 153:
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

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isHorizontalEdge */
/* unused harmony export isVerticalEdge */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getRectangleFromRange; });
/* unused harmony export computeCaretRect */
/* unused harmony export placeCaretAtHorizontalEdge */
/* unused harmony export placeCaretAtVerticalEdge */
/* unused harmony export isTextField */
/* unused harmony export isNumberInput */
/* unused harmony export documentHasTextSelection */
/* unused harmony export documentHasUncollapsedSelection */
/* unused harmony export documentHasSelection */
/* unused harmony export isEntirelySelected */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getScrollContainer; });
/* unused harmony export getOffsetParent */
/* unused harmony export replace */
/* unused harmony export remove */
/* unused harmony export insertAfter */
/* unused harmony export unwrap */
/* unused harmony export replaceTag */
/* unused harmony export wrap */
/* unused harmony export __unstableStripHTML */
/* unused harmony export isEmpty */
/* unused harmony export removeInvalidHTML */
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _phrasing_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function getComputedStyle(node) {
  return node.ownerDocument.defaultView.getComputedStyle(node);
}
/**
 * Returns true if the given selection object is in the forward direction, or
 * false otherwise.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
 *
 * @param {Selection} selection Selection object to check.
 *
 * @return {boolean} Whether the selection is forward.
 */


function isSelectionForward(selection) {
  var anchorNode = selection.anchorNode,
      focusNode = selection.focusNode,
      anchorOffset = selection.anchorOffset,
      focusOffset = selection.focusOffset;
  var position = anchorNode.compareDocumentPosition(focusNode); // Disable reason: `Node#compareDocumentPosition` returns a bitmask value,
  // so bitwise operators are intended.

  /* eslint-disable no-bitwise */
  // Compare whether anchor node precedes focus node. If focus node (where
  // end of selection occurs) is after the anchor node, it is forward.

  if (position & anchorNode.DOCUMENT_POSITION_PRECEDING) {
    return false;
  }

  if (position & anchorNode.DOCUMENT_POSITION_FOLLOWING) {
    return true;
  }
  /* eslint-enable no-bitwise */
  // `compareDocumentPosition` returns 0 when passed the same node, in which
  // case compare offsets.


  if (position === 0) {
    return anchorOffset <= focusOffset;
  } // This should never be reached, but return true as default case.


  return true;
}
/**
 * Check whether the selection is at the edge of the container. Checks for
 * horizontal position by default. Set `onlyVertical` to true to check only
 * vertically.
 *
 * @param {Element} container    Focusable element.
 * @param {boolean} isReverse    Set to true to check left, false to check right.
 * @param {boolean} onlyVertical Set to true to check only vertical position.
 *
 * @return {boolean} True if at the edge, false if not.
 */


function isEdge(container, isReverse, onlyVertical) {
  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["includes"])(['INPUT', 'TEXTAREA'], container.tagName)) {
    if (container.selectionStart !== container.selectionEnd) {
      return false;
    }

    if (isReverse) {
      return container.selectionStart === 0;
    }

    return container.value.length === container.selectionStart;
  }

  if (!container.isContentEditable) {
    return true;
  }

  var ownerDocument = container.ownerDocument;
  var defaultView = ownerDocument.defaultView;
  var selection = defaultView.getSelection();

  if (!selection.rangeCount) {
    return false;
  }

  var originalRange = selection.getRangeAt(0);
  var range = originalRange.cloneRange();
  var isForward = isSelectionForward(selection);
  var isCollapsed = selection.isCollapsed; // Collapse in direction of selection.

  if (!isCollapsed) {
    range.collapse(!isForward);
  }

  var rangeRect = getRectangleFromRange(range);

  if (!rangeRect) {
    return false;
  }

  var computedStyle = getComputedStyle(container);
  var lineHeight = parseInt(computedStyle.lineHeight, 10) || 0; // Only consider the multiline selection at the edge if the direction is
  // towards the edge.

  if (!isCollapsed && rangeRect.height > lineHeight && isForward === isReverse) {
    return false;
  }

  var padding = parseInt(computedStyle["padding".concat(isReverse ? 'Top' : 'Bottom')], 10) || 0; // Calculate a buffer that is half the line height. In some browsers, the
  // selection rectangle may not fill the entire height of the line, so we add
  // 3/4 the line height to the selection rectangle to ensure that it is well
  // over its line boundary.

  var buffer = 3 * parseInt(lineHeight, 10) / 4;
  var containerRect = container.getBoundingClientRect();
  var originalRangeRect = getRectangleFromRange(originalRange);
  var verticalEdge = isReverse ? containerRect.top + padding > originalRangeRect.top - buffer : containerRect.bottom - padding < originalRangeRect.bottom + buffer;

  if (!verticalEdge) {
    return false;
  }

  if (onlyVertical) {
    return true;
  } // In the case of RTL scripts, the horizontal edge is at the opposite side.


  var direction = computedStyle.direction;
  var isReverseDir = direction === 'rtl' ? !isReverse : isReverse; // To calculate the horizontal position, we insert a test range and see if
  // this test range has the same horizontal position. This method proves to
  // be better than a DOM-based calculation, because it ignores empty text
  // nodes and a trailing line break element. In other words, we need to check
  // visual positioning, not DOM positioning.

  var x = isReverseDir ? containerRect.left + 1 : containerRect.right - 1;
  var y = isReverse ? containerRect.top + buffer : containerRect.bottom - buffer;
  var testRange = hiddenCaretRangeFromPoint(ownerDocument, x, y, container);

  if (!testRange) {
    return false;
  }

  var side = isReverseDir ? 'left' : 'right';
  var testRect = getRectangleFromRange(testRange); // Allow the position to be 1px off.

  return Math.abs(testRect[side] - rangeRect[side]) <= 1;
}
/**
 * Check whether the selection is horizontally at the edge of the container.
 *
 * @param {Element} container Focusable element.
 * @param {boolean} isReverse Set to true to check left, false for right.
 *
 * @return {boolean} True if at the horizontal edge, false if not.
 */


function isHorizontalEdge(container, isReverse) {
  return isEdge(container, isReverse);
}
/**
 * Check whether the selection is vertically at the edge of the container.
 *
 * @param {Element} container Focusable element.
 * @param {boolean} isReverse Set to true to check top, false for bottom.
 *
 * @return {boolean} True if at the vertical edge, false if not.
 */

function isVerticalEdge(container, isReverse) {
  return isEdge(container, isReverse, true);
}
/**
 * Get the rectangle of a given Range.
 *
 * @param {Range} range The range.
 *
 * @return {DOMRect} The rectangle.
 */

function getRectangleFromRange(range) {
  // For uncollapsed ranges, get the rectangle that bounds the contents of the
  // range; this a rectangle enclosing the union of the bounding rectangles
  // for all the elements in the range.
  if (!range.collapsed) {
    return range.getBoundingClientRect();
  }

  var _range = range,
      startContainer = _range.startContainer;
  var ownerDocument = startContainer.ownerDocument; // Correct invalid "BR" ranges. The cannot contain any children.

  if (startContainer.nodeName === 'BR') {
    var parentNode = startContainer.parentNode;
    var index = Array.from(parentNode.childNodes).indexOf(startContainer);
    range = ownerDocument.createRange();
    range.setStart(parentNode, index);
    range.setEnd(parentNode, index);
  }

  var rect = range.getClientRects()[0]; // If the collapsed range starts (and therefore ends) at an element node,
  // `getClientRects` can be empty in some browsers. This can be resolved
  // by adding a temporary text node with zero-width space to the range.
  //
  // See: https://stackoverflow.com/a/6847328/995445

  if (!rect) {
    var padNode = ownerDocument.createTextNode("\u200B"); // Do not modify the live range.

    range = range.cloneRange();
    range.insertNode(padNode);
    rect = range.getClientRects()[0];
    padNode.parentNode.removeChild(padNode);
  }

  return rect;
}
/**
 * Get the rectangle for the selection in a container.
 *
 * @param {Window} win The window of the selection.
 *
 * @return {?DOMRect} The rectangle.
 */

function computeCaretRect(win) {
  var selection = win.getSelection();
  var range = selection.rangeCount ? selection.getRangeAt(0) : null;

  if (!range) {
    return;
  }

  return getRectangleFromRange(range);
}
/**
 * Places the caret at start or end of a given element.
 *
 * @param {Element} container Focusable element.
 * @param {boolean} isReverse True for end, false for start.
 */

function placeCaretAtHorizontalEdge(container, isReverse) {
  if (!container) {
    return;
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["includes"])(['INPUT', 'TEXTAREA'], container.tagName)) {
    container.focus();

    if (isReverse) {
      container.selectionStart = container.value.length;
      container.selectionEnd = container.value.length;
    } else {
      container.selectionStart = 0;
      container.selectionEnd = 0;
    }

    return;
  }

  container.focus();

  if (!container.isContentEditable) {
    return;
  } // Select on extent child of the container, not the container itself. This
  // avoids the selection always being `endOffset` of 1 when placed at end,
  // where `startContainer`, `endContainer` would always be container itself.


  var rangeTarget = container[isReverse ? 'lastChild' : 'firstChild']; // If no range target, it implies that the container is empty. Focusing is
  // sufficient for caret to be placed correctly.

  if (!rangeTarget) {
    return;
  }

  var ownerDocument = container.ownerDocument;
  var defaultView = ownerDocument.defaultView;
  var selection = defaultView.getSelection();
  var range = ownerDocument.createRange();
  range.selectNodeContents(rangeTarget);
  range.collapse(!isReverse);
  selection.removeAllRanges();
  selection.addRange(range);
}
/**
 * Polyfill.
 * Get a collapsed range for a given point.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/caretRangeFromPoint
 *
 * @param {Document} doc  The document of the range.
 * @param {number}   x    Horizontal position within the current viewport.
 * @param {number}   y    Vertical position within the current viewport.
 *
 * @return {?Range} The best range for the given point.
 */

function caretRangeFromPoint(doc, x, y) {
  if (doc.caretRangeFromPoint) {
    return doc.caretRangeFromPoint(x, y);
  }

  if (!doc.caretPositionFromPoint) {
    return null;
  }

  var point = doc.caretPositionFromPoint(x, y); // If x or y are negative, outside viewport, or there is no text entry node.
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/caretRangeFromPoint

  if (!point) {
    return null;
  }

  var range = doc.createRange();
  range.setStart(point.offsetNode, point.offset);
  range.collapse(true);
  return range;
}
/**
 * Get a collapsed range for a given point.
 * Gives the container a temporary high z-index (above any UI).
 * This is preferred over getting the UI nodes and set styles there.
 *
 * @param {Document} doc       The document of the range.
 * @param {number}    x         Horizontal position within the current viewport.
 * @param {number}    y         Vertical position within the current viewport.
 * @param {Element}  container Container in which the range is expected to be found.
 *
 * @return {?Range} The best range for the given point.
 */


function hiddenCaretRangeFromPoint(doc, x, y, container) {
  var originalZIndex = container.style.zIndex;
  var originalPosition = container.style.position; // A z-index only works if the element position is not static.

  container.style.zIndex = '10000';
  container.style.position = 'relative';
  var range = caretRangeFromPoint(doc, x, y);
  container.style.zIndex = originalZIndex;
  container.style.position = originalPosition;
  return range;
}
/**
 * Places the caret at the top or bottom of a given element.
 *
 * @param {Element} container           Focusable element.
 * @param {boolean} isReverse           True for bottom, false for top.
 * @param {DOMRect} [rect]              The rectangle to position the caret with.
 * @param {boolean} [mayUseScroll=true] True to allow scrolling, false to disallow.
 */


function placeCaretAtVerticalEdge(container, isReverse, rect) {
  var mayUseScroll = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (!container) {
    return;
  }

  if (!rect || !container.isContentEditable) {
    placeCaretAtHorizontalEdge(container, isReverse);
    return;
  } // Offset by a buffer half the height of the caret rect. This is needed
  // because caretRangeFromPoint may default to the end of the selection if
  // offset is too close to the edge. It's unclear how to precisely calculate
  // this threshold; it may be the padded area of some combination of line
  // height, caret height, and font size. The buffer offset is effectively
  // equivalent to a point at half the height of a line of text.


  var buffer = rect.height / 2;
  var editableRect = container.getBoundingClientRect();
  var x = rect.left;
  var y = isReverse ? editableRect.bottom - buffer : editableRect.top + buffer;
  var ownerDocument = container.ownerDocument;
  var defaultView = ownerDocument.defaultView;
  var range = hiddenCaretRangeFromPoint(ownerDocument, x, y, container);

  if (!range || !container.contains(range.startContainer)) {
    if (mayUseScroll && (!range || !range.startContainer || !range.startContainer.contains(container))) {
      // Might be out of view.
      // Easier than attempting to calculate manually.
      container.scrollIntoView(isReverse);
      placeCaretAtVerticalEdge(container, isReverse, rect, false);
      return;
    }

    placeCaretAtHorizontalEdge(container, isReverse);
    return;
  }

  var selection = defaultView.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  container.focus(); // Editable was already focussed, it goes back to old range...
  // This fixes it.

  selection.removeAllRanges();
  selection.addRange(range);
}
/**
 * Check whether the given element is a text field, where text field is defined
 * by the ability to select within the input, or that it is contenteditable.
 *
 * See: https://html.spec.whatwg.org/#textFieldSelection
 *
 * @param {HTMLElement} element The HTML element.
 *
 * @return {boolean} True if the element is an text field, false if not.
 */

function isTextField(element) {
  var nodeName = element.nodeName,
      contentEditable = element.contentEditable;
  var nonTextInputs = ['button', 'checkbox', 'hidden', 'file', 'radio', 'image', 'range', 'reset', 'submit', 'number'];
  return nodeName === 'INPUT' && !nonTextInputs.includes(element.type) || nodeName === 'TEXTAREA' || contentEditable === 'true';
}
/**
 * Check whether the given element is an input field of type number
 * and has a valueAsNumber
 *
 * @param {HTMLElement} element The HTML element.
 *
 * @return {boolean} True if the element is input and holds a number.
 */

function isNumberInput(element) {
  var nodeName = element.nodeName,
      type = element.type,
      valueAsNumber = element.valueAsNumber;
  return nodeName === 'INPUT' && type === 'number' && !!valueAsNumber;
}
/**
 * Check whether the current document has selected text. This applies to ranges
 * of text in the document, and not selection inside <input> and <textarea>
 * elements.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection#Related_objects.
 *
 * @param {Document} doc The document to check.
 *
 * @return {boolean} True if there is selection, false if not.
 */

function documentHasTextSelection(doc) {
  var selection = doc.defaultView.getSelection();
  var range = selection.rangeCount ? selection.getRangeAt(0) : null;
  return range && !range.collapsed;
}
/**
 * Check whether the given element, assumed an input field or textarea,
 * contains a (uncollapsed) selection of text.
 *
 * Note: this is perhaps an abuse of the term "selection", since these elements
 * manage selection differently and aren't covered by Selection#collapsed.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection#Related_objects.
 *
 * @param {HTMLElement} element The HTML element.
 *
 * @return {boolean} Whether the input/textareaa element has some "selection".
 */

function inputFieldHasUncollapsedSelection(element) {
  if (!isTextField(element) && !isNumberInput(element)) {
    return false;
  }

  try {
    var selectionStart = element.selectionStart,
        selectionEnd = element.selectionEnd;
    return selectionStart !== null && selectionStart !== selectionEnd;
  } catch (error) {
    // Safari throws an exception when trying to get `selectionStart`
    // on non-text <input> elements (which, understandably, don't
    // have the text selection API). We catch this via a try/catch
    // block, as opposed to a more explicit check of the element's
    // input types, because of Safari's non-standard behavior. This
    // also means we don't have to worry about the list of input
    // types that support `selectionStart` changing as the HTML spec
    // evolves over time.
    return false;
  }
}
/**
 * Check whether the current document has any sort of selection. This includes
 * ranges of text across elements and any selection inside <input> and
 * <textarea> elements.
 *
 * @param {Document} doc The document to check.
 *
 * @return {boolean} Whether there is any sort of "selection" in the document.
 */


function documentHasUncollapsedSelection(doc) {
  return documentHasTextSelection(doc) || inputFieldHasUncollapsedSelection(doc.activeElement);
}
/**
 * Check whether the current document has a selection. This checks for both
 * focus in an input field and general text selection.
 *
 * @param {Document} doc The document to check.
 *
 * @return {boolean} True if there is selection, false if not.
 */

function documentHasSelection(doc) {
  return isTextField(doc.activeElement) || isNumberInput(doc.activeElement) || documentHasTextSelection(doc);
}
/**
 * Check whether the contents of the element have been entirely selected.
 * Returns true if there is no possibility of selection.
 *
 * @param {Element} element The element to check.
 *
 * @return {boolean} True if entirely selected, false if not.
 */

function isEntirelySelected(element) {
  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["includes"])(['INPUT', 'TEXTAREA'], element.nodeName)) {
    return element.selectionStart === 0 && element.value.length === element.selectionEnd;
  }

  if (!element.isContentEditable) {
    return true;
  }

  var ownerDocument = element.ownerDocument;
  var defaultView = ownerDocument.defaultView;
  var selection = defaultView.getSelection();
  var range = selection.rangeCount ? selection.getRangeAt(0) : null;

  if (!range) {
    return true;
  }

  var startContainer = range.startContainer,
      endContainer = range.endContainer,
      startOffset = range.startOffset,
      endOffset = range.endOffset;

  if (startContainer === element && endContainer === element && startOffset === 0 && endOffset === element.childNodes.length) {
    return true;
  }

  var lastChild = element.lastChild;
  var lastChildContentLength = lastChild.nodeType === lastChild.TEXT_NODE ? lastChild.data.length : lastChild.childNodes.length;
  return startContainer === element.firstChild && endContainer === element.lastChild && startOffset === 0 && endOffset === lastChildContentLength;
}
/**
 * Given a DOM node, finds the closest scrollable container node.
 *
 * @param {Element} node Node from which to start.
 *
 * @return {?Element} Scrollable container node, if found.
 */

function getScrollContainer(node) {
  if (!node) {
    return;
  } // Scrollable if scrollable height exceeds displayed...


  if (node.scrollHeight > node.clientHeight) {
    // ...except when overflow is defined to be hidden or visible
    var _getComputedStyle = getComputedStyle(node),
        overflowY = _getComputedStyle.overflowY;

    if (/(auto|scroll)/.test(overflowY)) {
      return node;
    }
  } // Continue traversing


  return getScrollContainer(node.parentNode);
}
/**
 * Returns the closest positioned element, or null under any of the conditions
 * of the offsetParent specification. Unlike offsetParent, this function is not
 * limited to HTMLElement and accepts any Node (e.g. Node.TEXT_NODE).
 *
 * @see https://drafts.csswg.org/cssom-view/#dom-htmlelement-offsetparent
 *
 * @param {Node} node Node from which to find offset parent.
 *
 * @return {?Node} Offset parent.
 */

function getOffsetParent(node) {
  // Cannot retrieve computed style or offset parent only anything other than
  // an element node, so find the closest element node.
  var closestElement;

  while (closestElement = node.parentNode) {
    if (closestElement.nodeType === closestElement.ELEMENT_NODE) {
      break;
    }
  }

  if (!closestElement) {
    return null;
  } // If the closest element is already positioned, return it, as offsetParent
  // does not otherwise consider the node itself.


  if (getComputedStyle(closestElement).position !== 'static') {
    return closestElement;
  }

  return closestElement.offsetParent;
}
/**
 * Given two DOM nodes, replaces the former with the latter in the DOM.
 *
 * @param {Element} processedNode Node to be removed.
 * @param {Element} newNode       Node to be inserted in its place.
 * @return {void}
 */

function replace(processedNode, newNode) {
  insertAfter(newNode, processedNode.parentNode);
  remove(processedNode);
}
/**
 * Given a DOM node, removes it from the DOM.
 *
 * @param {Element} node Node to be removed.
 * @return {void}
 */

function remove(node) {
  node.parentNode.removeChild(node);
}
/**
 * Given two DOM nodes, inserts the former in the DOM as the next sibling of
 * the latter.
 *
 * @param {Element} newNode       Node to be inserted.
 * @param {Element} referenceNode Node after which to perform the insertion.
 * @return {void}
 */

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
/**
 * Unwrap the given node. This means any child nodes are moved to the parent.
 *
 * @param {Node} node The node to unwrap.
 *
 * @return {void}
 */

function unwrap(node) {
  var parent = node.parentNode;

  while (node.firstChild) {
    parent.insertBefore(node.firstChild, node);
  }

  parent.removeChild(node);
}
/**
 * Replaces the given node with a new node with the given tag name.
 *
 * @param {Element}  node    The node to replace
 * @param {string}   tagName The new tag name.
 *
 * @return {Element} The new node.
 */

function replaceTag(node, tagName) {
  var newNode = node.ownerDocument.createElement(tagName);

  while (node.firstChild) {
    newNode.appendChild(node.firstChild);
  }

  node.parentNode.replaceChild(newNode, node);
  return newNode;
}
/**
 * Wraps the given node with a new node with the given tag name.
 *
 * @param {Element} newNode       The node to insert.
 * @param {Element} referenceNode The node to wrap.
 */

function wrap(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode);
  newNode.appendChild(referenceNode);
}
/**
 * Removes any HTML tags from the provided string.
 *
 * @param {string} html The string containing html.
 *
 * @return {string} The text content with any html removed.
 */

function __unstableStripHTML(html) {
  var document = new window.DOMParser().parseFromString(html, 'text/html');
  return document.body.textContent || '';
}
/**
 * Given a schema, unwraps or removes nodes, attributes and classes on a node
 * list.
 *
 * @param {NodeList} nodeList The nodeList to filter.
 * @param {Document} doc      The document of the nodeList.
 * @param {Object}   schema   An array of functions that can mutate with the provided node.
 * @param {Object}   inline   Whether to clean for inline mode.
 */

function cleanNodeList(nodeList, doc, schema, inline) {
  Array.from(nodeList).forEach(function (node) {
    var tag = node.nodeName.toLowerCase(); // It's a valid child, if the tag exists in the schema without an isMatch
    // function, or with an isMatch function that matches the node.

    if (schema.hasOwnProperty(tag) && (!schema[tag].isMatch || schema[tag].isMatch(node))) {
      if (node.nodeType === node.ELEMENT_NODE) {
        var _schema$tag = schema[tag],
            _schema$tag$attribute = _schema$tag.attributes,
            attributes = _schema$tag$attribute === void 0 ? [] : _schema$tag$attribute,
            _schema$tag$classes = _schema$tag.classes,
            classes = _schema$tag$classes === void 0 ? [] : _schema$tag$classes,
            children = _schema$tag.children,
            _schema$tag$require = _schema$tag.require,
            require = _schema$tag$require === void 0 ? [] : _schema$tag$require,
            allowEmpty = _schema$tag.allowEmpty; // If the node is empty and it's supposed to have children,
        // remove the node.


        if (children && !allowEmpty && isEmpty(node)) {
          remove(node);
          return;
        }

        if (node.hasAttributes()) {
          // Strip invalid attributes.
          Array.from(node.attributes).forEach(function (_ref) {
            var name = _ref.name;

            if (name !== 'class' && !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["includes"])(attributes, name)) {
              node.removeAttribute(name);
            }
          }); // Strip invalid classes.
          // In jsdom-jscore, 'node.classList' can be undefined.
          // TODO: Explore patching this in jsdom-jscore.

          if (node.classList && node.classList.length) {
            var mattchers = classes.map(function (item) {
              if (typeof item === 'string') {
                return function (className) {
                  return className === item;
                };
              } else if (item instanceof RegExp) {
                return function (className) {
                  return item.test(className);
                };
              }

              return lodash__WEBPACK_IMPORTED_MODULE_0__["noop"];
            });
            Array.from(node.classList).forEach(function (name) {
              if (!mattchers.some(function (isMatch) {
                return isMatch(name);
              })) {
                node.classList.remove(name);
              }
            });

            if (!node.classList.length) {
              node.removeAttribute('class');
            }
          }
        }

        if (node.hasChildNodes()) {
          // Do not filter any content.
          if (children === '*') {
            return;
          } // Continue if the node is supposed to have children.


          if (children) {
            // If a parent requires certain children, but it does
            // not have them, drop the parent and continue.
            if (require.length && !node.querySelector(require.join(','))) {
              cleanNodeList(node.childNodes, doc, schema, inline);
              unwrap(node); // If the node is at the top, phrasing content, and
              // contains children that are block content, unwrap
              // the node because it is invalid.
            } else if (node.parentNode.nodeName === 'BODY' && Object(_phrasing_content__WEBPACK_IMPORTED_MODULE_1__[/* isPhrasingContent */ "a"])(node)) {
              cleanNodeList(node.childNodes, doc, schema, inline);

              if (Array.from(node.childNodes).some(function (child) {
                return !Object(_phrasing_content__WEBPACK_IMPORTED_MODULE_1__[/* isPhrasingContent */ "a"])(child);
              })) {
                unwrap(node);
              }
            } else {
              cleanNodeList(node.childNodes, doc, children, inline);
            } // Remove children if the node is not supposed to have any.

          } else {
            while (node.firstChild) {
              remove(node.firstChild);
            }
          }
        }
      } // Invalid child. Continue with schema at the same place and unwrap.

    } else {
      cleanNodeList(node.childNodes, doc, schema, inline); // For inline mode, insert a line break when unwrapping nodes that
      // are not phrasing content.

      if (inline && !Object(_phrasing_content__WEBPACK_IMPORTED_MODULE_1__[/* isPhrasingContent */ "a"])(node) && node.nextElementSibling) {
        insertAfter(doc.createElement('br'), node);
      }

      unwrap(node);
    }
  });
}
/**
 * Recursively checks if an element is empty. An element is not empty if it
 * contains text or contains elements with attributes such as images.
 *
 * @param {Element} element The element to check.
 *
 * @return {boolean} Wether or not the element is empty.
 */


function isEmpty(element) {
  if (!element.hasChildNodes()) {
    return true;
  }

  return Array.from(element.childNodes).every(function (node) {
    if (node.nodeType === node.TEXT_NODE) {
      return !node.nodeValue.trim();
    }

    if (node.nodeType === node.ELEMENT_NODE) {
      if (node.nodeName === 'BR') {
        return true;
      } else if (node.hasAttributes()) {
        return false;
      }

      return isEmpty(node);
    }

    return true;
  });
}
/**
 * Given a schema, unwraps or removes nodes, attributes and classes on HTML.
 *
 * @param {string} HTML   The HTML to clean up.
 * @param {Object} schema Schema for the HTML.
 * @param {Object} inline Whether to clean for inline mode.
 *
 * @return {string} The cleaned up HTML.
 */

function removeInvalidHTML(HTML, schema, inline) {
  var doc = document.implementation.createHTMLDocument('');
  doc.body.innerHTML = HTML;
  cleanNodeList(doc.body.childNodes, doc, schema, inline);
  return doc.body.innerHTML;
}
//# sourceMappingURL=dom.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(136);
/* harmony import */ var _shortcut__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(135);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
 * Time over children to wait before showing tooltip
 *
 * @type {number}
 */

var TOOLTIP_DELAY = 700;

var Tooltip = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Tooltip, _Component);

  var _super = _createSuper(Tooltip);

  function Tooltip() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Tooltip);

    _this = _super.apply(this, arguments);
    _this.delayedSetIsOver = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["debounce"])(function (isOver) {
      return _this.setState({
        isOver: isOver
      });
    }, TOOLTIP_DELAY);
    /**
     * Prebound `isInMouseDown` handler, created as a constant reference to
     * assure ability to remove in component unmount.
     *
     * @type {Function}
     */

    _this.cancelIsMouseDown = _this.createSetIsMouseDown(false);
    /**
     * Whether a the mouse is currently pressed, used in determining whether
     * to handle a focus event as displaying the tooltip immediately.
     *
     * @type {boolean}
     */

    _this.isInMouseDown = false;
    _this.state = {
      isOver: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Tooltip, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.delayedSetIsOver.cancel();
      document.removeEventListener('mouseup', this.cancelIsMouseDown);
    }
  }, {
    key: "emitToChild",
    value: function emitToChild(eventName, event) {
      var children = this.props.children;

      if (_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Children"].count(children) !== 1) {
        return;
      }

      var child = _wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Children"].only(children);

      if (typeof child.props[eventName] === 'function') {
        child.props[eventName](event);
      }
    }
  }, {
    key: "createToggleIsOver",
    value: function createToggleIsOver(eventName, isDelayed) {
      var _this2 = this;

      return function (event) {
        // Preserve original child callback behavior
        _this2.emitToChild(eventName, event); // Mouse events behave unreliably in React for disabled elements,
        // firing on mouseenter but not mouseleave.  Further, the default
        // behavior for disabled elements in some browsers is to ignore
        // mouse events. Don't bother trying to to handle them.
        //
        // See: https://github.com/facebook/react/issues/4251


        if (event.currentTarget.disabled) {
          return;
        } // A focus event will occur as a result of a mouse click, but it
        // should be disambiguated between interacting with the button and
        // using an explicit focus shift as a cue to display the tooltip.


        if ('focus' === event.type && _this2.isInMouseDown) {
          return;
        } // Needed in case unsetting is over while delayed set pending, i.e.
        // quickly blur/mouseleave before delayedSetIsOver is called


        _this2.delayedSetIsOver.cancel();

        var isOver = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["includes"])(['focus', 'mouseenter'], event.type);

        if (isOver === _this2.state.isOver) {
          return;
        }

        if (isDelayed) {
          _this2.delayedSetIsOver(isOver);
        } else {
          _this2.setState({
            isOver: isOver
          });
        }
      };
    }
    /**
     * Creates an event callback to handle assignment of the `isInMouseDown`
     * instance property in response to a `mousedown` or `mouseup` event.
     *
     * @param {boolean} isMouseDown Whether handler is to be created for the
     *                              `mousedown` event, as opposed to `mouseup`.
     *
     * @return {Function} Event callback handler.
     */

  }, {
    key: "createSetIsMouseDown",
    value: function createSetIsMouseDown(isMouseDown) {
      var _this3 = this;

      return function (event) {
        // Preserve original child callback behavior
        _this3.emitToChild(isMouseDown ? 'onMouseDown' : 'onMouseUp', event); // On mouse down, the next `mouseup` should revert the value of the
        // instance property and remove its own event handler. The bind is
        // made on the document since the `mouseup` might not occur within
        // the bounds of the element.


        document[isMouseDown ? 'addEventListener' : 'removeEventListener']('mouseup', _this3.cancelIsMouseDown);
        _this3.isInMouseDown = isMouseDown;
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          position = _this$props.position,
          text = _this$props.text,
          shortcut = _this$props.shortcut;

      if (_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Children"].count(children) !== 1) {
        if (false) {}

        return children;
      }

      var child = _wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Children"].only(children);
      var isOver = this.state.isOver;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["cloneElement"])(child, {
        onMouseEnter: this.createToggleIsOver('onMouseEnter', true),
        onMouseLeave: this.createToggleIsOver('onMouseLeave'),
        onClick: this.createToggleIsOver('onClick'),
        onFocus: this.createToggleIsOver('onFocus'),
        onBlur: this.createToggleIsOver('onBlur'),
        onMouseDown: this.createSetIsMouseDown(true),
        children: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["concatChildren"])(child.props.children, isOver && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_popover__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
          focusOnMount: false,
          position: position,
          className: "components-tooltip",
          "aria-hidden": "true",
          animate: false,
          noArrow: true
        }, text, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_shortcut__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
          className: "components-tooltip__shortcut",
          shortcut: shortcut
        })))
      });
    }
  }]);

  return Tooltip;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Tooltip);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// TinyColor v1.4.2
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if ( true && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (typeof define === 'function' && define.amd) {
    define(function () {return tinycolor;});
}
// Browser: Expose to window
else {
    window.tinycolor = tinycolor;
}

})(Math);


/***/ }),

/***/ 162:
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

/***/ 17:
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(162);

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

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(48);

var assertThisInitialized = __webpack_require__(11);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js + 1 modules
var styled_base_browser_esm = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(51);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/text/styles/font-family.js
var fontFamily = "font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\nOxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;";
//# sourceMappingURL=font-family.js.map
// EXTERNAL MODULE: ./node_modules/@emotion/core/dist/core.browser.esm.js + 6 modules
var core_browser_esm = __webpack_require__(67);

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

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useCardContext; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

var CardContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
var useCardContext = function useCardContext() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useContext"])(CardContext);
};
//# sourceMappingURL=context.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ CardUI; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ HeaderUI; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ BodyUI; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ FooterUI; });

// UNUSED EXPORTS: styleProps, MediaUI, DividerUI, bodySize, headerFooterSizes, handleBorderless, handleShady

// EXTERNAL MODULE: ./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js + 1 modules
var styled_base_browser_esm = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/@wordpress/primitives/build-module/horizontal-rule/index.js
var horizontal_rule = __webpack_require__(557);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/flex/index.js
var flex = __webpack_require__(301);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/utils/colors.js
var colors = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/utils/space.js
var SPACE_GRID_BASE = 8;
/**
 * Creates a spacing CSS value (px) based on grid system values.
 *
 * @param {number} value Multiplier against the grid base value (8)
 * @return {string} The spacing value (px).
 */

function space() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  if (isNaN(value)) return "".concat(SPACE_GRID_BASE, "px");
  return "".concat(SPACE_GRID_BASE * value, "px");
}
//# sourceMappingURL=space.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/card/styles/card-styles.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



var styleProps = {
  borderColor: Object(colors["a" /* color */])('lightGray.500'),
  borderRadius: '3px',
  backgroundShady: Object(colors["a" /* color */])('lightGray.200')
};
var borderColor = styleProps.borderColor,
    borderRadius = styleProps.borderRadius,
    backgroundShady = styleProps.backgroundShady;
var CardUI = Object(styled_base_browser_esm["a" /* default */])("div", {
  target: "e1q7k77g0",
  label: "CardUI"
})("background:", Object(colors["a" /* color */])('white'), ";box-sizing:border-box;border-radius:", borderRadius, ";border:1px solid ", borderColor, ";", handleBorderless, ";&.is-elevated{box-shadow:0px 1px 3px 0px rgba( 0,0,0,0.2 ),0px 1px 1px 0px rgba( 0,0,0,0.14 ),0px 2px 1px -1px rgba( 0,0,0,0.12 );}" + ( true ? "" : undefined));
var HeaderUI = /*#__PURE__*/Object(styled_base_browser_esm["a" /* default */])(flex["a" /* default */], {
  target: "e1q7k77g1",
  label: "HeaderUI"
})("border-bottom:1px solid ", borderColor, ";border-top-left-radius:", borderRadius, ";border-top-right-radius:", borderRadius, ";box-sizing:border-box;&:last-child{border-bottom:none;}", headerFooterSizes, ";", handleBorderless, ";", handleShady, ";" + ( true ? "" : undefined));
var MediaUI = Object(styled_base_browser_esm["a" /* default */])("div", {
  target: "e1q7k77g2",
  label: "MediaUI"
})("box-sizing:border-box;overflow:hidden;& > img,& > iframe{display:block;height:auto;max-width:100%;width:100%;}&:first-of-type{border-top-left-radius:", borderRadius, ";border-top-right-radius:", borderRadius, ";}&:last-of-type{border-bottom-left-radius:", borderRadius, ";border-bottom-right-radius:", borderRadius, ";}" + ( true ? "" : undefined));
var BodyUI = Object(styled_base_browser_esm["a" /* default */])("div", {
  target: "e1q7k77g3",
  label: "BodyUI"
})("box-sizing:border-box;", bodySize, ";", handleShady, ";" + ( true ? "" : undefined));
var FooterUI = /*#__PURE__*/Object(styled_base_browser_esm["a" /* default */])(flex["a" /* default */], {
  target: "e1q7k77g4",
  label: "FooterUI"
})("border-top:1px solid ", borderColor, ";border-bottom-left-radius:", borderRadius, ";border-bottom-right-radius:", borderRadius, ";box-sizing:border-box;&:first-of-type{border-top:none;}", headerFooterSizes, ";", handleBorderless, ";", handleShady, ";" + ( true ? "" : undefined));
var DividerUI = /*#__PURE__*/Object(styled_base_browser_esm["a" /* default */])(horizontal_rule["a" /* HorizontalRule */], {
  target: "e1q7k77g5",
  label: "DividerUI"
})("all:unset;border-top:1px solid ", borderColor, ";box-sizing:border-box;display:block;height:0;width:100%;" + ( true ? "" : undefined));
function bodySize() {
  return "\n\t\t&.is-size {\n\t\t\t&-large {\n\t\t\t\tpadding: ".concat(space(3), " ").concat(space(4), ";\n\t\t\t}\n\t\t\t&-medium {\n\t\t\t\tpadding: ").concat(space(2), " ").concat(space(3), ";\n\t\t\t}\n\t\t\t&-small {\n\t\t\t\tpadding: ").concat(space(2), ";\n\t\t\t}\n\t\t\t&-extraSmall {\n\t\t\t\tpadding: ").concat(space(1), ";\n\t\t\t}\n\t\t}\n\t");
}
function headerFooterSizes() {
  return "\n\t\t&.is-size {\n\t\t\t&-large {\n\t\t\t\tpadding: ".concat(space(3), " ").concat(space(4), ";\n\t\t\t}\n\t\t\t&-medium {\n\t\t\t\tpadding: ").concat(space(2), " ").concat(space(3), ";\n\t\t\t}\n\t\t\t&-small {\n\t\t\t\tpadding: ").concat(space(2), ";\n\t\t\t}\n\t\t\t&-extraSmall {\n\t\t\t\tpadding: ").concat(space(1), ";\n\t\t\t}\n\t\t}\n\t");
}
function handleBorderless() {
  return "\n\t\t&.is-borderless {\n\t\t\tborder: none;\n\t\t}\n\t";
}
function handleShady() {
  return "\n\t\t&.is-shady {\n\t\t\tbackground: ".concat(backgroundShady, ";\n\t\t}\n\t");
}
//# sourceMappingURL=card-styles.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(724);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(558);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(190);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(725);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(552);
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
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(className, 'woocommerce-admin-marketing-card')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    variant: "title.small"
  }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    variant: "subtitle.small",
    className: "woocommerce-admin-marketing-card-subtitle"
  }, description))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, children));
};

Card.propTypes = {
  /**
   * Card title.
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * Card description.
   */
  description: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * Additional class name to style the component.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * A renderable component (or string) which will be displayed as the content of this item. Generally a `ToggleControl`.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node
};
/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var React = __webpack_require__(6);

var REACT_ELEMENT_TYPE =
  (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element')) ||
  0xeac7;

var emptyFunction = __webpack_require__(153);
var invariant = __webpack_require__(211);
var warning = __webpack_require__(212);

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

/***/ 211:
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

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(153);

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

/***/ 213:
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

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
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

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _inherits; });

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(self);
}

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _slicedToArray; });

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(68);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || Object(unsupportedIterableToArray["a" /* default */])(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _toConsumableArray; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__(59);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(arrayLikeToArray["a" /* default */])(arr);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(68);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || Object(unsupportedIterableToArray["a" /* default */])(arr) || _nonIterableSpread();
}

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Composes multiple higher-order components into a single higher-order component. Performs right-to-left function
 * composition, where each successive invocation is supplied the return value of the previous.
 *
 * @param {...Function} hocs The HOC functions to invoke.
 *
 * @return {Function} Returns the new composite function.
 */

/* harmony default export */ __webpack_exports__["a"] = (lodash__WEBPACK_IMPORTED_MODULE_0__["flowRight"]);
//# sourceMappingURL=compose.js.map

/***/ }),

/***/ 279:
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
var helpers_extends = __webpack_require__(38);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./client/marketing/components/button/style.scss
var button_style = __webpack_require__(551);

// CONCATENATED MODULE: ./client/marketing/components/button/index.js



/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/* harmony default export */ var components_button = (function (props) {
  return Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], extends_default()({}, props, {
    className: classnames_default()(props.className, 'woocommerce-admin-marketing-button')
  }));
});
// EXTERNAL MODULE: ./client/marketing/components/card/index.js
var card = __webpack_require__(194);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(17);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(15);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(18);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(19);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__(570);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: ./client/marketing/components/product-icon/style.scss
var product_icon_style = __webpack_require__(553);

// EXTERNAL MODULE: ./node_modules/@wordpress/primitives/build-module/svg/index.js
var svg = __webpack_require__(88);

// CONCATENATED MODULE: ./client/marketing/components/product-icon/icons/library/blank.js


/**
 * External dependencies
 */

var blank = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
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

var amazonEbay = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  viewBox: "0 0 100 100"
}, Object(external_this_wp_element_["createElement"])("defs", null, Object(external_this_wp_element_["createElement"])("clipPath", {
  id: "b"
}, Object(external_this_wp_element_["createElement"])("rect", {
  width: "100",
  height: "100"
}))), Object(external_this_wp_element_["createElement"])("g", {
  id: "a",
  clipPath: "url(#b)"
}, Object(external_this_wp_element_["createElement"])("rect", {
  width: "100",
  height: "100",
  fill: "#fff"
}), Object(external_this_wp_element_["createElement"])("rect", {
  width: "100",
  height: "100",
  fill: "#eee"
}), Object(external_this_wp_element_["createElement"])("g", {
  transform: "translate(9 25.655)"
}, Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M179.753,195.8c-4.732,3.488-11.591,5.349-17.5,5.349a31.66,31.66,0,0,1-21.374-8.156c-.443-.4-.046-.946.486-.634a43.018,43.018,0,0,0,21.384,5.671,42.523,42.523,0,0,0,16.312-3.335c.8-.34,1.471.525.688,1.106",
  transform: "translate(-129.235 -176.611)",
  fill: "#f90",
  fillRule: "evenodd"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M577.807,183.949c-.6-.773-4-.365-5.522-.184-.464.057-.535-.347-.117-.638,2.7-1.9,7.142-1.354,7.66-.716s-.135,5.09-2.676,7.213c-.39.326-.762.152-.588-.28.571-1.425,1.85-4.619,1.244-5.395",
  transform: "translate(-525.323 -167.01)",
  fill: "#f90",
  fillRule: "evenodd"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M572.708,6.758V4.908a.457.457,0,0,1,.468-.468h8.284a.461.461,0,0,1,.479.468V6.493a2.605,2.605,0,0,1-.624,1.163l-4.292,6.129a9.146,9.146,0,0,1,4.725,1.014.843.843,0,0,1,.44.72v1.974c0,.269-.3.585-.61.422a9.542,9.542,0,0,0-8.752.014c-.287.156-.588-.156-.588-.425V15.627a2.238,2.238,0,0,1,.3-1.272l4.973-7.132h-4.328a.458.458,0,0,1-.479-.464",
  transform: "translate(-525.64 -4.078)",
  fillRule: "evenodd"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M173.431,15.624h-2.52a.476.476,0,0,1-.45-.429V2.261a.473.473,0,0,1,.486-.464h2.35a.475.475,0,0,1,.457.432V3.92h.046a3.463,3.463,0,0,1,6.589,0,3.722,3.722,0,0,1,6.4-.982c.8,1.088.634,2.669.634,4.055l0,8.163a.476.476,0,0,1-.486.468h-2.517a.479.479,0,0,1-.454-.468V8.3a16.192,16.192,0,0,0-.071-2.424,1.312,1.312,0,0,0-1.482-1.113,1.674,1.674,0,0,0-1.506,1.06,7.831,7.831,0,0,0-.234,2.478v6.855a.476.476,0,0,1-.486.468h-2.517a.476.476,0,0,1-.454-.468l0-6.855c0-1.443.238-3.566-1.553-3.566-1.811,0-1.74,2.07-1.74,3.566v6.855a.476.476,0,0,1-.486.468",
  transform: "translate(-156.58 -1.399)",
  fillRule: "evenodd"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M714.982,1.524c3.739,0,5.763,3.211,5.763,7.295,0,3.945-2.237,7.075-5.763,7.075-3.672,0-5.671-3.211-5.671-7.213,0-4.027,2.024-7.156,5.671-7.156M715,4.164c-1.857,0-1.974,2.531-1.974,4.108s-.025,4.955,1.953,4.955c1.953,0,2.045-2.722,2.045-4.381a11.959,11.959,0,0,0-.376-3.431A1.577,1.577,0,0,0,715,4.164",
  transform: "translate(-651.552 -1.399)",
  fillRule: "evenodd"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M875.817,15.624h-2.51a.479.479,0,0,1-.454-.468l0-12.938a.477.477,0,0,1,.486-.422h2.336a.482.482,0,0,1,.45.362V4.136h.046c.705-1.769,1.694-2.612,3.435-2.612a3.307,3.307,0,0,1,2.942,1.524c.659,1.035.659,2.775.659,4.027v8.142a.484.484,0,0,1-.486.408h-2.527a.477.477,0,0,1-.447-.408V8.191c0-1.414.163-3.484-1.577-3.484a1.647,1.647,0,0,0-1.457,1.035,5.724,5.724,0,0,0-.4,2.449v6.965a.485.485,0,0,1-.493.468",
  transform: "translate(-801.775 -1.399)",
  fillRule: "evenodd"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M413.163,8.046a4.93,4.93,0,0,1-.471,2.673,2.048,2.048,0,0,1-1.744,1.145c-.968,0-1.535-.737-1.535-1.825,0-2.148,1.925-2.538,3.75-2.538v.546m2.541,6.143a.526.526,0,0,1-.6.06,6.143,6.143,0,0,1-1.446-1.68,4.991,4.991,0,0,1-4.154,1.833,3.575,3.575,0,0,1-3.771-3.927,4.277,4.277,0,0,1,2.687-4.119,17.463,17.463,0,0,1,4.739-.876V5.154a3.214,3.214,0,0,0-.308-1.825,1.677,1.677,0,0,0-1.414-.656,1.917,1.917,0,0,0-2.024,1.514.527.527,0,0,1-.439.461l-2.442-.262a.444.444,0,0,1-.376-.528C406.719.893,409.4,0,411.795,0a5.714,5.714,0,0,1,3.8,1.255C416.818,2.4,416.7,3.928,416.7,5.59V9.517a3.447,3.447,0,0,0,.95,2.336.477.477,0,0,1-.011.67c-.514.429-1.428,1.226-1.932,1.673l0-.007",
  transform: "translate(-372.698 0)",
  fillRule: "evenodd"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M7.426,8.046a4.93,4.93,0,0,1-.471,2.673,2.043,2.043,0,0,1-1.744,1.145c-.968,0-1.531-.737-1.531-1.825C3.679,7.89,5.6,7.5,7.426,7.5v.546m2.541,6.143a.526.526,0,0,1-.6.06,6.2,6.2,0,0,1-1.446-1.68A4.986,4.986,0,0,1,3.771,14.4,3.576,3.576,0,0,1,0,10.474,4.282,4.282,0,0,1,2.687,6.356,17.462,17.462,0,0,1,7.426,5.48V5.154a3.243,3.243,0,0,0-.3-1.825,1.686,1.686,0,0,0-1.414-.656A1.921,1.921,0,0,0,3.679,4.186a.527.527,0,0,1-.436.461L.8,4.385a.446.446,0,0,1-.376-.528C.985.893,3.662,0,6.058,0a5.714,5.714,0,0,1,3.8,1.255C11.08,2.4,10.963,3.928,10.963,5.59V9.517a3.447,3.447,0,0,0,.95,2.336.473.473,0,0,1-.007.67c-.514.429-1.428,1.226-1.932,1.673l-.007-.007",
  transform: "translate(0 0)",
  fillRule: "evenodd"
})), Object(external_this_wp_element_["createElement"])("g", {
  transform: "translate(18.9 54.637)"
}, Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M8.055,26.308C3.716,26.308.1,28.149.1,33.7c0,4.4,2.431,7.171,8.067,7.171,6.633,0,7.059-4.37,7.059-4.37H12.011s-.689,2.353-4.04,2.353a4.4,4.4,0,0,1-4.693-4.428H15.562V32.807c0-2.557-1.623-6.5-7.507-6.5Zm-.112,2.073c2.6,0,4.37,1.592,4.37,3.977H3.349C3.349,29.826,5.661,28.381,7.943,28.381Z",
  transform: "translate(0 -20.83)",
  fill: "#e53238"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M75.169.1V17.254c0,.974-.069,2.341-.069,2.341h3.066s.11-.982.11-1.879c0,0,1.515,2.37,5.633,2.37a6.961,6.961,0,0,0,7.283-7.325A6.922,6.922,0,0,0,83.915,5.52c-4.279,0-5.609,2.311-5.609,2.311V.1Zm7.955,7.542c2.945,0,4.818,2.186,4.818,5.119a4.857,4.857,0,0,1-4.8,5.2c-3.143,0-4.839-2.454-4.839-5.175C78.306,10.254,79.827,7.642,83.123,7.642Z",
  transform: "translate(-59.609)",
  fill: "#0064d2"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M159.834,26.308c-6.528,0-6.947,3.574-6.947,4.146h3.249s.17-2.087,3.473-2.087c2.146,0,3.809.982,3.809,2.871v.672h-3.809c-5.057,0-7.731,1.479-7.731,4.482,0,2.955,2.47,4.562,5.809,4.562,4.55,0,6.015-2.514,6.015-2.514,0,1,.077,1.985.077,1.985h2.888s-.112-1.221-.112-2V31.669c0-4.428-3.572-5.36-6.722-5.36Zm3.585,7.619v.9c0,1.169-.721,4.075-4.968,4.075-2.326,0-3.323-1.161-3.323-2.507C155.128,33.943,158.486,33.927,163.419,33.927Z",
  transform: "translate(-120.634 -20.83)",
  fill: "#f5af02"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M214.879,29.041h3.655l5.246,10.51,5.234-10.51h3.311l-9.533,18.711h-3.473l2.751-5.216Z",
  transform: "translate(-170.706 -23.002)",
  fill: "#86b817"
}))));
/* harmony default export */ var amazon_ebay = (amazonEbay);
// CONCATENATED MODULE: ./client/marketing/components/product-icon/icons/library/automatewoo.js


/**
 * External dependencies
 */

var automatewoo = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  viewBox: "0 0 100 100"
}, Object(external_this_wp_element_["createElement"])("defs", null, Object(external_this_wp_element_["createElement"])("clipPath", {
  id: "b"
}, Object(external_this_wp_element_["createElement"])("rect", {
  width: "100",
  height: "100"
}))), Object(external_this_wp_element_["createElement"])("g", {
  id: "a",
  clipPath: "url(#b)"
}, Object(external_this_wp_element_["createElement"])("rect", {
  width: "100",
  height: "100",
  fill: "#fff"
}), Object(external_this_wp_element_["createElement"])("rect", {
  width: "100",
  height: "100",
  fill: "#7532e4"
}), Object(external_this_wp_element_["createElement"])("g", {
  transform: "translate(-43.503 -133.512)"
}, Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M78.217,193.13H64.405l-2.823,7.764H54.6L67.648,166.9h7.669l12.934,33.995H81.059Zm-11.6-6.047h9.4L71.33,174.245Z",
  transform: "translate(0 0)",
  fill: "#1ff2e6"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M246.639,166.9h6.753l-9.4,33.995h-6.81l-7.764-24.208-7.764,24.208h-6.906L205.3,166.9h7l6.238,23.388,7.535-23.388h6.849l7.592,23.483Z",
  transform: "translate(-121.952)",
  fill: "#1ff2e6"
}))));
/* harmony default export */ var library_automatewoo = (automatewoo);
// CONCATENATED MODULE: ./client/marketing/components/product-icon/icons/library/automatewoo-alt.js


/**
 * External dependencies
 */

var automatewooAlt = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M4.67708 14.1615h3.77084l.77604 2.1198h1.96354L7.65625 7H5.5625L2 16.2813h1.90625l.77083-2.1198zm3.17188-1.6511H5.28125l1.28646-3.50519 1.28125 3.50519zM22.9791 7h-1.8437l-1.6719 6.4115L17.3906 7h-1.8698l-2.0573 6.3854L11.7604 7H9.8489l2.5781 9.2813h1.8854l2.1198-6.60942 2.1198 6.60942h1.8594L22.9791 7z"
}));
/* harmony default export */ var automatewoo_alt = (automatewooAlt);
// CONCATENATED MODULE: ./client/marketing/components/product-icon/icons/library/facebook.js


/**
 * External dependencies
 */

var facebook = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  width: "36",
  height: "36",
  viewBox: "0 0 36 36",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
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

var google = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  viewBox: "0 0 100 100"
}, Object(external_this_wp_element_["createElement"])("defs", null, Object(external_this_wp_element_["createElement"])("clipPath", {
  id: "b"
}, Object(external_this_wp_element_["createElement"])("rect", {
  width: "100",
  height: "100"
}))), Object(external_this_wp_element_["createElement"])("g", {
  id: "a",
  clipPath: "url(#b)"
}, Object(external_this_wp_element_["createElement"])("rect", {
  width: "100",
  height: "100",
  fill: "#fff"
}), Object(external_this_wp_element_["createElement"])("rect", {
  width: "100",
  height: "100",
  fill: "#eee"
}), Object(external_this_wp_element_["createElement"])("g", {
  transform: "translate(17 7.967)"
}, Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M83.982,7.646a11.959,11.959,0,0,1,2.825-4.477,11.065,11.065,0,0,1,17.4,2.585c2.665,4.851,5.49,9.594,8.235,14.392,4.584,7.969,9.221,15.937,13.752,23.933a11.017,11.017,0,1,1-19.269,10.687q-6.037-10.514-12.1-21a2.415,2.415,0,0,0-.293-.426,4.336,4.336,0,0,1-.88-1.306c-1.786-3.145-3.625-6.263-5.41-9.381C87.1,20.626,85.9,18.627,84.755,16.6a11.036,11.036,0,0,1-1.466-5.863,8.171,8.171,0,0,1,.693-3.092",
  transform: "translate(-61.088 0)",
  fill: "#3c8bd9"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M31.255,28.6a15.329,15.329,0,0,0-.506,2.932,11.513,11.513,0,0,0,1.6,6.263q4.4,7.556,8.768,15.165c.267.453.48.906.746,1.333-1.6,2.772-3.2,5.517-4.824,8.289C34.8,66.445,32.561,70.336,30.3,74.2c-.107,0-.133-.053-.16-.133a1.652,1.652,0,0,1,.107-.613,10.727,10.727,0,0,0-2.559-10.581,10.157,10.157,0,0,0-6.263-3.225,10.816,10.816,0,0,0-8.555,2.372c-.453.346-.746.853-1.279,1.119a.178.178,0,0,1-.187-.133c1.279-2.212,2.532-4.424,3.811-6.636q7.915-13.752,15.858-27.478c.053-.107.133-.187.187-.293",
  transform: "translate(-8.362 -20.954)",
  fill: "#fabc04"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M4.173,147.8c.506-.453.986-.933,1.519-1.359a11.016,11.016,0,0,1,17.617,6.689,11.714,11.714,0,0,1-.426,5.677,2.788,2.788,0,0,1-.107.453c-.24.426-.453.88-.72,1.306a10.715,10.715,0,0,1-10.447,5.57,10.94,10.94,0,0,1-10.1-9.541A10.663,10.663,0,0,1,2.974,149.5c.267-.48.586-.906.879-1.386.133-.107.08-.32.32-.32",
  transform: "translate(-1.029 -105.664)",
  fill: "#34a852"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M10.982,157.707c-.107.107-.107.293-.293.32-.027-.187.08-.293.187-.426l.107.107",
  transform: "translate(-7.837 -115.573)",
  fill: "#fabc04"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M81.478,199.753c-.107-.187,0-.32.107-.453l.107.107-.213.346",
  transform: "translate(-59.731 -146.16)",
  fill: "#e1c025"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M5.517,260.4a5.4,5.4,0,1,0,0,10.794A4.974,4.974,0,0,0,9.3,269.675a5.3,5.3,0,0,0,1.2-4.371H5.517v1.466H9.061a3.1,3.1,0,0,1-.8,1.866,3.672,3.672,0,0,1-2.745,1.093,3.918,3.918,0,0,1,0-7.836,3.661,3.661,0,0,1,2.665,1.066l1.039-1.039A5.116,5.116,0,0,0,5.517,260.4Zm9.035,3.864a3.518,3.518,0,1,0,3.465,3.518,3.437,3.437,0,0,0-3.465-3.518m0,5.65a2.141,2.141,0,1,1,1.946-2.132,2.021,2.021,0,0,1-1.946,2.132m7.516-5.65a3.518,3.518,0,1,0,3.465,3.518,3.421,3.421,0,0,0-3.465-3.518m0,5.65a2.141,2.141,0,1,1,1.946-2.132,2.021,2.021,0,0,1-1.946,2.132m7.489-5.65a3.483,3.483,0,0,0,0,6.956,2.329,2.329,0,0,0,1.812-.8h.053v.506c0,1.333-.693,2.052-1.839,2.052a1.9,1.9,0,0,1-1.732-1.226l-1.333.56a3.268,3.268,0,0,0,3.065,2.052c1.786,0,3.278-1.066,3.278-3.625V264.5H31.422v.56h-.053a2.329,2.329,0,0,0-1.812-.8m.133,5.6a1.992,1.992,0,0,1-1.919-2.105,2.017,2.017,0,0,1,1.919-2.132,1.957,1.957,0,0,1,1.839,2.132,1.932,1.932,0,0,1-1.839,2.105m4.291-9.035H35.5v10.287H33.98Zm5.6,3.438a3.346,3.346,0,0,0-3.331,3.518,3.443,3.443,0,0,0,3.491,3.518,3.485,3.485,0,0,0,2.932-1.546l-1.2-.8a2.014,2.014,0,0,1-1.732.959,1.745,1.745,0,0,1-1.706-1.066l4.717-1.946-.16-.4a3.3,3.3,0,0,0-3.012-2.239m-1.812,3.411a1.93,1.93,0,0,1,1.839-2.052,1.329,1.329,0,0,1,1.306.746Z",
  transform: "translate(0 -190.976)",
  fill: "#757575"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M170.4,274.255l3.518-9.355h1.359l3.518,9.355h-1.333l-.906-2.532h-3.918l-.906,2.532Zm2.638-3.651h3.118l-1.519-4.211h-.053Z",
  transform: "translate(-124.986 -194.277)",
  fill: "#757575"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M204.079,273.482a3.528,3.528,0,0,1-.879-2.425,3.623,3.623,0,0,1,.879-2.425,2.792,2.792,0,0,1,2.159-.986,2.827,2.827,0,0,1,1.279.293,2.219,2.219,0,0,1,.906.8h.053l-.053-.879V264.9h1.2v9.355h-1.146v-.879h-.053a2.427,2.427,0,0,1-.906.8,2.654,2.654,0,0,1-1.279.293,2.754,2.754,0,0,1-2.159-.986m3.785-.746a2.659,2.659,0,0,0,0-3.331,1.939,1.939,0,0,0-2.878,0,2.621,2.621,0,0,0,0,3.3,1.9,1.9,0,0,0,1.439.64,1.724,1.724,0,0,0,1.439-.613",
  transform: "translate(-149.044 -194.277)",
  fill: "#757575"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M235.484,281.436a3.152,3.152,0,0,1-3.545.08,2.854,2.854,0,0,1-1.039-1.333l1.066-.453a1.976,1.976,0,0,0,.693.906,1.675,1.675,0,0,0,.986.32,1.831,1.831,0,0,0,.959-.24.677.677,0,0,0,.373-.586c0-.4-.32-.72-.933-.906l-1.093-.267c-1.253-.32-1.866-.906-1.866-1.812a1.7,1.7,0,0,1,.72-1.413,3.041,3.041,0,0,1,1.812-.533,3.108,3.108,0,0,1,1.546.4,2.24,2.24,0,0,1,.959,1.093l-1.066.453a1.506,1.506,0,0,0-.586-.64,1.8,1.8,0,0,0-.933-.24,1.585,1.585,0,0,0-.853.24.7.7,0,0,0-.373.586c0,.373.346.64,1.039.773l.959.24c1.279.32,1.892.959,1.892,1.919a1.662,1.662,0,0,1-.72,1.413",
  transform: "translate(-169.362 -201.831)",
  fill: "#757575"
}))));
/* harmony default export */ var library_google = (google);
// CONCATENATED MODULE: ./client/marketing/components/product-icon/icons/library/hubspot.js


/**
 * External dependencies
 */

var hubspot = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  viewBox: "0 0 100 100"
}, Object(external_this_wp_element_["createElement"])("defs", null, Object(external_this_wp_element_["createElement"])("clipPath", {
  id: "b"
}, Object(external_this_wp_element_["createElement"])("rect", {
  width: "100",
  height: "100"
}))), Object(external_this_wp_element_["createElement"])("g", {
  id: "a",
  clipPath: "url(#b)"
}, Object(external_this_wp_element_["createElement"])("rect", {
  width: "100",
  height: "100",
  fill: "#fff"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M100,100H0V0H100V100ZM40.665,75.539a6.446,6.446,0,1,0,6.447,6.447,6.376,6.376,0,0,0-.3-1.843L54.158,72.8A19.808,19.808,0,1,0,69.206,37.48h.015V28.455a6.959,6.959,0,0,0,4.013-6.273v-.211a6.971,6.971,0,0,0-6.952-6.953H66.07a6.97,6.97,0,0,0-6.952,6.953v.211a6.957,6.957,0,0,0,4.013,6.273V37.5a19.745,19.745,0,0,0-9.376,4.126L28.935,22.295a7.919,7.919,0,0,0-4.148-9.145,7.845,7.845,0,0,0-3.5-.817,7.919,7.919,0,1,0,3.938,14.786l24.4,19a19.775,19.775,0,0,0,.3,22.3l-7.426,7.427A6.362,6.362,0,0,0,40.665,75.539Zm25.522-8.321h0l-.023,0a10.164,10.164,0,0,1,.023-20.328H66.2a10.166,10.166,0,0,1-.012,20.333Z",
  fill: "#ff7a59"
})));
/* harmony default export */ var library_hubspot = (hubspot);
// CONCATENATED MODULE: ./client/marketing/components/product-icon/icons/library/mailchimp.js


/**
 * External dependencies
 */

var mailchimp = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  width: "36",
  height: "36",
  viewBox: "0 0 36 36",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])("rect", {
  width: "36",
  height: "36",
  rx: "3",
  fill: "#FFE071"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M24.0534 17.2863C24.2392 17.2638 24.4176 17.2625 24.5813 17.2863C24.6764 17.0647 24.6923 16.6823 24.6071 16.2661C24.4808 15.6471 24.3091 15.2728 23.9546 15.331C23.6002 15.3892 23.5873 15.8374 23.7143 16.4564C23.7848 16.8043 23.9117 17.1023 24.0534 17.2863Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M21.0119 17.7757C21.2652 17.8889 21.4209 17.9647 21.4823 17.899C21.5215 17.8576 21.5099 17.7794 21.4491 17.6786C21.3241 17.4702 21.0665 17.2587 20.7937 17.1404C20.2357 16.895 19.5697 16.9764 19.0559 17.3532C18.886 17.4802 18.7254 17.6555 18.7487 17.7625C18.756 17.7969 18.7812 17.8232 18.8413 17.8314C18.9811 17.8476 19.4698 17.5954 20.0321 17.5603C20.4294 17.5353 20.7587 17.6624 21.0119 17.7757Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M20.5024 18.073C20.1725 18.1262 19.9904 18.237 19.8733 18.3409C19.7733 18.4298 19.712 18.5281 19.7126 18.5975C19.7126 18.6307 19.7267 18.6495 19.7378 18.6589C19.7531 18.6726 19.7709 18.6802 19.7923 18.6802C19.8671 18.6802 20.0339 18.6119 20.0339 18.6119C20.4932 18.4442 20.7961 18.4642 21.0966 18.4993C21.2627 18.518 21.3406 18.5287 21.3774 18.4705C21.3884 18.4536 21.4013 18.4179 21.3682 18.3628C21.2903 18.2339 20.9568 18.0179 20.5024 18.073Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M23.0263 19.1626C23.2501 19.2753 23.4972 19.2309 23.5775 19.0644C23.6578 18.8973 23.5413 18.6713 23.3169 18.5587C23.0925 18.446 22.846 18.4904 22.7657 18.6569C22.6859 18.824 22.8025 19.0506 23.0263 19.1626Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M24.4673 17.8777C24.2851 17.8746 24.1343 18.0786 24.13 18.3334C24.1257 18.5881 24.2698 18.7971 24.4519 18.8003C24.634 18.8034 24.7849 18.5994 24.7892 18.3446C24.7935 18.0899 24.6494 17.8809 24.4673 17.8777Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M12.2373 22.4735C12.1919 22.4153 12.1177 22.4335 12.0454 22.4504C11.9951 22.4623 11.9381 22.476 11.8755 22.4748C11.7419 22.4723 11.6284 22.4134 11.5646 22.3139C11.4819 22.1837 11.4868 21.9903 11.5781 21.7682C11.5904 21.7381 11.6051 21.7049 11.6211 21.6686C11.767 21.3344 12.0117 20.7743 11.7369 20.241C11.5303 19.8398 11.1937 19.5895 10.7884 19.5369C10.3996 19.4868 9.99919 19.6339 9.7441 19.9212C9.34124 20.3749 9.27808 20.9921 9.35595 21.2099C9.38477 21.29 9.42892 21.3119 9.46142 21.3163C9.5301 21.3257 9.63127 21.275 9.69505 21.1003C9.69934 21.0878 9.70547 21.0684 9.71344 21.0434C9.74165 20.9514 9.79438 20.7799 9.88084 20.6422C9.98508 20.4763 10.147 20.3618 10.3371 20.3205C10.5308 20.2779 10.7289 20.3161 10.8944 20.4269C11.1765 20.6153 11.285 20.9683 11.1648 21.305C11.1023 21.479 11.0011 21.812 11.0238 22.0855C11.0692 22.6394 11.4028 22.8616 11.7026 22.8854C11.9939 22.8966 12.1981 22.7295 12.2496 22.6075C12.279 22.5361 12.2539 22.4923 12.2373 22.4735Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M29.0624 21.4609C29.0513 21.4209 28.979 21.1511 28.8796 20.8263C28.7803 20.5015 28.6773 20.2724 28.6773 20.2724C29.0759 19.6634 29.0826 19.1189 29.0299 18.8109C28.9735 18.4285 28.8177 18.1031 28.5031 17.7663C28.1892 17.4296 27.5466 17.0847 26.6434 16.8262C26.5403 16.7968 26.1994 16.7011 26.1694 16.6917C26.1669 16.6717 26.1442 15.5513 26.124 15.0706C26.1093 14.7233 26.0798 14.18 25.9149 13.6455C25.7181 12.922 25.3759 12.2886 24.9479 11.8836C26.1283 10.635 26.8647 9.25926 26.8629 8.07947C26.8592 5.81 24.1293 5.1234 20.7642 6.54542C20.7605 6.54667 20.0565 6.85147 20.051 6.8546C20.048 6.85147 18.7621 5.56402 18.7431 5.5465C14.907 2.13103 2.91255 15.7391 6.7474 19.0444L7.58562 19.7692C7.36794 20.3437 7.28271 21.0028 7.35261 21.7107C7.44213 22.6201 7.90202 23.4926 8.64704 24.166C9.35404 24.8057 10.2842 25.2106 11.1868 25.21C12.6793 28.72 16.0886 30.8737 20.0872 30.9951C24.3758 31.1253 27.9758 29.0711 29.4842 25.3815C29.583 25.1224 30.0018 23.9557 30.0018 22.9255C30.0005 21.8903 29.4272 21.4609 29.0624 21.4609ZM11.5161 24.2236C11.3861 24.2461 11.2531 24.2555 11.1188 24.2518C9.82374 24.2161 8.42445 23.0263 8.28526 21.6143C8.13135 20.054 8.91255 18.8535 10.2953 18.5687C10.4608 18.5349 10.6601 18.5149 10.876 18.5268C11.651 18.57 12.7928 19.1777 13.0534 20.9002C13.2845 22.4261 12.9172 23.9801 11.5161 24.2236ZM10.0696 17.6361C9.20872 17.807 8.45021 18.3052 7.98603 18.9931C7.70887 18.7571 7.19195 18.3002 7.10059 18.1218C6.35986 16.686 7.90877 13.8946 8.99104 12.318C11.6657 8.42245 15.8544 5.4739 17.7939 6.00903C18.1091 6.10041 19.1533 7.33591 19.1533 7.33591C19.1533 7.33591 17.2151 8.43372 15.4172 9.96402C12.9951 11.8667 11.1654 14.6338 10.0696 17.6361ZM23.6657 23.6403C23.694 23.6284 23.7136 23.5952 23.7099 23.5627C23.7056 23.5226 23.6706 23.4932 23.6314 23.4976C23.6314 23.4976 21.6024 23.8043 19.6856 23.0876C19.8941 22.3948 20.4496 22.6451 21.2884 22.714C22.8012 22.806 24.1563 22.5807 25.1582 22.2871C26.0265 22.033 27.1664 21.5317 28.0525 20.8182C28.3511 21.4879 28.4565 22.2252 28.4565 22.2252C28.4565 22.2252 28.6877 22.1832 28.8809 22.304C29.0636 22.4186 29.1973 22.657 29.1059 23.2735C28.9195 24.4252 28.44 25.3596 27.6343 26.2196C27.1437 26.7585 26.5477 27.2273 25.8665 27.5684C25.5047 27.7624 25.119 27.9301 24.7118 28.0659C21.6735 29.0786 18.5628 27.9652 17.5603 25.5737C17.4799 25.394 17.4125 25.2056 17.3592 25.0091C16.9318 23.4331 17.2948 21.5423 18.4285 20.3525V20.3519C18.4984 20.2761 18.5696 20.1866 18.5696 20.0746C18.5696 19.9807 18.5113 19.8818 18.4604 19.8111C18.0637 19.224 16.6896 18.2232 16.9655 16.2861C17.1635 14.8948 18.3556 13.9146 19.4673 13.9728C19.5611 13.9778 19.6549 13.9835 19.7487 13.9891C20.2307 14.0179 20.6507 14.0811 21.0468 14.098C21.7103 14.1274 22.3069 14.0285 23.0139 13.4277C23.2525 13.2249 23.4438 13.049 23.7669 12.9933C23.8006 12.9877 23.8853 12.9564 24.0545 12.9645C24.2268 12.9739 24.3911 13.0221 24.5389 13.1222C25.1055 13.5072 25.1858 14.4391 25.2153 15.1213C25.2318 15.5106 25.2778 16.4526 25.2937 16.7224C25.3299 17.3407 25.4887 17.4277 25.8113 17.536C25.9922 17.5967 26.1608 17.6424 26.4085 17.7131C27.1584 17.9278 27.603 18.1462 27.8838 18.426C28.0512 18.6013 28.1285 18.7872 28.153 18.9643C28.2413 19.6227 27.6521 20.4364 26.0921 21.1755C24.3868 21.9836 22.3174 22.1882 20.888 22.0255C20.7783 22.013 20.3883 21.9679 20.3871 21.9679C19.2435 21.8108 18.591 23.3192 19.2778 24.3525C19.7199 25.0185 20.9248 25.4522 22.1303 25.4522C24.8939 25.4529 27.0186 24.248 27.8084 23.2078C27.8323 23.1765 27.8342 23.1734 27.8716 23.1158C27.9102 23.0557 27.8783 23.0232 27.8299 23.057C27.1842 23.5076 24.3169 25.2976 21.2492 24.7594C21.2492 24.7594 20.8764 24.6968 20.5361 24.5616C20.2656 24.4546 19.6997 24.1886 19.631 23.5958C22.107 24.3788 23.6657 23.6403 23.6657 23.6403ZM19.7444 23.1677C19.7444 23.1684 19.7444 23.1684 19.7444 23.1677C19.745 23.169 19.745 23.169 19.745 23.1696C19.745 23.169 19.7444 23.1684 19.7444 23.1677ZM15.0088 12.3023C15.9599 11.1807 17.1304 10.2056 18.1784 9.65858C18.2145 9.6398 18.2532 9.67986 18.2336 9.71616C18.1502 9.87013 17.9901 10.1993 17.9392 10.4497C17.9313 10.4885 17.9729 10.5179 18.0048 10.4954C18.6573 10.0416 19.7916 9.55531 20.7875 9.49272C20.8304 9.49022 20.8506 9.54592 20.8169 9.57283C20.6654 9.69113 20.4999 9.85511 20.3791 10.021C20.3582 10.0491 20.3779 10.0898 20.4122 10.0898C21.1112 10.0948 22.0966 10.3446 22.7386 10.712C22.7821 10.737 22.7509 10.8227 22.7024 10.8115C21.7305 10.5843 20.1406 10.4115 18.488 10.8227C17.0133 11.1901 15.8875 11.7572 15.0665 12.3668C15.0254 12.3981 14.9757 12.3418 15.0088 12.3023Z",
  fill: "black"
}));
/* harmony default export */ var library_mailchimp = (mailchimp);
// CONCATENATED MODULE: ./client/marketing/components/product-icon/icons/library/currency-dollar.js


/**
 * External dependencies
 */

var currencyDollar = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zm-1.338 4.877c-.314.22-.412.452-.412.623 0 .171.098.403.412.623.312.218.783.377 1.338.377.825 0 1.605.233 2.198.648.59.414 1.052 1.057 1.052 1.852 0 .795-.461 1.438-1.052 1.852-.41.286-.907.486-1.448.582v.316a.75.75 0 01-1.5 0v-.316a3.64 3.64 0 01-1.448-.582c-.59-.414-1.052-1.057-1.052-1.852a.75.75 0 011.5 0c0 .171.098.403.412.623.312.218.783.377 1.338.377s1.026-.159 1.338-.377c.314-.22.412-.452.412-.623 0-.171-.098-.403-.412-.623-.312-.218-.783-.377-1.338-.377-.825 0-1.605-.233-2.198-.648-.59-.414-1.052-1.057-1.052-1.852 0-.795.461-1.438 1.052-1.852a3.64 3.64 0 011.448-.582V7.5a.75.75 0 011.5 0v.316c.54.096 1.039.296 1.448.582.59.414 1.052 1.057 1.052 1.852a.75.75 0 01-1.5 0c0-.171-.098-.403-.412-.623-.312-.218-.783-.377-1.338-.377s-1.026.159-1.338.377z"
}));
/* harmony default export */ var currency_dollar = (currencyDollar);
// CONCATENATED MODULE: ./client/marketing/components/product-icon/icons/library/gift.js


/**
 * External dependencies
 */

var gift = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M14.75 9C16.1307 9 17.25 7.88071 17.25 6.5C17.25 5.11929 16.1307 4 14.75 4C13.3693 4 12.25 5.11929 12.25 6.5C12.25 5.11929 11.1307 4 9.75 4C8.36929 4 7.25 5.11929 7.25 6.5C7.25 7.88071 8.36929 9 9.75 9H4V20L20 20V9L14.75 9ZM14.75 7.5C15.3023 7.5 15.75 7.05228 15.75 6.5C15.75 5.94772 15.3023 5.5 14.75 5.5C14.1977 5.5 13.75 5.94772 13.75 6.5V7.5H14.75ZM18.5 18.5V10.5H13V18.5H18.5ZM11.5 18.5H5.5L5.5 10.5H11.5L11.5 18.5ZM8.75 6.5C8.75 7.05228 9.19772 7.5 9.75 7.5H10.75V6.5C10.75 5.94772 10.3023 5.5 9.75 5.5C9.19772 5.5 8.75 5.94772 8.75 6.5Z"
}));
/* harmony default export */ var library_gift = (gift);
// CONCATENATED MODULE: ./client/marketing/components/product-icon/icons/library/link.js


/**
 * External dependencies
 */

var link_link = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"
}));
/* harmony default export */ var library_link = (link_link);
// CONCATENATED MODULE: ./client/marketing/components/product-icon/icons/library/people.js


/**
 * External dependencies
 */

var people = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M17.5 9a2 2 0 11-4 0 2 2 0 014 0zm-4.25 8v-2a2.75 2.75 0 00-2.75-2.75h-4A2.75 2.75 0 003.75 15v2h1.5v-2c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2h1.5zm7-2v2h-1.5v-2c0-.69-.56-1.25-1.25-1.25H15v-1.5h2.5A2.75 2.75 0 0120.25 15zM8.5 11a2 2 0 100-4 2 2 0 000 4z"
}));
/* harmony default export */ var library_people = (people);
// CONCATENATED MODULE: ./client/marketing/components/product-icon/icons/library/tip.js


/**
 * External dependencies
 */

var tip = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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

      return Object(external_this_wp_element_["createElement"])("div", {
        className: classnames_default()(this.props.className, 'woocommerce-admin-marketing-product-icon')
      }, Object(external_this_wp_element_["createElement"])(icon["a" /* default */], {
        icon: iconComponent
      }));
    }
  }]);

  return ProductIcon;
}(external_this_wp_element_["Component"]);

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
var slicedToArray = __webpack_require__(34);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/TransitionGroup.js + 1 modules
var TransitionGroup = __webpack_require__(560);

// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/CSSTransition.js + 5 modules
var CSSTransition = __webpack_require__(559);

// EXTERNAL MODULE: ./client/marketing/components/slider/style.scss
var slider_style = __webpack_require__(554);

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

  var _useState = Object(external_this_wp_element_["useState"])(null),
      _useState2 = slicedToArray_default()(_useState, 2),
      height = _useState2[0],
      updateHeight = _useState2[1];

  var container = Object(external_this_wp_element_["useRef"])();
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
  Object(external_this_wp_element_["useEffect"])(function () {
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

  return Object(external_this_wp_element_["createElement"])("div", {
    className: containerClasses,
    ref: container,
    style: style
  }, Object(external_this_wp_element_["createElement"])(TransitionGroup["a" /* default */], null, Object(external_this_wp_element_["createElement"])(CSSTransition["a" /* default */], {
    timeout: timeout,
    classNames: "slide",
    key: animationKey,
    onEnter: onEnter
  }, Object(external_this_wp_element_["createElement"])("div", {
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

/***/ 29:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["dataControls"]; }());

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(140);

var iterableToArray = __webpack_require__(141);

var unsupportedIterableToArray = __webpack_require__(83);

var nonIterableSpread = __webpack_require__(142);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Flex */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_flex_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(441);




/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





function FlexComponent(_ref, ref) {
  var _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'center' : _ref$align,
      className = _ref.className,
      _ref$gap = _ref.gap,
      gap = _ref$gap === void 0 ? 2 : _ref$gap,
      _ref$justify = _ref.justify,
      justify = _ref$justify === void 0 ? 'space-between' : _ref$justify,
      _ref$isReversed = _ref.isReversed,
      isReversed = _ref$isReversed === void 0 ? false : _ref$isReversed,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["align", "className", "gap", "justify", "isReversed"]);

  var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()('components-flex', className);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_styles_flex_styles__WEBPACK_IMPORTED_MODULE_4__[/* Flex */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
    align: align,
    className: classes,
    ref: ref,
    gap: gap,
    justify: justify,
    isReversed: isReversed
  }));
}

var Flex = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(FlexComponent);
/* harmony default export */ __webpack_exports__["a"] = (Flex);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_media_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(112);
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * @typedef {"huge"|"wide"|"large"|"medium"|"small"|"mobile"} WPBreakpoint
 */

/**
 * Hash of breakpoint names with pixel width at which it becomes effective.
 *
 * @see _breakpoints.scss
 *
 * @type {Object<WPBreakpoint,number>}
 */

var BREAKPOINTS = {
  huge: 1440,
  wide: 1280,
  large: 960,
  medium: 782,
  small: 600,
  mobile: 480
};
/**
 * @typedef {">="|"<"} WPViewportOperator
 */

/**
 * Object mapping media query operators to the condition to be used.
 *
 * @type {Object<WPViewportOperator,string>}
 */

var CONDITIONS = {
  '>=': 'min-width',
  '<': 'max-width'
};
/**
 * Object mapping media query operators to a function that given a breakpointValue and a width evaluates if the operator matches the values.
 *
 * @type {Object<WPViewportOperator,Function>}
 */

var OPERATOR_EVALUATORS = {
  '>=': function _(breakpointValue, width) {
    return width >= breakpointValue;
  },
  '<': function _(breakpointValue, width) {
    return width < breakpointValue;
  }
};
var ViewportMatchWidthContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
/**
 * Returns true if the viewport matches the given query, or false otherwise.
 *
 * @param {WPBreakpoint}       breakpoint      Breakpoint size name.
 * @param {WPViewportOperator} [operator=">="] Viewport operator.
 *
 * @example
 *
 * ```js
 * useViewportMatch( 'huge', '<' );
 * useViewportMatch( 'medium' );
 * ```
 *
 * @return {boolean} Whether viewport matches query.
 */

var useViewportMatch = function useViewportMatch(breakpoint) {
  var operator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '>=';
  var simulatedWidth = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ViewportMatchWidthContext);
  var mediaQuery = !simulatedWidth && "(".concat(CONDITIONS[operator], ": ").concat(BREAKPOINTS[breakpoint], "px)");
  var mediaQueryResult = Object(_use_media_query__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(mediaQuery);

  if (simulatedWidth) {
    return OPERATOR_EVALUATORS[operator](BREAKPOINTS[breakpoint], simulatedWidth);
  }

  return mediaQueryResult;
};

useViewportMatch.__experimentalWidthProvider = ViewportMatchWidthContext.Provider;
/* harmony default export */ __webpack_exports__["a"] = (useViewportMatch);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return color; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(160);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _colors_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91);
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Generating a CSS complient rgba() color value.
 *
 * @param {string} hexValue The hex value to convert to rgba().
 * @param {number} alpha The alpha value for opacity.
 * @return {string} The converted rgba() color value.
 *
 * @example
 * rgba( '#000000', 0.5 )
 * // rgba(0, 0, 0, 0.5)
 */

function rgba() {
  var hexValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var _tinycolor$toRgb = tinycolor2__WEBPACK_IMPORTED_MODULE_1___default()(hexValue).toRgb(),
      r = _tinycolor$toRgb.r,
      g = _tinycolor$toRgb.g,
      b = _tinycolor$toRgb.b;

  return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(alpha, ")");
}
/**
 * Retrieves a color from the color palette.
 *
 * @param {string} value The value to retrieve.
 * @return {string} The color (or fallback, if not found).
 *
 * @example
 * color( 'blue.wordpress.700' )
 * // #00669b
 */

function color(value) {
  var fallbackColor = '#000';
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(_colors_values__WEBPACK_IMPORTED_MODULE_2__[/* COLORS */ "a"], value, fallbackColor);
}
//# sourceMappingURL=colors.js.map

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(116);

var iterableToArrayLimit = __webpack_require__(117);

var unsupportedIterableToArray = __webpack_require__(83);

var nonIterableRest = __webpack_require__(118);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ 36:
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
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
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

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["url"]; }());

/***/ }),

/***/ 38:
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

/***/ 4:
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

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(5);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js
var memoize_browser_esm = __webpack_require__(102);

// CONCATENATED MODULE: ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(memoize_browser_esm["a" /* default */])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ var is_prop_valid_browser_esm = (index);

// EXTERNAL MODULE: ./node_modules/@emotion/core/dist/core.browser.esm.js + 6 modules
var core_browser_esm = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/@emotion/utils/dist/utils.browser.esm.js
var utils_browser_esm = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js + 2 modules
var serialize_browser_esm = __webpack_require__(49);

// CONCATENATED MODULE: ./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js







var testOmitPropsOnStringTag = is_prop_valid_browser_esm;

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme' && key !== 'innerRef';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";

var styled_base_browser_esm_createStyled = function createStyled(tag, options) {
  if (false) {}

  var identifierName;
  var shouldForwardProp;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
    shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && // $FlowFixMe
      options.shouldForwardProp(propName);
    } : options.shouldForwardProp;
  }

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      if (false) {}

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        if (false) {}

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = Object(core_browser_esm["c" /* withEmotionCache */])(function (props, context, ref) {
      return Object(external_React_["createElement"])(core_browser_esm["a" /* ThemeContext */].Consumer, null, function (theme) {
        var finalTag = shouldUseAs && props.as || baseTag;
        var className = '';
        var classInterpolations = [];
        var mergedProps = props;

        if (props.theme == null) {
          mergedProps = {};

          for (var key in props) {
            mergedProps[key] = props[key];
          }

          mergedProps.theme = theme;
        }

        if (typeof props.className === 'string') {
          className = Object(utils_browser_esm["a" /* getRegisteredStyles */])(context.registered, classInterpolations, props.className);
        } else if (props.className != null) {
          className = props.className + " ";
        }

        var serialized = Object(serialize_browser_esm["a" /* serializeStyles */])(styles.concat(classInterpolations), context.registered, mergedProps);
        var rules = Object(utils_browser_esm["b" /* insertStyles */])(context, serialized, typeof finalTag === 'string');
        className += context.key + "-" + serialized.name;

        if (targetClassName !== undefined) {
          className += " " + targetClassName;
        }

        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
        var newProps = {};

        for (var _key in props) {
          if (shouldUseAs && _key === 'as') continue;

          if ( // $FlowFixMe
          finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }

        newProps.className = className;
        newProps.ref = ref || props.innerRef;

        if (false) {}

        var ele = Object(external_React_["createElement"])(finalTag, newProps);

        return ele;
      });
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && "production" !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, nextOptions !== undefined ? _objectSpread({}, options || {}, {}, nextOptions) : options).apply(void 0, styles);
    };

    return Styled;
  };
};

/* harmony default export */ var styled_base_browser_esm = __webpack_exports__["a"] = (styled_base_browser_esm_createStyled);


/***/ }),

/***/ 42:
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


var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCreateFragment = __webpack_require__(210);

var _reactAddonsCreateFragment2 = _interopRequireDefault(_reactAddonsCreateFragment);

var _tokenize = __webpack_require__(213);

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

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Flex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Item; });
/* unused harmony export Block */
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/**
 * External dependencies
 */


var alignStyle = function alignStyle(_ref2) {
  var align = _ref2.align;
  var aligns = {
    top: 'flex-start',
    bottom: 'flex-end'
  };
  var value = aligns[align] || align;
  return /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[/* css */ "b"])({
    alignItems: value
  },  true ? "" : undefined);
};

var justifyStyle = function justifyStyle(_ref3) {
  var justify = _ref3.justify,
      isReversed = _ref3.isReversed;
  var justifies = {
    left: 'flex-start',
    right: 'flex-end'
  };
  var value = justifies[justify] || justify;

  if (isReversed && justifies[justify]) {
    value = justify === 'left' ? justifies.right : justifies.left;
  }

  return /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[/* css */ "b"])({
    justifyContent: value
  },  true ? "" : undefined);
};

var gapStyle = function gapStyle(_ref4) {
  var gap = _ref4.gap,
      isReversed = _ref4.isReversed;
  var base = 4;
  var value = typeof gap === 'number' ? base * gap : base;
  var dir = isReversed ? 'left' : 'right';
  var margin = "margin-".concat(dir);
  return /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[/* css */ "b"])("> *{", margin, ":", value, "px;&:last-child{", margin, ":0;}}" + ( true ? "" : undefined));
};

var _ref =  true ? {
  name: "8kj89b",
  styles: "flex-direction:row-reverse;"
} : undefined;

var reversedStyles = function reversedStyles(_ref5) {
  var isReversed = _ref5.isReversed;
  if (!isReversed) return '';
  return _ref;
};

var Flex = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("div", {
  target: "eboqfv50",
  label: "Flex"
})("box-sizing:border-box;display:flex;", alignStyle, ";", justifyStyle, ";", gapStyle, ";", reversedStyles, ";" + ( true ? "" : undefined));
var Item = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("div", {
  target: "eboqfv51",
  label: "Item"
})( true ? {
  name: "13luw5d",
  styles: "box-sizing:border-box;min-width:0;max-width:100%;"
} : undefined);
var Block = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Item, {
  target: "eboqfv52",
  label: "Block"
})( true ? {
  name: "1rr4qq7",
  styles: "flex:1;"
} : undefined);
//# sourceMappingURL=flex-styles.js.map

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getInAppPurchaseUrl; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);


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
  var connectNonce = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__[/* getSetting */ "g"])('connectNonce', '');
  queryArgs = _objectSpread({
    'wccom-site': Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__[/* getSetting */ "g"])('siteUrl'),
    // If the site is installed in a directory the directory must be included in the back param path.
    'wccom-back': pathname + search,
    'wccom-woo-version': Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__[/* getSetting */ "g"])('wcVersion'),
    'wccom-connect-nonce': connectNonce
  }, queryArgs);
  return Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__["addQueryArgs"])(url, queryArgs);
};

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: RecommendedExtensions

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(38);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/compose.js
var compose = __webpack_require__(277);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/spinner/index.js
var spinner = __webpack_require__(738);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./client/marketing/components/recommended-extensions/style.scss
var style = __webpack_require__(444);

// EXTERNAL MODULE: external {"this":["wc","tracks"]}
var external_this_wc_tracks_ = __webpack_require__(64);

// EXTERNAL MODULE: ./client/marketing/components/index.js + 17 modules
var components = __webpack_require__(279);

// EXTERNAL MODULE: ./client/lib/in-app-purchase.js
var in_app_purchase = __webpack_require__(445);

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
    Object(external_this_wc_tracks_["recordEvent"])('marketing_recommended_extension', {
      name: title
    });
  };

  var classNameBase = 'woocommerce-marketing-recommended-extensions-item';
  var connectURL = Object(in_app_purchase["a" /* getInAppPurchaseUrl */])(url); // Temporary fix to account for different styles between marketing & coupons

  if (category === 'coupons' && product === 'automatewoo') {
    product = "automatewoo-alt";
  }

  return Object(external_this_wp_element_["createElement"])("a", {
    href: connectURL,
    className: classNameBase,
    onClick: onProductClick
  }, Object(external_this_wp_element_["createElement"])(components["b" /* ProductIcon */], {
    product: product
  }), Object(external_this_wp_element_["createElement"])("div", {
    className: "".concat(classNameBase, "__text")
  }, Object(external_this_wp_element_["createElement"])("h4", null, title), Object(external_this_wp_element_["createElement"])("p", null, description)));
};

item_RecommendedExtensionsItem.propTypes = {
  title: prop_types_default.a.string.isRequired,
  description: prop_types_default.a.string.isRequired,
  url: prop_types_default.a.string.isRequired,
  product: prop_types_default.a.string.isRequired,
  category: prop_types_default.a.string.isRequired
};
/* harmony default export */ var item = (item_RecommendedExtensionsItem);
// EXTERNAL MODULE: ./client/marketing/data/constants.js
var constants = __webpack_require__(113);

// EXTERNAL MODULE: ./client/marketing/components/card/index.js
var card = __webpack_require__(194);

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
  return Object(external_this_wp_element_["createElement"])(card["a" /* default */], {
    title: title,
    description: description,
    className: classnames_default()('woocommerce-marketing-recommended-extensions-card', categoryClass)
  }, isLoading ? Object(external_this_wp_element_["createElement"])(spinner["a" /* default */], null) : Object(external_this_wp_element_["createElement"])("div", {
    className: classnames_default()('woocommerce-marketing-recommended-extensions-card__items', "woocommerce-marketing-recommended-extensions-card__items--count-".concat(extensions.length))
  }, extensions.map(function (extension) {
    return Object(external_this_wp_element_["createElement"])(item, extends_default()({
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
  title: Object(external_this_wp_i18n_["__"])('Recommended extensions', 'woocommerce-admin'),
  description: Object(external_this_wp_i18n_["__"])('Great marketing requires the right tools. Take your marketing to the next level with our recommended marketing extensions.', 'woocommerce-admin')
};

/* harmony default export */ var recommended_extensions = __webpack_exports__["a"] = (Object(compose["a" /* default */])(Object(external_this_wp_data_["withSelect"])(function (select, props) {
  var _select = select(constants["b" /* STORE_KEY */]),
      getRecommendedPlugins = _select.getRecommendedPlugins,
      isResolving = _select.isResolving;

  return {
    extensions: getRecommendedPlugins(props.category),
    isLoading: isResolving('getRecommendedPlugins', [props.category])
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  return {
    createNotice: createNotice
  };
}))(recommended_extensions_RecommendedExtensions));

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: KnowledgeBase

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(34);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/compose.js
var compose = __webpack_require__(277);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/spinner/index.js
var spinner = __webpack_require__(738);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external {"this":["wc","components"]}
var external_this_wc_components_ = __webpack_require__(77);

// EXTERNAL MODULE: external {"this":["wc","tracks"]}
var external_this_wc_tracks_ = __webpack_require__(64);

// EXTERNAL MODULE: ./client/marketing/components/knowledge-base/style.scss
var style = __webpack_require__(555);

// EXTERNAL MODULE: ./client/marketing/components/index.js + 17 modules
var components = __webpack_require__(279);

// EXTERNAL MODULE: ./client/marketing/data/constants.js
var constants = __webpack_require__(113);

// EXTERNAL MODULE: ./client/marketing/components/card/index.js
var card = __webpack_require__(194);

// EXTERNAL MODULE: ./node_modules/interpolate-components/lib/index.js
var lib = __webpack_require__(42);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./client/marketing/components/knowledge-base/ReadBlogMessage.js


/**
 * External dependencies
 */




var ReadBlogMessage_ReadBlogMessage = function ReadBlogMessage() {
  return lib_default()({
    mixedString: Object(external_this_wp_i18n_["__"])('Read {{link}}the WooCommerce blog{{/link}} for more tips on marketing your store', 'woocommerce-admin'),
    components: {
      link: Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Link"], {
        type: "external",
        href: "https://woocommerce.com/blog/marketing/coupons/",
        target: "_blank"
      })
    }
  });
};

/* harmony default export */ var knowledge_base_ReadBlogMessage = (ReadBlogMessage_ReadBlogMessage);
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

  var _useState = Object(external_this_wp_element_["useState"])(1),
      _useState2 = slicedToArray_default()(_useState, 2),
      page = _useState2[0],
      updatePage = _useState2[1];

  var _useState3 = Object(external_this_wp_element_["useState"])(null),
      _useState4 = slicedToArray_default()(_useState3, 2),
      animate = _useState4[0],
      updateAnimate = _useState4[1];

  var onPaginationPageChange = function onPaginationPageChange(newPage) {
    var newAnimate;

    if (newPage > page) {
      newAnimate = 'left';
      Object(external_this_wc_tracks_["recordEvent"])('marketing_knowledge_carousel', {
        direction: 'forward',
        page: newPage
      });
    } else {
      newAnimate = 'right';
      Object(external_this_wc_tracks_["recordEvent"])('marketing_knowledge_carousel', {
        direction: 'back',
        page: newPage
      });
    }

    updatePage(newPage);
    updateAnimate(newAnimate);
  };

  var onPostClick = function onPostClick(post) {
    Object(external_this_wc_tracks_["recordEvent"])('marketing_knowledge_article', {
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
      return Object(external_this_wp_element_["createElement"])("a", {
        className: "woocommerce-marketing-knowledgebase-card__post",
        href: post.link,
        key: index,
        onClick: function onClick() {
          onPostClick(post);
        },
        target: "_blank",
        rel: "noopener noreferrer"
      }, post.image && Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-marketing-knowledgebase-card__post-img"
      }, Object(external_this_wp_element_["createElement"])("img", {
        src: post.image,
        alt: ""
      })), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-marketing-knowledgebase-card__post-text"
      }, Object(external_this_wp_element_["createElement"])("h3", null, post.title), Object(external_this_wp_element_["createElement"])("p", {
        className: "woocommerce-marketing-knowledgebase-card__post-meta"
      }, "By ", post.author_name, post.author_avatar && Object(external_this_wp_element_["createElement"])("img", {
        src: post.author_avatar.replace('s=96', 's=32'),
        className: "woocommerce-gravatar",
        alt: "",
        width: "16",
        height: "16"
      }))));
    });
    return Object(external_this_wp_element_["createElement"])("div", {
      className: pageClass
    }, displayPosts);
  };

  var renderEmpty = function renderEmpty() {
    var emptyTitle = Object(external_this_wp_i18n_["__"])('No posts yet', 'woocommerce-admin');

    return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["EmptyContent"], {
      title: emptyTitle,
      message: Object(external_this_wp_element_["createElement"])(knowledge_base_ReadBlogMessage, null),
      illustration: "",
      actionLabel: ""
    });
  };

  var renderError = function renderError() {
    var errorTitle = Object(external_this_wp_i18n_["__"])("Oops, our posts aren't loading right now", 'woocommerce-admin');

    return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["EmptyContent"], {
      title: errorTitle,
      message: Object(external_this_wp_element_["createElement"])(knowledge_base_ReadBlogMessage, null),
      illustration: "",
      actionLabel: ""
    });
  };

  var renderPosts = function renderPosts() {
    return Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-marketing-knowledgebase-card__posts"
    }, Object(external_this_wp_element_["createElement"])(components["c" /* Slider */], {
      animationKey: page,
      animate: animate
    }, getCurrentSlide()), Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Pagination"], {
      page: page,
      perPage: 2,
      total: posts.length,
      onPageChange: onPaginationPageChange,
      showPagePicker: false,
      showPerPagePicker: false,
      showPageArrowsLabel: false
    }));
  };

  var renderCardBody = function renderCardBody() {
    if (isLoading) {
      return Object(external_this_wp_element_["createElement"])(spinner["a" /* default */], null);
    }

    if (error) {
      return renderError();
    }

    return posts.length === 0 ? renderEmpty() : renderPosts();
  };

  var categoryClass = category ? "woocommerce-marketing-knowledgebase-card__category-".concat(category) : '';
  return Object(external_this_wp_element_["createElement"])(card["a" /* default */], {
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
  title: Object(external_this_wp_i18n_["__"])('WooCommerce knowledge base', 'woocommerce-admin'),
  description: Object(external_this_wp_i18n_["__"])('Learn the ins and outs of successful marketing from the experts at WooCommerce.', 'woocommerce-admin')
};

/* harmony default export */ var knowledge_base = __webpack_exports__["a"] = (Object(compose["a" /* default */])(Object(external_this_wp_data_["withSelect"])(function (select, props) {
  var _select = select(constants["b" /* STORE_KEY */]),
      getBlogPosts = _select.getBlogPosts,
      getBlogPostsError = _select.getBlogPostsError,
      isResolving = _select.isResolving;

  return {
    posts: getBlogPosts(props.category),
    isLoading: isResolving('getBlogPosts', [props.category]),
    error: getBlogPostsError(props.category)
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  return {
    createNotice: createNotice
  };
}))(knowledge_base_KnowledgeBase));

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88);


/**
 * WordPress dependencies
 */

var close = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__[/* SVG */ "c"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__[/* Path */ "b"], {
  d: "M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"
}));
/* harmony default export */ __webpack_exports__["a"] = (close);
//# sourceMappingURL=close.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ 48:
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

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ serialize_browser_esm_serializeStyles; });

// CONCATENATED MODULE: ./node_modules/@emotion/hash/dist/hash.browser.esm.js
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ var hash_browser_esm = (murmur2);

// CONCATENATED MODULE: ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ var unitless_browser_esm = (unitlessKeys);

// EXTERNAL MODULE: ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js
var memoize_browser_esm = __webpack_require__(102);

// CONCATENATED MODULE: ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = Object(memoize_browser_esm["a" /* default */])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var serialize_browser_esm_processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitless_browser_esm[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (false) { var hyphenatedCache, hyphenPattern, msPattern, oldProcessStyleValue, contentValues, contentValuePattern; }

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (false) {}

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (false) {}

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (false) {}

        break;
      }

    case 'string':
      if (false) { var replaced, matched; }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if (false) {}

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + serialize_browser_esm_processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + serialize_browser_esm_processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (false) {}

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (false) {} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serialize_browser_esm_serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if (false) {}

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if (false) {}

      styles += strings[i];
    }
  }

  var sourceMap;

  if (false) {} // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = hash_browser_esm(styles) + identifierName;

  if (false) {}

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




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

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return insertStyles; });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ 51:
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

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ context_useSlot; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Consumer; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(10);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@wordpress/is-shallow-equal/lib/index.js
var lib = __webpack_require__(82);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-context.js
var slot_fill_context = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/slot-fill/bubbles-virtually/slot-fill-provider.js







function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return Object(esm_typeof["a" /* default */])(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (Object(esm_typeof["a" /* default */])(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Object(esm_typeof["a" /* default */])(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function useSlotRegistry() {
  var _useState = Object(external_this_wp_element_["useState"])({}),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      slots = _useState2[0],
      setSlots = _useState2[1];

  var _useState3 = Object(external_this_wp_element_["useState"])({}),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      fills = _useState4[0],
      setFills = _useState4[1];

  var registerSlot = Object(external_this_wp_element_["useCallback"])(function (name, ref, fillProps) {
    setSlots(function (prevSlots) {
      var slot = prevSlots[name] || {};
      return _objectSpread(_objectSpread({}, prevSlots), {}, Object(defineProperty["a" /* default */])({}, name, _objectSpread(_objectSpread({}, slot), {}, {
        ref: ref || slot.ref,
        fillProps: fillProps || slot.fillProps || {}
      })));
    });
  }, []);
  var unregisterSlot = Object(external_this_wp_element_["useCallback"])(function (name, ref) {
    setSlots(function (prevSlots) {
      var slot = prevSlots[name],
          nextSlots = Object(objectWithoutProperties["a" /* default */])(prevSlots, [name].map(_toPropertyKey)); // Make sure we're not unregistering a slot registered by another element
      // See https://github.com/WordPress/gutenberg/pull/19242#issuecomment-590295412


      if ((slot === null || slot === void 0 ? void 0 : slot.ref) === ref) {
        return nextSlots;
      }

      return prevSlots;
    });
  }, []);
  var updateSlot = Object(external_this_wp_element_["useCallback"])(function (name, fillProps) {
    var slot = slots[name];

    if (!slot) {
      return;
    }

    if (!lib_default()(slot.fillProps, fillProps)) {
      slot.fillProps = fillProps;
      var slotFills = fills[name];

      if (slotFills) {
        // Force update fills
        slotFills.map(function (fill) {
          return fill.current.rerender();
        });
      }
    }
  }, [slots, fills]);
  var registerFill = Object(external_this_wp_element_["useCallback"])(function (name, ref) {
    setFills(function (prevFills) {
      return _objectSpread(_objectSpread({}, prevFills), {}, Object(defineProperty["a" /* default */])({}, name, [].concat(Object(toConsumableArray["a" /* default */])(prevFills[name] || []), [ref])));
    });
  }, []);
  var unregisterFill = Object(external_this_wp_element_["useCallback"])(function (name, ref) {
    setFills(function (prevFills) {
      if (prevFills[name]) {
        return _objectSpread(_objectSpread({}, prevFills), {}, Object(defineProperty["a" /* default */])({}, name, prevFills[name].filter(function (fillRef) {
          return fillRef !== ref;
        })));
      }

      return prevFills;
    });
  }, []); // Memoizing the return value so it can be directly passed to Provider value

  var registry = Object(external_this_wp_element_["useMemo"])(function () {
    return {
      slots: slots,
      fills: fills,
      registerSlot: registerSlot,
      updateSlot: updateSlot,
      unregisterSlot: unregisterSlot,
      registerFill: registerFill,
      unregisterFill: unregisterFill
    };
  }, [slots, fills, registerSlot, updateSlot, unregisterSlot, registerFill, unregisterFill]);
  return registry;
}

function slot_fill_provider_SlotFillProvider(_ref) {
  var children = _ref.children;
  var registry = useSlotRegistry();
  return Object(external_this_wp_element_["createElement"])(slot_fill_context["a" /* default */].Provider, {
    value: registry
  }, children);
}
//# sourceMappingURL=slot-fill-provider.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/slot-fill/context.js










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var SlotFillContext = Object(external_this_wp_element_["createContext"])({
  registerSlot: function registerSlot() {},
  unregisterSlot: function unregisterSlot() {},
  registerFill: function registerFill() {},
  unregisterFill: function unregisterFill() {},
  getSlot: function getSlot() {},
  getFills: function getFills() {},
  subscribe: function subscribe() {}
});
var Provider = SlotFillContext.Provider,
    Consumer = SlotFillContext.Consumer;

var context_SlotFillProvider = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(SlotFillProvider, _Component);

  var _super = _createSuper(SlotFillProvider);

  function SlotFillProvider() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, SlotFillProvider);

    _this = _super.apply(this, arguments);
    _this.registerSlot = _this.registerSlot.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.registerFill = _this.registerFill.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.unregisterSlot = _this.unregisterSlot.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.unregisterFill = _this.unregisterFill.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.getSlot = _this.getSlot.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.getFills = _this.getFills.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.hasFills = _this.hasFills.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.subscribe = _this.subscribe.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.slots = {};
    _this.fills = {};
    _this.listeners = [];
    _this.contextValue = {
      registerSlot: _this.registerSlot,
      unregisterSlot: _this.unregisterSlot,
      registerFill: _this.registerFill,
      unregisterFill: _this.unregisterFill,
      getSlot: _this.getSlot,
      getFills: _this.getFills,
      hasFills: _this.hasFills,
      subscribe: _this.subscribe
    };
    return _this;
  }

  Object(createClass["a" /* default */])(SlotFillProvider, [{
    key: "registerSlot",
    value: function registerSlot(name, slot) {
      var previousSlot = this.slots[name];
      this.slots[name] = slot;
      this.triggerListeners(); // Sometimes the fills are registered after the initial render of slot
      // But before the registerSlot call, we need to rerender the slot

      this.forceUpdateSlot(name); // If a new instance of a slot is being mounted while another with the
      // same name exists, force its update _after_ the new slot has been
      // assigned into the instance, such that its own rendering of children
      // will be empty (the new Slot will subsume all fills for this name).

      if (previousSlot) {
        previousSlot.forceUpdate();
      }
    }
  }, {
    key: "registerFill",
    value: function registerFill(name, instance) {
      this.fills[name] = [].concat(Object(toConsumableArray["a" /* default */])(this.fills[name] || []), [instance]);
      this.forceUpdateSlot(name);
    }
  }, {
    key: "unregisterSlot",
    value: function unregisterSlot(name, instance) {
      // If a previous instance of a Slot by this name unmounts, do nothing,
      // as the slot and its fills should only be removed for the current
      // known instance.
      if (this.slots[name] !== instance) {
        return;
      }

      delete this.slots[name];
      this.triggerListeners();
    }
  }, {
    key: "unregisterFill",
    value: function unregisterFill(name, instance) {
      this.fills[name] = Object(external_lodash_["without"])(this.fills[name], instance);
      this.resetFillOccurrence(name);
      this.forceUpdateSlot(name);
    }
  }, {
    key: "getSlot",
    value: function getSlot(name) {
      return this.slots[name];
    }
  }, {
    key: "getFills",
    value: function getFills(name, slotInstance) {
      // Fills should only be returned for the current instance of the slot
      // in which they occupy.
      if (this.slots[name] !== slotInstance) {
        return [];
      }

      return Object(external_lodash_["sortBy"])(this.fills[name], 'occurrence');
    }
  }, {
    key: "hasFills",
    value: function hasFills(name) {
      return this.fills[name] && !!this.fills[name].length;
    }
  }, {
    key: "resetFillOccurrence",
    value: function resetFillOccurrence(name) {
      Object(external_lodash_["forEach"])(this.fills[name], function (instance) {
        instance.occurrence = undefined;
      });
    }
  }, {
    key: "forceUpdateSlot",
    value: function forceUpdateSlot(name) {
      var slot = this.getSlot(name);

      if (slot) {
        slot.forceUpdate();
      }
    }
  }, {
    key: "triggerListeners",
    value: function triggerListeners() {
      this.listeners.forEach(function (listener) {
        return listener();
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe(listener) {
      var _this2 = this;

      this.listeners.push(listener);
      return function () {
        _this2.listeners = Object(external_lodash_["without"])(_this2.listeners, listener);
      };
    }
  }, {
    key: "render",
    value: function render() {
      return Object(external_this_wp_element_["createElement"])(Provider, {
        value: this.contextValue
      }, Object(external_this_wp_element_["createElement"])(slot_fill_provider_SlotFillProvider, null, this.props.children));
    }
  }]);

  return SlotFillProvider;
}(external_this_wp_element_["Component"]);
/**
 * React hook returning the active slot given a name.
 *
 * @param {string} name Slot name.
 * @return {Object} Slot object.
 */


var context_useSlot = function useSlot(name) {
  var _useContext = Object(external_this_wp_element_["useContext"])(SlotFillContext),
      getSlot = _useContext.getSlot,
      subscribe = _useContext.subscribe;

  var _useState = Object(external_this_wp_element_["useState"])(getSlot(name)),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      slot = _useState2[0],
      setSlot = _useState2[1];

  Object(external_this_wp_element_["useEffect"])(function () {
    setSlot(getSlot(name));
    var unsubscribe = subscribe(function () {
      setSlot(getSlot(name));
    });
    return unsubscribe;
  }, [name]);
  return slot;
};
/* harmony default export */ var context = __webpack_exports__["b"] = (context_SlotFillProvider);

//# sourceMappingURL=context.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ TAB; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ ESCAPE; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ LEFT; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ UP; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ RIGHT; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ DOWN; });

// UNUSED EXPORTS: BACKSPACE, ENTER, SPACE, DELETE, F10, ALT, CTRL, COMMAND, SHIFT, ZERO, modifiers, rawShortcut, displayShortcutList, displayShortcut, shortcutAriaLabel, isKeyboardEvent

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(27);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/node_modules/@wordpress/keycodes/build-module/platform.js
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
// CONCATENATED MODULE: ./node_modules/@wordpress/components/node_modules/@wordpress/keycodes/build-module/index.js



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

    var replacementKeyMap = (_replacementKeyMap = {}, Object(defineProperty["a" /* default */])(_replacementKeyMap, ALT, isApple ? '⌥' : 'Alt'), Object(defineProperty["a" /* default */])(_replacementKeyMap, CTRL, isApple ? '⌃' : 'Ctrl'), Object(defineProperty["a" /* default */])(_replacementKeyMap, COMMAND, '⌘'), Object(defineProperty["a" /* default */])(_replacementKeyMap, SHIFT, isApple ? '⇧' : 'Shift'), _replacementKeyMap);
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
 * From a given KeyboardEvent, returns an array of active modifier constants for
 * the event.
 *
 * @param {KeyboardEvent} event Keyboard event.
 *
 * @return {Array<ALT|CTRL|COMMAND|SHIFT>} Active modifier constants.
 */

function getEventModifiers(event) {
  return [ALT, CTRL, COMMAND, SHIFT].filter(function (key) {
    return event["".concat(key, "Key")];
  });
}
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
    var eventMods = getEventModifiers(event);

    if (Object(external_lodash_["xor"])(mods, eventMods).length) {
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

/***/ 55:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["hooks"]; }());

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 556:
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

// EXTERNAL MODULE: external {"this":["wp","dataControls"]}
var external_this_wp_dataControls_ = __webpack_require__(29);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(20);

// EXTERNAL MODULE: ./client/marketing/data/constants.js
var constants = __webpack_require__(113);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(14);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(3);

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


var _marked = /*#__PURE__*/regenerator_default.a.mark(activateInstalledPlugin),
    _marked2 = /*#__PURE__*/regenerator_default.a.mark(loadInstalledPluginsAfterActivation);

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
  var _dispatch = Object(external_this_wp_data_["dispatch"])('core/notices'),
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

  return regenerator_default.a.wrap(function activateInstalledPlugin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _dispatch2 = Object(external_this_wp_data_["dispatch"])('core/notices'), createNotice = _dispatch2.createNotice;
          _context.next = 3;
          return receiveActivatingPlugin(pluginSlug);

        case 3:
          _context.prev = 3;
          _context.next = 6;
          return Object(external_this_wp_dataControls_["apiFetch"])({
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
          return createNotice('success', Object(external_this_wp_i18n_["__"])('The extension has been successfully activated.', 'woocommerce-admin'));

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
          return handleFetchError(_context.t0, Object(external_this_wp_i18n_["__"])('There was an error trying to activate the extension.', 'woocommerce-admin'));

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
  return regenerator_default.a.wrap(function loadInstalledPluginsAfterActivation$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(external_this_wp_dataControls_["apiFetch"])({
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
          return handleFetchError(_context2.t0, Object(external_this_wp_i18n_["__"])('There was an error loading installed extensions.', 'woocommerce-admin'));

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
// CONCATENATED MODULE: ./client/marketing/data/resolvers.js


var resolvers_marked = /*#__PURE__*/regenerator_default.a.mark(resolvers_getRecommendedPlugins),
    resolvers_marked2 = /*#__PURE__*/regenerator_default.a.mark(resolvers_getBlogPosts);

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



function resolvers_getRecommendedPlugins(category) {
  var categoryParam, response;
  return regenerator_default.a.wrap(function getRecommendedPlugins$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return category ? "&category=".concat(category) : '';

        case 3:
          categoryParam = _context.sent;
          _context.next = 6;
          return Object(external_this_wp_dataControls_["apiFetch"])({
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
          return handleFetchError(_context.t0, Object(external_this_wp_i18n_["__"])('There was an error loading recommended extensions.', 'woocommerce-admin'));

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, resolvers_marked, null, [[0, 15]]);
}
function resolvers_getBlogPosts(category) {
  var categoryParam, response;
  return regenerator_default.a.wrap(function getBlogPosts$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return category ? "?category=".concat(category) : '';

        case 3:
          categoryParam = _context2.sent;
          _context2.next = 6;
          return Object(external_this_wp_dataControls_["apiFetch"])({
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(30);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(5);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./client/settings/index.js
var settings = __webpack_require__(36);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// CONCATENATED MODULE: ./client/marketing/data/reducer.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



var _getSetting = Object(settings["g" /* getSetting */])('marketing', {}),
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






Object(external_this_wp_data_["registerStore"])(constants["b" /* STORE_KEY */], {
  actions: actions_namespaceObject,
  selectors: selectors_namespaceObject,
  resolvers: resolvers_namespaceObject,
  controls: external_this_wp_dataControls_["controls"],
  reducer: data_reducer
});

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorizontalRule; });
var HorizontalRule = 'hr';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultProps */
/* unused harmony export CardHeader */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_card_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(193);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(192);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



var defaultProps = {
  isBorderless: false,
  isShady: false,
  size: 'medium'
};
function CardHeader(props) {
  var className = props.className,
      isShady = props.isShady,
      additionalProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props, ["className", "isShady"]);

  var mergedProps = _objectSpread(_objectSpread(_objectSpread({}, defaultProps), Object(_context__WEBPACK_IMPORTED_MODULE_6__[/* useCardContext */ "b"])()), props);

  var isBorderless = mergedProps.isBorderless,
      size = mergedProps.size;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('components-card__header', isBorderless && 'is-borderless', isShady && 'is-shady', size && "is-size-".concat(size), className);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_styles_card_styles__WEBPACK_IMPORTED_MODULE_5__[/* HeaderUI */ "d"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, additionalProps, {
    className: classes
  }));
}
/* harmony default export */ __webpack_exports__["a"] = (CardHeader);
//# sourceMappingURL=header.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(56);

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
var external_React_ = __webpack_require__(6);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: external "ReactDOM"
var external_ReactDOM_ = __webpack_require__(100);
var external_ReactDOM_default = /*#__PURE__*/__webpack_require__.n(external_ReactDOM_);

// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/config.js
/* harmony default export */ var config = ({
  disabled: false
});
// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/TransitionGroupContext.js
var TransitionGroupContext = __webpack_require__(97);

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

var Transition_Transition =
/*#__PURE__*/
function (_React$Component) {
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
  }; // getSnapshotBeforeUpdate(prevProps) {
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
      var node = external_ReactDOM_default.a.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
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

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
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
        childProps = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      // allows for nested Transitions
      return external_React_default.a.createElement(TransitionGroupContext["a" /* default */].Provider, {
        value: null
      }, children(status, childProps));
    }

    var child = external_React_default.a.Children.only(children);
    return (// allows for nested Transitions
      external_React_default.a.createElement(TransitionGroupContext["a" /* default */].Provider, {
        value: null
      }, external_React_default.a.cloneElement(child, childProps))
    );
  };

  return Transition;
}(external_React_default.a.Component);

Transition_Transition.contextType = TransitionGroupContext["a" /* default */];
Transition_Transition.propTypes =  false ? undefined : {};

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
Transition_Transition.UNMOUNTED = 0;
Transition_Transition.EXITED = 1;
Transition_Transition.ENTERING = 2;
Transition_Transition.ENTERED = 3;
Transition_Transition.EXITING = 4;
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
 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
 * using CSS transitions or animations. It's built upon the
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
 * `*-active` classes represent which styles you want to animate **to**.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition_CSSTransition =
/*#__PURE__*/
function (_React$Component) {
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

    _this.onEnter = function (node, appearing) {
      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
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

    if (type === 'appear' && phase === 'done') {
      className += " " + this.getClassNames('enter').doneClassName;
    } // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    this.appliedClasses[type][phase] = className;

    _addClass(node, className);
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

    return external_React_default.a.createElement(esm_Transition, Object(esm_extends["a" /* default */])({}, props, {
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

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(6);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/TransitionGroupContext.js
var TransitionGroupContext = __webpack_require__(97);

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
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
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

};

var TransitionGroup_TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this))); // Initial children should all be entering, dependent on appear


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
  };

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
      return external_React_default.a.createElement(TransitionGroupContext["a" /* default */].Provider, {
        value: contextValue
      }, children);
    }

    return external_React_default.a.createElement(TransitionGroupContext["a" /* default */].Provider, {
      value: contextValue
    }, external_React_default.a.createElement(Component, props, children));
  };

  return TransitionGroup;
}(external_React_default.a.Component);

TransitionGroup_TransitionGroup.propTypes =  false ? undefined : {};
TransitionGroup_TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ var esm_TransitionGroup = __webpack_exports__["a"] = (TransitionGroup_TransitionGroup);

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export logged */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deprecated; });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/**
 * Object map tracking messages which have been logged, for use in ensuring a
 * message is only logged once.
 *
 * @type {Object}
 */

var logged = Object.create(null);
/**
 * Logs a message to notify developers about a deprecated feature.
 *
 * @param {string}  feature             Name of the deprecated feature.
 * @param {?Object} options             Personalisation options
 * @param {?string} options.version     Version in which the feature will be removed.
 * @param {?string} options.alternative Feature to use instead
 * @param {?string} options.plugin      Plugin name if it's a plugin feature
 * @param {?string} options.link        Link to documentation
 * @param {?string} options.hint        Additional message to help transition away from the deprecated feature.
 *
 * @example
 * ```js
 * import deprecated from '@wordpress/deprecated';
 *
 * deprecated( 'Eating meat', {
 * 	version: 'the future',
 * 	alternative: 'vegetables',
 * 	plugin: 'the earth',
 * 	hint: 'You may find it beneficial to transition gradually.',
 * } );
 *
 * // Logs: 'Eating meat is deprecated and will be removed from the earth in the future. Please use vegetables instead. Note: You may find it beneficial to transition gradually.'
 * ```
 */

function deprecated(feature) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var version = options.version,
      alternative = options.alternative,
      plugin = options.plugin,
      link = options.link,
      hint = options.hint;
  var pluginMessage = plugin ? " from ".concat(plugin) : '';
  var versionMessage = version ? " and will be removed".concat(pluginMessage, " in version ").concat(version) : '';
  var useInsteadMessage = alternative ? " Please use ".concat(alternative, " instead.") : '';
  var linkMessage = link ? " See: ".concat(link) : '';
  var hintMessage = hint ? " Note: ".concat(hint) : '';
  var message = "".concat(feature, " is deprecated").concat(versionMessage, ".").concat(useInsteadMessage).concat(linkMessage).concat(hintMessage); // Skip if already logged.

  if (message in logged) {
    return;
  }
  /**
   * Fires whenever a deprecated feature is encountered
   *
   * @param {string}  feature             Name of the deprecated feature.
   * @param {?Object} options             Personalisation options
   * @param {?string} options.version     Version in which the feature will be removed.
   * @param {?string} options.alternative Feature to use instead
   * @param {?string} options.plugin      Plugin name if it's a plugin feature
   * @param {?string} options.link        Link to documentation
   * @param {?string} options.hint        Additional message to help transition away from the deprecated feature.
   * @param {?string} message             Message sent to console.warn
   */


  Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["doAction"])('deprecated', feature, options, message); // eslint-disable-next-line no-console

  console.warn(message);
  logged[message] = true;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */
 // Disable reason: JSDoc linter doesn't seem to parse the union (`&`) correctly.

/* eslint-disable jsdoc/valid-types */

/** @typedef {{icon: JSX.Element, size?: number} & import('react').ComponentPropsWithoutRef<'SVG'>} IconProps */

/* eslint-enable jsdoc/valid-types */

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

/***/ 58:
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

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90);
/**
 * WordPress dependencies
 */


var SlotFillContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  slots: {},
  fills: {},
  registerSlot: function registerSlot() {
    typeof process !== "undefined" && process.env && "production" !== "production" ? Object(_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('Components must be wrapped within `SlotFillProvider`. ' + 'See https://developer.wordpress.org/block-editor/components/slot-fill/') : void 0;
  },
  updateSlot: function updateSlot() {},
  unregisterSlot: function unregisterSlot() {},
  registerFill: function registerFill() {},
  unregisterFill: function unregisterFill() {}
});
/* harmony default export */ __webpack_exports__["a"] = (SlotFillContext);
//# sourceMappingURL=slot-fill-context.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(33)))

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

(function() { module.exports = this["wc"]["tracks"]; }());

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ ThemeContext; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ emotion_element_57a3a7a3_browser_esm_withEmotionCache; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ css_browser_esm; });

// UNUSED EXPORTS: CacheProvider, ClassNames, Global, createElement, jsx, keyframes

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(56);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/@emotion/sheet/dist/sheet.browser.esm.js
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (false) {}
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();



// CONCATENATED MODULE: ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ var stylis_browser_esm = (stylis_min);

// CONCATENATED MODULE: ./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ var weak_memoize_browser_esm = (weakMemoize);

// CONCATENATED MODULE: ./node_modules/@emotion/cache/dist/cache.browser.esm.js




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};

var cache_browser_esm_createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new stylis_browser_esm(stylisOptions);

  if (false) {}

  var inserted = {}; // $FlowFixMe

  var container;

  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if (false) { var map; }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  if (false) { var commentEnd, commentStart; }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ var cache_browser_esm = (cache_browser_esm_createCache);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var helpers_inheritsLoose = __webpack_require__(197);

// EXTERNAL MODULE: ./node_modules/@emotion/utils/dist/utils.browser.esm.js
var utils_browser_esm = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js + 2 modules
var serialize_browser_esm = __webpack_require__(49);

// CONCATENATED MODULE: ./node_modules/@emotion/core/dist/emotion-element-57a3a7a3.browser.esm.js






var emotion_element_57a3a7a3_browser_esm_hasOwnProperty = Object.prototype.hasOwnProperty;

var EmotionCacheContext = /*#__PURE__*/Object(external_React_["createContext"])( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? cache_browser_esm() : null);
var ThemeContext = /*#__PURE__*/Object(external_React_["createContext"])({});
var CacheProvider = EmotionCacheContext.Provider;

var emotion_element_57a3a7a3_browser_esm_withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return /*#__PURE__*/Object(external_React_["createElement"])(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return /*#__PURE__*/Object(external_React_["forwardRef"])(render);
};

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if (false) {}

  var newProps = {};

  for (var key in props) {
    if (emotion_element_57a3a7a3_browser_esm_hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type; // TODO: check if this still works with all of those different JSX functions

  if (false) { var match, error; }

  return newProps;
};

var emotion_element_57a3a7a3_browser_esm_render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = Object(utils_browser_esm["a" /* getRegisteredStyles */])(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = Object(serialize_browser_esm["a" /* serializeStyles */])(registeredStyles);

  if (false) { var labelFromStack; }

  var rules = Object(utils_browser_esm["b" /* insertStyles */])(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (emotion_element_57a3a7a3_browser_esm_hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( true || false)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = /*#__PURE__*/Object(external_React_["createElement"])(type, newProps);

  return ele;
}; // eslint-disable-next-line no-undef


var Emotion = /* #__PURE__ */emotion_element_57a3a7a3_browser_esm_withEmotionCache(function (props, cache, ref) {
  if (typeof props.css === 'function') {
    return /*#__PURE__*/Object(external_React_["createElement"])(ThemeContext.Consumer, null, function (theme) {
      return emotion_element_57a3a7a3_browser_esm_render(cache, props, theme, ref);
    });
  }

  return emotion_element_57a3a7a3_browser_esm_render(cache, props, null, ref);
});

if (false) {}



// CONCATENATED MODULE: ./node_modules/@emotion/css/dist/css.browser.esm.js


function css_browser_esm_css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(serialize_browser_esm["a" /* serializeStyles */])(args);
}

/* harmony default export */ var css_browser_esm = (css_browser_esm_css);

// CONCATENATED MODULE: ./node_modules/@emotion/core/dist/core.browser.esm.js











var core_browser_esm_jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !emotion_element_57a3a7a3_browser_esm_hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return external_React_["createElement"].apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  createElementArgArray[1] = createEmotionProps(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return external_React_["createElement"].apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global = /* #__PURE__ */emotion_element_57a3a7a3_browser_esm_withEmotionCache(function (props, cache) {
  if (false) {}

  var styles = props.styles;

  if (typeof styles === 'function') {
    return /*#__PURE__*/Object(external_React_["createElement"])(ThemeContext.Consumer, null, function (theme) {
      var serialized = Object(serialize_browser_esm["a" /* serializeStyles */])([styles(theme)]);
      return /*#__PURE__*/Object(external_React_["createElement"])(core_browser_esm_InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = Object(serialize_browser_esm["a" /* serializeStyles */])([styles]);
  return /*#__PURE__*/Object(external_React_["createElement"])(core_browser_esm_InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
});

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var core_browser_esm_InnerGlobal = /*#__PURE__*/function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new StyleSheet({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      Object(utils_browser_esm["b" /* insertStyles */])(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {

    return null;
  };

  return InnerGlobal;
}(external_React_["Component"]);

var core_browser_esm_keyframes = function keyframes() {
  var insertable = css_browser_esm.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(utils_browser_esm["a" /* getRegisteredStyles */])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = emotion_element_57a3a7a3_browser_esm_withEmotionCache(function (props, context) {
  return /*#__PURE__*/Object(external_React_["createElement"])(ThemeContext.Consumer, null, function (theme) {
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && "production" !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = Object(serialize_browser_esm["a" /* serializeStyles */])(args, context.registered);

      {
        Object(utils_browser_esm["b" /* insertStyles */])(context, serialized, false);
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "production" !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;

    return ele;
  });
});




/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
}

/***/ }),

/***/ 7:
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

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Button */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57);
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(159);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(133);




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



var disabledEventsOnDisabledButton = ['onMouseDown', 'onClick'];
function Button(props, ref) {
  var href = props.href,
      target = props.target,
      isPrimary = props.isPrimary,
      isSmall = props.isSmall,
      isTertiary = props.isTertiary,
      isPressed = props.isPressed,
      isBusy = props.isBusy,
      isDefault = props.isDefault,
      isSecondary = props.isSecondary,
      isLink = props.isLink,
      isDestructive = props.isDestructive,
      className = props.className,
      disabled = props.disabled,
      icon = props.icon,
      iconSize = props.iconSize,
      showTooltip = props.showTooltip,
      tooltipPosition = props.tooltipPosition,
      shortcut = props.shortcut,
      label = props.label,
      children = props.children,
      isFocusable = props.__experimentalIsFocusable,
      additionalProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["href", "target", "isPrimary", "isSmall", "isTertiary", "isPressed", "isBusy", "isDefault", "isSecondary", "isLink", "isDestructive", "className", "disabled", "icon", "iconSize", "showTooltip", "tooltipPosition", "shortcut", "label", "children", "__experimentalIsFocusable"]);

  if (isDefault) {
    Object(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])('Button isDefault prop', {
      alternative: 'isSecondary'
    });
  }

  var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()('components-button', className, {
    'is-secondary': isDefault || isSecondary,
    'is-primary': isPrimary,
    'is-small': isSmall,
    'is-tertiary': isTertiary,
    'is-pressed': isPressed,
    'is-busy': isBusy,
    'is-link': isLink,
    'is-destructive': isDestructive,
    'has-text': !!icon && !!children,
    'has-icon': !!icon
  });
  var trulyDisabled = disabled && !isFocusable;
  var Tag = href !== undefined && !trulyDisabled ? 'a' : 'button';
  var tagProps = Tag === 'a' ? {
    href: href,
    target: target
  } : {
    type: 'button',
    disabled: trulyDisabled,
    'aria-pressed': isPressed
  };

  if (disabled && isFocusable) {
    // In this case, the button will be disabled, but still focusable and
    // perceivable by screen reader users.
    tagProps['aria-disabled'] = true;

    var _iterator = _createForOfIteratorHelper(disabledEventsOnDisabledButton),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var disabledEvent = _step.value;

        additionalProps[disabledEvent] = function (event) {
          event.stopPropagation();
          event.preventDefault();
        };
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } // Should show the tooltip if...


  var shouldShowTooltip = !trulyDisabled && ( // an explicit tooltip is passed or...
  showTooltip && label || // there's a shortcut or...
  shortcut || // there's a label and...
  !!label && ( // the children are empty and...
  !children || Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isArray"])(children) && !children.length) && // the tooltip is not explicitly disabled.
  false !== showTooltip);
  var element = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, tagProps, additionalProps, {
    className: classes,
    "aria-label": additionalProps['aria-label'] || label,
    ref: ref
  }), icon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_icon__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    icon: icon,
    size: iconSize
  }), children);

  if (!shouldShowTooltip) {
    return element;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_tooltip__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    text: label,
    shortcut: shortcut,
    position: tooltipPosition
  }, element);
}
/* harmony default export */ __webpack_exports__["a"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(Button));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultProps */
/* unused harmony export Card */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(192);
/* harmony import */ var _styles_card_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(193);




/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



var defaultProps = {
  isBorderless: false,
  isElevated: false,
  size: 'medium'
};
function Card(props) {
  var className = props.className,
      isBorderless = props.isBorderless,
      isElevated = props.isElevated,
      size = props.size,
      additionalProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["className", "isBorderless", "isElevated", "size"]);

  var Provider = _context__WEBPACK_IMPORTED_MODULE_4__[/* CardContext */ "a"].Provider;
  var contextProps = {
    isBorderless: isBorderless,
    isElevated: isElevated,
    size: size
  };
  var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()('components-card', isBorderless && 'is-borderless', isElevated && 'is-elevated', size && "is-size-".concat(size), className);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Provider, {
    value: contextProps
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_styles_card_styles__WEBPACK_IMPORTED_MODULE_5__[/* CardUI */ "b"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, additionalProps, {
    className: classes
  })));
}
Card.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Card);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultProps */
/* unused harmony export CardBody */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_card_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(193);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(192);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



var defaultProps = {
  isShady: false,
  size: 'medium'
};
function CardBody(props) {
  var className = props.className,
      isShady = props.isShady,
      additionalProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props, ["className", "isShady"]);

  var mergedProps = _objectSpread(_objectSpread(_objectSpread({}, defaultProps), Object(_context__WEBPACK_IMPORTED_MODULE_6__[/* useCardContext */ "b"])()), props);

  var size = mergedProps.size;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('components-card__body', isShady && 'is-shady', size && "is-size-".concat(size), className);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_styles_card_styles__WEBPACK_IMPORTED_MODULE_5__[/* BodyUI */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, additionalProps, {
    className: classes
  }));
}
/* harmony default export */ __webpack_exports__["a"] = (CardBody);
//# sourceMappingURL=body.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ build_module_focus; });

// UNUSED EXPORTS: isHorizontalEdge, isVerticalEdge, getRectangleFromRange, computeCaretRect, placeCaretAtHorizontalEdge, placeCaretAtVerticalEdge, isTextField, isNumberInput, documentHasTextSelection, documentHasUncollapsedSelection, documentHasSelection, isEntirelySelected, getScrollContainer, getOffsetParent, replace, remove, insertAfter, unwrap, replaceTag, wrap, __unstableStripHTML, isEmpty, removeInvalidHTML, getPhrasingContentSchema, isPhrasingContent, isTextContent

// NAMESPACE OBJECT: ./node_modules/@wordpress/components/node_modules/@wordpress/dom/build-module/focusable.js
var focusable_namespaceObject = {};
__webpack_require__.r(focusable_namespaceObject);
__webpack_require__.d(focusable_namespaceObject, "find", function() { return find; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/components/node_modules/@wordpress/dom/build-module/tabbable.js
var tabbable_namespaceObject = {};
__webpack_require__.r(tabbable_namespaceObject);
__webpack_require__.d(tabbable_namespaceObject, "isTabbableIndex", function() { return isTabbableIndex; });
__webpack_require__.d(tabbable_namespaceObject, "find", function() { return tabbable_find; });
__webpack_require__.d(tabbable_namespaceObject, "findPrevious", function() { return findPrevious; });
__webpack_require__.d(tabbable_namespaceObject, "findNext", function() { return findNext; });

// CONCATENATED MODULE: ./node_modules/@wordpress/components/node_modules/@wordpress/dom/build-module/focusable.js
/**
 * References:
 *
 * Focusable:
 *  - https://www.w3.org/TR/html5/editing.html#focus-management
 *
 * Sequential focus navigation:
 *  - https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
 *
 * Disabled elements:
 *  - https://www.w3.org/TR/html5/disabled-elements.html#disabled-elements
 *
 * getClientRects algorithm (requiring layout box):
 *  - https://www.w3.org/TR/cssom-view-1/#extension-to-the-element-interface
 *
 * AREA elements associated with an IMG:
 *  - https://w3c.github.io/html/editing.html#data-model
 */
var SELECTOR = ['[tabindex]', 'a[href]', 'button:not([disabled])', 'input:not([type="hidden"]):not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'iframe', 'object', 'embed', 'area[href]', '[contenteditable]:not([contenteditable=false])'].join(',');
/**
 * Returns true if the specified element is visible (i.e. neither display: none
 * nor visibility: hidden).
 *
 * @param {Element} element DOM element to test.
 *
 * @return {boolean} Whether element is visible.
 */

function isVisible(element) {
  return element.offsetWidth > 0 || element.offsetHeight > 0 || element.getClientRects().length > 0;
}
/**
 * Returns true if the specified element should be skipped from focusable elements.
 * For now it rather specific for `iframes` and  if tabindex attribute is set to -1.
 *
 * @param {Element} element DOM element to test.
 *
 * @return {boolean} Whether element should be skipped from focusable elements.
 */


function skipFocus(element) {
  return element.nodeName.toLowerCase() === 'iframe' && element.getAttribute('tabindex') === '-1';
}
/**
 * Returns true if the specified area element is a valid focusable element, or
 * false otherwise. Area is only focusable if within a map where a named map
 * referenced by an image somewhere in the document.
 *
 * @param {Element} element DOM area element to test.
 *
 * @return {boolean} Whether area element is valid for focus.
 */


function isValidFocusableArea(element) {
  var map = element.closest('map[name]');

  if (!map) {
    return false;
  }

  var img = element.ownerDocument.querySelector('img[usemap="#' + map.name + '"]');
  return !!img && isVisible(img);
}
/**
 * Returns all focusable elements within a given context.
 *
 * @param {Element} context Element in which to search.
 *
 * @return {Element[]} Focusable elements.
 */


function find(context) {
  var elements = context.querySelectorAll(SELECTOR);
  return Array.from(elements).filter(function (element) {
    if (!isVisible(element) || skipFocus(element)) {
      return false;
    }

    var nodeName = element.nodeName;

    if ('AREA' === nodeName) {
      return isValidFocusableArea(element);
    }

    return true;
  });
}
//# sourceMappingURL=focusable.js.map
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/node_modules/@wordpress/dom/build-module/tabbable.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Returns the tab index of the given element. In contrast with the tabIndex
 * property, this normalizes the default (0) to avoid browser inconsistencies,
 * operating under the assumption that this function is only ever called with a
 * focusable node.
 *
 * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1190261
 *
 * @param {Element} element Element from which to retrieve.
 *
 * @return {?number} Tab index of element (default 0).
 */

function getTabIndex(element) {
  var tabIndex = element.getAttribute('tabindex');
  return tabIndex === null ? 0 : parseInt(tabIndex, 10);
}
/**
 * Returns true if the specified element is tabbable, or false otherwise.
 *
 * @param {Element} element Element to test.
 *
 * @return {boolean} Whether element is tabbable.
 */


function isTabbableIndex(element) {
  return getTabIndex(element) !== -1;
}
/**
 * Returns a stateful reducer function which constructs a filtered array of
 * tabbable elements, where at most one radio input is selected for a given
 * name, giving priority to checked input, falling back to the first
 * encountered.
 *
 * @return {Function} Radio group collapse reducer.
 */

function createStatefulCollapseRadioGroup() {
  var CHOSEN_RADIO_BY_NAME = {};
  return function collapseRadioGroup(result, element) {
    var nodeName = element.nodeName,
        type = element.type,
        checked = element.checked,
        name = element.name; // For all non-radio tabbables, construct to array by concatenating.

    if (nodeName !== 'INPUT' || type !== 'radio' || !name) {
      return result.concat(element);
    }

    var hasChosen = CHOSEN_RADIO_BY_NAME.hasOwnProperty(name); // Omit by skipping concatenation if the radio element is not chosen.

    var isChosen = checked || !hasChosen;

    if (!isChosen) {
      return result;
    } // At this point, if there had been a chosen element, the current
    // element is checked and should take priority. Retroactively remove
    // the element which had previously been considered the chosen one.


    if (hasChosen) {
      var hadChosenElement = CHOSEN_RADIO_BY_NAME[name];
      result = Object(external_lodash_["without"])(result, hadChosenElement);
    }

    CHOSEN_RADIO_BY_NAME[name] = element;
    return result.concat(element);
  };
}
/**
 * An array map callback, returning an object with the element value and its
 * array index location as properties. This is used to emulate a proper stable
 * sort where equal tabIndex should be left in order of their occurrence in the
 * document.
 *
 * @param {Element} element Element.
 * @param {number}  index   Array index of element.
 *
 * @return {Object} Mapped object with element, index.
 */


function mapElementToObjectTabbable(element, index) {
  return {
    element: element,
    index: index
  };
}
/**
 * An array map callback, returning an element of the given mapped object's
 * element value.
 *
 * @param {Object} object Mapped object with index.
 *
 * @return {Element} Mapped object element.
 */


function mapObjectTabbableToElement(object) {
  return object.element;
}
/**
 * A sort comparator function used in comparing two objects of mapped elements.
 *
 * @see mapElementToObjectTabbable
 *
 * @param {Object} a First object to compare.
 * @param {Object} b Second object to compare.
 *
 * @return {number} Comparator result.
 */


function compareObjectTabbables(a, b) {
  var aTabIndex = getTabIndex(a.element);
  var bTabIndex = getTabIndex(b.element);

  if (aTabIndex === bTabIndex) {
    return a.index - b.index;
  }

  return aTabIndex - bTabIndex;
}
/**
 * Givin focusable elements, filters out tabbable element.
 *
 * @param {Array} focusables Focusable elements to filter.
 *
 * @return {Array} Tabbable elements.
 */


function filterTabbable(focusables) {
  return focusables.filter(isTabbableIndex).map(mapElementToObjectTabbable).sort(compareObjectTabbables).map(mapObjectTabbableToElement).reduce(createStatefulCollapseRadioGroup(), []);
}

function tabbable_find(context) {
  return filterTabbable(find(context));
}
/**
 * Given a focusable element, find the preceding tabbable element.
 *
 * @param {Element} element The focusable element before which to look. Defaults
 *                          to the active element.
 */

function findPrevious(element) {
  var focusables = find(element.ownerDocument.body);
  var index = focusables.indexOf(element); // Remove all focusables after and including `element`.

  focusables.length = index;
  return Object(external_lodash_["last"])(filterTabbable(focusables));
}
/**
 * Given a focusable element, find the next tabbable element.
 *
 * @param {Element} element The focusable element after which to look. Defaults
 *                          to the active element.
 */

function findNext(element) {
  var focusables = find(element.ownerDocument.body);
  var index = focusables.indexOf(element); // Remove all focusables before and inside `element`.

  var remaining = focusables.slice(index + 1).filter(function (node) {
    return !element.contains(node);
  });
  return Object(external_lodash_["first"])(filterTabbable(remaining));
}
//# sourceMappingURL=tabbable.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/node_modules/@wordpress/dom/build-module/index.js
/**
 * Internal dependencies
 */


/**
 * Object grouping `focusable` and `tabbable` utils
 * under the keys with the same name.
 */

var build_module_focus = {
  focusable: focusable_namespaceObject,
  tabbable: tabbable_namespaceObject
};


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(3);

// EXTERNAL MODULE: ./client/settings/index.js
var settings = __webpack_require__(36);

// EXTERNAL MODULE: ./client/marketing/coupons/style.scss
var style = __webpack_require__(723);

// EXTERNAL MODULE: ./client/marketing/components/recommended-extensions/index.js + 1 modules
var recommended_extensions = __webpack_require__(448);

// EXTERNAL MODULE: ./client/marketing/components/knowledge-base/index.js + 1 modules
var knowledge_base = __webpack_require__(449);

// EXTERNAL MODULE: ./client/marketing/data/index.js + 5 modules
var data = __webpack_require__(556);

// CONCATENATED MODULE: ./client/marketing/coupons/index.js


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






var coupons_CouponsOverview = function CouponsOverview() {
  var allowMarketplaceSuggestions = Object(settings["g" /* getSetting */])('allowMarketplaceSuggestions', false);
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-marketing-coupons"
  }, allowMarketplaceSuggestions && Object(external_this_wp_element_["createElement"])(recommended_extensions["a" /* default */], {
    title: Object(external_this_wp_i18n_["__"])('Recommended coupon extensions', 'woocommerce-admin'),
    description: Object(external_this_wp_i18n_["__"])('Take your coupon marketing to the next level with our recommended coupon extensions.', 'woocommerce-admin'),
    category: "coupons"
  }), Object(external_this_wp_element_["createElement"])(knowledge_base["a" /* default */], {
    category: "coupons",
    description: Object(external_this_wp_i18n_["__"])('Learn the ins and outs of successful coupon marketing from the experts at WooCommerce.', 'woocommerce-admin')
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
  Object(external_this_wp_element_["render"])(Object(external_this_wp_element_["createElement"])(coupons, null), postForm.parentNode.appendChild(couponRoot));
}

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spinner; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function Spinner() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "components-spinner"
  });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getPhrasingContentSchema */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isPhrasingContent; });
/* unused harmony export isTextContent */
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * All phrasing content elements.
 *
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#phrasing-content-0
 */

/**
 * All text-level semantic elements.
 *
 * @see https://html.spec.whatwg.org/multipage/text-level-semantics.html
 */

var textContentSchema = {
  strong: {},
  em: {},
  s: {},
  del: {},
  ins: {},
  a: {
    attributes: ['href', 'target', 'rel']
  },
  code: {},
  abbr: {
    attributes: ['title']
  },
  sub: {},
  sup: {},
  br: {},
  small: {},
  // To do: fix blockquote.
  // cite: {},
  q: {
    attributes: ['cite']
  },
  dfn: {
    attributes: ['title']
  },
  data: {
    attributes: ['value']
  },
  time: {
    attributes: ['datetime']
  },
  var: {},
  samp: {},
  kbd: {},
  i: {},
  b: {},
  u: {},
  mark: {},
  ruby: {},
  rt: {},
  rp: {},
  bdi: {
    attributes: ['dir']
  },
  bdo: {
    attributes: ['dir']
  },
  wbr: {},
  '#text': {}
}; // Recursion is needed.
// Possible: strong > em > strong.
// Impossible: strong > strong.

Object(lodash__WEBPACK_IMPORTED_MODULE_1__["without"])(Object.keys(textContentSchema), '#text', 'br').forEach(function (tag) {
  textContentSchema[tag].children = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(textContentSchema, tag);
});
/**
 * Embedded content elements.
 *
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#embedded-content-0
 */

var embeddedContentSchema = {
  audio: {
    attributes: ['src', 'preload', 'autoplay', 'mediagroup', 'loop', 'muted']
  },
  canvas: {
    attributes: ['width', 'height']
  },
  embed: {
    attributes: ['src', 'type', 'width', 'height']
  },
  img: {
    attributes: ['alt', 'src', 'srcset', 'usemap', 'ismap', 'width', 'height']
  },
  object: {
    attributes: ['data', 'type', 'name', 'usemap', 'form', 'width', 'height']
  },
  video: {
    attributes: ['src', 'poster', 'preload', 'autoplay', 'mediagroup', 'loop', 'muted', 'controls', 'width', 'height']
  }
};
/**
 * Phrasing content elements.
 *
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#phrasing-content-0
 */

var phrasingContentSchema = _objectSpread(_objectSpread({}, textContentSchema), embeddedContentSchema);
/**
 * Get schema of possible paths for phrasing content.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content
 *
 * @param {string} context Set to "paste" to exclude invisible elements and
 *                         sensitive data.
 *
 * @return {Object} Schema.
 */


function getPhrasingContentSchema(context) {
  if (context !== 'paste') {
    return phrasingContentSchema;
  }

  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(_objectSpread(_objectSpread({}, phrasingContentSchema), {}, {
    // We shouldn't paste potentially sensitive information which is not
    // visible to the user when pasted, so strip the attributes.
    ins: {
      children: phrasingContentSchema.ins.children
    },
    del: {
      children: phrasingContentSchema.del.children
    }
  }), ['u', // Used to mark misspelling. Shouldn't be pasted.
  'abbr', // Invisible.
  'data', // Invisible.
  'time', // Invisible.
  'wbr', // Invisible.
  'bdi', // Invisible.
  'bdo' // Invisible.
  ]);
}
/**
 * Find out whether or not the given node is phrasing content.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content
 *
 * @param {Element} node The node to test.
 *
 * @return {boolean} True if phrasing content, false if not.
 */

function isPhrasingContent(node) {
  var tag = node.nodeName.toLowerCase();
  return getPhrasingContentSchema().hasOwnProperty(tag) || tag === 'span';
}
function isTextContent(node) {
  var tag = node.nodeName.toLowerCase();
  return textContentSchema.hasOwnProperty(tag) || tag === 'span';
}
//# sourceMappingURL=phrasing-content.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useSlot; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slot_fill_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


function useSlot(name) {
  var registry = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_slot_fill_context__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
  var slot = registry.slots[name] || {};
  var slotFills = registry.fills[name];
  var fills = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return slotFills || [];
  }, [slotFills]);
  var updateSlot = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (fillProps) {
    registry.updateSlot(name, fillProps);
  }, [name, registry.updateSlot]);
  var unregisterSlot = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (slotRef) {
    registry.unregisterSlot(name, slotRef);
  }, [name, registry.unregisterSlot]);
  var registerFill = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (fillRef) {
    registry.registerFill(name, fillRef);
  }, [name, registry.registerFill]);
  var unregisterFill = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (fillRef) {
    registry.unregisterFill(name, fillRef);
  }, [name, registry.unregisterFill]);
  return _objectSpread(_objectSpread({}, slot), {}, {
    updateSlot: updateSlot,
    unregisterSlot: unregisterSlot,
    fills: fills,
    registerFill: registerFill,
    unregisterFill: unregisterFill
  });
}
//# sourceMappingURL=use-slot.js.map

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

(function() { module.exports = this["wc"]["components"]; }());

/***/ }),

/***/ 79:
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

/***/ 8:
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

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Internal dependencies;
 */
var isShallowEqualObjects = __webpack_require__( 143 );
var isShallowEqualArrays = __webpack_require__( 144 );

var isArray = Array.isArray;

/**
 * @typedef {Record<string, any>} ComparableObject
 */

/**
 * Returns true if the two arrays or objects are shallow equal, or false
 * otherwise.
 *
 * @param {any[]|ComparableObject} a First object or array to compare.
 * @param {any[]|ComparableObject} b Second object or array to compare.
 *
 * @return {boolean} Whether the two values are shallow equal.
 */
function isShallowEqual( a, b ) {
	if ( a && b ) {
		if ( a.constructor === Object && b.constructor === Object ) {
			return isShallowEqualObjects( a, b );
		} else if ( isArray( a ) && isArray( b ) ) {
			return isShallowEqualArrays( a, b );
		}
	}

	return a === b;
}

module.exports = isShallowEqual;
module.exports.isShallowEqualObjects = isShallowEqualObjects;
module.exports.isShallowEqualArrays = isShallowEqualArrays;


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(79);

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

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Circle; });
/* unused harmony export G */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Path; });
/* unused harmony export Polygon */
/* unused harmony export Rect */
/* unused harmony export Defs */
/* unused harmony export RadialGradient */
/* unused harmony export LinearGradient */
/* unused harmony export Stop */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SVG; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/** @typedef {{isPressed?: boolean} & import('react').ComponentPropsWithoutRef<'svg'>} SVGProps */

/**
 * @param {import('react').ComponentPropsWithoutRef<'circle'>} props
 *
 * @return {JSX.Element} Circle component
 */

var Circle = function Circle(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])('circle', props);
};
/**
 * @param {import('react').ComponentPropsWithoutRef<'g'>} props
 *
 * @return {JSX.Element} G component
 */

var G = function G(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])('g', props);
};
/**
 * @param {import('react').ComponentPropsWithoutRef<'path'>} props
 *
 * @return {JSX.Element} Path component
 */

var Path = function Path(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])('path', props);
};
/**
 * @param {import('react').ComponentPropsWithoutRef<'polygon'>} props
 *
 * @return {JSX.Element} Polygon component
 */

var Polygon = function Polygon(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])('polygon', props);
};
/**
 * @param {import('react').ComponentPropsWithoutRef<'rect'>} props
 *
 * @return {JSX.Element} Rect component
 */

var Rect = function Rect(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])('rect', props);
};
/**
 * @param {import('react').ComponentPropsWithoutRef<'defs'>} props
 *
 * @return {JSX.Element} Defs component
 */

var Defs = function Defs(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])('defs', props);
};
/**
 * @param {import('react').ComponentPropsWithoutRef<'radialGradient'>} props
 *
 * @return {JSX.Element} RadialGradient component
 */

var RadialGradient = function RadialGradient(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])('radialGradient', props);
};
/**
 * @param {import('react').ComponentPropsWithoutRef<'linearGradient'>} props
 *
 * @return {JSX.Element} LinearGradient component
 */

var LinearGradient = function LinearGradient(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])('linearGradient', props);
};
/**
 * @param {import('react').ComponentPropsWithoutRef<'stop'>} props
 *
 * @return {JSX.Element} Stop component
 */

var Stop = function Stop(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])('stop', props);
};
/**
 *
 * @param {SVGProps} props isPressed indicates whether the SVG should appear as pressed.
 *                         Other props will be passed through to svg component.
 *
 * @return {JSX.Element} Stop component
 */

var SVG = function SVG(_ref) {
  var className = _ref.className,
      isPressed = _ref.isPressed,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["className", "isPressed"]);

  var appliedProps = _objectSpread(_objectSpread({}, props), {}, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
      'is-pressed': isPressed
    }) || undefined,
    role: 'img',
    'aria-hidden': true,
    focusable: false
  }); // Disable reason: We need to have a way to render HTML tag for web.
  // eslint-disable-next-line react/forbid-elements


  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("svg", appliedProps);
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return warning; });
function isDev() {
  return typeof process !== 'undefined' && process.env && "production" !== 'production';
}
/**
 * Shows a warning with `message` if environment is not `production`.
 *
 * @param {string} message Message to show in the warning.
 *
 * @example
 * ```js
 * import warning from '@wordpress/warning';
 *
 * function MyComponent( props ) {
 *   if ( ! props.title ) {
 *     warning( '`props.title` was not passed' );
 *   }
 *   ...
 * }
 * ```
 */


function warning(message) {
  if (!isDev()) {
    return;
  } // eslint-disable-next-line no-console


  console.warn(message); // Throwing an error and catching it immediately to improve debugging
  // A consumer can use 'pause on caught exceptions'
  // https://github.com/facebook/react/issues/4216

  try {
    throw Error(message);
  } catch (x) {// do nothing
  }
}
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(33)))

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BASE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return G2; });
/* unused harmony export DARK_GRAY */
/* unused harmony export DARK_OPACITY */
/* unused harmony export DARK_OPACITY_LIGHT */
/* unused harmony export LIGHT_GRAY */
/* unused harmony export LIGHT_OPACITY_LIGHT */
/* unused harmony export BLUE */
/* unused harmony export ALERT */
/* unused harmony export ADMIN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COLORS; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


var BASE = {
  black: '#000',
  white: '#fff'
};
/**
 * TODO: Continue to update values as "G2" design evolves.
 *
 * "G2" refers to the movement to advance the interface of the block editor.
 * https://github.com/WordPress/gutenberg/issues/18667
 */

var G2 = {
  blue: {
    medium: {
      focus: '#007cba',
      focusDark: '#fff'
    }
  },
  gray: {
    900: '#1e1e1e',
    700: '#757575',
    // Meets 4.6:1 text contrast against white.
    600: '#949494',
    // Meets 3:1 UI or large text contrast against white.
    400: '#ccc',
    200: '#ddd',
    // Used for most borders.
    100: '#f0f0f0'
  },
  darkGray: {
    primary: '#1e1e1e'
  },
  mediumGray: {
    text: '#757575'
  },
  lightGray: {
    ui: '#949494',
    secondary: '#ccc',
    tertiary: '#e7e8e9'
  }
};
var DARK_GRAY = {
  900: '#191e23',
  800: '#23282d',
  700: '#32373c',
  600: '#40464d',
  500: '#555d66',
  // Use this most of the time for dark items.
  400: '#606a73',
  300: '#6c7781',
  // Lightest gray that can be used for AA text contrast.
  200: '#7e8993',
  150: '#8d96a0',
  // Lightest gray that can be used for AA non-text contrast.
  100: '#8f98a1'
};
var DARK_OPACITY = {
  900: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])('#000510', 0.9),
  800: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])('#00000a', 0.85),
  700: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])('#06060b', 0.8),
  600: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])('#000913', 0.75),
  500: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])('#0a1829', 0.7),
  400: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])('#0a1829', 0.65),
  300: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])('#0e1c2e', 0.62),
  200: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])('#162435', 0.55),
  100: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])('#223443', 0.5),
  backgroundFill: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])(DARK_GRAY[700], 0.7)
};
var DARK_OPACITY_LIGHT = {
  900: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])('#304455', 0.45),
  800: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])('#425863', 0.4),
  700: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])('#667886', 0.35),
  600: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])('#7b86a2', 0.3),
  500: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])('#9197a2', 0.25),
  400: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])('#95959c', 0.2),
  300: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])('#829493', 0.15),
  200: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])('#8b8b96', 0.1),
  100: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])('#747474', 0.05)
};
var LIGHT_GRAY = {
  900: '#a2aab2',
  800: '#b5bcc2',
  700: '#ccd0d4',
  600: '#d7dade',
  500: '#e2e4e7',
  // Good for "grayed" items and borders.
  400: '#e8eaeb',
  // Good for "readonly" input fields and special text selection.
  300: '#edeff0',
  200: '#f3f4f5',
  100: '#f8f9f9'
};
var LIGHT_OPACITY_LIGHT = {
  900: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])(BASE.white, 0.5),
  800: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])(BASE.white, 0.45),
  700: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])(BASE.white, 0.4),
  600: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])(BASE.white, 0.35),
  500: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])(BASE.white, 0.3),
  400: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])(BASE.white, 0.25),
  300: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])(BASE.white, 0.2),
  200: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])(BASE.white, 0.15),
  100: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])(BASE.white, 0.1),
  backgroundFill: Object(_colors__WEBPACK_IMPORTED_MODULE_2__[/* rgba */ "b"])(LIGHT_GRAY[300], 0.8)
}; // Additional colors.
// Some are from https://make.wordpress.org/design/handbook/foundations/colors/.

var BLUE = {
  wordpress: {
    700: '#00669b'
  },
  dark: {
    900: '#0071a1'
  },
  medium: {
    900: '#006589',
    800: '#00739c',
    700: '#007fac',
    600: '#008dbe',
    500: '#00a0d2',
    400: '#33b3db',
    300: '#66c6e4',
    200: '#bfe7f3',
    100: '#e5f5fa',
    highlight: '#b3e7fe',
    focus: '#007cba'
  }
};
var ALERT = {
  yellow: '#f0b849',
  red: '#d94f4f',
  green: '#4ab866'
};
var ADMIN = {
  theme: "var( --wp-admin-theme-color, ".concat(BLUE.wordpress[700], ")"),
  themeDark10: "var( --wp-admin-theme-color-darker-10, ".concat(BLUE.medium.focus, ")")
}; // Namespaced values for raw colors hex codes

var UI = {
  theme: ADMIN.theme,
  background: BASE.white,
  backgroundDisabled: LIGHT_GRAY[200],
  border: G2.gray[700],
  borderFocus: ADMIN.themeDark10,
  borderDisabled: G2.gray[400],
  borderLight: G2.gray[200],
  label: DARK_GRAY[500],
  textDisabled: DARK_GRAY[150],
  textDark: BASE.white,
  textLight: BASE.black
};
var COLORS = _objectSpread(_objectSpread({}, BASE), {}, {
  darkGray: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["merge"])({}, DARK_GRAY, G2.darkGray),
  darkOpacity: DARK_OPACITY,
  darkOpacityLight: DARK_OPACITY_LIGHT,
  mediumGray: G2.mediumGray,
  lightGray: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["merge"])({}, LIGHT_GRAY, G2.lightGray),
  lightGrayLight: LIGHT_OPACITY_LIGHT,
  blue: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["merge"])({}, BLUE, G2.blue),
  alert: ALERT,
  admin: ADMIN,
  ui: UI
});
/* unused harmony default export */ var _unused_webpack_default_export = (COLORS);
//# sourceMappingURL=colors-values.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Given a function mapping a component to an enhanced component and modifier
 * name, returns the enhanced component augmented with a generated displayName.
 *
 * @param {Function} mapComponentToEnhancedComponent Function mapping component
 *                                                   to enhanced component.
 * @param {string}   modifierName                    Seed name from which to
 *                                                   generated display name.
 *
 * @return {WPComponent} Component class with generated display name assigned.
 */

function createHigherOrderComponent(mapComponentToEnhancedComponent, modifierName) {
  return function (OriginalComponent) {
    var EnhancedComponent = mapComponentToEnhancedComponent(OriginalComponent);
    var _OriginalComponent$di = OriginalComponent.displayName,
        displayName = _OriginalComponent$di === void 0 ? OriginalComponent.name || 'Component' : _OriginalComponent$di;
    EnhancedComponent.displayName = "".concat(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["upperFirst"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["camelCase"])(modifierName)), "(").concat(displayName, ")");
    return EnhancedComponent;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createHigherOrderComponent);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ })

/******/ });