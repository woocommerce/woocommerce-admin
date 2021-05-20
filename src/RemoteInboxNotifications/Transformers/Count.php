<?php

namespace Automattic\WooCommerce\Admin\RemoteInboxNotifications\Transformers;

use Automattic\WooCommerce\Admin\RemoteInboxNotifications\TransformerInterface;
use stdClass;

/**
 * Count elements in Countable or Array.
 *
 * @package Automattic\WooCommerce\Admin\RemoteInboxNotifications\Transformers
 */
class Count implements TransformerInterface {
	/**
	 *  Count elements in Countable or Array.
	 *
	 * @param mixed         $value a value to transform.
	 * @param stdClass|null $arguments arguments.
	 *
	 * @return mixed
	 */
	public function transform( $value, stdClass $arguments = null ) {
		return count( $value );
	}

	/**
	 * Validate Transformer arguments.
	 *
	 * @param stdClass|null $arguments arguments to validate.
	 *
	 * @return mixed
	 */
	public function validate( stdClass $arguments = null ) {
		return true;
	}
}
