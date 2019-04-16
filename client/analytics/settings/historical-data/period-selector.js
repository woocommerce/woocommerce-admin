/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import moment from 'moment';
import { SelectControl } from '@wordpress/components';

/**
 * WooCommerce dependencies
 */
import { DatePicker } from '@woocommerce/components';

function HistoricalDataPeriodSelector( { disabled, onDateChange, onPeriodChange, value } ) {
	const onSelectChange = val => {
		onPeriodChange( val );
	};
	const onDatePickerChange = val => {
		if ( val.date.isValid ) {
			// console.log( val );
			// window.val = val;
			onDateChange( val.date.format( 'YYYY-MM-DD' ) );
		} else {
			onDateChange( null );
		}
	};
	const dateFormat = __( 'MM/DD/YYYY', 'woocommerce-admin' );

	return (
		<div className="woocommerce-settings-historical-data__columns">
			<div className="woocommerce-settings-historical-data__column">
				<SelectControl
					label={ __( 'Import Historical Data', 'woocommerce-admin' ) }
					value={ value.label }
					disabled={ disabled }
					onChange={ onSelectChange }
					options={ [
						{ label: 'All', value: 'all' },
						{ label: 'Last 365 days', value: '365_days' },
						{ label: 'Last 90 days', value: '90_days' },
						{ label: 'Last 30 days', value: '30_days' },
						{ label: 'Last 7 days', value: '7_days' },
						{ label: 'Last 24 hours', value: '24_hours' },
						{ label: 'Custom', value: 'custom' },
					] }
				/>
			</div>
			{ value.label === 'custom' && (
				<div className="woocommerce-settings-historical-data__column">
					<div className="woocommerce-settings-historical-data__column-label">
						{ __( 'Begining on', 'woocommerce-admin' ) }
					</div>
					<DatePicker
						date={ value.date ? new Date( value.date ) : new Date() }
						disabled={ disabled }
						text={ moment( value.date || new Date() ).format( dateFormat ) }
						onUpdate={ onDatePickerChange }
						dateFormat={ dateFormat }
						isInvalidDate={ date => moment( date ).isAfter( new Date(), 'day' ) }
					/>
				</div>
			) }
		</div>
	);
}

export default HistoricalDataPeriodSelector;
