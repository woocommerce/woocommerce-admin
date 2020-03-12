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
	 * Jetpack version to test the display manager.
	 *
	 * @var string
	 */
	private $jetpack_version = '4.4';

	/**
	 * Stores the default WordPress options stored in teh database.
	 *
	 * @var array
	 */
	private static $modified_options = array(
		'woocommerce_default_country'              => null,
		'woocommerce_currency'                     => null,
		'woocommerce_shipping_ab_active'           => null,
		'woocommerce_shipping_dismissed_timestamp' => null,
		'active_plugins'                           => null,
	);

	/**
	 * Setup for every single test.
	 */
	public function setUp() {
		parent::setup();

		$this->shipping_label_banner_display_rules = new ShippingLabelBannerDisplayRules();

		$this->active_plugins['jetpack']      = 'jetpack/jetpack.php';
		$this->active_plugins['wcs']          = 'woocommerce-services/woocommerce-services.php';
		$this->active_plugins['fedex']        = 'woocommerce-shipping-fedex/woocommerce-shipping-fedex.php';
		$this->active_plugins['ups']          = 'woocommerce-shipping-ups/woocommerce-shipping-ups.php';
		$this->active_plugins['shippingeasy'] = 'woocommerce-shippingeasy/woocommerce-shippingeasy.php';
		$this->active_plugins['shipstation']  = 'woocommerce-shipstation/woocommerce-shipstation.php';

		$this->set_active_plugins();

		update_option( 'woocommerce_default_country', 'US' );
		update_option( 'woocommerce_currency', 'USD' );
		update_option( 'woocommerce_shipping_ab_active', null );

	}

	/**
	 * Setup for the whole test class.
	 */
	public static function setUpBeforeClass() {
		parent::setUpBeforeClass();

		foreach ( self::$modified_options as $option_name => $option_value ) {
			self::$modified_options[ $option_name ] = $option_value;
		}
	}

	/**
	 * Cleans up test data once all test have run.
	 */
	public static function tearDownAfterClass() {
		parent::tearDownAfterClass();

		foreach ( self::$modified_options as $option_name => $option_value ) {
			update_option( $option_name, $option_value );
		}
	}

	/**
	 * Test if the banner is displayed when Jetpack is active and connected.
	 */
	public function test_display_banner_if_jetpack_connected() {
		$this->with_order(
			function( $that ) {
				$that->assertEquals( $that->shipping_label_banner_display_rules->should_display_banner( $this->jetpack_version ), true );
			}
		);
	}

	/**
	 * Test if the banner is hidden when Jetpack is not active.
	 */
	public function test_if_banner_hidden_when_jetpack_disconnected() {
		unset( $this->active_plugins['jetpack'] );
		$this->set_active_plugins();

		$this->assertEquals( $this->shipping_label_banner_display_rules->should_display_banner( $this->jetpack_version ), false );
	}

	/**
	 * Test if the banner is displayed when an A/B test flag is enabled.
	 */
	public function test_display_banner_if_a_b_flag_enabled() {
		update_option( 'woocommerce_shipping_ab_active', true );

		$this->assertEquals( $this->shipping_label_banner_display_rules->should_display_banner( $this->jetpack_version ), true );
	}

	/**
	 * Test if the banner is hidden when a dismiss banner option is checked.
	 */
	public function test_if_banner_hidden_when_dismiss_option_enabled() {
		update_option( 'woocommerce_shipping_dismissed_timestamp', -1 );

		$this->assertEquals( $this->shipping_label_banner_display_rules->should_display_banner( $this->jetpack_version ), false );
	}

	/**
	 * Test if the banner is hidden when a dismiss banner option is checked for 24 hours.
	 */
	public function test_if_banner_hidden_when_dismiss_after_24h_option_enabled() {
		$two_hours_from_now = time() + ( 2 * 60 * 60 );
		update_option( 'woocommerce_shipping_dismissed_timestamp', $two_hours_from_now );

		$this->assertEquals( $this->shipping_label_banner_display_rules->should_display_banner( $this->jetpack_version ), false );
	}

	/**
	 * Test if the banner is hidden when a dismiss banner option is checked for 24 hours.
	 */
	public function test_show_banner_if_dismiss_after_24h_option_enabled_has_expired() {
		$this->with_order(
			function( $that ) {
				$two_hours_from_now = time() - ( 2 * 60 * 60 );
				update_option( 'woocommerce_shipping_dismissed_timestamp', $two_hours_from_now );

				$that->assertEquals( $that->shipping_label_banner_display_rules->should_display_banner( $this->jetpack_version ), true );
			}
		);
	}

	/**
	 * Test if the banner is displayed when the order has physical items.
	 */
	public function test_display_banner_if_order_with_physical_items() {
		$this->with_order(
			function( $that ) {
				$that->assertEquals( $that->shipping_label_banner_display_rules->should_display_banner( $this->jetpack_version ), true );
			}
		);
	}

	/**
	 * Test if the banner is displayed when the store is in the US.
	 */
	public function test_if_banner_hidden_when_store_is_not_in_us() {
		$this->with_order(
			function( $that ) {
				update_option( 'woocommerce_default_country', 'ES' );

				$that->assertEquals( $that->shipping_label_banner_display_rules->should_display_banner( $this->jetpack_version ), false );
			}
		);
	}

	/**
	 * Test if the banner is displayed when the store's currency is USD.
	 */
	public function test_if_banner_hidden_when_currency_is_not_usd() {
		$this->with_order(
			function( $that ) {
				update_option( 'woocommerce_currency', 'EUR' );

				$that->assertEquals( $that->shipping_label_banner_display_rules->should_display_banner( $this->jetpack_version ), false );
			}
		);
	}

	/**
	 * Test if the banner is hidden when WooCommerce Services is not installed.
	 */
	public function test_if_banner_hidden_when_wcs_not_installed() {
		unset( $this->active_plugins['wcs'] );

		$this->set_active_plugins();

		$this->assertEquals( $this->shipping_label_banner_display_rules->should_display_banner( $this->jetpack_version ), false );
	}

	/**
	 * Test if the banner is hidden when WooCommerce Fedex Shipping is not installed.
	 */
	public function test_if_banner_hidden_when_fedex_not_installed() {
		unset( $this->active_plugins['fedex'] );

		$this->set_active_plugins();

		$this->assertEquals( $this->shipping_label_banner_display_rules->should_display_banner( $this->jetpack_version ), false );
	}

	/**
	 * Test if the banner is hidden when WooCommerce UPS Shipping is not installed.
	 */
	public function test_if_banner_hidden_when_ups_not_installed() {
		unset( $this->active_plugins['ups'] );

		$this->set_active_plugins();

		$this->assertEquals( $this->shipping_label_banner_display_rules->should_display_banner( $this->jetpack_version ), false );
	}

	/**
	 * Test if the banner is hidden when WooCommerce ShippingEasy Shipping is not installed.
	 */
	public function test_if_banner_hidden_when_shippingeasy_not_installed() {
		unset( $this->active_plugins['shippingeasy'] );

		$this->set_active_plugins();

		$this->assertEquals( $this->shipping_label_banner_display_rules->should_display_banner( $this->jetpack_version ), false );
	}

	/**
	 * Test if the banner is hidden when WooCommerce Shipstation Shipping is not installed.
	 */
	public function test_if_banner_hidden_when_shipstation_not_installed() {
		unset( $this->active_plugins['shipstation'] );

		$this->set_active_plugins();

		$this->assertEquals( $this->shipping_label_banner_display_rules->should_display_banner( $this->jetpack_version ), false );
	}

	/**
	 * Test if the banner is displayed when Jetpack version is at least 4.4.
	 */
	public function test_if_banner_hidden_when_jetpack_version_is_new() {
		$this->with_order(
			function( $that ) {
				$that->assertEquals( $that->shipping_label_banner_display_rules->should_display_banner( $this->jetpack_version ), true );
			}
		);
	}

	/**
	 * Test if the banner is hidden when Jetpack version is not at least 4.4.
	 */
	public function test_if_banner_hidden_when_jetpack_version_is_old() {
		$this->jetpack_version = '4.3';
		$this->assertEquals( $this->shipping_label_banner_display_rules->should_display_banner( $this->jetpack_version ), false );
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

		return $order;
	}

	/**
	 * Destroys the test order.
	 *
	 * @param object $order to destroy.
	 */
	private function destroy_order( $order ) {
		foreach ( $order->get_items() as $item ) {
			$product = $item->get_product();
			$product->delete( true );
			$item->delete( true );
		}

		$order->delete( true );
	}

	/**
	 * Wraps a function call within an order creation/deletion lifecycle.
	 *
	 * @param function $callback to wrap.
	 */
	private function with_order( $callback ) {
		$order = $this->create_order();

		$callback( $this );

		$this->destroy_order( $order );
	}

	/**
	 * Manages the state of installed plugins
	 */
	private function set_active_plugins() {
		update_option( 'active_plugins', array_values( $this->active_plugins ) );
	}
}
