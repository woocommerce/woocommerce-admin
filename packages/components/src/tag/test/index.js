/** @format */
/**
 * External dependencies
 */
import renderer from 'react-test-renderer';

/**
 * Internal dependencies
 */
import Tag from '../';

const noop = () => {};

describe( 'Tag', () => {
	test( 'it renders correctly', () => {
		const tree = renderer.create( <Tag label="foo" /> ).toJSON();
		expect( tree ).toMatchSnapshot();
	} );

	test( 'it renders correctly with id', () => {
		const tree = renderer.create( <Tag label="foo" id={ 1 } /> ).toJSON();
		expect( tree ).toMatchSnapshot();
	} );

	test( 'it renders correctly with remove', () => {
		const tree = renderer.create( <Tag label="foo" remove={ noop } /> ).toJSON();
		expect( tree ).toMatchSnapshot();
	} );

	test( 'it renders correctly with popover', () => {
		const tree = renderer
			.create( <Tag label="foo" popoverContents={ <p>This is a popover</p> } /> )
			.toJSON();
		expect( tree ).toMatchSnapshot();
	} );

	test( 'it renders correctly with popover', () => {
		const tree = renderer.create( <Tag label="foo" screenReaderLabel="FooBar" /> ).toJSON();
		expect( tree ).toMatchSnapshot();
	} );
} );
