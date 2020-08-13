/**
 * Internal dependencies
 */
import TYPES from './action-types';

export function setImportStatus( query, importStatus ) {
	return {
		type: TYPES.SET_IMPORT_STATUS,
		importStatus,
		query,
	};
}

export function setImportTotals( query, importTotals ) {
	return {
		type: TYPES.SET_IMPORT_TOTALS,
		importTotals,
		query,
	};
}

export function setImportError( query, error ) {
	return {
		type: TYPES.SET_IMPORT_ERROR,
		error,
		query,
	};
}
