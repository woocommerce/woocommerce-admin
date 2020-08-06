export const getReviews = ( state, query ) => {
	const marker = JSON.stringify( query );
	const ids =
		( state.reviews[ marker ] && state.reviews[ marker ].data ) || [];
	return ids.map( ( id ) => state.data[ id ] );
};

export const getReviewsTotalCount = ( state, query ) => {
	const marker = JSON.stringify( query );
	return (
		( state.reviews[ marker ] && state.reviews[ marker ].totalCount ) || 0
	);
};
