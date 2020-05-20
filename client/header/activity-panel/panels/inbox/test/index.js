/**
 * External dependencies
 */
import { shallow } from 'enzyme';

/**
 * Internal dependencies
 */
import InboxNoteCard from '../card';
import { getUnreadNotesCount, hasValidNotes } from '../utils';

describe( 'InboxNoteCard', () => {
	const note = {
		id: 1,
		name: 'wc-admin-wc-helper-connection',
		type: 'info',
		title: 'Connect to WooCommerce.com',
		content: 'Connect to get important product notifications and updates.',
		status: 'unactioned',
		date_created: '2020-05-10T16:57:31',
		actions: [
			{
				id: 1,
				name: 'connect',
				label: 'Connect',
				query: '',
				status: 'unactioned',
				primary: false,
				url: 'http://test.com',
			},
		],
		layout: 'plain',
		image: '',
		date_created_gmt: '2020-05-10T16:57:31',
		is_deleted: false,
	};
	const lastRead = 1589285995243;

	test( 'should render a notification type banner', () => {
		note.layout = 'banner';
		const card = shallow(
			<InboxNoteCard
				key={ note.id }
				note={ note }
				lastRead={ lastRead }
			/>,
			{
				disableLifecycleMethods: true,
			}
		);
		const noteBanner = card.find( '.banner' );
		expect( noteBanner ).toHaveLength( 1 );
	} );

	test( 'should render a notification type thumbnail', () => {
		note.layout = 'thumbnail';
		const card = shallow(
			<InboxNoteCard
				key={ note.id }
				note={ note }
				lastRead={ lastRead }
			/>,
			{
				disableLifecycleMethods: true,
			}
		);
		const noteThumbnail = card.find( '.thumbnail' );
		expect( noteThumbnail ).toHaveLength( 1 );
	} );

	test( 'should render one action and the Dismiss button', () => {
		const card = shallow(
			<InboxNoteCard
				key={ note.id }
				note={ note }
				lastRead={ lastRead }
			/>,
			{
				disableLifecycleMethods: true,
			}
		);
		const actionButtons = card.find(
			'.woocommerce-inbox-message__actions'
		);
		const buttonList = actionButtons.children();
		const dismissButton = card.find( 'Dropdown' ).dive();

		expect( buttonList ).toHaveLength( 2 );
		expect(
			actionButtons.text().includes( 'InboxNoteAction' )
		).toBeTruthy();
		expect( dismissButton.find( 'ForwardRef(Button)' ).text() ).toEqual(
			'Dismiss'
		);
	} );

	test( 'should render only a Dismiss button', () => {
		note.actions = [];
		const card = shallow(
			<InboxNoteCard
				key={ note.id }
				note={ note }
				lastRead={ lastRead }
			/>,
			{
				disableLifecycleMethods: true,
			}
		);
		const dismissButton = card.find( 'Dropdown' ).dive();
		expect( dismissButton.find( 'ForwardRef(Button)' ).text() ).toEqual(
			'Dismiss'
		);
	} );

	test( 'should render an unread notification', () => {
		const olderLastRead = 1584015595000;
		note.actions = [];
		const card = shallow(
			<InboxNoteCard
				key={ note.id }
				note={ note }
				lastRead={ olderLastRead }
			/>,
			{
				disableLifecycleMethods: true,
			}
		);
		const unreadNote = card.find( '.message-is-unread' );
		expect( unreadNote ).toHaveLength( 1 );
	} );

	test( 'should not render any notification', () => {
		note.is_deleted = true;
		const card = shallow(
			<InboxNoteCard
				key={ note.id }
				note={ note }
				lastRead={ lastRead }
			/>,
			{
				disableLifecycleMethods: true,
			}
		);
		expect( card.children() ).toHaveLength( 0 );
	} );
} );

const notes = [
	{
		id: 1,
		date_created_gmt: '2019-05-10T16:57:31',
		is_deleted: false,
	},
	{
		id: 2,
		date_created_gmt: '2020-05-12T16:57:31',
		is_deleted: false,
	},
	{
		id: 3,
		date_created_gmt: '2020-05-14T16:57:31',
		is_deleted: false,
	},
	{
		id: 4,
		date_created_gmt: '2020-05-15T16:57:31',
		is_deleted: false,
	},
];

describe( 'getUnreadNotesCount', () => {
	const lastRead = 1589285995243;

	test( 'should return 3, 1 of the notes was read', () => {
		const unreadCount = getUnreadNotesCount( notes, lastRead );
		expect( unreadCount ).toEqual( 3 );
	} );

	test( 'should return 2, 1 of the notes was read and 1 is deleted', () => {
		notes[ 3 ].is_deleted = true;
		const unreadCount = getUnreadNotesCount( notes, lastRead );
		expect( unreadCount ).toEqual( 2 );
	} );

	test( 'should return 1, 2 of the notes were read and 1 is deleted', () => {
		notes[ 1 ].date_created_gmt = '2020-05-05T16:57:31';
		const unreadCount = getUnreadNotesCount( notes, lastRead );
		expect( unreadCount ).toEqual( 1 );
	} );

	test( 'should return 0, 2 of the notes were read and 2 are deleted', () => {
		notes[ 2 ].is_deleted = true;
		const unreadCount = getUnreadNotesCount( notes, lastRead );
		expect( unreadCount ).toEqual( 0 );
	} );
} );

describe( 'hasValidNotes', () => {
	test( 'should return true, 2 notes are deleted', () => {
		expect( hasValidNotes( notes ) ).toBeTruthy();
	} );
	test( 'should return false, 4 notes are deleted', () => {
		notes[ 0 ].is_deleted = true;
		notes[ 3 ].is_deleted = true;
		expect( hasValidNotes( notes ) ).toBeTruthy();
	} );
} );
