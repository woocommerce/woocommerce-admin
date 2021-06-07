<?php
/**
 * Class WC_Mock_Payment_Gateway
 *
 * @package WooCommerce\Admin\Tests\Framework
 */

/**
 * Class WC_Mock_Payment_Gateway
 */
class WC_Mock_Payment_Gateway extends WC_Payment_Gateway {
	/**
	 * Constructor for the gateway.
	 */
	public function __construct() {
		$this->enabled            = 'yes';
		$this->id                 = 'mock';
		$this->has_fields         = false;
		$this->order_button_text  = __( 'Proceed to PayPal', 'woocommerce-admin' );
		$this->method_title       = 'Mock Gateway';
		$this->method_description = 'Mock Gateway for unit tests';
		$this->pay_button_id      = 'mock-pay-button';
		$this->supports           = array(
			'products',
			'pay_button',
		);

		// Load the settings.
		$this->init_form_fields();
		$this->init_settings();
	}

	/**
	 * Initialise Gateway Settings Form Fields.
	 */
	public function init_form_fields() {
		$this->form_fields = array(
			'enabled' => array(
				'title'   => '',
				'type'    => 'checkbox',
				'label'   => '',
				'default' => 'yes',
			),
			'api_key' => array(
				'title'   => __( 'API Key', 'woocommerce-admin' ),
				'type'    => 'text',
				'default' => '',
			),
		);
	}

	/**
	 * Determine if the gateway requires further setup.
	 */
	public function needs_setup() {
		$settings = get_option( 'woocommerce_mock_settings', array() );
		return ! empty( $settings['api_key'] );
	}

	/**
	 * Get post install script handles.
	 *
	 * @return array
	 */
	public function get_post_install_script_handles() {
		wp_register_script(
			'post-install-script',
			'post-install-script.js',
			array(),
			'1.0.0',
			true
		);

		return array(
			'post-install-script',
			'unregistered-handle',
		);
	}

	/**
	 * Get connection URL.
	 *
	 * @param string $return_url Return URL.
	 * @return string
	 */
	public function get_connection_url( $return_url ) {
		return 'http://testconnection.com?return=' . $return_url;
	}

	/**
	 * Get setup help text.
	 *
	 * @return string
	 */
	public function get_setup_help_text() {
		return 'Test help text.';
	}

	/**
	 * Get required settings keys.
	 *
	 * @return array
	 */
	public function get_required_settings_keys() {
		return array( 'api_key' );
	}
}

