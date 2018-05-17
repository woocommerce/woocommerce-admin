/** @format */
/**
 * External dependencies
 */
import classnames from 'classnames';
import { Component } from '@wordpress/element';
import { find } from 'lodash';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Slot } from 'react-slot-fill';

/**
 * Internal dependencies
 */
import './style.scss';
import { Controller, getPages } from './controller';
import Notices from './notices';
import Sidebar from './sidebar';

class Layout extends Component {
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
		const { path } = this.props.match;
		const page = find( getPages(), { path } );
		const className = classnames( {
			'woo-dashboard': true,
			'has-visible-sidebar': page.hasOpenSidebar,
			'has-hidden-sidebar': ! page.hasOpenSidebar,
		} );
		return (
			<div className={ className }>
				<Slot name="header" fillChildProps={ { onToggle: this.toggleSidebar } } />
				<div className="woo-dash__primary">
					<Notices />
					<div className="woo-dash__main">
						<Controller { ...this.props } />
					</div>
				</div>

				<Sidebar isOpen={ this.state.isSidebarOpen } />
			</div>
		);
	}
}

export default class extends Component {
	render() {
		return (
			<Router>
				<Switch>
					{ getPages().map( page => {
						return (
							<Route key={ page.path } path={ page.path } exact component={ Layout } />
						);
					} ) }
					<Route component={ Layout } />
				</Switch>
			</Router>
		);
	}
}
