/**
 * External Dependencies
 */

import { apiFetch } from '@wordpress/data-controls';
import { __, sprintf } from '@wordpress/i18n';

/**
 * Internal Dependencies
 */
import TYPES from './action-types';
import { WC_ADMIN_NAMESPACE } from '../constants';
import { pluginNames } from './constants';

export function updateActivePlugins( active, replace = false ) {
	return {
		type: TYPES.UPDATE_ACTIVE_PLUGINS,
		active,
		replace,
	};
}

export function updateInstalledPlugins( installed, replace = false ) {
	return {
		type: TYPES.UPDATE_INSTALLED_PLUGINS,
		installed,
		replace,
	};
}

export function setIsRequesting( selector, isRequesting ) {
	return {
		type: TYPES.SET_IS_REQUESTING,
		selector,
		isRequesting,
	};
}

export function setError( selector, error ) {
	return {
		type: TYPES.SET_ERROR,
		selector,
		error,
	};
}

export function updateIsJetpackConnected( jetpackConnection ) {
	return {
		type: TYPES.UPDATE_JETPACK_CONNECTION,
		jetpackConnection,
	};
}

export function updateJetpackConnectUrl( redirectUrl, jetpackConnectUrl ) {
	return {
		type: TYPES.UPDATE_JETPACK_CONNECT_URL,
		jetpackConnectUrl,
		redirectUrl,
	};
}

export function* installPlugins( plugins ) {
	yield setIsRequesting( 'installPlugins', true );

	try {
		const results = yield apiFetch( {
			path: `${ WC_ADMIN_NAMESPACE }/plugins/install`,
			method: 'POST',
			data: { plugins: plugins.join( ',' ) },
		} );

		if ( ! results ) {
			throw new Error();
		}

		if ( results.installed_plugins ) {
			yield updateInstalledPlugins( results.installed_plugins );
		}

		if ( Object.keys( results.errors ) ) {
			yield setError( 'installPlugins', results.errors );
		}

		return results;
	} catch ( error ) {
		const errorMsg = __(
			'Something went wrong while trying to install your plugins.',
			'woocommerce-admin'
		);
		yield setError( 'installPlugins', errorMsg );
		return errorMsg;
	}
}

export function* activatePlugins( plugins ) {
	yield setIsRequesting( 'activatePlugins', true );

	try {
		const results = yield apiFetch( {
			path: `${ WC_ADMIN_NAMESPACE }/plugins/activate`,
			method: 'POST',
			data: { plugins: plugins.join( ',' ) },
		} );

		if ( results && results.status === 'success' ) {
			yield updateActivePlugins( results.activatedPlugins );
			return results;
		}

		throw new Error();
	} catch ( error ) {
		yield setError( 'activatePlugins', error );
		return plugins.map( ( plugin ) => {
			const pluginName = pluginNames[ plugin ] || plugin;
			return sprintf(
				__(
					'There was an error activating %s. Please try again.',
					'woocommerce-admin'
				),
				pluginName
			);
		} );
	}
}
