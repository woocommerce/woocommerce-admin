/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import TYPES from './action-types';

/**
 * Initialize the state
 *
 * @param {Object} queue	initial queue
 */
export function setCesSurveyTracksQueue( queue ) {
	return {
		type: TYPES.SET_CES_SURVEY_TRACKS_QUEUE,
		queue,
	};
}

/**
 * Add a new CES track to the state.
 *
 * @param {string} action action name for the survey
 * @param {string} label label for the snackback
 * @param {string} pageNow value of window.pagenow
 * @param {string} adminPage value of window.adminpage
 * @param {string} onsubmit_label label for the snackback onsubmit
 */
export function addCesSurveyTrack(
	action,
	label,
	pageNow = window.pagenow,
	adminPage = window.adminpage,
	onsubmit_label = undefined
) {
	return {
		type: TYPES.ADD_CES_SURVEY_TRACK,
		action,
		label,
		pageNow,
		adminPage,
		onsubmit_label,
	};
}

/**
 * Add a new CES survey track for the pages in Analytics menu
 */
export function addCesSurveyTrackForAnalytics() {
	return {
		type: TYPES.ADD_CES_SURVEY_TRACK,
		action: 'analytics_filtered',
		label: __(
			'How easy was it to filter your store analytics?',
			'woocommerce-admin'
		),
		pageNow: 'woocommerce_page_wc-admin',
		adminPage: 'woocommerce_page_wc-admin',
	};
}
