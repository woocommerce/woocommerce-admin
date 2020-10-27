/**
 * External dependencies
 */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

/**
 * Internal dependencies
 */
import { QuickLinkCategory } from '..';

describe( 'QuickLinkCategory', () => {
	it( 'displays the passed title and children', () => {
		const { queryByText } = render(
			<QuickLinkCategory title="hello world">
				<div>Test</div>
			</QuickLinkCategory>
		);

		expect( queryByText( 'Test' ) ).not.toBeEmptyDOMElement();
	} );
} );
