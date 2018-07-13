/** @format */
/**
 * Internal dependencies
 */
import orders from '../orders';

describe( 'orders', () => {
	describe( 'operations', () => {
		const methods = {};
		const getResponse = [];
		const postResponse = {};

		beforeEach( () => {
			methods.get = jest.fn();
			methods.post = jest.fn();

			methods.get.mockReturnValue( Promise.resolve().then( () => getResponse ) );
			methods.post.mockReturnValue( Promise.resolve().then( () => postResponse ) );
		} );

		describe( 'read', () => {
			it( 'should ignore resourceNames not meant for it.', () => {
				const { read } = orders.operations;
				const resourceNames = [ 'ignoreme', 'orders:', 'products-page:' ];
				Promise.all( read( methods )( resourceNames ) ).then( () => {
					expect( methods.get ).not.toHaveBeenCalled();
					expect( methods.post ).not.toHaveBeenCalled();
				} );
			} );

			it( 'should request multiple pages of orders individually.', () => {
				const { read } = orders.operations;
				const resourceNames = [
					'orders-page:{"page":1,"per_page":10}',
					'orders-page:{"page":3,"per_page":100}',
					'ignoreme',
				];
				Promise.all( read( methods )( resourceNames ) ).then( () => {
					expect( methods.post ).not.toHaveBeenCalled();
					expect( methods.get ).toHaveBeenCalledTimes( 2 );
					expect( methods.get ).toHaveBeenCalledWith( [ 'orders' ], { page: 1, per_page: 10 } );
					expect( methods.get ).toHaveBeenCalledWith( [ 'orders' ], { page: 3, per_page: 100 } );
				} );
			} );
		} );

		describe( 'update', () => {
			it( 'should ignore resourceNames not meant for it.', () => {
				const { update } = orders.operations;
				const resourceNames = [ 'ignoreme', 'orders:', 'products-page:' ];
				Promise.all( update( methods )( resourceNames ) ).then( () => {
					expect( methods.get ).not.toHaveBeenCalled();
					expect( methods.post ).not.toHaveBeenCalled();
				} );
			} );

			it( 'should request update of multiple orders individually.', () => {
				const { update } = orders.operations;
				const resourceNames = [ 'order:6', 'order:42', 'ignoreme' ];
				const resourceData = {
					'order:6': { name: 'six' },
					'order:42': { name: 'forty-two' },
				};
				Promise.all( update( methods )( resourceNames, resourceData ) ).then( () => {
					expect( methods.get ).not.toHaveBeenCalled();
					expect( methods.post ).toHaveBeenCalledTimes( 2 );
					expect( methods.post ).toHaveBeenCalledWith( [ 'orders', 6 ], {
						data: { name: 'six' },
					} );
					expect( methods.post ).toHaveBeenCalledWith( [ 'orders', 42 ], {
						data: { name: 'forty-two' },
					} );
				} );
			} );
		} );
	} );

	describe( 'mutations', () => {
		const operations = {};
		const updateResult = [
			Promise.resolve().then( () => ( { id: 5, number: '5', status: 'processing' } ) ),
		];

		beforeEach( () => {
			operations.update = jest.fn();
			operations.update.mockReturnValue( updateResult );
		} );

		describe( 'updateOrder', () => {
			it( 'should perform an update operation for an order.', () => {
				const { updateOrder } = orders.mutations;

				Promise.all( updateOrder( operations )( { id: 5, status: 'processing' } ) ).then( () => {
					expect( operations.update ).toHaveBeenCalledTimes( 1 );
					expect( operations.update ).toHaveBeenCalledWith( [ 'order:5' ], {
						'order:5': { id: 5, status: 'processing' },
					} );
				} );
			} );
		} );

		describe( 'fulfillOrder', () => {
			it( 'should perform an update operation for an order.', () => {
				const { fulfillOrder } = orders.mutations;

				Promise.all( fulfillOrder( operations )( 52 ) ).then( () => {
					expect( operations.update ).toHaveBeenCalledTimes( 1 );
					expect( operations.update ).toHaveBeenCalledWith( [ 'order:52' ], {
						'order:52': { id: 52, status: 'completed' },
					} );
				} );
			} );
		} );
	} );

	describe( 'selectors', () => {
		const { getOrdersPage } = orders.selectors;

		let getResource;
		let requireResource;

		beforeEach( () => {
			getResource = jest.fn();
			requireResource = jest.fn();
		} );

		describe( 'getOrdersPage', () => {
			it( 'should get and require data for a given orders page.', () => {
				requireResource.mockReturnValueOnce( { data: [ 52, 42, 32 ] } );
				getResource.mockReturnValueOnce( { data: { id: 52, status: 'processing' } } );
				getResource.mockReturnValueOnce( { data: { id: 42, status: 'completed' } } );
				getResource.mockReturnValueOnce( { data: { id: 32, status: 'on-hold' } } );

				const requirement = { freshness: 5000 };

				const result = getOrdersPage( getResource, requireResource )( requirement, {
					page: 1,
					per_page: 3,
				} );

				expect( result ).toEqual( [
					{ id: 52, status: 'processing' },
					{ id: 42, status: 'completed' },
					{ id: 32, status: 'on-hold' },
				] );

				expect( getResource ).toHaveBeenCalledTimes( 3 );
				expect( getResource ).toHaveBeenCalledWith( 'order:52' );
				expect( getResource ).toHaveBeenCalledWith( 'order:42' );
				expect( getResource ).toHaveBeenCalledWith( 'order:32' );

				expect( requireResource ).toHaveBeenCalledTimes( 1 );
				expect( requireResource ).toHaveBeenCalledWith(
					requirement,
					'orders-page:{"page":1,"per_page":3}'
				);
			} );

			it( 'should return an empty array for a page that does not yet exist.', () => {
				requireResource.mockReturnValueOnce( {} );
				const requirement = { freshness: 5000 };

				const result = getOrdersPage( getResource, requireResource )( requirement, {
					page: 1,
					per_page: 3,
				} );

				expect( result ).toEqual( [] );

				expect( getResource ).not.toHaveBeenCalled();

				expect( requireResource ).toHaveBeenCalledTimes( 1 );
				expect( requireResource ).toHaveBeenCalledWith(
					requirement,
					'orders-page:{"page":1,"per_page":3}'
				);
			} );
		} );
	} );
} );
