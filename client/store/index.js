/** @format */
/**
 * External dependencies
 */
import { registerStore } from '@wordpress/data';
import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */
import { applyMiddleware, addThunks } from './middleware';
import orders from 'store/orders';
import currentUser from 'store/current-user';

const store = registerStore( 'wc-admin', {
	reducer: combineReducers( {
		orders: orders.reducer,
		currentUser: currentUser.reducer,
	} ),

	actions: {
		...orders.actions,
		...currentUser.actions,
	},

	selectors: {
		...orders.selectors,
		...currentUser.selectors,
	},

	resolvers: {
		...orders.resolvers,
		...currentUser.resolvers,
	},
} );

applyMiddleware( store, [ addThunks ] );
