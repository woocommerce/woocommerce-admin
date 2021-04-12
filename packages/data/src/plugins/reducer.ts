/**
 * External dependencies
 */
import { concat } from 'lodash';

/**
 * Internal dependencies
 */
import { ACTION_TYPES as TYPES } from './action-types';
import { Actions } from './actions';
import { PluginsState } from './types';

type PluginReducer = {
	< T extends Actions >(
		state: PluginsState | undefined,
		action: T
	): PluginsState;
};
const plugins: PluginReducer = (
	state = {
		active: [],
		installed: [],
		requesting: {},
		errors: {},
		jetpackConnectUrls: {},
		recommended: {},
	},
	{
		type,
		active,
		installed,
		selector,
		isRequesting,
		error,
		jetpackConnection,
		redirectUrl,
		jetpackConnectUrl,
		paypalOnboardingStatus,
		replace,
		recommendedType,
		plugins: recommendedPlugins,
	}
) => {
	switch ( type ) {
		case TYPES.UPDATE_ACTIVE_PLUGINS:
			state = {
				...state,
				active: replace
					? active
					: ( concat( state.active, active ) as string[] ),
				requesting: {
					...state.requesting,
					getActivePlugins: false,
					activatePlugins: false,
				},
				errors: {
					...state.errors,
					getActivePlugins: false,
					activatePlugins: false,
				},
			};
			break;
		case TYPES.UPDATE_INSTALLED_PLUGINS:
			state = {
				...state,
				installed: replace
					? installed
					: ( concat( state.installed, installed ) as string[] ),
				requesting: {
					...state.requesting,
					getInstalledPlugins: false,
					installPlugins: false,
				},
				errors: {
					...state.errors,
					getInstalledPlugins: false,
					installPlugin: false,
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
		case TYPES.UPDATE_JETPACK_CONNECTION:
			state = {
				...state,
				jetpackConnection,
			};
			break;
		case TYPES.UPDATE_JETPACK_CONNECT_URL:
			state = {
				...state,
				jetpackConnectUrls: {
					...state.jetpackConnectUrls,
					[ redirectUrl ]: jetpackConnectUrl,
				},
			};
			break;
		case TYPES.SET_PAYPAL_ONBOARDING_STATUS:
			state = {
				...state,
				paypalOnboardingStatus,
			};
			break;
		case TYPES.SET_RECOMMENDED_PLUGINS:
			state = {
				...state,
				recommended: {
					...state.recommended,
					[ recommendedType ]: recommendedPlugins,
				},
			};
			break;
	}
	return state;
};

export default plugins;
