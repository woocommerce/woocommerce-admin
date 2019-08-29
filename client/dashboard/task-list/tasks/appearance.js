/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button, ImageUpload } from 'newspack-components';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { difference, filter } from 'lodash';
import { withDispatch } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import { Card, Stepper } from '@woocommerce/components';
import { getHistory, getNewPath } from '@woocommerce/navigation';

/**
 * Internal dependencies
 */
import withSelect from 'wc-api/with-select';

class Appearance extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			stepIndex: 0,
			logo: null,
		};

		this.completeStep = this.completeStep.bind( this );
		this.updateLogo = this.updateLogo.bind( this );
	}

	async componentDidUpdate( prevProps ) {
		const { stepIndex } = this.state;
		const { createNotice, errors, hasErrors, isRequesting, themeMods } = this.props;
		const step = this.getSteps()[ stepIndex ].key;

		if ( themeMods && prevProps.themeMods.custom_logo !== themeMods.custom_logo ) {
			await wp.media.attachment( themeMods.custom_logo ).fetch();
			const logoUrl = wp.media.attachment( themeMods.custom_logo ).get( 'url' );
			/* eslint-disable react/no-did-update-set-state */
			this.setState( { logo: { id: themeMods.custom_logo, url: logoUrl } } );
			/* eslint-enable react/no-did-update-set-state */
		}

		if ( 'logo' === step && ! isRequesting && prevProps.isRequesting && ! hasErrors ) {
			this.completeStep();
		}

		const newErrors = difference( errors, prevProps.errors );
		newErrors.map( error => createNotice( 'error', error ) );
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

	async updateLogo() {
		const { options, themeMods, updateOptions } = this.props;
		const { logo } = this.state;

		await updateOptions( {
			[ `theme_mods_${ options.stylesheet }` ]: { ...themeMods, custom_logo: logo.id },
		} );
	}

	getSteps() {
		const { logo } = this.state;
		const { isRequesting } = this.props;

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
						<ImageUpload image={ logo } onChange={ image => this.setState( { logo: image } ) } />
						<Button onClick={ this.updateLogo } isBusy={ isRequesting } isPrimary>
							{ __( 'Proceed', 'woocommerce-admin' ) }
						</Button>
						<Button onClick={ () => this.completeStep() }>
							{ __( 'Skip', 'woocommerce-admin' ) }
						</Button>
					</Fragment>
				),
				visible: ! wcSettings.onboarding.customLogo,
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
		const { isRequesting, hasErrors } = this.props;

		return (
			<div className="woocommerce-task-tax">
				<Card className="is-narrow">
					<Stepper
						isPending={ isRequesting && ! hasErrors }
						isVertical
						currentStep={ this.getSteps()[ stepIndex ].key }
						steps={ this.getSteps() }
					/>
				</Card>
			</div>
		);
	}
}

export default compose(
	withSelect( select => {
		const { getOptions, getOptionsError, isOptionsRequesting } = select( 'wc-api' );

		const options = getOptions( [ 'woocommerce_demo_store_notice', 'stylesheet' ] );
		const themeModsName = `theme_mods_${ options.stylesheet }`;
		const themeOptions =
			options.stylesheet && ! wcSettings.onboarding.customLogo
				? getOptions( [ themeModsName ] )
				: null;
		const themeMods =
			themeOptions && themeOptions[ themeModsName ] ? themeOptions[ themeModsName ] : {};

		const errors = [];
		const uploadLogoError = getOptionsError( [ themeModsName ] );
		if ( uploadLogoError ) {
			errors.push( uploadLogoError.message );
		}
		const hasErrors = Boolean( errors.length );
		const isRequesting = Boolean( isOptionsRequesting( [ themeModsName ] ) );

		return { errors, getOptionsError, hasErrors, isRequesting, options, themeMods };
	} ),
	withDispatch( dispatch => {
		const { createNotice } = dispatch( 'core/notices' );
		const { updateOptions } = dispatch( 'wc-api' );

		return {
			createNotice,
			updateOptions,
		};
	} )
)( Appearance );
