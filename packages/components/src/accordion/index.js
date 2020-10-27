/**
 * External dependencies
 */
import { Panel } from '@wordpress/components';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import AccordionPanel from './panel';

/**
 * Use `Accordion` to display an accordion that renders the children inside.
 *
 * @param {Object} props
 * @param {string} props.className
 * @return {Object} -
 */
const Accordion = ( { className, children } ) => {
	return (
		<Panel>
			<AccordionPanel className={ className }>
				{ children }
			</AccordionPanel>
		</Panel>
	);
};

Accordion.propTypes = {
	/**
	 * Additional CSS classes.
	 */
	className: PropTypes.string,
};

export default Accordion;
