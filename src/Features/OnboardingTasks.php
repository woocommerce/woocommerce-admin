<?php
/**
 * WooCommerce Onboarding Tasks
 * NOTE: DO NOT edit this file in WooCommerce core, this is generated from woocommerce-admin.
 */

namespace Automattic\WooCommerce\Admin\Features;

use \Automattic\WooCommerce\Admin\Loader;
use Automattic\WooCommerce\Admin\API\Reports\Taxes\Stats\DataStore as TaxDataStore;
use Automattic\WooCommerce\Admin\Features\RemoteFreeExtensions\Init as RemoteFreeExtensions;
use Automattic\WooCommerce\Admin\PluginsHelper;

/**
 * Contains the logic for completing onboarding tasks.
 */
class OnboardingTasks {
	/**
	 * Class instance.
	 *
	 * @var OnboardingTasks instance
	 */
	protected static $instance = null;

	/**
	 * Name of the active task transient.
	 *
	 * @var string
	 */
	const ACTIVE_TASK_TRANSIENT = 'wc_onboarding_active_task';

	/**
	 * Get class instance.
	 */
	public static function get_instance() {
		if ( ! self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor
	 */
	public function __construct() {
		// This hook needs to run when options are updated via REST.
		add_action( 'add_option_woocommerce_task_list_complete', array( $this, 'track_completion' ), 10, 2 );
		add_action( 'add_option_woocommerce_extended_task_list_complete', array( $this, 'track_extended_completion' ), 10, 2 );
		add_action( 'add_option_woocommerce_task_list_tracked_completed_tasks', array( $this, 'track_task_completion' ), 10, 2 );
		add_action( 'update_option_woocommerce_task_list_tracked_completed_tasks', array( $this, 'track_task_completion' ), 10, 2 );
		add_action( 'admin_enqueue_scripts', array( $this, 'update_option_extended_task_list' ), 15 );
		add_action( 'woocommerce_admin_onboarding_tasks', array( $this, 'add_task_dismissal' ), 20 );

		if ( ! is_admin() ) {
			return;
		}

		add_action( 'admin_enqueue_scripts', array( $this, 'add_media_scripts' ) );
		// Old settings injection.
		// Run after Onboarding.
		add_filter( 'woocommerce_components_settings', array( __CLASS__, 'component_settings' ), 30 );
		// New settings injection.
		add_filter( 'woocommerce_shared_settings', array( $this, 'component_settings' ), 30 );

		add_action( 'admin_init', array( $this, 'set_active_task' ), 5 );
		add_action( 'admin_enqueue_scripts', array( $this, 'add_onboarding_product_notice_admin_script' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'add_onboarding_homepage_notice_admin_script' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'add_onboarding_tax_notice_admin_script' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'add_onboarding_product_import_notice_admin_script' ) );
	}

	/**
	 * Enqueue scripts and styles.
	 */
	public function add_media_scripts() {
		wp_enqueue_media();
	}



	/**
	 * Get task item data for settings filter.
	 *
	 * @return array
	 */
	public static function get_settings() {
		$settings            = array();
		$wc_pay_is_connected = false;
		if ( class_exists( '\WC_Payments' ) ) {
			$wc_payments_gateway = \WC_Payments::get_gateway();
			$wc_pay_is_connected = method_exists( $wc_payments_gateway, 'is_connected' )
				? $wc_payments_gateway->is_connected()
				: false;
		}

		$gateways         = WC()->payment_gateways->get_available_payment_gateways();
		$enabled_gateways = array_filter(
			$gateways,
			function( $gateway ) {
				return 'yes' === $gateway->enabled;
			}
		);

		// @todo We may want to consider caching some of these and use to check against
		// task completion along with cache busting for active tasks.
		$settings['automatedTaxSupportedCountries'] = self::get_automated_tax_supported_countries();
		$settings['hasHomepage']                    = self::check_task_completion( 'homepage' ) || 'classic' === get_option( 'classic-editor-replace' );
		$settings['hasPaymentGateway']              = ! empty( $enabled_gateways );
		$settings['enabledPaymentGateways']         = array_keys( $enabled_gateways );
		$settings['hasPhysicalProducts']            = count(
			wc_get_products(
				array(
					'virtual' => false,
					'limit'   => 1,
				)
			)
		) > 0;
		$settings['hasProducts']                    = self::check_task_completion( 'products' );
		$settings['isAppearanceComplete']           = get_option( 'woocommerce_task_list_appearance_complete' );
		$settings['isTaxComplete']                  = self::check_task_completion( 'tax' );
		$settings['shippingZonesCount']             = count( \WC_Shipping_Zones::get_zones() );
		$settings['stripeSupportedCountries']       = self::get_stripe_supported_countries();
		$settings['stylesheet']                     = get_option( 'stylesheet' );
		$settings['taxJarActivated']                = class_exists( 'WC_Taxjar' );
		$settings['themeMods']                      = get_theme_mods();
		$settings['wcPayIsConnected']               = $wc_pay_is_connected;

		return $settings;
	}

	/**
	 * Add task items to component settings.
	 *
	 * @param array $settings Component settings.
	 * @return array
	 */
	public function component_settings( $settings ) {
		// Bail early if not on a wc-admin powered page, or task list shouldn't be shown.
		if (
			! \Automattic\WooCommerce\Admin\Loader::is_admin_page() ||
			! \Automattic\WooCommerce\Admin\Features\Onboarding::should_show_tasks()
		) {
			return $settings;
		}

		// If onboarding isn't enabled this will throw warnings.
		if ( ! isset( $settings['onboarding'] ) ) {
			$settings['onboarding'] = array();
		}

		$settings['onboarding'] = array_merge(
			$settings['onboarding'],
			array(
				'tasksStatus' => self::get_settings(),
			)
		);

		return $settings;
	}

	/**
	 * Temporarily store the active task to persist across page loads when neccessary (such as publishing a product). Most tasks do not need to do this.
	 */
	public static function set_active_task() {
		if ( isset( $_GET[ self::ACTIVE_TASK_TRANSIENT ] ) ) { // phpcs:ignore csrf ok.
			$task = sanitize_title_with_dashes( wp_unslash( $_GET[ self::ACTIVE_TASK_TRANSIENT ] ) ); // phpcs:ignore csrf ok.

			if ( self::check_task_completion( $task ) ) {
				return;
			}

			set_transient(
				self::ACTIVE_TASK_TRANSIENT,
				$task,
				DAY_IN_SECONDS
			);
		}
	}

	/**
	 * Get the name of the active task.
	 *
	 * @return string
	 */
	public static function get_active_task() {
		return get_transient( self::ACTIVE_TASK_TRANSIENT );
	}

	/**
	 * Check for active task completion, and clears the transient.
	 *
	 * @return bool
	 */
	public static function is_active_task_complete() {
		$active_task = self::get_active_task();

		if ( ! $active_task ) {
			return false;
		}

		if ( self::check_task_completion( $active_task ) ) {
			delete_transient( self::ACTIVE_TASK_TRANSIENT );
			return true;
		}

		return false;
	}

	/**
	 * Check for task completion of a given task.
	 *
	 * @param string $task Name of task.
	 * @return bool
	 */
	public static function check_task_completion( $task ) {
		switch ( $task ) {
			case 'products':
				$products = wp_count_posts( 'product' );
				return (int) $products->publish > 0;
			case 'homepage':
				$homepage_id = get_option( 'woocommerce_onboarding_homepage_post_id', false );
				if ( ! $homepage_id ) {
					return false;
				}
				$post      = get_post( $homepage_id );
				$completed = $post && 'publish' === $post->post_status;
				return $completed;
			case 'tax':
				return 'yes' === get_option( 'wc_connect_taxes_enabled' ) ||
					count( TaxDataStore::get_taxes( array() ) ) > 0 ||
					false !== get_option( 'woocommerce_no_sales_tax' );
		}
		return false;
	}

	/**
	 * Hooks into the product page to add a notice to return to the task list if a product was added.
	 *
	 * @param string $hook Page hook.
	 */
	public static function add_onboarding_product_notice_admin_script( $hook ) {
		global $post;
		if (
			'post.php' !== $hook ||
			'product' !== $post->post_type ||
			'products' !== self::get_active_task() ||
			! self::is_active_task_complete()
		) {
			return;
		}

		$script_assets_filename = Loader::get_script_asset_filename( 'wp-admin-scripts', 'onboarding-product-notice' );
		$script_assets          = require WC_ADMIN_ABSPATH . WC_ADMIN_DIST_JS_FOLDER . 'wp-admin-scripts/' . $script_assets_filename;

		wp_enqueue_script(
			'onboarding-product-notice',
			Loader::get_url( 'wp-admin-scripts/onboarding-product-notice', 'js' ),
			array_merge( array( WC_ADMIN_APP ), $script_assets ['dependencies'] ),
			WC_ADMIN_VERSION_NUMBER,
			true
		);
	}

	/**
	 * Hooks into the post page to display a different success notice and sets the active page as the site's home page if visted from onboarding.
	 *
	 * @param string $hook Page hook.
	 */
	public static function add_onboarding_homepage_notice_admin_script( $hook ) {
		global $post;
		if ( 'post.php' === $hook && 'page' === $post->post_type && isset( $_GET[ self::ACTIVE_TASK_TRANSIENT ] ) && 'homepage' === $_GET[ self::ACTIVE_TASK_TRANSIENT ] ) { // phpcs:ignore csrf ok.
			$script_assets_filename = Loader::get_script_asset_filename( 'wp-admin-scripts', 'onboarding-homepage-notice' );
			$script_assets          = require WC_ADMIN_ABSPATH . WC_ADMIN_DIST_JS_FOLDER . 'wp-admin-scripts/' . $script_assets_filename;

			wp_enqueue_script(
				'onboarding-homepage-notice',
				Loader::get_url( 'wp-admin-scripts/onboarding-homepage-notice', 'js' ),
				array_merge( array( WC_ADMIN_APP ), $script_assets ['dependencies'] ),
				WC_ADMIN_VERSION_NUMBER,
				true
			);
		}
	}

	/**
	 * Adds a notice to return to the task list when the save button is clicked on tax settings pages.
	 */
	public static function add_onboarding_tax_notice_admin_script() {
		$page = isset( $_GET['page'] ) ? $_GET['page'] : ''; // phpcs:ignore csrf ok, sanitization ok.
		$tab  = isset( $_GET['tab'] ) ? $_GET['tab'] : ''; // phpcs:ignore csrf ok, sanitization ok.

		if (
			'wc-settings' === $page &&
			'tax' === $tab &&
			'tax' === self::get_active_task() &&
			! self::is_active_task_complete()
		) {
			$script_assets_filename = Loader::get_script_asset_filename( 'wp-admin-scripts', 'onboarding-tax-notice' );
			$script_assets          = require WC_ADMIN_ABSPATH . WC_ADMIN_DIST_JS_FOLDER . 'wp-admin-scripts/' . $script_assets_filename;

			wp_enqueue_script(
				'onboarding-tax-notice',
				Loader::get_url( 'wp-admin-scripts/onboarding-tax-notice', 'js' ),
				array_merge( array( WC_ADMIN_APP ), $script_assets ['dependencies'] ),
				WC_ADMIN_VERSION_NUMBER,
				true
			);
		}
	}

	/**
	 * Adds a notice to return to the task list when the product importeris done running.
	 *
	 * @param string $hook Page hook.
	 */
	public function add_onboarding_product_import_notice_admin_script( $hook ) {
		$step = isset( $_GET['step'] ) ? $_GET['step'] : ''; // phpcs:ignore csrf ok, sanitization ok.
		if ( 'product_page_product_importer' === $hook && 'done' === $step && 'product-import' === self::get_active_task() ) {
			delete_transient( self::ACTIVE_TASK_TRANSIENT );

			$script_assets_filename = Loader::get_script_asset_filename( 'wp-admin-scripts', 'onboarding-product-import-notice' );
			$script_assets          = require WC_ADMIN_ABSPATH . WC_ADMIN_DIST_JS_FOLDER . 'wp-admin-scripts/' . $script_assets_filename;

			wp_enqueue_script(
				'onboarding-product-import-notice',
				Loader::get_url( 'wp-admin-scripts/onboarding-product-import-notice', 'js' ),
				array_merge( array( WC_ADMIN_APP ), $script_assets ['dependencies'] ),
				WC_ADMIN_VERSION_NUMBER,
				true
			);
		}
	}

	/**
	 * Get an array of countries that support automated tax.
	 *
	 * @return array
	 */
	public static function get_automated_tax_supported_countries() {
		// https://developers.taxjar.com/api/reference/#countries .
		$tax_supported_countries = array_merge(
			array( 'US', 'CA', 'AU' ),
			WC()->countries->get_european_union_countries()
		);

		return $tax_supported_countries;
	}

	/**
	 * Returns a list of Stripe supported countries. This method can be removed once merged to core.
	 *
	 * @return array
	 */
	public static function get_stripe_supported_countries() {
		// https://stripe.com/global.
		return array(
			'AU',
			'AT',
			'BE',
			'BG',
			'BR',
			'CA',
			'CY',
			'CZ',
			'DK',
			'EE',
			'FI',
			'FR',
			'DE',
			'GR',
			'HK',
			'IN',
			'IE',
			'IT',
			'JP',
			'LV',
			'LT',
			'LU',
			'MY',
			'MT',
			'MX',
			'NL',
			'NZ',
			'NO',
			'PL',
			'PT',
			'RO',
			'SG',
			'SK',
			'SI',
			'ES',
			'SE',
			'CH',
			'GB',
			'US',
			'PR',
		);
	}

	/**
	 * Returns a list of WooCommerce Payments supported countries.
	 *
	 * @return array
	 */
	public static function get_woocommerce_payments_supported_countries() {
		return array(
			'US',
			'PR',
			'AU',
			'CA',
			'DE',
			'ES',
			'FR',
			'GB',
			'IE',
			'IT',
			'NZ',
		);
	}

	/**
	 * Records an event when all tasks are completed in the task list.
	 *
	 * @param mixed $old_value Old value.
	 * @param mixed $new_value New value.
	 */
	public static function track_completion( $old_value, $new_value ) {
		if ( $new_value ) {
			wc_admin_record_tracks_event( 'tasklist_tasks_completed' );
		}
	}

	/**
	 * Records an event when all tasks are completed in the extended task list.
	 *
	 * @param mixed $old_value Old value.
	 * @param mixed $new_value New value.
	 */
	public static function track_extended_completion( $old_value, $new_value ) {
		if ( $new_value ) {
			wc_admin_record_tracks_event( 'extended_tasklist_tasks_completed' );
		}
	}

	/**
	 * Records an event for individual task completion.
	 *
	 * @param mixed $old_value Old value.
	 * @param mixed $new_value New value.
	 */
	public static function track_task_completion( $old_value, $new_value ) {
		$old_value       = is_array( $old_value ) ? $old_value : array();
		$new_value       = is_array( $new_value ) ? $new_value : array();
		$untracked_tasks = array_diff( $new_value, $old_value );

		foreach ( $untracked_tasks as $task ) {
			wc_admin_record_tracks_event( 'tasklist_task_completed', array( 'task_name' => $task ) );
		}
	}

	/**
	 * Update registered extended task list items.
	 */
	public static function update_option_extended_task_list() {
		if (
			! \Automattic\WooCommerce\Admin\Loader::is_admin_page() ||
			! \Automattic\WooCommerce\Admin\Features\Onboarding::should_show_tasks()
		) {
			return;
		}
		$extended_tasks_list_items            = get_option( 'woocommerce_extended_task_list_items', array() );
		$registered_extended_tasks_list_items = apply_filters( 'woocommerce_get_registered_extended_tasks', array() );
		if ( $registered_extended_tasks_list_items !== $extended_tasks_list_items ) {
			update_option( 'woocommerce_extended_task_list_items', $registered_extended_tasks_list_items );
			update_option( 'woocommerce_extended_task_list_hidden', 'no' );
		}
	}

	/**
	 * Get the task lists.
	 *
	 * @return array
	 */
	public static function get_task_lists() {
		$profiler_data         = get_option( Onboarding::PROFILE_DATA_OPTION, array() );
		$installed_plugins     = PluginsHelper::get_installed_plugin_slugs();
		$product_types         = isset( $profiler_data['product_types'] ) ? $profiler_data['product_types'] : array();
		$allowed_product_types = Onboarding::get_allowed_product_types();
		$purchaseable_products = array();
		$remaining_products    = array();
		foreach ( $product_types as $product_type ) {
			if ( ! isset( $allowed_product_types[ $product_type ]['slug'] ) ) {
				continue;
			}

			$purchaseable_products[] = $allowed_product_types[ $product_type ];

			if ( ! in_array( $allowed_product_types[ $product_type ]['slug'], $installed_plugins, true ) ) {
				$remaining_products[] = $allowed_product_types[ $product_type ]['label'];
			}
		}
		$business_extensions = $profiler_data['business_extensions'];
		$product_query       = new \WC_Product_Query(
			array(
				'limit'  => 1,
				'return' => 'ids',
				'status' => array( 'publish' ),
			)
		);
		$products            = $product_query->get_products();
		$wc_pay_is_connected = false;
		if ( class_exists( '\WC_Payments' ) ) {
			$wc_payments_gateway = \WC_Payments::get_gateway();
			$wc_pay_is_connected = method_exists( $wc_payments_gateway, 'is_connected' )
				? $wc_payments_gateway->is_connected()
				: false;
		}
		$gateways                = WC()->payment_gateways->get_available_payment_gateways();
		$enabled_gateways        = array_filter(
			$gateways,
			function( $gateway ) {
				return 'yes' === $gateway->enabled;
			}
		);
		$can_use_automated_taxes = ! class_exists( 'WC_Taxjar' ) &&
			in_array( WC()->countries->get_base_country(), self::get_automated_tax_supported_countries(), true );

		$marketing_extension_bundles        = RemoteFreeExtensions::get_extensions(
			array(
				'reach',
				'grow',
			)
		);
		$has_installed_marketing_extensions = array_reduce(
			$marketing_extension_bundles,
			function( $has_installed, $bundle ) {
				if ( $has_installed ) {
					return true;
				}
				foreach ( $bundle['plugins'] as $plugin ) {
					if ( $plugin->is_installed ) {
						return true;
					}
				}
				return false;
			},
			false
		);

		$task_lists = array(
			array(
				'id'         => 'setup',
				'isComplete' => get_option( 'woocommerce_task_list_complete' ) === 'yes',
				'isHidden'   => get_option( 'woocommerce_task_list_hidden' ) === 'yes',
				'title'      => __( 'Get ready to start selling', 'woocommerce-admin' ),
				'tasks'      => array(
					array(
						'id'          => 'store_details',
						'title'       => __( 'Store details', 'woocommerce-admin' ),
						'content'     => __(
							'Your store address is required to set the origin country for shipping, currencies, and payment options.',
							'woocommerce-admin'
						),
						'actionLabel' => __( "Let's go", 'woocommerce-admin' ),
						'actionUrl'   => '/setup-wizard',
						'isComplete'  => isset( $profiler_data['completed'] ) && true === $profiler_data['completed'],
						'isVisible'   => true,
						'time'        => __( '4 minutes', 'woocommerce-admin' ),
					),
					array(
						'id'            => 'purchase',
						'title'         => count( $remaining_products ) === 1
							? sprintf(
								/* translators: %1$s: list of product names comma separated, %2%s the last product name */
								__(
									'Add %s to my store',
									'woocommerce-admin'
								),
								$remaining_products[0]
							)
							: __(
								'Add paid extensions to my store',
								'woocommerce-admin'
							),
						'content'       => count( $remaining_products ) === 1
							? $purchaseable_products[0]['description']
							: sprintf(
								/* translators: %1$s: list of product names comma separated, %2%s the last product name */
								__(
									'Good choice! You chose to add %1$s and %2$s to your store.',
									'woocommerce-admin'
								),
								implode( ', ', array_slice( $remaining_products, 0, -1 ) ) . ( count( $remaining_products ) > 2 ? ',' : '' ),
								end( $remaining_products )
							),
						'actionLabel'   => __( 'Purchase & install now', 'woocommerce-admin' ),
						'actionUrl'     => '/setup-wizard',
						'isComplete'    => count( $remaining_products ) === 0,
						'isVisible'     => count( $purchaseable_products ) > 0,
						'time'          => __( '2 minutes', 'woocommerce-admin' ),
						'isDismissable' => true,
					),
					array(
						'id'         => 'products',
						'title'      => __( 'Add my products', 'woocommerce-admin' ),
						'content'    => __(
							'Start by adding the first product to your store. You can add your products manually, via CSV, or import them from another service.',
							'woocommerce-admin'
						),
						'isComplete' => 0 !== count( $products ),
						'isVisible'  => true,
						'time'       => __( '1 minute per product', 'woocommerce-admin' ),
					),
					array(
						'id'          => 'woocommerce-payments',
						'title'       => __( 'Get paid with WooCommerce Payments', 'woocommerce-admin' ),
						'content'     => __(
							"You're only one step away from getting paid. Verify your business details to start managing transactions with WooCommerce Payments.",
							'woocommerce-admin'
						),
						'actionLabel' => __( 'Finish setup', 'woocommerce-admin' ),
						'expanded'    => true,
						'isComplete'  => $wc_pay_is_connected,
						'isVisible'   => in_array( 'woocommerce-payments', $business_extensions, true ) &&
							in_array( 'woocommerce-payments', $installed_plugins, true ) &&
							in_array( WC()->countries->get_base_country(), self::get_woocommerce_payments_supported_countries(), true ),
						'time'        => __( '2 minutes', 'woocommerce-admin' ),
					),
					array(
						'id'         => 'payments',
						'title'      => __( 'Set up payments', 'woocommerce-admin' ),
						'content'    => __(
							'Choose payment providers and enable payment methods at checkout.',
							'woocommerce-admin'
						),
						'isComplete' => ! empty( $enabled_gateways ),
						'isVisible'  => Features::is_enabled( 'payment-gateway-suggestions' ) &&
							(
								! in_array( 'woocommerce-payments', $business_extensions, true ) ||
								! in_array( 'woocommerce-payments', $installed_plugins, true ) ||
								! in_array( WC()->countries->get_base_country(), self::get_woocommerce_payments_supported_countries(), true )
							),
						'time'       => __( '2 minutes', 'woocommerce-admin' ),
					),
					array(
						'id'          => 'tax',
						'title'       => __( 'Set up tax', 'woocommerce-admin' ),
						'content'     => $can_use_automated_taxes
							? __(
								'Good news! WooCommerce Services and Jetpack can automate your sales tax calculations for you.',
								'woocommerce-admin'
							)
							: __(
								'Set your store location and configure tax rate settings.',
								'woocommerce-admin'
							),
						'actionLabel' => $can_use_automated_taxes
							? __( 'Yes please', 'woocommerce-admin' )
							: __( "Let's go", 'woocommerce-admin' ),
						'isComplete'  => get_option( 'wc_connect_taxes_enabled' ) ||
							count( TaxDataStore::get_taxes( array() ) ) > 0 ||
							false !== get_option( 'woocommerce_no_sales_tax' ),
						'isVisible'   => true,
						'time'        => __( '1 minute', 'woocommerce-admin' ),
					),
					array(
						'id'          => 'shipping',
						'title'       => __( 'Set up shipping', 'woocommerce-admin' ),
						'content'     => __(
							"Set your store location and where you'll ship to.",
							'woocommerce-admin'
						),
						'actionUrl'   => count( \WC_Shipping_Zones::get_zones() ) > 0
							? admin_url( 'admin.php?page=wc-settings&tab=shipping' )
							: null,
						'actionLabel' => __( "Let's go", 'woocommerce-admin' ),
						'isComplete'  => count( \WC_Shipping_Zones::get_zones() ) > 0,
						'isVisible'   => in_array( 'physical', $product_types, true ) ||
							count(
								wc_get_products(
									array(
										'virtual' => false,
										'limit'   => 1,
									)
								)
							) > 0,
						'time'        => __( '1 minute', 'woocommerce-admin' ),
					),
					array(
						'id'         => 'marketing',
						'title'      => __( 'Set up marketing tools', 'woocommerce-admin' ),
						'content'    => __(
							'Add recommended marketing tools to reach new customers and grow your business',
							'woocommerce-admin'
						),
						'isComplete' => $has_installed_marketing_extensions,
						'isVisible'  => Features::is_enabled( 'remote-free-extensions' ) && count( $marketing_extension_bundles ) > 0,
						'time'       => __( '1 minute', 'woocommerce-admin' ),
					),
					array(
						'id'          => 'appearance',
						'title'       => __( 'Personalize my store', 'woocommerce-admin' ),
						'content'     => __(
							'Add your logo, create a homepage, and start designing your store.',
							'woocommerce-admin'
						),
						'actionLabel' => __( "Let's go", 'woocommerce-admin' ),
						'isComplete'  => get_option( 'woocommerce_task_list_appearance_complete' ),
						'isVisible'   => true,
						'time'        => __( '2 minutes', 'woocommerce-admin' ),
					),
				),
			),
		);

		return apply_filters( 'woocommerce_admin_onboarding_tasks', $task_lists );
	}

	/**
	 * Retrieve a task list by ID.
	 *
	 * @param String $task_list_id Task list ID.
	 *
	 * @return Object
	 */
	public static function get_task_list_by_id( $task_list_id ) {
		foreach ( self::get_task_lists() as $task_list ) {
			if ( $task_list['id'] === $task_list_id ) {
				return $task_list;
			}
		}

		return null;
	}

	/**
	 * Retrieve single task.
	 *
	 * @param String $task_id Task ID.
	 * @param String $task_list_id Task list ID.
	 *
	 * @return Object
	 */
	public static function get_task_by_id( $task_id, $task_list_id = null ) {

		$task_list = $task_list_id ? self::get_task_list_by_id( $task_list_id ) : null;

		if ( $task_list_id && ! $task_list ) {
			return null;
		}

		$tasks_to_search = $task_list_id ? $task_list['tasks'] : array_reduce(
			self::get_task_lists(),
			function ( $all, $curr ) {

				return array_merge( $all, $curr['tasks'] );
			},
			array()
		);

		foreach ( $tasks_to_search as $task ) {
			if ( $task_id === $task['id'] ) {
				return $task;
			}
		}

		return null;
	}

	/**
	 * Add the dismissal status to each task.
	 *
	 * @param array $task_lists Task lists.
	 * @return array
	 */
	public function add_task_dismissal( $task_lists ) {
		$dismissed = get_option( 'woocommerce_task_list_dismissed_tasks', array() );

		foreach ( $task_lists as $task_list_key => $task_list ) {
			foreach ( $task_list['tasks'] as $task_key => $task ) {
				if ( isset( $task['isDismissable'] ) && in_array( $task['id'], $dismissed, true ) ) {
					$task_lists[ $task_list_key ]['tasks'][ $task_key ]['isDismissed'] = true;
				}
			}
		}

		return $task_lists;
	}
}
