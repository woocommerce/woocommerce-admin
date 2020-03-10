/**
 * External dependencies
 */
import { __, sprintf, _n } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { Button, Link } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { recordEvent } from 'lib/tracks';

/**
 * Internal dependencies
 */
import '../style.scss';
import DismissModal from '../dismiss-modal';
import { getSetting } from '@woocommerce/wc-admin-settings';
import withSelect from 'wc-api/with-select';

const wcAdminAssetUrl = getSetting( 'wcAdminAssetUrl', '' );

class ShippingBanner extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			showShippingBanner: true, // TODO: update to get state when closedForever is clicked
			isDismissModalOpen: false,
		};
	}

	componentDidMount() {
		this.trackBannerEvent( 'shipping_banner_show' );
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
		// TODO: install and activate WCS
		// TODO: open WCS modal
		this.trackBannerEvent( 'shipping_banner_create_label_click' );
	};

	woocommerceServiceLinkClicked = () => {
		this.trackBannerEvent( 'shipping_banner_woocommerce_service_link_click' );
	};

	trackBannerEvent = ( eventName ) => {
		recordEvent( eventName, {
			jetpack_installed: this.activePlugins.includes( 'jetpack' ),
			jetpack_connected: this.isJetpackConnected,
			wcs_installed: this.activePlugins.includes(
				'woocommerce-services'
			),
		} );
	};

	render() {
		const { isDismissModalOpen, showShippingBanner } = this.state;
		const { itemsCount } = this.props;
		if ( ! showShippingBanner ) {
			return null;
		}

		return (
			<div>
				<div className="wc-admin-shipping-banner-container">
                    <img className="wc-admin-shipping-banner-illustration" src={ wcAdminAssetUrl + 'shippingillustration.svg' } alt={ __( 'Shipping ', 'woocommerce-admin' ) } />
					<Button isPrimary onClick={ this.createShippingLabelClicked }>
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
									<Link
										href="https://wordpress.com/tos"
										target="_blank"
										type="external"
									/>
								),
								wcsLink: (
									<Link
										href="https://woocommerce.com/products/shipping/"
										target="_blank"
										type="external"
										onClick={ this.woocommerceServiceLinkClicked }
									/>
								),
							},
						} ) }
					</p>
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
		const { getActivePlugins, isJetpackConnected } = select( 'wc-api' );
		return {
			activePlugins: getActivePlugins(),
			isJetpackConnected: isJetpackConnected(),
		};
	} )
)( ShippingBanner );
