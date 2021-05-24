/**
 * External dependencies
 */
import { Card, CardBody } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { Badge } from '../';

export const Basic = () => (
	<Card>
		<CardBody>
			<Badge count={ 15 } />
		</CardBody>
	</Card>
);

export default {
	title: 'WooCommerce Admin/components/Badge',
	component: Badge,
};
