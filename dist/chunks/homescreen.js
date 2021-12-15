(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[31],{

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getInAppPurchaseUrl; });
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/**
 * External dependencies
 */


/**
 * Returns an in-app-purchase URL.
 *
 * @param {string} url
 * @param {Object} queryArgs
 * @return {string} url with in-app-purchase query parameters
 */

const getInAppPurchaseUrl = (url, queryArgs = {}) => {
  const {
    pathname,
    search
  } = window.location;
  const connectNonce = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_1__[/* getSetting */ "f"])('connectNonce', '');
  queryArgs = {
    'wccom-site': Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_1__[/* getSetting */ "f"])('siteUrl'),
    // If the site is installed in a directory the directory must be included in the back param path.
    'wccom-back': pathname + search,
    'wccom-woo-version': Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_1__[/* getSetting */ "f"])('wcVersion'),
    'wccom-connect-nonce': connectNonce,
    ...queryArgs
  };
  return Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__["addQueryArgs"])(url, queryArgs);
};

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=Object.assign||function(a){for(var c,b=1;b<arguments.length;b++)for(var d in c=arguments[b],c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d]);return a};Object.defineProperty(exports,'__esModule',{value:!0});exports.default=function(a){var b=a.size,c=b===void 0?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,['size','onClick','icon','className']),j=['gridicon','gridicons-star',f,!!function h(k){return 0==k%18}(c)&&'needs-offset',!1,!1].filter(Boolean).join(' ');return _react2.default.createElement('svg',_extends({className:j,height:c,width:c,onClick:d},g,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 2l2.582 6.953L22 9.257l-5.822 4.602L18.18 21 12 16.89 5.82 21l2.002-7.14L2 9.256l7.418-.304'})))};var _react=__webpack_require__(5),_react2=_interopRequireDefault(_react);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){var d={};for(var c in a)0<=b.indexOf(c)||Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}module.exports=exports['default'];


/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
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

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var check = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.3 5.6L9.9 16.9l-4.6-3.4-.9 1.2 5.8 4.3 9.3-12.6z"
}));
/* harmony default export */ __webpack_exports__["a"] = (check);
//# sourceMappingURL=check.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFilteredCurrencyInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyContext; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89);
/* harmony import */ var _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_currency__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/**
 * External dependencies
 */




const appCurrency = _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2___default()(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_3__[/* CURRENCY */ "a"]);
const getFilteredCurrencyInstance = query => {
  const config = appCurrency.getCurrencyConfig();
  const filteredConfig = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])('woocommerce_admin_report_currency', config, query);
  return _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2___default()(filteredConfig);
};
const CurrencyContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createContext"])(appCurrency // default value
);

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ALLOWED_TAGS */
/* unused harmony export ALLOWED_ATTR */
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

const ALLOWED_TAGS = ['a', 'b', 'em', 'i', 'strong', 'p', 'br'];
const ALLOWED_ATTR = ['target', 'href', 'rel', 'name', 'download'];
/* harmony default export */ __webpack_exports__["a"] = (html => {
  return {
    __html: Object(dompurify__WEBPACK_IMPORTED_MODULE_0__["sanitize"])(html, {
      ALLOWED_TAGS,
      ALLOWED_ATTR
    })
  };
});

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ activity_card_ActivityCard; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ placeholder; });

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/gridicons/dist/notice-outline.js
var notice_outline = __webpack_require__(63);
var notice_outline_default = /*#__PURE__*/__webpack_require__.n(notice_outline);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(9);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(21);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(3);

// EXTERNAL MODULE: ./client/header/activity-panel/activity-card/style.scss
var style = __webpack_require__(527);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(4);

// CONCATENATED MODULE: ./client/header/activity-panel/activity-card/placeholder.js


/**
 * External dependencies
 */





class placeholder_ActivityCardPlaceholder extends external_wp_element_["Component"] {
  render() {
    const {
      className,
      hasAction,
      hasDate,
      hasSubtitle,
      lines
    } = this.props;
    const cardClassName = classnames_default()('woocommerce-activity-card is-loading', className);
    return Object(external_wp_element_["createElement"])("div", {
      className: cardClassName,
      "aria-hidden": true
    }, Object(external_wp_element_["createElement"])("span", {
      className: "woocommerce-activity-card__icon"
    }, Object(external_wp_element_["createElement"])("span", {
      className: "is-placeholder"
    })), Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-activity-card__header"
    }, Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-activity-card__title is-placeholder"
    }), hasSubtitle && Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-activity-card__subtitle is-placeholder"
    }), hasDate && Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-activity-card__date"
    }, Object(external_wp_element_["createElement"])("span", {
      className: "is-placeholder"
    }))), Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-activity-card__body"
    }, Object(external_lodash_["range"])(lines).map(i => Object(external_wp_element_["createElement"])("span", {
      className: "is-placeholder",
      key: i
    }))), hasAction && Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-activity-card__actions"
    }, Object(external_wp_element_["createElement"])("span", {
      className: "is-placeholder"
    })));
  }

}

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


/**
 * External dependencies
 */







/**
 * Internal dependencies
 */


/**
 * Determine if the provided string is a date, as
 * formatted by wc_rest_prepare_date_response().
 *
 * @param {string} value String value
 */

const isDateString = value => // PHP date format: Y-m-d\TH:i:s.
/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(value);

class activity_card_ActivityCard extends external_wp_element_["Component"] {
  getCard() {
    const {
      actions,
      className,
      children,
      date,
      icon,
      subtitle,
      title,
      unread
    } = this.props;
    const cardClassName = classnames_default()('woocommerce-activity-card', className);
    const actionsList = Array.isArray(actions) ? actions : [actions];
    const dateString = isDateString(date) ? external_moment_default.a.utc(date).fromNow() : date;
    return Object(external_wp_element_["createElement"])("section", {
      className: cardClassName
    }, unread && Object(external_wp_element_["createElement"])("span", {
      className: "woocommerce-activity-card__unread"
    }), icon && Object(external_wp_element_["createElement"])("span", {
      className: "woocommerce-activity-card__icon",
      "aria-hidden": true
    }, icon), title && Object(external_wp_element_["createElement"])("header", {
      className: "woocommerce-activity-card__header"
    }, Object(external_wp_element_["createElement"])(external_wc_components_["H"], {
      className: "woocommerce-activity-card__title"
    }, title), subtitle && Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-activity-card__subtitle"
    }, subtitle), dateString && Object(external_wp_element_["createElement"])("span", {
      className: "woocommerce-activity-card__date"
    }, dateString)), children && Object(external_wp_element_["createElement"])(external_wc_components_["Section"], {
      className: "woocommerce-activity-card__body"
    }, children), actions && Object(external_wp_element_["createElement"])("footer", {
      className: "woocommerce-activity-card__actions"
    }, actionsList.map((item, i) => Object(external_wp_element_["cloneElement"])(item, {
      key: i
    }))));
  }

  render() {
    const {
      onClick
    } = this.props;

    if (onClick) {
      return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        className: "woocommerce-activity-card__button",
        onClick: onClick
      }, this.getCard());
    }

    return this.getCard();
  }

}

activity_card_ActivityCard.propTypes = {
  actions: prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.element), prop_types_default.a.element]),
  onClick: prop_types_default.a.func,
  className: prop_types_default.a.string,
  children: prop_types_default.a.node,
  date: prop_types_default.a.string,
  icon: prop_types_default.a.node,
  subtitle: prop_types_default.a.node,
  title: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.node]),
  unread: prop_types_default.a.bool
};
activity_card_ActivityCard.defaultProps = {
  icon: Object(external_wp_element_["createElement"])(notice_outline_default.a, {
    size: 48
  }),
  unread: false
};



/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getUrlParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getScreenName; });
/* unused harmony export sift */
/**
 * Get the URL params.
 *
 * @param {string} locationSearch - Querystring part of a URL, including the question mark (?).
 * @return {Object} - URL params.
 */
function getUrlParams(locationSearch) {
  if (locationSearch) {
    return locationSearch.substr(1).split('&').reduce((params, query) => {
      const chunks = query.split('=');
      const key = chunks[0];
      let value = decodeURIComponent(chunks[1]);
      value = isNaN(Number(value)) ? value : Number(value);
      return params[key] = value, params;
    }, {});
  }

  return {};
}
/**
 * Get the current screen name.
 *
 * @return {string} - Screen name.
 */

function getScreenName() {
  let screenName = '';
  const {
    page,
    path,
    post_type: postType
  } = getUrlParams(window.location.search);

  if (page) {
    const currentPage = page === 'wc-admin' ? 'home_screen' : page;
    screenName = path ? path.replace(/\//g, '_').substring(1) : currentPage;
  } else if (postType) {
    screenName = postType;
  }

  return screenName;
}
/**
 * Similar to filter, but return two arrays separated by a partitioner function
 *
 * @param {Array} arr - Original array of values.
 * @param {Function} partitioner - Function to return truthy/falsy values to separate items in array.
 *
 * @return {Array} - Array of two arrays, first including truthy values, and second including falsy.
 */

const sift = (arr, partitioner) => arr.reduce((all, curr) => {
  all[!!partitioner(curr) ? 0 : 1].push(curr);
  return all;
}, [[], []]);

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksPlaceholder; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _placeholder_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(567);
/* harmony import */ var _placeholder_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_placeholder_scss__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Internal dependencies
 */

const TasksPlaceholder = ({
  numTasks = 5,
  query
}) => {
  const isSingleTask = Boolean(query.task);

  if (isSingleTask) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woocommerce-task-dashboard__container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woocommerce-card woocommerce-task-card is-loading",
    "aria-hidden": true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woocommerce-card__header"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woocommerce-card__title-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woocommerce-card__title woocommerce-card__header-item"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "is-placeholder"
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woocommerce-card__body"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woocommerce-list"
  }, Array.from(new Array(numTasks)).map((v, i) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    key: i,
    className: "woocommerce-list__item has-action"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woocommerce-list__item-inner"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woocommerce-list__item-before"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "is-placeholder"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woocommerce-list__item-text"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woocommerce-list__item-title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "is-placeholder"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woocommerce-list__item-after"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "is-placeholder"
  })))))))));
};
/* unused harmony default export */ var _unused_webpack_default_export = (TasksPlaceholder);

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_experimental__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _woocommerce_experimental__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(526);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);


/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



class ActivityHeader extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      className,
      menu,
      subtitle,
      title,
      unreadMessages
    } = this.props;
    const cardClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'woocommerce-layout__inbox-panel-header': subtitle,
      'woocommerce-layout__activity-panel-header': !subtitle
    }, className);
    const countUnread = unreadMessages ? unreadMessages : 0;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: cardClassName
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "woocommerce-layout__inbox-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      size: 16,
      weight: 600,
      color: "#23282d"
    }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      variant: "button",
      weight: "600",
      size: "14",
      lineHeight: "20px"
    }, countUnread > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "woocommerce-layout__inbox-badge"
    }, unreadMessages))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "woocommerce-layout__inbox-subtitle"
    }, subtitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      variant: "body.small",
      size: "14",
      lineHeight: "20px"
    }, subtitle)), menu && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "woocommerce-layout__activity-panel-header-menu"
    }, menu));
  }

}

ActivityHeader.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  unreadMessages: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  menu: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([_woocommerce_components__WEBPACK_IMPORTED_MODULE_4__["EllipsisMenu"]])
  })
};
/* harmony default export */ __webpack_exports__["a"] = (ActivityHeader);

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(173);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(169);
/* harmony import */ var _woocommerce_experimental__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17);
/* harmony import */ var _woocommerce_experimental__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _header_activity_panel_activity_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(515);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(164);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(520);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(529);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_12__);


/**
 * External dependencies
 */








/**
 * Internal dependencies
 */






const renderEmptyCard = () => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_header_activity_panel_activity_card__WEBPACK_IMPORTED_MODULE_9__[/* ActivityCard */ "a"], {
  className: "woocommerce-empty-activity-card",
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Your inbox is empty', 'woocommerce-admin'),
  icon: false
}, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('As things begin to happen in your store your inbox will start to fill up. ' + "You'll see things like achievements, new feature announcements, extension recommendations and more!", 'woocommerce-admin'));

const onBodyLinkClick = (note, innerLink) => {
  Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_5__["recordEvent"])('inbox_action_click', {
    note_name: note.name,
    note_title: note.title,
    note_content_inner_link: innerLink
  });
};

const renderNotes = ({
  hasNotes,
  isBatchUpdating,
  lastRead,
  notes,
  onDismiss,
  onNoteActionClick
}) => {
  if (isBatchUpdating) {
    return;
  }

  if (!hasNotes) {
    return renderEmptyCard();
  }

  const screen = Object(_utils__WEBPACK_IMPORTED_MODULE_11__[/* getScreenName */ "a"])();

  const onNoteVisible = note => {
    Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_5__["recordEvent"])('inbox_note_view', {
      note_content: note.content,
      note_name: note.name,
      note_title: note.title,
      note_type: note.type,
      screen
    });
  };

  const notesArray = Object.keys(notes).map(key => notes[key]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_transition_group__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    role: "menu"
  }, notesArray.map(note => {
    const {
      id: noteId,
      is_deleted: isDeleted
    } = note;

    if (isDeleted) {
      return null;
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_transition_group__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      key: noteId,
      timeout: 500,
      classNames: "woocommerce-inbox-message"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_8__["InboxNoteCard"], {
      key: noteId,
      note: note,
      lastRead: lastRead,
      onDismiss: onDismiss,
      onNoteActionClick: onNoteActionClick,
      onBodyLinkClick: onBodyLinkClick,
      onNoteVisible: onNoteVisible
    }));
  }));
};

const INBOX_QUERY = {
  page: 1,
  per_page: _woocommerce_data__WEBPACK_IMPORTED_MODULE_3__["QUERY_DEFAULTS"].pageSize,
  status: 'unactioned',
  type: _woocommerce_data__WEBPACK_IMPORTED_MODULE_3__["QUERY_DEFAULTS"].noteTypes,
  orderby: 'date',
  order: 'desc',
  _fields: ['id', 'name', 'title', 'content', 'type', 'status', 'actions', 'date_created', 'date_created_gmt', 'layout', 'image', 'is_deleted']
};

const InboxPanel = () => {
  const {
    createNotice
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])('core/notices');
  const {
    batchUpdateNotes,
    removeAllNotes,
    removeNote,
    updateNote,
    triggerNoteAction
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])(_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__["NOTES_STORE_NAME"]);
  const {
    isError,
    isResolvingNotes,
    isBatchUpdating,
    notes
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(select => {
    const {
      getNotes,
      getNotesError,
      isResolving,
      isNotesRequesting
    } = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__["NOTES_STORE_NAME"]);
    return {
      notes: getNotes(INBOX_QUERY),
      isError: Boolean(getNotesError('getNotes', [INBOX_QUERY])),
      isResolvingNotes: isResolving('getNotes', [INBOX_QUERY]),
      isBatchUpdating: isNotesRequesting('batchUpdateNotes')
    };
  });
  const {
    updateUserPreferences,
    ...userPrefs
  } = Object(_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__["useUserPreferences"])();
  const [lastRead] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(userPrefs.activity_panel_inbox_last_read);
  const [dismiss, setDismiss] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const mountTime = Date.now();
    const userDataFields = {
      activity_panel_inbox_last_read: mountTime
    };
    updateUserPreferences(userDataFields);
  }, []);

  const onDismiss = (note, type) => {
    setDismiss({
      note,
      type
    });
  };

  const closeDismissModal = async (confirmed = false) => {
    const noteNameDismissAll = dismiss.type === 'all' ? true : false;
    const screen = Object(_utils__WEBPACK_IMPORTED_MODULE_11__[/* getScreenName */ "a"])();
    Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_5__["recordEvent"])('inbox_action_dismiss', {
      note_name: dismiss.note.name,
      note_title: dismiss.note.title,
      note_name_dismiss_all: noteNameDismissAll,
      note_name_dismiss_confirmation: confirmed,
      screen
    });

    if (confirmed) {
      const noteId = dismiss.note.id;
      const removeAll = !noteId || noteNameDismissAll;

      try {
        let notesRemoved = [];

        if (removeAll) {
          notesRemoved = await removeAllNotes({
            status: INBOX_QUERY.status
          });
        } else {
          const noteRemoved = await removeNote(noteId);
          notesRemoved = [noteRemoved];
        }

        setDismiss(undefined);
        createNotice('success', notesRemoved.length > 1 ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('All messages dismissed', 'woocommerce-admin') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Message dismissed', 'woocommerce-admin'), {
          actions: [{
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Undo', 'woocommerce-admin'),
            onClick: () => {
              if (notesRemoved.length > 1) {
                batchUpdateNotes(notesRemoved.map(note => note.id), {
                  is_deleted: 0
                });
              } else {
                updateNote(noteId, {
                  is_deleted: 0
                });
              }
            }
          }]
        });
      } catch (e) {
        const numberOfNotes = removeAll ? notes.length : 1;
        createNotice('error', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_n"])('Message could not be dismissed', 'Messages could not be dismissed', numberOfNotes, 'woocommerce-admin'));
        setDismiss(undefined);
      }
    } else {
      setDismiss(undefined);
    }
  };

  const onNoteActionClick = (note, action) => {
    triggerNoteAction(note.id, action.id);
  };

  if (isError) {
    const title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('There was an error getting your inbox. Please try again.', 'woocommerce-admin');

    const actionLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Reload', 'woocommerce-admin');

    const actionCallback = () => {
      // @todo Add tracking for how often an error is displayed, and the reload action is clicked.
      window.location.reload();
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_2__["EmptyContent"], {
      title: title,
      actionLabel: actionLabel,
      actionURL: null,
      actionCallback: actionCallback
    });
  }

  const hasNotes = Object(_utils__WEBPACK_IMPORTED_MODULE_10__[/* hasValidNotes */ "b"])(notes); // @todo After having a pagination implemented we should call the method "getNotes" with a different query since
  // the current one is only getting 25 notes and the count of unread notes only will refer to this 25 and not all the existing ones.

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woocommerce-homepage-notes-wrapper"
  }, (isResolvingNotes || isBatchUpdating) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_2__["Section"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_8__["InboxNotePlaceholder"], {
    className: "banner message-is-unread"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_2__["Section"], null, !isResolvingNotes && !isBatchUpdating && renderNotes({
    hasNotes,
    isBatchUpdating,
    lastRead,
    notes,
    onDismiss,
    onNoteActionClick
  })), dismiss && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_8__["InboxDismissConfirmationModal"], {
    onClose: closeDismissModal,
    onDismiss: () => closeDismissModal(true)
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (InboxPanel);

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getIndicatorValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIndicatorData; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(120);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_number__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/**
 * External dependencies
 */








function getReportUrl(href, persistedQuery, primaryItem) {
  if (!href) {
    return '';
  }

  if (href === '/jetpack') {
    return Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_6__[/* getAdminLink */ "e"])('admin.php?page=jetpack#/dashboard');
  }

  return Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__["getNewPath"])(persistedQuery, href, {
    chart: primaryItem.chart
  });
}

const getIndicatorValues = ({
  indicator,
  primaryData,
  secondaryData,
  currency,
  formatAmount,
  persistedQuery
}) => {
  const primaryItem = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(primaryData.data, data => data.stat === indicator.stat);
  const secondaryItem = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(secondaryData.data, data => data.stat === indicator.stat);

  if (!primaryItem || !secondaryItem) {
    return {};
  }

  const href = primaryItem._links && primaryItem._links.report[0] && primaryItem._links.report[0].href || '';
  const reportUrl = getReportUrl(href, persistedQuery, primaryItem);
  const reportUrlType = href === '/jetpack' ? 'wp-admin' : 'wc-admin';
  const isCurrency = primaryItem.format === 'currency';
  const delta = Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_5__["calculateDelta"])(primaryItem.value, secondaryItem.value);
  const primaryValue = isCurrency ? formatAmount(primaryItem.value) : Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_5__["formatValue"])(currency, primaryItem.format, primaryItem.value);
  const secondaryValue = isCurrency ? formatAmount(secondaryItem.value) : Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_5__["formatValue"])(currency, secondaryItem.format, secondaryItem.value);
  return {
    primaryValue,
    secondaryValue,
    delta,
    reportUrl,
    reportUrlType
  };
};
const getIndicatorData = (select, indicators, query, filters) => {
  const {
    getReportItems,
    getReportItemsError,
    isResolving
  } = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__["REPORTS_STORE_NAME"]);
  const {
    woocommerce_default_date_range: defaultDateRange
  } = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings');
  const datesFromQuery = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__["getCurrentDates"])(query, defaultDateRange);
  const endPrimary = datesFromQuery.primary.before;
  const endSecondary = datesFromQuery.secondary.before;
  const statKeys = indicators.map(indicator => indicator.stat).join(',');
  const filterQuery = Object(_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__["getFilterQuery"])({
    filters,
    query
  });
  const primaryQuery = { ...filterQuery,
    after: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__["appendTimestamp"])(datesFromQuery.primary.after, 'start'),
    before: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__["appendTimestamp"])(endPrimary, endPrimary.isSame(moment__WEBPACK_IMPORTED_MODULE_0___default()(), 'day') ? 'now' : 'end'),
    stats: statKeys
  };
  const secondaryQuery = { ...filterQuery,
    after: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__["appendTimestamp"])(datesFromQuery.secondary.after, 'start'),
    before: Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__["appendTimestamp"])(endSecondary, endSecondary.isSame(moment__WEBPACK_IMPORTED_MODULE_0___default()(), 'day') ? 'now' : 'end'),
    stats: statKeys
  };
  const primaryData = getReportItems('performance-indicators', primaryQuery);
  const primaryError = getReportItemsError('performance-indicators', primaryQuery) || null;
  const primaryRequesting = isResolving('getReportItems', ['performance-indicators', primaryQuery]);
  const secondaryData = getReportItems('performance-indicators', secondaryQuery);
  const secondaryError = getReportItemsError('performance-indicators', secondaryQuery) || null;
  const secondaryRequesting = isResolving('getReportItems', ['performance-indicators', secondaryQuery]);
  return {
    primaryData,
    primaryError,
    primaryRequesting,
    secondaryData,
    secondaryError,
    secondaryRequesting,
    defaultDateRange
  };
};

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _woocommerce_onboarding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(273);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);


/**
 * External dependencies
 */





const Task = ({
  query,
  task
}) => {
  const id = query.task;
  const {
    invalidateResolutionForStoreSelector,
    optimisticallyCompleteTask
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])(_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__["ONBOARDING_STORE_NAME"]);
  const onComplete = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    optimisticallyCompleteTask(id);
    Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_2__["getHistory"])().push(Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_2__["getNewPath"])({}, '/', {}));
    invalidateResolutionForStoreSelector('getTaskLists');
  }, [id]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_onboarding__WEBPACK_IMPORTED_MODULE_1__["WooOnboardingTask"].Slot, {
    id: id,
    fillProps: {
      onComplete,
      query,
      task
    }
  });
};

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return validateStoreAddress; });
/* unused harmony export getCountryStateOptions */
/* unused harmony export useGetCountryStateAutofill */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreAddress; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_6__);



/**
 * External dependencies
 */






const {
  countries
} = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_5__[/* getSetting */ "f"])('dataEndpoints', {
  countries: {}
});
/**
 * Form validation.
 *
 * @param {Object} values Keyed values of all fields in the form.
 * @return {Object} Key value of fields and error messages, { myField: 'This field is required' }
 */

function validateStoreAddress(values) {
  const errors = {};

  if (!values.addressLine1.trim().length) {
    errors.addressLine1 = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Please add an address', 'woocommerce-admin');
  }

  if (!values.countryState.trim().length) {
    errors.countryState = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Please select a country / region', 'woocommerce-admin');
  }

  if (!values.city.trim().length) {
    errors.city = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Please add a city', 'woocommerce-admin');
  }

  if (!values.postCode.trim().length) {
    errors.postCode = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Please add a post code', 'woocommerce-admin');
  }

  return errors;
}
/**
 * Get all country and state combinations used for select dropdowns.
 *
 * @return {Object} Select options, { value: 'US:GA', label: 'United States - Georgia' }
 */

function getCountryStateOptions() {
  const countryStateOptions = countries.reduce((acc, country) => {
    if (!country.states.length) {
      acc.push({
        key: country.code,
        label: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__["decodeEntities"])(country.name)
      });
      return acc;
    }

    const countryStates = country.states.map(state => {
      return {
        key: country.code + ':' + state.code,
        label: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__["decodeEntities"])(country.name) + ' — ' + Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__["decodeEntities"])(state.name)
      };
    });
    acc.push(...countryStates);
    return acc;
  }, []);
  return countryStateOptions;
}
/**
 * Get the autofill countryState fields and set value from filtered options.
 *
 * @param {Array} options Array of filterable options.
 * @param {string} countryState The value of the countryState field.
 * @param {Function} setValue Set value of the countryState input.
 * @return {Object} React component.
 */

function useGetCountryStateAutofill(options, countryState, setValue) {
  const [autofillCountry, setAutofillCountry] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const [autofillState, setAutofillState] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const isAutofillChange = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const option = options.find(opt => opt.key === countryState);
    const labels = option ? option.label.split(/\u2013|\u2014|\-/) : [];
    const newCountry = (labels[0] || '').trim();
    const newState = (labels[1] || '').trim();

    if (!isAutofillChange.current && (newCountry !== autofillCountry || newState !== autofillState)) {
      setAutofillCountry(newCountry);
      setAutofillState(newState);
    }

    isAutofillChange.current = false;
  }, [countryState]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!autofillCountry && !autofillState && countryState) {
      // Clear form.
      isAutofillChange.current = true;
      setValue('countryState', '');
    }

    let filteredOptions = [];
    const countrySearch = new RegExp(Object(lodash__WEBPACK_IMPORTED_MODULE_4__["escapeRegExp"])(autofillCountry), 'i');
    const stateSearch = new RegExp(Object(lodash__WEBPACK_IMPORTED_MODULE_4__["escapeRegExp"])(autofillState.replace(/\s/g, '')) + '$', // Always match the end of string for region.
    'i');

    if (autofillState.length || autofillCountry.length) {
      filteredOptions = options.filter(option => (autofillCountry.length ? countrySearch : stateSearch).test(option.label));
    }

    if (autofillCountry.length && autofillState.length) {
      const isStateAbbreviation = autofillState.length < 3;
      filteredOptions = filteredOptions.filter(option => stateSearch.test((isStateAbbreviation ? option.key : option.label).replace('-', '').replace(/\s/g, '')));
      const isCountryAbbreviation = autofillCountry.length < 3;

      if (filteredOptions.length > 1) {
        let countryKeyOptions = [];
        countryKeyOptions = filteredOptions.filter(option => countrySearch.test(isCountryAbbreviation ? option.key : option.label));

        if (countryKeyOptions.length > 0) {
          filteredOptions = countryKeyOptions;
        }
      }

      if (filteredOptions.length > 1) {
        let stateKeyOptions = [];
        stateKeyOptions = filteredOptions.filter(option => stateSearch.test((isStateAbbreviation ? option.key : option.label).replace('-', '').replace(/\s/g, '')));

        if (stateKeyOptions.length === 1) {
          filteredOptions = stateKeyOptions;
        }
      }
    }

    if (filteredOptions.length === 1 && countryState !== filteredOptions[0].key) {
      isAutofillChange.current = true;
      setValue('countryState', filteredOptions[0].key);
    }
  }, [autofillCountry, autofillState, options, setValue]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    onChange: event => setAutofillCountry(event.target.value),
    value: autofillCountry,
    name: "country",
    type: "text",
    className: "woocommerce-select-control__autofill-input",
    tabIndex: "-1",
    autoComplete: "country"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    onChange: event => setAutofillState(event.target.value),
    value: autofillState,
    name: "state",
    type: "text",
    className: "woocommerce-select-control__autofill-input",
    tabIndex: "-1",
    autoComplete: "address-level1"
  }));
}
/**
 * Store address fields.
 *
 * @param {Object} props Props for input components.
 * @return {Object} -
 */

function StoreAddress(props) {
  const {
    getInputProps,
    setValue
  } = props;
  const countryStateOptions = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => getCountryStateOptions(), []);
  const countryStateAutofill = useGetCountryStateAutofill(countryStateOptions, getInputProps('countryState').value, setValue);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "woocommerce-store-address-fields"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Address line 1', 'woocommerce-admin'),
    required: true,
    autoComplete: "address-line1"
  }, getInputProps('addressLine1'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Address line 2 (optional)', 'woocommerce-admin'),
    required: true,
    autoComplete: "address-line2"
  }, getInputProps('addressLine2'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Country / Region', 'woocommerce-admin'),
    required: true,
    autoComplete: "new-password" // disable autocomplete and autofill
    ,
    options: countryStateOptions,
    excludeSelectedOptions: false,
    showAllOnFocus: true,
    isSearchable: true
  }, getInputProps('countryState'), {
    controlClassName: getInputProps('countryState').className
  }), countryStateAutofill), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('City', 'woocommerce-admin'),
    required: true
  }, getInputProps('city'), {
    autoComplete: "address-level2"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Post code', 'woocommerce-admin'),
    required: true,
    autoComplete: "postal-code"
  }, getInputProps('postCode'))));
}

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ TaskList; });

// UNUSED EXPORTS: prefixEvent

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(36);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(3);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(7);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(21);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(11);

// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(16);

// EXTERNAL MODULE: external ["wc","experimental"]
var external_wc_experimental_ = __webpack_require__(17);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(12);

// EXTERNAL MODULE: ./packages/onboarding/build-module/index.js + 26 modules
var build_module = __webpack_require__(273);

// EXTERNAL MODULE: ./client/tasks/task-list.scss
var task_list = __webpack_require__(521);

// CONCATENATED MODULE: ./client/tasks/task-list-item.tsx



/**
 * External dependencies
 */








/**
 * Internal dependencies
 */


const TaskListItem = ({
  isExpandable = false,
  isExpanded = false,
  setExpandedTask,
  task
}) => {
  var _slot$fills;

  const {
    createNotice
  } = Object(external_wp_data_["useDispatch"])('core/notices');
  const {
    dismissTask,
    snoozeTask,
    undoDismissTask,
    undoSnoozeTask
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["ONBOARDING_STORE_NAME"]);
  const userPreferences = Object(external_wc_data_["useUserPreferences"])();
  const {
    actionLabel,
    actionUrl,
    content,
    id,
    isComplete,
    isDismissable,
    isSnoozeable,
    time,
    title,
    level,
    additionalInfo
  } = task;
  const slot = Object(external_wc_experimental_["useSlot"])(`woocommerce_onboarding_task_list_item_${id}`);
  const hasFills = Boolean(slot === null || slot === void 0 ? void 0 : (_slot$fills = slot.fills) === null || _slot$fills === void 0 ? void 0 : _slot$fills.length);
  const onDismiss = Object(external_wp_element_["useCallback"])(() => {
    dismissTask(id);
    createNotice('success', Object(external_wp_i18n_["__"])('Task dismissed'), {
      actions: [{
        label: Object(external_wp_i18n_["__"])('Undo', 'woocommerce-admin'),
        onClick: () => undoDismissTask(id)
      }]
    });
  }, [id]);
  const onSnooze = Object(external_wp_element_["useCallback"])(() => {
    snoozeTask(id);
    createNotice('success', Object(external_wp_i18n_["__"])('Task postponed until tomorrow', 'woocommerce-admin'), {
      actions: [{
        label: Object(external_wp_i18n_["__"])('Undo', 'woocommerce-admin'),
        onClick: () => undoSnoozeTask(id)
      }]
    });
  }, [id]);

  const getTaskStartedCount = () => {
    const trackedStartedTasks = userPreferences.task_list_tracked_started_tasks;

    if (!trackedStartedTasks || !trackedStartedTasks[id]) {
      return 0;
    }

    return trackedStartedTasks[id];
  }; // @todo This would be better as a task endpoint that handles updating the count.


  const updateTrackStartedCount = () => {
    const newCount = getTaskStartedCount() + 1;
    const trackedStartedTasks = userPreferences.task_list_tracked_started_tasks || {};
    userPreferences.updateUserPreferences({
      task_list_tracked_started_tasks: { ...(trackedStartedTasks || {}),
        [id]: newCount
      }
    });
  };

  const trackClick = () => {
    Object(external_wc_tracks_["recordEvent"])('tasklist_click', {
      task_name: id
    });

    if (!isComplete) {
      updateTrackStartedCount();
    }
  };

  const onClickDefault = Object(external_wp_element_["useCallback"])(() => {
    if (actionUrl) {
      if (actionUrl.startsWith('http')) {
        window.location.href = actionUrl;
      } else {
        Object(external_wc_navigation_["getHistory"])().push(Object(external_wc_navigation_["getNewPath"])({}, actionUrl, {}));
      }

      return;
    }

    window.document.documentElement.scrollTop = 0;
    Object(external_wc_navigation_["updateQueryString"])({
      task: id
    });
  }, [id, isComplete, actionUrl]);
  const taskItemProps = {
    expandable: isExpandable,
    expanded: isExpandable && isExpanded,
    completed: isComplete,
    onSnooze: isSnoozeable && onSnooze,
    onDismiss: isDismissable && onDismiss
  };
  const DefaultTaskItem = Object(external_wp_element_["useCallback"])(props => {
    const onClickActions = () => {
      trackClick();

      if (props.onClick) {
        return props.onClick();
      }

      return onClickDefault();
    };

    return Object(external_wp_element_["createElement"])(external_wc_experimental_["TaskItem"], extends_default()({
      key: id,
      title: title,
      content: content,
      additionalInfo: additionalInfo,
      time: time,
      action: onClickActions,
      level: level,
      actionLabel: actionLabel
    }, taskItemProps, props, {
      onClick: !isExpandable || isComplete ? onClickActions : () => setExpandedTask(id)
    }));
  }, [id, title, content, time, actionLabel, isExpandable, isComplete]);
  return hasFills ? Object(external_wp_element_["createElement"])(build_module["WooOnboardingTaskListItem"].Slot, {
    id: id,
    fillProps: {
      defaultTaskItem: DefaultTaskItem,
      isComplete,
      ...taskItemProps
    }
  }) : Object(external_wp_element_["createElement"])(DefaultTaskItem, {
    onClick: task.onClick
  });
};
// CONCATENATED MODULE: ./client/tasks/task-list-menu.tsx


/**
 * External dependencies
 */





const TaskListMenu = ({
  id
}) => {
  const {
    hideTaskList
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["ONBOARDING_STORE_NAME"]);
  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-card__menu woocommerce-card__header-item"
  }, Object(external_wp_element_["createElement"])(external_wc_components_["EllipsisMenu"], {
    label: Object(external_wp_i18n_["__"])('Task List Options', 'woocommerce-admin'),
    renderContent: () => Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-task-card__section-controls"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      onClick: () => hideTaskList(id)
    }, Object(external_wp_i18n_["__"])('Hide this', 'woocommerce-admin')))
  }));
};
// CONCATENATED MODULE: ./client/tasks/task-list.tsx



/**
 * External dependencies
 */








/**
 * Internal dependencies
 */




const prefixEvent = (id, eventName) => {
  // This helps retain backwards compatibility with the old event naming.
  if (id === 'setup') {
    return `tasklist_${eventName}`;
  }

  return `${id}_tasklist_${eventName}`;
};
const TaskList = ({
  id,
  tasks,
  title: listTitle,
  isCollapsible = false,
  isExpandable = false,
  query
}) => {
  var _incompleteTasks$;

  const {
    profileItems
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getProfileItems
    } = select(external_wc_data_["ONBOARDING_STORE_NAME"]);
    return {
      profileItems: getProfileItems()
    };
  });
  const prevQueryRef = Object(external_wp_element_["useRef"])(query);
  const nowTimestamp = Date.now();
  const visibleTasks = tasks.filter(task => !task.isDismissed && (!task.isSnoozed || task.snoozedUntil < nowTimestamp));
  const incompleteTasks = tasks.filter(task => !task.isComplete && !task.isDismissed);
  const [expandedTask, setExpandedTask] = Object(external_wp_element_["useState"])((_incompleteTasks$ = incompleteTasks[0]) === null || _incompleteTasks$ === void 0 ? void 0 : _incompleteTasks$.id);

  const recordTaskListView = () => {
    Object(external_wc_tracks_["recordEvent"])(prefixEvent(id, 'view'), {
      number_tasks: visibleTasks.length,
      store_connected: profileItems.wccom_connected
    });
  };

  Object(external_wp_element_["useEffect"])(() => {
    recordTaskListView();
  }, []);
  Object(external_wp_element_["useEffect"])(() => {
    const {
      task: prevTask
    } = prevQueryRef.current;
    const {
      task
    } = query;

    if (prevTask !== task) {
      window.document.documentElement.scrollTop = 0;
      prevQueryRef.current = query;
    }
  }, [query]);

  if (!visibleTasks.length) {
    return Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-task-dashboard__container"
    });
  }

  const expandLabel = Object(external_wp_i18n_["sprintf"])(
  /* translators: %d = number of hidden tasks */
  Object(external_wp_i18n_["_n"])('Show %d more task.', 'Show %d more tasks.', visibleTasks.length - 2, 'woocommerce-admin'), visibleTasks.length - 2);

  const collapseLabel = Object(external_wp_i18n_["__"])('Show less', 'woocommerce-admin');

  const ListComp = isCollapsible ? external_wc_experimental_["CollapsibleList"] : external_wc_experimental_["List"];
  const listProps = isCollapsible ? {
    collapseLabel,
    expandLabel,
    show: 2,
    onCollapse: () => Object(external_wc_tracks_["recordEvent"])(prefixEvent(id, 'collapse'), {}),
    onExpand: () => Object(external_wc_tracks_["recordEvent"])(prefixEvent(id, 'expand'), {})
  } : {};
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-task-dashboard__container"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
    size: "large",
    className: "woocommerce-task-card woocommerce-homescreen-card"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardHeader"], {
    size: "medium"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "wooocommerce-task-card__header"
  }, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    size: "20",
    lineHeight: "28px",
    variant: "title.small"
  }, listTitle), Object(external_wp_element_["createElement"])(external_wc_components_["Badge"], {
    count: incompleteTasks.length
  })), Object(external_wp_element_["createElement"])(TaskListMenu, {
    id: id
  })), Object(external_wp_element_["createElement"])(ListComp, extends_default()({
    animation: "custom"
  }, listProps), visibleTasks.map(task => Object(external_wp_element_["createElement"])(TaskListItem, {
    key: task.id,
    isExpanded: expandedTask === task.id,
    isExpandable: isExpandable,
    task: task,
    setExpandedTask: setExpandedTask
  }))))));
};

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=Object.assign||function(a){for(var c,b=1;b<arguments.length;b++)for(var d in c=arguments[b],c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d]);return a};Object.defineProperty(exports,'__esModule',{value:!0});exports.default=function(a){var b=a.size,c=b===void 0?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,['size','onClick','icon','className']),j=['gridicon','gridicons-star-outline',f,!!function h(k){return 0==k%18}(c)&&'needs-offset',!1,!1].filter(Boolean).join(' ');return _react2.default.createElement('svg',_extends({className:j,height:c,width:c,onClick:d},g,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 6.308l1.176 3.167.347.936.997.042 3.374.14-2.647 2.09-.784.62.27.963.91 3.25-2.813-1.872-.83-.553-.83.552-2.814 1.87.91-3.248.27-.962-.783-.62-2.648-2.092 3.374-.14.996-.04.347-.936L12 6.308M12 2L9.418 8.953 2 9.257l5.822 4.602L5.82 21 12 16.89 18.18 21l-2.002-7.14L22 9.256l-7.418-.305L12 2z'})))};var _react=__webpack_require__(5),_react2=_interopRequireDefault(_react);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){var d={};for(var c in a)0<=b.indexOf(c)||Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}module.exports=exports['default'];


/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 560:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAd4AAAIMCAYAAABbgM16AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAADyySURBVHgB7d17tOV1Xf/x7xjJKDEjFWAqxxuoBKwQRg3H9UOGftVMmsIKA8skWQhlLfFG/ZFcpD8KL+AqC0Jg7JeCaYJZQ/WLAdcKER1MFygaJMQIcmkpM0RC/TrzO88vvA+f85nvZe9z+Zx99n4+1tprzpzzve3v2ef7+n6u31VTU1O7KkmSVML0UypJklSMwStJUkEGryRJBRm8kiQVZPBKklSQwStJUkEGryRJBRm8kiQVZPBKklSQwStJUkEGryRJBRm8kiQVZPBKklSQwStJUkEGryRJBRm8kiQVZPBKklSQwStJUkEGryRJBRm8kiQVZPBKklSQwStJUkEGryRJBRm8kiQVZPBKklSQwStJUkEGryRJBRm8kiQVZPBKklTQHtWYWbNmTfXTP/3T1XOe85zqkEMOqX7yJ3+y/h7/T33nO9+pXzt37qy+/vWvV1/84herb3zjG/X/JUlaKqumpqZ2VSscwXrKKafUgctrIQjgT33qU/W/BLMkSYtoekUHLyH7jne8Y8Fh2+Yf/uEfqksvvbQOYUmSFsHKDN5BApfSKlXH27dvn61STkX18wEHHFBXR+dV0fm23vWudxnAkqSFWlnBSzh+8IMfbAxcgpWgnW81Mdtmuz/3cz9X/ezP/mzjMp/+9KerCy64wCpoSdJ8rZzgPeGEE6qzzjqrLqmmCEHC9rLLLlu0jlERwpSqmzplEb6EsCRJQ1oZwXv22WdXb3nLW+Z8r1QA/tIv/VJjABP05557biVJ0hBGO3gp3X7yk5+s22BTdHi68MILiw79OeOMM+oATlG1/cu//MsOQZIkDWp0g5cSJqGbljSXu5NT2zERvrb7SpIGMJrBS0n3mmuumRNwo1K65JguueSSOaVwQnfjxo2WfCVJfaZHcsrIvFRJ56lRCDaOibbmfHhShLEkSX1+aO3atedUI4SOVOlwHkL33e9+d7Xc6FXNDcERRxxRvfCFL6z23HPPOT8nfGfOZfX5z3++kiSpxa6RCl56EP/u7/7u7P+pXn7zm99cLbdo2+3z0pe+tLrnnnvq45YkqcGukalqJtzSXsNU55566qnVKKBH86AYa9w1C5YkabKNzNOJCLc0sObTU5j1KTXT/sorXT/9ms5bTS/GBDftk2klB8V2qC4flZsGSdJoGYngZZYo2lADoZmPmUUEM/+yDBNYpEOLCO90O8MiYBmutFC0UfOenNtZkpQbieBl/uUUpUZKrn0I2TTchimZNmmrIuZBC8M+AYkbB0rtkiSllr2NNx5aPx87duyY8/8bb7yxWoi///u/b/z+oNNSpkOMFuPZwJKk8bPsE2j82Z/9Wf1EoEHwfFzCjRIo/xKI+dheJraINltK0vlDFXKUmL/+9a/X2+6qGqZXc1+QcjzsPybXYHuWeiVJiellrWqmpJuGLsNw8nmZU5RoeThBl3QoD2OATznllM7lCd33ve99VR8eyNA3pIj3wz7pXAWCmuB3RitJUljWqua0BBlzHneF1KAl40Apts+gnbEovQ6yvbwUPkhbtRbXvvvuW99MUeNhjYOkUbOswZuGHsEWD7NvM2y7KdvsG5JEiXTQbdLjuevGIEq3aVvxsDcLS+UVr3hFdcwxx8y+nv70pxdZdzm89rWvrQ499NDq+c9/fv0ZG/XjlTRZlq2qOQ+8CKu+Kt1hh+lQ9ds0NCmV945uQ6jySMK27UUos624qRiV6uZf+IVfqMMo7LXXXtXf/M3f9K73Iz/yI9Vv/dZv1ctjenq6rp7/z//8z2pUPfLII50/f/pMEBPKgfcjSaUsW4k3b8uN4KPE2xVSfW22ub42YTDutq8TVhgkoPMq6VHs3fzyl798oOVe9rKXzYbuSsENxXXXXVd96Utfqs4///zdbhKYa/u8886rX29729sqSSpp2YI3DaM0bPmXUmqbYaqGY3t9YTnouGF0VV/H8KZ81qxRnEKS0u8hhxzSucyqVauq17zmNdVKQ4n3j/7oj6o/+IM/qMNXkkbJSJR4GR6U6uvENGypt218bmqYtti2qsm0fTpdpi/glktfqD7vec+bUyW73Kgi3m+//erXOO4/tv/0IdukF+O4+taf77HFdp9uO7s0a9naeHmEXsg7VEWpsq2kOGy7KT2NaZftqk4eZpttJd70faTLdA2RWk6UerkgtrXX0i7c57d/+7dnbyzuvPPO6g//8A8bl+OpUwQ5qAYe5GlP4PjoLEWnrjQYKNVSmr3yyiurBx98cM46VKPz3GTcd9991TnnnFN/HZ3D0qrzvffee3Y4GdtsOv5YL20j79p/l6c85Sn18fBeaC/na94jx5tun3PJOWorscd54eYpfT9dx8W+/+RP/qT+mn3/5m/+Zn2u6PkdN1gPPPDAnN8Px/SGN7xhzrHdcsst1R//8R+3vu+2Y2PbbJftS5Ns2Uq8aag2hV1fdfMww3TynsZt4mI9yPaapFXa+UMZRklcVLkocoFsQjBs2LCh/vrWW2+tL5pNrr/++tlSDe3BTSUbwo0LPMv8+I//+MDVv/vvv3/1oQ99qA6GvDTGsROGH/jAB2YDPf1ZHFO6Hl9Hb+d0Wb7H67nPfe6c7RBUhDI3F2nwpPvn5/n++6THxtAn2prz7XOMZ555ZmNbfHpe8vb3rvOS75ttc0OUng++z3YJTX7O+8uP7bDDDqvnSW/6XXcdG9vmXL7//e+3BKyJNrLB29cpainG9B511FHVfMVwqJB+PWptvARp9Pxt62SVVo93lVDuuuuu2W0RVAw9yq1bt272awKc0twg6Bkewcl6tNu+973vrV8R3oT6oB2k2C/vhfcfOHa+x2vbtm1zlj/55JNnQ4fluGGh3ZjPZtyIEDQE5HyChPNFECFKmelNCT/Px5nzPUIvzgvviePh3KTHxXnh+Lv2zY0m7ys6o6U3VwRn+nOOLf35M5/5zN1u2vJjY3mOKT9ndG6L9y1NopF5LGAuOkW1daTi+1ThDvrQ+UGqe2Oc8HyeKtRVQh9FXEyjipGQTduk6VQVE0/cf//91ec///nWiSgefvjh+qId7cUEVR7UaYizrUGkIU61KFXAaWDfdttts1XIu3bt6qwyD4QaL0psEagcP6GVI1DjPbF/xnCnwcP7YP+cvwihQavPU03b5lzH+Wb7BFn8PA01jp1jSIdPcfMQ1cm8x3TdJqeffvrs+rwPSqOUVHmx/fTY+Iyzvzh33FCl7/noo4+ePT6q+N/znvfsdmyxfWpHKJFz4yZNmmV/SEKXvuphhgENatAS8iA9ppuqjlfaIwDTMbx5qBKUcQEd5Mbmy1/+8uzXaekWeYDOt30vL1GyrbPOOqt+MUXnYo8rJhgCIZuHF6GUhs7BBx9czUfTtrds2TInsKiODgQaYckrDzawrXR76bopzh+l0HR9tp2WuLm5SbeV//7SqmR+z1Rxx3KbN2/e7djYfqzP8nkVtjQpRjp4mx6CkBq0dzNVvYN2cBpkm3kvZY6zb4asUcNFMapco5NVePWrX13/S0lykFIcpeW4yHIxTs8PX8cFmhJrV+krFyVcLtK0g1I9ycV9qXtas7+0Cp5j5n3krzR45nNMBFRa7R04l32TgKSixzHHwA3AoOOu+0qbTb+rf//3f29dPg1Sak2azhmfqTBKPealkpatqjnttdzW+SimkGwrhcaY3r7S5jDjfgfZZr69pmrm9D2NaigTqnGxjKpSSkjRqYrSDxdfgqgLARJV11HCjarrtORISW5QbJMq0+gBjOhdjOi9u3Xr1iWfeSqt+m1TepKROBeE1yhMcJJ2YuMz8Du/8zu96/zYj/1YJU2iZQveQTsf9U0hOch0j4M+CGGQbeahS6g2LZu+p1EN3iipcuGmPTMNYkomw1QLp1XSVDdTjckFOEq/MdXkMKiapCqZ0EurvxG9d3lx3PNpX+2SD13qK4Hy/kqI4Uh5NW16jNFGu5wGqdn4wQ9+UEmTaNmCl4twVP92BW/0Fm4rFcd0j21V0mw7fwpSXy/jrm3mwdsW0Ok+YkarURQl1agijpIdF85hZn3i90m1aXTo4UV1Y1Qndg1J6hK9mcE26ZBDiToNYm6U2P5ilXwJUaq5Y/vcRIzK2FM6MEXoxrnJe5ZTU1A6eNMbE87fO9/5zpGez1taTsvWxpuWkPpmdlrImN48KBnu0IdttnXcyoccUSJvkr6nQXteLweCNy6ajOmMsPnbv/3bahhpiTbaSNN29UF7M3eJmwHCJu3Ny/4Wu70wnRxiVNoi0w5M4HeXtq+H5SjtcgzpjZXtt1K7ZQvefC7jrkkm+sbgdvVYTgOUXtJsa5AeyE3V03npuW3eZpZLS7yj3OOZC2YEZlywqWaezxzHaRsuwZv2ch22NMqFm8kbeDW1Fw4zHrgL77lpDG7aU5tSZlPvYEqecYw8wWmpcR7TkG0KWD63yxG8aY9nbhDaxhDTpBHnbCXOAy4thmWras7DiICkd3DbspQa23omd033mJZQY/s33nhjb4erpm0O0qmqablRLvHic5/73JxevMxGNZ9q4egpHTNBBUJs2O3RezbtOET4/uVf/mU9rphHFXLRjn1w0R/mRiEtzTLRBD2mCY2YTANp1XksQzty9ATmfKVTIjaNBV4K7D+GZ7H/GD7EcXBM0TFuOXDjFeeESTIuuuiiupqe882NS3p8/M6YdlKaRMvauSqdIIM79bbgBaXVriFBzLJz4YUXzvle+rg/9hclZy4Gfc/oBVXY6QxaeSm4rSSel4qX+1m8fdKQAT2F5yMCMO/4M5/Sc4yTjWk8CZumWbHADdAwwc6y6fsl4Hml40zzXtUx3WGTmPmpBMIt5q0m4PJj4lhies6qMH5njKmmOSem7aT5oslHPvKRed3cSeNgWcfxUvIMhGpXdXPfFJJN42/TauY0JAd5VCDSKuy8mrltjDHvIV1vpcxodfnll9elNl4L6aREW27e0eamm26q5oMQ4XiaxrqC7zN95LA9mqO0FaXc0DThAzM35csFqrpjqsZSCDd6eufnJKa0ZOKK5fTtb3979pw1id+ZD0rQJFs1NTW1q1omhBRPOgncKXddxLiwdFUR0yM3DdQbbrhhtq311FNPnRO+hPIll1xS9YltUvr94Ac/WLXtK+TLrV+/fsVNrrEQtO997GMfm62C5QK7GNWwbC8m/ae3LKWlYSaZGGT7fdujVBztwVSfLneJLc7JUpyPxbDUvzNphZpe1hJvXvLsG287zBSSBHSEblrNHAatAo6gT0vUbWN3kVZhc7yTFLrYtGnTbOhSspxvtXUuOoHxoqS52BfwQbbHfuMYRqGaNM7JUpyPxbDUvzNppVr2KSPT4ThUN3eVaPumkCS4o7q6rZo5sJ1BqoEJ3HzKybYbAEq7aW/mklWQy4mSIDUAtDemj1YknJZ6VilJWmmWPXgpOaalx7SaNtf3XN10/O0g7ayDPCqQbeZV0m2BmpZ2u0rF44bqRII3HWOaPoBekvSkkXhIQlrqpcR4xhlntC7b1fMZlHopnUbJsysAB61uTku7bWN3o2Qc6GAyiSjl0imK0LXXqiTtbiSexxul3rQ9te2JP31TSLKNtJq5r9R56aWXDjS0KDSVnvObBY59Ukq7iAfJS5L6jcxjASkhRukzqnfbwpWw7JIGaV877rDtsE2BSm/rOFZuFtqmkZQkaWSCNw8sqncZjN9k0NLkIO2sg47pRVMpnGNMq5h5D5PWk1mSNLiRCV5Q+kxLs/QSbqoGzjtktRk0UPuGKYW89Myxpb14Ofa+NmhJ0mQbqeAFk6encxvTdtoUvumsV20GnTWqb5gS8tIzx5S263LMHLskSV1GLnjB0JS0urYpfPvaZocZzkPo9gV5V+iyr3iOrSRJXUYyeAnCpvClE1M6G1VXsA7bq7gvyGm7pQMVx9AUuqP+IARJ0mgYyeBFBFpa7cxQIYIvHnzfVZU87MMJusb08jMC/5prrpkzsxbHtnHjRjtTSZIGNrLBCwKNYEs7XBGAzG7Fi+BrCsv5zhrVNkyJHtZpaTuW5dgs6UqShjHSwRvotMQ437RkSamXEmiTQXsp59rCOh1PTNByLHakkiTNx4oIXtDzmKrnvAq5aZKNtHp6UJRqjzrqqM4SLMFMKdchQ5Kk+VrW5/HOF+2sVDWnVb85ApQA5uk4lJTzQCWwWf+QQw6pQ7dtliwQuHSumqRpICVJS2J6RQZvIIAZ2tP1KMGFMHAlSYtsZQdvoOTKgxF4FOBCQ5iQpY14kEk1JEka0ngEb4oqY6qOCWCqkaNKOa+WjurntDp60McESpI0T+MXvJIkjbDpFdOrWZKkcWDwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFTQxwbt+/fr6JUnSctqjmgB56N5www2VJEnLYexLvHnorl27ttJca9asqV/zseeee9br8u+kWsj5kzR5xrrEe+ihh84J3bvvvrvasmVLtRQOOOCA1lDfsWNH9dhjj1UPPPBANYpOP/30+t8rrrii2r59+zCrVuvWravP8a233rpk53bUnXTSSfXvfj7nT9LkGdvg3W+//apNmzbN/p/Qu+qqq6qlcthhh9VB3+XRRx+tbr/99rqqe+fOnZUkafKMZfBS7XfiiSfO/p8SJ6FLqXOpEa5NJdupqalq9erVdUC/6EUvqsN327ZtlSRpsoxd8BK6VP0RciB0r7zyyvrfEu64447WKteo+qZacsOGDXVIU0UrSZocY9W5KkI32loJtpKh24eQTY/n2GOPnehOSZI0icamxEuAjXLohiiBn3baafUx0zmpaXhT/CzttEVVOR3EqKLuaiM+8sgjq4MOOmh2PfZJ9Xffeul+o72afd5///0Dt0tzvKxPG3vsmxuOvpJ97JfjjpuRWJf33LVv9sXxsm7o2+/GjRvrf7du3VqfJ2oi4phplkibCxZ6TiQpNTbBm4YuuKCOai9iQoFOVgQFF/M8eAkA2qijujz/GevRgza/6FPiP/7442cDhJsP0L7Mi/XyUElx/uiQlvfOZnu0S7PPrnPaNEkJ22LfBBfrN7Wzt73fWJfz1fR+wU0GNQdN76Vrv7S1g17IaSc8pLUQeS1KesxxTiRpGGMRvFw4I2xA6I5622kELxd0LvRpMBx33HF1CBFy1157bf0vP6c0GcHIv5ScU1FqI6hoZ46hLSz/+te/vtp///3rbV988cWNx8T67CcNWI4xbZfO9xmi1Mn7omTN+qwT60cv87xneXSEy99vvm/Cb/PmzXPOE+tG6LLPKNFzPlmX42W/bbUKYBnOVxwz4t+0FiWWic9VvB/Op80Fkoax4tt4uTCnw3hWSm/hdLxnWprad999Z0vEMS40woavI/gozeWlsCjFpaGLqN6mypavuyYRSffJKx2f27TPQBCxLMEa6xNg/D5ifcKQm4cUvz9CN0q1+b45bkru7JcATbE93hP74GYrSsSxboRt1zAvliXQb7755nrf6flOq+s5DpaJY2M51kNTzYQktfEhCSMgLTE9+OCD9UW+bfgTARVVyMPMlsS22G5XuzdB1bRPQib2mQdnvn6TaKdF2g7L+46bhbZ9c6wEHvLg5fu8n7b9Rsm160ajbb+gGjuOv+mcsd6kThoiaf5WfPBy4UyrlSlB5RfocULYtgVFhBtVoJTyhp3GsKsjWt8Y6ChNt4kQTJsE0q8p4beJ3y9BPeiUnyw7SBVw1zFTNY9bbrmldZlR7UcgaXSNRRsvpQ5ChqpQrIQxsk996lNnv24KNUqWhGe8p0EC55prrqnbS6MNGNGjmWBbyvPR17u3qfSZ9rruCvYobYPfcxqWhGucpwjyxZiPO91G13vjuPuq7yUpNTa9mqmaJXSilEKnGy72o1oiieNEPnSFDjsRuODCzvCVuMhTXdvUrsjP6DhFEPEiiAiEtJMTbaFdpctR1BbKTeO2Y6hPrJOeR0kaBWMTvFxor7766tkSX/RIvfzyy0dyrGV0+Inq4UA1eQyhyTtJhZh+sk06fpXwjbG1URK+6KKLFn36zL5q3bR0G6Ik21dapMNZyHt/s270hs7PFe97vsGblrIHfW+SNIix6lyVTw8Z4Ttqj2xLq5Dz6t8DDzyw/jd62TYZ5kJPKEUnJMIk7dC0mPoCLsIzvQmiI1no6rQVtQPpE554H/H9thuUhYjaBXS9t/SmQJIGMXa9miN809LUKIUvAUMbNGJ2pVTf0JS2oTGUbLs6lkVb71KJ2Z2acO6ZbAJpNTfHFCX+riE/MSlHum56ntpK731Pi+oT+6N3c1upd5w78klaGmM5nKgpfJnRaTkmOogHxdPGSjV4PMAhjjEXJTcu9vnNQkwK0YTwIaD4eT57FNJS9lK08XKum4KfGw3eM2J8ciqGAlEKz4+bc8f7iRJ+OmwoHVb1yle+snG9hZbsYxhTVNGnv4/F2oekyTO2z+OldEdHoujdS4mQNsG2mZcWS3Rs6kIpjx7ITUNZCBeqm7nY84B6liVUo6MUk4OkEzsEtsW6MW0jx8A5IJyoko0evyyzFPNXE1JRmuemgX1wg5FOX9l2o5EeN+ty3KxL0EXJtum4+R6d6Ag/biqiRM9xsB7tvk3TSQ6K/cU2OOcxYQd4X+yDY+Bc284raVBjG7ygGpeSSVx8uTgzOT6hV1pUq3JMXe2RLPexj31sdorHKKUSXNxIRPA2iXCKaRbTMIh9L+WQInqWR+in7aJdNxrpcRO66XuOdfl50zmLmaTy90sAcyy0Jy8keJv20fT7WGiVtqTJsmrmQrKrGnPp5P1cxNtmOho1XOhjwoxh22e54aBUFp2EFrsXc5/oLBXzTA9qvsfNOqzLOkvVi73EPiSNvemJCF6kwStJ0jKZnOCVJGkETPuQBEmSCjJ4JUkqyOCVJKkgg1eSpIIMXkmSCjJ4JUkqyOCVJKkgg1eSpIIMXkmSCjJ4JUkqyOCVJKkgg1eSpIIMXkmSCjJ4JUkqyOCVJKkgg1eSpIIMXkmSCjJ4JUkqyOCVJKkgg1eSpIIMXkmSCjJ4JUkqyOCVJKkgg1eSpIIMXkmSCjJ4JUkqyOCVJKkgg1eSpIIMXkmSCjJ4JUkqyOCVJKkgg1eSpIIMXkmSCjJ4JUkqyOCVJKkgg1eSpIIMXkmSCjJ4JUkqyOCVJKkgg1eSpIIMXkmSCjJ4JUkqyOCVJKkgg1eSpIIMXkmSCjJ4JUkqyOCVJKkgg1eSpIIMXkmSCjJ4JUkqyOCVJKkgg1eSpIIMXkmSCjJ4JUkqyOCVJKkgg1eSpIIMXkmSCjJ4JUkqyOCVJKkgg1eSpIIMXkmSCjJ4JUkqyOCVJKkgg1eSpIIMXkmSCjJ4JUkqyOCVJKkgg1eSpIIMXkmSCjJ4JUkqyOCVJKkgg1eSpIIMXkmSCjJ4JUkqyOCVJKkgg1eSpIIMXkmSCjJ4JUkqyOCVJKkgg1eSpIIMXkmSCjJ4JUkqyOCVJKkgg1eSpIIMXkmSCjJ4JUkqyOCVJKkgg3fCPetZz6pfkqQy9qjGwLp166qXvexls///1re+VW3durVznd/4jd+Y/frhhx+u/uIv/qJz+de97nVzAuqzn/1sde+991Yrzd5771396q/+arVhw4bqxS9+8Zyfcd6++c1vVn/9139dffnLX64kSYtv1dTU1K5qhSMUzzvvvNn/Ex5veMMbWpcncD71qU/N/p/gXb9+fdXln/7pn6o1a9bM/v+EE06og2olOfPMM+vQHcS1115bvf/971+RNxeSNMKmx6KqOS/dvuQlL6lLdm3S0jFYNv9eiqBOQ/eee+5ZUaHL++NGY9DQxbHHHltdeumlu5WKJUkLMxbBS4k1D0LCtw1V04N8L+ShvG3btmoloTYgD9CdO3fW1eXnn39+9d73vrf60z/90/qGIvXsZz+7uvDCC20DlqRFNBZtvKBNMg0XgrStnXLY4M1/1td+PEqohqc9N8V5OeOMM+oblhThy/Lvec97Zkv4hO+5555bnXrqqZUkaeHGJngJw7QqtS1I+X5abRwo1VIlm4cR8tJzXzUzJcS0lEw7Ke3OTdvuwzFxQ0EAgm0MU9WddiIDoXvKKae0Lh+dxqhmDrwXXn0drhZyrKybNg+kbctsM34HfL/tONLzzr5ZruucL8c+m6T7Yt3YTp+8JqLp+NkWn722tnreP9tJ9z/fppTF/NxL42xsgpcLBdWnEaptVc3p99Pl42f5BS8fbtN1EaO0+Cu/8iut+ybUKFUO0mGJfRKalFab2qvZBttim21YN784U63ch6p0zkNcRJ/ylKdURxxxRGsYPOc5z6lLxW3t5H3Hyvbp+MX5w/T0dLVp06b6+03b/c53vlOdffbZs8dDyLB+0/4/8pGPVBdffPFI7DPH75ebxbbf71VXXdW6HY6TJoTYP8d/+OGH1zeWv//7vz/7e+f7HHd+7tkn++f9z2f/KfbJttp+/7EdO+pJjxubcbx5O2+UvnLHHHPM7NfXXXfdnDBJfxbyEG1q32VflBC5EHa1LXOR+7u/+7vqF3/xF6su/JzOUG0XRXBhZX8s17ZM/n4GHQK1a9eu2RuEeLW183Ksn/zkJzs7p8WxfuhDH+rs9Jav89GPfrRxuwQ92+L3y9eXXXZZ6/7f9ra31UE6Svtcu3Zt/XkhrLp+v2xny5YtA5+zl7/85fVx9bXJH3zwwfXnsC300/3zu+3aPzcfXecCxx13XH1e7SsgPW6sJtAgSFNNF4P0e1RPp0E6SNtvvg80lXwoTVM65pWjRNJ2oeLixM/zi11Ud7LdFEFAB6gm+U3AMG3TnJef//mfn31RaspxoW86Vt5z07H+zM/8zEAhSGmOUIoLddPNAuHFvrmgx/5ZLt8nuIHpCoaS+2Q/BHj+M84XN0Z5rUIEfh+2++53v7t3ObZ3wQUXtH6+8g52hHTb/qPE3vQ++Kyl22K/6XmTJtnYVDUjD7m8xJuHKOFCSTnaQWMYUtomlW8jvzBygY3qykBP4XRCDi7mhGMahJQACbQcpYf8PdERKg0CLnaEfeAizjHk1Yn5sS9mVR8X+ve9731zvveNb3yjeuc73zlnP5zbtJ2Z6u9B2otZhnNIyTt+H/m24v394z/+Y31jEMuxD44tmhE4Vkr/o7DPPJC3b99ed1xLzxkhdckll8y2lbf9fnN8vrgJ+PjHPz67LJ/n2DbHdNppp80pebJ/3kd6A8px8/lK95//zjjG9Lw89NBD9e8+3Q77YTvRuY913vjGNw5UfS2Ns7Eq8fJHn5Y+8lJF2rs3OsHk66TL5ON7my7cebUxF+18FiwufHRoSksAXJTy3sbcGKQXRZbPQxdsn3BP5SWPpmq9xRx7nM/k1RQgyM8HF/+3vvWtvdu/7bbb6veY3gRxwc7Dh/1ywU+Xo7R10UUXzVnumc98ZrXc+4zgC7S/Np0z2pPTXuSs95rXvKbqw3ExcUzaTMDvPI6T31d+k8h+8uYTanXSGo58/03v4wMf+MBu22H/bCf9++qq3pYmxdjN1ZxWBXOhSf/I0xJgulz6dVoqzkuMeTVz3ouTCxwXvSb8jKkYU3kbbH5RpOTSVkolDNILGsdaqg2NC+/RRx89+38uvARUW+9VfpbfEHVdfNke773p+1/5ylfmfC8/p+H666+f8/++i32JfeYd9Qjrtt9v3pN6kHPW14EpvxHtavP/0pe+VN8wsQyvRx55pHVb3CC2nZMdO3bM+RnvoasfhDQJxi5481JdBGlX6TW9U09LofmFKt92HnRN7bmpvOSUbz/fXlcJlZAbpE17qUQ1ZOg71rbfS5vvfve7VR/C5r777qsWy1LvMw+c22+/fTaM8xel5TwU+26sun4H0TM98D762vxjchVeaQ1LfpMXne/aXun74DicDU2TbqzaeMHFJG//JKDyO/T0IsU6MddzjGvkYpGGQ9PYymHCB30X0nx7fUHetb2m0md+EVyIpgcsdMn32zSWetwddNBBc/6ftx/34ffXd4PTt37qP/7jP6r5yEver3jFK+pe0oPaa6+9KmmSjV2JN9q2QgREWq2bt0XloRql3jRcBpnQYLEnCljI9lg3722bB3splK4cw7lwi32zkvdgllTG2JV4kc5iFW1jaTVfUxUbYRyl4phuMr3QDTIUZ7E7jbTNpDUoSkdpSb9rGs2mfafvJ2ZUCvnkI12oXnQM5+5oehhm3u+FPqox/yxxI7YYN0QcV1sbb5O+mhxp3I1l8HIxS3v55s+ebbrYcfGIar+ons63mcsvZH1tV/nP8wtQvr2mmbSG2V56MwHOSVvnrxxPJ0qHCzF8hp68gWrKNHj7qrG7pjecFHnbMDdGfUOEFlP++ZrvzVD+u6MDVcn3Ia10Y1fVjDys0hBum0s3HVYU0+kFquSagiLfz7CPI8zb6/Lt9XVAyn+eby8f1sSxDfJowFWrVlWnn3767P+pKs577KbHSon2ta99bev28t7fmMRST/77TXuGLzV+h+nng99Z1wxqMSVlvNLhQ/mkISU79UnjYCyDN2+z7SvtNv0sLQ20rZPvJw/sFNvLQy+vvs7/z/JtpRL2k5Y4m+aQ5vjykggdz/qmrOTpRPl+03PARfxzn/tclR9r201HHsrzeZDAOIiHBoSYmKIN5zSCb9BpL7vkv7Ou/dMnIiaHycds8/tPq5aZ0avrho4apzTE7dWsSTeWwYu2sBw0eFNd7bt51S0XoHwOXkqmH/7wh3ebHKOpOjsPcmaySi9UEe55wOel2/T48k5WTHuYXwDZLsfJHML5RbTpwQ4ca9o5h4sv8/qm75FtEvTpsTaF9qTgvV9xxRWz/48HMjTdXHHO4iEOefDNV9ONGJ+DfPw4nwNuvtLjzms88v9zrE3hy7SisQ9eDGlazIlcpJVoLNt4kbbZBoKiq82Ui1I6FCn0hTXrpRevCMYIq6aLJjNSNWG8JOEXpVnW5UEI0bkp7/QEbgzaOrdwDOwrn4qyaarLJkyk0DTFXzz1hvl3A1MCMqyk61g/8YlPDNURZ9zwWWEWqChpxjkjjOJGJp8sI871QsUMUwRr9HCPB1jwuW/7nXHM+U0inwtuyNK/sQjfKNXT9JKXlJ0uUhrjEm88JjDV14O0aaKHQapFmWCgqcSZz1QEjun3fu/3Wu/6+X4+vSRifHF+UeT4+h71x/s+4YQThh4+cvXVV1fveMc7Wn/OxZdQz89z27HyeLh8qstJQ/jQSa1pXnGqZPPHQMYcyIvVGY2OUEwTOejn66abbqrDugnBm9f4xFSoTY+kZNlJvumSwtiWeCNE++ZazrFMWgU7aLUYgcKybc/jJZy46BDQfRfRCF9KE7S1NQ3biafADHohS7eZlniasG0ukoMMdaG0TYj0HSvTMQ7zdKRxRvgxpzI1DnRia/pdDPN5GRZzQfNZYP+09zftn32y77YmjBDNEGynqb2Y98Fnb9DPkzQJVk1NTe2qtKjiWcBxQYuOT/PtUBRT9BFqcSFb6MWY8M17YbNNwnEhHZ/YLtvkWGOGsEnsSDUMfr+cMz4v/H7j4QbLtf/5fr4W+3Mvjalpg1eSpHKmx7aNV5KkUWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFWTwSpJUkMErSVJBBq8kSQUZvJIkFbRHJUnSopi0stx0NR8LDt67f+2jlSRJk2W6mvrzt1bzYVWzJEkFGbySJBVk8EqSVJDBK0lSQQavJEkFGbySJBVk8EqSVJDBK0lSQQavJEkFGbySJBVk8EqSVJDBK0lSQQavJEkFGbySJBVk8EqSVJDBK0lSQQavJEkFGbySJBVk8EqSVJDBK0lSQQavJEkFGbySJBW0RzUmXv38farnPeNp1V3f/0F1/V3f713+ec9YPbPOj9Zfb/7neytJWgyvft4+1esP3q967j5Pq56xeo/qa999uLr+zu9XV3/zgUrC2ATvyS99VvXmmRchOkjwErqXH39I/bXBK2mhXjBzM3/p8YfWhYAU/3/7K6eqrTPhe8pnbq3ueujRSpNtbIJXkpYLbXbXnrKurnV76NH/V334xn+rvjpT0uXrKBRsmAngvzrx8OrIi75YabIZvJK0QIQrofvtmdLssZdumynV/mD2Z1Qz//lMrdq1b1lXHf7svesQ/pi1bBPNzlWStABcRN80E6b4P1+5Z07oBsKXF8v+r6wqWpPHEm8HOka8/ajnPt5xa5+n1d+j8xZtwp+/83uNbTWHP3Pvuj2HDhUX3nh33dHi7A0vrNd/6Af/XX31voerc7f+6+y66c/T7XfdEcdxvf7gfatnPO2HB15P0tKhtNvVv+Tf6kB+vBOoJpvB2+Lwn9i7um6maoiQSz3eG3qf+q72uE98rW7HSbE81U7XP+P71drVP1yds+EF6Q/r7bL+MTPVUW9+6bPn/jzZ/j4z614400407HHRm/LXP3Nr3bYkaelNz7yOuWxb73Jrn/ib3eHf5sQzeBsQYle98afqcCNY33HNt2YDlnC7YNNL6rtWlnnpR77YGHKUYE/eZ3V17nX/Wm3+yr31MoRiXbqdWffyJ3o/fnimVHzhF/6tLgHX29744jpcz54J5M3/fM+cbafHRbUV2+Zf/s+2L9j04roUfNcxL6yPWdJo4G+Xv1FC+rO3Oaxo0o1d8BJqJz/R3tLl1R3tLOc8EY6EIXeyafhdfduDddj989uOqpc546ip6pzrvt1wHI+H7jlbn/wZVcGUlCmxsn/+f8aWJwOS7VKKvvNdr6rD9Ojn/Wj12WTsX35cgeNLt33GTFU3+7bUKy0/2nXPmvnbxV3fe9TmII1f8BJor15g54XXzdyZ4pytzeFVDxeYKaVSwnz7K5/bGLy48At37/a9u77/ZLvwh5t+PhOevAjYfZ72Q43HRVVyk+jAwfvn5oM2ZknL66yZGih6Mn9v5rpx7OX9VdIaf2MXvJQGr7/ze73LEWxNAU1np2g/7aoSouRL8LIspdu8oxXh2VfifOjR/64GlR4X4drma9/dWb+vn5qprpa0vM6ZCV2ajahiPuUzX2/s8azJM3bBS+j++swHvA8lwqbgfcbTnjwlXcGZ/gHRnrvUs9Gkx7XrvP/du7w9J6Xl9esz15izn+g8ed5M08/Vtu3qCXauyjxj9ePDc0atfTSOC10l3vC1rLe1pHKOn2kWuuyJKWnzvh6SwZv56n0763+p1uXVFsD5cJ6lxjjdMMjQBUnL44iZZp5LDV11cOaqTNr56fCOdtK0mvqrBUqXTLzRtG9Jo4MHJfzVE0P+DF21MXgzlHCjKvfsY17Yulz87LO3PVikWjo9rjd3DJei7fqcY15gOEuFEbrxoARDV10M3gb80YDwysOXO9mY5ALpONxSx0W4Nt0U8D0edcgkHWnJXdLSSkP3Q1+429BVJ9t4G8SsUAQZUzoyIQXVyfXQoScebg2WKTk8ID+uk4/4idmA5UZguY5LmmSUXv7qjYfPjiR458z1gleb6emq+qGz/2+lyWXwtuCOlVB7+1FTs/Mrh3S6xuU6rph6Mh02tJzHJU2ydLif1GfV1NTUrmoB7v61j1bjjpIk4Us7K72LR2WoUR28+6weueOSpPE3XU39+VureZj2Nm0AacemURLTS0qSVg47V0mSVJDBK0lSQQavJEkFGbySJBVk8EqSVJDBK0lSQQavJEkFGbySJBVk8EqSVJDBK0lSQQavJEkFGbySJBVk8EqSVJDBK0lSQQavJEkFGbySJBVk8EqSVJDBK0lSQQavJEkFGbySJBW0ampqalclSZJKmLbEK0lSQQavJEkFGbySJBVk8EqSVJDBK0lSQQavJEkFGbySJBVk8EqSVJDBK0lSQQavJEkFGbySJBVk8EqSVJDBK0lSQQavJEkFGbySJBVk8EqSVJDBK0lSQQavJEkFGbySJBVk8EqSFsWRRx5Z7bnnnpW6GbySpAUjdI899tjqpJNOMnx7GLwFrFmzpn75YZQ0ru64445qx44d1X777Vdt2LChUrtVU1NTu6oxRMgdeuih9Ydg7dq19fcee+yx6vbbb6/uvvvuaufOnVUpp512Wn0MW7ZsqW699dZK0vg64IADqoMOOqj+m+c69MADD1Tbt2+vrz3jjvd84okn1v9u27at2rp1a6XdTO9RjaH169fX1R6rV6/e7Wf8QYAPxQ033FCHsSQtFLVamzZtqmYKM3O+z//XrVtX3/Bz813ypr80SrxXXXVVHb68Z66vXGc11w/N3JmcU40J7i7f9KY3VQcffHC1xx57VI8++mj11a9+tX5xt8mHYq+99qoD+VnPelb1ghe8oLrtttuq//mf/6mWEh9A9skxcPcrafycfPLJ1f77719fd2666ab65p5rz6pVq2Zr3ghhvjfOHnnkkeree++tDjvssNmbEEr8mrVrrIL36KOPni3Rcpf16U9/urrzzjvrsOPF1zfffHP9cz4QhDABvNTVvwavNN5o1iJouLn/+Mc/Xv+tf+9736tLt9G8xc+55rDMuF8HeN+8T67HXGsn4T0PYdfYdK6iXYWAA6HbVb3Bz6699tr6az4UrCtJ80Xwgpt4QiZHiY/wRV4VPa44F3Edpgre6+yTxqaNNz74fOgHaVOg5Bt3Y7QJX3nllXN+Tq88qq6/8IUvVLt27aqXiT8Y2jDSuzeWI/TZHl/TrnH//ffXxzFoew7Hzys6gvE++OC2dQRjXwceeGDdk5Bl0v1zh512aojj44Ofb9/OXtLi4G8qwrVJ/B3TFjwp4lrM9fP444+vrrjiCku+1RgFb1QxR1XyIAgowpRXBGa6PUKKO1VCOO2olQ4L4o+IcWsRaIE2HaqW6EzRhfX5QLJ8KtqD+GPmw5qHb2yf7/OhTtdPjzU/Ptqf+Hlsn3Wbti9pcPmNe5OnPvWp9b+T1qGT8I2b/+OOO87rTTUmwbvvvvvOhk3XHWeO0iIDvkFwNXUA4OeEFR+euFNL79gi1FiG0L/lllvqPyy2R/UK61NibhOhS8AS0myb9Smdsj7bZh+bN29u/IONUjIdOXjvLJN+qOP42G5sH+n2+XeQC4ek+eEG+EUvelH99SQMK8pRA8c1musV16RJD9+xaONNS5tN7Stt0mXzEmsgUAklQpVg5hUBmFYNs0xULfNzlrv44ourhx56qHFYU6wfocv66bb5mu+xf/ZB6bbtvfOh5sWNBOvF++KGJI4vrx5nOYJ4mBsVSfNDzRKiiWcS0a+GJrgoTEzyhEJjEbxpsA1bjdMX1ARu2zJph4q2douuAeSxfhqW+bFF1TntuU3YL6XdPk2l7gh3S7vS0iF0uXGOm/hJxtCq0FYgmQQTP2Vk310Xd2htol21q9RIuPEH17U+1dN9+2d8YJOujgoPPvjg7L65wyToJ6ljh7TcCN0o7V5zzTVD1ciNG5q00hq+ST4XY9HGmwZb3kmqT9x1zafDQ6zb9wHi5/ndHccZ3yMU+8y3WoYPOB0aoi0XhDWBTtX0JLY3SSVwoxuhSzPUJP+t0UGVDquG7uPGIngp2YW2TlJN0nFlS/lBaAr1NIgJwaXq6UjI8kHnvXIhoCcz5yh6Rbf1mpY0f4RM3Oj2zSsw7rj5oEczBST6mkx66GIsgpdfZAyT4QM/aPCmY3/nM7Ys9tnXVtFUWk0/fIwVXsq7YfaVduoghAndGNfb1Wta0nC4qd24cWP9taE7t6rdMbyPG5s23uiERKAM0o7JMgudRzQdmtO1n7b22Wi/zcfwLrXo0czdJwjftl7dkgbH3ztNO9yMT3ro8qCaCF06mdqs9aSxCV569lICpXQZVTxdGF8bYTPfP44IbMK+rQ02PnhNaGMFJe+29Ql1thGl82HEujGVZi6ffUvS/KWT1Ux66FLzGHMkcB4GGXkxScYmeNPHT1GS5Rm4TSVJwohHVqUPU5hvm0Ma9vzB5SXtGEbQt350fMrXj0kuusK7D+vSsaEpfNOxhVYBSfOXhi61b5Mcula19xur5/HygaeKh0DhD4DHdBEohFvMJpVWqS70Q8E2qUKJbvKnn3767NAi/s+xEK583TQxOutT3csfLDcCvGL9tPp3vnMqx8Ts7JvwZSxw3GSwr2ib9rnE0sLEyAFQxcqry/nnn1+No7SqPZ55rt2NVfAiuu0TNNGDN0cYsdxiPCMynkbC/mjLjYAl7AllPnyUsNvEDFfcIca80SEm0FhINQ09mqOqOg//xTwP0iSb5MkgQlrqzx/UorlWzVyMd1Vjig9AOo8z2p72s1j748NH6XE+VbdUWceNAqG72MfJtmOcM9u3lCtpsVDKp12Xax9DFL2+tJoe6+CVJJVD+NJp1LG6nQxeSZIKmp74uZolSSrJ4JUkqSCDV5KkggxeSZIKMnglSSrI4JUkqSCDV5KkggxeSZIKMnglSSrI4JUkqSCDV5KkggxeSZIKMnglSSrI4JUkqSCDV5KkggxeSZIKMnglSSrI4JUkqSCDV5KkggxeSZIKMnglSSrI4JUkqSCDV5KkggxeSZIKMnglSSrI4JUkqSCDV5KkggxeSZIKMnglSSrI4JUkqSCDV5KkggxeSZIKMnglSSrI4JUkqSCDV5KkggxeSZIKMnglSSrI4JUkqSCDV5KkggxeSdKiOPLII6s999yzUjeDV5K0YITuscceW5100kmGbw+DdwStWbOmfknSSnHHHXdUO3bsqPbbb79qw4YNldqtmpqa2lWNgQMOOKBau3Zt488ee+yx6tFHH622b99erQRnnnlm/e8VV1yxYo5ZkrgGn3jiifW/27Ztq7Zu3VppN9N7VGPisMMOqw499NDOZbgbu/nmm+sPhIZDCZw/Js7hzp07K0nKcX246qqr6vBdt25dXei54YYbKs01dlXNlGzvvvvu3V58n+CgCmTjxo2VhvOqV72qbrvhBkeS2jzwwAN1+GL9+vX1S3ONTYk30M6wZcuW3b5PYz93YHwICA+qcG+99dZKkrS4uL5yHd60aVN9zaUk7PX2SRPTuSqqPCj9oq9aWpI0fwRtVDMTwPTD0ePGrsTbhw/D1NRU/aIUTCCDDwVhHCVhusYfdNBBdfV03L2laPOkBM0yIe7q+u7sovQd4c8x3H///fWHtKv9lDtH9kup/vbbb29chm3yXvqW4RWd0br2T9U8xxt/NLzf6HHdVGsQ55Hz27dtSeMtgpdr1/HHH193GKUqetJNXPASjmH16tWzwUsIUQW9atWqujs8wdi0DmK8Wo5tEDis+5nPfKYxaNg2HQ/Yd/591uWD2YZQYxm22xaq/Jzga1qGwOTOM0Ix3z/vnxuMNEzj5iNdjhc4V+myeXtOtKvHtvkjtKOFNFn4m4/CxnHHHVdf4yb9Jnzigjcd2E0w5A488MA6FAmUf/mXf6mDOcIZhFqELsFGD2nu4FiHYKSESNAQcFdeeeWcbRN8fPBYljAn5OLuj4CLu8KlEqHL+6Z39y233FK/t7jR4BhYhmOK44obAd4zP+f9Rq/w/LxE6DKEILZN8MbPeFHV7xApabJwTeC6x7WATpqTHr4TF7xRNUywpMER+HB0lcwiXAjmtPqZbRGmbPfkk0+uA44gTkOGdWNIDqGclqTZHstSGl4KafUv+06re9hv7JtluHmIm4b444hzxb9NfzDcsMT7SIdr8R45l7zvGJJk8EqT59prr6323Xffav/996/Dd/PmzY3X4EkwUcEbPZrRNpa3a9xZOklH2zIEGiVhAp5SZBoyEXwxw0uO73FcTdXYCxXtyQRjWxsLd6Uc93z+GP7rv/6r/nfXrub5WJp6mkuaLDRPhbSpb9KMXfASjk3jdAm9CE2Cp60DFB2B2kTbJus3BWeI4E3bUqnijv1TDduG41qK4I1jb2sbRlrFPCzOG+EeNzZRgpck0IzFdaipxm/SjF3wRiepNpQo59vBJ4KzqW04FR+otD05gi/9eZOlugOMzlx9xz5ftBlzfijlc/55sa+oAeBlr2ZpMtF8RWHE0H3c2AVvXOhTBACBxvcXEmwRXktdPcLx5r2eVwKqqjnHhG5Uy8fQLUrx9mqWJg9NfNyQc11jRqtJD138fyoXoVevZmSfAAAAAElFTkSuQmCC"

/***/ }),

/***/ 561:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 562:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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+MpXvjKivcYxtqnC98bVz7iEr0JX+2oXpQzetO0q7imaXrC8gldVuqqm1iMNLntej7SaWceXXvxuvfXWcMEFF4SrrroqfOhDH8qqtOMAEZVqGtF2td6VV16ZbU+PvG2ptLV///5w3XXXVZfRI63azCvZqSQYB8zvf//77Jj10HvVe1iyZEnNPtPhXr/61a+q50dVqkbVs/F5TauZVdK++uqrQ3rudOxaT+9n8eLFNdvMu4FQIMZVy2loKtTisNaQIGsbttfT9t80iB966KGaf2ud22+/veY5nTs79zpv+lvo/cT0N8j7TOu5tCbEPkf299DfIQ5gC2u0L4/wbbfQlVIGb141s8m7iI7lu/q0tKaLZdourSDXhTgtlTXzvr72ta/V3JhoW2qvjSng1PYa9/DVcjfeeOOAUldadX/gwIEs2Ozxuc99bsCNh9qIb7vttuq/0yAbqrQp4a677spt01d7Zlzy1nrx/vPaX+NzG/dctrG4NtmGUQerWPxva0eOKSTjY9+9e3fuubN2eKNz9/73v79mGT334Q9/uOa5vHOhv8MnPvGJmr/pWP//gZE3kuHbjqErpQzeeJq/uJrZpDMDNZoUYbTo4h9ffPVeijqD6YIctytKo/el7aXDZWxb6QW+aDalNJDScawKlDh4izrspAF+4oknhuFIA0jhdv/99+cuq9d++tOf1qybhk08sUV6YxAvG5d043VUwrXagHT9eB17PZ14Y82aNYXnTtXa6U1X/LnR7/H+dDOUdvaKX4s/R3lBjvaj8L2hEpDf2/hCaJXvbXy+LUNXShe86UUmb0IChc1oVDcPVjw1ojQaNpLeYKQdflLN9lodyd6tCqN0GshWiT8H9h6smjh9pNXraQeqtJ3XSqxpSMZ/A3324nXiqt44rPOGGsVV0boxqDetqII7/ZzH20+rtRtNUZp2JqPEC3PrD58N37x/+B2g7rp/b2Vbz4V2VbrhROmk9nklNatujsdm6vexNmdyXiefetKATEufo0nnWDc4uhmw0t9ITmCibcfvX+298VCqRvJ6u6t0bzdp9h40n7MFmwIyDS1bx8bzql08HUaUriOnn356zb/r/e21jfhvr33F5/bNb35z09uS9HPERDOIraqEpibD0Njcofj5tr7KNtqj93KR0gVv2oHExnim0ouJekGP9y8rGKvjLhuNPx4Jrd5XXjus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"

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 576:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 577:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "TasksPlaceholder", function() { return /* reexport */ placeholder["a" /* TasksPlaceholder */]; });

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/check.js
var check = __webpack_require__(477);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(7);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(11);

// EXTERNAL MODULE: external ["wc","explat"]
var external_wc_explat_ = __webpack_require__(121);

// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(16);

// EXTERNAL MODULE: ./client/header/activity-panel/display-options/index.js + 3 modules
var display_options = __webpack_require__(170);

// EXTERNAL MODULE: ./client/tasks/task.tsx
var tasks_task = __webpack_require__(531);

// EXTERNAL MODULE: ./client/tasks/task-list.tsx + 2 modules
var task_list = __webpack_require__(549);

// EXTERNAL MODULE: ./client/tasks/placeholder.tsx
var placeholder = __webpack_require__(522);

// EXTERNAL MODULE: ./client/tasks/tasks.scss
var tasks_tasks = __webpack_require__(532);

// CONCATENATED MODULE: ./client/tasks/tasks.tsx


/**
 * External dependencies
 */








/**
 * Internal dependencies
 */






const Tasks = ({
  query
}) => {
  const {
    task
  } = query;
  const {
    hideTaskList
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["ONBOARDING_STORE_NAME"]);
  const {
    updateOptions
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["OPTIONS_STORE_NAME"]);
  const [isLoadingExperiment, experimentAssignment] = Object(external_wc_explat_["useExperiment"])('woocommerce_tasklist_progression');
  const {
    isResolving,
    taskLists
  } = Object(external_wp_data_["useSelect"])(select => {
    return {
      isResolving: select(external_wc_data_["ONBOARDING_STORE_NAME"]).isResolving('getTaskLists'),
      taskLists: select(external_wc_data_["ONBOARDING_STORE_NAME"]).getTaskLists()
    };
  });

  const getCurrentTask = () => {
    if (!task) {
      return null;
    }

    const tasks = taskLists.reduce((acc, taskList) => [...acc, ...taskList.tasks], []);
    const currentTask = tasks.find(t => t.id === task);

    if (!currentTask) {
      return null;
    }

    return currentTask;
  };

  const toggleTaskList = taskList => {
    const {
      id,
      isHidden
    } = taskList;
    const newValue = !isHidden;
    Object(external_wc_tracks_["recordEvent"])(newValue ? `${id}_tasklist_hide` : `${id}_tasklist_show`, {});
    hideTaskList(id);
  };

  Object(external_wp_element_["useEffect"])(() => {
    // @todo Update this when all task lists have been hidden or completed.
    const taskListsFinished = false;
    updateOptions({
      woocommerce_task_list_prompt_shown: true
    });
  }, [taskLists, isResolving]);
  const currentTask = getCurrentTask();

  if (task && !currentTask) {
    return null;
  }

  if (isResolving) {
    return Object(external_wp_element_["createElement"])(placeholder["a" /* TasksPlaceholder */], {
      query: query
    });
  }

  if (currentTask) {
    return Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-task-dashboard__container"
    }, Object(external_wp_element_["createElement"])(tasks_task["a" /* Task */], {
      query: query,
      task: currentTask
    }));
  }

  if (isLoadingExperiment) {
    return Object(external_wp_element_["createElement"])(placeholder["a" /* TasksPlaceholder */], {
      query: query
    });
  }

  return taskLists.map(taskList => {
    const {
      id,
      isComplete,
      isHidden,
      isVisible,
      isToggleable,
      title,
      tasks
    } = taskList;

    if (!isVisible) {
      return null;
    }

    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], {
      key: id
    }, Object(external_wp_element_["createElement"])(task_list["a" /* TaskList */], {
      id: id,
      isComplete: isComplete,
      isExpandable: (experimentAssignment === null || experimentAssignment === void 0 ? void 0 : experimentAssignment.variationName) === 'treatment',
      query: query,
      tasks: tasks,
      title: title
    }), isToggleable && Object(external_wp_element_["createElement"])(display_options["a" /* DisplayOption */], null, Object(external_wp_element_["createElement"])(external_wp_components_["MenuGroup"], {
      className: "woocommerce-layout__homescreen-display-options",
      label: Object(external_wp_i18n_["__"])('Display', 'woocommerce-admin')
    }, Object(external_wp_element_["createElement"])(external_wp_components_["MenuItem"], {
      className: "woocommerce-layout__homescreen-extension-tasklist-toggle",
      icon: !isHidden && check["a" /* default */],
      isSelected: !isHidden,
      role: "menuitemcheckbox",
      onClick: () => toggleTaskList(taskList)
    }, Object(external_wp_i18n_["__"])('Show things to do next', 'woocommerce-admin')))));
  });
};
// EXTERNAL MODULE: external ["wp","plugins"]
var external_wp_plugins_ = __webpack_require__(76);

// EXTERNAL MODULE: ./packages/onboarding/build-module/index.js + 26 modules
var build_module = __webpack_require__(273);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: external ["wc","experimental"]
var external_wc_experimental_ = __webpack_require__(17);

// EXTERNAL MODULE: ./client/tasks/fills/PaymentGatewaySuggestions/components/Action.js
var Action = __webpack_require__(547);

// EXTERNAL MODULE: ./client/tasks/fills/PaymentGatewaySuggestions/components/List/List.scss
var List = __webpack_require__(533);

// CONCATENATED MODULE: ./client/tasks/fills/PaymentGatewaySuggestions/components/List/Item.js


/**
 * External dependencies
 */






/**
 * Internal dependencies
 */



const Item = ({
  isRecommended,
  markConfigured,
  paymentGateway
}) => {
  var _connectSlot$fills, _setupSlot$fills;

  const {
    image,
    content,
    id,
    plugins = [],
    title,
    loading,
    enabled: isEnabled = false,
    installed: isInstalled = false,
    needsSetup = true,
    requiredSettings,
    settingsUrl: manageUrl,
    is_local_partner: isLocalPartner
  } = paymentGateway;
  const connectSlot = Object(external_wc_experimental_["useSlot"])(`woocommerce_payment_gateway_configure_${id}`);
  const setupSlot = Object(external_wc_experimental_["useSlot"])(`woocommerce_payment_gateway_setup_${id}`);
  const hasFills = Boolean(connectSlot === null || connectSlot === void 0 ? void 0 : (_connectSlot$fills = connectSlot.fills) === null || _connectSlot$fills === void 0 ? void 0 : _connectSlot$fills.length) || Boolean(setupSlot === null || setupSlot === void 0 ? void 0 : (_setupSlot$fills = setupSlot.fills) === null || _setupSlot$fills === void 0 ? void 0 : _setupSlot$fills.length);
  const hasSetup = Boolean(plugins.length || requiredSettings.length || hasFills);
  const showRecommendedRibbon = isRecommended && needsSetup;
  const classes = classnames_default()('woocommerce-task-payment', 'woocommerce-task-card', needsSetup && 'woocommerce-task-payment-not-configured', 'woocommerce-task-payment-' + id);
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], {
    key: id
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], {
    style: {
      paddingLeft: 0,
      marginBottom: 0
    },
    className: classes
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardMedia"], {
    isBorderless: true
  }, Object(external_wp_element_["createElement"])("img", {
    src: image,
    alt: title
  })), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-task-payment__description"
  }, showRecommendedRibbon && Object(external_wp_element_["createElement"])(build_module["RecommendedRibbon"], {
    isLocalPartner: isLocalPartner
  }), Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    as: "h3",
    className: "woocommerce-task-payment__title"
  }, title, isInstalled && needsSetup && !!plugins.length && Object(external_wp_element_["createElement"])(build_module["SetupRequired"], null)), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-task-payment__content"
  }, content)), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-task-payment__footer"
  }, Object(external_wp_element_["createElement"])(Action["a" /* Action */], {
    manageUrl: manageUrl,
    id: id,
    hasSetup: hasSetup,
    needsSetup: needsSetup,
    isEnabled: isEnabled,
    isInstalled: isInstalled,
    hasPlugins: Boolean(plugins.length),
    isRecommended: isRecommended,
    isLoading: loading,
    markConfigured: markConfigured,
    onSetUp: () => Object(external_wc_tracks_["recordEvent"])('tasklist_payment_setup', {
      selected: id
    })
  }))), Object(external_wp_element_["createElement"])(external_wp_components_["CardDivider"], null));
};
// CONCATENATED MODULE: ./client/tasks/fills/PaymentGatewaySuggestions/components/List/List.js


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



const List_List = ({
  heading,
  markConfigured,
  recommendation,
  paymentGateways
}) => {
  return Object(external_wp_element_["createElement"])(external_wp_components_["Card"], null, Object(external_wp_element_["createElement"])(external_wp_components_["CardHeader"], {
    as: "h2"
  }, heading), paymentGateways.map(paymentGateway => {
    const {
      id
    } = paymentGateway;
    return Object(external_wp_element_["createElement"])(Item, {
      key: id,
      isRecommended: recommendation === id,
      markConfigured: markConfigured,
      paymentGateway: paymentGateway
    });
  }));
};
// CONCATENATED MODULE: ./client/tasks/fills/PaymentGatewaySuggestions/components/List/Placeholder.js


/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



const PlaceholderItem = () => {
  const classes = classnames_default()('woocommerce-task-payment', 'woocommerce-task-card');
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], {
    style: {
      paddingLeft: 0,
      marginBottom: 0
    },
    className: classes
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardMedia"], {
    isBorderless: true
  }, Object(external_wp_element_["createElement"])("span", {
    className: "is-placeholder"
  })), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-task-payment__description"
  }, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    as: "h3",
    className: "woocommerce-task-payment__title"
  }, Object(external_wp_element_["createElement"])("span", {
    className: "is-placeholder"
  })), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-task-payment__content"
  }, Object(external_wp_element_["createElement"])("span", {
    className: "is-placeholder"
  }))), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-task-payment__footer"
  }, Object(external_wp_element_["createElement"])("span", {
    className: "is-placeholder"
  }))), Object(external_wp_element_["createElement"])(external_wp_components_["CardDivider"], null));
};

const Placeholder = () => {
  const classes = 'is-loading woocommerce-payment-gateway-suggestions-list-placeholder';
  return Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
    "aria-hidden": "true",
    className: classes
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardHeader"], {
    as: "h2"
  }, Object(external_wp_element_["createElement"])("span", {
    className: "is-placeholder"
  })), Object(external_wp_element_["createElement"])(PlaceholderItem, null), Object(external_wp_element_["createElement"])(PlaceholderItem, null), Object(external_wp_element_["createElement"])(PlaceholderItem, null));
};
// CONCATENATED MODULE: ./client/tasks/fills/PaymentGatewaySuggestions/components/List/index.js


// EXTERNAL MODULE: ./packages/wc-admin-settings/build-module/index.js
var wc_admin_settings_build_module = __webpack_require__(13);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(21);

// EXTERNAL MODULE: ./client/lib/notices/index.js
var notices = __webpack_require__(509);

// EXTERNAL MODULE: ./client/lib/sanitize-html/index.js
var sanitize_html = __webpack_require__(511);

// CONCATENATED MODULE: ./client/tasks/fills/PaymentGatewaySuggestions/components/Setup/Configure.js


/**
 * External dependencies
 */








/**
 * Internal dependencies
 */


const validateFields = (values, fields) => {
  const errors = {};

  const getField = fieldId => fields.find(field => field.id === fieldId);

  for (const [fieldKey, value] of Object.entries(values)) {
    const field = getField(fieldKey); // Matches any word that is capitalized aside from abrevitions like ID.

    const label = field.label.replace(/([A-Z][a-z]+)/g, val => val.toLowerCase());

    if (!(value || field.type === 'checkbox')) {
      errors[fieldKey] = `Please enter your ${label}`;
    }
  }

  return errors;
};
const Configure = ({
  markConfigured,
  paymentGateway
}) => {
  var _slot$fills;

  const {
    id,
    connectionUrl,
    setupHelpText,
    settingsUrl,
    title,
    requiredSettings: fields
  } = paymentGateway;
  const {
    createNotice
  } = Object(external_wp_data_["useDispatch"])('core/notices');
  const {
    updatePaymentGateway
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["PAYMENT_GATEWAYS_STORE_NAME"]);
  const slot = Object(external_wc_experimental_["useSlot"])(`woocommerce_payment_gateway_configure_${id}`);
  const hasFills = Boolean(slot === null || slot === void 0 ? void 0 : (_slot$fills = slot.fills) === null || _slot$fills === void 0 ? void 0 : _slot$fills.length);
  const {
    isUpdating
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      isPaymentGatewayUpdating
    } = select(external_wc_data_["PAYMENT_GATEWAYS_STORE_NAME"]);
    return {
      isUpdating: isPaymentGatewayUpdating()
    };
  });

  const handleSubmit = values => {
    updatePaymentGateway(id, {
      enabled: true,
      settings: values
    }).then(result => {
      if (result && result.id === id) {
        markConfigured(id);
        createNotice('success', Object(external_wp_i18n_["sprintf"])(
        /* translators: %s = title of the payment gateway */
        Object(external_wp_i18n_["__"])('%s configured successfully', 'woocommerce-admin'), title));
      }
    }).catch(() => {
      createNotice('error', Object(external_wp_i18n_["__"])('There was a problem saving your payment settings', 'woocommerce-admin'));
    });
  };

  const helpText = setupHelpText && Object(external_wp_element_["createElement"])("p", {
    dangerouslySetInnerHTML: Object(sanitize_html["a" /* default */])(setupHelpText)
  });
  const defaultForm = Object(external_wp_element_["createElement"])(external_wc_components_["DynamicForm"], {
    fields: fields,
    isBusy: isUpdating,
    onSubmit: handleSubmit,
    submitLabel: Object(external_wp_i18n_["__"])('Proceed', 'woocommerce-admin'),
    validate: values => validateFields(values, fields)
  });

  if (hasFills) {
    return Object(external_wp_element_["createElement"])(build_module["WooPaymentGatewayConfigure"].Slot, {
      fillProps: {
        defaultForm,
        defaultSubmit: handleSubmit,
        defaultFields: fields,
        markConfigured: () => markConfigured(id),
        paymentGateway
      },
      id: id
    });
  }

  if (connectionUrl) {
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, helpText, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      isPrimary: true,
      onClick: () => Object(external_wc_tracks_["recordEvent"])('tasklist_payment_connect_start', {
        payment_method: id
      }),
      href: connectionUrl
    }, Object(external_wp_i18n_["__"])('Connect', 'woocommerce-admin')));
  }

  if (fields.length) {
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, helpText, defaultForm);
  }

  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, helpText || Object(external_wp_element_["createElement"])("p", null, Object(external_wp_i18n_["__"])("You can manage this payment gateway's settings by clicking the button below", 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isPrimary: true,
    href: settingsUrl
  }, Object(external_wp_i18n_["__"])('Set up', 'woocommerce-admin')));
};
// EXTERNAL MODULE: ./client/tasks/fills/PaymentGatewaySuggestions/components/Setup/Setup.scss
var Setup = __webpack_require__(568);

// CONCATENATED MODULE: ./client/tasks/fills/PaymentGatewaySuggestions/components/Setup/Setup.js


/**
 * External dependencies
 */










/**
 * Internal dependencies
 */




const Setup_Setup = ({
  markConfigured,
  paymentGateway
}) => {
  var _slot$fills;

  const {
    id,
    plugins = [],
    title,
    postInstallScripts,
    installed: gatewayInstalled
  } = paymentGateway;
  const slot = Object(external_wc_experimental_["useSlot"])(`woocommerce_payment_gateway_setup_${id}`);
  const hasFills = Boolean(slot === null || slot === void 0 ? void 0 : (_slot$fills = slot.fills) === null || _slot$fills === void 0 ? void 0 : _slot$fills.length);
  const [isPluginLoaded, setIsPluginLoaded] = Object(external_wp_element_["useState"])(false);
  Object(external_wp_element_["useEffect"])(() => {
    Object(external_wc_tracks_["recordEvent"])('payments_task_stepper_view', {
      payment_method: id
    });
  }, []);
  const {
    invalidateResolutionForStoreSelector
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["PAYMENT_GATEWAYS_STORE_NAME"]);
  const {
    isOptionUpdating,
    isPaymentGatewayResolving,
    needsPluginInstall
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      isOptionsUpdating
    } = select(external_wc_data_["OPTIONS_STORE_NAME"]);
    const {
      isResolving
    } = select(external_wc_data_["PAYMENT_GATEWAYS_STORE_NAME"]);
    const activePlugins = select(external_wc_data_["PLUGINS_STORE_NAME"]).getActivePlugins();
    const pluginsToInstall = plugins.filter(m => !activePlugins.includes(m));
    return {
      isOptionUpdating: isOptionsUpdating(),
      isPaymentGatewayResolving: isResolving('getPaymentGateways'),
      needsPluginInstall: !!pluginsToInstall.length
    };
  });
  Object(external_wp_element_["useEffect"])(() => {
    if (needsPluginInstall) {
      return;
    }

    if (postInstallScripts && postInstallScripts.length) {
      const scriptPromises = postInstallScripts.map(script => Object(wc_admin_settings_build_module["d" /* enqueueScript */])(script));
      Promise.all(scriptPromises).then(() => {
        setIsPluginLoaded(true);
      });
      return;
    }

    setIsPluginLoaded(true);
  }, [postInstallScripts, needsPluginInstall]);
  const installStep = Object(external_wp_element_["useMemo"])(() => {
    return plugins && plugins.length ? {
      key: 'install',
      label: Object(external_wp_i18n_["sprintf"])(
      /* translators: %s = title of the payment gateway to install */
      Object(external_wp_i18n_["__"])('Install %s', 'woocommerce-admin'), title),
      content: Object(external_wp_element_["createElement"])(external_wc_components_["Plugins"], {
        onComplete: (installedPlugins, response) => {
          Object(notices["a" /* createNoticesFromResponse */])(response);
          invalidateResolutionForStoreSelector('getPaymentGateways');
          Object(external_wc_tracks_["recordEvent"])('tasklist_payment_install_method', {
            plugins
          });
        },
        onError: (errors, response) => Object(notices["a" /* createNoticesFromResponse */])(response),
        autoInstall: true,
        pluginSlugs: plugins
      })
    } : null;
  }, []);
  const configureStep = Object(external_wp_element_["useMemo"])(() => ({
    key: 'configure',
    label: Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('Configure your %(title)s account', 'woocommerce-admin'), {
      title
    }),
    content: gatewayInstalled ? Object(external_wp_element_["createElement"])(Configure, {
      markConfigured: markConfigured,
      paymentGateway: paymentGateway
    }) : null
  }), [gatewayInstalled]);
  const stepperPending = needsPluginInstall || isOptionUpdating || isPaymentGatewayResolving || !isPluginLoaded;
  const defaultStepper = Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
    isVertical: true,
    isPending: stepperPending,
    currentStep: needsPluginInstall ? 'install' : 'configure',
    steps: [installStep, configureStep].filter(Boolean)
  });
  return Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
    className: "woocommerce-task-payment-method woocommerce-task-card"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], null, hasFills ? Object(external_wp_element_["createElement"])(build_module["WooPaymentGatewaySetup"].Slot, {
    fillProps: {
      defaultStepper,
      defaultInstallStep: installStep,
      defaultConfigureStep: configureStep,
      markConfigured: () => markConfigured(id),
      paymentGateway
    },
    id: id
  }) : defaultStepper));
};
// CONCATENATED MODULE: ./client/tasks/fills/PaymentGatewaySuggestions/components/Setup/Placeholder.js


/**
 * External dependencies
 */



const Placeholder_Placeholder = () => {
  const classes = classnames_default()('is-loading', 'woocommerce-task-payment-method', 'woocommerce-task-card');
  return Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
    "aria-hidden": "true",
    className: classes
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], null, Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
    isVertical: true,
    currentStep: 'none',
    steps: [{
      key: 'first',
      label: ''
    }, {
      key: 'second',
      label: ''
    }]
  })));
};
// CONCATENATED MODULE: ./client/tasks/fills/PaymentGatewaySuggestions/components/Setup/index.js


// EXTERNAL MODULE: ./client/tasks/fills/PaymentGatewaySuggestions/components/WCPay/index.js + 2 modules
var WCPay = __webpack_require__(546);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(36);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./client/tasks/fills/PaymentGatewaySuggestions/plugins/Bacs.js



/**
 * External dependencies
 */







const initialFormValues = {
  account_name: '',
  account_number: '',
  bank_name: '',
  sort_code: '',
  iban: '',
  bic: ''
};

const BacsPaymentGatewaySetup = () => {
  const isUpdating = Object(external_wp_data_["useSelect"])(select => {
    return select(external_wc_data_["OPTIONS_STORE_NAME"]).isOptionsUpdating();
  });
  const {
    createNotice
  } = Object(external_wp_data_["useDispatch"])('core/notices');
  const {
    updateOptions
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["OPTIONS_STORE_NAME"]);

  const validate = values => {
    const errors = {};

    if (!values.account_number && !values.iban) {
      errors.account_number = errors.iban = Object(external_wp_i18n_["__"])('Please enter an account number or IBAN', 'woocommerce-admin');
    }

    return errors;
  };

  const updateSettings = async (values, markConfigured) => {
    const update = await updateOptions({
      woocommerce_bacs_settings: {
        enabled: 'yes'
      },
      woocommerce_bacs_accounts: [values]
    });

    if (update.success) {
      markConfigured();
      createNotice('success', Object(external_wp_i18n_["__"])('Direct bank transfer details added successfully', 'woocommerce-admin'));
      return;
    }

    createNotice('error', Object(external_wp_i18n_["__"])('There was a problem saving your payment settings', 'woocommerce-admin'));
  };

  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(build_module["WooPaymentGatewaySetup"], {
    id: "bacs"
  }, ({
    markConfigured
  }) => {
    return Object(external_wp_element_["createElement"])(external_wc_components_["Form"], {
      initialValues: initialFormValues,
      onSubmit: values => updateSettings(values, markConfigured),
      validate: validate
    }, ({
      getInputProps,
      handleSubmit
    }) => {
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["H"], null, Object(external_wp_i18n_["__"])('Add your bank details', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("p", null, Object(external_wp_i18n_["__"])('These details are required to receive payments via bank transfer', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-task-payment-method__fields"
      }, Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
        label: Object(external_wp_i18n_["__"])('Account name', 'woocommerce-admin'),
        required: true
      }, getInputProps('account_name'))), Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
        label: Object(external_wp_i18n_["__"])('Account number', 'woocommerce-admin'),
        required: true
      }, getInputProps('account_number'))), Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
        label: Object(external_wp_i18n_["__"])('Bank name', 'woocommerce-admin'),
        required: true
      }, getInputProps('bank_name'))), Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
        label: Object(external_wp_i18n_["__"])('Sort code', 'woocommerce-admin'),
        required: true
      }, getInputProps('sort_code'))), Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
        label: Object(external_wp_i18n_["__"])('IBAN', 'woocommerce-admin'),
        required: true
      }, getInputProps('iban'))), Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], extends_default()({
        label: Object(external_wp_i18n_["__"])('BIC / Swift', 'woocommerce-admin'),
        required: true
      }, getInputProps('bic')))), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isPrimary: true,
        isBusy: isUpdating,
        onClick: handleSubmit
      }, Object(external_wp_i18n_["__"])('Save', 'woocommerce-admin')));
    });
  }));
};

Object(external_wp_plugins_["registerPlugin"])('wc-admin-payment-gateway-setup-bacs', {
  render: BacsPaymentGatewaySetup,
  scope: 'woocommerce-tasks'
});
// EXTERNAL MODULE: ./client/tasks/fills/PaymentGatewaySuggestions/payment-gateway-suggestions.scss
var payment_gateway_suggestions = __webpack_require__(569);

// CONCATENATED MODULE: ./client/tasks/fills/PaymentGatewaySuggestions/index.js


/**
 * External dependencies
 */







/**
 * Internal dependencies
 */






const PaymentGatewaySuggestions = ({
  onComplete,
  query
}) => {
  const {
    updatePaymentGateway
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["PAYMENT_GATEWAYS_STORE_NAME"]);
  const {
    getPaymentGateway,
    paymentGatewaySuggestions,
    installedPaymentGateways,
    isResolving
  } = Object(external_wp_data_["useSelect"])(select => {
    return {
      getPaymentGateway: select(external_wc_data_["PAYMENT_GATEWAYS_STORE_NAME"]).getPaymentGateway,
      getOption: select(external_wc_data_["OPTIONS_STORE_NAME"]).getOption,
      installedPaymentGateways: select(external_wc_data_["PAYMENT_GATEWAYS_STORE_NAME"]).getPaymentGateways(),
      isResolving: select(external_wc_data_["ONBOARDING_STORE_NAME"]).isResolving('getPaymentGatewaySuggestions'),
      paymentGatewaySuggestions: select(external_wc_data_["ONBOARDING_STORE_NAME"]).getPaymentGatewaySuggestions()
    };
  }, []);

  const getEnrichedPaymentGateways = () => {
    const mappedPaymentGateways = installedPaymentGateways.reduce((map, gateway) => {
      map[gateway.id] = gateway;
      return map;
    }, {});
    return paymentGatewaySuggestions.reduce((map, suggestion) => {
      // A colon ':' is used sometimes to have multiple configs for the same gateway ex: woocommerce_payments:us.
      const id = (suggestion.id || '').split(':')[0];
      const installedGateway = mappedPaymentGateways[id] ? mappedPaymentGateways[id] : {};
      const enrichedSuggestion = {
        installed: !!mappedPaymentGateways[id],
        postInstallScripts: installedGateway.post_install_scripts,
        enabled: installedGateway.enabled || false,
        needsSetup: installedGateway.needs_setup,
        settingsUrl: installedGateway.settings_url,
        connectionUrl: installedGateway.connection_url,
        setupHelpText: installedGateway.setup_help_text,
        title: installedGateway.title,
        requiredSettings: installedGateway.required_settings_keys ? installedGateway.required_settings_keys.map(settingKey => installedGateway.settings[settingKey]).filter(Boolean) : [],
        ...suggestion
      };
      map.set(suggestion.id, enrichedSuggestion);
      return map;
    }, new Map());
  };

  const paymentGateways = Object(external_wp_element_["useMemo"])(getEnrichedPaymentGateways, [installedPaymentGateways, paymentGatewaySuggestions]);
  Object(external_wp_element_["useEffect"])(() => {
    if (paymentGateways.size) {
      Object(external_wc_tracks_["recordEvent"])('tasklist_payments_options', {
        options: Array.from(paymentGateways.values()).map(gateway => gateway.id)
      });
    }
  }, [paymentGateways]);

  const enablePaymentGateway = id => {
    if (!id) {
      return;
    }

    const gateway = getPaymentGateway(id);

    if (!gateway || gateway.enabled) {
      return;
    }

    updatePaymentGateway(id, {
      enabled: true
    }).then(() => {
      onComplete();
    });
  };

  const markConfigured = Object(external_wp_element_["useCallback"])(async id => {
    if (!paymentGateways.get(id)) {
      throw `Payment gateway ${id} not found in available gateways list`;
    }

    Object(external_wc_tracks_["recordEvent"])('tasklist_payment_connect_method', {
      payment_method: id
    });
    enablePaymentGateway(id);
  }, [paymentGateways]);
  const recommendation = Object(external_wp_element_["useMemo"])(() => Array.from(paymentGateways.values()).filter(gateway => gateway.recommendation_priority).sort((a, b) => a.recommendation_priority - b.recommendation_priority).map(gateway => gateway.id).shift(), [paymentGateways]);
  const currentGateway = Object(external_wp_element_["useMemo"])(() => {
    if (!query.id || isResolving || !paymentGateways.size) {
      return null;
    }

    const gateway = paymentGateways.get(query.id);

    if (!gateway) {
      throw `Current gateway ${query.id} not found in available gateways list`;
    }

    return gateway;
  }, [isResolving, query, paymentGateways]);
  const [wcPayGateway, enabledGateways, additionalGateways] = Object(external_wp_element_["useMemo"])(() => Array.from(paymentGateways.values()).reduce((all, gateway) => {
    var _gateway$plugins;

    const [wcPay, enabled, additional] = all; // WCPay is handled separately when not installed and configured

    if (((_gateway$plugins = gateway.plugins) === null || _gateway$plugins === void 0 ? void 0 : _gateway$plugins.length) === 1 && gateway.plugins[0] === 'woocommerce-payments' && !(gateway.installed && !gateway.needsSetup)) {
      wcPay.push(gateway);
    } else if (gateway.enabled) {
      enabled.push(gateway);
    } else {
      additional.push(gateway);
    }

    return all;
  }, [[], [], []]), [paymentGateways]);

  if (query.id && !currentGateway) {
    return Object(external_wp_element_["createElement"])(Placeholder_Placeholder, null);
  }

  if (currentGateway) {
    return Object(external_wp_element_["createElement"])(Setup_Setup, {
      paymentGateway: currentGateway,
      markConfigured: markConfigured
    });
  }

  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-task-payments"
  }, !paymentGateways.size && Object(external_wp_element_["createElement"])(Placeholder, null), !!wcPayGateway.length && Object(external_wp_element_["createElement"])(WCPay["a" /* WCPaySuggestion */], {
    paymentGateway: wcPayGateway[0]
  }), !!enabledGateways.length && Object(external_wp_element_["createElement"])(List_List, {
    heading: Object(external_wp_i18n_["__"])('Enabled payment gateways', 'woocommerce-admin'),
    recommendation: recommendation,
    paymentGateways: enabledGateways
  }), !!additionalGateways.length && Object(external_wp_element_["createElement"])(List_List, {
    heading: Object(external_wp_i18n_["__"])('Additional payment gateways', 'woocommerce-admin'),
    recommendation: recommendation,
    paymentGateways: additionalGateways,
    markConfigured: markConfigured
  }));
};
Object(external_wp_plugins_["registerPlugin"])('wc-admin-onboarding-task-payments', {
  scope: 'woocommerce-tasks',
  render: () => Object(external_wp_element_["createElement"])(build_module["WooOnboardingTask"], {
    id: "payments"
  }, ({
    onComplete,
    query
  }) => Object(external_wp_element_["createElement"])(PaymentGatewaySuggestions, {
    onComplete: onComplete,
    query: query
  }))
});
// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__(19);
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(14);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/interpolate-components/lib/index.js
var lib = __webpack_require__(18);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./client/dashboard/components/connect/index.js


/**
 * External dependencies
 */







class connect_Connect extends external_wp_element_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isConnecting: false
    };
    this.connectJetpack = this.connectJetpack.bind(this);
    props.setIsPending(true);
  }

  componentDidUpdate(prevProps) {
    const {
      createNotice,
      error,
      isRequesting,
      onError,
      setIsPending
    } = this.props;

    if (prevProps.isRequesting && !isRequesting) {
      setIsPending(false);
    }

    if (error && error !== prevProps.error) {
      if (onError) {
        onError();
      }

      createNotice('error', error);
    }
  }

  async connectJetpack() {
    const {
      jetpackConnectUrl,
      onConnect
    } = this.props;
    this.setState({
      isConnecting: true
    }, () => {
      if (onConnect) {
        onConnect();
      }

      window.location = jetpackConnectUrl;
    });
  }

  render() {
    const {
      hasErrors,
      isRequesting,
      onSkip,
      skipText,
      onAbort,
      abortText
    } = this.props;
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, hasErrors ? Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      isPrimary: true,
      onClick: () => window.location.reload()
    }, Object(external_wp_i18n_["__"])('Retry', 'woocommerce-admin')) : Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      disabled: isRequesting,
      isBusy: this.state.isConnecting,
      isPrimary: true,
      onClick: this.connectJetpack
    }, Object(external_wp_i18n_["__"])('Connect', 'woocommerce-admin')), onSkip && Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      onClick: onSkip
    }, skipText || Object(external_wp_i18n_["__"])('No thanks', 'woocommerce-admin')), onAbort && Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      onClick: onAbort
    }, abortText || Object(external_wp_i18n_["__"])('Abort', 'woocommerce-admin')));
  }

}
connect_Connect.propTypes = {
  /**
   * Method to create a displayed notice.
   */
  createNotice: prop_types_default.a.func.isRequired,

  /**
   * Human readable error message.
   */
  error: prop_types_default.a.string,

  /**
   * Bool to determine if the "Retry" button should be displayed.
   */
  hasErrors: prop_types_default.a.bool,

  /**
   * Bool to check if the connection URL is still being requested.
   */
  isRequesting: prop_types_default.a.bool,

  /**
   * Generated Jetpack connection URL.
   */
  jetpackConnectUrl: prop_types_default.a.string,

  /**
   * Called before the redirect to Jetpack.
   */
  onConnect: prop_types_default.a.func,

  /**
   * Called when the plugin has an error retrieving the jetpackConnectUrl.
   */
  onError: prop_types_default.a.func,

  /**
   * Called when the plugin connection is skipped.
   */
  onSkip: prop_types_default.a.func,

  /**
   * Redirect URL to encode as a URL param for the connection path.
   */
  redirectUrl: prop_types_default.a.string,

  /**
   * Text used for the skip connection button.
   */
  skipText: prop_types_default.a.string,

  /**
   * Control the `isPending` logic of the parent containing the Stepper.
   */
  setIsPending: prop_types_default.a.func,

  /**
   * Called when the plugin connection is aborted.
   */
  onAbort: prop_types_default.a.func,

  /**
   * Text used for the abort connection button.
   */
  abortText: prop_types_default.a.string
};
connect_Connect.defaultProps = {
  setIsPending: () => {}
};
/* harmony default export */ var connect = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])((select, props) => {
  const {
    getJetpackConnectUrl,
    isPluginsRequesting,
    getPluginsError
  } = select(external_wc_data_["PLUGINS_STORE_NAME"]);
  const queryArgs = {
    redirect_url: props.redirectUrl || window.location.href
  };
  const isRequesting = isPluginsRequesting('getJetpackConnectUrl');
  const error = getPluginsError('getJetpackConnectUrl') || '';
  const jetpackConnectUrl = getJetpackConnectUrl(queryArgs);
  return {
    error,
    isRequesting,
    jetpackConnectUrl
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    createNotice
  } = dispatch('core/notices');
  return {
    createNotice
  };
}))(connect_Connect));
// EXTERNAL MODULE: ./client/dashboard/utils.js
var utils = __webpack_require__(62);

// EXTERNAL MODULE: ./client/dashboard/components/settings/general/store-address.js
var store_address = __webpack_require__(534);

// CONCATENATED MODULE: ./client/tasks/fills/steps/location.js


/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


class location_StoreLocation extends external_wp_element_["Component"] {
  constructor() {
    super(...arguments);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(values) {
    const {
      onComplete,
      createNotice,
      isSettingsError,
      updateAndPersistSettingsForGroup,
      settings
    } = this.props;
    await updateAndPersistSettingsForGroup('general', {
      general: { ...settings,
        woocommerce_store_address: values.addressLine1,
        woocommerce_store_address_2: values.addressLine2,
        woocommerce_default_country: values.countryState,
        woocommerce_store_city: values.city,
        woocommerce_store_postcode: values.postCode
      }
    });

    if (!isSettingsError) {
      onComplete(values);
    } else {
      createNotice('error', Object(external_wp_i18n_["__"])('There was a problem saving your store location', 'woocommerce-admin'));
    }
  }

  getInitialValues() {
    const {
      settings
    } = this.props;
    const {
      woocommerce_store_address: storeAddress,
      woocommerce_store_address_2: storeAddress2,
      woocommerce_store_city: storeCity,
      woocommerce_default_country: defaultCountry,
      woocommerce_store_postcode: storePostcode
    } = settings;
    return {
      addressLine1: storeAddress || '',
      addressLine2: storeAddress2 || '',
      city: storeCity || '',
      countryState: defaultCountry || '',
      postCode: storePostcode || ''
    };
  }

  render() {
    const {
      isSettingsRequesting
    } = this.props;

    if (isSettingsRequesting) {
      return null;
    }

    return Object(external_wp_element_["createElement"])(external_wc_components_["Form"], {
      initialValues: this.getInitialValues(),
      onSubmit: this.onSubmit,
      validate: store_address["b" /* validateStoreAddress */]
    }, ({
      getInputProps,
      handleSubmit,
      setValue
    }) => Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(store_address["a" /* StoreAddress */], {
      getInputProps: getInputProps,
      setValue: setValue
    }), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      isPrimary: true,
      onClick: handleSubmit
    }, Object(external_wp_i18n_["__"])('Continue', 'woocommerce-admin'))));
  }

}
// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js + 2 modules
var icon = __webpack_require__(116);

// EXTERNAL MODULE: external ["wp","primitives"]
var external_wp_primitives_ = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/globe.js


/**
 * WordPress dependencies
 */

var globe = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M9 0C4.03 0 0 4.03 0 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zM1.11 9.68h2.51c.04.91.167 1.814.38 2.7H1.84c-.403-.85-.65-1.764-.73-2.7zm8.57-5.4V1.19c.964.366 1.756 1.08 2.22 2 .205.347.386.708.54 1.08l-2.76.01zm3.22 1.35c.232.883.37 1.788.41 2.7H9.68v-2.7h3.22zM8.32 1.19v3.09H5.56c.154-.372.335-.733.54-1.08.462-.924 1.255-1.64 2.22-2.01zm0 4.44v2.7H4.7c.04-.912.178-1.817.41-2.7h3.21zm-4.7 2.69H1.11c.08-.936.327-1.85.73-2.7H4c-.213.886-.34 1.79-.38 2.7zM4.7 9.68h3.62v2.7H5.11c-.232-.883-.37-1.788-.41-2.7zm3.63 4v3.09c-.964-.366-1.756-1.08-2.22-2-.205-.347-.386-.708-.54-1.08l2.76-.01zm1.35 3.09v-3.04h2.76c-.154.372-.335.733-.54 1.08-.464.92-1.256 1.634-2.22 2v-.04zm0-4.44v-2.7h3.62c-.04.912-.178 1.817-.41 2.7H9.68zm4.71-2.7h2.51c-.08.936-.327 1.85-.73 2.7H14c.21-.87.337-1.757.38-2.65l.01-.05zm0-1.35c-.046-.894-.176-1.78-.39-2.65h2.16c.403.85.65 1.764.73 2.7l-2.5-.05zm1-4H13.6c-.324-.91-.793-1.76-1.39-2.52 1.244.56 2.325 1.426 3.14 2.52h.04zm-9.6-2.52c-.597.76-1.066 1.61-1.39 2.52H2.65c.815-1.094 1.896-1.96 3.14-2.52zm-3.15 12H4.4c.324.91.793 1.76 1.39 2.52-1.248-.567-2.33-1.445-3.14-2.55l-.01.03zm9.56 2.52c.597-.76 1.066-1.61 1.39-2.52h1.76c-.82 1.08-1.9 1.933-3.14 2.48l-.01.04z"
}));
/* harmony default export */ var library_globe = (globe);
//# sourceMappingURL=globe.js.map
// EXTERNAL MODULE: ./client/lib/currency-context.js
var currency_context = __webpack_require__(503);

// CONCATENATED MODULE: ./client/tasks/fills/shipping/rates.js



/**
 * External dependencies
 */








/**
 * Internal dependencies
 */



class rates_ShippingRates extends external_wp_element_["Component"] {
  constructor() {
    super(...arguments);
    this.updateShippingZones = this.updateShippingZones.bind(this);
  }

  getShippingMethods(zone, type = null) {
    // Sometimes the wc/v3/shipping/zones response does not include a methods attribute, return early if so.
    if (!zone || !zone.methods || !Array.isArray(zone.methods)) {
      return [];
    }

    if (!type) {
      return zone.methods;
    }

    return zone.methods ? zone.methods.filter(method => method.method_id === type) : [];
  }

  disableShippingMethods(zone, methods) {
    if (!methods.length) {
      return;
    }

    methods.forEach(method => {
      external_wp_apiFetch_default()({
        method: 'POST',
        path: `/wc/v3/shipping/zones/${zone.id}/methods/${method.instance_id}`,
        data: {
          enabled: false
        }
      });
    });
  }

  async updateShippingZones(values) {
    const {
      createNotice,
      shippingZones
    } = this.props;
    let restOfTheWorld = false;
    let shippingCost = false;
    shippingZones.forEach(zone => {
      if (zone.id === 0) {
        restOfTheWorld = zone.toggleable && values[`${zone.id}_enabled`];
      } else {
        shippingCost = values[`${zone.id}_rate`] !== '' && parseFloat(values[`${zone.id}_rate`]) !== parseFloat(0);
      }

      const shippingMethods = this.getShippingMethods(zone);
      const methodType = parseFloat(values[`${zone.id}_rate`]) === parseFloat(0) ? 'free_shipping' : 'flat_rate';
      const shippingMethod = this.getShippingMethods(zone, methodType).length ? this.getShippingMethods(zone, methodType)[0] : null;

      if (zone.toggleable && !values[`${zone.id}_enabled`]) {
        // Disable any shipping methods that exist if toggled off.
        this.disableShippingMethods(zone, shippingMethods);
        return;
      } else if (shippingMethod) {
        // Disable all methods except the one being updated.
        const methodsToDisable = shippingMethods.filter(method => method.instance_id !== shippingMethod.instance_id);
        this.disableShippingMethods(zone, methodsToDisable);
      }

      external_wp_apiFetch_default()({
        method: 'POST',
        path: shippingMethod ? // Update the first existing method if one exists, otherwise create a new one.
        `/wc/v3/shipping/zones/${zone.id}/methods/${shippingMethod.instance_id}` : `/wc/v3/shipping/zones/${zone.id}/methods`,
        data: {
          method_id: methodType,
          enabled: true,
          settings: {
            cost: values[`${zone.id}_rate`]
          }
        }
      });
    });
    Object(external_wc_tracks_["recordEvent"])('tasklist_shipping_set_costs', {
      shipping_cost: shippingCost,
      rest_world: restOfTheWorld
    });
    createNotice('success', Object(external_wp_i18n_["__"])('Your shipping rates have been updated', 'woocommerce-admin'));
    this.props.onComplete();
  }

  renderInputPrefix() {
    const {
      symbolPosition,
      symbol
    } = this.context.getCurrencyConfig();

    if (symbolPosition.indexOf('right') === 0) {
      return null;
    }

    return Object(external_wp_element_["createElement"])("span", {
      className: "woocommerce-shipping-rate__control-prefix"
    }, symbol);
  }

  renderInputSuffix(rate) {
    const {
      symbolPosition,
      symbol
    } = this.context.getCurrencyConfig();

    if (symbolPosition.indexOf('right') === 0) {
      return Object(external_wp_element_["createElement"])("span", {
        className: "woocommerce-shipping-rate__control-suffix"
      }, symbol);
    }

    return parseFloat(rate) === parseFloat(0) ? Object(external_wp_element_["createElement"])("span", {
      className: "woocommerce-shipping-rate__control-suffix"
    }, Object(external_wp_i18n_["__"])('Free shipping', 'woocommerce-admin')) : null;
  }

  getFormattedRate(value) {
    const {
      formatDecimalString
    } = this.context;
    const currencyString = formatDecimalString(value);

    if (!value.length || !currencyString.length) {
      return formatDecimalString(0);
    }

    return formatDecimalString(value);
  }

  getInitialValues() {
    const {
      formatDecimalString
    } = this.context;
    const values = {};
    this.props.shippingZones.forEach(zone => {
      const shippingMethods = this.getShippingMethods(zone);
      const rate = shippingMethods.length && shippingMethods[0].settings.cost ? this.getFormattedRate(shippingMethods[0].settings.cost.value) : formatDecimalString(0);
      values[`${zone.id}_rate`] = rate;

      if (shippingMethods.length && shippingMethods[0].enabled) {
        values[`${zone.id}_enabled`] = true;
      } else {
        values[`${zone.id}_enabled`] = false;
      }
    });
    return values;
  }

  validate(values) {
    const errors = {};
    const rates = Object.keys(values).filter(field => field.endsWith('_rate'));
    rates.forEach(rate => {
      if (values[rate] < 0) {
        errors[rate] = Object(external_wp_i18n_["__"])('Shipping rates can not be negative numbers.', 'woocommerce-admin');
      }
    });
    return errors;
  }

  render() {
    const {
      buttonText,
      shippingZones
    } = this.props;

    if (!shippingZones.length) {
      return null;
    }

    return Object(external_wp_element_["createElement"])(external_wc_components_["Form"], {
      initialValues: this.getInitialValues(),
      onSubmit: this.updateShippingZones,
      validate: this.validate
    }, ({
      getInputProps,
      handleSubmit,
      setTouched,
      setValue,
      values
    }) => {
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-shipping-rates"
      }, shippingZones.map(zone => Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-shipping-rate",
        key: zone.id
      }, Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-shipping-rate__icon"
      }, zone.locations ? zone.locations.map(location => Object(external_wp_element_["createElement"])(external_wc_components_["Flag"], {
        size: 24,
        code: location.code,
        key: location.code
      })) : // Icon used for zones without locations or "Rest of the world".
      Object(external_wp_element_["createElement"])(icon["a" /* default */], {
        icon: library_globe
      })), Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-shipping-rate__main"
      }, zone.toggleable ? Object(external_wp_element_["createElement"])("label", {
        htmlFor: `woocommerce-shipping-rate__toggle-${zone.id}`,
        className: "woocommerce-shipping-rate__name"
      }, zone.name, Object(external_wp_element_["createElement"])(external_wp_components_["FormToggle"], extends_default()({
        id: `woocommerce-shipping-rate__toggle-${zone.id}`
      }, getInputProps(`${zone.id}_enabled`)))) : Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-shipping-rate__name"
      }, zone.name), (!zone.toggleable || values[`${zone.id}_enabled`]) && Object(external_wp_element_["createElement"])(external_wc_components_["TextControlWithAffixes"], extends_default()({
        label: Object(external_wp_i18n_["__"])('Shipping cost', 'woocommerce-admin'),
        required: true
      }, getInputProps(`${zone.id}_rate`), {
        onBlur: () => {
          setTouched(`${zone.id}_rate`);
          setValue(`${zone.id}_rate`, this.getFormattedRate(values[`${zone.id}_rate`]));
        },
        prefix: this.renderInputPrefix(),
        suffix: this.renderInputSuffix(values[`${zone.id}_rate`]),
        className: "muriel-input-text woocommerce-shipping-rate__control-wrapper"
      })))))), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isPrimary: true,
        onClick: handleSubmit
      }, buttonText || Object(external_wp_i18n_["__"])('Update', 'woocommerce-admin')));
    });
  }

}

rates_ShippingRates.propTypes = {
  /**
   * Text displayed on the primary button.
   */
  buttonText: prop_types_default.a.string,

  /**
   * Function used to mark the step complete.
   */
  onComplete: prop_types_default.a.func.isRequired,

  /**
   * Function to create a transient notice in the store.
   */
  createNotice: prop_types_default.a.func.isRequired,

  /**
   * Array of shipping zones returned from the WC REST API with added
   * `methods` and `locations` properties appended from separate API calls.
   */
  shippingZones: prop_types_default.a.array
};
rates_ShippingRates.defaultProps = {
  shippingZones: []
};
rates_ShippingRates.contextType = currency_context["a" /* CurrencyContext */];
/* harmony default export */ var shipping_rates = (rates_ShippingRates);
// EXTERNAL MODULE: ./client/tasks/fills/shipping/shipping.scss
var shipping = __webpack_require__(570);

// CONCATENATED MODULE: ./client/tasks/fills/shipping/index.js


/**
 * External dependencies
 */















/**
 * Internal dependencies
 */







class shipping_Shipping extends external_wp_element_["Component"] {
  constructor(props) {
    super(props);
    this.initialState = {
      isPending: false,
      step: 'store_location',
      shippingZones: []
    }; // Cache active plugins to prevent removal mid-step.

    this.activePlugins = props.activePlugins;
    this.state = this.initialState;
    this.completeStep = this.completeStep.bind(this);
  }

  componentDidMount() {
    this.reset();
  }

  reset() {
    this.setState(this.initialState);
  }

  async fetchShippingZones() {
    this.setState({
      isPending: true
    });
    const {
      countryCode,
      countryName
    } = this.props; // @todo The following fetches for shipping information should be moved into
    // @woocommerce/data to make these methods and states more readily available.

    const shippingZones = [];
    const zones = await external_wp_apiFetch_default()({
      path: '/wc/v3/shipping/zones'
    });
    let hasCountryZone = false;
    await Promise.all(zones.map(async zone => {
      // "Rest of the world zone"
      if (zone.id === 0) {
        zone.methods = await external_wp_apiFetch_default()({
          path: `/wc/v3/shipping/zones/${zone.id}/methods`
        });
        zone.name = Object(external_wp_i18n_["__"])('Rest of the world', 'woocommerce-admin');
        zone.toggleable = true;
        shippingZones.push(zone);
        return;
      } // Return any zone with a single location matching the country zone.


      zone.locations = await external_wp_apiFetch_default()({
        path: `/wc/v3/shipping/zones/${zone.id}/locations`
      });
      const countryLocation = zone.locations.find(location => countryCode === location.code);

      if (countryLocation) {
        zone.methods = await external_wp_apiFetch_default()({
          path: `/wc/v3/shipping/zones/${zone.id}/methods`
        });
        shippingZones.push(zone);
        hasCountryZone = true;
      }
    })); // Create the default store country zone if it doesn't exist.

    if (!hasCountryZone) {
      const zone = await external_wp_apiFetch_default()({
        method: 'POST',
        path: '/wc/v3/shipping/zones',
        data: {
          name: countryName
        }
      });
      zone.locations = await external_wp_apiFetch_default()({
        method: 'POST',
        path: `/wc/v3/shipping/zones/${zone.id}/locations`,
        data: [{
          code: countryCode,
          type: 'country'
        }]
      });
      shippingZones.push(zone);
    }

    shippingZones.reverse();
    this.setState({
      isPending: false,
      shippingZones
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      countryCode,
      settings
    } = this.props;
    const {
      woocommerce_store_address: storeAddress,
      woocommerce_default_country: defaultCountry,
      woocommerce_store_postcode: storePostCode
    } = settings;
    const {
      step
    } = this.state;

    if (step === 'rates' && (prevProps.countryCode !== countryCode || prevState.step !== 'rates')) {
      this.fetchShippingZones();
    }

    const isCompleteAddress = Boolean(storeAddress && defaultCountry && storePostCode);

    if (step === 'store_location' && isCompleteAddress) {
      this.completeStep();
    }
  }

  completeStep() {
    const {
      createNotice,
      onComplete
    } = this.props;
    const {
      step
    } = this.state;
    const steps = this.getSteps();
    const currentStepIndex = steps.findIndex(s => s.key === step);
    const nextStep = steps[currentStepIndex + 1];

    if (nextStep) {
      this.setState({
        step: nextStep.key
      });
    } else {
      createNotice('success', Object(external_wp_i18n_["__"])("📦 Shipping is done! Don't worry, you can always change it later", 'woocommerce-admin'));
      onComplete();
    }
  }

  getPluginsToActivate() {
    const {
      countryCode
    } = this.props;
    const plugins = [];

    if (['GB', 'CA', 'AU'].includes(countryCode)) {
      plugins.push('woocommerce-shipstation-integration');
    } else if (countryCode === 'US') {
      plugins.push('woocommerce-services');
      plugins.push('jetpack');
    }

    return Object(external_lodash_["difference"])(plugins, this.activePlugins);
  }

  getSteps() {
    const {
      countryCode,
      createNotice,
      invalidateResolutionForStoreSelector,
      isJetpackConnected,
      onComplete,
      optimisticallyCompleteTask,
      settings,
      task,
      updateAndPersistSettingsForGroup
    } = this.props;
    const pluginsToActivate = this.getPluginsToActivate();
    const requiresJetpackConnection = !isJetpackConnected && countryCode === 'US';
    const steps = [{
      key: 'store_location',
      label: Object(external_wp_i18n_["__"])('Set store location', 'woocommerce-admin'),
      description: Object(external_wp_i18n_["__"])('The address from which your business operates', 'woocommerce-admin'),
      content: Object(external_wp_element_["createElement"])(location_StoreLocation, {
        createNotice: createNotice,
        updateAndPersistSettingsForGroup: updateAndPersistSettingsForGroup,
        settings: settings,
        onComplete: values => {
          const country = Object(utils["b" /* getCountryCode */])(values.countryState);
          Object(external_wc_tracks_["recordEvent"])('tasklist_shipping_set_location', {
            country
          });
          this.completeStep();
        }
      }),
      visible: true
    }, {
      key: 'rates',
      label: Object(external_wp_i18n_["__"])('Set shipping costs', 'woocommerce-admin'),
      description: Object(external_wp_i18n_["__"])('Define how much customers pay to ship to different destinations', 'woocommerce-admin'),
      content: Object(external_wp_element_["createElement"])(shipping_rates, {
        buttonText: pluginsToActivate.length || requiresJetpackConnection ? Object(external_wp_i18n_["__"])('Proceed', 'woocommerce-admin') : Object(external_wp_i18n_["__"])('Complete task', 'woocommerce-admin'),
        shippingZones: this.state.shippingZones,
        onComplete: () => {
          const {
            id
          } = task;
          optimisticallyCompleteTask(id);
          invalidateResolutionForStoreSelector();
          this.completeStep();
        },
        createNotice: createNotice
      }),
      visible: settings.woocommerce_ship_to_countries === 'disabled' ? false : true
    }, {
      key: 'label_printing',
      label: Object(external_wp_i18n_["__"])('Enable shipping label printing', 'woocommerce-admin'),
      description: pluginsToActivate.includes('woocommerce-shipstation-integration') ? lib_default()({
        mixedString: Object(external_wp_i18n_["__"])('We recommend using ShipStation to save time at the post office by printing your shipping ' + 'labels at home. Try ShipStation free for 30 days. {{link}}Learn more{{/link}}.', 'woocommerce-admin'),
        components: {
          link: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
            href: "https://woocommerce.com/products/shipstation-integration?utm_medium=product",
            target: "_blank",
            type: "external"
          })
        }
      }) : Object(external_wp_i18n_["__"])('With WooCommerce Shipping you can save time ' + 'by printing your USPS and DHL Express shipping labels at home', 'woocommerce-admin'),
      content: Object(external_wp_element_["createElement"])(external_wc_components_["Plugins"], {
        onComplete: (plugins, response) => {
          Object(notices["a" /* createNoticesFromResponse */])(response);
          Object(external_wc_tracks_["recordEvent"])('tasklist_shipping_label_printing', {
            install: true,
            plugins_to_activate: pluginsToActivate
          });
          this.completeStep();
        },
        onError: (errors, response) => Object(notices["a" /* createNoticesFromResponse */])(response),
        onSkip: () => {
          Object(external_wc_tracks_["recordEvent"])('tasklist_shipping_label_printing', {
            install: false,
            plugins_to_activate: pluginsToActivate
          });
          Object(external_wc_navigation_["getHistory"])().push(Object(external_wc_navigation_["getNewPath"])({}, '/', {}));
          onComplete();
        },
        pluginSlugs: pluginsToActivate
      }),
      visible: pluginsToActivate.length
    }, {
      key: 'connect',
      label: Object(external_wp_i18n_["__"])('Connect your store', 'woocommerce-admin'),
      description: Object(external_wp_i18n_["__"])('Connect your store to WordPress.com to enable label printing', 'woocommerce-admin'),
      content: Object(external_wp_element_["createElement"])(connect, {
        redirectUrl: Object(wc_admin_settings_build_module["e" /* getAdminLink */])('admin.php?page=wc-admin'),
        completeStep: this.completeStep,
        onConnect: () => {
          Object(external_wc_tracks_["recordEvent"])('tasklist_shipping_connect_store');
        }
      }),
      visible: requiresJetpackConnection
    }];
    return Object(external_lodash_["filter"])(steps, step => step.visible);
  }

  render() {
    const {
      isPending,
      step
    } = this.state;
    const {
      isUpdateSettingsRequesting
    } = this.props;
    return Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-task-shipping"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
      className: "woocommerce-task-card"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], null, Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
      isPending: isPending || isUpdateSettingsRequesting,
      isVertical: true,
      currentStep: step,
      steps: this.getSteps()
    }))));
  }

}
const ShippingWrapper = Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(select => {
  const {
    getSettings,
    isUpdateSettingsRequesting
  } = select(external_wc_data_["SETTINGS_STORE_NAME"]);
  const {
    getActivePlugins,
    isJetpackConnected
  } = select(external_wc_data_["PLUGINS_STORE_NAME"]);
  const {
    general: settings = {}
  } = getSettings('general');
  const countryCode = Object(utils["b" /* getCountryCode */])(settings.woocommerce_default_country);
  const {
    countries = []
  } = Object(wc_admin_settings_build_module["f" /* getSetting */])('dataEndpoints', {});
  const country = countryCode ? countries.find(c => c.code === countryCode) : null;
  const countryName = country ? country.name : null;
  const activePlugins = getActivePlugins();
  return {
    countryCode,
    countryName,
    isUpdateSettingsRequesting: isUpdateSettingsRequesting('general'),
    settings,
    activePlugins,
    isJetpackConnected: isJetpackConnected()
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    createNotice
  } = dispatch('core/notices');
  const {
    updateAndPersistSettingsForGroup
  } = dispatch(external_wc_data_["SETTINGS_STORE_NAME"]);
  const {
    invalidateResolutionForStoreSelector,
    optimisticallyCompleteTask
  } = dispatch(external_wc_data_["ONBOARDING_STORE_NAME"]);
  return {
    createNotice,
    invalidateResolutionForStoreSelector,
    optimisticallyCompleteTask,
    updateAndPersistSettingsForGroup
  };
}))(shipping_Shipping);
Object(external_wp_plugins_["registerPlugin"])('wc-admin-onboarding-task-shipping', {
  scope: 'woocommerce-tasks',
  render: () => Object(external_wp_element_["createElement"])(build_module["WooOnboardingTask"], {
    id: "shipping"
  }, ({
    onComplete,
    task
  }) => {
    return Object(external_wp_element_["createElement"])(ShippingWrapper, {
      onComplete: onComplete,
      task: task
    });
  })
});
// EXTERNAL MODULE: ./client/tasks/fills/Marketing/Marketing.scss
var Marketing = __webpack_require__(571);

// EXTERNAL MODULE: ./client/tasks/fills/Marketing/Plugin.scss
var Plugin = __webpack_require__(572);

// CONCATENATED MODULE: ./client/tasks/fills/Marketing/Plugin.tsx


/**
 * External dependencies
 */





/**
 * Internal dependencies
 */


const Plugin_Plugin = ({
  description,
  imageUrl,
  installAndActivate = () => {},
  isActive,
  isBusy,
  isDisabled,
  isInstalled,
  manageUrl,
  name,
  slug
}) => {
  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-plugin-list__plugin"
  }, imageUrl && Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-plugin-list__plugin-logo"
  }, Object(external_wp_element_["createElement"])("img", {
    src: imageUrl,
    alt: Object(external_wp_i18n_["sprintf"])(
    /* translators: %s = name of the plugin */
    Object(external_wp_i18n_["__"])('%s logo', 'woocommerce-admin'), name)
  })), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-plugin-list__plugin-text"
  }, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    variant: "subtitle.small",
    as: "h4"
  }, name), Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    variant: "subtitle.small"
  }, description)), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-plugin-list__plugin-action"
  }, isActive && manageUrl && Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    disabled: isDisabled,
    isBusy: isBusy,
    isSecondary: true,
    href: Object(wc_admin_settings_build_module["e" /* getAdminLink */])(manageUrl),
    onClick: () => Object(external_wc_tracks_["recordEvent"])('marketing_manage', {
      extension_name: slug
    })
  }, Object(external_wp_i18n_["__"])('Manage', 'woocommmerce-admin')), isInstalled && !isActive && Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    disabled: isDisabled,
    isBusy: isBusy,
    isSecondary: true,
    onClick: () => installAndActivate(slug)
  }, Object(external_wp_i18n_["__"])('Activate', 'woocommmerce-admin')), !isInstalled && Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    disabled: isDisabled,
    isBusy: isBusy,
    isSecondary: true,
    onClick: () => installAndActivate(slug)
  }, Object(external_wp_i18n_["__"])('Get started', 'woocommmerce-admin'))));
};
// EXTERNAL MODULE: ./client/tasks/fills/Marketing/PluginList.scss
var PluginList = __webpack_require__(573);

// CONCATENATED MODULE: ./client/tasks/fills/Marketing/PluginList.tsx


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



const PluginList_PluginList = ({
  currentPlugin,
  installAndActivate = () => {},
  plugins = [],
  title
}) => {
  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-plugin-list"
  }, title && Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-plugin-list__title"
  }, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    variant: "sectionheading",
    as: "h3"
  }, title)), plugins.map(plugin => {
    const {
      description,
      imageUrl,
      isActive,
      isInstalled,
      manageUrl,
      slug,
      name
    } = plugin;
    return Object(external_wp_element_["createElement"])(Plugin_Plugin, {
      key: slug,
      description: description,
      manageUrl: manageUrl,
      name: name,
      imageUrl: imageUrl,
      installAndActivate: installAndActivate,
      isActive: isActive,
      isBusy: currentPlugin === slug,
      isDisabled: !!currentPlugin,
      isInstalled: isInstalled,
      slug: slug
    });
  }));
};
// CONCATENATED MODULE: ./client/tasks/fills/Marketing/index.tsx


/**
 * External dependencies
 */









/**
 * Internal dependencies
 */




const ALLOWED_PLUGIN_LISTS = ['task-list/reach', 'task-list/grow'];
const EMPTY_ARRAY = [];
const transformExtensionToPlugin = (extension, activePlugins, installedPlugins) => {
  const {
    description,
    image_url,
    key,
    manage_url,
    name
  } = extension;
  const slug = key.split(':')[0];
  return {
    description,
    slug,
    imageUrl: image_url,
    isActive: activePlugins.includes(slug),
    isInstalled: installedPlugins.includes(slug),
    manageUrl: manage_url,
    name
  };
};
const getMarketingExtensionLists = (freeExtensions, activePlugins, installedPlugins) => {
  const installed = [];
  const lists = [];
  freeExtensions.forEach(list => {
    if (!ALLOWED_PLUGIN_LISTS.includes(list.key)) {
      return;
    }

    const listPlugins = [];
    list.plugins.forEach(extension => {
      const plugin = transformExtensionToPlugin(extension, activePlugins, installedPlugins);

      if (plugin.isInstalled) {
        installed.push(plugin);
        return;
      }

      listPlugins.push(plugin);
    });

    if (!listPlugins.length) {
      return;
    }

    const transformedList = { ...list,
      plugins: listPlugins
    };
    lists.push(transformedList);
  });
  return [installed, lists];
};

const Marketing_Marketing = ({
  onComplete
}) => {
  const [currentPlugin, setCurrentPlugin] = Object(external_wp_element_["useState"])(null);
  const {
    actionTask
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["ONBOARDING_STORE_NAME"]);
  const {
    installAndActivatePlugins
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["PLUGINS_STORE_NAME"]);
  const {
    activePlugins,
    freeExtensions,
    installedPlugins,
    isResolving
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getActivePlugins,
      getInstalledPlugins
    } = select(external_wc_data_["PLUGINS_STORE_NAME"]);
    const {
      getFreeExtensions,
      hasFinishedResolution
    } = select(external_wc_data_["ONBOARDING_STORE_NAME"]);
    return {
      activePlugins: getActivePlugins(),
      freeExtensions: getFreeExtensions(),
      installedPlugins: getInstalledPlugins(),
      isResolving: !hasFinishedResolution('getFreeExtensions')
    };
  });
  const [installedExtensions, pluginLists] = Object(external_wp_element_["useMemo"])(() => getMarketingExtensionLists(freeExtensions, activePlugins, installedPlugins), [installedPlugins, activePlugins, freeExtensions]);

  const installAndActivate = slug => {
    setCurrentPlugin(slug);
    actionTask('marketing');
    installAndActivatePlugins([slug]).then(response => {
      Object(external_wc_tracks_["recordEvent"])('tasklist_marketing_install', {
        selected_extension: slug,
        installed_extensions: installedExtensions.map(extension => extension.slug)
      });
      Object(notices["a" /* createNoticesFromResponse */])(response);
      setCurrentPlugin(null);
      onComplete();
    }).catch(response => {
      Object(notices["a" /* createNoticesFromResponse */])(response);
      setCurrentPlugin(null);
    });
  };

  if (isResolving) {
    return Object(external_wp_element_["createElement"])(external_wp_components_["Spinner"], null);
  }

  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-task-marketing"
  }, !!installedExtensions.length && Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
    className: "woocommerce-task-card"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardHeader"], null, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    variant: "title.small",
    as: "h2",
    className: "woocommerce-task-card__title"
  }, Object(external_wp_i18n_["__"])('Installed marketing extensions', 'woocommerce-admin'))), Object(external_wp_element_["createElement"])(PluginList_PluginList, {
    currentPlugin: currentPlugin,
    installAndActivate: installAndActivate,
    plugins: installedExtensions
  })), !!pluginLists.length && Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
    className: "woocommerce-task-card"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardHeader"], null, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    variant: "title.small",
    as: "h2",
    className: "woocommerce-task-card__title"
  }, Object(external_wp_i18n_["__"])('Recommended marketing extensions', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    as: "span"
  }, Object(external_wp_i18n_["__"])('We recommend adding one of the following marketing tools for your store. The extension will be installed and activated for you when you click "Get started".', 'woocommerce-admin'))), pluginLists.map(list => {
    const {
      key,
      title,
      plugins
    } = list;
    return Object(external_wp_element_["createElement"])(PluginList_PluginList, {
      currentPlugin: currentPlugin,
      installAndActivate: installAndActivate,
      key: key,
      plugins: plugins,
      title: title
    });
  })));
};

Object(external_wp_plugins_["registerPlugin"])('wc-admin-onboarding-task-marketing', {
  scope: 'woocommerce-tasks',
  render: () => Object(external_wp_element_["createElement"])(build_module["WooOnboardingTask"], {
    id: "marketing"
  }, ({
    onComplete
  }) => {
    return Object(external_wp_element_["createElement"])(Marketing_Marketing, {
      onComplete: onComplete
    });
  })
});
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/sidebar.js


/**
 * WordPress dependencies
 */

var sidebar = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ var library_sidebar = (sidebar);
//# sourceMappingURL=sidebar.js.map
// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/chevron-right.js
var chevron_right = __webpack_require__(475);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/plus-circle.js


/**
 * WordPress dependencies
 */

var plusCircle = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6zM10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"
}));
/* harmony default export */ var plus_circle = (plusCircle);
//# sourceMappingURL=plus-circle.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/archive.js


/**
 * WordPress dependencies
 */

var archive = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M19 6.2h-5.9l-.6-1.1c-.3-.7-1-1.1-1.8-1.1H5c-1.1 0-2 .9-2 2v11.8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8.2c0-1.1-.9-2-2-2zm.5 11.6c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h5.8c.2 0 .4.1.4.3l1 2H19c.3 0 .5.2.5.5v9.5zM8 12.8h8v-1.5H8v1.5zm0 3h8v-1.5H8v1.5z"
}));
/* harmony default export */ var library_archive = (archive);
//# sourceMappingURL=archive.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/download.js


/**
 * WordPress dependencies
 */

var download = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"
}));
/* harmony default export */ var library_download = (download);
//# sourceMappingURL=download.js.map
// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(28);

// EXTERNAL MODULE: ./client/tasks/fills/products/product-template-modal.scss
var product_template_modal = __webpack_require__(574);

// CONCATENATED MODULE: ./client/tasks/fills/products/product-template-modal.js


/**
 * External dependencies
 */








/**
 * Internal dependencies
 */




const ONBOARDING_PRODUCT_TEMPLATES_FILTER = 'woocommerce_admin_onboarding_product_templates';

const getProductTemplates = () => [{
  key: 'physical',
  title: Object(external_wp_i18n_["__"])('Physical product', 'woocommerce-admin'),
  subtitle: Object(external_wp_i18n_["__"])('Tangible items that get delivered to customers', 'woocommerce-admin')
}, {
  key: 'digital',
  title: Object(external_wp_i18n_["__"])('Digital product', 'woocommerce-admin'),
  subtitle: Object(external_wp_i18n_["__"])('Items that customers download or access through your website', 'woocommerce-admin')
}, {
  key: 'variable',
  title: Object(external_wp_i18n_["__"])('Variable product', 'woocommerce-admin'),
  subtitle: Object(external_wp_i18n_["__"])('Products with several versions that customers can choose from', 'woocommerce-admin')
}, {
  key: 'subscription',
  title: Object(external_wp_i18n_["__"])('Subscription product', 'woocommerce-admin'),
  subtitle: Object(external_wp_i18n_["__"])('Products that customers receive or gain access to regularly by paying in advance', 'woocommerce-admin')
}];

function ProductTemplateModal({
  onClose
}) {
  var _profileItems$product;

  const [selectedTemplate, setSelectedTemplate] = Object(external_wp_element_["useState"])(null);
  const [isRedirecting, setIsRedirecting] = Object(external_wp_element_["useState"])(false);
  const {
    createProductFromTemplate
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["ITEMS_STORE_NAME"]);
  const {
    countryCode,
    profileItems
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getProfileItems
    } = select(external_wc_data_["ONBOARDING_STORE_NAME"]);
    const {
      getSettings
    } = select(external_wc_data_["SETTINGS_STORE_NAME"]);
    const {
      general: settings = {}
    } = getSettings('general');
    return {
      countryCode: Object(utils["b" /* getCountryCode */])(settings.woocommerce_default_country),
      profileItems: getProfileItems()
    };
  });
  const {
    installedPlugins
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getInstalledPlugins
    } = select(external_wc_data_["PLUGINS_STORE_NAME"]);
    return {
      installedPlugins: getInstalledPlugins()
    };
  });

  const createTemplate = () => {
    setIsRedirecting(true);
    Object(external_wc_tracks_["recordEvent"])('tasklist_product_template_selection', {
      product_type: selectedTemplate
    });

    if (selectedTemplate === 'subscription') {
      window.location = Object(wc_admin_settings_build_module["e" /* getAdminLink */])('post-new.php?post_type=product&subscription_pointers=true');
      return;
    }

    if (selectedTemplate) {
      createProductFromTemplate({
        template_name: selectedTemplate,
        status: 'draft'
      }, {
        _fields: ['id']
      }).then(data => {
        if (data && data.id) {
          const link = Object(wc_admin_settings_build_module["e" /* getAdminLink */])(`post.php?post=${data.id}&action=edit&wc_onboarding_active_task=products&tutorial=true`);
          window.location = link;
        }
      }, error => {
        // failed creating product with template
        Object(notices["a" /* createNoticesFromResponse */])(error);
        setIsRedirecting(false);
      });
    } else if (onClose) {
      Object(external_wc_tracks_["recordEvent"])('tasklist_product_template_dismiss');
      onClose();
    }
  };

  const removeSubscriptions = window.wcAdminFeatures && !window.wcAdminFeatures.subscriptions || countryCode !== 'US' || !((_profileItems$product = profileItems.product_types) !== null && _profileItems$product !== void 0 && _profileItems$product.includes('subscriptions')) || !installedPlugins.includes('woocommerce-payments');
  const productTemplates = removeSubscriptions ? getProductTemplates().filter(template => template.key !== 'subscription') : getProductTemplates();
  const templates = Object(external_wp_hooks_["applyFilters"])(ONBOARDING_PRODUCT_TEMPLATES_FILTER, productTemplates);
  return Object(external_wp_element_["createElement"])(external_wp_components_["Modal"], {
    title: Object(external_wp_i18n_["__"])('Start with a template'),
    isDismissible: true,
    onRequestClose: () => onClose(),
    className: "woocommerce-product-template-modal"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-product-template-modal__wrapper"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-product-template-modal__list"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["RadioControl"], {
    selected: selectedTemplate,
    options: templates.map(item => {
      return {
        label: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("span", {
          className: "woocommerce-product-template-modal__list-title"
        }, item.title), Object(external_wp_element_["createElement"])("span", {
          className: "woocommerce-product-template-modal__list-subtitle"
        }, item.subtitle)),
        value: item.key
      };
    }),
    onChange: setSelectedTemplate
  })), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-product-template-modal__actions"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isPrimary: true,
    isBusy: isRedirecting,
    disabled: !selectedTemplate || isRedirecting,
    onClick: createTemplate
  }, Object(external_wp_i18n_["__"])('Go')))));
}
// CONCATENATED MODULE: ./client/tasks/fills/products/products.js


/**
 * External dependencies
 */











/**
 * Internal dependencies
 */




const getSubTasks = () => [{
  key: 'addProductTemplate',
  title: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('Start with a template', 'woocommerce-admin'), Object(external_wp_element_["createElement"])(external_wc_components_["Pill"], null, Object(external_wp_i18n_["__"])('Recommended', 'woocommerce-admin'))),
  content: Object(external_wp_i18n_["__"])('Use a template to add physical, digital, and variable products', 'woocommerce-admin'),
  before: Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: library_sidebar
  }),
  after: Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: chevron_right["a" /* default */]
  }),
  onClick: () => Object(external_wc_tracks_["recordEvent"])('tasklist_add_product', {
    method: 'product_template'
  })
}, {
  key: 'addProductManually',
  title: Object(external_wp_i18n_["__"])('Add manually', 'woocommerce-admin'),
  content: Object(external_wp_i18n_["__"])('For small stores we recommend adding products manually', 'woocommerce-admin'),
  before: Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: plus_circle
  }),
  after: Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: chevron_right["a" /* default */]
  }),
  onClick: () => Object(external_wc_tracks_["recordEvent"])('tasklist_add_product', {
    method: 'manually'
  }),
  href: Object(wc_admin_settings_build_module["e" /* getAdminLink */])('post-new.php?post_type=product&wc_onboarding_active_task=products&tutorial=true')
}, {
  key: 'importProducts',
  title: Object(external_wp_i18n_["__"])('Import via CSV', 'woocommerce-admin'),
  content: Object(external_wp_i18n_["__"])('For larger stores we recommend importing all products at once via CSV file', 'woocommerce-admin'),
  before: Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: library_archive
  }),
  after: Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: chevron_right["a" /* default */]
  }),
  onClick: () => Object(external_wc_tracks_["recordEvent"])('tasklist_add_product', {
    method: 'import'
  }),
  href: Object(wc_admin_settings_build_module["e" /* getAdminLink */])('edit.php?post_type=product&page=product_importer&wc_onboarding_active_task=products')
}, {
  key: 'migrateProducts',
  title: Object(external_wp_i18n_["__"])('Import from another service', 'woocommerce-admin'),
  content: Object(external_wp_i18n_["__"])('For stores currently selling elsewhere we suggest using a product migration service', 'woocommerce-admin'),
  before: Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: library_download
  }),
  after: Object(external_wp_element_["createElement"])(icon["a" /* default */], {
    icon: chevron_right["a" /* default */]
  }),
  onClick: () => Object(external_wc_tracks_["recordEvent"])('tasklist_add_product', {
    method: 'migrate'
  }),
  // @todo This should be replaced with the in-app purchase iframe when ready.
  href: 'https://woocommerce.com/products/cart2cart/?utm_medium=product',
  target: '_blank'
}];

const Products = () => {
  var _profileItems$product;

  const [selectTemplate, setSelectTemplate] = Object(external_wp_element_["useState"])(null);
  const {
    countryCode,
    profileItems
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getProfileItems
    } = select(external_wc_data_["ONBOARDING_STORE_NAME"]);
    const {
      getSettings
    } = select(external_wc_data_["SETTINGS_STORE_NAME"]);
    const {
      general: settings = {}
    } = getSettings('general');
    return {
      countryCode: Object(utils["b" /* getCountryCode */])(settings.woocommerce_default_country),
      profileItems: getProfileItems()
    };
  });
  const {
    installedPlugins
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getInstalledPlugins
    } = select(external_wc_data_["PLUGINS_STORE_NAME"]);
    return {
      installedPlugins: getInstalledPlugins()
    };
  });
  const subTasks = getSubTasks();

  if (window.wcAdminFeatures && window.wcAdminFeatures.subscriptions && countryCode === 'US' && (_profileItems$product = profileItems.product_types) !== null && _profileItems$product !== void 0 && _profileItems$product.includes('subscriptions') && installedPlugins.includes('woocommerce-payments')) {
    const task = subTasks.find(({
      key
    }) => key === 'addProductTemplate');
    task.content = Object(external_wp_i18n_["__"])('Use a template to add physical, digital, variable, and subscription products', 'woocommerce-admin');
  }

  const onTaskClick = task => {
    task.onClick();

    if (task.key === 'addProductTemplate') {
      setSelectTemplate(true);
    }
  };

  const listItems = subTasks.map(task => ({ ...task,
    onClick: () => onTaskClick(task)
  }));
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
    className: "woocommerce-task-card"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], {
    size: null
  }, Object(external_wp_element_["createElement"])(external_wc_components_["List"], {
    items: listItems
  }))), selectTemplate ? Object(external_wp_element_["createElement"])(ProductTemplateModal, {
    onClose: () => setSelectTemplate(null)
  }) : null);
};

Object(external_wp_plugins_["registerPlugin"])('wc-admin-onboarding-task-products', {
  scope: 'woocommerce-tasks',
  render: () => Object(external_wp_element_["createElement"])(build_module["WooOnboardingTask"], {
    id: "products"
  }, Object(external_wp_element_["createElement"])(Products, null))
});
// CONCATENATED MODULE: ./client/tasks/fills/products/index.js
/**
 * Internal dependencies
 */



// CONCATENATED MODULE: ./client/tasks/fills/appearance.js


/**
 * External dependencies
 */












/**
 * Internal dependencies
 */

class appearance_Appearance extends external_wp_element_["Component"] {
  constructor(props) {
    super(props);
    const {
      hasHomepage,
      hasProducts
    } = props.task.additionalData;
    this.stepVisibility = {
      homepage: !hasHomepage,
      import: !hasProducts
    };
    this.state = {
      isDirty: false,
      isPending: false,
      logo: null,
      stepIndex: 0,
      isUpdatingLogo: false,
      isUpdatingNotice: false,
      storeNoticeText: props.demoStoreNotice || ''
    };
    this.completeStep = this.completeStep.bind(this);
    this.createHomepage = this.createHomepage.bind(this);
    this.importProducts = this.importProducts.bind(this);
    this.updateLogo = this.updateLogo.bind(this);
    this.updateNotice = this.updateNotice.bind(this);
  }

  componentDidMount() {
    const {
      themeMods
    } = this.props.task.additionalData;

    if (themeMods && themeMods.custom_logo) {
      /* eslint-disable react/no-did-mount-set-state */
      this.setState({
        logo: {
          id: themeMods.custom_logo
        }
      });
      /* eslint-enable react/no-did-mount-set-state */
    }
  }

  componentDidUpdate(prevProps) {
    const {
      isPending,
      logo
    } = this.state;
    const {
      demoStoreNotice
    } = this.props;

    if (logo && !logo.url && !isPending) {
      /* eslint-disable react/no-did-update-set-state */
      this.setState({
        isPending: true
      });
      wp.media.attachment(logo.id).fetch().then(() => {
        const logoUrl = wp.media.attachment(logo.id).get('url');
        this.setState({
          isPending: false,
          logo: {
            id: logo.id,
            url: logoUrl
          }
        });
      });
      /* eslint-enable react/no-did-update-set-state */
    }

    if (demoStoreNotice && prevProps.demoStoreNotice !== demoStoreNotice) {
      /* eslint-disable react/no-did-update-set-state */
      this.setState({
        storeNoticeText: demoStoreNotice
      });
      /* eslint-enable react/no-did-update-set-state */
    }
  }

  async completeStep() {
    const {
      stepIndex
    } = this.state;
    const {
      actionTask,
      onComplete
    } = this.props;
    const nextStep = this.getSteps()[stepIndex + 1];

    if (nextStep) {
      this.setState({
        stepIndex: stepIndex + 1
      });
    } else {
      this.setState({
        isPending: true
      });
      await actionTask('appearance');
      onComplete();
    }
  }

  importProducts() {
    const {
      createNotice
    } = this.props;
    this.setState({
      isPending: true
    });
    Object(external_wc_tracks_["recordEvent"])('tasklist_appearance_import_demo', {});
    external_wp_apiFetch_default()({
      path: `${external_wc_data_["WC_ADMIN_NAMESPACE"]}/onboarding/tasks/import_sample_products`,
      method: 'POST'
    }).then(result => {
      if (result.failed && result.failed.length) {
        createNotice('error', Object(external_wp_i18n_["__"])('There was an error importing some of the sample products', 'woocommerce-admin'));
      } else {
        createNotice('success', Object(external_wp_i18n_["__"])('All sample products have been imported', 'woocommerce-admin'));
      }

      this.setState({
        isPending: false
      });
      this.completeStep();
    }).catch(error => {
      createNotice('error', error.message);
      this.setState({
        isPending: false
      });
    });
  }

  createHomepage() {
    const {
      createNotice
    } = this.props;
    this.setState({
      isPending: true
    });
    Object(external_wc_tracks_["recordEvent"])('tasklist_appearance_create_homepage', {
      create_homepage: true
    });
    external_wp_apiFetch_default()({
      path: '/wc-admin/onboarding/tasks/create_homepage',
      method: 'POST'
    }).then(response => {
      createNotice(response.status, response.message, {
        actions: response.edit_post_link ? [{
          label: Object(external_wp_i18n_["__"])('Customize', 'woocommerce-admin'),
          onClick: () => {
            Object(external_wc_tracks_["queueRecordEvent"])('tasklist_appearance_customize_homepage', {});
            window.location = `${response.edit_post_link}&wc_onboarding_active_task=appearance`;
          }
        }] : null
      });
      this.setState({
        isPending: false
      });
      this.completeStep();
    }).catch(error => {
      createNotice('error', error.message);
      this.setState({
        isPending: false
      });
    });
  }

  async updateLogo() {
    const {
      createNotice,
      task,
      updateOptions
    } = this.props;
    const {
      stylesheet,
      themeMods
    } = task.additionalData;
    const {
      logo
    } = this.state;
    const updatedThemeMods = { ...themeMods,
      custom_logo: logo ? logo.id : null
    };
    Object(external_wc_tracks_["recordEvent"])('tasklist_appearance_upload_logo');
    this.setState({
      isUpdatingLogo: true
    });
    const update = await updateOptions({
      [`theme_mods_${stylesheet}`]: updatedThemeMods
    });

    if (update.success) {
      this.setState({
        isUpdatingLogo: false
      });
      createNotice('success', Object(external_wp_i18n_["__"])('Store logo updated sucessfully', 'woocommerce-admin'));
      this.completeStep();
    } else {
      createNotice('error', update.message);
    }
  }

  async updateNotice() {
    const {
      createNotice,
      updateOptions
    } = this.props;
    const {
      storeNoticeText
    } = this.state;
    Object(external_wc_tracks_["recordEvent"])('tasklist_appearance_set_store_notice', {
      added_text: Boolean(storeNoticeText.length)
    });
    this.setState({
      isUpdatingNotice: true
    });
    const update = await updateOptions({
      woocommerce_demo_store: storeNoticeText.length ? 'yes' : 'no',
      woocommerce_demo_store_notice: storeNoticeText
    });

    if (update.success) {
      this.setState({
        isUpdatingNotice: false
      });
      createNotice('success', Object(external_wp_i18n_["__"])("🎨 Your store is looking great! Don't forget to continue personalizing it", 'woocommerce-admin'));
      this.completeStep();
    } else {
      createNotice('error', update.message);
    }
  }

  getSteps() {
    const {
      isDirty,
      isPending,
      logo,
      storeNoticeText,
      isUpdatingLogo
    } = this.state;
    const steps = [{
      key: 'import',
      label: Object(external_wp_i18n_["__"])('Import sample products', 'woocommerce-admin'),
      description: Object(external_wp_i18n_["__"])('We’ll add some products that will make it easier to see what your store looks like', 'woocommerce-admin'),
      content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        onClick: this.importProducts,
        isBusy: isPending,
        isPrimary: true
      }, Object(external_wp_i18n_["__"])('Import products', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        onClick: () => this.completeStep()
      }, Object(external_wp_i18n_["__"])('Skip', 'woocommerce-admin'))),
      visible: this.stepVisibility.import
    }, {
      key: 'homepage',
      label: Object(external_wp_i18n_["__"])('Create a custom homepage', 'woocommerce-admin'),
      description: Object(external_wp_i18n_["__"])('Create a new homepage and customize it to suit your needs', 'woocommerce-admin'),
      content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isPrimary: true,
        isBusy: isPending,
        onClick: this.createHomepage
      }, Object(external_wp_i18n_["__"])('Create homepage', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isTertiary: true,
        onClick: () => {
          Object(external_wc_tracks_["recordEvent"])('tasklist_appearance_create_homepage', {
            create_homepage: false
          });
          this.completeStep();
        }
      }, Object(external_wp_i18n_["__"])('Skip', 'woocommerce-admin'))),
      visible: this.stepVisibility.homepage
    }, {
      key: 'logo',
      label: Object(external_wp_i18n_["__"])('Upload a logo', 'woocommerce-admin'),
      description: Object(external_wp_i18n_["__"])('Ensure your store is on-brand by adding your logo', 'woocommerce-admin'),
      content: isPending ? null : Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["ImageUpload"], {
        image: logo,
        onChange: image => this.setState({
          isDirty: true,
          logo: image
        })
      }), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        disabled: !logo && !isDirty,
        onClick: this.updateLogo,
        isBusy: isUpdatingLogo,
        isPrimary: true
      }, Object(external_wp_i18n_["__"])('Proceed', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        isTertiary: true,
        onClick: () => this.completeStep()
      }, Object(external_wp_i18n_["__"])('Skip', 'woocommerce-admin'))),
      visible: true
    }, {
      key: 'notice',
      label: Object(external_wp_i18n_["__"])('Set a store notice', 'woocommerce-admin'),
      description: Object(external_wp_i18n_["__"])('Optionally display a prominent notice across all pages of your store', 'woocommerce-admin'),
      content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["TextControl"], {
        label: Object(external_wp_i18n_["__"])('Store notice text', 'woocommerce-admin'),
        placeholder: Object(external_wp_i18n_["__"])('Store notice text', 'woocommerce-admin'),
        value: storeNoticeText,
        onChange: value => this.setState({
          storeNoticeText: value
        })
      }), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        onClick: this.updateNotice,
        isPrimary: true
      }, Object(external_wp_i18n_["__"])('Complete task', 'woocommerce-admin'))),
      visible: true
    }];
    return Object(external_lodash_["filter"])(steps, step => step.visible);
  }

  render() {
    const {
      isPending,
      stepIndex,
      isUpdatingLogo,
      isUpdatingNotice
    } = this.state;
    const currentStep = this.getSteps()[stepIndex].key;
    return Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-task-appearance"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
      className: "woocommerce-task-card"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], null, Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
      isPending: isUpdatingNotice || isUpdatingLogo || isPending,
      isVertical: true,
      currentStep: currentStep,
      steps: this.getSteps()
    }))));
  }

}

const AppearanceWrapper = Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(select => {
  const {
    getOption
  } = select(external_wc_data_["OPTIONS_STORE_NAME"]);
  return {
    demoStoreNotice: getOption('woocommerce_demo_store_notice')
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    createNotice
  } = dispatch('core/notices');
  const {
    updateOptions
  } = dispatch(external_wc_data_["OPTIONS_STORE_NAME"]);
  const {
    actionTask
  } = dispatch(external_wc_data_["ONBOARDING_STORE_NAME"]);
  return {
    actionTask,
    createNotice,
    updateOptions
  };
}))(appearance_Appearance);
Object(external_wp_plugins_["registerPlugin"])('wc-admin-onboarding-task-appearance', {
  scope: 'woocommerce-tasks',
  render: () => Object(external_wp_element_["createElement"])(build_module["WooOnboardingTask"], {
    id: "appearance"
  }, ({
    onComplete,
    task
  }) => Object(external_wp_element_["createElement"])(AppearanceWrapper, {
    onComplete: onComplete,
    task: task
  }))
});
// CONCATENATED MODULE: ./client/tasks/fills/connect.js


/**
 * External dependencies
 */











class fills_connect_Connect extends external_wp_element_["Component"] {
  componentDidMount() {
    document.body.classList.add('woocommerce-admin-is-loading');
    const {
      query
    } = this.props;

    if (query.deny === '1') {
      this.errorMessage(Object(external_wp_i18n_["__"])('You must click approve to install your extensions and connect to WooCommerce.com', 'woocommerce-admin'));
      return;
    }

    if (!query['wccom-connected'] || !query.request_token) {
      this.request();
      return;
    }

    this.finish();
  }

  baseQuery() {
    const {
      query
    } = this.props;
    const baseQuery = Object(external_lodash_["omit"])({ ...query,
      page: 'wc-admin'
    }, ['task', 'wccom-connected', 'request_token', 'deny']);
    return Object(external_wc_navigation_["getNewPath"])({}, '/', baseQuery);
  }

  errorMessage(message = Object(external_wp_i18n_["__"])('There was an error connecting to WooCommerce.com. Please try again', 'woocommerce-admin')) {
    document.body.classList.remove('woocommerce-admin-is-loading');
    Object(external_wc_navigation_["getHistory"])().push(this.baseQuery());
    this.props.createNotice('error', message);
  }

  async request() {
    try {
      const connectResponse = await external_wp_apiFetch_default()({
        path: `${external_wc_data_["WC_ADMIN_NAMESPACE"]}/plugins/request-wccom-connect`,
        method: 'POST'
      });

      if (connectResponse && connectResponse.connectAction) {
        window.location = connectResponse.connectAction;
        return;
      }

      throw new Error();
    } catch (err) {
      this.errorMessage();
    }
  }

  async finish() {
    const {
      onComplete,
      query
    } = this.props;

    try {
      const connectResponse = await external_wp_apiFetch_default()({
        path: `${external_wc_data_["WC_ADMIN_NAMESPACE"]}/plugins/finish-wccom-connect`,
        method: 'POST',
        data: {
          request_token: query.request_token
        }
      });

      if (connectResponse && connectResponse.success) {
        await this.props.updateProfileItems({
          wccom_connected: true
        });

        if (!this.props.isProfileItemsError) {
          this.props.createNotice('success', Object(external_wp_i18n_["__"])('Store connected to WooCommerce.com and extensions are being installed', 'woocommerce-admin')); // @todo Show a notice for when extensions are correctly installed.

          document.body.classList.remove('woocommerce-admin-is-loading');
          onComplete();
        } else {
          this.errorMessage();
        }

        return;
      }

      throw new Error();
    } catch (err) {
      this.errorMessage();
    }
  }

  render() {
    return null;
  }

}

const ConnectWrapper = Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(select => {
  const {
    getOnboardingError
  } = select(external_wc_data_["ONBOARDING_STORE_NAME"]);
  const isProfileItemsError = Boolean(getOnboardingError('updateProfileItems'));
  return {
    isProfileItemsError
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    createNotice
  } = dispatch('core/notices');
  const {
    updateProfileItems
  } = dispatch(external_wc_data_["ONBOARDING_STORE_NAME"]);
  return {
    createNotice,
    updateProfileItems
  };
}))(fills_connect_Connect);
Object(external_wp_plugins_["registerPlugin"])('wc-admin-onboarding-task-connect', {
  scope: 'woocommerce-tasks',
  render: () => Object(external_wp_element_["createElement"])(build_module["WooOnboardingTask"], {
    id: "connect"
  }, ({
    onComplete,
    query
  }) => Object(external_wp_element_["createElement"])(ConnectWrapper, {
    onComplete: onComplete,
    query: query
  }))
});
// CONCATENATED MODULE: ./client/tasks/fills/tax/utils.ts
/**
 * External dependencies
 */


/**
 * Plugins required to automate taxes.
 */
const AUTOMATION_PLUGINS = ['jetpack', 'woocommerce-services'];
/**
 * Check if a store has a complete address given general settings.
 *
 * @param {Object} generalSettings General settings.
 * @param {Object} generalSettings.woocommerce_store_address Store address.
 * @param {Object} generalSettings.woocommerce_default_country Store default country.
 * @param {Object} generalSettings.woocommerce_store_postcode Store postal code.
 */

const hasCompleteAddress = generalSettings => {
  const {
    woocommerce_store_address: storeAddress,
    woocommerce_default_country: defaultCountry,
    woocommerce_store_postcode: storePostCode
  } = generalSettings;
  return Boolean(storeAddress && defaultCountry && storePostCode);
};
/**
 * Redirect to the core tax settings screen.
 */

const redirectToTaxSettings = () => {
  window.location.href = Object(wc_admin_settings_build_module["e" /* getAdminLink */])('admin.php?page=wc-settings&tab=tax&section=standard&wc_onboarding_active_task=tax');
};
/**
 * Types for settings selectors.
 */

/**
 * Check if a given country is supported by Avalara.
 *
 * @param {string} countryCode Country code.
 * @return {boolean} If the country is supported.
 */
const supportsAvalara = countryCode => {
  const countries = ['AF', 'AL', 'DZ', 'AD', 'AO', 'AI', 'AG', 'AR', 'AM', 'AW', 'AU', 'AT', 'AZ', 'BS', 'BH', 'BD', 'BB', 'BY', 'BE', 'BZ', 'BJ', 'BM', 'BO', 'BA', 'BW', 'BR', 'BN', 'BG', 'BF', 'BI', 'KH', 'CM', 'CA', 'IC', 'CV', 'KY', 'CF', 'TD', 'CL', 'CN', 'CC', 'CO', 'KM', 'CD', 'CK', 'CR', 'CI', 'HR', 'CU', 'CW', 'CY', 'CZ', 'DK', 'DJ', 'DM', 'DO', 'EC', 'EG', 'SV', 'GQ', 'ER', 'EE', 'ET', 'FK', 'FO', 'FJ', 'FI', 'FR', 'PF', 'TF', 'GA', 'GM', 'GE', 'DE', 'GH', 'GI', 'GR', 'GL', 'GD', 'GP', 'GT', 'GG', 'GN', 'GW', 'GY', 'HT', 'HN', 'HK', 'HU', 'IS', 'IN', 'ID', 'IR', 'IQ', 'IE', 'IL', 'IT', 'JM', 'JP', 'JE', 'JO', 'KZ', 'KE', 'KI', 'KP', 'KV', 'KW', 'KG', 'LA', 'LV', 'LB', 'LS', 'LR', 'LY', 'LI', 'LT', 'LU', 'MO', 'MK', 'MG', 'MW', 'MY', 'MV', 'ML', 'MT', 'MQ', 'MR', 'MU', 'MX', 'MD', 'MC', 'MN', 'ME', 'MS', 'MA', 'MZ', 'MM', 'NA', 'NR', 'NP', 'NL', 'NZ', 'NI', 'NE', 'NG', 'NU', 'NF', 'NO', 'OM', 'PK', 'PS', 'PA', 'PG', 'PY', 'PE', 'PH', 'PL', 'PT', 'QA', 'KR', 'RE', 'RO', 'RU', 'RW', 'SH', 'KN', 'LC', 'MF', 'VC', 'WS', 'SM', 'ST', 'SA', 'SN', 'RS', 'SC', 'SL', 'SG', 'SX', 'SK', 'SI', 'SB', 'SO', 'ZA', 'SD', 'ES', 'LK', 'SD', 'SR', 'SZ', 'SE', 'CH', 'SY', 'TW', 'TJ', 'TZ', 'TH', 'TL', 'TG', 'TO', 'TT', 'TN', 'TR', 'TM', 'TC', 'TV', 'UG', 'UA', 'AE', 'GB', 'US', 'UY', 'UZ', 'VU', 'VE', 'VN', 'VG', 'YE', 'ZM', 'ZW'];
  return countries.includes(countryCode);
};
// CONCATENATED MODULE: ./client/tasks/fills/tax/components/bullet.tsx

const Bullet = () => {
  return Object(external_wp_element_["createElement"])("svg", {
    width: "13",
    height: "10",
    viewBox: "0 0 13 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_wp_element_["createElement"])("path", {
    d: "M12.1883 1.1814L4.7091 8.66062L1.48438 5.4359",
    stroke: "#4AB866",
    strokeWidth: "1.5"
  }));
};
// EXTERNAL MODULE: ./client/tasks/fills/tax/components/partner-card.scss
var partner_card = __webpack_require__(575);

// CONCATENATED MODULE: ./client/tasks/fills/tax/components/partner-card.tsx


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



const PartnerCard = ({
  name,
  logo,
  description,
  benefits,
  terms,
  actionText,
  onClick,
  isBusy
}) => {
  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-tax-partner-card"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-tax-partner-card__logo"
  }, Object(external_wp_element_["createElement"])("img", {
    src: logo,
    alt: name
  })), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-tax-partner-card__description"
  }, description), Object(external_wp_element_["createElement"])("ul", {
    className: "woocommerce-tax-partner-card__benefits"
  }, benefits.map((benefit, i) => {
    return Object(external_wp_element_["createElement"])("li", {
      className: "woocommerce-tax-partner-card__benefit",
      key: i
    }, Object(external_wp_element_["createElement"])("span", {
      className: "woocommerce-tax-partner-card__benefit-bullet"
    }, Object(external_wp_element_["createElement"])(Bullet, null)), Object(external_wp_element_["createElement"])("span", {
      className: "woocommerce-tax-partner-card__benefit-text"
    }, benefit));
  })), Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-tax-partner-card__action"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-tax-partner-card__terms"
  }, terms), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isSecondary: true,
    onClick: onClick,
    isBusy: isBusy,
    disabled: isBusy
  }, actionText)));
};
// EXTERNAL MODULE: ./client/tasks/fills/tax/avalara/logo.png
var avalara_logo = __webpack_require__(576);
var logo_default = /*#__PURE__*/__webpack_require__.n(avalara_logo);

// CONCATENATED MODULE: ./client/tasks/fills/tax/avalara/card.tsx


/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



const Card = ({
  task
}) => {
  const {
    avalaraActivated
  } = task.additionalData;
  return Object(external_wp_element_["createElement"])(PartnerCard, {
    name: Object(external_wp_i18n_["__"])('Avalara', 'woocommerce-admin'),
    logo: logo_default.a,
    description: Object(external_wp_i18n_["__"])('Powerful all-in-one tax tool', 'woocommerce-admin'),
    benefits: [Object(external_wp_i18n_["__"])('Real-time sales tax calculation', 'woocommerce-admin'), lib_default()({
      mixedString: Object(external_wp_i18n_["__"])('{{strong}}Multi{{/strong}}-economic nexus compliance', 'woocommerce-admin'),
      components: {
        strong: Object(external_wp_element_["createElement"])("strong", null)
      }
    }), Object(external_wp_i18n_["__"])('Cross-border and multi-channel compliance', 'woocommerce-admin'), Object(external_wp_i18n_["__"])('Automate filing & remittance', 'woocommerce-admin'), Object(external_wp_i18n_["__"])('Return-ready, jurisdiction-level reporting.', 'woocommerce-admin')],
    terms: Object(external_wp_i18n_["__"])('30-day free trial. No credit card needed.', 'woocommerce-admin'),
    actionText: avalaraActivated ? Object(external_wp_i18n_["__"])('Continue setup', 'woocommerce-admin') : Object(external_wp_i18n_["__"])('Enable & set up', 'woocommerce-admin'),
    onClick: () => {
      Object(external_wc_tracks_["recordEvent"])('tasklist_tax_select_option', {
        selected_option: 'avalara'
      });

      if (avalaraActivated) {
        window.location.href = Object(wc_admin_settings_build_module["e" /* getAdminLink */])('/admin.php?page=wc-settings&tab=tax&section=avatax');
        return;
      }

      window.open(new URL('https://woocommerce.com/products/woocommerce-avatax/'), '_blank');
    }
  });
};
// EXTERNAL MODULE: ./client/tasks/fills/tax/woocommerce-tax/logo.png
var woocommerce_tax_logo = __webpack_require__(577);
var woocommerce_tax_logo_default = /*#__PURE__*/__webpack_require__.n(woocommerce_tax_logo);

// CONCATENATED MODULE: ./client/tasks/fills/tax/woocommerce-tax/card.tsx


/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



const card_Card = () => {
  return Object(external_wp_element_["createElement"])(PartnerCard, {
    name: Object(external_wp_i18n_["__"])('WooCommerce Tax', 'woocommerce-admin'),
    logo: woocommerce_tax_logo_default.a,
    description: Object(external_wp_i18n_["__"])('Best for new stores', 'woocommerce-admin'),
    benefits: [Object(external_wp_i18n_["__"])('Real-time sales tax calculation', 'woocommerce-admin'), lib_default()({
      mixedString: Object(external_wp_i18n_["__"])('{{strong}}Single{{/strong}} economic nexus compliance', 'woocommerce-admin'),
      components: {
        strong: Object(external_wp_element_["createElement"])("strong", null)
      }
    }), lib_default()({
      mixedString: Object(external_wp_i18n_["__"])('Powered by {{link}}Jetpack{{/link}}', 'woocommerce-admin'),
      components: {
        link: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
          type: "external",
          href: "https://woocommerce.com/products/jetpack/?utm_medium=product",
          target: "_blank"
        })
      }
    }), // eslint-disable-next-line @wordpress/i18n-translator-comments
    Object(external_wp_i18n_["__"])('100% free', 'woocommerce-admin')],
    terms: lib_default()({
      mixedString: Object(external_wp_i18n_["__"])('By installing WooCommerce Tax and Jetpack you agree to the {{link}}Terms of Service{{/link}}.', 'woocommerce-admin'),
      components: {
        link: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
          href: 'https://wordpress.com/tos/',
          target: "_blank",
          type: "external"
        })
      }
    }),
    actionText: Object(external_wp_i18n_["__"])('Continue setup', 'woocommerce-admin'),
    onClick: () => {
      Object(external_wc_tracks_["recordEvent"])('tasklist_tax_select_option', {
        selected_option: 'woocommerce-tax'
      });
      Object(external_wc_navigation_["updateQueryString"])({
        partner: 'woocommerce-tax'
      });
    }
  });
};
// CONCATENATED MODULE: ./client/tasks/fills/tax/manual-configuration/configure.tsx


/**
 * External dependencies
 */







/**
 * Internal dependencies
 */

const configure_Configure = ({
  isPending,
  onManual
}) => {
  const {
    generalSettings
  } = Object(external_wp_data_["useSelect"])(select => {
    var _getSettings;

    const {
      getSettings
    } = select(external_wc_data_["SETTINGS_STORE_NAME"]);
    return {
      generalSettings: (_getSettings = getSettings('general')) === null || _getSettings === void 0 ? void 0 : _getSettings.general
    };
  });
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isPrimary: true,
    disabled: isPending,
    isBusy: isPending,
    onClick: () => {
      Object(external_wc_tracks_["recordEvent"])('tasklist_tax_config_rates', {});
      onManual();
    }
  }, Object(external_wp_i18n_["__"])('Configure', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("p", null, generalSettings.woocommerce_calc_taxes !== 'yes' && lib_default()({
    mixedString: Object(external_wp_i18n_["__"])(
    /*eslint-disable max-len*/
    'By clicking "Configure" you\'re enabling tax rates and calculations. More info {{link}}here{{/link}}.',
    /*eslint-enable max-len*/
    'woocommerce-admin'),
    components: {
      link: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
        href: "https://docs.woocommerce.com/document/setting-up-taxes-in-woocommerce/?utm_medium=product#section-1",
        target: "_blank",
        type: "external"
      })
    }
  })));
};
// CONCATENATED MODULE: ./client/tasks/fills/tax/components/store-location.tsx


/**
 * External dependencies
 */




/**
 * Internal dependencies
 */




const store_location_StoreLocation = ({
  nextStep
}) => {
  const {
    updateAndPersistSettingsForGroup
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["SETTINGS_STORE_NAME"]);
  const {
    generalSettings,
    isResolving
  } = Object(external_wp_data_["useSelect"])(select => {
    var _getSettings;

    const {
      getSettings,
      hasFinishedResolution
    } = select(external_wc_data_["SETTINGS_STORE_NAME"]);
    return {
      generalSettings: (_getSettings = getSettings('general')) === null || _getSettings === void 0 ? void 0 : _getSettings.general,
      isResolving: !hasFinishedResolution('getSettings', ['general'])
    };
  });
  Object(external_wp_element_["useEffect"])(() => {
    if (isResolving || !hasCompleteAddress(generalSettings)) {
      return;
    }

    nextStep();
  }, [isResolving]);

  if (isResolving) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(location_StoreLocation, {
    onComplete: values => {
      const country = Object(utils["b" /* getCountryCode */])(values.countryState);
      Object(external_wc_tracks_["recordEvent"])('tasklist_tax_set_location', {
        country
      });
      nextStep();
    },
    isSettingsRequesting: false,
    settings: generalSettings,
    updateAndPersistSettingsForGroup: updateAndPersistSettingsForGroup
  });
};
// CONCATENATED MODULE: ./client/tasks/fills/tax/manual-configuration/index.tsx


/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const ManualConfiguration = ({
  isPending,
  onDisable,
  onAutomate,
  onManual
}) => {
  const [stepIndex, setStepIndex] = Object(external_wp_element_["useState"])(0);

  const nextStep = () => {
    setStepIndex(stepIndex + 1);
  };

  const stepProps = {
    isPending,
    onAutomate,
    onDisable,
    nextStep,
    onManual
  };
  const steps = [{
    key: 'store_location',
    label: Object(external_wp_i18n_["__"])('Set store location', 'woocommerce-admin'),
    description: Object(external_wp_i18n_["__"])('The address from which your business operates', 'woocommerce-admin'),
    content: Object(external_wp_element_["createElement"])(store_location_StoreLocation, stepProps)
  }, {
    key: 'manual_configuration',
    label: Object(external_wp_i18n_["__"])('Configure tax rates', 'woocommerce-admin'),
    description: Object(external_wp_i18n_["__"])('Head over to the tax rate settings screen to configure your tax rates', 'woocommerce-admin'),
    content: Object(external_wp_element_["createElement"])(configure_Configure, stepProps)
  }];
  const step = steps[stepIndex];
  return Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
    isVertical: true,
    currentStep: step.key,
    steps: steps
  });
};
// EXTERNAL MODULE: ./client/tasks/fills/tax/components/partners.scss
var components_partners = __webpack_require__(578);

// CONCATENATED MODULE: ./client/tasks/fills/tax/components/partners.tsx


/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


const Partners = ({
  children,
  isPending,
  onManual,
  onDisable
}) => {
  const classes = classnames_default()('woocommerce-task-card', 'woocommerce-tax-partners', `woocommerce-tax-partners__partners-count-${external_wp_element_["Children"].count(children)}`);
  return Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
    className: classes
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardHeader"], null, Object(external_wp_i18n_["__"])('Choose a tax partner', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], null, Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-tax-partners__partners"
  }, children), Object(external_wp_element_["createElement"])("ul", {
    className: "woocommerce-tax-partners__other-actions"
  }, Object(external_wp_element_["createElement"])("li", null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isTertiary: true,
    disabled: isPending,
    isBusy: isPending,
    onClick: () => {
      onManual();
    }
  }, Object(external_wp_i18n_["__"])('Set up taxes manually', 'woocommerce-admin'))), Object(external_wp_element_["createElement"])("li", null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isTertiary: true,
    disabled: isPending,
    isBusy: isPending,
    onClick: () => {
      onDisable();
    }
  }, Object(external_wp_i18n_["__"])("I don't charge sales tax", 'woocommerce-admin'))))));
};
// CONCATENATED MODULE: ./client/tasks/fills/tax/woocommerce-tax/automated-taxes.tsx


/**
 * External dependencies
 */





/**
 * Internal dependencies
 */

const AutomatedTaxes = ({
  isPending,
  onAutomate,
  onManual,
  onDisable
}) => {
  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-task-tax__success"
  }, Object(external_wp_element_["createElement"])("span", {
    className: "woocommerce-task-tax__success-icon",
    role: "img",
    "aria-labelledby": "woocommerce-task-tax__success-message"
  }, "\uD83C\uDF8A"), Object(external_wp_element_["createElement"])(external_wc_components_["H"], {
    id: "woocommerce-task-tax__success-message"
  }, Object(external_wp_i18n_["__"])('Good news!', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("p", null, lib_default()({
    mixedString: Object(external_wp_i18n_["__"])('{{strong}}Jetpack{{/strong}} and {{strong}}WooCommerce Tax{{/strong}} ' + 'can automate your sales tax calculations for you.', 'woocommerce-admin'),
    components: {
      strong: Object(external_wp_element_["createElement"])("strong", null)
    }
  })), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isPrimary: true,
    isBusy: isPending,
    onClick: () => {
      Object(external_wc_tracks_["recordEvent"])('tasklist_tax_setup_automated_proceed', {
        setup_automatically: true
      });
      onAutomate();
    }
  }, Object(external_wp_i18n_["__"])('Yes please', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    disabled: isPending,
    isTertiary: true,
    onClick: () => {
      Object(external_wc_tracks_["recordEvent"])('tasklist_tax_setup_automated_proceed', {
        setup_automatically: false
      });
      onManual();
    }
  }, Object(external_wp_i18n_["__"])("No thanks, I'll set up manually", 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    disabled: isPending,
    isTertiary: true,
    onClick: onDisable
  }, Object(external_wp_i18n_["__"])("I don't charge sales tax", 'woocommerce-admin')));
};
// CONCATENATED MODULE: ./client/tasks/fills/tax/woocommerce-tax/connect.tsx


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


const woocommerce_tax_connect_Connect = ({
  onDisable,
  onManual
}) => {
  return Object(external_wp_element_["createElement"])(connect, {
    onConnect: () => {
      Object(external_wc_tracks_["recordEvent"])('tasklist_tax_connect_store', {
        connect: true,
        no_tax: false
      });
    },
    onSkip: () => {
      Object(external_wc_tracks_["queueRecordEvent"])('tasklist_tax_connect_store', {
        connect: false,
        no_tax: false
      });
      onManual();
    },
    skipText: Object(external_wp_i18n_["__"])('Set up tax rates manually', 'woocommerce-admin'),
    onAbort: () => onDisable(),
    abortText: Object(external_wp_i18n_["__"])("My business doesn't charge sales tax", 'woocommerce-admin')
  });
};
// CONCATENATED MODULE: ./client/tasks/fills/tax/woocommerce-tax/plugins.tsx


/**
 * External dependencies
 */








/**
 * Internal dependencies
 */


const Plugins = ({
  nextStep,
  onDisable,
  onManual,
  pluginsToActivate
}) => {
  const {
    updateOptions
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["OPTIONS_STORE_NAME"]);
  const {
    isResolving,
    tosAccepted
  } = Object(external_wp_data_["useSelect"])(select => {
    var _getOption;

    const {
      getOption,
      hasFinishedResolution
    } = select(external_wc_data_["OPTIONS_STORE_NAME"]);
    return {
      isResolving: !hasFinishedResolution('getOption', ['woocommerce_setup_jetpack_opted_in']) || !hasFinishedResolution('getOption', ['wc_connect_options']),
      tosAccepted: ((_getOption = getOption('wc_connect_options')) === null || _getOption === void 0 ? void 0 : _getOption.tos_accepted) || getOption('woocommerce_setup_jetpack_opted_in') === '1'
    };
  });
  Object(external_wp_element_["useEffect"])(() => {
    if (!tosAccepted || pluginsToActivate.length) {
      return;
    }

    nextStep();
  }, [isResolving]);
  const agreementText = pluginsToActivate.includes('woocommerce-services') ? Object(external_wp_i18n_["__"])('By installing Jetpack and WooCommerce Tax you agree to the {{link}}Terms of Service{{/link}}.', 'woocommerce-admin') : Object(external_wp_i18n_["__"])('By installing Jetpack you agree to the {{link}}Terms of Service{{/link}}.', 'woocommerce-admin');

  if (isResolving) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["Plugins"], {
    onComplete: (activatedPlugins, response) => {
      Object(notices["a" /* createNoticesFromResponse */])(response);
      Object(external_wc_tracks_["recordEvent"])('tasklist_tax_install_extensions', {
        install_extensions: true
      });
      updateOptions({
        woocommerce_setup_jetpack_opted_in: true
      });
      nextStep();
    },
    onError: (errors, response) => Object(notices["a" /* createNoticesFromResponse */])(response),
    onSkip: () => {
      Object(external_wc_tracks_["queueRecordEvent"])('tasklist_tax_install_extensions', {
        install_extensions: false
      });
      onManual();
    },
    skipText: Object(external_wp_i18n_["__"])('Set up manually', 'woocommerce-admin'),
    onAbort: () => onDisable(),
    abortText: Object(external_wp_i18n_["__"])("I don't charge sales tax", 'woocommerce-admin')
  }), !tosAccepted && Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    variant: "caption",
    className: "woocommerce-task__caption",
    size: "12",
    lineHeight: "16px"
  }, lib_default()({
    mixedString: agreementText,
    components: {
      link: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
        href: 'https://wordpress.com/tos/',
        target: "_blank",
        type: "external"
      })
    }
  })));
};
// EXTERNAL MODULE: ./client/tasks/fills/tax/woocommerce-tax/setup.scss
var setup = __webpack_require__(579);

// CONCATENATED MODULE: ./client/tasks/fills/tax/woocommerce-tax/setup.tsx


/**
 * External dependencies
 */






/**
 * Internal dependencies
 */






const setup_Setup = ({
  isPending,
  onDisable,
  onAutomate,
  onManual
}) => {
  const [pluginsToActivate, setPluginsToActivate] = Object(external_wp_element_["useState"])([]);
  const {
    activePlugins,
    isResolving
  } = Object(external_wp_data_["useSelect"])(select => {
    var _getSettings;

    const {
      getSettings
    } = select(external_wc_data_["SETTINGS_STORE_NAME"]);
    const {
      hasFinishedResolution
    } = select(external_wc_data_["OPTIONS_STORE_NAME"]);
    const {
      getActivePlugins
    } = select(external_wc_data_["PLUGINS_STORE_NAME"]);
    return {
      activePlugins: getActivePlugins(),
      generalSettings: (_getSettings = getSettings('general')) === null || _getSettings === void 0 ? void 0 : _getSettings.general,
      isResolving: !hasFinishedResolution('getOption', ['woocommerce_setup_jetpack_opted_in']) || !hasFinishedResolution('getOption', ['wc_connect_options'])
    };
  });
  const [stepIndex, setStepIndex] = Object(external_wp_element_["useState"])(0);
  Object(external_wp_element_["useEffect"])(() => {
    const remainingPlugins = Object(external_lodash_["difference"])(AUTOMATION_PLUGINS, activePlugins);

    if (remainingPlugins.length <= pluginsToActivate.length) {
      return;
    }

    setPluginsToActivate(remainingPlugins);
  }, [activePlugins]);

  const nextStep = () => {
    setStepIndex(stepIndex + 1);
  };

  const stepProps = {
    isPending,
    isResolving,
    onAutomate,
    onDisable,
    nextStep,
    onManual,
    pluginsToActivate
  };
  const steps = [{
    key: 'store_location',
    label: Object(external_wp_i18n_["__"])('Set store location', 'woocommerce-admin'),
    description: Object(external_wp_i18n_["__"])('The address from which your business operates', 'woocommerce-admin'),
    content: Object(external_wp_element_["createElement"])(store_location_StoreLocation, stepProps)
  }, {
    key: 'plugins',
    label: pluginsToActivate.includes('woocommerce-services') ? Object(external_wp_i18n_["__"])('Install Jetpack and WooCommerce Tax', 'woocommerce-admin') : Object(external_wp_i18n_["__"])('Install Jetpack', 'woocommerce-admin'),
    description: Object(external_wp_i18n_["__"])('Jetpack and WooCommerce Tax allow you to automate sales tax calculations', 'woocommerce-admin'),
    content: Object(external_wp_element_["createElement"])(Plugins, stepProps)
  }, {
    key: 'connect',
    label: Object(external_wp_i18n_["__"])('Connect your store', 'woocommerce-admin'),
    description: Object(external_wp_i18n_["__"])('Connect your store to WordPress.com to enable automated sales tax calculations', 'woocommerce-admin'),
    content: Object(external_wp_element_["createElement"])(woocommerce_tax_connect_Connect, stepProps)
  }];
  const step = steps[stepIndex];
  return Object(external_wp_element_["createElement"])(external_wc_components_["Stepper"], {
    isPending: isResolving,
    isVertical: true,
    currentStep: step.key,
    steps: steps
  });
};
// CONCATENATED MODULE: ./client/tasks/fills/tax/woocommerce-tax/index.tsx


/**
 * External dependencies
 */




/**
 * Internal dependencies
 */




const WooCommerceTax = ({
  isPending,
  onAutomate,
  onManual,
  onDisable
}) => {
  const {
    generalSettings,
    isJetpackConnected,
    isResolving,
    pluginsToActivate
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getSettings
    } = select(external_wc_data_["SETTINGS_STORE_NAME"]);
    const {
      getActivePlugins,
      hasFinishedResolution
    } = select(external_wc_data_["PLUGINS_STORE_NAME"]);
    const activePlugins = getActivePlugins();
    return {
      generalSettings: getSettings('general').general,
      isJetpackConnected: select(external_wc_data_["PLUGINS_STORE_NAME"]).isJetpackConnected(),
      isResolving: !hasFinishedResolution('isJetpackConnected') || !select(external_wc_data_["SETTINGS_STORE_NAME"]).hasFinishedResolution('getSettings', ['general']) || !hasFinishedResolution('getActivePlugins'),
      pluginsToActivate: Object(external_lodash_["difference"])(AUTOMATION_PLUGINS, activePlugins)
    };
  });

  const canAutomateTaxes = () => {
    return hasCompleteAddress(generalSettings) && !pluginsToActivate.length && isJetpackConnected;
  };

  if (isResolving) {
    return Object(external_wp_element_["createElement"])(external_wc_components_["Spinner"], null);
  }

  const childProps = {
    isPending,
    onAutomate,
    onManual,
    onDisable
  };

  if (canAutomateTaxes()) {
    return Object(external_wp_element_["createElement"])(AutomatedTaxes, childProps);
  }

  return Object(external_wp_element_["createElement"])(setup_Setup, childProps);
};
// CONCATENATED MODULE: ./client/tasks/fills/tax/index.tsx
/**
 * External dependencies
 */










/**
 * Internal dependencies
 */










const TaskCard = ({
  children
}) => {
  return Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
    className: "woocommerce-task-card"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], null, children));
};

const Tax = ({
  onComplete,
  query,
  task
}) => {
  const [isPending, setIsPending] = Object(external_wp_element_["useState"])(false);
  const {
    updateOptions
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["OPTIONS_STORE_NAME"]);
  const {
    createNotice
  } = Object(external_wp_data_["useDispatch"])('core/notices');
  const {
    updateAndPersistSettingsForGroup
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["SETTINGS_STORE_NAME"]);
  const {
    generalSettings,
    isResolving,
    taxSettings
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getSettings,
      hasFinishedResolution
    } = select(external_wc_data_["SETTINGS_STORE_NAME"]);
    return {
      generalSettings: getSettings('general').general,
      isResolving: !hasFinishedResolution('getSettings', ['general']),
      taxSettings: getSettings('tax').tax || {}
    };
  });
  const onManual = Object(external_wp_element_["useCallback"])(async () => {
    setIsPending(true);

    if (generalSettings.woocommerce_calc_taxes !== 'yes') {
      updateAndPersistSettingsForGroup('tax', {
        tax: { ...taxSettings,
          wc_connect_taxes_enabled: 'no'
        }
      });
      updateAndPersistSettingsForGroup('general', {
        general: { ...generalSettings,
          woocommerce_calc_taxes: 'yes'
        }
      }).then(() => redirectToTaxSettings()).catch(error => {
        setIsPending(false);
        Object(notices["a" /* createNoticesFromResponse */])(error);
      });
    } else {
      redirectToTaxSettings();
    }
  }, []);
  const onAutomate = Object(external_wp_element_["useCallback"])(() => {
    setIsPending(true);
    updateAndPersistSettingsForGroup('tax', {
      tax: { ...taxSettings,
        wc_connect_taxes_enabled: 'yes'
      }
    });
    updateAndPersistSettingsForGroup('general', {
      general: { ...generalSettings,
        woocommerce_calc_taxes: 'yes'
      }
    });
    createNotice('success', Object(external_wp_i18n_["__"])("You're awesome! One less item on your to-do list ✅", 'woocommerce-admin'));
    onComplete();
  }, []);
  const onDisable = Object(external_wp_element_["useCallback"])(() => {
    setIsPending(true);
    Object(external_wc_tracks_["queueRecordEvent"])('tasklist_tax_connect_store', {
      connect: false,
      no_tax: true
    });
    updateOptions({
      woocommerce_no_sales_tax: true,
      woocommerce_calc_taxes: 'no'
    }).then(() => {
      window.location.href = Object(wc_admin_settings_build_module["e" /* getAdminLink */])('admin.php?page=wc-admin');
    });
  }, []);

  const getVisiblePartners = () => {
    const countryCode = Object(utils["b" /* getCountryCode */])(generalSettings === null || generalSettings === void 0 ? void 0 : generalSettings.woocommerce_default_country);
    const {
      woocommerceTaxCountries = [],
      taxJarActivated
    } = task.additionalData;
    const partners = [{
      id: 'woocommerce-tax',
      card: card_Card,
      component: WooCommerceTax,
      isVisible: !taxJarActivated && // WCS integration doesn't work with the official TaxJar plugin.
      woocommerceTaxCountries.includes(Object(utils["b" /* getCountryCode */])(generalSettings === null || generalSettings === void 0 ? void 0 : generalSettings.woocommerce_default_country))
    }, {
      id: 'avalara',
      card: Card,
      component: null,
      isVisible: supportsAvalara(countryCode)
    }];
    return partners.filter(partner => partner.isVisible);
  };

  const partners = getVisiblePartners();
  Object(external_wp_element_["useEffect"])(() => {
    const {
      auto
    } = query;

    if (auto === 'true') {
      onAutomate();
      return;
    }

    if (query.partner) {
      return;
    }

    Object(external_wc_tracks_["recordEvent"])('tasklist_tax_view_options', {
      options: partners.map(partner => partner.id)
    });
  }, []);

  const getCurrentPartner = () => {
    if (!query.partner) {
      return null;
    }

    return partners.find(partner => partner.id === query.partner) || null;
  };

  Object(external_wp_element_["useEffect"])(() => {
    if (partners.length > 1 || query.partner) {
      return;
    }

    if (partners.length === 1 && partners[0].component) {
      Object(external_wc_navigation_["updateQueryString"])({
        partner: partners[0].id
      });
    }
  }, [partners]);
  const childProps = {
    isPending,
    onAutomate,
    onManual,
    onDisable,
    task
  };

  if (isResolving) {
    return Object(external_wp_element_["createElement"])(external_wp_components_["Spinner"], null);
  }

  const currentPartner = getCurrentPartner();

  if (!partners.length) {
    return Object(external_wp_element_["createElement"])(TaskCard, null, Object(external_wp_element_["createElement"])(ManualConfiguration, childProps));
  }

  if (currentPartner) {
    return Object(external_wp_element_["createElement"])(TaskCard, null, Object(external_wp_element_["createElement"])(currentPartner.component, childProps));
  }

  return Object(external_wp_element_["createElement"])(Partners, childProps, partners.map(partner => Object(external_wp_element_["createElement"])(partner.card, {
    key: partner.id,
    ...childProps
  })));
};

Object(external_wp_plugins_["registerPlugin"])('wc-admin-onboarding-task-tax', {
  scope: 'woocommerce-tasks',
  render: () => Object(external_wp_element_["createElement"])(build_module["WooOnboardingTask"], {
    id: "tax"
  }, ({
    onComplete,
    query,
    task
  }) => Object(external_wp_element_["createElement"])(Tax, {
    onComplete: onComplete,
    query: query,
    task: task
  }))
});
// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(5);

// CONCATENATED MODULE: ./client/tasks/fills/woocommerce-payments.js


/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



const WoocommercePaymentsTaskItem = () => {
  const {
    installAndActivatePlugins
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["PLUGINS_STORE_NAME"]);
  const {
    createNotice
  } = Object(external_wp_data_["useDispatch"])('core/notices');
  return Object(external_wp_element_["createElement"])(build_module["WooOnboardingTaskListItem"], {
    id: "woocommerce-payments"
  }, ({
    defaultTaskItem: DefaultTaskItem
  }) => Object(external_wp_element_["createElement"])(DefaultTaskItem, {
    onClick: () => {
      return new Promise((resolve, reject) => {
        return Object(WCPay["b" /* installActivateAndConnectWcpay */])(reject, createNotice, installAndActivatePlugins);
      });
    }
  }));
};

Object(external_wp_plugins_["registerPlugin"])('woocommerce-admin-task-wcpay', {
  scope: 'woocommerce-tasks',
  render: WoocommercePaymentsTaskItem
});
// EXTERNAL MODULE: external ["wp","htmlEntities"]
var external_wp_htmlEntities_ = __webpack_require__(30);

// EXTERNAL MODULE: ./client/lib/in-app-purchase.js
var in_app_purchase = __webpack_require__(162);

// CONCATENATED MODULE: ./client/dashboard/components/cart-modal.js


/**
 * External dependencies
 */











/**
 * Internal dependencies
 */





class cart_modal_CartModal extends external_wp_element_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      purchaseNowButtonBusy: false,
      purchaseLaterButtonBusy: false
    };
  }

  onClickPurchaseNow() {
    const {
      productIds,
      onClickPurchaseNow
    } = this.props;
    this.setState({
      purchaseNowButtonBusy: true
    });

    if (!productIds.length) {
      return;
    }

    Object(external_wc_tracks_["recordEvent"])('tasklist_modal_proceed_checkout', {
      product_ids: productIds,
      purchase_install: true
    });
    const url = Object(in_app_purchase["a" /* getInAppPurchaseUrl */])('https://woocommerce.com/cart?utm_medium=product', {
      'wccom-replace-with': productIds.join(',')
    });

    if (onClickPurchaseNow) {
      onClickPurchaseNow(url);
      return;
    }

    window.location = url;
  }

  onClickPurchaseLater() {
    const {
      productIds
    } = this.props;
    Object(external_wc_tracks_["recordEvent"])('tasklist_modal_proceed_checkout', {
      product_ids: productIds,
      purchase_install: false
    });
    this.setState({
      purchaseLaterButtonBusy: true
    });
    this.props.onClickPurchaseLater();
  }

  onClose() {
    const {
      onClose,
      productIds
    } = this.props;
    Object(external_wc_tracks_["recordEvent"])('tasklist_modal_proceed_checkout', {
      product_ids: productIds,
      purchase_install: false
    });
    onClose();
  }

  renderProducts() {
    const {
      productIds,
      productTypes
    } = this.props;
    const {
      themes = []
    } = Object(wc_admin_settings_build_module["f" /* getSetting */])('onboarding', {});
    const listItems = [];
    productIds.forEach(productId => {
      const productInfo = Object(external_lodash_["find"])(productTypes, productType => {
        return productType.product === productId;
      });

      if (productInfo) {
        listItems.push({
          title: productInfo.label,
          content: productInfo.description
        });
      }

      const themeInfo = Object(external_lodash_["find"])(themes, theme => {
        return theme.id === productId;
      });

      if (themeInfo) {
        listItems.push({
          title: Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('%s — %s per year', 'woocommerce-admin'), themeInfo.title, Object(external_wp_htmlEntities_["decodeEntities"])(themeInfo.price)),
          content: Object(external_wp_element_["createElement"])("span", {
            dangerouslySetInnerHTML: Object(sanitize_html["a" /* default */])(themeInfo.excerpt)
          })
        });
      }
    });
    return Object(external_wp_element_["createElement"])(external_wc_components_["List"], {
      items: listItems
    });
  }

  render() {
    const {
      purchaseNowButtonBusy,
      purchaseLaterButtonBusy
    } = this.state;
    return Object(external_wp_element_["createElement"])(external_wp_components_["Modal"], {
      title: Object(external_wp_i18n_["__"])('Would you like to add the following paid features to your store now?', 'woocommerce-admin'),
      onRequestClose: () => this.onClose(),
      className: "woocommerce-cart-modal"
    }, this.renderProducts(), Object(external_wp_element_["createElement"])("p", {
      className: "woocommerce-cart-modal__help-text"
    }, Object(external_wp_i18n_["__"])("You won't have access to this functionality until the extensions have been purchased and installed.", 'woocommerce-admin')), Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-cart-modal__actions"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      isLink: true,
      isBusy: purchaseLaterButtonBusy,
      onClick: () => this.onClickPurchaseLater()
    }, Object(external_wp_i18n_["__"])("I'll do it later", 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      isPrimary: true,
      isBusy: purchaseNowButtonBusy,
      onClick: () => this.onClickPurchaseNow()
    }, Object(external_wp_i18n_["__"])('Buy now', 'woocommerce-admin'))));
  }

}

/* harmony default export */ var cart_modal = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(select => {
  const {
    getInstalledPlugins
  } = select(external_wc_data_["PLUGINS_STORE_NAME"]);
  const {
    getProductTypes,
    getProfileItems
  } = select(external_wc_data_["ONBOARDING_STORE_NAME"]);
  const profileItems = getProfileItems();
  const installedPlugins = getInstalledPlugins();
  const productTypes = getProductTypes();
  const productIds = Object(utils["e" /* getProductIdsForCart */])(productTypes, profileItems, false, installedPlugins);
  return {
    profileItems,
    productIds,
    productTypes
  };
}))(cart_modal_CartModal));
// CONCATENATED MODULE: ./client/tasks/fills/purchase.js


/**
 * External dependencies
 */







/**
 * Internal dependencies
 */




const PurchaseTaskItem = () => {
  const [cartModalOpen, setCartModalOpen] = Object(external_wp_element_["useState"])(false);
  const {
    installedPlugins,
    productTypes,
    profileItems
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getProductTypes,
      getProfileItems
    } = select(external_wc_data_["ONBOARDING_STORE_NAME"]);
    const {
      getInstalledPlugins
    } = select(external_wc_data_["PLUGINS_STORE_NAME"]);
    return {
      installedPlugins: getInstalledPlugins(),
      productTypes: getProductTypes(),
      profileItems: getProfileItems()
    };
  });
  const toggleCartModal = Object(external_wp_element_["useCallback"])(() => {
    if (!cartModalOpen) {
      Object(external_wc_tracks_["recordEvent"])('tasklist_purchase_extensions');
    }

    setCartModalOpen(!cartModalOpen);
  }, [cartModalOpen]);
  const groupedProducts = Object(utils["a" /* getCategorizedOnboardingProducts */])(productTypes, profileItems, installedPlugins);
  const {
    remainingProducts
  } = groupedProducts;
  return Object(external_wp_element_["createElement"])(build_module["WooOnboardingTaskListItem"], {
    id: "purchase"
  }, ({
    defaultTaskItem: DefaultTaskItem
  }) => Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(DefaultTaskItem, {
    onClick: () => {
      if (remainingProducts.length) {
        toggleCartModal();
      }
    }
  }), cartModalOpen && Object(external_wp_element_["createElement"])(cart_modal, {
    onClose: () => toggleCartModal(),
    onClickPurchaseLater: () => toggleCartModal()
  })));
};

Object(external_wp_plugins_["registerPlugin"])('woocommerce-admin-task-purchase', {
  scope: 'woocommerce-tasks',
  render: PurchaseTaskItem
});
// CONCATENATED MODULE: ./client/tasks/fills/index.js
/**
 * Internal dependencies
 */









// CONCATENATED MODULE: ./client/tasks/deprecated-tasks.tsx


/**
 * External dependencies
 */






const DeprecatedWooOnboardingTaskFills = () => {
  const [deprecatedTasks, setDeprecatedTasks] = Object(external_wp_element_["useState"])([]);
  const {
    isResolving,
    taskLists
  } = Object(external_wp_data_["useSelect"])(select => {
    return {
      isResolving: select(external_wc_data_["ONBOARDING_STORE_NAME"]).isResolving('getTaskLists'),
      taskLists: select(external_wc_data_["ONBOARDING_STORE_NAME"]).getTaskLists()
    };
  });
  Object(external_wp_element_["useEffect"])(() => {
    if (taskLists && taskLists.length > 0) {
      const deprecatedTasksWithContainer = [];

      for (const tasklist of taskLists) {
        for (const task of tasklist.tasks) {
          if (task.isDeprecated && task.container) {
            deprecatedTasksWithContainer.push(task);
          }
        }
      }

      setDeprecatedTasks(deprecatedTasksWithContainer);
    }
  }, [taskLists]);

  if (isResolving) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, deprecatedTasks.map(task => Object(external_wp_element_["createElement"])(build_module["WooOnboardingTask"], {
    id: task.id,
    key: task.id
  }, ({
    onComplete
  }) => task.container)));
};

Object(external_wp_plugins_["registerPlugin"])('wc-admin-deprecated-task-container', {
  scope: 'woocommerce-tasks',
  render: () => Object(external_wp_element_["createElement"])(DeprecatedWooOnboardingTaskFills, null)
});
// CONCATENATED MODULE: ./client/tasks/index.ts
/**
 * Internal dependencies
 */




/* harmony default export */ var client_tasks = __webpack_exports__["default"] = (Tasks);

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(14);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(7);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(4);

// EXTERNAL MODULE: ./packages/wc-admin-settings/build-module/index.js
var build_module = __webpack_require__(13);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(11);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(9);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external ["wc","explat"]
var external_wc_explat_ = __webpack_require__(121);

// EXTERNAL MODULE: ./client/header/activity-panel/activity-header/index.js
var activity_header = __webpack_require__(525);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(21);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(3);

// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(16);

// EXTERNAL MODULE: ./client/homescreen/activity-panel/style.scss
var style = __webpack_require__(555);

// EXTERNAL MODULE: ./client/homescreen/activity-panel/orders/utils.js
var utils = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/interpolate-components/lib/index.js
var lib = __webpack_require__(18);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./client/header/activity-panel/activity-card/index.js + 1 modules
var activity_card = __webpack_require__(515);

// EXTERNAL MODULE: ./client/homescreen/activity-panel/orders/style.scss
var orders_style = __webpack_require__(556);

// CONCATENATED MODULE: ./client/homescreen/activity-panel/orders/index.js


/**
 * External dependencies
 */










/**
 * Internal dependencies
 */




function recordOrderEvent(eventName) {
  Object(external_wc_tracks_["recordEvent"])(`activity_panel_orders_${eventName}`, {});
}

const renderEmptyCard = () => {
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(activity_card["a" /* ActivityCard */], {
    className: "woocommerce-empty-activity-card",
    title: "",
    icon: ""
  }, Object(external_wp_element_["createElement"])("span", {
    className: "woocommerce-order-empty__success-icon",
    role: "img",
    "aria-labelledby": "woocommerce-order-empty-message"
  }, "\uD83C\uDF89"), Object(external_wp_element_["createElement"])(external_wc_components_["H"], {
    id: "woocommerce-order-empty-message"
  }, Object(external_wp_i18n_["__"])('You’ve fulfilled all your orders', 'woocommerce-admin'))), Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
    href: 'edit.php?post_type=shop_order',
    onClick: () => recordOrderEvent('orders_manage'),
    className: "woocommerce-layout__activity-panel-outbound-link woocommerce-layout__activity-panel-empty",
    type: "wp-admin"
  }, Object(external_wp_i18n_["__"])('Manage all orders', 'woocommerce-admin')));
};

function renderOrders(orders) {
  if (orders.length === 0) {
    return renderEmptyCard();
  }

  const getCustomerString = order => {
    const {
      first_name: firstName,
      last_name: lastName
    } = order.customer || {};

    if (!firstName && !lastName) {
      return '';
    }

    const name = [firstName, lastName].join(' ');
    return `{{customerLink}}${name}{{/customerLink}}`;
  };

  const orderCardTitle = order => {
    const {
      id: orderId,
      number: orderNumber,
      customer
    } = order;
    let customerUrl = null;

    if (customer && customer.customer_id) {
      customerUrl = window.wcAdminFeatures.analytics ? Object(external_wc_navigation_["getNewPath"])({}, '/analytics/customers', {
        filter: 'single_customer',
        customers: customer.customer_id
      }) : Object(build_module["e" /* getAdminLink */])('user-edit.php?user_id=' + customer.customer_id);
    }

    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, lib_default()({
      mixedString: Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('{{orderLink}}Order #%(orderNumber)s{{/orderLink}} %(customerString)s', 'woocommerce-admin'), {
        orderNumber,
        customerString: getCustomerString(order)
      }),
      components: {
        orderLink: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
          href: Object(build_module["e" /* getAdminLink */])('post.php?action=edit&post=' + orderId),
          onClick: () => recordOrderEvent('order_number'),
          type: "wp-admin"
        }),
        destinationFlag: customer && customer.country ? Object(external_wp_element_["createElement"])(external_wc_components_["Flag"], {
          code: customer && customer.country,
          round: false
        }) : null,
        customerLink: customerUrl ? Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
          href: customerUrl,
          onClick: () => recordOrderEvent('customer_name'),
          type: "wc-admin"
        }) : Object(external_wp_element_["createElement"])("span", null)
      }
    }));
  };

  const cards = [];
  orders.forEach(order => {
    const {
      date_created_gmt: dateCreatedGmt,
      products,
      id: orderId
    } = order;
    const productsCount = products ? products.length : 0;
    cards.push(Object(external_wp_element_["createElement"])(activity_card["a" /* ActivityCard */], {
      key: orderId,
      className: "woocommerce-order-activity-card",
      title: orderCardTitle(order),
      date: dateCreatedGmt,
      onClick: ({
        target
      }) => {
        recordOrderEvent('orders_begin_fulfillment');

        if (!target.href) {
          window.location.href = Object(build_module["e" /* getAdminLink */])(`post.php?action=edit&post=${orderId}`);
        }
      },
      subtitle: Object(external_wp_element_["createElement"])("div", null, Object(external_wp_element_["createElement"])("span", null, Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["_n"])('%d product', '%d products', productsCount, 'woocommerce-admin'), productsCount)), Object(external_wp_element_["createElement"])("span", null, order.total_formatted))
    }, Object(external_wp_element_["createElement"])(external_wc_components_["OrderStatus"], {
      order: order,
      orderStatusMap: Object(build_module["f" /* getSetting */])('orderStatuses', {})
    })));
  });
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, cards, Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
    href: 'edit.php?post_type=shop_order',
    className: "woocommerce-layout__activity-panel-outbound-link",
    onClick: () => recordOrderEvent('orders_manage'),
    type: "wp-admin"
  }, Object(external_wp_i18n_["__"])('Manage all orders', 'woocommerce-admin')));
}

function OrdersPanel({
  countUnreadOrders,
  orderStatuses
}) {
  const actionableOrdersQuery = Object(external_wp_element_["useMemo"])(() => ({
    page: 1,
    per_page: 5,
    status: orderStatuses,
    _fields: ['id', 'number', 'status', 'total_formatted', 'customer', 'products', 'customer_id', 'date_created_gmt']
  }), [orderStatuses]);
  const {
    orders = [],
    isRequesting,
    isError
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getItems,
      getItemsError,
      isResolving
    } = select(external_wc_data_["ITEMS_STORE_NAME"]);

    if (!orderStatuses.length && countUnreadOrders === 0) {
      return {
        isRequesting: false
      };
    }
    /* eslint-disable @wordpress/no-unused-vars-before-return */


    const orderItems = getItems('orders', actionableOrdersQuery, null);
    const isRequestingActionable = isResolving('getItems', ['orders', actionableOrdersQuery]);

    if (isRequestingActionable || countUnreadOrders === null || orderItems === null) {
      return {
        isError: Boolean(getItemsError('orders', actionableOrdersQuery)),
        isRequesting: true,
        orderStatuses
      };
    }

    const actionableOrders = orderItems ? Array.from(orderItems.values()) : orderItems;
    return {
      orders: actionableOrders,
      isError: Boolean(getItemsError('orders', actionableOrders)),
      isRequesting: isRequestingActionable,
      orderStatuses
    };
  });

  if (isError) {
    if (!orderStatuses.length && window.wcAdminFeatures.analytics) {
      return Object(external_wp_element_["createElement"])(external_wc_components_["EmptyContent"], {
        title: Object(external_wp_i18n_["__"])("You currently don't have any actionable statuses. " + 'To display orders here, select orders that require further review in settings.', 'woocommerce-admin'),
        actionLabel: Object(external_wp_i18n_["__"])('Settings', 'woocommerce-admin'),
        actionURL: Object(build_module["e" /* getAdminLink */])('admin.php?page=wc-admin&path=/analytics/settings')
      });
    }

    const title = Object(external_wp_i18n_["__"])('There was an error getting your orders. Please try again.', 'woocommerce-admin');

    const actionLabel = Object(external_wp_i18n_["__"])('Reload', 'woocommerce-admin');

    const actionCallback = () => {
      // @todo Add tracking for how often an error is displayed, and the reload action is clicked.
      window.location.reload();
    };

    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["EmptyContent"], {
      title: title,
      actionLabel: actionLabel,
      actionURL: null,
      actionCallback: actionCallback
    }));
  }

  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["Section"], null, isRequesting ? Object(external_wp_element_["createElement"])(activity_card["b" /* ActivityCardPlaceholder */], {
    className: "woocommerce-order-activity-card",
    hasAction: true,
    hasDate: true,
    lines: 1
  }) : renderOrders(orders)));
}

OrdersPanel.propTypes = {
  isError: prop_types_default.a.bool,
  isRequesting: prop_types_default.a.bool,
  countUnreadOrders: prop_types_default.a.number,
  orders: prop_types_default.a.array.isRequired,
  orderStatuses: prop_types_default.a.array
};
OrdersPanel.defaultProps = {
  orders: [],
  isError: false,
  isRequesting: false
};
/* harmony default export */ var activity_panel_orders = (OrdersPanel);
// EXTERNAL MODULE: external ["wp","keycodes"]
var external_wp_keycodes_ = __webpack_require__(27);

// CONCATENATED MODULE: ./client/homescreen/activity-panel/stock/card.js


/**
 * External dependencies
 */










/**
 * Internal dependencies
 */


class card_ProductStockCard extends external_wp_element_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      quantity: props.product.stock_quantity,
      editing: false,
      edited: false
    };
    this.beginEdit = this.beginEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.onQuantityChange = this.onQuantityChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  recordStockEvent(eventName, eventProps = {}) {
    Object(external_wc_tracks_["recordEvent"])(`activity_panel_stock_${eventName}`, eventProps);
  }

  beginEdit() {
    const {
      product
    } = this.props;
    this.setState({
      editing: true,
      quantity: product.stock_quantity
    }, () => {
      if (this.quantityInput) {
        this.quantityInput.focus();
      }
    });
    this.recordStockEvent('update_stock');
  }

  cancelEdit() {
    const {
      product
    } = this.props;
    this.setState({
      editing: false,
      quantity: product.stock_quantity
    });
    this.recordStockEvent('cancel');
  }

  handleKeyDown(event) {
    if (event.keyCode === external_wp_keycodes_["ESCAPE"]) {
      this.cancelEdit();
    }
  }

  onQuantityChange(event) {
    this.setState({
      quantity: event.target.value
    });
  }

  async onSubmit() {
    const {
      product,
      updateProductStock,
      createNotice
    } = this.props;
    const quantity = parseInt(this.state.quantity, 10); // Bail on an actual update if the quantity is unchanged.

    if (product.stock_quantity === quantity) {
      this.setState({
        editing: false
      });
      return;
    }

    this.setState({
      editing: false,
      edited: true
    });
    const success = await updateProductStock(product, quantity);

    if (success) {
      createNotice('success', Object(external_wp_i18n_["sprintf"])(
      /* translators: %s = name of the product having stock updated */
      Object(external_wp_i18n_["__"])('%s stock updated', 'woocommerce-admin'), product.name), {
        actions: [{
          label: Object(external_wp_i18n_["__"])('Undo', 'woocommerce-admin'),
          onClick: () => {
            updateProductStock(product, product.stock_quantity);
            this.recordStockEvent('undo');
          }
        }]
      });
    } else {
      createNotice('error', Object(external_wp_i18n_["sprintf"])(
      /* translators: %s = name of the product having stock updated */
      Object(external_wp_i18n_["__"])('%s stock could not be updated', 'woocommerce-admin'), product.name));
    }

    this.recordStockEvent('save', {
      quantity
    });
  }

  getActions() {
    const {
      editing
    } = this.state;

    if (editing) {
      return [Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        key: "save",
        type: "submit",
        isPrimary: true
      }, Object(external_wp_i18n_["__"])('Save', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        key: "cancel",
        type: "reset"
      }, Object(external_wp_i18n_["__"])('Cancel', 'woocommerce-admin'))];
    }

    return [Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      key: "update",
      isSecondary: true,
      onClick: this.beginEdit
    }, Object(external_wp_i18n_["__"])('Update stock', 'woocommerce-admin'))];
  }

  getBody() {
    const {
      product
    } = this.props;
    const {
      editing,
      quantity
    } = this.state;

    if (editing) {
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["BaseControl"], {
        className: "woocommerce-stock-activity-card__edit-quantity"
      }, Object(external_wp_element_["createElement"])("input", {
        className: "components-text-control__input",
        type: "number",
        value: quantity,
        onKeyDown: this.handleKeyDown,
        onChange: this.onQuantityChange,
        ref: input => {
          this.quantityInput = input;
        }
      })), Object(external_wp_element_["createElement"])("span", null, Object(external_wp_i18n_["__"])('in stock', 'woocommerce-admin')));
    }

    return Object(external_wp_element_["createElement"])("span", {
      className: classnames_default()('woocommerce-stock-activity-card__stock-quantity', {
        'out-of-stock': product.stock_quantity < 1
      })
    }, Object(external_wp_i18n_["sprintf"])(
    /* translators: %d = stock quantity of the product being updated */
    Object(external_wp_i18n_["__"])('%d in stock', 'woocommerce-admin'), product.stock_quantity));
  }

  render() {
    const {
      product
    } = this.props;
    const {
      edited,
      editing
    } = this.state;
    const notifyLowStockAmount = Object(build_module["f" /* getSetting */])('notifyLowStockAmount', 0);
    const lowStockAmount = Number.isFinite(product.low_stock_amount) ? product.low_stock_amount : notifyLowStockAmount;
    const isLowStock = product.stock_quantity <= lowStockAmount;
    const lastOrderDate = product.last_order_date ? Object(external_wp_i18n_["sprintf"])(
    /* translators: %s = time since last product order. e.g.: "10 minutes ago" - translated. */
    Object(external_wp_i18n_["__"])('Last ordered %s', 'woocommerce-admin'), external_moment_default.a.utc(product.last_order_date).fromNow()) : null; // Hide cards that are not in low stock and have not been edited.
    // This allows clearing cards which are no longer in low stock after
    // closing & opening the panel without having to make another request.

    if (!isLowStock && !edited) {
      return null;
    }

    const title = Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
      href: 'post.php?action=edit&post=' + (product.parent_id || product.id),
      onClick: () => this.recordStockEvent('product_name'),
      type: "wp-admin"
    }, product.name);
    let subtitle = null;

    if (product.type === 'variation') {
      subtitle = Object.values(product.attributes).map(attr => attr.option).join(', ');
    }

    const productImage = Object(external_lodash_["get"])(product, ['images', 0]) || Object(external_lodash_["get"])(product, ['image']);
    const productImageClasses = classnames_default()('woocommerce-stock-activity-card__image-overlay__product', {
      'is-placeholder': !productImage || !productImage.src
    });
    const icon = Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-stock-activity-card__image-overlay"
    }, Object(external_wp_element_["createElement"])("div", {
      className: productImageClasses
    }, Object(external_wp_element_["createElement"])(external_wc_components_["ProductImage"], {
      product: product
    })));
    const activityCardClasses = classnames_default()('woocommerce-stock-activity-card', {
      'is-dimmed': !editing && !isLowStock
    });
    const activityCard = Object(external_wp_element_["createElement"])(activity_card["a" /* ActivityCard */], {
      className: activityCardClasses,
      title: title,
      subtitle: subtitle,
      icon: icon,
      date: lastOrderDate,
      actions: this.getActions()
    }, this.getBody());

    if (editing) {
      return Object(external_wp_element_["createElement"])("form", {
        onReset: this.cancelEdit,
        onSubmit: this.onSubmit
      }, activityCard);
    }

    return activityCard;
  }

}
// CONCATENATED MODULE: ./client/homescreen/activity-panel/stock/index.js


/**
 * External dependencies
 */







/**
 * Internal dependencies
 */




const productsQuery = {
  page: 1,
  per_page: 5,
  status: 'publish',
  _fields: ['attributes', 'id', 'images', 'last_order_date', 'low_stock_amount', 'name', 'parent_id', 'stock_quantity', 'type']
};
class stock_StockPanel extends external_wp_element_["Component"] {
  constructor(props) {
    super(props);
    this.updateStock = this.updateStock.bind(this);
  }

  async updateStock(product, quantity) {
    const {
      invalidateResolution,
      updateProductStock,
      products
    } = this.props;
    const success = await updateProductStock(product, quantity);

    if (success) {
      // Request more low stock products.
      invalidateResolution('getItems', ['products/low-in-stock', productsQuery]);

      if (products.length < 2) {
        invalidateResolution('getItemsTotalCount', ['products', utils["b" /* getLowStockCountQuery */], null]);
      }
    }

    return success;
  }

  renderProducts() {
    const {
      products,
      createNotice
    } = this.props;
    return products.map(product => Object(external_wp_element_["createElement"])(card_ProductStockCard, {
      key: product.id,
      product: product,
      updateProductStock: this.updateStock,
      createNotice: createNotice
    }));
  }

  render() {
    const {
      countLowStockProducts,
      isError,
      isRequesting,
      products
    } = this.props;

    if (isError) {
      const title = Object(external_wp_i18n_["__"])('There was an error getting your low stock products. Please try again.', 'woocommerce-admin');

      const actionLabel = Object(external_wp_i18n_["__"])('Reload', 'woocommerce-admin');

      const actionCallback = () => {
        // @todo Add tracking for how often an error is displayed, and the reload action is clicked.
        window.location.reload();
      };

      return Object(external_wp_element_["createElement"])(external_wc_components_["EmptyContent"], {
        title: title,
        actionLabel: actionLabel,
        actionURL: null,
        actionCallback: actionCallback
      });
    } // Show placeholders only for the first products fetch.


    if (isRequesting || !products.length) {
      const numPlaceholders = Math.min(5, countLowStockProducts !== null && countLowStockProducts !== void 0 ? countLowStockProducts : 1);
      const placeholders = Array.from(new Array(numPlaceholders)).map((v, idx) => Object(external_wp_element_["createElement"])(activity_card["b" /* ActivityCardPlaceholder */], {
        key: idx,
        className: "woocommerce-stock-activity-card",
        hasAction: true,
        lines: 1
      }));
      return Object(external_wp_element_["createElement"])(external_wc_components_["Section"], null, placeholders);
    }

    return Object(external_wp_element_["createElement"])(external_wc_components_["Section"], null, this.renderProducts());
  }

}
stock_StockPanel.propTypes = {
  countLowStockProducts: prop_types_default.a.number,
  products: prop_types_default.a.array.isRequired,
  isError: prop_types_default.a.bool,
  isRequesting: prop_types_default.a.bool
};
stock_StockPanel.defaultProps = {
  products: [],
  isError: false,
  isRequesting: false
};
/* harmony default export */ var stock = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(select => {
  const {
    getItems,
    getItemsError,
    isResolving
  } = select(external_wc_data_["ITEMS_STORE_NAME"]);
  const products = Array.from(getItems('products/low-in-stock', productsQuery).values());
  const isError = Boolean(getItemsError('products/low-in-stock', productsQuery));
  const isRequesting = isResolving('getItems', ['products/low-in-stock', productsQuery]);
  return {
    products,
    isError,
    isRequesting
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    invalidateResolution,
    updateProductStock
  } = dispatch(external_wc_data_["ITEMS_STORE_NAME"]);
  const {
    createNotice
  } = dispatch('core/notices');
  return {
    createNotice,
    invalidateResolution,
    updateProductStock
  };
}))(stock_StockPanel));
// EXTERNAL MODULE: ./node_modules/gridicons/dist/star.js
var star = __webpack_require__(167);
var star_default = /*#__PURE__*/__webpack_require__.n(star);

// EXTERNAL MODULE: ./node_modules/gridicons/dist/star-outline.js
var star_outline = __webpack_require__(557);
var star_outline_default = /*#__PURE__*/__webpack_require__.n(star_outline);

// EXTERNAL MODULE: ./client/homescreen/activity-panel/reviews/style.scss
var reviews_style = __webpack_require__(558);

// CONCATENATED MODULE: ./client/homescreen/activity-panel/reviews/checkmark-circle-icon.js

/* harmony default export */ var checkmark_circle_icon = (() => Object(external_wp_element_["createElement"])("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_wp_element_["createElement"])("mask", {
  id: "mask0",
  "mask-type": "alpha",
  maskUnits: "userSpaceOnUse",
  x: "1",
  y: "1",
  width: "14",
  height: "14"
}, Object(external_wp_element_["createElement"])("path", {
  d: "M7.99992 1.33301C4.31992 1.33301 1.33325 4.31967 1.33325 7.99967C1.33325 11.6797 4.31992 14.6663 7.99992 14.6663C11.6799 14.6663 14.6666 11.6797 14.6666 7.99967C14.6666 4.31967 11.6799 1.33301 7.99992 1.33301ZM7.99992 13.333C5.05992 13.333 2.66659 10.9397 2.66659 7.99967C2.66659 5.05967 5.05992 2.66634 7.99992 2.66634C10.9399 2.66634 13.3333 5.05967 13.3333 7.99967C13.3333 10.9397 10.9399 13.333 7.99992 13.333ZM6.66658 9.44634L11.0599 5.05301L11.9999 5.99967L6.66658 11.333L3.99992 8.66634L4.93992 7.72634L6.66658 9.44634Z",
  fill: "white"
})), Object(external_wp_element_["createElement"])("g", {
  mask: "url(#mask0)"
}, Object(external_wp_element_["createElement"])("rect", {
  width: "16",
  height: "16",
  fill: "#4AB866"
}))));
// EXTERNAL MODULE: ./client/lib/currency-context.js
var currency_context = __webpack_require__(503);

// EXTERNAL MODULE: ./client/lib/sanitize-html/index.js
var sanitize_html = __webpack_require__(511);

// EXTERNAL MODULE: ./client/homescreen/activity-panel/reviews/utils.js
var reviews_utils = __webpack_require__(103);

// CONCATENATED MODULE: ./client/homescreen/activity-panel/reviews/index.js


/**
 * External dependencies
 */















/**
 * Internal dependencies
 */







const reviewsQuery = {
  page: 1,
  per_page: reviews_utils["a" /* REVIEW_PAGE_LIMIT */],
  status: 'hold',
  _embed: 1
};

class reviews_ReviewsPanel extends external_wp_element_["Component"] {
  recordReviewEvent(eventName, eventData) {
    Object(external_wc_tracks_["recordEvent"])(`reviews_${eventName}`, eventData || {});
  }

  deleteReview(reviewId) {
    const {
      deleteReview,
      createNotice,
      updateReview,
      clearReviewsCache
    } = this.props;

    if (reviewId) {
      deleteReview(reviewId).then(() => {
        clearReviewsCache();
        createNotice('success', Object(external_wp_i18n_["__"])('Review successfully deleted.', 'woocommerce-admin'), {
          actions: [{
            label: Object(external_wp_i18n_["__"])('Undo', 'woocommerce-admin'),
            onClick: () => {
              updateReview(reviewId, {
                status: 'untrash'
              }, {
                _embed: 1
              }).then(() => clearReviewsCache());
            }
          }]
        });
      }).catch(() => {
        createNotice('error', Object(external_wp_i18n_["__"])('Review could not be deleted.', 'woocommerce-admin'));
      });
    }
  }

  updateReviewStatus(reviewId, newStatus, oldStatus) {
    const {
      createNotice,
      updateReview,
      clearReviewsCache
    } = this.props;

    if (reviewId) {
      updateReview(reviewId, {
        status: newStatus
      }).then(() => {
        clearReviewsCache();
        createNotice('success', Object(external_wp_i18n_["__"])('Review successfully updated.', 'woocommerce-admin'), {
          actions: [{
            label: Object(external_wp_i18n_["__"])('Undo', 'woocommerce-admin'),
            onClick: () => {
              updateReview(reviewId, {
                status: oldStatus
              }, {
                _embed: 1
              }).then(() => clearReviewsCache());
            }
          }]
        });
      }).catch(() => {
        createNotice('error', Object(external_wp_i18n_["__"])('Review could not be updated.', 'woocommerce-admin'));
      });
    }
  }

  renderReview(review) {
    const product = review && review._embedded && review._embedded.up && review._embedded.up[0] || null;

    if (review.isUpdating) {
      return Object(external_wp_element_["createElement"])(activity_card["b" /* ActivityCardPlaceholder */], {
        key: review.id,
        className: "woocommerce-review-activity-card",
        hasAction: true,
        hasDate: true,
        lines: 1
      });
    }

    if (Object(external_lodash_["isNull"])(product) || review.status !== reviewsQuery.status) {
      return null;
    }

    const title = lib_default()({
      mixedString: Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('{{authorLink}}%s{{/authorLink}}{{verifiedCustomerIcon/}} reviewed {{productLink}}%s{{/productLink}}', 'woocommerce-admin'), review.reviewer, product.name),
      components: {
        productLink: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
          href: product.permalink,
          onClick: () => this.recordReviewEvent('product'),
          type: "external"
        }),
        authorLink: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
          href: Object(build_module["e" /* getAdminLink */])('admin.php?page=wc-admin&path=%2Fcustomers&search=' + review.reviewer),
          onClick: () => this.recordReviewEvent('customer'),
          type: "external"
        }),
        verifiedCustomerIcon: review.verified ? Object(external_wp_element_["createElement"])("span", {
          className: "woocommerce-review-activity-card__verified"
        }, Object(external_wp_element_["createElement"])(external_wp_components_["Tooltip"], {
          text: Object(external_wp_i18n_["__"])('Verified owner', 'woocommerce-admin')
        }, Object(external_wp_element_["createElement"])("span", null, Object(external_wp_element_["createElement"])(checkmark_circle_icon, null)))) : null
      }
    });
    const subtitle = Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["ReviewRating"], {
      review: review,
      icon: star_outline_default.a,
      outlineIcon: star_default.a,
      size: 13
    }));
    const productImage = Object(external_lodash_["get"])(product, ['images', 0]) || Object(external_lodash_["get"])(product, ['image']);
    const productImageClasses = classnames_default()('woocommerce-review-activity-card__image-overlay__product', {
      'is-placeholder': !productImage || !productImage.src
    });
    const icon = Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-review-activity-card__image-overlay"
    }, Object(external_wp_element_["createElement"])("div", {
      className: productImageClasses
    }, Object(external_wp_element_["createElement"])(external_wc_components_["ProductImage"], {
      product: product,
      width: 33,
      height: 33
    })));
    const manageReviewEvent = {
      date: review.date_created_gmt,
      status: review.status
    };
    const cardActions = [Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      key: "approve-action",
      isSecondary: true,
      onClick: () => {
        this.recordReviewEvent('approve', manageReviewEvent);
        this.updateReviewStatus(review.id, 'approved', review.status);
      }
    }, Object(external_wp_i18n_["__"])('Approve', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      key: "spam-action",
      isTertiary: true,
      onClick: () => {
        this.recordReviewEvent('mark_as_spam', manageReviewEvent);
        this.updateReviewStatus(review.id, 'spam', review.status);
      }
    }, Object(external_wp_i18n_["__"])('Mark as spam', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      key: "delete-action",
      isDestructive: true,
      isTertiary: true,
      onClick: () => {
        this.recordReviewEvent('delete', manageReviewEvent);
        this.deleteReview(review.id);
      }
    }, Object(external_wp_i18n_["__"])('Delete', 'woocommerce-admin'))];
    return Object(external_wp_element_["createElement"])(activity_card["a" /* ActivityCard */], {
      className: "woocommerce-review-activity-card",
      key: review.id,
      title: title,
      subtitle: subtitle,
      date: review.date_created_gmt,
      icon: icon,
      actions: cardActions
    }, Object(external_wp_element_["createElement"])("span", {
      dangerouslySetInnerHTML: Object(sanitize_html["a" /* default */])(review.review)
    }));
  }

  renderReviews(reviews) {
    const renderedReviews = reviews.map(review => this.renderReview(review, this.props));

    if (renderedReviews.filter(Boolean).length === 0) {
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null);
    }

    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, renderedReviews, Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
      href: Object(build_module["e" /* getAdminLink */])('edit-comments.php?comment_type=review'),
      onClick: () => this.recordReviewEvent('reviews_manage'),
      className: "woocommerce-layout__activity-panel-outbound-link woocommerce-layout__activity-panel-empty",
      type: "wp-admin"
    }, Object(external_wp_i18n_["__"])('Manage all reviews', 'woocommerce-admin')));
  }

  render() {
    const {
      isRequesting,
      isError,
      reviews
    } = this.props;

    if (isError) {
      const title = Object(external_wp_i18n_["__"])('There was an error getting your reviews. Please try again.', 'woocommerce-admin');

      const actionLabel = Object(external_wp_i18n_["__"])('Reload', 'woocommerce-admin');

      const actionCallback = () => {
        // @todo Add tracking for how often an error is displayed, and the reload action is clicked.
        window.location.reload();
      };

      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["EmptyContent"], {
        title: title,
        actionLabel: actionLabel,
        actionURL: null,
        actionCallback: actionCallback
      }));
    }

    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["Section"], null, isRequesting || !reviews.length ? Object(external_wp_element_["createElement"])(activity_card["b" /* ActivityCardPlaceholder */], {
      className: "woocommerce-review-activity-card",
      hasAction: true,
      hasDate: true,
      lines: 1
    }) : Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, this.renderReviews(reviews))));
  }

}

reviews_ReviewsPanel.propTypes = {
  reviews: prop_types_default.a.array.isRequired,
  isError: prop_types_default.a.bool,
  isRequesting: prop_types_default.a.bool
};
reviews_ReviewsPanel.defaultProps = {
  reviews: [],
  isError: false,
  isRequesting: false
};
reviews_ReviewsPanel.contextType = currency_context["a" /* CurrencyContext */];

/* harmony default export */ var activity_panel_reviews = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])((select, props) => {
  const {
    hasUnapprovedReviews
  } = props;
  const {
    getReviews,
    getReviewsError,
    isResolving
  } = select(external_wc_data_["REVIEWS_STORE_NAME"]);
  let reviews = [];
  let isError = false;
  let isRequesting = false;

  if (hasUnapprovedReviews) {
    reviews = getReviews(reviewsQuery);
    isError = Boolean(getReviewsError(reviewsQuery));
    isRequesting = isResolving('getReviews', [reviewsQuery]);
  }

  return {
    reviews,
    isError,
    isRequesting
  };
}), Object(external_wp_data_["withDispatch"])((dispatch, props) => {
  const {
    deleteReview,
    updateReview,
    invalidateResolution
  } = dispatch(external_wc_data_["REVIEWS_STORE_NAME"]);
  const {
    createNotice
  } = dispatch('core/notices');

  const clearReviewsCache = () => {
    invalidateResolution('getReviews', [reviewsQuery]);

    if (props.reviews && props.reviews.length < 2) {
      invalidateResolution('getReviewsTotalCount', [reviews_utils["c" /* unapprovedReviewsQuery */]]);
    }
  };

  return {
    deleteReview,
    createNotice,
    updateReview,
    clearReviewsCache
  };
})])(reviews_ReviewsPanel));
// CONCATENATED MODULE: ./client/homescreen/activity-panel/panels.js


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




function getAllPanels({
  countLowStockProducts,
  countUnapprovedReviews,
  countUnreadOrders,
  manageStock,
  isTaskListHidden,
  orderStatuses,
  publishedProductCount,
  reviewsEnabled,
  totalOrderCount
}) {
  if (!isTaskListHidden) {
    return [];
  }

  return [totalOrderCount > 0 && {
    className: 'woocommerce-homescreen-card',
    count: countUnreadOrders,
    collapsible: true,
    id: 'orders-panel',
    initialOpen: false,
    panel: Object(external_wp_element_["createElement"])(activity_panel_orders, {
      countUnreadOrders: countUnreadOrders,
      orderStatuses: orderStatuses
    }),
    title: Object(external_wp_i18n_["__"])('Orders', 'woocommerce-admin')
  }, totalOrderCount > 0 && publishedProductCount > 0 && manageStock === 'yes' && {
    className: 'woocommerce-homescreen-card',
    count: countLowStockProducts,
    id: 'stock-panel',
    initialOpen: false,
    collapsible: countLowStockProducts !== 0,
    panel: Object(external_wp_element_["createElement"])(stock, {
      countLowStockProducts: countLowStockProducts
    }),
    title: Object(external_wp_i18n_["__"])('Stock', 'woocommerce-admin')
  }, publishedProductCount > 0 && reviewsEnabled === 'yes' && {
    className: 'woocommerce-homescreen-card',
    id: 'reviews-panel',
    count: countUnapprovedReviews,
    initialOpen: false,
    collapsible: countUnapprovedReviews !== 0,
    panel: Object(external_wp_element_["createElement"])(activity_panel_reviews, {
      hasUnapprovedReviews: countUnapprovedReviews > 0
    }),
    title: Object(external_wp_i18n_["__"])('Reviews', 'woocommerce-admin')
  } // Add another panel row here
  ].filter(Boolean);
}
// EXTERNAL MODULE: ./client/utils/index.js
var client_utils = __webpack_require__(520);

// CONCATENATED MODULE: ./client/homescreen/activity-panel/index.js


/**
 * External dependencies
 */








/**
 * Internal dependencies
 */






const ActivityPanel = () => {
  const panelsData = Object(external_wp_data_["useSelect"])(select => {
    const totalOrderCount = Object(build_module["f" /* getSetting */])('orderCount', 0);
    const orderStatuses = Object(utils["c" /* getOrderStatuses */])(select);
    const reviewsEnabled = Object(build_module["f" /* getSetting */])('reviewsEnabled', 'no');
    const countUnreadOrders = Object(utils["d" /* getUnreadOrders */])(select, orderStatuses);
    const manageStock = Object(build_module["f" /* getSetting */])('manageStock', 'no');
    const countLowStockProducts = Object(utils["a" /* getLowStockCount */])(select);
    const countUnapprovedReviews = Object(reviews_utils["b" /* getUnapprovedReviews */])(select);
    const publishedProductCount = Object(build_module["f" /* getSetting */])('publishedProductCount', 0);
    const taskLists = select(external_wc_data_["ONBOARDING_STORE_NAME"]).getTaskLists();
    return {
      countLowStockProducts,
      countUnapprovedReviews,
      countUnreadOrders,
      manageStock,
      isTaskListHidden: Boolean(taskLists.length) ? !taskLists.find(list => list.id === 'setup').isVisible : null,
      publishedProductCount,
      reviewsEnabled,
      totalOrderCount,
      orderStatuses
    };
  });
  const panels = getAllPanels(panelsData);
  Object(external_wp_element_["useEffect"])(() => {
    if (panelsData.isTaskListHidden !== undefined) {
      const visiblePanels = panels.reduce((acc, panel) => {
        const panelId = Object(external_lodash_["snakeCase"])(panel.id);
        acc[panelId] = true;
        return acc;
      }, {
        task_list: !panelsData.isTaskListHidden
      });
      Object(external_wc_tracks_["recordEvent"])('activity_panel_visible_panels', visiblePanels);
    }
  }, [panelsData.isTaskListHidden]);

  if (panels.length === 0) {
    return null;
  }

  const getInitialOpenState = panelId => {
    const {
      opened_panel: openedPanel
    } = Object(client_utils["b" /* getUrlParams */])(window.location.search);
    return panelId === openedPanel;
  };

  return Object(external_wp_element_["createElement"])(external_wp_components_["Panel"], {
    className: "woocommerce-activity-panel"
  }, panels.map(panelData => {
    const {
      className,
      count,
      id,
      initialOpen,
      panel,
      title,
      collapsible
    } = panelData;
    return collapsible ? Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
      title: [Object(external_wp_element_["createElement"])(external_wp_components_["__experimentalText"], {
        key: title,
        variant: "title.small",
        size: "20",
        lineHeight: "28px"
      }, title), count !== null && Object(external_wp_element_["createElement"])(external_wc_components_["Badge"], {
        key: `${title}-badge`,
        count: count
      })],
      key: id,
      className: className,
      initialOpen: getInitialOpenState(id) || initialOpen,
      collapsible: collapsible,
      disabled: !collapsible,
      onToggle: isOpen => {
        if (!isOpen) {
          return;
        }

        Object(external_wc_tracks_["recordEvent"])('activity_panel_open', {
          tab: id
        });
      }
    }, Object(external_wp_element_["createElement"])(external_wp_components_["PanelRow"], null, panel)) : Object(external_wp_element_["createElement"])("div", {
      className: "components-panel__body",
      key: id
    }, Object(external_wp_element_["createElement"])("h2", {
      className: "components-panel__body-title"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      className: "components-panel__body-toggle",
      "aria-expanded": false,
      disabled: true
    }, Object(external_wp_element_["createElement"])(external_wp_components_["__experimentalText"], {
      variant: "title.small",
      size: "20",
      lineHeight: "28px"
    }, title), count !== null && Object(external_wp_element_["createElement"])(external_wc_components_["Badge"], {
      count: count
    }))));
  }));
};
// CONCATENATED MODULE: ./client/homescreen/column.js


/**
 * External dependencies
 */

const Column = ({
  children,
  shouldStick = false
}) => {
  const [isContentStuck, setIsContentStuck] = Object(external_wp_element_["useState"])(false);
  const content = Object(external_wp_element_["useRef"])(null);
  const initialTop = Object(external_wp_element_["useRef"])(null);
  const maybeStickContent = Object(external_wp_element_["useCallback"])(() => {
    if (!content.current) {
      return;
    }

    const {
      bottom,
      top
    } = content.current.getBoundingClientRect();

    if (initialTop.current === null) {
      initialTop.current = top;
    }

    const shouldBeSticky = bottom < window.innerHeight;

    if (top === initialTop.current) {
      setIsContentStuck(shouldBeSticky);
    }
  }, []);
  Object(external_wp_element_["useLayoutEffect"])(() => {
    if (!shouldStick) {
      return;
    }

    maybeStickContent();
    window.addEventListener('resize', maybeStickContent);
    window.addEventListener('scroll', maybeStickContent);
    return () => {
      window.removeEventListener('resize', maybeStickContent);
      window.removeEventListener('scroll', maybeStickContent);
    };
  }, [maybeStickContent, shouldStick]);
  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-homescreen-column",
    ref: content,
    style: {
      position: shouldStick && isContentStuck ? 'sticky' : 'static'
    }
  }, children);
};
// EXTERNAL MODULE: ./client/inbox-panel/index.js
var inbox_panel = __webpack_require__(528);

// EXTERNAL MODULE: external ["wc","experimental"]
var external_wc_experimental_ = __webpack_require__(17);

// EXTERNAL MODULE: ./client/navigation/components/intro-modal/style.scss
var intro_modal_style = __webpack_require__(559);

// EXTERNAL MODULE: ./client/navigation/components/intro-modal/images/nav-intro-1.png
var nav_intro_1 = __webpack_require__(560);
var nav_intro_1_default = /*#__PURE__*/__webpack_require__.n(nav_intro_1);

// EXTERNAL MODULE: ./client/navigation/components/intro-modal/images/nav-intro-2.png
var nav_intro_2 = __webpack_require__(561);
var nav_intro_2_default = /*#__PURE__*/__webpack_require__.n(nav_intro_2);

// EXTERNAL MODULE: ./client/navigation/components/intro-modal/images/nav-intro-3.png
var nav_intro_3 = __webpack_require__(562);
var nav_intro_3_default = /*#__PURE__*/__webpack_require__.n(nav_intro_3);

// CONCATENATED MODULE: ./client/homescreen/constants.js
/**
 * Welcome modal dismissed option name.
 */
const WELCOME_MODAL_DISMISSED_OPTION_NAME = 'woocommerce_task_list_welcome_modal_dismissed';
/**
 * Welcome from calypso modal dismissed option name.
 */

const WELCOME_FROM_CALYPSO_MODAL_DISMISSED_OPTION_NAME = 'woocommerce_welcome_from_calypso_modal_dismissed';
// CONCATENATED MODULE: ./client/navigation/components/intro-modal/index.js


/**
 * External dependencies
 */







/**
 * Internal dependencies
 */






const INTRO_MODAL_DISMISSED_OPTION_NAME = 'woocommerce_navigation_intro_modal_dismissed';
const IntroModal = () => {
  const [isOpen, setOpen] = Object(external_wp_element_["useState"])(true);
  const {
    updateOptions
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["OPTIONS_STORE_NAME"]);
  const {
    isDismissed,
    isResolving,
    isWelcomeModalShown
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getOption,
      isResolving: isOptionResolving
    } = select(external_wc_data_["OPTIONS_STORE_NAME"]);
    const dismissedOption = getOption(INTRO_MODAL_DISMISSED_OPTION_NAME);
    return {
      isDismissed: dismissedOption === 'yes',
      isWelcomeModalShown: getOption(WELCOME_MODAL_DISMISSED_OPTION_NAME) !== 'yes',
      isResolving: typeof dismissedOption === 'undefined' || isOptionResolving('getOption', [INTRO_MODAL_DISMISSED_OPTION_NAME]) || isOptionResolving('getOption', [WELCOME_MODAL_DISMISSED_OPTION_NAME])
    };
  });

  const dismissModal = () => {
    updateOptions({
      [INTRO_MODAL_DISMISSED_OPTION_NAME]: 'yes'
    });
    Object(external_wc_tracks_["recordEvent"])('navigation_intro_modal_close', {});
    setOpen(false);
  }; // Dismiss the modal when the welcome modal is shown.
  // It is likely in this case that the navigation is on by default.


  Object(external_wp_element_["useEffect"])(() => {
    if (!isResolving && isWelcomeModalShown && !isDismissed) {
      dismissModal();
    }
  }, [isDismissed, isResolving, isWelcomeModalShown]);

  if (!isOpen || isDismissed || isResolving || isWelcomeModalShown) {
    return null;
  }

  const getPage = (title, description, imageUrl) => {
    return {
      content: Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-navigation-intro-modal__page-wrapper"
      }, Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-navigation-intro-modal__page-text"
      }, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
        variant: "title.large",
        as: "h2",
        size: "32",
        lineHeight: "40px"
      }, title), Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
        as: "p",
        variant: "body.large",
        size: "16",
        lineHeight: "24px"
      }, description)), Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-navigation-intro-modal__image-wrapper"
      }, Object(external_wp_element_["createElement"])("img", {
        alt: title,
        src: imageUrl
      })))
    };
  };

  return Object(external_wp_element_["createElement"])(external_wp_components_["Guide"], {
    className: "woocommerce-navigation-intro-modal",
    onFinish: dismissModal,
    pages: [getPage(Object(external_wp_i18n_["__"])('A new navigation for WooCommerce', 'woocommerce-admin'), Object(external_wp_i18n_["__"])('All of your store management features in one place', 'woocommerce-admin'), nav_intro_1_default.a), getPage(Object(external_wp_i18n_["__"])('Focus on managing your store', 'woocommerce-admin'), Object(external_wp_i18n_["__"])('Give your attention to key areas of WooCommerce with little distraction', 'woocommerce-admin'), nav_intro_2_default.a), getPage(Object(external_wp_i18n_["__"])('Easily find and favorite your extensions', 'woocommerce-admin'), Object(external_wp_i18n_["__"])("They'll appear in the top level of the navigation for quick access", 'woocommerce-admin'), nav_intro_3_default.a)]
  });
};
// EXTERNAL MODULE: ./client/homescreen/stats-overview/style.scss
var stats_overview_style = __webpack_require__(563);

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(28);

// CONCATENATED MODULE: ./client/homescreen/stats-overview/defaults.js
/**
 * External dependencies
 */

/**
 * List of homepage stats enabled by default
 *
 * @filter woocommerce_admin_homepage_default_stats
 * @example
 * addFilter(
 *	'woocommerce_admin_homepage_default_stats',
 *	'plugin-domain',
 *	( defaultStats ) =>
 *		defaultStats.filter( ( stat ) => stat !== 'jetpack/stats/views' )
 *);
 */

const DEFAULT_STATS = Object(external_wp_hooks_["applyFilters"])('woocommerce_admin_homepage_default_stats', ['revenue/total_sales', 'revenue/net_revenue', 'orders/orders_count', 'products/items_sold', 'jetpack/stats/visitors', 'jetpack/stats/views']);
const DEFAULT_HIDDEN_STATS = ['revenue/net_revenue', 'products/items_sold'];
// EXTERNAL MODULE: ./client/dashboard/store-performance/utils.js
var store_performance_utils = __webpack_require__(530);

// CONCATENATED MODULE: ./client/homescreen/stats-overview/stats-list.js


/**
 * External dependencies
 */







/**
 * Internal dependencies
 */



const StatsList = ({
  stats,
  primaryData,
  secondaryData,
  primaryRequesting,
  secondaryRequesting,
  primaryError,
  secondaryError,
  query
}) => {
  const {
    formatAmount,
    getCurrencyConfig
  } = Object(external_wp_element_["useContext"])(currency_context["a" /* CurrencyContext */]);

  if (primaryError || secondaryError) {
    return null;
  }

  const persistedQuery = Object(external_wc_navigation_["getPersistedQuery"])(query);
  const currency = getCurrencyConfig();
  return Object(external_wp_element_["createElement"])("ul", {
    className: classnames_default()('woocommerce-stats-overview__stats', {
      'is-even': stats.length % 2 === 0
    })
  }, stats.map(item => {
    if (primaryRequesting || secondaryRequesting) {
      return Object(external_wp_element_["createElement"])(external_wc_components_["SummaryNumberPlaceholder"], {
        key: item.stat
      });
    }

    const {
      primaryValue,
      secondaryValue,
      delta,
      reportUrl,
      reportUrlType
    } = Object(store_performance_utils["b" /* getIndicatorValues */])({
      indicator: item,
      primaryData,
      secondaryData,
      currency,
      formatAmount,
      persistedQuery
    });
    return Object(external_wp_element_["createElement"])(external_wc_components_["SummaryNumber"], {
      isHomescreen: true,
      key: item.stat,
      href: reportUrl,
      hrefType: reportUrlType,
      label: item.label,
      value: primaryValue,
      prevLabel: Object(external_wp_i18n_["__"])('Previous period:', 'woocommerce-admin'),
      prevValue: secondaryValue,
      delta: delta,
      onLinkClickCallback: () => {
        Object(external_wc_tracks_["recordEvent"])('statsoverview_indicators_click', {
          key: item.stat
        });
      }
    });
  }));
};
/* harmony default export */ var stats_list = (Object(external_wp_data_["withSelect"])((select, {
  stats,
  query
}) => {
  if (stats.length === 0) {
    return;
  }

  return Object(store_performance_utils["a" /* getIndicatorData */])(select, stats, query);
})(StatsList));
// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__(10);

// CONCATENATED MODULE: ./packages/data/src/plugins/constants.ts
/**
 * External dependencies
 */

const STORE_NAME = 'wc/admin/plugins';
const PAYPAL_NAMESPACE = '/wc-paypal/v1';
/**
 * Plugin slugs and names as key/value pairs.
 */

const pluginNames = {
  'facebook-for-woocommerce': Object(external_wp_i18n_["__"])('Facebook for WooCommerce', 'woocommerce-admin'),
  jetpack: Object(external_wp_i18n_["__"])('Jetpack', 'woocommerce-admin'),
  'klarna-checkout-for-woocommerce': Object(external_wp_i18n_["__"])('Klarna Checkout for WooCommerce', 'woocommerce-admin'),
  'klarna-payments-for-woocommerce': Object(external_wp_i18n_["__"])('Klarna Payments for WooCommerce', 'woocommerce-admin'),
  'mailchimp-for-woocommerce': Object(external_wp_i18n_["__"])('Mailchimp for WooCommerce', 'woocommerce-admin'),
  'creative-mail-by-constant-contact': Object(external_wp_i18n_["__"])('Creative Mail for WooCommerce', 'woocommerce-admin'),
  'woocommerce-gateway-paypal-express-checkout': Object(external_wp_i18n_["__"])('WooCommerce PayPal', 'woocommerce-admin'),
  'woocommerce-gateway-stripe': Object(external_wp_i18n_["__"])('WooCommerce Stripe', 'woocommerce-admin'),
  'woocommerce-payfast-gateway': Object(external_wp_i18n_["__"])('WooCommerce PayFast', 'woocommerce-admin'),
  'woocommerce-payments': Object(external_wp_i18n_["__"])('WooCommerce Payments', 'woocommerce-admin'),
  'woocommerce-services': Object(external_wp_i18n_["__"])('WooCommerce Shipping & Tax', 'woocommerce-admin'),
  'woocommerce-services:shipping': Object(external_wp_i18n_["__"])('WooCommerce Shipping & Tax', 'woocommerce-admin'),
  'woocommerce-services:tax': Object(external_wp_i18n_["__"])('WooCommerce Shipping & Tax', 'woocommerce-admin'),
  'woocommerce-shipstation-integration': Object(external_wp_i18n_["__"])('WooCommerce ShipStation Gateway', 'woocommerce-admin'),
  'woocommerce-mercadopago': Object(external_wp_i18n_["__"])('Mercado Pago payments for WooCommerce', 'woocommerce-admin'),
  'google-listings-and-ads': Object(external_wp_i18n_["__"])('Google Listings and Ads', 'woocommerce-admin'),
  'woo-razorpay': Object(external_wp_i18n_["__"])('Razorpay', 'woocommerce-admin'),
  mailpoet: Object(external_wp_i18n_["__"])('MailPoet', 'woocommerce-admin')
};
// CONCATENATED MODULE: ./packages/data/src/plugins/action-types.ts
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
// CONCATENATED MODULE: ./packages/data/src/constants.js
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
// CONCATENATED MODULE: ./packages/data/src/plugins/actions.ts
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




// Can be removed in WP 5.9, wp.data is supported in >5.7.
const actions_dispatch = external_wp_data_["controls"] && external_wp_data_["controls"].dispatch ? external_wp_data_["controls"].dispatch : external_wp_dataControls_["dispatch"];
const resolveSelect = external_wp_data_["controls"] && external_wp_data_["controls"].resolveSelect ? external_wp_data_["controls"].resolveSelect : external_wp_dataControls_["select"];

function isWPError(error) {
  return error.errors !== undefined;
}

function formatErrors(response) {
  if (isWPError(response)) {
    // Replace the slug with a plugin name if a constant exists.
    Object.keys(response.errors).forEach(plugin => {
      response.errors[plugin] = response.errors[plugin].map(pluginError => {
        return pluginNames[plugin] ? pluginError.replace(`\`${plugin}\``, pluginNames[plugin]) : pluginError;
      });
    });
  } else if (typeof response === 'string') {
    return response;
  } else {
    return response.message;
  }

  return '';
}

const formatErrorMessage = (pluginErrors, actionType = 'install') => {
  return Object(external_wp_i18n_["sprintf"])(
  /* translators: %(actionType): install or activate (the plugin). %(pluginName): a plugin slug (e.g. woocommerce-services). %(error): a single error message or in plural a comma separated error message list.*/
  Object(external_wp_i18n_["_n"])('Could not %(actionType)s %(pluginName)s plugin, %(error)s', 'Could not %(actionType)s the following plugins: %(pluginName)s with these Errors: %(error)s', Object.keys(pluginErrors).length || 1, 'woocommerce-admin'), {
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
      path: `${WC_ADMIN_NAMESPACE}/plugins/install`,
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
    if (plugins.length === 1 && !error[plugins[0]]) {
      // Incase of a network error
      error = {
        [plugins[0]]: error.message
      };
    }

    yield setError('installPlugins', error);
    throw new Error(formatErrorMessage(error));
  }
}
function* activatePlugins(plugins) {
  yield setIsRequesting('activatePlugins', true);

  try {
    const results = yield Object(external_wp_dataControls_["apiFetch"])({
      path: `${WC_ADMIN_NAMESPACE}/plugins/activate`,
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
    if (plugins.length === 1 && !error[plugins[0]]) {
      // Incase of a network error
      error = {
        [plugins[0]]: error.message
      };
    }

    yield setError('activatePlugins', error);
    throw new Error(formatErrorMessage(error, 'activate'));
  }
}
function* installAndActivatePlugins(plugins) {
  try {
    yield actions_dispatch(STORE_NAME, 'installPlugins', plugins);
    const activations = yield actions_dispatch(STORE_NAME, 'activatePlugins', plugins);
    return activations;
  } catch (error) {
    throw error;
  }
}
const createErrorNotice = errorMessage => {
  return actions_dispatch('core/notices', 'createNotice', 'error', errorMessage);
};
function* connectToJetpack(getAdminLink) {
  const url = yield resolveSelect(STORE_NAME, 'getJetpackConnectUrl', {
    redirect_url: getAdminLink('admin.php?page=wc-admin')
  });
  const error = yield resolveSelect(STORE_NAME, 'getPluginsError', 'getJetpackConnectUrl');

  if (error) {
    throw new Error(error);
  } else {
    return url;
  }
}
function* actions_installJetpackAndConnect(errorAction, getAdminLink) {
  try {
    yield actions_dispatch(STORE_NAME, 'installPlugins', ['jetpack']);
    yield actions_dispatch(STORE_NAME, 'activatePlugins', ['jetpack']);
    const url = yield actions_dispatch(STORE_NAME, 'connectToJetpack', getAdminLink);
    window.location.href = url;
  } catch (error) {
    yield errorAction(error.message);
  }
}
function* connectToJetpackWithFailureRedirect(failureRedirect, errorAction, getAdminLink) {
  try {
    const url = yield actions_dispatch(STORE_NAME, 'connectToJetpack', getAdminLink);
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
// CONCATENATED MODULE: ./client/homescreen/stats-overview/install-jetpack-cta.js


/**
 * External dependencies
 */







/**
 * Internal dependencies
 */



const getJetpackInstallText = jetpackInstallState => {
  return {
    unavailable: Object(external_wp_i18n_["__"])('Get Jetpack', 'woocommerce-admin'),
    installed: Object(external_wp_i18n_["__"])('Activate Jetpack', 'woocommerce-admin'),
    activated: Object(external_wp_i18n_["__"])('Connect Jetpack', 'woocommerce-admin')
  }[jetpackInstallState] || '';
};

const JetpackCTA = ({
  onClickInstall,
  onClickDismiss,
  isBusy,
  jetpackInstallState
}) => {
  return Object(external_wp_element_["createElement"])("article", {
    className: "woocommerce-stats-overview__install-jetpack-promo"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-stats-overview__install-jetpack-promo__content"
  }, Object(external_wp_element_["createElement"])(external_wc_components_["H"], null, Object(external_wp_i18n_["__"])('Get traffic stats with Jetpack', 'woocommerce-admin')), Object(external_wp_element_["createElement"])("p", null, Object(external_wp_i18n_["__"])('Keep an eye on your views and visitors metrics with ' + 'Jetpack. Requires Jetpack plugin and a WordPress.com ' + 'account.', 'woocommerce-admin'))), Object(external_wp_element_["createElement"])("footer", null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isSecondary: true,
    onClick: () => {
      Object(external_wc_tracks_["recordEvent"])('statsoverview_install_jetpack');
      onClickInstall();
    },
    disabled: isBusy,
    isBusy: isBusy
  }, getJetpackInstallText(jetpackInstallState)), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isTertiary: true,
    onClick: () => {
      Object(external_wc_tracks_["recordEvent"])('statsoverview_dismiss_install_jetpack');
      onClickDismiss();
    },
    disabled: isBusy,
    isBusy: isBusy
  }, Object(external_wp_i18n_["__"])('No thanks', 'woocommerce-admin'))));
};
const InstallJetpackCTA = () => {
  const {
    currentUserCan
  } = Object(external_wc_data_["useUser"])();
  const {
    updateUserPreferences,
    ...userPrefs
  } = Object(external_wc_data_["useUserPreferences"])();
  const {
    canUserInstallPlugins,
    jetpackInstallState,
    isBusy
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getPluginInstallState,
      isPluginsRequesting
    } = select(external_wc_data_["PLUGINS_STORE_NAME"]);
    const installState = getPluginInstallState('jetpack');
    const busyState = isPluginsRequesting('getJetpackConnectUrl') || isPluginsRequesting('installPlugins') || isPluginsRequesting('activatePlugins');
    return {
      isBusy: busyState,
      jetpackInstallState: installState,
      canUserInstallPlugins: currentUserCan('install_plugins')
    };
  });
  const {
    installJetpackAndConnect
  } = Object(external_wp_data_["useDispatch"])(external_wc_data_["PLUGINS_STORE_NAME"]);

  if (!canUserInstallPlugins) {
    return null;
  }

  const onClickInstall = () => {
    installJetpackAndConnect(createErrorNotice, build_module["e" /* getAdminLink */]);
  };

  return Object(external_wp_element_["createElement"])(JetpackCTA, {
    jetpackInstallState: jetpackInstallState,
    isBusy: isBusy,
    onClickInstall: onClickInstall,
    onClickDismiss: () => {
      const homepageStats = userPrefs.homepage_stats || {};
      homepageStats.installJetpackDismissed = true;
      updateUserPreferences({
        homepage_stats: homepageStats
      });
    }
  });
};
// CONCATENATED MODULE: ./client/homescreen/stats-overview/index.js


/**
 * External dependencies
 */












/**
 * Internal dependencies
 */





const {
  performanceIndicators = []
} = Object(build_module["f" /* getSetting */])('dataEndpoints', {
  performanceIndicators: []
});
const stats_overview_stats = performanceIndicators.filter(indicator => {
  return DEFAULT_STATS.includes(indicator.stat);
});
const StatsOverview = () => {
  const {
    updateUserPreferences,
    ...userPrefs
  } = Object(external_wc_data_["useUserPreferences"])();
  const hiddenStats = Object(external_lodash_["get"])(userPrefs, ['homepage_stats', 'hiddenStats'], DEFAULT_HIDDEN_STATS);
  const jetPackIsConnected = Object(external_wp_data_["useSelect"])(select => {
    return select(external_wc_data_["PLUGINS_STORE_NAME"]).isJetpackConnected();
  }, []);
  const homePageStats = userPrefs.homepage_stats || {};
  const userDismissedJetpackInstall = homePageStats.installJetpackDismissed;

  const toggleStat = stat => {
    const nextHiddenStats = Object(external_lodash_["xor"])(hiddenStats, [stat]);
    updateUserPreferences({
      homepage_stats: {
        hiddenStats: nextHiddenStats
      }
    });
    Object(external_wc_tracks_["recordEvent"])('statsoverview_indicators_toggle', {
      indicator_name: stat,
      status: nextHiddenStats.includes(stat) ? 'off' : 'on'
    });
  };

  const activeStats = stats_overview_stats.filter(item => !hiddenStats.includes(item.stat));
  const HeaderText = Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    variant: "title.small",
    size: "20",
    lineHeight: "28px"
  }, Object(external_wp_i18n_["__"])('Stats overview', 'woocommerce-admin'));
  return Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
    size: "large",
    className: "woocommerce-stats-overview woocommerce-homescreen-card"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardHeader"], {
    size: "medium"
  }, Object(external_wp_element_["createElement"])(external_wc_explat_["Experiment"], {
    name: "woocommerce_test_experiment",
    defaultExperience: HeaderText,
    treatmentExperience: HeaderText,
    loadingExperience: HeaderText
  }), Object(external_wp_element_["createElement"])(external_wc_components_["EllipsisMenu"], {
    label: Object(external_wp_i18n_["__"])('Choose which values to display', 'woocommerce-admin'),
    renderContent: () => Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wc_components_["MenuTitle"], null, Object(external_wp_i18n_["__"])('Display stats:', 'woocommerce-admin')), stats_overview_stats.map(item => {
      const checked = !hiddenStats.includes(item.stat);
      return Object(external_wp_element_["createElement"])(external_wc_components_["MenuItem"], {
        checked: checked,
        isCheckbox: true,
        isClickable: true,
        key: item.stat,
        onInvoke: () => toggleStat(item.stat)
      }, item.label);
    }))
  })), Object(external_wp_element_["createElement"])(external_wp_components_["TabPanel"], {
    className: "woocommerce-stats-overview__tabs",
    onSelect: period => {
      Object(external_wc_tracks_["recordEvent"])('statsoverview_date_picker_update', {
        period
      });
    },
    tabs: [{
      title: Object(external_wp_i18n_["__"])('Today', 'woocommerce-admin'),
      name: 'today'
    }, {
      title: Object(external_wp_i18n_["__"])('Week to date', 'woocommerce-admin'),
      name: 'week'
    }, {
      title: Object(external_wp_i18n_["__"])('Month to date', 'woocommerce-admin'),
      name: 'month'
    }]
  }, tab => Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, !jetPackIsConnected && !userDismissedJetpackInstall && Object(external_wp_element_["createElement"])(InstallJetpackCTA, null), Object(external_wp_element_["createElement"])(stats_list, {
    query: {
      period: tab.name,
      compare: 'previous_period'
    },
    stats: activeStats
  }))), Object(external_wp_element_["createElement"])(external_wp_components_["CardFooter"], null, Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
    className: "woocommerce-stats-overview__more-btn",
    href: Object(external_wc_navigation_["getNewPath"])({}, '/analytics/overview'),
    type: "wc-admin",
    onClick: () => {
      Object(external_wc_tracks_["recordEvent"])('statsoverview_indicators_click', {
        key: 'view_detailed_stats'
      });
    }
  }, Object(external_wp_i18n_["__"])('View detailed stats', 'woocommerce-admin'))));
};
/* harmony default export */ var stats_overview = (StatsOverview);
// EXTERNAL MODULE: external ["wp","primitives"]
var external_wp_primitives_ = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/megaphone.js


/**
 * WordPress dependencies
 */

var megaphone = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  fillRule: "evenodd",
  d: "M6.863 13.644L5 13.25h-.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H5L18 6.5h2V16h-2l-3.854-.815.026.008a3.75 3.75 0 01-7.31-1.549zm1.477.313a2.251 2.251 0 004.356.921l-4.356-.921zm-2.84-3.28L18.157 8h.343v6.5h-.343L5.5 11.823v-1.146z",
  clipRule: "evenodd"
}));
/* harmony default export */ var library_megaphone = (megaphone);
//# sourceMappingURL=megaphone.js.map
// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/box.js
var box = __webpack_require__(501);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/brush.js


/**
 * WordPress dependencies
 */

var brush = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M18.33 3.57s.27-.8-.31-1.36c-.53-.52-1.22-.24-1.22-.24-.61.3-5.76 3.47-7.67 5.57-.86.96-2.06 3.79-1.09 4.82.92.98 3.96-.17 4.79-1 2.06-2.06 5.21-7.17 5.5-7.79zM1.4 17.65c2.37-1.56 1.46-3.41 3.23-4.64.93-.65 2.22-.62 3.08.29.63.67.8 2.57-.16 3.46-1.57 1.45-4 1.55-6.15.89z"
}));
/* harmony default export */ var library_brush = (brush);
//# sourceMappingURL=brush.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/home.js


/**
 * WordPress dependencies
 */

var home = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M12 4L4 7.9V20h16V7.9L12 4zm6.5 14.5H14V13h-4v5.5H5.5V8.8L12 5.7l6.5 3.1v9.7z"
}));
/* harmony default export */ var library_home = (home);
//# sourceMappingURL=home.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/pencil.js


/**
 * WordPress dependencies
 */

var pencil = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z"
}));
/* harmony default export */ var library_pencil = (pencil);
//# sourceMappingURL=pencil.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/payment.js


/**
 * WordPress dependencies
 */

var payment = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  fillRule: "evenodd",
  d: "M5.5 9.5v-2h13v2h-13zm0 3v4h13v-4h-13zM4 7a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V7z",
  clipRule: "evenodd"
}));
/* harmony default export */ var library_payment = (payment);
//# sourceMappingURL=payment.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/percent.js


/**
 * WordPress dependencies
 */

var percent = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  fillRule: "evenodd",
  d: "M6.5 8a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM8 5a3 3 0 100 6 3 3 0 000-6zm6.5 11a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm1.5-3a3 3 0 100 6 3 3 0 000-6zM5.47 17.41a.75.75 0 001.06 1.06L18.47 6.53a.75.75 0 10-1.06-1.06L5.47 17.41z",
  clipRule: "evenodd"
}));
/* harmony default export */ var library_percent = (percent);
//# sourceMappingURL=percent.js.map
// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/shipping.js


/**
 * WordPress dependencies
 */

var shipping = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M3 6.75C3 5.784 3.784 5 4.75 5H15V7.313l.05.027 5.056 2.73.394.212v3.468a1.75 1.75 0 01-1.75 1.75h-.012a2.5 2.5 0 11-4.975 0H9.737a2.5 2.5 0 11-4.975 0H3V6.75zM13.5 14V6.5H4.75a.25.25 0 00-.25.25V14h.965a2.493 2.493 0 011.785-.75c.7 0 1.332.287 1.785.75H13.5zm4.535 0h.715a.25.25 0 00.25-.25v-2.573l-4-2.16v4.568a2.487 2.487 0 011.25-.335c.7 0 1.332.287 1.785.75zM6.282 15.5a1.002 1.002 0 00.968 1.25 1 1 0 10-.968-1.25zm9 0a1 1 0 101.937.498 1 1 0 00-1.938-.498z"
}));
/* harmony default export */ var library_shipping = (shipping);
//# sourceMappingURL=shipping.js.map
// EXTERNAL MODULE: ./client/store-management-links/style.scss
var store_management_links_style = __webpack_require__(564);

// EXTERNAL MODULE: ./client/store-management-links/quick-link-category/style.scss
var quick_link_category_style = __webpack_require__(565);

// CONCATENATED MODULE: ./client/store-management-links/quick-link-category/index.js


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


const QuickLinkCategory = ({
  title,
  children
}) => {
  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-quick-links__category"
  }, Object(external_wp_element_["createElement"])("h3", {
    className: "woocommerce-quick-links__category-header"
  }, title), children);
};
// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js + 2 modules
var build_module_icon = __webpack_require__(116);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/external.js
var external = __webpack_require__(502);

// EXTERNAL MODULE: ./client/store-management-links/quick-link/style.scss
var quick_link_style = __webpack_require__(566);

// CONCATENATED MODULE: ./client/store-management-links/quick-link/index.js


/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


const QuickLink = ({
  icon,
  title,
  href,
  linkType,
  onClick
}) => {
  const isExternal = linkType === 'external';
  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-quick-links__item"
  }, Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
    onClick: onClick,
    href: href,
    type: linkType,
    target: isExternal ? '_blank' : null,
    className: "woocommerce-quick-links__item-link"
  }, Object(external_wp_element_["createElement"])(build_module_icon["a" /* default */], {
    className: "woocommerce-quick-links__item-link__icon",
    icon: icon
  }), Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    className: "woocommerce-quick-links__item-link__text",
    as: "div",
    variant: "button",
    weight: "600",
    size: "14",
    lineHeight: "20px"
  }, title), isExternal && Object(external_wp_element_["createElement"])(build_module_icon["a" /* default */], {
    icon: external["a" /* default */]
  })));
};
// CONCATENATED MODULE: ./client/store-management-links/index.js


/**
 * External dependencies
 */







/**
 * Internal dependencies
 */




function getItemsByCategory(shopUrl) {
  return [{
    title: Object(external_wp_i18n_["__"])('Marketing & Merchandising', 'woocommerce-admin'),
    items: [{
      title: Object(external_wp_i18n_["__"])('Marketing', 'woocommerce-admin'),
      link: getLinkTypeAndHref({
        type: 'wc-admin',
        path: 'marketing'
      }),
      icon: library_megaphone,
      listItemTag: 'marketing'
    }, {
      title: Object(external_wp_i18n_["__"])('Add products', 'woocommerce-admin'),
      link: getLinkTypeAndHref({
        type: 'wp-admin',
        path: 'post-new.php?post_type=product'
      }),
      icon: box["a" /* default */],
      listItemTag: 'add-products'
    }, {
      title: Object(external_wp_i18n_["__"])('Personalize my store', 'woocommerce-admin'),
      link: getLinkTypeAndHref({
        type: 'wp-admin',
        path: 'customize.php'
      }),
      icon: library_brush,
      listItemTag: 'personalize-store'
    }, {
      title: Object(external_wp_i18n_["__"])('View my store', 'woocommerce-admin'),
      link: getLinkTypeAndHref({
        type: 'external',
        href: shopUrl
      }),
      icon: library_home,
      listItemTag: 'view-store'
    }]
  }, {
    title: Object(external_wp_i18n_["__"])('Settings', 'woocommerce-admin'),
    items: [{
      title: Object(external_wp_i18n_["__"])('Store details', 'woocommerce-admin'),
      link: getLinkTypeAndHref({
        type: 'wc-settings',
        tab: 'general'
      }),
      icon: library_pencil,
      listItemTag: 'edit-store-details'
    }, {
      title: Object(external_wp_i18n_["__"])('Payments', 'woocommerce-admin'),
      link: getLinkTypeAndHref({
        type: 'wc-settings',
        tab: 'checkout'
      }),
      icon: library_payment,
      listItemTag: 'payment-settings'
    }, {
      title: Object(external_wp_i18n_["__"])('Tax', 'woocommerce-admin'),
      link: getLinkTypeAndHref({
        type: 'wc-settings',
        tab: 'tax'
      }),
      icon: library_percent,
      listItemTag: 'tax-settings'
    }, {
      title: Object(external_wp_i18n_["__"])('Shipping', 'woocommerce-admin'),
      link: getLinkTypeAndHref({
        type: 'wc-settings',
        tab: 'shipping'
      }),
      icon: library_shipping,
      listItemTag: 'shipping-settings'
    }]
  }];
}
function getLinkTypeAndHref({
  path,
  tab = null,
  type,
  href = null
}) {
  return {
    'wc-admin': {
      href: `admin.php?page=wc-admin&path=%2F${path}`,
      linkType: 'wc-admin'
    },
    'wp-admin': {
      href: path,
      linkType: 'wp-admin'
    },
    'wc-settings': {
      href: `admin.php?page=wc-settings&tab=${tab}`,
      linkType: 'wp-admin'
    }
  }[type] || {
    href,
    linkType: 'external'
  };
}
const generateExtensionLinks = links => {
  return links.reduce((acc, {
    icon,
    href,
    title
  }) => {
    const url = new URL(href, window.location.href); // We do not support extension links that take users away from the host.

    if (url.origin === window.location.origin) {
      acc.push({
        icon,
        link: {
          href,
          linkType: 'wp-admin'
        },
        title,
        listItemTag: 'quick-links-extension-link'
      });
    }

    return acc;
  }, []);
};
const StoreManagementLinks = () => {
  const shopUrl = Object(build_module["f" /* getSetting */])('shopUrl');
  const extensionQuickLinks = generateExtensionLinks(Object(external_wp_hooks_["applyFilters"])('woocommerce_admin_homescreen_quicklinks', []));
  const itemCategories = getItemsByCategory(shopUrl);
  const extensionCategory = {
    title: Object(external_wp_i18n_["__"])('Extensions', 'woocommerce-admin'),
    items: extensionQuickLinks
  };
  const categories = extensionQuickLinks.length ? [...itemCategories, extensionCategory] : itemCategories;
  return Object(external_wp_element_["createElement"])(external_wp_components_["Card"], {
    size: "medium"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CardHeader"], {
    size: "medium"
  }, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    variant: "title.small",
    size: "20",
    lineHeight: "28px"
  }, Object(external_wp_i18n_["__"])('Store management', 'woocommerce-admin'))), Object(external_wp_element_["createElement"])(external_wp_components_["CardBody"], {
    size: "custom",
    className: "woocommerce-store-management-links__card-body"
  }, categories.map(category => {
    return Object(external_wp_element_["createElement"])(QuickLinkCategory, {
      key: category.title,
      title: category.title
    }, category.items.map(({
      icon,
      listItemTag,
      title,
      link: {
        href,
        linkType
      }
    }) => Object(external_wp_element_["createElement"])(QuickLink, {
      icon: icon,
      key: `${title}_${listItemTag}_${href}`,
      title: title,
      linkType: linkType,
      href: href,
      onClick: () => {
        Object(external_wc_tracks_["recordEvent"])('home_quick_links_click', {
          task_name: listItemTag
        });
      }
    })));
  })));
};
// EXTERNAL MODULE: ./client/tasks/index.ts + 48 modules
var tasks = __webpack_require__(618);

// CONCATENATED MODULE: ./client/homescreen/welcome-modal/illustrations/line-chart.js


/**
 * External dependencies
 */

const LineChartIllustration = () => {
  return Object(external_wp_element_["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "517",
    height: "160",
    fill: "none"
  }, Object(external_wp_element_["createElement"])("defs", null), Object(external_wp_element_["createElement"])("g", {
    clipPath: "url(#clip0)"
  }, Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M0 0h517v160H0z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#fff",
    fillOpacity: ".65",
    d: "M125.85 217.924l-1.055-.321c-34.868-10.598-101.138-36.619-95.91-101.998 7.156-89.462 89.192-28.933 194.231-87.715 161.485-90.37 242.851-42.249 253.957 78.717 10.842 118.101-82.942 115.494-138.938 123.306-118.486 16.529-165.516 2.231-212.285-11.989z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#F6F7F7",
    d: "M125 33h267v185H125z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M327.367 93.974a6.417 6.417 0 00-6.285 7.671 6.418 6.418 0 005.035 5.044 6.405 6.405 0 006.579-2.73 6.427 6.427 0 00-.797-8.105 6.404 6.404 0 00-4.532-1.88zm0 11.615a5.18 5.18 0 01-3.668-1.522 5.2 5.2 0 01-1.23-5.38 5.196 5.196 0 014.168-3.447 5.18 5.18 0 014.967 2.137 5.201 5.201 0 01-1.546 7.453 5.186 5.186 0 01-2.706.75l.015.009z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M329.332 103.181l.806-.811a.354.354 0 00.078-.391.365.365 0 00-.078-.116l-1.456-1.461 1.456-1.458a.363.363 0 00.105-.254.36.36 0 00-.105-.254l-.806-.81a.354.354 0 00-.254-.106.356.356 0 00-.255.106l-1.456 1.458-1.456-1.458a.35.35 0 00-.253-.105.355.355 0 00-.253.105l-.809.826a.362.362 0 00-.078.39.363.363 0 00.078.117l1.456 1.458-1.456 1.461a.369.369 0 00-.105.254.356.356 0 00.105.254l.809.81a.354.354 0 00.39.078.354.354 0 00.116-.078l1.456-1.461 1.456 1.461a.366.366 0 00.509-.015zM314.559 145.63a6.413 6.413 0 00-2.722-4.13 6.429 6.429 0 00-4.883-.957l-.192.046c-.346.08-.684.191-1.01.33a6.437 6.437 0 00-3.892 5.926 6.433 6.433 0 003.907 5.916l.183.074a6.402 6.402 0 007.999-2.997 6.423 6.423 0 00.735-3.001 6.196 6.196 0 00-.125-1.207zm-1.184 1.978a.028.028 0 010 .018v.058a5.213 5.213 0 01-.913 2.181 5.191 5.191 0 01-4.068 2.146 5.162 5.162 0 01-3.445-1.2 5.2 5.2 0 01.693-8.443 4.936 4.936 0 011.026-.464l.192-.058a5.176 5.176 0 014.527.859 5.201 5.201 0 012.058 4.129 4.906 4.906 0 01-.07.774z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M310.223 149.613l.808-.81a.349.349 0 00.078-.116.348.348 0 000-.275.353.353 0 00-.078-.117l-1.455-1.458 1.455-1.458a.36.36 0 00.079-.393.36.36 0 00-.079-.117l-.808-.807a.362.362 0 00-.391-.078.349.349 0 00-.116.078l-1.455 1.464-1.465-1.464a.366.366 0 00-.254-.106.36.36 0 00-.253.106l-.809.807a.358.358 0 00-.078.393.358.358 0 00.078.117l1.459 1.458-1.459 1.458a.356.356 0 00-.078.392.382.382 0 00.078.116l.809.81a.365.365 0 00.253.106.366.366 0 00.254-.106l1.458-1.458 1.456 1.458a.353.353 0 00.513 0zM295.605 51.781l-.583-.587a.297.297 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372a.31.31 0 00.339.07.297.297 0 00.1-.07l4.465-4.439a.316.316 0 00.097-.22.313.313 0 00-.094-.223zm0 0l-.583-.587a.297.297 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372a.31.31 0 00.339.07.297.297 0 00.1-.07l4.465-4.439a.316.316 0 00.097-.22.313.313 0 00-.094-.223zm0 0l-.583-.587a.297.297 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372a.31.31 0 00.339.07.297.297 0 00.1-.07l4.465-4.439a.316.316 0 00.097-.22.313.313 0 00-.094-.223zm0 0l-.583-.587a.297.297 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372a.31.31 0 00.339.07.297.297 0 00.1-.07l4.465-4.439a.316.316 0 00.097-.22.313.313 0 00-.094-.223zm-3.628-4.619a6.402 6.402 0 00-5.921 3.963 6.432 6.432 0 001.389 6.996 6.404 6.404 0 009.86-.973 6.428 6.428 0 00-.797-8.106 6.403 6.403 0 00-4.531-1.88zm0 11.616a5.186 5.186 0 01-4.793-3.208 5.2 5.2 0 011.124-5.663 5.186 5.186 0 015.654-1.126 5.204 5.204 0 011.685 8.476 5.17 5.17 0 01-3.67 1.515v.006zm3.628-6.99l-.583-.588a.298.298 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372c.029.03.063.053.1.07a.31.31 0 00.239 0 .297.297 0 00.1-.07l4.465-4.438a.304.304 0 00.075-.347.31.31 0 00-.072-.103v.006zm0 0l-.583-.588a.298.298 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372c.029.03.063.053.1.07a.31.31 0 00.239 0 .297.297 0 00.1-.07l4.465-4.438a.304.304 0 00.075-.347.31.31 0 00-.072-.103v.006zm0 0l-.583-.588a.298.298 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372c.029.03.063.053.1.07a.31.31 0 00.239 0 .297.297 0 00.1-.07l4.465-4.438a.304.304 0 00.075-.347.31.31 0 00-.072-.103v.006zm0 0l-.583-.588a.298.298 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372c.029.03.063.053.1.07a.31.31 0 00.239 0 .297.297 0 00.1-.07l4.465-4.438a.304.304 0 00.075-.347.31.31 0 00-.072-.103v.006zm0 0l-.583-.588a.298.298 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372c.029.03.063.053.1.07a.31.31 0 00.239 0 .297.297 0 00.1-.07l4.465-4.438a.304.304 0 00.075-.347.31.31 0 00-.072-.103v.006zM306.96 98.595l-.582-.59a.311.311 0 00-.22-.093.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.303.303 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.312.312 0 00.097-.22.308.308 0 00-.091-.22zm0 0l-.582-.59a.311.311 0 00-.22-.093.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.303.303 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.312.312 0 00.097-.22.308.308 0 00-.091-.22zm0 0l-.582-.59a.311.311 0 00-.22-.093.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.303.303 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.312.312 0 00.097-.22.308.308 0 00-.091-.22zm0 0l-.582-.59a.311.311 0 00-.22-.093.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.303.303 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.312.312 0 00.097-.22.308.308 0 00-.091-.22zm-3.628-4.621a6.417 6.417 0 00-6.285 7.671 6.412 6.412 0 005.035 5.044 6.401 6.401 0 006.578-2.73 6.42 6.42 0 00-.797-8.105 6.4 6.4 0 00-4.531-1.88zm0 11.615a5.18 5.18 0 01-4.793-3.208 5.201 5.201 0 013.781-7.085 5.179 5.179 0 015.326 2.21c.57.854.874 1.86.874 2.887a5.202 5.202 0 01-1.516 3.677 5.178 5.178 0 01-3.672 1.516v.003zm3.628-6.99l-.582-.59a.31.31 0 00-.22-.094.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.302.302 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.3.3 0 00.098-.22.304.304 0 00-.092-.223v.002zm0 0l-.582-.59a.31.31 0 00-.22-.094.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.302.302 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.3.3 0 00.098-.22.304.304 0 00-.092-.223v.002zm0 0l-.582-.59a.31.31 0 00-.22-.094.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.302.302 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.3.3 0 00.098-.22.304.304 0 00-.092-.223v.002zm0 0l-.582-.59a.31.31 0 00-.22-.094.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.302.302 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.3.3 0 00.098-.22.304.304 0 00-.092-.223v.002zm0 0l-.582-.59a.31.31 0 00-.22-.094.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.302.302 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.3.3 0 00.098-.22.304.304 0 00-.092-.223v.002zM287.774 145.407l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.309.309 0 00.097-.219.309.309 0 00-.091-.221zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.309.309 0 00.097-.219.309.309 0 00-.091-.221zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.309.309 0 00.097-.219.309.309 0 00-.091-.221zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.309.309 0 00.097-.219.309.309 0 00-.091-.221zm-3.628-4.622a6.416 6.416 0 00-6.285 7.671 6.414 6.414 0 005.035 5.044 6.393 6.393 0 003.702-.365 6.418 6.418 0 003.957-5.931 6.43 6.43 0 00-1.877-4.539 6.403 6.403 0 00-4.532-1.88zm0 11.616a5.181 5.181 0 01-2.882-.876 5.2 5.2 0 011.87-9.418 5.186 5.186 0 015.326 2.21c.57.855.874 1.859.874 2.887a5.191 5.191 0 01-1.515 3.678 5.163 5.163 0 01-3.673 1.516v.003zm3.628-6.991l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.297.297 0 00.098-.22.293.293 0 00-.023-.121.284.284 0 00-.069-.102v.003zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.297.297 0 00.098-.22.293.293 0 00-.023-.121.284.284 0 00-.069-.102v.003zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.297.297 0 00.098-.22.293.293 0 00-.023-.121.284.284 0 00-.069-.102v.003zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.297.297 0 00.098-.22.293.293 0 00-.023-.121.284.284 0 00-.069-.102v.003zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.297.297 0 00.098-.22.293.293 0 00-.023-.121.284.284 0 00-.069-.102v.003zM349.568 75.187l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm-3.628-4.619a6.402 6.402 0 00-4.17 1.5 6.422 6.422 0 00-1.386 8.21 6.415 6.415 0 003.447 2.79 6.4 6.4 0 004.477-.092c.317-.126.624-.278.915-.456a6.418 6.418 0 002.93-7.236 6.422 6.422 0 00-2.309-3.413 6.4 6.4 0 00-3.904-1.303zm2.273 11.087a5.056 5.056 0 01-.665.272 5.213 5.213 0 01-3.406-.067 5.197 5.197 0 01-1.681-8.731 5.182 5.182 0 018.501 2.56 5.195 5.195 0 01-2.749 5.966zm1.355-6.468l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447z"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M268.92 47H150.08c-3.358 0-6.08 2.91-6.08 6.5s2.722 6.5 6.08 6.5h118.84c3.358 0 6.08-2.91 6.08-6.5s-2.722-6.5-6.08-6.5z",
    opacity: ".6"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M321.919 71H150.081c-3.359 0-6.081 2.686-6.081 6s2.722 6 6.081 6h171.838c3.359 0 6.081-2.686 6.081-6s-2.722-6-6.081-6z",
    opacity: ".3"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M279.927 94H150.073c-3.354 0-6.073 2.91-6.073 6.5s2.719 6.5 6.073 6.5h129.854c3.354 0 6.073-2.91 6.073-6.5s-2.719-6.5-6.073-6.5z",
    opacity: ".6"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M321.919 118H150.081c-3.359 0-6.081 2.686-6.081 6s2.722 6 6.081 6h171.838c3.359 0 6.081-2.686 6.081-6s-2.722-6-6.081-6z",
    opacity: ".3"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M261.916 141H150.084c-3.36 0-6.084 2.686-6.084 6s2.724 6 6.084 6h111.832c3.36 0 6.084-2.686 6.084-6s-2.724-6-6.084-6z",
    opacity: ".1"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M316.161 47.162a6.4 6.4 0 00-5.92 3.963 6.432 6.432 0 001.389 6.996 6.404 6.404 0 009.86-.973 6.428 6.428 0 00-.797-8.106 6.404 6.404 0 00-4.532-1.88zm0 11.616a5.18 5.18 0 01-2.882-.876 5.198 5.198 0 011.87-9.417 5.181 5.181 0 015.326 2.21c.57.854.874 1.859.874 2.887a5.195 5.195 0 01-3.201 4.8c-.63.26-1.305.392-1.987.39v.006z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M318.127 56.366l.808-.807a.35.35 0 00.078-.117.346.346 0 000-.276.35.35 0 00-.078-.117l-1.458-1.458 1.455-1.458a.35.35 0 00.078-.117.346.346 0 000-.277.35.35 0 00-.078-.117l-.808-.807a.364.364 0 00-.254-.105.358.358 0 00-.253.105l-1.456 1.458-1.455-1.458a.361.361 0 00-.51 0l-.806.807a.365.365 0 00-.107.255.365.365 0 00.107.256l1.456 1.458-1.453 1.455a.365.365 0 00-.079.394.381.381 0 00.079.116l.806.807a.353.353 0 00.255.106.363.363 0 00.255-.106l1.455-1.458 1.456 1.458a.352.352 0 00.253.107.356.356 0 00.254-.104zM369.966 70.568a6.402 6.402 0 00-5.921 3.963 6.432 6.432 0 001.389 6.995 6.404 6.404 0 0010.94-4.539 6.403 6.403 0 00-3.953-5.935 6.383 6.383 0 00-2.455-.484zm0 11.616a5.179 5.179 0 01-3.17-1.076 5.203 5.203 0 01-1.621-6.136 5.187 5.187 0 015.512-3.13 5.186 5.186 0 012.985 1.519 5.2 5.2 0 01-1.158 8.146 5.18 5.18 0 01-2.548.674v.003z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M371.925 79.772l.808-.807a.363.363 0 000-.51l-1.458-1.459 1.458-1.458a.348.348 0 00.078-.116.343.343 0 000-.275.346.346 0 00-.078-.116l-.808-.81a.358.358 0 00-.507 0l-1.452 1.458-1.456-1.458a.358.358 0 00-.507 0l-.808.81a.36.36 0 00-.078.391.348.348 0 00.078.116l1.455 1.458-1.455 1.458a.364.364 0 000 .51l.808.808a.35.35 0 00.507 0l1.456-1.458 1.458 1.458a.358.358 0 00.501 0z"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M344 94h90v80h-90z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#fff",
    fillOpacity: ".65",
    d: "M364.607 150.419H357v25.307h7.607v-25.307zM379.317 132h-7.607v43.455h7.607V132zM394.026 136h-7.607v61.603h7.607V136zM408.736 123h-7.607v55.726h7.607V123zM423.445 132.197h-7.607v38.342h7.607v-38.342z",
    opacity: ".2"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#fff",
    d: "M356.331 134l-.331-.495 15.486-21.052 13.65 14.005 11.039-17.456 4.84 5.868 13.168-11.268 14.625 14.021L451.763 99l.237.594-23.213 18.833-14.619-14.015-13.201 11.297-4.748-5.756-11.014 17.418-13.677-14.031L356.331 134z"
  })), Object(external_wp_element_["createElement"])("defs", null, Object(external_wp_element_["createElement"])("clipPath", {
    id: "clip0"
  }, Object(external_wp_element_["createElement"])("path", {
    fill: "#fff",
    d: "M0 0h517v160H0z"
  }))));
};
// CONCATENATED MODULE: ./client/homescreen/welcome-modal/page-content/index.js


/**
 * External dependencies
 */

const PageContent = ({
  title,
  body
}) => {
  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce__welcome-modal__page-content"
  }, Object(external_wp_element_["createElement"])("h2", {
    className: "woocommerce__welcome-modal__page-content__header"
  }, title), Object(external_wp_element_["createElement"])("p", {
    className: "woocommerce__welcome-modal__page-content__body"
  }, body));
};
// EXTERNAL MODULE: ./client/homescreen/welcome-from-calypso-modal/style.scss
var welcome_from_calypso_modal_style = __webpack_require__(580);

// CONCATENATED MODULE: ./client/homescreen/welcome-from-calypso-modal/welcome-from-calypso-modal.js


/**
 * External dependencies
 */







/**
 * Internal dependencies
 */




const page = {
  image: Object(external_wp_element_["createElement"])(LineChartIllustration, null),
  content: Object(external_wp_element_["createElement"])(PageContent, {
    title: Object(external_wp_i18n_["__"])('Welcome to your new store management experience', 'woocommerce-admin'),
    body: lib_default()({
      mixedString: Object(external_wp_i18n_["__"])("We've designed your navigation and home screen to help you focus on the things that matter most in managing your online store. {{link}}Learn more{{/link}} about these changes – or explore on your own.", 'woocommerce-admin'),
      components: {
        link: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
          href: "https://wordpress.com/support/new-woocommerce-experience-on-wordpress-dot-com/",
          type: "external",
          target: "_blank"
        })
      }
    })
  })
};
function WelcomeFromCalypsoModal({
  onClose
}) {
  const [guideIsOpen, setGuideIsOpen] = Object(external_wp_element_["useState"])(true);
  Object(external_wp_element_["useEffect"])(() => {
    Object(external_wc_tracks_["recordEvent"])('welcome_from_calypso_modal_open');
  }, []);

  if (!guideIsOpen) {
    return null;
  }

  const guideClassNames = classnames_default()('woocommerce__welcome-modal', 'woocommerce__welcome-from-calypso-modal');
  return Object(external_wp_element_["createElement"])(external_wp_components_["Guide"], {
    onFinish: () => {
      if (onClose) {
        onClose();
      }

      setGuideIsOpen(false);
      Object(external_wc_tracks_["recordEvent"])('welcome_from_calypso_modal_close');
    },
    className: guideClassNames,
    finishButtonText: Object(external_wp_i18n_["__"])("Let's go", 'woocommerce-admin'),
    pages: [page]
  });
}
// CONCATENATED MODULE: ./client/homescreen/welcome-from-calypso-modal/index.js

// CONCATENATED MODULE: ./client/homescreen/welcome-modal/illustrations/inbox.js


/**
 * External dependencies
 */

const InboxIllustration = () => {
  return Object(external_wp_element_["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "517",
    height: "160",
    fill: "none"
  }, Object(external_wp_element_["createElement"])("defs", null), Object(external_wp_element_["createElement"])("g", {
    clipPath: "url(#clip0)"
  }, Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M0 0h517v160H0z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#fff",
    fillOpacity: ".65",
    d: "M33.576 185.926c-6.271-.911-14.742-.279-17.182 7.085-1.239 3.736-.178 7.645.98 11.08 4.89 14.682 11.49 28.444 19.643 40.954 3.897 5.965 8.253 11.884 9.592 19.504 1.34 7.619-.56 16.084-2.934 23.945-5.595 18.62-13.762 36.371-24.188 52.572 16.006 9.711 34.165 19.634 52.684 12.57 11.09-4.232 21.041-14.268 32.365-15.961 7.562-1.132 14.735 1.648 21.594 4.467a998.376 998.376 0 0195.343 45.227c13.023 7.042 26.207 14.481 40.901 16.153 14.694 1.672 31.486-3.518 41.947-17.66 1.611-2.179 3.241-4.669 5.483-5.546 2.02-.776 4.069-.045 5.952.688l113.896 44.033c6.241 2.411 12.718 4.853 19.534 3.832 6.606-.985 12.833-5.095 18.858-9.148 13.771-9.237 29.242-21.105 32.239-39.005 2.407-14.347-4.339-27.253-11.974-37.283-7.636-10.03-16.705-19.204-20.353-32.315-5.549-19.955 2.798-42.949 9.281-64.164a405.4 405.4 0 0013.244-58.574c2.588-17.377 4.004-35.179.91-51.659-3.095-16.481-11.265-31.624-24.089-38.27-16.746-8.681-38.828-2.057-54.255-13.347-13.04-9.513-17.58-29.035-25.856-44.316-14.698-27.146-41.453-40.923-67.958-50.405-28.1-10.066-58.213-16.679-88.607-10-6.962 1.527-14.047 3.833-20.152 8.649-9.36 7.388-15.196 19.616-22.986 29.33C156.104 57.468 100.341 49.156 68.22 87.48c-11.398 13.594-17.581 31.878-18.797 49.831-1.31 19.318 8.69 33.652 8.706 50.888-7.135 2.277-17.21-1.211-24.553-2.273z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#F6F7F7",
    d: "M113 33h267v185H113z"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M248.466 73.79h-114.69V47.88h114.69V73.79zm-114.015-.673h113.341V48.554H134.451v24.563z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M155.702 56.63h-12.818v12.786h12.818V56.63z"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M154.016 67.733h-13.493V54.274h13.493v13.46zm-12.819-.673h12.144V54.947h-12.144V67.06z"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M225.267 56.966h-50v.673h50v-.673z",
    opacity: ".7"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M235.311 61.677h-60.044v.673h60.044v-.673z",
    opacity: ".5"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M225.267 66.387h-50v.673h50v-.673z",
    opacity: ".2"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M248.466 147.142h-114.69v-25.909h114.69v25.909zm-114.015-.673h113.341v-24.563H134.451v24.563z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M155.702 129.981h-12.818v12.786h12.818v-12.786z"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M154.016 141.085h-13.493v-13.459h13.493v13.459zm-12.819-.673h12.144v-12.113h-12.144v12.113z"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M235.311 130.318h-60.044v.673h60.044v-.673z",
    opacity: ".7"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M225.267 135.028h-50v.673h50v-.673z",
    opacity: ".5"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M215.267 139.739h-40v.673h40v-.673z",
    opacity: ".2"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M289.62 110.465H174.93V84.557h114.69v25.908zm-114.016-.672h113.341V85.23H175.604v24.563z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#CCC",
    d: "M267.694 106.092h12.818V93.305h-12.818v12.787z"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M282.873 104.409H269.38V90.95h13.493v13.459zm-12.818-.673h12.144V91.623h-12.144v12.113z"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M248.129 93.642h-60.044v.673h60.044v-.673z",
    opacity: ".7"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M238.085 98.353h-50v.672h50v-.672z",
    opacity: ".5"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M243.085 103.063h-55v.673h55v-.673z",
    opacity: ".2"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M266.035 66.154a5.363 5.363 0 005.369-5.356 5.363 5.363 0 00-5.369-5.356c-2.966 0-5.37 2.398-5.37 5.356 0 2.958 2.404 5.356 5.37 5.356zM273.793 140.515c2.966 0 5.37-2.398 5.37-5.356 0-2.958-2.404-5.356-5.37-5.356a5.363 5.363 0 00-5.369 5.356 5.363 5.363 0 005.369 5.356zM153.706 102.83a5.363 5.363 0 005.37-5.356c0-2.959-2.404-5.357-5.37-5.357s-5.37 2.398-5.37 5.357a5.363 5.363 0 005.37 5.356z",
    opacity: ".5"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M401.276 172h-70.552a8.79 8.79 0 01-6.169-2.517 8.532 8.532 0 01-2.555-6.078V131.56a3.368 3.368 0 011.078-2.471l37.386-34.915A8.113 8.113 0 01366 92c2.06 0 4.041.778 5.536 2.174l35.645 33.289a8.882 8.882 0 012.084 2.944 8.78 8.78 0 01.735 3.515v29.483c0 2.28-.919 4.466-2.555 6.078a8.79 8.79 0 01-6.169 2.517z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#F0F0F0",
    d: "M393.267 106h-54.534c-2.614 0-4.733 2.053-4.733 4.585v52.83c0 2.532 2.119 4.585 4.733 4.585h54.534c2.614 0 4.733-2.053 4.733-4.585v-52.83c0-2.532-2.119-4.585-4.733-4.585z"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M366 150.493l-41.579-20.323a1.667 1.667 0 00-1.631.091 1.695 1.695 0 00-.579.619 1.725 1.725 0 00-.211.826v34.967a5.345 5.345 0 001.543 3.767 5.261 5.261 0 003.725 1.56h77.464a5.261 5.261 0 003.725-1.56 5.345 5.345 0 001.543-3.767v-34.368c0-.352-.088-.699-.257-1.008a2.069 2.069 0 00-1.688-1.071 2.035 2.035 0 00-1.009.205L366 150.493zM390 118h-48v2h48v-2zM390 124h-48v2h48v-2z"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M384 130h-42v2h42v-2z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#fff",
    d: "M335 112a7 7 0 100-14 7 7 0 000 14z"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M336 98a8.003 8.003 0 00-7.391 4.939 7.992 7.992 0 00-.455 4.622 7.993 7.993 0 006.285 6.285A8 8 0 00344 106a8.022 8.022 0 00-8-8zm-1.642 12.265l-4.1-4.1 1.15-1.15 2.954 2.954 6.234-6.234 1.15 1.15-7.388 7.38z"
  })), Object(external_wp_element_["createElement"])("defs", null, Object(external_wp_element_["createElement"])("clipPath", {
    id: "clip0"
  }, Object(external_wp_element_["createElement"])("path", {
    fill: "#fff",
    d: "M0 0h517v160H0z"
  }))));
};
// CONCATENATED MODULE: ./client/homescreen/welcome-modal/illustrations/pie-chart.js


/**
 * External dependencies
 */

const PieChartIllustration = () => {
  return Object(external_wp_element_["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "517",
    height: "160",
    fill: "none"
  }, Object(external_wp_element_["createElement"])("defs", null), Object(external_wp_element_["createElement"])("g", {
    clipPath: "url(#clip0)"
  }, Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M0 0h517v160H0z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#fff",
    fillOpacity: ".65",
    d: "M30.501 63.74c7.21-10.372 19.533-17.051 31.735-22.399l2.057-.888c12.774-5.469 25.944-10.008 39.27-14.127 7.129-2.21 14.285-4.313 21.448-6.389l5.615-1.62c7.29-2.106 14.596-4.21 21.916-6.315a6165.97 6165.97 0 0121.511-6.139 3346.684 3346.684 0 0127.597-7.677 2189.847 2189.847 0 0121.603-5.782c9.237-2.42 18.491-4.764 27.761-7.035 7.246-1.77 14.502-3.483 21.767-5.14a1152.381 1152.381 0 0128.025-6 940.985 940.985 0 0119.106-3.654l2.908-.52c27.416-4.852 55.724-8.222 82.193-2.775l.715.151c.355.074.71.148 1.067.23a87.181 87.181 0 0114.309 4.404c8.282 3.398 15.644 8.247 20.596 14.967 7.763 10.54 8.624 24.398 6.126 37.281-2.498 12.884-8.007 25.346-12.299 37.974-1.257 3.7-2.378 7.49-3.34 11.33-5.997 24.068-5.398 49.993 11.766 67.323a93.715 93.715 0 007.029 6.227c3.928 3.218 7.905 6.424 11.03 10.3 7.28 9.017 9.211 20.756 10.296 32.099 1.425 15.086 1.236 31.775-9.516 44.175-11.153 12.875-30.519 17.317-48.211 18.232-27.498 1.457-54.442-3.316-81.339-6.956-26.898-3.641-54.739-6.141-81.787-.263a121.18 121.18 0 00-17.082 5.062 108.9 108.9 0 00-21.21 10.677c-9.622 6.318-17.826 14.22-23.006 23.613-11.123 20.092-39.488 28.645-62.664 24.15-22.115-4.288-39.921-20.774-44.019-40.738-4.538-22.229 6.615-44.308 16.332-66.515a358.83 358.83 0 003.437-8.081 238.988 238.988 0 001.795-4.513 165.185 165.185 0 002.828-7.947c4.39-13.591 6.016-28.984-2.295-40.321-4.658-6.347-11.477-10.355-19.238-13.393-17.388-6.801-39.481-8.722-52.38-21.167C22.84 94.854 21.359 76.92 30.502 63.74z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#F6F7F7",
    d: "M124 33h267v185H124z"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M169 152.005V229a734.947 734.947 0 01-15.628-.991l-2.372-.181v-75.823c0-.395.072-.785.212-1.15.14-.365.345-.696.604-.975.258-.279.565-.5.903-.651a2.61 2.61 0 011.066-.229h12.43c.366 0 .728.078 1.066.229.338.151.645.372.903.651.259.279.464.61.604.975.14.365.212.755.212 1.15z",
    opacity: ".7"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M186 229.733V127.377c0-.63.31-1.235.861-1.681.551-.446 1.299-.696 2.079-.696h13.12c.386 0 .768.061 1.125.181.357.119.681.294.954.515.273.221.489.483.637.771.148.289.224.598.224.91V230l-19-.267z",
    opacity: ".5"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M225 230.002v-97.406a2.843 2.843 0 012.843-2.845h12.689a2.844 2.844 0 012.844 2.845v97.196l-18.376.21z",
    opacity: ".7"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M282 88.368v140.224c-6 .145-12 .281-18 .408V88.368c0-.628.293-1.23.816-1.674.522-.445 1.231-.694 1.969-.694h12.43c.738 0 1.447.25 1.969.694.523.444.816 1.046.816 1.674z",
    opacity: ".5"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M319 112.954v115.709c-6 .12-12 .232-18 .337V112.954c0-.518.293-1.015.816-1.382.522-.366 1.231-.572 1.969-.572h12.43c.738 0 1.447.206 1.969.572.523.367.816.864.816 1.382z",
    opacity: ".7"
  }), Object(external_wp_element_["createElement"])("path", {
    stroke: "#CCC",
    strokeLinecap: "round",
    strokeMiterlimit: "10",
    strokeWidth: "2",
    d: "M160.125 133.501l41.91-46.767 41.91 23.545 41.91-72.248 41.909 34.511"
  }), Object(external_wp_element_["createElement"])("path", {
    className: "fill-theme-color",
    d: "M160 139.005c2.761 0 5-2.24 5-5.003a5.002 5.002 0 00-5-5.002c-2.761 0-5 2.24-5 5.002a5.002 5.002 0 005 5.003zM201.5 93.007c4.142 0 7.5-3.36 7.5-7.504A7.502 7.502 0 00201.5 78c-4.142 0-7.5 3.36-7.5 7.504a7.502 7.502 0 007.5 7.503zM243.784 119.31c4.985 0 9.026-4.043 9.026-9.031s-4.041-9.031-9.026-9.031c-4.986 0-9.027 4.043-9.027 9.031s4.041 9.031 9.027 9.031zM286.027 46.062c4.985 0 9.027-4.043 9.027-9.031S291.012 28 286.027 28c-4.986 0-9.027 4.043-9.027 9.031s4.041 9.031 9.027 9.031zM327.5 80.007c4.142 0 7.5-3.36 7.5-7.504A7.502 7.502 0 00327.5 65c-4.142 0-7.5 3.36-7.5 7.504a7.502 7.502 0 007.5 7.503zM408 137l-36 2-18-30.926c5.588-3.326 12.033-5.083 18.606-5.074C392.154 103 408 118.222 408 137zM351.107 110l-.143.088c-7.887 4.836-13.573 12.518-15.859 21.429a35.211 35.211 0 003.603 26.338l.084.145L370 140.317 351.107 110zm-12.19 47.543a34.886 34.886 0 01-3.485-25.944c2.25-8.77 7.826-16.342 15.566-21.138l18.531 29.738-30.612 17.344zM408.664 138.651l-35.891 2.797 10.3 32.297.162-.046c7.808-2.265 14.585-6.957 19.211-13.301 4.626-6.344 6.824-13.96 6.23-21.588l-.012-.159zm-35.447 3.081l35.134-2.738c1.116 15.348-9.387 29.753-25.051 34.355l-10.083-31.617zM370.719 142.639l-30.714 17.335.088.131c3.977 5.942 9.926 10.554 16.982 13.165 7.056 2.61 14.849 3.083 22.245 1.349l.164-.038-8.765-31.942zm-30.249 17.435l30.034-16.951 8.57 31.234c-7.278 1.673-14.935 1.192-21.871-1.374-6.936-2.566-12.794-7.086-16.733-12.909z"
  }), Object(external_wp_element_["createElement"])("path", {
    fill: "#fff",
    d: "M423 97h-17v-1h17v1zM423 101h-17v-3h17v3zM416 104h-17.979l-.05.068L384 122.821l.28.179 13.92-18.685H416V104z"
  })), Object(external_wp_element_["createElement"])("defs", null, Object(external_wp_element_["createElement"])("clipPath", {
    id: "clip0"
  }, Object(external_wp_element_["createElement"])("path", {
    fill: "#fff",
    d: "M0 0h517v160H0z"
  }))));
};
// EXTERNAL MODULE: ./client/homescreen/welcome-modal/style.scss
var welcome_modal_style = __webpack_require__(581);

// CONCATENATED MODULE: ./client/homescreen/welcome-modal/index.js


/**
 * External dependencies
 */




/**
 * Internal dependencies
 */






const pages = [{
  image: Object(external_wp_element_["createElement"])(LineChartIllustration, null),
  content: Object(external_wp_element_["createElement"])(PageContent, {
    title: Object(external_wp_i18n_["__"])('Welcome to your WooCommerce store’s online HQ!', 'woocommerce-admin'),
    body: Object(external_wp_i18n_["__"])("Here's where you’ll find setup suggestions, tips and tools, and key data on your store’s performance and earnings — all the basics for store management and growth.", 'woocommerce-admin')
  })
}, {
  image: Object(external_wp_element_["createElement"])(InboxIllustration, null),
  content: Object(external_wp_element_["createElement"])(PageContent, {
    title: Object(external_wp_i18n_["__"])('A personalized inbox full of relevant advice', 'woocommerce-admin'),
    body: Object(external_wp_i18n_["__"])('Check your inbox for helpful growth tips tailored to your store and notifications about key traffic and sales milestones. We look forward to celebrating them with you!', 'woocommerce-admin')
  })
}, {
  image: Object(external_wp_element_["createElement"])(PieChartIllustration, null),
  content: Object(external_wp_element_["createElement"])(PageContent, {
    title: Object(external_wp_i18n_["__"])('Good data leads to smart business decisions', 'woocommerce-admin'),
    body: Object(external_wp_i18n_["__"])('Monitor your stats to improve performance, increase sales, and track your progress toward revenue goals. The more you know, the better you can serve your customers and grow your store.', 'woocommerce-admin')
  })
}];
const WelcomeModal = ({
  onClose
}) => {
  const [guideIsOpen, setGuideIsOpen] = Object(external_wp_element_["useState"])(true);
  Object(external_wp_element_["useEffect"])(() => {
    Object(external_wc_tracks_["recordEvent"])('task_list_welcome_modal_open');
  }, []);
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, guideIsOpen && Object(external_wp_element_["createElement"])(external_wp_components_["Guide"], {
    onFinish: () => {
      setGuideIsOpen(false);
      onClose();
      Object(external_wc_tracks_["recordEvent"])('task_list_welcome_modal_close');
    },
    className: 'woocommerce__welcome-modal',
    finishButtonText: Object(external_wp_i18n_["__"])("Let's go", 'woocommerce-admin'),
    pages: pages
  }));
};
// EXTERNAL MODULE: ./client/homescreen/style.scss
var homescreen_style = __webpack_require__(582);

// EXTERNAL MODULE: ./client/dashboard/style.scss
var dashboard_style = __webpack_require__(519);

// CONCATENATED MODULE: ./client/homescreen/layout.js


/**
 * External dependencies
 */









/**
 * Internal dependencies
 */














const Tasks = Object(external_wp_element_["lazy"])(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 618)));
const TwoColumnTasks = Object(external_wp_element_["lazy"])(() => __webpack_require__.e(/* import() | two-column-tasks */ 52).then(__webpack_require__.bind(null, 629)));
const TwoColumnTasksExtended = Object(external_wp_element_["lazy"])(() => __webpack_require__.e(/* import() | two-column-tasks-extended */ 53).then(__webpack_require__.bind(null, 625)));
const Layout = ({
  defaultHomescreenLayout,
  isBatchUpdating,
  query,
  taskListComplete,
  bothTaskListsHidden,
  shouldShowWelcomeModal,
  shouldShowWelcomeFromCalypsoModal,
  isTaskListHidden,
  updateOptions
}) => {
  const userPrefs = Object(external_wc_data_["useUserPreferences"])();
  const shouldShowStoreLinks = taskListComplete || isTaskListHidden;
  const hasTwoColumnContent = shouldShowStoreLinks || window.wcAdminFeatures.analytics;
  const [showInbox, setShowInbox] = Object(external_wp_element_["useState"])(true);
  const isTaskListEnabled = bothTaskListsHidden === false;
  const isDashboardShown = !query.task;
  const momentDate = external_moment_default()().utc();
  const [isLoadingExperimentAssignment, experimentAssignment] = Object(external_wc_explat_["useExperiment"])('woocommerce_tasklist_progression_headercard_' + momentDate.format('YYYY') + '_' + momentDate.format('MM'));
  const [isLoadingTwoColExperimentAssignment, twoColExperimentAssignment] = Object(external_wc_explat_["useExperiment"])('woocommerce_tasklist_progression_headercard_2col_' + momentDate.format('YYYY') + '_' + momentDate.format('MM'));
  const isRunningTwoColumnExperiment = (twoColExperimentAssignment === null || twoColExperimentAssignment === void 0 ? void 0 : twoColExperimentAssignment.variationName) === 'treatment'; // New TaskList UI is enabled when either experiment is treatment.

  const isRunningTaskListExperiment = (experimentAssignment === null || experimentAssignment === void 0 ? void 0 : experimentAssignment.variationName) === 'treatment' || isRunningTwoColumnExperiment; // Override defaultHomescreenLayout if store is in the experiment.

  const defaultHomescreenLayoutOverride = () => {
    if (isLoadingExperimentAssignment || isLoadingTwoColExperimentAssignment) {
      return defaultHomescreenLayout; // Experiments are still loading, don't override.
    }

    if (!isRunningTaskListExperiment) {
      return defaultHomescreenLayout; // Not in the experiment, don't override.
    }

    return isRunningTwoColumnExperiment ? 'two_columns' : 'single_column';
  };

  const twoColumns = (userPrefs.homepage_layout || defaultHomescreenLayoutOverride()) === 'two_columns' && hasTwoColumnContent;

  if (isBatchUpdating && !showInbox) {
    setShowInbox(true);
  }

  const isWideViewport = Object(external_wp_element_["useRef"])(true);
  const maybeToggleColumns = Object(external_wp_element_["useCallback"])(() => {
    isWideViewport.current = window.innerWidth >= 782;
  }, []);
  Object(external_wp_element_["useLayoutEffect"])(() => {
    maybeToggleColumns();
    window.addEventListener('resize', maybeToggleColumns);
    return () => {
      window.removeEventListener('resize', maybeToggleColumns);
    };
  }, [maybeToggleColumns]);
  const shouldStickColumns = isWideViewport.current && twoColumns;

  const renderColumns = () => {
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(Column, {
      shouldStick: shouldStickColumns
    }, !isRunningTaskListExperiment && Object(external_wp_element_["createElement"])(activity_header["a" /* default */], {
      className: "your-store-today",
      title: Object(external_wp_i18n_["__"])('Your store today', 'woocommerce-admin'),
      subtitle: Object(external_wp_i18n_["__"])("To do's, tips, and insights for your business", 'woocommerce-admin')
    }), !isRunningTaskListExperiment && Object(external_wp_element_["createElement"])(ActivityPanel, null), isTaskListEnabled && renderTaskList(), Object(external_wp_element_["createElement"])(inbox_panel["a" /* default */], null)), Object(external_wp_element_["createElement"])(Column, {
      shouldStick: shouldStickColumns
    }, window.wcAdminFeatures.analytics && Object(external_wp_element_["createElement"])(stats_overview, null), shouldShowStoreLinks && Object(external_wp_element_["createElement"])(StoreManagementLinks, null)));
  };

  const renderTaskList = () => {
    if (twoColumns && isRunningTaskListExperiment) {
      return (// When running the two-column experiment, we still need to render
        // the component in the left column for the extended task list.
        Object(external_wp_element_["createElement"])(TwoColumnTasksExtended, {
          query: query
        })
      );
    } else if (!twoColumns && isRunningTaskListExperiment && !isLoadingExperimentAssignment) {
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(TwoColumnTasks, {
        query: query,
        userPreferences: userPrefs,
        twoColumns: twoColumns
      }), Object(external_wp_element_["createElement"])(TwoColumnTasksExtended, {
        query: query
      }));
    }

    return Object(external_wp_element_["createElement"])(external_wp_element_["Suspense"], {
      fallback: Object(external_wp_element_["createElement"])(tasks["TasksPlaceholder"], {
        query: query
      })
    }, Object(external_wp_element_["createElement"])(Tasks, {
      query: query
    }));
  };

  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, twoColumns && isRunningTaskListExperiment && Object(external_wp_element_["createElement"])(TwoColumnTasks, {
    query: query,
    userPreferences: userPrefs,
    twoColumns: twoColumns
  }), Object(external_wp_element_["createElement"])("div", {
    className: classnames_default()('woocommerce-homescreen', {
      'two-columns': twoColumns
    })
  }, isDashboardShown ? renderColumns() : renderTaskList(), shouldShowWelcomeModal && Object(external_wp_element_["createElement"])(WelcomeModal, {
    onClose: () => {
      updateOptions({
        [WELCOME_MODAL_DISMISSED_OPTION_NAME]: 'yes'
      });
    }
  }), shouldShowWelcomeFromCalypsoModal && Object(external_wp_element_["createElement"])(WelcomeFromCalypsoModal, {
    onClose: () => {
      updateOptions({
        [WELCOME_FROM_CALYPSO_MODAL_DISMISSED_OPTION_NAME]: 'yes'
      });
    }
  }), window.wcAdminFeatures.navigation && Object(external_wp_element_["createElement"])(IntroModal, null)));
};
Layout.propTypes = {
  /**
   * If the task list has been completed.
   */
  taskListComplete: prop_types_default.a.bool,

  /**
   * If the task list is hidden.
   */
  bothTaskListsHidden: prop_types_default.a.bool,

  /**
   * Page query, used to determine the current task if any.
   */
  query: prop_types_default.a.object.isRequired,

  /**
   * If the welcome modal should display
   */
  shouldShowWelcomeModal: prop_types_default.a.bool,

  /**
   * If the welcome from Calypso modal should display.
   */
  shouldShowWelcomeFromCalypsoModal: prop_types_default.a.bool,

  /**
   * Dispatch an action to update an option
   */
  updateOptions: prop_types_default.a.func.isRequired
};
/* harmony default export */ var layout = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(select => {
  const {
    isNotesRequesting
  } = select(external_wc_data_["NOTES_STORE_NAME"]);
  const {
    getOption,
    hasFinishedResolution
  } = select(external_wc_data_["OPTIONS_STORE_NAME"]);
  const welcomeFromCalypsoModalDismissed = getOption(WELCOME_FROM_CALYPSO_MODAL_DISMISSED_OPTION_NAME) === 'yes';
  const welcomeFromCalypsoModalDismissedResolved = hasFinishedResolution('getOption', [WELCOME_FROM_CALYPSO_MODAL_DISMISSED_OPTION_NAME]);
  const fromCalypsoUrlArgIsPresent = !!window.location.search.match('from-calypso');
  const shouldShowWelcomeFromCalypsoModal = welcomeFromCalypsoModalDismissedResolved && !welcomeFromCalypsoModalDismissed && fromCalypsoUrlArgIsPresent;
  const welcomeModalDismissed = getOption(WELCOME_MODAL_DISMISSED_OPTION_NAME) === 'yes';
  const welcomeModalDismissedHasResolved = hasFinishedResolution('getOption', [WELCOME_MODAL_DISMISSED_OPTION_NAME]);
  const shouldShowWelcomeModal = welcomeModalDismissedHasResolved && !welcomeModalDismissed && welcomeFromCalypsoModalDismissedResolved && !welcomeFromCalypsoModalDismissed;
  const defaultHomescreenLayout = getOption('woocommerce_default_homepage_layout') || 'single_column';
  const isTaskListHidden = getOption('woocommerce_task_list_hidden') === 'yes';
  return {
    defaultHomescreenLayout,
    isBatchUpdating: isNotesRequesting('batchUpdateNotes'),
    shouldShowWelcomeModal,
    shouldShowWelcomeFromCalypsoModal,
    isTaskListHidden,
    bothTaskListsHidden: isTaskListHidden && getOption('woocommerce_extended_task_list_hidden') === 'yes',
    taskListComplete: getOption('woocommerce_task_list_complete') === 'yes'
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => ({
  updateOptions: dispatch(external_wc_data_["OPTIONS_STORE_NAME"]).updateOptions
})))(Layout));
// CONCATENATED MODULE: ./client/homescreen/index.tsx


/**
 * External dependencies
 */







/**
 * Internal dependencies
 */


const Homescreen = ({
  profileItems,
  query
}) => {
  const {
    completed: profilerCompleted,
    skipped: profilerSkipped
  } = profileItems || {};

  if (!profilerCompleted && !profilerSkipped) {
    Object(external_wc_navigation_["getHistory"])().push(Object(external_wc_navigation_["getNewPath"])({}, '/setup-wizard', {}));
  }

  return Object(external_wp_element_["createElement"])(layout, {
    query: query
  });
};

const onboardingData = Object(build_module["f" /* getSetting */])('onboarding', {});

const withSelectHandler = select => {
  const {
    getProfileItems
  } = select(external_wc_data_["ONBOARDING_STORE_NAME"]);
  const profileItems = getProfileItems();
  return {
    profileItems
  };
};

/* harmony default export */ var homescreen = __webpack_exports__["default"] = (Object(external_wp_compose_["compose"])(onboardingData.profile ? Object(external_wc_data_["withOnboardingHydration"])({
  profileItems: onboardingData.profile
}) : external_lodash_["identity"], Object(external_wp_data_["withSelect"])(withSelectHandler))(Homescreen));

/***/ })

}]);