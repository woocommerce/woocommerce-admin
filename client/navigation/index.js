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
								{ item.children.length && (
									<ul className="woocommerce-navigation__submenu">
										{ item.children.map( ( subitem ) => {
											return (
												<li
													key={ subitem.slug }
													className="woocommerce-navigation__submenu-item"
												>
													<a href={ subitem.url }>
														{ subitem.title }
													</a>
												</li>
											);
										} ) }
									</ul>
								) }
							</li>
						);
					} ) }
				</ul>
			</div>
		);
	}
}
