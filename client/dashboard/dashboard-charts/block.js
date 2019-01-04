/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';

/**
 * WooCommerce dependencies
 */
import { Card } from '@woocommerce/components';
import { getAdminLink, history } from '@woocommerce/navigation';

/**
 * Internal dependencies
 */
import ReportChart from 'analytics/components/report-chart';
import './block.scss';
import { __ } from '@wordpress/i18n';

class ChartBlock extends Component {
	handleChartClick = () => {
		const { charts } = this.props;

		if ( ! charts || ! charts.length ) {
			return null;
		}

		history.push( 'analytics/' + charts[ 0 ].endpoint + '?chart=' + charts[ 0 ].key );
	};

	render() {
		const { charts, endpoint, path, query } = this.props;

		if ( ! charts || ! charts.length ) {
			return null;
		}

		return (
			<div
				role="presentation"
				className="woocommerce-dashboard__chart-block-wrapper"
				onClick={ this.handleChartClick }
			>
				<Card
					className="woocommerce-dashboard__chart-block"
					title={ charts[ 0 ].label }
					onClick={ this.handleChartClick }
				>
					<a
						className="woocommerce-dashboard__chart-block screen-reader-text"
						href={ getAdminLink(
							'admin.php?page=wc-admin#/analytics/' +
								charts[ 0 ].endpoint +
								'?chart=' +
								charts[ 0 ].key
						) }
					>
						{ /* translators: appended to end of chart type for report link */
						charts[ 0 ].label + __( ' Report', 'wc-admin' ) }
					</a>
					<ReportChart
						charts={ charts }
						endpoint={ endpoint }
						mode="block"
						path={ path }
						query={ query }
						selectedChart={ charts[ 0 ] }
					/>
				</Card>
			</div>
		);
	}
}

ChartBlock.propTypes = {
	charts: PropTypes.array,
	endpoint: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
	query: PropTypes.object.isRequired,
};

export default ChartBlock;
