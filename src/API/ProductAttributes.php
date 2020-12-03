<?php
/**
 * REST API Product Attributes Controller
 *
 * Handles requests to /products/attributes.
 */

namespace Automattic\WooCommerce\Admin\API;

defined( 'ABSPATH' ) || exit;

/**
 * Product categories controller.
 *
 * @extends WC_REST_Product_Attributes_Controller
 */
class ProductAttributes extends \WC_REST_Product_Attributes_Controller {
	/**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wc-analytics';

	/**
	 * Get the query params for collections
	 *
	 * @return array
	 */
	public function get_collection_params() {
		$params           = parent::get_collection_params();
		$params['search'] = array(
			'description'       => __( 'Search by similar attribute name.', 'woocommerce-admin' ),
			'type'              => 'string',
			'validate_callback' => 'rest_validate_request_arg',
		);

		return $params;
	}

	/**
	 * Get the Attribute's schema, conforming to JSON Schema.
	 *
	 * @return array
	 */
	public function get_item_schema() {
		$schema = parent::get_item_schema();
		// Custom attributes substitute slugs for numeric IDs.
		$schema['properties']['id']['type'] = array( 'integer', 'string' );

		return $schema;
	}

	/**
	 * Get all attributes, with support for searching (which includes custom attributes).
	 *
	 * @param WP_REST_Request $request The API request.
	 * @return WP_REST_Response
	 */
	public function get_items( $request ) {
		if ( empty( $request['search'] ) ) {
			return parent::get_items( $request );
		}

		$search_string       = $request['search'];
		$matching_attributes = $this->get_custom_attributes( $search_string );
		$taxonomy_attributes = wc_get_attribute_taxonomies();

		foreach ( $taxonomy_attributes as $attribute_obj ) {
			// Skip taxonomy attributes that didn't match the query.
			if ( false === stripos( $attribute_obj->attribute_label, $search_string ) ) {
				continue;
			}

			$attribute             = $this->prepare_item_for_response( $attribute_obj, $request );
			$matching_attributes[] = $this->prepare_response_for_collection( $attribute );
		}

		$response = rest_ensure_response( $matching_attributes );
		$response->header( 'X-WP-Total', count( $matching_attributes ) );
		$response->header( 'X-WP-TotalPages', 1 );

		return $response;
	}

	/**
	 * Query custom attributes by name.
	 *
	 * @param string $search Search string.
	 * @return array Matching attributes, formatted for response.
	 */
	protected function get_custom_attributes( $search ) {
		global $wpdb;

		if ( empty( $search ) ) {
			return array();
		}

		// Get as close as we can to matching the name property of custom attributes using SQL.
		$like = '%"name";s:%:"%' . $wpdb->esc_like( $search ) . '%"%';

		// Find all serialized product attributes with names like the search string.
		$query_results = $wpdb->get_results(
			$wpdb->prepare(
				"SELECT meta_value
				FROM {$wpdb->postmeta}
				WHERE meta_key = '_product_attributes'
				AND meta_value LIKE %s",
				$like
			),
			ARRAY_A
		);

		$custom_attributes = array();

		foreach ( $query_results as $raw_product_attributes ) {

			$meta_attributes = maybe_unserialize( $raw_product_attributes['meta_value'] );

			if ( empty( $meta_attributes ) || ! is_array( $meta_attributes ) ) {
				continue;
			}

			foreach ( $meta_attributes as $meta_attribute_key => $meta_attribute_value ) {
				$meta_value = array_merge(
					array(
						'name'        => '',
						'is_taxonomy' => 0,
					),
					(array) $meta_attribute_value
				);

				// Skip non-custom attributes.
				if ( ! empty( $meta_value['is_taxonomy'] ) ) {
					continue;
				}

				// Skip custom attributes that didn't match the query.
				// (There can be any number of attributes in the meta value).
				if ( false === stripos( $meta_value['name'], $search ) ) {
					continue;
				}

				// Skip already matched attributes.
				if ( isset( $custom_attributes[ $meta_attribute_key ] ) ) {
					continue;
				}

				// Mimic the structure of a taxonomy-backed attribute for response.
				$data = array(
					'id'           => $meta_attribute_key,
					'name'         => $meta_value['name'],
					'slug'         => $meta_attribute_key,
					'type'         => 'select',
					'order_by'     => 'menu_order',
					'has_archives' => false,
				);

				$response = rest_ensure_response( $data );
				$response->add_links( $this->prepare_links( (object) array( 'attribute_id' => $meta_attribute_key ) ) );
				$response = $this->prepare_response_for_collection( $response );

				$custom_attributes[ $meta_attribute_key ] = $response;
			}
		}

		return array_values( $custom_attributes );
	}
}
