/** @format */
/**
 * External dependencies
 */
import { isNil } from 'lodash';
import moment from 'moment';

export const formatParams = ( dateFormat, period, skipChecked ) => {
	const params = {};
	if ( skipChecked ) {
		params.skip_existing = true;
	}
	if ( period.label !== 'all' ) {
		if ( period.label === 'custom' ) {
			const daysDifference = moment().diff( moment( period.date, dateFormat ), 'days', true );
			params.days = Math.ceil( daysDifference );
		} else {
			params.days = parseInt( period.label, 10 );
		}
	}

	return params;
};

export const getStatus = ( {
	customersProgress,
	customersTotal,
	inProgress,
	ordersProgress,
	ordersTotal,
	reimportingData,
} ) => {
	if ( inProgress ) {
		if ( customersProgress < customersTotal ) {
			return 'customers';
		}
		if ( ordersProgress < ordersTotal ) {
			return 'orders';
		}
		if (
			! isNil( customersTotal ) &&
			! isNil( ordersTotal ) &&
			customersProgress === customersTotal &&
			ordersProgress === ordersTotal
		) {
			return 'finalizing';
		}
	}
	if ( customersTotal > 0 || ordersTotal > 0 ) {
		if (
			! reimportingData &&
			customersProgress === customersTotal &&
			ordersProgress === ordersTotal
		) {
			return 'finished';
		}
		return 'ready';
	}
	return 'nothing';
};
