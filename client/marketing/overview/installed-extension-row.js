/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';

class InstalledExtensionRow extends Component {

	getLinks() {}

	getActiveButton() {
		return (
			<Button
				isDefault
			>
				{ __( 'Activate', 'woocommerce-admin' ) }
			</Button>
		)
	}

	getFinishSetupButton() {
		return (
			<Button
				isDefault
			>
				{ __( 'Finish setup', 'woocommerce-admin' ) }
			</Button>
		)
	}

	render() {
		const { name, slug, description, status } = this.props;
		let actions = null;

		switch ( status ) {
			case 'installed':
				actions = this.getActiveButton();
				break;
			case 'activated':
				actions = this.getFinishSetupButton();
				break;
			case 'configured':
				actions = this.getLinks();
				break;
		}

		return (
			<div className="woocommerce-marketing-installed-extensions-card__item" key={ slug }>
				<div className="woocommerce-marketing-installed-extensions-card__item-actions">
					{ actions }
				</div>
				<h4>{ name }</h4>
				<p>{ description }</p>
			</div>
		)
	}
}

InstalledExtensionRow.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
};

export default InstalledExtensionRow;
