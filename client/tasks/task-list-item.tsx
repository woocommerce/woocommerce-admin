/**
 * External dependencies
 */
import { __, _n } from '@wordpress/i18n';
import {
	getHistory,
	getNewPath,
	updateQueryString,
} from '@woocommerce/navigation';
import { ONBOARDING_STORE_NAME, useUserPreferences } from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';
import { TaskItem } from '@woocommerce/experimental';
import { useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { TaskProps } from './task-list';
import './task-list.scss';

export type TaskListItemProps = {
	isExpandable: boolean;
	isExpanded: boolean;
	setExpandedTask: ( id: string ) => void;
	task: TaskProps;
};

export const TaskListItem: React.FC< TaskListItemProps > = ( {
	isExpandable = false,
	isExpanded = false,
	setExpandedTask,
	task,
} ) => {
	const { createNotice } = useDispatch( 'core/notices' );
	const {
		dismissTask,
		snoozeTask,
		undoDismissTask,
		undoSnoozeTask,
	} = useDispatch( ONBOARDING_STORE_NAME );
	const userPreferences = useUserPreferences();

	const {
		actionLabel,
		actionUrl,
		content,
		id,
		isComplete,
		isDismissable,
		isSnoozable,
		time,
		title,
	} = task;

	const onDismiss = () => {
		dismissTask();
		createNotice( 'success', __( 'Task dismissed' ), {
			actions: [
				{
					label: __( 'Undo', 'woocommerce-admin' ),
					onClick: () => undoDismissTask( id ),
				},
			],
		} );
	};

	const onSnooze = () => {
		snoozeTask();
		createNotice(
			'success',
			__( 'Task postponed until tomorrow', 'woocommerce-admin' ),
			{
				actions: [
					{
						label: __( 'Undo', 'woocommerce-admin' ),
						onClick: () => undoSnoozeTask( id ),
					},
				],
			}
		);
	};

	const getTaskStartedCount = () => {
		const trackedStartedTasks =
			userPreferences.task_list_tracked_started_tasks;
		if ( ! trackedStartedTasks || ! trackedStartedTasks[ id ] ) {
			return 0;
		}
		return trackedStartedTasks[ id ];
	};

	// @todo This would be better as a task endpoint that handles updating the count.
	const updateTrackStartedCount = () => {
		const newCount = getTaskStartedCount() + 1;
		const trackedStartedTasks =
			userPreferences.task_list_tracked_started_tasks || {};

		userPreferences.updateUserPreferences( {
			task_list_tracked_started_tasks: {
				...( trackedStartedTasks || {} ),
				[ id ]: newCount,
			},
		} );
	};

	const onClick = () => {
		recordEvent( 'tasklist_click', {
			task_name: id,
		} );

		if ( ! isComplete ) {
			updateTrackStartedCount();
		}

		if ( actionUrl ) {
			if ( actionUrl.startsWith( 'http' ) ) {
				window.location.href = actionUrl;
			} else {
				getHistory().push( getNewPath( {}, actionUrl, {} ) );
			}
			return;
		}

		updateQueryString( { task: id } );
	};

	return (
		<TaskItem
			key={ id }
			title={ title }
			completed={ isComplete }
			content={ content }
			onClick={
				! isExpandable || isComplete
					? onClick
					: () => setExpandedTask( id )
			}
			expandable={ isExpandable }
			expanded={ isExpandable && isExpanded }
			onDismiss={ isDismissable && onDismiss }
			remindMeLater={ isSnoozable && onSnooze }
			time={ time }
			action={ onClick }
			actionLabel={ actionLabel }
		/>
	);
};
