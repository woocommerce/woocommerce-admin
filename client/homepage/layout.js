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
			showInbox: true,
			isContentSticky: false,
		};

		this.maybeStickContent = this.maybeStickContent.bind( this );
		this.content = createRef();
	}

	componentDidMount() {
		this.maybeStickContent();
		window.addEventListener( 'resize', this.maybeStickContent );
	}

	componentWillUnmount() {
		window.removeEventListener( 'resize', this.maybeStickContent );
	}

	maybeStickContent() {
		const { isContentSticky, showInbox } = this.state;
		const content = this.content.current;
		const { bottom } = content.getBoundingClientRect();
		const shouldBeSticky = showInbox && bottom < window.innerHeight;

		// Only rerender if needed.
		if ( isContentSticky !== shouldBeSticky ) {
			this.setState( {
				isContentSticky: shouldBeSticky,
			} );
		}
	}

	render() {
		const { showInbox, isContentSticky } = this.state;
		return (
			<div
				className={ classnames( 'woocommerce-homepage', {
					hasInbox: showInbox,
				} ) }
			>
				{ showInbox && (
					<div className="woocommerce-homepage-column is-inbox">
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
				<div
					className="woocommerce-homepage-column"
					ref={ this.content }
					style={ {
						position: isContentSticky ? 'sticky' : 'static',
					} }
				>
					<div className="temp-content" />
					<div className="temp-content" />
				</div>
			</div>
		);
	}
}

export default Layout;
