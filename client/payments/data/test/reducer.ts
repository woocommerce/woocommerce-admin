/**
 * @jest-environment node
 */

/**
 * Internal dependencies
 */
import reducer from '../reducer';
import { ACTION_TYPES } from '../action-types';
import { PluginsState } from '../types';
import { paymentGatewaysStub } from '../test-helpers/stub';

const defaultState: PluginsState = {
	paymentGateways: [],
	requesting: {},
	errors: {},
};

describe( 'plugins reducer', () => {
	it( 'should return a default state', () => {
		const state = reducer( undefined );
		expect( state ).toEqual( defaultState );
		expect( state ).not.toBe( defaultState );
	} );

	it( 'should handle GET_PAYMENT_GATEWAYS_SUCCESS', () => {
		const state = reducer( defaultState, {
			type: ACTION_TYPES.GET_PAYMENT_GATEWAYS_SUCCESS,
			paymentGateways: paymentGatewaysStub,
		} );

		expect( state.paymentGateways ).toHaveLength( 2 );
		expect( state.paymentGateways ).toBe( paymentGatewaysStub );
	} );

	it( 'should replace an existing payment gateway on SET_PAYMENT_GATEWAY', () => {
		const updatedPaymentGateway = {
			...paymentGatewaysStub[ 1 ],
			description: 'update test',
		};
		const state = reducer(
			{
				...defaultState,
				paymentGateways: paymentGatewaysStub,
			},
			{
				type: ACTION_TYPES.UPDATE_PAYMENT_GATEWAY_SUCCESS,
				paymentGateway: updatedPaymentGateway,
			}
		);

		expect( state.paymentGateways[ 1 ].id ).toBe(
			paymentGatewaysStub[ 1 ].id
		);
		expect( state.paymentGateways[ 1 ].description ).toBe( 'update test' );
	} );

	it( 'should handle SET_IS_REQUESTING', () => {
		const state = reducer( defaultState, {
			type: ACTION_TYPES.SET_IS_REQUESTING,
			selector: 'updatePaymentGateway',
			isRequesting: true,
		} );

		expect( state.requesting.updatePaymentGateway ).toBe( true );
	} );

	it( 'should handle SET_ERROR', () => {
		const restApiError = {
			code: 'error code',
			data: {
				status: 400,
			},
			message: 'error message',
		};
		const state = reducer( defaultState, {
			type: ACTION_TYPES.SET_ERROR,
			selector: 'updatePaymentGateway',
			error: restApiError,
		} );

		expect( state.errors.updatePaymentGateway ).toBe( restApiError );
		expect( state.requesting.updatePaymentGateway ).toBe( false );
	} );
} );
