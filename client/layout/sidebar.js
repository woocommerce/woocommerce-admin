/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Activity from 'dashboard/widgets/activity';
import { Tabs, Tab, TabPanel } from 'components/tabs';

import { TabPanel as GutenTabPanel } from '@wordpress/components';

const onSelect = tabName => {
	console.log( 'Selecting tab', tabName );
};

const Count = ( { value } ) => {
	return <span>{ value }</span>;
};

const myTabTitle = (
	<h2>
		Hello World <Count value={ 22 } />
	</h2>
);
console.log( typeof myTabTitle );

function MyTabPanel() {
	return (
		<GutenTabPanel
			className="my-tab-panel"
			activeClass="active-tab"
			onSelect={ onSelect }
			tabs={ [
				{
					name: 'tab1',
					title: myTabTitle,
					className: 'tab-one',
				},
				{
					name: 'tab2',
					title: 'Tab 2',
					className: 'tab-two',
				},
			] }
		>
			{ tabName => {
				return <p>${ tabName }</p>;
			} }
		</GutenTabPanel>
	);
}

class Sidebar extends Component {
	// state = {
	// 	activeTabIndex: 0,
	// };

	getTabs() {
		return [
			{ title: __( 'Insights', 'woo-dash' ), key: 'insights', count: 3 },
			{ title: __( 'Orders', 'woo-dash' ), key: 'orders', count: 0 },
			{ title: __( 'Reviews', 'woo-dash' ), key: 'reviews', count: 21 },
		];
	}

	// onTabClick = a => {
	// 	console.log( a );
	// };

	render() {
		// const { activeTabIndex } = this.state;
		const activeTabIndex = 1;
		const tabs = this.getTabs();
		const activeTab = tabs[ activeTabIndex ];
		return (
			<div className="woo-dash__secondary">
				{ MyTabPanel() }
				<Tabs>
					{ tabs.map( ( tab, index ) => (
						<Tab
							active={ activeTabIndex === index }
							count={ tab.count }
							key={ tab.key }
							controls={ tab.key }
							onClick={ onSelect }
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
