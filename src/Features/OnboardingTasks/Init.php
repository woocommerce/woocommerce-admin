<?php
/**
 * WooCommerce Onboarding Tasks
 * NOTE: DO NOT edit this file in WooCommerce core, this is generated from woocommerce-admin.
 */

namespace Automattic\WooCommerce\Admin\Features\OnboardingTasks;

use \Automattic\WooCommerce\Admin\Loader;
use Automattic\WooCommerce\Admin\API\Reports\Taxes\Stats\DataStore as TaxDataStore;
use Automattic\WooCommerce\Admin\Features\OnboardingTasks\Tasks\Tax;

/**
 * Contains the logic for completing onboarding tasks.
 */
class Init {
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
		add_action( 'add_option_woocommerce_task_list_tracked_completed_tasks', array( $this, 'track_task_completion' ), 10, 2 );
		add_action( 'update_option_woocommerce_task_list_tracked_completed_tasks', array( $this, 'track_task_completion' ), 10, 2 );
		add_action( 'admin_enqueue_scripts', array( $this, 'update_option_extended_task_list' ), 15 );
		add_filter( 'pre_option_woocommerce_task_list_hidden', array( $this, 'get_deprecated_options' ), 10, 2 );
		add_filter( 'pre_option_woocommerce_extended_task_list_hidden', array( $this, 'get_deprecated_options' ), 10, 2 );
		add_action( 'pre_update_option_woocommerce_task_list_hidden', array( $this, 'update_deprecated_options' ), 10, 3 );
		add_action( 'pre_update_option_woocommerce_extended_task_list_hidden', array( $this, 'update_deprecated_options' ), 10, 3 );

		if ( ! is_admin() ) {
			return;
		}

		add_action( 'admin_enqueue_scripts', array( $this, 'add_media_scripts' ) );
		// Old settings injection.
		// Run after Onboarding.
		add_filter( 'woocommerce_components_settings', array( __CLASS__, 'component_settings' ), 30 );
		// New settings injection.
		add_filter( 'woocommerce_admin_shared_settings', array( $this, 'component_settings' ), 30 );

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

		// @todo We may want to consider caching some of these and use to check against
		// task completion along with cache busting for active tasks.
		$settings['automatedTaxSupportedCountries'] = Tax::get_automated_tax_supported_countries();
		$settings['hasHomepage']                    = self::check_task_completion( 'homepage' ) || 'classic' === get_option( 'classic-editor-replace' );
		$settings['hasProducts']                    = self::check_task_completion( 'products' );
		$settings['stylesheet']                     = get_option( 'stylesheet' );
		$settings['taxJarActivated']                = class_exists( 'WC_Taxjar' );
		$settings['themeMods']                      = get_theme_mods();

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
			! count( TaskLists::get_visible() )
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
			! count( TaskLists::get_visible() )
		) {
			return;
		}
		$extended_tasks_list_items            = get_option( 'woocommerce_extended_task_list_items', array() );
		$registered_extended_tasks_list_items = apply_filters( 'woocommerce_get_registered_extended_tasks', array() );
		if ( $registered_extended_tasks_list_items !== $extended_tasks_list_items ) {
			update_option( 'woocommerce_extended_task_list_items', $registered_extended_tasks_list_items );
			$extended_list = TaskLists::get_list( 'extended' );
			if ( ! $extended_list ) {
				return;
			}
			$extended_list->show();
		}
	}

	/**
	 * Get the values from the correct source when attempting to retrieve deprecated options.
	 *
	 * @param string $pre_option Pre option value.
	 * @param string $option Option name.
	 * @return string
	 */
	public function get_deprecated_options( $pre_option, $option ) {
		if ( defined( 'WC_ADMIN_INSTALLING' ) && WC_ADMIN_INSTALLING ) {
			return $pre_option;
		};

		$hidden = get_option( 'woocommerce_task_list_hidden_lists', array() );
		switch ( $option ) {
			case 'woocommerce_task_list_hidden':
				return in_array( 'setup', $hidden, true ) ? 'yes' : 'no';
			case 'woocommerce_extended_task_list_hidden':
				return in_array( 'extended', $hidden, true ) ? 'yes' : 'no';
		}
	}

	/**
	 * Updates the new option names when deprecated options are updated.
	 * This is a temporary fallback until we can fully remove the old task list components.
	 *
	 * @param string $value New value.
	 * @param string $old_value Old value.
	 * @param string $option Option name.
	 * @return string
	 */
	public function update_deprecated_options( $value, $old_value, $option ) {
		switch ( $option ) {
			case 'woocommerce_task_list_hidden':
				$task_list = TaskLists::get_list( 'setup' );
				if ( ! $task_list ) {
					return;
				}
				$update = 'yes' === $value ? $task_list->hide() : $task_list->show();
				delete_option( 'woocommerce_task_list_hidden' );
				return false;
			case 'woocommerce_extended_task_list_hidden':
				$task_list = TaskLists::get_list( 'extended' );
				if ( ! $task_list ) {
					return;
				}
				$update = 'yes' === $value ? $task_list->hide() : $task_list->show();
				delete_option( 'woocommerce_extended_task_list_hidden' );
				return false;
		}
	}
}
