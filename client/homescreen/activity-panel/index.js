/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';
import {
	Card,
	Panel,
	PanelBody,
	PanelRow,
} from '@wordpress/components';
import { more } from '@wordpress/icons';
import OrdersPanel from './orders';

import { getUnreadOrders } from './orders/utils';

const ActivityPanel = ( {
	countUnreadOrders
} ) => {
	const getPanels = () => {
		const panels = [
			{
				title: __( 'Orders', 'woocommerce-admin' ),
				count: countUnreadOrders,
				initialOpen: true,
				panel: <OrdersPanel hasActionableOrders={ countUnreadOrders > 0 } />
			},
			{
				title: __( 'test', 'woocommerce-admin' ),
				count: 5,
				initialOpen: false,
				panel: <OrdersPanel hasActionableOrders={ countUnreadOrders > 0 } />
			},
		];
		return panels;
	}

	const renderPanels = () => {
		const panelsData = getPanels();
		return panelsData.map( ( thePanel, index ) => {
			const { count, title, initialOpen, panel } = thePanel;
			return <Card
				key= { index }
				size="large"
				className="woocommerce-homescreen-card"
			>
				<span className="woocommerce-layout__inbox-badge">
					{ count }
				</span>
				<PanelBody
					title={ title }
					icon={ more }
					initialOpen={ initialOpen }
				>
					<PanelRow>
						{ panel }
					</PanelRow>
				</PanelBody>
			</Card>
		} );
	}

	return (
		<Panel>
			{ renderPanels() }
		</Panel>
	);
}

export default withSelect( ( select ) => {
		const countUnreadOrders = getUnreadOrders( select );
		return { countUnreadOrders };
} )( ActivityPanel );
