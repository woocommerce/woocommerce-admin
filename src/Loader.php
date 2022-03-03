<?php
/**
 * Register the scripts, styles, and includes needed for pieces of the WooCommerce Admin experience.
 * NOTE: DO NOT edit this file in WooCommerce core, this is generated from woocommerce-admin.
 */

namespace Automattic\WooCommerce\Admin;

use \_WP_Dependency;
use Automattic\WooCommerce\Admin\API\Reports\Orders\DataStore as OrdersDataStore;
use Automattic\WooCommerce\Admin\API\Plugins;
use Automattic\WooCommerce\Admin\Features\Features;
use Automattic\WooCommerce\Admin\Features\Navigation\Screen;
use Automattic\WooCommerce\Internal\Admin\Translations;
use Automattic\WooCommerce\Internal\Admin\WCAdminSharedSettings;
use WC_Marketplace_Suggestions;

/**
 * Loader Class.
 */
class Loader {
	/**
	 * Class instance.
	 *
	 * @var Loader instance
	 */
	protected static $instance = null;

	/**
	 * An array of classes to load from the includes folder.
	 *
	 * @var array
	 */
	protected static $classes = array();

	/**
	 * WordPress capability required to use analytics features.
	 *
	 * @var string
	 */
	protected static $required_capability = null;

	/**
	 * An array of dependencies that have been preloaded (to avoid duplicates).
	 *
	 * @var array
	 */
	protected $preloaded_dependencies = array(
		'script' => array(),
		'style'  => array(),
	);

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
	 * Constructor.
	 * Hooks added here should be removed in `wc_admin_initialize` via the feature plugin.
	 */
	public function __construct() {
		Features::get_instance();
		WCAdminSharedSettings::get_instance();
		Translations::get_instance();
		add_action( 'admin_enqueue_scripts', array( __CLASS__, 'register_scripts' ) );
		add_action( 'admin_enqueue_scripts', array( __CLASS__, 'inject_wc_settings_dependencies' ), 14 );
		add_action( 'admin_enqueue_scripts', array( $this, 'load_scripts' ), 15 );
		// Old settings injection.
		add_filter( 'woocommerce_components_settings', array( __CLASS__, 'add_component_settings' ) );
		// New settings injection.
		add_filter( 'woocommerce_admin_shared_settings', array( __CLASS__, 'add_component_settings' ) );
		add_filter( 'admin_body_class', array( __CLASS__, 'add_admin_body_classes' ) );
		add_filter( 'admin_title', array( __CLASS__, 'update_admin_title' ) );
		add_action( 'rest_api_init', array( __CLASS__, 'register_user_data' ) );
		add_action( 'in_admin_header', array( __CLASS__, 'embed_page_header' ) );
		add_filter( 'woocommerce_settings_groups', array( __CLASS__, 'add_settings_group' ) );
		add_filter( 'woocommerce_settings-wc_admin', array( __CLASS__, 'add_settings' ) );
		add_action( 'admin_head', array( __CLASS__, 'remove_notices' ) );
		add_action( 'admin_head', array( __CLASS__, 'smart_app_banner' ) );
		add_action( 'admin_notices', array( __CLASS__, 'inject_before_notices' ), -9999 );
		add_action( 'admin_notices', array( __CLASS__, 'inject_after_notices' ), PHP_INT_MAX );

		// Added this hook to delete the field woocommerce_onboarding_homepage_post_id when deleting the homepage.
		add_action( 'trashed_post', array( __CLASS__, 'delete_homepage' ) );

		/*
		* Remove the emoji script as it always defaults to replacing emojis with Twemoji images.
		* Gutenberg has also disabled emojis. More on that here -> https://github.com/WordPress/gutenberg/pull/6151
		*/
		remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );

		add_action( 'admin_init', array( __CLASS__, 'is_using_installed_wc_admin_plugin' ) );
	}

	/**
	 * Verifies which plugin version is being used. If WooCommerce Admin is installed and activated but not in use
	 * it will show a warning.
	 */
	public static function is_using_installed_wc_admin_plugin() {
		if ( PluginsHelper::is_plugin_active( 'woocommerce-admin' ) ) {
			$path = PluginsHelper::get_plugin_data( 'woocommerce-admin' );
			if ( WC_ADMIN_VERSION_NUMBER !== $path['Version'] ) {
				add_action(
					'admin_notices',
					function() {
						echo '<div class="error"><p>';
						printf(
							/* translators: %s: is referring to the plugin's name. */
							esc_html__( 'You have the %s plugin activated but it is not being used.', 'woocommerce-admin' ),
							'<code>WooCommerce Admin</code>'
						);
						echo '</p></div>';
					}
				);
			}
		}
	}

	/**
	 * Returns if a specific wc-admin feature is enabled.
	 *
	 * @param  string $feature Feature slug.
	 * @return bool Returns true if the feature is enabled.
	 *
	 * @deprecated since 1.9.0, use Features::is_enabled( $feature )
	 */
	public static function is_feature_enabled( $feature ) {
		wc_deprecated_function( 'is_feature_enabled', '1.9', '\Automattic\WooCommerce\Internal\Admin\Features\Features::is_enabled()' );
		return Features::is_enabled( $feature );
	}

	/**
	 * Loads the required scripts on the correct pages.
	 */
	public function load_scripts() {
		if ( ! self::is_admin_or_embed_page() ) {
			return;
		}

		wp_enqueue_script( WC_ADMIN_APP );
		wp_enqueue_style( WC_ADMIN_APP );
		wp_enqueue_style( 'wc-material-icons' );
		wp_enqueue_style( 'wc-onboarding' );

		// Preload our assets.
		$this->output_header_preload_tags();
	}

	/**
	 * Render a preload link tag for a dependency, optionally
	 * checked against a provided allowlist.
	 *
	 * See: https://macarthur.me/posts/preloading-javascript-in-wordpress
	 *
	 * @param WP_Dependency $dependency The WP_Dependency being preloaded.
	 * @param string        $type Dependency type - 'script' or 'style'.
	 * @param array         $allowlist Optional. List of allowed dependency handles.
	 */
	public function maybe_output_preload_link_tag( $dependency, $type, $allowlist = array() ) {
		if (
			(
				! empty( $allowlist ) &&
				! in_array( $dependency->handle, $allowlist, true )
			) ||
			in_array( $dependency->handle, $this->preloaded_dependencies[ $type ], true )
		) {
			return;
		}

		$this->preloaded_dependencies[ $type ][] = $dependency->handle;

		$source = $dependency->ver ? add_query_arg( 'ver', $dependency->ver, $dependency->src ) : $dependency->src;

		echo '<link rel="preload" href="', esc_url( $source ), '" as="', esc_attr( $type ), '" />', "\n";
	}

	/**
	 * Output a preload link tag for dependencies (and their sub dependencies)
	 * with an optional allowlist.
	 *
	 * See: https://macarthur.me/posts/preloading-javascript-in-wordpress
	 *
	 * @param string $type Dependency type - 'script' or 'style'.
	 * @param array  $allowlist Optional. List of allowed dependency handles.
	 */
	public function output_header_preload_tags_for_type( $type, $allowlist = array() ) {
		if ( 'script' === $type ) {
			$dependencies_of_type = wp_scripts();
		} elseif ( 'style' === $type ) {
			$dependencies_of_type = wp_styles();
		} else {
			return;
		}

		foreach ( $dependencies_of_type->queue as $dependency_handle ) {
			$dependency = $dependencies_of_type->query( $dependency_handle, 'registered' );

			if ( false === $dependency ) {
				continue;
			}

			// Preload the subdependencies first.
			foreach ( $dependency->deps as $sub_dependency_handle ) {
				$sub_dependency = $dependencies_of_type->query( $sub_dependency_handle, 'registered' );

				if ( $sub_dependency ) {
					$this->maybe_output_preload_link_tag( $sub_dependency, $type, $allowlist );
				}
			}

			$this->maybe_output_preload_link_tag( $dependency, $type, $allowlist );
		}
	}

	/**
	 * Output preload link tags for all enqueued stylesheets and scripts.
	 *
	 * See: https://macarthur.me/posts/preloading-javascript-in-wordpress
	 */
	public function output_header_preload_tags() {
		$wc_admin_scripts = array(
			WC_ADMIN_APP,
			'wc-components',
		);

		$wc_admin_styles = array(
			WC_ADMIN_APP,
			'wc-components',
			'wc-material-icons',
		);

		// Preload styles.
		$this->output_header_preload_tags_for_type( 'style', $wc_admin_styles );

		// Preload scripts.
		$this->output_header_preload_tags_for_type( 'script', $wc_admin_scripts );
	}

	/**
	 * Returns true if we are on a JS powered admin page or
	 * a "classic" (non JS app) powered admin page (an embedded page).
	 */
	public static function is_admin_or_embed_page() {
		return self::is_admin_page() || self::is_embed_page();
	}

	/**
	 * Returns true if we are on a JS powered admin page.
	 */
	public static function is_admin_page() {
		// phpcs:disable WordPress.Security.NonceVerification
		return isset( $_GET['page'] ) && 'wc-admin' === $_GET['page'];
		// phpcs:enable WordPress.Security.NonceVerification
	}

	/**
	 *  Returns true if we are on a "classic" (non JS app) powered admin page.
	 *
	 * TODO: See usage in `admin.php`. This needs refactored and implemented properly in core.
	 */
	public static function is_embed_page() {
		return wc_admin_is_connected_page() || ( ! self::is_admin_page() && class_exists( 'Automattic\WooCommerce\Admin\Features\Navigation\Screen' ) && Screen::is_woocommerce_page() );
	}

	/**
	 * Returns breadcrumbs for the current page.
	 */
	private static function get_embed_breadcrumbs() {
		return wc_admin_get_breadcrumbs();
	}

	/**
	 * Outputs breadcrumbs via PHP for the initial load of an embedded page.
	 *
	 * @param array $section Section to create breadcrumb from.
	 */
	private static function output_heading( $section ) {
		echo esc_html( $section );
	}

	/**
	 * Set up a div for the header embed to render into.
	 * The initial contents here are meant as a place loader for when the PHP page initialy loads.
	 */
	public static function embed_page_header() {
		if ( ! self::is_admin_page() && ! self::is_embed_page() ) {
			return;
		}

		if ( ! self::is_embed_page() ) {
			return;
		}

		$sections = self::get_embed_breadcrumbs();
		$sections = is_array( $sections ) ? $sections : array( $sections );
		?>
		<div id="woocommerce-embedded-root" class="is-embed-loading">
			<div class="woocommerce-layout">
				<div class="woocommerce-layout__header is-embed-loading">
					<h1 class="woocommerce-layout__header-heading">
						<?php self::output_heading( end( $sections ) ); ?>
					</h1>
				</div>
			</div>
		</div>
		<?php
	}

	/**
	 * Adds body classes to the main wp-admin wrapper, allowing us to better target elements in specific scenarios.
	 *
	 * @param string $admin_body_class Body class to add.
	 */
	public static function add_admin_body_classes( $admin_body_class = '' ) {
		if ( ! self::is_admin_or_embed_page() ) {
			return $admin_body_class;
		}

		$classes   = explode( ' ', trim( $admin_body_class ) );
		$classes[] = 'woocommerce-page';
		if ( self::is_embed_page() ) {
			$classes[] = 'woocommerce-embed-page';
		}

		/**
		 * Some routes or features like onboarding hide the wp-admin navigation and masterbar.
		 * Setting `woocommerce_admin_is_loading` to true allows us to premeptively hide these
		 * elements while the JS app loads.
		 * This class needs to be removed by those feature components (like <ProfileWizard />).
		 *
		 * @param bool $is_loading If WooCommerce Admin is loading a fullscreen view.
		 */
		$is_loading = apply_filters( 'woocommerce_admin_is_loading', false );

		if ( self::is_admin_page() && $is_loading ) {
			$classes[] = 'woocommerce-admin-is-loading';
		}

		$admin_body_class = implode( ' ', array_unique( $classes ) );
		return " $admin_body_class ";
	}

	/**
	 * Adds an iOS "Smart App Banner" for display on iOS Safari.
	 * See https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/PromotingAppswithAppBanners/PromotingAppswithAppBanners.html
	 */
	public static function smart_app_banner() {
		if ( self::is_admin_or_embed_page() ) {
			echo "
				<meta name='apple-itunes-app' content='app-id=1389130815'>
			";
		}
	}


	/**
	 * Removes notices that should not be displayed on WC Admin pages.
	 */
	public static function remove_notices() {
		if ( ! self::is_admin_or_embed_page() ) {
			return;
		}

		// Hello Dolly.
		if ( function_exists( 'hello_dolly' ) ) {
			remove_action( 'admin_notices', 'hello_dolly' );
		}
	}

	/**
	 * Runs before admin notices action and hides them.
	 */
	public static function inject_before_notices() {
		if ( ! self::is_admin_or_embed_page() ) {
			return;
		}

		// Wrap the notices in a hidden div to prevent flickering before
		// they are moved elsewhere in the page by WordPress Core.
		echo '<div class="woocommerce-layout__notice-list-hide" id="wp__notice-list">';

		if ( self::is_admin_page() ) {
			// Capture all notices and hide them. WordPress Core looks for
			// `.wp-header-end` and appends notices after it if found.
			// https://github.com/WordPress/WordPress/blob/f6a37e7d39e2534d05b9e542045174498edfe536/wp-admin/js/common.js#L737 .
			echo '<div class="wp-header-end" id="woocommerce-layout__notice-catcher"></div>';
		}
	}

	/**
	 * Runs after admin notices and closes div.
	 */
	public static function inject_after_notices() {
		if ( ! self::is_admin_or_embed_page() ) {
			return;
		}

		// Close the hidden div used to prevent notices from flickering before
		// they are inserted elsewhere in the page.
		echo '</div>';
	}

	/**
	 * Edits Admin title based on section of wc-admin.
	 *
	 * @param string $admin_title Modifies admin title.
	 * @todo Can we do some URL rewriting so we can figure out which page they are on server side?
	 */
	public static function update_admin_title( $admin_title ) {
		if (
			! did_action( 'current_screen' ) ||
			! self::is_admin_page()
		) {
			return $admin_title;
		}

		$sections = self::get_embed_breadcrumbs();
		$pieces   = array();

		foreach ( $sections as $section ) {
			$pieces[] = is_array( $section ) ? $section[1] : $section;
		}

		$pieces = array_reverse( $pieces );
		$title  = implode( ' &lsaquo; ', $pieces );

		/* translators: %1$s: updated title, %2$s: blog info name */
		return sprintf( __( '%1$s &lsaquo; %2$s', 'woocommerce-admin' ), $title, get_bloginfo( 'name' ) );
	}

	/**
	 * Set up a div for the app to render into.
	 */
	public static function page_wrapper() {
		?>
		<div class="wrap">
			<div id="root"></div>
		</div>
		<?php
	}

	/**
	 * Hooks extra neccessary data into the component settings array already set in WooCommerce core.
	 *
	 * @param array $settings Array of component settings.
	 * @return array Array of component settings.
	 */
	public static function add_component_settings( $settings ) {
		if ( ! is_admin() ) {
			return $settings;
		}

		if ( ! function_exists( 'wc_blocks_container' ) ) {
			global $wp_locale;
			// inject data not available via older versions of wc_blocks/woo.
			$settings['orderStatuses'] = self::get_order_statuses( wc_get_order_statuses() );
			$settings['stockStatuses'] = self::get_order_statuses( wc_get_product_stock_status_options() );
			$settings['currency']      = self::get_currency_settings();
			$settings['locale']        = [
				'siteLocale'    => isset( $settings['siteLocale'] )
					? $settings['siteLocale']
					: get_locale(),
				'userLocale'    => isset( $settings['l10n']['userLocale'] )
					? $settings['l10n']['userLocale']
					: get_user_locale(),
				'weekdaysShort' => isset( $settings['l10n']['weekdaysShort'] )
					? $settings['l10n']['weekdaysShort']
					: array_values( $wp_locale->weekday_abbrev ),
			];
		}

		$preload_data_endpoints = apply_filters( 'woocommerce_component_settings_preload_endpoints', array() );
		if ( class_exists( 'Jetpack' ) ) {
			$preload_data_endpoints['jetpackStatus'] = '/jetpack/v4/connection';
		}
		if ( ! empty( $preload_data_endpoints ) ) {
			$preload_data = array_reduce(
				array_values( $preload_data_endpoints ),
				'rest_preload_api_request'
			);
		}

		$preload_options = apply_filters( 'woocommerce_admin_preload_options', array() );
		if ( ! empty( $preload_options ) ) {
			foreach ( $preload_options as $option ) {
				$settings['preloadOptions'][ $option ] = get_option( $option );
			}
		}

		$preload_settings = apply_filters( 'woocommerce_admin_preload_settings', array() );
		if ( ! empty( $preload_settings ) ) {
			$setting_options = new \WC_REST_Setting_Options_V2_Controller();
			foreach ( $preload_settings as $group ) {
				$group_settings   = $setting_options->get_group_settings( $group );
				$preload_settings = [];
				foreach ( $group_settings as $option ) {
					$preload_settings[ $option['id'] ] = $option['value'];
				}
				$settings['preloadSettings'][ $group ] = $preload_settings;
			}
		}

		$user_controller = new \WP_REST_Users_Controller();
		$request         = new \WP_REST_Request();
		$request->set_query_params( array( 'context' => 'edit' ) );
		$user_response     = $user_controller->get_current_item( $request );
		$current_user_data = is_wp_error( $user_response ) ? (object) array() : $user_response->get_data();

		$settings['currentUserData']      = $current_user_data;
		$settings['reviewsEnabled']       = get_option( 'woocommerce_enable_reviews' );
		$settings['manageStock']          = get_option( 'woocommerce_manage_stock' );
		$settings['commentModeration']    = get_option( 'comment_moderation' );
		$settings['notifyLowStockAmount'] = get_option( 'woocommerce_notify_low_stock_amount' );
		// @todo On merge, once plugin images are added to core WooCommerce, `wcAdminAssetUrl` can be retired,
		// and `wcAssetUrl` can be used in its place throughout the codebase.
		$settings['wcAdminAssetUrl'] = plugins_url( 'images/', dirname( __DIR__ ) . '/woocommerce-admin.php' );
		$settings['wcVersion']       = WC_VERSION;
		$settings['siteUrl']         = site_url();
		$settings['shopUrl']         = get_permalink( wc_get_page_id( 'shop' ) );
		$settings['homeUrl']         = home_url();
		$settings['dateFormat']      = get_option( 'date_format' );
		$settings['timeZone']        = wc_timezone_string();
		$settings['plugins']         = array(
			'installedPlugins' => PluginsHelper::get_installed_plugin_slugs(),
			'activePlugins'    => Plugins::get_active_plugins(),
		);
		// Plugins that depend on changing the translation work on the server but not the client -
		// WooCommerce Branding is an example of this - so pass through the translation of
		// 'WooCommerce' to wcSettings.
		$settings['woocommerceTranslation'] = __( 'WooCommerce', 'woocommerce-admin' );
		// We may have synced orders with a now-unregistered status.
		// E.g An extension that added statuses is now inactive or removed.
		$settings['unregisteredOrderStatuses'] = self::get_unregistered_order_statuses();
		// The separator used for attributes found in Variation titles.
		$settings['variationTitleAttributesSeparator'] = apply_filters( 'woocommerce_product_variation_title_attributes_separator', ' - ', new \WC_Product() );

		if ( ! empty( $preload_data_endpoints ) ) {
			$settings['dataEndpoints'] = isset( $settings['dataEndpoints'] )
				? $settings['dataEndpoints']
				: [];
			foreach ( $preload_data_endpoints as $key => $endpoint ) {
				// Handle error case: rest_do_request() doesn't guarantee success.
				if ( empty( $preload_data[ $endpoint ] ) ) {
					$settings['dataEndpoints'][ $key ] = array();
				} else {
					$settings['dataEndpoints'][ $key ] = $preload_data[ $endpoint ]['body'];
				}
			}
		}
		$settings = self::get_custom_settings( $settings );
		if ( self::is_embed_page() ) {
			$settings['embedBreadcrumbs'] = self::get_embed_breadcrumbs();
		}

		$settings['allowMarketplaceSuggestions']      = WC_Marketplace_Suggestions::allow_suggestions();
		$settings['connectNonce']                     = wp_create_nonce( 'connect' );
		$settings['wcpay_welcome_page_connect_nonce'] = wp_create_nonce( 'wcpay-connect' );

		return $settings;
	}

	/**
	 * Format order statuses by removing a leading 'wc-' if present.
	 *
	 * @param array $statuses Order statuses.
	 * @return array formatted statuses.
	 */
	public static function get_order_statuses( $statuses ) {
		$formatted_statuses = array();
		foreach ( $statuses as $key => $value ) {
			$formatted_key                        = preg_replace( '/^wc-/', '', $key );
			$formatted_statuses[ $formatted_key ] = $value;
		}
		return $formatted_statuses;
	}

	/**
	 * Get all order statuses present in analytics tables that aren't registered.
	 *
	 * @return array Unregistered order statuses.
	 */
	public static function get_unregistered_order_statuses() {
		$registered_statuses   = wc_get_order_statuses();
		$all_synced_statuses   = OrdersDataStore::get_all_statuses();
		$unregistered_statuses = array_diff( $all_synced_statuses, array_keys( $registered_statuses ) );
		$formatted_status_keys = self::get_order_statuses( array_fill_keys( $unregistered_statuses, '' ) );
		$formatted_statuses    = array_keys( $formatted_status_keys );

		return array_combine( $formatted_statuses, $formatted_statuses );
	}

	/**
	 * Register the admin settings for use in the WC REST API
	 *
	 * @param array $groups Array of setting groups.
	 * @return array
	 */
	public static function add_settings_group( $groups ) {
		$groups[] = array(
			'id'          => 'wc_admin',
			'label'       => __( 'WooCommerce Admin', 'woocommerce-admin' ),
			'description' => __( 'Settings for WooCommerce admin reporting.', 'woocommerce-admin' ),
		);
		return $groups;
	}

	/**
	 * Add WC Admin specific settings
	 *
	 * @param array $settings Array of settings in wc admin group.
	 * @return array
	 */
	public static function add_settings( $settings ) {
		$unregistered_statuses = self::get_unregistered_order_statuses();
		$registered_statuses   = self::get_order_statuses( wc_get_order_statuses() );
		$all_statuses          = array_merge( $unregistered_statuses, $registered_statuses );

		$settings[] = array(
			'id'          => 'woocommerce_excluded_report_order_statuses',
			'option_key'  => 'woocommerce_excluded_report_order_statuses',
			'label'       => __( 'Excluded report order statuses', 'woocommerce-admin' ),
			'description' => __( 'Statuses that should not be included when calculating report totals.', 'woocommerce-admin' ),
			'default'     => array( 'pending', 'cancelled', 'failed' ),
			'type'        => 'multiselect',
			'options'     => $all_statuses,
		);
		$settings[] = array(
			'id'          => 'woocommerce_actionable_order_statuses',
			'option_key'  => 'woocommerce_actionable_order_statuses',
			'label'       => __( 'Actionable order statuses', 'woocommerce-admin' ),
			'description' => __( 'Statuses that require extra action on behalf of the store admin.', 'woocommerce-admin' ),
			'default'     => array( 'processing', 'on-hold' ),
			'type'        => 'multiselect',
			'options'     => $all_statuses,
		);
		$settings[] = array(
			'id'          => 'woocommerce_default_date_range',
			'option_key'  => 'woocommerce_default_date_range',
			'label'       => __( 'Default Date Range', 'woocommerce-admin' ),
			'description' => __( 'Default Date Range', 'woocommerce-admin' ),
			'default'     => 'period=month&compare=previous_year',
			'type'        => 'text',
		);
		return $settings;
	}

	/**
	 * Gets custom settings used for WC Admin.
	 *
	 * @param array $settings Array of settings to merge into.
	 * @return array
	 */
	public static function get_custom_settings( $settings ) {
		$wc_rest_settings_options_controller = new \WC_REST_Setting_Options_Controller();
		$wc_admin_group_settings             = $wc_rest_settings_options_controller->get_group_settings( 'wc_admin' );
		$settings['wcAdminSettings']         = array();

		foreach ( $wc_admin_group_settings as $setting ) {
			if ( ! empty( $setting['id'] ) ) {
				$settings['wcAdminSettings'][ $setting['id'] ] = $setting['value'];
			}
		}
		return $settings;
	}

	/**
	 * Return an object defining the currecy options for the site's current currency
	 *
	 * @return  array  Settings for the current currency {
	 *     Array of settings.
	 *
	 *     @type string $code       Currency code.
	 *     @type string $precision  Number of decimals.
	 *     @type string $symbol     Symbol for currency.
	 * }
	 */
	public static function get_currency_settings() {
		$code = get_woocommerce_currency();

		return apply_filters(
			'wc_currency_settings',
			array(
				'code'              => $code,
				'precision'         => wc_get_price_decimals(),
				'symbol'            => html_entity_decode( get_woocommerce_currency_symbol( $code ) ),
				'symbolPosition'    => get_option( 'woocommerce_currency_pos' ),
				'decimalSeparator'  => wc_get_price_decimal_separator(),
				'thousandSeparator' => wc_get_price_thousand_separator(),
				'priceFormat'       => html_entity_decode( get_woocommerce_price_format() ),
			)
		);
	}

	/**
	 * Registers WooCommerce specific user data to the WordPress user API.
	 */
	public static function register_user_data() {
		register_rest_field(
			'user',
			'is_super_admin',
			array(
				'get_callback' => function() {
					return is_super_admin();
				},
				'schema'       => null,
			)
		);
		register_rest_field(
			'user',
			'woocommerce_meta',
			array(
				'get_callback'    => array( __CLASS__, 'get_user_data_values' ),
				'update_callback' => array( __CLASS__, 'update_user_data_values' ),
				'schema'          => null,
			)
		);
	}

	/**
	 * For all the registered user data fields (  Loader::get_user_data_fields ), fetch the data
	 * for returning via the REST API.
	 *
	 * @param WP_User $user Current user.
	 */
	public static function get_user_data_values( $user ) {
		$values = array();
		foreach ( self::get_user_data_fields() as $field ) {
			$values[ $field ] = self::get_user_data_field( $user['id'], $field );
		}
		return $values;
	}

	/**
	 * For all the registered user data fields ( Loader::get_user_data_fields ), update the data
	 * for the REST API.
	 *
	 * @param array   $values   The new values for the meta.
	 * @param WP_User $user     The current user.
	 * @param string  $field_id The field id for the user meta.
	 */
	public static function update_user_data_values( $values, $user, $field_id ) {
		if ( empty( $values ) || ! is_array( $values ) || 'woocommerce_meta' !== $field_id ) {
			return;
		}
		$fields  = self::get_user_data_fields();
		$updates = array();
		foreach ( $values as $field => $value ) {
			if ( in_array( $field, $fields, true ) ) {
				$updates[ $field ] = $value;
				self::update_user_data_field( $user->ID, $field, $value );
			}
		}
		return $updates;
	}

	/**
	 * We store some WooCommerce specific user meta attached to users endpoint,
	 * so that we can track certain preferences or values such as the inbox activity panel last open time.
	 * Additional fields can be added in the function below, and then used via wc-admin's currentUser data.
	 *
	 * @return array Fields to expose over the WP user endpoint.
	 */
	public static function get_user_data_fields() {
		return apply_filters( 'woocommerce_admin_get_user_data_fields', array() );
	}

	/**
	 * Helper to update user data fields.
	 *
	 * @param int    $user_id  User ID.
	 * @param string $field Field name.
	 * @param mixed  $value  Field value.
	 */
	public static function update_user_data_field( $user_id, $field, $value ) {
		update_user_meta( $user_id, 'woocommerce_admin_' . $field, $value );
	}

	/**
	 * Helper to retrive user data fields.
	 *
	 * Migrates old key prefixes as well.
	 *
	 * @param int    $user_id  User ID.
	 * @param string $field Field name.
	 * @return mixed The user field value.
	 */
	public static function get_user_data_field( $user_id, $field ) {
		$meta_value = get_user_meta( $user_id, 'woocommerce_admin_' . $field, true );

		// Migrate old meta values (prefix changed from `wc_admin_` to `woocommerce_admin_`).
		if ( '' === $meta_value ) {
			$old_meta_value = get_user_meta( $user_id, 'wc_admin_' . $field, true );

			if ( '' !== $old_meta_value ) {
				self::update_user_data_field( $user_id, $field, $old_meta_value );
				delete_user_meta( $user_id, 'wc_admin_' . $field );

				$meta_value = $old_meta_value;
			}
		}

		return $meta_value;
	}

	/**
	 * Injects wp-shared-settings as a dependency if it's present.
	 */
	public static function inject_wc_settings_dependencies() {
		if ( wp_script_is( 'wc-settings', 'registered' ) ) {
			$handles_for_injection = [
				'wc-csv',
				'wc-currency',
				'wc-customer-effort-score',
				'wc-navigation',
				// NOTE: This should be removed when Gutenberg is updated and
				// the notices package is removed from WooCommerce Admin.
				'wc-notices',
				'wc-number',
				'wc-date',
				'wc-components',
				'wc-tracks',
			];
			foreach ( $handles_for_injection as $handle ) {
				$script = wp_scripts()->query( $handle, 'registered' );
				if ( $script instanceof _WP_Dependency ) {
					$script->deps[] = 'wc-settings';
				}
			}
		}
	}

	/**
	 * Delete woocommerce_onboarding_homepage_post_id field when the homepage is deleted
	 *
	 * @param int $post_id The deleted post id.
	 */
	public static function delete_homepage( $post_id ) {
		if ( 'page' !== get_post_type( $post_id ) ) {
			return;
		}
		$homepage_id = intval( get_option( 'woocommerce_onboarding_homepage_post_id', false ) );
		if ( $homepage_id === $post_id ) {
			delete_option( 'woocommerce_onboarding_homepage_post_id' );
		}
	}
}
