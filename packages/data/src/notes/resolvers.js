/**
 * External dependencies
 */
import { addQueryArgs } from '@wordpress/url';
import { apiFetch } from '@wordpress/data-controls';
import { sanitize } from 'dompurify';

/**
 * Internal dependencies
 */
import { NAMESPACE } from '../constants';
import { setNotes, setNotesQuery, setError } from './actions';

let notesExceededWarningShown = false;

export function* getNotes( query = {} ) {
	const url = addQueryArgs( `${ NAMESPACE }/admin/notes`, query );

	try {
		const notes = yield apiFetch( {
			path: url,
		} );

		if ( ! notesExceededWarningShown ) {
			const noteNames = notes.reduce( ( filtered, note ) => {
				const content = sanitize( note.content, {
					ALLOWED_TAGS: [],
				} );
				if ( content.length > 320 ) {
					filtered.push( note.name );
				}
				return filtered;
			}, [] );

			if ( noteNames.length ) {
				/* eslint-disable no-console */
				console.warn(
					'WooCommerce Admin will soon limit inbox note contents to 320 characters. The following notes currently exceeds that limit: \n' +
						noteNames.map( ( name, idx ) => {
							return `  ${ idx + 1 }. ${ name }\n`;
						} )
				);
				/* eslint-enable no-console */
				notesExceededWarningShown = true;
			}
		}

		yield setNotes( notes );
		yield setNotesQuery(
			query,
			notes.map( ( note ) => note.id )
		);
	} catch ( error ) {
		yield setError( 'getNotes', error );
	}
}
