/**
 * External dependencies
 */
import { Slot, Fill } from '@wordpress/components';

const WooPaymentGatewayConnect = ( { id, ...props } ) => (
	<Fill name={ 'woocommerce_payment_gateway_connect_' + id } { ...props } />
);

WooPaymentGatewayConnect.Slot = ( { id, fillProps } ) => (
	<Slot
		name={ 'woocommerce_payment_gateway_connect_' + id }
		fillProps={ fillProps }
	/>
);

export default WooPaymentGatewayConnect;
