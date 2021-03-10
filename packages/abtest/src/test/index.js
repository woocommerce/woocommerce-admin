/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { render, findByText } from '@testing-library/react';

/**
 * Internal dependencies
 */
import { ABTEST_OPTION_NAME } from '../constants';
import { ABTest } from '../index';
import {
	getAndSetGroup,
	getCachedGroup,
	isActive,
	setCachedGroup,
} from '../utils';

jest.mock( '@wordpress/api-fetch' );

describe( 'ABTest Suite', () => {
	beforeEach( () => window.localStorage.clear() );
	afterEach( () => jest.clearAllMocks() );

	const Control = () => <div>Control</div>;
	const Experiment = () => <div>Experiment</div>;

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
		window.localStorage.setItem( 'test', 'control' );

		const result = getCachedGroup( 'test' );

		expect( result ).toBe( 'control' );
	} );

	it( 'Should set cache to experiment.', async () => {
		setCachedGroup( 'test', 'experiment' );

		expect( window.localStorage.getItem( 'test' ) ).toBe( 'experiment' );
	} );

	it( 'Should fetch group from backend and set cache to experiment.', async () => {
		apiFetch.mockResolvedValue( {
			[ ABTEST_OPTION_NAME + '_test' ]: 'experiment',
		} );

		const group = await getAndSetGroup( 'test' );

		expect( group ).toBe( 'experiment' );
		expect( window.localStorage.getItem( 'test' ) ).toBe( 'experiment' );
	} );

	it( 'Should fail to fetch group and default to control.', async () => {
		apiFetch.mockRejectedValue( new Error() );

		const group = await getAndSetGroup( 'test' );

		expect( group ).toBe( 'control' );
		expect( window.localStorage.getItem( 'test' ) ).toBe( 'control' );
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

		expect( await findByText( container, 'Control' ) ).toBeDefined();
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

		expect( await findByText( container, 'Experiment' ) ).toBeDefined();
		expect( onComplete ).toHaveBeenCalled();
	} );

	it( 'Should render experiment when cache is experiment.', async () => {
		window.localStorage.setItem( 'test', 'experiment' );

		const { container } = render(
			<ABTest
				name="test"
				control={ <Control /> }
				experiment={ <Experiment /> }
			/>
		);

		expect( await findByText( container, 'Experiment' ) ).toBeDefined();
	} );

	it( 'Should render control when fetched option is control.', async () => {
		apiFetch.mockResolvedValue( {
			[ ABTEST_OPTION_NAME + '_test' ]: 'control',
		} );

		const { container } = render(
			<ABTest
				name="test"
				control={ <Control /> }
				experiment={ <Experiment /> }
			/>
		);

		expect( await findByText( container, 'Control' ) ).toBeDefined();
		expect( window.localStorage.getItem( 'test' ) ).toBe( 'control' );
	} );
} );
