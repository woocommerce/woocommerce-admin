/**
 * External dependencies
 */
import { renderHook } from '@testing-library/react-hooks';

/**
 * WordPress dependencies
 */
import { registerStore } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { useUserPreferences } from '../use-user-preferences';

describe( 'useUserPreferences() hook', () => {
	it( 'isRequesting is false before resolution has started', () => {
		registerStore( 'core', {
			reducer: () => ( {} ),
			selectors: {
				getCurrentUser: jest.fn().mockReturnValue( {} ),
				getLastEntitySaveError: jest.fn().mockReturnValue( {} ),
				hasStartedResolution: jest.fn().mockReturnValue( false ),
				hasFinishedResolution: jest.fn().mockReturnValue( false ),
			},
			actions: {
				receiveCurrentUser: jest.fn(),
				saveUser: jest.fn(),
			},
		} );

		const { result } = renderHook( () => useUserPreferences() );

		expect( result.current.isRequesting ).toBe( false );
	} );

	it( 'isRequesting is false after resolution has ended', () => {
		registerStore( 'core', {
			reducer: () => ( {} ),
			selectors: {
				getCurrentUser: jest.fn().mockReturnValue( {} ),
				getLastEntitySaveError: jest.fn().mockReturnValue( {} ),
				hasStartedResolution: jest.fn().mockReturnValue( true ),
				hasFinishedResolution: jest.fn().mockReturnValue( true ),
			},
			actions: {
				receiveCurrentUser: jest.fn(),
				saveUser: jest.fn(),
			},
		} );

		const { result } = renderHook( () => useUserPreferences() );

		expect( result.current.isRequesting ).toBe( false );
	} );

	it( 'isRequesting is true after resolution has started', () => {
		registerStore( 'core', {
			reducer: () => ( {} ),
			selectors: {
				getCurrentUser: jest.fn().mockReturnValue( {} ),
				getLastEntitySaveError: jest.fn().mockReturnValue( {} ),
				hasStartedResolution: jest.fn().mockReturnValue( true ),
				hasFinishedResolution: jest.fn().mockReturnValue( false ),
			},
			actions: {
				receiveCurrentUser: jest.fn(),
				saveUser: jest.fn(),
			},
		} );

		const { result } = renderHook( () => useUserPreferences() );

		expect( result.current.isRequesting ).toBe( true );
	} );
} );
