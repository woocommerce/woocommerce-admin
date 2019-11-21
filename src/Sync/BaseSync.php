<?php
/**
 * Base syncing related functions and actions.
 *
 * @package WooCommerce Admin/Classes
 */

namespace Automattic\WooCommerce\Admin\Sync;

defined( 'ABSPATH' ) || exit;

use \Automattic\WooCommerce\Admin\API\Reports\Cache as ReportsCache;

/**
 * BaseSync class.
 */
abstract class BaseSync {
	/**
	 * Slug to identify the import data type.
	 */
	const NAME = null;

	/**
	 * Action scheduler group.
	 */
	const QUEUE_GROUP = 'wc-admin-data';

	/**
	 * Action hook for reducing a range of batches down to single actions.
	 */
	const QUEUE_BATCH_ACTION = 'wc-admin_queue_batches';

	/**
	 * Action hook for queuing an action after another is complete.
	 */
	const QUEUE_DEPENDENT_ACTION = 'wc-admin_queue_dependent_action';

	/**
	 * Dependency to run before batch importing.
	 */
	const DEPENDENCY = false;

	/**
	 * Batch action size.
	 */
	const BATCH_QUEUE_SIZE = 100;

	/**
	 * Import batch size.
	 */
	const BATCH_IMPORT_SIZE = 25;

	/**
	 * Delete batch size.
	 */
	const BATCH_DELETE_SIZE = 10;

	/**
	 * Queue instance.
	 *
	 * @var WC_Queue_Interface
	 */
	protected static $queue = null;

	/**
	 * Add import and delete hooks.
	 */
	public static function init() {
		add_action( static::get_action( 'import_batch_init' ), array( static::class, 'import_batch_init' ), 10, 3 );
		add_action( static::get_action( 'import_batch' ), array( static::class, 'import_batch' ), 10, 4 );
		add_action( static::get_action( 'delete_batch_init' ), array( static::class, 'delete_batch_init' ), 10, 3 );
		add_action( static::get_action( 'delete_batch' ), array( static::class, 'delete_batch' ), 10, 4 );
		add_action( static::get_action( 'import' ), array( static::class, 'import' ) );
	}

	/**
	 * Get queue instance.
	 *
	 * @return WC_Queue_Interface
	 */
	public static function queue() {
		if ( is_null( self::$queue ) ) {
			self::$queue = WC()->queue();
		}

		return self::$queue;
	}

	/**
	 * Set queue instance.
	 *
	 * @param WC_Queue_Interface $queue Queue instance.
	 */
	public static function set_queue( $queue ) {
		self::$queue = $queue;
	}

	/**
	 * Returns true if an import is in progress.
	 *
	 * @return bool
	 */
	public static function is_importing() {
		$pending_jobs = self::queue()->search(
			array(
				'status'   => 'pending',
				'per_page' => 1,
				'claimed'  => false,
				'search'   => 'import',
				'group'    => self::QUEUE_GROUP,
			)
		);

		return ! empty( $pending_jobs );
	}

	/**
	 * Get all available sync actions.
	 * Used to determine action hook names and clear events.
	 *
	 * @return array
	 */
	public static function get_actions() {
		return array(
			'import_batch_init' => 'wc-admin_import_batch_init_' . static::NAME,
			'import_batch'      => 'wc-admin_import_batch_' . static::NAME,
			'delete_batch_init' => 'wc-admin_delete_batch_init_' . static::NAME,
			'delete_batch'      => 'wc-admin_delete_batch_' . static::NAME,
			'import'            => 'wc-admin_import_' . static::NAME,
		);
	}

	/**
	 * Get an action tag name from the action slug.
	 *
	 * @param string $action_name The action slug.
	 * @return string|null
	 */
	public static function get_action( $action_name ) {
		$actions = static::get_actions();
		return isset( $actions[ $action_name ] ) ? $actions[ $action_name ] : null;
	}

	/**
	 * Returns the batch size for regenerating reports.
	 * Note: can differ per batch action.
	 *
	 * @param string $action Single batch action name.
	 * @return int Batch size.
	 */
	public static function get_batch_size( $action ) {
		$batch_size = defined( static::class . "::BATCH_{$action}_SIZE" ) ? constant( static::class . "::BATCH_{$action}_SIZE" ) : 25;

		/**
		 * Filter the batch size for regenerating a report table.
		 *
		 * @param int    $batch_size Batch size.
		 * @param string $action Batch action name.
		 */
		return apply_filters( 'woocommerce_analytics_regenerate_batch_size', $batch_size, $action );
	}

	/**
	 * Get items based on query and return IDs along with total available.
	 *
	 * @param int      $limit Number of records to retrieve.
	 * @param int      $page  Page number.
	 * @param int|bool $days Number of days prior to current date to limit search results.
	 * @param bool     $skip_existing Skip already imported items.
	 */
	public static function get_items( $limit, $page, $days, $skip_existing ) {
		return (object) array(
			'ids'   => array(),
			'total' => null,
		);
	}

	/**
	 * Get total number of items already imported.
	 *
	 * @return null
	 */
	public static function get_total_imported() {
		return null;
	}


	/**
	 * Queue the imports into multiple batches.
	 *
	 * @param integer|boolean $days Number of days to import.
	 * @param boolean         $skip_existing Skip exisiting records.
	 */
	public static function import_batch_init( $days, $skip_existing ) {
		$batch_size = static::get_batch_size( 'IMPORT' );
		$items      = static::get_items( 1, 1, $days, $skip_existing );

		if ( 0 === $items->total ) {
			return;
		}

		$num_batches = ceil( $items->total / $batch_size );

		self::queue_batches( 1, $num_batches, self::get_action( 'import_batch' ), array( $days, $skip_existing ) );
	}

	/**
	 * Imports a batch of items to update.
	 *
	 * @param int      $batch_number Batch number to import (essentially a query page number).
	 * @param int|bool $days Number of days to import.
	 * @param bool     $skip_existing Skip exisiting records.
	 * @return void
	 */
	public static function import_batch( $batch_number, $days, $skip_existing ) {
		$batch_size = static::get_batch_size( 'IMPORT' );

		$properties = array(
			'batch_number' => $batch_number,
			'batch_size'   => $batch_size,
			'type'         => static::NAME,
		);
		wc_admin_record_tracks_event( 'import_job_start', $properties );

		// When we are skipping already imported items, the table of items to import gets smaller in
		// every batch, so we want to always import the first page.
		$page  = $skip_existing ? 1 : $batch_number;
		$items = static::get_items( $batch_size, $page, $days, $skip_existing );

		foreach ( $items->ids as $id ) {
			static::import( $id );
		}

		$import_stats                             = get_option( 'wc_admin_import_stats', array() );
		$imported_count                           = absint( $import_stats[ static::NAME ]['imported'] ) + count( $items->ids );
		$import_stats[ static::NAME ]['imported'] = $imported_count;
		update_option( 'wc_admin_import_stats', $import_stats );

		$properties['imported_count'] = $imported_count;

		wc_admin_record_tracks_event( 'import_job_complete', $properties );
	}

	/**
	 * Check if existing jobs exist for an action and arguments.
	 *
	 * @param string $action_name Action name.
	 * @param array  $args Array of arguments to pass to action.
	 * @return bool
	 */
	public static function has_existing_jobs( $action_name, $args ) {
		$existing_jobs = self::queue()->search(
			array(
				'status'   => 'pending',
				'per_page' => 1,
				'claimed'  => false,
				'hook'     => static::get_action( $action_name ),
				'search'   => '[' . implode( ',', $args ) . ']',
				'group'    => self::QUEUE_GROUP,
			)
		);

		if ( $existing_jobs ) {
			$existing_job = current( $existing_jobs );

			// Bail out if there's a pending single action, or a pending dependent action.
			if (
				( static::get_action( $action_name ) === $existing_job->get_hook() ) ||
				(
					self::QUEUE_DEPENDENT_ACTION === $existing_job->get_hook() &&
					in_array( self::get_action( $action_name ), $existing_job->get_args(), true )
				)
			) {
				return true;
			}
		}
	}

	/**
	 * Get the next blocking job for an action.
	 *
	 * @param string $action_name Action name.
	 */
	public static function get_next_blocking_job( $action_name ) {
		// @todo Get the actual dependency hook.
		$dependency_hook = '';
		$blocking_jobs   = self::queue()->search(
			array(
				'status'   => 'pending',
				'orderby'  => 'date',
				'order'    => 'DESC',
				'per_page' => 1,
				'claimed'  => false,
				'search'   => $dependency_hook, // search is used instead of hook to find queued batch creation.
				'group'    => self::QUEUE_GROUP,
			)
		);

		$next_job_schedule = null;
		$blocking_job_hook = null;

		if ( is_array( $blocking_jobs ) ) {
			foreach ( $blocking_jobs as $blocking_job ) {
				$blocking_job_hook = $blocking_job->get_hook();
				$next_job_schedule = $blocking_job->get_schedule()->next();

				// Eliminate the false positive scenario where the blocking job is
				// actually another queued dependent action awaiting the same prerequisite.
				// Also, ensure that the next schedule is a DateTime (it can be null).
				if (
					is_a( $next_job_schedule, 'DateTime' ) &&
					( self::QUEUE_DEPENDENT_ACTION !== $blocking_job_hook )
				) {
					return $blocking_job;
				}
			}
		}

		return false;
	}

	/**
	 * Schedule an action to run and check for dependencies.
	 *
	 * @param string $action_name Action name.
	 * @param array  $args Array of arguments to pass to action.
	 */
	public static function schedule_action( $action_name, $args ) {
		$action_hook = static::get_action( $action_name );
		if ( ! $action_hook ) {
			return;
		}

		if ( apply_filters( 'woocommerce_analytics_disable_import_scheduling', false ) ) {
			static::$action_name( $item_id );
			return;
		}

		// Check for existing jobs and bail if they already exist.
		if ( static::has_existing_jobs( $action_name, $args ) ) {
			return;
		}

		// Check if any blocking jobs exist and schedule after they've completed
		// or schedule to run now if no blocking jobs exist.
		$blocking_job = static::get_next_blocking_job( $action_name );
		if ( $blocking_job ) {
			$dependency_hook = '';
			self::queue()->schedule_single(
				$blocking_job->get_schedule()->next()->getTimestamp() + 5,
				$action_hook,
				array( $action_name, $args, $dependency_hook ),
				static::QUEUE_GROUP
			);
		} else {
			self::queue()->schedule_single( time() + 5, $action_hook, $args, static::QUEUE_GROUP );
		}
	}

	/**
	 * Queue a large number of batch jobs, respecting the batch size limit.
	 * Reduces a range of batches down to "single batch" jobs.
	 *
	 * @param int    $range_start Starting batch number.
	 * @param int    $range_end Ending batch number.
	 * @param string $single_batch_action Action to schedule for a single batch.
	 * @param array  $action_args Action arguments.
	 * @return void
	 */
	public static function queue_batches( $range_start, $range_end, $single_batch_action, $action_args = array() ) {
		$batch_size       = static::get_batch_size( 'QUEUE' );
		$range_size       = 1 + ( $range_end - $range_start );
		$action_timestamp = time() + 5;

		if ( $range_size > $batch_size ) {
			// If the current batch range is larger than a single batch,
			// split the range into $queue_batch_size chunks.
			$chunk_size = (int) ceil( $range_size / $batch_size );

			for ( $i = 0; $i < $batch_size; $i++ ) {
				$batch_start = (int) ( $range_start + ( $i * $chunk_size ) );
				$batch_end   = (int) min( $range_end, $range_start + ( $chunk_size * ( $i + 1 ) ) - 1 );

				if ( $batch_start > $range_end ) {
					return;
				}

				self::queue()->schedule_single(
					$action_timestamp,
					self::QUEUE_BATCH_ACTION,
					array( $batch_start, $batch_end, $single_batch_action, $action_args ),
					self::QUEUE_GROUP
				);
			}
		} else {
			// Otherwise, queue the single batches.
			for ( $i = $range_start; $i <= $range_end; $i++ ) {
				$batch_action_args = array_merge( array( $i ), $action_args );
				self::queue()->schedule_single( $action_timestamp, $single_batch_action, $batch_action_args, self::QUEUE_GROUP );
			}
		}
	}

	/**
	 * Queue item deletion in batches.
	 */
	public static function delete_batch_init() {
		global $wpdb;
		$batch_size = static::get_batch_size( 'DELETE' );
		$count      = static::get_total_imported();

		if ( 0 === $count ) {
			return;
		}

		$num_batches = ceil( $count / $batch_size );

		self::queue_batches( 1, $num_batches, static::get_action( 'delete_batch' ) );
	}

	/**
	 * Delete a batch by passing the count to be deleted to the child delete method.
	 *
	 * @return void
	 */
	public static function delete_batch() {
		wc_admin_record_tracks_event( 'delete_import_data_job_start', array( 'type' => static::NAME ) );

		$batch_size = static::get_batch_size( static::get_batch_size( 'DELETE' ) );
		static::delete( $batch_size );

		ReportsCache::invalidate();

		wc_admin_record_tracks_event( 'delete_import_data_job_complete', array( 'type' => static::NAME ) );
	}

	/**
	 * Clears all queued actions.
	 */
	public static function clear_queued_actions() {
		$store = \ActionScheduler::store();

		if ( is_a( $store, 'Automattic\WooCommerce\Admin\Overrides\WPPostStore' ) ) {
			// If we're using our data store, call our bespoke deletion method.
			$actions = static::get_actions();
			$store->clear_pending_wcadmin_actions( $actions );
		} elseif ( version_compare( \ActionScheduler_Versions::instance()->latest_version(), '3.0', '>=' ) ) {
			$store->cancel_actions_by_group( static::QUEUE_GROUP );
		} else {
			$actions = static::get_actions();
			foreach ( $actions as $action ) {
				self::queue()->cancel_all( $action, null, static::QUEUE_GROUP );
			}
		}
	}
}
