<?php
/**
 * Reports customers tests.
 *
 * @package WooCommerce\Admin\Tests\Customers
 */

use \Automattic\WooCommerce\Admin\API\Reports\Customers\DataStore as CustomersDataStore;

/**
 * Class WC_Tests_Reports_Customers
 */
class WC_Tests_Reports_Customer extends WC_Unit_Test_Case {

	/**
	 * Test order count caluclation for customer.
	 *
	 * @covers \Automattic\WooCommerce\Admin\API\Reports\Customers\DataStore::get_order_count
	 */
	public function test_customer_order_count() {
		WC_Helper_Reports::reset_stats_dbs();

		// Create a customer.
		$customer = WC_Helper_Customer::create_customer();

		// Create product.
		$product = new WC_Product_Simple();
		$product->set_name( 'Test Product' );
		$product->set_regular_price( 25 );
		$product->save();

		WC_Helper_Queue::run_all_pending();

		$customer_id = CustomersDataStore::get_customer_id_by_user_id( $customer->get_id() ); // This is the customer ID from lookup table.

		// Create 3 orders.
		foreach ( range( 1, 3 ) as $i ) {
			$order = WC_Helper_Order::create_order( $customer->get_id(), $product );
			$order->save();
		}

		WC_Helper_Queue::run_all_pending();

		// Customer should have 3 orders.
		$this->assertSame( 3, CustomersDataStore::get_order_count( $customer_id ) );

		// Failure from bad customer IDs.
		$this->assertSame( null, CustomersDataStore::get_order_count( 0 ) );
		$this->assertSame( null, CustomersDataStore::get_order_count( 'ABC' ) );
		$this->assertSame( null, CustomersDataStore::get_order_count( false ) );
		$this->assertSame( null, CustomersDataStore::get_order_count( null ) );
	}
}
