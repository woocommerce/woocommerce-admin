/** @format */
/**
 * External dependencies
 */
import { registerGenericStore } from '@wordpress/data';

/**
 * Internal dependencies
 */
import createApiClient from './create-api-client';
import wcApiSpec from '../wc-api-spec';

if ( 'development' === process.env.NODE_ENV ) {
	window.__FRESH_DATA_DEV_INFO__ = true;
}

function createWcApiStore() {
	const apiClient = createApiClient( 'wc-api', wcApiSpec );

	return {
		getSelectors: () => {
			return apiClient.getSelectors();
		},
		getActions() {
			return apiClient.getMutations();
		},
		subscribe: apiClient.subscribe,
	};
}

registerGenericStore( 'wc-api', createWcApiStore() );
