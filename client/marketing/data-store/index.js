/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { registerStore } from '@wordpress/data';
import { getSetting } from '@woocommerce/wc-admin-settings';
import { without } from 'lodash';


/**
 * Internal dependencies
 */
import { STORE_KEY } from './constants';
import * as actions from './actions';

const { installedExtensions } = getSetting( 'marketing', {} );

const DEFAULT_STATE = {
	installedPlugins: installedExtensions,
	activatingPlugins: [],
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
					activatingPlugins: [ ...state.activatingPlugins, action.pluginSlug ],
				};
			case 'REMOVE_ACTIVATING_PLUGIN':
				return {
					...state,
					activatingPlugins: without( state.activatingPlugins, action.pluginSlug ),
				};
		}

		return state;
	},

	actions,

	selectors: {
		getInstalledPlugins( state ) {
			return state.installedPlugins;
		},
		getActivatingPlugins( state ) {
			return state.activatingPlugins;
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
