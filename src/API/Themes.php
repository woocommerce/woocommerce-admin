<?php
/**
 * REST API Themes Controller
 *
 * Handles requests to /themes
 *
 * @package WooCommerce Admin/API
 */

namespace Automattic\WooCommerce\Admin\API;

defined( 'ABSPATH' ) || exit;

use Automattic\WooCommerce\Admin\Overrides\ThemeUpgrader;
use Automattic\WooCommerce\Admin\Overrides\ThemeUpgraderSkin;
use Automattic\WooCommerce\Admin\Features\Onboarding;

/**
 * Themes controller.
 *
 * @package WooCommerce Admin/API
 * @extends WC_REST_Data_Controller
 */
class Themes extends \WC_REST_Data_Controller {
	/**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wc-admin';

	/**
	 * Route base.
	 *
	 * @var string
	 */
	protected $rest_base = 'themes';

	/**
	 * Register routes.
	 */
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/upload',
			array(
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'upload_theme' ),
					'permission_callback' => array( $this, 'upload_theme_permissions_check' ),
					'args'                => $this->get_collection_params(),
				),
				'schema' => array( $this, 'get_public_item_schema' ),
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/install',
			array(
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'install_theme' ),
					'permission_callback' => array( $this, 'update_item_permissions_check' ),
				),
				'schema' => array( $this, 'get_item_schema' ),
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/activate',
			array(
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'activate_theme' ),
					'permission_callback' => array( $this, 'update_item_permissions_check' ),
				),
				'schema' => array( $this, 'get_item_schema' ),
			)
		);
	}

	/**
	 * Check whether a given request has permission to edit upload plugins/themes.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return WP_Error|boolean
	 */
	public function upload_theme_permissions_check( $request ) {
		if ( ! current_user_can( 'upload_themes' ) ) {
			return new \WP_Error( 'woocommerce_rest_cannot_view', __( 'Sorry, you are not allowed to install themes on this site.', 'woocommerce-admin' ), array( 'status' => rest_authorization_required_code() ) );
		}

		return true;
	}

	/**
	 * Check if a given request has access to manage themes.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return WP_Error|boolean
	 */
	public function update_item_permissions_check( $request ) {
		if ( ! current_user_can( 'install_themes' ) ) {
			return new \WP_Error( 'woocommerce_rest_cannot_update', __( 'Sorry, you cannot manage themes.', 'woocommerce-admin' ), array( 'status' => rest_authorization_required_code() ) );
		}
		return true;
	}

	/**
	 * Upload and install a theme.
	 *
	 * @param  WP_REST_Request $request Request data.
	 * @return WP_Error|WP_REST_Response
	 */
	public function upload_theme( $request ) {
		if (
			! isset( $_FILES['pluginzip'] ) || ! isset( $_FILES['pluginzip']['tmp_name'] ) || ! is_uploaded_file( $_FILES['pluginzip']['tmp_name'] ) || ! is_file( $_FILES['pluginzip']['tmp_name'] ) ) { // WPCS: sanitization ok.
			return new \WP_Error( 'woocommerce_rest_invalid_file', __( 'Specified file failed upload test.', 'woocommerce-admin' ) );
		}

		include_once ABSPATH . 'wp-admin/includes/file.php';
		include_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';

		$_GET['package'] = true;
		$file_upload     = new \File_Upload_Upgrader( 'pluginzip', 'package' );
		$upgrader        = new ThemeUpgrader( new ThemeUpgraderSkin() );
		$install         = $upgrader->install( $file_upload->package );

		if ( $install || is_wp_error( $install ) ) {
			$file_upload->cleanup();
		}

		if ( ! is_wp_error( $install ) && isset( $install['destination_name'] ) ) {
			$theme  = $install['destination_name'];
			$result = array(
				'status'  => 'success',
				'message' => $upgrader->strings['process_success'],
				'theme'   => $theme,
			);

			/**
			 * Fires when a theme is successfully installed.
			 *
			 * @param string $theme The theme name.
			 */
			do_action( 'woocommerce_theme_installed', $theme );
		} else {
			if ( is_wp_error( $install ) && $install->get_error_code() ) {
				$error_message = isset( $upgrader->strings[ $install->get_error_code() ] ) ? $upgrader->strings[ $install->get_error_code() ] : $install->get_error_data();
			} else {
				$error_message = $upgrader->strings['process_failed'];
			}

			$result = array(
				'status'  => 'error',
				'message' => $error_message,
			);
		}

		$response = $this->prepare_item_for_response( $result, $request );
		$data     = $this->prepare_response_for_collection( $response );

		return rest_ensure_response( $data );
	}


	/**
	 * Prepare the data object for response.
	 *
	 * @param object          $item Data object.
	 * @param WP_REST_Request $request Request object.
	 * @return WP_REST_Response $response Response data.
	 */
	public function prepare_item_for_response( $item, $request ) {
		$data     = $this->add_additional_fields_to_object( $item, $request );
		$data     = $this->filter_response_by_context( $data, 'view' );
		$response = rest_ensure_response( $data );

		/**
		 * Filter the list returned from the API.
		 *
		 * @param WP_REST_Response $response The response object.
		 * @param array            $item     The original item.
		 * @param WP_REST_Request  $request  Request used to generate the response.
		 */
		return apply_filters( 'woocommerce_rest_prepare_themes', $response, $item, $request );
	}

	/**
	 * Installs the requested theme.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return WP_Error|array Theme installation status.
	 */
	public function install_theme( $request ) {
		$allowed_themes = Onboarding::get_allowed_themes();
		$theme          = sanitize_title_with_dashes( $request['theme'] );

		if ( ! in_array( $theme, $allowed_themes, true ) ) {
			return new \WP_Error( 'woocommerce_rest_invalid_theme', __( 'Invalid theme.', 'woocommerce-admin' ), 404 );
		}

		$slug             = sanitize_key( $theme );
		$installed_themes = wp_get_themes();

		if ( in_array( $slug, array_keys( $installed_themes ), true ) ) {
			return( array(
				'slug'   => $slug,
				'name'   => $installed_themes[ $slug ]->get( 'Name' ),
				'status' => 'success',
			) );
		}

		include_once ABSPATH . '/wp-admin/includes/admin.php';
		include_once ABSPATH . '/wp-admin/includes/theme-install.php';
		include_once ABSPATH . '/wp-admin/includes/theme.php';
		include_once ABSPATH . '/wp-admin/includes/class-wp-upgrader.php';
		include_once ABSPATH . '/wp-admin/includes/class-theme-upgrader.php';

		$api = themes_api(
			'theme_information',
			array(
				'slug'   => $slug,
				'fields' => array(
					'sections' => false,
				),
			)
		);

		if ( is_wp_error( $api ) ) {
			return new \WP_Error(
				'woocommerce_rest_theme_install',
				sprintf(
					/* translators: %s: theme slug (example: woocommerce-services) */
					__( 'The requested theme `%s` could not be installed. Theme API call failed.', 'woocommerce-admin' ),
					$slug
				),
				500
			);
		}

		$upgrader = new \Theme_Upgrader( new \Automatic_Upgrader_Skin() );
		$result   = $upgrader->install( $api->download_link );

		if ( is_wp_error( $result ) || is_null( $result ) ) {
			return new \WP_Error(
				'woocommerce_rest_theme_install',
				sprintf(
					/* translators: %s: theme slug (example: woocommerce-services) */
					__( 'The requested theme `%s` could not be installed.', 'woocommerce-admin' ),
					$slug
				),
				500
			);
		}

		return array(
			'slug'   => $slug,
			'name'   => $api->name,
			'status' => 'success',
		);
	}

	/**
	 * Activate the requested theme.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return WP_Error|array Theme activation status.
	 */
	public function activate_theme( $request ) {
		$allowed_themes = Onboarding::get_allowed_themes();
		$theme          = sanitize_title_with_dashes( $request['theme'] );
		if ( ! in_array( $theme, $allowed_themes, true ) ) {
			return new \WP_Error( 'woocommerce_rest_invalid_theme', __( 'Invalid theme.', 'woocommerce-admin' ), 404 );
		}

		require_once ABSPATH . 'wp-admin/includes/theme.php';

		$slug             = sanitize_key( $theme );
		$installed_themes = wp_get_themes();

		if ( ! in_array( $theme, array_keys( $installed_themes ), true ) ) {
			/* translators: %s: theme slug (example: woocommerce-services) */
			return new \WP_Error( 'woocommerce_rest_invalid_theme', sprintf( __( 'Invalid theme %s.', 'woocommerce-admin' ), $slug ), 404 );
		}

		$result = switch_theme( $theme );
		if ( ! is_null( $result ) ) {
			return new \WP_Error( 'woocommerce_rest_invalid_theme', sprintf( __( 'The requested theme could not be activated.', 'woocommerce-admin' ), $slug ), 500 );
		}

		return( array(
			'slug'   => $theme,
			'name'   => $installed_themes[ $theme ]->get( 'Name' ),
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
			'title'      => 'themes',
			'type'       => 'object',
			'properties' => array(
				'status'  => array(
					'description' => __( 'Theme status.', 'woocommerce-admin' ),
					'type'        => 'string',
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'message' => array(
					'description' => __( 'Theme installation message.', 'woocommerce-admin' ),
					'type'        => 'string',
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'name' => array(
					'description' => __( 'Theme name.', 'woocommerce-admin' ),
					'type'        => 'string',
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
				'slug' => array(
					'description' => __( 'Theme slug.', 'woocommerce-admin' ),
					'type'        => 'string',
					'context'     => array( 'view', 'edit' ),
					'readonly'    => true,
				),
			),
		);

		return $this->add_additional_fields_schema( $schema );
	}

	/**
	 * Get the query params for collections.
	 *
	 * @return array
	 */
	public function get_collection_params() {
		$params['context']   = $this->get_context_param( array( 'default' => 'view' ) );
		$params['pluginzip'] = array(
			'description'       => __( 'A zip file of the theme to be uploaded.', 'woocommerce-admin' ),
			'type'              => 'file',
			'validate_callback' => 'rest_validate_request_arg',
		);

		return apply_filters( 'woocommerce_rest_themes_collection_params', $params );
	}
}
