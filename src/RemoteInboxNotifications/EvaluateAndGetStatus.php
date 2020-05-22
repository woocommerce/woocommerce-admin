<?php
/**
 * Evaluates the spec and returns a status.
 *
 * @package WooCommerce Admin/Classes
 */

namespace Automattic\WooCommerce\Admin\RemoteInboxNotifications;

defined( 'ABSPATH' ) || exit;

use \Automattic\WooCommerce\Admin\Notes\WC_Admin_Note;

/**
 * Evaluates the spec and returns a status.
 */
class EvaluateAndGetStatus {
	/**
	 * Constructor.
	 *
	 * @param object $rule_evaluator Evaluates rules into true/false.
	 */
	public function __construct( $rule_evaluator ) {
		$this->rule_evaluator = $rule_evaluator;
	}

	/**
	 * Evaluates the spec and returns a status.
	 *
	 * @param array  $spec           The spec to evaluate.
	 * @param string $current_status The note's current status.
	 *
	 * @return string The evaluated status.
	 */
	public function evaluate( $spec, $current_status ) {
		$evaluate_result = $this->rule_evaluator->evaluate( $spec->rules );

		// Pending notes should be the spec status if the spec passes,
		// left alone otherwise.
		if ( WC_Admin_Note::E_WC_ADMIN_NOTE_PENDING === $current_status ) {
			return $evaluate_result
				? $spec->status
				: WC_Admin_Note::E_WC_ADMIN_NOTE_PENDING;
		}

		// When allow_redisplay isn't set, just leave the note alone.
		if ( ! isset( $spec->allow_redisplay ) || ! $spec->allow_redisplay ) {
			return $current_status;
		}

		// allow_redisplay is set, unaction the note if eval to true.
		return $evaluate_result
			? WC_Admin_Note::E_WC_ADMIN_NOTE_UNACTIONED
			: $current_status;
	}
}
