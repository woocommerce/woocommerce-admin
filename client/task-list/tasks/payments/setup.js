/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Card, CardBody } from '@wordpress/components';
import { cloneElement, useMemo } from '@wordpress/element';
import { Plugins } from '@woocommerce/components';
import { PLUGINS_STORE_NAME, pluginNames } from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { createNoticesFromResponse } from '~/lib/notices';

export const Setup = ( { currentMethod, markConfigured, query } ) => {
	const { activePlugins } = useSelect( ( select ) => {
		const { getActivePlugins } = select( PLUGINS_STORE_NAME );

		return {
			activePlugins: getActivePlugins(),
		};
	} );

	const getInstallStep = useMemo( () => {
		if ( ! currentMethod.plugins || ! currentMethod.plugins.length ) {
			return;
		}

		const pluginsToInstall = currentMethod.plugins.filter(
			( method ) => ! activePlugins.includes( method )
		);
		const pluginNamesString = currentMethod.plugins
			.map( ( pluginSlug ) => pluginNames[ pluginSlug ] )
			.join( ' ' + __( 'and', 'woocommerce-admin' ) + ' ' );

		return {
			key: 'install',
			label: sprintf(
				/* translators: %s = one or more plugin names joined by "and" */
				__( 'Install %s', 'woocommerce-admin' ),
				pluginNamesString
			),
			content: (
				<Plugins
					onComplete={ ( plugins, response ) => {
						createNoticesFromResponse( response );
						recordEvent( 'tasklist_payment_install_method', {
							plugins: currentMethod.plugins,
						} );
					} }
					onError={ ( errors, response ) =>
						createNoticesFromResponse( response )
					}
					autoInstall
					pluginSlugs={ currentMethod.plugins }
				/>
			),
			isComplete: ! pluginsToInstall.length,
		};
	}, [ activePlugins, currentMethod.plugins ] );

	if ( ! currentMethod.container ) {
		return null;
	}

	return (
		<Card className="woocommerce-task-payment-method woocommerce-task-card">
			<CardBody>
				{ cloneElement( currentMethod.container, {
					methodConfig: currentMethod,
					query,
					installStep: getInstallStep(),
					markConfigured,
					hasCbdIndustry: currentMethod.hasCbdIndustry,
				} ) }
			</CardBody>
		</Card>
	);
};
