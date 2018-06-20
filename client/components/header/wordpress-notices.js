/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { IconButton } from '@wordpress/components';
import { sprintf, _n } from '@wordpress/i18n';

class WordPressNotices extends Component {
	constructor() {
		super();

		this.state = {
			count: 0,
			notices: null,
			noticesOpen: false,
			hasEventListeners: false,
		};

		this.onToggle = this.onToggle.bind( this );
		this.updateCount = this.updateCount.bind( this );
		this.showNotices = this.showNotices.bind( this );
		this.hideNotices = this.hideNotices.bind( this );
		this.onToggle = this.onToggle.bind( this );
		this.initialize = this.initialize.bind( this );
	}

	componentDidMount() {
		this.removeExtraWpHeaderEnds();

		// Wait until the document is fully loaded to make sure all notices have been injected correctly
		if ( 'complete' === document.readyState ) {
			this.initialize();
		} else {
			window.addEventListener( 'DOMContentLoaded', this.initialize );
		}
	}

	// Some existing WooCommerce pages already have a wp-header-end appended. This can cause multiple notice areas to display.
	removeExtraWpHeaderEnds() {
		const headerEnds = document.getElementsByClassName( 'wp-header-end' );
		for ( let i = 1; i <= headerEnds.length; i++ ) {
			if ( headerEnds[ i ] ) {
				headerEnds[ i ].remove();
			}
		}
	}

	initialize() {
		const notices = document.getElementById( 'wpadmin-notice-list' );
		const noticesOpen = notices.classList.contains( 'woocommerce__admin-notice-list-show' );
		const targetArea = document.getElementById( 'woocommerce-wp-notices' );

		let count = 0;
		for ( let i = 0; i <= notices.children.length; i++ ) {
			const notice = notices.children[ i ];
			if ( ! notice ) {
				continue;
			}

			if ( ! this.shouldCollapseNotice( notice ) ) {
				targetArea.insertAdjacentElement( 'afterbegin', notice );
			} else {
				count++;
			}
		}
		count = count - 1; // Remove 1 for `wp-header-end`

		this.setState( { count, notices, noticesOpen } );

		// Move WordPress notifications into the main WooDash body
		targetArea.insertAdjacentElement( 'afterbegin', notices );
	}

	componentWillUnmount() {
		document
			.getElementById( 'wpbody-content' )
			.insertAdjacentElement( 'afterbegin', this.state.notices );

		const dismissNotices = document.getElementsByClassName( 'notice-dismiss' );
		Object.keys( dismissNotices ).forEach( function( key ) {
			dismissNotices[ key ].removeEventListener( 'click', this.updateCount );
		}, this );

		this.setState( { noticesOpen: false, hasEventListeners: false } );
		this.hideNotices();
	}

	// Some messages should not be displayed in the toggle, like Jetpack JITM messages or update/success messages
	shouldCollapseNotice( element ) {
		if ( element.classList.contains( 'jetpack-jitm-message' ) ) {
			return false;
		}

		if ( element.classList.contains( 'hidden' ) ) {
			return false;
		}

		if ( 'message' === element.id && element.classList.contains( 'notice' ) ) {
			return false;
		}

		return true;
	}

	updateCount() {
		this.setState( { count: this.state.count - 1 } );
	}

	maybeAddDismissEvents() {
		if ( this.state.hasEventListeners ) {
			return;
		}

		const dismiss = document.getElementsByClassName( 'notice-dismiss' );
		Object.keys( dismiss ).forEach( function( key ) {
			dismiss[ key ].addEventListener( 'click', this.updateCount );
		}, this );

		this.setState( { hasEventListeners: true } );
	}

	showNotices() {
		this.state.notices.className = 'woocommerce__admin-notice-list-show';
	}

	hideNotices() {
		this.state.notices.className = 'woocommerce__admin-notice-list-hide';
	}

	onToggle() {
		const { noticesOpen } = this.state;

		if ( noticesOpen ) {
			this.hideNotices();
		} else {
			this.showNotices();
			this.maybeAddDismissEvents();
		}

		this.setState( { noticesOpen: ! noticesOpen } );
	}

	render() {
		const { count, noticesOpen } = this.state;

		if ( count < 1 ) {
			return null;
		}

		return (
			<IconButton
				onClick={ this.onToggle }
				icon="wordpress-alt"
				label={ sprintf(
					_n( 'View %d WordPress Notice', 'View %d WordPress Notices', count, 'woo-dash' ),
					count
				) }
				aria-expanded={ noticesOpen }
			/>
		);
	}
}

export default WordPressNotices;
