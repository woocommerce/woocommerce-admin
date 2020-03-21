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
 * WC_Admin_Notes_Install_Jetpack_Plugin
 */
class WC_Admin_Notes_Install_Jetpack_Plugin {
	const NOTE_NAME = 'wc-admin-install-jetpack-plugin';

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
			'install-jetpack-plugin',
			__( 'Install plugins', 'woocommerce-admin' ),
			admin_url( 'admin.php?page=wc-admin&step=plugins' ),
			WC_Admin_Note::E_WC_ADMIN_NOTE_ACTIONED,
			true
		);

		$note->save();
	}
}
