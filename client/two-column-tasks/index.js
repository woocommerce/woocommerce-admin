/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import {
	ONBOARDING_STORE_NAME,
	OPTIONS_STORE_NAME,
	PLUGINS_STORE_NAME,
	SETTINGS_STORE_NAME,
} from '@woocommerce/data';
import { useExperiment } from '@woocommerce/explat';
import { recordEvent } from '@woocommerce/tracks';

/**
 * Internal dependencies
 */
import '../task-list/style.scss';
import './style.scss';
import { getAllTasks, taskSort } from '../task-list/tasks';
import { getCountryCode } from '../dashboard/utils';
import TaskList from './task-list';
import { TaskStep } from '../task-list/task-step';
import TaskListPlaceholder from '../task-list/placeholder';

const EMPTY_ARRAY = [];
const taskDashboardSelect = ( select ) => {
	const { getFreeExtensions, getProfileItems, getTasksStatus } = select(
		ONBOARDING_STORE_NAME
	);
	const { getSettings } = select( SETTINGS_STORE_NAME );
	const { getOption, hasFinishedResolution } = select( OPTIONS_STORE_NAME );
	const {
		getActivePlugins,
		getInstalledPlugins,
		isJetpackConnected,
	} = select( PLUGINS_STORE_NAME );
	const profileItems = getProfileItems();

	const trackedCompletedTasks =
		getOption( 'woocommerce_task_list_tracked_completed_tasks' ) ||
		EMPTY_ARRAY;

	const trackedCompletedActions =
		getOption( 'woocommerce_task_list_tracked_completed_actions' ) ||
		EMPTY_ARRAY;

	const { general: generalSettings = {} } = getSettings( 'general' );
	const countryCode = getCountryCode(
		generalSettings.woocommerce_default_country
	);
	const {
		woocommerce_store_address: storeAddress,
		woocommerce_default_country: defaultCountry,
		woocommerce_store_postcode: storePostCode,
	} = generalSettings;
	const hasCompleteAddress = Boolean(
		storeAddress && defaultCountry && storePostCode
	);

	const activePlugins = getActivePlugins();
	const installedPlugins = getInstalledPlugins();
	const onboardingStatus = getTasksStatus();

	return {
		activePlugins,
		countryCode,
		dismissedTasks: getOption( 'woocommerce_task_list_dismissed_tasks' ),
		freeExtensions: getFreeExtensions(),
		remindMeLaterTasks: getOption(
			'woocommerce_task_list_remind_me_later_tasks'
		),
		isExtendedTaskListComplete:
			getOption( 'woocommerce_extended_task_list_complete' ) === 'yes',
		isExtendedTaskListHidden:
			getOption( 'woocommerce_extended_task_list_hidden' ) === 'yes',
		isJetpackConnected: isJetpackConnected(),
		isSetupTaskListHidden:
			getOption( 'woocommerce_task_list_hidden' ) === 'yes',
		isTaskListComplete:
			getOption( 'woocommerce_task_list_complete' ) === 'yes',
		installedPlugins,
		trackedCompletedActions,
		onboardingStatus,
		profileItems,
		trackedCompletedTasks,
		hasCompleteAddress,
		isResolving:
			! hasFinishedResolution( 'getOption', [
				'woocommerce_task_list_complete',
			] ) ||
			! hasFinishedResolution( 'getOption', [
				'woocommerce_task_list_hidden',
			] ) ||
			! hasFinishedResolution( 'getOption', [
				'woocommerce_extended_task_list_complete',
			] ) ||
			! hasFinishedResolution( 'getOption', [
				'woocommerce_extended_task_list_hidden',
			] ) ||
			! hasFinishedResolution( 'getOption', [
				'woocommerce_task_list_remind_me_later_tasks',
			] ) ||
			! hasFinishedResolution( 'getOption', [
				'woocommerce_task_list_tracked_completed_tasks',
			] ) ||
			! hasFinishedResolution( 'getOption', [
				'woocommerce_task_list_dismissed_tasks',
			] ),
	};
};

const TaskDashboard = ( { userPreferences, query, twoColumns } ) => {
	const { createNotice } = useDispatch( 'core/notices' );
	const { updateOptions } = useDispatch( OPTIONS_STORE_NAME );
	const { installAndActivatePlugins } = useDispatch( PLUGINS_STORE_NAME );
	const {
		trackedCompletedTasks,
		activePlugins,
		countryCode,
		freeExtensions,
		installedPlugins,
		isJetpackConnected,
		onboardingStatus,
		profileItems,
		isSetupTaskListHidden,
		dismissedTasks,
		remindMeLaterTasks,
		isTaskListComplete,
		hasCompleteAddress,
		trackedCompletedActions,
		isResolving,
	} = useSelect( taskDashboardSelect );

	const [ isCartModalOpen, setIsCartModalOpen ] = useState( false );
	const [ isLoadingExperiment, experimentAssignment ] = useExperiment(
		'woocommerce_tasklist_progression'
	);

	useEffect( () => {
		document.body.classList.add( 'woocommerce-onboarding' );
		document.body.classList.add( 'woocommerce-task-dashboard__body' );
	}, [] );

	const getTaskStartedCount = ( taskName ) => {
		const trackedStartedTasks =
			userPreferences.task_list_tracked_started_tasks;
		if ( ! trackedStartedTasks || ! trackedStartedTasks[ taskName ] ) {
			return 0;
		}
		return trackedStartedTasks[ taskName ];
	};

	const updateTrackStartedCount = ( taskName, newCount ) => {
		const trackedStartedTasks =
			userPreferences.task_list_tracked_started_tasks || {};
		userPreferences.updateUserPreferences( {
			task_list_tracked_started_tasks: {
				...( trackedStartedTasks || {} ),
				[ taskName ]: newCount,
			},
		} );
	};

	const isTaskCompleted = ( taskName ) => {
		if ( ! trackedCompletedTasks ) {
			return false;
		}
		return trackedCompletedTasks.includes( taskName );
	};

	const onTaskSelect = ( taskName ) => {
		const trackStartedCount = getTaskStartedCount( taskName );
		recordEvent( 'tasklist_click', {
			task_name: taskName,
		} );

		if ( ! isTaskCompleted( taskName ) ) {
			updateTrackStartedCount( taskName, trackStartedCount + 1 );
		}
	};

	const toggleCartModal = () => {
		if ( ! isCartModalOpen ) {
			recordEvent( 'tasklist_purchase_extensions' );
		}

		setIsCartModalOpen( ! isCartModalOpen );
	};

	const getCurrentTask = ( tasks ) => {
		const { task } = query;
		const currentTask = tasks.find( ( s ) => s.key === task );

		if ( ! currentTask ) {
			return null;
		}

		return currentTask;
	};

	const allTasks = getAllTasks( {
		activePlugins,
		countryCode,
		createNotice,
		freeExtensions,
		installAndActivatePlugins,
		installedPlugins,
		isJetpackConnected,
		onboardingStatus,
		profileItems,
		query,
		toggleCartModal,
		onTaskSelect,
		hasCompleteAddress,
		trackedCompletedActions,
	} );

	const { extension, setup: setupTasks } = allTasks;
	const { task } = query;

	const extensionTasks =
		Array.isArray( extension ) && extension.sort( taskSort );

	const currentTask = getCurrentTask( [
		...( extensionTasks || [] ),
		...( setupTasks || [] ),
	] );

	if ( task && ! currentTask ) {
		return null;
	}
	if ( currentTask ) {
		return (
			<TaskStep taskContainer={ currentTask.container } query={ query } />
		);
	}

	if ( isResolving ) {
		return <TaskListPlaceholder />;
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
