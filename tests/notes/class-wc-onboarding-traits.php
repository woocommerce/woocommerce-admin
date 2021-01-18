<?php
/**
 * Email notes tests
 *
 * @package WooCommerce\Admin\Tests\Notes
 */

use \Automattic\WooCommerce\Admin\Notes\OnboardingTraits;

/**
 * Class WC_Tests_Onboarding_Traits
 */
class WC_Tests_Onboarding_Traits extends WC_Unit_Test_Case {

	/** Host the traits class we are testing */
	use OnboardingTraits;

	/**
	 * The options that we modify during this test suite.
	 *
	 * @var array
	 */
	private static $original_options;

	/**
	 * Setup for the whole test class.
	 */
	public static function setUpBeforeClass() {
		parent::setUpBeforeClass();

		self::$original_options = get_option( 'woocommerce_onboarding_profile', array() );
	}

		/**
		 * Cleans up test data once all test have run.
		 */
	public static function tearDownAfterClass() {
		parent::tearDownAfterClass();

		update_option( 'woocommerce_onboarding_profile', self::$original_options );
	}

	/**
	 * Test revenue_is_within functionality.
	 */
	public function test_revenue_is_within() {
		update_option( 'woocommerce_onboarding_profile', (object) array( 'revenue' => 1500 ) );

		$this->assertEquals( self::revenue_is_within( 1200, 1500 ), true );
		$this->assertEquals( self::revenue_is_within( 0, 1500 ), true );
		$this->assertEquals( self::revenue_is_within( 1600, 2000 ), false );
		$this->assertEquals( self::revenue_is_within( 0, 100 ), false );
	}

	/**
	 * Test onboarding_started functionality.
	 */
	public function test_onboarding_started() {
		update_option( 'woocommerce_onboarding_profile', null );
		$this->assertEquals( self::onboarding_profile_started(), false );

		update_option( 'woocommerce_onboarding_profile', array() );
		$this->assertEquals( self::onboarding_profile_started(), true );
	}

	/**
	 * Test store_setup_for_client functionality.
	 */
	public function test_store_setup_for_client() {
		update_option( 'woocommerce_onboarding_profile', (object) array( 'setup_client' => true ) );
		$this->assertEquals( self::store_setup_for_client(), true );

		update_option( 'woocommerce_onboarding_profile', null );
		$this->assertEquals( self::store_setup_for_client(), false );

		update_option( 'woocommerce_onboarding_profile', (object) array( 'setup_client' => false ) );
		$this->assertEquals( self::store_setup_for_client(), false );
	}
}
