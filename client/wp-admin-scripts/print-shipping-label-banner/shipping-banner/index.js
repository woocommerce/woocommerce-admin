/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { Button, ExternalLink } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { recordEvent } from 'lib/tracks';
import interpolateComponents from 'interpolate-components';

/**
 * Internal dependencies
 */
import '../style.scss';
import DismissModal from '../dismiss-modal';
import { getSetting } from '@woocommerce/wc-admin-settings';
import withSelect from 'wc-api/with-select';
import SetupNotice, { setupErrorTypes } from '../setup-notice';
import { withDispatch } from '@wordpress/data';

const wcAdminAssetUrl = getSetting( 'wcAdminAssetUrl', '' );

export class ShippingBanner extends Component {
	constructor( props ) {
		super( props );

		const orderId = new URL( window.location.href ).searchParams.get(
			'post'
		);

		this.state = {
			showShippingBanner: true, // TODO: update to get state when closedForever is clicked
			isDismissModalOpen: false,
			setupErrorReason: setupErrorTypes.SETUP,
			orderId: parseInt( orderId, 10 ),
		};
	}

	componentDidMount() {
		this.trackBannerEvent( 'shipping_banner_show' );
	}

	componentDidUpdate( prevProps ) {
		const {
			activatePlugins,
			activatedPlugins,
			installedPlugins,
			wcsPluginSlug,
		} = this.props;

		if ( installedPlugins.length > prevProps.installedPlugins.length ) {
			activatePlugins( [ wcsPluginSlug ] );
		}
		if ( activatedPlugins.includes( wcsPluginSlug ) ) {
			// TODO: Add success notice after installation #32
			this.acceptTosAndGetWCSAssets();
		}
	}

	hasActivationError = () => {
		return Boolean( this.props.activationErrors.length );
	};

	hasInstallationError = () => {
		return Boolean( this.props.installationErrors.length );
	};

	isSetupError = () => {
		return this.hasActivationError() || this.hasInstallationError();
	};

	setupErrorReason = () => {
		if ( this.hasInstallationError() ) {
			return setupErrorTypes.INSTALL;
		}
		if ( this.hasActivationError() ) {
			return setupErrorTypes.ACTIVATE;
		}
		return setupErrorTypes.SETUP;
	};

	closeDismissModal = () => {
		this.setState( { isDismissModalOpen: false } );
		this.trackBannerEvent(
			'shipping_banner_dismiss_modal_close_button_click'
		);
	};

	openDismissModal = () => {
		this.setState( { isDismissModalOpen: true } );
		this.trackBannerEvent( 'shipping_banner_dimiss_click' );
	};

	hideBanner = () => {
		this.setState( { showShippingBanner: false } );
	};

	createShippingLabelClicked = () => {
		const { wcsPluginSlug } = this.props;
		// TODO: open WCS modal
		this.trackBannerEvent( 'shipping_banner_create_label_click' );
		this.installAndActivatePlugins( wcsPluginSlug );
	};

	async installAndActivatePlugins( pluginSlug ) {
		// Avoid double activating.
		const { installPlugins, isRequesting } = this.props;
		if ( isRequesting ) {
			return false;
		}
		installPlugins( [ pluginSlug ] );
	}

	woocommerceServiceLinkClicked = () => {
		this.trackBannerEvent(
			'shipping_banner_woocommerce_service_link_click'
		);
	};

	trackBannerEvent = ( eventName ) => {
		const { activePlugins, isJetpackConnected, wcsPluginSlug } = this.props;
		recordEvent( eventName, {
			jetpack_installed: activePlugins.includes( 'jetpack' ),
			jetpack_connected: isJetpackConnected,
			wcs_installed: activePlugins.includes( wcsPluginSlug ),
		} );
	};

	acceptTosAndGetWCSAssets() {
		const { acceptTos, getWcsAssets } = this.props;

		return Promise.all( [ acceptTos(), getWcsAssets() ] ).then(
			( [ , wcsAssets ] ) => {
				if ( wcsAssets ) {
					this.loadWcsAssets( wcsAssets );
				}
			}
		);
	}

	loadWcsAssets( { assets } ) {
		const js = assets.wc_connect_admin_script;
		const styles = assets.wc_connect_admin_style;

		const shippingLabelContainer = document.createElement( 'div' );
		const { orderId } = this.state;
		shippingLabelContainer.className =
			'wcc-root woocommerce wc-connect-create-shipping-label';
		shippingLabelContainer.dataset.args = JSON.stringify( {
			orderId,
			context: 'shipping_label',
		} );
		document.body.appendChild( shippingLabelContainer );

		Promise.all( [
			new Promise( ( resolve, reject ) => {
				const script = document.createElement( 'script' );
				script.src = js;
				script.async = true;
				script.onload = resolve;
				script.onerror = reject; //TODO: handle errors
				document.body.appendChild( script );
			} ),
			new Promise( ( resolve, reject ) => {
				const head = document.getElementsByTagName( 'head' )[ 0 ];
				const link = document.createElement( 'link' );
				link.rel = 'stylesheet';
				link.type = 'text/css';
				link.href = styles;
				link.media = 'all';
				link.onload = resolve;
				link.onerror = reject; //TODO: handle errors
				head.appendChild( link );
			} ),
		] ).then( () => {
			this.openWcsModal();
		} );
	}

	openWcsModal() {
		if ( window.wcsGetAppStore ) {
			const wcsStore = window.wcsGetAppStore(
				'wc-connect-create-shipping-label'
			);
			const state = wcsStore.getState();
			const { orderId } = this.state;
			const siteId = state.ui.selectedSiteId;

			wcsStore.dispatch( {
				type: 'WOOCOMMERCE_SERVICES_SHIPPING_LABEL_OPEN_PRINTING_FLOW',
				orderId,
				siteId,
			} );
		}
	}

	render() {
		const { isDismissModalOpen, showShippingBanner } = this.state;
		if ( ! showShippingBanner ) {
			return null;
		}

		return (
			<div>
				<div className="wc-admin-shipping-banner-container">
					<img
						className="wc-admin-shipping-banner-illustration"
						src={ wcAdminAssetUrl + 'shippingillustration.svg' }
						alt={ __( 'Shipping ', 'woocommerce-admin' ) }
					/>
					<Button
						disabled={ this.props.isRequesting }
						isPrimary
						isBusy={ this.props.isRequesting }
						onClick={ this.createShippingLabelClicked }
					>
						{ __( 'Create shipping label' ) }
					</Button>
					<h3>
						{ __(
							'Print discounted shipping labels with a click.',
							'woocommerce-admin'
						) }
					</h3>
					<p>
						{ interpolateComponents( {
							mixedString: __(
								'By clicking "Create shipping label", {{wcsLink}}WooCommerce Services{{/wcsLink}} will be installed and you agree to its {{tosLink}}Terms of Service{{/tosLink}}.',
								'woocommerce-admin'
							),
							components: {
								tosLink: (
									<ExternalLink
										href="https://wordpress.com/tos"
										target="_blank"
										type="external"
									/>
								),
								wcsLink: (
									<ExternalLink
										href="https://woocommerce.com/products/shipping/"
										target="_blank"
										type="external"
										onClick={
											this.woocommerceServiceLinkClicked
										}
									/>
								),
							},
						} ) }
					</p>
					<SetupNotice
						isSetupError={ this.isSetupError() }
						errorReason={ this.setupErrorReason() }
					/>
					<button
						onClick={ this.openDismissModal }
						type="button"
						className="notice-dismiss"
						disabled={ this.props.isRequesting }
					>
						<span className="screen-reader-text">
							{ __(
								'Close Print Label Banner.',
								'woocommerce-admin'
							) }
						</span>
					</button>
				</div>
				<DismissModal
					visible={ isDismissModalOpen }
					onClose={ this.closeDismissModal }
					onCloseAll={ this.hideBanner }
					trackBannerEvent={ this.trackBannerEvent }
				/>
			</div>
		);
	}
}

export default compose(
	withSelect( ( select ) => {
		const wcsPluginSlug = 'woocommerce-services';
		const {
			getActivePlugins,
			getPluginInstallations,
			getPluginActivations,
			getPluginActivationErrors,
			getPluginInstallationErrors,
			isJetpackConnected,
			isPluginActivateRequesting,
			isPluginInstallRequesting,
		} = select( 'wc-api' );
		const { acceptTos, getWcsAssets } = select(
			'print-shipping-label-banner'
		);

		const isRequesting =
			isPluginActivateRequesting() || isPluginInstallRequesting();
		const allInstallationErrors = getPluginInstallationErrors( [
			wcsPluginSlug,
		] );
		const installedPlugins = Object.keys(
			getPluginInstallations( [ wcsPluginSlug ] )
		);
		const allActivationErrors = getPluginActivationErrors( [
			wcsPluginSlug,
		] );
		const activatedPlugins = Object.keys(
			getPluginActivations( [ wcsPluginSlug ] )
		);
		const activationErrors = [];
		const installationErrors = [];
		Object.keys( allActivationErrors ).map( ( plugin ) =>
			activationErrors.push( allActivationErrors[ plugin ].message )
		);
		Object.keys( allInstallationErrors ).map( ( plugin ) =>
			installationErrors.push( allInstallationErrors[ plugin ].message )
		);
		return {
			activePlugins: getActivePlugins(),
			isJetpackConnected: isJetpackConnected(),
			isRequesting,
			installedPlugins,
			activatedPlugins,
			wcsPluginSlug,
			activationErrors,
			installationErrors,
			acceptTos,
			getWcsAssets,
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { activatePlugins, installPlugins } = dispatch( 'wc-api' );

		return {
			activatePlugins,
			installPlugins,
		};
	} )
)( ShippingBanner );
