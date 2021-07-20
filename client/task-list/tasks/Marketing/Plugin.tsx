/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { getAdminLink } from '@woocommerce/wc-admin-settings';
import { PLUGINS_STORE_NAME } from '@woocommerce/data';
import { Text } from '@woocommerce/experimental';
import { useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { createNoticesFromResponse } from '~/lib/notices';
import './Plugin.scss';

export type PluginProps = {
	isInstalled: boolean;
	description?: string;
	imageUrl?: string;
	manageUrl?: string;
	name: string;
	slug: string;
};

export const Plugin: React.FC< PluginProps > = ( {
	description,
	imageUrl,
	isInstalled,
	manageUrl,
	name,
	slug,
} ) => {
	const { installAndActivatePlugins } = useDispatch( PLUGINS_STORE_NAME );

	const installPlugin = () => {
		installAndActivatePlugins( [ slug ] )
			.then( ( response: { errors: Record< string, string > } ) => {
				createNoticesFromResponse( response );
			} )
			.catch( ( response: { errors: Record< string, string > } ) => {
				createNoticesFromResponse( response );
			} );
	};

	return (
		<div className="woocommerce-plugin-list__plugin">
			{ imageUrl && (
				<div className="woocommerce-plugin-list__plugin-logo">
					<img
						src={ imageUrl }
						alt={ sprintf(
							/* translators: %s = name of the plugin */
							__( '%s logo', 'woocommerce-admin' ),
							name
						) }
					/>
				</div>
			) }
			<div className="woocommerce-plugin-list__plugin-text">
				<Text variant="subtitle.small" as="h4">
					{ name }
				</Text>
				<Text variant="subtitle.small">{ description }</Text>
			</div>
			<div className="woocommerce-plugin-list__plugin-action">
				{ isInstalled && manageUrl && (
					<Button isSecondary href={ getAdminLink( manageUrl ) }>
						{ __( 'Manage', 'woocommmerce-admin' ) }
					</Button>
				) }
				{ ! isInstalled && (
					<Button isSecondary onClick={ installPlugin }>
						{ __( 'Install', 'woocommmerce-admin' ) }
					</Button>
				) }
			</div>
		</div>
	);
};
