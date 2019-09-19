/** @format */

const defaults = {
	adminUrl: '',
	countries: [],
	currency: {
		code: 'USD',
		precision: 2,
		symbol: '$',
		symbolPosition: 'left',
		decimalSeparator: '.',
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

const globalSharedSettings = typeof wcSettings === 'object' ? wcSettings : {};

// Use defaults or global settings, depending on what is set.
const allSettings = {
	...defaults,
	...globalSharedSettings,
};

allSettings.currency = {
	...defaults.currency,
	...allSettings.currency,
};

allSettings.locale = {
	...defaults.locale,
	...allSettings.locale,
};

// for anything you want exposed as non-mutable outside of its use in a module,
// import the constant. Otherwise use getSetting/setSetting for the value
// reference.
export const ADMIN_URL = allSettings.adminUrl;
export const COUNTRIES = allSettings.countries;
export const CURRENCY = allSettings.currency;
export const LOCALE = allSettings.locale;
export const ORDER_STATUSES = allSettings.orderStatuses;
export const SITE_TITLE = allSettings.siteTitle;
export const WC_ASSET_URL = allSettings.wcAssetUrl;
export const DEFAULT_DATE_RANGE = allSettings.defaultDateRange;

// validation prop (optional) allows for providing a callback to validate/sanitize the setting
export function getSetting( name, fallback = false, validation = value => value ) {
	const value = allSettings.hasOwnProperty( name ) ? allSettings[ name ] : fallback;
	return validation( value );
}

export function setSetting( name, value, validation = val => val ) {
	value = validation( value );
	allSettings[ name ] = value;
}
