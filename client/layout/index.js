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
	render() {
		return (
			<Fragment>
				<Slot name="header" />
				<div className="woo-dash__primary">
					<Notices />
					<Main />
				</div>

				<Sidebar />
			</Fragment>
		);
	}
}
