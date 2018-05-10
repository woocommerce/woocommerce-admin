/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './style.scss';
import ActivityList from './widgets/activity';
import Card from '../components/card';
import Header from '../components/header';
import WidgetNumbers from './widgets/numbers';

export default class extends Component {
	render() {
		return (
			<Fragment>
				<Header sections={ [ __( 'Dashboard', 'woo-dash' ) ] } />
				<div className="woo-dashboard">
					<div className="woo-dash__primary">
						<Card title={ __( 'Store Performance', 'woo-dash' ) }>
							<WidgetNumbers />
						</Card>
					</div>

					<div className="woo-dash__secondary">
						<ActivityList />
					</div>
				</div>
			</Fragment>
		);
	}
}
