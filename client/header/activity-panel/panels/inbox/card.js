/**
 * External dependencies
 */
import { cloneElement, Component, Fragment } from '@wordpress/element';
import { Button } from '@wordpress/components';
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

	render() {
		const { lastRead, note } = this.props;

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
							<Button isTertiary>Dismiss</Button>
						</div>
					</div>
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
	} ),
	lastRead: PropTypes.number,
};

export default InboxNoteCard;
