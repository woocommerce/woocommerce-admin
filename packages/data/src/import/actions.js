/**
 * Internal dependencies
 */
import TYPES from './action-types';

export function updateImportStarted( activeImport ) {
	return {
		type: TYPES.UPDATE_IMPORT_STARTED,
		activeImport,
	};
}

export function updateImportPeriod( date, dateModified ) {
	if ( ! dateModified ) {
		return {
			type: TYPES.UPDATE_IMPORT_PERIOD,
			date,
		};
	}
	return {
		type: TYPES.UPDATE_IMPORT_DATE,
		date,
	};
}

export function updateSkipPrevious( skipPrevious ) {
	return {
		type: TYPES.UPDATE_SKIP_IMPORTED,
		skipPrevious,
	};
}

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
