<?php

namespace Automattic\WooCommerce\Admin\RemoteInboxNotifications\Transformers;

use Automattic\WooCommerce\Admin\RemoteInboxNotifications\TransformerInterface;
use InvalidArgumentException;
use stdClass;

/**
 * Searches a given a given value in the array.
 *
 * @package Automattic\WooCommerce\Admin\RemoteInboxNotifications\Transformers
 */
class ArraySearch implements TransformerInterface {
	/**
	 * A value to search in the array.
	 *
	 * @var string $value a value to search.
	 */
	private $value;

	/**
	 * ArraySearch constructor.
	 *
	 * @param stdClass|null $arguments required arguments.
	 * @throws InvalidArgumentException Throws when one of the requried arguments is missing.
	 */
	public function __construct( stdClass $arguments = null ) {
		if ( ! isset( $arguments->value ) ) {
			throw new InvalidArgumentException( "ArraySearch: Missing required argument 'value'" );
		}

		$this->value = $arguments->value;
	}
	/**
	 * Search a given value in the array.
	 *
	 * @param mixed $value a value to transform.
	 *
	 * @return mixed|null
	 */
	public function transform( $value ) {
		$key = array_search( $this->value, $value, true );
		if ( false !== $key ) {
			return $value[ $key ];
		}

		return null;
	}
}
