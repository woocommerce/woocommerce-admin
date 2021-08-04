/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';
import { Button, ExternalLink } from '@wordpress/components';
import { Pill } from '@woocommerce/components';
import { PLUGINS_STORE_NAME } from '@woocommerce/data';
import { getAdminLink } from '@woocommerce/wc-admin-settings';

const WooCommerceServicesItem: React.FC< {
	pluginsBeingSetup: Array< string >;
	onSetupClick: ( slugs: string[] ) => PromiseLike< void >;
} > = ( { onSetupClick, pluginsBeingSetup } ) => {
	const { createSuccessNotice } = useDispatch( 'core/notices' );

	const isSiteConnectedToJetpack = useSelect( ( select ) =>
		select( PLUGINS_STORE_NAME ).isJetpackConnected()
	);

	const handleSetupClick = () => {
		onSetupClick( [ 'woocommerce-services' ] ).then( () => {
			const actions = [];
			if ( ! isSiteConnectedToJetpack ) {
				actions.push( {
					url: getAdminLink( 'plugins.php' ),
					label: __(
						'Finish the setup by connecting your store to Jetpack.',
						'woocommerce-admin'
					),
				} );
			}

			createSuccessNotice(
				__(
					'🎉 WooCommerce Shipping is installed!',
					'woocommerce-admin'
				),
				{
					actions,
				}
			);
		} );
	};

	return (
		<div className="woocommerce-list__item-inner">
			<div className="woocommerce-list__item-before">
				<img
					src="https://woocommerce.com/wp-content/plugins/wccom-plugins/marketplace-suggestions/icons/woocommerce.svg"
					alt=""
				/>
			</div>
			<div className="woocommerce-list__item-text">
				<span className="woocommerce-list__item-title">
					{ __( 'Woocommerce Shipping', 'woocommerce-admin' ) }
					<Pill>{ __( 'Recommended', 'woocommerce-admin' ) }</Pill>
				</span>
				<span className="woocommerce-list__item-content">
					{ __(
						'Print USPS and DHL labels straight from your WooCommerce dashboard and save on shipping.',
						'woocommerce-admin'
					) }{ ' ' }
					<ExternalLink href="https://woocommerce.com/woocommerce-shipping/">
						{ __( 'Learn more', 'woocommerce-admin' ) }
					</ExternalLink>
				</span>
			</div>
			<div className="woocommerce-list__item-after">
				<Button
					isSecondary
					onClick={ handleSetupClick }
					isBusy={ pluginsBeingSetup.includes(
						'woocommerce-services'
					) }
					disabled={ pluginsBeingSetup.length > 0 }
				>
					{ __( 'Get started', 'woocommerce-admin' ) }
				</Button>
			</div>
		</div>
	);
};

export default WooCommerceServicesItem;
