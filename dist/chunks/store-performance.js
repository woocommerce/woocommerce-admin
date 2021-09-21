(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[49],{

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getIndicatorValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIndicatorData; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
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

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_date__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(601);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_currency_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(498);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(522);


/**
 * External dependencies
 */










/**
 * Internal dependencies
 */




const {
  performanceIndicators: indicators
} = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_4__[/* getSetting */ "f"])('dataEndpoints', {
  performanceIndicators: []
});

class StorePerformance extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  renderMenu() {
    const {
      hiddenBlocks,
      isFirst,
      isLast,
      onMove,
      onRemove,
      onTitleBlur,
      onTitleChange,
      onToggleHiddenBlock,
      titleInput,
      controls: Controls
    } = this.props;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__["EllipsisMenu"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose which analytics to display and the section name', 'woocommerce-admin'),
      renderContent: ({
        onToggle
      }) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__["MenuTitle"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Display stats:', 'woocommerce-admin')), indicators.map((indicator, i) => {
        const checked = !hiddenBlocks.includes(indicator.stat);
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__["MenuItem"], {
          checked: checked,
          isCheckbox: true,
          isClickable: true,
          key: i,
          onInvoke: () => {
            onToggleHiddenBlock(indicator.stat)();
            Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__["recordEvent"])('dash_indicators_toggle', {
              status: checked ? 'off' : 'on',
              key: indicator.stat
            });
          }
        }, indicator.label);
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Controls, {
        onToggle: onToggle,
        onMove: onMove,
        onRemove: onRemove,
        isFirst: isFirst,
        isLast: isLast,
        onTitleBlur: onTitleBlur,
        onTitleChange: onTitleChange,
        titleInput: titleInput
      }))
    });
  }

  renderList() {
    const {
      query,
      primaryRequesting,
      secondaryRequesting,
      primaryError,
      secondaryError,
      primaryData,
      secondaryData,
      userIndicators,
      defaultDateRange
    } = this.props;

    if (primaryRequesting || secondaryRequesting) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__["SummaryListPlaceholder"], {
        numberOfItems: userIndicators.length
      });
    }

    if (primaryError || secondaryError) {
      return null;
    }

    const persistedQuery = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__["getPersistedQuery"])(query);
    const {
      compare
    } = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_8__["getDateParamsFromQuery"])(query, defaultDateRange);
    const prevLabel = compare === 'previous_period' ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Previous period:', 'woocommerce-admin') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Previous year:', 'woocommerce-admin');
    const {
      formatAmount,
      getCurrencyConfig
    } = this.context;
    const currency = getCurrencyConfig();
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__["SummaryList"], null, () => userIndicators.map((indicator, i) => {
      const {
        primaryValue,
        secondaryValue,
        delta,
        reportUrl,
        reportUrlType
      } = Object(_utils__WEBPACK_IMPORTED_MODULE_12__[/* getIndicatorValues */ "b"])({
        indicator,
        primaryData,
        secondaryData,
        currency,
        formatAmount,
        persistedQuery
      });
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__["SummaryNumber"], {
        key: i,
        href: reportUrl,
        hrefType: reportUrlType,
        label: indicator.label,
        value: primaryValue,
        prevLabel: prevLabel,
        prevValue: secondaryValue,
        delta: delta,
        onLinkClickCallback: () => {
          Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__["recordEvent"])('dash_indicators_click', {
            key: indicator.stat
          });
        }
      });
    }));
  }

  render() {
    const {
      userIndicators,
      title
    } = this.props;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__["SectionHeader"], {
      title: title || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Store Performance', 'woocommerce-admin'),
      menu: this.renderMenu()
    }), userIndicators.length > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "woocommerce-dashboard__store-performance"
    }, this.renderList()));
  }

}

StorePerformance.contextType = _lib_currency_context__WEBPACK_IMPORTED_MODULE_11__[/* CurrencyContext */ "a"];
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withSelect"])((select, props) => {
  const {
    hiddenBlocks,
    query,
    filters
  } = props;
  const userIndicators = indicators.filter(indicator => !hiddenBlocks.includes(indicator.stat));
  const {
    woocommerce_default_date_range: defaultDateRange
  } = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_6__["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings');
  const data = {
    hiddenBlocks,
    userIndicators,
    indicators,
    defaultDateRange
  };

  if (userIndicators.length === 0) {
    return data;
  }

  const indicatorData = Object(_utils__WEBPACK_IMPORTED_MODULE_12__[/* getIndicatorData */ "a"])(select, userIndicators, query, filters);
  return { ...data,
    ...indicatorData
  };
}))(StorePerformance));

/***/ })

}]);