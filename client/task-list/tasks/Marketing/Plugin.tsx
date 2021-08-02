/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { getAdminLink } from '@woocommerce/wc-admin-settings';
import { Text } from '@woocommerce/experimental';

/**
 * Internal dependencies
 */
import './Plugin.scss';

export type PluginProps = {
	isActive: boolean;
	isBusy?: boolean;
	isDisabled?: boolean;
	isInstalled: boolean;
	description?: string;
	installAndActivate?: ( slug: string ) => void;
	imageUrl?: string;
	manageUrl?: string;
	name: string;
	slug: string;
};

export const Plugin: React.FC< PluginProps > = ( {
	description,
	imageUrl,
	installAndActivate = () => {},
	isActive,
	isBusy,
	isDisabled,
	isInstalled,
	manageUrl,
	name,
	slug,
} ) => {
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
				{ isActive && manageUrl && (
					<Button
						disabled={ isDisabled }
						isBusy={ isBusy }
						isSecondary
						href={ getAdminLink( manageUrl ) }
					>
						{ __( 'Manage', 'woocommmerce-admin' ) }
					</Button>
				) }
				{ isInstalled && ! isActive && (
					<Button
						disabled={ isDisabled }
						isBusy={ isBusy }
						isSecondary
						onClick={ () => installAndActivate( slug ) }
					>
						{ __( 'Activate', 'woocommmerce-admin' ) }
					</Button>
				) }
				{ ! isInstalled && (
					<Button
						disabled={ isDisabled }
						isBusy={ isBusy }
						isSecondary
						onClick={ () => installAndActivate( slug ) }
					>
						{ __( 'Get started', 'woocommmerce-admin' ) }
					</Button>
				) }
			</div>
		</div>
	);
};
