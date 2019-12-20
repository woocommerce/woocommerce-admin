/**
 * External Dependencies
 *
 * @format
 */

import { apiFetch, select } from '@wordpress/data-controls';
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

	// todo: update should be an array of objects like { id: key, value: dirtyData[ key ] }.
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

export function clearSettings() {
	return {
		type: TYPES.CLEAR_SETTINGS,
	};
}
