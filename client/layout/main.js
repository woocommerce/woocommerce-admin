/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

/**
 * External dependencies
 */
import { Controller, getPages } from './controller';

class Main extends Component {
	render() {
		return (
			<div className="woo-dash__main">
				<Router>
					<Switch>
						{ getPages().map( page => {
							return <Route key={ page.path } path={ page.path } exact component={ Controller } />;
						} ) }
						<Route component={ Controller } />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default Main;
