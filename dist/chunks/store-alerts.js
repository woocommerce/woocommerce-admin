(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[47],{

/***/ 219:
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

/***/ 243:
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

/***/ 244:
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

/***/ 245:
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

/***/ 246:
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

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ALLOWED_TAGS */
/* unused harmony export ALLOWED_ATTR */
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

var ALLOWED_TAGS = ['a', 'b', 'em', 'i', 'strong', 'p', 'br'];
var ALLOWED_ATTR = ['target', 'href', 'rel', 'name', 'download'];
/* harmony default export */ __webpack_exports__["a"] = (function (html) {
  return {
    __html: Object(dompurify__WEBPACK_IMPORTED_MODULE_0__["sanitize"])(html, {
      ALLOWED_TAGS: ALLOWED_TAGS,
      ALLOWED_ATTR: ALLOWED_ATTR
    })
  };
});

/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var chevronRight = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"
}));
/* harmony default export */ __webpack_exports__["a"] = (chevronRight);
//# sourceMappingURL=chevron-right.js.map

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "StoreAlerts", function() { return /* binding */ store_alerts_StoreAlerts; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(22);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(23);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(18);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(24);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(25);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(14);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(66);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(192);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(41);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(15);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/interpolate-components/lib/index.js
var lib = __webpack_require__(99);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(65);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(26);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(29);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__(426);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/chevron-left.js
var chevron_left = __webpack_require__(597);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/chevron-right.js
var chevron_right = __webpack_require__(630);

// EXTERNAL MODULE: ./client/wc-admin-settings/index.js
var wc_admin_settings = __webpack_require__(85);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(59);

// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(92);

// EXTERNAL MODULE: ./packages/experimental/build-module/index.js
var build_module = __webpack_require__(105);

// EXTERNAL MODULE: ./client/lib/sanitize-html/index.js
var sanitize_html = __webpack_require__(608);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./client/layout/store-alerts/placeholder.js








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */




var placeholder_StoreAlertsPlaceholder = /*#__PURE__*/function (_Component) {
  inherits_default()(StoreAlertsPlaceholder, _Component);

  var _super = _createSuper(StoreAlertsPlaceholder);

  function StoreAlertsPlaceholder() {
    classCallCheck_default()(this, StoreAlertsPlaceholder);

    return _super.apply(this, arguments);
  }

  createClass_default()(StoreAlertsPlaceholder, [{
    key: "render",
    value: function render() {
      var hasMultipleAlerts = this.props.hasMultipleAlerts;
      return Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
        className: "woocommerce-store-alerts is-loading",
        "aria-hidden": true,
        size: null
      }, Object(external_wp_element_["createElement"])(external_wp_components_["CardHeader"], {
        isBorderless: true
      }, Object(external_wp_element_["createElement"])("span", {
        className: "is-placeholder"
      }), hasMultipleAlerts && Object(external_wp_element_["createElement"])("span", {
        className: "is-placeholder"
      })), Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], null, Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-store-alerts__message"
      }, Object(external_wp_element_["createElement"])("span", {
        className: "is-placeholder"
      }), Object(external_wp_element_["createElement"])("span", {
        className: "is-placeholder"
      }))), Object(external_wp_element_["createElement"])(external_wp_components_["CardFooter"], {
        isBorderless: true
      }, Object(external_wp_element_["createElement"])("span", {
        className: "is-placeholder"
      })));
    }
  }]);

  return StoreAlertsPlaceholder;
}(external_wp_element_["Component"]);

/* harmony default export */ var placeholder = (placeholder_StoreAlertsPlaceholder);
placeholder_StoreAlertsPlaceholder.propTypes = {
  /**
   * Whether multiple alerts exists.
   */
  hasMultipleAlerts: prop_types_default.a.bool
};
placeholder_StoreAlertsPlaceholder.defaultProps = {
  hasMultipleAlerts: false
};
// EXTERNAL MODULE: ./client/layout/store-alerts/style.scss
var style = __webpack_require__(636);

// CONCATENATED MODULE: ./client/layout/store-alerts/index.js
















function store_alerts_createSuper(Derived) { var hasNativeReflectConstruct = store_alerts_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function store_alerts_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */













/**
 * Internal dependencies
 */




var store_alerts_StoreAlerts = /*#__PURE__*/function (_Component) {
  inherits_default()(StoreAlerts, _Component);

  var _super = store_alerts_createSuper(StoreAlerts);

  function StoreAlerts(props) {
    var _this;

    classCallCheck_default()(this, StoreAlerts);

    _this = _super.call(this, props);
    _this.state = {
      currentIndex: 0
    };
    _this.previousAlert = _this.previousAlert.bind(assertThisInitialized_default()(_this));
    _this.nextAlert = _this.nextAlert.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(StoreAlerts, [{
    key: "previousAlert",
    value: function previousAlert(event) {
      event.stopPropagation();
      var currentIndex = this.state.currentIndex;

      if (currentIndex > 0) {
        this.setState({
          currentIndex: currentIndex - 1
        });
      }
    }
  }, {
    key: "nextAlert",
    value: function nextAlert(event) {
      event.stopPropagation();
      var alerts = this.getAlerts();
      var currentIndex = this.state.currentIndex;

      if (currentIndex < alerts.length - 1) {
        this.setState({
          currentIndex: currentIndex + 1
        });
      }
    }
  }, {
    key: "renderActions",
    value: function renderActions(alert) {
      var _this$props = this.props,
          triggerNoteAction = _this$props.triggerNoteAction,
          updateNote = _this$props.updateNote;
      var actions = alert.actions.map(function (action) {
        return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
          key: action.name,
          isPrimary: action.primary,
          isSecondary: !action.primary,
          href: action.url || undefined,
          onClick: function onClick() {
            return triggerNoteAction(alert.id, action.id);
          }
        }, action.label);
      }); // TODO: should "next X" be the start, or exactly 1X from the current date?

      var snoozeOptions = [{
        value: external_moment_default()().add(4, 'hours').unix().toString(),
        label: Object(external_wp_i18n_["__"])('Later Today', 'woocommerce-admin')
      }, {
        value: external_moment_default()().add(1, 'day').hour(9).minute(0).second(0).millisecond(0).unix().toString(),
        label: Object(external_wp_i18n_["__"])('Tomorrow', 'woocommerce-admin')
      }, {
        value: external_moment_default()().add(1, 'week').hour(9).minute(0).second(0).millisecond(0).unix().toString(),
        label: Object(external_wp_i18n_["__"])('Next Week', 'woocommerce-admin')
      }, {
        value: external_moment_default()().add(1, 'month').hour(9).minute(0).second(0).millisecond(0).unix().toString(),
        label: Object(external_wp_i18n_["__"])('Next Month', 'woocommerce-admin')
      }];

      var setReminderDate = function setReminderDate(snoozeOption) {
        updateNote(alert.id, {
          status: 'snoozed',
          date_reminder: snoozeOption.value
        });
        var eventProps = {
          alert_name: alert.name,
          alert_title: alert.title,
          snooze_duration: snoozeOption.value,
          snooze_label: snoozeOption.label
        };
        Object(external_wc_tracks_["recordEvent"])('store_alert_snooze', eventProps);
      };

      var snooze = alert.is_snoozable && Object(external_wp_element_["createElement"])(external_wp_components_["SelectControl"], {
        className: "woocommerce-store-alerts__snooze",
        options: [{
          label: Object(external_wp_i18n_["__"])('Remind Me Later', 'woocommerce-admin'),
          value: '0'
        }].concat(snoozeOptions),
        onChange: function onChange(value) {
          if (value === '0') {
            return;
          }

          var reminderOption = snoozeOptions.find(function (option) {
            return option.value === value;
          });
          var reminderDate = {
            value: value,
            label: reminderOption && reminderOption.label
          };
          setReminderDate(reminderDate);
        }
      });

      if (actions || snooze) {
        return Object(external_wp_element_["createElement"])("div", {
          className: "woocommerce-store-alerts__actions"
        }, actions, snooze);
      }
    }
  }, {
    key: "getAlerts",
    value: function getAlerts() {
      return (this.props.alerts || []).filter(function (note) {
        return note.status === 'unactioned';
      });
    }
  }, {
    key: "render",
    value: function render() {
      var alerts = this.getAlerts();
      var preloadAlertCount = Object(wc_admin_settings["g" /* getSetting */])('alertCount', 0, function (count) {
        return parseInt(count, 10);
      });

      if (preloadAlertCount > 0 && this.props.isLoading) {
        return Object(external_wp_element_["createElement"])(placeholder, {
          hasMultipleAlerts: preloadAlertCount > 1
        });
      } else if (alerts.length === 0) {
        return null;
      }

      var currentIndex = this.state.currentIndex;
      var numberOfAlerts = alerts.length;
      var alert = alerts[currentIndex];
      var type = alert.type;
      var className = classnames_default()('woocommerce-store-alerts', {
        'is-alert-error': type === 'error',
        'is-alert-update': type === 'update'
      });
      return Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
        className: className,
        size: null
      }, Object(external_wp_element_["createElement"])(external_wp_components_["CardHeader"], {
        isBorderless: true
      }, Object(external_wp_element_["createElement"])(build_module["e" /* Text */], {
        variant: "title.medium",
        as: "h2"
      }, alert.icon && Object(external_wp_element_["createElement"])(external_wp_components_["Dashicon"], {
        key: "icon",
        icon: alert.icon
      }), alert.title), numberOfAlerts > 1 && Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-store-alerts__pagination"
      }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        onClick: this.previousAlert,
        disabled: currentIndex === 0,
        label: Object(external_wp_i18n_["__"])('Previous Alert', 'woocommerce-admin')
      }, Object(external_wp_element_["createElement"])(icon["a" /* default */], {
        icon: chevron_left["a" /* default */]
      })), Object(external_wp_element_["createElement"])("span", {
        className: "woocommerce-store-alerts__pagination-label",
        role: "status",
        "aria-live": "polite"
      }, lib_default()({
        mixedString: Object(external_wp_i18n_["__"])('{{current /}} of {{total /}}', 'woocommerce-admin'),
        components: {
          current: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, currentIndex + 1),
          total: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, numberOfAlerts)
        }
      })), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        onClick: this.nextAlert,
        disabled: numberOfAlerts - 1 === currentIndex,
        label: Object(external_wp_i18n_["__"])('Next Alert', 'woocommerce-admin')
      }, Object(external_wp_element_["createElement"])(icon["a" /* default */], {
        icon: chevron_right["a" /* default */]
      })))), Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], null, Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-store-alerts__message",
        dangerouslySetInnerHTML: Object(sanitize_html["a" /* default */])(alert.content)
      })), Object(external_wp_element_["createElement"])(external_wp_components_["CardFooter"], {
        isBorderless: true
      }, this.renderActions(alert)));
    }
  }]);

  return StoreAlerts;
}(external_wp_element_["Component"]);
var ALERTS_QUERY = {
  page: 1,
  per_page: external_wc_data_["QUERY_DEFAULTS"].pageSize,
  type: 'error,update',
  status: 'unactioned'
};
/* harmony default export */ var store_alerts = __webpack_exports__["default"] = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select(external_wc_data_["NOTES_STORE_NAME"]),
      getNotes = _select.getNotes,
      isResolving = _select.isResolving; // Filter out notes that may have been marked actioned or not delayed after the initial request


  var alerts = getNotes(ALERTS_QUERY);
  var isLoading = isResolving('getNotes', [ALERTS_QUERY]);
  return {
    alerts: alerts,
    isLoading: isLoading
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(external_wc_data_["NOTES_STORE_NAME"]),
      triggerNoteAction = _dispatch.triggerNoteAction,
      updateNote = _dispatch.updateNote;

  return {
    triggerNoteAction: triggerNoteAction,
    updateNote: updateNote
  };
}))(store_alerts_StoreAlerts));

/***/ }),

/***/ 99:
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

/***/ })

}]);