/** @format */
/**
 * External dependencies
 */
import apiRequest from '@wordpress/api-request';
import qs from 'qs';

export const URL_PREFIX = '/wc/v3';

export function createMethods( request ) {
	return {
		get: () => ( endpointPath, params ) => {
			// TODO: Support multisite via clientKey
			const path = endpointPath.join( '/' );
			const queryString = params ? `?${ qs.stringify( params ) }` : '';
			const url = `${ URL_PREFIX }/${ path }${ queryString }`;
			return request( { path: url } ).then( response => {
				// TODO: Error handling.
				return response;
			} );
		},
		post: () => ( endpointPath, params ) => {
			// TODO: Support multisite via clientKey
			const path = endpointPath.join( '/' );
			const { data } = params;
			const url = `${ URL_PREFIX }/${ path }`;
			return request( { path: url, method: 'POST', data } ).then( response => {
				// TODO: Error handling.
				return response;
			} );
		},
	};
}

export default createMethods( apiRequest );
