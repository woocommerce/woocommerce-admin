<?php


namespace Automattic\WooCommerce\Admin\Features\OnboardingTasks\Tasks;

use Automattic\WooCommerce\Admin\Features\Features;
use Automattic\WooCommerce\Admin\Features\OnboardingTasks\Tasks\Payments;
use Automattic\WooCommerce\Admin\Features\OnboardingTasks\Tasks\WooCommercePayments;

/**
 * Payments Task
 */
class AdditionalPayments extends Payments {

	/**
	 * ID.
	 *
	 * @return string
	 */
	public function get_id() {
		return 'payments';
	}

	/**
	 * Title.
	 *
	 * @return string
	 */
	public function get_title() {
		return __( 'Set up additional payment providers', 'woocommerce-admin' );
	}

	/**
	 * Content.
	 *
	 * @return string
	 */
	public function get_content() {
		return __(
			'Choose payment providers and enable payment methods at checkout.',
			'woocommerce-admin'
		);
	}

	/**
	 * Time.
	 *
	 * @return string
	 */
	public function get_time() {
		return __( '2 minutes', 'woocommerce-admin' );
	}

	/**
	 * Task completion.
	 *
	 * @return bool
	 */
	public function is_complete() {
		return self::has_gateways();
	}

	/**
	 * Task visibility.
	 *
	 * @return bool
	 */
	public function can_view() {
		if ( ! Features::is_enabled( 'payment-gateway-suggestions' ) ) {
			// Hide task if feature not enabled.
			return false;
		}

		$woocommerce_payments = new WooCommercePayments();

		if ( ! $woocommerce_payments->is_requested() || ! $woocommerce_payments->is_supported() || ! $woocommerce_payments->is_connected() ) {
			// Hide task if WC Pay is not installed via OBW, or is not connected, or the store is located in a country that is not supported by WC Pay.
			return false;
		}

		return true;
	}

	/**
	 * Check if the store has any enabled gateways.
	 *
	 * @return bool
	 */
	public static function has_gateways() {
		$gateways         = WC()->payment_gateways->get_available_payment_gateways();
		$enabled_gateways = array_filter(
			$gateways,
			function( $gateway ) {
				return 'yes' === $gateway->enabled && 'woocommerce_payments' !== $gateway->id;
			}
		);

		return ! empty( $enabled_gateways );
	}
}
