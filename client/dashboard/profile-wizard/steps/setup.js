/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { addQueryArgs } from '@wordpress/url';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { get } from 'lodash';

/**
 * WooCommerce dependencies
 */
import { H, Spinner } from '@woocommerce/components';
import { getSetting } from '@woocommerce/wc-admin-settings';
import { updateQueryString } from '@woocommerce/navigation';

/**
 * Internal dependencies
 */
import withSelect from 'wc-api/with-select';

class Setup extends Component {
	constructor() {
		super( ...arguments );
		this.state = {
			isPending: false,
		};
	}

	componentDidUpdate() {
		const { goToNextStep, isGetProfileItemsRequesting, profileItems } = this.props;
		const { isPending } = this.state;
		const { activeTheme = '' } = getSetting( 'onboarding', {} );

		if ( isGetProfileItemsRequesting || isPending ) {
			return;
		}

		// Update profiler to complete and go to woocommerce.com if products
		// need to be purchased, otherwise install/activate theme.
		if ( this.getProductIds().length || profileItems.theme === activeTheme ) {
			goToNextStep();
		} else {
			this.activateTheme();
		}

		/* eslint-disable react/no-did-update-set-state */
		this.setState( { isPending: true } );
		/* eslint-enable react/no-did-update-set-state */
	}

	componentWillUnmount() {
		const productIds = this.getProductIds();
		if ( productIds.length ) {
			updateQueryString( {}, '/', {} );
			this.redirectToCart();
		}
	}

	activateTheme() {
		// @todo Activate theme here and then call goToNextStep() to complete.
	}

	getProductIds() {
		const productIds = [];
		const profileItems = get( this.props, 'profileItems', {} );

		profileItems.product_types.forEach( product_type => {
			if (
				wcSettings.onboarding.productTypes[ product_type ] &&
				wcSettings.onboarding.productTypes[ product_type ].product
			) {
				productIds.push( wcSettings.onboarding.productTypes[ product_type ].product );
			}
		} );

		const theme = wcSettings.onboarding.themes.find(
			themeData => themeData.slug === profileItems.theme
		);

		if ( theme && theme.id && ! theme.is_installed ) {
			productIds.push( theme.id );
		}

		return productIds;
	}

	redirectToCart() {
		if ( ! window.wcAdminFeatures.onboarding ) {
			return;
		}

		const productIds = this.getProductIds();
		if ( ! productIds.length ) {
			return;
		}

		document.body.classList.add( 'woocommerce-admin-is-loading' );

		const url = addQueryArgs( 'https://woocommerce.com/cart', {
			'wccom-back': window.location.href,
			'wccom-replace-with': productIds.join( ',' ),
		} );
		window.location = url;
	}

	render() {
		const { isGetProfileItemsRequesting } = this.props;
		if ( isGetProfileItemsRequesting ) {
			return null;
		}

		return (
			<div className="woocommerce-profile-wizard__step-setup">
				<H className="woocommerce-profile-wizard__header-title">
					{ __( 'Setting up your store', 'woocommerce-admin' ) }
				</H>
				<p>{ __( 'Installing and activating your theme', 'woocommerce-admin' ) }</p>
				<Spinner />
			</div>
		);
	}
}

export default compose(
	withSelect( select => {
		const { getProfileItems, isGetProfileItemsRequesting } = select( 'wc-api' );

		return {
			isGetProfileItemsRequesting: isGetProfileItemsRequesting(),
			profileItems: getProfileItems(),
		};
	} )
)( Setup );
