/**
 * External dependencies
 */

import { registerStore } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_NAME } from './constants';
import * as selectors from './selectors';
import * as actions from './actions';
import * as resolvers from './resolvers';
import controls from '../controls';
import reducer from './reducer';

// eslint-disable-next-line no-unused-vars
console.log( `STORE_NAME -> ${ STORE_NAME }` );

registerStore( STORE_NAME, {
	reducer,
	actions,
	controls,
	selectors,
	resolvers,
} );

export const ITEMS_STORE_NAME = STORE_NAME;
