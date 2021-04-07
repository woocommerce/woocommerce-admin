// {
//   key: 'products',
//   title: __( 'Add products', 'woocommerce-admin' ),
//   container: <Products />,
//   onClick: () => {
//     onTaskSelect( 'products' );
//     updateQueryString( { task: 'products' } );
//   },
//   completed: hasProducts,
//   visible: true,
//   time: __( '1 minute per product', 'woocommerce-admin' ),
//   type: 'setup',

/**
 * External dependencies
 */
import { updateQueryString } from '@woocommerce/navigation';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { ONBOARDING_STORE_NAME } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import { TaskItem } from './task-item';

// },

const TASK_KEY = 'products';

export const ProductsTaskItem = ( { onTaskSelect } ) => {
	const { hasProducts } = useSelect( ( select ) => {
		const { getProfileItems } = select( ONBOARDING_STORE_NAME );
		return getProfileItems();
	} );

	return (
		<TaskItem
			key={ TASK_KEY }
			title={ __( 'Add products', 'woocommerce-admin' ) }
			onClick={ () => {
				onTaskSelect( TASK_KEY );
				updateQueryString( { task: 'products' } );
			} }
			completed={ hasProducts }
			visible
			time={ __( '1 minute per product', 'woocommerce-admin' ) }
			isDismissable={ false }
		/>
	);
};
