<?php
/**
 * Compare two operands using the specified operation.
 */

namespace Automattic\WooCommerce\Admin\RemoteInboxNotifications;

defined( 'ABSPATH' ) || exit;

/**
 * Compare two operands using the specified operation.
 */
class ComparisonOperation {
	/**
	 * Compare two operands using the specified operation.
	 *
	 * @param object $left_operand  The left hand operand.
	 * @param object $right_operand The right hand operand.
	 * @param string $operation     The operation used to compare the operands.
	 */
	public static function compare( $left_operand, $right_operand, $operation ) {
		if ( $operation && strpos( $operation, 'contains' ) !== false && ! is_array( $left_operand ) ) {
			$logger = wc_get_logger();
			$logger->warning(
				'Operation comparison "contains" option value is not an array, defaulting to empty array.',
				array(
					'operation'     => $operation,
					'left_operand'  => $left_operand,
					'right_operand' => $right_operand,
				)
			);
			$left_operand = array();
		}
		switch ( $operation ) {
			case '=':
				return $left_operand === $right_operand;
			case '<':
				return $left_operand < $right_operand;
			case '<=':
				return $left_operand <= $right_operand;
			case '>':
				return $left_operand > $right_operand;
			case '>=':
				return $left_operand >= $right_operand;
			case '!=':
				return $left_operand !== $right_operand;
			case 'contains':
				return in_array( $right_operand, $left_operand, true );
			case '!contains':
				return ! in_array( $right_operand, $left_operand, true );
		}

		return false;
	}
}
