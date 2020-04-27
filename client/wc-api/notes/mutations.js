const updateNote = ( operations ) => ( noteId, noteFields ) => {
	const resourceKey = 'note';
	operations.update( [ resourceKey ], {
		[ resourceKey ]: { noteId, ...noteFields },
	} );
};

const removeNote = ( operations ) => ( noteId ) => {
	const resourceKey = 'note';
	operations.remove( [ resourceKey ], {
		[ resourceKey ]: { noteId },
	} );
};

const removeAllNotes = ( operations ) => () => {
	const resourceKey = 'note';
	operations.removeAll( [ resourceKey ] );
};

const triggerNoteAction = ( operations ) => ( noteId, actionId ) => {
	const resourceKey = 'note-action';
	operations.update( [ resourceKey ], {
		[ resourceKey ]: { noteId, actionId },
	} );
};

export default {
	updateNote,
	removeNote,
	removeAllNotes,
	triggerNoteAction,
};
