/**
 * External dependencies
 */
import React, { useEffect, useState } from '@wordpress/element';
import { Button, Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { platform, ANDROID_PLATFORM } from '../lib/platform';
import { AppIcon } from './app-icon';
import './style.scss';
import { recordEvent } from '../lib/tracks';

const SHOW_APP_BANNER_MODIFIER_CLASS = 'woocommerce-layout__show-app-banner';
const TRACKING_EVENT_NAME = 'wcadmin_mobile_banner_click';

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
				layout.classList.remove( SHOW_APP_BANNER_MODIFIER_CLASS );
			}
		};
	}, [] );

	const [ isDismissed, setDismissed ] = useState( false );

	// On iOS we use the Smart App Banner meta tag so only display this on Android.
	if ( platform() === ANDROID_PLATFORM && ! isDismissed ) {
		return (
			<div className="woocommerce-mobile-app-banner">
				<Icon
					icon="no-alt"
					onClick={ () => {
						setDismissed( true );
						recordEvent( TRACKING_EVENT_NAME, {
							button: 'dismiss',
						} );
					} }
				/>
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
					onClick={ () => {
						recordEvent( TRACKING_EVENT_NAME, {
							button: 'install',
						} );
					} }
				>
					{ __( 'Install', 'woocommerce-admin' ) }
				</Button>
			</div>
		);
	}

	return null;
};
