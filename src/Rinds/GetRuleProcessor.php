<?php
/**
 * Gets the processor for the specified rule type.
 *
 * @package WooCommerce Admin/Classes
 */

namespace Automattic\WooCommerce\Admin\Rinds;

defined( 'ABSPATH' ) || exit;

use \Automattic\WooCommerce\Admin\DateTimeProvider\CurrentDateTimeProvider;
use \Automattic\WooCommerce\Admin\PluginsProvider\PluginsProvider;

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
		switch ( $rule_type ) {
			case 'plugins_activated':
				return new PluginsActivatedRuleProcessor(
					new PluginsProvider()
				);
			case 'publish_after_time':
				return new PublishAfterTimeRuleProcessor(
					new CurrentDateTimeProvider()
				);
			case 'publish_before_time':
				return new PublishBeforeTimeRuleProcessor(
					new CurrentDateTimeProvider()
				);
			case 'not':
				return new NotRuleProcessor(
					new RuleEvaluator(
						new GetRuleProcessor()
					)
				);
			case 'or':
				return new OrRuleProcessor(
					new RuleEvaluator(
						new GetRuleProcessor()
					)
				);
			case 'fail':
				return new FailRuleProcessor();
			case 'pass':
				return new PassRuleProcessor();
			case 'plugin_version':
				return new PluginVersionRuleProcessor(
					new PluginsProvider()
				);
		}

		return new FailRuleProcessor();
	}
}
