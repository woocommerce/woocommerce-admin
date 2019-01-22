/** @format */

/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { pick } from 'lodash';

/**
 * Internal dependencies
 */
import { NAMESPACE } from '../constants';

function read( resourceNames, fetch = apiFetch ) {
	return [ ...readSettings( resourceNames, fetch ) ];
}

function update( resourceNames, data, fetch = apiFetch ) {
	return [ ...updateSettings( resourceNames, data, fetch ) ];
}

function readSettings( resourceNames, fetch ) {
	if ( resourceNames.includes( 'settings' ) ) {
		const url = '/wc/v3/settings/wc_admin';

		return [
			fetch( { path: url } )
				.then( settingsToSettingsResource )
				.catch( error => {
					return { [ 'settings' ]: { error: String( error.message ) } };
				} ),
		];
	}
	return [];
}

function updateSettings( resourceNames, data, fetch ) {
	const resourceName = 'settings';
	const settingsFields = [ 'woocommerce_excluded_report_order_statuses' ];

	if ( resourceNames.includes( resourceName ) ) {
		const url = NAMESPACE + '/settings/wc_admin/';
		const settingsData = pick( data[ resourceName ], settingsFields );

		const promises = Object.keys( settingsData ).map( setting => {
			let value = settingsData[ setting ];
			if ( Array.isArray( value ) ) {
				value = value.join( ',' );
			}
			return fetch( { path: url + setting, method: 'POST', data: { value: value } } )
				.then( settingsToSettingsResource )
				.catch( error => {
					return { [ resourceName ]: { error } };
				} );
		} );

		return [ promises ];
	}
	return [];
}

function settingsToSettingsResource( settings ) {
	const settingsData = {};
	settings.forEach( setting => ( settingsData[ setting.id ] = setting.value ) );
	return { [ 'settings' ]: { data: settingsData } };
}

export default {
	read,
	update,
};
