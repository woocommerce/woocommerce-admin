<?php
/**
 * REST API Products Controller
 *
 * Handles requests to /products/*
 *
 * @package WooCommerce Admin/API
 */

defined( 'ABSPATH' ) || exit;

/**
 * Products controller.
 *
 * @package WooCommerce Admin/API
 * @extends WC_REST_Products_Controller
 */
class WC_Admin_REST_Products_Controller extends WC_REST_Products_Controller {

	/**
	 * Adds properties that can be embed via ?_embed=1.
	 *
	 * @return array
	 */
	public function get_item_schema() {
		$schema = parent::get_item_schema();

		$properties_to_embed = array(
			'id',
			'name',
			'slug',
			'permalink',
			'date_created',
			'date_created_gmt',
			'date_modified',
			'date_modified_gmt',
			'type',
			'status',
			'description',
			'short_description',
			'sku',
			'price',
			'regular_price',
			'sale_price',
			'date_on_sale_from',
			'date_on_sale_from_gmt',
			'date_on_sale_to',
			'date_on_sale_to_gmt',
			'price_html',
			'on_sale',
			'reviews_allowed',
			'average_rating',
			'rating_count',
			'images',
		);

		foreach ( $properties_to_embed as $property ) {
			$schema['properties'][ $property ]['context'][] = 'embed';
		}

		return $schema;
	}

}
