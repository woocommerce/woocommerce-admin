/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { withSelect, useSelect, useDispatch } from '@wordpress/data';
import PropTypes from 'prop-types';

/**
 * WooCommerce dependencies
 */
import { Card } from '@woocommerce/components';
import { PLUGINS_STORE_NAME } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import './style.scss'
import InstalledExtensionRow from './row';
import { STORE_KEY } from '../../data/constants';

const InstalledExtensions = ( props ) => {
	const { plugins } = props;

	const isActivatingPlugins = useSelect( ( select ) => {
		return select( PLUGINS_STORE_NAME ).isPluginsRequesting( 'activatePlugins' );
	} );
	const { activatePlugins } = useDispatch( PLUGINS_STORE_NAME );
	const { createNotice } = useDispatch( 'core/notices' );

	const activatePlugin = async ( pluginSlug ) => {
		const activate = await activatePlugins( [ pluginSlug ] );
		if ( activate.status !== 'success' ) {
			createNotice( 'error', __( 'There was an error trying to activate the extension.', 'woocommerce-admin' ) );
		}
	}

	if ( plugins.length === 0 ) {
		return null
	}

	return (
		<Card
			title={ __( 'Installed marketing extensions', 'woocommerce-admin' ) }
			className="woocommerce-marketing-installed-extensions-card"
		>
			{ plugins.map( ( plugin ) => {
				return (
					<InstalledExtensionRow
						key={ plugin.slug }
						{ ...plugin }
						activatePlugin={ () => activatePlugin( plugin.slug ) }
						isLoading={ isActivatingPlugins }
					/>
				);
			} ) }
		</Card>
	);
}

InstalledExtensions.propTypes = {
	/**
	 * Array of installed plugin objects.
	 */
	plugins: PropTypes.arrayOf( PropTypes.object ).isRequired,
};

export default compose(
	withSelect( ( select ) => {
		const { getInstalledPlugins } = select( STORE_KEY );

		return {
			plugins: getInstalledPlugins(),
		};
	} )
)( InstalledExtensions );
