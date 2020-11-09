<?php
/**
 * Onboarding Themes Tests.
 *
 * @package WooCommerce\Admin\Tests\OnboardingThemes
 */

use \Automattic\WooCommerce\Admin\Features\CustomerEffortScoreTracks;

/**
 * Class WC_Tests_Onboarding
 */
class WC_Tests_CES_Tracks extends WC_Unit_Test_Case {

	/**
	 * @var CustomerEffortScoreTracks
	 */
	private $ces;

	/**
	 * Overridden setUp method from PHPUnit
	 */
	public function setUp() {
		$this->ces = new CustomerEffortScoreTracks();
		update_option( 'woocommerce_allow_tracking', 'yes' );
		parent::setUp();
	}

	/**
	 * Verify that it adds correct action to the queue on woocommerce_update_options action.
	 */
	public function test_updating_options_triggers_ces() {
		do_action( 'woocommerce_update_options' );

		$ces = $this->ces;

		$queue_items = get_option( $ces::CES_TRACKS_QUEUE_OPTION_NAME );
		$this->assertNotEmpty( $queue_items );

		$expected_queue_item = array_filter(
			$queue_items,
			function ( $item ) use ( $ces ) {
				return $ces::SETTINGS_CHANGE_ACTION_NAME === $item['action'];
			}
		);

		$this->assertCount( 1, $expected_queue_item );
	}
}
