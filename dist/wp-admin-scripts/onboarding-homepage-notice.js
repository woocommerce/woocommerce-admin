this["wc"] = this["wc"] || {}; this["wc"]["onboardingHomepageNotice"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 454);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ADMIN_URL */
/* unused harmony export COUNTRIES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ORDER_STATUSES; });
/* unused harmony export SITE_TITLE */
/* unused harmony export WC_ASSET_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return setSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getAdminLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return enqueueScript; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */
 // Remove mutable data from settings object to prevent access. Data stores should be used instead.

const mutableSources = ['wcAdminSettings', 'preloadSettings'];
const settings = typeof wcSettings === 'object' ? wcSettings : {};
const SOURCE = Object.keys(settings).reduce((source, key) => {
  if (!mutableSources.includes(key)) {
    source[key] = settings[key];
  }

  return source;
}, {});
Object.keys(settings.admin || {}).forEach(key => {
  if (!mutableSources.includes(key)) {
    SOURCE[key] = settings.admin[key];
  }
});
const ADMIN_URL = SOURCE.adminUrl;
const COUNTRIES = SOURCE.countries;
const CURRENCY = SOURCE.currency;
const LOCALE = SOURCE.locale;
const ORDER_STATUSES = SOURCE.orderStatuses;
const SITE_TITLE = SOURCE.siteTitle;
const WC_ASSET_URL = SOURCE.wcAssetUrl;
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

function getSetting(name, fallback = false, filter = val => val) {
  if (mutableSources.includes(name)) {
    throw new Error(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Mutable settings should be accessed via data store.'));
  }

  const value = SOURCE.hasOwnProperty(name) ? SOURCE[name] : fallback;
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

function setSetting(name, value, filter = val => val) {
  if (mutableSources.includes(name)) {
    throw new Error(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Mutable settings should be mutated via data store.'));
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
  return new Promise((resolve, reject) => {
    if (document.querySelector(`#${script.handle}-js`)) {
      resolve();
    }

    const domElement = document.createElement('script');
    domElement.src = script.src;
    domElement.id = `${script.handle}-js`;
    domElement.async = true;
    domElement.onload = resolve;
    domElement.onerror = reject;
    document.body.appendChild(domElement);
  });
}

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

(function() { module.exports = window["wc"]["tracks"]; }());

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_4__);
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */

/**
 * Returns a promise and resolves when the post begins to publish.
 *
 * @return {Promise} Promise for overlay existence.
 */

const saveStarted = () => {
  if (!document.querySelector('.editor-post-publish-button').classList.contains('is-busy')) {
    const promise = new Promise(resolve => {
      window.requestAnimationFrame(resolve);
    });
    return promise.then(() => saveStarted());
  }

  return Promise.resolve(true);
};
/**
 * Returns a promise and resolves when the post has been saved and notices have shown.
 *
 * @return {Promise} Promise for overlay existence.
 */


const saveCompleted = () => {
  if (document.querySelector('.editor-post-publish-button').classList.contains('is-busy')) {
    const promise = new Promise(resolve => {
      window.requestAnimationFrame(resolve);
    });
    return promise.then(() => saveCompleted());
  }

  return Promise.resolve(true);
};
/**
 * Displays a notice on page save and updates the hompage options.
 */


const onboardingHomepageNotice = () => {
  const saveButton = document.querySelector('.editor-post-publish-button');

  if (saveButton.classList.contains('is-clicked')) {
    return;
  }

  saveButton.classList.add('is-clicked');
  saveCompleted().then(() => {
    const notificationType = document.querySelector('.components-snackbar__content') !== null ? 'snackbar' : 'default';
    Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["dispatch"])('core/notices').removeNotice('SAVE_POST_NOTICE_ID');
    Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["dispatch"])('core/notices').createSuccessNotice(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("🏠 Nice work creating your store's homepage!", 'woocommerce-admin'), {
      id: 'WOOCOMMERCE_ONBOARDING_HOME_PAGE_NOTICE',
      type: notificationType,
      actions: [{
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Continue setup.', 'woocommerce-admin'),
        onClick: () => {
          Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_4__["queueRecordEvent"])('tasklist_appearance_continue_setup', {});
          window.location = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_3__[/* getAdminLink */ "e"])('admin.php?page=wc-admin&task=appearance');
        }
      }]
    });
  });
};

_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default()(() => {
  const publishButton = document.querySelector('.editor-post-publish-button');

  if (publishButton) {
    publishButton.addEventListener('click', saveStarted().then(() => onboardingHomepageNotice()));
  }
});

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["domReady"]; }());

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ })

/******/ });