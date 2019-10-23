/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';
import Gridicon from 'gridicons';

/**
 * Internal dependencies
 */
import { ActivityCard } from '../../activity-card';
import NoteAction from './action';
import sanitizeHTML from 'lib/sanitize-html';
import classnames from 'classnames';

class InboxNoteCard extends Component {
	render() {
		const { lastRead, note } = this.props;

		const getButtonsFromActions = () => {
			if ( ! note.actions ) {
				return [];
			}
			return note.actions.map( action => <NoteAction noteId={ note.id } action={ action } /> );
		};

		return (
			<ActivityCard
				key={ note.id }
				className={ classnames( 'woocommerce-inbox-activity-card', {
					actioned: 'unactioned' !== note.status,
				} ) }
				title={ note.title }
				date={ note.date_created }
				icon={ <Gridicon icon={ note.icon } size={ 48 } /> }
				unread={
					! lastRead ||
					! note.date_created_gmt ||
					new Date( note.date_created_gmt + 'Z' ).getTime() > lastRead
				}
				actions={ getButtonsFromActions( note ) }
			>
				<span dangerouslySetInnerHTML={ sanitizeHTML( note.content ) } />
			</ActivityCard>
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
	} ),
	lastRead: PropTypes.number,
};

export default InboxNoteCard;
