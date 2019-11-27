/** @format */

/**
 * Internal dependencies
 */
import { NAMESPACE } from '../constants';
import { updateSettingsForGroup, updateErrorForGroup } from './actions';

/**
 * External dependencies
 */
import { apiFetch } from '@wordpress/data-controls';

export function* getSettings( group ) {
	const url = `${ NAMESPACE }/settings/${ group }`;
	try {
		const results = yield apiFetch( { path: url } );
		yield updateSettingsForGroup( group, results );
	} catch ( e ) {
		yield updateErrorForGroup( group, null, e );
	}
}
