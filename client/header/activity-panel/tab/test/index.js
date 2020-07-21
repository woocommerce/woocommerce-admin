import { render } from '@testing-library/react';
import PagesIcon from 'gridicons/dist/pages';

import { Tab } from '../index';

describe( 'ActivityPanel Tab', () => {
	it( 'displays an icon, title and unread status based on props', () => {
		const { getByText } = render(
			<Tab
				icon={ <PagesIcon /> }
				title={ 'Hello World' }
				name={ 'overview' }
				unread
				selected
				isPanelOpen
				index={ 0 }
				onTabClick={ () => {} }
			/>
		);

		expect( getByText( 'Hello World' ) ).not.toBeNull();
		expect( getByText( 'unread activity' ) ).not.toBeNull();
	} );

	// it( 'does not display unread status if unread is false' );

	// it( 'is tabbable if its closed or if its closed and the first item', () => {} );

	// it( 'calls the onTabClick handler if a tab is clicked', () => {} );

	// it( 'has an is-active class if isPanelOpen is true', () => {} );

	// it( 'has an is-unread class if unread is true', () => {} );

	// it( 'controls aria-is-selected based on selected prop', () => {} );
} );
