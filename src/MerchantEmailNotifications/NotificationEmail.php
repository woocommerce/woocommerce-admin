<?php
/**
 * Handles emailing users CSV Export download links.
 */

namespace Automattic\WooCommerce\Admin\MerchantEmailNotifications;

use Automattic\WooCommerce\Admin\Notes;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Include dependencies.
 */
if ( ! class_exists( 'WC_Email', false ) ) {
	include_once WC_ABSPATH . 'includes/emails/class-wc-email.php';
}

/**
 * NotificationEmail Class.
 */
class NotificationEmail extends \WC_Email {
	/**
	 * Constructor.
	 */
	public function __construct( $note ) {
		$this->note           = $note;
		$this->id             = 'merchant_notification';
		$this->template_base  = WC_ADMIN_ABSPATH . 'includes/emails/';
		$this->template_html  = 'html-mechant-notification.php';
		$this->template_plain = 'plain-mechant-notification.php';

		// Call parent constructor.
		parent::__construct();
	}

	/**
	 * This email has no user-facing settings.
	 */
	public function init_form_fields() {}

	/**
	 * This email has no user-facing settings.
	 */
	public function init_settings() {}

	/**
	 * Return email type.
	 *
	 * @return string
	 */
	public function get_email_type() {
		return class_exists( 'DOMDocument' ) ? 'html' : 'plain';
	}

	/**
	 * Get email heading.
	 *
	 * @return string
	 */
	public function get_default_heading() {
		$content_data = $this->note->get_content_data();
		if ( $content_data->heading ) {
			return $content_data->heading;
		}

		return $this->note->set_title();
	}

	/**
	 * Get email subject.
	 *
	 * @return string
	 */
	public function get_default_subject() {
		return $this->note->get_title();
	}

	/**
	 * Get note content.
	 *
	 * @return string
	 */
	public function get_note_content() {
		return $this->note->get_content();
	}

	/**
	 * Get email action.
	 *
	 * @return stdClass
	 */
	public function get_actions() {
		return $this->note->get_actions()[0];
	}

	/**
	 * Get content html.
	 *
	 * @return string
	 */
	public function get_content_html() {
		return wc_get_template_html(
			$this->template_html,
			array(
				'email_heading' => $this->get_heading(),
				'email_content' => $this->get_note_content(),
				'email_action'  => $this->get_actions(),
				'sent_to_admin' => true,
				'plain_text'    => false,
				'email'         => $this,
			),
			'',
			$this->template_base
		);
	}

	/**
	 * Get content plain.
	 *
	 * @return string
	 */
	public function get_content_plain() {
		return wc_get_template_html(
			$this->template_plain,
			array(
				'email_heading' => $this->get_heading(),
				'email_content' => $this->get_note_content(),
				'email_action'  => $this->get_actions(),
				'sent_to_admin' => true,
				'plain_text'    => true,
				'email'         => $this,
			),
			'',
			$this->template_base
		);
	}

	/**
	 * Trigger the sending of this email.
	 *
	 * @param int $user_id User ID to email.
	 */
	public function trigger( $user_id ) {
		$user            = new \WP_User( $user_id );
		$this->recipient = $user->user_email;
		$this->send(
			$this->get_recipient(),
			$this->get_subject(),
			$this->get_content(),
			$this->get_headers(),
			$this->get_attachments()
		);
	}
}
