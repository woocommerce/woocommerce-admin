/** @format */
/**
 * External dependencies
 */
import classnames from 'classnames';
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';

/**
 * A stepper component to indicate progress in a set number of steps.
 */
class Stepper extends Component {
	render() {
        const { currentStep, steps } = this.props;
		const currentIndex = steps.findIndex( s => currentStep === s.key );

		return (
			<div className="woocommerce-stepper">
                { steps.map( ( step, i ) => {
                    const className = classnames( 'woocommerce-stepper__step', {
                        'is-active': step.key === currentStep,
                        'is-complete': currentIndex > i,
                    } );

                    return (
                        <div
							className={ className }
							key={ step.key }
                        >
							<span className="woocommerce-stepper_step-number">
								{ i + 1 }
							</span>
							<span className="woocommerce-stepper_step-label">
								{ step.label }
							</span>
                        </div>
                    );
                } ) }
			</div>
		);
	}
}

Stepper.propTypes = {
	/**
	 * An array of steps used.
	 */
	steps: PropTypes.arrayOf(
		PropTypes.shape( {
			/**
			 * Key used to identify step.
			 */
			key: PropTypes.string,
			/**
			 * Label displayed in stepper.
			 */
            label: PropTypes.string,
		} )
	),
	/**
	 * The current step's key.
	 */
	currentStep: PropTypes.string,
};

export default Stepper;
