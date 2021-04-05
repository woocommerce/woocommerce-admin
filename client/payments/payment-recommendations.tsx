/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { decodeEntities } from '@wordpress/html-entities';
import { Card, CardBody, CardHeader, Button } from '@wordpress/components';
import { EllipsisMenu, List } from '@woocommerce/components';
import { Text } from '@woocommerce/experimental';
import {
	PLUGINS_STORE_NAME,
	SETTINGS_STORE_NAME,
	WCDataSelector,
	Plugin,
	WPDataSelectors,
} from '@woocommerce/data';

/**
 * Internal dependencies
 */
import './payment-recommendations.scss';
import { ActivityCardPlaceholder } from '../header/activity-panel/activity-card';
import { getCountryCode } from '../dashboard/utils';
import { isWCPaySupported } from '../task-list/tasks/payments/wcpay';

const PaymentRecommendations = () => {
	const { recommendedPlugins, loading, country } = useSelect(
		( select: WCDataSelector ) => {
			const { getSettings } = select(
				SETTINGS_STORE_NAME
			) as WPDataSelectors & {
				getSettings: (
					type: string
				) => { general: { woocommerce_default_country?: string } };
			};
			const { general: settings = {} } = getSettings( 'general' );
			const { getRecommendedPlugins, isResolving } = select(
				PLUGINS_STORE_NAME
			);
			const isLoading = isResolving( 'getRecommendedPlugins', [
				'payments',
			] );
			const plugins = getRecommendedPlugins( 'payments' );
			return {
				recommendedPlugins: plugins,
				loading: isLoading,
				country: settings.woocommerce_default_country
					? settings.woocommerce_default_country
					: null,
			};
		}
	);
	const countryCode = getCountryCode( country );

	if ( ! country || ! isWCPaySupported( countryCode ) ) {
		return null;
	}

	const pluginsList = ( recommendedPlugins || [] ).map(
		( plugin: Plugin ) => {
			return {
				key: plugin.slug,
				title: plugin.title,
				content: decodeEntities( plugin.shortDescription ),
				after: <Button isSecondary>Get started</Button>,
				// before:
			};
		}
	);

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
			<CardBody>
				{ loading && (
					<ActivityCardPlaceholder
						className="woocommerce-review-activity-card"
						hasDate
						lines={ 1 }
					/>
				) }
				<List items={ pluginsList } />
			</CardBody>
		</Card>
	);
};

export default PaymentRecommendations;
