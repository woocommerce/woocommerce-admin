<?php
/**
 * Registers controllers in the blocks REST API namespace.
 *
 * @package WooCommerce/Admin
 */

namespace WooCommerce\Admin;

defined( 'ABSPATH' ) || exit;

use WooCommerce\Admin\Utilities\SingletonTrait;

/**
 * RestApi class.
 */
class RestApi {
	use SingletonTrait;

	/**
	 * REST API controllers.
	 *
	 * @var array
	 */
	protected $controllers = [];

	/**
	 * Register REST API routes.
	 */
	public function register_rest_routes() {
		$controllers = $this->get_controllers();

		foreach ( $controllers as $controller_name => $controller_class ) {
			$this->controllers[ $controller_name ] = new $controller_class();
			$this->controllers[ $controller_name ]->register_routes();
		}
	}

	/**
	 * Return a list of controller classes for this REST API namespace.
	 *
	 * @return array
	 */
	protected static function get_controllers() {
		$namespace   = __NAMESPACE__ . '\\RestApi\\Controllers\\';
		$controllers = [
			'admin-notes'                    => $namespace . 'AdminNotes',
			'leaderboards'                   => $namespace . 'Leaderboards',
			'reports'                        => $namespace . 'Reports\Reports',
			'reports-categories'             => $namespace . 'Reports\Categories',
			'reports-coupons'                => $namespace . 'Reports\Coupons',
			'reports-coupon-stats'           => $namespace . 'Reports\CouponStats',
			'reports-customers'              => $namespace . 'Reports\Customers',
			'reports-customer-stats'         => $namespace . 'Reports\CustomerStats',
			'reports-downloads'              => $namespace . 'Reports\Downloads',
			'reports-download-stats'         => $namespace . 'Reports\DownloadStats',
			'reports-import'                 => $namespace . 'Reports\Import',
			'reports-orders'                 => $namespace . 'Reports\Orders',
			'reports-order-stats'            => $namespace . 'Reports\OrderStats',
			'reports-performance-indicators' => $namespace . 'Reports\PerformanceIndicators',
			'reports-products'               => $namespace . 'Reports\Products',
			'reports-product-stats'          => $namespace . 'Reports\ProductStats',
			'reports-revenue-stats'          => $namespace . 'Reports\RevenueStats',
			'reports-stock'                  => $namespace . 'Reports\Stock',
			'reports-stock-stats'            => $namespace . 'Reports\StockStats',
			'reports-taxes'                  => $namespace . 'Reports\Taxes',
			'reports-tax-stats'              => $namespace . 'Reports\TaxStats',
			'reports-variations'             => $namespace . 'Reports\Variations',
		];

		if ( \WC_Admin_Loader::is_feature_enabled( 'onboarding' ) ) {
			$controllers['onboarding-levels']  = $namespace . 'Onboarding\Levels';
			$controllers['onboarding-profile'] = $namespace . 'Onboarding\Profile';
			$controllers['onboarding-plugins'] = $namespace . 'Onboarding\Plugins';
		}

		return $controllers;
	}
}
