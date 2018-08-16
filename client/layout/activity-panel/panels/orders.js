/** @format */
/**
 * External dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { Component, Fragment } from '@wordpress/element';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

/**
 * Internal dependencies
 */
import { ActivityCard } from '../activity-card';
import ActivityHeader from '../activity-header';
import ActivityOutboundLink from '../activity-outbound-link';
import { EllipsisMenu, MenuTitle, MenuItem } from 'components/ellipsis-menu';
import { formatCurrency, getCurrencyFormatDecimal } from 'lib/currency';
import { getOrderRefundTotal } from 'lib/order-values';
import Gravatar from 'components/gravatar';
import Flag from 'components/flag';
import OrderStatus from 'components/order-status';
import { Section } from 'layout/section';
import { MINUTE, withResources } from 'fresh-data-plugin';

class OrdersPanel extends Component {
	constructor() {
		super( ...arguments );
		this.state = { edits: {} };
		this.setEdits = this.setEdits.bind( this );
	}

	setEdits( edits ) {
		this.setState( prevState => ( { edits: { ...prevState.edits, ...edits } } ) );
	}

	renderActionButtons( order ) {
		if ( 'processing' === order.status ) {
			const onClick = this.props.doFulfill( this.setEdits );
			return (
				<div>
					<Button isDefault value={ order.id } onClick={ onClick }>
						{ __( 'Begin fulfillment', 'wc-admin' ) }
					</Button>
				</div>
			);
		}
		return null;
	}

	render() {
		const { orders, isPageLoading } = this.props;
		const { edits } = this.state;

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
					{ isPageLoading ? (
						<p>Loading</p>
					) : (
						<Fragment>
							{ orders.map( ( order, i ) => {
								const editedOrder = { ...order, ...edits[ order.id ] };
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
										actions={ this.renderActionButtons( editedOrder ) }
									>
										<OrderStatus order={ editedOrder } />
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
}

OrdersPanel.propTypes = {
	orders: PropTypes.array.isRequired,
};

OrdersPanel.defaultProps = {
	orders: [],
	isPageLoading: false,
};

export default compose( [
	withResources(
		'wc-api',
		selectors => {
			const { getOrdersPage, isOrdersPageLoading } = selectors;

			// TODO: Actually support pagination.
			const pageParams = { page: 1, per_page: 100 };

			const orders = getOrdersPage( { freshness: 5 * MINUTE }, pageParams );
			const isPageLoading = isOrdersPageLoading( pageParams );

			return {
				orders,
				isPageLoading,
			};
		},
		mutations => {
			const doFulfill = setEdits => event => {
				const id = event.target.value;

				// Set optimistic interim "edit" state.
				setEdits( { [ id ]: { status: 'completed' } } );

				mutations
					.fulfillOrder( id )
					.then( () => {
						// TODO: Display confirmation notification?
						// Clear optimistic interim state.
						setEdits( { [ id ]: undefined } );
					} )
					.catch( error => {
						// Clear optimistic interim state.
						setEdits( { [ id ]: undefined } );
						// TODO: Some kind of error notification
						console.log( `error on order #${ id }:`, error ); // eslint-disable-line no-console
					} );
			};

			return {
				doFulfill,
			};
		}
	),
] )( OrdersPanel );
