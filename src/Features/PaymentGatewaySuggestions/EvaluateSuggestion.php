<?php
/**
 * Evaluates the spec and returns a status.
 */

namespace Automattic\WooCommerce\Admin\Features\PaymentGatewaySuggestions;

defined( 'ABSPATH' ) || exit;

use Automattic\WooCommerce\Admin\RemoteInboxNotifications\RuleEvaluator;

/**
 * Evaluates the spec and returns the evaluated suggestion.
 */
class EvaluateSuggestion {
	/**
	 * Evaluates the spec and returns the suggestion.
	 *
	 * @param object $spec The suggestion to evaluate.
	 * @return object The evaluated suggestion.
	 */
	public static function evaluate( $spec ) {
		$rule_evaluator = new RuleEvaluator();
		$suggestion     = clone $spec;

		if ( isset( $suggestion->is_visible ) ) {
			$is_visible             = $rule_evaluator->evaluate( $suggestion->is_visible );
			$suggestion->is_visible = $is_visible;
		}

		return $suggestion;
	}
}
