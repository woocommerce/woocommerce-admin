/**
 * External Dependencies
 */
import { apiFetch } from '@wordpress/data-controls';
import { batchFetch } from './controls';

/**
 * Internal dependencies
 */
import { WC_ADMIN_NAMESPACE } from '../constants';
import { receiveOptions, setRequestingError } from './actions';

export function* getOptionsWithRequest( names ) {
	const url = WC_ADMIN_NAMESPACE + '/options?options=' + names.join( ',' );

	try {
		const results = yield apiFetch( { path: url } );
		yield receiveOptions( results );
		return results;
	} catch ( error ) {
		yield setRequestingError( error, names );
		return error;
	}
}

/**
 * Request an option value.
 * 
 * @param {string} name - Option name
 */
export function* getOption( name ) {
	try {
		const result = yield batchFetch( name );
		yield receiveOptions( result );
	} catch ( error ) {
		yield setRequestingError( error, name );
	}
}
