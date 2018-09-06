/** @format */
/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { dispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { stringifyQuery } from 'lib/nav-utils';

export default {
	async getProducts( state, query ) {
		try {
			const params = stringifyQuery( query );
			const products = await apiFetch( { path: '/wc/v3/products' + params } );
			dispatch( 'wc-admin' ).setProducts( products, query );
		} catch ( error ) {
			dispatch( 'wc-admin' ).setProductsError( query );
		}
	},
	async getProductById( state, id ) {
		this.getProducts( state, { id } );
	},
};
