/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import { partial } from 'lodash';

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
			sections: applyFilters( 'woocommerce_dashboard_sections', [
				{ key: 'store-performance', component: <StorePerformance query={ query } /> },
				{ key: 'charts', component: <DashboardCharts query={ query } path={ path } /> },
				{ key: 'leaderboards', component: <Leaderboards query={ query } /> },
			] ),
		};
		this.onMove = this.onMove.bind( this );
	}

	onMove( index, change ) {
		const updatedSections = [ ...this.state.sections ];
		const movedSection = updatedSections.splice( index, 1 ).shift();
		updatedSections.splice( index + change, 0, movedSection );

		this.setState( {
			sections: updatedSections,
		} );
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
				{ sections.map( ( section, index ) => {
					return (
						<div className="woocommerce-dashboard-section" key={ section.key }>
							{ section.component }
							<SectionMover
								onMoveUp={ partial( this.onMove, index, -1 ) }
								onMoveDown={ partial( this.onMove, index, 1 ) }
								isFirst={ 0 === index }
								isLast={ sections.length === index + 1 }
							/>
						</div>
					);
				} ) }
			</Fragment>
		);
	}
}
