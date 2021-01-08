<?php
/**
 * WooCommerce Admin: Getting Started in eCommerce note provider
 *
 * Add a new note with a link to a webinar
 */

namespace Automattic\WooCommerce\Admin\Notes;

defined( 'ABSPATH' ) || exit;

/**
 * GettingStartedInEcommerce.
 */
class GettingStartedInEcommerce {
	/**
	 * Note traits.
	 */
	use NoteTraits;

	/**
	 * Name of the note for use in the database.
	 */
	const NOTE_NAME = 'wc-admin-getting-started-in-ecommerce';

	/**
	 * Get the note.
	 *
	 * @return Note
	 */
	public static function get_note() {
		$onboarding_profile = get_option( 'woocommerce_onboarding_profile', array() );

		// Confirm that $onboarding_profile is set.
		if ( empty( $onboarding_profile ) ) {
			return;
		}

		// Make sure that the person who filled out the OBW was not setting up
		// the store for their customer/client.
		if (
			isset( $onboarding_profile['setup_client'] ) &&
			true === $onboarding_profile['setup_client']
		) {
			return;
		}

		// Set default values for product_count and revenue if they are missing.
		$onboarding_profile = array_merge(
			array(
				'product_count' => false,
				'revenue'       => false,
			),
			$onboarding_profile
		);

		if (
			'0' === $onboarding_profile['product_count'] ||
			'none' === $onboarding_profile['revenue'] ||
			'up-to-2500' === $onboarding_profile['revenue']
		) {
			$note = new Note();
			$note->set_title( __( 'Getting Started in eCommerce - webinar', 'woocommerce-admin' ) );
			$note->set_content( __( 'We want to make eCommerce and this process of getting started as easy as possible for you. Watch this webinar to get tips on how to have our store up and running in a breeze.', 'woocommerce-admin' ) );
			$note->set_type( Note::E_WC_ADMIN_NOTE_INFORMATIONAL );
			$note->set_name( self::NOTE_NAME );
			$note->set_content_data( (object) array() );
			$note->set_source( 'woocommerce-admin' );
			$note->add_action(
				'watch-the-webinar',
				__( 'Watch the webinar', 'woocommerce-admin' ),
				'https://youtu.be/V_2XtCOyZ7o'
			);

			return $note;
		}
	}
}
