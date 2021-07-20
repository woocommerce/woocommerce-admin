/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { Card, CardHeader, Spinner } from '@wordpress/components';
import { PLUGINS_STORE_NAME, WCDataSelector } from '@woocommerce/data';
import { Text } from '@woocommerce/experimental';
import { useEffect, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import './Marketing.scss';
import { PluginList, PluginListProps } from './PluginList';
import { PluginProps } from './Plugin';

type ExtensionList = {
	key: string;
	title: string;
	plugins: Extension[];
};

type Extension = {
	description: string;
	key: string;
	image_url: string;
	manage_url: string;
	name: string;
	slug: string;
};

const ALLOWED_PLUGIN_LISTS = [ 'reach', 'grow' ];

export const Marketing: React.FC = () => {
	const [ pluginLists, setPluginLists ] = useState< PluginListProps[] >( [] );
	const [ isFetching, setIsFetching ] = useState( true );
	const { activePlugins, installedPlugins } = useSelect(
		( select: WCDataSelector ) => {
			const { getActivePlugins, getInstalledPlugins } = select(
				PLUGINS_STORE_NAME
			);

			return {
				activePlugins: getActivePlugins(),
				installedPlugins: getInstalledPlugins(),
			};
		}
	);

	const transformExtensionToPlugin = (
		extension: Extension
	): PluginProps => {
		const { description, image_url, key, manage_url, name } = extension;
		const slug = key.split( ':' )[ 0 ];
		return {
			description,
			slug,
			imageUrl: image_url,
			isActive: activePlugins.includes( slug ),
			isInstalled: installedPlugins.includes( slug ),
			manageUrl: manage_url,
			name,
		};
	};

	useEffect( () => {
		apiFetch( {
			path: '/wc-admin/onboarding/free-extensions',
		} )
			.then( ( results: ExtensionList[] ) => {
				if ( results?.length ) {
					const transformedExtensions = results
						.map( ( list ) => {
							return {
								...list,
								plugins: list.plugins.map( ( extension ) =>
									transformExtensionToPlugin( extension )
								),
							};
						} )
						.filter( ( list ) =>
							ALLOWED_PLUGIN_LISTS.includes( list.key )
						);
					setPluginLists( transformedExtensions );
				}
				setIsFetching( false );
			} )
			.catch( () => {
				// @todo Handle error checking.
				setIsFetching( false );
			} );
	}, [] );

	if ( isFetching ) {
		return <Spinner />;
	}

	return (
		<div className="woocommerce-task-marketing">
			<Card className="woocommerce-task-card">
				<CardHeader>
					<Text
						variant="title.small"
						as="h2"
						className="woocommerce-task-card__title"
					>
						{ __(
							'Recommended marketing extensions',
							'woocommerce-admin'
						) }
					</Text>
					<Text>
						{ __(
							'We recommend adding one of the following marketing tools for your store. The extension will be installed and activated for you when you click "Get started".',
							'woocommerce-admin'
						) }
					</Text>
				</CardHeader>
				{ pluginLists.map( ( list ) => {
					const { key, title, plugins } = list;
					return (
						<PluginList
							key={ key }
							title={ title }
							plugins={ plugins }
						/>
					);
				} ) }
			</Card>
		</div>
	);
};
