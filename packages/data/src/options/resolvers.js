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

const optionsToRequest = [];
const fetches = {};

export function* getOption( name ) {
	yield setIsRequesting( true );
	optionsToRequest.push( name );

	setTimeout( function* () {
		const names = optionsToRequest.join(',');
		const fetchPromise = fetches[ names ];
		if ( fetchPromise ) {
			const results = yield fetchPromise;
			return results;
		}

		const url = WC_ADMIN_NAMESPACE + '/options?options=' + names;
		fetches[ names ] = yield apiFetch( { path: url } );
		return fetches[ names ];
	}, 1 );
}
