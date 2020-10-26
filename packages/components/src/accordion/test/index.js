/**
 * External dependencies
 */
import { render, screen } from '@testing-library/react';

/**
 * Internal dependencies
 */
import Accordion from '../';

const panels = [
	{
		className: 'panel-1',
		count: 10000,
		title: 'panel-1',
		initialOpen: true,
		panel: <span>Custom panel 1</span>,
	},
	{
		className: 'panel-2',
		count: 20000,
		title: 'panel-2',
		initialOpen: false,
		panel: <span>Custom panel 2</span>,
	},
];

describe( 'Accordion', () => {
	it( 'should render a panel with two rows', () => {
		render( <Accordion panels={ panels } /> );
		expect( screen.getByText( 'panel-1' ) ).not.toBeNull();
		expect( screen.getByText( 'panel-2' ) ).not.toBeNull();
	} );

	it( 'should render one visible panel and one hidden panel', () => {
		render( <Accordion panels={ panels } /> );
		expect( screen.queryByText( 'Custom panel 1' ) ).toBeInTheDocument();
		expect(
			screen.queryByText( 'Custom panel 2' )
		).not.toBeInTheDocument();
	} );

	it( 'should render the count of unread items', () => {
		render( <Accordion panels={ panels } /> );
		expect( screen.queryByText( '10000' ) ).toBeInTheDocument();
		expect( screen.queryByText( '20000' ) ).toBeInTheDocument();
	} );
} );
