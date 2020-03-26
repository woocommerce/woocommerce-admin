/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { Spinner } from '@wordpress/components';
import classnames from 'classnames';
import { withDispatch, withSelect } from '@wordpress/data';
import PropTypes from 'prop-types';

/**
 * WooCommerce dependencies
 */
import { Card } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import './style.scss'
import RecommendedExtensionsItem from './item';
import { STORE_KEY } from '../../data/constants';

class RecommendedExtensions extends Component {
	render() {
		const { isLoading, extensions } = this.props;

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

RecommendedExtensions.propTypes = {
	/**
	 * Array of recommended extensions.
	 */
	extensions: PropTypes.arrayOf( PropTypes.object ).isRequired,
	/**
	 * Whether the card is loading.
	 */
	isLoading: PropTypes.bool.isRequired,
};

export default compose(
	withSelect( ( select ) => {
		const { getRecommendedPlugins, isResolving } = select( STORE_KEY );

		return {
			extensions: getRecommendedPlugins(),
			isLoading: isResolving( 'getRecommendedPlugins' ),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { createNotice } = dispatch( 'core/notices' );

		return {
			createNotice,
		};
	} )
)( RecommendedExtensions );

