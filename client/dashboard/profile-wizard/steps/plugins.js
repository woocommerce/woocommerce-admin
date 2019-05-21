/** @format */
/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { forEach } from 'lodash';
import { compose } from '@wordpress/compose';
import { withDispatch } from '@wordpress/data';

/**
 * Internal depdencies
 */
import { H, Stepper, Card } from '@woocommerce/components';
import ProfileWizardHeader from '../header';

const plugins = [ 'jetpack', 'woocommerce-services' ];

class Plugins extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			step: 'install',
			isPending: true,
			isError: false,
			pluginsInstalled: 0,
			pluginsActivated: 0,
		};

		this.activatePlugins = this.activatePlugins.bind( this );
	}

	componentDidMount() {
		this.installPlugins();
	}

	componentDidUpdate( prevProps, prevState ) {
		if (
			this.state.pluginsInstalled !== prevState.pluginsInstalled &&
			this.state.pluginsInstalled === plugins.length
		) {
			/* eslint-disable react/no-did-update-set-state */
			this.setState( {
				step: 'activate',
				isPending: false,
			} );
			/* eslint-enable react/no-did-update-set-state */
		}

		if (
			this.state.pluginsActivated !== prevState.pluginsActivated &&
			this.state.pluginsActivated === plugins.length
		) {
			window.location = wcSettings.jetpackConnectUrl;
		}
	}

	installPlugins() {
		forEach( plugins, async plugin => {
			const response = await this.installPlugin( plugin );
			if ( 'success' === response.status ) {
				this.setState( state => ( {
					pluginsInstalled: state.pluginsInstalled + 1,
				} ) );
			}
		} );
	}

	activatePlugins() {
		this.setState( {
			isPending: true,
		} );

		forEach( plugins, async plugin => {
			const response = await this.activatePlugin( plugin );
			if ( 'success' === response.status ) {
				this.setState( state => ( {
					pluginsActivated: state.pluginsActivated + 1,
				} ) );
			}
		} );
	}

	async installPlugin( plugin ) {
		try {
			const pluginResponse = await apiFetch( {
				path: '/wc-admin/v1/onboarding/plugins/install',
				method: 'POST',
				data: {
					plugin,
				},
			} );
			return pluginResponse;
		} catch ( err ) {
			this.props.addNotice( {
				status: 'error',
				message: sprintf(
					__( 'There was an error installing %s. Please try again.', 'woocommerce-admin' ),
					this.getPluginName( plugin )
				),
			} );
			this.setState( {
				isPending: false,
				isError: true,
			} );
		}
	}

	async activatePlugin( plugin ) {
		try {
			const pluginResponse = await apiFetch( {
				path: '/wc-admin/v1/onboarding/plugins/activate',
				method: 'POST',
				data: {
					plugin,
				},
			} );
			return pluginResponse;
		} catch ( err ) {
			this.props.addNotice( {
				status: 'error',
				message: sprintf(
					__( 'There was an error activating %s. Please try again.', 'woocommerce-admin' ),
					this.getPluginName( plugin )
				),
			} );
			this.setState( {
				isPending: false,
				isError: true,
			} );
		}
	}

	getPluginName( plugin ) {
		switch ( plugin ) {
			case 'jetpack':
				return __( 'Jetpack', 'woocommerce-admin' );
			case 'woocommerce-services':
				return __( 'WooCommerce Services', 'woocommerce-admin' );
		}
	}

	render() {
		const { step, isPending, isError } = this.state;
		return (
			<Fragment>
				<ProfileWizardHeader />
				<div className="woocommerce-profile-wizard__container">
					<H className="woocommerce-profile-wizard__header-title">
						{ __( 'Install plugins', 'woocommerce-admin' ) }
					</H>

					<Card className="woocommerce-profile-wizard__plugins-card">
						<Stepper
							direction="vertical"
							currentStep={ step }
							isPending={ isPending }
							steps={ [
								{
									label: __( 'Install Jetpack and WooCommerce Services', 'woocommerce-admin' ),
									key: 'install',
								},
								{
									label: __( 'Activate Jetpack and WooCommerce Services', 'woocommerce-admin' ),
									key: 'activate',
								},
							] }
						/>

						<div className="woocommerce-profile-wizard__plugins-actions">
							{ isError && (
								<Button isPrimary onClick={ () => location.reload() }>
									{ __( 'Retry', 'woocommerce-admin' ) }
								</Button>
							) }

							{ 'activate' === step && (
								<Button isPrimary onClick={ this.activatePlugins }>
									{ __( 'Activate & continue', 'woocommerce-admin' ) }
								</Button>
							) }
						</div>
					</Card>
				</div>
			</Fragment>
		);
	}
}

export default compose(
	withDispatch( dispatch => {
		const { addNotice } = dispatch( 'wc-admin' );
		return {
			addNotice,
		};
	} )
)( Plugins );
