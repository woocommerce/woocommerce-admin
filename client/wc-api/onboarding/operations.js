/** @format */

/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import { getResourceName } from '../utils';
import { NAMESPACE, pluginNames } from './constants';

function read( resourceNames, fetch = apiFetch ) {
	return [
		...readProfileItems( resourceNames, fetch ),
		...readJetpackConnectUrl( resourceNames, fetch ),
	];
}

function update( resourceNames, data, fetch = apiFetch ) {
	return [
		...activatePlugins( resourceNames, data, fetch ),
		...installPlugins( resourceNames, data, fetch ),
		...updateProfileItems( resourceNames, data, fetch ),
	];
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

function activatePlugins( resourceNames, data, fetch ) {
	const resourceName = 'plugin-activate';
	if ( resourceNames.includes( resourceName ) ) {
		const plugins = data[ resourceName ];
		const url = NAMESPACE + '/onboarding/plugins/activate';
		return [
			fetch( {
				path: url,
				method: 'POST',
				data: {
					plugins: plugins.join( ',' ),
				},
			} )
				.then( activatePluginToResource.bind( null, data[ resourceName ] ) )
				.catch( error => {
					return { [ resourceName ]: { error } };
				} ),
		];
	}

	return [];
}

function activatePluginToResource( items ) {
	const resourceName = 'plugin-activate';

	const resources = {
		[ resourceName ]: { data: items },
	};
	Object.keys( items ).forEach( key => {
		const item = items[ key ];
		resources[ getResourceName( resourceName, item ) ] = { data: item };
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
					error.message = getPluginErrorMessage( 'activate', 'jetpack' );
					return { [ resourceName ]: { error } };
				} ),
		];
	}

	return [];
}

function getPluginErrorMessage( action, plugin ) {
	const pluginName = pluginNames[ plugin ] || plugin;

	return 'install' === action
		? sprintf(
				__( 'There was an error installing %s. Please try again.', 'woocommerce-admin' ),
				pluginName
			)
		: __( 'There was an error activating your plugins. Please try again.', 'woocommerce-admin' );
}

function installPlugins( resourceNames, data, fetch ) {
	const resourceName = 'plugin-install';
	if ( resourceNames.includes( resourceName ) ) {
		const plugins = data[ resourceName ];

		return plugins.map( async plugin => {
			return fetch( {
				path: `${ NAMESPACE }/onboarding/plugins/install`,
				method: 'POST',
				data: {
					plugin,
				},
			} )
				.then( response => {
					return {
						[ resourceName ]: { data: plugins },
						[ getResourceName( resourceName, plugin ) ]: { data: response },
					};
				} )
				.catch( error => {
					error.message = getPluginErrorMessage( 'install', plugin );
					return {
						[ resourceName ]: { data: plugins },
						[ getResourceName( resourceName, plugin ) ]: { error },
					};
				} );
		} );
	}

	return [];
}

export default {
	read,
	update,
};
