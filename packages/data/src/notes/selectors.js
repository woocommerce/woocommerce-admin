/**
 * External dependencies
 */
import createSelector from 'rememo';

const EMPTY_ARRAY = [];
const EMPTY_OBJECT = {};

export const getNotes = createSelector(
	( state, query ) => {
		const noteIds = state.noteQueries[ JSON.stringify( query ) ] || [];
		return noteIds.length
			? noteIds.map( ( id ) => state.notes[ id ] )
			: EMPTY_ARRAY;
	},
	( state, query ) => [
		state?.notes ?? EMPTY_OBJECT,
		state?.noteQueries?.[ JSON.stringify( query ) ] ?? EMPTY_ARRAY,
	]
);

export const getNotesError = ( state, selector ) => {
	return state.errors[ selector ] || false;
};

export const isNotesRequesting = ( state, selector ) => {
	return state.requesting[ selector ] || false;
};
