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
	 * Initialize the merchant email notifications.
	 */
	public static function init() {
		add_action( 'admin_init', array( __CLASS__, 'trigger_notification_action' ) );
	}

	/**
	 * Trigger the notification's action.
	 */
	public static function trigger_notification_action() {
		/* phpcs:disable WordPress.Security.NonceVerification */
		if (
			! isset( $_GET['external_redirect'] ) ||
			1 !== intval( $_GET['external_redirect'] ) ||
			! isset( $_GET['note'] ) ||
			! isset( $_GET['action'] )
		) {
			return;
		}
		$note_id   = intval( $_GET['note'] );
		$action_id = intval( $_GET['action'] );
		/* phpcs:enable */

		$note = Notes::get_note( $note_id );

		if ( ! $note ) {
			return;
		}

		$actions          = $note->get_actions( 'edit' );
		$triggered_action = false;

		foreach ( $actions as $action ) {
			if ( $action->id === $action_id ) {
				$triggered_action = $action;
			}
		}

		if ( ! $triggered_action ) {
			return new \WP_Error(
				'woocommerce_note_action_invalid_id',
				__( 'Sorry, there is no resource with that ID.', 'woocommerce-admin' ),
				array( 'status' => 404 )
			);
		}

		/**
		 * Fires when an admin note action is taken.
		 *
		 * @param string $name The triggered action name.
		 * @param Note   $note The corresponding Note.
		 */
		do_action( 'woocommerce_note_action', $triggered_action->name, $note );

		/**
		 * Fires when an admin note action is taken.
		 * For more specific targeting of note actions.
		 *
		 * @param Note $note The corresponding Note.
		 */
		do_action( 'woocommerce_note_action_' . $triggered_action->name, $note );

		// Update the note with the status for this action.
		if ( ! empty( $triggered_action->status ) ) {
			$note->set_status( $triggered_action->status );
		}

		$note->save();

		if ( in_array( $note->get_type(), array( 'error', 'update' ), true ) ) {
			$tracks_event = 'wcadmin_store_alert_action';
		} else {
			$tracks_event = 'wcadmin_inbox_action_click';
		}

		wc_admin_record_tracks_event(
			$tracks_event,
			array(
				'note_name'    => $note->get_name(),
				'note_type'    => $note->get_type(),
				'note_title'   => $note->get_title(),
				'note_content' => $note->get_content(),
				'action_name'  => $triggered_action->name,
				'action_label' => $triggered_action->label,
			)
		);

		wp_safe_redirect( $triggered_action->query );
		exit();
	}

	/**
	 * Send all the notifications type `email`.
	 */
	public static function run() {
		$data_store = \WC_Data_Store::load( 'admin-note' );
		$notes      = $data_store->get_notes(
			array(
				'type'   => array( Note::E_WC_ADMIN_NOTE_EMAIL ),
				'status' => array( 'unactioned' ),
			)
		);

		foreach ( $notes as $note ) {
			$note = Notes::get_note( $note->note_id );
			if ( $note ) {
				self::send_merchant_notification( $note );
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
	public static function send_merchant_notification( $note ) {
		\WC_Emails::instance();
		$users_emails = self::get_notification_email_addresses( $note );
		$email        = new NotificationEmail( $note );
		foreach ( $users_emails as $user_email ) {
			if ( is_email( $user_email ) ) {
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
	public static function get_notification_email_addresses( $note ) {
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
