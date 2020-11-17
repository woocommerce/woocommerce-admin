/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
import { Fragment } from '@wordpress/element';
import { Accordion, AccordionPanel } from '@woocommerce/components';
import { getSetting } from '@woocommerce/wc-admin-settings';

/**
 * Internal dependencies
 */
import './style.scss';
import { getOrderStatuses, getUnreadOrders } from './orders/utils';
import { getAllPanels } from './panels';

export const ActivityPanel = () => {
	const panels = useSelect( ( select ) => {
		const orderStatuses = getOrderStatuses( select );
		const countUnreadOrders = getUnreadOrders( select, orderStatuses );
		const manageStock = getSetting( 'manageStock', 'no' );
		const countLowStockProducts = getSetting( 'lowStockCount', 0 );

		return getAllPanels( {
			countLowStockProducts,
			countUnreadOrders,
			manageStock,
			orderStatuses,
		} );
	} );
	return (
		<Accordion>
			<Fragment>
				{ panels.map( ( panelData ) => {
					const {
						className,
						count,
						id,
						initialOpen,
						panel,
						title,
					} = panelData;
					return (
						<AccordionPanel
							key={ id }
							className={ className }
							count={ count }
							initialOpen={ initialOpen }
							title={ title }
						>
							{ panel }
						</AccordionPanel>
					);
				} ) }
			</Fragment>
		</Accordion>
	);
};
