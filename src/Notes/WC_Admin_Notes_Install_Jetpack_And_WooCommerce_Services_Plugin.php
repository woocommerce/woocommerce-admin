<?php
/**
 * WooCommerce Admin Add Install Jetpack Plugin Note Provider.
 *
 * Adds a note to the merchant's inbox prompting them to install the Jetpack
 * Plugin after it fails to install during WooCommerce setup.
 *
 * @package WooCommerce Admin
 */

namespace Automattic\WooCommerce\Admin\Notes;

defined( 'ABSPATH' ) || exit;

/**
 * WC_Admin_Notes_Install_Jetpack_And_WooCommerce_Services_Plugin
 */
class WC_Admin_Notes_Install_Jetpack_And_WooCommerce_Services_Plugin {
	const NOTE_NAME = 'wc-admin-install-jetpack-plugin';

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'woocommerce_note_action_install-jetpack-and-woocommerce-services-plugins', array( $this, 'install_jetpack_and_woocommerce_services_plugins' ) );

		$notes_filters = new WC_Admin_Notes_Filters();
		add_action( 'activate_jetpack/jetpack.php', array( $notes_filters, 'action_jetpack_woocommerce_services_activation_note' ) );
		add_action( 'activate_woocommerce-services/woocommerce-services.php', array( $notes_filters, 'action_jetpack_woocommerce_services_activation_note' ) );
	}

	/**
	 * Possibly add the Install Jetpack note.
	 *
	 * @param string $slug The slug of the plugin being installed.
	 */
	public static function possibly_add_install_jetpack_and_woocommerce_services_note( $slug ) {
		// Exit early if we're not installing the Jetpack or the WooCommerce Services plugins.
		if ( 'jetpack' !== $slug && 'woocommerce-services' !== $slug ) {
			return;
		}

		$data_store = \WC_Data_Store::load( 'admin-note' );

		// Exit early if there is already a note to install Jetpack.
		$note_ids = $data_store->get_notes_with_name( self::NOTE_NAME );
		if ( ! empty( $note_ids ) ) {
			return;
		}

		$content = __( 'We noticed that there was a problem during the Jetpack and WooCommerce Services install. Please try again and enjoy all the advantages of having the plugins connected to your store! Sorry for the inconvenience. The "Jetpack" and "WooCommerce Services" plugins will be installed & activated for free.', 'woocommerce-admin' );

		$note = new WC_Admin_Note();
		$note->set_title( __( 'Uh oh...There was a problem during the Jetpack and WooCommerce Services install. Please try again.', 'woocommerce-admin' ) );
		$note->set_content( $content );
		$note->set_content_data( (object) array() );
		$note->set_type( WC_ADMIN_Note::E_WC_ADMIN_NOTE_INFORMATIONAL );
		$note->set_icon( 'mail' );
		$note->set_name( self::NOTE_NAME );
		$note->set_source( 'woocommerce-admin' );
		$note->add_action(
			'install-jetpack-and-woocommerce-services-plugins',
			__( 'Install plugins', 'woocommerce-admin' ),
			false,
			WC_Admin_Note::E_WC_ADMIN_NOTE_ACTIONED,
			true
		);

		$note->save();
	}

	/**
	 * Action the Install Jetpack notes, if any exists.
	 */
	public static function action_install_jetpack_and_woocommerce_services_note() {
		$data_store = \WC_Data_Store::load( 'admin-note' );
		$note_ids   = $data_store->get_notes_with_name( self::NOTE_NAME );

		foreach ( $note_ids as $note_id ) {
			$note = new WC_Admin_Note( $note_id );

			$note->set_status( WC_Admin_Note::E_WC_ADMIN_NOTE_ACTIONED );
			$note->save();
		}
	}

	/**
	 * Install the Jetpack and WooCommerce Services plugins in response to the action
	 * being clicked in the admin note.
	 *
	 * @param WC_Admin_Note $note The note being actioned.
	 */
	public function install_jetpack_and_woocommerce_services_plugins( $note ) {
		if ( self::NOTE_NAME !== $note->get_name() ) {
			return;
		}

		$this->install_and_activate_plugin( 'jetpack' );
		$this->install_and_activate_plugin( 'woocommerce-services' );
	}

	/**
	 * Installs and activates the specified plugin.
	 *
	 * @param string $plugin The plugin slug.
	 *
	 * @return boolean If the plugin was installed and activated.
	 */
	private function install_and_activate_plugin( $plugin ) {
		$install_request = array( 'plugin' => $plugin );
		$installer       = new \Automattic\WooCommerce\Admin\API\OnboardingPlugins();
		$result          = $installer->install_plugin( $install_request );

		if ( is_wp_error( $result ) ) {
			return false;
		}

		$activate_request = array( 'plugins' => $plugin );
		$result           = $installer->activate_plugins( $activate_request );

		if ( is_wp_error( $result ) ) {
			return false;
		}

		return true;
	}
}
