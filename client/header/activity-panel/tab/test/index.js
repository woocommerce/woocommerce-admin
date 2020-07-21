import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PagesIcon from 'gridicons/dist/pages';

import { Tab } from '../index';

describe( 'ActivityPanel Tab', () => {
	it( 'displays a title and unread status based on props', () => {
		const { getByText } = render(
			<Tab
				icon={ null }
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

	it( 'renders the node passed to icon', () => {
		const { getByText } = render(
			<Tab
				icon={ <div>Fake icon</div> }
				title={ 'Hello World' }
				name={ 'overview' }
				unread
				selected
				isPanelOpen
				index={ 0 }
				onTabClick={ () => {} }
			/>
		);

		expect( getByText( 'Fake icon' ) ).not.toBeNull();
	} );

	it( 'does not display unread status if unread is false', () => {
		const { queryByText } = render(
			<Tab
				icon={ <PagesIcon /> }
				title={ 'Hello World' }
				name={ 'overview' }
				unread={ false }
				selected
				isPanelOpen
				index={ 0 }
				onTabClick={ () => {} }
			/>
		);

		expect( queryByText( 'unread activity' ) ).toBeNull();
	} );

	it( 'is tabbable if its selected or if its closed and the first item', () => {
		const { getByRole, rerender } = render(
			<Tab
				icon={ <PagesIcon /> }
				title={ 'Hello World' }
				name={ 'overview' }
				unread={ false }
				selected
				isPanelOpen={ false }
				index={ 1 }
				onTabClick={ () => {} }
			/>
		);

		let tab = getByRole( 'tab' );

		// Tab index is set to null if its the currently selected item, or the panel is closed and the item is the first item.
		expect( tab ).not.toHaveAttribute( 'tabindex' );

		rerender(
			<Tab
				icon={ <PagesIcon /> }
				title={ 'Hello World' }
				name={ 'overview' }
				unread={ false }
				selected={ false }
				isPanelOpen={ false }
				index={ 0 }
				onTabClick={ () => {} }
			/>
		);

		tab = getByRole( 'tab' );

		expect( tab ).not.toHaveAttribute( 'tabindex' );
	} );

	it( 'is not tabbable if its not selected, or its open', () => {
		const { getByRole, rerender } = render(
			<Tab
				icon={ <PagesIcon /> }
				title={ 'Hello World' }
				name={ 'overview' }
				unread={ false }
				selected={ false }
				isPanelOpen={ false }
				index={ 1 }
				onTabClick={ () => {} }
			/>
		);

		let tab = getByRole( 'tab' );

		// Tab index is not set if its the currently selected item, or the panel is closed and the item is the first item.
		expect( tab ).toHaveAttribute( 'tabindex', '-1' );

		rerender(
			<Tab
				icon={ <PagesIcon /> }
				title={ 'Hello World' }
				name={ 'overview' }
				unread={ false }
				selected={ false }
				isPanelOpen={ true }
				index={ 1 }
				onTabClick={ () => {} }
			/>
		);

		tab = getByRole( 'tab' );

		expect( tab ).toHaveAttribute( 'tabindex', '-1' );
	} );

	// it( 'calls the onTabClick handler if a tab is clicked', () => {} );

	// it( 'has an is-active class if isPanelOpen is true', () => {} );

	// it( 'has an is-unread class if unread is true', () => {} );

	// it( 'controls aria-is-selected based on selected prop', () => {} );
} );
