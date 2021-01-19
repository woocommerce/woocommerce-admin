/**
 * External dependencies
 */
import { apiFetch, dispatch } from '@wordpress/data-controls';

/**
 * Internal dependencies
 */
import { NAMESPACE } from '../constants';
import { STORE_NAME } from './constants';
import { updateSettingsForGroup, updateErrorForGroup } from './actions';

export function* getSettings( group ) {
	yield dispatch( STORE_NAME, 'setIsRequesting', group, true );

	try {
		const url = NAMESPACE + '/settings/' + group;
		const results = yield apiFetch( {
			path: url,
			method: 'GET',
		} );

		return updateSettingsForGroup( group, { [ group ]: results } );
	} catch ( error ) {
		return updateErrorForGroup( group, null, error.message );
	}
}

export function* getSettingOptions( group ) {
	yield getSettings( group );
}

export function* getSettingsForGroup( group ) {
	return getSettings( group );
}
