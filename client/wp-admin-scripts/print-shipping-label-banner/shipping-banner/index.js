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
		this.state = {
			showShippingBanner: true, // TODO: update to get state when closedForever is clicked
			isDismissModalOpen: false,
			isSetupError: true, // TODO: this should be false by default once we're actually setting the value.
			setupErrorReason: setupErrorTypes.SETUP,
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
			hasErrors,
			wcsAssetsPaths,
			// errors
		} = this.props;

		if ( installedPlugins.length > prevProps.installedPlugins.length ) {
			activatePlugins( [ wcsPluginSlug ] );
		}
		if ( activatedPlugins.includes( wcsPluginSlug ) ) {
			// TODO: Add success notice after installation #32
			// console.log("Successfully activated wcs.");
		}
		if ( wcsAssetsPaths ) {
			this.loadWcsAssets( wcsAssetsPaths );
		}
		if ( hasErrors ) {
			// TODO: Add error handling #33
			// console.log("Errors during activation or installation", errors);
		}
	}

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

	loadWcsAssets( { js, css } ) {
		Promise.all( [
			new Promise( ( resolve, reject ) => {
				const script = document.createElement( 'script' );
				script.src = js;
				script.async = true;
				script.onload = resolve;
				script.onerror = reject;
				document.body.appendChild( script );
			} ),
			new Promise( ( resolve, reject ) => {
				const head = document.getElementsByTagName( 'head' )[ 0 ];
				const link = document.createElement( 'link' );
				link.rel = 'stylesheet';
				link.type = 'text/css';
				link.href = css;
				link.media = 'all';
				link.onload = resolve;
				link.onerror = reject;
				head.appendChild( link );
			} ),
		] ).then( () => {
			this.openWcsModal();
		} );
	}

	openWcsModal() {
		if ( window.wcsGetAppStore ) {
			const { orderId } = this.props;

			const wcsStore = window.wcsGetAppStore(
				'wc-connect-create-shipping-label'
			);
			const state = wcsStore.getState();
			const siteId = state.ui.selectedSiteId; // TODO: it feels messy to extract siteid here. Maybe WCS could expose something to handle this bit internally.

			// TODO: we need to test whether or not WOOCOMMERCE_SERVICES_SHIPPING_LABEL_OPEN_PRINTING_FLOW works in
			// all cases. Calling this event directly skips some of the normal initialization that would work so
			// we may need to introduce a special event for this purpose.
			wcsStore.dispatch( {
				type: 'WOOCOMMERCE_SERVICES_SHIPPING_LABEL_OPEN_PRINTING_FLOW',
				orderId,
				siteId,
			} );
		}
	}

	render() {
		const {
			isDismissModalOpen,
			showShippingBanner,
			isSetupError,
			setupErrorReason,
		} = this.state;
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
						isPrimary
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
						isSetupError={ isSetupError }
						errorReason={ setupErrorReason }
					/>
					<button
						onClick={ this.openDismissModal }
						type="button"
						className="notice-dismiss"
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
		const isRequesting =
			isPluginActivateRequesting() || isPluginInstallRequesting();
		const installationErrors = getPluginInstallationErrors( [
			wcsPluginSlug,
		] );
		const installedPlugins = Object.keys(
			getPluginInstallations( [ wcsPluginSlug ] )
		);
		const activationErrors = getPluginActivationErrors( [ wcsPluginSlug ] );
		const activatedPlugins = Object.keys(
			getPluginActivations( [ wcsPluginSlug ] )
		);
		const errors = [];
		Object.keys( activationErrors ).map( ( plugin ) =>
			errors.push( activationErrors[ plugin ].message )
		);
		Object.keys( installationErrors ).map( ( plugin ) =>
			errors.push( installationErrors[ plugin ].message )
		);
		const hasErrors = Boolean( errors.length );

		return {
			activePlugins: getActivePlugins(),
			isJetpackConnected: isJetpackConnected(),
			isRequesting,
			installedPlugins,
			activatedPlugins,
			wcsPluginSlug,
			errors,
			hasErrors,
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
