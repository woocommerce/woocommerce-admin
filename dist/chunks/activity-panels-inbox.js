(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[5],{

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ activity_card_ActivityCard; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ placeholder; });

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/gridicons/dist/notice-outline.js
var notice_outline = __webpack_require__(60);
var notice_outline_default = /*#__PURE__*/__webpack_require__.n(notice_outline);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(9);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(21);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(4);

// EXTERNAL MODULE: ./client/header/activity-panel/activity-card/style.scss
var style = __webpack_require__(519);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(3);

// CONCATENATED MODULE: ./client/header/activity-panel/activity-card/placeholder.js


/**
 * External dependencies
 */





class placeholder_ActivityCardPlaceholder extends external_wp_element_["Component"] {
  render() {
    const {
      className,
      hasAction,
      hasDate,
      hasSubtitle,
      lines
    } = this.props;
    const cardClassName = classnames_default()('woocommerce-activity-card is-loading', className);
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
    }, Object(external_lodash_["range"])(lines).map(i => Object(external_wp_element_["createElement"])("span", {
      className: "is-placeholder",
      key: i
    }))), hasAction && Object(external_wp_element_["createElement"])("div", {
      className: "woocommerce-activity-card__actions"
    }, Object(external_wp_element_["createElement"])("span", {
      className: "is-placeholder"
    })));
  }

}

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

const isDateString = value => // PHP date format: Y-m-d\TH:i:s.
/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(value);

class activity_card_ActivityCard extends external_wp_element_["Component"] {
  getCard() {
    const {
      actions,
      className,
      children,
      date,
      icon,
      subtitle,
      title,
      unread
    } = this.props;
    const cardClassName = classnames_default()('woocommerce-activity-card', className);
    const actionsList = Array.isArray(actions) ? actions : [actions];
    const dateString = isDateString(date) ? external_moment_default.a.utc(date).fromNow() : date;
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
    }, actionsList.map((item, i) => Object(external_wp_element_["cloneElement"])(item, {
      key: i
    }))));
  }

  render() {
    const {
      onClick
    } = this.props;

    if (onClick) {
      return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        className: "woocommerce-activity-card__button",
        onClick: onClick
      }, this.getCard());
    }

    return this.getCard();
  }

}

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

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getUrlParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getScreenName; });
/* unused harmony export sift */
/**
 * Get the URL params.
 *
 * @param {string} locationSearch - Querystring part of a URL, including the question mark (?).
 * @return {Object} - URL params.
 */
function getUrlParams(locationSearch) {
  if (locationSearch) {
    return locationSearch.substr(1).split('&').reduce((params, query) => {
      const chunks = query.split('=');
      const key = chunks[0];
      let value = decodeURIComponent(chunks[1]);
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
  let screenName = '';
  const {
    page,
    path,
    post_type: postType
  } = getUrlParams(window.location.search);

  if (page) {
    const currentPage = page === 'wc-admin' ? 'home_screen' : page;
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

const sift = (arr, partitioner) => arr.reduce((all, curr) => {
  all[!!partitioner(curr) ? 0 : 1].push(curr);
  return all;
}, [[], []]);

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(172);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(169);
/* harmony import */ var _woocommerce_experimental__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20);
/* harmony import */ var _woocommerce_experimental__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _header_activity_panel_activity_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(509);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(164);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(514);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(521);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_12__);


/**
 * External dependencies
 */








/**
 * Internal dependencies
 */






const renderEmptyCard = () => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_header_activity_panel_activity_card__WEBPACK_IMPORTED_MODULE_9__[/* ActivityCard */ "a"], {
  className: "woocommerce-empty-activity-card",
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Your inbox is empty', 'woocommerce-admin'),
  icon: false
}, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('As things begin to happen in your store your inbox will start to fill up. ' + "You'll see things like achievements, new feature announcements, extension recommendations and more!", 'woocommerce-admin'));

const onBodyLinkClick = (note, innerLink) => {
  Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_5__["recordEvent"])('inbox_action_click', {
    note_name: note.name,
    note_title: note.title,
    note_content_inner_link: innerLink
  });
};

const renderNotes = ({
  hasNotes,
  isBatchUpdating,
  lastRead,
  notes,
  onDismiss,
  onNoteActionClick
}) => {
  if (isBatchUpdating) {
    return;
  }

  if (!hasNotes) {
    return renderEmptyCard();
  }

  const screen = Object(_utils__WEBPACK_IMPORTED_MODULE_11__[/* getScreenName */ "a"])();

  const onNoteVisible = note => {
    Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_5__["recordEvent"])('inbox_note_view', {
      note_content: note.content,
      note_name: note.name,
      note_title: note.title,
      note_type: note.type,
      screen
    });
  };

  const notesArray = Object.keys(notes).map(key => notes[key]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_transition_group__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    role: "menu"
  }, notesArray.map(note => {
    const {
      id: noteId,
      is_deleted: isDeleted
    } = note;

    if (isDeleted) {
      return null;
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_transition_group__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      key: noteId,
      timeout: 500,
      classNames: "woocommerce-inbox-message"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_8__["InboxNoteCard"], {
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

const INBOX_QUERY = {
  page: 1,
  per_page: _woocommerce_data__WEBPACK_IMPORTED_MODULE_3__["QUERY_DEFAULTS"].pageSize,
  status: 'unactioned',
  type: _woocommerce_data__WEBPACK_IMPORTED_MODULE_3__["QUERY_DEFAULTS"].noteTypes,
  orderby: 'date',
  order: 'desc',
  _fields: ['id', 'name', 'title', 'content', 'type', 'status', 'actions', 'date_created', 'date_created_gmt', 'layout', 'image', 'is_deleted']
};

const InboxPanel = () => {
  const {
    createNotice
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])('core/notices');
  const {
    batchUpdateNotes,
    removeAllNotes,
    removeNote,
    updateNote,
    triggerNoteAction
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])(_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__["NOTES_STORE_NAME"]);
  const {
    isError,
    isResolvingNotes,
    isBatchUpdating,
    notes
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(select => {
    const {
      getNotes,
      getNotesError,
      isResolving,
      isNotesRequesting
    } = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__["NOTES_STORE_NAME"]);
    return {
      notes: getNotes(INBOX_QUERY),
      isError: Boolean(getNotesError('getNotes', [INBOX_QUERY])),
      isResolvingNotes: isResolving('getNotes', [INBOX_QUERY]),
      isBatchUpdating: isNotesRequesting('batchUpdateNotes')
    };
  });
  const {
    updateUserPreferences,
    ...userPrefs
  } = Object(_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__["useUserPreferences"])();
  const [lastRead] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(userPrefs.activity_panel_inbox_last_read);
  const [dismiss, setDismiss] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const mountTime = Date.now();
    const userDataFields = {
      activity_panel_inbox_last_read: mountTime
    };
    updateUserPreferences(userDataFields);
  }, []);

  const onDismiss = (note, type) => {
    setDismiss({
      note,
      type
    });
  };

  const closeDismissModal = async (confirmed = false) => {
    const noteNameDismissAll = dismiss.type === 'all' ? true : false;
    const screen = Object(_utils__WEBPACK_IMPORTED_MODULE_11__[/* getScreenName */ "a"])();
    Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_5__["recordEvent"])('inbox_action_dismiss', {
      note_name: dismiss.note.name,
      note_title: dismiss.note.title,
      note_name_dismiss_all: noteNameDismissAll,
      note_name_dismiss_confirmation: confirmed,
      screen
    });

    if (confirmed) {
      const noteId = dismiss.note.id;
      const removeAll = !noteId || noteNameDismissAll;

      try {
        let notesRemoved = [];

        if (removeAll) {
          notesRemoved = await removeAllNotes();
        } else {
          const noteRemoved = await removeNote(noteId);
          notesRemoved = [noteRemoved];
        }

        setDismiss(undefined);
        createNotice('success', notesRemoved.length > 1 ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('All messages dismissed', 'woocommerce-admin') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Message dismissed', 'woocommerce-admin'), {
          actions: [{
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Undo', 'woocommerce-admin'),
            onClick: () => {
              if (notesRemoved.length > 1) {
                batchUpdateNotes(notesRemoved.map(note => note.id), {
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
      } catch (e) {
        const numberOfNotes = removeAll ? notes.length : 1;
        createNotice('error', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_n"])('Message could not be dismissed', 'Messages could not be dismissed', numberOfNotes, 'woocommerce-admin'));
        setDismiss(undefined);
      }
    } else {
      setDismiss(undefined);
    }
  };

  const onNoteActionClick = (note, action) => {
    triggerNoteAction(note.id, action.id);
  };

  if (isError) {
    const title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('There was an error getting your inbox. Please try again.', 'woocommerce-admin');

    const actionLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Reload', 'woocommerce-admin');

    const actionCallback = () => {
      // @todo Add tracking for how often an error is displayed, and the reload action is clicked.
      window.location.reload();
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_2__["EmptyContent"], {
      title: title,
      actionLabel: actionLabel,
      actionURL: null,
      actionCallback: actionCallback
    });
  }

  const hasNotes = Object(_utils__WEBPACK_IMPORTED_MODULE_10__[/* hasValidNotes */ "b"])(notes); // @todo After having a pagination implemented we should call the method "getNotes" with a different query since
  // the current one is only getting 25 notes and the count of unread notes only will refer to this 25 and not all the existing ones.

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woocommerce-homepage-notes-wrapper"
  }, (isResolvingNotes || isBatchUpdating) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_2__["Section"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_8__["InboxNotePlaceholder"], {
    className: "banner message-is-unread"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_2__["Section"], null, !isResolvingNotes && !isBatchUpdating && renderNotes({
    hasNotes,
    isBatchUpdating,
    lastRead,
    notes,
    onDismiss,
    onNoteActionClick
  })), dismiss && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_8__["InboxDismissConfirmationModal"], {
    onClose: closeDismissModal,
    onDismiss: () => closeDismissModal(true)
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (InboxPanel);

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=Object.assign||function(a){for(var c,b=1;b<arguments.length;b++)for(var d in c=arguments[b],c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d]);return a};Object.defineProperty(exports,'__esModule',{value:!0});exports.default=function(a){var b=a.size,c=b===void 0?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,['size','onClick','icon','className']),j=['gridicon','gridicons-notice-outline',f,!!function h(k){return 0==k%18}(c)&&'needs-offset',!1,!1].filter(Boolean).join(' ');return _react2.default.createElement('svg',_extends({className:j,height:c,width:c,onClick:d},g,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 13h-2v2h2v-2zm-2-2h2l.5-6h-3l.5 6z'})))};var _react=__webpack_require__(5),_react2=_interopRequireDefault(_react);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){var d={};for(var c in a)0<=b.indexOf(c)||Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}module.exports=exports['default'];


/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxPanel", function() { return InboxPanel; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inbox_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(583);
/* harmony import */ var _inbox_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inbox_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inbox_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(520);
/* harmony import */ var _abbreviated_notifications_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(253);


/**
 * Internal dependencies
 */



const InboxPanel = ({
  hasAbbreviatedNotifications,
  thingsToDoNextCount
}) => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woocommerce-notification-panels"
  }, hasAbbreviatedNotifications && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_abbreviated_notifications_panel__WEBPACK_IMPORTED_MODULE_3__[/* AbbreviatedNotificationsPanel */ "b"], {
    thingsToDoNextCount: thingsToDoNextCount
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_inbox_panel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null));
};
/* harmony default export */ __webpack_exports__["default"] = (InboxPanel);

/***/ })

}]);