/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import Card from '../';

describe( 'Card', () => {
	test( 'should have correct title', () => {
		const card = <Card title="A Card Example" />;
		expect( card.props.title ).toBe( 'A Card Example' );
	} );
} );
