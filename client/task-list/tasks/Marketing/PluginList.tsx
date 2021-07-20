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
						isInstalled={ isInstalled }
						slug={ slug }
					/>
				);
			} ) }
		</div>
	);
};
