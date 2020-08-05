/**
 * Internal dependencies
 */
import TYPES from './action-types';

const notesReducer = (
	state = {
		notes: [],
		errors: {},
	},
	{ type, notes, noteId, noteFields, error, selector }
) => {
	switch ( type ) {
		case TYPES.SET_NOTES:
			state = {
				...state,
				notes,
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
				notes: notes.map( ( note ) => {
					if ( note.id === noteId ) {
						return noteFields;
					}
					return note;
				} ),
			};
			break;
	}
	return state;
};

export default notesReducer;
