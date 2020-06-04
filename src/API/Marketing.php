<?php
/**
 * REST API Marketing Controller
 *
 * Handles requests to /marketing.
 *
 * @package WooCommerce Admin/API
 */

namespace Automattic\WooCommerce\Admin\API;

use Automattic\WooCommerce\Admin\Features\Marketing as MarketingFeature;
use Automattic\WooCommerce\Admin\PluginsHelper;

defined( 'ABSPATH' ) || exit;

/**
 * Marketing Controller.
 *
 * @package WooCommerce Admin/API
 * @extends WC_REST_Data_Controller
 */
class Marketing extends \WC_REST_Data_Controller {

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
	protected $rest_base = 'marketing';

	/**
	 * Register routes.
	 */
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/recommended',
			array(
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_recommended_plugins' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
					'args' => array(
						'per_page' => $this->get_collection_params()['per_page'],
					),
				),
				'schema' => array( $this, 'get_public_item_schema' ),
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/knowledge-base',
			array(
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_knowledge_base_posts' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
				),
				'schema' => array( $this, 'get_public_item_schema' ),
			)
		);
	}

	/**
	 * Return installed marketing extensions data.
	 *
	 * @param \WP_REST_Request $request Request data.
	 *
	 * @return \WP_Error|\WP_REST_Response
	 */
	public function get_recommended_plugins( $request ) {
		$all_plugins = MarketingFeature::get_instance()->get_recommended_plugins();
		$valid_plugins = [];
		$per_page = $request->get_param( 'per_page' );

		foreach ( $all_plugins as $plugin ) {
			if ( ! PluginsHelper::is_plugin_installed( $plugin['plugin'] ) ) {
				$valid_plugins[] = $plugin;
			}
		}

		return rest_ensure_response( array_slice( $valid_plugins, 0, $per_page ) );
	}

	/**
	 * Return installed marketing extensions data.
	 *
	 * @param \WP_REST_Request $request Request data.
	 *
	 * @return \WP_Error|\WP_REST_Response
	 */
	public function get_knowledge_base_posts( $request ) {
		return rest_ensure_response( MarketingFeature::get_instance()->get_knowledge_base_posts() );
	}
}
