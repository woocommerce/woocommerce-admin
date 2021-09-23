<?php
/**
 * CategoryLookup tests
 *
 * @package WooCommerce\Admin\Tests\CategoryLookup
 */

use \Automattic\WooCommerce\Admin\CategoryLookup;

/**
 * WC_Admin_Tests_Admin_Helper Class
 *
 * @package WooCommerce\Admin\Tests\CategoryLookup
 */
class WC_Admin_Tests_Category_Lookup extends WP_UnitTestCase {

	public function test_product_category_edit_should_update_table() {
		$insert = wp_insert_term( 'test_parent', 'product_cat' );
		$insert2 = wp_insert_term( 'test_parent', 'product_cat', array(
			'parent' => $insert['term_id']
		) );
		CategoryLookup::instance()->init();

		$update = wp_update_term( $insert2['term_id'], 'product_cat', array(
			'slug' => 'test'
		) );
	}
}
