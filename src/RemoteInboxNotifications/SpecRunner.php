<?php
/**
 * Runs a single spec.
 *
 * @package WooCommerce Admin/Classes
 */

namespace Automattic\WooCommerce\Admin\RemoteInboxNotifications;

defined( 'ABSPATH' ) || exit;

use \Automattic\WooCommerce\Admin\Notes\WC_Admin_Note;

/**
 * Runs a single spec.
 */
class SpecRunner {
	/**
	 * Run the spec.
	 *
	 * @param object $spec The spec to run.
	 */
	public static function run_spec( $spec ) {
		$data_store = \WC_Data_Store::load( 'admin-note' );

		// Create or update the note.
		$existing_note_ids = $data_store->get_notes_with_name( $spec->slug );
		if ( 0 === count( $existing_note_ids ) ) {
			$note = new WC_Admin_Note();
			$note->set_status( WC_Admin_Note::E_WC_ADMIN_NOTE_PENDING );
		} else {
			$note = new WC_Admin_Note( $existing_note_ids[0] );
		}

		// Evaluate the spec and get the new note status.
		$evaluate_and_get_status = new EvaluateAndGetStatus(
			new RuleEvaluator(
				new GetRuleProcessor()
			)
		);
		$status                  = $evaluate_and_get_status->evaluate(
			$spec,
			$note->get_status()
		);

		// Get the matching locale or fall back to en-US.
		$locale = self::get_locale( $spec->locales );

		// Set up the note.
		$note->set_title( $locale->title );
		$note->set_content( $locale->content );
		$note->set_content_data( (object) array() );
		$note->set_status( $status );
		$note->set_type( $spec->type );
		$note->set_icon( $spec->icon );
		$note->set_name( $spec->slug );
		$note->set_source( $spec->source );

		// Clear then create actions.
		$note->clear_actions();
		foreach ( $spec->actions as $action ) {
			$action_locale = self::get_action_locale( $action->locales, $locale->locale );

			$url = $action->url_is_admin_query ? wc_admin_url( $action->url ) : $action->url;

			$note->add_action(
				$action->name,
				$action_locale->label,
				$url,
				$action->status,
				$action->is_primary
			);
		}

		$note->save();
	}

	/**
	 * Get the locale for the WordPress locale, or fall back to the en_US
	 * locale.
	 *
	 * @param Array $locales The locales to search through.
	 *
	 * @returns object The locale that was found.
	 *
	 * @throws \Exception If no matching locale or en_US locale was found.
	 */
	private static function get_locale( $locales ) {
		$wp_locale           = get_locale();
		$matching_wp_locales = array_values(
			array_filter(
				$locales,
				function( $l ) use ( $wp_locale ) {
					return $wp_locale === $l->locale;
				}
			)
		);

		if ( 0 !== count( $matching_wp_locales ) ) {
			return $matching_wp_locales[0];
		}

		// Fall back to en_US locale.
		$en_us_locales = array_values(
			array_filter(
				$locales,
				function( $l ) {
					return 'en_US' === $l->locale;
				}
			)
		);

		if ( 0 !== count( $en_us_locales ) ) {
			return $en_us_locales[0];
		}

		throw new Exception( __( 'Matching locale or fallback en_US locale not found. Make sure there is at least a en_US locale provided.', 'woocommerce-admin' ) );
	}

	/**
	 * Get the action locale that matches the note locale, or fall back to the
	 * en_US locale.
	 *
	 * @param Array  $action_locales The locales from the spec's action.
	 * @param string $note_locale The locale used by the note.
	 *
	 * @return object The matching locale, or the en_US fallback locale.
	 *
	 * @throws \Exception If no matching locale or en_US locale was found.
	 */
	private static function get_action_locale( $action_locales, $note_locale ) {
		$matching_locales_using_note_locale = array_values(
			array_filter(
				$action_locales,
				function ( $l ) use ( $note_locale ) {
					return $note_locale === $l->locale;
				}
			)
		);

		if ( 0 !== count( $matching_locales_using_note_locale ) ) {
			return $matching_locales_using_note_locale[0];
		}

		// Fall back to en_US locale.
		$en_us_locales = array_values(
			array_filter(
				$action_locales,
				function( $l ) {
					return 'en_US' === $l->locale;
				}
			)
		);

		if ( 0 !== count( $en_us_locales ) ) {
			return $en_us_locales[0];
		}

		throw new \Exception( __( 'Matching locale or fallback en_US locale not found. Make sure there is at least a en_US locale provided.', 'woocommerce-admin' ) );
	}
}
