<?php
/**
 * DotNotation tests.
 *
 * @package WooCommerce\Admin\Tests\RemoteInboxNotifications
 */

use Automattic\WooCommerce\Admin\RemoteInboxNotifications\Transformers\DotNotation;


/**
 * class WC_Tests_RemoteInboxNotifications_Transformers_DotNotation
 */
class WC_Tests_RemoteInboxNotifications_Transformers_DotNotation extends WC_Unit_Test_Case {

	/**
	 * Test it throw InvalidArgumentException when required argument is missing
	 *
	 * @expectedException InvalidArgumentException
	 */
	public function test_it_throws_exception_when_required_argument_is_missing() {
		$arguments = (object) array();
		new DotNotation( $arguments );
	}

	/**
	 * Test it can get value by index
	 */
	public function test_it_can_get_value_by_index() {
		$arguments    = (object) array( 'path' => '0' );
		$dot_notation = new DotNotation( $arguments );
		$item         = array( 'name' => 'test' );
		$items        = array( $item );

		$result = $dot_notation->transform( $items );
		$this->assertEquals( $result, $item );
	}

	/**
	 * Test it get getvalue by dot notation.
	 */
	public function test_it_can_get_value_by_dot_notation() {
		$arguments = (object) array( 'path' => 'teams.mothra' );

		$items = array(
			'teams' => array(
				'mothra' => 'nice!',
			),
		);

		$dot_notation = new DotNotation( $arguments );
		$result       = $dot_notation->transform( $items );
		$this->assertEquals( 'nice!', $result );
	}
}
