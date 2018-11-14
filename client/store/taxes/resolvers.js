/** @format */
/**
 * External dependencies
 */
import { dispatch } from '@wordpress/data';
import { stringify } from 'qs';

/**
 * Internal dependencies
 */
import { SWAGGERNAMESPACE } from 'store/constants';

export default {
	// TODO: Use controls data plugin or fresh-data instead of async
	async getTaxes( ...args ) {
		// This is interim code to work with either 2.x or 3.x version of @wordpress/data
		// TODO: Change to just `getNotes( query )` after Gutenberg plugin uses @wordpress/data 3+
		const query = args.length === 1 ? args[ 0 ] : args[ 1 ];

		try {
			const params = query ? '?' + stringify( query ) : '';
			// @TODO: Use /reports/taxes when it becomes available
			// const taxes = await apiFetch( {
			// 	path: NAMESPACE + 'reports/taxes' + params,
			// } );
			const taxes = await fetch( {
				path: SWAGGERNAMESPACE + 'reports/taxes' + params,
			} );
			dispatch( 'wc-admin' ).setTaxes( taxes, query );
		} catch ( error ) {
			dispatch( 'wc-admin' ).setTaxesError( query );
		}
	},
};
