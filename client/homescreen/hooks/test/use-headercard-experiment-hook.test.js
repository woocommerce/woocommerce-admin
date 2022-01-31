/**
 * External dependencies
 */
import { renderHook } from '@testing-library/react-hooks';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import { useHeadercardExperimentHook } from '../use-headercard-experiment-hook';

jest.mock( '@woocommerce/explat', () => {
	return {
		...jest.requireActual( '@woocommerce/explat' ),
		loadExperimentAssignment: jest.fn().mockResolvedValue( {
			variationName: 'treatment',
		} ),
	};
} );

describe( 'useHeadercardExperimentHook', () => {
	it( 'should return default values before installTimestampHasResolved', () => {
		const { result } = renderHook( () =>
			useHeadercardExperimentHook( false, null )
		);
		return expect( result.current ).toEqual( {
			isLoadingExperimentAssignment: true,
			isLoadingTwoColExperimentAssignment: true,
			experimentAssignment: null,
			twoColExperimentAssignment: null,
		} );
	} );

	it( 'should not stay in loading state when installTimestampHasResolved is true but installTimestamp is null', () => {
		const { result } = renderHook( () =>
			useHeadercardExperimentHook( true, null )
		);
		return expect( result.current ).toEqual( {
			isLoadingExperimentAssignment: false,
			isLoadingTwoColExperimentAssignment: false,
			experimentAssignment: null,
			twoColExperimentAssignment: null,
		} );
	} );

	it( 'should add install_timestamp to woocommerce_explat_request_args filter', async () => {
		const { waitForNextUpdate } = renderHook( () =>
			useHeadercardExperimentHook( true, 12345678 )
		);
		await waitForNextUpdate();
		return expect(
			applyFilters( 'woocommerce_explat_request_args', {} )
		).toEqual( {
			install_timestamp: 12345678,
		} );
	} );

	it( 'should receive experiment results from explat when installTimestamp is provided', async () => {
		const { result, waitForNextUpdate } = renderHook( () =>
			useHeadercardExperimentHook( true, 12345678 )
		);
		await waitForNextUpdate();
		return expect( result.current ).toEqual( {
			isLoadingExperimentAssignment: false,
			isLoadingTwoColExperimentAssignment: false,
			experimentAssignment: { variationName: 'treatment' },
			twoColExperimentAssignment: { variationName: 'treatment' },
		} );
	} );
} );
