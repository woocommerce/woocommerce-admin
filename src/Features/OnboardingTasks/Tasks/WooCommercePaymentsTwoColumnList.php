<?php

namespace Automattic\WooCommerce\Admin\Features\OnboardingTasks\Tasks;

/**
 * WooCommercePayments Task
 */
class WooCommercePaymentsTwoColumnList extends WooCommercePayments {

	/**
	 * Task visibility.
	 *
	 * @return bool
	 */
	public function can_view() {
		return self::is_requested() &&
			self::is_installed() &&
			self::is_supported() &&
			! self::is_connected();
	}
}
