/**
 * External Dependencies
 */
import { apiFetch } from '@wordpress/data-controls';
import { getOptionsToRequest } from './controls';

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
		yield setRequestingError( error, names );
		return error;
	}
}

const fetches = {};

export function* getOption( name ) {
	yield setIsRequesting( name );
	const names = yield getOptionsToRequest( name );

	const fetchInProgress = fetches[ names ];
	if ( fetchInProgress ) {
		return;
	}

	const url = WC_ADMIN_NAMESPACE + '/options?options=' + names;
	fetches[ names ] = true;
	
	try {
		const result = yield apiFetch( { path: url } );
		yield receiveOptions( result );
	} catch ( error ) {
		yield setRequestingError( error, names );
	}

	// Delete the fetch after to allow wp data to handle cache invalidation.
	delete fetches[ names ];
}
