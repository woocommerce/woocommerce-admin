(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[5],{

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

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorizontalRule; });
var HorizontalRule = 'hr';
//# sourceMappingURL=index.js.map

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

/***/ })

}]);