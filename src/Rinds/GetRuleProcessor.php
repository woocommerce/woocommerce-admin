<?php
/**
 * Gets the processor for the specified rule type.
 *
 * @package WooCommerce Admin/Classes
 */

namespace Automattic\WooCommerce\Admin\Rinds;

defined( 'ABSPATH' ) || exit;

use \Automattic\WooCommerce\Admin\DateTimeProvider\CurrentDateTimeProvider;
use \Automattic\WooCommerce\Admin\PluginsProvider\LivePluginsProvider;

/**
 * Class encapsulating getting the processor for a given rule type.
 */
class GetRuleProcessor {
	/**
	 * Get the processor for the specified rule type.
	 *
	 * @param string $rule_type The rule type.
	 *
	 * @return object The matching processor for the specified rule type, or a FailRuleProcessor if no matching processor is found.
	 */
	public static function get_processor( $rule_type ) {
		if ( 'plugins_activated' === $rule_type ) {
			return new PluginsActivatedRuleProcessor(
				new LivePluginsProvider()
			);
		} elseif ( 'send_at_time' === $rule_type ) {
			return new SendAtTimeRuleProcessor(
				new CurrentDateTimeProvider()
			);
		} elseif ( 'resend_after_dismissal' === $rule_type ) {
			return new ResendAfterDismissalRuleProcessor();
		}

		return new FailRuleProcessor();
	}
}
