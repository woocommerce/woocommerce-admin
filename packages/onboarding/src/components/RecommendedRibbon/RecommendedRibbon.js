/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

const localPartners = [ 'woo-mercado-pago-custom' ];

export const RecommendedRibbon = ( { gatewayId } ) => {
	const text = localPartners.includes( gatewayId )
		? __( 'Local Partner', 'woocommerce-admin' )
		: __( 'Recommended', 'woocommerce-admin' );

	return (
		<div className={ 'woocommerce-task-payment__recommended-ribbon' }>
			<span>{ text }</span>
		</div>
	);
};
