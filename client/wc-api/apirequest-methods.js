/** @format */
/**
 * External dependencies
 */
import apiRequest from '@wordpress/api-request';
import qs from 'qs';

const URL_PREFIX = '/wc/v3';

const methods = {
	get: () => ( endpointPath, params ) => {
		// TODO: Support multisite via clientKey
		const path = endpointPath.join( '/' );
		const queryString = params ? `?${ qs.stringify( params ) }` : '';
		const url = `${ URL_PREFIX }/${ path }${ queryString }`;
		return apiRequest( { path: url } ).then( response => {
			// TODO: Error handling.
			return response;
		} );
	},
	post: () => ( endpointPath, params ) => {
		// TODO: Support multisite via clientKey
		const path = endpointPath.join( '/' );
		const { data } = params;
		const url = `${ URL_PREFIX }/${ path }`;
		return apiRequest( { path: url, method: 'POST', data } ).then( response => {
			// TODO: Error handling.
			return response;
		} );
	},
};

export default methods;
