<?php
/**
 * WooCommerce Admin: Learn more about Product Settings
 *
 * Adds a note about learning more about product settings.
 *
 * @package WooCommerce Admin
 */

namespace Automattic\WooCommerce\Admin\Notes;

defined( 'ABSPATH' ) || exit;

use \Automattic\WooCommerce\Admin\Features\Onboarding;

/**
 * WC_Admin_Notes_Learn_More_About_Product_Settings.
 */
class WC_Admin_Notes_Learn_More_About_Product_Settings {
	/**
	 * Note traits.
	 */
	use NoteTraits;

	/**
	 * Name of the note for use in the database.
	 */
	const NOTE_NAME = 'wc-admin-learn-more-about-product-settings';

	const PRODUCTS_ADDED_DATE_OPTION_NAME = 'wc_admin_note_learn_more_about_product_settings_products_added_date';
	const IS_NEW_MERCHANT_OPTION_NAME     = 'wc_admin_note_learn_more_about_product_settings_is_new_merchant';

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_filter(
			'update_option_' . Onboarding::PROFILE_DATA_OPTION,
			array( $this, 'onboarding_profile_updated' ),
			10,
			3
		);

		// Bail out for non-new merchants.
		if ( ! get_option( self::IS_NEW_MERCHANT_OPTION_NAME ) ) {
			return;
		}

		// Only subscribe to the actions if there are no products. If there are
		// products already then this isn't a new install so record the date so
		// this note never gets added.
		if ( self::are_there_products() ) {
			self::possibly_record_products_added_date();
		} else {
			add_action( 'product_page_product_importer', array( $this, 'run_on_product_importer' ) );
			add_action( 'transition_post_status', array( $this, 'run_on_transition_post_status' ), 10, 3 );
		}
	}


	/**
	 * Record that the onboarding profile has been updated, indicating that the
	 * merchant is new.
	 *
	 * @param object $old_value The old option value.
	 * @param object $value     The new option value.
	 * @param string $option    The name of the option.
	 */
	public function onboarding_profile_updated( $old_value, $value, $option ) {
		update_option( self::IS_NEW_MERCHANT_OPTION_NAME, true );
	}

	/**
	 * Runs on product importer steps.
	 */
	public function run_on_product_importer() {
		// We're only interested in when the importer completes.
		// phpcs:disable WordPress.Security.NonceVerification.Recommended
		if ( ! isset( $_REQUEST['step'] ) ) {
			return;
		}
		if ( 'done' !== $_REQUEST['step'] ) {
			return;
		}
		// phpcs:enable

		self::possibly_record_products_added_date();
	}

	/**
	 * Runs when a post status transitions, but we're only interested if it is
	 * a product being published.
	 *
	 * @param string $new_status The new status.
	 * @param string $old_status The old status.
	 * @param Post   $post       The post.
	 */
	public static function run_on_transition_post_status( $new_status, $old_status, $post ) {
		if (
			'product' !== $post->post_type ||
			'publish' !== $new_status
		) {
			return;
		}

		self::possibly_record_products_added_date();
	}

	/**
	 * Possibly record the products added date, if it isn't already set
	 * (i.e. don't overwrite it).
	 */
	private static function possibly_record_products_added_date() {
		if ( false !== get_option( self::PRODUCTS_ADDED_DATE_OPTION_NAME ) ) {
			return;
		}

		if ( self::are_there_products() ) {
			update_option( self::PRODUCTS_ADDED_DATE_OPTION_NAME, time() );
		}
	}

	/**
	 * Returns whether there are any products.
	 *
	 * @return bool If there are any products.
	 */
	private static function are_there_products() {
		// $query    = new \WC_Product_Query(
		// 	array(
		// 		'limit'    => 1,
		// 		'paginate' => true,
		// 		'return'   => 'ids',
		// 		'status'   => array( 'publish' ),
		// 	)
		// );
		// $products = $query->get_products();
		// $count    = $products->total;

		global $wpdb;

		$count = $wpdb->get_var(
			"
				SELECT COUNT(*)
				FROM {$wpdb->posts}
				WHERE post_type = 'product'
				AND post_status = 'publish'
			"
		);

		return $count > 0;
	}

	/**
	 * Get the note.
	 */
	public static function get_note() {
		// Bail out for non-new merchants.
		if ( ! get_option( self::IS_NEW_MERCHANT_OPTION_NAME ) ) {
			return;
		}

		$onboarding_profile = get_option( 'woocommerce_onboarding_profile', array() );

		// Confirm that $onboarding_profile is set.
		if ( empty( $onboarding_profile ) ) {
			return;
		}

		// Make sure that the person who filled out the OBW was not setting up
		// the store for their customer/client.
		if ( $onboarding_profile['setup_client'] ) {
			return;
		}

		// Make sure that products were added at least one day ago.
		$products_added_date = get_option( self::PRODUCTS_ADDED_DATE_OPTION_NAME );
		if ( ! $products_added_date ) {
			return;
		}
		if ( ( time() - $products_added_date ) < DAY_IN_SECONDS ) {
			return;
		}

		$note = new WC_Admin_Note();
		$note->set_title( __( 'Learn more about Product Settings', 'woocommerce-admin' ) );
		$note->set_content( __( 'In this video you\'ll find information about configuring product settings, such as how they are displayed, editing inventory options and so on.', 'woocommerce-admin' ) );
		$note->set_type( WC_Admin_Note::E_WC_ADMIN_NOTE_INFORMATIONAL );
		$note->set_name( self::NOTE_NAME );
		$note->set_content_data( (object) array() );
		$note->set_source( 'woocommerce-admin' );
		$note->add_action(
			'learn-more-about-product-settings',
			__( 'Watch tutorial', 'woocommerce-admin' ),
			'https://www.youtube.com/watch?v=FEmwJsE8xDY&t=',
			WC_Admin_Note::E_WC_ADMIN_NOTE_ACTIONED,
			true
		);
		return $note;
	}
}
