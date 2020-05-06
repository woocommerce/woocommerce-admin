/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';
import Gridicon from 'gridicons';
import VisibilitySensor from 'react-visibility-sensor';

/**
 * Internal dependencies
 */
import { ActivityCard } from '../../activity-card';
import NoteAction from './action';
import sanitizeHTML from 'lib/sanitize-html';
import classnames from 'classnames';
import { recordEvent } from 'lib/tracks';

class InboxNoteCard extends Component {
	constructor( props ) {
		super( props );
		this.onVisible = this.onVisible.bind( this );
		this.hasBeenSeen = false;
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
				note_icon: note.icon,
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

	closeDismissModal() {
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

		if ( note.is_deleted ) {
			return null;
		}

		const getButtonsFromActions = () => {
			if ( ! note.actions ) {
				return [];
			}
			return note.actions.map( ( action ) => (
				<NoteAction key={ note.id } noteId={ note.id } action={ action } />
			) );
		};

		return (
			<VisibilitySensor onChange={ this.onVisible }>
				<ActivityCard
					className={ classnames( 'woocommerce-inbox-activity-card', {
						actioned: note.status !== 'unactioned',
					} ) }
					title={ note.title }
					date={ note.date_created }
					icon={ <Gridicon icon={ note.icon } size={ 48 } /> }
					unread={
						! lastRead ||
						! note.date_created_gmt ||
						new Date( note.date_created_gmt + 'Z' ).getTime() >
							lastRead
					}
					actions={ getButtonsFromActions( note ) }
				>
					<span
						dangerouslySetInnerHTML={ sanitizeHTML( note.content ) }
					/>
				</ActivityCard>
			</VisibilitySensor>
		);
	}
}

InboxNoteCard.propTypes = {
	note: PropTypes.shape( {
		id: PropTypes.number,
		status: PropTypes.string,
		title: PropTypes.string,
		icon: PropTypes.string,
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
