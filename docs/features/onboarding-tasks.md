# WooCommerce Onboarding Tasks

The onboarding tasks provides a way to help store owners get their sites quickly set up.

The task list is easily extensible to allow inserting custom tasks around plugin setup that benefits store owners.

### Models and classes

**TaskLists**

The `TaskLists` class acts as a data store for tasks and provides a way to add or retrieve tasks and lists.

* `TaskLists::get_lists()` - Get all registered task lists
* `TaskLists::get_visible()` - Get visible task lists
* `TaskLists::get_list( $id )` - Get a list by ID
* `TaskLists::get_task( $id )` - Get a task by ID
* `TaskLists::add_list( $args )` - Add a list with the given arguments
* `TaskLists::add_task( $list_id, $args )` - Add a task to a given list ID

**Task**

*   `$task->dismiss()` - Dismiss the task
*   `$task->undo_dismiss()` - Undo dismissal of a task
*   `$task->is_dismissed()` - Check if a task is dismissed
*   `$task->snooze()` - Snooze a task for later
*   `$task->undo_snooze()` - Undo snoozing of a task
*   `$task->is_snoozed()` - Check if a task has been snoozed
*   `$task->mark_actioned()` - Mark a task as actioned.  Optional to help determine completion
*   `$task->is_actioned()` - Check if a task has been actioned
*   `$task->get_json()` - Get the camelcase JSON for use in the client
  * `id` (int) - Task ID.
  * `title` (string) - Task title.
  * `canView` (bool) - If a task should be viewable on a given store.
  * `content` (string) - Task content.
  * `additionalInfo` (object) - Additional extensible information about the task.
  * `actionLabel` (string) - The label used for the action button.
  * `actionUrl` (string) - The URL used when clicking the task if no task card is required.
  * `isComplete` (bool) - If the task has been completed or not.
  * `time` (string) - Length of time to complete the task.
  * `level` (integer) - A priority for task list sorting.
  * `isActioned` (bool) - If a task has been actioned.
  * `isDismissed` (bool) - If a task has been dismissed.
  * `isDismissable` (bool) - Whether or not a task is dismissable.
  * `isSnoozed` (bool) - If a task has been snoozed.
  * `isSnoozeable` (bool) - Whether or not a task can be snoozed.
  * `snoozedUntil` (int) - Timestamp in milliseconds that the task has been snoozed until.

**TaskList**

*   `$task_list->is_hidden()` - Check if a task list is hidden
*   `$task_list->is_visible()` - Check if a task list is visible (opposite value of `is_hidden()`)
*   `$task_list->hide()` - Hide a task list
*   `$task_list->show()` - Undo hiding of a task list
*   `$task_list->is_complete()` - Check if a task list is complete
*   `$task_list->add_task( $args )` - Add a task to a task list
*   `$task_list->get_viewable_tasks()` - Get tasks that are marked as `can_view` for the store
*   `$task_list->sort_tasks()` - Sort the tasks by provided `sort_by` value
*   `$task_list->get_json()` - Get the camelcase JSON for use in the client
  * `id` (int) - Task list ID.
  * `title` (string) - Task list title.
  * `isHidden` (bool) - If a task has been hidden.
  * `isVisible` (bool) - If a task list is visible.
  * `isComplete` (bool) - Whether or not all viewable tasks have been completed.
  * `tasks` (array) - An array of `Task` objects.

#### Data store actions

Using the `@woocommerce/data` package, the following selectors and actions are available to interact with the task lists.

### Endpoints

The following REST endpoints are available to interact with tasks.  For ease of use, we recommend using the data store actions above to interact with these endpoints.

*   `/wc-admin/onboarding/tasks` (GET) - Retrieve all tasks and their statuses
*   `/wc-admin/onboarding/tasks/{list_id}/hide` (POST) - Hide a given task list
*   `/wc-admin/onboarding/tasks/{task_id}/dismiss` (POST) - Dismiss a task
*   `/wc-admin/onboarding/tasks/{task_id}/undo_dismiss` (POST) - Undo dismissal of a task
*   `/wc-admin/onboarding/tasks/{task_id}/snooze` (POST) - Snooze a task for later
*   `/wc-admin/onboarding/tasks/{task_id}/undo_snooze` (POST) - Undo snoozing of a task
*   `/wc-admin/onboarding/tasks/{task_id}/action` (POST) - Mark a task as actioned