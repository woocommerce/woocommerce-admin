/** @format */
/**
 * External dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import { Button, withAPIData } from '@wordpress/components';
import { Component, compose } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { withHooks, renderHook } from '../../extension-api';

class WidgetNumbers extends Component {
	render() {
		const { orders, products, hooks } = this.props;
		const totalOrders = orders.data && orders.data.length || 0;
		const totalProducts = products.data && products.data.length || 0;
		return (
			<div className="woo-dash__widget">
				<div className="woo-dash__widget-item">
					{ sprintf( _n( '%d New Customer', '%d New Customers', 4, 'woo-dash' ), 4 ) }
				</div>
				<div className="woo-dash__widget-item">
					{ sprintf( _n( '%d New Order', '%d New Orders', totalOrders, 'woo-dash' ), totalOrders ) }
				</div>
				<div className="woo-dash__widget-item">
					{ sprintf( _n( '%d Product', '%d Products', totalProducts, 'woo-dash' ), totalProducts ) }
				</div>

				{ renderHook( hooks, 'dashboard_number_widget_items', function( { item } ) {
					return (
						<div className="wd_widget-item">
							{ item }
						</div>
					);
				} ) }

				<div className="woo-dash__widget-item">
					<Button isPrimary href="#">{ __( 'View Orders', 'woo-dash' ) }</Button>
					{ renderHook( hooks, 'dashboard_number_widget_action_links', function( { href, label } ) {
						return (
							<p><Button href={ href }>{ label }</Button></p>
						);
					} ) }
				</div>
			</div>
		);
	}
}

export default compose( [
	withAPIData( () => ( {
		orders: '/wc/v2/orders?status=processing',
		products: '/wc/v2/products',
	} ) ),
	withHooks( [
		'dashboard_number_widget_items',
		'dashboard_number_widget_action_links',
	] ),
] )( WidgetNumbers );
