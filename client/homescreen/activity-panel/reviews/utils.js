/**
 * External dependencies
 */
import { REVIEWS_STORE_NAME, QUERY_DEFAULTS } from '@woocommerce/data';

export function getUnreadReviews( select ) {
	const { getReviews, getReviewsError, isResolving } = select(
		REVIEWS_STORE_NAME
	);

	const reviewsQuery = {
		page: 1,
		per_page: QUERY_DEFAULTS.pageSize,
		status: 'hold',
	};

	// eslint-disable-next-line @wordpress/no-unused-vars-before-return
	const totalReviews = getReviews( reviewsQuery ).filter(
		( review ) => review.status === 'hold'
	).length;
	const isError = Boolean( getReviewsError( reviewsQuery ) );
	const isRequesting = isResolving( 'getReviewsTotalCount', [
		reviewsQuery,
	] );

	if ( isError || isRequesting ) {
		return null;
	}

	return totalReviews;
}
