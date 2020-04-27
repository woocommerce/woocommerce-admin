<?php
/**
 * Onboarding Themes Tests.
 *
 * @package WooCommerce\Tests\Onboarding-themes
 */

use \Automattic\WooCommerce\Admin\Features\Onboarding;

/**
 * Class WC_Tests_Onboarding
 */
class WC_Tests_Onboarding extends WC_Unit_Test_Case {

	/**
	 * Tests that the themes returned from woocommerce.com are sorted properly.
	 * - The first result should be the active theme.
	 * - The second result should always be Storefront.
	 */
	public function test_get_themes_storefront_first() {
		// TODO: Perhaps we should mock the call to the remote in get_themes to speed things up.
		$themes = \Automattic\WooCommerce\Admin\Features\Onboarding::get_themes();

		// The default/installed theme should be first.
		$first_theme  = $themes[0];
		$active_theme = get_option( 'stylesheet' );
		$this->assertEquals( $active_theme, $first_theme['slug'] );

		// Storefront should be sorted to the second position in the array.
		$second_theme = $themes[1];
		$this->assertEquals( 'storefront', $second_theme['slug'] );
	}

}
