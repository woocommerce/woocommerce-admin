/**
 * External dependencies
 */
import { addQueryArgs } from '@wordpress/url';
import { apiFetch } from '@wordpress/data-controls';

/**
 * Internal dependencies
 */
import { NAMESPACE } from '../constants';
import { setNotes, setError } from './actions';

export function* getNotes( query = {} ) {
	const url = addQueryArgs( `${ NAMESPACE }/admin/notes`, query );

	try {
		const results = yield apiFetch( {
			path: url,
		} );

		yield setNotes( results, true );
	} catch ( error ) {
		yield setError( 'getNotes', error );
	}
}
