/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { updateQueryString } from '@woocommerce/navigation';

/**
 * Internal dependencies
 */
import TimerImage from './timer.svg';
import AddProductsImage from './illustrations/add_products.svg';

const PaymentsHeader = ( task, trackCta ) => {
	const onClick = () => {
		updateQueryString( { task: 'products' } );
		trackCta( 'products' );
	};

	return (
		<div
			className="woocommerce-task-header__contents-container header-product"
			style={ {
				backgroundImage: `url(${ AddProductsImage })`,
				backgroundSize: '370px',
				backgroundPosition: '92% 15%',
			} }
		>
			<div className="woocommerce-task-header__contents">
				<h1>{ __( "It's time to get paid" ) }</h1>
				<p>
					{ __(
						"You're only one step away from getting paid. Verify your business details to start managing transactions with WooCommerce Payments"
					) }
				</p>
				<Button isPrimary onClick={ onClick }>
					{ __( 'Add products', 'woocommerce-admin' ) }
				</Button>
				<p className="woocommerce-task-header__timer">
					<img src={ TimerImage } alt="Timer" />{ ' ' }
					<span>{ __( '2 minutes' ) }</span>
				</p>
			</div>
		</div>
	);
};

export default PaymentsHeader;

// const PaymentsHeader = ( task ) => {
// 	return <div>{ task.key } Header</div>;
// };

// export default PaymentsHeader;
