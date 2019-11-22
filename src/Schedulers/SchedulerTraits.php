<?php
/**
 * Traits for scheduling actions and dependencies.
 *
 * @package WooCommerce Admin/Classes
 */

namespace Automattic\WooCommerce\Admin\Schedulers;

defined( 'ABSPATH' ) || exit;

/**
 * SchedulerTraits class.
 */
trait SchedulerTraits {
	/**
	 * Slug to identify the scheduler.
	 *
	 * @var string|null
	 */
	public static $name = null;

	/**
	 * Action scheduler group.
	 *
	 * @var string|null
	 */
	public static $group = 'wc-admin-data';

	/**
	 * Queue instance.
	 *
	 * @var WC_Queue_Interface
	 */
	protected static $queue = null;

	/**
	 * Add all actions as hooks.
	 */
	public static function init() {
		foreach ( self::get_actions() as $action_name => $action_hook ) {
			$method = new \ReflectionMethod( static::class, $action_name );
			add_action( $action_hook, array( static::class, $action_name ), 10, $method->getNumberOfParameters() );
		}
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
	 * Get all available scheduling actions.
	 * Used to determine action hook names and clear events.
	 */
	public static function get_actions() {
		return array(
			'schedule_action' => 'wc-admin_schedule_action_' . static::$name,
			'queue_batches'   => 'wc-admin_queue_batches_' . static::$name,
		);
	}

	/**
	 * Get an action tag name from the action name.
	 *
	 * @param string $action_name The action name.
	 * @return string|null
	 */
	public static function get_action( $action_name ) {
		$actions = static::get_actions();
		return isset( $actions[ $action_name ] ) ? $actions[ $action_name ] : null;
	}

	/**
	 * Returns an array of actions and dependencies as key => value pairs.
	 *
	 * @return array
	 */
	public static function get_dependencies() {
		return array();
	}

	/**
	 * Get dependencies associated with an action.
	 *
	 * @param string $action_name The action slug.
	 * @return string|null
	 */
	public static function get_dependency( $action_name ) {
		$dependencies = static::get_dependencies();
		return isset( $dependencies[ $action_name ] ) ? $dependencies[ $action_name ] : null;
	}

	/**
	 * Batch action size.
	 */
	public static function get_batch_sizes() {
		return array(
			'queue_batches' => 100,
		);
	}

	/**
	 * Returns the batch size for an action.
	 *
	 * @param string $action Single batch action name.
	 * @return int Batch size.
	 */
	public static function get_batch_size( $action ) {
		$batch_sizes = static::get_batch_sizes();
		$batch_size  = isset( $batch_sizes[ $action ] ) ? $batch_sizes[ $action ] : 25;

		/**
		 * Filter the batch size for regenerating a report table.
		 *
		 * @param int    $batch_size Batch size.
		 * @param string $action Batch action name.
		 */
		return apply_filters( 'woocommerce_analytics_regenerate_batch_size', $batch_size, $action );
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
				'group'    => self::$group,
			)
		);

		if ( $existing_jobs ) {
			$existing_job = current( $existing_jobs );

			// Bail out if there's a pending single action, or a pending scheduled actions.
			if (
				( static::get_action( $action_name ) === $existing_job->get_hook() ) ||
				(
					static::get_action( 'schedule_action' ) === $existing_job->get_hook() &&
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
		$dependency = self::get_dependency( $action_name );

		if ( ! $dependency ) {
			return;
		}

		$blocking_jobs = self::queue()->search(
			array(
				'status'   => 'pending',
				'orderby'  => 'date',
				'order'    => 'DESC',
				'per_page' => 1,
				'claimed'  => false,
				'search'   => $dependency, // search is used instead of hook to find queued batch creation.
				'group'    => self::$group,
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
					( static::get_action( 'schedule_action' ) !== $blocking_job_hook )
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

		if ( apply_filters( 'woocommerce_analytics_disable_action_scheduling', false ) ) {
			call_user_func_array( array( static::class, $action_name ), $args );
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
			self::queue()->schedule_single(
				$blocking_job->get_schedule()->next()->getTimestamp() + 5,
				static::get_action( 'schedule_action' ),
				array( $action_name, $args ),
				static::$group
			);
		} else {
			self::queue()->schedule_single( time() + 5, $action_hook, $args, static::$group );
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
		$batch_size       = static::get_batch_size( 'queue' );
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

				self::schedule_action(
					'queue_batches',
					array( $batch_start, $batch_end, $single_batch_action, $action_args )
				);
			}
		} else {
			// Otherwise, queue the single batches.
			for ( $i = $range_start; $i <= $range_end; $i++ ) {
				$batch_action_args = array_merge( array( $i ), $action_args );
				self::schedule_action( $single_batch_action, $batch_action_args );
			}
		}
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
			$store->cancel_actions_by_group( static::$group );
		} else {
			$actions = static::get_actions();
			foreach ( $actions as $action ) {
				self::queue()->cancel_all( $action, null, static::$group );
			}
		}
	}
}
