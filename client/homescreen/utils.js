/**
 * External dependencies
 */
import { OPTIONS_STORE_NAME } from '@woocommerce/data';

export function taskListsHidden( select ) {
	const { getOption } = select( OPTIONS_STORE_NAME );
	return (
		getOption( 'woocommerce_task_list_hidden' ) === 'yes' &&
		getOption( 'woocommerce_extended_task_list_hidden' ) === 'yes'
	);
}
