/**
 * External dependencies
 */
import { render } from '@testing-library/react';

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
} );
