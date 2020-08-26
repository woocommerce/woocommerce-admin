/**
 * Internal dependencies
 */
import TYPES from './action-types';

const reducer = (
	state = {
		importStatus: {},
		importTotals: {},
		errors: {},
		activeImport: false,
	},
	{ type, query, importStatus, importTotals, activeImport, error }
) => {
	switch ( type ) {
		case TYPES.SET_IMPORT_STARTED:
			state = {
				...state,
				activeImport,
			};
			break;
		case TYPES.SET_IMPORT_STATUS:
			state = {
				...state,
				importStatus: {
					...state.importStatus,
					[ JSON.stringify( query ) ]: importStatus,
				},
			};
			break;
		case TYPES.SET_IMPORT_TOTALS:
			state = {
				...state,
				importTotals: {
					...state.importTotals,
					[ JSON.stringify( query ) ]: importTotals,
				},
			};
			break;
		case TYPES.SET_IMPORT_ERROR:
			state = {
				...state,
				errors: {
					...state.errors,
					[ JSON.stringify( query ) ]: error,
				},
			};
			break;
	}
	return state;
};

export default reducer;
