/**
 * External Dependencies
 */

import { apiFetch } from '@wordpress/data-controls';

/**
 * Internal Dependencies
 */
import TYPES from './action-types';
import { WC_ADMIN_NAMESPACE } from '../constants';

export function setError( selector, error ) {
	return {
		type: TYPES.SET_ERROR,
		selector,
		error,
	};
}

export function setProfileItems( profileItems, replace = false ) {
	return {
		type: TYPES.SET_PROFILE_ITEMS,
		profileItems,
		replace,
	};
}

export function* updateProfileItems( items ) {
	try {
		const results = yield apiFetch( {
			path: `${ WC_ADMIN_NAMESPACE }/onboarding/profile`,
			method: 'POST',
			data: items,
		} );

		if ( results && results.status === 'success' ) {
			yield setProfileItems( items );
			return results;
		}

		throw new Error();
	} catch ( error ) {
		yield setError( 'updateProfileItems', error );
	}
}
