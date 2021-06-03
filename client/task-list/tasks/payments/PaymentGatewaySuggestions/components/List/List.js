/**
 * External dependencies
 */
import { Card, CardHeader } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { Item } from './Item';

import './List.scss';

export const List = ( {
	heading,
	installedPaymentGateways,
	recommendedPaymentGateway,
	recommendedPaymentGateways,
	markConfigured,
} ) => {
	return (
		<Card>
			<CardHeader as="h2">{ heading }</CardHeader>
			{ Array.from( recommendedPaymentGateways.values() ).map(
				( paymentGateway ) => {
					const { key } = paymentGateway;
					return (
						<Item
							key={ key }
							markConfigured={ markConfigured }
							paymentGateway={ paymentGateway }
							isRecommended={ recommendedPaymentGateway === key }
							installedPaymentGateways={
								installedPaymentGateways
							}
							recommendedPaymentGatewayKeys={ recommendedPaymentGateways.keys() }
						/>
					);
				}
			) }
		</Card>
	);
};
