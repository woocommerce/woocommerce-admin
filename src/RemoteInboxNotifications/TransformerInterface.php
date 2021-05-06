<?php

namespace Automattic\WooCommerce\Admin\RemoteInboxNotifications;

use stdClass;

/**
 * An interface to define a transformer.
 *
 * Interface TransformerInterface
 *
 * @package Automattic\WooCommerce\Admin\RemoteInboxNotifications
 */
interface TransformerInterface {
	/**
	 * TransformerInterface constructor.
	 *
	 * Argument validation should be done in the constructor.
	 *
	 * @param stdClass|null $arguments required arguments.
	 */
	public function __construct( stdClass $arguments = null);

	/**
	 * Transform given value to a different value.
	 *
	 * @param mixed $value a value to transform.
	 *
	 * @return mixed|null
	 */
	public function transform( $value);
}
