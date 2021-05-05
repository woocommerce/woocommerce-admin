/**
 * External dependencies
 */
import { Fill, Slot } from '@wordpress/components';

export { TaskList } from './task-list';
export { TaskItem } from './task-item';

export const WooTaskItem = ( { children, list } ) => {
	return (
		<Fill name={ `woocommerce_${ list }_task_list_item` }>
			{ children }
		</Fill>
	);
};

WooTaskItem.Slot = ( { name } ) => (
	<Slot name={ `woocommerce_${ name }_task_list_item` } />
);
