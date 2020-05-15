/**
 * External dependencies
 */
import { shallow } from 'enzyme';

/**
 * Internal dependencies
 */
import InboxNoteCard from '../card';

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
