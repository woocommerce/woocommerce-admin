/**
 * External dependencies
 */
import { shallow } from 'enzyme';
import { recordEvent } from 'lib/tracks';
import { Spinner } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { RecommendedExtensions } from '../index.js';
import RecommendedExtensionsItem from '../item.js';

jest.mock( 'lib/tracks' );

describe( 'Recommendations and not loading', () => {
	let recommendedExtensionsWrapper;

	const mockExtensions = [
		{
			'title': 'AutomateWoo',
			'description': 'Does things.',
			'url': 'https://woocommerce.com/products/automatewoo/',
			'icon': 'icons/automatewoo.svg',
			'product': 'automatewoo',
			'plugin': 'automatewoo/automatewoo.php',
		},
		{
			'title': 'Mailchimp for WooCommerce',
			'description': 'Does things.',
			'url': 'https://woocommerce.com/products/mailchimp-for-woocommerce/',
			'icon': 'icons/mailchimp.svg',
			'product': 'mailchimp-for-woocommerce',
			'plugin': 'mailchimp-for-woocommerce/mailchimp-woocommerce.php',
		},
	];

	beforeEach( () => {
		recommendedExtensionsWrapper = shallow(
			<RecommendedExtensions
				extensions={ mockExtensions }
				isLoading={ false }
				title={ '' }
				description={ '' }
				category={ '' }
			/>
		);
	} );

	it( 'should not display the spinner', () => {
		const spinner = recommendedExtensionsWrapper.find( Spinner );
		expect( spinner.length ).toBe( 0 );
	} );

	it( 'should display correct number of recommendations', () => {
		const itemsContainer = recommendedExtensionsWrapper.find( 'div.woocommerce-marketing-recommended-extensions-card__items' );
		expect( itemsContainer.length ).toBe( 1 );

		const items = recommendedExtensionsWrapper.find( RecommendedExtensionsItem );
		expect( items.length ).toBe( 2 );
	} );
} );

describe( 'Recommendations and loading', () => {
	let recommendedExtensionsWrapper;

	const mockExtensions = [
		{
			'title': 'AutomateWoo',
			'description': 'Does things.',
			'url': 'https://woocommerce.com/products/automatewoo/',
			'icon': 'icons/automatewoo.svg',
			'product': 'automatewoo',
			'plugin': 'automatewoo/automatewoo.php',
		},
		{
			'title': 'Mailchimp for WooCommerce',
			'description': 'Does things.',
			'url': 'https://woocommerce.com/products/mailchimp-for-woocommerce/',
			'icon': 'icons/mailchimp.svg',
			'product': 'mailchimp-for-woocommerce',
			'plugin': 'mailchimp-for-woocommerce/mailchimp-woocommerce.php',
		},
	];

	beforeEach( () => {
		recommendedExtensionsWrapper = shallow(
			<RecommendedExtensions
				extensions={ mockExtensions }
				isLoading={ true }
				title={ '' }
				description={ '' }
				category={ '' }
			/>
		);
	} );

	it( 'should display spinner', () => {
		const spinner = recommendedExtensionsWrapper.find( Spinner );
		expect( spinner.length ).toBe( 1 );
	} );

	it( 'should not display recommendations', () => {
		const itemsContainer = recommendedExtensionsWrapper.find( 'div.woocommerce-marketing-recommended-extensions-card__items' );
		expect( itemsContainer.length ).toBe( 0 );
	} );
} );

describe( 'No Recommendations and not loading', () => {
	let recommendedExtensionsWrapper;

	const mockExtensions = [];

	beforeEach( () => {
		recommendedExtensionsWrapper = shallow(
			<RecommendedExtensions
				extensions={ mockExtensions }
				isLoading={ false }
				title={ '' }
				description={ '' }
				category={ '' }
			/>
		);
	} );

	it( 'should not display spinner', () => {
		const spinner = recommendedExtensionsWrapper.find( Spinner );
		expect( spinner.length ).toBe( 0 );
	} );

	it( 'should not display recommendations', () => {
		const itemsContainer = recommendedExtensionsWrapper.find( 'div.woocommerce-marketing-recommended-extensions-card__items' );
		expect( itemsContainer.length ).toBe( 0 );
	} );
} );

describe( 'Click Recommendations', () => {
	let recommendedExtensionItemWrapper;

	beforeEach( () => {
		recommendedExtensionItemWrapper = shallow(
			<RecommendedExtensionsItem
				title={ 'AutomateWoo' }
				description={ 'Does things.' }
				icon={ 'icons/automatewoo.svg' }
				url={ 'https://woocommerce.com/products/automatewoo/' }
			/>
		);
	} );

	it( 'should record an event when clicked', () => {
		const item = recommendedExtensionItemWrapper.find( 'a' );
		expect( item.length ).toBe( 1 );
		item.simulate( 'click' );
		expect( recordEvent ).toHaveBeenCalledTimes( 1 );
		expect( recordEvent ).toHaveBeenCalledWith(
			'marketing_recommended_extension',
			{ name: 'AutomateWoo' },
		);
	} );
} );