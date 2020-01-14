/**
 * External dependencies
 *
 * @format
 */

import { registerStore } from '@wordpress/data';
import { controls } from '@wordpress/data-controls';

/**
 * Internal dependencies
 */
import { STORE_NAME } from './constants';
import * as selectors from './selectors';
import * as actions from './actions';
import reducer from './reducer';

registerStore( STORE_NAME, {
	reducer,
	actions,
	controls,
	selectors,
} );

export const SETTINGS_STORE_NAME = STORE_NAME;
