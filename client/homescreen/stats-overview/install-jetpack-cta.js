/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
// import PropTypes from 'prop-types';
import { useSelect, useDispatch } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import { PLUGINS_STORE_NAME, useUserPreferences } from '@woocommerce/data';
import { H } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import { recordEvent } from 'lib/tracks';

export const getJetpackInstallText = ( jetpackInstallState ) => {
	return (
		{
			unavailable: __( 'Get Jetpack', 'woocommerce-admin' ),
			installed: __( 'Activate Jetpack', 'woocommerce-admin' ),
			activated: __( 'Connect Jetpack', 'woocommerce-admin' ),
		}[ jetpackInstallState ] || ''
	);
};

export const JetpackCTA = ( {
	onClickInstall,
	onClickDismiss,
	isBusy,
	jetpackInstallState,
} ) => {
	return (
		<article className="woocommerce-stats-overview__install-jetpack-promo">
			<div className="woocommerce-stats-overview__install-jetpack-promo__content">
				<H>
					{ __(
						'Get traffic stats with Jetpack',
						'woocommerce-admin'
					) }
				</H>
				<p>
					{ __(
						'Keep an eye on your views and visitors metrics with ' +
							'Jetpack. Requires Jetpack plugin and a WordPress.com ' +
							'account.',
						'woocommerce-admin'
					) }
				</p>
			</div>
			<footer>
				<Button
					isSecondary
					onClick={ () => {
						recordEvent( 'statsoverview_install_jetpack' );
						onClickInstall();
					} }
					isBusy={ isBusy }
				>
					{ getJetpackInstallText( jetpackInstallState ) }
				</Button>
				<Button
					isTertiary
					onClick={ () => {
						recordEvent( 'statsoverview_dismiss_install_jetpack' );
						onClickDismiss();
					} }
					isBusy={ isBusy }
				>
					{ __( 'No thanks', 'woocommerce-admin' ) }
				</Button>
			</footer>
		</article>
	);
};

export function InstallJetpackCTA() {
	const { updateUserPreferences, ...userPrefs } = useUserPreferences();
	const { jetpackInstallState, isBusy } = useSelect( ( select ) => {
		const { getPluginInstallState, isPluginsRequesting } = select(
			PLUGINS_STORE_NAME
		);
		const installState = getPluginInstallState( 'jetpack' );
		const busyState =
			isPluginsRequesting( 'getJetpackConnectUrl' ) ||
			isPluginsRequesting( 'installPlugins' ) ||
			isPluginsRequesting( 'activatePlugins' );

		return {
			isBusy: busyState,
			jetpackInstallState: installState,
		};
	} );

	const { installJetpackAndConnect } = useDispatch( PLUGINS_STORE_NAME );

	return (
		<JetpackCTA
			jetpackInstallState={ jetpackInstallState }
			isBusy={ isBusy }
			onClickInstall={ installJetpackAndConnect }
			onClickDismiss={ () => {
				const homepageStats = userPrefs.homepage_stats || {};
				homepageStats.installJetpackDismissed = true;
				updateUserPreferences( {
					homepage_stats: homepageStats,
				} );
			} }
		/>
	);
}
