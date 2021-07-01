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
/******/ 	return __webpack_require__(__webpack_require__.s = 494);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["dataControls"]; }());

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORE_NAME; });
const STORE_NAME = 'wc/admin/options';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORE_NAME; });
/**
 * Internal dependencies
 */
const STORE_NAME = 'wc/admin/onboarding';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORE_NAME; });
const STORE_NAME = 'wc/admin/items';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 116:
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

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(179),
      utf8 = __webpack_require__(116).utf8,
      isBuffer = __webpack_require__(180),
      bin = __webpack_require__(116).bin,

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

/***/ 12:
/***/ (function(module, exports) {

(function() { module.exports = window["wc"]["navigation"]; }());

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileItems", function() { return getProfileItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTasksStatus", function() { return getTasksStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaymentGatewaySuggestions", function() { return getPaymentGatewaySuggestions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOnboardingError", function() { return getOnboardingError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOnboardingRequesting", function() { return isOnboardingRequesting; });
/**
 * Internal dependencies
 */
const getProfileItems = state => {
  return state.profileItems || {};
};
const getTasksStatus = state => {
  return state.tasksStatus || {};
};
const getPaymentGatewaySuggestions = state => {
  return state.paymentMethods || [];
};
const getOnboardingError = (state, selector) => {
  return state.errors[selector] || false;
};
const isOnboardingRequesting = (state, selector) => {
  return state.requesting[selector] || false;
}; // Types
//# sourceMappingURL=selectors.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ OPTIONS_STORE_NAME; });

// NAMESPACE OBJECT: ./packages/data/build-module/options/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getOption", function() { return getOption; });
__webpack_require__.d(selectors_namespaceObject, "getOptionsRequestingError", function() { return getOptionsRequestingError; });
__webpack_require__.d(selectors_namespaceObject, "isOptionsUpdating", function() { return isOptionsUpdating; });
__webpack_require__.d(selectors_namespaceObject, "getOptionsUpdatingError", function() { return getOptionsUpdatingError; });

// NAMESPACE OBJECT: ./packages/data/build-module/options/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "receiveOptions", function() { return receiveOptions; });
__webpack_require__.d(actions_namespaceObject, "setRequestingError", function() { return setRequestingError; });
__webpack_require__.d(actions_namespaceObject, "setUpdatingError", function() { return setUpdatingError; });
__webpack_require__.d(actions_namespaceObject, "setIsUpdating", function() { return setIsUpdating; });
__webpack_require__.d(actions_namespaceObject, "updateOptions", function() { return updateOptions; });

// NAMESPACE OBJECT: ./packages/data/build-module/options/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getOption", function() { return resolvers_getOption; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(7);

// EXTERNAL MODULE: ./packages/data/build-module/options/constants.js
var constants = __webpack_require__(102);

// CONCATENATED MODULE: ./packages/data/build-module/options/selectors.js
/**
 * Get option from state tree.
 *
 * @param {Object} state - Reducer state
 * @param {Array} name - Option name
 */
const getOption = (state, name) => {
  return state[name];
};
/**
 * Determine if an options request resulted in an error.
 *
 * @param {Object} state - Reducer state
 * @param {string} name - Option name
 */

const getOptionsRequestingError = (state, name) => {
  return state.requestingErrors[name] || false;
};
/**
 * Determine if options are being updated.
 *
 * @param {Object} state - Reducer state
 */

const isOptionsUpdating = state => {
  return state.isUpdating || false;
};
/**
 * Determine if an options update resulted in an error.
 *
 * @param {Object} state - Reducer state
 */

const getOptionsUpdatingError = state => {
  return state.updatingError || false;
};
//# sourceMappingURL=selectors.js.map
// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__(10);

// CONCATENATED MODULE: ./packages/data/build-module/options/action-types.js
const TYPES = {
  RECEIVE_OPTIONS: 'RECEIVE_OPTIONS',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING',
  SET_IS_UPDATING: 'SET_IS_UPDATING',
  SET_REQUESTING_ERROR: 'SET_REQUESTING_ERROR',
  SET_UPDATING_ERROR: 'SET_UPDATING_ERROR'
};
/* harmony default export */ var action_types = (TYPES);
//# sourceMappingURL=action-types.js.map
// EXTERNAL MODULE: ./packages/data/build-module/constants.js
var build_module_constants = __webpack_require__(14);

// CONCATENATED MODULE: ./packages/data/build-module/options/actions.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function receiveOptions(options) {
  return {
    type: action_types.RECEIVE_OPTIONS,
    options
  };
}
function setRequestingError(error, name) {
  return {
    type: action_types.SET_REQUESTING_ERROR,
    error,
    name
  };
}
function setUpdatingError(error) {
  return {
    type: action_types.SET_UPDATING_ERROR,
    error
  };
}
function setIsUpdating(isUpdating) {
  return {
    type: action_types.SET_IS_UPDATING,
    isUpdating
  };
}
function* updateOptions(data) {
  yield setIsUpdating(true);
  yield receiveOptions(data);

  try {
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: build_module_constants["k" /* WC_ADMIN_NAMESPACE */] + '/options',
      method: 'POST',
      data
    });
    yield setIsUpdating(false);
    return {
      success: true,
      ...results
    };
  } catch (error) {
    yield setUpdatingError(error);
    return {
      success: false,
      ...error
    };
  }
}
//# sourceMappingURL=actions.js.map
// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__(20);
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// CONCATENATED MODULE: ./packages/data/build-module/options/controls.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


let optionNames = [];
const fetches = {};
const batchFetch = optionName => {
  return {
    type: 'BATCH_FETCH',
    optionName
  };
};
const controls = { ...external_wp_dataControls_["controls"],

  BATCH_FETCH({
    optionName
  }) {
    optionNames.push(optionName);
    return new Promise(resolve => {
      setTimeout(function () {
        const names = optionNames.join(',');

        if (fetches[names]) {
          return fetches[names].then(result => {
            resolve(result[optionName]);
          });
        }

        const url = build_module_constants["k" /* WC_ADMIN_NAMESPACE */] + '/options?options=' + names;
        fetches[names] = external_wp_apiFetch_default()({
          path: url
        });
        fetches[names].then(result => resolve(result)); // Clear option names after all resolved;

        setTimeout(() => {
          optionNames = []; // Delete the fetch after to allow wp data to handle cache invalidation.

          delete fetches[names];
        }, 1);
      }, 1);
    });
  }

};
//# sourceMappingURL=controls.js.map
// CONCATENATED MODULE: ./packages/data/build-module/options/resolvers.js
/**
 * Internal dependencies
 */


/**
 * Request an option value.
 *
 * @param {string} name - Option name
 */

function* resolvers_getOption(name) {
  try {
    const result = yield batchFetch(name);
    yield receiveOptions(result);
  } catch (error) {
    yield setRequestingError(error, name);
  }
}
//# sourceMappingURL=resolvers.js.map
// CONCATENATED MODULE: ./packages/data/build-module/options/reducer.js
/**
 * Internal dependencies
 */


const optionsReducer = (state = {
  isUpdating: false,
  requestingErrors: {}
}, {
  type,
  options,
  error,
  isUpdating,
  name
}) => {
  switch (type) {
    case action_types.RECEIVE_OPTIONS:
      state = { ...state,
        ...options
      };
      break;

    case action_types.SET_IS_UPDATING:
      state = { ...state,
        isUpdating
      };
      break;

    case action_types.SET_REQUESTING_ERROR:
      state = { ...state,
        requestingErrors: {
          [name]: error
        }
      };
      break;

    case action_types.SET_UPDATING_ERROR:
      state = { ...state,
        error,
        updatingError: error,
        isUpdating: false
      };
      break;
  }

  return state;
};

/* harmony default export */ var reducer = (optionsReducer);
//# sourceMappingURL=reducer.js.map
// CONCATENATED MODULE: ./packages/data/build-module/options/index.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */







Object(external_wp_data_["registerStore"])(constants["a" /* STORE_NAME */], {
  reducer: reducer,
  actions: actions_namespaceObject,
  controls: controls,
  selectors: selectors_namespaceObject,
  resolvers: resolvers_namespaceObject
});
const OPTIONS_STORE_NAME = constants["a" /* STORE_NAME */];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return JETPACK_NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return WC_ADMIN_NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return WCS_NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MAX_PER_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SECOND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MINUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return WEEK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MONTH; });
/* unused harmony export DEFAULT_REQUIREMENT */
/* unused harmony export DEFAULT_ACTIONABLE_STATUSES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return QUERY_DEFAULTS; });
const JETPACK_NAMESPACE = '/jetpack/v4';
const NAMESPACE = '/wc-analytics';
const WC_ADMIN_NAMESPACE = '/wc-admin';
const WCS_NAMESPACE = '/wc/v1'; // WCS endpoints like Stripe are not avaiable on later /wc versions
// WordPress & WooCommerce both set a hard limit of 100 for the per_page parameter

const MAX_PER_PAGE = 100;
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const MONTH = 365 * DAY / 12;
const DEFAULT_REQUIREMENT = {
  timeout: 1 * MINUTE,
  freshness: 30 * MINUTE
};
const DEFAULT_ACTIONABLE_STATUSES = ['processing', 'on-hold'];
const QUERY_DEFAULTS = {
  pageSize: 25,
  period: 'month',
  compare: 'previous_year',
  noteTypes: ['info', 'marketing', 'survey', 'warning']
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["url"]; }());

/***/ }),

/***/ 179:
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

/***/ 180:
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

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useOptionsHydration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return withOptionsHydration; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(102);


/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const useOptionsHydration = data => {
  const dataRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useRef"])(data);
  Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useSelect"])((select, registry) => {
    if (!dataRef.current) {
      return;
    }

    const {
      isResolving,
      hasFinishedResolution
    } = select(_constants__WEBPACK_IMPORTED_MODULE_3__[/* STORE_NAME */ "a"]);
    const {
      startResolution,
      finishResolution,
      receiveOptions
    } = registry.dispatch(_constants__WEBPACK_IMPORTED_MODULE_3__[/* STORE_NAME */ "a"]);
    const names = Object.keys(dataRef.current);
    names.forEach(name => {
      if (!isResolving('getOption', [name]) && !hasFinishedResolution('getOption', [name])) {
        startResolution('getOption', [name]);
        receiveOptions({
          [name]: dataRef.current[name]
        });
        finishResolution('getOption', [name]);
      }
    });
  }, []);
};
const withOptionsHydration = data => Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(OriginalComponent => props => {
  useOptionsHydration(data);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
}, 'withOptionsHydration');
//# sourceMappingURL=with-options-hydration.js.map

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

(function() { module.exports = window["wc"]["date"]; }());

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wp_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(274);
/* harmony import */ var _wp_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wp_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wp_data__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wp_data__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _rule_processor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(275);
/* harmony import */ var _rule_processor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rule_processor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _rule_processor__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _rule_processor__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 274:
/***/ (function(module, exports) {


//# sourceMappingURL=wp-data.js.map

/***/ }),

/***/ 275:
/***/ (function(module, exports) {


//# sourceMappingURL=rule-processor.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withSettingsHydration; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);


/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const withSettingsHydration = (group, settings) => Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(OriginalComponent => props => {
  const settingsRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useRef"])(settings);
  Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useSelect"])((select, registry) => {
    if (!settingsRef.current) {
      return;
    }

    const {
      isResolving,
      hasFinishedResolution
    } = select(_constants__WEBPACK_IMPORTED_MODULE_3__[/* STORE_NAME */ "a"]);
    const {
      startResolution,
      finishResolution,
      updateSettingsForGroup,
      clearIsDirty
    } = registry.dispatch(_constants__WEBPACK_IMPORTED_MODULE_3__[/* STORE_NAME */ "a"]);

    if (!isResolving('getSettings', [group]) && !hasFinishedResolution('getSettings', [group])) {
      startResolution('getSettings', [group]);
      updateSettingsForGroup(group, settingsRef.current);
      clearIsDirty(group);
      finishResolution('getSettings', [group]);
    }
  }, []);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
}, 'withSettingsHydration');
//# sourceMappingURL=with-settings-hydration.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useSettings; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


const useSettings = (group, settingsKeys = []) => {
  const {
    requestedSettings,
    settingsError,
    isRequesting,
    isDirty
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useSelect"])(select => {
    const {
      getLastSettingsErrorForGroup,
      getSettingsForGroup,
      getIsDirty,
      isUpdateSettingsRequesting
    } = select(_constants__WEBPACK_IMPORTED_MODULE_2__[/* STORE_NAME */ "a"]);
    return {
      requestedSettings: getSettingsForGroup(group, settingsKeys),
      settingsError: Boolean(getLastSettingsErrorForGroup(group)),
      isRequesting: isUpdateSettingsRequesting(group),
      isDirty: getIsDirty(group, settingsKeys)
    };
  }, [group, ...settingsKeys.sort()]);
  const {
    persistSettingsForGroup,
    updateAndPersistSettingsForGroup,
    updateSettingsForGroup
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])(_constants__WEBPACK_IMPORTED_MODULE_2__[/* STORE_NAME */ "a"]);
  const updateSettings = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((name, data) => {
    updateSettingsForGroup(group, {
      [name]: data
    });
  }, [group]);
  const persistSettings = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    // this action would simply persist all settings marked as dirty in the
    // store state and then remove the dirty record in the isDirtyMap
    persistSettingsForGroup(group);
  }, [group]);
  const updateAndPersistSettings = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((name, data) => {
    updateAndPersistSettingsForGroup(group, {
      [name]: data
    });
  }, [group]);
  return {
    settingsError,
    isRequesting,
    isDirty,
    ...requestedSettings,
    persistSettings,
    updateAndPersistSettings,
    updateSettings
  };
};
//# sourceMappingURL=use-settings.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withPluginsHydration; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);


/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const withPluginsHydration = data => Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(OriginalComponent => props => {
  const dataRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useRef"])(data);
  Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useSelect"])((select, registry) => {
    if (!dataRef.current) {
      return;
    }

    const {
      isResolving,
      hasFinishedResolution
    } = select(_constants__WEBPACK_IMPORTED_MODULE_3__[/* STORE_NAME */ "b"]);
    const {
      startResolution,
      finishResolution,
      updateActivePlugins,
      updateInstalledPlugins,
      updateIsJetpackConnected
    } = registry.dispatch(_constants__WEBPACK_IMPORTED_MODULE_3__[/* STORE_NAME */ "b"]);

    if (!isResolving('getActivePlugins', []) && !hasFinishedResolution('getActivePlugins', [])) {
      startResolution('getActivePlugins', []);
      startResolution('getInstalledPlugins', []);
      startResolution('isJetpackConnected', []);
      updateActivePlugins(dataRef.current.activePlugins, true);
      updateInstalledPlugins(dataRef.current.installedPlugins, true);
      updateIsJetpackConnected(dataRef.current.jetpackStatus && dataRef.current.jetpackStatus.isActive ? true : false);
      finishResolution('getActivePlugins', []);
      finishResolution('getInstalledPlugins', []);
      finishResolution('isJetpackConnected', []);
    }
  }, []);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
}, 'withPluginsHydration');
//# sourceMappingURL=with-plugins-hydration.jsx.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withOnboardingHydration; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(103);


/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const withOnboardingHydration = data => {
  let hydratedProfileItems = false;
  let hydratedTasksStatus = false;
  return Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(OriginalComponent => props => {
    const onboardingRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useRef"])(data);
    Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useSelect"])((select, registry) => {
      if (!onboardingRef.current) {
        return;
      }

      const {
        isResolving,
        hasFinishedResolution
      } = select(_constants__WEBPACK_IMPORTED_MODULE_3__[/* STORE_NAME */ "a"]);
      const {
        startResolution,
        finishResolution,
        setProfileItems,
        setTasksStatus
      } = registry.dispatch(_constants__WEBPACK_IMPORTED_MODULE_3__[/* STORE_NAME */ "a"]);
      const {
        profileItems,
        tasksStatus
      } = onboardingRef.current;

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
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
  }, 'withOnboardingHydration');
};
//# sourceMappingURL=with-onboarding-hydration.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_STORE_NAME; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/**
 * Internal dependencies
 */

const USER_STORE_NAME = _constants__WEBPACK_IMPORTED_MODULE_0__[/* STORE_NAME */ "a"];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withCurrentUserHydration; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61);


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

const withCurrentUserHydration = currentUser => Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(OriginalComponent => props => {
  const userRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useRef"])(currentUser); // Use currentUser to hydrate calls to @wordpress/core-data's getCurrentUser().

  Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useSelect"])((select, registry) => {
    if (!userRef.current) {
      return;
    }

    const {
      isResolving,
      hasFinishedResolution
    } = select(_constants__WEBPACK_IMPORTED_MODULE_3__[/* STORE_NAME */ "a"]);
    const {
      startResolution,
      finishResolution,
      receiveCurrentUser
    } = registry.dispatch(_constants__WEBPACK_IMPORTED_MODULE_3__[/* STORE_NAME */ "a"]);

    if (!isResolving('getCurrentUser') && !hasFinishedResolution('getCurrentUser')) {
      startResolution('getCurrentUser', []);
      receiveCurrentUser(userRef.current);
      finishResolution('getCurrentUser', []);
    }
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
}, 'withCurrentUserHydration');
//# sourceMappingURL=with-current-user-hydration.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useUser; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
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

const useUser = () => {
  const userData = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useSelect"])(select => {
    const {
      getCurrentUser,
      hasStartedResolution,
      hasFinishedResolution
    } = select(_constants__WEBPACK_IMPORTED_MODULE_1__[/* STORE_NAME */ "a"]);
    return {
      isRequesting: hasStartedResolution('getCurrentUser') && !hasFinishedResolution('getCurrentUser'),
      user: getCurrentUser(),
      getCurrentUser
    };
  });

  const currentUserCan = capability => {
    if (userData.user && userData.user && userData.user.capabilities[capability]) {
      return true;
    }

    return false;
  };

  return {
    currentUserCan,
    user: userData.user,
    isRequesting: userData.isRequesting
  };
};
//# sourceMappingURL=use-user.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useUserPreferences; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61);
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

const getWooCommerceMeta = user => {
  const wooMeta = user.woocommerce_meta || {};
  const userData = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["mapValues"])(wooMeta, (data, key) => {
    if (!data || data.length === 0) {
      return '';
    }

    try {
      return JSON.parse(data);
    } catch (e) {
      /* eslint-disable no-console */
      console.error(`Error parsing value '${data}' for ${key}`, e.message);
      /* eslint-enable no-console */

      return '';
    }
  });
  return userData;
}; // Create wrapper for updating user's `woocommerce_meta`.


async function updateUserPrefs(receiveCurrentUser, user, saveUser, getLastEntitySaveError, userPrefs) {
  // @todo Handle unresolved getCurrentUser() here.
  // Prep fields for update.
  const metaData = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["mapValues"])(userPrefs, JSON.stringify);

  if (Object.keys(metaData).length === 0) {
    return {
      error: new Error('Invalid woocommerce_meta data for update.'),
      updatedUser: undefined
    };
  } // Optimistically propagate new woocommerce_meta to the store for instant update.


  receiveCurrentUser({ ...user,
    woocommerce_meta: { ...user.woocommerce_meta,
      ...metaData
    }
  }); // Use saveUser() to update WooCommerce meta values.

  const updatedUser = await saveUser({
    id: user.id,
    woocommerce_meta: metaData
  });

  if (undefined === updatedUser) {
    // Return the encountered error to the caller.
    const error = getLastEntitySaveError('root', 'user', user.id);
    return {
      error,
      updatedUser
    };
  } // Decode the WooCommerce meta after save.


  const updatedUserResponse = { ...updatedUser,
    woocommerce_meta: getWooCommerceMeta(updatedUser)
  };
  return {
    updatedUser: updatedUserResponse
  };
}
/**
 * Custom react hook for retrieving thecurrent user's WooCommerce preferences.
 *
 * This is a wrapper around @wordpress/core-data's getCurrentUser() and saveUser().
 */


const useUserPreferences = () => {
  // Get our dispatch methods now - this can't happen inside the callback below.
  const dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])(_constants__WEBPACK_IMPORTED_MODULE_2__[/* STORE_NAME */ "a"]);
  const {
    addEntities,
    receiveCurrentUser,
    saveEntityRecord
  } = dispatch;
  let {
    saveUser
  } = dispatch;
  const userData = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["useSelect"])(select => {
    const {
      getCurrentUser,
      getEntity,
      getEntityRecord,
      getLastEntitySaveError,
      hasStartedResolution,
      hasFinishedResolution
    } = select(_constants__WEBPACK_IMPORTED_MODULE_2__[/* STORE_NAME */ "a"]);
    return {
      isRequesting: hasStartedResolution('getCurrentUser') && !hasFinishedResolution('getCurrentUser'),
      user: getCurrentUser(),
      getCurrentUser,
      getEntity,
      getEntityRecord,
      getLastEntitySaveError
    };
  });

  const updateUserPreferences = userPrefs => {
    // WP 5.3.x doesn't have the User entity defined.
    if (typeof saveUser !== 'function') {
      // Polyfill saveUser() - wrapper of saveEntityRecord.
      saveUser = async userToSave => {
        const entityDefined = Boolean(userData.getEntity('root', 'user'));

        if (!entityDefined) {
          // Add the User entity so saveEntityRecord works.
          await addEntities([{
            name: 'user',
            kind: 'root',
            baseURL: '/wp/v2/users',
            plural: 'users'
          }]);
        } // Fire off the save action.


        await saveEntityRecord('root', 'user', userToSave); // Respond with the updated user.

        return userData.getEntityRecord('root', 'user', userToSave.id);
      };
    } // Get most recent user before update.


    const currentUser = userData.getCurrentUser();
    return updateUserPrefs(receiveCurrentUser, currentUser, saveUser, userData.getLastEntitySaveError, userPrefs);
  };

  const userPreferences = userData.user ? getWooCommerceMeta(userData.user) : {};
  return {
    isRequesting: userData.isRequesting,
    ...userPreferences,
    updateUserPreferences
  };
};
//# sourceMappingURL=use-user-preferences.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withNavigationHydration; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);


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

const withNavigationHydration = data => Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(OriginalComponent => props => {
  const dataRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useRef"])(data);
  Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useSelect"])((select, registry) => {
    if (!dataRef.current) {
      return;
    }

    const {
      isResolving,
      hasFinishedResolution
    } = select(_constants__WEBPACK_IMPORTED_MODULE_3__[/* STORE_NAME */ "a"]);
    const {
      startResolution,
      finishResolution,
      setMenuItems
    } = registry.dispatch(_constants__WEBPACK_IMPORTED_MODULE_3__[/* STORE_NAME */ "a"]);

    if (!isResolving('getMenuItems') && !hasFinishedResolution('getMenuItems')) {
      startResolution('getMenuItems', []);
      setMenuItems(dataRef.current.menuItems);
      finishResolution('getMenuItems', []);
    }
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalComponent, props);
}, 'withNavigationHydration');
//# sourceMappingURL=with-navigation-hydration.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ NOTES_STORE_NAME; });

// NAMESPACE OBJECT: ./packages/data/build-module/notes/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getNotes", function() { return getNotes; });
__webpack_require__.d(selectors_namespaceObject, "getNotesError", function() { return getNotesError; });
__webpack_require__.d(selectors_namespaceObject, "isNotesRequesting", function() { return isNotesRequesting; });

// NAMESPACE OBJECT: ./packages/data/build-module/notes/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "triggerNoteAction", function() { return triggerNoteAction; });
__webpack_require__.d(actions_namespaceObject, "removeNote", function() { return removeNote; });
__webpack_require__.d(actions_namespaceObject, "removeAllNotes", function() { return removeAllNotes; });
__webpack_require__.d(actions_namespaceObject, "batchUpdateNotes", function() { return batchUpdateNotes; });
__webpack_require__.d(actions_namespaceObject, "updateNote", function() { return updateNote; });
__webpack_require__.d(actions_namespaceObject, "setNote", function() { return setNote; });
__webpack_require__.d(actions_namespaceObject, "setNoteIsUpdating", function() { return setNoteIsUpdating; });
__webpack_require__.d(actions_namespaceObject, "setNotes", function() { return setNotes; });
__webpack_require__.d(actions_namespaceObject, "setNotesQuery", function() { return setNotesQuery; });
__webpack_require__.d(actions_namespaceObject, "setError", function() { return setError; });
__webpack_require__.d(actions_namespaceObject, "setIsRequesting", function() { return setIsRequesting; });

// NAMESPACE OBJECT: ./packages/data/build-module/notes/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getNotes", function() { return resolvers_getNotes; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(7);

// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__(10);

// CONCATENATED MODULE: ./packages/data/build-module/notes/constants.js
/**
 * Internal dependencies
 */
const STORE_NAME = 'wc/admin/notes';
//# sourceMappingURL=constants.js.map
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

const getNotes = rememo((state, query) => {
  const noteIds = state.noteQueries[JSON.stringify(query)] || [];
  return noteIds.map(id => state.notes[id]);
}, (state, query) => [state.noteQueries[JSON.stringify(query)], state.notes]);
const getNotesError = (state, selector) => {
  return state.errors[selector] || false;
};
const isNotesRequesting = (state, selector) => {
  return state.requesting[selector] || false;
};
//# sourceMappingURL=selectors.js.map
// EXTERNAL MODULE: ./packages/data/build-module/constants.js
var constants = __webpack_require__(14);

// CONCATENATED MODULE: ./packages/data/build-module/notes/action-types.js
const TYPES = {
  SET_ERROR: 'SET_ERROR',
  SET_NOTE: 'SET_NOTE',
  SET_NOTE_IS_UPDATING: 'SET_NOTE_IS_UPDATING',
  SET_NOTES: 'SET_NOTES',
  SET_NOTES_QUERY: 'SET_NOTES_QUERY',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING'
};
/* harmony default export */ var action_types = (TYPES);
//# sourceMappingURL=action-types.js.map
// CONCATENATED MODULE: ./packages/data/build-module/notes/actions.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function* triggerNoteAction(noteId, actionId) {
  yield setIsRequesting('triggerNoteAction', true);
  const url = `${constants["g" /* NAMESPACE */]}/admin/notes/${noteId}/action/${actionId}`;

  try {
    const result = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'POST'
    });
    yield updateNote(noteId, result);
    yield setIsRequesting('triggerNoteAction', false);
  } catch (error) {
    yield setError('triggerNoteAction', error);
    yield setIsRequesting('triggerNoteAction', false);
    throw new Error();
  }
}
function* removeNote(noteId) {
  yield setIsRequesting('removeNote', true);
  yield setNoteIsUpdating(noteId, true);

  try {
    const url = `${constants["g" /* NAMESPACE */]}/admin/notes/delete/${noteId}`;
    const response = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'DELETE'
    });
    yield setNote(noteId, response);
    yield setIsRequesting('removeNote', false);
    return response;
  } catch (error) {
    yield setError('removeNote', error);
    yield setIsRequesting('removeNote', false);
    yield setNoteIsUpdating(noteId, false);
    throw new Error();
  }
}
function* removeAllNotes() {
  yield setIsRequesting('removeAllNotes', true);

  try {
    const url = `${constants["g" /* NAMESPACE */]}/admin/notes/delete/all`;
    const notes = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'DELETE'
    });
    yield setNotes(notes);
    yield setIsRequesting('removeAllNotes', false);
    return notes;
  } catch (error) {
    yield setError('removeAllNotes', error);
    yield setIsRequesting('removeAllNotes', false);
    throw new Error();
  }
}
function* batchUpdateNotes(noteIds, noteFields) {
  yield setIsRequesting('batchUpdateNotes', true);

  try {
    const url = `${constants["g" /* NAMESPACE */]}/admin/notes/update`;
    const notes = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'PUT',
      data: {
        noteIds,
        ...noteFields
      }
    });
    yield setNotes(notes);
    yield setIsRequesting('batchUpdateNotes', false);
  } catch (error) {
    yield setError('updateNote', error);
    yield setIsRequesting('batchUpdateNotes', false);
    throw new Error();
  }
}
function* updateNote(noteId, noteFields) {
  yield setIsRequesting('updateNote', true);
  yield setNoteIsUpdating(noteId, true);

  try {
    const url = `${constants["g" /* NAMESPACE */]}/admin/notes/${noteId}`;
    const note = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'PUT',
      data: noteFields
    });
    yield setNote(noteId, note);
    yield setIsRequesting('updateNote', false);
    yield setNoteIsUpdating(noteId, false);
  } catch (error) {
    yield setError('updateNote', error);
    yield setIsRequesting('updateNote', false);
    yield setNoteIsUpdating(noteId, false);
    throw new Error();
  }
}
function setNote(noteId, noteFields) {
  return {
    type: action_types.SET_NOTE,
    noteId,
    noteFields
  };
}
function setNoteIsUpdating(noteId, isUpdating) {
  return {
    type: action_types.SET_NOTE_IS_UPDATING,
    noteId,
    isUpdating
  };
}
function setNotes(notes) {
  return {
    type: action_types.SET_NOTES,
    notes
  };
}
function setNotesQuery(query, noteIds) {
  return {
    type: action_types.SET_NOTES_QUERY,
    query,
    noteIds
  };
}
function setError(selector, error) {
  return {
    type: action_types.SET_ERROR,
    error,
    selector
  };
}
function setIsRequesting(selector, isRequesting) {
  return {
    type: action_types.SET_IS_REQUESTING,
    selector,
    isRequesting
  };
}
//# sourceMappingURL=actions.js.map
// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__(16);

// CONCATENATED MODULE: ./packages/data/build-module/notes/resolvers.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



function* resolvers_getNotes(query = {}) {
  const url = Object(external_wp_url_["addQueryArgs"])(`${constants["g" /* NAMESPACE */]}/admin/notes`, query);

  try {
    const notes = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url
    });
    yield setNotes(notes);
    yield setNotesQuery(query, notes.map(note => note.id));
  } catch (error) {
    yield setError('getNotes', error);
  }
}
//# sourceMappingURL=resolvers.js.map
// CONCATENATED MODULE: ./packages/data/build-module/notes/reducer.js
/**
 * Internal dependencies
 */


const notesReducer = (state = {
  errors: {},
  noteQueries: {},
  notes: {},
  requesting: {}
}, {
  error,
  isRequesting,
  isUpdating,
  noteFields,
  noteId,
  noteIds,
  notes,
  query,
  selector,
  type
}) => {
  switch (type) {
    case action_types.SET_NOTES:
      state = { ...state,
        notes: { ...state.notes,
          ...notes.reduce((acc, item) => {
            acc[item.id] = item;
            return acc;
          }, {})
        }
      };
      break;

    case action_types.SET_NOTES_QUERY:
      state = { ...state,
        noteQueries: { ...state.noteQueries,
          [JSON.stringify(query)]: noteIds
        }
      };
      break;

    case action_types.SET_ERROR:
      state = { ...state,
        errors: { ...state.errors,
          [selector]: error
        }
      };
      break;

    case action_types.SET_NOTE:
      state = { ...state,
        notes: { ...state.notes,
          [noteId]: noteFields
        }
      };
      break;

    case action_types.SET_NOTE_IS_UPDATING:
      state = { ...state,
        notes: { ...state.notes,
          [noteId]: { ...state.notes[noteId],
            isUpdating
          }
        }
      };
      break;

    case action_types.SET_IS_REQUESTING:
      state = { ...state,
        requesting: { ...state.requesting,
          [selector]: isRequesting
        }
      };
      break;
  }

  return state;
};

/* harmony default export */ var reducer = (notesReducer);
//# sourceMappingURL=reducer.js.map
// CONCATENATED MODULE: ./packages/data/build-module/notes/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






Object(external_wp_data_["registerStore"])(STORE_NAME, {
  reducer: reducer,
  actions: actions_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  selectors: selectors_namespaceObject,
  resolvers: resolvers_namespaceObject
});
const NOTES_STORE_NAME = STORE_NAME;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ REVIEWS_STORE_NAME; });

// NAMESPACE OBJECT: ./packages/data/build-module/reviews/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getReviews", function() { return getReviews; });
__webpack_require__.d(selectors_namespaceObject, "getReviewsTotalCount", function() { return getReviewsTotalCount; });
__webpack_require__.d(selectors_namespaceObject, "getReviewsError", function() { return getReviewsError; });

// NAMESPACE OBJECT: ./packages/data/build-module/reviews/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "updateReviews", function() { return updateReviews; });
__webpack_require__.d(actions_namespaceObject, "updateReview", function() { return updateReview; });
__webpack_require__.d(actions_namespaceObject, "deleteReview", function() { return deleteReview; });
__webpack_require__.d(actions_namespaceObject, "setReviewIsUpdating", function() { return setReviewIsUpdating; });
__webpack_require__.d(actions_namespaceObject, "setReview", function() { return setReview; });
__webpack_require__.d(actions_namespaceObject, "setError", function() { return setError; });

// NAMESPACE OBJECT: ./packages/data/build-module/reviews/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getReviews", function() { return resolvers_getReviews; });
__webpack_require__.d(resolvers_namespaceObject, "getReviewsTotalCount", function() { return resolvers_getReviewsTotalCount; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(7);

// CONCATENATED MODULE: ./packages/data/build-module/reviews/constants.js
const STORE_NAME = 'wc/admin/reviews';
//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./packages/data/build-module/reviews/selectors.js
const getReviews = (state, query) => {
  const stringifiedQuery = JSON.stringify(query);
  const ids = state.reviews[stringifiedQuery] && state.reviews[stringifiedQuery].data || [];
  return ids.map(id => state.data[id]);
};
const getReviewsTotalCount = (state, query) => {
  const stringifiedQuery = JSON.stringify(query);
  return state.reviews[stringifiedQuery] && state.reviews[stringifiedQuery].totalCount;
};
const getReviewsError = (state, query) => {
  const stringifiedQuery = JSON.stringify(query);
  return state.errors[stringifiedQuery];
};
//# sourceMappingURL=selectors.js.map
// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__(10);

// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__(16);

// CONCATENATED MODULE: ./packages/data/build-module/reviews/action-types.js
const TYPES = {
  UPDATE_REVIEWS: 'UPDATE_REVIEWS',
  SET_REVIEW: 'SET_REVIEW',
  SET_ERROR: 'SET_ERROR',
  SET_REVIEW_IS_UPDATING: 'SET_REVIEW_IS_UPDATING'
};
/* harmony default export */ var action_types = (TYPES);
//# sourceMappingURL=action-types.js.map
// EXTERNAL MODULE: ./packages/data/build-module/constants.js
var constants = __webpack_require__(14);

// CONCATENATED MODULE: ./packages/data/build-module/reviews/actions.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



function updateReviews(query, reviews, totalCount) {
  return {
    type: action_types.UPDATE_REVIEWS,
    reviews,
    query,
    totalCount
  };
}
function* updateReview(reviewId, reviewFields, query) {
  yield setReviewIsUpdating(reviewId, true);

  try {
    const url = Object(external_wp_url_["addQueryArgs"])(`${constants["g" /* NAMESPACE */]}/products/reviews/${reviewId}`, query || {});
    const review = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'PUT',
      data: reviewFields
    });
    yield setReview(reviewId, review);
    yield setReviewIsUpdating(reviewId, false);
  } catch (error) {
    yield setError('updateReview', error);
    yield setReviewIsUpdating(reviewId, false);
    throw new Error();
  }
}
function* deleteReview(reviewId) {
  yield setReviewIsUpdating(reviewId, true);

  try {
    const url = `${constants["g" /* NAMESPACE */]}/products/reviews/${reviewId}`;
    const response = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'DELETE'
    });
    yield setReview(reviewId, response);
    yield setReviewIsUpdating(reviewId, false);
    return response;
  } catch (error) {
    yield setError('deleteReview', error);
    yield setReviewIsUpdating(reviewId, false);
    throw new Error();
  }
}
function setReviewIsUpdating(reviewId, isUpdating) {
  return {
    type: action_types.SET_REVIEW_IS_UPDATING,
    reviewId,
    isUpdating
  };
}
function setReview(reviewId, reviewData) {
  return {
    type: action_types.SET_REVIEW,
    reviewId,
    reviewData
  };
}
function setError(query, error) {
  return {
    type: action_types.SET_ERROR,
    query,
    error
  };
}
//# sourceMappingURL=actions.js.map
// EXTERNAL MODULE: ./packages/data/build-module/controls.js
var controls = __webpack_require__(41);

// CONCATENATED MODULE: ./packages/data/build-module/reviews/resolvers.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




function* resolvers_getReviews(query) {
  try {
    const url = Object(external_wp_url_["addQueryArgs"])(`${constants["g" /* NAMESPACE */]}/products/reviews`, query);
    const response = yield Object(controls["b" /* fetchWithHeaders */])({
      path: url,
      method: 'GET'
    });
    const totalCount = parseInt(response.headers.get('x-wp-total'), 10);
    yield updateReviews(query, response.data, totalCount);
  } catch (error) {
    yield setError(query, error);
  }
}
function* resolvers_getReviewsTotalCount(query) {
  yield resolvers_getReviews(query);
}
//# sourceMappingURL=resolvers.js.map
// CONCATENATED MODULE: ./packages/data/build-module/reviews/reducer.js
/**
 * Internal dependencies
 */


const reducer = (state = {
  reviews: {},
  errors: {},
  data: {}
}, {
  type,
  query,
  reviews,
  reviewId,
  reviewData,
  totalCount,
  error,
  isUpdating
}) => {
  switch (type) {
    case action_types.UPDATE_REVIEWS:
      const ids = [];
      const nextReviews = reviews.reduce((result, review) => {
        ids.push(review.id);
        result[review.id] = { ...(state.data[review.id] || {}),
          ...review
        };
        return result;
      }, {});
      return { ...state,
        reviews: { ...state.reviews,
          [JSON.stringify(query)]: {
            data: ids,
            totalCount
          }
        },
        data: { ...state.data,
          ...nextReviews
        }
      };

    case action_types.SET_REVIEW:
      return { ...state,
        data: { ...state.data,
          [reviewId]: reviewData
        }
      };

    case action_types.SET_ERROR:
      return { ...state,
        errors: { ...state.errors,
          [JSON.stringify(query)]: error
        }
      };

    case action_types.SET_REVIEW_IS_UPDATING:
      return { ...state,
        data: { ...state.data,
          [reviewId]: { ...state.data[reviewId],
            isUpdating
          }
        }
      };

    default:
      return state;
  }
};

/* harmony default export */ var reviews_reducer = (reducer);
//# sourceMappingURL=reducer.js.map
// CONCATENATED MODULE: ./packages/data/build-module/reviews/index.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */







Object(external_wp_data_["registerStore"])(STORE_NAME, {
  reducer: reviews_reducer,
  actions: actions_namespaceObject,
  controls: controls["a" /* default */],
  selectors: selectors_namespaceObject,
  resolvers: resolvers_namespaceObject
});
const REVIEWS_STORE_NAME = STORE_NAME;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ NAVIGATION_STORE_NAME; });

// NAMESPACE OBJECT: ./packages/data/build-module/navigation/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getMenuItems", function() { return getMenuItems; });
__webpack_require__.d(selectors_namespaceObject, "getFavorites", function() { return getFavorites; });
__webpack_require__.d(selectors_namespaceObject, "isNavigationRequesting", function() { return isNavigationRequesting; });
__webpack_require__.d(selectors_namespaceObject, "getPersistedQuery", function() { return getPersistedQuery; });

// NAMESPACE OBJECT: ./packages/data/build-module/navigation/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "setMenuItems", function() { return setMenuItems; });
__webpack_require__.d(actions_namespaceObject, "addMenuItems", function() { return addMenuItems; });
__webpack_require__.d(actions_namespaceObject, "getFavoritesFailure", function() { return getFavoritesFailure; });
__webpack_require__.d(actions_namespaceObject, "getFavoritesRequest", function() { return getFavoritesRequest; });
__webpack_require__.d(actions_namespaceObject, "getFavoritesSuccess", function() { return getFavoritesSuccess; });
__webpack_require__.d(actions_namespaceObject, "addFavoriteRequest", function() { return addFavoriteRequest; });
__webpack_require__.d(actions_namespaceObject, "addFavoriteFailure", function() { return addFavoriteFailure; });
__webpack_require__.d(actions_namespaceObject, "addFavoriteSuccess", function() { return addFavoriteSuccess; });
__webpack_require__.d(actions_namespaceObject, "removeFavoriteRequest", function() { return removeFavoriteRequest; });
__webpack_require__.d(actions_namespaceObject, "removeFavoriteFailure", function() { return removeFavoriteFailure; });
__webpack_require__.d(actions_namespaceObject, "removeFavoriteSuccess", function() { return removeFavoriteSuccess; });
__webpack_require__.d(actions_namespaceObject, "onLoad", function() { return actions_onLoad; });
__webpack_require__.d(actions_namespaceObject, "onHistoryChange", function() { return actions_onHistoryChange; });
__webpack_require__.d(actions_namespaceObject, "addFavorite", function() { return addFavorite; });
__webpack_require__.d(actions_namespaceObject, "removeFavorite", function() { return removeFavorite; });

// NAMESPACE OBJECT: ./packages/data/build-module/navigation/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getFavorites", function() { return resolvers_getFavorites; });

// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__(10);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(7);

// EXTERNAL MODULE: ./packages/data/build-module/navigation/constants.js
var constants = __webpack_require__(79);

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(34);

// CONCATENATED MODULE: ./packages/data/build-module/navigation/selectors.js
/**
 * External dependencies
 */

const MENU_ITEMS_HOOK = 'woocommerce_navigation_menu_items';
const getMenuItems = state => {
  return Object(external_wp_hooks_["applyFilters"])(MENU_ITEMS_HOOK, state.menuItems);
};
const getFavorites = state => {
  return state.favorites || [];
};
const isNavigationRequesting = (state, selector) => {
  return state.requesting[selector] || false;
};
const getPersistedQuery = state => {
  return state.persistedQuery || {};
};
//# sourceMappingURL=selectors.js.map
// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__(20);
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(12);

// CONCATENATED MODULE: ./packages/data/build-module/navigation/action-types.js
const TYPES = {
  ADD_MENU_ITEMS: 'ADD_MENU_ITEMS',
  SET_MENU_ITEMS: 'SET_MENU_ITEMS',
  ON_HISTORY_CHANGE: 'ON_HISTORY_CHANGE',
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
/* harmony default export */ var action_types = (TYPES);
//# sourceMappingURL=action-types.js.map
// EXTERNAL MODULE: ./packages/data/build-module/constants.js
var build_module_constants = __webpack_require__(14);

// CONCATENATED MODULE: ./packages/data/build-module/navigation/actions.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



function setMenuItems(menuItems) {
  return {
    type: action_types.SET_MENU_ITEMS,
    menuItems
  };
}
function addMenuItems(menuItems) {
  return {
    type: action_types.ADD_MENU_ITEMS,
    menuItems
  };
}
function getFavoritesFailure(error) {
  return {
    type: action_types.GET_FAVORITES_FAILURE,
    error
  };
}
function getFavoritesRequest(favorites) {
  return {
    type: action_types.GET_FAVORITES_REQUEST,
    favorites
  };
}
function getFavoritesSuccess(favorites) {
  return {
    type: action_types.GET_FAVORITES_SUCCESS,
    favorites
  };
}
function addFavoriteRequest(favorite) {
  return {
    type: action_types.ADD_FAVORITE_REQUEST,
    favorite
  };
}
function addFavoriteFailure(favorite, error) {
  return {
    type: action_types.ADD_FAVORITE_FAILURE,
    favorite,
    error
  };
}
function addFavoriteSuccess(favorite) {
  return {
    type: action_types.ADD_FAVORITE_SUCCESS,
    favorite
  };
}
function removeFavoriteRequest(favorite) {
  return {
    type: action_types.REMOVE_FAVORITE_REQUEST,
    favorite
  };
}
function removeFavoriteFailure(favorite, error) {
  return {
    type: action_types.REMOVE_FAVORITE_FAILURE,
    favorite,
    error
  };
}
function removeFavoriteSuccess(favorite, error) {
  return {
    type: action_types.REMOVE_FAVORITE_SUCCESS,
    favorite,
    error
  };
}
function* actions_onLoad() {
  yield actions_onHistoryChange();
}
function* actions_onHistoryChange() {
  const persistedQuery = Object(external_wc_navigation_["getPersistedQuery"])();

  if (!Object.keys(persistedQuery).length) {
    return null;
  }

  yield {
    type: action_types.ON_HISTORY_CHANGE,
    persistedQuery
  };
}
function* addFavorite(favorite) {
  yield addFavoriteRequest(favorite);

  try {
    const results = yield external_wp_apiFetch_default()({
      path: `${build_module_constants["k" /* WC_ADMIN_NAMESPACE */]}/navigation/favorites/me`,
      method: 'POST',
      data: {
        item_id: favorite
      }
    });

    if (results) {
      yield addFavoriteSuccess(favorite);
      return results;
    }

    throw new Error();
  } catch (error) {
    yield addFavoriteFailure(favorite, error);
    throw new Error();
  }
}
function* removeFavorite(favorite) {
  yield removeFavoriteRequest(favorite);

  try {
    const results = yield external_wp_apiFetch_default()({
      path: `${build_module_constants["k" /* WC_ADMIN_NAMESPACE */]}/navigation/favorites/me`,
      method: 'DELETE',
      data: {
        item_id: favorite
      }
    });

    if (results) {
      yield removeFavoriteSuccess(favorite);
      return results;
    }

    throw new Error();
  } catch (error) {
    yield removeFavoriteFailure(favorite, error);
    throw new Error();
  }
}
//# sourceMappingURL=actions.js.map
// CONCATENATED MODULE: ./packages/data/build-module/navigation/reducer.js
/**
 * Internal dependencies
 */


const reducer = (state = {
  error: null,
  menuItems: [],
  favorites: [],
  requesting: {},
  persistedQuery: {}
}, {
  type,
  error,
  favorite,
  favorites,
  menuItems,
  persistedQuery
}) => {
  switch (type) {
    case action_types.SET_MENU_ITEMS:
      state = { ...state,
        menuItems
      };
      break;

    case action_types.ADD_MENU_ITEMS:
      state = { ...state,
        menuItems: [...state.menuItems, ...menuItems]
      };
      break;

    case action_types.ON_HISTORY_CHANGE:
      state = { ...state,
        persistedQuery
      };
      break;

    case action_types.GET_FAVORITES_FAILURE:
      state = { ...state,
        requesting: { ...state.requesting,
          getFavorites: false
        }
      };
      break;

    case action_types.GET_FAVORITES_REQUEST:
      state = { ...state,
        requesting: { ...state.requesting,
          getFavorites: true
        }
      };
      break;

    case action_types.GET_FAVORITES_SUCCESS:
      state = { ...state,
        favorites,
        requesting: { ...state.requesting,
          getFavorites: false
        }
      };
      break;

    case action_types.ADD_FAVORITE_FAILURE:
      state = { ...state,
        error,
        requesting: { ...state.requesting,
          addFavorite: false
        }
      };
      break;

    case action_types.ADD_FAVORITE_REQUEST:
      state = { ...state,
        requesting: { ...state.requesting,
          addFavorite: true
        }
      };
      break;

    case action_types.ADD_FAVORITE_SUCCESS:
      const newFavorites = !state.favorites.includes(favorite) ? [...state.favorites, favorite] : state.favorites;
      state = { ...state,
        favorites: newFavorites,
        menuItems: state.menuItems.map(item => {
          if (item.id === favorite) {
            return { ...item,
              menuId: 'favorites'
            };
          }

          return item;
        }),
        requesting: { ...state.requesting,
          addFavorite: false
        }
      };
      break;

    case action_types.REMOVE_FAVORITE_FAILURE:
      state = { ...state,
        requesting: { ...state.requesting,
          error,
          removeFavorite: false
        }
      };
      break;

    case action_types.REMOVE_FAVORITE_REQUEST:
      state = { ...state,
        requesting: { ...state.requesting,
          removeFavorite: true
        }
      };
      break;

    case action_types.REMOVE_FAVORITE_SUCCESS:
      const filteredFavorites = state.favorites.filter(f => f !== favorite);
      state = { ...state,
        favorites: filteredFavorites,
        menuItems: state.menuItems.map(item => {
          if (item.id === favorite) {
            return { ...item,
              menuId: 'plugins'
            };
          }

          return item;
        }),
        requesting: { ...state.requesting,
          removeFavorite: false
        }
      };
      break;
  }

  return state;
};

/* harmony default export */ var navigation_reducer = (reducer);
//# sourceMappingURL=reducer.js.map
// CONCATENATED MODULE: ./packages/data/build-module/navigation/resolvers.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function* resolvers_getFavorites() {
  yield getFavoritesRequest();

  try {
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: `${build_module_constants["k" /* WC_ADMIN_NAMESPACE */]}/navigation/favorites/me`
    });

    if (results) {
      yield getFavoritesSuccess(results);
      return;
    }

    throw new Error();
  } catch (error) {
    yield getFavoritesFailure(error);
    throw new Error();
  }
}
//# sourceMappingURL=resolvers.js.map
// CONCATENATED MODULE: ./packages/data/build-module/navigation/dispatchers.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/* harmony default export */ var dispatchers = (async () => {
  const {
    onLoad,
    onHistoryChange
  } = Object(external_wp_data_["dispatch"])(constants["a" /* STORE_NAME */]);
  await onLoad();
  Object(external_wc_navigation_["addHistoryListener"])(async () => {
    setTimeout(async () => {
      await onHistoryChange();
    }, 0);
  });
});
//# sourceMappingURL=dispatchers.js.map
// CONCATENATED MODULE: ./packages/data/build-module/navigation/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */







Object(external_wp_data_["registerStore"])(constants["a" /* STORE_NAME */], {
  reducer: navigation_reducer,
  actions: actions_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  resolvers: resolvers_namespaceObject,
  selectors: selectors_namespaceObject
});
dispatchers();
const NAVIGATION_STORE_NAME = constants["a" /* STORE_NAME */];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ PAYMENT_GATEWAYS_STORE_NAME; });

// NAMESPACE OBJECT: ./packages/data/build-module/payment-gateways/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "getPaymentGatewaysRequest", function() { return getPaymentGatewaysRequest; });
__webpack_require__.d(actions_namespaceObject, "getPaymentGatewaysSuccess", function() { return getPaymentGatewaysSuccess; });
__webpack_require__.d(actions_namespaceObject, "getPaymentGatewaysError", function() { return getPaymentGatewaysError; });
__webpack_require__.d(actions_namespaceObject, "getPaymentGatewayRequest", function() { return getPaymentGatewayRequest; });
__webpack_require__.d(actions_namespaceObject, "getPaymentGatewayError", function() { return getPaymentGatewayError; });
__webpack_require__.d(actions_namespaceObject, "getPaymentGatewaySuccess", function() { return getPaymentGatewaySuccess; });
__webpack_require__.d(actions_namespaceObject, "updatePaymentGatewaySuccess", function() { return updatePaymentGatewaySuccess; });
__webpack_require__.d(actions_namespaceObject, "updatePaymentGatewayRequest", function() { return updatePaymentGatewayRequest; });
__webpack_require__.d(actions_namespaceObject, "updatePaymentGatewayError", function() { return updatePaymentGatewayError; });
__webpack_require__.d(actions_namespaceObject, "updatePaymentGateway", function() { return updatePaymentGateway; });

// NAMESPACE OBJECT: ./packages/data/build-module/payment-gateways/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getPaymentGateways", function() { return getPaymentGateways; });
__webpack_require__.d(resolvers_namespaceObject, "getPaymentGateway", function() { return getPaymentGateway; });

// NAMESPACE OBJECT: ./packages/data/build-module/payment-gateways/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getPaymentGateway", function() { return selectors_getPaymentGateway; });
__webpack_require__.d(selectors_namespaceObject, "getPaymentGateways", function() { return selectors_getPaymentGateways; });
__webpack_require__.d(selectors_namespaceObject, "getPaymentGatewayError", function() { return selectors_getPaymentGatewayError; });
__webpack_require__.d(selectors_namespaceObject, "isPaymentGatewayUpdating", function() { return isPaymentGatewayUpdating; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(7);

// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__(10);

// CONCATENATED MODULE: ./packages/data/build-module/payment-gateways/action-types.js
let ACTION_TYPES;

(function (ACTION_TYPES) {
  ACTION_TYPES["GET_PAYMENT_GATEWAYS_REQUEST"] = "GET_PAYMENT_GATEWAYS_REQUEST";
  ACTION_TYPES["GET_PAYMENT_GATEWAYS_SUCCESS"] = "GET_PAYMENT_GATEWAYS_SUCCESS";
  ACTION_TYPES["GET_PAYMENT_GATEWAYS_ERROR"] = "GET_PAYMENT_GATEWAYS_ERROR";
  ACTION_TYPES["UPDATE_PAYMENT_GATEWAY_REQUEST"] = "UPDATE_PAYMENT_GATEWAY_REQUEST";
  ACTION_TYPES["UPDATE_PAYMENT_GATEWAY_SUCCESS"] = "UPDATE_PAYMENT_GATEWAY_SUCCESS";
  ACTION_TYPES["UPDATE_PAYMENT_GATEWAY_ERROR"] = "UPDATE_PAYMENT_GATEWAY_ERROR";
  ACTION_TYPES["GET_PAYMENT_GATEWAY_REQUEST"] = "GET_PAYMENT_GATEWAY_REQUEST";
  ACTION_TYPES["GET_PAYMENT_GATEWAY_SUCCESS"] = "GET_PAYMENT_GATEWAY_SUCCESS";
  ACTION_TYPES["GET_PAYMENT_GATEWAY_ERROR"] = "GET_PAYMENT_GATEWAY_ERROR";
})(ACTION_TYPES || (ACTION_TYPES = {}));
//# sourceMappingURL=action-types.js.map
// CONCATENATED MODULE: ./packages/data/build-module/payment-gateways/constants.js
const STORE_KEY = 'wc/payment-gateways';
const API_NAMESPACE = 'wc/v3';
//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./packages/data/build-module/payment-gateways/actions.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function getPaymentGatewaysRequest() {
  return {
    type: ACTION_TYPES.GET_PAYMENT_GATEWAYS_REQUEST
  };
}
function getPaymentGatewaysSuccess(paymentGateways) {
  return {
    type: ACTION_TYPES.GET_PAYMENT_GATEWAYS_SUCCESS,
    paymentGateways
  };
}
function getPaymentGatewaysError(error) {
  return {
    type: ACTION_TYPES.GET_PAYMENT_GATEWAYS_ERROR,
    error
  };
}
function getPaymentGatewayRequest() {
  return {
    type: ACTION_TYPES.GET_PAYMENT_GATEWAY_REQUEST
  };
}
function getPaymentGatewayError(error) {
  return {
    type: ACTION_TYPES.GET_PAYMENT_GATEWAY_ERROR,
    error
  };
}
function getPaymentGatewaySuccess(paymentGateway) {
  return {
    type: ACTION_TYPES.GET_PAYMENT_GATEWAY_SUCCESS,
    paymentGateway
  };
}
function updatePaymentGatewaySuccess(paymentGateway) {
  return {
    type: ACTION_TYPES.UPDATE_PAYMENT_GATEWAY_SUCCESS,
    paymentGateway
  };
}
function updatePaymentGatewayRequest() {
  return {
    type: ACTION_TYPES.UPDATE_PAYMENT_GATEWAY_REQUEST
  };
}
function updatePaymentGatewayError(error) {
  return {
    type: ACTION_TYPES.UPDATE_PAYMENT_GATEWAY_ERROR,
    error
  };
}
function* updatePaymentGateway(id, data) {
  try {
    yield updatePaymentGatewayRequest();
    const response = yield Object(external_wp_dataControls_["apiFetch"])({
      method: 'PUT',
      path: API_NAMESPACE + '/payment_gateways/' + id,
      body: JSON.stringify(data)
    });

    if (response && response.id === id) {
      // Update the already loaded payment gateway list with the new data
      yield updatePaymentGatewaySuccess(response);
      return response;
    }
  } catch (e) {
    yield updatePaymentGatewayError(e);
    throw e;
  }
}
//# sourceMappingURL=actions.js.map
// CONCATENATED MODULE: ./packages/data/build-module/payment-gateways/resolvers.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



// Can be removed in WP 5.9.
const dispatch = external_wp_data_["controls"] && external_wp_data_["controls"].dispatch ? external_wp_data_["controls"].dispatch : external_wp_dataControls_["dispatch"];
function* getPaymentGateways() {
  yield getPaymentGatewaysRequest();

  try {
    const response = yield Object(external_wp_dataControls_["apiFetch"])({
      path: API_NAMESPACE + '/payment_gateways'
    });
    yield getPaymentGatewaysSuccess(response);

    for (let i = 0; i < response.length; i++) {
      yield dispatch(STORE_KEY, 'finishResolution', 'getPaymentGateway', [response[i].id]);
    }
  } catch (e) {
    yield getPaymentGatewaysError(e);
  }
}
function* getPaymentGateway(id) {
  yield getPaymentGatewayRequest();

  try {
    const response = yield Object(external_wp_dataControls_["apiFetch"])({
      path: API_NAMESPACE + '/payment_gateways/' + id
    });

    if (response && response.id) {
      yield getPaymentGatewaySuccess(response);
      return response;
    }
  } catch (e) {
    yield getPaymentGatewayError(e);
  }
}
//# sourceMappingURL=resolvers.js.map
// CONCATENATED MODULE: ./packages/data/build-module/payment-gateways/selectors.js
/**
 * Internal dependencies
 */
function selectors_getPaymentGateway(state, id) {
  return state.paymentGateways.find(paymentGateway => paymentGateway.id === id);
}
function selectors_getPaymentGateways(state) {
  return state.paymentGateways;
}
function selectors_getPaymentGatewayError(state, selector) {
  return state.errors[selector] || null;
}
function isPaymentGatewayUpdating(state) {
  return state.isUpdating || false;
}
//# sourceMappingURL=selectors.js.map
// CONCATENATED MODULE: ./packages/data/build-module/payment-gateways/reducer.js
/**
 * Internal dependencies
 */


function updatePaymentGatewayList(state, paymentGateway) {
  const targetIndex = state.paymentGateways.findIndex(gateway => gateway.id === paymentGateway.id);

  if (targetIndex === -1) {
    return { ...state,
      paymentGateways: [...state.paymentGateways, paymentGateway],
      isUpdating: false
    };
  }

  return { ...state,
    paymentGateways: [...state.paymentGateways.slice(0, targetIndex), paymentGateway, ...state.paymentGateways.slice(targetIndex + 1)],
    isUpdating: false
  };
}

const reducer = (state = {
  paymentGateways: [],
  isUpdating: false,
  errors: {}
}, payload) => {
  if (payload && 'type' in payload) {
    switch (payload.type) {
      case ACTION_TYPES.GET_PAYMENT_GATEWAYS_REQUEST:
      case ACTION_TYPES.GET_PAYMENT_GATEWAY_REQUEST:
        return state;

      case ACTION_TYPES.GET_PAYMENT_GATEWAYS_SUCCESS:
        return { ...state,
          paymentGateways: payload.paymentGateways
        };

      case ACTION_TYPES.GET_PAYMENT_GATEWAYS_ERROR:
        return { ...state,
          errors: { ...state.errors,
            getPaymentGateways: payload.error
          }
        };

      case ACTION_TYPES.GET_PAYMENT_GATEWAY_ERROR:
        return { ...state,
          errors: { ...state.errors,
            getPaymentGateway: payload.error
          }
        };

      case ACTION_TYPES.UPDATE_PAYMENT_GATEWAY_REQUEST:
        return { ...state,
          isUpdating: true
        };

      case ACTION_TYPES.UPDATE_PAYMENT_GATEWAY_SUCCESS:
        return updatePaymentGatewayList(state, payload.paymentGateway);

      case ACTION_TYPES.GET_PAYMENT_GATEWAY_SUCCESS:
        return updatePaymentGatewayList(state, payload.paymentGateway);

      case ACTION_TYPES.UPDATE_PAYMENT_GATEWAY_ERROR:
        return { ...state,
          errors: { ...state.errors,
            updatePaymentGateway: payload.error
          },
          isUpdating: false
        };
    }
  }

  return state;
};

/* harmony default export */ var payment_gateways_reducer = (reducer);
//# sourceMappingURL=reducer.js.map
// CONCATENATED MODULE: ./packages/data/build-module/payment-gateways/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






const PAYMENT_GATEWAYS_STORE_NAME = STORE_KEY;
Object(external_wp_data_["registerStore"])(STORE_KEY, {
  actions: actions_namespaceObject,
  selectors: selectors_namespaceObject,
  resolvers: resolvers_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  reducer: payment_gateways_reducer
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getResourceName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getResourcePrefix; });
/* unused harmony export isResourcePrefix */
/* unused harmony export getResourceIdentifier */
function getResourceName(prefix, identifier) {
  const identifierString = JSON.stringify(identifier, Object.keys(identifier).sort());
  return `${prefix}:${identifierString}`;
}
function getResourcePrefix(resourceName) {
  const hasPrefixIndex = resourceName.indexOf(':');
  return hasPrefixIndex < 0 ? resourceName : resourceName.substring(0, hasPrefixIndex);
}
function isResourcePrefix(resourceName, prefix) {
  const resourcePrefix = getResourcePrefix(resourceName);
  return resourcePrefix === prefix;
}
function getResourceIdentifier(resourceName) {
  const identifierString = resourceName.substring(resourceName.indexOf(':') + 1);
  return JSON.parse(identifierString);
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ EXPORT_STORE_NAME; });

// NAMESPACE OBJECT: ./packages/data/build-module/export/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "isExportRequesting", function() { return isExportRequesting; });
__webpack_require__.d(selectors_namespaceObject, "getExportId", function() { return getExportId; });
__webpack_require__.d(selectors_namespaceObject, "getError", function() { return getError; });

// NAMESPACE OBJECT: ./packages/data/build-module/export/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "setExportId", function() { return setExportId; });
__webpack_require__.d(actions_namespaceObject, "setIsRequesting", function() { return setIsRequesting; });
__webpack_require__.d(actions_namespaceObject, "setError", function() { return setError; });
__webpack_require__.d(actions_namespaceObject, "startExport", function() { return startExport; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(7);

// CONCATENATED MODULE: ./packages/data/build-module/export/constants.js
/**
 * Internal dependencies
 */
const STORE_NAME = 'wc/admin/export';
//# sourceMappingURL=constants.js.map
// EXTERNAL MODULE: ./node_modules/md5/md5.js
var md5 = __webpack_require__(118);
var md5_default = /*#__PURE__*/__webpack_require__.n(md5);

// EXTERNAL MODULE: ./packages/data/build-module/utils.js
var utils = __webpack_require__(29);

// CONCATENATED MODULE: ./packages/data/build-module/export/utils.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


const hashExportArgs = args => {
  return md5_default()(Object(utils["a" /* getResourceName */])('export', args));
};
//# sourceMappingURL=utils.js.map
// CONCATENATED MODULE: ./packages/data/build-module/export/selectors.js
/**
 * Internal dependencies
 */

const isExportRequesting = (state, selector, selectorArgs) => {
  return Boolean(state.requesting[selector] && state.requesting[selector][hashExportArgs(selectorArgs)]);
};
const getExportId = (state, exportType, exportArgs) => {
  return state.exportIds[exportType] && state.exportIds[exportType][hashExportArgs(exportArgs)];
};
const getError = (state, selector, selectorArgs) => {
  return state.errors[selector] && state.errors[selector][hashExportArgs(selectorArgs)];
};
//# sourceMappingURL=selectors.js.map
// EXTERNAL MODULE: ./packages/data/build-module/controls.js
var controls = __webpack_require__(41);

// CONCATENATED MODULE: ./packages/data/build-module/export/action-types.js
const TYPES = {
  START_EXPORT: 'START_EXPORT',
  SET_EXPORT_ID: 'SET_EXPORT_ID',
  SET_ERROR: 'SET_ERROR',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING'
};
/* harmony default export */ var action_types = (TYPES);
//# sourceMappingURL=action-types.js.map
// EXTERNAL MODULE: ./packages/data/build-module/constants.js
var constants = __webpack_require__(14);

// CONCATENATED MODULE: ./packages/data/build-module/export/actions.js
/**
 * Internal dependencies
 */



function setExportId(exportType, exportArgs, exportId) {
  return {
    type: action_types.SET_EXPORT_ID,
    exportType,
    exportArgs,
    exportId
  };
}
function setIsRequesting(selector, selectorArgs, isRequesting) {
  return {
    type: action_types.SET_IS_REQUESTING,
    selector,
    selectorArgs,
    isRequesting
  };
}
function setError(selector, selectorArgs, error) {
  return {
    type: action_types.SET_ERROR,
    selector,
    selectorArgs,
    error
  };
}
function* startExport(type, args) {
  yield setIsRequesting('startExport', {
    type,
    args
  }, true);

  try {
    const response = yield Object(controls["b" /* fetchWithHeaders */])({
      path: `${constants["g" /* NAMESPACE */]}/reports/${type}/export`,
      method: 'POST',
      data: {
        report_args: args,
        email: true
      }
    });
    yield setIsRequesting('startExport', {
      type,
      args
    }, false);
    const {
      export_id: exportId,
      message
    } = response.data;

    if (exportId) {
      yield setExportId(type, args, exportId);
    } else {
      throw new Error(message);
    }

    return response.data;
  } catch (error) {
    yield setError('startExport', {
      type,
      args
    }, error.message);
    yield setIsRequesting('startExport', {
      type,
      args
    }, false);
    throw error;
  }
}
//# sourceMappingURL=actions.js.map
// CONCATENATED MODULE: ./packages/data/build-module/export/reducer.js
/**
 * Internal dependencies
 */



const exportReducer = (state = {
  errors: {},
  requesting: {},
  exportMeta: {},
  exportIds: {}
}, {
  error,
  exportArgs,
  exportId,
  exportType,
  isRequesting,
  selector,
  selectorArgs,
  type
}) => {
  switch (type) {
    case action_types.SET_IS_REQUESTING:
      return { ...state,
        requesting: { ...state.requesting,
          [selector]: { ...state.requesting[selector],
            [hashExportArgs(selectorArgs)]: isRequesting
          }
        }
      };

    case action_types.SET_EXPORT_ID:
      return { ...state,
        exportMeta: { ...state.exportMeta,
          [exportId]: {
            exportType,
            exportArgs
          }
        },
        exportIds: { ...state.exportIds,
          [exportType]: { ...state.exportIds[exportType],
            [hashExportArgs({
              type: exportType,
              args: exportArgs
            })]: exportId
          }
        }
      };

    case action_types.SET_ERROR:
      return { ...state,
        errors: { ...state.errors,
          [selector]: { ...state.errors[selector],
            [hashExportArgs(selectorArgs)]: error
          }
        }
      };

    default:
      return state;
  }
};

/* harmony default export */ var reducer = (exportReducer);
//# sourceMappingURL=reducer.js.map
// CONCATENATED MODULE: ./packages/data/build-module/export/index.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */






Object(external_wp_data_["registerStore"])(STORE_NAME, {
  reducer: reducer,
  actions: actions_namespaceObject,
  controls: controls["a" /* default */],
  selectors: selectors_namespaceObject
});
const EXPORT_STORE_NAME = STORE_NAME;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ IMPORT_STORE_NAME; });

// NAMESPACE OBJECT: ./packages/data/build-module/import/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getImportStarted", function() { return getImportStarted; });
__webpack_require__.d(selectors_namespaceObject, "getFormSettings", function() { return getFormSettings; });
__webpack_require__.d(selectors_namespaceObject, "getImportStatus", function() { return getImportStatus; });
__webpack_require__.d(selectors_namespaceObject, "getImportTotals", function() { return getImportTotals; });
__webpack_require__.d(selectors_namespaceObject, "getImportError", function() { return getImportError; });

// NAMESPACE OBJECT: ./packages/data/build-module/import/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "setImportStarted", function() { return setImportStarted; });
__webpack_require__.d(actions_namespaceObject, "setImportPeriod", function() { return setImportPeriod; });
__webpack_require__.d(actions_namespaceObject, "setSkipPrevious", function() { return setSkipPrevious; });
__webpack_require__.d(actions_namespaceObject, "setImportStatus", function() { return setImportStatus; });
__webpack_require__.d(actions_namespaceObject, "setImportTotals", function() { return setImportTotals; });
__webpack_require__.d(actions_namespaceObject, "setImportError", function() { return setImportError; });
__webpack_require__.d(actions_namespaceObject, "updateImportation", function() { return updateImportation; });

// NAMESPACE OBJECT: ./packages/data/build-module/import/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getImportStatus", function() { return resolvers_getImportStatus; });
__webpack_require__.d(resolvers_namespaceObject, "getImportTotals", function() { return resolvers_getImportTotals; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(7);

// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__(10);

// CONCATENATED MODULE: ./packages/data/build-module/import/constants.js
/**
 * Internal dependencies
 */
const STORE_NAME = 'wc/admin/import';
//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./packages/data/build-module/import/selectors.js
const getImportStarted = state => {
  const {
    activeImport,
    lastImportStartTimestamp
  } = state;
  return {
    activeImport,
    lastImportStartTimestamp
  } || {};
};
const getFormSettings = state => {
  const {
    period,
    skipPrevious
  } = state;
  return {
    period,
    skipPrevious
  } || {};
};
const getImportStatus = (state, query) => {
  const stringifiedQuery = JSON.stringify(query);
  return state.importStatus[stringifiedQuery] || {};
};
const getImportTotals = (state, query) => {
  const {
    importTotals,
    lastImportStartTimestamp
  } = state;
  const stringifiedQuery = JSON.stringify(query);
  return { ...importTotals[stringifiedQuery],
    lastImportStartTimestamp
  } || {};
};
const getImportError = (state, query) => {
  const stringifiedQuery = JSON.stringify(query);
  return state.errors[stringifiedQuery] || false;
};
//# sourceMappingURL=selectors.js.map
// CONCATENATED MODULE: ./packages/data/build-module/import/action-types.js
const TYPES = {
  SET_IMPORT_DATE: 'SET_IMPORT_DATE',
  SET_IMPORT_ERROR: 'SET_IMPORT_ERROR',
  SET_IMPORT_PERIOD: 'SET_IMPORT_PERIOD',
  SET_IMPORT_STARTED: 'SET_IMPORT_STARTED',
  SET_IMPORT_STATUS: 'SET_IMPORT_STATUS',
  SET_IMPORT_TOTALS: 'SET_IMPORT_TOTALS',
  SET_SKIP_IMPORTED: 'SET_SKIP_IMPORTED'
};
/* harmony default export */ var action_types = (TYPES);
//# sourceMappingURL=action-types.js.map
// CONCATENATED MODULE: ./packages/data/build-module/import/actions.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


function setImportStarted(activeImport) {
  return {
    type: action_types.SET_IMPORT_STARTED,
    activeImport
  };
}
function setImportPeriod(date, dateModified) {
  if (!dateModified) {
    return {
      type: action_types.SET_IMPORT_PERIOD,
      date
    };
  }

  return {
    type: action_types.SET_IMPORT_DATE,
    date
  };
}
function setSkipPrevious(skipPrevious) {
  return {
    type: action_types.SET_SKIP_IMPORTED,
    skipPrevious
  };
}
function setImportStatus(query, importStatus) {
  return {
    type: action_types.SET_IMPORT_STATUS,
    importStatus,
    query
  };
}
function setImportTotals(query, importTotals) {
  return {
    type: action_types.SET_IMPORT_TOTALS,
    importTotals,
    query
  };
}
function setImportError(query, error) {
  return {
    type: action_types.SET_IMPORT_ERROR,
    error,
    query
  };
}
function* updateImportation(path, importStarted = false) {
  yield setImportStarted(importStarted);

  try {
    const response = yield Object(external_wp_dataControls_["apiFetch"])({
      path,
      method: 'POST'
    });
    return response;
  } catch (error) {
    yield setImportError(path, error);
    throw error;
  }
}
//# sourceMappingURL=actions.js.map
// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__(16);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);

// EXTERNAL MODULE: ./packages/data/build-module/constants.js
var constants = __webpack_require__(14);

// CONCATENATED MODULE: ./packages/data/build-module/import/resolvers.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



function* resolvers_getImportStatus(query) {
  try {
    const url = Object(external_wp_url_["addQueryArgs"])(`${constants["g" /* NAMESPACE */]}/reports/import/status`, Object(external_lodash_["omit"])(query, ['timestamp']));
    const response = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url
    });
    yield setImportStatus(query, response);
  } catch (error) {
    yield setImportError(query, error);
  }
}
function* resolvers_getImportTotals(query) {
  try {
    const url = Object(external_wp_url_["addQueryArgs"])(`${constants["g" /* NAMESPACE */]}/reports/import/totals`, query);
    const response = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url
    });
    yield setImportTotals(query, response);
  } catch (error) {
    yield setImportError(query, error);
  }
}
//# sourceMappingURL=resolvers.js.map
// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(9);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./packages/data/build-module/import/reducer.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



const reducer = (state = {
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
}, {
  type,
  query,
  importStatus,
  importTotals,
  activeImport,
  date,
  error,
  skipPrevious
}) => {
  switch (type) {
    case action_types.SET_IMPORT_STARTED:
      state = { ...state,
        activeImport,
        lastImportStartTimestamp: activeImport ? Date.now() : state.lastImportStartTimestamp
      };
      break;

    case action_types.SET_IMPORT_PERIOD:
      state = { ...state,
        period: { ...state.period,
          label: date
        },
        activeImport: false
      };
      break;

    case action_types.SET_IMPORT_DATE:
      state = { ...state,
        period: {
          date,
          label: 'custom'
        },
        activeImport: false
      };
      break;

    case action_types.SET_SKIP_IMPORTED:
      state = { ...state,
        skipPrevious,
        activeImport: false
      };
      break;

    case action_types.SET_IMPORT_STATUS:
      state = { ...state,
        importStatus: { ...state.importStatus,
          [JSON.stringify(query)]: importStatus
        },
        errors: { ...state.errors,
          [JSON.stringify(query)]: false
        }
      };
      break;

    case action_types.SET_IMPORT_TOTALS:
      state = { ...state,
        importTotals: { ...state.importTotals,
          [JSON.stringify(query)]: importTotals
        }
      };
      break;

    case action_types.SET_IMPORT_ERROR:
      state = { ...state,
        errors: { ...state.errors,
          [JSON.stringify(query)]: error
        }
      };
      break;
  }

  return state;
};

/* harmony default export */ var import_reducer = (reducer);
//# sourceMappingURL=reducer.js.map
// CONCATENATED MODULE: ./packages/data/build-module/import/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






Object(external_wp_data_["registerStore"])(STORE_NAME, {
  reducer: import_reducer,
  actions: actions_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  selectors: selectors_namespaceObject,
  resolvers: resolvers_namespaceObject
});
const IMPORT_STORE_NAME = STORE_NAME;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ SETTINGS_STORE_NAME; });

// NAMESPACE OBJECT: ./packages/data/build-module/settings/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getSettingsGroupNames", function() { return getSettingsGroupNames; });
__webpack_require__.d(selectors_namespaceObject, "getSettings", function() { return getSettings; });
__webpack_require__.d(selectors_namespaceObject, "getDirtyKeys", function() { return getDirtyKeys; });
__webpack_require__.d(selectors_namespaceObject, "getIsDirty", function() { return getIsDirty; });
__webpack_require__.d(selectors_namespaceObject, "getSettingsForGroup", function() { return getSettingsForGroup; });
__webpack_require__.d(selectors_namespaceObject, "isUpdateSettingsRequesting", function() { return isUpdateSettingsRequesting; });
__webpack_require__.d(selectors_namespaceObject, "getSetting", function() { return getSetting; });
__webpack_require__.d(selectors_namespaceObject, "getLastSettingsErrorForGroup", function() { return getLastSettingsErrorForGroup; });
__webpack_require__.d(selectors_namespaceObject, "getSettingsError", function() { return getSettingsError; });

// NAMESPACE OBJECT: ./packages/data/build-module/settings/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "updateSettingsForGroup", function() { return updateSettingsForGroup; });
__webpack_require__.d(actions_namespaceObject, "updateErrorForGroup", function() { return updateErrorForGroup; });
__webpack_require__.d(actions_namespaceObject, "setIsRequesting", function() { return setIsRequesting; });
__webpack_require__.d(actions_namespaceObject, "clearIsDirty", function() { return clearIsDirty; });
__webpack_require__.d(actions_namespaceObject, "updateAndPersistSettingsForGroup", function() { return updateAndPersistSettingsForGroup; });
__webpack_require__.d(actions_namespaceObject, "persistSettingsForGroup", function() { return persistSettingsForGroup; });
__webpack_require__.d(actions_namespaceObject, "clearSettings", function() { return clearSettings; });

// NAMESPACE OBJECT: ./packages/data/build-module/settings/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getSettings", function() { return resolvers_getSettings; });
__webpack_require__.d(resolvers_namespaceObject, "getSettingsForGroup", function() { return resolvers_getSettingsForGroup; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(7);

// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__(10);

// EXTERNAL MODULE: ./packages/data/build-module/settings/constants.js
var constants = __webpack_require__(48);

// EXTERNAL MODULE: ./packages/data/build-module/utils.js
var utils = __webpack_require__(29);

// CONCATENATED MODULE: ./packages/data/build-module/settings/selectors.js
/**
 * Internal dependencies
 */

const getSettingsGroupNames = state => {
  const groupNames = new Set(Object.keys(state).map(resourceName => {
    return Object(utils["b" /* getResourcePrefix */])(resourceName);
  }));
  return [...groupNames];
};
const getSettings = (state, group) => {
  const settings = {};
  const settingIds = state[group] && state[group].data || [];

  if (settingIds.length === 0) {
    return settings;
  }

  settingIds.forEach(id => {
    settings[id] = state[Object(utils["a" /* getResourceName */])(group, id)].data;
  });
  return settings;
};
const getDirtyKeys = (state, group) => {
  return state[group].dirty || [];
};
const getIsDirty = (state, group, keys = []) => {
  const dirtyMap = getDirtyKeys(state, group); // if empty array bail

  if (dirtyMap.length === 0) {
    return false;
  } // if at least one of the keys is in the dirty map then the state is dirty
  // meaning it hasn't been persisted.


  return keys.some(key => dirtyMap.includes(key));
};
const getSettingsForGroup = (state, group, keys) => {
  const allSettings = getSettings(state, group);
  return keys.reduce((accumulator, key) => {
    accumulator[key] = allSettings[key] || {};
    return accumulator;
  }, {});
};
const isUpdateSettingsRequesting = (state, group) => {
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

function getSetting(state, group, name, fallback = false, filter = val => val) {
  const resourceName = Object(utils["a" /* getResourceName */])(group, name);
  const value = state[resourceName] && state[resourceName].data || fallback;
  return filter(value, fallback);
}
const getLastSettingsErrorForGroup = (state, group) => {
  const settingsIds = state[group].data;

  if (settingsIds.length === 0) {
    return state[group].error;
  }

  return [...settingsIds].pop().error;
};
const getSettingsError = (state, group, id) => {
  if (!id) {
    return state[group] && state[group].error || false;
  }

  return state[Object(utils["a" /* getResourceName */])(group, id)].error || false;
};
//# sourceMappingURL=selectors.js.map
// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);

// EXTERNAL MODULE: ./packages/data/build-module/constants.js
var build_module_constants = __webpack_require__(14);

// CONCATENATED MODULE: ./packages/data/build-module/settings/action-types.js
const TYPES = {
  UPDATE_SETTINGS_FOR_GROUP: 'UPDATE_SETTINGS_FOR_GROUP',
  UPDATE_ERROR_FOR_GROUP: 'UPDATE_ERROR_FOR_GROUP',
  CLEAR_SETTINGS: 'CLEAR_SETTINGS',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING',
  CLEAR_IS_DIRTY: 'CLEAR_IS_DIRTY'
};
/* harmony default export */ var action_types = (TYPES);
//# sourceMappingURL=action-types.js.map
// CONCATENATED MODULE: ./packages/data/build-module/settings/actions.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



 // Can be removed in WP 5.9, wp.data is supported in >5.7.

const resolveSelect = external_wp_data_["controls"] && external_wp_data_["controls"].resolveSelect ? external_wp_data_["controls"].resolveSelect : external_wp_dataControls_["select"];
function updateSettingsForGroup(group, data, time = new Date()) {
  return {
    type: action_types.UPDATE_SETTINGS_FOR_GROUP,
    group,
    data,
    time
  };
}
function updateErrorForGroup(group, data, error, time = new Date()) {
  return {
    type: action_types.UPDATE_ERROR_FOR_GROUP,
    group,
    data,
    error,
    time
  };
}
function setIsRequesting(group, isRequesting) {
  return {
    type: action_types.SET_IS_REQUESTING,
    group,
    isRequesting
  };
}
function clearIsDirty(group) {
  return {
    type: action_types.CLEAR_IS_DIRTY,
    group
  };
} // allows updating and persisting immediately in one action.

function* updateAndPersistSettingsForGroup(group, data) {
  yield updateSettingsForGroup(group, data);
  yield* persistSettingsForGroup(group);
} // this would replace setSettingsForGroup

function* persistSettingsForGroup(group) {
  // first dispatch the is persisting action
  yield setIsRequesting(group, true); // get all dirty keys with select control

  const dirtyKeys = yield resolveSelect(constants["a" /* STORE_NAME */], 'getDirtyKeys', group); // if there is nothing dirty, bail

  if (dirtyKeys.length === 0) {
    yield setIsRequesting(group, false);
    return;
  } // get data slice for keys


  const dirtyData = yield resolveSelect(constants["a" /* STORE_NAME */], 'getSettingsForGroup', group, dirtyKeys);
  const url = `${build_module_constants["g" /* NAMESPACE */]}/settings/${group}/batch`;
  const update = dirtyKeys.reduce((updates, key) => {
    const u = Object.keys(dirtyData[key]).map(k => {
      return {
        id: k,
        value: dirtyData[key][k]
      };
    });
    return Object(external_lodash_["concat"])(updates, u);
  }, []);

  try {
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'POST',
      data: {
        update
      }
    });
    yield setIsRequesting(group, false);

    if (!results) {
      throw new Error(Object(external_wp_i18n_["__"])('There was a problem updating your settings.', 'woocommerce-admin'));
    } // remove dirtyKeys from map - note we're only doing this if there is no error.


    yield clearIsDirty(group);
  } catch (e) {
    yield updateErrorForGroup(group, null, e);
    yield setIsRequesting(group, false);
    throw e;
  }
}
function clearSettings() {
  return {
    type: action_types.CLEAR_SETTINGS
  };
}
//# sourceMappingURL=actions.js.map
// CONCATENATED MODULE: ./packages/data/build-module/settings/resolvers.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



 // Can be removed in WP 5.9.

const dispatch = external_wp_data_["controls"] && external_wp_data_["controls"].dispatch ? external_wp_data_["controls"].dispatch : external_wp_dataControls_["dispatch"];

function settingsToSettingsResource(settings) {
  return settings.reduce((resource, setting) => {
    resource[setting.id] = setting.value;
    return resource;
  }, {});
}

function* resolvers_getSettings(group) {
  yield dispatch(constants["a" /* STORE_NAME */], 'setIsRequesting', group, true);

  try {
    const url = build_module_constants["g" /* NAMESPACE */] + '/settings/' + group;
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'GET'
    });
    const resource = settingsToSettingsResource(results);
    return updateSettingsForGroup(group, {
      [group]: resource
    });
  } catch (error) {
    return updateErrorForGroup(group, null, error.message);
  }
}
function* resolvers_getSettingsForGroup(group) {
  return resolvers_getSettings(group);
}
//# sourceMappingURL=resolvers.js.map
// CONCATENATED MODULE: ./packages/data/build-module/settings/reducer.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




const updateGroupDataInNewState = (newState, {
  group,
  groupIds,
  data,
  time,
  error
}) => {
  groupIds.forEach(id => {
    newState[Object(utils["a" /* getResourceName */])(group, id)] = {
      data: data[id],
      lastReceived: time,
      error
    };
  });
  return newState;
};

const receiveSettings = (state = {}, {
  type,
  group,
  data,
  error,
  time,
  isRequesting
}) => {
  const newState = {};

  switch (type) {
    case action_types.SET_IS_REQUESTING:
      state = { ...state,
        [group]: { ...state[group],
          isRequesting
        }
      };
      break;

    case action_types.CLEAR_IS_DIRTY:
      state = { ...state,
        [group]: { ...state[group],
          dirty: []
        }
      };
      break;

    case action_types.UPDATE_SETTINGS_FOR_GROUP:
    case action_types.UPDATE_ERROR_FOR_GROUP:
      const groupIds = data ? Object.keys(data) : [];

      if (data === null) {
        state = { ...state,
          [group]: {
            data: state[group] ? state[group].data : [],
            error,
            lastReceived: time
          }
        };
      } else {
        state = { ...state,
          [group]: {
            data: state[group] && state[group].data ? [...state[group].data, ...groupIds] : groupIds,
            error,
            lastReceived: time,
            isRequesting: false,
            dirty: state[group] && state[group].dirty ? Object(external_lodash_["union"])(state[group].dirty, groupIds) : groupIds
          },
          ...updateGroupDataInNewState(newState, {
            group,
            groupIds,
            data,
            time,
            error
          })
        };
      }

      break;

    case action_types.CLEAR_SETTINGS:
      state = {};
  }

  return state;
};

/* harmony default export */ var reducer = (receiveSettings);
//# sourceMappingURL=reducer.js.map
// CONCATENATED MODULE: ./packages/data/build-module/settings/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






Object(external_wp_data_["registerStore"])(constants["a" /* STORE_NAME */], {
  reducer: reducer,
  actions: actions_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  selectors: selectors_namespaceObject,
  resolvers: resolvers_namespaceObject
});
const SETTINGS_STORE_NAME = constants["a" /* STORE_NAME */];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ PLUGINS_STORE_NAME; });

// NAMESPACE OBJECT: ./packages/data/build-module/plugins/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getActivePlugins", function() { return getActivePlugins; });
__webpack_require__.d(selectors_namespaceObject, "getInstalledPlugins", function() { return getInstalledPlugins; });
__webpack_require__.d(selectors_namespaceObject, "isPluginsRequesting", function() { return isPluginsRequesting; });
__webpack_require__.d(selectors_namespaceObject, "getPluginsError", function() { return getPluginsError; });
__webpack_require__.d(selectors_namespaceObject, "isJetpackConnected", function() { return isJetpackConnected; });
__webpack_require__.d(selectors_namespaceObject, "getJetpackConnectUrl", function() { return getJetpackConnectUrl; });
__webpack_require__.d(selectors_namespaceObject, "getPluginInstallState", function() { return getPluginInstallState; });
__webpack_require__.d(selectors_namespaceObject, "getPaypalOnboardingStatus", function() { return getPaypalOnboardingStatus; });
__webpack_require__.d(selectors_namespaceObject, "getRecommendedPlugins", function() { return getRecommendedPlugins; });

// NAMESPACE OBJECT: ./packages/data/build-module/plugins/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "formatErrors", function() { return formatErrors; });
__webpack_require__.d(actions_namespaceObject, "updateActivePlugins", function() { return updateActivePlugins; });
__webpack_require__.d(actions_namespaceObject, "updateInstalledPlugins", function() { return updateInstalledPlugins; });
__webpack_require__.d(actions_namespaceObject, "setIsRequesting", function() { return setIsRequesting; });
__webpack_require__.d(actions_namespaceObject, "setError", function() { return setError; });
__webpack_require__.d(actions_namespaceObject, "updateIsJetpackConnected", function() { return updateIsJetpackConnected; });
__webpack_require__.d(actions_namespaceObject, "updateJetpackConnectUrl", function() { return updateJetpackConnectUrl; });
__webpack_require__.d(actions_namespaceObject, "installPlugins", function() { return installPlugins; });
__webpack_require__.d(actions_namespaceObject, "activatePlugins", function() { return activatePlugins; });
__webpack_require__.d(actions_namespaceObject, "installAndActivatePlugins", function() { return installAndActivatePlugins; });
__webpack_require__.d(actions_namespaceObject, "createErrorNotice", function() { return createErrorNotice; });
__webpack_require__.d(actions_namespaceObject, "connectToJetpack", function() { return connectToJetpack; });
__webpack_require__.d(actions_namespaceObject, "installJetpackAndConnect", function() { return installJetpackAndConnect; });
__webpack_require__.d(actions_namespaceObject, "connectToJetpackWithFailureRedirect", function() { return connectToJetpackWithFailureRedirect; });
__webpack_require__.d(actions_namespaceObject, "setPaypalOnboardingStatus", function() { return setPaypalOnboardingStatus; });
__webpack_require__.d(actions_namespaceObject, "setRecommendedPlugins", function() { return setRecommendedPlugins; });

// NAMESPACE OBJECT: ./packages/data/build-module/plugins/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getActivePlugins", function() { return resolvers_getActivePlugins; });
__webpack_require__.d(resolvers_namespaceObject, "getInstalledPlugins", function() { return resolvers_getInstalledPlugins; });
__webpack_require__.d(resolvers_namespaceObject, "isJetpackConnected", function() { return resolvers_isJetpackConnected; });
__webpack_require__.d(resolvers_namespaceObject, "getJetpackConnectUrl", function() { return resolvers_getJetpackConnectUrl; });
__webpack_require__.d(resolvers_namespaceObject, "getPaypalOnboardingStatus", function() { return resolvers_getPaypalOnboardingStatus; });
__webpack_require__.d(resolvers_namespaceObject, "getRecommendedPlugins", function() { return resolvers_getRecommendedPlugins; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(7);

// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__(10);

// EXTERNAL MODULE: ./packages/data/build-module/plugins/constants.js
var constants = __webpack_require__(35);

// CONCATENATED MODULE: ./packages/data/build-module/plugins/selectors.js
/**
 * Internal dependencies
 */
const getActivePlugins = state => {
  return state.active || [];
};
const getInstalledPlugins = state => {
  return state.installed || [];
};
const isPluginsRequesting = (state, selector) => {
  return state.requesting[selector] || false;
};
const getPluginsError = (state, selector) => {
  return state.errors[selector] || false;
};
const isJetpackConnected = state => state.jetpackConnection;
const getJetpackConnectUrl = (state, query) => {
  return state.jetpackConnectUrls[query.redirect_url];
};
const getPluginInstallState = (state, plugin) => {
  if (state.active.includes(plugin)) {
    return 'activated';
  } else if (state.installed.includes(plugin)) {
    return 'installed';
  }

  return 'unavailable';
};
const getPaypalOnboardingStatus = state => state.paypalOnboardingStatus;
const getRecommendedPlugins = (state, type) => {
  return state.recommended[type];
}; // Types
//# sourceMappingURL=selectors.js.map
// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// CONCATENATED MODULE: ./packages/data/build-module/plugins/action-types.js
let ACTION_TYPES;

(function (ACTION_TYPES) {
  ACTION_TYPES["UPDATE_ACTIVE_PLUGINS"] = "UPDATE_ACTIVE_PLUGINS";
  ACTION_TYPES["UPDATE_INSTALLED_PLUGINS"] = "UPDATE_INSTALLED_PLUGINS";
  ACTION_TYPES["SET_IS_REQUESTING"] = "SET_IS_REQUESTING";
  ACTION_TYPES["SET_ERROR"] = "SET_ERROR";
  ACTION_TYPES["UPDATE_JETPACK_CONNECTION"] = "UPDATE_JETPACK_CONNECTION";
  ACTION_TYPES["UPDATE_JETPACK_CONNECT_URL"] = "UPDATE_JETPACK_CONNECT_URL";
  ACTION_TYPES["SET_PAYPAL_ONBOARDING_STATUS"] = "SET_PAYPAL_ONBOARDING_STATUS";
  ACTION_TYPES["SET_RECOMMENDED_PLUGINS"] = "SET_RECOMMENDED_PLUGINS";
})(ACTION_TYPES || (ACTION_TYPES = {}));
//# sourceMappingURL=action-types.js.map
// EXTERNAL MODULE: ./packages/data/build-module/constants.js
var build_module_constants = __webpack_require__(14);

// CONCATENATED MODULE: ./packages/data/build-module/plugins/actions.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




// Can be removed in WP 5.9, wp.data is supported in >5.7.
const dispatch = external_wp_data_["controls"] && external_wp_data_["controls"].dispatch ? external_wp_data_["controls"].dispatch : external_wp_dataControls_["dispatch"];
const resolveSelect = external_wp_data_["controls"] && external_wp_data_["controls"].resolveSelect ? external_wp_data_["controls"].resolveSelect : external_wp_dataControls_["select"];

function isWPError(error) {
  return error.errors !== undefined;
}

function formatErrors(response) {
  if (isWPError(response)) {
    // Replace the slug with a plugin name if a constant exists.
    Object.keys(response.errors).forEach(plugin => {
      response.errors[plugin] = response.errors[plugin].map(pluginError => {
        return constants["c" /* pluginNames */][plugin] ? pluginError.replace(`\`${plugin}\``, constants["c" /* pluginNames */][plugin]) : pluginError;
      });
    });
  }

  return response;
}

const formatErrorMessage = (pluginErrors, actionType = 'install') => {
  return Object(external_wp_i18n_["sprintf"])(
  /* translators: %(actionType): install or activate (the plugin). %(pluginName): a plugin slug (e.g. woocommerce-services). %(error): a single error message or in plural a comma separated error message list.*/
  Object(external_wp_i18n_["_n"])('Could not %(actionType)s %(pluginName)s plugin, %(error)s', 'Could not %(actionType)s the following plugins: %(pluginName)s with these Errors: %(error)s', Object.keys(pluginErrors).length, 'woocommerce-admin'), {
    actionType,
    pluginName: Object.keys(pluginErrors).join(', '),
    error: Object.values(pluginErrors).join(', \n')
  });
};

function updateActivePlugins(active, replace = false) {
  return {
    type: ACTION_TYPES.UPDATE_ACTIVE_PLUGINS,
    active,
    replace
  };
}
function updateInstalledPlugins(installed, replace = false) {
  return {
    type: ACTION_TYPES.UPDATE_INSTALLED_PLUGINS,
    installed,
    replace
  };
}
function setIsRequesting(selector, isRequesting) {
  return {
    type: ACTION_TYPES.SET_IS_REQUESTING,
    selector,
    isRequesting
  };
}
function setError(selector, error) {
  return {
    type: ACTION_TYPES.SET_ERROR,
    selector,
    error
  };
}
function updateIsJetpackConnected(jetpackConnection) {
  return {
    type: ACTION_TYPES.UPDATE_JETPACK_CONNECTION,
    jetpackConnection
  };
}
function updateJetpackConnectUrl(redirectUrl, jetpackConnectUrl) {
  return {
    type: ACTION_TYPES.UPDATE_JETPACK_CONNECT_URL,
    jetpackConnectUrl,
    redirectUrl
  };
}
function* installPlugins(plugins) {
  yield setIsRequesting('installPlugins', true);

  try {
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: `${build_module_constants["k" /* WC_ADMIN_NAMESPACE */]}/plugins/install`,
      method: 'POST',
      data: {
        plugins: plugins.join(',')
      }
    });

    if (results.data.installed.length) {
      yield updateInstalledPlugins(results.data.installed);
    }

    if (Object.keys(results.errors.errors).length) {
      throw results.errors.errors;
    }

    yield setIsRequesting('installPlugins', false);
    return results;
  } catch (error) {
    yield setError('installPlugins', error);
    throw new Error(formatErrorMessage(error));
  }
}
function* activatePlugins(plugins) {
  yield setIsRequesting('activatePlugins', true);

  try {
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: `${build_module_constants["k" /* WC_ADMIN_NAMESPACE */]}/plugins/activate`,
      method: 'POST',
      data: {
        plugins: plugins.join(',')
      }
    });

    if (results.data.activated.length) {
      yield updateActivePlugins(results.data.activated);
    }

    if (Object.keys(results.errors.errors).length) {
      throw results.errors.errors;
    }

    yield setIsRequesting('activatePlugins', false);
    return results;
  } catch (error) {
    yield setError('activatePlugins', error);
    throw new Error(formatErrors(error));
  }
}
function* installAndActivatePlugins(plugins) {
  try {
    yield dispatch(constants["b" /* STORE_NAME */], 'installPlugins', plugins);
    const activations = yield dispatch(constants["b" /* STORE_NAME */], 'activatePlugins', plugins);
    return activations;
  } catch (error) {
    throw error;
  }
}
const createErrorNotice = errorMessage => {
  return dispatch('core/notices', 'createNotice', 'error', errorMessage);
};
function* connectToJetpack(getAdminLink) {
  const url = yield resolveSelect(constants["b" /* STORE_NAME */], 'getJetpackConnectUrl', {
    redirect_url: getAdminLink('admin.php?page=wc-admin')
  });
  const error = yield resolveSelect(constants["b" /* STORE_NAME */], 'getPluginsError', 'getJetpackConnectUrl');

  if (error) {
    throw new Error(error);
  } else {
    return url;
  }
}
function* installJetpackAndConnect(errorAction, getAdminLink) {
  try {
    yield dispatch(constants["b" /* STORE_NAME */], 'installPlugins', ['jetpack']);
    yield dispatch(constants["b" /* STORE_NAME */], 'activatePlugins', ['jetpack']);
    const url = yield dispatch(constants["b" /* STORE_NAME */], 'connectToJetpack', getAdminLink);
    window.location.href = url;
  } catch (error) {
    yield errorAction(error.message);
  }
}
function* connectToJetpackWithFailureRedirect(failureRedirect, errorAction, getAdminLink) {
  try {
    const url = yield dispatch(constants["b" /* STORE_NAME */], 'connectToJetpack', getAdminLink);
    window.location.href = url;
  } catch (error) {
    yield errorAction(error.message);
    window.location.href = failureRedirect;
  }
}
function setPaypalOnboardingStatus(status) {
  return {
    type: ACTION_TYPES.SET_PAYPAL_ONBOARDING_STATUS,
    paypalOnboardingStatus: status
  };
}
function setRecommendedPlugins(type, plugins) {
  return {
    type: ACTION_TYPES.SET_RECOMMENDED_PLUGINS,
    recommendedType: type,
    plugins
  };
}
//# sourceMappingURL=actions.js.map
// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__(16);

// EXTERNAL MODULE: ./packages/data/build-module/options/index.js + 6 modules
var build_module_options = __webpack_require__(137);

// CONCATENATED MODULE: ./packages/data/build-module/plugins/resolvers.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */





// Can be removed in WP 5.9, wp.data is supported in >5.7.
const resolvers_resolveSelect = external_wp_data_["controls"] && external_wp_data_["controls"].resolveSelect ? external_wp_data_["controls"].resolveSelect : external_wp_dataControls_["select"];
function* resolvers_getActivePlugins() {
  yield setIsRequesting('getActivePlugins', true);

  try {
    const url = build_module_constants["k" /* WC_ADMIN_NAMESPACE */] + '/plugins/active';
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'GET'
    });
    yield updateActivePlugins(results.plugins, true);
  } catch (error) {
    yield setError('getActivePlugins', error);
  }
}
function* resolvers_getInstalledPlugins() {
  yield setIsRequesting('getInstalledPlugins', true);

  try {
    const url = build_module_constants["k" /* WC_ADMIN_NAMESPACE */] + '/plugins/installed';
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'GET'
    });
    yield updateInstalledPlugins(results.plugins, true);
  } catch (error) {
    yield setError('getInstalledPlugins', error);
  }
}
function* resolvers_isJetpackConnected() {
  yield setIsRequesting('isJetpackConnected', true);

  try {
    const url = build_module_constants["c" /* JETPACK_NAMESPACE */] + '/connection';
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'GET'
    });
    yield updateIsJetpackConnected(results.isActive);
  } catch (error) {
    yield setError('isJetpackConnected', error);
  }

  yield setIsRequesting('isJetpackConnected', false);
}
function* resolvers_getJetpackConnectUrl(query) {
  yield setIsRequesting('getJetpackConnectUrl', true);

  try {
    const url = Object(external_wp_url_["addQueryArgs"])(build_module_constants["k" /* WC_ADMIN_NAMESPACE */] + '/plugins/connect-jetpack', query);
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'GET'
    });
    yield updateJetpackConnectUrl(query.redirect_url, results.connectAction);
  } catch (error) {
    yield setError('getJetpackConnectUrl', error);
  }

  yield setIsRequesting('getJetpackConnectUrl', false);
}

function* setOnboardingStatusWithOptions() {
  const options = yield resolvers_resolveSelect(build_module_options["a" /* OPTIONS_STORE_NAME */], 'getOption', 'woocommerce-ppcp-settings');
  const onboarded = options.merchant_email_production && options.merchant_id_production && options.client_id_production && options.client_secret_production;
  yield setPaypalOnboardingStatus({
    production: {
      state: onboarded ? 'onboarded' : 'unknown',
      onboarded: onboarded ? true : false
    }
  });
}

function* resolvers_getPaypalOnboardingStatus() {
  yield setIsRequesting('getPaypalOnboardingStatus', true);
  const errorData = yield resolvers_resolveSelect(constants["b" /* STORE_NAME */], 'getPluginsError', 'getPaypalOnboardingStatus');

  if (errorData && errorData.data && errorData.data.status === 404) {
    // The get-status request doesn't exist fall back to using options.
    yield setOnboardingStatusWithOptions();
  } else {
    try {
      const url = constants["a" /* PAYPAL_NAMESPACE */] + '/onboarding/get-status';
      const results = yield Object(external_wp_dataControls_["apiFetch"])({
        path: url,
        method: 'GET'
      });
      yield setPaypalOnboardingStatus(results);
    } catch (error) {
      yield setOnboardingStatusWithOptions();
      yield setError('getPaypalOnboardingStatus', error);
    }
  }

  yield setIsRequesting('getPaypalOnboardingStatus', false);
}
const SUPPORTED_TYPES = ['payments'];
function* resolvers_getRecommendedPlugins(type) {
  if (!SUPPORTED_TYPES.includes(type)) {
    return [];
  }

  yield setIsRequesting('getRecommendedPlugins', true);

  try {
    const url = build_module_constants["k" /* WC_ADMIN_NAMESPACE */] + '/plugins/recommended-payment-plugins';
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'GET'
    });
    yield setRecommendedPlugins(type, results);
  } catch (error) {
    yield setError('getRecommendedPlugins', error);
  }

  yield setIsRequesting('getRecommendedPlugins', false);
}
//# sourceMappingURL=resolvers.js.map
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);

// CONCATENATED MODULE: ./packages/data/build-module/plugins/reducer.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



const reducer_plugins = (state = {
  active: [],
  installed: [],
  requesting: {},
  errors: {},
  jetpackConnectUrls: {},
  recommended: {}
}, payload) => {
  if (payload && 'type' in payload) {
    switch (payload.type) {
      case ACTION_TYPES.UPDATE_ACTIVE_PLUGINS:
        state = { ...state,
          active: payload.replace ? payload.active : Object(external_lodash_["concat"])(state.active, payload.active),
          requesting: { ...state.requesting,
            getActivePlugins: false,
            activatePlugins: false
          },
          errors: { ...state.errors,
            getActivePlugins: false,
            activatePlugins: false
          }
        };
        break;

      case ACTION_TYPES.UPDATE_INSTALLED_PLUGINS:
        state = { ...state,
          installed: payload.replace ? payload.installed : Object(external_lodash_["concat"])(state.installed, payload.installed),
          requesting: { ...state.requesting,
            getInstalledPlugins: false,
            installPlugins: false
          },
          errors: { ...state.errors,
            getInstalledPlugins: false,
            installPlugin: false
          }
        };
        break;

      case ACTION_TYPES.SET_IS_REQUESTING:
        state = { ...state,
          requesting: { ...state.requesting,
            [payload.selector]: payload.isRequesting
          }
        };
        break;

      case ACTION_TYPES.SET_ERROR:
        state = { ...state,
          requesting: { ...state.requesting,
            [payload.selector]: false
          },
          errors: { ...state.errors,
            [payload.selector]: payload.error
          }
        };
        break;

      case ACTION_TYPES.UPDATE_JETPACK_CONNECTION:
        state = { ...state,
          jetpackConnection: payload.jetpackConnection
        };
        break;

      case ACTION_TYPES.UPDATE_JETPACK_CONNECT_URL:
        state = { ...state,
          jetpackConnectUrls: { ...state.jetpackConnectUrls,
            [payload.redirectUrl]: payload.jetpackConnectUrl
          }
        };
        break;

      case ACTION_TYPES.SET_PAYPAL_ONBOARDING_STATUS:
        state = { ...state,
          paypalOnboardingStatus: payload.paypalOnboardingStatus
        };
        break;

      case ACTION_TYPES.SET_RECOMMENDED_PLUGINS:
        state = { ...state,
          recommended: { ...state.recommended,
            [payload.recommendedType]: payload.plugins
          }
        };
        break;
    }
  }

  return state;
};

/* harmony default export */ var reducer = (reducer_plugins);
//# sourceMappingURL=reducer.js.map
// CONCATENATED MODULE: ./packages/data/build-module/plugins/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






Object(external_wp_data_["registerStore"])(constants["b" /* STORE_NAME */], {
  reducer: reducer,
  actions: actions_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  selectors: selectors_namespaceObject,
  resolvers: resolvers_namespaceObject
});
const PLUGINS_STORE_NAME = constants["b" /* STORE_NAME */];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ REPORTS_STORE_NAME; });

// NAMESPACE OBJECT: ./packages/data/build-module/reports/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getReportItemsError", function() { return getReportItemsError; });
__webpack_require__.d(selectors_namespaceObject, "getReportItems", function() { return getReportItems; });
__webpack_require__.d(selectors_namespaceObject, "getReportStats", function() { return getReportStats; });
__webpack_require__.d(selectors_namespaceObject, "getReportStatsError", function() { return getReportStatsError; });

// NAMESPACE OBJECT: ./packages/data/build-module/reports/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "setReportItemsError", function() { return setReportItemsError; });
__webpack_require__.d(actions_namespaceObject, "setReportItems", function() { return setReportItems; });
__webpack_require__.d(actions_namespaceObject, "setReportStats", function() { return setReportStats; });
__webpack_require__.d(actions_namespaceObject, "setReportStatsError", function() { return setReportStatsError; });

// NAMESPACE OBJECT: ./packages/data/build-module/reports/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getReportItems", function() { return resolvers_getReportItems; });
__webpack_require__.d(resolvers_namespaceObject, "getReportStats", function() { return resolvers_getReportStats; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(7);

// EXTERNAL MODULE: ./packages/data/build-module/reports/constants.js
var constants = __webpack_require__(89);

// EXTERNAL MODULE: ./packages/data/build-module/utils.js
var utils = __webpack_require__(29);

// CONCATENATED MODULE: ./packages/data/build-module/reports/selectors.js
/**
 * Internal dependencies
 */

const EMPTY_OBJECT = {};
const getReportItemsError = (state, endpoint, query) => {
  const resourceName = Object(utils["a" /* getResourceName */])(endpoint, query);
  return state.itemErrors[resourceName] || false;
};
const getReportItems = (state, endpoint, query) => {
  const resourceName = Object(utils["a" /* getResourceName */])(endpoint, query);
  return state.items[resourceName] || EMPTY_OBJECT;
};
const getReportStats = (state, endpoint, query) => {
  const resourceName = Object(utils["a" /* getResourceName */])(endpoint, query);
  return state.stats[resourceName] || EMPTY_OBJECT;
};
const getReportStatsError = (state, endpoint, query) => {
  const resourceName = Object(utils["a" /* getResourceName */])(endpoint, query);
  return state.statErrors[resourceName] || false;
};
//# sourceMappingURL=selectors.js.map
// CONCATENATED MODULE: ./packages/data/build-module/reports/action-types.js
const TYPES = {
  SET_ITEM_ERROR: 'SET_ITEM_ERROR',
  SET_STAT_ERROR: 'SET_STAT_ERROR',
  SET_REPORT_ITEMS: 'SET_REPORT_ITEMS',
  SET_REPORT_STATS: 'SET_REPORT_STATS'
};
/* harmony default export */ var action_types = (TYPES);
//# sourceMappingURL=action-types.js.map
// CONCATENATED MODULE: ./packages/data/build-module/reports/actions.js
/**
 * Internal dependencies
 */


function setReportItemsError(endpoint, query, error) {
  const resourceName = Object(utils["a" /* getResourceName */])(endpoint, query);
  return {
    type: action_types.SET_ITEM_ERROR,
    resourceName,
    error
  };
}
function setReportItems(endpoint, query, items) {
  const resourceName = Object(utils["a" /* getResourceName */])(endpoint, query);
  return {
    type: action_types.SET_REPORT_ITEMS,
    resourceName,
    items
  };
}
function setReportStats(endpoint, query, stats) {
  const resourceName = Object(utils["a" /* getResourceName */])(endpoint, query);
  return {
    type: action_types.SET_REPORT_STATS,
    resourceName,
    stats
  };
}
function setReportStatsError(endpoint, query, error) {
  const resourceName = Object(utils["a" /* getResourceName */])(endpoint, query);
  return {
    type: action_types.SET_STAT_ERROR,
    resourceName,
    error
  };
}
//# sourceMappingURL=actions.js.map
// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__(16);

// EXTERNAL MODULE: ./packages/data/build-module/controls.js
var controls = __webpack_require__(41);

// EXTERNAL MODULE: ./packages/data/build-module/constants.js
var build_module_constants = __webpack_require__(14);

// CONCATENATED MODULE: ./packages/data/build-module/reports/resolvers.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




function* resolvers_getReportItems(endpoint, query) {
  const fetchArgs = {
    parse: false,
    path: Object(external_wp_url_["addQueryArgs"])(`${build_module_constants["g" /* NAMESPACE */]}/reports/${endpoint}`, query)
  };

  try {
    const response = yield Object(controls["b" /* fetchWithHeaders */])(fetchArgs);
    const data = response.data;
    const totalResults = parseInt(response.headers.get('x-wp-total'), 10);
    const totalPages = parseInt(response.headers.get('x-wp-totalpages'), 10);
    yield setReportItems(endpoint, query, {
      data,
      totalResults,
      totalPages
    });
  } catch (error) {
    yield setReportItemsError(endpoint, query, error);
  }
}
function* resolvers_getReportStats(endpoint, query) {
  const fetchArgs = {
    parse: false,
    path: Object(external_wp_url_["addQueryArgs"])(`${build_module_constants["g" /* NAMESPACE */]}/reports/${endpoint}/stats`, query)
  };

  try {
    const response = yield Object(controls["b" /* fetchWithHeaders */])(fetchArgs);
    const data = response.data;
    const totalResults = parseInt(response.headers.get('x-wp-total'), 10);
    const totalPages = parseInt(response.headers.get('x-wp-totalpages'), 10);
    yield setReportStats(endpoint, query, {
      data,
      totalResults,
      totalPages
    });
  } catch (error) {
    yield setReportStatsError(endpoint, query, error);
  }
}
//# sourceMappingURL=resolvers.js.map
// CONCATENATED MODULE: ./packages/data/build-module/reports/reducer.js
/**
 * Internal dependencies
 */


const reports = (state = {
  itemErrors: {},
  items: {},
  statErrors: {},
  stats: {}
}, {
  type,
  items,
  stats,
  error,
  resourceName
}) => {
  switch (type) {
    case action_types.SET_REPORT_ITEMS:
      return { ...state,
        items: { ...state.items,
          [resourceName]: items
        }
      };

    case action_types.SET_REPORT_STATS:
      return { ...state,
        stats: { ...state.stats,
          [resourceName]: stats
        }
      };

    case action_types.SET_ITEM_ERROR:
      return { ...state,
        itemErrors: { ...state.itemErrors,
          [resourceName]: error
        }
      };

    case action_types.SET_STAT_ERROR:
      return { ...state,
        statErrors: { ...state.statErrors,
          [resourceName]: error
        }
      };

    default:
      return state;
  }
};

/* harmony default export */ var reducer = (reports);
//# sourceMappingURL=reducer.js.map
// CONCATENATED MODULE: ./packages/data/build-module/reports/index.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */







Object(external_wp_data_["registerStore"])(constants["a" /* STORE_NAME */], {
  reducer: reducer,
  actions: actions_namespaceObject,
  controls: controls["a" /* default */],
  selectors: selectors_namespaceObject,
  resolvers: resolvers_namespaceObject
});
const REPORTS_STORE_NAME = constants["a" /* STORE_NAME */];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ITEMS_STORE_NAME; });

// NAMESPACE OBJECT: ./packages/data/build-module/items/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getItems", function() { return getItems; });
__webpack_require__.d(selectors_namespaceObject, "getItemsTotalCount", function() { return getItemsTotalCount; });
__webpack_require__.d(selectors_namespaceObject, "getItemsError", function() { return getItemsError; });

// NAMESPACE OBJECT: ./packages/data/build-module/items/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "setItem", function() { return setItem; });
__webpack_require__.d(actions_namespaceObject, "setItems", function() { return setItems; });
__webpack_require__.d(actions_namespaceObject, "setItemsTotalCount", function() { return setItemsTotalCount; });
__webpack_require__.d(actions_namespaceObject, "setError", function() { return setError; });
__webpack_require__.d(actions_namespaceObject, "updateProductStock", function() { return updateProductStock; });
__webpack_require__.d(actions_namespaceObject, "createProductFromTemplate", function() { return createProductFromTemplate; });

// NAMESPACE OBJECT: ./packages/data/build-module/items/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getItems", function() { return resolvers_getItems; });
__webpack_require__.d(resolvers_namespaceObject, "getReviewsTotalCount", function() { return getReviewsTotalCount; });
__webpack_require__.d(resolvers_namespaceObject, "getItemsTotalCount", function() { return resolvers_getItemsTotalCount; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(7);

// EXTERNAL MODULE: ./packages/data/build-module/items/constants.js
var constants = __webpack_require__(104);

// EXTERNAL MODULE: ./packages/data/build-module/utils.js
var utils = __webpack_require__(29);

// EXTERNAL MODULE: ./packages/data/build-module/items/utils.js
var items_utils = __webpack_require__(88);

// CONCATENATED MODULE: ./packages/data/build-module/items/selectors.js
/**
 * Internal dependencies
 */


const getItems = (state, itemType, query) => {
  const resourceName = Object(utils["a" /* getResourceName */])(itemType, query);
  const ids = state.items[resourceName] && state.items[resourceName].data || [];
  return ids.reduce((map, id) => {
    map.set(id, state.data[itemType][id]);
    return map;
  }, new Map());
};
const getItemsTotalCount = (state, itemType, query, defaultValue = 0) => {
  const resourceName = Object(items_utils["b" /* getTotalCountResourceName */])(itemType, query);
  const totalCount = state.items.hasOwnProperty(resourceName) ? state.items[resourceName] : defaultValue;
  return totalCount;
};
const getItemsError = (state, itemType, query) => {
  const resourceName = Object(utils["a" /* getResourceName */])(itemType, query);
  return state.errors[resourceName];
};
//# sourceMappingURL=selectors.js.map
// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__(10);

// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__(16);

// CONCATENATED MODULE: ./packages/data/build-module/items/action-types.js
const TYPES = {
  SET_ITEM: 'SET_ITEM',
  SET_ITEMS: 'SET_ITEMS',
  SET_ITEMS_TOTAL_COUNT: 'SET_ITEMS_TOTAL_COUNT',
  SET_ERROR: 'SET_ERROR'
};
/* harmony default export */ var action_types = (TYPES);
//# sourceMappingURL=action-types.js.map
// EXTERNAL MODULE: ./packages/data/build-module/constants.js
var build_module_constants = __webpack_require__(14);

// CONCATENATED MODULE: ./packages/data/build-module/items/actions.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



function setItem(itemType, id, item) {
  return {
    type: action_types.SET_ITEM,
    id,
    item,
    itemType
  };
}
function setItems(itemType, query, items, totalCount) {
  return {
    type: action_types.SET_ITEMS,
    items,
    itemType,
    query,
    totalCount
  };
}
function setItemsTotalCount(itemType, query, totalCount) {
  return {
    type: action_types.SET_ITEMS_TOTAL_COUNT,
    itemType,
    query,
    totalCount
  };
}
function setError(itemType, query, error) {
  return {
    type: action_types.SET_ERROR,
    itemType,
    query,
    error
  };
}
function* updateProductStock(product, quantity) {
  const updatedProduct = { ...product,
    stock_quantity: quantity
  };
  const {
    id,
    parent_id: parentId,
    type
  } = updatedProduct; // Optimistically update product stock.

  yield setItem('products', id, updatedProduct);
  let url = build_module_constants["g" /* NAMESPACE */];

  switch (type) {
    case 'variation':
      url += `/products/${parentId}/variations/${id}`;
      break;

    case 'variable':
    case 'simple':
    default:
      url += `/products/${id}`;
  }

  try {
    yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'PUT',
      data: updatedProduct
    });
    return true;
  } catch (error) {
    // Update failed, return product back to original state.
    yield setItem('products', id, product);
    yield setError('products', id, error);
    return false;
  }
}
function* createProductFromTemplate(itemFields, query) {
  try {
    const url = Object(external_wp_url_["addQueryArgs"])(`${build_module_constants["k" /* WC_ADMIN_NAMESPACE */]}/onboarding/tasks/create_product_from_template`, query || {});
    const newItem = yield Object(external_wp_dataControls_["apiFetch"])({
      path: url,
      method: 'POST',
      data: itemFields
    });
    yield setItem('products', newItem.id, newItem);
    return newItem;
  } catch (error) {
    yield setError('createProductFromTemplate', query, error);
    throw error;
  }
}
//# sourceMappingURL=actions.js.map
// EXTERNAL MODULE: ./packages/data/build-module/controls.js
var controls = __webpack_require__(41);

// CONCATENATED MODULE: ./packages/data/build-module/items/resolvers.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */





function* request(itemType, query) {
  const endpoint = itemType === 'categories' ? 'products/categories' : itemType;
  const url = Object(external_wp_url_["addQueryArgs"])(`${build_module_constants["g" /* NAMESPACE */]}/${endpoint}`, query);
  const isUnboundedRequest = query.per_page === -1;
  const fetch = isUnboundedRequest ? external_wp_dataControls_["apiFetch"] : controls["b" /* fetchWithHeaders */];
  const response = yield fetch({
    path: url,
    method: 'GET'
  });

  if (isUnboundedRequest) {
    return {
      items: response,
      totalCount: response.length
    };
  }

  const totalCount = parseInt(response.headers.get('x-wp-total'), 10);
  return {
    items: response.data,
    totalCount
  };
}

function* resolvers_getItems(itemType, query) {
  try {
    const {
      items,
      totalCount
    } = yield request(itemType, query);
    yield setItemsTotalCount(itemType, query, totalCount);
    yield setItems(itemType, query, items);
  } catch (error) {
    yield setError(itemType, query, error);
  }
}
function* getReviewsTotalCount(itemType, query) {
  yield resolvers_getItemsTotalCount(itemType, query);
}
function* resolvers_getItemsTotalCount(itemType, query) {
  try {
    const totalsQuery = { ...query,
      page: 1,
      per_page: 1
    };
    const {
      totalCount
    } = yield request(itemType, totalsQuery);
    yield setItemsTotalCount(itemType, query, totalCount);
  } catch (error) {
    yield setError(itemType, query, error);
  }
}
//# sourceMappingURL=resolvers.js.map
// CONCATENATED MODULE: ./packages/data/build-module/items/reducer.js
/**
 * Internal dependencies
 */




const reducer = (state = {
  items: {},
  errors: {},
  data: {}
}, {
  type,
  id,
  itemType,
  query,
  item,
  items,
  totalCount,
  error
}) => {
  switch (type) {
    case action_types.SET_ITEM:
      const itemData = state.data[itemType] || {};
      return { ...state,
        data: { ...state.data,
          [itemType]: { ...itemData,
            [id]: { ...(itemData[id] || {}),
              ...item
            }
          }
        }
      };

    case action_types.SET_ITEMS:
      const ids = [];
      const nextItems = items.reduce((result, theItem) => {
        ids.push(theItem.id);
        result[theItem.id] = theItem;
        return result;
      }, {});
      const resourceName = Object(utils["a" /* getResourceName */])(itemType, query);
      return { ...state,
        items: { ...state.items,
          [resourceName]: {
            data: ids
          }
        },
        data: { ...state.data,
          [itemType]: { ...state.data[itemType],
            ...nextItems
          }
        }
      };

    case action_types.SET_ITEMS_TOTAL_COUNT:
      const totalResourceName = Object(items_utils["b" /* getTotalCountResourceName */])(itemType, query);
      return { ...state,
        items: { ...state.items,
          [totalResourceName]: totalCount
        }
      };

    case action_types.SET_ERROR:
      return { ...state,
        errors: { ...state.errors,
          [Object(utils["a" /* getResourceName */])(itemType, query)]: error
        }
      };

    default:
      return state;
  }
};

/* harmony default export */ var items_reducer = (reducer);
//# sourceMappingURL=reducer.js.map
// CONCATENATED MODULE: ./packages/data/build-module/items/index.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */







Object(external_wp_data_["registerStore"])(constants["a" /* STORE_NAME */], {
  reducer: items_reducer,
  actions: actions_namespaceObject,
  controls: controls["a" /* default */],
  selectors: selectors_namespaceObject,
  resolvers: resolvers_namespaceObject
});
const ITEMS_STORE_NAME = constants["a" /* STORE_NAME */];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ONBOARDING_STORE_NAME; });

// NAMESPACE OBJECT: ./packages/data/build-module/onboarding/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "setError", function() { return setError; });
__webpack_require__.d(actions_namespaceObject, "setIsRequesting", function() { return setIsRequesting; });
__webpack_require__.d(actions_namespaceObject, "setProfileItems", function() { return setProfileItems; });
__webpack_require__.d(actions_namespaceObject, "setTasksStatus", function() { return setTasksStatus; });
__webpack_require__.d(actions_namespaceObject, "setPaymentMethods", function() { return setPaymentMethods; });
__webpack_require__.d(actions_namespaceObject, "updateProfileItems", function() { return updateProfileItems; });

// NAMESPACE OBJECT: ./packages/data/build-module/onboarding/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getProfileItems", function() { return getProfileItems; });
__webpack_require__.d(resolvers_namespaceObject, "getTasksStatus", function() { return getTasksStatus; });
__webpack_require__.d(resolvers_namespaceObject, "getPaymentGatewaySuggestions", function() { return getPaymentGatewaySuggestions; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(7);

// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__(10);

// EXTERNAL MODULE: ./packages/data/build-module/onboarding/constants.js
var constants = __webpack_require__(103);

// EXTERNAL MODULE: ./packages/data/build-module/onboarding/selectors.js
var selectors = __webpack_require__(136);

// CONCATENATED MODULE: ./packages/data/build-module/onboarding/action-types.js
const TYPES = {
  SET_ERROR: 'SET_ERROR',
  SET_IS_REQUESTING: 'SET_IS_REQUESTING',
  SET_PROFILE_ITEMS: 'SET_PROFILE_ITEMS',
  SET_TASKS_STATUS: 'SET_TASKS_STATUS',
  GET_PAYMENT_METHODS_SUCCESS: 'GET_PAYMENT_METHODS_SUCCESS'
};
/* harmony default export */ var action_types = (TYPES);
//# sourceMappingURL=action-types.js.map
// EXTERNAL MODULE: ./packages/data/build-module/constants.js
var build_module_constants = __webpack_require__(14);

// CONCATENATED MODULE: ./packages/data/build-module/onboarding/actions.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function setError(selector, error) {
  return {
    type: action_types.SET_ERROR,
    selector,
    error
  };
}
function setIsRequesting(selector, isRequesting) {
  return {
    type: action_types.SET_IS_REQUESTING,
    selector,
    isRequesting
  };
}
function setProfileItems(profileItems, replace = false) {
  return {
    type: action_types.SET_PROFILE_ITEMS,
    profileItems,
    replace
  };
}
function setTasksStatus(tasksStatus) {
  return {
    type: action_types.SET_TASKS_STATUS,
    tasksStatus
  };
}
function setPaymentMethods(paymentMethods) {
  return {
    type: action_types.GET_PAYMENT_METHODS_SUCCESS,
    paymentMethods
  };
}
function* updateProfileItems(items) {
  yield setIsRequesting('updateProfileItems', true);

  try {
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: `${build_module_constants["k" /* WC_ADMIN_NAMESPACE */]}/onboarding/profile`,
      method: 'POST',
      data: items
    });

    if (results && results.status === 'success') {
      yield setProfileItems(items);
      yield setIsRequesting('updateProfileItems', false);
      return results;
    }

    throw new Error();
  } catch (error) {
    yield setError('updateProfileItems', error);
    yield setIsRequesting('updateProfileItems', false);
    throw new Error();
  }
}
//# sourceMappingURL=actions.js.map
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/resolvers.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function* getProfileItems() {
  try {
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: build_module_constants["k" /* WC_ADMIN_NAMESPACE */] + '/onboarding/profile',
      method: 'GET'
    });
    yield setProfileItems(results, true);
  } catch (error) {
    yield setError('getProfileItems', error);
  }
}
function* getTasksStatus() {
  try {
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: build_module_constants["k" /* WC_ADMIN_NAMESPACE */] + '/onboarding/tasks/status',
      method: 'GET'
    });
    yield setTasksStatus(results, true);
  } catch (error) {
    yield setError('getTasksStatus', error);
  }
}
function* getPaymentGatewaySuggestions() {
  try {
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: build_module_constants["k" /* WC_ADMIN_NAMESPACE */] + '/onboarding/payments',
      method: 'GET'
    });
    yield setPaymentMethods(results);
  } catch (error) {
    yield setError('getPaymentGatewaySuggestions', error);
  }
}
//# sourceMappingURL=resolvers.js.map
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/reducer.js
/**
 * Internal dependencies
 */

const defaultState = {
  errors: {},
  profileItems: {
    business_extensions: null,
    completed: null,
    industry: null,
    other_platform: null,
    other_platform_name: null,
    product_count: null,
    product_types: null,
    revenue: null,
    selling_venues: null,
    setup_client: null,
    skipped: null,
    theme: null,
    wccom_connected: null
  },
  paymentMethods: [],
  requesting: {},
  tasksStatus: {}
};

const onboarding = (state = defaultState, {
  type,
  profileItems,
  paymentMethods,
  replace,
  error,
  isRequesting,
  selector,
  tasksStatus
}) => {
  switch (type) {
    case action_types.SET_PROFILE_ITEMS:
      return { ...state,
        profileItems: replace ? profileItems : { ...state.profileItems,
          ...profileItems
        }
      };

    case action_types.SET_TASKS_STATUS:
      return { ...state,
        tasksStatus: { ...state.tasksStatus,
          ...tasksStatus
        }
      };

    case action_types.SET_ERROR:
      return { ...state,
        errors: { ...state.errors,
          [selector]: error
        }
      };

    case action_types.SET_IS_REQUESTING:
      return { ...state,
        requesting: { ...state.requesting,
          [selector]: isRequesting
        }
      };

    case action_types.GET_PAYMENT_METHODS_SUCCESS:
      return { ...state,
        paymentMethods
      };

    default:
      return state;
  }
};

/* harmony default export */ var reducer = (onboarding);
//# sourceMappingURL=reducer.js.map
// CONCATENATED MODULE: ./packages/data/build-module/onboarding/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






Object(external_wp_data_["registerStore"])(constants["a" /* STORE_NAME */], {
  reducer: reducer,
  actions: actions_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  selectors: selectors,
  resolvers: resolvers_namespaceObject
});
const ONBOARDING_STORE_NAME = constants["a" /* STORE_NAME */];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["hooks"]; }());

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return STORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PAYPAL_NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return pluginNames; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

const STORE_NAME = 'wc/admin/plugins';
const PAYPAL_NAMESPACE = '/wc-paypal/v1';
/**
 * Plugin slugs and names as key/value pairs.
 */

const pluginNames = {
  'facebook-for-woocommerce': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Facebook for WooCommerce', 'woocommerce-admin'),
  jetpack: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Jetpack', 'woocommerce-admin'),
  'klarna-checkout-for-woocommerce': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Klarna Checkout for WooCommerce', 'woocommerce-admin'),
  'klarna-payments-for-woocommerce': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Klarna Payments for WooCommerce', 'woocommerce-admin'),
  'mailchimp-for-woocommerce': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Mailchimp for WooCommerce', 'woocommerce-admin'),
  'creative-mail-by-constant-contact': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Creative Mail for WooCommerce', 'woocommerce-admin'),
  'woocommerce-gateway-paypal-express-checkout': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('WooCommerce PayPal', 'woocommerce-admin'),
  'woocommerce-gateway-stripe': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('WooCommerce Stripe', 'woocommerce-admin'),
  'woocommerce-payfast-gateway': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('WooCommerce PayFast', 'woocommerce-admin'),
  'woocommerce-payments': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('WooCommerce Payments', 'woocommerce-admin'),
  'woocommerce-services': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('WooCommerce Shipping & Tax', 'woocommerce-admin'),
  'woocommerce-services:shipping': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('WooCommerce Shipping & Tax', 'woocommerce-admin'),
  'woocommerce-services:tax': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('WooCommerce Shipping & Tax', 'woocommerce-admin'),
  'woocommerce-shipstation-integration': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('WooCommerce ShipStation Gateway', 'woocommerce-admin'),
  'woocommerce-mercadopago': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Mercado Pago payments for WooCommerce', 'woocommerce-admin'),
  'google-listings-and-ads': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Google Listings and Ads', 'woocommerce-admin'),
  'woo-razorpay': Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Razorpay', 'woocommerce-admin'),
  mailpoet: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('MailPoet', 'woocommerce-admin')
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchWithHeaders; });
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */


const fetchWithHeaders = options => {
  return {
    type: 'FETCH_WITH_HEADERS',
    options
  };
};
const controls = { ..._wordpress_data_controls__WEBPACK_IMPORTED_MODULE_0__["controls"],

  FETCH_WITH_HEADERS({
    options
  }) {
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({ ...options,
      parse: false
    }).then(response => {
      return Promise.all([response.headers, response.status, response.json()]);
    }).then(([headers, status, data]) => ({
      headers,
      status,
      data
    }));
  }

};
/* harmony default export */ __webpack_exports__["a"] = (controls);
//# sourceMappingURL=controls.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORE_NAME; });
const STORE_NAME = 'wc/admin/settings';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(495);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(273);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_1__) if(["SETTINGS_STORE_NAME","withSettingsHydration","useSettings","PLUGINS_STORE_NAME","pluginNames","withPluginsHydration","ONBOARDING_STORE_NAME","withOnboardingHydration","USER_STORE_NAME","withCurrentUserHydration","useUser","useUserPreferences","OPTIONS_STORE_NAME","withOptionsHydration","useOptionsHydration","REVIEWS_STORE_NAME","NOTES_STORE_NAME","REPORTS_STORE_NAME","ITEMS_STORE_NAME","getLeaderboard","searchItemsByString","NAVIGATION_STORE_NAME","withNavigationHydration","PAYMENT_GATEWAYS_STORE_NAME","getFilterQuery","getSummaryNumbers","getReportTableData","getReportTableQuery","getReportChartData","getTooltipValueFormat","MAX_PER_PAGE","QUERY_DEFAULTS","NAMESPACE","WC_ADMIN_NAMESPACE","WCS_NAMESPACE","SECOND","MINUTE","HOUR","DAY","WEEK","MONTH","EXPORT_STORE_NAME","IMPORT_STORE_NAME","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(292);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SETTINGS_STORE_NAME", function() { return _settings__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _settings_with_settings_hydration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(276);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withSettingsHydration", function() { return _settings_with_settings_hydration__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _settings_use_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(277);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSettings", function() { return _settings_use_settings__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(293);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLUGINS_STORE_NAME", function() { return _plugins__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _plugins_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluginNames", function() { return _plugins_constants__WEBPACK_IMPORTED_MODULE_6__["c"]; });

/* harmony import */ var _plugins_with_plugins_hydration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(278);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPluginsHydration", function() { return _plugins_with_plugins_hydration__WEBPACK_IMPORTED_MODULE_7__["a"]; });

/* harmony import */ var _onboarding__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(297);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ONBOARDING_STORE_NAME", function() { return _onboarding__WEBPACK_IMPORTED_MODULE_8__["a"]; });

/* harmony import */ var _onboarding_with_onboarding_hydration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(279);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withOnboardingHydration", function() { return _onboarding_with_onboarding_hydration__WEBPACK_IMPORTED_MODULE_9__["a"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(280);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USER_STORE_NAME", function() { return _user__WEBPACK_IMPORTED_MODULE_10__["a"]; });

/* harmony import */ var _user_with_current_user_hydration__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(281);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withCurrentUserHydration", function() { return _user_with_current_user_hydration__WEBPACK_IMPORTED_MODULE_11__["a"]; });

/* harmony import */ var _user_use_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(282);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUser", function() { return _user_use_user__WEBPACK_IMPORTED_MODULE_12__["a"]; });

/* harmony import */ var _user_use_user_preferences__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(283);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUserPreferences", function() { return _user_use_user_preferences__WEBPACK_IMPORTED_MODULE_13__["a"]; });

/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(137);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OPTIONS_STORE_NAME", function() { return _options__WEBPACK_IMPORTED_MODULE_14__["a"]; });

/* harmony import */ var _options_with_options_hydration__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(181);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withOptionsHydration", function() { return _options_with_options_hydration__WEBPACK_IMPORTED_MODULE_15__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOptionsHydration", function() { return _options_with_options_hydration__WEBPACK_IMPORTED_MODULE_15__["a"]; });

/* harmony import */ var _reviews__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(287);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REVIEWS_STORE_NAME", function() { return _reviews__WEBPACK_IMPORTED_MODULE_16__["a"]; });

/* harmony import */ var _notes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(286);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOTES_STORE_NAME", function() { return _notes__WEBPACK_IMPORTED_MODULE_17__["a"]; });

/* harmony import */ var _reports__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(294);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REPORTS_STORE_NAME", function() { return _reports__WEBPACK_IMPORTED_MODULE_18__["a"]; });

/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(295);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ITEMS_STORE_NAME", function() { return _items__WEBPACK_IMPORTED_MODULE_19__["a"]; });

/* harmony import */ var _items_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(88);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLeaderboard", function() { return _items_utils__WEBPACK_IMPORTED_MODULE_20__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "searchItemsByString", function() { return _items_utils__WEBPACK_IMPORTED_MODULE_20__["c"]; });

/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(288);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_STORE_NAME", function() { return _navigation__WEBPACK_IMPORTED_MODULE_21__["a"]; });

/* harmony import */ var _navigation_with_navigation_hydration__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(284);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withNavigationHydration", function() { return _navigation_with_navigation_hydration__WEBPACK_IMPORTED_MODULE_22__["a"]; });

/* harmony import */ var _payment_gateways__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(289);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_GATEWAYS_STORE_NAME", function() { return _payment_gateways__WEBPACK_IMPORTED_MODULE_23__["a"]; });

/* harmony import */ var _reports_utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(68);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFilterQuery", function() { return _reports_utils__WEBPACK_IMPORTED_MODULE_24__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSummaryNumbers", function() { return _reports_utils__WEBPACK_IMPORTED_MODULE_24__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getReportTableData", function() { return _reports_utils__WEBPACK_IMPORTED_MODULE_24__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getReportTableQuery", function() { return _reports_utils__WEBPACK_IMPORTED_MODULE_24__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getReportChartData", function() { return _reports_utils__WEBPACK_IMPORTED_MODULE_24__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTooltipValueFormat", function() { return _reports_utils__WEBPACK_IMPORTED_MODULE_24__["f"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_PER_PAGE", function() { return _constants__WEBPACK_IMPORTED_MODULE_25__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QUERY_DEFAULTS", function() { return _constants__WEBPACK_IMPORTED_MODULE_25__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NAMESPACE", function() { return _constants__WEBPACK_IMPORTED_MODULE_25__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WC_ADMIN_NAMESPACE", function() { return _constants__WEBPACK_IMPORTED_MODULE_25__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WCS_NAMESPACE", function() { return _constants__WEBPACK_IMPORTED_MODULE_25__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SECOND", function() { return _constants__WEBPACK_IMPORTED_MODULE_25__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MINUTE", function() { return _constants__WEBPACK_IMPORTED_MODULE_25__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HOUR", function() { return _constants__WEBPACK_IMPORTED_MODULE_25__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DAY", function() { return _constants__WEBPACK_IMPORTED_MODULE_25__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WEEK", function() { return _constants__WEBPACK_IMPORTED_MODULE_25__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MONTH", function() { return _constants__WEBPACK_IMPORTED_MODULE_25__["f"]; });

/* harmony import */ var _export__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(290);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXPORT_STORE_NAME", function() { return _export__WEBPACK_IMPORTED_MODULE_26__["a"]; });

/* harmony import */ var _import__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(291);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IMPORT_STORE_NAME", function() { return _import__WEBPACK_IMPORTED_MODULE_27__["a"]; });

/* harmony import */ var _onboarding_selectors__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(136);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProfileItems", function() { return _onboarding_selectors__WEBPACK_IMPORTED_MODULE_28__["getProfileItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTasksStatus", function() { return _onboarding_selectors__WEBPACK_IMPORTED_MODULE_28__["getTasksStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPaymentGatewaySuggestions", function() { return _onboarding_selectors__WEBPACK_IMPORTED_MODULE_28__["getPaymentGatewaySuggestions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOnboardingError", function() { return _onboarding_selectors__WEBPACK_IMPORTED_MODULE_28__["getOnboardingError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isOnboardingRequesting", function() { return _onboarding_selectors__WEBPACK_IMPORTED_MODULE_28__["isOnboardingRequesting"]; });

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */





























//# sourceMappingURL=index.js.map

/***/ }),

/***/ 495:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["coreData"]; }());

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORE_NAME; });
const STORE_NAME = 'core';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFilterQuery; });
/* unused harmony export timeStampFilterDates */
/* unused harmony export getQueryFromConfig */
/* unused harmony export isReportDataEmpty */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getSummaryNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getReportChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getTooltipValueFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getReportTableQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getReportTableData; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29);
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
  const {
    endpoint,
    query,
    limitBy,
    filters = [],
    advancedFilters = {}
  } = options;

  if (query.search) {
    const limitProperties = limitBy || [endpoint];
    return limitProperties.reduce((result, limitProperty) => {
      result[limitProperty] = query[limitProperty];
      return result;
    }, {});
  }

  return filters.map(filter => getQueryFromConfig(filter, advancedFilters, query)).reduce((result, configQuery) => Object.assign(result, configQuery), {});
} // Some stats endpoints don't have interval data, so they can ignore after/before params and omit that part of the response.

const noIntervalEndpoints = ['stock', 'customers'];
/**
 * Add timestamp to advanced filter parameters involving date. The api
 * expects a timestamp for these values similar to `before` and `after`.
 *
 * @param {Object} config - advancedFilters config object.
 * @param {Object} activeFilter - an active filter.
 * @return {Object} - an active filter with timestamp added to date values.
 */

function timeStampFilterDates(config, activeFilter) {
  const advancedFilterConfig = config.filters[activeFilter.key];

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(advancedFilterConfig, ['input', 'component']) !== 'Date') {
    return activeFilter;
  }

  const {
    rule,
    value
  } = activeFilter;
  const timeOfDayMap = {
    after: 'start',
    before: 'end'
  }; // If the value is an array, it signifies "between" values which must have a timestamp
  // appended to each value.

  if (Array.isArray(value)) {
    const [after, before] = value;
    return Object.assign({}, activeFilter, {
      value: [Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__["appendTimestamp"])(moment__WEBPACK_IMPORTED_MODULE_1___default()(after), timeOfDayMap.after), Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__["appendTimestamp"])(moment__WEBPACK_IMPORTED_MODULE_1___default()(before), timeOfDayMap.before)]
    });
  }

  return Object.assign({}, activeFilter, {
    value: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__["appendTimestamp"])(moment__WEBPACK_IMPORTED_MODULE_1___default()(value), timeOfDayMap[rule])
  });
}
function getQueryFromConfig(config, advancedFilters, query) {
  const queryValue = query[config.param];

  if (!queryValue) {
    return {};
  }

  if (queryValue === 'advanced') {
    const activeFilters = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__["getActiveFiltersFromQuery"])(query, advancedFilters.filters);

    if (activeFilters.length === 0) {
      return {};
    }

    const filterQuery = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__["getQueryFromActiveFilters"])(activeFilters.map(filter => timeStampFilterDates(advancedFilters, filter)), {}, advancedFilters.filters);
    return {
      match: query.match || 'all',
      ...filterQuery
    };
  }

  const filter = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["find"])(Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__["flattenFilters"])(config.filters), {
    value: queryValue
  });

  if (!filter) {
    return {};
  }

  if (filter.settings && filter.settings.param) {
    const {
      param
    } = filter.settings;

    if (query[param]) {
      return {
        [param]: query[param]
      };
    }

    return {};
  }

  return {
    [config.param]: queryValue
  };
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

  if (!report.data.totals || Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNull"])(report.data.totals)) {
    return true;
  }

  const checkIntervals = !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["includes"])(noIntervalEndpoints, endpoint);

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
  const {
    endpoint,
    dataType,
    query,
    fields
  } = options;
  const datesFromQuery = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__["getCurrentDates"])(query, options.defaultDateRange);
  const interval = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__["getIntervalForQuery"])(query);
  const filterQuery = getFilterQuery(options);
  const end = datesFromQuery[dataType].before;
  const noIntervals = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["includes"])(noIntervalEndpoints, endpoint);
  return noIntervals ? { ...filterQuery,
    fields
  } : {
    order: 'asc',
    interval,
    per_page: _constants__WEBPACK_IMPORTED_MODULE_5__[/* MAX_PER_PAGE */ "d"],
    after: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__["appendTimestamp"])(datesFromQuery[dataType].after, 'start'),
    before: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__["appendTimestamp"])(end, 'end'),
    segmentby: query.segmentby,
    fields,
    ...filterQuery
  };
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
  const {
    endpoint,
    select
  } = options;
  const {
    getReportStats,
    getReportStatsError,
    isResolving
  } = select(_constants__WEBPACK_IMPORTED_MODULE_6__[/* STORE_NAME */ "a"]);
  const response = {
    isRequesting: false,
    isError: false,
    totals: {
      primary: null,
      secondary: null
    }
  };
  const primaryQuery = getRequestQuery({ ...options,
    dataType: 'primary'
  }); // Disable eslint rule requiring `getReportStats` to be defined below because the next two statements
  // depend on `getReportStats` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  const primary = getReportStats(endpoint, primaryQuery);

  if (isResolving('getReportStats', [endpoint, primaryQuery])) {
    return { ...response,
      isRequesting: true
    };
  } else if (getReportStatsError(endpoint, primaryQuery)) {
    return { ...response,
      isError: true
    };
  }

  const primaryTotals = primary && primary.data && primary.data.totals || null;
  const secondaryQuery = getRequestQuery({ ...options,
    dataType: 'secondary'
  }); // Disable eslint rule requiring `getReportStats` to be defined below because the next two statements
  // depend on `getReportStats` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  const secondary = getReportStats(endpoint, secondaryQuery);

  if (isResolving('getReportStats', [endpoint, secondaryQuery])) {
    return { ...response,
      isRequesting: true
    };
  } else if (getReportStatsError(endpoint, secondaryQuery)) {
    return { ...response,
      isError: true
    };
  }

  const secondaryTotals = secondary && secondary.data && secondary.data.totals || null;
  return { ...response,
    totals: {
      primary: primaryTotals,
      secondary: secondaryTotals
    }
  };
}
/**
 * Static responses object to avoid returning new references each call.
 */

const reportChartDataResponses = {
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
const EMPTY_ARRAY = [];
/**
 * Cache helper for returning the full chart dataset after multiple
 * requests. Memoized on the request query (string), only called after
 * all the requests have resolved successfully.
 */

const getReportChartDataResponse = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["memoize"])((requestString, totals, intervals) => ({
  isEmpty: false,
  isError: false,
  isRequesting: false,
  data: {
    totals,
    intervals
  }
}), (requestString, totals, intervals) => [requestString, totals.length, intervals.length].join(':'));
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
  const {
    endpoint,
    select
  } = options;
  const {
    getReportStats,
    getReportStatsError,
    isResolving
  } = select(_constants__WEBPACK_IMPORTED_MODULE_6__[/* STORE_NAME */ "a"]);
  const requestQuery = getRequestQuery(options); // Disable eslint rule requiring `stats` to be defined below because the next two if statements
  // depend on `getReportStats` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  const stats = getReportStats(endpoint, requestQuery);

  if (isResolving('getReportStats', [endpoint, requestQuery])) {
    return reportChartDataResponses.requesting;
  }

  if (getReportStatsError(endpoint, requestQuery)) {
    return reportChartDataResponses.error;
  }

  if (isReportDataEmpty(stats, endpoint)) {
    return reportChartDataResponses.empty;
  }

  const totals = stats && stats.data && stats.data.totals || null;
  let intervals = stats && stats.data && stats.data.intervals || EMPTY_ARRAY; // If we have more than 100 results for this time period,
  // we need to make additional requests to complete the response.

  if (stats.totalResults > _constants__WEBPACK_IMPORTED_MODULE_5__[/* MAX_PER_PAGE */ "d"]) {
    let isFetching = true;
    let isError = false;
    const pagedData = [];
    const totalPages = Math.ceil(stats.totalResults / _constants__WEBPACK_IMPORTED_MODULE_5__[/* MAX_PER_PAGE */ "d"]);
    let pagesFetched = 1;

    for (let i = 2; i <= totalPages; i++) {
      const nextQuery = { ...requestQuery,
        page: i
      };

      const _data = getReportStats(endpoint, nextQuery);

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

    Object(lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(pagedData, function (_data) {
      if (_data.data && _data.data.intervals && Array.isArray(_data.data.intervals)) {
        intervals = intervals.concat(_data.data.intervals);
      }
    });
  }

  return getReportChartDataResponse(Object(_utils__WEBPACK_IMPORTED_MODULE_7__[/* getResourceName */ "a"])(endpoint, requestQuery), totals, intervals);
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
  const {
    query,
    tableQuery = {}
  } = options;
  const filterQuery = getFilterQuery(options);
  const datesFromQuery = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__["getCurrentDates"])(query, options.defaultDateRange);
  const noIntervals = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["includes"])(noIntervalEndpoints, options.endpoint);
  return {
    orderby: query.orderby || 'date',
    order: query.order || 'desc',
    after: noIntervals ? undefined : Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__["appendTimestamp"])(datesFromQuery.primary.after, 'start'),
    before: noIntervals ? undefined : Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__["appendTimestamp"])(datesFromQuery.primary.before, 'end'),
    page: query.paged || 1,
    per_page: query.per_page || _constants__WEBPACK_IMPORTED_MODULE_5__[/* QUERY_DEFAULTS */ "h"].pageSize,
    ...filterQuery,
    ...tableQuery
  };
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
  const {
    endpoint,
    select
  } = options;
  const {
    getReportItems,
    getReportItemsError,
    isResolving
  } = select(_constants__WEBPACK_IMPORTED_MODULE_6__[/* STORE_NAME */ "a"]);
  const tableQuery = _utils__WEBPACK_IMPORTED_MODULE_4__[/* getReportTableQuery */ "d"](options);
  const response = {
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

  const items = getReportItems(endpoint, tableQuery);

  if (isResolving('getReportItems', [endpoint, tableQuery])) {
    return { ...response,
      isRequesting: true
    };
  } else if (getReportItemsError(endpoint, tableQuery)) {
    return { ...response,
      isError: true
    };
  }

  return { ...response,
    items
  };
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORE_NAME; });
const STORE_NAME = 'woocommerce-navigation';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLeaderboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return searchItemsByString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTotalCountResourceName; });
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_date__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(104);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
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
  const endpoint = 'leaderboards';
  const {
    per_page: perPage,
    persisted_query: persistedQuery,
    query,
    select,
    filterQuery
  } = options;
  const {
    getItems,
    getItemsError,
    isResolving
  } = select(_constants__WEBPACK_IMPORTED_MODULE_1__[/* STORE_NAME */ "a"]);
  const response = {
    isRequesting: false,
    isError: false,
    rows: []
  };
  const datesFromQuery = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_0__["getCurrentDates"])(query, options.defaultDateRange);
  const leaderboardQuery = { ...filterQuery,
    after: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_0__["appendTimestamp"])(datesFromQuery.primary.after, 'start'),
    before: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_0__["appendTimestamp"])(datesFromQuery.primary.before, 'end'),
    per_page: perPage,
    persisted_query: JSON.stringify(persistedQuery)
  }; // Disable eslint rule requiring `getItems` to be defined below because the next two statements
  // depend on `getItems` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  const leaderboards = getItems(endpoint, leaderboardQuery);

  if (isResolving('getItems', [endpoint, leaderboardQuery])) {
    return { ...response,
      isRequesting: true
    };
  } else if (getItemsError(endpoint, leaderboardQuery)) {
    return { ...response,
      isError: true
    };
  }

  const leaderboard = leaderboards.get(options.id);
  return { ...response,
    rows: leaderboard === null || leaderboard === void 0 ? void 0 : leaderboard.rows
  };
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
  const {
    getItems,
    getItemsError,
    isResolving
  } = select(_constants__WEBPACK_IMPORTED_MODULE_1__[/* STORE_NAME */ "a"]);
  const items = {};
  let isRequesting = false;
  let isError = false;
  search.forEach(searchWord => {
    const query = {
      search: searchWord,
      per_page: 10
    };
    const newItems = getItems(endpoint, query);
    newItems.forEach((item, id) => {
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
    items,
    isRequesting,
    isError
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
  const {
    _fields,
    page,
    per_page,
    ...totalsQuery
  } = query;
  return Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* getResourceName */ "a"])('total-' + itemType, totalsQuery);
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORE_NAME; });
/**
 * Internal dependencies
 */
const STORE_NAME = 'wc/admin/reports';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

(function() { module.exports = window["moment"]; }());

/***/ })

/******/ });