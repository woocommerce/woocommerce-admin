/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { intersection, noop } from 'lodash';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import Tabs from './slotfill/tabs';

class WordPressNotices extends Component {
	constructor() {
		super();
		this.state = {
			count: null,
			notices: null,
			screenLinks: null,
			screenMeta: null,
			hasEventListeners: false,
		};

		this.updateCount = this.updateCount.bind( this );
		this.showNotices = this.showNotices.bind( this );
		this.hideNotices = this.hideNotices.bind( this );
		this.initialize = this.initialize.bind( this );
		this.toggleNotices = this.toggleNotices.bind( this );
	}

	componentDidMount() {
		this.handleWooCommerceEmbedPage();
		if ( 'complete' === document.readyState ) {
			this.initialize();
		} else {
			window.addEventListener( 'DOMContentLoaded', this.initialize );
		}
	}

	componentDidUpdate() {
		if ( 'wpnotices' !== this.props.currentTab ) {
			this.hideNotices();
		}
	}

	handleWooCommerceEmbedPage() {
		if ( ! document.body.classList.contains( 'woocommerce-embed-page' ) ) {
			return;
		}

		// Existing WooCommerce pages already have a designted area for notices, using wp-header-end
		// See https://github.com/WordPress/WordPress/blob/f6a37e7d39e2534d05b9e542045174498edfe536/wp-admin/js/common.js#L737
		// We want to move most notices, but keep displaying others (like success notice) where they already are
		// this renames the element in-line, so we can target it later.
		const headerEnds = document.getElementsByClassName( 'wp-header-end' );
		for ( let i = 0; i < headerEnds.length; i++ ) {
			const headerEnd = headerEnds.item( i );
			if ( 'woocommerce-layout__notice-catcher' !== headerEnd.id ) {
				headerEnd.className = '';
				headerEnd.id = 'wp__notice-list-uncollapsed';
			}
		}
	}

	initialize() {
		const notices = document.getElementById( 'wp__notice-list' );
		const screenMeta = document.getElementById( 'screen-meta' );
		const screenLinks = document.getElementById( 'screen-meta-links' );

		const collapsedTargetArea = document.getElementById( 'woocommerce-layout__notice-list' );
		const uncollapsedTargetArea =
			document.getElementById( 'wp__notice-list-uncollapsed' ) ||
			document.getElementById( 'ajax-response' ) ||
			document.getElementById( 'woocommerce-layout__notice-list' );

		let count = 0;
		for ( let i = 0; i <= notices.children.length; i++ ) {
			const notice = notices.children[ i ];
			if ( ! notice ) {
				continue;
			} else if ( 0 === notice.innerHTML.length ) {
				// Ignore empty elements in this part of the DOM.
				continue;
			} else if ( ! this.shouldCollapseNotice( notice ) ) {
				uncollapsedTargetArea.insertAdjacentElement( 'afterend', notice );
			} else {
				count++;
			}
		}

		this.setState( { count, notices, screenMeta, screenLinks } );

		// Move collapsed WordPress notifications into the main wc-admin body
		collapsedTargetArea.insertAdjacentElement( 'beforeend', notices );
	}

	componentWillUnmount() {
		document
			.getElementById( 'wpbody-content' )
			.insertAdjacentElement( 'afterbegin', this.state.notices );

		const dismissNotices = document.getElementsByClassName( 'notice-dismiss' );
		Object.keys( dismissNotices ).forEach( function( key ) {
			dismissNotices[ key ].removeEventListener( 'click', this.updateCount );
		}, this );

		this.setState( { hasEventListeners: false } );
		this.hideNotices();
	}

	// Some messages should not be displayed in the toggle, like Jetpack JITM messages or update/success messages
	shouldCollapseNotice( element ) {
		// element id, [ classes to include ], [ classes to exclude ]
		const noticesToHide = [
			[ null, [ 'jetpack-jitm-message' ] ],
			[ 'woocommerce_errors', null ],
			[ null, [ 'hidden' ] ],
			[ 'message', [ 'notice', 'updated' ], [ 'woocommerce-message' ] ],
		];

		for ( let i = 0; i < noticesToHide.length; i++ ) {
			const [ id, includeClasses, excludeClasses ] = noticesToHide[ i ];

			const idMatch = null === id || id === element.id;
			let classMatch = true;

			if ( Array.isArray( includeClasses ) ) {
				classMatch = 0 < intersection( element.classList, includeClasses ).length;
			}

			if ( Array.isArray( excludeClasses ) ) {
				classMatch = classMatch && 0 === intersection( element.classList, excludeClasses ).length;
			}

			if ( idMatch && classMatch ) {
				return false;
			}
		}

		return true;
	}

	updateCount() {
		const updatedCount = this.state.count - 1;
		this.setState( { count: updatedCount } );

		if ( updatedCount < 1 ) {
			// Close the panel since all of the notices have been closed.
			this.props.togglePanel( 'wpnotices' );
		}
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
		const { notices, screenLinks, screenMeta } = this.state;
		notices.classList.add( 'woocommerce-layout__notice-list-show' );
		notices.classList.remove( 'woocommerce-layout__notice-list-hide' );
		screenMeta && screenMeta.classList.add( 'is-hidden-by-notices' );
		screenLinks && screenLinks.classList.add( 'is-hidden-by-notices' );
	}

	hideNotices() {
		const { notices, screenLinks, screenMeta } = this.state;
		notices.classList.add( 'woocommerce-layout__notice-list-hide' );
		notices.classList.remove( 'woocommerce-layout__notice-list-show' );
		screenMeta && screenMeta.classList.remove( 'is-hidden-by-notices' );
		screenLinks && screenLinks.classList.remove( 'is-hidden-by-notices' );
	}

	toggleNotices() {
		const { currentTab } = this.props;

		if ( 'wpnotices' === currentTab ) {
			this.hideNotices();
		} else {
			this.showNotices();
		}
	}

	render() {
		const { count } = this.state;

		return (
			<Tabs.Item
				name="wpnotices"
				title={ __( 'Notices', 'woocommerce-admin' ) }
				icon="my-sites"
				unread={ null === count || 0 < count }
				customTabClick={ this.toggleNotices }
			/>
		);
	}
}

WordPressNotices.propTypes = {
	currentTab: PropTypes.string,
	togglePanel: PropTypes.func,
};

WordPressNotices.defaultProps = {
	currentTab: '',
	togglePanel: noop,
};

export default WordPressNotices;
