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
		add_action( 'woocommerce_note_action_get-woocommerce-payments', array( $this, 'install_woocommerce_payments' ) );
	}

	/**
	 * Install Woocommerce Payments.
	 */
	public function install_woocommerce_payments() {
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
	}
}
