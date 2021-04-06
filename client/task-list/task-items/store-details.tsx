/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { OPTIONS_STORE_NAME } from '@woocommerce/data';
import { getHistory, getNewPath } from '@woocommerce/navigation';

/**
 * Internal dependencies
 */
import { TaskItem } from './task-item';

const TASK_KEY = 'store_details';

export const StoreDetails = ( {
	onTaskSelect,
}: {
	onTaskSelect: ( taskKey: string ) => void;
} ): JSX.Element => {
	const { getProfileItems } = useSelect( OPTIONS_STORE_NAME );
	const { completed } = getProfileItems();

	return (
		<TaskItem
			key={ TASK_KEY }
			title={ __( 'Store details', 'woocommerce-admin' ) }
			completed={ completed }
			visible={ true }
			time={ __( '4 minutes', 'woocommerce-admin' ) }
			onClick={ () => {
				onTaskSelect( TASK_KEY );
				getHistory().push( getNewPath( {}, '/setup-wizard', {} ) );
			} }
			isDismissable={ false }
		/>
	);
};
