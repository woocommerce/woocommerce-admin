/**
 * External dependencies
 */
import { apiFetch } from '@wordpress/data-controls';

/**
 * Internal dependencies
 */
import { NAMESPACE } from '../constants';
import TYPES from './action-types';

export function* triggerNoteAction( noteId, actionId ) {
	const url = `${ NAMESPACE }/admin/notes/${ noteId }/action/${ actionId }`;
	try {
		const result = yield apiFetch( { path: url, method: 'POST' } );
		yield updateNote( noteId, result );
	} catch ( error ) {
		yield setError( 'triggerNoteAction', error );
	}
}

export function* removeNote( noteId ) {
	try {
		const url = `${ NAMESPACE }/admin/notes/delete/${ noteId }`;
		const response = yield apiFetch( { path: url, method: 'DELETE' } );
		yield setNote( noteId, response );
	} catch ( error ) {
		yield setError( 'removeNote', error );
	}
}

export function* removeAllNotes() {
	try {
		const url = `${ NAMESPACE }/admin/notes/delete/all`;
		const notes = yield apiFetch( { path: url, method: 'DELETE' } );
		yield setNotes( notes );
	} catch ( error ) {
		setError( 'removeAllNotes', error );
	}
}

export function* updateNote( noteId, noteFields ) {
	const url = `${ NAMESPACE }/admin/notes/${ noteId }`;
	try {
		const note = yield apiFetch( {
			path: url,
			method: 'PUT',
			data: noteFields,
		} );
		// @todo Handle note dismissal undo.
		yield setNote( noteId, note );
	} catch ( error ) {
		setError( 'updateNote', error );
	}
}

export function setNote( noteId, noteFields ) {
	return {
		type: TYPES.SET_NOTE,
		noteId,
		noteFields,
	};
}

export function setNotes( notes ) {
	return {
		type: TYPES.SET_NOTES,
		notes,
	};
}

export function setNotesQuery( query, noteIds ) {
	return {
		type: TYPES.SET_NOTES_QUERY,
		query,
		noteIds,
	};
}

export function setError( selector, error ) {
	return {
		type: TYPES.SET_ERROR,
		error,
		selector,
	};
}
