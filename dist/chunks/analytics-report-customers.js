(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[9],{

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ customers_CustomersReport; });

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","htmlEntities"]
var external_wp_htmlEntities_ = __webpack_require__(28);

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(30);

// EXTERNAL MODULE: ./packages/wc-admin-settings/build-module/index.js
var build_module = __webpack_require__(13);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(11);

// EXTERNAL MODULE: ./client/lib/async-requests/index.js
var async_requests = __webpack_require__(499);

// CONCATENATED MODULE: ./client/analytics/report/customers/config.js
/**
 * External dependencies
 */





const {
  countries
} = Object(build_module["f" /* getSetting */])('dataEndpoints', {
  countries: {}
});
/**
 * Internal dependencies
 */


const CUSTOMERS_REPORT_FILTERS_FILTER = 'woocommerce_admin_customers_report_filters';
const CUSTOMERS_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_customers_report_advanced_filters';
const config_filters = Object(external_wp_hooks_["applyFilters"])(CUSTOMERS_REPORT_FILTERS_FILTER, [{
  label: Object(external_wp_i18n_["__"])('Show', 'woocommerce-admin'),
  staticParams: ['paged', 'per_page'],
  param: 'filter',
  showFilters: () => true,
  filters: [{
    label: Object(external_wp_i18n_["__"])('All Customers', 'woocommerce-admin'),
    value: 'all'
  }, {
    label: Object(external_wp_i18n_["__"])('Single Customer', 'woocommerce-admin'),
    value: 'select_customer',
    chartMode: 'item-comparison',
    subFilters: [{
      component: 'Search',
      value: 'single_customer',
      chartMode: 'item-comparison',
      path: ['select_customer'],
      settings: {
        type: 'customers',
        param: 'customers',
        getLabels: async_requests["c" /* getCustomerLabels */],
        labels: {
          placeholder: Object(external_wp_i18n_["__"])('Type to search for a customer', 'woocommerce-admin'),
          button: Object(external_wp_i18n_["__"])('Single Customer', 'woocommerce-admin')
        }
      }
    }]
  }, {
    label: Object(external_wp_i18n_["__"])('Advanced filters', 'woocommerce-admin'),
    value: 'advanced'
  }]
}]);
/*eslint-disable max-len*/

const config_advancedFilters = Object(external_wp_hooks_["applyFilters"])(CUSTOMERS_REPORT_ADVANCED_FILTERS_FILTER, {
  title: Object(external_wp_i18n_["_x"])('Customers match {{select /}} filters', 'A sentence describing filters for Customers. See screen shot for context: https://cloudup.com/cCsm3GeXJbE', 'woocommerce-admin'),
  filters: {
    name: {
      labels: {
        add: Object(external_wp_i18n_["__"])('Name', 'woocommerce-admin'),
        placeholder: Object(external_wp_i18n_["__"])('Search', 'woocommerce-admin'),
        remove: Object(external_wp_i18n_["__"])('Remove customer name filter', 'woocommerce-admin'),
        rule: Object(external_wp_i18n_["__"])('Select a customer name filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cCsm3GeXJbE */
        title: Object(external_wp_i18n_["__"])('{{title}}Name{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(external_wp_i18n_["__"])('Select customer name', 'woocommerce-admin')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to customer names including a given name(s). Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: Object(external_wp_i18n_["_x"])('Includes', 'customer names', 'woocommerce-admin')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to customer names excluding a given name(s). Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: Object(external_wp_i18n_["_x"])('Excludes', 'customer names', 'woocommerce-admin')
      }],
      input: {
        component: 'Search',
        type: 'customers',
        getLabels: Object(async_requests["e" /* getRequestByIdString */])(external_wc_data_["NAMESPACE"] + '/customers', customer => ({
          id: customer.id,
          label: customer.name
        }))
      }
    },
    country: {
      labels: {
        add: Object(external_wp_i18n_["__"])('Country / Region', 'woocommerce-admin'),
        placeholder: Object(external_wp_i18n_["__"])('Search', 'woocommerce-admin'),
        remove: Object(external_wp_i18n_["__"])('Remove country / region filter', 'woocommerce-admin'),
        rule: Object(external_wp_i18n_["__"])('Select a country / region filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cCsm3GeXJbE */
        title: Object(external_wp_i18n_["__"])('{{title}}Country / Region{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(external_wp_i18n_["__"])('Select country / region', 'woocommerce-admin')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to countries including a given country or countries. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: Object(external_wp_i18n_["_x"])('Includes', 'countries', 'woocommerce-admin')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to countries excluding a given country or countries. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: Object(external_wp_i18n_["_x"])('Excludes', 'countries', 'woocommerce-admin')
      }],
      input: {
        component: 'Search',
        type: 'countries',
        getLabels: async value => {
          const allLabels = countries.map(country => ({
            key: country.code,
            label: Object(external_wp_htmlEntities_["decodeEntities"])(country.name)
          }));
          const labels = value.split(',');
          return await allLabels.filter(label => {
            return labels.includes(label.key);
          });
        }
      }
    },
    username: {
      labels: {
        add: Object(external_wp_i18n_["__"])('Username', 'woocommerce-admin'),
        placeholder: Object(external_wp_i18n_["__"])('Search customer username', 'woocommerce-admin'),
        remove: Object(external_wp_i18n_["__"])('Remove customer username filter', 'woocommerce-admin'),
        rule: Object(external_wp_i18n_["__"])('Select a customer username filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a customer username filter. See screen shot for context: https://cloudup.com/cCsm3GeXJbE */
        title: Object(external_wp_i18n_["__"])('{{title}}Username{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(external_wp_i18n_["__"])('Select customer username', 'woocommerce-admin')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to customer usernames including a given username(s). Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: Object(external_wp_i18n_["_x"])('Includes', 'customer usernames', 'woocommerce-admin')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to customer usernames excluding a given username(s). Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: Object(external_wp_i18n_["_x"])('Excludes', 'customer usernames', 'woocommerce-admin')
      }],
      input: {
        component: 'Search',
        type: 'usernames',
        getLabels: async_requests["c" /* getCustomerLabels */]
      }
    },
    email: {
      labels: {
        add: Object(external_wp_i18n_["__"])('Email', 'woocommerce-admin'),
        placeholder: Object(external_wp_i18n_["__"])('Search customer email', 'woocommerce-admin'),
        remove: Object(external_wp_i18n_["__"])('Remove customer email filter', 'woocommerce-admin'),
        rule: Object(external_wp_i18n_["__"])('Select a customer email filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a customer email filter. See screen shot for context: https://cloudup.com/cCsm3GeXJbE */
        title: Object(external_wp_i18n_["__"])('{{title}}Email{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(external_wp_i18n_["__"])('Select customer email', 'woocommerce-admin')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to customer emails including a given email(s). Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: Object(external_wp_i18n_["_x"])('Includes', 'customer emails', 'woocommerce-admin')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to customer emails excluding a given email(s). Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: Object(external_wp_i18n_["_x"])('Excludes', 'customer emails', 'woocommerce-admin')
      }],
      input: {
        component: 'Search',
        type: 'emails',
        getLabels: Object(async_requests["e" /* getRequestByIdString */])(external_wc_data_["NAMESPACE"] + '/customers', customer => ({
          id: customer.id,
          label: customer.email
        }))
      }
    },
    orders_count: {
      labels: {
        add: Object(external_wp_i18n_["__"])('No. of Orders', 'woocommerce-admin'),
        remove: Object(external_wp_i18n_["__"])('Remove order filter', 'woocommerce-admin'),
        rule: Object(external_wp_i18n_["__"])('Select an order count filter match', 'woocommerce-admin'),
        title: Object(external_wp_i18n_["__"])('{{title}}No. of Orders{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin')
      },
      rules: [{
        value: 'max',

        /* translators: Sentence fragment, logical, "Less Than" refers to number of orders a customer has placed, less than a given amount. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: Object(external_wp_i18n_["_x"])('Less Than', 'number of orders', 'woocommerce-admin')
      }, {
        value: 'min',

        /* translators: Sentence fragment, logical, "More Than" refers to number of orders a customer has placed, more than a given amount. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: Object(external_wp_i18n_["_x"])('More Than', 'number of orders', 'woocommerce-admin')
      }, {
        value: 'between',

        /* translators: Sentence fragment, logical, "Between" refers to number of orders a customer has placed, between two given integers. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: Object(external_wp_i18n_["_x"])('Between', 'number of orders', 'woocommerce-admin')
      }],
      input: {
        component: 'Number'
      }
    },
    total_spend: {
      labels: {
        add: Object(external_wp_i18n_["__"])('Total Spend', 'woocommerce-admin'),
        remove: Object(external_wp_i18n_["__"])('Remove total spend filter', 'woocommerce-admin'),
        rule: Object(external_wp_i18n_["__"])('Select a total spend filter match', 'woocommerce-admin'),
        title: Object(external_wp_i18n_["__"])('{{title}}Total Spend{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin')
      },
      rules: [{
        value: 'max',

        /* translators: Sentence fragment, logical, "Less Than" refers to total spending by a customer, less than a given amount. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: Object(external_wp_i18n_["_x"])('Less Than', 'total spend by customer', 'woocommerce-admin')
      }, {
        value: 'min',

        /* translators: Sentence fragment, logical, "Less Than" refers to total spending by a customer, more than a given amount. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: Object(external_wp_i18n_["_x"])('More Than', 'total spend by customer', 'woocommerce-admin')
      }, {
        value: 'between',

        /* translators: Sentence fragment, logical, "Between" refers to total spending by a customer, between two given amounts. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: Object(external_wp_i18n_["_x"])('Between', 'total spend by customer', 'woocommerce-admin')
      }],
      input: {
        component: 'Currency'
      }
    },
    avg_order_value: {
      labels: {
        add: Object(external_wp_i18n_["__"])('AOV', 'woocommerce-admin'),
        remove: Object(external_wp_i18n_["__"])('Remove average order value filter', 'woocommerce-admin'),
        rule: Object(external_wp_i18n_["__"])('Select an average order value filter match', 'woocommerce-admin'),
        title: Object(external_wp_i18n_["__"])('{{title}}AOV{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin')
      },
      rules: [{
        value: 'max',

        /* translators: Sentence fragment, logical, "Less Than" refers to average order value of a customer, more than a given amount. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: Object(external_wp_i18n_["_x"])('Less Than', 'average order value of customer', 'woocommerce-admin')
      }, {
        value: 'min',

        /* translators: Sentence fragment, logical, "Less Than" refers to average order value of a customer, less than a given amount. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: Object(external_wp_i18n_["_x"])('More Than', 'average order value of customer', 'woocommerce-admin')
      }, {
        value: 'between',

        /* translators: Sentence fragment, logical, "Between" refers to average order value of a customer, between two given amounts. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: Object(external_wp_i18n_["_x"])('Between', 'average order value of customer', 'woocommerce-admin')
      }],
      input: {
        component: 'Currency'
      }
    },
    registered: {
      labels: {
        add: Object(external_wp_i18n_["__"])('Registered', 'woocommerce-admin'),
        remove: Object(external_wp_i18n_["__"])('Remove registered filter', 'woocommerce-admin'),
        rule: Object(external_wp_i18n_["__"])('Select a registered filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cCsm3GeXJbE */
        title: Object(external_wp_i18n_["__"])('{{title}}Registered{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(external_wp_i18n_["__"])('Select registered date', 'woocommerce-admin')
      },
      rules: [{
        value: 'before',

        /* translators: Sentence fragment, logical, "Before" refers to customers registered before a given date. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: Object(external_wp_i18n_["_x"])('Before', 'date', 'woocommerce-admin')
      }, {
        value: 'after',

        /* translators: Sentence fragment, logical, "after" refers to customers registered after a given date. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: Object(external_wp_i18n_["_x"])('After', 'date', 'woocommerce-admin')
      }, {
        value: 'between',

        /* translators: Sentence fragment, logical, "Between" refers to average order value of a customer, between two given amounts. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: Object(external_wp_i18n_["_x"])('Between', 'date', 'woocommerce-admin')
      }],
      input: {
        component: 'Date'
      }
    },
    last_active: {
      labels: {
        add: Object(external_wp_i18n_["__"])('Last active', 'woocommerce-admin'),
        remove: Object(external_wp_i18n_["__"])('Remove last active filter', 'woocommerce-admin'),
        rule: Object(external_wp_i18n_["__"])('Select a last active filter match', 'woocommerce-admin'),

        /* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cCsm3GeXJbE */
        title: Object(external_wp_i18n_["__"])('{{title}}Last active{{/title}} {{rule /}} {{filter /}}', 'woocommerce-admin'),
        filter: Object(external_wp_i18n_["__"])('Select registered date', 'woocommerce-admin')
      },
      rules: [{
        value: 'before',

        /* translators: Sentence fragment, logical, "Before" refers to customers registered before a given date. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: Object(external_wp_i18n_["_x"])('Before', 'date', 'woocommerce-admin')
      }, {
        value: 'after',

        /* translators: Sentence fragment, logical, "after" refers to customers registered after a given date. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: Object(external_wp_i18n_["_x"])('After', 'date', 'woocommerce-admin')
      }, {
        value: 'between',

        /* translators: Sentence fragment, logical, "Between" refers to average order value of a customer, between two given amounts. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: Object(external_wp_i18n_["_x"])('Between', 'date', 'woocommerce-admin')
      }],
      input: {
        component: 'Date'
      }
    }
  }
});
/*eslint-enable max-len*/
// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(4);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(21);

// EXTERNAL MODULE: external ["wc","number"]
var external_wc_number_ = __webpack_require__(120);

// EXTERNAL MODULE: external ["wc","date"]
var external_wc_date_ = __webpack_require__(19);

// EXTERNAL MODULE: ./client/analytics/components/report-table/index.js + 2 modules
var report_table = __webpack_require__(503);

// EXTERNAL MODULE: ./client/lib/currency-context.js
var currency_context = __webpack_require__(498);

// CONCATENATED MODULE: ./client/analytics/report/customers/table.js


/**
 * External dependencies
 */







/**
 * Internal dependencies
 */



const {
  countries: table_countries
} = Object(build_module["f" /* getSetting */])('dataEndpoints', {
  countries: {}
});

class table_CustomersReportTable extends external_wp_element_["Component"] {
  constructor() {
    super();
    this.getHeadersContent = this.getHeadersContent.bind(this);
    this.getRowsContent = this.getRowsContent.bind(this);
    this.getSummary = this.getSummary.bind(this);
  }

  getHeadersContent() {
    return [{
      label: Object(external_wp_i18n_["__"])('Name', 'woocommerce-admin'),
      key: 'name',
      required: true,
      isLeftAligned: true,
      isSortable: true
    }, {
      label: Object(external_wp_i18n_["__"])('Username', 'woocommerce-admin'),
      key: 'username',
      hiddenByDefault: true
    }, {
      label: Object(external_wp_i18n_["__"])('Last active', 'woocommerce-admin'),
      key: 'date_last_active',
      defaultSort: true,
      isSortable: true
    }, {
      label: Object(external_wp_i18n_["__"])('Date registered', 'woocommerce-admin'),
      key: 'date_registered',
      isSortable: true
    }, {
      label: Object(external_wp_i18n_["__"])('Email', 'woocommerce-admin'),
      key: 'email'
    }, {
      label: Object(external_wp_i18n_["__"])('Orders', 'woocommerce-admin'),
      key: 'orders_count',
      isSortable: true,
      isNumeric: true
    }, {
      label: Object(external_wp_i18n_["__"])('Total spend', 'woocommerce-admin'),
      key: 'total_spend',
      isSortable: true,
      isNumeric: true
    }, {
      label: Object(external_wp_i18n_["__"])('AOV', 'woocommerce-admin'),
      screenReaderLabel: Object(external_wp_i18n_["__"])('Average order value', 'woocommerce-admin'),
      key: 'avg_order_value',
      isNumeric: true
    }, {
      label: Object(external_wp_i18n_["__"])('Country / Region', 'woocommerce-admin'),
      key: 'country',
      isSortable: true
    }, {
      label: Object(external_wp_i18n_["__"])('City', 'woocommerce-admin'),
      key: 'city',
      hiddenByDefault: true,
      isSortable: true
    }, {
      label: Object(external_wp_i18n_["__"])('Region', 'woocommerce-admin'),
      key: 'state',
      hiddenByDefault: true,
      isSortable: true
    }, {
      label: Object(external_wp_i18n_["__"])('Postal code', 'woocommerce-admin'),
      key: 'postcode',
      hiddenByDefault: true,
      isSortable: true
    }];
  }

  getCountryName(code) {
    return typeof table_countries[code] !== 'undefined' ? table_countries[code] : null;
  }

  getRowsContent(customers) {
    const dateFormat = Object(build_module["f" /* getSetting */])('dateFormat', external_wc_date_["defaultTableDateFormat"]);
    const {
      formatAmount,
      formatDecimal: getCurrencyFormatDecimal,
      getCurrencyConfig
    } = this.context;
    return customers === null || customers === void 0 ? void 0 : customers.map(customer => {
      const {
        avg_order_value: avgOrderValue,
        date_last_active: dateLastActive,
        date_registered: dateRegistered,
        email,
        name,
        user_id: userId,
        orders_count: ordersCount,
        username,
        total_spend: totalSpend,
        postcode,
        city,
        state,
        country
      } = customer;
      const countryName = this.getCountryName(country);
      const customerNameLink = userId ? Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
        href: Object(build_module["e" /* getAdminLink */])('user-edit.php?user_id=' + userId),
        type: "wp-admin"
      }, name) : name;
      const dateLastActiveDisplay = dateLastActive ? Object(external_wp_element_["createElement"])(external_wc_components_["Date"], {
        date: dateLastActive,
        visibleFormat: dateFormat
      }) : '—';
      const dateRegisteredDisplay = dateRegistered ? Object(external_wp_element_["createElement"])(external_wc_components_["Date"], {
        date: dateRegistered,
        visibleFormat: dateFormat
      }) : '—';
      const countryDisplay = Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Tooltip"], {
        text: countryName
      }, Object(external_wp_element_["createElement"])("span", {
        "aria-hidden": "true"
      }, country)), Object(external_wp_element_["createElement"])("span", {
        className: "screen-reader-text"
      }, countryName));
      return [{
        display: customerNameLink,
        value: name
      }, {
        display: username,
        value: username
      }, {
        display: dateLastActiveDisplay,
        value: dateLastActive
      }, {
        display: dateRegisteredDisplay,
        value: dateRegistered
      }, {
        display: Object(external_wp_element_["createElement"])("a", {
          href: 'mailto:' + email
        }, email),
        value: email
      }, {
        display: Object(external_wc_number_["formatValue"])(getCurrencyConfig(), 'number', ordersCount),
        value: ordersCount
      }, {
        display: formatAmount(totalSpend),
        value: getCurrencyFormatDecimal(totalSpend)
      }, {
        display: formatAmount(avgOrderValue),
        value: getCurrencyFormatDecimal(avgOrderValue)
      }, {
        display: countryDisplay,
        value: country
      }, {
        display: city,
        value: city
      }, {
        display: state,
        value: state
      }, {
        display: postcode,
        value: postcode
      }];
    });
  }

  getSummary(totals) {
    const {
      customers_count: customersCount = 0,
      avg_orders_count: avgOrdersCount = 0,
      avg_total_spend: avgTotalSpend = 0,
      avg_avg_order_value: avgAvgOrderValue = 0
    } = totals;
    const {
      formatAmount,
      getCurrencyConfig
    } = this.context;
    const currency = getCurrencyConfig();
    return [{
      label: Object(external_wp_i18n_["_n"])('customer', 'customers', customersCount, 'woocommerce-admin'),
      value: Object(external_wc_number_["formatValue"])(currency, 'number', customersCount)
    }, {
      label: Object(external_wp_i18n_["_n"])('Average order', 'Average orders', avgOrdersCount, 'woocommerce-admin'),
      value: Object(external_wc_number_["formatValue"])(currency, 'number', avgOrdersCount)
    }, {
      label: Object(external_wp_i18n_["__"])('Average lifetime spend', 'woocommerce-admin'),
      value: formatAmount(avgTotalSpend)
    }, {
      label: Object(external_wp_i18n_["__"])('Average order value', 'woocommerce-admin'),
      value: formatAmount(avgAvgOrderValue)
    }];
  }

  render() {
    const {
      isRequesting,
      query,
      filters,
      advancedFilters
    } = this.props;
    return Object(external_wp_element_["createElement"])(report_table["a" /* default */], {
      endpoint: "customers",
      getHeadersContent: this.getHeadersContent,
      getRowsContent: this.getRowsContent,
      getSummary: this.getSummary,
      summaryFields: ['customers_count', 'avg_orders_count', 'avg_total_spend', 'avg_avg_order_value'],
      isRequesting: isRequesting,
      itemIdField: "id",
      query: query,
      labels: {
        placeholder: Object(external_wp_i18n_["__"])('Search by customer name', 'woocommerce-admin')
      },
      searchBy: "customers",
      title: Object(external_wp_i18n_["__"])('Customers', 'woocommerce-admin'),
      columnPrefsKey: "customers_report_columns",
      filters: filters,
      advancedFilters: advancedFilters
    });
  }

}

table_CustomersReportTable.contextType = currency_context["a" /* CurrencyContext */];
/* harmony default export */ var table = (table_CustomersReportTable);
// EXTERNAL MODULE: ./client/analytics/components/report-filters/index.js
var report_filters = __webpack_require__(502);

// CONCATENATED MODULE: ./client/analytics/report/customers/index.js


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */




class customers_CustomersReport extends external_wp_element_["Component"] {
  render() {
    const {
      isRequesting,
      query,
      path
    } = this.props;
    const tableQuery = {
      orderby: 'date_last_active',
      order: 'desc',
      ...query
    };
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(report_filters["a" /* default */], {
      query: query,
      path: path,
      filters: config_filters,
      showDatePicker: false,
      advancedFilters: config_advancedFilters,
      report: "customers"
    }), Object(external_wp_element_["createElement"])(table, {
      isRequesting: isRequesting,
      query: tableQuery,
      filters: config_filters,
      advancedFilters: config_advancedFilters
    }));
  }

}
customers_CustomersReport.propTypes = {
  query: prop_types_default.a.object.isRequired
};

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFilteredCurrencyInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyContext; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_currency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88);
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

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
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

function ReportError({
  className
}) {
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

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_date__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_currency_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(498);
/* harmony import */ var _customer_effort_score_tracks_data_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54);


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
    Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__["recordEvent"])('datepicker_update', {
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

    Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__["recordEvent"])('analytics_filter', eventProperties);
  }

  onAdvancedFilterAction(action, data) {
    const {
      report,
      addCesSurveyForAnalytics
    } = this.props;

    switch (action) {
      case 'add':
        Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__["recordEvent"])('analytics_filters_add', {
          report,
          filter: data.key
        });
        break;

      case 'remove':
        Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__["recordEvent"])('analytics_filters_remove', {
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
        Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__["recordEvent"])('analytics_filters_filter', {
          report,
          ...snakeCaseData
        });
        break;

      case 'clear_all':
        Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__["recordEvent"])('analytics_filters_clear_all', {
          report
        });
        break;

      case 'match':
        Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__["recordEvent"])('analytics_filters_all_any', {
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
    } = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_8__["getDateParamsFromQuery"])(query, defaultDateRange);
    const {
      primary: primaryDate,
      secondary: secondaryDate
    } = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_8__["getCurrentDates"])(query, defaultDateRange);
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
      siteLocale: _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_6__[/* LOCALE */ "b"].siteLocale,
      currency: Currency.getCurrencyConfig(),
      path: path,
      filters: filters,
      advancedFilters: advancedFilters,
      showDatePicker: showDatePicker,
      onDateSelect: this.onDateSelect,
      onFilterSelect: this.onFilterSelect,
      onAdvancedFilterAction: this.onAdvancedFilterAction,
      dateQuery: dateQuery,
      isoDateFormat: _woocommerce_date__WEBPACK_IMPORTED_MODULE_8__["isoDateFormat"]
    });
  }

}

ReportFilters.contextType = _lib_currency_context__WEBPACK_IMPORTED_MODULE_10__[/* CurrencyContext */ "a"];
/* harmony default export */ __webpack_exports__["a"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])(select => {
  const {
    woocommerce_default_date_range: defaultDateRange
  } = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings');
  return {
    defaultDateRange
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withDispatch"])(dispatch => {
  const {
    addCesSurveyForAnalytics
  } = dispatch(_customer_effort_score_tracks_data_constants__WEBPACK_IMPORTED_MODULE_11__[/* STORE_KEY */ "c"]);
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

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(35);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(4);

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(30);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(14);

// EXTERNAL MODULE: external ["wp","dom"]
var external_wp_dom_ = __webpack_require__(90);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(7);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(21);

// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(12);

// EXTERNAL MODULE: external ["wc","csvExport"]
var external_wc_csvExport_ = __webpack_require__(471);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(11);

// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(16);

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
var report_error = __webpack_require__(501);

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
var constants = __webpack_require__(54);

// EXTERNAL MODULE: ./client/analytics/components/report-table/style.scss
var style = __webpack_require__(512);

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
      downloadType
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

  if (isRequesting) {
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

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);