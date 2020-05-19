/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withDispatch } from '@wordpress/data';
import { filter } from 'lodash';

/**
 * Internal dependencies
 */
import { ActivityCard } from '../../activity-card';
import InboxNotePlaceholder from './placeholder';
import ActivityHeader from '../../activity-header';
import InboxNoteCard from './card';
import { EmptyContent, Section } from '@woocommerce/components';
import { QUERY_DEFAULTS } from 'wc-api/constants';
import withSelect from 'wc-api/with-select';

class InboxPanel extends Component {
	constructor( props ) {
		super( props );
		this.mountTime = Date.now();
	}

	componentWillUnmount() {
		const userDataFields = {
			activity_panel_inbox_last_read: this.mountTime,
		};
		this.props.updateCurrentUserData( userDataFields );
	}

	getScreenName() {
		let screenName = '';
		const URLparams = Object.fromEntries(
			new URLSearchParams( window.location.search )
		);

		if ( URLparams.page ) {
			const currentPage =
				URLparams.page === 'wc-admin' ? 'home_screen' : URLparams.page;
			screenName = URLparams.path
				? URLparams.path.replace( /\//g, '_' ).substring( 1 )
				: currentPage;
		} else if ( URLparams.post_type ) {
			screenName = URLparams.post_type;
		}
		return screenName;
	}

	getUnreadNotesCount() {
		const { lastRead, notes } = this.props;

		const unreadNotes = filter( notes, ( note ) => {
			const {
				is_deleted: isDeleted,
				date_created_gmt: dateCreatedGmt,
			} = note;
			if ( ! isDeleted ) {
				return (
					! lastRead ||
					! dateCreatedGmt ||
					new Date( dateCreatedGmt + 'Z' ).getTime() > lastRead
				);
			}
		} );
		return unreadNotes.length;
	}

	renderEmptyCard() {
		return (
			<ActivityCard
				className="woocommerce-empty-activity-card"
				title={ __( 'Your inbox is empty', 'woocommerce-admin' ) }
				icon={ false }
			>
				{ __(
					'As things begin to happen in your store your inbox will start to fill up. ' +
						"You'll see things like achievements, new feature announcements, extension recommendations and more!",
					'woocommerce-admin'
				) }
			</ActivityCard>
		);
	}

	hasValidNotes() {
		const { notes } = this.props;

		const validNotes = filter( notes, ( note ) => {
			const { is_deleted: isDeleted } = note;
			return ! isDeleted;
		} );
		return validNotes.length > 0;
	}

	renderNotes( hasNotes ) {
		const { lastRead, notes } = this.props;

		if ( ! hasNotes ) {
			return this.renderEmptyCard();
		}

		const screen = this.getScreenName();
		const notesArray = Object.keys( notes ).map( ( key ) => notes[ key ] );

		return notesArray.map( ( note ) => (
			<InboxNoteCard
				key={ note.id }
				note={ note }
				lastRead={ lastRead }
				screen={ screen }
			/>
		) );
	}

	render() {
		const { isError, isRequesting } = this.props;

		if ( isError ) {
			const title = __(
				'There was an error getting your inbox. Please try again.',
				'woocommerce-admin'
			);
			const actionLabel = __( 'Reload', 'woocommerce-admin' );
			const actionCallback = () => {
				// @todo Add tracking for how often an error is displayed, and the reload action is clicked.
				window.location.reload();
			};

			return (
				<Fragment>
					<EmptyContent
						title={ title }
						actionLabel={ actionLabel }
						actionURL={ null }
						actionCallback={ actionCallback }
					/>
				</Fragment>
			);
		}

		const hasNotes = this.hasValidNotes();

		return (
			<Fragment>
				{ ( hasNotes || isRequesting ) && (
					<ActivityHeader
						title={ __( 'Inbox', 'woocommerce-admin' ) }
						subtitle={ __(
							'Insights and growth tips for your business',
							'woocommerce-admin'
						) }
						unreadMessages={ this.getUnreadNotesCount() }
					/>
				) }
				<Section>
					{ isRequesting ? (
						<InboxNotePlaceholder className={ 'banner' } />
					) : (
						this.renderNotes( hasNotes )
					) }
				</Section>
			</Fragment>
		);
	}
}

export default compose(
	withSelect( ( select ) => {
		const {
			getCurrentUserData,
			getNotes,
			getNotesError,
			isGetNotesRequesting,
		} = select( 'wc-api' );
		const userData = getCurrentUserData();
		const inboxQuery = {
			page: 1,
			per_page: QUERY_DEFAULTS.pageSize,
			type: 'info,warning',
			orderby: 'date',
			order: 'desc',
			status: 'unactioned',
			_fields: [
				'id',
				'name',
				'title',
				'content',
				'type',
				'status',
				'actions',
				'date_created',
				'date_created_gmt',
				'layout',
				'image',
				'is_deleted',
			],
		};

		const notes = getNotes( inboxQuery );
		const isError = Boolean( getNotesError( inboxQuery ) );
		const isRequesting = isGetNotesRequesting( inboxQuery );

		return {
			notes,
			isError,
			isRequesting,
			lastRead: userData.activity_panel_inbox_last_read,
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { updateCurrentUserData } = dispatch( 'wc-api' );

		return {
			updateCurrentUserData,
		};
	} )
)( InboxPanel );
