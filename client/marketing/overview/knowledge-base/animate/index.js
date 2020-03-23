/**
 * External dependencies
 */
import { Component, createRef } from '@wordpress/element';
import classnames from 'classnames';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import './style.scss'

class Animate extends Component {
	constructor() {
		super();
		this.state = {
			animate: null,
			height: null,
		};
		this.container = createRef();
		this.onExited = this.onExited.bind( this );
		this.onEnter = this.onEnter.bind( this );
	}

	onExited() {
		const { onExited } = this.props;
		if ( onExited ) {
			onExited( this.container.current );
		}
	}

	/**
	 * Fix slider height before a slide enters because slides are absolutely position
	 */
	onEnter() {
		const newSlide = this.container.current.getElementsByClassName( 'slide-enter' )[ 0 ];
		this.setState( { height: newSlide.offsetHeight } );
	}

	render() {
		const { children, animationKey, animate } = this.props;
		const { height } = this.state;
		const containerClasses = classnames(
			'woocommerce-slider-animation',
			animate && `animate-${ animate }`
		);
		const style = {};
		if ( height ) {
			style.height = height;
		}
		return (
			<div className={ containerClasses }
				ref={ this.container }
				style={ style }>
				<TransitionGroup>
					<CSSTransition
						timeout={ 600 }
						classNames="slide"
						key={ animationKey }
						{ ...this.props }
						onExited={ this.onExited }
						onEnter={ this.onEnter }
					>
						{ ( status ) => children( { status } ) }
					</CSSTransition>
				</TransitionGroup>
			</div>
		);
	}
}

Animate.propTypes = {
	/**
	 * A function returning rendered content with argument status, reflecting `CSSTransition` status.
	 */
	children: PropTypes.func.isRequired,
	/**
	 * A unique identifier for each slideable page.
	 */
	animationKey: PropTypes.any.isRequired,
	/**
	 * null, 'left', 'right', to designate which direction to slide on a change.
	 */
	animate: PropTypes.oneOf( [ null, 'left', 'right' ] ),
	/**
	 * A function to be executed after a transition is complete, passing the containing ref as the argument.
	 */
	onExited: PropTypes.func,
};

export default Animate;
