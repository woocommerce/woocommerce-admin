/**
 * External Dependencies
 *
 * @format
 */

import { apiFetch, dispatch } from '@wordpress/data-controls';

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

/**
 * Sets a value to a property on the settings state.
 *
 * @export
 * @param {string}   group                       The settings group.
 * @param {string}   name                        The setting property key for the
 *                                               setting being mutated.
 * @param {mixed}    value                       The value to set.
 * @param {function} [filter=( val ) => val]     Allows for providing a callback
 *                                               to sanitize the setting (eg.
 *                                               ensure it's a number)
 */
export function* setSettingsForGroup( group, name, value, filter = val => val ) {
	const data = filter( value );
	yield dispatch( STORE_NAME, 'startResolution', 'setSetting', [ group ] );
	yield dispatch( STORE_NAME, 'updateSettingsForGroup', [ group, { [ name ]: data } ] );

	const url = `${ NAMESPACE }/settings/${ group }/batch`;
	const update = Object.keys( data ).map( key => {
		return { id: key, value: data[ key ] };
	} );

	try {
		let results = yield apiFetch( {
			path: url,
			method: 'POST',
			data: { update },
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

export function clearSettings() {
	return {
		type: TYPES.CLEAR_SETTINGS,
	};
}
