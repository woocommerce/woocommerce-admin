/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import PropTypes from 'prop-types';
import { Notice } from '@wordpress/components';

/**
 * WooCommerce dependencies
 */
import { OPTIONS_STORE_NAME } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import './style.scss';
import withSelect from 'wc-api/with-select';

class StoreWarnings extends Component {
	isVisibleMissingPaimentWarning() {
		const { taskListPayments, queryString } = this.props;
		const isPaymentPage = queryString.task
			? queryString.task === 'payments'
			: false;
		return ! taskListPayments.completed && isPaymentPage;
	}

	render() {
		const showMissingPaimentMethod = this.isVisibleMissingPaimentWarning();

		return (
			showMissingPaimentMethod && (
				<Notice
					className="woocommerce-store-warnings"
					status="warning"
					isDismissible={ false }
				>
					<p>
						Customers cannot place orders at your store until you
						setup and enable a payment method.
					</p>
				</Notice>
			)
		);
	}
}

StoreWarnings.propTypes = {
	/**
	 * The url query string.
	 */
	queryString: PropTypes.object,
};

export default compose(
	withSelect( ( select ) => {
		const { getOption } = select( OPTIONS_STORE_NAME );
		const taskListPayments =
			getOption( 'woocommerce_task_list_payments' ) || {};
		return {
			taskListPayments,
		};
	} )
)( StoreWarnings );
