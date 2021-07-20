/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { Card, CardBody, Spinner } from '@wordpress/components';
import { PLUGINS_STORE_NAME, WCDataSelector } from '@woocommerce/data';
import { useEffect, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
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

export const Marketing: React.FC = () => {
	const [ pluginLists, setPluginLists ] = useState< PluginListProps[] >( [] );
	const [ isFetching, setIsFetching ] = useState( true );
	const { installedPlugins } = useSelect( ( select: WCDataSelector ) => {
		const { getInstalledPlugins } = select( PLUGINS_STORE_NAME );

		return {
			installedPlugins: getInstalledPlugins(),
		};
	} );

	const transformExtensionToPlugin = (
		extension: Extension
	): PluginProps => {
		const { description, image_url, key, name } = extension;
		const slug = key.split( ':' )[ 0 ];
		return {
			description,
			slug,
			imageUrl: image_url,
			isInstalled: installedPlugins.includes( slug ),
			name,
		};
	};

	useEffect( () => {
		apiFetch( {
			path: '/wc-admin/onboarding/free-extensions',
		} )
			.then( ( results: ExtensionList[] ) => {
				if ( results?.length ) {
					const transformedExtensions = results.map( ( list ) => {
						return {
							...list,
							plugins: list.plugins.map( ( extension ) =>
								transformExtensionToPlugin( extension )
							),
						};
					} );
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
				<CardBody>
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
				</CardBody>
			</Card>
		</div>
	);
};
