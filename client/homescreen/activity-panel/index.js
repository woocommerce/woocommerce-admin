/**
 * External dependencies
 */
import { withSelect } from '@wordpress/data';
import { Fragment } from '@wordpress/element';
import { Accordion, AccordionPanel } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import './style.scss';
import { getUnreadOrders } from './orders/utils';
import { getAllPanels } from './panels';

const ActivityPanel = ( { panels } ) => {
	return (
		<Accordion>
			<Fragment>
				{ panels.map( ( panelData, index ) => {
					const {
						className,
						count,
						initialOpen,
						panel,
						title,
					} = panelData;
					return (
						<AccordionPanel
							key={ index }
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

export default withSelect( ( select ) => {
	const countUnreadOrders = getUnreadOrders( select );
	const panels = getAllPanels( { countUnreadOrders } );
	return { panels };
} )( ActivityPanel );
