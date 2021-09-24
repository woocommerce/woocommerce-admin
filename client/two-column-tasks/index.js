/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { ONBOARDING_STORE_NAME, OPTIONS_STORE_NAME } from '@woocommerce/data';
import { useExperiment } from '@woocommerce/explat';

/**
 * Internal dependencies
 */
import '../task-list/style.scss';
import './style.scss';
import TaskList from './task-list';
import { TaskStep } from '../task-list/task-step';
import TaskListPlaceholder from './placeholder';

const taskDashboardSelect = ( select ) => {
	const { getOption, hasFinishedResolution } = select( OPTIONS_STORE_NAME );
	const trackedCompletedTasks =
		getOption( 'woocommerce_task_list_tracked_completed_tasks' ) || [];
	return {
		dismissedTasks: getOption( 'woocommerce_task_list_dismissed_tasks' ),
		remindMeLaterTasks: getOption(
			'woocommerce_task_list_remind_me_later_tasks'
		),
		isSetupTaskListHidden:
			getOption( 'woocommerce_task_list_hidden' ) === 'yes',
		isTaskListComplete:
			getOption( 'woocommerce_task_list_complete' ) === 'yes',
		trackedCompletedTasks,
		isResolving:
			! hasFinishedResolution( 'getOption', [
				'woocommerce_task_list_complete',
			] ) ||
			! hasFinishedResolution( 'getOption', [
				'woocommerce_task_list_hidden',
			] ) ||
			! hasFinishedResolution( 'getOption', [
				'woocommerce_task_list_remind_me_later_tasks',
			] ) ||
			! hasFinishedResolution( 'getOption', [
				'woocommerce_task_list_dismissed_tasks',
			] ) ||
			! hasFinishedResolution( 'getOption', [
				'woocommerce_task_list_tracked_completed_tasks',
			] ),
	};
};

const TaskDashboard = ( { query, twoColumns } ) => {
	const { updateOptions } = useDispatch( OPTIONS_STORE_NAME );
	const {
		trackedCompletedTasks,
		isSetupTaskListHidden,
		dismissedTasks,
		remindMeLaterTasks,
		isTaskListComplete,
	} = useSelect( taskDashboardSelect );

	const [ isLoadingExperiment, experimentAssignment ] = useExperiment(
		'woocommerce_tasklist_progression'
	);

	useEffect( () => {
		document.body.classList.add( 'woocommerce-onboarding' );
		document.body.classList.add( 'woocommerce-task-dashboard__body' );
	}, [] );

	const getCurrentTask = ( tasks ) => {
		const { task } = query;
		const currentTask = tasks.find( ( s ) => s.id === task );

		if ( ! currentTask ) {
			return null;
		}

		return currentTask;
	};

	const { task } = query;

	const { isResolving, taskList } = useSelect( ( select ) => {
		return {
			taskList: select( ONBOARDING_STORE_NAME ).getTaskLists(),
			isResolving: select( ONBOARDING_STORE_NAME ).isResolving(
				'getTaskLists'
			),
		};
	} );

	if ( isResolving || taskList.length === 0 ) {
		return <TaskListPlaceholder />;
	}

	const setupTasks = taskList[ 0 ].tasks;
	const currentTask = getCurrentTask( setupTasks || [] );

	if ( task && ! currentTask ) {
		return null;
	}

	if ( currentTask ) {
		return (
			<TaskStep taskContainer={ currentTask.container } query={ query } />
		);
	}

	return (
		<>
			{ setupTasks &&
				( ! isSetupTaskListHidden || task ) &&
				( isLoadingExperiment ? (
					<TaskListPlaceholder />
				) : (
					<TaskList
						name="task_list"
						eventName="tasklist"
						twoColumns={ twoColumns }
						expandingItems={
							experimentAssignment?.variationName === 'treatment'
						}
						dismissedTasks={ dismissedTasks || [] }
						remindMeLaterTasks={ remindMeLaterTasks || [] }
						isComplete={ isTaskListComplete }
						query={ query }
						tasks={ setupTasks }
						title={ __(
							'Get ready to start selling',
							'woocommerce-admin'
						) }
						trackedCompletedTasks={ trackedCompletedTasks || [] }
						onComplete={ () =>
							updateOptions( {
								woocommerce_default_homepage_layout:
									'two_columns',
							} )
						}
						onHide={ () =>
							updateOptions( {
								woocommerce_default_homepage_layout:
									'two_columns',
							} )
						}
					/>
				) ) }
		</>
	);
};

export default TaskDashboard;
