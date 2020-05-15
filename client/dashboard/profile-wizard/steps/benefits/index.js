/**
 * External dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withDispatch } from '@wordpress/data';
import { filter } from 'lodash';

/**
 * WooCommerce dependencies
 */
import { Card, H } from '@woocommerce/components';
import { getAdminLink } from '@woocommerce/wc-admin-settings';

/**
 * Internal dependencies
 */
import Connect from 'dashboard/task-list/tasks/steps/connect';
import Logo from './logo';
import ManagementIcon from './images/management';
import SalesTaxIcon from './images/sales_tax';
import ShippingLabels from './images/shipping_labels';
import SpeedIcon from './images/speed';
import withSelect from 'wc-api/with-select';
import { recordEvent } from 'lib/tracks';
import { pluginNames } from 'wc-api/onboarding/constants';
import Plugins from '../../../task-list/tasks/steps/plugins';

class Benefits extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			isConnecting: false,
			isInstalling: false,
			isPending: false,
		};

		this.isJetpackActive = props.activePlugins.includes( 'jetpack' );
		this.isWcsActive = props.activePlugins.includes(
			'woocommerce-services'
		);
		this.pluginsToInstall = [];
		if ( ! this.isJetpackActive ) {
			this.pluginsToInstall.push( 'jetpack' );
		}
		if ( ! this.isWcsActive ) {
			this.pluginsToInstall.push( 'woocommerce-services' );
		}

		recordEvent( 'storeprofiler_plugins_to_install', {
			plugins: this.pluginsToInstall,
		} );

		this.startPluginInstall = this.startPluginInstall.bind( this );
		this.skipPluginInstall = this.skipPluginInstall.bind( this );
	}

	componentDidUpdate( prevProps, prevState ) {
		const {
			activePlugins,
			goToNextStep,
			isJetpackConnected,
			isRequesting,
		} = this.props;
		const { isInstalling, isPending } = this.state;

		// Installation and requests are complete, begin Jetpack connection.
		if (
			! isInstalling &&
			! isRequesting &&
			( prevState.isInstalling || prevState.isRequesting ) &&
			activePlugins.includes( 'jetpack' )
		) {
			if ( ! isJetpackConnected ) {
				this.setState( { isConnecting: true } );
			} else {
				this.setState( { isPending: false } );
			}
		}

		// No longer pending or update profile items, go to next step.
		if (
			! isPending &&
			! isRequesting &&
			( prevState.isPending || prevState.isRequesting )
		) {
			goToNextStep();
		}
	}

	async skipPluginInstall() {
		const {
			createNotice,
			isProfileItemsError,
			updateProfileItems,
		} = this.props;

		this.setState( { isPending: true } );

		const plugins = this.isJetpackActive ? 'skipped-wcs' : 'skipped';
		await updateProfileItems( { plugins } );

		if ( isProfileItemsError ) {
			createNotice(
				'error',
				__(
					'There was a problem updating your preferences.',
					'woocommerce-admin'
				)
			);
		} else {
			recordEvent( 'storeprofiler_install_plugins', {
				install: false,
				plugins,
			} );
		}
	}

	async startPluginInstall() {
		const { updateProfileItems, updateOptions } = this.props;

		this.setState( {
			isInstalling: true,
			isPending: true,
		} );

		await updateOptions( {
			woocommerce_setup_jetpack_opted_in: true,
		} );

		const plugins = this.isJetpackActive ? 'installed-wcs' : 'installed';
		recordEvent( 'storeprofiler_install_plugins', {
			install: true,
			plugins,
		} );
		updateProfileItems( { plugins } );
	}

	renderBenefit( benefit ) {
		const { description, icon, title } = benefit;

		return (
			<div
				className="woocommerce-profile-wizard__benefit-card"
				key={ title }
			>
				{ icon }
				<div className="woocommerce-profile-wizard__benefit-card-content">
					<H className="woocommerce-profile-wizard__benefit-card-title">
						{ title }
					</H>
					<p>{ description }</p>
				</div>
			</div>
		);
	}

	getBenefits() {
		return [
			{
				title: __( 'Store management on the go', 'woocommerce-admin' ),
				icon: <ManagementIcon />,
				description: __(
					'Your store in your pocket. Manage orders, receive sales notifications, and more. Only with a Jetpack connection.',
					'woocommerce-admin'
				),
				visible: ! this.isJetpackActive,
			},
			{
				title: __( 'Automated sales taxes', 'woocommerce-admin' ),
				icon: <SalesTaxIcon />,
				description: __(
					'Ensure that the correct rate of tax is charged on all of your orders automatically, and print shipping labels at home.',
					'woocommerce-admin'
				),
				visible: ! this.isWcsActive || ! this.isJetpackActive,
			},
			{
				title: __( 'Improved speed & security', 'woocommerce-admin' ),
				icon: <SpeedIcon />,
				description: __(
					'Automatically block brute force attacks and speed up your store using our powerful, global server network to cache images.',
					'woocommerce-admin'
				),
				visible: ! this.isJetpackActive,
			},
			{
				title: __(
					'Print shipping labels at home',
					'woocommerce-admin'
				),
				icon: <ShippingLabels />,
				description: __(
					'Save time at the post office by printing shipping labels for your orders at home.',
					'woocommerce-admin'
				),
				visible: this.isJetpackActive && ! this.isWcsActive,
			},
		];
	}

	renderBenefits() {
		return (
			<div className="woocommerce-profile-wizard__benefits">
				{ filter(
					this.getBenefits(),
					( benefit ) => benefit.visible
				).map( ( benefit ) => this.renderBenefit( benefit ) ) }
			</div>
		);
	}

	render() {
		const { isConnecting, isInstalling, isPending } = this.state;

		const pluginNamesString = this.pluginsToInstall
			.map( ( pluginSlug ) => pluginNames[ pluginSlug ] )
			.join( ' ' + __( 'and', 'woocommerce-admin' ) + ' ' );

		return (
			<Card className="woocommerce-profile-wizard__benefits-card">
				<Logo />
				<H className="woocommerce-profile-wizard__header-title">
					{ sprintf(
						__( 'Enhance your store with %s', 'woocommerce-admin' ),
						pluginNamesString
					) }
				</H>

				{ this.renderBenefits() }

				<div className="woocommerce-profile-wizard__card-actions">
					<Button
						isPrimary
						isBusy={ isPending && ( isInstalling || isConnecting ) }
						disabled={ isPending }
						onClick={ this.startPluginInstall }
						className="woocommerce-profile-wizard__continue"
					>
						{ __( 'Yes please!', 'woocommerce-admin' ) }
					</Button>
					<Button
						isDefault
						isBusy={ isPending && ! isInstalling && ! isConnecting }
						disabled={ isPending }
						className="woocommerce-profile-wizard__skip"
						onClick={ this.skipPluginInstall }
					>
						{ __( 'No thanks', 'woocommerce-admin' ) }
					</Button>

					{ isInstalling && (
						<Plugins
							autoInstall
							onComplete={ () =>
								this.setState( { isInstalling: false } )
							}
							onError={ () =>
								this.setState( { isPending: false } )
							}
							pluginSlugs={ this.pluginsToInstall }
						/>
					) }

					{ isConnecting && (
						<Connect
							autoConnect
							onConnect={ () => {
								recordEvent(
									'storeprofiler_jetpack_connect_redirect'
								);
							} }
							onError={ () =>
								this.setState( { isPending: false } )
							}
							redirectUrl={ getAdminLink(
								'admin.php?page=wc-admin&reset_profiler=0'
							) }
						/>
					) }
				</div>

				<p className="woocommerce-profile-wizard__benefits-install-notice">
					{ sprintf(
						__(
							'%s %s will be installed & activated for free.',
							'woocommerce-admin'
						),
						pluginNamesString,
						_n(
							'plugin',
							'plugins',
							this.pluginsToInstall.length,
							'woocommerce-admin'
						)
					) }
				</p>
			</Card>
		);
	}
}

export default compose(
	withSelect( ( select ) => {
		const {
			getProfileItemsError,
			getProfileItems,
			isGetProfileItemsRequesting,
			getActivePlugins,
			isJetpackConnected,
		} = select( 'wc-api' );

		const isProfileItemsError = Boolean( getProfileItemsError() );
		const activePlugins = getActivePlugins();
		const profileItems = getProfileItems();

		return {
			activePlugins,
			isProfileItemsError,
			profileItems,
			isJetpackConnected: isJetpackConnected(),
			isRequesting: isGetProfileItemsRequesting(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { updateProfileItems, updateOptions } = dispatch( 'wc-api' );
		const { createNotice } = dispatch( 'core/notices' );

		return {
			createNotice,
			updateProfileItems,
			updateOptions,
		};
	} )
)( Benefits );
