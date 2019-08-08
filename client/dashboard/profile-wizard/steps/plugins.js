/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from 'newspack-components';
import { Component, Fragment } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { forEach } from 'lodash';
import { compose } from '@wordpress/compose';
import { withDispatch } from '@wordpress/data';

/**
 * Internal depdencies
 */
import { H, Stepper, Card } from '@woocommerce/components';
import { NAMESPACE } from 'wc-api/onboarding/constants';
import { recordEvent } from 'lib/tracks';
import { doPluginAction, getPluginErrorMessage } from 'dashboard/utils';

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
			connectUrl: '',
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
			this.connectJetpack();
		}
	}

	installPlugins() {
		forEach( plugins, async plugin => {
			const response = await doPluginAction( 'install', plugin );
			if ( 'success' === response.status ) {
				this.setState( state => ( {
					pluginsInstalled: state.pluginsInstalled + 1,
				} ) );
			} else {
				this.props.createNotice( 'error', getPluginErrorMessage( 'install', response.plugin ) );
				this.setState( {
					isPending: false,
					isError: true,
				} );
			}
		} );
	}

	activatePlugins( event ) {
		event.preventDefault();

		// Avoid double activating.
		const { isPending } = this.state;
		if ( isPending ) {
			return false;
		}

		this.setState( {
			isPending: true,
		} );

		recordEvent( 'storeprofiler_install_plugin' );

		forEach( plugins, async plugin => {
			const response = await doPluginAction( 'activate', plugin );
			if ( 'success' === response.status ) {
				this.setState( state => ( {
					pluginsActivated: state.pluginsActivated + 1,
				} ) );
			}
		} );
	}

	async connectJetpack() {
		try {
			const connectResponse = await apiFetch( {
				path: `${ NAMESPACE }/onboarding/plugins/connect-jetpack`,
			} );
			if ( connectResponse && connectResponse.connectAction ) {
				window.location = connectResponse.connectAction;
				return;
			}
			throw new Error();
		} catch ( err ) {
			this.props.createNotice( 'error', getPluginErrorMessage( 'activate', 'jetpack' ) );
			this.setState( {
				isPending: false,
				isError: true,
			} );
		}
	}

	render() {
		const { step, isPending, isError } = this.state;
		return (
			<Fragment>
				<H className="woocommerce-profile-wizard__header-title">
					{ __( 'Enhance your store setup', 'woocommerce-admin' ) }
				</H>

				<Card className="woocommerce-profile-wizard__plugins-card">
					<Stepper
						isVertical={ true }
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

						{ ! isError &&
							'activate' === step && (
								<Button isPrimary isBusy={ isPending } onClick={ this.activatePlugins }>
									{ __( 'Activate & continue', 'woocommerce-admin' ) }
								</Button>
							) }
					</div>
				</Card>
			</Fragment>
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
)( Plugins );
