/** @format */

export default {
	setCategories( categories, query ) {
		return {
			type: 'SET_CATEGORIES',
			categories,
			query: query || {},
		};
	},

	setCategoriesError( query ) {
		return {
			type: 'SET_CATEGORIES_ERROR',
			query: query || {},
		};
	},
};
