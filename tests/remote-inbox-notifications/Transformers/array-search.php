<?php
/**
 * ArraySearch tests.
 *
 * @package WooCommerce\Admin\Tests\RemoteInboxNotifications
 */

use Automattic\WooCommerce\Admin\RemoteInboxNotifications\Transformers\ArraySearch;

/**
 * class WC_Tests_RemoteInboxNotifications_Transformers_ArraySearch
 */
class WC_Tests_RemoteInboxNotifications_Transformers_ArraySearch extends WC_Unit_Test_Case {
	/**
	 * Test it throw InvalidArgumentException when required argument is missing.
	 *
	 * @expectedException InvalidArgumentException
	 */
	public function test_it_throws_exception_when_required_argument_is_missing() {
		$arguments = (object) array();
		new ArraySearch( $arguments );
	}

	/**
	 * Test it returns null if value is not found.
	 */
	public function test_it_returns_null_if_value_is_not_found() {
		$items        = array( 'item1', 'item2' );
		$arguments    = (object) array( 'value' => 'item3' );
		$array_column = new ArraySearch( $arguments );
		$result       = $array_column->transform( $items );
		$this->assertEquals( null, $result );
	}

	/**
	 * Test it returns value by array value.
	 */
	public function test_it_returns_value_by_array_value() {
		$items        = array( 'item1', 'item2' );
		$arguments    = (object) array( 'value' => 'item2' );
		$array_column = new ArraySearch( $arguments );
		$result       = $array_column->transform( $items );
		$this->assertEquals( 'item2', $result );
	}
}
