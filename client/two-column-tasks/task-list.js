/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect, useRef, useState } from '@wordpress/element';
import { Button, Card, CardHeader } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { EllipsisMenu } from '@woocommerce/components';
import { updateQueryString } from '@woocommerce/navigation';
import { OPTIONS_STORE_NAME, ONBOARDING_STORE_NAME } from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';
import { List, TaskItem } from '@woocommerce/experimental';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import '../task-list/task-list.scss';
import taskHeaders from './task-headers';

const DAY_IN_MS = 24 * 60 * 60 * 1000;

export const TaskList = ( {
	query,
	name,
	eventName,
	isComplete,
	dismissedTasks,
	remindMeLaterTasks,
	tasks,
	trackedCompletedTasks: totalTrackedCompletedTasks,
	onComplete,
	onHide,
	twoColumns,
} ) => {
	const { createNotice } = useDispatch( 'core/notices' );
	const { updateOptions } = useDispatch( OPTIONS_STORE_NAME );
	const { profileItems } = useSelect( ( select ) => {
		const { getProfileItems } = select( ONBOARDING_STORE_NAME );
		return {
			profileItems: getProfileItems(),
		};
	} );

	const [ headerContent, setHeaderContent ] = useState( '' );
	const [ activeTaskKey, setActiveTaskKey ] = useState( '' );

	const prevQueryRef = useRef( query );
	useEffect( () => {
		recordTaskListView();
	}, [] );

	useEffect( () => {
		const { task: prevTask } = prevQueryRef.current;
		const { task } = query;

		if ( prevTask !== task ) {
			window.document.documentElement.scrollTop = 0;
			prevQueryRef.current = query;
		}

		possiblyCompleteTaskList();
		possiblyTrackCompletedTasks();
	}, [ query ] );

	const nowTimestamp = Date.now();
	const visibleTasks = tasks.filter(
		( task ) =>
			task.isVisible &&
			task.id !== 'store_details' &&
			! dismissedTasks.includes( task.id ) &&
			( ! remindMeLaterTasks[ task.id ] ||
				remindMeLaterTasks[ task.id ] < nowTimestamp )
	);

	const completedTaskKeys = visibleTasks
		.filter( ( task ) => task.isComplete )
		.map( ( task ) => task.id );

	const incompleteTasks = tasks.filter(
		( task ) =>
			task.isVisible &&
			! task.isComplete &&
			! dismissedTasks.includes( task.id )
	);

	const possiblyCompleteTaskList = () => {
		const taskListVariableName = `woocommerce_${ name }_complete`;
		const taskListToComplete = isComplete
			? { [ taskListVariableName ]: 'no' }
			: { [ taskListVariableName ]: 'yes' };

		if (
			( ! incompleteTasks.length && ! isComplete ) ||
			( incompleteTasks.length && isComplete )
		) {
			updateOptions( {
				...taskListToComplete,
			} );

			if ( typeof onComplete === 'function' ) {
				onComplete();
			}
		}
	};

	const getTrackedIncompletedTasks = (
		partialCompletedTasks,
		allTrackedTask
	) => {
		return visibleTasks
			.filter(
				( task ) =>
					allTrackedTask.includes( task.id ) &&
					! partialCompletedTasks.includes( task.id )
			)
			.map( ( task ) => task.id );
	};

	const possiblyTrackCompletedTasks = () => {
		const trackedCompletedTasks = getTrackedCompletedTasks(
			completedTaskKeys,
			totalTrackedCompletedTasks
		);

		const trackedIncompleteTasks = getTrackedIncompletedTasks(
			trackedCompletedTasks,
			totalTrackedCompletedTasks
		);

		if (
			shouldUpdateCompletedTasks(
				trackedCompletedTasks,
				trackedIncompleteTasks,
				completedTaskKeys
			)
		) {
			updateOptions( {
				woocommerce_task_list_tracked_completed_tasks: getTasksForUpdate(
					completedTaskKeys,
					totalTrackedCompletedTasks,
					trackedIncompleteTasks
				),
			} );
		}
	};

	const dismissTask = ( { key, onDismiss } ) => {
		createNotice( 'success', __( 'Task dismissed' ), {
			actions: [
				{
					label: __( 'Undo', 'woocommerce-admin' ),
					onClick: () => undoDismissTask( key ),
				},
			],
		} );

		recordEvent( `${ eventName }_dismiss_task`, { task_name: key } );

		updateOptions( {
			woocommerce_task_list_dismissed_tasks: [ ...dismissedTasks, key ],
		} );
		if ( onDismiss ) {
			onDismiss();
		}
	};

	const undoDismissTask = ( key ) => {
		const updatedDismissedTasks = dismissedTasks.filter(
			( task ) => task !== key
		);

		updateOptions( {
			woocommerce_task_list_dismissed_tasks: updatedDismissedTasks,
		} );
		recordEvent( `${ eventName }_undo_dismiss_task`, {
			task_name: key,
		} );
	};

	const remindTaskLater = ( { key, onDismiss } ) => {
		createNotice(
			'success',
			__( 'Task postponed until tomorrow', 'woocommerce-admin' ),
			{
				actions: [
					{
						label: __( 'Undo', 'woocommerce-admin' ),
						onClick: () => undoRemindTaskLater( key ),
					},
				],
			}
		);
		recordEvent( `${ eventName }_remindmelater_task`, {
			task_name: key,
		} );

		const dismissTime = Date.now() + DAY_IN_MS;
		updateOptions( {
			woocommerce_task_list_remind_me_later_tasks: {
				...remindMeLaterTasks,
				[ key ]: dismissTime,
			},
		} );
		if ( onDismiss ) {
			onDismiss();
		}
	};

	const undoRemindTaskLater = ( key ) => {
		const {
			// eslint-disable-next-line no-unused-vars
			[ key ]: oldValue,
			...updatedRemindMeLaterTasks
		} = remindMeLaterTasks;

		updateOptions( {
			woocommerce_task_list_remind_me_later_tasks: updatedRemindMeLaterTasks,
		} );
		recordEvent( `${ eventName }_undo_remindmelater_task`, {
			task_name: key,
		} );
	};

	const recordTaskListView = () => {
		if ( query.task ) {
			return;
		}

		recordEvent( `${ eventName }_view`, {
			number_tasks: visibleTasks.length,
			store_connected: profileItems.wccom_connected,
		} );
	};

	const hideTaskCard = ( action ) => {
		const updateOptionsParams = {
			[ `woocommerce_${ name }_hidden` ]: 'yes',
		};

		recordEvent( `${ eventName }_completed`, {
			action,
			completed_task_count: completedTaskKeys.length,
			incomplete_task_count: incompleteTasks.length,
		} );
		updateOptions( {
			...updateOptionsParams,
		} );

		if ( typeof onHide === 'function' ) {
			onHide();
		}
	};

	const renderMenu = () => {
		return (
			<div className="woocommerce-card__menu woocommerce-card__header-item">
				<EllipsisMenu
					label={ __( 'Task List Options', 'woocommerce-admin' ) }
					renderContent={ () => (
						<div className="woocommerce-task-card__section-controls">
							<Button
								onClick={ () => hideTaskCard( 'remove_card' ) }
							>
								{ __( 'Hide this', 'woocommerce-admin' ) }
							</Button>
						</div>
					) }
				/>
			</div>
		);
	};

	const listTasks = visibleTasks.map( ( task ) => {
		if ( ! task.onClick ) {
			task.onClick = ( e ) => {
				recordEvent( `${ eventName }_click`, {
					task_name: task.id,
				} );
				if ( e.target.nodeName === 'A' ) {
					// This is a nested link, so don't activate this task.
					return false;
				}

				updateQueryString( { task: task.id } );
			};
		}

		return task;
	} );

	const onTaskSelected = ( task ) => {
		if ( taskHeaders[ task.id ] ) {
			setHeaderContent( taskHeaders[ task.id ]( task ) );
			setActiveTaskKey( task.id );
		}
	};

	let selectedHeaderCard = listTasks.find(
		( listTask ) => listTask.isComplete === false
	);

	if ( ! selectedHeaderCard ) {
		selectedHeaderCard = listTasks[ 0 ];
	}

	useEffect( () => {
		if ( selectedHeaderCard ) {
			onTaskSelected( selectedHeaderCard );
		}
	}, [ selectedHeaderCard ] );

	if ( ! listTasks.length ) {
		return <div className="woocommerce-task-dashboard__container"></div>;
	}

	return (
		<>
			<div
				className={ classnames(
					'woocommerce-task-dashboard__container two-column-experiment',
					{ 'two-columns': twoColumns !== false }
				) }
			>
				<Card
					size="large"
					className="woocommerce-task-card woocommerce-homescreen-card"
				>
					<CardHeader size="medium">
						<div className="wooocommerce-task-card__header">
							{ headerContent }
						</div>
						{ renderMenu() }
					</CardHeader>
					<List animation="custom">
						{ listTasks.map( ( task, index ) => {
							++index;
							const className = classnames(
								'woocommerce-task-list__item index-' + index,
								{
									complete: task.isComplete,
									'is-active': task.id === activeTaskKey,
								}
							);
							return (
								<TaskItem
									key={ task.id }
									className={ className }
									title={ task.title }
									completed={ task.isComplete }
									content={ task.content }
									onClick={ () => {
										onTaskSelected( task );
									} }
									onDismiss={
										task.isDismissable
											? () => dismissTask( task.id )
											: undefined
									}
									remindMeLater={
										task.allowRemindMeLater
											? () => remindTaskLater( task )
											: undefined
									}
									action={ task.action }
									actionLabel={ task.actionLabel }
									additionalInfo={ task.additionalInfo }
									showActionButton={ task.showActionButton }
								/>
							);
						} ) }
					</List>
				</Card>
			</div>
		</>
	);
};

function shouldUpdateCompletedTasks( tasks, untrackedTasks, completedTasks ) {
	if ( untrackedTasks.length > 0 ) {
		return true;
	}
	if ( completedTasks.length === 0 ) {
		return false;
	}
	return ! completedTasks.every(
		( taskName ) => tasks.indexOf( taskName ) >= 0
	);
}

function getTrackedCompletedTasks( completedTasks, trackedTasks ) {
	if ( ! trackedTasks ) {
		return [];
	}
	return completedTasks.filter( ( taskName ) =>
		trackedTasks.includes( taskName )
	);
}

function getTasksForUpdate(
	completedTaskKeys,
	totalTrackedCompletedTasks,
	trackedIncompleteTasks
) {
	const mergedLists = [
		...new Set( [ ...completedTaskKeys, ...totalTrackedCompletedTasks ] ),
	];
	return mergedLists.filter(
		( taskName ) => ! trackedIncompleteTasks.includes( taskName )
	);
}

export default TaskList;
