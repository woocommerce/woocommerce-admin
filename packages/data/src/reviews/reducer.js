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
	{ type, query, reviews, totalCount, isRequesting, error }
) => {
	const marker = JSON.stringify( query );

	switch ( type ) {
		case TYPES.UPDATE_REVIEWS:
			const ids = [];
			const nextReviews = reviews.reduce( ( result, review ) => {
				ids.push( review.id );
				result[ review.id ] = review;
				return result;
			}, {} );
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
		// case TYPES.SET_IS_REQUESTING:
		// 	state = {
		// 		...state,
		// 		requesting: {
		// 			...state.requesting,
		// 			[ selector ]: isRequesting,
		// 		},
		// 	};
		// 	break;
		case TYPES.SET_ERROR:
			state = {
				...state,
				errors: {
					...state.errors,
					[ marker ]: error,
				},
			};
			break;
	}
	return state;
};

export default reducer;
