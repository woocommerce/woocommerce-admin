<?php
/**
 * Returns information about the package and handles init.
 *
 * @package Automattic/WooCommerce/WCAdmin
 */

namespace Automattic\WooCommerce\Admin;

defined( 'ABSPATH' ) || exit;

require_once WC_ABSPATH . 'packages/woocommerce-admin/includes/core-functions.php';
require_once WC_ABSPATH . 'packages/woocommerce-admin/includes/feature-config.php';
require_once WC_ABSPATH . 'packages/woocommerce-admin/includes/page-controller-functions.php';
require_once WC_ABSPATH . 'packages/woocommerce-admin/includes/wc-admin-update-functions.php';

/** This function doesn't exist yet. */
function wc_admin_get_feature_config() {
	return array(
		'activity-panels'                  => true,
		'analytics'                        => true,
		'analytics-dashboard'              => true,
		'analytics-dashboard/customizable' => true,
		'devdocs'                          => true,
		'onboarding'                       => true,
		'store-alerts'                     => true,
	);
}

/**
 * Main package class.
 */
class Package {

	/**
	 * Version.
	 *
	 * @var string
	 */
	const VERSION = '0.21.0';

	/**
	 * Init the package.
	 */
	public static function init() {
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
