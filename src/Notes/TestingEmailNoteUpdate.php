<?php
/**
 * WooCommerce Admin testing note
 *
 * @package WooCommerce\Admin
 */

namespace Automattic\WooCommerce\Admin\Notes;

defined( 'ABSPATH' ) || exit;

/**
 * Testing Email Note Update
 */
class TestingEmailNoteUpdate {
	/**
	 * Note traits.
	 */
	use NoteTraits;

	/**
	 * Name of the note for use in the database.
	 */
	const NOTE_NAME = 'wc-admin-testing-email-note-update';

	/**
	 * Get the note.
	 *
	 * @return Note
	 */
	public static function get_note() {
		$content = __( '<strong>Lorem ipsum</strong> dolor sit amet consectetur adipiscing elit, placerat per facilisi netus justo magnis feugiat, parturient montes dis ad cras ut. Vel ultrices nullam suspendisse malesuada maecenas cubilia sollicitudin nec gravida mi, nulla lacinia ridiculus quis phasellus senectus massa himenaeos fringilla, faucibus penatibus tristique rhoncus a ante habitasse enim risus. Primis leo aptent magna platea class natoque bibendum pharetra magnis non phasellus sociis, suscipit luctus vivamus vel sagittis ante placerat molestie venenatis rutrum arcu.', 'woocommerce-admin' );

		$note = new Note();
		$note->set_title( __( 'Lorem ipsum title', 'woocommerce-admin' ) );
		$note->set_content( $content );
		$note->set_content_data( (object) array( 'heading' => 'Testing note' ) );
		$note->set_image( 'https://woocommerce.com/wp-content/themes/woo/images/logo-woocommerce.svg' );
		$note->set_type( Note::E_WC_ADMIN_NOTE_EMAIL );
		$note->set_name( self::NOTE_NAME );
		$note->set_source( 'woocommerce-admin' );
		$note->add_action( 'testing-action-update', 'Take me to the repo!', 'https://github.com/woocommerce/woocommerce-admin' );
		$note->add_action( 'testing-action-update-internal', 'Take me to an internal URL', admin_url( 'admin.php?page=wc-settings&tab=shipping' ) );
		return $note;
	}
}
