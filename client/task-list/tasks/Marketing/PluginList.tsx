/**
 * External dependencies
 */
import { Text } from '@woocommerce/experimental';

/**
 * Internal dependencies
 */
import { Plugin, PluginProps } from './Plugin';
import './PluginList.scss';

export type PluginListProps = {
	key: string;
	installAndActivate?: ( slug: string ) => void;
	plugins?: PluginProps[];
	title?: string;
};

export const PluginList: React.FC< PluginListProps > = ( {
	installAndActivate = () => {},
	plugins = [],
	title,
} ) => {
	return (
		<div className="woocommerce-plugin-list">
			{ title && (
				<div className="woocommerce-plugin-list__title">
					<Text variant="sectionheading" as="h3">
						{ title }
					</Text>
				</div>
			) }
			{ plugins.map( ( plugin ) => {
				const {
					description,
					imageUrl,
					isActive,
					isInstalled,
					manageUrl,
					slug,
					name,
				} = plugin;
				return (
					<Plugin
						key={ slug }
						description={ description }
						manageUrl={ manageUrl }
						name={ name }
						imageUrl={ imageUrl }
						installAndActivate={ installAndActivate }
						isActive={ isActive }
						isInstalled={ isInstalled }
						slug={ slug }
					/>
				);
			} ) }
		</div>
	);
};
