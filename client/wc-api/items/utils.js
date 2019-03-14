/** @format */

/**
 * External dependencies
 */

/**
 * Returns items based on a search query.
 *
 * @param  {Object}   select    Instance of @wordpress/select
 * @param  {String}   endpoint  Report API Endpoint
 * @param  {String[]} search    Array of search strings.
 * @return {Object}   Object containing API request information and the matching items.
 */
export function searchItemsByString( select, endpoint, search ) {
	const { getItems, getItemsError, isGetItemsRequesting } = select( 'wc-api' );

	const items = {};
	let isRequesting = false;
	let isError = false;
	search.forEach( searchWord => {
		const query = {
			per_page: 10,
		};
		switch ( endpoint ) {
			case 'coupons':
				query.search_code = searchWord;
				break;
			default:
				query.search = searchWord;
		}
		const newItems = getItems( endpoint, query );
		newItems.forEach( ( item, id ) => {
			items[ id ] = item;
		} );
		if ( isGetItemsRequesting( endpoint, query ) ) {
			isRequesting = true;
		}
		if ( getItemsError( endpoint, query ) ) {
			isError = true;
		}
	} );

	return { items, isRequesting, isError };
}
