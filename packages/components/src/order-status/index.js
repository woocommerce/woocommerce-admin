/**
 * External dependencies
 */
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createElement } from '@wordpress/element';

/**
 * Use `OrderStatus` to display a badge with human-friendly text describing the current order status.
 *
 * @param {Object} props
 * @param {Object} props.order
 * @param {string} props.className
 * @param {Object} props.orderStatusMap
 * @return {Object} -
 */
const OrderStatus = ( { order, className, orderStatusMap } ) => {
	const { status } = order;
	const classes = classnames( 'woocommerce-order-status', className );
	const indicatorClasses = classnames(
		'woocommerce-order-status__indicator',
		{
			[ 'is-' + status ]: true,
		}
	);
	const label = orderStatusMap[ status ] || status;
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
	/**
	 * A map of status to label for order statuses.
	 */
	orderStatusMap: PropTypes.object,
};

export default OrderStatus;
