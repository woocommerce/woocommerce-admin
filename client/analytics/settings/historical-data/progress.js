/** @format */
/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { isNil } from 'lodash';

function HistoricalDataProgress( { label, progress, total } ) {
	let text = sprintf( __( 'Imported %(label)s', 'woocommerce-admin' ), {
		label,
	} );

	if ( ! isNil( progress ) && ! isNil( total ) ) {
		text +=
			' ' +
			sprintf( __( '%(progress)s of %(total)s', 'woocommerce-admin' ), {
				progress,
				total,
			} );
	}

	return (
		<div className="woocommerce-settings-historical-data__progress">
			<span className="woocommerce-settings-historical-data__progress-label">{ text }</span>
			<progress
				className="woocommerce-settings-historical-data__progress-bar"
				max={ total }
				value={ progress }
			/>
		</div>
	);
}

export default HistoricalDataProgress;
