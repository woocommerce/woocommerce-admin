/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import TimerImage from './timer.svg';
import AddProductsImage from './illustrations/add_products.svg';

const ProductsHeader = ( task, onClickCta ) => {
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
				<h1>{ __( 'Add products to start selling' ) }</h1>
				<p>
					{ __(
						'Add your first products and see them shine on your store! You can add your products manually or import them.'
					) }
				</p>
				<Button isPrimary onClick={ onClickCta }>
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

export default ProductsHeader;
