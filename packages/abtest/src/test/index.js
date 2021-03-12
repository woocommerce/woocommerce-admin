/**
 * External dependencies
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { render, findByText } from '@testing-library/react';

/**
 * Internal dependencies
 */
import ABTest from '../index';
import { CONTROL, EXPERIMENT } from '../constants';
import {
	getAndSetGroup,
	getCachedGroup,
	isActive,
	setCachedGroup,
} from '../utils';

jest.mock( '@wordpress/data' );

useDispatch.mockReturnValue( { updateOptions: jest.fn() } );
useSelect.mockReturnValue( jest.fn( () => ( { test: EXPERIMENT } ) ) );

describe( 'ABTest Suite', () => {
	beforeEach( () => window.localStorage.clear() );

	const Control = () => <div>{ CONTROL }</div>;
	const Experiment = () => <div>{ EXPERIMENT }</div>;

	it( 'Should show test is active.', async () => {
		Date.now = jest.fn( () => 1615339211640 );

		const result = isActive( 1615339211630, 1615944011630 );

		expect( result ).toBeTruthy();
	} );

	it( 'Should show test is not active.', async () => {
		Date.now = jest.fn( () => 1615339211626 );

		const result = isActive( 1615339211630, 1615944011630 );

		expect( result ).toBeFalsy();
	} );

	it( 'Should get control from cache.', async () => {
		window.localStorage.setItem( 'test', CONTROL );

		const result = getCachedGroup( 'test' );

		expect( result ).toBe( CONTROL );
	} );

	it( 'Should set cache to experiment.', async () => {
		setCachedGroup( 'test', EXPERIMENT );

		expect( window.localStorage.getItem( 'test' ) ).toBe( EXPERIMENT );
	} );

	it( 'Should fetch group from backend and set cache to experiment.', async () => {
		const getABTestOption = useSelect();
		const setABTestOption = useDispatch().updateOptions;
		const group = getAndSetGroup(
			'test',
			50,
			getABTestOption,
			setABTestOption
		);

		expect( group ).toBe( EXPERIMENT );
		expect( window.localStorage.getItem( 'test' ) ).toBe( EXPERIMENT );
	} );

	it( 'Should fail to fetch group and default to control.', async () => {
		const getABTestOption = jest.fn( () => {
			throw new Error();
		} );

		const setABTestOption = useDispatch().updateOptions;
		const group = getAndSetGroup(
			'test',
			50,
			getABTestOption,
			setABTestOption
		);

		expect( group ).toBe( CONTROL );
		expect( window.localStorage.getItem( 'test' ) ).toBe( CONTROL );
	} );

	it( 'Should render control when test is not active yet.', async () => {
		Date.now = jest.fn( () => 1615339211620 );

		const { container } = render(
			<ABTest
				name="test"
				control={ <Control /> }
				experiment={ <Experiment /> }
				start={ 1615339211630 }
				end={ 1615944011630 }
			/>
		);

		expect( await findByText( container, CONTROL ) ).toBeDefined();
		expect( window.localStorage.getItem( 'test' ) ).toBeFalsy();
	} );

	it( 'Should call onComplete callback when rendering.', async () => {
		window.localStorage.setItem( 'test', 'experiment' );

		const onComplete = jest.fn( () => null );
		const { container } = render(
			<ABTest
				name="test"
				control={ <Control /> }
				experiment={ <Experiment /> }
				onComplete={ onComplete }
			/>
		);

		expect( await findByText( container, EXPERIMENT ) ).toBeDefined();
		expect( onComplete ).toHaveBeenCalled();
	} );

	it( 'Should render experiment when cache is experiment.', async () => {
		window.localStorage.setItem( 'test', EXPERIMENT );

		const { container } = render(
			<ABTest
				name="test"
				control={ <Control /> }
				experiment={ <Experiment /> }
			/>
		);

		expect( await findByText( container, EXPERIMENT ) ).toBeDefined();
	} );

	it( 'Should render experiment when fetched option is experiment.', async () => {
		const { container } = render(
			<ABTest
				name="test"
				control={ <Control /> }
				experiment={ <Experiment /> }
			/>
		);

		expect( await findByText( container, EXPERIMENT ) ).toBeDefined();
		expect( window.localStorage.getItem( 'test' ) ).toBe( EXPERIMENT );
	} );
} );
