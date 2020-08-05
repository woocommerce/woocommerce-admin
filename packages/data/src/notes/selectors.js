export const getNotes = ( state, query ) => {
	const noteIds = state.noteQueries[ JSON.stringify( query ) ] || [];
	return noteIds.map( ( id ) => state.notes[ id ] );
};

export const getNotesError = ( state, selector ) => {
	return state.errors[ selector ] || false;
};
