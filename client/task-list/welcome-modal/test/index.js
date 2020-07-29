/**
 * External dependencies
 */
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

/**
 * Internal dependencies
 */
import { WelcomeModal } from '../index';

describe( 'WelcomeModal', () => {
	it( 'should call onClose when it is closed', () => {
		const onCloseSpy = jest.fn();

		const { queryAllByRole } = render(
			<WelcomeModal onClose={ onCloseSpy } />
		);

		fireEvent.click( queryAllByRole( 'button' )[ 0 ] );

		expect( onCloseSpy ).toHaveBeenCalledTimes( 1 );
	} );

	it( 'should not render the guide after it is closed', () => {
		const { queryAllByRole, container } = render(
			<WelcomeModal onClose={ () => {} } />
		);

		fireEvent.click( queryAllByRole( 'button' )[ 0 ] );

		expect( container ).toBeEmptyDOMElement();
	} );
} );
