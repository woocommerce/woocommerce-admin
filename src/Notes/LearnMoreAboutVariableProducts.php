<?php
/**
 * WooCommerce Admin learn more about variable products note provider
 *
 * Adds a note when the store owner adds the first product.
 *
 * @package WooCommerce\Admin
 */

namespace Automattic\WooCommerce\Admin\Notes;

defined( 'ABSPATH' ) || exit;

/**
 * Class AddingAndManangingProducts
 *
 * @package Automattic\WooCommerce\Admin\Notes
 */
class LearnMoreAboutVariableProducts {
	/**
	 * Note traits.
	 */
	use NoteTraits;

	/**
	 * Name of the note for use in the database.
	 */
	const NOTE_NAME = 'wc-admin-learn-more-about-variable-products';

	/**
	 * Get the note.
	 *
	 * @return Note|null
	 */
	public static function get_note() {

		$query = new \WC_Product_Query(
			array(
				'limit'    => 1,
				'paginate' => true,
				'return'   => 'ids',
				'status'   => array( 'publish' ),
			)
		);

		// The store must have at least one product.
		$products = $query->get_products();
		if ( 0 === $products->total ) {
			return;
		}

		$note = new Note();
		$note->set_title( __( 'Learn more about variable products', 'woocommerce-admin' ) );
		$note->set_content(
			__(
				'Variable products are a powerful product type that lets you offer a set of variations on a product, with control over prices, stock, image and more for each variation. They can be used for a product like a shirt, where you can offer a large, medium and small and in different colors.',
				'woocommerce-admin'
			)
		);
		$note->set_content_data( (object) array() );
		$note->set_type( Note::E_WC_ADMIN_NOTE_INFORMATIONAL );
		$note->set_name( self::NOTE_NAME );
		$note->set_source( 'woocommerce-admin' );
		$note->add_action(
			'learn-more',
			__( 'Learn more', 'woocommerce-admin' ),
			'https://docs.woocommerce.com/document/variable-product/?utm_source=inbox'
		);

		return $note;
	}
}
