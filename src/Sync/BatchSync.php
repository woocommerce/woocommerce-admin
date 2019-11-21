<?php
/**
 * Order syncing related functions and actions.
 *
 * @package WooCommerce Admin/Classes
 */

namespace Automattic\WooCommerce\Admin\Sync;

defined( 'ABSPATH' ) || exit;

/**
 * BatchSync Class.
 */
class BatchSync extends BaseSync {
	/**
	 * Slug to identify the import data type.
	 */
	const NAME = 'batch';

	/**
	 * Initialize scheduled action handlers.
	 */
	public static function init() {
		add_action( self::get_action( 'queue_batches' ), array( __CLASS__, 'queue_batches' ), 10, 4 );
	}

	/**
	 * Get all available sync actions.
	 * Used to determine action hook names and clear events.
	 *
	 * @return array
	 */
	public static function get_actions() {
		return array(
			'queue_batches' => self::QUEUE_BATCH_ACTION,
		);
	}
}
