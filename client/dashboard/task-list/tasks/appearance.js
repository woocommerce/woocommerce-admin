/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from 'newspack-components';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { filter } from 'lodash';
import { withDispatch } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import { Card, Stepper } from '@woocommerce/components';
import { getHistory, getNewPath } from '@woocommerce/navigation';

class Appearance extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			stepIndex: 0,
		};

		this.completeStep = this.completeStep.bind( this );
	}

	completeStep() {
		const { stepIndex } = this.state;
		const nextStep = this.getSteps()[ stepIndex + 1 ];

		if ( nextStep ) {
			this.setState( { stepIndex: stepIndex + 1 } );
		} else {
			getHistory().push( getNewPath( {}, '/', {} ) );
		}
	}

	getSteps() {
		const steps = [
			{
				key: 'import',
				label: __( 'Import demo products', 'woocommerce-admin' ),
				description: __(
					'We’ll add some products that it will make it easier to see what your store looks like.',
					'woocommerce-admin'
				),
				content: (
					<Fragment>
						<Button isPrimary>{ __( 'Import products', 'woocommerce-admin' ) }</Button>
						<Button onClick={ () => this.completeStep() }>
							{ __( 'Skip', 'woocommerce-admin' ) }
						</Button>
					</Fragment>
				),
				visible: true,
			},
			{
				key: 'homepage',
				label: __( 'Create a custom homepage', 'woocommerce-admin' ),
				description: __(
					'Create a new homepage and customize it to suit your needs',
					'woocommerce-admin'
				),
				content: (
					<Fragment>
						<Button isPrimary>{ __( 'Create homepage', 'woocommerce-admin' ) }</Button>
						<Button onClick={ () => this.completeStep() }>
							{ __( 'Skip', 'woocommerce-admin' ) }
						</Button>
					</Fragment>
				),
				visible: true,
			},
			{
				key: 'logo',
				label: __( 'Upload a logo', 'woocommerce-admin' ),
				description: __( 'Ensure your store is on-brand by adding your logo', 'woocommerce-admin' ),
				content: (
					<Fragment>
						<Button isPrimary>{ __( 'Proceed', 'woocommerce-admin' ) }</Button>
						<Button onClick={ () => this.completeStep() }>
							{ __( 'Skip', 'woocommerce-admin' ) }
						</Button>
					</Fragment>
				),
				visible: true,
			},
			{
				key: 'notice',
				label: __( 'Set a store notice', 'woocommerce-admin' ),
				description: __(
					'Optionally display a prominent notice across all pages of your store',
					'woocommerce-admin'
				),
				content: (
					<Fragment>
						<Button isPrimary>{ __( 'Complete task', 'woocommerce-admin' ) }</Button>
					</Fragment>
				),
				visible: true,
			},
		];

		return filter( steps, step => step.visible );
	}

	render() {
		const { stepIndex } = this.state;

		return (
			<div className="woocommerce-task-tax">
				<Card className="is-narrow">
					<Stepper
						isVertical={ true }
						currentStep={ this.getSteps()[ stepIndex ].key }
						steps={ this.getSteps() }
					/>
				</Card>
			</div>
		);
	}
}

export default compose(
	withDispatch( dispatch => {
		const { createNotice } = dispatch( 'core/notices' );
		return {
			createNotice,
		};
	} )
)( Appearance );
