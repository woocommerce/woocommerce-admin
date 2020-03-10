<?php
/**
 * Shipping Label Banner Display Rules tests.
 *
 * @package WooCommerce\Tests\Shipping-label-banner-display-rules
 */

use \Automattic\WooCommerce\Admin\Features\ShippingLabelBannerDisplayRules;

/**
 * Class WC_Tests_Shipping_Label_Banner_Display_Rules
 */
class WC_Tests_Shipping_Label_Banner_Display_Rules extends WC_Unit_Test_Case {

	/**
	 * List of active plugins.
	 *
	 * @var array
	 */
	private $active_plugins = array();

	/**
	 * Shipping label banner display rules manager.
	 *
	 * @var object
	 */
	private $shipping_label_banner_display_rules;

	/**
	 * Setup for tests.
	 */
	public function setUp() {
		parent::setup();

		$this->active_plugins['jetpack'] = 'jetpack/jetpack.php';
		$this->active_plugins['wcs']     = 'woocommerce-services/woocommerce-services.php';
		update_option( 'active_plugins', $this->active_plugins );

		$this->shipping_label_banner_display_rules = new ShippingLabelBannerDisplayRules();

		update_option( 'woocommerce_default_country', 'US' );
		update_option( 'woocommerce_currency', 'USD' );
		$this->create_order();
	}

	/**
	 * Test if the banner is displayed when Jetpack is active and connected.
	 */
	public function test_display_banner_if_jetpack_connected() {

		$this->assertEquals( $this->shipping_label_banner_display_rules->should_display_banner(), true );
	}

	/**
	 * Test if the banner is hidden when Jetpack is not active
	 */
	public function test_display_banner_if_jetpack_disconnected() {
		unset( $this->active_plugins['jetpack'] );
		$this->set_active_plugins();

		$this->assertEquals( $this->shipping_label_banner_display_rules->should_display_banner(), false );
	}

	/**
	 * Test if the banner is displayed when an A/B test flag is enabled.
	 */
	public function test_display_banner_if_a_b_flag_enabled() {
		update_option( 'woocommerce_shipping_ab_active', true );

		$this->assertEquals( $this->shipping_label_banner_display_rules->should_display_banner(), true );
	}

	/**
	 * Test if the banner is hidden when a dismiss banner option is checked.
	 */
	public function test_hide_banner_if_dismiss_option_enabled() {
		update_option( 'woocommerce_shipping_dismissed_timestamp', -1 );

		$this->assertEquals( $this->shipping_label_banner_display_rules->should_display_banner(), false );
	}

	/**
	 * Test if the banner is hidden when a dismiss banner option is checked for 24 hours.
	 */
	public function test_hide_banner_if_dismiss_after_24h_option_enabled() {
		$two_hours_from_now = time() + ( 2 * 60 * 60 );
		update_option( 'woocommerce_shipping_dismissed_timestamp', $two_hours_from_now );

		$this->assertEquals( $this->shipping_label_banner_display_rules->should_display_banner(), false );
	}

	/**
	 * Test if the banner is hidden when a dismiss banner option is checked for 24 hours.
	 */
	public function test_show_banner_if_dismiss_after_24h_option_enabled_has_expired() {
		$two_hours_from_now = time() - ( 2 * 60 * 60 );
		update_option( 'woocommerce_shipping_dismissed_timestamp', $two_hours_from_now );

		$this->assertEquals( $this->shipping_label_banner_display_rules->should_display_banner(), true );
	}

	/**
	 * Test if the banner is displayed when the order has physical items.
	 */
	public function test_display_banner_if_order_with_physical_items() {
		$this->assertEquals( $this->shipping_label_banner_display_rules->should_display_banner(), true );
	}

	/**
	 * Test if the banner is displayed when the store is in the US.
	 */
	public function test_display_banner_if_store_is_not_in_us() {
		update_option( 'woocommerce_default_country', 'ES' );

		$this->assertEquals( $this->shipping_label_banner_display_rules->should_display_banner(), false );
	}

	/**
	 * Test if the banner is displayed when the store's currency is USD.
	 */
	public function test_hide_banner_if_currency_is_not_usd() {
		update_option( 'woocommerce_currency', 'EUR' );

		$this->assertEquals( $this->shipping_label_banner_display_rules->should_display_banner(), false );
	}

	/**
	 * Test if the banner is hidden when WooCommerce Services is already installed.
	 */
	public function test_display_banner_if_wcs_not_installed() {
		unset( $this->active_plugins['wcs'] );

		$this->set_active_plugins();

		$this->assertEquals( $this->shipping_label_banner_display_rules->should_display_banner(), false );
	}


	/**
	 * Creates a test order.
	 */
	private function create_order() {
		$product = WC_Helper_Product::create_simple_product();
		$product->set_props( array( 'virtual' => true ) );

		$order      = new WC_Order();
		$order_item = new WC_Order_Item_Product();
		$order_item->set_props( array( 'product' => $product ) );
		$order->add_item( $order_item );
		$order->save();

		global $post;

		// phpcs:disable 	WordPress.WP.GlobalVariablesOverride.Prohibited
		$post     = new \stdClass();
		$post->ID = $order->get_id();
	}

	/**
	 * Manages the state of installed plugins
	 */
	private function set_active_plugins() {
		update_option( 'active_plugins', array_values( $this->active_plugins ) );
	}
}
