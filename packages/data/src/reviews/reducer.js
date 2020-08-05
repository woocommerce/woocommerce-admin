/**
 * Internal dependencies
 */
import TYPES from './action-types';

const reducer = (
	state = {
		reviews: {},
		requesting: {},
		errors: {},
	},
	{ type, query, reviews, totalCount, selector, isRequesting, error }
) => {
	switch ( type ) {
		case TYPES.UPDATE_REVIEWS:
			const ids = [];
			const nextReviews = reviews.reduce( ( result, review ) => {
				ids.push( review.id );
				result[ review.id ] = review;
				return result;
			}, {} );
			const marker = JSON.stringify( query );
			state = {
				...state,
				reviews: {
					[ marker ]: { data: ids, totalCount },
				},
				data: {
					...state.data,
					...nextReviews,
				},
			};
			break;
		case TYPES.SET_IS_REQUESTING:
			state = {
				...state,
				requesting: {
					...state.requesting,
					[ selector ]: isRequesting,
				},
			};
			break;
		case TYPES.SET_ERROR:
			state = {
				...state,
				requesting: {
					...state.requesting,
					[ selector ]: false,
				},
				errors: {
					...state.errors,
					[ selector ]: error,
				},
			};
			break;
	}
	return state;
};

export default reducer;
