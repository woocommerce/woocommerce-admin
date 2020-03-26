/**
 * External dependencies
 */
import { dispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { API_NAMESPACE } from './constants';
import { __ } from '@wordpress/i18n';


/**
 * Dispatched a control action for triggering an api fetch call with no parsing.
 * Typically this would be used in scenarios where headers are needed.
 *
 * @param {Object} options The options for the API request.
 *
 * @return {Object} The control action descriptor.
 */
const apiFetch = ( options ) => {
	return {
		type: 'API_FETCH',
		options,
	};
};

export function receiveInstalledPlugins( plugins ) {
	return {
		type: 'SET_INSTALLED_PLUGINS',
		plugins,
	};
}

export function receiveActivatingPlugin( pluginSlug ) {
	return {
		type: 'SET_ACTIVATING_PLUGIN',
		pluginSlug,
	};
}

export function removeActivatingPlugin( pluginSlug ) {
	return {
		type: 'REMOVE_ACTIVATING_PLUGIN',
		pluginSlug,
	};
}

function handleFetchError( error, message ) {
	const { createNotice } = dispatch( 'core/notices' );
	createNotice( 'error', message );

	// eslint-disable-next-line no-console
	console.log( error );
}

export function* activateInstalledPlugin( pluginSlug ) {
	const { createNotice } = dispatch( 'core/notices' );
	yield receiveActivatingPlugin( pluginSlug );

	try {
		const { response } = yield apiFetch( {
			path: API_NAMESPACE + '/overview/activate-plugin',
			method: 'POST',
			data: {
				plugin: pluginSlug,
			},
		} );

		createNotice( 'success',
			__( 'The extension has been successfully activated.', 'woocommerce-admin' )
		);

		yield receiveInstalledPlugins( response.plugins );
		yield removeActivatingPlugin( pluginSlug );
	} catch ( error ) {
		yield handleFetchError( error, __( 'There was an error trying to activate the extension.', 'woocommerce-admin' ) );
		yield removeActivatingPlugin( pluginSlug );
	}

	return true;
}
