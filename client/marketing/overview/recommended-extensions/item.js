/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';
import { addQueryArgs } from '@wordpress/url';

/**
 * Internal dependencies
 */
import './style.scss'
import { ProductIcon } from '../../components/';

/**
 * WooCommerce dependencies
 */
import { getSetting } from '@woocommerce/wc-admin-settings';
import { getNewPath, getPersistedQuery } from '@woocommerce/navigation';

class RecommendedExtensionsItem extends Component {
	render() {
		const { title, description, icon, url } = this.props;
		const classNameBase = 'woocommerce-marketing-recommended-extensions-item';

		const { connectNonce } = getSetting( 'marketing', {} );
		const backPath = getNewPath( {} );

		const connect_url = addQueryArgs( url, {
			'wccom-site': getSetting( 'siteUrl' ),
			'wccom-back': backPath,
			'wccom-woo-version': getSetting( 'wcVersion' ),
			'wccom-connect-nonce': connectNonce,
		} );

		return (
			<a href={ connect_url }
				className={ classNameBase }>
				<ProductIcon src={ icon } />

				<div className={ `${ classNameBase }__text` }>
					<h4>{ title }</h4>
					<p>{ description }</p>
				</div>
			</a>
		)
	}
}

RecommendedExtensionsItem.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

export default RecommendedExtensionsItem;
