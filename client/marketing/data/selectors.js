export function getInstalledPlugins( state ) {
	return state.installedPlugins;
}

export function getActivatingPlugins( state ) {
	return state.activatingPlugins;
}

// Add new function to get recommended plugins by category.
export function getRecommendedPluginsByCategory( state, category ) {
	return state.recommendedPlugins[ category ] || [];
}

export function getRecommendedPlugins( state ) {
	return state.recommendedPlugins;
}

export function getRecommendedPostsByCategory( state, category ) {
	return state.blogPosts[ category ] || [];
}

export function getBlogPosts( state ) {
	return state.blogPosts;
}
