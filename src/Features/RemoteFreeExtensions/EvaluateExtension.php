<?php
/**
 * Evaluates the spec and returns a status.
 */

namespace Automattic\WooCommerce\Admin\Features\RemoteFreeExtensions;

defined( 'ABSPATH' ) || exit;

use Automattic\WooCommerce\Admin\RemoteInboxNotifications\RuleEvaluator;

/**
 * Evaluates the spec and returns the evaluated extension.
 */
class EvaluateExtension {
	/**
	 * Evaluates the spec and returns the extension.
	 *
	 * @param array $spec The extension to evaluate.
	 * @return array The evaluated extension.
	 */
	public static function evaluate( $spec ) {
		$rule_evaluator = new RuleEvaluator();

		if ( isset( $spec->is_visible ) ) {
			$is_visible       = $rule_evaluator->evaluate( (object) $spec->is_visible );
			$spec->is_visible = $is_visible;
		} else {
			$plugin->is_visible = true;
		}

		return $spec;
	}
}
