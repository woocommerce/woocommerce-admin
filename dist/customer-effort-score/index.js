this["wc"] = this["wc"] || {}; this["wc"]["customerEffortScore"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 473);
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
  module.exports = __webpack_require__(77)();
}


/***/ }),

/***/ 11:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(60);

var iterableToArrayLimit = __webpack_require__(61);

var unsupportedIterableToArray = __webpack_require__(40);

var nonIterableRest = __webpack_require__(62);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ 30:
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

/***/ 37:
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

/***/ 4:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(37);

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

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CustomerEffortScore", function() { return /* binding */ CustomerEffortScore; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(18);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external {"this":["wp","compose"]}
var external_this_wp_compose_ = __webpack_require__(20);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(11);

// EXTERNAL MODULE: external {"this":["wp","components"]}
var external_this_wp_components_ = __webpack_require__(4);

// EXTERNAL MODULE: ./packages/experimental/build-module/index.js
var build_module = __webpack_require__(30);

// CONCATENATED MODULE: ./packages/customer-effort-score/build-module/customer-feedback-modal/index.js


/**
 * External dependencies
 */






/**
 * Provides a modal requesting customer feedback.
 *
 * A label is displayed in the modal asking the customer to score the
 * difficulty completing a task. A group of radio buttons, styled with
 * emoji facial expressions, are used to provide a score between 1 and 5.
 *
 * A low score triggers a comments field to appear.
 *
 * Upon completion, the score and comments is sent to a callback function.
 *
 * @param {Object} props                       Component props.
 * @param {Function} props.recordScoreCallback Function to call when the results are sent.
 * @param {string} props.label                 Question to ask the customer.
 */

function CustomerFeedbackModal(_ref) {
  var recordScoreCallback = _ref.recordScoreCallback,
      label = _ref.label;
  var options = [{
    label: Object(external_this_wp_i18n_["__"])('Very difficult', 'woocommerce-admin'),
    value: '1'
  }, {
    label: Object(external_this_wp_i18n_["__"])('Somewhat difficult', 'woocommerce-admin'),
    value: '2'
  }, {
    label: Object(external_this_wp_i18n_["__"])('Neutral', 'woocommerce-admin'),
    value: '3'
  }, {
    label: Object(external_this_wp_i18n_["__"])('Somewhat easy', 'woocommerce-admin'),
    value: '4'
  }, {
    label: Object(external_this_wp_i18n_["__"])('Very easy', 'woocommerce-admin'),
    value: '5'
  }];

  var _useState = Object(external_this_wp_element_["useState"])(NaN),
      _useState2 = slicedToArray_default()(_useState, 2),
      score = _useState2[0],
      setScore = _useState2[1];

  var _useState3 = Object(external_this_wp_element_["useState"])(),
      _useState4 = slicedToArray_default()(_useState3, 2),
      comments = _useState4[0],
      setComments = _useState4[1];

  var _useState5 = Object(external_this_wp_element_["useState"])(false),
      _useState6 = slicedToArray_default()(_useState5, 2),
      showNoScoreMessage = _useState6[0],
      setShowNoScoreMessage = _useState6[1];

  var _useState7 = Object(external_this_wp_element_["useState"])(true),
      _useState8 = slicedToArray_default()(_useState7, 2),
      isOpen = _useState8[0],
      setOpen = _useState8[1];

  var closeModal = function closeModal() {
    return setOpen(false);
  };

  var onRadioControlChange = function onRadioControlChange(value) {
    var valueAsInt = parseInt(value, 10);
    setScore(valueAsInt);
    setShowNoScoreMessage(!Number.isInteger(valueAsInt));
  };

  var sendScore = function sendScore() {
    if (!Number.isInteger(score)) {
      setShowNoScoreMessage(true);
      return;
    }

    setOpen(false);
    recordScoreCallback(score, comments);
  };

  if (!isOpen) {
    return null;
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Modal"], {
    className: "woocommerce-customer-effort-score",
    title: Object(external_this_wp_i18n_["__"])('Please share your feedback', 'woocommerce-admin'),
    onRequestClose: closeModal,
    shouldCloseOnClickOutside: false
  }, Object(external_this_wp_element_["createElement"])(build_module["e" /* Text */], {
    variant: "subtitle.small",
    as: "p"
  }, label), Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-customer-effort-score__selection"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["RadioControl"], {
    selected: score.toString(10),
    options: options,
    onChange: onRadioControlChange
  })), (score === 1 || score === 2) && Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-customer-effort-score__comments"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["TextareaControl"], {
    label: Object(external_this_wp_i18n_["__"])('Comments (Optional)', 'woocommerce-admin'),
    help: Object(external_this_wp_i18n_["__"])('Your feedback will go to the WooCommerce development team', 'woocommerce-admin'),
    value: comments,
    onChange: function onChange(value) {
      return setComments(value);
    },
    rows: "5"
  })), showNoScoreMessage && Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-customer-effort-score__errors",
    role: "alert"
  }, Object(external_this_wp_element_["createElement"])(build_module["e" /* Text */], {
    variant: "body",
    as: "p"
  }, Object(external_this_wp_i18n_["__"])('Please provide feedback by selecting an option above.', 'woocommerce-admin'))), Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-customer-effort-score__buttons"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    isTertiary: true,
    onClick: closeModal,
    name: "cancel"
  }, Object(external_this_wp_i18n_["__"])('Cancel', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    isPrimary: true,
    onClick: sendScore,
    name: "send"
  }, Object(external_this_wp_i18n_["__"])('Send', 'woocommerce-admin'))));
}

CustomerFeedbackModal.propTypes = {
  recordScoreCallback: prop_types_default.a.func.isRequired,
  label: prop_types_default.a.string.isRequired
};
/* harmony default export */ var customer_feedback_modal = (CustomerFeedbackModal);
// CONCATENATED MODULE: ./packages/customer-effort-score/build-module/index.js


/**
 * External dependencies
 */






/**
 * Internal dependencies
 */



var noop = function noop() {};
/**
 * Use `CustomerEffortScore` to gather a customer effort score.
 *
 * NOTE: This should live in @woocommerce/customer-effort-score to allow
 * reuse.
 *
 * @param {Object} props                             Component props.
 * @param {Function} props.recordScoreCallback       Function to call when the score should be recorded.
 * @param {string} props.label                       The label displayed in the modal.
 * @param {Function} props.createNotice              Create a notice (snackbar).
 * @param {Function} props.onNoticeShownCallback     Function to call when the notice is shown.
 * @param {Function} props.onNoticeDismissedCallback Function to call when the notice is dismissed.
 * @param {Function} props.onModalShownCallback      Function to call when the modal is shown.
 * @param {Object} props.icon                        Icon (React component) to be shown on the notice.
 */


function CustomerEffortScore(_ref) {
  var recordScoreCallback = _ref.recordScoreCallback,
      label = _ref.label,
      createNotice = _ref.createNotice,
      _ref$onNoticeShownCal = _ref.onNoticeShownCallback,
      onNoticeShownCallback = _ref$onNoticeShownCal === void 0 ? noop : _ref$onNoticeShownCal,
      _ref$onNoticeDismisse = _ref.onNoticeDismissedCallback,
      onNoticeDismissedCallback = _ref$onNoticeDismisse === void 0 ? noop : _ref$onNoticeDismisse,
      _ref$onModalShownCall = _ref.onModalShownCallback,
      onModalShownCallback = _ref$onModalShownCall === void 0 ? noop : _ref$onModalShownCall,
      icon = _ref.icon;

  var _useState = Object(external_this_wp_element_["useState"])(true),
      _useState2 = slicedToArray_default()(_useState, 2),
      shouldCreateNotice = _useState2[0],
      setShouldCreateNotice = _useState2[1];

  var _useState3 = Object(external_this_wp_element_["useState"])(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      visible = _useState4[0],
      setVisible = _useState4[1];

  Object(external_this_wp_element_["useEffect"])(function () {
    if (!shouldCreateNotice) {
      return;
    }

    createNotice('success', label, {
      actions: [{
        label: Object(external_this_wp_i18n_["__"])('Give feedback', 'woocommerce-admin'),
        onClick: function onClick() {
          setVisible(true);
          onModalShownCallback();
        }
      }],
      icon: icon,
      explicitDismiss: true,
      onDismiss: onNoticeDismissedCallback
    });
    setShouldCreateNotice(false);
    onNoticeShownCallback();
  }, [shouldCreateNotice]);

  if (shouldCreateNotice) {
    return null;
  }

  if (!visible) {
    return null;
  }

  return Object(external_this_wp_element_["createElement"])(customer_feedback_modal, {
    label: label,
    recordScoreCallback: recordScoreCallback
  });
}
CustomerEffortScore.propTypes = {
  /**
   * The function to call to record the score.
   */
  recordScoreCallback: prop_types_default.a.func.isRequired,

  /**
   * The label displayed in the modal.
   */
  label: prop_types_default.a.string.isRequired,

  /**
   * Create a notice (snackbar).
   */
  createNotice: prop_types_default.a.func.isRequired,

  /**
   * The function to call when the notice is shown.
   */
  onNoticeShownCallback: prop_types_default.a.func,

  /**
   * The function to call when the notice is dismissed.
   */
  onNoticeDismissedCallback: prop_types_default.a.func,

  /**
   * The function to call when the modal is shown.
   */
  onModalShownCallback: prop_types_default.a.func,

  /**
   * Icon (React component) to be displayed.
   */
  icon: prop_types_default.a.element
};
/* harmony default export */ var customer_effort_score_build_module = __webpack_exports__["default"] = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices2'),
      createNotice = _dispatch.createNotice;

  return {
    createNotice: createNotice
  };
}))(CustomerEffortScore));

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ 61:
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

/***/ 62:
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(78);

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

/***/ 78:
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


/***/ })

/******/ });