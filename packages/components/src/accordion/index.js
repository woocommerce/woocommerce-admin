/**
 * External dependencies
 */
import { Panel } from '@wordpress/components';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import './style.scss';
import AccordionPanel from './panel';

const Accordion = ( { panels } ) => {
	return (
		<Panel>
			{ panels.map( ( panelData, index ) => (
				<AccordionPanel key={ index } { ...panelData } />
			) ) }
		</Panel>
	);
};

Accordion.propTypes = {
	/**
	 * A list of objects with information to set the panels.
	 */
	panels: PropTypes.arrayOf(
		PropTypes.shape( {
			className: PropTypes.string,
			count: PropTypes.number,
			title: PropTypes.string,
			initialOpen: PropTypes.bool,
			panel: PropTypes.node.isRequired,
		} )
	).isRequired,
};

export default Accordion;
