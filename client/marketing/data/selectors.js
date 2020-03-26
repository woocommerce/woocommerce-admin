export function getInstalledPlugins( state ) {
	return state.installedPlugins;
}

export function isActivatingPlugin( state, pluginSlug ) {
	return state.activatingPlugins.includes( pluginSlug );
}

export function getRecommendedPlugins( state ) {
	return state.recommendedPlugins;
}
