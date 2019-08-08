/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from 'newspack-components';
import { Component, Fragment } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { compose } from '@wordpress/compose';
import { withDispatch } from '@wordpress/data';

/**
 * Internal depdencies
 */
import { H, Stepper, Card } from '@woocommerce/components';
import { NAMESPACE } from 'wc-api/onboarding/constants';
import { recordEvent } from 'lib/tracks';
import { doPluginActions, getPluginErrorMessage } from 'dashboard/utils';

const plugins = [ 'jetpack', 'woocommerce-services' ];

class Plugins extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			step: 'install',
			isPending: true,
			isError: false,
			connectUrl: '',
		};

		this.activatePlugins = this.activatePlugins.bind( this );
	}

	componentDidMount() {
		this.installPlugins();
	}

	pluginActionCallback( response ) {
		if ( 'success' !== response.status ) {
			this.setState( {
				isPending: false,
				isError: true,
			} );
			this.props.createNotice( 'error', getPluginErrorMessage( 'install', response.plugin ) );
		}
	}

	async installPlugins() {
		const installed = await doPluginActions( 'install', plugins, this.pluginActionCallback );
		if ( installed.failed.length ) {
			this.setState( {
				isPending: false,
				isError: true,
			} );
		} else {
			this.setState( {
				step: 'activate',
				isPending: false,
			} );
		}
	}

	async activatePlugins( event ) {
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

		const activated = await doPluginActions( 'activate', plugins, this.pluginActionCallback );
		if ( ! activated.failed.length ) {
			this.connectJetpack();
		}
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
