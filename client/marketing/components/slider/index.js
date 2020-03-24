/**
 * External dependencies
 */
import { Component, createRef, Fragment } from '@wordpress/element';
import classnames from 'classnames';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import './style.scss'

class Slider extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			height: null,
		};
		this.container = createRef();
		this.onExited = this.onExited.bind( this );
		this.onEnter = this.onEnter.bind( this );
		this.updateSliderHeight = this.updateSliderHeight.bind( this );
	}

	/**
	 * Update the slider height on Resize
	 */
	componentDidMount() {
		// Update the slider height on Resize
		window.addEventListener( 'resize', this.updateSliderHeight );
	}

	componentWillUnmount() {
		window.removeEventListener( 'resize', this.updateSliderHeight )
	}

	updateSliderHeight() {
		const slide = this.container.current.getElementsByClassName( 'woocommerce-marketing-slider__slide' )[ 0 ];
		this.setState( { height: slide.clientHeight } );
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
		this.setState( { height: newSlide.clientHeight } );
	}

	render() {
		const { children, animationKey, animate } = this.props;
		const { height } = this.state;
		const containerClasses = classnames(
			'woocommerce-marketing-slider',
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
						// timeout should be slightly longer than the CSS animation
						timeout={ 320 }
						classNames="slide"
						key={ animationKey }
						onExited={ this.onExited }
						onEnter={ this.onEnter }
					>
						<div className="woocommerce-marketing-slider__slide">{ children }</div>
					</CSSTransition>
				</TransitionGroup>
			</div>
		);
	}
}

Slider.propTypes = {
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

export default Slider;
