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
	yield setIsRequesting( 'triggerNoteAction', true );

	const url = `${ NAMESPACE }/admin/notes/${ noteId }/action/${ actionId }`;
	try {
		const result = yield apiFetch( { path: url, method: 'POST' } );
		yield updateNote( noteId, result );
		yield setIsRequesting( 'triggerNoteAction', false );
	} catch ( error ) {
		yield setError( 'triggerNoteAction', error );
		yield setIsRequesting( 'triggerNoteAction', false );
	}
}

export function* removeNote( noteId ) {
	yield setIsRequesting( 'removeNote', noteId );

	try {
		const url = `${ NAMESPACE }/admin/notes/delete/${ noteId }`;
		const response = yield apiFetch( { path: url, method: 'DELETE' } );
		yield setNote( noteId, response );
		yield setIsRequesting( 'removeNote', false );
		return response;
	} catch ( error ) {
		yield setError( 'removeNote', error );
		yield setIsRequesting( 'removeNote', false );
	}
}

export function* removeAllNotes() {
	yield setIsRequesting( 'removeAllNotes', true );

	try {
		const url = `${ NAMESPACE }/admin/notes/delete/all`;
		const notes = yield apiFetch( { path: url, method: 'DELETE' } );
		yield setNotes( notes );
		yield setIsRequesting( 'removeAllNotes', false );
		return notes;
	} catch ( error ) {
		setError( 'removeAllNotes', error );
		yield setIsRequesting( 'removeAllNotes', false );
	}
}

export function* batchUpdateNotes( noteIds, noteFields ) {
	yield setIsRequesting( 'batchUpdateNotes', true );

	try {
		const url = `${ NAMESPACE }/admin/notes/update`;
		const notes = yield apiFetch( {
			path: url,
			method: 'PUT',
			data: {
				noteIds,
				...noteFields,
			},
		} );
		yield setNotes( notes );
		yield setIsRequesting( 'batchUpdateNotes', false );
	} catch ( error ) {
		setError( 'updateNote', error );
		yield setIsRequesting( 'batchUpdateNotes', false );
	}
}

export function* updateNote( noteId, noteFields ) {
	yield setIsRequesting( 'updateNote', true );

	try {
		const url = `${ NAMESPACE }/admin/notes/${ noteId }`;
		const note = yield apiFetch( {
			path: url,
			method: 'PUT',
			data: noteFields,
		} );
		yield setNote( noteId, note );
		yield setIsRequesting( 'updateNote', false );
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

export function setIsRequesting( selector, isRequesting ) {
	return {
		type: TYPES.SET_IS_REQUESTING,
		selector,
		isRequesting,
	};
}
