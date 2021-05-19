/**
 * External dependencies
 */
import { render } from '@testing-library/react';

/**
 * Internal dependencies
 */
import { InboxPanel } from '../panels/inbox/inbox-panel';

jest.mock( '../../../inbox-panel', () =>
	jest.fn().mockImplementation( () => <div>Moked notes panel</div> )
);

jest.mock( '../panels/inbox/cards', () => ( {
	cards: [
		{
			name: 'notification-1',
			icon: 'icon-1',
			title: 'Title 1',
			content: 'Panel 1',
			href: 'url-1',
		},
		{
			name: 'notification-2',
			icon: 'icon-2',
			title: 'Title 2',
			content: 'Panel 2',
			href: 'url-2',
		},
		{
			name: 'notification-3',
			icon: 'icon-3',
			title: 'Title 3',
			content: 'Panel 3',
			href: 'url-3',
		},
	],
} ) );

const notifications = [
	{
		name: 'notification-1',
		count: 2,
		critical: 1,
	},
	{
		name: 'notification-2',
		count: 3,
	},
	{
		name: 'notification-3',
		count: 20,
		critical: 19,
	},
];

describe( 'Inbox', () => {
	it( 'shows all the abbreviated cards', () => {
		const { getByText } = render(
			<InboxPanel notifications={ notifications } />
		);

		expect( getByText( 'Panel 1' ) ).toBeDefined();
		expect( getByText( 'Panel 2' ) ).toBeDefined();
		expect( getByText( 'Panel 3' ) ).toBeDefined();
	} );
	it( 'shows critical alerts', () => {
		const { getByText } = render(
			<InboxPanel notifications={ notifications } />
		);

		expect( getByText( '1 critical alert' ) ).toBeDefined();
		expect( getByText( '19 critical alerts' ) ).toBeDefined();
	} );
	it( 'shows the notes panel only when there are no notifications', () => {
		const { queryByText } = render( <InboxPanel notifications={ [] } /> );

		expect( queryByText( 'Panel 1' ) ).toBeNull();
		expect( queryByText( 'Moked notes panel' ) ).not.toBeNull();
	} );
	it( 'does not fail when there is no card for the notifications', () => {
		const newTestNotification = {
			name: 'new-notification',
			count: 4,
		};
		notifications.push( newTestNotification );
		const { getByText, queryByText } = render(
			<InboxPanel notifications={ notifications } />
		);

		expect( getByText( 'Panel 1' ) ).toBeDefined();
		expect( getByText( 'Panel 2' ) ).toBeDefined();
		expect( getByText( 'Panel 3' ) ).toBeDefined();
		expect( queryByText( 'new-notification' ) ).toBeNull();
	} );
} );
