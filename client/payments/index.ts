/**
 * External dependencies
 */
import { lazy } from '@wordpress/element';
import { embeddedPageRegistry } from '~/embedded-body-layout/page-registry';

const PaymentRecommendations = lazy(
	() =>
		import(
			/* webpackChunkName: "payment-recommendations" */ './payment-recommendations'
		)
);

embeddedPageRegistry.registerPage( 'payment-recommendations', {
	container: PaymentRecommendations,
	path: 'page=wc-settings&tab=checkout',
} );
