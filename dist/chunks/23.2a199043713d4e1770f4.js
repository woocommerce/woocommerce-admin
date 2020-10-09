(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[23],{

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(9);

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

/***/ 175:
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

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _visually_hidden__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(172);


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

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spinner; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function Spinner() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "components-spinner"
  });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */
 // Disable reason: JSDoc linter doesn't seem to parse the union (`&`) correctly.

/** @typedef {{icon: JSX.Element, size?: number} & import('react').ComponentPropsWithoutRef<'SVG'>} IconProps */

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

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectControl; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(175);
/* harmony import */ var _base_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(253);





/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function SelectControl(_ref) {
  var help = _ref.help,
      label = _ref.label,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      onChange = _ref.onChange,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      className = _ref.className,
      hideLabelFromVision = _ref.hideLabelFromVision,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ref, ["help", "label", "multiple", "onChange", "options", "className", "hideLabelFromVision"]);

  var instanceId = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(SelectControl);
  var id = "inspector-select-control-".concat(instanceId);

  var onChangeValue = function onChangeValue(event) {
    if (multiple) {
      var selectedOptions = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(event.target.options).filter(function (_ref2) {
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

    onChange(event.target.value);
  }; // Disable reason: A select with an onchange throws a warning

  /* eslint-disable jsx-a11y/no-onchange */


  return !Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(options) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_base_control__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    label: label,
    hideLabelFromVision: hideLabelFromVision,
    id: id,
    help: help,
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("select", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    id: id,
    className: "components-select-control__input",
    onChange: onChangeValue,
    "aria-describedby": !!help ? "".concat(id, "__help") : undefined,
    multiple: multiple
  }, props), options.map(function (option, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("option", {
      key: "".concat(option.label, "-").concat(option.value, "-").concat(index),
      value: option.value,
      disabled: option.disabled
    }, option.label);
  })));
  /* eslint-enable jsx-a11y/no-onchange */
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(171);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74);









function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * A Higher Order Component used to be provide a unique instance ID by
 * component.
 *
 * @param {WPComponent} WrappedComponent  The wrapped component.
 *
 * @return {WPComponent} The component to be rendered.
 */

/* harmony default export */ __webpack_exports__["a"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(function (WrappedComponent) {
  return /*#__PURE__*/function (_Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_class, _Component);

    var _super = _createSuper(_class);

    function _class() {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, _class);

      _this = _super.apply(this, arguments);
      _this.debouncedSpeak = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["debounce"])(_this.speak.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this)), 500);
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_class, [{
      key: "speak",
      value: function speak(message) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'polite';

        Object(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_9__[/* speak */ "a"])(message, type);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.debouncedSpeak.cancel();
      }
    }, {
      key: "render",
      value: function render() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, this.props, {
          speak: this.speak,
          debouncedSpeak: this.debouncedSpeak
        }));
      }
    }]);

    return _class;
  }(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);
}, 'withSpokenMessages'));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 735:
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
var use_instance_id = __webpack_require__(175);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__(688);

// EXTERNAL MODULE: ./node_modules/@wordpress/primitives/build-module/svg/index.js
var svg = __webpack_require__(44);

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
var base_control = __webpack_require__(253);

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

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(37);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(30);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(5);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/compose.js
var compose = __webpack_require__(270);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(24);

// EXTERNAL MODULE: external {"this":["wc","components"]}
var external_this_wc_components_ = __webpack_require__(68);

// EXTERNAL MODULE: external {"this":["wc","data"]}
var external_this_wc_data_ = __webpack_require__(41);

// EXTERNAL MODULE: external {"this":["wc","tracks"]}
var external_this_wc_tracks_ = __webpack_require__(61);

// EXTERNAL MODULE: ./client/analytics/settings/index.scss
var settings = __webpack_require__(766);

// EXTERNAL MODULE: ./client/analytics/settings/config.js + 1 modules
var config = __webpack_require__(415);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(14);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(13);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(10);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(16);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(17);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(6);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/checkbox-control/index.js + 1 modules
var checkbox_control = __webpack_require__(735);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: ./client/analytics/settings/setting.scss
var settings_setting = __webpack_require__(767);

// CONCATENATED MODULE: ./client/analytics/settings/setting.js










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */






/**
 * Internal dependencies
 */



var setting_Setting = /*#__PURE__*/function (_Component) {
  inherits_default()(Setting, _Component);

  var _super = _createSuper(Setting);

  function Setting(props) {
    var _this;

    classCallCheck_default()(this, Setting);

    _this = _super.call(this, props);

    defineProperty_default()(assertThisInitialized_default()(_this), "renderInput", function () {
      var _this$props = _this.props,
          handleChange = _this$props.handleChange,
          name = _this$props.name,
          inputText = _this$props.inputText,
          inputType = _this$props.inputType,
          options = _this$props.options,
          value = _this$props.value,
          component = _this$props.component;
      var disabled = _this.state.disabled;

      switch (inputType) {
        case 'checkboxGroup':
          return options.map(function (optionGroup) {
            return optionGroup.options.length > 0 && Object(external_this_wp_element_["createElement"])("div", {
              className: "woocommerce-setting__options-group",
              key: optionGroup.key,
              "aria-labelledby": name + '-label'
            }, optionGroup.label && Object(external_this_wp_element_["createElement"])("span", {
              className: "woocommerce-setting__options-group-label"
            }, optionGroup.label), _this.renderCheckboxOptions(optionGroup.options));
          });

        case 'checkbox':
          return _this.renderCheckboxOptions(options);

        case 'button':
          return Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
            isSecondary: true,
            onClick: _this.handleInputCallback,
            disabled: disabled
          }, inputText);

        case 'component':
          var SettingComponent = component;
          return Object(external_this_wp_element_["createElement"])(SettingComponent, extends_default()({
            value: value,
            onChange: handleChange
          }, _this.props));

        case 'text':
        default:
          var id = Object(external_lodash_["uniqueId"])(name);
          return Object(external_this_wp_element_["createElement"])("input", {
            id: id,
            type: "text",
            name: name,
            onChange: handleChange,
            value: value,
            placeholder: inputText,
            disabled: disabled
          });
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleInputCallback", function () {
      var _this$props2 = _this.props,
          createNotice = _this$props2.createNotice,
          callback = _this$props2.callback;

      if (typeof callback !== 'function') {
        return;
      }

      return new Promise(function (resolve, reject) {
        _this.setState({
          disabled: true
        });

        callback(resolve, reject, createNotice);
      }).then(function () {
        _this.setState({
          disabled: false
        });
      }).catch(function () {
        _this.setState({
          disabled: false
        });
      });
    });

    _this.state = {
      disabled: false
    };
    return _this;
  }

  createClass_default()(Setting, [{
    key: "renderCheckboxOptions",
    value: function renderCheckboxOptions(options) {
      var _this$props3 = this.props,
          handleChange = _this$props3.handleChange,
          name = _this$props3.name,
          value = _this$props3.value;
      var disabled = this.state.disabled;
      return options.map(function (option) {
        return Object(external_this_wp_element_["createElement"])(checkbox_control["a" /* default */], {
          key: name + '-' + option.value,
          label: option.label,
          name: name,
          checked: value && value.includes(option.value),
          onChange: function onChange(checked) {
            return handleChange({
              target: {
                checked: checked,
                name: name,
                type: 'checkbox',
                value: option.value
              }
            });
          },
          disabled: disabled
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          helpText = _this$props4.helpText,
          label = _this$props4.label,
          name = _this$props4.name;
      return Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-setting"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-setting__label",
        id: name + '-label'
      }, label), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-setting__input"
      }, this.renderInput(), helpText && Object(external_this_wp_element_["createElement"])("span", {
        className: "woocommerce-setting__help"
      }, helpText)));
    }
  }]);

  return Setting;
}(external_this_wp_element_["Component"]);

setting_Setting.propTypes = {
  /**
   * A callback that is fired after actionable items, such as buttons.
   */
  callback: prop_types_default.a.func,

  /**
   * Function assigned to the onChange of all inputs.
   */
  handleChange: prop_types_default.a.func.isRequired,

  /**
   * Optional help text displayed underneath the setting.
   */
  helpText: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.array]),

  /**
   * Text used as placeholder or button text in the input area.
   */
  inputText: prop_types_default.a.string,

  /**
   * Type of input to use; defaults to a text input.
   */
  inputType: prop_types_default.a.oneOf(['button', 'checkbox', 'checkboxGroup', 'text', 'component']),

  /**
   * Label used for describing the setting.
   */
  label: prop_types_default.a.string.isRequired,

  /**
   * Setting slug applied to input names.
   */
  name: prop_types_default.a.string.isRequired,

  /**
   * Array of options used for when the `inputType` allows multiple selections.
   */
  options: prop_types_default.a.arrayOf(prop_types_default.a.shape({
    /**
     * Input value for this option.
     */
    value: prop_types_default.a.string,

    /**
     * Label for this option or above a group for a group `inputType`.
     */
    label: prop_types_default.a.string,

    /**
     * Description used for screen readers.
     */
    description: prop_types_default.a.string,

    /**
     * Key used for a group `inputType`.
     */
    key: prop_types_default.a.string,

    /**
     * Nested options for a group `inputType`.
     */
    options: prop_types_default.a.array
  })),

  /**
   * The string value used for the input or array of items if the input allows multiselection.
   */
  value: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.array])
};
/* harmony default export */ var analytics_settings_setting = (Object(compose["a" /* default */])(Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  return {
    createNotice: createNotice
  };
}))(setting_Setting));
// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/higher-order/with-spoken-messages/index.js
var with_spoken_messages = __webpack_require__(697);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(15);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./client/analytics/settings/historical-data/utils.js
/**
 * External dependencies
 */


var utils_formatParams = function formatParams(dateFormat, period, skipChecked) {
  var params = {};

  if (skipChecked) {
    params.skip_existing = true;
  }

  if (period.label !== 'all') {
    if (period.label === 'custom') {
      var daysDifference = external_moment_default()().diff(external_moment_default()(period.date, dateFormat), 'days', true);
      params.days = Math.floor(daysDifference);
    } else {
      params.days = parseInt(period.label, 10);
    }
  }

  return params;
};
var utils_getStatus = function getStatus(_ref) {
  var cacheNeedsClearing = _ref.cacheNeedsClearing,
      customersProgress = _ref.customersProgress,
      customersTotal = _ref.customersTotal,
      isError = _ref.isError,
      inProgress = _ref.inProgress,
      ordersProgress = _ref.ordersProgress,
      ordersTotal = _ref.ordersTotal;

  if (isError) {
    return 'error';
  }

  if (inProgress) {
    if (Object(external_lodash_["isNil"])(customersProgress) || Object(external_lodash_["isNil"])(ordersProgress) || Object(external_lodash_["isNil"])(customersTotal) || Object(external_lodash_["isNil"])(ordersTotal) || cacheNeedsClearing) {
      return 'initializing';
    }

    if (customersProgress < customersTotal) {
      return 'customers';
    }

    if (ordersProgress < ordersTotal) {
      return 'orders';
    }

    return 'finalizing';
  }

  if (customersTotal > 0 || ordersTotal > 0) {
    if (customersProgress === customersTotal && ordersProgress === ordersTotal) {
      return 'finished';
    }

    return 'ready';
  }

  return 'nothing';
};
// EXTERNAL MODULE: external {"this":["wp","url"]}
var external_this_wp_url_ = __webpack_require__(36);

// CONCATENATED MODULE: ./client/analytics/settings/historical-data/actions.js


/**
 * External dependencies
 */








/**
 * Internal dependencies
 */



function HistoricalDataActions(_ref) {
  var clearStatusAndTotalsCache = _ref.clearStatusAndTotalsCache,
      createNotice = _ref.createNotice,
      dateFormat = _ref.dateFormat,
      importDate = _ref.importDate,
      onImportStarted = _ref.onImportStarted,
      selectedPeriod = _ref.selectedPeriod,
      stopImport = _ref.stopImport,
      skipChecked = _ref.skipChecked,
      status = _ref.status,
      setImportStarted = _ref.setImportStarted,
      updateImportation = _ref.updateImportation;

  var onStartImport = function onStartImport() {
    var path = Object(external_this_wp_url_["addQueryArgs"])('/wc-analytics/reports/import', utils_formatParams(dateFormat, selectedPeriod, skipChecked));

    var errorMessage = Object(external_this_wp_i18n_["__"])('There was a problem rebuilding your report data.', 'woocommerce-admin');

    var importStarted = true;
    makeQuery(path, errorMessage, importStarted);
    onImportStarted();
  };

  var onStopImport = function onStopImport() {
    stopImport();
    var path = '/wc-analytics/reports/import/cancel';

    var errorMessage = Object(external_this_wp_i18n_["__"])('There was a problem stopping your current import.', 'woocommerce-admin');

    makeQuery(path, errorMessage);
  };

  var makeQuery = function makeQuery(path, errorMessage) {
    var importStarted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    updateImportation(path, importStarted).then(function (response) {
      if (response.status === 'success') {
        createNotice('success', response.message);
      } else {
        createNotice('error', errorMessage);
        setImportStarted(false);
        stopImport();
      }
    }).catch(function (error) {
      if (error && error.message) {
        createNotice('error', error.message);
        setImportStarted(false);
        stopImport();
      }
    });
  };

  var deletePreviousData = function deletePreviousData() {
    var path = '/wc-analytics/reports/import/delete';

    var errorMessage = Object(external_this_wp_i18n_["__"])('There was a problem deleting your previous data.', 'woocommerce-admin');

    makeQuery(path, errorMessage);
    Object(external_this_wc_tracks_["recordEvent"])('analytics_import_delete_previous');
    setImportStarted(false);
  };

  var reimportData = function reimportData() {
    setImportStarted(false); // We need to clear the cache of the selectors `getImportTotals` and `getImportStatus`

    clearStatusAndTotalsCache();
  };

  var getActions = function getActions() {
    var importDisabled = status !== 'ready'; // An import is currently in progress

    if (['initializing', 'customers', 'orders', 'finalizing'].includes(status)) {
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
        className: "woocommerce-settings-historical-data__action-button",
        isPrimary: true,
        onClick: onStopImport
      }, Object(external_this_wp_i18n_["__"])('Stop Import', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-setting__help woocommerce-settings-historical-data__action-help"
      }, Object(external_this_wp_i18n_["__"])('Imported data will not be lost if the import is stopped.', 'woocommerce-admin'), Object(external_this_wp_element_["createElement"])("br", null), Object(external_this_wp_i18n_["__"])('Navigating away from this page will not affect the import.', 'woocommerce-admin')));
    }

    if (['ready', 'nothing'].includes(status)) {
      if (importDate) {
        return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
          isPrimary: true,
          onClick: onStartImport,
          disabled: importDisabled
        }, Object(external_this_wp_i18n_["__"])('Start', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
          isSecondary: true,
          onClick: deletePreviousData
        }, Object(external_this_wp_i18n_["__"])('Delete Previously Imported Data', 'woocommerce-admin')));
      }

      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
        isPrimary: true,
        onClick: onStartImport,
        disabled: importDisabled
      }, Object(external_this_wp_i18n_["__"])('Start', 'woocommerce-admin')));
    }

    if (status === 'error') {
      createNotice('error', Object(external_this_wp_i18n_["__"])('Something went wrong with the importation process.', 'woocommerce-admin'));
    } // Has imported all possible data


    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
      isSecondary: true,
      onClick: reimportData
    }, Object(external_this_wp_i18n_["__"])('Re-import Data', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
      isSecondary: true,
      onClick: deletePreviousData
    }, Object(external_this_wp_i18n_["__"])('Delete Previously Imported Data', 'woocommerce-admin')));
  };

  return Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-settings__actions woocommerce-settings-historical-data__actions"
  }, getActions());
}

/* harmony default export */ var actions = (Object(compose["a" /* default */])([Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select(external_this_wc_data_["IMPORT_STORE_NAME"]),
      getFormSettings = _select.getFormSettings;

  var _getFormSettings = getFormSettings(),
      selectedPeriod = _getFormSettings.period,
      skipChecked = _getFormSettings.skipPrevious;

  return {
    selectedPeriod: selectedPeriod,
    skipChecked: skipChecked
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(external_this_wc_data_["IMPORT_STORE_NAME"]),
      updateImportation = _dispatch.updateImportation,
      setImportStarted = _dispatch.setImportStarted;

  var _dispatch2 = dispatch('core/notices'),
      createNotice = _dispatch2.createNotice;

  return {
    createNotice: createNotice,
    setImportStarted: setImportStarted,
    updateImportation: updateImportation
  };
})])(HistoricalDataActions));
// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/select-control/index.js
var select_control = __webpack_require__(689);

// EXTERNAL MODULE: external {"this":["wc","date"]}
var external_this_wc_date_ = __webpack_require__(35);

// CONCATENATED MODULE: ./client/analytics/settings/historical-data/period-selector.js


/**
 * External dependencies
 */








function HistoricalDataPeriodSelector(_ref) {
  var dateFormat = _ref.dateFormat,
      disabled = _ref.disabled,
      setImportPeriod = _ref.setImportPeriod,
      value = _ref.value;

  var onSelectChange = function onSelectChange(val) {
    setImportPeriod(val);
  };

  var onDatePickerChange = function onDatePickerChange(val) {
    var dateModified = true;

    if (val.date && val.date.isValid) {
      setImportPeriod(val.date.format(dateFormat), dateModified);
    } else {
      setImportPeriod(val.text, dateModified);
    }
  };

  var getDatePickerError = function getDatePickerError(momentDate) {
    if (!momentDate.isValid() || value.date.length !== dateFormat.length) {
      return external_this_wc_date_["dateValidationMessages"].invalid;
    }

    if (momentDate.isAfter(new Date(), 'day')) {
      return external_this_wc_date_["dateValidationMessages"].future;
    }

    return null;
  };

  var getDatePicker = function getDatePicker() {
    var momentDate = external_moment_default()(value.date, dateFormat);
    return Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-settings-historical-data__column"
    }, Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-settings-historical-data__column-label"
    }, Object(external_this_wp_i18n_["__"])('Beginning on', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])(external_this_wc_components_["DatePicker"], {
      date: momentDate.isValid() ? momentDate.toDate() : null,
      dateFormat: dateFormat,
      disabled: disabled,
      error: getDatePickerError(momentDate),
      isInvalidDate: function isInvalidDate(date) {
        return external_moment_default()(date).isAfter(new Date(), 'day');
      },
      onUpdate: onDatePickerChange,
      text: value.date
    }));
  };

  return Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-settings-historical-data__columns"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-settings-historical-data__column"
  }, Object(external_this_wp_element_["createElement"])(select_control["a" /* default */], {
    label: Object(external_this_wp_i18n_["__"])('Import Historical Data', 'woocommerce-admin'),
    value: value.label,
    disabled: disabled,
    onChange: onSelectChange,
    options: [{
      label: 'All',
      value: 'all'
    }, {
      label: 'Last 365 days',
      value: '365'
    }, {
      label: 'Last 90 days',
      value: '90'
    }, {
      label: 'Last 30 days',
      value: '30'
    }, {
      label: 'Last 7 days',
      value: '7'
    }, {
      label: 'Last 24 hours',
      value: '1'
    }, {
      label: 'Custom',
      value: 'custom'
    }]
  })), value.label === 'custom' && getDatePicker());
}

/* harmony default export */ var period_selector = (Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(external_this_wc_data_["IMPORT_STORE_NAME"]),
      setImportPeriod = _dispatch.setImportPeriod;

  return {
    setImportPeriod: setImportPeriod
  };
})(HistoricalDataPeriodSelector));
// CONCATENATED MODULE: ./client/analytics/settings/historical-data/progress.js


/**
 * External dependencies
 */



function HistoricalDataProgress(_ref) {
  var label = _ref.label,
      progress = _ref.progress,
      total = _ref.total;
  var labelText = Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('Imported %(label)s', 'woocommerce-admin'), {
    label: label
  });
  var labelCounters = !Object(external_lodash_["isNil"])(total) ? Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('%(progress)s of %(total)s', 'woocommerce-admin'), {
    progress: progress || 0,
    total: total
  }) : null;
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-settings-historical-data__progress"
  }, Object(external_this_wp_element_["createElement"])("span", {
    className: "woocommerce-settings-historical-data__progress-label"
  }, labelText), labelCounters && Object(external_this_wp_element_["createElement"])("span", {
    className: "woocommerce-settings-historical-data__progress-label"
  }, labelCounters), Object(external_this_wp_element_["createElement"])("progress", {
    className: "woocommerce-settings-historical-data__progress-bar",
    max: total,
    value: progress || 0
  }));
}

/* harmony default export */ var historical_data_progress = (HistoricalDataProgress);
// EXTERNAL MODULE: external {"this":["wp","hooks"]}
var external_this_wp_hooks_ = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/spinner/index.js
var spinner = __webpack_require__(408);

// CONCATENATED MODULE: ./client/analytics/settings/historical-data/status.js


/**
 * External dependencies
 */




var HISTORICAL_DATA_STATUS_FILTER = 'woocommerce_admin_import_status';

function HistoricalDataStatus(_ref) {
  var importDate = _ref.importDate,
      status = _ref.status;
  var statusLabels = Object(external_this_wp_hooks_["applyFilters"])(HISTORICAL_DATA_STATUS_FILTER, {
    nothing: Object(external_this_wp_i18n_["__"])('Nothing To Import', 'woocommerce-admin'),
    ready: Object(external_this_wp_i18n_["__"])('Ready To Import', 'woocommerce-admin'),
    initializing: [Object(external_this_wp_i18n_["__"])('Initializing', 'woocommerce-admin'), Object(external_this_wp_element_["createElement"])(spinner["a" /* default */], {
      key: "spinner"
    })],
    customers: [Object(external_this_wp_i18n_["__"])('Importing Customers', 'woocommerce-admin'), Object(external_this_wp_element_["createElement"])(spinner["a" /* default */], {
      key: "spinner"
    })],
    orders: [Object(external_this_wp_i18n_["__"])('Importing Orders', 'woocommerce-admin'), Object(external_this_wp_element_["createElement"])(spinner["a" /* default */], {
      key: "spinner"
    })],
    finalizing: [Object(external_this_wp_i18n_["__"])('Finalizing', 'woocommerce-admin'), Object(external_this_wp_element_["createElement"])(spinner["a" /* default */], {
      key: "spinner"
    })],
    finished: importDate === -1 ? Object(external_this_wp_i18n_["__"])('All historical data imported', 'woocommerce-admin') : Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('Historical data from %s onward imported', 'woocommerce-admin'), // @todo The date formatting should be localized ( 'll' ), but this is currently broken in Gutenberg.
    // See https://github.com/WordPress/gutenberg/issues/12626 for details.
    external_moment_default()(importDate).format('YYYY-MM-DD'))
  });
  return Object(external_this_wp_element_["createElement"])("span", {
    className: "woocommerce-settings-historical-data__status"
  }, Object(external_this_wp_i18n_["__"])('Status:', 'woocommerce-admin') + ' ', statusLabels[status]);
}

/* harmony default export */ var historical_data_status = (HistoricalDataStatus);
// CONCATENATED MODULE: ./client/analytics/settings/historical-data/skip-checkbox.js


/**
 * External dependencies
 */





function HistoricalDataSkipCheckbox(_ref) {
  var checked = _ref.checked,
      disabled = _ref.disabled,
      setSkipPrevious = _ref.setSkipPrevious;

  var skipChange = function skipChange(value) {
    setSkipPrevious(value);
  };

  return Object(external_this_wp_element_["createElement"])(checkbox_control["a" /* default */], {
    className: "woocommerce-settings-historical-data__skip-checkbox",
    checked: checked,
    disabled: disabled,
    label: Object(external_this_wp_i18n_["__"])('Skip previously imported customers and orders', 'woocommerce-admin'),
    onChange: skipChange
  });
}

/* harmony default export */ var skip_checkbox = (Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(external_this_wc_data_["IMPORT_STORE_NAME"]),
      setSkipPrevious = _dispatch.setSkipPrevious;

  return {
    setSkipPrevious: setSkipPrevious
  };
})(HistoricalDataSkipCheckbox));
// EXTERNAL MODULE: ./client/analytics/settings/historical-data/style.scss
var style = __webpack_require__(768);

// CONCATENATED MODULE: ./client/analytics/settings/historical-data/layout.js








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function layout_createSuper(Derived) { var hasNativeReflectConstruct = layout_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function layout_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */






/**
 * Internal dependencies
 */









var layout_HistoricalDataLayout = /*#__PURE__*/function (_Component) {
  inherits_default()(HistoricalDataLayout, _Component);

  var _super = layout_createSuper(HistoricalDataLayout);

  function HistoricalDataLayout() {
    classCallCheck_default()(this, HistoricalDataLayout);

    return _super.apply(this, arguments);
  }

  createClass_default()(HistoricalDataLayout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          customersProgress = _this$props.customersProgress,
          customersTotal = _this$props.customersTotal,
          dateFormat = _this$props.dateFormat,
          importDate = _this$props.importDate,
          inProgress = _this$props.inProgress,
          lastImportStartTimestamp = _this$props.lastImportStartTimestamp,
          clearStatusAndTotalsCache = _this$props.clearStatusAndTotalsCache,
          ordersProgress = _this$props.ordersProgress,
          ordersTotal = _this$props.ordersTotal,
          onImportStarted = _this$props.onImportStarted,
          period = _this$props.period,
          stopImport = _this$props.stopImport,
          skipChecked = _this$props.skipChecked,
          status = _this$props.status;
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["SectionHeader"], {
        title: Object(external_this_wp_i18n_["__"])('Import Historical Data', 'woocommerce-admin')
      }), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-settings__wrapper"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-setting"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-setting__input"
      }, Object(external_this_wp_element_["createElement"])("span", {
        className: "woocommerce-setting__help"
      }, Object(external_this_wp_i18n_["__"])('This tool populates historical analytics data by processing customers ' + 'and orders created prior to activating WooCommerce Admin.', 'woocommerce-admin')), status !== 'finished' && Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(period_selector, {
        dateFormat: dateFormat,
        disabled: inProgress,
        value: period
      }), Object(external_this_wp_element_["createElement"])(skip_checkbox, {
        disabled: inProgress,
        checked: skipChecked
      }), Object(external_this_wp_element_["createElement"])(historical_data_progress, {
        label: Object(external_this_wp_i18n_["__"])('Registered Customers', 'woocommerce-admin'),
        progress: customersProgress,
        total: customersTotal
      }), Object(external_this_wp_element_["createElement"])(historical_data_progress, {
        label: Object(external_this_wp_i18n_["__"])('Orders and Refunds', 'woocommerce-admin'),
        progress: ordersProgress,
        total: ordersTotal
      })), Object(external_this_wp_element_["createElement"])(historical_data_status, {
        importDate: importDate,
        status: status
      })))), Object(external_this_wp_element_["createElement"])(actions, {
        clearStatusAndTotalsCache: clearStatusAndTotalsCache,
        dateFormat: dateFormat,
        importDate: importDate,
        lastImportStartTimestamp: lastImportStartTimestamp,
        onImportStarted: onImportStarted,
        stopImport: stopImport,
        status: status
      }));
    }
  }]);

  return HistoricalDataLayout;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var layout = (Object(external_this_wp_data_["withSelect"])(function (select, props) {
  var _select = select(external_this_wc_data_["IMPORT_STORE_NAME"]),
      getImportError = _select.getImportError,
      getImportStatus = _select.getImportStatus,
      getImportTotals = _select.getImportTotals;

  var activeImport = props.activeImport,
      cacheNeedsClearing = props.cacheNeedsClearing,
      dateFormat = props.dateFormat,
      inProgress = props.inProgress,
      onImportStarted = props.onImportStarted,
      onImportFinished = props.onImportFinished,
      period = props.period,
      startStatusCheckInterval = props.startStatusCheckInterval,
      skipChecked = props.skipChecked;
  var params = utils_formatParams(dateFormat, period, skipChecked);

  var _getImportTotals = getImportTotals(params),
      customers = _getImportTotals.customers,
      orders = _getImportTotals.orders,
      lastImportStartTimestamp = _getImportTotals.lastImportStartTimestamp;

  var _getImportStatus = getImportStatus(lastImportStartTimestamp),
      customersStatus = _getImportStatus.customers,
      importDate = _getImportStatus.imported_from,
      isImporting = _getImportStatus.is_importing,
      ordersStatus = _getImportStatus.orders;

  var _ref = customersStatus || {},
      customersProgress = _ref.imported,
      customersTotal = _ref.total;

  var _ref2 = ordersStatus || {},
      ordersProgress = _ref2.imported,
      ordersTotal = _ref2.total;

  var isError = Boolean(getImportError(lastImportStartTimestamp) || getImportError(params));
  var hasImportStarted = Boolean(!lastImportStartTimestamp && !inProgress && isImporting === true);

  if (hasImportStarted) {
    onImportStarted();
  }

  var hasImportFinished = Boolean(inProgress && !cacheNeedsClearing && isImporting === false && (customersTotal > 0 || ordersTotal > 0) && customersProgress === customersTotal && ordersProgress === ordersTotal);
  var response = {
    customersTotal: customers,
    isError: isError,
    ordersTotal: orders
  };

  if (activeImport) {
    response = {
      cacheNeedsClearing: cacheNeedsClearing,
      customersProgress: customersProgress,
      customersTotal: Object(external_lodash_["isNil"])(customersTotal) ? customers : customersTotal,
      inProgress: inProgress,
      isError: isError,
      ordersProgress: ordersProgress,
      ordersTotal: Object(external_lodash_["isNil"])(ordersTotal) ? orders : ordersTotal
    };
  }

  var status = utils_getStatus(response);

  if (status === 'initializing') {
    startStatusCheckInterval();
  }

  if (hasImportFinished) {
    onImportFinished();
  }

  return _objectSpread(_objectSpread({}, response), {}, {
    importDate: importDate,
    status: status
  });
})(layout_HistoricalDataLayout));
// CONCATENATED MODULE: ./client/analytics/settings/historical-data/index.js








function historical_data_createSuper(Derived) { var hasNativeReflectConstruct = historical_data_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function historical_data_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */






/**
 * Internal dependencies
 */




var historical_data_HistoricalData = /*#__PURE__*/function (_Component) {
  inherits_default()(HistoricalData, _Component);

  var _super = historical_data_createSuper(HistoricalData);

  function HistoricalData() {
    var _this;

    classCallCheck_default()(this, HistoricalData);

    _this = _super.apply(this, arguments);
    _this.dateFormat = Object(external_this_wp_i18n_["__"])('MM/DD/YYYY', 'woocommerce-admin');
    _this.intervalId = -1;
    _this.lastImportStopTimestamp = 0;
    _this.cacheNeedsClearing = true;
    _this.onImportFinished = _this.onImportFinished.bind(assertThisInitialized_default()(_this));
    _this.onImportStarted = _this.onImportStarted.bind(assertThisInitialized_default()(_this));
    _this.clearStatusAndTotalsCache = _this.clearStatusAndTotalsCache.bind(assertThisInitialized_default()(_this));
    _this.stopImport = _this.stopImport.bind(assertThisInitialized_default()(_this));
    _this.startStatusCheckInterval = _this.startStatusCheckInterval.bind(assertThisInitialized_default()(_this));
    _this.cancelStatusCheckInterval = _this.cancelStatusCheckInterval.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(HistoricalData, [{
    key: "startStatusCheckInterval",
    value: function startStatusCheckInterval() {
      var _this2 = this;

      if (this.intervalId < 0) {
        this.cacheNeedsClearing = true;
        this.intervalId = setInterval(function () {
          _this2.clearCache('getImportStatus');
        }, 3 * external_this_wc_data_["SECOND"]);
      }
    }
  }, {
    key: "cancelStatusCheckInterval",
    value: function cancelStatusCheckInterval() {
      clearInterval(this.intervalId);
      this.intervalId = -1;
    }
  }, {
    key: "clearCache",
    value: function clearCache(resolver, query) {
      var _this3 = this;

      var _this$props = this.props,
          invalidateResolution = _this$props.invalidateResolution,
          lastImportStartTimestamp = _this$props.lastImportStartTimestamp;
      var preparedQuery = resolver === 'getImportStatus' ? lastImportStartTimestamp : query;
      invalidateResolution(resolver, [preparedQuery]).then(function () {
        _this3.cacheNeedsClearing = false;
      });
    }
  }, {
    key: "stopImport",
    value: function stopImport() {
      this.cancelStatusCheckInterval();
      this.lastImportStopTimestamp = Date.now();
    }
  }, {
    key: "onImportFinished",
    value: function onImportFinished() {
      var debouncedSpeak = this.props.debouncedSpeak;

      if (!this.cacheNeedsClearing) {
        debouncedSpeak('Import complete');
        this.stopImport();
      }
    }
  }, {
    key: "onImportStarted",
    value: function onImportStarted() {
      var _this$props2 = this.props,
          notes = _this$props2.notes,
          setImportStarted = _this$props2.setImportStarted,
          updateNote = _this$props2.updateNote;
      var historicalDataNote = notes.find(function (note) {
        return note.name === 'wc-admin-historical-data';
      });

      if (historicalDataNote) {
        updateNote(historicalDataNote.id, {
          status: 'actioned'
        });
      }

      setImportStarted(true);
    }
  }, {
    key: "clearStatusAndTotalsCache",
    value: function clearStatusAndTotalsCache() {
      var _this$props3 = this.props,
          selectedPeriod = _this$props3.selectedPeriod,
          skipChecked = _this$props3.skipChecked;
      var params = utils_formatParams(this.dateFormat, selectedPeriod, skipChecked);
      this.clearCache('getImportTotals', params);
      this.clearCache('getImportStatus');
    }
  }, {
    key: "isImportationInProgress",
    value: function isImportationInProgress() {
      var lastImportStartTimestamp = this.props.lastImportStartTimestamp;
      return typeof lastImportStartTimestamp !== 'undefined' && typeof this.lastImportStopTimestamp === 'undefined' || lastImportStartTimestamp > this.lastImportStopTimestamp;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          activeImport = _this$props4.activeImport,
          createNotice = _this$props4.createNotice,
          lastImportStartTimestamp = _this$props4.lastImportStartTimestamp,
          selectedPeriod = _this$props4.selectedPeriod,
          skipChecked = _this$props4.skipChecked;
      return Object(external_this_wp_element_["createElement"])(layout, {
        activeImport: activeImport,
        cacheNeedsClearing: this.cacheNeedsClearing,
        createNotice: createNotice,
        dateFormat: this.dateFormat,
        inProgress: this.isImportationInProgress(),
        onImportFinished: this.onImportFinished,
        onImportStarted: this.onImportStarted,
        lastImportStartTimestamp: lastImportStartTimestamp,
        clearStatusAndTotalsCache: this.clearStatusAndTotalsCache,
        period: selectedPeriod,
        skipChecked: skipChecked,
        startStatusCheckInterval: this.startStatusCheckInterval,
        stopImport: this.stopImport
      });
    }
  }]);

  return HistoricalData;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var historical_data = (Object(compose["a" /* default */])([Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select(external_this_wc_data_["NOTES_STORE_NAME"]),
      getNotes = _select.getNotes;

  var _select2 = select(external_this_wc_data_["IMPORT_STORE_NAME"]),
      getImportStarted = _select2.getImportStarted,
      getFormSettings = _select2.getFormSettings;

  var notesQuery = {
    page: 1,
    per_page: external_this_wc_data_["QUERY_DEFAULTS"].pageSize,
    type: 'update',
    status: 'unactioned'
  };
  var notes = getNotes(notesQuery);

  var _getImportStarted = getImportStarted(),
      activeImport = _getImportStarted.activeImport,
      lastImportStartTimestamp = _getImportStarted.lastImportStartTimestamp;

  var _getFormSettings = getFormSettings(),
      selectedPeriod = _getFormSettings.period,
      skipChecked = _getFormSettings.skipPrevious;

  return {
    activeImport: activeImport,
    lastImportStartTimestamp: lastImportStartTimestamp,
    notes: notes,
    selectedPeriod: selectedPeriod,
    skipChecked: skipChecked
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(external_this_wc_data_["NOTES_STORE_NAME"]),
      updateNote = _dispatch.updateNote;

  var _dispatch2 = dispatch(external_this_wc_data_["IMPORT_STORE_NAME"]),
      invalidateResolution = _dispatch2.invalidateResolution,
      setImportStarted = _dispatch2.setImportStarted;

  return {
    invalidateResolution: invalidateResolution,
    setImportStarted: setImportStarted,
    updateNote: updateNote
  };
}), with_spoken_messages["a" /* default */]])(historical_data_HistoricalData));
// CONCATENATED MODULE: ./client/analytics/settings/index.js





function settings_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function settings_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { settings_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { settings_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */








/**
 * Internal dependencies
 */






var settings_Settings = function Settings(_ref) {
  var createNotice = _ref.createNotice,
      query = _ref.query;

  var _useSettings = Object(external_this_wc_data_["useSettings"])('wc_admin', ['wcAdminSettings']),
      settingsError = _useSettings.settingsError,
      isRequesting = _useSettings.isRequesting,
      isDirty = _useSettings.isDirty,
      persistSettings = _useSettings.persistSettings,
      updateAndPersistSettings = _useSettings.updateAndPersistSettings,
      updateSettings = _useSettings.updateSettings,
      wcAdminSettings = _useSettings.wcAdminSettings;

  var hasSaved = Object(external_this_wp_element_["useRef"])(false);
  Object(external_this_wp_element_["useEffect"])(function () {
    function warnIfUnsavedChanges(event) {
      if (isDirty) {
        event.returnValue = Object(external_this_wp_i18n_["__"])('You have unsaved changes. If you proceed, they will be lost.', 'woocommerce-admin');
        return event.returnValue;
      }
    }

    window.addEventListener('beforeunload', warnIfUnsavedChanges);
    return function () {
      return window.removeEventListener('beforeunload', warnIfUnsavedChanges);
    };
  }, [isDirty]);
  Object(external_this_wp_element_["useEffect"])(function () {
    if (isRequesting) {
      hasSaved.current = true;
      return;
    }

    if (!isRequesting && hasSaved.current) {
      if (!settingsError) {
        createNotice('success', Object(external_this_wp_i18n_["__"])('Your settings have been successfully saved.', 'woocommerce-admin'));
      } else {
        createNotice('error', Object(external_this_wp_i18n_["__"])('There was an error saving your settings. Please try again.', 'woocommerce-admin'));
      }

      hasSaved.current = false;
    }
  }, [isRequesting, settingsError, createNotice]);

  var resetDefaults = function resetDefaults() {
    if ( // eslint-disable-next-line no-alert
    window.confirm(Object(external_this_wp_i18n_["__"])('Are you sure you want to reset all settings to default values?', 'woocommerce-admin'))) {
      var resetSettings = Object.keys(config["b" /* config */]).reduce(function (result, setting) {
        result[setting] = config["b" /* config */][setting].defaultValue;
        return result;
      }, {});
      updateAndPersistSettings('wcAdminSettings', resetSettings);
      Object(external_this_wc_tracks_["recordEvent"])('analytics_settings_reset_defaults');
    }
  };

  var saveChanges = function saveChanges() {
    persistSettings();
    Object(external_this_wc_tracks_["recordEvent"])('analytics_settings_save', wcAdminSettings); // On save, reset persisted query properties of Nav Menu links to default

    query.period = undefined;
    query.compare = undefined;
    query.before = undefined;
    query.after = undefined;
    query.interval = undefined;
    query.type = undefined;
    window.wpNavMenuUrlUpdate(query);
  };

  var handleInputChange = function handleInputChange(e) {
    var _e$target = e.target,
        checked = _e$target.checked,
        name = _e$target.name,
        type = _e$target.type,
        value = _e$target.value;

    var nextSettings = settings_objectSpread({}, wcAdminSettings);

    if (type === 'checkbox') {
      if (checked) {
        nextSettings[name] = [].concat(toConsumableArray_default()(nextSettings[name]), [value]);
      } else {
        nextSettings[name] = nextSettings[name].filter(function (v) {
          return v !== value;
        });
      }
    } else {
      nextSettings[name] = value;
    }

    updateSettings('wcAdminSettings', nextSettings);
  };

  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["SectionHeader"], {
    title: Object(external_this_wp_i18n_["__"])('Analytics Settings', 'woocommerce-admin')
  }), Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-settings__wrapper"
  }, Object.keys(config["b" /* config */]).map(function (setting) {
    return Object(external_this_wp_element_["createElement"])(analytics_settings_setting, extends_default()({
      handleChange: handleInputChange,
      value: wcAdminSettings[setting],
      key: setting,
      name: setting
    }, config["b" /* config */][setting]));
  }), Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-settings__actions"
  }, Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
    isSecondary: true,
    onClick: resetDefaults
  }, Object(external_this_wp_i18n_["__"])('Reset Defaults', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
    isPrimary: true,
    isBusy: isRequesting,
    onClick: saveChanges
  }, Object(external_this_wp_i18n_["__"])('Save Settings', 'woocommerce-admin')))), query.import === 'true' ? Object(external_this_wp_element_["createElement"])(external_this_wc_components_["ScrollTo"], {
    offset: "-56"
  }, Object(external_this_wp_element_["createElement"])(historical_data, {
    createNotice: createNotice
  })) : Object(external_this_wp_element_["createElement"])(historical_data, {
    createNotice: createNotice
  }));
};

/* harmony default export */ var analytics_settings = __webpack_exports__["default"] = (Object(compose["a" /* default */])(Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  return {
    createNotice: createNotice
  };
}))(settings_Settings));

/***/ })

}]);