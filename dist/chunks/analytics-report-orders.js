(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[18],{

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ orders_OrdersReport; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(17);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(15);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(18);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(19);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./client/analytics/report/orders/config.js
var config = __webpack_require__(797);

// EXTERNAL MODULE: ./client/lib/get-selected-chart/index.js
var get_selected_chart = __webpack_require__(768);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(11);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(3);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: external {"this":["wc","components"]}
var external_this_wc_components_ = __webpack_require__(77);

// EXTERNAL MODULE: external {"this":["wc","number"]}
var external_this_wc_number_ = __webpack_require__(298);

// EXTERNAL MODULE: ./client/settings/index.js
var settings = __webpack_require__(36);

// EXTERNAL MODULE: external {"this":["wc","navigation"]}
var external_this_wc_navigation_ = __webpack_require__(32);

// EXTERNAL MODULE: external {"this":["wc","date"]}
var external_this_wc_date_ = __webpack_require__(40);

// EXTERNAL MODULE: ./client/analytics/components/report-table/index.js + 2 modules
var report_table = __webpack_require__(771);

// EXTERNAL MODULE: ./client/lib/currency-context.js
var currency_context = __webpack_require__(762);

// EXTERNAL MODULE: ./client/analytics/report/orders/style.scss
var style = __webpack_require__(829);

// CONCATENATED MODULE: ./client/analytics/report/orders/table.js








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */








/**
 * Internal dependencies
 */





var table_OrdersReportTable = /*#__PURE__*/function (_Component) {
  inherits_default()(OrdersReportTable, _Component);

  var _super = _createSuper(OrdersReportTable);

  function OrdersReportTable() {
    var _this;

    classCallCheck_default()(this, OrdersReportTable);

    _this = _super.call(this);
    _this.getHeadersContent = _this.getHeadersContent.bind(assertThisInitialized_default()(_this));
    _this.getRowsContent = _this.getRowsContent.bind(assertThisInitialized_default()(_this));
    _this.getSummary = _this.getSummary.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(OrdersReportTable, [{
    key: "getHeadersContent",
    value: function getHeadersContent() {
      return [{
        label: Object(external_this_wp_i18n_["__"])('Date', 'woocommerce-admin'),
        key: 'date',
        required: true,
        defaultSort: true,
        isLeftAligned: true,
        isSortable: true
      }, {
        label: Object(external_this_wp_i18n_["__"])('Order #', 'woocommerce-admin'),
        screenReaderLabel: Object(external_this_wp_i18n_["__"])('Order Number', 'woocommerce-admin'),
        key: 'order_number',
        required: true
      }, {
        label: Object(external_this_wp_i18n_["__"])('Status', 'woocommerce-admin'),
        key: 'status',
        required: false,
        isSortable: false
      }, {
        label: Object(external_this_wp_i18n_["__"])('Customer', 'woocommerce-admin'),
        key: 'customer_id',
        required: false,
        isSortable: false
      }, {
        label: Object(external_this_wp_i18n_["__"])('Product(s)', 'woocommerce-admin'),
        screenReaderLabel: Object(external_this_wp_i18n_["__"])('Products', 'woocommerce-admin'),
        key: 'products',
        required: false,
        isSortable: false
      }, {
        label: Object(external_this_wp_i18n_["__"])('Items Sold', 'woocommerce-admin'),
        key: 'num_items_sold',
        required: false,
        isSortable: true,
        isNumeric: true
      }, {
        label: Object(external_this_wp_i18n_["__"])('Coupon(s)', 'woocommerce-admin'),
        screenReaderLabel: Object(external_this_wp_i18n_["__"])('Coupons', 'woocommerce-admin'),
        key: 'coupons',
        required: false,
        isSortable: false
      }, {
        label: Object(external_this_wp_i18n_["__"])('Net Sales', 'woocommerce-admin'),
        screenReaderLabel: Object(external_this_wp_i18n_["__"])('Net Sales', 'woocommerce-admin'),
        key: 'net_total',
        required: true,
        isSortable: true,
        isNumeric: true
      }];
    }
  }, {
    key: "getCustomerName",
    value: function getCustomerName(customer) {
      var _ref = customer || {},
          firstName = _ref.first_name,
          lastName = _ref.last_name;

      if (!firstName && !lastName) {
        return '';
      }

      return [firstName, lastName].join(' ');
    }
  }, {
    key: "getRowsContent",
    value: function getRowsContent(tableData) {
      var _this2 = this;

      var query = this.props.query;
      var persistedQuery = Object(external_this_wc_navigation_["getPersistedQuery"])(query);
      var dateFormat = Object(settings["g" /* getSetting */])('dateFormat', external_this_wc_date_["defaultTableDateFormat"]);
      var _this$context = this.context,
          renderCurrency = _this$context.render,
          getCurrencyConfig = _this$context.getCurrencyConfig;
      return Object(external_lodash_["map"])(tableData, function (row) {
        var currency = row.currency,
            dateCreated = row.date_created,
            netTotal = row.net_total,
            numItemsSold = row.num_items_sold,
            orderId = row.order_id,
            orderNumber = row.order_number,
            parentId = row.parent_id,
            status = row.status;
        var extendedInfo = row.extended_info || {};
        var coupons = extendedInfo.coupons,
            customer = extendedInfo.customer,
            products = extendedInfo.products;
        var formattedProducts = products.sort(function (itemA, itemB) {
          return itemB.quantity - itemA.quantity;
        }).map(function (item) {
          return {
            label: item.name,
            quantity: item.quantity,
            href: Object(external_this_wc_navigation_["getNewPath"])(persistedQuery, '/analytics/products', {
              filter: 'single_product',
              products: item.id
            })
          };
        });
        var formattedCoupons = coupons.map(function (coupon) {
          return {
            label: coupon.code,
            href: Object(external_this_wc_navigation_["getNewPath"])(persistedQuery, '/analytics/coupons', {
              filter: 'single_coupon',
              coupons: coupon.id
            })
          };
        });
        return [{
          display: Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Date"], {
            date: dateCreated,
            visibleFormat: dateFormat
          }),
          value: dateCreated
        }, {
          display: Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Link"], {
            href: 'post.php?post=' + (parentId ? parentId : orderId) + '&action=edit' + (parentId ? '#order_refunds' : ''),
            type: "wp-admin"
          }, orderNumber),
          value: orderNumber
        }, {
          display: Object(external_this_wp_element_["createElement"])(external_this_wc_components_["OrderStatus"], {
            className: "woocommerce-orders-table__status",
            order: {
              status: status
            },
            orderStatusMap: Object(settings["g" /* getSetting */])('orderStatuses', {})
          }),
          value: status
        }, {
          display: _this2.getCustomerName(customer),
          value: _this2.getCustomerName(customer)
        }, {
          display: _this2.renderList(formattedProducts.length ? [formattedProducts[0]] : [], formattedProducts.map(function (product) {
            return {
              label: Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('%s× %s', 'woocommerce-admin'), product.quantity, product.label),
              href: product.href
            };
          })),
          value: formattedProducts.map(function (_ref2) {
            var quantity = _ref2.quantity,
                label = _ref2.label;
            return Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('%s× %s', 'woocommerce-admin'), quantity, label);
          }).join(', ')
        }, {
          display: Object(external_this_wc_number_["formatValue"])(getCurrencyConfig(), 'number', numItemsSold),
          value: numItemsSold
        }, {
          display: _this2.renderList(formattedCoupons.length ? [formattedCoupons[0]] : [], formattedCoupons),
          value: formattedCoupons.map(function (coupon) {
            return coupon.label;
          }).join(', ')
        }, {
          display: renderCurrency(netTotal, currency),
          value: netTotal
        }];
      });
    }
  }, {
    key: "getSummary",
    value: function getSummary(totals) {
      var _totals$orders_count = totals.orders_count,
          ordersCount = _totals$orders_count === void 0 ? 0 : _totals$orders_count,
          _totals$total_custome = totals.total_customers,
          totalCustomers = _totals$total_custome === void 0 ? 0 : _totals$total_custome,
          _totals$products = totals.products,
          products = _totals$products === void 0 ? 0 : _totals$products,
          _totals$num_items_sol = totals.num_items_sold,
          numItemsSold = _totals$num_items_sol === void 0 ? 0 : _totals$num_items_sol,
          _totals$coupons_count = totals.coupons_count,
          couponsCount = _totals$coupons_count === void 0 ? 0 : _totals$coupons_count,
          _totals$net_revenue = totals.net_revenue,
          netRevenue = _totals$net_revenue === void 0 ? 0 : _totals$net_revenue;
      var _this$context2 = this.context,
          formatAmount = _this$context2.formatAmount,
          getCurrencyConfig = _this$context2.getCurrencyConfig;
      var currency = getCurrencyConfig();
      return [{
        label: Object(external_this_wp_i18n_["_n"])('order', 'orders', ordersCount, 'woocommerce-admin'),
        value: Object(external_this_wc_number_["formatValue"])(currency, 'number', ordersCount)
      }, {
        label: Object(external_this_wp_i18n_["_n"])(' customer', ' customers', totalCustomers, 'woocommerce-admin'),
        value: Object(external_this_wc_number_["formatValue"])(currency, 'number', totalCustomers)
      }, {
        label: Object(external_this_wp_i18n_["_n"])('product', 'products', products, 'woocommerce-admin'),
        value: Object(external_this_wc_number_["formatValue"])(currency, 'number', products)
      }, {
        label: Object(external_this_wp_i18n_["_n"])('item sold', 'items sold', numItemsSold, 'woocommerce-admin'),
        value: Object(external_this_wc_number_["formatValue"])(currency, 'number', numItemsSold)
      }, {
        label: Object(external_this_wp_i18n_["_n"])('coupon', 'coupons', couponsCount, 'woocommerce-admin'),
        value: Object(external_this_wc_number_["formatValue"])(currency, 'number', couponsCount)
      }, {
        label: Object(external_this_wp_i18n_["__"])('net sales', 'woocommerce-admin'),
        value: formatAmount(netRevenue)
      }];
    }
  }, {
    key: "renderLinks",
    value: function renderLinks() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return items.map(function (item, i) {
        return Object(external_this_wp_element_["createElement"])(external_this_wc_components_["Link"], {
          href: item.href,
          key: i,
          type: "wc-admin"
        }, item.label);
      });
    }
  }, {
    key: "renderList",
    value: function renderList(visibleItems, popoverItems) {
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, this.renderLinks(visibleItems), popoverItems.length > 1 && Object(external_this_wp_element_["createElement"])(external_this_wc_components_["ViewMoreList"], {
        items: this.renderLinks(popoverItems)
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          query = _this$props.query,
          filters = _this$props.filters,
          advancedFilters = _this$props.advancedFilters;
      return Object(external_this_wp_element_["createElement"])(report_table["a" /* default */], {
        endpoint: "orders",
        getHeadersContent: this.getHeadersContent,
        getRowsContent: this.getRowsContent,
        getSummary: this.getSummary,
        summaryFields: ['orders_count', 'total_customers', 'products', 'num_items_sold', 'coupons_count', 'net_revenue'],
        query: query,
        tableQuery: {
          extended_info: true
        },
        title: Object(external_this_wp_i18n_["__"])('Orders', 'woocommerce-admin'),
        columnPrefsKey: "orders_report_columns",
        filters: filters,
        advancedFilters: advancedFilters
      });
    }
  }]);

  return OrdersReportTable;
}(external_this_wp_element_["Component"]);

table_OrdersReportTable.contextType = currency_context["a" /* CurrencyContext */];
/* harmony default export */ var table = (table_OrdersReportTable);
// EXTERNAL MODULE: ./client/analytics/components/report-chart/index.js + 1 modules
var report_chart = __webpack_require__(766);

// EXTERNAL MODULE: ./client/analytics/components/report-summary/index.js
var report_summary = __webpack_require__(769);

// EXTERNAL MODULE: ./client/analytics/components/report-filters/index.js
var report_filters = __webpack_require__(770);

// CONCATENATED MODULE: ./client/analytics/report/orders/index.js







function orders_createSuper(Derived) { var hasNativeReflectConstruct = orders_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function orders_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */








var orders_OrdersReport = /*#__PURE__*/function (_Component) {
  inherits_default()(OrdersReport, _Component);

  var _super = orders_createSuper(OrdersReport);

  function OrdersReport() {
    classCallCheck_default()(this, OrdersReport);

    return _super.apply(this, arguments);
  }

  createClass_default()(OrdersReport, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          path = _this$props.path,
          query = _this$props.query;
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(report_filters["a" /* default */], {
        query: query,
        path: path,
        filters: config["c" /* filters */],
        advancedFilters: config["a" /* advancedFilters */],
        report: "orders"
      }), Object(external_this_wp_element_["createElement"])(report_summary["a" /* default */], {
        charts: config["b" /* charts */],
        endpoint: "orders",
        query: query,
        selectedChart: Object(get_selected_chart["a" /* default */])(query.chart, config["b" /* charts */]),
        filters: config["c" /* filters */],
        advancedFilters: config["a" /* advancedFilters */]
      }), Object(external_this_wp_element_["createElement"])(report_chart["a" /* default */], {
        charts: config["b" /* charts */],
        endpoint: "orders",
        path: path,
        query: query,
        selectedChart: Object(get_selected_chart["a" /* default */])(query.chart, config["b" /* charts */]),
        filters: config["c" /* filters */],
        advancedFilters: config["a" /* advancedFilters */]
      }), Object(external_this_wp_element_["createElement"])(table, {
        query: query,
        filters: config["c" /* filters */],
        advancedFilters: config["a" /* advancedFilters */]
      }));
    }
  }]);

  return OrdersReport;
}(external_this_wp_element_["Component"]);


orders_OrdersReport.propTypes = {
  path: prop_types_default.a.string.isRequired,
  query: prop_types_default.a.object.isRequired
};

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSelectedChart; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
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
  var charts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var chart = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["find"])(charts, {
    key: chartName
  });

  if (chart) {
    return chart;
  }

  return charts[0];
}

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ReportSummary */
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(277);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(77);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(298);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_number__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(35);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(40);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_date__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(64);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _report_error__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(763);
/* harmony import */ var _lib_currency_context__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(762);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */











/**
 * Internal dependencies
 */



/**
 * Component to render summary numbers in reports.
 */

var ReportSummary = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ReportSummary, _Component);

  var _super = _createSuper(ReportSummary);

  function ReportSummary() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ReportSummary);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ReportSummary, [{
    key: "formatVal",
    value: function formatVal(val, type) {
      var _this$context = this.context,
          formatAmount = _this$context.formatAmount,
          getCurrencyConfig = _this$context.getCurrencyConfig;
      return type === 'currency' ? formatAmount(val) : Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_12__["formatValue"])(getCurrencyConfig(), type, val);
    }
  }, {
    key: "getValues",
    value: function getValues(key, type) {
      var _this$props = this.props,
          emptySearchResults = _this$props.emptySearchResults,
          summaryData = _this$props.summaryData;
      var totals = summaryData.totals;
      var primaryTotal = totals.primary ? totals.primary[key] : 0;
      var secondaryTotal = totals.secondary ? totals.secondary[key] : 0;
      var primaryValue = emptySearchResults ? 0 : primaryTotal;
      var secondaryValue = emptySearchResults ? 0 : secondaryTotal;
      return {
        delta: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_12__["calculateDelta"])(primaryValue, secondaryValue),
        prevValue: this.formatVal(secondaryValue, type),
        value: this.formatVal(primaryValue, type)
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          charts = _this$props2.charts,
          query = _this$props2.query,
          selectedChart = _this$props2.selectedChart,
          summaryData = _this$props2.summaryData,
          endpoint = _this$props2.endpoint,
          report = _this$props2.report,
          defaultDateRange = _this$props2.defaultDateRange;
      var isError = summaryData.isError,
          isRequesting = summaryData.isRequesting;

      if (isError) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_report_error__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
          isError: true
        });
      }

      if (isRequesting) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_11__["SummaryListPlaceholder"], {
          numberOfItems: charts.length
        });
      }

      var _getDateParamsFromQue = Object(_woocommerce_date__WEBPACK_IMPORTED_MODULE_14__["getDateParamsFromQuery"])(query, defaultDateRange),
          compare = _getDateParamsFromQue.compare;

      var renderSummaryNumbers = function renderSummaryNumbers(_ref) {
        var onToggle = _ref.onToggle;
        return charts.map(function (chart) {
          var key = chart.key,
              order = chart.order,
              orderby = chart.orderby,
              label = chart.label,
              type = chart.type;
          var newPath = {
            chart: key
          };

          if (orderby) {
            newPath.orderby = orderby;
          }

          if (order) {
            newPath.order = order;
          }

          var href = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10__["getNewPath"])(newPath);
          var isSelected = selectedChart.key === key;

          var _this$getValues = _this.getValues(key, type),
              delta = _this$getValues.delta,
              prevValue = _this$getValues.prevValue,
              value = _this$getValues.value;

          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_11__["SummaryNumber"], {
            key: key,
            delta: delta,
            href: href,
            label: label,
            prevLabel: compare === 'previous_period' ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Previous Period:', 'woocommerce-admin') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Previous Year:', 'woocommerce-admin'),
            prevValue: prevValue,
            selected: isSelected,
            value: value,
            onLinkClickCallback: function onLinkClickCallback() {
              // Wider than a certain breakpoint, there is no dropdown so avoid calling onToggle.
              if (onToggle) {
                onToggle();
              }

              Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_15__["recordEvent"])('analytics_chart_tab_click', {
                report: report || endpoint,
                key: key
              });
            }
          });
        });
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_11__["SummaryList"], null, renderSummaryNumbers);
    }
  }]);

  return ReportSummary;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);
ReportSummary.propTypes = {
  /**
   * Properties of all the charts available for that report.
   */
  charts: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array.isRequired,

  /**
   * The endpoint to use in API calls to populate the Summary Numbers.
   * For example, if `taxes` is provided, data will be fetched from the report
   * `taxes` endpoint (ie: `/wc-analytics/reports/taxes/stats`). If the provided endpoint
   * doesn't exist, an error will be shown to the user with `ReportError`.
   */
  endpoint: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,

  /**
   * Allows specifying properties different from the `endpoint` that will be used
   * to limit the items when there is an active search.
   */
  limitProperties: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array,

  /**
   * The query string represented in object form.
   */
  query: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired,

  /**
   * Properties of the selected chart.
   */
  selectedChart: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.shape({
    /**
     * Key of the selected chart.
     */
    key: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,

    /**
     * Chart label.
     */
    label: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,

    /**
     * Order query argument.
     */
    order: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOf(['asc', 'desc']),

    /**
     * Order by query argument.
     */
    orderby: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,

    /**
     * Number type for formatting.
     */
    type: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOf(['average', 'number', 'currency']).isRequired
  }).isRequired,

  /**
   * Data to display in the SummaryNumbers.
   */
  summaryData: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,

  /**
   * Report name, if different than the endpoint.
   */
  report: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
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
ReportSummary.contextType = _lib_currency_context__WEBPACK_IMPORTED_MODULE_17__[/* CurrencyContext */ "a"];
/* harmony default export */ __webpack_exports__["a"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["withSelect"])(function (select, props) {
  var charts = props.charts,
      endpoint = props.endpoint,
      limitProperties = props.limitProperties,
      query = props.query,
      filters = props.filters,
      advancedFilters = props.advancedFilters;
  var limitBy = limitProperties || [endpoint];
  var hasLimitByParam = limitBy.some(function (item) {
    return query[item] && query[item].length;
  });

  if (query.search && !hasLimitByParam) {
    return {
      emptySearchResults: true
    };
  }

  var fields = charts && charts.map(function (chart) {
    return chart.key;
  });

  var _select$getSetting = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_13__["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings'),
      defaultDateRange = _select$getSetting.woocommerce_default_date_range;

  var summaryData = Object(_woocommerce_data__WEBPACK_IMPORTED_MODULE_13__["getSummaryNumbers"])({
    endpoint: endpoint,
    query: query,
    select: select,
    limitBy: limitBy,
    filters: filters,
    advancedFilters: advancedFilters,
    defaultDateRange: defaultDateRange,
    fields: fields
  });
  return {
    summaryData: summaryData,
    defaultDateRange: defaultDateRange
  };
}))(ReportSummary));

/***/ }),

/***/ 829:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);