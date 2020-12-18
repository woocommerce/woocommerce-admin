<?php
/**
 * REST API Admin Product Templates controller
 *
 * Handles requests to the admin templates endpoint.
 */

namespace Automattic\WooCommerce\Admin\API;

defined( 'ABSPATH' ) || exit;

/**
 * REST API Admin Notes controller class.
 *
 * @extends WC_REST_CRUD_Controller
 */
class ProductTemplates extends \WC_REST_Products_Controller {

	/**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wc-analytics';

	/**
	 * Route base.
	 *
	 * @var string
	 */
	protected $rest_base = 'products/templates';

	/**
	 * Register the routes for admin notes.
	 */
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base,
			array(
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'create_item' ),
					'permission_callback' => array( $this, 'create_item_permissions_check' ),
					'args'                => array_merge(
						$this->get_endpoint_args_for_item_schema( \WP_REST_Server::CREATABLE ),
						array(
							'template_name' => array(
								'required'    => true,
								'type'        => 'string',
								'description' => __( 'Product template name.', 'woocommerce-admin' ),
							),
						)
					),
				),
				'schema' => array( $this, 'get_public_item_schema' ),
			)
		);
	}

	/**
	 * Get a single note.
	 *
	 * @param WP_REST_Request $request Request data.
	 * @return WP_REST_Response|WP_Error
	 */
	public function create_item( $request ) {
		include_once WC_ABSPATH . 'includes/import/class-wc-product-csv-importer.php';
		$template_name = $request->get_param( 'template_name' );
		$template_path = __DIR__ . '/Templates/' . $template_name . '.csv';
		$template_path = apply_filters( 'woocommerce_product_template_csv_file_path', $template_path, $template_name );

		if ( file_exists( $template_path ) && class_exists( 'WC_Product_CSV_Importer' ) ) {
			// Override locale so we can return mappings from WooCommerce in English language stores.
			add_filter( 'locale', '__return_false', 9999 );
			$importer_class = apply_filters( 'woocommerce_product_csv_importer_class', 'WC_Product_CSV_Importer' );
			$args           = array(
				'parse'   => true,
				'mapping' => OnboardingTasks::get_header_mappings( $template_path ),
			);
			$args           = apply_filters( 'woocommerce_product_csv_importer_args', $args, $importer_class );

			$importer = new $importer_class( $template_path, $args );

			/**
			 * Comment out, this would be in the case we don't want to use the 'import' function.
			 * $parsed_data = $importer->get_parsed_data();
			 * $parsed_data['status'] = 'draft';
			 * $request->set_query_params(array_merge($parsed_data[0], $request->get_query_params()));
			 * return parent::create_item($request);
			*/

			$import = $importer->import();

			if ( is_wp_error( $import ) || 0 === count( $import['imported'] ) ) {
				return new \WP_Error(
					'woocommerce_rest_import_error',
					__( 'Sorry, creating a product template failed.', 'woocommerce-admin' ),
					array( 'status' => 404 )
				);
			}
			$product = wc_get_product( $import['imported'][0] );
			$product->set_status( 'auto-draft' );
			$product->save();

			$data = $this->prepare_object_for_response( $product, $request );

			return rest_ensure_response( $data );
		} else {
			return new \WP_Error(
				'woocommerce_rest_import_error',
				__( 'Sorry, the sample products data file was not found.', 'woocommerce-admin' ),
				array( 'status' => 404 )
			);
		}
	}
}
