<?php
/**
 * Handles emailing user notes.
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
	 *
	 * @param Note $note The notification to send.
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
		return $this->note->get_actions();
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
				'email_heading'       => $this->get_heading(),
				'email_content'       => $this->get_note_content(),
				'email_actions'       => $this->get_actions(),
				'sent_to_admin'       => true,
				'plain_text'          => false,
				'email'               => $this,
				'opened_tracking_url' => $this->opened_tracking_url,
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
				'email_heading'       => $this->get_heading(),
				'email_content'       => $this->get_note_content(),
				'email_actions'       => $this->get_actions(),
				'sent_to_admin'       => true,
				'plain_text'          => true,
				'email'               => $this,
				'opened_tracking_url' => $this->opened_tracking_url,
			),
			'',
			$this->template_base
		);
	}

	/**
	 * Trigger the sending of this email.
	 *
	 * @param string $email Email to send the note.
	 */
	public function trigger( $email ) {
		$this->recipient           = $email;
		$this->opened_tracking_url = sprintf(
			'%1$s/wp-json/wc-analytics/admin/notes/tracker/note/%2$d',
			site_url(),
			$this->note->get_id()
		);
		$this->send(
			$this->get_recipient(),
			$this->get_subject(),
			$this->get_content(),
			$this->get_headers(),
			$this->get_attachments()
		);
	}
}
