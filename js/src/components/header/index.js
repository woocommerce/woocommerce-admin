/** @format */
/**
 * External dependencies
 */
import { isArray } from 'lodash';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import './style.scss';
import { getAdminLink } from '../../lib/nav-utils';

// TODO Implement timeline icon

const Header = ( { section, showTimeline } ) => {
	const renderBreadcrumbs = () => {
		const sections = isArray( section ) ? section : [ section ];
		const crumbs = sections.map( ( subSection, i ) => <span key={ i }>{ subSection }</span> );
		return (
			<h1>
				<span><a href={ getAdminLink( 'admin.php?page=woodash' ) }>WooCommerce</a></span>
				{ crumbs }
			</h1>
		);
	};

	return (
		<div className="woo-dash__header">
			{ renderBreadcrumbs() }
			{ showTimeline && (
				<div />
			) }
		</div>
	);
};

Header.propTypes = {
	section: PropTypes.node,
	showTimeline: PropTypes.bool,
};

Header.defaultProps = {
	showTimeline: true,
};

export default Header;
