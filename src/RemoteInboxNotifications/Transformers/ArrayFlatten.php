<?php

namespace Automattic\WooCommerce\Admin\RemoteInboxNotifications\Transformers;

use Automattic\WooCommerce\Admin\RemoteInboxNotifications\TransformerInterface;
use stdClass;

/**
 * Flatten nested array.
 *
 * @package Automattic\WooCommerce\Admin\RemoteInboxNotifications\Transformers
 */
class ArrayFlatten implements TransformerInterface {
	/**
	 * Search a given value in the array.
	 *
	 * @param mixed         $value a value to transform.
	 * @param stdClass|null $arguments arguments.
	 *
	 * @return mixed|null
	 */
	public function transform( $value, stdClass $arguments = null ) {
		if ( ! is_array( $value ) ) {
			return null;
		}

		$return = array();
		array_walk_recursive(
			$value,
			function( $item ) use ( &$return ) {
				$return[] = $item;
			}
		);

		return $return;
	}
}
