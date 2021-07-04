jest.mock( '@woocommerce/experimental', () => {
	// Require the original module to not be mocked...
	const originalModule = jest.requireActual( '@woocommerce/experimental' );

	return {
		__esModule: true, // Use it when dealing with esModules
		...originalModule,
		useSlot: jest.fn().mockReturnValue( {
			fills: [],
		} ),
	};
} );

it( 'does not crash', () => {
	console.log( true );
} );
