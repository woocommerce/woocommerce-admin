/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { CheckboxControl } from '@wordpress/components';
import { IMPORT_STORE_NAME } from '@woocommerce/data';
import { withDispatch } from '@wordpress/data';

function HistoricalDataSkipCheckbox( {
	checked,
	disabled,
	updateSkipPrevious,
} ) {
	const skipChange = ( value ) => {
		updateSkipPrevious( value );
	};
	return (
		<CheckboxControl
			className="woocommerce-settings-historical-data__skip-checkbox"
			checked={ checked }
			disabled={ disabled }
			label={ __(
				'Skip previously imported customers and orders',
				'woocommerce-admin'
			) }
			onChange={ skipChange }
		/>
	);
}

export default withDispatch( ( dispatch ) => {
	const { updateSkipPrevious } = dispatch( IMPORT_STORE_NAME );
	return { updateSkipPrevious };
} )( HistoricalDataSkipCheckbox );
