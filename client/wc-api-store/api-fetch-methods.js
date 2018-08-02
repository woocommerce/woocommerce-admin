/** @format */
/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import qs from 'qs';

apiFetch.use( apiFetch.createNonceMiddleware( wpApiSettings.nonce ) );
apiFetch.use( apiFetch.createRootURLMiddleware( wpApiSettings.root ) );

const URL_PREFIX = '/wc/v3';

export default {
	// TODO: Remove curried clientKey
	read: () => async ( path, params ) => {
		try {
			const urlPath = path.join( '/' );
			const queryString = params ? `?${ qs.stringify( params ) }` : '';
			const url = `${ URL_PREFIX }/${ urlPath }${ queryString }`;
			const data = await apiFetch( { path: url } );
			// TODO: Update general API health metrics.
			return data;
		} catch ( error ) {
			// TODO: Update general API error state.
			throw error;
		}
	},
	update: () => async ( path, params ) => {
		try {
			const urlPath = path.join( '/' );
			const { data } = params;
			const url = `${ URL_PREFIX }/${ urlPath }`;
			const responseData = await apiFetch( { path: url, method: 'POST', data } );
			// TODO: Update general API health metrics.
			return responseData;
		} catch ( error ) {
			// TODO: Update general API errror state.
			throw error;
		}
	},
};
