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
import { H, ReportFilters } from '@woocommerce/components';
import Header from 'header';
import Leaderboards from './leaderboards';
import StorePerformance from './store-performance';

export default class Dashboard extends Component {
	render() {
		const { query, path } = this.props;
		// @todo This should be replaced by a check of tasks from the REST API response from #1897.
		const requiredTasksComplete = false;
		return (
			<Fragment>
				<Header sections={ [ __( 'Dashboard', 'woocommerce-admin' ) ] } />
				{ window.wcAdminFeatures.onboarding && ! requiredTasksComplete ? (
					<div className="woocommerce-task-list">
						<div className="woocommerce-task-list__header">
							<H className="woocommerce-task-list__header-title">
								{ __( 'Welcome to the WooCommerce Dashboard', 'woocommerce-admin' ) }
							</H>
							<H className="woocommerce-task-list__header-subtitle">
								{ __(
									"Here we'll guide you through the remaining tasks " +
										'to get your store ready for launch',
									'woocommerce-admin'
								) }
							</H>
						</div>
					</div>
				) : (
					<Fragment>
						<ReportFilters query={ query } path={ path } />
						<StorePerformance query={ query } />
						<DashboardCharts query={ query } path={ path } />
						<Leaderboards query={ query } />
					</Fragment>
				) }
			</Fragment>
		);
	}
}
