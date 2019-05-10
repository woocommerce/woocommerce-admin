/** @format */

/**
 * External dependencies
 */
import { isNil } from 'lodash';

/**
 * Internal dependencies
 */
import { getResourceName } from '../utils';
import { DEFAULT_REQUIREMENT } from '../constants';

const getImportTotals = ( getResource, requireResource ) => (
	query = {},
	requirement = DEFAULT_REQUIREMENT
) => {
	const resourceName = getResourceName( 'import-totals', query );
	return requireResource( requirement, resourceName ) || { customers: null, orders: null };
};

const getImportTotalsError = getResource => ( type, query = {} ) => {
	const resourceName = getResourceName( 'import-totals', query );
	return getResource( resourceName ).error;
};

const isGetImportTotalsRequesting = getResource => ( type, query = {} ) => {
	const resourceName = getResourceName( 'import-totals', query );
	const { lastRequested, lastReceived } = getResource( resourceName );

	if ( isNil( lastRequested ) || isNil( lastReceived ) ) {
		return true;
	}

	return lastRequested > lastReceived;
};

export default {
	getImportTotals,
	getImportTotalsError,
	isGetImportTotalsRequesting,
};
