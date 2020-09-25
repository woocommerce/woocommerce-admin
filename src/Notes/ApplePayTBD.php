<?php
/**
 * WooCommerce Admin TBD Apple Pay Note Provider.
 *
 * Adds a note to the merchant's inbox TBD something apple pay.
 */

namespace Automattic\WooCommerce\Admin\Notes;

defined( 'ABSPATH' ) || exit;

use \Automattic\WooCommerce\Admin\PluginsHelper;

/**
 * Apple_Pay_TBD
 */
class Apple_Pay_TBD {
	/**
	 * Note traits.
	 */
	use NoteTraits;

	/**
	 * Name of the note for use in the database.
	 */
	const NOTE_NAME = 'wc-admin-apple-pay-tbd';

	/**
	 * Get the note.
	 *
	 * @return Note|null
	 */
	public static function get_note() {
		// Only show if Stripe plugin is active.
		if ( ! PluginsHelper::is_plugin_active( 'woocommerce-gateway-stripe/woocommerce-gateway-stripe.php' ) ) {
			return;
		}

		// Only show if in the US.
		$base_location = wc_get_base_location();
		if ( ! $base_location ) {
			return;
		}
		if ( 'US' !== $base_location['country'] ) {
			return;
		}

		$note = new Note();

		$note->set_title( __( 'Apple Pay is now available on Stripe', 'woocommerce-admin' ) );
		$note->set_content( __( 'Boost sales by offering a fast, simple, and secure checkout experience with Apple Pay®!', 'woocommerce-admin' ) );
		$note->set_content_data( (object) array() );
		$note->set_type( Note::E_WC_ADMIN_NOTE_INFORMATIONAL );
		$note->set_name( self::NOTE_NAME );
		$note->set_source( 'woocommerce-admin' );
		$note->add_action(
			'learn-more',
			__( 'Learn more', 'woocommerce-admin' ),
			'https://woocommerce.com/apple-pay/?utm_source=inbox'
		);

		return $note;
	}
}
