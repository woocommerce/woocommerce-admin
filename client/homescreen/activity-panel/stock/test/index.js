/**
 * External dependencies
 */
import { render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createElement } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { StockPanel } from '../';

describe( 'StockPanel', () => {
	it( 'should the correct number of placeholders', () => {
		const { container } = render(
			<StockPanel
				countLowStockProducts={ 3 }
				isError={ false }
				isRequesting={ true }
				products={ [] }
			/>
		);

		expect(
			container.querySelectorAll(
				'.woocommerce-stock-activity-card.is-loading'
			)
		).toHaveLength( 3 );
	} );

	it( 'should request more products when one is updated', async () => {
		const createNotice = jest.fn();
		const invalidateResolution = jest.fn();
		const updateProductStock = jest.fn().mockResolvedValue( true );

		const { getByRole } = render(
			<StockPanel
				countLowStockProducts={ 1 }
				isError={ false }
				isRequesting={ false }
				products={ [
					{
						id: 1,
						name: 'Test Product',
						low_stock_amount: 5,
						stock_quantity: 1,
						type: 'simple',
					},
				] }
				invalidateResolution={ invalidateResolution }
				updateProductStock={ updateProductStock }
				createNotice={ createNotice }
			/>
		);

		userEvent.click( getByRole( 'button', { name: 'Update stock' } ) );
		// Number input gets "spinbutton", apparently.
		userEvent.type( getByRole( 'spinbutton' ), '3' );
		fireEvent.submit( getByRole( 'button', { name: 'Save' } ) );

		await waitFor( () => {
			expect( invalidateResolution ).toHaveBeenCalled();
		} );
	} );
} );
