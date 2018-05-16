/** @format */
/**
 * External dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import { Slot } from 'react-slot-fill';

/**
 * Internal dependencies
 */
import './style.scss';
import Notices from './notices';
import Main from './main';
import Sidebar from './sidebar';

export default class extends Component {
	constructor() {
		super( ...arguments );
		this.toggleSidebar = this.toggleSidebar.bind( this );
		this.state = {
			isSidebarOpen: false,
		};
	}

	toggleSidebar() {
		this.setState( state => ( { isSidebarOpen: ! state.isSidebarOpen } ) );
	}

	render() {
		return (
			<Fragment>
				<Slot name="header" fillChildProps={ { onToggle: this.toggleSidebar } } />
				<div className="woo-dash__primary">
					<Notices />
					<Main />
				</div>

				<Sidebar isOpen={ this.state.isSidebarOpen } />
			</Fragment>
		);
	}
}
