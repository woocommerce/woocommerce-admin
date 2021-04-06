/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
import { OPTIONS_STORE_NAME, PLUGINS_STORE_NAME } from '@woocommerce/data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { TaskItem } from './task-item';
import { getCategorizedOnboardingProducts } from '../../dashboard/utils';

const TASK_KEY = 'purchase';

export const PurchaseTaskItem = ( {
	onTaskSelect,
}: {
	onTaskSelect: ( taskKey: string ) => void;
} ): JSX.Element => {
	const { getProfileItems } = useSelect( OPTIONS_STORE_NAME );
	const { getInstalledPlugins } = useSelect( PLUGINS_STORE_NAME );

	// TODO - better type this
	const { products, remainingProducts } = getCategorizedOnboardingProducts(
		getProfileItems(),
		getInstalledPlugins()
	);

	return (
		<TaskItem
			key={ TASK_KEY }
			title={ 'TODO: generate this title properly' }
			visible={ products.length }
			onClick={ () => {
				onTaskSelect( TASK_KEY );
				// TODO fix this up
				//return remainingProducts.length ? toggleCartModal() : null;
			} }
			completed={ products.length && ! remainingProducts.length }
			isDismissable
			time={ __( '2 minutes', 'woocommerce-admin' ) }
		/>
	);
};
