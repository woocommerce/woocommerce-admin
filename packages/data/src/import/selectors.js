/**
 * Internal dependencies
 */
import { getResourceName } from '../utils';

export const getImportStatus = ( state, endpoint, query ) => {
	const resourceName = getResourceName( endpoint, query );
	return state.importStatus[ resourceName ] || {};
};

export const getImportTotals = ( state, endpoint, query ) => {
	const resourceName = getResourceName( endpoint, query );
	return state.importTotals[ resourceName ] || {};
};

export const getImportError = ( state, endpoint, query ) => {
	const resourceName = getResourceName( endpoint, query );
	return state.errors[ resourceName ] || {};
};
