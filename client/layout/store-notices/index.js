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
		const { paymentMethods, queryString } = this.props;
		const isPaymentPage = queryString.task
			? queryString.task === 'payments'
			: false;
		return ! Object.keys( paymentMethods ).length && isPaymentPage;
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

		const optionNames = [
			'woocommerce_stripe_alipay_settings',
			'woocommerce_cheque_settings',
			'woocommerce_paypal_settings',
			'woocommerce_stripe_sepa_settings',
			'woocommerce_stripe_bancontact_settings',
			'woocommerce_stripe_sofort_settings',
			'woocommerce_stripe_giropay_settings',
			'woocommerce_stripe_eps_settings',
			'woocommerce_stripe_ideal_settings',
			'woocommerce_stripe_p24_settings',
			'woocommerce_stripe_multibanco_settings',
			'woocommerce_stripe_settings',
			'woocommerce_ppec_paypal_settings',
			'woocommerce_payfast_settings',
			'woocommerce_square_credit_card_settings',
			'woocommerce_kco_settings',
			'woocommerce_cod_settings',
			'woocommerce_bacs_settings',
			'woocommerce_woocommerce_payments_settings',
			'woocommerce_klarna_payments_settings',
		];

		const options = optionNames.reduce( ( result, name ) => {
			result[ name ] = getOption( name );
			return result;
		}, {} );

		const paymentMethods = {};
		for ( const prop in options ) {
			if ( options[ prop ] && options[ prop ].enabled === 'yes' ) {
				paymentMethods[ prop ] = options[ prop ];
			}
		}

		return {
			paymentMethods,
		};
	} )
)( StoreWarnings );
