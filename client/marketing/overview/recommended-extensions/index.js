/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { Component, Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Spinner } from '@wordpress/components';

/**
 * WooCommerce dependencies
 */
import { Card } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import { WC_ADMIN_NAMESPACE } from '../../../wc-api/constants';
import './style.scss'

class RecommendedExtensions extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			isLoading: true,
			extensions: [],
		}
	}

	componentDidMount() {
		this.fetchExtensions();
	}

	async fetchExtensions() {
		try {
			const response = await apiFetch( {
				path: `${ WC_ADMIN_NAMESPACE }/marketing/overview/recommended`,
				method: 'GET',
			} );
			if ( response ) {
				this.setState( {
					isLoading: false,
					extensions: response,
				} );
				return;
			}
			throw new Error();
		} catch ( err ) {
			// todo handle error
		}
	}

	render() {
		const { extensions, isLoading } = this.state;

		return (
			<Card
				title={ __( 'Recommended extensions', 'woocommerce-admin' ) }
				description={ __( 'Great marketing requires the right tools. Take your marketing to the next level with our recommended marketing extensions.', 'woocommerce-admin' ) }
				className="woocommerce-marketing-recommended-extensions-card"
			>
				<Fragment>
					{ isLoading && <Spinner /> }
					{ isLoading || (
						<div className="woocommerce-marketing-recommended-extensions-card__items">
							{ isLoading || extensions.map( ( extension ) => (
								<div key={ extension.product }
									className="woocommerce-marketing-recommended-extensions-card__item">
									<h4>{ extension.title }</h4>
									<p>{ extension.description }</p>
								</div>
							) ) }
						</div>
					) }
				</Fragment>
			</Card>
		)
	}
}

export default RecommendedExtensions;
