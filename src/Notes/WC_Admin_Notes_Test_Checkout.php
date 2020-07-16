<?php
/**
 * WooCommerce Admin Test Checkout.
 *
 * Adds a note to remind the user to test their store checkout.
 *
 * @package WooCommerce Admin
 */

namespace Automattic\WooCommerce\Admin\Notes;

defined( 'ABSPATH' ) || exit;

/**
 * WC_Admin_Notes_Test_Checkout
 */
class WC_Admin_Notes_Test_Checkout {
	/**
	 * Note traits.
	 */
	use NoteTraits;

	/**
	 * Name of the note for use in the database.
	 */
	const NOTE_NAME = 'wc-admin-test-checkout';

	const PRODUCT_ADDED_OPTION_NAME = 'wc_admin_note_test_checkout_product_added';

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'product_page_product_importer', array( $this, 'run_on_product_importer_done' ) );
		add_action( 'transition_post_status', array( $this, 'run_on_transition_post_status_done' ), 10, 3 );
	}

	/**
	 * Runs on product importer steps.
	 */
	public function run_on_product_importer_done() {
		// We're only interested in when the importer completes.
		// phpcs:disable WordPress.Security.NonceVerification.Recommended
		if ( ! isset( $_REQUEST['step'] ) ) {
			return;
		}
		if ( 'done' !== $_REQUEST['step'] ) {
			return;
		}
		// phpcs:enable

		$this->update_product_added_and_possibly_add_note();
	}

	/**
	 * Runs when a post status transitions, but we're only interested if it is
	 * a product being published.
	 *
	 * @param string $new_status The new status.
	 * @param string $old_status The old status.
	 * @param Post   $post       The post.
	 */
	public function run_on_transition_post_status_done( $new_status, $old_status, $post ) {
		if (
			'product' !== $post->post_type ||
			'publish' !== $new_status
		) {
			return;
		}

		$this->update_product_added_and_possibly_add_note();
	}

	/**
	 * Updates "wc_admin_note_test_checkout_product_added" in the DB and calls "possibly_add_note" method.
	 */
	public function update_product_added_and_possibly_add_note() {
		update_option( self::PRODUCT_ADDED_OPTION_NAME, true );
		self::possibly_add_note();
	}

	/**
	 * Get the note.
	 */
	public static function get_note() {
		// Make sure a product was published or imported.
		$product_added = get_option(
			self::PRODUCT_ADDED_OPTION_NAME
		);
		if ( ! $product_added ) {
			return;
		}

		$onboarding_profile = get_option( 'woocommerce_onboarding_profile', array() );

		// Confirm that $onboarding_profile is set.
		if ( empty( $onboarding_profile ) ) {
			return;
		}

		// Make sure that the person who filled out the OBW was not setting up
		// the store for their customer/client.
		if (
			! isset( $onboarding_profile['setup_client'] ) ||
			$onboarding_profile['setup_client']
		) {
			return;
		}

		// Make sure payments task is completed.
		$payments_task = get_option( 'woocommerce_task_list_payments', array() );
		if ( ! isset( $payments_task['completed'] ) ) {
			return;
		}

		$content = __( 'Make sure that your checkout is working properly before your launch your store. Go through your checkout process in its entirety: from adding a product to your cart, choosing a shipping location, and making a payment.', 'woocommerce-admin' );

		$note = new WC_Admin_Note();
		$note->set_title( __( 'Don\'t forget to test your checkout', 'woocommerce-admin' ) );
		$note->set_content( $content );
		$note->set_content_data( (object) array() );
		$note->set_type( WC_Admin_Note::E_WC_ADMIN_NOTE_INFORMATIONAL );
		$note->set_name( self::NOTE_NAME );
		$note->set_source( 'woocommerce-admin' );
		$note->add_action( 'test-checkout', __( 'Test checkout', 'woocommerce-admin' ), wc_get_page_permalink( 'shop' ) );
		return $note;
	}
}
