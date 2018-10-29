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
import categories from 'store/categories';
import orders from 'store/orders';
import products from 'store/products';
import reports from 'store/reports';
import notes from 'store/notes';

const store = registerStore( 'wc-admin', {
	reducer: combineReducers( {
		categories: categories.reducer,
		orders: orders.reducer,
		products: products.reducer,
		reports: reports.reducer,
		notes: notes.reducer,
	} ),

	actions: {
		...categories.actions,
		...orders.actions,
		...products.actions,
		...reports.actions,
		...notes.actions,
	},

	selectors: {
		...categories.selectors,
		...orders.selectors,
		...products.selectors,
		...reports.selectors,
		...notes.selectors,
	},

	resolvers: {
		...categories.resolvers,
		...orders.resolvers,
		...products.resolvers,
		...reports.resolvers,
		...notes.resolvers,
	},
} );

applyMiddleware( store, [ addThunks ] );
