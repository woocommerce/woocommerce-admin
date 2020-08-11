/**
 * Internal dependencies
 */
import { getResourceName } from '../utils';

export const getReportsError = ( state, selector, endpoint, query ) => {
	const resourceName = getResourceName(
		`${ selector }-${ endpoint }`,
		query
	);
	return state.errors[ resourceName ] || false;
};

export const getReportItems = ( state, selector, query ) => {
	const resourceName = getResourceName( selector, query );
	return state.items[ resourceName ] || {};
};

export const getReportStats = ( state, selector, query ) => {
	const resourceName = getResourceName( selector, query );
	return state.stats[ resourceName ] || {};
};
