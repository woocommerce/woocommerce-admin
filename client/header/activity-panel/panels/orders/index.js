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
import { ActivityPanelContent, ActivityPanelTab } from '@woocommerce/components';

class Orders extends Component {
	render() {
		const { hasUnreadOrders } = this.props;

		return (
			<Fragment>
				<ActivityPanelTab
					name="orders"
					title={ __( 'Orders', 'woocommerce-admin' ) }
					icon="pages"
					unread={ hasUnreadOrders }
				/>
				<ActivityPanelContent name="orders" title={ __( 'Orders', 'woocommerce-admin' ) }>
					{ () => <OrdersPanelContent hasActionableOrders={ hasUnreadOrders } /> }
				</ActivityPanelContent>
			</Fragment>
		);
	}
}

export default withSelect( select => {
	const hasUnreadOrders = getUnreadOrders( select );

	return { hasUnreadOrders };
} )( Orders );
