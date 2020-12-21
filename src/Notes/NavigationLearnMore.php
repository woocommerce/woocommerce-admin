<?php
/**
 * WooCommerce Admin Navigation Learn More
 */

namespace Automattic\WooCommerce\Admin\Notes;

use Automattic\WooCommerce\Admin\Loader;

defined( 'ABSPATH' ) || exit;

/**
 * NavigationLearnMore
 */
class NavigationLearnMore {
	/**
	 * Note traits.
	 */
	use NoteTraits;

	/**
	 * Name of the note for use in the database.
	 */
	const NOTE_NAME = 'wc-admin-navigation-learn-more';

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'update_option_woocommerce_navigation_enabled', array( $this, 'possibly_add_note' ) );
		add_action( 'add_option_woocommerce_navigation_enabled', array( $this, 'possibly_add_note' ) );
	}

	/**
	 * Get the note.
	 *
	 * @return Note
	 */
	public static function get_note() {
		if ( ! Loader::is_feature_enabled( 'navigation' ) ) {
			return;
		}

		$content = __( 'Introducing a streamlined, commerce-first navigation experience, to help you save time and find the things that matter.', 'woocommerce-admin' );

		$note = new Note();
		$note->set_title( __( 'Welcome your new WooCommerce Navigation', 'woocommerce-admin' ) );
		$note->set_content( $content );
		$note->set_content_data( (object) array() );
		$note->set_type( Note::E_WC_ADMIN_NOTE_INFORMATIONAL );
		$note->set_name( self::NOTE_NAME );
		$note->set_source( 'woocommerce-admin' );
		$note->add_action( 'learn-more', __( 'Learn more', 'woocommerce-admin' ), 'https://automattic.survey.fm/new-navigation' );
		return $note;
	}
}
