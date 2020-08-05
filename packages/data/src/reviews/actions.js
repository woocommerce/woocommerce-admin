/**
 * Internal dependencies
 */
import TYPES from './action-types';

export function updateReviews( reviews ) {
	return {
		type: TYPES.UPDATE_REVIEWS,
		reviews,
	};
}

export function setIsRequesting( selector, isRequesting ) {
	return {
		type: TYPES.SET_IS_REQUESTING,
		selector,
		isRequesting,
	};
}

export function setError( selector, error ) {
	return {
		type: TYPES.SET_ERROR,
		selector,
		error,
	};
}
