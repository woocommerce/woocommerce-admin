/** @format */
/**
 * External dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import { Button, withAPIData } from '@wordpress/components';
import { Component, compose } from '@wordpress/element';
import { Link } from 'react-router-dom';

/**
 * Internal dependencies
 */
import Card from 'components/card';
import Tabs from 'components/tabs';
import TabItem from 'components/tabs/item';

class Performance extends Component {
	constructor() {
		super( ...arguments );
		this.state = {
			showCustomers: true,
			showProducts: true,
			showOrders: true,
			period: 'day',
		};

		this.toggle = this.toggle.bind( this );
		this.selectPeriod = this.selectPeriod.bind( this );
	}

	toggle( type ) {
		return () => {
			this.setState( state => ( { [ type ]: ! state[ type ] } ) );
		};
	}

	selectPeriod( period ) {
		this.setState( () => ( { period } ) );
		// TODO Update charts based on new time period.
	}

	renderTabPanel() {
		const { period } = this.state;
		return (
			<Tabs selectedTab={ period } onSelect={ this.selectPeriod }>
				<TabItem name="day">Today</TabItem>
				<TabItem name="week">This Week</TabItem>
				<TabItem name="month">This Month</TabItem>
			</Tabs>
		);
	}

	render() {
		const { orders, products } = this.props;
		const totalOrders = ( orders.data && orders.data.length ) || 0;
		const totalProducts = ( products.data && products.data.length ) || 0;
		const { showCustomers, showProducts, showOrders } = this.state;

		// TODO Chart display.
		return (
			<Card title={ ( <Link to="/analytics">{ __( 'Store Performance', 'woo-dash' ) }</Link> ) } settings={ this.renderTabPanel() }>
				<div className="woo-dash__widget">
					{ showCustomers && (
						<div className="woo-dash__widget-item">
							{ sprintf( _n( '%d New Customer', '%d New Customers', 4, 'woo-dash' ), 4 ) }
						</div>
					) }
					{ showOrders && (
						<div className="woo-dash__widget-item">
							{ sprintf(
								_n( '%d New Order', '%d New Orders', totalOrders, 'woo-dash' ),
								totalOrders
							) }
						</div>
					) }
					{ showProducts && (
						<div className="woo-dash__widget-item">
							{ sprintf(
								_n( '%d Product', '%d Products', totalProducts, 'woo-dash' ),
								totalProducts
							) }
						</div>
					) }
					<div className="woo-dash__widget-item">
						<Button isPrimary href="#">
							{ __( 'View Orders', 'woo-dash' ) }
						</Button>
					</div>
				</div>
			</Card>
		);
	}
}

export default compose( [
	withAPIData( () => ( {
		orders: '/wc/v2/orders?status=processing',
		products: '/wc/v2/products',
	} ) ),
] )( Performance );
