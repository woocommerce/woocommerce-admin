/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Activity from 'dashboard/activity';

class Sidebar extends Component {
	render() {
		return (
			<div className="woo-dash__secondary">
				<Activity />
			</div>
		);
	}
}

export default Sidebar;
