<?php
/**
 * REST API Onboarding Plugins Controller
 *
 * Handles requests to install and activate depedent plugins.
 *
 * @package WooCommerce Admin/API
 */

defined( 'ABSPATH' ) || exit;

/**
 * Onboarding Plugins Controller.
 *
 * @package WooCommerce Admin/API
 * @extends WC_REST_Data_Controller
 */
class WC_Admin_REST_Onboarding_Plugins_Controller extends WC_REST_Data_Controller {
	/**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wc-admin/v1';

	/**
	 * Route base.
	 *
	 * @var string
	 */
	protected $rest_base = 'onboarding/plugins';

	/**
	 * Register routes.
	 */
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/install',
			array(
				array(
					'methods'             => WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'install_plugin' ),
					'permission_callback' => array( $this, 'update_item_permissions_check' ),
				),
				'schema' => array( $this, 'get_public_item_schema' ),
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/activate',
			array(
				array(
					'methods'             => WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'activate_plugin' ),
					'permission_callback' => array( $this, 'update_item_permissions_check' ),
				),
				'schema' => array( $this, 'get_public_item_schema' ),
			)
		);
	}

	/**
	 * Check if a given request has access to manage plugins.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return WP_Error|boolean
	 */
	public function update_item_permissions_check( $request ) {
		if ( ! current_user_can( 'install_plugins' ) ) {
			return new WP_Error( 'woocommerce_rest_cannot_update', __( 'Sorry, you cannot manage plugins.', 'woocommerce-admin' ), array( 'status' => rest_authorization_required_code() ) );
		}
		return true;
	}

	/**
	 * Get an array of plugins that can be installed & activated via the endpoints.
	 */
	public function get_allowed_plugins() {
		return apply_filters(
			'woocommerce_onboarding_plugins_whitelist',
			array(
				'jetpack'              => 'jetpack/jetpack.php',
				'woocommerce-services' => 'woocommerce-services/woocommerce-services.php',
			)
		);
	}

	/**
	 * Installs the requested plugin.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return array Plugin Status
	 */
	public function install_plugin( $request ) {
		$allowed_plugins = $this->get_allowed_plugins();
		if ( ! in_array( $request['plugin'], array_keys( $allowed_plugins ), true ) ) {
			return new WP_Error( 'woocommerce_rest_invalid_plugin', __( 'Invalid plugin.', 'woocommerce-admin' ), 404 );
		}

		require_once ABSPATH . 'wp-admin/includes/plugin.php';

		$slug              = $request['plugin'];
		$path              = $allowed_plugins[ $slug ];
		$installed_plugins = get_plugins();

		if ( in_array( $path, array_keys( $installed_plugins ), true ) ) {
			return( array(
				'slug'   => $slug,
				'name'   => $installed_plugins[ $path ]['Name'],
				'status' => 'success',
			) );
		}

		include_once ABSPATH . '/wp-admin/includes/admin.php';
		include_once ABSPATH . '/wp-admin/includes/plugin-install.php';
		include_once ABSPATH . '/wp-admin/includes/plugin.php';
		include_once ABSPATH . '/wp-admin/includes/class-wp-upgrader.php';
		include_once ABSPATH . '/wp-admin/includes/class-plugin-upgrader.php';

		$api = plugins_api(
			'plugin_information',
			array(
				'slug'   => sanitize_key( $slug ),
				'fields' => array(
					'sections' => false,
				),
			)
		);

		if ( is_wp_error( $api ) ) {
			return new WP_Error( 'woocommerce_rest_plugin_install', __( 'The requested plugin could not be installed.', 'woocommerce-admin' ), 500 );
		}

		$upgrader = new Plugin_Upgrader( new Automatic_Upgrader_Skin() );
		$result   = $upgrader->install( $api->download_link );

		if ( is_wp_error( $result ) || is_null( $result ) ) {
			return new WP_Error( 'woocommerce_rest_plugin_install', __( 'The requested plugin could not be installed.', 'woocommerce-admin' ), 500 );
		}

		return array(
			'slug'   => $slug,
			'name'   => $api->name,
			'status' => 'success',
		);
	}

	/**
	 * Activate the requested plugin.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return array Plugin Status
	 */
	public function activate_plugin( $request ) {
		$allowed_plugins = $this->get_allowed_plugins();
		if ( ! in_array( $request['plugin'], array_keys( $allowed_plugins ), true ) ) {
			return new WP_Error( 'woocommerce_rest_invalid_plugin', __( 'Invalid plugin.', 'woocommerce-admin' ), 404 );
		}

		require_once ABSPATH . 'wp-admin/includes/plugin.php';

		$slug              = $request['plugin'];
		$path              = $allowed_plugins[ $slug ];
		$installed_plugins = get_plugins();

		if ( ! in_array( $path, array_keys( $installed_plugins ), tre ) ) {
			return new WP_Error( 'woocommerce_rest_invalid_plugin', __( 'Invalid plugin.', 'woocommerce-admin' ), 404 );
		}

		$result = activate_plugin( $path );
		if ( ! is_null( $result ) ) {
			return new WP_Error( 'woocommerce_rest_invalid_plugin', __( 'The requested plugin could not be activated.', 'woocommerce-admin' ), 500 );
		}

		return( array(
			'slug'   => $slug,
			'name'   => $installed_plugins[ $path ]['Name'],
			'status' => 'success',
		) );
	}

	/**
	 * Get the schema, conforming to JSON Schema.
	 *
	 * @return array
	 */
	public function get_item_schema() {
		$schema = array(
			'$schema'    => 'http://json-schema.org/draft-04/schema#',
			'title'      => 'onboarding_plugin',
			'type'       => 'object',
			'properties' => array(
				'plugins' => array(
					'type'        => 'array',
					'description' => __( 'Array of plugins that have been updated by the endpoint.', 'woocommerce-admin' ),
					'context'     => array( 'view' ),
					'readonly'    => true,
					'items'       => array(
						'type'       => 'object',
						'properties' => array(
							'slug'   => array(
								'description' => __( 'Plugin slug.', 'woocommerce-admin' ),
								'type'        => 'string',
								'context'     => array( 'view', 'edit' ),
								'readonly'    => true,
							),
							'name'   => array(
								'description' => __( 'Plugin dname.', 'woocommerce-admin' ),
								'type'        => 'string',
								'context'     => array( 'view', 'edit' ),
								'readonly'    => true,
							),
							'status' => array(
								'description' => __( 'Plugin status.', 'woocommerce-admin' ),
								'type'        => 'string',
								'context'     => array( 'view', 'edit' ),
								'readonly'    => true,
							),
						),
					),
				),
			),
		);

		return $this->add_additional_fields_schema( $schema );
	}
}
