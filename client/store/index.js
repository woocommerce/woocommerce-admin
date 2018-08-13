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
import reports from 'store/reports';
import products from 'store/products';

const store = registerStore( 'wc-admin', {
	reducer: combineReducers( {
		orders: orders.reducer,
		reports: reports.reducer,
		products: products.reducer,
	} ),

	actions: {
		...orders.actions,
		...reports.actions,
		...products.actions,
	},

	selectors: {
		...orders.selectors,
		...reports.selectors,
		...products.selectors,
	},

	resolvers: {
		...orders.resolvers,
		...reports.resolvers,
		...products.resolvers,
	},
} );

applyMiddleware( store, [ addThunks ] );
