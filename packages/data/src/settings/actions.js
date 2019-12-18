/**
 * External Dependencies
 *
 * @format
 */

import { select, apiFetch, dispatch } from '@wordpress/data-controls';

/**
 * Internal Dependencies
 */
import { NAMESPACE } from '../constants';
import { STORE_NAME } from './constants';
import TYPES from './action-types';

export function updateSettingsForGroup( group, data, time = new Date() ) {
	return {
		type: TYPES.UPDATE_SETTINGS_FOR_GROUP,
		group,
		data,
		time,
	};
}

export function updateErrorForGroup( group, data, error, time = new Date() ) {
	return {
		type: TYPES.UPDATE_ERROR_FOR_GROUP,
		group,
		data,
		error,
		time,
	};
}

const resultsToSettings = data => {
	if ( typeof data.update === 'undefined' ) {
		return;
	}
	const resources = {};
	data.update.forEach( setting => ( resources[ setting.id ] = setting.value ) );
	return resources;
};

const settingsToData = settings => {
	const data = {};
	Object.keys( settings ).forEach( s => {
		if ( 'object' === typeof settings[ s ] ) {
			Object.keys( settings[ s ] ).forEach( p => {
				data[ p ] = settings[ s ][ p ];
			} );
		} else {
			data[ s ] = settings[ s ];
		}
	} );
	return data;
};

export function* persistSettingsForGroup( group, settings ) {
	yield dispatch( STORE_NAME, 'startResolution', 'setSetting', [ group ] );
	yield dispatch( STORE_NAME, 'updateSettingsForGroup', [ group, settings ] );

	const url = `${ NAMESPACE }/settings/${ group }/batch`;
	const data = settingsToData( settings );
	const settingsData = Object.keys( data ).map( key => {
		return { id: key, value: data[ key ] };
	} );

	try {
		let results = yield apiFetch( {
			path: url,
			method: 'POST',
			data: { update: settingsData },
		} );
		results = resultsToSettings( results );
		if ( ! results ) {
			throw new Error( 'settings did not update' );
		}
		yield updateSettingsForGroup( group, results );
	} catch ( e ) {
		yield updateErrorForGroup( group, null, e );
	}
	yield dispatch( STORE_NAME, 'finishResolution', 'setSetting', [ group ] );
}

export function* persistAllSettings( data ) {
	const settingsGroups = yield select( STORE_NAME, 'getSettingsGroupNames' );
	while ( settingsGroups.length > 0 ) {
		const group = settingsGroups.pop();
		if ( data[ group ] ) {
			yield* persistSettingsForGroup( group, data[ group ] );
		}
	}
}

export function clearSettings() {
	return {
		type: TYPES.CLEAR_SETTINGS,
	};
}
