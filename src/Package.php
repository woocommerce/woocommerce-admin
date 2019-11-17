<?php
/**
 * Returns information about the package and handles init.
 *
 * @package Automattic/WooCommerce/WCAdmin
 */

namespace Automattic\WooCommerce\Admin;

defined( 'ABSPATH' ) || exit;

/**
 * Main package class.
 */
class Package {

	/**
	 * Version.
	 *
	 * @var string
	 */
	const VERSION = '0.22.0';

	/**
	 * Init the package.
	 *
	 * Only initialize for WP 5.2 or greater.
	 */
	public static function init() {
		require_once WC_ABSPATH . 'packages/woocommerce-admin/includes/core-functions.php';
		require_once WC_ABSPATH . 'packages/woocommerce-admin/includes/feature-config.php';
		require_once WC_ABSPATH . 'packages/woocommerce-admin/includes/page-controller-functions.php';
		require_once WC_ABSPATH . 'packages/woocommerce-admin/includes/wc-admin-update-functions.php';

		$wordpress_minimum_met = version_compare( get_bloginfo( 'version' ), '5.2', '>=' );
		if ( ! $wordpress_minimum_met ) {
			return;
		}
		FeaturePlugin::instance()->init();
	}

	/**
	 * Return the version of the package.
	 *
	 * @return string
	 */
	public static function get_version() {
		return self::VERSION;
	}

	/**
	 * Return the path to the package.
	 *
	 * @return string
	 */
	public static function get_path() {
		return dirname( __DIR__ );
	}
}
