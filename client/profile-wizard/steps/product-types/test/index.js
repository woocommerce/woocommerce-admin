/**
 * External dependencies
 */
import { render, screen } from '@testing-library/react';
import { setSetting } from '@woocommerce/wc-admin-settings';
import userEvent from '@testing-library/user-event';

/**
 * Internal dependencies
 */
import ProductTypes from '../';

describe( 'ProductTypes', () => {
	beforeEach( () => {
		setSetting( 'onboarding', {
			productTypes: {
				paidProduct: {
					description: 'Paid product type',
					label: 'Paid product',
					more_url: 'https://woocommerce.com/paid-product',
					product: 100,
					slug: 'paid-product',
					yearly_price: 120,
				},
				freeProduct: {
					label: 'Free product',
				},
			},
		} );
	} );

	afterEach( () => {
		setSetting( 'onboarding', {} );
	} );

	test( 'should render product types', () => {
		const { container } = render( <ProductTypes /> );
		expect( container ).toMatchSnapshot();
	} );

	test( 'should show annual prices on toggle', () => {
		const { container } = render( <ProductTypes /> );

		const toggle = screen.getByLabelText( 'Display monthly prices', {
			selector: 'input',
		} );

		userEvent.click( toggle );

		expect( container ).toMatchSnapshot();
	} );

	test( 'should show validation error on continue', async () => {
		const mockGoToNextStep = jest.fn();
		const mockUpdateProfileItems = jest.fn().mockResolvedValue();

		render(
			<ProductTypes
				goToNextStep={ mockGoToNextStep }
				updateProfileItems={ mockUpdateProfileItems }
			/>
		);

		const continueButton = screen.getByText( 'Continue', {
			selector: 'button',
		} );
		const productType = screen.getByText( 'Free product', {
			selector: 'label',
		} );

		userEvent.click( continueButton );
		expect( mockGoToNextStep ).not.toHaveBeenCalled();

		// Click on a product type to pass validation.
		userEvent.click( productType );
		userEvent.click( continueButton );
		expect( mockGoToNextStep ).toHaveBeenCalled();
	} );
} );
