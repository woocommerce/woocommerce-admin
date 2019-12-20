/**
 * External Dependencies
 *
 * @format
 */

import { apiFetch, select, dispatch } from '@wordpress/data-controls';
import { concat } from 'lodash';

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

export function setIsPersisting( group, persisting ) {
	return {
		type: TYPES.SET_IS_PERSISTING,
		group,
		persisting,
	};
}

export function setIsDirty( group, dirtyKeys, clear = false ) {
	return {
		type: TYPES.SET_IS_DIRTY,
		group,
		dirtyKeys,
		clear,
	};
}

// allows updating and persisting immediately in one action.
export function* updateAndPersistSettingsForGroup( group, data ) {
	yield updateSettingsForGroup( group, data );
	yield* persistSettingsForGroup( group );
}

// this would replace setSettingsForGroup
export function* persistSettingsForGroup( group ) {
	// first dispatch the is persisting action
	yield setIsPersisting( group, true );
	// get all dirty keys with select control
	const dirtyKeys = yield select( STORE_NAME, 'getDirtyKeys', group );
	// if there is nothing dirty, bail
	if ( dirtyKeys.length === 0 ) {
		yield setIsPersisting( group, false );
		return;
	}

	// get data slice for keys
	const dirtyData = yield select( STORE_NAME, 'getSettingsForGroup', group, dirtyKeys );
	const url = `${ NAMESPACE }/settings/${ group }/batch`;
	const update = dirtyKeys.reduce( ( updates, key ) => {
		const u = Object.keys( dirtyData[ key ] ).map( k => {
			return { id: k, value: dirtyData[ key ][ k ] };
		} );
		return concat( updates, u );
		// return { id: key, value: dirtyData[ key ] };
	}, [] );
	try {
		const results = yield apiFetch( {
			path: url,
			method: 'POST',
			data: { update },
		} );
		if ( ! results ) {
			throw new Error( 'settings did not update' );
		}
		// remove dirtyKeys from map - note we're only doing this if there is no error.
		yield setIsDirty( group, dirtyKeys, true );
	} catch ( e ) {
		yield updateErrorForGroup( group, null, e );
	}
	// finally set the persisting state
	yield setIsPersisting( group, false );
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
