<?php
/**
 * A Trait to help with managing the legacy coupon menu.
 *
 * @package WooCommerce Admin
 */

namespace Automattic\WooCommerce\Admin\Features;

/**
 * CouponsMovedTrait trait.
 *
 * @package Automattic\WooCommerce\Admin\Features
 */
trait CouponsMovedTrait {

	/**
	 * The GET query key for the legacy menu.
	 *
	 * @var string
	 */
	protected static $query_key = 'legacy_coupon_menu';

	/**
	 * The key for storing an option in the DB.
	 *
	 * @var string
	 */
	protected static $option_key = 'wc_show_legacy_coupon_menu';

	/**
	 * Get the URL for the legacy coupon management.
	 *
	 * @param array $additional_args Additional args to add to the query string.
	 *
	 * @return string The unescaped URL for the legacy coupon management page.
	 */
	protected static function get_legacy_coupon_url( $additional_args = [] ) {
		$args = array_merge(
			[
				'post_type'      => 'shop_coupon',
				self::$query_key => true,
			],
			$additional_args
		);

		return add_query_arg( $args, admin_url( 'edit.php' ) );
	}

	/**
	 * Get the new URL for managing coupons.m,s
	 *
	 * @return string
	 */
	protected static function get_coupon_management_url() {
		$path = self::get_coupon_management_path();
		return "wc-admin&path={$path}";
	}

	/**
	 * Get the WC Admin coupon management path.
	 *
	 * @return string
	 */
	protected static function get_coupon_management_path() {
		return '/marketing/overview';
	}

	/**
	 * Whether we should display the legacy coupon menu item.
	 *
	 * @return bool
	 */
	protected static function should_display_legacy_menu() {
		return (bool) get_option( self::$option_key, true );
	}

	/**
	 * Set whether we should display the legacy coupon menu item.
	 *
	 * @param bool $display Whether the menu should be displayed or not.
	 */
	protected static function display_legacy_menu( $display = false ) {
		update_option( self::$option_key, (bool) $display );
	}
}
