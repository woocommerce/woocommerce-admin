/**
 * External dependencies
 */
import moment from 'moment';
import { find } from 'lodash';

/**
 * WooCommerce dependencies
 */
import { getCurrentDates, appendTimestamp } from '@woocommerce/date';
import { SETTINGS_STORE_NAME } from '@woocommerce/data';
import { getNewPath } from '@woocommerce/navigation';
import { calculateDelta, formatValue } from '@woocommerce/number';

export const getIndictorValues = ( {
	indicator,
	primaryData,
	secondaryData,
	currency,
	formatCurrency,
	persistedQuery,
} ) => {
	const primaryItem = find(
		primaryData.data,
		( data ) => data.stat === indicator.stat
	);
	const secondaryItem = find(
		secondaryData.data,
		( data ) => data.stat === indicator.stat
	);

	if ( ! primaryItem || ! secondaryItem ) {
		return null;
	}

	const href =
		( primaryItem._links &&
			primaryItem._links.report[ 0 ] &&
			primaryItem._links.report[ 0 ].href ) ||
		'';
	const reportUrl =
		( href &&
			getNewPath( persistedQuery, href, {
				chart: primaryItem.chart,
			} ) ) ||
		'';
	const isCurrency = primaryItem.format === 'currency';

	const delta = calculateDelta( primaryItem.value, secondaryItem.value );
	const primaryValue = isCurrency
		? formatCurrency( primaryItem.value )
		: formatValue( currency, primaryItem.format, primaryItem.value );
	const secondaryValue = isCurrency
		? formatCurrency( secondaryItem.value )
		: formatValue( currency, secondaryItem.format, secondaryItem.value );
	return {
		primaryValue,
		secondaryValue,
		delta,
		reportUrl,
	};
};

export const getIndicatorData = ( select, indicators, query ) => {
	const {
		getReportItems,
		getReportItemsError,
		isReportItemsRequesting,
	} = select( 'wc-api' );
	const { woocommerce_default_date_range: defaultDateRange } = select(
		SETTINGS_STORE_NAME
	).getSetting( 'wc_admin', 'wcAdminSettings' );
	const datesFromQuery = getCurrentDates( query, defaultDateRange );
	const endPrimary = datesFromQuery.primary.before;
	const endSecondary = datesFromQuery.secondary.before;
	const statKeys = indicators
		.map( ( indicator ) => indicator.stat )
		.join( ',' );
	const primaryQuery = {
		after: appendTimestamp( datesFromQuery.primary.after, 'start' ),
		before: appendTimestamp(
			endPrimary,
			endPrimary.isSame( moment(), 'day' ) ? 'now' : 'end'
		),
		stats: statKeys,
	};

	const secondaryQuery = {
		after: appendTimestamp( datesFromQuery.secondary.after, 'start' ),
		before: appendTimestamp(
			endSecondary,
			endSecondary.isSame( moment(), 'day' ) ? 'now' : 'end'
		),
		stats: statKeys,
	};

	const primaryData = getReportItems(
		'performance-indicators',
		primaryQuery
	);
	const primaryError =
		getReportItemsError( 'performance-indicators', primaryQuery ) || null;
	const primaryRequesting = isReportItemsRequesting(
		'performance-indicators',
		primaryQuery
	);

	const secondaryData = getReportItems(
		'performance-indicators',
		secondaryQuery
	);
	const secondaryError =
		getReportItemsError( 'performance-indicators', secondaryQuery ) || null;
	const secondaryRequesting = isReportItemsRequesting(
		'performance-indicators',
		secondaryQuery
	);

	return {
		primaryData,
		primaryError,
		primaryRequesting,
		secondaryData,
		secondaryError,
		secondaryRequesting,
		defaultDateRange,
	};
};
