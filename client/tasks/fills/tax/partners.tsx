/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button, Card, CardBody, CardHeader } from '@wordpress/components';
import interpolateComponents from 'interpolate-components';
import { Link } from '@woocommerce/components';
import { updateQueryString } from '@woocommerce/navigation';

/**
 * Internal dependencies
 */
import { PartnerCard } from './partner-card';
import AvalaraLogo from './avalara/logo.png';
import WooCommerceTaxLogo from './woocommerce-tax/logo.png';
import { TaxChildProps } from './utils';
import './partners.scss';

export const Partners: React.FC< TaxChildProps > = ( {
	isPending,
	onManual,
	onDisable,
} ) => {
	return (
		<Card className="woocommerce-task-card woocommerce-tax-partners">
			<CardHeader>
				{ __( 'Choose a tax partner', 'woocommerce-admin' ) }
			</CardHeader>
			<CardBody>
				<div className="woocommerce-tax-partners__partners">
					<PartnerCard
						name={ __( 'WooCommerce Tax', 'woocommerce-admin' ) }
						isPending={ isPending }
						logo={ WooCommerceTaxLogo }
						description={ __(
							'Best for new stores',
							'woocommerce-admin'
						) }
						benefits={ [
							__(
								'Real-time sales tax calculation',
								'woocommerce-admin'
							),
							interpolateComponents( {
								mixedString: __(
									'{{strong}}Single{{/strong}} economic nexus compliance',
									'woocommerce-admin'
								),
								components: {
									strong: <strong />,
								},
							} ),
							interpolateComponents( {
								mixedString: __(
									'Powered by {{link}}Jetpack{{/link}}',
									'woocommerce-admin'
								),
								components: {
									link: (
										<Link
											type="external"
											href="https://woocommerce.com/products/jetpack/?utm_medium=product"
											target="_blank"
										/>
									),
								},
							} ),
							// eslint-disable-next-line @wordpress/i18n-translator-comments
							__( '100% free', 'woocommerce-admin' ),
						] }
						terms={ interpolateComponents( {
							mixedString: __(
								'By installing WooCommerce Tax and Jetpack you agree to the {{link}}Terms of Service{{/link}}.',
								'woocommerce-admin'
							),
							components: {
								link: (
									<Link
										href={ 'https://wordpress.com/tos/' }
										target="_blank"
										type="external"
									/>
								),
							},
						} ) }
						actionText={ __(
							'Continue setup',
							'woocommerce-admin'
						) }
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
							__(
								'Automate filing & remittance',
								'woocommerce-admin'
							),
							__(
								'Return-ready, jurisdiction-level reporting.',
								'woocommerce-admin'
							),
						] }
						terms={ __(
							'30-day free trial. No credit card needed.',
							'woocommerce-admin'
						) }
						actionText={ __(
							'Enable & set up',
							'woocommerce-admin'
						) }
						onClick={ () =>
							( window.location.href =
								'https://woocommerce.com/products/woocommerce-avatax/' )
						}
					/>
				</div>
				<ul className="woocommerce-tax-partners__other-actions">
					<li>
						<Button
							isTertiary
							disabled={ isPending }
							isBusy={ isPending }
							onClick={ () => {
								onManual();
							} }
						>
							{ __(
								'Set up taxes manually',
								'woocommerce-admin'
							) }
						</Button>
					</li>
					<li>
						<Button
							isTertiary
							disabled={ isPending }
							isBusy={ isPending }
							onClick={ () => {
								onDisable();
							} }
						>
							{ __(
								"I don't charge sales tax",
								'woocommerce-admin'
							) }
						</Button>
					</li>
				</ul>
			</CardBody>
		</Card>
	);
};
