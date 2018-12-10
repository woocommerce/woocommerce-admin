<?php
/**
 * Order Functions
 *
 * @package  WooCommerce Admin
 */

/**
 * Remove order record from db table.
 *
 * @param string $table_name Name of the db table.
 * @param int    $order_id Order id.
 */
function remove_order_record( $table_name, $order_id ) {
	global $wpdb;

	$wpdb->delete(
		$table_name,
		array(
			'order_id' => $order_id,
		)
	);
}

/**
 * Make an entry in all lookup/stat tables for an order.
 *
 * @param int $order_id Order ID.
 * @return void
 */
function wc_admin_order_update( $order_id ) {
	global $wpdb;

	$order = wc_get_order( $order_id );
	if ( ! $order ) {
		return;
	}

	$report_order_statuses = WC_Admin_Reports_Data_Store::get_report_order_statuses();

	// Order stats.
	$table_name = $wpdb->prefix . 'wc_order_stats';
	if ( ! in_array( $order->get_status(), $report_order_statuses, true ) ) {
		remove_order_record( $table_name, $order_id );
	} else {
		$data = array(
			'order_id'           => $order_id,
			'date_created'       => $order->get_date_created()->date( 'Y-m-d H:i:s' ),
			'num_items_sold'     => WC_Admin_Reports_Orders_Data_Store::get_num_items_sold( $order ),
			// move those methods out of order class?
			'gross_total'        => $order->get_total(),
			'coupon_total'       => $order->get_total_discount(),
			'refund_total'       => $order->get_total_refunded(),
			'tax_total'          => $order->get_total_tax(),
			'shipping_total'     => $order->get_shipping_total(),
			'net_total'          => (float) $order->get_total() - (float) $order->get_total_tax() - (float) $order->get_shipping_total(),
			'returning_customer' => WC_Admin_Reports_Orders_Data_Store::is_returning_customer( $order ),
			// move those methods out of order class?
		);

		// Update or add the information to the DB.
		$wpdb->replace(
			$table_name,
			$data,
			array(
				'%d',
				'%s',
				'%d',
				'%f',
				'%f',
				'%f',
				'%f',
				'%f',
				'%f',
			)
		);
	}
	// Order - product lookup.
	$table_name = $wpdb->prefix . 'wc_order_product_lookup';
	if ( ! in_array( $order->get_status(), $report_order_statuses, true ) ) {
		remove_order_record( $table_name, $order_id );
	} else {
		foreach ( $order->get_items() as $order_item ) {
			$wpdb->replace(
				$table_name,
				array(
					'order_item_id'         => $order_item->get_id(),
					'order_id'              => $order_id,
					'product_id'            => $order_item->get_product_id( 'edit' ),
					'variation_id'          => $order_item->get_variation_id( 'edit' ),
					'customer_id'           => ( 0 < $order->get_customer_id( 'edit' ) ) ? $order->get_customer_id( 'edit' ) : null,
					'product_qty'           => $order_item->get_quantity( 'edit' ),
					'product_gross_revenue' => $order_item->get_subtotal( 'edit' ),
					'date_created'          => date( 'Y-m-d H:i:s', $order->get_date_created( 'edit' )->getTimestamp() ),
				),
				array(
					'%d',
					'%d',
					'%d',
					'%d',
					'%d',
					'%d',
					'%f',
					'%s',
				)
			);
		}
	}

	// Order - coupon lookup.
	$table_name = $wpdb->prefix . 'wc_order_coupon_lookup';
	if ( ! in_array( $order->get_status(), $report_order_statuses, true ) ) {
		remove_order_record( $table_name, $order_id );
	} else {
		foreach ( $order->get_items( 'coupon' ) as $coupon_item ) {
			$wpdb->replace(
				$table_name,
				array(
					'order_id'              => $order_id,
					'coupon_id'             => wc_get_coupon_id_by_code( $coupon_item->get_code() ),
					'coupon_gross_discount' => $coupon_item->get_discount(),
					'date_created'          => date( 'Y-m-d H:i:s', $order->get_date_created( 'edit' )->getTimestamp() ),
				),
				array(
					'%d',
					'%d',
					'%f',
					'%s',
				)
			);
		}
	}

	// Order - tax lookup.
	$table_name = $wpdb->prefix . 'wc_order_tax_lookup';
	if ( ! in_array( $order->get_status(), $report_order_statuses, true ) ) {
		remove_order_record( $table_name, $order_id );
	} else {
		foreach ( $order->get_items( 'tax' ) as $tax_item ) {
			$wpdb->replace(
				$table_name,
				array(
					'order_id'     => $order_id,
					'date_created' => date( 'Y-m-d H:i:s', $order->get_date_created( 'edit' )->getTimestamp() ),
					'tax_rate_id'  => $tax_item->get_rate_id(),
					'shipping_tax' => $tax_item->get_shipping_tax_total(),
					'order_tax'    => $tax_item->get_tax_total(),
					'total_tax'    => $tax_item->get_tax_total() + $tax_item->get_shipping_tax_total(),
				),
				array(
					'%d',
					'%s',
					'%d',
					'%f',
					'%f',
					'%f',
				)
			);
		}
	}
}

/**
 * Trigger update of order information from woocommerce_order_object_updated_props.
 *
 * @param WC_Order $order WC_Order object.
 * @param array    $updated_props Array of updated props.
 */
function wc_admin_order_meta_update( $order, $updated_props ) {
	$order_id = $order->get_id();
	wc_admin_order_update( $order_id );
}

/**
 * Update multiple orders' lookup tables in one go.
 *
 * @param array $order_ids Array of order ids.
 */
function wc_admin_order_batch_update( $order_ids ) {
	foreach ( $order_ids as $order_id ) {
		try {
			wc_admin_order_update( $order_id );
		} catch ( Exception $e ) {
			// Log error somewhere.
			$e->getMessage();
		}
	}
}

add_action( 'woocommerce_new_order', 'wc_admin_order_update', 10, 1 );
add_action( 'woocommerce_update_order', 'wc_admin_order_update', 10, 1 );
// the following action is actually a superset of woocommerce_update_order one, so might need to switch to that one?
// add_action( 'woocommerce_order_object_updated_props', 'wc_admin_order_meta_update', 10, 2 );.
add_action( 'woocommerce_trash_order', 'wc_admin_order_update', 10, 1 );
add_action( 'woocommerce_delete_order', 'wc_admin_order_update', 10, 1 );
// check if woocommerce_order_refunded also needs to be included here.
