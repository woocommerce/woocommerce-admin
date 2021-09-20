/**
 * External dependencies
 */
import { appendTimestamp, getCurrentDates } from '@woocommerce/date';

/**
 * Internal dependencies
 */
import { STORE_NAME } from './constants';
import { getResourceName } from '../utils';

/**
 * Returns leaderboard data to render a leaderboard table.
 *
 * @param  {Object} options                 arguments
 * @param  {string} options.id              Leaderboard ID
 * @param  {number} options.per_page       Per page limit
 * @param  {Object} options.persisted_query Persisted query passed to endpoint
 * @param  {Object} options.query           Query parameters in the url
 * @param  {Object} options.select          Instance of @wordpress/select
 * @param  {string} options.defaultDateRange   User specified default date range.
 * @return {Object} Object containing leaderboard responses.
 */
export function getLeaderboard( options ) {
	const endpoint = 'leaderboards';
	const {
		per_page: perPage,
		persisted_query: persistedQuery,
		query,
		select,
		filterQuery,
	} = options;
	const { getItems, getItemsError, isResolving } = select( STORE_NAME );
	const response = {
		isRequesting: false,
		isError: false,
		rows: [],
	};

	const datesFromQuery = getCurrentDates( query, options.defaultDateRange );
	const leaderboardQuery = {
		...filterQuery,
		after: appendTimestamp( datesFromQuery.primary.after, 'start' ),
		before: appendTimestamp( datesFromQuery.primary.before, 'end' ),
		per_page: perPage,
		persisted_query: JSON.stringify( persistedQuery ),
	};

	// Disable eslint rule requiring `getItems` to be defined below because the next two statements
	// depend on `getItems` to have been called.
	// eslint-disable-next-line @wordpress/no-unused-vars-before-return
	const leaderboards = getItems( endpoint, leaderboardQuery );

	if ( isResolving( 'getItems', [ endpoint, leaderboardQuery ] ) ) {
		return { ...response, isRequesting: true };
	} else if ( getItemsError( endpoint, leaderboardQuery ) ) {
		return { ...response, isError: true };
	}

	const leaderboard = leaderboards.get( options.id );
	return { ...response, rows: leaderboard?.rows };
}
/**
 * Returns items based on a search query.
 *
 * @param  {Object}   selector    Instance of @wordpress/select response
 * @param  {string}   endpoint  Report API Endpoint
 * @param  {string[]} search    Array of search strings.
 * @return {Object}   Object containing API request information and the matching items.
 */
export function searchItemsByString( selector, endpoint, search ) {
	const { getItems, getItemsError, isResolving } = selector;

	const items = {};
	let isRequesting = false;
	let isError = false;
	search.forEach( ( searchWord ) => {
		const query = {
			search: searchWord,
			per_page: 10,
		};
		const newItems = getItems( endpoint, query );
		newItems.forEach( ( item, id ) => {
			items[ id ] = item;
		} );
		if ( isResolving( 'getItems', [ endpoint, query ] ) ) {
			isRequesting = true;
		}
		if ( getItemsError( endpoint, query ) ) {
			isError = true;
		}
	} );

	return { items, isRequesting, isError };
}

/**
 * Generate a resource name for item totals count.
 *
 * It omits query parameters from the identifier that don't affect
 * totals values like pagination and response field filtering.
 *
 * @param {string} itemType Item type for totals count.
 * @param {Object} query Query for item totals count.
 * @return {string} Resource name for item totals.
 */
export function getTotalCountResourceName( itemType, query ) {
	// Disable eslint rule because we're using this spread to omit properties
	// that don't affect item totals count results.
	// eslint-disable-next-line no-unused-vars, camelcase
	const { _fields, page, per_page, ...totalsQuery } = query;

	return getResourceName( 'total-' + itemType, totalsQuery );
}
