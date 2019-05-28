/** @format */

/**
 * Internal dependencies
 */
import { getResourceName } from '../utils';
import { DEFAULT_REQUIREMENT } from '../constants';

const getImportStatus = ( getResource, requireResource ) => (
	query = {},
	requirement = DEFAULT_REQUIREMENT
) => {
	const resourceName = getResourceName( 'import-status', query );
	return (
		requireResource( requirement, resourceName ) || {
			customers_total: null,
			customers_count: null,
			imported_from: null,
			is_importing: null,
			orders_total: null,
			orders_count: null,
		}
	);
};

const getImportTotals = ( getResource, requireResource ) => (
	query = {},
	requirement = DEFAULT_REQUIREMENT
) => {
	const resourceName = getResourceName( 'import-totals', query );
	return requireResource( requirement, resourceName ) || { customers: null, orders: null };
};

export default {
	getImportStatus,
	getImportTotals,
};
