import { WPDataSelector, WPDataSelectors } from '../types';
import { activatePlugins } from './actions';

export const getActivePlugins = ( state: PluginsState ) => {
	return state.active || [];
};

export const getInstalledPlugins = ( state: PluginsState ) => {
	return state.installed || [];
};

export const isPluginsRequesting = (
	state: PluginsState,
	selector: keyof PluginSelectors
) => {
	return state.requesting[ selector ] || false;
};

export const getPluginsError = (
	state: PluginsState,
	selector: keyof PluginSelectors
) => {
	return state.errors[ selector ] || false;
};

export const isJetpackConnected = ( state: PluginsState ) =>
	state.jetpackConnection;

export const getJetpackConnectUrl = (
	state: PluginsState,
	query: { redirect_url: string }
) => {
	return state.jetpackConnectUrls[ query.redirect_url ];
};

export const getPluginInstallState = (
	state: PluginsState,
	plugin: string
) => {
	if ( state.active.includes( plugin ) ) {
		return 'activated';
	} else if ( state.installed.includes( plugin ) ) {
		return 'installed';
	}

	return 'unavailable';
};

export const getPaypalOnboardingStatus = ( state: PluginsState ) =>
	state.paypalOnboardingStatus;

export const getRecommendedPlugins = (
	state: PluginsState,
	type: RecommendedTypes
) => {
	return state.recommended[ type ];
};

export type Plugin = {
	slug: string;
	shortDescription: string;
	product: string;
	title: string;
	'button-text': string;
};
export type RecommendedTypes = 'payments';

export type PluginsState = {
	active: string[];
	installed: string[];
	requesting: Record< keyof PluginSelectors, boolean >;
	jetpackConnectUrls: Record< string, unknown >;
	jetpackConnection: boolean;
	recommended: Record< RecommendedTypes, Plugin[] >;
	paypalOnboardingStatus?: unknown;
	// TODO clarify what the error record's type is
	errors: Record< string, unknown >;
};

// Types
export type PluginSelectors = {
	getActivePlugins: WPDataSelector< typeof getActivePlugins >;
	activatePlugins: WPDataSelector< typeof activatePlugins >;
	getInstalledPlugins: WPDataSelector< typeof getInstalledPlugins >;
	getRecommendedPlugins: WPDataSelector< typeof getRecommendedPlugins >;
} & WPDataSelectors;
