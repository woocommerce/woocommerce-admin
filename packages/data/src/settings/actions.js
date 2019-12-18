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
 * Request data requires a flat object for a payload.
 * todo: confirm this assumption when updating Onboarding. A refactor may be required.
 *
 * @param {object} settings - settingts object
 * @return {object} A settings object in data form.
 */
const settingsToData = settings => {
	const data = {};
	Object.keys( settings ).forEach( prop => {
		if ( 'object' === typeof settings[ prop ] ) {
			Object.keys( settings[ prop ] ).forEach( subProp => {
				data[ subProp ] = settings[ prop ][ subProp ];
			} );
		} else {
			data[ prop ] = settings[ prop ];
		}
	} );
	return data;
};

export function* setSettingsForGroup( group, settings ) {
	yield dispatch( STORE_NAME, 'startResolution', 'setSetting', [ group ] );
	yield dispatch( STORE_NAME, 'updateSettingsForGroup', [ group, settings ] );

	const url = `${ NAMESPACE }/settings/${ group }/batch`;
	const data = settingsToData( settings );
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
