/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { registerStore } from '@wordpress/data';

const DEFAULT_STATE = {};

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

	fetchFromAPI( path, method = 'GET', data = null ) {
		return {
			type: 'FETCH_FROM_API',
			path,
			method,
			data,
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
			return apiFetch( {
				path: action.path,
				method: action.method,
				data: action.data,
			} );
		},
	},

	resolvers: {
		*acceptTos() {
			const path = '/wc/v1/connect/tos';
			const { accepted } = yield actions.fetchFromAPI( path, 'POST', {
				accepted: true,
			} );
			return actions.updateTos( accepted );
		},
		*getWcsAssets() {
			const path = '/wc/v1/connect/assets';
			const wcsAssets = yield actions.fetchFromAPI( path );
			return actions.updateWcsAssets( wcsAssets );
		},
	},
} );
