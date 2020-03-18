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
			setupErrorReason: setupErrorTypes.SETUP,
		};
	}

	componentDidMount() {
		this.trackImpression();
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
			// console.log("Successfully activated wcs.");
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
		this.trackElementClicked(
			'shipping_banner_dismiss_modal_close_button'
		);
	};

	openDismissModal = () => {
		this.setState( { isDismissModalOpen: true } );
		this.trackElementClicked( 'shipping_banner_dimiss' );
	};

	hideBanner = () => {
		this.setState( { showShippingBanner: false } );
	};

	createShippingLabelClicked = () => {
		const { wcsPluginSlug } = this.props;
		// TODO: open WCS modal
		this.trackElementClicked( 'shipping_banner_create_label' );
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
		this.trackElementClicked( 'shipping_banner_woocommerce_service_link' );
	};

	trackBannerEvent = ( eventName, customProps = {} ) => {
		const { activePlugins, isJetpackConnected, wcsPluginSlug } = this.props;
		recordEvent( eventName, {
			banner_name: 'wcadmin_install_wcs_prompt',
			jetpack_installed: activePlugins.includes( 'jetpack' ),
			jetpack_connected: isJetpackConnected,
			wcs_installed: activePlugins.includes( wcsPluginSlug ),
			...customProps,
		} );
	};

	trackImpression = () => {
		this.trackBannerEvent( 'banner_impression' );
	};

	trackElementClicked = ( element ) => {
		this.trackBannerEvent( 'banner_element_clicked', {
			element,
		} );
	};

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
						isSetupError={ this.isSetupError() }
						errorReason={ this.setupErrorReason() }
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
					trackElementClicked={ this.trackElementClicked }
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
