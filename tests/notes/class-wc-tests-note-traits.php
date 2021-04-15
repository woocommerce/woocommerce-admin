<?php
/**
 * NoteTraits tests
 *
 * @package WooCommerce\Admin\Tests\Notes
 */

use Automattic\WooCommerce\Admin\Notes\NotesDisabledException;
use Automattic\WooCommerce\Admin\Notes\Note;
use Automattic\WooCommerce\Admin\Notes\Notes;
use Automattic\WooCommerce\Admin\Notes\NoteTraits;

/**
 * Class WC_Tests_NoteTraits
 */
class WC_Tests_NoteTraits extends WC_Unit_Test_Case {

	/** Host the traits class we are testing */
	use NoteTraits;

	/**
	 * Constant required to use NoteTraits.
	 */
	const NOTE_NAME = 'Test note';

	/**
	 * @doesNotPerformAssertions
	 * @dataProvider methods_causing_exception_if_wc_admin_is_disabled_provider
	 * @dataProvider methods_never_causing_exception_provider
	 *
	 * @param callable $callback Tested NoteTraits method.
	 */
	public function test_no_exception_is_thrown_if_data_store_is_unavailable( $callback ) {
		$callback();
	}

	/**
	 * @dataProvider methods_causing_exception_if_wc_admin_is_disabled_provider
	 *
	 * @param callable $callback Tested NoteTraits method.
	 */
	public function test_exception_is_thrown_if_wc_admin_is_disabled( $callback ) {
		add_filter( 'woocommerce_data_stores', '__return_empty_array' );
		$this->expectException( NotesDisabledException::class );
		$callback();
		remove_filter( 'woocommerce_data_stores', '__return_empty_array' );
	}

	/**
	 * @doesNotPerformAssertions
	 * @dataProvider methods_never_causing_exception_provider
	 *
	 * @param callable $callback Tested NoteTraits method.
	 */
	public function test_no_exception_is_thrown_if_wc_admin_is_disabled( $callback ) {
		add_filter( 'woocommerce_data_stores', '__return_empty_array' );
		$callback();
		remove_filter( 'woocommerce_data_stores', '__return_empty_array' );
	}

	/**
	 * Method required to use NoteTraits.
	 *
	 * @return Note
	 */
	public static function get_note() {
		return new Note();
	}

	/**
	 * Data provider providing methods that should throw an exception
	 * only if WC Admin is disabled.
	 *
	 * @return array[]
	 */
	public function methods_causing_exception_if_wc_admin_is_disabled_provider() {
		return array(
			array(
				function () {
					self::note_exists();
				},
			),
			array(
				function () {
					self::can_be_added();
				},
			),
			array(
				function () {
					self::possibly_add_note();
				},
			),
			array(
				function () {
					self::add_note();
				},
			),
			array(
				function () {
					self::possibly_delete_note();
				},
			),
			array(
				function () {
					self::has_note_been_actioned();
				},
			),
		);
	}

	/**
	 * Data provider providing methods that should not throw
	 * an exception regardless of the data store being available.
	 *
	 * @return array[]
	 */
	public function methods_never_causing_exception_provider() {
		return array(
			array(
				function () {
					self::wc_admin_active_for( 123 );
				},
			),
		);
	}

}
