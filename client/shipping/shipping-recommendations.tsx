/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';
import { CardFooter, Button } from '@wordpress/components';
import { useState, Children } from '@wordpress/element';
import { Text } from '@woocommerce/experimental';
import { PLUGINS_STORE_NAME } from '@woocommerce/data';
import ExternalIcon from 'gridicons/dist/external';

/**
 * Internal dependencies
 */
import './shipping-recommendations.scss';
import { createNoticesFromResponse } from '../lib/notices';
import { DismissableList, DismissableListHeading } from './dismissable-list';
import WooCommerceShippingItem from './woocommerce-shipping-item';

const useInstallPlugin = () => {
	const [ pluginsBeingSetup, setPluginsBeingSetup ] = useState<
		Array< string >
	>( [] );

	const { installAndActivatePlugins } = useDispatch( PLUGINS_STORE_NAME );

	const handlePluginInstallation = (
		slugs: string[]
	): PromiseLike< void > => {
		if ( pluginsBeingSetup.length > 0 ) {
			return Promise.resolve();
		}

		setPluginsBeingSetup( slugs );

		return installAndActivatePlugins( slugs )
			.then( () => {
				setPluginsBeingSetup( [] );
			} )
			.catch( ( response: { errors: Record< string, string > } ) => {
				createNoticesFromResponse( response );
				setPluginsBeingSetup( [] );

				return Promise.reject();
			} );
	};

	return [ pluginsBeingSetup, handlePluginInstallation ] as const;
};

const ShippingRecommandationsList: React.FC = ( { children } ) => {
	const DISMISS_OPTION =
		'woocommerce_setting_shipping_recommendations_hidden';

	return (
		<DismissableList dismissOptionName={ DISMISS_OPTION }>
			<DismissableListHeading dismissOptionName={ DISMISS_OPTION }>
				<Text variant="title.small" as="p" size="20" lineHeight="28px">
					{ __(
						'Recommended shipping solutions',
						'woocommerce-admin'
					) }
				</Text>
				<Text
					className="woocommerce-recommended-shipping__header-heading"
					variant="caption"
					as="p"
					size="12"
					lineHeight="16px"
				>
					{ __(
						'We recommend adding one of the following shipping extensions to your store. The extension will be installed and activated for you when you click "Get started".',
						'woocommerce-admin'
					) }
				</Text>
			</DismissableListHeading>
			<ul className="woocommerce-list">
				{ Children.map( children, ( item ) => (
					<li className="woocommerce-list__item">{ item }</li>
				) ) }
			</ul>
			<CardFooter>
				<Button
					href="https://woocommerce.com/product-category/woocommerce-extensions/shipping-methods/?utm_source=shipping_recommendations"
					target="_blank"
					isTertiary
				>
					{ __( 'See more options', 'woocommerce-admin' ) }
					<ExternalIcon size={ 18 } />
				</Button>
			</CardFooter>
		</DismissableList>
	);
};

const ShippingRecommendations: React.FC = () => {
	const [ pluginsBeingSetup, handleSetup ] = useInstallPlugin();

	const activePlugins = useSelect< string[] >( ( select ) =>
		select( PLUGINS_STORE_NAME ).getActivePlugins()
	);

	if ( activePlugins.includes( 'woocommerce-services' ) ) {
		return null;
	}

	return (
		<ShippingRecommandationsList>
			<WooCommerceShippingItem
				pluginsBeingSetup={ pluginsBeingSetup }
				onSetupClick={ handleSetup }
			/>
		</ShippingRecommandationsList>
	);
};

export default ShippingRecommendations;
