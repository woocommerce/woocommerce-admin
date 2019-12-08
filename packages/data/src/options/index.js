/** @format */

/**
 * External dependencies
 */
// import apiFetch from '@wordpress/api-fetch';
const { registerStore } = '@wordpress/data';
import { controls } from '@wordpress/data-controls';

/**
 * WooCommerce dependencies
 */
import { getSetting } from '@woocommerce/wc-admin-settings';

const DEFAULT_STATE = {
	options: {},
};

const actions = {
	setOptions( options ) {
		return {
			type: 'SET_OPTIONS',
			options,
		};
	},
};

registerStore( 'wc/admin/options', {
	reducer( state = DEFAULT_STATE, action ) {
		switch ( action.type ) {
			case 'SET_OPTIONS':
				return {
					...state,
					options: {
						...state.options,
						...action.options,
					},
				};
		}

		return state;
	},

	actions,

	selectors: {
		getOptions( state, names ) {
			const options = {};
			names.forEach( name => {
				const data = getSetting(
					'preloadOptions',
					{},
					po => po[ name ]
				);
				if ( data ) {
					options[ name ] = data;
				}
			} );

			return options;
		},
	},

	// controls: {
	// 	FETCH_FROM_API( action ) {
	// 		return apiFetch( { path: action.path } );
	// 	},
	// },

	controls,

	resolvers: {
		* getOptions( item ) {
			const path = '/wp/v2/prices/' + item;
			const price = yield actions.fetchFromAPI( path );
			return actions.setPrice( item, price );
		},
	},
} );
