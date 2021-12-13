/**
 * External dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import PropTypes from 'prop-types';
import interpolateComponents from 'interpolate-components';
import {
	EmptyContent,
	Flag,
	H,
	Link,
	OrderStatus,
	Section,
} from '@woocommerce/components';
import { getNewPath } from '@woocommerce/navigation';
import { getAdminLink, getSetting } from '@woocommerce/wc-admin-settings';
import { ITEMS_STORE_NAME } from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';

/**
 * Internal dependencies
 */
import {
	ActivityCard,
	ActivityCardPlaceholder,
} from '~/activity-panel/activity-card';
import './style.scss';

function recordOrderEvent( eventName ) {
	recordEvent( `activity_panel_orders_${ eventName }`, {} );
}

const renderEmptyCard = () => {
	return (
		<>
			<ActivityCard
				className="woocommerce-empty-activity-card"
				title=""
				icon=""
			>
				<span
					className="woocommerce-order-empty__success-icon"
					role="img"
					aria-labelledby="woocommerce-order-empty-message"
				>
					🎉
				</span>
				<H id="woocommerce-order-empty-message">
					{ __(
						'You’ve fulfilled all your orders',
						'woocommerce-admin'
					) }
				</H>
			</ActivityCard>
			<Link
				href={ 'edit.php?post_type=shop_order' }
				onClick={ () => recordOrderEvent( 'orders_manage' ) }
				className="woocommerce-layout__activity-panel-outbound-link woocommerce-layout__activity-panel-empty"
				type="wp-admin"
			>
				{ __( 'Manage all orders', 'woocommerce-admin' ) }
			</Link>
		</>
	);
};

function renderOrders( orders ) {
	if ( orders.length === 0 ) {
		return renderEmptyCard();
	}

	const getCustomerString = ( order ) => {
		const { first_name: firstName, last_name: lastName } =
			order.customer || {};

		if ( ! firstName && ! lastName ) {
			return '';
		}

		const name = [ firstName, lastName ].join( ' ' );
		return `{{customerLink}}${ name }{{/customerLink}}`;
	};

	const orderCardTitle = ( order ) => {
		const { id: orderId, number: orderNumber, customer } = order;
		let customerUrl = null;
		if ( customer && customer.customer_id ) {
			customerUrl = window.wcAdminFeatures.analytics
				? getNewPath( {}, '/analytics/customers', {
						filter: 'single_customer',
						customers: customer.customer_id,
				  } )
				: getAdminLink(
						'user-edit.php?user_id=' + customer.customer_id
				  );
		}

		return (
			<>
				{ interpolateComponents( {
					mixedString: sprintf(
						__(
							'{{orderLink}}Order #%(orderNumber)s{{/orderLink}} %(customerString)s',
							'woocommerce-admin'
						),
						{
							orderNumber,
							customerString: getCustomerString( order ),
						}
					),
					components: {
						orderLink: (
							<Link
								href={ getAdminLink(
									'post.php?action=edit&post=' + orderId
								) }
								onClick={ () =>
									recordOrderEvent( 'order_number' )
								}
								type="wp-admin"
							/>
						),
						destinationFlag:
							customer && customer.country ? (
								<Flag
									code={ customer && customer.country }
									round={ false }
								/>
							) : null,
						customerLink: customerUrl ? (
							<Link
								href={ customerUrl }
								onClick={ () =>
									recordOrderEvent( 'customer_name' )
								}
								type="wc-admin"
							/>
						) : (
							<span />
						),
					},
				} ) }
			</>
		);
	};

	const cards = [];
	orders.forEach( ( order ) => {
		const {
			date_created_gmt: dateCreatedGmt,
			products,
			id: orderId,
		} = order;
		const productsCount = products ? products.length : 0;

		cards.push(
			<ActivityCard
				key={ orderId }
				className="woocommerce-order-activity-card"
				title={ orderCardTitle( order ) }
				date={ dateCreatedGmt }
				onClick={ ( { target } ) => {
					recordOrderEvent( 'orders_begin_fulfillment' );
					if ( ! target.href ) {
						window.location.href = getAdminLink(
							`post.php?action=edit&post=${ orderId }`
						);
					}
				} }
				subtitle={
					<div>
						<span>
							{ sprintf(
								_n(
									'%d product',
									'%d products',
									productsCount,
									'woocommerce-admin'
								),
								productsCount
							) }
						</span>
						<span>{ order.total_formatted }</span>
					</div>
				}
			>
				<OrderStatus
					order={ order }
					orderStatusMap={ getSetting( 'orderStatuses', {} ) }
				/>
			</ActivityCard>
		);
	} );
	return (
		<>
			{ cards }
			<Link
				href={ 'edit.php?post_type=shop_order' }
				className="woocommerce-layout__activity-panel-outbound-link"
				onClick={ () => recordOrderEvent( 'orders_manage' ) }
				type="wp-admin"
			>
				{ __( 'Manage all orders', 'woocommerce-admin' ) }
			</Link>
		</>
	);
}

function OrdersPanel( { countUnreadOrders, orderStatuses } ) {
	const actionableOrdersQuery = useMemo(
		() => ( {
			page: 1,
			per_page: 5,
			status: orderStatuses,
			_fields: [
				'id',
				'number',
				'status',
				'total_formatted',
				'customer',
				'products',
				'customer_id',
				'date_created_gmt',
			],
		} ),
		[ orderStatuses ]
	);
	const { orders = [], isRequesting, isError } = useSelect( ( select ) => {
		const { getItems, getItemsError, isResolving } = select(
			ITEMS_STORE_NAME
		);

		if ( ! orderStatuses.length && countUnreadOrders === 0 ) {
			return { isRequesting: false };
		}

		/* eslint-disable @wordpress/no-unused-vars-before-return */
		const orderItems = getItems( 'orders', actionableOrdersQuery, null );

		const isRequestingActionable = isResolving( 'getItems', [
			'orders',
			actionableOrdersQuery,
		] );

		if (
			isRequestingActionable ||
			countUnreadOrders === null ||
			orderItems === null
		) {
			return {
				isError: Boolean(
					getItemsError( 'orders', actionableOrdersQuery )
				),
				isRequesting: true,
				orderStatuses,
			};
		}

		const actionableOrders = orderItems
			? Array.from( orderItems.values() )
			: orderItems;

		return {
			orders: actionableOrders,
			isError: Boolean( getItemsError( 'orders', actionableOrders ) ),
			isRequesting: isRequestingActionable,
			orderStatuses,
		};
	} );

	if ( isError ) {
		if ( ! orderStatuses.length && window.wcAdminFeatures.analytics ) {
			return (
				<EmptyContent
					title={ __(
						"You currently don't have any actionable statuses. " +
							'To display orders here, select orders that require further review in settings.',
						'woocommerce-admin'
					) }
					actionLabel={ __( 'Settings', 'woocommerce-admin' ) }
					actionURL={ getAdminLink(
						'admin.php?page=wc-admin&path=/analytics/settings'
					) }
				/>
			);
		}

		const title = __(
			'There was an error getting your orders. Please try again.',
			'woocommerce-admin'
		);
		const actionLabel = __( 'Reload', 'woocommerce-admin' );
		const actionCallback = () => {
			// @todo Add tracking for how often an error is displayed, and the reload action is clicked.
			window.location.reload();
		};

		return (
			<>
				<EmptyContent
					title={ title }
					actionLabel={ actionLabel }
					actionURL={ null }
					actionCallback={ actionCallback }
				/>
			</>
		);
	}

	return (
		<>
			<Section>
				{ isRequesting ? (
					<ActivityCardPlaceholder
						className="woocommerce-order-activity-card"
						hasAction
						hasDate
						lines={ 1 }
					/>
				) : (
					renderOrders( orders )
				) }
			</Section>
		</>
	);
}

OrdersPanel.propTypes = {
	isError: PropTypes.bool,
	isRequesting: PropTypes.bool,
	countUnreadOrders: PropTypes.number,
	orders: PropTypes.array.isRequired,
	orderStatuses: PropTypes.array,
};

OrdersPanel.defaultProps = {
	orders: [],
	isError: false,
	isRequesting: false,
};

export default OrdersPanel;
