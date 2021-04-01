/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { Card, CardBody, CardHeader, Button } from '@wordpress/components';
import { EllipsisMenu } from '@woocommerce/components';
import { Text } from '@woocommerce/experimental';
import { PLUGINS_STORE_NAME, WCDataSelector } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import './styles.scss';

const PaymentRecommendations = () => {
	const recommendedPlugins = useSelect( ( select: WCDataSelector ) => {
		// const { searchRecommendedPlugins } = select( PLUGINS_STORE_NAME );
		// return searchRecommendedPlugins( 'payment-gateways' );
	} );

	return (
		<Card size="large" className="woocommerce-recommended-payments-card">
			<CardHeader size="medium">
				<div className="woocommerce-recommended-payments-card__header">
					<Text variant="title.small">
						{ __(
							'Recommended ways to get paid',
							'woocommerce-admin'
						) }
					</Text>
					<Text
						className={ `woocommerce-recommended-payments__header-heading` }
						variant="caption"
					>
						{ __(
							'We recommend adding one of the following payment extensions to your store',
							'woocommerce-admin'
						) }
					</Text>
				</div>
				<div className="woocommerce-card__menu woocommerce-card__header-item">
					<EllipsisMenu
						label={ __( 'Task List Options', 'woocommerce-admin' ) }
						renderContent={ () => (
							<div className="woocommerce-task-card__section-controls">
								<Button
									onClick={ () => {
										/* do nothing */
									} }
								>
									{ __( 'Hide this', 'woocommerce-admin' ) }
								</Button>
							</div>
						) }
					/>
				</div>
			</CardHeader>
			<CardBody>Recommended payments</CardBody>
		</Card>
	);
};

export default PaymentRecommendations;
