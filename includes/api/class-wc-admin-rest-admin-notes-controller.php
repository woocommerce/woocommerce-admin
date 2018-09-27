<?php
/**
 * REST API Admin Notes controller added by the WC Admin plugin.
 *
 * Handles requests to the admin-notes endpoint.
 *
 * @package WooCommerce Admin/API
 */

defined( 'ABSPATH' ) || exit;

/**
 * REST API Admin Notes controller class.
 *
 * @package WooCommerce Admin/API
 */
class WC_Admin_REST_Admin_Notes_Controller extends WC_REST_CRUD_Controller {
	/**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wc/v3';

	/**
	 * Route base.
	 *
	 * @var string
	 */
	protected $rest_base = 'admin-notes';

	/**
	 * Register the routes for admin notes.
	 */
	public function register_routes() {
		register_rest_route( $this->namespace, '/' . $this->rest_base, array(
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_items' ),
				'permission_callback' => array( $this, 'get_items_permissions_check' ),
				'args'                => $this->get_collection_params(),
			),
			'schema' => array( $this, 'get_public_item_schema' ),
		) );
	}

	/**
	 * Check whether a given request has permission to read admin notes.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return WP_Error|boolean
	 */
	public function get_items_permissions_check( $request ) {
		if ( ! wc_rest_check_manager_permissions( 'system_status', 'read' ) ) {
			return new WP_Error( 'woocommerce_rest_cannot_view', __( 'Sorry, you cannot list resources.', 'woocommerce' ), array( 'status' => rest_authorization_required_code() ) );
		}

		return true;
	}

	/**
	 * Get a single note.
	 *
	 * @param WP_REST_Request $request Request data.
	 * @return WP_REST_Response|WP_Error
	*/
	public function get_item( $request ) {
		$note = WC_Admin_Notes::get_note( $request->get_param( 'id' ) );
		if ( is_wp_error( $note ) ) {
			return $note;
		}

		$data = $note->get_data();
		$data = $this->prepare_item_for_response( $data, $request );
		$data = $this->prepare_response_for_collection( $data );

		return rest_ensure_response( $data );
	}

	/**
	* Get all notes.
	*
	* @param WP_REST_Request $request Request data.
	* @return WP_REST_Response
	*/
	public function get_items( $request ) {
		$notes = WC_Admin_Notes::get_notes();
		$data = array();
		foreach ( (array) $notes as $note_obj ) {
			$note   = $this->prepare_item_for_response( $note_obj, $request );
			$note   = $this->prepare_response_for_collection( $note );
			$data[] = $note;
		}

		return rest_ensure_response( $data );
	}

	/**
	 * Prepare the note for the REST response.
	 *
	 * @param array           $item Admin note.
	 * @param WP_REST_Request $request Request object.
	 * @return WP_REST_Response $response
	 */
	public function prepare_item_for_response( $item, $request ) {

		$context = empty( $request['context'] ) ? 'view' : $request['context'];
		$data    = $this->add_additional_fields_to_object( $item, $request );
		$data    = $this->filter_response_by_context( $data, $context );

		// Wrap the data in a response object.
		$response = rest_ensure_response( $data );
		$response->add_links( $this->prepare_links( $item, $request ) );
		return $response;
	}

	/**
	 * Prepare links for the request.
	 *
	 * @param array $item Admin note.
	 * @return array Links for the given admin note.
	 */
	protected function prepare_links( $item, $request ) {
		$links = array(
			'self'       => array(
				'href' => rest_url( '/' . $this->namespace . '/' . $this->rest_base . '/' . $item['id'] ),
			),
			'collection' => array(
				'href' => rest_url( '/' . $this->namespace . '/' . $this->rest_base . '/' ),
			),
		);
		return $links;
	}
}
