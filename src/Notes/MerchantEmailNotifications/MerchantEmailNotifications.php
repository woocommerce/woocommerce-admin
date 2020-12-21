<?php
/**
 * Handles merchant email notifications
 */

namespace Automattic\WooCommerce\Admin\Notes\MerchantEmailNotifications;

use Automattic\WooCommerce\Admin\Notes\Note;
use Automattic\WooCommerce\Admin\Notes\Notes;

defined( 'ABSPATH' ) || exit;

/**
 * Merchant email notifications.
 * This gets all non-sent notes type `email` and sends them.
 */
class MerchantEmailNotifications {
	/**
	 * Send all the notifications type `email`.
	 */
	public static function possible_send() {
		$data_store = \WC_Data_Store::load( 'admin-note' );
		$notes      = $data_store->get_notes(
			array(
				'type'   => array( Note::E_WC_ADMIN_NOTE_EMAIL ),
				'status' => array( 'unactioned' ),
			)
		);

		if ( empty( $notes ) ) {
			return;
		}

		foreach ( $notes as $note ) {
			$note = Notes::get_note( $note->note_id );
			if ( $note ) {
				self::send_mechant_notification( $note );
				$note->set_status( 'sent' );
				$note->save();
				wc_admin_record_tracks_event( 'wcadmin_email_note_sent', array( 'note_name' => $note->get_name() ) );
			}
		}
	}

	/**
	 * Send the notification to the merchant.
	 *
	 * @param object $note The note to send.
	 */
	public static function send_mechant_notification( $note ) {
		\WC_Emails::instance();
		$users_emails = self::get_emails_to_notice( $note );
		foreach ( $users_emails as $user_email ) {
			if ( is_email( $user_email ) ) {
				$email = new NotificationEmail( $note );
				$email->trigger( $user_email );
			}
		}
	}

	/**
	 * Get email addresses by role to notify.
	 *
	 * @param object $note The note to send.
	 * @return array Emails to notify
	 */
	public static function get_emails_to_notice( $note ) {
		$content_data = $note->get_content_data();
		$role         = 'administrator';
		if ( isset( $content_data->role ) ) {
			$role = $content_data->role;
		}
		$args  = array( 'role' => $role );
		$users = get_users( $args );
		return array_column( $users, 'user_email' );
	}
}
