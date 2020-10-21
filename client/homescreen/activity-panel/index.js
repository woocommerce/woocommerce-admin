/**
 * External dependencies
 */
import { withSelect } from '@wordpress/data';
import { Card, Panel, PanelBody, PanelRow } from '@wordpress/components';
import { more } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import './style.scss';
import { getUnreadOrders } from './orders/utils';
import { getAllPanels } from './panels';

const ActivityPanel = ( { panels } ) => {
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
		return panels.map( ( panel, index ) => {
			const { count, title, initialOpen, panel: panelContent } = panel;
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
						<PanelRow> { panelContent } </PanelRow>
					</PanelBody>
				</Card>
			);
		} );
	};

	return <Panel> { renderPanels() } </Panel>;
};

export default withSelect( ( select ) => {
	const countUnreadOrders = getUnreadOrders( select );
	const panels = getAllPanels( { countUnreadOrders } );
	return { panels };
} )( ActivityPanel );
