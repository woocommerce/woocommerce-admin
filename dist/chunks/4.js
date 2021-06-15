(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[4],{

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ activity_card_ActivityCard; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ placeholder; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(13);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(14);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(15);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(16);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(8);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/gridicons/dist/notice-outline.js
var notice_outline = __webpack_require__(98);
var notice_outline_default = /*#__PURE__*/__webpack_require__.n(notice_outline);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(17);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(34);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(4);

// EXTERNAL MODULE: ./client/header/activity-panel/activity-card/style.scss
var style = __webpack_require__(609);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);

// CONCATENATED MODULE: ./client/header/activity-panel/activity-card/placeholder.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */





var placeholder_ActivityCardPlaceholder = /*#__PURE__*/function (_Component) {
  inherits_default()(ActivityCardPlaceholder, _Component);

  var _super = _createSuper(ActivityCardPlaceholder);

  function ActivityCardPlaceholder() {
    classCallCheck_default()(this, ActivityCardPlaceholder);

    return _super.apply(this, arguments);
  }

  createClass_default()(ActivityCardPlaceholder, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          hasAction = _this$props.hasAction,
          hasDate = _this$props.hasDate,
          hasSubtitle = _this$props.hasSubtitle,
          lines = _this$props.lines;
      var cardClassName = classnames_default()('woocommerce-activity-card is-loading', className);
      return Object(external_wp_element_["createElement"])("div", {
        className: cardClassName,
        "aria-hidden": true
      }, Object(external_wp_element_["createElement"])("span", {
        className: "woocommerce-activity-card__icon"
      }, Object(external_wp_element_["createElement"])("span", {
        className: "is-placeholder"
      })), Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__header"
      }, Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__title is-placeholder"
      }), hasSubtitle && Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__subtitle is-placeholder"
      }), hasDate && Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__date"
      }, Object(external_wp_element_["createElement"])("span", {
        className: "is-placeholder"
      }))), Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__body"
      }, Object(external_lodash_["range"])(lines).map(function (i) {
        return Object(external_wp_element_["createElement"])("span", {
          className: "is-placeholder",
          key: i
        });
      })), hasAction && Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__actions"
      }, Object(external_wp_element_["createElement"])("span", {
        className: "is-placeholder"
      })));
    }
  }]);

  return ActivityCardPlaceholder;
}(external_wp_element_["Component"]);

placeholder_ActivityCardPlaceholder.propTypes = {
  className: prop_types_default.a.string,
  hasAction: prop_types_default.a.bool,
  hasDate: prop_types_default.a.bool,
  hasSubtitle: prop_types_default.a.bool,
  lines: prop_types_default.a.number
};
placeholder_ActivityCardPlaceholder.defaultProps = {
  hasAction: false,
  hasDate: false,
  hasSubtitle: false,
  lines: 1
};
/* harmony default export */ var placeholder = (placeholder_ActivityCardPlaceholder);
// CONCATENATED MODULE: ./client/header/activity-panel/activity-card/index.js







function activity_card_createSuper(Derived) { var hasNativeReflectConstruct = activity_card_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function activity_card_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */







/**
 * Internal dependencies
 */


/**
 * Determine if the provided string is a date, as
 * formatted by wc_rest_prepare_date_response().
 *
 * @param {string} value String value
 */

var isDateString = function isDateString(value) {
  return (// PHP date format: Y-m-d\TH:i:s.
    /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(value)
  );
};

var activity_card_ActivityCard = /*#__PURE__*/function (_Component) {
  inherits_default()(ActivityCard, _Component);

  var _super = activity_card_createSuper(ActivityCard);

  function ActivityCard() {
    classCallCheck_default()(this, ActivityCard);

    return _super.apply(this, arguments);
  }

  createClass_default()(ActivityCard, [{
    key: "getCard",
    value: function getCard() {
      var _this$props = this.props,
          actions = _this$props.actions,
          className = _this$props.className,
          children = _this$props.children,
          date = _this$props.date,
          icon = _this$props.icon,
          subtitle = _this$props.subtitle,
          title = _this$props.title,
          unread = _this$props.unread;
      var cardClassName = classnames_default()('woocommerce-activity-card', className);
      var actionsList = Array.isArray(actions) ? actions : [actions];
      var dateString = isDateString(date) ? external_moment_default.a.utc(date).fromNow() : date;
      return Object(external_wp_element_["createElement"])("section", {
        className: cardClassName
      }, unread && Object(external_wp_element_["createElement"])("span", {
        className: "woocommerce-activity-card__unread"
      }), icon && Object(external_wp_element_["createElement"])("span", {
        className: "woocommerce-activity-card__icon",
        "aria-hidden": true
      }, icon), title && Object(external_wp_element_["createElement"])("header", {
        className: "woocommerce-activity-card__header"
      }, Object(external_wp_element_["createElement"])(external_wc_components_["H"], {
        className: "woocommerce-activity-card__title"
      }, title), subtitle && Object(external_wp_element_["createElement"])("div", {
        className: "woocommerce-activity-card__subtitle"
      }, subtitle), dateString && Object(external_wp_element_["createElement"])("span", {
        className: "woocommerce-activity-card__date"
      }, dateString)), children && Object(external_wp_element_["createElement"])(external_wc_components_["Section"], {
        className: "woocommerce-activity-card__body"
      }, children), actions && Object(external_wp_element_["createElement"])("footer", {
        className: "woocommerce-activity-card__actions"
      }, actionsList.map(function (item, i) {
        return Object(external_wp_element_["cloneElement"])(item, {
          key: i
        });
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var onClick = this.props.onClick;

      if (onClick) {
        return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
          className: "woocommerce-activity-card__button",
          onClick: onClick
        }, this.getCard());
      }

      return this.getCard();
    }
  }]);

  return ActivityCard;
}(external_wp_element_["Component"]);

activity_card_ActivityCard.propTypes = {
  actions: prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.element), prop_types_default.a.element]),
  onClick: prop_types_default.a.func,
  className: prop_types_default.a.string,
  children: prop_types_default.a.node,
  date: prop_types_default.a.string,
  icon: prop_types_default.a.node,
  subtitle: prop_types_default.a.node,
  title: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.node]),
  unread: prop_types_default.a.bool
};
activity_card_ActivityCard.defaultProps = {
  icon: Object(external_wp_element_["createElement"])(notice_outline_default.a, {
    size: 48
  }),
  unread: false
};



/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getUrlParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getScreenName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sift; });
/**
 * Get the URL params.
 *
 * @param {string} locationSearch - Querystring part of a URL, including the question mark (?).
 * @return {Object} - URL params.
 */
function getUrlParams(locationSearch) {
  if (locationSearch) {
    return locationSearch.substr(1).split('&').reduce(function (params, query) {
      var chunks = query.split('=');
      var key = chunks[0];
      var value = decodeURIComponent(chunks[1]);
      value = isNaN(Number(value)) ? value : Number(value);
      return params[key] = value, params;
    }, {});
  }

  return {};
}
/**
 * Get the current screen name.
 *
 * @return {string} - Screen name.
 */

function getScreenName() {
  var screenName = '';

  var _getUrlParams = getUrlParams(window.location.search),
      page = _getUrlParams.page,
      path = _getUrlParams.path,
      postType = _getUrlParams.post_type;

  if (page) {
    var currentPage = page === 'wc-admin' ? 'home_screen' : page;
    screenName = path ? path.replace(/\//g, '_').substring(1) : currentPage;
  } else if (postType) {
    screenName = postType;
  }

  return screenName;
}
/**
 * Similar to filter, but return two arrays separated by a partitioner function
 *
 * @param {Array} arr - Original array of values.
 * @param {Function} partitioner - Function to return truthy/falsy values to separate items in array.
 *
 * @return {Array} - Array of two arrays, first including truthy values, and second including falsy.
 */

var sift = function sift(arr, partitioner) {
  return arr.reduce(function (all, curr) {
    all[!!partitioner(curr) ? 0 : 1].push(curr);
    return all;
  }, [[], []]);
};

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(217);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(214);
/* harmony import */ var _woocommerce_experimental__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33);
/* harmony import */ var _woocommerce_experimental__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _header_activity_panel_activity_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(578);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(219);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(583);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(613);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_16__);






/**
 * External dependencies
 */








/**
 * Internal dependencies
 */






var renderEmptyCard = function renderEmptyCard() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_header_activity_panel_activity_card__WEBPACK_IMPORTED_MODULE_13__[/* ActivityCard */ "a"], {
    className: "woocommerce-empty-activity-card",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Your inbox is empty', 'woocommerce-admin'),
    icon: false
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('As things begin to happen in your store your inbox will start to fill up. ' + "You'll see things like achievements, new feature announcements, extension recommendations and more!", 'woocommerce-admin'));
};

var onBodyLinkClick = function onBodyLinkClick(note, innerLink) {
  Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__["recordEvent"])('inbox_action_click', {
    note_name: note.name,
    note_title: note.title,
    note_content_inner_link: innerLink
  });
};

var renderNotes = function renderNotes(_ref) {
  var hasNotes = _ref.hasNotes,
      isBatchUpdating = _ref.isBatchUpdating,
      lastRead = _ref.lastRead,
      notes = _ref.notes,
      onDismiss = _ref.onDismiss,
      onNoteActionClick = _ref.onNoteActionClick;

  if (isBatchUpdating) {
    return;
  }

  if (!hasNotes) {
    return renderEmptyCard();
  }

  var screen = Object(_utils__WEBPACK_IMPORTED_MODULE_15__[/* getScreenName */ "a"])();

  var onNoteVisible = function onNoteVisible(note) {
    Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__["recordEvent"])('inbox_note_view', {
      note_content: note.content,
      note_name: note.name,
      note_title: note.title,
      note_type: note.type,
      screen: screen
    });
  };

  var notesArray = Object.keys(notes).map(function (key) {
    return notes[key];
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(react_transition_group__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    role: "menu"
  }, notesArray.map(function (note) {
    var noteId = note.id,
        isDeleted = note.is_deleted;

    if (isDeleted) {
      return null;
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(react_transition_group__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
      key: noteId,
      timeout: 500,
      classNames: "woocommerce-inbox-message"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_12__["InboxNoteCard"], {
      key: noteId,
      note: note,
      lastRead: lastRead,
      onDismiss: onDismiss,
      onNoteActionClick: onNoteActionClick,
      onBodyLinkClick: onBodyLinkClick,
      onNoteVisible: onNoteVisible
    }));
  }));
};

var INBOX_QUERY = {
  page: 1,
  per_page: _woocommerce_data__WEBPACK_IMPORTED_MODULE_7__["QUERY_DEFAULTS"].pageSize,
  status: 'unactioned',
  type: _woocommerce_data__WEBPACK_IMPORTED_MODULE_7__["QUERY_DEFAULTS"].noteTypes,
  orderby: 'date',
  order: 'desc',
  _fields: ['id', 'name', 'title', 'content', 'type', 'status', 'actions', 'date_created', 'date_created_gmt', 'layout', 'image', 'is_deleted']
};

var InboxPanel = function InboxPanel() {
  var _useDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])('core/notices'),
      createNotice = _useDispatch.createNotice;

  var _useDispatch2 = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__["NOTES_STORE_NAME"]),
      batchUpdateNotes = _useDispatch2.batchUpdateNotes,
      removeAllNotes = _useDispatch2.removeAllNotes,
      removeNote = _useDispatch2.removeNote,
      updateNote = _useDispatch2.updateNote,
      triggerNoteAction = _useDispatch2.triggerNoteAction;

  var _useSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["useSelect"])(function (select) {
    var _select = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__["NOTES_STORE_NAME"]),
        getNotes = _select.getNotes,
        getNotesError = _select.getNotesError,
        isResolving = _select.isResolving,
        isNotesRequesting = _select.isNotesRequesting;

    return {
      notes: getNotes(INBOX_QUERY),
      isError: Boolean(getNotesError('getNotes', [INBOX_QUERY])),
      isResolvingNotes: isResolving('getNotes', [INBOX_QUERY]),
      isBatchUpdating: isNotesRequesting('batchUpdateNotes')
    };
  }),
      isError = _useSelect.isError,
      isResolvingNotes = _useSelect.isResolvingNotes,
      isBatchUpdating = _useSelect.isBatchUpdating,
      notes = _useSelect.notes;

  var _useUserPreferences = Object(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__["useUserPreferences"])(),
      updateUserPreferences = _useUserPreferences.updateUserPreferences,
      userPrefs = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_useUserPreferences, ["updateUserPreferences"]);

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(userPrefs.activity_panel_inbox_last_read),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 1),
      lastRead = _useState2[0];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      dismiss = _useState4[0],
      setDismiss = _useState4[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var mountTime = Date.now();
    var userDataFields = {
      activity_panel_inbox_last_read: mountTime
    };
    updateUserPreferences(userDataFields);
  }, []);

  var onDismiss = function onDismiss(note, type) {
    setDismiss({
      note: note,
      type: type
    });
  };

  var closeDismissModal = /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee() {
      var confirmed,
          noteNameDismissAll,
          screen,
          noteId,
          removeAll,
          notesRemoved,
          noteRemoved,
          numberOfNotes,
          _args = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              confirmed = _args.length > 0 && _args[0] !== undefined ? _args[0] : false;
              noteNameDismissAll = dismiss.type === 'all' ? true : false;
              screen = Object(_utils__WEBPACK_IMPORTED_MODULE_15__[/* getScreenName */ "a"])();
              Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__["recordEvent"])('inbox_action_dismiss', {
                note_name: dismiss.note.name,
                note_title: dismiss.note.title,
                note_name_dismiss_all: noteNameDismissAll,
                note_name_dismiss_confirmation: confirmed,
                screen: screen
              });

              if (!confirmed) {
                _context.next = 30;
                break;
              }

              noteId = dismiss.note.id;
              removeAll = !noteId || noteNameDismissAll;
              _context.prev = 7;
              notesRemoved = [];

              if (!removeAll) {
                _context.next = 15;
                break;
              }

              _context.next = 12;
              return removeAllNotes();

            case 12:
              notesRemoved = _context.sent;
              _context.next = 19;
              break;

            case 15:
              _context.next = 17;
              return removeNote(noteId);

            case 17:
              noteRemoved = _context.sent;
              notesRemoved = [noteRemoved];

            case 19:
              setDismiss(undefined);
              createNotice('success', notesRemoved.length > 1 ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('All messages dismissed', 'woocommerce-admin') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Message dismissed', 'woocommerce-admin'), {
                actions: [{
                  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Undo', 'woocommerce-admin'),
                  onClick: function onClick() {
                    if (notesRemoved.length > 1) {
                      batchUpdateNotes(notesRemoved.map(function (note) {
                        return note.id;
                      }), {
                        is_deleted: 0
                      });
                    } else {
                      updateNote(noteId, {
                        is_deleted: 0
                      });
                    }
                  }
                }]
              });
              _context.next = 28;
              break;

            case 23:
              _context.prev = 23;
              _context.t0 = _context["catch"](7);
              numberOfNotes = removeAll ? notes.length : 1;
              createNotice('error', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["_n"])('Message could not be dismissed', 'Messages could not be dismissed', numberOfNotes, 'woocommerce-admin'));
              setDismiss(undefined);

            case 28:
              _context.next = 31;
              break;

            case 30:
              setDismiss(undefined);

            case 31:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[7, 23]]);
    }));

    return function closeDismissModal() {
      return _ref2.apply(this, arguments);
    };
  }();

  var onNoteActionClick = function onNoteActionClick(note, action) {
    triggerNoteAction(note.id, action.id);
  };

  if (isError) {
    var title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('There was an error getting your inbox. Please try again.', 'woocommerce-admin');

    var actionLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Reload', 'woocommerce-admin');

    var actionCallback = function actionCallback() {
      // @todo Add tracking for how often an error is displayed, and the reload action is clicked.
      window.location.reload();
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_6__["EmptyContent"], {
      title: title,
      actionLabel: actionLabel,
      actionURL: null,
      actionCallback: actionCallback
    });
  }

  var hasNotes = Object(_utils__WEBPACK_IMPORTED_MODULE_14__[/* hasValidNotes */ "b"])(notes); // @todo After having a pagination implemented we should call the method "getNotes" with a different query since
  // the current one is only getting 25 notes and the count of unread notes only will refer to this 25 and not all the existing ones.

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "woocommerce-homepage-notes-wrapper"
  }, (isResolvingNotes || isBatchUpdating) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_6__["Section"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_12__["InboxNotePlaceholder"], {
    className: "banner message-is-unread"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_6__["Section"], null, !isResolvingNotes && !isBatchUpdating && renderNotes({
    hasNotes: hasNotes,
    isBatchUpdating: isBatchUpdating,
    lastRead: lastRead,
    notes: notes,
    onDismiss: onDismiss,
    onNoteActionClick: onNoteActionClick
  })), dismiss && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_12__["InboxDismissConfirmationModal"], {
    onClose: closeDismissModal,
    onDismiss: function onDismiss() {
      return closeDismissModal(true);
    }
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (InboxPanel);

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=Object.assign||function(a){for(var c,b=1;b<arguments.length;b++)for(var d in c=arguments[b],c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d]);return a};Object.defineProperty(exports,'__esModule',{value:!0});exports.default=function(a){var b=a.size,c=b===void 0?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,['size','onClick','icon','className']),j=['gridicon','gridicons-notice-outline',f,!!function h(k){return 0==k%18}(c)&&'needs-offset',!1,!1].filter(Boolean).join(' ');return _react2.default.createElement('svg',_extends({className:j,height:c,width:c,onClick:d},g,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 13h-2v2h2v-2zm-2-2h2l.5-6h-3l.5 6z'})))};var _react=__webpack_require__(7),_react2=_interopRequireDefault(_react);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){var d={};for(var c in a)0<=b.indexOf(c)||Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}module.exports=exports['default'];


/***/ })

}]);