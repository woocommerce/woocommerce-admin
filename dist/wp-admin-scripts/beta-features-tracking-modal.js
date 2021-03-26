this["wc"] = this["wc"] || {}; this["wc"]["betaFeaturesTrackingModal"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 577);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ 124:
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

/***/ 132:
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

/***/ 135:
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

/***/ 16:
/***/ (function(module, exports) {

(function() { module.exports = window["regeneratorRuntime"]; }());

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ 182:
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

/***/ 183:
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(181);

var iterableToArrayLimit = __webpack_require__(182);

var unsupportedIterableToArray = __webpack_require__(132);

var nonIterableRest = __webpack_require__(183);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external "regeneratorRuntime"
var external_regeneratorRuntime_ = __webpack_require__(16);
var external_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_regeneratorRuntime_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(135);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(43);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(4);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(26);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(65);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(59);

// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(92);

// CONCATENATED MODULE: ./client/wp-admin-scripts/beta-features-tracking-modal/container.js





/**
 * External dependencies
 */








var container_BetaFeaturesTrackingModal = function BetaFeaturesTrackingModal(_ref) {
  var updateOptions = _ref.updateOptions;

  var _useState = Object(external_wp_element_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      isModalOpen = _useState2[0],
      setIsModalOpen = _useState2[1];

  var _useState3 = Object(external_wp_element_["useState"])(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      isChecked = _useState4[0],
      setIsChecked = _useState4[1];

  var enableNavigationCheckbox = Object(external_wp_element_["useRef"])(document.querySelector('#woocommerce_navigation_enabled'));

  var setTracking = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee(allow) {
      return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (typeof window.wcTracks.enable === 'function') {
                if (allow) {
                  window.wcTracks.enable();
                } else {
                  window.wcTracks.isEnabled = false;
                }
              }

              if (allow) {
                Object(external_wc_tracks_["recordEvent"])('settings_features_tracking_enabled');
              }

              return _context.abrupt("return", updateOptions({
                woocommerce_allow_tracking: allow ? 'yes' : 'no'
              }));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function setTracking(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(external_wp_element_["useEffect"])(function () {
    if (!enableNavigationCheckbox.current) {
      return;
    }

    var listener = function listener(e) {
      if (e.target.checked) {
        e.target.checked = false;
        setIsModalOpen(true);
      }
    };

    var checkbox = enableNavigationCheckbox.current;
    checkbox.addEventListener('change', listener, false);
    return function () {
      return checkbox.removeEventListener('change', listener);
    };
  }, []);

  if (!enableNavigationCheckbox.current) {
    return null;
  }

  if (!isModalOpen) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_components_["Modal"], {
    title: Object(external_wp_i18n_["__"])('Build a Better WooCommerce', 'woocommerce-admin'),
    onRequestClose: function onRequestClose() {
      return setIsModalOpen(false);
    },
    className: "woocommerce-beta-features-tracking-modal"
  }, Object(external_wp_element_["createElement"])("p", null, Object(external_wp_i18n_["__"])('Testing new features requires sharing non-sensitive data via ', 'woocommerce-admin'), Object(external_wp_element_["createElement"])("a", {
    href: "https://woocommerce.com/usage-tracking"
  }, Object(external_wp_i18n_["__"])('usage tracking', 'woocommerce-admin')), Object(external_wp_i18n_["__"])('. Gathering usage data allows us to make WooCommerce better — your store will be considered as we evaluate new features, judge the quality of an update, or determine if an improvement makes sense. No personal data is tracked or stored and you can opt-out at any time.', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-beta-features-tracking-modal__checkbox"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CheckboxControl"], {
    label: "Enable usage tracking",
    onChange: setIsChecked,
    checked: isChecked
  })), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-beta-features-tracking-modal__actions"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isPrimary: true,
    onClick: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee2() {
      return external_regeneratorRuntime_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!isChecked) {
                _context2.next = 6;
                break;
              }

              _context2.next = 3;
              return setTracking(true);

            case 3:
              enableNavigationCheckbox.current.checked = true;
              _context2.next = 8;
              break;

            case 6:
              _context2.next = 8;
              return setTracking(false);

            case 8:
              setIsModalOpen(false);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))
  }, Object(external_wp_i18n_["__"])('Save', 'woocommerce-admin'))));
};

var BetaFeaturesTrackingContainer = Object(external_wp_compose_["compose"])(Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(external_wc_data_["OPTIONS_STORE_NAME"]),
      updateOptions = _dispatch.updateOptions;

  return {
    updateOptions: updateOptions
  };
}))(container_BetaFeaturesTrackingModal);
// EXTERNAL MODULE: ./client/wp-admin-scripts/beta-features-tracking-modal/style.scss
var style = __webpack_require__(568);

// CONCATENATED MODULE: ./client/wp-admin-scripts/beta-features-tracking-modal/index.js


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



var betaFeaturesRoot = document.createElement('div');
betaFeaturesRoot.setAttribute('id', 'beta-features-tracking');
Object(external_wp_element_["render"])(Object(external_wp_element_["createElement"])(BetaFeaturesTrackingContainer, null), document.body.appendChild(betaFeaturesRoot));

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

(function() { module.exports = window["wc"]["data"]; }());

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

(function() { module.exports = window["wc"]["tracks"]; }());

/***/ })

/******/ });