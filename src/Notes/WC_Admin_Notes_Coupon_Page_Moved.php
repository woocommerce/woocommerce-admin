<?php
/**
 * WooCommerce Admin Coupon Page Moved provider.
 *
 * Adds a notice when the store manager access the coupons page via the old WooCommere > Coupons menu.
 *
 * @package WooCommerce Admin
 */

namespace Automattic\WooCommerce\Admin\Notes;

use Automattic\WooCommerce\Admin\Features\CouponsMovedTrait;
use stdClass;

defined( 'ABSPATH' ) || exit;

/**
 * WC_Admin_Notes_Coupon_Page_Moved class.
 *
 * @package Automattic\WooCommerce\Admin\Notes
 */
class WC_Admin_Notes_Coupon_Page_Moved {

	use NoteTraits, CouponsMovedTrait;

	const NOTE_NAME = 'wc-admin-coupon-page-moved';

	/**
	 * Initialize our hooks.
	 */
	public function init() {
		add_action( 'woocommerce_note_action_dismiss-coupon-page-moved', [ $this, 'notice_dismissed' ] );
	}

	/**
	 * Checks if a note can and should be added.
	 *
	 * @return bool
	 */
	public static function can_be_added() {
		return isset( $_GET[ self::$query_key ] ) && (bool) $_GET[ self::$query_key ]; // phpcs:ignore WordPress.Security.NonceVerification
	}

	/**
	 * Get the note object for this class.
	 *
	 * @return WC_Admin_Note
	 */
	public static function get_note() {
		$note = new WC_Admin_Note();
		$note->set_title( __( 'Coupon management has moved!', 'woocommerce-admin' ) );
		$note->set_content( __( 'Coupons can now be managed from Marketing > Coupons. Dismiss this notice to permanently hide the old menu item.', 'woocommerce-admin' ) );
		$note->set_type( WC_Admin_Note::E_WC_ADMIN_NOTE_UPDATE );
		$note->set_icon( 'icon' );
		$note->set_name( self::NOTE_NAME );
		$note->set_content_data( new stdClass() );
		$note->set_source( 'woocommerce-admin' );
		$note->add_action(
			'dismiss-coupon-page-moved',
			__( 'Dismiss', 'woocommerce-admin' ),
			self::get_management_url( 'coupons' ),
			WC_Admin_Note::E_WC_ADMIN_NOTE_ACTIONED,
			true
		);

		return $note;
	}

	/**
	 * Mark the notice as dismissed.
	 */
	public function notice_dismissed() {
		$this->display_legacy_menu( false );
	}
}
