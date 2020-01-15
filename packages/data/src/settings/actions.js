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

export function updateSettings( data, time = new Date() ) {
	return {
		type: TYPES.UPDATE_SETTINGS,
		data,
		time,
	};
}

export function updateError( data, error, time = new Date() ) {
	return {
		type: TYPES.UPDATE_ERROR,
		data,
		error,
		time,
	};
}

export function setIsPersisting( isPersisting ) {
	return {
		type: TYPES.SET_IS_PERSISTING,
		isPersisting,
	};
}

export function clearIsDirty() {
	return {
		type: TYPES.CLEAR_IS_DIRTY,
	};
}

// allows updating and persisting immediately in one action.
export function* updateAndPersistSettings( data ) {
	yield updateSettings( data );
	yield* persistSettings();
}

export function* persistSettings() {
	// first dispatch the is persisting action
	yield setIsPersisting( true );
	// get all dirty keys with select control
	const dirtyKeys = yield select( STORE_NAME, 'getDirtyKeys' );
	// if there is nothing dirty, bail
	if ( dirtyKeys.length === 0 ) {
		yield setIsPersisting( false );
		return;
	}

	// get data slice for keys
	const dirtyData = yield select( STORE_NAME, 'getSettingsForKeys', dirtyKeys );
	const url = `${ NAMESPACE }/settings/wc_admin/batch`;

	const update = dirtyKeys.reduce( ( updates, key ) => {
		const u = Object.keys( dirtyData[ key ] ).map( k => {
			return { id: k, value: dirtyData[ key ][ k ] };
		} );
		return concat( updates, u );
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
		yield clearIsDirty();
	} catch ( e ) {
		yield updateError( null, e );
	}
	// finally set the persisting state
	yield setIsPersisting( false );
}

export function clearSettings() {
	return {
		type: TYPES.CLEAR_SETTINGS,
	};
}
