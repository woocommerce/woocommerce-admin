/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Activity from 'dashboard/widgets/activity';
import { Tabs, Tab, TabPanel } from 'components/tabs';

class Sidebar extends Component {
	render() {
		const tabs = [
			{ title: 'Insights', key: 'insights', count: 3 },
			{ title: 'Orders', key: 'orders', count: 0 },
			{ title: 'Reviews', key: 'reviews', count: 21 },
		];
		const activeTabIndex = 1;
		const activeTab = tabs[ activeTabIndex ];
		return (
			<div className="woo-dash__secondary">
				<Tabs>
					{ tabs.map( ( tab, index ) => (
						<Tab
							active={ activeTabIndex === index }
							count={ tab.count }
							key={ tab.key }
							controls={ tab.key }
						>
							{ tab.title }
						</Tab>
					) ) }
				</Tabs>
				<TabPanel id={ activeTab.key }>{ `Section for ${ activeTab.title }` }</TabPanel>
				<Activity />
			</div>
		);
	}
}

export default Sidebar;
