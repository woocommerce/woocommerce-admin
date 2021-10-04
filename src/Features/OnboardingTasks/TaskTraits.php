<?php
/**
 * Task and TaskList Traits
 */

namespace Automattic\WooCommerce\Admin\Features\OnboardingTasks;

defined( 'ABSPATH' ) || exit;

/**
 * TaskTraits class.
 */
trait TaskTraits {
	/**
	 * Prefix event for backwards compatibility with tracks event naming.
	 *
	 * @param string $event_name Event name.
	 * @return string
	 */
	public function prefix_event( $event_name ) {
		if ( 'setup' === $this->id ) {
			return 'tasklist_' . $event_name;
		}

		return 'tasklist_' . $this->id . '_' . $event_name;
	}

	/**
	 * Record a tracks event with the prefixed event name.
	 *
	 * @param string $event_name Event name.
	 * @param array  $args Array of tracks arguments.
	 */
	public function record_tracks_event( $event_name, $args ) {
		wc_admin_record_tracks_event(
			$this->prefix_event( $event_name ),
			$args
		);
	}
}
