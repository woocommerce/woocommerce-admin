<?php
/**
 * WooCommerce Admin Navigation Feature Feedback
 */

namespace Automattic\WooCommerce\Admin\Notes;

use Automattic\WooCommerce\Admin\Features\Features;
use Automattic\WooCommerce\Admin\Survey;

defined( 'ABSPATH' ) || exit;

/**
 * NavigationFeedback
 */
class NavigationFeedback {
	/**
	 * Note traits.
	 */
	use NoteTraits;

	/**
	 * Name of the note for use in the database.
	 */
	const NOTE_NAME = 'wc-admin-navigation-feedback';

	/**
	 * Should this note exist? (The navigation feature should exist.)
	 */
	public static function should_note_exist() {
		return Features::exists( 'navigation' );
	}

	/**
	 * Delete this note if the navigation feature does not exist, unless the note has been soft-deleted already.
	 */
	public static function delete_if_not_supported() {
		if ( ! self::should_note_exist() ) {
			$data_store = Notes::load_data_store();
			$note_ids   = $data_store->get_notes_with_name( self::NOTE_NAME );

			if ( ! empty( $note_ids ) ) {
				$note = Notes::get_note( $note_ids[0] );

				if ( ! $note->get_is_deleted() ) {
					return self::possibly_delete_note();
				}
			}
		}
	}

	/**
	 * Get the note.
	 *
	 * @return Note
	 */
	public static function get_note() {
		if ( ! Features::is_enabled( 'navigation' ) ) {
			return;
		}

		$content = __( "We're introducing the new navigation for a more intuitive and improved user experience. We'd like to hear your thoughts and first impressions.", 'woocommerce-admin' );

		$note = new Note();
		$note->set_title( __( 'You now have access to the new WooCommerce navigation', 'woocommerce-admin' ) );
		$note->set_content( $content );
		$note->set_content_data( (object) array() );
		$note->set_type( Note::E_WC_ADMIN_NOTE_INFORMATIONAL );
		$note->set_name( self::NOTE_NAME );
		$note->set_source( 'woocommerce-admin' );
		$note->add_action( 'share-feedback', __( 'Share feedback', 'woocommerce-admin' ), Survey::get_url( '/new-navigation' ) );
		return $note;
	}
}
