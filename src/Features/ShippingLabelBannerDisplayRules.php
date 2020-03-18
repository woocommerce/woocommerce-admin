<?php
/**
 * WooCommerce Onboarding Tasks
 * NOTE: DO NOT edit this file in WooCommerce core, this is generated from woocommerce-admin.
 *
 * @package Woocommerce Admin
 */

namespace Automattic\WooCommerce\Admin\Features;

use \Automattic\WooCommerce\Admin\Loader;

/**
 * Determines whether or not the Shipping Label Banner should be displayed
 */
class ShippingLabelBannerDisplayRules {

	/**
	 * Holds the installed Jetpack version.
	 *
	 * @var string
	 */
	private $jetpack_version;


	/**
	 * Whether or not the installed Jetpack is connected.
	 *
	 * @var bool
	 */
	private $jetpack_connected;

	/**
	 * Holds the installed WooCommerce Services version.
	 *
	 * @var string
	 */
	private $wcs_version;

	/**
	 * Whether or not there're plugins installed incompatible with the banner.
	 *
	 * @var bool
	 */
	private $no_incompatible_plugins_installed;

	/**
	 * Whether or not the WooCommerce Services ToS has been accepted.
	 *
	 * @var bool
	 */
	private $wcs_tos_accepted;

	/**
	 * Minimum supported Jetpack version.
	 *
	 * @var string
	 */
	private $min_jetpack_version = '4.4';

	/**
	 * Minimum supported WooCommerce Services version.
	 *
	 * @var string
	 */
	private $min_wcs_version = '1.22.5';

	/**
	 * Supported countries by USPS, see: https://webpmt.usps.gov/pmt010.cfm
	 *
	 * @var array
	 */
	private $supported_countries = array( 'US', 'AS', 'PR', 'VI', 'GU', 'MP', 'UM', 'FM', 'MH' );

	/**
	 * Array of supported currency codes.
	 *
	 * @var array
	 */
	private $supported_currencies = array( 'USD' );


	/**
	 * Constructor.
	 *
	 * @param string $jetpack_version Installed Jetpack version to check.
	 * @param bool   $jetpack_connected Is Jetpack connected?.
	 * @param string $wcs_version Installed WooCommerce Services version to check.
	 * @param bool   $wcs_tos_accepted WooCommerce Services Terms of Service accepted?.
	 * @param bool   $incompatible_plugins_installed Are there any incompatible plugins installed?.
	 */
	public function __construct( $jetpack_version, $jetpack_connected, $wcs_version, $wcs_tos_accepted, $incompatible_plugins_installed ) {
		$this->jetpack_version                   = $jetpack_version;
		$this->jetpack_connected                 = $jetpack_connected;
		$this->wcs_version                       = $wcs_version;
		$this->wcs_tos_accepted                  = $wcs_tos_accepted;
		$this->no_incompatible_plugins_installed = ! $incompatible_plugins_installed;
	}

	/**
	 * Determines whether or not the banner should be displayed.
	 */
	public function should_display_banner() {
		if ( ! $this->should_allow_banner() ) {
			return false;
		}
		$ab_test = get_option( 'woocommerce_shipping_prompt_ab' );

		// If it doesn't exist yet, generate it for later use and save it, so we always show the same to this user.
		if ( ! $ab_test ) {
			$ab_test = 1 !== wp_rand( 1, 4 ) ? 'a' : 'b'; // 25% of users. b gets the prompt.
			update_option( 'woocommerce_shipping_prompt_ab', $ab_test );
		}

		return 'b' === $ab_test;
	}


	/**
	 * Determines whether banner is eligible for display (does not include a/b logic).
	 */
	public function should_allow_banner() {
		return $this->banner_not_dismissed() &&
			$this->jetpack_installed_and_active() &&
			$this->jetpack_up_to_date() &&
			$this->jetpack_connected &&
			$this->no_incompatible_plugins_installed &&
			$this->order_has_shippable_products() &&
			$this->store_in_us_and_usd() &&
			( $this->wcs_not_installed() || (
				$this->wcs_up_to_date() && ! $this->wcs_tos_accepted
			) );
	}

	/**
	 * Checks if the banner was not dismissed by the user.
	 *
	 * @return bool
	 */
	private function banner_not_dismissed() {
		$dismissed_timestamp = get_option( 'woocommerce_shipping_dismissed_timestamp' );

		$dismissed_for_good = -1 === $dismissed_timestamp;
		$dismissed_24h      = time() < $dismissed_timestamp;

		return ! $dismissed_for_good && ! $dismissed_24h;
	}

	/**
	 * Checks if jetpack is installed and active.
	 *
	 * @return bool
	 */
	private function jetpack_installed_and_active() {
		return ! ! $this->jetpack_version;
	}

	/**
	 * Checks if Jetpack version is supported.
	 *
	 * @return bool
	 */
	private function jetpack_up_to_date() {
		return version_compare( $this->jetpack_version, $this->min_jetpack_version, '>=' );
	}

	/**
	 * Checks if there's a shippable product in the current order.
	 *
	 * @return bool
	 */
	private function order_has_shippable_products() {
		$post = get_post();
		if ( ! $post ) {
			return false;
		}

		$order = wc_get_order( get_post()->ID );

		if ( ! $order ) {
			return false;
		}
		// At this point (no packaging data), only show if there's at least one existing and shippable product.
		foreach ( $order->get_items() as $item ) {
			if ( $item instanceof \WC_Order_Item_Product ) {
				$product = $item->get_product();

				if ( $product && $product->needs_shipping() ) {
					return true;
				}
			}
		}

		return false;
	}

	/**
	 * Checks if the store is in the US and has its default currency set to USD.
	 *
	 * @return bool
	 */
	private function store_in_us_and_usd() {
		$base_currency = get_woocommerce_currency();
		$base_location = wc_get_base_location();

		return in_array( $base_currency, $this->supported_currencies, true ) && in_array( $base_location['country'], $this->supported_countries, true );
	}

	/**
	 * Checks if WooCommerce Services is not installed.
	 *
	 * @return bool
	 */
	private function wcs_not_installed() {
		return ! $this->wcs_version;
	}

	/**
	 * Checks if WooCommerce Services is up to date.
	 */
	private function wcs_up_to_date() {
		return $this->wcs_version && version_compare( $this->wcs_version, $this->min_wcs_version, '>=' );
	}
}
