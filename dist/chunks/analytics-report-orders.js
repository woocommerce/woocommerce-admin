(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[11],{

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ orders_OrdersReport; });

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./client/analytics/report/orders/config.js
var config = __webpack_require__(560);

// EXTERNAL MODULE: ./client/lib/get-selected-chart/index.js
var get_selected_chart = __webpack_require__(536);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(5);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(22);

// EXTERNAL MODULE: external ["wc","number"]
var external_wc_number_ = __webpack_require__(122);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(13);

// EXTERNAL MODULE: external ["wc","date"]
var external_wc_date_ = __webpack_require__(21);

// EXTERNAL MODULE: ./client/analytics/components/report-table/index.js + 2 modules
var report_table = __webpack_require__(533);

// EXTERNAL MODULE: ./client/utils/admin-settings.js
var admin_settings = __webpack_require__(23);

// EXTERNAL MODULE: ./client/lib/currency-context.js
var currency_context = __webpack_require__(527);

// CONCATENATED MODULE: ./client/analytics/report/orders/table.js


/**
 * External dependencies
 */







/**
 * Internal dependencies
 */





const capitalizeFirstLetter = expr => expr.charAt(0).toUpperCase() + expr.slice(1);

class table_OrdersReportTable extends external_wp_element_["Component"] {
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
      label: Object(external_wp_i18n_["__"])('Order #', 'woocommerce-admin'),
      screenReaderLabel: Object(external_wp_i18n_["__"])('Order Number', 'woocommerce-admin'),
      key: 'order_number',
      required: true
    }, {
      label: Object(external_wp_i18n_["__"])('Status', 'woocommerce-admin'),
      key: 'status',
      required: false,
      isSortable: false
    }, {
      label: Object(external_wp_i18n_["__"])('Customer', 'woocommerce-admin'),
      key: 'customer_id',
      required: false,
      isSortable: false
    }, {
      label: Object(external_wp_i18n_["__"])('Customer type', 'woocommerce-admin'),
      key: 'customer_type',
      required: false,
      isSortable: false
    }, {
      label: Object(external_wp_i18n_["__"])('Product(s)', 'woocommerce-admin'),
      screenReaderLabel: Object(external_wp_i18n_["__"])('Products', 'woocommerce-admin'),
      key: 'products',
      required: false,
      isSortable: false
    }, {
      label: Object(external_wp_i18n_["__"])('Items sold', 'woocommerce-admin'),
      key: 'num_items_sold',
      required: false,
      isSortable: true,
      isNumeric: true
    }, {
      label: Object(external_wp_i18n_["__"])('Coupon(s)', 'woocommerce-admin'),
      screenReaderLabel: Object(external_wp_i18n_["__"])('Coupons', 'woocommerce-admin'),
      key: 'coupons',
      required: false,
      isSortable: false
    }, {
      label: Object(external_wp_i18n_["__"])('Net sales', 'woocommerce-admin'),
      screenReaderLabel: Object(external_wp_i18n_["__"])('Net sales', 'woocommerce-admin'),
      key: 'net_total',
      required: true,
      isSortable: true,
      isNumeric: true
    }];
  }

  getCustomerName(customer) {
    const {
      first_name: firstName,
      last_name: lastName
    } = customer || {};

    if (!firstName && !lastName) {
      return '';
    }

    return [firstName, lastName].join(' ');
  }

  getRowsContent(tableData) {
    const {
      query
    } = this.props;
    const persistedQuery = Object(external_wc_navigation_["getPersistedQuery"])(query);
    const dateFormat = Object(admin_settings["d" /* getAdminSetting */])('dateFormat', external_wc_date_["defaultTableDateFormat"]);
    const {
      render: renderCurrency,
      getCurrencyConfig
    } = this.context;
    return Object(external_lodash_["map"])(tableData, row => {
      const {
        currency,
        date_created: dateCreated,
        net_total: netTotal,
        num_items_sold: numItemsSold,
        order_id: orderId,
        order_number: orderNumber,
        parent_id: parentId,
        status,
        customer_type: customerType
      } = row;
      const extendedInfo = row.extended_info || {};
      const {
        coupons,
        customer,
        products
      } = extendedInfo;
      const formattedProducts = products.sort((itemA, itemB) => itemB.quantity - itemA.quantity).map(item => ({
        label: item.name,
        quantity: item.quantity,
        href: Object(external_wc_navigation_["getNewPath"])(persistedQuery, '/analytics/products', {
          filter: 'single_product',
          products: item.id
        })
      }));
      const formattedCoupons = coupons.map(coupon => ({
        label: coupon.code,
        href: Object(external_wc_navigation_["getNewPath"])(persistedQuery, '/analytics/coupons', {
          filter: 'single_coupon',
          coupons: coupon.id
        })
      }));
      return [{
        display: Object(external_wp_element_["createElement"])(external_wc_components_["Date"], {
          date: dateCreated,
          visibleFormat: dateFormat
        }),
        value: dateCreated
      }, {
        display: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
          href: 'post.php?post=' + (parentId ? parentId : orderId) + '&action=edit' + (parentId ? '#order_refunds' : ''),
          type: "wp-admin"
        }, orderNumber),
        value: orderNumber
      }, {
        display: Object(external_wp_element_["createElement"])(external_wc_components_["OrderStatus"], {
          className: "woocommerce-orders-table__status",
          order: {
            status
          },
          labelPositionToLeft: true,
          orderStatusMap: Object(admin_settings["d" /* getAdminSetting */])('orderStatuses', {})
        }),
        value: status
      }, {
        display: this.getCustomerName(customer),
        value: this.getCustomerName(customer)
      }, {
        display: capitalizeFirstLetter(customerType),
        value: customerType
      }, {
        display: this.renderList(formattedProducts.length ? [formattedProducts[0]] : [], formattedProducts.map(product => ({
          label: Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('%s× %s', 'woocommerce-admin'), product.quantity, product.label),
          href: product.href
        }))),
        value: formattedProducts.map(_ref => {
          let {
            quantity,
            label
          } = _ref;
          return Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('%s× %s', 'woocommerce-admin'), quantity, label);
        }).join(', ')
      }, {
        display: Object(external_wc_number_["formatValue"])(getCurrencyConfig(), 'number', numItemsSold),
        value: numItemsSold
      }, {
        display: this.renderList(formattedCoupons.length ? [formattedCoupons[0]] : [], formattedCoupons),
        value: formattedCoupons.map(coupon => coupon.label).join(', ')
      }, {
        display: renderCurrency(netTotal, currency),
        value: netTotal
      }];
    });
  }

  getSummary(totals) {
    const {
      orders_count: ordersCount = 0,
      total_customers: totalCustomers = 0,
      products = 0,
      num_items_sold: numItemsSold = 0,
      coupons_count: couponsCount = 0,
      net_revenue: netRevenue = 0
    } = totals;
    const {
      formatAmount,
      getCurrencyConfig
    } = this.context;
    const currency = getCurrencyConfig();
    return [{
      label: Object(external_wp_i18n_["_n"])('Order', 'Orders', ordersCount, 'woocommerce-admin'),
      value: Object(external_wc_number_["formatValue"])(currency, 'number', ordersCount)
    }, {
      label: Object(external_wp_i18n_["_n"])(' Customer', ' Customers', totalCustomers, 'woocommerce-admin'),
      value: Object(external_wc_number_["formatValue"])(currency, 'number', totalCustomers)
    }, {
      label: Object(external_wp_i18n_["_n"])('Product', 'Products', products, 'woocommerce-admin'),
      value: Object(external_wc_number_["formatValue"])(currency, 'number', products)
    }, {
      label: Object(external_wp_i18n_["_n"])('Item sold', 'Items sold', numItemsSold, 'woocommerce-admin'),
      value: Object(external_wc_number_["formatValue"])(currency, 'number', numItemsSold)
    }, {
      label: Object(external_wp_i18n_["_n"])('Coupon', 'Coupons', couponsCount, 'woocommerce-admin'),
      value: Object(external_wc_number_["formatValue"])(currency, 'number', couponsCount)
    }, {
      label: Object(external_wp_i18n_["__"])('net sales', 'woocommerce-admin'),
      value: formatAmount(netRevenue)
    }];
  }

  renderLinks() {
    let items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return items.map((item, i) => Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
      href: item.href,
      key: i,
      type: "wc-admin"
    }, item.label));
  }

  renderList(visibleItems, popoverItems) {
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, this.renderLinks(visibleItems), popoverItems.length > 1 && Object(external_wp_element_["createElement"])(external_wc_components_["ViewMoreList"], {
      items: this.renderLinks(popoverItems)
    }));
  }

  render() {
    const {
      query,
      filters,
      advancedFilters
    } = this.props;
    return Object(external_wp_element_["createElement"])(report_table["a" /* default */], {
      endpoint: "orders",
      getHeadersContent: this.getHeadersContent,
      getRowsContent: this.getRowsContent,
      getSummary: this.getSummary,
      summaryFields: ['orders_count', 'total_customers', 'products', 'num_items_sold', 'coupons_count', 'net_revenue'],
      query: query,
      tableQuery: {
        extended_info: true
      },
      title: Object(external_wp_i18n_["__"])('Orders', 'woocommerce-admin'),
      columnPrefsKey: "orders_report_columns",
      filters: filters,
      advancedFilters: advancedFilters
    });
  }

}

table_OrdersReportTable.contextType = currency_context["a" /* CurrencyContext */];
/* harmony default export */ var table = (table_OrdersReportTable);
// EXTERNAL MODULE: ./client/analytics/components/report-chart/index.js + 1 modules
var report_chart = __webpack_require__(534);

// EXTERNAL MODULE: ./client/analytics/components/report-summary/index.js
var report_summary = __webpack_require__(537);

// EXTERNAL MODULE: ./client/analytics/components/report-filters/index.js
var report_filters = __webpack_require__(532);

// CONCATENATED MODULE: ./client/analytics/report/orders/index.js


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */







class orders_OrdersReport extends external_wp_element_["Component"] {
  render() {
    const {
      path,
      query
    } = this.props;
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(report_filters["a" /* default */], {
      query: query,
      path: path,
      filters: config["c" /* filters */],
      advancedFilters: config["a" /* advancedFilters */],
      report: "orders"
    }), Object(external_wp_element_["createElement"])(report_summary["a" /* default */], {
      charts: config["b" /* charts */],
      endpoint: "orders",
      query: query,
      selectedChart: Object(get_selected_chart["a" /* default */])(query.chart, config["b" /* charts */]),
      filters: config["c" /* filters */],
      advancedFilters: config["a" /* advancedFilters */]
    }), Object(external_wp_element_["createElement"])(report_chart["a" /* default */], {
      charts: config["b" /* charts */],
      endpoint: "orders",
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
orders_OrdersReport.propTypes = {
  path: prop_types_default.a.string.isRequired,
  query: prop_types_default.a.object.isRequired
};

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getRequestByIdString; });
/* unused harmony export getAttributeLabels */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCategoryLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCouponLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCustomerLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getProductLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getTaxRateLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getVariationName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getVariationLabels; });
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _analytics_report_taxes_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(529);
/* harmony import */ var _utils_admin_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23);
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



/**
 * Get a function that accepts ids as they are found in url parameter and
 * returns a promise with an optional method applied to results
 *
 * @param {string|Function} path - api path string or a function of the query returning api path string
 * @param {Function} [handleData] - function applied to each iteration of data
 * @return {Function} - a function of ids returning a promise
 */

function getRequestByIdString(path) {
  let handleData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : lodash__WEBPACK_IMPORTED_MODULE_2__["identity"];
  return function () {
    let queryString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    let query = arguments.length > 1 ? arguments[1] : undefined;
    const pathString = typeof path === 'function' ? path(query) : path;
    const idList = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__["getIdsFromQuery"])(queryString);

    if (idList.length < 1) {
      return Promise.resolve([]);
    }

    const payload = {
      include: idList.join(','),
      per_page: idList.length
    };
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__["addQueryArgs"])(pathString, payload)
    }).then(data => data.map(handleData));
  };
}
const getAttributeLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"] + '/products/attributes', attribute => ({
  key: attribute.id,
  label: attribute.name
}));
const getCategoryLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"] + '/products/categories', category => ({
  key: category.id,
  label: category.name
}));
const getCouponLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"] + '/coupons', coupon => ({
  key: coupon.id,
  label: coupon.code
}));
const getCustomerLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"] + '/customers', customer => ({
  key: customer.id,
  label: customer.name
}));
const getProductLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"] + '/products', product => ({
  key: product.id,
  label: product.name
}));
const getTaxRateLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"] + '/taxes', taxRate => ({
  key: taxRate.id,
  label: Object(_analytics_report_taxes_utils__WEBPACK_IMPORTED_MODULE_5__[/* getTaxCode */ "a"])(taxRate)
}));
/**
 * Create a variation name by concatenating each of the variation's
 * attribute option strings.
 *
 * @param {Object} variation - variation returned by the api
 * @param {Array} variation.attributes - attribute objects, with option property.
 * @param {string} variation.name - name of variation.
 * @return {string} - formatted variation name
 */

function getVariationName(_ref) {
  let {
    attributes,
    name
  } = _ref;
  const separator = Object(_utils_admin_settings__WEBPACK_IMPORTED_MODULE_6__[/* getAdminSetting */ "d"])('variationTitleAttributesSeparator', ' - ');

  if (name && name.indexOf(separator) > -1) {
    return name;
  }

  const attributeList = (attributes || []).map(_ref2 => {
    let {
      option
    } = _ref2;
    return option;
  }).join(', ');
  return attributeList ? name + separator + attributeList : name;
}
const getVariationLabels = getRequestByIdString(_ref3 => {
  let {
    products
  } = _ref3;

  // If a product was specified, get just its variations.
  if (products) {
    return _woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"] + `/products/${products}/variations`;
  }

  return _woocommerce_data__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"] + '/variations';
}, variation => {
  return {
    key: variation.id,
    label: getVariationName(variation)
  };
});

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTaxCode; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

function getTaxCode(tax) {
  return [tax.country, tax.state, tax.name || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('TAX', 'woocommerce-admin'), tax.priority].map(item => item.toString().toUpperCase().trim()).filter(Boolean).join('-');
}

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return charts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return advancedFilters; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_async_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(528);
/* harmony import */ var _utils_admin_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



const ORDERS_REPORT_CHARTS_FILTER = 'woocommerce_admin_orders_report_charts';
const ORDERS_REPORT_FILTERS_FILTER = 'woocommerce_admin_orders_report_filters';
const ORDERS_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_orders_report_advanced_filters';
/**
 * @typedef {import('../index.js').chart} chart
 */

/**
 * Orders Report charts filter.
 *
 * @filter woocommerce_admin_orders_report_charts
 * @param {Array.<chart>} charts Report charts.
 */

const charts = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(ORDERS_REPORT_CHARTS_FILTER, [{
  key: 'orders_count',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Orders', 'woocommerce-admin'),
  type: 'number'
}, {
  key: 'net_revenue',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Net sales', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'net_total',
  type: 'currency'
}, {
  key: 'avg_order_value',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Average order value', 'woocommerce-admin'),
  type: 'currency'
}, {
  key: 'avg_items_per_order',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Average items per order', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'num_items_sold',
  type: 'average'
}]);
/**
 * @typedef {import('../index.js').filter} filter
 */

/**
 * Orders Report Filters.
 *
 * @filter woocommerce_admin_orders_report_filters
 * @param {Array.<filter>} filters Report filters.
 */

const filters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(ORDERS_REPORT_FILTERS_FILTER, [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Show', 'woocommerce-admin'),
  staticParams: ['chartType', 'paged', 'per_page'],
  param: 'filter',
  showFilters: () => true,
  filters: [{
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('All orders', 'woocommerce-admin'),
    value: 'all'
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Advanced filters', 'woocommerce-admin'),
    value: 'advanced'
  }]
}]);
/*eslint-disable max-len*/

/**
 * Orders Report Advanced Filters.
 *
 * @filter woocommerce_admin_orders_report_advanced_filters
 * @param {Object} advancedFilters Report Advanced Filters.
 * @param {string} advancedFilters.title Interpolated component string for Advanced Filters title.
 * @param {Object} advancedFilters.filters An object specifying a report's Advanced Filters.
 */

const advancedFilters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(ORDERS_REPORT_ADVANCED_FILTERS_FILTER, {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Orders match {{select /}} filters', 'A sentence describing filters for Orders. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ', 'woocommerce-admin'),
  filters: {
    status: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Order Status', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove order status filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select an order status filter match', 'woocommerce-admin'),

        /* translators: A sentence describing an Order Status filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('{{title}}Order Status{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select an order status', 'woocommerce-admin')
      },
      rules: [{
        value: 'is',

        /* translators: Sentence fragment, logical, "Is" refers to searching for orders matching a chosen order status. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Is', 'order status', 'woocommerce-admin')
      }, {
        value: 'is_not',

        /* translators: Sentence fragment, logical, "Is Not" refers to searching for orders that don\'t match a chosen order status. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Is Not', 'order status', 'woocommerce-admin')
      }],
      input: {
        component: 'SelectControl',
        options: Object.keys(_utils_admin_settings__WEBPACK_IMPORTED_MODULE_3__[/* ORDER_STATUSES */ "c"]).map(key => ({
          value: key,
          label: _utils_admin_settings__WEBPACK_IMPORTED_MODULE_3__[/* ORDER_STATUSES */ "c"][key]
        }))
      }
    },
    product: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Products', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search products', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove products filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a product filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('{{title}}Product{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select products', 'woocommerce-admin')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to orders including a given product(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Includes', 'products', 'woocommerce-admin')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to orders excluding a given product(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Excludes', 'products', 'woocommerce-admin')
      }],
      input: {
        component: 'Search',
        type: 'products',
        getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_2__[/* getProductLabels */ "d"]
      }
    },
    variation: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Variations', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search variations', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove variations filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a variation filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a Variation filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('{{title}}Variation{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select variation', 'woocommerce-admin')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to orders including a given variation(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Includes', 'variations', 'woocommerce-admin')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to orders excluding a given variation(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Excludes', 'variations', 'woocommerce-admin')
      }],
      input: {
        component: 'Search',
        type: 'variations',
        getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_2__[/* getVariationLabels */ "g"]
      }
    },
    coupon: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Coupon Codes', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search coupons', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove coupon filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a coupon filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a Coupon filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('{{title}}Coupon code{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select coupon codes', 'woocommerce-admin')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to orders including a given coupon code(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Includes', 'coupon code', 'woocommerce-admin')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to orders excluding a given coupon code(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Excludes', 'coupon code', 'woocommerce-admin')
      }],
      input: {
        component: 'Search',
        type: 'coupons',
        getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_2__[/* getCouponLabels */ "b"]
      }
    },
    customer_type: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Customer type', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove customer filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a customer filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a Customer filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('{{title}}Customer is{{/title}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a customer type', 'woocommerce-admin')
      },
      input: {
        component: 'SelectControl',
        options: [{
          value: 'new',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('New', 'woocommerce-admin')
        }, {
          value: 'returning',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Returning', 'woocommerce-admin')
        }],
        defaultOption: 'new'
      }
    },
    refunds: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Refunds', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove refunds filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a refund filter match', 'woocommerce-admin'),
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('{{title}}Refunds{{/title}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a refund type', 'woocommerce-admin')
      },
      input: {
        component: 'SelectControl',
        options: [{
          value: 'all',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('All', 'woocommerce-admin')
        }, {
          value: 'partial',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Partially refunded', 'woocommerce-admin')
        }, {
          value: 'full',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Fully refunded', 'woocommerce-admin')
        }, {
          value: 'none',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('None', 'woocommerce-admin')
        }],
        defaultOption: 'all'
      }
    },
    tax_rate: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Tax Rates', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search tax rates', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove tax rate filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a tax rate filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a tax rate filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('{{title}}Tax Rate{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select tax rates', 'woocommerce-admin')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to orders including a given tax rate(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Includes', 'tax rate', 'woocommerce-admin')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to orders excluding a given tax rate(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Excludes', 'tax rate', 'woocommerce-admin')
      }],
      input: {
        component: 'Search',
        type: 'taxes',
        getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_2__[/* getTaxRateLabels */ "f"]
      }
    },
    attribute: {
      allowMultiple: true,
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Attribute', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search attributes', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove attribute filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a product attribute filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('{{title}}Attribute{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select attributes', 'woocommerce-admin')
      },
      rules: [{
        value: 'is',

        /* translators: Sentence fragment, logical, "Is" refers to searching for products matching a chosen attribute. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Is', 'product attribute', 'woocommerce-admin')
      }, {
        value: 'is_not',

        /* translators: Sentence fragment, logical, "Is Not" refers to searching for products that don\'t match a chosen attribute. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Is Not', 'product attribute', 'woocommerce-admin')
      }],
      input: {
        component: 'ProductAttribute'
      }
    }
  }
});
/*eslint-enable max-len*/

/***/ })

}]);