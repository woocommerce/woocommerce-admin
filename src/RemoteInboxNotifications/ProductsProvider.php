<?php
/**
 * Provider for product-related queries and operations.
 *
 * @package WooCommerce Admin/Classes
 */

namespace Automattic\WooCommerce\Admin\RemoteInboxNotifications;

defined( 'ABSPATH' ) || exit;

/**
 * Provider for product-related queries and operations.
 */
class ProductsProvider {
	/**
	 * Returns whether or not there are any products.
	 *
	 * @return boolean If there are any products.
	 */
	public static function are_there_products() {
		global $wpdb;

		$count = $wpdb->get_var(
			"
				SELECT COUNT(*)
				FROM wp_posts AS posts
				WHERE posts.post_type = 'product'
				AND posts.post_status = 'publish'
			"
		);

		return $count > 0;
	}
}
