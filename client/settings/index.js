/**
 * External dependencies
 */
import { addQueryArgs } from '@wordpress/url';
import apiFetch from '@wordpress/api-fetch';
import { useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import sanitizeHTML from '~/lib/sanitize-html';

const ProductsPage = () => {
	const [ actions, setActions ] = useState( {} );

	useEffect( () => {
		apiFetch( {
			path: addQueryArgs( 'wc-admin/hooks', {
				actions: 'woocommerce_product_data_panels',
			} ),
		} ).then( ( data ) => setActions( data ) );
	}, [] );

	console.info( 'actions', actions );

	return (
		<div>
			<div className="woocommerce-products__start">
				<h2>Products start section</h2>
				{ actions.woocommerce_products_start && (
					<div
						dangerouslySetInnerHTML={ sanitizeHTML(
							actions.woocommerce_products_start
						) }
					/>
				) }
			</div>

			<div className="woocommerce-products_products">
				<h2>Products get looped over here</h2>
			</div>
		</div>
	);
};

export default ProductsPage;
