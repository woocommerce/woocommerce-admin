<?php
/**
 * LearnMoreAboutVariableProducts note tests
 *
 * @package WooCommerce\Admin\Tests\Notes
 */

use Automattic\WooCommerce\Admin\Notes\LearnMoreAboutVariableProducts;
use \Automattic\WooCommerce\Admin\Notes\Notes;

/**
 * Class WC_Tests_Marketing_Notes
 */
class WC_Tests_Learn_More_About_Variable_Product extends WC_Unit_Test_Case {

	/**
	 * Tests LearnMoreAboutVariableProducts gets created when a products gets published
	 */
	public function test_adding_note_when_product_gets_published() {
		Notes::delete_all_notes();

		// Given a new product.
		$product = array(
			'post_title'   => 'a product',
			'post_type'    => 'product',
			'post_status'  => 'publish',
			'post_content' => '',
		);

		// When it is published.
		wp_insert_post( $product );

		// Then we should have LearnMoreAboutVariableProducts note.
		$data_store = \WC_Data_Store::load( 'admin-note' );
		$note_ids   = $data_store->get_notes_with_name( LearnMoreAboutVariableProducts::NOTE_NAME );
		$this->assertNotEmpty( $note_ids );
		$this->assertCount( 1, $note_ids );

		$note = Notes::get_note( $note_ids[0] );
		$this->assertEquals( $note->get_name(), LearnMoreAboutVariableProducts::NOTE_NAME );

		// Adding a second product does not create an additional note.
		wp_insert_post( $product );
		$note_ids = $data_store->get_notes_with_name( LearnMoreAboutVariableProducts::NOTE_NAME );
		$this->assertNotEmpty( $note_ids );
		$this->assertCount( 1, $note_ids );
	}


	/**
	 * @dataProvider postProvider
	 *
	 * @param string $product product from provider.
	 */
	public function test_adding_draft_product_and_non_product_post_does_not_add_note( $product ) {
		Notes::delete_all_notes();
		wp_insert_post( $product );

		$data_store = \WC_Data_Store::load( 'admin-note' );
		$note_ids   = $data_store->get_notes_with_name( LearnMoreAboutVariableProducts::NOTE_NAME );
		$this->assertEmpty( $note_ids );
	}

	/**
	 * Post provider for draft product and non-product post type
	 *
	 * @return array a set of posts.
	 */
	public function postProvider() {
		return array(
			array(
				'post_title'   => 'a product',
				'post_type'    => 'not a product',
				'post_status'  => 'publish',
				'post_content' => '',
			),
			array(
				'post_title'   => 'a product',
				'post_type'    => 'product',
				'post_status'  => 'draft',
				'post_content' => '',
			),
		);
	}
}
