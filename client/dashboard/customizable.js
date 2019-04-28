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
import DashboardCharts from './dashboard-charts';
import Leaderboards from './leaderboards';
import { ReportFilters, H } from '@woocommerce/components';
import StorePerformance from './store-performance';
import SectionMover from './components/section-mover';

// @todo Replace dashboard-charts, leaderboards, and store-performance sections as neccessary with customizable equivalents.
export default class CustomizableDashboard extends Component {
	render() {
		const { query, path } = this.props;
		const StorePerformanceTitle = (
			<Fragment>
				<SectionMover />
				{ __( 'Store Performance', 'woocommerce-admin' ) }
			</Fragment>
		);
		const DashboardChartsTitle = (
			<Fragment>
				<SectionMover />
				{ __( 'Charts', 'woocommerce-admin' ) }
			</Fragment>
		);
		const LeaderboardsTitle = (
			<Fragment>
				<SectionMover />
				{ __( 'Leaderboards', 'woocommerce-admin' ) }
			</Fragment>
		);

		return (
			<Fragment>
				<div className="woocommerce-section-header">
					<H>{ __( 'Customizable Dashboard', 'woocommerce-admin' ) }</H>
				</div>
				<ReportFilters query={ query } path={ path } />
				<StorePerformance query={ query } title={ StorePerformanceTitle } />
				<DashboardCharts query={ query } path={ path } title={ DashboardChartsTitle } />
				<Leaderboards query={ query } title={ LeaderboardsTitle } />
			</Fragment>
		);
	}
}
