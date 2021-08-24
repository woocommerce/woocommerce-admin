/**
 * External dependencies
 */
import { __, _n } from '@wordpress/i18n';
import { getHistory, getNewPath } from '@woocommerce/navigation';
import { ONBOARDING_STORE_NAME, useDispatch } from '@wordpress/data';
import { TaskItem } from '@woocommerce/experimental';

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

export const TaskListItem: React.FC< TaskListItemProps > = ( { isExpandable = false, isExpanded = false, setExpandedTask, task } ) => {
	const { createNotice } = useDispatch( 'core/notices' );
	const { dismissTask, snoozeTask, undoDismissTask, undoSnoozeTask } = useDispatch( ONBOARDING_STORE_NAME );
	const { actionLabel, actionUrl, content, id, isComplete, isDismissable, isSnoozable, time, title,  } = task;

	const onDismiss = ( { key, onDismiss } ) => {
		dismissTask();
		createNotice( 'success', __( 'Task dismissed' ), {
			actions: [
				{
					label: __( 'Undo', 'woocommerce-admin' ),
					onClick: () => undoDismissTask( key ),
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

	const onClick = () => {
		if ( actionUrl.startsWith( 'http' ) ) {
			window.location = actionUrl;
		} else {
			getHistory().push(
				getNewPath( {}, actionUrl, {} )
			);
		}
	}

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
