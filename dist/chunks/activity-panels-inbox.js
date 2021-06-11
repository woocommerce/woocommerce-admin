(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[8],{

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var page = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M7 5.5h10a.5.5 0 01.5.5v12a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM17 4H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2zm-1 3.75H8v1.5h8v-1.5zM8 11h8v1.5H8V11zm6 3.25H8v1.5h6v-1.5z"
}));
/* harmony default export */ __webpack_exports__["a"] = (page);
//# sourceMappingURL=page.js.map

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "InboxPanel", function() { return /* binding */ inbox_panel_InboxPanel; });

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./client/header/activity-panel/panels/inbox/inbox.scss
var inbox = __webpack_require__(647);

// EXTERNAL MODULE: ./client/inbox-panel/index.js
var inbox_panel = __webpack_require__(591);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wc","experimental"]
var external_wc_experimental_ = __webpack_require__(37);

// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(29);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(40);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(11);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/page.js
var page = __webpack_require__(643);

// EXTERNAL MODULE: external ["wp","primitives"]
var external_wp_primitives_ = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/comment.js


/**
 * WordPress dependencies
 */

var comment = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M18 4H6c-1.1 0-2 .9-2 2v12.9c0 .6.5 1.1 1.1 1.1.3 0 .5-.1.8-.3L8.5 17H18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5H7.9l-2.4 2.4V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v9z"
}));
/* harmony default export */ var library_comment = (comment);
//# sourceMappingURL=comment.js.map
// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/box.js
var box = __webpack_require__(664);

// EXTERNAL MODULE: ./client/homescreen/activity-panel/orders/utils.js
var utils = __webpack_require__(141);

// EXTERNAL MODULE: ./client/homescreen/activity-panel/reviews/utils.js
var reviews_utils = __webpack_require__(209);

// EXTERNAL MODULE: ./client/dashboard/utils.js
var dashboard_utils = __webpack_require__(110);

// CONCATENATED MODULE: ./client/header/activity-panel/panels/inbox/icons/bell.js

var bell_Bell = function Bell() {
  return Object(external_wp_element_["createElement"])("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(external_wp_element_["createElement"])("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), Object(external_wp_element_["createElement"])("path", {
    d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
  }));
};
// CONCATENATED MODULE: ./client/header/activity-panel/panels/inbox/abbreviated-notifications-panel.js


/**
 * External dependencies
 */







/**
 * Internal dependencies
 */





var EXTENDED_TASK_LIST_ID = 'extended_task_list';
var ORDER_PANEL_ID = 'orders-panel';
var REVIEWS_PANEL_ID = 'reviews-panel';
var STOCK_PANEL_ID = 'stock-panel';
var abbreviated_notifications_panel_AbbreviatedNotificationsPanel = function AbbreviatedNotificationsPanel(_ref) {
  var thingsToDoNextCount = _ref.thingsToDoNextCount;

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select(external_wc_data_["OPTIONS_STORE_NAME"]),
        getOption = _select.getOption;

    var orderStatuses = Object(utils["c" /* getOrderStatuses */])(select);
    return {
      ordersToProcessCount: Object(utils["d" /* getUnreadOrders */])(select, orderStatuses),
      reviewsToModerateCount: Object(reviews_utils["b" /* getUnapprovedReviews */])(select),
      stockNoticesCount: Object(utils["a" /* getLowStockCount */])(select),
      isSetupTaskListHidden: getOption('woocommerce_task_list_hidden') === 'yes',
      isExtendedTaskListHidden: getOption('woocommerce_extended_task_list_hidden') === 'yes'
    };
  }),
      ordersToProcessCount = _useSelect.ordersToProcessCount,
      reviewsToModerateCount = _useSelect.reviewsToModerateCount,
      stockNoticesCount = _useSelect.stockNoticesCount,
      isSetupTaskListHidden = _useSelect.isSetupTaskListHidden,
      isExtendedTaskListHidden = _useSelect.isExtendedTaskListHidden;

  var trackAbbreviatedCardClick = function trackAbbreviatedCardClick(name) {
    Object(external_wc_tracks_["recordEvent"])('activity_panel_click', {
      task: name
    });
  };

  var isWCAdminPage = Object(dashboard_utils["f" /* isWCAdmin */])(window.location.href);
  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-abbreviated-notifications"
  }, thingsToDoNextCount > 0 && !isExtendedTaskListHidden && Object(external_wp_element_["createElement"])(external_wc_components_["AbbreviatedCard"], {
    className: "woocommerce-abbreviated-notification",
    icon: Object(external_wp_element_["createElement"])(bell_Bell, null),
    href: "admin.php?page=wc-admin#".concat(EXTENDED_TASK_LIST_ID),
    onClick: function onClick() {
      return trackAbbreviatedCardClick('thingsToDoNext');
    },
    type: isWCAdminPage ? 'wc-admin' : 'wp-admin'
  }, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    as: "h3"
  }, Object(external_wp_i18n_["__"])('Things to do next', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], null, Object(external_wp_i18n_["sprintf"])(
  /* translators: Things the user has to do */
  Object(external_wp_i18n_["_n"])('You have %d new thing to do', 'You have %d new things to do', thingsToDoNextCount, 'woocommerce-admin'), thingsToDoNextCount))), ordersToProcessCount > 0 && isSetupTaskListHidden && Object(external_wp_element_["createElement"])(external_wc_components_["AbbreviatedCard"], {
    className: "woocommerce-abbreviated-notification",
    icon: page["a" /* default */],
    href: "admin.php?page=wc-admin&opened_panel=".concat(ORDER_PANEL_ID),
    onClick: function onClick() {
      return trackAbbreviatedCardClick('ordersToProcess');
    },
    type: isWCAdminPage ? 'wc-admin' : 'wp-admin'
  }, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    as: "h3"
  }, Object(external_wp_i18n_["__"])('Orders to fulfill', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], null, Object(external_wp_i18n_["sprintf"])(
  /* translators: Number of orders the user has to fulfill */
  Object(external_wp_i18n_["_n"])('You have %d order to fulfill', 'You have %d orders to fulfill', ordersToProcessCount, 'woocommerce-admin'), ordersToProcessCount))), reviewsToModerateCount > 0 && isSetupTaskListHidden && Object(external_wp_element_["createElement"])(external_wc_components_["AbbreviatedCard"], {
    className: "woocommerce-abbreviated-notification",
    icon: library_comment,
    href: "admin.php?page=wc-admin&opened_panel=".concat(REVIEWS_PANEL_ID),
    onClick: function onClick() {
      return trackAbbreviatedCardClick('reviewsToModerate');
    },
    type: isWCAdminPage ? 'wc-admin' : 'wp-admin'
  }, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    as: "h3"
  }, Object(external_wp_i18n_["__"])('Reviews to moderate', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], null, Object(external_wp_i18n_["sprintf"])(
  /* translators: Number of reviews the user has to moderate */
  Object(external_wp_i18n_["_n"])('You have %d review to moderate', 'You have %d reviews to moderate', reviewsToModerateCount, 'woocommerce-admin'), reviewsToModerateCount))), stockNoticesCount > 0 && isSetupTaskListHidden && Object(external_wp_element_["createElement"])(external_wc_components_["AbbreviatedCard"], {
    className: "woocommerce-abbreviated-notification",
    icon: box["a" /* default */],
    href: "admin.php?page=wc-admin&opened_panel=".concat(STOCK_PANEL_ID),
    onClick: function onClick() {
      return trackAbbreviatedCardClick('stockNotices');
    },
    type: isWCAdminPage ? 'wc-admin' : 'wp-admin'
  }, Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], {
    as: "h3"
  }, Object(external_wp_i18n_["__"])('Inventory to review', 'woocommerce-admin')), Object(external_wp_element_["createElement"])(external_wc_experimental_["Text"], null, Object(external_wp_i18n_["__"])('You have inventory to review and update', 'woocommerce-admin'))));
};
/* harmony default export */ var abbreviated_notifications_panel = (abbreviated_notifications_panel_AbbreviatedNotificationsPanel);
// CONCATENATED MODULE: ./client/header/activity-panel/panels/inbox/inbox-panel.js


/**
 * Internal dependencies
 */



var inbox_panel_InboxPanel = function InboxPanel(_ref) {
  var hasAbbreviatedNotifications = _ref.hasAbbreviatedNotifications,
      thingsToDoNextCount = _ref.thingsToDoNextCount;
  return Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-notification-panels"
  }, hasAbbreviatedNotifications && Object(external_wp_element_["createElement"])(abbreviated_notifications_panel_AbbreviatedNotificationsPanel, {
    thingsToDoNextCount: thingsToDoNextCount
  }), Object(external_wp_element_["createElement"])(inbox_panel["a" /* default */], null));
};
/* harmony default export */ var inbox_inbox_panel = __webpack_exports__["default"] = (inbox_panel_InboxPanel);

/***/ })

}]);