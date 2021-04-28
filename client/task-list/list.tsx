/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import {
	__experimentalList as List,
	__experimentalListItemCollapse as ListItemCollapse,
	__experimentalCollapsibleList as CollapsibleList,
} from '@woocommerce/components';

/**
 * Internal dependencies
 */
import { TaskItem } from './task-item';

type Task = {
	key: string;
	title: string;
	completed: boolean;
	content: string;
	onClick: () => void;
	isDismissable: boolean;
	time: string;
};

type ListProps = {
	name: 'tasklist' | 'extended_tasklist';
	collapsible: boolean;
	tasks: Task[];
	dismissTask: ( task: Task ) => void;
};

export const TasksList: React.FC< ListProps > = ( {
	tasks,
	dismissTask,
	collapsible,
} ) => {
	let shownTasks: Task[] = tasks;
	let hiddenTasks: Task[] = [];

	// if ( collapsible && tasks.length > 2 ) {
	// 	shownTasks = tasks.slice( 0, 2 );
	// 	hiddenTasks = tasks.slice( 2 );
	// }
	const showText = sprintf(
		/* translators: %i = number of hidden tasks */
		__( 'Show %i more tasks.', 'woocommerce-admin' ),
		shownTasks.length - 2
	);
	return (
		<CollapsibleList
			animation="slide-right"
			hideText={ __( 'Show less', 'woocommerce-admin' ) }
			showText={ showText }
			minChildrenToShow={ 4 }
		>
			{ shownTasks.map( ( task ) => (
				<TaskItem
					key={ task.key }
					title={ task.title }
					completed={ task.completed }
					content={ task.content }
					onClick={ task.onClick }
					isDismissable={ task.isDismissable }
					onDismiss={ () => dismissTask( task ) }
					time={ task.time }
				/>
			) ) }
			{ /* { hiddenTasks.length > 0 ? (
				<ListItemCollapse
					hideText={ __( 'Show less', 'woocommerce-admin' ) }
					showText={ showText }
				>
					{ hiddenTasks.map( ( task ) => (
						<TaskItem
							key={ task.key }
							title={ task.title }
							completed={ task.completed }
							content={ task.content }
							onClick={ task.onClick }
							isDismissable={ task.isDismissable }
							onDismiss={ () => dismissTask( task ) }
							time={ task.time }
						/>
					) ) }
				</ListItemCollapse>
			) : null } */ }
		</CollapsibleList>
	);
};
