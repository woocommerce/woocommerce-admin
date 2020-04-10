/**
 * External dependencies
 */
import { Component } from '@wordpress/element';

/**
 * WooCommerce dependencies
 */
import { getSetting } from '@woocommerce/wc-admin-settings';

/**
 * Internal dependencies
 */
import './style.scss';

export default class Navigation extends Component {
	render() {
		const navigationItems = getSetting( 'wcNavigation', [] );

		return (
			<div className="woocommerce-navigation">
				<ul className="woocommerce-navigation__menu">
					{ navigationItems.map( ( item ) => {
						const { slug, title, url } = item;
						return (
							<li
								key={ slug }
								className="woocommerce-navigation__menu-item"
							>
								<a href={ url }>{ title }</a>
							</li>
						);
					} ) }
				</ul>
			</div>
		);
	}
}
