(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[12],{

/***/ "./client/analytics/report/categories/breadcrumbs.js":
/*!***********************************************************!*\
  !*** ./client/analytics/report/categories/breadcrumbs.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategoryBreadcrumbs; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/index.js");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @woocommerce/components */ "@woocommerce/components");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @woocommerce/navigation */ "@woocommerce/navigation");
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_9__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */






var CategoryBreadcrumbs = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(CategoryBreadcrumbs, _Component);

  var _super = _createSuper(CategoryBreadcrumbs);

  function CategoryBreadcrumbs() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CategoryBreadcrumbs);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CategoryBreadcrumbs, [{
    key: "getCategoryAncestorIds",
    value: function getCategoryAncestorIds(category, categories) {
      var ancestors = [];
      var parent = category.parent;

      while (parent) {
        ancestors.unshift(parent);
        parent = categories.get(parent).parent;
      }

      return ancestors;
    }
  }, {
    key: "getCategoryAncestors",
    value: function getCategoryAncestors(category, categories) {
      var ancestorIds = this.getCategoryAncestorIds(category, categories);

      if (!ancestorIds.length) {
        return;
      }

      if (ancestorIds.length === 1) {
        return categories.get(Object(lodash__WEBPACK_IMPORTED_MODULE_6__["first"])(ancestorIds)).name + ' › ';
      }

      if (ancestorIds.length === 2) {
        return categories.get(Object(lodash__WEBPACK_IMPORTED_MODULE_6__["first"])(ancestorIds)).name + ' › ' + categories.get(Object(lodash__WEBPACK_IMPORTED_MODULE_6__["last"])(ancestorIds)).name + ' › ';
      }

      return categories.get(Object(lodash__WEBPACK_IMPORTED_MODULE_6__["first"])(ancestorIds)).name + ' … ' + categories.get(Object(lodash__WEBPACK_IMPORTED_MODULE_6__["last"])(ancestorIds)).name + ' › ';
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          categories = _this$props.categories,
          category = _this$props.category,
          query = _this$props.query;
      var persistedQuery = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_9__["getPersistedQuery"])(query);
      return category ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "woocommerce-table__breadcrumbs"
      }, this.getCategoryAncestors(category, categories), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        href: Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_9__["getNewPath"])(persistedQuery, '/analytics/categories', {
          filter: 'single_category',
          categories: category.id
        }),
        type: "wc-admin"
      }, category.name)) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Spinner"], null);
    }
  }]);

  return CategoryBreadcrumbs;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./client/analytics/report/products/style.scss":
/*!*****************************************************!*\
  !*** ./client/analytics/report/products/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./client/analytics/report/products/table.js":
/*!***************************************************!*\
  !*** ./client/analytics/report/products/table.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/compose */ "./node_modules/@wordpress/compose/build-module/index.js");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @woocommerce/navigation */ "@woocommerce/navigation");
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @woocommerce/components */ "@woocommerce/components");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @woocommerce/number */ "@woocommerce/number");
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_number__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @woocommerce/wc-admin-settings */ "./client/settings/index.js");
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @woocommerce/data */ "@woocommerce/data");
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _categories_breadcrumbs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../categories/breadcrumbs */ "./client/analytics/report/categories/breadcrumbs.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utils */ "./client/analytics/report/products/utils.js");
/* harmony import */ var _components_report_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/report-table */ "./client/analytics/components/report-table/index.js");
/* harmony import */ var _lib_currency_context__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../lib/currency-context */ "./client/lib/currency-context.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./style.scss */ "./client/analytics/report/products/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_21__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */











/**
 * Internal dependencies
 */






var manageStock = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_15__["getSetting"])('manageStock', 'no');
var stockStatuses = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_15__["getSetting"])('stockStatuses', {});

var ProductsReportTable = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ProductsReportTable, _Component);

  var _super = _createSuper(ProductsReportTable);

  function ProductsReportTable() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ProductsReportTable);

    _this = _super.call(this);
    _this.getHeadersContent = _this.getHeadersContent.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.getRowsContent = _this.getRowsContent.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.getSummary = _this.getSummary.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ProductsReportTable, [{
    key: "getHeadersContent",
    value: function getHeadersContent() {
      return [{
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Product Title', 'woocommerce-admin'),
        key: 'product_name',
        required: true,
        isLeftAligned: true,
        isSortable: true
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('SKU', 'woocommerce-admin'),
        key: 'sku',
        hiddenByDefault: true,
        isSortable: true
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Items Sold', 'woocommerce-admin'),
        key: 'items_sold',
        required: true,
        defaultSort: true,
        isSortable: true,
        isNumeric: true
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Net Sales', 'woocommerce-admin'),
        screenReaderLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Net Sales', 'woocommerce-admin'),
        key: 'net_revenue',
        required: true,
        isSortable: true,
        isNumeric: true
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Orders', 'woocommerce-admin'),
        key: 'orders_count',
        isSortable: true,
        isNumeric: true
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Category', 'woocommerce-admin'),
        key: 'product_cat'
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Variations', 'woocommerce-admin'),
        key: 'variations',
        isSortable: true
      }, manageStock === 'yes' ? {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Status', 'woocommerce-admin'),
        key: 'stock_status'
      } : null, manageStock === 'yes' ? {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Stock', 'woocommerce-admin'),
        key: 'stock',
        isNumeric: true
      } : null].filter(Boolean);
    }
  }, {
    key: "getRowsContent",
    value: function getRowsContent() {
      var _this2 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var query = this.props.query;
      var persistedQuery = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_12__["getPersistedQuery"])(query);
      var _this$context = this.context,
          renderCurrency = _this$context.render,
          getCurrencyFormatDecimal = _this$context.formatDecimal,
          getCurrencyConfig = _this$context.getCurrencyConfig;
      var currency = getCurrencyConfig();
      return Object(lodash__WEBPACK_IMPORTED_MODULE_11__["map"])(data, function (row) {
        var productId = row.product_id,
            itemsSold = row.items_sold,
            netRevenue = row.net_revenue,
            ordersCount = row.orders_count;
        var extendedInfo = row.extended_info || {};
        var categoryIds = extendedInfo.category_ids,
            lowStockAmount = extendedInfo.low_stock_amount,
            extendedInfoManageStock = extendedInfo.manage_stock,
            sku = extendedInfo.sku,
            extendedInfoStockStatus = extendedInfo.stock_status,
            stockQuantity = extendedInfo.stock_quantity,
            _extendedInfo$variati = extendedInfo.variations,
            variations = _extendedInfo$variati === void 0 ? [] : _extendedInfo$variati;
        var name = Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_9__["decodeEntities"])(extendedInfo.name);
        var ordersLink = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_12__["getNewPath"])(persistedQuery, '/analytics/orders', {
          filter: 'advanced',
          product_includes: productId
        });
        var productDetailLink = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_12__["getNewPath"])(persistedQuery, '/analytics/products', {
          filter: 'single_product',
          products: productId
        });
        var categories = _this2.props.categories;
        var productCategories = categoryIds && categoryIds.map(function (categoryId) {
          return categories.get(categoryId);
        }).filter(Boolean) || [];
        var stockStatus = Object(_utils__WEBPACK_IMPORTED_MODULE_18__["isLowStock"])(extendedInfoStockStatus, stockQuantity, lowStockAmount) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_13__["Link"], {
          href: Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_15__["getAdminLink"])('post.php?action=edit&post=' + productId),
          type: "wp-admin"
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["_x"])('Low', 'Indication of a low quantity', 'woocommerce-admin')) : stockStatuses[extendedInfoStockStatus];
        return [{
          display: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_13__["Link"], {
            href: productDetailLink,
            type: "wc-admin"
          }, name),
          value: name
        }, {
          display: sku,
          value: sku
        }, {
          display: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_14__["formatValue"])(currency, 'number', itemsSold),
          value: itemsSold
        }, {
          display: renderCurrency(netRevenue),
          value: getCurrencyFormatDecimal(netRevenue)
        }, {
          display: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_13__["Link"], {
            href: ordersLink,
            type: "wc-admin"
          }, ordersCount),
          value: ordersCount
        }, {
          display: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
            className: "woocommerce-table__product-categories"
          }, productCategories[0] && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_categories_breadcrumbs__WEBPACK_IMPORTED_MODULE_17__["default"], {
            category: productCategories[0],
            categories: categories
          }), productCategories.length > 1 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_13__["Tag"], {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["_x"])('+%d more', 'categories', 'woocommerce-admin'), productCategories.length - 1),
            popoverContents: productCategories.map(function (category) {
              return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_categories_breadcrumbs__WEBPACK_IMPORTED_MODULE_17__["default"], {
                category: category,
                categories: categories,
                key: category.id,
                query: query
              });
            })
          })),
          value: productCategories.map(function (category) {
            return category.name;
          }).join(', ')
        }, {
          display: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_14__["formatValue"])(currency, 'number', variations.length),
          value: variations.length
        }, manageStock === 'yes' ? {
          display: extendedInfoManageStock ? stockStatus : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('N/A', 'woocommerce-admin'),
          value: extendedInfoManageStock ? stockStatuses[extendedInfoStockStatus] : null
        } : null, manageStock === 'yes' ? {
          display: extendedInfoManageStock ? Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_14__["formatValue"])(currency, 'number', stockQuantity) : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('N/A', 'woocommerce-admin'),
          value: stockQuantity
        } : null].filter(Boolean);
      });
    }
  }, {
    key: "getSummary",
    value: function getSummary(totals) {
      var _totals$products_coun = totals.products_count,
          productsCount = _totals$products_coun === void 0 ? 0 : _totals$products_coun,
          _totals$items_sold = totals.items_sold,
          itemsSold = _totals$items_sold === void 0 ? 0 : _totals$items_sold,
          _totals$net_revenue = totals.net_revenue,
          netRevenue = _totals$net_revenue === void 0 ? 0 : _totals$net_revenue,
          _totals$orders_count = totals.orders_count,
          ordersCount = _totals$orders_count === void 0 ? 0 : _totals$orders_count;
      var _this$context2 = this.context,
          formatAmount = _this$context2.formatAmount,
          getCurrencyConfig = _this$context2.getCurrencyConfig;
      var currency = getCurrencyConfig();
      return [{
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["_n"])('product', 'products', productsCount, 'woocommerce-admin'),
        value: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_14__["formatValue"])(currency, 'number', productsCount)
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["_n"])('item sold', 'items sold', itemsSold, 'woocommerce-admin'),
        value: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_14__["formatValue"])(currency, 'number', itemsSold)
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('net sales', 'woocommerce-admin'),
        value: formatAmount(netRevenue)
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["_n"])('orders', 'orders', ordersCount, 'woocommerce-admin'),
        value: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_14__["formatValue"])(currency, 'number', ordersCount)
      }];
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          advancedFilters = _this$props.advancedFilters,
          baseSearchQuery = _this$props.baseSearchQuery,
          filters = _this$props.filters,
          hideCompare = _this$props.hideCompare,
          isRequesting = _this$props.isRequesting,
          query = _this$props.query;
      var labels = {
        helpText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Check at least two products below to compare', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Search by product name or SKU', 'woocommerce-admin')
      };
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_report_table__WEBPACK_IMPORTED_MODULE_19__["default"], {
        compareBy: hideCompare ? undefined : 'products',
        endpoint: "products",
        getHeadersContent: this.getHeadersContent,
        getRowsContent: this.getRowsContent,
        getSummary: this.getSummary,
        summaryFields: ['products_count', 'items_sold', 'net_revenue', 'orders_count'],
        itemIdField: "product_id",
        isRequesting: isRequesting,
        labels: labels,
        query: query,
        searchBy: "products",
        baseSearchQuery: baseSearchQuery,
        tableQuery: {
          orderby: query.orderby || 'items_sold',
          order: query.order || 'desc',
          extended_info: true,
          segmentby: query.segmentby
        },
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Products', 'woocommerce-admin'),
        columnPrefsKey: "products_report_columns",
        filters: filters,
        advancedFilters: advancedFilters
      });
    }
  }]);

  return ProductsReportTable;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

ProductsReportTable.contextType = _lib_currency_context__WEBPACK_IMPORTED_MODULE_20__["CurrencyContext"];
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_8__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__["withSelect"])(function (select, props) {
  var query = props.query,
      isRequesting = props.isRequesting;

  if (isRequesting || query.search && !(query.products && query.products.length)) {
    return {};
  }

  var _select = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_16__["ITEMS_STORE_NAME"]),
      getItems = _select.getItems,
      getItemsError = _select.getItemsError,
      isResolving = _select.isResolving;

  var tableQuery = {
    per_page: -1
  };
  var categories = getItems('categories', tableQuery);
  var isError = Boolean(getItemsError('categories', tableQuery));
  var isLoading = isResolving('getItems', ['categories', tableQuery]);
  return {
    categories: categories,
    isError: isError,
    isRequesting: isLoading
  };
}))(ProductsReportTable));

/***/ })

}]);
//# sourceMappingURL=12.min.js.map