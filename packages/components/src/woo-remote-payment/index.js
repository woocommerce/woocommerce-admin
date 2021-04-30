/**
 * External dependencies
 */
import { Children, cloneElement } from '@wordpress/element';
import { Slot, Fill } from '@wordpress/components';

const WooRemotePayment = ( { children, id } ) => {
	return (
		<Fill name={ 'woocommerce_remote_payment_' + id }>{ children }</Fill>
	);
};

WooRemotePayment.Slot = ( { id, ...props } ) => {
	return (
		<Slot name={ 'woocommerce_remote_payment_' + id }>
			{ ( fills ) =>
				Children.map( fills, ( fill ) => cloneElement( fill, props ) )
			}
		</Slot>
	);
};

export default WooRemotePayment;
