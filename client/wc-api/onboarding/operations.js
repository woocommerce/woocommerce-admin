/** @format */

/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import { getResourceName } from '../utils';
import { NAMESPACE } from './constants';

function read( resourceNames, fetch = apiFetch ) {
	return [
		...readProfileItems( resourceNames, fetch ),
		...readJetpackConnectUrl( resourceNames, fetch ),
	];
}

function update( resourceNames, data, fetch = apiFetch ) {
	return [ ...updateProfileItems( resourceNames, data, fetch ) ];
}

function readProfileItems( resourceNames, fetch ) {
	const resourceName = 'onboarding-profile';

	if ( resourceNames.includes( resourceName ) ) {
		const url = NAMESPACE + '/onboarding/profile';

		return [
			fetch( { path: url } )
				.then( profileItemsToResources )
				.catch( error => {
					return { [ resourceName ]: { error: String( error.message ) } };
				} ),
		];
	}

	return [];
}

function updateProfileItems( resourceNames, data, fetch ) {
	const resourceName = 'onboarding-profile';

	if ( resourceNames.includes( resourceName ) ) {
		const url = NAMESPACE + '/onboarding/profile';

		return [
			fetch( {
				path: url,
				method: 'POST',
				data: data[ resourceName ],
			} )
				.then( profileItemToResource.bind( null, data[ resourceName ] ) )
				.catch( error => {
					return { [ resourceName ]: { error } };
				} ),
		];
	}

	return [];
}

function profileItemsToResources( items ) {
	const resourceName = 'onboarding-profile';

	const itemKeys = Object.keys( items );

	const resources = {};
	itemKeys.forEach( key => {
		const item = items[ key ];
		resources[ getResourceName( resourceName, key ) ] = { data: item };
	} );

	return {
		[ resourceName ]: {
			data: itemKeys,
		},
		...resources,
	};
}

function profileItemToResource( items ) {
	const resourceName = 'onboarding-profile';

	const resources = {};
	Object.keys( items ).forEach( key => {
		const item = items[ key ];
		resources[ getResourceName( resourceName, key ) ] = { data: item };
	} );

	return resources;
}

function readJetpackConnectUrl( resourceNames, fetch ) {
	const resourceName = 'jetpack-connect-url';

	if ( resourceNames.includes( resourceName ) ) {
		const url = NAMESPACE + '/onboarding/plugins/connect-jetpack';

		return [
			fetch( {
				path: url,
			} )
				.then( response => {
					return { [ resourceName ]: { data: response.connectAction } };
				} )
				.catch( error => {
					return { [ resourceName ]: { error } };
				} ),
		];
	}

	return [];
}

export default {
	read,
	update,
};
