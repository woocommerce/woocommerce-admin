/**
 * External dependencies
 */
import {
	ExperimentalListItem,
	ExperimentalListItemAfter,
	ExperimentalListItemBefore,
	ExperimentalListItemTitle,
} from '@woocommerce/components';
import { Button, Icon } from '@wordpress/components';
import { check } from '@wordpress/icons';
import { Text } from '@woocommerce/experimental';
import { __ } from '@wordpress/i18n';
import { updateQueryString } from '@woocommerce/navigation';
import { useDispatch, useSelect } from '@wordpress/data';
import { recordEvent } from '@woocommerce/tracks';
import { OPTIONS_STORE_NAME } from '@woocommerce/data';

export type TaskItemProps = {
	key: string;
	title: string;
	// container: JSX.Element | null;
	onClick: () => void | null;
	onDismiss?: () => void;
	completed: boolean;
	visible: boolean;
	time: string;
	isDismissable: boolean;
};

export const TaskItem = ( props: TaskItemProps ): JSX.Element | null => {
	const {
		completed,
		key,
		time,
		title,
		onClick,
		onDismiss,
		visible,
		isDismissable,
	} = props;

	const clickHandler =
		onClick ||
		( ( event: React.MouseEvent ) => {
			if ( event.currentTarget.nodeName === 'A' ) {
				// This is a nested link, so don't activate this task.
				return false;
			}

			updateQueryString( { task: key } );
		} );

	const { createNotice } = useDispatch( 'core/notices' );
	const { updateOptions } = useDispatch( OPTIONS_STORE_NAME );
	const { getOption } = useSelect( ( select ) => {
		return select( OPTIONS_STORE_NAME );
	} );

	if ( ! visible ) {
		return null;
	}

	const dismissedTasks =
		getOption( 'woocommerce_task_list_dismissed_tasks' ) || [];

	const undoDismissTask = () => {
		const updatedDismissedTasks = dismissedTasks.filter(
			( task: string ) => task !== key
		);

		updateOptions( {
			woocommerce_task_list_dismissed_tasks: updatedDismissedTasks,
		} );
	};

	const dismissTask = () => {
		createNotice( 'success', __( 'Task dismissed' ), {
			actions: [
				{
					label: __( 'Undo', 'woocommerce-admin' ),
					onClick: () => undoDismissTask(),
				},
			],
		} );

		recordEvent( 'tasklist_dismiss_task', { task_name: key } );

		updateOptions( {
			woocommerce_task_list_dismissed_tasks: [ ...dismissedTasks, key ],
		} );

		if ( onDismiss ) {
			onDismiss();
		}
	};

	console.log( title, completed );

	return (
		<ExperimentalListItem
			title={ title }
			className={ completed ? 'is-complete' : '' }
			onClick={ clickHandler }
		>
			<ExperimentalListItemBefore>
				<div className="woocommerce-task__icon">
					{ completed && <Icon icon={ check } /> }
				</div>
			</ExperimentalListItemBefore>
			<ExperimentalListItemTitle>
				<Text as="div" variant={ completed ? 'body.small' : 'button' }>
					{ title }
					{ time && ! completed && (
						<div className="woocommerce-task__estimated-time">
							{ time }
						</div>
					) }
				</Text>
			</ExperimentalListItemTitle>
			{ ! completed && isDismissable && (
				<ExperimentalListItemAfter>
					<Button
						data-testid={ `${ key }-dismiss-button` }
						isTertiary
						onClick={ ( event: React.MouseEvent ) => {
							event.stopPropagation();
							dismissTask();
						} }
					>
						{ __( 'Dismiss', 'woocommerce-admin' ) }
					</Button>
				</ExperimentalListItemAfter>
			) }
		</ExperimentalListItem>
	);
};
