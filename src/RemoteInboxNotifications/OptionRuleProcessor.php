<?php
/**
 * Rule processor that performs a comparison operation against an option value.
 */

namespace Automattic\WooCommerce\Admin\RemoteInboxNotifications;

defined( 'ABSPATH' ) || exit;

/**
 * Rule processor that performs a comparison operation against an option value.
 */
class OptionRuleProcessor implements RuleProcessorInterface {
	/**
	 * Performs a comparison operation against the option value.
	 *
	 * @param object $rule The specific rule being processed by this rule processor.
	 * @param object $stored_state Stored state.
	 *
	 * @return bool The result of the operation.
	 */
	public function process( $rule, $stored_state ) {
		$default      = isset( $rule->default ) ? $rule->default : false;
		$option_name  = $rule->option_name;
		$dot_notation = false;

		// see if option_name contains dot notation.
		if ( strpos( $rule->option_name, '.' ) !== false ) {
			$segments = explode( '.', $rule->option_name );
			// get the first segment -- it's the value for the option_name field.
			$option_name = array_shift( $segments );

			// reconstruct dot notation without the first segment (option_name).
			$dot_notation = implode( '.', $segments );
		}

		$option_value = get_option( $option_name, $default );
		// if we have dot notation and the $option_value is an array, get the value using dot notation.
		if ( $dot_notation && is_array( $option_value ) ) {
			$option_value = $this->get_array_value_by_dot( $option_value, $dot_notation, $default );
		}

		return ComparisonOperation::compare(
			$option_value,
			$rule->value,
			$rule->operation
		);
	}

	/**
	 * Validates the rule.
	 *
	 * @param object $rule The rule to validate.
	 *
	 * @return bool Pass/fail.
	 */
	public function validate( $rule ) {
		if ( ! isset( $rule->option_name ) ) {
			return false;
		}

		if ( ! isset( $rule->value ) ) {
			return false;
		}

		if ( ! isset( $rule->operation ) ) {
			return false;
		}

		return true;
	}

	/**
	 * Access array values using dot notation
	 *
	 * @param array  $array an array to search $key value in.
	 * @param string $key dot notation.
	 * @param null   $default default value to return when $key is not found.
	 *
	 * @return mixed|null
	 */
	private function get_array_value_by_dot( $array, $key, $default = null ) {
		if ( isset( $array[ $key ] ) ) {
			return $array[ $key ];
		}

		foreach ( explode( '.', $key ) as $segment ) {
			if ( ! is_array( $array ) || ! array_key_exists( $segment, $array ) ) {
				return $default;
			}

			$array = $array[ $segment ];
		}

		return $array;
	}
}
