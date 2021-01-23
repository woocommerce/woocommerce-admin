/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import {
	PLUGINS_STORE_NAME,
	useUserPreferences,
	USER_STORE_NAME,
} from '@woocommerce/data';
import { H } from '@woocommerce/components';
import { recordEvent } from '@woocommerce/tracks';
import { getAdminLink } from '@woocommerce/wc-admin-settings';

/**
 * Internal dependencies
 */
import { createErrorNotice } from '../../../packages/data/src/plugins/actions';

const getJetpackInstallText = ( jetpackInstallState ) => {
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
					disabled={ isBusy }
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
					disabled={ isBusy }
					isBusy={ isBusy }
				>
					{ __( 'No thanks', 'woocommerce-admin' ) }
				</Button>
			</footer>
		</article>
	);
};

export const InstallJetpackCTA = () => {
	const { updateUserPreferences, ...userPrefs } = useUserPreferences();
	const { canUserInstallPlugins, jetpackInstallState, isBusy } = useSelect(
		( select ) => {
			const { getPluginInstallState, isPluginsRequesting } = select(
				PLUGINS_STORE_NAME
			);
			const installState = getPluginInstallState( 'jetpack' );
			const busyState =
				isPluginsRequesting( 'getJetpackConnectUrl' ) ||
				isPluginsRequesting( 'installPlugins' ) ||
				isPluginsRequesting( 'activatePlugins' );
			const { getCurrentUser } = select( USER_STORE_NAME );
			const currentUser = getCurrentUser() || {};

			return {
				isBusy: busyState,
				jetpackInstallState: installState,
				canUserInstallPlugins:
					currentUser.allcaps && currentUser.allcaps.install_plugins,
			};
		}
	);

	const { installJetpackAndConnect } = useDispatch( PLUGINS_STORE_NAME );

	if ( ! canUserInstallPlugins ) {
		return null;
	}

	const onClickInstall = () => {
		installJetpackAndConnect( createErrorNotice, getAdminLink );
	};

	return (
		<JetpackCTA
			jetpackInstallState={ jetpackInstallState }
			isBusy={ isBusy }
			onClickInstall={ onClickInstall }
			onClickDismiss={ () => {
				const homepageStats = userPrefs.homepage_stats || {};
				homepageStats.installJetpackDismissed = true;
				updateUserPreferences( {
					homepage_stats: homepageStats,
				} );
			} }
		/>
	);
};
