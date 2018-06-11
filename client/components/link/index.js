/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

/**
 * Internal dependencies
 */
import { getAdminLink } from 'lib/nav-utils';

class Link extends Component {
	render() {
		const { children, to, ...props } = this.props;
		if ( this.context.router ) {
			return (
				<RouterLink to={ to } { ...props }>
					{ children }
				</RouterLink>
			);
		}
		return (
			<a href={ getAdminLink( 'admin.php?page=woodash#' + to ) } { ...props }>
				{ children }
			</a>
		);
	}
}

Link.propTypes = {
	to: PropTypes.string,
};

Link.contextTypes = {
	router: PropTypes.object,
};

export default Link;
