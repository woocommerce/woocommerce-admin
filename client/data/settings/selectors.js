/** @format */

/**
 * Internal dependencies
 */
import { getResourceName, getResourcePrefix } from '../utils';

export const getSettingsGroupNames = state => {
	const groupNames = new Set(
		Object.keys( state ).map( resourceName => {
			return getResourcePrefix( resourceName );
		} )
	);
	return [ ...groupNames ];
};

export const getSettings = ( state, group ) => {
	const settings = {};
	const settingIds = state[ group ].data || [];
	if ( settingIds.length === 0 ) {
		return settings;
	}
	settingIds.forEach( id => {
		settings[ id ] = state[ getResourceName( group, id ) ].data;
	} );
	return settings;
};

export const getLastSettingsErrorForGroup = ( state, group ) => {
	const settingsIds = state[ group ].data;
	if ( settingsIds.length === 0 ) {
		return state[ group ].error;
	}
	return [ ...settingsIds ].pop().error;
};

export const getSettingsError = ( state, group, id ) => {
	return state[ getResourceName( group, id ) ].error;
};
