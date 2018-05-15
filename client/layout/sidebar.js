/** @format */
/**
 * External dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { TabPanel } from '@wordpress/components';

/**
 * Internal dependencies
 */
import './style.scss';
import Activity from 'dashboard/widgets/activity';
import Count from 'components/count';

class Sidebar extends Component {
	getTitle( str, count ) {
		const title = __( str.charAt( 0 ).toUpperCase() + str.slice( 1 ), 'woo-dash' );
		return (
			<h2>
				{ title } <Count count={ count } />
			</h2>
		);
	}

	getTabs() {
		return [ 'insights', 'orders', 'reviews' ].map( name => {
			return {
				name,
				title: this.getTitle( name, 3 ),
				className: 'woo-dash__sidebar-tab',
			};
		} );
	}

	render() {
		const tabs = this.getTabs();
		return (
			<div className="woo-dash__secondary">
				<TabPanel className="woo-dash__sidebar-tabs" activeClass="is-active" tabs={ tabs }>
					{ selectedTabName => {
						return (
							<Fragment>
								<h3>Section: { selectedTabName }</h3>
								<p>-------------------</p>
								<Activity />
							</Fragment>
						);
					} }
				</TabPanel>
			</div>
		);
	}
}

export default Sidebar;
