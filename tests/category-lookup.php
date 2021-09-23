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

	public function get_category_parent_id( $category_id ) {
		global $wpdb;

		return wp_parse_id_list(
			$wpdb->get_col(
				$wpdb->prepare(
					"SELECT category_tree_id FROM $wpdb->wc_category_lookup WHERE category_id = %d",
					$category_id
				)
			)
		);
	}

	public function test_product_category_edit_should_update_table() {
		$insert_parent = wp_insert_term( 'test_parent', 'product_cat' );
		$insert_parent2 = wp_insert_term( 'test_parent_2', 'product_cat' );
		$insert_child = wp_insert_term( 'test_child', 'product_cat', array(
			'parent' => $insert_parent['term_id']
		) );
		CategoryLookup::instance()->init();

		wp_update_term( $insert_child['term_id'], 'product_cat', array(
			'slug' => 'test'
		) );
		$child_parent_ids = $this->get_category_parent_id( $insert_child['term_id'] );
		$this->assertCount( 2, $child_parent_ids );

		$this->assertContains( $insert_parent['term_id'], $child_parent_ids );
		wp_update_term( $insert_parent['term_id'], 'product_cat', array(
			'parent' => $insert_parent2['term_id']
		) );
		$parent_parent_ids = $this->get_category_parent_id( $insert_parent['term_id'] );

		$this->assertCount( 2, $parent_parent_ids );
		$this->assertContains( $insert_parent2['term_id'], $parent_parent_ids );
	}
}
