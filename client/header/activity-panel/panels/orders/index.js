/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
// import classnames from 'classnames';
import { Component, Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import withSelect from 'wc-api/with-select';
import { getUnreadOrders } from '../../unread-indicators';
import OrdersPanelContent from './panel-content';

/**
 * WooCommerce dependencies
 */
import { Panel, Tabs } from '@woocommerce/components';

class Orders extends Component {
	render() {
		const { hasUnreadOrders } = this.props;

		return (
			<Fragment>
				<Tabs.Item
					name="orders"
					title={ __( 'Orders', 'woocommerce-admin' ) }
					icon="pages"
					unread={ hasUnreadOrders }
				/>
				<Panel.Content name="orders" title={ __( 'Orders', 'woocommerce-admin' ) }>
					{ () => <OrdersPanelContent hasActionableOrders={ hasUnreadOrders } /> }
				</Panel.Content>
			</Fragment>
		);
	}
}

export default withSelect( select => {
	const hasUnreadOrders = getUnreadOrders( select );

	return { hasUnreadOrders };
} )( Orders );
