<?php

namespace Automattic\WooCommerce\Admin\RemoteInboxNotifications\Transformers;

use Automattic\WooCommerce\Admin\RemoteInboxNotifications\TransformerInterface;
use InvalidArgumentException;
use stdClass;

/**
 * Flatten nested array.
 *
 * @package Automattic\WooCommerce\Admin\RemoteInboxNotifications\Transformers
 */
class ArrayFlatten implements TransformerInterface {
	/**
	 * ArrayFlatten constructor.
	 *
	 * @param stdClass|null $arguments required arguments.
	 */
	public function __construct( stdClass $arguments = null ) {}
	/**
	 * Search a given value in the array.
	 *
	 * @param mixed $value a value to transform.
	 *
	 * @return mixed|null
	 */
	public function transform( $value ) {
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
