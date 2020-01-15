/** @format */

export const getSettings = state => {
	const settings = {};
	const settingIds = state.ids || [];
	if ( settingIds.length === 0 ) {
		return settings;
	}
	settingIds.forEach( id => {
		settings[ id ] = state[ id ].data;
	} );
	return settings;
};

export const getDirtyKeys = state => {
	return state.dirty || [];
};

export const getIsDirty = ( state, keys = [] ) => {
	const dirtyMap = getDirtyKeys( state );
	// if empty array bail
	if ( dirtyMap.length === 0 ) {
		return false;
	}
	// if at least one of the keys is in the dirty map then the state is dirty
	// meaning it hasn't been persisted.
	return keys.some( ( key ) => dirtyMap.includes( key ) );
};

export const getSettingsForKeys = ( state, keys ) => {
	const allSettings = getSettings( state );
	return keys.reduce( ( accumulator, key ) => {
		accumulator[ key ] = allSettings[ key ] || null;
		return accumulator;
	}, {} );
};

export const getIsPersisting = ( state ) => {
	return Boolean( state.isPersisting );
};

/**
 * Retrieves a setting value from the setting store.
 *
 * @export
 * @param {object}   state                        State param added by wp.data.
 * @param {string}   name                         The identifier for the setting.
 * @param {mixed}    [fallback=false]             The value to use as a fallback
 *                                                if the setting is not in the
 *                                                state.
 * @param {function} [filter=( val ) => val]  	  A callback for filtering the
 *                                                value before it's returned.
 *                                                Receives both the found value
 *                                                (if it exists for the key) and
 *                                                the provided fallback arg.
 *
 * @returns {mixed}  The value present in the settings state for the given
 *                   name.
 */
export function getSetting( state, name, fallback = false, filter = val => val ) {
	const value = ( state[ name ] && state[ name ].data ) || fallback;
	return filter( value, fallback );
}

export const getLastSettingsError = state => {
	return state.error;
};

export const getSettingsError = ( state, id ) => {
	return state[ id ].error;
};
