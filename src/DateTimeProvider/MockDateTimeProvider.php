<?php
/**
 * A mock provider for getting the current DateTime, designed for use in unit
 * tests. The production (non-mocked) provider is CurrentDateTimeProvider.
 *
 * @package WooCommerce Admin/Classes
 */

namespace Automattic\WooCommerce\Admin\DateTimeProvider;

defined( 'ABSPATH' ) || exit;

use Automattic\WooCommerce\Admin\DateTimeProvider\DateTimeProviderInterface;

/**
 * Mock DateTime Provider.
 *
 * Returns the provided DateTime instead of the current DateTime. Needed for
 * unit tests.
 */
class MockDateTimeProvider implements DateTimeProviderInterface {
	/**
	 * Construct the mock DateTime provider using the specified value for now.
	 *
	 * @param DateTime $now The value to use for now.
	 */
	public function __construct( $now ) {
		$this->now = $now;
	}

	/**
	 * Returns the specified DateTime.
	 *
	 * @return DateTime
	 */
	public function get_now() {
		return $this->now;
	}
}
