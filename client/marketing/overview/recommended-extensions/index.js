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
import PlaceholderImg from './hubspot.svg';

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
		const classNameBase = 'woocommerce-marketing-recommended-extensions-card';

		return (
			<Card
				title={ __( 'Recommended extensions', 'woocommerce-admin' ) }
				description={ __( 'Great marketing requires the right tools. Take your marketing to the next level with our recommended marketing extensions.', 'woocommerce-admin' ) }
				className={ classNameBase }
			>
				<Fragment>
					{ isLoading && <Spinner /> }
					{ isLoading || (
						<div className={ `${ classNameBase }__items` }>
							{ isLoading || extensions.map( ( extension ) => (
								<a key={ extension.product }
									href="#"
									className={ `${ classNameBase }__item` }>
									<img src={ PlaceholderImg } className={ `${ classNameBase }__item-img` } />
									<div className={ `${ classNameBase }__item-text` }>
										<h4>{ extension.title }</h4>
										<p>{ extension.description }</p>
									</div>
								</a>
							) ) }
						</div>
					) }
				</Fragment>
			</Card>
		)
	}
}

export default RecommendedExtensions;
