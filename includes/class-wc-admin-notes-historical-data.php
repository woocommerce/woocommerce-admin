<?php
/**
 * WooCommerce Admin: Historical Analytics Data Note.
 *
 * Adds a notes to store alerts area concerning the historial analytics data tool.
 *
 * @package WooCommerce Admin
 */

defined( 'ABSPATH' ) || exit;

/**
 * WC_Admin_Notes_Historical_Data.
 */
class WC_Admin_Notes_Historical_Data {
	const NOTE_NAME  = 'wc-admin-historical-data';

	/**
	 * Creates a note for regenerating historical data.
	 */
	public static function add_note() {
		$data_store = WC_Data_Store::load( 'admin-note' );

		// First, see if we've already created this kind of note so we don't do it again.
		$note_ids = $data_store->get_notes_with_name( self::NOTE_NAME );
		foreach ( (array) $note_ids as $note_id ) {
			$note         = WC_Admin_Notes::get_note( $note_id );
			$content_data = $note->get_content_data();
			if ( property_exists( $content_data, 'getting_started' ) ) {
				return;
			}
		}

		$note = new WC_Admin_Note();
		$note->set_title( __( 'WooCommerce Admin: Historical Analytics Data', 'wc-admin' ) );
		$note->set_content( __( 'To view your historical analytics data, you must process your existing orders and customers.', 'wc-admin' ) );
		$note->set_content_data(
			(object) array(
				'getting_started' => true,
			)
		);
		$note->set_type( WC_Admin_Note::E_WC_ADMIN_NOTE_UPDATE );
		$note->set_icon( 'info' );
		$note->set_name( self::NOTE_NAME );
		$note->set_source( 'woocommerce-admin' );
		// @todo Add remind me later option. See https://github.com/woocommerce/wc-admin/issues/1756.
		$note->add_action(
			'get-started',
			__( 'Get Started', 'wc-admin' ),
			'?page=wc-admin#/analytics/settings'
		);

		$note->save();
	}

	/**
	 * Marks a note as actioned so that it does not show up again.
	 */
	public static function mark_actioned() {
		$data_store = WC_Data_Store::load( 'admin-note' );
		$note_ids   = $data_store->get_notes_with_name( self::NOTE_NAME );
		if ( empty( $note_ids ) ) {
			return;
		}

		$note = WC_Admin_Notes::get_note( $note_ids[0] );
		$note->set_status( WC_Admin_Note::E_WC_ADMIN_NOTE_ACTIONED );
		$note->save();
	}
}

new WC_Admin_Notes_Historical_Data();
