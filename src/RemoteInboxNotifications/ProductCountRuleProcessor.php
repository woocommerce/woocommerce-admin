<?php
/**
 * Rule processor that performs a comparison operation against the number of
 * products.
 *
 * @package WooCommerce Admin/Classes
 */

namespace Automattic\WooCommerce\Admin\RemoteInboxNotifications;

defined( 'ABSPATH' ) || exit;

/**
 * Rule processor that performs a comparison operation against the number of
 * products.
 */
class ProductCountRuleProcessor {
	/**
	 * Constructor.
	 *
	 * @param object $products_provider The products provider.
	 */
	public function __construct( $products_provider ) {
		$this->products_provider = $products_provider;
	}

	/**
	 * Performs a comparison operation against the number of products.
	 *
	 * @param object $rule The specific rule being processed by this rule processor.
	 * @param object $data Remote inbox notifications data.
	 *
	 * @return bool The result of the operation.
	 */
	public function process( $rule, $data ) {
		$count = $this->products_provider->get_product_count();

		return ComparisonOperation::compare(
			$count,
			$rule->value,
			$rule->operation
		);
	}
}
