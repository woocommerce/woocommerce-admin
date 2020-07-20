(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ 112:
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
 */


function useInstanceId(object) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return createId(object);
  }, [object]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createNoticesFromResponse; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

function createNoticesFromResponse(response) {
  var _dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["dispatch"])('core/notices'),
      createNotice = _dispatch.createNotice;

  if (response.error_data && response.errors && Object.keys(response.errors).length) {
    // Loop over multi-error responses.
    Object.keys(response.errors).forEach(function (errorKey) {
      createNotice('error', response.errors[errorKey].join(' '));
    });
  } else if (response.message) {
    // Handle generic messages.
    createNotice(response.code ? 'error' : 'success', response.message);
  }
}

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
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

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82);









function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var Dropdown = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Dropdown, _Component);

  var _super = _createSuper(Dropdown);

  function Dropdown() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Dropdown);

    _this = _super.apply(this, arguments);
    _this.toggle = _this.toggle.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this));
    _this.close = _this.close.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this));
    _this.closeIfFocusOutside = _this.closeIfFocusOutside.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this));
    _this.containerRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createRef"])();
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Dropdown, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var isOpen = this.state.isOpen;
      var onToggle = this.props.onToggle;

      if (isOpen && onToggle) {
        onToggle(false);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var isOpen = this.state.isOpen;
      var onToggle = this.props.onToggle;

      if (prevState.isOpen !== isOpen && onToggle) {
        onToggle(isOpen);
      }
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.setState(function (state) {
        return {
          isOpen: !state.isOpen
        };
      });
    }
    /**
     * Closes the dropdown if a focus leaves the dropdown wrapper. This is
     * intentionally distinct from `onClose` since focus loss from the popover
     * is expected to occur when using the Dropdown's toggle button, in which
     * case the correct behavior is to keep the dropdown closed. The same applies
     * in case when focus is moved to the modal dialog.
     */

  }, {
    key: "closeIfFocusOutside",
    value: function closeIfFocusOutside() {
      if (!this.containerRef.current.contains(document.activeElement) && !document.activeElement.closest('[role="dialog"]')) {
        this.close();
      }
    }
  }, {
    key: "close",
    value: function close() {
      if (this.props.onClose) {
        this.props.onClose();
      }

      this.setState({
        isOpen: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isOpen = this.state.isOpen;
      var _this$props = this.props,
          renderContent = _this$props.renderContent,
          renderToggle = _this$props.renderToggle,
          _this$props$position = _this$props.position,
          position = _this$props$position === void 0 ? 'bottom right' : _this$props$position,
          className = _this$props.className,
          contentClassName = _this$props.contentClassName,
          expandOnMobile = _this$props.expandOnMobile,
          headerTitle = _this$props.headerTitle,
          focusOnMount = _this$props.focusOnMount,
          popoverProps = _this$props.popoverProps;
      var args = {
        isOpen: isOpen,
        onToggle: this.toggle,
        onClose: this.close
      };
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('components-dropdown', className),
        ref: this.containerRef
      }, renderToggle(args), isOpen && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_popover__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
        position: position,
        onClose: this.close,
        onFocusOutside: this.closeIfFocusOutside,
        expandOnMobile: expandOnMobile,
        headerTitle: headerTitle,
        focusOnMount: focusOnMount
      }, popoverProps, {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('components-dropdown__content', popoverProps ? popoverProps.className : undefined, contentClassName)
      }), renderContent(args)));
    }
  }]);

  return Dropdown;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Dropdown);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(266);
/* harmony import */ var _navigable_container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(418);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(67);











function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_ref, ["tabId", "onClick", "children", "selected"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])(_button__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])({
    role: "tab",
    tabIndex: selected ? null : -1,
    "aria-selected": selected,
    id: tabId,
    onClick: onClick
  }, rest), children);
};

var TabPanel = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(TabPanel, _Component);

  var _super = _createSuper(TabPanel);

  function TabPanel() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, TabPanel);

    _this = _super.apply(this, arguments);
    var _this$props = _this.props,
        tabs = _this$props.tabs,
        initialTabName = _this$props.initialTabName;
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this));
    _this.onNavigate = _this.onNavigate.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this));
    _this.state = {
      selected: initialTabName || (tabs.length > 0 ? tabs[0].name : null)
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(TabPanel, [{
    key: "handleClick",
    value: function handleClick(tabKey) {
      var _this$props$onSelect = this.props.onSelect,
          onSelect = _this$props$onSelect === void 0 ? lodash__WEBPACK_IMPORTED_MODULE_11__["noop"] : _this$props$onSelect;
      this.setState({
        selected: tabKey
      });
      onSelect(tabKey);
    }
  }, {
    key: "onNavigate",
    value: function onNavigate(childIndex, child) {
      child.click();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var selected = this.state.selected;
      var _this$props2 = this.props,
          _this$props2$activeCl = _this$props2.activeClass,
          activeClass = _this$props2$activeCl === void 0 ? 'is-active' : _this$props2$activeCl,
          className = _this$props2.className,
          instanceId = _this$props2.instanceId,
          _this$props2$orientat = _this$props2.orientation,
          orientation = _this$props2$orientat === void 0 ? 'horizontal' : _this$props2$orientat,
          tabs = _this$props2.tabs;
      var selectedTab = Object(lodash__WEBPACK_IMPORTED_MODULE_11__["find"])(tabs, {
        name: selected
      });
      var selectedId = instanceId + '-' + selectedTab.name;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])("div", {
        className: className
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])(_navigable_container__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        role: "tablist",
        orientation: orientation,
        onNavigate: this.onNavigate,
        className: "components-tab-panel__tabs"
      }, tabs.map(function (tab) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])(TabButton, {
          className: classnames__WEBPACK_IMPORTED_MODULE_10___default()('components-tab-panel__tabs-item', tab.className, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, activeClass, tab.name === selected)),
          tabId: instanceId + '-' + tab.name,
          "aria-controls": instanceId + '-' + tab.name + '-view',
          selected: tab.name === selected,
          key: tab.name,
          onClick: Object(lodash__WEBPACK_IMPORTED_MODULE_11__["partial"])(_this2.handleClick, tab.name)
        }, tab.title);
      })), selectedTab && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["createElement"])("div", {
        "aria-labelledby": selectedId,
        role: "tabpanel",
        id: selectedId + '-view',
        className: "components-tab-panel__tab-content"
      }, this.props.children(selectedTab)));
    }
  }]);

  return TabPanel;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(TabPanel));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);


/**
 * WordPress dependencies
 */

var external = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__[/* SVG */ "b"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__[/* Path */ "a"], {
  d: "M18.2 17c0 .7-.6 1.2-1.2 1.2H7c-.7 0-1.2-.6-1.2-1.2V7c0-.7.6-1.2 1.2-1.2h3.2V4.2H7C5.5 4.2 4.2 5.5 4.2 7v10c0 1.5 1.2 2.8 2.8 2.8h10c1.5 0 2.8-1.2 2.8-2.8v-3.6h-1.5V17zM14.9 3v1.5h3.7l-6.4 6.4 1.1 1.1 6.4-6.4v3.7h1.5V3h-6.3z"
}));
/* harmony default export */ __webpack_exports__["a"] = (external);
//# sourceMappingURL=external.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCountryCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCurrencyRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getProductIdsForCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPriceValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isOnboardingEnabled; });
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/**
 * External dependencies
 */


/**
 * Internal dependencies
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
  var euCountries = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["without"])(Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__[/* getSetting */ "g"])('onboarding', {
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
  var onboarding = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__[/* getSetting */ "g"])('onboarding', {});
  var productIds = []; // The population of onboarding.productTypes only happens if the task list should be shown
  // so bail early if it isn't present.

  if (!onboarding.productTypes) {
    return productIds;
  }

  var productTypes = profileItems.product_types || [];
  productTypes.forEach(function (productType) {
    if (onboarding.productTypes[productType] && onboarding.productTypes[productType].product && (includeInstalledItems || !installedPlugins.includes(onboarding.productTypes[productType].slug))) {
      productIds.push(onboarding.productTypes[productType].product);
    }
  });
  var theme = onboarding.themes.find(function (themeData) {
    return themeData.slug === profileItems.theme;
  });

  if (theme && theme.id && getPriceValue(theme.price) > 0 && (includeInstalledItems || !theme.is_installed)) {
    productIds.push(theme.id);
  }

  return productIds;
}
/**
 * Get the value of a price from a string, removing any non-numeric characters.
 *
 * @param {string} string Price string.
 * @return {number} Number value.
 */

function getPriceValue(string) {
  return Number(Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__["decodeEntities"])(string).replace(/[^0-9.-]+/g, ''));
}
/**
 * Returns if the onboarding feature of WooCommerce Admin should be enabled.
 *
 * While we preform an a/b test of onboarding, the feature will be enabled within the plugin build,
 * but only if the user recieved the test/opted in.
 *
 * @return {boolean} True if the onboarding is enabled.
 */

function isOnboardingEnabled() {
  if (!window.wcAdminFeatures.onboarding) {
    return false;
  }

  return Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_2__[/* getSetting */ "g"])('onboardingEnabled', false);
}

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ALLOWED_TAGS */
/* unused harmony export ALLOWED_ATTR */
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(766);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

var ALLOWED_TAGS = ['a', 'b', 'em', 'i', 'strong', 'p'];
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

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ activity_card_ActivityCard; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ placeholder; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(38);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(37);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(39);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(42);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(26);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(8);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/gridicons/dist/index.js
var dist = __webpack_require__(90);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(16);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./client/header/activity-panel/activity-card/style.scss
var style = __webpack_require__(762);

// EXTERNAL MODULE: external {"this":["wc","components"]}
var external_this_wc_components_ = __webpack_require__(53);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// CONCATENATED MODULE: ./client/header/activity-panel/activity-card/placeholder.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */





var placeholder_ActivityCardPlaceholder = /*#__PURE__*/function (_Component) {
  inherits_default()(ActivityCardPlaceholder, _Component);

  var _super = _createSuper(ActivityCardPlaceholder);

  function ActivityCardPlaceholder() {
    classCallCheck_default()(this, ActivityCardPlaceholder);

    return _super.apply(this, arguments);
  }

  createClass_default()(ActivityCardPlaceholder, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          hasAction = _this$props.hasAction,
          hasDate = _this$props.hasDate,
          hasSubtitle = _this$props.hasSubtitle,
          lines = _this$props.lines;
      var cardClassName = classnames_default()('woocommerce-activity-card is-loading', className);
      return Object(external_this_wp_element_["createElement"])("div", {
        className: cardClassName,
        "aria-hidden": true
      }, Object(external_this_wp_element_["createElement"])("span", {
        className: "woocommerce-activity-card__icon"
      }, Object(external_this_wp_element_["createElement"])("span", {
        className: "is-placeholder"
      })), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__header"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__title is-placeholder"
      }), hasSubtitle && Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__subtitle is-placeholder"
      }), hasDate && Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__date"
      }, Object(external_this_wp_element_["createElement"])("span", {
        className: "is-placeholder"
      }))), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__body"
      }, Object(external_lodash_["range"])(lines).map(function (i) {
        return Object(external_this_wp_element_["createElement"])("span", {
          className: "is-placeholder",
          key: i
        });
      })), hasAction && Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__actions"
      }, Object(external_this_wp_element_["createElement"])("span", {
        className: "is-placeholder"
      })));
    }
  }]);

  return ActivityCardPlaceholder;
}(external_this_wp_element_["Component"]);

placeholder_ActivityCardPlaceholder.propTypes = {
  className: prop_types_default.a.string,
  hasAction: prop_types_default.a.bool,
  hasDate: prop_types_default.a.bool,
  hasSubtitle: prop_types_default.a.bool,
  lines: prop_types_default.a.number
};
placeholder_ActivityCardPlaceholder.defaultProps = {
  hasAction: false,
  hasDate: false,
  hasSubtitle: false,
  lines: 1
};
/* harmony default export */ var placeholder = (placeholder_ActivityCardPlaceholder);
// CONCATENATED MODULE: ./client/header/activity-panel/activity-card/index.js







function activity_card_createSuper(Derived) { var hasNativeReflectConstruct = activity_card_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function activity_card_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */





/**
 * Internal dependencies
 */




var activity_card_ActivityCard = /*#__PURE__*/function (_Component) {
  inherits_default()(ActivityCard, _Component);

  var _super = activity_card_createSuper(ActivityCard);

  function ActivityCard() {
    classCallCheck_default()(this, ActivityCard);

    return _super.apply(this, arguments);
  }

  createClass_default()(ActivityCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          actions = _this$props.actions,
          className = _this$props.className,
          children = _this$props.children,
          date = _this$props.date,
          icon = _this$props.icon,
          subtitle = _this$props.subtitle,
          title = _this$props.title,
          unread = _this$props.unread;
      var cardClassName = classnames_default()('woocommerce-activity-card', className);
      var actionsList = Array.isArray(actions) ? actions : [actions];
      return Object(external_this_wp_element_["createElement"])("section", {
        className: cardClassName
      }, unread && Object(external_this_wp_element_["createElement"])("span", {
        className: "woocommerce-activity-card__unread"
      }), icon && Object(external_this_wp_element_["createElement"])("span", {
        className: "woocommerce-activity-card__icon",
        "aria-hidden": true
      }, icon), Object(external_this_wp_element_["createElement"])("header", {
        className: "woocommerce-activity-card__header"
      }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["H"], {
        className: "woocommerce-activity-card__title"
      }, title), subtitle && Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__subtitle"
      }, subtitle), date && Object(external_this_wp_element_["createElement"])("span", {
        className: "woocommerce-activity-card__date"
      }, external_moment_default.a.utc(date).fromNow())), Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Section"], {
        className: "woocommerce-activity-card__body"
      }, children), actions && Object(external_this_wp_element_["createElement"])("footer", {
        className: "woocommerce-activity-card__actions"
      }, actionsList.map(function (item, i) {
        return Object(external_this_wp_element_["cloneElement"])(item, {
          key: i
        });
      })));
    }
  }]);

  return ActivityCard;
}(external_this_wp_element_["Component"]);

activity_card_ActivityCard.propTypes = {
  actions: prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.element), prop_types_default.a.element]),
  className: prop_types_default.a.string,
  children: prop_types_default.a.node.isRequired,
  date: prop_types_default.a.string,
  icon: prop_types_default.a.node,
  subtitle: prop_types_default.a.node,
  title: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.node]).isRequired,
  unread: prop_types_default.a.bool
};
activity_card_ActivityCard.defaultProps = {
  icon: Object(external_this_wp_element_["createElement"])(dist_default.a, {
    icon: "notice-outline",
    size: 48
  }),
  unread: false
};



/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(734);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(763);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_10__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */




/**
 * Internal dependencies
 */




var ActivityHeader = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ActivityHeader, _Component);

  var _super = _createSuper(ActivityHeader);

  function ActivityHeader() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ActivityHeader);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ActivityHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          menu = _this$props.menu,
          subtitle = _this$props.subtitle,
          title = _this$props.title,
          unreadMessages = _this$props.unreadMessages;
      var cardClassName = classnames__WEBPACK_IMPORTED_MODULE_6___default()({
        'woocommerce-layout__inbox-panel-header': subtitle,
        'woocommerce-layout__activity-panel-header': !subtitle
      }, className);
      var countUnread = unreadMessages ? unreadMessages : 0;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: cardClassName
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "woocommerce-layout__inbox-title"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        variant: "title.small"
      }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        variant: "button"
      }, countUnread > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", {
        className: "woocommerce-layout__inbox-badge"
      }, unreadMessages))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "woocommerce-layout__inbox-subtitle"
      }, subtitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        variant: "body.small"
      }, subtitle)), menu && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "woocommerce-layout__activity-panel-header-menu"
      }, menu));
    }
  }]);

  return ActivityHeader;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

ActivityHeader.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  unreadMessages: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  title: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  menu: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({
    type: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf([_woocommerce_components__WEBPACK_IMPORTED_MODULE_10__["EllipsisMenu"]])
  })
};
/* harmony default export */ __webpack_exports__["a"] = (ActivityHeader);

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(169);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(18);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(43);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_13__);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */






/**
 * WooCommerce dependencies
 */



var Connect = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Connect, _Component);

  var _super = _createSuper(Connect);

  function Connect(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Connect);

    _this = _super.call(this, props);
    _this.state = {
      isConnecting: false
    };
    _this.connectJetpack = _this.connectJetpack.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    props.setIsPending(true);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Connect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          autoConnect = _this$props.autoConnect,
          jetpackConnectUrl = _this$props.jetpackConnectUrl;

      if (autoConnect && jetpackConnectUrl) {
        this.connectJetpack();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          autoConnect = _this$props2.autoConnect,
          createNotice = _this$props2.createNotice,
          error = _this$props2.error,
          isRequesting = _this$props2.isRequesting,
          jetpackConnectUrl = _this$props2.jetpackConnectUrl,
          onError = _this$props2.onError,
          setIsPending = _this$props2.setIsPending;

      if (prevProps.isRequesting && !isRequesting) {
        setIsPending(false);
      }

      if (error && error !== prevProps.error) {
        if (onError) {
          onError();
        }

        createNotice('error', error);
      }

      if (autoConnect && jetpackConnectUrl) {
        this.connectJetpack();
      }
    }
  }, {
    key: "connectJetpack",
    value: function () {
      var _connectJetpack = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this$props3, jetpackConnectUrl, onConnect;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props3 = this.props, jetpackConnectUrl = _this$props3.jetpackConnectUrl, onConnect = _this$props3.onConnect;
                this.setState({
                  isConnecting: true
                }, function () {
                  if (onConnect) {
                    onConnect();
                  }

                  window.location = jetpackConnectUrl;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function connectJetpack() {
        return _connectJetpack.apply(this, arguments);
      }

      return connectJetpack;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          autoConnect = _this$props4.autoConnect,
          hasErrors = _this$props4.hasErrors,
          isRequesting = _this$props4.isRequesting,
          onSkip = _this$props4.onSkip,
          skipText = _this$props4.skipText;

      if (autoConnect) {
        return null;
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, hasErrors ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        isPrimary: true,
        onClick: function onClick() {
          return window.location.reload();
        }
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Retry', 'woocommerce-admin')) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        disabled: isRequesting,
        isBusy: this.state.isConnecting,
        isPrimary: true,
        onClick: this.connectJetpack
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Connect', 'woocommerce-admin')), onSkip && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
        onClick: onSkip
      }, skipText || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('No thanks', 'woocommerce-admin')));
    }
  }]);

  return Connect;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Connect.propTypes = {
  /**
   * If connection should happen automatically, or requires user confirmation.
   */
  autoConnect: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,

  /**
   * Method to create a displayed notice.
   */
  createNotice: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired,

  /**
   * Human readable error message.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,

  /**
   * Bool to determine if the "Retry" button should be displayed.
   */
  hasErrors: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,

  /**
   * Bool to check if the connection URL is still being requested.
   */
  isRequesting: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,

  /**
   * Generated Jetpack connection URL.
   */
  jetpackConnectUrl: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,

  /**
   * Called before the redirect to Jetpack.
   */
  onConnect: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,

  /**
   * Called when the plugin has an error retrieving the jetpackConnectUrl.
   */
  onError: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,

  /**
   * Called when the plugin connection is skipped.
   */
  onSkip: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,

  /**
   * Redirect URL to encode as a URL param for the connection path.
   */
  redirectUrl: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,

  /**
   * Text used for the skip connection button.
   */
  skipText: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,

  /**
   * Control the `isPending` logic of the parent containing the Stepper.
   */
  setIsPending: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func
};
Connect.defaultProps = {
  autoConnect: false,
  setIsPending: function setIsPending() {}
};
/* harmony default export */ __webpack_exports__["a"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_12__["withSelect"])(function (select, props) {
  var _select = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_13__["PLUGINS_STORE_NAME"]),
      getJetpackConnectUrl = _select.getJetpackConnectUrl,
      isPluginsRequesting = _select.isPluginsRequesting,
      getPluginsError = _select.getPluginsError;

  var queryArgs = {
    redirect_url: props.redirectUrl || window.location.href
  };
  var isRequesting = isPluginsRequesting('getJetpackConnectUrl');
  var error = getPluginsError('getJetpackConnectUrl') || '';
  var jetpackConnectUrl = getJetpackConnectUrl(queryArgs);
  return {
    error: error,
    isRequesting: isRequesting,
    jetpackConnectUrl: jetpackConnectUrl
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_12__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  return {
    createNotice: createNotice
  };
}))(Connect));

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getIndicatorValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIndicatorData; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(201);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_number__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23);
/**
 * External dependencies
 */


/**
 * WooCommerce dependencies
 */







function getReportUrl(href, persistedQuery, primaryItem) {
  if (!href) {
    return '';
  }

  if (href === '/jetpack') {
    return Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_6__[/* getAdminLink */ "f"])('admin.php?page=jetpack#/dashboard');
  }

  return Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__["getNewPath"])(persistedQuery, href, {
    chart: primaryItem.chart
  });
}

var getIndicatorValues = function getIndicatorValues(_ref) {
  var indicator = _ref.indicator,
      primaryData = _ref.primaryData,
      secondaryData = _ref.secondaryData,
      currency = _ref.currency,
      formatCurrency = _ref.formatCurrency,
      persistedQuery = _ref.persistedQuery;
  var primaryItem = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(primaryData.data, function (data) {
    return data.stat === indicator.stat;
  });
  var secondaryItem = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(secondaryData.data, function (data) {
    return data.stat === indicator.stat;
  });

  if (!primaryItem || !secondaryItem) {
    return {};
  }

  var href = primaryItem._links && primaryItem._links.report[0] && primaryItem._links.report[0].href || '';
  var reportUrl = getReportUrl(href, persistedQuery, primaryItem);
  var reportUrlType = href === '/jetpack' ? 'wp-admin' : 'wc-admin';
  var isCurrency = primaryItem.format === 'currency';
  var delta = Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_5__["calculateDelta"])(primaryItem.value, secondaryItem.value);
  var primaryValue = isCurrency ? formatCurrency(primaryItem.value) : Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_5__["formatValue"])(currency, primaryItem.format, primaryItem.value);
  var secondaryValue = isCurrency ? formatCurrency(secondaryItem.value) : Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_5__["formatValue"])(currency, secondaryItem.format, secondaryItem.value);
  return {
    primaryValue: primaryValue,
    secondaryValue: secondaryValue,
    delta: delta,
    reportUrl: reportUrl,
    reportUrlType: reportUrlType
  };
};
var getIndicatorData = function getIndicatorData(select, indicators, query) {
  var _select = select('wc-api'),
      getReportItems = _select.getReportItems,
      getReportItemsError = _select.getReportItemsError,
      isReportItemsRequesting = _select.isReportItemsRequesting;

  var _select$getSetting = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings'),
      defaultDateRange = _select$getSetting.woocommerce_default_date_range;

  var datesFromQuery = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__["getCurrentDates"])(query, defaultDateRange);
  var endPrimary = datesFromQuery.primary.before;
  var endSecondary = datesFromQuery.secondary.before;
  var statKeys = indicators.map(function (indicator) {
    return indicator.stat;
  }).join(',');
  var primaryQuery = {
    after: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__["appendTimestamp"])(datesFromQuery.primary.after, 'start'),
    before: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__["appendTimestamp"])(endPrimary, endPrimary.isSame(moment__WEBPACK_IMPORTED_MODULE_0___default()(), 'day') ? 'now' : 'end'),
    stats: statKeys
  };
  var secondaryQuery = {
    after: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__["appendTimestamp"])(datesFromQuery.secondary.after, 'start'),
    before: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__["appendTimestamp"])(endSecondary, endSecondary.isSame(moment__WEBPACK_IMPORTED_MODULE_0___default()(), 'day') ? 'now' : 'end'),
    stats: statKeys
  };
  var primaryData = getReportItems('performance-indicators', primaryQuery);
  var primaryError = getReportItemsError('performance-indicators', primaryQuery) || null;
  var primaryRequesting = isReportItemsRequesting('performance-indicators', primaryQuery);
  var secondaryData = getReportItems('performance-indicators', secondaryQuery);
  var secondaryError = getReportItemsError('performance-indicators', secondaryQuery) || null;
  var secondaryRequesting = isReportItemsRequesting('performance-indicators', secondaryQuery);
  return {
    primaryData: primaryData,
    primaryError: primaryError,
    primaryRequesting: primaryRequesting,
    secondaryData: secondaryData,
    secondaryError: secondaryError,
    secondaryRequesting: secondaryRequesting,
    defaultDateRange: defaultDateRange
  };
};

/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(13), __webpack_require__(78));
	else {}
})(this, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
  module.exports = __webpack_require__(5)();
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// Tell whether the rect is visible, given an offset
//
// return: boolean
module.exports = function (offset, rect, containmentRect) {
  var offsetDir = offset.direction;
  var offsetVal = offset.value; // Rules for checking different kind of offsets. In example if the element is
  // 90px below viewport and offsetTop is 100, it is considered visible.

  switch (offsetDir) {
    case 'top':
      return containmentRect.top + offsetVal < rect.top && containmentRect.bottom > rect.bottom && containmentRect.left < rect.left && containmentRect.right > rect.right;

    case 'left':
      return containmentRect.left + offsetVal < rect.left && containmentRect.bottom > rect.bottom && containmentRect.top < rect.top && containmentRect.right > rect.right;

    case 'bottom':
      return containmentRect.bottom - offsetVal > rect.bottom && containmentRect.left < rect.left && containmentRect.right > rect.right && containmentRect.top < rect.top;

    case 'right':
      return containmentRect.right - offsetVal > rect.right && containmentRect.left < rect.left && containmentRect.top < rect.top && containmentRect.bottom > rect.bottom;
  }
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VisibilitySensor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function normalizeRect(rect) {
  if (rect.width === undefined) {
    rect.width = rect.right - rect.left;
  }

  if (rect.height === undefined) {
    rect.height = rect.bottom - rect.top;
  }

  return rect;
}

var VisibilitySensor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VisibilitySensor, _React$Component);

  function VisibilitySensor(props) {
    var _this;

    _classCallCheck(this, VisibilitySensor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VisibilitySensor).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getContainer", function () {
      return _this.props.containment || window;
    });

    _defineProperty(_assertThisInitialized(_this), "addEventListener", function (target, event, delay, throttle) {
      if (!_this.debounceCheck) {
        _this.debounceCheck = {};
      }

      var timeout;
      var func;

      var later = function later() {
        timeout = null;

        _this.check();
      };

      if (throttle > -1) {
        func = function func() {
          if (!timeout) {
            timeout = setTimeout(later, throttle || 0);
          }
        };
      } else {
        func = function func() {
          clearTimeout(timeout);
          timeout = setTimeout(later, delay || 0);
        };
      }

      var info = {
        target: target,
        fn: func,
        getLastTimeout: function getLastTimeout() {
          return timeout;
        }
      };
      target.addEventListener(event, info.fn);
      _this.debounceCheck[event] = info;
    });

    _defineProperty(_assertThisInitialized(_this), "startWatching", function () {
      if (_this.debounceCheck || _this.interval) {
        return;
      }

      if (_this.props.intervalCheck) {
        _this.interval = setInterval(_this.check, _this.props.intervalDelay);
      }

      if (_this.props.scrollCheck) {
        _this.addEventListener(_this.getContainer(), "scroll", _this.props.scrollDelay, _this.props.scrollThrottle);
      }

      if (_this.props.resizeCheck) {
        _this.addEventListener(window, "resize", _this.props.resizeDelay, _this.props.resizeThrottle);
      } // if dont need delayed call, check on load ( before the first interval fires )


      !_this.props.delayedCall && _this.check();
    });

    _defineProperty(_assertThisInitialized(_this), "stopWatching", function () {
      if (_this.debounceCheck) {
        // clean up event listeners and their debounce callers
        for (var debounceEvent in _this.debounceCheck) {
          if (_this.debounceCheck.hasOwnProperty(debounceEvent)) {
            var debounceInfo = _this.debounceCheck[debounceEvent];
            clearTimeout(debounceInfo.getLastTimeout());
            debounceInfo.target.removeEventListener(debounceEvent, debounceInfo.fn);
            _this.debounceCheck[debounceEvent] = null;
          }
        }
      }

      _this.debounceCheck = null;

      if (_this.interval) {
        _this.interval = clearInterval(_this.interval);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "check", function () {
      var el = _this.node;
      var rect;
      var containmentRect; // if the component has rendered to null, dont update visibility

      if (!el) {
        return _this.state;
      }

      rect = normalizeRect(_this.roundRectDown(el.getBoundingClientRect()));

      if (_this.props.containment) {
        var containmentDOMRect = _this.props.containment.getBoundingClientRect();

        containmentRect = {
          top: containmentDOMRect.top,
          left: containmentDOMRect.left,
          bottom: containmentDOMRect.bottom,
          right: containmentDOMRect.right
        };
      } else {
        containmentRect = {
          top: 0,
          left: 0,
          bottom: window.innerHeight || document.documentElement.clientHeight,
          right: window.innerWidth || document.documentElement.clientWidth
        };
      } // Check if visibility is wanted via offset?


      var offset = _this.props.offset || {};
      var hasValidOffset = _typeof(offset) === "object";

      if (hasValidOffset) {
        containmentRect.top += offset.top || 0;
        containmentRect.left += offset.left || 0;
        containmentRect.bottom -= offset.bottom || 0;
        containmentRect.right -= offset.right || 0;
      }

      var visibilityRect = {
        top: rect.top >= containmentRect.top,
        left: rect.left >= containmentRect.left,
        bottom: rect.bottom <= containmentRect.bottom,
        right: rect.right <= containmentRect.right
      }; // https://github.com/joshwnj/react-visibility-sensor/pull/114

      var hasSize = rect.height > 0 && rect.width > 0;
      var isVisible = hasSize && visibilityRect.top && visibilityRect.left && visibilityRect.bottom && visibilityRect.right; // check for partial visibility

      if (hasSize && _this.props.partialVisibility) {
        var partialVisible = rect.top <= containmentRect.bottom && rect.bottom >= containmentRect.top && rect.left <= containmentRect.right && rect.right >= containmentRect.left; // account for partial visibility on a single edge

        if (typeof _this.props.partialVisibility === "string") {
          partialVisible = visibilityRect[_this.props.partialVisibility];
        } // if we have minimum top visibility set by props, lets check, if it meets the passed value
        // so if for instance element is at least 200px in viewport, then show it.


        isVisible = _this.props.minTopValue ? partialVisible && rect.top <= containmentRect.bottom - _this.props.minTopValue : partialVisible;
      } // Deprecated options for calculating offset.


      if (typeof offset.direction === "string" && typeof offset.value === "number") {
        console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }", offset.direction, offset.value);
        isVisible = _lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3___default()(offset, rect, containmentRect);
      }

      var state = _this.state; // notify the parent when the value changes

      if (_this.state.isVisible !== isVisible) {
        state = {
          isVisible: isVisible,
          visibilityRect: visibilityRect
        };

        _this.setState(state);

        if (_this.props.onChange) _this.props.onChange(isVisible);
      }

      return state;
    });

    _this.state = {
      isVisible: null,
      visibilityRect: {}
    };
    return _this;
  }

  _createClass(VisibilitySensor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.node = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this);

      if (this.props.active) {
        this.startWatching();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopWatching();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // re-register node in componentDidUpdate if children diffs [#103]
      this.node = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this);

      if (this.props.active && !prevProps.active) {
        this.setState({
          isVisible: null,
          visibilityRect: {}
        });
        this.startWatching();
      } else if (!this.props.active) {
        this.stopWatching();
      }
    }
  }, {
    key: "roundRectDown",
    value: function roundRectDown(rect) {
      return {
        top: Math.floor(rect.top),
        left: Math.floor(rect.left),
        bottom: Math.floor(rect.bottom),
        right: Math.floor(rect.right)
      };
    }
    /**
     * Check if the element is within the visible viewport
     */

  }, {
    key: "render",
    value: function render() {
      if (this.props.children instanceof Function) {
        return this.props.children({
          isVisible: this.state.isVisible,
          visibilityRect: this.state.visibilityRect
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(this.props.children);
    }
  }]);

  return VisibilitySensor;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(VisibilitySensor, "defaultProps", {
  active: true,
  partialVisibility: false,
  minTopValue: 0,
  scrollCheck: false,
  scrollDelay: 250,
  scrollThrottle: -1,
  resizeCheck: false,
  resizeDelay: 250,
  resizeThrottle: -1,
  intervalCheck: true,
  intervalDelay: 100,
  delayedCall: false,
  offset: {},
  containment: null,
  children: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null)
});

_defineProperty(VisibilitySensor, "propTypes", {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  active: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  partialVisibility: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["top", "right", "bottom", "left"])]),
  delayedCall: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    top: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    left: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    bottom: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    right: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
  }), // deprecated offset property
  prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    direction: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["top", "right", "bottom", "left"]),
    value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
  })]),
  scrollCheck: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  scrollDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  scrollThrottle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  resizeCheck: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  resizeDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  resizeThrottle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  intervalCheck: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  intervalDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  containment: typeof window !== "undefined" ? prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(window.Element) : prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func]),
  minTopValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
});



/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(6);

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
/* 6 */
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
/******/ ]);
});

/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(129);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/compose.js
var compose = __webpack_require__(169);

// EXTERNAL MODULE: external {"this":["wc","data"]}
var external_this_wc_data_ = __webpack_require__(43);

// EXTERNAL MODULE: ./client/header/activity-panel/activity-card/index.js + 1 modules
var activity_card = __webpack_require__(760);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(38);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(37);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(39);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(42);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(26);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./client/header/activity-panel/panels/inbox/placeholder.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */



var placeholder_InboxNotePlaceholder = /*#__PURE__*/function (_Component) {
  inherits_default()(InboxNotePlaceholder, _Component);

  var _super = _createSuper(InboxNotePlaceholder);

  function InboxNotePlaceholder() {
    classCallCheck_default()(this, InboxNotePlaceholder);

    return _super.apply(this, arguments);
  }

  createClass_default()(InboxNotePlaceholder, [{
    key: "render",
    value: function render() {
      var className = this.props.className;
      return Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message is-placeholder ".concat(className),
        "aria-hidden": true
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__image"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "banner-block"
      })), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__wrapper"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__content"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__date"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "sixth-line"
      })), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__title"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "line"
      }), Object(external_this_wp_element_["createElement"])("div", {
        className: "line"
      })), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__text"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "line"
      }), Object(external_this_wp_element_["createElement"])("div", {
        className: "third-line"
      }))), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__actions"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "fifth-line"
      }), Object(external_this_wp_element_["createElement"])("div", {
        className: "fifth-line"
      }))));
    }
  }]);

  return InboxNotePlaceholder;
}(external_this_wp_element_["Component"]);

placeholder_InboxNotePlaceholder.propTypes = {
  className: prop_types_default.a.string
};
/* harmony default export */ var placeholder = (placeholder_InboxNotePlaceholder);
// EXTERNAL MODULE: ./client/header/activity-panel/activity-header/index.js
var activity_header = __webpack_require__(761);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(62);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/dropdown/index.js
var dropdown = __webpack_require__(721);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/modal/index.js + 3 modules
var modal = __webpack_require__(722);

// EXTERNAL MODULE: ./node_modules/react-visibility-sensor/dist/visibility-sensor.js
var visibility_sensor = __webpack_require__(776);
var visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(visibility_sensor);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(16);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(18);

// EXTERNAL MODULE: ./client/settings/index.js
var settings = __webpack_require__(23);

// CONCATENATED MODULE: ./client/header/activity-panel/panels/inbox/action.js








function action_createSuper(Derived) { var hasNativeReflectConstruct = action_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function action_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */





/**
 * WooCommerce dependencies
 */



var action_InboxNoteAction = /*#__PURE__*/function (_Component) {
  inherits_default()(InboxNoteAction, _Component);

  var _super = action_createSuper(InboxNoteAction);

  function InboxNoteAction(props) {
    var _this;

    classCallCheck_default()(this, InboxNoteAction);

    _this = _super.call(this, props);
    _this.state = {
      inAction: false
    };
    _this.handleActionClick = _this.handleActionClick.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(InboxNoteAction, [{
    key: "handleActionClick",
    value: function handleActionClick(event) {
      var _this$props = this.props,
          action = _this$props.action,
          actionCallback = _this$props.actionCallback,
          noteId = _this$props.noteId,
          triggerNoteAction = _this$props.triggerNoteAction,
          removeAllNotes = _this$props.removeAllNotes,
          removeNote = _this$props.removeNote;
      var href = event.target.href || '';
      var inAction = true;

      if (href.length && !href.startsWith(settings["a" /* ADMIN_URL */])) {
        event.preventDefault();
        inAction = false; // link buttons shouldn't be "busy".

        window.open(href, '_blank');
      }

      if (!action) {
        if (noteId) {
          removeNote(noteId);
        } else {
          removeAllNotes();
        }

        actionCallback(true);
      } else {
        this.setState({
          inAction: inAction
        }, function () {
          return triggerNoteAction(noteId, action.id);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          action = _this$props2.action,
          dismiss = _this$props2.dismiss,
          label = _this$props2.label;
      return Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
        isSecondary: true,
        isBusy: this.state.inAction,
        disabled: this.state.inAction,
        href: action ? action.url : undefined,
        onClick: this.handleActionClick
      }, dismiss ? label : action.label);
    }
  }]);

  return InboxNoteAction;
}(external_this_wp_element_["Component"]);

action_InboxNoteAction.propTypes = {
  noteId: prop_types_default.a.number,
  label: prop_types_default.a.string,
  dismiss: prop_types_default.a.bool,
  actionCallback: prop_types_default.a.func,
  action: prop_types_default.a.shape({
    id: prop_types_default.a.number.isRequired,
    url: prop_types_default.a.string,
    label: prop_types_default.a.string.isRequired,
    primary: prop_types_default.a.bool.isRequired
  })
};
/* harmony default export */ var inbox_action = (Object(compose["a" /* default */])(Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('wc-api'),
      removeAllNotes = _dispatch.removeAllNotes,
      removeNote = _dispatch.removeNote,
      triggerNoteAction = _dispatch.triggerNoteAction;

  return {
    removeAllNotes: removeAllNotes,
    removeNote: removeNote,
    triggerNoteAction: triggerNoteAction
  };
}))(action_InboxNoteAction));
// EXTERNAL MODULE: ./client/lib/sanitize-html/index.js
var sanitize_html = __webpack_require__(758);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(8);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./client/lib/tracks.js
var tracks = __webpack_require__(63);

// EXTERNAL MODULE: ./client/header/activity-panel/panels/inbox/style.scss
var style = __webpack_require__(777);

// EXTERNAL MODULE: external {"this":["wc","components"]}
var external_this_wc_components_ = __webpack_require__(53);

// EXTERNAL MODULE: ./client/utils/index.js
var utils = __webpack_require__(268);

// CONCATENATED MODULE: ./client/header/activity-panel/panels/inbox/card.js








function card_createSuper(Derived) { var hasNativeReflectConstruct = card_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function card_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */






/**
 * Internal dependencies
 */









var card_InboxNoteCard = /*#__PURE__*/function (_Component) {
  inherits_default()(InboxNoteCard, _Component);

  var _super = card_createSuper(InboxNoteCard);

  function InboxNoteCard(props) {
    var _this;

    classCallCheck_default()(this, InboxNoteCard);

    _this = _super.call(this, props);
    _this.onVisible = _this.onVisible.bind(assertThisInitialized_default()(_this));
    _this.hasBeenSeen = false;
    _this.state = {
      isDismissModalOpen: false,
      dismissType: null
    };
    _this.openDismissModal = _this.openDismissModal.bind(assertThisInitialized_default()(_this));
    _this.closeDismissModal = _this.closeDismissModal.bind(assertThisInitialized_default()(_this));
    _this.bodyNotificationRef = Object(external_this_wp_element_["createRef"])();
    _this.screen = Object(utils["a" /* getScreenName */])();
    return _this;
  }

  createClass_default()(InboxNoteCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.bodyNotificationRef.current) {
        this.bodyNotificationRef.current.addEventListener('click', function (event) {
          return _this2.handleBodyClick(event, _this2.props);
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      if (this.bodyNotificationRef.current) {
        this.bodyNotificationRef.current.removeEventListener('click', function (event) {
          return _this3.handleBodyClick(event, _this3.props);
        });
      }
    }
  }, {
    key: "handleBodyClick",
    value: function handleBodyClick(event, props) {
      var innerLink = event.target.href;

      if (innerLink) {
        var note = props.note;
        Object(tracks["b" /* recordEvent */])('wcadmin_inbox_action_click', {
          note_name: note.name,
          note_title: note.title,
          note_content_inner_link: innerLink
        });
      }
    } // Trigger a view Tracks event when the note is seen.

  }, {
    key: "onVisible",
    value: function onVisible(isVisible) {
      if (isVisible && !this.hasBeenSeen) {
        var note = this.props.note;
        Object(tracks["b" /* recordEvent */])('inbox_note_view', {
          note_content: note.content,
          note_name: note.name,
          note_title: note.title,
          note_type: note.type,
          screen: this.screen
        });
        this.hasBeenSeen = true;
      }
    }
  }, {
    key: "openDismissModal",
    value: function openDismissModal(type, onToggle) {
      this.setState({
        isDismissModalOpen: true,
        dismissType: type
      });
      onToggle();
    }
  }, {
    key: "closeDismissModal",
    value: function closeDismissModal(noteNameDismissConfirmation) {
      var dismissType = this.state.dismissType;
      var note = this.props.note;
      var noteNameDismissAll = dismissType === 'all' ? true : false;
      Object(tracks["b" /* recordEvent */])('inbox_action_dismiss', {
        note_name: note.name,
        note_title: note.title,
        note_name_dismiss_all: noteNameDismissAll,
        note_name_dismiss_confirmation: noteNameDismissConfirmation || false,
        screen: this.screen
      });
      this.setState({
        isDismissModalOpen: false
      });
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(event, onClose) {
      var dropdownClasses = ['woocommerce-admin-dismiss-notification', 'components-popover__content']; // This line is for IE compatibility.

      var relatedTarget = event.relatedTarget ? event.relatedTarget : document.activeElement;
      var isClickOutsideDropdown = relatedTarget ? dropdownClasses.some(function (className) {
        return relatedTarget.className.includes(className);
      }) : false;

      if (isClickOutsideDropdown) {
        event.preventDefault();
      } else {
        onClose();
      }
    }
  }, {
    key: "renderDismissButton",
    value: function renderDismissButton() {
      var _this4 = this;

      return Object(external_this_wp_element_["createElement"])(dropdown["a" /* default */], {
        contentClassName: "woocommerce-admin-dismiss-dropdown",
        position: "bottom right",
        renderToggle: function renderToggle(_ref) {
          var onClose = _ref.onClose,
              onToggle = _ref.onToggle;
          return Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
            isTertiary: true,
            onClick: onToggle,
            onBlur: function onBlur(event) {
              return _this4.handleBlur(event, onClose);
            }
          }, Object(external_this_wp_i18n_["__"])('Dismiss', 'woocommerce-admin'));
        },
        focusOnMount: false,
        popoverProps: {
          noArrow: true
        },
        renderContent: function renderContent(_ref2) {
          var onToggle = _ref2.onToggle;
          return Object(external_this_wp_element_["createElement"])("ul", null, Object(external_this_wp_element_["createElement"])("li", null, Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
            className: "woocommerce-admin-dismiss-notification",
            onClick: function onClick() {
              return _this4.openDismissModal('this', onToggle);
            }
          }, Object(external_this_wp_i18n_["__"])('Dismiss this message', 'woocommerce-admin'))), Object(external_this_wp_element_["createElement"])("li", null, Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
            className: "woocommerce-admin-dismiss-notification",
            onClick: function onClick() {
              return _this4.openDismissModal('all', onToggle);
            }
          }, Object(external_this_wp_i18n_["__"])('Dismiss all messages', 'woocommerce-admin'))));
        }
      });
    }
  }, {
    key: "getDismissConfirmationButton",
    value: function getDismissConfirmationButton() {
      var note = this.props.note;
      var dismissType = this.state.dismissType;
      return Object(external_this_wp_element_["createElement"])(inbox_action, {
        key: note.id,
        noteId: dismissType === 'all' ? null : note.id,
        label: Object(external_this_wp_i18n_["__"])("Yes, I'm sure", 'woocommerce-admin'),
        actionCallback: this.closeDismissModal,
        dismiss: true,
        screen: this.screen
      });
    }
  }, {
    key: "renderDismissConfirmationModal",
    value: function renderDismissConfirmationModal() {
      var _this5 = this;

      return Object(external_this_wp_element_["createElement"])(modal["a" /* default */], {
        title: Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_i18n_["__"])('Are you sure?', 'woocommerce-admin')),
        onRequestClose: function onRequestClose() {
          return _this5.closeDismissModal();
        },
        className: "woocommerce-inbox-dismiss-confirmation_modal"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-dismiss-confirmation_wrapper"
      }, Object(external_this_wp_element_["createElement"])("p", null, Object(external_this_wp_i18n_["__"])('Dismissed messages cannot be viewed again', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-dismiss-confirmation_buttons"
      }, Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
        isSecondary: true,
        onClick: function onClick() {
          return _this5.closeDismissModal();
        }
      }, Object(external_this_wp_i18n_["__"])('Cancel', 'woocommerce-admin')), this.getDismissConfirmationButton())));
    }
  }, {
    key: "renderActions",
    value: function renderActions(note) {
      var noteActions = note.actions,
          noteId = note.id;

      if (!noteActions) {
        return;
      }

      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, noteActions.map(function (action, index) {
        return Object(external_this_wp_element_["createElement"])(inbox_action, {
          key: index,
          noteId: noteId,
          action: action
        });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          lastRead = _this$props.lastRead,
          note = _this$props.note;
      var isDismissModalOpen = this.state.isDismissModalOpen;
      var content = note.content,
          dateCreated = note.date_created,
          dateCreatedGmt = note.date_created_gmt,
          image = note.image,
          isDeleted = note.is_deleted,
          layout = note.layout,
          title = note.title;

      if (isDeleted) {
        return null;
      }

      var unread = !lastRead || !dateCreatedGmt || new Date(dateCreatedGmt + 'Z').getTime() > lastRead;
      var date = dateCreated;
      var hasImage = layout !== 'plain' && layout !== '';
      var cardClassName = classnames_default()('woocommerce-inbox-message', layout, {
        'message-is-unread': unread
      });
      return Object(external_this_wp_element_["createElement"])(visibility_sensor_default.a, {
        onChange: this.onVisible
      }, Object(external_this_wp_element_["createElement"])("section", {
        className: cardClassName
      }, hasImage && Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__image"
      }, Object(external_this_wp_element_["createElement"])("img", {
        src: image,
        alt: ""
      })), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__wrapper"
      }, Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__content"
      }, date && Object(external_this_wp_element_["createElement"])("span", {
        className: "woocommerce-inbox-message__date"
      }, external_moment_default.a.utc(date).fromNow()), Object(external_this_wp_element_["createElement"])(external_this_wc_components_["H"], {
        className: "woocommerce-inbox-message__title"
      }, title), Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Section"], {
        className: "woocommerce-inbox-message__text"
      }, Object(external_this_wp_element_["createElement"])("span", {
        dangerouslySetInnerHTML: Object(sanitize_html["a" /* default */])(content),
        ref: this.bodyNotificationRef
      }))), Object(external_this_wp_element_["createElement"])("div", {
        className: "woocommerce-inbox-message__actions"
      }, this.renderActions(note), this.renderDismissButton())), isDismissModalOpen && this.renderDismissConfirmationModal()));
    }
  }]);

  return InboxNoteCard;
}(external_this_wp_element_["Component"]);

card_InboxNoteCard.propTypes = {
  note: prop_types_default.a.shape({
    id: prop_types_default.a.number,
    status: prop_types_default.a.string,
    title: prop_types_default.a.string,
    content: prop_types_default.a.string,
    date_created: prop_types_default.a.string,
    date_created_gmt: prop_types_default.a.string,
    actions: prop_types_default.a.arrayOf(prop_types_default.a.shape({
      id: prop_types_default.a.number.isRequired,
      url: prop_types_default.a.string,
      label: prop_types_default.a.string.isRequired,
      primary: prop_types_default.a.bool.isRequired
    })),
    layout: prop_types_default.a.string,
    image: prop_types_default.a.string,
    is_deleted: prop_types_default.a.bool
  }),
  lastRead: prop_types_default.a.number
};
/* harmony default export */ var card = (card_InboxNoteCard);
// EXTERNAL MODULE: ./client/wc-api/constants.js
var constants = __webpack_require__(33);

// EXTERNAL MODULE: ./client/wc-api/with-select.js
var with_select = __webpack_require__(101);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// CONCATENATED MODULE: ./client/header/activity-panel/panels/inbox/utils.js
/**
 * External dependencies
 */

/**
 * Get the count of the unread notes.
 *
 * @param {Array} notes - List of notes, contains read and unread notes.
 * @param {number} lastRead - The timestamp that the user read a note.
 * @return {number} - Unread notes count.
 */

function getUnreadNotesCount(notes, lastRead) {
  var unreadNotes = Object(external_lodash_["filter"])(notes, function (note) {
    var isDeleted = note.is_deleted,
        dateCreatedGmt = note.date_created_gmt;

    if (!isDeleted) {
      return !lastRead || !dateCreatedGmt || new Date(dateCreatedGmt + 'Z').getTime() > lastRead;
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
  var validNotes = Object(external_lodash_["filter"])(notes, function (note) {
    var isDeleted = note.is_deleted;
    return !isDeleted;
  });
  return validNotes.length > 0;
}
// CONCATENATED MODULE: ./client/header/activity-panel/panels/inbox/index.js



/**
 * External dependencies
 */



/**
 * WooCommerce dependencies
 */


/**
 * Internal dependencies
 */










var inbox_renderEmptyCard = function renderEmptyCard() {
  return Object(external_this_wp_element_["createElement"])(activity_card["a" /* ActivityCard */], {
    className: "woocommerce-empty-activity-card",
    title: Object(external_this_wp_i18n_["__"])('Your inbox is empty', 'woocommerce-admin'),
    icon: false
  }, Object(external_this_wp_i18n_["__"])('As things begin to happen in your store your inbox will start to fill up. ' + "You'll see things like achievements, new feature announcements, extension recommendations and more!", 'woocommerce-admin'));
};

var inbox_renderNotes = function renderNotes(_ref) {
  var hasNotes = _ref.hasNotes,
      isDismissUndoRequesting = _ref.isDismissUndoRequesting,
      isDismissAllUndoRequesting = _ref.isDismissAllUndoRequesting,
      lastRead = _ref.lastRead,
      notes = _ref.notes;

  if (isDismissAllUndoRequesting) {
    return;
  }

  if (!hasNotes) {
    return inbox_renderEmptyCard();
  }

  var notesArray = Object.keys(notes).map(function (key) {
    return notes[key];
  });
  return notesArray.map(function (note) {
    if (isDismissUndoRequesting === note.id) {
      return Object(external_this_wp_element_["createElement"])(placeholder, {
        className: "banner message-is-unread",
        key: note.id
      });
    }

    return Object(external_this_wp_element_["createElement"])(card, {
      key: note.id,
      note: note,
      lastRead: lastRead
    });
  });
};

var inbox_InboxPanel = function InboxPanel(props) {
  var isError = props.isError,
      isPanelEmpty = props.isPanelEmpty,
      isRequesting = props.isRequesting,
      isUndoRequesting = props.isUndoRequesting,
      isDismissAllUndoRequesting = props.isDismissAllUndoRequesting,
      isDismissUndoRequesting = props.isDismissUndoRequesting,
      notes = props.notes;

  var _useUserPreferences = Object(external_this_wc_data_["useUserPreferences"])(),
      updateUserPreferences = _useUserPreferences.updateUserPreferences,
      userPrefs = objectWithoutProperties_default()(_useUserPreferences, ["updateUserPreferences"]);

  var lastRead = userPrefs.activity_panel_inbox_last_read;
  Object(external_this_wp_element_["useEffect"])(function () {
    var mountTime = Date.now();
    return function () {
      var userDataFields = {
        activity_panel_inbox_last_read: mountTime
      };
      updateUserPreferences(userDataFields);
    };
  }, []);

  if (isError) {
    var title = Object(external_this_wp_i18n_["__"])('There was an error getting your inbox. Please try again.', 'woocommerce-admin');

    var actionLabel = Object(external_this_wp_i18n_["__"])('Reload', 'woocommerce-admin');

    var actionCallback = function actionCallback() {
      // @todo Add tracking for how often an error is displayed, and the reload action is clicked.
      window.location.reload();
    };

    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["EmptyContent"], {
      title: title,
      actionLabel: actionLabel,
      actionURL: null,
      actionCallback: actionCallback
    }));
  }

  var hasNotes = hasValidNotes(notes);
  var isActivityHeaderVisible = hasNotes || isRequesting || isUndoRequesting;

  if (isPanelEmpty) {
    isPanelEmpty(!hasNotes && !isActivityHeaderVisible);
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, isActivityHeaderVisible && Object(external_this_wp_element_["createElement"])(activity_header["a" /* default */], {
    title: Object(external_this_wp_i18n_["__"])('Inbox', 'woocommerce-admin'),
    subtitle: Object(external_this_wp_i18n_["__"])('Insights and growth tips for your business', 'woocommerce-admin'),
    unreadMessages: getUnreadNotesCount(notes, lastRead)
  }), Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-homepage-notes-wrapper"
  }, (isRequesting || isDismissAllUndoRequesting) && Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Section"], null, Object(external_this_wp_element_["createElement"])(placeholder, {
    className: "banner message-is-unread"
  })), Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Section"], null, !isRequesting && !isDismissAllUndoRequesting && inbox_renderNotes({
    hasNotes: hasNotes,
    isDismissUndoRequesting: isDismissUndoRequesting,
    isDismissAllUndoRequesting: isDismissAllUndoRequesting,
    lastRead: lastRead,
    notes: notes
  }))));
};

/* harmony default export */ var inbox = __webpack_exports__["default"] = (Object(compose["a" /* default */])(Object(with_select["a" /* default */])(function (select) {
  var _select = select('wc-api'),
      getNotes = _select.getNotes,
      getNotesError = _select.getNotesError,
      isGetNotesRequesting = _select.isGetNotesRequesting,
      getUndoDismissRequesting = _select.getUndoDismissRequesting;

  var inboxQuery = {
    page: 1,
    per_page: constants["d" /* QUERY_DEFAULTS */].pageSize,
    type: constants["d" /* QUERY_DEFAULTS */].noteTypes,
    orderby: 'date',
    order: 'desc',
    status: 'unactioned',
    _fields: ['id', 'name', 'title', 'content', 'type', 'status', 'actions', 'date_created', 'date_created_gmt', 'layout', 'image', 'is_deleted']
  };
  var notes = getNotes(inboxQuery);
  var isError = Boolean(getNotesError(inboxQuery));
  var isRequesting = isGetNotesRequesting(inboxQuery);

  var _getUndoDismissReques = getUndoDismissRequesting(),
      isUndoRequesting = _getUndoDismissReques.isUndoRequesting,
      isDismissUndoRequesting = _getUndoDismissReques.isDismissUndoRequesting,
      isDismissAllUndoRequesting = _getUndoDismissReques.isDismissAllUndoRequesting;

  return {
    notes: notes,
    isError: isError,
    isRequesting: isRequesting,
    isUndoRequesting: isUndoRequesting,
    isDismissUndoRequesting: isDismissUndoRequesting,
    isDismissAllUndoRequesting: isDismissAllUndoRequesting
  };
}))(inbox_InboxPanel));

/***/ }),

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 891:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 892:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/compose.js
var compose = __webpack_require__(169);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: ./client/settings/index.js
var settings = __webpack_require__(23);

// EXTERNAL MODULE: external {"this":["wc","components"]}
var external_this_wc_components_ = __webpack_require__(53);

// EXTERNAL MODULE: external {"this":["wc","data"]}
var external_this_wc_data_ = __webpack_require__(43);

// EXTERNAL MODULE: ./client/wc-api/with-select.js
var with_select = __webpack_require__(101);

// EXTERNAL MODULE: ./client/dashboard/utils.js
var utils = __webpack_require__(753);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(146);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(8);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(17);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/text/index.js + 4 modules
var build_module_text = __webpack_require__(734);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/card/index.js
var card = __webpack_require__(913);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/card/header.js
var header = __webpack_require__(914);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/card/body.js
var body = __webpack_require__(915);

// EXTERNAL MODULE: ./node_modules/@wordpress/primitives/build-module/svg/index.js
var svg = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/megaphone.js


/**
 * WordPress dependencies
 */

var megaphone = Object(external_this_wp_element_["createElement"])(svg["b" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["a" /* Path */], {
  fillRule: "evenodd",
  d: "M6.863 13.644L5 13.25h-.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H5L18 6.5h2V16h-2l-3.854-.815.026.008a3.75 3.75 0 01-7.31-1.549zm1.477.313a2.251 2.251 0 004.356.921l-4.356-.921zm-2.84-3.28L18.157 8h.343v6.5h-.343L5.5 11.823v-1.146z",
  clipRule: "evenodd"
}));
/* harmony default export */ var library_megaphone = (megaphone);
//# sourceMappingURL=megaphone.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/box.js


/**
 * WordPress dependencies
 */

var box = Object(external_this_wp_element_["createElement"])(svg["b" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["a" /* Path */], {
  fillRule: "evenodd",
  d: "M5 5.5h14a.5.5 0 01.5.5v1.5a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 9.232A2 2 0 013 7.5V6a2 2 0 012-2h14a2 2 0 012 2v1.5a2 2 0 01-1 1.732V18a2 2 0 01-2 2H6a2 2 0 01-2-2V9.232zm1.5.268V18a.5.5 0 00.5.5h12a.5.5 0 00.5-.5V9.5h-13z",
  clipRule: "evenodd"
}));
/* harmony default export */ var library_box = (box);
//# sourceMappingURL=box.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/brush.js


/**
 * WordPress dependencies
 */

var brush = Object(external_this_wp_element_["createElement"])(svg["b" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["a" /* Path */], {
  d: "M18.33 3.57s.27-.8-.31-1.36c-.53-.52-1.22-.24-1.22-.24-.61.3-5.76 3.47-7.67 5.57-.86.96-2.06 3.79-1.09 4.82.92.98 3.96-.17 4.79-1 2.06-2.06 5.21-7.17 5.5-7.79zM1.4 17.65c2.37-1.56 1.46-3.41 3.23-4.64.93-.65 2.22-.62 3.08.29.63.67.8 2.57-.16 3.46-1.57 1.45-4 1.55-6.15.89z"
}));
/* harmony default export */ var library_brush = (brush);
//# sourceMappingURL=brush.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/shipping.js


/**
 * WordPress dependencies
 */

var shipping = Object(external_this_wp_element_["createElement"])(svg["b" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["a" /* Path */], {
  d: "M3 6.75C3 5.784 3.784 5 4.75 5H15V7.313l.05.027 5.056 2.73.394.212v3.468a1.75 1.75 0 01-1.75 1.75h-.012a2.5 2.5 0 11-4.975 0H9.737a2.5 2.5 0 11-4.975 0H3V6.75zM13.5 14V6.5H4.75a.25.25 0 00-.25.25V14h.965a2.493 2.493 0 011.785-.75c.7 0 1.332.287 1.785.75H13.5zm4.535 0h.715a.25.25 0 00.25-.25v-2.573l-4-2.16v4.568a2.487 2.487 0 011.25-.335c.7 0 1.332.287 1.785.75zM6.282 15.5a1.002 1.002 0 00.968 1.25 1 1 0 10-.968-1.25zm9 0a1 1 0 101.937.498 1 1 0 00-1.938-.498z"
}));
/* harmony default export */ var library_shipping = (shipping);
//# sourceMappingURL=shipping.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/percent.js


/**
 * WordPress dependencies
 */

var percent = Object(external_this_wp_element_["createElement"])(svg["b" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["a" /* Path */], {
  fillRule: "evenodd",
  d: "M6.5 8a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM8 5a3 3 0 100 6 3 3 0 000-6zm6.5 11a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm1.5-3a3 3 0 100 6 3 3 0 000-6zM5.47 17.41a.75.75 0 001.06 1.06L18.47 6.53a.75.75 0 10-1.06-1.06L5.47 17.41z",
  clipRule: "evenodd"
}));
/* harmony default export */ var library_percent = (percent);
//# sourceMappingURL=percent.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/payment.js


/**
 * WordPress dependencies
 */

var payment = Object(external_this_wp_element_["createElement"])(svg["b" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["a" /* Path */], {
  fillRule: "evenodd",
  d: "M5.5 9.5v-2h13v2h-13zm0 3v4h13v-4h-13zM4 7a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V7z",
  clipRule: "evenodd"
}));
/* harmony default export */ var library_payment = (payment);
//# sourceMappingURL=payment.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/pencil.js


/**
 * WordPress dependencies
 */

var pencil = Object(external_this_wp_element_["createElement"])(svg["b" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["a" /* Path */], {
  d: "M13.89 3.39l2.71 2.72c.46.46.42 1.24.03 1.64l-8.01 8.02-5.56 1.16 1.16-5.58s7.6-7.63 7.99-8.03c.39-.39 1.22-.39 1.68.07zm-2.73 2.79l-5.59 5.61 1.11 1.11 5.54-5.65zm-2.97 8.23l5.58-5.6-1.07-1.08-5.59 5.6zM13.89 3.39l2.71 2.72c.46.46.42 1.24.03 1.64l-8.01 8.02-5.56 1.16 1.16-5.58s7.6-7.63 7.99-8.03c.39-.39 1.22-.39 1.68.07zm-2.73 2.79l-5.59 5.61 1.11 1.11 5.54-5.65zm-2.97 8.23l5.58-5.6-1.07-1.08-5.59 5.6z"
}));
/* harmony default export */ var library_pencil = (pencil);
//# sourceMappingURL=pencil.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/lifesaver.js


/**
 * WordPress dependencies
 */

var lifesaver = Object(external_this_wp_element_["createElement"])(svg["b" /* SVG */], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(svg["a" /* Path */], {
  fillRule: "evenodd",
  d: "M17.375 15.656A6.47 6.47 0 0018.5 12a6.47 6.47 0 00-.943-3.374l-1.262.813c.448.749.705 1.625.705 2.561a4.977 4.977 0 01-.887 2.844l1.262.813zm-1.951 1.87l-.813-1.261A4.976 4.976 0 0112 17c-.958 0-1.852-.27-2.613-.736l-.812 1.261A6.47 6.47 0 0012 18.5a6.47 6.47 0 003.424-.974zm-8.8-1.87A6.47 6.47 0 015.5 12c0-1.235.344-2.39.943-3.373l1.261.812A4.977 4.977 0 007 12c0 1.056.328 2.036.887 2.843l-1.262.813zm2.581-7.803A4.977 4.977 0 0112 7c1.035 0 1.996.314 2.794.853l.812-1.262A6.47 6.47 0 0012 5.5a6.47 6.47 0 00-3.607 1.092l.812 1.261zM12 20a8 8 0 100-16 8 8 0 000 16zm0-4.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z",
  clipRule: "evenodd"
}));
/* harmony default export */ var library_lifesaver = (lifesaver);
//# sourceMappingURL=lifesaver.js.map
// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/external.js
var external = __webpack_require__(732);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__(422);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/chevron-right.js
var chevron_right = __webpack_require__(727);

// EXTERNAL MODULE: ./client/lib/tracks.js
var tracks = __webpack_require__(63);

// EXTERNAL MODULE: ./client/quick-links/style.scss
var style = __webpack_require__(889);

// CONCATENATED MODULE: ./client/quick-links/index.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */




/**
 * WooCommerce dependencies
 */



/**
 * Internal dependencies
 */




function getItems(props) {
  return [{
    title: Object(external_this_wp_i18n_["__"])('Market my store', 'woocommerce-admin'),
    type: 'wc-admin',
    path: 'marketing',
    icon: library_megaphone,
    listItemTag: 'marketing'
  }, {
    title: Object(external_this_wp_i18n_["__"])('Add products', 'woocommerce-admin'),
    type: 'wp-admin',
    path: 'post-new.php?post_type=product',
    icon: library_box,
    listItemTag: 'add-products'
  }, {
    title: Object(external_this_wp_i18n_["__"])('Personalize my store', 'woocommerce-admin'),
    type: 'wp-admin',
    path: 'customize.php',
    icon: library_brush,
    listItemTag: 'personalize-store'
  }, {
    title: Object(external_this_wp_i18n_["__"])('Shipping settings', 'woocommerce-admin'),
    type: 'wc-settings',
    tab: 'shipping',
    icon: library_shipping,
    listItemTag: 'shipping-settings'
  }, {
    title: Object(external_this_wp_i18n_["__"])('Tax settings', 'woocommerce-admin'),
    type: 'wc-settings',
    tab: 'tax',
    icon: library_percent,
    listItemTag: 'tax-settings'
  }, {
    title: Object(external_this_wp_i18n_["__"])('Payment settings', 'woocommerce-admin'),
    type: 'wc-settings',
    tab: 'checkout',
    icon: library_payment,
    listItemTag: 'payment-settings'
  }, {
    title: Object(external_this_wp_i18n_["__"])('Edit store details', 'woocommerce-admin'),
    type: 'wc-settings',
    tab: 'general',
    icon: library_pencil,
    listItemTag: 'edit-store-details'
  }, {
    title: Object(external_this_wp_i18n_["__"])('Get support', 'woocommerce-admin'),
    type: 'external',
    href: 'https://woocommerce.com/my-account/create-a-ticket/',
    icon: library_lifesaver,
    listItemTag: 'support'
  }, {
    title: Object(external_this_wp_i18n_["__"])('View my store', 'woocommerce-admin'),
    type: 'external',
    href: props.getSetting('siteUrl'),
    icon: external["a" /* default */],
    listItemTag: 'view-store'
  }];
}

function handleOnItemClick(props, event) {
  var a = event.currentTarget;
  var listItemTag = a.dataset.listItemTag;

  if (!listItemTag) {
    return;
  }

  props.recordEvent('home_quick_links_click', {
    task_name: listItemTag
  });

  if (typeof props.onItemClick !== 'function') {
    return;
  }

  if (!props.onItemClick(listItemTag)) {
    event.preventDefault();
    return false;
  }
}

function getLinkTypeAndHref(item) {
  var linkType;
  var href;

  switch (item.type) {
    case 'wc-admin':
      linkType = 'wc-admin';
      href = "admin.php?page=wc-admin&path=%2F".concat(item.path);
      break;

    case 'wp-admin':
      linkType = 'wp-admin';
      href = item.path;
      break;

    case 'wc-settings':
      linkType = 'wp-admin';
      href = "admin.php?page=wc-settings&tab=".concat(item.tab);
      break;

    default:
      linkType = 'external';
      href = item.href;
      break;
  }

  return {
    linkType: linkType,
    href: href
  };
}

function getListItems(props) {
  return getItems(props).map(function (item) {
    return _objectSpread(_objectSpread({
      title: Object(external_this_wp_element_["createElement"])(build_module_text["a" /* default */], {
        as: "div",
        variant: "button"
      }, item.title),
      before: Object(external_this_wp_element_["createElement"])(icon["a" /* default */], {
        icon: item.icon
      }),
      after: Object(external_this_wp_element_["createElement"])(icon["a" /* default */], {
        icon: chevron_right["a" /* default */]
      })
    }, getLinkTypeAndHref(item)), {}, {
      listItemTag: item.listItemTag,
      onClick: Object(external_lodash_["partial"])(handleOnItemClick, props)
    });
  });
}

var quick_links_QuickLinks = function QuickLinks(props) {
  var listItems = getListItems(props);
  return Object(external_this_wp_element_["createElement"])(card["a" /* default */], {
    size: "large",
    className: "woocommerce-quick-links"
  }, Object(external_this_wp_element_["createElement"])(header["a" /* default */], {
    size: "medium"
  }, Object(external_this_wp_element_["createElement"])(build_module_text["a" /* default */], {
    variant: "title.small"
  }, Object(external_this_wp_i18n_["__"])('Store management', 'woocommerce-admin'))), Object(external_this_wp_element_["createElement"])(body["a" /* default */], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["List"], {
    items: listItems,
    className: "woocommerce-quick-links__list"
  })));
};

quick_links_QuickLinks.defaultProps = {
  getSetting: settings["g" /* getSetting */],
  recordEvent: tracks["b" /* recordEvent */]
};
/* harmony default export */ var quick_links = (quick_links_QuickLinks);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(129);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/tab-panel/index.js
var tab_panel = __webpack_require__(725);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var esm_defineProperty = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var esm_objectWithoutProperties = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/card/styles/card-styles.js + 3 modules
var card_styles = __webpack_require__(771);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/card/context.js
var context = __webpack_require__(770);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/card/footer.js





function footer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function footer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { footer_ownKeys(Object(source), true).forEach(function (key) { Object(esm_defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { footer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      additionalProps = Object(esm_objectWithoutProperties["a" /* default */])(props, ["className", "isShady"]);

  var mergedProps = footer_objectSpread({}, defaultProps, {}, Object(context["b" /* useCardContext */])(), {}, props);

  var isBorderless = mergedProps.isBorderless,
      size = mergedProps.size;
  var classes = classnames_default()('components-card__footer', isBorderless && 'is-borderless', isShady && 'is-shady', size && "is-size-".concat(size), className);
  return Object(external_this_wp_element_["createElement"])(card_styles["c" /* FooterUI */], Object(esm_extends["a" /* default */])({}, additionalProps, {
    className: classes
  }));
}
/* harmony default export */ var footer = (CardFooter);
//# sourceMappingURL=footer.js.map
// EXTERNAL MODULE: external {"this":["wc","navigation"]}
var external_this_wc_navigation_ = __webpack_require__(22);

// EXTERNAL MODULE: ./client/homescreen/stats-overview/style.scss
var stats_overview_style = __webpack_require__(891);

// EXTERNAL MODULE: external {"this":["wp","hooks"]}
var external_this_wp_hooks_ = __webpack_require__(48);

// CONCATENATED MODULE: ./client/homescreen/stats-overview/defaults.js
/**
 * External dependencies
 */

var DEFAULT_STATS = Object(external_this_wp_hooks_["applyFilters"])('woocommerce_admin_homepage_default_stats', ['revenue/total_sales', 'revenue/net_revenue', 'orders/orders_count', 'products/items_sold', 'jetpack/stats/visitors', 'jetpack/stats/views']);
var DEFAULT_HIDDEN_STATS = ['revenue/net_revenue', 'products/items_sold'];
// EXTERNAL MODULE: ./client/lib/currency-context.js
var currency_context = __webpack_require__(200);

// EXTERNAL MODULE: ./client/dashboard/store-performance/utils.js
var store_performance_utils = __webpack_require__(774);

// CONCATENATED MODULE: ./client/homescreen/stats-overview/stats-list.js


/**
 * External dependencies
 */



/**
 * WooCommerce dependencies
 */



/**
 * Internal dependencies
 */





var stats_list_StatsList = function StatsList(_ref) {
  var stats = _ref.stats,
      primaryData = _ref.primaryData,
      secondaryData = _ref.secondaryData,
      primaryRequesting = _ref.primaryRequesting,
      secondaryRequesting = _ref.secondaryRequesting,
      primaryError = _ref.primaryError,
      secondaryError = _ref.secondaryError,
      query = _ref.query;

  var _useContext = Object(external_this_wp_element_["useContext"])(currency_context["a" /* CurrencyContext */]),
      formatCurrency = _useContext.formatCurrency,
      getCurrency = _useContext.getCurrency;

  if (primaryError || secondaryError) {
    return null;
  }

  var persistedQuery = Object(external_this_wc_navigation_["getPersistedQuery"])(query);
  var currency = getCurrency();
  return Object(external_this_wp_element_["createElement"])("ul", {
    className: classnames_default()('woocommerce-stats-overview__stats', {
      'is-even': stats.length % 2 === 0
    })
  }, stats.map(function (item) {
    if (primaryRequesting || secondaryRequesting) {
      return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["SummaryNumberPlaceholder"], {
        className: "is-homescreen",
        key: item.stat
      });
    }

    var _getIndicatorValues = Object(store_performance_utils["b" /* getIndicatorValues */])({
      indicator: item,
      primaryData: primaryData,
      secondaryData: secondaryData,
      currency: currency,
      formatCurrency: formatCurrency,
      persistedQuery: persistedQuery
    }),
        primaryValue = _getIndicatorValues.primaryValue,
        secondaryValue = _getIndicatorValues.secondaryValue,
        delta = _getIndicatorValues.delta,
        reportUrl = _getIndicatorValues.reportUrl,
        reportUrlType = _getIndicatorValues.reportUrlType;

    return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["SummaryNumber"], {
      isHomescreen: true,
      key: item.stat,
      href: reportUrl,
      hrefType: reportUrlType,
      label: item.label,
      value: primaryValue,
      prevLabel: Object(external_this_wp_i18n_["__"])('Previous Period:', 'woocommerce-admin'),
      prevValue: secondaryValue,
      delta: delta,
      onLinkClickCallback: function onLinkClickCallback() {
        Object(tracks["b" /* recordEvent */])('statsoverview_indicators_click', {
          key: item.stat
        });
      }
    });
  }));
};
/* harmony default export */ var stats_list = (Object(with_select["a" /* default */])(function (select, _ref2) {
  var stats = _ref2.stats,
      query = _ref2.query;

  if (stats.length === 0) {
    return;
  }

  return Object(store_performance_utils["a" /* getIndicatorData */])(select, stats, query);
})(stats_list_StatsList));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(51);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__(67);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(13);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(18);

// EXTERNAL MODULE: ./client/dashboard/components/connect/index.js
var connect = __webpack_require__(765);

// EXTERNAL MODULE: ./client/lib/notices/index.js
var notices = __webpack_require__(202);

// CONCATENATED MODULE: ./client/homescreen/stats-overview/install-jetpack-cta.js





/**
 * External dependencies
 */






/**
 * WooCommerce dependencies
 */




/**
 * Internal dependencies
 */





function InstallJetpackCta(_ref) {
  var isJetpackInstalled = _ref.isJetpackInstalled,
      isJetpackActivated = _ref.isJetpackActivated,
      isJetpackConnected = _ref.isJetpackConnected,
      installAndActivatePlugins = _ref.installAndActivatePlugins,
      isInstalling = _ref.isInstalling;

  var _useUserPreferences = Object(external_this_wc_data_["useUserPreferences"])(),
      updateUserPreferences = _useUserPreferences.updateUserPreferences,
      userPrefs = objectWithoutProperties_default()(_useUserPreferences, ["updateUserPreferences"]);

  var _useState = Object(external_React_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      isConnecting = _useState2[0],
      setIsConnecting = _useState2[1];

  var _useState3 = Object(external_React_["useState"])((userPrefs.homepage_stats || {}).installJetpackDismissed),
      _useState4 = slicedToArray_default()(_useState3, 2),
      isDismissed = _useState4[0],
      setIsDismissed = _useState4[1];

  function install() {
    return _install.apply(this, arguments);
  }

  function _install() {
    _install = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Object(tracks["b" /* recordEvent */])('statsoverview_install_jetpack');
              installAndActivatePlugins(['jetpack']).then(function () {
                setIsConnecting(!isJetpackConnected);
              }).catch(function (error) {
                Object(notices["a" /* createNoticesFromResponse */])(error);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _install.apply(this, arguments);
  }

  function dismiss() {
    if (isInstalling || isConnecting) {
      return;
    }

    var homepageStats = userPrefs.homepage_stats || {};
    homepageStats.installJetpackDismissed = true;
    updateUserPreferences({
      homepage_stats: homepageStats
    });
    setIsDismissed(true);
    Object(tracks["b" /* recordEvent */])('statsoverview_dismiss_install_jetpack');
  }

  function getConnector() {
    return Object(external_this_wp_element_["createElement"])(connect["a" /* default */], {
      autoConnect: true,
      onError: function onError() {
        return setIsConnecting(false);
      },
      redirectUrl: Object(settings["f" /* getAdminLink */])('admin.php?page=wc-admin')
    });
  }

  var doNotShow = isDismissed || isJetpackInstalled && isJetpackActivated && isJetpackConnected;

  if (doNotShow) {
    return null;
  }

  function getInstallJetpackText() {
    if (!isJetpackInstalled) {
      return Object(external_this_wp_i18n_["__"])('Get Jetpack', 'woocommerce-admin');
    }

    if (!isJetpackActivated) {
      return Object(external_this_wp_i18n_["__"])('Activate Jetpack', 'woocommerce-admin');
    }

    if (!isJetpackConnected) {
      return Object(external_this_wp_i18n_["__"])('Connect Jetpack', 'woocommerce-admin');
    }

    return '';
  }

  return Object(external_this_wp_element_["createElement"])("article", {
    className: "woocommerce-stats-overview__install-jetpack-promo"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-stats-overview__install-jetpack-promo__content"
  }, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["H"], null, Object(external_this_wp_i18n_["__"])('Get traffic stats with Jetpack', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])("p", null, Object(external_this_wp_i18n_["__"])('Keep an eye on your views and visitors metrics with ' + 'Jetpack. Requires Jetpack plugin and a WordPress.com ' + 'account.', 'woocommerce-admin'))), Object(external_this_wp_element_["createElement"])("footer", null, Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
    isSecondary: true,
    onClick: install,
    isBusy: isInstalling
  }, getInstallJetpackText()), Object(external_this_wp_element_["createElement"])(build_module_button["a" /* default */], {
    isTertiary: true,
    onClick: dismiss,
    isBusy: isInstalling
  }, Object(external_this_wp_i18n_["__"])('No thanks', 'woocommerce-admin'))), isConnecting && getConnector());
}

InstallJetpackCta.propTypes = {
  /**
   * Is the Jetpack plugin connected.
   */
  isJetpackConnected: prop_types_default.a.bool.isRequired
};
/* harmony default export */ var install_jetpack_cta = (Object(compose["a" /* default */])(Object(external_this_wp_data_["withSelect"])(function (select) {
  var _select = select(external_this_wc_data_["PLUGINS_STORE_NAME"]),
      isJetpackConnected = _select.isJetpackConnected,
      isPluginsRequesting = _select.isPluginsRequesting,
      getInstalledPlugins = _select.getInstalledPlugins,
      getActivePlugins = _select.getActivePlugins;

  return {
    isInstalling: isPluginsRequesting('installPlugins') || isPluginsRequesting('activatePlugins'),
    isJetpackInstalled: getInstalledPlugins().includes('jetpack'),
    isJetpackActivated: getActivePlugins().includes('jetpack'),
    isJetpackConnected: isJetpackConnected()
  };
}), Object(external_this_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(external_this_wc_data_["PLUGINS_STORE_NAME"]),
      installAndActivatePlugins = _dispatch.installAndActivatePlugins;

  return {
    installAndActivatePlugins: installAndActivatePlugins
  };
}))(InstallJetpackCta));
// CONCATENATED MODULE: ./client/homescreen/stats-overview/index.js



/**
 * External dependencies
 */




/**
 * WooCommerce dependencies
 */





/**
 * Internal dependencies
 */







var _getSetting = Object(settings["g" /* getSetting */])('dataEndpoints', {
  performanceIndicators: []
}),
    performanceIndicators = _getSetting.performanceIndicators;

var stats_overview_stats = performanceIndicators.filter(function (indicator) {
  return DEFAULT_STATS.includes(indicator.stat);
});
var stats_overview_StatsOverview = function StatsOverview() {
  var _useUserPreferences = Object(external_this_wc_data_["useUserPreferences"])(),
      updateUserPreferences = _useUserPreferences.updateUserPreferences,
      userPrefs = objectWithoutProperties_default()(_useUserPreferences, ["updateUserPreferences"]);

  var hiddenStats = Object(external_lodash_["get"])(userPrefs, ['homepage_stats', 'hiddenStats'], DEFAULT_HIDDEN_STATS);

  var toggleStat = function toggleStat(stat) {
    var nextHiddenStats = Object(external_lodash_["xor"])(hiddenStats, [stat]);
    updateUserPreferences({
      homepage_stats: {
        hiddenStats: nextHiddenStats
      }
    });
    Object(tracks["b" /* recordEvent */])('statsoverview_indicators_toggle', {
      indicator_name: stat,
      status: nextHiddenStats.includes(stat) ? 'off' : 'on'
    });
  };

  var activeStats = stats_overview_stats.filter(function (item) {
    return !hiddenStats.includes(item.stat);
  });
  return Object(external_this_wp_element_["createElement"])(card["a" /* default */], {
    size: "large",
    className: "woocommerce-stats-overview woocommerce-homescreen-card"
  }, Object(external_this_wp_element_["createElement"])(header["a" /* default */], {
    size: "medium"
  }, Object(external_this_wp_element_["createElement"])(build_module_text["a" /* default */], {
    variant: "title.small"
  }, Object(external_this_wp_i18n_["__"])('Stats overview', 'woocommerce-admin')), Object(external_this_wp_element_["createElement"])(external_this_wc_components_["EllipsisMenu"], {
    label: Object(external_this_wp_i18n_["__"])('Choose which values to display', 'woocommerce-admin'),
    renderContent: function renderContent() {
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["MenuTitle"], null, Object(external_this_wp_i18n_["__"])('Display stats:', 'woocommerce-admin')), stats_overview_stats.map(function (item) {
        var checked = !hiddenStats.includes(item.stat);
        return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["MenuItem"], {
          checked: checked,
          isCheckbox: true,
          isClickable: true,
          key: item.stat,
          onInvoke: function onInvoke() {
            return toggleStat(item.stat);
          }
        }, item.label);
      }));
    }
  })), Object(external_this_wp_element_["createElement"])(body["a" /* default */], null, Object(external_this_wp_element_["createElement"])(tab_panel["a" /* default */], {
    className: "woocommerce-stats-overview__tabs",
    onSelect: function onSelect(period) {
      Object(tracks["b" /* recordEvent */])('statsoverview_date_picker_update', {
        period: period
      });
    },
    tabs: [{
      title: Object(external_this_wp_i18n_["__"])('Today', 'woocommerce-admin'),
      name: 'today'
    }, {
      title: Object(external_this_wp_i18n_["__"])('Week to date', 'woocommerce-admin'),
      name: 'week'
    }, {
      title: Object(external_this_wp_i18n_["__"])('Month to date', 'woocommerce-admin'),
      name: 'month'
    }]
  }, function (tab) {
    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(install_jetpack_cta, null), Object(external_this_wp_element_["createElement"])(stats_list, {
      query: {
        period: tab.name,
        compare: 'previous_period'
      },
      stats: activeStats
    }));
  })), Object(external_this_wp_element_["createElement"])(footer, null, Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Link"], {
    className: "woocommerce-stats-overview__more-btn",
    href: Object(external_this_wc_navigation_["getNewPath"])({}, '/analytics/overview'),
    type: "wc-admin",
    onClick: function onClick() {
      Object(tracks["b" /* recordEvent */])('statsoverview_indicators_click', {
        key: 'view_detailed_stats'
      });
    }
  }, Object(external_this_wp_i18n_["__"])('View detailed stats'))));
};
/* harmony default export */ var stats_overview = (stats_overview_StatsOverview);
// EXTERNAL MODULE: ./client/homescreen/style.scss
var homescreen_style = __webpack_require__(892);

// EXTERNAL MODULE: ./client/dashboard/style.scss
var dashboard_style = __webpack_require__(769);

// EXTERNAL MODULE: ./client/task-list/style.scss
var task_list_style = __webpack_require__(775);

// CONCATENATED MODULE: ./client/task-list/placeholder.js


/**
 * Internal dependencies
 */


var placeholder_TaskListPlaceholder = function TaskListPlaceholder(props) {
  var _props$numTasks = props.numTasks,
      numTasks = _props$numTasks === void 0 ? 5 : _props$numTasks;
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-task-dashboard__container"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-card woocommerce-task-card is-loading",
    "aria-hidden": true
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-card__header"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-card__title-wrapper"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-card__title woocommerce-card__header-item"
  }, Object(external_this_wp_element_["createElement"])("span", {
    className: "is-placeholder"
  })))), Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-card__body"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "woocommerce-list"
  }, Array.from(new Array(numTasks)).map(function (v, i) {
    return Object(external_this_wp_element_["createElement"])("div", {
      key: i,
      className: "woocommerce-list__item has-action"
    }, Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-list__item-inner"
    }, Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-list__item-before"
    }, Object(external_this_wp_element_["createElement"])("span", {
      className: "is-placeholder"
    })), Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-list__item-text"
    }, Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-list__item-title"
    }, Object(external_this_wp_element_["createElement"])("span", {
      className: "is-placeholder"
    }))), Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-list__item-after"
    }, Object(external_this_wp_element_["createElement"])("span", {
      className: "is-placeholder"
    }))));
  })))));
};

/* harmony default export */ var placeholder = (placeholder_TaskListPlaceholder);
// EXTERNAL MODULE: ./client/header/activity-panel/panels/inbox/index.js + 4 modules
var inbox = __webpack_require__(792);

// CONCATENATED MODULE: ./client/homescreen/layout.js



/**
 * External dependencies
 */




/**
 * WooCommerce dependencies
 */


/**
 * Internal dependencies
 */









var TaskList = Object(external_this_wp_element_["lazy"])(function () {
  return Promise.all(/* import() | task-list */[__webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(6), __webpack_require__.e(45)]).then(__webpack_require__.bind(null, 920));
});
var layout_Layout = function Layout(props) {
  var _useState = Object(external_this_wp_element_["useState"])(true),
      _useState2 = slicedToArray_default()(_useState, 2),
      showInbox = _useState2[0],
      setShowInbox = _useState2[1];

  var _useState3 = Object(external_this_wp_element_["useState"])(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      isContentSticky = _useState4[0],
      setIsContentSticky = _useState4[1];

  var content = Object(external_this_wp_element_["useRef"])(null);

  var maybeStickContent = function maybeStickContent() {
    if (!content.current) {
      return;
    }

    var _content$current$getB = content.current.getBoundingClientRect(),
        bottom = _content$current$getB.bottom;

    var shouldBeSticky = showInbox && bottom < window.innerHeight;
    setIsContentSticky(shouldBeSticky);
  };

  Object(external_this_wp_element_["useEffect"])(function () {
    maybeStickContent();
    window.addEventListener('resize', maybeStickContent);
    return function () {
      window.removeEventListener('resize', maybeStickContent);
    };
  }, []);
  var isUndoRequesting = props.isUndoRequesting,
      query = props.query,
      requestingTaskList = props.requestingTaskList,
      taskListComplete = props.taskListComplete,
      taskListHidden = props.taskListHidden;
  var isTaskListEnabled = taskListHidden === false && !taskListComplete;
  var isDashboardShown = !isTaskListEnabled || !query.task;

  var isInboxPanelEmpty = function isInboxPanelEmpty(isEmpty) {
    setShowInbox(!isEmpty);
  };

  if (isUndoRequesting && !showInbox) {
    setShowInbox(true);
  }

  var renderColumns = function renderColumns() {
    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, showInbox && Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-homescreen-column is-inbox"
    }, Object(external_this_wp_element_["createElement"])(inbox["default"], {
      isPanelEmpty: isInboxPanelEmpty
    })), Object(external_this_wp_element_["createElement"])("div", {
      className: "woocommerce-homescreen-column",
      ref: content,
      style: {
        position: isContentSticky ? 'sticky' : 'static'
      }
    }, isTaskListEnabled && renderTaskList(), Object(external_this_wp_element_["createElement"])(stats_overview, null), !isTaskListEnabled && Object(external_this_wp_element_["createElement"])(quick_links, null)));
  };

  var renderTaskList = function renderTaskList() {
    if (requestingTaskList) {
      return Object(external_this_wp_element_["createElement"])(placeholder, null);
    }

    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Suspense"], {
      fallback: Object(external_this_wp_element_["createElement"])(placeholder, null)
    }, Object(external_this_wp_element_["createElement"])(TaskList, {
      query: query
    }));
  };

  return Object(external_this_wp_element_["createElement"])("div", {
    className: classnames_default()('woocommerce-homescreen', {
      hasInbox: showInbox
    })
  }, isDashboardShown ? renderColumns() : isTaskListEnabled && renderTaskList());
};
layout_Layout.propTypes = {
  /**
   * If the task list option is being fetched.
   */
  requestingTaskList: prop_types_default.a.bool.isRequired,

  /**
   * If the task list has been completed.
   */
  taskListComplete: prop_types_default.a.bool,

  /**
   * If the task list is hidden.
   */
  taskListHidden: prop_types_default.a.bool,

  /**
   * Page query, used to determine the current task if any.
   */
  query: prop_types_default.a.object.isRequired
};
/* harmony default export */ var layout = (Object(compose["a" /* default */])(Object(with_select["a" /* default */])(function (select) {
  var _select = select('wc-api'),
      getUndoDismissRequesting = _select.getUndoDismissRequesting;

  var _getUndoDismissReques = getUndoDismissRequesting(),
      isUndoRequesting = _getUndoDismissReques.isUndoRequesting;

  var _select2 = select(external_this_wc_data_["OPTIONS_STORE_NAME"]),
      getOption = _select2.getOption,
      isResolving = _select2.isResolving;

  if (Object(utils["e" /* isOnboardingEnabled */])()) {
    return {
      isUndoRequesting: isUndoRequesting,
      taskListComplete: getOption('woocommerce_task_list_complete') === 'yes',
      taskListHidden: getOption('woocommerce_task_list_hidden') === 'yes',
      requestingTaskList: isResolving('getOption', ['woocommerce_task_list_complete']) || isResolving('getOption', ['woocommerce_task_list_hidden'])
    };
  }

  return {
    requestingTaskList: false
  };
}))(layout_Layout));
// CONCATENATED MODULE: ./client/homescreen/index.js


/**
 * External dependencies
 */



/**
 * WooCommerce dependencies
 */




/**
 * Internal dependencies
 */



var ProfileWizard = Object(external_this_wp_element_["lazy"])(function () {
  return Promise.all(/* import() | profile-wizard */[__webpack_require__.e(1), __webpack_require__.e(49), __webpack_require__.e(42)]).then(__webpack_require__.bind(null, 909));
});


var homescreen_Homescreen = function Homescreen(_ref) {
  var profileItems = _ref.profileItems,
      query = _ref.query;

  if (Object(utils["e" /* isOnboardingEnabled */])() && !profileItems.completed) {
    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Suspense"], {
      fallback: Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Spinner"], null)
    }, Object(external_this_wp_element_["createElement"])(ProfileWizard, {
      query: query
    }));
  }

  return Object(external_this_wp_element_["createElement"])(layout, {
    query: query
  });
};

/* harmony default export */ var homescreen = __webpack_exports__["default"] = (Object(compose["a" /* default */])(Object(settings["g" /* getSetting */])('onboarding', {}).profile ? Object(external_this_wc_data_["withOnboardingHydration"])(Object(settings["g" /* getSetting */])('onboarding', {}).profile) : external_lodash_["identity"], Object(with_select["a" /* default */])(function (select) {
  if (!Object(utils["e" /* isOnboardingEnabled */])()) {
    return;
  }

  var _select = select(external_this_wc_data_["ONBOARDING_STORE_NAME"]),
      getProfileItems = _select.getProfileItems;

  var profileItems = getProfileItems();
  return {
    profileItems: profileItems
  };
}))(homescreen_Homescreen));

/***/ })

}]);