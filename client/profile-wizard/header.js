/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { filter, isEqual } from 'lodash';
import { Stepper } from '@woocommerce/components';
import { updateQueryString } from '@woocommerce/navigation';

/**
 * Internal dependencies
 */
import UnsavedChangesModal from './unsaved-changes-modal';
export default class ProfileWizardHeader extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			showUnsavedChangesModal: false,
		};
	}

	shouldWarnForUnsavedChanges( step ) {
		if ( typeof this.props.stepValueChanges[ step ] !== 'undefined' ) {
			const hasFormValueChanged = ! isEqual(
				this.props.stepValueChanges[ step ].initialValues,
				this.props.stepValueChanges[ step ].currentValues
			);
			if ( hasFormValueChanged ) {
				return true;
			}
		}
		return false;
	}

	findCurrentStep() {
		return this.props.steps.find(
			( s ) => s.key === this.props.currentStep
		);
	}

	saveCurrentStepChanges() {
		const currentStep = this.findCurrentStep();
		if ( ! currentStep ) {
			return null;
		}
		const stepValueChanges = this.props.stepValueChanges[ currentStep.key ];
		if ( stepValueChanges.onSave ) {
			stepValueChanges.onSave();
		}
	}

	renderStepper() {
		const { currentStep, steps } = this.props;
		const visibleSteps = filter( steps, ( step ) => !! step.label );
		const currentStepIndex = visibleSteps.findIndex(
			( step ) => step.key === currentStep
		);

		visibleSteps.map( ( step, index ) => {
			const previousStep = visibleSteps[ index - 1 ];

			if ( index < currentStepIndex ) {
				step.isComplete = true;
			}

			if ( ! previousStep || previousStep.isComplete ) {
				step.onClick = ( key ) => {
					if ( this.shouldWarnForUnsavedChanges( currentStep ) ) {
						this.setState( { showUnsavedChangesModal: true } );
					} else {
						updateQueryString( { step: key } );
					}
				};
			}
			return step;
		} );

		return <Stepper steps={ visibleSteps } currentStep={ currentStep } />;
	}

	render() {
		const currentStep = this.findCurrentStep();

		if ( ! currentStep || ! currentStep.label ) {
			return null;
		}

		return (
			<div className="woocommerce-profile-wizard__header">
				{ this.state.showUnsavedChangesModal && (
					<UnsavedChangesModal
						onClose={ () => {
							this.setState( { showUnsavedChangesModal: false } );
							this.props.goToNextStep();
						} }
						onSave={ () => {
							this.saveCurrentStepChanges();
							this.setState( { showUnsavedChangesModal: false } );
						} }
					/>
				) }
				{ this.renderStepper() }
			</div>
		);
	}
}
