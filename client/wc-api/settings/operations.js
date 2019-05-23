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
	const filteredNames = resourceNames.filter( name => {
		return name.startsWith( 'settings/' );
	} );

	return filteredNames.map( async resourceName => {
		const url = NAMESPACE + '/' + resourceName;

		return fetch( { path: url } )
			.then( settingsToSettingsResource.bind( null, resourceName ) )
			.catch( error => {
				return { [ resourceName ]: { error: String( error.message ) } };
			} );
	} );
}

function updateSettings( resourceNames, data, fetch ) {
	const resourceName = 'settings';
	const settingsFields = [
		'woocommerce_excluded_report_order_statuses',
		'woocommerce_actionable_order_statuses',
	];

	if ( resourceNames.includes( resourceName ) ) {
		const url = NAMESPACE + '/settings/wc_admin/';
		const settingsData = pick( data[ resourceName ], settingsFields );

		const promises = Object.keys( settingsData ).map( setting => {
			return fetch( {
				path: url + setting,
				method: 'POST',
				data: { value: settingsData[ setting ] },
			} )
				.then( settingToSettingsResource.bind( null, data.settings ) )
				.catch( error => {
					return { [ resourceName ]: { error } };
				} );
		} );

		return promises;
	}
	return [];
}

function settingsToSettingsResource( resourceName, settings ) {
	const settingsData = {};
	settings.forEach( setting => ( settingsData[ setting.id ] = setting.value ) );
	return { [ resourceName ]: { data: settingsData } };
}

function settingToSettingsResource( settings, setting ) {
	settings[ setting.id ] = setting.value;
	return { [ 'settings' ]: { data: settings } };
}

export default {
	read,
	update,
};
