/** @format */
/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { stringify } from 'qs';

/**
 * Internal dependencies
 */
import ProductImage from 'components/product-image';

/**
 * A products completer.
 *
 * @type {Completer}
 */
export default {
	name: 'products',
	className: 'woocommerce-search__product-result',
	triggerPrefix: '',
	options( search ) {
		let payload = '';
		if ( search ) {
			const query = {
				search: encodeURIComponent( search ),
				per_page: 10,
				orderby: 'popularity',
			};
			payload = '?' + stringify( query );
		}
		return apiFetch( { path: '/wc/v3/products' + payload } );
	},
	isDebounced: true,
	getOptionKeywords( product ) {
		return [ product.name ];
	},
	getOptionLabel( product ) {
		return [
			<ProductImage
				key="thumbnail"
				className="woocommerce-search__result-thumbnail"
				product={ product }
				width={ 18 }
				height={ 18 }
				alt=""
			/>,
			<span key="name" className="woocommerce-search__result-name">
				{ product.name }
			</span>,
		];
	},
	allowNode() {
		return true;
	},
	getOptionCompletion( product ) {
		const value = {
			id: product.id,
			label: product.name,
		};
		return value;
	},
};
