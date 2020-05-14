<?php
/**
 * Handles running specs
 *
 * @package WooCommerce Admin/Classes
 */

namespace Automattic\WooCommerce\Admin\RemoteInboxNotifications;

defined( 'ABSPATH' ) || exit;

use \Automattic\WooCommerce\Admin\PluginsProvider\PluginsProvider;

/**
 * Remote Inbox Notifications engine.
 * This goes through the specs and runs (creates admin notes) for those
 * specs that are able to be triggered.
 */
class RemoteInboxNotificationsEngine {
	const SPECS_OPTION_NAME = 'wc_remote_inbox_notifications_specs';
	const DATA_OPTION_NAME  = 'wc_remote_inbox_notifications_data';

	/**
	 * Initialize the engine.
	 */
	public static function init() {
		add_action( 'activated_plugin', array( __CLASS__, 'run' ) );
		add_action( 'deactivated_plugin', array( __CLASS__, 'run_on_deactivated_plugin' ), 10, 1 );
		add_action( 'product_page_product_importer', array( __CLASS__, 'run_on_product_importer' ) );
		add_action( 'transition_post_status', array( __CLASS__, 'run_on_transition_post_status' ), 10, 3 );

		// Pre-fetch data so it has the correct initial values.
		self::get_data();
	}

	/**
	 * Go through the specs and run them.
	 */
	public static function run() {
		$specs = get_option( self::SPECS_OPTION_NAME );

		if ( false === $specs ) {
			// We are running too early, need to poll data sources first.
			return;
		}

		$data = self::get_data();

		foreach ( $specs as $spec ) {
			SpecRunner::run_spec( $spec, $data );
		}
	}

	/**
	 * Gets the data option, and does the initial set up if it doesn't already
	 * exist.
	 *
	 * @return object The data option.
	 */
	private static function get_data() {
		$data = get_option( self::DATA_OPTION_NAME );

		if ( false === $data ) {
			$data                         = new \stdClass();
			$products_provider            = new ProductsProvider();
			$data->there_were_no_products = ! $products_provider->are_there_products();
			$data->there_are_now_products = ! $data->there_were_no_products;

			add_option( self::DATA_OPTION_NAME, $data );
		}

		return $data;
	}

	/**
	 * The deactivated_plugin hook happens before the option is updated
	 * (https://github.com/WordPress/WordPress/blob/master/wp-admin/includes/plugin.php#L826)
	 * so this captures the deactivated plugin path and pushes it into the
	 * PluginsProvider.
	 *
	 * @param string $plugin Path to the plugin file relative to the plugins directory.
	 */
	public static function run_on_deactivated_plugin( $plugin ) {
		PluginsProvider::set_deactivated_plugin( $plugin );
		self::run();
	}

	/**
	 * Runs on product importer steps.
	 */
	public static function run_on_product_importer() {
		// We're only interested in when the importer completes.
		// phpcs:disable WordPress.Security.NonceVerification.Recommended
		if ( ! isset( $_REQUEST['step'] ) ) {
			return;
		}
		if ( 'done' !== $_REQUEST['step'] ) {
			return;
		}
		// phpcs:enable

		$data                         = self::get_data();
		$products_provider            = new ProductsProvider();
		$data->there_are_now_products = $products_provider->are_there_products();
		update_option( self::DATA_OPTION_NAME, $data );

		self::run();
	}

	/**
	 * Runs when a post status transitions, but we're only interested if it is
	 * a product being published.
	 *
	 * @param string $new_status The new status.
	 * @param string $old_status The old status.
	 * @param Post   $post       The post.
	 */
	public static function run_on_transition_post_status( $new_status, $old_status, $post ) {
		if (
			'product' !== $post->post_type ||
			'publish' !== $new_status ||
			'publish' === $old_status
		) {
			return;
		}

		$data                         = self::get_data();
		$products_provider            = new ProductsProvider();
		$data->there_are_now_products = $products_provider->are_there_products();
		update_option( self::DATA_OPTION_NAME, $data );

		self::run();
	}
}
