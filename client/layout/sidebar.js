/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import Activity from 'dashboard/activity';

class Sidebar extends Component {
	render() {
		const className = classnames( 'woo-dash__secondary', {
			'is-opened': this.props.isOpen,
		} );

		return (
			<div className={ className }>
				<Activity />
			</div>
		);
	}
}

export default Sidebar;
