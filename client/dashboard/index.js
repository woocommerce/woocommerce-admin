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
import WidgetNumbers from './widgets/numbers';
import Sidebar from 'layout/sidebar';

export default class extends Component {
	render() {
		return (
			<Fragment>
				<Header sections={ [ __( 'Dashboard', 'woo-dash' ) ] } />
				<div className="woo-dashboard">
					<div className="woo-dash__primary">
						<WidgetNumbers />
					</div>

					<div>
						<Sidebar />
					</div>
				</div>
			</Fragment>
		);
	}
}
