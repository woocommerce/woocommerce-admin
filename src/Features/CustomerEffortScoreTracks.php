<?php
/**
 * WooCommerce Customer effort score tracks
 *
 * @package WooCommerce\Admin\Features
 */

namespace Automattic\WooCommerce\Admin\Features;

defined( 'ABSPATH' ) || exit;

use \Automattic\WooCommerce\Admin\Loader;

/**
 * Triggers customer effort score on several different actions.
 */
class CustomerEffortScoreTracks {
	/**
	 * Class instance.
	 *
	 * @var CustomerEffortScoreTracks instance
	 */
	protected static $instance = null;

	/**
	 * Get class instance.
	 */
	public static function get_instance() {
		if ( ! self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Constructor. Sets up filters to hook into WooCommerce.
	 */
	public function __construct() {
		if ( ! Loader::is_feature_enabled( 'customer-effort-score' ) ) {
			return;
		}

		add_filter( 'add_meta_boxes_product', array( $this, 'add_meta_boxes_product' ) );
	}

	/**
	 * Hook into the Publish button for products, to trigger the customer
	 * effort score widget after save.
	 *
	 * @param WP_Post $post The post, not used.
	 */
	public function add_meta_boxes_product( $post ) {
		wc_enqueue_js(
			"
			(function() {
				if ( $( 'h1.wp-heading-inline' ).text().trim() !== '" . __( 'Add new product', 'woocommerce-admin' ) . "' ) {
					return;
				}

				$( '#publish' ).click( function() {
					var json = JSON.stringify( [ {
						trackName: 'product_add_publish_effort_score',
						label: '" . __( 'Provide effort for adding a new product', 'woocommerce-admin' ) . "',					
					} ] );
					localStorage.setItem( 'customerEffortScoreTracks', json );
				} );
			})();
			"
		);
	}
}
