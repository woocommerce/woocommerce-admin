/**
 * External dependencies
 */
import { Fill, Slot } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { TaskItem } from './task-item';

export { TaskList } from './task-list';
export { TaskItem } from './task-item';

export const WooTaskItem = ( {
	list,
	key,
	title,
	completed,
	content,
	time,
	onClick,
	isDismissable,
	onDismiss,
} ) => {
	return (
		<Fill name={ `woocommerce_${ list }_task_list_item` }>
			<TaskItem
				list={ list }
				key={ key }
				title={ title }
				completed={ completed }
				content={ content }
				onClick={ onClick }
				isDismissable={ isDismissable }
				onDismiss={ onDismiss }
				time={ time }
			/>
		</Fill>
	);
};

WooTaskItem.Slot = ( { name } ) => (
	<Slot name={ `woocommerce_${ name }_task_list_item` } />
);
