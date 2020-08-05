export const getNotes = ( state ) => {
	return state.notes || [];
};

export const getNotesError = ( state, selector ) => {
	return state.errors[ selector ] || false;
};
