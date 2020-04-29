/**
 * External dependencies
 */
import { Component, createRef } from '@wordpress/element';
import { Button } from '@wordpress/components';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import './style.scss';

class Layout extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			inboxHeight: this.getInboxHeight(),
			showInbox: true,
		};
		this.inbox = createRef();

		this.handleScroll = this.handleScroll.bind( this );
	}

	getInboxHeight() {
		if ( window.innerWidth <= 782 ) {
			return 'auto';
		}
		const scroll = window.scrollY;
		const base = 90;
		return `calc(100vh ${ base - scroll < 0 ? '+' : '-' } ${ Math.abs(
			base - scroll
		) }px)`;
	}

	componentDidMount() {
		window.addEventListener( 'scroll', this.handleScroll );
		this.inbox.current.addEventListener( 'scroll', this.handleInboxScroll );
	}

	componentWillUnmount() {
		this.inbox.current.removeEventListener(
			'scroll',
			this.handleInboxScroll
		);
		window.removeEventListener( 'scroll', this.handleScroll );
		window.cancelAnimationFrame( this.handle );
	}

	handleScroll( e ) {
		if ( e.target === window.document ) {
			this.handle = window.requestAnimationFrame( () => {
				this.setState( {
					inboxHeight: this.getInboxHeight(),
				} );
			} );
		}
	}

	handleInboxScroll( event ) {
		const limit = 20;
		const header = window.document.getElementById(
			'woocommerce-layout__header'
		);
		const threshold = header.offsetTop;
		const isInboxScrolled = event.target.scrollTop > limit;
		if ( isInboxScrolled ) {
			if ( header ) {
				header.classList.add( 'is-scrolled' );
			}
		} else if (
			! isInboxScrolled &&
			window.pageYOffset < threshold - limit
		) {
			header.classList.remove( 'is-scrolled' );
		}
	}
	s;

	render() {
		const { inboxHeight, showInbox } = this.state;
		const inboxStyles = {
			maxHeight: inboxHeight,
		};
		return (
			<div
				className={ classnames( 'woocommerce-homepage', {
					hasInbox: showInbox,
				} ) }
			>
				{ showInbox && (
					<div
						className="woocommerce-homepage-column is-inbox"
						style={ inboxStyles }
						ref={ this.inbox }
					>
						<div className="temp-content">
							<Button
								isPrimary
								onClick={ () => {
									this.setState( { showInbox: false } );
								} }
							>
								Dismiss All
							</Button>
						</div>
						<div className="temp-content" />
						<div className="temp-content" />
						<div className="temp-content" />
						<div className="temp-content" />
						<div className="temp-content" />
						<div className="temp-content" />
					</div>
				) }
				<div className="woocommerce-homepage-column">
					<div className="temp-content" />
					<div className="temp-content" />
					<div className="temp-content" />
				</div>
			</div>
		);
	}
}

export default Layout;
