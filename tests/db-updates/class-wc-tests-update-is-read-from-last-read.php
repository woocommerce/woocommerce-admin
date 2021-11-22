<?php

use Automattic\WooCommerce\Admin\Notes\Note;

/**
 * DB Update test for wc_admin_update_300_update_is_read_from_last_read()
 *
 * @package WooCommerce\Admin\Tests\DBUpdates
 */
class WC_Tests_Update_Is_Read_From_Last_Read extends WC_Unit_Test_Case {
	/**
	 * @var object current user
	 */
	private $user;

	/**
	 * setUp
	 */
	public function setUp() {
		parent::setUp();

		$this->add_is_read_col();
		$this->user = $this->factory->user->create(
			array(
				'role' => 'administrator',
			)
		);
	}

	/**
	 * Adds is_read col to the notes table.
	 */
	protected function add_is_read_col() {
		global $wpdb;
		// make sure is_read col has been added successfully.
		$notes_table_cols = $wpdb->get_results( "show columns from {$wpdb->prefix}wc_admin_notes" );
		$notes_table_cols = array_filter(
			$notes_table_cols,
			function( $row ) {
				// phpcs:ignore
				return 'is_read' === $row->Field;
			}
		);
		$has_is_read_col  = count( $notes_table_cols ) > 0;

		if ( ! $has_is_read_col ) {
			$wpdb->query(
				"
			alter table {$wpdb->prefix}wc_admin_notes add column is_read tinyint(1)
		"
			);
		}
	}

	/**
	 * Given woocommerce_admin_activity_panel_inbox_last_read does not exist
	 * When the update runs
	 * Then it should not update is_read col
	 */
	public function test_update_does_not_run_when_usermeta_does_not_exist() {
		global $wpdb;

		$wpdb->query(
			"
			delete from {$wpdb->prefix}usermeta where meta_key = 'woocommerce_admin_activity_panel_inbox_last_read' 
		"
		);

		wc_admin_update_300_update_is_read_from_last_read();

		$notes_with_is_read = $wpdb->get_var(
			"select count(*) from {$wpdb->prefix}wc_admin_notes where is_read = 1
		"
		);

		$this->assertTrue( '0' === $notes_with_is_read );
	}

	/**
	 * Give woocommerce_admin_activity_panel_inbox_last_read
	 * When the update runs
	 * Then it should update notes where date_created value is less than woocommerce_admin_activity_panel_inbox_last_read
	 */
	public function test_it_updates_is_read_when_date_created_value_is_less_than_last_read() {
		global $wpdb;
		$time = time();

		wp_set_current_user( $this->user );
		$wpdb->query( "delete from {$wpdb->prefix}wc_admin_notes" );

		// Note with date_created less than woocommerce_admin_activity_panel_inbox_last_read.
		$note = new Note();
		$note->set_title( 'test1' );
		$note->set_content( 'test1' );
		$note->set_name( 'test1' );
		$note->save();
		$date_created_1 = gmdate( 'Y-m-d H:i:s', $time - 3600 );

		// Note with date_created greater than woocommerce_admin_activity_panel_inbox_last_read.
		$note = new Note();
		$note->set_title( 'test2' );
		$note->set_content( 'test2' );
		$note->set_name( 'test2' );
		$note->save();
		$date_created_2 = gmdate( 'Y-m-d H:i:s', $time + 3600 );

		// phpcs:ignore
		$wpdb->query( "update {$wpdb->prefix}wc_admin_notes set date_created = '{$date_created_1}' where name='test1'" );
		// phpcs:ignore
		$wpdb->query( "update {$wpdb->prefix}wc_admin_notes set date_created = '{$date_created_2}' where name='test2'" );

		update_user_meta( $this->user, 'woocommerce_admin_activity_panel_inbox_last_read', $time );

		wc_admin_update_300_update_is_read_from_last_read();

		$notes_with_is_read = $wpdb->get_var(
			"select count(*) from {$wpdb->prefix}wc_admin_notes where is_read = 1
		"
		);

		$this->assertTrue( '1' === $notes_with_is_read );
	}
}
