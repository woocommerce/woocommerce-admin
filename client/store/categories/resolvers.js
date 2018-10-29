/** @format */
/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { dispatch } from '@wordpress/data';
import { stringify } from 'qs';

export default {
	async getCategories( state, query ) {
		try {
			const params = query ? '?' + stringify( query ) : '';
			const categories = await apiFetch( { path: '/wc/v3/reports/categories' + params } );
			dispatch( 'wc-admin' ).setCategories( categories, query );
		} catch ( error ) {
			dispatch( 'wc-admin' ).setCategoriesError( query );
		}
	},
};
