<?php
/**
 * WooCommerce Admin: Profile reminder note.
 *
 * Adds a notes to complete or skip the profiler.
 *
 * @package WooCommerce Admin
 */

namespace Automattic\WooCommerce\Admin\Notes;

defined( 'ABSPATH' ) || exit;

use \Automattic\WooCommerce\Admin\Features\Onboarding;

/**
 * WC_Admin_Notes_Onboarding_Profiler.
 */
class WC_Admin_Notes_Onboarding_Profiler {
	const NOTE_NAME = 'wc-admin-onboarding-profiler-reminder';

	/**
	 * Creates a note to remind store owners to complete the profiler.
	 */
	public static function add_reminder() {
		if ( ! Onboarding::should_show_profiler() ) {
			return;
		}

		$data_store = \WC_Data_Store::load( 'admin-note' );
		$note_ids   = $data_store->get_notes_with_name( self::NOTE_NAME );
		if ( ! empty( $note_ids ) ) {
			return;
		}

		$note = new WC_Admin_Note();
		$note->set_title( __( 'Welcome to WooCommerce! Set up your store and start selling', 'woocommerce-admin' ) );
		$note->set_content( __( "We're here to help you going through the most important steps to get your store up and running.", 'woocommerce-admin' ) );
		$note->set_type( WC_Admin_Note::E_WC_ADMIN_NOTE_UPDATE );
		$note->set_icon( 'info' );
		$note->set_name( self::NOTE_NAME );
		$note->set_content_data( (object) array() );
		$note->set_source( 'woocommerce-admin' );
		$note->add_action(
			'continue',
			__( 'Continue Store Setup', 'woocommerce-admin' ),
			false,
			'actioned',
			true
		);
		$note->add_action(
			'skip',
			__( 'Skip Setup', 'woocommerce-admin' ),
			false,
			'actioned',
			false
		);

		$note->save();
	}
}
