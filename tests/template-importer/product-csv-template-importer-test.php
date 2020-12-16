<?php
/**
 * Unit tests for the ProductCSVTemplateTest class.
 *
 * @package WooCommerce\Admin.
 */

use \Automattic\WooCommerce\Admin\ProductCSVTemplateImporter;

/**
 * Class WC_Product_CSV_Importer_Test
 */
class Product_CSV_Template_Importer_Test extends WP_UnitTestCase {

	/**
	 * Setup test data. Called before every test.
	 */
	public function setUp() {
		parent::setUp();

		$this->user = $this->factory->user->create(
			array(
				'role' => 'administrator',
			)
		);
	}
	/**
	 * Test the update_product method on ProductCSVTemplateImporter
	 */
	public function test_update_new_product_with_template_data() {
		wp_set_current_user( $this->user );
		$csv_file = dirname( __FILE__ ) . '/sample.csv';

		$post_id = wp_insert_post(
			array(
				'post_title'  => __( 'Auto Draft' ),
				'post_type'   => 'product',
				'post_status' => 'auto-draft',
			)
		);
		$importer  = new ProductCSVTemplateImporter( $csv_file, array( 'parse' => true ) );
		$importer->update_product( $post_id );

		$post    = get_post( $post_id );
		$this->assertEquals( 'auto-draft', $post->post_status );
		$product = wc_get_product_object( 'simple', $post_id );
		$this->assertEquals( 'simple', $product->get_type() );

		$parsed_data = $importer->get_parsed_data();
		$this->assertEquals( 20, $product->get_regular_price() );
		$this->assertEquals( $parsed_data[0]['description'], $product->get_description() );
	}
}
