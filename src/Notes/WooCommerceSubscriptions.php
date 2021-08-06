<?php
/**
 * WooCommerce Admin: WooCommerce Subscriptions.
 *
 * Adds a note to learn more about WooCommerce Subscriptions.
 */

namespace Automattic\WooCommerce\Admin\Notes;

defined( 'ABSPATH' ) || exit;

use \Automattic\WooCommerce\Admin\Features\Onboarding;

/**
 * WooCommerce_Subscriptions.
 */
class WooCommerceSubscriptions {
	/**
	 * Note traits.
	 */
	use NoteTraits;

	/**
	 * Name of the note for use in the database.
	 */
	const NOTE_NAME = 'wc-admin-woocommerce-subscriptions';

	/**
	 * Get the note.
	 *
	 * @return Note|null
	 */
	public static function get_note() {
		$onboarding_data = get_option( Onboarding::PROFILE_DATA_OPTION, array() );

		if ( ! isset( $onboarding_data['product_types'] ) || ! in_array( 'subscriptions', $onboarding_data['product_types'], true ) ) {
			return;
		}

		if ( ! self::is_wc_admin_active_in_date_range( 'week-1', DAY_IN_SECONDS ) ) {
			return;
		}

		$note = new Note();
		$note->set_title( __( 'Do you need more info about WooCommerce Subscriptions?', 'woocommerce-admin' ) );
		$note->set_content( __( 'WooCommerce Subscriptions allows you to introduce a variety of subscriptions for physical or virtual products and services. Create product-of-the-month clubs, weekly service subscriptions or even yearly software billing packages. Add sign-up fees, offer free trials, or set expiration periods.', 'woocommerce-admin' ) );
		$note->set_type( Note::E_WC_ADMIN_NOTE_MARKETING );
		$note->set_name( self::NOTE_NAME );
		$note->set_content_data( (object) array() );
		$note->set_source( 'woocommerce-admin' );
		$note->add_action(
			'learn-more',
			__( 'Learn More', 'woocommerce-admin' ),
			'https://woocommerce.com/products/woocommerce-subscriptions/?utm_source=inbox&utm_medium=product',
			Note::E_WC_ADMIN_NOTE_UNACTIONED,
			true
		);
		return $note;
	}
}
