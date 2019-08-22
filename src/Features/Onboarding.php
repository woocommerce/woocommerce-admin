<?php
/**
 * WooCommerce Onboarding
 * NOTE: DO NOT edit this file in WooCommerce core, this is generated from woocommerce-admin.
 *
 * @package Woocommerce Admin
 */

namespace Automattic\WooCommerce\Admin\Features;

use \Automattic\WooCommerce\Admin\Loader;

/**
 * Contains backend logic for the onboarding profile and checklist feature.
 */
class Onboarding {
	/**
	 * Class instance.
	 *
	 * @var Onboarding instance
	 */
	protected static $instance = null;

	/**
	 * Name of themes transient.
	 *
	 * @var string
	 */
	const THEMES_TRANSIENT = 'wc_onboarding_themes';

	/**
	 * Name of product data transient.
	 *
	 * @var string
	 */
	const PRODUCT_DATA_TRANSIENT = 'wc_onboarding_product_data';

	/**
	 * Get class instance.
	 */
	public static function get_instance() {
		if ( ! self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Hook into WooCommerce.
	 */
	public function __construct() {
		if ( ! is_admin() ) {
			return;
		}

		// Include WC Admin Onboarding classes.
		OnboardingTasks::get_instance();

		add_action( 'woocommerce_components_settings', array( $this, 'component_settings' ), 20 ); // Run after Automattic\WooCommerce\Admin\Loader.
		add_action( 'woocommerce_theme_installed', array( $this, 'delete_themes_transient' ) );
		add_action( 'after_switch_theme', array( $this, 'delete_themes_transient' ) );
		add_action( 'current_screen', array( $this, 'update_help_tab' ), 60 );
		add_action( 'current_screen', array( $this, 'reset_onboarding' ) );
		add_filter( 'woocommerce_admin_is_loading', array( $this, 'is_loading' ) );
		add_filter( 'woocommerce_rest_prepare_themes', array( $this, 'add_uploaded_theme_data' ) );
	}

	/**
	 * Returns true if the profiler should be displayed (not completed and not skipped).
	 *
	 * @return bool
	 */
	public function should_show_profiler() {
		$onboarding_data = get_option( 'wc_onboarding_profile', array() );

		$is_completed = isset( $onboarding_data['completed'] ) && true === $onboarding_data['completed'];
		$is_skipped   = isset( $onboarding_data['skipped'] ) && true === $onboarding_data['skipped'];

		// @todo When merging to WooCommerce Core, we should set the `completed` flag to true during the upgrade progress.
		// https://github.com/woocommerce/woocommerce-admin/pull/2300#discussion_r287237498.
		return $is_completed || $is_skipped ? false : true;
	}

	/**
	 * Get a list of allowed industries for the onboarding wizard.
	 *
	 * @return array
	 */
	public static function get_allowed_industries() {
		return apply_filters(
			'woocommerce_admin_onboarding_industries',
			array(
				'fashion-apparel-accessories' => __( 'Fashion, apparel & accessories', 'woocommerce-admin' ),
				'health-beauty'               => __( 'Health & beauty', 'woocommerce-admin' ),
				'art-music-photography'       => __( 'Art, music, & photography', 'woocommerce-admin' ),
				'electronics-computers'       => __( 'Electronics & computers', 'woocommerce-admin' ),
				'food-drink'                  => __( 'Food & drink', 'woocommerce-admin' ),
				'home-furniture-garden'       => __( 'Home, furniture & garden', 'woocommerce-admin' ),
				'other'                       => __( 'Other', 'woocommerce-admin' ),
			)
		);
	}

	/**
	 * Get a list of allowed product types for the onboarding wizard.
	 *
	 * @return array
	 */
	public static function get_allowed_product_types() {
		$product_types = self::append_product_data(
			array(
				'physical'      => array(
					'label'       => __( 'Physical products', 'woocommerce-admin' ),
					'description' => __( 'Products you ship to customers.', 'woocommerce-admin' ),
				),
				'downloads'     => array(
					'label'       => __( 'Downloads', 'woocommerce-admin' ),
					'description' => __( 'Virtual products that customers download.', 'woocommerce-admin' ),
				),
				'subscriptions' => array(
					'label'   => __( 'Subscriptions', 'woocommerce-admin' ),
					'product' => 'woocommerce-subscriptions',
				),
				'memberships'   => array(
					'label'   => __( 'Memberships', 'woocommerce-admin' ),
					'product' => 'woocommerce-memberships',
				),
				'composite'     => array(
					'label'   => __( 'Composite Products', 'woocommerce-admin' ),
					'product' => 'woocommerce-composite-products',
				),
				'bookings'      => array(
					'label'   => __( 'Bookings', 'woocommerce-admin' ),
					'product' => 'WooCommerce Bookings',
				),
			)
		);

		return apply_filters( 'woocommerce_admin_onboarding_product_types', $product_types );
	}

	/**
	 * Get a list of themes for the onboarding wizard.
	 *
	 * @return array
	 */
	public static function get_themes() {
		$themes = get_transient( self::THEMES_TRANSIENT );
		if ( false === $themes ) {
			$theme_data = wp_remote_get( 'https://woocommerce.com/wp-json/wccom-extensions/1.0/search?category=themes' );
			$themes     = array();

			if ( ! is_wp_error( $theme_data ) ) {
				$theme_data = json_decode( $theme_data['body'] );

				foreach ( $theme_data->products as $theme ) {
					$slug                                       = sanitize_title( $theme->slug );
					$themes[ $slug ]                            = (array) $theme;
					$themes[ $slug ]['is_installed']            = false;
					$themes[ $slug ]['has_woocommerce_support'] = true;
				}
			}

			$installed_themes = wp_get_themes();
			$active_theme     = get_option( 'stylesheet' );

			foreach ( $installed_themes as $slug => $theme ) {
				$theme_data = self::get_theme_data( $theme );

				if ( ! $theme_data['has_woocommerce_support'] && $active_theme !== $slug ) {
					continue;
				}

				$installed_themes = wp_get_themes();
				$themes[ $slug ]  = $theme_data;
			}

			$themes = array( $active_theme => $themes[ $active_theme ] ) + $themes;

			set_transient( self::THEMES_TRANSIENT, $themes, DAY_IN_SECONDS );
		}

		$themes = apply_filters( 'woocommerce_admin_onboarding_themes', $themes );
		return array_values( $themes );
	}

	/**
	 * Get theme data used in onboarding theme browser.
	 *
	 * @param WP_Theme $theme Theme to gather data from.
	 * @return array
	 */
	public static function get_theme_data( $theme ) {
		return array(
			'slug'                    => sanitize_title( $theme->stylesheet ),
			'title'                   => $theme->get( 'Name' ),
			'price'                   => '0.00',
			'is_installed'            => true,
			'image'                   => $theme->get_screenshot(),
			'has_woocommerce_support' => self::has_woocommerce_support( $theme ),
		);
	}

	/**
	 * Add theme data to response from themes controller.
	 *
	 * @param WP_REST_Response $response Rest response.
	 * @return WP_REST_Response
	 */
	public static function add_uploaded_theme_data( $response ) {
		if ( ! isset( $response->data['theme'] ) ) {
			return $response;
		}

		$theme                        = wp_get_theme( $response->data['theme'] );
		$response->data['theme_data'] = self::get_theme_data( $theme );

		return $response;
	}

	/**
	 * Check if theme has declared support for WooCommerce
	 *
	 * @param WP_Theme $theme Theme to check.
	 * @return bool
	 */
	public static function has_woocommerce_support( $theme ) {
		$themes = array( $theme );
		if ( $theme->get( 'Template' ) ) {
			$parent_theme = wp_get_theme( $theme->get( 'Template' ) );
			$themes[]     = $parent_theme;
		}

		foreach ( $themes as $theme ) {
			$directory = new \RecursiveDirectoryIterator( $theme->theme_root . '/' . $theme->stylesheet );
			$iterator  = new \RecursiveIteratorIterator( $directory );
			$files     = new \RegexIterator( $iterator, '/^.+\.php$/i', \RecursiveRegexIterator::GET_MATCH );

			foreach ( $files as $file ) {
				$content = file_get_contents( $file[0] );
				if ( preg_match( '/add_theme_support\(([^(]*)(\'|\")woocommerce(\'|\")([^(]*)/si', $content, $matches ) ) {
					return true;
				}
			}
		}

		return false;
	}

	/**
	 * Append dynamic product data from API.
	 *
	 * @param array $product_types Array of product types.
	 * @return array
	 */
	public static function append_product_data( $product_types ) {
		$woocommerce_products = get_transient( self::PRODUCT_DATA_TRANSIENT );
		if ( false === $woocommerce_products ) {
			$woocommerce_products = wp_remote_get( 'https://woocommerce.com/wp-json/wccom-extensions/1.0/search?category=product-type' );
			if ( is_wp_error( $woocommerce_products ) ) {
				return $product_types;
			}

			set_transient( self::PRODUCT_DATA_TRANSIENT, $woocommerce_products, DAY_IN_SECONDS );
		}

		$product_data = json_decode( $woocommerce_products['body'] );
		$products     = array();

		// Map product data by slug.
		foreach ( $product_data->products as $product_datum ) {
			$products[ $product_datum->slug ] = $product_datum;
		}

		// Loop over product types and append data.
		foreach ( $product_types as $key => $product_type ) {
			if ( isset( $product_type['product'] ) ) {
				/* translators: Amount of product per year (e.g. Bookings - $240.00 per year) */
				$product_types[ $key ]['label']      .= sprintf( __( ' — %s per year', 'woocommerce-admin' ), html_entity_decode( $products[ $product_type['product'] ]->price ) );
				$product_types[ $key ]['description'] = $products[ $product_type['product'] ]->excerpt;
				$product_types[ $key ]['more_url']    = $products[ $product_type['product'] ]->link;
			}
		}

		return $product_types;
	}

	/**
	 * Delete the stored themes transient.
	 */
	public static function delete_themes_transient() {
		delete_transient( self::THEMES_TRANSIENT );
	}

	/**
	 * Add profiler items to component settings.
	 *
	 * @param array $settings Component settings.
	 */
	public function component_settings( $settings ) {
		$profile = get_option( 'wc_onboarding_profile', array() );

		include_once WC_ABSPATH . 'includes/admin/helper/class-wc-helper-options.php';
		$wccom_auth                 = \WC_Helper_Options::get( 'auth' );
		$profile['wccom_connected'] = empty( $wccom_auth['access_token'] ) ? false : true;

		$settings['onboarding'] = array(
			'industries' => self::get_allowed_industries(),
			'profile'    => $profile,
		);

		// Only fetch if the onboarding wizard is incomplete.
		if ( $this->should_show_profiler() ) {
			$settings['onboarding']['productTypes']  = self::get_allowed_product_types();
			$settings['onboarding']['themes']        = self::get_themes();
			$settings['onboarding']['activeTheme']   = get_option( 'stylesheet' );
			$settings['onboarding']['activePlugins'] = self::get_active_plugins();
		}

		return $settings;
	}

	/**
	 * Gets an array of plugins that can be installed & activated via the onboarding wizard.
	 *
	 * @todo Handle edgecase of where installed plugins may have versioned folder names (i.e. `jetpack-master/jetpack.php`).
	 */
	public static function get_allowed_plugins() {
		return apply_filters(
			'woocommerce_onboarding_plugins_whitelist',
			array(
				'jetpack'              => 'jetpack/jetpack.php',
				'woocommerce-services' => 'woocommerce-services/woocommerce-services.php',
			)
		);
	}
	/**
	 * Get a list of active plugins, relevent to the onboarding wizard.
	 *
	 * @return array
	 */
	public static function get_active_plugins() {
		$all_active_plugins   = get_option( 'active_plugins', array() );
		$allowed_plugins      = self::get_allowed_plugins();
		$active_plugin_files  = array_intersect( $all_active_plugins, $allowed_plugins );
		$allowed_plugin_slugs = array_flip( $allowed_plugins );
		$active_plugins = array();
		foreach ( $active_plugin_files as $file ) {
			$slug = $allowed_plugin_slugs[ $file ];
			if ( 'jetpack' === $slug || 'woocommerce-services' === $slug ) {
				// If Jetpack is installed but not connected, consider both WCS and Jetpack inactive for the purpose of onboarding.
				if ( ! class_exists( 'Jetpack' ) || ! ( \Jetpack::is_active() || \Jetpack::is_development_mode() ) ) {
					continue;
				}
			}
			$active_plugins[] = $slug;
		}
		return $active_plugins;
	}

	/**
	 * Let the app know that we will be showing the onboarding route, so wp-admin elements should be hidden while loading.
	 *
	 * @param bool $is_loading Indicates if the `woocommerce-admin-is-loading` should be appended or not.
	 * @return bool
	 */
	public function is_loading( $is_loading ) {
		$show_profiler = $this->should_show_profiler();
		$is_dashboard  = ! isset( $_GET['path'] ); // WPCS: csrf ok.

		if ( ! $show_profiler || ! $is_dashboard ) {
			return $is_loading;
		}
		return true;
	}

	/**
	 * Update the help tab setup link to reset the onboarding profiler.
	 */
	public static function update_help_tab() {
		$screen = get_current_screen();

		if ( ! $screen || ! in_array( $screen->id, wc_get_screen_ids(), true ) ) {
			return;
		}

		$help_tabs = $screen->get_help_tabs();

		foreach ( $help_tabs as $help_tab ) {
			if ( 'woocommerce_onboard_tab' !== $help_tab['id'] ) {
				continue;
			}

			$screen->remove_help_tab( 'woocommerce_onboard_tab' );
			$help_tab['content'] = '<h2>' . __( 'Setup wizard', 'woocommerce-admin' ) . '</h2>' .
				'<p>' . __( 'If you need to access the setup wizard again, please click on the button below.', 'woocommerce-admin' ) . '</p>' .
				'<p><a href="' . wc_admin_url( '&reset_onboarding=1' ) . '" class="button button-primary">' . __( 'Setup wizard', 'woocommerce-admin' ) . '</a></p>';
			$screen->add_help_tab( $help_tab );
		}
	}

	/**
	 * Reset the onboarding profiler and redirect to the profiler.
	 */
	public static function reset_onboarding() {
		if (
			! Loader::is_admin_page() ||
			! isset( $_GET['reset_onboarding'] ) || // WPCS: CSRF ok.
			1 !== absint( $_GET['reset_onboarding'] ) // WPCS: CSRF ok.
		) {
			return;
		}

		$request = new \WP_REST_Request( 'POST', '/wc-admin/v1/onboarding/profile' );
		$request->set_headers( array( 'content-type' => 'application/json' ) );
		$request->set_body(
			wp_json_encode(
				array(
					'completed' => false,
					'skipped'   => false,
				)
			)
		);
		$response = rest_do_request( $request );
	}
}
