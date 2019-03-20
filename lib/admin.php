<?php
/**
 * Admin functions
 *
 * @package WC_Admin
 */

/**
 * Returns true if we are on a "classic" (non JS app) powered admin page.
 * `wc_get_screen_ids` will also return IDs for extensions that have properly registered themselves.
 *
 * @param bool $is_embed If the current page should embed the WooCommerce target area (activity panel, notices, etc).
 */
function wc_admin_is_embed_enabled_wc_page( $is_embed ) {
	if ( ! WC_Admin_Loader::is_feature_enabled( 'activity-panels' ) ) {
		return false;
	}

	$screen_id = wc_admin_get_current_screen_id();
	if ( ! $screen_id ) {
		return false;
	}

	$screens = wc_admin_get_embed_enabled_screen_ids();

	if ( in_array( $screen_id, $screens, true ) ) {
		return true;
	}
	return $is_embed;
}

add_action( 'woocommerce_page_is_embed_page', 'wc_admin_is_embed_enabled_wc_page' );

/**
 * Add a single page to a given parent top-level-item.
 *
 * @param array $options {
 *     Array describing the menu item.
 *
 *     @type string $title Menu title
 *     @type string $parent Parent path or menu ID
 *     @type string $path Path for this page, full path in app context; ex /analytics/report
 * }
 */
function wc_admin_register_page( $options ) {
	$defaults = array(
		'parent' => '/analytics',
	);
	$options  = wp_parse_args( $options, $defaults );
	add_submenu_page(
		'/' === $options['parent'][0] ? "wc-admin#{$options['parent']}" : $options['parent'],
		$options['title'],
		$options['title'],
		'manage_options',
		"wc-admin#{$options['path']}",
		array( 'WC_Admin_Loader', 'page_wrapper' )
	);
}

/**
 * Register menu pages for the Dashboard and Analytics sections.
 */
function wc_admin_register_pages() {
	global $menu, $submenu;

	if ( WC_Admin_Loader::is_feature_enabled( 'dashboard' ) ) {
		add_submenu_page(
			'woocommerce',
			__( 'WooCommerce Dashboard', 'woocommerce-admin' ),
			__( 'Dashboard', 'woocommerce-admin' ),
			'manage_options',
			'wc-admin',
			array( 'WC_Admin_Loader', 'page_wrapper' )
		);
	}

	if ( WC_Admin_Loader::is_feature_enabled( 'analytics' ) ) {
		add_menu_page(
			__( 'WooCommerce Analytics', 'woocommerce-admin' ),
			__( 'Analytics', 'woocommerce-admin' ),
			'manage_options',
			'wc-admin#/analytics/revenue',
			array( 'WC_Admin_Loader', 'page_wrapper' ),
			'dashicons-chart-bar',
			56 // After WooCommerce & Product menu items.
		);

		wc_admin_register_page(
			array(
				'title'  => __( 'Revenue', 'woocommerce-admin' ),
				'parent' => '/analytics/revenue',
				'path'   => '/analytics/revenue',
			)
		);

		wc_admin_register_page(
			array(
				'title'  => __( 'Orders', 'woocommerce-admin' ),
				'parent' => '/analytics/revenue',
				'path'   => '/analytics/orders',
			)
		);

		wc_admin_register_page(
			array(
				'title'  => __( 'Products', 'woocommerce-admin' ),
				'parent' => '/analytics/revenue',
				'path'   => '/analytics/products',
			)
		);

		wc_admin_register_page(
			array(
				'title'  => __( 'Categories', 'woocommerce-admin' ),
				'parent' => '/analytics/revenue',
				'path'   => '/analytics/categories',
			)
		);

		wc_admin_register_page(
			array(
				'title'  => __( 'Coupons', 'woocommerce-admin' ),
				'parent' => '/analytics/revenue',
				'path'   => '/analytics/coupons',
			)
		);

		wc_admin_register_page(
			array(
				'title'  => __( 'Taxes', 'woocommerce-admin' ),
				'parent' => '/analytics/revenue',
				'path'   => '/analytics/taxes',
			)
		);

		wc_admin_register_page(
			array(
				'title'  => __( 'Downloads', 'woocommerce-admin' ),
				'parent' => '/analytics/revenue',
				'path'   => '/analytics/downloads',
			)
		);

		if ( 'yes' === get_option( 'woocommerce_manage_stock' ) ) {
			wc_admin_register_page(
				array(
					'title'  => __( 'Stock', 'woocommerce-admin' ),
					'parent' => '/analytics/revenue',
					'path'   => '/analytics/stock',
				)
			);
		}

		wc_admin_register_page(
			array(
				'title'  => __( 'Customers', 'woocommerce-admin' ),
				'parent' => '/analytics/revenue',
				'path'   => '/analytics/customers',
			)
		);

		wc_admin_register_page(
			array(
				'title'  => __( 'Settings', 'woocommerce-admin' ),
				'parent' => '/analytics/revenue',
				'path'   => '/analytics/settings',
			)
		);
	}

	if ( WC_Admin_Loader::is_feature_enabled( 'devdocs' ) && defined( 'WP_DEBUG' ) && WP_DEBUG && defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) {
		wc_admin_register_page(
			array(
				'title'  => 'DevDocs',
				'parent' => 'woocommerce', // Exposed on the main menu for now.
				'path'   => '/devdocs',
			)
		);
	}
}
add_action( 'admin_menu', 'wc_admin_register_pages' );

/**
 * This method is temporary while this is a feature plugin. As a part of core,
 * we can integrate this better with wc-admin-menus.
 *
 * It makes dashboard the top level link for 'WooCommerce' and renames the first Analytics menu item.
 */
function wc_admin_link_structure() {
	global $submenu;
	// User does not have capabilites to see the submenu.
	if ( ! current_user_can( 'manage_woocommerce' ) ) {
		return;
	}

	$wc_admin_key = null;
	foreach ( $submenu['woocommerce'] as $submenu_key => $submenu_item ) {
		if ( 'wc-admin' === $submenu_item[2] ) {
			$wc_admin_key = $submenu_key;
			break;
		}
	}

	if ( ! $wc_admin_key ) {
		return;
	}

	$menu = $submenu['woocommerce'][ $wc_admin_key ];

	// Move menu item to top of array.
	unset( $submenu['woocommerce'][ $wc_admin_key ] );
	array_unshift( $submenu['woocommerce'], $menu );
}

// priority is 20 to run after https://github.com/woocommerce/woocommerce/blob/a55ae325306fc2179149ba9b97e66f32f84fdd9c/includes/admin/class-wc-admin-menus.php#L165.
add_action( 'admin_head', 'wc_admin_link_structure', 20 );

/**
 * Outputs a breadcrumb
 *
 * @param array $section Section to create breadcrumb from.
 */
function wc_admin_output_breadcrumb( $section ) {
	?>
	<span>
	<?php if ( is_array( $section ) ) : ?>
		<a href="<?php echo esc_url( admin_url( $section[0] ) ); ?>">
			<?php echo esc_html( $section[1] ); ?>
		</a>
	<?php else : ?>
		<?php echo esc_html( $section ); ?>
	<?php endif; ?>
	</span>
	<?php
}

/**
 * Set up a div for the header embed to render into.
 * The initial contents here are meant as a place loader for when the PHP page initialy loads.
 *
 * @todo Icon Placeholders for the ActivityPanel, when we implement the new designs.
 */
function wc_admin_embed_page_header() {
	if ( ! WC_Admin_Loader::is_embed_page() ) {
		return;
	}

	$sections = wc_admin_get_embed_breadcrumbs();
	$sections = is_array( $sections ) ? $sections : array( $sections );
	?>
	<div id="woocommerce-embedded-root">
		<div class="woocommerce-layout">
			<div class="woocommerce-layout__header is-embed-loading">
				<h1 class="woocommerce-layout__header-breadcrumbs">
					<span><a href="<?php echo esc_url( admin_url( 'admin.php?page=wc-admin#/' ) ); ?>">WooCommerce</a></span>
					<?php foreach ( $sections as $section ) : ?>
						<?php wc_admin_output_breadcrumb( $section ); ?>
					<?php endforeach; ?>
				</h1>
			</div>
		</div>
		<div class="woocommerce-layout__primary is-embed-loading" id="woocommerce-layout__primary">
			<div id="woocommerce-layout__notice-list" class="woocommerce-layout__notice-list"></div>
		</div>
	</div>
	<?php
}
add_action( 'in_admin_header', 'wc_admin_embed_page_header' );

/**
 * Registers WooCommerce specific user data to the WordPress user API.
 */
function wc_admin_register_user_data() {
	register_rest_field(
		'user',
		'woocommerce_meta',
		array(
			'get_callback'    => 'wc_admin_get_user_data_values',
			'update_callback' => 'wc_admin_update_user_data_values',
			'schema'          => null,
		)
	);
}

/**
 * For all the registered user data fields (  wc_admin_get_user_data_fields ), fetch the data
 * for returning via the REST API.
 *
 * @param WP_User $user Current user.
 */
function wc_admin_get_user_data_values( $user ) {
	$values = array();
	foreach ( WC_Admin_Loader::get_user_data_fields() as $field ) {
		$values[ $field ] = get_user_meta( $user['id'], 'wc_admin_' . $field, true );
	}
	return $values;
}

/**
 * For all the registered user data fields (  wc_admin_get_user_data_fields ), update the data
 * for the REST API.
 *
 * @param array   $values   The new values for the meta.
 * @param WP_User $user     The current user.
 * @param string  $field_id The field id for the user meta.
 */
function wc_admin_update_user_data_values( $values, $user, $field_id ) {
	if ( empty( $values ) || ! is_array( $values ) || 'woocommerce_meta' !== $field_id ) {
		return;
	}
	$fields  = WC_Admin_Loader::get_user_data_fields();
	$updates = array();
	foreach ( $values as $field => $value ) {
		if ( in_array( $field, $fields, true ) ) {
			$updates[ $field ] = $value;
			update_user_meta( $user->ID, 'wc_admin_' . $field, $value );
		}
	}

	return $updates;
}

/**
 * Register the admin settings for use in the WC REST API
 *
 * @param array $groups Array of setting groups.
 * @return array
 */
function wc_admin_add_settings_group( $groups ) {
	$groups[] = array(
		'id'          => 'wc_admin',
		'label'       => __( 'WooCommerce Admin', 'woocommerce-admin' ),
		'description' => __( 'Settings for WooCommerce admin reporting.', 'woocommerce-admin' ),
	);
	return $groups;
}
add_filter( 'woocommerce_settings_groups', 'wc_admin_add_settings_group' );

/**
 * Add WC Admin specific settings
 *
 * @param array $settings Array of settings in wc admin group.
 * @return array
 */
function wc_admin_add_settings( $settings ) {
	$statuses   = WC_Admin_Loader::get_order_statuses( wc_get_order_statuses() );
	$settings[] = array(
		'id'          => 'woocommerce_excluded_report_order_statuses',
		'option_key'  => 'woocommerce_excluded_report_order_statuses',
		'label'       => __( 'Excluded report order statuses', 'woocommerce-admin' ),
		'description' => __( 'Statuses that should not be included when calculating report totals.', 'woocommerce-admin' ),
		'default'     => array( 'pending', 'cancelled', 'failed' ),
		'type'        => 'multiselect',
		'options'     => $statuses,
	);
	$settings[] = array(
		'id'          => 'woocommerce_actionable_order_statuses',
		'option_key'  => 'woocommerce_actionable_order_statuses',
		'label'       => __( 'Actionable order statuses', 'woocommerce-admin' ),
		'description' => __( 'Statuses that require extra action on behalf of the store admin.', 'woocommerce-admin' ),
		'default'     => array( 'processing', 'on-hold' ),
		'type'        => 'multiselect',
		'options'     => $statuses,
	);
	return $settings;
};
add_filter( 'woocommerce_settings-wc_admin', 'wc_admin_add_settings' );
