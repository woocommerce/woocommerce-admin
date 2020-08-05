export const getReviews = ( state, query ) => {
	const marker = JSON.stringify( query );
	const ids = state[ marker ].reviews.data;
	return ids.map( ( id ) => state.data[ id ] );
};

export const getReviewsTotalCount = ( state, query ) => {
	const marker = JSON.stringify( query );
	return state[ marker ].totalCount;
};
