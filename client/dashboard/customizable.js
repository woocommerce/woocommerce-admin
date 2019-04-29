/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';

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
	constructor( props ) {
		super( props );
		const { query, path } = props;
		this.state = {
			sections: applyFilters( 'woocommerce-dashboard-sections', [
				{ key: 'store-performance', component: <StorePerformance query={ query } /> },
				{ key: 'charts', component: <DashboardCharts query={ query } path={ path } /> },
				{ key: 'leaderboards', component: <Leaderboards query={ query } /> },
			] ),
		};
	}

	render() {
		const { query, path } = this.props;
		const { sections } = this.state;

		return (
			<Fragment>
				<div className="woocommerce-section-header">
					<H>{ __( 'Customizable Dashboard', 'woocommerce-admin' ) }</H>
				</div>
				<ReportFilters query={ query } path={ path } />
				{ sections.map( section => {
					return (
						<div className="woocommerce-dashboard-section" key={ section.key }>
							{ section.component }
							<SectionMover />
						</div>
					);
				} ) }
			</Fragment>
		);
	}
}
