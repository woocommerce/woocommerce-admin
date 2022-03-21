(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[13],{

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ revenue_RevenueReport; });

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./client/analytics/report/revenue/config.js
var config = __webpack_require__(555);

// EXTERNAL MODULE: ./client/lib/get-selected-chart/index.js
var get_selected_chart = __webpack_require__(536);

// EXTERNAL MODULE: ./client/analytics/components/report-chart/index.js + 1 modules
var report_chart = __webpack_require__(534);

// EXTERNAL MODULE: ./client/analytics/components/report-summary/index.js
var report_summary = __webpack_require__(537);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","date"]
var external_wp_date_ = __webpack_require__(65);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(8);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(14);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(5);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(22);

// EXTERNAL MODULE: external ["wc","number"]
var external_wc_number_ = __webpack_require__(122);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(12);

// EXTERNAL MODULE: external ["wc","date"]
var external_wc_date_ = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(32);

// EXTERNAL MODULE: ./client/analytics/components/report-table/index.js + 2 modules
var report_table = __webpack_require__(533);

// EXTERNAL MODULE: ./client/utils/admin-settings.js
var admin_settings = __webpack_require__(23);

// EXTERNAL MODULE: ./client/lib/currency-context.js
var currency_context = __webpack_require__(527);

// CONCATENATED MODULE: ./client/analytics/report/revenue/table.js


/**
 * External dependencies
 */











/**
 * Internal dependencies
 */




const EMPTY_ARRAY = [];
const summaryFields = ['orders_count', 'gross_sales', 'total_sales', 'refunds', 'coupons', 'taxes', 'shipping', 'net_revenue'];

class table_RevenueReportTable extends external_wp_element_["Component"] {
  constructor() {
    super();
    this.getHeadersContent = this.getHeadersContent.bind(this);
    this.getRowsContent = this.getRowsContent.bind(this);
    this.getSummary = this.getSummary.bind(this);
  }

  getHeadersContent() {
    return [{
      label: Object(external_wp_i18n_["__"])('Date', 'woocommerce-admin'),
      key: 'date',
      required: true,
      defaultSort: true,
      isLeftAligned: true,
      isSortable: true
    }, {
      label: Object(external_wp_i18n_["__"])('Orders', 'woocommerce-admin'),
      key: 'orders_count',
      required: false,
      isSortable: true,
      isNumeric: true
    }, {
      label: Object(external_wp_i18n_["__"])('Gross sales', 'woocommerce-admin'),
      key: 'gross_sales',
      required: false,
      isSortable: true,
      isNumeric: true
    }, {
      label: Object(external_wp_i18n_["__"])('Returns', 'woocommerce-admin'),
      key: 'refunds',
      required: false,
      isSortable: true,
      isNumeric: true
    }, {
      label: Object(external_wp_i18n_["__"])('Coupons', 'woocommerce-admin'),
      key: 'coupons',
      required: false,
      isSortable: true,
      isNumeric: true
    }, {
      label: Object(external_wp_i18n_["__"])('Net sales', 'woocommerce-admin'),
      key: 'net_revenue',
      required: false,
      isSortable: true,
      isNumeric: true
    }, {
      label: Object(external_wp_i18n_["__"])('Taxes', 'woocommerce-admin'),
      key: 'taxes',
      required: false,
      isSortable: true,
      isNumeric: true
    }, {
      label: Object(external_wp_i18n_["__"])('Shipping', 'woocommerce-admin'),
      key: 'shipping',
      required: false,
      isSortable: true,
      isNumeric: true
    }, {
      label: Object(external_wp_i18n_["__"])('Total sales', 'woocommerce-admin'),
      key: 'total_sales',
      required: false,
      isSortable: true,
      isNumeric: true
    }];
  }

  getRowsContent() {
    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    const dateFormat = Object(admin_settings["d" /* getAdminSetting */])('dateFormat', external_wc_date_["defaultTableDateFormat"]);
    const {
      formatAmount,
      render: renderCurrency,
      formatDecimal: getCurrencyFormatDecimal,
      getCurrencyConfig
    } = this.context;
    return data.map(row => {
      const {
        coupons,
        gross_sales: grossSales,
        total_sales: totalSales,
        net_revenue: netRevenue,
        orders_count: ordersCount,
        refunds,
        shipping,
        taxes
      } = row.subtotals; // @todo How to create this per-report? Can use `w`, `year`, `m` to build time-specific order links
      // we need to know which kind of report this is, and parse the `label` to get this row's date

      const orderLink = Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
        href: 'edit.php?post_type=shop_order&m=' + Object(external_wp_date_["format"])('Ymd', row.date_start),
        type: "wp-admin"
      }, Object(external_wc_number_["formatValue"])(getCurrencyConfig(), 'number', ordersCount));
      return [{
        display: Object(external_wp_element_["createElement"])(external_wc_components_["Date"], {
          date: row.date_start,
          visibleFormat: dateFormat
        }),
        value: row.date_start
      }, {
        display: orderLink,
        value: Number(ordersCount)
      }, {
        display: renderCurrency(grossSales),
        value: getCurrencyFormatDecimal(grossSales)
      }, {
        display: formatAmount(refunds),
        value: getCurrencyFormatDecimal(refunds)
      }, {
        display: formatAmount(coupons),
        value: getCurrencyFormatDecimal(coupons)
      }, {
        display: renderCurrency(netRevenue),
        value: getCurrencyFormatDecimal(netRevenue)
      }, {
        display: renderCurrency(taxes),
        value: getCurrencyFormatDecimal(taxes)
      }, {
        display: renderCurrency(shipping),
        value: getCurrencyFormatDecimal(shipping)
      }, {
        display: renderCurrency(totalSales),
        value: getCurrencyFormatDecimal(totalSales)
      }];
    });
  }

  getSummary(totals) {
    let totalResults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    const {
      orders_count: ordersCount = 0,
      gross_sales: grossSales = 0,
      total_sales: totalSales = 0,
      refunds = 0,
      coupons = 0,
      taxes = 0,
      shipping = 0,
      net_revenue: netRevenue = 0
    } = totals;
    const {
      formatAmount,
      getCurrencyConfig
    } = this.context;
    const currency = getCurrencyConfig();
    return [{
      label: Object(external_wp_i18n_["_n"])('day', 'days', totalResults, 'woocommerce-admin'),
      value: Object(external_wc_number_["formatValue"])(currency, 'number', totalResults)
    }, {
      label: Object(external_wp_i18n_["_n"])('order', 'orders', ordersCount, 'woocommerce-admin'),
      value: Object(external_wc_number_["formatValue"])(currency, 'number', ordersCount)
    }, {
      label: Object(external_wp_i18n_["__"])('Gross sales', 'woocommerce-admin'),
      value: formatAmount(grossSales)
    }, {
      label: Object(external_wp_i18n_["__"])('Returns', 'woocommerce-admin'),
      value: formatAmount(refunds)
    }, {
      label: Object(external_wp_i18n_["__"])('Coupons', 'woocommerce-admin'),
      value: formatAmount(coupons)
    }, {
      label: Object(external_wp_i18n_["__"])('Net sales', 'woocommerce-admin'),
      value: formatAmount(netRevenue)
    }, {
      label: Object(external_wp_i18n_["__"])('Taxes', 'woocommerce-admin'),
      value: formatAmount(taxes)
    }, {
      label: Object(external_wp_i18n_["__"])('Shipping', 'woocommerce-admin'),
      value: formatAmount(shipping)
    }, {
      label: Object(external_wp_i18n_["__"])('Total sales', 'woocommerce-admin'),
      value: formatAmount(totalSales)
    }];
  }

  render() {
    const {
      advancedFilters,
      filters,
      tableData,
      query
    } = this.props;
    return Object(external_wp_element_["createElement"])(report_table["a" /* default */], {
      endpoint: "revenue",
      getHeadersContent: this.getHeadersContent,
      getRowsContent: this.getRowsContent,
      getSummary: this.getSummary,
      summaryFields: summaryFields,
      query: query,
      tableData: tableData,
      title: Object(external_wp_i18n_["__"])('Revenue', 'woocommerce-admin'),
      columnPrefsKey: "revenue_report_columns",
      filters: filters,
      advancedFilters: advancedFilters
    });
  }

}

table_RevenueReportTable.contextType = currency_context["a" /* CurrencyContext */];
/**
 * Memoized props object formatting function.
 *
 * @param {boolean} isError
 * @param {boolean} isRequesting
 * @param {Object} tableQuery
 * @param {Object} revenueData
 * @return {Object} formatted tableData prop
 */

const formatProps = Object(external_lodash_["memoize"])((isError, isRequesting, tableQuery, revenueData) => ({
  tableData: {
    items: {
      data: Object(external_lodash_["get"])(revenueData, ['data', 'intervals'], EMPTY_ARRAY),
      totalResults: Object(external_lodash_["get"])(revenueData, ['totalResults'], 0)
    },
    isError,
    isRequesting,
    query: tableQuery
  }
}), (isError, isRequesting, tableQuery, revenueData) => [isError, isRequesting, Object(lib["stringify"])(tableQuery), Object(external_lodash_["get"])(revenueData, ['totalResults'], 0), Object(external_lodash_["get"])(revenueData, ['data', 'intervals'], EMPTY_ARRAY).length].join(':'));
/**
 * Memoized table query formatting function.
 *
 * @param {string} order
 * @param {string} orderBy
 * @param {number} page
 * @param {number} pageSize
 * @param {Object} datesFromQuery
 * @return {Object} formatted tableQuery object
 */

const formatTableQuery = Object(external_lodash_["memoize"])( // @todo Support hour here when viewing a single day
(order, orderBy, page, pageSize, datesFromQuery) => ({
  interval: 'day',
  orderby: orderBy,
  order,
  page,
  per_page: pageSize,
  after: Object(external_wc_date_["appendTimestamp"])(datesFromQuery.primary.after, 'start'),
  before: Object(external_wc_date_["appendTimestamp"])(datesFromQuery.primary.before, 'end')
}), (order, orderBy, page, pageSize, datesFromQuery) => [order, orderBy, page, pageSize, datesFromQuery.primary.after, datesFromQuery.primary.before].join(':'));
/* harmony default export */ var table = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])((select, props) => {
  const {
    query,
    filters,
    advancedFilters
  } = props;
  const {
    woocommerce_default_date_range: defaultDateRange
  } = select(external_wc_data_["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings');
  const datesFromQuery = Object(external_wc_date_["getCurrentDates"])(query, defaultDateRange);
  const {
    getReportStats,
    getReportStatsError,
    isResolving
  } = select(external_wc_data_["REPORTS_STORE_NAME"]);
  const tableQuery = formatTableQuery(query.order || 'desc', query.orderby || 'date', query.paged || 1, query.per_page || external_wc_data_["QUERY_DEFAULTS"].pageSize, datesFromQuery);
  const filteredTableQuery = Object(external_wc_data_["getReportTableQuery"])({
    endpoint: 'revenue',
    query,
    select,
    tableQuery,
    filters,
    advancedFilters
  });
  const revenueData = getReportStats('revenue', filteredTableQuery);
  const isError = Boolean(getReportStatsError('revenue', filteredTableQuery));
  const isRequesting = isResolving('getReportStats', ['revenue', filteredTableQuery]);
  return formatProps(isError, isRequesting, tableQuery, revenueData);
}))(table_RevenueReportTable));
// EXTERNAL MODULE: ./client/analytics/components/report-filters/index.js
var report_filters = __webpack_require__(532);

// CONCATENATED MODULE: ./client/analytics/report/revenue/index.js


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */







class revenue_RevenueReport extends external_wp_element_["Component"] {
  render() {
    const {
      path,
      query
    } = this.props;
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(report_filters["a" /* default */], {
      query: query,
      path: path,
      report: "revenue",
      filters: config["c" /* filters */],
      advancedFilters: config["a" /* advancedFilters */]
    }), Object(external_wp_element_["createElement"])(report_summary["a" /* default */], {
      charts: config["b" /* charts */],
      endpoint: "revenue",
      query: query,
      selectedChart: Object(get_selected_chart["a" /* default */])(query.chart, config["b" /* charts */]),
      filters: config["c" /* filters */],
      advancedFilters: config["a" /* advancedFilters */]
    }), Object(external_wp_element_["createElement"])(report_chart["a" /* default */], {
      charts: config["b" /* charts */],
      endpoint: "revenue",
      path: path,
      query: query,
      selectedChart: Object(get_selected_chart["a" /* default */])(query.chart, config["b" /* charts */]),
      filters: config["c" /* filters */],
      advancedFilters: config["a" /* advancedFilters */]
    }), Object(external_wp_element_["createElement"])(table, {
      query: query,
      filters: config["c" /* filters */],
      advancedFilters: config["a" /* advancedFilters */]
    }));
  }

}
revenue_RevenueReport.propTypes = {
  path: prop_types_default.a.string.isRequired,
  query: prop_types_default.a.object.isRequired
};

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return charts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return advancedFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filters; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */


const REVENUE_REPORT_CHARTS_FILTER = 'woocommerce_admin_revenue_report_charts';
const REVENUE_REPORT_FILTERS_FILTER = 'woocommerce_admin_revenue_report_filters';
const REVENUE_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_revenue_report_advanced_filters';
/**
 * @typedef {import('../index.js').chart} chart
 */

/**
 * Revenue Report charts filter.
 *
 * @filter woocommerce_admin_revenue_report_charts
 * @param {Array.<chart>} charts Report charts.
 */

const charts = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(REVENUE_REPORT_CHARTS_FILTER, [{
  key: 'gross_sales',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Gross sales', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'gross_sales',
  type: 'currency',
  isReverseTrend: false
}, {
  key: 'refunds',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Returns', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'refunds',
  type: 'currency',
  isReverseTrend: true
}, {
  key: 'coupons',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Coupons', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'coupons',
  type: 'currency',
  isReverseTrend: false
}, {
  key: 'net_revenue',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Net sales', 'woocommerce-admin'),
  orderby: 'net_revenue',
  type: 'currency',
  isReverseTrend: false,
  labelTooltipText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Full refunds are not deducted from tax or net sales totals', 'woocommerce-admin')
}, {
  key: 'taxes',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Taxes', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'taxes',
  type: 'currency',
  isReverseTrend: false,
  labelTooltipText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Full refunds are not deducted from tax or net sales totals', 'woocommerce-admin')
}, {
  key: 'shipping',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Shipping', 'woocommerce-admin'),
  orderby: 'shipping',
  type: 'currency',
  isReverseTrend: false
}, {
  key: 'total_sales',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Total sales', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'total_sales',
  type: 'currency',
  isReverseTrend: false
}]);
/**
 * Revenue Report Advanced Filters.
 *
 * @filter woocommerce_admin_revenue_report_advanced_filters
 * @param {Object} advancedFilters Report Advanced Filters.
 * @param {string} advancedFilters.title Interpolated component string for Advanced Filters title.
 * @param {Object} advancedFilters.filters An object specifying a report's Advanced Filters.
 */

const advancedFilters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(REVENUE_REPORT_ADVANCED_FILTERS_FILTER, {
  filters: {},
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Revenue Matches {{select /}} Filters', 'A sentence describing filters for Revenue. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ', 'woocommerce-admin')
});
const filterValues = [];

if (Object.keys(advancedFilters.filters).length) {
  filterValues.push({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('All Revenue', 'woocommerce-admin'),
    value: 'all'
  });
  filterValues.push({
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Advanced Filters', 'woocommerce-admin'),
    value: 'advanced'
  });
}
/**
 * @typedef {import('../index.js').filter} filter
 */

/**
 * Revenue Report Filters.
 *
 * @filter woocommerce_admin_revenue_report_filters
 * @param {Array.<filter>} filters Report filters.
 */


const filters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(REVENUE_REPORT_FILTERS_FILTER, [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Show', 'woocommerce-admin'),
  staticParams: ['chartType', 'paged', 'per_page'],
  param: 'filter',
  showFilters: () => filterValues.length > 0,
  filters: filterValues
}]);

/***/ })

}]);