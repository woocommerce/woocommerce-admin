/**
 * External dependencies
 */
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/**
 * Internal dependencies
 */
import { StoreDetails } from '../';

const testProps = {
	query: {
		page: 'wc-admin',
		path: '/setup-wizard',
	},
	step: {
		key: 'store-details',
		label: 'Store Details',
		isComplete: false,
	},
	initialValues: {
		addressLine1: '',
		addressLine2: '',
		city: '',
		countryState: '',
		postCode: '',
		isAgreeMarketing: true,
		storeEmail: 'wordpress@example.com',
	},
	getLocale: jest.fn(),
	isLoading: false,
};

describe( 'StoreDetails', () => {
	describe( 'Snapshot test', () => {
		test( 'should match saved snapshot', () => {
			const container = render( <StoreDetails { ...testProps } /> );
			expect( container ).toMatchSnapshot();
		} );
	} );
	describe( 'Email validation test cases', () => {
		// test cases taken from wordpress php is_email test cases
		// https://github.com/WordPress/wordpress-develop/blob/2648a5f984b8abf06872151898e3a61d3458a628/tests/phpunit/tests/formatting/isEmail.php
		test.each( [
			'khaaaaaaaaaaaaaaan!',
			'http://bob.example.com/',
			"sif i'd give u it, spamer!1",
			'com.exampleNOSPAMbob',
			'bob@your mom',
			'a@b.c',
		] )( 'should fail email validation when given %s', async ( email ) => {
			const container = render( <StoreDetails { ...testProps } /> );
			const emailInput = container.getByLabelText( 'Email address' );
			await userEvent.clear( emailInput );
			await userEvent.type( emailInput, email );
			// validation is triggered onChange but error message only renders on blur
			// react testing lib doesn't have a "blur" event that can be triggered so this does the job of triggering the error message rendering
			userEvent.tab();
			expect(
				container.queryByText( 'Invalid email address' )
			).toBeInTheDocument();
		} );

		test.each( [
			'bob@example.com',
			'phil@example.info',
			// 'ace@204.32.222.14', this testcase passes for the backend validation but fails here, following up in a PR to fix this in @wordpress/url
			'kevin@many.subdomains.make.a.happy.man.edu',
			'a@b.co',
			'bill+ted@example.com',
		] )( 'should pass email validation when given %s', async ( email ) => {
			const container = render( <StoreDetails { ...testProps } /> );
			const emailInput = container.getByLabelText( 'Email address' );
			await userEvent.clear( emailInput );
			await userEvent.type( emailInput, email );
			userEvent.tab();
			expect(
				container.queryByText( 'Invalid email address' )
			).toBeNull();
		} );

		test( 'should pass email validation when field is empty', async () => {
			const container = render( <StoreDetails { ...testProps } /> );
			const emailInput = container.getByLabelText( 'Email address' );
			await userEvent.clear( emailInput );
			userEvent.tab();
			expect(
				container.queryByText( 'Invalid email address' )
			).toBeNull();
		} );
	} );
} );
