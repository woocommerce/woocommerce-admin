/**
 * External dependencies
 */
import { Children, cloneElement } from '@wordpress/element';
import { Slot, Fill } from '@wordpress/components';

const WooRemotePaymentSettings = ( { children, id } ) => {
	return (
		<Fill name={ 'woocommerce_remote_payment_settings_' + id }>
			{ children }
		</Fill>
	);
};

WooRemotePaymentSettings.Slot = ( { id, ...props } ) => {
	return (
		<Slot name={ 'woocommerce_remote_payment_settings_' + id }>
			{ ( fills ) =>
				Children.map( fills, ( fill ) => cloneElement( fill, props ) )
			}
		</Slot>
	);
};

export default WooRemotePaymentSettings;
