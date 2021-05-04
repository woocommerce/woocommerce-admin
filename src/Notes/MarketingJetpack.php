<?php
/**
 * WooCommerce Admin Jetpack Marketing Note Provider.
 *
 * Adds notes to the merchant's inbox concerning Jetpack Backup.
 */

namespace Automattic\WooCommerce\Admin\Notes;

use Automattic\Jetpack\Constants;

defined( 'ABSPATH' ) || exit;

/**
 * Suggest Jetpack Backup to Woo users.
 *
 * Note: This should probably live in the Jetpack plugin in the future.
 * @see  https://developer.woocommerce.com/2020/10/16/using-the-admin-notes-inbox-in-woocommerce/
 */
class MarketingJetpack {
	/**
	 * Note traits.
	 */
	use NoteTraits;

	/**
	 * Name of the note for use in the database.
	 */
	const NOTE_NAME = 'wc-admin-marketing-jetpack-backup';

	/**
	 * Maybe add a note on Jetpack Backups for Jetpack sites older than a week without Backups.
	 */
	public static function possibly_add_note() {
		/**
		 * Check if Jetpack is active.
		 */
		if ( ! in_array( 'jetpack/jetpack.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {
			return;
		}

		if ( ! self::wc_admin_active_for( WEEK_IN_SECONDS ) || ! self::can_be_added() ) {
			return;
		}

		$data_store = \WC_Data_Store::load( 'admin-note' );

		// Do we already have this note?
		$note_ids = $data_store->get_notes_with_name( self::NOTE_NAME );
		if ( ! empty( $note_ids ) ) {

			$note_id = array_pop( $note_ids );
			$note    = Notes::get_note( $note_id );
			if ( false === $note ) {
				return;
			}

			// If Jetpack Backups was purchased after the note was created, mark this note as actioned.
			if ( self::has_backups() && Note::E_WC_ADMIN_NOTE_ACTIONED !== $note->get_status() ) {
				$note->set_status( Note::E_WC_ADMIN_NOTE_ACTIONED );
				$note->save();
			}

			return;
		}

		// Add note.
		$note = self::get_note();
		$note->save();
	}

	/**
	 * Get the note.
	 */
	public static function get_note() {
		$note = new Note();
		$note->set_title( __( 'TEST Protect your WooCommerce Store with Jetpack Backup.', 'woocommerce-admin' ) );
		$note->set_content( __( 'Store downtime means lost sales. One-click restores get you back online quickly if something goes wrong.', 'woocommerce-admin' ) );
		$note->set_type( Note::E_WC_ADMIN_NOTE_MARKETING );
		$note->set_name( self::NOTE_NAME );
		$note->set_content_data( (object) array() );
		$note->set_source( 'woocommerce-admin-notes' );
		$note->add_action(
			'jetpack-backup-woocommerce',
			__( 'Get backups', 'woocommerce-admin' ),
			esc_url( 'https://jetpack.com/upgrade/backup-woocommerce/' ), // TODO utm?
			Note::E_WC_ADMIN_NOTE_ACTIONED
		);
		return $note;
	}

	/**
	 * Check if Jetpack Backups are installed.
	 */
	protected static function has_backups() {
		// Jetpack::is_module_active( 'backup' );!
		$products = get_option( 'jetpack_site_products', array() );
		// TODO
		return false;
	}

}
