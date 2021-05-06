<?php

namespace Automattic\WooCommerce\Admin\RemoteInboxNotifications\Transformers;

use Automattic\WooCommerce\Admin\RemoteInboxNotifications\TransformerInterface;
use InvalidArgumentException;
use stdClass;

/**
 * Find an array value by dot notation.
 *
 * @package Automattic\WooCommerce\Admin\RemoteInboxNotifications\Transformers
 */
class DotNotation implements  TransformerInterface {
	/**
	 * Path for the searching array value.
	 *
	 * @var string array path
	 */
	private $path;

	/**
	 * DotNotation constructor.
	 *
	 * @param stdClass|null $arguments arguments.
	 * @throws InvalidArgumentException Throws when one of the requried arguments is missing.
	 */
	public function __construct( stdClass $arguments = null ) {
		if ( ! isset( $arguments->path ) ) {
			throw new InvalidArgumentException( "Dot: Missing required argument 'path'" );
		}
		$this->path = $arguments->path;
	}
	/**
	 * Find given path from the given value.
	 *
	 * @param mixed $value a value to transform.
	 *
	 * @return mixed
	 */
	public function transform( $value ) {
		if ( is_object( $value ) ) {
			// if the value is an object, convert it to an array.
			$value = json_decode( wp_json_encode( $value ), true );
		}

		return $this->get( $value, $this->path );
	}

	/**
	 * Find the given $path in $array by dot notation.
	 *
	 * @param array  $array an array to search in.
	 * @param string $path a path in the given array.
	 * @param null   $default default value to return if $path was not found.
	 *
	 * @return mixed|null
	 */
	public function get( $array, $path, $default = null ) {
		if ( isset( $array[ $path ] ) ) {
			return $array[ $path ];
		}

		foreach ( explode( '.', $path ) as $segment ) {
			if ( ! is_array( $array ) || ! array_key_exists( $segment, $array ) ) {
				return $default;
			}

			$array = $array[ $segment ];
		}

		return $array;
	}
}
