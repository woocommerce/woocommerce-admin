<?php
/**
 * Extension API Controller
 * Generates routes for registered hooks and returns their valid output.
 */
class WooCommerce_Extension_API_Controller {

	/**
	 * Class Instance.
	 */
	protected static $instance = null;

	/**
	 * API namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wc-ext/v1';

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'rest_api_init', array( $this, 'register_hooks' ) );
	}

	/**
	 * Register hooks to API endpoints
	 */
	public function register_hooks() {
		register_rest_route( $this->namespace, '/hooks', array(
			array(
				'methods'  => WP_REST_Server::READABLE,
				'callback' => array( $this, 'get_registered_hooks' ),
				'args'     => array(
					'hooks' => array(
						'required' => true,
					),
				),            
			),
			// TODO Add permissions callback
			// TODO Add schema
		) );
	}

	/**
	 * Gets hook data from JSON definition
	 */
	function get_hook_definition( $hook_name ) {
		// TODO Make directory paths pluggable so complex extensions can register their own hooks
		$hook_file = woo_dash_dir_path( 'extension-api/hooks/' . $hook_name . '.json' );

		if ( ! file_exists( $hook_file ) ) {
			return false;
		}


		$hook = json_decode( file_get_contents( $hook_file ) );

		if ( empty ( $hook->name ) ) {
			return false;
		}

		return $hook;
	}

	/**
	 * Returns all of the registered hooks for the hooks in this request.
	 */
	function get_registered_hooks( $request ) {
		$hooks = explode( ',', $request['hooks'] );


		$output = array();

		foreach ( $hooks as $hook_name ) {
			$hook = $this->get_hook_definition( $hook_name );

			if ( ! $hook ) {
				continue;
			}

			$registered_hooks = apply_filters( 'woocommerce_extension_hook_' . $hook_name, array() );
			
			// TODO validation against props

			$output[ $hook_name ] = $registered_hooks;
		}

		return $output;
	}

	/**
	 * Class instance.
	 */
	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}
}

WooCommerce_Extension_API_Controller::instance();
