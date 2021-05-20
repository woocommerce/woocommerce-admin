/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Pill } from '@woocommerce/components';

const localPartners = [ 'mercadopago' ];

export const RecommendedRibbon = ( { methodKey, isPill = false } ) => {
	const text = localPartners.includes( methodKey )
		? __( 'Local Partner', 'woocommerce-admin' )
		: __( 'Recommended', 'woocommerce-admin' );

	return isPill ? (
		<Pill>{ text }</Pill>
	) : (
		<div className={ 'woocommerce-task-payment__recommended-ribbon' }>
			<span>{ text }</span>
		</div>
	);
};
