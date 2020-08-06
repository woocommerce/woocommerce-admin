/**
 * Internal dependencies
 */
import TYPES from './action-types';

export function updateReviews( query, reviews, totalCount ) {
	return {
		type: TYPES.UPDATE_REVIEWS,
		reviews,
		query,
		totalCount,
	};
}

export function setIsRequesting( selector, isRequesting ) {
	return {
		type: TYPES.SET_IS_REQUESTING,
		selector,
		isRequesting,
	};
}

export function setError( query, error ) {
	return {
		type: TYPES.SET_ERROR,
		query,
		error,
	};
}
