/** @format */

export default {
	setProducts( products, query ) {
		console.log( products );
		return {
			type: 'SET_PRODUCTS',
			products,
			query: query || {},
		};
	},

	setProductsError( query ) {
		return {
			type: 'SET_PRODUCTS_ERROR',
			query: query || {},
		};
	},
};
