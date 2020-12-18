<?php
/**
 * WooCommerce Admin: Add First Product.
 *
 * Adds a note (type `email`) to bring the client back to the store setup flow.
 */

namespace Automattic\WooCommerce\Admin\Notes;

defined( 'ABSPATH' ) || exit;

/**
 * Add_First_Product.
 */
class AddFirstProduct {
	/**
	 * Note traits.
	 */
	use NoteTraits;

	/**
	 * Name of the note for use in the database.
	 */
	const NOTE_NAME = 'wc-admin-add-first-product-note';

	/**
	 * Get the note.
	 *
	 * @return Note
	 */
	public static function get_note() {
		// We want to show the note after three days.
		if ( ! self::wc_admin_active_for( 3 * DAY_IN_SECONDS ) ) {
			return;
		}

		// Don't show if there is a product.
		$query    = new \WC_Product_Query(
			array(
				'limit'  => 1,
				'return' => 'ids',
				'status' => array( 'publish' ),
			)
		);
		$products = $query->get_products();
		if ( 0 !== count( $products ) ) {
			return;
		}

		$content         = __( 'Lorem ipsum dolor sit amet consectetur adipiscing elit, placerat per facilisi netus justo magnis feugiat, parturient montes dis ad cras ut. Vel ultrices nullam suspendisse malesuada maecenas cubilia sollicitudin nec gravida mi, nulla lacinia ridiculus quis phasellus senectus massa himenaeos fringilla, faucibus penatibus tristique rhoncus a ante habitasse enim risus. Primis leo aptent magna platea class natoque bibendum pharetra magnis non phasellus sociis, suscipit luctus vivamus vel sagittis ante placerat molestie venenatis rutrum arcu.', 'woocommerce-admin' );
		$additional_data = array(
			'heading' => 'Add your first product!',
			'role'    => 'administrator',
		);

		$note = new Note();
		$note->set_title( __( 'Store setup', 'woocommerce-admin' ) );
		$note->set_content( $content );
		$note->set_content_data( (object) $additional_data );
		$note->set_type( Note::E_WC_ADMIN_NOTE_EMAIL );
		$note->set_name( self::NOTE_NAME );
		$note->set_source( 'woocommerce-admin' );
		$note->add_action( 'add-first-product', __( 'Add Products', 'woocommerce-admin' ), admin_url( 'admin.php?page=wc-admin&task=products' ) );
		return $note;
	}
}
