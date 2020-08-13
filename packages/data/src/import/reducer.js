/**
 * Internal dependencies
 */
import TYPES from './action-types';

const reducer = (
	state = {
		importStatus: {},
		importTotals: {},
		errors: {},
	},
	{ type, importStatus, importTotals, error, resourceName }
) => {
	switch ( type ) {
		case TYPES.SET_IMPORT_STATUS:
			state = {
				...state,
				importStatus: {
					...state.importStatus,
					[ resourceName ]: importStatus,
				},
			};
			break;
		case TYPES.SET_IMPORT_TOTALS:
			state = {
				...state,
				importTotals: {
					...state.importTotals,
					[ resourceName ]: importTotals,
				},
			};
			break;
		case TYPES.SET_IMPORT_ERROR:
			state = {
				...state,
				errors: {
					...state.errors,
					[ resourceName ]: error,
				},
			};
			break;
	}
	return state;
};

export default reducer;
