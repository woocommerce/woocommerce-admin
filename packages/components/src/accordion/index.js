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

const Accordion = ( { className, children } ) => {
	return (
		<Panel>
			<AccordionPanel className={ className }>
				{ children }
			</AccordionPanel>
		</Panel>
	);
};

AccordionPanel.propTypes = {
	/**
	 * Additional CSS classes.
	 */
	className: PropTypes.string,
};

export default Accordion;
