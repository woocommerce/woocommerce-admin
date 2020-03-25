/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { registerStore } from '@wordpress/data';
import { getSetting } from '@woocommerce/wc-admin-settings';

/**
 * Internal dependencies
 */
import { STORE_KEY } from './constants';
import * as actions from './actions';

const { installedExtensions } = getSetting( 'marketing', {} );

const DEFAULT_STATE = {
	installedPlugins: installedExtensions,
	activatingPlugin: ''
};

registerStore( STORE_KEY, {
	reducer( state = DEFAULT_STATE, action ) {
		switch ( action.type ) {
			case 'SET_INSTALLED_PLUGINS':
				return {
					...state,
					installedPlugins: action.plugins,
				};
			case 'SET_ACTIVATING_PLUGIN':
				return {
					...state,
					activatingPlugin: action.pluginSlug,
				};
		}

		return state;
	},

	actions,

	selectors: {
		getInstalledPlugins( state ) {
			return state.installedPlugins;
		},
		getActivatingPlugin( state ) {
			return state.activatingPlugin;
		},
	},

	controls: {
		API_FETCH( { options } ) {
			return new Promise( ( resolve, reject ) => {
				apiFetch( { ...options, parse: false } )
					.then( ( fetchResponse ) => {
						fetchResponse.json().then( ( response ) => {
							resolve( { response } );
						} );
					} )
					.catch( ( error ) => {
						reject( error );
					} );
			} );
		},
	},

} );
