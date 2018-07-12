/** @format */
/**
 * External dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import './style.scss';

class ChartLegend extends Component {
	constructor( props ) {
		super( props );
		this.state = {};
		this.select = this.select.bind( this );
	}

	render() {
		const {} = this.props;
		return <Fragment />;
	}
}

ChartLegend.propTypes = {
	data: PropTypes.string.isRequired,
};

export default ChartLegend;
