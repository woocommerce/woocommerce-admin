/**
 * External dependencies
 */
import { REVIEWS_STORE_NAME } from '@woocommerce/data';

export const REVIEW_PAGE_LIMIT = 5;

export function getUnapprovedReviews( select ) {
	const { getReviewsTotalCount, getReviewsError, isResolving } = select(
		REVIEWS_STORE_NAME
	);

	const reviewsQuery = {
		page: 1,
		per_page: REVIEW_PAGE_LIMIT,
		status: 'hold',
		_embed: 1,
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
