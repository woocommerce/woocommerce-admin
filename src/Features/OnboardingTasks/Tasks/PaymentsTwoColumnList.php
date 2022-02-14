<?php

namespace Automattic\WooCommerce\Admin\Features\OnboardingTasks\Tasks;

use Automattic\WooCommerce\Admin\Features\OnboardingTasks\Tasks\WooCommercePaymentsTwoColumnList;

/**
 * Payments Task
 */
class PaymentsTwoColumnList extends Payments {
	/**
	 * Title.
	 *
	 * @return string
	 */
	public function get_title() {
		$woocommerce_payments = $this->task_list->get_task( 'woocommerce-payments' );
		return $woocommerce_payments->can_view()
			? __( 'Set up additional payment providers', 'woocommerce-admin' )
			: __( 'Set up payments', 'woocommerce-admin' );
	}
}
