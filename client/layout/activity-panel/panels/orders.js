/** @format */
/**
 * External dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import { compose, Fragment } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { MINUTE, withApiClient } from '@fresh-data/framework';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

/**
 * Internal dependencies
 */
import ActivityCard from '../activity-card';
import ActivityHeader from '../activity-header';
import ActivityOutboundLink from '../activity-outbound-link';
import { EllipsisMenu, MenuTitle, MenuItem } from 'components/ellipsis-menu';
import { formatCurrency, getCurrencyFormatDecimal } from 'lib/currency';
import { getOrderRefundTotal } from 'lib/order-values';
import Gravatar from 'components/gravatar';
import Flag from 'components/flag';
import OrderStatus from 'components/order-status';
import { Section } from 'layout/section';

function OrdersPanel( { orders } ) {
	// TODO: Add support in fresh-data for status like requesting, etc.
	const isLoading = ! orders || orders.length === 0;

	const menu = (
		<EllipsisMenu label="Demo Menu">
			<MenuTitle>Test</MenuTitle>
			<MenuItem onInvoke={ noop }>Test</MenuItem>
		</EllipsisMenu>
	);

	const gravatarWithFlag = ( order, address ) => {
		return (
			<div className="woocommerce-layout__activity-panel-avatar-flag-overlay">
				<Flag order={ order } />
				<Gravatar user={ address.email } />
			</div>
		);
	};

	return (
		<Fragment>
			<ActivityHeader title={ __( 'Orders', 'wc-admin' ) } menu={ menu } />
			<Section>
				{ isLoading ? (
					<p>Loading</p>
				) : (
					<Fragment>
					{ orders.map( ( order, i ) => {
						// We want the billing address, but shipping can be used as a fallback.
						const address = { ...order.shipping, ...order.billing };
						const name = `${ address.first_name } ${ address.last_name }`;
						const productsCount = order.line_items.reduce(
							( total, line ) => total + line.quantity,
							0
						);

							const total = order.total;
							const refundValue = getOrderRefundTotal( order );
							const remainingTotal = getCurrencyFormatDecimal( order.total ) + refundValue;

						return (
							<ActivityCard
								key={ i }
								className="woocommerce-order-activity-card"
								title={ sprintf( __( '%s placed order #%d', 'wc-admin' ), name, order.id ) }
								icon={ gravatarWithFlag( order, address ) }
								date={ order.date_created }
								subtitle={
									<div>
										<span>
											{ sprintf(
												_n( '%d product', '%d products', productsCount, 'wc-admin' ),
												productsCount
											) }
										</span>
										{ refundValue ? (
											<span>
												<s>{ formatCurrency( total, order.currency ) }</s>{' '}
												{ formatCurrency( remainingTotal, order.currency ) }
											</span>
										) : (
											<span>{ formatCurrency( total, order.currency ) }</span>
										) }
									</div>
								}
								actions={
									<Button isDefault onClick={ noop }>
										Begin fulfillment
									</Button>
								}
							>
								<OrderStatus order={ order } />
							</ActivityCard>
							);
						} ) }
						<ActivityOutboundLink href={ 'edit.php?post_type=shop_order' }>
							{ __( 'Manage all orders' ) }
						</ActivityOutboundLink>
					</Fragment>
				) }
			</Section>
		</Fragment>
	);
}

OrdersPanel.propTypes = {
	orders: PropTypes.array, // TODO: Add `isRequired` back after withApiClient supports it.
};

function getClientKey() {
	return 'wpsite'; // TODO: support an empty client key.
}

function mapSelectorsToProps( selectors ) {
	const { getOrdersPage } = selectors;
	// TODO: Add pagination support for this component.
	const orders = getOrdersPage( { freshness: 5 * MINUTE }, 1, 10 );
	return {
		orders,
	};
}

export default compose( [ withApiClient( 'woocommerce', { getClientKey, mapSelectorsToProps } ) ] )(
	OrdersPanel
);
