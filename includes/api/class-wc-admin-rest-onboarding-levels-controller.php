<?php
/**
 * REST API Onboarding Levels Controller
 *
 * Handles requests to /onboarding/levels
 *
 * @package WooCommerce Admin/API
 */

defined( 'ABSPATH' ) || exit;

/**
 * Onboarding Levels controller.
 *
 * @package WooCommerce Admin/API
 * @extends WC_REST_Data_Controller
 */
class WC_Admin_REST_Onboarding_Levels_Controller extends WC_REST_Data_Controller {
	/**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wc/v4';

	/**
	 * Route base.
	 *
	 * @var string
	 */
	protected $rest_base = 'onboarding/levels';

	/**
	 * Register routes.
	 *
	 * @since 3.5.0
	 */
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base,
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_items' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
				),
				'schema' => array( $this, 'get_public_item_schema' ),
			)
		);
	}

	/**
	 * Get an array of all levels and child tasks.
	 */
	public function get_levels() {
		$levels = array(
			array(
				'slug'  => '',
				'tasks' => array(
					array(
						'slug'                     => '',
						'description'              => '',
						'illustration'             => '',
						'status'                   => '',
						'is_visible_conditional'   => '',
						'in_progress_conditional'  => '',
						'is_completed_conditional' => '',
						'is_required'              => '',
					),
				),
			),
			array(
				'slug'  => '',
				'tasks' => array(
					array(
						'slug'                     => '',
						'description'              => '',
						'illustration'             => '',
						'status'                   => '',
						'is_visible_conditional'   => '',
						'in_progress_conditional'  => '',
						'is_completed_conditional' => '',
						'is_required'              => '',
					),
				),
			),
			array(
				'slug'  => '',
				'tasks' => array(
					array(
						'slug'                     => '',
						'description'              => '',
						'illustration'             => '',
						'status'                   => '',
						'is_visible_conditional'   => '',
						'in_progress_conditional'  => '',
						'is_completed_conditional' => '',
						'is_required'              => '',
					),
				),
			),
		);
		return apply_filters( 'woocommerce_onboarding_levels', $levels );
	}

	/**
	 * Return all level items and child tasks.
	 *
	 * @since  3.5.0
	 * @param  WP_REST_Request $request Request data.
	 * @return WP_Error|WP_REST_Response
	 */
	public function get_items( $request ) {
		global $wpdb;

		$levels = $this->get_levels();
		$data   = array();

		if ( ! empty( $levels ) ) {
			foreach ( $levels as $level ) {
				$response = $this->prepare_item_for_response( $level, $request );
				$data[]   = $this->prepare_response_for_collection( $response );
			}
		}

		return rest_ensure_response( $data );
	}

	/**
	 * Prepare the data object for response.
	 *
	 * @since  3.5.0
	 * @param object          $item Data object.
	 * @param WP_REST_Request $request Request object.
	 * @return WP_REST_Response $response Response data.
	 */
	public function prepare_item_for_response( $item, $request ) {
		$data     = $this->add_additional_fields_to_object( $item, $request );
		$data     = $this->filter_response_by_context( $data, 'view' );
		$response = rest_ensure_response( $data );

		$response->add_links( $this->prepare_links( $item ) );

		/**
		 * Filter the list returned from the API.
		 *
		 * @param WP_REST_Response $response The response object.
		 * @param array            $item     The original item.
		 * @param WP_REST_Request  $request  Request used to generate the response.
		 */
		return apply_filters( 'woocommerce_rest_prepare_onboarding_level', $response, $item, $request );
	}

	/**
	 * Prepare links for the request.
	 *
	 * @param object $item Data object.
	 * @return array Links for the given object.
	 * @todo Check to make sure this generates a valid URL after #1897.
	 */
	protected function prepare_links( $item ) {
		$links = array(
			'collection' => array(
				'href' => rest_url( sprintf( '/%s/%s', $this->namespace, $this->rest_base ) ),
			),
		);
		return $links;
	}

	/**
	 * Get the schema, conforming to JSON Schema.
	 *
	 * @return array
	 */
	public function get_item_schema() {
		$schema = array(
			'$schema'    => 'http://json-schema.org/draft-04/schema#',
			'title'      => 'onboarding_level',
			'type'       => 'object',
			'properties' => array(
				'slug' => array(
					'type'        => 'string',
					'description' => __( 'Level slug.', 'woocommerce-admin' ),
					'context'     => array( 'view' ),
					'readonly'    => true,
				),
				'tasks' => array(
					'type'        => 'array',
					'description' => __( 'Array of task under the level.', 'woocommerce-admin' ),
					'context'     => array( 'view' ),
					'readonly'    => true,
				),
			),
		);

		return $this->add_additional_fields_schema( $schema );
	}
}
