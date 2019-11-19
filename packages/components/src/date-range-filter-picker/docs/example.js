/** @format */
/**
 * Internal dependencies
 */
import { DateRangeFilterPicker } from '@woocommerce/components';
import {
	getDateParamsFromQuery,
	getCurrentDates,
	isoDateFormat,
	loadLocaleData,
} from '@woocommerce/date';

/**
 * External dependencies
 */
import { partialRight } from 'lodash';

const query = {};

// Fetch locale from store settings and load for date functions.
const localeSettings = {
	userLocale: 'fr_FR',
	weekdaysShort: [ 'dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam' ],
};
loadLocaleData( localeSettings );

// Fetch store default date range and compose with date utility functions.
const defaultDateRange = 'period=month&compare=previous_year';
const storeGetDateParamsFromQuery = partialRight( getDateParamsFromQuery, defaultDateRange );
const storeGetCurrentDates = partialRight( getCurrentDates, defaultDateRange );

// Package date utilities for filter picker component.
const storeDate = {
	getDateParamsFromQuery: storeGetDateParamsFromQuery,
	getCurrentDates: storeGetCurrentDates,
	isoDateFormat,
};

export default () => (
	<DateRangeFilterPicker
		key="daterange"
		query={ query }
		onRangeSelect={ () => {} }
		storeDate={ storeDate }
	/>
);
