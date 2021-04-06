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

import { TaskItem } from './task-item';

// },

const TASK_KEY = 'products';

export const ProductsTaskItem = ( { onTaskSelect } ) => {
	return (
		<TaskItem
			key={ TASK_KEY }
			title={ __( 'Add products', 'woocommerce-admin' ) }
			// onClick=
		/>
	);
};
