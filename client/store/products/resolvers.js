/** @format */
/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { dispatch } from '@wordpress/data';
import { stringify } from 'qs';

export default {
	// TODO: Use controls data plugin or fresh-data instead of async
	async getProducts( query ) {
		try {
			const params = query ? '?' + stringify( query ) : '';
			const products = await apiFetch( { path: '/wc/v3/reports/products' + params } );
			dispatch( 'wc-admin' ).setProducts( products, query );
		} catch ( error ) {
			dispatch( 'wc-admin' ).setProductsError( query );
		}
	},
};
