<?php
/**
 * Extends ProductCSVImporter to update individual post with template.
 */

namespace Automattic\WooCommerce\Admin;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Include dependencies.
 */
if ( ! class_exists( '\WC_Product_CSV_Importer', false ) ) {
	include_once WC_ABSPATH . 'includes/import/class-wc-product-csv-importer.php';
}


/**
 * ProductCSVTemplateImporter Class.
 */
class ProductCSVTemplateImporter extends \WC_Product_CSV_Importer {

	/**
	 * Constructor.
	 *
	 * @param string $file   File to read.
	 * @param array  $params Arguments for the parser.
	 */
	public function __construct( $file, $params = array() ) {
		parent::__construct( $file, array_diff_key( $params, array_flip( array( 'parse' ) ) ) );

		$template_header_mappings = $this->get_header_mappings();
		if ( isset( $template_header_mappings['from'], $template_header_mappings['to'] ) ) {
			$this->params['mapping'] = array_combine( $template_header_mappings['from'], $template_header_mappings['to'] );
		} else {
			$this->params['mapping'] = $template_header_mappings;
		}

		if ( ! empty( $this->params['mapping'] ) ) {
			$this->set_mapped_keys();
		}

		if ( params['parse'] ) {
			$this->params['parse'] = params['parse'];
			$this->set_parsed_data();
		}
	}

	/**
	 * Get importer parameters.
	 *
	 * @throws Exception If item cannot be processed.
	 * @param int $post_id Post id.
	 * @return int post id.
	 */
	public function update_product( $post_id ) {
		$parsed_data = $this->get_parsed_data();
		$data        = $parsed_data[0];
		$data['id']  = $post_id;

		$object = $this->get_product_object( $data );

		$result = $object->set_props( array_diff_key( $data, array_flip( array( 'meta_data', 'raw_image_id', 'raw_gallery_image_ids', 'raw_attributes', 'sku', 'status' ) ) ) );

		if ( is_wp_error( $result ) ) {
			throw new Exception( $result->get_error_message() );
		}

		if ( 'variation' === $object->get_type() ) {
			$this->set_variation_data( $object, $data );
		} else {
			$this->set_product_data( $object, $data );
		}

		$this->set_image_data( $object, $data );
		$this->set_meta_data( $object, $data );

		$object = apply_filters( 'woocommerce_product_template_pre_insert_product_object', $object, $data );
		$object->save();

		do_action( 'woocommerce_product_import_inserted_product_object', $object, $data );

		return $object->get_id();
	}

	/**
	 * Get header mappings from CSV columns.
	 *
	 * @return array Mapped headers.
	 */
	public function get_header_mappings() {
		// Override locale so we can return mappings from WooCommerce in English language stores.
		add_filter( 'locale', '__return_false', 9999 );
		$raw_headers     = $this->get_raw_keys();
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
					if ( preg_match( $this->sanitize_special_column_name_regex( $regex ), $field, $matches ) ) {
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
	protected function sanitize_special_column_name_regex( $value ) {
		return '/' . str_replace( array( '%d', '%s' ), '(.*)', trim( quotemeta( $value ) ) ) . '/';
	}
}
