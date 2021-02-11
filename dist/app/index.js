this["wc"] = this["wc"] || {}; this["wc"]["app"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		21: 0
/******/ 	}
/******/ 	var isCssRtlEnabled = function() {
/******/ 		return document.dir === 'rtl';
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		21: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function webpackJsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunks/" + ({"7":"activity-panels-help","8":"activity-panels-inbox","9":"analytics-report","10":"analytics-report-categories","11":"analytics-report-coupons","12":"analytics-report-customers","13":"analytics-report-downloads","14":"analytics-report-orders","15":"analytics-report-products","16":"analytics-report-revenue","17":"analytics-report-stock","18":"analytics-report-taxes","19":"analytics-report-variations","20":"analytics-settings","27":"customizable-dashboard","28":"dashboard","29":"dashboard-charts","32":"homescreen","34":"leaderboards","36":"marketing-overview","46":"profile-wizard","47":"store-alerts","48":"store-performance","49":"task-list","51":"wcpay-usage-modal"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		var src = webpackJsonpScriptSrc(chunkId);
/******/ 		if ( window.wcAdminAssets && window.wcAdminAssets.version ) {
/******/ 			src += '?ver=' + window.wcAdminAssets.version;
/******/ 		}
/******/ 		return src;
/******/ 	}
/******/
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"0":1,"3":1,"4":1,"7":1,"9":1,"14":1,"20":1,"28":1,"29":1,"32":1,"34":1,"36":1,"46":1,"47":1,"48":1,"49":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = true && isCssRtlEnabled() ? "./chunks/" + chunkId + ".style.rtl.css" : "./chunks/" + chunkId + ".style.css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.setAttribute("data-webpack", true);
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/ 		if ( window.wcAdminAssets && window.wcAdminAssets.version ) {
/******/ 			linkTag.href += '?ver=' + window.wcAdminAssets.version;
/******/ 		}
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 296);
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
  module.exports = __webpack_require__(75)();
}


/***/ }),

/***/ 10:
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

(function() { module.exports = this["wc"]["currency"]; }());

/***/ }),

/***/ 12:
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

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=Object.assign||function(a){for(var c,b=1;b<arguments.length;b++)for(var d in c=arguments[b],c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d]);return a};Object.defineProperty(exports,'__esModule',{value:!0});exports.default=function(a){var b=a.size,c=b===void 0?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,['size','onClick','icon','className']),j=['gridicon','gridicons-cross-small',f,!1,!1,!1].filter(Boolean).join(' ');return _react2.default.createElement('svg',_extends({className:j,height:c,width:c,onClick:d},g,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M17.705 7.705l-1.41-1.41L12 10.59 7.705 6.295l-1.41 1.41L10.59 12l-4.295 4.295 1.41 1.41L12 13.41l4.295 4.295 1.41-1.41L13.41 12l4.295-4.295z'})))};var _react=__webpack_require__(10),_react2=_interopRequireDefault(_react);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){var d={};for(var c in a)0<=b.indexOf(c)||Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}module.exports=exports['default'];


/***/ }),

/***/ 124:
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

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(150);
} else {}


/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(74);

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

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


var manageStock = Object(_settings__WEBPACK_IMPORTED_MODULE_3__[/* getSetting */ "g"])('manageStock', 'no');
var REPORTS_FILTER = 'woocommerce_admin_reports_list';
/**
 * Internal dependencies
 */

var RevenueReport = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["lazy"])(function () {
  return Promise.all(/* import() | analytics-report-revenue */[__webpack_require__.e(0), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, 484));
});
var ProductsReport = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["lazy"])(function () {
  return Promise.all(/* import() | analytics-report-products */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, 480));
});
var VariationsReport = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["lazy"])(function () {
  return Promise.all(/* import() | analytics-report-variations */[__webpack_require__.e(0), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, 485));
});
var OrdersReport = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["lazy"])(function () {
  return Promise.all(/* import() | analytics-report-orders */[__webpack_require__.e(0), __webpack_require__.e(5), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, 486));
});
var CategoriesReport = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["lazy"])(function () {
  return Promise.all(/* import() | analytics-report-categories */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, 482));
});
var CouponsReport = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["lazy"])(function () {
  return Promise.all(/* import() | analytics-report-coupons */[__webpack_require__.e(0), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, 487));
});
var TaxesReport = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["lazy"])(function () {
  return Promise.all(/* import() | analytics-report-taxes */[__webpack_require__.e(0), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, 488));
});
var DownloadsReport = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["lazy"])(function () {
  return Promise.all(/* import() | analytics-report-downloads */[__webpack_require__.e(0), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, 489));
});
var StockReport = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["lazy"])(function () {
  return Promise.all(/* import() | analytics-report-stock */[__webpack_require__.e(0), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, 481));
});
var CustomersReport = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["lazy"])(function () {
  return Promise.all(/* import() | analytics-report-customers */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, 483));
});
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var reports = [{
    report: 'revenue',
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Revenue', 'woocommerce-admin'),
    component: RevenueReport,
    navArgs: {
      id: 'woocommerce-analytics-revenue'
    }
  }, {
    report: 'products',
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Products', 'woocommerce-admin'),
    component: ProductsReport,
    navArgs: {
      id: 'woocommerce-analytics-products'
    }
  }, {
    report: 'variations',
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Variations', 'woocommerce-admin'),
    component: VariationsReport,
    navArgs: {
      id: 'woocommerce-analytics-variations'
    }
  }, {
    report: 'orders',
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Orders', 'woocommerce-admin'),
    component: OrdersReport,
    navArgs: {
      id: 'woocommerce-analytics-orders'
    }
  }, {
    report: 'categories',
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Categories', 'woocommerce-admin'),
    component: CategoriesReport,
    navArgs: {
      id: 'woocommerce-analytics-categories'
    }
  }, {
    report: 'coupons',
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Coupons', 'woocommerce-admin'),
    component: CouponsReport,
    navArgs: {
      id: 'woocommerce-analytics-coupons'
    }
  }, {
    report: 'taxes',
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Taxes', 'woocommerce-admin'),
    component: TaxesReport,
    navArgs: {
      id: 'woocommerce-analytics-taxes'
    }
  }, manageStock === 'yes' ? {
    report: 'stock',
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Stock', 'woocommerce-admin'),
    component: StockReport,
    navArgs: {
      id: 'woocommerce-analytics-stock'
    }
  } : null, {
    report: 'customers',
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Customers', 'woocommerce-admin'),
    component: CustomersReport
  }, {
    report: 'downloads',
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Downloads', 'woocommerce-admin'),
    component: DownloadsReport,
    navArgs: {
      id: 'woocommerce-analytics-downloads'
    }
  }].filter(Boolean);
  return Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(REPORTS_FILTER, reports);
});

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(125);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useIsScrolled; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */

function useIsScrolled() {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isScrolled = _useState2[0],
      setIsScrolled = _useState2[1];

  var rafHandle = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var updateIsScrolled = function updateIsScrolled() {
      setIsScrolled(window.pageYOffset > 20);
    };

    var scrollListener = function scrollListener() {
      rafHandle.current = window.requestAnimationFrame(updateIsScrolled);
    };

    window.addEventListener('scroll', scrollListener);
    return function () {
      window.removeEventListener('scroll', scrollListener);
      window.cancelAnimationFrame(rafHandle.current);
    };
  }, []);
  return isScrolled;
}

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["plugins"]; }());

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(30);

var assertThisInitialized = __webpack_require__(9);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ speak; });

// UNUSED EXPORTS: setup

// EXTERNAL MODULE: ./node_modules/@wordpress/dom-ready/build-module/index.js
var build_module = __webpack_require__(54);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@wordpress/a11y/build-module/add-intro-text.js
/**
 * WordPress dependencies
 */

/**
 * Build the explanatory text to be placed before the aria live regions.
 *
 * This text is initially hidden from assistive technologies by using a `hidden`
 * HTML attribute which is then removed once a message fills the aria-live regions.
 *
 * @return {HTMLParagraphElement} The explanatory text HTML element.
 */

function addIntroText() {
  var introText = document.createElement('p');
  introText.id = 'a11y-speak-intro-text';
  introText.className = 'a11y-speak-intro-text';
  introText.textContent = Object(external_this_wp_i18n_["__"])('Notifications');
  introText.setAttribute('style', 'position: absolute;' + 'margin: -1px;' + 'padding: 0;' + 'height: 1px;' + 'width: 1px;' + 'overflow: hidden;' + 'clip: rect(1px, 1px, 1px, 1px);' + '-webkit-clip-path: inset(50%);' + 'clip-path: inset(50%);' + 'border: 0;' + 'word-wrap: normal !important;');
  introText.setAttribute('hidden', 'hidden');
  var _document = document,
      body = _document.body;

  if (body) {
    body.appendChild(introText);
  }

  return introText;
}
//# sourceMappingURL=add-intro-text.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/a11y/build-module/add-container.js
/**
 * Build the live regions markup.
 *
 * @param {string} [ariaLive] Value for the 'aria-live' attribute; default: 'polite'.
 *
 * @return {HTMLDivElement} The ARIA live region HTML element.
 */
function addContainer() {
  var ariaLive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'polite';
  var container = document.createElement('div');
  container.id = "a11y-speak-".concat(ariaLive);
  container.className = 'a11y-speak-region';
  container.setAttribute('style', 'position: absolute;' + 'margin: -1px;' + 'padding: 0;' + 'height: 1px;' + 'width: 1px;' + 'overflow: hidden;' + 'clip: rect(1px, 1px, 1px, 1px);' + '-webkit-clip-path: inset(50%);' + 'clip-path: inset(50%);' + 'border: 0;' + 'word-wrap: normal !important;');
  container.setAttribute('aria-live', ariaLive);
  container.setAttribute('aria-relevant', 'additions text');
  container.setAttribute('aria-atomic', 'true');
  var _document = document,
      body = _document.body;

  if (body) {
    body.appendChild(container);
  }

  return container;
}
//# sourceMappingURL=add-container.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/a11y/build-module/clear.js
/**
 * Clears the a11y-speak-region elements and hides the explanatory text.
 */
function clear() {
  var regions = document.getElementsByClassName('a11y-speak-region');
  var introText = document.getElementById('a11y-speak-intro-text');

  for (var i = 0; i < regions.length; i++) {
    regions[i].textContent = '';
  } // Make sure the explanatory text is hidden from assistive technologies.


  if (introText) {
    introText.setAttribute('hidden', 'hidden');
  }
}
//# sourceMappingURL=clear.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/a11y/build-module/filter-message.js
var previousMessage = '';
/**
 * Filter the message to be announced to the screenreader.
 *
 * @param {string} message The message to be announced.
 *
 * @return {string} The filtered message.
 */

function filterMessage(message) {
  /*
   * Strip HTML tags (if any) from the message string. Ideally, messages should
   * be simple strings, carefully crafted for specific use with A11ySpeak.
   * When re-using already existing strings this will ensure simple HTML to be
   * stripped out and replaced with a space. Browsers will collapse multiple
   * spaces natively.
   */
  message = message.replace(/<[^<>]+>/g, ' ');
  /*
   * Safari + VoiceOver don't announce repeated, identical strings. We use
   * a `no-break space` to force them to think identical strings are different.
   */

  if (previousMessage === message) {
    message += "\xA0";
  }

  previousMessage = message;
  return message;
}
//# sourceMappingURL=filter-message.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/a11y/build-module/index.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */





/**
 * Create the live regions.
 */

function setup() {
  var introText = document.getElementById('a11y-speak-intro-text');
  var containerAssertive = document.getElementById('a11y-speak-assertive');
  var containerPolite = document.getElementById('a11y-speak-polite');

  if (introText === null) {
    addIntroText();
  }

  if (containerAssertive === null) {
    addContainer('assertive');
  }

  if (containerPolite === null) {
    addContainer('polite');
  }
}
/**
 * Run setup on domReady.
 */

Object(build_module["a" /* default */])(setup);
/**
 * Allows you to easily announce dynamic interface updates to screen readers using ARIA live regions.
 * This module is inspired by the `speak` function in `wp-a11y.js`.
 *
 * @param {string} message  The message to be announced by assistive technologies.
 * @param {string} [ariaLive] The politeness level for aria-live; default: 'polite'.
 *
 * @example
 * ```js
 * import { speak } from '@wordpress/a11y';
 *
 * // For polite messages that shouldn't interrupt what screen readers are currently announcing.
 * speak( 'The message you want to send to the ARIA live region' );
 *
 * // For assertive messages that should interrupt what screen readers are currently announcing.
 * speak( 'The message you want to send to the ARIA live region', 'assertive' );
 * ```
 */

function speak(message, ariaLive) {
  /*
   * Clear previous messages to allow repeated strings being read out and hide
   * the explanatory text from assistive technologies.
   */
  clear();
  message = filterMessage(message);
  var introText = document.getElementById('a11y-speak-intro-text');
  var containerAssertive = document.getElementById('a11y-speak-assertive');
  var containerPolite = document.getElementById('a11y-speak-polite');

  if (containerAssertive && ariaLive === 'assertive') {
    containerAssertive.textContent = message;
  } else if (containerPolite) {
    containerPolite.textContent = message;
  }
  /*
   * Make the explanatory text available to assistive technologies by removing
   * the 'hidden' HTML attribute.
   */


  if (introText) {
    introText.removeAttribute('hidden');
  }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ layout_PrimaryLayout; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ PageLayout; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ EmbedLayout; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(24);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(34);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(5);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(11);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(12);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(13);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(14);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(6);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","compose"]}
var external_this_wp_compose_ = __webpack_require__(18);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(38);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(10);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/history/esm/history.js + 2 modules
var esm_history = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/mini-create-react-context/dist/esm/index.js
var esm = __webpack_require__(181);

// EXTERNAL MODULE: ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js
var tiny_invariant_esm = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/path-to-regexp/index.js
var path_to_regexp = __webpack_require__(182);
var path_to_regexp_default = /*#__PURE__*/__webpack_require__.n(path_to_regexp);

// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(137);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// CONCATENATED MODULE: ./node_modules/react-router/esm/react-router.js













// TODO: Replace with React.createContext once we can assume React 16+

var react_router_createNamedContext = function createNamedContext(name) {
  var context = Object(esm["a" /* default */])();
  context.displayName = name;
  return context;
};

var historyContext =
/*#__PURE__*/
react_router_createNamedContext("Router-History");

// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext$1 = function createNamedContext(name) {
  var context = Object(esm["a" /* default */])();
  context.displayName = name;
  return context;
};

var react_router_context =
/*#__PURE__*/
createNamedContext$1("Router");

/**
 * The public API for putting history on context.
 */

var react_router_Router =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        if (_this._isMounted) {
          _this.setState({
            location: location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  };

  _proto.render = function render() {
    return external_React_default.a.createElement(react_router_context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, external_React_default.a.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };

  return Router;
}(external_React_default.a.Component);

if (false) {}

/**
 * The public API for a <Router> that stores location in memory.
 */

var react_router_MemoryRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = Object(esm_history["c" /* createMemoryHistory */])(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return external_React_default.a.createElement(react_router_Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(external_React_default.a.Component);

if (false) {}

var react_router_Lifecycle =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(external_React_default.a.Component);

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return external_React_default.a.createElement(react_router_context.Consumer, null, function (context) {
    !context ?  false ? undefined : Object(tiny_invariant_esm["a" /* default */])(false) : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return external_React_default.a.createElement(react_router_Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (false) { var messageType; }

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = path_to_regexp_default.a.compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return external_React_default.a.createElement(react_router_context.Consumer, null, function (context) {
    !context ?  false ? undefined : Object(tiny_invariant_esm["a" /* default */])(false) : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = Object(esm_history["b" /* createLocation */])(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : Object(esm_extends["a" /* default */])({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return external_React_default.a.createElement(react_router_Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = Object(esm_history["b" /* createLocation */])(prevProps.to);

        if (!Object(esm_history["e" /* locationsAreEqual */])(prevLocation, Object(esm_extends["a" /* default */])({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (false) {}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp_default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return external_React_default.a.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   false ? undefined : void 0;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var react_router_Route =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return external_React_default.a.createElement(react_router_context.Consumer, null, function (context$1) {
      !context$1 ?  false ? undefined : Object(tiny_invariant_esm["a" /* default */])(false) : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = Object(esm_extends["a" /* default */])({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && children.length === 0) {
        children = null;
      }

      return external_React_default.a.createElement(react_router_context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  false ? undefined : children(props) : children : component ? external_React_default.a.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  false ? undefined : children(props) : null);
    });
  };

  return Route;
}(external_React_default.a.Component);

if (false) {}

function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return Object(esm_extends["a" /* default */])({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
}

function stripBasename(basename, location) {
  if (!basename) return location;
  var base = addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return Object(esm_extends["a" /* default */])({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : Object(esm_history["d" /* createPath */])(location);
}

function staticHandler(methodName) {
  return function () {
      false ? undefined : Object(tiny_invariant_esm["a" /* default */])(false) ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var react_router_StaticRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, Object(esm_history["b" /* createLocation */])(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename, Object(esm_history["b" /* createLocation */])(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return external_React_default.a.createElement(react_router_Router, Object(esm_extends["a" /* default */])({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(external_React_default.a.Component);

if (false) {}

/**
 * The public API for rendering the first <Route> that matches.
 */

var react_router_Switch =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return external_React_default.a.createElement(react_router_context.Consumer, null, function (context) {
      !context ?  false ? undefined : Object(tiny_invariant_esm["a" /* default */])(false) : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      external_React_default.a.Children.forEach(_this.props.children, function (child) {
        if (match == null && external_React_default.a.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, Object(esm_extends["a" /* default */])({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? external_React_default.a.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(external_React_default.a.Component);

if (false) {}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = Object(objectWithoutPropertiesLoose["a" /* default */])(props, ["wrappedComponentRef"]);

    return external_React_default.a.createElement(react_router_context.Consumer, null, function (context) {
      !context ?  false ? undefined : Object(tiny_invariant_esm["a" /* default */])(false) : void 0;
      return external_React_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (false) {}

  return hoist_non_react_statics_cjs_default()(C, Component);
}

var useContext = external_React_default.a.useContext;
function useHistory() {
  if (false) {}

  return useContext(historyContext);
}
function useLocation() {
  if (false) {}

  return useContext(react_router_context).location;
}
function useParams() {
  if (false) {}

  var match = useContext(react_router_context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (false) {}

  var location = useLocation();
  var match = useContext(react_router_context).match;
  return path ? matchPath(location.pathname, path) : match;
}

if (false) { var secondaryBuildName, initialBuildName, buildNames, react_router_key, global; }


//# sourceMappingURL=react-router.js.map

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(50);

// EXTERNAL MODULE: external {"this":["wc","components"]}
var external_this_wc_components_ = __webpack_require__(47);

// EXTERNAL MODULE: external {"this":["wc","navigation"]}
var external_this_wc_navigation_ = __webpack_require__(21);

// EXTERNAL MODULE: ./client/settings/index.js
var settings = __webpack_require__(25);

// EXTERNAL MODULE: external {"this":["wc","data"]}
var external_this_wc_data_ = __webpack_require__(23);

// EXTERNAL MODULE: external {"this":["wc","tracks"]}
var external_this_wc_tracks_ = __webpack_require__(28);

// EXTERNAL MODULE: ./client/layout/style.scss
var layout_style = __webpack_require__(299);

// EXTERNAL MODULE: external {"this":["wp","hooks"]}
var external_this_wp_hooks_ = __webpack_require__(42);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: ./client/analytics/report/get-reports.js
var get_reports = __webpack_require__(136);

// EXTERNAL MODULE: ./client/dashboard/utils.js
var utils = __webpack_require__(94);

// CONCATENATED MODULE: ./client/layout/controller.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */







/**
 * Internal dependencies
 */



var AnalyticsReport = Object(external_this_wp_element_["lazy"])(function () {
  return __webpack_require__.e(/* import() | analytics-report */ 9).then(__webpack_require__.bind(null, 578));
});
var AnalyticsSettings = Object(external_this_wp_element_["lazy"])(function () {
  return __webpack_require__.e(/* import() | analytics-settings */ 20).then(__webpack_require__.bind(null, 595));
});
var Dashboard = Object(external_this_wp_element_["lazy"])(function () {
  return __webpack_require__.e(/* import() | dashboard */ 28).then(__webpack_require__.bind(null, 579));
});
var Homescreen = Object(external_this_wp_element_["lazy"])(function () {
  return Promise.all(/* import() | homescreen */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(52), __webpack_require__.e(4), __webpack_require__.e(32)]).then(__webpack_require__.bind(null, 592));
});
var MarketingOverview = Object(external_this_wp_element_["lazy"])(function () {
  return Promise.all(/* import() | marketing-overview */[__webpack_require__.e(2), __webpack_require__.e(36)]).then(__webpack_require__.bind(null, 596));
});
var ProfileWizard = Object(external_this_wp_element_["lazy"])(function () {
  return __webpack_require__.e(/* import() | profile-wizard */ 46).then(__webpack_require__.bind(null, 593));
});
var PAGES_FILTER = 'woocommerce_admin_pages_list';
var controller_getPages = function getPages() {
  var pages = [];
  var initialBreadcrumbs = [['', wcSettings.woocommerceTranslation]];
  pages.push({
    container: Homescreen,
    path: '/',
    breadcrumbs: [].concat(initialBreadcrumbs, [Object(external_this_wp_i18n_["__"])('Home', 'woocommerce-admin')]),
    wpOpenMenu: 'toplevel_page_woocommerce',
    navArgs: {
      id: 'woocommerce-home'
    }
  });

  if (window.wcAdminFeatures.analytics) {
    pages.push({
      container: Dashboard,
      path: '/analytics/overview',
      breadcrumbs: [].concat(initialBreadcrumbs, [['/analytics/overview', Object(external_this_wp_i18n_["__"])('Analytics', 'woocommerce-admin')], Object(external_this_wp_i18n_["__"])('Overview', 'woocommerce-admin')]),
      wpOpenMenu: 'toplevel_page_wc-admin-path--analytics-overview',
      navArgs: {
        id: 'woocommerce-analytics-overview'
      }
    });
    pages.push({
      container: AnalyticsSettings,
      path: '/analytics/settings',
      breadcrumbs: [].concat(initialBreadcrumbs, [['/analytics/revenue', Object(external_this_wp_i18n_["__"])('Analytics', 'woocommerce-admin')], Object(external_this_wp_i18n_["__"])('Settings', 'woocommerce-admin')]),
      wpOpenMenu: 'toplevel_page_wc-admin-path--analytics-overview',
      navArgs: {
        id: 'woocommerce-analytics-settings'
      }
    });
    pages.push({
      container: AnalyticsReport,
      path: '/customers',
      breadcrumbs: [].concat(initialBreadcrumbs, [Object(external_this_wp_i18n_["__"])('Customers', 'woocommerce-admin')]),
      wpOpenMenu: 'toplevel_page_woocommerce',
      navArgs: {
        id: 'woocommerce-analytics-customers'
      }
    });
    pages.push({
      container: AnalyticsReport,
      path: '/analytics/:report',
      breadcrumbs: function breadcrumbs(_ref) {
        var match = _ref.match;
        var report = Object(external_lodash_["find"])(Object(get_reports["a" /* default */])(), {
          report: match.params.report
        });

        if (!report) {
          return [];
        }

        return [].concat(initialBreadcrumbs, [['/analytics/revenue', Object(external_this_wp_i18n_["__"])('Analytics', 'woocommerce-admin')], report.title]);
      },
      wpOpenMenu: 'toplevel_page_wc-admin-path--analytics-overview'
    });
  }

  if (window.wcAdminFeatures.marketing) {
    pages.push({
      container: MarketingOverview,
      path: '/marketing',
      breadcrumbs: [].concat(initialBreadcrumbs, [['/marketing', Object(external_this_wp_i18n_["__"])('Marketing', 'woocommerce-admin')], Object(external_this_wp_i18n_["__"])('Overview', 'woocommerce-admin')]),
      wpOpenMenu: 'toplevel_page_woocommerce-marketing',
      navArgs: {
        id: 'woocommerce-marketing-overview'
      }
    });
  }

  if (window.wcAdminFeatures.onboarding) {
    pages.push({
      container: ProfileWizard,
      path: '/setup-wizard',
      breadcrumbs: [].concat(initialBreadcrumbs, [['/setup-wizard', Object(external_this_wp_i18n_["__"])('Setup Wizard', 'woocommerce-admin')]])
    });
  }

  return Object(external_this_wp_hooks_["applyFilters"])(PAGES_FILTER, pages);
};
var controller_Controller = /*#__PURE__*/function (_Component) {
  inherits_default()(Controller, _Component);

  var _super = _createSuper(Controller);

  function Controller() {
    classCallCheck_default()(this, Controller);

    return _super.apply(this, arguments);
  }

  createClass_default()(Controller, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.document.documentElement.scrollTop = 0;
      window.document.body.classList.remove('woocommerce-admin-is-loading');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevBaseQuery = Object(external_lodash_["omit"])(prevProps.query, 'chartType', 'filter', 'paged');
      var baseQuery = Object(external_lodash_["omit"])(this.props.query, 'chartType', 'filter', 'paged');

      if (prevProps.query.paged > 1 && !Object(external_lodash_["isEqual"])(prevBaseQuery, baseQuery)) {
        Object(external_this_wc_navigation_["getHistory"])().replace(Object(external_this_wc_navigation_["getNewPath"])({
          paged: 1
        }));
      }

      if (prevProps.match.url !== this.props.match.url) {
        window.document.documentElement.scrollTop = 0;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          page = _this$props.page,
          match = _this$props.match,
          query = _this$props.query;
      var url = match.url,
          params = match.params;
      window.wpNavMenuUrlUpdate(query);
      window.wpNavMenuClassChange(page, url);
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Suspense"], {
        fallback: Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Spinner"], null)
      }, Object(external_this_wp_element_["createElement"])(page.container, {
        params: params,
        path: url,
        pathMatch: page.path,
        query: query
      }));
    }
  }]);

  return Controller;
}(external_this_wp_element_["Component"]);
/**
 * Update an anchor's link in sidebar to include persisted queries. Leave excluded screens
 * as is.
 *
 * @param {HTMLElement} item - Sidebar anchor link.
 * @param {Object} nextQuery - A query object to be added to updated hrefs.
 * @param {Array} excludedScreens - wc-admin screens to avoid updating.
 */

function updateLinkHref(item, nextQuery, excludedScreens) {
  if (Object(utils["f" /* isWCAdmin */])(item.href)) {
    var search = Object(external_lodash_["last"])(item.href.split('?'));
    var query = Object(lib["parse"])(search);
    var path = query.path || 'homescreen';
    var screen = Object(external_this_wc_navigation_["getScreenFromPath"])(path);
    var isExcludedScreen = excludedScreens.includes(screen);
    var href = 'admin.php?' + Object(lib["stringify"])(Object.assign(query, isExcludedScreen ? {} : nextQuery)); // Replace the href so you can see the url on hover.

    item.href = href;

    item.onclick = function (e) {
      e.preventDefault();
      Object(external_this_wc_navigation_["getHistory"])().push(href);
    };
  }
} // Update's wc-admin links in wp-admin menu

window.wpNavMenuUrlUpdate = function (query) {
  var nextQuery = Object(external_this_wc_navigation_["getPersistedQuery"])(query);
  var excludedScreens = Object(external_this_wc_navigation_["getQueryExcludedScreens"])();
  Array.from(document.querySelectorAll('#adminmenu a')).forEach(function (item) {
    return updateLinkHref(item, nextQuery, excludedScreens);
  });
}; // When the route changes, we need to update wp-admin's menu with the correct section & current link


window.wpNavMenuClassChange = function (page, url) {
  Array.from(document.getElementsByClassName('current')).forEach(function (item) {
    item.classList.remove('current');
  });
  var submenu = Array.from(document.querySelectorAll('.wp-has-current-submenu'));
  submenu.forEach(function (element) {
    element.classList.remove('wp-has-current-submenu');
    element.classList.remove('wp-menu-open');
    element.classList.remove('selected');
    element.classList.add('wp-not-current-submenu');
    element.classList.add('menu-top');
  });
  var pageUrl = url === '/' ? 'admin.php?page=wc-admin' : 'admin.php?page=wc-admin&path=' + encodeURIComponent(url);
  var currentItemsSelector = url === '/' ? "li > a[href$=\"".concat(pageUrl, "\"], li > a[href*=\"").concat(pageUrl, "?\"]") : "li > a[href*=\"".concat(pageUrl, "\"]");
  var currentItems = document.querySelectorAll(currentItemsSelector);
  Array.from(currentItems).forEach(function (item) {
    item.parentElement.classList.add('current');
  });

  if (page.wpOpenMenu) {
    var currentMenu = document.querySelector('#' + page.wpOpenMenu);

    if (currentMenu) {
      currentMenu.classList.remove('wp-not-current-submenu');
      currentMenu.classList.add('wp-has-current-submenu');
      currentMenu.classList.add('wp-menu-open');
      currentMenu.classList.add('current');
    }
  }

  var wpWrap = document.querySelector('#wpwrap');
  wpWrap.classList.remove('wp-responsive-open');
};
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(7);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: external {"this":["wp","htmlEntities"]}
var external_this_wp_htmlEntities_ = __webpack_require__(40);

// EXTERNAL MODULE: ./packages/experimental/build-module/index.js
var build_module = __webpack_require__(31);

// EXTERNAL MODULE: ./client/header/style.scss
var header_style = __webpack_require__(300);

// EXTERNAL MODULE: ./node_modules/react-click-outside/dist/index.js
var dist = __webpack_require__(276);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: external {"this":["wp","components"]}
var external_this_wp_components_ = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/gridicons/dist/cross-small.js
var cross_small = __webpack_require__(120);
var cross_small_default = /*#__PURE__*/__webpack_require__.n(cross_small);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js
var build_module_icon = __webpack_require__(304);

// EXTERNAL MODULE: ./node_modules/@wordpress/primitives/build-module/svg/index.js
var svg = __webpack_require__(196);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/help.js


/**
 * WordPress dependencies
 */

var help_help = Object(external_this_wp_element_["createElement"])(svg["b" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["a" /* Path */], {
  d: "M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"
}));
/* harmony default export */ var library_help = (help_help);
//# sourceMappingURL=help.js.map
// EXTERNAL MODULE: ./client/header/activity-panel/style.scss
var activity_panel_style = __webpack_require__(302);

// CONCATENATED MODULE: ./client/header/activity-panel/toggle-bubble.js


/**
 * External dependencies
 */



var toggle_bubble_ActivityPanelToggleBubble = function ActivityPanelToggleBubble(_ref) {
  var _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$hasUnread = _ref.hasUnread,
      hasUnread = _ref$hasUnread === void 0 ? false : _ref$hasUnread;
  var classes = classnames_default()('woocommerce-layout__activity-panel-toggle-bubble', {
    'has-unread': hasUnread
  });
  /* eslint-disable max-len */

  return Object(external_this_wp_element_["createElement"])("div", {
    className: classes
  }, Object(external_this_wp_element_["createElement"])("svg", {
    height: height,
    width: width,
    viewBox: "0 0 24 24"
  }, Object(external_this_wp_element_["createElement"])("path", {
    d: "M18.9 2H5.1C3.4 2 2 3.4 2 5.1v10.7C2 17.6 3.4 19 5.1 19H9l6 3-1-3h4.9c1.7 0 3.1-1.4 3.1-3.1V5.1C22 3.4 20.6 2 18.9 2zm-1.5 4.5c-.4.8-.8 2.1-1 3.9-.3 1.8-.4 3.1-.3 4.1 0 .3 0 .5-.1.7-.1.2-.3.4-.6.4s-.6-.1-.9-.4c-1-1-1.8-2.6-2.4-4.6-.7 1.4-1.2 2.4-1.6 3.1-.6 1.2-1.2 1.8-1.6 1.9-.3 0-.5-.2-.8-.7-.5-1.4-1.1-4.2-1.7-8.2 0-.3 0-.5.2-.7.1-.2.4-.3.7-.4.5 0 .9.2.9.8.3 2.3.7 4.2 1.1 5.7l2.4-4.5c.2-.4.4-.6.8-.6.5 0 .8.3.9.9.3 1.4.6 2.6 1 3.7.3-2.7.8-4.7 1.4-5.9.2-.3.4-.5.7-.5.2 0 .5.1.7.2.2.2.3.4.3.6 0 .2 0 .4-.1.5z"
  })));
  /* eslint-enable max-len */
};

toggle_bubble_ActivityPanelToggleBubble.propTypes = {
  height: prop_types_default.a.number,
  width: prop_types_default.a.number,
  hasUnread: prop_types_default.a.bool
};
/* harmony default export */ var toggle_bubble = (toggle_bubble_ActivityPanelToggleBubble);
// EXTERNAL MODULE: ./client/inbox-panel/utils.js
var inbox_panel_utils = __webpack_require__(195);

// CONCATENATED MODULE: ./client/header/activity-panel/unread-indicators.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


function getUnreadNotes(select) {
  var _select = select(external_this_wc_data_["NOTES_STORE_NAME"]),
      getNotes = _select.getNotes,
      getNotesError = _select.getNotesError,
      isResolving = _select.isResolving;

  var _select2 = select(external_this_wc_data_["USER_STORE_NAME"]),
      getCurrentUser = _select2.getCurrentUser;

  var userData = getCurrentUser();
  var lastRead = parseInt(userData && userData.woocommerce_meta && userData.woocommerce_meta.activity_panel_inbox_last_read, 10);

  if (!lastRead) {
    return null;
  } // @todo This method would be more performant if we ask only for 1 item per page with status "unactioned".
  // This change should be applied after having pagination implemented.


  var notesQuery = {
    page: 1,
    per_page: external_this_wc_data_["QUERY_DEFAULTS"].pageSize,
    status: 'unactioned',
    type: external_this_wc_data_["QUERY_DEFAULTS"].noteTypes,
    orderby: 'date',
    order: 'desc'
  }; // Disable eslint rule requiring `latestNotes` to be defined below because the next two statements
  // depend on `getNotes` to have been called.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return

  var latestNotes = getNotes(notesQuery);
  var isError = Boolean(getNotesError('getNotes', [notesQuery]));
  var isRequesting = isResolving('getNotes', [notesQuery]);

  if (isError || isRequesting) {
    return null;
  }

  var unreadNotesCount = Object(inbox_panel_utils["a" /* getUnreadNotesCount */])(latestNotes, lastRead);
  return unreadNotesCount > 0;
}
function getLowStockCount() {
  return Object(settings["g" /* getSetting */])('lowStockCount', 0);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(19);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// CONCATENATED MODULE: ./client/header/activity-panel/tab/index.js


/**
 * External dependencies
 */



var tab_Tab = function Tab(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      name = _ref.name,
      unread = _ref.unread,
      selected = _ref.selected,
      isPanelOpen = _ref.isPanelOpen,
      onTabClick = _ref.onTabClick;
  var className = classnames_default()('woocommerce-layout__activity-panel-tab', {
    'is-active': isPanelOpen && selected,
    'has-unread': unread
  });
  var tabKey = "activity-panel-tab-".concat(name);
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    role: "tab",
    className: className,
    "aria-selected": selected,
    "aria-controls": "activity-panel-".concat(name),
    key: tabKey,
    id: tabKey,
    onClick: function onClick() {
      onTabClick(name);
    }
  }, icon, title, ' ', unread && Object(external_this_wp_element_["createElement"])("span", {
    className: "screen-reader-text"
  }, Object(external_this_wp_i18n_["__"])('unread activity', 'woocommerce-admin')));
};
// CONCATENATED MODULE: ./client/header/activity-panel/tabs/index.js




/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


var tabs_Tabs = function Tabs(_ref) {
  var tabs = _ref.tabs,
      _onTabClick = _ref.onTabClick,
      selectedTabName = _ref.selectedTab,
      _ref$tabOpen = _ref.tabOpen,
      tabOpen = _ref$tabOpen === void 0 ? false : _ref$tabOpen;

  var _useState = Object(external_this_wp_element_["useState"])({
    tabOpen: tabOpen,
    currentTab: selectedTabName
  }),
      _useState2 = slicedToArray_default()(_useState, 2),
      _useState2$ = _useState2[0],
      tabIsOpenState = _useState2$.tabOpen,
      currentTab = _useState2$.currentTab,
      setTabState = _useState2[1]; // Keep state synced with props


  Object(external_this_wp_element_["useEffect"])(function () {
    setTabState({
      tabOpen: tabOpen,
      currentTab: selectedTabName
    });
  }, [tabOpen, selectedTabName]);
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["NavigableMenu"], {
    role: "tablist",
    orientation: "horizontal",
    className: "woocommerce-layout__activity-panel-tabs"
  }, tabs && tabs.map(function (tab, i) {
    if (tab.component) {
      var Comp = tab.component,
          options = tab.options;
      return Object(external_this_wp_element_["createElement"])(Comp, extends_default()({
        key: i
      }, options));
    }

    return Object(external_this_wp_element_["createElement"])(tab_Tab, extends_default()({
      key: i,
      index: i,
      isPanelOpen: tabIsOpenState,
      selected: currentTab === tab.name
    }, tab, {
      onTabClick: function onTabClick() {
        var isTabOpen = currentTab === tab.name || currentTab === '' ? !tabIsOpenState : true; // If a panel is being opened, or if an existing panel is already open and a different one is being opened, record a track.

        if (!isTabOpen || currentTab !== tab.name) {
          Object(external_this_wc_tracks_["recordEvent"])('activity_panel_open', {
            tab: tab.name
          });
        }

        setTabState({
          tabOpen: isTabOpen,
          currentTab: tab.name
        });

        _onTabClick(tab, isTabOpen);
      }
    }));
  }));
};
// CONCATENATED MODULE: ./client/header/activity-panel/setup-progress.js

var setup_progress_SetupProgress = function SetupProgress() {
  return Object(external_this_wp_element_["createElement"])("svg", {
    className: "woocommerce-layout__activity-panel-tab-icon setup-progress",
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_this_wp_element_["createElement"])("path", {
    d: "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z",
    stroke: "#DCDCDE",
    strokeWidth: "2"
  }), Object(external_this_wp_element_["createElement"])("path", {
    d: "M4 12V12C4 16.4183 7.58172 20 12 20V20C16.4183 20 20 16.4183 20 12V12C20 7.58172 16.4183 4 12 4V4",
    strokeWidth: "2",
    strokeLinecap: "round"
  }));
};
// CONCATENATED MODULE: ./client/header/activity-panel/display-options/icons/display.js


/**
 * External dependencies
 */

var display_DisplayIcon = function DisplayIcon() {
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])("svg", {
    className: "woocommerce-layout__activity-panel-tab-icon",
    width: "24",
    height: "24",
    viewBox: "3 3 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_this_wp_element_["createElement"])("path", {
    d: "M13.8053 15.3982C13.8053 15.7965 13.4867 16.1947 13.0089 16.1947H6.79646C6.55752 16.1947 6.39823 16.115 6.23894 15.9558C6.07965 15.7965 6 15.6372 6 15.3982V6.79646C6 6.63717 6.15929 6.39823 6.23894 6.23894C6.39823 6.07965 6.55752 6 6.79646 6H13.0089C13.4071 6 13.8053 6.31858 13.8053 6.79646V15.3982Z",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), Object(external_this_wp_element_["createElement"])("path", {
    d: "M23.9203 10.6195C23.9203 11.0177 23.6017 11.4159 23.1238 11.4159H16.9115C16.6725 11.4159 16.5132 11.3363 16.3539 11.177C16.1946 11.0177 16.115 10.8584 16.115 10.6195V6.79646C16.115 6.39823 16.4336 6 16.9115 6H23.1238C23.5221 6 23.9203 6.31858 23.9203 6.79646V10.6195Z",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), Object(external_this_wp_element_["createElement"])("path", {
    d: "M13.8053 23.2035C13.8053 23.4424 13.7257 23.6017 13.5664 23.761C13.4071 23.9203 13.2478 23.9999 13.0089 23.9999H6.79646C6.39823 23.9999 6 23.6813 6 23.2035V19.3804C6 19.1415 6.07965 18.9822 6.23894 18.8229C6.39823 18.6636 6.55752 18.584 6.79646 18.584H13.0089C13.4071 18.584 13.8053 18.9026 13.8053 19.3804V23.2035Z",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), Object(external_this_wp_element_["createElement"])("path", {
    d: "M16.9912 23.9999C16.7522 23.9999 16.5929 23.9202 16.4336 23.7609C16.2743 23.6016 16.1947 23.4423 16.1947 23.2034V14.6016C16.1947 14.3627 16.2743 14.2034 16.4336 14.0441C16.5929 13.8848 16.7522 13.8052 16.9912 13.8052H23.2036C23.4425 13.8052 23.6018 13.8848 23.7611 14.0441C23.9204 14.2034 24 14.3627 24 14.6016V23.2034C24 23.6016 23.6814 23.9999 23.2036 23.9999H16.9912Z",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), Object(external_this_wp_i18n_["__"])('Display', 'woocommerce-admin'));
};
// CONCATENATED MODULE: ./client/header/activity-panel/display-options/icons/single-column.js

var single_column_SingleColumnIcon = function SingleColumnIcon() {
  return Object(external_this_wp_element_["createElement"])("svg", {
    className: "woocommerce-layout__activity-panel-tab-icon",
    width: "12",
    height: "14",
    viewBox: "0 0 12 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_this_wp_element_["createElement"])("rect", {
    x: "0.5",
    y: "0.5",
    width: "11",
    height: "13",
    strokeWidth: "1"
  }));
};
// CONCATENATED MODULE: ./client/header/activity-panel/display-options/icons/two-columns.js

var two_columns_TwoColumnsIcon = function TwoColumnsIcon() {
  return Object(external_this_wp_element_["createElement"])("svg", {
    className: "woocommerce-layout__activity-panel-tab-icon",
    width: "18",
    height: "14",
    viewBox: "0 0 18 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_this_wp_element_["createElement"])("rect", {
    x: "0.5",
    y: "0.5",
    width: "7",
    height: "13",
    strokeWidth: "1"
  }), Object(external_this_wp_element_["createElement"])("rect", {
    x: "9.5",
    y: "0.5",
    width: "7",
    height: "13",
    strokeWidth: "1"
  }));
};
// CONCATENATED MODULE: ./client/header/activity-panel/display-options/index.js


/**
 * External dependencies
 */





/**
 * Internal dependencies
 */




var LAYOUTS = [{
  value: 'single_column',
  label: Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(single_column_SingleColumnIcon, null), Object(external_this_wp_i18n_["__"])('Single column', 'woocommerce-admin'))
}, {
  value: 'two_columns',
  label: Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(two_columns_TwoColumnsIcon, null), Object(external_this_wp_i18n_["__"])('Two columns', 'woocommerce-admin'))
}];
var display_options_DisplayOptions = function DisplayOptions() {
  var defaultHomescreenLayout = Object(external_this_wp_data_["useSelect"])(function (select) {
    var _select = select(external_this_wc_data_["OPTIONS_STORE_NAME"]),
        getOption = _select.getOption;

    return getOption('woocommerce_default_homepage_layout') || 'single_column';
  });

  var _useUserPreferences = Object(external_this_wc_data_["useUserPreferences"])(),
      updateUserPreferences = _useUserPreferences.updateUserPreferences,
      layout = _useUserPreferences.homepage_layout;

  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["DropdownMenu"], {
    icon: Object(external_this_wp_element_["createElement"])(display_DisplayIcon, null)
    /* translators: button label text should, if possible, be under 16 characters. */
    ,
    label: Object(external_this_wp_i18n_["__"])('Display options', 'woocommerce-admin'),
    toggleProps: {
      className: 'woocommerce-layout__activity-panel-tab display-options',
      onClick: function onClick() {
        return Object(external_this_wc_tracks_["recordEvent"])('homescreen_display_click');
      }
    },
    popoverProps: {
      className: 'woocommerce-layout__activity-panel-popover'
    }
  }, function (_ref) {
    var onClose = _ref.onClose;
    return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["MenuGroup"], {
      className: "woocommerce-layout__homescreen-display-options",
      label: Object(external_this_wp_i18n_["__"])('Layout', 'woocommerce-admin')
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["MenuItemsChoice"], {
      choices: LAYOUTS,
      onSelect: function onSelect(newLayout) {
        updateUserPreferences({
          homepage_layout: newLayout
        });
        onClose();
        Object(external_this_wc_tracks_["recordEvent"])('homescreen_display_option', {
          display_option: newLayout
        });
      },
      value: layout || defaultHomescreenLayout
    }));
  });
};
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/close.js


/**
 * WordPress dependencies
 */

var close_close = Object(external_this_wp_element_["createElement"])(svg["b" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["a" /* Path */], {
  d: "M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"
}));
/* harmony default export */ var library_close = (close_close);
//# sourceMappingURL=close.js.map
// EXTERNAL MODULE: ./client/header/activity-panel/highlight-tooltip/style.scss
var highlight_tooltip_style = __webpack_require__(303);

// CONCATENATED MODULE: ./client/header/activity-panel/highlight-tooltip/index.js



/**
 * External dependencies
 */






/**
 * Internal dependencies
 */


var SHOW_CLASS = 'highlight-tooltip__show';

function HighlightTooltip(_ref) {
  var title = _ref.title,
      closeButtonText = _ref.closeButtonText,
      content = _ref.content,
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? true : _ref$show,
      id = _ref.id,
      onClose = _ref.onClose,
      delay = _ref.delay,
      _ref$onShow = _ref.onShow,
      onShow = _ref$onShow === void 0 ? external_lodash_["noop"] : _ref$onShow;

  var _useState = Object(external_this_wp_element_["useState"])(delay > 0 ? null : show),
      _useState2 = slicedToArray_default()(_useState, 2),
      showHighlight = _useState2[0],
      setShowHighlight = _useState2[1];

  var _useState3 = Object(external_this_wp_element_["useState"])(null),
      _useState4 = slicedToArray_default()(_useState3, 2),
      node = _useState4[0],
      setNode = _useState4[1];

  Object(external_this_wp_element_["useEffect"])(function () {
    var element = document.getElementById(id);
    var container;

    if (element && !node) {
      // Add tooltip container
      var parent = element.parentElement;
      container = document.createElement('div');
      container.classList.add('highlight-tooltip__container');
      parent.appendChild(container);
      setNode(container);
    }

    var timeoutId = showTooltip(container);
    return function () {
      if (container) {
        var _parent = container.parentElement;

        _parent.removeChild(container);
      }

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);
  Object(external_this_wp_element_["useEffect"])(function () {
    if (!showHighlight && node) {
      node.classList.remove(SHOW_CLASS);
    }
  }, [showHighlight]);
  Object(external_this_wp_element_["useEffect"])(function () {
    if (show !== showHighlight && showHighlight !== null && node) {
      setShowHighlight(show);

      if (!show) {
        node.classList.remove(SHOW_CLASS);
      } else if (node) {
        showTooltip(node);
      }
    }
  }, [show]);

  var showTooltip = function showTooltip(container) {
    var timeoutId = null;

    if (delay > 0) {
      timeoutId = setTimeout(function () {
        timeoutId = null;

        if (container) {
          container.classList.add(SHOW_CLASS);
        }

        setShowHighlight(show);
        onShow();
      }, delay);
    } else if (!showHighlight) {
      if (container) {
        container.classList.add(SHOW_CLASS);
      }

      setShowHighlight(true);
      onShow();
    }

    return timeoutId;
  };

  var triggerClose = function triggerClose() {
    setShowHighlight(false);

    if (onClose) {
      onClose();
    }
  };

  if (!node) {
    return null;
  }

  return Object(external_this_wp_element_["createPortal"])(Object(external_this_wp_element_["createElement"])("div", {
    className: "highlight-tooltip__portal"
  }, showHighlight ? Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["IsolatedEventContainer"], {
    className: "highlight-tooltip__overlay"
  }), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Popover"], {
    className: "highlight-tooltip__popover",
    noArrow: false,
    focusOnMount: "container"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Card"], {
    size: "medium"
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["CardHeader"], null, title, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    isSmall: true,
    onClick: triggerClose,
    icon: library_close
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["CardBody"], null, content || null), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["CardFooter"], {
    isBorderless: true
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    size: "small",
    isPrimary: true,
    onClick: triggerClose
  }, closeButtonText || Object(external_this_wp_i18n_["__"])('Close', 'woocommerce-admin')))))) : null), node);
}

HighlightTooltip.propTypes = {
  /**
   * The id of the element it should highlight, should be unique per HighlightTooltip.
   */
  id: prop_types_default.a.string.isRequired,

  /**
   * Title of the popup
   */
  title: prop_types_default.a.string.isRequired,

  /**
   * Text of the close button.
   */
  closeButtonText: prop_types_default.a.string.isRequired,

  /**
   * Content of the popup, can be either text or react element.
   */
  content: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.node]),

  /**
   * If to show the popup, defaults to true.
   */
  show: prop_types_default.a.bool,

  /**
   * Callback for when the user closes the popup.
   */
  onClose: prop_types_default.a.func,

  /**
   * This will delay the popup from appearing by the number of ms.
   */
  delay: prop_types_default.a.number,

  /**
   * A callback for when the tooltip is shown.
   */
  onShow: prop_types_default.a.func
};

// CONCATENATED MODULE: ./client/header/activity-panel/index.js







function activity_panel_createSuper(Derived) { var hasNativeReflectConstruct = activity_panel_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function activity_panel_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */















/**
 * Internal dependencies
 */









var HelpPanel = Object(external_this_wp_element_["lazy"])(function () {
  return Promise.all(/* import() | activity-panels-help */[__webpack_require__.e(53), __webpack_require__.e(6), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, 589));
});
var InboxPanel = Object(external_this_wp_element_["lazy"])(function () {
  return Promise.all(/* import() | activity-panels-inbox */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, 576));
});
var activity_panel_ActivityPanel = /*#__PURE__*/function (_Component) {
  inherits_default()(ActivityPanel, _Component);

  var _super = activity_panel_createSuper(ActivityPanel);

  function ActivityPanel(props) {
    var _this;

    classCallCheck_default()(this, ActivityPanel);

    _this = _super.call(this, props);
    _this.state = {
      isPanelOpen: false,
      mobileOpen: false,
      currentTab: '',
      isPanelSwitching: false
    };
    return _this;
  }

  createClass_default()(ActivityPanel, [{
    key: "togglePanel",
    value: function togglePanel(_ref, isTabOpen) {
      var tabName = _ref.name;
      this.setState(function (state) {
        var isPanelSwitching = tabName !== state.currentTab && state.currentTab !== '' && isTabOpen && state.isPanelOpen;
        return {
          isPanelOpen: isTabOpen,
          mobileOpen: isTabOpen,
          currentTab: tabName,
          isPanelSwitching: isPanelSwitching
        };
      });
    }
  }, {
    key: "closePanel",
    value: function closePanel() {
      this.setState(function () {
        return {
          isPanelOpen: false,
          currentTab: ''
        };
      });
    }
  }, {
    key: "clearPanel",
    value: function clearPanel() {
      this.setState(function () {
        return {
          isPanelSwitching: false
        };
      });
    } // On smaller screen, the panel buttons are hidden behind a toggle.

  }, {
    key: "toggleMobile",
    value: function toggleMobile() {
      var tabs = this.getTabs();
      this.setState(function (state) {
        return {
          mobileOpen: !state.mobileOpen,
          currentTab: state.mobileOpen ? '' : tabs[0].name,
          isPanelOpen: !state.mobileOpen
        };
      });
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside(event) {
      var isPanelOpen = this.state.isPanelOpen;
      var isClickOnModalOrSnackbar = event.target.closest('.woocommerce-inbox-dismiss-confirmation_modal') || event.target.closest('.components-snackbar__action');

      if (isPanelOpen && !isClickOnModalOrSnackbar) {
        this.closePanel();
      }
    }
  }, {
    key: "isHomescreen",
    value: function isHomescreen() {
      var _this$props$getHistor = this.props.getHistory(),
          location = _this$props$getHistor.location;

      return location.pathname === '/';
    }
  }, {
    key: "isPerformingSetupTask",
    value: function isPerformingSetupTask() {
      var _this$props = this.props,
          requestingTaskListOptions = _this$props.requestingTaskListOptions,
          setupTaskListComplete = _this$props.setupTaskListComplete,
          setupTaskListHidden = _this$props.setupTaskListHidden,
          query = _this$props.query;
      var isPerformingSetupTask = query.task && !query.path && (requestingTaskListOptions === true || setupTaskListHidden === false && setupTaskListComplete === false);
      return isPerformingSetupTask;
    } // @todo Pull in dynamic unread status/count

  }, {
    key: "getTabs",
    value: function getTabs() {
      var _this$props2 = this.props,
          hasUnreadNotes = _this$props2.hasUnreadNotes,
          isEmbedded = _this$props2.isEmbedded,
          setupTaskListComplete = _this$props2.setupTaskListComplete,
          setupTaskListHidden = _this$props2.setupTaskListHidden;
      var isPerformingSetupTask = this.isPerformingSetupTask(); // Don't show the inbox on the Home screen.

      var showInbox = (isEmbedded || !this.isHomescreen()) && !isPerformingSetupTask;
      var showHelp = this.isHomescreen() && !isEmbedded || isPerformingSetupTask;
      var showDisplayOptions = !isEmbedded && this.isHomescreen() && !isPerformingSetupTask;
      var showStoreSetup = !setupTaskListComplete && !setupTaskListHidden && !isPerformingSetupTask && (!this.isHomescreen() || isEmbedded);
      var inbox = showInbox ? {
        name: 'inbox',
        title: Object(external_this_wp_i18n_["__"])('Inbox', 'woocommerce-admin'),
        icon: Object(external_this_wp_element_["createElement"])("i", {
          className: "material-icons-outlined"
        }, "inbox"),
        unread: hasUnreadNotes
      } : null;
      var setup = showStoreSetup ? {
        name: 'setup',
        title: Object(external_this_wp_i18n_["__"])('Store Setup', 'woocommerce-admin'),
        icon: Object(external_this_wp_element_["createElement"])(setup_progress_SetupProgress, null)
      } : null;
      var help = showHelp ? {
        name: 'help',
        title: Object(external_this_wp_i18n_["__"])('Help', 'woocommerce-admin'),
        icon: Object(external_this_wp_element_["createElement"])(build_module_icon["a" /* default */], {
          icon: library_help
        })
      } : null;
      var displayOptions = showDisplayOptions ? {
        component: display_options_DisplayOptions
      } : null;
      return [inbox, setup, displayOptions, help].filter(Boolean);
    }
  }, {
    key: "getPanelContent",
    value: function getPanelContent(tab) {
      var query = this.props.query;
      var task = query.task;

      switch (tab) {
        case 'inbox':
          return Object(external_this_wp_element_["createElement"])(InboxPanel, null);

        case 'help':
          return Object(external_this_wp_element_["createElement"])(HelpPanel, {
            taskName: task
          });

        default:
          return null;
      }
    }
  }, {
    key: "renderPanel",
    value: function renderPanel() {
      var _this2 = this;

      var _this$props3 = this.props,
          updateOptions = _this$props3.updateOptions,
          setupTaskListHidden = _this$props3.setupTaskListHidden;
      var _this$state = this.state,
          isPanelOpen = _this$state.isPanelOpen,
          currentTab = _this$state.currentTab,
          isPanelSwitching = _this$state.isPanelSwitching;
      var tab = Object(external_lodash_["find"])(this.getTabs(), {
        name: currentTab
      });

      if (!tab) {
        return Object(external_this_wp_element_["createElement"])("div", {
          className: "woocommerce-layout__activity-panel-wrapper"
        });
      }

      var clearPanel = function clearPanel() {
        _this2.clearPanel();
      };

      if (currentTab === 'display-options') {
        return null;
      }

      if (currentTab === 'setup') {
        var currentLocation = window.location.href;
        var homescreenLocation = Object(settings["f" /* getAdminLink */])('admin.php?page=wc-admin'); // Don't navigate if we're already on the homescreen, this will cause an infinite loop

        if (currentLocation !== homescreenLocation) {
          // Ensure that if the user is trying to get to the task list they can see it even if
          // it was dismissed.
          if (setupTaskListHidden === 'no') {
            this.redirectToHomeScreen();
          } else {
            updateOptions({
              woocommerce_task_list_hidden: 'no'
            }).then(this.redirectToHomeScreen);
          }
        }

        return null;
      }

      var classNames = classnames_default()('woocommerce-layout__activity-panel-wrapper', {
        'is-open': isPanelOpen,
        'is-switching': isPanelSwitching
      });
      return Object(external_this_wp_element_["createElement"])("div", {
        className: classNames,
        tabIndex: 0,
        role: "tabpanel",
        "aria-label": tab.title,
        onTransitionEnd: clearPanel,
        onAnimationEnd: clearPanel
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-layout__activity-panel-content",
        key: 'activity-panel-' + currentTab,
        id: 'activity-panel-' + currentTab
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Suspense"], {
        fallback: Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Spinner"], null)
      }, this.getPanelContent(currentTab))));
    }
  }, {
    key: "redirectToHomeScreen",
    value: function redirectToHomeScreen() {
      if (Object(utils["f" /* isWCAdmin */])(window.location.href)) {
        Object(external_this_wc_navigation_["getHistory"])().push(Object(external_this_wc_navigation_["getNewPath"])({}, '/', {}));
      } else {
        window.location.href = Object(settings["f" /* getAdminLink */])('admin.php?page=wc-admin');
      }
    }
  }, {
    key: "closedHelpPanelHighlight",
    value: function closedHelpPanelHighlight() {
      var userPreferencesData = this.props.userPreferencesData;
      Object(external_this_wc_tracks_["recordEvent"])('help_tooltip_click');

      if (userPreferencesData && userPreferencesData.updateUserPreferences) {
        userPreferencesData.updateUserPreferences({
          help_panel_highlight_shown: 'yes'
        });
      }
    }
  }, {
    key: "shouldShowHelpTooltip",
    value: function shouldShowHelpTooltip() {
      var _this$props4 = this.props,
          userPreferencesData = _this$props4.userPreferencesData,
          trackedCompletedTasks = _this$props4.trackedCompletedTasks,
          query = _this$props4.query;
      var task = query.task;
      var startedTasks = userPreferencesData && userPreferencesData.task_list_tracked_started_tasks;
      var highlightShown = userPreferencesData && userPreferencesData.help_panel_highlight_shown;

      if (task && highlightShown !== 'yes' && (startedTasks || {})[task] > 1 && !trackedCompletedTasks.includes(task)) {
        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var tabs = this.getTabs();
      var _this$state2 = this.state,
          mobileOpen = _this$state2.mobileOpen,
          currentTab = _this$state2.currentTab,
          isPanelOpen = _this$state2.isPanelOpen;
      var headerId = Object(external_lodash_["uniqueId"])('activity-panel-header_');
      var panelClasses = classnames_default()('woocommerce-layout__activity-panel', {
        'is-mobile-open': this.state.mobileOpen
      });
      var showHelpHighlightTooltip = this.shouldShowHelpTooltip();
      var hasUnread = tabs.some(function (tab) {
        return tab.unread;
      });
      var viewLabel = hasUnread ? Object(external_this_wp_i18n_["__"])('View Activity Panel, you have unread activity', 'woocommerce-admin') : Object(external_this_wp_i18n_["__"])('View Activity Panel', 'woocommerce-admin');
      return Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["H"], {
        id: headerId,
        className: "screen-reader-text"
      }, Object(external_this_wp_i18n_["__"])('Store Activity', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Section"], {
        component: "aside",
        id: "woocommerce-activity-panel",
        "aria-labelledby": headerId
      }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        onClick: function onClick() {
          _this3.toggleMobile();
        },
        label: mobileOpen ? Object(external_this_wp_i18n_["__"])('Close Activity Panel', 'woocommerce-admin') : viewLabel,
        "aria-expanded": mobileOpen,
        className: "woocommerce-layout__activity-panel-mobile-toggle"
      }, mobileOpen ? Object(external_this_wp_element_["createElement"])(cross_small_default.a, null) : Object(external_this_wp_element_["createElement"])(toggle_bubble, {
        hasUnread: hasUnread
      })), Object(external_this_wp_element_["createElement"])("div", {
        className: panelClasses
      }, Object(external_this_wp_element_["createElement"])(tabs_Tabs, {
        tabs: tabs,
        tabOpen: isPanelOpen,
        selectedTab: currentTab,
        onTabClick: function onTabClick(tab, tabOpen) {
          _this3.togglePanel(tab, tabOpen);
        }
      }), this.renderPanel())), showHelpHighlightTooltip ? Object(external_this_wp_element_["createElement"])(HighlightTooltip, {
        delay: 1000,
        title: Object(external_this_wp_i18n_["__"])("We're here for help", 'woocommerce-admin'),
        content: Object(external_this_wp_i18n_["__"])('If you have any questions, feel free to explore the WooCommerce docs listed here.', 'woocommerce-admin'),
        closeButtonText: Object(external_this_wp_i18n_["__"])('Got it', 'woocommerce-admin'),
        id: "activity-panel-tab-help",
        onClose: function onClose() {
          return _this3.closedHelpPanelHighlight();
        },
        onShow: function onShow() {
          return Object(external_this_wc_tracks_["recordEvent"])('help_tooltip_view');
        }
      }) : null);
    }
  }]);

  return ActivityPanel;
}(external_this_wp_element_["Component"]);
activity_panel_ActivityPanel.defaultProps = {
  getHistory: external_this_wc_navigation_["getHistory"]
};
/* harmony default export */ var activity_panel = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var hasUnreadNotes = getUnreadNotes(select);

  var _select = select(external_this_wc_data_["OPTIONS_STORE_NAME"]),
      getOption = _select.getOption,
      isResolving = _select.isResolving;

  var setupTaskListComplete = getOption('woocommerce_task_list_complete') === 'yes';
  var setupTaskListHidden = getOption('woocommerce_task_list_hidden') === 'yes';
  var requestingTaskListOptions = isResolving('getOption', ['woocommerce_task_list_complete']) || isResolving('getOption', ['woocommerce_task_list_hidden']);
  var trackedCompletedTasks = getOption('woocommerce_task_list_tracked_completed_tasks') || [];
  return {
    hasUnreadNotes: hasUnreadNotes,
    requestingTaskListOptions: requestingTaskListOptions,
    setupTaskListComplete: setupTaskListComplete,
    setupTaskListHidden: setupTaskListHidden,
    trackedCompletedTasks: trackedCompletedTasks
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  return {
    updateOptions: dispatch(external_this_wc_data_["OPTIONS_STORE_NAME"]).updateOptions
  };
}), dist_default.a)(activity_panel_ActivityPanel));
// CONCATENATED MODULE: ./client/lib/platform/index.js
var ANDROID_PLATFORM = 'android';
var IOS_PLATFORM = 'ios';
var UNKNOWN_PLATFORM = 'unknown';
/**
 * Provide basic detection of platform based on user agent. This is not
 * a robust check for browser features or the like. You should only use
 * this for non-critical display logic.
 */

var platform = function platform() {
  if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
    return IOS_PLATFORM;
  } else if (/Android/i.test(window.navigator.userAgent)) {
    return ANDROID_PLATFORM;
  }

  return UNKNOWN_PLATFORM;
};
// CONCATENATED MODULE: ./client/mobile-banner/app-icon.js

var app_icon_AppIcon = function AppIcon() {
  return Object(external_this_wp_element_["createElement"])("svg", {
    width: "37",
    height: "37",
    viewBox: "0 0 92 92",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_this_wp_element_["createElement"])("rect", {
    width: "92",
    height: "92",
    rx: "21.3953",
    fill: "#7F54B3"
  }), Object(external_this_wp_element_["createElement"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M72.5937 28.043H19.8094C16.4781 28.0459 13.7783 30.7705 13.7754 34.1324V54.4501C13.7783 57.812 16.4781 60.5366 19.8094 60.5395H44.8229L56.2573 66.9607L53.6672 60.5395H72.599C74.2009 60.5402 75.7374 59.8983 76.8702 58.7552C78.0029 57.612 78.639 56.0614 78.6383 54.4447V34.1324C78.6376 32.5157 78.0002 30.9657 76.8664 29.8235C75.7327 28.6814 74.1956 28.0408 72.5937 28.043ZM19.1057 32.4208C18.4658 32.4324 17.8646 32.7359 17.467 33.2482C17.0888 33.7635 16.9404 34.4175 17.058 35.0502C18.5962 45.0986 20.0338 51.8757 21.371 55.3816C21.8779 56.658 22.4896 57.2703 23.2063 57.2185C24.3075 57.1489 25.6263 55.5968 27.1627 52.5621C27.9964 50.8412 29.2602 48.2662 30.9539 44.837C32.3785 49.88 34.309 53.6787 36.7456 56.2331C37.4291 56.9436 38.1204 57.2748 38.8195 57.2266C39.4185 57.1931 39.953 56.8315 40.217 56.2813C40.4753 55.7358 40.5806 55.1278 40.5211 54.5248C40.3516 52.0703 40.5919 48.667 41.2421 44.3149C41.9081 39.8057 42.7523 36.5818 43.7749 34.6432C43.9822 34.2526 44.0733 33.8087 44.037 33.366C44.0039 32.7587 43.7116 32.1969 43.2374 31.829C42.7745 31.4367 42.1799 31.2446 41.5803 31.2935C40.8334 31.3325 40.1682 31.7885 39.8499 32.4797C38.2331 35.5019 37.0812 40.4109 36.3943 47.2068C35.2823 44.2394 34.4509 41.1703 33.9114 38.0412C33.623 36.4613 32.9037 35.7125 31.7536 35.7946C30.9592 35.8589 30.3063 36.3944 29.7819 37.4012L24.0348 48.5643C23.0997 44.6692 22.2205 39.9289 21.3972 34.3433C21.1997 32.9652 20.4358 32.3244 19.1057 32.4208ZM69.9089 34.6877C71.6969 35.0381 73.2407 36.2 74.1186 37.8559C74.9693 39.3247 75.3946 41.1161 75.3946 43.23C75.4148 45.9567 74.7062 48.6357 73.3477 50.9687C71.7778 53.7023 69.7195 55.0691 67.1727 55.0691C66.6933 55.0668 66.2153 55.0128 65.7467 54.9078C63.9584 54.5581 62.4143 53.396 61.5371 51.7396C60.6864 50.2452 60.261 48.4411 60.261 46.3272C60.2357 43.6127 60.945 40.9454 62.3079 38.6295C63.9023 35.8959 65.9607 34.5291 68.4829 34.5291C68.9623 34.5304 69.4402 34.5836 69.9089 34.6877ZM68.7937 49.4848C69.7707 48.5773 70.4399 47.2269 70.8012 45.4337V45.4419C70.9315 44.7826 70.9959 44.1112 70.9933 43.4382C70.986 42.5849 70.8291 41.74 70.5302 40.9452C70.1443 39.901 69.6304 39.3124 68.9884 39.1793C68.0378 38.9643 67.1239 39.5256 66.2469 40.8632C65.5812 41.8393 65.109 42.9432 64.8577 44.1106C64.7276 44.7708 64.6632 45.4432 64.6657 46.1171C64.6739 46.9677 64.8308 47.8096 65.1287 48.6019C65.5146 49.6388 66.0294 50.2274 66.6731 50.3678C67.3169 50.5081 68.0237 50.2138 68.7937 49.4848ZM57.9079 37.8559C57.0291 36.2008 55.4854 35.0392 53.6976 34.6877C53.2279 34.5837 52.749 34.5306 52.2687 34.5291C49.7443 34.5291 47.6856 35.8959 46.0927 38.6295C44.7295 40.9454 44.0201 43.6127 44.0454 46.3272C44.0454 48.4411 44.4699 50.2452 45.319 51.7396C46.1976 53.3949 47.7414 54.5566 49.5294 54.9078C49.999 55.0126 50.4779 55.0667 50.9582 55.0691C53.5055 55.0691 55.5642 53.7023 57.1343 50.9687C58.4922 48.6355 59.2001 45.9565 59.1789 43.23C59.1789 41.1161 58.7544 39.3247 57.9053 37.8559H57.9079ZM54.5903 45.4337C54.2307 47.2269 53.5614 48.5773 52.5825 49.4848C51.8115 50.2065 51.101 50.5017 50.4589 50.3678C49.8169 50.2338 49.3011 49.6461 48.9169 48.6019C48.6181 47.8097 48.4603 46.9678 48.4511 46.1171C48.4495 45.4431 48.5148 44.7707 48.6459 44.1106C48.8971 42.9432 49.3694 41.8393 50.0353 40.8632C50.9124 39.5256 51.8264 38.9643 52.7773 39.1793C53.4193 39.3124 53.9333 39.901 54.3193 40.9452C54.617 41.7404 54.7739 42.585 54.7824 43.4382C54.785 44.1112 54.7207 44.7826 54.5903 45.4419V45.4337Z",
    fill: "white"
  }));
};
// EXTERNAL MODULE: ./client/mobile-banner/style.scss
var mobile_banner_style = __webpack_require__(305);

// CONCATENATED MODULE: ./client/mobile-banner/constants.js
// The Play Store link is defined as an exported constant mainly for the sake of testing the Mobile App Banner.
// It is nearly impossible to fake navigation in JSDOM 16, so exposing this link for mocking allows us to
// avoid triggering a navigation.
var PLAY_STORE_LINK = 'https://play.google.com/store/apps/details?id=com.woocommerce.android';
var TRACKING_EVENT_NAME = 'wcadmin_mobile_android_banner_click';
// CONCATENATED MODULE: ./client/mobile-banner/index.js



/**
 * External dependencies
 */




/**
 * Internal dependencies
 */





var SHOW_APP_BANNER_MODIFIER_CLASS = 'woocommerce-layout__show-app-banner';
var mobile_banner_MobileAppBanner = function MobileAppBanner(_ref) {
  var onInstall = _ref.onInstall,
      onDismiss = _ref.onDismiss;
  Object(external_this_wp_element_["useEffect"])(function () {
    var layout = document.getElementsByClassName('woocommerce-layout')[0];

    if (platform() === ANDROID_PLATFORM) {
      if (layout) {
        // This is a hack to allow the mobile banner to work in the context of the header which is
        // position fixed. This can be refactored away when we move away from the activity panel
        // in future.
        layout.classList.add(SHOW_APP_BANNER_MODIFIER_CLASS);
      }
    }

    return function () {
      if (layout) {
        layout.classList.remove(SHOW_APP_BANNER_MODIFIER_CLASS);
      }
    };
  }, []);

  var _useState = Object(external_this_wp_element_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      isDismissed = _useState2[0],
      setDismissed = _useState2[1]; // On iOS the "Smart App Banner" meta tag is used so only display this on Android.


  if (platform() === ANDROID_PLATFORM && !isDismissed) {
    return Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-mobile-app-banner"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Icon"], {
      icon: "no-alt",
      "data-testid": "dismiss-btn",
      onClick: function onClick() {
        onDismiss();
        setDismissed(true);
        Object(external_this_wc_tracks_["recordEvent"])(TRACKING_EVENT_NAME, {
          action: 'dismiss'
        });
      }
    }), Object(external_this_wp_element_["createElement"])(app_icon_AppIcon, null), Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-mobile-app-banner__description"
    }, Object(external_this_wp_element_["createElement"])("p", {
      className: "woocommerce-mobile-app-banner__description__text"
    }, Object(external_this_wp_i18n_["__"])('Run your store from anywhere', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])("p", {
      className: "woocommerce-mobile-app-banner__description__text"
    }, Object(external_this_wp_i18n_["__"])('Download the WooCommerce app', 'woocommerce-admin'))), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
      href: PLAY_STORE_LINK,
      isSecondary: true,
      onClick: function onClick() {
        onInstall();
        setDismissed(true);
        Object(external_this_wc_tracks_["recordEvent"])(TRACKING_EVENT_NAME, {
          action: 'install'
        });
      }
    }, Object(external_this_wp_i18n_["__"])('Install', 'woocommerce-admin')));
  }

  return null;
};
// EXTERNAL MODULE: ./client/hooks/useIsScrolled.js
var useIsScrolled = __webpack_require__(138);

// CONCATENATED MODULE: ./client/header/index.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */







/**
 * Internal dependencies
 */





var header_Header = function Header(_ref) {
  var sections = _ref.sections,
      _ref$isEmbedded = _ref.isEmbedded,
      isEmbedded = _ref$isEmbedded === void 0 ? false : _ref$isEmbedded,
      query = _ref.query;
  var headerElement = Object(external_this_wp_element_["useRef"])(null);
  var siteTitle = Object(settings["g" /* getSetting */])('siteTitle', '');
  var pageTitle = sections.slice(-1)[0];
  var isScrolled = Object(useIsScrolled["a" /* default */])();

  var _useUserPreferences = Object(external_this_wc_data_["useUserPreferences"])(),
      updateUserPreferences = _useUserPreferences.updateUserPreferences,
      userData = objectWithoutProperties_default()(_useUserPreferences, ["updateUserPreferences"]);

  var isModalDismissed = userData.android_app_banner_dismissed === 'yes';
  var className = classnames_default()('woocommerce-layout__header', {
    'is-scrolled': isScrolled
  });
  Object(external_this_wp_element_["useEffect"])(function () {
    if (!isEmbedded) {
      var documentTitle = sections.map(function (section) {
        return Array.isArray(section) ? section[1] : section;
      }).reverse().join(' &lsaquo; ');
      var decodedTitle = Object(external_this_wp_htmlEntities_["decodeEntities"])(Object(external_this_wp_i18n_["sprintf"])(
      /* translators: 1: document title. 2: page title */
      Object(external_this_wp_i18n_["__"])('%1$s &lsaquo; %2$s &#8212; WooCommerce', 'woocommerce-admin'), documentTitle, siteTitle));

      if (document.title !== decodedTitle) {
        document.title = decodedTitle;
      }
    }
  }, [isEmbedded, sections, siteTitle]);

  var dismissHandler = function dismissHandler() {
    updateUserPreferences({
      android_app_banner_dismissed: 'yes'
    });
  };

  return Object(external_this_wp_element_["createElement"])("div", {
    className: className,
    ref: headerElement
  }, !isModalDismissed && Object(external_this_wp_element_["createElement"])(mobile_banner_MobileAppBanner, {
    onDismiss: dismissHandler,
    onInstall: dismissHandler
  }), Object(external_this_wp_element_["createElement"])(build_module["f" /* Text */], {
    className: "woocommerce-layout__header-heading",
    as: "h1",
    variant: "subtitle.small"
  }, Object(external_this_wp_htmlEntities_["decodeEntities"])(pageTitle)), window.wcAdminFeatures['activity-panels'] && Object(external_this_wp_element_["createElement"])(activity_panel, {
    isEmbedded: isEmbedded,
    query: query,
    userPreferencesData: _objectSpread(_objectSpread({}, userData), {}, {
      updateUserPreferences: updateUserPreferences
    })
  }));
};
// CONCATENATED MODULE: ./client/layout/notices.js







function notices_createSuper(Derived) { var hasNativeReflectConstruct = notices_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function notices_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */


var notices_Notices = /*#__PURE__*/function (_Component) {
  inherits_default()(Notices, _Component);

  var _super = notices_createSuper(Notices);

  function Notices() {
    classCallCheck_default()(this, Notices);

    return _super.apply(this, arguments);
  }

  createClass_default()(Notices, [{
    key: "render",
    value: function render() {
      return Object(external_this_wp_element_["createElement"])("div", {
        id: "woocommerce-layout__notice-list",
        className: "woocommerce-layout__notice-list"
      });
    }
  }]);

  return Notices;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var layout_notices = (notices_Notices);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(8);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(43);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/react-spring/web.cjs.js
var web_cjs = __webpack_require__(180);

// EXTERNAL MODULE: ./client/layout/transient-notices/snackbar/index.js
var snackbar = __webpack_require__(277);

// CONCATENATED MODULE: ./client/layout/transient-notices/snackbar/list.js






/**
 * External dependencies
 */





/**
 * Internal dependencies
 */


/**
 * Renders a list of notices.
 *
 * @param  {Object}   $0           Props passed to the component.
 * @param  {Array}    $0.notices   Array of notices to render.
 * @param  {Function} $0.onRemove  Function called when a notice should be removed / dismissed.
 * @param  {Function} $0.onRemove2 Function called when a notice should be removed / dismissed.
 * @param  {Object}   $0.className Name of the class used by the component.
 * @param  {Object}   $0.children  Array of children to be rendered inside the notice list.
 * @return {Object}                The rendered notices list.
 */

function SnackbarList(_ref) {
  var notices = _ref.notices,
      className = _ref.className,
      children = _ref.children,
      _ref$onRemove = _ref.onRemove,
      onRemove = _ref$onRemove === void 0 ? external_lodash_["noop"] : _ref$onRemove,
      _ref$onRemove2 = _ref.onRemove2,
      onRemove2 = _ref$onRemove2 === void 0 ? external_lodash_["noop"] : _ref$onRemove2;
  var isReducedMotion = Object(external_this_wp_compose_["useReducedMotion"])();

  var _useState = Object(external_this_wp_element_["useState"])(function () {
    return new WeakMap();
  }),
      _useState2 = slicedToArray_default()(_useState, 1),
      refMap = _useState2[0];

  var transitions = Object(web_cjs["useTransition"])(notices, function (notice) {
    return notice.id;
  }, {
    from: {
      opacity: 0,
      height: 0
    },
    enter: function enter(item) {
      return /*#__PURE__*/function () {
        var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(next) {
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return next({
                    opacity: 1,
                    height: refMap.get(item).offsetHeight
                  });

                case 2:
                  return _context.abrupt("return", _context.sent);

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }();
    },
    leave: function leave() {
      return /*#__PURE__*/function () {
        var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(next) {
          return regenerator_default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return next({
                    opacity: 0
                  });

                case 2:
                  _context2.next = 4;
                  return next({
                    height: 0
                  });

                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x2) {
          return _ref3.apply(this, arguments);
        };
      }();
    },
    immediate: isReducedMotion
  });
  className = classnames_default()('components-snackbar-list', className);

  var removeNotice = function removeNotice(notice) {
    return function () {
      onRemove(notice.id); // To be removed when we're no longer using core/notices2.

      onRemove2(notice.id);
    };
  };

  return Object(external_this_wp_element_["createElement"])("div", {
    className: className
  }, children, transitions.map(function (_ref4) {
    var notice = _ref4.item,
        key = _ref4.key,
        style = _ref4.props;
    return Object(external_this_wp_element_["createElement"])(web_cjs["animated"].div, {
      key: key,
      style: style
    }, Object(external_this_wp_element_["createElement"])("div", {
      className: "components-snackbar-list__notice-container",
      ref: function ref(_ref5) {
        return _ref5 && refMap.set(notice, _ref5);
      }
    }, Object(external_this_wp_element_["createElement"])(snackbar["a" /* default */], extends_default()({}, Object(external_lodash_["omit"])(notice, ['content']), {
      onRemove: removeNotice(notice)
    }), notice.content)));
  }));
}

/* harmony default export */ var list = (SnackbarList);
// EXTERNAL MODULE: ./client/layout/transient-notices/style.scss
var transient_notices_style = __webpack_require__(307);

// CONCATENATED MODULE: ./client/layout/transient-notices/index.js







function transient_notices_createSuper(Derived) { var hasNativeReflectConstruct = transient_notices_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function transient_notices_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */





/**
 * Internal dependencies
 */




var transient_notices_TransientNotices = /*#__PURE__*/function (_Component) {
  inherits_default()(TransientNotices, _Component);

  var _super = transient_notices_createSuper(TransientNotices);

  function TransientNotices() {
    classCallCheck_default()(this, TransientNotices);

    return _super.apply(this, arguments);
  }

  createClass_default()(TransientNotices, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          notices = _this$props.notices,
          onRemove = _this$props.onRemove,
          onRemove2 = _this$props.onRemove2;
      var classes = classnames_default()('woocommerce-transient-notices', 'components-notices__snackbar', className);
      return Object(external_this_wp_element_["createElement"])(list, {
        notices: notices,
        className: classes,
        onRemove: onRemove,
        onRemove2: onRemove2
      });
    }
  }]);

  return TransientNotices;
}(external_this_wp_element_["Component"]);

transient_notices_TransientNotices.propTypes = {
  /**
   * Additional class name to style the component.
   */
  className: prop_types_default.a.string,

  /**
   * Array of notices to be displayed.
   */
  notices: prop_types_default.a.array
};
/* harmony default export */ var transient_notices = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select) {
  // NOTE: This uses core/notices2, if this file is copied back upstream
  // to Gutenberg this needs to be changed back to just core/notices.
  var notices = select('core/notices').getNotices();
  var notices2 = select('core/notices2').getNotices();
  return {
    notices: notices.concat(notices2)
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  return {
    // NOTE: This uses core/notices2, if this file is copied back upstream
    // to Gutenberg this needs to be changed back to core/notices.
    onRemove: dispatch('core/notices').removeNotice,
    onRemove2: dispatch('core/notices2').removeNotice
  };
}))(transient_notices_TransientNotices));
// EXTERNAL MODULE: external {"this":["wp","plugins"]}
var external_this_wp_plugins_ = __webpack_require__(139);

// EXTERNAL MODULE: ./client/navigation/utils.js
var navigation_utils = __webpack_require__(86);

// CONCATENATED MODULE: ./client/layout/navigation.js




function navigation_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function navigation_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { navigation_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { navigation_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */





/**
 * Internal dependencies
 */






var navigation_NavigationPlugin = function NavigationPlugin() {
  var _useState = Object(external_this_wp_element_["useState"])(Object(external_this_wc_navigation_["getPersistedQuery"])()),
      _useState2 = slicedToArray_default()(_useState, 2),
      persistedQuery = _useState2[0],
      setPersistedQuery = _useState2[1];

  var pathIsExcluded = function pathIsExcluded(path) {
    return Object(external_this_wc_navigation_["getQueryExcludedScreens"])().includes(Object(external_this_wc_navigation_["getScreenFromPath"])(path));
  }; // Update the persisted queries when history is updated


  Object(external_this_wp_element_["useEffect"])(function () {
    return Object(navigation_utils["a" /* addHistoryListener */])(function () {
      setTimeout(function () {
        if (pathIsExcluded()) {
          return;
        }

        setPersistedQuery(Object(external_this_wc_navigation_["getPersistedQuery"])());
      }, 0);
    });
  }, []);
  /**
   * If the current page is embedded, stay with the default urls
   * provided by Navigation because the router isn't present to
   * respond to <Link /> component's manipulation of the url.
   */

  if (!Object(utils["f" /* isWCAdmin */])(window.location.href)) {
    return null;
  }

  var reports = Object(get_reports["a" /* default */])().filter(function (item) {
    return item.navArgs;
  });
  var pages = controller_getPages().filter(function (page) {
    return page.navArgs;
  }).map(function (page) {
    if (page.path === '/analytics/settings') {
      return navigation_objectSpread(navigation_objectSpread({}, page), {}, {
        breadcrumbs: [Object(external_this_wp_i18n_["__"])('Analytics', 'woocommerce-admin')]
      });
    }

    return page;
  });
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, pages.map(function (page) {
    return Object(external_this_wp_element_["createElement"])(external_this_wc_navigation_["WooNavigationItem"], {
      item: page.navArgs.id,
      key: page.navArgs.id
    }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Link"], {
      className: "components-button",
      href: Object(external_this_wc_navigation_["getNewPath"])(pathIsExcluded(page.path) ? {} : persistedQuery, page.path, {}),
      type: "wc-admin"
    }, page.breadcrumbs[page.breadcrumbs.length - 1]));
  }), reports.map(function (item) {
    return Object(external_this_wp_element_["createElement"])(external_this_wc_navigation_["WooNavigationItem"], {
      item: item.navArgs.id,
      key: item.navArgs.id
    }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Link"], {
      className: "components-button",
      href: Object(external_this_wc_navigation_["getNewPath"])(pathIsExcluded(item.report) ? {} : persistedQuery, "/analytics/".concat(item.report), {}),
      type: "wc-admin"
    }, item.title));
  }));
};

Object(external_this_wp_plugins_["registerPlugin"])('wc-admin-navigation', {
  render: navigation_NavigationPlugin
});
// CONCATENATED MODULE: ./client/layout/index.js










function layout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function layout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { layout_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { layout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function layout_createSuper(Derived) { var hasNativeReflectConstruct = layout_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function layout_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */












/**
 * Internal dependencies
 */







var StoreAlerts = Object(external_this_wp_element_["lazy"])(function () {
  return Promise.all(/* import() | store-alerts */[__webpack_require__.e(1), __webpack_require__.e(47)]).then(__webpack_require__.bind(null, 597));
});
var WCPayUsageModal = Object(external_this_wp_element_["lazy"])(function () {
  return __webpack_require__.e(/* import() | wcpay-usage-modal */ 51).then(__webpack_require__.bind(null, 524));
});
var layout_PrimaryLayout = /*#__PURE__*/function (_Component) {
  inherits_default()(PrimaryLayout, _Component);

  var _super = layout_createSuper(PrimaryLayout);

  function PrimaryLayout() {
    classCallCheck_default()(this, PrimaryLayout);

    return _super.apply(this, arguments);
  }

  createClass_default()(PrimaryLayout, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-layout__primary",
        id: "woocommerce-layout__primary"
      }, window.wcAdminFeatures['store-alerts'] && Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Suspense"], {
        fallback: Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Spinner"], null)
      }, Object(external_this_wp_element_["createElement"])(StoreAlerts, null)), Object(external_this_wp_element_["createElement"])(layout_notices, null), children);
    }
  }]);

  return PrimaryLayout;
}(external_this_wp_element_["Component"]);

var layout_Layout = /*#__PURE__*/function (_Component2) {
  inherits_default()(_Layout, _Component2);

  var _super2 = layout_createSuper(_Layout);

  function _Layout() {
    classCallCheck_default()(this, _Layout);

    return _super2.apply(this, arguments);
  }

  createClass_default()(_Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.recordPageViewTrack();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var previousPath = Object(external_lodash_["get"])(prevProps, 'location.pathname');
      var currentPath = Object(external_lodash_["get"])(this.props, 'location.pathname');

      if (!previousPath || !currentPath) {
        return;
      }

      if (previousPath !== currentPath) {
        this.recordPageViewTrack();
      }
    }
  }, {
    key: "recordPageViewTrack",
    value: function recordPageViewTrack() {
      var _this$props = this.props,
          activePlugins = _this$props.activePlugins,
          installedPlugins = _this$props.installedPlugins,
          isEmbedded = _this$props.isEmbedded,
          isJetpackConnected = _this$props.isJetpackConnected;
      var navigationFlag = {
        has_navigation: !!window.wcNavigation
      };

      if (isEmbedded) {
        var _path = document.location.pathname + document.location.search;

        Object(external_this_wc_tracks_["recordPageView"])(_path, layout_objectSpread({
          is_embedded: true
        }, navigationFlag));
        return;
      }

      var pathname = Object(external_lodash_["get"])(this.props, 'location.pathname');

      if (!pathname) {
        return;
      } // Remove leading slash, and camel case remaining pathname


      var path = pathname.substring(1).replace(/\//g, '_'); // When pathname is `/` we are on the home screen.

      if (path.length === 0) {
        path = 'home_screen';
      }

      Object(external_this_wc_tracks_["recordPageView"])(path, layout_objectSpread({
        jetpack_installed: installedPlugins.includes('jetpack'),
        jetpack_active: activePlugins.includes('jetpack'),
        jetpack_connected: isJetpackConnected
      }, navigationFlag));
    }
  }, {
    key: "getQuery",
    value: function getQuery(searchString) {
      if (!searchString) {
        return {};
      }

      var search = searchString.substring(1);
      return Object(lib["parse"])(search);
    }
  }, {
    key: "isWCPaySettingsPage",
    value: function isWCPaySettingsPage() {
      var _getQuery = Object(external_this_wc_navigation_["getQuery"])(),
          page = _getQuery.page,
          section = _getQuery.section,
          tab = _getQuery.tab;

      return page === 'wc-settings' && tab === 'checkout' && section === 'woocommerce_payments';
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isEmbedded = _this$props2.isEmbedded,
          restProps = objectWithoutProperties_default()(_this$props2, ["isEmbedded"]);

      var _this$props3 = this.props,
          location = _this$props3.location,
          page = _this$props3.page;
      var breadcrumbs = page.breadcrumbs;
      var query = this.getQuery(location && location.search);
      return Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-layout"
      }, Object(external_this_wp_element_["createElement"])(header_Header, {
        sections: Object(external_lodash_["isFunction"])(breadcrumbs) ? breadcrumbs(this.props) : breadcrumbs,
        isEmbedded: isEmbedded,
        query: query
      }), Object(external_this_wp_element_["createElement"])(transient_notices, null), !isEmbedded && Object(external_this_wp_element_["createElement"])(layout_PrimaryLayout, null, Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-layout__main"
      }, Object(external_this_wp_element_["createElement"])(controller_Controller, extends_default()({}, restProps, {
        query: query
      })))), isEmbedded && this.isWCPaySettingsPage() && Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Suspense"], {
        fallback: null
      }, Object(external_this_wp_element_["createElement"])(WCPayUsageModal, null)));
    }
  }]);

  return _Layout;
}(external_this_wp_element_["Component"]);

layout_Layout.propTypes = {
  isEmbedded: prop_types_default.a.bool,
  page: prop_types_default.a.shape({
    container: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.object // Support React.lazy
    ]),
    path: prop_types_default.a.string,
    breadcrumbs: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.arrayOf(prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.string), prop_types_default.a.string]))]).isRequired,
    wpOpenMenu: prop_types_default.a.string
  }).isRequired
};
var Layout = Object(external_this_wp_compose_["compose"])(Object(external_this_wc_data_["withPluginsHydration"])(layout_objectSpread(layout_objectSpread({}, window.wcSettings.plugins || {}), {}, {
  jetpackStatus: window.wcSettings.dataEndpoints && window.wcSettings.dataEndpoints.jetpackStatus || false
})), Object(external_this_wp_data_["withSelect"])(function (select, _ref) {
  var isEmbedded = _ref.isEmbedded;

  // Embedded pages don't send plugin info to Tracks.
  if (isEmbedded) {
    return;
  }

  var _select = select(external_this_wc_data_["PLUGINS_STORE_NAME"]),
      getActivePlugins = _select.getActivePlugins,
      getInstalledPlugins = _select.getInstalledPlugins,
      isJetpackConnected = _select.isJetpackConnected;

  return {
    activePlugins: getActivePlugins(),
    isJetpackConnected: isJetpackConnected(),
    installedPlugins: getInstalledPlugins()
  };
}))(layout_Layout);

var layout_PageLayout = /*#__PURE__*/function (_Component3) {
  inherits_default()(_PageLayout, _Component3);

  var _super3 = layout_createSuper(_PageLayout);

  function _PageLayout() {
    classCallCheck_default()(this, _PageLayout);

    return _super3.apply(this, arguments);
  }

  createClass_default()(_PageLayout, [{
    key: "render",
    value: function render() {
      return Object(external_this_wp_element_["createElement"])(react_router_Router, {
        history: Object(external_this_wc_navigation_["getHistory"])()
      }, Object(external_this_wp_element_["createElement"])(react_router_Switch, null, controller_getPages().map(function (page) {
        return Object(external_this_wp_element_["createElement"])(react_router_Route, {
          key: page.path,
          path: page.path,
          exact: true,
          render: function render(props) {
            return Object(external_this_wp_element_["createElement"])(Layout, extends_default()({
              page: page
            }, props));
          }
        });
      })));
    }
  }]);

  return _PageLayout;
}(external_this_wp_element_["Component"]);

var PageLayout = Object(external_this_wp_compose_["compose"])(window.wcSettings.preloadOptions ? Object(external_this_wc_data_["withOptionsHydration"])(layout_objectSpread({}, window.wcSettings.preloadOptions)) : external_lodash_["identity"])(layout_PageLayout);

var layout_EmbedLayout = function _EmbedLayout() {
  return Object(external_this_wp_element_["createElement"])(Layout, {
    page: {
      breadcrumbs: Object(settings["g" /* getSetting */])('embedBreadcrumbs', [])
    },
    isEmbedded: true
  });
};

var EmbedLayout = Object(external_this_wp_compose_["compose"])(window.wcSettings.preloadOptions ? Object(external_this_wc_data_["withOptionsHydration"])(layout_objectSpread({}, window.wcSettings.preloadOptions)) : external_lodash_["identity"])(layout_EmbedLayout);

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

(function() { module.exports = this["wc"]["number"]; }());

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ 16:
/***/ (function(module, exports) {

(function() { module.exports = this["moment"]; }());

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["dataControls"]; }());

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _extends = _interopDefault(__webpack_require__(24));
var _objectWithoutPropertiesLoose = _interopDefault(__webpack_require__(96));
var React = __webpack_require__(10);
var React__default = _interopDefault(React);
var _inheritsLoose = _interopDefault(__webpack_require__(306));
var _assertThisInitialized = _interopDefault(__webpack_require__(9));

var is = {
  arr: Array.isArray,
  obj: function obj(a) {
    return Object.prototype.toString.call(a) === '[object Object]';
  },
  fun: function fun(a) {
    return typeof a === 'function';
  },
  str: function str(a) {
    return typeof a === 'string';
  },
  num: function num(a) {
    return typeof a === 'number';
  },
  und: function und(a) {
    return a === void 0;
  },
  nul: function nul(a) {
    return a === null;
  },
  set: function set(a) {
    return a instanceof Set;
  },
  map: function map(a) {
    return a instanceof Map;
  },
  equ: function equ(a, b) {
    if (typeof a !== typeof b) return false;
    if (is.str(a) || is.num(a)) return a === b;
    if (is.obj(a) && is.obj(b) && Object.keys(a).length + Object.keys(b).length === 0) return true;
    var i;

    for (i in a) {
      if (!(i in b)) return false;
    }

    for (i in b) {
      if (a[i] !== b[i]) return false;
    }

    return is.und(i) ? a === b : true;
  }
};
function merge(target, lowercase) {
  if (lowercase === void 0) {
    lowercase = true;
  }

  return function (object) {
    return (is.arr(object) ? object : Object.keys(object)).reduce(function (acc, element) {
      var key = lowercase ? element[0].toLowerCase() + element.substring(1) : element;
      acc[key] = target(key);
      return acc;
    }, target);
  };
}
function useForceUpdate() {
  var _useState = React.useState(false),
      f = _useState[1];

  var forceUpdate = React.useCallback(function () {
    return f(function (v) {
      return !v;
    });
  }, []);
  return forceUpdate;
}
function withDefault(value, defaultValue) {
  return is.und(value) || is.nul(value) ? defaultValue : value;
}
function toArray(a) {
  return !is.und(a) ? is.arr(a) ? a : [a] : [];
}
function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return is.fun(obj) ? obj.apply(void 0, args) : obj;
}

function getForwardProps(props) {
  var to = props.to,
      from = props.from,
      config = props.config,
      onStart = props.onStart,
      onRest = props.onRest,
      onFrame = props.onFrame,
      children = props.children,
      reset = props.reset,
      reverse = props.reverse,
      force = props.force,
      immediate = props.immediate,
      delay = props.delay,
      attach = props.attach,
      destroyed = props.destroyed,
      interpolateTo = props.interpolateTo,
      ref = props.ref,
      lazy = props.lazy,
      forward = _objectWithoutPropertiesLoose(props, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);

  return forward;
}

function interpolateTo(props) {
  var forward = getForwardProps(props);
  if (is.und(forward)) return _extends({
    to: forward
  }, props);
  var rest = Object.keys(props).reduce(function (a, k) {
    var _extends2;

    return !is.und(forward[k]) ? a : _extends({}, a, (_extends2 = {}, _extends2[k] = props[k], _extends2));
  }, {});
  return _extends({
    to: forward
  }, rest);
}
function handleRef(ref, forward) {
  if (forward) {
    // If it's a function, assume it's a ref callback
    if (is.fun(forward)) forward(ref);else if (is.obj(forward)) {
      forward.current = ref;
    }
  }

  return ref;
}

var Animated =
/*#__PURE__*/
function () {
  function Animated() {
    this.payload = void 0;
    this.children = [];
  }

  var _proto = Animated.prototype;

  _proto.getAnimatedValue = function getAnimatedValue() {
    return this.getValue();
  };

  _proto.getPayload = function getPayload() {
    return this.payload || this;
  };

  _proto.attach = function attach() {};

  _proto.detach = function detach() {};

  _proto.getChildren = function getChildren() {
    return this.children;
  };

  _proto.addChild = function addChild(child) {
    if (this.children.length === 0) this.attach();
    this.children.push(child);
  };

  _proto.removeChild = function removeChild(child) {
    var index = this.children.indexOf(child);
    this.children.splice(index, 1);
    if (this.children.length === 0) this.detach();
  };

  return Animated;
}();
var AnimatedArray =
/*#__PURE__*/
function (_Animated) {
  _inheritsLoose(AnimatedArray, _Animated);

  function AnimatedArray() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Animated.call.apply(_Animated, [this].concat(args)) || this;
    _this.payload = [];

    _this.attach = function () {
      return _this.payload.forEach(function (p) {
        return p instanceof Animated && p.addChild(_assertThisInitialized(_this));
      });
    };

    _this.detach = function () {
      return _this.payload.forEach(function (p) {
        return p instanceof Animated && p.removeChild(_assertThisInitialized(_this));
      });
    };

    return _this;
  }

  return AnimatedArray;
}(Animated);
var AnimatedObject =
/*#__PURE__*/
function (_Animated2) {
  _inheritsLoose(AnimatedObject, _Animated2);

  function AnimatedObject() {
    var _this2;

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this2 = _Animated2.call.apply(_Animated2, [this].concat(args)) || this;
    _this2.payload = {};

    _this2.attach = function () {
      return Object.values(_this2.payload).forEach(function (s) {
        return s instanceof Animated && s.addChild(_assertThisInitialized(_this2));
      });
    };

    _this2.detach = function () {
      return Object.values(_this2.payload).forEach(function (s) {
        return s instanceof Animated && s.removeChild(_assertThisInitialized(_this2));
      });
    };

    return _this2;
  }

  var _proto2 = AnimatedObject.prototype;

  _proto2.getValue = function getValue(animated) {
    if (animated === void 0) {
      animated = false;
    }

    var payload = {};

    for (var _key4 in this.payload) {
      var value = this.payload[_key4];
      if (animated && !(value instanceof Animated)) continue;
      payload[_key4] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
    }

    return payload;
  };

  _proto2.getAnimatedValue = function getAnimatedValue() {
    return this.getValue(true);
  };

  return AnimatedObject;
}(Animated);

var applyAnimatedValues;
function injectApplyAnimatedValues(fn, transform) {
  applyAnimatedValues = {
    fn: fn,
    transform: transform
  };
}
var colorNames;
function injectColorNames(names) {
  colorNames = names;
}
var requestFrame = function requestFrame(cb) {
  return typeof window !== 'undefined' ? window.requestAnimationFrame(cb) : -1;
};
var cancelFrame = function cancelFrame(id) {
  typeof window !== 'undefined' && window.cancelAnimationFrame(id);
};
function injectFrame(raf, caf) {
  requestFrame = raf;
  cancelFrame = caf;
}
var interpolation;
function injectStringInterpolator(fn) {
  interpolation = fn;
}
var now = function now() {
  return Date.now();
};
function injectNow(nowFn) {
  now = nowFn;
}
var defaultElement;
function injectDefaultElement(el) {
  defaultElement = el;
}
var animatedApi = function animatedApi(node) {
  return node.current;
};
function injectAnimatedApi(fn) {
  animatedApi = fn;
}
var createAnimatedStyle;
function injectCreateAnimatedStyle(factory) {
  createAnimatedStyle = factory;
}
var manualFrameloop;
function injectManualFrameloop(callback) {
  manualFrameloop = callback;
}

var Globals = /*#__PURE__*/Object.freeze({
  get applyAnimatedValues () { return applyAnimatedValues; },
  injectApplyAnimatedValues: injectApplyAnimatedValues,
  get colorNames () { return colorNames; },
  injectColorNames: injectColorNames,
  get requestFrame () { return requestFrame; },
  get cancelFrame () { return cancelFrame; },
  injectFrame: injectFrame,
  get interpolation () { return interpolation; },
  injectStringInterpolator: injectStringInterpolator,
  get now () { return now; },
  injectNow: injectNow,
  get defaultElement () { return defaultElement; },
  injectDefaultElement: injectDefaultElement,
  get animatedApi () { return animatedApi; },
  injectAnimatedApi: injectAnimatedApi,
  get createAnimatedStyle () { return createAnimatedStyle; },
  injectCreateAnimatedStyle: injectCreateAnimatedStyle,
  get manualFrameloop () { return manualFrameloop; },
  injectManualFrameloop: injectManualFrameloop
});

/**
 * Wraps the `style` property with `AnimatedStyle`.
 */

var AnimatedProps =
/*#__PURE__*/
function (_AnimatedObject) {
  _inheritsLoose(AnimatedProps, _AnimatedObject);

  function AnimatedProps(props, callback) {
    var _this;

    _this = _AnimatedObject.call(this) || this;
    _this.update = void 0;
    _this.payload = !props.style ? props : _extends({}, props, {
      style: createAnimatedStyle(props.style)
    });
    _this.update = callback;

    _this.attach();

    return _this;
  }

  return AnimatedProps;
}(AnimatedObject);

var isFunctionComponent = function isFunctionComponent(val) {
  return is.fun(val) && !(val.prototype instanceof React__default.Component);
};

var createAnimatedComponent = function createAnimatedComponent(Component) {
  var AnimatedComponent = React.forwardRef(function (props, ref) {
    var forceUpdate = useForceUpdate();
    var mounted = React.useRef(true);
    var propsAnimated = React.useRef(null);
    var node = React.useRef(null);
    var attachProps = React.useCallback(function (props) {
      var oldPropsAnimated = propsAnimated.current;

      var callback = function callback() {
        var didUpdate = false;

        if (node.current) {
          didUpdate = applyAnimatedValues.fn(node.current, propsAnimated.current.getAnimatedValue());
        }

        if (!node.current || didUpdate === false) {
          // If no referenced node has been found, or the update target didn't have a
          // native-responder, then forceUpdate the animation ...
          forceUpdate();
        }
      };

      propsAnimated.current = new AnimatedProps(props, callback);
      oldPropsAnimated && oldPropsAnimated.detach();
    }, []);
    React.useEffect(function () {
      return function () {
        mounted.current = false;
        propsAnimated.current && propsAnimated.current.detach();
      };
    }, []);
    React.useImperativeHandle(ref, function () {
      return animatedApi(node, mounted, forceUpdate);
    });
    attachProps(props);

    var _getValue = propsAnimated.current.getValue(),
        scrollTop = _getValue.scrollTop,
        scrollLeft = _getValue.scrollLeft,
        animatedProps = _objectWithoutPropertiesLoose(_getValue, ["scrollTop", "scrollLeft"]); // Functions cannot have refs, see:
    // See: https://github.com/react-spring/react-spring/issues/569


    var refFn = isFunctionComponent(Component) ? undefined : function (childRef) {
      return node.current = handleRef(childRef, ref);
    };
    return React__default.createElement(Component, _extends({}, animatedProps, {
      ref: refFn
    }));
  });
  return AnimatedComponent;
};

var active = false;
var controllers = new Set();

var update = function update() {
  if (!active) return false;
  var time = now();

  for (var _iterator = controllers, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var controller = _ref;
    var isActive = false;

    for (var configIdx = 0; configIdx < controller.configs.length; configIdx++) {
      var config = controller.configs[configIdx];
      var endOfAnimation = void 0,
          lastTime = void 0;

      for (var valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
        var animation = config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

        if (animation.done) continue;
        var from = config.fromValues[valIdx];
        var to = config.toValues[valIdx];
        var position = animation.lastPosition;
        var isAnimated = to instanceof Animated;
        var velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;
        if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

        if (config.immediate) {
          animation.setValue(to);
          animation.done = true;
          continue;
        } // Break animation when string values are involved


        if (typeof from === 'string' || typeof to === 'string') {
          animation.setValue(to);
          animation.done = true;
          continue;
        }

        if (config.duration !== void 0) {
          /** Duration easing */
          position = from + config.easing((time - animation.startTime) / config.duration) * (to - from);
          endOfAnimation = time >= animation.startTime + config.duration;
        } else if (config.decay) {
          /** Decay easing */
          position = from + velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - animation.startTime)));
          endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
          if (endOfAnimation) to = position;
        } else {
          /** Spring easing */
          lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
          velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity; // If we lost a lot of frames just jump to the end.

          if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

          var numSteps = Math.floor(time - lastTime);

          for (var i = 0; i < numSteps; ++i) {
            var force = -config.tension * (position - to);
            var damping = -config.friction * velocity;
            var acceleration = (force + damping) / config.mass;
            velocity = velocity + acceleration * 1 / 1000;
            position = position + velocity * 1 / 1000;
          } // Conditions for stopping the spring animation


          var isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
          var isVelocity = Math.abs(velocity) <= config.precision;
          var isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
          endOfAnimation = isOvershooting || isVelocity && isDisplacement;
          animation.lastVelocity = velocity;
          animation.lastTime = time;
        } // Trails aren't done until their parents conclude


        if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;

        if (endOfAnimation) {
          // Ensure that we end up with a round value
          if (animation.value !== to) position = to;
          animation.done = true;
        } else isActive = true;

        animation.setValue(position);
        animation.lastPosition = position;
      } // Keep track of updated values only when necessary


      if (controller.props.onFrame) controller.values[config.name] = config.interpolation.getValue();
    } // Update callbacks in the end of the frame


    if (controller.props.onFrame) controller.props.onFrame(controller.values); // Either call onEnd or next frame

    if (!isActive) {
      controllers.delete(controller);
      controller.stop(true);
    }
  } // Loop over as long as there are controllers ...


  if (controllers.size) {
    if (manualFrameloop) manualFrameloop();else requestFrame(update);
  } else {
    active = false;
  }

  return active;
};

var start = function start(controller) {
  if (!controllers.has(controller)) controllers.add(controller);

  if (!active) {
    active = true;
    if (manualFrameloop) requestFrame(manualFrameloop);else requestFrame(update);
  }
};

var stop = function stop(controller) {
  if (controllers.has(controller)) controllers.delete(controller);
};

function createInterpolator(range, output, extrapolate) {
  if (typeof range === 'function') {
    return range;
  }

  if (Array.isArray(range)) {
    return createInterpolator({
      range: range,
      output: output,
      extrapolate: extrapolate
    });
  }

  if (interpolation && typeof range.output[0] === 'string') {
    return interpolation(range);
  }

  var config = range;
  var outputRange = config.output;
  var inputRange = config.range || [0, 1];
  var extrapolateLeft = config.extrapolateLeft || config.extrapolate || 'extend';
  var extrapolateRight = config.extrapolateRight || config.extrapolate || 'extend';

  var easing = config.easing || function (t) {
    return t;
  };

  return function (input) {
    var range = findRange(input, inputRange);
    return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, config.map);
  };
}

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  var result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

  result = easing(result); // Output Range

  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) {
    if (inputRange[i] >= input) break;
  }

  return i - 1;
}

var AnimatedInterpolation =
/*#__PURE__*/
function (_AnimatedArray) {
  _inheritsLoose(AnimatedInterpolation, _AnimatedArray);

  function AnimatedInterpolation(parents, range, output, extrapolate) {
    var _this;

    _this = _AnimatedArray.call(this) || this;
    _this.calc = void 0;
    _this.payload = parents instanceof AnimatedArray && !(parents instanceof AnimatedInterpolation) ? parents.getPayload() : Array.isArray(parents) ? parents : [parents];
    _this.calc = createInterpolator(range, output, extrapolate);
    return _this;
  }

  var _proto = AnimatedInterpolation.prototype;

  _proto.getValue = function getValue() {
    return this.calc.apply(this, this.payload.map(function (value) {
      return value.getValue();
    }));
  };

  _proto.updateConfig = function updateConfig(range, output, extrapolate) {
    this.calc = createInterpolator(range, output, extrapolate);
  };

  _proto.interpolate = function interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  };

  return AnimatedInterpolation;
}(AnimatedArray);

var interpolate$1 = function interpolate(parents, range, output) {
  return parents && new AnimatedInterpolation(parents, range, output);
};

var config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};

/** API
 *  useChain(references, timeSteps, timeFrame)
 */

function useChain(refs, timeSteps, timeFrame) {
  if (timeFrame === void 0) {
    timeFrame = 1000;
  }

  var previous = React.useRef();
  React.useEffect(function () {
    if (is.equ(refs, previous.current)) refs.forEach(function (_ref) {
      var current = _ref.current;
      return current && current.start();
    });else if (timeSteps) {
      refs.forEach(function (_ref2, index) {
        var current = _ref2.current;

        if (current) {
          var ctrls = current.controllers;

          if (ctrls.length) {
            var t = timeFrame * timeSteps[index];
            ctrls.forEach(function (ctrl) {
              ctrl.queue = ctrl.queue.map(function (e) {
                return _extends({}, e, {
                  delay: e.delay + t
                });
              });
              ctrl.start();
            });
          }
        }
      });
    } else refs.reduce(function (q, _ref3, rI) {
      var current = _ref3.current;
      return q = q.then(function () {
        return current.start();
      });
    }, Promise.resolve());
    previous.current = refs;
  });
}

/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an AnimatedValue is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */
function addAnimatedStyles(node, styles) {
  if ('update' in node) {
    styles.add(node);
  } else {
    node.getChildren().forEach(function (child) {
      return addAnimatedStyles(child, styles);
    });
  }
}

var AnimatedValue =
/*#__PURE__*/
function (_Animated) {
  _inheritsLoose(AnimatedValue, _Animated);

  function AnimatedValue(_value) {
    var _this;

    _this = _Animated.call(this) || this;
    _this.animatedStyles = new Set();
    _this.value = void 0;
    _this.startPosition = void 0;
    _this.lastPosition = void 0;
    _this.lastVelocity = void 0;
    _this.startTime = void 0;
    _this.lastTime = void 0;
    _this.done = false;

    _this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      _this.value = value;
      if (flush) _this.flush();
    };

    _this.value = _value;
    _this.startPosition = _value;
    _this.lastPosition = _value;
    return _this;
  }

  var _proto = AnimatedValue.prototype;

  _proto.flush = function flush() {
    if (this.animatedStyles.size === 0) {
      addAnimatedStyles(this, this.animatedStyles);
    }

    this.animatedStyles.forEach(function (animatedStyle) {
      return animatedStyle.update();
    });
  };

  _proto.clearStyles = function clearStyles() {
    this.animatedStyles.clear();
  };

  _proto.getValue = function getValue() {
    return this.value;
  };

  _proto.interpolate = function interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  };

  return AnimatedValue;
}(Animated);

var AnimatedValueArray =
/*#__PURE__*/
function (_AnimatedArray) {
  _inheritsLoose(AnimatedValueArray, _AnimatedArray);

  function AnimatedValueArray(values) {
    var _this;

    _this = _AnimatedArray.call(this) || this;
    _this.payload = values.map(function (n) {
      return new AnimatedValue(n);
    });
    return _this;
  }

  var _proto = AnimatedValueArray.prototype;

  _proto.setValue = function setValue(value, flush) {
    var _this2 = this;

    if (flush === void 0) {
      flush = true;
    }

    if (Array.isArray(value)) {
      if (value.length === this.payload.length) {
        value.forEach(function (v, i) {
          return _this2.payload[i].setValue(v, flush);
        });
      }
    } else {
      this.payload.forEach(function (p) {
        return p.setValue(value, flush);
      });
    }
  };

  _proto.getValue = function getValue() {
    return this.payload.map(function (v) {
      return v.getValue();
    });
  };

  _proto.interpolate = function interpolate(range, output) {
    return new AnimatedInterpolation(this, range, output);
  };

  return AnimatedValueArray;
}(AnimatedArray);

var G = 0;

var Controller =
/*#__PURE__*/
function () {
  function Controller() {
    var _this = this;

    this.id = void 0;
    this.idle = true;
    this.hasChanged = false;
    this.guid = 0;
    this.local = 0;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.listeners = [];
    this.queue = [];
    this.localQueue = void 0;

    this.getValues = function () {
      return _this.interpolations;
    };

    this.id = G++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */


  var _proto = Controller.prototype;

  _proto.update = function update$$1(args) {
    //this._id = n + this.id
    if (!args) return this; // Extract delay and the to-prop from props

    var _ref = interpolateTo(args),
        _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? 0 : _ref$delay,
        to = _ref.to,
        props = _objectWithoutPropertiesLoose(_ref, ["delay", "to"]);

    if (is.arr(to) || is.fun(to)) {
      // If config is either a function or an array queue it up as is
      this.queue.push(_extends({}, props, {
        delay: delay,
        to: to
      }));
    } else if (to) {
      // Otherwise go through each key since it could be delayed individually
      var ops = {};
      Object.entries(to).forEach(function (_ref2) {
        var _to;

        var k = _ref2[0],
            v = _ref2[1];

        // Fetch delay and create an entry, consisting of the to-props, the delay, and basic props
        var entry = _extends({
          to: (_to = {}, _to[k] = v, _to),
          delay: callProp(delay, k)
        }, props);

        var previous = ops[entry.delay] && ops[entry.delay].to;
        ops[entry.delay] = _extends({}, ops[entry.delay], entry, {
          to: _extends({}, previous, entry.to)
        });
      });
      this.queue = Object.values(ops);
    } // Sort queue, so that async calls go last


    this.queue = this.queue.sort(function (a, b) {
      return a.delay - b.delay;
    }); // Diff the reduced props immediately (they'll contain the from-prop and some config)

    this.diff(props);
    return this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */
  ;

  _proto.start = function start$$1(onEnd) {
    var _this2 = this;

    // If a queue is present we must excecute it
    if (this.queue.length) {
      this.idle = false; // Updates can interrupt trailing queues, in that case we just merge values

      if (this.localQueue) {
        this.localQueue.forEach(function (_ref3) {
          var _ref3$from = _ref3.from,
              from = _ref3$from === void 0 ? {} : _ref3$from,
              _ref3$to = _ref3.to,
              to = _ref3$to === void 0 ? {} : _ref3$to;
          if (is.obj(from)) _this2.merged = _extends({}, from, _this2.merged);
          if (is.obj(to)) _this2.merged = _extends({}, _this2.merged, to);
        });
      } // The guid helps us tracking frames, a new queue over an old one means an override
      // We discard async calls in that caseÍ


      var local = this.local = ++this.guid;
      var queue = this.localQueue = this.queue;
      this.queue = []; // Go through each entry and execute it

      queue.forEach(function (_ref4, index) {
        var delay = _ref4.delay,
            props = _objectWithoutPropertiesLoose(_ref4, ["delay"]);

        var cb = function cb(finished) {
          if (index === queue.length - 1 && local === _this2.guid && finished) {
            _this2.idle = true;
            if (_this2.props.onRest) _this2.props.onRest(_this2.merged);
          }

          if (onEnd) onEnd();
        }; // Entries can be delayed, ansyc or immediate


        var async = is.arr(props.to) || is.fun(props.to);

        if (delay) {
          setTimeout(function () {
            if (local === _this2.guid) {
              if (async) _this2.runAsync(props, cb);else _this2.diff(props).start(cb);
            }
          }, delay);
        } else if (async) _this2.runAsync(props, cb);else _this2.diff(props).start(cb);
      });
    } // Otherwise we kick of the frameloop
    else {
        if (is.fun(onEnd)) this.listeners.push(onEnd);
        if (this.props.onStart) this.props.onStart();

        start(this);
      }

    return this;
  };

  _proto.stop = function stop$$1(finished) {
    this.listeners.forEach(function (onEnd) {
      return onEnd(finished);
    });
    this.listeners = [];
    return this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */
  ;

  _proto.pause = function pause(finished) {
    this.stop(true);
    if (finished) stop(this);
    return this;
  };

  _proto.runAsync = function runAsync(_ref5, onEnd) {
    var _this3 = this;

    var delay = _ref5.delay,
        props = _objectWithoutPropertiesLoose(_ref5, ["delay"]);

    var local = this.local; // If "to" is either a function or an array it will be processed async, therefor "to" should be empty right now
    // If the view relies on certain values "from" has to be present

    var queue = Promise.resolve(undefined);

    if (is.arr(props.to)) {
      var _loop = function _loop(i) {
        var index = i;

        var fresh = _extends({}, props, interpolateTo(props.to[index]));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        queue = queue.then(function () {
          //this.stop()
          if (local === _this3.guid) return new Promise(function (r) {
            return _this3.diff(fresh).start(r);
          });
        });
      };

      for (var i = 0; i < props.to.length; i++) {
        _loop(i);
      }
    } else if (is.fun(props.to)) {
      var index = 0;
      var last;
      queue = queue.then(function () {
        return props.to( // next(props)
        function (p) {
          var fresh = _extends({}, props, interpolateTo(p));

          if (is.arr(fresh.config)) fresh.config = fresh.config[index];
          index++; //this.stop()

          if (local === _this3.guid) return last = new Promise(function (r) {
            return _this3.diff(fresh).start(r);
          });
          return;
        }, // cancel()
        function (finished) {
          if (finished === void 0) {
            finished = true;
          }

          return _this3.stop(finished);
        }).then(function () {
          return last;
        });
      });
    }

    queue.then(onEnd);
  };

  _proto.diff = function diff(props) {
    var _this4 = this;

    this.props = _extends({}, this.props, props);
    var _this$props = this.props,
        _this$props$from = _this$props.from,
        from = _this$props$from === void 0 ? {} : _this$props$from,
        _this$props$to = _this$props.to,
        to = _this$props$to === void 0 ? {} : _this$props$to,
        _this$props$config = _this$props.config,
        config = _this$props$config === void 0 ? {} : _this$props$config,
        reverse = _this$props.reverse,
        attach = _this$props.attach,
        reset = _this$props.reset,
        immediate = _this$props.immediate; // Reverse values when requested

    if (reverse) {
      var _ref6 = [to, from];
      from = _ref6[0];
      to = _ref6[1];
    } // This will collect all props that were ever set, reset merged props when necessary


    this.merged = _extends({}, from, this.merged, to);
    this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

    var target = attach && attach(this); // Reduces input { name: value } pairs into animated values

    this.animations = Object.entries(this.merged).reduce(function (acc, _ref7) {
      var name = _ref7[0],
          value = _ref7[1];
      // Issue cached entries, except on reset
      var entry = acc[name] || {}; // Figure out what the value is supposed to be

      var isNumber = is.num(value);
      var isString = is.str(value) && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
      var isArray = is.arr(value);
      var isInterpolation = !isNumber && !isArray && !isString;
      var fromValue = !is.und(from[name]) ? from[name] : value;
      var toValue = isNumber || isArray ? value : isString ? value : 1;
      var toConfig = callProp(config, name);
      if (target) toValue = target.animations[name].parent;
      var parent = entry.parent,
          interpolation$$1 = entry.interpolation,
          toValues = toArray(target ? toValue.getPayload() : toValue),
          animatedValues;
      var newValue = value;
      if (isInterpolation) newValue = interpolation({
        range: [0, 1],
        output: [value, value]
      })(1);
      var currentValue = interpolation$$1 && interpolation$$1.getValue(); // Change detection flags

      var isFirst = is.und(parent);
      var isActive = !isFirst && entry.animatedValues.some(function (v) {
        return !v.done;
      });
      var currentValueDiffersFromGoal = !is.equ(newValue, currentValue);
      var hasNewGoal = !is.equ(newValue, entry.previous);
      var hasNewConfig = !is.equ(toConfig, entry.config); // Change animation props when props indicate a new goal (new value differs from previous one)
      // and current values differ from it. Config changes trigger a new update as well (though probably shouldn't?)

      if (reset || hasNewGoal && currentValueDiffersFromGoal || hasNewConfig) {
        var _extends2;

        // Convert regular values into animated values, ALWAYS re-use if possible
        if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedValueArray(fromValue);else if (isInterpolation) {
          var prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);
          prev = prev !== void 0 && !reset ? prev : fromValue;

          if (entry.parent) {
            parent = entry.parent;
            parent.setValue(0, false);
          } else parent = new AnimatedValue(0);

          var range = {
            output: [prev, value]
          };

          if (entry.interpolation) {
            interpolation$$1 = entry.interpolation;
            entry.interpolation.updateConfig(range);
          } else interpolation$$1 = parent.interpolate(range);
        }
        toValues = toArray(target ? toValue.getPayload() : toValue);
        animatedValues = toArray(parent.getPayload());
        if (reset && !isInterpolation) parent.setValue(fromValue, false);
        _this4.hasChanged = true; // Reset animated values

        animatedValues.forEach(function (value) {
          value.startPosition = value.value;
          value.lastPosition = value.value;
          value.lastVelocity = isActive ? value.lastVelocity : undefined;
          value.lastTime = isActive ? value.lastTime : undefined;
          value.startTime = now();
          value.done = false;
          value.animatedStyles.clear();
        }); // Set immediate values

        if (callProp(immediate, name)) {
          parent.setValue(isInterpolation ? toValue : value, false);
        }

        return _extends({}, acc, (_extends2 = {}, _extends2[name] = _extends({}, entry, {
          name: name,
          parent: parent,
          interpolation: interpolation$$1,
          animatedValues: animatedValues,
          toValues: toValues,
          previous: newValue,
          config: toConfig,
          fromValues: toArray(parent.getValue()),
          immediate: callProp(immediate, name),
          initialVelocity: withDefault(toConfig.velocity, 0),
          clamp: withDefault(toConfig.clamp, false),
          precision: withDefault(toConfig.precision, 0.01),
          tension: withDefault(toConfig.tension, 170),
          friction: withDefault(toConfig.friction, 26),
          mass: withDefault(toConfig.mass, 1),
          duration: toConfig.duration,
          easing: withDefault(toConfig.easing, function (t) {
            return t;
          }),
          decay: toConfig.decay
        }), _extends2));
      } else {
        if (!currentValueDiffersFromGoal) {
          var _extends3;

          // So ... the current target value (newValue) appears to be different from the previous value,
          // which normally constitutes an update, but the actual value (currentValue) matches the target!
          // In order to resolve this without causing an animation update we silently flag the animation as done,
          // which it technically is. Interpolations also needs a config update with their target set to 1.
          if (isInterpolation) {
            parent.setValue(1, false);
            interpolation$$1.updateConfig({
              output: [newValue, newValue]
            });
          }

          parent.done = true;
          _this4.hasChanged = true;
          return _extends({}, acc, (_extends3 = {}, _extends3[name] = _extends({}, acc[name], {
            previous: newValue
          }), _extends3));
        }

        return acc;
      }
    }, this.animations);

    if (this.hasChanged) {
      // Make animations available to frameloop
      this.configs = Object.values(this.animations);
      this.values = {};
      this.interpolations = {};

      for (var key in this.animations) {
        this.interpolations[key] = this.animations[key].interpolation;
        this.values[key] = this.animations[key].interpolation.getValue();
      }
    }

    return this;
  };

  _proto.destroy = function destroy() {
    this.stop();
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.local = 0;
  };

  return Controller;
}();

/** API
 * const props = useSprings(number, [{ ... }, { ... }, ...])
 * const [props, set] = useSprings(number, (i, controller) => ({ ... }))
 */

var useSprings = function useSprings(length, props) {
  var mounted = React.useRef(false);
  var ctrl = React.useRef();
  var isFn = is.fun(props); // The controller maintains the animation values, starts and stops animations

  var _useMemo = React.useMemo(function () {
    // Remove old controllers
    if (ctrl.current) {
      ctrl.current.map(function (c) {
        return c.destroy();
      });
      ctrl.current = undefined;
    }

    var ref;
    return [new Array(length).fill().map(function (_, i) {
      var ctrl = new Controller();
      var newProps = isFn ? callProp(props, i, ctrl) : props[i];
      if (i === 0) ref = newProps.ref;
      ctrl.update(newProps);
      if (!ref) ctrl.start();
      return ctrl;
    }), ref];
  }, [length]),
      controllers = _useMemo[0],
      ref = _useMemo[1];

  ctrl.current = controllers; // The hooks reference api gets defined here ...

  var api = React.useImperativeHandle(ref, function () {
    return {
      start: function start() {
        return Promise.all(ctrl.current.map(function (c) {
          return new Promise(function (r) {
            return c.start(r);
          });
        }));
      },
      stop: function stop(finished) {
        return ctrl.current.forEach(function (c) {
          return c.stop(finished);
        });
      },

      get controllers() {
        return ctrl.current;
      }

    };
  }); // This function updates the controllers

  var updateCtrl = React.useMemo(function () {
    return function (updateProps) {
      return ctrl.current.map(function (c, i) {
        c.update(isFn ? callProp(updateProps, i, c) : updateProps[i]);
        if (!ref) c.start();
      });
    };
  }, [length]); // Update controller if props aren't functional

  React.useEffect(function () {
    if (mounted.current) {
      if (!isFn) updateCtrl(props);
    } else if (!ref) ctrl.current.forEach(function (c) {
      return c.start();
    });
  }); // Update mounted flag and destroy controller on unmount

  React.useEffect(function () {
    return mounted.current = true, function () {
      return ctrl.current.forEach(function (c) {
        return c.destroy();
      });
    };
  }, []); // Return animated props, or, anim-props + the update-setter above

  var propValues = ctrl.current.map(function (c) {
    return c.getValues();
  });
  return isFn ? [propValues, updateCtrl, function (finished) {
    return ctrl.current.forEach(function (c) {
      return c.pause(finished);
    });
  }] : propValues;
};

/** API
 * const props = useSpring({ ... })
 * const [props, set] = useSpring(() => ({ ... }))
 */

var useSpring = function useSpring(props) {
  var isFn = is.fun(props);

  var _useSprings = useSprings(1, isFn ? props : [props]),
      result = _useSprings[0],
      set = _useSprings[1],
      pause = _useSprings[2];

  return isFn ? [result[0], set, pause] : result;
};

/** API
 * const trails = useTrail(number, { ... })
 * const [trails, set] = useTrail(number, () => ({ ... }))
 */

var useTrail = function useTrail(length, props) {
  var mounted = React.useRef(false);
  var isFn = is.fun(props);
  var updateProps = callProp(props);
  var instances = React.useRef();

  var _useSprings = useSprings(length, function (i, ctrl) {
    if (i === 0) instances.current = [];
    instances.current.push(ctrl);
    return _extends({}, updateProps, {
      config: callProp(updateProps.config, i),
      attach: i > 0 && function () {
        return instances.current[i - 1];
      }
    });
  }),
      result = _useSprings[0],
      set = _useSprings[1],
      pause = _useSprings[2]; // Set up function to update controller


  var updateCtrl = React.useMemo(function () {
    return function (props) {
      return set(function (i, ctrl) {
        var last = props.reverse ? i === 0 : length - 1 === i;
        var attachIdx = props.reverse ? i + 1 : i - 1;
        var attachController = instances.current[attachIdx];
        return _extends({}, props, {
          config: callProp(props.config || updateProps.config, i),
          attach: attachController && function () {
            return attachController;
          }
        });
      });
    };
  }, [length, updateProps.reverse]); // Update controller if props aren't functional

  React.useEffect(function () {
    return void (mounted.current && !isFn && updateCtrl(props));
  }); // Update mounted flag and destroy controller on unmount

  React.useEffect(function () {
    return void (mounted.current = true);
  }, []);
  return isFn ? [result, updateCtrl, pause] : result;
};

/** API
 * const transitions = useTransition(items, itemKeys, { ... })
 * const [transitions, update] = useTransition(items, itemKeys, () => ({ ... }))
 */

var guid = 0;
var ENTER = 'enter';
var LEAVE = 'leave';
var UPDATE = 'update';

var mapKeys = function mapKeys(items, keys) {
  return (typeof keys === 'function' ? items.map(keys) : toArray(keys)).map(String);
};

var get = function get(props) {
  var items = props.items,
      _props$keys = props.keys,
      keys = _props$keys === void 0 ? function (item) {
    return item;
  } : _props$keys,
      rest = _objectWithoutPropertiesLoose(props, ["items", "keys"]);

  items = toArray(items !== void 0 ? items : null);
  return _extends({
    items: items,
    keys: mapKeys(items, keys)
  }, rest);
};

function useTransition(input, keyTransform, config) {
  var props = _extends({
    items: input,
    keys: keyTransform || function (i) {
      return i;
    }
  }, config);

  var _get = get(props),
      _get$lazy = _get.lazy,
      lazy = _get$lazy === void 0 ? false : _get$lazy,
      _get$unique = _get.unique,
      _get$reset = _get.reset,
      reset = _get$reset === void 0 ? false : _get$reset,
      enter = _get.enter,
      leave = _get.leave,
      update = _get.update,
      onDestroyed = _get.onDestroyed,
      keys = _get.keys,
      items = _get.items,
      onFrame = _get.onFrame,
      _onRest = _get.onRest,
      onStart = _get.onStart,
      ref = _get.ref,
      extra = _objectWithoutPropertiesLoose(_get, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]);

  var forceUpdate = useForceUpdate();
  var mounted = React.useRef(false);
  var state = React.useRef({
    mounted: false,
    first: true,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!props.ref,
    instances: !mounted.current && new Map(),
    forceUpdate: forceUpdate
  });
  React.useImperativeHandle(props.ref, function () {
    return {
      start: function start() {
        return Promise.all(Array.from(state.current.instances).map(function (_ref) {
          var c = _ref[1];
          return new Promise(function (r) {
            return c.start(r);
          });
        }));
      },
      stop: function stop(finished) {
        return Array.from(state.current.instances).forEach(function (_ref2) {
          var c = _ref2[1];
          return c.stop(finished);
        });
      },

      get controllers() {
        return Array.from(state.current.instances).map(function (_ref3) {
          var c = _ref3[1];
          return c;
        });
      }

    };
  }); // Update state

  state.current = diffItems(state.current, props);

  if (state.current.changed) {
    // Update state
    state.current.transitions.forEach(function (transition) {
      var slot = transition.slot,
          from = transition.from,
          to = transition.to,
          config = transition.config,
          trail = transition.trail,
          key = transition.key,
          item = transition.item;
      if (!state.current.instances.has(key)) state.current.instances.set(key, new Controller()); // update the map object

      var ctrl = state.current.instances.get(key);

      var newProps = _extends({}, extra, {
        to: to,
        from: from,
        config: config,
        ref: ref,
        onRest: function onRest(values) {
          if (state.current.mounted) {
            if (transition.destroyed) {
              // If no ref is given delete destroyed items immediately
              if (!ref && !lazy) cleanUp(state, key);
              if (onDestroyed) onDestroyed(item);
            } // A transition comes to rest once all its springs conclude


            var curInstances = Array.from(state.current.instances);
            var active = curInstances.some(function (_ref4) {
              var c = _ref4[1];
              return !c.idle;
            });
            if (!active && (ref || lazy) && state.current.deleted.length > 0) cleanUp(state);
            if (_onRest) _onRest(item, slot, values);
          }
        },
        onStart: onStart && function () {
          return onStart(item, slot);
        },
        onFrame: onFrame && function (values) {
          return onFrame(item, slot, values);
        },
        delay: trail,
        reset: reset && slot === ENTER // Update controller

      });

      ctrl.update(newProps);
      if (!state.current.paused) ctrl.start();
    });
  }

  React.useEffect(function () {
    state.current.mounted = mounted.current = true;
    return function () {
      state.current.mounted = mounted.current = false;
      Array.from(state.current.instances).map(function (_ref5) {
        var c = _ref5[1];
        return c.destroy();
      });
      state.current.instances.clear();
    };
  }, []);
  return state.current.transitions.map(function (_ref6) {
    var item = _ref6.item,
        slot = _ref6.slot,
        key = _ref6.key;
    return {
      item: item,
      key: key,
      state: slot,
      props: state.current.instances.get(key).getValues()
    };
  });
}

function cleanUp(state, filterKey) {
  var deleted = state.current.deleted;

  var _loop = function _loop() {
    if (_isArray) {
      if (_i >= _iterator.length) return "break";
      _ref8 = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) return "break";
      _ref8 = _i.value;
    }

    var _ref7 = _ref8;
    var key = _ref7.key;

    var filter = function filter(t) {
      return t.key !== key;
    };

    if (is.und(filterKey) || filterKey === key) {
      state.current.instances.delete(key);
      state.current.transitions = state.current.transitions.filter(filter);
      state.current.deleted = state.current.deleted.filter(filter);
    }
  };

  for (var _iterator = deleted, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref8;

    var _ret = _loop();

    if (_ret === "break") break;
  }

  state.current.forceUpdate();
}

function diffItems(_ref9, props) {
  var first = _ref9.first,
      prevProps = _ref9.prevProps,
      state = _objectWithoutPropertiesLoose(_ref9, ["first", "prevProps"]);

  var _get2 = get(props),
      items = _get2.items,
      keys = _get2.keys,
      initial = _get2.initial,
      from = _get2.from,
      enter = _get2.enter,
      leave = _get2.leave,
      update = _get2.update,
      _get2$trail = _get2.trail,
      trail = _get2$trail === void 0 ? 0 : _get2$trail,
      unique = _get2.unique,
      config = _get2.config,
      _get2$order = _get2.order,
      order = _get2$order === void 0 ? [ENTER, LEAVE, UPDATE] : _get2$order;

  var _get3 = get(prevProps),
      _keys = _get3.keys,
      _items = _get3.items;

  var current = _extends({}, state.current);

  var deleted = [].concat(state.deleted); // Compare next keys with current keys

  var currentKeys = Object.keys(current);
  var currentSet = new Set(currentKeys);
  var nextSet = new Set(keys);
  var added = keys.filter(function (item) {
    return !currentSet.has(item);
  });
  var removed = state.transitions.filter(function (item) {
    return !item.destroyed && !nextSet.has(item.originalKey);
  }).map(function (i) {
    return i.originalKey;
  });
  var updated = keys.filter(function (item) {
    return currentSet.has(item);
  });
  var delay = -trail;

  while (order.length) {
    var changeType = order.shift();

    switch (changeType) {
      case ENTER:
        {
          added.forEach(function (key, index) {
            // In unique mode, remove fading out transitions if their key comes in again
            if (unique && deleted.find(function (d) {
              return d.originalKey === key;
            })) deleted = deleted.filter(function (t) {
              return t.originalKey !== key;
            });
            var keyIndex = keys.indexOf(key);
            var item = items[keyIndex];
            var slot = first && initial !== void 0 ? 'initial' : ENTER;
            current[key] = {
              slot: slot,
              originalKey: key,
              key: unique ? String(key) : guid++,
              item: item,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
              to: callProp(enter, item)
            };
          });
          break;
        }

      case LEAVE:
        {
          removed.forEach(function (key) {
            var keyIndex = _keys.indexOf(key);

            var item = _items[keyIndex];
            var slot = LEAVE;
            deleted.unshift(_extends({}, current[key], {
              slot: slot,
              destroyed: true,
              left: _keys[Math.max(0, keyIndex - 1)],
              right: _keys[Math.min(_keys.length, keyIndex + 1)],
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(leave, item)
            }));
            delete current[key];
          });
          break;
        }

      case UPDATE:
        {
          updated.forEach(function (key) {
            var keyIndex = keys.indexOf(key);
            var item = items[keyIndex];
            var slot = UPDATE;
            current[key] = _extends({}, current[key], {
              item: item,
              slot: slot,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(update, item)
            });
          });
          break;
        }
    }
  }

  var out = keys.map(function (key) {
    return current[key];
  }); // This tries to restore order for deleted items by finding their last known siblings
  // only using the left sibling to keep order placement consistent for all deleted items

  deleted.forEach(function (_ref10) {
    var left = _ref10.left,
        right = _ref10.right,
        item = _objectWithoutPropertiesLoose(_ref10, ["left", "right"]);

    var pos; // Was it the element on the left, if yes, move there ...

    if ((pos = out.findIndex(function (t) {
      return t.originalKey === left;
    })) !== -1) pos += 1; // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

    pos = Math.max(0, pos);
    out = [].concat(out.slice(0, pos), [item], out.slice(pos));
  });
  return _extends({}, state, {
    changed: added.length || removed.length || updated.length,
    first: first && added.length === 0,
    transitions: out,
    current: current,
    deleted: deleted,
    prevProps: props
  });
}

var AnimatedStyle =
/*#__PURE__*/
function (_AnimatedObject) {
  _inheritsLoose(AnimatedStyle, _AnimatedObject);

  function AnimatedStyle(style) {
    var _this;

    if (style === void 0) {
      style = {};
    }

    _this = _AnimatedObject.call(this) || this;

    if (style.transform && !(style.transform instanceof Animated)) {
      style = applyAnimatedValues.transform(style);
    }

    _this.payload = style;
    return _this;
  }

  return AnimatedStyle;
}(AnimatedObject);

// http://www.w3.org/TR/css3-color/#svg-color
var colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

// const INTEGER = '[-+]?\\d+';
var NUMBER = '[-+]?\\d*\\.?\\d+';
var PERCENTAGE = NUMBER + '%';

function call() {
  for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
    parts[_key] = arguments[_key];
  }

  return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
}

var rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
var rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
var hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
var hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
var hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex6 = /^#([0-9a-fA-F]{6})$/;
var hex8 = /^#([0-9a-fA-F]{8})$/;

/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function normalizeColor(color) {
  var match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
  if (colors.hasOwnProperty(color)) return colors[color];

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  var r = hue2rgb(p, q, h + 1 / 3);
  var g = hue2rgb(p, q, h);
  var b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  var int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  var int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  var num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  var int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  var int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  var r = (int32Color & 0xff000000) >>> 24;
  var g = (int32Color & 0x00ff0000) >>> 16;
  var b = (int32Color & 0x0000ff00) >>> 8;
  var a = (int32Color & 0x000000ff) / 255;
  return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


var stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

var colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

var colorNamesRegex = new RegExp("(" + Object.keys(colors).join('|') + ")", 'g');
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
 */

var createStringInterpolator = function createStringInterpolator(config) {
  // Replace colors with rgba
  var outputRange = config.output.map(function (rangeValue) {
    return rangeValue.replace(colorRegex, colorToRgba);
  }).map(function (rangeValue) {
    return rangeValue.replace(colorNamesRegex, colorToRgba);
  });
  var outputRanges = outputRange[0].match(stringShapeRegex).map(function () {
    return [];
  });
  outputRange.forEach(function (value) {
    value.match(stringShapeRegex).forEach(function (number, i) {
      return outputRanges[i].push(+number);
    });
  });
  var interpolations = outputRange[0].match(stringShapeRegex).map(function (_value, i) {
    return createInterpolator(_extends({}, config, {
      output: outputRanges[i]
    }));
  });
  return function (input) {
    var i = 0;
    return outputRange[0] // 'rgba(0, 100, 200, 0)'
    // ->
    // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
    .replace(stringShapeRegex, function () {
      return interpolations[i++](input);
    }) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, function (_, p1, p2, p3, p4) {
      return "rgba(" + Math.round(p1) + ", " + Math.round(p2) + ", " + Math.round(p3) + ", " + p4 + ")";
    });
  };
};

var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

var prefixKey = function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
};

var prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce(function (acc, prop) {
  prefixes.forEach(function (prefix) {
    return acc[prefixKey(prefix, prop)] = acc[prop];
  });
  return acc;
}, isUnitlessNumber);

function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

var attributeCache = {};
injectCreateAnimatedStyle(function (style) {
  return new AnimatedStyle(style);
});
injectDefaultElement('div');
injectStringInterpolator(createStringInterpolator);
injectColorNames(colors);
injectApplyAnimatedValues(function (instance, props) {
  if (instance.nodeType && instance.setAttribute !== undefined) {
    var style = props.style,
        children = props.children,
        scrollTop = props.scrollTop,
        scrollLeft = props.scrollLeft,
        attributes = _objectWithoutPropertiesLoose(props, ["style", "children", "scrollTop", "scrollLeft"]);

    var filter = instance.nodeName === 'filter' || instance.parentNode && instance.parentNode.nodeName === 'filter';
    if (scrollTop !== void 0) instance.scrollTop = scrollTop;
    if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

    if (children !== void 0) instance.textContent = children; // Set styles ...

    for (var styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
      if (styleName === 'float') styleName = 'cssFloat';
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
    } // Set attributes ...


    for (var name in attributes) {
      // Attributes are written in dash case
      var dashCase = filter ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, function (n) {
        return '-' + n.toLowerCase();
      }));
      if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
    }

    return;
  } else return false;
}, function (style) {
  return style;
});

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
// Extend animated with all the available THREE elements
var apply = merge(createAnimatedComponent, false);
var extendedAnimated = apply(domElements);

exports.apply = apply;
exports.config = config;
exports.update = update;
exports.animated = extendedAnimated;
exports.a = extendedAnimated;
exports.interpolate = interpolate$1;
exports.Globals = Globals;
exports.useSpring = useSpring;
exports.useTrail = useTrail;
exports.useTransition = useTransition;
exports.useChain = useChain;
exports.useSprings = useSprings;


/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);





var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};

function getUniqueId() {
  var key = '__global_unique_id__';
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
}

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + getUniqueId() + '__';

  var Provider = /*#__PURE__*/function (_Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (false) {}

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired, _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_Component2) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext || createReactContext;

/* harmony default export */ __webpack_exports__["a"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(82)))

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(308)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(60);

var iterableToArrayLimit = __webpack_require__(61);

var unsupportedIterableToArray = __webpack_require__(39);

var nonIterableRest = __webpack_require__(62);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUnreadNotesCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasValidNotes; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Get the count of the unread notes from the received list.
 *
 * @param {Array} notes - List of notes, contains read and unread notes.
 * @param {number} lastRead - The timestamp that the user read a note.
 * @return {number} - Unread notes count.
 */

function getUnreadNotesCount(notes, lastRead) {
  var unreadNotes = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(notes, function (note) {
    var isDeleted = note.is_deleted,
        dateCreatedGmt = note.date_created_gmt,
        status = note.status;

    if (!isDeleted) {
      var unread = !lastRead || !dateCreatedGmt || new Date(dateCreatedGmt + 'Z').getTime() > lastRead;
      return unread && status === 'unactioned';
    }
  });
  return unreadNotes.length;
}
/**
 * Verifies if there are any valid notes in the list.
 *
 * @param {Array} notes - List of notes, contains read and unread notes.
 * @return {boolean} - Whether there are valid notes or not.
 */

function hasValidNotes(notes) {
  var validNotes = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(notes, function (note) {
    var isDeleted = note.is_deleted;
    return !isDeleted;
  });
  return validNotes.length > 0;
}

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Circle */
/* unused harmony export G */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Path; });
/* unused harmony export Polygon */
/* unused harmony export Rect */
/* unused harmony export Defs */
/* unused harmony export RadialGradient */
/* unused harmony export LinearGradient */
/* unused harmony export Stop */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SVG; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
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

/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(57);

var iterableToArray = __webpack_require__(58);

var unsupportedIterableToArray = __webpack_require__(39);

var nonIterableSpread = __webpack_require__(59);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

(function() { module.exports = this["wc"]["navigation"]; }());

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["url"]; }());

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

(function() { module.exports = this["wc"]["data"]; }());

/***/ }),

/***/ 24:
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

/***/ 25:
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
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
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

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var hoistNonReactStatic = __webpack_require__(301);
var React = __webpack_require__(10);
var ReactDOM = __webpack_require__(48);

module.exports = function enhanceWithClickOutside(WrappedComponent) {
  var componentName = WrappedComponent.displayName || WrappedComponent.name;

  var EnhancedComponent = function (_React$Component) {
    _inherits(EnhancedComponent, _React$Component);

    function EnhancedComponent(props) {
      _classCallCheck(this, EnhancedComponent);

      var _this = _possibleConstructorReturn(this, (EnhancedComponent.__proto__ || Object.getPrototypeOf(EnhancedComponent)).call(this, props));

      _this.handleClickOutside = _this.handleClickOutside.bind(_this);
      return _this;
    }

    _createClass(EnhancedComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
      }
    }, {
      key: 'handleClickOutside',
      value: function handleClickOutside(e) {
        var domNode = this.__domNode;
        if ((!domNode || !domNode.contains(e.target)) && this.__wrappedInstance && typeof this.__wrappedInstance.handleClickOutside === 'function') {
          this.__wrappedInstance.handleClickOutside(e);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            wrappedRef = _props.wrappedRef,
            rest = _objectWithoutProperties(_props, ['wrappedRef']);

        return React.createElement(WrappedComponent, _extends({}, rest, {
          ref: function ref(c) {
            _this2.__wrappedInstance = c;
            _this2.__domNode = ReactDOM.findDOMNode(c);
            wrappedRef && wrappedRef(c);
          }
        }));
      }
    }]);

    return EnhancedComponent;
  }(React.Component);

  EnhancedComponent.displayName = 'clickOutside(' + componentName + ')';

  return hoistNonReactStatic(EnhancedComponent, WrappedComponent);
};

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(140);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(278);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);


/**
 * External dependencies
 */







var NOTICE_TIMEOUT = 10000;
/** @typedef {import('@wordpress/element').WPElement} WPElement */

/**
 * Custom hook which announces the message with the given politeness, if a
 * valid message is provided.
 *
 * @param {string|WPElement}     [message]  Message to announce.
 * @param {'polite'|'assertive'} politeness Politeness to announce.
 */

function useSpokenMessage(message, politeness) {
  var spokenMessage = typeof message === 'string' ? message : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["renderToString"])(message);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (spokenMessage) {
      Object(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_3__[/* speak */ "a"])(spokenMessage, politeness);
    }
  }, [spokenMessage, politeness]);
}

function Snackbar(_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$spokenMessage = _ref.spokenMessage,
      spokenMessage = _ref$spokenMessage === void 0 ? children : _ref$spokenMessage,
      _ref$politeness = _ref.politeness,
      politeness = _ref$politeness === void 0 ? 'polite' : _ref$politeness,
      _ref$actions = _ref.actions,
      actions = _ref$actions === void 0 ? [] : _ref$actions,
      _ref$onRemove = _ref.onRemove,
      onRemove = _ref$onRemove === void 0 ? lodash__WEBPACK_IMPORTED_MODULE_1__["noop"] : _ref$onRemove,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? null : _ref$icon,
      _ref$explicitDismiss = _ref.explicitDismiss,
      explicitDismiss = _ref$explicitDismiss === void 0 ? false : _ref$explicitDismiss,
      _ref$onDismiss = _ref.onDismiss,
      onDismiss = _ref$onDismiss === void 0 ? null : _ref$onDismiss;
  onDismiss = onDismiss || lodash__WEBPACK_IMPORTED_MODULE_1__["noop"];

  function dismissMe(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    onDismiss();
    onRemove();
  }

  function onActionClick(event, onClick) {
    event.stopPropagation();
    onRemove();

    if (onClick) {
      onClick(event);
    }
  }

  useSpokenMessage(spokenMessage, politeness); // Only set up the timeout dismiss if we're not explicitly dismissing.

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var timeoutHandle = setTimeout(function () {
      if (!explicitDismiss) {
        onDismiss();
        onRemove();
      }
    }, NOTICE_TIMEOUT);
    return function () {
      return clearTimeout(timeoutHandle);
    };
  }, [explicitDismiss, onDismiss, onRemove]);
  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'components-snackbar', {
    'components-snackbar-explicit-dismiss': !!explicitDismiss
  });

  if (actions && actions.length > 1) {
    // we need to inform developers that snackbar only accepts 1 action
    typeof process !== "undefined" && process.env && "production" !== "production" ? Object(_wordpress_warning__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])('Snackbar can only have 1 action, use Notice if your message require many messages') : void 0; // return first element only while keeping it inside an array

    actions = [actions[0]];
  }

  var snackbarContentClassnames = classnames__WEBPACK_IMPORTED_MODULE_2___default()('components-snackbar__content', {
    'components-snackbar__content-with-icon': !!icon
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    ref: ref,
    className: classes,
    onClick: !explicitDismiss ? dismissMe : lodash__WEBPACK_IMPORTED_MODULE_1__["noop"],
    tabIndex: "0",
    role: !explicitDismiss ? 'button' : '',
    onKeyPress: !explicitDismiss ? dismissMe : lodash__WEBPACK_IMPORTED_MODULE_1__["noop"],
    "aria-label": !explicitDismiss ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Dismiss this notice') : ''
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: snackbarContentClassnames
  }, icon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "components-snackbar__icon"
  }, icon), children, actions.map(function (_ref2, index) {
    var label = _ref2.label,
        _onClick = _ref2.onClick,
        url = _ref2.url;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      key: index,
      href: url,
      isTertiary: true,
      onClick: function onClick(event) {
        return onActionClick(event, _onClick);
      },
      className: "components-snackbar__action"
    }, label);
  }), explicitDismiss && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    role: "button",
    "aria-label": "Dismiss this notice",
    tabIndex: "0",
    className: "components-snackbar__dismiss-button",
    onClick: dismissMe,
    onKeyPress: dismissMe
  }, "\u2715")));
}

/* harmony default export */ __webpack_exports__["a"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(Snackbar));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(124)))

/***/ }),

/***/ 278:
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(124)))

/***/ }),

/***/ 279:
/***/ (function(module, exports) {

(function() { module.exports = this["wc"]["customerEffortScore"]; }());

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

(function() { module.exports = this["wc"]["tracks"]; }());

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ customer_effort_score_tracks_container; });

// UNUSED EXPORTS: CustomerEffortScoreTracks

// NAMESPACE OBJECT: ./client/customer-effort-score-tracks/data/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "setCesSurveyQueue", function() { return setCesSurveyQueue; });
__webpack_require__.d(actions_namespaceObject, "addCesSurvey", function() { return addCesSurvey; });
__webpack_require__.d(actions_namespaceObject, "addCesSurveyForAnalytics", function() { return addCesSurveyForAnalytics; });

// NAMESPACE OBJECT: ./client/customer-effort-score-tracks/data/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getCesSurveyQueue", function() { return resolvers_getCesSurveyQueue; });

// NAMESPACE OBJECT: ./client/customer-effort-score-tracks/data/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getCesSurveyQueue", function() { return selectors_getCesSurveyQueue; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(20);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(5);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(19);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external {"this":["wc","tracks"]}
var external_this_wc_tracks_ = __webpack_require__(28);

// EXTERNAL MODULE: external {"this":["wc","customerEffortScore"]}
var external_this_wc_customerEffortScore_ = __webpack_require__(279);
var external_this_wc_customerEffortScore_default = /*#__PURE__*/__webpack_require__.n(external_this_wc_customerEffortScore_);

// EXTERNAL MODULE: external {"this":["wp","compose"]}
var external_this_wp_compose_ = __webpack_require__(18);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(15);

// EXTERNAL MODULE: external {"this":["wc","data"]}
var external_this_wc_data_ = __webpack_require__(23);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(2);

// CONCATENATED MODULE: ./client/customer-effort-score-tracks/customer-effort-score-tracks.js





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */








var SHOWN_FOR_ACTIONS_OPTION_NAME = 'woocommerce_ces_shown_for_actions';
var ADMIN_INSTALL_TIMESTAMP_OPTION_NAME = 'woocommerce_admin_install_timestamp';
var ALLOW_TRACKING_OPTION_NAME = 'woocommerce_allow_tracking';
/**
 * A CustomerEffortScore wrapper that uses tracks to track the selected
 * customer effort score.
 *
 * @param {Object}   props                    Component props.
 * @param {string}   props.action             The action name sent to Tracks.
 * @param {Object}   props.trackProps         Additional props sent to Tracks.
 * @param {string}   props.label              The label displayed in the modal.
 * @param {string}   props.onSubmitLabel      The label displayed upon survey submission.
 * @param {Array}    props.cesShownForActions The array of actions that the CES modal has been shown for.
 * @param {boolean}  props.allowTracking      Whether tracking is allowed or not.
 * @param {boolean}  props.resolving          Are values still being resolved.
 * @param {number}   props.storeAgeInWeeks    The age of the store in weeks.
 * @param {Function} props.updateOptions      Function to update options.
 * @param {Function} props.createNotice       Function to create a snackbar.
 */

function CustomerEffortScoreTracks(_ref) {
  var action = _ref.action,
      trackProps = _ref.trackProps,
      label = _ref.label,
      _ref$onSubmitLabel = _ref.onSubmitLabel,
      onSubmitLabel = _ref$onSubmitLabel === void 0 ? Object(external_this_wp_i18n_["__"])('Thank you for your feedback!', 'woocommerce-admin') : _ref$onSubmitLabel,
      cesShownForActions = _ref.cesShownForActions,
      allowTracking = _ref.allowTracking,
      resolving = _ref.resolving,
      storeAgeInWeeks = _ref.storeAgeInWeeks,
      updateOptions = _ref.updateOptions,
      createNotice = _ref.createNotice;

  var _useState = Object(external_this_wp_element_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      modalShown = _useState2[0],
      setModalShown = _useState2[1];

  if (resolving) {
    return null;
  } // Don't show if tracking is disallowed.


  if (!allowTracking) {
    return null;
  } // We only want to return null early if the modal was already shown
  // for this action *before* this component was initially instantiated.
  //
  // We want to make sure we still render CustomerEffortScore below
  // (we don't want to return null early), if the modal was shown for this
  // instantiation, so that the component doesn't go away while we are
  // still showing it.


  if (cesShownForActions.indexOf(action) !== -1 && !modalShown) {
    return null;
  }

  var onNoticeShown = function onNoticeShown() {
    Object(external_this_wc_tracks_["recordEvent"])('ces_snackbar_view', _objectSpread({
      action: action,
      store_age: storeAgeInWeeks
    }, trackProps));
  };

  var addActionToShownOption = function addActionToShownOption() {
    updateOptions(defineProperty_default()({}, SHOWN_FOR_ACTIONS_OPTION_NAME, [action].concat(toConsumableArray_default()(cesShownForActions))));
  };

  var onNoticeDismissed = function onNoticeDismissed() {
    Object(external_this_wc_tracks_["recordEvent"])('ces_snackbar_dismiss', _objectSpread({
      action: action,
      store_age: storeAgeInWeeks
    }, trackProps));
    addActionToShownOption();
  };

  var onModalShown = function onModalShown() {
    setModalShown(true);
    Object(external_this_wc_tracks_["recordEvent"])('ces_view', _objectSpread({
      action: action,
      store_age: storeAgeInWeeks
    }, trackProps));
    addActionToShownOption();
  };

  var recordScore = function recordScore(score, comments) {
    Object(external_this_wc_tracks_["recordEvent"])('ces_feedback', _objectSpread({
      action: action,
      score: score,
      comments: comments || '',
      store_age: storeAgeInWeeks
    }, trackProps));
    createNotice('success', onSubmitLabel);
  };

  return Object(external_this_wp_element_["createElement"])(external_this_wc_customerEffortScore_default.a, {
    recordScoreCallback: recordScore,
    label: label,
    onNoticeShownCallback: onNoticeShown,
    onNoticeDismissedCallback: onNoticeDismissed,
    onModalShownCallback: onModalShown,
    icon: Object(external_this_wp_element_["createElement"])("span", {
      style: {
        height: 21,
        width: 21
      },
      role: "img",
      "aria-label": Object(external_this_wp_i18n_["__"])('Pencil icon', 'woocommerce-admin')
    }, "\u270F\uFE0F")
  });
}

CustomerEffortScoreTracks.propTypes = {
  /**
   * The action name sent to Tracks.
   */
  action: prop_types_default.a.string.isRequired,

  /**
   * Additional props sent to Tracks.
   */
  trackProps: prop_types_default.a.object,

  /**
   * The label displayed in the modal.
   */
  label: prop_types_default.a.string.isRequired,

  /**
   * The label for the snackbar that appears upon survey submission.
   */
  onSubmitLabel: prop_types_default.a.string,

  /**
   * The array of actions that the CES modal has been shown for.
   */
  cesShownForActions: prop_types_default.a.arrayOf(prop_types_default.a.string).isRequired,

  /**
   * Whether tracking is allowed or not.
   */
  allowTracking: prop_types_default.a.bool,

  /**
   * Whether props are still being resolved.
   */
  resolving: prop_types_default.a.bool.isRequired,

  /**
   * The age of the store in weeks.
   */
  storeAgeInWeeks: prop_types_default.a.number,

  /**
   * Function to update options.
   */
  updateOptions: prop_types_default.a.func,

  /**
   * Function to create a snackbar
   */
  createNotice: prop_types_default.a.func
};

function getStoreAgeInWeeks(adminInstallTimestamp) {
  if (adminInstallTimestamp === 0) {
    return null;
  } // Date.now() is ms since Unix epoch, adminInstallTimestamp is in
  // seconds since Unix epoch.


  var storeAgeInMs = Date.now() - adminInstallTimestamp * 1000;
  var storeAgeInWeeks = Math.round(storeAgeInMs / external_this_wc_data_["WEEK"]);
  return storeAgeInWeeks;
}

/* harmony default export */ var customer_effort_score_tracks = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select(external_this_wc_data_["OPTIONS_STORE_NAME"]),
      getOption = _select.getOption,
      isResolving = _select.isResolving;

  var cesShownForActions = getOption(SHOWN_FOR_ACTIONS_OPTION_NAME) || [];
  var adminInstallTimestamp = getOption(ADMIN_INSTALL_TIMESTAMP_OPTION_NAME) || 0;
  var storeAgeInWeeks = getStoreAgeInWeeks(adminInstallTimestamp);
  var allowTrackingOption = getOption(ALLOW_TRACKING_OPTION_NAME) || 'no';
  var allowTracking = allowTrackingOption === 'yes';
  var resolving = isResolving('getOption', [SHOWN_FOR_ACTIONS_OPTION_NAME]) || storeAgeInWeeks === null || isResolving('getOption', [ADMIN_INSTALL_TIMESTAMP_OPTION_NAME]) || isResolving('getOption', [ALLOW_TRACKING_OPTION_NAME]);
  return {
    cesShownForActions: cesShownForActions,
    allowTracking: allowTracking,
    storeAgeInWeeks: storeAgeInWeeks,
    resolving: resolving
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(external_this_wc_data_["OPTIONS_STORE_NAME"]),
      updateOptions = _dispatch.updateOptions;

  var _dispatch2 = dispatch('core/notices'),
      createNotice = _dispatch2.createNotice;

  return {
    updateOptions: updateOptions,
    createNotice: createNotice
  };
}))(CustomerEffortScoreTracks));
// EXTERNAL MODULE: ./client/customer-effort-score-tracks/data/constants.js
var constants = __webpack_require__(73);

// EXTERNAL MODULE: external {"this":["wp","dataControls"]}
var external_this_wp_dataControls_ = __webpack_require__(17);

// CONCATENATED MODULE: ./client/customer-effort-score-tracks/data/action-types.js
var TYPES = {
  SET_CES_SURVEY_QUEUE: 'SET_CES_SURVEY_QUEUE',
  ADD_CES_SURVEY: 'ADD_CES_SURVEY'
};
/* harmony default export */ var action_types = (TYPES);
// CONCATENATED MODULE: ./client/customer-effort-score-tracks/data/actions.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Initialize the state
 *
 * @param {Object} queue	initial queue
 */

function setCesSurveyQueue(queue) {
  return {
    type: action_types.SET_CES_SURVEY_QUEUE,
    queue: queue
  };
}
/**
 * Add a new CES track to the state.
 *
 * @param {string} action action name for the survey
 * @param {string} label label for the snackback
 * @param {string} pageNow value of window.pagenow
 * @param {string} adminPage value of window.adminpage
 * @param {string} onsubmit_label label for the snackback onsubmit
 */

function addCesSurvey(action, label) {
  var pageNow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window.pagenow;
  var adminPage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : window.adminpage;
  var onsubmit_label = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
  return {
    type: action_types.ADD_CES_SURVEY,
    action: action,
    label: label,
    pageNow: pageNow,
    adminPage: adminPage,
    onsubmit_label: onsubmit_label
  };
}
/**
 * Add a new CES survey track for the pages in Analytics menu
 */

function addCesSurveyForAnalytics() {
  return addCesSurvey('analytics_filtered', Object(external_this_wp_i18n_["__"])('How easy was it to filter your store analytics?', 'woocommerce-admin'), 'woocommerce_page_wc-admin', 'woocommerce_page_wc-admin');
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(8);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: ./client/customer-effort-score-tracks/data/resolvers.js


var _marked = /*#__PURE__*/regenerator_default.a.mark(resolvers_getCesSurveyQueue);

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function resolvers_getCesSurveyQueue() {
  var response;
  return regenerator_default.a.wrap(function getCesSurveyQueue$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(external_this_wp_dataControls_["apiFetch"])({
            path: "".concat(constants["a" /* API_NAMESPACE */], "/options?options=").concat(constants["b" /* QUEUE_OPTION_NAME */])
          });

        case 2:
          response = _context.sent;

          if (!response) {
            _context.next = 8;
            break;
          }

          _context.next = 6;
          return setCesSurveyQueue(response[constants["b" /* QUEUE_OPTION_NAME */]] || []);

        case 6:
          _context.next = 9;
          break;

        case 8:
          throw new Error();

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
// CONCATENATED MODULE: ./client/customer-effort-score-tracks/data/selectors.js
function selectors_getCesSurveyQueue(state) {
  return state.queue;
}
// CONCATENATED MODULE: ./client/customer-effort-score-tracks/data/reducer.js



function reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducer_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */

var DEFAULT_STATE = {
  queue: []
};

var reducer_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case action_types.SET_CES_SURVEY_QUEUE:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        queue: action.queue
      });

    case action_types.ADD_CES_SURVEY:
      // Prevent duplicate
      var hasDuplicate = state.queue.filter(function (track) {
        return track.action === action.action;
      });

      if (hasDuplicate.length) {
        return state;
      }

      var newTrack = {
        action: action.action,
        label: action.label,
        pagenow: action.pageNow,
        adminpage: action.adminPage,
        onSubmitLabel: action.onSubmitLabel
      };
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        queue: [].concat(toConsumableArray_default()(state.queue), [newTrack])
      });

    default:
      return state;
  }
};

/* harmony default export */ var data_reducer = (reducer_reducer);
// CONCATENATED MODULE: ./client/customer-effort-score-tracks/data/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






/* harmony default export */ var data = (Object(external_this_wp_data_["registerStore"])(constants["c" /* STORE_KEY */], {
  actions: actions_namespaceObject,
  selectors: selectors_namespaceObject,
  resolvers: resolvers_namespaceObject,
  controls: external_this_wp_dataControls_["controls"],
  reducer: data_reducer
}));
// CONCATENATED MODULE: ./client/customer-effort-score-tracks/customer-effort-score-tracks-container.js


/**
 * External dependencies
 */




/**
 * Internal dependencies
 */




/**
 * Maps the queue of CES tracks surveys to CustomerEffortScoreTracks
 * components. Note that generally there will only be a single survey per page
 * however this is designed to be flexible if multiple surveys per page are
 * added in the future.
 *
 * @param {Object}   props            Component props.
 * @param {Array}    props.queue      The queue of surveys.
 * @param {boolean}  props.resolving  Whether the queue is resolving.
 * @param {Function} props.clearQueue Sets up clearing of the queue on the next page load.
 */

function CustomerEffortScoreTracksContainer(_ref) {
  var queue = _ref.queue,
      resolving = _ref.resolving,
      clearQueue = _ref.clearQueue;

  if (resolving) {
    return null;
  }

  var queueForPage = queue.filter(function (item) {
    return item.pagenow === window.pagenow && item.adminpage === window.adminpage;
  });

  if (queueForPage.length) {
    clearQueue();
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, queueForPage.map(function (item, index) {
    return Object(external_this_wp_element_["createElement"])(customer_effort_score_tracks, {
      key: index,
      action: item.action,
      label: item.label,
      onSubmitLabel: item.onsubmit_label,
      trackProps: item.props || {}
    });
  }));
}

CustomerEffortScoreTracksContainer.propTypes = {
  /**
   * The queue of CES tracks surveys to display.
   */
  queue: prop_types_default.a.arrayOf(prop_types_default.a.object),

  /**
   * If the queue option is being resolved.
   */
  resolving: prop_types_default.a.bool,

  /**
   * Set up clearing the queue on the next page load.
   */
  clearQueue: prop_types_default.a.func
};
/* harmony default export */ var customer_effort_score_tracks_container = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select(constants["c" /* STORE_KEY */]),
      getCesSurveyQueue = _select.getCesSurveyQueue,
      isResolving = _select.isResolving;

  var queue = getCesSurveyQueue();
  var resolving = isResolving('getOption', [constants["b" /* QUEUE_OPTION_NAME */]]);
  return {
    queue: queue,
    resolving: resolving
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(external_this_wc_data_["OPTIONS_STORE_NAME"]),
      updateOptions = _dispatch.updateOptions;

  return {
    clearQueue: function clearQueue() {
      // This sets an option that should be used on the next page
      // load to clear the CES tracks queue for the current page (see
      // CustomerEffortScoreTracks.php) - clearing the queue
      // directly puts this into an infinite loop which is picked
      // up by React.
      updateOptions({
        woocommerce_clear_ces_tracks_queue_for_page: {
          pagenow: window.pagenow,
          adminpage: window.adminpage
        }
      });
    }
  };
}))(CustomerEffortScoreTracksContainer));
// CONCATENATED MODULE: ./client/customer-effort-score-tracks/index.js



/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","plugins"]}
var external_this_wp_plugins_ = __webpack_require__(139);

// EXTERNAL MODULE: external {"this":["wc","navigation"]}
var external_this_wc_navigation_ = __webpack_require__(21);

// EXTERNAL MODULE: external {"this":["wc","data"]}
var external_this_wc_data_ = __webpack_require__(23);

// EXTERNAL MODULE: ./client/navigation/style.scss
var style = __webpack_require__(309);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(19);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(5);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external {"this":["wp","compose"]}
var external_this_wp_compose_ = __webpack_require__(18);

// EXTERNAL MODULE: ./packages/experimental/build-module/index.js
var build_module = __webpack_require__(31);

// EXTERNAL MODULE: external {"this":["wc","tracks"]}
var external_this_wc_tracks_ = __webpack_require__(28);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(15);

// EXTERNAL MODULE: ./client/navigation/utils.js
var utils = __webpack_require__(86);

// EXTERNAL MODULE: external {"this":["wp","components"]}
var external_this_wp_components_ = __webpack_require__(4);

// EXTERNAL MODULE: external {"this":["wp","htmlEntities"]}
var external_this_wp_htmlEntities_ = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__(304);

// EXTERNAL MODULE: ./node_modules/@wordpress/primitives/build-module/svg/index.js
var svg = __webpack_require__(196);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/wordpress.js


/**
 * WordPress dependencies
 */

var wordpress = Object(external_this_wp_element_["createElement"])(svg["b" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["a" /* Path */], {
  d: "M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"
}));
/* harmony default export */ var library_wordpress = (wordpress);
//# sourceMappingURL=wordpress.js.map
// EXTERNAL MODULE: ./client/settings/index.js
var settings = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(7);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);

// EXTERNAL MODULE: ./client/hooks/useIsScrolled.js
var useIsScrolled = __webpack_require__(138);

// CONCATENATED MODULE: ./client/navigation/components/header/index.js



/**
 * External dependencies
 */









/**
 * Internal dependencies
 */




var header_Header = function Header() {
  var siteTitle = Object(settings["g" /* getSetting */])('siteTitle', '');
  var siteUrl = Object(settings["g" /* getSetting */])('siteUrl', '');
  var isScrolled = Object(useIsScrolled["a" /* default */])();

  var _useState = Object(external_this_wp_element_["useState"])(document.body.classList.contains(false)),
      _useState2 = slicedToArray_default()(_useState, 2),
      isFolded = _useState2[0],
      setIsFolded = _useState2[1];

  var navClasses = {
    folded: 'is-wc-nav-folded',
    expanded: 'is-wc-nav-expanded'
  };

  var foldNav = function foldNav() {
    document.body.classList.add(navClasses.folded);
    document.body.classList.remove(navClasses.expanded);
    setIsFolded(true);
  };

  var expandNav = function expandNav() {
    document.body.classList.remove(navClasses.folded);
    document.body.classList.add(navClasses.expanded);
    setIsFolded(false);
  };

  var toggleFolded = function toggleFolded() {
    if (document.body.classList.contains(navClasses.folded)) {
      expandNav();
    } else {
      foldNav();
    }
  };

  var foldOnMobile = function foldOnMobile() {
    var screenWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body.clientWidth;

    if (screenWidth <= 960) {
      foldNav();
    } else {
      expandNav();
    }
  };

  Object(external_this_wp_element_["useEffect"])(function () {
    foldOnMobile();
    var foldEvents = [{
      eventName: 'orientationchange',
      handler: function handler(e) {
        return foldOnMobile(e.target.screen.availWidth);
      }
    }, {
      eventName: 'resize',
      handler: Object(external_lodash_["debounce"])(function () {
        return foldOnMobile();
      }, 200)
    }];

    for (var _i = 0, _foldEvents = foldEvents; _i < _foldEvents.length; _i++) {
      var _foldEvents$_i = _foldEvents[_i],
          eventName = _foldEvents$_i.eventName,
          handler = _foldEvents$_i.handler;
      window.addEventListener(eventName, handler, false);
    }

    Object(utils["a" /* addHistoryListener */])(function () {
      return foldOnMobile();
    });
  }, []);
  var buttonIcon = Object(external_this_wp_element_["createElement"])(icon["a" /* default */], {
    size: "36px",
    icon: library_wordpress
  });

  var _useSelect = Object(external_this_wp_data_["useSelect"])(function (select) {
    var _select = select('core/data'),
        isResolving = _select.isResolving;

    var _select2 = select('core'),
        getEntityRecord = _select2.getEntityRecord;

    var siteData = getEntityRecord('root', '__unstableBase', undefined) || {};
    return {
      isRequestingSiteIcon: isResolving('core', 'getEntityRecord', ['root', '__unstableBase', undefined]),
      siteIconUrl: siteData.siteIconUrl
    };
  }),
      isRequestingSiteIcon = _useSelect.isRequestingSiteIcon,
      siteIconUrl = _useSelect.siteIconUrl;

  if (siteIconUrl) {
    buttonIcon = Object(external_this_wp_element_["createElement"])("img", {
      alt: Object(external_this_wp_i18n_["__"])('Site Icon'),
      src: siteIconUrl
    });
  } else if (isRequestingSiteIcon) {
    buttonIcon = null;
  }

  var className = classnames_default()('woocommerce-navigation-header', {
    'is-scrolled': isScrolled
  });
  return Object(external_this_wp_element_["createElement"])("div", {
    className: className
  }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    onClick: function onClick() {
      return toggleFolded();
    },
    className: "woocommerce-navigation-header__site-icon",
    "aria-label": "Fold navigation",
    role: "switch",
    "aria-checked": isFolded ? 'true' : 'false'
  }, buttonIcon), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    href: siteUrl,
    className: "woocommerce-navigation-header__site-title",
    as: "span"
  }, Object(external_this_wp_htmlEntities_["decodeEntities"])(siteTitle)));
};

/* harmony default export */ var header = (header_Header);
// CONCATENATED MODULE: ./client/navigation/components/Item/index.js


/**
 * External dependencies
 */




var Item_Item = function Item(_ref) {
  var item = _ref.item;
  var slot = Object(external_this_wc_navigation_["useNavSlot"])('woocommerce_navigation_' + item.id);
  var hasFills = Boolean(slot.fills && slot.fills.length);

  var trackClick = function trackClick(id) {
    Object(external_this_wc_tracks_["recordEvent"])('navigation_click', {
      menu_item: id
    });
  }; // Disable reason: The div wrapping the slot item is used for tracking purposes
  // and should not be a tabbable element.

  /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
  // Only render a slot if a coresponding Fill exists and the item is not a category


  if (hasFills && !item.isCategory) {
    return Object(external_this_wp_element_["createElement"])(build_module["d" /* NavigationItem */], {
      key: item.id,
      item: item.id
    }, Object(external_this_wp_element_["createElement"])("div", {
      onClick: function onClick() {
        return trackClick(item.id);
      }
    }, Object(external_this_wp_element_["createElement"])(external_this_wc_navigation_["WooNavigationItem"].Slot, {
      name: item.id
    })));
  }

  return Object(external_this_wp_element_["createElement"])(build_module["d" /* NavigationItem */], {
    key: item.id,
    item: item.id,
    title: item.title,
    href: item.url,
    navigateToMenu: !item.url && item.id,
    onClick: function onClick() {
      return trackClick(item.id);
    }
  });
  /* eslint-enable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
};

/* harmony default export */ var components_Item = (Item_Item);
// CONCATENATED MODULE: ./client/navigation/components/container/index.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */







/**
 * Internal dependencies
 */





var container_Container = function Container(_ref) {
  var menuItems = _ref.menuItems;
  Object(external_this_wp_element_["useEffect"])(function () {
    // Collapse the original WP Menu.
    var adminMenu = document.getElementById('adminmenumain');
    adminMenu.classList.add('folded');
  }, []);
  var _window$wcNavigation = window.wcNavigation,
      rootBackLabel = _window$wcNavigation.rootBackLabel,
      rootBackUrl = _window$wcNavigation.rootBackUrl;
  var parentCategory = {
    capability: 'manage_woocommerce',
    id: 'woocommerce',
    isCategory: true,
    menuId: 'primary',
    migrate: true,
    order: 10,
    parent: '',
    title: 'WooCommerce'
  };
  var categoriesMap = menuItems.reduce(function (acc, item) {
    if (item.isCategory) {
      return _objectSpread(_objectSpread({}, acc), {}, defineProperty_default()({}, item.id, item));
    }

    return acc;
  }, {
    woocommerce: parentCategory
  });
  var categories = Object.values(categoriesMap);

  var _useState = Object(external_this_wp_element_["useState"])('woocommerce-home'),
      _useState2 = slicedToArray_default()(_useState, 2),
      activeItem = _useState2[0],
      setActiveItem = _useState2[1];

  var _useState3 = Object(external_this_wp_element_["useState"])('woocommerce'),
      _useState4 = slicedToArray_default()(_useState3, 2),
      activeLevel = _useState4[0],
      setActiveLevel = _useState4[1];

  Object(external_this_wp_element_["useEffect"])(function () {
    var initialMatchedItem = Object(utils["b" /* getMatchingItem */])(menuItems);

    if (initialMatchedItem) {
      setActiveItem(initialMatchedItem);
      setActiveLevel(initialMatchedItem.parent);
    }

    var removeListener = Object(utils["a" /* addHistoryListener */])(function () {
      setTimeout(function () {
        var matchedItem = Object(utils["b" /* getMatchingItem */])(menuItems);

        if (matchedItem) {
          setActiveItem(matchedItem);
        }
      }, 0);
    });
    return removeListener;
  }, [menuItems]);

  var getMenuItemsByCategory = function getMenuItemsByCategory(items) {
    return items.reduce(function (acc, item) {
      // Set up the category if it doesn't yet exist.
      if (!acc[item.parent]) {
        acc[item.parent] = {};
      } // Check if parent category is in the same menu.


      if (item.parent !== 'woocommerce' && categoriesMap[item.parent] && categoriesMap[item.parent].menuId !== item.menuId) {
        return acc;
      } // Create the menu object if it doesn't exist in this category.


      if (!acc[item.parent][item.menuId]) {
        acc[item.parent][item.menuId] = [];
      }

      acc[item.parent][item.menuId].push(item);
      return acc;
    }, {});
  };

  var categorizedItems = Object(external_this_wp_element_["useMemo"])(function () {
    return getMenuItemsByCategory(menuItems);
  }, [menuItems]);
  var navDomRef = Object(external_this_wp_element_["useRef"])(null);

  var trackBackClick = function trackBackClick(id) {
    Object(external_this_wc_tracks_["recordEvent"])('navigation_back_click', {
      category: id
    });
  };

  var isRootBackVisible = activeLevel === 'woocommerce' && rootBackUrl;
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-navigation"
  }, Object(external_this_wp_element_["createElement"])(header, null), Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-navigation__wrapper",
    ref: navDomRef
  }, Object(external_this_wp_element_["createElement"])(build_module["a" /* Navigation */], {
    activeItem: activeItem ? activeItem.id : null,
    activeMenu: activeLevel,
    onActivateMenu: function onActivateMenu() {
      if (navDomRef && navDomRef.current) {
        navDomRef.current.scrollTop = 0;
      }

      setActiveLevel.apply(void 0, arguments);
    }
  }, isRootBackVisible && Object(external_this_wp_element_["createElement"])(build_module["b" /* NavigationBackButton */], {
    className: "woocommerce-navigation__back-to-dashboard",
    href: rootBackUrl,
    backButtonLabel: rootBackLabel,
    onClick: function onClick() {
      return trackBackClick('woocommerce');
    }
  }), categories.map(function (category) {
    var _ref2 = categorizedItems[category.id] || {},
        primaryItems = _ref2.primary,
        secondaryItems = _ref2.secondary,
        pluginItems = _ref2.plugins;

    return Object(external_this_wp_element_["createElement"])(build_module["e" /* NavigationMenu */], {
      key: category.id,
      title: category.title,
      menu: category.id,
      parentMenu: category.parent,
      backButtonLabel: category.backButtonLabel || null,
      onBackButtonClick: isRootBackVisible ? null : function () {
        return trackBackClick(category.id);
      }
    }, !!primaryItems && Object(external_this_wp_element_["createElement"])(build_module["c" /* NavigationGroup */], null, primaryItems.map(function (item) {
      return Object(external_this_wp_element_["createElement"])(components_Item, {
        key: item.id,
        item: item
      });
    })), !!pluginItems && Object(external_this_wp_element_["createElement"])(build_module["c" /* NavigationGroup */], {
      title: category.id === 'woocommerce' ? Object(external_this_wp_i18n_["__"])('Extensions', 'woocommerce-admin') : null
    }, pluginItems.map(function (item) {
      return Object(external_this_wp_element_["createElement"])(components_Item, {
        key: item.id,
        item: item
      });
    })), !!secondaryItems && Object(external_this_wp_element_["createElement"])(build_module["c" /* NavigationGroup */], {
      onBackButtonClick: function onBackButtonClick() {
        return trackBackClick(category.id);
      }
    }, secondaryItems.map(function (item) {
      return Object(external_this_wp_element_["createElement"])(components_Item, {
        key: item.id,
        item: item
      });
    })));
  }))));
};

/* harmony default export */ var container = (Object(external_this_wp_compose_["compose"])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select(external_this_wc_data_["NAVIGATION_STORE_NAME"]),
      getActiveItem = _select.getActiveItem,
      getMenuItems = _select.getMenuItems;

  return {
    activeItem: getActiveItem(),
    menuItems: getMenuItems()
  };
}))(container_Container));
// CONCATENATED MODULE: ./client/navigation/index.js


/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




var navigation_Navigation = function Navigation() {
  return Object(external_this_wp_element_["createElement"])(external_this_wc_navigation_["NavSlotFillProvider"], null, Object(external_this_wp_element_["createElement"])(container, null), Object(external_this_wp_element_["createElement"])(external_this_wp_plugins_["PluginArea"], null));
};

var HydratedNavigation = Object(external_this_wc_data_["withNavigationHydration"])(window.wcNavigation)(navigation_Navigation);
/* harmony default export */ var navigation = __webpack_exports__["a"] = (HydratedNavigation);

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

(function() { module.exports = this["wc"]["date"]; }());

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(471);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stylesheets_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(298);
/* harmony import */ var _stylesheets_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(141);
/* harmony import */ var _customer_effort_score_tracks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(286);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(287);


/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




 // Modify webpack pubilcPath at runtime based on location of WordPress Plugin.
// eslint-disable-next-line no-undef,camelcase

__webpack_require__.p = global.wcAdminAssets.path;
var appRoot = document.getElementById('root');
var embeddedRoot = document.getElementById('woocommerce-embedded-root');
var settingsGroup = 'wc_admin';
var hydrateUser = window.wcSettings.currentUserData;

if (appRoot) {
  var HydratedPageLayout = Object(_woocommerce_data__WEBPACK_IMPORTED_MODULE_2__["withSettingsHydration"])(settingsGroup, window.wcSettings)(_layout__WEBPACK_IMPORTED_MODULE_4__[/* PageLayout */ "b"]);
  var hydrateSettings = window.wcSettings.preloadSettings && window.wcSettings.preloadSettings.general;

  if (hydrateSettings) {
    HydratedPageLayout = Object(_woocommerce_data__WEBPACK_IMPORTED_MODULE_2__["withSettingsHydration"])('general', {
      general: window.wcSettings.preloadSettings.general
    })(HydratedPageLayout);
  }

  if (hydrateUser) {
    HydratedPageLayout = Object(_woocommerce_data__WEBPACK_IMPORTED_MODULE_2__["withCurrentUserHydration"])(hydrateUser)(HydratedPageLayout);
  }

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(HydratedPageLayout, null), appRoot);
} else if (embeddedRoot) {
  var HydratedEmbedLayout = Object(_woocommerce_data__WEBPACK_IMPORTED_MODULE_2__["withSettingsHydration"])(settingsGroup, window.wcSettings)(_layout__WEBPACK_IMPORTED_MODULE_4__[/* EmbedLayout */ "a"]);

  if (hydrateUser) {
    HydratedEmbedLayout = Object(_woocommerce_data__WEBPACK_IMPORTED_MODULE_2__["withCurrentUserHydration"])(hydrateUser)(HydratedEmbedLayout);
  } // Render the header.


  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(HydratedEmbedLayout, null), embeddedRoot);
  embeddedRoot.classList.remove('is-embed-loading'); // Render notices just above the WP content div.

  var wpBody = document.getElementById('wpbody-content');
  var wrap = wpBody.querySelector('.wrap.woocommerce') || wpBody.querySelector('[class="wrap"]');
  var noticeContainer = document.createElement('div');
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woocommerce-layout"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_layout__WEBPACK_IMPORTED_MODULE_4__[/* PrimaryLayout */ "c"], null)), wpBody.insertBefore(noticeContainer, wrap));
}

var navigationRoot = document.getElementById('woocommerce-embedded-navigation');

if (navigationRoot) {
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_navigation__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null), navigationRoot);
} // Render the CustomerEffortScoreTracksContainer only if
// the feature flag is enabled.


if (window.wcAdminFeatures && window.wcAdminFeatures['customer-effort-score-tracks'] === true) {
  // Set up customer effort score survey.
  (function () {
    var root = appRoot || embeddedRoot;
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_customer_effort_score_tracks__WEBPACK_IMPORTED_MODULE_5__[/* CustomerEffortScoreTracksContainer */ "a"], null), root.insertBefore(document.createElement('div'), null));
  })();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(82)))

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ 30:
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

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
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

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 306:
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 308:
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Navigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NavigationBackButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NavigationGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return NavigationMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NavigationItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return useSlot; });
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

/***/ 32:
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

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(96);

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

/***/ 36:
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

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ 39:
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

/***/ 4:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["htmlEntities"]; }());

/***/ }),

/***/ 41:
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

/***/ 42:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["hooks"]; }());

/***/ }),

/***/ 43:
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

/***/ 47:
/***/ (function(module, exports) {

(function() { module.exports = this["wc"]["components"]; }());

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// NAMESPACE OBJECT: ./node_modules/@wordpress/notices/build-module/store/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "createNotice", function() { return createNotice; });
__webpack_require__.d(actions_namespaceObject, "createSuccessNotice", function() { return createSuccessNotice; });
__webpack_require__.d(actions_namespaceObject, "createInfoNotice", function() { return createInfoNotice; });
__webpack_require__.d(actions_namespaceObject, "createErrorNotice", function() { return createErrorNotice; });
__webpack_require__.d(actions_namespaceObject, "createWarningNotice", function() { return createWarningNotice; });
__webpack_require__.d(actions_namespaceObject, "removeNotice", function() { return removeNotice; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/notices/build-module/store/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getNotices", function() { return getNotices; });

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(80);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(36);

// CONCATENATED MODULE: ./node_modules/@wordpress/notices/build-module/store/utils/on-sub-key.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Higher-order reducer creator which creates a combined reducer object, keyed
 * by a property on the action object.
 *
 * @param {string} actionProperty Action property by which to key object.
 *
 * @return {Function} Higher-order reducer.
 */
var on_sub_key_onSubKey = function onSubKey(actionProperty) {
  return function (reducer) {
    return function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var action = arguments.length > 1 ? arguments[1] : undefined;
      // Retrieve subkey from action. Do not track if undefined; useful for cases
      // where reducer is scoped by action shape.
      var key = action[actionProperty];

      if (key === undefined) {
        return state;
      } // Avoid updating state if unchanged. Note that this also accounts for a
      // reducer which returns undefined on a key which is not yet tracked.


      var nextKeyState = reducer(state[key], action);

      if (nextKeyState === state[key]) {
        return state;
      }

      return _objectSpread({}, state, Object(defineProperty["a" /* default */])({}, key, nextKeyState));
    };
  };
};
/* harmony default export */ var on_sub_key = (on_sub_key_onSubKey);
//# sourceMappingURL=on-sub-key.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/notices/build-module/store/reducer.js


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Reducer returning the next notices state. The notices state is an object
 * where each key is a context, its value an array of notice objects.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

var notices = on_sub_key('context')(function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'CREATE_NOTICE':
      // Avoid duplicates on ID.
      return [].concat(Object(toConsumableArray["a" /* default */])(Object(external_lodash_["reject"])(state, {
        id: action.notice.id
      })), [action.notice]);

    case 'REMOVE_NOTICE':
      return Object(external_lodash_["reject"])(state, {
        id: action.id
      });
  }

  return state;
});
/* harmony default export */ var store_reducer = (notices);
//# sourceMappingURL=reducer.js.map
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(8);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: ./node_modules/@wordpress/notices/build-module/store/constants.js
/**
 * Default context to use for notice grouping when not otherwise specified. Its
 * specific value doesn't hold much meaning, but it must be reasonably unique
 * and, more importantly, referenced consistently in the store implementation.
 *
 * @type {string}
 */
var DEFAULT_CONTEXT = 'global';
/**
 * Default notice status.
 *
 * @type {string}
 */

var DEFAULT_STATUS = 'info';
//# sourceMappingURL=constants.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/notices/build-module/store/actions.js


var _marked =
/*#__PURE__*/
regenerator_default.a.mark(createNotice);

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * @typedef {Object} WPNoticeAction Object describing a user action option associated with a notice.
 *
 * @property {string}    label    Message to use as action label.
 * @property {?string}   url      Optional URL of resource if action incurs
 *                                browser navigation.
 * @property {?Function} onClick  Optional function to invoke when action is
 *                                triggered by user.
 *
 */

/**
 * Yields action objects used in signalling that a notice is to be created.
 *
 * @param {string}                [status='info']              Notice status.
 * @param {string}                content                      Notice message.
 * @param {Object}                [options]                    Notice options.
 * @param {string}                [options.context='global']   Context under which to
 *                                                             group notice.
 * @param {string}                [options.id]                 Identifier for notice.
 *                                                             Automatically assigned
 *                                                             if not specified.
 * @param {boolean}               [options.isDismissible=true] Whether the notice can
 *                                                             be dismissed by user.
 * @param {string}                [options.type='default']     Type of notice, one of
 *                                                             `default`, or `snackbar`.
 * @param {boolean}               [options.speak=true]         Whether the notice
 *                                                             content should be
 *                                                             announced to screen
 *                                                             readers.
 * @param {Array<WPNoticeAction>} [options.actions]            User actions to be
 *                                                             presented with notice.
 */

function createNotice() {
  var status,
      content,
      options,
      _options$speak,
      speak,
      _options$isDismissibl,
      isDismissible,
      _options$context,
      context,
      _options$id,
      id,
      _options$actions,
      actions,
      _options$type,
      type,
      __unstableHTML,
      _args = arguments;

  return regenerator_default.a.wrap(function createNotice$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          status = _args.length > 0 && _args[0] !== undefined ? _args[0] : DEFAULT_STATUS;
          content = _args.length > 1 ? _args[1] : undefined;
          options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
          _options$speak = options.speak, speak = _options$speak === void 0 ? true : _options$speak, _options$isDismissibl = options.isDismissible, isDismissible = _options$isDismissibl === void 0 ? true : _options$isDismissibl, _options$context = options.context, context = _options$context === void 0 ? DEFAULT_CONTEXT : _options$context, _options$id = options.id, id = _options$id === void 0 ? Object(external_lodash_["uniqueId"])(context) : _options$id, _options$actions = options.actions, actions = _options$actions === void 0 ? [] : _options$actions, _options$type = options.type, type = _options$type === void 0 ? 'default' : _options$type, __unstableHTML = options.__unstableHTML; // The supported value shape of content is currently limited to plain text
          // strings. To avoid setting expectation that e.g. a WPElement could be
          // supported, cast to a string.

          content = String(content);

          if (!speak) {
            _context.next = 8;
            break;
          }

          _context.next = 8;
          return {
            type: 'SPEAK',
            message: content,
            ariaLive: type === 'snackbar' ? 'polite' : 'assertive'
          };

        case 8:
          _context.next = 10;
          return {
            type: 'CREATE_NOTICE',
            context: context,
            notice: {
              id: id,
              status: status,
              content: content,
              __unstableHTML: __unstableHTML,
              isDismissible: isDismissible,
              actions: actions,
              type: type
            }
          };

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Returns an action object used in signalling that a success notice is to be
 * created. Refer to `createNotice` for options documentation.
 *
 * @see createNotice
 *
 * @param {string} content   Notice message.
 * @param {Object} [options] Optional notice options.
 *
 * @return {Object} Action object.
 */

function createSuccessNotice(content, options) {
  return createNotice('success', content, options);
}
/**
 * Returns an action object used in signalling that an info notice is to be
 * created. Refer to `createNotice` for options documentation.
 *
 * @see createNotice
 *
 * @param {string} content   Notice message.
 * @param {Object} [options] Optional notice options.
 *
 * @return {Object} Action object.
 */

function createInfoNotice(content, options) {
  return createNotice('info', content, options);
}
/**
 * Returns an action object used in signalling that an error notice is to be
 * created. Refer to `createNotice` for options documentation.
 *
 * @see createNotice
 *
 * @param {string} content   Notice message.
 * @param {Object} [options] Optional notice options.
 *
 * @return {Object} Action object.
 */

function createErrorNotice(content, options) {
  return createNotice('error', content, options);
}
/**
 * Returns an action object used in signalling that a warning notice is to be
 * created. Refer to `createNotice` for options documentation.
 *
 * @see createNotice
 *
 * @param {string} content   Notice message.
 * @param {Object} [options] Optional notice options.
 *
 * @return {Object} Action object.
 */

function createWarningNotice(content, options) {
  return createNotice('warning', content, options);
}
/**
 * Returns an action object used in signalling that a notice is to be removed.
 *
 * @param {string} id                 Notice unique identifier.
 * @param {string} [context='global'] Optional context (grouping) in which the notice is
 *                                    intended to appear. Defaults to default context.
 *
 * @return {Object} Action object.
 */

function removeNotice(id) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_CONTEXT;
  return {
    type: 'REMOVE_NOTICE',
    id: id,
    context: context
  };
}
//# sourceMappingURL=actions.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/notices/build-module/store/selectors.js
/**
 * Internal dependencies
 */

/** @typedef {import('./actions').WPNoticeAction} WPNoticeAction */

/**
 * The default empty set of notices to return when there are no notices
 * assigned for a given notices context. This can occur if the getNotices
 * selector is called without a notice ever having been created for the
 * context. A shared value is used to ensure referential equality between
 * sequential selector calls, since otherwise `[] !== []`.
 *
 * @type {Array}
 */

var DEFAULT_NOTICES = [];
/**
 * @typedef {Object} WPNotice Notice object.
 *
 * @property {string}  id               Unique identifier of notice.
 * @property {string}  status           Status of notice, one of `success`,
 *                                      `info`, `error`, or `warning`. Defaults
 *                                      to `info`.
 * @property {string}  content          Notice message.
 * @property {string}  __unstableHTML   Notice message as raw HTML. Intended to
 *                                      serve primarily for compatibility of
 *                                      server-rendered notices, and SHOULD NOT
 *                                      be used for notices. It is subject to
 *                                      removal without notice.
 * @property {boolean} isDismissible    Whether the notice can be dismissed by
 *                                      user. Defaults to `true`.
 * @property {string}  type             Type of notice, one of `default`,
 *                                      or `snackbar`. Defaults to `default`.
 * @property {boolean} speak            Whether the notice content should be
 *                                      announced to screen readers. Defaults to
 *                                      `true`.
 * @property {WPNoticeAction[]} actions User actions to present with notice.
 *
 */

/**
 * Returns all notices as an array, optionally for a given context. Defaults to
 * the global context.
 *
 * @param {Object}  state   Notices state.
 * @param {?string} context Optional grouping context.
 *
 * @return {WPNotice[]} Array of notices.
 */

function getNotices(state) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_CONTEXT;
  return state[context] || DEFAULT_NOTICES;
}
//# sourceMappingURL=selectors.js.map
// EXTERNAL MODULE: ./node_modules/@wordpress/a11y/build-module/index.js + 4 modules
var build_module = __webpack_require__(140);

// CONCATENATED MODULE: ./node_modules/@wordpress/notices/build-module/store/controls.js
/**
 * WordPress dependencies
 */

/* harmony default export */ var controls = ({
  SPEAK: function SPEAK(action) {
    Object(build_module["a" /* speak */])(action.message, action.ariaLive || 'assertive');
  }
});
//# sourceMappingURL=controls.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/notices/build-module/store/index.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */





/* harmony default export */ var store = (Object(external_this_wp_data_["registerStore"])('core/notices', {
  reducer: store_reducer,
  actions: actions_namespaceObject,
  selectors: selectors_namespaceObject,
  controls: controls
}));
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/notices/build-module/index.js
/**
 * Internal dependencies
 */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 479:
/***/ (function(module, exports) {

(function() { module.exports = this["wc"]["csvExport"]; }());

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(87);
var parse = __webpack_require__(88);
var formats = __webpack_require__(52);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return domReady; });
/**
 * @typedef {() => void} Callback
 *
 * TODO: Remove this typedef and inline `() => void` type.
 *
 * This typedef is used so that a descriptive type is provided in our
 * automatically generated documentation.
 *
 * An in-line type `() => void` would be preferable, but the generated
 * documentation is `null` in that case.
 *
 * @see https://github.com/WordPress/gutenberg/issues/18045
 */

/**
 * Specify a function to execute when the DOM is fully loaded.
 *
 * @param {Callback} callback A function to execute after the DOM is ready.
 *
 * @example
 * ```js
 * import domReady from '@wordpress/dom-ready';
 *
 * domReady( function() {
 * 	//do something after DOM loads.
 * } );
 * ```
 *
 * @return {void}
 */
function domReady(callback) {
  if (document.readyState === 'complete' || // DOMContentLoaded + Images/Styles/etc loaded, so we call directly.
  document.readyState === 'interactive' // DOMContentLoaded fires at this point, so we call directly.
  ) {
      return void callback();
    } // DOMContentLoaded has not fired yet, delay callback until then.


  document.addEventListener('DOMContentLoaded', callback);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);

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

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ''));
}

/* harmony default export */ __webpack_exports__["a"] = (invariant);


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(37);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

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

/***/ 67:
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

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var formats = __webpack_require__(52);

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};


/***/ }),

/***/ 69:
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

/***/ 7:
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

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ createBrowserHistory; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ createMemoryHistory; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ createLocation; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ locationsAreEqual; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ createPath; });

// UNUSED EXPORTS: createHashHistory, parsePath

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/resolve-pathname/esm/resolve-pathname.js
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ var resolve_pathname = (resolvePathname);

// CONCATENATED MODULE: ./node_modules/value-equal/esm/value-equal.js
function value_equal_valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = value_equal_valueOf(a);
    var bValue = value_equal_valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ var value_equal = (valueEqual);

// EXTERNAL MODULE: ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js
var tiny_invariant_esm = __webpack_require__(56);

// CONCATENATED MODULE: ./node_modules/history/esm/history.js






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = Object(esm_extends["a" /* default */])({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolve_pathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && value_equal(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     false ? undefined : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           false ? undefined : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? undefined : Object(tiny_invariant_esm["a" /* default */])(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     false ? undefined : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(esm_extends["a" /* default */])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? undefined : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? undefined : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? undefined : Object(tiny_invariant_esm["a" /* default */])(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     false ? undefined : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(esm_extends["a" /* default */])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         false ? undefined : void 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     false ? undefined : void 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(esm_extends["a" /* default */])(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




/***/ }),

/***/ 72:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["date"]; }());

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return STORE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QUEUE_OPTION_NAME; });
var STORE_KEY = 'wc/customer-effort-score';
var API_NAMESPACE = '/wc-admin';
var QUEUE_OPTION_NAME = 'woocommerce_ces_tracks_queue';

/***/ }),

/***/ 74:
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

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(67);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _toConsumableArray; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__(69);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(arrayLikeToArray["a" /* default */])(arr);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(93);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || Object(unsupportedIterableToArray["a" /* default */])(arr) || _nonIterableSpread();
}

/***/ }),

/***/ 82:
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

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getFullUrl */
/* unused harmony export getMatchScore */
/* unused harmony export getDefaultMatchExpression */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addHistoryListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMatchingItem; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);


/**
 * External dependencies
 */

/**
 * Get the full URL if a relative path is passed.
 *
 * @param {string} url URL
 * @return {string} Full URL
 */

var getFullUrl = function getFullUrl(url) {
  var _window$location = window.location,
      origin = _window$location.origin,
      pathname = _window$location.pathname,
      search = _window$location.search;

  if (url.indexOf('#') === 0) {
    return origin + pathname + search + url;
  }

  if (url.indexOf('http') === 0) {
    return url;
  }

  return origin + url;
};
/**
 * Get a match score for a menu item given a location.
 *
 * @param {Object} location Window location
 * @param {string} itemUrl	 URL to compare
 * @param {string} itemExpression Custom match expression
 * @return {number} Number of matches or 0 if not matched.
 */

var getMatchScore = function getMatchScore(location, itemUrl) {
  var itemExpression = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (!itemUrl) {
    return;
  }

  var fullUrl = getFullUrl(itemUrl);
  var href = location.href; // Return highest possible score for exact match.

  if (fullUrl === href) {
    return Number.MAX_SAFE_INTEGER;
  }

  var defaultExpression = getDefaultMatchExpression(fullUrl);
  var regexp = new RegExp(itemExpression || defaultExpression, 'i');
  return (decodeURIComponent(href).match(regexp) || []).length;
};
/**
 * Get a default expression to match the path and provided params.
 *
 * @param {string} url URL to match.
 * @return {string} Regex expression.
 */

var getDefaultMatchExpression = function getDefaultMatchExpression(url) {
  var escapedUrl = url.replace(/[-\/\\^$*+?.()|[\]{}]/gi, '\\$&');

  var _escapedUrl$split = escapedUrl.split(/\\\?|#/),
      _escapedUrl$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_escapedUrl$split, 3),
      path = _escapedUrl$split2[0],
      args = _escapedUrl$split2[1],
      hash = _escapedUrl$split2[2];

  var hashExpression = hash ? "(.*#".concat(hash, "$)") : '';
  var argsExpression = args ? args.split('&').reduce(function (acc, param) {
    return "".concat(acc, "(?=.*[?|&]").concat(param, "(&|$|#))");
  }, '') : '';
  return '^' + path + argsExpression + hashExpression;
};
/**
 * Adds a listener that runs on history change.
 *
 * @param {Function} listener Listener to add on history change.
 * @return {Function} Function to remove listeners.
 */

var addHistoryListener = function addHistoryListener(listener) {
  // Monkey patch pushState to allow trigger the pushstate event listener.
  if (!window.wcNavigation.historyPatched) {
    (function (history) {
      /* global CustomEvent */
      var pushState = history.pushState;
      var replaceState = history.replaceState;

      history.pushState = function (state) {
        var pushStateEvent = new CustomEvent('pushstate', {
          state: state
        });
        window.dispatchEvent(pushStateEvent);
        return pushState.apply(history, arguments);
      };

      history.replaceState = function (state) {
        var replaceStateEvent = new CustomEvent('replacestate', {
          state: state
        });
        window.dispatchEvent(replaceStateEvent);
        return replaceState.apply(history, arguments);
      };

      window.wcNavigation.historyPatched = true;
    })(window.history);
  }

  window.addEventListener('popstate', listener);
  window.addEventListener('pushstate', listener);
  window.addEventListener('replacestate', listener);
  return function () {
    window.removeEventListener('popstate', listener);
    window.removeEventListener('pushstate', listener);
    window.removeEventListener('replacestate', listener);
  };
};
/**
 * Get the closest matching item.
 *
 * @param {Array} items An array of items to match against.
 */

var getMatchingItem = function getMatchingItem(items) {
  var matchedItem = null;
  var highestMatchScore = 0;
  items.forEach(function (item) {
    var score = getMatchScore(window.location, Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_1__[/* getAdminLink */ "f"])(item.url), item.matchExpression);

    if (score > 0 && score >= highestMatchScore) {
      highestMatchScore = score;
      matchedItem = item;
    }
  });
  return matchedItem || null;
};

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(68);
var formats = __webpack_require__(52);
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        var value = typeof key === 'object' && key.value !== undefined ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
            : prefix + (allowDots ? '.' + key : '[' + key + ']');

        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(68);

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ 9:
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
}

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCountryCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCurrencyRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getProductIdsForCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCategorizedOnboardingProducts; });
/* unused harmony export getProductList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getPriceValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isWCAdmin; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);


/**
 * External dependencies
 */



/**
 * Gets the country code from a country:state value string.
 *
 * @param {string} countryState Country state string, e.g. US:GA.
 * @return {string} Country string.
 */

function getCountryCode(countryState) {
  if (!countryState) {
    return null;
  }

  return countryState.split(':')[0];
}
function getCurrencyRegion(countryState) {
  var region = getCountryCode(countryState);
  var euCountries = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["without"])(Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_3__[/* getSetting */ "g"])('onboarding', {
    euCountries: []
  }).euCountries, 'GB');

  if (euCountries.includes(region)) {
    region = 'EU';
  }

  return region;
}
/**
 * Gets the product IDs for items based on the product types and theme selected in the onboarding profiler.
 *
 * @param {Object} profileItems Onboarding profile.
 * @param {boolean} includeInstalledItems Include installed items in returned product IDs.
 * @param {Array} installedPlugins Installed plugins.
 * @return {Array} Product Ids.
 */

function getProductIdsForCart(profileItems) {
  var includeInstalledItems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var installedPlugins = arguments.length > 2 ? arguments[2] : undefined;
  var productList = getProductList(profileItems, includeInstalledItems, installedPlugins);
  var productIds = productList.map(function (product) {
    return product.id || product.product;
  });
  return productIds;
}
/**
 * Gets the labeled/categorized product names and types for items based on the product types and theme selected in the onboarding profiler.
 *
 * @param {Object} profileItems Onboarding profile.
 * @param {Array} installedPlugins Installed plugins.
 * @return {Array} Objects with labeled/categorized product names and types.
 */

function getCategorizedOnboardingProducts(profileItems, installedPlugins) {
  var productList = {};
  productList.products = getProductList(profileItems, true, installedPlugins);
  productList.remainingProducts = getProductList(profileItems, false, installedPlugins);

  var uniqueItemsList = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(new Set([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(productList.products), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(productList.remainingProducts))));

  productList.uniqueItemsList = uniqueItemsList.map(function (product) {
    var cleanedProduct;

    if (product.label) {
      cleanedProduct = {
        type: 'extension',
        name: product.label
      };
    } else {
      cleanedProduct = {
        type: 'theme',
        name: product.title
      };
    }

    return cleanedProduct;
  });
  return productList;
}
/**
 * Gets a product list for items based on the product types and theme selected in the onboarding profiler.
 *
 * @param {Object} profileItems Onboarding profile.
 * @param {boolean} includeInstalledItems Include installed items in returned product list.
 * @param {Array} installedPlugins Installed plugins.
 * @return {Array} Products.
 */

function getProductList(profileItems) {
  var includeInstalledItems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var installedPlugins = arguments.length > 2 ? arguments[2] : undefined;
  var onboarding = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_3__[/* getSetting */ "g"])('onboarding', {});
  var productList = []; // The population of onboarding.productTypes only happens if the task list should be shown
  // so bail early if it isn't present.

  if (!onboarding.productTypes) {
    return productList;
  }

  var productTypes = profileItems.product_types || [];
  productTypes.forEach(function (productType) {
    if (onboarding.productTypes[productType] && onboarding.productTypes[productType].product && (includeInstalledItems || !installedPlugins.includes(onboarding.productTypes[productType].slug))) {
      productList.push(onboarding.productTypes[productType]);
    }
  });
  var theme = onboarding.themes.find(function (themeData) {
    return themeData.slug === profileItems.theme;
  });

  if (theme && theme.id && getPriceValue(theme.price) > 0 && (includeInstalledItems || !theme.is_installed)) {
    productList.push(theme);
  }

  return productList;
}
/**
 * Get the value of a price from a string, removing any non-numeric characters.
 *
 * @param {string} string Price string.
 * @return {number} Number value.
 */

function getPriceValue(string) {
  return Number(Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__["decodeEntities"])(string).replace(/[^0-9.-]+/g, ''));
}
/**
 * Determines if a URL is a WC admin url.
 *
 * @param {*} url - the url to test
 * @return {boolean} true if the url is a wc-admin URL
 */

function isWCAdmin(url) {
  return /admin.php\?page=wc-admin/.test(url);
}

/***/ }),

/***/ 96:
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

/***/ })

/******/ });