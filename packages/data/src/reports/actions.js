/**
 * Internal dependencies
 */
import { getResourceName } from '../utils';
import TYPES from './action-types';

export function setError( selector, endpoint, query, error ) {
	const resourceName = getResourceName(
		`${ selector }-${ endpoint }`,
		query
	);

	return {
		type: TYPES.SET_ERROR,
		resourceName,
		error,
	};
}

export function setReportItems( endpoint, query, items ) {
	const resourceName = getResourceName( endpoint, query );

	return {
		type: TYPES.SET_REPORT_ITEMS,
		resourceName,
		items,
	};
}

export function setReportStats( endpoint, query, stats ) {
	const resourceName = getResourceName( endpoint, query );

	return {
		type: TYPES.SET_REPORT_STATS,
		resourceName,
		stats,
	};
}
