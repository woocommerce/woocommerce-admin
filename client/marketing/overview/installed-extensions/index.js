/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import { Card } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import './style.scss'
import InstalledExtensionRow from './row';
import { STORE_KEY } from '../../data-store/constants';

class InstalledExtensions extends Component {

	activatePlugin( pluginSlug ) {
		const { activateInstalledPlugin } = this.props;
		activateInstalledPlugin( pluginSlug );
	}

	render() {
		const { plugins, activatingPlugins } = this.props;

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
							activatePlugin={ () => this.activatePlugin( plugin.slug ) }
							isLoading={ activatingPlugins.includes( plugin.slug ) }
						/>
					);
				} ) }
			</Card>
		)
	}
}

export default compose(
	withSelect( ( select ) => {
		const { getInstalledPlugins, getActivatingPlugins } = select( STORE_KEY );

		return {
			plugins: getInstalledPlugins(),
			activatingPlugins: getActivatingPlugins(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { activateInstalledPlugin } = dispatch( STORE_KEY );

		return {
			activateInstalledPlugin,
		};
	} )
)( InstalledExtensions );
