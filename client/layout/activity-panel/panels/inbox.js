/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { Component, Fragment, compose } from '@wordpress/element';
import Gridicon from 'gridicons';
import { withSelect, withDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { ActivityCard, ActivityCardPlaceholder } from '../activity-card';
import ActivityHeader from '../activity-header';
import { getAdminLink } from 'lib/nav-utils';
import { Section } from 'layout/section';

const demoDateCreated = new Date().toISOString();
const demoNotices = [
	{
		id: 1,
		type: 'informational',
		title: __( 'Accept Apple Pay using Stripe', 'wc-admin' ),
		content: __(
			'Your Stripe payment gateway now allows your customers to pay using Apple Pay.',
			'wc-admin'
		),
		icon: 'customize',
		status: 'unread',
		source: 'woocommerce-core',
		date_created: demoDateCreated,
	},
	{
		id: 2,
		type: 'warning',
		title: __( 'Extension subscription expired', 'wc-admin' ),
		content: __(
			'Your subscription for WooCommerce Subscriptions expired on Jun 7th 2018.',
			'wc-admin'
		),
		icon: 'notice-outline',
		status: 'read',
		source: 'woocommerce-core',
		date_created: '2018-07-11T02:49:00Z',
	},
	{
		id: 3,
		type: 'informational',
		title: __( 'Looking for the Store Notice setting?', 'wc-admin' ),
		content: __( 'It can now be found in the customizer.', 'wc-admin' ),
		icon: 'info-outline',
		status: 'read',
		source: 'woocommerce-core',
		date_created: '2018-07-10T02:49:00Z',
		actions: [
			{
				id: 1,
				name: 'store-customizer-setting',
				label: 'Open Customizer',
				// @todo What format will links be? Should they default to external/full URLs?
				// Full URLs that are wc-admin links will force a page refresh though…
				url: getAdminLink( 'customize.php?autofocus%5Bpanel%5D=woocommerce' ),
			},
		],
	},
];

class InboxPanel extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			loading: true,
			notices: [],
			lastRead: null,
		};
	}

	componentDidMount() {
		// @TODO Temporary
		// When we start pulling reviews from the actual API, we'll want to show a loading indicator
		// while both results load (using isRequestingCurrentUser and a isRequestinReviews), and also wait to
		// mark the last opened date until after review results load.
		this.interval = setTimeout( () => {
			// We store lastRead time in state, so we can keep indiciators around, even after we update our meta value.
			const { inboxLastOpened } = this.props;
			this.setState( {
				loading: false,
				notices: demoNotices,
				lastRead: inboxLastOpened,
			} );
			const date = new Date();
			this.props.updateWoocommerceUserMeta( {
				inbox_last_opened: date.toISOString(),
			} );
		}, 5000 );
	}

	componentWillUnmount() {
		clearTimeout( this.interval );
	}

	render() {
		const { loading = true, notices = [], lastRead } = this.state;
		const getButtonsFromActions = actions => {
			if ( ! actions ) {
				return [];
			}
			return actions.map( action => (
				<Button isDefault href={ action.url }>
					{ action.label }
				</Button>
			) );
		};
		return (
			<Fragment>
				<ActivityHeader title={ __( 'Inbox', 'wc-admin' ) } />
				<Section>
					{ loading ? (
						<ActivityCardPlaceholder
							className="woocommerce-inbox-activity-card"
							hasAction
							hasDate
							lines={ 2 }
						/>
					) : (
						notices.map( note => (
							<ActivityCard
								key={ note.id }
								className="woocommerce-inbox-activity-card"
								title={ note.title }
								date={ note.date_created }
								icon={ <Gridicon icon={ note.icon } size={ 48 } /> }
								unread={ note.date_created > lastRead }
								actions={ getButtonsFromActions( note.actions ) }
							>
								{ note.content }
							</ActivityCard>
						) )
					) }
				</Section>
			</Fragment>
		);
	}
}

export default compose(
	withSelect( select => {
		const { getCurrentUser } = select( 'wc-admin' );
		const user = getCurrentUser();
		const wcMeta = user.woocommerce_meta || {};
		return {
			inboxLastOpened: wcMeta.inbox_last_opened || null,
		};
	} ),
	withDispatch( dispatch => {
		return {
			updateWoocommerceUserMeta: dispatch( 'wc-admin' ).updateWoocommerceUserMeta,
		};
	} )
)( InboxPanel );
