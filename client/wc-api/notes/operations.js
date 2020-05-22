/**
 * External dependencies
 */
import { addQueryArgs } from '@wordpress/url';
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import {
	isResourcePrefix,
	getResourceIdentifier,
	getResourceName,
} from '../utils';
import { NAMESPACE } from '../constants';

function read( resourceNames, fetch = apiFetch ) {
	return [
		...readNotes( resourceNames, fetch ),
		...readNoteQueries( resourceNames, fetch ),
	];
}

function update( resourceNames, data, fetch = apiFetch ) {
	return [
		...updateNote( resourceNames, data, fetch ),
		...triggerAction( resourceNames, data, fetch ),
	];
}

function remove( resourceNames, data, fetch = apiFetch ) {
	return [ ...removeNote( resourceNames, data, fetch ) ];
}

function removeAll( resourceNames, fetch = apiFetch ) {
	return [ ...removeAllNotes( resourceNames, fetch ) ];
}

function undoRemoveAll( resourceNames, data, fetch = apiFetch ) {
	return [ ...undoRemoveAllNotes( resourceNames, data, fetch ) ];
}

function readNoteQueries( resourceNames, fetch ) {
	const filteredNames = resourceNames.filter( ( name ) =>
		isResourcePrefix( name, 'note-query' )
	);

	return filteredNames.map( async ( resourceName ) => {
		const query = getResourceIdentifier( resourceName );
		const url = addQueryArgs( `${ NAMESPACE }/admin/notes`, query );

		try {
			const response = await fetch( {
				parse: false,
				path: url,
			} );

			const notes = await response.json();
			const totalCount = parseInt(
				response.headers.get( 'x-wp-total' ),
				10
			);
			const ids = notes.map( ( note ) => note.id );
			const noteResources = notes.reduce( ( resources, note ) => {
				resources[ getResourceName( 'note', note.id ) ] = {
					data: note,
				};
				return resources;
			}, {} );

			return {
				[ resourceName ]: {
					data: ids,
					totalCount,
				},
				...noteResources,
			};
		} catch ( error ) {
			return { [ resourceName ]: { error } };
		}
	} );
}

function readNotes( resourceNames, fetch ) {
	const filteredNames = resourceNames.filter( ( name ) =>
		isResourcePrefix( name, 'note' )
	);
	return filteredNames.map( ( resourceName ) =>
		readNote( resourceName, fetch )
	);
}

function readNote( resourceName, fetch ) {
	const id = getResourceIdentifier( resourceName );
	const url = `${ NAMESPACE }/admin/notes/${ id }`;

	return fetch( { path: url } )
		.then( ( note ) => {
			return { [ resourceName ]: { data: note } };
		} )
		.catch( ( error ) => {
			return { [ resourceName ]: { error } };
		} );
}

function updateNote( resourceNames, data, fetch ) {
	const resourceName = 'note';
	if ( resourceNames.includes( resourceName ) ) {
		const { noteId, ...noteFields } = data[ resourceName ];
		const url = `${ NAMESPACE }/admin/notes/${ noteId }`;
		return [
			fetch( { path: url, method: 'PUT', data: noteFields } )
				.then( ( note ) => {
					return { [ resourceName + ':' + noteId ]: { data: note } };
				} )
				.catch( ( error ) => {
					return { [ resourceName + ':' + noteId ]: { error } };
				} ),
		];
	}
	return [];
}

function removeNote( resourceNames, data, fetch ) {
	const resourceName = 'note';
	if ( resourceNames.includes( resourceName ) ) {
		const { noteId } = data[ resourceName ];
		const url = `${ NAMESPACE }/admin/notes/delete/${ noteId }`;
		return [
			fetch( { path: url, method: 'DELETE' } )
				.then( ( response ) => {
					return {
						[ resourceName + ':' + noteId ]: { data: response },
					};
				} )
				.catch( ( error ) => {
					return { [ resourceName + ':' + noteId ]: { error } };
				} ),
		];
	}
	return [];
}

function removeAllNotes( resourceNames, fetch ) {
	const resourceName = 'note';
	if ( resourceNames.includes( resourceName ) ) {
		const url = `${ NAMESPACE }/admin/notes/delete/all`;
		return [
			fetch( { path: url, method: 'DELETE' } )
				.then( ( response ) => {
					const notes = response.reduce( ( result, note ) => {
						const resourceKey = [ resourceName + ':' + note.id ];
						result[ resourceKey ] = { data: note };
						return result;
					}, {} );
					return notes;
				} )
				.catch( ( error ) => {
					return { error };
				} ),
		];
	}
	return [];
}

function undoRemoveAllNotes( resourceNames, data, fetch ) {
	const resourceName = 'note';
	if ( resourceNames.includes( resourceName ) ) {
		const url = `${ NAMESPACE }/admin/notes/undoremove`;
		return [
			fetch( { path: url, method: 'PUT', data } )
				.then( ( response ) => {
					const notes = response.reduce( ( result, note ) => {
						const resourceKey = [ resourceName + ':' + note.id ];
						result[ resourceKey ] = { data: note };
						return result;
					}, {} );
					return notes;
				} )
				.catch( ( error ) => {
					return error;
				} ),
		];
	}
	return [];
}

function triggerAction( resourceNames, data, fetch ) {
	const resourceName = 'note-action';
	if ( resourceNames.includes( resourceName ) ) {
		const { noteId, actionId } = data[ resourceName ];
		const url = `${ NAMESPACE }/admin/notes/${ noteId }/action/${ actionId }`;
		return [
			fetch( { path: url, method: 'POST' } )
				.then( ( note ) => {
					return { [ 'note:' + noteId ]: { data: note } };
				} )
				.catch( ( error ) => {
					return { [ 'note:' + noteId ]: { error } };
				} ),
		];
	}
	return [];
}

export default {
	read,
	update,
	remove,
	removeAll,
	triggerAction,
	undoRemoveAll,
};
