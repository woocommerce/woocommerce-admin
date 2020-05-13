<?php
/**
 * Mock product query.
 *
 * @package WooCommerce\Tests\RemoteInboxNotifications
 */

/**
 * Mock product query.
 */
class MockProductQuery {
	/**
	 * Construct the mock product query with the given number of products.
	 *
	 * @param integer $length The number of products.
	 */
	public function __construct( $length ) {
		$this->length = $length;
	}

	/**
	 * Gets the mock products
	 *
	 * @return array
	 */
	public function get_products() {
		$products = array();

		for ( $i = 0; $i < $this->length; $i ++ ) {
			$products[] = $i;
		}

		return $products;
	}
}

