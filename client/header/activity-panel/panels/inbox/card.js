/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { cloneElement, Component, Fragment } from '@wordpress/element';
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
	}

	// Trigger a view Tracks event when the note is seen.
	onVisible( isVisible ) {
		if ( isVisible && ! this.hasBeenSeen ) {
			const { note } = this.props;

			recordEvent( 'inbox_note_view', {
				note_content: note.content,
				note_name: note.name,
				note_title: note.title,
				note_type: note.type,
			} );

			this.hasBeenSeen = true;
		}
	}

	openDismissModal( type, onToggle ) {
		this.setState( {
			isDismissModalOpen: true,
			dismissType: type,
		} );
		onToggle();
	}

	closeDismissModal() {
		this.setState( {
			isDismissModalOpen: false,
		} );
	}

	handleBlur( event, onToggle ) {
		const targetIsRenderedContent = event.relatedTarget
			? event.relatedTarget.className.includes(
					'woocommerce-admin-dismiss-notification'
			  )
			: false;
		if ( targetIsRenderedContent ) {
			event.preventDefault();
		} else {
			onToggle();
		}
	}

	renderDismissButton() {
		return (
			<Dropdown
				position="bottom right"
				renderToggle={ ( { onToggle } ) => (
					<Button
						isTertiary
						onClick={ onToggle }
						onBlur={ ( event ) =>
							this.handleBlur( event, onToggle )
						}
					>
						{ __( 'Dismiss', 'woocommerce-admin' ) }
					</Button>
				) }
				focusOnMount={ false }
				popoverProps={ { noArrow: true } }
				renderContent={ ( { onToggle } ) => (
					<ul>
						<li>
							<Button
								className="woocommerce-admin-dismiss-notification"
								onClick={ () =>
									this.openDismissModal( 'this', onToggle )
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
								className="woocommerce-admin-dismiss-notification"
								onClick={ () =>
									this.openDismissModal( 'all', onToggle )
								}
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

	getDismissConfirmationButton() {
		const { note } = this.props;
		const { dismissType } = this.state;
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
	}

	renderDismissConfirmationModal() {
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
						{ this.getDismissConfirmationButton() }
					</div>
				</div>
			</Modal>
		);
	}

	render() {
		const { lastRead, note } = this.props;
		const { isDismissModalOpen } = this.state;
		const {
			actions: noteActions,
			content,
			date_created: dateCreated,
			date_created_gmt: dateCreatedGmt,
			id: noteId,
			image,
			layout,
			title,
		} = note;

		if ( note.is_deleted ) {
			return null;
		}

		const getButtonsFromActions = () => {
			if ( ! noteActions ) {
				return [];
			}
			return noteActions.map( ( action ) => (
				<NoteAction
					key={ noteId }
					noteId={ noteId }
					action={ action }
				/>
			) );
		};

		const unread =
			! lastRead ||
			! dateCreatedGmt ||
			new Date( dateCreatedGmt + 'Z' ).getTime() > lastRead;
		const actions = getButtonsFromActions( note );
		const actionsList = Array.isArray( actions ) ? actions : [ actions ];
		const date = dateCreated;
		const hasImage = layout !== 'plain' && layout !== '';
		const cardClassName = classnames( 'woocommerce-inbox-message', layout, {
			'message-is-unread': unread,
		} );

		return (
			<VisibilitySensor onChange={ this.onVisible }>
				<section className={ cardClassName }>
					{ hasImage && (
						<div className="woocommerce-inbox-message__image">
							<img src={ image } alt="" />
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
								{ title }
							</H>
							<Section className="woocommerce-inbox-message__text">
								<span
									dangerouslySetInnerHTML={ sanitizeHTML(
										content
									) }
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
