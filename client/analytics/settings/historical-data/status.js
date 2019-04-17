/** @format */
/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Spinner } from '@wordpress/components';

function HistoricalDataStatus( { importDate, status } ) {
	const statusLabels = {
		ready: __( 'Ready To Import', 'woocommerce-admin' ),
		stopped: __( 'Ready To Import', 'woocommerce-admin' ),
		customers: [ __( 'Importing Customers', 'woocommerce-admin' ), <Spinner key="spinner" /> ],
		orders: [ __( 'Importing Orders', 'woocommerce-admin' ), <Spinner key="spinner" /> ],
		finalizing: [ __( 'Finalizing', 'woocommerce-admin' ), <Spinner key="spinner" /> ],
		finished: sprintf(
			__( 'Historical data from %s onward imported', 'woocommerce-admin' ),
			importDate
		),
	};

	return (
		<span className="woocommerce-settings-historical-data__status">
			{ __( 'Status:', 'woocommerce-admin' ) + ' ' }
			{ statusLabels[ status ] }
		</span>
	);
}

export default HistoricalDataStatus;
