/**
 * External dependencies
 */
import { Card, H, Section, Table } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import { rows, headers } from './index';

export const Basic = () => (
	<Card className="woocommerce-analytics__card">
		<Table caption="Revenue Last Week" rows={ rows } headers={ headers } />
	</Card>
);

export default {
	title: 'WooCommerce Admin/components/Table',
	component: Table,
};
