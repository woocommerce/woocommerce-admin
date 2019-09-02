<?php
/**
 * REST API Products Controller
 *
 * Handles requests to /products/*
 *
 * @package WooCommerce Admin/API
 */

namespace Automattic\WooCommerce\Admin\API;

defined( 'ABSPATH' ) || exit;

/**
 * Products controller.
 *
 * @package WooCommerce Admin/API
 * @extends WC_REST_Products_Controller
 */
class Products extends \WC_REST_Products_Controller {

	/**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wc/v4';

	/**
	 * Register routes.
	 */
	public function register_routes() {
		parent::register_routes();

		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/import_sample_data',
			array(
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'import_sample_data' ),
					'permission_callback' => array( $this, 'create_item_permissions_check' ),
				),
				'schema' => array( $this, 'get_public_item_schema' ),
			)
		);
	}

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
			'images',
			'description',
			'short_description',
		);

		foreach ( $properties_to_embed as $property ) {
			$schema['properties'][ $property ]['context'][] = 'embed';
		}

		return $schema;
	}

	/**
	 * Get the query params for collections.
	 *
	 * @return array
	 */
	public function get_collection_params() {
		$params                 = parent::get_collection_params();
		$params['low_in_stock'] = array(
			'description'       => __( 'Limit result set to products that are low or out of stock.', 'woocommerce-admin' ),
			'type'              => 'boolean',
			'default'           => false,
			'sanitize_callback' => 'wc_string_to_bool',
		);
		$params['search']       = array(
			'description'       => __( 'Search by similar product name or sku.', 'woocommerce-admin' ),
			'type'              => 'string',
			'validate_callback' => 'rest_validate_request_arg',
		);
		return $params;
	}


	/**
	 * Add product name and sku filtering to the WC API.
	 *
	 * @param WP_REST_Request $request Request data.
	 * @return array
	 */
	protected function prepare_objects_query( $request ) {
		$args = parent::prepare_objects_query( $request );

		if ( ! empty( $request['search'] ) ) {
			$args['search'] = trim( $request['search'] );
			unset( $args['s'] );
		}
		if ( ! empty( $request['low_in_stock'] ) ) {
			$args['low_in_stock'] = $request['low_in_stock'];
			$args['post_type']    = array( 'product', 'product_variation' );
		}

		return $args;
	}

	/**
	 * Get a collection of posts and add the post title filter option to WP_Query.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function get_items( $request ) {
		add_filter( 'posts_fields', array( __CLASS__, 'add_wp_query_fields' ), 10, 2 );
		add_filter( 'posts_where', array( __CLASS__, 'add_wp_query_filter' ), 10, 2 );
		add_filter( 'posts_join', array( __CLASS__, 'add_wp_query_join' ), 10, 2 );
		add_filter( 'posts_groupby', array( __CLASS__, 'add_wp_query_group_by' ), 10, 2 );
		$response = parent::get_items( $request );
		remove_filter( 'posts_fields', array( __CLASS__, 'add_wp_query_fields' ), 10 );
		remove_filter( 'posts_where', array( __CLASS__, 'add_wp_query_filter' ), 10 );
		remove_filter( 'posts_join', array( __CLASS__, 'add_wp_query_join' ), 10 );
		remove_filter( 'posts_groupby', array( __CLASS__, 'add_wp_query_group_by' ), 10 );
		return $response;
	}

	/**
	 * Add `low_stock_amount` property to product data
	 *
	 * @param WC_Data         $object  Object data.
	 * @param WP_REST_Request $request Request object.
	 * @return WP_REST_Response
	 */
	public function prepare_object_for_response( $object, $request ) {
		$data        = parent::prepare_object_for_response( $object, $request );
		$object_data = $object->get_data();

		if ( $request->get_param( 'low_in_stock' ) && is_numeric( $object_data['low_stock_amount'] ) ) {
			$data->data['low_stock_amount'] = $object_data['low_stock_amount'];
		}

		return $data;
	}

	/**
	 * Add in conditional select fields to the query.
	 *
	 * @param string $select Select clause used to select fields from the query.
	 * @param object $wp_query WP_Query object.
	 * @return string
	 */
	public static function add_wp_query_fields( $select, $wp_query ) {
		if ( $wp_query->get( 'low_in_stock' ) ) {
			$select .= ', low_stock_amount_meta.meta_value AS low_stock_amount';
		}

		return $select;
	}

	/**
	 * Add in conditional search filters for products.
	 *
	 * @param string $where Where clause used to search posts.
	 * @param object $wp_query WP_Query object.
	 * @return string
	 */
	public static function add_wp_query_filter( $where, $wp_query ) {
		global $wpdb;

		$search = $wp_query->get( 'search' );
		if ( $search ) {
			$search = $wpdb->esc_like( $search );
			$search = "'%" . $search . "%'";
			$where .= " AND ({$wpdb->posts}.post_title LIKE {$search}";
			$where .= wc_product_sku_enabled() ? ' OR wc_product_meta_lookup.sku LIKE ' . $search . ')' : ')';
		}

		if ( $wp_query->get( 'low_in_stock' ) ) {
			$low_stock_amount = absint( max( get_option( 'woocommerce_notify_low_stock_amount' ), 1 ) );
			$where           .= "
			AND wc_product_meta_lookup.stock_quantity IS NOT NULL
			AND wc_product_meta_lookup.stock_status = 'instock'
			AND (
				(
					low_stock_amount_meta.meta_value > ''
					AND wc_product_meta_lookup.stock_quantity <= CAST(low_stock_amount_meta.meta_value AS SIGNED)
				)
				OR (
					(
						low_stock_amount_meta.meta_value IS NULL OR low_stock_amount_meta.meta_value <= ''
					)
					AND wc_product_meta_lookup.stock_quantity <= {$low_stock_amount}
				)
			)";
		}

		return $where;
	}

	/**
	 * Join posts meta tables when product search or low stock query is present.
	 *
	 * @param string $join Join clause used to search posts.
	 * @param object $wp_query WP_Query object.
	 * @return string
	 */
	public static function add_wp_query_join( $join, $wp_query ) {
		global $wpdb;

		$search = $wp_query->get( 'search' );
		if ( $search && wc_product_sku_enabled() ) {
			$join = self::append_product_sorting_table_join( $join );
		}

		if ( $wp_query->get( 'low_in_stock' ) ) {
			$join  = self::append_product_sorting_table_join( $join );
			$join .= " LEFT JOIN {$wpdb->postmeta} AS low_stock_amount_meta ON {$wpdb->posts}.ID = low_stock_amount_meta.post_id AND low_stock_amount_meta.meta_key = '_low_stock_amount' ";
		}

		return $join;
	}

	/**
	 * Join wc_product_meta_lookup to posts if not already joined.
	 *
	 * @param string $sql SQL join.
	 * @return string
	 */
	protected static function append_product_sorting_table_join( $sql ) {
		global $wpdb;

		if ( ! strstr( $sql, 'wc_product_meta_lookup' ) ) {
			$sql .= " LEFT JOIN {$wpdb->wc_product_meta_lookup} wc_product_meta_lookup ON $wpdb->posts.ID = wc_product_meta_lookup.product_id ";
		}
		return $sql;
	}

	/**
	 * Group by post ID to prevent duplicates.
	 *
	 * @param string $groupby Group by clause used to organize posts.
	 * @param object $wp_query WP_Query object.
	 * @return string
	 */
	public static function add_wp_query_group_by( $groupby, $wp_query ) {
		global $wpdb;

		$search       = $wp_query->get( 'search' );
		$low_in_stock = $wp_query->get( 'low_in_stock' );
		if ( empty( $groupby ) && ( $search || $low_in_stock ) ) {
			$groupby = $wpdb->posts . '.ID';
		}
		return $groupby;
	}

	/**
	 * Import sample products from WooCommerce sample CSV.
	 *
	 * @return WP_Error|WP_REST_Response	 * 
	 */
	public static function import_sample_data() {
		include_once WC_ABSPATH . 'includes/import/class-wc-product-csv-importer.php';
		$file = WC_ABSPATH . 'sample-data/sample_products.csv';

		if ( file_exists( $file ) && class_exists( 'WC_Product_CSV_Importer' ) ) {
			// Override locale so we can return mappings from WooCommerce in English language stores.
			global $locale;
			$locale = false;
			$importer_class = apply_filters( 'woocommerce_product_csv_importer_class', 'WC_Product_CSV_Importer' );
			$args           = array( 'parse' => true, 'mapping' => self::get_header_mappings( $file ) );
			$args           = apply_filters( 'woocommerce_product_csv_importer_args', $args, $importer_class );

			$importer = new $importer_class( $file, $args );
			$import   = $importer->import();
			return rest_ensure_response( $import );
		} else {
			return new \WP_Error( 'woocommerce_rest_import_error', __( 'Sorry, the sample products data file was not found.', 'woocommerce-admin' ) );
		}
	}

	/**
	 * Get header mappings from CSV columns.
	 *
	 * @param string File path.
	 * @return array Mapped headers.
	 */
	public static function get_header_mappings( $file ) {
		include_once WC_ABSPATH . 'includes/admin/importers/mappings/default.php';

		$importer_class  = apply_filters( 'woocommerce_product_csv_importer_class', 'WC_Product_CSV_Importer' );
		$importer        = new $importer_class( $file, array() );
		$raw_headers     = $importer->get_raw_keys();
		$default_columns = wc_importer_default_english_mappings( array() );
		$special_columns = wc_importer_default_special_english_mappings( array() );

		$headers = array();
		foreach ( $raw_headers as $key => $field ) {
			$index             = $field;
			$headers[ $index ] = $field;

			if ( isset( $default_columns[ $field ] ) ) {
				$headers[ $index ] = $default_columns[ $field ];
			} else {
				foreach ( $special_columns as $regex => $special_key ) {
					if ( preg_match( self::sanitize_special_column_name_regex( $regex ), $field, $matches ) ) {
						$headers[ $index ] = $special_key . $matches[1];
						break;
					}
				}
			}
		}

		return $headers;
	}

	/**
	 * Sanitize special column name regex.
	 *
	 * @param  string $value Raw special column name.
	 * @return string
	 */
	public static function sanitize_special_column_name_regex( $value ) {
		return '/' . str_replace( array( '%d', '%s' ), '(.*)', trim( quotemeta( $value ) ) ) . '/';
	}

}
