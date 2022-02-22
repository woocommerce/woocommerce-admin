(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[53],{

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (['products', 'payments', 'woocommerce-payments', 'tax', 'shipping', 'marketing', 'appearance']);

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(480);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _activity_panel_display_options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(171);
/* harmony import */ var _tasks_task_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(546);
/* harmony import */ var _tasks_placeholder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(525);
/* harmony import */ var _tasks_tasks_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(531);
/* harmony import */ var _tasks_tasks_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_tasks_tasks_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _allowed_tasks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(544);


/**
 * External dependencies
 */







/**
 * Internal dependencies
 */







const ExtendedTask = ({
  query
}) => {
  const {
    hideTaskList
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])(_woocommerce_data__WEBPACK_IMPORTED_MODULE_5__["ONBOARDING_STORE_NAME"]);
  const {
    updateOptions
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])(_woocommerce_data__WEBPACK_IMPORTED_MODULE_5__["OPTIONS_STORE_NAME"]);
  const {
    task
  } = query;
  const {
    isResolving,
    taskLists
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(select => {
    return {
      isResolving: select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_5__["ONBOARDING_STORE_NAME"]).isResolving('getTaskLists'),
      taskLists: select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_5__["ONBOARDING_STORE_NAME"]).getTaskLists()
    };
  });

  const toggleTaskList = taskList => {
    const {
      id,
      isHidden
    } = taskList;
    const newValue = !isHidden;
    Object(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_6__["recordEvent"])(newValue ? `${id}_tasklist_hide` : `${id}_tasklist_show`, {});
    hideTaskList(id);
  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    updateOptions({
      woocommerce_task_list_prompt_shown: true
    });
  }, [taskLists, isResolving]); // If a task detail is being shown, we shouldn't show the extended tasklist.

  if (task) {
    return null;
  }

  if (isResolving) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_tasks_placeholder__WEBPACK_IMPORTED_MODULE_9__[/* TasksPlaceholder */ "a"], {
      query: query
    });
  }

  const extendedTaskList = taskLists.find(list => {
    return list.id === 'extended';
  }); // See if we need to move any of the main tasks to the extended task list

  const setupTaskList = taskLists.find(list => {
    return list.id === 'setup';
  });
  const hasSetupPaymentsTask = setupTaskList.tasks.find(t => t.id === 'payments');
  extendedTaskList.tasks = [...new Set( // Filter out the additional payments task if it is already present in the setup tasks.
  extendedTaskList.tasks.filter(t => t.id !== 'payments' || !hasSetupPaymentsTask).concat((setupTaskList === null || setupTaskList === void 0 ? void 0 : setupTaskList.tasks.filter(unallowedTask => {
    return !_allowed_tasks__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].includes(unallowedTask.id) && unallowedTask.id !== 'store_details';
  })) || []))];

  if (extendedTaskList.tasks.length === 0) {
    return null;
  }

  const completedTasks = extendedTaskList.tasks.filter(extendedTaskListTask => {
    return extendedTaskListTask.completed;
  }); // Use custom isComplete since we're manually adding tasks
  // to the extended task list.

  const isComplete = completedTasks.length === extendedTaskList.tasks.length;
  const {
    id,
    isHidden,
    isVisible,
    isToggleable,
    title,
    tasks
  } = extendedTaskList;

  if (!isVisible) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    key: id
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_tasks_task_list__WEBPACK_IMPORTED_MODULE_8__[/* TaskList */ "a"], {
    id: id,
    isComplete: isComplete,
    query: query,
    tasks: tasks,
    title: title
  }), isToggleable && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_activity_panel_display_options__WEBPACK_IMPORTED_MODULE_7__[/* DisplayOption */ "a"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["MenuGroup"], {
    className: "woocommerce-layout__homescreen-display-options",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Display', 'woocommerce-admin')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {
    className: "woocommerce-layout__homescreen-extension-tasklist-toggle",
    icon: !isHidden && _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
    isSelected: !isHidden,
    role: "menuitemcheckbox",
    onClick: () => toggleTaskList(extendedTaskList)
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show things to do next', 'woocommerce-admin')))));
};

/* harmony default export */ __webpack_exports__["default"] = (ExtendedTask);

/***/ })

}]);