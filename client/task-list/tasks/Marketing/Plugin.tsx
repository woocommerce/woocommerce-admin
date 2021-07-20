/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { PLUGINS_STORE_NAME } from '@woocommerce/data';
import { Text } from '@woocommerce/experimental';
import { useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { createNoticesFromResponse } from '~/lib/notices';

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
				<img
					src={ imageUrl }
					alt={ sprintf(
						/* translators: %s = name of the plugin */
						__( '%s logo', 'woocommerce-admin' ),
						name
					) }
				/>
			) }
			<Text variant="title.small" size="20" lineHeight="28px">
				{ name }
			</Text>
			<Text variant="title.small" size="20" lineHeight="28px">
				{ description }
			</Text>
			{ isInstalled && manageUrl && (
				<Button isPrimary href={ manageUrl }>
					{ __( 'Manage', 'woocommmerce-admin' ) }
				</Button>
			) }
			{ ! isInstalled && (
				<Button isPrimary onClick={ installPlugin }>
					{ __( 'Install', 'woocommmerce-admin' ) }
				</Button>
			) }
		</div>
	);
};
