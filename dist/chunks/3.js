(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[3],{

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

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */



function FlexItem(_ref, ref) {
  var className = _ref.className,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["className"]);

  var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()('components-flex__item', className);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_styles_flex_styles__WEBPACK_IMPORTED_MODULE_4__[/* Item */ "b"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
    className: classes,
    ref: ref
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(FlexItem));
//# sourceMappingURL=item.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(12);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js
var use_instance_id = __webpack_require__(300);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__(575);

// EXTERNAL MODULE: ./node_modules/@wordpress/primitives/build-module/svg/index.js
var svg = __webpack_require__(88);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/node_modules/@wordpress/icons/build-module/library/chevron-down.js


/**
 * WordPress dependencies
 */

var chevronDown = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"
}));
/* harmony default export */ var chevron_down = (chevronDown);
//# sourceMappingURL=chevron-down.js.map
// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/base-control/index.js
var base_control = __webpack_require__(767);

// EXTERNAL MODULE: ./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js + 1 modules
var styled_base_browser_esm = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/@emotion/core/dist/core.browser.esm.js + 6 modules
var core_browser_esm = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/flex/index.js
var flex = __webpack_require__(301);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/flex/item.js
var item = __webpack_require__(545);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/text/index.js + 3 modules
var build_module_text = __webpack_require__(190);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/utils/colors.js
var colors = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/utils/rtl.js
/**
 * External dependencies
 */


var LOWER_LEFT_REGEXP = new RegExp(/-left/g);
var LOWER_RIGHT_REGEXP = new RegExp(/-right/g);
var UPPER_LEFT_REGEXP = new RegExp(/Left/g);
var UPPER_RIGHT_REGEXP = new RegExp(/Right/g);
/**
 * Checks to see whether the document is set to rtl.
 *
 * @return {boolean} Whether document is RTL.
 */

function getRTL() {
  return !!(document && document.documentElement.dir === 'rtl');
}
/**
 * Simple hook to retrieve RTL direction value
 *
 * @return {boolean} Whether document is RTL.
 */

function useRTL() {
  return getRTL();
}
/**
 * Flips a CSS property from left <-> right.
 *
 * @param {string} key The CSS property name.
 *
 * @return {string} The flipped CSS property name, if applicable.
 */

function getConvertedKey(key) {
  if (key === 'left') {
    return 'right';
  }

  if (key === 'right') {
    return 'left';
  }

  if (LOWER_LEFT_REGEXP.test(key)) {
    return key.replace(LOWER_LEFT_REGEXP, '-right');
  }

  if (LOWER_RIGHT_REGEXP.test(key)) {
    return key.replace(LOWER_RIGHT_REGEXP, '-left');
  }

  if (UPPER_LEFT_REGEXP.test(key)) {
    return key.replace(UPPER_LEFT_REGEXP, 'Right');
  }

  if (UPPER_RIGHT_REGEXP.test(key)) {
    return key.replace(UPPER_RIGHT_REGEXP, 'Left');
  }

  return key;
}
/**
 * An incredibly basic ltr -> rtl converter for style properties
 *
 * @param {Object} ltrStyles
 *
 * @return {Object} Converted ltr -> rtl styles
 */


var rtl_convertLTRToRTL = function convertLTRToRTL() {
  var ltrStyles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object(external_lodash_["mapKeys"])(ltrStyles, function (_value, key) {
    return getConvertedKey(key);
  });
};
/**
 * A higher-order function that create an incredibly basic ltr -> rtl style converter for CSS objects.
 *
 * @param {Object} ltrStyles Ltr styles. Converts and renders from ltr -> rtl styles, if applicable.
 * @param {null|Object} rtlStyles Rtl styles. Renders if provided.
 *
 * @return {Function} A function to output CSS styles for Emotion's renderer
 */

function rtl() {
  var ltrStyles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var rtlStyles = arguments.length > 1 ? arguments[1] : undefined;
  return function () {
    var isRTL = getRTL();

    if (rtlStyles) {
      return isRTL ? /*#__PURE__*/Object(core_browser_esm["b" /* css */])(rtlStyles,  true ? "" : undefined) : /*#__PURE__*/Object(core_browser_esm["b" /* css */])(ltrStyles,  true ? "" : undefined);
    }

    return isRTL ? /*#__PURE__*/Object(core_browser_esm["b" /* css */])(rtl_convertLTRToRTL(ltrStyles),  true ? "" : undefined) : /*#__PURE__*/Object(core_browser_esm["b" /* css */])(ltrStyles,  true ? "" : undefined);
  };
}
//# sourceMappingURL=rtl.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/input-control/styles/input-control-styles.js




function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */




var input_control_styles_ref =  true ? {
  name: "1dacand",
  styles: "padding-top:0;"
} : undefined;

var rootFloatLabelStyles = function rootFloatLabelStyles() {
  return input_control_styles_ref;
};

var input_control_styles_ref2 =  true ? {
  name: "r6z5ec",
  styles: "z-index:1;"
} : undefined;

var rootFocusedStyles = function rootFocusedStyles(_ref8) {
  var isFocused = _ref8.isFocused;
  if (!isFocused) return '';
  return input_control_styles_ref2;
};

var input_control_styles_ref3 =  true ? {
  name: "uz6002",
  styles: "align-items:flex-start;flex-direction:column;"
} : undefined;

var _ref4 =  true ? {
  name: "53hdd7",
  styles: "align-items:flex-start;flex-direction:column-reverse;"
} : undefined;

var rootLabelPositionStyles = function rootLabelPositionStyles(_ref9) {
  var labelPosition = _ref9.labelPosition;

  switch (labelPosition) {
    case 'top':
      return input_control_styles_ref3;

    case 'bottom':
      return _ref4;

    default:
      return '';
  }
};

var Root = /*#__PURE__*/Object(styled_base_browser_esm["a" /* default */])(flex["a" /* default */], {
  target: "e1cr7zh10",
  label: "Root"
})("position:relative;border-radius:2px;", rootFloatLabelStyles, ";", rootFocusedStyles, ";", rootLabelPositionStyles, ";" + ( true ? "" : undefined));

var input_control_styles_containerDisabledStyles = function containerDisabledStyles(_ref10) {
  var disabled = _ref10.disabled;
  var backgroundColor = disabled ? Object(colors["a" /* color */])('ui.backgroundDisabled') : Object(colors["a" /* color */])('ui.background');
  return /*#__PURE__*/Object(core_browser_esm["b" /* css */])({
    backgroundColor: backgroundColor
  },  true ? "" : undefined);
};

var _ref5 =  true ? {
  name: "8atqhb",
  styles: "width:100%;"
} : undefined;

var containerWidthStyles = function containerWidthStyles(_ref11) {
  var labelPosition = _ref11.labelPosition;
  if (labelPosition === 'side') return '';
  return _ref5;
};

var Container = Object(styled_base_browser_esm["a" /* default */])("div", {
  target: "e1cr7zh11",
  label: "Container"
})("align-items:center;box-sizing:border-box;border-radius:inherit;display:flex;flex:1;position:relative;", input_control_styles_containerDisabledStyles, ";", containerWidthStyles, ";" + ( true ? "" : undefined));

var input_control_styles_disabledStyles = function disabledStyles(_ref12) {
  var disabled = _ref12.disabled;
  if (!disabled) return '';
  return /*#__PURE__*/Object(core_browser_esm["b" /* css */])({
    color: Object(colors["a" /* color */])('ui.textDisabled')
  },  true ? "" : undefined);
};

var input_control_styles_fontSizeStyles = function fontSizeStyles(_ref13) {
  var size = _ref13.size;
  var sizes = {
    default: '13px',
    small: '11px'
  };
  var fontSize = sizes[size];
  var fontSizeMobile = '16px';
  if (!fontSize) return '';
  return /*#__PURE__*/Object(core_browser_esm["b" /* css */])("font-size:", fontSizeMobile, ";@media ( min-width:600px ){font-size:", fontSize, ";}" + ( true ? "" : undefined));
};

var input_control_styles_sizeStyles = function sizeStyles(_ref14) {
  var size = _ref14.size;
  var sizes = {
    default: {
      height: 30,
      lineHeight: 1,
      minHeight: 30
    },
    small: {
      height: 24,
      lineHeight: 1,
      minHeight: 24
    }
  };
  var style = sizes[size] || sizes.default;
  return /*#__PURE__*/Object(core_browser_esm["b" /* css */])(style,  true ? "" : undefined);
};

var _ref6 =  true ? {
  name: "103r1kr",
  styles: "&::-webkit-input-placeholder{line-height:normal;}"
} : undefined;

var placeholderStyles = function placeholderStyles() {
  return _ref6;
};

var input_control_styles_dragStyles = function dragStyles(_ref15) {
  var isDragging = _ref15.isDragging,
      dragCursor = _ref15.dragCursor;
  var defaultArrowStyles = '';
  var activeDragCursorStyles = '';

  if (isDragging) {
    defaultArrowStyles = /*#__PURE__*/Object(core_browser_esm["b" /* css */])("cursor:", dragCursor, ";user-select:none;&::-webkit-outer-spin-button,&::-webkit-inner-spin-button{-webkit-appearance:none !important;margin:0 !important;}" + ( true ? "" : undefined));
  }

  if (isDragging && dragCursor) {
    activeDragCursorStyles = /*#__PURE__*/Object(core_browser_esm["b" /* css */])("&:active{cursor:", dragCursor, ";}" + ( true ? "" : undefined));
  }

  return /*#__PURE__*/Object(core_browser_esm["b" /* css */])(defaultArrowStyles, ";", activeDragCursorStyles, ";" + ( true ? "" : undefined));
}; // TODO: Resolve need to use &&& to increase specificity
// https://github.com/WordPress/gutenberg/issues/18483


var Input = Object(styled_base_browser_esm["a" /* default */])("input", {
  target: "e1cr7zh12",
  label: "Input"
})("&&&{background-color:transparent;box-sizing:border-box;border:none;box-shadow:none !important;color:", Object(colors["a" /* color */])('black'), ";display:block;margin:0;outline:none;padding-left:8px;padding-right:8px;width:100%;", input_control_styles_dragStyles, ";", input_control_styles_disabledStyles, ";", input_control_styles_fontSizeStyles, ";", input_control_styles_sizeStyles, ";", placeholderStyles, ";}" + ( true ? "" : undefined));

var _ref7 =  true ? {
  name: "8uhtka",
  styles: "overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
} : undefined;

var labelTruncation = function labelTruncation() {
  return _ref7;
};

var BaseLabel = /*#__PURE__*/Object(styled_base_browser_esm["a" /* default */])(build_module_text["a" /* default */], {
  target: "e1cr7zh13",
  label: "BaseLabel"
})("&&&{box-sizing:border-box;color:currentColor;display:block;margin:0;max-width:100%;padding-bottom:4px;padding-top:0;z-index:1;", labelTruncation, ";}" + ( true ? "" : undefined));

var input_control_styles_Label = function Label(props) {
  return Object(external_this_wp_element_["createElement"])(BaseLabel, Object(esm_extends["a" /* default */])({}, props, {
    as: "label"
  }));
};
var LabelWrapper = /*#__PURE__*/Object(styled_base_browser_esm["a" /* default */])(item["a" /* default */], {
  target: "e1cr7zh14",
  label: "LabelWrapper"
})( true ? {
  name: "120o8im",
  styles: "max-width:calc( 100% - 10px );"
} : undefined);

var input_control_styles_backdropFocusedStyles = function backdropFocusedStyles(_ref16) {
  var disabled = _ref16.disabled,
      isFocused = _ref16.isFocused;
  var borderColor = isFocused ? Object(colors["a" /* color */])('ui.borderFocus') : Object(colors["a" /* color */])('ui.border');
  var boxShadow = null;

  if (isFocused) {
    boxShadow = "0 0 0 1px ".concat(Object(colors["a" /* color */])('ui.borderFocus'), " inset");
  }

  if (disabled) {
    borderColor = Object(colors["a" /* color */])('ui.borderDisabled');
  }

  return /*#__PURE__*/Object(core_browser_esm["b" /* css */])({
    boxShadow: boxShadow,
    borderColor: borderColor,
    borderStyle: 'solid',
    borderWidth: 1
  },  true ? "" : undefined);
};

var BackdropUI = Object(styled_base_browser_esm["a" /* default */])("div", {
  target: "e1cr7zh15",
  label: "BackdropUI"
})("&&&{box-sizing:border-box;border-radius:inherit;bottom:0;left:0;margin:0;padding:0;pointer-events:none;position:absolute;right:0;top:0;", input_control_styles_backdropFocusedStyles, ";", rtl({
  paddingLeft: 2
}), "}" + ( true ? "" : undefined));
var Prefix = Object(styled_base_browser_esm["a" /* default */])("span", {
  target: "e1cr7zh16",
  label: "Prefix"
})( true ? {
  name: "1pxuk39",
  styles: "box-sizing:border-box;display:block;"
} : undefined);
var Suffix = Object(styled_base_browser_esm["a" /* default */])("span", {
  target: "e1cr7zh17",
  label: "Suffix"
})( true ? {
  name: "1pxuk39",
  styles: "box-sizing:border-box;display:block;"
} : undefined);
//# sourceMappingURL=input-control-styles.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/input-control/backdrop.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



function Backdrop(_ref) {
  var _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$isFocused = _ref.isFocused,
      isFocused = _ref$isFocused === void 0 ? false : _ref$isFocused;
  return Object(external_this_wp_element_["createElement"])(BackdropUI, {
    "aria-hidden": "true",
    className: "components-input-control__backdrop",
    disabled: disabled,
    isFocused: isFocused
  });
}

var MemoizedBackdrop = Object(external_this_wp_element_["memo"])(Backdrop);
/* harmony default export */ var backdrop = (MemoizedBackdrop);
//# sourceMappingURL=backdrop.js.map
// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/visually-hidden/index.js + 1 modules
var visually_hidden = __webpack_require__(439);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/input-control/label.js




/**
 * Internal dependencies
 */


function label_Label(_ref) {
  var children = _ref.children,
      hideLabelFromVision = _ref.hideLabelFromVision,
      htmlFor = _ref.htmlFor,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["children", "hideLabelFromVision", "htmlFor"]);

  if (!children) return null;

  if (hideLabelFromVision) {
    return Object(external_this_wp_element_["createElement"])(visually_hidden["a" /* default */], {
      as: "label",
      htmlFor: htmlFor
    }, children);
  }

  return Object(external_this_wp_element_["createElement"])(input_control_styles_Label, Object(esm_extends["a" /* default */])({
    htmlFor: htmlFor
  }, props), children);
}
//# sourceMappingURL=label.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/input-control/input-base.js




/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





function useUniqueId(idProp) {
  var instanceId = Object(use_instance_id["a" /* default */])(InputBase);
  var id = "input-base-control-".concat(instanceId);
  return idProp || id;
}

function InputBase(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$hideLabelFromVis = _ref.hideLabelFromVision,
      hideLabelFromVision = _ref$hideLabelFromVis === void 0 ? false : _ref$hideLabelFromVis,
      idProp = _ref.id,
      _ref$isFocused = _ref.isFocused,
      isFocused = _ref$isFocused === void 0 ? false : _ref$isFocused,
      label = _ref.label,
      prefix = _ref.prefix,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'default' : _ref$size,
      suffix = _ref.suffix,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["children", "className", "disabled", "hideLabelFromVision", "id", "isFocused", "label", "prefix", "size", "suffix"]);

  var id = useUniqueId(idProp);
  return Object(external_this_wp_element_["createElement"])(Root, Object(esm_extends["a" /* default */])({}, props, {
    className: className,
    isFocused: isFocused,
    ref: ref
  }), Object(external_this_wp_element_["createElement"])(LabelWrapper, null, Object(external_this_wp_element_["createElement"])(label_Label, {
    className: "components-input-control__label",
    hideLabelFromVision: hideLabelFromVision,
    htmlFor: id,
    size: size
  }, label)), Object(external_this_wp_element_["createElement"])(Container, {
    className: "components-input-control__container",
    disabled: disabled,
    isFocused: isFocused
  }, prefix && Object(external_this_wp_element_["createElement"])(Prefix, {
    className: "components-input-control__prefix"
  }, prefix), children, suffix && Object(external_this_wp_element_["createElement"])(Suffix, {
    className: "components-input-control__suffix"
  }, suffix), Object(external_this_wp_element_["createElement"])(backdrop, {
    "aria-hidden": "true",
    disabled: disabled,
    isFocused: isFocused,
    label: label,
    size: size
  })));
}
/* harmony default export */ var input_base = (Object(external_this_wp_element_["forwardRef"])(InputBase));
//# sourceMappingURL=input-base.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/select-control/styles/select-control-styles.js


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


var select_control_styles_disabledStyles = function disabledStyles(_ref) {
  var disabled = _ref.disabled;
  if (!disabled) return '';
  return /*#__PURE__*/Object(core_browser_esm["b" /* css */])({
    color: Object(colors["a" /* color */])('ui.textDisabled')
  },  true ? "" : undefined);
};

var select_control_styles_fontSizeStyles = function fontSizeStyles(_ref2) {
  var size = _ref2.size;
  var sizes = {
    default: '13px',
    small: '11px'
  };
  var fontSize = sizes[size];
  var fontSizeMobile = '16px';
  if (!fontSize) return '';
  return /*#__PURE__*/Object(core_browser_esm["b" /* css */])("font-size:", fontSizeMobile, ";@media ( min-width:600px ){font-size:", fontSize, ";}" + ( true ? "" : undefined));
};

var select_control_styles_sizeStyles = function sizeStyles(_ref3) {
  var size = _ref3.size;
  var sizes = {
    default: {
      height: 30,
      lineHeight: 1,
      minHeight: 30
    },
    small: {
      height: 24,
      lineHeight: 1,
      minHeight: 24
    }
  };
  var style = sizes[size] || sizes.default;
  return /*#__PURE__*/Object(core_browser_esm["b" /* css */])(style,  true ? "" : undefined);
}; // TODO: Resolve need to use &&& to increase specificity
// https://github.com/WordPress/gutenberg/issues/18483


var Select = Object(styled_base_browser_esm["a" /* default */])("select", {
  target: "e12x0a390",
  label: "Select"
})("&&&{appearance:none;background:transparent;box-sizing:border-box;border:none;box-shadow:none !important;color:", Object(colors["a" /* color */])('black'), ";display:block;margin:0;outline:none;width:100%;", select_control_styles_disabledStyles, ";", select_control_styles_fontSizeStyles, ";", select_control_styles_sizeStyles, ";", rtl({
  paddingLeft: 8,
  paddingRight: 24
})(), "}" + ( true ? "" : undefined));
var DownArrowWrapper = Object(styled_base_browser_esm["a" /* default */])("div", {
  target: "e12x0a391",
  label: "DownArrowWrapper"
})("align-items:center;bottom:0;box-sizing:border-box;display:flex;padding:0 4px;pointer-events:none;position:absolute;top:0;", rtl({
  right: 0
})(), " svg{display:block;}" + ( true ? "" : undefined));
//# sourceMappingURL=select-control-styles.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/select-control/index.js






/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */





function select_control_useUniqueId(idProp) {
  var instanceId = Object(use_instance_id["a" /* default */])(SelectControl);
  var id = "inspector-select-control-".concat(instanceId);
  return idProp || id;
}

function SelectControl(_ref, ref) {
  var className = _ref.className,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      help = _ref.help,
      hideLabelFromVision = _ref.hideLabelFromVision,
      idProp = _ref.id,
      label = _ref.label,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      _ref$onBlur = _ref.onBlur,
      onBlur = _ref$onBlur === void 0 ? external_lodash_["noop"] : _ref$onBlur,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? external_lodash_["noop"] : _ref$onChange,
      _ref$onFocus = _ref.onFocus,
      onFocus = _ref$onFocus === void 0 ? external_lodash_["noop"] : _ref$onFocus,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'default' : _ref$size,
      valueProp = _ref.value,
      _ref$labelPosition = _ref.labelPosition,
      labelPosition = _ref$labelPosition === void 0 ? 'top' : _ref$labelPosition,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["className", "disabled", "help", "hideLabelFromVision", "id", "label", "multiple", "onBlur", "onChange", "onFocus", "options", "size", "value", "labelPosition"]);

  var _useState = Object(external_this_wp_element_["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      isFocused = _useState2[0],
      setIsFocused = _useState2[1];

  var id = select_control_useUniqueId(idProp);
  var helpId = help ? "".concat(id, "__help") : undefined; // Disable reason: A select with an onchange throws a warning

  if (Object(external_lodash_["isEmpty"])(options)) return null;

  var handleOnBlur = function handleOnBlur(event) {
    onBlur(event);
    setIsFocused(false);
  };

  var handleOnFocus = function handleOnFocus(event) {
    onFocus(event);
    setIsFocused(true);
  };

  var handleOnChange = function handleOnChange(event) {
    if (multiple) {
      var selectedOptions = Object(toConsumableArray["a" /* default */])(event.target.options).filter(function (_ref2) {
        var selected = _ref2.selected;
        return selected;
      });

      var newValues = selectedOptions.map(function (_ref3) {
        var value = _ref3.value;
        return value;
      });
      onChange(newValues);
      return;
    }

    onChange(event.target.value, {
      event: event
    });
  };

  var classes = classnames_default()('components-select-control', className);
  /* eslint-disable jsx-a11y/no-onchange */

  return Object(external_this_wp_element_["createElement"])(base_control["a" /* default */], {
    help: help
  }, Object(external_this_wp_element_["createElement"])(input_base, {
    className: classes,
    disabled: disabled,
    hideLabelFromVision: hideLabelFromVision,
    id: id,
    isFocused: isFocused,
    label: label,
    size: size,
    suffix: Object(external_this_wp_element_["createElement"])(DownArrowWrapper, null, Object(external_this_wp_element_["createElement"])(icon["a" /* default */], {
      icon: chevron_down,
      size: 18
    })),
    labelPosition: labelPosition
  }, Object(external_this_wp_element_["createElement"])(Select, Object(esm_extends["a" /* default */])({}, props, {
    "aria-describedby": helpId,
    className: "components-select-control__input",
    disabled: disabled,
    id: id,
    multiple: multiple,
    onBlur: handleOnBlur,
    onChange: handleOnChange,
    onFocus: handleOnFocus,
    ref: ref,
    size: size,
    value: valueProp
  }), options.map(function (option, index) {
    var key = option.id || "".concat(option.label, "-").concat(option.value, "-").concat(index);
    return Object(external_this_wp_element_["createElement"])("option", {
      key: key,
      value: option.value,
      disabled: option.disabled
    }, option.label);
  }))));
  /* eslint-enable jsx-a11y/no-onchange */
}

var ForwardedComponent = Object(external_this_wp_element_["forwardRef"])(SelectControl);
/* harmony default export */ var select_control = __webpack_exports__["a"] = (ForwardedComponent);
//# sourceMappingURL=index.js.map

/***/ })

}]);