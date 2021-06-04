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
	markConfigured,
	paymentGateways,
	recommended,
	suggestions,
} ) => {
	return (
		<Card>
			<CardHeader as="h2">{ heading }</CardHeader>
			{ Array.from( suggestions.values() ).map( ( paymentGateway ) => {
				const { key } = paymentGateway;
				return (
					<Item
						key={ key }
						markConfigured={ markConfigured }
						paymentGateway={ paymentGateway }
						paymentGateways={ paymentGateways }
						isRecommended={ recommended === key }
						suggestionKeys={ suggestions.keys() }
					/>
				);
			} ) }
		</Card>
	);
};
