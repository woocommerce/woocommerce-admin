/** @format */
/**
 * External dependencies
 */
import { ApiClient } from '@fresh-data/framework';

/**
 * Internal dependencies
 */
import createStore from './create-store';

function createDataHandlers( store ) {
	return {
		dataRequested: resourceNames => {
			store.dispatch( {
				type: 'FRESH_DATA_REQUESTED',
				resourceNames,
				time: new Date(),
			} );
		},
		dataReceived: resources => {
			store.dispatch( {
				type: 'FRESH_DATA_RECEIVED',
				resources,
				time: new Date(),
			} );
		},
	};
}

function createApiClient( name, apiSpec ) {
	const store = createStore( name );
	const dataHandlers = createDataHandlers( store );
	const apiClient = new ApiClient( apiSpec );
	apiClient.setDataHandlers( dataHandlers );

	const storeChanged = () => {
		apiClient.setState( store.getState() );
	};
	store.subscribe( storeChanged );

	return apiClient;
}

export default createApiClient;
