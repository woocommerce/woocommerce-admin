<?php

namespace Automattic\WooCommerce\Admin\Features;

class EmbeddedApps {
	/**
	 * Class instance.
	 *
	 * @var Analytics instance
	 */
	protected static $instance = null;

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
		add_action( 'admin_menu', array( $this, 'register_pages' ) );
	}

	public function register_pages() {
		$pages = self::get_pages();

		foreach ( $pages as $page ) {
			wc_admin_register_page( $page );
		}
	}

	private static function get_pages() {
		return array(
			array(
				'id'       => 'woocommerce-embedded-apps',
				'title'    => __( 'Apps', 'woocommerce-admin' ),
				'path'     => 'apps',
				'icon'     => 'dashicons-feedback',
				'position' => 56,
			),
		);
	}
}


