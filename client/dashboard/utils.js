/**
 * Gets the country code from a country:state value string.
 *
 * @format
 * @param {string} countryState Country state string, e.g. US:GA.
 * @return {string} Country string.
 */

export function getCountryCode( countryState ) {
	if ( ! countryState ) {
		return null;
	}

	return countryState.split( ':' )[ 0 ];
}

/**
 * Returns currency data by country/region. Contains code, position, thousands separator, decimal separator, and precision.
 *
 * @format
 * @return {object} Curreny data.
 */
export function getCurrencyData() {
	// See https://github.com/woocommerce/woocommerce-admin/issues/3101.
	return {
		US: {
			code: 'USD',
			position: 'left',
			grouping: ',',
			decimal: '.',
			precision: 2,
		},
		EU: {
			code: 'EUR',
			position: 'left',
			grouping: '.',
			decimal: ',',
			precision: 2,
		},
		IN: {
			code: 'INR',
			position: 'left',
			grouping: ',',
			decimal: '.',
			precision: 2,
		},
		GB: {
			code: 'GBP',
			position: 'left',
			grouping: ',',
			decimal: '.',
			precision: 2,
		},
		BR: {
			code: 'BRL',
			position: 'left',
			grouping: '.',
			decimal: ',',
			precision: 2,
		},
		VN: {
			code: 'VND',
			position: 'right',
			grouping: '.',
			decimal: ',',
			precision: 1,
		},
		ID: {
			code: 'IDR',
			position: 'left',
			grouping: '.',
			decimal: ',',
			precision: 0,
		},
		BD: {
			code: 'BDT',
			position: 'left',
			grouping: ',',
			decimal: '.',
			precision: 0,
		},
		PK: {
			code: 'PKR',
			position: 'left',
			grouping: ',',
			decimal: '.',
			precision: 2,
		},
		RU: {
			code: 'RUB',
			position: 'right',
			grouping: ' ',
			decimal: ',',
			precision: 2,
		},
		TR: {
			code: 'TRY',
			position: 'left',
			grouping: '.',
			decimal: ',',
			precision: 2,
		},
		MX: {
			code: 'MXN',
			position: 'left',
			grouping: ',',
			decimal: '.',
			precision: 2,
		},
		CA: {
			code: 'CAD',
			position: 'left',
			grouping: ',',
			decimal: '.',
			precision: 2,
		},
	};
}
