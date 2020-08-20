/**
 * External dependencies
 */
import React, { useEffect } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { platform, ANDROID_PLATFORM } from '../lib/platform';
import { AppIcon } from './app-icon';
import './style.scss';

const SHOW_APP_BANNER_MODIFIER_CLASS = 'woocommerce-layout__show-app-banner';

export const MobileAppBanner = () => {
	useEffect( () => {
		const layout = document.getElementsByClassName(
			'woocommerce-layout'
		)[ 0 ];

		if ( platform() === ANDROID_PLATFORM ) {
			if ( layout ) {
				// This is a hack to allow the mobile banner to work in the context of the header which is
				// position fixed. This can be refactored away when we move away from the activity panel
				// in future.
				layout.classList.add( SHOW_APP_BANNER_MODIFIER_CLASS );
			}
		}

		return () => {
			if ( layout ) {
				// This is a hack to allow the mobile banner to work in the context of the header which is
				// position fixed. This can be refactored away when we move away from the activity panel
				// in future.
				layout.classList.remove( SHOW_APP_BANNER_MODIFIER_CLASS );
			}
		};
	}, [] );

	// On iOS we use the Smart App Banner meta tag so only display this on Android.
	if ( platform() === ANDROID_PLATFORM ) {
		return (
			<div className="woocommerce-mobile-app-banner">
				<AppIcon />
				<div className="woocommerce-mobile-app-banner__description">
					<p className="woocommerce-mobile-app-banner__description__text">
						{ __(
							'Run your store from anywhere',
							'woocommerce-admin'
						) }
					</p>
					<p className="woocommerce-mobile-app-banner__description__text">
						{ __(
							'Download the WooCommerce app',
							'woocommerce-admin'
						) }
					</p>
				</div>

				<Button
					href="http://play.google.com/store/apps/details?id=com.woocommerce.android"
					isSecondary
				>
					{ __( 'Install', 'woocommerce-admin' ) }
				</Button>
			</div>
		);
	}

	return null;
};
