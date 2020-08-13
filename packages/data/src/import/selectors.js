export const getImportStatus = ( state, query ) => {
	const stringifiedQuery = JSON.stringify( query );
	return state.importStatus[ stringifiedQuery ] || {};
};

export const getImportTotals = ( state, query ) => {
	const stringifiedQuery = JSON.stringify( query );
	return state.importTotals[ stringifiedQuery ] || {};
};

export const getImportError = ( state, query ) => {
	const stringifiedQuery = JSON.stringify( query );
	return state.errors[ stringifiedQuery ] || false;
};
