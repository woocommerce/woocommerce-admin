<?php
/**
 * WooCommerce Admin: Update version reminder note.
 *
 * Creates a note to nudge users to use the newer version when two are installed.
 *
 * @package WooCommerce Admin
 */

namespace Automattic\WooCommerce\Admin\Notes;

defined( 'ABSPATH' ) || exit;

/**
 * WC_Admin_Notes_Update_Version.
 */
class WC_Admin_Notes_Update_Version {
	const NOTE_NAME = 'wc-admin-update-version';

	/**
	 * Creates the note to deactivate the older version.
	 */
	public static function add_note() {
		$data_store = \WC_Data_Store::load( 'admin-note' );
		$note_ids   = $data_store->get_notes_with_name( self::NOTE_NAME );
		if ( ! empty( $note_ids ) ) {
			return;
		}

		$note = new WC_Admin_Note();
		$note->set_title( __( 'Deactivate old WooCommerce Admin version', 'woocommerce-admin' ) );
		$note->set_content( __( 'Your current version of WooCommerce Admin is outdated and a newer version is included with WooCommerce.  We recommend deactivating the plugin and using the stable version included with WooCommerce.', 'woocommerce-admin' ) );
		$note->set_type( WC_Admin_Note::E_WC_ADMIN_NOTE_UPDATE );
		$note->set_icon( 'warning' );
		$note->set_name( self::NOTE_NAME );
		$note->set_content_data( (object) array() );
		$note->set_source( 'woocommerce-admin' );
		$note->add_action(
			'deactivate-feature-plugin',
			__( 'Deactivate', 'woocommerce-admin' ),
			wc_admin_url(),
			'unactioned',
			true
		);
		$note->save();
	}

	/**
	 * Delete the note if the version is higher than the included.
	 */
	public static function delete_note() {
		WC_Admin_Notes::delete_notes_with_name( self::NOTE_NAME );
	}
}
