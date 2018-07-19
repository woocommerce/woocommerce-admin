/** @format */
/**
 * External dependencies
 */
import { shallow } from 'enzyme';

/**
 * Internal dependencies
 */
import ProductImage from '../';

describe( 'ProductImage', () => {
	test( 'should have correct alt text', () => {
		const image = <ProductImage alt="testing" />;
		expect( image.props.alt ).toBe( 'testing' );
	} );

	test( 'should have the correct width and height', () => {
		const image = <ProductImage width={ 30 } height={ 30 } />;
		expect( image.props.width ).toBe( 30 );
		expect( image.props.height ).toBe( 30 );
	} );

	test( 'should render a product image', () => {
		const product = {
			name: 'Test Product',
			images: [
				{
					src: 'https://i.cloudup.com/pt4DjwRB84-3000x3000.png',
				},
			],
		};
		const card = shallow( <ProductImage product={ product } /> );
		expect( card ).toMatchSnapshot();
	} );

	test( 'should render a placeholder image if no product images are found', () => {
		global.wcSettings.wcAssetUrl = 'https://woocommerce.com/wp-content/plugins/woocommerce/assets/';
		const product = {
			name: 'Test Product',
		};
		const card = shallow( <ProductImage product={ product } /> );
		expect( card ).toMatchSnapshot();
	} );
} );
