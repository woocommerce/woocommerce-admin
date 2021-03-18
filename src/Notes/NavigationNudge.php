<?php
/**
 * WooCommerce Admin: Navigation Nudge.
 *
 * Adds a note to nudge users to opt in to navigation.
 */

namespace Automattic\WooCommerce\Admin\Notes;

defined( 'ABSPATH' ) || exit;

use Automattic\WooCommerce\Admin\Features\Features;
use Automattic\WooCommerce\Admin\Features\Navigation\Init as Navigation;

/**
 * Navigation Nudge.
 */
class NavigationNudge {
	/**
	 * Note traits.
	 */
	use NoteTraits;

	/**
	 * Name of the note for use in the database.
	 */
	const NOTE_NAME = 'wc-admin-navigation-nudge';

	/**
	 * Attach hooks.
	 */
	public function __construct() {
		add_action( 'admin_init', array( $this, 'enable_navigation' ) );
		add_action( 'update_option_' . Navigation::TOGGLE_OPTION_NAME, array( $this, 'action_note' ), 10, 2 );
	}

	/**
	 * Get the note.
	 *
	 * @return Note
	 */
	public static function get_note() {
		if ( Features::is_enabled( 'navigation' ) ) {
			return;
		}

		$note = new Note();
		$note->set_title( __( 'You now have access to the WooCommerce navigation', 'woocommerce-admin' ) );
		$note->set_content( __( 'We’re introducing a new navigation for a more intuitive and improved user experience. You can enable the beta version of the new experience in the Advanced Settings. Enable it now for your store.', 'woocommerce-admin' ) );
		$note->set_type( Note::E_WC_ADMIN_NOTE_INFORMATIONAL );
		$note->set_name( self::NOTE_NAME );
		$note->set_source( 'woocommerce-admin' );
		$note->add_action(
			'enable-navigation',
			__( 'Enable', 'woocommerce-admin' ),
			wc_admin_url( '&wc_nav_toggle=1' )
		);
		return $note;
	}

	/**
	 * Enable the navigation and redirect to referring page.
	 *
	 * @param Note $note Note being acted upon.
	 */
	public function enable_navigation( $note ) {
		if ( isset( $_GET['wc_nav_toggle'] ) && absint( $_GET['wc_nav_toggle'] ) === 1 ) { // phpcs:ignore WordPress.Security.NonceVerification
			Features::enable( 'navigation' );
			if ( isset( $_SERVER['HTTP_REFERER'] ) ) {
				wp_safe_redirect( wp_unslash( $_SERVER['HTTP_REFERER'] ) ); // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
			}
		}
	}

	/**
	 * Actions the note when the option is toggled.
	 *
	 * @param string $old_value Old value.
	 * @param string $value     New value.
	 */
	public static function action_note( $old_value, $value ) {
		if ( 'yes' !== $value ) {
			return;
		}

		$data_store = \WC_Data_Store::load( 'admin-note' );
		$note_ids   = $data_store->get_notes_with_name( self::NOTE_NAME );

		if ( ! empty( $note_ids ) ) {
			$note = Notes::get_note( $note_ids[0] );

			if ( Note::E_WC_ADMIN_NOTE_ACTIONED === $note->get_status() ) {
				return;
			}

			$note->set_status( Note::E_WC_ADMIN_NOTE_ACTIONED );
			$note->save();
		}

	}
}
