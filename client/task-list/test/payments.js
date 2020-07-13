/**
 * External dependenices
 */
import { render } from '@testing-library/react';
import * as domMatchers from '@testing-library/jest-dom';

/**
 * Internal dependenices
 */
import { PayPal } from '../tasks/payments/paypal';

// @todo: Figure out conflict with Enzyme for global config.
expect.extend( domMatchers );

describe( 'TaskList > Payments', () => {
	describe( 'PayPal', () => {
		afterEach( () => jest.clearAllMocks() );

		const mockInstallStep = {
			isComplete: true,
			key: 'install',
			label: 'Install',
		};

		it( 'shows "create account" when Jetpack and WCS are connected', () => {
			jest.mock( '@wordpress/api-fetch', () => jest.fn().mockResolvedValue( {
				connectUrl: '#testing',
			} ) );

			const { getByLabelText } = render(
				<PayPal
					activePlugins={ [
						'jetpack',
						'woocommerce-gateway-paypal-express-checkout',
						'woocommerce-services',
					] }
					installStep={ mockInstallStep }
					isJetpackConnected
				/>
			);

			expect( getByLabelText( 'Create a PayPal account for me', { selector: 'input' } ) ).toBeChecked();
		} );
	} );
} );
