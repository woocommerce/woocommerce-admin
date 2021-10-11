(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[10],{

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ downloads_DownloadsReport; });

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./client/analytics/report/downloads/config.js
var config = __webpack_require__(533);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(7);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(9);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(21);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(12);

// EXTERNAL MODULE: external ["wc","number"]
var external_wc_number_ = __webpack_require__(120);

// EXTERNAL MODULE: ./packages/wc-admin-settings/build-module/index.js
var build_module = __webpack_require__(13);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(11);

// EXTERNAL MODULE: external ["wc","date"]
var external_wc_date_ = __webpack_require__(19);

// EXTERNAL MODULE: ./client/analytics/components/report-table/index.js + 2 modules
var report_table = __webpack_require__(503);

// EXTERNAL MODULE: ./client/lib/currency-context.js
var currency_context = __webpack_require__(498);

// CONCATENATED MODULE: ./client/analytics/report/downloads/table.js


/**
 * External dependencies
 */











/**
 * Internal dependencies
 */




class table_DownloadsReportTable extends external_wp_element_["Component"] {
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
      defaultSort: true,
      required: true,
      isLeftAligned: true,
      isSortable: true
    }, {
      label: Object(external_wp_i18n_["__"])('Product title', 'woocommerce-admin'),
      key: 'product',
      isSortable: true,
      required: true
    }, {
      label: Object(external_wp_i18n_["__"])('File name', 'woocommerce-admin'),
      key: 'file_name'
    }, {
      label: Object(external_wp_i18n_["__"])('Order #', 'woocommerce-admin'),
      screenReaderLabel: Object(external_wp_i18n_["__"])('Order Number', 'woocommerce-admin'),
      key: 'order_number'
    }, {
      label: Object(external_wp_i18n_["__"])('Username', 'woocommerce-admin'),
      key: 'user_id'
    }, {
      label: Object(external_wp_i18n_["__"])('IP', 'woocommerce-admin'),
      key: 'ip_address'
    }];
  }

  getRowsContent(downloads) {
    const {
      query
    } = this.props;
    const persistedQuery = Object(external_wc_navigation_["getPersistedQuery"])(query);
    const dateFormat = Object(build_module["f" /* getSetting */])('dateFormat', external_wc_date_["defaultTableDateFormat"]);
    return Object(external_lodash_["map"])(downloads, download => {
      const {
        _embedded,
        date,
        file_name: fileName,
        file_path: filePath,
        ip_address: ipAddress,
        order_id: orderId,
        order_number: orderNumber,
        product_id: productId,
        username
      } = download;
      const {
        code: errorCode,
        name: productName
      } = _embedded.product[0];
      let productDisplay, productValue; // Handle deleted products.

      if (errorCode === 'woocommerce_rest_product_invalid_id') {
        productDisplay = Object(external_wp_i18n_["__"])('(Deleted)', 'woocommerce-admin');
        productValue = Object(external_wp_i18n_["__"])('(Deleted)', 'woocommerce-admin');
      } else {
        const productURL = Object(external_wc_navigation_["getNewPath"])(persistedQuery, '/analytics/products', {
          filter: 'single_product',
          products: productId
        });
        productDisplay = Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
          href: productURL,
          type: "wc-admin"
        }, productName);
        productValue = productName;
      }

      return [{
        display: Object(external_wp_element_["createElement"])(external_wc_components_["Date"], {
          date: date,
          visibleFormat: dateFormat
        }),
        value: date
      }, {
        display: productDisplay,
        value: productValue
      }, {
        display: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
          href: filePath,
          type: "external"
        }, fileName),
        value: fileName
      }, {
        display: Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
          href: Object(build_module["e" /* getAdminLink */])(`post.php?post=${orderId}&action=edit`),
          type: "wp-admin"
        }, orderNumber),
        value: orderNumber
      }, {
        display: username,
        value: username
      }, {
        display: ipAddress,
        value: ipAddress
      }];
    });
  }

  getSummary(totals) {
    const {
      download_count: downloadCount = 0
    } = totals;
    const {
      query,
      defaultDateRange
    } = this.props;
    const dates = Object(external_wc_date_["getCurrentDates"])(query, defaultDateRange);
    const after = external_moment_default()(dates.primary.after);
    const before = external_moment_default()(dates.primary.before);
    const days = before.diff(after, 'days') + 1;
    const currency = this.context.getCurrencyConfig();
    return [{
      label: Object(external_wp_i18n_["_n"])('day', 'days', days, 'woocommerce-admin'),
      value: Object(external_wc_number_["formatValue"])(currency, 'number', days)
    }, {
      label: Object(external_wp_i18n_["_n"])('Download', 'Downloads', downloadCount, 'woocommerce-admin'),
      value: Object(external_wc_number_["formatValue"])(currency, 'number', downloadCount)
    }];
  }

  render() {
    const {
      query,
      filters,
      advancedFilters
    } = this.props;
    return Object(external_wp_element_["createElement"])(report_table["a" /* default */], {
      endpoint: "downloads",
      getHeadersContent: this.getHeadersContent,
      getRowsContent: this.getRowsContent,
      getSummary: this.getSummary,
      summaryFields: ['download_count'],
      query: query,
      tableQuery: {
        _embed: true
      },
      title: Object(external_wp_i18n_["__"])('Downloads', 'woocommerce-admin'),
      columnPrefsKey: "downloads_report_columns",
      filters: filters,
      advancedFilters: advancedFilters
    });
  }

}

table_DownloadsReportTable.contextType = currency_context["a" /* CurrencyContext */];
/* harmony default export */ var table = (Object(external_wp_data_["withSelect"])(select => {
  const {
    woocommerce_default_date_range: defaultDateRange
  } = select(external_wc_data_["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings');
  return {
    defaultDateRange
  };
})(table_DownloadsReportTable));
// EXTERNAL MODULE: ./client/lib/get-selected-chart/index.js
var get_selected_chart = __webpack_require__(507);

// EXTERNAL MODULE: ./client/analytics/components/report-chart/index.js + 1 modules
var report_chart = __webpack_require__(505);

// EXTERNAL MODULE: ./client/analytics/components/report-summary/index.js
var report_summary = __webpack_require__(508);

// EXTERNAL MODULE: ./client/analytics/components/report-filters/index.js
var report_filters = __webpack_require__(502);

// CONCATENATED MODULE: ./client/analytics/report/downloads/index.js


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */







class downloads_DownloadsReport extends external_wp_element_["Component"] {
  render() {
    const {
      query,
      path
    } = this.props;
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(report_filters["a" /* default */], {
      query: query,
      path: path,
      filters: config["c" /* filters */],
      advancedFilters: config["a" /* advancedFilters */],
      report: "downloads"
    }), Object(external_wp_element_["createElement"])(report_summary["a" /* default */], {
      charts: config["b" /* charts */],
      endpoint: "downloads",
      query: query,
      selectedChart: Object(get_selected_chart["a" /* default */])(query.chart, config["b" /* charts */]),
      filters: config["c" /* filters */],
      advancedFilters: config["a" /* advancedFilters */]
    }), Object(external_wp_element_["createElement"])(report_chart["a" /* default */], {
      charts: config["b" /* charts */],
      endpoint: "downloads",
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
downloads_DownloadsReport.propTypes = {
  query: prop_types_default.a.object.isRequired
};

/***/ }),

/***/ 499:
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
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _analytics_report_taxes_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(500);
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

function getRequestByIdString(path, handleData = lodash__WEBPACK_IMPORTED_MODULE_2__["identity"]) {
  return function (queryString = '', query) {
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
  label: Object(_analytics_report_taxes_utils__WEBPACK_IMPORTED_MODULE_6__[/* getTaxCode */ "a"])(taxRate)
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

function getVariationName({
  attributes,
  name
}) {
  const separator = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_5__[/* getSetting */ "f"])('variationTitleAttributesSeparator', ' - ');

  if (name.indexOf(separator) > -1) {
    return name;
  }

  const attributeList = attributes.map(({
    option
  }) => option).join(', ');
  return attributeList ? name + separator + attributeList : name;
}
const getVariationLabels = getRequestByIdString(({
  products
}) => {
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

/***/ 500:
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

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return charts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return advancedFilters; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_async_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(499);
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


const DOWLOADS_REPORT_CHARTS_FILTER = 'woocommerce_admin_downloads_report_charts';
const DOWLOADS_REPORT_FILTERS_FILTER = 'woocommerce_admin_downloads_report_filters';
const DOWLOADS_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_downloads_report_advanced_filters';
const charts = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(DOWLOADS_REPORT_CHARTS_FILTER, [{
  key: 'download_count',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Downloads', 'woocommerce-admin'),
  type: 'number'
}]);
const filters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(DOWLOADS_REPORT_FILTERS_FILTER, [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Show', 'woocommerce-admin'),
  staticParams: ['chartType', 'paged', 'per_page'],
  param: 'filter',
  showFilters: () => true,
  filters: [{
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('All downloads', 'woocommerce-admin'),
    value: 'all'
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Advanced filters', 'woocommerce-admin'),
    value: 'advanced'
  }]
}]);
/*eslint-disable max-len*/

const advancedFilters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(DOWLOADS_REPORT_ADVANCED_FILTERS_FILTER, {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Downloads match {{select /}} filters', 'A sentence describing filters for Downloads. See screen shot for context: https://cloudup.com/ccxhyH2mEDg', 'woocommerce-admin'),
  filters: {
    product: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Product', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove product filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a product filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/ccxhyH2mEDg */
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('{{title}}Product{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select product', 'woocommerce-admin')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to products including a given product(s). Screenshot for context: https://cloudup.com/ccxhyH2mEDg */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Includes', 'products', 'woocommerce-admin')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to products excluding a products(s). Screenshot for context: https://cloudup.com/ccxhyH2mEDg */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Excludes', 'products', 'woocommerce-admin')
      }],
      input: {
        component: 'Search',
        type: 'products',
        getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_2__[/* getProductLabels */ "d"]
      }
    },
    customer: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Username', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search customer username', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove customer username filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a customer username filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a customer username filter. See screen shot for context: https://cloudup.com/ccxhyH2mEDg */
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('{{title}}Username{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select customer username', 'woocommerce-admin')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to customer usernames including a given username(s). Screenshot for context: https://cloudup.com/ccxhyH2mEDg */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Includes', 'customer usernames', 'woocommerce-admin')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to customer usernames excluding a given username(s). Screenshot for context: https://cloudup.com/ccxhyH2mEDg */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Excludes', 'customer usernames', 'woocommerce-admin')
      }],
      input: {
        component: 'Search',
        type: 'usernames',
        getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_2__[/* getCustomerLabels */ "c"]
      }
    },
    order: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Order #', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search order number', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove order number filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select a order number filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a order number filter. See screen shot for context: https://cloudup.com/ccxhyH2mEDg */
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('{{title}}Order #{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select order number', 'woocommerce-admin')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to order numbers including a given order(s). Screenshot for context: https://cloudup.com/ccxhyH2mEDg */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Includes', 'order numbers', 'woocommerce-admin')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to order numbers excluding a given order(s). Screenshot for context: https://cloudup.com/ccxhyH2mEDg */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Excludes', 'order numbers', 'woocommerce-admin')
      }],
      input: {
        component: 'Search',
        type: 'orders',
        getLabels: async value => {
          const orderIds = value.split(',');
          return await orderIds.map(orderId => ({
            id: orderId,
            label: '#' + orderId
          }));
        }
      }
    },
    ip_address: {
      labels: {
        add: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('IP Address', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search IP address', 'woocommerce-admin'),
        remove: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove IP address filter', 'woocommerce-admin'),
        rule: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select an IP address filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a order number filter. See screen shot for context: https://cloudup.com/ccxhyH2mEDg */
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('{{title}}IP Address{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select IP address', 'woocommerce-admin')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to IP addresses including a given address(s). Screenshot for context: https://cloudup.com/ccxhyH2mEDg */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Includes', 'IP addresses', 'woocommerce-admin')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to IP addresses excluding a given address(s). Screenshot for context: https://cloudup.com/ccxhyH2mEDg */
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["_x"])('Excludes', 'IP addresses', 'woocommerce-admin')
      }],
      input: {
        component: 'Search',
        type: 'downloadIps',
        getLabels: async value => {
          const ips = value.split(',');
          return await ips.map(ip => {
            return {
              id: ip,
              label: ip
            };
          });
        }
      }
    }
  }
});
/*eslint-enable max-len*/

/***/ })

}]);