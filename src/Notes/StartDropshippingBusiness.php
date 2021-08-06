<?php
/**
 * WooCommerce Admin: Starting a dropshipping business.
 *
 * Adds a note to ask the client if they are considering starting a dropshipping business.
 */

namespace Automattic\WooCommerce\Admin\Notes;

defined( 'ABSPATH' ) || exit;

/**
 * Start_Dropshipping_Business.
 */
class StartDropshippingBusiness {
	/**
	 * Note traits.
	 */
	use NoteTraits;

	/**
	 * Name of the note for use in the database.
	 */
	const NOTE_NAME = 'wc-admin-start-dropshipping-business';

	/**
	 * Get the note.
	 *
	 * @return Note|null
	 */
	public static function get_note() {

		// We want to show the note after one day.
		if ( ! self::is_wc_admin_active_in_date_range( 'week-1', DAY_IN_SECONDS ) ) {
			return;
		}

		$onboarding_profile = get_option( 'woocommerce_onboarding_profile', array() );

		// Confirm that $onboarding_profile is set.
		if ( empty( $onboarding_profile ) ) {
			return;
		}

		// Make sure that the person who filled out the OBW was not setting up the store for their customer/client.
		if (
			! isset( $onboarding_profile['setup_client'] ) ||
			$onboarding_profile['setup_client']
		) {
			return;
		}

		// We need to show the notification when product number is 0 or the revenue is 'none' or 'up to 2500'.
		if (
			! isset( $onboarding_profile['product_count'] ) ||
			! isset( $onboarding_profile['revenue'] ) ||
			(
				0 !== (int) $onboarding_profile['product_count'] &&
				'none' !== $onboarding_profile['revenue'] &&
				'up-to-2500' !== $onboarding_profile['revenue']
			)
		) {
			return;
		}

		$note = new Note();
		$note->set_title( __( 'Are you considering starting a dropshipping business?', 'woocommerce-admin' ) );
		$note->set_content( __( 'The ability to add inventory without having to deal with production, stocking, or fulfilling orders may seem like a dream. But is dropshipping worth it? Let’s explore some of the advantages and disadvantages to help you make the best decision for your business.', 'woocommerce-admin' ) );
		$note->set_type( Note::E_WC_ADMIN_NOTE_INFORMATIONAL );
		$note->set_name( self::NOTE_NAME );
		$note->set_content_data( (object) array() );
		$note->set_source( 'woocommerce-admin' );
		$note->add_action(
			'dropshipping-business',
			__( 'Learn more', 'woocommerce-admin' ),
			'https://woocommerce.com/posts/is-dropshipping-worth-it-pros-cons/?utm_source=inbox&utm_medium=product',
			Note::E_WC_ADMIN_NOTE_ACTIONED,
			true
		);
		return $note;
	}
}
