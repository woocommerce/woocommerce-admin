/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';

/**
 * WooCommerce dependencies
 */
import { getAdminLink, getHistory } from '@woocommerce/navigation';

/**
 * Use `Link` to create a link to another resource. It accepts a type to automatically
 * create wp-admin links, wc-admin links, and external links.
 */
class Link extends Component {
	// @todo `this.context.router` is always returning false,
	// so this hacks around that by directly using the history API when on a JS powered page. Can we handle this better?
	wcAdminHandler( e ) {
		if ( ! wcSettings.isJsPage ) {
			return;
		}
		e.preventDefault();
		const path = e.target.closest( 'a' ).getAttribute( 'href' );
		if ( path ) {
			getHistory().push( path );
		}
	}
	render() {
		const { children, href, type, ...props } = this.props;

		let path;
		if ( 'wp-admin' === type ) {
			path = getAdminLink( href );
		} else if ( 'external' === type ) {
			path = href;
		} else {
			path = wcSettings.isJsPage ? href : getAdminLink( 'admin.php/woocommerce' + href );
		}
		return (
			<a href={ path } { ...props } data-type="wc-admin" onClick={ this.wcAdminHandler }>
				{ children }
			</a>
		);
	}
}

Link.propTypes = {
	/**
	 * The resource to link to.
	 */
	href: PropTypes.string.isRequired,
	/**
	 * Type of link. For wp-admin and wc-admin, the correct prefix is appended.
	 */
	type: PropTypes.oneOf( [ 'wp-admin', 'wc-admin', 'external' ] ).isRequired,
};

Link.defaultProps = {
	type: 'wc-admin',
};

export default Link;
