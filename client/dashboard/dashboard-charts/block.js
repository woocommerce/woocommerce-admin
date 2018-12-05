/** @format */
/**
 * External dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import { Card } from '@woocommerce/components';
import ReportChart from 'analytics/components/report-chart';
import './block.scss';
class ChartBlock extends Component {
	constructor() {
		super( ...arguments );
	}

	render() {
		const { charts, endpoint, path, query } = this.props;
		return (
			<Fragment>
				<Card className="woocommerce-dashboard__chart-block" title={ charts[ 0 ].label }>
					<ReportChart
						charts={ charts }
						endpoint={ endpoint }
						mode="block"
						path={ path }
						query={ query }
						selectedChart={ charts[ 0 ] }
					/>
				</Card>
			</Fragment>
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
