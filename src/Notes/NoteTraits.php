<?php
/**
 * WC Admin Note Traits
 *
 * WC Admin Note Traits class that houses shared functionality across notes.
 *
 * @package WooCommerce Admin/Classes
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
	 */
	public static function note_exists() {
		$data_store = \WC_Data_Store::load( 'admin-note' );
		$note_ids   = $data_store->get_notes_with_name( self::NOTE_NAME );
		return ! empty( $note_ids );
	}

	/**
	 * Add the note if it passes predefined conditions.
	 */
	public static function possibly_add_note() {
		if ( self::note_exists() ) {
			return;
		}

		self::add_note();
	}
}
