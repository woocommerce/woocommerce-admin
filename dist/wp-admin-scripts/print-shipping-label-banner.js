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
/******/ 	return __webpack_require__(__webpack_require__.s = 733);
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

/***/ 3:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useInstanceId; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

var instanceMap = new WeakMap();
/**
 * Creates a new id for a given object.
 *
 * @param {Object} object Object reference to create an id for.
 */

function createId(object) {
  var instances = instanceMap.get(object) || 0;
  instanceMap.set(object, instances + 1);
  return instances;
}
/**
 * Provides a unique instance ID.
 *
 * @param {Object} object Object reference to create an id for.
 * @param {string} prefix Prefix for the unique id.
 */


function useInstanceId(object, prefix) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var id = createId(object);
    return prefix ? "".concat(prefix, "-").concat(id) : id;
  }, [object]);
}
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

/***/ 35:
/***/ (function(module, exports) {

(function() { module.exports = this["wc"]["data"]; }());

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

/***/ 43:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(12);

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

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ 575:
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

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(5);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wc","data"]}
var external_this_wc_data_ = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(14);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(98);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(17);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(15);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(11);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(18);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(19);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__(575);

// EXTERNAL MODULE: ./node_modules/@wordpress/primitives/build-module/svg/index.js
var svg = __webpack_require__(88);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/node_modules/@wordpress/icons/build-module/library/external.js


/**
 * WordPress dependencies
 */

var external = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M18.2 17c0 .7-.6 1.2-1.2 1.2H7c-.7 0-1.2-.6-1.2-1.2V7c0-.7.6-1.2 1.2-1.2h3.2V4.2H7C5.5 4.2 4.2 5.5 4.2 7v10c0 1.5 1.2 2.8 2.8 2.8h10c1.5 0 2.8-1.2 2.8-2.8v-3.6h-1.5V17zM14.9 3v1.5h3.7l-6.4 6.4 1.1 1.1 6.4-6.4v3.7h1.5V3h-6.3z"
}));
/* harmony default export */ var library_external = (external);
//# sourceMappingURL=external.js.map
// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/visually-hidden/index.js + 1 modules
var visually_hidden = __webpack_require__(439);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/external-link/index.js





/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function ExternalLink(_ref, ref) {
  var href = _ref.href,
      children = _ref.children,
      className = _ref.className,
      _ref$rel = _ref.rel,
      rel = _ref$rel === void 0 ? '' : _ref$rel,
      additionalProps = Object(objectWithoutProperties["a" /* default */])(_ref, ["href", "children", "className", "rel"]);

  rel = Object(external_lodash_["uniq"])(Object(external_lodash_["compact"])([].concat(Object(toConsumableArray["a" /* default */])(rel.split(' ')), ['external', 'noreferrer', 'noopener']))).join(' ');
  var classes = classnames_default()('components-external-link', className);
  return Object(external_this_wp_element_["createElement"])("a", Object(esm_extends["a" /* default */])({}, additionalProps, {
    className: classes,
    href: href // eslint-disable-next-line react/jsx-no-target-blank
    ,
    target: "_blank",
    rel: rel,
    ref: ref
  }), children, Object(external_this_wp_element_["createElement"])(visually_hidden["a" /* default */], {
    as: "span"
  },
  /* translators: accessibility text */
  Object(external_this_wp_i18n_["__"])('(opens in a new tab)')), Object(external_this_wp_element_["createElement"])(icon["a" /* default */], {
    icon: library_external,
    className: "components-external-link__icon"
  }));
}
/* harmony default export */ var external_link = (Object(external_this_wp_element_["forwardRef"])(ExternalLink));
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/compose.js
var compose = __webpack_require__(277);

// EXTERNAL MODULE: ./node_modules/interpolate-components/lib/index.js
var lib = __webpack_require__(42);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(20);

// EXTERNAL MODULE: ./client/settings/index.js
var settings = __webpack_require__(36);

// EXTERNAL MODULE: external {"this":["wc","tracks"]}
var external_this_wc_tracks_ = __webpack_require__(64);

// EXTERNAL MODULE: ./client/wp-admin-scripts/print-shipping-label-banner/style.scss
var style = __webpack_require__(531);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/modal/index.js + 4 modules
var modal = __webpack_require__(736);

// CONCATENATED MODULE: ./client/wp-admin-scripts/print-shipping-label-banner/dismiss-modal/index.js









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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

      return Object(external_this_wp_element_["createElement"])(modal["a" /* default */], {
        title: Object(external_this_wp_i18n_["__"])('Are you sure?', 'woocommerce-admin'),
        onRequestClose: onClose,
        className: "wc-admin-shipping-banner__dismiss-modal"
      }, Object(external_this_wp_element_["createElement"])("p", {
        className: "wc-admin-shipping-banner__dismiss-modal-help-text"
      }, Object(external_this_wp_i18n_["__"])('With WooCommerce Shipping you can Print shipping labels from your WooCommerce dashboard at the lowest USPS rates.', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])("div", {
        className: "wc-admin-shipping-banner__dismiss-modal-actions"
      }, Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
        isSecondary: true,
        onClick: this.remindMeLaterClicked
      }, Object(external_this_wp_i18n_["__"])('Remind me later', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
        isPrimary: true,
        onClick: this.closeForeverClicked
      }, Object(external_this_wp_i18n_["__"])("I don't need this", 'woocommerce-admin'))));
    }
  }]);

  return DismissModal;
}(external_this_wp_element_["Component"]);
/* harmony default export */ var dismiss_modal = (Object(compose["a" /* default */])(Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(external_this_wc_data_["OPTIONS_STORE_NAME"]),
      updateOptions = _dispatch.updateOptions;

  return {
    updateOptions: updateOptions
  };
}))(dismiss_modal_DismissModal));
// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/dashicon/index.js
var dashicon = __webpack_require__(126);

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
var setupErrorDescriptions = (_setupErrorDescriptio = {}, defineProperty_default()(_setupErrorDescriptio, setupErrorTypes.DOWNLOAD, Object(external_this_wp_i18n_["__"])('download', 'woocommerce-admin')), defineProperty_default()(_setupErrorDescriptio, setupErrorTypes.INSTALL, Object(external_this_wp_i18n_["__"])('install', 'woocommerce-admin')), defineProperty_default()(_setupErrorDescriptio, setupErrorTypes.ACTIVATE, Object(external_this_wp_i18n_["__"])('activate', 'woocommerce-admin')), defineProperty_default()(_setupErrorDescriptio, setupErrorTypes.SETUP, Object(external_this_wp_i18n_["__"])('set up', 'woocommerce-admin')), defineProperty_default()(_setupErrorDescriptio, setupErrorTypes.START, Object(external_this_wp_i18n_["__"])('start', 'woocommerce-admin')), _setupErrorDescriptio);
function SetupNotice(_ref) {
  var isSetupError = _ref.isSetupError,
      errorReason = _ref.errorReason;

  var getErrorMessage = function getErrorMessage(errorType) {
    // Default to 'set up' description if the error type somehow doesn't exist.
    var description = errorType in setupErrorDescriptions ? setupErrorDescriptions[errorType] : setupErrorDescriptions[setupErrorTypes.SETUP];
    return Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('Unable to %s the plugin. Refresh the page and try again.', 'woocommerce-admin'), description);
  };

  if (!isSetupError) {
    return null;
  }

  return Object(external_this_wp_element_["createElement"])("div", {
    className: "wc-admin-shipping-banner-install-error"
  }, Object(external_this_wp_element_["createElement"])(dashicon["a" /* default */], {
    icon: "warning"
  }), getErrorMessage(errorReason));
}
// EXTERNAL MODULE: external {"this":["wp","apiFetch"]}
var external_this_wp_apiFetch_ = __webpack_require__(43);
var external_this_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_this_wp_apiFetch_);

// CONCATENATED MODULE: ./client/wp-admin-scripts/print-shipping-label-banner/wcs-api.js
/**
 * External dependencies
 */

function acceptWcsTos() {
  var path = '/wc/v1/connect/tos';
  return external_this_wp_apiFetch_default()({
    path: path,
    method: 'POST',
    data: {
      accepted: true
    }
  });
}
function getWcsAssets() {
  var path = '/wc/v1/connect/assets';
  return external_this_wp_apiFetch_default()({
    path: path,
    method: 'GET'
  });
}
// CONCATENATED MODULE: ./client/wp-admin-scripts/print-shipping-label-banner/shipping-banner/index.js











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function shipping_banner_createSuper(Derived) { var hasNativeReflectConstruct = shipping_banner_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function shipping_banner_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */











/**
 * Internal dependencies
 */





var wcAdminAssetUrl = Object(settings["g" /* getSetting */])('wcAdminAssetUrl', '');
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
      Object(external_this_wc_tracks_["recordEvent"])(eventName, _objectSpread({
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
        return Object(external_this_wp_i18n_["__"])('You\'ve already installed WooCommerce Shipping. By clicking "Create shipping label", you agree to its {{tosLink}}Terms of Service{{/tosLink}}.', 'woocommerce-admin');
      }

      return Object(external_this_wp_i18n_["__"])('By clicking "Create shipping label", {{wcsLink}}WooCommerce Shipping{{/wcsLink}} will be installed and you agree to its {{tosLink}}Terms of Service{{/tosLink}}.', 'woocommerce-admin');
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
      var _installAndActivatePlugins = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(pluginSlug) {
        var _this$props2, installPlugins, activatePlugins, isRequesting, install, activation;

        return regenerator_default.a.wrap(function _callee$(_context) {
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

      var togglePanelText = Object(external_this_wp_i18n_["__"])('Toggle panel:', 'woocommerce-admin');

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
      var shippingLabelContainerHtml = this.generateMetaBoxHtml('woocommerce-order-label', Object(external_this_wp_i18n_["__"])('Shipping Label', 'woocommerce-admin'), {
        order: {
          id: orderId
        },
        context: 'shipping_label',
        items: itemsCount
      }); // Insert shipping label metabox just above main order details box.

      document.getElementById('woocommerce-order-data').insertAdjacentHTML('beforebegin', shippingLabelContainerHtml);
      var shipmentTrackingHtml = this.generateMetaBoxHtml('woocommerce-order-shipment-tracking', Object(external_this_wp_i18n_["__"])('Shipment Tracking', 'woocommerce-admin'), {
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
                    text: Object(external_this_wp_i18n_["__"])('Plugin installed and activated', 'woocommerce-admin')
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

      return Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])("div", {
        className: "wc-admin-shipping-banner-container"
      }, Object(external_this_wp_element_["createElement"])("img", {
        className: "wc-admin-shipping-banner-illustration",
        src: wcAdminAssetUrl + 'shippingillustration.svg',
        alt: Object(external_this_wp_i18n_["__"])('Shipping ', 'woocommerce-admin')
      }), Object(external_this_wp_element_["createElement"])("div", {
        className: "wc-admin-shipping-banner-blob"
      }, Object(external_this_wp_element_["createElement"])("h3", null, Object(external_this_wp_i18n_["__"])('Print discounted shipping labels with a click.', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])("p", null, lib_default()({
        mixedString: this.state.installText,
        components: {
          tosLink: Object(external_this_wp_element_["createElement"])(external_link, {
            href: "https://wordpress.com/tos",
            target: "_blank",
            type: "external"
          }),
          wcsLink: Object(external_this_wp_element_["createElement"])(external_link, {
            href: "https://woocommerce.com/products/shipping/",
            target: "_blank",
            type: "external",
            onClick: this.woocommerceServiceLinkClicked
          })
        }
      })), Object(external_this_wp_element_["createElement"])(SetupNotice, {
        isSetupError: this.isSetupError(),
        errorReason: this.state.setupErrorReason
      })), Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
        disabled: isShippingLabelButtonBusy,
        isPrimary: true,
        isBusy: isShippingLabelButtonBusy,
        onClick: this.createShippingLabelClicked
      }, Object(external_this_wp_i18n_["__"])('Create shipping label', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])("button", {
        onClick: this.openDismissModal,
        type: "button",
        className: "notice-dismiss",
        disabled: this.state.isShippingLabelButtonBusy
      }, Object(external_this_wp_element_["createElement"])("span", {
        className: "screen-reader-text"
      }, Object(external_this_wp_i18n_["__"])('Close Print Label Banner.', 'woocommerce-admin')))), Object(external_this_wp_element_["createElement"])(dismiss_modal, {
        visible: isDismissModalOpen,
        onClose: this.closeDismissModal,
        onCloseAll: this.hideBanner,
        trackElementClicked: this.trackElementClicked
      }));
    }
  }]);

  return ShippingBanner;
}(external_this_wp_element_["Component"]);
shipping_banner_ShippingBanner.propTypes = {
  itemsCount: prop_types_default.a.number.isRequired,
  isJetpackConnected: prop_types_default.a.bool.isRequired,
  activePlugins: prop_types_default.a.array.isRequired,
  activatePlugins: prop_types_default.a.func.isRequired,
  installPlugins: prop_types_default.a.func.isRequired,
  isRequesting: prop_types_default.a.bool.isRequired
};
/* harmony default export */ var shipping_banner = (Object(compose["a" /* default */])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select(external_this_wc_data_["PLUGINS_STORE_NAME"]),
      isPluginsRequesting = _select.isPluginsRequesting,
      isJetpackConnected = _select.isJetpackConnected,
      getActivePlugins = _select.getActivePlugins;

  var isRequesting = isPluginsRequesting('activatePlugins') || isPluginsRequesting('installPlugins');
  return {
    isRequesting: isRequesting,
    isJetpackConnected: isJetpackConnected(),
    activePlugins: getActivePlugins()
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(external_this_wc_data_["PLUGINS_STORE_NAME"]),
      activatePlugins = _dispatch.activatePlugins,
      installPlugins = _dispatch.installPlugins;

  return {
    activatePlugins: activatePlugins,
    installPlugins: installPlugins
  };
}))(shipping_banner_ShippingBanner));
// CONCATENATED MODULE: ./client/wp-admin-scripts/print-shipping-label-banner/index.js



function print_shipping_label_banner_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function print_shipping_label_banner_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { print_shipping_label_banner_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { print_shipping_label_banner_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


var metaBox = document.getElementById('wc-admin-shipping-banner-root');
var print_shipping_label_banner_args = metaBox.dataset.args && JSON.parse(metaBox.dataset.args) || {}; // Render the header.

var HydratedShippingBanner = Object(external_this_wc_data_["withPluginsHydration"])(print_shipping_label_banner_objectSpread(print_shipping_label_banner_objectSpread({}, window.wcSettings.plugins), {}, {
  jetpackStatus: window.wcSettings.dataEndpoints.jetpackStatus
}))(shipping_banner);
Object(external_this_wp_element_["render"])(Object(external_this_wp_element_["createElement"])(HydratedShippingBanner, {
  itemsCount: print_shipping_label_banner_args.items
}), metaBox);

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(12);

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

// EXTERNAL MODULE: ./node_modules/@wordpress/compose/build-module/utils/create-higher-order-component/index.js
var create_higher_order_component = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js
var use_instance_id = __webpack_require__(300);

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/with-instance-id/index.js



/**
 * Internal dependencies
 */


/**
 * A Higher Order Component used to be provide a unique instance ID by
 * component.
 *
 * @param {WPComponent} WrappedComponent The wrapped component.
 *
 * @return {WPComponent} Component with an instanceId prop.
 */

/* harmony default export */ var with_instance_id = (Object(create_higher_order_component["a" /* default */])(function (WrappedComponent) {
  return function (props) {
    var instanceId = Object(use_instance_id["a" /* default */])(WrappedComponent);
    return Object(external_this_wp_element_["createElement"])(WrappedComponent, Object(esm_extends["a" /* default */])({}, props, {
      instanceId: instanceId
    }));
  };
}, 'withInstanceId'));
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@wordpress/deprecated/build-module/index.js
var build_module = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/node_modules/@wordpress/keycodes/build-module/index.js + 1 modules
var keycodes_build_module = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/compose.js
var compose = __webpack_require__(277);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/isolated-event-container/index.js
var isolated_event_container = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/higher-order/with-focus-outside/index.js
var with_focus_outside = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/higher-order/with-focus-return/index.js + 1 modules
var with_focus_return = __webpack_require__(132);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/higher-order/with-constrained-tabbing/index.js
var with_constrained_tabbing = __webpack_require__(129);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/modal/frame.js








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






var frame_ModalFrame = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(ModalFrame, _Component);

  var _super = _createSuper(ModalFrame);

  function ModalFrame() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ModalFrame);

    _this = _super.apply(this, arguments);
    _this.containerRef = Object(external_this_wp_element_["createRef"])();
    _this.handleKeyDown = _this.handleKeyDown.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.handleFocusOutside = _this.handleFocusOutside.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }
  /**
   * Focuses the first tabbable element when props.focusOnMount is true.
   */


  Object(createClass["a" /* default */])(ModalFrame, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Focus on mount
      if (this.props.focusOnMount) {
        this.containerRef.current.focus();
      }
    }
    /**
     * Callback function called when clicked outside the modal.
     *
     * @param {Object} event Mouse click event.
     */

  }, {
    key: "handleFocusOutside",
    value: function handleFocusOutside(event) {
      if (this.props.shouldCloseOnClickOutside) {
        this.onRequestClose(event);
      }
    }
    /**
     * Callback function called when a key is pressed.
     *
     * @param {KeyboardEvent} event Key down event.
     */

  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      if (event.keyCode === keycodes_build_module["b" /* ESCAPE */]) {
        this.handleEscapeKeyDown(event);
      }
    }
    /**
     * Handles a escape key down event.
     *
     * Calls onRequestClose and prevents propagation of the event outside the modal.
     *
     * @param {Object} event Key down event.
     */

  }, {
    key: "handleEscapeKeyDown",
    value: function handleEscapeKeyDown(event) {
      if (this.props.shouldCloseOnEsc) {
        event.stopPropagation();
        this.onRequestClose(event);
      }
    }
    /**
     * Calls the onRequestClose callback props when it is available.
     *
     * @param {Object} event Event object.
     */

  }, {
    key: "onRequestClose",
    value: function onRequestClose(event) {
      var onRequestClose = this.props.onRequestClose;

      if (onRequestClose) {
        onRequestClose(event);
      }
    }
    /**
     * Renders the modal frame element.
     *
     * @return {WPElement} The modal frame element.
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          overlayClassName = _this$props.overlayClassName,
          contentLabel = _this$props.contentLabel,
          _this$props$aria = _this$props.aria,
          describedby = _this$props$aria.describedby,
          labelledby = _this$props$aria.labelledby,
          children = _this$props.children,
          className = _this$props.className,
          role = _this$props.role,
          style = _this$props.style;
      return Object(external_this_wp_element_["createElement"])(isolated_event_container["a" /* default */], {
        className: classnames_default()('components-modal__screen-overlay', overlayClassName),
        onKeyDown: this.handleKeyDown
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: classnames_default()('components-modal__frame', className),
        style: style,
        ref: this.containerRef,
        role: role,
        "aria-label": contentLabel,
        "aria-labelledby": contentLabel ? null : labelledby,
        "aria-describedby": describedby,
        tabIndex: "-1"
      }, children));
    }
  }]);

  return ModalFrame;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var modal_frame = (Object(compose["a" /* default */])([with_focus_return["a" /* default */], with_constrained_tabbing["a" /* default */], with_focus_outside["a" /* default */]])(frame_ModalFrame));
//# sourceMappingURL=frame.js.map
// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/node_modules/@wordpress/icons/build-module/library/close.js
var library_close = __webpack_require__(451);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__(72);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/modal/header.js


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var header_ModalHeader = function ModalHeader(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      onClose = _ref.onClose,
      closeLabel = _ref.closeLabel,
      headingId = _ref.headingId,
      isDismissible = _ref.isDismissible;
  var label = closeLabel ? closeLabel : Object(external_this_wp_i18n_["__"])('Close dialog');
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "components-modal__header"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "components-modal__header-heading-container"
  }, icon && Object(external_this_wp_element_["createElement"])("span", {
    className: "components-modal__icon-container",
    "aria-hidden": true
  }, icon), title && Object(external_this_wp_element_["createElement"])("h1", {
    id: headingId,
    className: "components-modal__header-heading"
  }, title)), isDismissible && Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
    onClick: onClose,
    icon: library_close["a" /* default */],
    label: label
  }));
};

/* harmony default export */ var header = (header_ModalHeader);
//# sourceMappingURL=header.js.map
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/modal/aria-helper.js
/**
 * External dependencies
 */

var LIVE_REGION_ARIA_ROLES = new Set(['alert', 'status', 'log', 'marquee', 'timer']);
var hiddenElements = [],
    isHidden = false;
/**
 * Hides all elements in the body element from screen-readers except
 * the provided element and elements that should not be hidden from
 * screen-readers.
 *
 * The reason we do this is because `aria-modal="true"` currently is bugged
 * in Safari, and support is spotty in other browsers overall. In the future
 * we should consider removing these helper functions in favor of
 * `aria-modal="true"`.
 *
 * @param {Element} unhiddenElement The element that should not be hidden.
 */

function hideApp(unhiddenElement) {
  if (isHidden) {
    return;
  }

  var elements = document.body.children;
  Object(external_lodash_["forEach"])(elements, function (element) {
    if (element === unhiddenElement) {
      return;
    }

    if (elementShouldBeHidden(element)) {
      element.setAttribute('aria-hidden', 'true');
      hiddenElements.push(element);
    }
  });
  isHidden = true;
}
/**
 * Determines if the passed element should not be hidden from screen readers.
 *
 * @param {HTMLElement} element The element that should be checked.
 *
 * @return {boolean} Whether the element should not be hidden from screen-readers.
 */

function elementShouldBeHidden(element) {
  var role = element.getAttribute('role');
  return !(element.tagName === 'SCRIPT' || element.hasAttribute('aria-hidden') || element.hasAttribute('aria-live') || LIVE_REGION_ARIA_ROLES.has(role));
}
/**
 * Makes all elements in the body that have been hidden by `hideApp`
 * visible again to screen-readers.
 */

function showApp() {
  if (!isHidden) {
    return;
  }

  Object(external_lodash_["forEach"])(hiddenElements, function (element) {
    element.removeAttribute('aria-hidden');
  });
  hiddenElements = [];
  isHidden = false;
}
//# sourceMappingURL=aria-helper.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/modal/index.js









function modal_createSuper(Derived) { var hasNativeReflectConstruct = modal_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function modal_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



 // Used to count the number of open modals.

var parentElement,
    openModalCount = 0;

var modal_Modal = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(Modal, _Component);

  var _super = modal_createSuper(Modal);

  function Modal(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Modal);

    _this = _super.call(this, props);

    _this.prepareDOM();

    return _this;
  }
  /**
   * Appends the modal's node to the DOM, so the portal can render the
   * modal in it. Also calls the openFirstModal when this is the first modal to be
   * opened.
   */


  Object(createClass["a" /* default */])(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      openModalCount++;

      if (openModalCount === 1) {
        this.openFirstModal();
      }
    }
    /**
     * Removes the modal's node from the DOM. Also calls closeLastModal when this is
     * the last modal to be closed.
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      openModalCount--;

      if (openModalCount === 0) {
        this.closeLastModal();
      }

      this.cleanDOM();
    }
    /**
     * Prepares the DOM for the modals to be rendered.
     *
     * Every modal is mounted in a separate div appended to a parent div
     * that is appended to the document body.
     *
     * The parent div will be created if it does not yet exist, and the
     * separate div for this specific modal will be appended to that.
     */

  }, {
    key: "prepareDOM",
    value: function prepareDOM() {
      if (!parentElement) {
        parentElement = document.createElement('div');
        document.body.appendChild(parentElement);
      }

      this.node = document.createElement('div');
      parentElement.appendChild(this.node);
    }
    /**
     * Removes the specific mounting point for this modal from the DOM.
     */

  }, {
    key: "cleanDOM",
    value: function cleanDOM() {
      parentElement.removeChild(this.node);
    }
    /**
     * Prepares the DOM for this modal and any additional modal to be mounted.
     *
     * It appends an additional div to the body for the modals to be rendered in,
     * it hides any other elements from screen-readers and adds an additional class
     * to the body to prevent scrolling while the modal is open.
     */

  }, {
    key: "openFirstModal",
    value: function openFirstModal() {
      hideApp(parentElement);
      document.body.classList.add(this.props.bodyOpenClassName);
    }
    /**
     * Cleans up the DOM after the last modal is closed and makes the app available
     * for screen-readers again.
     */

  }, {
    key: "closeLastModal",
    value: function closeLastModal() {
      document.body.classList.remove(this.props.bodyOpenClassName);
      showApp();
    }
    /**
     * Renders the modal.
     *
     * @return {WPElement} The modal element.
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onRequestClose = _this$props.onRequestClose,
          title = _this$props.title,
          icon = _this$props.icon,
          closeButtonLabel = _this$props.closeButtonLabel,
          children = _this$props.children,
          aria = _this$props.aria,
          instanceId = _this$props.instanceId,
          isDismissible = _this$props.isDismissible,
          isDismissable = _this$props.isDismissable,
          otherProps = Object(objectWithoutProperties["a" /* default */])(_this$props, ["onRequestClose", "title", "icon", "closeButtonLabel", "children", "aria", "instanceId", "isDismissible", "isDismissable"]);

      var headingId = aria.labelledby || "components-modal-header-".concat(instanceId);

      if (isDismissable) {
        Object(build_module["a" /* default */])('isDismissable prop of the Modal component', {
          alternative: 'isDismissible prop (renamed) of the Modal component'
        });
      } // Disable reason: this stops mouse events from triggering tooltips and
      // other elements underneath the modal overlay.


      return Object(external_this_wp_element_["createPortal"])(Object(external_this_wp_element_["createElement"])(modal_frame, Object(esm_extends["a" /* default */])({
        onRequestClose: onRequestClose,
        aria: {
          labelledby: title ? headingId : null,
          describedby: aria.describedby
        }
      }, otherProps), Object(external_this_wp_element_["createElement"])("div", {
        className: 'components-modal__content',
        role: "document"
      }, Object(external_this_wp_element_["createElement"])(header, {
        closeLabel: closeButtonLabel,
        headingId: headingId,
        icon: icon,
        isDismissible: isDismissible || isDismissable,
        onClose: onRequestClose,
        title: title
      }), children)), this.node);
    }
  }]);

  return Modal;
}(external_this_wp_element_["Component"]);

modal_Modal.defaultProps = {
  bodyOpenClassName: 'modal-open',
  role: 'dialog',
  title: null,
  focusOnMount: true,
  shouldCloseOnEsc: true,
  shouldCloseOnClickOutside: true,
  isDismissible: true,

  /* accessibility */
  aria: {
    labelledby: null,
    describedby: null
  }
};
/* harmony default export */ var modal = __webpack_exports__["a"] = (with_instance_id(modal_Modal));
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

/***/ 98:
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

/***/ })

/******/ });