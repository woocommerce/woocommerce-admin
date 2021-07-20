/**
 * External dependencies
 */
import { Text } from '@woocommerce/experimental';

/**
 * Internal dependencies
 */
import { Plugin, PluginProps } from './Plugin';

export type PluginListProps = {
	key: string;
	title?: string;
	plugins?: PluginProps[];
};

export const PluginList: React.FC< PluginListProps > = ( {
	plugins = [],
	title,
} ) => {
	return (
		<div className="woocommerce-plugin-list">
			{ title && (
				<Text variant="title.small" size="20" lineHeight="28px">
					{ title }
				</Text>
			) }
			{ plugins.map( ( plugin ) => {
				const {
					description,
					imageUrl,
					isInstalled,
					slug,
					name,
				} = plugin;
				return (
					<Plugin
						key={ slug }
						description={ description }
						name={ name }
						imageUrl={ imageUrl }
						isInstalled={ isInstalled }
						slug={ slug }
					/>
				);
			} ) }
		</div>
	);
};
