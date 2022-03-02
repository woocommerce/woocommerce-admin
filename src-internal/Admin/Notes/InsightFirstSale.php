<?php
/**
 * WooCommerce Admin: Insight - First sale
 *
 * Adds a note to give insight about the first sale.
 *
 * @package WooCommerce\Admin
 */

namespace Automattic\WooCommerce\Internal\Admin\Notes;

defined( 'ABSPATH' ) || exit;

use \Automattic\WooCommerce\Admin\Notes\Note;
use \Automattic\WooCommerce\Admin\Notes\NoteTraits;

/**
 * Insight_First_Sale.
 */
class InsightFirstSale {
	/**
	 * Note traits.
	 */
	use NoteTraits;

	/**
	 * Name of the note for use in the database.
	 */
	const NOTE_NAME = 'wc-admin-insight-first-sale';

	/**
	 * Get the note.
	 *
	 * @return Note
	 */
	public static function get_note() {
		if ( ! self::is_wc_admin_active_in_date_range( 'week-1-4' ) ) {
			return;
		}

		$note = new Note();
		$note->set_title( __( 'Did you know?', 'woocommerce-admin' ) );
		$note->set_content( __( 'A WooCommerce powered store needs on average 31 days to get the first sale. You\'re on the right track! Do you find this type of insight useful?', 'woocommerce-admin' ) );
		$note->set_type( Note::E_WC_ADMIN_NOTE_SURVEY );
		$note->set_name( self::NOTE_NAME );
		$note->set_content_data( (object) array() );
		$note->set_source( 'woocommerce-admin' );

		// Note that there is no corresponding function called in response to
		// this. Apart from setting the note to actioned a tracks event is
		// sent in NoteActions.
		$note->add_action(
			'affirm-insight-first-sale',
			__( 'Yes', 'woocommerce-admin' ),
			false,
			Note::E_WC_ADMIN_NOTE_ACTIONED,
			false,
			__( 'Thanks for your feedback', 'woocommerce-admin' )
		);
		$note->add_action(
			'deny-insight-first-sale',
			__( 'No', 'woocommerce-admin' ),
			false,
			Note::E_WC_ADMIN_NOTE_ACTIONED,
			false,
			__( 'Thanks for your feedback', 'woocommerce-admin' )
		);

		return $note;
	}
}
