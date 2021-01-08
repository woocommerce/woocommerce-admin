<?php
/**
 * WooCommerce Admin: The first 5 things to customize in your store note provider
 *
 * Adds a note with a link to first things to customize doc
 */

namespace Automattic\WooCommerce\Admin\Notes;

defined( 'ABSPATH' ) || exit;

/**
 * Class FirstFiveThingsToCustomize
 *
 * @package Automattic\WooCommerce\Admin\Notes
 */
class FirstFiveThingsToCustomize {
	/**
	 * Note traits.
	 */
	use NoteTraits;

	/**
	 * Name of the note for use in the database.
	 */
	const NOTE_NAME = 'wc-admin-first-five-things-to-customize';

	/**
	 * Get the note.
	 *
	 * @return Note
	 */
	public static function get_note() {
		// We want to show the note after 2 days.
		if ( ! self::wc_admin_active_for( 2 * DAY_IN_SECONDS ) ) {
			return;
		}

		$completed_task_list = get_option( 'woocommerce_task_list_tracked_completed_tasks', array() );

		// skip if the user has finished at least one task.
		if ( 0 !== count( $completed_task_list ) ) {
			return;
		}

		$note = new Note();
		$note->set_title( __( 'The first 5 things to customize in your store', 'woocommerce-admin' ) );
		$note->set_content( __( 'Deciding what to start with first is tricky. To help you properly prioritize, we’ve put together this short list of the first few things you should customize in WooCommerce.', 'woocommerce-admin' ) );
		$note->set_type( Note::E_WC_ADMIN_NOTE_INFORMATIONAL );
		$note->set_name( self::NOTE_NAME );
		$note->set_content_data( (object) array() );
		$note->set_source( 'woocommerce-admin' );
		$note->add_action(
			'first-five-things-to-customize',
			__( 'Learn more', 'woocommerce-admin' ),
			'https://woocommerce.com/posts/first-things-customize-woocommerce/?utm_source=inbox'
		);

		return $note;
	}
}
