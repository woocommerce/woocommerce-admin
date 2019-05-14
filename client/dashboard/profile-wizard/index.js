/** @format */
/**
 * External dependencies
 */
import { Component, createElement } from '@wordpress/element';

/**
 * Internal depdencies
 */
import Start from './steps/start';
import './style.scss';

const getSteps = () => {
	const steps = [];

	steps.push( {
		key: 'start',
		container: Start,
	} );

	return steps;
};

export default class ProfileWizard extends Component {
	componentDidMount() {
		document.body.classList.add( 'woocommerce-profile-wizard__body' );
	}

	componentWillUnmount() {
		document.body.classList.remove( 'woocommerce-profile-wizard__body' );
	}

	getStep() {
		const { step } = this.props.query;
		const currentStep = find( getSteps(), { key: step } );

		if ( ! currentStep ) {
			return getSteps()[ 0 ];
		}

		return currentStep;
	}

	render() {
		const { query } = this.props;
		const step = this.getStep();

		return createElement( step.container, { query } );
	}
}
