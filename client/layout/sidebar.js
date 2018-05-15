/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { TabPanel } from '@wordpress/components';

/**
 * Internal dependencies
 */
import Activity from 'dashboard/widgets/activity';

const onSelect = tabName => {
	console.log( 'Selecting tab', tabName );
};

const Count = ( { value } ) => {
	return <span>{ value }</span>;
};

class Sidebar extends Component {
	getTitle( str, count ) {
		return (
			<h2>
				{ str } <Count value={ count } />
			</h2>
		);
	}

	getTabs() {
		return [
			{
				name: 'insights',
				title: this.getTitle( __( 'Insights', 'woo-dash' ), 3 ),
				className: 'my-class',
			},
			{
				name: 'orders',
				title: this.getTitle( __( 'Orders', 'woo-dash' ), 0 ),
				className: 'my-class',
			},
			{
				name: 'reviews',
				title: this.getTitle( __( 'Reviews', 'woo-dash' ), 21 ),
				className: 'my-class',
			},
		];
	}

	render() {
		const tabs = this.getTabs();
		return (
			<div className="woo-dash__secondary">
				<TabPanel
					className="my-tab-panel"
					activeClass="active-tab"
					onSelect={ onSelect }
					tabs={ tabs }
				>
					{ tabName => {
						return <p>${ tabName }</p>;
					} }
				</TabPanel>
				<Activity />
			</div>
		);
	}
}

export default Sidebar;
