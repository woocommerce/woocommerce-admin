/** @format */

/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { find, filter, isNull, forEach } from 'lodash';
import history from 'lib/history';

/**
 * Internal dependencies
 */
import { getPath } from 'lib/nav-utils';

// TODO Add support for icons
export default class Menu extends Component {
	constructor() {
		super();
		this.state = {
			currentPath: '',
		};
	}

	// TODO Refactor the router code a bit, so we can more easily get an update to date path here.
	componentDidMount() {
		/* eslint-disable */
		this.setState( {
			currentPath: getPath(),
		} );
		history.listen( () => {
			this.setState( {
				currentPath: getPath(),
			} );
		} );
		/* eslint-enable */
	}

	renderTopLevelMenus() {
		const menus = filter( wcSettings.menuData.menus, menu => {
			return isNull( menu.parent );
		} );

		return (
			menus.map( menu => {
				return (
					<li className="wp-not-current-submenu menu-top" key={ menu.id }>
						<a href={ menu.path } className="wp-not-current-submenu menu-top">
							<div className="wp-menu-arrow">
								<div />
							</div>
							<div className="wp-menu-image dashicons-before dashicons-admin-generic">
								<br />
							</div>
							<div className="wp-menu-name">{ menu.title }</div>
						</a>
					</li>
				);
			} ) || null
		);
	}

	renderMenuForSection( section ) {
		let parentItem = {};
		const currentItem = find( wcSettings.menuData.menus, menu => {
			return menu.id === section;
		} );

		if ( isNull( currentItem.parent ) ) {
			parentItem = { ...currentItem };
		} else {
			let has_sub_items = false;

			forEach( wcSettings.menuData.menus, menuItem => {
				if ( currentItem.parent === menuItem.id ) {
					parentItem = { ...menuItem };
				}
				if ( section === menuItem.parent ) {
					has_sub_items = true;
				}
			} );

			forEach( wcSettings.menuData.menus, menuItem => {
				if ( has_sub_items && section === menuItem.id ) {
					parentItem = {
						...menuItem,
						title: parentItem.title + ' / ' + menuItem.title,
					};
				}
			} );
		}

		const items = filter( wcSettings.menuData.menus, menu => {
			return menu.parent === parentItem.id;
		} );

		return (
			<li
				className="wp-first-item wp-has-submenu wp-has-current-submenu wp-menu-open menu-top"
				id="admin_page_products"
			>
				<a
					href={ parentItem.path }
					className="wp-first-item wp-has-submenu wp-has-current-submenu wp-menu-open menu-top"
				>
					<div className="wp-menu-arrow">
						<div />
					</div>
					<div className="wp-menu-image dashicons-before dashicons-admin-generic">
						<br />
					</div>
					<div className="wp-menu-name">{ parentItem.title }</div>
				</a>
				<ul className="wp-submenu wp-submenu-wrap">
					<li className="wp-submenu-head" aria-hidden="true">
						{ parentItem.title }
					</li>
					{ items.map( item => {
						return (
							<li key={ item.id }>
								<a href={ item.path }>{ item.title }</a>
							</li>
						);
					} ) || null }
				</ul>
			</li>
		);
	}

	render() {
		const currentPath = 'admin.php?page=woocommerce#' + this.state.currentPath;
		const currentSection = wcSettings.menuData.pathsToIds[ currentPath ] || '';

		return (
			<ul id="adminmenu">
				{ currentSection
					? this.renderMenuForSection( currentSection )
					: this.renderTopLevelMenus() }
			</ul>
		);
	}
}
