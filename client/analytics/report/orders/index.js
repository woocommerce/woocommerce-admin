/** @format */
/**
 * External dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { ReportFilters } from '@woocommerce/components';
import { filters, advancedFilterConfig } from './config';
import OrdersReportTable from './table';

class OrdersReport extends Component {
	constructor( props ) {
		super( props );

		this.toggleStatus = this.toggleStatus.bind( this );
	}

	toggleStatus( order ) {
		const { requestUpdateOrder } = this.props;
		const updatedOrder = { ...order };
		const status = updatedOrder.status === 'completed' ? 'processing' : 'completed';
		updatedOrder.status = status;
		requestUpdateOrder( updatedOrder );
	}

	render() {
		const { isRequesting, query, orders, path } = this.props;

		return (
			<Fragment>
				<ReportFilters
					query={ query }
					path={ path }
					filters={ filters }
					advancedConfig={ advancedFilterConfig }
				/>
				<p>Below is a temporary example</p>
				<OrdersReportTable isRequesting={ isRequesting } orders={ orders } query={ query } />
			</Fragment>
		);
	}
}

export default compose(
	withSelect( select => {
		const { getOrders } = select( 'wc-admin' );
		const orders = getOrders();
		const isRequesting = select( 'core/data' ).isResolving( 'wc-admin', 'getOrders' );
		return { isRequesting, orders };
	} ),
	withDispatch( dispatch => {
		return {
			requestUpdateOrder: function( updatedOrder ) {
				dispatch( 'wc-admin' ).requestUpdateOrder( updatedOrder );
			},
		};
	} )
)( OrdersReport );
