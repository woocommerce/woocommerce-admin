<?php

namespace Automattic\WooCommerce\Admin\RemoteInboxNotifications\Transformers;

use Automattic\WooCommerce\Admin\RemoteInboxNotifications\TransformerInterface;
use InvalidArgumentException;
use stdClass;

/**
 * Search array value by one of its key.
 *
 * @package Automattic\WooCommerce\Admin\RemoteInboxNotifications\Transformers
 */
class ArrayColumn implements TransformerInterface {
	/**
	 * Array key to search.
	 *
	 * @var string $key array key to search.
	 */
	private $key;

	/**
	 * ArrayColumn constructor.
	 *
	 * @param stdClass|null $arguments required arguments.
	 * @throws InvalidArgumentException Throws when one of the requried arguments is missing.
	 */
	public function __construct( stdClass $arguments = null ) {
		if ( ! isset( $arguments->key ) ) {
			throw new InvalidArgumentException( "ArrayColumn: Missing required argument 'key'" );
		}
		$this->key = $arguments->key;
	}

	/**
	 * Search array value by one of its key.
	 *
	 * @param mixed $value a value to transform.
	 *
	 * @return mixed
	 */
	public function transform( $value ) {
		return array_column( $value, $this->key );
	}
}
