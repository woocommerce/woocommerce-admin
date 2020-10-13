<?php

namespace Automattic\WooCommerce\Admin\Notes;

use Automattic\WooCommerce\Admin\API\Plugins;

defined( 'ABSPATH' ) || exit;

/**
 * Install_WooCommerce_Payments.
 */
class Install_WooCommerce_Payments {
	/**
	 * Note traits.
	 */
	use NoteTraits;

	/**
	 * Attach hooks.
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'install_woocommerce_payments' ) );
	}

	/**
	 * Install Woocommerce Payments.
	 */
	public function install_woocommerce_payments() {
		// TODO: Need to validate this request more strictly since we're taking install actions directly?
		/* phpcs:disable WordPress.Security.NonceVerification */
		if (
			! isset( $_GET['page'] ) ||
			'wc-admin' !== $_GET['page'] ||
			! isset( $_GET['action'] ) ||
			'install-woocommerce-payments' !== $_GET['action']
		) {
			return;
		}
		/* phpcs:enable */

		// Install WooCommerce Payments
		$installer = new Plugins();

		$install_request = array( 'plugins' => 'woocommerce-payments' );
		$result = $installer->install_plugins( $install_request );
		if ( is_wp_error( $result ) ) {
			return;
		}

		$activate_request = array( 'plugins' => 'woocommerce-payments' );
		$installer->activate_plugins( $activate_request );
		if ( is_wp_error( $result ) ) {
			return;
		}

		// TODO: WooCommerce Payments is installed at this point, so we could link straight into the on-boarding flow.
		$wcpay_settings_url = admin_url( 'admin.php?page=wc-admin&path=/payments/connect' );
		wp_safe_redirect( $wcpay_settings_url );
		exit;
	}
}
