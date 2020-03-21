<?php
/**
 * WooCommerce Notes Filters
 *
 * @package WooCommerce Admin/Classes
 */

 namespace Automattic\WooCommerce\Admin\Notes;

 defined( 'ABSPATH' ) || exit;

 /**
  * This class adds actions to manage notes.
  */
class WC_Admin_Notes_Filters {
	/**
	 * Init
	 */
	public function init() {
		add_action( 'activate_jetpack/jetpack.php', array( $this, 'action_jetpack_woocommerce_services_activation_note' ) );
		add_action( 'activate_woocommerce-services/woocommerce-services.php', array( $this, 'action_jetpack_woocommerce_services_activation_note' ) );
	}

	/**
	 * Remove (by actioning) activation note for Jetpack and WooCommerce Services
	 * when either of those plugins are activated.
	 */
	public function action_jetpack_woocommerce_services_activation_note() {
		WC_Admin_Notes_Install_Jetpack_And_WooCommerce_Services_Plugin::action_install_jetpack_and_woocommerce_services_note();
	}
}
