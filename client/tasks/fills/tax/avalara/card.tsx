/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import interpolateComponents from 'interpolate-components';
import { recordEvent } from '@woocommerce/tracks';

/**
 * Internal dependencies
 */
import { PartnerCard } from '../partner-card';
import logo from './logo.png';

export const Card = ( { isPending } ) => {
	return (
		<PartnerCard
			name={ __( 'Avalara', 'woocommerce-admin' ) }
			isPending={ isPending }
			logo={ logo }
			description={ __(
				'Powerful all-in-one tax tool',
				'woocommerce-admin'
			) }
			benefits={ [
				__( 'Real-time sales tax calculation', 'woocommerce-admin' ),
				interpolateComponents( {
					mixedString: __(
						'{{strong}}Multi{{/strong}}-economic nexus compliance',
						'woocommerce-admin'
					),
					components: {
						strong: <strong />,
					},
				} ),
				__(
					'Cross-border and multi-channel compliance',
					'woocommerce-admin'
				),
				__( 'Automate filing & remittance', 'woocommerce-admin' ),
				__(
					'Return-ready, jurisdiction-level reporting.',
					'woocommerce-admin'
				),
			] }
			terms={ __(
				'30-day free trial. No credit card needed.',
				'woocommerce-admin'
			) }
			actionText={ __( 'Enable & set up', 'woocommerce-admin' ) }
			onClick={ () => {
				recordEvent( 'wcadmin_tasklist_tax_select_option', {
					selected_option: 'avalara',
				} );
				window.open(
					new URL(
						'https://woocommerce.com/products/woocommerce-avatax/'
					),
					'_blank'
				);
			} }
		/>
	);
};
