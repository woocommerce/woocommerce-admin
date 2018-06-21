/** @format */
/**
 * External dependencies
 */
import classnames from 'classnames';
import { Component } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './style.scss';
import '../../layout/style.scss';

import Sidebar from '../../layout/sidebar';
import { HeaderNoFill } from './index';

export default class HeaderEmbed extends Component {
	constructor( props ) {
		super( props );
		this.toggleSidebar = this.toggleSidebar.bind( this );
		this.state = {
			isSidebarOpen: false,
		};
	}

	toggleSidebar() {
		this.setState( state => ( { isSidebarOpen: ! state.isSidebarOpen } ) );
	}

	render() {
		const className = classnames( {
			'woocommerce-layout': true,
			'has-hidden-sidebar': true,
		} );
		const headerProps = {
			onToggle: this.toggleSidebar,
			isSidebarOpen: this.state.isSidebarOpen,
			sections: wcSettings.classicBreadcrumbs,
			isClassicPage: true,
		};

		return (
			<div className={ className }>
				<HeaderNoFill { ...headerProps } />
				<Sidebar isOpen={ this.state.isSidebarOpen } onToggle={ this.toggleSidebar } />
				<div id="woocommerce-wp-notices" />
			</div>
		);
	}
}
