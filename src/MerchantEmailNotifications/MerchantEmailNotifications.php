<?php
/**
 * Handles merchant email notifications
 */

namespace Automattic\WooCommerce\Admin\MerchantEmailNotifications;

use Automattic\WooCommerce\Admin\Notes\Note;
use Automattic\WooCommerce\Admin\Notes\Notes;

defined( 'ABSPATH' ) || exit;

/**
 * Merchant email notifications.
 * this gets all non-sent notes type email and send them.
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
			}
		}
	}

	/**
	 * Sends the notification to the merchant.
	 *
	 * @param object $note The note to send.
	 */
	public static function send_mechant_notification( $note ) {
		\WC_Emails::instance();
		$email = new NotificationEmail( $note );
		$email->trigger( get_current_user_id() );
	}
}
