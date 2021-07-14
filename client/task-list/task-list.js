/**
 * External dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import { useEffect, useRef, useState } from '@wordpress/element';
import { Button, Card, CardBody, CardHeader } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { EllipsisMenu, Badge } from '@woocommerce/components';
import {
	getHistory,
	getNewPath,
	updateQueryString,
} from '@woocommerce/navigation';
import { OPTIONS_STORE_NAME, ONBOARDING_STORE_NAME } from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';
import {
	Text,
	List,
	CollapsibleList,
	TaskItem,
} from '@woocommerce/experimental';

/**
 * Internal dependencies
 */
import './task-list.scss';

const DAY_IN_MS = 24 * 60 * 60 * 1000;

export const TaskList = ( {
	query,
	name,
	eventName,
	isComplete,
	tasks,
	title: listTitle,
	collapsible = false,
	onComplete,
	onHide,
	expandingItems = false,
} ) => {
	const { createNotice } = useDispatch( 'core/notices' );
	const { updateOptions } = useDispatch( OPTIONS_STORE_NAME );
	const { profileItems } = useSelect( ( select ) => {
		const { getProfileItems } = select( ONBOARDING_STORE_NAME );

		return {
			profileItems: getProfileItems(),
		};
	} );

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
	}, [ query ] );

	const nowTimestamp = Date.now();
	const visibleTasks = tasks.filter(
		( task ) =>
			task.isVisible &&
			! task.isDismissed &&
			( ! task.snoozedUntil || task.snoozedUntil < nowTimestamp )
	);

	const completedTaskKeys = visibleTasks
		.filter( ( task ) => task.isComplete )
		.map( ( task ) => task.key );

	const incompleteTasks = tasks.filter(
		( task ) => task.isVisible && ! task.isComplete && ! task.isDismissed
	);

	const [ currentTask, setCurrentTask ] = useState(
		incompleteTasks[ 0 ]?.key
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

		// @todo This should use the task API to set dismissed tasks.
		// updateOptions( {
		// 	woocommerce_task_list_dismissed_tasks: [ ...dismissedTasks, key ],
		// } );
		if ( onDismiss ) {
			onDismiss();
		}
	};

	const undoDismissTask = ( key ) => {
		// @todo This should use the task API to set dismissed tasks.
		// const updatedDismissedTasks = dismissedTasks.filter(
		// 	( task ) => task !== key
		// );

		// updateOptions( {
		// 	woocommerce_task_list_dismissed_tasks: updatedDismissedTasks,
		// } );
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

		// @todo This should use the task API to set snooze time.
		// const dismissTime = Date.now() + DAY_IN_MS;
		// updateOptions( {
		// 	woocommerce_task_list_remind_me_later_tasks: {
		// 		...remindMeLaterTasks,
		// 		[ key ]: dismissTime,
		// 	},
		// } );
		if ( onDismiss ) {
			onDismiss();
		}
	};

	const undoRemindTaskLater = ( key ) => {
		// @todo This should use the task API to set snooze time.
		// const {
		// 	// eslint-disable-next-line no-unused-vars
		// 	[ key ]: oldValue,
		// 	...updatedRemindMeLaterTasks
		// } = remindMeLaterTasks;

		// updateOptions( {
		// 	woocommerce_task_list_remind_me_later_tasks: updatedRemindMeLaterTasks,
		// } );
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
					task_name: task.key,
				} );
				if ( e.target.nodeName === 'A' ) {
					// This is a nested link, so don't activate this task.
					return false;
				}

				if ( task.actionUrl ) {
					if ( task.actionUrl.startsWith( 'http' ) ) {
						window.location = task.actionUrl;
					} else {
						getHistory().push(
							getNewPath( {}, task.actionUrl, {} )
						);
					}
					return;
				}

				updateQueryString( { task: task.id } );
			};
		}

		return task;
	} );

	if ( ! listTasks.length ) {
		return <div className="woocommerce-task-dashboard__container"></div>;
	}

	const expandLabel = sprintf(
		/* translators: %i = number of hidden tasks */
		_n(
			'Show %i more task.',
			'Show %i more tasks.',
			listTasks.length - 2,
			'woocommerce-admin'
		),
		listTasks.length - 2
	);
	const collapseLabel = __( 'Show less', 'woocommerce-admin' );
	const ListComp = collapsible ? CollapsibleList : List;

	const listProps = collapsible
		? {
				collapseLabel,
				expandLabel,
				show: 2,
				onCollapse: () => recordEvent( `${ eventName }_collapse` ),
				onExpand: () => recordEvent( `${ eventName }_expand` ),
		  }
		: {};

	return (
		<>
			<div className="woocommerce-task-dashboard__container">
				<Card
					size="large"
					className="woocommerce-task-card woocommerce-homescreen-card"
				>
					<CardHeader size="medium">
						<div className="wooocommerce-task-card__header">
							<Text
								size="20"
								lineHeight="28px"
								variant="title.small"
							>
								{ listTitle }
							</Text>
							<Badge count={ incompleteTasks.length } />
						</div>
						{ renderMenu() }
					</CardHeader>
					<CardBody>
						<ListComp animation="custom" { ...listProps }>
							{ listTasks.map( ( task ) => (
								<TaskItem
									key={ task.id }
									title={ task.title }
									completed={ task.isComplete }
									content={ task.content }
									onClick={
										! expandingItems || task.isComplete
											? task.onClick
											: () => setCurrentTask( task.id )
									}
									expandable={ expandingItems }
									expanded={
										expandingItems &&
										currentTask === task.id
									}
									onDismiss={
										task.isDismissable
											? () => dismissTask( task )
											: undefined
									}
									remindMeLater={
										task.isSnoozable
											? () => remindTaskLater( task )
											: undefined
									}
									time={ task.time }
									level={ task.level }
									action={ task.onClick }
									actionLabel={ task.actionLabel }
									additionalInfo={ task.additionalInfo }
								/>
							) ) }
						</ListComp>
					</CardBody>
				</Card>
			</div>
		</>
	);
};

export default TaskList;
