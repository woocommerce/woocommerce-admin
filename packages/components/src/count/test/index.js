/**
 * External dependencies
 */
import renderer from 'react-test-renderer';
import { createElement } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Count from '../';

describe( 'Count', () => {
	test( 'it renders correctly', () => {
		const tree = renderer.create( <Count count={ 33 } /> ).toJSON();
		expect( tree ).toMatchSnapshot();
	} );
} );
