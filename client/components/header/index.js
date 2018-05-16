/** @format */
/**
 * External dependencies
 */
import { isArray } from 'lodash';
import PropTypes from 'prop-types';
import { Fill } from 'react-slot-fill';

/**
 * Internal dependencies
 */
import './style.scss';
import { getAdminLink } from 'lib/nav-utils';

const Header = ( { sections, showTimeline, onToggle } ) => {
	const _sections = isArray( sections ) ? sections : [ sections ];

	return (
		<div className="woo-dash__header">
			<h1>
				<span>
					<a href={ getAdminLink( '/' ) }>WooCommerce</a>
				</span>
				{ _sections.map( ( subSection, i ) => <span key={ i }>{ subSection }</span> ) }
			</h1>
			{ showTimeline && <div /> }
			<button onClick={ onToggle }>Show Sidebar</button>
		</div>
	);
};

Header.propTypes = {
	sections: PropTypes.node.isRequired,
	showTimeline: PropTypes.bool,
};

Header.defaultProps = {
	showTimeline: true,
};

export default function( props ) {
	return (
		<Fill name="header">
			<Header { ...props } />
		</Fill>
	);
}
