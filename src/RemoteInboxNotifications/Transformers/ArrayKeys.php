<?php

namespace Automattic\WooCommerce\Admin\RemoteInboxNotifications\Transformers;

use Automattic\WooCommerce\Admin\RemoteInboxNotifications\TransformerInterface;
use stdClass;

/**
 * Search array value by one of its key.
 *
 * @package Automattic\WooCommerce\Admin\RemoteInboxNotifications\Transformers
 */
class ArrayKeys implements TransformerInterface {
	/**
	 * ArrayKeys constructor.
	 *
	 * @param stdClass|null $arguments required arguments.
	 */
	public function __construct( stdClass $arguments = null ) {}

	/**
	 * Search array value by one of its key.
	 *
	 * @param mixed $value a value to transform.
	 *
	 * @return mixed
	 */
	public function transform( $value ) {
		return array_keys( $value );
	}
}
