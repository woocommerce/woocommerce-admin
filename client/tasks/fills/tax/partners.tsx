/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { updateQueryString } from '@woocommerce/navigation';

/**
 * Internal dependencies
 */
import { PartnerCard } from './partner-card';
import AvalaraLogo from './avalara/logo.png';
import WooCommerceTaxLogo from './woocommerce-tax/logo.png';

export const Partners = ( { isPending, onManual, onDisable } ) => {
	return (
		<div className="woocommerce-tax-partners">
			<PartnerCard
				name={ __( 'WooCommerce Tax', 'woocommerce-admin' ) }
				isPending={ isPending }
				logo={ WooCommerceTaxLogo }
				description={ __( 'Best for new stores', 'woocommerce-admin' ) }
				benefits={ [
					__(
						'Real-time sales tax calculation',
						'woocommerce-admin'
					),
					__(
						'Single economic nexus compliance',
						'woocommerce-admin'
					),
					__( 'Powered by Jetpack', 'woocommerce-admin' ),
					__( '100&#37; free', 'woocommerce-admin' ),
				] }
				terms={ __(
					'By installing WooCommerce Tax and Jetpack you agree to the Terms of Service.',
					'woocommerce-admin'
				) }
				actionText={ __( 'Continue setup', 'woocommerce-admin' ) }
				onClick={ () =>
					updateQueryString( {
						partner: 'woocommerce-tax',
					} )
				}
			/>
			<PartnerCard
				name={ __( 'Avalara', 'woocommerce-admin' ) }
				isPending={ isPending }
				logo={ AvalaraLogo }
				description={ __(
					'Powerful all-in-one tax tool',
					'woocommerce-admin'
				) }
				benefits={ [
					__(
						'Real-time sales tax calculation',
						'woocommerce-admin'
					),
					__(
						'Multi-economic nexus compliance',
						'woocommerce-admin'
					),
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
				onClick={ () =>
					( window.location.href =
						'https://woocommerce.com/products/woocommerce-avatax/' )
				}
			/>
		</div>
	);
};
