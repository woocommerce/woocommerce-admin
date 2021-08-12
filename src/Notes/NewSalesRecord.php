<?php
/**
 * WooCommerce Admin (Dashboard) New Sales Record Note Provider.
 *
 * Adds a note to the merchant's inbox when the previous day's sales are a new record.
 */

namespace Automattic\WooCommerce\Admin\Notes;

defined( 'ABSPATH' ) || exit;

/**
 * New_Sales_Record
 */
class NewSalesRecord {
	/**
	 * Note traits.
	 */
	use NoteTraits;

	/**
	 * Name of the note for use in the database.
	 */
	const NOTE_NAME = 'wc-admin-new-sales-record';

	/**
	 * Option name for the sales record date in ISO 8601 (YYYY-MM-DD) date.
	 */
	const RECORD_DATE_OPTION_KEY = 'woocommerce_sales_record_date';

	/**
	 * Option name for the sales record amount.
	 */
	const RECORD_AMOUNT_OPTION_KEY = 'woocommerce_sales_record_amount';

	/**
	 * Returns the total of yesterday's sales.
	 *
	 * @param string $date Date for sales to sum (i.e. YYYY-MM-DD).
	 * @return floatval
	 */
	public static function sum_sales_for_date( $date ) {
		$order_query = new \WC_Order_Query( array( 'date_created' => $date ) );
		$orders      = $order_query->get_orders();
		$total       = 0;

		foreach ( (array) $orders as $order ) {
			$total += $order->get_total();
		}

		return $total;
	}

	/**
	 * Possibly add a sales record note.
	 */
	public static function possibly_add_note() {
		/**
		 * Filter to allow for disabling sales record milestones.
		 *
		 * @since 3.7.0
		 *
		 * @param boolean default true
		 */
		$sales_record_notes_enabled = apply_filters( 'woocommerce_admin_sales_record_milestone_enabled', true );

		if ( ! $sales_record_notes_enabled ) {
			return;
		}

		$yesterday = gmdate( 'Y-m-d', current_time( 'timestamp', 0 ) - DAY_IN_SECONDS );
		$total     = self::sum_sales_for_date( $yesterday );

		// No sales yesterday? Bail.
		if ( 0 >= $total ) {
			return;
		}

		$record_date = get_option( self::RECORD_DATE_OPTION_KEY, '' );
		$record_amt  = floatval( get_option( self::RECORD_AMOUNT_OPTION_KEY, 0 ) );

		// No previous entry? Just enter what we have and return without generating a note.
		if ( empty( $record_date ) ) {
			update_option( self::RECORD_DATE_OPTION_KEY, $yesterday );
			update_option( self::RECORD_AMOUNT_OPTION_KEY, $total );
				return;
		}

		// Otherwise, if yesterdays total bested the record, update AND generate a note.
		if ( $total > $record_amt ) {
			update_option( self::RECORD_DATE_OPTION_KEY, $yesterday );
			update_option( self::RECORD_AMOUNT_OPTION_KEY, $total );

			$formatted_yesterday   = gmdate( 'F jS', strtotime( $yesterday ) );
			$formatted_total       = html_entity_decode( wp_strip_all_tags( wc_price( $total ) ) );
			$formatted_record_date = gmdate( 'F jS', strtotime( $record_date ) );
			$formatted_record_amt  = html_entity_decode( wp_strip_all_tags( wc_price( $record_amt ) ) );

			$content = sprintf(
				/* translators: 1 and 4: Date (e.g. October 16th), 2 and 3: Amount (e.g. $160.00) */
				__( 'Woohoo, %1$s was your record day for sales! Net sales was %2$s beating the previous record of %3$s set on %4$s.', 'woocommerce-admin' ),
				$formatted_yesterday,
				$formatted_total,
				$formatted_record_amt,
				$formatted_record_date
			);

			$content_data = (object) array(
				'old_record_date' => $record_date,
				'old_record_amt'  => $record_amt,
				'new_record_date' => $yesterday,
				'new_record_amt'  => $total,
			);

			// We only want one sales record note at any time in the inbox, so we delete any other first.
			Notes::delete_notes_with_name( self::NOTE_NAME );

			$report_url = '?page=wc-admin&path=/analytics/revenue&period=custom&compare=previous_year&after=' . $yesterday . '&before=' . $yesterday;

			// And now, create our new note.
			$note = new Note();
			$note->set_title( __( 'New sales record!', 'woocommerce-admin' ) );
			$note->set_content( $content );
			$note->set_content_data( $content_data );
			$note->set_type( Note::E_WC_ADMIN_NOTE_INFORMATIONAL );
			$note->set_name( self::NOTE_NAME );
			$note->set_source( 'woocommerce-admin' );
			$note->add_action( 'view-report', __( 'View report', 'woocommerce-admin' ), $report_url );
			$note->save();
		}
	}
}
