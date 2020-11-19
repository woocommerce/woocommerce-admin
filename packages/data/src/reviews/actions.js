/**
 * External dependencies
 */
import { apiFetch } from '@wordpress/data-controls';
import { addQueryArgs } from '@wordpress/url';

/**
 * Internal dependencies
 */
import TYPES from './action-types';
import { NAMESPACE } from '../constants';

export function updateReviews( query, reviews, totalCount ) {
	return {
		type: TYPES.UPDATE_REVIEWS,
		reviews,
		query,
		totalCount,
	};
}

export function* updateReview( reviewId, reviewFields, query ) {
	yield setIsRequesting( 'updateReview', true );
	yield setReviewIsUpdating( reviewId, true );

	try {
		const url = addQueryArgs(
			`${ NAMESPACE }/products/reviews/${ reviewId }`,
			query || {}
		);
		const review = yield apiFetch( {
			path: url,
			method: 'PUT',
			data: reviewFields,
		} );
		yield setReview( reviewId, review );
		yield setIsRequesting( 'updateReview', false );
		yield setReviewIsUpdating( reviewId, false );
	} catch ( error ) {
		yield setError( 'updateReview', error );
		yield setIsRequesting( 'updateReview', false );
		yield setReviewIsUpdating( reviewId, false );
		throw new Error();
	}
}

export function* deleteReview( reviewId ) {
	yield setIsRequesting( 'deleteReview', true );
	yield setReviewIsUpdating( reviewId, true );

	try {
		const url = `${ NAMESPACE }/products/reviews/${ reviewId }`;
		const response = yield apiFetch( { path: url, method: 'DELETE' } );
		yield setReview( reviewId, response );
		yield setIsRequesting( 'deleteReview', false );
		return response;
	} catch ( error ) {
		yield setError( 'deleteReview', error );
		yield setIsRequesting( 'deleteReview', false );
		throw new Error();
	}
}

export function setReviewIsUpdating( reviewId, isUpdating ) {
	return {
		type: TYPES.SET_REVIEW_IS_UPDATING,
		reviewId,
		isUpdating,
	};
}

export function setReview( reviewId, reviewData ) {
	return {
		type: TYPES.SET_REVIEW,
		reviewId,
		reviewData,
	};
}

export function setError( query, error ) {
	return {
		type: TYPES.SET_ERROR,
		query,
		error,
	};
}

export function setIsRequesting( selector, isRequesting ) {
	return {
		type: TYPES.SET_IS_REQUESTING,
		selector,
		isRequesting,
	};
}
