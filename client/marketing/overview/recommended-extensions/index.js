/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { Component, Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Spinner } from '@wordpress/components';
import classnames from 'classnames';

/**
 * WooCommerce dependencies
 */
import { Card } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import { WC_ADMIN_NAMESPACE } from '../../../wc-api/constants';
import './style.scss'
import RecommendedExtensionsItem from './item';

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
			console.log( err );
			// todo handle error
		}
	}

	render() {
		const { extensions, isLoading } = this.state;

		if ( extensions.length === 0 && ! isLoading ) {
			return null;
		}

		return (
			<Card
				title={ __( 'Recommended extensions', 'woocommerce-admin' ) }
				description={ __( 'Great marketing requires the right tools. Take your marketing to the next level with our recommended marketing extensions.', 'woocommerce-admin' ) }
				className="woocommerce-marketing-recommended-extensions-card"
			>
				<Fragment>
					{ isLoading && <Spinner /> }
					{ isLoading || (
						<div className={ classnames( {
							'woocommerce-marketing-recommended-extensions-card__items': true,
							'woocommerce-marketing-recommended-extensions-card__items--1-col': extensions.length === 1,
							'woocommerce-marketing-recommended-extensions-card__items--2-col': extensions.length === 2,
							'woocommerce-marketing-recommended-extensions-card__items--4-col': extensions.length === 4,
						} ) }>
							{ isLoading || extensions.map( ( extension ) => (
								<RecommendedExtensionsItem
									key={ extension.product }
									{ ...extension }
								/>
							) ) }
						</div>
					) }
				</Fragment>
			</Card>
		)
	}
}

export default RecommendedExtensions;
