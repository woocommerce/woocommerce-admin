/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Spinner } from '@wordpress/components';

function HistoricalDataStatus( { status } ) {
	const statusLabels = {
		ready: __( 'Ready To Import', 'woocommerce-admin' ),
		stopped: __( 'Ready To Import', 'woocommerce-admin' ),
		customers: [ __( 'Importing Customers', 'woocommerce-admin' ), <Spinner key="spinner" /> ],
		orders: [ __( 'Importing Orders', 'woocommerce-admin' ), <Spinner key="spinner" /> ],
		finalizing: [ __( 'Finalizing', 'woocommerce-admin' ), <Spinner key="spinner" /> ],
		finished: __( 'Historical data from July 1 onward imported', 'woocommerce-admin' ),
	};

	return (
		<span className="woocommerce-settings-historical-data__status">
			{ __( 'Status:', 'woocommerce-admin' ) + ' ' }
			{ statusLabels[ status ] }
		</span>
	);
}

export default HistoricalDataStatus;
