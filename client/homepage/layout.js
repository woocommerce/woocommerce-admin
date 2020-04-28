/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
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
	}

	componentWillUnmount() {
		window.removeEventListener( 'scroll', this.handleScroll );
	}

	handleScroll( e ) {
		if ( e.target === window.document ) {
			this.setState( {
				inboxHeight: this.getInboxHeight(),
			} );
		}
	}

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
