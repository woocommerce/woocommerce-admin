/**
 * External dependencies
 */
import { REVIEWS_STORE_NAME, QUERY_DEFAULTS } from '@woocommerce/data';

export function getUnreadReviews( select ) {
	const { getReviewsTotalCount, getReviewsError, isResolving } = select(
		REVIEWS_STORE_NAME
	);

	const reviewsQuery = {
		page: 1,
		per_page: QUERY_DEFAULTS.pageSize,
		status: 'hold',
		_fields: [ 'id' ],
	};

	// eslint-disable-next-line @wordpress/no-unused-vars-before-return
	const totalReviews = getReviewsTotalCount( reviewsQuery );
	const isError = Boolean( getReviewsError( reviewsQuery ) );
	const isRequesting = isResolving( 'getReviewsTotalCount', [
		reviewsQuery,
	] );

	if ( isError || isRequesting ) {
		return null;
	}

	return totalReviews;
}
