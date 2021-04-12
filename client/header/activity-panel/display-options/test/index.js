/**
 * External dependencies
 */
import { render, fireEvent } from '@testing-library/react';
import { useUserPreferences } from '@woocommerce/data';
import { useDispatch, useSelect } from '@wordpress/data';
import { recordEvent } from '@woocommerce/tracks';

/**
 * Internal dependencies
 */
import { DisplayOptions } from '../';

jest.mock( '@woocommerce/tracks', () => ( { recordEvent: jest.fn() } ) );
jest.mock( '@woocommerce/data', () => ( {
	...jest.requireActual( '@woocommerce/data' ),
	useUserPreferences: jest
		.fn()
		.mockReturnValue( { updateUserPreferences: jest.fn() } ),
} ) );
jest.mock( '@wordpress/data', () => {
	// Require the original module to not be mocked...
	const originalModule = jest.requireActual( '@wordpress/data' );

	return {
		__esModule: true, // Use it when dealing with esModules
		...originalModule,
		useDispatch: jest.fn().mockReturnValue( {} ),
		useSelect: jest.fn().mockReturnValue( {
			defaultHomescreenLayout: 'single_column',
		} ),
	};
} );

describe( 'Activity Panel - Homescreen Display Options', () => {
	it( 'correctly tracks opening the options', () => {
		const { getByRole } = render( <DisplayOptions /> );

		fireEvent.click( getByRole( 'button', { name: 'Display options' } ) );

		expect( recordEvent ).toHaveBeenCalledWith(
			'homescreen_display_click'
		);
	} );

	it( 'correctly updates the homepage layout option', () => {
		const updateUserPreferences = jest.fn();
		useUserPreferences.mockReturnValue( {
			updateUserPreferences,
			homepage_layout: '',
		} );
		const { getByText, getByRole } = render( <DisplayOptions /> );

		fireEvent.click( getByRole( 'button', { name: 'Display options' } ) );

		// Verify the default of two columns.
		expect(
			getByText( 'Single column', { selector: 'button' } )
		).toBeChecked();
		expect(
			getByText( 'Two columns', { selector: 'button' } )
		).not.toBeChecked();

		fireEvent.click( getByText( 'Two columns', { selector: 'button' } ) );

		expect( recordEvent ).toHaveBeenCalledWith(
			'homescreen_display_option',
			{
				display_option: 'two_columns',
			}
		);

		expect( updateUserPreferences ).toHaveBeenCalledWith( {
			homepage_layout: 'two_columns',
		} );
	} );

	it( 'correctly toggles the extension task list', () => {
		const updateOptions = jest.fn();
		useSelect.mockImplementation( () => ( {
			showExtensionTaskList: true,
		} ) );
		useDispatch.mockImplementation( () => ( {
			updateOptions,
		} ) );

		const { getByText, getByRole } = render( <DisplayOptions /> );

		fireEvent.click( getByRole( 'button', { name: 'Display options' } ) );

		// Verify the task list is initially shown.
		expect(
			getByText( 'Show things to do next', { selector: 'button' } )
		).toBeChecked();
		// Toggle it off.
		fireEvent.click(
			getByText( 'Show things to do next', { selector: 'button' } )
		);

		expect( recordEvent ).toHaveBeenCalledWith(
			'wcadmin_extended_tasklist_hide'
		);

		expect( updateOptions ).toHaveBeenCalledWith( {
			woocommerce_extended_task_list_hidden: 'yes',
		} );
	} );
} );
