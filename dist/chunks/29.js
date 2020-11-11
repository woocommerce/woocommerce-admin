(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[29],{

/***/ "./client/inbox-panel/action.js":
/*!**************************************!*\
  !*** ./client/inbox-panel/action.js ***!
  \**************************************/
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/compose */ "./node_modules/@wordpress/compose/build-module/index.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @woocommerce/wc-admin-settings */ "./client/settings/index.js");
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @woocommerce/data */ "@woocommerce/data");
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_13__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */









var InboxNoteAction = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(InboxNoteAction, _Component);

  var _super = _createSuper(InboxNoteAction);

  function InboxNoteAction(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InboxNoteAction);

    _this = _super.call(this, props);
    _this.state = {
      inAction: false
    };
    _this.handleActionClick = _this.handleActionClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InboxNoteAction, [{
    key: "handleActionClick",
    value: function handleActionClick(event) {
      var _this$props = this.props,
          action = _this$props.action,
          actionCallback = _this$props.actionCallback,
          batchUpdateNotes = _this$props.batchUpdateNotes,
          createNotice = _this$props.createNotice,
          noteId = _this$props.noteId,
          triggerNoteAction = _this$props.triggerNoteAction,
          removeAllNotes = _this$props.removeAllNotes,
          removeNote = _this$props.removeNote,
          onClick = _this$props.onClick,
          updateNote = _this$props.updateNote;
      var href = event.target.href || '';
      var inAction = true;

      if (href.length && !href.startsWith(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_12__["ADMIN_URL"])) {
        event.preventDefault();
        inAction = false; // link buttons shouldn't be "busy".

        window.open(href, '_blank');
      }

      if (!action) {
        if (noteId) {
          removeNote(noteId).then(function () {
            createNotice('success', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Message dismissed.', 'woocommerce-admin'), {
              actions: [{
                label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Undo', 'woocommerce-admin'),
                onClick: function onClick() {
                  updateNote(noteId, {
                    is_deleted: 0
                  });
                }
              }]
            });
          }).catch(function () {
            createNotice('error', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Message could not be dismissed.', 'woocommerce-admin'));
          });
        } else {
          removeAllNotes().then(function (notes) {
            createNotice('success', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('All messages dismissed.', 'woocommerce-admin'), {
              actions: [{
                label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Undo', 'woocommerce-admin'),
                onClick: function onClick() {
                  batchUpdateNotes(notes.map(function (note) {
                    return note.id;
                  }), {
                    is_deleted: 0
                  });
                }
              }]
            });
          }).catch(function () {
            createNotice('error', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Message could not be dismissed.', 'woocommerce-admin'));
          });
        }

        actionCallback(true);
      } else {
        this.setState({
          inAction: inAction
        }, function () {
          triggerNoteAction(noteId, action.id);

          if (!!onClick) {
            onClick();
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          action = _this$props2.action,
          dismiss = _this$props2.dismiss,
          label = _this$props2.label;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        isSecondary: true,
        isBusy: this.state.inAction,
        disabled: this.state.inAction,
        href: action && action.url && action.url.length ? action.url : undefined,
        onClick: this.handleActionClick
      }, dismiss ? label : action.label);
    }
  }]);

  return InboxNoteAction;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

InboxNoteAction.propTypes = {
  noteId: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
  label: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
  dismiss: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  actionCallback: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  action: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number.isRequired,
    url: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
    label: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string.isRequired,
    primary: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool.isRequired
  }),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_9__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  var _dispatch2 = dispatch(_woocommerce_data__WEBPACK_IMPORTED_MODULE_13__["NOTES_STORE_NAME"]),
      batchUpdateNotes = _dispatch2.batchUpdateNotes,
      removeAllNotes = _dispatch2.removeAllNotes,
      removeNote = _dispatch2.removeNote,
      updateNote = _dispatch2.updateNote,
      triggerNoteAction = _dispatch2.triggerNoteAction;

  return {
    batchUpdateNotes: batchUpdateNotes,
    createNotice: createNotice,
    removeAllNotes: removeAllNotes,
    removeNote: removeNote,
    triggerNoteAction: triggerNoteAction,
    updateNote: updateNote
  };
}))(InboxNoteAction));

/***/ }),

/***/ "./client/inbox-panel/card.js":
/*!************************************!*\
  !*** ./client/inbox-panel/card.js ***!
  \************************************/
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-visibility-sensor */ "./node_modules/react-visibility-sensor/dist/visibility-sensor.js");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @woocommerce/components */ "@woocommerce/components");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @woocommerce/tracks */ "@woocommerce/tracks");
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./action */ "./client/inbox-panel/action.js");
/* harmony import */ var _lib_sanitize_html__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../lib/sanitize-html */ "./client/lib/sanitize-html/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./style.scss */ "./client/inbox-panel/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utils */ "./client/utils/index.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */









/**
 * Internal dependencies
 */






var InboxNoteCard = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(InboxNoteCard, _Component);

  var _super = _createSuper(InboxNoteCard);

  function InboxNoteCard(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InboxNoteCard);

    _this = _super.call(this, props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "onActionClicked", function (action) {
      if (!action.actioned_text) {
        return;
      }

      _this.setState({
        clickedActionText: action.actioned_text
      });
    });

    _this.onVisible = _this.onVisible.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.hasBeenSeen = false;
    _this.state = {
      isDismissModalOpen: false,
      dismissType: null,
      clickedActionText: null
    };
    _this.openDismissModal = _this.openDismissModal.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.closeDismissModal = _this.closeDismissModal.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.bodyNotificationRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createRef"])();
    _this.screen = Object(_utils__WEBPACK_IMPORTED_MODULE_19__["getScreenName"])();
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InboxNoteCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.bodyNotificationRef.current) {
        this.bodyNotificationRef.current.addEventListener('click', function (event) {
          return _this2.handleBodyClick(event, _this2.props);
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      if (this.bodyNotificationRef.current) {
        this.bodyNotificationRef.current.removeEventListener('click', function (event) {
          return _this3.handleBodyClick(event, _this3.props);
        });
      }
    }
  }, {
    key: "handleBodyClick",
    value: function handleBodyClick(event, props) {
      var innerLink = event.target.href;

      if (innerLink) {
        var note = props.note;
        Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_15__["recordEvent"])('wcadmin_inbox_action_click', {
          note_name: note.name,
          note_title: note.title,
          note_content_inner_link: innerLink
        });
      }
    } // Trigger a view Tracks event when the note is seen.

  }, {
    key: "onVisible",
    value: function onVisible(isVisible) {
      if (isVisible && !this.hasBeenSeen) {
        var note = this.props.note;
        Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_15__["recordEvent"])('inbox_note_view', {
          note_content: note.content,
          note_name: note.name,
          note_title: note.title,
          note_type: note.type,
          screen: this.screen
        });
        this.hasBeenSeen = true;
      }
    }
  }, {
    key: "openDismissModal",
    value: function openDismissModal(type, onToggle) {
      this.setState({
        isDismissModalOpen: true,
        dismissType: type
      });
      onToggle();
    }
  }, {
    key: "closeDismissModal",
    value: function closeDismissModal(noteNameDismissConfirmation) {
      var dismissType = this.state.dismissType;
      var note = this.props.note;
      var noteNameDismissAll = dismissType === 'all' ? true : false;
      Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_15__["recordEvent"])('inbox_action_dismiss', {
        note_name: note.name,
        note_title: note.title,
        note_name_dismiss_all: noteNameDismissAll,
        note_name_dismiss_confirmation: noteNameDismissConfirmation || false,
        screen: this.screen
      });
      this.setState({
        isDismissModalOpen: false
      });
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(event, onClose) {
      var dropdownClasses = ['woocommerce-admin-dismiss-notification', 'components-popover__content']; // This line is for IE compatibility.

      var relatedTarget = event.relatedTarget ? event.relatedTarget : document.activeElement;
      var isClickOutsideDropdown = relatedTarget ? dropdownClasses.some(function (className) {
        return relatedTarget.className.includes(className);
      }) : false;

      if (isClickOutsideDropdown) {
        event.preventDefault();
      } else {
        onClose();
      }
    }
  }, {
    key: "renderDismissButton",
    value: function renderDismissButton() {
      var _this4 = this;

      var clickedActionText = this.state.clickedActionText;

      if (clickedActionText) {
        return null;
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], {
        contentClassName: "woocommerce-admin-dismiss-dropdown",
        position: "bottom right",
        renderToggle: function renderToggle(_ref) {
          var onClose = _ref.onClose,
              onToggle = _ref.onToggle;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
            isTertiary: true,
            onClick: onToggle,
            onBlur: function onBlur(event) {
              return _this4.handleBlur(event, onClose);
            }
          }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Dismiss', 'woocommerce-admin'));
        },
        focusOnMount: false,
        popoverProps: {
          noArrow: true
        },
        renderContent: function renderContent(_ref2) {
          var onToggle = _ref2.onToggle;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("ul", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
            className: "woocommerce-admin-dismiss-notification",
            onClick: function onClick() {
              return _this4.openDismissModal('this', onToggle);
            }
          }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Dismiss this message', 'woocommerce-admin'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
            className: "woocommerce-admin-dismiss-notification",
            onClick: function onClick() {
              return _this4.openDismissModal('all', onToggle);
            }
          }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Dismiss all messages', 'woocommerce-admin'))));
        }
      });
    }
  }, {
    key: "getDismissConfirmationButton",
    value: function getDismissConfirmationButton() {
      var note = this.props.note;
      var dismissType = this.state.dismissType;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_action__WEBPACK_IMPORTED_MODULE_16__["default"], {
        key: note.id,
        noteId: dismissType === 'all' ? null : note.id,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Yes, I'm sure", 'woocommerce-admin'),
        actionCallback: this.closeDismissModal,
        dismiss: true,
        screen: this.screen
      });
    }
  }, {
    key: "renderDismissConfirmationModal",
    value: function renderDismissConfirmationModal() {
      var _this5 = this;

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
        title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Are you sure?', 'woocommerce-admin')),
        onRequestClose: function onRequestClose() {
          return _this5.closeDismissModal();
        },
        className: "woocommerce-inbox-dismiss-confirmation_modal"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "woocommerce-inbox-dismiss-confirmation_wrapper"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Dismissed messages cannot be viewed again', 'woocommerce-admin')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "woocommerce-inbox-dismiss-confirmation_buttons"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        isSecondary: true,
        onClick: function onClick() {
          return _this5.closeDismissModal();
        }
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Cancel', 'woocommerce-admin')), this.getDismissConfirmationButton())));
    }
  }, {
    key: "renderActions",
    value: function renderActions(note) {
      var _this6 = this;

      var noteActions = note.actions,
          noteId = note.id;
      var clickedActionText = this.state.clickedActionText;

      if (!!clickedActionText) {
        return clickedActionText;
      }

      if (!noteActions) {
        return;
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, noteActions.map(function (action, index) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_action__WEBPACK_IMPORTED_MODULE_16__["default"], {
          key: index,
          noteId: noteId,
          action: action,
          onClick: function onClick() {
            return _this6.onActionClicked(action);
          }
        });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          lastRead = _this$props.lastRead,
          note = _this$props.note;
      var isDismissModalOpen = this.state.isDismissModalOpen;
      var content = note.content,
          dateCreated = note.date_created,
          dateCreatedGmt = note.date_created_gmt,
          image = note.image,
          isDeleted = note.is_deleted,
          layout = note.layout,
          status = note.status,
          title = note.title;

      if (isDeleted) {
        return null;
      }

      var unread = !lastRead || !dateCreatedGmt || new Date(dateCreatedGmt + 'Z').getTime() > lastRead;
      var date = dateCreated;
      var hasImage = layout !== 'plain' && layout !== '';
      var cardClassName = classnames__WEBPACK_IMPORTED_MODULE_13___default()('woocommerce-inbox-message', layout, {
        'message-is-unread': unread && status === 'unactioned'
      });
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_11___default.a, {
        onChange: this.onVisible
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("section", {
        className: cardClassName
      }, hasImage && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "woocommerce-inbox-message__image"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("img", {
        src: image,
        alt: ""
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "woocommerce-inbox-message__wrapper"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "woocommerce-inbox-message__content"
      }, date && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", {
        className: "woocommerce-inbox-message__date"
      }, moment__WEBPACK_IMPORTED_MODULE_12___default.a.utc(date).fromNow()), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_14__["H"], {
        className: "woocommerce-inbox-message__title"
      }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_14__["Section"], {
        className: "woocommerce-inbox-message__text"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("span", {
        dangerouslySetInnerHTML: Object(_lib_sanitize_html__WEBPACK_IMPORTED_MODULE_17__["default"])(content),
        ref: this.bodyNotificationRef
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "woocommerce-inbox-message__actions"
      }, this.renderActions(note), this.renderDismissButton())), isDismissModalOpen && this.renderDismissConfirmationModal()));
    }
  }]);

  return InboxNoteCard;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);

InboxNoteCard.propTypes = {
  note: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,
    status: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
    title: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
    content: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
    date_created: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
    date_created_gmt: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
    actions: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number.isRequired,
      url: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
      label: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired,
      primary: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool.isRequired
    })),
    layout: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
    image: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
    is_deleted: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool
  }),
  lastRead: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (InboxNoteCard);

/***/ }),

/***/ "./client/inbox-panel/index.js":
/*!*************************************!*\
  !*** ./client/inbox-panel/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "./node_modules/@wordpress/compose/build-module/index.js");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @woocommerce/components */ "@woocommerce/components");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @woocommerce/data */ "@woocommerce/data");
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _header_activity_panel_activity_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../header/activity-panel/activity-card */ "./client/header/activity-panel/activity-card/index.js");
/* harmony import */ var _placeholder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./placeholder */ "./client/inbox-panel/placeholder.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./card */ "./client/inbox-panel/card.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./client/inbox-panel/utils.js");



/**
 * External dependencies
 */







/**
 * Internal dependencies
 */






var renderEmptyCard = function renderEmptyCard() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_header_activity_panel_activity_card__WEBPACK_IMPORTED_MODULE_8__["ActivityCard"], {
    className: "woocommerce-empty-activity-card",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Your inbox is empty', 'woocommerce-admin'),
    icon: false
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('As things begin to happen in your store your inbox will start to fill up. ' + "You'll see things like achievements, new feature announcements, extension recommendations and more!", 'woocommerce-admin'));
};

var renderNotes = function renderNotes(_ref) {
  var hasNotes = _ref.hasNotes,
      isBatchUpdating = _ref.isBatchUpdating,
      lastRead = _ref.lastRead,
      notes = _ref.notes;

  if (isBatchUpdating) {
    return;
  }

  if (!hasNotes) {
    return renderEmptyCard();
  }

  var notesArray = Object.keys(notes).map(function (key) {
    return notes[key];
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_transition_group__WEBPACK_IMPORTED_MODULE_7__["TransitionGroup"], {
    role: "menu"
  }, notesArray.map(function (note) {
    var noteId = note.id,
        isDeleted = note.is_deleted;

    if (isDeleted) {
      return null;
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_transition_group__WEBPACK_IMPORTED_MODULE_7__["CSSTransition"], {
      key: noteId,
      timeout: 500,
      classNames: "woocommerce-inbox-message"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_card__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: noteId,
      note: note,
      lastRead: lastRead
    }));
  }));
};

var InboxPanel = function InboxPanel(props) {
  var isError = props.isError,
      isResolving = props.isResolving,
      isBatchUpdating = props.isBatchUpdating,
      notes = props.notes;

  var _useUserPreferences = Object(_woocommerce_data__WEBPACK_IMPORTED_MODULE_5__["useUserPreferences"])(),
      updateUserPreferences = _useUserPreferences.updateUserPreferences,
      userPrefs = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_useUserPreferences, ["updateUserPreferences"]);

  var lastRead = userPrefs.activity_panel_inbox_last_read;
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var mountTime = Date.now();
    return function () {
      var userDataFields = {
        activity_panel_inbox_last_read: mountTime
      };
      updateUserPreferences(userDataFields);
    };
  }, []);

  if (isError) {
    var title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('There was an error getting your inbox. Please try again.', 'woocommerce-admin');

    var actionLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Reload', 'woocommerce-admin');

    var actionCallback = function actionCallback() {
      // @todo Add tracking for how often an error is displayed, and the reload action is clicked.
      window.location.reload();
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_4__["EmptyContent"], {
      title: title,
      actionLabel: actionLabel,
      actionURL: null,
      actionCallback: actionCallback
    });
  }

  var hasNotes = Object(_utils__WEBPACK_IMPORTED_MODULE_11__["hasValidNotes"])(notes); // @todo After having a pagination implemented we should call the method "getNotes" with a different query since
  // the current one is only getting 25 notes and the count of unread notes only will refer to this 25 and not all the existing ones.

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "woocommerce-homepage-notes-wrapper"
  }, (isResolving || isBatchUpdating) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_4__["Section"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_placeholder__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "banner message-is-unread"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_4__["Section"], null, !isResolving && !isBatchUpdating && renderNotes({
    hasNotes: hasNotes,
    isBatchUpdating: isBatchUpdating,
    lastRead: lastRead,
    notes: notes
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["withSelect"])(function (select) {
  var _select = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_5__["NOTES_STORE_NAME"]),
      getNotes = _select.getNotes,
      getNotesError = _select.getNotesError,
      isResolving = _select.isResolving,
      isNotesRequesting = _select.isNotesRequesting;

  var inboxQuery = {
    page: 1,
    per_page: _woocommerce_data__WEBPACK_IMPORTED_MODULE_5__["QUERY_DEFAULTS"].pageSize,
    status: 'unactioned',
    type: _woocommerce_data__WEBPACK_IMPORTED_MODULE_5__["QUERY_DEFAULTS"].noteTypes,
    orderby: 'date',
    order: 'desc',
    _fields: ['id', 'name', 'title', 'content', 'type', 'status', 'actions', 'date_created', 'date_created_gmt', 'layout', 'image', 'is_deleted']
  };
  return {
    notes: getNotes(inboxQuery),
    isError: Boolean(getNotesError('getNotes', [inboxQuery])),
    isResolving: isResolving('getNotes', [inboxQuery]),
    isBatchUpdating: isNotesRequesting('batchUpdateNotes')
  };
}))(InboxPanel));

/***/ }),

/***/ "./client/inbox-panel/placeholder.js":
/*!*******************************************!*\
  !*** ./client/inbox-panel/placeholder.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */



var InboxNotePlaceholder = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(InboxNotePlaceholder, _Component);

  var _super = _createSuper(InboxNotePlaceholder);

  function InboxNotePlaceholder() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InboxNotePlaceholder);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InboxNotePlaceholder, [{
    key: "render",
    value: function render() {
      var className = this.props.className;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "woocommerce-inbox-message is-placeholder ".concat(className),
        "aria-hidden": true
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "woocommerce-inbox-message__image"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "banner-block"
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "woocommerce-inbox-message__wrapper"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "woocommerce-inbox-message__content"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "woocommerce-inbox-message__date"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "sixth-line"
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "woocommerce-inbox-message__title"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "line"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "line"
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "woocommerce-inbox-message__text"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "line"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "third-line"
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "woocommerce-inbox-message__actions"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "fifth-line"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "fifth-line"
      }))));
    }
  }]);

  return InboxNotePlaceholder;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

InboxNotePlaceholder.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (InboxNotePlaceholder);

/***/ }),

/***/ "./client/inbox-panel/style.scss":
/*!***************************************!*\
  !*** ./client/inbox-panel/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./client/lib/sanitize-html/index.js":
/*!*******************************************!*\
  !*** ./client/lib/sanitize-html/index.js ***!
  \*******************************************/
/*! exports provided: ALLOWED_TAGS, ALLOWED_ATTR, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALLOWED_TAGS", function() { return ALLOWED_TAGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALLOWED_ATTR", function() { return ALLOWED_ATTR; });
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

var ALLOWED_TAGS = ['a', 'b', 'em', 'i', 'strong', 'p', 'br'];
var ALLOWED_ATTR = ['target', 'href', 'rel', 'name', 'download'];
/* harmony default export */ __webpack_exports__["default"] = (function (html) {
  return {
    __html: Object(dompurify__WEBPACK_IMPORTED_MODULE_0__["sanitize"])(html, {
      ALLOWED_TAGS: ALLOWED_TAGS,
      ALLOWED_ATTR: ALLOWED_ATTR
    })
  };
});

/***/ }),

/***/ "./client/utils/index.js":
/*!*******************************!*\
  !*** ./client/utils/index.js ***!
  \*******************************/
/*! exports provided: getUrlParams, getScreenName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlParams", function() { return getUrlParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScreenName", function() { return getScreenName; });
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

/***/ })

}]);
//# sourceMappingURL=29.min.js.map