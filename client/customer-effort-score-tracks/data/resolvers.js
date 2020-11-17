/**
 * External dependencies
 */
import { apiFetch } from '@wordpress/data-controls';

/**
 * Internal dependencies
 */
import { setCesSurveyTracksQueue } from './actions';
import { API_NAMESPACE, QUEUE_OPTION_NAME } from './constants';

export function* getCesSurveyTracksQueue() {
	const response = yield apiFetch( {
		path: `${ API_NAMESPACE }/options?options=${ QUEUE_OPTION_NAME }`,
	} );

	if ( response ) {
		yield setCesSurveyTracksQueue( response[ QUEUE_OPTION_NAME ] || [] );
	} else {
		throw new Error();
	}
}
