/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';
import { Card, Panel, PanelBody, PanelRow } from '@wordpress/components';
import { more } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import './style.scss';
import OrdersPanel from './orders';
import { getUnreadOrders } from './orders/utils';

const ActivityPanel = ( { countUnreadOrders } ) => {
	const getPanels = () => {
		const panels = [
			{
				title: __( 'Orders', 'woocommerce-admin' ),
				count: countUnreadOrders,
				initialOpen: true,
				panel: (
					<OrdersPanel
						hasActionableOrders={ countUnreadOrders > 0 }
					/>
				),
			},
			// Add another panel row here
		];
		return panels;
	};

	const getTitleAndCount = ( title, count ) => {
		return (
			<span className="woocommerce-activity-panel-header">
				<span className="woocommerce-activity-panel-title">
					{ title }
				</span>
				{ count !== null && (
					<span className="woocommerce-activity-panel-badge">
						{ count }
					</span>
				) }
			</span>
		);
	};

	const renderPanels = () => {
		const panelsData = getPanels();
		return panelsData.map( ( thePanel, index ) => {
			const { count, title, initialOpen, panel } = thePanel;
			return (
				<Card
					key={ index }
					size="large"
					className="woocommerce-activity-panel-card woocommerce-homescreen-card"
				>
					<PanelBody
						title={ getTitleAndCount( title, count ) }
						icon={ more }
						initialOpen={ initialOpen }
					>
						<PanelRow> { panel } </PanelRow>
					</PanelBody>
				</Card>
			);
		} );
	};

	return <Panel> { renderPanels() } </Panel>;
};

export default withSelect( ( select ) => {
	const countUnreadOrders = getUnreadOrders( select );
	return { countUnreadOrders };
} )( ActivityPanel );
