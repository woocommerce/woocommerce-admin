/**
 * External dependencies
 */
import { Card, CardHeader } from '@wordpress/components';
import { useMemo } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { RecommendedPaymentGatewayListItem } from './RecommendedPaymentGatewayListItem';

import './RecommendedPaymentGatewayList.scss';

const RECOMMENDED_GATEWAY_KEYS = [ 'wcpay', 'mercadopago', 'stripe' ];

export const RecommendedPaymentGatewayList = ( {
	heading,
	installedPaymentGateways,
	recommendedPaymentGateways,
	markConfigured,
} ) => {
	const recommendedMethod = useMemo( () => {
		for ( const key in RECOMMENDED_GATEWAY_KEYS ) {
			const gateway = recommendedPaymentGateways.get( key );
			if ( gateway && gateway.visible ) {
				return gateway;
			}
		}
		return null;
	}, [ recommendedPaymentGateways ] );

	return (
		<Card>
			<CardHeader as="h2">{ heading }</CardHeader>
			{ Array.from( recommendedPaymentGateways.values() ).map(
				( method, index ) => {
					const { key } = method;
					return (
						<RecommendedPaymentGatewayListItem
							hasDivider={ index !== 0 }
							installedPaymentGateways={
								installedPaymentGateways
							}
							key={ key }
							markConfigured={ markConfigured }
							paymentGateway={ method }
							isRecommended={ recommendedMethod === key }
							recommendedPaymentGateways={
								recommendedPaymentGateways
							}
						/>
					);
				}
			) }
		</Card>
	);
};
