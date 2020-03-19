/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * WooCommerce dependencies
 */
import { Card } from '@woocommerce/components';
import { getSetting } from '@woocommerce/wc-admin-settings';
import InstalledExtensionRow from "./installed-extension-row";

class InstalledExtensions extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			extensions: [],
		}
	}

	componentDidMount() {
		const { installedExtensions } = getSetting( 'marketing', {} );

		this.setState( { extensions: installedExtensions } )
	}

	render() {
		const { extensions } = this.state;

		return (
			<Card
				title={ __( 'Installed marketing extensions', 'woocommerce-admin' ) }
				className="woocommerce-marketing-installed-extensions-card"
			>
				{ extensions.map( ( extension ) => {
					return <InstalledExtensionRow key={ extension.slug } { ...extension } />
				} ) }
			</Card>
		)
	}
}

export default InstalledExtensions;
