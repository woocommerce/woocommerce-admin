(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[0],{

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFilteredCurrencyInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyContext; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91);
/* harmony import */ var _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_currency__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_admin_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const appCurrency = _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2___default()(_utils_admin_settings__WEBPACK_IMPORTED_MODULE_3__[/* CURRENCY */ "a"]);
const getFilteredCurrencyInstance = query => {
  const config = appCurrency.getCurrencyConfig();
  /**
   * Filter the currency context. This affects all WooCommerce Admin currency formatting.
   *
   * @filter woocommerce_admin_report_currency
   * @param {Object} config Currency configuration.
   * @param {Object} query Url query parameters.
   */

  const filteredConfig = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])('woocommerce_admin_report_currency', config, query);
  return _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2___default()(filteredConfig);
};
const CurrencyContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createContext"])(appCurrency // default value
);

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External dependencies
 */



/**
 * Component to render when there is an error in a report component due to data
 * not being loaded or being invalid.
 *
 * @param {Object} props React props.
 * @param {string} [props.className] Additional class name to style the component.
 */

function ReportError(_ref) {
  let {
    className
  } = _ref;

  const title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('There was an error getting your stats. Please try again.', 'woocommerce-admin');

  const actionLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Reload', 'woocommerce-admin');

  const actionCallback = () => {
    // @todo Add tracking for how often an error is displayed, and the reload action is clicked.
    window.location.reload();
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_3__["EmptyContent"], {
    className: className,
    title: title,
    actionLabel: actionLabel,
    actionCallback: actionCallback
  });
}

ReportError.propTypes = {
  /**
   * Additional class name to style the component.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["a"] = (ReportError);

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_date__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_currency_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(527);
/* harmony import */ var _customer_effort_score_tracks_data_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59);
/* harmony import */ var _utils_admin_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23);


/**
 * External dependencies
 */









/**
 * Internal dependencies
 */





class ReportFilters extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.onDateSelect = this.onDateSelect.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
    this.onAdvancedFilterAction = this.onAdvancedFilterAction.bind(this);
  }

  onDateSelect(data) {
    const {
      report,
      addCesSurveyForAnalytics
    } = this.props;
    addCesSurveyForAnalytics();
    Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8__["recordEvent"])('datepicker_update', {
      report,
      ...Object(lodash__WEBPACK_IMPORTED_MODULE_3__["omitBy"])(data, lodash__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])
    });
  }

  onFilterSelect(data) {
    const {
      report,
      addCesSurveyForAnalytics
    } = this.props; // This event gets triggered in the following cases.
    // 1. Select "Single product" and choose a product.
    // 2. Select "Comparison" or any other filter types.
    // The comparsion and other filter types require a user to click
    // a button to execute a query, so this is not a good place to
    // trigger a CES survey for those.

    const triggerCesFor = ['single_product', 'single_category', 'single_coupon', 'single_variation'];
    const filterName = data.filter || data['filter-variations'];

    if (triggerCesFor.includes(filterName)) {
      addCesSurveyForAnalytics();
    }

    const eventProperties = {
      report,
      filter: data.filter || 'all'
    };

    if (data.filter === 'single_product') {
      eventProperties.filter_variation = data['filter-variations'] || 'all';
    }

    Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8__["recordEvent"])('analytics_filter', eventProperties);
  }

  onAdvancedFilterAction(action, data) {
    const {
      report,
      addCesSurveyForAnalytics
    } = this.props;

    switch (action) {
      case 'add':
        Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8__["recordEvent"])('analytics_filters_add', {
          report,
          filter: data.key
        });
        break;

      case 'remove':
        Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8__["recordEvent"])('analytics_filters_remove', {
          report,
          filter: data.key
        });
        break;

      case 'filter':
        const snakeCaseData = Object.keys(data).reduce((result, property) => {
          result[Object(lodash__WEBPACK_IMPORTED_MODULE_3__["snakeCase"])(property)] = data[property];
          return result;
        }, {});
        addCesSurveyForAnalytics();
        Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8__["recordEvent"])('analytics_filters_filter', {
          report,
          ...snakeCaseData
        });
        break;

      case 'clear_all':
        Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8__["recordEvent"])('analytics_filters_clear_all', {
          report
        });
        break;

      case 'match':
        Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8__["recordEvent"])('analytics_filters_all_any', {
          report,
          value: data.match
        });
        break;
    }
  }

  render() {
    const {
      advancedFilters,
      filters,
      path,
      query,
      showDatePicker,
      defaultDateRange
    } = this.props;
    const {
      period,
      compare,
      before,
      after
    } = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_7__["getDateParamsFromQuery"])(query, defaultDateRange);
    const {
      primary: primaryDate,
      secondary: secondaryDate
    } = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_7__["getCurrentDates"])(query, defaultDateRange);
    const dateQuery = {
      period,
      compare,
      before,
      after,
      primaryDate,
      secondaryDate
    };
    const Currency = this.context;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__["ReportFilters"], {
      query: query,
      siteLocale: _utils_admin_settings__WEBPACK_IMPORTED_MODULE_11__[/* LOCALE */ "b"].siteLocale,
      currency: Currency.getCurrencyConfig(),
      path: path,
      filters: filters,
      advancedFilters: advancedFilters,
      showDatePicker: showDatePicker,
      onDateSelect: this.onDateSelect,
      onFilterSelect: this.onFilterSelect,
      onAdvancedFilterAction: this.onAdvancedFilterAction,
      dateQuery: dateQuery,
      isoDateFormat: _woocommerce_date__WEBPACK_IMPORTED_MODULE_7__["isoDateFormat"]
    });
  }

}

ReportFilters.contextType = _lib_currency_context__WEBPACK_IMPORTED_MODULE_9__[/* CurrencyContext */ "a"];
/* harmony default export */ __webpack_exports__["a"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])(select => {
  const {
    woocommerce_default_date_range: defaultDateRange
  } = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_6__["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings');
  return {
    defaultDateRange
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withDispatch"])(dispatch => {
  const {
    addCesSurveyForAnalytics
  } = dispatch(_customer_effort_score_tracks_data_constants__WEBPACK_IMPORTED_MODULE_10__[/* STORE_KEY */ "c"]);
  return {
    addCesSurveyForAnalytics
  };
}))(ReportFilters));
ReportFilters.propTypes = {
  /**
   * Config option passed through to `AdvancedFilters`
   */
  advancedFilters: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Config option passed through to `FilterPicker` - if not used, `FilterPicker` is not displayed.
   */
  filters: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,

  /**
   * The `path` parameter supplied by React-Router
   */
  path: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,

  /**
   * The query string represented in object form
   */
  query: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Whether the date picker must be shown..
   */
  showDatePicker: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * The report where filter are placed.
   */
  report: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(40);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(4);

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(28);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(14);

// EXTERNAL MODULE: external ["wp","dom"]
var external_wp_dom_ = __webpack_require__(93);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(8);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(5);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(22);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(13);

// EXTERNAL MODULE: external ["wc","csvExport"]
var external_wc_csvExport_ = __webpack_require__(497);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(12);

// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(17);

// CONCATENATED MODULE: ./client/analytics/components/report-table/download-icon.js

/* harmony default export */ var download_icon = (() => Object(external_wp_element_["createElement"])("svg", {
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])("path", {
  d: "M18,9c-0.009,0-0.017,0.002-0.025,0.003C17.72,5.646,14.922,3,11.5,3C7.91,3,5,5.91,5,9.5c0,0.524,0.069,1.031,0.186,1.519 C5.123,11.016,5.064,11,5,11c-2.209,0-4,1.791-4,4c0,1.202,0.541,2.267,1.38,3h18.593C22.196,17.089,23,15.643,23,14 C23,11.239,20.761,9,18,9z M12,16l-4-5h3V8h2v3h3L12,16z"
})));
// EXTERNAL MODULE: ./client/analytics/components/report-error/index.js
var report_error = __webpack_require__(530);

// CONCATENATED MODULE: ./client/analytics/components/report-table/utils.js
/**
 * External dependencies
 */

function extendTableData(extendedStoreSelector, props, queriedTableData) {
  const {
    extendItemsMethodNames,
    itemIdField
  } = props;
  const itemsData = queriedTableData.items.data;

  if (!Array.isArray(itemsData) || !itemsData.length || !extendItemsMethodNames || !itemIdField) {
    return queriedTableData;
  }

  const {
    [extendItemsMethodNames.getError]: getErrorMethod,
    [extendItemsMethodNames.isRequesting]: isRequestingMethod,
    [extendItemsMethodNames.load]: loadMethod
  } = extendedStoreSelector;
  const extendQuery = {
    include: itemsData.map(item => item[itemIdField]).join(','),
    per_page: itemsData.length
  };
  const extendedItems = loadMethod(extendQuery);
  const isExtendedItemsRequesting = isRequestingMethod ? isRequestingMethod(extendQuery) : false;
  const isExtendedItemsError = getErrorMethod ? getErrorMethod(extendQuery) : false;
  const extendedItemsData = itemsData.map(item => {
    const extendedItemData = Object(external_lodash_["first"])(extendedItems.filter(extendedItem => item.id === extendedItem.id));
    return { ...item,
      ...extendedItemData
    };
  });
  const isRequesting = queriedTableData.isRequesting || isExtendedItemsRequesting;
  const isError = queriedTableData.isError || isExtendedItemsError;
  return { ...queriedTableData,
    isRequesting,
    isError,
    items: { ...queriedTableData.items,
      data: extendedItemsData
    }
  };
}
// EXTERNAL MODULE: ./client/customer-effort-score-tracks/data/constants.js
var constants = __webpack_require__(59);

// EXTERNAL MODULE: ./client/analytics/components/report-table/style.scss
var style = __webpack_require__(542);

// CONCATENATED MODULE: ./client/analytics/components/report-table/index.js



/**
 * External dependencies
 */














/**
 * Internal dependencies
 */






const TABLE_FILTER = 'woocommerce_admin_report_table';

const ReportTable = props => {
  const {
    getHeadersContent,
    getRowsContent,
    getSummary,
    isRequesting,
    primaryData,
    tableData,
    endpoint,
    // These props are not used in the render function, but are destructured
    // so they are not included in the `tableProps` variable.
    // eslint-disable-next-line no-unused-vars
    itemIdField,
    // eslint-disable-next-line no-unused-vars
    tableQuery,
    compareBy,
    compareParam,
    searchBy,
    labels = {},
    ...tableProps
  } = props; // Pull these props out separately because they need to be included in tableProps.

  const {
    query,
    columnPrefsKey
  } = props;
  const {
    items,
    query: reportQuery
  } = tableData;
  const initialSelectedRows = query[compareParam] ? Object(external_wc_navigation_["getIdsFromQuery"])(query[compareBy]) : [];
  const [selectedRows, setSelectedRows] = Object(external_wp_element_["useState"])(initialSelectedRows);
  const scrollPointRef = Object(external_wp_element_["useRef"])(null);
  const {
    updateUserPreferences,
    ...userData
  } = Object(external_wc_data_["useUserPreferences"])(); // Bail early if we've encountered an error.

  const isError = tableData.isError || primaryData.isError;

  if (isError) {
    return Object(external_wp_element_["createElement"])(report_error["a" /* default */], null);
  }

  let userPrefColumns = [];

  if (columnPrefsKey) {
    userPrefColumns = userData && userData[columnPrefsKey] ? userData[columnPrefsKey] : userPrefColumns;
  }

  const onPageChange = (newPage, source) => {
    scrollPointRef.current.scrollIntoView();
    const tableElement = scrollPointRef.current.nextSibling.querySelector('.woocommerce-table__table');
    const focusableElements = external_wp_dom_["focus"].focusable.find(tableElement);

    if (focusableElements.length) {
      focusableElements[0].focus();
    }

    if (source) {
      if (source === 'goto') {
        Object(external_wc_tracks_["recordEvent"])('analytics_table_go_to_page', {
          report: endpoint,
          page: newPage
        });
      } else {
        Object(external_wc_tracks_["recordEvent"])('analytics_table_page_click', {
          report: endpoint,
          direction: source
        });
      }
    }
  };

  const trackTableSearch = () => {
    // @todo: decide if this should only fire for new tokens (not any/all changes).
    Object(external_wc_tracks_["recordEvent"])('analytics_table_filter', {
      report: endpoint
    });
  };

  const onSort = (key, direction) => {
    Object(external_wc_navigation_["onQueryChange"])('sort')(key, direction);
    const eventProps = {
      report: endpoint,
      column: key,
      direction
    };
    Object(external_wc_tracks_["recordEvent"])('analytics_table_sort', eventProps);
  };

  const filterShownHeaders = (headers, hiddenKeys) => {
    // If no user preferences, set visibilty based on column default.
    if (!hiddenKeys) {
      return headers.map(header => ({ ...header,
        visible: header.required || !header.hiddenByDefault
      }));
    } // Set visibilty based on user preferences.


    return headers.map(header => ({ ...header,
      visible: header.required || !hiddenKeys.includes(header.key)
    }));
  };

  const applyTableFilters = (data, totals, totalResults) => {
    const summary = getSummary ? getSummary(totals, totalResults) : null;
    /**
     * Filter report table for the CSV download.
     *
     * Enables manipulation of data used to create the report CSV.
     *
     * @filter woocommerce_admin_report_table
     * @param {Object} reportTableData - data used to create the table.
     * @param {string} reportTableData.endpoint - table api endpoint.
     * @param {Array} reportTableData.headers - table headers data.
     * @param {Array} reportTableData.rows - table rows data.
     * @param {Object} reportTableData.totals - total aggregates for request.
     * @param {Array} reportTableData.summary - summary numbers data.
     * @param {Object} reportTableData.items - response from api requerst.
     */

    return Object(external_wp_hooks_["applyFilters"])(TABLE_FILTER, {
      endpoint,
      headers: getHeadersContent(),
      rows: getRowsContent(data),
      totals,
      summary,
      items
    });
  };

  const onClickDownload = () => {
    const {
      createNotice,
      startExport,
      title
    } = props;
    const params = Object.assign({}, query);
    const {
      data,
      totalResults
    } = items;
    let downloadType = 'browser'; // Delete unnecessary items from filename.

    delete params.extended_info;

    if (params.search) {
      delete params[searchBy];
    }

    if (data && data.length === totalResults) {
      const {
        headers,
        rows
      } = applyTableFilters(data, totalResults);
      Object(external_wc_csvExport_["downloadCSVFile"])(Object(external_wc_csvExport_["generateCSVFileName"])(title, params), Object(external_wc_csvExport_["generateCSVDataFromTable"])(headers, rows));
    } else {
      downloadType = 'email';
      startExport(endpoint, reportQuery).then(() => createNotice('success', Object(external_wp_i18n_["sprintf"])(
      /* translators: %s = type of report */
      Object(external_wp_i18n_["__"])('Your %s Report will be emailed to you.', 'woocommerce-admin'), title))).catch(error => createNotice('error', error.message || Object(external_wp_i18n_["sprintf"])(
      /* translators: %s = type of report */
      Object(external_wp_i18n_["__"])('There was a problem exporting your %s Report. Please try again.', 'woocommerce-admin'), title)));
    }

    Object(external_wc_tracks_["recordEvent"])('analytics_table_download', {
      report: endpoint,
      rows: totalResults,
      download_type: downloadType
    });
  };

  const onCompare = () => {
    if (compareBy) {
      Object(external_wc_navigation_["onQueryChange"])('compare')(compareBy, compareParam, selectedRows.join(','));
    }
  };

  const onSearchChange = values => {
    const {
      baseSearchQuery,
      addCesSurveyForCustomerSearch
    } = props; // A comma is used as a separator between search terms, so we want to escape
    // any comma they contain.

    const searchTerms = values.map(v => v.label.replace(',', '%2C'));

    if (searchTerms.length) {
      Object(external_wc_navigation_["updateQueryString"])({
        filter: undefined,
        [compareParam]: undefined,
        [searchBy]: undefined,
        ...baseSearchQuery,
        search: Object(external_lodash_["uniq"])(searchTerms).join(',')
      }); // Prompt survey if user is searching for something.

      addCesSurveyForCustomerSearch();
    } else {
      Object(external_wc_navigation_["updateQueryString"])({
        search: undefined
      });
    }

    trackTableSearch();
  };

  const selectAllRows = checked => {
    const {
      ids
    } = props;
    setSelectedRows(checked ? ids : []);
  };

  const selectRow = (i, checked) => {
    const {
      ids
    } = props;

    if (checked) {
      setSelectedRows(Object(external_lodash_["uniq"])([ids[i], ...selectedRows]));
    } else {
      const index = selectedRows.indexOf(ids[i]);
      setSelectedRows([...selectedRows.slice(0, index), ...selectedRows.slice(index + 1)]);
    }
  };

  const getCheckbox = i => {
    const {
      ids = []
    } = props;
    const isChecked = selectedRows.indexOf(ids[i]) !== -1;
    return {
      display: Object(external_wp_element_["createElement"])(external_wp_components_["CheckboxControl"], {
        onChange: Object(external_lodash_["partial"])(selectRow, i),
        checked: isChecked
      }),
      value: false
    };
  };

  const getAllCheckbox = () => {
    const {
      ids = []
    } = props;
    const hasData = ids.length > 0;
    const isAllChecked = hasData && ids.length === selectedRows.length;
    return {
      cellClassName: 'is-checkbox-column',
      key: 'compare',
      label: Object(external_wp_element_["createElement"])(external_wp_components_["CheckboxControl"], {
        onChange: selectAllRows,
        "aria-label": Object(external_wp_i18n_["__"])('Select All'),
        checked: isAllChecked,
        disabled: !hasData
      }),
      required: true
    };
  };

  const isLoading = isRequesting || tableData.isRequesting || primaryData.isRequesting;
  const totals = Object(external_lodash_["get"])(primaryData, ['data', 'totals'], {});
  const totalResults = items.totalResults || 0;
  const downloadable = totalResults > 0; // Search words are in the query string, not the table query.

  const searchWords = Object(external_wc_navigation_["getSearchWords"])(query);
  const searchedLabels = searchWords.map(v => ({
    key: v,
    label: v
  }));
  const {
    data
  } = items;
  const applyTableFiltersResult = applyTableFilters(data, totals, totalResults);
  let {
    headers,
    rows
  } = applyTableFiltersResult;
  const {
    summary
  } = applyTableFiltersResult;

  const onColumnsChange = (shownColumns, toggledColumn) => {
    const columns = headers.map(header => header.key);
    const hiddenColumns = columns.filter(column => !shownColumns.includes(column));

    if (columnPrefsKey) {
      const userDataFields = {
        [columnPrefsKey]: hiddenColumns
      };
      updateUserPreferences(userDataFields);
    }

    if (toggledColumn) {
      const eventProps = {
        report: endpoint,
        column: toggledColumn,
        status: shownColumns.includes(toggledColumn) ? 'on' : 'off'
      };
      Object(external_wc_tracks_["recordEvent"])('analytics_table_header_toggle', eventProps);
    }
  }; // Add in selection for comparisons.


  if (compareBy) {
    rows = rows.map((row, i) => {
      return [getCheckbox(i), ...row];
    });
    headers = [getAllCheckbox(), ...headers];
  } // Hide any headers based on user prefs, if loaded.


  const filteredHeaders = filterShownHeaders(headers, userPrefColumns);
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
    className: "woocommerce-report-table__scroll-point",
    ref: scrollPointRef,
    "aria-hidden": true
  }), Object(external_wp_element_["createElement"])(external_wc_components_["TableCard"], extends_default()({
    className: 'woocommerce-report-table',
    hasSearch: !!searchBy,
    actions: [compareBy && Object(external_wp_element_["createElement"])(external_wc_components_["CompareButton"], {
      key: "compare",
      className: "woocommerce-table__compare",
      count: selectedRows.length,
      helpText: labels.helpText || Object(external_wp_i18n_["__"])('Check at least two items below to compare', 'woocommerce-admin'),
      onClick: onCompare,
      disabled: !downloadable
    }, labels.compareButton || Object(external_wp_i18n_["__"])('Compare', 'woocommerce-admin')), searchBy && Object(external_wp_element_["createElement"])(external_wc_components_["Search"], {
      allowFreeTextSearch: true,
      inlineTags: true,
      key: "search",
      onChange: onSearchChange,
      placeholder: labels.placeholder || Object(external_wp_i18n_["__"])('Search by item name', 'woocommerce-admin'),
      selected: searchedLabels,
      showClearButton: true,
      type: searchBy,
      disabled: !downloadable
    }), downloadable && Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      key: "download",
      className: "woocommerce-table__download-button",
      disabled: isLoading,
      onClick: onClickDownload
    }, Object(external_wp_element_["createElement"])(download_icon, null), Object(external_wp_element_["createElement"])("span", {
      className: "woocommerce-table__download-button__label"
    }, labels.downloadButton || Object(external_wp_i18n_["__"])('Download', 'woocommerce-admin')))],
    headers: filteredHeaders,
    isLoading: isLoading,
    onQueryChange: external_wc_navigation_["onQueryChange"],
    onColumnsChange: onColumnsChange,
    onSort: onSort,
    onPageChange: onPageChange,
    rows: rows,
    rowsPerPage: parseInt(reportQuery.per_page, 10) || external_wc_data_["QUERY_DEFAULTS"].pageSize,
    summary: summary,
    totalRows: totalResults
  }, tableProps)));
};

ReportTable.propTypes = {
  /**
   * Pass in query parameters to be included in the path when onSearch creates a new url.
   */
  baseSearchQuery: prop_types_default.a.object,

  /**
   * The string to use as a query parameter when comparing row items.
   */
  compareBy: prop_types_default.a.string,

  /**
   * Url query parameter compare function operates on
   */
  compareParam: prop_types_default.a.string,

  /**
   * The key for user preferences settings for column visibility.
   */
  columnPrefsKey: prop_types_default.a.string,

  /**
   * The endpoint to use in API calls to populate the table rows and summary.
   * For example, if `taxes` is provided, data will be fetched from the report
   * `taxes` endpoint (ie: `/wc-analytics/reports/taxes` and `/wc/v4/reports/taxes/stats`).
   * If the provided endpoint doesn't exist, an error will be shown to the user
   * with `ReportError`.
   */
  endpoint: prop_types_default.a.string,

  /**
   * Name of the methods available via `select` that will be used to
   * load more data for table items. If omitted, no call will be made and only
   * the data returned by the reports endpoint will be used.
   */
  extendItemsMethodNames: prop_types_default.a.shape({
    getError: prop_types_default.a.string,
    isRequesting: prop_types_default.a.string,
    load: prop_types_default.a.string
  }),

  /**
   * Name of store on which extendItemsMethodNames can be found.
   */
  extendedItemsStoreName: prop_types_default.a.string,

  /**
   * A function that returns the headers object to build the table.
   */
  getHeadersContent: prop_types_default.a.func.isRequired,

  /**
   * A function that returns the rows array to build the table.
   */
  getRowsContent: prop_types_default.a.func.isRequired,

  /**
   * A function that returns the summary object to build the table.
   */
  getSummary: prop_types_default.a.func,

  /**
   * The name of the property in the item object which contains the id.
   */
  itemIdField: prop_types_default.a.string,

  /**
   * Custom labels for table header actions.
   */
  labels: prop_types_default.a.shape({
    compareButton: prop_types_default.a.string,
    downloadButton: prop_types_default.a.string,
    helpText: prop_types_default.a.string,
    placeholder: prop_types_default.a.string
  }),

  /**
   * Primary data of that report. If it's not provided, it will be automatically
   * loaded via the provided `endpoint`.
   */
  primaryData: prop_types_default.a.object,

  /**
   * The string to use as a query parameter when searching row items.
   */
  searchBy: prop_types_default.a.string,

  /**
   * List of fields used for summary numbers. (Reduces queries)
   */
  summaryFields: prop_types_default.a.arrayOf(prop_types_default.a.string),

  /**
   * Table data of that report. If it's not provided, it will be automatically
   * loaded via the provided `endpoint`.
   */
  tableData: prop_types_default.a.object.isRequired,

  /**
   * Properties to be added to the query sent to the report table endpoint.
   */
  tableQuery: prop_types_default.a.object,

  /**
   * String to display as the title of the table.
   */
  title: prop_types_default.a.string.isRequired
};
ReportTable.defaultProps = {
  primaryData: {},
  tableData: {
    items: {
      data: [],
      totalResults: 0
    },
    query: {}
  },
  tableQuery: {},
  compareParam: 'filter',
  downloadable: false,
  onSearch: external_lodash_["noop"],
  baseSearchQuery: {}
};
const EMPTY_ARRAY = [];
const EMPTY_OBJECT = {};
/* harmony default export */ var report_table = __webpack_exports__["a"] = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])((select, props) => {
  const {
    endpoint,
    getSummary,
    isRequesting,
    itemIdField,
    query,
    tableData,
    tableQuery,
    filters,
    advancedFilters,
    summaryFields,
    extendedItemsStoreName
  } = props;
  /* eslint @wordpress/no-unused-vars-before-return: "off" */

  const reportStoreSelector = select(external_wc_data_["REPORTS_STORE_NAME"]);
  const extendedStoreSelector = extendedItemsStoreName ? select(extendedItemsStoreName) : null;
  const {
    woocommerce_default_date_range: defaultDateRange
  } = select(external_wc_data_["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings');
  const noSearchResultsFound = query.search && !(query[endpoint] && query[endpoint].length);

  if (isRequesting || noSearchResultsFound) {
    return EMPTY_OBJECT;
  } // Category charts are powered by the /reports/products/stats endpoint.


  const chartEndpoint = endpoint === 'categories' ? 'products' : endpoint;
  const primaryData = getSummary ? Object(external_wc_data_["getReportChartData"])({
    endpoint: chartEndpoint,
    selector: reportStoreSelector,
    dataType: 'primary',
    query,
    filters,
    advancedFilters,
    defaultDateRange,
    fields: summaryFields
  }) : EMPTY_OBJECT;
  const queriedTableData = tableData || Object(external_wc_data_["getReportTableData"])({
    endpoint,
    query,
    selector: reportStoreSelector,
    tableQuery,
    filters,
    advancedFilters,
    defaultDateRange
  });
  const extendedTableData = extendedStoreSelector ? extendTableData(extendedStoreSelector, props, queriedTableData) : queriedTableData;
  return {
    primaryData,
    ids: itemIdField && extendedTableData.items.data ? extendedTableData.items.data.map(item => item[itemIdField]) : EMPTY_ARRAY,
    tableData: extendedTableData,
    query
  };
}), Object(external_wp_data_["withDispatch"])(dispatch => {
  const {
    startExport
  } = dispatch(external_wc_data_["EXPORT_STORE_NAME"]);
  const {
    createNotice
  } = dispatch('core/notices');
  const {
    addCesSurveyForCustomerSearch
  } = dispatch(constants["c" /* STORE_KEY */]);
  return {
    createNotice,
    startExport,
    addCesSurveyForCustomerSearch
  };
}))(ReportTable));

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: ReportChart

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(14);

// EXTERNAL MODULE: external ["wp","date"]
var external_wp_date_ = __webpack_require__(65);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(8);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(22);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(12);

// EXTERNAL MODULE: external ["wc","date"]
var external_wc_date_ = __webpack_require__(21);

// EXTERNAL MODULE: ./client/lib/currency-context.js
var currency_context = __webpack_require__(527);

// EXTERNAL MODULE: ./client/analytics/components/report-error/index.js
var report_error = __webpack_require__(530);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(13);

// CONCATENATED MODULE: ./client/analytics/components/report-chart/utils.js
/**
 * External dependencies
 */



const DEFAULT_FILTER = 'all';
function getSelectedFilter(filters, query) {
  let selectedFilterArgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!filters || filters.length === 0) {
    return null;
  }

  const clonedFilters = filters.slice(0);
  const filterConfig = clonedFilters.pop();

  if (filterConfig.showFilters(query, selectedFilterArgs)) {
    const allFilters = Object(external_wc_navigation_["flattenFilters"])(filterConfig.filters);
    const value = query[filterConfig.param] || filterConfig.defaultValue || DEFAULT_FILTER;
    return Object(external_lodash_["find"])(allFilters, {
      value
    });
  }

  return getSelectedFilter(clonedFilters, query, selectedFilterArgs);
}
function getChartMode(selectedFilter, query) {
  if (selectedFilter && query) {
    const selectedFilterParam = Object(external_lodash_["get"])(selectedFilter, ['settings', 'param']);

    if (!selectedFilterParam || Object.keys(query).includes(selectedFilterParam)) {
      return Object(external_lodash_["get"])(selectedFilter, ['chartMode']);
    }
  }

  return null;
}
function createDateFormatter(format) {
  return date => Object(external_wp_date_["format"])(format, date);
}
// CONCATENATED MODULE: ./client/analytics/components/report-chart/index.js


/**
 * External dependencies
 */










/**
 * Internal dependencies
 */




/**
 * Component that renders the chart in reports.
 */

class report_chart_ReportChart extends external_wp_element_["Component"] {
  shouldComponentUpdate(nextProps) {
    if (nextProps.isRequesting !== this.props.isRequesting || nextProps.primaryData.isRequesting !== this.props.primaryData.isRequesting || nextProps.secondaryData.isRequesting !== this.props.secondaryData.isRequesting || !Object(external_lodash_["isEqual"])(nextProps.query, this.props.query)) {
      return true;
    }

    return false;
  }

  getItemChartData() {
    const {
      primaryData,
      selectedChart
    } = this.props;
    const chartData = primaryData.data.intervals.map(function (interval) {
      const intervalData = {};
      interval.subtotals.segments.forEach(function (segment) {
        if (segment.segment_label) {
          const label = intervalData[segment.segment_label] ? segment.segment_label + ' (#' + segment.segment_id + ')' : segment.segment_label;
          intervalData[segment.segment_id] = {
            label,
            value: segment.subtotals[selectedChart.key] || 0
          };
        }
      });
      return {
        date: Object(external_wp_date_["format"])('Y-m-d\\TH:i:s', interval.date_start),
        ...intervalData
      };
    });
    return chartData;
  }

  getTimeChartData() {
    const {
      query,
      primaryData,
      secondaryData,
      selectedChart,
      defaultDateRange
    } = this.props;
    const currentInterval = Object(external_wc_date_["getIntervalForQuery"])(query, defaultDateRange);
    const {
      primary,
      secondary
    } = Object(external_wc_date_["getCurrentDates"])(query, defaultDateRange);
    const chartData = primaryData.data.intervals.map(function (interval, index) {
      const secondaryDate = Object(external_wc_date_["getPreviousDate"])(interval.date_start, primary.after, secondary.after, query.compare, currentInterval);
      const secondaryInterval = secondaryData.data.intervals[index];
      return {
        date: Object(external_wp_date_["format"])('Y-m-d\\TH:i:s', interval.date_start),
        primary: {
          label: `${primary.label} (${primary.range})`,
          labelDate: interval.date_start,
          value: interval.subtotals[selectedChart.key] || 0
        },
        secondary: {
          label: `${secondary.label} (${secondary.range})`,
          labelDate: secondaryDate.format('YYYY-MM-DD HH:mm:ss'),
          value: secondaryInterval && secondaryInterval.subtotals[selectedChart.key] || 0
        }
      };
    });
    return chartData;
  }

  getTimeChartTotals() {
    const {
      primaryData,
      secondaryData,
      selectedChart
    } = this.props;
    return {
      primary: Object(external_lodash_["get"])(primaryData, ['data', 'totals', selectedChart.key], null),
      secondary: Object(external_lodash_["get"])(secondaryData, ['data', 'totals', selectedChart.key], null)
    };
  }

  renderChart(mode, isRequesting, chartData, legendTotals) {
    const {
      emptySearchResults,
      filterParam,
      interactiveLegend,
      itemsLabel,
      legendPosition,
      path,
      query,
      selectedChart,
      showHeaderControls,
      primaryData,
      defaultDateRange
    } = this.props;
    const currentInterval = Object(external_wc_date_["getIntervalForQuery"])(query, defaultDateRange);
    const allowedIntervals = Object(external_wc_date_["getAllowedIntervalsForQuery"])(query, defaultDateRange);
    const formats = Object(external_wc_date_["getDateFormatsForInterval"])(currentInterval, primaryData.data.intervals.length, {
      type: 'php'
    });
    const emptyMessage = emptySearchResults ? Object(external_wp_i18n_["__"])('No data for the current search', 'woocommerce-admin') : Object(external_wp_i18n_["__"])('No data for the selected date range', 'woocommerce-admin');
    const {
      formatAmount,
      getCurrencyConfig
    } = this.context;
    return Object(external_wp_element_["createElement"])(external_wc_components_["Chart"], {
      allowedIntervals: allowedIntervals,
      data: chartData,
      dateParser: '%Y-%m-%dT%H:%M:%S',
      emptyMessage: emptyMessage,
      filterParam: filterParam,
      interactiveLegend: interactiveLegend,
      interval: currentInterval,
      isRequesting: isRequesting,
      itemsLabel: itemsLabel,
      legendPosition: legendPosition,
      legendTotals: legendTotals,
      mode: mode,
      path: path,
      query: query,
      screenReaderFormat: createDateFormatter(formats.screenReaderFormat),
      showHeaderControls: showHeaderControls,
      title: selectedChart.label,
      tooltipLabelFormat: createDateFormatter(formats.tooltipLabelFormat),
      tooltipTitle: mode === 'time-comparison' && selectedChart.label || null,
      tooltipValueFormat: Object(external_wc_data_["getTooltipValueFormat"])(selectedChart.type, formatAmount),
      chartType: Object(external_wc_date_["getChartTypeForQuery"])(query),
      valueType: selectedChart.type,
      xFormat: createDateFormatter(formats.xFormat),
      x2Format: createDateFormatter(formats.x2Format),
      currency: getCurrencyConfig()
    });
  }

  renderItemComparison() {
    const {
      isRequesting,
      primaryData
    } = this.props;

    if (primaryData.isError) {
      return Object(external_wp_element_["createElement"])(report_error["a" /* default */], null);
    }

    const isChartRequesting = isRequesting || primaryData.isRequesting;
    const chartData = this.getItemChartData();
    return this.renderChart('item-comparison', isChartRequesting, chartData);
  }

  renderTimeComparison() {
    const {
      isRequesting,
      primaryData,
      secondaryData
    } = this.props;

    if (!primaryData || primaryData.isError || secondaryData.isError) {
      return Object(external_wp_element_["createElement"])(report_error["a" /* default */], null);
    }

    const isChartRequesting = isRequesting || primaryData.isRequesting || secondaryData.isRequesting;
    const chartData = this.getTimeChartData();
    const legendTotals = this.getTimeChartTotals();
    return this.renderChart('time-comparison', isChartRequesting, chartData, legendTotals);
  }

  render() {
    const {
      mode
    } = this.props;

    if (mode === 'item-comparison') {
      return this.renderItemComparison();
    }

    return this.renderTimeComparison();
  }

}
report_chart_ReportChart.contextType = currency_context["a" /* CurrencyContext */];
report_chart_ReportChart.propTypes = {
  /**
   * Filters available for that report.
   */
  filters: prop_types_default.a.array,

  /**
   * Whether there is an API call running.
   */
  isRequesting: prop_types_default.a.bool,

  /**
   * Label describing the legend items.
   */
  itemsLabel: prop_types_default.a.string,

  /**
   * Allows specifying properties different from the `endpoint` that will be used
   * to limit the items when there is an active search.
   */
  limitProperties: prop_types_default.a.array,

  /**
   * `items-comparison` (default) or `time-comparison`, this is used to generate correct
   * ARIA properties.
   */
  mode: prop_types_default.a.string,

  /**
   * Current path
   */
  path: prop_types_default.a.string.isRequired,

  /**
   * Primary data to display in the chart.
   */
  primaryData: prop_types_default.a.object,

  /**
   * The query string represented in object form.
   */
  query: prop_types_default.a.object.isRequired,

  /**
   * Secondary data to display in the chart.
   */
  secondaryData: prop_types_default.a.object,

  /**
   * Properties of the selected chart.
   */
  selectedChart: prop_types_default.a.shape({
    /**
     * Key of the selected chart.
     */
    key: prop_types_default.a.string.isRequired,

    /**
     * Chart label.
     */
    label: prop_types_default.a.string.isRequired,

    /**
     * Order query argument.
     */
    order: prop_types_default.a.oneOf(['asc', 'desc']),

    /**
     * Order by query argument.
     */
    orderby: prop_types_default.a.string,

    /**
     * Number type for formatting.
     */
    type: prop_types_default.a.oneOf(['average', 'number', 'currency']).isRequired
  }).isRequired
};
report_chart_ReportChart.defaultProps = {
  isRequesting: false,
  primaryData: {
    data: {
      intervals: []
    },
    isError: false,
    isRequesting: false
  },
  secondaryData: {
    data: {
      intervals: []
    },
    isError: false,
    isRequesting: false
  }
};
/* harmony default export */ var report_chart = __webpack_exports__["a"] = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])((select, props) => {
  const {
    charts,
    endpoint,
    filters,
    isRequesting,
    limitProperties,
    query,
    advancedFilters
  } = props;
  const limitBy = limitProperties || [endpoint];
  const selectedFilter = getSelectedFilter(filters, query);
  const filterParam = Object(external_lodash_["get"])(selectedFilter, ['settings', 'param']);
  const chartMode = props.mode || getChartMode(selectedFilter, query) || 'time-comparison';
  const {
    woocommerce_default_date_range: defaultDateRange
  } = select(external_wc_data_["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings');
  /* eslint @wordpress/no-unused-vars-before-return: "off" */

  const reportStoreSelector = select(external_wc_data_["REPORTS_STORE_NAME"]);
  const newProps = {
    mode: chartMode,
    filterParam,
    defaultDateRange
  };

  if (isRequesting) {
    return newProps;
  }

  const hasLimitByParam = limitBy.some(item => query[item] && query[item].length);

  if (query.search && !hasLimitByParam) {
    return { ...newProps,
      emptySearchResults: true
    };
  }

  const fields = charts && charts.map(chart => chart.key);
  const primaryData = Object(external_wc_data_["getReportChartData"])({
    endpoint,
    dataType: 'primary',
    query,
    selector: reportStoreSelector,
    limitBy,
    filters,
    advancedFilters,
    defaultDateRange,
    fields
  });

  if (chartMode === 'item-comparison') {
    return { ...newProps,
      primaryData
    };
  }

  const secondaryData = Object(external_wc_data_["getReportChartData"])({
    endpoint,
    dataType: 'secondary',
    query,
    selector: reportStoreSelector,
    limitBy,
    filters,
    advancedFilters,
    defaultDateRange,
    fields
  });
  return { ...newProps,
    primaryData,
    secondaryData
  };
}))(report_chart_ReportChart));

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSelectedChart; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Takes a chart name returns the configuration for that chart from and array
 * of charts. If the chart is not found it will return the first chart.
 *
 * @param {string} chartName - the name of the chart to get configuration for
 * @param {Array} charts - list of charts for a particular report
 * @return {Object} - chart configuration object
 */

function getSelectedChart(chartName) {
  let charts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const chart = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["find"])(charts, {
    key: chartName
  });

  if (chart) {
    return chart;
  }

  return charts[0];
}

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ReportSummary */
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(122);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_number__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_date__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _report_error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(530);
/* harmony import */ var _lib_currency_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(527);


/**
 * External dependencies
 */











/**
 * Internal dependencies
 */



/**
 * Component to render summary numbers in reports.
 */

class ReportSummary extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  formatVal(val, type) {
    const {
      formatAmount,
      getCurrencyConfig
    } = this.context;
    return type === 'currency' ? formatAmount(val) : Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_7__["formatValue"])(getCurrencyConfig(), type, val);
  }

  getValues(key, type) {
    const {
      emptySearchResults,
      summaryData
    } = this.props;
    const {
      totals
    } = summaryData;
    const primaryTotal = totals.primary ? totals.primary[key] : 0;
    const secondaryTotal = totals.secondary ? totals.secondary[key] : 0;
    const primaryValue = emptySearchResults ? 0 : primaryTotal;
    const secondaryValue = emptySearchResults ? 0 : secondaryTotal;
    return {
      delta: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_7__["calculateDelta"])(primaryValue, secondaryValue),
      prevValue: this.formatVal(secondaryValue, type),
      value: this.formatVal(primaryValue, type)
    };
  }

  render() {
    const {
      charts,
      query,
      selectedChart,
      summaryData,
      endpoint,
      report,
      defaultDateRange
    } = this.props;
    const {
      isError,
      isRequesting
    } = summaryData;

    if (isError) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_report_error__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], null);
    }

    if (isRequesting) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_6__["SummaryListPlaceholder"], {
        numberOfItems: charts.length
      });
    }

    const {
      compare
    } = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_9__["getDateParamsFromQuery"])(query, defaultDateRange);

    const renderSummaryNumbers = _ref => {
      let {
        onToggle
      } = _ref;
      return charts.map(chart => {
        const {
          key,
          order,
          orderby,
          label,
          type,
          isReverseTrend,
          labelTooltipText
        } = chart;
        const newPath = {
          chart: key
        };

        if (orderby) {
          newPath.orderby = orderby;
        }

        if (order) {
          newPath.order = order;
        }

        const href = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__["getNewPath"])(newPath);
        const isSelected = selectedChart.key === key;
        const {
          delta,
          prevValue,
          value
        } = this.getValues(key, type);
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_6__["SummaryNumber"], {
          key: key,
          delta: delta,
          href: href,
          label: label,
          reverseTrend: isReverseTrend,
          prevLabel: compare === 'previous_period' ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Previous period:', 'woocommerce-admin') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Previous year:', 'woocommerce-admin'),
          prevValue: prevValue,
          selected: isSelected,
          value: value,
          labelTooltipText: labelTooltipText,
          onLinkClickCallback: () => {
            // Wider than a certain breakpoint, there is no dropdown so avoid calling onToggle.
            if (onToggle) {
              onToggle();
            }

            Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_10__["recordEvent"])('analytics_chart_tab_click', {
              report: report || endpoint,
              key
            });
          }
        });
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_6__["SummaryList"], null, renderSummaryNumbers);
  }

}
ReportSummary.propTypes = {
  /**
   * Properties of all the charts available for that report.
   */
  charts: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,

  /**
   * The endpoint to use in API calls to populate the Summary Numbers.
   * For example, if `taxes` is provided, data will be fetched from the report
   * `taxes` endpoint (ie: `/wc-analytics/reports/taxes/stats`). If the provided endpoint
   * doesn't exist, an error will be shown to the user with `ReportError`.
   */
  endpoint: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,

  /**
   * Allows specifying properties different from the `endpoint` that will be used
   * to limit the items when there is an active search.
   */
  limitProperties: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,

  /**
   * The query string represented in object form.
   */
  query: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,

  /**
   * Properties of the selected chart.
   */
  selectedChart: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    /**
     * Key of the selected chart.
     */
    key: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,

    /**
     * Chart label.
     */
    label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,

    /**
     * Order query argument.
     */
    order: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['asc', 'desc']),

    /**
     * Order by query argument.
     */
    orderby: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

    /**
     * Number type for formatting.
     */
    type: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['average', 'number', 'currency']).isRequired
  }).isRequired,

  /**
   * Data to display in the SummaryNumbers.
   */
  summaryData: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * Report name, if different than the endpoint.
   */
  report: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
ReportSummary.defaultProps = {
  summaryData: {
    totals: {
      primary: {},
      secondary: {}
    },
    isError: false
  }
};
ReportSummary.contextType = _lib_currency_context__WEBPACK_IMPORTED_MODULE_12__[/* CurrencyContext */ "a"];
/* harmony default export */ __webpack_exports__["a"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])((select, props) => {
  const {
    charts,
    endpoint,
    limitProperties,
    query,
    filters,
    advancedFilters
  } = props;
  const limitBy = limitProperties || [endpoint];
  const hasLimitByParam = limitBy.some(item => query[item] && query[item].length);

  if (query.search && !hasLimitByParam) {
    return {
      emptySearchResults: true
    };
  }

  const fields = charts && charts.map(chart => chart.key);
  const {
    woocommerce_default_date_range: defaultDateRange
  } = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_8__["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings');
  const summaryData = Object(_woocommerce_data__WEBPACK_IMPORTED_MODULE_8__["getSummaryNumbers"])({
    endpoint,
    query,
    select,
    limitBy,
    filters,
    advancedFilters,
    defaultDateRange,
    fields
  });
  return {
    summaryData,
    defaultDateRange
  };
}))(ReportSummary));

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);