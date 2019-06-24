/** @format */
/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Button } from 'newspack-components';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { decodeEntities } from '@wordpress/html-entities';
import { withDispatch } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import { Card, H } from '@woocommerce/components';

/**
 * Internal depdencies
 */
import withSelect from 'wc-api/with-select';
import './style.scss';

class Theme extends Component {
	constructor() {
		super( ...arguments );

		this.onChoose = this.onChoose.bind( this );
		this.openDemo = this.openDemo.bind( this );
	}

	async onChoose( theme ) {
		const { addNotice, goToNextStep, isError, updateProfileItems } = this.props;

		await updateProfileItems( { theme } );

		if ( ! isError ) {
			// @todo This should send profile information to woocommerce.com.
			goToNextStep();
		} else {
			addNotice( {
				status: 'error',
				message: __( 'There was a problem selecting your store theme.', 'woocommerce-admin' ),
			} );
		}
	}

	openDemo() {
		// @todo This should open a theme demo preview.
	}

	render() {
		const { themes } = wcSettings.onboarding;

		return (
			<Fragment>
				<H className="woocommerce-profile-wizard__header-title">
					{ __( 'Choose a theme', 'woocommerce-admin' ) }
				</H>
				<H className="woocommerce-profile-wizard__header-subtitle">
					{ __( 'Your theme determines how your store appears to customers', 'woocommerce-admin' ) }
				</H>
				<div className="woocommerce-profile-wizard__themes">
					{ themes.map( theme => {
						const { image, price, slug, title } = theme;
						const priceValue = Number( decodeEntities( price ).replace( /[^0-9.-]+/g, '' ) );

						return (
							<Card className="woocommerce-profile-wizard__theme" key={ theme.slug }>
								{ image && (
									<img
										alt={ title }
										src={ image }
										className="woocommerce-profile-wizard__theme-image"
									/>
								) }
								<div className="woocommerce-profile-wizard__theme-details">
									<H className="woocommerce-profile-wizard__theme-name">{ title }</H>
									<p className="woocommerce-profile-wizard__theme-price">
										{ priceValue <= 0
											? __( 'Free', 'woocommerce-admin' )
											: sprintf(
													__( '%s per year', 'woocommerce-admin' ),
													decodeEntities( price )
												) }
									</p>
									<div className="woocommerce-profile-wizard__theme-actions">
										<Button isPrimary onClick={ () => this.onChoose( slug ) }>
											{ __( 'Choose', 'woocommerce-admin' ) }
										</Button>
										<Button isDefault onClick={ () => this.openDemo( slug ) }>
											{ __( 'Live Demo', 'woocommerce-admin' ) }
										</Button>
									</div>
								</div>
							</Card>
						);
					} ) }
				</div>
			</Fragment>
		);
	}
}

export default compose(
	withSelect( select => {
		const { getProfileItemsError } = select( 'wc-api' );

		const isError = Boolean( getProfileItemsError() );

		return { isError };
	} ),
	withDispatch( dispatch => {
		const { addNotice, updateProfileItems } = dispatch( 'wc-api' );

		return {
			addNotice,
			updateProfileItems,
		};
	} )
)( Theme );
