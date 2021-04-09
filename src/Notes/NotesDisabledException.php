<?php
/**
 * WooCommerce Admin Notes Disabled Exception Class
 *
 * Exception class thrown when an attempt to use notes is made but notes are disabled.
 */

namespace Automattic\WooCommerce\Admin\Notes;

defined( 'ABSPATH' ) || exit;

/**
 * Notes\NotesDisabledException class.
 */
class NotesDisabledException extends \WC_Data_Exception {}
