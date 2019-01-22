<?php
/**
 * REST API Setting Options Controller
 *
 * Handles requests to /settings/{option}
 *
 * @package WooCommerce Admin/API
 */

defined( 'ABSPATH' ) || exit;

/**
 * Setting Options controller.
 *
 * @package WooCommerce Admin/API
 * @extends WC_REST_Setting_Options_Controller
 */
class WC_Admin_REST_Setting_Options_Controller extends WC_REST_Setting_Options_Controller {

	/**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wc/v4';

	/**
	 * Attempt to separate by comma and validate, otherwise send to parent function.
	 *
	 * @since 3.0.0
	 * @param array $values Values.
	 * @param array $setting Setting.
	 * @return array|WP_Error
	 */
	public function validate_setting_multiselect_field( $values, $setting ) {
		$final_values = array();
		$split_values = explode( ',', $values );

		foreach ( $split_values as $value ) {
			if ( array_key_exists( $value, $setting['options'] ) ) {
				$final_values[] = $value;
			} else {
				return parent::validate_setting_multiselect_field( $values, $setting );
			}
		}

		return $final_values;
	}

}
