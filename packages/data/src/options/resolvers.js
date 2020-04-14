/**
 * External Dependencies
 */

import { apiFetch } from '@wordpress/data-controls';

/**
 * Internal dependencies
 */
import { WC_ADMIN_NAMESPACE } from '../constants';
import { receiveOptions, setIsRequesting, setRequestingError } from './actions';

export function* getOptionsWithRequest( names ) {
	yield setIsRequesting( true );
	const url = WC_ADMIN_NAMESPACE + '/options?options=' + names.join( ',' );

	try {
		const results = yield apiFetch( { path: url } );
		yield receiveOptions( results );
		return results;
	} catch ( error ) {
		yield setRequestingError( error );
		return error;
	}
}
