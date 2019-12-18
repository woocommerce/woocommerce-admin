/** @format */
/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { Button, Modal } from '@wordpress/components';
import { addQueryArgs } from '@wordpress/url';
import { find } from 'lodash';
import { decodeEntities } from '@wordpress/html-entities';

/**
 * WooCommerce dependencies
 */
import { getSetting } from '@woocommerce/wc-admin-settings';
import { getNewPath } from '@woocommerce/navigation';
import { List } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import withSelect from 'wc-api/with-select';
import { getProductIdsForCart } from 'dashboard/utils';
import sanitizeHTML from 'lib/sanitize-html';

class CartModal extends Component {
	componentDidMount() {
		document.body.classList.add( 'woocommerce-admin-full-screen' );
		document.body.classList.add( 'woocommerce-profile-wizard__body' );
	}

	componentWillUnmount() {
		document.body.classList.remove( 'woocommerce-admin-full-screen' );
		document.body.classList.remove( 'woocommerce-profile-wizard__body' );
	}

	redirectToCart() {
		const { productIds } = this.props;
		const backPath = getNewPath( {}, '/', {} );
		const { connectNonce } = getSetting( 'onboarding', {} );

		if ( ! productIds.length ) {
			return;
		}

		const url = addQueryArgs( 'https://woocommerce.com/cart', {
			'wccom-site': getSetting( 'siteUrl' ),
			'wccom-woo-version': getSetting( 'wcVersion' ),
			'wccom-replace-with': productIds.join( ',' ),
			'wccom-connect-nonce': connectNonce,
			'wccom-back': backPath,
		} );
		window.location = url;
	}

	renderProducts() {
		const { productIds } = this.props;
		const { productTypes = {}, themes = [] } = getSetting( 'onboarding', {} );
		const listItems = [];

		productIds.forEach( productId => {
			const productInfo = find( productTypes, productType => {
				return productType.product === productId;
			} );

			if ( productInfo ) {
				listItems.push( {
					title: productInfo.label,
					content: productInfo.description,
				} );
			}

			const themeInfo = find( themes, theme => {
				return theme.id === productId;
			} );

			if ( themeInfo && themeInfo.slug !== 'Storefront' ) {
				listItems.push( {
					title: sprintf(
						__( '%s — %s per year', 'woocommerce-admin' ),
						themeInfo.title,
						decodeEntities( themeInfo.price )
					),
					content: <span dangerouslySetInnerHTML={ sanitizeHTML( themeInfo.excerpt ) } />,
				} );
			}
		} );

		return <List items={ listItems } />;
	}

	render() {
		return (
			<Modal
				title={ __(
					'Would you like to purchase and install the following features now?',
					'woocommerce-admin'
				) }
				onRequestClose={ () => this.props.onClose() }
				className="woocommerce-cart-modal"
			>
				{ this.renderProducts() }

				<p>
					{ __(
						"You won't have access to this functionality until the extensions have been purchased and installed.",
						'woocommerce-admin'
					) }
				</p>

				<div className="woocommerce-cart-modal__actions">
					<Button isLink onClick={ () => this.props.onClose() }>
						{ __( "I'll do it later", 'woocommerce-admin' ) }
					</Button>

					<Button isPrimary isDefault onClick={ () => this.redirectToCart() }>
						{ __( 'Purchase & install now', 'woocommerce-admin' ) }
					</Button>
				</div>
			</Modal>
		);
	}
}

export default compose(
	withSelect( select => {
		const { getProfileItems } = select( 'wc-api' );
		const profileItems = getProfileItems();
		const productIds = getProductIdsForCart( profileItems );

		return { profileItems, productIds };
	} )
)( CartModal );
