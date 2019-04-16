/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { CheckboxControl } from '@wordpress/components';

function HistoricalDataSkipCheckbox( { checked, disabled, onChange } ) {
	return (
		<CheckboxControl
			className="woocommerce-settings-historical-data__skip-checkbox"
			label={ __( 'Skip previously imported customers and orders', 'woocommerce-admin' ) }
			checked={ checked }
			disabled={ disabled }
			onChange={ onChange }
		/>
	);
}

export default HistoricalDataSkipCheckbox;
