/**
 * Internal dependencies
 */
import TYPES from './action-types';

const notesReducer = (
	state = {
		noteQueries: {},
		notes: {},
		errors: {},
	},
	{ type, notes, noteId, noteIds, noteFields, error, query, selector }
) => {
	switch ( type ) {
		case TYPES.SET_NOTES:
			state = {
				...state,
				notes: {
					...state.notes,
					...notes.reduce( ( acc, item ) => {
						acc[ item.id ] = item;
						return acc;
					}, {} ),
				},
			};
			break;
		case TYPES.SET_NOTES_QUERY:
			state = {
				...state,
				noteQueries: {
					...state.noteQueries,
					[ JSON.stringify( query ) ]: noteIds,
				},
			};
			break;
		case TYPES.SET_ERROR:
			state = {
				...state,
				errors: {
					...state.errors,
					[ selector ]: error,
				},
			};
			break;
		case TYPES.SET_NOTE:
			state = {
				...state,
				notes: {
					...state.notes,
					[ noteId ]: noteFields,
				},
			};
			break;
	}
	return state;
};

export default notesReducer;
