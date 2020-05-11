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
	public function are_there_products() {
		return $this->get_product_count() > 0;
	}

	/**
	 * Returns the number of products.
	 *
	 * @return integer The number of products.
	 */
	public function get_product_count() {
		global $wpdb;

		return $wpdb->get_var(
			"
				SELECT COUNT(*)
				FROM wp_posts AS posts
				WHERE posts.post_type = 'product'
				AND posts.post_status = 'publish'
			"
		);
	}
}
