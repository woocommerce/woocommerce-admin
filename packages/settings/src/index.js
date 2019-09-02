const defaults = {
	adminUrl: '',
	countries: [],
	currency: {
		code: 'USD',
		precision: 2,
		symbol: '$',
		symbolPosition: 'left',
		decimalSeparator: ',',
		priceFormat: '%1$s%2$s',
		thousandSeparator: ',',
	},
	defaultDateRange: 'period=month&compare=previous_year',
	locale: {
		siteLocale: 'en_US',
		userLocale: 'en_US',
		weekdaysShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
	},
	orderStatuses: [],
	siteTitle: '',
	wcAssetUrl: '',
};

const globalSharedSettings = typeof global.wcSharedSettings === 'object' ? global.wcSharedSettings : {};
const allSettings = {
	...defaults,
	...globalSharedSettings,
};

export const ADMIN_URL = allSettings.adminUrl;
export const COUNTRIES = allSettings.countries;
export const CURRENCY = allSettings.currency;
export const LOCALE = allSettings.locale;
export const ORDER_STATUSES = allSettings.orderStatuses;
export const SITE_TITLE = allSettings.siteTitle;
export const WC_ASSET_URL = allSettings.wcAssetUrl;
export const DEFAULT_DATE_RANGE = allSettings.defaultDateRange;

export function getSetting( name, fallback = false ) {
	if ( allSettings.hasOwnProperty( name ) ) {
		return allSettings[ name ];
	}
	return fallback;
}
