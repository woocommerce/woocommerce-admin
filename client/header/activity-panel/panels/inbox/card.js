/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	cloneElement,
	Component,
	createRef,
	Fragment,
} from '@wordpress/element';
import { Button, Dropdown, Modal } from '@wordpress/components';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import moment from 'moment';

/**
 * Internal dependencies
 */
import NoteAction from './action';
import sanitizeHTML from 'lib/sanitize-html';
import classnames from 'classnames';
import { recordEvent } from 'lib/tracks';
import './style.scss';
import { H, Section } from '@woocommerce/components';

class InboxNoteCard extends Component {
	constructor( props ) {
		super( props );
		this.onVisible = this.onVisible.bind( this );
		this.hasBeenSeen = false;
		this.state = {
			isDismissModalOpen: false,
			dismissType: null,
		};
		this.openDismissModal = this.openDismissModal.bind( this );
		this.closeDismissModal = this.closeDismissModal.bind( this );
		this.bodyNotificationRef = createRef();
	}

	componentDidMount() {
		this.bodyNotificationRef.current.addEventListener( 'click', ( event ) =>
			this.handleBodyClick( event, this.props )
		);
	}

	componentWillUnmount() {
		this.bodyNotificationRef.current.removeEventListener(
			'click',
			( event ) => this.handleBodyClick( event, this.props )
		);
	}

	handleBodyClick( event, props ) {
		const innerLink = event.target.href;
		if ( innerLink ) {
			const { note, screen } = props;

			recordEvent( 'wcadmin_inbox_note_view', {
				note_name: note.name,
				note_content_inner_link: innerLink,
				screen,
			} );
		}
	}

	// Trigger a view Tracks event when the note is seen.
	onVisible( isVisible ) {
		if ( isVisible && ! this.hasBeenSeen ) {
			const { note, screen } = this.props;

			recordEvent( 'inbox_note_view', {
				note_content: note.content,
				note_name: note.name,
				note_title: note.title,
				note_type: note.type,
				screen,
			} );

			this.hasBeenSeen = true;
		}
	}

	openDismissModal( type ) {
		this.setState( {
			isDismissModalOpen: true,
			dismissType: type,
		} );
	}

	closeDismissModal( acepted ) {
		const { dismissType } = this.state;
		const { note, screen } = this.props;
		const noteNameDismissAll = dismissType === 'all' ? true : false;
		const noteNameDismissAllConfirmation = acepted ? true : false;

		recordEvent( 'wcadmin_inbox_note_view', {
			note_name: note.name,
			note_name_dismiss: note.name,
			note_name_dismiss_all: noteNameDismissAll,
			note_name_dismiss_all_confirmation: noteNameDismissAllConfirmation,
			screen,
		} );

		this.setState( {
			isDismissModalOpen: false,
		} );
	}

	renderDismissButton() {
		return (
			<Dropdown
				position="bottom right"
				renderToggle={ ( { onToggle } ) => (
					<Button isTertiary onClick={ onToggle }>
						{ __( 'Dismiss', 'woocommerce-admin' ) }
					</Button>
				) }
				focusOnMount={ false }
				popoverProps={ { noArrow: true } }
				renderContent={ () => (
					<ul>
						<li>
							<Button
								onClick={ () =>
									this.openDismissModal( 'this' )
								}
							>
								{ __(
									'Dismiss this message',
									'woocommerce-admin'
								) }
							</Button>
						</li>
						<li>
							<Button
								onClick={ () => this.openDismissModal( 'all' ) }
							>
								{ __(
									'Dismiss all messages',
									'woocommerce-admin'
								) }
							</Button>
						</li>
					</ul>
				) }
			/>
		);
	}

	renderDismissConfirmationModal() {
		const { note } = this.props;
		const { dismissType } = this.state;
		const getDismissButtonFromActions = () => {
			if ( ! note.actions ) {
				return [];
			}
			return (
				<NoteAction
					key={ note.id }
					noteId={ note.id }
					label={ __( "Yes, I'm sure", 'woocommerce-admin' ) }
					actionCallback={ this.closeDismissModal }
					dismiss={ true }
					dismissType={ dismissType }
				/>
			);
		};
		return (
			<Modal
				title={
					<Fragment>
						{ __( 'Are you sure?', 'woocommerce-admin' ) }
					</Fragment>
				}
				onRequestClose={ () => this.closeDismissModal() }
				className="woocommerce-inbox-dismiss-confirmation_modal"
			>
				<div className="woocommerce-inbox-dismiss-confirmation_wrapper">
					<p>
						{ __(
							'Dismissed messages cannot be viewed again',
							'woocommerce-admin'
						) }
					</p>
					<div className="woocommerce-inbox-dismiss-confirmation_buttons">
						<Button
							isDefault
							onClick={ () => this.closeDismissModal() }
						>
							{ __( 'Cancel', 'woocommerce-admin' ) }
						</Button>
						{ getDismissButtonFromActions() }
					</div>
				</div>
			</Modal>
		);
	}

	render() {
		const { lastRead, note } = this.props;
		const { isDismissModalOpen } = this.state;

		if ( note.is_deleted ) {
			return null;
		}

		const getButtonsFromActions = () => {
			if ( ! note.actions ) {
				return [];
			}
			return note.actions.map( ( action ) => (
				<NoteAction
					key={ note.id }
					noteId={ note.id }
					action={ action }
				/>
			) );
		};

		const unread =
			! lastRead ||
			! note.date_created_gmt ||
			new Date( note.date_created_gmt + 'Z' ).getTime() > lastRead;
		const actions = getButtonsFromActions( note );
		const actionsList = Array.isArray( actions ) ? actions : [ actions ];
		const date = note.date_created;
		const hasImage = note.layout !== 'plain';
		const cardClassName = classnames(
			'woocommerce-inbox-message',
			note.layout,
			{
				'message-is-unread': unread,
			}
		);

		return (
			<VisibilitySensor onChange={ this.onVisible }>
				<section className={ cardClassName }>
					{ hasImage && (
						<div className="woocommerce-inbox-message__image">
							<img src={ note.image } alt="" />
						</div>
					) }
					<div className="woocommerce-inbox-message__wrapper">
						<div className="woocommerce-inbox-message__content">
							{ date && (
								<span className="woocommerce-inbox-message__date">
									{ moment.utc( date ).fromNow() }
								</span>
							) }
							<H className="woocommerce-inbox-message__title">
								{ note.title }
							</H>
							<Section className="woocommerce-inbox-message__text">
								<span
									dangerouslySetInnerHTML={ sanitizeHTML(
										note.content
									) }
									ref={ this.bodyNotificationRef }
								/>
							</Section>
						</div>
						<div className="woocommerce-inbox-message__actions">
							{ actions && (
								<Fragment>
									{ actionsList.map( ( item, i ) =>
										cloneElement( item, { key: i } )
									) }
								</Fragment>
							) }
							{ this.renderDismissButton() }
						</div>
					</div>
					{ isDismissModalOpen &&
						this.renderDismissConfirmationModal() }
				</section>
			</VisibilitySensor>
		);
	}
}

InboxNoteCard.propTypes = {
	screen: PropTypes.string,
	note: PropTypes.shape( {
		id: PropTypes.number,
		status: PropTypes.string,
		title: PropTypes.string,
		content: PropTypes.string,
		date_created: PropTypes.string,
		date_created_gmt: PropTypes.string,
		actions: PropTypes.arrayOf(
			PropTypes.shape( {
				id: PropTypes.number.isRequired,
				url: PropTypes.string,
				label: PropTypes.string.isRequired,
				primary: PropTypes.bool.isRequired,
			} )
		),
		layout: PropTypes.string,
		image: PropTypes.string,
		is_deleted: PropTypes.bool,
	} ),
	lastRead: PropTypes.number,
};

export default InboxNoteCard;
