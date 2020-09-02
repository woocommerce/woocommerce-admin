(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[51],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(19);

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

/***/ 279:
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

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
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

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _visually_hidden__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(278);


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function BaseControl(_ref) {
  var id = _ref.id,
      label = _ref.label,
      hideLabelFromVision = _ref.hideLabelFromVision,
      help = _ref.help,
      className = _ref.className,
      children = _ref.children;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('components-base-control', className)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "components-base-control__field"
  }, label && id && (hideLabelFromVision ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_visually_hidden__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    as: "label",
    htmlFor: id
  }, label) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    className: "components-base-control__label",
    htmlFor: id
  }, label)), label && !id && (hideLabelFromVision ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_visually_hidden__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    as: "label"
  }, label) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl.VisualLabel, null, label)), children), !!help && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    id: id + '__help',
    className: "components-base-control__help"
  }, help));
}

BaseControl.VisualLabel = function (_ref2) {
  var className = _ref2.className,
      children = _ref2.children;
  className = classnames__WEBPACK_IMPORTED_MODULE_1___default()('components-base-control__label', className);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: className
  }, children);
};

/* harmony default export */ __webpack_exports__["a"] = (BaseControl);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CheckboxControl; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(19);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js
var use_instance_id = __webpack_require__(279);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__(713);

// EXTERNAL MODULE: ./node_modules/@wordpress/primitives/build-module/svg/index.js
var svg = __webpack_require__(51);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/node_modules/@wordpress/icons/build-module/library/check.js


/**
 * WordPress dependencies
 */

var check = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M9 18.6L3.5 13l1-1L9 16.4l9.5-9.9 1 1z"
}));
/* harmony default export */ var library_check = (check);
//# sourceMappingURL=check.js.map
// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/base-control/index.js
var base_control = __webpack_require__(742);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/checkbox-control/index.js




/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function CheckboxControl(_ref) {
  var label = _ref.label,
      className = _ref.className,
      heading = _ref.heading,
      checked = _ref.checked,
      help = _ref.help,
      onChange = _ref.onChange,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["label", "className", "heading", "checked", "help", "onChange"]);

  var instanceId = Object(use_instance_id["a" /* default */])(CheckboxControl);
  var id = "inspector-checkbox-control-".concat(instanceId);

  var onChangeValue = function onChangeValue(event) {
    return onChange(event.target.checked);
  };

  return Object(external_this_wp_element_["createElement"])(base_control["a" /* default */], {
    label: heading,
    id: id,
    help: help,
    className: className
  }, Object(external_this_wp_element_["createElement"])("span", {
    className: "components-checkbox-control__input-container"
  }, Object(external_this_wp_element_["createElement"])("input", Object(esm_extends["a" /* default */])({
    id: id,
    className: "components-checkbox-control__input",
    type: "checkbox",
    value: "1",
    onChange: onChangeValue,
    checked: checked,
    "aria-describedby": !!help ? id + '__help' : undefined
  }, props)), checked ? Object(external_this_wp_element_["createElement"])(icon["a" /* default */], {
    icon: library_check,
    className: "components-checkbox-control__checked",
    role: "presentation"
  }) : null), Object(external_this_wp_element_["createElement"])("label", {
    className: "components-checkbox-control__label",
    htmlFor: id
  }, label));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_flex_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(779);




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

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabPanel; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(279);
/* harmony import */ var _navigable_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(738);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90);






/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




var TabButton = function TabButton(_ref) {
  var tabId = _ref.tabId,
      onClick = _ref.onClick,
      children = _ref.children,
      selected = _ref.selected,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ref, ["tabId", "onClick", "children", "selected"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_button__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
    role: "tab",
    tabIndex: selected ? null : -1,
    "aria-selected": selected,
    id: tabId,
    onClick: onClick
  }, rest), children);
};

function TabPanel(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      tabs = _ref2.tabs,
      initialTabName = _ref2.initialTabName,
      _ref2$orientation = _ref2.orientation,
      orientation = _ref2$orientation === void 0 ? 'horizontal' : _ref2$orientation,
      _ref2$activeClass = _ref2.activeClass,
      activeClass = _ref2$activeClass === void 0 ? 'is-active' : _ref2$activeClass,
      _ref2$onSelect = _ref2.onSelect,
      onSelect = _ref2$onSelect === void 0 ? lodash__WEBPACK_IMPORTED_MODULE_6__["noop"] : _ref2$onSelect;
  var instanceId = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(TabPanel, 'tab-panel');

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(initialTabName || (tabs.length > 0 ? tabs[0].name : null)),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var handleClick = function handleClick(tabKey) {
    setSelected(tabKey);
    onSelect(tabKey);
  };

  var onNavigate = function onNavigate(childIndex, child) {
    child.click();
  };

  var selectedTab = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["find"])(tabs, {
    name: selected
  });
  var selectedId = "".concat(instanceId, "-").concat(selectedTab.name);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_navigable_container__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    role: "tablist",
    orientation: orientation,
    onNavigate: onNavigate,
    className: "components-tab-panel__tabs"
  }, tabs.map(function (tab) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(TabButton, {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('components-tab-panel__tabs-item', tab.className, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, activeClass, tab.name === selected)),
      tabId: "".concat(instanceId, "-").concat(tab.name),
      "aria-controls": "".concat(instanceId, "-").concat(tab.name, "-view"),
      selected: tab.name === selected,
      key: tab.name,
      onClick: Object(lodash__WEBPACK_IMPORTED_MODULE_6__["partial"])(handleClick, tab.name)
    }, tab.title);
  })), selectedTab && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])("div", {
    "aria-labelledby": selectedId,
    role: "tabpanel",
    id: "".concat(selectedId, "-view"),
    className: "components-tab-panel__tab-content"
  }, children(selectedTab)));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultProps */
/* unused harmony export CardFooter */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_card_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(755);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(754);





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
function CardFooter(props) {
  var className = props.className,
      isShady = props.isShady,
      additionalProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props, ["className", "isShady"]);

  var mergedProps = _objectSpread({}, defaultProps, {}, Object(_context__WEBPACK_IMPORTED_MODULE_6__[/* useCardContext */ "b"])(), {}, props);

  var isBorderless = mergedProps.isBorderless,
      size = mergedProps.size;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()('components-card__footer', isBorderless && 'is-borderless', isShady && 'is-shady', size && "is-size-".concat(size), className);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_styles_card_styles__WEBPACK_IMPORTED_MODULE_5__[/* FooterUI */ "c"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, additionalProps, {
    className: classes
  }));
}
/* harmony default export */ __webpack_exports__["a"] = (CardFooter);
//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);




/**
 * External dependencies
 */



function FormToggle(_ref) {
  var className = _ref.className,
      checked = _ref.checked,
      id = _ref.id,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? lodash__WEBPACK_IMPORTED_MODULE_4__["noop"] : _ref$onChange,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["className", "checked", "id", "onChange"]);

  var wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()('components-form-toggle', className, {
    'is-checked': checked
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    className: wrapperClasses
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: "components-form-toggle__input",
    id: id,
    type: "checkbox",
    checked: checked,
    onChange: onChange
  }, props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    className: "components-form-toggle__track"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    className: "components-form-toggle__thumb"
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (FormToggle);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Consumer; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57);
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_9__);









function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



var Context = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createContext"])({
  addDropZone: function addDropZone() {},
  removeDropZone: function removeDropZone() {}
});
var Provider = Context.Provider,
    Consumer = Context.Consumer;

var getDragEventType = function getDragEventType(_ref) {
  var dataTransfer = _ref.dataTransfer;

  if (dataTransfer) {
    // Use lodash `includes` here as in the Edge browser `types` is implemented
    // as a DomStringList, whereas in other browsers it's an array. `includes`
    // happily works with both types.
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_8__["includes"])(dataTransfer.types, 'Files')) {
      return 'file';
    }

    if (Object(lodash__WEBPACK_IMPORTED_MODULE_8__["includes"])(dataTransfer.types, 'text/html')) {
      return 'html';
    }
  }

  return 'default';
};

var isTypeSupportedByDropZone = function isTypeSupportedByDropZone(type, dropZone) {
  return type === 'file' && dropZone.onFilesDrop || type === 'html' && dropZone.onHTMLDrop || type === 'default' && dropZone.onDrop;
};

var isWithinElementBounds = function isWithinElementBounds(element, x, y) {
  var rect = element.getBoundingClientRect(); /// make sure the rect is a valid rect

  if (rect.bottom === rect.top || rect.left === rect.right) {
    return false;
  }

  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
};

var DropZoneProvider = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(DropZoneProvider, _Component);

  var _super = _createSuper(DropZoneProvider);

  function DropZoneProvider() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, DropZoneProvider);

    _this = _super.apply(this, arguments); // Event listeners

    _this.onDragOver = _this.onDragOver.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this));
    _this.onDrop = _this.onDrop.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this)); // Context methods so this component can receive data from consumers

    _this.addDropZone = _this.addDropZone.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this));
    _this.removeDropZone = _this.removeDropZone.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this)); // Utility methods

    _this.resetDragState = _this.resetDragState.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this));
    _this.toggleDraggingOverDocument = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["throttle"])(_this.toggleDraggingOverDocument.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this)), 200);
    _this.dropZones = [];
    _this.dropZoneCallbacks = {
      addDropZone: _this.addDropZone,
      removeDropZone: _this.removeDropZone
    };
    _this.state = {
      hoveredDropZone: -1,
      isDraggingOverDocument: false,
      position: null
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(DropZoneProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('dragover', this.onDragOver);
      window.addEventListener('mouseup', this.resetDragState);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('dragover', this.onDragOver);
      window.removeEventListener('mouseup', this.resetDragState);
    }
  }, {
    key: "addDropZone",
    value: function addDropZone(dropZone) {
      this.dropZones.push(dropZone);
    }
  }, {
    key: "removeDropZone",
    value: function removeDropZone(dropZone) {
      this.dropZones = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["filter"])(this.dropZones, function (dz) {
        return dz !== dropZone;
      });
    }
  }, {
    key: "resetDragState",
    value: function resetDragState() {
      // Avoid throttled drag over handler calls
      this.toggleDraggingOverDocument.cancel();
      var _this$state = this.state,
          isDraggingOverDocument = _this$state.isDraggingOverDocument,
          hoveredDropZone = _this$state.hoveredDropZone;

      if (!isDraggingOverDocument && hoveredDropZone === -1) {
        return;
      }

      this.setState({
        hoveredDropZone: -1,
        isDraggingOverDocument: false,
        position: null
      });
      this.dropZones.forEach(function (dropZone) {
        return dropZone.setState({
          isDraggingOverDocument: false,
          isDraggingOverElement: false,
          position: null,
          type: null
        });
      });
    }
  }, {
    key: "toggleDraggingOverDocument",
    value: function toggleDraggingOverDocument(event, dragEventType) {
      var _this2 = this;

      // In some contexts, it may be necessary to capture and redirect the
      // drag event (e.g. atop an `iframe`). To accommodate this, you can
      // create an instance of CustomEvent with the original event specified
      // as the `detail` property.
      //
      // See: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
      var detail = window.CustomEvent && event instanceof window.CustomEvent ? event.detail : event; // Index of hovered dropzone.

      var hoveredDropZones = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["filter"])(this.dropZones, function (dropZone) {
        return isTypeSupportedByDropZone(dragEventType, dropZone) && isWithinElementBounds(dropZone.element.current, detail.clientX, detail.clientY);
      }); // Find the leaf dropzone not containing another dropzone

      var hoveredDropZone = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["find"])(hoveredDropZones, function (zone) {
        var container = zone.isRelative ? zone.element.current.parentElement : zone.element.current;
        return !Object(lodash__WEBPACK_IMPORTED_MODULE_8__["some"])(hoveredDropZones, function (subZone) {
          return subZone !== zone && container.contains(subZone.element.current);
        });
      });
      var hoveredDropZoneIndex = this.dropZones.indexOf(hoveredDropZone);
      var position = null;

      if (hoveredDropZone && hoveredDropZone.withPosition) {
        position = {
          x: detail.clientX,
          y: detail.clientY
        };
      } // Optimisation: Only update the changed dropzones


      var toUpdate = [];

      if (!this.state.isDraggingOverDocument) {
        toUpdate = this.dropZones;
      } else if (hoveredDropZoneIndex !== this.state.hoveredDropZone) {
        if (this.state.hoveredDropZone !== -1) {
          toUpdate.push(this.dropZones[this.state.hoveredDropZone]);
        }

        if (hoveredDropZone) {
          toUpdate.push(hoveredDropZone);
        }
      } else if (hoveredDropZone && hoveredDropZoneIndex === this.state.hoveredDropZone && !Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEqual"])(position, this.state.position)) {
        toUpdate.push(hoveredDropZone);
      } // Notifying the dropzones


      toUpdate.forEach(function (dropZone) {
        var index = _this2.dropZones.indexOf(dropZone);

        var isDraggingOverDropZone = index === hoveredDropZoneIndex;
        dropZone.setState({
          isDraggingOverDocument: isTypeSupportedByDropZone(dragEventType, dropZone),
          isDraggingOverElement: isDraggingOverDropZone,
          position: isDraggingOverDropZone ? position : null,
          type: isDraggingOverDropZone ? dragEventType : null
        });
      });
      var newState = {
        isDraggingOverDocument: true,
        hoveredDropZone: hoveredDropZoneIndex,
        position: position
      };

      if (!_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_9___default()(newState, this.state)) {
        this.setState(newState);
      }
    }
  }, {
    key: "onDragOver",
    value: function onDragOver(event) {
      this.toggleDraggingOverDocument(event, getDragEventType(event));
      event.preventDefault();
    }
  }, {
    key: "onDrop",
    value: function onDrop(event) {
      // This seemingly useless line has been shown to resolve a Safari issue
      // where files dragged directly from the dock are not recognized
      event.dataTransfer && event.dataTransfer.files.length; // eslint-disable-line no-unused-expressions

      var _this$state2 = this.state,
          position = _this$state2.position,
          hoveredDropZone = _this$state2.hoveredDropZone;
      var dragEventType = getDragEventType(event);
      var dropZone = this.dropZones[hoveredDropZone];
      this.resetDragState();

      if (dropZone) {
        switch (dragEventType) {
          case 'file':
            dropZone.onFilesDrop(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(event.dataTransfer.files), position);
            break;

          case 'html':
            dropZone.onHTMLDrop(event.dataTransfer.getData('text/html'), position);
            break;

          case 'default':
            dropZone.onDrop(event, position);
        }
      }

      event.stopPropagation();
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        onDrop: this.onDrop,
        className: "components-drop-zone__provider"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Provider, {
        value: this.dropZoneCallbacks
      }, this.props.children));
    }
  }]);

  return DropZoneProvider;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["c"] = (DropZoneProvider);

//# sourceMappingURL=provider.js.map

/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90);




/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



function FormFileUpload(_ref) {
  var accept = _ref.accept,
      children = _ref.children,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      onChange = _ref.onChange,
      render = _ref.render,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["accept", "children", "multiple", "onChange", "render"]);

  var ref = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var openFileDialog = function openFileDialog() {
    ref.current.click();
  };

  var ui = render ? render({
    openFileDialog: openFileDialog
  }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    onClick: openFileDialog
  }, props), children);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "components-form-file-upload"
  }, ui, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", {
    type: "file",
    ref: ref,
    multiple: multiple,
    style: {
      display: 'none'
    },
    accept: accept,
    onChange: onChange
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (FormFileUpload);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: useDropZone

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(26);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__(713);

// EXTERNAL MODULE: ./node_modules/@wordpress/primitives/build-module/svg/index.js
var svg = __webpack_require__(51);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/node_modules/@wordpress/icons/build-module/library/upload.js


/**
 * WordPress dependencies
 */

var upload = Object(external_this_wp_element_["createElement"])(svg["c" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["b" /* Path */], {
  d: "M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"
}));
/* harmony default export */ var library_upload = (upload);
//# sourceMappingURL=upload.js.map
// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/drop-zone/provider.js
var provider = __webpack_require__(905);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/drop-zone/index.js





/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function useDropZone(_ref) {
  var element = _ref.element,
      onFilesDrop = _ref.onFilesDrop,
      onHTMLDrop = _ref.onHTMLDrop,
      onDrop = _ref.onDrop,
      isDisabled = _ref.isDisabled,
      withPosition = _ref.withPosition,
      _ref$__unstableIsRela = _ref.__unstableIsRelative,
      __unstableIsRelative = _ref$__unstableIsRela === void 0 ? false : _ref$__unstableIsRela;

  var _useContext = Object(external_this_wp_element_["useContext"])(provider["a" /* Context */]),
      addDropZone = _useContext.addDropZone,
      removeDropZone = _useContext.removeDropZone;

  var _useState = Object(external_this_wp_element_["useState"])({
    isDraggingOverDocument: false,
    isDraggingOverElement: false,
    type: null
  }),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  Object(external_this_wp_element_["useEffect"])(function () {
    if (!isDisabled) {
      var dropZone = {
        element: element,
        onDrop: onDrop,
        onFilesDrop: onFilesDrop,
        onHTMLDrop: onHTMLDrop,
        setState: setState,
        withPosition: withPosition,
        isRelative: __unstableIsRelative
      };
      addDropZone(dropZone);
      return function () {
        removeDropZone(dropZone);
      };
    }
  }, [isDisabled, onDrop, onFilesDrop, onHTMLDrop, withPosition]);
  return state;
}

var drop_zone_DropZone = function DropZone(props) {
  return Object(external_this_wp_element_["createElement"])(provider["b" /* DropZoneConsumer */], null, function (_ref2) {
    var addDropZone = _ref2.addDropZone,
        removeDropZone = _ref2.removeDropZone;
    return Object(external_this_wp_element_["createElement"])(DropZoneComponent, Object(esm_extends["a" /* default */])({
      addDropZone: addDropZone,
      removeDropZone: removeDropZone
    }, props));
  });
};

function DropZoneComponent(_ref3) {
  var className = _ref3.className,
      label = _ref3.label,
      onFilesDrop = _ref3.onFilesDrop,
      onHTMLDrop = _ref3.onHTMLDrop,
      onDrop = _ref3.onDrop;
  var element = Object(external_this_wp_element_["useRef"])();

  var _useDropZone = useDropZone({
    element: element,
    onFilesDrop: onFilesDrop,
    onHTMLDrop: onHTMLDrop,
    onDrop: onDrop,
    __unstableIsRelative: true
  }),
      isDraggingOverDocument = _useDropZone.isDraggingOverDocument,
      isDraggingOverElement = _useDropZone.isDraggingOverElement,
      type = _useDropZone.type;

  var children;

  if (isDraggingOverElement) {
    children = Object(external_this_wp_element_["createElement"])("div", {
      className: "components-drop-zone__content"
    }, Object(external_this_wp_element_["createElement"])(icon["a" /* default */], {
      icon: library_upload,
      className: "components-drop-zone__content-icon"
    }), Object(external_this_wp_element_["createElement"])("span", {
      className: "components-drop-zone__content-text"
    }, label ? label : Object(external_this_wp_i18n_["__"])('Drop files to upload')));
  }

  var classes = classnames_default()('components-drop-zone', className, Object(defineProperty["a" /* default */])({
    'is-active': (isDraggingOverDocument || isDraggingOverElement) && (type === 'file' && onFilesDrop || type === 'html' && onHTMLDrop || type === 'default' && onDrop),
    'is-dragging-over-document': isDraggingOverDocument,
    'is-dragging-over-element': isDraggingOverElement
  }, "is-dragging-".concat(type), !!type));
  return Object(external_this_wp_element_["createElement"])("div", {
    ref: element,
    className: classes
  }, children);
}

/* harmony default export */ var drop_zone = __webpack_exports__["a"] = (drop_zone_DropZone);
//# sourceMappingURL=index.js.map

/***/ })

}]);