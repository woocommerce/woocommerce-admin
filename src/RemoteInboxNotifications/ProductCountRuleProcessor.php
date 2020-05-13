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
	 * @param object $product_query The product query.
	 */
	public function __construct( $product_query ) {
		$this->product_query = $product_query;
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
		$products = $this->product_query->get_products();
		$count    = count( $products );

		return ComparisonOperation::compare(
			$count,
			$rule->value,
			$rule->operation
		);
	}
}
