/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from 'newspack-components';
import { Component, Fragment } from '@wordpress/element';

/**
 * WooCommerce dependencies
 */
import { getHistory, getNewPath } from '@woocommerce/navigation';

/**
 * Internal dependencies
 */
import { doPluginActions, getPluginErrorMessage } from 'dashboard/utils';

export default class ShippingLabels extends Component {
	constructor() {
		super( ...arguments );

		this.plugins = [ 'jetpack', 'woocommerce-services' ];

		this.state = {
			isInstalling: false,
			isError: false,
		};

		this.installAndActivatePlugins = this.installAndActivatePlugins.bind( this );
		this.pluginActionCallback = this.pluginActionCallback.bind( this );
	}

	async installAndActivatePlugins( event ) {
		const { isInstalling } = this.state;
		const { createNotice, completeStep } = this.props;

		event.preventDefault();

		// Avoid double activating.
		if ( isInstalling ) {
			return false;
		}

		this.setState( {
			isInstalling: true,
		} );

		const installed = await doPluginActions( 'install', this.plugins, this.pluginActionCallback );
		if ( installed.failed.length ) {
			return false;
		}

		const activated = await doPluginActions( 'activate', this.plugins, this.pluginActionCallback );
		if ( ! activated.failed.length ) {
			createNotice( 'success', __( 'Plugins were successfully installed', 'woocommerce-admin' ) );
			completeStep();
		}
	}

	pluginActionCallback( response ) {
		if ( 'success' !== response.status ) {
			this.setState( {
				isInstalling: false,
				isError: true,
			} );
			this.props.createNotice( 'error', getPluginErrorMessage( 'install', response.plugin ) );
		}
	}

	skipInstaller() {
		getHistory().push( getNewPath( {}, '/', {} ) );
	}

	render() {
		const { isError, isInstalling } = this.state;

		return isError ? (
			<Button isPrimary onClick={ () => location.reload() }>
				{ __( 'Retry', 'woocommerce-admin' ) }
			</Button>
		) : (
			<Fragment>
				<Button isBusy={ isInstalling } isPrimary onClick={ this.installAndActivatePlugins }>
					{ __( 'Install & enable', 'woocommerce-admin' ) }
				</Button>
				<Button onClick={ this.skipInstaller }>{ __( 'No thanks', 'woocommerce-admin' ) }</Button>
			</Fragment>
		);
	}
}
