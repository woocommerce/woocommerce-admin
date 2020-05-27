<?php
/**
 * Handles $data setup for products.
 *
 * @package WooCommerce Admin/Classes
 */

namespace Automattic\WooCommerce\Admin\RemoteInboxNotifications;

defined( 'ABSPATH' ) || exit;

use \Automattic\WooCommerce\Admin\PluginsProvider\PluginsProvider;
use \Automattic\WooCommerce\Admin\RemoteInboxNotifications\SpecRunner;

/**
 * Handles $data setup for products.
 */
class DataSetupForProducts {
	/**
	 * Initialize the class
	 */
	public static function init() {
		add_action( 'product_page_product_importer', array( __CLASS__, 'run_on_product_importer' ) );
		add_action( 'transition_post_status', array( __CLASS__, 'run_on_transition_post_status' ), 10, 3 );
	}

	/**
	 * Set initial $data values.
	 *
	 * @param $data object The $data object.
	 */
	public static function init_data( &$data ) {
		$data->there_were_no_products = ! self::are_there_products();
		$data->there_are_now_products = ! $data->there_were_no_products;
	}

	/**
	 * Are there products query.
	 *
	 * @return bool
	 */
	private static function are_there_products() {
		$product_query = new \WC_Product_Query( array( 'limit' => -1 ) );
		$product_count = count( $product_query->get_products() );

		return $product_count > 0;
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

		$data                         = RemoteInboxNotificationsEngine::get_data();
		$data->there_are_now_products = self::are_there_products();
		update_option( RemoteInboxNotificationsEngine::DATA_OPTION_NAME, $data );

		RemoteInboxNotificationsEngine::run();
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

		$data                         = RemoteInboxNotificationsEngine::get_data();
		$data->there_are_now_products = self::are_there_products();
		update_option( RemoteInboxNotificationsEngine::DATA_OPTION_NAME, $data );

		RemoteInboxNotificationsEngine::run();
	}
}
