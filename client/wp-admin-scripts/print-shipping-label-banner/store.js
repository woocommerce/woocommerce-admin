/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { registerStore } from '@wordpress/data';

const DEFAULT_STATE = {
	wcsAssets: {},
	tosAccepted: false,
};

const actions = {
	updateTos( accepted ) {
		return {
			type: 'UPDATE_WCS_TOS',
			accepted,
		};
	},

	updateWcsAssets( assets ) {
		return {
			type: 'UPDATE_WCS_ASSETS',
			assets,
		};
	},

	fetchFromAPI( path ) {
		return {
			type: 'FETCH_FROM_API',
			path,
		};
	},
};

registerStore( 'print-shipping-label-banner', {
	reducer( state = DEFAULT_STATE, action ) {
		switch ( action.type ) {
			case 'UPDATE_WCS_TOS':
				return {
					...state,
					tosAccepted: action.accepted,
				};
			case 'UPDATE_WCS_ASSETS':
				return {
					...state,
					wcsAssets: action.assets,
				};
		}

		return state;
	},

	actions,

	selectors: {
		acceptTos( state ) {
			const { tosAccepted } = state;

			return tosAccepted;
		},

		getWcsAssets( state ) {
			const { wcsAssets } = state;

			return wcsAssets;
		},
	},

	controls: {
		FETCH_FROM_API( action ) {
			return apiFetch( { path: action.path } );
		},
	},

	resolvers: {
		*acceptTos() {
			const path = '/accept/tos';
			const tosAccepted = yield actions.fetchFromAPI( path );
			return actions.updateTos( tosAccepted );
		},
		*getWcsAssets() {
			const path = '/get/wcs/assets';
			const wcsAssets = yield actions.fetchFromAPI( path );
			return actions.updateAssets( wcsAssets );
		},
	},
} );
