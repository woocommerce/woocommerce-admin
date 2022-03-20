<?php
/**
 * WooCommerce Admin: Insight - First product and payment setup
 *
 * Adds a note to give insight about the first product and payment setup
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
class InsightFirstProductAndPayment {
	/**
	 * Note traits.
	 */
	use NoteTraits;

	/**
	 * Name of the note for use in the database.
	 */
	const NOTE_NAME = 'wc-admin-insight-first-product-and-payment';

	/**
	 * Get the note.
	 *
	 * @return Note
	 */
	public static function get_note() {
		// We want to show the note after 1 day.
		if ( ! self::is_wc_admin_active_in_date_range( 'week-1', DAY_IN_SECONDS ) ) {
			return;
		}

		$note = new Note();
		$note->set_title( __( 'Insight', 'woocommerce-admin' ) );
		$note->set_content( __( 'More than 80% of new merchants add the first product and have at least one payment method set up during the first week.<br><br>Do you find this type of insight useful?', 'woocommerce-admin' ) );
		$note->set_type( Note::E_WC_ADMIN_NOTE_SURVEY );
		$note->set_name( self::NOTE_NAME );
		$note->set_content_data( (object) array() );
		$note->set_source( 'woocommerce-admin' );
		$note->add_action(
			'affirm-insight-first-product-and-payment',
			__( 'Yes', 'woocommerce-admin' ),
			false,
			Note::E_WC_ADMIN_NOTE_ACTIONED,
			__( 'Thanks for your feedback', 'woocommerce-admin' )
		);

		$note->add_action(
			'affirm-insight-first-product-and-payment',
			__( 'No', 'woocommerce-admin' ),
			false,
			Note::E_WC_ADMIN_NOTE_ACTIONED,
			__( 'Thanks for your feedback', 'woocommerce-admin' )
		);

		return $note;
	}
}
