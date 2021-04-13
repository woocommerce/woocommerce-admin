/**
 * External dependencies
 */
import { lazy, Suspense } from '@wordpress/element';
import { Fill } from '@wordpress/components';

const PaymentRecommendations = lazy(
	() =>
		import(
			/* webpackChunkName: "payment-recommendations" */ './payment-recommendations'
		)
);

export const PaymentRecommendationsSlot = () => {
	return (
		<Fill name="embedded-body-layout">
			{ ( {
				page,
				tab,
				section,
			}: {
				page: string;
				tab: string;
				section?: string;
			} ) => {
				if (
					page === 'wc-settings' &&
					tab === 'checkout' &&
					! section
				) {
					return (
						<Suspense fallback={ null }>
							<PaymentRecommendations />
						</Suspense>
					);
				}
				return null;
			} }
		</Fill>
	);
};
