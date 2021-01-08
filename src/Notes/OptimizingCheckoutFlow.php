<?php
/**
 * WooCommerce Admin: Optimizing the checkout flow note provider
 *
 * Adds a note with a link to optimizing checkout flow doc
 */

namespace Automattic\WooCommerce\Admin\Notes;

defined( 'ABSPATH' ) || exit;

/**
 * Class OptimizingCheckoutFlow
 *
 * @package Automattic\WooCommerce\Admin\Notes
 */
class OptimizingCheckoutFlow {
	/**
	 * Note traits.
	 */
	use NoteTraits;

	/**
	 * Name of the note for use in the database.
	 */
	const NOTE_NAME = 'wc-admin-optimizing-the-checkout-flow';

	/**
	 * Get the note.
	 *
	 * @return Note
	 */
	public static function get_note() {
		// We want to show the note after 3 days.
		if ( ! self::wc_admin_active_for( 3 * DAY_IN_SECONDS ) ) {
			return;
		}

		$completed_task_list = get_option( 'woocommerce_task_list_tracked_completed_tasks', array() );

		// 'payments' must have been completed
		if ( ! in_array( 'payments', $completed_task_list, true ) ) {
			return;
		}

		$note = new Note();
		$note->set_title( __( 'Optimizing the checkout flow', 'woocommerce-admin' ) );
		$note->set_content( __( 'It\'s crucial to get your store\'s checkout as smooth as possible to avoid losing sales. Let\'s take a look at how you can optimize the checkout experience for your shoppers.', 'woocommerce-admin' ) );
		$note->set_type( Note::E_WC_ADMIN_NOTE_INFORMATIONAL );
		$note->set_name( self::NOTE_NAME );
		$note->set_content_data( (object) array() );
		$note->set_source( 'woocommerce-admin' );
		$note->add_action(
			'optimizing-the-checkout-flow',
			__( 'Learn more', 'woocommerce-admin' ),
			'https://woocommerce.com/posts/optimizing-woocommerce-checkout?utm_source=inbox'
		);

		return $note;
	}
}
