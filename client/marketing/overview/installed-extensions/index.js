/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { withDispatch } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import { Card } from '@woocommerce/components';
import { getSetting } from '@woocommerce/wc-admin-settings';

/**
 * Internal dependencies
 */
import './style.scss'
import InstalledExtensionRow from './row';
import { activatePlugin, fetchPluginData } from './store';

class InstalledExtensions extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			extensions: [],
		};
	}

	componentDidMount() {
		const { installedExtensions } = getSetting( 'marketing', {} );

		this.setState( { extensions: installedExtensions } )
	}

	activatePlugin( pluginSlug ) {
		const { createNotice } = this.props;
		const extensions = [ ...this.state.extensions ];

		// Set extension as loading
		const index = extensions.findIndex( ( extension ) => extension.slug === pluginSlug );
		extensions[ index ].isLoading = true;

		this.setState( { extensions } );

		activatePlugin( pluginSlug )
			.then( ( response ) => {
				if ( response.status === 'success' ) {
					this.updatePluginData();
					createNotice( 'success',
						__( 'The extension has been successfully activated.', 'woocommerce-admin' )
					);
				} else {
					throw new Error();
				}
			} )
			.catch( () => {
				createNotice( 'success',
					__( 'There was an error trying to activate the extension.', 'woocommerce-admin' )
				);
			} );
	}

	updatePluginData() {
		fetchPluginData()
			.then( ( response ) => {
				if ( response ) {
					this.setState( { extensions: response } );
				}
			} );
	}

	render() {
		const { extensions } = this.state;

		if ( extensions.length === 0 ) {
			return null
		}

		return (
			<Card
				title={ __( 'Installed marketing extensions', 'woocommerce-admin' ) }
				className="woocommerce-marketing-installed-extensions-card"
			>
				{ extensions.map( ( extension ) => {
					return (
						<InstalledExtensionRow
							key={ extension.slug }
							{ ...extension }
							activatePlugin={ () => this.activatePlugin( extension.slug ) }
						/>
					);
				} ) }
			</Card>
		)
	}
}

export default compose(
	withDispatch( ( dispatch ) => {
		const { createNotice } = dispatch( 'core/notices' );

		return {
			createNotice,
		};
	} )
)( InstalledExtensions );
