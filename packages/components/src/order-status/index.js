/** @format */

/**
 * External dependencies
 */
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { getSetting } from '@woocommerce/wc-admin-settings';

/**
 * Use `OrderStatus` to display a badge with human-friendly text describing the current order status.
 *
 * @return { object } -
 */
const OrderStatus = ( { order, className } ) => {
	const { status } = order;
	const orderStatuses = getSetting( 'orderStatuses', {} );
	const classes = classnames( 'woocommerce-order-status', className );
	const indicatorClasses = classnames( 'woocommerce-order-status__indicator', {
		[ 'is-' + status ]: true,
	} );
	const label = orderStatuses[ status ] || status;
	return (
		<div className={ classes }>
			<span className={ indicatorClasses } />
			{ label }
		</div>
	);
};

OrderStatus.propTypes = {
	/**
	 * The order to display a status for.
	 */
	order: PropTypes.object.isRequired,
	/**
	 * Additional CSS classes.
	 */
	className: PropTypes.string,
};

export default OrderStatus;
