(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[12],{

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(12);
var $trim = __webpack_require__(188).trim;
var forcedStringTrimMethod = __webpack_require__(404);

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(6);
var whitespaces = __webpack_require__(189);

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ customers_CustomersReport; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(7);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(22);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(23);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(24);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(25);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(14);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external "regeneratorRuntime"
var external_regeneratorRuntime_ = __webpack_require__(16);
var external_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_regeneratorRuntime_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(134);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(177);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(88);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(140);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","htmlEntities"]
var external_wp_htmlEntities_ = __webpack_require__(132);

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(141);

// EXTERNAL MODULE: ./client/wc-admin-settings/index.js
var wc_admin_settings = __webpack_require__(85);

// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(59);

// EXTERNAL MODULE: ./client/lib/async-requests/index.js
var async_requests = __webpack_require__(600);

// CONCATENATED MODULE: ./client/analytics/report/customers/config.js










/**
 * External dependencies
 */






var _getSetting = Object(wc_admin_settings["g" /* getSetting */])('dataEndpoints', {
  countries: {}
}),
    countries = _getSetting.countries;
/**
 * Internal dependencies
 */



var CUSTOMERS_REPORT_FILTERS_FILTER = 'woocommerce_admin_customers_report_filters';
var CUSTOMERS_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_customers_report_advanced_filters';
var config_filters = Object(external_wp_hooks_["applyFilters"])(CUSTOMERS_REPORT_FILTERS_FILTER, [{
  label: Object(external_wp_i18n_["__"])('Show', 'woocommerce-admin'),
  staticParams: ['paged', 'per_page'],
  param: 'filter',
  showFilters: function showFilters() {
    return true;
  },
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
    label: Object(external_wp_i18n_["__"])('Advanced Filters', 'woocommerce-admin'),
    value: 'advanced'
  }]
}]);
/*eslint-disable max-len*/

var config_advancedFilters = Object(external_wp_hooks_["applyFilters"])(CUSTOMERS_REPORT_ADVANCED_FILTERS_FILTER, {
  title: Object(external_wp_i18n_["_x"])('Customers Match {{select /}} Filters', 'A sentence describing filters for Customers. See screen shot for context: https://cloudup.com/cCsm3GeXJbE', 'woocommerce-admin'),
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
        getLabels: Object(async_requests["e" /* getRequestByIdString */])(external_wc_data_["NAMESPACE"] + '/customers', function (customer) {
          return {
            id: customer.id,
            label: customer.name
          };
        })
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
        getLabels: function () {
          var _getLabels = asyncToGenerator_default()( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee(value) {
            var allLabels, labels;
            return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    allLabels = countries.map(function (country) {
                      return {
                        key: country.code,
                        label: Object(external_wp_htmlEntities_["decodeEntities"])(country.name)
                      };
                    });
                    labels = value.split(',');
                    _context.next = 4;
                    return allLabels.filter(function (label) {
                      return labels.includes(label.key);
                    });

                  case 4:
                    return _context.abrupt("return", _context.sent);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function getLabels(_x2) {
            return _getLabels.apply(this, arguments);
          }

          return getLabels;
        }()
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
        getLabels: Object(async_requests["e" /* getRequestByIdString */])(external_wc_data_["NAMESPACE"] + '/customers', function (customer) {
          return {
            id: customer.id,
            label: customer.email
          };
        })
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(18);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(4);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(145);

// EXTERNAL MODULE: external ["wc","number"]
var external_wc_number_ = __webpack_require__(281);

// EXTERNAL MODULE: external ["wc","date"]
var external_wc_date_ = __webpack_require__(101);

// EXTERNAL MODULE: ./client/analytics/components/report-table/index.js + 2 modules
var report_table = __webpack_require__(606);

// EXTERNAL MODULE: ./client/lib/currency-context.js
var currency_context = __webpack_require__(598);

// CONCATENATED MODULE: ./client/analytics/report/customers/table.js











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */







/**
 * Internal dependencies
 */




var table_getSetting = Object(wc_admin_settings["g" /* getSetting */])('dataEndpoints', {
  countries: {}
}),
    table_countries = table_getSetting.countries;

var table_CustomersReportTable = /*#__PURE__*/function (_Component) {
  inherits_default()(CustomersReportTable, _Component);

  var _super = _createSuper(CustomersReportTable);

  function CustomersReportTable() {
    var _this;

    classCallCheck_default()(this, CustomersReportTable);

    _this = _super.call(this);
    _this.getHeadersContent = _this.getHeadersContent.bind(assertThisInitialized_default()(_this));
    _this.getRowsContent = _this.getRowsContent.bind(assertThisInitialized_default()(_this));
    _this.getSummary = _this.getSummary.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(CustomersReportTable, [{
    key: "getHeadersContent",
    value: function getHeadersContent() {
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
        label: Object(external_wp_i18n_["__"])('Last Active', 'woocommerce-admin'),
        key: 'date_last_active',
        defaultSort: true,
        isSortable: true
      }, {
        label: Object(external_wp_i18n_["__"])('Date Registered', 'woocommerce-admin'),
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
        label: Object(external_wp_i18n_["__"])('Total Spend', 'woocommerce-admin'),
        key: 'total_spend',
        isSortable: true,
        isNumeric: true
      }, {
        label: Object(external_wp_i18n_["__"])('AOV', 'woocommerce-admin'),
        screenReaderLabel: Object(external_wp_i18n_["__"])('Average Order Value', 'woocommerce-admin'),
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
        label: Object(external_wp_i18n_["__"])('Postal Code', 'woocommerce-admin'),
        key: 'postcode',
        hiddenByDefault: true,
        isSortable: true
      }];
    }
  }, {
    key: "getCountryName",
    value: function getCountryName(code) {
      return typeof table_countries[code] !== 'undefined' ? table_countries[code] : null;
    }
  }, {
    key: "getRowsContent",
    value: function getRowsContent(customers) {
      var _this2 = this;

      var dateFormat = Object(wc_admin_settings["g" /* getSetting */])('dateFormat', external_wc_date_["defaultTableDateFormat"]);
      var _this$context = this.context,
          formatAmount = _this$context.formatAmount,
          getCurrencyFormatDecimal = _this$context.formatDecimal,
          getCurrencyConfig = _this$context.getCurrencyConfig;
      return customers === null || customers === void 0 ? void 0 : customers.map(function (customer) {
        var avgOrderValue = customer.avg_order_value,
            dateLastActive = customer.date_last_active,
            dateRegistered = customer.date_registered,
            email = customer.email,
            name = customer.name,
            userId = customer.user_id,
            ordersCount = customer.orders_count,
            username = customer.username,
            totalSpend = customer.total_spend,
            postcode = customer.postcode,
            city = customer.city,
            state = customer.state,
            country = customer.country;

        var countryName = _this2.getCountryName(country);

        var customerNameLink = userId ? Object(external_wp_element_["createElement"])(external_wc_components_["Link"], {
          href: Object(wc_admin_settings["f" /* getAdminLink */])('user-edit.php?user_id=' + userId),
          type: "wp-admin"
        }, name) : name;
        var dateLastActiveDisplay = dateLastActive ? Object(external_wp_element_["createElement"])(external_wc_components_["Date"], {
          date: dateLastActive,
          visibleFormat: dateFormat
        }) : '—';
        var dateRegisteredDisplay = dateRegistered ? Object(external_wp_element_["createElement"])(external_wc_components_["Date"], {
          date: dateRegistered,
          visibleFormat: dateFormat
        }) : '—';
        var countryDisplay = Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Tooltip"], {
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
  }, {
    key: "getSummary",
    value: function getSummary(totals) {
      var _totals$customers_cou = totals.customers_count,
          customersCount = _totals$customers_cou === void 0 ? 0 : _totals$customers_cou,
          _totals$avg_orders_co = totals.avg_orders_count,
          avgOrdersCount = _totals$avg_orders_co === void 0 ? 0 : _totals$avg_orders_co,
          _totals$avg_total_spe = totals.avg_total_spend,
          avgTotalSpend = _totals$avg_total_spe === void 0 ? 0 : _totals$avg_total_spe,
          _totals$avg_avg_order = totals.avg_avg_order_value,
          avgAvgOrderValue = _totals$avg_avg_order === void 0 ? 0 : _totals$avg_avg_order;
      var _this$context2 = this.context,
          formatAmount = _this$context2.formatAmount,
          getCurrencyConfig = _this$context2.getCurrencyConfig;
      var currency = getCurrencyConfig();
      return [{
        label: Object(external_wp_i18n_["_n"])('customer', 'customers', customersCount, 'woocommerce-admin'),
        value: Object(external_wc_number_["formatValue"])(currency, 'number', customersCount)
      }, {
        label: Object(external_wp_i18n_["_n"])('average order', 'average orders', avgOrdersCount, 'woocommerce-admin'),
        value: Object(external_wc_number_["formatValue"])(currency, 'number', avgOrdersCount)
      }, {
        label: Object(external_wp_i18n_["__"])('average lifetime spend', 'woocommerce-admin'),
        value: formatAmount(avgTotalSpend)
      }, {
        label: Object(external_wp_i18n_["__"])('average order value', 'woocommerce-admin'),
        value: formatAmount(avgAvgOrderValue)
      }];
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isRequesting = _this$props.isRequesting,
          query = _this$props.query,
          filters = _this$props.filters,
          advancedFilters = _this$props.advancedFilters;
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
  }]);

  return CustomersReportTable;
}(external_wp_element_["Component"]);

table_CustomersReportTable.contextType = currency_context["a" /* CurrencyContext */];
/* harmony default export */ var table = (table_CustomersReportTable);
// EXTERNAL MODULE: ./client/analytics/components/report-filters/index.js
var report_filters = __webpack_require__(605);

// CONCATENATED MODULE: ./client/analytics/report/customers/index.js















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function customers_createSuper(Derived) { var hasNativeReflectConstruct = customers_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function customers_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */





var customers_CustomersReport = /*#__PURE__*/function (_Component) {
  inherits_default()(CustomersReport, _Component);

  var _super = customers_createSuper(CustomersReport);

  function CustomersReport() {
    classCallCheck_default()(this, CustomersReport);

    return _super.apply(this, arguments);
  }

  createClass_default()(CustomersReport, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isRequesting = _this$props.isRequesting,
          query = _this$props.query,
          path = _this$props.path;

      var tableQuery = _objectSpread({
        orderby: 'date_last_active',
        order: 'desc'
      }, query);

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
  }]);

  return CustomersReport;
}(external_wp_element_["Component"]);


customers_CustomersReport.propTypes = {
  query: prop_types_default.a.object.isRequired
};

/***/ }),

/***/ 600:
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
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(164);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(100);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(139);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(129);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85);
/* harmony import */ var _analytics_report_taxes_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(601);






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
  var handleData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : lodash__WEBPACK_IMPORTED_MODULE_7__["identity"];
  return function () {
    var queryString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var query = arguments.length > 1 ? arguments[1] : undefined;
    var pathString = typeof path === 'function' ? path(query) : path;
    var idList = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_8__["getIdsFromQuery"])(queryString);

    if (idList.length < 1) {
      return Promise.resolve([]);
    }

    var payload = {
      include: idList.join(','),
      per_page: idList.length
    };
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default()({
      path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_5__["addQueryArgs"])(pathString, payload)
    }).then(function (data) {
      return data.map(handleData);
    });
  };
}
var getAttributeLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_9__["NAMESPACE"] + '/products/attributes', function (attribute) {
  return {
    key: attribute.id,
    label: attribute.name
  };
});
var getCategoryLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_9__["NAMESPACE"] + '/products/categories', function (category) {
  return {
    key: category.id,
    label: category.name
  };
});
var getCouponLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_9__["NAMESPACE"] + '/coupons', function (coupon) {
  return {
    key: coupon.id,
    label: coupon.code
  };
});
var getCustomerLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_9__["NAMESPACE"] + '/customers', function (customer) {
  return {
    key: customer.id,
    label: customer.name
  };
});
var getProductLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_9__["NAMESPACE"] + '/products', function (product) {
  return {
    key: product.id,
    label: product.name
  };
});
var getTaxRateLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_9__["NAMESPACE"] + '/taxes', function (taxRate) {
  return {
    key: taxRate.id,
    label: Object(_analytics_report_taxes_utils__WEBPACK_IMPORTED_MODULE_11__[/* getTaxCode */ "a"])(taxRate)
  };
});
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
  var attributes = _ref.attributes,
      name = _ref.name;
  var separator = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_10__[/* getSetting */ "g"])('variationTitleAttributesSeparator', ' - ');

  if (name.indexOf(separator) > -1) {
    return name;
  }

  var attributeList = attributes.map(function (_ref2) {
    var option = _ref2.option;
    return option;
  }).join(', ');
  return attributeList ? name + separator + attributeList : name;
}
var getVariationLabels = getRequestByIdString(function (_ref3) {
  var products = _ref3.products;

  // If a product was specified, get just its variations.
  if (products) {
    return _woocommerce_data__WEBPACK_IMPORTED_MODULE_9__["NAMESPACE"] + "/products/".concat(products, "/variations");
  }

  return _woocommerce_data__WEBPACK_IMPORTED_MODULE_9__["NAMESPACE"] + '/variations';
}, function (variation) {
  return {
    key: variation.id,
    label: getVariationName(variation)
  };
});

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTaxCode; });
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(129);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(319);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(100);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(142);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);








/**
 * External dependencies
 */

function getTaxCode(tax) {
  return [tax.country, tax.state, tax.name || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('TAX', 'woocommerce-admin'), tax.priority].map(function (item) {
    return item.toString().toUpperCase().trim();
  }).filter(Boolean).join('-');
}

/***/ })

}]);