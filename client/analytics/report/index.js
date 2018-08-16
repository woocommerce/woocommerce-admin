/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';

/**
 * Internal dependencies
 */
import ExampleReport from './example';
import RevenueReport from './revenue';
import ProductsReport from './products';
import OrdersReport from './orders/';

class Report extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			previousQuery: props.query,
		};
	}

	componentDidUpdate( prevProps ) {
		// Track the previous query, so we can continue displaying results in reports while updated results are pulled.
		if ( ! isEqual( prevProps.query, this.props.query ) ) {
			/* eslint-disable react/no-did-update-set-state */
			this.setState( { previousQuery: prevProps.query } );
			/* eslint-enable react/no-did-update-set-state */
		}
	}

	render() {
		const { params } = this.props;
		const { previousQuery } = this.state;

		switch ( params.report ) {
			case 'revenue':
				return <RevenueReport { ...this.props } previousQuery={ previousQuery } />;
			case 'products':
				return <ProductsReport { ...this.props } previousQuery={ previousQuery } />;
			case 'orders':
				return <OrdersReport { ...this.props } previousQuery={ previousQuery } />;
			default:
				return <ExampleReport previousQuery={ previousQuery } />;
		}
	}
}

Report.propTypes = {
	params: PropTypes.object.isRequired,
};

export default Report;
