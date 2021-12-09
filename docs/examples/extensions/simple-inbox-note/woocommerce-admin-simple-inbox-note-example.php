<?php
/**
 * Plugin Name: WooCommerce Admin Simple Inbox Note Example
 *
 * @package WooCommerce\Admin
 */

// Import note class.
require_once dirname( __FILE__ ) . '/class-simpleinboxnote.php';

/**
 * Add note.
 */
function add_note() {
	SimpleInboxNote::possibly_add_note();
}

/**
 * Delete note.
 */
function delete_note() {
	SimpleInboxNote::possibly_delete_note();
}

// Attempt to add the note on plugin activation.
add_action( 'activated_plugin', 'add_note' );

// Delete the note when plugin is deactivated.
add_action( 'deactivated_plugin', 'delete_note' );
