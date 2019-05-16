/** @format */
/**
 * External dependencies
 */
import classnames from 'classnames';
import { Component, Fragment } from '@wordpress/element';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import CheckIcon from './check-icon';

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
					const isComplete = currentIndex > i;
					const isActive = step.key === currentStep;
                    const className = classnames( 'woocommerce-stepper__step', {
                        'is-active': isActive,
                        'is-complete': isComplete,
                    } );

                    return (
						<Fragment>
							<div
								className={ className }
								key={ step.key }
							>
								<div className="woocommerce-stepper__step-icon">
									<span class="woocommerce-stepper__step-number">{ i + 1 }</span>
									<CheckIcon />
								</div>
								<span className="woocommerce-stepper_step-label">
									{ step.label }
								</span>
							</div>
							<div className="woocommerce-stepper__step-divider" />
						</Fragment>
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
