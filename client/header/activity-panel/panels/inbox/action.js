/** @format */
/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withDispatch } from '@wordpress/data';
import PropTypes from 'prop-types';

/**
 * WooCommerce dependencies
 */
import { ADMIN_URL as adminUrl } from '@woocommerce/wc-admin-settings';

/**
 * Internal dependencies
 */

class InboxNoteAction extends Component {
	constructor( props ) {
		super( props );

		this.handleActionClick = this.handleActionClick.bind( this );
	}

	handleActionClick( event ) {
		const { action, noteId, triggerNoteAction } = this.props;
		const href = event.target.href || '';

		if ( href.length && ! href.startsWith( adminUrl ) ) {
			event.preventDefault();
			window.open( href, '_blank' );
		}

		triggerNoteAction( noteId, action.id );
	}

	render() {
		const { action } = this.props;
		return (
			<Button
				isDefault
				isPrimary={ action.primary }
				href={ action.url || undefined }
				onClick={ e => this.handleActionClick( e ) }
			>
				{ action.label }
			</Button>
		);
	}
}

InboxNoteAction.propTypes = {
	noteId: PropTypes.number,
	action: PropTypes.shape( {
		id: PropTypes.number.isRequired,
		url: PropTypes.string,
		label: PropTypes.string.isRequired,
		primary: PropTypes.bool.isRequired,
	} ),
};

export default compose(
	withDispatch( dispatch => {
		const { triggerNoteAction } = dispatch( 'wc-api' );

		return {
			triggerNoteAction,
		};
	} )
)( InboxNoteAction );
