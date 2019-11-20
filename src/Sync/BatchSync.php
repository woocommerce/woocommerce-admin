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
		add_action( self::QUEUE_BATCH_ACTION, array( __CLASS__, 'queue_batches' ), 10, 4 );
		add_action( self::QUEUE_DEPENDENT_ACTION, array( __CLASS__, 'queue_dependent_action' ), 10, 3 );
	}
}
