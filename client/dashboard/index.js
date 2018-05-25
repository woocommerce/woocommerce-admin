/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Agenda from './widgets/agenda';
import Header from 'components/header';
import Performance from './widgets/performance';

export default class Dashboard extends Component {
	render() {
		return (
			<Fragment>
				<Header sections={ [ __( 'Dashboard', 'woo-dash' ) ] } />
				<Performance />
				<Agenda />
			</Fragment>
		);
	}
}
