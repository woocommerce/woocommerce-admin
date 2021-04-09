<?php
/**
 * WC Admin Note Traits
 *
 * WC Admin Note Traits class that houses shared functionality across notes.
 */

namespace Automattic\WooCommerce\Admin\Notes;

defined( 'ABSPATH' ) || exit;

/**
 * NoteTraits class.
 */
trait NoteTraits {
	/**
	 * Test how long WooCommerce Admin has been active.
	 *
	 * @param int $seconds Time in seconds to check.
	 * @return bool Whether or not WooCommerce admin has been active for $seconds.
	 */
	public static function wc_admin_active_for( $seconds ) {
		// Getting install timestamp reference class-wc-admin-install.php.
		$wc_admin_installed = get_option( 'woocommerce_admin_install_timestamp', false );

		if ( false === $wc_admin_installed ) {
			update_option( 'woocommerce_admin_install_timestamp', time() );

			return false;
		}

		return ( ( time() - $wc_admin_installed ) >= $seconds );
	}

	/**
	 * Check if the note has been previously added.
	 *
	 * @throws NotesDisabledException Throws exception when notes are disabled.
	 */
	public static function note_exists() {
		self::check_notes_availability();

		$data_store = \WC_Data_Store::load( 'admin-note' );
		$note_ids   = $data_store->get_notes_with_name( self::NOTE_NAME );
		return ! empty( $note_ids );
	}

	/**
	 * Checks if a note can and should be added.
	 *
	 * @return bool
	 * @throws NotesDisabledException Throws exception when notes are disabled.
	 */
	public static function can_be_added() {
		self::check_notes_availability();

		$note = self::get_note();

		if ( ! $note instanceof Note && ! $note instanceof WC_Admin_Note ) {
			return;
		}

		if ( self::note_exists() ) {
			return false;
		}

		if (
			'no' === get_option( 'woocommerce_show_marketplace_suggestions', 'yes' ) &&
			Note::E_WC_ADMIN_NOTE_MARKETING === $note->get_type()
		) {
			return false;
		}

		return true;
	}

	/**
	 * Add the note if it passes predefined conditions.
	 *
	 * @throws NotesDisabledException Throws exception when notes are disabled.
	 */
	public static function possibly_add_note() {
		self::check_notes_availability();

		$note = self::get_note();

		if ( ! self::can_be_added() ) {
			return;
		}

		$note->save();
	}

	/**
	 * Alias this method for backwards compatibility.
	 *
	 * @throws NotesDisabledException Throws exception when notes are disabled.
	 */
	public static function add_note() {
		self::possibly_add_note();
	}

	/**
	 * Possibly delete the note, if it exists in the database. Note that this
	 * is a hard delete, for where it doesn't make sense to soft delete or
	 * action the note.
	 *
	 * @throws NotesDisabledException Throws exception when notes are disabled.
	 */
	public static function possibly_delete_note() {
		self::check_notes_availability();

		$data_store = \WC_Data_Store::load( 'admin-note' );
		$note_ids   = $data_store->get_notes_with_name( self::NOTE_NAME );

		foreach ( $note_ids as $note_id ) {
			$note = Notes::get_note( $note_id );

			if ( $note ) {
				$data_store->delete( $note );
			}
		}
	}

	/**
	 * Get if the note has been actioned.
	 *
	 * @return bool
	 * @throws NotesDisabledException Throws exception when notes are disabled.
	 */
	public static function has_note_been_actioned() {
		self::check_notes_availability();

		$data_store = \WC_Data_Store::load( 'admin-note' );
		$note_ids   = $data_store->get_notes_with_name( self::NOTE_NAME );

		if ( ! empty( $note_ids ) ) {
			$note = Notes::get_note( $note_ids[0] );

			if ( Note::E_WC_ADMIN_NOTE_ACTIONED === $note->get_status() ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Throw a custom exception if notes are disabled.
	 *
	 * @throws NotesDisabledException Throws exception when notes are disabled.
	 */
	private static function check_notes_availability() {
		if ( apply_filters( 'woocommerce_admin_disabled', false ) ) {
			throw new NotesDisabledException(
				'woocommerce_admin_notes_disabled',
				__( 'Notes are unavailable because WooCommerce Admin is disabled.', 'woocommerce-admin' )
			);
		}
	}
}
