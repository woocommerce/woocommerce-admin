<?php
/**
 * ArrayColumn tests.
 *
 * @package WooCommerce\Admin\Tests\RemoteInboxNotifications
 */

use Automattic\WooCommerce\Admin\RemoteInboxNotifications\Transformers\ArrayColumn;


/**
 * class WC_Tests_RemoteInboxNotifications_Transformers_ArrayColumn
 */
class WC_Tests_RemoteInboxNotifications_Transformers_ArrayColumn extends WC_Unit_Test_Case {
	/**
	 * Test it throw InvalidArgumentException when required argument is missing.
	 *
	 * @expectedException InvalidArgumentException
	 */
	public function test_it_throws_exception_when_required_argument_is_missing() {
		$arguments = (object) array();
		new ArrayColumn( $arguments );
	}

	/**
	 * Test it returns value by array column.
	 */
	public function test_it_returns_value_by_array_column() {
		$items = array(
			array(
				'name' => 'mothra',
			),
			array(
				'name' => 'gezora',
			),
			array(
				'name' => 'ghidorah',
			),
		);

		$arguments    = (object) array( 'key' => 'name' );
		$array_column = new ArrayColumn( $arguments );
		$result       = $array_column->transform( $items );
		$expected     = array( 'mothra', 'gezora', 'ghidorah' );
		$this->assertEquals( $expected, $result );
	}
}
