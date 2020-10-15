/**
 * External dependencies
 */
import { getSetting } from '@woocommerce/wc-admin-settings';
import { without } from 'lodash';

/**
 * Internal dependencies
 */
import TYPES from './action-types';

const { installedExtensions } = getSetting( 'marketing', {} );

const DEFAULT_STATE = {
	installedPlugins: installedExtensions,
	activatingPlugins: [],
	recommendedPlugins: {},
	blogPosts: {},
};

const reducer = ( state = DEFAULT_STATE, action ) => {
	switch ( action.type ) {
		case 'SET_INSTALLED_PLUGINS':
			return {
				...state,
				installedPlugins: action.plugins,
			};
		case 'SET_ACTIVATING_PLUGIN':
			return {
				...state,
				activatingPlugins: [
					...state.activatingPlugins,
					action.pluginSlug,
				],
			};
		case 'REMOVE_ACTIVATING_PLUGIN':
			return {
				...state,
				activatingPlugins: without(
					state.activatingPlugins,
					action.pluginSlug
				),
			};
		case 'SET_RECOMMENDED_PLUGINS':
			return {
				...state,
				recommendedPlugins: {
					...state.recommendedPlugins,
					[ action.data.category ]: action.data.plugins,
				},
			};
		case 'SET_BLOG_POSTS':
			return {
				...state,
				blogPosts: {
					...state.blogPosts,
					[ action.data.category ]: action.data.posts,
				},
			};
		case TYPES.SET_ERROR:
			return {
				...state,
				errors: {
					blogPosts: action.error,
				},
			};
		default:
			return state;
	}
};

export default reducer;
