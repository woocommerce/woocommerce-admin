<?php
/**
 * WooCommerce Customer effort score tracks
 *
 * @package WooCommerce\Admin\Features
 */

namespace Automattic\WooCommerce\Admin\Features;

defined( 'ABSPATH' ) || exit;

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
	 * Option name for the CES Tracks queue.
	 */
	const CES_TRACKS_QUEUE_OPTION_NAME = 'woocommerce_ces_tracks_queue';

	/**
	 * Option name for the clear CES Tracks queue flag.
	 */
	const CLEAR_CES_TRACKS_QUEUE_OPTION_NAME = 'woocommerce_clear_ces_tracks_queue';

	/**
	 * Option name for the set of actions that have been shown.
	 */
	const SHOWN_FOR_ACTIONS_OPTION_NAME = 'woocommerce_ces_shown_for_actions';

	/**
	 * Action name for product add/publish.
	 */
	const PRODUCT_ADD_PUBLISH_ACTION_NAME = 'product_add_publish';

	/**
	 * Action name for product update.
	 */
	const PRODUCT_UPDATE_ACTION_NAME = 'product_update';

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
		add_action(
			'transition_post_status',
			array(
				$this,
				'run_on_transition_post_status',
			),
			10,
			3
		);
		add_action(
			'admin_init',
			array(
				$this,
				'maybe_clear_ces_tracks_queue',
			)
		);
	}

	/**
	 * Hook into the post status lifecycle, only interested in products that
	 * are either being added or edited.
	 *
	 * @param string $new_status The new status.
	 * @param string $old_status The old status.
	 * @param Post   $post       The post.
	 */
	public function run_on_transition_post_status(
		$new_status,
		$old_status,
		$post
	) {
		if ( 'product' !== $post->post_type ) {
			return;
		}

		if ( 'publish' !== $new_status ) {
			return;
		}

		if ( 'publish' !== $old_status ) {
			$this->enqueue_ces_survey_for_new_product();
		} else {
			$this->enqueue_ces_survey_for_edited_product();
		}
	}

	/**
	 * Get the current published product count.
	 *
	 * @return integer The current published product count.
	 */
	private function get_product_count() {
		$query         = new \WC_Product_Query(
			array(
				'limit'    => 1,
				'paginate' => true,
				'return'   => 'ids',
				'status'   => array( 'publish' ),
			)
		);
		$products      = $query->get_products();
		$product_count = intval( $products->total );

		return $product_count;
	}

	/**
	 * Enqueue the CES survey trigger for a new product.
	 */
	private function enqueue_ces_survey_for_new_product() {
		// Only add the JS to trigger the CES modal if
		// this modal hasn't been dismissed or actioned yet for this action.
		$shown_for_features = get_option( self::SHOWN_FOR_ACTIONS_OPTION_NAME, array() );
		$has_been_shown     = in_array(
			self::PRODUCT_ADD_PUBLISH_ACTION_NAME,
			$shown_for_features,
			true
		);

		if ( $has_been_shown ) {
			return;
		}

		$queue = get_option( self::CES_TRACKS_QUEUE_OPTION_NAME, array() );

		$queue[] = array(
			'action' => self::PRODUCT_ADD_PUBLISH_ACTION_NAME,
			'label'  => __(
				'How easy was it to add a product?',
				'woocommerce-admin'
			),
			'props'  => array(
				'product_count' => $this->get_product_count(),
			),
		);

		update_option( self::CES_TRACKS_QUEUE_OPTION_NAME, $queue );
	}

	/**
	 * Enqueue the CES survey trigger for an existing product.
	 */
	private function enqueue_ces_survey_for_edited_product() {
		// Only add the JS to trigger the CES modal if
		// this modal hasn't been dismissed or actioned yet for this action.
		$shown_for_features = get_option( self::SHOWN_FOR_ACTIONS_OPTION_NAME, array() );
		$has_been_shown     = in_array(
			self::PRODUCT_UPDATE_ACTION_NAME,
			$shown_for_features,
			true
		);

		if ( $has_been_shown ) {
			return;
		}

		$queue = get_option( self::CES_TRACKS_QUEUE_OPTION_NAME, array() );

		$queue[] = array(
			'action' => self::PRODUCT_UPDATE_ACTION_NAME,
			'label'  => __(
				'How easy was it to edit your product?',
				'woocommerce-admin'
			),
			'props'  => array(
				'product_count' => $this->get_product_count(),
			),
		);

		update_option( self::CES_TRACKS_QUEUE_OPTION_NAME, $queue );
	}

	/**
	 * Maybe clear the CES tracks queue, executed on every page load. If the
	 * clear option is set it clears the queue. In practice, this executes a
	 * page load after the queued CES tracks are displayed on the client, which
	 * sets the clear option.
	 */
	public function maybe_clear_ces_tracks_queue() {
		$clear_ces_tracks_queue = get_option(
			self::CLEAR_CES_TRACKS_QUEUE_OPTION_NAME,
			false
		);

		if ( $clear_ces_tracks_queue ) {
			update_option( self::CES_TRACKS_QUEUE_OPTION_NAME, array() );
			update_option( self::CLEAR_CES_TRACKS_QUEUE_OPTION_NAME, false );
		}
	}
}
