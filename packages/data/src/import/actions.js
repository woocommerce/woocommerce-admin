/**
 * Internal dependencies
 */
import TYPES from './action-types';
import { getResourceName } from '../utils';

export function setImportStatus( endpoint, query, importStatus ) {
	const resourceName = getResourceName( endpoint, query );

	return {
		type: TYPES.SET_IMPORT_STATUS,
		importStatus,
		resourceName,
		query,
	};
}

export function setImportTotals( endpoint, query, importTotals ) {
	const resourceName = getResourceName( endpoint, query );

	return {
		type: TYPES.SET_IMPORT_TOTALS,
		resourceName,
		importTotals,
	};
}

export function setImportError( endpoint, query, error ) {
	const resourceName = getResourceName( endpoint, query );

	return {
		type: TYPES.SET_IMPORT_ERROR,
		endpoint,
		resourceName,
		error,
	};
}
