/** @format */
/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { forEach } from 'lodash';
import { IconButton, Dropdown } from '@wordpress/components';

class WordPressNotices extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
			notices: null,
		};
	}

	componentDidMount() {
		const noticeList = document.getElementById( 'wpadmin-notice-list' );
		const notices = noticeList.getElementsByClassName( 'notice' );
		const count = notices.length;

		console.log( notices );

		// See https://reactjs.org/docs/react-component.html#componentdidmount
		/* eslint-disable react/no-did-mount-set-state */
		this.setState( Object.assign( {}, { notices, count } ) );
		/* eslint-enable react/no-did-mount-set-state */
	}

	renderNotices() {
		let noticeOutput;
		forEach( this.state.notices, notice => {
			noticeOutput += ( notice && notice.innerHTML ) || '';
		} );
		return <div dangerouslySetInnerHTML={ { __html: noticeOutput } } />;
	}

	render() {
		const { count } = this.state;
		return (
			<div>
				<Dropdown
					position="bottom left"
					renderToggle={ ( { isOpen, onToggle } ) => (
						<IconButton
							onClick={ onToggle }
							className="woo-dash__header-button"
							icon="wordpress-alt"
							label={ sprintf( __( 'View %d WordPress Notices', 'woo-dash' ), count ) }
							aria-expanded={ isOpen }
						/>
					) }
					renderContent={ () => this.renderNotices() }
				/>
			</div>
		);
	}
}

export default WordPressNotices;
