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
import Header from 'components/header';
import Notices from './notices';
import Main from './main';
import Sidebar from './sidebar';

export default class extends Component {
	render() {
		return (
			<Fragment>
				<Header sections={ [ __( 'Dashboard', 'woo-dash' ) ] } />
				<div className="woo-dashboard">
					<div className="woo-dash__primary">
						<Notices />
						<Main />
					</div>

					<Sidebar />
				</div>
			</Fragment>
		);
	}
}
